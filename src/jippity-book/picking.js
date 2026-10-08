// Normalized, oriented-box picking: just this book, never the room's thousands of books.
export const HILLSIDE_PLACEMENT=Object.freeze({position:Object.freeze([-.87,.782,2.35]),yaw:-.18,reach:2.2});
const BOXES=[
  {x0:-.18,x1:.17,y0:0,y1:.064,z0:-.235,z1:.235},
  {x0:-.065,x1:-.039,y0:.002,y1:.043,z0:.198,z1:.284}
];
export function rayBox(origin,direction,box,limit=Infinity) {
  let near=0,far=limit;
  for(const axis of ['x','y','z']){
    const p=origin[axis],d=direction[axis],lo=box[axis+'0'],hi=box[axis+'1'];
    if(![p,d,lo,hi].every(Number.isFinite)||lo>hi)return null;
    if(Math.abs(d)<1e-10){if(p<lo||p>hi)return null;}
    else{const a=(lo-p)/d,b=(hi-p)/d;near=Math.max(near,Math.min(a,b));far=Math.min(far,Math.max(a,b));if(near>far)return null;}
  }
  return far>=0?near:null;
}
export function pickBook(origin,direction,solids=[],placement=HILLSIDE_PLACEMENT) {
  const length=Math.hypot(direction.x,direction.y,direction.z);
  if(!Number.isFinite(length)||length<1e-10||!Number.isFinite(placement.yaw)||!(placement.reach>0))return null;
  const d={x:direction.x/length,y:direction.y/length,z:direction.z/length};
  const [x,y,z]=placement.position,c=Math.cos(placement.yaw),s=Math.sin(placement.yaw);
  const dx=origin.x-x,dz=origin.z-z;
  const localOrigin={x:c*dx-s*dz,y:origin.y-y,z:s*dx+c*dz};
  const localDirection={x:c*d.x-s*d.z,y:d.y,z:s*d.x+c*d.z};
  let distance=Infinity;
  for(const box of BOXES){const hit=rayBox(localOrigin,localDirection,box,placement.reach);if(hit!==null)distance=Math.min(distance,hit);}
  if(!Number.isFinite(distance))return null;
  // Room's authored table collision top is 20 mm above the visible tabletop.
  // Same localized furniture allowance as the draft, without enlarged book selection.
  for(const solid of solids){const hit=rayBox(origin,d,solid,distance);if(hit!==null&&hit+.022<distance)return null;}
  return {id:'table-drums',contentId:'drums',distance};
}
