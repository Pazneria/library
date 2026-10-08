const editing=target=>Boolean(target?.closest?.('input, textarea, select, button, a, [contenteditable], [role="textbox"]'));
// Input arbitration is owned here; the host movement/look implementation is untouched.
export function installBookInteraction({window:win,document:doc,canvas,hint,reader,content,getTarget,canInteract}) {
  const removers=[];let press=null,disposed=false;
  const on=(target,type,fn,capture=false)=>{target.addEventListener(type,fn,capture);removers.push(()=>target.removeEventListener(type,fn,capture));};
  const eligible=()=>!disposed&&!reader.isOpen&&!reader.pendingBack&&canInteract();
  function openNearby(event){
    if(!eligible()||!getTarget(event))return false;
    press=null;hint.hidden=true;return reader.open();
  }
  on(win,'keydown',event=>{
    if(event.code!=='KeyE'||event.repeat||event.altKey||event.ctrlKey||event.metaKey||editing(event.target))return;
    if(openNearby()){event.preventDefault();event.stopImmediatePropagation();}
  },true);
  on(canvas,'mousedown',event=>{
    press=null;
    if(event.button!==0||!eligible()||!getTarget(event))return;
    press={x:event.clientX,y:event.clientY,locked:doc.pointerLockElement===canvas,distance:0,dragged:false};
    // An intentional book press must not request a new pointer lock underneath the modal.
    event.stopImmediatePropagation();
  },true);
  on(win,'mousemove',event=>{
    if(!press)return;
    const moved=press.locked?Math.hypot(event.movementX||0,event.movementY||0):Math.hypot(event.clientX-press.x,event.clientY-press.y);
    if(press.locked)press.distance+=moved;else press.distance=Math.max(press.distance,moved);
    if(press.distance>5)press.dragged=true;
  },true);
  on(canvas,'click',event=>{
    const pressed=press;press=null;
    if(event.button!==0||!pressed||pressed.dragged)return;
    if(openNearby(event)){event.preventDefault();event.stopImmediatePropagation();}
  },true);
  on(win,'mouseup',event=>{if(event.target!==canvas)press=null;},true);
  on(canvas,'mouseleave',()=>{if(doc.pointerLockElement!==canvas)press=null;});
  on(win,'blur',()=>{press=null;});
  on(doc,'visibilitychange',()=>{if(doc.visibilityState!=='visible')press=null;});
  on(hint,'click',event=>{if(openNearby()){event.preventDefault();event.stopImmediatePropagation();}},true);
  return {
    openNearby,
    updateHint(){
      const active=eligible()&&Boolean(getTarget());
      hint.classList.toggle('jb-prompt',active);
      if(active){hint.textContent='E — Read '+content.title;hint.hidden=false;}
      return active;
    },
    dispose(){if(disposed)return;disposed=true;press=null;removers.forEach(fn=>fn());hint.classList.remove('jb-prompt');}
  };
}
