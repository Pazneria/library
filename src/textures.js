import * as THREE from 'three';

// Deterministic RNG so the room is "collected" the same way every load.
export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Tileable value-noise fBm on the unit square.
function makeFbm(seed, base = 4, octaves = 4) {
  const r = rng(seed);
  const layers = [];
  for (let o = 0; o < octaves; o++) {
    const P = base << o;
    const g = new Float32Array(P * P);
    for (let i = 0; i < g.length; i++) g[i] = r();
    layers.push({ P, g });
  }
  // A texture visits the same u/v coordinates across many rows/columns. Cache
  // interpolation coordinates (not noise values) with full double precision.
  // Limit each axis cache so callers using arbitrary coordinates stay bounded.
  const CACHE_LIMIT = 4096;
  const xCache = new Map(), yCache = new Map();
  function axis(cache, coordinate, row) {
    let values = cache.get(coordinate);
    if (values) return values;
    values = new Float64Array(layers.length * 3);
    for (let o = 0; o < layers.length; o++) {
      const P = layers[o].P;
      const x = coordinate * P, xi = Math.floor(x), xf = x - xi;
      const x0 = ((xi % P) + P) % P, x1 = (x0 + 1) % P;
      const i = o * 3;
      values[i] = row ? x0 * P : x0;
      values[i + 1] = row ? x1 * P : x1;
      values[i + 2] = xf * xf * (3 - 2 * xf);
    }
    if (cache.size >= CACHE_LIMIT) cache.delete(cache.keys().next().value);
    cache.set(coordinate, values);
    return values;
  }
  let norm = 0, amplitude = 0.5;
  for (let o = 0; o < layers.length; o++) { norm += amplitude; amplitude *= 0.5; }
  return (u, v) => {
    const xs = axis(xCache, u, false), ys = axis(yCache, v, true);
    let sum = 0, amp = 0.5;
    for (let o = 0; o < layers.length; o++) {
      const g = layers[o].g, i = o * 3;
      const x0 = xs[i], x1 = xs[i + 1], a = xs[i + 2];
      const y0 = ys[i], y1 = ys[i + 1], b = ys[i + 2];
      const n00 = g[y0 + x0], n10 = g[y0 + x1], n01 = g[y1 + x0], n11 = g[y1 + x1];
      sum += amp * (n00 + (n10 - n00) * a + (n01 - n00) * b + (n00 - n10 - n01 + n11) * a * b);
      amp *= 0.5;
    }
    return sum / norm;
  };
}

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function toTex(c, srgb = true, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}

