import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {makeTestHarness} from './harness.js';
import {createBookReader} from '../../src/jippity-book/reader.js';
const require=createRequire(resolve(process.argv[2],'package.json'));
const THREE=require('three'),esbuild=require('esbuild');
const content=JSON.parse(readFileSync(new URL('../../src/jippity-book/content.json',import.meta.url),'utf8'));
const output=await esbuild.build({entryPoints:[fileURLToPath(new URL('../../src/jippity-book/hillside.js',import.meta.url))],
  bundle:true,write:false,platform:'node',format:'cjs',external:['three'],loader:{'.css':'empty'},logLevel:'silent'});
esbuild.stop();
const module={exports:{}};
new Function('require','module','exports',output.outputFiles[0].text)(require,module,module.exports);
const {installHillsideReading,addHillsideBooks}=module.exports;
const h=makeTestHarness({createBookReader},content);h.reader.dispose();
const camera=new THREE.PerspectiveCamera(70,4/3,.05,2500);
camera.position.set(-1.65,1.62,2.55);camera.lookAt(-.87,.846,2.35);camera.updateMatrixWorld(true);
h.canvas.getBoundingClientRect=()=>({left:0,top:0,width:640,height:480});
let legacyOptions,legacyDisposed=0,legacyTarget=null;
const legacy={isOpen:false,updateHint(){h.hint.hidden=!legacyOptions.getTarget();},close(){this.isOpen=false;},dispose(){legacyDisposed++;}};
const composite=installHillsideReading({
 document:h.doc,window:h.win,canvas:h.canvas,hint:h.hint,camera,solids:[],
 look:{pause(){h.calls.pause++;},resume(){h.calls.resume++;}},releaseMovement(){h.calls.release++;},
 setPaused:value=>h.calls.paused=value,returnFocus:h.returnFocus,canInteract:()=>true,
 getTarget:()=>legacyTarget,legacyFactory:options=>{legacyOptions=options;return legacy;}
});
composite.updateHint();assert.equal(h.hint.textContent,'E — Read '+content.title);
h.win.emit('keydown',{code:'KeyE'});
assert.ok(composite.isOpen&&h.calls.paused&&h.doc.body.classList.contains('reading-open'));
assert.equal(legacyOptions.canInteract(),false);
composite.close();h.flushPop();h.flushClose();
assert.ok(!composite.isOpen&&!h.calls.paused&&!h.doc.body.classList.contains('reading-open'));
legacyTarget={id:'table-drums'};assert.equal(legacyOptions.getTarget(),null,'Legacy reader excludes replaced book');
legacyTarget={id:'table-welcome'};assert.equal(legacyOptions.getTarget(),legacyTarget);
h.canvas.emit('mousedown',{clientX:320,clientY:240});h.canvas.emit('click',{clientX:320,clientY:240});
assert.ok(composite.isOpen,'Unlocked pointer coordinates select actual cover');
composite.close();h.flushPop();h.flushClose();
h.canvas.emit('mousedown',{clientX:4,clientY:4});h.canvas.emit('click',{clientX:4,clientY:4});
assert.ok(!composite.isOpen,'Empty canvas click cannot select centered book');
legacy.isOpen=true;h.win.emit('keydown',{code:'KeyE'});assert.ok(composite.isOpen);assert.ok(!h.calls.paused,'Legacy modal blocks new reader');
legacy.isOpen=false;composite.dispose();composite.dispose();assert.equal(legacyDisposed,1);assert.equal(h.listeners(),0);

const scene=new THREE.Scene(),previousDocument=globalThis.document;
let filtered;
const context=new Proxy({measureText:text=>({width:text.length*24})},{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>(o[k]=v,true)});
globalThis.document={createElement:()=>({getContext:()=>context})};
try{
 const books=addHillsideBooks(scene,[{id:'table-drums'},{id:'table-welcome'}],{},(_,anchors)=>{
  filtered=anchors;return {objects:[],dispose(){}};
 });
 assert.deepEqual(filtered,[{id:'table-welcome'}]);assert.equal(scene.children.length,1);
 assert.equal(books.book.object.name,'Jippity — '+content.title);
 books.dispose();books.dispose();assert.equal(scene.children.length,0);
}finally{globalThis.document=previousDocument;}
console.log(JSON.stringify({status:'passed',checks:['One replacement book; existing anchors preserved','Uses existing reading-open visibility contract without overlay edits','Shared movement pause/focus hook','Pointer-coordinate picking in unlocked mode','Empty canvas clicks do not open centered book','Legacy modal exclusivity','Adapter teardown']},null,2));
