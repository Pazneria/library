import * as THREE from 'three';

// Book colours: aged cloth & leather, deliberately muted.
const PALETTE = [
  [0.36, 0.08, 0.06], [0.42, 0.12, 0.08], [0.12, 0.2, 0.12], [0.1, 0.16, 0.28], [0.18, 0.1, 0.06],
  [0.48, 0.32, 0.16], [0.06, 0.06, 0.06], [0.55, 0.42, 0.2], [0.16, 0.26, 0.26], [0.3, 0.1, 0.16],
  [0.62, 0.55, 0.42], [0.26, 0.24, 0.2], [0.4, 0.24, 0.1], [0.2, 0.12, 0.2], [0.7, 0.62, 0.48],
];

const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();

export class BookSet {
  constructor(rand) {
    this.rand = rand;
    this.mats = [];
    this.cols = [];
    this.vars = [];
  }

  color(base, fade = 0) {
    const r = this.rand;
    const c = base || PALETTE[Math.floor(r() * PALETTE.length)];
    const j = 0.8 + r() * 0.4;
    const f = fade || (r() < 0.12 ? 0.2 + r() * 0.25 : 0);
    return [c[0] * j * (1 - f) + 0.55 * f, c[1] * j * (1 - f) + 0.48 * f, c[2] * j * (1 - f) + 0.38 * f];
  }

  // Add one book. Local frame m; position of box centre; rotation about z (lean); size (t,h,d).
  add(m, x, y, z, rz, t, h, d, col, variant, ry = 0) {
    _e.set(0, ry, rz);
    _q.setFromEuler(_e);
    const mm = new THREE.Matrix4().compose(_p.set(x, y, z), _q, _s.set(t, h, d));
    mm.premultiply(m);
    this.mats.push(mm);
    this.cols.push(col);
    this.vars.push(variant);
  }

  // Fill a shelf slot. Local frame: x along shelf [0,len], y up from shelf top, z=0 front, -d back.
  fillSlot(slot, decor) {
    const r = this.rand;
    const { m, len, clear, d } = slot;
    let x = 0.01 + r() * 0.04;
    let lastH = 0.25;
    while (x < len - 0.03) {
      const roll = r();
      const remain = len - x;
      if (roll < 0.07 && remain > 0.34 && clear > 0.16) {
        // horizontal stack
        const n = 2 + Math.floor(r() * 4);
        let y = 0;
        let maxW = 0;
        const baseW = 0.2 + r() * 0.1;
        for (let i = 0; i < n; i++) {
          const t = 0.022 + r() * 0.04;
          if (y + t > clear - 0.02) break;
          const w = Math.min(baseW + (r() - 0.5) * 0.06, remain - 0.03);
          const dd = Math.min(d - 0.02, 0.15 + r() * 0.08);
          this.add(m, x + w / 2 + (r() - 0.5) * 0.02, y + t / 2, -dd / 2 - 0.01 - r() * 0.02, Math.PI / 2, t, w, dd, this.color(), Math.floor(r() * 8), (r() - 0.5) * 0.12);
          y += t;
          maxW = Math.max(maxW, w);
        }
        x += maxW + 0.02 + r() * 0.03;
        continue;
      }
      if (roll < 0.13) {
        // gap, sometimes with a small object
        const gw = 0.06 + r() * 0.16;
        if (decor && gw > 0.1 && remain > 0.2) decor(slot, x + gw / 2, gw);
        x += gw;
        continue;
      }
      // a run of books: either a matching set or a mixed group
      const isSet = r() < 0.4;
      const n = isSet ? 4 + Math.floor(r() * 10) : 3 + Math.floor(r() * 12);
      const setCol = this.color();
      const setVar = Math.floor(r() * 8);
      const setH = Math.min(clear - 0.02, 0.2 + r() * 0.16);
      const setT = 0.03 + r() * 0.03;
      const setD = Math.min(d - 0.02, 0.15 + r() * 0.08);
      const tall = r() < 0.2 ? 0.08 : 0;
      for (let i = 0; i < n && x < len - 0.03; i++) {
        let t, h, dd, col, v;
        if (isSet) {
          t = setT * (0.85 + r() * 0.3); h = setH; dd = setD; col = r() < 0.08 ? this.color() : setCol; v = setVar;
        } else {
          t = 0.016 + r() * 0.05 + (r() < 0.1 ? 0.03 : 0);
          h = Math.min(clear - 0.015, 0.17 + r() * 0.17 + tall);
          dd = Math.min(d - 0.02, 0.12 + r() * 0.13);
          col = this.color(); v = Math.floor(r() * 8);
        }
        if (x + t > len - 0.01) break;
        const push = 0.006 + r() * (r() < 0.15 ? 0.06 : 0.018);
        this.add(m, x + t / 2, h / 2, -dd / 2 - push, 0, t, h, dd, col, v, (r() - 0.5) * 0.03);
        x += t + 0.0015;
        lastH = h;
      }
      // leaning book at end of run
      if (r() < 0.35 && len - x > 0.12) {
        const a = 0.12 + r() * 0.3;
        const t = 0.02 + r() * 0.03;
        const h = Math.min(lastH * 0.95, clear - 0.03, 0.18 + r() * 0.12);
        const dd = Math.min(d - 0.02, 0.14 + r() * 0.08);
        const cx = x + (t / 2) * Math.cos(a) + (h / 2) * Math.sin(a);
        const cy = (t / 2) * Math.sin(a) + (h / 2) * Math.cos(a);
        if (x + t * Math.cos(a) + h * Math.sin(a) < len - 0.01) {
          this.add(m, cx, cy, -dd / 2 - 0.01, a, t, h, dd, this.color(), Math.floor(r() * 8));
          x += t * Math.cos(a) + h * Math.sin(a);
        }
      }
      x += 0.004 + r() * 0.04;
    }
  }

