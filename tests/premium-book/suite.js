import { makeTestHarness } from './harness.js';
// Portable CPU suite. Real implementation, mock DOM/history only; no browser.
export function runCPUSuite(api,content) {
  const checks=[];
  const assert=(condition,message)=>{if(!condition)throw new Error(message);};
  const equal=(a,b,message)=>assert(a===b||JSON.stringify(a)===JSON.stringify(b),message);
  function test(name,fn){fn();checks.push(name);}
  const harness=settings=>makeTestHarness(api,content,settings);
  test('Content rejects invalid links/pages and unknown source IDs before DOM construction',()=>{
    api.validateContent(content);
    for(const mutate of [b=>b.pages[0].sourceIds=['unknown'],b=>b.sources[0].href='javascript:alert(1)',b=>b.cover.lines=[],b=>b.pages=[],b=>b.sources.push({...b.sources[0]})]){
      const copy=JSON.parse(JSON.stringify(content));mutate(copy);let rejected=false;
      try{api.validateContent(copy);}catch{rejected=true;}assert(rejected,'Invalid content accepted');
    }
  });
  test('Page bounds, odd page counts, remembered place and final disposal',()=>{
    const s=api.createReadingState(5);assert(s.open(),'Open');equal(s.count,3,'Three spreads');
    s.go(999);equal(s.spread,2,'Upper clamp');s.go(-8);equal(s.spread,0,'Lower clamp');
    s.go(1);s.close();s.open();equal(s.spread,1,'Remember place');
    s.dispose();assert(!s.open()&&!s.go(0),'Disposed state final');
  });
  test('Oriented picking normalizes rays, rejects misses/range/invalid rays and respects walls',()=>{
    const placement={position:[0,0,0],yaw:.5,reach:2.2};
    const from={x:0,y:1,z:0},down={x:0,y:-5,z:0};
    assert(api.pickBook(from,down,[],placement),'Down ray hits');
    assert(!api.pickBook({x:1,y:1,z:0},down,[],placement),'Side miss');
    assert(!api.pickBook({x:0,y:3,z:0},down,[],placement),'Reach');
    assert(!api.pickBook(from,{x:NaN,y:-1,z:0},[],placement),'NaN');
    assert(!api.pickBook(from,{x:0,y:0,z:0},[],placement),'Zero direction');
    assert(!api.pickBook(from,down,[{x0:-1,x1:1,y0:.5,y1:.6,z0:-1,z1:1}],placement),'Occlusion');
    assert(!api.pickBook({x:.15,y:1,z:.28},down,[],{...placement,yaw:0}),'Empty space beside bookmark');
  });
  test('Geometry is finite, atlas UVs bounded, normals unit, and cover/spine faces point outward',()=>{
    const g=api.buildBookGeometry();assert(g.triangles<600,'Bounded tessellation');
    assert([...g.position,...g.normal,...g.uv].every(Number.isFinite),'Finite buffers');
    assert([...g.uv].every(v=>v>0&&v<1),'UV atlas gutter');
    for(let i=0;i<g.normal.length;i+=3)assert(Math.abs(Math.hypot(...g.normal.slice(i,i+3))-1)<1e-5,'Unit normal');
    const top=[],spine=[];
    for(let i=0;i<g.position.length;i+=9){
      const p=[0,1,2].map(k=>(g.position[i+k]+g.position[i+3+k]+g.position[i+6+k])/3);
      if(p[1]>.06399)top.push(g.normal[i+1]);
      if(p[0]<-.177&&Math.abs(p[2])<.1)spine.push(g.normal[i]);
    }
    assert(top.length&&top.every(n=>n>.99),'Upward cover');assert(spine.length&&spine.every(n=>n<0),'Outward spine');
  });
  test('Native modal has safe text/links and labels, pauses host, then restores focus on Escape',()=>{
    const h=harness();assert(h.reader.open(),'Open');
    assert(h.reader.isOpen&&h.reader.element.open&&h.calls.paused,'Modal blocks movement');
    equal(h.doc.activeElement,h.find('jb-close'),'Close button focus');
    assert(h.reader.element.getAttribute('aria-label')===content.title,'Named dialog');h.reader.go(2);
    const links=h.all.filter(x=>x.tagName==='A');
    assert(links.length>0&&links.every(x=>x.rel==='noopener noreferrer'&&x.target==='_blank'&&x.referrerPolicy==='no-referrer'),'Safe source links');
    assert(h.reader.element.emit('cancel').prevented,'Native Escape intercepted');
    assert(!h.reader.isOpen&&!h.calls.paused,'Synchronous resume');equal(h.doc.activeElement,h.returnFocus,'Focus returned');
    h.flushPop();h.flushClose();h.reader.dispose();
  });
  test('Navigation updates in place; arrows/Home/End work while editors and modifiers stay native',()=>{
    const h=harness();h.reader.open();h.reader.element.emit('keydown',{key:'End',target:h.reader.element});
    equal(h.reader.spread,2,'End');equal(h.states.length,2,'No page history pushes');
    h.reader.element.emit('keydown',{key:'Home',target:h.reader.element});equal(h.reader.spread,0,'Home');
    h.find('jb-page-button').emit('click');equal(h.reader.spread,0,'No negative pages');
    h.reader.element.emit('keydown',{key:'ArrowRight',target:h.find('jb-contents')});equal(h.reader.spread,0,'Select native');
    h.reader.element.emit('keydown',{key:'ArrowRight',ctrlKey:true,target:h.reader.element});equal(h.reader.spread,0,'Modifier native');
    h.reader.element.emit('keydown',{key:'ArrowRight',target:h.reader.element});equal(h.reader.spread,1,'Right arrow');
    assert(h.animations.length>0,'Animation requested');h.reader.dispose();
  });
  test('Back/Forward restores spread and preserves host history fields',()=>{
    const h=harness();h.reader.open();h.reader.go(1);equal(h.win.history.state.host,'untouched','Host field');
    h.win.history.back();h.flushPop();assert(!h.reader.isOpen&&!h.calls.paused,'Back closes');
    h.win.history.forward();h.flushPop();assert(h.reader.isOpen,'Forward opens');equal(h.reader.spread,1,'Place');h.reader.dispose();
  });
  test('Rapid cycles and stale dialog events are safe; disposal clears all listeners and timers',()=>{
    const h=harness();h.reader.open();h.reader.close();assert(!h.reader.open(),'Guard traversal');
    h.flushPop();assert(h.reader.open(),'Reopen');h.flushClose();assert(h.reader.isOpen,'Ignore stale close');
    for(let i=0;i<30;i++){h.reader.close();h.reader.close();h.flushPop();h.reader.open();h.flushClose();}
    assert(h.reader.isOpen&&h.calls.paused,'Latest action wins');h.reader.dispose();
    assert(!h.calls.paused&&!h.reader.isOpen,'Dispose resumes');equal(h.timers.size,0,'No timers');equal(h.listeners(),0,'No listeners');
    h.reader.dispose();assert(!h.reader.open(),'Cannot resurrect');
  });
  test('History suppression/failure and modal failure cannot strand movement',()=>{
    const dropped=harness({dropBack:true});dropped.reader.open();dropped.reader.close();dropped.flushTimers();
    assert(!dropped.reader.pendingBack&&!dropped.calls.paused,'Guard recovered');assert(dropped.reader.open(),'Reopens');dropped.reader.dispose();
    const noHistory=harness({historyFails:true});assert(noHistory.reader.open(),'No-history reading');noHistory.reader.close();
    assert(!noHistory.reader.pendingBack&&!noHistory.calls.paused,'No phantom entry');noHistory.reader.dispose();
    const brokenBack=harness({throwBack:true});brokenBack.reader.open();brokenBack.reader.close();
    assert(!brokenBack.reader.pendingBack&&!brokenBack.calls.paused,'Throwing traversal resumes');equal(brokenBack.win.history.state,{host:'untouched'},'Failed traversal removes owned marker');brokenBack.reader.dispose();
    const noModal=harness({modalFails:true});assert(!noModal.reader.open(),'Modal failure');assert(!noModal.calls.paused&&!noModal.reader.isOpen,'Rollback');noModal.reader.dispose();
  });
  test('Reduced motion skips animation and odd trailing pages have an endpaper',()=>{
    const h=harness({reduced:true});h.reader.open();h.reader.go(1);equal(h.animations.length,0,'No animation');h.reader.dispose();
    const original=content;content={...content,pages:content.pages.slice(0,5)};const o=harness();o.reader.open();o.reader.go(2);
    assert(o.all.some(x=>x.getAttribute('aria-label')==='Blank endpaper'),'Endpaper');o.reader.dispose();content=original;
  });
  test('E/click ignores repeats, modifiers, editors, misses and drag—including locked mouse deltas',()=>{
    const h=harness();let allowed=true,hit=true;
    const input=api.installBookInteraction({window:h.win,document:h.doc,canvas:h.canvas,hint:h.hint,reader:h.reader,content,canInteract:()=>allowed,getTarget:()=>hit});
    assert(input.updateHint()&&!h.hint.hidden,'Hint');
    h.win.emit('keydown',{code:'KeyE',repeat:true});assert(!h.reader.isOpen,'Repeat');
    h.win.emit('keydown',{code:'KeyE',ctrlKey:true});assert(!h.reader.isOpen,'Modifier');
    h.win.emit('keydown',{code:'KeyE',target:h.doc.createElement('textarea')});assert(!h.reader.isOpen,'Editor');
    h.canvas.emit('mousedown',{clientX:20,clientY:20});h.win.emit('mousemove',{clientX:31,clientY:20});h.canvas.emit('click',{clientX:31,clientY:20});assert(!h.reader.isOpen,'Drag');
    h.doc.pointerLockElement=h.canvas;h.canvas.emit('mousedown',{clientX:20,clientY:20});
    h.win.emit('mousemove',{movementX:3,movementY:0});h.win.emit('mousemove',{movementX:3,movementY:0});h.canvas.emit('click');assert(!h.reader.isOpen,'Locked drag');
    h.doc.pointerLockElement=null;h.canvas.emit('mousedown',{clientX:20,clientY:20});h.canvas.emit('click',{clientX:20,clientY:20});
    assert(h.reader.isOpen,'Click opens');h.reader.close();h.flushPop();h.flushClose();
    hit=false;h.win.emit('keydown',{code:'KeyE'});assert(!h.reader.isOpen,'Miss');hit=true;allowed=false;
    h.win.emit('keydown',{code:'KeyE'});assert(!h.reader.isOpen,'Blocked');allowed=true;
    assert(h.win.emit('keydown',{code:'KeyE'}).prevented&&h.reader.isOpen,'E opens');
    input.dispose();h.reader.dispose();equal(h.listeners(),0,'Interaction disposal');
  });
  return {status:'passed',checks,scope:'CPU: actual source; mock DOM/history only. No browser, native input or GPU.'};
}
