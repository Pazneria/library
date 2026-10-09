import assert from 'node:assert/strict';
import { withoutStudyHooks } from './study-host-contract.mjs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import * as THREE from 'three';
import { loadGeometry, paintContacts } from './load-geometry.mjs';
import { EXIT_PORTAL } from '../src/exit-anchor.js';
import { disposeLibraryResources } from '../src/exit-resources.js';
import { makeGlobeMaterials, ATLAS_SIZES } from '../src/antique-globe/atlas.js';

const base = '49eda536ca1bab6fc79c84f946112ca119d6e45d';
const root = new URL('../', import.meta.url);
const previous = path => execFileSync('git', ['show', `${base}:${path}`], { cwd: root });
const baseline = await loadGeometry(undefined, EXIT_PORTAL, previous('src/build.js').toString('utf8'));
const combined = await loadGeometry(undefined, EXIT_PORTAL);
const cases = [];
const fingerprint = p => {
  const h = createHash('sha256').update(p.name);
  for (const attr of Object.values(p.geometry.attributes)) h.update(Buffer.from(attr.array.buffer, attr.array.byteOffset, attr.array.byteLength));
  if (p.geometry.index) h.update(Buffer.from(p.geometry.index.array.buffer, p.geometry.index.array.byteOffset, p.geometry.index.array.byteLength));
  return h.digest('hex');
};
const counts = pieces => {
  const result = new Map();
  for (const p of pieces) { const key = fingerprint(p); result.set(key, (result.get(key) || 0) + 1); }
  return result;
};
const oldCounts = counts(baseline.pieces), newCounts = counts(combined.pieces);
let retained = 0, removed = 0, added = 0;
for (const [key, count] of oldCounts) { retained += Math.min(count, newCounts.get(key) || 0); removed += Math.max(0, count - (newCounts.get(key) || 0)); }
for (const [key, count] of newCounts) added += Math.max(0, count - (oldCounts.get(key) || 0));
assert.equal(removed, 154, 'Only the 130 old wingback pieces, 17 desk pieces, 6 globe pieces and one rug plane may be replaced');
assert.equal(retained, baseline.pieces.length - 154);
assert.deepEqual(combined.room.B.solids, baseline.room.B.solids);
assert.deepEqual(combined.room.lights, baseline.room.lights);
assert.deepEqual(combined.room.windows, baseline.room.windows);
assert.deepEqual(combined.room.slots, baseline.room.slots);
for (const key of ['mats', 'cols', 'vars']) assert.deepEqual(combined.books[key], baseline.books[key]);
assert.equal(combined.randomDraws, baseline.randomDraws);
assert.equal(combined.randomDraws, 4711);
assert.equal(paintContacts(combined).length, 0);
cases.push('Exactly the four authorized art targets are replaced; every other primitive buffer, all room collisions, books, lights, windows, shelf slots and 4,711 RNG draws remain exact on the carved hinged-exit room');

const triangles = pieces => pieces.reduce((n, p) => n + (p.geometry.index?.count ?? p.geometry.attributes.position.count) / 3, 0);
const families = {
  chairs: combined.pieces.filter(p => p.material.userData.readingChair),
  desk: combined.pieces.filter(p => p.material.userData.upstairsDesk),
  rug: combined.pieces.filter(p => p.name.startsWith('Reading rug /')),
  globe: combined.pieces.filter(p => ['globe', 'globeWalnut', 'globeBrass', 'globeScales'].includes(p.name)),
};
assert.deepEqual(Object.fromEntries(Object.entries(families).map(([k, p]) => [k, triangles(p)])), { chairs: 55280, desk: 7376, rug: 3652, globe: 14548 });
assert.equal(triangles(combined.pieces) - triangles(baseline.pieces), 74542);
const scenes = [new THREE.Scene(), new THREE.Scene()];
let stagedDisposals = 0;
for (const p of combined.pieces) p.geometry.addEventListener('dispose', () => stagedDisposals++);
baseline.room.B.finish(scenes[0]); combined.room.B.finish(scenes[1]);
assert.equal(stagedDisposals, combined.pieces.length);
assert.equal(scenes[1].children.length - scenes[0].children.length, 16);
assert.equal(scenes[1].children.filter(m => m.castShadow).length - scenes[0].children.filter(m => m.castShadow).length, 12);
const familyAccounting = Object.fromEntries(Object.entries(families).map(([k, pieces]) => {
  const materials = new Set(pieces.map(p => p.material));
  const meshes = scenes[1].children.filter(m => materials.has(m.material));
  return [k, { triangles: triangles(pieces), batches: meshes.length, shadowBatches: meshes.filter(m => m.castShadow).length,
    finalGeometryBytes: meshes.reduce((n, m) => n + Object.values(m.geometry.attributes).reduce((a, v) => a + v.array.byteLength, 0) + (m.geometry.index?.array.byteLength || 0), 0) }];
}));
cases.push('Actual Builder merges match all four artist triangle totals, +74,542 net triangles, +16 opaque material batches and +12 potential shadow batches; staging geometry is disposed exactly once');

