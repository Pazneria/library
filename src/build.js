import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import * as TX from './textures.js';
import { addReadingArmchair } from './reading-chairs/index.js';
import { addWritingDesk } from './upstairs-desk/index.js';
import { addReadingRug } from './reading-rug/index.js';
import { makeGlobeMaterials } from './antique-globe/atlas.js';
import { buildAntiqueGlobe } from './antique-globe/geometry.js';

const _e = new THREE.Euler();
const _q = new THREE.Quaternion();

function boxGeo(w, h, d, ts, rand) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const ox = rand(), oy = rand();
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    const [a, b] = dims[f];
    const swap = b > a;
    for (let k = 0; k < 4; k++) {
      const i = f * 4 + k;
      let U = uv.getX(i) * a, V = uv.getY(i) * b;
      if (swap) { const t = U; U = V; V = t; }
      uv.setXY(i, U / ts + ox, V / ts + oy);
    }
  }
  return g;
}

export class Builder {
  constructor(rand) {
    this.rand = rand;
    this.batches = new Map();
    this.solids = [];
  }
  add(mat, g) {
    if (!this.batches.has(mat)) this.batches.set(mat, []);
    this.batches.get(mat).push(g);
  }
  frame(x, y, z, rot = 0) { return new Frame(this, new THREE.Matrix4().makeRotationY(rot).setPosition(x, y, z)); }
  finish(scene) {
    for (const [mat, geos] of this.batches) {
      for (const g of geos) for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
      const g = mergeGeometries(geos, false);
      const m = new THREE.Mesh(g, mat);
      m.castShadow = mat.userData.noShadow ? false : true;
      m.receiveShadow = true;
      m.matrixAutoUpdate = false;
      scene.add(m);
      for (const source of geos) source.dispose();
    }
    this.batches.clear();
  }
}

class Frame {
  constructor(b, m) { this.b = b; this.m = m; }
  sub(x, y, z, rot = 0) { return new Frame(this.b, this.m.clone().multiply(new THREE.Matrix4().makeRotationY(rot).setPosition(x, y, z))); }
  local(x, y, z, rx = 0, ry = 0, rz = 0) {
    _e.set(rx, ry, rz);
    _q.setFromEuler(_e);
    return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), _q, new THREE.Vector3(1, 1, 1)).premultiply(this.m);
  }
  geo(mat, g, x, y, z, rx, ry, rz) { g.applyMatrix4(this.local(x, y, z, rx, ry, rz)); this.b.add(mat, g); }
  box(mat, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) { this.geo(mat, boxGeo(w, h, d, mat.userData.ts || 1, this.b.rand), x, y, z, rx, ry, rz); }
  cyl(mat, rt, rb, h, x, y, z, seg = 12, rx = 0, ry = 0, rz = 0, open = false, ts0, tl) {
    const g = new THREE.CylinderGeometry(rt, rb, h, seg, 1, open, ts0 || 0, tl || Math.PI * 2);
    const ts = mat.userData.ts || 1, uv = g.attributes.uv, c = Math.PI * 2 * Math.max(rt, rb);
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getY(i) * h / ts, uv.getX(i) * c / ts);
    this.geo(mat, g, x, y, z, rx, ry, rz);
  }
  sphere(mat, r, x, y, z, sx = 1, sy = 1, sz = 1, ws = 12, hs = 8) {
    const g = new THREE.SphereGeometry(r, ws, hs);
    g.scale(sx, sy, sz);
    this.geo(mat, g, x, y, z);
  }
  torus(mat, R, r, x, y, z, rx = 0, ry = 0, rz = 0, seg = 32) { this.geo(mat, new THREE.TorusGeometry(R, r, 6, seg), x, y, z, rx, ry, rz); }
  plane(mat, w, h, x, y, z, rx = 0, ry = 0, rz = 0, uvr = null) {
    const g = new THREE.PlaneGeometry(w, h);
    if (uvr) { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uvr[0] + uv.getX(i) * uvr[2], uvr[1] + uv.getY(i) * uvr[3]); }
    this.geo(mat, g, x, y, z, rx, ry, rz);
  }
  solid(w, h, d, x, y, z) {
    const mm = this.local(x, y, z);
    const v = new THREE.Vector3();
    const min = new THREE.Vector3(Infinity, Infinity, Infinity), max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
    for (let i = 0; i < 8; i++) {
      v.set((i & 1 ? 0.5 : -0.5) * w, (i & 2 ? 0.5 : -0.5) * h, (i & 4 ? 0.5 : -0.5) * d).applyMatrix4(mm);
      min.min(v); max.max(v);
    }
    this.b.solids.push({ x0: min.x, x1: max.x, y0: min.y, y1: max.y, z0: min.z, z1: max.z });
  }
  sbox(mat, w, h, d, x, y, z) { this.box(mat, w, h, d, x, y, z); this.solid(w, h, d, x, y, z); }
}

export function makeMaterials() {
  const std = (o, ts) => { const m = new THREE.MeshStandardMaterial(o); m.userData.ts = ts || 1; return m; };
  const walnutT = TX.woodTexture(1, [118, 70, 38], [48, 26, 12], { rings: 16 });
  const oakT = TX.woodTexture(2, [184, 124, 70], [104, 62, 30], { rings: 15 });
  const darkT = TX.woodTexture(3, [84, 50, 30], [34, 18, 10], { rings: 11 });
  const floorT = TX.floorTexture(4);
  const plasterT = TX.plasterTexture(5, [232, 214, 184]);
  const sageT = TX.plasterTexture(6, [150, 158, 124]);
  const leatherT = TX.leatherTexture(7, [100, 34, 22]);
  const leather2T = TX.leatherTexture(8, [92, 56, 30]);
  const stoneT = TX.stoneTexture(9);
  return {
    walnut: std({ map: walnutT, bumpMap: walnutT, bumpScale: 0.6, roughness: 0.6, color: 0xffffff }, 1.3),
    oak: std({ map: oakT, bumpMap: oakT, bumpScale: 0.5, roughness: 0.48 }, 1.6),
    dark: std({ map: darkT, bumpMap: darkT, bumpScale: 0.5, roughness: 0.55 }, 1.2),
    floor: std({ map: floorT, bumpMap: floorT, bumpScale: 1.2, roughness: 0.42 }, 1.9),
    plaster: std({ map: plasterT, bumpMap: plasterT, bumpScale: 1.5, roughness: 0.94 }, 3.0),
    sage: std({ map: sageT, bumpMap: sageT, bumpScale: 1.5, roughness: 0.92 }, 2.5),
    ceil: std({ map: plasterT, roughness: 0.95, color: 0xf2e8d8 }, 4.0),
    leather: std({ map: leatherT, bumpMap: leatherT, bumpScale: 1.2, roughness: 0.5 }, 0.9),
    leather2: std({ map: leather2T, bumpMap: leather2T, bumpScale: 1.2, roughness: 0.55 }, 0.9),
    stone: std({ map: stoneT, bumpMap: stoneT, bumpScale: 2.0, roughness: 0.88 }, 1.4),
    iron: std({ color: 0x1c1b1a, metalness: 0.75, roughness: 0.48 }),
    brass: std({ color: 0xb48a48, metalness: 1.0, roughness: 0.32 }),
    gilt: std({ color: 0x9a7436, metalness: 0.8, roughness: 0.42 }),
    soot: std({ color: 0x0e0c0b, roughness: 1 }),
    cushion: std({ map: TX.fabricTexture(10, [150, 128, 92], true), roughness: 0.95 }, 0.5),
    cushion2: std({ map: TX.fabricTexture(11, [70, 88, 70], false), roughness: 0.95 }, 0.4),
    runner: std({ map: TX.fabricTexture(12, [118, 34, 28], true), roughness: 0.95 }, 0.6),
    paper: std({ color: 0xe6dac0, roughness: 0.9 }),
    ceramic: std({ color: 0xece6d6, roughness: 0.25 }),
    terracotta: std({ color: 0x9c5a3a, roughness: 0.85 }),
    plant: std({ color: 0x3e5c2c, roughness: 0.75, side: THREE.DoubleSide }),
    greenGlass: std({ color: 0x1e6a30, emissive: 0x3c9a3a, emissiveIntensity: 0.55, roughness: 0.15, metalness: 0.1, side: THREE.DoubleSide }),
    shade: std({ color: 0xead6a8, emissive: 0xffb469, emissiveIntensity: 0.9, roughness: 0.9, side: THREE.DoubleSide }),
    flame: Object.assign(new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.6, 0.7) }), { userData: { noShadow: true } }),
    ember: Object.assign(new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 0.7, 0.2) }), { userData: { noShadow: true } }),
    rug: std({ map: TX.rugTexture(13), roughness: 1 }),
    painting: std({ map: TX.paintingAtlas(14), roughness: 0.55 }),
    ...makeGlobeMaterials(),
  };
}

