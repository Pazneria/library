import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import * as THREE from 'three';
import {compilePlacements,pickPlacedBooks} from '../src/library-books/placement.js';
import {BOOK_PLACEMENTS} from '../src/library-books/placements.js';
import {createBookCollection} from '../src/library-books/collection.js';
import {createBookReader} from '../src/jippity-book/reader.js';
import {buildBookGeometry} from '../src/jippity-book/geometry.js';
import {validateContent} from '../src/jippity-book/content-validation.js';
import {loadRoom} from './load-room.mjs';
import {EXIT_PORTAL} from '../src/exit-anchor.js';
import {makeTestHarness} from './premium-book/harness.js';
import {addQueries} from './library-books-harness.mjs';

const readJSON=path=>JSON.parse(readFileSync(new URL(path,import.meta.url),'utf8'));
const drums=readJSON('../src/jippity-book/content.json');
const catalog={drums:{content:drums,summary:'Public reading',palette:{}},
  welcome:{content:readJSON('../src/library-books/welcome.json'),summary:'Welcome',palette:{cloth:'#334d40'}},
  notebook:{content:readJSON('../src/library-books/notebook.json'),summary:'Public notebook',colorSize:512,palette:{cloth:'#603d45'}}};
for(const entry of Object.values(catalog))validateContent(entry.content);
assert.ok(!JSON.stringify(catalog).includes('jippity-project-room'));
assert.throws(()=>compilePlacements(Array(5).fill(BOOK_PLACEMENTS[0]),catalog));
assert.throws(()=>compilePlacements([null],catalog));
assert.throws(()=>compilePlacements([BOOK_PLACEMENTS[0],BOOK_PLACEMENTS[0]],catalog));
assert.throws(()=>compilePlacements([{...BOOK_PLACEMENTS[0],scale:0}],catalog));
assert.throws(()=>compilePlacements([{...BOOK_PLACEMENTS[0],reach:20}],catalog));
assert.throws(()=>compilePlacements([BOOK_PLACEMENTS[0]],{drums:{...catalog.drums,palette:{cloth:'url(invalid)'}}}));
const compiled=compilePlacements(BOOK_PLACEMENTS,catalog),cases=['Public editions validate; copies have unique IDs, bounded scale/reach/count, separate placement and valid themes'];

const context=new Proxy({measureText:text=>({width:text.length*24})},{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>(o[k]=v,true)});
const collection=createBookCollection({THREE,catalog,placements:BOOK_PLACEMENTS,makeCanvas:()=>({getContext:()=>context})});
const scene=new THREE.Scene();scene.add(...collection.objects);scene.updateMatrixWorld(true);
const room=await loadRoom(EXIT_PORTAL),unit=new THREE.Box3(new THREE.Vector3(-.5,-.5,-.5),new THREE.Vector3(.5,.5,.5));
const decorative=room.books.mats.map(matrix=>unit.clone().applyMatrix4(matrix));
const penetrates=(a,b)=>['x','y','z'].every(axis=>Math.min(a.max[axis],b.max[axis])-Math.max(a.min[axis],b.min[axis])>.0008);
const boxes=collection.objects.map(object=>new THREE.Box3().setFromObject(object));
for(let i=0;i<boxes.length;i++){
  assert.ok(!room.pieces.some(piece=>penetrates(boxes[i],piece)),BOOK_PLACEMENTS[i].id+' overlaps furniture');
  assert.ok(!decorative.some(book=>penetrates(boxes[i],book)),BOOK_PLACEMENTS[i].id+' overlaps a decorative book');
  assert.ok(!boxes.some((box,j)=>j!==i&&penetrates(boxes[i],box)));
}
const notebook=boxes[2],support=room.pieces.find(p=>Math.abs(p.max.y-1.328681707)<.00001&&p.min.x<1.54&&p.max.x>1.54);
assert.ok(support);assert.ok(Math.abs(notebook.min.y-support.max.y-.002)<.00001);
const authored=buildBookGeometry();
for(const name of ['position','normal','uv'])assert.deepEqual(collection.objects[0].geometry.attributes[name].array,authored[name]);
assert.ok(collection.objects.every(object=>object.geometry===collection.objects[0].geometry));
assert.ok(collection.objects.every(object=>object.material.roughnessMap===collection.objects[0].material.roughnessMap&&object.material.bumpMap===collection.objects[0].material.bumpMap));
assert.equal(new Set(collection.objects.map(o=>o.material.map)).size,3);
assert.equal(collection.budget.drawCalls,3);assert.equal(collection.budget.triangles,1398);
assert.equal(collection.budget.textureWithFullMipRGBABytes,14330539);
assert.equal(collection.objects[2].material.map.image.width,512);
cases.push(`Three actual premium copies clear all ${room.pieces.length} integrated room pieces and ${decorative.length} decorative book bounds; notebook sits 2 mm above a real shelf; frozen geometry arrays and shared masks remain exact`);