// Canvas pixel generation and all drawing calls execute on a command-only CPU
// context. This does not rasterize fonts or create a browser/GPU context.
const makeCanvas = (width, height) => ({ width, height, getContext: () => new Proxy({}, {
  get: (_target, key) => key === 'createImageData' ? (w, h) => ({ data: new Uint8ClampedArray(w * h * 4) })
    : key === 'measureText' ? text => ({ width: text.length * 10 }) : () => {},
  set: () => true,
}) });
const actualGlobe = makeGlobeMaterials(makeCanvas);
for (const [key, material] of Object.entries(actualGlobe)) {
  for (const mesh of scenes[1].children) if (mesh.material === combined.materials[key]) mesh.material = material;
  combined.materials[key].dispose();
}
const texturesOf = materials => new Set([...materials].flatMap(m => Object.values(m).filter(v => v?.isTexture)));
const sets = Object.fromEntries(Object.entries(families).map(([k, pieces]) => [k, texturesOf(new Set(pieces.map(p => p.material)))]));
sets.globe = texturesOf(Object.values(actualGlobe));
const pngSize = path => {
  const data = readFileSync(new URL(path, root));
  assert.equal(data.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
};
const rugSizes = [pngSize('src/reading-rug/rug-albedo.png'), pngSize('src/reading-rug/rug-detail.png')];
const dimensions = {
  chairs: [...sets.chairs].map(t => t.image), desk: [...sets.desk].map(t => t.image), rug: rugSizes,
  globe: [...sets.globe].map(t => t.image),
};
const mips = ({ width, height }) => {
  let n = 0;
  for (;;) { n += width * height * 4; if (width === 1 && height === 1) return n; width = Math.max(1, width >> 1); height = Math.max(1, height >> 1); }
};
const textureMipBytes = Object.fromEntries(Object.entries(dimensions).map(([k, sizes]) => [k, sizes.reduce((n, s) => n + mips(s), 0)]));
assert.deepEqual(textureMipBytes, { chairs: 1398096, desk: 786432, rug: 13981016, globe: 13281972 });
assert.deepEqual([...sets.globe].map(t => [t.image.width, t.image.height]), Object.values(ATLAS_SIZES));
const totalTextureMipBytes = Object.values(textureMipBytes).reduce((a, b) => a + b, 0);
assert.equal(totalTextureMipBytes, 29447516);
cases.push('Shared DataTexture, actual CPU globe CanvasTexture and PNG dimensions match 29,447,516 bytes of replacement RGBA8 mip chains; texture loading/font rasterization/GPU allocations remain unmeasured');

const resources = new Set();
for (const mesh of scenes[1].children) { resources.add(mesh.geometry); resources.add(mesh.material); }
for (const texture of texturesOf([...resources].filter(v => v.isMaterial))) resources.add(texture);
const disposed = new Map();
for (const resource of resources) resource.addEventListener('dispose', () => disposed.set(resource, (disposed.get(resource) || 0) + 1));
let rendererDisposed = 0;
disposeLibraryResources({ scene: scenes[1], renderer: { dispose() { rendererDisposed++; } }, environmentTarget: null });
assert.equal(rendererDisposed, 1); assert.equal(scenes[1].children.length, 0);
assert.equal(disposed.size, resources.size); assert.ok([...disposed.values()].every(n => n === 1));
for (const t of sets.globe) assert.equal(t.image, null, 'Combined teardown releases the actual globe CanvasTexture backing reference');
for (const mesh of scenes[0].children) { mesh.geometry.dispose(); mesh.material.dispose(); }
for (const texture of texturesOf(Object.values(baseline.materials))) texture.dispose();
cases.push('Existing scene teardown finds and disposes every combined merged geometry, material and shared texture once without additional lifecycle or frame hooks');

const host = withoutStudyHooks(readFileSync(new URL('src/main.js', root), 'utf8'));
assert.equal(host.split("'./library-books/hillside.js'").length, 2);
assert.deepEqual(Buffer.from(host.replace("'./library-books/hillside.js'", "'./jippity-book/hillside.js'")), previous('src/main.js'), 'Book adapter import is the only accepted host change since the hinged exit');
const protectedPaths = ['index.html', 'src/look.js', 'src/loading.js', 'src/books.js', 'src/exit.js', 'src/exit-door.js', 'src/exit-scene.js', 'src/exit-anchor.js', 'src/exit-content.js', 'src/reading.js', 'src/reading-scene.js', 'src/reading-content.js', 'src/room-anchors.js', 'src/jippity-book/hillside.js', 'src/jippity-book/picking.js', 'src/jippity-book/content.json', 'src/exterior/index.js', 'package-lock.json'];
for (const path of protectedPaths) assert.deepEqual(readFileSync(new URL(path, root)), previous(path), path);
cases.push('After removing exactly the enumerated optional study hooks, only the accepted reusable-book adapter import changes the host; all protected paths remain byte-identical to the tested hinged-exit base');
console.log(JSON.stringify({ status: 'passed', base, cases, constructionAccounting: {
  baselinePieces: baseline.pieces.length, combinedPieces: combined.pieces.length, retainedPieces: retained, removedPieces: removed, addedPieces: added,
  baselineTriangles: triangles(baseline.pieces), combinedTriangles: triangles(combined.pieces), netTriangles: 74542,
  baselineMaterialBatches: scenes[0].children.length, netMaterialBatches: 16, netPotentialShadowBatches: 12,
  families: familyAccounting, textureMipBytes, totalTextureMipBytes, netTextureMipBytes: totalTextureMipBytes - 699052,
  collisionVolumes: combined.room.B.solids.length, randomDraws: combined.randomDraws, protectedPaths,
}, scope: 'Bounded CPU construction/preservation/resource accounting; no browser, server, GPU, rendering or frame-rate measurement' }, null, 2));
