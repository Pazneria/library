/** A reversible front-tip variant of the accepted Folio; all other parts are reused.
 * The final two arm stations and their flat cut become a small rounded terminal.
 * No texture, sitting contract, collision proxy or chair envelope is changed.
 */
import {buildFolioData as buildAccepted,add,sub,mul,cross,dot,norm} from '../folio-refined/folio-core.mjs';
export {DESIGN,buildFolioTextures,auditFolio} from '../folio-refined/folio-core.mjs';
export const FOLIO_VERSION='1.0.0+rounded-armrests.1';
const ringSize=24,retainedStation=22;
const vec=(values,id,size=3)=>values.slice(id*size,id*size+size);
const vertexIds=(batch,part)=>[...new Set(batch.indices.slice(part.startTriangle*3,(part.startTriangle+part.triangles)*3))].sort((a,b)=>a-b);
function extract(batch,part){
  const ids=vertexIds(batch,part),remap=new Map(ids.map((id,i)=>[id,i]));
  return {positions:ids.flatMap(id=>vec(batch.positions,id)),normals:ids.flatMap(id=>vec(batch.normals,id)),uvs:ids.flatMap(id=>vec(batch.uvs,id,2)),
    indices:batch.indices.slice(part.startTriangle*3,(part.startTriangle+part.triangles)*3).map(id=>remap.get(id))};
}
function replaceParts(batch,replacements){
  const next={...batch,positions:[],normals:[],uvs:[],indices:[],parts:[]};
  for(const part of batch.parts){
    const changed=replacements.get(part.name),mesh=changed?.mesh||extract(batch,part),offset=next.positions.length/3;
    next.parts.push({...part,...changed?.metadata,startTriangle:next.indices.length/3,triangles:mesh.indices.length/3});
    next.positions.push(...mesh.positions);next.normals.push(...mesh.normals);next.uvs.push(...mesh.uvs);
    next.indices.push(...mesh.indices.map(id=>id+offset));
  }
  return next;
}
function roundedTerminal(wood,ends,part,endPart){
  const body=extract(wood,part),cap=extract(ends,endPart);
  if(body.positions.length!==25*ringSize*3||part.stationCount!==25||cap.positions.length!==25*3)throw new Error('Accepted Folio arm topology changed; review the terminal variant');
  const first=retainedStation*ringSize,base=Array.from({length:ringSize},(_,j)=>vec(body.positions,first+j));
  const centre=[0,1,2].map(a=>base.reduce((sum,p)=>sum+p[a],0)/ringSize),offsets=base.map(p=>sub(p,centre));
  const endCentre=vec(cap.positions,0),front=Math.max(...body.positions.filter((_,i)=>i%3===2));
  const qz=Math.max(...offsets.map(q=>q[2])),distance=front-centre[2];
  // The critical latitude preserves the old frontmost point exactly, even though
  // the transported cross section has a small forward tilt.
  const advance=sub(endCentre,centre);advance[2]=Math.sqrt(distance*distance-qz*qz);
  const critical=Math.atan2(advance[2],qz),angles=[Math.PI/12,Math.PI/6,Math.PI/4,Math.PI/3,5*Math.PI/12,critical];
  if(critical<=angles[4]||critical>=Math.PI/2)throw new Error('Unexpected Folio arm terminal tilt');
  const points=body.positions.slice(0,(first+ringSize)*3),uvs=body.uvs.slice(0,(first+ringSize)*2),normals=body.normals.slice(0,(first+ringSize)*3);
  for(const angle of angles)for(let j=0;j<ringSize;j++){
    const p=add(centre,add(mul(advance,Math.sin(angle)),mul(offsets[j],Math.cos(angle))));
    if(angle===critical&&offsets[j][2]===qz)p[2]=front;
    const previous=vec(points,points.length/3-ringSize),previousUv=vec(uvs,uvs.length/2-ringSize,2);
    points.push(...p);normals.push(0,0,0);uvs.push(body.uvs[(first+j)*2],previousUv[1]+Math.hypot(...sub(p,previous))/.75);
  }
  const rowCount=points.length/(ringSize*3),pole=add(centre,advance),poleId=points.length/3;
  points.push(...pole);normals.push(0,0,0);
  const at=(row,j)=>vec(points,row*ringSize+(j+ringSize)%ringSize);
  // Shared ring normals bridge the body, curved longitudinal grain and end grain.
  for(let row=retainedStation;row<rowCount;row++)for(let j=0;j<ringSize;j++){
    const along=sub(row===rowCount-1?pole:at(row+1,j),at(row-1,j)),across=sub(at(row,j+1),at(row,j-1));
    normals.splice((row*ringSize+j)*3,3,...norm(cross(along,across)));
  }
  let poleNormal=norm(offsets.reduce((sum,q,j)=>add(sum,cross(q,offsets[(j+1)%ringSize])),[0,0,0]));
  if(dot(poleNormal,advance)<0)poleNormal=mul(poleNormal,-1);
  normals.splice(poleId*3,3,...poleNormal);
  const joinRow=retainedStation+4,bodyVertices=(joinRow+1)*ringSize;
  const roundedBody={positions:points.slice(0,bodyVertices*3),normals:normals.slice(0,bodyVertices*3),uvs:uvs.slice(0,bodyVertices*2),indices:[]};
  const stitch=(indices,a,b,c,d)=>indices.push(a,b,c,a,c,d);
  for(let row=0;row<joinRow;row++)for(let j=0;j<ringSize;j++){
    const next=(j+1)%ringSize;stitch(roundedBody.indices,row*ringSize+j,(row+1)*ringSize+j,(row+1)*ringSize+next,row*ringSize+next);
  }
  const roundedCap={positions:[],normals:[],uvs:[],indices:[]},capCentreUv=vec(cap.uvs,0,2);
  for(let row=joinRow;row<rowCount;row++)for(let j=0;j<ringSize;j++){
    const id=row*ringSize+j,angle=angles[row-retainedStation-1],oldOffset=sub(vec(cap.positions,j+1),endCentre);
    const scale=Math.hypot(...offsets[j])/Math.hypot(...oldOffset)*Math.cos(angle),oldUv=vec(cap.uvs,j+1,2);
    roundedCap.positions.push(...vec(points,id));roundedCap.normals.push(...vec(normals,id));
    roundedCap.uvs.push(...add(capCentreUv,mul(sub(oldUv,capCentreUv),scale)));
  }
  const capRows=rowCount-joinRow;
  for(let row=0;row<capRows-1;row++)for(let j=0;j<ringSize;j++){
    const next=(j+1)%ringSize;stitch(roundedCap.indices,row*ringSize+j,(row+1)*ringSize+j,(row+1)*ringSize+next,row*ringSize+next);
  }
  const tipId=roundedCap.positions.length/3;roundedCap.positions.push(...pole);roundedCap.normals.push(...poleNormal);roundedCap.uvs.push(...capCentreUv);
  for(let j=0;j<ringSize;j++)roundedCap.indices.push((capRows-1)*ringSize+j,tipId,(capRows-1)*ringSize+(j+1)%ringSize);
  return {body:roundedBody,cap:roundedCap,stationCount:joinRow+1};
}
export function buildFolioData(){
  const data=buildAccepted(),wood=data.batches[0],ends=data.batches[1],bodyChanges=new Map(),capChanges=new Map();
  for(const side of ['left','right']){
    const name=side+' sculpted arm',part=wood.parts.find(p=>p.name===name),endName=name+' / finish end grain',end=ends.parts.find(p=>p.name===endName);
    const tip=roundedTerminal(wood,ends,part,end);
    bodyChanges.set(name,{mesh:tip.body,metadata:{stationCount:tip.stationCount,terminal:'rounded front; body retained through station 22'}});
    capChanges.set(endName,{mesh:tip.cap,metadata:{construction:'rounded front terminal; existing rotated end grain'}});
  }
  data.batches[0]=replaceParts(wood,bodyChanges);data.batches[1]=replaceParts(ends,capChanges);
  data.contract.version=FOLIO_VERSION;
  return data;
}