// ---------------------------------------------------------------------------
// The library. Coordinates: x east, z south, y up. Main room interior x[-7,7] z[-10,9].
export const ROOM = { H: 10.5, GY: 4.2 };
// Keep visible trim faces clear of painted opening/reveal faces in every frame.
const TRIM_CLEARANCE = 0.012;

export function buildLibrary(M, books, rand, exitPortal = null) {
  const B = new Builder(rand);
  const W = B.frame(0, 0, 0, 0);
  const H = ROOM.H, GY = ROOM.GY;
  const slots = [];
  const lights = [];
  const windows = []; // light shaft definitions
  const r = rand;

  // wall helper with openings: axis 'x' means wall runs along z at fixed x-range
  function wall(axis, a0, a1, t0, t1, y0, y1, openings, mat) {
    const pts = [a0, a1];
    for (const o of openings) pts.push(o[0], o[1]);
    const ps = [...new Set(pts)].sort((p, q) => p - q);
    for (let i = 0; i < ps.length - 1; i++) {
      const p = ps[i], q = ps[i + 1];
      const ops = openings.filter((o) => o[0] <= p && o[1] >= q).sort((u, v) => u[2] - v[2]);
      let y = y0;
      const seg = (ya, yb) => {
        if (yb - ya < 0.001) return;
        if (axis === 'x') W.sbox(mat, t1 - t0, yb - ya, q - p, (t0 + t1) / 2, (ya + yb) / 2, (p + q) / 2);
        else W.sbox(mat, q - p, yb - ya, t1 - t0, (p + q) / 2, (ya + yb) / 2, (t0 + t1) / 2);
      };
      for (const o of ops) { seg(y, o[2]); y = o[3]; }
      seg(y, y1);
    }
  }

  // ---- shell
  W.sbox(M.floor, 14, 0.3, 19, 0, -0.15, -0.5);
  W.box(M.ceil, 15, 0.3, 20, 0, H + 0.15, -0.5);
  wall('z', -7.5, 7.5, -10.5, -10, 0, H, [], M.plaster);
  // Reuse each original box's UV offset pair for its split sections. This
  // consumes the same RNG counts, preserving all other authored room geometry.
  function exitSplit(mat, w, h, d, x, y, z, sections, solid = false) {
    if (!exitPortal) { if (solid) W.sbox(mat, w, h, d, x, y, z); else W.box(mat, w, h, d, x, y, z); return; }
    const offsets = [rand(), rand()];
    for (const [sw, sh, sd, sx, sy, sz] of sections) {
      let i = 0;
      W.geo(mat, boxGeo(sw, sh, sd, mat.userData.ts || 1, () => offsets[i++]), sx, sy, sz);
      if (solid) W.solid(sw, sh, sd, sx, sy, sz);
    }
  }
  const portal = exitPortal || { z0: 7.07, z1: 8.43, height: 2.46 };
  exitSplit(M.plaster, .5, H, 20, 7.25, H / 2, -.5, [
    [.5, H, portal.z0 + 10.5, 7.25, H / 2, (portal.z0 - 10.5) / 2],
    [.5, H - portal.height, portal.z1 - portal.z0, 7.25, (H + portal.height) / 2, (portal.z0 + portal.z1) / 2],
    [.5, H, 9.5 - portal.z1, 7.25, H / 2, (9.5 + portal.z1) / 2],
  ], true);
  const southWins = [[-5, -3, 4.5, 8.3], [2.6, 4.6, 4.5, 8.3]];
  wall('z', -7.5, 7.5, 9, 9.5, 0, H, southWins, M.plaster);
  const westWins = [[-5.6, -3.6, 0.9, 7.2], [-1.6, 0.4, 0.9, 7.2], [2.4, 7.4, 0, 3.4], [3.2, 6.6, 5.0, 8.0]];
  wall('x', -10.5, 9.5, -7.5, -7, 0, H, westWins, M.plaster);

  // ---- alcove (window-side reading nook), x[-11.5,-7] z[2.4,7.4], ceiling 3.6
  W.sbox(M.floor, 4.5, 0.3, 5, -9.25, -0.15, 4.9);
  W.box(M.ceil, 5, 0.3, 6, -9.5, 3.75, 4.9);
  W.box(M.plaster, 5.4, 0.3, 6.6, -9.75, 4.05, 4.9);
  wall('z', -12, -7.5, 1.9, 2.4, 0, 3.6, [[-10.4, -8.6, 0.9, 2.9]], M.sage);
  wall('z', -12, -7.5, 7.4, 7.9, 0, 3.6, [[-10.4, -8.6, 0.9, 2.9]], M.sage);
  wall('x', 1.9, 7.9, -12, -11.5, 0, 3.6, [[2.9, 6.9, 0.6, 3.0]], M.sage);
  // alcove ceiling beams
  const alcoveFace = -7 + TRIM_CLEARANCE;
  for (const z of [3.2, 4.9, 6.6]) W.box(M.dark, 4 - 2 * TRIM_CLEARANCE, 0.18, 0.14, -9.5, 3.6 - 0.09 - TRIM_CLEARANCE, z);
  W.box(M.oak, 0.3, 0.3, 5.2, alcoveFace + 0.15, 3.45, 4.9); // Entire lintel is outside the painted wall.

  // ---- windows: frames, iron glazing bars; register shaft volumes
  function windowFrame(f, w, h, wallT, shaft = true) {
    // A broad stool sits proud of the wall; its narrower reveal fits inside
    // the opening. Reuse one UV offset pair so downstream authored RNG stays exact.
    const offset = [rand(), rand()];
    function sillPart(width, depth, z) {
      let i = 0;
      return boxGeo(width, 0.05, depth, M.oak.userData.ts, () => offset[i++])
        .translate(0, 0.025 + TRIM_CLEARANCE, z);
    }
    const sillParts = [sillPart(w + 0.3, 0.14, 0.07 + TRIM_CLEARANCE),
      sillPart(w - 2 * TRIM_CLEARANCE, wallT, -wallT / 2 + TRIM_CLEARANCE)];
    f.geo(M.oak, mergeGeometries(sillParts, false), 0, 0, 0);
    for (const part of sillParts) part.dispose();
    f.box(M.oak, 0.12 + TRIM_CLEARANCE, h + 0.12, 0.06, -w / 2 - 0.06 + TRIM_CLEARANCE / 2, h / 2, 0.03 + TRIM_CLEARANCE);
    f.box(M.oak, 0.12 + TRIM_CLEARANCE, h + 0.12, 0.06, w / 2 + 0.06 - TRIM_CLEARANCE / 2, h / 2, 0.03 + TRIM_CLEARANCE);
    f.box(M.oak, w + 0.36, 0.14 + TRIM_CLEARANCE, 0.07, 0, h + 0.07 - TRIM_CLEARANCE / 2, 0.035 + TRIM_CLEARANCE);
    const zc = -wallT * 0.55;
    f.box(M.dark, w - 2 * TRIM_CLEARANCE, 0.07, 0.07, 0, 0.06, zc); f.box(M.dark, w - 2 * TRIM_CLEARANCE, 0.07, 0.07, 0, h - 0.035 - TRIM_CLEARANCE, zc);
    f.box(M.dark, 0.07, h - 2 * TRIM_CLEARANCE, 0.07, -w / 2 + 0.035 + TRIM_CLEARANCE, h / 2, zc); f.box(M.dark, 0.07, h - 2 * TRIM_CLEARANCE, 0.07, w / 2 - 0.035 - TRIM_CLEARANCE, h / 2, zc);
    const nv = Math.max(1, Math.round(w / 0.62));
    for (let i = 1; i < nv; i++) f.box(M.iron, 0.03, h, 0.035, -w / 2 + (w * i) / nv, h / 2, zc);
    const nh = Math.max(1, Math.round(h / 0.55));
    for (let i = 1; i < nh; i++) f.box(i % 4 === 0 ? M.dark : M.iron, w - 2 * TRIM_CLEARANCE, i % 4 === 0 ? 0.06 : 0.025, 0.035, 0, (h * i) / nh, zc);
    if (shaft) {
      const c = [];
      for (const [px, py] of [[-w / 2, 0], [w / 2, 0], [w / 2, h], [-w / 2, h]]) c.push(new THREE.Vector3(px, py, zc).applyMatrix4(f.m));
      windows.push(c);
    }
  }
  windowFrame(W.sub(-7, 0.9, -4.6, Math.PI / 2), 2, 6.3, 0.5);
  windowFrame(W.sub(-7, 0.9, -0.6, Math.PI / 2), 2, 6.3, 0.5);
  windowFrame(W.sub(-7, 5.0, 4.9, Math.PI / 2), 3.4, 3.0, 0.5);
  windowFrame(W.sub(-11.5, 0.6, 4.9, Math.PI / 2), 4, 2.4, 0.5);
  windowFrame(W.sub(-9.5, 0.9, 7.4, Math.PI), 1.8, 2.0, 0.5);
  windowFrame(W.sub(-9.5, 0.9, 2.4, 0), 1.8, 2.0, 0.5, false);
  windowFrame(W.sub(-4, 4.5, 9, Math.PI), 2, 3.8, 0.5);
  windowFrame(W.sub(3.6, 4.5, 9, Math.PI), 2, 3.8, 0.5);
  // casing around alcove opening
  for (const z of [2.33, 7.47]) W.box(M.oak, 0.14, 3.5 + TRIM_CLEARANCE, 0.6, -7 + 0.07 + TRIM_CLEARANCE, (3.5 - TRIM_CLEARANCE) / 2, z);
  // wainscot under west windows & east wall south end
  for (const z of [-4.6, -0.6]) W.box(M.dark, 0.04, 0.85, 2.0, -6.98 + TRIM_CLEARANCE, 0.45, z);
  function exitWainscot(mat, w, h, d, x, y, z) {
    const low = z - d / 2, high = z + d / 2;
    exitSplit(mat, w, h, d, x, y, z, [
      [w, h, portal.z0 - low, x, y, (low + portal.z0) / 2],
      [w, h, high - portal.z1, x, y, (portal.z1 + high) / 2],
    ]);
  }
  exitWainscot(M.dark, .05, 1, 2.2 - TRIM_CLEARANCE, 7 - .025 - TRIM_CLEARANCE, .5, 7.85 - TRIM_CLEARANCE / 2);
  exitWainscot(M.oak, .08, .06, 2.3 - TRIM_CLEARANCE, 6.96 - TRIM_CLEARANCE, 1.02, 7.85 - TRIM_CLEARANCE / 2);

  // ---- cornice, plaster band at gallery height, curtains at the tall windows
  for (const [w, d, x, z] of [[14, 0.3, 0, -9.85], [14, 0.3, 0, 8.85], [0.3, 19, -6.85, -0.5], [0.3, 19, 6.85, -0.5]]) {
    const cx = x ? x - Math.sign(x) * TRIM_CLEARANCE : x;
    const cz = z === -0.5 ? z : z - Math.sign(z) * TRIM_CLEARANCE;
    W.box(M.oak, w > 1 ? w - 2 * TRIM_CLEARANCE : w, 0.22, d > 1 ? d - 2 * TRIM_CLEARANCE : d, cx, H - 0.11 - TRIM_CLEARANCE, cz);
    W.box(M.dark, w > 1 ? w - 2 * TRIM_CLEARANCE : w + 0.1, 0.08, d > 1 ? d - 2 * TRIM_CLEARANCE : d + 0.12,
      cx - (x ? Math.sign(x) * 0.05 : 0), H - 0.26, cz - (z === -0.5 ? 0 : Math.sign(z) * 0.06));
  }
  W.box(M.oak, 0.12, 0.1, 19 - 2 * TRIM_CLEARANCE, -6.94 + TRIM_CLEARANCE, 8.4, -0.5);
  W.box(M.oak, 14 - 2 * TRIM_CLEARANCE, 0.1, 0.12, 0, 8.4, 8.94 - TRIM_CLEARANCE);
  W.box(M.oak, 0.12, 0.1, 19 - 2 * TRIM_CLEARANCE, 6.94 - TRIM_CLEARANCE, 8.4, -0.5);
  for (const zc of [-4.6, -0.6]) {
    W.cyl(M.iron, 0.02, 0.02, 2.9, -6.82, 7.55, zc, 8, Math.PI / 2, 0, 0);
    for (const s of [-1, 1]) {
      W.sphere(M.iron, 0.045, -6.82, 7.55, zc + s * 1.45);
      W.box(M.iron, 0.12, 0.03, 0.03, -6.9, 7.55, zc + s * 1.3);
      for (let k = 0; k < 4; k++) W.box(M.cushion2, 0.05 + (k % 2) * 0.03, 4.85 - k * 0.12, 0.05, -6.86 + (k % 2) * 0.03, 5.08 + k * 0.06, zc + s * (1.04 + k * 0.035), 0, 0, 0);
      W.cyl(M.brass, 0.012, 0.012, 0.2, -6.8, 3.4, zc + s * 1.1, 6, Math.PI / 2, 0, 0);
    }
  }

  // ---- ceiling trusses
  for (const z of [-8.2, -4.6, -1.0, 2.6, 6.2]) {
    W.box(M.dark, 14 - 2 * TRIM_CLEARANCE, 0.38, 0.3, 0, 9.85, z);
    W.box(M.dark, 0.24, 0.6, 0.24, 0, 10.2 - TRIM_CLEARANCE, z);
    for (const s of [-1, 1]) {
      const braceExtent = (0.2 * Math.cos(0.62) + 1.4 * Math.sin(0.62)) / 2;
      W.box(M.dark, 0.2, 1.4, 0.22, s * (7 - TRIM_CLEARANCE - braceExtent), 9.2, z, 0, 0, s * 0.62);
      W.box(M.iron, 0.36, 0.42, 0.32, s * 3.4, 9.85, z);
      W.box(M.dark, 0.25, 0.7, 0.32, s * (7 - 0.125 - TRIM_CLEARANCE), 9.2, z);
    }
  }
  for (const x of [-3.4, 3.4]) W.box(M.dark, 0.2, 0.24, 19 - 2 * TRIM_CLEARANCE, x, 10.25, -0.5);

  // ---- gallery
  W.sbox(M.floor, 14, 0.35, 3, 0, GY - 0.175, -8.5);
  W.sbox(M.floor, 2.8, 0.35, 5.8, 5.6, GY - 0.175, -4.1);
  for (let x = -6.6; x < 4.2; x += 0.9) W.box(M.dark, 0.12, 0.24, 3 - TRIM_CLEARANCE, x, GY - 0.47, -8.5 + TRIM_CLEARANCE / 2);
  for (let z = -6.6; z < -1.2; z += 0.9) W.box(M.dark, 2.8 - TRIM_CLEARANCE, 0.24, 0.12, 5.6 - TRIM_CLEARANCE / 2, GY - 0.47, z);
  W.box(M.oak, 11.31 - TRIM_CLEARANCE, 0.55, 0.24, -1.345 + TRIM_CLEARANCE / 2, GY - 0.27, -6.9);
  W.box(M.oak, 0.24, 0.55, 5.9, 4.3, GY - 0.27, -4.15);
  W.box(M.dark, 11.31 - TRIM_CLEARANCE, 0.06, 0.3, -1.345 + TRIM_CLEARANCE / 2, GY - 0.02, -6.9); W.box(M.dark, 0.3, 0.06, 5.9, 4.3, GY - 0.02, -4.15);
  // iron columns with brackets
  const cols = [[-4.6, -6.9, 'x'], [-1.4, -6.9, 'x'], [1.8, -6.9, 'x'], [4.3, -6.9, 'c'], [4.3, -4.1, 'z'], [4.3, -1.35, 'z']];
  for (const [x, z, ax] of cols) {
    W.cyl(M.iron, 0.07, 0.085, GY - 0.55, x, (GY - 0.55) / 2, z, 14);
    W.box(M.iron, 0.24, 0.16, 0.24, x, 0.08, z);
    W.box(M.iron, 0.26, 0.1, 0.26, x, GY - 0.6, z);
    W.cyl(M.iron, 0.11, 0.07, 0.18, x, GY - 0.75, z, 14);
    W.solid(0.26, GY - 0.5, 0.26, x, (GY - 0.5) / 2, z);
    const dirs = ax === 'x' ? [[1, 0], [-1, 0]] : ax === 'z' ? [[0, 1], [0, -1]] : [[-1, 0], [0, 1]];
    for (const [dx, dz] of dirs) {
      W.box(M.iron, 0.04, 0.9, 0.04, x + dx * 0.3, GY - 0.88, z + dz * 0.3, dz * 0.72, 0, -dx * 0.72);
      W.torus(M.iron, 0.12, 0.012, x + dx * 0.22, GY - 0.75, z + dz * 0.22, 0, dx ? 0 : Math.PI / 2, 0, 16);
    }
  }
  // balustrades
  function railing(x0, z0, x1, z1, y, postEvery = 2.4, authoredLength) {
    const len = Math.hypot(x1 - x0, z1 - z0);
    const ang = Math.atan2(-(z1 - z0), x1 - x0);
    const f = W.sub(x0, y, z0, ang);
    f.box(M.oak, len + 0.06, 0.07, 0.13, len / 2, 1.02, 0);
    f.box(M.iron, len, 0.04, 0.05, len / 2, 0.97, 0);
    f.box(M.iron, len, 0.04, 0.05, len / 2, 0.1, 0);
    const n = Math.round((authoredLength || len) / 0.13);
    for (let i = 1; i < n; i++) {
      const x = (len * i) / n;
      f.box(M.iron, 0.02, 0.86, 0.02, x, 0.53, 0);
      if (i % 3 === 0) f.sphere(M.iron, 0.025, x, 0.45, 0);
    }
    const np = Math.max(1, Math.round(len / postEvery));
    for (let i = 0; i <= np; i++) {
      const x = (len * i) / np;
      f.box(M.oak, 0.11, 1.12, 0.11, x, 0.56, 0);
      f.sphere(M.oak, 0.065, x, 1.16, 0, 1, 0.8, 1);
    }
    // The west end's visible wood moves clear of paint; retain its authored
    // collision rail and decorative count so movement and downstream RNG stay exact.
    const collisionFrame = authoredLength ? W.sub(-7, y, z0, ang) : f;
    const collisionLength = authoredLength || len;
    collisionFrame.solid(collisionLength, 1.1, 0.16, collisionLength / 2, 0.55, 0);
  }
  railing(-7 + 0.065 + TRIM_CLEARANCE, -6.92, 4.3, -6.92, GY, 2.4, 11.3);
  railing(4.3, -6.92, 4.3, -1.25, GY, 1.9);
  // west end cap of gallery & under-gallery plaster
  W.box(M.oak, 0.08, 0.3, 3 - TRIM_CLEARANCE, -6.96 + TRIM_CLEARANCE, GY + 0.1, -8.5 + TRIM_CLEARANCE / 2);

  // ---- broad staircase along the east wall, rising north to the east gallery
  const R = GY / 24, TD = 0.3, X0 = 4.2, X1 = 7, ZB = 6.7;
  const sx = (X0 + X1) / 2, sw = X1 - X0;
  const steps = [];
  for (let i = 1; i <= 11; i++) steps.push({ y: i * R, z0: ZB - i * TD, z1: ZB - (i - 1) * TD });
  steps.push({ y: 12 * R, z0: 2.1, z1: 3.4, landing: true });
  for (let i = 13; i <= 23; i++) steps.push({ y: i * R, z0: 2.1 - (i - 12) * TD, z1: 2.1 - (i - 13) * TD });
  for (const s of steps) {
    const d = s.z1 - s.z0, zc = (s.z0 + s.z1) / 2;
    W.box(M.dark, sw - TRIM_CLEARANCE, s.y - 0.045, d, sx - TRIM_CLEARANCE / 2, (s.y - 0.045) / 2, zc);
    W.box(M.oak, sw + 0.03 - TRIM_CLEARANCE, 0.045, d + 0.035, sx - 0.015 - TRIM_CLEARANCE / 2, s.y - 0.0225, zc + 0.0175);
    W.solid(sw, s.y, d, sx, s.y / 2, zc);
    // carpet runner and brass rod
    W.box(M.runner, 1.5, 0.012, d, sx + 0.15, s.y + 0.006, zc + 0.01);
    W.box(M.runner, 1.5, R - 0.03, 0.012, sx + 0.15, s.y - R / 2 - 0.02, s.z1 + 0.007);
    W.cyl(M.brass, 0.008, 0.008, 1.62, sx + 0.15, s.y - R + 0.012, s.z1 + 0.02, 6, 0, 0, Math.PI / 2);
    // balusters
    const nb = s.landing ? 9 : 2;
    for (let k = 0; k < nb; k++) {
      const z = s.z0 + (d * (k + 0.5)) / nb;
      W.box(M.iron, 0.022, 0.9, 0.022, X0 + 0.07, s.y + 0.45, z);
    }
    W.solid(0.16, 1.05, d, X0 + 0.07, s.y + 0.52, zc);
  }
  // handrails + stringers along the slope
  const slope = Math.atan(R / TD);
  const runs = [[ZB, 0, ZB - 11 * TD, 11 * R], [2.1, 12 * R, -1.2, 23 * R]];
  for (const [za, ya, zb2, yb] of runs) {
    const len = Math.hypot(za - zb2, yb - ya);
    const zc = (za + zb2) / 2, yc = (ya + yb) / 2;
    W.box(M.oak, 0.13, 0.07, len, X0 + 0.07, yc + 1.0, zc, slope, 0, 0);
    W.box(M.iron, 0.05, 0.04, len, X0 + 0.07, yc + 0.95, zc, slope, 0, 0);
    W.box(M.oak, 0.07, 0.32, len + 0.2, X0 - 0.02, yc + 0.02, zc - 0.05, slope, 0, 0);
  }
  W.box(M.oak, 0.13, 0.07, 1.3, X0 + 0.07, 12 * R + 1.0, 2.75);
  for (const [z, y] of [[ZB - 0.12, 0], [3.4, 11 * R], [2.1, 12 * R], [-1.25, GY]]) {
    W.box(M.oak, 0.16, 1.25, 0.16, X0 + 0.07, y + 0.62, z);
    W.box(M.oak, 0.2, 0.06, 0.2, X0 + 0.07, y + 1.26, z);
    W.sphere(M.oak, 0.08, X0 + 0.07, y + 1.35, z);
  }
  W.solid(0.2, 1.25, 0.2, X0 + 0.07, 0.62, ZB - 0.12);
  // stair-end wall (north face of the stair mass under the gallery)

  // ---- bookcases
  function bookcase(f, L, Ht, D, opt = {}) {
    const bays = Math.max(1, Math.round(L / (opt.bay || 0.92)));
    const bw = L / bays;
    const sp = opt.spacing || 0.38;
    const base = 0.14;
    const nShelves = Math.floor((Ht - base - 0.12) / sp);
    const spacing = (Ht - base - 0.12) / nShelves;
    f.box(M.dark, L, base, D - 0.03, L / 2, base / 2, -D / 2 - 0.015);
    f.box(M.walnut, L, Ht, 0.02, L / 2, Ht / 2, -D + 0.01);
    function cornice(mat, extra, h, d, y, z) {
      const left = opt.wallLeft ? TRIM_CLEARANCE : -extra / 2;
      const right = opt.wallRight ? L - TRIM_CLEARANCE : L + extra / 2;
      f.box(mat, right - left, h, d, (left + right) / 2, y, z);
    }
    cornice(M.walnut, 0.06, 0.07, D + 0.05, Ht - 0.035, -D / 2 + 0.025);
    cornice(M.walnut, 0.12, 0.05, D + 0.09, Ht + 0.025, -D / 2 + 0.045);
    if (!opt.noCornice) cornice(M.dark, 0.02, 0.1, 0.03, Ht - 0.12, 0.01);
    for (let b = 0; b <= bays; b++) {
      const x = Math.min(L - 0.02, Math.max(0.02, b * bw));
      f.box(M.walnut, 0.04, Ht - 0.07, D, x, (Ht - 0.07) / 2, -D / 2);
      const trimX = b === 0 && opt.wallLeft ? 0.03 + TRIM_CLEARANCE : b === bays && opt.wallRight ? L - 0.03 - TRIM_CLEARANCE : x;
      f.box(M.dark, 0.06, Ht - 0.2, 0.015, trimX, Ht / 2 - 0.05, 0.005);
    }
    for (let b = 0; b < bays; b++) {
      const xa = b * bw + 0.02, xb = (b + 1) * bw - 0.02;
      const jitter = (r() - 0.5) * 0.04;
      for (let k = 0; k <= nShelves; k++) {
        const y = base + k * spacing + (k > 0 && k < nShelves ? jitter : 0);
        if (k > 0 && k < nShelves + 1) f.box(M.walnut, xb - xa, 0.026, D - 0.025, (xa + xb) / 2, y - 0.013, -D / 2 - 0.0125);
        if (k < nShelves) {
          const yNext = base + (k + 1) * spacing + (k + 1 < nShelves ? jitter : 0);
          const clear = yNext - y - 0.026 - 0.005;
          const fillProb = opt.sparse ? 0.8 : 0.97;
          if (r() < fillProb) slots.push({ m: f.local(xa + 0.005, y, -0.012), len: xb - xa - 0.01, clear, d: D - 0.04 });
        }
      }
    }
    if (opt.solid !== false) f.solid(L, Ht + 0.05, D, L / 2, Ht / 2, -D / 2);
  }
  // lower level
  bookcase(W.sub(-7, 0, -9.6, 0), 14, 3.45, 0.4, { wallLeft: true, wallRight: true });
  bookcase(W.sub(-6.6, 0, -5.75, Math.PI / 2), 3.85, 3.45, 0.4);
  bookcase(W.sub(6.6, 0, -9.6, -Math.PI / 2), 8.4, 3.45, 0.4, { spacing: 0.4 });
  bookcase(W.sub(-6.6, 0, -1.7, Math.PI / 2), 1.8, 2.4, 0.36, { spacing: 0.36 });
  bookcase(W.sub(-6.6, 0, 2.3, Math.PI / 2), 1.8, 2.4, 0.36, { spacing: 0.42 });
  bookcase(W.sub(-1.4, 0, 8.6, Math.PI), 5.6, 3.2, 0.4, { spacing: 0.4, wallRight: true });
  bookcase(W.sub(7, 0, 8.6, Math.PI), 5.6, 3.2, 0.4, { spacing: 0.37, wallLeft: true });
  // gallery level
  bookcase(W.sub(-7, GY, -9.6, 0), 14, 3.8, 0.4, { spacing: 0.4, wallLeft: true, wallRight: true });
  bookcase(W.sub(-6.6, GY, -7.0, Math.PI / 2), 2.6, 3.8, 0.4, { spacing: 0.4 });
  bookcase(W.sub(6.6, GY, -9.6, -Math.PI / 2), 8.4, 3.8, 0.4, { spacing: 0.39 });
  // freestanding double-sided stacks (east-west, so late light runs down the aisles)
  for (const zc of [-5.0, -2.4]) {
    bookcase(W.sub(-4.3, 0, zc + 0.3, 0), 4.0, 2.25, 0.3, { spacing: 0.36, solid: false });
    bookcase(W.sub(-0.3, 0, zc - 0.3, Math.PI), 4.0, 2.25, 0.3, { spacing: 0.36, solid: false });
    W.solid(4.1, 2.3, 0.62, -2.3, 1.15, zc);
    for (const x of [-4.33, -0.27]) W.box(M.oak, 0.06, 2.3, 0.66, x, 1.15, zc);
    W.box(M.oak, 4.14, 0.05, 0.7, -2.3, 2.3, zc);
  }
  // alcove low cases under side windows
  bookcase(W.sub(-10.6, 0, 2.75, 0), 2.2, 0.85, 0.35, { bay: 0.75, noCornice: true });
  bookcase(W.sub(-8.4, 0, 7.05, Math.PI), 2.2, 0.85, 0.35, { bay: 0.75, noCornice: true });

  // ---- library ladders on iron rails
  function ladder(y0, x, height) {
    W.cyl(M.iron, 0.016, 0.016, 13.6, 0, y0 + height - 0.15, -9.47, 8, 0, 0, Math.PI / 2);
    for (let bx = -6.4; bx <= 6.4; bx += 2.13) W.box(M.iron, 0.03, 0.03, 0.14, bx, y0 + height - 0.15, -9.53);
    const zt = -9.45, zb = -8.35, len = Math.hypot(zb - zt, height);
    const a = -Math.atan((zb - zt) / height);
    for (const s of [-0.22, 0.22]) W.box(M.oak, 0.05, len, 0.08, x + s, y0 + height / 2, (zt + zb) / 2, a, 0, 0);
    const nr = Math.floor(len / 0.28);
    for (let i = 1; i < nr; i++) {
      const t = i / nr;
      W.cyl(M.iron, 0.014, 0.014, 0.44, x, y0 + t * height, zb + (zt - zb) * t, 8, 0, 0, Math.PI / 2);
    }
    for (const s of [-0.22, 0.22]) {
      W.cyl(M.iron, 0.035, 0.035, 0.04, x + s, y0 + 0.035, zb, 10, 0, 0, Math.PI / 2);
      W.box(M.iron, 0.02, 0.14, 0.02, x + s, y0 + height - 0.08, zt - 0.02);
    }
    W.solid(0.6, 1.2, 0.45, x, y0 + 0.6, zb - 0.15);
  }
  ladder(0, -2.6, 3.3);
  ladder(GY, 2.2, 3.4);

  // ---- furniture helpers
  function armchair(f, leather, wide = 0.9, wing = true) {
    if (wing && wide === 0.9) {
      addReadingArmchair(f, leather === M.leather2 ? 'tobacco' : 'oxblood');
      // Original wingback: seven boxGeo calls consume exactly fourteen draws.
      for (let i = 0; i < 14; i++) r();
      f.solid(wide, 0.95, 0.86, 0, 0.47, 0);
      return;
    }
    const w = wide, d = 0.86;
    f.box(leather, w, 0.3, d, 0, 0.27, 0);
    f.box(leather, w - 0.3, 0.13, d - 0.24, 0, 0.48, 0.06);
    for (const s of [-1, 1]) {
      f.box(leather, 0.16, 0.36, d - 0.05, s * (w / 2 - 0.08), 0.6, 0.02);
      f.cyl(leather, 0.095, 0.095, d - 0.02, s * (w / 2 - 0.07), 0.78, 0.03, 12, Math.PI / 2, 0, 0);
      f.cyl(M.dark, 0.03, 0.022, 0.12, s * (w / 2 - 0.07), 0.06, d / 2 - 0.08, 8);
      f.cyl(M.dark, 0.03, 0.022, 0.12, s * (w / 2 - 0.07), 0.06, -d / 2 + 0.08, 8);
      if (wing) f.box(leather, 0.1, 0.45, 0.3, s * (w / 2 - 0.06), 1.05, -d / 2 + 0.2);
    }
    const bh = wing ? 1.12 : 0.9;
    f.box(leather, w - 0.04, bh - 0.4, 0.2, 0, 0.4 + (bh - 0.4) / 2, -d / 2 + 0.1, -0.08, 0, 0);
    f.cyl(leather, 0.09, 0.09, w - 0.06, 0, bh, -d / 2 + 0.12, 12, 0, 0, Math.PI / 2);
    for (let i = 0; i < 3; i++) for (let j = 0; j < Math.round(w / 0.22); j++) {
      const nx = Math.round(w / 0.22);
      f.sphere(M.iron, 0.012, -w / 2 + 0.13 + ((w - 0.26) * (j + (i % 2) * 0.5)) / nx, 0.62 + i * 0.13, -d / 2 + 0.215, 1, 1, 0.6, 6, 4);
    }
    f.solid(w, 0.95, d, 0, 0.47, 0);
  }
  function chair(f) {
    f.box(M.oak, 0.44, 0.04, 0.42, 0, 0.46, 0);
    for (const [x, z] of [[-0.19, 0.18], [0.19, 0.18], [-0.19, -0.18], [0.19, -0.18]]) f.cyl(M.oak, 0.02, 0.018, 0.44, x, 0.22, z, 8);
    for (const x of [-0.19, 0.19]) f.box(M.oak, 0.035, 0.5, 0.035, x, 0.72, -0.19, -0.1, 0, 0);
    f.box(M.oak, 0.42, 0.08, 0.03, 0, 0.94, -0.215, -0.1, 0, 0);
    for (let i = -1; i <= 1; i++) f.box(M.oak, 0.03, 0.36, 0.02, i * 0.1, 0.72, -0.2, -0.1, 0, 0);
    f.box(M.oak, 0.38, 0.02, 0.02, 0, 0.12, 0);
    f.box(M.leather2, 0.36, 0.03, 0.34, 0, 0.495, 0.01);
    f.solid(0.44, 0.95, 0.44, 0, 0.47, 0);
  }
  function bankerLamp(f, x, y, z, ry = 0) {
    f.cyl(M.brass, 0.07, 0.08, 0.025, x, y + 0.012, z, 16);
    f.cyl(M.brass, 0.01, 0.01, 0.3, x, y + 0.17, z, 8);
    f.cyl(M.brass, 0.012, 0.012, 0.12, x, y + 0.32, z, 6, 0, ry, Math.PI / 2);
    f.cyl(M.greenGlass, 0.1, 0.1, 0.3, x, y + 0.34, z, 16, 0, ry, Math.PI / 2, false, 0, Math.PI);
    f.sphere(M.flame, 0.03, x, y + 0.31, z, 1.6, 0.6, 1);
  }
  function tableLamp(f, x, y, z, s = 1) {
    f.cyl(M.ceramic, 0.06 * s, 0.09 * s, 0.25 * s, x, y + 0.125 * s, z, 16);
    f.cyl(M.brass, 0.01, 0.01, 0.15 * s, x, y + 0.3 * s, z, 6);
    f.cyl(M.shade, 0.1 * s, 0.17 * s, 0.2 * s, x, y + 0.42 * s, z, 20, 0, 0, 0, true);
  }
  function picture(f, w, h, x, y, z, idx) {
    const t = 0.07;
    f.box(M.gilt, w + 2 * t, t, 0.05, x, y + h / 2 + t / 2, z);
    f.box(M.gilt, w + 2 * t, t, 0.05, x, y - h / 2 - t / 2, z);
    f.box(M.gilt, t, h, 0.05, x - w / 2 - t / 2, y, z);
    f.box(M.gilt, t, h, 0.05, x + w / 2 + t / 2, y, z);
    f.plane(M.painting, w, h, x, y, z, 0, 0, 0, [(idx % 2) * 0.5, Math.floor(idx / 2) * 0.5, 0.5, 0.5]);
  }
  function stackOn(f, x, y, z, n, ry) { books.stack(f.m, x, y, z, n, ry); }
  function candle(f, x, y, z, h = 0.18) {
    f.cyl(M.brass, 0.045, 0.06, 0.02, x, y + 0.01, z, 12);
    f.cyl(M.brass, 0.012, 0.02, 0.2, x, y + 0.11, z, 8);
    f.cyl(M.brass, 0.03, 0.02, 0.03, x, y + 0.22, z, 10);
    f.cyl(M.paper, 0.016, 0.016, h, x, y + 0.235 + h / 2, z, 8);
    f.sphere(M.flame, 0.012, x, y + 0.25 + h, z, 1, 2, 1, 6, 4);
  }

  // ---- reading table with banker lamps
  {
    const f = W.sub(-0.5, 0, 1.9, 0);
    f.box(M.oak, 1.25, 0.06, 3.9, 0, 0.75, 0);
    f.box(M.dark, 1.05, 0.13, 3.6, 0, 0.655, 0);
    for (const z of [-1.75, 0, 1.75]) for (const x of [-0.5, 0.5]) {
      f.cyl(M.dark, 0.05, 0.04, 0.6, x, 0.32, z, 10);
      f.sphere(M.dark, 0.06, x, 0.45, z, 1, 0.8, 1, 10, 6);
    }
    f.box(M.dark, 0.06, 0.06, 3.4, 0, 0.14, 0);
    f.solid(1.25, 0.8, 3.9, 0, 0.4, 0);
    bankerLamp(f, 0, 0.78, -0.95, Math.PI / 2);
    bankerLamp(f, 0, 0.78, 0.95, Math.PI / 2);
    lights.push({ p: new THREE.Vector3(-0.5, 1.15, 1.9), c: 0xffc27a, i: 5.5, d: 9 });
    stackOn(f, 0.35, 0.78, -1.5, 4, 0.2);
    stackOn(f, -0.38, 0.78, 1.55, 3, -0.4);
    stackOn(f, 0.4, 0.78, 0.4, 2, 1.2);
    // open book
    f.box(M.leather, 0.44, 0.012, 0.3, -0.15, 0.786, -0.25, 0, 0.1, 0);
    f.box(M.paper, 0.2, 0.025, 0.28, -0.255, 0.8, -0.26, 0, 0.1, 0.06);
    f.box(M.paper, 0.2, 0.025, 0.28, -0.055, 0.8, -0.24, 0, 0.1, -0.06);
    f.box(M.paper, 0.21, 0.004, 0.29, 0.3, 0.783, 0.9, 0, -0.3, 0);
    f.cyl(M.iron, 0.03, 0.03, 0.05, 0.42, 0.805, 0.95, 10);
    f.cyl(M.brass, 0.002, 0.002, 0.18, 0.4, 0.86, 0.95, 4, 0, 0, 0.4);
    const placements = [[-0.88, -1.2, Math.PI / 2], [-0.92, 0.05, Math.PI / 2 + 0.15], [-0.86, 1.25, Math.PI / 2], [0.86, -1.25, -Math.PI / 2], [1.15, 0.1, -Math.PI / 2 - 0.4], [0.88, 1.2, -Math.PI / 2]];
    for (const [x, z, ry] of placements) chair(f.sub(x, 0, z, ry));
  }
  // rugs
  {
    addReadingRug(W);
    const g2 = new THREE.PlaneGeometry(3.4, 5.2); g2.rotateX(-Math.PI / 2); g2.rotateY(Math.PI / 2);
    W.geo(M.rug, g2, 0, 0.008, 6.8);
    const g3 = new THREE.PlaneGeometry(2.2, 3.2); g3.rotateX(-Math.PI / 2);
    W.geo(M.rug, g3, -9.4, 0.008, 4.9);
  }

  // ---- fireplace on the south wall, with leather seating group
  {
    const f = W.sub(0, 0, 9, Math.PI);
    f.box(M.stone, 2.7, 0.08, 0.75, 0, 0.04, 0.37);
    for (const s of [-1, 1]) f.box(M.stone, 0.38, 1.28, 0.38, s * 0.96, 0.64, 0.19);
    f.box(M.stone, 2.3, 0.36, 0.4, 0, 1.46, 0.2);
    f.box(M.dark, 2.7, 0.08, 0.48, 0, 1.68, 0.24);
    f.box(M.plaster, 2.3, 3.0, 0.3, 0, 3.22, 0.15);
    f.box(M.soot, 1.56, 1.28, 0.04, 0, 0.64, 0.02);
    f.box(M.soot, 1.56, 0.02, 0.38, 0, 0.09, 0.19);
    for (let i = 0; i < 6; i++) f.box(M.iron, 0.025, 0.25, 0.025, -0.4 + i * 0.16, 0.24, 0.3);
    f.box(M.iron, 0.9, 0.03, 0.3, 0, 0.14, 0.2);
    f.cyl(M.dark, 0.06, 0.07, 0.75, 0, 0.22, 0.18, 8, 0, 0.1, Math.PI / 2);
    f.cyl(M.dark, 0.05, 0.05, 0.7, 0.05, 0.3, 0.24, 8, 0, -0.3, Math.PI / 2);
    f.box(M.ember, 0.8, 0.03, 0.26, 0, 0.165, 0.2);
    f.sphere(M.ember, 0.12, -0.1, 0.25, 0.2, 2.2, 0.5, 0.8, 8, 6);
    f.solid(2.7, 1.72, 0.8, 0, 0.86, 0.4);
    // mantel objects
    candle(f, -1.05, 1.72, 0.25); candle(f, 1.05, 1.72, 0.25, 0.14);
    f.box(M.dark, 0.32, 0.36, 0.14, 0, 1.9, 0.37 + TRIM_CLEARANCE);
    f.cyl(M.ceramic, 0.11, 0.11, 0.02, 0, 1.94, 0.45 + TRIM_CLEARANCE, 20, Math.PI / 2, 0, 0);
    f.cyl(M.brass, 0.125, 0.125, 0.015, 0, 1.94, 0.445 + TRIM_CLEARANCE, 20, Math.PI / 2, 0, 0);
    f.cyl(M.terracotta, 0.05, 0.08, 0.22, 0.6, 1.83, 0.22, 12);
    stackOn(f, -0.6, 1.72, 0.24, 2, 0.3);
    picture(f, 1.4, 0.95, 0, 3.5, 0.325 + TRIM_CLEARANCE, 2);
    // fire tools
    f.cyl(M.iron, 0.012, 0.012, 0.8, 1.32, 0.4, 0.55, 6, 0, 0, 0.08);
    f.cyl(M.brass, 0.025, 0.025, 0.06, 1.35, 0.82, 0.55, 8);
    lights.push({ p: new THREE.Vector3(0, 0.55, 8.35), c: 0xff8a3c, i: 6, d: 10, fire: true });
  }
  armchair(W.sub(0, 0, 5.7, 0), M.leather, 2.2, false);
  armchair(W.sub(-2.15, 0, 7.4, Math.PI / 2 - 0.2), M.leather2);
  armchair(W.sub(2.15, 0, 7.4, -Math.PI / 2 + 0.25), M.leather);
  {
    const f = W.sub(0, 0, 7.3, 0.05);
    f.box(M.oak, 1.1, 0.05, 0.6, 0, 0.42, 0);
    for (const [x, z] of [[-0.5, -0.25], [0.5, -0.25], [-0.5, 0.25], [0.5, 0.25]]) f.box(M.dark, 0.05, 0.4, 0.05, x, 0.2, z);
    f.box(M.dark, 1.0, 0.02, 0.5, 0, 0.1, 0);
    f.solid(1.1, 0.45, 0.6, 0, 0.22, 0);
    stackOn(f, -0.25, 0.445, 0, 3, 0.5);
    f.cyl(M.ceramic, 0.04, 0.03, 0.07, 0.25, 0.48, 0.05, 12);
    f.torus(M.ceramic, 0.025, 0.006, 0.29, 0.48, 0.05, 0, 0, 0, 10);
    f.cyl(M.ceramic, 0.07, 0.07, 0.008, 0.25, 0.449, 0.05, 16);
    stackOn(f, -0.2, 0.12, 0, 3, 0);
    // side table + lamp by the sofa
    const g = W.sub(1.45, 0, 5.75, 0);
    g.cyl(M.dark, 0.25, 0.25, 0.03, 0, 0.6, 0, 20); g.cyl(M.dark, 0.03, 0.04, 0.58, 0, 0.3, 0, 8); g.cyl(M.dark, 0.18, 0.2, 0.03, 0, 0.015, 0, 16);
    g.solid(0.5, 0.62, 0.5, 0, 0.31, 0);
    tableLamp(g, 0, 0.615, 0, 1.1);
  }

  // ---- alcove furnishings
  {
    // Remove the bench's hidden back overlap with the sage window reveal.
    W.box(M.oak, 0.6, 0.45, 4.0, -11.19, 0.225, 4.9);
    W.solid(0.62, 0.45, 4.0, -11.2, 0.225, 4.9);
    W.box(M.cushion, 0.56, 0.1, 3.9, -11.2, 0.5, 4.9);
    W.box(M.cushion2, 0.16, 0.42, 0.5, -11.38, 0.74, 3.25, 0, 0, -0.25);
    W.box(M.leather2, 0.16, 0.38, 0.46, -11.38, 0.72, 6.5, 0, 0.2, -0.3);
    W.box(M.cushion, 0.4, 0.06, 0.6, -11.1, 0.58, 5.2, 0, 0.4, 0);
    books.stack(W.m, -11.2, 0.55, 4.3, 3, 0.4);
    W.cyl(M.terracotta, 0.11, 0.08, 0.2, -11.25, 0.65, 6.0, 14);
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      W.box(M.plant, 0.06, 0.32, 0.01, -11.25 + Math.cos(a) * 0.06, 0.88, 6.0 + Math.sin(a) * 0.06, Math.sin(a) * 0.5, a, Math.cos(a) * 0.5);
    }
    armchair(W.sub(-9.3, 0, 3.4, -Math.PI / 2 + 0.55), M.leather);
    armchair(W.sub(-9.3, 0, 6.35, -Math.PI / 2 - 0.55), M.leather2);
    const f = W.sub(-9.9, 0, 4.9, 0);
    f.cyl(M.oak, 0.3, 0.3, 0.035, 0, 0.6, 0, 24); f.cyl(M.dark, 0.035, 0.05, 0.58, 0, 0.3, 0, 10);
    for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI * 2; f.box(M.dark, 0.05, 0.05, 0.3, Math.cos(a) * 0.12, 0.04, Math.sin(a) * 0.12, 0, -a + Math.PI / 2, 0); }
    f.solid(0.6, 0.62, 0.6, 0, 0.31, 0);
    stackOn(f, -0.08, 0.62, -0.08, 3, 0.7);
    f.cyl(M.ceramic, 0.045, 0.035, 0.06, 0.14, 0.65, 0.1, 12);
    f.cyl(M.ceramic, 0.075, 0.075, 0.008, 0.14, 0.62, 0.1, 16);
    // iron floor lamp
    const l = W.sub(-8.0, 0, 7.0, 0);
    l.cyl(M.iron, 0.16, 0.18, 0.03, 0, 0.015, 0, 16); l.cyl(M.iron, 0.014, 0.014, 1.5, 0, 0.76, 0, 8);
    l.cyl(M.shade, 0.14, 0.24, 0.28, 0, 1.55, 0, 20, 0, 0, 0, true);
    l.solid(0.36, 1.6, 0.36, 0, 0.8, 0);
    lights.push({ p: new THREE.Vector3(-8.0, 1.5, 6.9), c: 0xffb46a, i: 4, d: 7 });
    picture(W.sub(-7.5, 0, 2.4, 0), 0.5, 0.4, -0.45, 2.0, 0.03, 3);
    stackOn(W, -8.6, 0, 7.15, 5, 0.3);
  }

  // ---- globe near window B
  {
    const f = W.sub(-5.9, 0, -0.7, 0.3);
    // Preserve the six UV-offset RNG draws consumed by the old three box legs.
    for (let i = 0; i < 6; i++) r();
    buildAntiqueGlobe(f, M);
    f.solid(0.7, 1.3, 0.7, 0, 0.65, 0);
  }

  // ---- card catalogue against the stair end (lower NE nook)
  {
    const f = W.sub(5.5, 0, -1.22, Math.PI);
    f.box(M.oak, 1.9, 1.1, 0.5, 0, 0.55, 0.25);
    for (let i = 0; i < 8; i++) for (let j = 0; j < 6; j++) {
      const x = -0.82 + i * 0.235, y = 0.22 + j * 0.15;
      f.box(M.walnut, 0.2, 0.12, 0.02, x, y, 0.505);
      f.box(M.brass, 0.05, 0.012, 0.02, x, y - 0.02, 0.52);
      f.box(M.paper, 0.05, 0.025, 0.005, x, y + 0.025, 0.517);
    }
    f.box(M.walnut, 2.0, 0.05, 0.56, 0, 1.125, 0.25);
    f.solid(1.9, 1.15, 0.5, 0, 0.57, 0.25);
    tableLamp(f, 0.65, 1.15, 0.25, 0.9);
    stackOn(f, -0.4, 1.15, 0.25, 4, 0.2);
    // wall sconce in the nook
    W.cyl(M.brass, 0.008, 0.008, 0.75, 5.5, GY - 0.95, -4.1, 6);
    W.cyl(M.brass, 0.04, 0.04, 0.05, 5.5, GY - 0.6, -4.1, 10);
    W.cyl(M.shade, 0.1, 0.22, 0.2, 5.5, GY - 1.38, -4.1, 20, 0, 0, 0, true);
    W.sphere(M.flame, 0.035, 5.5, GY - 1.4, -4.1, 1, 1, 1, 8, 6);
    lights.push({ p: new THREE.Vector3(5.5, GY - 1.5, -4.1), c: 0xffbc7a, i: 3.5, d: 7 });
  }

  // ---- gallery: desk at west end, reading chair overlooking the room on the east gallery
  {
    const f = W.sub(-5.6, GY, -8.85, 0);
    addWritingDesk(f);
    f.solid(1.4, 0.8, 0.7, 0, 0.4, 0);
    bankerLamp(f, -0.4, 0.785, -0.1, 0);
    stackOn(f, 0.45, 0.785, -0.1, 5, 0);
    f.box(M.paper, 0.3, 0.004, 0.22, 0.05, 0.787, 0.1, 0, 0.2, 0);
    chair(f.sub(0.05, 0, 0.6, Math.PI + 0.2));
    lights.push({ p: new THREE.Vector3(-5.9, GY + 1.25, -8.85), c: 0xffc27a, i: 4.5, d: 8 });
    armchair(W.sub(6.0, GY, -3.6, -Math.PI / 2), M.leather2);
    const t = W.sub(6.1, GY, -2.4, 0);
    t.cyl(M.dark, 0.22, 0.22, 0.03, 0, 0.55, 0, 18); t.cyl(M.dark, 0.03, 0.03, 0.54, 0, 0.27, 0, 8); t.cyl(M.dark, 0.15, 0.17, 0.03, 0, 0.015, 0, 14);
    t.solid(0.44, 0.58, 0.44, 0, 0.29, 0);
    stackOn(t, 0, 0.565, 0, 3, 0.4);
    books.stack(W.m, 3.4, GY, -9.0, 6, 0.2);
    books.stack(W.m, -1.6, 0, -8.9, 4, 0.1);
  }

  // ---- iron ring chandeliers (unlit fittings)
  for (const [x, y, z] of [[-0.5, 6.2, 1.9], [-2.3, 7.0, -3.7]]) {
    W.torus(M.iron, 0.75, 0.025, x, y, z, Math.PI / 2, 0, 0, 40);
    W.torus(M.iron, 0.4, 0.018, x, y - 0.25, z, Math.PI / 2, 0, 0, 28);
    W.cyl(M.iron, 0.006, 0.006, 10.5 - y, x, (10.5 + y) / 2, z, 4);
    for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2 + 0.4; W.cyl(M.iron, 0.005, 0.005, 1.1, x + Math.cos(a) * 0.37, y + 0.45, z + Math.sin(a) * 0.37, 4, Math.sin(a) * 0.72, 0, -Math.cos(a) * 0.72); }
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const cx = x + Math.cos(a) * 0.75, cz = z + Math.sin(a) * 0.75;
      W.cyl(M.iron, 0.03, 0.02, 0.04, cx, y + 0.03, cz, 8);
      W.cyl(M.paper, 0.014, 0.014, 0.14, cx, y + 0.12, cz, 6);
      W.sphere(M.flame, 0.011, cx, y + 0.205, cz, 1, 2, 1, 6, 4);
    }
  }

  // ---- paintings & small decor
  picture(W.sub(7, 0, 0, -Math.PI / 2), 1.1, 0.8, 4.6, 3.1, 0.03, 0);
  picture(W.sub(7, 0, 0, -Math.PI / 2), 0.9, 1.2, 0.7, 5.3, 0.03, 1);
  picture(W.sub(-7, 0, 0, Math.PI / 2), 0.9, 0.7, 2.6, 3.2, 0.03, 3);
  picture(W.sub(-7, 0, 0, Math.PI / 2), 0.9, 0.7, -1.4, 3.2, 0.03, 1);
  // objects on top of the stacks
  {
    const f = W;
    f.sphere(M.ceramic, 0.12, -3.6, 2.5, -5.0, 0.85, 1.1, 0.85, 14, 10); f.cyl(M.ceramic, 0.07, 0.1, 0.16, -3.6, 2.4, -5.0, 12); f.box(M.stone, 0.2, 0.08, 0.2, -3.6, 2.36, -5.0);
    books.stack(W.m, -1.2, 2.325, -5.0, 3, 0.3);
    f.cyl(M.terracotta, 0.12, 0.09, 0.26, -1.0, 2.455, -2.4, 14);
    f.sphere(M.plant, 0.18, -1.0, 2.7, -2.4, 1, 0.7, 1, 10, 6);
    books.stack(W.m, -3.2, 2.325, -2.4, 4, 1.2);
    candle(W, -2.4, 2.325, -2.4);
  }

  // decor callback for shelf gaps: bookends, boxes, small vases
  const decor = (slot, x, gw) => {
    const f = new Frame(B, slot.m);
    const k = r();
    if (k < 0.35) {
      f.box(M.iron, 0.012, Math.min(0.16, slot.clear - 0.02), 0.11, x - gw / 2 + 0.01, Math.min(0.16, slot.clear - 0.02) / 2, -0.08);
      f.box(M.iron, 0.09, 0.006, 0.11, x - gw / 2 + 0.05, 0.003, -0.08);
    } else if (k < 0.55 && slot.clear > 0.22) {
      f.cyl(r() < 0.5 ? M.ceramic : M.terracotta, 0.035, 0.05, 0.15, x, 0.075, -0.1, 12);
    } else if (k < 0.75) {
      const bw = Math.min(gw - 0.02, 0.14);
      f.box(r() < 0.5 ? M.walnut : M.leather2, bw, Math.min(0.08, slot.clear - 0.02), 0.12, x, 0.04, -0.1);
    } else if (k < 0.85 && slot.clear > 0.2) {
      f.box(M.gilt, 0.1, 0.13, 0.012, x, 0.065, -0.12, -0.15, 0, 0);
    }
  };

  for (const s of slots) books.fillSlot(s, decor);
  // a few deliberately emptier shelves
  B.finish = B.finish.bind(B);
  return { B, lights, windows, slots };
}
