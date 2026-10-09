import * as THREE from 'three';

const TAU = Math.PI * 2;
export const GLOBE_SPEC = Object.freeze({
  location: [-5.9, 0, -0.7], yaw: 0.3, centreHeight: 1, radius: 0.29,
  axisTilt: 0.4, horizonOuterRadius: 0.346, meridianOuterRadius: 0.327,
  sphereSegments: [64, 40], ringSegments: 96,
  collision: { width: 0.7, height: 1.3, depth: 0.7, centre: [0, 0.65, 0] },
});

// A machined annulus, not a round wire. Profile gives radial distance and
// axial depth in the XY plane. Rings have explicit bevels and closed backs.
function annulus(profile, segments = 96) {
  const positions = [], normals = [], uvs = [], indices = [];
  for (let edge = 0; edge < profile.length; edge++) {
    const [r0, z0] = profile[edge], [r1, z1] = profile[(edge + 1) % profile.length];
    const dr = r1 - r0, dz = z1 - z0, len = Math.hypot(dr, dz);
    const start = positions.length / 3;
    for (let i = 0; i <= segments; i++) {
      const a = i / segments * TAU, c = Math.cos(a), s = Math.sin(a);
      for (const [r, z] of [[r0, z0], [r1, z1]]) {
        positions.push(r * c, r * s, z);
        normals.push(dz / len * c, dz / len * s, -dr / len);
        uvs.push(i / segments, r * 4);
      }
      if (i < segments) {
        const n = start + i * 2;
        indices.push(n, n + 2, n + 1, n + 2, n + 3, n + 1);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); g.setIndex(indices);
  return g;
}

// Only the visible top of a scale uses the printed material; backs and bevels
// use the same solid brass as pivots. Exact matching edges avoid decal z-fighting.
function scaleFace(inner, outer, z, row, segments = 96) {
  const g = new THREE.RingGeometry(inner, outer, segments);
  const pos = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const a = Math.atan2(pos.getY(i), pos.getX(i));
    const u = ((a / TAU) + 1) % 1;
    const radial = (Math.hypot(pos.getX(i), pos.getY(i)) - inner) / (outer - inner);
    // RingGeometry duplicates its angular seam. Preserve u=1 on the final vertex.
    const column = i % (segments + 1);
    uv.setXY(i, column === segments ? 1 : u, 1 - (row * 128 + 10 + radial * 108) / 256);
    pos.setZ(i, z);
  }
  return g;
}

// A turned leg whose centreline gently splays at the foot. Lathe rings stay
// horizontal so the upper tenon joins the horizon rail squarely.
function turnedLeg() {
  const profile = [
    [0.006, 0.020, 0.325], [0.010, 0.026, 0.325], [0.026, 0.027, 0.325],
    [0.041, 0.021, 0.322], [0.056, 0.014, 0.318], [0.090, 0.014, 0.309],
    [0.135, 0.019, 0.297], [0.180, 0.023, 0.291], [0.215, 0.019, 0.289],
    [0.236, 0.014, 0.289], [0.252, 0.021, 0.289], [0.268, 0.021, 0.289],
    [0.280, 0.015, 0.291], [0.450, 0.014, 0.306], [0.650, 0.012, 0.319],
    [0.790, 0.016, 0.320], [0.808, 0.022, 0.320], [0.825, 0.023, 0.320],
    [0.843, 0.018, 0.320], [0.865, 0.016, 0.320], [0.941, 0.017, 0.320],
    [0.967, 0.024, 0.320], [0.980, 0.024, 0.320],
  ];
  const positions = [], uvs = [], indices = [], segments = 12;
  profile.forEach(([y, radius, centre], row) => {
    for (let i = 0; i <= segments; i++) {
      const a = i / segments * TAU;
      positions.push(centre + radius * Math.cos(a), y, radius * Math.sin(a));
      uvs.push(i / segments, y);
      if (row < profile.length - 1 && i < segments) {
        const n = row * (segments + 1) + i, next = n + segments + 1;
        indices.push(n, next, n + 1, next, next + 1, n + 1);
      }
    }
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); g.setIndex(indices);
  g.computeVertexNormals();
  // Average the duplicated radial seam normals to eliminate a vertical seam.
  const normal = g.attributes.normal, v = new THREE.Vector3();
  for (let row = 0; row < profile.length; row++) {
    const a = row * (segments + 1), b = a + segments;
    v.fromBufferAttribute(normal, a).add(new THREE.Vector3().fromBufferAttribute(normal, b)).normalize();
    normal.setXYZ(a, v.x, v.y, v.z); normal.setXYZ(b, v.x, v.y, v.z);
  }
  return g;
}

function rod(a, b, radius, segments = 8) {
  const from = new THREE.Vector3(...a), to = new THREE.Vector3(...b), delta = to.clone().sub(from);
  const g = new THREE.CylinderGeometry(radius, radius, delta.length(), segments);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize()));
  g.translate(...from.add(to).multiplyScalar(0.5).toArray()); return g;
}

