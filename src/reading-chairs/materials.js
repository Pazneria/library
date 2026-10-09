import * as THREE from 'three';

// Original mathematical textures, authored for this delivery. No downloaded art,
// canvas, image loader, random global state, shaders, lights, or animation.
const SIZE = 256;
const clamp = x => Math.max(0, Math.min(255, Math.round(x)));
function hash(x, y, seed) {
  let n = Math.imul(x + 131 * seed, 374761393) ^ Math.imul(y + seed, 668265263);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
}
function noise(x, y, seed) {
  const ix = Math.floor(x), iy = Math.floor(y), u = x - ix, v = y - iy;
  const a = u * u * (3 - 2 * u), b = v * v * (3 - 2 * v);
  return (hash(ix, iy, seed) * (1 - a) + hash(ix + 1, iy, seed) * a) * (1 - b)
    + (hash(ix, iy + 1, seed) * (1 - a) + hash(ix + 1, iy + 1, seed) * a) * b;
}
function texture(name, sampler, color) {
  const data = new Uint8Array(SIZE * SIZE * 4);
  for (let y = 0; y < SIZE; y++) for (let x = 0; x < SIZE; x++) {
    const rgb = sampler(x, y);
    const i = (y * SIZE + x) * 4;
    data[i] = clamp(rgb[0]); data[i + 1] = clamp(rgb[1]); data[i + 2] = clamp(rgb[2]); data[i + 3] = 255;
  }
  const t = new THREE.DataTexture(data, SIZE, SIZE, THREE.RGBAFormat);
  t.name = `reading-chairs/${name}`;
  t.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true; t.needsUpdate = true;
  // The host already disposes scene textures once. Release generated CPU pixels
  // too, because a departed room can remain reachable in browser history.
  t.addEventListener('dispose', () => { t.image = null; });
  return t;
}

export function makeChairMaterials() {
  const leatherColor = texture('leather-patina', (x, y) => {
    const u = x / (SIZE - 1), v = y / (SIZE - 1);
    const edge = Math.exp(-Math.min(u, 1 - u, v, 1 - v) * 20);
    const cloudy = noise(x / 48, y / 48, 17) - .5;
    const pores = noise(x / 2, y / 2, 71) - .5;
    // Quiet rubbed edges, broad tonal variation, no painted-on dramatic cracks.
    const value = 207 + cloudy * 17 + pores * 9 + edge * 18;
    return [value + 5, value + 1, value - 5];
  }, true);
  const leatherRelief = texture('leather-physical', (x, y) => {
    const n = noise(x / 2.2, y / 2.2, 71), small = hash(x, y, 41);
    const fold = Math.sin(y * .16 + noise(x / 31, y / 40, 24) * 6) * .04;
    // R = sub-millimetre height; G = roughness; B is unused.
    return [117 + n * 28 + small * 9 + fold * 30, 180 + n * 27, 128];
  }, false);
  const woodColor = texture('walnut-grain', (x, y) => {
    // Periodic lengthwise ribbons; the grain follows the long axis of each rail.
    const u = x / SIZE * Math.PI * 2, v = y / SIZE * Math.PI * 2;
    const wave = v * 18 + .7 * Math.sin(u) + .18 * Math.sin(3 * u + v);
    const ring = Math.sin(wave) * 5 + Math.sin(wave * 2 + .2) * 2;
    const pore = Math.pow(.5 + .5 * Math.sin(v * 77 + .18 * Math.sin(2 * u)), 12) * 7;
    const broad = Math.sin(v * 3 + .3 * Math.sin(u)) * 5;
    return [101 + ring + broad - pore, 66 + ring * .68 + broad * .6 - pore, 41 + ring * .44 + broad * .4 - pore];
  }, true);
  const woodRelief = texture('walnut-physical', (x, y) => {
    const u = x / SIZE * Math.PI * 2, v = y / SIZE * Math.PI * 2;
    const line = Math.sin(v * 77 + .18 * Math.sin(u * 2));
    return [125 + line * 7, 181 + line * 8, 128];
  }, false);
  const leather = (name, color) => {
    const m = new THREE.MeshStandardMaterial({ name: `reading-chairs/${name}`, color,
      map: leatherColor, bumpMap: leatherRelief, bumpScale: .0012,
      roughnessMap: leatherRelief, roughness: .86, metalness: 0 });
    m.userData.readingChair = true;
    return m;
  };
  const result = {
    oxblood: leather('oxblood', 0x855044),
    tobacco: leather('tobacco', 0x99744e),
    wood: new THREE.MeshStandardMaterial({ name: 'reading-chairs/walnut', map: woodColor,
      bumpMap: woodRelief, bumpScale: .00065, roughnessMap: woodRelief, roughness: .78 }),
    thread: new THREE.MeshStandardMaterial({ name: 'reading-chairs/waxed-thread', color: 0x8c7254, roughness: .94 }),
    brass: new THREE.MeshStandardMaterial({ name: 'reading-chairs/aged-brass', color: 0x81633d, metalness: .72, roughness: .57 })
  };
  for (const m of Object.values(result)) m.userData.readingChair = true;
  // Geometric stitching/hardware should not add noisy pinprick shadow edges.
  result.thread.userData.noShadow = true;
  result.brass.userData.noShadow = true;
  return result;
}
