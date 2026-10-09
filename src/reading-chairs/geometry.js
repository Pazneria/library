import * as THREE from 'three';

// All dimensions are metres. Indexed, ordinary position/normal/uv geometry is
// deliberate: the host Builder strips extra attributes and merges by material.
export function softBox(w, h, d, radius, { bulge = 0, dish = 0, grain = false } = {}) {
  const half = [w / 2, h / 2, d / 2];
  const r = Math.min(radius, ...half);
  const p = [], n = [], uv = [], indices = [];
  const axes = [[2, 1, 0, 1], [2, 1, 0, -1], [0, 2, 1, 1],
    [0, 2, 1, -1], [0, 1, 2, 1], [0, 1, 2, -1]];
  // Tiny timber bevels need fewer segments than the broad upholstered curves.
  const samples = a => grain ? [-half[a], -half[a] + r, 0, half[a] - r, half[a]]
    : [-half[a], -half[a] + r * .3, -half[a] + r, 0, half[a] - r, half[a] - r * .3, half[a]];
  for (const [a, b, c, sign] of axes) {
    const A = samples(a), B = samples(b), offset = p.length / 3;
    for (let j = 0; j < B.length; j++) for (let i = 0; i < A.length; i++) {
      const v = [0, 0, 0]; v[a] = A[i]; v[b] = B[j]; v[c] = sign * half[c];
      const q = v.map((value, axis) => Math.max(-half[axis] + r, Math.min(half[axis] - r, value)));
      const normal = new THREE.Vector3(...v.map((value, axis) => value - q[axis])).normalize();
      const point = q.map((value, axis) => value + normal.getComponent(axis) * r);
      // Broad relaxed crown; a shallow sitting hollow remains inside the edge.
      if (c === 1 && sign === 1) {
        const x = point[0] / half[0], z = point[2] / half[2];
        point[1] += bulge * Math.max(0, 1 - x * x) * Math.max(0, 1 - z * z)
          - dish * Math.exp(-5 * x * x - 7 * (z + .08) ** 2);
      }
      p.push(...point); n.push(...normal.toArray());
      // Wood's first UV axis follows the member's longest dimension.
      const longest = half.indexOf(Math.max(...half));
      if (grain) uv.push(point[longest] / .75 + .5, point[longest === a ? b : a] / .18 + .5);
      else uv.push(i / (A.length - 1), j / (B.length - 1));
    }
    for (let j = 0; j < B.length - 1; j++) for (let i = 0; i < A.length - 1; i++) {
      const stride = A.length, x = offset + j * stride + i;
      // Choose winding from an actual face cross product, independent of axes.
      const u = new THREE.Vector3(); u.setComponent(a, 1);
      const v = new THREE.Vector3(); v.setComponent(b, 1);
      if (u.cross(v).getComponent(c) * sign > 0) indices.push(x, x + 1, x + stride + 1, x, x + stride + 1, x + stride);
      else indices.push(x, x + stride + 1, x + 1, x, x + stride, x + stride + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(n, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(indices);
  if (bulge || dish) g.computeVertexNormals();
  return g;
}

export function tube(points, radius, segments = 28, radialSegments = 6, closed = false) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)), closed, 'centripetal');
  return new THREE.TubeGeometry(curve, segments, radius, radialSegments, closed);
}

export function roundedLoop(w, d, y, z = 0, r = .05) {
  const points = [];
  for (const [x, zz, start] of [[w / 2 - r, d / 2 - r, 0],
    [-w / 2 + r, d / 2 - r, Math.PI / 2],
    [-w / 2 + r, -d / 2 + r, Math.PI], [w / 2 - r, -d / 2 + r, Math.PI * 1.5]]) {
    for (let i = 0; i <= 4; i++) {
      const a = start + i / 4 * Math.PI / 2;
      points.push([x + Math.cos(a) * r, y, z + zz + Math.sin(a) * r]);
    }
  }
  return points;
}

// Shaped front/rear leg, not an intersecting pile of cylinders. Curved centre
// line, rectangular tapered sections and 2 mm eased corners suggest cut timber.
export function leg(side, rear = false) {
  const sections = rear ? [
    [0, 0, -.338, .033], [.1, .10, -.333, .036], [.2, .21, -.314, .042], [.3, .35, -.30, .052]
  ] : [[0, 0, .326, .038], [.1, .085, .319, .037], [.2, .18, .295, .043], [.3, .35, .285, .057]];
  const positions = [], uvs = [], indices = [];
  const outline = [[-1, -.76], [-.76, -1], [.76, -1], [1, -.76], [1, .76], [.76, 1], [-.76, 1], [-1, .76]];
  for (let j = 0; j < sections.length; j++) {
    const [, y, z, width] = sections[j];
    const x = side * (.313 + (rear ? 0 : .018 * (1 - j / 3)));
    for (let i = 0; i < 8; i++) {
      positions.push(x + outline[i][0] * width / 2, y, z + outline[i][1] * width / 2);
      uvs.push(y / .65, i / 8);
      if (j < 3) { const a = j * 8 + i, b = j * 8 + (i + 1) % 8; indices.push(a, b + 8, b, a, a + 8, b + 8); }
    }
  }
  for (let i = 1; i < 7; i++) indices.push(0, i, i + 1, 24, 24 + i + 1, 24 + i);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.setIndex(indices); g.computeVertexNormals();
  return g;
}

// Upholstered wing sweeps forward at shoulder height and retreats at the crest.
// Both faces and the closed edge are modelled; no double-sided paper surfaces.
export function wing(side) {
  const rings = [
    [.74, .318, -.30, -.12, .060], [.84, .345, -.327, -.06, .063],
    [1.02, .365, -.352, -.105, .061], [1.18, .341, -.373, -.205, .050],
    [1.225, .314, -.377, -.287, .025]
  ];
  const pos = [], uv = [], ix = [];
  for (let j = 0; j < rings.length; j++) {
    const [y, cx, back, front, thick] = rings[j];
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2;
      pos.push(side * (cx + Math.cos(a) * thick / 2), y, (back + front) / 2 + Math.sin(a) * (front - back) / 2);
      uv.push(i / 12, j / (rings.length - 1));
      if (j < rings.length - 1) {
        const a0 = j * 12 + i, b = j * 12 + (i + 1) % 12;
        if (side > 0) ix.push(a0, a0 + 12, b, b, a0 + 12, b + 12);
        else ix.push(a0, b, a0 + 12, b, b + 12, a0 + 12);
      }
    }
  }
  for (let i = 1; i < 11; i++) {
    if (side > 0) ix.push(0, i, i + 1, 48, 48 + i + 1, 48 + i);
    else ix.push(0, i + 1, i, 48, 48 + i, 48 + i + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(ix); g.computeVertexNormals();
  return g;
}
