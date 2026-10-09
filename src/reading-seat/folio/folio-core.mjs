/* Folio reading chair. Original geometry and procedural materials, 2026.
 * Dependency-free CPU source. Metres; RH Y-up; forward +Z.
 * All build functions are deterministic. No network, DOM or global mutations.
 */
export const FOLIO_VERSION = '1.0.0';
export const DESIGN = Object.freeze({
  name: 'Folio', units: 'metres', up: [0,1,0], forward: [0,0,1],
  seatWidth: .60, seatDepth: .56, backRakeDegrees: 12,
  armInnerClearance: .570, nominalCompressedSeat: .44
});
const PI=Math.PI, TAU=PI*2;
export const add=(a,b)=>a.map((v,i)=>v+b[i]);
export const sub=(a,b)=>a.map((v,i)=>v-b[i]);
export const mul=(a,s)=>a.map(v=>v*s);
export const dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0);
export const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
export const norm=a=>mul(a,1/(Math.hypot(...a)||1));
const mix=(a,b,t)=>a+(b-a)*t;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const smooth=t=>t*t*(3-2*t);
function bucket(name,material){return {name,material,positions:[],normals:[],uvs:[],indices:[],parts:[]};}
function vertex(b,p,n,uv){const i=b.positions.length/3;b.positions.push(...p);b.normals.push(...n);b.uvs.push(...uv);return i;}
function tri(b,a,c,d){b.indices.push(a,c,d);}
function quad(b,a,c,d,e,flip=false){if(flip){tri(b,a,d,c);tri(b,a,e,d);}else{tri(b,a,c,d);tri(b,a,d,e);}}
function mark(b,name,start,extra={}){b.parts.push({name,startTriangle:start/3,triangles:(b.indices.length-start)/3,...extra});}
function roundedLoop(w,h,r,steps=6){
  const pts=[];
  for(let k=0;k<4;k++){
    const angle=k*PI/2, sx=k===0||k===3?1:-1, sy=k<2?1:-1;
    const cx=sx*(w/2-r),cy=sy*(h/2-r);
    for(let j=0;j<=steps;j++){const a=angle+j*PI/2/steps;pts.push([cx+r*Math.cos(a),cy+r*Math.sin(a)]);}
  }
  return pts;
}
// Smooth centreline interpolation with endpoint preservation; each station has
// [x,y,z,width,depth]. Cross-section is a rounded rectangle in a transported frame.
function cat(st,t){
  const f=t*(st.length-1),i=Math.min(st.length-2,Math.floor(f)),u=f-i;
  const a=st[Math.max(0,i-1)],b=st[i],c=st[i+1],d=st[Math.min(st.length-1,i+2)];
  return b.map((v,k)=>.5*((2*v)+(-a[k]+c[k])*u+(2*a[k]-5*v+4*c[k]-d[k])*u*u+(-a[k]+3*v-3*c[k]+d[k])*u*u*u));
}
function swept(body,ends,name,st,{sections=14,corner=5,reference=[1,0,0],radius=.006,phase=0,capBevel=.002,groundCut=false}={}){
  const start=body.indices.length, N=4*(corner+1),rings=[],frame=[],lengths=[0];
  for(let i=0;i<=sections;i++){
    const t=i/sections,c=cat(st,t),p=c.slice(0,3),prev=cat(st,Math.max(0,t-.0001)),next=cat(st,Math.min(1,t+.0001));
    const axis=norm(sub(next.slice(0,3),prev.slice(0,3)));
    const u=norm(sub(reference,mul(axis,dot(reference,axis)))),v=norm(cross(u,axis));
    const edge=i===0||i===sections?capBevel:0;
    const loop=roundedLoop(c[3]-2*edge,c[4]-2*edge,Math.min(radius,c[3]/2*.85,c[4]/2*.85),corner);
    const row=[];
    if(i>0)lengths.push(lengths[i-1]+Math.hypot(...sub(p,frame[i-1].p)));
    frame.push({p,u,v,axis,c,loop});
    for(let j=0;j<N;j++){
      const q=loop[j],pr=loop[(j+N-1)%N],ne=loop[(j+1)%N];
      const tang=norm([ne[0]-pr[0],ne[1]-pr[1],0]),n=norm(add(mul(u,tang[1]),mul(v,-tang[0])));
      const pos=add(p,add(mul(u,q[0]),mul(v,q[1])));
      if(groundCut&&i===0)pos[1]=0;
      // V follows the member's length; U follows the perimeter with member-specific phase.
      row.push(vertex(body,pos,n,[j/N*.84+phase,lengths[i]/.75]));
    }
    rings.push(row);
  }
  for(let i=0;i<sections;i++)for(let j=0;j<N;j++)quad(body,rings[i][j],rings[i+1][j],rings[i+1][(j+1)%N],rings[i][(j+1)%N]);
  mark(body,name,start,{construction:'walnut member; longitudinal grain',stationCount:sections+1});
  for(const i of [0,sections]){
    const f=frame[i],s=ends.indices.length,n=groundCut&&i===0?[0,-1,0]:mul(f.axis,i===0?-1:1);
    const centrePoint=f.p.slice();if(groundCut&&i===0)centrePoint[1]=0;
    const cen=vertex(ends,centrePoint,n,[.5,.5]),ids=f.loop.map(q=>{const point=add(f.p,add(mul(f.u,q[0]),mul(f.v,q[1])));if(groundCut&&i===0)point[1]=0;return vertex(ends,point,n,[.5+q[0]/.09,.5+q[1]/.09]);});
    for(let j=0;j<N;j++){
      // Ring winds CCW around axis negative? Determine from analytic normal.
      const a=ids[j],b=ids[(j+1)%N];
      const pa=ends.positions.slice(a*3,a*3+3),pb=ends.positions.slice(b*3,b*3+3);
      if(dot(cross(sub(pa,centrePoint),sub(pb,centrePoint)),n)>0)tri(ends,cen,a,b);else tri(ends,cen,b,a);
    }
    mark(ends,name+(i===0?' / start end grain':' / finish end grain'),s);
  }
}
function tube(b,name,path,r=.0017,sides=6,closed=true){
  const start=b.indices.length,rows=[],len=path.length;
  for(let i=0;i<len;i++){
    const p=path[i],a=path[(i+len-1)%len],c=path[(i+1)%len];
    const tangent=norm(sub(c,a)),basis=norm(cross(tangent,Math.abs(tangent[1])<.88?[0,1,0]:[0,0,1])),v=norm(cross(tangent,basis));
    const row=[];
    for(let j=0;j<sides;j++){const n=add(mul(basis,Math.cos(j*TAU/sides)),mul(v,Math.sin(j*TAU/sides)));row.push(vertex(b,add(p,mul(n,r)),n,[j/sides,i/len]));}
    rows.push(row);
  }
  for(let i=0;i<(closed?len:len-1);i++)for(let j=0;j<sides;j++)quad(b,rows[i][j],rows[(i+1)%len][j],rows[(i+1)%len][(j+1)%sides],rows[i][(j+1)%sides],true);
  mark(b,name,start);
}
export function seatSurface(x,z){
  const s=(z+.245)/.56;
  const pelvis=Math.exp(-Math.pow(x/.19,2)-Math.pow((z+.025)/.18,2));
  return .448+.019*s+.004*(1-Math.pow(x/.3,2))-.021*pelvis;
}
function cushion(leather,seam,thread,name,{width,depth,radius,transform,top,bottom,sideMid,phase=0,corner=10,radial=11}){
  const start=leather.indices.length,rawLoop=roundedLoop(width,depth,radius,corner),loop=[];
  // Keep fine corner sampling for the large upholstery radii, while
  // subdividing straight cover runs so large sectors cannot create false folds.
  for(let j=0;j<rawLoop.length;j++){
    loop.push(rawLoop[j]);
    if((j+1)%(corner+1)===0){
      const a=rawLoop[j],b=rawLoop[(j+1)%rawLoop.length];
      for(let k=1;k<8;k++)loop.push(add(a,mul(sub(b,a),k/8)));
    }
  }
  const N=loop.length;
  // One closed upholstered shell, with welded logical vertices at each cover centre.
  const rows=[],levels=[[.945,bottom],[.99,mix(bottom,sideMid,.25)],[1,mix(bottom,sideMid,.7)],[1,sideMid],[.985,sideMid+.016],[.955,null]];
  for(let i=0;i<levels.length;i++){
    const [scale,h]=levels[i],row=[];
    for(let j=0;j<N;j++){
      const [x,z]=mul(loop[j],scale),yy=h===null?top(x,z):h;
      row.push(vertex(leather,transform([x,yy,z]),[0,1,0],[(x+width/2)/.24+phase,(z+depth/2)/.24]));
    }
    rows.push(row);
  }
  for(let i=0;i<rows.length-1;i++)for(let j=0;j<N;j++)quad(leather,rows[i][j],rows[i][(j+1)%N],rows[i+1][(j+1)%N],rows[i+1][j],true);
  // top cover rings flow toward a single centre, with no singular grid seam.
  let previous=rows[rows.length-1];
  for(let k=1;k<radial;k++){
    const scale=.955*(1-k/radial),row=[];
    for(let j=0;j<N;j++){
      const [x,z]=mul(loop[j],scale);
      row.push(vertex(leather,transform([x,top(x,z),z]),[0,1,0],[(x+width/2)/.24+phase,(z+depth/2)/.24]));
    }
    for(let j=0;j<N;j++)quad(leather,previous[j],previous[(j+1)%N],row[(j+1)%N],row[j],true);
    previous=row;
  }
  const centre=vertex(leather,transform([0,top(0,0),0]),[0,1,0],[width/2/.24+phase,depth/2/.24]);
  for(let j=0;j<N;j++)tri(leather,previous[(j+1)%N],previous[j],centre);
  const bottomNormal=norm(sub(transform([0,bottom-1,0]),transform([0,bottom,0])));
  const bot=vertex(leather,transform([0,bottom,0]),bottomNormal,[.5,.5]);
  const bottomRim=loop.map(q=>vertex(leather,transform([q[0]*.945,bottom,q[1]*.945]),bottomNormal,[q[0]/.24,q[1]/.24]));
  for(let j=0;j<N;j++)tri(leather,bottomRim[j],bottomRim[(j+1)%N],bot);
  // Recompute area-weighted shell normals. The shell's smooth side transitions
  // are intentional; the perimeter welt receives its own normal field.
  const ids=new Set();
  for(let i=start;i<leather.indices.length;i++)ids.add(leather.indices[i]);
  for(const id of ids)leather.normals.splice(id*3,3,0,0,0);
  for(let i=start;i<leather.indices.length;i+=3){
    const [a,b,c]=leather.indices.slice(i,i+3),p=leather.positions;
    const n=cross(sub(p.slice(b*3,b*3+3),p.slice(a*3,a*3+3)),sub(p.slice(c*3,c*3+3),p.slice(a*3,a*3+3)));
    for(const id of [a,b,c])for(let j=0;j<3;j++)leather.normals[id*3+j]+=n[j];
  }
  for(const id of ids)leather.normals.splice(id*3,3,...norm(leather.normals.slice(id*3,id*3+3)));
  mark(leather,name,start,{construction:'closed shaped upholstery shell'});
  const welt=loop.map(q=>transform([q[0]*.996,sideMid+.003,q[1]*.996]));
  tube(seam,name+' / perimeter welt',welt,.0018,6);
  // Construction seam on the cover, recessed 9 mm from the cover perimeter.
  const seamPath=loop.map(q=>{const x=q[0]*(.955-.009/(width/2)),z=q[1]*(.955-.009/(depth/2));return transform([x,top(x,z)+.00045,z]);});
  tube(seam,name+' / cover seam',seamPath,.00055,4);
  // Sparse 3.0 mm stitches at 7 mm pitch, stitched along the continuous outline.
  for(let j=0;j<N;j++){
    const a=seamPath[j],b=seamPath[(j+1)%N],dist=Math.hypot(...sub(b,a)),count=Math.max(1,Math.floor(dist/.007));
    for(let k=0;k<count;k++){
      const t=(k+.35)/count,p=add(a,mul(sub(b,a),t)),d=mul(norm(sub(b,a)),.0015);
      // A lifted three-point ribbon costs four triangles per stitch.
      const out=norm(sub(transform([0,1,0]),transform([0,0,0]))),side=mul(norm(cross(norm(d),out)),.00028);
      const ids=[];
      for(const q of [sub(p,d),add(p,mul(out,.00020)),add(p,d)]){
        ids.push([vertex(thread,sub(q,side),out,[0,0]),vertex(thread,add(q,side),out,[1,0])]);
      }
      for(let h=0;h<2;h++){
        const pa=thread.positions.slice(ids[h][0]*3,ids[h][0]*3+3),pb=thread.positions.slice(ids[h+1][0]*3,ids[h+1][0]*3+3),pc=thread.positions.slice(ids[h+1][1]*3,ids[h+1][1]*3+3);
        quad(thread,ids[h][0],ids[h+1][0],ids[h+1][1],ids[h][1],dot(cross(sub(pb,pa),sub(pc,pa)),out)<0);
      }
    }
  }
}
export function buildFolioData(){
  const wood=bucket('Walnut / longitudinal','walnut'),ends=bucket('Walnut / end grain','endgrain'),leather=bucket('Umber leather','leather'),seam=bucket('Leather welts and seams','welt'),thread=bucket('Saddle stitching','thread');
  const footZFront=.352,footZBack=-.436;
  for(const s of [-1,1]){
    const side=s<0?'left':'right';
    swept(wood,ends,side+' front post',[[s*.344,.019,footZFront,.038,.040],[s*.322,.344,.293,.054,.057],[s*.326,.614,.265,.057,.054]],{sections:14,corner:4,radius:.008,phase:s*.18,groundCut:true});
    swept(wood,ends,side+' rear lower leg',[[s*.354,.019,footZBack,.042,.044],[s*.326,.355,-.225,.059,.059]],{sections:8,corner:4,radius:.007,phase:s*.26,groundCut:true});
    swept(wood,ends,side+' upper back post',[[s*.326,.352,-.225,.059,.059],[s*.322,.635,-.292,.055,.055],[s*.312,.946,-.411,.045,.048]],{sections:14,corner:4,radius:.007,phase:s*.26+.17});
    swept(wood,ends,side+' side seat rail',[[s*.322,.344,-.240,.047,.081],[s*.322,.349,.022,.045,.076],[s*.322,.365,.291,.046,.075]],{sections:10,corner:4,reference:[1,0,0],radius:.006,phase:.22});
    // Sculpted top arms: broad support region; rolled top and reduced front nose.
    swept(wood,ends,side+' sculpted arm',[[s*.326,.622,-.295,.067,.036],[s*.339,.626,-.15,.107,.044],[s*.342,.633,.08,.112,.047],[s*.337,.631,.286,.098,.042],[s*.329,.623,.395,.061,.030]],{sections:24,corner:5,reference:[1,0,0],radius:.012,phase:s*.31,capBevel:.0018});
  }
  // Cross rails are mortised into the posts; their end grain is largely concealed.
  swept(wood,ends,'front cross rail',[[-.325,.357,.287,.068,.067],[0,.358,.289,.067,.065],[.325,.357,.287,.068,.067]],{sections:10,corner:4,reference:[0,0,1],radius:.006,phase:.64});
  swept(wood,ends,'rear cross rail',[[-.325,.340,-.239,.056,.072],[0,.340,-.242,.056,.072],[.325,.340,-.239,.056,.072]],{sections:8,corner:4,reference:[0,0,1],radius:.005,phase:.42});
  // Five seat slats form a believable load path beneath the removable cushion.
  for(let k=0;k<5;k++){
    const z=-.185+k*.104;
    swept(wood,ends,'seat bearing slat '+(k+1),[[-.306,.385,z,.066,.017],[.306,.385,z,.066,.017]],{sections:3,corner:2,reference:[0,0,1],radius:.003,phase:k*.14});
  }
  const backCenter=t=>[0,.463+t*.496,-.219-t*.194];
  for(let k=0;k<3;k++){
    const t=.13+k*.38,c=backCenter(t),half=.307-k*.004;
    swept(wood,ends,'back bearing batten '+(k+1),[[-half,c[1],c[2]-.036,.037,.057],[0,c[1],c[2]-.036,.037,.057],[half,c[1],c[2]-.036,.037,.057]],{sections:8,corner:3,reference:[0,0,1],radius:.004,phase:k*.19});
  }
  // Narrow crown completes the frame while leaving the upholstered edge legible.
  swept(wood,ends,'back crown rail',[[-.313,.946,-.411,.047,.040],[0,.954,-.415,.048,.042],[.313,.946,-.411,.047,.040]],{sections:14,corner:4,reference:[0,0,1],radius:.006,phase:.72});
  cushion(leather,seam,thread,'seat cushion',{width:.60,depth:.56,radius:.048,bottom:.390,sideMid:.421,
    top:(x,z)=>seatSurface(x,z+.035),transform:p=>[p[0],p[1],p[2]+.035],phase:.15});
  const rake=12*PI/180,cs=Math.cos(rake),sn=Math.sin(rake),backH=.53;
  // Back uses local X width / Z height / Y thickness; its face normal points +Z.
  const backTransform=p=>[-p[0]*(1-.065*smooth(clamp((p[2]+.10)/.365,0,1))),.711+p[2]*cs+p[1]*sn,-.299-p[2]*sn+p[1]*cs];
  const backTop=(x,z)=>{
    const lumbar=.016*Math.exp(-Math.pow((z+.145)/.09,2));
    const shoulder=.006*Math.exp(-Math.pow((z-.19)/.09,2));
    const hollow=.005*Math.exp(-Math.pow((z-.065)/.13,2)-Math.pow(x/.19,2));
    return .046+lumbar+shoulder-hollow-.012*Math.pow(Math.abs(x)/.29,3);
  };
  cushion(leather,seam,thread,'back cushion',{width:.575,depth:backH,radius:.067,bottom:-.014,sideMid:.011,top:backTop,transform:backTransform,phase:1.8,corner:12,radial:12});
  const batches=[wood,ends,leather,seam,thread];
  const rawMin=[Infinity,Infinity,Infinity],rawMax=[-Infinity,-Infinity,-Infinity];
  for(const b of batches)for(let i=0;i<b.positions.length;i++) {const a=i%3;rawMin[a]=Math.min(rawMin[a],b.positions[i]);rawMax[a]=Math.max(rawMax[a],b.positions[i]);}
  const shift=[-(rawMin[0]+rawMax[0])/2,-rawMin[1],-(rawMin[2]+rawMax[2])/2];
  for(const b of batches)for(let i=0;i<b.positions.length;i++)b.positions[i]+=shift[i%3];
  const min=add(rawMin,shift),max=add(rawMax,shift);
  const anchor=p=>add(p,shift);
  const compressed=anchor([0,seatSurface(0,-.025),-.025]);
  const contract={
    name:'Folio',version:FOLIO_VERSION,units:'metres',handedness:'right',up:[0,1,0],forward:[0,0,1],
    root:'footprint bounding-box centre at ground',buildOffset:shift,
    bounds:{min,max,size:sub(max,min)},
    anchors:{
      seat:{position:compressed,forward:[0,0,1],up:[0,1,0],semantic:'pelvis contact on designed compressed seat; no skeleton hip offset'},
      seatedEye:{position:anchor([0,1.135,-.070]),forward:norm([0,-.065,1]),semantic:'camera suggestion for an average adult, above chair envelope; tune to avatar'},
      entry:{position:anchor([0,0,.84]),forward:[0,0,-1],semantic:'ground approach pose, facing chair'},
      standUp:{position:anchor([0,0,.73]),forward:[0,0,1],semantic:'ground destination for stand-up; animation path requires host clearance checks'},
      leftHand:{position:anchor([-.337,.652,.235]),semantic:'suggested hand contact on arm'},
      rightHand:{position:anchor([.337,.652,.235]),semantic:'suggested hand contact on arm'}
    },
    sittingEnvelope:{seatWidth:.60,seatCushionDepth:.56,clearBetweenArms:.570,backRakeDegrees:12,armContactY:anchor([0,.652,0])[1],
      usableSeatDepthApprox:.50,semantic:'design clearance only; no anthropometric or accessibility certification'},
    collision:{type:'compound-box',semantic:'conservative solid proxy; host must exclude chair seat/back solids during its seated pose, and must check the stand-up path; envelope AABB is broad-phase only',
      boxes:[
        {name:'seat base',center:anchor([0,.390,.025]),size:[.72,.18,.64]},
        {name:'back',center:anchor([0,.713,-.31]),size:[.716,.58,.20],rotationX:-rake},
        {name:'left arm',center:anchor([-.342,.627,.048]),size:[.12,.065,.70]},
        {name:'right arm',center:anchor([.342,.627,.048]),size:[.12,.065,.70]},
        ...[-1,1].flatMap(s=>[
          {name:(s<0?'left':'right')+' front leg',center:anchor([s*.335,.315,.315]),size:[.090,.64,.15]},
          {name:(s<0?'left':'right')+' rear leg',center:anchor([s*.344,.185,-.333]),size:[.08,.38,.25]}
        ])
      ],aabb:{min,max}}
  };
  return {batches,contract};
}
// Textures are invented material studies, never photographic/reference scans.
function texture(w,h,fn){
  const color=new Uint8Array(w*h*4),height=new Uint8Array(w*h*4);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const [r,g,b,a]=fn(x/w,y/h,x,y),i=(y*w+x)*4;
    color[i]=clamp(Math.round(r),0,255);color[i+1]=clamp(Math.round(g),0,255);color[i+2]=clamp(Math.round(b),0,255);color[i+3]=255;
    height[i]=height[i+1]=height[i+2]=clamp(Math.round(a),0,255);height[i+3]=255;
  }
  return {width:w,height:h,color,heightData:height};
}
export function buildFolioTextures(){
  const walnut=texture(512,1024,(u,v)=>{
    const warp=.028*Math.sin(TAU*v)+.009*Math.sin(TAU*3*v+.8)+.006*Math.sin(TAU*5*v);
    const g=u+warp,annual=.5+.5*Math.sin(TAU*(g*11+.12*Math.sin(TAU*v)));
    const vessel=Math.pow(.5+.5*Math.sin(TAU*(g*103+.36*Math.sin(TAU*v*2))),22);
    const fine=.5+.5*Math.sin(TAU*(g*207+.4*Math.cos(TAU*v*3)));
    const tone=annual*8-vessel*7+fine*1.4;
    return [103+tone,65+tone*.77,42+tone*.58,155+annual*8-vessel*28];
  });
  const endgrain=texture(256,256,(u,v)=>{
    const dx=u-.32,dy=v-.43,r=Math.hypot(dx,dy*.85),rings=.5+.5*Math.sin(TAU*(r*32+.018*Math.sin(Math.atan2(dy,dx)*4)));
    const pores=Math.pow(.5+.5*Math.sin(TAU*(u*77+v*53)),26)*Math.pow(.5+.5*Math.cos(TAU*(u*31-v*81)),8);
    return [96+rings*9-pores*9,61+rings*7-pores*7,40+rings*5-pores*5,140+rings*12-pores*29];
  });
  const leather=texture(512,512,(u,v,x,y)=>{
    // Fine irregular cellular pores: ~0.6–1.6 mm at the specified UV scale.
    const qx=u*173+.30*Math.sin(TAU*v*67),qy=v*157+.23*Math.sin(TAU*u*71);
    const cells=Math.pow(.5+.5*Math.sin(TAU*qx)*Math.sin(TAU*qy),4);
    const small=.5+.5*Math.sin(TAU*(u*227+v*193))*Math.sin(TAU*(v*211-u*107));
    const low=.5+.5*Math.sin(TAU*u*3)*Math.sin(TAU*v*2);
    const c=low*1.8+small*.6-cells*2.3;
    return [88+c,52+c*.75,34+c*.55,150+small*4-cells*13];
  });
  return {walnut,endgrain,leather};
}
export function auditFolio(data=buildFolioData()){
  const errors=[],warnings=[],counts={triangles:0,vertices:0,drawCalls:data.batches.length,byBatch:[]};
  let minArea=Infinity,maxNormalError=0,nonFinite=0,badIndex=0,inverted=0;
  for(const b of data.batches){
    const count=b.positions.length/3;
    if(b.positions.length!==b.normals.length||b.uvs.length!==count*2)errors.push(b.name+': attribute lengths disagree');
    for(const n of [...b.positions,...b.normals,...b.uvs])if(!Number.isFinite(n))nonFinite++;
    for(let i=0;i<count;i++)maxNormalError=Math.max(maxNormalError,Math.abs(Math.hypot(...b.normals.slice(i*3,i*3+3))-1));
    for(let i=0;i<b.indices.length;i+=3){
      const ids=b.indices.slice(i,i+3);if(ids.some(k=>!Number.isInteger(k)||k<0||k>=count)){badIndex++;continue;}
      const [a,c,d]=ids.map(k=>b.positions.slice(k*3,k*3+3)),n=cross(sub(c,a),sub(d,a)),area=Math.hypot(...n)/2;
      minArea=Math.min(minArea,area);if(area<1e-12)errors.push(b.name+': degenerate triangle '+i/3);
      const mean=ids.reduce((s,k)=>add(s,b.normals.slice(k*3,k*3+3)),[0,0,0]);
      if(dot(n,mean)<-1e-12)inverted++;
    }
    counts.triangles+=b.indices.length/3;counts.vertices+=count;
    counts.byBatch.push({name:b.name,triangles:b.indices.length/3,vertices:count});
  }
  // Do not let a globally reversed closed cushion pass merely because its
  // generated normals agree with its own reversed triangles.
  const upholstery=data.batches.find(b=>b.material==='leather');
  for(const part of upholstery.parts){
    const normals=[];
    for(let i=part.startTriangle*3;i<(part.startTriangle+part.triangles)*3;i++){
      const id=upholstery.indices[i],p=upholstery.positions.slice(id*3,id*3+3);
      if(part.name==='seat cushion'&&Math.abs(p[0])<.02&&Math.abs(p[2]-(.035+data.contract.buildOffset[2]))<.02&&p[1]>.42)normals.push(upholstery.normals[id*3+1]);
      if(part.name==='back cushion'&&Math.abs(p[0])<.02&&Math.abs(p[1]-(.711+data.contract.buildOffset[1]))<.02&&p[2]>-.27+data.contract.buildOffset[2])normals.push(upholstery.normals[id*3+2]);
    }
    if(!normals.length||normals.reduce((a,b)=>a+b,0)/normals.length<.7)errors.push(part.name+': cover faces away from sitter');
  }
  if(nonFinite)errors.push(nonFinite+' nonfinite attributes');
  if(badIndex)errors.push(badIndex+' out-of-range indices');
  if(inverted)errors.push(inverted+' triangles disagree with outward vertex normals');
  if(maxNormalError>1e-6)errors.push('normals not unit length');
  if(counts.triangles>20000)errors.push('triangle budget exceeded');
  if(counts.drawCalls>6)errors.push('chair draw-call budget exceeded');
  // RGBA8 colour and RGBA8 bump for each map, with complete power-of-two mip chain.
  const mipBytes=(w,h)=>{let texels=0;for(;;){texels+=w*h;if(w===1&&h===1)break;w=Math.max(1,w>>1);h=Math.max(1,h>>1);}return texels*4*2;};
  const textureBytes=mipBytes(512,1024)+mipBytes(256,256)+mipBytes(512,512);
  if(textureBytes>16*1024*1024)errors.push('texture budget exceeded');
  const {min,max,size}=data.contract.bounds;
  if(Math.abs(min[1])>1e-7)errors.push('feet not on ground');
  if(Math.abs(min[0]+max[0])>1e-7||Math.abs(min[2]+max[2])>1e-7)errors.push('root not centred on footprint');
  if(size[0]>.83||size[0]<.74||size[1]>.995||size[1]<.94||size[2]>.95||size[2]<.79)warnings.push('envelope differs from target; inspect final dimensions');
  let collisionUncoveredVertices=0;
  for(const b of data.batches)for(let i=0;i<b.positions.length;i+=3){
    const p=b.positions.slice(i,i+3);
    const contained=data.contract.collision.boxes.some(box=>{
      const q=sub(p,box.center),a=box.rotationX||0,c=Math.cos(a),s=Math.sin(a),local=[q[0],c*q[1]+s*q[2],-s*q[1]+c*q[2]];
      return local.every((v,j)=>Math.abs(v)<=box.size[j]/2+.001);
    });
    if(!contained)collisionUncoveredVertices++;
  }
  if(collisionUncoveredVertices)errors.push(collisionUncoveredVertices+' vertices outside conservative collision proxy');
  return {passed:errors.length===0,errors,warnings,counts,bounds:data.contract.bounds,textureGPUBytesWithMips:Math.ceil(textureBytes),
    geometryAttributeBytes:counts.vertices*8*4+counts.triangles*3*2,collisionUncoveredVertices,
    normalCheck:{maxUnitError:maxNormalError,invertedTriangles:inverted,minimumTriangleArea:minArea},
    verification:'CPU generation and structural checks only; browser GPU integration and physical chair tests are separate'};
}

