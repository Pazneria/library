import * as THREE from 'three';
import { rayBox } from '../jippity-book/picking.js';
import { MAX_PLACED_BOOKS } from './placements.js';

const LOCAL_BOXES = [
  {x0:-.18,x1:.17,y0:0,y1:.064,z0:-.235,z1:.235},
  {x0:-.065,x1:-.039,y0:.002,y1:.043,z0:.198,z1:.284}
];
const axes=['x','y','z'];
const validBox=b=>b&&axes.every(k=>Number.isFinite(b[k+'0'])&&Number.isFinite(b[k+'1'])&&b[k+'0']<b[k+'1']);
export function compilePlacements(placements,catalog) {
  if(!Array.isArray(placements)||placements.length>MAX_PLACED_BOOKS)throw new RangeError('Use at most four authored book copies.');
  const ids=new Set();
  return placements.map(p=>{
    if(!p)throw new TypeError('Invalid public book placement.');
    const scale=p.scale??1,rotation=[p.pitch??0,p.yaw??0,p.roll??0],reach=p.reach??2.2;
    if(!p||typeof p.id!=='string'||!p.id||ids.has(p.id)||!Object.hasOwn(catalog,p.contentId)||
      !Array.isArray(p.position)||p.position.length!==3||!p.position.every(Number.isFinite)||!rotation.every(Number.isFinite)||
      !Number.isFinite(scale)||scale<.4||scale>1.2||!Number.isFinite(reach)||reach<=0||reach>2.2||!['table','shelf'].includes(p.surface))
      throw new TypeError('Invalid public book placement.');
    if(p.support&&(!validBox(p.support.bounds)||!validBox(p.support.aperture)))throw new TypeError('Invalid shelf support.');
    if(p.location!==undefined&&(typeof p.location!=='string'||!p.location.trim()||p.location.length>120))throw new TypeError('Invalid book location label.');
    const entry=catalog[p.contentId];
    if(typeof entry.summary!=='string'||!entry.summary.trim()||entry.summary.length>300||![512,1024].includes(entry.colorSize??1024)||
      Object.entries(entry.palette||{}).some(([key,color])=>!['cloth','foil','paper','ink','ribbon'].includes(key)||typeof color!=='string'||!/^#[0-9a-f]{6}$/i.test(color)))
      throw new TypeError('Invalid public edition description or palette.');
    ids.add(p.id);
    const matrix=new THREE.Matrix4().compose(new THREE.Vector3(...p.position),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)),new THREE.Vector3(scale,scale,scale));
    return {...p,scale,reach,matrix,inverse:matrix.clone().invert()};
  });
}
function supportAllowsRay(solid,placement,origin,direction,distance) {
  const support=placement.support;
  if(!support||!axes.every(k=>Math.abs(solid[k+'0']-support.bounds[k+'0'])<.0001&&Math.abs(solid[k+'1']-support.bounds[k+'1'])<.0001))return false;
  // Never grant a ray from inside the case or through its side/back.
  if(origin.z<=solid.z1||direction.z>=0)return false;
  const hit=rayBox(origin,direction,solid,distance),opening=rayBox(origin,direction,support.aperture,distance);
  return hit!==null&&opening!==null&&Math.abs(hit-opening)<.002;
}
export function pickPlacedBooks(origin,direction,placements,solids=[]) {
  const length=Math.hypot(direction.x,direction.y,direction.z);
  if(!Number.isFinite(length)||length<1e-10||!axes.every(k=>Number.isFinite(origin[k])))return null;
  const ray=new THREE.Vector3(direction.x/length,direction.y/length,direction.z/length);
  let selected=null;
  for(const placement of placements){
    const localOrigin=new THREE.Vector3(origin.x,origin.y,origin.z).applyMatrix4(placement.inverse);
    // Keep parameter t in world metres under uniform scale (do not normalize).
    const localDirection=ray.clone().transformDirection(placement.inverse).divideScalar(placement.scale);
    let distance=Infinity;
    for(const box of LOCAL_BOXES){const hit=rayBox(localOrigin,localDirection,box,placement.reach);if(hit!==null)distance=Math.min(distance,hit);}
    if(!Number.isFinite(distance)||selected&&selected.distance<=distance)continue;
    const blocked=solids.some(solid=>{
      const hit=rayBox(origin,ray,solid,distance);
      return hit!==null&&hit+.022<distance&&!supportAllowsRay(solid,placement,origin,ray,distance);
    });
    if(!blocked)selected={...placement,distance};
  }
  return selected;
}
