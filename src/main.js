import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { rng, softDot, bookAtlas } from './textures.js';
import { makeMaterials, buildLibrary, ROOM } from './build.js';
import { BookSet } from './books.js';
import { installFpsLook } from './look.js';

const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
const MAX_PR = Math.min(window.devicePixelRatio || 1, 1.0);
let pixelRatio = MAX_PR;
renderer.setPixelRatio(pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8a7a6a);
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.05, 2500);
camera.rotation.order = 'YXZ';

const pmrem = new THREE.PMREMGenerator(renderer);
const roomEnvironment = new RoomEnvironment();
const environmentTarget = pmrem.fromScene(roomEnvironment, 0.04);
scene.environment = environmentTarget.texture;
roomEnvironment.dispose();
pmrem.dispose();
scene.environmentIntensity = 0.22;

// --------------------------------------------------------------- build
const rand = rng(20261006);
const M = makeMaterials();
const books = new BookSet(rng(77));
const lib = buildLibrary(M, books, rand);
lib.B.finish(scene);
const bookMesh = books.build(bookAtlas(31));
scene.add(bookMesh);
const solids = lib.B.solids;
// Instance buffers now own the uploaded book data. Release construction staging arrays.
books.mats.length = books.cols.length = books.vars.length = 0;

// --------------------------------------------------------------- lighting
const sunDir = new THREE.Vector3(-0.9, 0.4, 0.14).normalize();
const sun = new THREE.DirectionalLight(0xffb36b, 8.0);
sun.target.position.set(-2, 3, -1);
sun.position.copy(sun.target.position).addScaledVector(sunDir, 60);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
const sc = sun.shadow.camera;
sc.left = -17; sc.right = 17; sc.top = 15; sc.bottom = -15; sc.near = 20; sc.far = 100;
sc.updateProjectionMatrix();
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.025;
scene.add(sun, sun.target);

const hemi = new THREE.HemisphereLight(0xc9d6ff, 0x6a4428, 0.42);
scene.add(hemi);
// broad warm "bounce" from the sunlit floor and east wall, keeps the gallery readable
const bounce = new THREE.PointLight(0xffa868, 11, 24, 1.2);
bounce.position.set(3.0, 3.6, -0.8);
scene.add(bounce);

const lamps = [];
for (const l of lib.lights) {
  const p = new THREE.PointLight(l.c, l.i, l.d, 2);
  p.position.copy(l.p);
  p.userData = l;
  scene.add(p);
  lamps.push(p);
}

