import * as THREE from 'three';

// Original, deterministic wool rug. The reading table and room own placement.
// Keep all construction independent of the room's shared RNG.
export const READING_RUG = Object.freeze({
  center: Object.freeze([-0.5, 0.008, 1.9]),
  width: 3.4,
  length: 5.6,
  clothLength: 5.4,
  fringeBundlesPerEnd: 60,
  textureSize: Object.freeze([1024, 2048]),
  detailSize: Object.freeze([512, 1024]),
});

const hash = n => {
  let a = Math.imul(n ^ 0x5b38a79d, 0x45d9f3b);
  a = Math.imul(a ^ (a >>> 16), 0x45d9f3b);
  return ((a ^ (a >>> 16)) >>> 0) / 4294967296;
};

function geometryBuffer() {
  const positions = [], uvs = [], indices = [];
  return {
    positions, uvs, indices,
    vertex(x, y, z, u, v) {
      const id = positions.length / 3;
      positions.push(x, y, z); uvs.push(u, v);
      return id;
    },
    face(a, b, c) { indices.push(a, b, c); },
    quad(a, b, c, d) { indices.push(a, b, c, a, c, d); },
    finish(name) {
      const g = new THREE.BufferGeometry();
      g.name = name;
      g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      g.setIndex(indices);
      g.computeVertexNormals();
      g.computeBoundingBox(); g.computeBoundingSphere();
      return g;
    },
  };
}

// Extra sampling is confined to the rolled selvedge; the flat field stays sparse.
function stations(half, divisions) {
  const values = [-half, -half + 0.009, -half + 0.024, -half + 0.055];
  for (let i = 1; i < divisions; i++) values.push(-half + 0.055 + (2 * half - 0.11) * i / divisions);
  values.push(half - 0.055, half - 0.024, half - 0.009, half);
  return values;
}

export function createRugBodyGeometry() {
  const b = geometryBuffer();
  const hx = READING_RUG.width / 2, hz = READING_RUG.clothLength / 2;
  const xs = stations(hx, 16), zs = stations(hz, 26), nx = xs.length;
  const radius = 0.034;
  for (const z of zs) for (const rawX of xs) {
    const corner = Math.max(0, Math.abs(z) - (hz - radius));
    const extent = hx - radius + Math.sqrt(Math.max(0, radius * radius - corner * corner));
    const x = rawX * extent / hx;
    const edge = Math.min(hx - Math.abs(rawX), hz - Math.abs(z));
    const rise = Math.min(1, edge / 0.024);
    const nap = 0.0006 * Math.sin(x * 2.4 + 0.8) * Math.sin(z * 1.9);
    const y = 0.0003 + 0.0037 * Math.sin(rise * Math.PI / 2) + nap * rise;
    b.vertex(x, y, z, (x + hx) / (2 * hx), (z + hz) / (2 * hz));
  }
  for (let j = 0; j < zs.length - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const a = j * nx + i;
    b.quad(a, a + nx, a + nx + 1, a + 1);
  }
  // Perimeter goes clockwise seen from above. Separate side vertices keep the
  // cloth face soft while the cut/bound edge has a genuine vertical normal.
  const perimeter = [];
  for (let i = 0; i < nx; i++) perimeter.push(i);
  for (let j = 1; j < zs.length; j++) perimeter.push(j * nx + nx - 1);
  for (let i = nx - 2; i >= 0; i--) perimeter.push((zs.length - 1) * nx + i);
  for (let j = zs.length - 2; j > 0; j--) perimeter.push(j * nx);
  const top = [], bottom = [];
  for (const id of perimeter) {
    const [x, y, z] = b.positions.slice(id * 3, id * 3 + 3);
    top.push(b.vertex(x, y, z, b.uvs[id * 2], b.uvs[id * 2 + 1]));
    bottom.push(b.vertex(x * 0.999, -0.005, z * 0.999, b.uvs[id * 2], b.uvs[id * 2 + 1]));
  }
  const under = b.vertex(0, -0.005, 0, 0.5, 0.5);
  for (let i = 0; i < perimeter.length; i++) {
    const next = (i + 1) % perimeter.length;
    b.quad(top[i], top[next], bottom[next], bottom[i]);
    b.face(under, bottom[i], bottom[next]);
  }
  return b.finish('Reading rug / soft bound cloth');
}

