import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

// Original procedural work for Pazneria/library. No text, external assets,
// canvas, network, DOM, animation, interaction handlers, or scene lights.
export const DESK_SPEC = Object.freeze({
  origin: Object.freeze([-5.6, 4.2, -8.85]),
  size: Object.freeze([1.4, 0.8, 0.7]),
  worktopY: 0.785,
  // The existing paper remains authored in build.js, including its rotation.
  paper: Object.freeze({ center: Object.freeze([0.05, 0.787, 0.1]), yaw: 0.2 }),
  // A clear part of the inset pad, deliberately reserved for future notes.
  notes: Object.freeze({ x0: -0.29, x1: -0.13, z0: -0.025, z1: 0.265, y: 0.7848 }),
  legacyRandomDraws: 20,
});

function random(seed) {
  let state = seed >>> 0;
  return () => {
    state = Math.imul(1664525, state) + 1013904223 | 0;
    return (state >>> 0) / 4294967296;
  };
}

function texture(data, width, height, name, color = false) {
  const t = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
  t.name = name;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  if (color) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

function makeMaterials() {
  const r = random(0x57414c4e), w = 512, h = 256;
  const wood = new Uint8Array(w * h * 4);
  // Long, low-contrast fibres with a restrained figured ribbon. Periodic in
  // both axes; U follows the length of the board rather than world axes.
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const u = x / w * Math.PI * 2, v = y / h * Math.PI * 2;
    const bend = 0.32 * Math.sin(u) + 0.10 * Math.sin(2 * u + 3 * v);
    const grain = Math.sin(v * 27 + bend * 4);
    const fine = Math.pow(Math.max(0, Math.sin(v * 81 + bend * 8)), 9);
    const ribbon = Math.sin(v * 3 + 0.6 * Math.sin(u));
    const shade = 1 + 0.095 * grain - 0.065 * fine + 0.11 * ribbon + (r() - 0.5) * 0.025;
    const i = (y * w + x) * 4;
    wood[i] = Math.round(119 * shade); wood[i + 1] = Math.round(75 * shade);
    wood[i + 2] = Math.round(43 * shade); wood[i + 3] = 255;
  }
  const woodMap = texture(wood, w, h, 'Desk • quarter-cut walnut', true);
  const hide = new Uint8Array(128 * 128 * 4);
  for (let i = 0; i < hide.length; i += 4) {
    const p = Math.round(124 + (r() - 0.5) * 25);
    hide[i] = hide[i + 1] = hide[i + 2] = p; hide[i + 3] = 255;
  }
  const leatherBump = texture(hide, 128, 128, 'Desk • fine hide grain');
  leatherBump.repeat.set(6, 2);
  const std = (name, options) => {
    const m = new THREE.MeshStandardMaterial(options);
    m.name = `Desk • ${name}`;
    m.userData.upstairsDesk = true;
    return m;
  };
  return {
    walnut: std('walnut', { map: woodMap, bumpMap: woodMap, bumpScale: 0.0003, roughness: 0.43 }),
    recess: std('recessed walnut', { map: woodMap, color: 0xa28c77, bumpMap: woodMap, bumpScale: 0.00025, roughness: 0.53 }),
    brass: std('aged brass', { color: 0xb99b60, metalness: 0.83, roughness: 0.34 }),
    leather: std('bottle-green hide', { color: 0x29443a, bumpMap: leatherBump, bumpScale: 0.00016, roughness: 0.74 }),
    ink: std('ebonite and ink', { color: 0x101e20, metalness: 0.13, roughness: 0.26 }),
    cedar: std('endgrain and linen', { color: 0xc5a875, roughness: 0.8 }),
  };
}

