import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
class Events {
  constructor() { this.listeners = new Map(); }
  addEventListener(type, handler) { if (!this.listeners.has(type)) this.listeners.set(type, []); this.listeners.get(type).push(handler); }
  emit(type, event = {}) { for (const handler of this.listeners.get(type) || []) handler(event); }
}
const settle = async () => { for (let i = 0; i < 8; i++) await Promise.resolve(); };
function lookHarness(request = () => Promise.resolve()) {
  const win = new Events(), doc = new Events(), canvas = new Events(), overlay = new Events(), slider = new Events();
  const classes = new Set();
  const output = { textContent: '100%' };
  overlay.classList = { add: name => classes.add(name), remove: name => classes.delete(name),
    toggle: (name, enabled) => enabled ? classes.add(name) : classes.delete(name) };
  slider.value = '100';
  overlay.querySelector = selector => selector.includes('-value') ? output : slider;
  const requests = [], messages = [];
  let focused = true, releases = 0, exits = 0;
  doc.visibilityState = 'visible'; doc.pointerLockElement = null; doc.hasFocus = () => focused;
  doc.exitPointerLock = () => { exits++; doc.pointerLockElement = null; };
  canvas.requestPointerLock = request ? options => { requests.push(options); return request(options, requests.length); } : undefined;
  const player = { yaw: 0, pitch: 0 }, camera = { rotation: { set: (...values) => { camera.values = values; } } };
  const context = { document: doc, addEventListener: win.addEventListener.bind(win) };
  vm.createContext(context);
  vm.runInContext(readFileSync(new URL('../src/look.js', import.meta.url), 'utf8').replace('export function', 'function') + ';globalThis.install=installFpsLook;', context);
  context.install({ canvas, overlay, player, camera, releaseMovement: () => releases++, toast: message => messages.push(message) });
  const click = setting => overlay.emit('click', { target: { closest: () => setting } });
  const lock = () => { doc.pointerLockElement = canvas; doc.emit('pointerlockchange'); };
  return { win, doc, canvas, overlay, slider, output, player, camera, classes, requests, messages, click, lock,
    get releases() { return releases; }, get exits() { return exits; }, setFocus: state => { focused = state; } };
}
const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-12, `${a} != ${b}`);
const tested = [];
let h = lookHarness();
h.win.emit('mousemove', { movementX: 100, movementY: 50 });
close(h.player.yaw, 0);
h.click(true); assert.equal(h.requests.length, 0);
h.click(false); assert.equal(h.requests[0].unadjustedMovement, true); assert.ok(!h.classes.has('hide'));
await settle(); h.lock(); assert.ok(h.classes.has('hide'));
h.win.emit('mousemove', { movementX: 100, movementY: 50 });
close(h.player.yaw, -0.26); close(h.player.pitch, -0.13);
assert.deepEqual(h.camera.values, [h.player.pitch, h.player.yaw, 0]);
tested.push('Raw input requested; settings do not capture; camera rotation changes within the input handler');
h.slider.value = '200'; h.slider.emit('input'); assert.equal(h.output.textContent, '200%');
h.win.emit('mousemove', { movementX: 100, movementY: 0 }); close(h.player.yaw, -0.78);
h.win.emit('mousemove', { movementX: NaN, movementY: 0 }); close(h.player.yaw, -0.78);
h.win.emit('mousemove', { movementX: 0, movementY: 100000 }); close(h.player.pitch, -Math.PI/2 + 0.02);
h.win.emit('mousemove', { movementX: 0, movementY: -100000 }); close(h.player.pitch, Math.PI/2 - 0.02);
tested.push('Sensitivity scales mouse counts; nonfinite input ignored; pitch clamped short of vertical; roll zero');
const beforeUnlock = h.player.yaw;
h.doc.pointerLockElement = null; h.doc.emit('pointerlockchange'); assert.ok(!h.classes.has('hide'));
h.win.emit('mousemove', { movementX: 100, movementY: 0 }); close(h.player.yaw, beforeUnlock);
h.click(false); await settle(); h.lock();
h.setFocus(false); h.win.emit('blur'); assert.ok(!h.classes.has('hide')); assert.equal(h.exits, 1);
h.win.emit('mousemove', { movementX: 100, movementY: 0 }); close(h.player.yaw, beforeUnlock);
const count = h.requests.length; h.setFocus(true); h.win.emit('focus'); assert.equal(h.requests.length, count);
h.click(false); await settle(); h.lock();
h.doc.visibilityState = 'hidden'; h.doc.emit('visibilitychange'); assert.ok(!h.classes.has('hide'));
const hiddenYaw = h.player.yaw; h.win.emit('mousemove', { movementX: 100, movementY: 0 }); close(h.player.yaw, hiddenYaw);
h.doc.visibilityState = 'visible'; h.doc.emit('visibilitychange'); assert.equal(h.requests.length, count + 1);
tested.push('Unlock, blur and hidden tab release movement, ignore mouse input and require a fresh click');
h = lookHarness((options, n) => n === 1 ? Promise.reject(Object.assign(new Error(), { name: 'NotSupportedError' })) : Promise.resolve());
h.click(false); await settle(); assert.equal(h.requests.length, 2); assert.equal(h.requests[1], undefined); h.lock();
tested.push('Unsupported raw input retries ordinary pointer lock');
h = lookHarness(() => Promise.reject(Object.assign(new Error(), { name: 'NotAllowedError' })));
h.click(false); await settle(); assert.equal(h.requests.length, 1); assert.ok(h.classes.has('hide')); assert.equal(h.messages.length, 1);
h.canvas.emit('mousedown', { button: 2, clientX: 90, clientY: 90 });
h.win.emit('mousemove', { buttons: 2, clientX: 100, clientY: 100, movementX: 999 }); close(h.player.yaw, 0);
h.canvas.emit('mousedown', { button: 0, clientX: 100, clientY: 100 }); await settle();
h.win.emit('mousemove', { buttons: 1, clientX: 110, clientY: 105, movementX: 999, movementY: 999 });
close(h.player.yaw, -0.026); close(h.player.pitch, -0.013);
h.win.emit('mouseup'); h.win.emit('mousemove', { buttons: 1, clientX: 999, clientY: 999 }); close(h.player.yaw, -0.026);
h.win.emit('keydown', { code: 'Escape' }); assert.ok(!h.classes.has('hide'));
tested.push('Denied capture remains usable with left drag; client-coordinate baseline prevents jump; right drag and released drag ignored');
h = lookHarness(() => undefined); h.click(false); h.doc.emit('pointerlockerror'); assert.ok(h.classes.has('hide'));
h = lookHarness(null); h.click(false); assert.ok(h.classes.has('hide'));
tested.push('Legacy event-only and unavailable pointer lock degrade to click-drag');
let resolvePending;
h = lookHarness(() => new Promise(resolve => { resolvePending = resolve; }));
h.click(false); h.win.emit('keydown', { code: 'Escape' }); resolvePending(); await settle(); h.lock();
assert.equal(h.exits, 1); assert.ok(!h.classes.has('hide'));
tested.push('Escape cancels pending capture; a late lock cannot recapture the mouse');
function rotateWithRenderCadence(renderEvery) {
  const run = lookHarness(); run.click(false); run.lock();
  let rendered;
  for (let i = 0; i < 240; i++) {
    run.win.emit('mousemove', { movementX: i % 3 - 1 + 0.5, movementY: 0.1 });
    if (i % renderEvery === 0) rendered = run.camera.values.slice();
  }
  return { yaw: run.player.yaw, pitch: run.player.pitch };
}
assert.deepEqual(rotateWithRenderCadence(1), rotateWithRenderCadence(4));
tested.push('Identical mouse counts produce identical final rotation with different simulated render cadences');
console.log(JSON.stringify({status: 'passed', cases: tested, scope: 'CPU mock DOM/API events; native input and rendered feel not tested'}, null, 2));
