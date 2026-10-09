import * as THREE from 'three';
import { BOOK_CATALOG } from './catalog.js';
import { BOOK_PLACEMENTS } from './placements.js';
import { compilePlacements, pickPlacedBooks } from './placement.js';
import { createBookCollection } from './collection.js';
import { createInspectableReader } from './inspect.js';
import { installBookInteraction } from '../jippity-book/interaction.js';
import '../jippity-book/reader.css';
import './library-books.css';

// Keep the injectable asset API without retaining unused Three exports in the
// production bundle when passing through the reusable collection factory.
const BOOK_THREE = Object.freeze({
  BufferGeometry: THREE.BufferGeometry, BufferAttribute: THREE.BufferAttribute,
  CanvasTexture: THREE.CanvasTexture, MeshStandardMaterial: THREE.MeshStandardMaterial,
  Mesh: THREE.Mesh, SRGBColorSpace: THREE.SRGBColorSpace
});

export function addHillsideBooks(scene,anchors,legacyContent,legacyFactory,{catalog=BOOK_CATALOG,placements=BOOK_PLACEMENTS,makeCanvas}={}) {
  const collection=createBookCollection({THREE:BOOK_THREE,catalog,placements,makeCanvas});
  const ids=new Set(placements.map(p=>p.id));
  const remaining=anchors.filter(a=>a.kind==='book'&&!ids.has(a.id));
  const legacy=remaining.length?legacyFactory(scene,remaining,legacyContent):{objects:[],dispose(){}};
  scene.add(...collection.objects);
  let disposed=false;
  return {...collection,book:collection.books.find(b=>b.placement.contentId==='drums'),objects:[...collection.objects,...legacy.objects],
    dispose(){if(disposed)return;disposed=true;legacy.dispose();collection.dispose();}
  };
}
export function installHillsideReading(options) {
  const {camera,solids,legacyFactory,catalog=BOOK_CATALOG,placements=BOOK_PLACEMENTS,...legacyOptions}=options;
  const {document:doc,window:win,canvas,hint,look,setPaused,releaseMovement,returnFocus,canInteract}=options;
  const compiled=compilePlacements(placements,catalog),ids=new Set(placements.map(p=>p.id)),readers=new Map(),direction=new THREE.Vector3();
  const removers=[];let selected=null,disposed=false;
  const isOpen=()=>[...readers.values()].some(r=>r.isOpen);
  const pendingBack=()=>[...readers.values()].some(r=>r.pendingBack);
  function reconcile(){
    const open=isOpen();doc.body.classList.toggle('reading-open',open);setPaused(open);
  }
  function readerFor(placement){
    if(!readers.has(placement.id)){
      const reader=createInspectableReader({document:doc,window:win,releaseMovement,returnFocus,
        look:{pause:()=>look.pause(),resume:()=>{if(!isOpen())look.resume();}},setPaused:reconcile},catalog[placement.contentId],placement);
      readers.set(placement.id,reader);
    }
    return readers.get(placement.id);
  }
  function target(event){
    camera.updateMatrixWorld();
    if(event&&doc.pointerLockElement!==canvas&&Number.isFinite(event.clientX)&&Number.isFinite(event.clientY)){
      const rect=canvas.getBoundingClientRect();if(!rect.width||!rect.height)return null;
      const x=(event.clientX-rect.left)/rect.width,y=(event.clientY-rect.top)/rect.height;
      if(x<0||x>1||y<0||y>1)return null;
      direction.set(x*2-1,1-y*2,.5).unproject(camera).sub(camera.position).normalize();
    }else camera.getWorldDirection(direction);
    selected=pickPlacedBooks(camera.position,direction,compiled,solids);return selected;
  }
  const legacy=legacyFactory({...legacyOptions,canInteract:()=>!isOpen()&&!pendingBack()&&canInteract(),
    getTarget:()=>{const found=legacyOptions.getTarget();return found&&ids.has(found.id)?null:found;}});
  const readerProxy={get isOpen(){return isOpen();},get pendingBack(){return pendingBack();},open(){return selected?readerFor(selected).open():false;}};
  const interaction=installBookInteraction({window:win,document:doc,canvas,hint,reader:readerProxy,
    content:{get title(){return selected?catalog[selected.contentId].content.title:'';}},getTarget:target,canInteract:()=>!legacy.isOpen&&canInteract()});
  // The controls dialog offers a keyboard/screen-reader route to the same
  // public copies. Choosing a book doesn't teleport the visitor or capture input.
  const controls=options.controls||doc.getElementById?.('overlay'),mount=controls?.querySelector('.card');
  let shelf=null;
  if(mount){
    shelf=doc.createElement('section');shelf.className='lb-catalog';shelf.setAttribute('aria-label','Public books');
    const label=doc.createElement('p');label.textContent='Public books';shelf.append(label);
    for(const placement of compiled){
      const button=doc.createElement('button');button.type='button';button.className='lb-catalog-book';
      button.textContent=catalog[placement.contentId].content.title+' · '+placement.surface;
      const open=()=>{if(disposed||isOpen()||pendingBack()||legacy.isOpen)return;controls.close();readerFor(placement).open();};
      button.addEventListener('click',open);removers.push(()=>button.removeEventListener('click',open));shelf.append(button);
    }
    mount.append(shelf);
  }
  return {
    get isOpen(){return isOpen()||legacy.isOpen;},
    updateHint(){
      if(disposed)return;
      if(isOpen()){hint.hidden=true;return;}
      if(interaction.updateHint())hint.textContent='E — Inspect '+catalog[selected.contentId].content.title;
      else legacy.updateHint();
    },
    close(){const open=[...readers.values()].find(r=>r.isOpen);if(open)open.close();else legacy.close();},
    dispose(){if(disposed)return;disposed=true;interaction.dispose();removers.forEach(fn=>fn());shelf?.remove();
      for(const reader of readers.values())reader.dispose();readers.clear();legacy.dispose();}
  };
}
