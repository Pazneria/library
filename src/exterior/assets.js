import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { seededRandom, terrainHeight } from './layout.js';

// One inexpensive daylight shader for bark, leaves, grass and stone. Illumination
// and aerial perspective are per vertex; no scene light loops, shadows or alpha.
export function surfaceMaterial(sunDirection, groundMap = null) {
  return new THREE.ShaderMaterial({
    name: groundMap ? 'exterior-ground' : 'exterior-vegetation-stone',
    vertexColors: true,
    defines: groundMap ? { EXTERIOR_GROUND: 1 } : {},
    uniforms: {
      sunDirection: { value: sunDirection.clone().normalize() },
      hazeColor: { value: new THREE.Color(0.84, 0.61, 0.48) },
      // Use the host's existing uniform name so its startup texture upload finds it.
      ...(groundMap ? { map: { value: groundMap } } : {}),
    },
    vertexShader: `
      uniform vec3 sunDirection;
      varying vec3 vExteriorColor;
      varying float vHaze;
      #ifdef EXTERIOR_GROUND
        varying vec2 vGroundUv;
      #endif
      void main() {
        vec4 p = vec4(position, 1.0);
        vec3 n = normal;
        vec3 tint = color;
        #ifdef USE_INSTANCING
          // Inverse squared column lengths compensate for nonuniform scale.
          mat3 im = mat3(instanceMatrix);
          n /= vec3(dot(im[0], im[0]), dot(im[1], im[1]), dot(im[2], im[2]));
          n = im * n;
          p = instanceMatrix * p;
        #endif
        #ifdef USE_INSTANCING_COLOR
          tint *= instanceColor;
        #endif
        vec4 world = modelMatrix * p;
        n = normalize(mat3(modelMatrix) * n);
        float sun = max(dot(n, sunDirection), 0.0);
        vec3 light = mix(vec3(0.64, 0.72, 0.70), vec3(1.52, 1.29, 0.93), sun);
        vExteriorColor = tint * light;
        float distanceToLibrary = length(world.xz - vec2(-10.0, 3.0));
        vHaze = (1.0 - exp(-distanceToLibrary / 420.0)) * 0.92;
        #ifdef EXTERIOR_GROUND
          vGroundUv = uv;
        #endif
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,
    fragmentShader: `
      uniform vec3 hazeColor;
      varying vec3 vExteriorColor;
      varying float vHaze;
      #ifdef EXTERIOR_GROUND
        uniform sampler2D map;
        varying vec2 vGroundUv;
      #endif
      void main() {
        vec3 col = vExteriorColor;
        #ifdef EXTERIOR_GROUND
          col *= texture2D(map, vGroundUv).rgb;
        #endif
        gl_FragColor = vec4(mix(col, hazeColor, vHaze), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}

export function groundTexture() {
  const size = 128, data = new Uint8Array(size * size * 4), random = seededRandom(407);
  for (let z = 0; z < size; z++) for (let x = 0; x < size; x++) {
    // Fine fibrous grain, with no alpha cards and no texture-loading request.
    const grain = 207 + random() * 38 + 7 * Math.sin(x * 0.83 + Math.sin(z * 0.24));
    const i = (z * size + x) * 4;
    data[i] = grain; data[i + 1] = grain + 3; data[i + 2] = grain - 4; data[i + 3] = 255;
  }
  const texture = new THREE.DataTexture(data, size, size);
  texture.name = 'hillside-ground-grain-128';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

function axis(segments, features = []) {
  const values = [...features];
  for (const [a, b, count] of segments) for (let i = 0; i <= count; i++) values.push(a + (b - a) * i / count);
  return [...new Set(values)].sort((a, b) => a - b);
}

export function terrainGeometry() {
  // A continuous nonuniform grid: detail near the windows, sparse horizon.
  // Shared vertices across every transition avoid cracks or overlapping skirts.
  const xs = axis([[-1200, -420, 20], [-420, -100, 20], [-100, -35, 12], [-35, 20, 32], [20, 100, 10], [100, 600, 12]], [-13, 8]);
  const zs = axis([[-900, -180, 12], [-180, -45, 10], [-45, 45, 36], [45, 180, 10], [180, 900, 12]], [-30, 30]);
  const positions = [], normals = [], colors = [], uvs = [], indices = [];
  const green = new THREE.Color(0.25, 0.31, 0.115), straw = new THREE.Color(0.37, 0.32, 0.16);
  const lawn = new THREE.Color(0.23, 0.295, 0.12), color = new THREE.Color(), normal = new THREE.Vector3();
  for (const z of zs) for (const x of xs) {
    positions.push(x, terrainHeight(x, z), z);
    normal.set(terrainHeight(x - 0.5, z) - terrainHeight(x + 0.5, z), 1, terrainHeight(x, z - 0.5) - terrainHeight(x, z + 0.5)).normalize();
    normals.push(normal.x, normal.y, normal.z);
    const field = 0.5 + 0.25 * Math.sin(x * 0.039 + Math.sin(z * 0.034) * 1.5) + 0.18 * Math.sin(z * 0.071 + x * 0.018);
    color.copy(green).lerp(straw, field);
    const terrace = Math.exp(-(((x + 12) / 19) ** 2) - (z / 30) ** 2);
    color.lerp(lawn, terrace * 0.6);
    colors.push(color.r, color.g, color.b);
    uvs.push(x / 4, z / 4);
  }
  for (let z = 0; z < zs.length - 1; z++) for (let x = 0; x < xs.length - 1; x++) {
    const a = z * xs.length + x, b = a + 1, c = a + xs.length, d = c + 1;
    indices.push(a, c, b, b, c, d);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeBoundingBox(); geometry.computeBoundingSphere();
  return geometry;
}

function colorize(geometry, hex, variation = 0.1) {
  if (geometry.index) { const old = geometry; geometry = geometry.toNonIndexed(); old.dispose(); }
  const p = geometry.attributes.position, values = new Float32Array(p.count * 3);
  const base = new THREE.Color(hex), color = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const v = 1 + variation * Math.sin(p.getX(i) * 27 + p.getY(i) * 19 + p.getZ(i) * 23);
    color.copy(base).multiplyScalar(v);
    values.set([color.r, color.g, color.b], i * 3);
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(values, 3));
  geometry.deleteAttribute('uv');
  return geometry;
}

function join(parts) {
  const geometry = mergeGeometries(parts, false);
  for (const part of parts) part.dispose();
  geometry.computeBoundingBox(); geometry.computeBoundingSphere();
  return geometry;
}

function branch(a, b, baseRadius, topRadius, color, sides = 6) {
  const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b), direction = end.clone().sub(start);
  const geometry = new THREE.CylinderGeometry(topRadius, baseRadius, direction.length(), sides, 1, true);
  geometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize()));
  geometry.translate(...start.add(end).multiplyScalar(0.5).toArray());
  return colorize(geometry, color, 0.14);
}

function crown(x, y, z, sx, sy, sz, color, detail = 1) {
  const geometry = new THREE.IcosahedronGeometry(1, detail);
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    // Deterministic distortion shared at coincident vertices keeps lobes closed.
    const r = 1 + 0.10 * Math.sin(p.getX(i) * 9 + p.getY(i) * 7 + p.getZ(i) * 11);
    p.setXYZ(i, p.getX(i) * r, p.getY(i) * r, p.getZ(i) * r);
  }
  geometry.scale(sx, sy, sz); geometry.translate(x, y, z);
  return colorize(geometry, color, 0.08);
}

export function oakGeometry() {
  const parts = [branch([0, 0, 0], [0.018, 0.63, -0.018], 0.035, 0.017, 0x71614a, 8)];
  const lobes = [
    [-0.20, 0.65, 0.04, 0.19, 0.18, 0.20], [0.18, 0.69, 0.02, 0.22, 0.20, 0.18],
    [-0.03, 0.69, -0.19, 0.20, 0.21, 0.18], [0.03, 0.77, 0.19, 0.21, 0.20, 0.18],
    [-0.11, 0.86, -0.02, 0.19, 0.21, 0.21], [0.10, 0.91, 0.03, 0.17, 0.19, 0.17],
    [0.01, 0.78, -0.05, 0.25, 0.21, 0.22],
  ];
  lobes.forEach(([x, y, z, sx, sy, sz], i) => {
    parts.push(branch([0.01, 0.34 + i * 0.025, 0], [x, y - 0.035, z], 0.014, 0.005, 0x78644a));
    parts.push(crown(x, y, z, sx, sy, sz, [0x74824b, 0x829053, 0x677b43, 0x8b9459][i % 4]));
  });
  return join(parts);
}

export function birchGeometry() {
  const parts = [branch([0, 0, 0], [-0.022, 0.9, 0.01], 0.019, 0.006, 0xc1b89a, 7)];
  for (let i = 0; i < 5; i++) {
    const a = i * 2.4, y = 0.57 + i * 0.08, x = Math.sin(a) * 0.08, z = Math.cos(a) * 0.07;
    parts.push(branch([0, y - 0.20, 0], [x, y, z], 0.007, 0.002, 0x9e9577, 5));
    parts.push(crown(x, y, z, 0.13, 0.19, 0.12, i % 2 ? 0x9d9e64 : 0x7b9252));
  }
  return join(parts);
}

export function woodlandGeometry(far = false) {
  // A rounded, irregular crown silhouette, not a repeated perfect cone.
  const sides = far ? 6 : 8;
  const points = far ? [[0, 0.34], [0.24, 0.49], [0.29, 0.70], [0.18, 0.93], [0, 1.04]]
    : [[0, 0.32], [0.24, 0.45], [0.30, 0.64], [0.26, 0.83], [0.15, 1.0], [0, 1.06]];
  const geometry = new THREE.LatheGeometry(points.map(([r, y]) => new THREE.Vector2(r, y)), sides);
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const wobble = 1 + 0.12 * Math.sin(p.getX(i) * 17 + p.getZ(i) * 11 + p.getY(i) * 13);
    p.setXYZ(i, p.getX(i) * wobble, p.getY(i), p.getZ(i) * wobble);
  }
  return join([colorize(geometry, 0x788b50), branch([0, 0, 0], [0, 0.52, 0], 0.027, 0.016, 0x786750, far ? 4 : 5)]);
}

