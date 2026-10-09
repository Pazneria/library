import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import { isEditingTarget } from '../src/interaction-core.js';
import { loadGeometry } from './load-geometry.mjs';

const source=readFileSync(new URL('../src/main.js',import.meta.url),'utf8').replaceAll('\r\n','\n');
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.ok(!/Click to enter|Late afternoon|Two books await/.test(html));
assert.match(html,/<dialog id="overlay" aria-labelledby="controls-title">/);
assert.ok(!/<dialog id="overlay"[^>]*\bopen\b/.test(html));
assert.ok(!/#overlay[^\n]*transition/.test(html),'Entry must not fade a full-screen overlay');
const scene=await loadGeometry(), listeners=new Map();
const context={THREE,study:null,solids:scene.room.B.solids,exitGeometry:{door:{blocks:()=>false}},ROOM:{GY:4.2},camera:new THREE.PerspectiveCamera(),toast:()=>{},isEditingTarget,
  reading:null,loop:{paused:false},stats:{classList:{toggle(){}}},help:{classList:{toggle(){}}},
  addEventListener:(type,handler)=>listeners.set(type,handler)};
vm.createContext(context);
const setup=source.slice(source.indexOf('const P ='),source.indexOf('const keys ='));
const input=source.slice(source.indexOf('const keys ='),source.indexOf('const overlay ='));
const update=source.slice(source.indexOf('const desiredVelocity'),source.indexOf('// --------------------------------------------------------------- loop + stats'));
vm.runInContext(setup+input+';loop={paused:false};'+update+';globalThis.player=P;globalThis.tick=updatePlayer;globalThis.view=setView;globalThis.state={get keys(){return keys;},set modal(v){reading=v;},set paused(v){loop.paused=v;}};',context);
context.view(0);context.tick(0);
assert.deepEqual(context.player.pos.toArray(),[3.4,0,4.3]);
assert.deepEqual(context.camera.position.toArray(),[3.4,1.62,4.3]);
assert.equal(context.player.yaw,.78);assert.equal(context.player.pitch,.1);
assert.equal(context.player.vel.length(),0);
assert.match(source,/new THREE\.PerspectiveCamera\(70, window\.innerWidth \/ window\.innerHeight, 0\.05, 2500\)/);
assert.match(source,/camera\.rotation\.order = 'YXZ'/);
const before=context.player.pos.clone();
listeners.get('keydown')({code:'KeyW',target:{closest:()=>null},repeat:false});
for(let i=0;i<30;i++)context.tick(1/60);
assert.ok(context.player.pos.distanceTo(before)>.8,'Walking must work immediately, without capture or intro dismissal');
listeners.get('keyup')({code:'KeyW'});
assert.ok(!context.state.keys.has('KeyW'));
context.state.modal={isOpen:true};listeners.get('keydown')({code:'KeyW',target:{closest:()=>null}});assert.equal(context.state.keys.size,0);
context.state.modal=null;context.state.paused=true;listeners.get('keydown')({code:'KeyW',target:{closest:()=>null}});assert.equal(context.state.keys.size,0);
context.state.paused=false;listeners.get('keydown')({code:'KeyW',target:{closest:()=>({})}});assert.equal(context.state.keys.size,0);
assert.ok(source.indexOf('updatePlayer(0);')<source.indexOf('renderer.compile(scene, camera);'));
assert.ok(source.indexOf('updatePlayer(0);')<source.indexOf('drawFrame();\nloop.setPaused'));
const initial=context.camera.position.clone(),rotation=context.camera.rotation.clone();
context.tick(0);assert.ok(context.camera.position.distanceTo(initial)<1e-12);assert.deepEqual(context.camera.rotation.toArray(),rotation.toArray());
console.log(JSON.stringify({status:'passed',checks:['Closed controls dialog on arrival; introductory prose and opacity transition removed',
  'Actual input listener and movement functions walk from spawn before capture', 'Reader/menu/paused/editor focus gates block walking',
  'Authored camera is established before compile/first draw; zero-time resume cannot jump it'],
  scope:'CPU source/actual movement checks; reported visual glitch has not been rendered or reproduced'},null,2));
