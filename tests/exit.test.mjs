import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import { EXIT_CONTENT } from '../src/exit-content.js';
import { EXIT_ANCHOR, EXIT_PORTAL } from '../src/exit-anchor.js';
import { addLibraryExit } from '../src/exit-scene.js';
import { installLibraryExit } from '../src/exit.js';
import { disposeLibraryResources } from '../src/exit-resources.js';
import { pickAnchor } from '../src/interaction-core.js';
import { createFrameLoop } from '../src/frame-loop.js';
import { Builder } from '../src/build.js';
import { loadRoom } from './load-room.mjs';

const cases = [];
class Events {
  constructor() { this.listeners = new Map(); }
  addEventListener(name, fn, options) {
    if (!this.listeners.has(name)) this.listeners.set(name, []);
    this.listeners.get(name).push({ fn, options });
  }
  removeEventListener(name, fn) { this.listeners.set(name, (this.listeners.get(name) || []).filter(item => item.fn !== fn)); }
  emit(name, event = {}) {
    event.preventDefault ||= () => { event.defaultPrevented = true; };
    event.stopPropagation ||= () => { event.stopped = true; };
    for (const item of [...(this.listeners.get(name) || [])]) {
      item.fn(event); if (item.options?.once) this.removeEventListener(name, item.fn);
    }
    return event;
  }
}
class Element extends Events {
  constructor(tag = 'div') { super(); this.tag = tag; this.children = []; this.attributes = new Map(); }
  append(element) { this.children.push(element); element.parent = this; }
  remove() { if (this.parent) this.parent.children = this.parent.children.filter(child => child !== this); }
  setAttribute(name, value) { this.attributes.set(name, value); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  removeAttribute(name) { this.attributes.delete(name); }
  closest(selector) { return selector.split(',').map(part => part.trim()).includes(this.tag) ? this : null; }
}
function harness({ cleanupThrows = false, useDoor = () => true } = {}) {
  const win = new Events(), doc = new Events(), canvas = new Element('canvas');
  doc.body = new Element('body'); doc.createElement = tag => new Element(tag);
  doc.pointerLockElement = null;
  const controls = new Element(), footer = new Element();
  const order = [], destinations = [];
  let available = true, target = EXIT_ANCHOR, disposalCount = 0, reloadCount = 0;
  win.location = { assign: href => { order.push('same-tab'); destinations.push(href); }, reload: () => reloadCount++ };
  let nextId = 0; const pendingFrames = new Map();
  const loop = createFrameLoop({ tick: () => {}, request: fn => { pendingFrames.set(++nextId, fn); return nextId; },
    cancel: id => pendingFrames.delete(id), now: () => 0 });
  loop.start();
  canvas.setAttribute('aria-describedby', 'existing-description');
  const api = installLibraryExit({ document: doc, window: win, canvas, controls, readerFooter: footer,
    content: EXIT_CONTENT, getTarget: () => target, canInteract: () => available, useDoor,
    beforeLeave: () => {
      order.push('stop'); loop.setPaused('exit', true); loop.dispose();
      order.push('cancel-input'); disposalCount++;
      api.dispose(); order.push('dispose');
      if (cleanupThrows) throw Error('teardown failure');
    } });
  return { win, doc, canvas, controls, footer, api, order, destinations, pendingFrames,
    hint: doc.body.children.find(node => node.id === 'exit-hint'),
    setAvailable: value => { available = value; }, setTarget: value => { target = value; },
    get disposalCount() { return disposalCount; }, get reloadCount() { return reloadCount; } };
}

assert.equal(EXIT_CONTENT.href, 'https://pazneria.github.io/');
let h = harness();
h.api.updateHint(); assert.equal(h.hint.hidden, false);
const key = h.win.emit('keydown', { code: 'KeyE', target: h.canvas });
assert.ok(key.defaultPrevented);
assert.deepEqual(h.order, ['stop', 'cancel-input', 'dispose', 'same-tab']);
assert.deepEqual(h.destinations, [EXIT_CONTENT.href]); assert.equal(h.pendingFrames.size, 0);
assert.equal(h.api.leave(), false); assert.equal(h.disposalCount, 1);
assert.equal(h.canvas.getAttribute('aria-describedby'), 'existing-description');
assert.equal(h.doc.body.children.length, 0);
assert.equal(h.controls.children.length, 0); assert.equal(h.footer.children.length, 0);
assert.ok([...h.win.listeners].filter(([type]) => type !== 'pageshow').every(([, listeners]) => !listeners.length));
cases.push('Exact home URL, same-tab assign, stop/cancel/dispose before navigation, idempotent teardown, DOM/listener cleanup');
h.win.emit('pageshow', { persisted: true }); assert.equal(h.reloadCount, 1);
h.win.emit('pageshow', { persisted: true }); assert.equal(h.reloadCount, 1);
cases.push('Browser Back restoration rebuilds a disposed page once; no pointer-lock request exists in the exit controller');
assert.ok(!readFileSync(new URL('../src/exit.js', import.meta.url), 'utf8').includes('requestPointerLock'));

h = harness(); h.setAvailable(false); h.api.updateHint(); assert.equal(h.hint.hidden, true);
h.win.emit('keydown', { code: 'KeyE', target: h.canvas }); assert.equal(h.destinations.length, 0);
h.win.emit('keydown', { code: 'Escape', target: h.canvas }); assert.equal(h.destinations.length, 0);
assert.equal(h.controls.children[0].href, EXIT_CONTENT.href);
assert.equal(h.controls.children[0].getAttribute('aria-keyshortcuts'), 'Alt+X');
const linkEvent = h.controls.children[0].emit('click');
assert.ok(linkEvent.stopped && linkEvent.defaultPrevented); assert.equal(h.destinations.length, 1);
cases.push('Controls link works after Escape/unlock with interaction suspended; stops bubbling into mouse capture');

h = harness(); h.setAvailable(false); h.footer.children[0].emit('click'); assert.equal(h.destinations.length, 1);
h = harness(); h.setAvailable(false); h.win.emit('keydown', { code: 'KeyX', altKey: true, target: new Element('button') });
assert.equal(h.destinations.length, 1);
h = harness(); h.setAvailable(false); h.win.emit('keydown', { code: 'KeyX', altKey: true, target: new Element('textarea') });
assert.equal(h.destinations.length, 0); h.setAvailable(true);
h.win.emit('keydown', { code: 'KeyE', target: h.canvas, repeat: true });
h.win.emit('keydown', { code: 'KeyE', target: new Element('input') });
assert.equal(h.destinations.length, 0); h.win.emit('keydown', { code: 'KeyE', target: h.canvas });
assert.equal(h.destinations.length, 1);
cases.push('Reading panel exit, Alt+X on focused controls, restored room E interaction, typing/repeat guards');

h = harness(); assert.equal(h.api.keyboardLink.tag, 'a');
assert.equal(h.api.keyboardLink.getAttribute('target'), null);
assert.ok(h.canvas.getAttribute('aria-describedby').includes('library-exit-instructions'));
const css = readFileSync(new URL('../src/exit.css', import.meta.url), 'utf8');
assert.match(css, /library-exit-keyboard:focus/); assert.match(css, /focus-visible/);
h.api.keyboardLink.emit('click'); assert.equal(h.destinations.length, 1);
cases.push('Native focusable same-tab anchor, focus-only visible keyboard exit, canvas description, focus outline');

h = harness(); h.canvas.emit('click', { button: 0 }); assert.equal(h.destinations.length, 0);
h.canvas.emit('mousedown', { button: 0, clientX: 20, clientY: 20 });
h.win.emit('mousemove', { clientX: 26, clientY: 20 }); h.canvas.emit('click', { button: 0 });
assert.equal(h.destinations.length, 0);
h.doc.pointerLockElement = h.canvas;
h.canvas.emit('mousedown', { button: 0, clientX: 20, clientY: 20 });
h.win.emit('mousemove', { clientX: 20, clientY: 20, movementX: 12, movementY: 0 }); h.canvas.emit('click', { button: 0 });
assert.equal(h.destinations.length, 0);
h.canvas.emit('mousedown', { button: 0, clientX: 20, clientY: 20 });
h.doc.emit('pointerlockchange'); h.canvas.emit('click', { button: 0 }); assert.equal(h.destinations.length, 0);
h.canvas.emit('mousedown', { button: 0, clientX: 20, clientY: 20 }); h.win.emit('blur');
h.canvas.emit('click', { button: 0 }); assert.equal(h.destinations.length, 0);
h.canvas.emit('mousedown', { button: 0, clientX: 20, clientY: 20 }); h.canvas.emit('click', { button: 0 });
assert.equal(h.destinations.length, 1);
cases.push('Deliberate door click only; unlocked/locked drag, capture transition, blur and stray click do not leave');

let opened = false;
h = harness({useDoor:()=>opened}); h.win.emit('keydown',{code:'KeyE',target:h.canvas});
assert.equal(h.destinations.length,0);
h.canvas.emit('mousedown',{button:0,clientX:20,clientY:20});h.canvas.emit('click',{button:0});assert.equal(h.destinations.length,0);
opened=true;h.win.emit('keydown',{code:'KeyE',target:h.canvas});assert.equal(h.destinations.length,1);h.api.leave();assert.equal(h.destinations.length,1);
h=harness({useDoor:()=>false});h.controls.children[0].emit('click');assert.equal(h.destinations.length,1);
cases.push('Room E/click opens without queuing navigation; a later deliberate use can leave once open; manual controls link remains immediate and idempotent');

h = harness({ cleanupThrows: true }); assert.throws(() => h.api.leave()); assert.equal(h.destinations.length, 1);
cases.push('Navigation remains available if host teardown reports an error');

const counts = new Map();
const disposable = (name, fields = {}) => ({ ...fields, dispose() { counts.set(name, (counts.get(name) || 0) + 1); } });
const shared = disposable('shared', { isTexture: true }), uniform = disposable('uniform', { isTexture: true });
const env = disposable('env-texture', { isTexture: true }), shadow = disposable('shadow-texture', { isTexture: true });
const geometry = disposable('geometry');
const material = disposable('material', { map: shared, bumpMap: shared, uniforms: { map: { value: uniform }, maps: { value: [shared] } } });
const extra = disposable('extra-material', { map: shared });
const envTarget = disposable('environment-target', { texture: env });
const shadowTarget = disposable('shadow-target', { texture: shadow });
const instance = disposable('instance', { isInstancedMesh: true, geometry, material });
const objects = [instance, { geometry, material: [material], shadow: { map: shadowTarget, mapPass: shadowTarget } }];
const scene = { environment: env, background: shared, overrideMaterial: extra,
  traverse: callback => objects.forEach(callback), clear: () => counts.set('clear', 1) };
const renderer = { renderLists: disposable('render-lists'), dispose() { counts.set('renderer', 1); this.renderLists.dispose(); } };
disposeLibraryResources({ scene, renderer, environmentTarget: envTarget, materials: [material, extra], extraMaterials: [extra] });
for (const name of ['shared', 'uniform', 'geometry', 'material', 'extra-material', 'environment-target', 'shadow-target', 'instance', 'renderer', 'render-lists', 'clear']) assert.equal(counts.get(name), 1, name);
assert.equal(counts.has('env-texture'), false); assert.equal(counts.has('shadow-texture'), false);
assert.equal(scene.environment, null); assert.equal(scene.overrideMaterial, null);
cases.push('Scene/extra materials, shared textures, shader uniforms, instance allocations, PMREM/shadow targets and renderer released once');

const mainSource = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const hostSource = mainSource.match(/function disposeLibrary\(\) \{[\s\S]*?\n\}/)[0];
const hostCalls = [];
const host = { libraryDisposed: false, releaseMovement: () => hostCalls.push('movement'),
  seat: {dispose: () => hostCalls.push('seat-dispose')},findFolio(){},
  findSeat: {removeEventListener: () => hostCalls.push('seat-route-listener-remove'),remove: () => hostCalls.push('seat-route-remove')},
  folio: {releaseReferences: () => hostCalls.push('seat-reference-release')},
  look: { pause: () => hostCalls.push('look-pause'), dispose: () => hostCalls.push('look-dispose') },
  loop: { setPaused: (reason, state) => hostCalls.push(`pause-${reason}-${state}`), dispose: () => hostCalls.push('loop-dispose') },
  exit: { dispose: () => hostCalls.push('exit-dispose') }, study: { dispose: () => hostCalls.push('study-dispose') }, reading: { dispose: () => hostCalls.push('reader-dispose') },
  lifecycle: [() => hostCalls.push('listener-remove')], scene: {}, renderer: {}, environmentTarget: {},
  M: {}, depthMat: {}, exitGeometry: { materials: [] }, window: { __shafts: {}, __lib: {} },
  disposeLibraryResources: () => hostCalls.push('resources-dispose') };
vm.createContext(host); vm.runInContext(hostSource + ';globalThis.disposeHost=disposeLibrary;', host);
host.disposeHost(); host.disposeHost();
assert.deepEqual(hostCalls, ['movement', 'look-pause', 'pause-exit-true', 'seat-dispose', 'seat-route-listener-remove', 'seat-route-remove', 'exit-dispose', 'study-dispose', 'reader-dispose', 'look-dispose', 'loop-dispose', 'listener-remove', 'resources-dispose', 'seat-reference-release']);
assert.equal(host.window.__shafts, undefined); assert.equal(host.window.__lib, undefined);
assert.match(mainSource, /beforeLeave: disposeLibrary/);
cases.push('Actual main.js exit hook tears down movement/look/reader/frame loop/listeners/resources once and removes debug roots');

const room = await loadRoom(EXIT_PORTAL);
const solidsBefore = JSON.stringify(room.solids);
const exitScene = new THREE.Scene(), exitParts = [];
const originalAdd = Builder.prototype.add, originalFinish = Builder.prototype.finish;
Builder.prototype.add = function(material, geometry) { geometry.computeBoundingBox(); exitParts.push({builder:this,box:geometry.boundingBox.clone()}); originalAdd.call(this, material, geometry); };
Builder.prototype.finish = function(target) { for(const part of exitParts)if(part.builder===this)part.target=target; originalFinish.call(this,target); };
const materials = Object.fromEntries(['oak', 'dark', 'brass', 'stone'].map(name => [name, new THREE.MeshStandardMaterial()]));
const canvasCalls = [];
const exitGeometry = addLibraryExit(exitScene, materials, EXIT_ANCHOR, EXIT_CONTENT, () => ({
  getContext: () => ({ fillRect() {}, strokeRect() {}, fillText: text => canvasCalls.push(text) })
}));
Builder.prototype.add = originalAdd;Builder.prototype.finish = originalFinish;exitGeometry.group.updateWorldMatrix(true,true);
assert.equal(JSON.stringify(room.solids), solidsBefore);
assert.deepEqual(canvasCalls, ['EXIT', 'HOME']);
for (const part of exitParts) for (const base of room.pieces) {
  const box=part.box.clone().applyMatrix4(part.target.matrixWorld);
  const size = box.clone().intersect(base).getSize(new THREE.Vector3());
  assert.ok(size.x < 0.00001 || size.y < 0.00001 || size.z < 0.00001, `Exit intersects existing room: ${box.min.toArray()} / ${base.min.toArray()}`);
}
const exitBounds = new THREE.Box3().setFromObject(exitGeometry.group);
assert.ok(exitBounds.min.x - (7 - 0.28) > 0.05, 'closed joinery clears the near plane at closest legal camera');
assert.ok(exitBounds.min.z > 6.7 && exitBounds.max.z < 8.6, 'clear of stair foot and south case');
function blocked(x, z) {
  return room.solids.some(solid => x + .28 > solid.x0 && x - .28 < solid.x1 && z + .28 > solid.z0 && z - .28 < solid.z1 && solid.y0 < 1.75 && solid.y1 > .42);
}
for (let z = 4.3; z <= 7.75; z += .05) assert.equal(blocked(3.4, z), false, `entrance approach z=${z}`);
for (let x = 3.4; x <= 6.4; x += .05) assert.equal(blocked(x, 7.75), false, `door approach x=${x}`);
const eye = new THREE.Vector3(5.6, 1.62, 7.75), toward = new THREE.Vector3(1, 0, 0);
assert.equal(pickAnchor(eye, toward, [EXIT_ANCHOR], room.solids, EXIT_ANCHOR.reach), EXIT_ANCHOR);
assert.equal(pickAnchor(new THREE.Vector3(5.6, 5.82, 7.75), toward, [EXIT_ANCHOR], room.solids, EXIT_ANCHOR.reach), null);
assert.equal(pickAnchor(new THREE.Vector3(3.4, 1.62, 7.75), toward, [EXIT_ANCHOR], room.solids, EXIT_ANCHOR.reach), null);
cases.push('Actual carved room CPU construction: exit adds no mutation to shell solids, closed joinery avoids existing geometry, 280 mm approach, near-plane clearance and bounded downstairs reach');
const budget={drawCalls:0,triangles:0,atlas:[512,256],newLights:0,shadowCasters:0};
exitGeometry.group.traverse(object=>{if(object.isMesh){budget.drawCalls++;budget.triangles+=object.geometry.index.count/3;}});
disposeLibraryResources({ scene: exitScene, renderer: { dispose() {} }, materials: Object.values(materials) });
console.log(JSON.stringify({ status: 'passed', cases, geometryBudget: budget, scope: 'CPU geometry and mock DOM/navigation; visual/native browser input and GPU not tested' }, null, 2));
