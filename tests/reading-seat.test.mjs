import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createSeatController} from '../src/reading-seat/controller.js';
import {compileSeatInterface,installReadingSeat} from '../src/reading-seat/interaction.js';
import {makeTestHarness} from './premium-book/harness.js';
import {contract} from './seat-contract.mjs';
const cases = [];
const chair = compileSeatInterface({position:[0,0,0],yaw:0,...contract});
function setup({reduced=false}={}) {
  const player = {pos:new THREE.Vector3(0,0,1.6),vel:new THREE.Vector3(1,0,1),
    vy:2,eye:1.62,eyeCur:1.62,smoothY:0,yaw:.2,pitch:-.1};
  const camera = new THREE.PerspectiveCamera(70,4/3,.05,2500);camera.position.set(0,1.62,1.6);
  let releases=0,recoveries=0,blocked=false,motion=reduced;
  const controller=createSeatController({player,camera,anchors:chair.anchors,facingYaw:chair.facingYaw,
    canStandAt:p=>!blocked&&p[1]===0&&Math.abs(p[2])>.72,
    releaseMovement:()=>{releases++;player.vel.set(0,0,0);},
    reducedMotion:()=>motion,
    recoverStanding:()=>{recoveries++;player.pos.set(3.4,0,4.3);player.smoothY=0;player.eyeCur=1.62;
      camera.position.set(3.4,1.62,4.3);}});
  return {player,camera,controller,get releases(){return releases;},get recoveries(){return recoveries;},
    block:()=>blocked=true,reduce:()=>motion=true};
}
for(const hz of [20,60,144]) {
  const h=setup();assert.ok(h.controller.sit());assert.equal(h.player.vel.length(),0);assert.equal(h.player.vy,0);
  assert.equal(h.controller.sit(),false,'Repeated activation does not replace the saved approach');
  for(let i=0;i<hz;i++)h.controller.update(1/hz);
  assert.equal(h.controller.state,'seated');assert.deepEqual(h.camera.position.toArray(),chair.anchors.eye);
  h.player.yaw=.73;h.player.pitch=.25;h.controller.update(1/hz);
  assert.equal(h.camera.rotation.y,.73);assert.equal(h.camera.rotation.x,.25,'Normal look remains active');
  assert.ok(h.controller.stand());for(let i=0;i<hz;i++)h.controller.update(1/hz);
  assert.equal(h.controller.state,'walking');assert.deepEqual(h.player.pos.toArray(),chair.anchors.stand[0]);
  assert.deepEqual(h.camera.position.toArray(),[0,1.62,1.05]);assert.equal(h.player.eyeCur,1.62);
  h.controller.dispose();h.controller.dispose();assert.equal(h.controller.state,'disposed');
}
cases.push('Settle/sit/stand at 20/60/144 Hz; repeated activation, free look, standing height and idempotent disposal');
{
  const h=setup();h.controller.sit();h.controller.update(.12);
  const before=h.camera.position.toArray();h.player.yaw=1.1;h.controller.update(0);
  assert.deepEqual(h.camera.position.toArray(),before,'Resize does not restart the settlement');
  h.controller.update(.12);assert.equal(h.player.yaw,1.1,'Real look cancels automatic facing turn');
  const position=h.camera.position.toArray();assert.ok(h.controller.stand());
  assert.deepEqual(h.camera.position.toArray(),position,'Escape reversal starts at the current eye');
  assert.ok(h.controller.cancel());assert.equal(h.controller.ownsMovement,false);
  assert.ok(h.controller.sit());h.reduce();h.controller.update(0);assert.equal(h.controller.state,'seated');
  assert.ok(h.controller.stand());assert.equal(h.controller.state,'walking');
}
{
  const h=setup({reduced:true});h.controller.sit();assert.equal(h.controller.state,'seated');
  h.block();h.controller.cancel();assert.equal(h.recoveries,1);assert.equal(h.controller.ownsMovement,false);
  assert.deepEqual(h.player.pos.toArray(),[3.4,0,4.3]);assert.equal(h.player.vel.length(),0);
}
cases.push('Cancellable continuous camera reversal, resize stability, user look priority, reduced motion and host safe recovery');
assert.throws(()=>compileSeatInterface({position:[NaN,0,0],...contract}),/Invalid chair/);
assert.throws(()=>compileSeatInterface({position:[0,0,0],...contract,anchors:{...contract.anchors,stand:[]}}),/Invalid chair/);
const rotated=compileSeatInterface({position:[2,0,3],yaw:Math.PI/2,...contract});
assert.ok(Math.abs(rotated.anchors.stand[0][0]-3.05)<1e-8);assert.ok(Math.abs(rotated.anchors.stand[0][2]-3)<1e-8);
cases.push('Finite local/world anchor/proxy contract and rotated placements');

