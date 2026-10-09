import * as THREE from 'three';
import { rayBoxDistance, isEditingTarget } from '../interaction-core.js';
import { STUDY, inStudy } from './layout.js';

const DESK={x0:3.30,x1:3.85,y0:.85,y1:.90,z0:-16.15,z1:-15.55};
export function installStudyInteraction({document,window,canvas,camera,player,solids,door,look,releaseMovement,setPaused,canInteract,controls,toast}) {
  const removers=[], direction=new THREE.Vector3();let disposed=false, press=null, inside=false, hintTime=0;
  const make=(tag,cls,text)=>{const el=document.createElement(tag);el.className=cls;if(text)el.textContent=text;return el;};
  const hint=make('button','study-hint');hint.hidden=true;hint.type='button';
  const badge=make('div','study-location');badge.hidden=true;
  const label=make('span','study-label','MARGINALIA');const sub=make('span','study-subtitle','Jippity’s quiet room');
  const leave=make('button','study-return','Return to Library');leave.type='button';badge.append(label,sub,leave);
  const dialog=make('dialog','study-note');dialog.setAttribute('aria-labelledby','study-note-title');
  const paper=make('article','study-paper');
  const eyebrow=make('p','study-eyebrow','A PUBLIC SAMPLE · THE QUIET HOURS');
  const title=make('h1','','A room for unfinished thoughts.');title.id='study-note-title';
  const copy=make('p','','Leave a question on the page. Follow it further than you planned. Let the light change while you read.');
  const ending=make('p','','There is no hurry here.');const signature=make('p','study-signature','Jippity');
  const close=make('button','study-close','Return to the study');close.type='button';
  paper.append(eyebrow,title,copy,ending,signature,close);dialog.append(paper);
  document.body.append(hint,badge,dialog);
  const find=make('button','study-control','Find the hidden study');find.type='button';
  const note=make('p','study-control-note','Experimental public set · sample content only. The hidden entrance is theatrical; it provides no security.');
  controls.append(find,note);
  function on(target,type,fn,options){target.addEventListener(type,fn,options);removers.push(()=>target.removeEventListener(type,fn,options));}
  function moveTo(position,yaw=0){releaseMovement();player.pos.set(...position);player.yaw=yaw;player.pitch=0;player.vy=0;player.smoothY=position[1];player.eyeCur=player.eye;canvas.focus({preventScroll:true});}
  function closeNote(){if(!dialog.open)return;dialog.close();setPaused(false);look.resume();releaseMovement();canvas.focus({preventScroll:true});}
  function showNote(){releaseMovement();look.pause();setPaused(true);hint.hidden=true;dialog.showModal();close.focus();}
  function target(){
    if(disposed||dialog.open||!canInteract())return null;
    camera.getWorldDirection(direction);
    const p=camera.position, reach=2.2;
    const visible=box=>{const distance=rayBoxDistance(p,direction,box,reach);if(distance===null)return false;return !solids.some(s=>{const hit=rayBoxDistance(p,direction,s,distance);return hit!==null&&hit+.025<distance;});};
    if(!door.requested && !inStudy(player.pos)) {
      // The case itself is the support; allow only the measured front approach.
      if(p.z>-9.42&&p.y<3.4&&visible(STUDY.latch))return 'open';
    }
    if(inStudy(player.pos)&&visible(STUDY.returnPull))return door.requested?'close':'open';
    const distance=rayBoxDistance(p,direction,DESK,reach);
    if(distance!==null && inStudy(player.pos)) {
      for(const s of solids){const hit=rayBoxDistance(p,direction,s,distance);if(hit!==null&&hit+.025<distance)return null;}
      return 'note';
    }
    return null;
  }
  function use(action=target()) {
    if(!action||disposed)return false;
    if(action==='note')showNote();
    else if(action==='close'){door.closeDoor();toast('The bookcase settles closed. Use the brass pull to reopen it.');}
    else {door.openDoor();toast('The gilt leaf releases the bookcase.');}
    return true;
  }
  function refresh(){const hit=target();hint.hidden=!hit;hint.textContent=hit==='note'?'E · Read the loose page':hit==='close'?'E · Close the bookcase':inside?'E · Open the bookcase':'E · Pull the gilt leaf';}
  on(window,'keydown',e=>{
    if(e.defaultPrevented||e.repeat||isEditingTarget(e.target))return;
    if(e.code==='KeyE'&&use()){e.preventDefault();e.stopImmediatePropagation();}
  },true);
  on(canvas,'mousedown',e=>{press=e.button===0?{x:e.clientX,y:e.clientY,locked:document.pointerLockElement===canvas,moved:0}:null;});
  on(window,'mousemove',e=>{if(press)press.moved+=Math.abs(e.movementX||0)+Math.abs(e.movementY||0);});
  on(canvas,'click',e=>{const p=press;press=null;if(!p||e.button!==0||p.moved>4||Math.hypot(e.clientX-p.x,e.clientY-p.y)>4||p.locked!==(document.pointerLockElement===canvas))return;if(use()){e.preventDefault();e.stopImmediatePropagation();}});
  on(window,'blur',()=>{press=null;hint.hidden=true;});
  on(hint,'click',()=>use());
  on(close,'click',closeNote);
  on(dialog,'cancel',e=>{e.preventDefault();closeNote();});
  on(leave,'click',()=>{closeNote();door.openDoor();moveTo(STUDY.entry);toast('Back in the Library.');});
  on(find,'click',()=>{
    // The existing controls dialog owns its pause and focus lifecycle.
    moveTo(STUDY.entry,-.54);toast('North wall, two bays to the right of the notebook. Close Controls to explore.');
  });
  return {
    get isOpen(){return dialog.open;},
    setInside(value){inside=value;badge.hidden=!inside;},
    update(){hintTime++;if(hintTime%8===0)refresh();},
    use,target,closeNote,
    dispose(){if(disposed)return;closeNote();disposed=true;for(const remove of removers)remove();for(const el of [hint,badge,dialog,find,note])el.remove();},
  };
}
