// CPU DOM/history fixture; does not start a browser.
const assert=(value,message)=>{if(!value)throw new Error(message);};
class Events {
  constructor(){this.listeners=new Map();}
  addEventListener(type,fn,capture=false){const items=this.listeners.get(type)||[];items.push({fn,capture});this.listeners.set(type,items);}
  removeEventListener(type,fn,capture=false){this.listeners.set(type,(this.listeners.get(type)||[]).filter(x=>x.fn!==fn||x.capture!==capture));}
  emit(type,props={}){
    const event={type,target:this,button:0,prevented:false,stopped:false,
      preventDefault(){this.prevented=true;},stopImmediatePropagation(){this.stopped=true;},...props};
    for(const {fn} of [...(this.listeners.get(type)||[])].sort((a,b)=>Number(b.capture)-Number(a.capture))){
      fn(event);if(event.stopped)break;
    }return event;
  }
}
export function makeTestHarness(api,content,settings={}){
  const win=new Events(),doc=new Events(),all=[],closeEvents=[],popEvents=[],timers=new Map();let timerId=0,index=0;
  class Element extends Events {
    constructor(tag){super();this.tagName=tag.toUpperCase();this.children=[];this.className='';this.attributes={};this.open=false;this.isConnected=true;this.textContent='';this.disabled=false;all.push(this);
      const classes=new Set();this.classList={add:x=>classes.add(x),remove:x=>classes.delete(x),contains:x=>classes.has(x),toggle:(x,v)=>{if(v??!classes.has(x))classes.add(x);else classes.delete(x);}};}
    append(...children){for(const child of children){child.parent=this;this.children.push(child);}}
    replaceChildren(...children){this.children=[];this.append(...children);}
    setAttribute(k,v){this.attributes[k]=v;}
    getAttribute(k){return this.attributes[k];}
    focus(){doc.activeElement=this;}
    remove(){this.isConnected=false;if(this.parent)this.parent.children=this.parent.children.filter(x=>x!==this);}
    closest(selector){if(this.editable&&selector.includes('contenteditable'))return this;return selector.split(',').some(x=>x.trim()===this.tagName.toLowerCase())?this:null;}
    showModal(){if(settings.modalFails)throw Error('Native dialog unavailable');this.open=true;}
    close(){this.open=false;closeEvents.push(()=>this.emit('close'));}
    animate(){const a={cancelled:false,cancel(){this.cancelled=true;}};animations.push(a);return a;}
  }
  const animations=[];doc.createElement=tag=>new Element(tag);doc.createElementNS=(_,tag)=>new Element(tag);
  doc.body=new Element('body');doc.visibilityState='visible';doc.pointerLockElement=null;
  const canvas=new Element('canvas'),hint=new Element('button'),returnFocus=new Element('button');doc.activeElement=canvas;
  const states=[{host:'untouched'}];
  win.location={href:'https://pazneria.github.io/library/'};
  win.history={
    get state(){return states[index];},
    pushState(value){if(settings.historyFails)throw Error('History disabled');states.splice(index+1);states.push(value);index++;},
    replaceState(value){states[index]=value;},
    back(){if(settings.throwBack)throw Error('Traversal blocked');if(settings.dropBack)return;popEvents.push(()=>{if(index>0)index--;win.emit('popstate',{state:states[index]});});},
    forward(){popEvents.push(()=>{if(index<states.length-1)index++;win.emit('popstate',{state:states[index]});});}
  };
  win.setTimeout=fn=>{const id=++timerId;timers.set(id,fn);return id;};
  win.clearTimeout=id=>timers.delete(id);
  win.matchMedia=()=>({matches:Boolean(settings.reduced)});
  const calls={pause:0,resume:0,release:0,paused:false,errors:0};
  const reader=api.createBookReader({document:doc,window:win,content,look:{pause(){calls.pause++;},resume(){calls.resume++;}},
    releaseMovement(){calls.release++;},setPaused(value){calls.paused=value;},returnFocus,onError(){calls.errors++;}});
  const find=name=>all.find(x=>x.className.split(' ').includes(name));
  return {win,doc,canvas,hint,returnFocus,reader,calls,all,animations,timers,states,find,
    flushPop(){assert(popEvents.length,'Expected queued history traversal');popEvents.shift()();},
    flushClose(){while(closeEvents.length)closeEvents.shift()();},
    flushTimers(){for(const [id,fn] of [...timers]){timers.delete(id);fn();}},
    listeners(){return all.reduce((n,e)=>n+[...e.listeners.values()].reduce((n,a)=>n+a.length,0),[...win.listeners.values(),...doc.listeners.values()].reduce((n,a)=>n+a.length,0));}
  };
}
