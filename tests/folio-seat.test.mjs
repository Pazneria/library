import assert from 'node:assert/strict';
import * as THREE from 'three';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createFolioChair} from '../src/reading-seat/folio/folio-chair.mjs';
import {compileFolioSeatInterface} from '../src/reading-seat/folio-interface.js';
import {createSeatController} from '../src/reading-seat/controller.js';
import {loadGeometry} from './load-geometry.mjs';
import {EXIT_PORTAL} from '../src/exit-anchor.js';
const asset=createFolioChair(THREE),chair=compileFolioSeatInterface(asset.contract,{position:[0,0,0],yaw:0});
assert.equal(chair.solids.length,8);assert.equal(asset.contract.collision.boxes[0].size[1],.18,'Use current source contract');
assert.ok(Math.abs(chair.facingPitch+.0649087)<1e-6);
const sourceHashes={};
for(const name of ['folio-chair.mjs','folio-core.mjs'])sourceHashes[name]=createHash('sha256').update(readFileSync(new URL('../src/reading-seat/folio/'+name,import.meta.url))).digest('hex');
assert.equal(sourceHashes['folio-chair.mjs'],'53006c52f457d0dd41f86ee7182a888b9c304cc631d0a692368ffed1dd71a639');
assert.equal(sourceHashes['folio-core.mjs'],'edccf32862fb2632ab8faa2282357a92126feebe8adfc5c070dfdf13ff3435c8');
function setup(reduced=false){
  const player={pos:new THREE.Vector3(...chair.anchors.stand[1]),vel:new THREE.Vector3(),vy:0,eye:1.62,eyeCur:1.62,smoothY:0,yaw:0,pitch:-.7};
  const camera=new THREE.PerspectiveCamera();camera.rotation.order='YXZ';camera.position.copy(player.pos).add(new THREE.Vector3(0,1.62,0));
  const controller=createSeatController({player,camera,anchors:chair.anchors,facingYaw:chair.facingYaw,facingPitch:chair.facingPitch,
    reducedMotion:()=>reduced,canStandAt:p=>p[1]===0&&p[2]>.73,
    releaseMovement:()=>player.vel.set(0,0,0),recoverStanding:()=>{player.pos.set(0,0,2);camera.position.set(0,1.62,2);}});
  return {player,camera,controller};
}
for(const hz of [20,60,144]){
  const h=setup();assert.ok(h.controller.sit());for(let i=0;i<hz;i++)h.controller.update(1/hz);
  assert.equal(h.controller.state,'seated');assert.ok(Math.abs(h.player.pitch-chair.facingPitch)<1e-8);
  assert.deepEqual(h.camera.position.toArray(),chair.anchors.eye);
  assert.ok(h.controller.stand());for(let i=0;i<hz;i++)h.controller.update(1/hz);
  assert.equal(h.controller.ownsMovement,false);h.controller.dispose();
}
{
  const h=setup();h.controller.sit();h.controller.update(.1);h.player.pitch=.21;
  h.controller.update(.4);assert.equal(h.player.pitch,.21,'Real pitch input cancels authored yaw/pitch turn');
  h.controller.dispose();
  const r=setup(true);r.controller.sit();assert.equal(r.controller.state,'seated');
  assert.ok(Math.abs(r.player.pitch-chair.facingPitch)<1e-8);r.controller.dispose();
}
// The same adapter at the proposed Library placement, against real room data.
const placement={position:[-7.35,0,4.9],yaw:-Math.PI/2};
const placed=compileFolioSeatInterface(asset.contract,placement);
assert.ok(Math.abs(placed.facingYaw-Math.PI/2)<1e-8);
asset.root.position.set(...placement.position);asset.root.rotation.y=placement.yaw;asset.root.updateMatrixWorld(true);
const bounds=new THREE.Box3().setFromObject(asset.root),room=await loadGeometry(undefined,EXIT_PORTAL);
const overlaps=(a,b)=>['x','y','z'].every(axis=>Math.min(a.max[axis],b.max[axis])-Math.max(a.min[axis],b.min[axis])>.0008);
assert.ok(!room.pieces.some(piece=>piece.box.max.y>.03&&overlaps(bounds,piece.box)));
const solids=[...room.room.B.solids,...placed.solids];
const clear=p=>!solids.some(s=>p[0]+.28>s.x0&&p[0]-.28<s.x1&&p[2]+.28>s.z0&&p[2]-.28<s.z1&&s.y0<p[1]+1.75&&s.y1>p[1]+.42);
const supported=p=>room.room.B.solids.some(s=>p[0]+.196>=s.x0&&p[0]-.196<=s.x1&&p[2]+.196>=s.z0&&p[2]-.196<=s.z1&&Math.abs(s.y1-p[1])<.001);
for(const p of [...placed.anchors.stand,[-8.2,0,4.9],[3.4,0,4.3]])assert.ok(clear(p)&&supported(p));
for(let i=0;i<=50;i++){
  const from=[-8.2,0,4.9],to=placed.anchors.stand[0],t=i/50,p=from.map((v,k)=>v+(to[k]-v)*t);
  assert.ok(clear(p)&&supported(p));
}
asset.dispose();
console.log(JSON.stringify({status:'passed',checks:['Immutable Folio source hashes','Current compound-box and anchor conversion','Authored eye pitch at 20/60/144 Hz','User look priority and reduced motion','Actual mesh, compound proxy and supported stand/approach clearance against Library geometry'],sourceHashes,placement,worldBounds:{min:bounds.min.toArray(),max:bounds.max.toArray()},roomPieces:room.pieces.length,routeSamples:51,scope:'CPU only; real renderer and native sitting reviewed separately. Library host remains unwired.'},null,2));
