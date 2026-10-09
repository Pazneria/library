import * as THREE from 'three';
import { Builder } from '../build.js';
import { BookSet } from '../books.js';
import { rng } from '../textures.js';
import { carveStudy } from './carve.js';
import { buildStudyRoom } from './room.js';
import { STUDY, createStudyDoor, inStudy } from './layout.js';
import { installStudyInteraction } from './interaction.js';

export function prepareStudy({lib,books,materials:M,scene,makeCanvas}) {
  const movingBuilder=new Builder(rng(194)), movingBooks=new BookSet(rng(195));
  const report=carveStudy(lib,books,M,movingBuilder,movingBooks);
  const leaf=new THREE.Group();leaf.name='Marginalia • hinged bookcase';leaf.position.set(STUDY.hinge.x,0,STUDY.hinge.z);
  const trim=movingBuilder, f=trim.frame(0,0,0);
  // Rear edges cap the clipped cabinetry and make its thickness clear in profile.
  for(const x of [.014,STUDY.width-.014])f.box(M.walnut,.028,3.46,.40,x,1.73,.20);
  for(const y of [.28,1.7,3.12]) { f.cyl(M.brass,.024,.024,.15,.015,y,.018,10);f.box(M.brass,.10,.12,.008,.06,y,.014); }
  f.box(M.dark,STUDY.width,3.46,.012,STUDY.width/2,1.73,.014);
  // Interior diagonal brace makes the pivoting case legible as joinery.
  f.box(M.walnut,STUDY.width-.08,.07,.035,STUDY.width/2,.23,.045);
  f.box(M.walnut,STUDY.width-.08,.07,.035,STUDY.width/2,3.25,.045);
  f.box(M.walnut,.065,3.32,.045,STUDY.width/2,1.74,.045,0,0,-.45);
  trim.finish(leaf);
  const latch=new THREE.Group();latch.name='The gilt leaf • book latch';latch.position.set(1.50,1.325,.39);
  const detail=new Builder(rng(112)), d=detail.frame(0,0,0);
  d.box(M.dark,.069,.285,.22,0,.142,.01);d.box(M.gilt,.053,.018,.005,0,.045,.123);d.box(M.gilt,.053,.018,.005,0,.241,.123);
  d.sphere(M.brass,.024,0,.148,.127,1,.8,.14,14,8);d.box(M.brass,.004,.035,.004,0,.125,.13,0,0,.2);
  detail.finish(latch);leaf.add(latch);scene.add(leaf);
  const room=buildStudyRoom(M,{makeCanvas});scene.add(room.group);
  const door=createStudyDoor({setAngle:a=>leaf.rotation.y=a,setLatch:t=>{latch.position.z=.39+t*.065;latch.rotation.x=t*.10;},reducedMotion:()=>globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches??false});
  let interaction=null, previousInside=false;
  return {
    report,door,leaf,room,solids:room.solids,
    attachBooks(texture) { const mesh=movingBooks.build(texture);mesh.name='Marginalia • moving decorative books';leaf.add(mesh);movingBooks.mats.length=movingBooks.cols.length=movingBooks.vars.length=0; },
    install(options) {interaction=installStudyInteraction({...options,door});return interaction;},
    update(dt,player) {
      const moved=door.update(dt,player);
      const inside=inStudy(player);
      if(inside!==previousInside){previousInside=inside;interaction?.setInside(inside);}
      // Static room batches disappear entirely behind the closed bookshelf.
      room.group.visible=inside||door.angle>.001||door.requested;
      interaction?.update();
      return moved;
    },
    get isOpen() {return interaction?.isOpen??false;},
    closeNote() {interaction?.closeNote();},
    dispose() {interaction?.dispose();},
  };
}
