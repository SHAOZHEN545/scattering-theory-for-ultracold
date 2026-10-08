import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { parse } from "parse5"

// Isolated native Markdown fixtures; never replace the production output.
const workspace = process.cwd()
const content = fs.mkdtempSync(path.join(workspace, "Scattering theory notes", "Link check "))
fs.mkdirSync(path.join(workspace, ".website-qa"), { recursive: true })
const output = fs.mkdtempSync(path.join(workspace, ".website-qa", "links-"))
function write(file, source) {
  const target = path.join(content, file)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, source)
}
function walk(node, predicate) {
  return [predicate(node) ? node : null, ...(node.childNodes ?? []).flatMap((child) => walk(child, predicate))].filter(Boolean)
}
function attrs(node) {
  return Object.fromEntries((node.attrs ?? []).map(({ name, value }) => [name, value]))
}
function text(node) {
  return node.value ?? (node.childNodes ?? []).map(text).join("")
}

try {
  write("Target.md", "WHOLE_NOTE_MARKER\n\n## Embedded heading\n\nHEADING_MARKER with $E=\\hbar\\omega$.\n\nBLOCK_MARKER. ^test-block\n\n![[Nested/Helper]]\n\n## Other heading\n\nOTHER_HEADING_MARKER\n")
  write("Nested/Helper.md", "NESTED_EMBED_MARKER\n")
  write("Nested/Source.md", "[[Target|An aliased link]]\n\n[[Target#Embedded heading|Heading link]]\n\n[[Target#^test-block|Block link]]\n\n![[Target]]\n\n![[Target#Embedded heading]]\n\n![[Target#^test-block]]\n")
  write("Cycle A.md", "![[Cycle B]]\n")
  write("Cycle B.md", "![[Cycle A]]\n")
  const build = spawnSync(process.execPath, ["quartz/bootstrap-cli.mjs", "build", "-d", content, "-o", output], { cwd: workspace, encoding: "utf8" })
  assert.equal(build.status, 0, build.stdout + build.stderr)
  const source = parse(fs.readFileSync(path.join(output, "Nested/Source.html"), "utf8"))
  const article = walk(source, (node) => node.tagName === "article")[0]
  const embeds = (article.childNodes ?? []).filter((node) => attrs(node).class?.includes("transclude"))
  assert.equal(embeds.length, 3)
  assert.match(text(embeds[0]), /WHOLE_NOTE_MARKER/)
  assert.match(text(embeds[0]), /NESTED_EMBED_MARKER/)
  assert.match(text(embeds[1]), /HEADING_MARKER/)
  assert.doesNotMatch(text(embeds[1]), /OTHER_HEADING_MARKER|WHOLE_NOTE_MARKER/)
  assert.match(text(embeds[2]), /BLOCK_MARKER/)
  assert.doesNotMatch(text(embeds[2]), /HEADING_MARKER/)
  assert.doesNotMatch(text(article), /Circular transclusion detected/)
  assert.ok(walk(embeds[1], (node) => node.tagName === "mjx-container").length)
  const links = walk(article, (node) => node.tagName === "a").map(attrs)
  assert.ok(links.some((link) => link.href === "../Target#embedded-heading"))
  assert.ok(links.some((link) => link.href === "../Target#test-block"))
  assert.ok(links.some((link) => link.href && new URL(link.href, "https://example.com/project/Nested/Source").pathname === "/project/Nested/Helper"))
  assert.match(fs.readFileSync(path.join(output, "Cycle-A.html"), "utf8"), /Circular transclusion detected/)
  console.log("Verified aliased links, heading/block anchors, repeated and nested note embeds, embedded math, relative URLs and circular-embed protection.")
} finally {
  for (const directory of [content, output]) {
    assert.ok(directory.startsWith(workspace + path.sep))
    fs.rmSync(directory, { recursive: true, force: true })
  }
}
