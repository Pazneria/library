import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import * as THREE from 'three';
import { READING_CONTENT } from '../src/reading-content.js';
import { ROOM_ANCHORS } from '../src/room-anchors.js';
import { rayBoxDistance, pickAnchor, isEditingTarget } from '../src/interaction-core.js';
import { addReadingBooks } from '../src/reading-scene.js';
import { createFrameLoop } from '../src/frame-loop.js';
import { installReading } from '../src/reading.js';
import { loadRoom } from './load-room.mjs';

const cases = [];
const direction = (from, to) => new THREE.Vector3().fromArray(to).sub(from).normalize();
const wall = { x0: -1, x1: 1, y0: 0, y1: 2, z0: -1.2, z1: -1 };
const target = { contentId: 'welcome', bounds: { x0: -.2, x1: .2, y0: .7, y1: 1, z0: -2, z1: -1.8 } };
const origin = { x: 0, y: .8, z: 0 }, north = { x: 0, y: 0, z: -1 };
assert.equal(rayBoxDistance(origin, north, target.bounds), 1.8);
assert.equal(pickAnchor(origin, north, [target], []), target);
assert.equal(pickAnchor(origin, north, [target], [wall]), null);
assert.equal(pickAnchor(origin, north, [target], [], 1.7), null);
assert.equal(rayBoxDistance(origin, { x: 0, y: 0, z: 0 }, target.bounds), null);
assert.equal(rayBoxDistance(origin, { x: NaN, y: 0, z: -1 }, target.bounds), null);
assert.equal(rayBoxDistance({ x: 5, y: .8, z: 0 }, north, target.bounds), null);
assert.equal(pickAnchor(origin, { x: 0, y: 0, z: 1 }, [target], []), null);
assert.equal(pickAnchor(origin, north, [target, { ...target, bounds: { ...target.bounds, z0: -1.6, z1: -1.4 } }], []).bounds.z1, -1.4);
cases.push('Picking requires a forward ray within reach; nearest item selected; opaque wall boxes occlude; invalid rays rejected');