export function buildAntiqueGlobe(frame, M) {
  const { radius, axisTilt, centreHeight: cy } = GLOBE_SPEC;
  const add = (mat, g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => {
    // Three's closed lathe poles contain zero-area triangles; omit them before
    // batching rather than sending dead primitives to every render pass.
    const index = g.index, position = g.attributes.position, keep = [];
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
    for (let i = 0; i < index.count; i += 3) {
      a.fromBufferAttribute(position, index.getX(i)); b.fromBufferAttribute(position, index.getX(i + 1)); c.fromBufferAttribute(position, index.getX(i + 2));
      if (b.sub(a).cross(c.sub(a)).lengthSq() > 1e-17) keep.push(index.getX(i), index.getX(i + 1), index.getX(i + 2));
    }
    g.setIndex(keep); frame.geo(mat, g, x, y, z, rx, ry, rz);
  };
  const turned = (profile, segments = 32) => new THREE.LatheGeometry(profile.map(p => new THREE.Vector2(...p)), segments);
  const torus = (mat, R, r, x, y, z, rx = 0, ry = 0, rz = 0, segments = 64) =>
    add(mat, new THREE.TorusGeometry(R, r, 5, segments), x, y, z, rx, ry, rz);

  const globe = new THREE.SphereGeometry(radius, ...GLOBE_SPEC.sphereSegments);
  // Longitude zero faces into the room (+X) with the Atlantic visible from SE.
  globe.rotateZ(axisTilt); add(M.globe, globe, 0, cy, 0);

  // Horizon cradle: warm walnut core, polished brass edging, radial engraved face.
  add(M.globeWalnut, annulus([[0.303, -0.019], [0.341, -0.019], [0.346, -0.014],
    [0.346, 0.007], [0.342, 0.012], [0.303, 0.012]], 96), 0, cy - 0.01, 0, -Math.PI / 2);
  add(M.globeScales, scaleFace(0.305, 0.341, 0.0127, 0), 0, cy - 0.01, 0, -Math.PI / 2);
  torus(M.globeBrass, 0.343, 0.0024, 0, cy + 0.003, 0, Math.PI / 2);
  torus(M.globeBrass, 0.304, 0.0018, 0, cy + 0.003, 0, Math.PI / 2);
  torus(M.globeBrass, 0.344, 0.002, 0, cy - 0.025, 0, Math.PI / 2);

  // Full meridian ring. Its physical supports meet the horizon at both sides;
  // axis bearings sit inside it at the original 0.4-radian terrestrial tilt.
  add(M.globeBrass, annulus([[0.306, -0.006], [0.325, -0.006], [0.327, -0.004],
    [0.327, 0.004], [0.325, 0.006], [0.306, 0.006]], 96), 0, cy, 0);
  add(M.globeScales, scaleFace(0.307, 0.325, 0.0067, 1), 0, cy, 0);
  // Both faces are engraved, with a separate reversed face and correct normals.
  const reverseScale = scaleFace(0.307, 0.325, 0.0067, 1); reverseScale.rotateY(Math.PI);
  add(M.globeScales, reverseScale, 0, cy, 0);
  torus(M.globeBrass, 0.326, 0.0015, 0, cy, 0);

  for (const sign of [-1, 1]) {
    const axis = new THREE.Vector3(-Math.sin(axisTilt), Math.cos(axisTilt), 0).multiplyScalar(sign);
    const bearing = turned([[0.009, 0], [0.012, 0.003], [0.012, 0.008], [0.007, 0.010], [0.007, 0.018]], 16);
    bearing.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), axis));
    add(M.globeBrass, bearing, axis.x * 0.2905, cy + axis.y * 0.2905, 0);
  }

  // Three identical baluster legs, brass ferrules and curved triangular stretchers.
  for (let i = 0; i < 3; i++) {
    const a = i / 3 * TAU + Math.PI / 6;
    const leg = turnedLeg(); leg.rotateY(a); add(M.globeWalnut, leg);
    const local = g => { g.rotateY(a); return g; };
    const ferrule = turned([[0, 0.001], [0.024, 0.001], [0.027, 0.006], [0.027, 0.027], [0.023, 0.033]], 12);
    ferrule.translate(0.325, 0, 0); add(M.globeBrass, local(ferrule));
    for (const y of [0.255, 0.815, 0.968]) {
      const rr = y === 0.255 ? 0.289 : 0.320;
      const collar = new THREE.TorusGeometry(y === 0.968 ? 0.024 : 0.022, 0.0016, 4, 12);
      collar.rotateX(Math.PI / 2); collar.translate(rr, y, 0); add(M.globeBrass, local(collar));
    }
    // A slightly bowed stretcher, with a broad centre hub instead of floating rods.
    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.035, 0.215, 0), new THREE.Vector3(0.12, 0.192, 0),
      new THREE.Vector3(0.23, 0.215, 0), new THREE.Vector3(0.288, 0.259, 0),
    ]);
    add(M.globeWalnut, local(new THREE.TubeGeometry(path, 10, 0.010, 6, false)));
    // Small metal fastening stud on the horizon rail above each leg.
    const stud = new THREE.SphereGeometry(0.0045, 8, 4); stud.scale(1, 0.45, 1);
    stud.translate(0.337, 1.005, 0); add(M.globeBrass, local(stud));
  }
  add(M.globeWalnut, turned([[0, 0.183], [0.028, 0.183], [0.035, 0.192], [0.035, 0.224],
    [0.024, 0.234], [0.017, 0.25], [0.012, 0.26], [0, 0.264]], 24));
  torus(M.globeBrass, 0.034, 0.0018, 0, 0.22, 0, Math.PI / 2, 0, 0, 24);

  // A discreet brass strut physically seats the meridian's lowest point at y=.673.
  add(M.globeBrass, rod([0, 0.264, 0], [0, 0.674, 0], 0.005, 8));
  add(M.globeBrass, turned([[0.014, 0.659], [0.019, 0.663], [0.019, 0.673], [0.012, 0.677]], 16));
}