const aim=(origin,target)=>new THREE.Vector3(...target).sub(origin).normalize();
const approaches=[new THREE.Vector3(-1.65,1.62,2.55),new THREE.Vector3(.4,1.62,3.5),new THREE.Vector3(1.54,1.62,-8.8)];
for(let i=0;i<compiled.length;i++){
  const p=compiled[i],center=[...p.position];center[1]+=.032*p.scale;
  const ray=aim(approaches[i],center);
  assert.equal(pickPlacedBooks(approaches[i],ray,compiled,room.solids)?.id,p.id);
  if(i===2){
    // Actual smaller geometry bounds on the direct standing sightline.
    const hit=b=>new THREE.Ray(approaches[i],ray).intersectBox(b,new THREE.Vector3());
    const bookHit=hit(boxes[i]).distanceTo(approaches[i]);
    assert.ok(![...room.pieces,...decorative].some(b=>{const p=hit(b);return p&&p.distanceTo(approaches[i])+0.001<bookHit;}));
  }
}
const shelfOrigin=approaches[2],shelfRay=aim(shelfOrigin,[1.54,1.350522,-9.782]);
assert.equal(pickPlacedBooks(shelfOrigin,shelfRay,compiled,[{x0:1,x1:2,y0:1,y1:2,z0:-9.2,z1:-9.1}]),null);
assert.equal(pickPlacedBooks(new THREE.Vector3(1.54,1.62,-7),aim(new THREE.Vector3(1.54,1.62,-7),[1.54,1.35,-9.782]),compiled,room.solids),null);
assert.equal(pickPlacedBooks(new THREE.Vector3(1.54,1.5,-10.2),new THREE.Vector3(0,0,1),compiled,room.solids),null);
assert.equal(pickPlacedBooks(shelfOrigin,new THREE.Vector3(NaN,0,0),compiled,room.solids),null);
assert.equal(pickPlacedBooks(shelfOrigin,shelfRay,compiled,[{...BOOK_PLACEMENTS[2].support.bounds,z1:-9.59}]),null,'Changed case cannot inherit the support exception');
const moved=compilePlacements([{id:'other-building',contentId:'drums',surface:'shelf',position:[2,2,3],pitch:Math.PI/2,yaw:.7,roll:.2,scale:.6}],catalog);
const localOrigin=new THREE.Vector3(0,1,0).applyMatrix4(moved[0].matrix),localTarget=new THREE.Vector3(0,.032,0).applyMatrix4(moved[0].matrix);
assert.equal(pickPlacedBooks(localOrigin,localTarget.clone().sub(localOrigin),moved)?.id,'other-building');
const duplicates=createBookCollection({THREE,catalog,placements:[BOOK_PLACEMENTS[0],{...BOOK_PLACEMENTS[0],id:'second-copy',position:[4,1,4]}],makeCanvas:()=>({getContext:()=>context})});
assert.equal(duplicates.objects[0].material,duplicates.objects[1].material);duplicates.dispose();
cases.push('Normalized oriented picking reaches all three copies, respects walls/reach, limits the case allowance to its front aperture, supports moved/rotated/scaled rooms and shares duplicate-edition textures');

const require=createRequire(import.meta.url),esbuild=require('esbuild');
const bundle=await esbuild.build({entryPoints:[fileURLToPath(new URL('../src/library-books/hillside.js',import.meta.url))],bundle:true,write:false,platform:'node',format:'cjs',external:['three'],loader:{'.css':'empty'},logLevel:'silent'});esbuild.stop();
const module={exports:{}};new Function('require','module','exports',bundle.outputFiles[0].text)(require,module,module.exports);
const h=addQueries(makeTestHarness({createBookReader},drums));h.reader.dispose();
const camera=new THREE.PerspectiveCamera(70,4/3,.05,2500);camera.position.copy(approaches[0]);
h.canvas.getBoundingClientRect=()=>({left:0,top:0,width:640,height:480});
const controls=h.doc.createElement('dialog'),card=h.doc.createElement('div');card.className='card';controls.append(card);
let paused=false,legacyOptions,legacyDisposed=0;
const legacy={isOpen:false,updateHint(){h.hint.hidden=true;},close(){},dispose(){legacyDisposed++;}};
const reading=module.exports.installHillsideReading({document:h.doc,window:h.win,canvas:h.canvas,hint:h.hint,camera,solids:room.solids,controls,
  look:{pause(){h.calls.pause++;},resume(){h.calls.resume++;}},releaseMovement(){h.calls.release++;},returnFocus:h.canvas,setPaused:value=>{paused=value;},
  canInteract:()=>!controls.open&&!paused,getTarget:()=>null,legacyFactory:options=>{legacyOptions=options;return legacy;}});