export function createRugFringeGeometry() {
  const b = geometryBuffer();
  const count = READING_RUG.fringeBundlesPerEnd;
  for (const end of [-1, 1]) for (let i = 0; i < count; i++) {
    const x = -1.59 + i * 3.18 / (count - 1);
    const length = 0.074 + hash(i + (end + 1) * 301) * 0.024;
    const lean = (hash(i * 17 + 83) - 0.5) * 0.016;
    for (const strand of [-1, 1]) {
      const rootX = x + strand * 0.005;
      const rootZ = end * 2.691;
      const tipX = rootX + lean + strand * 0.003;
      const tipZ = end * (2.7 + length - (strand > 0 ? 0.007 : 0));
      const w = 0.0054, t = 0.0019;
      // Four faces around a soft triangular section. Tip never breaches 5.6 m.
      const a = b.vertex(rootX - w, -0.003, rootZ, 0, 0);
      const c = b.vertex(rootX + w, -0.003, rootZ, 1, 0);
      const k = b.vertex(rootX, 0.0006, rootZ, 0.5, 0);
      const d = b.vertex(tipX - t, -0.0047, tipZ, 0, 1);
      const e = b.vertex(tipX + t, -0.0047, tipZ, 1, 1);
      const f = b.vertex(tipX, -0.0028, tipZ, 0.5, 1);
      const faces = [[a, d, f, k], [k, f, e, c], [c, e, d, a]];
      for (const q of faces) {
        if (end < 0) q.reverse();
        b.quad(...q);
      }
      if (end > 0) { b.face(a, k, c); b.face(d, e, f); }
      else { b.face(c, k, a); b.face(f, e, d); }
    }
  }
  return b.finish('Reading rug / short split cotton fringe');
}

export function createRugMaterials(loadTexture = (url, onLoad) => new THREE.TextureLoader().load(url, onLoad)) {
  // A dyed-wool fallback avoids a white rug while the local colour PNG decodes.
  // Once loaded, white preserves the authored sRGB palette without extra tint.
  const cloth = new THREE.MeshStandardMaterial({
    name: 'Reading rug / dyed wool', color: 0x87463b,
    bumpScale: 0.0013, roughness: 1, metalness: 0,
  });
  const albedo = loadTexture(new URL('./rug-albedo.png', import.meta.url).href, () => cloth.color.setHex(0xffffff));
  const detail = loadTexture(new URL('./rug-detail.png', import.meta.url).href);
  albedo.name = 'Reading rug / madder & indigo wool';
  detail.name = 'Reading rug / linear height R, roughness G';
  albedo.colorSpace = THREE.SRGBColorSpace;
  detail.colorSpace = THREE.NoColorSpace;
  for (const t of [albedo, detail]) {
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.generateMipmaps = true;
    t.anisotropy = 4;
  }
  cloth.map = albedo;
  cloth.bumpMap = cloth.roughnessMap = detail;
  const fringe = new THREE.MeshStandardMaterial({
    name: 'Reading rug / unbleached warp', color: 0xbca886,
    roughness: 0.96, metalness: 0,
  });
  // Millimetre pile should not participate in the room's coarse sun shadow map.
  // The Builder still enables receiveShadow. No polygon offset or alpha layers.
  cloth.userData.noShadow = fringe.userData.noShadow = true;
  return { cloth, fringe };
}

export function addReadingRug(frame, materials = createRugMaterials()) {
  const [x, y, z] = READING_RUG.center;
  frame.geo(materials.cloth, createRugBodyGeometry(), x, y, z);
  frame.geo(materials.fringe, createRugFringeGeometry(), x, y, z);
  // No solid/collider, lights, interaction hooks, animation, or shared RNG calls.
}