// --------------------------------------------------------------- sky + hillside backdrop
const horizon = new THREE.Color(1.0, 0.66, 0.42);
{
  const g = new THREE.SphereGeometry(1200, 32, 16);
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { sunDir: { value: sunDir } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,
    fragmentShader: `uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 zen = vec3(0.16,0.27,0.55); vec3 hor = vec3(1.25,0.74,0.45); vec3 below = vec3(0.55,0.42,0.36);
        vec3 col = mix(hor, zen, pow(clamp(h,0.0,1.0), 0.5));
        col = mix(col, below, smoothstep(0.0,-0.2,h));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.55,0.25)*pow(s,5.0)*0.7 + vec3(1.0,0.75,0.45)*pow(s,90.0)*2.5 + smoothstep(0.9993,0.9996,s)*vec3(18.0,12.0,7.0);
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(g, m);
  sky.frustumCulled = false;
  sky.renderOrder = -1;
  scene.add(sky);
}
function terrainH(x, z) {
  let h = -0.7;
  const w = Math.max(0, -x - 13);
  h -= 70 * (1 - Math.exp(-w / 140));
  h += (Math.sin(x * 0.011 + z * 0.017) * 10 + Math.sin(z * 0.029 + 1.3) * Math.cos(x * 0.013) * 12) * Math.min(1, w / 120);
  if (x < -420) h += Math.min(140, (-x - 420) * 0.22) * (0.75 + 0.18 * Math.sin(z * 0.009 + 0.5) + 0.07 * Math.sin(z * 0.043));
  if (x > 8) h += (x - 8) * 0.35;
  if (Math.abs(z) > 30 && x > -60) h += (Math.abs(z) - 30) * 0.12;
  return h;
}
{
  const N = 220, S = 1800;
  const g = new THREE.PlaneGeometry(S, S, N, N);
  g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const grassA = new THREE.Color(0.24, 0.27, 0.1), grassB = new THREE.Color(0.34, 0.3, 0.12), tmp = new THREE.Color();
  const sunFlat = new THREE.Vector3(sunDir.x, sunDir.y, sunDir.z);
  // Keep the original normal stream; only its discarded colour pass is omitted.
  for (let i = 0; i < pos.count; i++) pos.setY(i, terrainH(pos.getX(i), pos.getZ(i)));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.computeVertexNormals();
  const t = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true }));
  t.position.x = -300;
  t.matrixAutoUpdate = false; t.updateMatrix();
  scene.add(t);
  // Final world-space heights and colours in a single pass.
  const terrainNormal = new THREE.Vector3();
  const terrainHaze = new THREE.Color(0.86, 0.6, 0.48);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) - 300, z = pos.getZ(i);
    pos.setY(i, terrainH(x, z));
    const nx = terrainH(x - 1, z) - terrainH(x + 1, z), nz = terrainH(x, z - 1) - terrainH(x, z + 1);
    const n = terrainNormal.set(nx, 2, nz).normalize();
    const lit = 0.45 + 0.9 * Math.max(0, n.dot(sunFlat));
    tmp.copy(grassA).lerp(grassB, 0.5 + 0.5 * Math.sin(x * 0.05) * Math.cos(z * 0.07)).multiplyScalar(lit);
    tmp.r *= 1.25; tmp.g *= 1.05;
    const dist = Math.hypot(x + 10, z);
    tmp.lerp(terrainHaze, (1 - Math.exp(-dist / 420)) * 0.92);
    col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;
  }
  // trees
  const tr = rng(5);
  const cone = new THREE.ConeGeometry(1, 1, 7);
  cone.translate(0, 0.5, 0);
  const trunk = 0;
  const tm = new THREE.InstancedMesh(cone, new THREE.MeshBasicMaterial(), 700);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(), c = new THREE.Color();
  const treeHaze = new THREE.Color(0.8, 0.58, 0.5);
  let k = 0;
  while (k < 700) {
    const x = -14 - Math.pow(tr(), 1.6) * 520, z = (tr() - 0.5) * 900;
    if (x > -45) continue;
    const ht = 5 + tr() * 9, wd = ht * (0.25 + tr() * 0.1);
    p.set(x, terrainH(x, z) - 0.5, z); s.set(wd, ht, wd);
    m4.compose(p, q, s);
    tm.setMatrixAt(k, m4);
    const dist = Math.hypot(x + 10, z);
    c.setRGB(0.16 + tr() * 0.06, 0.2 + tr() * 0.07, 0.1).lerp(treeHaze, (1 - Math.exp(-dist / 300)) * 0.92);
    tm.setColorAt(k, c);
    k++;
  }
  tm.frustumCulled = false;
  scene.add(tm);
}

// --------------------------------------------------------------- light shafts + dust
const L = sunDir.clone().negate();
{
  const pos = [], uvs = [];
  const LEN = 12;
  for (const c of lib.windows.slice(0, 4)) {
    for (let i = 0; i < 4; i++) {
      const a = c[i], b = c[(i + 1) % 4];
      const a2 = a.clone().addScaledVector(L, LEN), b2 = b.clone().addScaledVector(L, LEN);
      for (const [v, u, w] of [[a, 0, 0], [b, 0, 1], [b2, 1, 1], [a, 0, 0], [b2, 1, 1], [a2, 1, 0]]) { pos.push(v.x, v.y, v.z); uvs.push(u, w); }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { t: { value: 0 } },
    vertexShader: `varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,
    fragmentShader: `uniform float t; varying vec2 vUv; varying vec3 vW;
      void main(){ float along = vUv.x; float across = vUv.y;
        float a = pow(1.0-along, 1.6) * smoothstep(0.0,0.04,along) * smoothstep(0.0,0.25,across) * smoothstep(1.0,0.75,across);
        float n = 0.75 + 0.25*sin(vW.x*1.7 + vW.y*2.3 + t*0.3) * sin(vW.z*1.3 - t*0.2);
        float fadeFloor = smoothstep(0.0, 0.6, vW.y);
        gl_FragColor = vec4(vec3(1.0,0.72,0.42)*a*n*0.11*fadeFloor, 1.0); }`,
  });
  const shafts = new THREE.Mesh(g, m);
  shafts.frustumCulled = false;
  shafts.renderOrder = 5;
  scene.add(shafts);
  window.__shafts = m;
}
let dustMat;
{
  const dr = rng(9);
  const pts = [], ph = [];
  for (const c of lib.windows) {
    for (let i = 0; i < 420; i++) {
      const u = dr(), v = dr();
      const p = c[0].clone().lerp(c[1], u).lerp(c[3].clone().lerp(c[2], u), v).addScaledVector(L, 0.5 + dr() * 11);
      if (p.y < 0.1 || p.y > 10 || p.x > 6.9 || p.z < -9.9 || p.z > 8.9) continue;
      pts.push(p.x, p.y, p.z); ph.push(dr() * 100);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  g.setAttribute('phase', new THREE.Float32BufferAttribute(ph, 1));
  dustMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { t: { value: 0 }, map: { value: softDot() }, scale: { value: window.innerHeight * 0.5 } },
    vertexShader: `uniform float t; uniform float scale; attribute float phase; varying float vA;
      void main(){ vec3 p = position + vec3(sin(t*0.11+phase)*0.25, sin(t*0.07+phase*1.3)*0.3, cos(t*0.09+phase*0.7)*0.25);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        gl_PointSize = clamp(0.018*scale/-mv.z, 0.0, 6.0); vA = 0.55+0.45*sin(t*0.5+phase); }`,
    fragmentShader: `uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0,0.8,0.55)*a*vA*0.8, 1.0); }`,
  });
  const dust = new THREE.Points(g, dustMat);
  dust.frustumCulled = false;
  scene.add(dust);
}