for (const anchor of ROOM_ANCHORS) assert.ok(Object.hasOwn(READING_CONTENT, anchor.contentId));
for (const [id, book] of Object.entries(READING_CONTENT)) {
  assert.ok(Object.keys(book).every(key => ['label', 'cover', 'color', 'kicker', 'links', 'paragraphs', 'signature', 'title'].includes(key)));
  assert.ok(!Object.hasOwn(book, 'position'), id);
  for (const link of book.links) assert.ok(link.href.startsWith('https://'));
}
assert.equal(READING_CONTENT.desk.links.length, 1);
assert.equal(READING_CONTENT.desk.links[0].href, 'https://jippity-project-room.pazneria.chatgpt.site');
assert.deepEqual(READING_CONTENT.desk.paragraphs, [
  'Personal notes and decisions belong in the signed-in Project Library. Open that workspace when you’re ready to write or pick up a project.',
  'This desk is just the entrance. The link opens your private workspace in a new tab; sign in there if asked.'
]);
assert.deepEqual(READING_CONTENT.drums.links.map(link => link.href), ['https://arxiv.org/pdf/math/9207215', 'https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf']);
for (const file of readdirSync(new URL('../src/', import.meta.url)).filter(file => /\.(js|css)$/.test(file))) {
  const source = readFileSync(new URL('../src/' + file, import.meta.url), 'utf8');
  assert.ok(!/\b(?:fetch|XMLHttpRequest|WebSocket|EventSource)\s*\(|\b(?:localStorage|sessionStorage|indexedDB|serviceWorker|caches)\b|document\.cookie/.test(source), file);
  assert.ok(!/\b(?:password|access_token|refresh_token|api_key)\b/i.test(source), file);
  if (source.includes('jippity-project-room')) assert.equal(file, 'reading-content.js');
}
cases.push('Public data has only explicit reading fields; desk is one neutral destination; no private response fields, request APIs, persistence, tokens or client passwords');

const context = { fillRect() {}, strokeRect() {}, fillText() {} };
const scene = new THREE.Scene();
const markers = addReadingBooks(scene, ROOM_ANCHORS, READING_CONTENT, () => ({ width: 0, height: 0, getContext: () => context }));
assert.deepEqual(markers.budget, { books: 2, drawCalls: 2, triangles: 28, texturePixels: 512 * 384 });
assert.equal(scene.children.length, 2);
assert.equal(markers.objects[0].count, 2);
assert.ok(markers.objects.every(object => !object.castShadow));
assert.equal(markers.objects[1].geometry.attributes.position.count / 3 + markers.objects[0].geometry.index.count / 3 * 2, 28);
let disposedResources = 0;
for (const resource of [markers.objects[0], markers.objects[0].geometry, markers.objects[0].material, markers.objects[1].geometry, markers.objects[1].material, markers.objects[1].material.map]) resource.addEventListener('dispose', () => disposedResources++);
markers.dispose(); assert.equal(scene.children.length, 0); assert.equal(disposedResources, 6);
cases.push('Exactly two static books use two draw calls and 28 triangles; existing desk has no new mesh; all added resources dispose');

const room = await loadRoom();
const approaches = [new THREE.Vector3(-.35, 1.62, 4.4), new THREE.Vector3(-1.65, 1.62, 2.55), new THREE.Vector3(-4.55, 5.82, -8.65)];
for (let i = 0; i < ROOM_ANCHORS.length; i++) {
  const anchor = ROOM_ANCHORS[i];
  assert.equal(pickAnchor(approaches[i], direction(approaches[i], anchor.position), ROOM_ANCHORS, room.solids)?.id, anchor.id, 'Actual room blocks approach: ' + anchor.id);
}
const unitBox = new THREE.Box3(new THREE.Vector3(-.5, -.5, -.5), new THREE.Vector3(.5, .5, .5));
const decorativeBooks = room.books.mats.map(matrix => unitBox.clone().applyMatrix4(matrix));
const hasVolumeOverlap = (a, b) => ['x', 'y', 'z'].every(axis => Math.min(a.max[axis], b.max[axis]) - Math.max(a.min[axis], b.min[axis]) > .001);
for (const anchor of ROOM_ANCHORS.filter(anchor => anchor.kind === 'book')) {
  const transform = new THREE.Matrix4().compose(new THREE.Vector3().fromArray(anchor.position), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), anchor.yaw), new THREE.Vector3(.26, .038, .34));
  const box = unitBox.clone().applyMatrix4(transform);
  assert.ok(!room.pieces.some(piece => hasVolumeOverlap(box, piece)), 'New book overlaps existing furniture: ' + anchor.id);
  assert.ok(!decorativeBooks.some(book => hasVolumeOverlap(box, book)), 'New book overlaps decorative book: ' + anchor.id);
}
assert.equal(pickAnchor(new THREE.Vector3(-5.55, 1.62, -8.75), new THREE.Vector3(0, 1, 0), ROOM_ANCHORS, room.solids), null);
cases.push('Actual CPU room geometry admits all three nearby approaches; new books clear furniture/decorative books; desk cannot be reached from the lower floor');

const queued = new Map(), ticks = [];
let nextId = 0, clock = 0;
const loop = createFrameLoop({ tick: (time, seconds) => ticks.push(seconds), request: fn => { const id = ++nextId; queued.set(id, fn); return id; }, cancel: id => queued.delete(id), now: () => clock });
function step(time) { clock = time; const entry = queued.entries().next().value; assert.ok(entry); queued.delete(entry[0]); entry[1](time); }
loop.start(); loop.start(); assert.equal(queued.size, 1);
step(16); assert.equal(ticks[0], .016);
loop.setPaused('reader', true); assert.equal(queued.size, 0);
loop.setPaused('focus', true); loop.setPaused('reader', false); assert.equal(queued.size, 0);
loop.setPaused('focus', false); assert.equal(queued.size, 1);
step(10000); assert.equal(ticks[1], 0); step(10016); assert.equal(ticks[2], .016);
loop.dispose(); loop.start(); loop.setPaused('reader', false); assert.equal(queued.size, 0);
cases.push('Frame loop cancels while reading/blurred, keeps independent pause reasons, avoids resume time jumps, and cannot restart after disposal');

