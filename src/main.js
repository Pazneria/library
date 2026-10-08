import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { rng, softDot, bookAtlas } from './textures.js';
import { makeMaterials, buildLibrary, ROOM } from './build.js';
import { BookSet } from './books.js';
import { installFpsLook } from './look.js';
import { READING_CONTENT } from './reading-content.js';
import { ROOM_ANCHORS, INTERACTION_REACH } from './room-anchors.js';
import { addReadingBooks } from './reading-scene.js';
import { pickAnchor, isEditingTarget } from './interaction-core.js';
import { installReading } from './reading.js';
import { addHillsideBooks, installHillsideReading } from './jippity-book/hillside.js';
import { createFrameLoop } from './frame-loop.js';
import './reading.css';
import { EXIT_CONTENT } from './exit-content.js';
import { EXIT_ANCHOR } from './exit-anchor.js';
import { addLibraryExit } from './exit-scene.js';
import { installLibraryExit } from './exit.js';
import { disposeLibraryResources } from './exit-resources.js';
import './exit.css';
import { createExterior } from './exterior/index.js';

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
const readingBooks = addHillsideBooks(scene, ROOM_ANCHORS, READING_CONTENT, addReadingBooks);
const exitGeometry = addLibraryExit(scene, M, EXIT_ANCHOR, EXIT_CONTENT);
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

// --------------------------------------------------------------- exterior scenery
const exterior = createExterior({ sunDirection: sunDir });
scene.add(exterior.group);

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
let reading = null, loop = null;
let exit = null, libraryDisposed = false;
addEventListener('keydown', (e) => {
  if (libraryDisposed || reading?.isOpen || loop?.paused || isEditingTarget(e.target)) return;
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

function releaseMovement() { keys.clear(); P.vel.set(0, 0, 0); }
const look = installFpsLook({ canvas, overlay, menuButton: document.getElementById('controls-toggle'), player: P, camera, toast, releaseMovement,
  isInputBlocked: () => Boolean(libraryDisposed || reading?.isOpen || loop?.paused),
  setMenuPaused: paused => loop?.setPaused('controls', paused),
});
const lookDirection = new THREE.Vector3();
reading = installHillsideReading({ legacyFactory: installReading, camera, solids, document, window, canvas, content: READING_CONTENT, look, releaseMovement,
  dialog: document.getElementById('reader'), hint: document.getElementById('interaction-hint'),
  returnFocus: canvas,
  canInteract: () => !libraryDisposed && !look.menuOpen && !loop?.paused && document.hasFocus(),
  getTarget: () => pickAnchor(camera.position, camera.getWorldDirection(lookDirection), ROOM_ANCHORS, solids, INTERACTION_REACH),
  setPaused: paused => loop?.setPaused('reading', paused)
});
exit = installLibraryExit({ document, window, canvas, content: EXIT_CONTENT,
  controls: overlay.querySelector('.card'), readerFooter: document.querySelector('.reader-footer'),
  canInteract: () => !libraryDisposed && !reading.isOpen && !look.menuOpen && !loop?.paused && document.hasFocus(),
  getTarget: () => pickAnchor(camera.position, camera.getWorldDirection(lookDirection), [EXIT_ANCHOR], solids, EXIT_ANCHOR.reach),
  beforeLeave: disposeLibrary,
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
let statT = 0, hintT = 0, time = 0;
setView(0);
updatePlayer(0); // The initial paused background uses the authored entrance camera.
toastEl.classList.remove('show');
renderer.compile(scene, camera);
// upload every texture now so turning toward a new area never stalls on a first-use upload
scene.traverse((o) => { const m = o.material; if (!m) return; for (const k of ['map', 'bumpMap']) if (m[k]) renderer.initTexture(m[k]); if (m.uniforms && m.uniforms.map) renderer.initTexture(m.uniforms.map.value); });
renderer.shadowMap.needsUpdate = true;

function frame(now, rawDt) {
  const dt = Math.min(rawDt, 0.05);
  time += dt;
  updatePlayer(dt);
  hintT += dt;
  if (hintT >= 0.125) { hintT = 0; reading.updateHint(); exit.updateHint(); }
  for (const l of lamps) if (l.userData.fire) l.intensity = l.userData.i * (0.82 + 0.12 * Math.sin(time * 9.1) + 0.08 * Math.sin(time * 23.7 + 1.3));
  window.__shafts.uniforms.t.value = time;
  dustMat.uniforms.t.value = time;
  drawFrame();
  if (rawDt > 0 && rawDt < 0.25 && document.visibilityState === 'visible') frameTimes.push(rawDt * 1000);
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
}
loop = createFrameLoop({ tick: frame, request: callback => window.requestAnimationFrame(callback), cancel: id => window.cancelAnimationFrame(id), now: () => performance.now() });
const lifecycle = [];
function listen(target, name, listener) {
  target.addEventListener(name, listener);
  lifecycle.push(() => target.removeEventListener(name, listener));
}
function disposeLibrary() {
  if (libraryDisposed) return;
  libraryDisposed = true;
  releaseMovement(); look.pause(); loop?.setPaused('exit', true);
  exit?.dispose(); reading.dispose(); look.dispose(); loop?.dispose();
  for (const remove of lifecycle) remove();
  disposeLibraryResources({ scene, renderer, environmentTarget,
    materials: Object.values(M), extraMaterials: [depthMat, ...exitGeometry.materials] });
  delete window.__shafts; delete window.__lib;
}
listen(window, 'blur', () => { releaseMovement(); loop.setPaused('focus', true); });
listen(window, 'focus', () => loop.setPaused('focus', false));
listen(document, 'visibilitychange', () => loop.setPaused('visibility', document.visibilityState !== 'visible'));
listen(window, 'pagehide', event => {
  look.pause(); loop.setPaused('page', true);
  if (!event.persisted) {
    disposeLibrary();
  }
});
listen(window, 'pageshow', () => {
  look.resume(); loop.setPaused('page', false);
  loop.setPaused('visibility', document.visibilityState !== 'visible');
  loop.setPaused('focus', !document.hasFocus());
});
drawFrame();
loop.setPaused('visibility', document.visibilityState !== 'visible');
loop.setPaused('focus', !document.hasFocus());
loop.start();
document.getElementById('loading').classList.add('hide');
window.__lib = { P, setView, solids, renderer, scene, camera, books: bookMesh, drawFrame, setPrepass: (v) => (usePrepass = v),
  sim: (codes, secs) => { codes.forEach((c) => keys.add(c)); for (let t = 0; t < secs; t += 1 / 60) updatePlayer(1 / 60); codes.forEach((c) => keys.delete(c)); return P.pos.toArray().map((v) => +v.toFixed(2)); } };
