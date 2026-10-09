import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
class Events {
  constructor() { this.listeners = new Map(); }
  addEventListener(type, fn, options) {
    if (!this.listeners.has(type)) this.listeners.set(type, []);
    this.listeners.get(type).push({fn, capture: options === true});
  }
  removeEventListener(type, fn) { this.listeners.set(type, (this.listeners.get(type) || []).filter(item => item.fn !== fn)); }
  emit(type, input = {}) {
    let stopped = false;
    const event = { preventDefault() {}, stopImmediatePropagation() { stopped = true; }, ...input };
    for (const {fn} of [...this.listeners.get(type) || []].sort((a,b) => b.capture-a.capture)) {
      fn(event); if (stopped) break;
    }
    return stopped;
  }
}
const settle = async () => { for (let i=0;i<8;i++) await Promise.resolve(); };
function harness(request = () => Promise.resolve(), blocked = () => false) {
  const win=new Events(), doc=new Events(), canvas=new Events(), menu=new Events(), button=new Events(), resume=new Events(), slider=new Events();
  const output={textContent:'100%'}, requests=[], toasts=[], menuPauses=[];
  let focused=true, releases=0, exits=0, active='body';
  doc.visibilityState='visible'; doc.pointerLockElement=null; doc.hasFocus=()=>focused;
  doc.exitPointerLock=()=>{exits++;doc.pointerLockElement=null;};
  canvas.focus=()=>{active='canvas';focused=true;}; resume.focus=()=>{active='resume';};
  menu.open=false; menu.showModal=()=>{menu.open=true;}; menu.close=()=>{menu.open=false;menu.emit('close');};
  menu.querySelector=selector=>selector==='[data-resume-look]'?resume:selector.includes('-value')?output:slider;
  slider.value='100';
  canvas.requestPointerLock=request?options=>{requests.push(options);return request(options,requests.length);}:undefined;
  const player={yaw:0,pitch:0}, camera={rotation:{set:(...values)=>camera.values=values}};
  const context={document:doc,windowBrand:true,
    addEventListener(type,fn,options){assert.equal(this.windowBrand,true);win.addEventListener(type,fn,options);},
    removeEventListener(type,fn){assert.equal(this.windowBrand,true);win.removeEventListener(type,fn);}};
  vm.createContext(context);
  vm.runInContext(readFileSync(new URL('../src/look.js',import.meta.url),'utf8').replace('export function','function')+';globalThis.install=installFpsLook;',context);
  const control=context.install({canvas,overlay:menu,menuButton:button,player,camera,
    releaseMovement:()=>releases++,toast:message=>toasts.push(message),isInputBlocked:blocked,setMenuPaused:value=>menuPauses.push(value)});
  const click=()=>{canvas.emit('mousedown',{button:0,clientX:100,clientY:100});canvas.emit('click');};
  const lock=()=>{doc.pointerLockElement=canvas;doc.emit('pointerlockchange');};
  return {win,doc,canvas,menu,button,resume,slider,output,player,camera,requests,toasts,menuPauses,control,click,lock,
    get active(){return active;},get releases(){return releases;},get exits(){return exits;},setFocus:value=>focused=value};
}
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-12,`${a} != ${b}`);
const cases=[];
let h=harness();
assert.equal(h.control.menuOpen,false);assert.equal(h.requests.length,0);assert.equal(h.releases,0);
h.win.emit('mousemove',{movementX:100,movementY:100});near(h.player.yaw,0);
h.click();assert.equal(h.requests[0].unadjustedMovement,true);assert.equal(h.active,'canvas');
await settle();h.lock();assert.equal(h.releases,0,'Acquiring capture must not clear held walking keys');
h.win.emit('mousemove',{movementX:100,movementY:50});near(h.player.yaw,-.26);near(h.player.pitch,-.13);
assert.deepEqual(h.camera.values,[h.player.pitch,h.player.yaw,0]);
cases.push('Arrival has no menu or capture request; deliberate scene gesture focuses canvas; acquiring lock preserves held walking keys; rotation applies in the mouse event');
h.slider.value='200';h.slider.emit('input');h.win.emit('mousemove',{movementX:100,movementY:0});near(h.player.yaw,-.78);
h.win.emit('mousemove',{movementX:NaN,movementY:0});near(h.player.yaw,-.78);
h.win.emit('mousemove',{movementX:0,movementY:1e5});near(h.player.pitch,-Math.PI/2+.02);
h.win.emit('mousemove',{movementX:0,movementY:-1e5});near(h.player.pitch,Math.PI/2-.02);
assert.equal(h.output.textContent,'200%');
cases.push('Sensitivity uses counts; invalid input ignored; pitch clamped and roll zero');
h.win.emit('keydown',{code:'Escape'});assert.ok(h.menu.open);assert.equal(h.exits,1);assert.equal(h.active,'resume');
assert.equal(h.menuPauses.at(-1),true);const yaw=h.player.yaw,count=h.requests.length;
h.slider.emit('click');h.win.emit('mousemove',{movementX:100,movementY:0});near(h.player.yaw,yaw);assert.equal(h.requests.length,count);
h.menu.emit('cancel');assert.equal(h.menu.open,false);assert.equal(h.active,'canvas');assert.equal(h.menuPauses.at(-1),false);assert.equal(h.requests.length,count);
h.canvas.emit('keydown',{code:'Enter'});assert.equal(h.requests.length,count+1);await settle();h.lock();
cases.push('Escape opens a paused focus-trapped controls dialog; settings do not capture; native cancel returns canvas focus; Enter is a fresh capture gesture');
h.setFocus(false);h.win.emit('blur');assert.equal(h.menu.open,false);const requests=h.requests.length;
h.setFocus(true);h.win.emit('focus');assert.equal(h.requests.length,requests);h.click();await settle();h.lock();
h.doc.visibilityState='hidden';h.doc.emit('visibilitychange');const hidden=h.player.yaw;
h.win.emit('mousemove',{movementX:100,movementY:0});near(h.player.yaw,hidden);
h.doc.visibilityState='visible';h.doc.emit('visibilitychange');assert.equal(h.requests.length,requests+1);
cases.push('Blur and hidden pages release capture and keys without an intrusive menu; focus/visibility restoration never requests capture');
h=harness((options,n)=>n===1?Promise.reject(Object.assign(new Error(),{name:'NotSupportedError'})):Promise.resolve());
h.click();await settle();assert.equal(h.requests.length,2);assert.equal(h.requests[1],undefined);h.lock();
cases.push('Unsupported raw input retries ordinary pointer lock only for that error');
h=harness(()=>Promise.reject(Object.assign(new Error(),{name:'NotAllowedError'})));
h.click();await settle();assert.equal(h.menu.open,false);assert.equal(h.toasts.length,1);
h.canvas.emit('mousedown',{button:2,clientX:0,clientY:0});h.win.emit('mousemove',{buttons:2,clientX:999,clientY:999});near(h.player.yaw,0);
h.canvas.emit('mousedown',{button:0,clientX:100,clientY:100});await settle();h.win.emit('mousemove',{buttons:1,clientX:110,clientY:105,movementX:999});
near(h.player.yaw,-.026);near(h.player.pitch,-.013);h.win.emit('mouseup');h.win.emit('mousemove',{buttons:1,clientX:999,clientY:999});near(h.player.yaw,-.026);
cases.push('Denied capture keeps the room usable with stable client-coordinate left drag; right/released drag ignored');
h=harness(()=>undefined);h.click();h.doc.emit('pointerlockerror');assert.equal(h.toasts.length,1);
h=harness(null);h.click();assert.equal(h.toasts.length,1);
cases.push('Legacy event-only and unavailable pointer lock degrade safely');
let resolve;
h=harness(()=>new Promise(fn=>resolve=fn));h.click();h.win.emit('keydown',{code:'Escape'});resolve();await settle();h.lock();assert.equal(h.exits,1);assert.ok(h.menu.open);
cases.push('Escape cancels pending capture; a late lock is released');
function rotation(cadence){const r=harness();r.click();r.lock();for(let i=0;i<240;i++){r.win.emit('mousemove',{movementX:i%3-.5,movementY:.1});if(i%cadence===0)r.camera.values.slice();}return[r.player.yaw,r.player.pitch];}
assert.deepEqual(rotation(1),rotation(4));
cases.push('Identical mouse counts yield identical angles at different simulated render cadences');
let blocked=false;
h=harness(undefined,()=>blocked);h.click();await settle();h.lock();h.control.pause();const pausedCount=h.requests.length,pausedYaw=h.player.yaw;
h.win.emit('focus');h.click();h.win.emit('mousemove',{movementX:100,movementY:0});near(h.player.yaw,pausedYaw);assert.equal(h.requests.length,pausedCount);
h.control.resume();assert.equal(h.menu.open,false);assert.equal(h.requests.length,pausedCount);blocked=true;h.click();h.win.emit('keydown',{code:'Escape'});assert.equal(h.menu.open,false);
blocked=false;h.click();await settle();h.lock();h.win.emit('mousemove',{movementX:10,movementY:0});near(h.player.yaw,pausedYaw-.026);
cases.push('Reading pause and external gates block look/menu/capture; reader close needs fresh capture without an intro');
h.control.dispose();const disposed=h.requests.length;h.click();h.control.resume();h.win.emit('mousemove',{movementX:100,movementY:0});assert.equal(h.requests.length,disposed);
assert.ok([h.win,h.doc,h.canvas,h.menu,h.button,h.resume,h.slider].every(target=>[...target.listeners.values()].every(list=>list.length===0)));
cases.push('Disposal removes all listeners and releases capture');
h=harness(()=>new Promise(fn=>resolve=fn));h.click();h.control.pause();resolve();await settle();h.lock();assert.equal(h.exits,1);
cases.push('Reader pause cancels late pending capture');
h=harness();let reads=0;h.canvas.addEventListener('click',()=>reads++);
h.click();assert.equal(reads,0);await settle();h.lock();h.click();assert.equal(reads,1);
cases.push('First capture click is consumed before reading listeners; a subsequent captured click can read');
console.log(JSON.stringify({status:'passed',cases,scope:'CPU mock DOM/API events; native focus/pointer lock/graphics remain untested'},null,2));
