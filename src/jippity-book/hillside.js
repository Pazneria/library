import * as THREE from 'three';
import content from './content.json';
import { createPhysicalBook } from './book.js';
import { createBookReader } from './reader.js';
import { installBookInteraction } from './interaction.js';
import { pickBook, HILLSIDE_PLACEMENT } from './picking.js';
import './reader.css';

// These two exports are the only changes needed at the draft's construction/reader hooks.
export function addHillsideBooks(scene,anchors,legacyContent,legacyFactory) {
  const legacy=legacyFactory(scene,anchors.filter(a=>a.id!=='table-drums'),legacyContent);
  const book=createPhysicalBook({THREE,content,position:HILLSIDE_PLACEMENT.position,yaw:HILLSIDE_PLACEMENT.yaw});
  scene.add(book.object);
  let disposed=false;
  return {book,objects:[...legacy.objects,book.object],
    dispose(){if(disposed)return;disposed=true;legacy.dispose();book.dispose();}
  };
}
export function installHillsideReading(options) {
  const {camera,solids,legacyFactory,...legacyOptions}=options;
  const {document:doc,window:win,canvas,hint,look,setPaused,releaseMovement,returnFocus,canInteract}=options;
  let ownsReadingClass=false;
  const reader=createBookReader({document:doc,window:win,content,look,releaseMovement,returnFocus,
    setPaused:paused=>{
      // Honor PR2's existing reading visibility hook; do not change its overlay.
      if(paused){ownsReadingClass=!doc.body.classList.contains('reading-open');doc.body.classList.add('reading-open');}
      else if(ownsReadingClass){doc.body.classList.remove('reading-open');ownsReadingClass=false;}
      setPaused(paused);
    }
  });
  const direction=new THREE.Vector3();
  function target(event){
    camera.updateMatrixWorld();
    if(event&&doc.pointerLockElement!==canvas&&Number.isFinite(event.clientX)&&Number.isFinite(event.clientY)){
      const rect=canvas.getBoundingClientRect();
      if(!rect.width||!rect.height)return null;
      const x=(event.clientX-rect.left)/rect.width,y=(event.clientY-rect.top)/rect.height;
      if(x<0||x>1||y<0||y>1)return null;
      direction.set(x*2-1,1-y*2,.5).unproject(camera).sub(camera.position).normalize();
    }else camera.getWorldDirection(direction);
    return pickBook(camera.position,direction,solids);
  }
  const legacy=legacyFactory({...legacyOptions,
    canInteract:()=>!reader.isOpen&&!reader.pendingBack&&canInteract(),
    getTarget:()=>{const found=legacyOptions.getTarget();return found?.id==='table-drums'?null:found;}
  });
  const interaction=installBookInteraction({window:win,document:doc,canvas,hint,reader,content,getTarget:target,
    canInteract:()=>!legacy.isOpen&&canInteract()});
  let disposed=false;
  return {
    get isOpen(){return reader.isOpen||legacy.isOpen;},
    updateHint(){
      if(disposed)return;
      if(reader.isOpen){hint.hidden=true;return;}
      if(!interaction.updateHint())legacy.updateHint();
    },
    close(){if(reader.isOpen)reader.close();else legacy.close();},
    dispose(){
      if(disposed)return;disposed=true;
      interaction.dispose();reader.dispose();legacy.dispose();
    }
  };
}
