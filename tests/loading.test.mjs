import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { createLoadingScreen } from '../src/loading.js';

class Events {
  constructor(){this.listeners=new Map();}
  addEventListener(name,fn){const list=this.listeners.get(name)||[];list.push(fn);this.listeners.set(name,list);}
  removeEventListener(name,fn){this.listeners.set(name,(this.listeners.get(name)||[]).filter(item=>item!==fn));}
  emit(name,event={}){for(const fn of [...this.listeners.get(name)||[]])fn(event);}
}
function harness(reduced=false,handoff=null){
  const nodes=new Map();for(const name of ['loading','loading-status','loading-retry','loading-error']){
    const element=new Events(),classes=new Set();Object.assign(element,{hidden:false,textContent:'',dataset:{},attributes:{},
      classList:{add:value=>classes.add(value),remove:value=>classes.delete(value),contains:value=>classes.has(value)},setAttribute(key,value){this.attributes[key]=value;}});nodes.set(name,element);
  }
  const win=new Events(),frames=new Map(),timers=new Map(),observers=[];let next=0,reloads=0,cancels=0,focuses=0;
  class MutationObserver {
    constructor(callback){this.callback=callback;observers.push(this);}
    observe(root,options){this.root=root;this.options=options;this.connected=true;}
    disconnect(){this.connected=false;}
  }
  Object.assign(win,{requestAnimationFrame:fn=>{const id=++next;frames.set(id,fn);return id;},cancelAnimationFrame:id=>frames.delete(id),
    setTimeout:fn=>{const id=++next;timers.set(id,fn);return id;},clearTimeout:id=>timers.delete(id),
    matchMedia:()=>({matches:reduced}),location:{reload:()=>reloads++},MutationObserver,pazneriaRoomHandoff:handoff});
  nodes.set('c',{focus(){focuses++;}});
  const doc={getElementById:id=>nodes.get(id),documentElement:{dataset:{}},visibilityState:'visible',hasFocus:()=>true};
  const loader=createLoadingScreen({document:doc,window:win,onCancel:()=>cancels++});
  return {loader,win,doc,nodes,frames,timers,observers,get focuses(){return focuses;},get reloads(){return reloads;},get cancels(){return cancels;},
    mutate(){for(const observer of observers)if(observer.connected)observer.callback();},
    paint(){for(const [id,fn]of [...frames]){frames.delete(id);fn();}for(const [id,fn]of [...timers]){timers.delete(id);fn();}},
    listeners(){return [...nodes.values(),win].reduce((sum,node)=>sum+[...node.listeners?.values()||[]].reduce((n,list)=>n+list.length,0),0);}};
}
const cases=[];
let h=harness();
for(let index=0;index<4;index++){let settled=false;const promise=h.loader.stage(index,'Stage '+index).then(()=>{settled=true;});
  assert.equal(h.nodes.get('loading').dataset.stage,String(index));assert.equal(h.nodes.get('loading-status').textContent,'Stage '+index);
  await Promise.resolve();assert.equal(settled,false);h.paint();await promise;assert.equal(settled,true);
}
h.loader.ready();assert.equal(h.loader.state,'ready');assert.equal(h.nodes.get('loading').attributes['aria-busy'],'false');
assert.ok(h.nodes.get('loading').classList.contains('is-ready'));assert.equal(h.nodes.get('loading').hidden,false);
h.nodes.get('loading').emit('transitionend');assert.equal(h.nodes.get('loading').hidden,true);assert.equal(h.timers.size,0);
cases.push('Four real startup-stage updates yield for paint; ready fades only after the host signals its first draw; no artificial percentage');
h.loader.dispose();assert.equal(h.listeners(),0);
h=harness(true);h.loader.ready();assert.equal(h.nodes.get('loading').hidden,true);assert.equal(h.timers.size,0);h.loader.dispose();
cases.push('Reduced motion hides a ready cover immediately without timers');
h=harness();h.loader.fail();assert.equal(h.loader.state,'error');assert.equal(h.nodes.get('loading-retry').hidden,false);
assert.equal(h.nodes.get('loading-error').hidden,false);assert.equal(h.nodes.get('loading-status').textContent,'Library could not load.');
h.nodes.get('loading-retry').emit('click');assert.equal(h.reloads,1);h.loader.dispose();assert.equal(h.listeners(),0);
cases.push('Error status and keyboard-capable retry remain available; dispose removes their listeners');
h=harness();const promise=h.loader.stage(1,'Room');const rejected=assert.rejects(promise,{name:'AbortError'});
h.win.emit('pagehide');await rejected;assert.equal(h.cancels,1);assert.equal(h.frames.size,0);assert.equal(h.timers.size,0);
h.win.emit('pagehide');assert.equal(h.cancels,1);h.win.emit('pageshow',{persisted:true});assert.equal(h.reloads,1);h.loader.dispose();assert.equal(h.listeners(),0);
cases.push('Navigation cancels staged work and its paint tasks once; a cached partial startup reloads rather than resuming disposed resources');
h=harness();const disposed=h.loader.stage(0,'Start');const disposedReject=assert.rejects(disposed,{name:'AbortError'});h.loader.dispose();await disposedReject;
assert.equal(h.frames.size,0);assert.equal(h.listeners(),0);assert.equal(h.cancels,0);
h=harness();h.loader.ready();h.win.emit('pagehide');assert.equal(h.nodes.get('loading').hidden,true);assert.equal(h.timers.size,0);assert.equal(h.cancels,0);h.loader.dispose();
cases.push('Disposal cancels pending paint; ready pagehide finishes fade without destroying a cached running scene');
const source=readFileSync(new URL('../src/main.js',import.meta.url),'utf8'),html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.equal((source.match(/await loadingScreen\.stage\(/g)||[]).length,4);
assert.ok(source.indexOf("stage(1, 'Building room')")<source.indexOf('const lib = buildLibrary'));
assert.ok(source.indexOf("stage(2, 'Adding scenery')")>source.indexOf('const exitGeometry ='));
assert.ok(source.indexOf('drawFrame();\nloop.setPaused')<source.indexOf('loadingScreen.ready('));
assert.ok(!/canvas\.style\.opacity|loadingScreen.*requestPointerLock/.test(source));
assert.match(html,/prefers-reduced-motion: reduce/);assert.match(html,/role="status" aria-live="polite"/);
assert.match(html,/script id="library-entry" type="module"/);assert.match(html,/window\.addEventListener\('error', failed, true\)/);
cases.push('Actual startup hooks reflect construction stages and first draw; canvas/capture unchanged; HTML covers module-load errors, reduced motion and live status');
const bootstrap=html.match(/<script id="library-boot-errors">\s*([\s\S]*?)<\/script>/)[1];
h=harness();h.loader.dispose();
vm.runInNewContext(bootstrap,{document:{getElementById:id=>h.nodes.get(id)},window:h.win,location:h.win.location});
h.nodes.get('loading-retry').hidden=true;
h.win.emit('error',{target:{tagName:'SCRIPT',type:'module',id:''}});
assert.equal(h.nodes.get('loading-retry').hidden,false);assert.equal(h.nodes.get('loading-status').textContent,'Library could not load.');
h.nodes.get('loading-retry').emit('click');assert.equal(h.reloads,1);h.win.__libraryBootErrorCleanup();assert.equal(h.listeners(),0);
cases.push('Actual module-error bootstrap catches Vite production scripts without the source ID; retry reloads once and bootstrap cleanup removes all listeners');
let reveals=0,readyCalls=0,failCalls=0;
const handoff={active:true,ready(){readyCalls++;},fail(){failCalls++;this.active=false;}};
h=harness(false,handoff);h.loader.ready(()=>reveals++);
assert.equal(readyCalls,1);assert.equal(h.nodes.get('loading').hidden,true);assert.equal(h.timers.size,0);
assert.equal(reveals,0);assert.equal(h.focuses,0);assert.deepEqual(h.observers[0].options.attributeFilter,['data-room-handoff']);
h.mutate();assert.equal(reveals,0);handoff.active=false;h.mutate();h.mutate();
assert.equal(reveals,1);assert.equal(h.focuses,1);assert.equal(h.observers[0].connected,false);h.loader.dispose();
cases.push('A valid incoming preview suppresses the normal ready fade; input-release callback and canvas focus wait until the canonical cover is removed exactly once');
const reducedHandoff={active:true,ready(){this.active=false;},fail(){this.active=false;}};
h=harness(true,reducedHandoff);h.loader.ready(()=>reveals++);assert.equal(reveals,2);assert.equal(h.focuses,1);assert.equal(h.observers[0].connected,false);h.loader.dispose();
h=harness();h.loader.ready(()=>reveals++);assert.equal(reveals,3);assert.equal(h.focuses,0);h.loader.dispose();
cases.push('Reduced-motion cover removal releases synchronously; direct entry retains its loader and does not steal focus');
handoff.active=true;h=harness(false,handoff);h.loader.fail();assert.equal(handoff.active,false);
assert.equal(h.nodes.get('loading').hidden,false);assert.equal(h.nodes.get('loading-retry').hidden,false);h.loader.dispose();
handoff.active=true;h=harness(false,handoff);h.loader.ready(()=>reveals++);h.win.emit('pagehide');handoff.active=false;h.mutate();
assert.equal(reveals,3);assert.equal(h.focuses,0);assert.equal(h.observers[0].connected,false);h.loader.dispose();
handoff.active=true;h=harness(false,handoff);h.doc.hasFocus=()=>false;h.loader.ready(()=>reveals++);handoff.active=false;h.mutate();
assert.equal(reveals,4);assert.equal(h.focuses,0);h.loader.dispose();
cases.push('Handoff failure exposes existing Retry; pagehide cancels reveal observation; background completion releases without moving focus');
const failedBridge={active:true,fail(){this.active=false;}};
h=harness();h.loader.dispose();h.win.pazneriaRoomHandoff=failedBridge;
vm.runInNewContext(bootstrap,{document:{getElementById:id=>h.nodes.get(id)},window:h.win,location:h.win.location});
h.win.emit('error',{target:{tagName:'SCRIPT',type:'module'}});assert.equal(failedBridge.active,false);assert.equal(h.nodes.get('loading-retry').hidden,false);
h.win.__libraryBootErrorCleanup();assert.equal(h.listeners(),0);
assert.match(source,/loop\.setPaused\('handoff', Boolean\(window\.pazneriaRoomHandoff\?\.active\)\)/);
assert.match(source,/loadingScreen\.ready\(\(\) => \{ releaseMovement\(\); loop\.setPaused\('handoff', false\); \}\)/);
assert.ok(source.indexOf('drawFrame();\nloop.setPaused')<source.indexOf("loop.setPaused('handoff', Boolean" ,source.indexOf('drawFrame();\nloop.setPaused')));
assert.match(html,/html\[data-room-handoff\] #loading:not\(\[data-state="error"\]\) \{ visibility: hidden; \}/);
cases.push('Actual module-load errors remove the shared cover; host gates its existing movement/look/reader controls until cover removal after the matching draw');
console.log(JSON.stringify({status:'passed',cases,scope:'Actual loading controller with CPU event/scheduler mocks and host-source checks; transition rendering and WebGL errors require browser QA'},null,2));
