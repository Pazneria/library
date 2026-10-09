import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import {createFrameLoop} from '../src/frame-loop.js';
import {createBookReader} from '../src/jippity-book/reader.js';
import {createInspectableReader} from '../src/library-books/inspect.js';
import {installStudyInteraction} from '../src/secret-study/interaction.js';
import {createStudyDoor,STUDY} from '../src/secret-study/layout.js';
import {makeTestHarness} from './premium-book/harness.js';
import {addQueries} from './library-books-harness.mjs';

const source=readFileSync(new URL('../src/main.js',import.meta.url),'utf8').replaceAll('\r\n','\n');
const content=JSON.parse(readFileSync(new URL('../src/jippity-book/content.json',import.meta.url),'utf8'));
const start=source.indexOf('reading = installHillsideReading('),end=source.indexOf('\n});',start);
assert.ok(start>=0&&end>start);
const readingBlock=source.slice(start,end);
const readingPause=readingBlock.slice(readingBlock.indexOf('setPaused: ')+11).replace(/,\s*$/,'').trim();
const studyStart=source.indexOf('study?.install('),studyEnd=source.indexOf('\n});',studyStart);
const studyBlock=source.slice(studyStart,studyEnd);
const interactionGate=studyBlock.match(/canInteract: (.+),\n/)[1];
const studyPause=studyBlock.slice(studyBlock.indexOf('setPaused: ')+11).replace(/,\s*$/,'').trim();
const cases=[];

function fixture(enabled=true){
  const h=addQueries(makeTestHarness({createBookReader},content));h.reader.dispose();
  h.doc.hasFocus=()=>true;
  let book,ui,suspended=false,requests=0,frames=0,nextId=0;
  const queued=new Map(),camera=new THREE.PerspectiveCamera();
  const player={pos:new THREE.Vector3(...STUDY.entry),vel:new THREE.Vector3(),eye:1.62,vy:0};
  const door=createStudyDoor();
  const loop=createFrameLoop({tick:()=>{frames++;door.update(1/60,player.pos);},now:()=>0,
    request:fn=>{requests++;queued.set(++nextId,fn);return nextId;},cancel:id=>queued.delete(id)});
  const look={menuOpen:false,pause(){suspended=true;},resume(){suspended=false;}};
  const releaseMovement=()=>{h.calls.release++;player.vel.set(0,0,0);};
  const controls=h.doc.createElement('div');
  const context={loop,look,libraryDisposed:false,document:h.doc};
  Object.defineProperty(context,'reading',{get:()=>book});
  Object.defineProperty(context,'study',{get:()=>enabled?ui:null});
  const setReadingPaused=vm.runInNewContext('('+readingPause+')',context);
  const canInteract=vm.runInNewContext('('+interactionGate+')',context);
  const setStudyPaused=vm.runInNewContext('('+studyPause+')',context);
  book=createInspectableReader({document:h.doc,window:h.win,look,releaseMovement,
    setPaused:setReadingPaused,returnFocus:h.canvas},
    {content,summary:'Public reading sample.',palette:{}},{surface:'table'});
  if(enabled)ui=installStudyInteraction({document:h.doc,window:h.win,canvas:h.canvas,camera,player,
    solids:[],door,look,releaseMovement,setPaused:setStudyPaused,canInteract,controls,toast(){}});
  h.reader=book;loop.start();
  const find=name=>book.element.querySelector('.'+name);
  const studyFind=name=>h.all.find(el=>el.isConnected&&el.className.split(' ').includes(name));
  function aim(position,target){camera.position.set(...position);camera.lookAt(...target);camera.updateMatrixWorld(true);}
  function studyDesk(){player.pos.set(3.3,0,-14.8);aim([3.3,1.62,-14.8],[3.57,.86,-15.85]);}
  function dispose(){ui?.dispose();book.dispose();h.flushClose();loop.dispose();assert.equal(h.listeners(),0);assert.equal(h.timers.size,0);assert.equal(queued.size,0);}
  return {...h,book,ui,loop,look,player,door,find,studyFind,aim,studyDesk,dispose,
    get suspended(){return suspended;},get requests(){return requests;},get frames(){return frames;},queued};
}