const active=()=>h.all.find(n=>n.open&&n.className==='jb-reader'),liveReaders=()=>h.all.filter(n=>n.isConnected&&n.className==='jb-reader');
assert.equal(liveReaders().length,0,'No detail DOM created at arrival');
camera.lookAt(-.87,.814,2.35);camera.updateMatrixWorld(true);reading.updateHint();assert.match(h.hint.textContent,/Inspect Shapes/);
h.win.emit('keydown',{code:'KeyE',repeat:true});assert.equal(reading.isOpen,false);
h.win.emit('keydown',{code:'KeyE',ctrlKey:true});assert.equal(reading.isOpen,false);
h.canvas.emit('mousedown',{clientX:320,clientY:240});h.win.emit('mousemove',{clientX:330,clientY:240});h.canvas.emit('click',{clientX:330,clientY:240});assert.equal(reading.isOpen,false);
h.win.emit('keydown',{code:'KeyE'});assert.ok(reading.isOpen&&paused&&h.doc.body.classList.contains('reading-open'));
assert.equal(legacyOptions.canInteract(),false);assert.equal(liveReaders().length,1);
const first=active();assert.equal(first.querySelector('.jb-binding').hidden,true);assert.equal(h.doc.activeElement,first.querySelector('.lb-read'));
first.emit('keydown',{key:'ArrowRight'});assert.match(first.querySelector('.jb-status').textContent,/Pages 1[–-]2/);
first.querySelector('.lb-read').emit('click');assert.equal(first.querySelector('.jb-binding').hidden,false);
first.emit('keydown',{key:'ArrowRight'});assert.match(first.querySelector('.jb-status').textContent,/Pages 3[–-]4/);
first.querySelector('.lb-details').emit('click');assert.equal(first.querySelector('.jb-binding').hidden,true);
first.querySelector('.lb-read').emit('click');assert.match(first.querySelector('.jb-status').textContent,/Pages 3[–-]4/);
first.emit('cancel');assert.ok(!reading.isOpen&&!paused);h.flushPop();h.flushClose();assert.equal(h.doc.activeElement,h.canvas);
h.win.history.forward();h.flushPop();assert.ok(reading.isOpen&&paused);reading.close();h.flushPop();h.flushClose();
controls.showModal();const catalogButtons=card.querySelector('.lb-catalog').children.slice(1);assert.equal(catalogButtons.length,3);
catalogButtons[1].emit('click');assert.ok(!controls.open&&reading.isOpen&&paused);assert.equal(active().getAttribute('aria-label'),'A Place for Good Things');
assert.equal(active().querySelector('.jb-close').textContent,'Return to table');
const welcomeMark=structuredClone(h.win.history.state);reading.close();h.flushPop();h.flushClose();
controls.showModal();catalogButtons[2].emit('click');assert.equal(active().querySelector('.jb-close').textContent,'Return to shelf');
const notebookMark=structuredClone(h.win.history.state);reading.close();h.flushPop();h.flushClose();
// Restore public states in reverse creation order to exercise pause arbitration.
h.win.history.replaceState(notebookMark);h.win.emit('popstate',{state:notebookMark});assert.ok(paused);
h.win.history.replaceState(welcomeMark);h.win.emit('popstate',{state:welcomeMark});assert.ok(paused&&reading.isOpen&&h.doc.body.classList.contains('reading-open'));
assert.equal(h.all.filter(n=>n.open&&n.className==='jb-reader').length,1);
reading.dispose();reading.dispose();h.flushClose();assert.equal(legacyDisposed,1);assert.equal(h.timers.size,0);assert.equal(h.listeners(),0);assert.equal(liveReaders().length,0);
cases.push('Lazy inspect/read/details/return supports deliberate inputs, spread retention, Escape/Back/Forward, canvas focus, accessible controls catalog and reverse-order multi-book history without unpausing an open book; all listeners/timers/DOM clean up');

const resources=new Set();for(const object of collection.objects){resources.add(object.geometry);resources.add(object.material);for(const value of Object.values(object.material))if(value?.isTexture)resources.add(value);}
const counts=new Map();for(const resource of resources){counts.set(resource,0);resource.addEventListener('dispose',()=>counts.set(resource,counts.get(resource)+1));}
collection.dispose();collection.dispose();assert.ok([...counts.values()].every(n=>n===1));assert.equal(scene.children.length,0);
for(const resource of resources)if(resource.isCanvasTexture)assert.equal(resource.image,null);
cases.push('Standalone shared collection disposal releases each actual resource once and drops backing canvases');
console.log(JSON.stringify({status:'passed',cases,budget:collection.budget,scope:'CPU construction and mock DOM/history only; no browser, server, WebGL, native input, screenshot or frame-rate measurement'},null,2));