class Events {
  constructor() { this.listeners = new Map(); }
  addEventListener(type, handler) { const list = this.listeners.get(type) || []; list.push(handler); this.listeners.set(type, list); }
  removeEventListener(type, handler) { this.listeners.set(type, (this.listeners.get(type) || []).filter(item => item !== handler)); }
  emit(type, fields = {}) {
    const event = { type, target: this, prevented: false, preventDefault() { this.prevented = true; }, ...fields };
    for (const handler of [...(this.listeners.get(type) || [])]) handler(event);
    return event;
  }
}
class Element extends Events {
  constructor(tag = 'div') { super(); this.tag = tag; this.textContent = ''; this.children = []; this.hidden = false; this.focusCount = 0; }
  replaceChildren() { this.children = []; }
  append(child) { this.children.push(child); }
  focus() { this.focusCount++; }
  closest() { return ['input', 'textarea', 'select', 'button', 'a'].includes(this.tag) || this.editable ? this : null; }
}
function harness() {
  const win = new Events(), doc = new Events(), canvas = new Element('canvas'), hint = new Element('button');
  const dialog = new Element('dialog'), button = new Element('button');
  const elements = Object.fromEntries(['reader-title', 'reader-kicker', 'reader-pages', 'reader-links', 'reader-signature', 'reader-close', 'reader-back'].map(id => [id, new Element(id.includes('close') || id.includes('back') ? 'button' : 'div')]));
  dialog.querySelector = selector => elements[selector.slice(1)]; dialog.open = false;
  dialog.showModal = () => { dialog.open = true; }; dialog.close = () => { dialog.open = false; dialog.emit('close'); };
  const classes = new Set(); doc.body = { classList: { add: value => classes.add(value), remove: value => classes.delete(value) } };
  doc.createElement = tag => new Element(tag);
  const states = [{ unrelated: 'preserved' }], pops = []; let index = 0;
  win.location = { href: 'https://pazneria.github.io/library/' };
  win.history = {
    get state() { return states[index]; },
    pushState(state) { states.splice(index + 1); states.push(state); index++; },
    replaceState(state) { states[index] = state; },
    back() { pops.push(() => { index--; win.emit('popstate', { state: states[index] }); }); },
    forward() { pops.push(() => { index++; win.emit('popstate', { state: states[index] }); }); }
  };
  const state = { target: ROOM_ANCHORS[0], allowed: true, pauses: [], captures: 0, resumes: 0, releases: 0 };
  const controller = installReading({ document: doc, window: win, canvas, dialog, hint, content: READING_CONTENT,
    getTarget: () => state.target, canInteract: () => state.allowed,
    look: { pause: () => state.captures++, resume: () => state.resumes++ },
    setPaused: value => state.pauses.push(value), releaseMovement: () => state.releases++, returnFocus: button });
  return { controller, win, doc, canvas, dialog, hint, elements, state, classes, button, flushPop: () => { assert.ok(pops.length); pops.shift()(); }, states };
}

