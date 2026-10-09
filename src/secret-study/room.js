import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { Builder } from '../build.js';
import { rng } from '../textures.js';
import { createStudyAtlas, PLATES } from './atlas.js';
import { STUDY } from './layout.js';

export function buildStudyRoom(M, {makeCanvas} = {}) {
  const B=new Builder(rng(9419)), f=B.frame(0,0,0), group=new THREE.Group();group.name='Jippity • Marginalia';
  const atlas=createStudyAtlas(makeCanvas);
  const paint=M.sage.clone();paint.color.setHex(0x668880);paint.roughness=.97;
  const ink=new THREE.MeshStandardMaterial({color:0x233f3b,roughness:.87});
  const linen=M.cushion.clone();linen.color.setHex(0xb4bcaa);
  const hide=M.leather2.clone();hide.color.setHex(0x596555);
  const ceramic=M.ceramic.clone();ceramic.color.setHex(0x65897b);
  const plate=new THREE.MeshStandardMaterial({map:atlas,roughness:.84});
  const garden=new THREE.MeshBasicMaterial({map:atlas,color:0xbdd0b7});
  const glow=new THREE.MeshBasicMaterial({color:0xf7d49a,side:THREE.DoubleSide});
  const mats=[paint,ink,linen,hide,ceramic,plate,garden,glow];
  function rounded(mat,w,h,d,x,y,z,r=.04,rot=0) { f.geo(mat,new RoundedBoxGeometry(w,h,d,2,r),x,y,z,0,rot,0); }
  function line(mat,a,b,r=.012){const d=new THREE.Vector3().subVectors(new THREE.Vector3(...b),new THREE.Vector3(...a));const geo=new THREE.CylinderGeometry(r,r,d.length(),8);geo.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize()));f.geo(mat,geo,(a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2);}
  function picture(type,x,y,z,w,h,rot=0){const p=f.sub(x,y,z,rot);p.box(M.walnut,w+.10,h+.10,.045,0,0,-.029);p.box(M.gilt,w+.025,h+.025,.026,0,0,.005);p.plane(plate,w,h,0,0,.022,0,0,0,PLATES[type]);}
  // Vestibule: the low lintel compresses the tall library before the room opens up.
  f.sbox(M.floor,STUDY.cut.x1-STUDY.cut.x0,.24,2.05,3.27,-.12,-10.70);
  f.sbox(M.dark,.15,3.60,1.70,2.285,1.8,-10.82);
  f.sbox(M.dark,.15,3.60,1.70,4.245,1.8,-10.82);
  f.sbox(paint,1.80,.23,1.73,3.27,3.66,-10.80);
  // Closed leaf's narrow right edge is covered by a stationary cabinet stile.
  f.box(M.dark,.1,3.48,.065,4.12,1.74,-9.468);
  f.box(M.brass,1.8,.008,.11,3.27,.004,-10.18);
  f.box(M.dark,1.80,.11,.13,3.27,3.615,-10.5);
  // Main study: a small single-storey extension with a deliberately lower scale.
  f.sbox(M.floor,5.95,.30,5.85,3.775,-.15,-14.475);
  f.sbox(paint,.22,3.8,5.85,.79,1.9,-14.475);
  f.sbox(paint,.22,3.8,5.85,6.76,1.9,-14.475);
  f.sbox(paint,5.95,3.8,.22,3.775,1.9,-17.41);
  f.sbox(paint,1.47,3.8,.2,1.635,1.9,-11.55);
  f.sbox(paint,2.48,3.8,.2,5.41,1.9,-11.55);
  f.sbox(paint,1.8,.24,.20,3.27,3.68,-11.55);
  f.sbox(M.ceil,5.95,.18,5.85,3.775,3.89,-14.475);
  for(const x of [1.10,6.45])f.box(M.walnut,.09,.12,5.60,x,3.61,-14.475);
  for(const z of [-11.85,-14.45,-17.10]) { f.box(M.walnut,5.46,.14,.12,3.775,3.60,z);f.box(M.brass,5.46,.009,.016,3.775,3.52,z); }
  // Dado, recessed panels and thin brass picture rail, with air between paint and trim.
  for(const x of [1.01,6.54]) {
    f.box(ink,.07,1.05,5.46,x,.525,-14.475);
    f.box(M.walnut,.11,.095,5.50,x,1.08,-14.475);f.box(M.dark,.10,.12,5.50,x,.07,-14.475);
    for(let z=-12.10;z>-17.1;z-=.64)f.box(M.walnut,.10,.86,.034,x,.56,z);
    f.box(M.brass,.024,.022,5.46,x,2.92,-14.475);
  }
  f.box(ink,5.46,1.05,.07,3.775,.525,-17.19);
  for(let x=1.2;x<6.5;x+=.65)f.box(M.walnut,.034,.86,.10,x,.56,-17.16);
  f.box(M.walnut,5.46,.095,.11,3.775,1.08,-17.16);
  // A deep garden light well, glazed in six panes. Framed against the wall as a
  // theatrical borrowed view; the public set contains no private adjacent space.
  const win=f.sub(3.8,2.38,-17.15);
  win.box(M.dark,2.34,1.68,.19,0,0,0);
  win.plane(garden,2.12,1.46,0,0,.107,0,0,0,PLATES.garden);
  for(const x of [-1.11,-.37,.37,1.11])win.box(M.walnut,.045,1.55,.05,x,0,.146);
  for(const y of [-.765,0,.765])win.box(M.walnut,2.24,.045,.055,0,y,.15);
  win.box(M.oak,2.48,.07,.27,0,-.82,.16);win.box(M.walnut,2.48,.12,.16,0,.86,.07);
  // Desk, right-sized for one page and a task light; continuous finger-rounded rim.
  rounded(M.walnut,2.34,.085,.94,3.8,.79,-15.94,.025);
  rounded(M.oak,2.26,.035,.87,3.8,.829,-15.94,.017);
  f.solid(2.34,.84,.94,3.8,.42,-15.94);
  for(const x of [2.83,4.77])for(const z of [-15.63,-16.25]) { f.box(M.walnut,.075,.72,.075,x,.36,z);f.cyl(M.brass,.042,.042,.075,x,.038,z,10); }
  f.box(M.walnut,2.07,.20,.07,3.8,.64,-15.59);
  for(const x of [3.23,4.37]){f.box(M.dark,.88,.15,.026,x,.646,-15.544);f.box(M.walnut,.83,.115,.019,x,.648,-15.526);f.torus(M.brass,.027,.006,x,.65,-15.507,0,0,0,12);}
  rounded(hide,1.04,.009,.60,3.66,.851,-15.90,.018);
  f.plane(plate,.42,.47,3.57,.861,-15.85,-Math.PI/2,0,-.08,PLATES.note);
  line(M.brass,[4.08,.867,-16.0],[4.12,.867,-15.69],.009);
  f.cyl(M.iron,.052,.058,.073,4.23,.888,-16.03,12);f.cyl(M.brass,.051,.051,.012,4.23,.93,-16.03,12);
  // Warm opaline task lamp, chain and dish base; one bounded non-shadow light.
  f.cyl(M.brass,.15,.17,.032,2.96,.86,-16.04,20);f.cyl(M.brass,.020,.026,.41,2.96,1.08,-16.04,12);
  line(M.brass,[2.96,1.27,-16.04],[3.08,1.35,-15.99],.016);
  f.cyl(ceramic,.15,.29,.16,3.08,1.34,-15.99,32,0,0,0,true);
  f.cyl(glow,.278,.278,.009,3.08,1.262,-15.99,32);
  f.torus(M.brass,.29,.009,3.08,1.26,-15.99,Math.PI/2,0,0,32);
  line(M.brass,[3.25,1.26,-15.99],[3.25,1.04,-15.99],.0035);f.sphere(M.brass,.013,3.25,1.025,-15.99,1,1.4,1);
  // Writer's chair, pulled back just enough to show an invitation to sit.
  const chair=f.sub(3.83,0,-14.98,-.09);
  for(const x of [-.26,.26])for(const z of [-.23,.23])chair.box(M.walnut,.055,.48,.055,x,.24,z);
  chair.box(M.walnut,.64,.075,.61,0,.48,0);chair.geo(hide,new RoundedBoxGeometry(.61,.095,.57,2,.035),0,.545,0);
  for(const x of [-.28,.28])chair.box(M.walnut,.055,.62,.06,x,.72,.25);
  chair.geo(hide,new RoundedBoxGeometry(.56,.37,.065,2,.027),0,.85,.27);
  f.solid(.78,1.06,.80,3.83,.53,-14.98);
  // Moss velvet reading chair and small ottoman, angled toward the desk and door.
  const seat=f.sub(1.95,0,-13.75,.78);
  for(const x of [-.38,.38])for(const z of [-.34,.34])seat.cyl(M.walnut,.045,.033,.20,x,.10,z,10);
  seat.geo(linen,new RoundedBoxGeometry(.95,.25,.91,2,.06),0,.30,0);
  seat.geo(linen,new RoundedBoxGeometry(.81,.17,.78,2,.055),0,.49,-.015);
  seat.geo(linen,new RoundedBoxGeometry(.99,.83,.22,2,.09),0,.77,-.39,.10,0,0);
  for(const x of [-.49,.49])seat.geo(linen,new RoundedBoxGeometry(.21,.43,.91,2,.085),x,.60,-.005);
  seat.geo(ink,new RoundedBoxGeometry(.42,.38,.13,2,.035),.13,.72,-.23,.12,0,.14);
  for(const x of [-.20,.02,.24])seat.sphere(M.walnut,.011,x,.91,-.256,1,1,.35,8,6);
  f.solid(1.35,1.2,1.35,1.95,.6,-13.75);
  rounded(linen,.66,.20,.50,2.72,.28,-12.89,.06,.78);f.solid(.76,.40,.66,2.72,.2,-12.89);
  // Low side table with a single ceramic cup and ginkgo leaf on its saucer.
  f.cyl(M.walnut,.30,.30,.045,1.61,.62,-12.55,24);f.cyl(M.brass,.023,.04,.56,1.61,.31,-12.55,12);f.cyl(M.walnut,.21,.24,.025,1.61,.015,-12.55,24);
  f.cyl(ceramic,.095,.10,.012,1.61,.655,-12.55,20);f.cyl(ceramic,.058,.044,.095,1.61,.707,-12.55,20,0,0,0,true);f.cyl(M.dark,.051,.051,.002,1.61,.748,-12.55,20);f.torus(ceramic,.032,.010,1.68,.71,-12.55,0,Math.PI/2,0,12);
  // Bordered runner: real geometry, no large textile image or transparency layer.
  rounded(ink,2.20,.012,2.25,4.59,.007,-13.54,.025);
  for(const x of [3.55,5.63])f.box(M.runner,.035,.003,2.13,x,.015,-13.54);
  for(const z of [-14.58,-12.50])f.box(M.runner,2.11,.003,.035,4.59,.015,z);
  for(let z=-14.40;z<-12.59;z+=.17)for(const x of [3.64,5.54])f.box(M.gilt,.028,.002,.028,x,.017,z,0,Math.PI/4,0);
  for(let i=0;i<22;i++)for(const z of [-14.69,-12.39])f.box(linen,.010,.006,.08,3.57+i*.098,.007,z);
  // East low cabinets, a tightly curated run of volumes and a specimen frame.
  f.sbox(M.walnut,.52,.89,3.55,6.24,.445,-14.76);f.box(M.oak,.58,.055,3.66,6.21,.917,-14.76);
  for(const z of [-16.1,-15.22,-14.34,-13.46]){f.box(ink,.018,.61,.74,5.97,.47,z);f.torus(M.brass,.024,.005,5.956,.63,z,0,Math.PI/2,0,12);}
  const br=rng(717);for(let i=0;i<28;i++){const z=-16.12+i*.051,h=.18+br()*.12;f.box(i%4===0?M.runner:i%3===0?ink:M.walnut,.23,h,.039,6.17,.949+h/2,z);for(const y of [.99,1.05])f.box(M.gilt,.006,.006,.035,6.051,y,z);}
  picture('leaf',6.51,2.06,-14.68,.91,.70,-Math.PI/2);
  picture('map',1.045,2.08,-15.36,.83,.85,Math.PI/2);
  // Quiet lamp on the cabinet balances the desk pool; no flicker or spinning props.
  f.cyl(M.brass,.105,.14,.025,6.21,.96,-13.41,18);f.cyl(M.brass,.015,.02,.34,6.21,1.13,-13.41,10);
  f.cyl(M.shade,.12,.22,.30,6.21,1.42,-13.41,24,0,0,0,true);f.torus(M.brass,.22,.007,6.21,1.27,-13.41,Math.PI/2,0,0,24);
  // Visible interior pull guarantees return, even if the visitor closes the case.
  f.box(M.brass,.07,.40,.018,4.31,1.30,-11.684);f.torus(M.brass,.045,.009,4.31,1.29,-11.704,0,0,0,20);
  picture('name',5.26,1.72,-11.663,.76,.19,Math.PI);
  // RoundedBoxGeometry is non-indexed; the host batcher requires one topology.
  for(const geometries of B.batches.values())for(const g of geometries)if(!g.index)g.setIndex(Array.from({length:g.attributes.position.count},(_,i)=>i));
  B.finish(group);
  // Thin inlays, illustration plates and luminous glass need no shadow pass.
  group.traverse(o=>{if(o.isMesh&&[plate,garden,glow,M.gilt,M.brass,M.runner].includes(o.material))o.castShadow=false;});
  const lights=[new THREE.PointLight(0xffcd89,3.6,3.3,2),new THREE.PointLight(0xffd6a2,2.4,2.5,2),new THREE.PointLight(0xa7c9c3,6.5,6,2)];
  lights[0].position.set(3.08,1.19,-15.99);lights[1].position.set(6.21,1.32,-13.41);lights[2].position.set(3.8,2.7,-16.75);
  for(const light of lights) {light.name='Study practical (no shadow)';group.add(light);}
  return {group,solids:B.solids,materials:mats,atlas,lights};
}