function fillPixels(c, fn) {
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(c.width, c.height);
  const d = img.data;
  const out = [0, 0, 0];
  for (let y = 0; y < c.height; y++) {
    for (let x = 0; x < c.width; x++) {
      fn(x / c.width, y / c.height, out, x, y);
      const i = (y * c.width + x) * 4;
      d[i] = out[0]; d[i + 1] = out[1]; d[i + 2] = out[2]; d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return ctx;
}

const clamp = (v, a = 0, b = 255) => (v < a ? a : v > b ? b : v);

// Grain runs along U. Rings warped by low-frequency noise, plus fibres.
export function woodTexture(seed, base, dark, opt = {}) {
  const size = opt.size || 512;
  const c = canvas(size, size);
  const warp = makeFbm(seed, 2, 4);
  const fib = makeFbm(seed + 7, 8, 3);
  const blot = makeFbm(seed + 13, 3, 4);
  const rings = opt.rings || 9;
  fillPixels(c, (u, v, o) => {
    const w = warp(u * 0.5, v) * 3.0;
    let ring = Math.sin((v * rings + w) * Math.PI * 2);
    ring = Math.pow(Math.abs(ring), 0.35);
    const f = fib(u * 0.25, v * 8.0);
    const fine = fib(u * 2.0, v * 32.0 % 1);
    let t = 0.55 * ring + 0.3 * f + 0.15 * fine;
    t = t * (0.85 + 0.3 * blot(u, v));
    for (let k = 0; k < 3; k++) o[k] = clamp(dark[k] + (base[k] - dark[k]) * t);
  });
  return toTex(c);
}

// Long oak floor boards running along U, staggered joints, worn sheen variation.
export function floorTexture(seed) {
  const size = 1024;
  const c = canvas(size, size);
  const r = rng(seed);
  const rows = 8;
  const plank = [];
  for (let i = 0; i < rows; i++) plank.push({ off: r(), tone: 0.78 + r() * 0.35, hue: r(), len: 0.45 + r() * 0.3 });
  const warp = makeFbm(seed + 3, 2, 4);
  const fib = makeFbm(seed + 9, 8, 3);
  const wear = makeFbm(seed + 11, 3, 4);
  const base = [150, 98, 58], dark = [78, 46, 24];
  fillPixels(c, (u, v, o) => {
    const row = Math.floor(v * rows);
    const p = plank[row];
    const lv = v * rows - row;
    const uu = (u + p.off) % 1;
    const seg = Math.floor(uu / p.len * 2);
    const segPos = (uu / p.len * 2) % 1;
    const tone = p.tone * (seg % 2 ? 0.92 : 1.04) * (0.96 + 0.08 * Math.sin(seg * 12.9 + row));
    const w = warp(u, v * 0.5 + row * 0.13) * 2.5;
    let ring = Math.abs(Math.sin((lv * 3 + w + seg) * Math.PI * 2));
    ring = Math.pow(ring, 0.4);
    const f = fib(u * 0.5, v * 4.0);
    let t = (0.55 * ring + 0.45 * f) * tone;
    const wr = wear(u, v);
    t *= 0.9 + 0.2 * wr;
    let edge = Math.min(lv, 1 - lv) * 64;
    let joint = Math.min(segPos, 1 - segPos) * 260;
    const gap = Math.min(1, edge, joint);
    for (let k = 0; k < 3; k++) o[k] = clamp((dark[k] + (base[k] - dark[k]) * t) * (0.25 + 0.75 * gap) + (p.hue - 0.5) * (k === 0 ? 12 : k === 1 ? 6 : 0));
  });
  return toTex(c);
}

export function plasterTexture(seed, base) {
  const size = 512;
  const c = canvas(size, size);
  const n = makeFbm(seed, 4, 5);
  const m = makeFbm(seed + 1, 16, 2);
  fillPixels(c, (u, v, o) => {
    const a = n(u, v), b = m(u, v);
    const t = 0.88 + 0.16 * a + 0.05 * b;
    o[0] = clamp(base[0] * t); o[1] = clamp(base[1] * t); o[2] = clamp(base[2] * (t - 0.02));
  });
  return toTex(c);
}

export function stoneTexture(seed) {
  const size = 512;
  const c = canvas(size, size);
  const n = makeFbm(seed, 6, 5);
  const m = makeFbm(seed + 4, 24, 2);
  fillPixels(c, (u, v, o) => {
    // ashlar courses
    const row = Math.floor(v * 4);
    const uu = (u + (row % 2) * 0.5) % 1;
    const lv = v * 4 - row, lu = uu * 2 - Math.floor(uu * 2);
    const joint = Math.min(1, Math.min(lv, 1 - lv) * 40, Math.min(lu, 1 - lu) * 60);
    const t = (0.8 + 0.25 * n(u, v) + 0.08 * m(u, v)) * (0.55 + 0.45 * joint);
    o[0] = clamp(196 * t); o[1] = clamp(178 * t); o[2] = clamp(150 * t);
  });
  return toTex(c);
}

// Worn leather: pebble grain, creases, lighter rubbed patches.
export function leatherTexture(seed, base) {
  const size = 512;
  const c = canvas(size, size);
  const grain = makeFbm(seed, 64, 2);
  const crease = makeFbm(seed + 2, 8, 4);
  const wear = makeFbm(seed + 5, 3, 4);
  fillPixels(c, (u, v, o) => {
    const g = grain(u, v);
    const cr = Math.abs(crease(u, v) - 0.5);
    const creaseLine = cr < 0.015 ? 0.7 : 1;
    const w = Math.max(0, wear(u, v) - 0.52) * 3.2;
    const t = (0.82 + 0.3 * g) * creaseLine;
    for (let k = 0; k < 3; k++) {
      const worn = base[k] + (k === 0 ? 70 : k === 1 ? 52 : 36);
      o[k] = clamp((base[k] * (1 - w) + worn * w) * t);
    }
  });
  return toTex(c);
}

export function fabricTexture(seed, base, stripe) {
  const size = 256;
  const c = canvas(size, size);
  const n = makeFbm(seed, 8, 3);
  fillPixels(c, (u, v, o, x, y) => {
    const weave = ((x + y) % 4 < 2 ? 1 : 0.92) * (x % 2 ? 1 : 0.96);
    const s = stripe && Math.sin(u * Math.PI * 2 * 6) > 0.6 ? 0.82 : 1;
    const t = weave * s * (0.9 + 0.15 * n(u, v));
    for (let k = 0; k < 3; k++) o[k] = clamp(base[k] * t);
  });
  return toTex(c);
}

// Faded oriental-style rug with border bands and medallion field.
export function rugTexture(seed) {
  const W = 512, H = 768;
  const c = canvas(W, H);
  const ctx = c.getContext('2d');
  const r = rng(seed);
  ctx.fillStyle = '#7a2a22'; ctx.fillRect(0, 0, W, H);
  const band = (inset, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.strokeRect(inset, inset, W - inset * 2, H - inset * 2); };
  band(14, 22, '#2a2440'); band(34, 6, '#c9a46a'); band(52, 26, '#3c4a5c'); band(70, 5, '#c9a46a');
  // border motifs
  ctx.fillStyle = '#d2b07a';
  for (let i = 0; i < 26; i++) {
    const t = i / 26;
    const pts = [[t * W, 52], [W - 52, t * H], [W - t * W, H - 52], [52, H - t * H]];
    for (const [x, y] of pts) { ctx.save(); ctx.translate(x, y); ctx.rotate(Math.PI / 4); ctx.fillRect(-5, -5, 10, 10); ctx.restore(); }
  }
  // field lattice
  for (let y = 110; y < H - 100; y += 48) {
    for (let x = 110; x < W - 100; x += 48) {
      ctx.fillStyle = (x + y) % 96 === 0 ? '#2f3a52' : '#a8742f';
      ctx.save(); ctx.translate(x, y); ctx.rotate(Math.PI / 4); ctx.fillRect(-7, -7, 14, 14); ctx.restore();
      ctx.fillStyle = '#e0c590'; ctx.fillRect(x - 2, y - 2, 4, 4);
    }
  }
  // central medallion
  ctx.save(); ctx.translate(W / 2, H / 2);
  const rings = [[150, '#2a2440'], [130, '#c9a46a'], [118, '#3c4a5c'], [86, '#8e3a2a'], [60, '#d8bd85'], [36, '#2a2440']];
  for (const [rad, col] of rings) { ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(0, 0, rad * 0.75, rad, 0, 0, Math.PI * 2); ctx.fill(); }
  ctx.restore();
  // fading + wear
  const img = ctx.getImageData(0, 0, W, H);
  const n = makeFbm(seed + 3, 4, 4);
  const g = makeFbm(seed + 5, 64, 1);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    const f = 0.78 + 0.28 * n(x / W, y / H) + 0.08 * g(x / W, y / H);
    const worn = Math.max(0, n(x / W + 0.3, y / H) - 0.58) * 1.6;
    for (let k = 0; k < 3; k++) img.data[i + k] = clamp(img.data[i + k] * f * (1 - worn) + 150 * worn);
  }
  ctx.putImageData(img, 0, 0);
  const t = toTex(c, true, false);
  return t;
}

// Book atlas: U 0..0.5 = 8 spine variants, 0.5..0.75 = page edges, 0.75..1 = cover cloth.
// Neutral greys are tinted per-instance; gold (warm) texels keep their colour (see shader).
export function bookAtlas(seed) {
  const W = 512, H = 256;
  const c = canvas(W, H);
  const ctx = c.getContext('2d');
  const r = rng(seed);
  const n = makeFbm(seed, 16, 3);
  // base neutral noise everywhere
  fillPixels(c, (u, v, o) => { const t = 200 + 40 * n(u, v); o[0] = o[1] = o[2] = t; });
  const gold = '#d9a94a';
  const sw = 32;
  for (let k = 0; k < 8; k++) {
    const x0 = k * sw;
    ctx.save();
    ctx.beginPath(); ctx.rect(x0, 0, sw, H); ctx.clip();
    // edge wear/darkening at spine corners
    const grd = ctx.createLinearGradient(x0, 0, x0 + sw, 0);
    grd.addColorStop(0, 'rgba(0,0,0,0.35)'); grd.addColorStop(0.2, 'rgba(0,0,0,0)'); grd.addColorStop(0.8, 'rgba(0,0,0,0)'); grd.addColorStop(1, 'rgba(0,0,0,0.35)');
    ctx.fillStyle = grd; ctx.fillRect(x0, 0, sw, H);
    ctx.fillStyle = gold;
    if (k === 0) { ctx.fillRect(x0, 14, sw, 2); ctx.fillRect(x0, H - 16, sw, 2); }
    if (k === 1) {
      for (const y of [40, 90, 140, 190]) { ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fillRect(x0, y, sw, 6); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(x0, y, sw, 2); }
      ctx.fillStyle = '#2a1a14'; ctx.fillRect(x0 + 3, 52, sw - 6, 30);
      ctx.fillStyle = gold; for (let i = 0; i < 3; i++) ctx.fillRect(x0 + 7, 60 + i * 7, sw - 14 - r() * 6, 2);
    }
    if (k === 2) {
      for (let i = 0; i < 6; i++) ctx.fillRect(x0 + 8, 50 + i * 9, sw - 16 - r() * 8, 3);
      ctx.fillRect(x0, H - 30, sw, 6);
    }
    if (k === 3) {
      ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(x0, 0, sw, 34); ctx.fillRect(x0, H - 34, sw, 34);
      ctx.fillStyle = gold; ctx.fillRect(x0, 34, sw, 2); ctx.fillRect(x0, H - 36, sw, 2);
      for (let i = 0; i < 4; i++) ctx.fillRect(x0 + 9, 80 + i * 8, sw - 18, 2);
    }
    if (k === 4) {
      ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(x0, 0, sw, H);
      ctx.fillStyle = 'rgba(20,20,20,0.75)'; for (let i = 0; i < 10; i++) ctx.fillRect(x0 + 12, 40 + i * 12, 3 + r() * 4, 7);
    }
    if (k === 5) {
      for (const y of [8, 16, 24, H - 26, H - 18, H - 10]) ctx.fillRect(x0, y, sw, 2);
      for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.arc(x0 + sw / 2, 60 + i * 30, 3, 0, Math.PI * 2); ctx.fill(); }
      ctx.fillStyle = '#1d1d1d'; ctx.fillRect(x0 + 4, 34, sw - 8, 18);
      ctx.fillStyle = gold; ctx.fillRect(x0 + 8, 41, sw - 16, 3);
    }
    if (k === 6) {
      ctx.fillStyle = 'rgba(255,255,255,0.3)'; for (let i = 0; i < 40; i++) ctx.fillRect(x0 + r() * sw, r() < 0.5 ? r() * 30 : H - r() * 30, 2 + r() * 4, 1 + r() * 2);
      ctx.fillStyle = gold; ctx.fillRect(x0 + 10, 70, sw - 20, 3);
    }
    if (k === 7) {
      ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(x0, 20, sw, 10); ctx.fillRect(x0, H - 30, sw, 10);
      ctx.fillStyle = 'rgba(240,235,220,1)'; ctx.fillRect(x0 + 5, 60, sw - 10, 34);
      ctx.fillStyle = 'rgba(40,30,20,0.8)'; ctx.fillRect(x0 + 8, 70, sw - 16, 2); ctx.fillRect(x0 + 8, 78, sw - 18, 2);
    }
    ctx.restore();
  }
  // page block: fine vertical lines along V
  for (let x = 256; x < 384; x++) {
    const t = 215 + (Math.sin(x * 2.7) * 0.5 + 0.5) * 30 * r();
    ctx.fillStyle = `rgb(${t},${t},${t - 4})`; ctx.fillRect(x, 0, 1, H);
  }
  return toTex(c, true, false);
}