// 44 triangles: six faces, twelve edge bevels, eight corner facets.
// True millimetre bevels catch highlights without subdivision-heavy boxes.
function bevelBox(w, h, d, bevel = 0.002) {
  const half = [w / 2, h / 2, d / 2];
  const b = Math.min(bevel, ...half.map(v => v * 0.45));
  const pos = [];
  function face(points, outward) {
    const a = new THREE.Vector3(...points[0]), bb = new THREE.Vector3(...points[1]);
    const c = new THREE.Vector3(...points[2]);
    if (bb.sub(a).cross(c.sub(a)).dot(new THREE.Vector3(...outward)) < 0) points.reverse();
    for (let i = 1; i < points.length - 1; i++) pos.push(...points[0], ...points[i], ...points[i + 1]);
  }
  for (let axis = 0; axis < 3; axis++) for (const s of [-1, 1]) {
    const a = (axis + 1) % 3, c = (axis + 2) % 3, n = [0, 0, 0]; n[axis] = s;
    face([[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([sa, sc]) => {
      const p = [0, 0, 0]; p[axis] = s * half[axis];
      p[a] = sa * (half[a] - b); p[c] = sc * (half[c] - b); return p;
    }), n);
  }
  for (let a = 0; a < 3; a++) for (let c = a + 1; c < 3; c++) {
    const k = 3 - a - c;
    for (const sa of [-1, 1]) for (const sc of [-1, 1]) {
      const n = [0, 0, 0]; n[a] = sa; n[c] = sc;
      face([[0, -1], [0, 1], [1, 1], [1, -1]].map(([side, sk]) => {
        const p = [0, 0, 0]; p[a] = sa * (half[a] - side * b);
        p[c] = sc * (half[c] - (1 - side) * b); p[k] = sk * (half[k] - b); return p;
      }), n);
    }
  }
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) {
    const signs = [sx, sy, sz];
    face([0, 1, 2].map(axis => half.map((v, i) => signs[i] * (v - (i === axis ? 0 : b)))), signs);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

function mapped(g, grain, offset) {
  const p = g.attributes.position, n = g.attributes.normal, uv = new Float32Array(p.count * 2);
  const ga = { x: 0, y: 1, z: 2 }[grain];
  for (let i = 0; i < p.count; i++) {
    const xyz = [p.getX(i), p.getY(i), p.getZ(i)];
    const normal = [Math.abs(n.getX(i)), Math.abs(n.getY(i)), Math.abs(n.getZ(i))];
    const faceAxis = normal.indexOf(Math.max(...normal));
    const uAxis = faceAxis === ga ? (ga + 1) % 3 : ga;
    const vAxis = [0, 1, 2].find(a => a !== uAxis && a !== faceAxis);
    uv[i * 2] = xyz[uAxis] / 0.7 + offset;
    uv[i * 2 + 1] = xyz[vAxis] / 0.20 + offset * 0.37;
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return g;
}

// Lathe caps place a ring at radius zero. Remove their collapsed triangles
// before upload, and later weld identical full vertices (including normals
// and UVs) so bevel edges and material seams retain their intended normals.
function removeCollapsedTriangles(g) {
  const p = g.attributes.position, keep = [], a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  for (let i = 0; i < p.count; i += 3) {
    a.fromBufferAttribute(p, i); b.fromBufferAttribute(p, i + 1); c.fromBufferAttribute(p, i + 2);
    if (b.sub(a).cross(c.sub(a)).lengthSq() > 4e-24) keep.push(i, i + 1, i + 2);
  }
  if (keep.length === p.count) return g;
  const clean = new THREE.BufferGeometry();
  for (const [name, attribute] of Object.entries(g.attributes)) {
    const data = new Float32Array(keep.length * attribute.itemSize);
    for (let i = 0; i < keep.length; i++) for (let c = 0; c < attribute.itemSize; c++) data[i * attribute.itemSize + c] = attribute.array[keep[i] * attribute.itemSize + c];
    clean.setAttribute(name, new THREE.BufferAttribute(data, attribute.itemSize));
  }
  g.dispose(); return clean;
}

/** Standalone, local-space furniture group. Floor is y=0, front is +z.
 * Its six merged opaque meshes own all their resources; no external state.
 * Existing lamp, books, paper, chair, collider and lights are NOT included.
 */
export function createWritingDesk() {
  const materials = makeMaterials(), buckets = new Map(), parts = [];
  let offset = 0;
  function add(key, geometry, x, y, z, rotation = [0, 0, 0], grain = 'x', label = key) {
    let g = geometry;
    if (g.index) { g = geometry.toNonIndexed(); geometry.dispose(); }
    g = removeCollapsedTriangles(g);
    g.clearGroups();
    // Project grain before placement so every board has its own direction.
    mapped(g, grain, offset += 0.137);
    const matrix = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(...rotation));
    matrix.setPosition(x, y, z); g.applyMatrix4(matrix);
    g.computeBoundingBox();
    parts.push({ name: label, material: key, triangles: g.attributes.position.count / 3,
      bounds: [g.boundingBox.min.toArray(), g.boundingBox.max.toArray()] });
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(g);
  }
  const box = (key, w, h, d, x, y, z, b = 0.002, grain = 'x', label = key, rotation) =>
    add(key, bevelBox(w, h, d, b), x, y, z, rotation, grain, label);
  const cyl = (key, rt, rb, h, x, y, z, seg = 16, rotation, label = key) =>
    add(key, new THREE.CylinderGeometry(rt, rb, h, seg), x, y, z, rotation, 'y', label);
  const ring = (key, radius, tube, x, y, z, rotation, label = key, arc = Math.PI * 2) =>
    add(key, new THREE.TorusGeometry(radius, tube, 5, 20, arc), x, y, z, rotation, 'x', label);

  // A low plinth, inset pedestal sides and mitred-looking cornice keep the
  // mass of the original twin-pedestal desk, with readable relief at 2 m.
  for (const s of [-1, 1]) {
    const x = s * 0.5;
    box('recess', 0.344, 0.642, 0.602, x, 0.379, -0.005, 0.003, 'y', 'pedestal carcass');
    box('walnut', 0.356, 0.032, 0.622, x, 0.026, -0.004, 0.003, 'x', 'plinth foot');
    box('walnut', 0.348, 0.02, 0.614, x, 0.05, -0.004, 0.002, 'x', 'plinth bevel');
    box('walnut', 0.352, 0.029, 0.626, x, 0.7055, -0.004, 0.002, 'x', 'pedestal crown rail');
    for (const a of [-1, 1]) {
      box('walnut', 0.024, 0.622, 0.027, x + a * 0.164, 0.376, 0.305, 0.0015, 'y', 'front stile');
      // A framed recessed outer side, visible from the stair approach.
      const sideX = x + a * 0.176;
      box('walnut', 0.006, 0.474, 0.432, sideX, 0.368, -0.005, 0.001, 'y', 'side field');
      for (const zz of [-0.267, 0.257]) box('walnut', 0.01, 0.602, 0.028, sideX, 0.373, zz, 0.0015, 'y', 'side upright');
      for (const yy of [0.085, 0.66]) box('walnut', 0.01, 0.027, 0.55, sideX, yy, -0.005, 0.0015, 'z', 'side crossrail');
    }
    for (let j = 0; j < 3; j++) {
      const y = 0.16 + j * 0.22;
      // Dark margin is a genuine 3 mm setback around each cockbeaded face.
      box('walnut', 0.302, 0.191, 0.019, x, y, 0.3185, 0.002, 'x', 'drawer cockbead');
      box('recess', 0.285, 0.174, 0.005, x, y, 0.33, 0.001, 'x', 'drawer inset');
      box('walnut', 0.271, 0.16, 0.003, x, y, 0.334, 0.001, 'x', 'drawer figured field');
      // Twin rosettes, slotted screws, lugs, and a hanging semi-circular bail.
      for (const dx of [-0.034, 0.034]) {
        cyl('brass', 0.009, 0.01, 0.003, x + dx, y + 0.012, 0.338, 12, [Math.PI / 2, 0, 0], 'handle rosette');
        cyl('brass', 0.003, 0.003, 0.009, x + dx, y + 0.012, 0.345, 8, [Math.PI / 2, 0, 0], 'handle pivot');
        box('ink', 0.005, 0.0008, 0.0005, x + dx, y + 0.012, 0.3496, 0.0001, 'x', 'screw slot');
      }
      ring('brass', 0.034, 0.0025, x, y + 0.012, 0.35, [0, 0, Math.PI], 'hanging bail', Math.PI);
    }
  }
  // The original knee clearance remains. A narrow pencil drawer has a small
  // central pull and key escutcheon, with no new moving parts or interaction.
  box('recess', 0.64, 0.103, 0.578, 0, 0.674, -0.017, 0.003, 'x', 'pencil drawer case');
  box('walnut', 0.594, 0.086, 0.022, 0, 0.672, 0.284, 0.002, 'x', 'pencil drawer front');
  box('recess', 0.558, 0.054, 0.004, 0, 0.672, 0.297, 0.001, 'x', 'pencil drawer inset');
  for (const x of [-0.024, 0.024]) cyl('brass', 0.004, 0.005, 0.015, x, 0.66, 0.305, 10, [Math.PI / 2, 0, 0], 'pencil pull post');
  cyl('brass', 0.003, 0.003, 0.054, 0, 0.66, 0.312, 12, [0, 0, Math.PI / 2], 'pencil pull bar');
  cyl('brass', 0.007, 0.007, 0.002, 0, 0.69, 0.301, 14, [Math.PI / 2, 0, 0], 'key escutcheon');
  box('ink', 0.002, 0.005, 0.0006, 0, 0.69, 0.3022, 0.0001, 'y', 'keyhole');

  // Top profile: shadow quirk, eased lower bead, 45 mm walnut core. The hide
  // is inset 0.2 mm BELOW the original surface so the original paper rests.
  box('recess', 1.356, 0.012, 0.656, 0, 0.719, 0, 0.002, 'x', 'top shadow quirk');
  box('walnut', 1.378, 0.012, 0.678, 0, 0.731, 0, 0.003, 'x', 'lower thumb bead');
  box('walnut', 1.4, 0.045, 0.7, 0, 0.7595, 0, 0.003, 'x', 'desktop core');
  // Four flush border boards leave a real recess: pad x ±.34, z[-.08,.29].
  box('walnut', 1.4, 0.003, 0.27, 0, 0.7835, -0.215, 0.001, 'x', 'rear writing rail');
  box('walnut', 1.4, 0.003, 0.06, 0, 0.7835, 0.32, 0.001, 'x', 'front writing rail');
  for (const s of [-1, 1]) box('walnut', 0.36, 0.003, 0.37, s * 0.52, 0.7835, 0.105, 0.001, 'z', 'side writing rail');
  box('leather', 0.68, 0.0028, 0.37, 0, 0.7834, 0.105, 0.0005, 'x', 'inset leather writing pad');
  // Very fine brass perimeter and a blind embossed inner rule. Kept outside
  // the original paper bounds; nothing printed or fabricated as user writing.
  for (const z of [-0.078, 0.288]) box('brass', 0.675, 0.00055, 0.0012, 0, 0.78465, z, 0.00015, 'x', 'pad edge fillet');
  for (const x of [-0.338, 0.338]) box('brass', 0.0012, 0.00055, 0.365, x, 0.78465, 0.105, 0.00015, 'z', 'pad edge fillet');
  for (const z of [-0.061, 0.271]) box('ink', 0.641, 0.00025, 0.0007, 0, 0.78486, z, 0.00005, 'x', 'blind pad rule');
  for (const x of [-0.321, 0.321]) box('ink', 0.0007, 0.00025, 0.332, x, 0.78486, 0.105, 0.00005, 'z', 'blind pad rule');

  // Original inkwell centre retained. Opaque blue-black ceramic avoids a
  // transparent pass; a real lip, recessed ink meniscus and separate lid.
  cyl('brass', 0.031, 0.033, 0.0025, -0.15, 0.78625, -0.15, 20, undefined, 'inkwell coaster');
  const profile = [[0, 0], [0.025, 0], [0.029, 0.006], [0.028, 0.027], [0.019, 0.036], [0.019, 0.044], [0.0125, 0.044], [0.0125, 0.031], [0, 0.031]];
  add('ink', new THREE.LatheGeometry(profile.map(([a, b]) => new THREE.Vector2(a, b)), 24), -0.15, 0.7875, -0.15, undefined, 'y', 'hollow inkwell');
  ring('brass', 0.016, 0.0015, -0.15, 0.8315, -0.15, [Math.PI / 2, 0, 0], 'inkwell neck band');
  cyl('ink', 0.0124, 0.0124, 0.0006, -0.15, 0.823, -0.15, 20, undefined, 'recessed ink meniscus');
  cyl('brass', 0.02, 0.021, 0.006, -0.087, 0.788, -0.178, 20, undefined, 'loose inkwell lid');
  cyl('ink', 0.0155, 0.0155, 0.001, -0.087, 0.7913, -0.178, 20, undefined, 'lid inset');

  // Compact, open pen tray in the free rear strip between the existing lamp
  // and books. Its two instruments are modelled at believable writing scale.
  box('recess', 0.282, 0.009, 0.074, 0.10, 0.7895, -0.253, 0.003, 'x', 'pen tray base');
  box('leather', 0.262, 0.001, 0.054, 0.10, 0.7945, -0.253, 0.001, 'x', 'pen tray lining');
  for (const z of [-0.286, -0.22]) box('walnut', 0.282, 0.008, 0.008, 0.10, 0.798, z, 0.002, 'x', 'pen tray rim');
  for (const x of [-0.037, 0.237]) box('walnut', 0.008, 0.008, 0.058, x, 0.798, -0.253, 0.002, 'z', 'pen tray end');
  // Dip pen, horizontal along x: ebonite grip, wooden shaft, collar and a
  // sculpted two-faced brass nib with a black slit and small breather hole.
  cyl('walnut', 0.0025, 0.004, 0.114, 0.122, 0.799, -0.265, 12, [0, 0, -Math.PI / 2], 'dip pen shaft');
  cyl('ink', 0.004, 0.0032, 0.03, 0.05, 0.799, -0.265, 12, [0, 0, Math.PI / 2], 'dip pen grip');
  cyl('brass', 0.0042, 0.0042, 0.006, 0.031, 0.799, -0.265, 12, [0, 0, Math.PI / 2], 'dip pen collar');
  const nib = new THREE.BufferGeometry();
  const np = [0.004, 0, 0, 0.027, 0, -0.004, 0.027, 0.0024, 0,
    0.004, 0, 0, 0.027, 0.0024, 0, 0.027, 0, 0.004,
    0.004, 0, 0, 0.027, 0, 0.004, 0.027, 0, -0.004,
    0.027, 0, -0.004, 0.027, 0, 0.004, 0.027, 0.0024, 0];
  // Reverse winding so both the nib ridge and underside have outward normals.
  for (let i = 0; i < np.length; i += 9) for (let j = 0; j < 3; j++) [np[i + 3 + j], np[i + 6 + j]] = [np[i + 6 + j], np[i + 3 + j]];
  nib.setAttribute('position', new THREE.Float32BufferAttribute(np, 3)); nib.computeVertexNormals();
  add('brass', nib, 0, 0.799, -0.265, undefined, 'x', 'split brass nib');
  box('ink', 0.013, 0.00035, 0.00045, 0.019, 0.8010, -0.265, 0.0001, 'x', 'nib slit');
  cyl('ink', 0.0007, 0.0007, 0.0003, 0.024, 0.8013, -0.265, 8, undefined, 'nib breather');
  cyl('walnut', 0.0031, 0.0031, 0.133, 0.116, 0.7981, -0.24, 6, [0, 0, Math.PI / 2], 'hexagonal pencil');
  cyl('cedar', 0, 0.0031, 0.017, 0.041, 0.7981, -0.24, 6, [0, 0, Math.PI / 2], 'sharpened cedar');
  cyl('ink', 0, 0.0009, 0.004, 0.0315, 0.7981, -0.24, 6, [0, 0, Math.PI / 2], 'graphite point');
  cyl('brass', 0.0032, 0.0032, 0.004, 0.1845, 0.7981, -0.24, 8, [0, 0, Math.PI / 2], 'pencil end ferrule');

  const group = new THREE.Group(); group.name = 'Upstairs writing desk • walnut and brass';
  for (const [key, geos] of buckets) {
    const merged = mergeGeometries(geos, false);
    const geometry = mergeVertices(merged, 1e-6);
    merged.dispose();
    for (const g of geos) g.dispose();
    geometry.computeBoundingBox(); geometry.computeBoundingSphere();
    const mesh = new THREE.Mesh(geometry, materials[key]);
    mesh.name = `Upstairs desk • ${key}`;
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.matrixAutoUpdate = false; mesh.updateMatrix();
    group.add(mesh);
  }
  group.userData.parts = parts;
  group.userData.spec = DESK_SPEC;
  return group;
}

/** Transfers source geometry into the existing Builder. Builder.finish()
 * disposes staging geometry; exit-resources.js owns the final scene resources.
 * Exactly 20 RNG calls replace the ten old boxGeo UV-offset pairs.
 */
export function addWritingDesk(frame) {
  const group = createWritingDesk();
  for (let i = 0; i < DESK_SPEC.legacyRandomDraws; i++) frame.b.rand();
  for (const mesh of group.children) frame.geo(mesh.material, mesh.geometry, 0, 0, 0);
}

/** CPU-only accounting: nominal submissions for this asset if visible, not
 * measured renderer/frame performance. Shadow-pass multiplicity is external.
 */
export function inspectWritingDesk(group) {
  const materials = new Set(), textures = new Set();
  let triangles = 0, vertices = 0, bytes = 0, draws = 0;
  group.traverse(mesh => {
    if (!mesh.isMesh) return;
    const g = mesh.geometry;
    triangles += (g.index?.count ?? g.attributes.position.count) / 3;
    vertices += g.attributes.position.count;
    bytes += Object.values(g.attributes).reduce((n, a) => n + a.array.byteLength, 0) + (g.index?.array.byteLength || 0);
    draws += g.groups.length || 1;
    for (const m of [].concat(mesh.material)) {
      materials.add(m);
      for (const value of Object.values(m)) if (value?.isTexture) textures.add(value);
    }
  });
  const textureBaseBytes = [...textures].reduce((n, t) => n + t.image.data.byteLength, 0);
  return { triangles, vertices, geometryBytes: bytes, nominalColorPassDrawCalls: draws,
    materials: materials.size, textures: textures.size, textureBaseBytes,
    textureBytesWithMipmaps: [...textures].reduce((n, t) => {
      let w = t.image.width, h = t.image.height;
      while (true) { n += w * h * 4; if (w === 1 && h === 1) break; w = Math.max(1, w >> 1); h = Math.max(1, h >> 1); }
      return n;
    }, 0), transparentDrawCalls: 0, lights: 0, perFrameCallbacks: 0 };
}
