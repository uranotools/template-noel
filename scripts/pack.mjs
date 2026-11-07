import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { zipSync } from 'fflate'
const root = fileURLToPath(new URL('../', import.meta.url))
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'template.json'), 'utf8'))
const files = {}
function add(relative) {
  const absolute = path.join(root, relative)
  const info = fs.lstatSync(absolute)
  if (info.isSymbolicLink()) throw Error('Symlinks are not allowed: ' + relative)
  if (info.isDirectory()) {
    for (const child of fs.readdirSync(absolute)) add(relative + '/' + child)
  } else {
    if (!/^[a-zA-Z0-9_./-]+$/.test(relative)) throw Error('Invalid package path: ' + relative)
    files[relative] = new Uint8Array(fs.readFileSync(absolute))
  }
}
// Allowlist: never export dependencies, old ZIPs, caches or unrelated local files.
for (const name of ['template.json', 'package.json', 'package-lock.json', 'vite.config.mjs', 'index.html', 'README.md', 'DESIGN.md', 'LICENSE', 'THIRD_PARTY_LICENSES.md', 'fonts', 'ui', 'scripts', 'docs']) {
  if (fs.existsSync(path.join(root, name))) add(name)
}
for (const view of manifest.views || []) if (!files[view.bundle]) throw Error('Build first: missing ' + view.bundle)
const values = Object.values(files)
if (values.length > 256 || values.reduce((size, data) => size + data.length, 0) > 20 * 1024 * 1024) throw Error('Template exceeds SDK 1 limits')
const output = path.join(root, 'release', `${manifest.id}-${manifest.version}.zip`)
fs.mkdirSync(path.dirname(output), { recursive: true })
fs.writeFileSync(output, zipSync(files, { level: 6 }))
console.log(output)