// Small painting atlas (4 canvases, 2x2) for framed pictures.
export function paintingAtlas(seed) {
  const S = 512;
  const c = canvas(S, S);
  const ctx = c.getContext('2d');
  const r = rng(seed);
  const scenes = [
    ['#d8b27a', '#8a6a4a', '#4b5a3a', '#2e3a2a'],
    ['#9fb3c0', '#6a7a6a', '#3e4a3a', '#22281e'],
    ['#e8c28a', '#b07a4a', '#5a3a2a', '#2a1e18'],
    ['#7a8aa0', '#5a6058', '#3a3a30', '#1e1e18'],
  ];
  scenes.forEach((cols, k) => {
    const x0 = (k % 2) * 256, y0 = Math.floor(k / 2) * 256;
    const g = ctx.createLinearGradient(0, y0, 0, y0 + 256);
    g.addColorStop(0, cols[0]); g.addColorStop(0.55, cols[1]); g.addColorStop(1, cols[3]);
    ctx.fillStyle = g; ctx.fillRect(x0, y0, 256, 256);
    for (let l = 0; l < 3; l++) {
      ctx.fillStyle = cols[1 + l];
      ctx.beginPath(); ctx.moveTo(x0, y0 + 256);
      const base = 120 + l * 45;
      for (let i = 0; i <= 16; i++) ctx.lineTo(x0 + i * 16, y0 + base + Math.sin(i * 0.7 + l * 2 + k) * 18 + r() * 10);
      ctx.lineTo(x0 + 256, y0 + 256); ctx.fill();
    }
    if (k === 2) { ctx.fillStyle = 'rgba(255,230,170,0.8)'; ctx.beginPath(); ctx.arc(x0 + 180, y0 + 90, 18, 0, 7); ctx.fill(); }
    // craquelure / varnish darkening
    const v = ctx.createRadialGradient(x0 + 128, y0 + 128, 40, x0 + 128, y0 + 128, 190);
    v.addColorStop(0, 'rgba(60,40,10,0)'); v.addColorStop(1, 'rgba(40,25,5,0.55)');
    ctx.fillStyle = v; ctx.fillRect(x0, y0, 256, 256);
  });
  return toTex(c, true, false);
}

export function globeTexture(seed) {
  const W = 512, H = 256;
  const c = canvas(W, H);
  const n = makeFbm(seed, 4, 5);
  fillPixels(c, (u, v, o) => {
    const land = n(u, v * 0.5 + 0.2) > 0.53;
    const lat = Math.abs(v - 0.5);
    const grid = (Math.abs((u * 24) % 1) < 0.03 || Math.abs((v * 12) % 1) < 0.04) ? 0.82 : 1;
    if (land) { o[0] = 196 * grid; o[1] = 168 * grid; o[2] = 112 * grid; }
    else { o[0] = (150 - lat * 60) * grid; o[1] = (140 - lat * 40) * grid; o[2] = (100 - lat * 20) * grid; }
  });
  return toTex(c, true, false);
}

export function softDot() {
  const c = canvas(64, 64);
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, 'rgba(255,255,255,0.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
