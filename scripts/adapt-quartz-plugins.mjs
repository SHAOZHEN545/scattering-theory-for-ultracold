import fs from "node:fs"
import path from "node:path"
import { buildSync } from "esbuild"
import { runInNewContext } from "node:vm"

// The pinned Quartz 5 plugins request /static/... from the domain root. Use
// Quartz's existing shared fetchData promise, which resolves the vault root
// correctly on GitHub project Pages and for notes inside future subfolders.
const replacement = "Promise.resolve({json:()=>fetchData})"
const marker = "quartz-project-pages-adapter"
const sharedUrls = `
import { getFullSlug as quartzCurrentSlug, resolveRelative as quartzRelativeUrl } from "@quartz-community/utils";
function quartzNoteUrl(slug) {
  return new URL(quartzRelativeUrl(quartzCurrentSlug(window), slug), window.location.href).toString();
}
`
function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name)
    return entry.isDirectory() ? files(file) : [file]
  })
}
for (const plugin of ["explorer", "search", "graph"]) {
  const sourceFile = path.resolve(`.quartz/plugins/${plugin}/src/components/scripts/${plugin}.inline.ts`)
  let source = fs.readFileSync(sourceFile, "utf8").replaceAll('fetch("/static/contentIndex.json")', replacement)
  if (plugin === "search") {
    source = source.replace('new URL("/" + slug, window.location.origin).toString()', 'quartzNoteUrl(slug)')
      .replace('itemTile.href = "/" + item.slug', 'itemTile.href = quartzNoteUrl(item.slug)')
  } else if (plugin === "explorer") {
    source = source.replace('folderLink.href = "/" + (folderHref || "")', 'folderLink.href = quartzNoteUrl(folderHref || "index")')
      .replace('link.href = "/" + node.data.slug', 'link.href = quartzNoteUrl(node.data.slug)')
      .replace('const currentSlug = (e.detail?.url || "").replace(/^\\/+/, "");', 'const currentSlug = quartzCurrentSlug(window);')
      .replace('link.textContent = node.displayName || node.slugSegment;', 'link.textContent = node.displayName || node.slugSegment; link.title = link.textContent; link.setAttribute("aria-label", link.textContent);')
      .replace('if (folderTitle) folderTitle.textContent = node.displayName || node.slugSegment;', 'if (folderTitle) { folderTitle.textContent = node.displayName || node.slugSegment; folderTitle.title = folderTitle.textContent; }')
  } else {
    source = source.replaceAll('getFullSlugFromUrl()', 'quartzCurrentSlug(window)')
      .replaceAll('window.location.href = target', 'window.location.href = quartzNoteUrl(target)')
  }
  const built = buildSync({
    stdin: { contents: sharedUrls + source, loader: "ts", resolveDir: path.dirname(sourceFile) },
    write: false, bundle: true, minify: true, platform: "browser", format: "esm", target: "es2020",
  }).outputFiles[0].text + `\n/* ${marker} */`
  let supported = 0
  for (const file of files(`.quartz/plugins/${plugin}/dist`).filter((file) => file.endsWith(".js"))) {
    const original = fs.readFileSync(file, "utf8")
    // Replace only the bundled inline-script string; retain the official
    // components, markup and styles. No Markdown or rendering logic is changed.
    const adapted = original.replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g, (literal) => {
      let value
      // esbuild also emits JavaScript-only string escapes such as \xNN.
      try { value = runInNewContext(literal, {}, { timeout: 100 }) } catch { return literal }
      if (value.includes(marker) || (value.includes("document.addEventListener") &&
          (value.includes("/static/contentIndex.json") || value.includes(replacement)))) {
        supported++
        return JSON.stringify(built)
      }
      return literal
    })
    if (adapted !== original) fs.writeFileSync(file, adapted)
  }
  if (!supported) throw new Error(`Quartz ${plugin} compatibility adapter no longer matches the pinned plugin`)
}
console.log("Quartz explorer, search and graph use native relative URLs and the shared content index on project Pages.")

// Native Obsidian block IDs on display math: `$$ … $$` followed by a line
// `^eq-name`. The pinned plugin puts the ID on the math element, which MathJax
// later replaces, and keeps "^" in same-page links. Wrap the equation so the ID
// survives, drop the emptied ID paragraph, and strip "^" from "#^id" links.
const blockMarker = "/* quartz-math-block-id-adapter */"
function patch(file, edits) {
  let source = fs.readFileSync(file, "utf8")
  if (source.includes(blockMarker)) return
  for (const [from, to] of edits) {
    if (!source.includes(from)) throw new Error(`Quartz block-ID adapter no longer matches ${file}`)
    source = source.replace(from, to)
  }
  fs.writeFileSync(file, source + `\n${blockMarker}\n`)
}
patch(path.resolve(".quartz/plugins/obsidian-flavored-markdown/dist/index.js"), [
  [`var applyBlockId = (node, blockId, blocks) => {
  if (!node.properties) {`, `var applyBlockId = (node, blockId, blocks) => {
  const mathChild = node.tagName === "pre" && node.children?.find((child) => child.tagName === "code");
  const mathClass = (node.properties?.className ?? []).concat(mathChild?.properties?.className ?? []);
  if (mathClass.includes("math-display") || mathClass.includes("language-math")) {
    const inner = { ...node };
    node.tagName = "div";
    node.properties = { className: ["math-block"] };
    node.children = [inner];
  }
  if (!node.properties) {`],
  [`            if (isElement(sibling)) {
              applyBlockId(sibling, blockId, blocks);
              return;
            }`, `            if (isElement(sibling)) {
              applyBlockId(sibling, blockId, blocks);
              if (children.length === 0 && typeof index2 === "number") {
                parent.children.splice(index2, 1);
                return index2;
              }
              return;
            }`],
])
patch(path.resolve(".quartz/plugins/crawl-links/dist/index.js"), [
  [`const isInternal = !(isAbsoluteUrlWithOptions(dest, { httpOnly: false }) || dest.startsWith("#"));`,
   `if (/^#(\\^|%5E)/i.test(dest)) dest = node.properties.href = dest.replace(/^#(\\^|%5E)/i, "#");
                const isInternal = !(isAbsoluteUrlWithOptions(dest, { httpOnly: false }) || dest.startsWith("#"));`],
])
console.log("Quartz block IDs on display math survive MathJax, and same-page block links resolve.")