function uiFixture() {
  const h=makeTestHarness({createBookReader:()=>({dispose(){}})},null);h.doc.hasFocus=()=>true;
  h.canvas.getBoundingClientRect=()=>({left:0,top:0,width:640,height:480});
  const player={pos:new THREE.Vector3(0,0,1.6),vel:new THREE.Vector3(),vy:0,eye:1.62,eyeCur:1.62,smoothY:0,yaw:0,pitch:0};
  const camera=new THREE.PerspectiveCamera(70,4/3,.05,2500);camera.position.set(0,1.62,1.6);
  camera.lookAt(0,.5,0);camera.updateMatrixWorld(true);
  let allowed=true;
  const ui=installReadingSeat({document:h.doc,window:h.win,canvas:h.canvas,player,camera,chair,solids:[],
    canInteract:()=>allowed,canStandAt:p=>p[1]===0&&Math.abs(p[2])>.72,
    recoverStanding:()=>{player.pos.set(3.4,0,4.3);camera.position.set(3.4,1.62,4.3);},
    releaseMovement:()=>{h.calls.release++;player.vel.set(0,0,0);}});
  const find=cls=>h.all.find(el=>el.isConnected&&el.className===cls);
  return {...h,ui,player,camera,find,disallow:()=>allowed=false};
}
{
  const h=uiFixture();assert.ok(h.ui.target());h.ui.update(0);assert.equal(h.find('seat-hint').hidden,false);
  h.win.emit('keydown',{code:'KeyE',repeat:true,target:h.canvas});assert.equal(h.ui.state,'walking');
  h.canvas.emit('mousedown',{clientX:320,clientY:240});h.win.emit('mousemove',{movementX:10});
  h.canvas.emit('click',{clientX:330,clientY:240});assert.equal(h.ui.state,'walking','Drag does not sit');
  h.canvas.emit('mousedown',{clientX:320,clientY:240});h.canvas.emit('click',{clientX:320,clientY:240});
  assert.equal(h.ui.state,'settling');assert.equal(h.find('seat-stand').hidden,false);
  assert.equal(h.win.emit('keydown',{code:'KeyW',target:h.canvas}).stopped,true,'Walking keys cannot leak into host');
  assert.equal(h.win.emit('keydown',{code:'Escape',target:h.canvas}).stopped,true);assert.equal(h.ui.state,'rising');
  h.win.emit('keydown',{code:'Escape',target:h.canvas});assert.equal(h.ui.state,'walking');
  assert.equal(h.doc.activeElement,h.canvas);
  h.ui.dispose();h.ui.dispose();assert.equal(h.listeners(),0);assert.equal(h.timers.size,0);
  assert.ok(h.doc.body.children.every(el=>!el.className.startsWith('seat-')));
}
for(const event of ['blur','popstate','pagehide','hashchange']) {
  const h=uiFixture();h.win.emit('keydown',{code:'KeyE',target:h.canvas});assert.ok(h.ui.ownsMovement);
  h.win.emit(event);assert.equal(h.ui.ownsMovement,false,event+' restores walking');h.ui.dispose();assert.equal(h.listeners(),0);
}
{
  const h=uiFixture();h.win.emit('keydown',{code:'KeyE',target:h.canvas});
  const result=h.win.emit('keydown',{code:'Digit3',target:h.canvas});assert.equal(result.stopped,false);
  assert.equal(h.ui.ownsMovement,false,'Host navigation can apply its view after cleanup');
  h.disallow();assert.equal(h.ui.target(),false);h.find('seat-hint').emit('click');assert.equal(h.ui.state,'walking');
  h.ui.dispose();assert.equal(h.listeners(),0);
}
cases.push('Deliberate click/E, drag rejection, movement suppression, Escape/repeat/return focus, host navigation, modal gate and complete DOM/listener cleanup');
console.log(JSON.stringify({status:'passed',cases,scope:'CPU controller and mock DOM/input, no imported main hooks, chair model, browser/GPU or rendered sitting evidence.'},null,2));
