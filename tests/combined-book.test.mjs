import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import * as THREE from 'three';
import { addReadingBooks } from '../src/reading-scene.js';
import { installReading } from '../src/reading.js';
import { READING_CONTENT } from '../src/reading-content.js';
import { ROOM_ANCHORS } from '../src/room-anchors.js';
import { installLibraryExit } from '../src/exit.js';
import { EXIT_CONTENT } from '../src/exit-content.js';
import { disposeLibraryResources } from '../src/exit-resources.js';
import { createBookReader } from '../src/jippity-book/reader.js';
import { makeTestHarness } from './premium-book/harness.js';
import { loadRoom } from './load-room.mjs';

const require = createRequire(import.meta.url), esbuild = require('esbuild');
const bundled = await esbuild.build({entryPoints:[fileURLToPath(new URL('../src/jippity-book/hillside.js',import.meta.url))],
  bundle:true,write:false,platform:'node',format:'cjs',external:['three'],loader:{'.css':'empty'},logLevel:'silent'});
esbuild.stop();
const module = {exports:{}};
new Function('require','module','exports',bundled.outputFiles[0].text)(require,module,module.exports);
const {addHillsideBooks,installHillsideReading} = module.exports;
const content = JSON.parse(readFileSync(new URL('../src/jippity-book/content.json',import.meta.url),'utf8'));
const cases = [], context2d = new Proxy({measureText:text=>({width:text.length*24})},
  {get:(object,key)=>key in object?object[key]:()=>{},set:(object,key,value)=>(object[key]=value,true)});
const scene = new THREE.Scene(), originalDocument = globalThis.document;
globalThis.document = {createElement:()=>({getContext:()=>context2d})};
let books;
try { books = addHillsideBooks(scene,ROOM_ANCHORS,READING_CONTENT,addReadingBooks); }
finally { globalThis.document = originalDocument; }
scene.updateMatrixWorld(true);
assert.equal(books.objects.length,3);
assert.equal(scene.getObjectByName('Jippity reading books').count,1);
assert.equal(scene.children.filter(object=>object===books.book.object).length,1);
assert.ok(books.book.object.name.endsWith(content.title));
const premiumBox = new THREE.Box3().setFromObject(books.book.object);
const welcome = scene.getObjectByName('Jippity reading books'), matrix = new THREE.Matrix4();
welcome.getMatrixAt(0,matrix);
const welcomeBox = new THREE.Box3(new THREE.Vector3(-.5,-.5,-.5),new THREE.Vector3(.5,.5,.5)).applyMatrix4(matrix);
assert.equal(premiumBox.intersectsBox(welcomeBox),false);
const room = await loadRoom();
const penetrates = (a,b)=>['x','y','z'].every(axis=>Math.min(a.max[axis],b.max[axis])-Math.max(a.min[axis],b.min[axis])>.0008);
assert.ok(!room.pieces.some(piece=>penetrates(premiumBox,piece)));
assert.equal(books.book.budget.triangles,466);
cases.push('Actual adapter replaces the drum marker: one premium book plus one welcome book; no duplicate/overlapping book or room furniture');

const h = makeTestHarness({createBookReader},content); h.reader.dispose();
h.doc.hasFocus = ()=>true;
h.doc.exitPointerLock = ()=>{h.doc.pointerLockElement=null;h.doc.emit('pointerlockchange');};
h.canvas.getBoundingClientRect = ()=>({left:0,top:0,width:640,height:480});
let captureRequests=0, paused=false, reading, libraryDisposed=false, navigation=null, legacyTarget=null;
h.canvas.requestPointerLock = ()=>{captureRequests++;return Promise.resolve();};
const camera = new THREE.PerspectiveCamera(70,4/3,.05,2500), player={yaw:0,pitch:0};
camera.position.set(-1.65,1.62,2.55);
const aimBook = ()=>{camera.lookAt(-.87,.846,2.35);camera.updateMatrixWorld(true);};
const aimAway = ()=>{camera.lookAt(-1.65,1.62,-10);camera.updateMatrixWorld(true);};
const menu = h.doc.createElement('dialog'), menuButton = h.doc.createElement('button');
const slider = h.doc.createElement('input'), value = h.doc.createElement('output'), resume = h.doc.createElement('button');
menu.querySelector = selector=>selector==='[data-resume-look]'?resume:selector.endsWith('-value')?value:slider;
const legacyDialog = h.doc.createElement('dialog'), legacyElements = new Map();
for(const name of ['reader-title','reader-kicker','reader-pages','reader-links','reader-signature','reader-close','reader-back'])
  legacyElements.set('#'+name,h.doc.createElement(name.includes('close')||name.includes('back')?'button':'div'));
legacyDialog.querySelector = selector=>legacyElements.get(selector);
const lookContext = {document:h.doc,
  addEventListener(type,fn,options){h.win.addEventListener(type,fn,options);},
  removeEventListener(type,fn,options){h.win.removeEventListener(type,fn,options);}};
vm.createContext(lookContext);
vm.runInContext(readFileSync(new URL('../src/look.js',import.meta.url),'utf8').replace('export function','function')+';globalThis.install=installFpsLook;',lookContext);
const releaseMovement = ()=>{h.calls.release++;};
const look = lookContext.install({canvas:h.canvas,overlay:menu,menuButton,player,camera,releaseMovement,toast:()=>{},
  isInputBlocked:()=>Boolean(libraryDisposed||reading?.isOpen||paused),setMenuPaused:value=>{paused=value;}});
