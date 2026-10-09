import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, relative } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}
function entry(path) {
  const data = readFileSync(path);
  return { path: relative(root, path).replaceAll('\\', '/'), bytes: data.length, sha256: createHash('sha256').update(data).digest('hex') };
}
const sourceFiles = [join(root, 'index.html'), ...files(join(root, 'src'))].sort().map(entry);
const buildFiles = files(join(root, 'docs')).sort().map(entry);
const manifest = { sourceFiles, buildFiles, base: '/library/', productionBytes: buildFiles.reduce((total, file) => total + file.bytes, 0) };
writeFileSync(join(root, 'BUILD.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Build manifest: ${sourceFiles.length} source files; ${buildFiles.length} production files; ${manifest.productionBytes} bytes`);