// --------------------------------------------------------------- player & collision
const P = {
  pos: new THREE.Vector3(), vy: 0, yaw: 0, pitch: 0, eye: 1.62, eyeCur: 1.62, smoothY: 0,
  vel: new THREE.Vector3(), radius: 0.28, step: 0.42, height: 1.75,
};
const VIEWS = [
  { p: [3.4, 0, 4.3], yaw: 0.78, pitch: 0.1, name: 'Entrance by the hearth' },
  { p: [-2.0, 0, -3.7], yaw: 1.2, pitch: -0.05, name: 'Lower shelves, between the stacks' },
  { p: [-8.2, 0, 4.9], yaw: 1.5, pitch: -0.05, name: 'Window reading alcove' },
  { p: [5.6, 0, 8.0], yaw: 0, pitch: 0.18, name: 'Foot of the staircase' },
  { p: [1.2, ROOM.GY, -7.6], yaw: Math.PI - 0.3, pitch: -0.32, name: 'Gallery overlook' },
];
function setView(i) {
  const v = VIEWS[i];
  P.pos.set(v.p[0], v.p[1], v.p[2]);
  P.yaw = v.yaw; P.pitch = v.pitch; P.vy = 0; P.vel.set(0, 0, 0);
  P.smoothY = P.pos.y;
  toast(v.name);
}