let networkCalls = 0;
const previousFetch = globalThis.fetch;
globalThis.fetch = () => { networkCalls++; throw new Error('Public reader must never request private content'); };
try {
  const h = harness();
  h.controller.updateHint(); assert.equal(h.hint.hidden, false); assert.equal(h.hint.textContent, 'E — Welcome book');
  h.win.emit('keydown', { code: 'KeyE', target: new Element('textarea') }); assert.equal(h.controller.isOpen, false);
  h.win.emit('keydown', { code: 'KeyE', target: new Element('div'), repeat: true }); assert.equal(h.controller.isOpen, false);
  const event = h.win.emit('keydown', { code: 'KeyE', target: new Element('div') });
  assert.ok(event.prevented && h.controller.isOpen && h.dialog.open && h.classes.has('reading-open'));
  assert.deepEqual(h.state.pauses, [true]); assert.equal(h.state.captures, 1); assert.equal(h.elements['reader-title'].focusCount, 1);
  assert.equal(h.elements['reader-title'].textContent, READING_CONTENT.welcome.title);
  assert.deepEqual(h.elements['reader-pages'].children.map(p => p.textContent), READING_CONTENT.welcome.paragraphs);
  assert.equal(h.win.history.state.unrelated, 'preserved');
  assert.deepEqual(Object.keys(h.win.history.state).sort(), ['jippityLibraryReader', 'unrelated']);
  const cancel = h.dialog.emit('cancel'); assert.ok(cancel.prevented);
  assert.equal(h.controller.isOpen, false); assert.equal(h.dialog.open, false); assert.equal(h.button.focusCount, 1);
  assert.deepEqual(h.state.pauses, [true, false]); assert.equal(h.controller.openNearby(), false);
  h.flushPop(); assert.deepEqual(h.win.history.state, { unrelated: 'preserved' });
  h.win.history.forward(); h.flushPop(); assert.ok(h.controller.isOpen);
  h.win.history.back(); h.flushPop(); assert.equal(h.controller.isOpen, false);
  cases.push('E opens nearby content; repeats/editors ignored; modal pauses/releases look and movement; Escape closes, restores focus, and consumes only its own history entry; Back/Forward work');

  h.state.target = ROOM_ANCHORS[1]; h.canvas.emit('click');
  assert.deepEqual(h.elements['reader-links'].children.map(a => a.href), READING_CONTENT.drums.links.map(link => link.href));
  assert.ok(h.elements['reader-links'].children.every(a => a.target === '_blank' && a.rel === 'noopener noreferrer'));
  h.elements['reader-close'].emit('click'); h.flushPop();
  h.state.target = ROOM_ANCHORS[2]; h.controller.openNearby();
  assert.equal(h.elements['reader-links'].children.length, 1);
  const destination = h.elements['reader-links'].children[0];
  assert.equal(destination.href, 'https://jippity-project-room.pazneria.chatgpt.site');
  assert.equal(destination.referrerPolicy, 'no-referrer'); assert.equal(networkCalls, 0);
  assert.ok(h.elements['reader-pages'].children.every(p => !p.children.length));
  h.elements['reader-back'].emit('click'); h.flushPop();
  h.state.allowed = false; h.controller.updateHint(); assert.ok(h.hint.hidden); assert.equal(h.controller.openNearby(), false);
  h.state.allowed = true; h.state.target = null; assert.equal(h.controller.openNearby(), false);
  cases.push('Public sources and private desk create safe destination links only; no network fetch before or while reading; no private response is embedded; disabled/unreachable items cannot open');

  h.state.target = ROOM_ANCHORS[0]; h.controller.openNearby(); h.controller.dispose();
  assert.equal(h.controller.isOpen, false); assert.equal(h.dialog.open, false); assert.ok(h.hint.hidden);
  assert.ok(!Object.hasOwn(h.win.history.state, 'jippityLibraryReader'));
  assert.equal(h.controller.openNearby(), false);
  h.win.emit('keydown', { code: 'KeyE', target: new Element('div') }); assert.equal(h.controller.isOpen, false);
  assert.ok([...h.win.listeners.values(), ...h.canvas.listeners.values(), ...h.hint.listeners.values(), ...h.dialog.listeners.values(), ...h.elements['reader-close'].listeners.values(), ...h.elements['reader-back'].listeners.values()].every(list => list.length === 0));
  assert.equal(isEditingTarget(new Element('textarea')), true);
  const editable = new Element(); editable.editable = true; assert.equal(isEditingTarget(editable), true);
  cases.push('Reader disposal closes the modal, removes history marker/listeners, and cannot reopen; textarea/contenteditable are protected');
} finally { globalThis.fetch = previousFetch; }

const shifted = [{ ...ROOM_ANCHORS[0], position: [0, 1, -1], bounds: { x0: -.2, x1: .2, y0: .7, y1: 1, z0: -1.1, z1: -.9 } }];
assert.equal(pickAnchor(origin, north, shifted, []).contentId, 'welcome');
assert.equal(READING_CONTENT[shifted[0].contentId].title, READING_CONTENT.welcome.title);
cases.push('A replacement room can move anchors while stable content IDs and public reading data stay unchanged');
console.log(JSON.stringify({ status: 'passed', cases, networkCalls, scope: 'CPU only; mock DOM, history, pointer APIs and canvas; no GPU/browser/native input' }, null, 2));
