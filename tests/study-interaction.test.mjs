import assert from 'node:assert/strict';
import * as THREE from 'three';
import {makeTestHarness} from './premium-book/harness.js';
import {installStudyInteraction} from '../src/secret-study/interaction.js';
import {createStudyDoor,STUDY} from '../src/secret-study/layout.js';
const h=makeTestHarness({createBookReader:()=>null},{}), controls=h.doc.createElement('div');
const camera=new THREE.PerspectiveCamera(),player={pos:new THREE.Vector3(...STUDY.entry),vel:new THREE.Vector3(),eye:1.62};
const door=createStudyDoor(),solids=[];let blocked=false,paused=false,pauses=0,resumes=0,releases=0;
const ui=installStudyInteraction({document:h.doc,window:h.win,canvas:h.canvas,camera,player,solids,door,
  look:{pause(){pauses++;},resume(){resumes++;}},releaseMovement(){releases++;player.vel.set(0,0,0);},setPaused:p=>paused=p,canInteract:()=>!blocked&&!paused,controls,toast(){}});
function aim(position,target){camera.position.set(...position);camera.lookAt(...target);camera.updateMatrixWorld(true);}
aim([3.9,1.62,-8.55],[3.9,1.40,-9.49]);
assert.equal(ui.target(),'open');
solids.push({x0:3.5,x1:4.2,y0:0,y1:3,z0:-9.1,z1:-9.0});assert.equal(ui.target(),null);solids.pop();
blocked=true;assert.equal(ui.target(),null);blocked=false;
let e=h.win.emit('keydown',{code:'KeyE',repeat:true,target:h.canvas});assert.equal(door.requested,false);
const edit=h.doc.createElement('input');h.win.emit('keydown',{code:'KeyE',target:edit});assert.equal(door.requested,false);
e=h.win.emit('keydown',{code:'KeyE',target:h.canvas});assert.equal(e.prevented,true);assert.equal(e.stopped,true);assert.equal(door.requested,true);
for(let i=0;i<180;i++)door.update(1/60,player.pos);
player.pos.set(4.31,0,-12.7);aim([4.31,1.62,-12.7],[4.31,1.3,-11.7]);
assert.equal(ui.target(),'close');h.win.emit('keydown',{code:'KeyE',target:h.canvas});assert.equal(door.requested,false);
for(let i=0;i<180;i++)door.update(1/60,player.pos);assert.equal(door.angle,0);
assert.equal(ui.target(),'open');h.win.emit('keydown',{code:'KeyE',target:h.canvas});assert.equal(door.requested,true);
player.pos.set(3.3,0,-14.8);aim([3.3,1.62,-14.8],[3.57,.86,-15.85]);
assert.equal(ui.target(),'note');h.win.emit('keydown',{code:'KeyE',target:h.canvas});assert.ok(ui.isOpen&&paused);assert.equal(pauses,1);assert.equal(h.doc.activeElement,h.find('study-close'));
h.find('study-note').emit('cancel');assert.ok(!ui.isOpen&&!paused);assert.equal(h.doc.activeElement,h.canvas);assert.equal(resumes,1);
// A drag, capture transition and repeat never trigger the note.
h.canvas.emit('mousedown',{button:0,clientX:0,clientY:0});h.win.emit('mousemove',{movementX:5,movementY:0});h.canvas.emit('click',{button:0,clientX:5,clientY:0});assert.ok(!ui.isOpen);
h.canvas.emit('mousedown',{button:0,clientX:0,clientY:0});h.doc.pointerLockElement=h.canvas;h.canvas.emit('click',{button:0,clientX:0,clientY:0});assert.ok(!ui.isOpen);
h.canvas.emit('mousedown',{button:0,clientX:0,clientY:0});h.canvas.emit('click',{button:0,clientX:0,clientY:0});assert.ok(ui.isOpen);
h.find('study-close').emit('click');assert.ok(!ui.isOpen&&!paused);
ui.setInside(true);assert.equal(h.find('study-location').hidden,false);player.vel.set(2,0,2);h.find('study-return').emit('click');assert.deepEqual(player.pos.toArray(),STUDY.entry);assert.equal(player.vel.length(),0);assert.equal(player.vy,0);assert.equal(player.smoothY,0);
ui.dispose();ui.dispose();assert.equal(h.listeners(),0);assert.ok(h.doc.body.children.length===0);assert.equal(controls.children.length,0);assert.equal(h.timers.size,0);
console.log(JSON.stringify({status:'passed',cases:['Exact reachable latch, solid occlusion, input gates, repeats and editors','Inside pull closes and reopens the physical leaf','Sample note pauses input, focuses Close, returns focus on Escape and explicit return','Drag/capture transitions do not activate; deliberate click does','Fallback return restores a supported Library location and clears velocity','Idempotent cleanup removes all added DOM/listeners; no timers or storage'],scope:'CPU mock DOM and Three camera rays; no browser/native pointer claim.'},null,2));