export function shrubGeometry() {
  return join([
    crown(-0.35, 0.38, 0.03, 0.55, 0.60, 0.51, 0x677d48, 0),
    crown(0.30, 0.47, -0.04, 0.62, 0.70, 0.54, 0x819257, 0),
    crown(0.02, 0.50, 0.22, 0.53, 0.66, 0.49, 0x87975b, 0),
  ]);
}

export function stoneGeometry() {
  return crown(0, 0.20, 0, 0.60, 0.75, 0.50, 0xaaa18a, 0);
}

export function grassGeometry() {
  const positions = [], colors = [];
  const olive = new THREE.Color(0x7d8b48), gold = new THREE.Color(0xafa268);
  for (let blade = 0; blade < 4; blade++) {
    const angle = blade * 2.4, dx = Math.cos(angle), dz = Math.sin(angle);
    const h = 0.65 + (blade % 3) * 0.17, w = 0.065;
    const points = [
      [-dz * w, 0, dx * w], [dz * w, 0, -dx * w],
      [dx * 0.16 - dz * w * 0.5, h * 0.6, dz * 0.16 + dx * w * 0.5],
      [dx * 0.30, h, dz * 0.30],
    ];
    // Explicit reversed faces keep the shared material opaque and single-sided.
    for (const index of [0, 1, 2, 1, 3, 2, 2, 1, 0, 2, 3, 1]) {
      positions.push(...points[index]);
      const color = olive.clone().lerp(gold, points[index][1] / h);
      colors.push(color.r, color.g, color.b);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  geometry.computeBoundingBox(); geometry.computeBoundingSphere();
  return geometry;
}