function groundAt(x, z, feet) {
  let g = -Infinity;
  const r = P.radius * 0.7;
  for (const s of solids) {
    if (x + r < s.x0 || x - r > s.x1 || z + r < s.z0 || z - r > s.z1) continue;
    if (s.y1 <= feet + P.step && s.y1 > g) g = s.y1;
  }
  return g;
}
function blocked(x, z, feet, h) {
  const r = P.radius;
  for (const s of solids) {
    if (x + r <= s.x0 || x - r >= s.x1 || z + r <= s.z0 || z - r >= s.z1) continue;
    if (s.y0 < feet + h && s.y1 > feet + P.step) return true;
  }
  return false;
}

const keys = new Set();
let crouch = false;
addEventListener('keydown', (e) => {
  if (e.target?.matches?.('input, button')) return;
  keys.add(e.code);
  if (e.repeat) return;
  if (e.code === 'KeyR') setView(0);
  if (e.code.startsWith('Digit')) { const n = +e.code.slice(5) - 1; if (n >= 0 && n < VIEWS.length) setView(n); }
  if (e.code === 'KeyC') crouch = !crouch;
  if (e.code === 'KeyF') stats.classList.toggle('show');
  if (e.code === 'KeyH') help.classList.toggle('hide');
  if (e.code === 'KeyP') { pixelRatio = pixelRatio > 0.8 ? Math.max(0.6, pixelRatio - 0.25) : MAX_PR; renderer.setPixelRatio(pixelRatio); resize(); toast(`Render scale ${Math.round(pixelRatio * 100)}%`); }
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());

const overlay = document.getElementById('overlay');
const help = document.getElementById('help');
const stats = document.getElementById('stats');
const toastEl = document.getElementById('toast');
let toastT = 0;
function toast(s) { toastEl.textContent = s; toastEl.classList.add('show'); toastT = 2.2; }

installFpsLook({ canvas, overlay, player: P, camera, toast,
  releaseMovement: () => { keys.clear(); P.vel.set(0, 0, 0); },
});

const desiredVelocity = new THREE.Vector3();
function updatePlayer(dt) {
  const fwd = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
  const str = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
  const speed = (keys.has('ShiftLeft') || keys.has('ShiftRight') ? 4.6 : 2.5) * (crouch ? 0.55 : 1);
  const sy = Math.sin(P.yaw), cy = Math.cos(P.yaw);
  const tx = (-sy * fwd + cy * str), tz = (-cy * fwd - sy * str);
  const len = Math.hypot(tx, tz) || 1;
  const want = desiredVelocity.set((tx / len) * speed * (fwd || str ? 1 : 0), 0, (tz / len) * speed * (fwd || str ? 1 : 0));
  const k = 1 - Math.exp(-dt * 12);
  P.vel.lerp(want, k);
  const h = crouch ? 1.15 : P.height;
  const nx = P.pos.x + P.vel.x * dt, nz = P.pos.z + P.vel.z * dt;
  if (!blocked(nx, nz, P.pos.y, h)) { P.pos.x = nx; P.pos.z = nz; }
  else if (!blocked(nx, P.pos.z, P.pos.y, h)) { P.pos.x = nx; P.vel.z *= 0.5; }
  else if (!blocked(P.pos.x, nz, P.pos.y, h)) { P.pos.z = nz; P.vel.x *= 0.5; }
  else P.vel.multiplyScalar(0.2);
  const g = groundAt(P.pos.x, P.pos.z, P.pos.y);
  if (g >= P.pos.y - P.step && g > -Infinity && P.vy <= 0) { P.pos.y = g; P.vy = 0; }
  else { P.vy -= 9.8 * dt; P.pos.y += P.vy * dt; if (g > -Infinity && P.pos.y < g) { P.pos.y = g; P.vy = 0; } }
  if (P.pos.y < -10) setView(0);
  // smoothed camera height across stair steps
  P.smoothY += (P.pos.y - P.smoothY) * (1 - Math.exp(-dt * 14));
  P.eyeCur += ((crouch ? 1.0 : P.eye) - P.eyeCur) * (1 - Math.exp(-dt * 10));
  camera.position.set(P.pos.x, P.smoothY + P.eyeCur, P.pos.z);
  camera.rotation.set(P.pitch, P.yaw, 0);
}

// --------------------------------------------------------------- loop + stats
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  dustMat.uniforms.scale.value = window.innerHeight * pixelRatio * 0.5;
}
addEventListener('resize', resize);
resize();

