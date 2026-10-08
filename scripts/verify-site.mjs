import fs from "node:fs"
import path from "node:path"
import { parse } from "parse5"
import { slugifyFilePath } from "@quartz-community/utils"
import yaml from "js-yaml"
import matter from "gray-matter"
import { minimatch } from "minimatch"

const output = path.resolve("public")
const content = path.resolve("Scattering theory notes")
const errors = []
const pages = new Map()
const config = yaml.load(fs.readFileSync("quartz.config.yaml", "utf8"))
const base = new URL(`https://${config.configuration.baseUrl}/`)

function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name)
    return entry.isDirectory() ? files(file) : [file]
  })
}

function walk(node, fn) {
  fn(node)
  for (const child of node.childNodes ?? []) walk(child, fn)
}

for (const file of files(output).filter((file) => file.endsWith(".html"))) {
  const html = fs.readFileSync(file, "utf8")
  const ids = new Set()
  const refs = []
  let math = 0
  let articleTitle = false
  walk(parse(html), (node) => {
    const attrs = Object.fromEntries((node.attrs ?? []).map((attr) => [attr.name, attr.value]))
    if (attrs.id) ids.add(attrs.id)
    if (node.tagName === "mjx-container") math++
    if (node.tagName === "h1" && attrs.class?.split(" ").includes("article-title")) articleTitle = true
    if (node.tagName === "merror" || "data-mjx-error" in attrs) {
      errors.push(`${path.relative(output, file)}: MathJax error`)
    }
    if (["a", "link"].includes(node.tagName) && attrs.href) refs.push(attrs.href)
    if (["img", "script"].includes(node.tagName) && attrs.src) refs.push(attrs.src)
    if (node.tagName === "a" && attrs.class?.split(" ").includes("broken")) {
      errors.push(`${path.relative(output, file)}: broken link ${attrs.href}`)
    }
  })
  pages.set(file, { ids, refs, math, articleTitle })
}

let checked = 0
for (const [file, { refs }] of pages) {
  const current = new URL(path.relative(output, file).split(path.sep).join("/"), base)
  for (const ref of refs) {
    const url = new URL(ref, current)
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) continue
    const relative = decodeURIComponent(url.pathname.slice(base.pathname.length))
    const target = path.resolve(output, relative || "index.html")
    if (!target.startsWith(output + path.sep)) {
      errors.push(`${file}: link outside output ${ref}`)
      continue
    }
    const resolved = [target, `${target}.html`, path.join(target, "index.html")]
      .find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile())
    checked++
    if (!resolved) errors.push(`${path.relative(output, file)}: missing target ${ref}`)
    else if (url.hash && pages.has(resolved) && !pages.get(resolved).ids.has(decodeURIComponent(url.hash.slice(1)))) {
      errors.push(`${path.relative(output, file)}: missing anchor ${ref}`)
    }
  }
}

const notes = files(content).filter((file) => {
  const relative = path.relative(content, file).split(path.sep).join("/")
  const ignored = (config.configuration.ignorePatterns ?? []).some((pattern) =>
    minimatch(relative, pattern) || relative.startsWith(`${pattern}/`))
  const draft = file.endsWith(".md") ? matter(fs.readFileSync(file, "utf8")).data.draft : false
  return file.endsWith(".md") && !ignored && draft !== true && draft !== "true"
})
for (const note of notes) {
  const relative = path.relative(content, note).split(path.sep).join("/")
  const slug = slugifyFilePath(relative)
  const page = path.join(output, `${slug}.html`)
  const source = fs.readFileSync(note, "utf8")
  if (!pages.has(page)) errors.push(`Missing note page: ${relative}`)
  else if (!pages.get(page).articleTitle) errors.push(`Missing parsed title: ${relative}`)
  else if (/\$[^$]+\$/.test(source) && !pages.get(page).math) errors.push(`Math was not rendered: ${relative}`)
}

const script = fs.readFileSync(path.join(output, "postscript.js"), "utf8")
if (/fetch\(["']\/static\/contentIndex\.json["']\)/.test(script)) {
  errors.push("A plugin requests the content index outside the GitHub Pages repository path")
}

// Only the selected notes folder may contribute Markdown pages to the public index.
const index = JSON.parse(fs.readFileSync(path.join(output, "static/contentIndex.json"), "utf8"))
const allowed = new Set(notes.map((note) => slugifyFilePath(path.relative(content, note).split(path.sep).join("/"))))
for (const slug of [...allowed]) {
  const directories = slug.split("/").slice(0, -1)
  for (let depth = 1; depth <= directories.length; depth++) {
    allowed.add(`${directories.slice(0, depth).join("/")}/index`)
  }
}
for (const slug of Object.keys(index)) {
  // Quartz generates a tags listing even when the notes have no tags yet.
  if (!allowed.has(slug) && !slug.startsWith("tags/")) errors.push(`Unexpected public content: ${slug}`)
}

if (errors.length) {
  console.error([...new Set(errors)].join("\n"))
  process.exitCode = 1
} else {
  console.log(`Verified ${notes.length} source notes, ${pages.size} HTML pages and ${checked} local links/assets; all anchors and rendered math passed.`)
}