  // Flat stack anywhere (tables, floor, sills).
  stack(m, x, y, z, n, ry0 = 0) {
    const r = this.rand;
    let yy = y;
    for (let i = 0; i < n; i++) {
      const t = 0.025 + r() * 0.04;
      const w = 0.2 + r() * 0.12;
      const dd = 0.15 + r() * 0.08;
      this.add(m, x + (r() - 0.5) * 0.03, yy + t / 2, z + (r() - 0.5) * 0.03, Math.PI / 2, t, w, dd, this.color(), Math.floor(r() * 8), ry0 + (r() - 0.5) * 0.4);
      yy += t;
    }
    return yy;
  }

  build(texture) {
    const geo = new THREE.BoxGeometry(1, 1, 1);
    // Re-map UVs per face into the atlas and flag spine/page faces.
    const uv = geo.attributes.uv;
    const spine = new Float32Array(uv.count);
    const page = new Float32Array(uv.count);
    // face order: +x,-x,+y,-y,+z,-z
    for (let f = 0; f < 6; f++) {
      for (let k = 0; k < 4; k++) {
        const i = f * 4 + k;
        let u = uv.getX(i), v = uv.getY(i);
        if (f === 4) { u = u * 0.0625; spine[i] = 1; }
        else if (f === 0 || f === 1) { u = 0.76 + u * 0.23; }
        else if (f === 2 || f === 3) { const uu = u; u = 0.51 + v * 0.23; v = uu; page[i] = 1; }
        else { u = 0.51 + u * 0.23; page[i] = 1; }
        uv.setXY(i, u, v);
      }
    }
    geo.setAttribute('aSpine', new THREE.BufferAttribute(spine, 1));
    geo.setAttribute('aPage', new THREE.BufferAttribute(page, 1));
    const n = this.mats.length;
    const variants = new Float32Array(n);
    for (let i = 0; i < n; i++) variants[i] = this.vars[i];
    geo.setAttribute('aVar', new THREE.InstancedBufferAttribute(variants, 1));

    const mat = new THREE.MeshLambertMaterial({ map: texture });
    mat.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aSpine;\nattribute float aPage;\nattribute float aVar;\nvarying float vPage;')
        .replace('#include <uv_vertex>', '#include <uv_vertex>\nvMapUv.x += aSpine * aVar * 0.0625;\nvPage = aPage;')
        .replace('#include <color_vertex>', '#include <color_vertex>\nvColor.xyz = mix(vColor.xyz, vec3(0.78, 0.71, 0.57), aPage);');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying float vPage;')
        .replace('#include <color_fragment>', `
          float gm = 0.0;
          #ifdef USE_MAP
            gm = clamp((sampledDiffuseColor.r - sampledDiffuseColor.b - 0.18) * 4.0, 0.0, 1.0) * (1.0 - vPage);
          #endif
          diffuseColor.rgb *= mix(vColor, vec3(1.25), gm);
        `)
        .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.32, gm);\n')
        .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\nmetalnessFactor = mix(metalnessFactor, 0.85, gm);\n');
    };

    const idx = geo.index.array;
    geo.setIndex(Array.from(idx.slice(0, 30)));
    const mesh = new THREE.InstancedMesh(geo, mat, n);
    const col = new THREE.Color();
    for (let i = 0; i < n; i++) {
      mesh.setMatrixAt(i, this.mats[i]);
      const c = this.cols[i];
      col.setRGB(c[0], c[1], c[2]);
      mesh.setColorAt(i, col);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.computeBoundingSphere();
    return mesh;
  }
}
