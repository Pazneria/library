import * as THREE from 'three';
import land from './land.js';

// Original engraving/layout; coastlines are Natural Earth 1:110m, public domain.
// No network requests, downloaded imagery, browser fonts or shared room RNG.
export const ATLAS_SIZES = Object.freeze({ map: [2048, 1024], walnut: [256, 512], scales: [1024, 256] });
const TAU = Math.PI * 2;
const defaultCanvas = (w, h) => {
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  return canvas;
};

function texture(canvas, repeat = false) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.wrapS = repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.name = 'Antique globe / ' + canvas.width + 'x' + canvas.height;
  return tex;
}

// Stateless grain: deterministic even when the room's construction order changes.
function noise(x, y) {
  let n = Math.imul(x + 19, 374761393) ^ Math.imul(y + 53, 668265263);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
}

function tracked(ctx, text, x, y, size, spacing, italic = false) {
  ctx.font = `${italic ? 'italic ' : ''}${size}px Georgia, "Times New Roman", serif`;
  ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
  const widths = [...text].map(c => ctx.measureText(c).width);
  let at = x - (widths.reduce((a, b) => a + b, 0) + (text.length - 1) * spacing) / 2;
  for (let i = 0; i < text.length; i++) { ctx.fillText(text[i], at, y); at += widths[i] + spacing; }
}

function compass(ctx, x, y, r) {
  ctx.save(); ctx.translate(x, y);
  ctx.strokeStyle = '#766347'; ctx.lineWidth = 0.9;
  for (const radius of [r * 0.65, r * 0.71, r * 1.02]) {
    ctx.beginPath(); ctx.arc(0, 0, radius, 0, TAU); ctx.stroke();
  }
  for (let i = 0; i < 16; i++) {
    ctx.save(); ctx.rotate(i * TAU / 16);
    const len = r * (i % 4 === 0 ? 1.25 : i % 2 === 0 ? 0.91 : 0.64);
    ctx.beginPath(); ctx.moveTo(0, -len); ctx.lineTo(r * 0.1, 0); ctx.lineTo(0, r * 0.15); ctx.closePath();
    ctx.fillStyle = i % 2 ? '#b79e6d' : '#5e654f'; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -len); ctx.lineTo(-r * 0.1, 0); ctx.lineTo(0, r * 0.15); ctx.closePath();
    ctx.fillStyle = '#e4d3a9'; ctx.fill(); ctx.stroke(); ctx.restore();
  }
  ctx.fillStyle = '#514936';
  tracked(ctx, 'N', 0, -r * 1.52, 15, 0);
  tracked(ctx, 'S', 0, r * 1.48, 11, 0);
  tracked(ctx, 'E', r * 1.48, 0, 11, 0);
  tracked(ctx, 'W', -r * 1.48, 0, 11, 0);
  ctx.restore();
}