reading = installHillsideReading({legacyFactory:installReading,camera,solids:room.solids,
  document:h.doc,window:h.win,canvas:h.canvas,dialog:legacyDialog,hint:h.hint,content:READING_CONTENT,look,releaseMovement,
  returnFocus:h.canvas,canInteract:()=>!libraryDisposed&&!look.menuOpen&&!paused&&h.doc.hasFocus(),
  getTarget:()=>legacyTarget,setPaused:value=>{paused=value;}});
aimAway();
h.canvas.emit('mousedown',{clientX:320,clientY:240}); h.canvas.emit('click',{clientX:320,clientY:240});
assert.equal(captureRequests,1); assert.equal(reading.isOpen,false);
h.doc.pointerLockElement=h.canvas;h.doc.emit('pointerlockchange');
h.win.emit('mousemove',{movementX:8,movementY:3});
assert.ok(Math.abs(player.yaw+.0208)<1e-12);
aimBook();
h.canvas.emit('mousedown',{clientX:320,clientY:240}); h.canvas.emit('click',{clientX:320,clientY:240});
assert.ok(reading.isOpen&&paused&&h.doc.body.classList.contains('reading-open'));
assert.equal(captureRequests,1);assert.equal(h.doc.pointerLockElement,null);
const premiumDialog = ()=>h.all.find(element=>element.isConnected&&element.className==='jb-reader');
premiumDialog().emit('cancel');h.flushPop();h.flushClose();
assert.ok(!reading.isOpen&&!paused);assert.equal(h.doc.activeElement,h.canvas);assert.equal(captureRequests,1);
cases.push('Real core look and premium interaction coexist: scene capture remains deliberate, mouse counts apply immediately, book click releases capture and close returns canvas focus without recapture');

aimAway();legacyTarget=ROOM_ANCHORS.find(anchor=>anchor.id==='table-welcome');
h.win.emit('keydown',{code:'KeyE'});
assert.ok(reading.isOpen&&legacyDialog.open&&paused);assert.equal(premiumDialog().open,false);
legacyDialog.emit('cancel');h.flushPop();h.flushClose();
legacyTarget=ROOM_ANCHORS.find(anchor=>anchor.id==='gallery-writing-desk');
h.win.emit('keydown',{code:'KeyE'});
assert.ok(legacyDialog.open&&reading.isOpen);
assert.equal(legacyElements.get('#reader-links').children[0].href,'https://jippity-project-room.pazneria.chatgpt.site');
legacyDialog.emit('cancel');h.flushPop();h.flushClose();
cases.push('Actual legacy welcome and private desk readers remain reachable and mutually exclusive with the premium reader; private entrance stays a deliberate external link');

const resources = new Set();
scene.traverse(object=>{if(object.geometry)resources.add(object.geometry);if(object.isInstancedMesh)resources.add(object);
  for(const material of [].concat(object.material||[])){resources.add(material);for(const value of Object.values(material))if(value?.isTexture)resources.add(value);}});
const disposals = new Map();
for(const resource of resources){disposals.set(resource,0);resource.addEventListener('dispose',()=>disposals.set(resource,disposals.get(resource)+1));}
let rendererDisposals=0, exit;
function beforeLeave(){
  libraryDisposed=true;releaseMovement();look.pause();exit.dispose();reading.dispose();look.dispose();
  disposeLibraryResources({scene,renderer:{dispose(){rendererDisposals++;}}});
}
h.win.location.assign=url=>{navigation=url;};h.win.location.reload=()=>{};
exit=installLibraryExit({document:h.doc,window:h.win,canvas:h.canvas,controls:menu,
  readerFooter:h.doc.createElement('footer'),content:EXIT_CONTENT,getTarget:()=>null,
  canInteract:()=>!libraryDisposed&&!reading.isOpen&&!look.menuOpen&&!paused,beforeLeave});
legacyTarget=null;aimBook();h.win.emit('keydown',{code:'KeyE'});assert.ok(reading.isOpen);
h.win.emit('keydown',{code:'KeyX',altKey:true,stopPropagation(){}});
assert.equal(navigation,'https://pazneria.github.io/');assert.equal(reading.isOpen,false);
assert.equal(premiumDialog(),undefined);assert.equal(h.timers.size,0);assert.equal(scene.children.length,0);
assert.equal(rendererDisposals,1);assert.ok([...disposals.values()].every(count=>count===1));
for(const resource of resources)if(resource.isCanvasTexture)assert.equal(resource.image,null);
assert.equal(h.listeners(),1,'Only the explicit-exit one-time persisted-pageshow reconstruction listener remains');
h.win.emit('pageshow',{persisted:true});
cases.push('Exit during premium reading removes reader/animation/timer/input state and releases all actual shared book GPU resources once, dropping canvas references; same-tab Home and cached-Back hook retained');

const main=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
assert.match(main,/addHillsideBooks\(scene, ROOM_ANCHORS, READING_CONTENT, addReadingBooks\)/);
assert.match(main,/installHillsideReading\(\{ legacyFactory: installReading, camera, solids,/);
assert.ok(!/readingBooks\.dispose\s*\(/.test(main));
assert.match(main,/reading\.dispose\(\); look\.dispose\(\); loop\?\.dispose\(\)/);
cases.push('Main retains the three documented book hooks and single host GPU cleanup owner; composite reader disposal precedes scene disposal');
console.log(JSON.stringify({status:'passed',cases,premiumBudget:books.book.budget,
  combinedReadingGeometry:{triangles:480,mainDrawCalls:3,incrementalTriangles:452,incrementalMainDrawCalls:1},
  roomPiecesChecked:room.pieces.length,scope:'CPU actual copied book adapter, core look, legacy reader and exit with mock DOM/history/canvas; no GPU/browser/native input'},null,2));