{
  const h=fixture();
  h.aim([3.9,1.62,-8.55],[3.9,1.40,-9.49]);assert.equal(h.ui.target(),'open');
  assert.ok(h.book.open());assert.ok(h.loop.paused&&h.suspended);
  const position=h.player.pos.toArray();
  assert.equal(h.ui.target(),null);
  h.win.emit('keydown',{code:'KeyE',target:h.canvas});
  assert.equal(h.door.requested,false);assert.deepEqual(h.player.pos.toArray(),position);
  assert.equal(h.queued.size,0,'Book pauses the existing loop; the reveal cannot tick beneath it');
  h.find('lb-read').emit('click');
  const next=h.find('jb-navigation').children.find(el=>el.getAttribute('aria-label')==='Next two pages');
  next.emit('click');assert.match(h.find('jb-status').textContent,/Pages 3.4/);
  h.book.close();assert.ok(h.book.pendingBack);
  h.studyDesk();h.win.emit('keydown',{code:'KeyE',target:h.canvas});
  assert.ok(h.ui.isOpen&&!h.book.isOpen,'Study note can open during the short queued Back interval');
  h.flushPop();assert.ok(h.ui.isOpen&&h.loop.paused,'Book Back leaves the study pause intact');
  const before=h.requests;
  h.win.history.forward();h.flushPop();
  assert.ok(h.book.isOpen&&!h.ui.isOpen,'Actual host callback hands Forward restoration to exactly one modal');
  assert.equal(h.requests,before,'Acquiring reading pause before note close prevents an intermediate frame request');
  assert.ok(h.suspended&&h.loop.paused);assert.equal(h.queued.size,0);
  assert.match(h.find('jb-status').textContent,/Pages 3.4/);
  assert.equal(h.doc.activeElement,h.find('jb-close'),'Final focus belongs to the existing book close control');
  h.book.close();h.flushPop();assert.ok(!h.book.isOpen&&!h.ui.isOpen&&!h.loop.paused&&!h.suspended);
  h.dispose();
  cases.push('Actual book/study modules and actual host callback: queued Back, study note, Forward restore one book modal with remembered pages/focus and no intermediate frame request');
}

{
  const h=fixture();h.book.open();h.book.close();h.flushPop();
  h.studyDesk();h.win.emit('keydown',{code:'KeyE',target:h.canvas});assert.ok(h.ui.isOpen);
  h.loop.setPaused('visibility',true);h.loop.setPaused('controls',true);
  const before=h.requests;h.win.history.forward();h.flushPop();
  assert.ok(h.book.isOpen&&!h.ui.isOpen&&h.suspended);assert.equal(h.requests,before);
  h.book.close();h.flushPop();assert.ok(h.loop.paused);
  h.loop.setPaused('visibility',false);assert.ok(h.loop.paused,'Controls retains its independent pause');
  h.loop.setPaused('controls',false);assert.ok(!h.loop.paused);
  h.studyDesk();h.win.emit('keydown',{code:'KeyE',target:h.canvas});assert.ok(h.ui.isOpen);
  h.studyFind('study-note').emit('cancel');assert.ok(!h.ui.isOpen&&!h.loop.paused);
  assert.equal(h.doc.activeElement,h.canvas);
  h.ui.setInside(true);h.player.vel.set(2,0,2);h.studyFind('study-return').emit('click');
  assert.deepEqual(h.player.pos.toArray(),STUDY.entry);assert.equal(h.player.vel.length(),0);assert.equal(h.player.vy,0);
  h.dispose();
  cases.push('Named visibility/controls pauses survive modal handoff and book close; study Escape and fallback return restore scene focus and clear movement after reading');
}

{
  const h=fixture(false);assert.ok(h.book.open());
  assert.ok(h.loop.paused&&h.suspended);assert.equal(h.ui,undefined);
  assert.ok(!h.all.some(el=>el.className.startsWith('study-')));
  h.book.close();h.flushPop();assert.ok(!h.loop.paused);h.dispose();
  cases.push('Diagnostic opt-out host callback preserves public book focus/pause/return without study DOM or interaction construction');
}
console.log(JSON.stringify({status:'passed',cases,scope:'CPU actual modules/host callbacks with mock DOM/history and frame requests. No browser/native focus/inertness, GPU, rendered comparison or performance measurement.'},null,2));