export function drawMap(canvas) {
  const ctx = canvas.getContext('2d'), w = canvas.width, h = canvas.height;
  const xy = (lon, lat) => [(lon + 180) / 360 * w, (90 - lat) / 180 * h];
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4;
    const fibre = (noise(x, y) - 0.5) * 5 + Math.sin(x * 0.038) * Math.sin(y * 0.028) * 1.5;
    img.data[i] = 222 + fibre; img.data[i + 1] = 207 + fibre; img.data[i + 2] = 167 + fibre; img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);

  // Quiet rhumb-line web below the actual coastlines and graticule.
  ctx.strokeStyle = 'rgba(123,89,52,0.12)'; ctx.lineWidth = 0.75;
  for (const [lon, lat] of [[-138, -13], [68, -28]]) {
    const [x, y] = xy(lon, lat);
    for (let i = 0; i < 16; i++) {
      const a = i * TAU / 16;
      ctx.beginPath(); ctx.moveTo(x - Math.cos(a) * w, y - Math.sin(a) * w);
      ctx.lineTo(x + Math.cos(a) * w, y + Math.sin(a) * w); ctx.stroke();
    }
  }
  ctx.lineJoin = 'round';
  for (let p = 0; p < land.length; p++) {
    ctx.beginPath();
    for (const ring of land[p]) {
      ring.forEach(([lon, lat], index) => { const [x, y] = xy(lon, lat); if (index === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); });
      ctx.closePath();
    }
    // A restrained hand-tinted wash, dark ink coastline and pale coastal halo.
    ctx.strokeStyle = 'rgba(119,107,69,0.22)'; ctx.lineWidth = 5; ctx.stroke();
    ctx.fillStyle = ['#9ca187', '#a4a68a', '#a6a88b', '#98a08a'][p % 4]; ctx.fill('evenodd');
    ctx.strokeStyle = '#6e745b'; ctx.lineWidth = 1.15; ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(100,89,62,0.30)'; ctx.lineWidth = 0.65;
  for (let lon = -180; lon <= 180; lon += 15) {
    const [x] = xy(lon, 0); ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let lat = -75; lat <= 75; lat += 15) {
    const [, y] = xy(0, lat); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
  // The Equator is an engraved double rule; tropics use fine interrupted rules.
  for (const lat of [-66.56, -23.44, 23.44, 66.56]) {
    const [, y] = xy(0, lat); ctx.setLineDash([5, 4]);
    ctx.strokeStyle = 'rgba(120,83,45,0.43)'; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
  ctx.setLineDash([]); ctx.strokeStyle = '#9b8158'; ctx.lineWidth = 0.8;
  for (const y of [h / 2 - 1.5, h / 2 + 1.5]) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  // Longitude ticks and labels on the Equator remain readable at close range.
  ctx.fillStyle = '#705b3e';
  for (let lon = -180; lon <= 180; lon += 5) {
    const [x, y] = xy(lon, 0); const tick = lon % 15 ? 2.8 : 5;
    ctx.beginPath(); ctx.moveTo(x, y - tick); ctx.lineTo(x, y + tick); ctx.stroke();
    if (lon % 30 === 0 && Math.abs(lon) < 180) tracked(ctx, `${Math.abs(lon)}°`, x, y + 12, 10, 0.2);
  }
  const labels = [
    ['NORTH', -106, 47, 22, 3], ['AMERICA', -104, 40, 23, 3],
    ['SOUTH', -58, -14, 19, 2.3], ['AMERICA', -60, -21, 19, 2.3],
    ['AFRICA', 19, 9, 24, 3.5], ['EUROPE', 25, 52, 20, 2], ['ASIA', 92, 42, 29, 5],
    ['AUSTRALIA', 134, -25, 18, 1.9], ['GREENLAND', -42, 72, 13, 1.5],
    ['ANTARCTICA', 20, -78, 19, 4],
  ];
  ctx.fillStyle = '#434f3e';
  for (const [name, lon, lat, size, spacing] of labels) tracked(ctx, name, ...xy(lon, lat), size, spacing);
  ctx.fillStyle = '#7c7155';
  for (const [name, lon, lat, size] of [
    ['Atlantic Ocean', -34, 29, 22], ['Atlantic Ocean', -20, -30, 20],
    ['Pacific Ocean', -130, 15, 25], ['Pacific Ocean', 165, -9, 18],
    ['Indian Ocean', 75, -12, 22], ['Southern Ocean', -64, -57, 20],
  ]) tracked(ctx, name, ...xy(lon, lat), size, 1.2, true);
  compass(ctx, ...xy(-132, -25), 29);
  compass(ctx, ...xy(71, -40), 22);
  // An original maker's cartouche; no claim of a historical maker or map date.
  const [cx, cy] = xy(-132, -49);
  ctx.strokeStyle = '#9d885d'; ctx.lineWidth = 1;
  for (const inset of [0, 5]) { ctx.beginPath(); ctx.ellipse(cx, cy, 115 - inset, 35 - inset, 0, 0, TAU); ctx.stroke(); }
  ctx.fillStyle = '#6b6047'; tracked(ctx, 'ORBIS TERRARUM', cx, cy - 8, 14, 1.8);
  tracked(ctx, 'THE LIBRARY COLLECTION', cx, cy + 10, 9, 1.4);
  return canvas;
}

export function drawWalnut(canvas) {
  const ctx = canvas.getContext('2d'), w = canvas.width, h = canvas.height;
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const u = x / w * TAU;
    const grain = Math.sin(u * 15 + Math.sin(y * 0.016) * 0.8) * 5
      + Math.sin(u * 51 + Math.sin(y * 0.013)) * 2.5 + (noise(x, y) - 0.5) * 4;
    const glow = 7 * Math.sin(u * 3 + y * 0.006);
    const i = (y * w + x) * 4;
    img.data[i] = 76 + grain + glow; img.data[i + 1] = 42 + grain * 0.7 + glow * 0.6;
    img.data[i + 2] = 24 + grain * 0.4 + glow * 0.3; img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0); return canvas;
}

export function drawScales(canvas) {
  const ctx = canvas.getContext('2d'), w = canvas.width, h = canvas.height;
  ctx.fillStyle = '#bfa373'; ctx.fillRect(0, 0, w, h);
  // Each 128px row maps once around a machined band; dark cuts are texture ink.
  for (let row = 0; row < 2; row++) {
    const y = row * 128;
    ctx.fillStyle = row ? '#c5ad80' : '#cdb88e'; ctx.fillRect(0, y + 8, w, 112);
    ctx.strokeStyle = '#857047'; ctx.lineWidth = 1;
    for (const offset of [9, 14, 114, 119]) { ctx.beginPath(); ctx.moveTo(0, y + offset); ctx.lineTo(w, y + offset); ctx.stroke(); }
    for (let degree = 0; degree < 360; degree += 1) {
      const x = degree / 360 * w, big = degree % 10 === 0, medium = degree % 5 === 0;
      const length = big ? 25 : medium ? 17 : 9;
      ctx.beginPath(); ctx.moveTo(x, y + 15); ctx.lineTo(x, y + 15 + length); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y + 113); ctx.lineTo(x, y + 113 - length); ctx.stroke();
      if (degree % 30 === 0) {
        ctx.fillStyle = '#504631';
        const bearing = (450 - degree) % 360;
        const label = row ? `${Math.min(degree % 180, 180 - degree % 180)}°`
          : ({ 0: 'N', 90: 'E', 180: 'S', 270: 'W' }[bearing] || `${bearing}`);
        tracked(ctx, label, x, y + 64, 22, 1);
        // Repeat seam text at the right edge to avoid a split missing glyph.
        if (degree === 0) tracked(ctx, label, w, y + 64, 22, 1);
      }
    }
  }
  return canvas;
}

export function makeGlobeMaterials(makeCanvas = defaultCanvas) {
  const map = texture(drawMap(makeCanvas(...ATLAS_SIZES.map)));
  const walnut = texture(drawWalnut(makeCanvas(...ATLAS_SIZES.walnut)), true);
  const scales = texture(drawScales(makeCanvas(...ATLAS_SIZES.scales)), true);
  const material = (name, options) => {
    const m = new THREE.MeshStandardMaterial(options); m.name = `Antique globe / ${name}`; return m;
  };
  return {
    globe: material('engraved vellum', { map, roughness: 0.73, metalness: 0 }),
    globeWalnut: material('French-polished walnut', { map: walnut, roughness: 0.39, metalness: 0 }),
    globeBrass: material('aged brass', { color: 0xb19359, roughness: 0.36, metalness: 0.78 }),
    globeScales: material('engraved brass scales', { map: scales, roughness: 0.48, metalness: 0.50 }),
  };
}