// Depth pre-pass: opaque geometry writes depth first so the expensive lit pass shades each pixel ~once.
const depthMat = new THREE.MeshBasicMaterial({ colorWrite: false });
const noPrepass = [];
scene.traverse((o) => { if (o.material && (o.material.transparent || o.material.isShaderMaterial || o.isPoints)) noPrepass.push(o); });
renderer.autoClear = false;
let usePrepass = false; // measured: no gain on integrated GPUs, kept as a debug toggle
function drawFrame() {
  renderer.clear();
  if (usePrepass) {
    for (const o of noPrepass) o.visible = false;
    scene.overrideMaterial = depthMat;
    renderer.render(scene, camera);
    scene.overrideMaterial = null;
    for (const o of noPrepass) o.visible = true;
  }
  renderer.render(scene, camera);
}
const frameTimes = [];
let statT = 0, last = performance.now(), time = 0;
setView(0);
toastEl.classList.remove('show');
renderer.compile(scene, camera);
// upload every texture now so turning toward a new area never stalls on a first-use upload
scene.traverse((o) => { const m = o.material; if (!m) return; for (const k of ['map', 'bumpMap']) if (m[k]) renderer.initTexture(m[k]); if (m.uniforms && m.uniforms.map) renderer.initTexture(m.uniforms.map.value); });
renderer.shadowMap.needsUpdate = true;

function frame(now) {
  const rawDt = (now - last) / 1000;
  last = now;
  const dt = Math.min(rawDt, 0.05);
  time += dt;
  updatePlayer(dt);
  for (const l of lamps) if (l.userData.fire) l.intensity = l.userData.i * (0.82 + 0.12 * Math.sin(time * 9.1) + 0.08 * Math.sin(time * 23.7 + 1.3));
  window.__shafts.uniforms.t.value = time;
  dustMat.uniforms.t.value = time;
  drawFrame();
  if (rawDt < 0.25 && document.visibilityState === 'visible') frameTimes.push(rawDt * 1000);
  if (frameTimes.length > 240) frameTimes.shift();
  statT += rawDt;
  if (statT > 0.5) {
    statT = 0;
    const s = [...frameTimes].sort((a, b) => a - b);
    const avg = s.reduce((a, b) => a + b, 0) / s.length;
    const p99 = s[Math.floor(s.length * 0.99) - 1] || avg;
    const info = renderer.info.render;
    stats.textContent = `${(1000 / avg).toFixed(0)} fps  avg ${avg.toFixed(1)} ms  p99 ${p99.toFixed(1)} ms\ncalls ${info.calls}  tris ${(info.triangles / 1000).toFixed(0)}k  scale ${Math.round(pixelRatio * 100)}%\npos ${P.pos.x.toFixed(1)} ${P.pos.y.toFixed(2)} ${P.pos.z.toFixed(1)}`;
  }
  // Production quality stays at the selected scale; no automatic resolution reduction.
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) toastEl.classList.remove('show'); }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
document.getElementById('loading').classList.add('hide');
window.__lib = { P, setView, solids, renderer, scene, camera, books: bookMesh, drawFrame, setPrepass: (v) => (usePrepass = v),
  sim: (codes, secs) => { codes.forEach((c) => keys.add(c)); for (let t = 0; t < secs; t += 1 / 60) updatePlayer(1 / 60); codes.forEach((c) => keys.delete(c)); return P.pos.toArray().map((v) => +v.toFixed(2)); } };
