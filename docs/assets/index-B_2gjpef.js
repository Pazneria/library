const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-5L12cqxx.js","assets/index-jUiaNZeA.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const A0="modulepreload",R0=function(n){return"/library/"+n},Ya={},C0=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=R0(c),c in Ya)return;Ya[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":A0,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((f,d)=>{h.addEventListener("load",f),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="170",P0=0,ja=1,I0=2,pa=1,L0=2,yn=3,kn=0,Ae=1,Ge=2,Bn=0,Pi=1,cr=2,$a=3,Ka=4,D0=5,Zn=100,U0=101,N0=102,F0=103,O0=104,B0=200,z0=201,k0=202,G0=203,yo=204,Mo=205,H0=206,V0=207,W0=208,X0=209,q0=210,Y0=211,j0=212,$0=213,K0=214,bo=0,So=1,wo=2,Ni=3,Eo=4,To=5,Ao=6,Ro=7,ma=0,Z0=1,J0=2,zn=0,Q0=1,tu=2,eu=3,Pl=4,nu=5,iu=6,su=7,Il=300,Fi=301,Oi=302,Co=303,Po=304,xr=306,wn=1e3,cn=1001,Io=1002,Ve=1003,ru=1004,As=1005,Pe=1006,Rr=1007,He=1008,hn=1009,Ll=1010,Dl=1011,_s=1012,ga=1013,ni=1014,ln=1015,bs=1016,_a=1017,xa=1018,Bi=1020,Ul=35902,Nl=1021,Fl=1022,Ue=1023,Ol=1024,Bl=1025,Ii=1026,zi=1027,va=1028,ya=1029,zl=1030,Ma=1031,ba=1033,nr=33776,ir=33777,sr=33778,rr=33779,Lo=35840,Do=35841,Uo=35842,No=35843,Fo=36196,Oo=37492,Bo=37496,zo=37808,ko=37809,Go=37810,Ho=37811,Vo=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,jo=37817,$o=37818,Ko=37819,Zo=37820,Jo=37821,or=36492,Qo=36494,ta=36495,kl=36283,ea=36284,na=36285,ia=36286,ou=3200,au=3201,Sa=0,cu=1,an="",he="srgb",Vi="srgb-linear",vr="linear",se="srgb",li=7680,Za=519,lu=512,uu=513,hu=514,Gl=515,fu=516,du=517,pu=518,mu=519,lr=35044,Ja="300 es",Mn=2e3,ur=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qa=1234567;const hs=Math.PI/180,xs=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function xe(n,t,e){return Math.max(t,Math.min(e,n))}function wa(n,t){return(n%t+t)%t}function gu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function _u(n,t,e){return n!==t?(e-n)/(t-n):0}function fs(n,t,e){return(1-e)*n+e*t}function xu(n,t,e,i){return fs(n,t,1-Math.exp(-e*i))}function vu(n,t=1){return t-Math.abs(wa(n,t*2)-t)}function yu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Mu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function bu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Su(n,t){return n+Math.random()*(t-n)}function wu(n){return n*(.5-Math.random())}function Eu(n){n!==void 0&&(Qa=n);let t=Qa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tu(n){return n*hs}function Au(n){return n*xs}function Ru(n){return(n&n-1)===0&&n!==0}function Cu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Iu(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),f=a((t-i)/2),d=r((i-t)/2),p=a((i-t)/2);switch(s){case"XYX":n.set(o*u,c*h,c*f,o*l);break;case"YZY":n.set(c*f,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*f,o*u,o*l);break;case"XZX":n.set(o*u,c*p,c*d,o*l);break;case"YXY":n.set(c*d,o*u,c*p,o*l);break;case"ZYZ":n.set(c*p,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Lu={DEG2RAD:hs,RAD2DEG:xs,generateUUID:Xi,clamp:xe,euclideanModulo:wa,mapLinear:gu,inverseLerp:_u,lerp:fs,damp:xu,pingpong:vu,smoothstep:yu,smootherstep:Mu,randInt:bu,randFloat:Su,randFloatSpread:wu,seededRandom:Eu,degToRad:Tu,radToDeg:Au,isPowerOfTwo:Ru,ceilPowerOfTwo:Cu,floorPowerOfTwo:Pu,setQuaternionFromProperEuler:Iu,normalize:Re,denormalize:Ti};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,s,r,a,o,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],_=s[0],m=s[3],g=s[6],v=s[1],y=s[4],x=s[7],T=s[2],E=s[5],w=s[8];return r[0]=a*_+o*v+c*T,r[3]=a*m+o*y+c*E,r[6]=a*g+o*x+c*w,r[1]=l*_+u*v+h*T,r[4]=l*m+u*y+h*E,r[7]=l*g+u*x+h*w,r[2]=f*_+d*v+p*T,r[5]=f*m+d*y+p*E,r[8]=f*g+d*x+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,p=e*h+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=h*_,t[1]=(s*l-u*i)*_,t[2]=(o*i-s*a)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Cr.makeScale(t,e)),this}rotate(t){return this.premultiply(Cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new qt;function Hl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Du(){const n=vs("canvas");return n.style.display="block",n}const tc={};function as(n){n in tc||(tc[n]=!0,console.warn(n))}function Uu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Nu(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fu(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(n.r=Sn(n.r),n.g=Sn(n.g),n.b=Sn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(n.r=Li(n.r),n.g=Li(n.g),n.b=Li(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===an?vr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Sn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Li(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ec=[.64,.33,.3,.6,.15,.06],nc=[.2126,.7152,.0722],ic=[.3127,.329],sc=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[Vi]:{primaries:ec,whitePoint:ic,transfer:vr,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,workingColorSpaceConfig:{unpackColorSpace:he},outputColorSpaceConfig:{drawingBufferColorSpace:he}},[he]:{primaries:ec,whitePoint:ic,transfer:se,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,outputColorSpaceConfig:{drawingBufferColorSpace:he}}});let ui;class Ou{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=vs("canvas")),ui.width=t.width,ui.height=t.height;const i=ui.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Sn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Sn(e[i]/255)*255):e[i]=Sn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bu=0;class Vl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pr(s[a].image)):r.push(Pr(s[a]))}else r=Pr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Pr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ou.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zu=0;class Me extends Wi{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,i=cn,s=cn,r=Pe,a=He,o=Ue,c=hn,l=Me.DEFAULT_ANISOTROPY,u=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Xi(),this.name="",this.source=new Vl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=Il;Me.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,i=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(d+1)/2,T=(g+1)/2,E=(u+f)/4,w=(h+_)/4,b=(p+m)/4;return y>x&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=E/i,r=w/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=b/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=w/r,s=b/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ku extends Wi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Me(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends ku{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wl extends Me{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gu extends Me{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class We{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(h!==_||c!==f||l!==d||u!==p){let m=1-o;const g=c*f+l*d+u*p+h*_,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const T=Math.sqrt(y),E=Math.atan2(T,g*v);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}const x=o*v;if(c=c*m+f*x,l=l*m+d*x,u=u*m+p*x,h=h*m+_*x,m===1-o){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+u*h+c*d-l*f,t[e+1]=c*p+u*f+l*h-o*d,t[e+2]=l*p+u*d+o*f-c*h,t[e+3]=u*p-o*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(r/2),f=c(i/2),d=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ir.copy(this).projectOnVector(t),this.sub(Ir)}reflect(t){return this.sub(Ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new U,oc=new We;class En{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rs.copy(i.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),Cs.subVectors(this.max,Zi),hi.subVectors(t.a,Zi),fi.subVectors(t.b,Zi),di.subVectors(t.c,Zi),In.subVectors(fi,hi),Ln.subVectors(di,fi),Vn.subVectors(hi,di);let e=[0,-In.z,In.y,0,-Ln.z,Ln.y,0,-Vn.z,Vn.y,In.z,0,-In.x,Ln.z,0,-Ln.x,Vn.z,0,-Vn.x,-In.y,In.x,0,-Ln.y,Ln.x,0,-Vn.y,Vn.x,0];return!Lr(e,hi,fi,di,Cs)||(e=[1,0,0,0,1,0,0,0,1],!Lr(e,hi,fi,di,Cs))?!1:(Ps.crossVectors(In,Ln),e=[Ps.x,Ps.y,Ps.z],Lr(e,hi,fi,di,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new U,new U,new U,new U,new U,new U,new U,new U],Ke=new U,Rs=new En,hi=new U,fi=new U,di=new U,In=new U,Ln=new U,Vn=new U,Zi=new U,Cs=new U,Ps=new U,Wn=new U;function Lr(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Wn.fromArray(n,r);const o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),c=t.dot(Wn),l=e.dot(Wn),u=i.dot(Wn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Hu=new En,Ji=new U,Dr=new U;class qi{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Hu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ji,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Dr)),this.expandByPoint(Ji.copy(t.center).sub(Dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new U,Ur=new U,Is=new U,Dn=new U,Nr=new U,Ls=new U,Fr=new U;class Xl{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ur.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Ur);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Is),o=Dn.dot(this.direction),c=-Dn.dot(Is),l=Dn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,p;if(u>0)if(h=a*c-o,f=a*o-c,p=r*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-p?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=p?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ur).addScaledVector(Is,f),d}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const i=gn.dot(this.direction),s=gn.dot(gn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,i,s,r){Nr.subVectors(e,t),Ls.subVectors(i,t),Fr.crossVectors(Nr,Ls);let a=this.direction.dot(Fr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,t);const c=o*this.direction.dot(Ls.crossVectors(Dn,Ls));if(c<0)return null;const l=o*this.direction.dot(Nr.cross(Dn));if(l<0||c+l>a)return null;const u=-o*Dn.dot(Fr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,i,s,r,a,o,c,l,u,h,f,d,p,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,u,h,f,d,p,_,m)}set(t,e,i,s,r,a,o,c,l,u,h,f,d,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,p=o*u,_=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+p*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=p+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,p=l*u,_=l*h;e[0]=f+_*o,e[4]=p*o-d,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-p,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,p=l*u,_=l*h;e[0]=f-_*o,e[4]=-a*h,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,d=a*h,p=o*u,_=o*h;e[0]=c*u,e[4]=p*l-d,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=d*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,p=o*c,_=o*l;e[0]=c*u,e[4]=_-f*h,e[8]=p*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*h+p,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*c,d=a*l,p=o*c,_=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=a*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vu,t,Wu)}lookAt(t,e,i){const s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Un.crossVectors(i,Fe),Un.lengthSq()===0&&(Math.abs(i.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Un.crossVectors(i,Fe)),Un.normalize(),Ds.crossVectors(Fe,Un),s[0]=Un.x,s[4]=Ds.x,s[8]=Fe.x,s[1]=Un.y,s[5]=Ds.y,s[9]=Fe.y,s[2]=Un.z,s[6]=Ds.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],_=i[6],m=i[10],g=i[14],v=i[3],y=i[7],x=i[11],T=i[15],E=s[0],w=s[4],b=s[8],S=s[12],M=s[1],A=s[5],N=s[9],P=s[13],I=s[2],k=s[6],B=s[10],$=s[14],H=s[3],K=s[7],nt=s[11],W=s[15];return r[0]=a*E+o*M+c*I+l*H,r[4]=a*w+o*A+c*k+l*K,r[8]=a*b+o*N+c*B+l*nt,r[12]=a*S+o*P+c*$+l*W,r[1]=u*E+h*M+f*I+d*H,r[5]=u*w+h*A+f*k+d*K,r[9]=u*b+h*N+f*B+d*nt,r[13]=u*S+h*P+f*$+d*W,r[2]=p*E+_*M+m*I+g*H,r[6]=p*w+_*A+m*k+g*K,r[10]=p*b+_*N+m*B+g*nt,r[14]=p*S+_*P+m*$+g*W,r[3]=v*E+y*M+x*I+T*H,r[7]=v*w+y*A+x*k+T*K,r[11]=v*b+y*N+x*B+T*nt,r[15]=v*S+y*P+x*$+T*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],_=t[7],m=t[11],g=t[15];return p*(+r*c*h-s*l*h-r*o*f+i*l*f+s*o*d-i*c*d)+_*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*u-r*c*u)+m*(+e*l*h-e*o*d-r*a*h+i*a*d+r*o*u-i*l*u)+g*(-s*o*u-e*c*h+e*o*f+s*a*h-i*a*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],_=t[13],m=t[14],g=t[15],v=h*m*l-_*f*l+_*c*d-o*m*d-h*c*g+o*f*g,y=p*f*l-u*m*l-p*c*d+a*m*d+u*c*g-a*f*g,x=u*_*l-p*h*l+p*o*d-a*_*d-u*o*g+a*h*g,T=p*h*c-u*_*c-p*o*f+a*_*f+u*o*m-a*h*m,E=e*v+i*y+s*x+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*g-i*f*g)*w,t[2]=(o*m*r-_*c*r+_*s*l-i*m*l-o*s*g+i*c*g)*w,t[3]=(h*c*r-o*f*r-h*s*l+i*f*l+o*s*d-i*c*d)*w,t[4]=y*w,t[5]=(u*m*r-p*f*r+p*s*d-e*m*d-u*s*g+e*f*g)*w,t[6]=(p*c*r-a*m*r-p*s*l+e*m*l+a*s*g-e*c*g)*w,t[7]=(a*f*r-u*c*r+u*s*l-e*f*l-a*s*d+e*c*d)*w,t[8]=x*w,t[9]=(p*h*r-u*_*r-p*i*d+e*_*d+u*i*g-e*h*g)*w,t[10]=(a*_*r-p*o*r+p*i*l-e*_*l-a*i*g+e*o*g)*w,t[11]=(u*o*r-a*h*r-u*i*l+e*h*l+a*i*d-e*o*d)*w,t[12]=T*w,t[13]=(u*_*s-p*h*s+p*i*f-e*_*f-u*i*m+e*h*m)*w,t[14]=(p*o*s-a*_*s-p*i*c+e*_*c+a*i*m-e*o*m)*w,t[15]=(a*h*s-u*o*s+u*i*c-e*h*c-a*i*f+e*o*f)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,p=r*h,_=a*u,m=a*h,g=o*h,v=c*l,y=c*u,x=c*h,T=i.x,E=i.y,w=i.z;return s[0]=(1-(_+g))*T,s[1]=(d+x)*T,s[2]=(p-y)*T,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+g))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(p+y)*w,s[9]=(m-v)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=pi.set(s[0],s[1],s[2]).length();const a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);const l=1/r,u=1/a,h=1/o;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=u,Ze.elements[5]*=u,Ze.elements[6]*=u,Ze.elements[8]*=h,Ze.elements[9]*=h,Ze.elements[10]*=h,e.setFromRotationMatrix(Ze),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Mn){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,p;if(o===Mn)d=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===ur)d=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Mn){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(a-r),f=(e+t)*l,d=(i+s)*u;let p,_;if(o===Mn)p=(a+r)*h,_=-2*h;else if(o===ur)p=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const pi=new U,Ze=new jt,Vu=new U(0,0,0),Wu=new U(1,1,1),Un=new U,Ds=new U,Fe=new U,ac=new jt,cc=new We;class Ie{constructor(t=0,e=0,i=0,s=Ie.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ie.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xu=0;const lc=new U,mi=new We,_n=new jt,Us=new U,Qi=new U,qu=new U,Yu=new We,uc=new U(1,0,0),hc=new U(0,1,0),fc=new U(0,0,1),dc={type:"added"},ju={type:"removed"},gi={type:"childadded",child:null},Or={type:"childremoved",child:null};class ve extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new U,e=new Ie,i=new We,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new qt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(hc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(hc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Us.copy(t):Us.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Qi,Us,this.up):_n.lookAt(Us,Qi,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(_n),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ju),Or.child=t,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ve.DEFAULT_UP=new U(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new U,xn=new U,Br=new U,vn=new U,_i=new U,xi=new U,pc=new U,zr=new U,kr=new U,Gr=new U,Hr=new re,Vr=new re,Wr=new re;class tn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Je.subVectors(t,e),s.cross(Je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Je.subVectors(s,e),xn.subVectors(i,e),Br.subVectors(t,e);const a=Je.dot(Je),o=Je.dot(xn),c=Je.dot(Br),l=xn.dot(xn),u=xn.dot(Br),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,p=(a*u-o*c)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vn.x),c.addScaledVector(a,vn.y),c.addScaledVector(o,vn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return Hr.setScalar(0),Vr.setScalar(0),Wr.setScalar(0),Hr.fromBufferAttribute(t,e),Vr.fromBufferAttribute(t,i),Wr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Hr,r.x),a.addScaledVector(Vr,r.y),a.addScaledVector(Wr,r.z),a}static isFrontFacing(t,e,i,s){return Je.subVectors(i,e),xn.subVectors(t,e),Je.cross(xn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Je.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;_i.subVectors(s,i),xi.subVectors(r,i),zr.subVectors(t,i);const c=_i.dot(zr),l=xi.dot(zr);if(c<=0&&l<=0)return e.copy(i);kr.subVectors(t,s);const u=_i.dot(kr),h=xi.dot(kr);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(_i,a);Gr.subVectors(t,r);const d=_i.dot(Gr),p=xi.dot(Gr);if(p>=0&&d<=p)return e.copy(r);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(xi,o);const m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return pc.subVectors(r,s),o=(h-u)/(h-u+(d-p)),e.copy(s).addScaledVector(pc,o);const g=1/(m+_+f);return a=_*g,o=f*g,e.copy(i).addScaledVector(_i,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Xr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=he){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Kt.workingColorSpace){if(t=wa(t,1),e=xe(e,0,1),i=xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Xr(a,r,t+1/3),this.g=Xr(a,r,t),this.b=Xr(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=he){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=he){const i=Yl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=he){return Kt.fromWorkingColorSpace(we.copy(this),t),Math.round(xe(we.r*255,0,255))*65536+Math.round(xe(we.g*255,0,255))*256+Math.round(xe(we.b*255,0,255))}getHexString(t=he){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(we.copy(this),e);const i=we.r,s=we.g,r=we.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=he){Kt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,i=we.g,s=we.b;return t!==he?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Ns);const i=fs(Nn.h,Ns.h,e),s=fs(Nn.s,Ns.s,e),r=fs(Nn.l,Ns.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Ht;Ht.NAMES=Yl;let $u=0;class oi extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Xi(),this.name="",this.blending=Pi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=Mo,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yo&&(i.blendSrc=this.blendSrc),this.blendDst!==Mo&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Za&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ki extends oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ie,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new U,Fs=new It;class pe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=lr,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fs.fromBufferAttribute(this,e),Fs.applyMatrix3(t),this.setXY(e,Fs.x,Fs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lr&&(t.usage=this.usage),t}}class jl extends pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $l extends pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ot extends pe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ku=0;const qe=new jt,qr=new ve,vi=new U,Oe=new En,ts=new En,_e=new U;class Qt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hl(t)?$l:jl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,i){return qe.makeTranslation(t,e,i),this.applyMatrix4(qe),this}scale(t,e,i){return qe.makeScale(t,e,i),this.applyMatrix4(qe),this}lookAt(t){return qr.lookAt(t),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Oe.min,ts.min),Oe.expandByPoint(_e),_e.addVectors(Oe.max,ts.max),Oe.expandByPoint(_e)):(Oe.expandByPoint(ts.min),Oe.expandByPoint(ts.max))}Oe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_e.fromBufferAttribute(o,l),c&&(vi.fromBufferAttribute(t,l),_e.add(vi)),s=Math.max(s,i.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let b=0;b<i.count;b++)o[b]=new U,c[b]=new U;const l=new U,u=new U,h=new U,f=new It,d=new It,p=new It,_=new U,m=new U;function g(b,S,M){l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,M),u.sub(l),h.sub(l),d.sub(f),p.sub(f);const A=1/(d.x*p.y-p.x*d.y);isFinite(A)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(A),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(A),o[b].add(_),o[S].add(_),o[M].add(_),c[b].add(m),c[S].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let b=0,S=v.length;b<S;++b){const M=v[b],A=M.start,N=M.count;for(let P=A,I=A+N;P<I;P+=3)g(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new U,x=new U,T=new U,E=new U;function w(b){T.fromBufferAttribute(s,b),E.copy(T);const S=o[b];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(E,S);const A=x.dot(c[b])<0?-1:1;a.setXYZW(b,y.x,y.y,y.z,A)}for(let b=0,S=v.length;b<S;++b){const M=v[b],A=M.start,N=M.count;for(let P=A,I=A+N;P<I;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,p=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*u;for(let g=0;g<u;g++)f[p++]=l[d++]}return new pe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new jt,Xn=new Xl,Os=new qi,gc=new U,Bs=new U,zs=new U,ks=new U,Yr=new U,Gs=new U,_c=new U,Hs=new U;class Jt extends ve{constructor(t=new Qt,e=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Gs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Yr.fromBufferAttribute(h,t),a?Gs.addScaledVector(Yr,u):Gs.addScaledVector(Yr.sub(e),u))}e.add(Gs)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(Os.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Os,gc)===null||Xn.origin.distanceToSquared(gc)>(t.far-t.near)**2))&&(mc.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(mc),!(i.boundingBox!==null&&Xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,T=y;x<T;x+=3){const E=o.getX(x),w=o.getX(x+1),b=o.getX(x+2);s=Vs(this,g,t,i,l,u,h,E,w,b),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=Vs(this,a,t,i,l,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,T=y;x<T;x+=3){const E=x,w=x+1,b=x+2;s=Vs(this,g,t,i,l,u,h,E,w,b),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const v=m,y=m+1,x=m+2;s=Vs(this,a,t,i,l,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zu(n,t,e,i,s,r,a,o){let c;if(t.side===Ae?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===kn,o),c===null)return null;Hs.copy(o),Hs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Hs);return l<e.near||l>e.far?null:{distance:l,point:Hs.clone(),object:n}}function Vs(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Bs),n.getVertexPosition(c,zs),n.getVertexPosition(l,ks);const u=Zu(n,t,e,i,Bs,zs,ks,_c);if(u){const h=new U;tn.getBarycoord(_c,Bs,zs,ks,h),s&&(u.uv=tn.getInterpolatedAttribute(s,o,c,l,h,new It)),r&&(u.uv1=tn.getInterpolatedAttribute(r,o,c,l,h,new It)),a&&(u.normal=tn.getInterpolatedAttribute(a,o,c,l,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new U,materialIndex:0};tn.getNormal(Bs,zs,ks,f.normal),u.face=f,u.barycoord=h}return u}class Tn extends Qt{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,s,a,2),p("x","z","y",1,-1,t,i,-e,s,a,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(h,2));function p(_,m,g,v,y,x,T,E,w,b,S){const M=x/w,A=T/b,N=x/2,P=T/2,I=E/2,k=w+1,B=b+1;let $=0,H=0;const K=new U;for(let nt=0;nt<B;nt++){const W=nt*A-P;for(let ot=0;ot<k;ot++){const Ct=ot*M-N;K[_]=Ct*v,K[m]=W*y,K[g]=I,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[g]=E>0?1:-1,u.push(K.x,K.y,K.z),h.push(ot/w),h.push(1-nt/b),$+=1}}for(let nt=0;nt<b;nt++)for(let W=0;W<w;W++){const ot=f+W+k*nt,Ct=f+W+k*(nt+1),J=f+(W+1)+k*(nt+1),at=f+(W+1)+k*nt;c.push(ot,Ct,at),c.push(Ct,J,at),H+=6}o.addGroup(d,H,S),d+=H,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ce(n){const t={};for(let e=0;e<n.length;e++){const i=Gi(n[e]);for(const s in i)t[s]=i[s]}return t}function Ju(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Kl(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Qu={clone:Gi,merge:Ce};var t1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t1,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Zl extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new U,xc=new It,vc=new It;class ke extends Zl{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,xc,vc),e.subVectors(vc,xc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const yi=-90,Mi=1;class n1 extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(yi,Mi,t,e);s.layers=this.layers,this.add(s);const r=new ke(yi,Mi,t,e);r.layers=this.layers,this.add(r);const a=new ke(yi,Mi,t,e);a.layers=this.layers,this.add(a);const o=new ke(yi,Mi,t,e);o.layers=this.layers,this.add(o);const c=new ke(yi,Mi,t,e);c.layers=this.layers,this.add(c);const l=new ke(yi,Mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Jl extends Me{constructor(t,e,i,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class i1 extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Jl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Tn(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ae,blending:Bn});r.uniforms.tEquirect.value=e;const a=new Jt(s,r),o=e.minFilter;return e.minFilter===He&&(e.minFilter=Pe),new n1(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const jr=new U,s1=new U,r1=new qt;class $n{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=jr.subVectors(i,e).cross(s1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(jr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||r1.getNormalMatrix(t),s=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new qi,Ws=new U;class Ea{constructor(t=new $n,e=new $n,i=new $n,s=new $n,r=new $n,a=new $n){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],p=s[9],_=s[10],m=s[11],g=s[12],v=s[13],y=s[14],x=s[15];if(i[0].setComponents(c-r,f-l,m-d,x-g).normalize(),i[1].setComponents(c+r,f+l,m+d,x+g).normalize(),i[2].setComponents(c+a,f+u,m+p,x+v).normalize(),i[3].setComponents(c-a,f-u,m-p,x-v).normalize(),i[4].setComponents(c-o,f-h,m-_,x-y).normalize(),e===Mn)i[5].setComponents(c+o,f+h,m+_,x+y).normalize();else if(e===ur)i[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ws.x=s.normal.x>0?t.max.x:t.min.x,Ws.y=s.normal.y>0?t.max.y:t.min.y,Ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ql(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function o1(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const _=h[d];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class si extends Qt{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=t/o,f=e/c,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const v=g*f-a;for(let y=0;y<l;y++){const x=y*h-r;p.push(x,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){const y=v+l*g,x=v+l*(g+1),T=v+1+l*(g+1),E=v+1+l*g;d.push(y,x,E),d.push(x,T,E)}this.setIndex(d),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.widthSegments,t.heightSegments)}}var a1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,l1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,g1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,P1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O1="gl_FragColor = linearToOutputTexel( gl_FragColor );",B1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ih=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ah=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ph=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ch=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ph=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ih=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$h=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:a1,alphahash_pars_fragment:c1,alphamap_fragment:l1,alphamap_pars_fragment:u1,alphatest_fragment:h1,alphatest_pars_fragment:f1,aomap_fragment:d1,aomap_pars_fragment:p1,batching_pars_vertex:m1,batching_vertex:g1,begin_vertex:_1,beginnormal_vertex:x1,bsdfs:v1,iridescence_fragment:y1,bumpmap_pars_fragment:M1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:E1,color_fragment:T1,color_pars_fragment:A1,color_pars_vertex:R1,color_vertex:C1,common:P1,cube_uv_reflection_fragment:I1,defaultnormal_vertex:L1,displacementmap_pars_vertex:D1,displacementmap_vertex:U1,emissivemap_fragment:N1,emissivemap_pars_fragment:F1,colorspace_fragment:O1,colorspace_pars_fragment:B1,envmap_fragment:z1,envmap_common_pars_fragment:k1,envmap_pars_fragment:G1,envmap_pars_vertex:H1,envmap_physical_pars_fragment:Q1,envmap_vertex:V1,fog_vertex:W1,fog_pars_vertex:X1,fog_fragment:q1,fog_pars_fragment:Y1,gradientmap_pars_fragment:j1,lightmap_pars_fragment:$1,lights_lambert_fragment:K1,lights_lambert_pars_fragment:Z1,lights_pars_begin:J1,lights_toon_fragment:th,lights_toon_pars_fragment:eh,lights_phong_fragment:nh,lights_phong_pars_fragment:ih,lights_physical_fragment:sh,lights_physical_pars_fragment:rh,lights_fragment_begin:oh,lights_fragment_maps:ah,lights_fragment_end:ch,logdepthbuf_fragment:lh,logdepthbuf_pars_fragment:uh,logdepthbuf_pars_vertex:hh,logdepthbuf_vertex:fh,map_fragment:dh,map_pars_fragment:ph,map_particle_fragment:mh,map_particle_pars_fragment:gh,metalnessmap_fragment:_h,metalnessmap_pars_fragment:xh,morphinstance_vertex:vh,morphcolor_vertex:yh,morphnormal_vertex:Mh,morphtarget_pars_vertex:bh,morphtarget_vertex:Sh,normal_fragment_begin:wh,normal_fragment_maps:Eh,normal_pars_fragment:Th,normal_pars_vertex:Ah,normal_vertex:Rh,normalmap_pars_fragment:Ch,clearcoat_normal_fragment_begin:Ph,clearcoat_normal_fragment_maps:Ih,clearcoat_pars_fragment:Lh,iridescence_pars_fragment:Dh,opaque_fragment:Uh,packing:Nh,premultiplied_alpha_fragment:Fh,project_vertex:Oh,dithering_fragment:Bh,dithering_pars_fragment:zh,roughnessmap_fragment:kh,roughnessmap_pars_fragment:Gh,shadowmap_pars_fragment:Hh,shadowmap_pars_vertex:Vh,shadowmap_vertex:Wh,shadowmask_pars_fragment:Xh,skinbase_vertex:qh,skinning_pars_vertex:Yh,skinning_vertex:jh,skinnormal_vertex:$h,specularmap_fragment:Kh,specularmap_pars_fragment:Zh,tonemapping_fragment:Jh,tonemapping_pars_fragment:Qh,transmission_fragment:tf,transmission_pars_fragment:ef,uv_pars_fragment:nf,uv_pars_vertex:sf,uv_vertex:rf,worldpos_vertex:of,background_vert:af,background_frag:cf,backgroundCube_vert:lf,backgroundCube_frag:uf,cube_vert:hf,cube_frag:ff,depth_vert:df,depth_frag:pf,distanceRGBA_vert:mf,distanceRGBA_frag:gf,equirect_vert:_f,equirect_frag:xf,linedashed_vert:vf,linedashed_frag:yf,meshbasic_vert:Mf,meshbasic_frag:bf,meshlambert_vert:Sf,meshlambert_frag:wf,meshmatcap_vert:Ef,meshmatcap_frag:Tf,meshnormal_vert:Af,meshnormal_frag:Rf,meshphong_vert:Cf,meshphong_frag:Pf,meshphysical_vert:If,meshphysical_frag:Lf,meshtoon_vert:Df,meshtoon_frag:Uf,points_vert:Nf,points_frag:Ff,shadow_vert:Of,shadow_frag:Bf,sprite_vert:zf,sprite_frag:kf},Mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},on={basic:{uniforms:Ce([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ce([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ce([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ce([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ce([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ce([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ce([Mt.points,Mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ce([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ce([Mt.common,Mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ce([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ce([Mt.sprite,Mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ce([Mt.common,Mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ce([Mt.lights,Mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};on.physical={uniforms:Ce([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Xs={r:0,b:0,g:0},Yn=new Ie,Gf=new jt;function Hf(n,t,e,i,s,r,a){const o=new Ht(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function p(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=p(v);x===null?g(o,c):x&&x.isColor&&(g(x,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const x=p(y);x&&(x.isCubeTexture||x.mapping===xr)?(u===void 0&&(u=new Jt(new Tn(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Gi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Yn.copy(y.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(Yn)),u.material.toneMapped=Kt.getTransfer(x.colorSpace)!==se,(h!==x||f!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Jt(new si(2,2),new Ye({name:"BackgroundMaterial",uniforms:Gi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(Xs,Kl(n)),i.buffers.color.setClear(Xs.r,Xs.g,Xs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),c=y,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,g(o,c)},render:_,addToRenderList:m}}function Vf(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(M,A,N,P,I){let k=!1;const B=h(P,N,A);r!==B&&(r=B,l(r.object)),k=d(M,P,N,I),k&&p(M,P,N,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,x(M,A,N,P),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,A,N){const P=N.wireframe===!0;let I=i[M.id];I===void 0&&(I={},i[M.id]=I);let k=I[A.id];k===void 0&&(k={},I[A.id]=k);let B=k[P];return B===void 0&&(B=f(c()),k[P]=B),B}function f(M){const A=[],N=[],P=[];for(let I=0;I<e;I++)A[I]=0,N[I]=0,P[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:P,object:M,attributes:{},index:null}}function d(M,A,N,P){const I=r.attributes,k=A.attributes;let B=0;const $=N.getAttributes();for(const H in $)if($[H].location>=0){const nt=I[H];let W=k[H];if(W===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),nt===void 0||nt.attribute!==W||W&&nt.data!==W.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function p(M,A,N,P){const I={},k=A.attributes;let B=0;const $=N.getAttributes();for(const H in $)if($[H].location>=0){let nt=k[H];nt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor));const W={};W.attribute=nt,nt&&nt.data&&(W.data=nt.data),I[H]=W,B++}r.attributes=I,r.attributesNum=B,r.index=P}function _(){const M=r.newAttributes;for(let A=0,N=M.length;A<N;A++)M[A]=0}function m(M){g(M,0)}function g(M,A){const N=r.newAttributes,P=r.enabledAttributes,I=r.attributeDivisors;N[M]=1,P[M]===0&&(n.enableVertexAttribArray(M),P[M]=1),I[M]!==A&&(n.vertexAttribDivisor(M,A),I[M]=A)}function v(){const M=r.newAttributes,A=r.enabledAttributes;for(let N=0,P=A.length;N<P;N++)A[N]!==M[N]&&(n.disableVertexAttribArray(N),A[N]=0)}function y(M,A,N,P,I,k,B){B===!0?n.vertexAttribIPointer(M,A,N,I,k):n.vertexAttribPointer(M,A,N,P,I,k)}function x(M,A,N,P){_();const I=P.attributes,k=N.getAttributes(),B=A.defaultAttributeValues;for(const $ in k){const H=k[$];if(H.location>=0){let K=I[$];if(K===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const nt=K.normalized,W=K.itemSize,ot=t.get(K);if(ot===void 0)continue;const Ct=ot.buffer,J=ot.type,at=ot.bytesPerElement,C=J===n.INT||J===n.UNSIGNED_INT||K.gpuType===ga;if(K.isInterleavedBufferAttribute){const F=K.data,O=F.stride,G=K.offset;if(F.isInstancedInterleavedBuffer){for(let X=0;X<H.locationSize;X++)g(H.location+X,F.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let X=0;X<H.locationSize;X++)m(H.location+X);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let X=0;X<H.locationSize;X++)y(H.location+X,W/H.locationSize,J,nt,O*at,(G+W/H.locationSize*X)*at,C)}else{if(K.isInstancedBufferAttribute){for(let F=0;F<H.locationSize;F++)g(H.location+F,K.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let F=0;F<H.locationSize;F++)m(H.location+F);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let F=0;F<H.locationSize;F++)y(H.location+F,W/H.locationSize,J,nt,W*at,W/H.locationSize*F*at,C)}}else if(B!==void 0){const nt=B[$];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(H.location,nt);break;case 3:n.vertexAttrib3fv(H.location,nt);break;case 4:n.vertexAttrib4fv(H.location,nt);break;default:n.vertexAttrib1fv(H.location,nt)}}}}v()}function T(){b();for(const M in i){const A=i[M];for(const N in A){const P=A[N];for(const I in P)u(P[I].object),delete P[I];delete A[N]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const A=i[M.id];for(const N in A){const P=A[N];for(const I in P)u(P[I].object),delete P[I];delete A[N]}delete i[M.id]}function w(M){for(const A in i){const N=i[A];if(N[M.id]===void 0)continue;const P=N[M.id];for(const I in P)u(P[I].object),delete P[I];delete N[M.id]}}function b(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Wf(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];e.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)a(l[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_]*f[_];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xf(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Ue&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const b=w===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==hn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ln&&!b)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function qf(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new $n,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{const v=r?0:i,y=v*4;let x=g.clippingState||null;c.value=x,x=u(p,f,y,d);for(let T=0;T!==y;++T)x[T]=e[T];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,p){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,p!==!0||m===null){const g=d+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,x=d;y!==_;++y,x+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Yf(n){let t=new WeakMap;function e(a,o){return o===Co?a.mapping=Fi:o===Po&&(a.mapping=Oi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Co||o===Po)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new i1(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class t0 extends Zl{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ci=4,yc=[.125,.215,.35,.446,.526,.582],Jn=20,$r=new t0,Mc=new Ht;let Kr=null,Zr=0,Jr=0,Qr=!1;const Kn=(1+Math.sqrt(5))/2,bi=1/Kn,bc=[new U(-Kn,bi,0),new U(Kn,bi,0),new U(-bi,0,Kn),new U(bi,0,Kn),new U(0,Kn,-bi),new U(0,Kn,bi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class sa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Kr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kr,Zr,Jr),this._renderer.xr.enabled=Qr,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:bs,format:Ue,colorSpace:Vi,depthBuffer:!1},s=Sc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jf(r)),this._blurMaterial=$f(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,i,s){const o=new ke(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Mc),u.toneMapping=zn,u.autoClear=!1;const d=new ki({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),p=new Jt(new Tn,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Mc),_=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):v===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const y=this._cubeSize;qs(s,v*y,g>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(p,o),u.render(t,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Fi||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;qs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,$r)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bc[(s-r-1)%bc.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Jn-1),_=r/p,m=isFinite(r)?1+Math.floor(u*_):Jn;m>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const g=[];let v=0;for(let w=0;w<Jn;++w){const b=w/_,S=Math.exp(-b*b/2);g.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<g.length;w++)g[w]=g[w]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-i;const x=this._sizeLods[s],T=3*x*(s>y-Ci?s-y+Ci:0),E=4*(this._cubeSize-x);qs(e,T,E,3*x,2*x),c.setRenderTarget(e),c.render(h,$r)}}function jf(n){const t=[],e=[],i=[];let s=n;const r=n-Ci+1+yc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-Ci?c=yc[a-n+Ci-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,_=3,m=2,g=1,v=new Float32Array(_*p*d),y=new Float32Array(m*p*d),x=new Float32Array(g*p*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,b=E>2?0:-1,S=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];v.set(S,_*p*E),y.set(f,m*p*E);const M=[E,E,E,E,E,E];x.set(M,g*p*E)}const T=new Qt;T.setAttribute("position",new pe(v,_)),T.setAttribute("uv",new pe(y,m)),T.setAttribute("faceIndex",new pe(x,g)),t.push(T),s>Ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Sc(n,t,e){const i=new ii(n,t,e);return i.texture.mapping=xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function $f(n,t,e){const i=new Float32Array(Jn),s=new U(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function wc(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ec(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kf(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Co||c===Po,u=c===Fi||c===Oi;if(l||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new sa(n)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new sa(n)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Zf(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&as("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Jf(n,t,e,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let m=0,g=_.length;m<g;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const _=d[p];for(let m=0,g=_.length;m<g;m++)t.update(_[m],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,p=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){const T=v[y+0],E=v[y+1],w=v[y+2];f.push(T,E,E,w,w,T)}}else if(p!==void 0){const v=p.array;_=p.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const T=y+0,E=y+1,w=y+2;f.push(T,E,E,w,w,T)}}else return;const m=new(Hl(f)?$l:jl)(f,1);m.version=_;const g=r.get(h);g&&t.remove(g),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Qf(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*a),e.update(d,i,1)}function l(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*a,p),e.update(d,i,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];e.update(m,i,1)}function h(f,d,p,_){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)l(f[g]/a,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,p);let g=0;for(let v=0;v<p;v++)g+=d[v]*_[v];e.update(g,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function td(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ed(n,t,e){const i=new WeakMap,s=new re;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let S=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const E=new Float32Array(x*T*4*h),w=new Wl(E,x,T,h);w.type=ln,w.needsUpdate=!0;const b=y*4;for(let M=0;M<h;M++){const A=m[M],N=g[M],P=v[M],I=x*T*4*M;for(let k=0;k<A.count;k++){const B=k*b;d===!0&&(s.fromBufferAttribute(A,k),E[I+B+0]=s.x,E[I+B+1]=s.y,E[I+B+2]=s.z,E[I+B+3]=0),p===!0&&(s.fromBufferAttribute(N,k),E[I+B+4]=s.x,E[I+B+5]=s.y,E[I+B+6]=s.z,E[I+B+7]=0),_===!0&&(s.fromBufferAttribute(P,k),E[I+B+8]=s.x,E[I+B+9]=s.y,E[I+B+10]=s.z,E[I+B+11]=P.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new It(x,T)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const p=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function nd(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class e0 extends Me{constructor(t,e,i,s,r,a,o,c,l,u=Ii){if(u!==Ii&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ii&&(i=ni),i===void 0&&u===zi&&(i=Bi),super(null,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const n0=new Me,Tc=new e0(1,1),i0=new Wl,s0=new Gu,r0=new Jl,Ac=[],Rc=[],Cc=new Float32Array(16),Pc=new Float32Array(9),Ic=new Float32Array(4);function Yi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Ac[s];if(r===void 0&&(r=new Float32Array(s),Ac[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function yr(n,t){let e=Rc[t];e===void 0&&(e=new Int32Array(t),Rc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function id(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),ge(e,t)}}function rd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),ge(e,t)}}function od(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),ge(e,t)}}function ad(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Ic.set(i),n.uniformMatrix2fv(this.addr,!1,Ic),ge(e,i)}}function cd(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Pc.set(i),n.uniformMatrix3fv(this.addr,!1,Pc),ge(e,i)}}function ld(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Cc.set(i),n.uniformMatrix4fv(this.addr,!1,Cc),ge(e,i)}}function ud(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function hd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),ge(e,t)}}function fd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),ge(e,t)}}function dd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),ge(e,t)}}function pd(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function md(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),ge(e,t)}}function gd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),ge(e,t)}}function _d(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),ge(e,t)}}function xd(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Tc.compareFunction=Gl,r=Tc):r=n0,e.setTexture2D(t||r,s)}function vd(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||s0,s)}function yd(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||r0,s)}function Md(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||i0,s)}function bd(n){switch(n){case 5126:return id;case 35664:return sd;case 35665:return rd;case 35666:return od;case 35674:return ad;case 35675:return cd;case 35676:return ld;case 5124:case 35670:return ud;case 35667:case 35671:return hd;case 35668:case 35672:return fd;case 35669:case 35673:return dd;case 5125:return pd;case 36294:return md;case 36295:return gd;case 36296:return _d;case 35678:case 36198:case 36298:case 36306:case 35682:return xd;case 35679:case 36299:case 36307:return vd;case 35680:case 36300:case 36308:case 36293:return yd;case 36289:case 36303:case 36311:case 36292:return Md}}function Sd(n,t){n.uniform1fv(this.addr,t)}function wd(n,t){const e=Yi(t,this.size,2);n.uniform2fv(this.addr,e)}function Ed(n,t){const e=Yi(t,this.size,3);n.uniform3fv(this.addr,e)}function Td(n,t){const e=Yi(t,this.size,4);n.uniform4fv(this.addr,e)}function Ad(n,t){const e=Yi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Rd(n,t){const e=Yi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Cd(n,t){const e=Yi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Pd(n,t){n.uniform1iv(this.addr,t)}function Id(n,t){n.uniform2iv(this.addr,t)}function Ld(n,t){n.uniform3iv(this.addr,t)}function Dd(n,t){n.uniform4iv(this.addr,t)}function Ud(n,t){n.uniform1uiv(this.addr,t)}function Nd(n,t){n.uniform2uiv(this.addr,t)}function Fd(n,t){n.uniform3uiv(this.addr,t)}function Od(n,t){n.uniform4uiv(this.addr,t)}function Bd(n,t,e){const i=this.cache,s=t.length,r=yr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||n0,r[a])}function zd(n,t,e){const i=this.cache,s=t.length,r=yr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||s0,r[a])}function kd(n,t,e){const i=this.cache,s=t.length,r=yr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||r0,r[a])}function Gd(n,t,e){const i=this.cache,s=t.length,r=yr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||i0,r[a])}function Hd(n){switch(n){case 5126:return Sd;case 35664:return wd;case 35665:return Ed;case 35666:return Td;case 35674:return Ad;case 35675:return Rd;case 35676:return Cd;case 5124:case 35670:return Pd;case 35667:case 35671:return Id;case 35668:case 35672:return Ld;case 35669:case 35673:return Dd;case 5125:return Ud;case 36294:return Nd;case 36295:return Fd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return zd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Gd}}class Vd{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=bd(e.type)}}class Wd{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hd(e.type)}}class Xd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Lc(n,t){n.seq.push(t),n.map[t.id]=t}function qd(n,t,e){const i=n.name,s=i.length;for(to.lastIndex=0;;){const r=to.exec(i),a=to.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Lc(e,l===void 0?new Vd(o,n,t):new Wd(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new Xd(o),Lc(e,h)),e=h}}}class ar{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);qd(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Dc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Yd=37297;let jd=0;function $d(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Uc=new qt;function Kd(n){Kt._getMatrix(Uc,Kt.workingColorSpace,n);const t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case vr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$d(n.getShaderSource(t),a)}else return s}function Zd(n,t){const e=Kd(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jd(n,t){let e;switch(t){case Q0:e="Linear";break;case tu:e="Reinhard";break;case eu:e="Cineon";break;case Pl:e="ACESFilmic";break;case iu:e="AgX";break;case su:e="Neutral";break;case nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ys=new U;function Qd(){Kt.getLuminanceCoefficients(Ys);const n=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function ep(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function np(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function cs(n){return n!==""}function Fc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(n){return n.replace(ip,rp)}const sp=new Map;function rp(n,t){let e=Yt[t];if(e===void 0){const i=sp.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ra(e)}const op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(n){return n.replace(op,ap)}function ap(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cp(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pa?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===L0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function lp(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fi:case Oi:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function up(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function hp(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ma:t="ENVMAP_BLENDING_MULTIPLY";break;case Z0:t="ENVMAP_BLENDING_MIX";break;case J0:t="ENVMAP_BLENDING_ADD";break}return t}function fp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function dp(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=cp(e),l=lp(e),u=up(e),h=hp(e),f=fp(e),d=tp(e),p=ep(r),_=s.createProgram();let m,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(cs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(cs).join(`
`),g.length>0&&(g+=`
`)):(m=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),g=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==zn?Jd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Zd("linearToOutputTexel",e.outputColorSpace),Qd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),a=ra(a),a=Fc(a,e),a=Oc(a,e),o=ra(o),o=Fc(o,e),o=Oc(o,e),a=Bc(a),o=Bc(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+m+a,x=v+g+o,T=Dc(s,s.VERTEX_SHADER,y),E=Dc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(A){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),P=s.getShaderInfoLog(T).trim(),I=s.getShaderInfoLog(E).trim();let k=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,E);else{const $=Nc(s,T,"vertex"),H=Nc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+$+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||I==="")&&(B=!1);B&&(A.diagnostics={runnable:k,programLog:N,vertexShader:{log:P,prefix:m},fragmentShader:{log:I,prefix:g}})}s.deleteShader(T),s.deleteShader(E),b=new ar(s,_),S=np(s,_)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Yd)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jd++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let pp=0;class mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new gp(t),e.set(t,i)),i}}class gp{constructor(t){this.id=pp++,this.code=t,this.usedTimes=0}}function _p(n,t,e,i,s,r,a){const o=new ql,c=new mp,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,A,N,P){const I=N.fog,k=P.geometry,B=S.isMeshStandardMaterial?N.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),H=$&&$.mapping===xr?$.image.height:null,K=p[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,W=nt!==void 0?nt.length:0;let ot=0;k.morphAttributes.position!==void 0&&(ot=1),k.morphAttributes.normal!==void 0&&(ot=2),k.morphAttributes.color!==void 0&&(ot=3);let Ct,J,at,C;if(K){const ie=on[K];Ct=ie.vertexShader,J=ie.fragmentShader}else Ct=S.vertexShader,J=S.fragmentShader,c.update(S),at=c.getVertexShaderID(S),C=c.getFragmentShaderID(S);const F=n.getRenderTarget(),O=n.state.buffers.depth.getReversed(),G=P.isInstancedMesh===!0,X=P.isBatchedMesh===!0,ht=!!S.map,ft=!!S.matcap,Et=!!$,z=!!S.aoMap,Vt=!!S.lightMap,zt=!!S.bumpMap,gt=!!S.normalMap,pt=!!S.displacementMap,Lt=!!S.emissiveMap,xt=!!S.metalnessMap,D=!!S.roughnessMap,R=S.anisotropy>0,j=S.clearcoat>0,it=S.dispersion>0,ct=S.iridescence>0,st=S.sheen>0,Dt=S.transmission>0,bt=R&&!!S.anisotropyMap,Tt=j&&!!S.clearcoatMap,$t=j&&!!S.clearcoatNormalMap,dt=j&&!!S.clearcoatRoughnessMap,At=ct&&!!S.iridescenceMap,Z=ct&&!!S.iridescenceThicknessMap,ut=st&&!!S.sheenColorMap,lt=st&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,Rt=!!S.specularColorMap,kt=!!S.specularIntensityMap,V=Dt&&!!S.transmissionMap,mt=Dt&&!!S.thicknessMap,et=!!S.gradientMap,rt=!!S.alphaMap,St=S.alphaTest>0,vt=!!S.alphaHash,Gt=!!S.extensions;let ne=zn;S.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ne=n.toneMapping);const ce={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:Ct,fragmentShader:J,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:C,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:X,batchingColor:X&&P._colorsTexture!==null,instancing:G,instancingColor:G&&P.instanceColor!==null,instancingMorph:G&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Vi,alphaToCoverage:!!S.alphaToCoverage,map:ht,matcap:ft,envMap:Et,envMapMode:Et&&$.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:Vt,bumpMap:zt,normalMap:gt,displacementMap:f&&pt,emissiveMap:Lt,normalMapObjectSpace:gt&&S.normalMapType===cu,normalMapTangentSpace:gt&&S.normalMapType===Sa,metalnessMap:xt,roughnessMap:D,anisotropy:R,anisotropyMap:bt,clearcoat:j,clearcoatMap:Tt,clearcoatNormalMap:$t,clearcoatRoughnessMap:dt,dispersion:it,iridescence:ct,iridescenceMap:At,iridescenceThicknessMap:Z,sheen:st,sheenColorMap:ut,sheenRoughnessMap:lt,specularMap:Pt,specularColorMap:Rt,specularIntensityMap:kt,transmission:Dt,transmissionMap:V,thicknessMap:mt,gradientMap:et,opaque:S.transparent===!1&&S.blending===Pi&&S.alphaToCoverage===!1,alphaMap:rt,alphaTest:St,alphaHash:vt,combine:S.combine,mapUv:ht&&_(S.map.channel),aoMapUv:z&&_(S.aoMap.channel),lightMapUv:Vt&&_(S.lightMap.channel),bumpMapUv:zt&&_(S.bumpMap.channel),normalMapUv:gt&&_(S.normalMap.channel),displacementMapUv:pt&&_(S.displacementMap.channel),emissiveMapUv:Lt&&_(S.emissiveMap.channel),metalnessMapUv:xt&&_(S.metalnessMap.channel),roughnessMapUv:D&&_(S.roughnessMap.channel),anisotropyMapUv:bt&&_(S.anisotropyMap.channel),clearcoatMapUv:Tt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:lt&&_(S.sheenRoughnessMap.channel),specularMapUv:Pt&&_(S.specularMap.channel),specularColorMapUv:Rt&&_(S.specularColorMap.channel),specularIntensityMapUv:kt&&_(S.specularIntensityMap.channel),transmissionMapUv:V&&_(S.transmissionMap.channel),thicknessMapUv:mt&&_(S.thicknessMap.channel),alphaMapUv:rt&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(gt||R),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(ht||rt),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:O,skinning:P.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:ht&&S.map.isVideoTexture===!0&&Kt.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:Lt&&S.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ge,flipSided:S.side===Ae,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||X)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function g(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=p[S.type];let A;if(M){const N=on[M];A=Qu.clone(N.uniforms)}else A=S.uniforms;return A}function T(S,M){let A;for(let N=0,P=u.length;N<P;N++){const I=u[N];if(I.cacheKey===M){A=I,++A.usedTimes;break}}return A===void 0&&(A=new dp(n,M,S,r),u.push(A)),A}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function w(S){c.remove(S)}function b(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:b}}function xp(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function vp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function kc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Gc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,f,d,p,_,m){let g=n[t];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:_,group:m},n[t]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=_,g.group=m),t++,g}function o(h,f,d,p,_,m){const g=a(h,f,d,p,_,m);d.transmission>0?i.push(g):d.transparent===!0?s.push(g):e.push(g)}function c(h,f,d,p,_,m){const g=a(h,f,d,p,_,m);d.transmission>0?i.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function l(h,f){e.length>1&&e.sort(h||vp),i.length>1&&i.sort(f||kc),s.length>1&&s.sort(f||kc)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function yp(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Gc,n.set(i,[a])):s>=r.length?(a=new Gc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Mp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function bp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Sp=0;function wp(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ep(n){const t=new Mp,e=bp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const s=new U,r=new jt,a=new jt;function o(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,v=0,y=0,x=0,T=0,E=0,w=0;l.sort(wp);for(let S=0,M=l.length;S<M;S++){const A=l[S],N=A.color,P=A.intensity,I=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=N.r*P,h+=N.g*P,f+=N.b*P;else if(A.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(A.sh.coefficients[B],P);w++}else if(A.isDirectionalLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const $=A.shadow,H=e.get(A);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=A.shadow.matrix,v++}i.directional[d]=B,d++}else if(A.isSpotLight){const B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(N).multiplyScalar(P),B.distance=I,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,i.spot[_]=B;const $=A.shadow;if(A.map&&(i.spotLightMap[T]=A.map,T++,$.updateMatrices(A),A.castShadow&&E++),i.spotLightMatrix[_]=$.matrix,A.castShadow){const H=e.get(A);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=k,x++}_++}else if(A.isRectAreaLight){const B=t.get(A);B.color.copy(N).multiplyScalar(P),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=B,m++}else if(A.isPointLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const $=A.shadow,H=e.get(A);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=A.shadow.matrix,y++}i.point[p]=B,p++}else if(A.isHemisphereLight){const B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(P),B.groundColor.copy(A.groundColor).multiplyScalar(P),i.hemi[g]=B,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==d||b.pointLength!==p||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==g||b.numDirectionalShadows!==v||b.numPointShadows!==y||b.numSpotShadows!==x||b.numSpotMaps!==T||b.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,b.directionalLength=d,b.pointLength=p,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=g,b.numDirectionalShadows=v,b.numPointShadows=y,b.numSpotShadows=x,b.numSpotMaps=T,b.numLightProbes=w,i.version=Sp++)}function c(l,u){let h=0,f=0,d=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,v=l.length;g<v;g++){const y=l[g];if(y.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Hc(n){const t=new Ep(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Tp(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Hc(n),t.set(s,[o])):r>=a.length?(o=new Hc(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Ap extends oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rp extends oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ip(n,t,e){let i=new Ea;const s=new It,r=new It,a=new re,o=new Ap({depthPacking:au}),c=new Rp,l={},u=e.maxTextureSize,h={[kn]:Ae,[Ae]:kn,[Ge]:Ge},f=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Cp,fragmentShader:Pp}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Qt;p.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let g=this.type;this.render=function(E,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Bn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const P=g!==yn&&this.type===yn,I=g===yn&&this.type!==yn;for(let k=0,B=E.length;k<B;k++){const $=E[k],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const K=H.getFrameExtents();if(s.multiply(K),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,H.mapSize.y=r.y)),H.map===null||P===!0||I===!0){const W=this.type!==yn?{minFilter:Ve,magFilter:Ve}:{};H.map!==null&&H.map.dispose(),H.map=new ii(s.x,s.y,W),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const nt=H.getViewportCount();for(let W=0;W<nt;W++){const ot=H.getViewport(W);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),N.viewport(a),H.updateMatrices($,W),i=H.getFrustum(),x(w,b,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===yn&&v(H,b),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,A)};function v(E,w){const b=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ii(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,b,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,b,d,_,null)}function y(E,w,b,S){let M=null;const A=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=b.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=M.uuid,P=w.uuid;let I=l[N];I===void 0&&(I={},l[N]=I);let k=I[P];k===void 0&&(k=M.clone(),I[P]=k,w.addEventListener("dispose",T)),M=k}if(M.visible=w.visible,M.wireframe=w.wireframe,S===yn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=b}return M}function x(E,w,b,S,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===yn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const P=t.update(E),I=E.material;if(Array.isArray(I)){const k=P.groups;for(let B=0,$=k.length;B<$;B++){const H=k[B],K=I[H.materialIndex];if(K&&K.visible){const nt=y(E,K,S,M);E.onBeforeShadow(n,E,w,b,P,nt,H),n.renderBufferDirect(b,null,P,nt,E,H),E.onAfterShadow(n,E,w,b,P,nt,H)}}}else if(I.visible){const k=y(E,I,S,M);E.onBeforeShadow(n,E,w,b,P,k,null),n.renderBufferDirect(b,null,P,k,E,null),E.onAfterShadow(n,E,w,b,P,k,null)}}const N=E.children;for(let P=0,I=N.length;P<I;P++)x(N[P],w,b,S,M)}function T(E){E.target.removeEventListener("dispose",T);for(const b in l){const S=l[b],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Lp={[bo]:So,[wo]:Ao,[Eo]:Ro,[Ni]:To,[So]:bo,[Ao]:wo,[Ro]:Eo,[To]:Ni};function Dp(n,t){function e(){let V=!1;const mt=new re;let et=null;const rt=new re(0,0,0,0);return{setMask:function(St){et!==St&&!V&&(n.colorMask(St,St,St,St),et=St)},setLocked:function(St){V=St},setClear:function(St,vt,Gt,ne,ce){ce===!0&&(St*=ne,vt*=ne,Gt*=ne),mt.set(St,vt,Gt,ne),rt.equals(mt)===!1&&(n.clearColor(St,vt,Gt,ne),rt.copy(mt))},reset:function(){V=!1,et=null,rt.set(-1,0,0,0)}}}function i(){let V=!1,mt=!1,et=null,rt=null,St=null;return{setReversed:function(vt){if(mt!==vt){const Gt=t.get("EXT_clip_control");mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const ne=St;St=null,this.setClear(ne)}mt=vt},getReversed:function(){return mt},setTest:function(vt){vt?F(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(vt){et!==vt&&!V&&(n.depthMask(vt),et=vt)},setFunc:function(vt){if(mt&&(vt=Lp[vt]),rt!==vt){switch(vt){case bo:n.depthFunc(n.NEVER);break;case So:n.depthFunc(n.ALWAYS);break;case wo:n.depthFunc(n.LESS);break;case Ni:n.depthFunc(n.LEQUAL);break;case Eo:n.depthFunc(n.EQUAL);break;case To:n.depthFunc(n.GEQUAL);break;case Ao:n.depthFunc(n.GREATER);break;case Ro:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=vt}},setLocked:function(vt){V=vt},setClear:function(vt){St!==vt&&(mt&&(vt=1-vt),n.clearDepth(vt),St=vt)},reset:function(){V=!1,et=null,rt=null,St=null,mt=!1}}}function s(){let V=!1,mt=null,et=null,rt=null,St=null,vt=null,Gt=null,ne=null,ce=null;return{setTest:function(ie){V||(ie?F(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(ie){mt!==ie&&!V&&(n.stencilMask(ie),mt=ie)},setFunc:function(ie,je,dn){(et!==ie||rt!==je||St!==dn)&&(n.stencilFunc(ie,je,dn),et=ie,rt=je,St=dn)},setOp:function(ie,je,dn){(vt!==ie||Gt!==je||ne!==dn)&&(n.stencilOp(ie,je,dn),vt=ie,Gt=je,ne=dn)},setLocked:function(ie){V=ie},setClear:function(ie){ce!==ie&&(n.clearStencil(ie),ce=ie)},reset:function(){V=!1,mt=null,et=null,rt=null,St=null,vt=null,Gt=null,ne=null,ce=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,v=null,y=null,x=null,T=null,E=null,w=new Ht(0,0,0),b=0,S=!1,M=null,A=null,N=null,P=null,I=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=$>=2);let K=null,nt={};const W=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),Ct=new re().fromArray(W),J=new re().fromArray(ot);function at(V,mt,et,rt){const St=new Uint8Array(4),vt=n.createTexture();n.bindTexture(V,vt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<et;Gt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(mt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return vt}const C={};C[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),C[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),C[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),F(n.DEPTH_TEST),a.setFunc(Ni),zt(!1),gt(ja),F(n.CULL_FACE),z(Bn);function F(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function O(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function G(V,mt){return h[V]!==mt?(n.bindFramebuffer(V,mt),h[V]=mt,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=mt),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function X(V,mt){let et=d,rt=!1;if(V){et=f.get(mt),et===void 0&&(et=[],f.set(mt,et));const St=V.textures;if(et.length!==St.length||et[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Gt=St.length;vt<Gt;vt++)et[vt]=n.COLOR_ATTACHMENT0+vt;et.length=St.length,rt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,rt=!0);rt&&n.drawBuffers(et)}function ht(V){return p!==V?(n.useProgram(V),p=V,!0):!1}const ft={[Zn]:n.FUNC_ADD,[U0]:n.FUNC_SUBTRACT,[N0]:n.FUNC_REVERSE_SUBTRACT};ft[F0]=n.MIN,ft[O0]=n.MAX;const Et={[B0]:n.ZERO,[z0]:n.ONE,[k0]:n.SRC_COLOR,[yo]:n.SRC_ALPHA,[q0]:n.SRC_ALPHA_SATURATE,[W0]:n.DST_COLOR,[H0]:n.DST_ALPHA,[G0]:n.ONE_MINUS_SRC_COLOR,[Mo]:n.ONE_MINUS_SRC_ALPHA,[X0]:n.ONE_MINUS_DST_COLOR,[V0]:n.ONE_MINUS_DST_ALPHA,[Y0]:n.CONSTANT_COLOR,[j0]:n.ONE_MINUS_CONSTANT_COLOR,[$0]:n.CONSTANT_ALPHA,[K0]:n.ONE_MINUS_CONSTANT_ALPHA};function z(V,mt,et,rt,St,vt,Gt,ne,ce,ie){if(V===Bn){_===!0&&(O(n.BLEND),_=!1);return}if(_===!1&&(F(n.BLEND),_=!0),V!==D0){if(V!==m||ie!==S){if((g!==Zn||x!==Zn)&&(n.blendEquation(n.FUNC_ADD),g=Zn,x=Zn),ie)switch(V){case Pi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cr:n.blendFunc(n.ONE,n.ONE);break;case $a:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ka:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $a:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ka:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,y=null,T=null,E=null,w.set(0,0,0),b=0,m=V,S=ie}return}St=St||mt,vt=vt||et,Gt=Gt||rt,(mt!==g||St!==x)&&(n.blendEquationSeparate(ft[mt],ft[St]),g=mt,x=St),(et!==v||rt!==y||vt!==T||Gt!==E)&&(n.blendFuncSeparate(Et[et],Et[rt],Et[vt],Et[Gt]),v=et,y=rt,T=vt,E=Gt),(ne.equals(w)===!1||ce!==b)&&(n.blendColor(ne.r,ne.g,ne.b,ce),w.copy(ne),b=ce),m=V,S=!1}function Vt(V,mt){V.side===Ge?O(n.CULL_FACE):F(n.CULL_FACE);let et=V.side===Ae;mt&&(et=!et),zt(et),V.blending===Pi&&V.transparent===!1?z(Bn):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const rt=V.stencilWrite;o.setTest(rt),rt&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Lt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(V){M!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),M=V)}function gt(V){V!==P0?(F(n.CULL_FACE),V!==A&&(V===ja?n.cullFace(n.BACK):V===I0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),A=V}function pt(V){V!==N&&(B&&n.lineWidth(V),N=V)}function Lt(V,mt,et){V?(F(n.POLYGON_OFFSET_FILL),(P!==mt||I!==et)&&(n.polygonOffset(mt,et),P=mt,I=et)):O(n.POLYGON_OFFSET_FILL)}function xt(V){V?F(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function D(V){V===void 0&&(V=n.TEXTURE0+k-1),K!==V&&(n.activeTexture(V),K=V)}function R(V,mt,et){et===void 0&&(K===null?et=n.TEXTURE0+k-1:et=K);let rt=nt[et];rt===void 0&&(rt={type:void 0,texture:void 0},nt[et]=rt),(rt.type!==V||rt.texture!==mt)&&(K!==et&&(n.activeTexture(et),K=et),n.bindTexture(V,mt||C[V]),rt.type=V,rt.texture=mt)}function j(){const V=nt[K];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function it(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $t(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(V){Ct.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Ct.copy(V))}function lt(V){J.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),J.copy(V))}function Pt(V,mt){let et=l.get(mt);et===void 0&&(et=new WeakMap,l.set(mt,et));let rt=et.get(V);rt===void 0&&(rt=n.getUniformBlockIndex(mt,V.name),et.set(V,rt))}function Rt(V,mt){const rt=l.get(mt).get(V);c.get(mt)!==rt&&(n.uniformBlockBinding(mt,rt,V.__bindingPointIndex),c.set(mt,rt))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,nt={},h={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,v=null,y=null,x=null,T=null,E=null,w=new Ht(0,0,0),b=0,S=!1,M=null,A=null,N=null,P=null,I=null,Ct.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:F,disable:O,bindFramebuffer:G,drawBuffers:X,useProgram:ht,setBlending:z,setMaterial:Vt,setFlipSided:zt,setCullFace:gt,setLineWidth:pt,setPolygonOffset:Lt,setScissorTest:xt,activeTexture:D,bindTexture:R,unbindTexture:j,compressedTexImage2D:it,compressedTexImage3D:ct,texImage2D:At,texImage3D:Z,updateUBOMapping:Pt,uniformBlockBinding:Rt,texStorage2D:$t,texStorage3D:dt,texSubImage2D:st,texSubImage3D:Dt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Tt,scissor:ut,viewport:lt,reset:kt}}function Vc(n,t,e,i){const s=Up(i);switch(e){case Nl:return n*t;case Ol:return n*t;case Bl:return n*t*2;case va:return n*t/s.components*s.byteLength;case ya:return n*t/s.components*s.byteLength;case zl:return n*t*2/s.components*s.byteLength;case Ma:return n*t*2/s.components*s.byteLength;case Fl:return n*t*3/s.components*s.byteLength;case Ue:return n*t*4/s.components*s.byteLength;case ba:return n*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Do:case No:return Math.max(n,16)*Math.max(t,8)/4;case Lo:case Uo:return Math.max(n,8)*Math.max(t,8)/2;case Fo:case Oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Go:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case qo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case or:case Qo:case ta:return Math.ceil(n/4)*Math.ceil(t/4)*16;case kl:case ea:return Math.ceil(n/4)*Math.ceil(t/4)*8;case na:case ia:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Up(n){switch(n){case hn:case Ll:return{byteLength:1,components:1};case _s:case Dl:case bs:return{byteLength:2,components:1};case _a:case xa:return{byteLength:2,components:4};case ni:case ga:case ln:return{byteLength:4,components:1};case Ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Np(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new It,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,R){return d?new OffscreenCanvas(D,R):vs("canvas")}function _(D,R,j){let it=1;const ct=xt(D);if((ct.width>j||ct.height>j)&&(it=j/Math.max(ct.width,ct.height)),it<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const st=Math.floor(it*ct.width),Dt=Math.floor(it*ct.height);h===void 0&&(h=p(st,Dt));const bt=R?p(st,Dt):h;return bt.width=st,bt.height=Dt,bt.getContext("2d").drawImage(D,0,0,st,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+st+"x"+Dt+")."),bt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),D;return D}function m(D){return D.generateMipmaps}function g(D){n.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(D,R,j,it,ct=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let st=R;if(R===n.RED&&(j===n.FLOAT&&(st=n.R32F),j===n.HALF_FLOAT&&(st=n.R16F),j===n.UNSIGNED_BYTE&&(st=n.R8)),R===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(st=n.R8UI),j===n.UNSIGNED_SHORT&&(st=n.R16UI),j===n.UNSIGNED_INT&&(st=n.R32UI),j===n.BYTE&&(st=n.R8I),j===n.SHORT&&(st=n.R16I),j===n.INT&&(st=n.R32I)),R===n.RG&&(j===n.FLOAT&&(st=n.RG32F),j===n.HALF_FLOAT&&(st=n.RG16F),j===n.UNSIGNED_BYTE&&(st=n.RG8)),R===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(st=n.RG8UI),j===n.UNSIGNED_SHORT&&(st=n.RG16UI),j===n.UNSIGNED_INT&&(st=n.RG32UI),j===n.BYTE&&(st=n.RG8I),j===n.SHORT&&(st=n.RG16I),j===n.INT&&(st=n.RG32I)),R===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(st=n.RGB8UI),j===n.UNSIGNED_SHORT&&(st=n.RGB16UI),j===n.UNSIGNED_INT&&(st=n.RGB32UI),j===n.BYTE&&(st=n.RGB8I),j===n.SHORT&&(st=n.RGB16I),j===n.INT&&(st=n.RGB32I)),R===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(st=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(st=n.RGBA16UI),j===n.UNSIGNED_INT&&(st=n.RGBA32UI),j===n.BYTE&&(st=n.RGBA8I),j===n.SHORT&&(st=n.RGBA16I),j===n.INT&&(st=n.RGBA32I)),R===n.RGB&&j===n.UNSIGNED_INT_5_9_9_9_REV&&(st=n.RGB9_E5),R===n.RGBA){const Dt=ct?vr:Kt.getTransfer(it);j===n.FLOAT&&(st=n.RGBA32F),j===n.HALF_FLOAT&&(st=n.RGBA16F),j===n.UNSIGNED_BYTE&&(st=Dt===se?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(st=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(st=n.RGB5_A1)}return(st===n.R16F||st===n.R32F||st===n.RG16F||st===n.RG32F||st===n.RGBA16F||st===n.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function x(D,R){let j;return D?R===null||R===ni||R===Bi?j=n.DEPTH24_STENCIL8:R===ln?j=n.DEPTH32F_STENCIL8:R===_s&&(j=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ni||R===Bi?j=n.DEPTH_COMPONENT24:R===ln?j=n.DEPTH_COMPONENT32F:R===_s&&(j=n.DEPTH_COMPONENT16),j}function T(D,R){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ve&&D.minFilter!==Pe?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function E(D){const R=D.target;R.removeEventListener("dispose",E),b(R),R.isVideoTexture&&u.delete(R)}function w(D){const R=D.target;R.removeEventListener("dispose",w),M(R)}function b(D){const R=i.get(D);if(R.__webglInit===void 0)return;const j=D.source,it=f.get(j);if(it){const ct=it[R.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&S(D),Object.keys(it).length===0&&f.delete(j)}i.remove(D)}function S(D){const R=i.get(D);n.deleteTexture(R.__webglTexture);const j=D.source,it=f.get(j);delete it[R.__cacheKey],a.memory.textures--}function M(D){const R=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(R.__webglFramebuffer[it]))for(let ct=0;ct<R.__webglFramebuffer[it].length;ct++)n.deleteFramebuffer(R.__webglFramebuffer[it][ct]);else n.deleteFramebuffer(R.__webglFramebuffer[it]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[it])}else{if(Array.isArray(R.__webglFramebuffer))for(let it=0;it<R.__webglFramebuffer.length;it++)n.deleteFramebuffer(R.__webglFramebuffer[it]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let it=0;it<R.__webglColorRenderbuffer.length;it++)R.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[it]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const j=D.textures;for(let it=0,ct=j.length;it<ct;it++){const st=i.get(j[it]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),a.memory.textures--),i.remove(j[it])}i.remove(D)}let A=0;function N(){A=0}function P(){const D=A;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),A+=1,D}function I(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function k(D,R){const j=i.get(D);if(D.isVideoTexture&&pt(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){const it=D.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(j,D,R);return}}e.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+R)}function B(D,R){const j=i.get(D);if(D.version>0&&j.__version!==D.version){J(j,D,R);return}e.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+R)}function $(D,R){const j=i.get(D);if(D.version>0&&j.__version!==D.version){J(j,D,R);return}e.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+R)}function H(D,R){const j=i.get(D);if(D.version>0&&j.__version!==D.version){at(j,D,R);return}e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+R)}const K={[wn]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[Io]:n.MIRRORED_REPEAT},nt={[Ve]:n.NEAREST,[ru]:n.NEAREST_MIPMAP_NEAREST,[As]:n.NEAREST_MIPMAP_LINEAR,[Pe]:n.LINEAR,[Rr]:n.LINEAR_MIPMAP_NEAREST,[He]:n.LINEAR_MIPMAP_LINEAR},W={[lu]:n.NEVER,[mu]:n.ALWAYS,[uu]:n.LESS,[Gl]:n.LEQUAL,[hu]:n.EQUAL,[pu]:n.GEQUAL,[fu]:n.GREATER,[du]:n.NOTEQUAL};function ot(D,R){if(R.type===ln&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Pe||R.magFilter===Rr||R.magFilter===As||R.magFilter===He||R.minFilter===Pe||R.minFilter===Rr||R.minFilter===As||R.minFilter===He)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,K[R.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,K[R.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,K[R.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,nt[R.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,nt[R.minFilter]),R.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,W[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ve||R.minFilter!==As&&R.minFilter!==He||R.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Ct(D,R){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",E));const it=R.source;let ct=f.get(it);ct===void 0&&(ct={},f.set(it,ct));const st=I(R);if(st!==D.__cacheKey){ct[st]===void 0&&(ct[st]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ct[st].usedTimes++;const Dt=ct[D.__cacheKey];Dt!==void 0&&(ct[D.__cacheKey].usedTimes--,Dt.usedTimes===0&&S(R)),D.__cacheKey=st,D.__webglTexture=ct[st].texture}return j}function J(D,R,j){let it=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(it=n.TEXTURE_3D);const ct=Ct(D,R),st=R.source;e.bindTexture(it,D.__webglTexture,n.TEXTURE0+j);const Dt=i.get(st);if(st.version!==Dt.__version||ct===!0){e.activeTexture(n.TEXTURE0+j);const bt=Kt.getPrimaries(Kt.workingColorSpace),Tt=R.colorSpace===an?null:Kt.getPrimaries(R.colorSpace),$t=R.colorSpace===an||bt===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let dt=_(R.image,!1,s.maxTextureSize);dt=Lt(R,dt);const At=r.convert(R.format,R.colorSpace),Z=r.convert(R.type);let ut=y(R.internalFormat,At,Z,R.colorSpace,R.isVideoTexture);ot(it,R);let lt;const Pt=R.mipmaps,Rt=R.isVideoTexture!==!0,kt=Dt.__version===void 0||ct===!0,V=st.dataReady,mt=T(R,dt);if(R.isDepthTexture)ut=x(R.format===zi,R.type),kt&&(Rt?e.texStorage2D(n.TEXTURE_2D,1,ut,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,ut,dt.width,dt.height,0,At,Z,null));else if(R.isDataTexture)if(Pt.length>0){Rt&&kt&&e.texStorage2D(n.TEXTURE_2D,mt,ut,Pt[0].width,Pt[0].height);for(let et=0,rt=Pt.length;et<rt;et++)lt=Pt[et],Rt?V&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,lt.width,lt.height,At,Z,lt.data):e.texImage2D(n.TEXTURE_2D,et,ut,lt.width,lt.height,0,At,Z,lt.data);R.generateMipmaps=!1}else Rt?(kt&&e.texStorage2D(n.TEXTURE_2D,mt,ut,dt.width,dt.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,At,Z,dt.data)):e.texImage2D(n.TEXTURE_2D,0,ut,dt.width,dt.height,0,At,Z,dt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Rt&&kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,ut,Pt[0].width,Pt[0].height,dt.depth);for(let et=0,rt=Pt.length;et<rt;et++)if(lt=Pt[et],R.format!==Ue)if(At!==null)if(Rt){if(V)if(R.layerUpdates.size>0){const St=Vc(lt.width,lt.height,R.format,R.type);for(const vt of R.layerUpdates){const Gt=lt.data.subarray(vt*St/lt.data.BYTES_PER_ELEMENT,(vt+1)*St/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,vt,lt.width,lt.height,1,At,Gt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,lt.width,lt.height,dt.depth,At,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,ut,lt.width,lt.height,dt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,lt.width,lt.height,dt.depth,At,Z,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,ut,lt.width,lt.height,dt.depth,0,At,Z,lt.data)}else{Rt&&kt&&e.texStorage2D(n.TEXTURE_2D,mt,ut,Pt[0].width,Pt[0].height);for(let et=0,rt=Pt.length;et<rt;et++)lt=Pt[et],R.format!==Ue?At!==null?Rt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,lt.width,lt.height,At,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,ut,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?V&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,lt.width,lt.height,At,Z,lt.data):e.texImage2D(n.TEXTURE_2D,et,ut,lt.width,lt.height,0,At,Z,lt.data)}else if(R.isDataArrayTexture)if(Rt){if(kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,ut,dt.width,dt.height,dt.depth),V)if(R.layerUpdates.size>0){const et=Vc(dt.width,dt.height,R.format,R.type);for(const rt of R.layerUpdates){const St=dt.data.subarray(rt*et/dt.data.BYTES_PER_ELEMENT,(rt+1)*et/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,dt.width,dt.height,1,At,Z,St)}R.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,At,Z,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ut,dt.width,dt.height,dt.depth,0,At,Z,dt.data);else if(R.isData3DTexture)Rt?(kt&&e.texStorage3D(n.TEXTURE_3D,mt,ut,dt.width,dt.height,dt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,At,Z,dt.data)):e.texImage3D(n.TEXTURE_3D,0,ut,dt.width,dt.height,dt.depth,0,At,Z,dt.data);else if(R.isFramebufferTexture){if(kt)if(Rt)e.texStorage2D(n.TEXTURE_2D,mt,ut,dt.width,dt.height);else{let et=dt.width,rt=dt.height;for(let St=0;St<mt;St++)e.texImage2D(n.TEXTURE_2D,St,ut,et,rt,0,At,Z,null),et>>=1,rt>>=1}}else if(Pt.length>0){if(Rt&&kt){const et=xt(Pt[0]);e.texStorage2D(n.TEXTURE_2D,mt,ut,et.width,et.height)}for(let et=0,rt=Pt.length;et<rt;et++)lt=Pt[et],Rt?V&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,At,Z,lt):e.texImage2D(n.TEXTURE_2D,et,ut,At,Z,lt);R.generateMipmaps=!1}else if(Rt){if(kt){const et=xt(dt);e.texStorage2D(n.TEXTURE_2D,mt,ut,et.width,et.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,Z,dt)}else e.texImage2D(n.TEXTURE_2D,0,ut,At,Z,dt);m(R)&&g(it),Dt.__version=st.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function at(D,R,j){if(R.image.length!==6)return;const it=Ct(D,R),ct=R.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+j);const st=i.get(ct);if(ct.version!==st.__version||it===!0){e.activeTexture(n.TEXTURE0+j);const Dt=Kt.getPrimaries(Kt.workingColorSpace),bt=R.colorSpace===an?null:Kt.getPrimaries(R.colorSpace),Tt=R.colorSpace===an||Dt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const $t=R.isCompressedTexture||R.image[0].isCompressedTexture,dt=R.image[0]&&R.image[0].isDataTexture,At=[];for(let rt=0;rt<6;rt++)!$t&&!dt?At[rt]=_(R.image[rt],!0,s.maxCubemapSize):At[rt]=dt?R.image[rt].image:R.image[rt],At[rt]=Lt(R,At[rt]);const Z=At[0],ut=r.convert(R.format,R.colorSpace),lt=r.convert(R.type),Pt=y(R.internalFormat,ut,lt,R.colorSpace),Rt=R.isVideoTexture!==!0,kt=st.__version===void 0||it===!0,V=ct.dataReady;let mt=T(R,Z);ot(n.TEXTURE_CUBE_MAP,R);let et;if($t){Rt&&kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Pt,Z.width,Z.height);for(let rt=0;rt<6;rt++){et=At[rt].mipmaps;for(let St=0;St<et.length;St++){const vt=et[St];R.format!==Ue?ut!==null?Rt?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,0,0,vt.width,vt.height,ut,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,Pt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,0,0,vt.width,vt.height,ut,lt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,Pt,vt.width,vt.height,0,ut,lt,vt.data)}}}else{if(et=R.mipmaps,Rt&&kt){et.length>0&&mt++;const rt=xt(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Pt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(dt){Rt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,At[rt].width,At[rt].height,ut,lt,At[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Pt,At[rt].width,At[rt].height,0,ut,lt,At[rt].data);for(let St=0;St<et.length;St++){const Gt=et[St].image[rt].image;Rt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,0,0,Gt.width,Gt.height,ut,lt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,Pt,Gt.width,Gt.height,0,ut,lt,Gt.data)}}else{Rt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ut,lt,At[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Pt,ut,lt,At[rt]);for(let St=0;St<et.length;St++){const vt=et[St];Rt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,0,0,ut,lt,vt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,Pt,ut,lt,vt.image[rt])}}}m(R)&&g(n.TEXTURE_CUBE_MAP),st.__version=ct.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function C(D,R,j,it,ct,st){const Dt=r.convert(j.format,j.colorSpace),bt=r.convert(j.type),Tt=y(j.internalFormat,Dt,bt,j.colorSpace),$t=i.get(R),dt=i.get(j);if(dt.__renderTarget=R,!$t.__hasExternalTextures){const At=Math.max(1,R.width>>st),Z=Math.max(1,R.height>>st);ct===n.TEXTURE_3D||ct===n.TEXTURE_2D_ARRAY?e.texImage3D(ct,st,Tt,At,Z,R.depth,0,Dt,bt,null):e.texImage2D(ct,st,Tt,At,Z,0,Dt,bt,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),gt(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,ct,dt.__webglTexture,0,zt(R)):(ct===n.TEXTURE_2D||ct>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,ct,dt.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function F(D,R,j){if(n.bindRenderbuffer(n.RENDERBUFFER,D),R.depthBuffer){const it=R.depthTexture,ct=it&&it.isDepthTexture?it.type:null,st=x(R.stencilBuffer,ct),Dt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=zt(R);gt(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,st,R.width,R.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,st,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,st,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,D)}else{const it=R.textures;for(let ct=0;ct<it.length;ct++){const st=it[ct],Dt=r.convert(st.format,st.colorSpace),bt=r.convert(st.type),Tt=y(st.internalFormat,Dt,bt,st.colorSpace),$t=zt(R);j&&gt(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t,Tt,R.width,R.height):gt(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t,Tt,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=i.get(R.depthTexture);it.__renderTarget=R,(!it.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);const ct=it.__webglTexture,st=zt(R);if(R.depthTexture.format===Ii)gt(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0);else if(R.depthTexture.format===zi)gt(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function G(D){const R=i.get(D),j=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){const it=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),it){const ct=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,it.removeEventListener("dispose",ct)};it.addEventListener("dispose",ct),R.__depthDisposeCallback=ct}R.__boundDepthTexture=it}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");O(R.__webglFramebuffer,D)}else if(j){R.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[it]),R.__webglDepthbuffer[it]===void 0)R.__webglDepthbuffer[it]=n.createRenderbuffer(),F(R.__webglDepthbuffer[it],D,!1);else{const ct=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=R.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,st)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),F(R.__webglDepthbuffer,D,!1);else{const it=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,ct)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function X(D,R,j){const it=i.get(D);R!==void 0&&C(it.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&G(D)}function ht(D){const R=D.texture,j=i.get(D),it=i.get(R);D.addEventListener("dispose",w);const ct=D.textures,st=D.isWebGLCubeRenderTarget===!0,Dt=ct.length>1;if(Dt||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=R.version,a.memory.textures++),st){j.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer[bt]=[];for(let Tt=0;Tt<R.mipmaps.length;Tt++)j.__webglFramebuffer[bt][Tt]=n.createFramebuffer()}else j.__webglFramebuffer[bt]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer=[];for(let bt=0;bt<R.mipmaps.length;bt++)j.__webglFramebuffer[bt]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let bt=0,Tt=ct.length;bt<Tt;bt++){const $t=i.get(ct[bt]);$t.__webglTexture===void 0&&($t.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&gt(D)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let bt=0;bt<ct.length;bt++){const Tt=ct[bt];j.__webglColorRenderbuffer[bt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[bt]);const $t=r.convert(Tt.format,Tt.colorSpace),dt=r.convert(Tt.type),At=y(Tt.internalFormat,$t,dt,Tt.colorSpace,D.isXRRenderTarget===!0),Z=zt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,At,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,j.__webglColorRenderbuffer[bt])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),F(j.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),ot(n.TEXTURE_CUBE_MAP,R);for(let bt=0;bt<6;bt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Tt=0;Tt<R.mipmaps.length;Tt++)C(j.__webglFramebuffer[bt][Tt],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt);else C(j.__webglFramebuffer[bt],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(R)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let bt=0,Tt=ct.length;bt<Tt;bt++){const $t=ct[bt],dt=i.get($t);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),ot(n.TEXTURE_2D,$t),C(j.__webglFramebuffer,D,$t,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,0),m($t)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let bt=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(bt=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,it.__webglTexture),ot(bt,R),R.mipmaps&&R.mipmaps.length>0)for(let Tt=0;Tt<R.mipmaps.length;Tt++)C(j.__webglFramebuffer[Tt],D,R,n.COLOR_ATTACHMENT0,bt,Tt);else C(j.__webglFramebuffer,D,R,n.COLOR_ATTACHMENT0,bt,0);m(R)&&g(bt),e.unbindTexture()}D.depthBuffer&&G(D)}function ft(D){const R=D.textures;for(let j=0,it=R.length;j<it;j++){const ct=R[j];if(m(ct)){const st=v(D),Dt=i.get(ct).__webglTexture;e.bindTexture(st,Dt),g(st),e.unbindTexture()}}}const Et=[],z=[];function Vt(D){if(D.samples>0){if(gt(D)===!1){const R=D.textures,j=D.width,it=D.height;let ct=n.COLOR_BUFFER_BIT;const st=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(D),bt=R.length>1;if(bt)for(let Tt=0;Tt<R.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Tt=0;Tt<R.length;Tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ct|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ct|=n.STENCIL_BUFFER_BIT)),bt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Tt]);const $t=i.get(R[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$t,0)}n.blitFramebuffer(0,0,j,it,0,0,j,it,ct,n.NEAREST),c===!0&&(Et.length=0,z.length=0,Et.push(n.COLOR_ATTACHMENT0+Tt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Et.push(st),z.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),bt)for(let Tt=0;Tt<R.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Tt]);const $t=i.get(R[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,$t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const R=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function zt(D){return Math.min(s.maxSamples,D.samples)}function gt(D){const R=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function pt(D){const R=a.render.frame;u.get(D)!==R&&(u.set(D,R),D.update())}function Lt(D,R){const j=D.colorSpace,it=D.format,ct=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Vi&&j!==an&&(Kt.getTransfer(j)===se?(it!==Ue||ct!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),R}function xt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=X,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=C,this.useMultisampledRTT=gt}function Fp(n,t){function e(i,s=an){let r;const a=Kt.getTransfer(s);if(i===hn)return n.UNSIGNED_BYTE;if(i===_a)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ul)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ll)return n.BYTE;if(i===Dl)return n.SHORT;if(i===_s)return n.UNSIGNED_SHORT;if(i===ga)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===ln)return n.FLOAT;if(i===bs)return n.HALF_FLOAT;if(i===Nl)return n.ALPHA;if(i===Fl)return n.RGB;if(i===Ue)return n.RGBA;if(i===Ol)return n.LUMINANCE;if(i===Bl)return n.LUMINANCE_ALPHA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===va)return n.RED;if(i===ya)return n.RED_INTEGER;if(i===zl)return n.RG;if(i===Ma)return n.RG_INTEGER;if(i===ba)return n.RGBA_INTEGER;if(i===nr||i===ir||i===sr||i===rr)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lo||i===Do||i===Uo||i===No)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fo||i===Oo||i===Bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fo||i===Oo)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zo||i===ko||i===Go||i===Ho||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===jo||i===$o||i===Ko||i===Zo||i===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ko)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Go)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ho)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$o)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ko)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===or||i===Qo||i===ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===or)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kl||i===ea||i===na||i===ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===or)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Op extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bn extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bp={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new bn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Me,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ye({vertexShader:zp,fragmentShader:kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hp extends Wi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,p=null;const _=new Gp,m=e.getContextAttributes();let g=null,v=null;const y=[],x=[],T=new It;let E=null;const w=new ke;w.viewport=new re;const b=new ke;b.viewport=new re;const S=[w,b],M=new Op;let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=y[J];return at===void 0&&(at=new eo,y[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=y[J];return at===void 0&&(at=new eo,y[J]=at),at.getGripSpace()},this.getHand=function(J){let at=y[J];return at===void 0&&(at=new eo,y[J]=at),at.getHandSpace()};function P(J){const at=x.indexOf(J.inputSource);if(at===-1)return;const C=y[at];C!==void 0&&(C.update(J.inputSource,J.frame,l||a),C.dispatchEvent({type:J.type,data:J.inputSource}))}function I(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",k);for(let J=0;J<y.length;J++){const at=x[J];at!==null&&(x[J]=null,y[J].disconnect(at))}A=null,N=null,_.reset(),t.setRenderTarget(g),d=null,f=null,h=null,s=null,v=null,Ct.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",I),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ii(d.framebufferWidth,d.framebufferHeight,{format:Ue,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,C=null,F=null;m.depth&&(F=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?zi:Ii,C=m.stencil?Bi:ni);const O={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(O),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ii(f.textureWidth,f.textureHeight,{format:Ue,type:hn,depthTexture:new e0(f.textureWidth,f.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ct.setContext(s),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(J){for(let at=0;at<J.removed.length;at++){const C=J.removed[at],F=x.indexOf(C);F>=0&&(x[F]=null,y[F].disconnect(C))}for(let at=0;at<J.added.length;at++){const C=J.added[at];let F=x.indexOf(C);if(F===-1){for(let G=0;G<y.length;G++)if(G>=x.length){x.push(C),F=G;break}else if(x[G]===null){x[G]=C,F=G;break}if(F===-1)break}const O=y[F];O&&O.connect(C)}}const B=new U,$=new U;function H(J,at,C){B.setFromMatrixPosition(at.matrixWorld),$.setFromMatrixPosition(C.matrixWorld);const F=B.distanceTo($),O=at.projectionMatrix.elements,G=C.projectionMatrix.elements,X=O[14]/(O[10]-1),ht=O[14]/(O[10]+1),ft=(O[9]+1)/O[5],Et=(O[9]-1)/O[5],z=(O[8]-1)/O[0],Vt=(G[8]+1)/G[0],zt=X*z,gt=X*Vt,pt=F/(-z+Vt),Lt=pt*-z;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Lt),J.translateZ(pt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),O[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const xt=X+pt,D=ht+pt,R=zt-Lt,j=gt+(F-Lt),it=ft*ht/D*xt,ct=Et*ht/D*xt;J.projectionMatrix.makePerspective(R,j,it,ct,xt,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function K(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let at=J.near,C=J.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(C=_.depthFar)),M.near=b.near=w.near=at,M.far=b.far=w.far=C,(A!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,N=M.far),w.layers.mask=J.layers.mask|2,b.layers.mask=J.layers.mask|4,M.layers.mask=w.layers.mask|b.layers.mask;const F=J.parent,O=M.cameras;K(M,F);for(let G=0;G<O.length;G++)K(O[G],F);O.length===2?H(M,w,b):M.projectionMatrix.copy(w.projectionMatrix),nt(J,M,F)};function nt(J,at,C){C===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(C.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let W=null;function ot(J,at){if(u=at.getViewerPose(l||a),p=at,u!==null){const C=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let F=!1;C.length!==M.cameras.length&&(M.cameras.length=0,F=!0);for(let G=0;G<C.length;G++){const X=C[G];let ht=null;if(d!==null)ht=d.getViewport(X);else{const Et=h.getViewSubImage(f,X);ht=Et.viewport,G===0&&(t.setRenderTargetTextures(v,Et.colorTexture,f.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(v))}let ft=S[G];ft===void 0&&(ft=new ke,ft.layers.enable(G),ft.viewport=new re,S[G]=ft),ft.matrix.fromArray(X.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(X.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(ht.x,ht.y,ht.width,ht.height),G===0&&(M.matrix.copy(ft.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),F===!0&&M.cameras.push(ft)}const O=s.enabledFeatures;if(O&&O.includes("depth-sensing")){const G=h.getDepthInformation(C[0]);G&&G.isValid&&G.texture&&_.init(t,G,s.renderState)}}for(let C=0;C<y.length;C++){const F=x[C],O=y[C];F!==null&&O!==void 0&&O.update(F,at,l||a)}W&&W(J,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),p=null}const Ct=new Ql;Ct.setAnimationLoop(ot),this.setAnimationLoop=function(J){W=J},this.dispose=function(){}}}const jn=new Ie,Vp=new jt;function Wp(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Kl(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,y,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,v,y):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ae&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ae&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=t.get(g),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,jn.copy(x),jn.x*=-1,jn.y*=-1,jn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(jn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ae&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xp(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(p(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(v,T);const E=t.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function u(v){const y=h();v.__bindingPointIndex=y;const x=n.createBuffer(),T=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],x=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){const b=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,M=b.length;S<M;S++){const A=b[S];if(d(A,E,S,T)===!0){const N=A.__offset,P=Array.isArray(A.value)?A.value:[A.value];let I=0;for(let k=0;k<P.length;k++){const B=P[k],$=_(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+I,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,y,x,T){const E=v.value,w=y+"_"+x;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const b=T[w];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return T[w]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function p(v){const y=v.uniforms;let x=0;const T=16;for(let w=0,b=y.length;w<b;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,A=S.length;M<A;M++){const N=S[M],P=Array.isArray(N.value)?N.value:[N.value];for(let I=0,k=P.length;I<k;I++){const B=P[I],$=_(B),H=x%T,K=H%$.boundary,nt=H+K;x+=K,nt!==0&&T-nt<$.storage&&(x+=T-nt),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=$.storage}}}const E=x%T;return E>0&&(x+=T-E),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(const v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:g}}class qp{constructor(t={}){const{canvas:e=Du(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=he,this.toneMapping=zn,this.toneMappingExposure=1;const x=this;let T=!1,E=0,w=0,b=null,S=-1,M=null;const A=new re,N=new re;let P=null;const I=new Ht(0);let k=0,B=e.width,$=e.height,H=1,K=null,nt=null;const W=new re(0,0,B,$),ot=new re(0,0,B,$);let Ct=!1;const J=new Ea;let at=!1,C=!1;const F=new jt,O=new jt,G=new U,X=new re,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Et(){return b===null?H:1}let z=i;function Vt(L,q){return e.getContext(L,q)}try{const L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",vt,!1),z===null){const q="webgl2";if(z=Vt(q,L),z===null)throw Vt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let zt,gt,pt,Lt,xt,D,R,j,it,ct,st,Dt,bt,Tt,$t,dt,At,Z,ut,lt,Pt,Rt,kt,V;function mt(){zt=new Zf(z),zt.init(),Rt=new Fp(z,zt),gt=new Xf(z,zt,t,Rt),pt=new Dp(z,zt),gt.reverseDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),Lt=new td(z),xt=new xp,D=new Np(z,zt,pt,xt,gt,Rt,Lt),R=new Yf(x),j=new Kf(x),it=new o1(z),kt=new Vf(z,it),ct=new Jf(z,it,Lt,kt),st=new nd(z,ct,it,Lt),ut=new ed(z,gt,D),dt=new qf(xt),Dt=new _p(x,R,j,zt,gt,kt,dt),bt=new Wp(x,xt),Tt=new yp,$t=new Tp(zt),Z=new Hf(x,R,j,pt,st,d,c),At=new Ip(x,st,gt),V=new Xp(z,Lt,gt,pt),lt=new Wf(z,zt,Lt),Pt=new Qf(z,zt,Lt),Lt.programs=Dt.programs,x.capabilities=gt,x.extensions=zt,x.properties=xt,x.renderLists=Tt,x.shadowMap=At,x.state=pt,x.info=Lt}mt();const et=new Hp(x,z);this.xr=et,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const L=zt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=zt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(L){L!==void 0&&(H=L,this.setSize(B,$,!1))},this.getSize=function(L){return L.set(B,$)},this.setSize=function(L,q,Q=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,$=q,e.width=Math.floor(L*H),e.height=Math.floor(q*H),Q===!0&&(e.style.width=L+"px",e.style.height=q+"px"),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(B*H,$*H).floor()},this.setDrawingBufferSize=function(L,q,Q){B=L,$=q,H=Q,e.width=Math.floor(L*Q),e.height=Math.floor(q*Q),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(W)},this.setViewport=function(L,q,Q,tt){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,q,Q,tt),pt.viewport(A.copy(W).multiplyScalar(H).round())},this.getScissor=function(L){return L.copy(ot)},this.setScissor=function(L,q,Q,tt){L.isVector4?ot.set(L.x,L.y,L.z,L.w):ot.set(L,q,Q,tt),pt.scissor(N.copy(ot).multiplyScalar(H).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(L){pt.setScissorTest(Ct=L)},this.setOpaqueSort=function(L){K=L},this.setTransparentSort=function(L){nt=L},this.getClearColor=function(L){return L.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(L=!0,q=!0,Q=!0){let tt=0;if(L){let Y=!1;if(b!==null){const _t=b.texture.format;Y=_t===ba||_t===Ma||_t===ya}if(Y){const _t=b.texture.type,wt=_t===hn||_t===ni||_t===_s||_t===Bi||_t===_a||_t===xa,Ut=Z.getClearColor(),Nt=Z.getClearAlpha(),Wt=Ut.r,Xt=Ut.g,Ft=Ut.b;wt?(p[0]=Wt,p[1]=Xt,p[2]=Ft,p[3]=Nt,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=Wt,_[1]=Xt,_[2]=Ft,_[3]=Nt,z.clearBufferiv(z.COLOR,0,_))}else tt|=z.COLOR_BUFFER_BIT}q&&(tt|=z.DEPTH_BUFFER_BIT),Q&&(tt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Tt.dispose(),$t.dispose(),xt.dispose(),R.dispose(),j.dispose(),st.dispose(),kt.dispose(),V.dispose(),Dt.dispose(),et.dispose(),et.removeEventListener("sessionstart",za),et.removeEventListener("sessionend",ka),Hn.stop()};function rt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const L=Lt.autoReset,q=At.enabled,Q=At.autoUpdate,tt=At.needsUpdate,Y=At.type;mt(),Lt.autoReset=L,At.enabled=q,At.autoUpdate=Q,At.needsUpdate=tt,At.type=Y}function vt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Gt(L){const q=L.target;q.removeEventListener("dispose",Gt),ne(q)}function ne(L){ce(L),xt.remove(L)}function ce(L){const q=xt.get(L).programs;q!==void 0&&(q.forEach(function(Q){Dt.releaseProgram(Q)}),L.isShaderMaterial&&Dt.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,Q,tt,Y,_t){q===null&&(q=ht);const wt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ut=w0(L,q,Q,tt,Y);pt.setMaterial(tt,wt);let Nt=Q.index,Wt=1;if(tt.wireframe===!0){if(Nt=ct.getWireframeAttribute(Q),Nt===void 0)return;Wt=2}const Xt=Q.drawRange,Ft=Q.attributes.position;let Zt=Xt.start*Wt,oe=(Xt.start+Xt.count)*Wt;_t!==null&&(Zt=Math.max(Zt,_t.start*Wt),oe=Math.min(oe,(_t.start+_t.count)*Wt)),Nt!==null?(Zt=Math.max(Zt,0),oe=Math.min(oe,Nt.count)):Ft!=null&&(Zt=Math.max(Zt,0),oe=Math.min(oe,Ft.count));const le=oe-Zt;if(le<0||le===1/0)return;kt.setup(Y,tt,Ut,Q,Nt);let Le,te=lt;if(Nt!==null&&(Le=it.get(Nt),te=Pt,te.setIndex(Le)),Y.isMesh)tt.wireframe===!0?(pt.setLineWidth(tt.wireframeLinewidth*Et()),te.setMode(z.LINES)):te.setMode(z.TRIANGLES);else if(Y.isLine){let Bt=tt.linewidth;Bt===void 0&&(Bt=1),pt.setLineWidth(Bt*Et()),Y.isLineSegments?te.setMode(z.LINES):Y.isLineLoop?te.setMode(z.LINE_LOOP):te.setMode(z.LINE_STRIP)}else Y.isPoints?te.setMode(z.POINTS):Y.isSprite&&te.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)te.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))te.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Bt=Y._multiDrawStarts,pn=Y._multiDrawCounts,ee=Y._multiDrawCount,$e=Nt?it.get(Nt).bytesPerElement:1,ci=xt.get(tt).currentProgram.getUniforms();for(let Ne=0;Ne<ee;Ne++)ci.setValue(z,"_gl_DrawID",Ne),te.render(Bt[Ne]/$e,pn[Ne])}else if(Y.isInstancedMesh)te.renderInstances(Zt,le,Y.count);else if(Q.isInstancedBufferGeometry){const Bt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,pn=Math.min(Q.instanceCount,Bt);te.renderInstances(Zt,le,pn)}else te.render(Zt,le)};function ie(L,q,Q){L.transparent===!0&&L.side===Ge&&L.forceSinglePass===!1?(L.side=Ae,L.needsUpdate=!0,Ts(L,q,Q),L.side=kn,L.needsUpdate=!0,Ts(L,q,Q),L.side=Ge):Ts(L,q,Q)}this.compile=function(L,q,Q=null){Q===null&&(Q=L),g=$t.get(Q),g.init(q),y.push(g),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),L!==Q&&L.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const tt=new Set;return L.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const _t=Y.material;if(_t)if(Array.isArray(_t))for(let wt=0;wt<_t.length;wt++){const Ut=_t[wt];ie(Ut,Q,Y),tt.add(Ut)}else ie(_t,Q,Y),tt.add(_t)}),y.pop(),g=null,tt},this.compileAsync=function(L,q,Q=null){const tt=this.compile(L,q,Q);return new Promise(Y=>{function _t(){if(tt.forEach(function(wt){xt.get(wt).currentProgram.isReady()&&tt.delete(wt)}),tt.size===0){Y(L);return}setTimeout(_t,10)}zt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let je=null;function dn(L){je&&je(L)}function za(){Hn.stop()}function ka(){Hn.start()}const Hn=new Ql;Hn.setAnimationLoop(dn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(L){je=L,et.setAnimationLoop(L),L===null?Hn.stop():Hn.start()},et.addEventListener("sessionstart",za),et.addEventListener("sessionend",ka),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(q),q=et.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,q,b),g=$t.get(L,y.length),g.init(q),y.push(g),O.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(O),C=this.localClippingEnabled,at=dt.init(this.clippingPlanes,C),m=Tt.get(L,v.length),m.init(),v.push(m),et.enabled===!0&&et.isPresenting===!0){const _t=x.xr.getDepthSensingMesh();_t!==null&&Ar(_t,q,-1/0,x.sortObjects)}Ar(L,q,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(K,nt),ft=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,ft&&Z.addToRenderList(m,L),this.info.render.frame++,at===!0&&dt.beginShadows();const Q=g.state.shadowsArray;At.render(Q,L,q),at===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=m.opaque,Y=m.transmissive;if(g.setupLights(),q.isArrayCamera){const _t=q.cameras;if(Y.length>0)for(let wt=0,Ut=_t.length;wt<Ut;wt++){const Nt=_t[wt];Ha(tt,Y,L,Nt)}ft&&Z.render(L);for(let wt=0,Ut=_t.length;wt<Ut;wt++){const Nt=_t[wt];Ga(m,L,Nt,Nt.viewport)}}else Y.length>0&&Ha(tt,Y,L,q),ft&&Z.render(L),Ga(m,L,q);b!==null&&(D.updateMultisampleRenderTarget(b),D.updateRenderTargetMipmap(b)),L.isScene===!0&&L.onAfterRender(x,L,q),kt.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(g=y[y.length-1],at===!0&&dt.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ar(L,q,Q,tt){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||J.intersectsSprite(L)){tt&&X.setFromMatrixPosition(L.matrixWorld).applyMatrix4(O);const wt=st.update(L),Ut=L.material;Ut.visible&&m.push(L,wt,Ut,Q,X.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||J.intersectsObject(L))){const wt=st.update(L),Ut=L.material;if(tt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),X.copy(L.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),X.copy(wt.boundingSphere.center)),X.applyMatrix4(L.matrixWorld).applyMatrix4(O)),Array.isArray(Ut)){const Nt=wt.groups;for(let Wt=0,Xt=Nt.length;Wt<Xt;Wt++){const Ft=Nt[Wt],Zt=Ut[Ft.materialIndex];Zt&&Zt.visible&&m.push(L,wt,Zt,Q,X.z,Ft)}}else Ut.visible&&m.push(L,wt,Ut,Q,X.z,null)}}const _t=L.children;for(let wt=0,Ut=_t.length;wt<Ut;wt++)Ar(_t[wt],q,Q,tt)}function Ga(L,q,Q,tt){const Y=L.opaque,_t=L.transmissive,wt=L.transparent;g.setupLightsView(Q),at===!0&&dt.setGlobalState(x.clippingPlanes,Q),tt&&pt.viewport(A.copy(tt)),Y.length>0&&Es(Y,q,Q),_t.length>0&&Es(_t,q,Q),wt.length>0&&Es(wt,q,Q),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Ha(L,q,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[tt.id]===void 0&&(g.state.transmissionRenderTarget[tt.id]=new ii(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?bs:hn,minFilter:He,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const _t=g.state.transmissionRenderTarget[tt.id],wt=tt.viewport||A;_t.setSize(wt.z,wt.w);const Ut=x.getRenderTarget();x.setRenderTarget(_t),x.getClearColor(I),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),ft&&Z.render(Q);const Nt=x.toneMapping;x.toneMapping=zn;const Wt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),g.setupLightsView(tt),at===!0&&dt.setGlobalState(x.clippingPlanes,tt),Es(L,Q,tt),D.updateMultisampleRenderTarget(_t),D.updateRenderTargetMipmap(_t),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ft=0,Zt=q.length;Ft<Zt;Ft++){const oe=q[Ft],le=oe.object,Le=oe.geometry,te=oe.material,Bt=oe.group;if(te.side===Ge&&le.layers.test(tt.layers)){const pn=te.side;te.side=Ae,te.needsUpdate=!0,Va(le,Q,tt,Le,te,Bt),te.side=pn,te.needsUpdate=!0,Xt=!0}}Xt===!0&&(D.updateMultisampleRenderTarget(_t),D.updateRenderTargetMipmap(_t))}x.setRenderTarget(Ut),x.setClearColor(I,k),Wt!==void 0&&(tt.viewport=Wt),x.toneMapping=Nt}function Es(L,q,Q){const tt=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,_t=L.length;Y<_t;Y++){const wt=L[Y],Ut=wt.object,Nt=wt.geometry,Wt=tt===null?wt.material:tt,Xt=wt.group;Ut.layers.test(Q.layers)&&Va(Ut,q,Q,Nt,Wt,Xt)}}function Va(L,q,Q,tt,Y,_t){L.onBeforeRender(x,q,Q,tt,Y,_t),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Y.onBeforeRender(x,q,Q,tt,L,_t),Y.transparent===!0&&Y.side===Ge&&Y.forceSinglePass===!1?(Y.side=Ae,Y.needsUpdate=!0,x.renderBufferDirect(Q,q,tt,Y,L,_t),Y.side=kn,Y.needsUpdate=!0,x.renderBufferDirect(Q,q,tt,Y,L,_t),Y.side=Ge):x.renderBufferDirect(Q,q,tt,Y,L,_t),L.onAfterRender(x,q,Q,tt,Y,_t)}function Ts(L,q,Q){q.isScene!==!0&&(q=ht);const tt=xt.get(L),Y=g.state.lights,_t=g.state.shadowsArray,wt=Y.state.version,Ut=Dt.getParameters(L,Y.state,_t,q,Q),Nt=Dt.getProgramCacheKey(Ut);let Wt=tt.programs;tt.environment=L.isMeshStandardMaterial?q.environment:null,tt.fog=q.fog,tt.envMap=(L.isMeshStandardMaterial?j:R).get(L.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,Wt===void 0&&(L.addEventListener("dispose",Gt),Wt=new Map,tt.programs=Wt);let Xt=Wt.get(Nt);if(Xt!==void 0){if(tt.currentProgram===Xt&&tt.lightsStateVersion===wt)return Xa(L,Ut),Xt}else Ut.uniforms=Dt.getUniforms(L),L.onBeforeCompile(Ut,x),Xt=Dt.acquireProgram(Ut,Nt),Wt.set(Nt,Xt),tt.uniforms=Ut.uniforms;const Ft=tt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ft.clippingPlanes=dt.uniform),Xa(L,Ut),tt.needsLights=T0(L),tt.lightsStateVersion=wt,tt.needsLights&&(Ft.ambientLightColor.value=Y.state.ambient,Ft.lightProbe.value=Y.state.probe,Ft.directionalLights.value=Y.state.directional,Ft.directionalLightShadows.value=Y.state.directionalShadow,Ft.spotLights.value=Y.state.spot,Ft.spotLightShadows.value=Y.state.spotShadow,Ft.rectAreaLights.value=Y.state.rectArea,Ft.ltc_1.value=Y.state.rectAreaLTC1,Ft.ltc_2.value=Y.state.rectAreaLTC2,Ft.pointLights.value=Y.state.point,Ft.pointLightShadows.value=Y.state.pointShadow,Ft.hemisphereLights.value=Y.state.hemi,Ft.directionalShadowMap.value=Y.state.directionalShadowMap,Ft.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ft.spotShadowMap.value=Y.state.spotShadowMap,Ft.spotLightMatrix.value=Y.state.spotLightMatrix,Ft.spotLightMap.value=Y.state.spotLightMap,Ft.pointShadowMap.value=Y.state.pointShadowMap,Ft.pointShadowMatrix.value=Y.state.pointShadowMatrix),tt.currentProgram=Xt,tt.uniformsList=null,Xt}function Wa(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=ar.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function Xa(L,q){const Q=xt.get(L);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function w0(L,q,Q,tt,Y){q.isScene!==!0&&(q=ht),D.resetTextureUnits();const _t=q.fog,wt=tt.isMeshStandardMaterial?q.environment:null,Ut=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Vi,Nt=(tt.isMeshStandardMaterial?j:R).get(tt.envMap||wt),Wt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Xt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ft=!!Q.morphAttributes.position,Zt=!!Q.morphAttributes.normal,oe=!!Q.morphAttributes.color;let le=zn;tt.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(le=x.toneMapping);const Le=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,te=Le!==void 0?Le.length:0,Bt=xt.get(tt),pn=g.state.lights;if(at===!0&&(C===!0||L!==M)){const Xe=L===M&&tt.id===S;dt.setState(tt,L,Xe)}let ee=!1;tt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==pn.state.version||Bt.outputColorSpace!==Ut||Y.isBatchedMesh&&Bt.batching===!1||!Y.isBatchedMesh&&Bt.batching===!0||Y.isBatchedMesh&&Bt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Bt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Bt.instancing===!1||!Y.isInstancedMesh&&Bt.instancing===!0||Y.isSkinnedMesh&&Bt.skinning===!1||!Y.isSkinnedMesh&&Bt.skinning===!0||Y.isInstancedMesh&&Bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Bt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Bt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Bt.instancingMorph===!1&&Y.morphTexture!==null||Bt.envMap!==Nt||tt.fog===!0&&Bt.fog!==_t||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==dt.numPlanes||Bt.numIntersection!==dt.numIntersection)||Bt.vertexAlphas!==Wt||Bt.vertexTangents!==Xt||Bt.morphTargets!==Ft||Bt.morphNormals!==Zt||Bt.morphColors!==oe||Bt.toneMapping!==le||Bt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Bt.__version=tt.version);let $e=Bt.currentProgram;ee===!0&&($e=Ts(tt,q,Y));let ci=!1,Ne=!1,$i=!1;const ue=$e.getUniforms(),sn=Bt.uniforms;if(pt.useProgram($e.program)&&(ci=!0,Ne=!0,$i=!0),tt.id!==S&&(S=tt.id,Ne=!0),ci||M!==L){pt.buffers.depth.getReversed()?(F.copy(L.projectionMatrix),Nu(F),Fu(F),ue.setValue(z,"projectionMatrix",F)):ue.setValue(z,"projectionMatrix",L.projectionMatrix),ue.setValue(z,"viewMatrix",L.matrixWorldInverse);const Cn=ue.map.cameraPosition;Cn!==void 0&&Cn.setValue(z,G.setFromMatrixPosition(L.matrixWorld)),gt.logarithmicDepthBuffer&&ue.setValue(z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ue.setValue(z,"isOrthographic",L.isOrthographicCamera===!0),M!==L&&(M=L,Ne=!0,$i=!0)}if(Y.isSkinnedMesh){ue.setOptional(z,Y,"bindMatrix"),ue.setOptional(z,Y,"bindMatrixInverse");const Xe=Y.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ue.setValue(z,"boneTexture",Xe.boneTexture,D))}Y.isBatchedMesh&&(ue.setOptional(z,Y,"batchingTexture"),ue.setValue(z,"batchingTexture",Y._matricesTexture,D),ue.setOptional(z,Y,"batchingIdTexture"),ue.setValue(z,"batchingIdTexture",Y._indirectTexture,D),ue.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ue.setValue(z,"batchingColorTexture",Y._colorsTexture,D));const Ki=Q.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&ut.update(Y,Q,$e),(Ne||Bt.receiveShadow!==Y.receiveShadow)&&(Bt.receiveShadow=Y.receiveShadow,ue.setValue(z,"receiveShadow",Y.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(sn.envMap.value=Nt,sn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&q.environment!==null&&(sn.envMapIntensity.value=q.environmentIntensity),Ne&&(ue.setValue(z,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&E0(sn,$i),_t&&tt.fog===!0&&bt.refreshFogUniforms(sn,_t),bt.refreshMaterialUniforms(sn,tt,H,$,g.state.transmissionRenderTarget[L.id]),ar.upload(z,Wa(Bt),sn,D)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ar.upload(z,Wa(Bt),sn,D),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ue.setValue(z,"center",Y.center),ue.setValue(z,"modelViewMatrix",Y.modelViewMatrix),ue.setValue(z,"normalMatrix",Y.normalMatrix),ue.setValue(z,"modelMatrix",Y.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Xe=tt.uniformsGroups;for(let Cn=0,Pn=Xe.length;Cn<Pn;Cn++){const qa=Xe[Cn];V.update(qa,$e),V.bind(qa,$e)}}return $e}function E0(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function T0(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(L,q,Q){xt.get(L.texture).__webglTexture=q,xt.get(L.depthTexture).__webglTexture=Q;const tt=xt.get(L);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=Q===void 0,tt.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,q){const Q=xt.get(L);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,Q=0){b=L,E=q,w=Q;let tt=!0,Y=null,_t=!1,wt=!1;if(L){const Nt=xt.get(L);if(Nt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(z.FRAMEBUFFER,null),tt=!1;else if(Nt.__webglFramebuffer===void 0)D.setupRenderTarget(L);else if(Nt.__hasExternalTextures)D.rebindTextures(L,xt.get(L.texture).__webglTexture,xt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ft=L.depthTexture;if(Nt.__boundDepthTexture!==Ft){if(Ft!==null&&xt.has(Ft)&&(L.width!==Ft.image.width||L.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(L)}}const Wt=L.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(wt=!0);const Xt=xt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Xt[q])?Y=Xt[q][Q]:Y=Xt[q],_t=!0):L.samples>0&&D.useMultisampledRTT(L)===!1?Y=xt.get(L).__webglMultisampledFramebuffer:Array.isArray(Xt)?Y=Xt[Q]:Y=Xt,A.copy(L.viewport),N.copy(L.scissor),P=L.scissorTest}else A.copy(W).multiplyScalar(H).floor(),N.copy(ot).multiplyScalar(H).floor(),P=Ct;if(pt.bindFramebuffer(z.FRAMEBUFFER,Y)&&tt&&pt.drawBuffers(L,Y),pt.viewport(A),pt.scissor(N),pt.setScissorTest(P),_t){const Nt=xt.get(L.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,Q)}else if(wt){const Nt=xt.get(L.texture),Wt=q||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,Q||0,Wt)}S=-1},this.readRenderTargetPixels=function(L,q,Q,tt,Y,_t,wt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=xt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut){pt.bindFramebuffer(z.FRAMEBUFFER,Ut);try{const Nt=L.texture,Wt=Nt.format,Xt=Nt.type;if(!gt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-tt&&Q>=0&&Q<=L.height-Y&&z.readPixels(q,Q,tt,Y,Rt.convert(Wt),Rt.convert(Xt),_t)}finally{const Nt=b!==null?xt.get(b).__webglFramebuffer:null;pt.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(L,q,Q,tt,Y,_t,wt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=xt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut){const Nt=L.texture,Wt=Nt.format,Xt=Nt.type;if(!gt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=L.width-tt&&Q>=0&&Q<=L.height-Y){pt.bindFramebuffer(z.FRAMEBUFFER,Ut);const Ft=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ft),z.bufferData(z.PIXEL_PACK_BUFFER,_t.byteLength,z.STREAM_READ),z.readPixels(q,Q,tt,Y,Rt.convert(Wt),Rt.convert(Xt),0);const Zt=b!==null?xt.get(b).__webglFramebuffer:null;pt.bindFramebuffer(z.FRAMEBUFFER,Zt);const oe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Uu(z,oe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ft),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,_t),z.deleteBuffer(Ft),z.deleteSync(oe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,q=null,Q=0){L.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,L=arguments[1]);const tt=Math.pow(2,-Q),Y=Math.floor(L.image.width*tt),_t=Math.floor(L.image.height*tt),wt=q!==null?q.x:0,Ut=q!==null?q.y:0;D.setTexture2D(L,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,wt,Ut,Y,_t),pt.unbindTexture()},this.copyTextureToTexture=function(L,q,Q=null,tt=null,Y=0){L.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,L=arguments[1],q=arguments[2],Y=arguments[3]||0,Q=null);let _t,wt,Ut,Nt,Wt,Xt,Ft,Zt,oe;const le=L.isCompressedTexture?L.mipmaps[Y]:L.image;Q!==null?(_t=Q.max.x-Q.min.x,wt=Q.max.y-Q.min.y,Ut=Q.isBox3?Q.max.z-Q.min.z:1,Nt=Q.min.x,Wt=Q.min.y,Xt=Q.isBox3?Q.min.z:0):(_t=le.width,wt=le.height,Ut=le.depth||1,Nt=0,Wt=0,Xt=0),tt!==null?(Ft=tt.x,Zt=tt.y,oe=tt.z):(Ft=0,Zt=0,oe=0);const Le=Rt.convert(q.format),te=Rt.convert(q.type);let Bt;q.isData3DTexture?(D.setTexture3D(q,0),Bt=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(D.setTexture2DArray(q,0),Bt=z.TEXTURE_2D_ARRAY):(D.setTexture2D(q,0),Bt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const pn=z.getParameter(z.UNPACK_ROW_LENGTH),ee=z.getParameter(z.UNPACK_IMAGE_HEIGHT),$e=z.getParameter(z.UNPACK_SKIP_PIXELS),ci=z.getParameter(z.UNPACK_SKIP_ROWS),Ne=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,le.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,le.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Nt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Wt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xt);const $i=L.isDataArrayTexture||L.isData3DTexture,ue=q.isDataArrayTexture||q.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const sn=xt.get(L),Ki=xt.get(q),Xe=xt.get(sn.__renderTarget),Cn=xt.get(Ki.__renderTarget);pt.bindFramebuffer(z.READ_FRAMEBUFFER,Xe.__webglFramebuffer),pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Pn=0;Pn<Ut;Pn++)$i&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xt.get(L).__webglTexture,Y,Xt+Pn),L.isDepthTexture?(ue&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xt.get(q).__webglTexture,Y,oe+Pn),z.blitFramebuffer(Nt,Wt,_t,wt,Ft,Zt,_t,wt,z.DEPTH_BUFFER_BIT,z.NEAREST)):ue?z.copyTexSubImage3D(Bt,Y,Ft,Zt,oe+Pn,Nt,Wt,_t,wt):z.copyTexSubImage2D(Bt,Y,Ft,Zt,oe+Pn,Nt,Wt,_t,wt);pt.bindFramebuffer(z.READ_FRAMEBUFFER,null),pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ue?L.isDataTexture||L.isData3DTexture?z.texSubImage3D(Bt,Y,Ft,Zt,oe,_t,wt,Ut,Le,te,le.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Bt,Y,Ft,Zt,oe,_t,wt,Ut,Le,le.data):z.texSubImage3D(Bt,Y,Ft,Zt,oe,_t,wt,Ut,Le,te,le):L.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Y,Ft,Zt,_t,wt,Le,te,le.data):L.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Y,Ft,Zt,le.width,le.height,Le,le.data):z.texSubImage2D(z.TEXTURE_2D,Y,Ft,Zt,_t,wt,Le,te,le);z.pixelStorei(z.UNPACK_ROW_LENGTH,pn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ee),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$e),z.pixelStorei(z.UNPACK_SKIP_ROWS,ci),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ne),Y===0&&q.generateMipmaps&&z.generateMipmap(Bt),pt.unbindTexture()},this.copyTextureToTexture3D=function(L,q,Q=null,tt=null,Y=0){return L.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,tt=arguments[1]||null,L=arguments[2],q=arguments[3],Y=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,q,Q,tt,Y)},this.initRenderTarget=function(L){xt.get(L).__webglFramebuffer===void 0&&D.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?D.setTextureCube(L,0):L.isData3DTexture?D.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?D.setTexture2DArray(L,0):D.setTexture2D(L,0),pt.unbindTexture()},this.resetState=function(){E=0,w=0,b=null,pt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class o0 extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ie,this.environmentIntensity=1,this.environmentRotation=new Ie,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ss extends Me{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Ve,u=Ve,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa extends pe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Si=new jt,Wc=new jt,js=[],Xc=new En,Yp=new jt,es=new Jt,ns=new qi;class Aa extends Jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Yp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new En),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Si),Xc.copy(t.boundingBox).applyMatrix4(Si),this.boundingBox.union(Xc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Si),ns.copy(t.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(i),t.ray.intersectsSphere(ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Si),Wc.multiplyMatrices(i,Si),es.matrixWorld=Wc,es.raycast(t,js);for(let a=0,o=js.length;a<o;a++){const c=js[a];c.instanceId=r,c.object=this,e.push(c)}js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new oa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ss(new Float32Array(s*this.count),s,this.count,va,ln));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jp extends oi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qc=new jt,aa=new Xl,$s=new qi,Ks=new U;class $p extends ve{constructor(t=new Qt,e=new jp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(s),$s.radius+=r,t.ray.intersectsSphere($s)===!1)return;qc.copy(s).invert(),aa.copy(t.ray).applyMatrix4(qc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,_=d;p<_;p++){const m=l.getX(p);Ks.fromBufferAttribute(h,m),Yc(Ks,m,c,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=f,_=d;p<_;p++)Ks.fromBufferAttribute(h,p),Yc(Ks,p,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Yc(n,t,e,i,s,r,a){const o=aa.distanceSqToPoint(n);if(o<e){const c=new U;aa.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ji extends Me{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new It:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,s=[],r=[],a=[],o=new U,c=new jt;for(let d=0;d<=t;d++){const p=d/t;s[d]=this.getTangentAt(p,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(xe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(xe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class a0 extends An{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new It){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Kp extends a0{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ra(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Zs=new U,no=new Ra,io=new Ra,so=new Ra;class Ca extends An{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Zs.subVectors(s[0],s[1]).add(s[0]),l=Zs);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Zs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Zs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),no.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,p,_,m),io.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,p,_,m),so.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(no.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),io.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),so.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(no.calc(c),io.calc(c),so.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jc(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function Zp(n,t){const e=1-n;return e*e*t}function Jp(n,t){return 2*(1-n)*n*t}function Qp(n,t){return n*n*t}function ds(n,t,e,i){return Zp(n,t)+Jp(n,e)+Qp(n,i)}function t2(n,t){const e=1-n;return e*e*e*t}function e2(n,t){const e=1-n;return 3*e*e*n*t}function n2(n,t){return 3*(1-n)*n*n*t}function i2(n,t){return n*n*n*t}function ps(n,t,e,i,s){return t2(n,t)+e2(n,e)+n2(n,i)+i2(n,s)}class s2 extends An{constructor(t=new It,e=new It,i=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new It){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ps(t,s.x,r.x,a.x,o.x),ps(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class r2 extends An{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ps(t,s.x,r.x,a.x,o.x),ps(t,s.y,r.y,a.y,o.y),ps(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class o2 extends An{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class a2 extends An{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class c2 extends An{constructor(t=new It,e=new It,i=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new It){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ds(t,s.x,r.x,a.x),ds(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class c0 extends An{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ds(t,s.x,r.x,a.x),ds(t,s.y,r.y,a.y),ds(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l2 extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(jc(o,c.x,l.x,u.x,h.x),jc(o,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new It().fromArray(s))}return this}}var u2=Object.freeze({__proto__:null,ArcCurve:Kp,CatmullRomCurve3:Ca,CubicBezierCurve:s2,CubicBezierCurve3:r2,EllipseCurve:a0,LineCurve:o2,LineCurve3:a2,QuadraticBezierCurve:c2,QuadraticBezierCurve3:c0,SplineCurve:l2});class ws extends Qt{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=xe(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,h=new U,f=new It,d=new U,p=new U,_=new U;let m=0,g=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let v=0;v<=e;v++){const y=i+v*u*s,x=Math.sin(y),T=Math.cos(y);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*x,h.y=t[E].y,h.z=t[E].x*T,a.push(h.x,h.y,h.z),f.x=v/e,f.y=E/(t.length-1),o.push(f.x,f.y);const w=c[3*E+0]*x,b=c[3*E+1],S=c[3*E+0]*T;l.push(w,b,S)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const x=y+v*t.length,T=x,E=x+t.length,w=x+t.length+1,b=x+1;r.push(T,E,b),r.push(w,b,E)}this.setIndex(r),this.setAttribute("position",new Ot(a,3)),this.setAttribute("uv",new Ot(o,2)),this.setAttribute("normal",new Ot(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.points,t.segments,t.phiStart,t.phiLength)}}class Gn extends Qt{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let p=0;const _=[],m=i/2;let g=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(d,2));function v(){const x=new U,T=new U;let E=0;const w=(e-t)/i;for(let b=0;b<=r;b++){const S=[],M=b/r,A=M*(e-t)+t;for(let N=0;N<=s;N++){const P=N/s,I=P*c+o,k=Math.sin(I),B=Math.cos(I);T.x=A*k,T.y=-M*i+m,T.z=A*B,h.push(T.x,T.y,T.z),x.set(k,w,B).normalize(),f.push(x.x,x.y,x.z),d.push(P,1-M),S.push(p++)}_.push(S)}for(let b=0;b<s;b++)for(let S=0;S<r;S++){const M=_[S][b],A=_[S+1][b],N=_[S+1][b+1],P=_[S][b+1];(t>0||S!==0)&&(u.push(M,A,P),E+=3),(e>0||S!==r-1)&&(u.push(A,N,P),E+=3)}l.addGroup(g,E,0),g+=E}function y(x){const T=p,E=new It,w=new U;let b=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),p++;const A=p;for(let N=0;N<=s;N++){const I=N/s*c+o,k=Math.cos(I),B=Math.sin(I);w.x=S*B,w.y=m*M,w.z=S*k,h.push(w.x,w.y,w.z),f.push(0,M,0),E.x=k*.5+.5,E.y=B*.5*M+.5,d.push(E.x,E.y),p++}for(let N=0;N<s;N++){const P=T+N,I=A+N;x===!0?u.push(I,I+1,P):u.push(I+1,I,P),b+=3}l.addGroup(g,b,x===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pa extends Qt{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new U,x=new U,T=new U;for(let E=0;E<e.length;E+=3)d(e[E+0],y),d(e[E+1],x),d(e[E+2],T),c(y,x,T,v)}function c(v,y,x,T){const E=T+1,w=[];for(let b=0;b<=E;b++){w[b]=[];const S=v.clone().lerp(x,b/E),M=y.clone().lerp(x,b/E),A=E-b;for(let N=0;N<=A;N++)N===0&&b===E?w[b][N]=S:w[b][N]=S.clone().lerp(M,N/A)}for(let b=0;b<E;b++)for(let S=0;S<2*(E-b)-1;S++){const M=Math.floor(S/2);S%2===0?(f(w[b][M+1]),f(w[b+1][M]),f(w[b][M])):(f(w[b][M+1]),f(w[b+1][M+1]),f(w[b+1][M]))}}function l(v){const y=new U;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const v=new U;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,T=g(v)/Math.PI+.5;a.push(x,1-T)}p(),h()}function h(){for(let v=0;v<a.length;v+=6){const y=a[v+0],x=a[v+2],T=a[v+4],E=Math.max(y,x,T),w=Math.min(y,x,T);E>.9&&w<.1&&(y<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){const x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function p(){const v=new U,y=new U,x=new U,T=new U,E=new It,w=new It,b=new It;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),b.set(a[M+4],a[M+5]),T.copy(v).add(y).add(x).divideScalar(3);const A=m(T);_(E,M+0,v,A),_(w,M+2,y,A),_(b,M+4,x,A)}}function _(v,y,x,T){T<0&&v.x===1&&(a[y]=v.x-1),x.x===0&&x.z===0&&(a[y]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.vertices,t.indices,t.radius,t.details)}}class Ia extends Pa{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ia(t.radius,t.detail)}}class La extends Qt{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new U,p=new It;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const g=r+m/i*a;d.x=h*Math.cos(g),d.y=h*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}h+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let g=0;g<i;g++){const v=g+m,y=v,x=v+i+1,T=v+i+2,E=v+1;o.push(y,x,E),o.push(x,T,E)}}this.setIndex(o),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ri extends Qt{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new U,f=new U,d=[],p=[],_=[],m=[];for(let g=0;g<=i;g++){const v=[],y=g/i;let x=0;g===0&&a===0?x=.5/e:g===i&&c===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const E=T/e;h.x=-t*Math.cos(s+E*r)*Math.sin(a+y*o),h.y=t*Math.cos(a+y*o),h.z=t*Math.sin(s+E*r)*Math.sin(a+y*o),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(E+x,1-y),v.push(l++)}u.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){const y=u[g][v+1],x=u[g][v],T=u[g+1][v],E=u[g+1][v+1];(g!==0||a>0)&&d.push(y,x,E),(g!==i-1||c<Math.PI)&&d.push(x,T,E)}this.setIndex(d),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hi extends Qt{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new U,h=new U,f=new U;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){const _=p/s*r,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(p/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){const _=(s+1)*d+p-1,m=(s+1)*(d-1)+p-1,g=(s+1)*(d-1)+p,v=(s+1)*d+p;a.push(_,m,v),a.push(m,g,v)}this.setIndex(a),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mr extends Qt{constructor(t=new c0(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,c=new U,l=new It;let u=new U;const h=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(d,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),v(),g()}function m(y){u=t.getPointAt(y/e,u);const x=a.normals[y],T=a.binormals[y];for(let E=0;E<=s;E++){const w=E/s*Math.PI*2,b=Math.sin(w),S=-Math.cos(w);c.x=S*x.x+b*T.x,c.y=S*x.y+b*T.y,c.z=S*x.z+b*T.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=u.x+i*c.x,o.y=u.y+i*c.y,o.z=u.z+i*c.z,h.push(o.x,o.y,o.z)}}function g(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){const T=(s+1)*(y-1)+(x-1),E=(s+1)*y+(x-1),w=(s+1)*y+x,b=(s+1)*(y-1)+x;p.push(T,E,b),p.push(E,w,b)}}function v(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)l.x=y/e,l.y=x/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mr(new u2[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Te extends oi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ie,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class h2 extends oi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ie,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const $c={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class f2{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],p=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const d2=new f2;class Da{constructor(t){this.manager=t!==void 0?t:d2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Da.DEFAULT_MATERIAL_NAME="__DEFAULT";class p2 extends Da{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=$c.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=vs("img");function c(){u(),$c.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class m2 extends Da{constructor(t){super(t)}load(t,e,i,s){const r=new Me,a=new p2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Ua extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class g2 extends Ua{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ro=new jt,Kc=new U,Zc=new U;class l0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kc),Zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zc),e.updateMatrixWorld(),ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jc=new jt,is=new U,oo=new U;class _2 extends l0{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),is.setFromMatrixPosition(t.matrixWorld),i.position.copy(is),oo.copy(i.position),oo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(oo),i.updateMatrixWorld(),s.makeTranslation(-is.x,-is.y,-is.z),Jc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc)}}class ca extends Ua{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class x2 extends l0{constructor(){super(new t0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class v2 extends Ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new x2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);class y2 extends o0{constructor(){super();const t=new Tn;t.deleteAttribute("uv");const e=new Te({side:Ae}),i=new Te,s=new ca(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Jt(t,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Jt(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new Jt(t,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Jt(t,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new Jt(t,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new Jt(t,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new Jt(t,wi(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Jt(t,wi(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const p=new Jt(t,wi(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const _=new Jt(t,wi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Jt(t,wi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const g=new Jt(t,wi(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function wi(n){const t=new ki;return t.color.setScalar(n),t}function ei(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function be(n,t=4,e=4){const i=ei(n),s=[];for(let h=0;h<e;h++){const f=t<<h,d=new Float32Array(f*f);for(let p=0;p<d.length;p++)d[p]=i();s.push({P:f,g:d})}const r=4096,a=new Map,o=new Map;function c(h,f,d){let p=h.get(f);if(p)return p;p=new Float64Array(s.length*3);for(let _=0;_<s.length;_++){const m=s[_].P,g=f*m,v=Math.floor(g),y=g-v,x=(v%m+m)%m,T=(x+1)%m,E=_*3;p[E]=d?x*m:x,p[E+1]=d?T*m:T,p[E+2]=y*y*(3-2*y)}return h.size>=r&&h.delete(h.keys().next().value),h.set(f,p),p}let l=0,u=.5;for(let h=0;h<s.length;h++)l+=u,u*=.5;return(h,f)=>{const d=c(a,h,!1),p=c(o,f,!0);let _=0,m=.5;for(let g=0;g<s.length;g++){const v=s[g].g,y=g*3,x=d[y],T=d[y+1],E=d[y+2],w=p[y],b=p[y+1],S=p[y+2],M=v[w+x],A=v[w+T],N=v[b+x],P=v[b+T];_+=m*(M+(A-M)*E+(N-M)*S+(M-A-N+P)*E*S),m*=.5}return _/l}}function fn(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}function Rn(n,t=!0,e=!0){const i=new ji(n);return t&&(i.colorSpace=he),e&&(i.wrapS=i.wrapT=wn),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=He,i}function ai(n,t){const e=n.getContext("2d"),i=e.createImageData(n.width,n.height),s=i.data,r=[0,0,0];for(let a=0;a<n.height;a++)for(let o=0;o<n.width;o++){t(o/n.width,a/n.height,r,o,a);const c=(a*n.width+o)*4;s[c]=r[0],s[c+1]=r[1],s[c+2]=r[2],s[c+3]=255}return e.putImageData(i,0,0),e}const nn=(n,t=0,e=255)=>n<t?t:n>e?e:n;function ao(n,t,e,i={}){const s=i.size||512,r=fn(s,s),a=be(n,2,4),o=be(n+7,8,3),c=be(n+13,3,4),l=i.rings||9;return ai(r,(u,h,f)=>{const d=a(u*.5,h)*3;let p=Math.sin((h*l+d)*Math.PI*2);p=Math.pow(Math.abs(p),.35);const _=o(u*.25,h*8),m=o(u*2,h*32%1);let g=.55*p+.3*_+.15*m;g=g*(.85+.3*c(u,h));for(let v=0;v<3;v++)f[v]=nn(e[v]+(t[v]-e[v])*g)}),Rn(r)}function M2(n){const e=fn(1024,1024),i=ei(n),s=8,r=[];for(let h=0;h<s;h++)r.push({off:i(),tone:.78+i()*.35,hue:i(),len:.45+i()*.3});const a=be(n+3,2,4),o=be(n+9,8,3),c=be(n+11,3,4),l=[150,98,58],u=[78,46,24];return ai(e,(h,f,d)=>{const p=Math.floor(f*s),_=r[p],m=f*s-p,g=(h+_.off)%1,v=Math.floor(g/_.len*2),y=g/_.len*2%1,x=_.tone*(v%2?.92:1.04)*(.96+.08*Math.sin(v*12.9+p)),T=a(h,f*.5+p*.13)*2.5;let E=Math.abs(Math.sin((m*3+T+v)*Math.PI*2));E=Math.pow(E,.4);const w=o(h*.5,f*4);let b=(.55*E+.45*w)*x;const S=c(h,f);b*=.9+.2*S;let M=Math.min(m,1-m)*64,A=Math.min(y,1-y)*260;const N=Math.min(1,M,A);for(let P=0;P<3;P++)d[P]=nn((u[P]+(l[P]-u[P])*b)*(.25+.75*N)+(_.hue-.5)*(P===0?12:P===1?6:0))}),Rn(e)}function Qc(n,t){const i=fn(512,512),s=be(n,4,5),r=be(n+1,16,2);return ai(i,(a,o,c)=>{const l=s(a,o),u=r(a,o),h=.88+.16*l+.05*u;c[0]=nn(t[0]*h),c[1]=nn(t[1]*h),c[2]=nn(t[2]*(h-.02))}),Rn(i)}function b2(n){const e=fn(512,512),i=be(n,6,5),s=be(n+4,24,2);return ai(e,(r,a,o)=>{const c=Math.floor(a*4),l=(r+c%2*.5)%1,u=a*4-c,h=l*2-Math.floor(l*2),f=Math.min(1,Math.min(u,1-u)*40,Math.min(h,1-h)*60),d=(.8+.25*i(r,a)+.08*s(r,a))*(.55+.45*f);o[0]=nn(196*d),o[1]=nn(178*d),o[2]=nn(150*d)}),Rn(e)}function tl(n,t){const i=fn(512,512),s=be(n,64,2),r=be(n+2,8,4),a=be(n+5,3,4);return ai(i,(o,c,l)=>{const u=s(o,c),f=Math.abs(r(o,c)-.5)<.015?.7:1,d=Math.max(0,a(o,c)-.52)*3.2,p=(.82+.3*u)*f;for(let _=0;_<3;_++){const m=t[_]+(_===0?70:_===1?52:36);l[_]=nn((t[_]*(1-d)+m*d)*p)}}),Rn(i)}function co(n,t,e){const s=fn(256,256),r=be(n,8,3);return ai(s,(a,o,c,l,u)=>{const h=((l+u)%4<2?1:.92)*(l%2?1:.96),f=e&&Math.sin(a*Math.PI*2*6)>.6?.82:1,d=h*f*(.9+.15*r(a,o));for(let p=0;p<3;p++)c[p]=nn(t[p]*d)}),Rn(s)}function S2(n){const i=fn(512,768),s=i.getContext("2d");s.fillStyle="#7a2a22",s.fillRect(0,0,512,768);const r=(h,f,d)=>{s.strokeStyle=d,s.lineWidth=f,s.strokeRect(h,h,512-h*2,768-h*2)};r(14,22,"#2a2440"),r(34,6,"#c9a46a"),r(52,26,"#3c4a5c"),r(70,5,"#c9a46a"),s.fillStyle="#d2b07a";for(let h=0;h<26;h++){const f=h/26,d=[[f*512,52],[460,f*768],[512-f*512,716],[52,768-f*768]];for(const[p,_]of d)s.save(),s.translate(p,_),s.rotate(Math.PI/4),s.fillRect(-5,-5,10,10),s.restore()}for(let h=110;h<668;h+=48)for(let f=110;f<412;f+=48)s.fillStyle=(f+h)%96===0?"#2f3a52":"#a8742f",s.save(),s.translate(f,h),s.rotate(Math.PI/4),s.fillRect(-7,-7,14,14),s.restore(),s.fillStyle="#e0c590",s.fillRect(f-2,h-2,4,4);s.save(),s.translate(512/2,768/2);const a=[[150,"#2a2440"],[130,"#c9a46a"],[118,"#3c4a5c"],[86,"#8e3a2a"],[60,"#d8bd85"],[36,"#2a2440"]];for(const[h,f]of a)s.fillStyle=f,s.beginPath(),s.ellipse(0,0,h*.75,h,0,0,Math.PI*2),s.fill();s.restore();const o=s.getImageData(0,0,512,768),c=be(n+3,4,4),l=be(n+5,64,1);for(let h=0;h<768;h++)for(let f=0;f<512;f++){const d=(h*512+f)*4,p=.78+.28*c(f/512,h/768)+.08*l(f/512,h/768),_=Math.max(0,c(f/512+.3,h/768)-.58)*1.6;for(let m=0;m<3;m++)o.data[d+m]=nn(o.data[d+m]*p*(1-_)+150*_)}return s.putImageData(o,0,0),Rn(i,!0,!1)}function w2(n){const i=fn(512,256),s=i.getContext("2d"),r=ei(n),a=be(n,16,3);ai(i,(l,u,h)=>{const f=200+40*a(l,u);h[0]=h[1]=h[2]=f});const o="#d9a94a",c=32;for(let l=0;l<8;l++){const u=l*c;s.save(),s.beginPath(),s.rect(u,0,c,256),s.clip();const h=s.createLinearGradient(u,0,u+c,0);if(h.addColorStop(0,"rgba(0,0,0,0.35)"),h.addColorStop(.2,"rgba(0,0,0,0)"),h.addColorStop(.8,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,0.35)"),s.fillStyle=h,s.fillRect(u,0,c,256),s.fillStyle=o,l===0&&(s.fillRect(u,14,c,2),s.fillRect(u,240,c,2)),l===1){for(const f of[40,90,140,190])s.fillStyle="rgba(0,0,0,0.45)",s.fillRect(u,f,c,6),s.fillStyle="rgba(255,255,255,0.35)",s.fillRect(u,f,c,2);s.fillStyle="#2a1a14",s.fillRect(u+3,52,c-6,30),s.fillStyle=o;for(let f=0;f<3;f++)s.fillRect(u+7,60+f*7,c-14-r()*6,2)}if(l===2){for(let f=0;f<6;f++)s.fillRect(u+8,50+f*9,c-16-r()*8,3);s.fillRect(u,226,c,6)}if(l===3){s.fillStyle="rgba(0,0,0,0.5)",s.fillRect(u,0,c,34),s.fillRect(u,222,c,34),s.fillStyle=o,s.fillRect(u,34,c,2),s.fillRect(u,220,c,2);for(let f=0;f<4;f++)s.fillRect(u+9,80+f*8,c-18,2)}if(l===4){s.fillStyle="rgba(255,255,255,0.25)",s.fillRect(u,0,c,256),s.fillStyle="rgba(20,20,20,0.75)";for(let f=0;f<10;f++)s.fillRect(u+12,40+f*12,3+r()*4,7)}if(l===5){for(const f of[8,16,24,230,238,246])s.fillRect(u,f,c,2);for(let f=0;f<5;f++)s.beginPath(),s.arc(u+c/2,60+f*30,3,0,Math.PI*2),s.fill();s.fillStyle="#1d1d1d",s.fillRect(u+4,34,c-8,18),s.fillStyle=o,s.fillRect(u+8,41,c-16,3)}if(l===6){s.fillStyle="rgba(255,255,255,0.3)";for(let f=0;f<40;f++)s.fillRect(u+r()*c,r()<.5?r()*30:256-r()*30,2+r()*4,1+r()*2);s.fillStyle=o,s.fillRect(u+10,70,c-20,3)}l===7&&(s.fillStyle="rgba(0,0,0,0.55)",s.fillRect(u,20,c,10),s.fillRect(u,226,c,10),s.fillStyle="rgba(240,235,220,1)",s.fillRect(u+5,60,c-10,34),s.fillStyle="rgba(40,30,20,0.8)",s.fillRect(u+8,70,c-16,2),s.fillRect(u+8,78,c-18,2)),s.restore()}for(let l=256;l<384;l++){const u=215+(Math.sin(l*2.7)*.5+.5)*30*r();s.fillStyle=`rgb(${u},${u},${u-4})`,s.fillRect(l,0,1,256)}return Rn(i,!0,!1)}function E2(n){const e=fn(512,512),i=e.getContext("2d"),s=ei(n);return[["#d8b27a","#8a6a4a","#4b5a3a","#2e3a2a"],["#9fb3c0","#6a7a6a","#3e4a3a","#22281e"],["#e8c28a","#b07a4a","#5a3a2a","#2a1e18"],["#7a8aa0","#5a6058","#3a3a30","#1e1e18"]].forEach((a,o)=>{const c=o%2*256,l=Math.floor(o/2)*256,u=i.createLinearGradient(0,l,0,l+256);u.addColorStop(0,a[0]),u.addColorStop(.55,a[1]),u.addColorStop(1,a[3]),i.fillStyle=u,i.fillRect(c,l,256,256);for(let f=0;f<3;f++){i.fillStyle=a[1+f],i.beginPath(),i.moveTo(c,l+256);const d=120+f*45;for(let p=0;p<=16;p++)i.lineTo(c+p*16,l+d+Math.sin(p*.7+f*2+o)*18+s()*10);i.lineTo(c+256,l+256),i.fill()}o===2&&(i.fillStyle="rgba(255,230,170,0.8)",i.beginPath(),i.arc(c+180,l+90,18,0,7),i.fill());const h=i.createRadialGradient(c+128,l+128,40,c+128,l+128,190);h.addColorStop(0,"rgba(60,40,10,0)"),h.addColorStop(1,"rgba(40,25,5,0.55)"),i.fillStyle=h,i.fillRect(c,l,256,256)}),Rn(e,!0,!1)}function T2(){const n=fn(64,64),t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ji(n)}function br(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new Qt;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=el(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<a[u].length;++_)d.push(a[u][_][f]);const p=el(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function el(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new pe(a,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<e;p++){const _=u.getComponent(f,p);o.setComponent(f+h,p,_)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function A2(n,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let a=0;const o=Object.keys(n.attributes),c={},l={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let v=0,y=o.length;v<y;v++){const x=o[v],T=n.attributes[x];c[x]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);const E=n.morphAttributes[x];E&&(l[x]||(l[x]=[]),E.forEach((w,b)=>{const S=new w.array.constructor(w.count*w.itemSize);l[x][b]=new w.constructor(S,w.itemSize,w.normalized)}))}const d=t*.5,p=Math.log10(1/t),_=Math.pow(10,p),m=d*_;for(let v=0;v<r;v++){const y=i?i.getX(v):v;let x="";for(let T=0,E=o.length;T<E;T++){const w=o[T],b=n.getAttribute(w),S=b.itemSize;for(let M=0;M<S;M++)x+=`${~~(b[h[M]](y)*_+m)},`}if(x in e)u.push(e[x]);else{for(let T=0,E=o.length;T<E;T++){const w=o[T],b=n.getAttribute(w),S=n.morphAttributes[w],M=b.itemSize,A=c[w],N=l[w];for(let P=0;P<M;P++){const I=h[P],k=f[P];if(A[k](a,b[I](y)),S)for(let B=0,$=S.length;B<$;B++)N[B][k](a,S[B][I](y))}}e[x]=a,u.push(a),a++}}const g=n.clone();for(const v in n.attributes){const y=c[v];if(g.setAttribute(v,new y.constructor(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),v in l)for(let x=0;x<l[v].length;x++){const T=l[v][x];g.morphAttributes[v][x]=new T.constructor(T.array.slice(0,a*T.itemSize),T.itemSize,T.normalized)}}return g.setIndex(u),g}function R2(n,t,e,i,{bulge:s=0,dish:r=0,grain:a=!1}={}){const o=[n/2,t/2,e/2],c=Math.min(i,...o),l=[],u=[],h=[],f=[],d=[[2,1,0,1],[2,1,0,-1],[0,2,1,1],[0,2,1,-1],[0,1,2,1],[0,1,2,-1]],p=m=>a?[-o[m],-o[m]+c,0,o[m]-c,o[m]]:[-o[m],-o[m]+c*.3,-o[m]+c,0,o[m]-c,o[m]-c*.3,o[m]];for(const[m,g,v,y]of d){const x=p(m),T=p(g),E=l.length/3;for(let w=0;w<T.length;w++)for(let b=0;b<x.length;b++){const S=[0,0,0];S[m]=x[b],S[g]=T[w],S[v]=y*o[v];const M=S.map((I,k)=>Math.max(-o[k]+c,Math.min(o[k]-c,I))),A=new U(...S.map((I,k)=>I-M[k])).normalize(),N=M.map((I,k)=>I+A.getComponent(k)*c);if(v===1&&y===1){const I=N[0]/o[0],k=N[2]/o[2];N[1]+=s*Math.max(0,1-I*I)*Math.max(0,1-k*k)-r*Math.exp(-5*I*I-7*(k+.08)**2)}l.push(...N),u.push(...A.toArray());const P=o.indexOf(Math.max(...o));a?h.push(N[P]/.75+.5,N[P===m?g:m]/.18+.5):h.push(b/(x.length-1),w/(T.length-1))}for(let w=0;w<T.length-1;w++)for(let b=0;b<x.length-1;b++){const S=x.length,M=E+w*S+b,A=new U;A.setComponent(m,1);const N=new U;N.setComponent(g,1),A.cross(N).getComponent(v)*y>0?f.push(M,M+1,M+S+1,M,M+S+1,M+S):f.push(M,M+S+1,M+1,M,M+S,M+S+1)}}const _=new Qt;return _.setAttribute("position",new Ot(l,3)),_.setAttribute("normal",new Ot(u,3)),_.setAttribute("uv",new Ot(h,2)),_.setIndex(f),(s||r)&&_.computeVertexNormals(),_}function C2(n,t,e=28,i=6,s=!1){const r=new Ca(n.map(a=>new U(...a)),s,"centripetal");return new Mr(r,e,t,i,s)}function lo(n,t,e,i=0,s=.05){const r=[];for(const[a,o,c]of[[n/2-s,t/2-s,0],[-n/2+s,t/2-s,Math.PI/2],[-n/2+s,-t/2+s,Math.PI],[n/2-s,-t/2+s,Math.PI*1.5]])for(let l=0;l<=4;l++){const u=c+l/4*Math.PI/2;r.push([a+Math.cos(u)*s,e,i+o+Math.sin(u)*s])}return r}function nl(n,t=!1){const e=t?[[0,0,-.338,.033],[.1,.1,-.333,.036],[.2,.21,-.314,.042],[.3,.35,-.3,.052]]:[[0,0,.326,.038],[.1,.085,.319,.037],[.2,.18,.295,.043],[.3,.35,.285,.057]],i=[],s=[],r=[],a=[[-1,-.76],[-.76,-1],[.76,-1],[1,-.76],[1,.76],[.76,1],[-.76,1],[-1,.76]];for(let c=0;c<e.length;c++){const[,l,u,h]=e[c],f=n*(.313+(t?0:.018*(1-c/3)));for(let d=0;d<8;d++)if(i.push(f+a[d][0]*h/2,l,u+a[d][1]*h/2),s.push(l/.65,d/8),c<3){const p=c*8+d,_=c*8+(d+1)%8;r.push(p,_+8,_,p,p+8,_+8)}}for(let c=1;c<7;c++)r.push(0,c,c+1,24,24+c+1,24+c);const o=new Qt;return o.setAttribute("position",new Ot(i,3)),o.setAttribute("uv",new Ot(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function P2(n){const t=[[.74,.318,-.3,-.12,.06],[.84,.345,-.327,-.06,.063],[1.02,.365,-.352,-.105,.061],[1.18,.341,-.373,-.205,.05],[1.225,.314,-.377,-.287,.025]],e=[],i=[],s=[];for(let a=0;a<t.length;a++){const[o,c,l,u,h]=t[a];for(let f=0;f<12;f++){const d=f/12*Math.PI*2;if(e.push(n*(c+Math.cos(d)*h/2),o,(l+u)/2+Math.sin(d)*(u-l)/2),i.push(f/12,a/(t.length-1)),a<t.length-1){const p=a*12+f,_=a*12+(f+1)%12;n>0?s.push(p,p+12,_,_,p+12,_+12):s.push(p,_,p+12,_,_+12,p+12)}}}for(let a=1;a<11;a++)n>0?s.push(0,a,a+1,48,48+a+1,48+a):s.push(0,a+1,a,48,48+a,48+a+1);const r=new Qt;return r.setAttribute("position",new Ot(e,3)),r.setAttribute("uv",new Ot(i,2)),r.setIndex(s),r.computeVertexNormals(),r}const ze=256,uo=n=>Math.max(0,Math.min(255,Math.round(n)));function ls(n,t,e){let i=Math.imul(n+131*e,374761393)^Math.imul(t+e,668265263);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967295}function Js(n,t,e){const i=Math.floor(n),s=Math.floor(t),r=n-i,a=t-s,o=r*r*(3-2*r),c=a*a*(3-2*a);return(ls(i,s,e)*(1-o)+ls(i+1,s,e)*o)*(1-c)+(ls(i,s+1,e)*(1-o)+ls(i+1,s+1,e)*o)*c}function Qs(n,t,e){const i=new Uint8Array(ze*ze*4);for(let r=0;r<ze;r++)for(let a=0;a<ze;a++){const o=t(a,r),c=(r*ze+a)*4;i[c]=uo(o[0]),i[c+1]=uo(o[1]),i[c+2]=uo(o[2]),i[c+3]=255}const s=new Ss(i,ze,ze,Ue);return s.name=`reading-chairs/${n}`,s.colorSpace=e?he:an,s.wrapS=s.wrapT=wn,s.magFilter=Pe,s.minFilter=He,s.generateMipmaps=!0,s.needsUpdate=!0,s.addEventListener("dispose",()=>{s.image=null}),s}function I2(){const n=Qs("leather-patina",(a,o)=>{const c=a/(ze-1),l=o/(ze-1),u=Math.exp(-Math.min(c,1-c,l,1-l)*20),h=Js(a/48,o/48,17)-.5,f=Js(a/2,o/2,71)-.5,d=207+h*17+f*9+u*18;return[d+5,d+1,d-5]},!0),t=Qs("leather-physical",(a,o)=>{const c=Js(a/2.2,o/2.2,71),l=ls(a,o,41),u=Math.sin(o*.16+Js(a/31,o/40,24)*6)*.04;return[117+c*28+l*9+u*30,180+c*27,128]},!1),e=Qs("walnut-grain",(a,o)=>{const c=a/ze*Math.PI*2,l=o/ze*Math.PI*2,u=l*18+.7*Math.sin(c)+.18*Math.sin(3*c+l),h=Math.sin(u)*5+Math.sin(u*2+.2)*2,f=Math.pow(.5+.5*Math.sin(l*77+.18*Math.sin(2*c)),12)*7,d=Math.sin(l*3+.3*Math.sin(c))*5;return[101+h+d-f,66+h*.68+d*.6-f,41+h*.44+d*.4-f]},!0),i=Qs("walnut-physical",(a,o)=>{const c=a/ze*Math.PI*2,l=o/ze*Math.PI*2,u=Math.sin(l*77+.18*Math.sin(c*2));return[125+u*7,181+u*8,128]},!1),s=(a,o)=>{const c=new Te({name:`reading-chairs/${a}`,color:o,map:n,bumpMap:t,bumpScale:.0012,roughnessMap:t,roughness:.86,metalness:0});return c.userData.readingChair=!0,c},r={oxblood:s("oxblood",8736836),tobacco:s("tobacco",10056782),wood:new Te({name:"reading-chairs/walnut",map:e,bumpMap:i,bumpScale:65e-5,roughnessMap:i,roughness:.78}),thread:new Te({name:"reading-chairs/waxed-thread",color:9204308,roughness:.94}),brass:new Te({name:"reading-chairs/aged-brass",color:8479549,metalness:.72,roughness:.57})};for(const a of Object.values(r))a.userData.readingChair=!0;return r.thread.userData.noShadow=!0,r.brass.userData.noShadow=!0,r}const ho=new WeakMap;function L2(n,t="oxblood"){if(!["oxblood","tobacco"].includes(t))throw new Error(`Unknown reading chair finish: ${t}`);let e=ho.get(n.b);if(!e){e=I2(),ho.set(n.b,e);for(const l of Object.values(e))l.addEventListener("dispose",()=>ho.delete(n.b))}const i=e[t],s=(l,u,h=0,f=0,d=0,p=0,_=0,m=0)=>n.geo(l,u,h,f,d,p,_,m),r=(l,u,h,f,d={},p=[0,0,0])=>s(l,R2(...u,h,d),...f,...p),a=(l,u,h,f=28,d=!1)=>s(l,C2(u,h,f,6,d));for(const l of[-1,1])s(e.wood,nl(l)),s(e.wood,nl(l,!0)),r(e.wood,[.06,.102,.635],.008,[l*.315,.339,-.005],{grain:!0});r(e.wood,[.63,.11,.065],.009,[0,.34,.286],{grain:!0}),r(e.wood,[.63,.092,.055],.007,[0,.335,-.304],{grain:!0}),r(i,[.625,.092,.6],.023,[0,.39,-.005]),r(i,[.619,.128,.564],.037,[0,.468,.023],{bulge:.011,dish:.014}),a(i,lo(.62,.565,.482,.023,.037),.0033,48,!0),a(i,lo(.611,.556,.428,.023,.037),.0024,48,!0);for(let l=0;l<31;l++){const u=-.259+l*.0172,h=new Gn(85e-5,85e-5,.006,4);s(e.thread,h,u,.462,.3054,0,0,Math.PI/2)}r(i,[.674,.72,.112],.046,[0,.854,-.321],{},[-.1,0,0]),r(i,[.559,.555,.075],.035,[0,.877,-.251],{},[-.1,0,0]),r(i,[.526,.116,.099],.043,[0,.589,-.228],{},[-.1,0,0]),a(i,[[-.242,.629,-.184],[-.27,.671,-.184],[-.27,1.082,-.226],[-.229,1.143,-.237],[0,1.151,-.238],[.229,1.143,-.237],[.27,1.082,-.226],[.27,.671,-.184],[.242,.629,-.184],[0,.619,-.184]],.0028,64,!0);const c=[[-.322,.365,-.339],[-.342,.75,-.36],[-.341,1.14,-.392],[-.302,1.203,-.394],[-.18,1.221,-.394],[0,1.227,-.394],[.18,1.221,-.394],[.302,1.203,-.394],[.341,1.14,-.392],[.342,.75,-.36],[.322,.365,-.339]];a(e.wood,c,.014,72);for(const l of[-1,1]){s(i,P2(l)),r(e.wood,[.039,.316,.052],.007,[l*.355,.523,.251],{grain:!0},[0,0,l*-.038]),r(e.wood,[.04,.328,.047],.007,[l*.347,.525,-.208],{grain:!0},[-.08,0,0]),r(e.wood,[.112,.048,.586],.019,[l*.363,.684,.012],{grain:!0},[.035,0,0]),r(i,[.131,.1,.589],.043,[l*.363,.743,.018],{},[.035,0,0]);const u=lo(.132,.59,.743,.018,.043).map(([h,f,d])=>[h+l*.363,f-(d-.018)*.035,d]);a(i,u,.0026,40,!0),a(i,[[l*.318,.751,-.123],[l*.345,.843,-.063],[l*.365,1.021,-.108],[l*.341,1.18,-.208],[l*.314,1.224,-.287]],.003,32);for(let h=0;h<7;h++){const f=new ri(.0035,6,4);f.scale(.42,1,1),s(e.brass,f,l*.314,.398,-.225+h*.071)}for(const h of[.26,-.28]){const f=new Gn(.0045,.0045,.0015,8);s(e.wood,f,l*.346,.34,h,0,0,Math.PI/2)}}}const u0=Object.freeze({origin:Object.freeze([-5.6,4.2,-8.85]),size:Object.freeze([1.4,.8,.7]),worktopY:.785,paper:Object.freeze({center:Object.freeze([.05,.787,.1]),yaw:.2}),notes:Object.freeze({x0:-.29,x1:-.13,z0:-.025,z1:.265,y:.7848}),legacyRandomDraws:20});function D2(n){let t=n>>>0;return()=>(t=Math.imul(1664525,t)+1013904223|0,(t>>>0)/4294967296)}function il(n,t,e,i,s=!1){const r=new Ss(n,t,e,Ue);return r.name=i,r.wrapS=r.wrapT=wn,r.magFilter=Pe,r.minFilter=He,r.generateMipmaps=!0,s&&(r.colorSpace=he),r.needsUpdate=!0,r}function U2(){const n=D2(1463897166),t=512,e=256,i=new Uint8Array(t*e*4);for(let c=0;c<e;c++)for(let l=0;l<t;l++){const u=l/t*Math.PI*2,h=c/e*Math.PI*2,f=.32*Math.sin(u)+.1*Math.sin(2*u+3*h),d=Math.sin(h*27+f*4),p=Math.pow(Math.max(0,Math.sin(h*81+f*8)),9),_=Math.sin(h*3+.6*Math.sin(u)),m=1+.095*d-.065*p+.11*_+(n()-.5)*.025,g=(c*t+l)*4;i[g]=Math.round(119*m),i[g+1]=Math.round(75*m),i[g+2]=Math.round(43*m),i[g+3]=255}const s=il(i,t,e,"Desk • quarter-cut walnut",!0),r=new Uint8Array(128*128*4);for(let c=0;c<r.length;c+=4){const l=Math.round(124+(n()-.5)*25);r[c]=r[c+1]=r[c+2]=l,r[c+3]=255}const a=il(r,128,128,"Desk • fine hide grain");a.repeat.set(6,2);const o=(c,l)=>{const u=new Te(l);return u.name=`Desk • ${c}`,u.userData.upstairsDesk=!0,u};return{walnut:o("walnut",{map:s,bumpMap:s,bumpScale:3e-4,roughness:.43}),recess:o("recessed walnut",{map:s,color:10652791,bumpMap:s,bumpScale:25e-5,roughness:.53}),brass:o("aged brass",{color:12163936,metalness:.83,roughness:.34}),leather:o("bottle-green hide",{color:2704442,bumpMap:a,bumpScale:16e-5,roughness:.74}),ink:o("ebonite and ink",{color:1056288,metalness:.13,roughness:.26}),cedar:o("endgrain and linen",{color:12953717,roughness:.8})}}function N2(n,t,e,i=.002){const s=[n/2,t/2,e/2],r=Math.min(i,...s.map(l=>l*.45)),a=[];function o(l,u){const h=new U(...l[0]),f=new U(...l[1]),d=new U(...l[2]);f.sub(h).cross(d.sub(h)).dot(new U(...u))<0&&l.reverse();for(let p=1;p<l.length-1;p++)a.push(...l[0],...l[p],...l[p+1])}for(let l=0;l<3;l++)for(const u of[-1,1]){const h=(l+1)%3,f=(l+2)%3,d=[0,0,0];d[l]=u,o([[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,_])=>{const m=[0,0,0];return m[l]=u*s[l],m[h]=p*(s[h]-r),m[f]=_*(s[f]-r),m}),d)}for(let l=0;l<3;l++)for(let u=l+1;u<3;u++){const h=3-l-u;for(const f of[-1,1])for(const d of[-1,1]){const p=[0,0,0];p[l]=f,p[u]=d,o([[0,-1],[0,1],[1,1],[1,-1]].map(([_,m])=>{const g=[0,0,0];return g[l]=f*(s[l]-_*r),g[u]=d*(s[u]-(1-_)*r),g[h]=m*(s[h]-r),g}),p)}}for(const l of[-1,1])for(const u of[-1,1])for(const h of[-1,1]){const f=[l,u,h];o([0,1,2].map(d=>s.map((p,_)=>f[_]*(p-(_===d?0:r)))),f)}const c=new Qt;return c.setAttribute("position",new Ot(a,3)),c.computeVertexNormals(),c}function F2(n,t,e){const i=n.attributes.position,s=n.attributes.normal,r=new Float32Array(i.count*2),a={x:0,y:1,z:2}[t];for(let o=0;o<i.count;o++){const c=[i.getX(o),i.getY(o),i.getZ(o)],l=[Math.abs(s.getX(o)),Math.abs(s.getY(o)),Math.abs(s.getZ(o))],u=l.indexOf(Math.max(...l)),h=u===a?(a+1)%3:a,f=[0,1,2].find(d=>d!==h&&d!==u);r[o*2]=c[h]/.7+e,r[o*2+1]=c[f]/.2+e*.37}return n.setAttribute("uv",new pe(r,2)),n}function O2(n){const t=n.attributes.position,e=[],i=new U,s=new U,r=new U;for(let o=0;o<t.count;o+=3)i.fromBufferAttribute(t,o),s.fromBufferAttribute(t,o+1),r.fromBufferAttribute(t,o+2),s.sub(i).cross(r.sub(i)).lengthSq()>4e-24&&e.push(o,o+1,o+2);if(e.length===t.count)return n;const a=new Qt;for(const[o,c]of Object.entries(n.attributes)){const l=new Float32Array(e.length*c.itemSize);for(let u=0;u<e.length;u++)for(let h=0;h<c.itemSize;h++)l[u*c.itemSize+h]=c.array[e[u]*c.itemSize+h];a.setAttribute(o,new pe(l,c.itemSize))}return n.dispose(),a}function B2(){const n=U2(),t=new Map,e=[];let i=0;function s(f,d,p,_,m,g=[0,0,0],v="x",y=f){let x=d;x.index&&(x=d.toNonIndexed(),d.dispose()),x=O2(x),x.clearGroups(),F2(x,v,i+=.137);const T=new jt().makeRotationFromEuler(new Ie(...g));T.setPosition(p,_,m),x.applyMatrix4(T),x.computeBoundingBox(),e.push({name:y,material:f,triangles:x.attributes.position.count/3,bounds:[x.boundingBox.min.toArray(),x.boundingBox.max.toArray()]}),t.has(f)||t.set(f,[]),t.get(f).push(x)}const r=(f,d,p,_,m,g,v,y=.002,x="x",T=f,E)=>s(f,N2(d,p,_,y),m,g,v,E,x,T),a=(f,d,p,_,m,g,v,y=16,x,T=f)=>s(f,new Gn(d,p,_,y),m,g,v,x,"y",T),o=(f,d,p,_,m,g,v,y=f,x=Math.PI*2)=>s(f,new Hi(d,p,5,20,x),_,m,g,v,"x",y);for(const f of[-1,1]){const d=f*.5;r("recess",.344,.642,.602,d,.379,-.005,.003,"y","pedestal carcass"),r("walnut",.356,.032,.622,d,.026,-.004,.003,"x","plinth foot"),r("walnut",.348,.02,.614,d,.05,-.004,.002,"x","plinth bevel"),r("walnut",.352,.029,.626,d,.7055,-.004,.002,"x","pedestal crown rail");for(const p of[-1,1]){r("walnut",.024,.622,.027,d+p*.164,.376,.305,.0015,"y","front stile");const _=d+p*.176;r("walnut",.006,.474,.432,_,.368,-.005,.001,"y","side field");for(const m of[-.267,.257])r("walnut",.01,.602,.028,_,.373,m,.0015,"y","side upright");for(const m of[.085,.66])r("walnut",.01,.027,.55,_,m,-.005,.0015,"z","side crossrail")}for(let p=0;p<3;p++){const _=.16+p*.22;r("walnut",.302,.191,.019,d,_,.3185,.002,"x","drawer cockbead"),r("recess",.285,.174,.005,d,_,.33,.001,"x","drawer inset"),r("walnut",.271,.16,.003,d,_,.334,.001,"x","drawer figured field");for(const m of[-.034,.034])a("brass",.009,.01,.003,d+m,_+.012,.338,12,[Math.PI/2,0,0],"handle rosette"),a("brass",.003,.003,.009,d+m,_+.012,.345,8,[Math.PI/2,0,0],"handle pivot"),r("ink",.005,8e-4,5e-4,d+m,_+.012,.3496,1e-4,"x","screw slot");o("brass",.034,.0025,d,_+.012,.35,[0,0,Math.PI],"hanging bail",Math.PI)}}r("recess",.64,.103,.578,0,.674,-.017,.003,"x","pencil drawer case"),r("walnut",.594,.086,.022,0,.672,.284,.002,"x","pencil drawer front"),r("recess",.558,.054,.004,0,.672,.297,.001,"x","pencil drawer inset");for(const f of[-.024,.024])a("brass",.004,.005,.015,f,.66,.305,10,[Math.PI/2,0,0],"pencil pull post");a("brass",.003,.003,.054,0,.66,.312,12,[0,0,Math.PI/2],"pencil pull bar"),a("brass",.007,.007,.002,0,.69,.301,14,[Math.PI/2,0,0],"key escutcheon"),r("ink",.002,.005,6e-4,0,.69,.3022,1e-4,"y","keyhole"),r("recess",1.356,.012,.656,0,.719,0,.002,"x","top shadow quirk"),r("walnut",1.378,.012,.678,0,.731,0,.003,"x","lower thumb bead"),r("walnut",1.4,.045,.7,0,.7595,0,.003,"x","desktop core"),r("walnut",1.4,.003,.27,0,.7835,-.215,.001,"x","rear writing rail"),r("walnut",1.4,.003,.06,0,.7835,.32,.001,"x","front writing rail");for(const f of[-1,1])r("walnut",.36,.003,.37,f*.52,.7835,.105,.001,"z","side writing rail");r("leather",.68,.0028,.37,0,.7834,.105,5e-4,"x","inset leather writing pad");for(const f of[-.078,.288])r("brass",.675,55e-5,.0012,0,.78465,f,15e-5,"x","pad edge fillet");for(const f of[-.338,.338])r("brass",.0012,55e-5,.365,f,.78465,.105,15e-5,"z","pad edge fillet");for(const f of[-.061,.271])r("ink",.641,25e-5,7e-4,0,.78486,f,5e-5,"x","blind pad rule");for(const f of[-.321,.321])r("ink",7e-4,25e-5,.332,f,.78486,.105,5e-5,"z","blind pad rule");a("brass",.031,.033,.0025,-.15,.78625,-.15,20,void 0,"inkwell coaster");const c=[[0,0],[.025,0],[.029,.006],[.028,.027],[.019,.036],[.019,.044],[.0125,.044],[.0125,.031],[0,.031]];s("ink",new ws(c.map(([f,d])=>new It(f,d)),24),-.15,.7875,-.15,void 0,"y","hollow inkwell"),o("brass",.016,.0015,-.15,.8315,-.15,[Math.PI/2,0,0],"inkwell neck band"),a("ink",.0124,.0124,6e-4,-.15,.823,-.15,20,void 0,"recessed ink meniscus"),a("brass",.02,.021,.006,-.087,.788,-.178,20,void 0,"loose inkwell lid"),a("ink",.0155,.0155,.001,-.087,.7913,-.178,20,void 0,"lid inset"),r("recess",.282,.009,.074,.1,.7895,-.253,.003,"x","pen tray base"),r("leather",.262,.001,.054,.1,.7945,-.253,.001,"x","pen tray lining");for(const f of[-.286,-.22])r("walnut",.282,.008,.008,.1,.798,f,.002,"x","pen tray rim");for(const f of[-.037,.237])r("walnut",.008,.008,.058,f,.798,-.253,.002,"z","pen tray end");a("walnut",.0025,.004,.114,.122,.799,-.265,12,[0,0,-Math.PI/2],"dip pen shaft"),a("ink",.004,.0032,.03,.05,.799,-.265,12,[0,0,Math.PI/2],"dip pen grip"),a("brass",.0042,.0042,.006,.031,.799,-.265,12,[0,0,Math.PI/2],"dip pen collar");const l=new Qt,u=[.004,0,0,.027,0,-.004,.027,.0024,0,.004,0,0,.027,.0024,0,.027,0,.004,.004,0,0,.027,0,.004,.027,0,-.004,.027,0,-.004,.027,0,.004,.027,.0024,0];for(let f=0;f<u.length;f+=9)for(let d=0;d<3;d++)[u[f+3+d],u[f+6+d]]=[u[f+6+d],u[f+3+d]];l.setAttribute("position",new Ot(u,3)),l.computeVertexNormals(),s("brass",l,0,.799,-.265,void 0,"x","split brass nib"),r("ink",.013,35e-5,45e-5,.019,.801,-.265,1e-4,"x","nib slit"),a("ink",7e-4,7e-4,3e-4,.024,.8013,-.265,8,void 0,"nib breather"),a("walnut",.0031,.0031,.133,.116,.7981,-.24,6,[0,0,Math.PI/2],"hexagonal pencil"),a("cedar",0,.0031,.017,.041,.7981,-.24,6,[0,0,Math.PI/2],"sharpened cedar"),a("ink",0,9e-4,.004,.0315,.7981,-.24,6,[0,0,Math.PI/2],"graphite point"),a("brass",.0032,.0032,.004,.1845,.7981,-.24,8,[0,0,Math.PI/2],"pencil end ferrule");const h=new bn;h.name="Upstairs writing desk • walnut and brass";for(const[f,d]of t){const p=br(d,!1),_=A2(p,1e-6);p.dispose();for(const g of d)g.dispose();_.computeBoundingBox(),_.computeBoundingSphere();const m=new Jt(_,n[f]);m.name=`Upstairs desk • ${f}`,m.castShadow=m.receiveShadow=!0,m.matrixAutoUpdate=!1,m.updateMatrix(),h.add(m)}return h.userData.parts=e,h.userData.spec=u0,h}function z2(n){const t=B2();for(let e=0;e<u0.legacyRandomDraws;e++)n.b.rand();for(const e of t.children)n.geo(e.material,e.geometry,0,0,0)}const hr=Object.freeze({center:Object.freeze([-.5,.008,1.9]),width:3.4,length:5.6,clothLength:5.4,fringeBundlesPerEnd:60,textureSize:Object.freeze([1024,2048]),detailSize:Object.freeze([512,1024])}),sl=n=>{let t=Math.imul(n^1530439581,73244475);return t=Math.imul(t^t>>>16,73244475),((t^t>>>16)>>>0)/4294967296};function h0(){const n=[],t=[],e=[];return{positions:n,uvs:t,indices:e,vertex(i,s,r,a,o){const c=n.length/3;return n.push(i,s,r),t.push(a,o),c},face(i,s,r){e.push(i,s,r)},quad(i,s,r,a){e.push(i,s,r,i,r,a)},finish(i){const s=new Qt;return s.name=i,s.setAttribute("position",new Ot(n,3)),s.setAttribute("uv",new Ot(t,2)),s.setIndex(e),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),s}}}function rl(n,t){const e=[-n,-n+.009,-n+.024,-n+.055];for(let i=1;i<t;i++)e.push(-n+.055+(2*n-.11)*i/t);return e.push(n-.055,n-.024,n-.009,n),e}function k2(){const n=h0(),t=hr.width/2,e=hr.clothLength/2,i=rl(t,16),s=rl(e,26),r=i.length,a=.034;for(const h of s)for(const f of i){const d=Math.max(0,Math.abs(h)-(e-a)),p=t-a+Math.sqrt(Math.max(0,a*a-d*d)),_=f*p/t,m=Math.min(t-Math.abs(f),e-Math.abs(h)),g=Math.min(1,m/.024),v=6e-4*Math.sin(_*2.4+.8)*Math.sin(h*1.9),y=3e-4+.0037*Math.sin(g*Math.PI/2)+v*g;n.vertex(_,y,h,(_+t)/(2*t),(h+e)/(2*e))}for(let h=0;h<s.length-1;h++)for(let f=0;f<r-1;f++){const d=h*r+f;n.quad(d,d+r,d+r+1,d+1)}const o=[];for(let h=0;h<r;h++)o.push(h);for(let h=1;h<s.length;h++)o.push(h*r+r-1);for(let h=r-2;h>=0;h--)o.push((s.length-1)*r+h);for(let h=s.length-2;h>0;h--)o.push(h*r);const c=[],l=[];for(const h of o){const[f,d,p]=n.positions.slice(h*3,h*3+3);c.push(n.vertex(f,d,p,n.uvs[h*2],n.uvs[h*2+1])),l.push(n.vertex(f*.999,-.005,p*.999,n.uvs[h*2],n.uvs[h*2+1]))}const u=n.vertex(0,-.005,0,.5,.5);for(let h=0;h<o.length;h++){const f=(h+1)%o.length;n.quad(c[h],c[f],l[f],l[h]),n.face(u,l[h],l[f])}return n.finish("Reading rug / soft bound cloth")}function G2(){const n=h0(),t=hr.fringeBundlesPerEnd;for(const e of[-1,1])for(let i=0;i<t;i++){const s=-1.59+i*3.18/(t-1),r=.074+sl(i+(e+1)*301)*.024,a=(sl(i*17+83)-.5)*.016;for(const o of[-1,1]){const c=s+o*.005,l=e*2.691,u=c+a+o*.003,h=e*(2.7+r-(o>0?.007:0)),f=.0054,d=.0019,p=n.vertex(c-f,-.003,l,0,0),_=n.vertex(c+f,-.003,l,1,0),m=n.vertex(c,6e-4,l,.5,0),g=n.vertex(u-d,-.0047,h,0,1),v=n.vertex(u+d,-.0047,h,1,1),y=n.vertex(u,-.0028,h,.5,1),x=[[p,g,y,m],[m,y,v,_],[_,v,g,p]];for(const T of x)e<0&&T.reverse(),n.quad(...T);e>0?(n.face(p,m,_),n.face(g,v,y)):(n.face(_,m,p),n.face(y,v,g))}}return n.finish("Reading rug / short split cotton fringe")}function H2(n=(t,e)=>new m2().load(t,e)){const t=new Te({name:"Reading rug / dyed wool",color:8865339,bumpScale:.0013,roughness:1,metalness:0}),e=n(new URL("/library/assets/rug-albedo-DJLqXdw0.png",import.meta.url).href,()=>t.color.setHex(16777215)),i=n(new URL("/library/assets/rug-detail-BtSd2KDf.png",import.meta.url).href);e.name="Reading rug / madder & indigo wool",i.name="Reading rug / linear height R, roughness G",e.colorSpace=he,i.colorSpace=an;for(const r of[e,i])r.wrapS=r.wrapT=cn,r.minFilter=He,r.magFilter=Pe,r.generateMipmaps=!0,r.anisotropy=4;t.map=e,t.bumpMap=t.roughnessMap=i;const s=new Te({name:"Reading rug / unbleached warp",color:12363910,roughness:.96,metalness:0});return t.userData.noShadow=s.userData.noShadow=!0,{cloth:t,fringe:s}}function V2(n,t=H2()){const[e,i,s]=hr.center;n.geo(t.cloth,k2(),e,i,s),n.geo(t.fringe,G2(),e,i,s)}const ol=[[[[-59.572,-80.04],[-59.866,-80.55],[-60.16,-81],[-62.255,-80.863],[-64.488,-80.922],[-65.742,-80.589],[-65.742,-80.55],[-66.29,-80.256],[-64.038,-80.295],[-61.883,-80.393],[-61.139,-79.981],[-60.61,-79.629],[-59.572,-80.04]]],[[[-159.208,-79.497],[-161.128,-79.634],[-162.44,-79.281],[-163.027,-78.929],[-163.067,-78.87],[-163.713,-78.596],[-163.713,-78.596],[-163.106,-78.223],[-161.245,-78.38],[-160.246,-78.694],[-159.482,-79.046],[-159.208,-79.497]]],[[[-45.155,-78.047],[-43.921,-78.478],[-43.49,-79.086],[-43.372,-79.517],[-43.333,-80.026],[-44.881,-80.34],[-46.506,-80.594],[-48.386,-80.829],[-50.482,-81.025],[-52.852,-80.967],[-54.164,-80.634],[-53.988,-80.222],[-51.853,-79.948],[-50.991,-79.615],[-50.365,-79.183],[-49.914,-78.811],[-49.307,-78.459],[-48.661,-78.047],[-48.661,-78.047],[-48.151,-78.047],[-46.663,-77.831],[-45.155,-78.047]]],[[[-121.212,-73.501],[-119.919,-73.658],[-118.724,-73.481],[-119.292,-73.834],[-120.232,-74.089],[-121.623,-74.01],[-122.622,-73.658],[-122.622,-73.658],[-122.406,-73.325],[-121.212,-73.501]]],[[[-125.56,-73.481],[-124.032,-73.873],[-124.619,-73.834],[-125.912,-73.736],[-127.283,-73.462],[-127.283,-73.462],[-126.558,-73.246],[-125.56,-73.481]]],[[[-98.982,-71.933],[-97.885,-72.071],[-96.788,-71.953],[-96.2,-72.521],[-96.984,-72.443],[-98.198,-72.482],[-99.432,-72.443],[-100.783,-72.502],[-101.802,-72.306],[-102.331,-71.894],[-102.331,-71.894],[-101.704,-71.718],[-100.431,-71.855],[-98.982,-71.933]]],[[[-68.451,-70.956],[-68.334,-71.406],[-68.51,-71.798],[-68.784,-72.171],[-69.959,-72.308],[-71.076,-72.504],[-72.388,-72.484],[-71.898,-72.092],[-73.074,-72.229],[-74.19,-72.367],[-74.954,-72.073],[-75.013,-71.661],[-73.916,-71.269],[-73.916,-71.269],[-73.23,-71.152],[-72.075,-71.191],[-71.781,-70.681],[-71.722,-70.309],[-71.742,-69.506],[-71.174,-69.035],[-70.253,-68.879],[-69.724,-69.251],[-69.489,-69.623],[-69.059,-70.074],[-68.726,-70.505],[-68.451,-70.956]]],[[[-58.614,-64.152],[-59.045,-64.368],[-59.789,-64.211],[-60.612,-64.309],[-61.297,-64.544],[-62.022,-64.799],[-62.512,-65.093],[-62.649,-65.485],[-62.59,-65.857],[-62.12,-66.19],[-62.806,-66.426],[-63.746,-66.504],[-64.294,-66.837],[-64.882,-67.15],[-65.508,-67.582],[-65.665,-67.954],[-65.313,-68.365],[-64.784,-68.679],[-63.961,-68.914],[-63.197,-69.228],[-62.786,-69.619],[-62.571,-69.992],[-62.277,-70.384],[-61.807,-70.717],[-61.513,-71.089],[-61.376,-72.01],[-61.082,-72.382],[-61.004,-72.774],[-60.69,-73.166],[-60.827,-73.695],[-61.376,-74.107],[-61.963,-74.44],[-63.295,-74.577],[-63.746,-74.93],[-64.353,-75.263],[-65.861,-75.635],[-67.193,-75.792],[-68.446,-76.007],[-69.798,-76.223],[-70.601,-76.634],[-72.207,-76.674],[-73.97,-76.634],[-75.556,-76.713],[-77.24,-76.713],[-76.927,-77.105],[-75.399,-77.281],[-74.283,-77.555],[-73.656,-77.908],[-74.773,-78.222],[-76.496,-78.124],[-77.926,-78.378],[-77.985,-78.79],[-78.024,-79.182],[-76.849,-79.515],[-76.633,-79.887],[-75.36,-80.26],[-73.245,-80.416],[-71.443,-80.691],[-70.013,-81.004],[-68.192,-81.318],[-65.704,-81.474],[-63.256,-81.749],[-61.552,-82.043],[-59.691,-82.376],[-58.712,-82.846],[-58.222,-83.218],[-57.008,-82.866],[-55.363,-82.572],[-53.62,-82.258],[-51.544,-82.004],[-49.761,-81.729],[-47.274,-81.71],[-44.826,-81.847],[-42.808,-82.082],[-42.162,-81.651],[-40.771,-81.357],[-38.245,-81.337],[-36.267,-81.122],[-34.386,-80.906],[-32.31,-80.769],[-30.097,-80.593],[-28.55,-80.338],[-29.255,-79.985],[-29.686,-79.633],[-29.686,-79.26],[-31.625,-79.299],[-33.681,-79.456],[-35.64,-79.456],[-35.914,-79.084],[-35.777,-78.339],[-35.327,-78.124],[-33.897,-77.889],[-32.212,-77.653],[-30.998,-77.36],[-29.784,-77.066],[-28.883,-76.674],[-27.512,-76.497],[-26.16,-76.36],[-25.475,-76.282],[-23.928,-76.243],[-22.459,-76.105],[-21.225,-75.909],[-20.01,-75.674],[-18.914,-75.439],[-17.523,-75.126],[-16.642,-74.793],[-15.701,-74.499],[-15.408,-74.107],[-16.465,-73.872],[-16.113,-73.46],[-15.447,-73.147],[-14.409,-72.951],[-13.312,-72.715],[-12.294,-72.402],[-11.51,-72.01],[-11.02,-71.54],[-10.296,-71.265],[-9.101,-71.324],[-8.611,-71.657],[-7.417,-71.697],[-7.377,-71.324],[-6.868,-70.932],[-5.791,-71.03],[-5.536,-71.403],[-4.342,-71.461],[-3.049,-71.285],[-1.795,-71.167],[-.659,-71.226],[-.229,-71.638],[.868,-71.305],[1.887,-71.128],[3.023,-70.991],[4.139,-70.854],[5.158,-70.619],[6.274,-70.462],[7.136,-70.247],[7.743,-69.894],[8.487,-70.149],[9.525,-70.011],[10.25,-70.482],[10.818,-70.834],[11.954,-70.638],[12.404,-70.247],[13.423,-69.972],[14.735,-70.031],[15.127,-70.403],[15.949,-70.031],[17.027,-69.913],[18.202,-69.874],[19.259,-69.894],[20.376,-70.011],[21.453,-70.07],[21.923,-70.403],[22.569,-70.697],[23.666,-70.521],[24.841,-70.482],[25.977,-70.482],[27.094,-70.462],[28.093,-70.325],[29.15,-70.207],[30.032,-69.933],[30.972,-69.757],[31.99,-69.659],[32.754,-69.384],[33.302,-68.836],[33.87,-68.503],[34.908,-68.659],[35.3,-69.012],[36.162,-69.247],[37.2,-69.169],[37.905,-69.521],[38.649,-69.776],[39.668,-69.541],[40.02,-69.11],[40.921,-68.934],[41.959,-68.601],[42.939,-68.463],[44.114,-68.267],[44.897,-68.052],[45.72,-67.817],[46.503,-67.601],[47.443,-67.719],[48.344,-67.366],[48.991,-67.092],[49.931,-67.111],[50.753,-66.876],[50.949,-66.523],[51.792,-66.249],[52.614,-66.053],[53.613,-65.896],[54.534,-65.818],[55.415,-65.877],[56.355,-65.975],[57.158,-66.249],[57.256,-66.68],[58.137,-67.013],[58.745,-67.288],[59.939,-67.405],[60.605,-67.68],[61.428,-67.954],[62.387,-68.013],[63.19,-67.817],[64.052,-67.405],[64.992,-67.621],[65.972,-67.738],[66.912,-67.856],[67.891,-67.934],[68.89,-67.934],[69.713,-68.973],[69.673,-69.228],[69.556,-69.678],[68.596,-69.933],[67.813,-70.305],[67.95,-70.697],[69.066,-70.678],[68.929,-71.069],[68.42,-71.442],[67.95,-71.853],[68.714,-72.167],[69.869,-72.265],[71.025,-72.088],[71.573,-71.697],[71.906,-71.324],[72.455,-71.011],[73.081,-70.717],[73.336,-70.364],[73.865,-69.874],[74.492,-69.776],[75.628,-69.737],[76.626,-69.619],[77.645,-69.463],[78.135,-69.071],[78.428,-68.698],[79.114,-68.326],[80.093,-68.072],[80.935,-67.876],[81.484,-67.542],[82.052,-67.366],[82.776,-67.209],[83.775,-67.307],[84.676,-67.209],[85.656,-67.092],[86.752,-67.15],[87.477,-66.876],[87.986,-66.21],[88.358,-66.484],[88.828,-66.955],[89.671,-67.15],[90.63,-67.229],[91.59,-67.111],[92.609,-67.19],[93.549,-67.209],[94.175,-67.111],[95.018,-67.17],[95.781,-67.386],[96.682,-67.249],[97.76,-67.249],[98.68,-67.111],[99.718,-67.249],[100.384,-66.915],[100.893,-66.582],[101.579,-66.308],[102.832,-65.563],[103.479,-65.7],[104.243,-65.975],[104.908,-66.328],[106.182,-66.935],[107.161,-66.955],[108.081,-66.955],[109.159,-66.837],[110.236,-66.7],[111.058,-66.426],[111.744,-66.132],[112.86,-66.092],[113.605,-65.877],[114.388,-66.073],[114.897,-66.386],[115.602,-66.7],[116.699,-66.661],[117.385,-66.915],[118.579,-67.17],[119.833,-67.268],[120.871,-67.19],[121.654,-66.876],[122.32,-66.563],[123.221,-66.484],[124.122,-66.621],[125.16,-66.719],[126.1,-66.563],[127.001,-66.563],[127.883,-66.661],[128.803,-66.759],[129.704,-66.582],[130.781,-66.426],[131.8,-66.386],[132.936,-66.386],[133.856,-66.288],[134.757,-66.21],[135.032,-65.72],[135.071,-65.309],[135.697,-65.583],[135.874,-66.034],[136.207,-66.445],[136.618,-66.778],[137.46,-66.955],[138.596,-66.896],[139.908,-66.876],[140.809,-66.817],[142.122,-66.817],[143.062,-66.798],[144.374,-66.837],[145.49,-66.915],[146.196,-67.229],[146,-67.601],[146.646,-67.895],[147.723,-68.13],[148.84,-68.385],[150.132,-68.561],[151.484,-68.718],[152.502,-68.875],[153.638,-68.895],[154.285,-68.561],[155.166,-68.836],[155.93,-69.149],[156.811,-69.384],[158.026,-69.482],[159.181,-69.6],[159.671,-69.992],[160.807,-70.227],[161.57,-70.58],[162.687,-70.736],[163.842,-70.717],[164.92,-70.776],[166.114,-70.756],[167.309,-70.834],[168.426,-70.971],[169.464,-71.207],[170.502,-71.403],[171.207,-71.697],[171.089,-72.088],[170.56,-72.441],[170.11,-72.892],[169.757,-73.245],[169.287,-73.656],[167.975,-73.813],[167.387,-74.165],[166.095,-74.381],[165.644,-74.773],[164.959,-75.145],[164.234,-75.459],[163.823,-75.87],[163.568,-76.243],[163.47,-76.693],[163.49,-77.066],[164.058,-77.457],[164.273,-77.83],[164.743,-78.183],[166.604,-78.32],[166.996,-78.751],[165.194,-78.907],[163.666,-79.123],[161.766,-79.162],[160.924,-79.73],[160.748,-80.201],[160.317,-80.573],[159.788,-80.945],[161.12,-81.279],[161.629,-81.69],[162.491,-82.062],[163.705,-82.395],[165.096,-82.709],[166.604,-83.022],[168.896,-83.336],[169.405,-83.826],[172.284,-84.041],[172.477,-84.118],[173.224,-84.414],[175.986,-84.159],[178.277,-84.473],[180,-84.713],[180,-90],[-180,-90],[-180,-84.713],[-179.942,-84.721],[-179.059,-84.139],[-177.257,-84.453],[-177.141,-84.418],[-176.862,-84.334],[-176.524,-84.232],[-176.23,-84.143],[-176.085,-84.099],[-175.934,-84.102],[-175.83,-84.118],[-174.383,-84.534],[-173.117,-84.118],[-172.889,-84.061],[-169.951,-83.885],[-169,-84.118],[-168.53,-84.237],[-167.022,-84.57],[-164.182,-84.825],[-161.93,-85.139],[-158.071,-85.374],[-155.192,-85.1],[-150.942,-85.296],[-148.533,-85.609],[-145.889,-85.315],[-143.108,-85.041],[-142.892,-84.57],[-146.829,-84.531],[-150.061,-84.296],[-150.903,-83.904],[-153.586,-83.689],[-153.41,-83.238],[-153.038,-82.827],[-152.666,-82.454],[-152.862,-82.043],[-154.526,-81.768],[-155.29,-81.416],[-156.837,-81.102],[-154.409,-81.161],[-152.098,-81.004],[-150.648,-81.337],[-148.866,-81.043],[-147.221,-80.671],[-146.418,-80.338],[-146.77,-79.926],[-148.063,-79.652],[-149.532,-79.358],[-151.588,-79.299],[-153.39,-79.162],[-155.329,-79.064],[-155.976,-78.692],[-157.268,-78.378],[-158.052,-78.026],[-158.365,-76.889],[-157.875,-76.987],[-156.975,-77.301],[-155.329,-77.203],[-153.743,-77.066],[-152.92,-77.497],[-151.334,-77.399],[-150.002,-77.183],[-148.748,-76.909],[-147.612,-76.576],[-146.104,-76.478],[-146.144,-76.105],[-146.496,-75.733],[-146.202,-75.38],[-144.91,-75.204],[-144.322,-75.537],[-142.794,-75.341],[-141.639,-75.086],[-140.209,-75.067],[-138.858,-74.969],[-137.506,-74.734],[-136.429,-74.518],[-135.215,-74.303],[-134.431,-74.361],[-133.746,-74.44],[-132.257,-74.303],[-130.925,-74.479],[-129.554,-74.459],[-128.242,-74.322],[-126.891,-74.42],[-125.402,-74.518],[-124.011,-74.479],[-122.562,-74.499],[-121.074,-74.518],[-119.703,-74.479],[-118.684,-74.185],[-117.47,-74.028],[-116.216,-74.244],[-115.022,-74.068],[-113.944,-73.715],[-113.298,-74.028],[-112.945,-74.381],[-112.299,-74.714],[-111.261,-74.42],[-110.066,-74.793],[-108.715,-74.91],[-107.559,-75.184],[-106.149,-75.126],[-104.876,-74.949],[-103.368,-74.988],[-102.017,-75.126],[-100.646,-75.302],[-100.117,-74.871],[-100.763,-74.538],[-101.253,-74.185],[-102.545,-74.107],[-103.113,-73.734],[-103.329,-73.362],[-103.681,-72.618],[-102.917,-72.755],[-101.605,-72.813],[-100.313,-72.755],[-99.137,-72.911],[-98.119,-73.205],[-97.688,-73.558],[-96.337,-73.617],[-95.044,-73.48],[-93.673,-73.284],[-92.439,-73.166],[-91.421,-73.401],[-90.089,-73.323],[-89.227,-72.559],[-88.424,-73.009],[-87.268,-73.186],[-86.015,-73.088],[-85.192,-73.48],[-83.88,-73.519],[-82.666,-73.636],[-81.471,-73.852],[-80.687,-73.48],[-80.296,-73.127],[-79.297,-73.519],[-77.926,-73.421],[-76.907,-73.636],[-76.222,-73.97],[-74.89,-73.872],[-73.852,-73.656],[-72.834,-73.401],[-71.619,-73.264],[-70.209,-73.147],[-68.936,-73.009],[-67.957,-72.794],[-67.369,-72.48],[-67.134,-72.049],[-67.252,-71.638],[-67.565,-71.246],[-67.917,-70.854],[-68.231,-70.462],[-68.485,-70.109],[-68.544,-69.717],[-68.446,-69.326],[-67.976,-68.953],[-67.585,-68.542],[-67.428,-68.15],[-67.624,-67.719],[-67.741,-67.327],[-67.252,-66.876],[-66.703,-66.582],[-66.057,-66.21],[-65.371,-65.896],[-64.568,-65.603],[-64.177,-65.171],[-63.628,-64.897],[-63.001,-64.642],[-62.042,-64.584],[-61.415,-64.27],[-60.71,-64.074],[-59.887,-63.957],[-59.163,-63.702],[-58.595,-63.388],[-57.811,-63.271],[-57.224,-63.525],[-57.596,-63.859],[-58.614,-64.152]]],[[[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.96,-54.897],[-67.291,-55.301],[-68.149,-55.612],[-69.232,-55.499],[-69.958,-55.198],[-71.006,-55.054],[-72.264,-54.495],[-73.285,-53.958],[-74.663,-52.837],[-73.838,-53.047],[-72.434,-53.715],[-71.108,-54.074],[-70.592,-53.616],[-70.267,-52.931],[-69.346,-52.518],[-68.634,-52.636],[-68.634,-52.636],[-68.25,-53.1],[-67.75,-53.85]]],[[[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1]]],[[[70.28,-49.71],[68.745,-49.775],[68.72,-49.242],[68.868,-48.83],[68.935,-48.625],[69.58,-48.94],[70.525,-49.065],[70.56,-49.255],[70.28,-49.71]]],[[[145.398,-40.793],[146.364,-41.138],[146.909,-41.001],[147.689,-40.808],[148.289,-40.875],[148.36,-42.062],[148.017,-42.407],[147.914,-43.212],[147.565,-42.938],[146.87,-43.635],[146.663,-43.581],[146.048,-43.55],[145.432,-42.694],[145.295,-42.034],[144.718,-41.163],[144.744,-40.704],[145.398,-40.793]]],[[[173.02,-40.919],[173.247,-41.332],[173.958,-40.927],[174.248,-41.349],[174.249,-41.77],[173.876,-42.233],[173.223,-42.97],[172.711,-43.372],[173.08,-43.853],[172.309,-43.866],[171.453,-44.243],[171.185,-44.897],[170.617,-45.909],[169.831,-46.356],[169.332,-46.641],[168.411,-46.62],[167.764,-46.29],[166.677,-46.22],[166.509,-45.853],[167.046,-45.111],[168.304,-44.124],[168.949,-43.936],[169.668,-43.555],[170.525,-43.032],[171.125,-42.513],[171.57,-41.767],[171.949,-41.514],[172.097,-40.956],[172.799,-40.494],[173.02,-40.919]]],[[[174.612,-36.156],[175.337,-37.209],[175.358,-36.526],[175.809,-36.799],[175.958,-37.555],[176.763,-37.881],[177.439,-37.961],[178.01,-37.58],[178.517,-37.695],[178.275,-38.583],[177.97,-39.166],[177.207,-39.146],[176.94,-39.45],[177.033,-39.88],[176.886,-40.066],[176.508,-40.605],[176.012,-41.29],[175.24,-41.688],[175.068,-41.426],[174.651,-41.282],[175.228,-40.459],[174.9,-39.909],[173.824,-39.509],[173.852,-39.147],[174.575,-38.798],[174.743,-38.028],[174.697,-37.381],[174.292,-36.711],[174.319,-36.535],[173.841,-36.122],[173.054,-35.237],[172.636,-34.529],[173.007,-34.451],[173.551,-35.006],[174.329,-35.265],[174.612,-36.156]]],[[[167.12,-22.16],[166.74,-22.4],[166.19,-22.13],[165.474,-21.68],[164.83,-21.15],[164.168,-20.445],[164.03,-20.106],[164.46,-20.12],[165.02,-20.46],[165.46,-20.8],[165.78,-21.08],[166.6,-21.7],[167.12,-22.16]]],[[[178.374,-17.34],[178.718,-17.628],[178.553,-18.151],[177.933,-18.288],[177.381,-18.164],[177.285,-17.725],[177.671,-17.381],[178.126,-17.505],[178.374,-17.34]]],[[[179.364,-16.801],[178.725,-17.012],[178.597,-16.639],[179.097,-16.434],[179.414,-16.379],[180,-16.067],[180,-16.555],[179.364,-16.801]]],[[[-179.917,-16.502],[-180,-16.555],[-180,-16.067],[-179.793,-16.021],[-179.917,-16.502]]],[[[167.845,-16.466],[167.515,-16.598],[167.18,-16.16],[167.217,-15.892],[167.845,-16.466]]],[[[167.108,-14.934],[167.27,-15.74],[167.001,-15.615],[166.793,-15.669],[166.65,-15.393],[166.629,-14.626],[167.108,-14.934]]],[[[50.057,-13.556],[50.217,-14.759],[50.477,-15.227],[50.377,-15.706],[50.2,-16],[49.861,-15.414],[49.673,-15.71],[49.863,-16.451],[49.775,-16.875],[49.499,-17.106],[49.436,-17.953],[49.042,-19.119],[48.549,-20.497],[47.931,-22.392],[47.548,-23.782],[47.096,-24.942],[46.282,-25.178],[45.41,-25.601],[44.834,-25.346],[44.04,-24.988],[43.764,-24.461],[43.698,-23.574],[43.346,-22.777],[43.254,-22.057],[43.433,-21.336],[43.894,-21.163],[43.896,-20.83],[44.374,-20.072],[44.464,-19.435],[44.232,-18.962],[44.043,-18.331],[43.963,-17.41],[44.312,-16.85],[44.447,-16.216],[44.945,-16.179],[45.503,-15.974],[45.873,-15.793],[46.312,-15.78],[46.882,-15.21],[47.705,-14.594],[48.005,-14.091],[47.869,-13.664],[48.294,-13.784],[48.845,-13.089],[48.864,-12.488],[49.195,-12.041],[49.544,-12.47],[49.809,-12.895],[50.057,-13.556]]],[[[143.562,-13.764],[143.922,-14.548],[144.564,-14.171],[144.895,-14.594],[145.375,-14.985],[145.272,-15.428],[145.485,-16.286],[145.637,-16.785],[145.889,-16.907],[146.16,-17.762],[146.064,-18.28],[146.387,-18.958],[147.471,-19.481],[148.178,-19.956],[148.848,-20.391],[148.717,-20.633],[149.289,-21.261],[149.678,-22.343],[150.077,-22.123],[150.483,-22.556],[150.727,-22.402],[150.9,-23.462],[151.609,-24.076],[152.074,-24.458],[152.855,-25.268],[153.136,-26.071],[153.162,-26.641],[153.093,-27.26],[153.569,-28.11],[153.512,-28.995],[153.339,-29.458],[153.069,-30.35],[153.09,-30.924],[152.892,-31.64],[152.45,-32.55],[151.709,-33.041],[151.344,-33.816],[151.011,-34.31],[150.714,-35.173],[150.328,-35.672],[150.075,-36.42],[149.946,-37.109],[149.997,-37.425],[149.424,-37.773],[148.305,-37.809],[147.382,-38.219],[146.922,-38.607],[146.318,-39.036],[145.49,-38.594],[144.877,-38.417],[145.032,-37.896],[144.486,-38.085],[143.61,-38.809],[142.745,-38.538],[142.178,-38.38],[141.607,-38.309],[140.639,-38.019],[139.992,-37.403],[139.807,-36.644],[139.574,-36.138],[139.083,-35.733],[138.121,-35.612],[138.449,-35.127],[138.208,-34.385],[137.719,-35.077],[136.829,-35.261],[137.352,-34.707],[137.504,-34.13],[137.89,-33.64],[137.81,-32.9],[136.997,-33.753],[136.372,-34.095],[135.989,-34.89],[135.208,-34.479],[135.239,-33.948],[134.613,-33.223],[134.086,-32.848],[134.274,-32.617],[132.991,-32.011],[132.288,-31.983],[131.326,-31.496],[129.536,-31.59],[128.241,-31.948],[127.103,-32.282],[126.149,-32.216],[125.089,-32.729],[124.222,-32.959],[124.029,-33.484],[123.66,-33.89],[122.811,-33.914],[122.183,-34.003],[121.299,-33.821],[120.58,-33.93],[119.894,-33.976],[119.299,-34.509],[119.007,-34.464],[118.506,-34.747],[118.025,-35.065],[117.296,-35.025],[116.625,-35.025],[115.564,-34.386],[115.027,-34.197],[115.049,-33.623],[115.545,-33.487],[115.715,-33.26],[115.679,-32.9],[115.802,-32.205],[115.69,-31.612],[115.161,-30.602],[114.997,-30.031],[115.04,-29.461],[114.642,-28.81],[114.616,-28.516],[114.174,-28.118],[114.049,-27.335],[113.477,-26.543],[113.339,-26.117],[113.778,-26.549],[113.441,-25.621],[113.937,-25.911],[114.233,-26.298],[114.216,-25.786],[113.721,-24.999],[113.625,-24.684],[113.394,-24.385],[113.502,-23.806],[113.707,-23.56],[113.843,-23.06],[113.737,-22.475],[114.15,-21.756],[114.225,-22.517],[114.648,-21.83],[115.46,-21.495],[115.947,-21.069],[116.712,-20.702],[117.166,-20.624],[117.442,-20.747],[118.23,-20.374],[118.836,-20.263],[118.988,-20.044],[119.252,-19.953],[119.805,-19.977],[120.856,-19.684],[121.4,-19.24],[121.655,-18.705],[122.242,-18.198],[122.287,-17.799],[122.313,-17.255],[123.013,-16.405],[123.434,-17.269],[123.859,-17.069],[123.503,-16.597],[123.817,-16.111],[124.258,-16.328],[124.38,-15.567],[124.926,-15.075],[125.167,-14.68],[125.67,-14.51],[125.686,-14.231],[126.125,-14.347],[126.143,-14.096],[126.583,-13.953],[127.066,-13.818],[127.805,-14.277],[128.36,-14.869],[128.986,-14.876],[129.621,-14.97],[129.41,-14.421],[129.889,-13.619],[130.339,-13.357],[130.184,-13.108],[130.618,-12.536],[131.223,-12.184],[131.735,-12.302],[132.575,-12.114],[132.557,-11.603],[131.825,-11.274],[132.357,-11.129],[133.02,-11.376],[133.551,-11.787],[134.393,-12.042],[134.679,-11.941],[135.298,-12.249],[135.883,-11.962],[136.258,-12.049],[136.492,-11.857],[136.952,-12.352],[136.685,-12.887],[136.305,-13.291],[135.962,-13.325],[136.078,-13.724],[135.784,-14.224],[135.429,-14.715],[135.5,-14.998],[136.295,-15.55],[137.065,-15.871],[137.58,-16.215],[138.303,-16.808],[138.585,-16.807],[139.109,-17.063],[139.261,-17.372],[140.215,-17.711],[140.875,-17.369],[141.071,-16.832],[141.274,-16.389],[141.398,-15.841],[141.702,-15.045],[141.563,-14.561],[141.636,-14.27],[141.52,-13.698],[141.651,-12.945],[141.843,-12.742],[141.687,-12.408],[141.929,-11.877],[142.118,-11.328],[142.144,-11.043],[142.515,-10.668],[142.797,-11.157],[142.867,-11.785],[143.116,-11.906],[143.159,-12.326],[143.522,-12.834],[143.597,-13.4],[143.562,-13.764]]],[[[162.119,-10.483],[162.399,-10.826],[161.7,-10.82],[161.32,-10.205],[161.917,-10.447],[162.119,-10.483]]],[[[120.716,-10.24],[120.295,-10.259],[118.968,-9.558],[119.9,-9.361],[120.426,-9.666],[120.776,-9.97],[120.716,-10.24]]],[[[160.852,-9.873],[160.463,-9.895],[159.849,-9.794],[159.64,-9.64],[159.703,-9.243],[160.363,-9.4],[160.689,-9.61],[160.852,-9.873]]],[[[161.68,-9.6],[161.529,-9.784],[160.788,-8.918],[160.58,-8.32],[160.92,-8.32],[161.28,-9.12],[161.68,-9.6]]],[[[124.436,-10.14],[123.58,-10.36],[123.46,-10.24],[123.55,-9.9],[123.98,-9.29],[124.969,-8.893],[125.086,-8.657],[125.947,-8.432],[126.645,-8.398],[126.957,-8.273],[127.336,-8.397],[126.968,-8.668],[125.926,-9.106],[125.089,-9.393],[124.436,-10.14]]],[[[117.9,-8.096],[118.261,-8.362],[118.878,-8.281],[119.127,-8.706],[117.97,-8.907],[117.278,-9.041],[116.74,-9.033],[117.084,-8.457],[117.632,-8.449],[117.9,-8.096]]],[[[122.904,-8.094],[122.757,-8.65],[121.254,-8.934],[119.924,-8.81],[119.921,-8.445],[120.715,-8.237],[121.342,-8.537],[122.007,-8.461],[122.904,-8.094]]],[[[159.875,-8.337],[159.917,-8.538],[159.134,-8.114],[158.586,-7.755],[158.211,-7.422],[158.36,-7.32],[158.82,-7.56],[159.64,-8.02],[159.875,-8.337]]],[[[157.538,-7.348],[157.339,-7.405],[156.902,-7.177],[156.491,-6.766],[156.543,-6.599],[157.14,-7.022],[157.538,-7.348]]],[[[108.623,-6.778],[110.539,-6.877],[110.76,-6.465],[112.615,-6.946],[112.979,-7.594],[114.479,-7.777],[115.706,-8.371],[114.565,-8.752],[113.465,-8.349],[112.56,-8.376],[111.522,-8.302],[110.586,-8.123],[109.428,-7.741],[108.694,-7.642],[108.278,-7.767],[106.454,-7.355],[106.281,-6.925],[105.365,-6.851],[106.052,-5.896],[107.265,-5.955],[108.072,-6.346],[108.487,-6.422],[108.623,-6.778]]],[[[134.725,-6.214],[134.21,-6.895],[134.113,-6.142],[134.29,-5.783],[134.5,-5.445],[134.727,-5.738],[134.725,-6.214]]],[[[155.88,-6.82],[155.6,-6.92],[155.167,-6.536],[154.729,-5.901],[154.514,-5.139],[154.653,-5.042],[154.76,-5.34],[155.063,-5.567],[155.548,-6.201],[156.02,-6.54],[155.88,-6.82]]],[[[151.983,-5.478],[151.459,-5.56],[151.301,-5.841],[150.754,-6.084],[150.241,-6.318],[149.71,-6.317],[148.89,-6.026],[148.319,-5.747],[148.402,-5.438],[149.298,-5.584],[149.846,-5.506],[149.996,-5.026],[150.14,-5.001],[150.237,-5.532],[150.807,-5.456],[151.09,-5.114],[151.648,-4.757],[151.538,-4.168],[152.137,-4.149],[152.339,-4.313],[152.319,-4.868],[151.983,-5.478]]],[[[127.249,-3.459],[126.875,-3.791],[126.184,-3.607],[125.989,-3.177],[127.001,-3.129],[127.249,-3.459]]],[[[130.471,-3.094],[130.835,-3.858],[129.991,-3.446],[129.155,-3.363],[128.591,-3.429],[127.899,-3.393],[128.136,-2.844],[129.371,-2.802],[130.471,-3.094]]],[[[153.14,-4.5],[152.827,-4.766],[152.639,-4.176],[152.406,-3.79],[151.953,-3.462],[151.384,-3.035],[150.662,-2.741],[150.94,-2.5],[151.48,-2.78],[151.82,-3],[152.24,-3.24],[152.64,-3.66],[153.02,-3.98],[153.14,-4.5]]],[[[134.143,-1.152],[134.423,-2.769],[135.458,-3.368],[136.293,-2.307],[137.441,-1.704],[138.33,-1.703],[139.185,-2.051],[139.927,-2.409],[141,-2.6],[142.735,-3.289],[144.584,-3.861],[145.273,-4.374],[145.83,-4.876],[145.982,-5.466],[147.648,-6.084],[147.891,-6.614],[146.971,-6.722],[147.192,-7.388],[148.085,-8.044],[148.734,-9.105],[149.307,-9.071],[149.267,-9.514],[150.039,-9.684],[149.739,-9.873],[150.802,-10.294],[150.691,-10.583],[150.028,-10.652],[149.782,-10.393],[148.923,-10.281],[147.913,-10.13],[147.135,-9.492],[146.568,-8.943],[146.048,-8.067],[144.744,-7.63],[143.897,-7.915],[143.286,-8.245],[143.414,-8.983],[142.628,-9.327],[142.068,-9.16],[141.034,-9.118],[140.143,-8.297],[139.128,-8.096],[138.881,-8.381],[137.614,-8.412],[138.039,-7.598],[138.669,-7.32],[138.408,-6.233],[137.928,-5.393],[135.989,-4.547],[135.165,-4.463],[133.663,-3.539],[133.368,-4.025],[132.984,-4.113],[132.757,-3.746],[132.754,-3.312],[131.99,-2.821],[133.067,-2.46],[133.78,-2.48],[133.696,-2.215],[132.232,-2.213],[131.836,-1.617],[130.943,-1.433],[130.52,-.938],[131.868,-.695],[132.38,-.37],[133.986,-.78],[134.143,-1.152]]],[[[125.241,1.42],[124.437,.428],[123.686,.236],[122.723,.431],[121.057,.381],[120.183,.237],[120.041,-.52],[120.936,-1.409],[121.476,-.956],[123.341,-.616],[123.258,-1.076],[122.823,-.931],[122.389,-1.517],[121.508,-1.904],[122.455,-3.186],[122.272,-3.53],[123.171,-4.684],[123.162,-5.341],[122.629,-5.635],[122.236,-5.283],[122.72,-4.464],[121.738,-4.851],[121.489,-4.575],[121.619,-4.188],[120.898,-3.602],[120.972,-2.628],[120.305,-2.932],[120.39,-4.098],[120.431,-5.528],[119.797,-5.673],[119.367,-5.38],[119.654,-4.459],[119.499,-3.494],[119.078,-3.487],[118.768,-2.802],[119.181,-2.147],[119.323,-1.353],[119.826,.154],[120.036,.566],[120.886,1.309],[121.667,1.014],[122.928,.875],[124.078,.917],[125.066,1.643],[125.241,1.42]]],[[[128.688,1.132],[128.636,.258],[128.12,.356],[127.968,-.252],[128.38,-.78],[128.1,-.9],[127.696,-.267],[127.399,1.012],[127.601,1.811],[127.932,2.175],[128.004,1.629],[128.595,1.541],[128.688,1.132]]],[[[105.818,-5.852],[104.71,-5.873],[103.868,-5.037],[102.584,-4.22],[102.156,-3.614],[101.399,-2.8],[100.903,-2.05],[100.142,-.65],[99.264,.183],[98.97,1.043],[98.601,1.824],[97.7,2.453],[97.177,3.309],[96.424,3.869],[95.381,4.971],[95.293,5.48],[95.937,5.44],[97.485,5.246],[98.369,4.268],[99.143,3.59],[99.694,3.174],[100.641,2.099],[101.658,2.084],[102.498,1.399],[103.077,.561],[103.838,.105],[103.438,-.712],[104.011,-1.059],[104.37,-1.085],[104.539,-1.782],[104.888,-2.34],[105.622,-2.429],[106.109,-3.062],[105.857,-4.306],[105.818,-5.852]]],[[[117.876,1.828],[118.997,.902],[117.812,.784],[117.478,.102],[117.522,-.804],[116.56,-1.488],[116.534,-2.484],[116.148,-4.013],[116.001,-3.657],[114.865,-4.107],[114.469,-3.496],[113.756,-3.439],[113.257,-3.119],[112.068,-3.478],[111.703,-2.994],[111.048,-3.049],[110.224,-2.934],[110.071,-1.593],[109.572,-1.315],[109.092,-.46],[108.953,.415],[109.069,1.342],[109.663,2.006],[110.396,1.664],[111.169,1.851],[111.37,2.697],[111.797,2.886],[112.996,3.102],[113.713,3.894],[114.204,4.526],[114.6,4.9],[115.451,5.448],[116.221,6.143],[116.725,6.925],[117.13,6.928],[117.643,6.422],[117.689,5.987],[118.348,5.709],[119.182,5.408],[119.111,5.016],[118.44,4.967],[118.618,4.478],[117.882,4.138],[117.313,3.234],[118.048,2.288],[117.876,1.828]]],[[[126.377,8.415],[126.479,7.75],[126.537,7.189],[126.197,6.274],[125.831,7.294],[125.364,6.786],[125.683,6.05],[125.397,5.581],[124.22,6.161],[123.939,6.885],[124.244,7.361],[123.61,7.834],[123.296,7.419],[122.826,7.457],[122.085,6.899],[121.92,7.192],[122.312,8.035],[122.942,8.316],[123.488,8.693],[123.841,8.24],[124.601,8.514],[124.765,8.96],[125.471,8.987],[125.412,9.76],[126.223,9.286],[126.307,8.782],[126.377,8.415]]],[[[81.218,6.197],[80.348,5.968],[79.872,6.763],[79.695,8.201],[80.148,9.824],[80.839,9.268],[81.304,8.564],[81.788,7.523],[81.637,6.482],[81.218,6.197]]],[[[-60.935,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.365],[-61.68,10.76],[-61.105,10.89],[-60.895,10.855],[-60.935,10.11]]],[[[123.982,10.279],[123.623,9.95],[123.31,9.318],[122.996,9.022],[122.38,9.713],[122.586,9.981],[122.837,10.261],[122.947,10.882],[123.499,10.941],[123.338,10.267],[124.078,11.233],[123.982,10.279]]],[[[118.505,9.316],[117.174,8.367],[117.664,9.067],[118.387,9.684],[118.987,10.376],[119.511,11.37],[119.69,10.554],[119.029,10.004],[118.505,9.316]]],[[[121.884,11.892],[122.484,11.582],[123.12,11.584],[123.101,11.166],[122.638,10.741],[122.003,10.441],[121.967,10.906],[122.038,11.416],[121.884,11.892]]],[[[125.503,12.163],[125.783,11.046],[125.012,11.311],[125.033,10.976],[125.277,10.359],[124.802,10.135],[124.76,10.838],[124.459,10.89],[124.303,11.495],[124.891,11.416],[124.878,11.794],[124.267,12.558],[125.227,12.536],[125.503,12.163]]],[[[121.527,13.07],[121.262,12.206],[120.834,12.704],[120.323,13.466],[121.18,13.43],[121.527,13.07]]],[[[121.321,18.504],[121.938,18.219],[122.246,18.479],[122.337,18.225],[122.174,17.81],[122.516,17.094],[122.252,16.262],[121.663,15.931],[121.505,15.125],[121.729,14.328],[122.259,14.218],[122.701,14.337],[123.95,13.782],[123.855,13.238],[124.181,12.998],[124.077,12.537],[123.298,13.028],[122.929,13.553],[122.671,13.186],[122.035,13.784],[121.126,13.637],[120.629,13.858],[120.679,14.271],[120.992,14.525],[120.693,14.757],[120.564,14.396],[120.07,14.971],[119.921,15.406],[119.884,16.364],[120.286,16.035],[120.39,17.599],[120.716,18.505],[121.321,18.504]]],[[[-65.591,18.228],[-65.847,17.976],[-66.6,17.982],[-67.184,17.947],[-67.242,18.374],[-67.101,18.521],[-66.282,18.515],[-65.771,18.427],[-65.591,18.228]]],[[[-76.903,17.868],[-77.206,17.701],[-77.766,17.862],[-78.338,18.226],[-78.218,18.455],[-77.797,18.524],[-77.57,18.491],[-76.897,18.401],[-76.365,18.161],[-76.2,17.887],[-76.903,17.868]]],[[[-72.58,19.872],[-71.712,19.714],[-71.587,19.885],[-70.807,19.88],[-70.214,19.623],[-69.951,19.648],[-69.769,19.293],[-69.222,19.313],[-69.254,19.015],[-68.809,18.979],[-68.318,18.612],[-68.689,18.205],[-69.165,18.423],[-69.624,18.381],[-69.953,18.428],[-70.133,18.246],[-70.517,18.184],[-70.669,18.427],[-71,18.283],[-71.4,17.599],[-71.658,17.758],[-71.708,18.045],[-72.372,18.215],[-72.844,18.146],[-73.455,18.218],[-73.922,18.031],[-74.458,18.343],[-74.37,18.665],[-73.45,18.526],[-72.695,18.446],[-72.335,18.668],[-72.792,19.102],[-72.784,19.484],[-73.415,19.64],[-73.19,19.916],[-72.58,19.872]]],[[[110.339,18.678],[109.475,18.198],[108.655,18.508],[108.626,19.368],[109.119,19.821],[110.212,20.101],[110.787,20.078],[111.01,19.696],[110.571,19.256],[110.339,18.678]]],[[[-155.542,19.083],[-155.688,18.916],[-155.937,19.059],[-155.908,19.339],[-156.073,19.703],[-156.024,19.814],[-155.85,19.977],[-155.919,20.174],[-155.861,20.267],[-155.785,20.249],[-155.402,20.08],[-155.225,19.993],[-155.062,19.859],[-154.807,19.509],[-154.831,19.453],[-155.222,19.24],[-155.542,19.083]]],[[[-156.079,20.644],[-156.414,20.572],[-156.587,20.783],[-156.702,20.864],[-156.711,20.927],[-156.613,21.012],[-156.257,20.917],[-155.996,20.764],[-156.079,20.644]]],[[[-156.758,21.177],[-156.789,21.069],[-157.325,21.098],[-157.25,21.22],[-156.758,21.177]]],[[[-157.653,21.322],[-157.707,21.264],[-157.779,21.277],[-158.127,21.312],[-158.254,21.539],[-158.293,21.579],[-158.025,21.717],[-157.942,21.653],[-157.653,21.322]]],[[[-159.345,21.982],[-159.464,21.883],[-159.801,22.065],[-159.749,22.138],[-159.596,22.236],[-159.366,22.215],[-159.345,21.982]]],[[[-79.68,22.765],[-79.281,22.399],[-78.347,22.512],[-77.993,22.277],[-77.146,21.658],[-76.524,21.207],[-76.195,21.221],[-75.598,21.017],[-75.671,20.735],[-74.934,20.694],[-74.178,20.285],[-74.297,20.05],[-74.962,19.923],[-75.635,19.874],[-76.324,19.953],[-77.755,19.855],[-77.085,20.413],[-77.493,20.673],[-78.137,20.74],[-78.483,21.029],[-78.72,21.598],[-79.285,21.559],[-80.217,21.827],[-80.518,22.037],[-81.821,22.192],[-82.17,22.387],[-81.795,22.637],[-82.776,22.688],[-83.494,22.169],[-83.909,22.155],[-84.052,21.911],[-84.547,21.801],[-84.975,21.896],[-84.447,22.205],[-84.23,22.566],[-83.778,22.788],[-83.268,22.983],[-82.51,23.079],[-82.268,23.189],[-81.404,23.117],[-80.619,23.106],[-79.68,22.765]]],[[[-77.535,23.76],[-77.78,23.71],[-78.034,24.286],[-78.408,24.576],[-78.191,25.21],[-77.89,25.17],[-77.54,24.34],[-77.535,23.76]]],[[[121.176,22.791],[120.747,21.971],[120.22,22.815],[120.106,23.556],[120.695,24.538],[121.495,25.295],[121.951,24.998],[121.778,24.394],[121.176,22.791]]],[[[-77.82,26.58],[-78.91,26.42],[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58]]],[[[-77,26.59],[-77.173,25.879],[-77.356,26.007],[-77.34,26.53],[-77.788,26.925],[-77.79,27.04],[-77,26.59]]],[[[134.638,34.149],[134.766,33.806],[134.203,33.201],[133.793,33.522],[133.28,33.29],[133.015,32.705],[132.363,32.989],[132.371,33.464],[132.924,34.06],[133.493,33.945],[133.904,34.365],[134.638,34.149]]],[[[34.576,35.672],[33.901,35.246],[33.974,35.059],[34.005,34.978],[32.98,34.572],[32.49,34.702],[32.257,35.103],[32.732,35.14],[32.802,35.146],[32.947,35.387],[33.667,35.373],[34.576,35.672]]],[[[23.7,35.705],[24.247,35.368],[25.025,35.425],[25.769,35.354],[25.745,35.18],[26.29,35.3],[26.165,35.005],[24.725,34.92],[24.735,35.085],[23.515,35.28],[23.7,35.705]]],[[[15.52,38.231],[15.16,37.444],[15.31,37.134],[15.1,36.62],[14.335,36.997],[13.827,37.105],[12.431,37.613],[12.571,38.126],[13.741,38.035],[14.761,38.144],[15.52,38.231]]],[[[9.21,41.21],[9.81,40.5],[9.67,39.177],[9.215,39.24],[8.807,38.907],[8.428,39.172],[8.388,40.378],[8.16,40.95],[8.71,40.9],[9.21,41.21]]],[[[140.976,37.142],[140.6,36.344],[140.774,35.843],[140.253,35.138],[138.976,34.668],[137.218,34.606],[135.793,33.465],[135.121,33.849],[135.079,34.597],[133.34,34.376],[132.157,33.905],[130.986,33.886],[132,33.15],[131.333,31.45],[130.686,31.03],[130.202,31.418],[130.448,32.319],[129.815,32.61],[129.408,33.296],[130.354,33.604],[130.878,34.233],[131.884,34.75],[132.618,35.433],[134.608,35.732],[135.678,35.527],[136.724,37.305],[137.391,36.827],[138.858,37.827],[139.426,38.216],[140.055,39.439],[139.883,40.563],[140.306,41.195],[141.369,41.379],[141.914,39.992],[141.885,39.181],[140.959,38.174],[140.976,37.142]]],[[[9.56,42.152],[9.23,41.38],[8.776,41.584],[8.544,42.257],[8.746,42.628],[9.39,43.01],[9.56,42.152]]],[[[143.91,44.174],[144.613,43.961],[145.321,44.385],[145.543,43.262],[144.06,42.988],[143.184,41.995],[141.611,42.679],[141.067,41.585],[139.955,41.57],[139.818,42.564],[140.312,43.333],[141.381,43.389],[141.672,44.772],[141.968,45.551],[143.143,44.51],[143.91,44.174]]],[[[-63.664,46.55],[-62.939,46.416],[-62.012,46.443],[-62.504,46.033],[-62.874,45.968],[-64.143,46.393],[-64.393,46.727],[-64.015,47.036],[-63.664,46.55]]],[[[-61.806,49.105],[-62.293,49.087],[-63.589,49.401],[-64.519,49.873],[-64.173,49.957],[-62.858,49.706],[-61.836,49.289],[-61.806,49.105]]],[[[-123.51,48.51],[-124.013,48.371],[-125.655,48.825],[-125.955,49.18],[-126.85,49.53],[-127.03,49.815],[-128.059,49.995],[-128.445,50.539],[-128.358,50.771],[-127.309,50.553],[-126.695,50.401],[-125.755,50.295],[-125.415,49.95],[-124.921,49.475],[-123.923,49.062],[-123.51,48.51]]],[[[-56.134,50.687],[-56.796,49.812],[-56.143,50.15],[-55.471,49.936],[-55.822,49.587],[-54.935,49.313],[-54.474,49.557],[-53.477,49.249],[-53.786,48.517],[-53.086,48.688],[-52.959,48.157],[-52.648,47.536],[-53.069,46.655],[-53.521,46.618],[-54.179,46.807],[-53.962,47.625],[-54.24,47.752],[-55.401,46.885],[-55.997,46.92],[-55.291,47.39],[-56.251,47.633],[-57.325,47.573],[-59.266,47.603],[-59.419,47.899],[-58.797,48.252],[-59.232,48.523],[-58.392,49.126],[-57.359,50.718],[-56.739,51.287],[-55.871,51.632],[-55.407,51.588],[-55.6,51.317],[-56.134,50.687]]],[[[-132.71,54.04],[-132.71,54.04],[-132.71,54.04],[-132.71,54.04],[-131.75,54.12],[-132.049,52.985],[-131.179,52.18],[-131.578,52.182],[-132.18,52.64],[-132.55,53.1],[-133.055,53.411],[-133.24,53.851],[-133.18,54.17],[-132.71,54.04]]],[[[143.648,50.748],[144.654,48.976],[143.174,49.307],[142.559,47.862],[143.533,46.837],[143.505,46.138],[142.748,46.741],[142.092,45.967],[141.907,46.806],[142.018,47.78],[141.904,48.859],[142.136,49.615],[142.18,50.952],[141.594,51.935],[141.683,53.302],[142.607,53.762],[142.21,54.225],[142.655,54.366],[142.915,53.705],[143.261,52.741],[143.235,51.757],[143.648,50.748]]],[[[-6.789,52.26],[-8.562,51.669],[-9.977,51.82],[-9.166,52.865],[-9.689,53.881],[-8.328,54.665],[-7.572,55.132],[-6.734,55.173],[-5.662,54.555],[-6.198,53.868],[-6.033,53.153],[-6.789,52.26]]],[[[12.69,55.61],[12.09,54.8],[11.044,55.365],[10.904,55.78],[12.371,56.111],[12.69,55.61]]],[[[-153.006,57.116],[-154.005,56.735],[-154.516,56.993],[-154.671,57.461],[-153.763,57.817],[-153.229,57.969],[-152.565,57.901],[-152.141,57.591],[-153.006,57.116]]],[[[-3.005,58.635],[-4.074,57.553],[-3.055,57.69],[-1.959,57.685],[-2.22,56.87],[-3.119,55.974],[-2.085,55.91],[-1.115,54.625],[-.43,54.464],[.185,53.325],[.47,52.93],[1.682,52.74],[1.56,52.1],[1.051,51.807],[1.45,51.289],[.55,50.766],[-.788,50.775],[-2.49,50.5],[-2.956,50.697],[-3.617,50.228],[-4.543,50.342],[-5.245,49.96],[-5.777,50.16],[-4.31,51.21],[-3.415,51.426],[-4.984,51.593],[-5.267,51.991],[-4.222,52.301],[-4.77,52.84],[-4.58,53.495],[-3.092,53.404],[-2.945,53.985],[-3.63,54.615],[-4.844,54.791],[-5.083,55.062],[-4.719,55.508],[-5.048,55.784],[-5.586,55.311],[-5.645,56.275],[-6.15,56.785],[-5.787,57.819],[-5.01,58.63],[-4.211,58.551],[-3.005,58.635]]],[[[-165.579,59.91],[-166.193,59.754],[-166.848,59.941],[-167.455,60.213],[-166.468,60.384],[-165.674,60.294],[-165.579,59.91]]],[[[-79.266,62.159],[-79.658,61.633],[-80.1,61.718],[-80.362,62.016],[-80.315,62.086],[-79.929,62.386],[-79.52,62.364],[-79.266,62.159]]],[[[-81.898,62.711],[-83.069,62.159],[-83.775,62.182],[-83.994,62.453],[-83.25,62.914],[-81.877,62.905],[-81.898,62.711]]],[[[-171.732,63.783],[-171.114,63.592],[-170.491,63.695],[-169.683,63.431],[-168.689,63.298],[-168.772,63.189],[-169.529,62.977],[-170.291,63.194],[-170.671,63.376],[-171.553,63.318],[-171.791,63.406],[-171.732,63.783]]],[[[-85.161,65.657],[-84.976,65.218],[-84.464,65.372],[-83.883,65.11],[-82.788,64.767],[-81.642,64.455],[-81.553,63.98],[-80.817,64.057],[-80.103,63.726],[-80.991,63.411],[-82.547,63.652],[-83.109,64.102],[-84.1,63.57],[-85.523,63.052],[-85.867,63.637],[-87.222,63.541],[-86.353,64.036],[-86.225,64.823],[-85.884,65.739],[-85.161,65.657]]],[[[-14.509,66.456],[-14.74,65.809],[-13.61,65.127],[-14.91,64.364],[-17.794,63.679],[-18.656,63.496],[-19.973,63.644],[-22.763,63.96],[-21.778,64.402],[-23.955,64.891],[-22.184,65.085],[-22.227,65.379],[-24.326,65.611],[-23.651,66.263],[-22.135,66.41],[-20.576,65.732],[-19.057,66.277],[-17.799,65.994],[-16.168,66.527],[-14.509,66.456]]],[[[-75.866,67.149],[-76.987,67.099],[-77.236,67.588],[-76.812,68.149],[-75.895,68.287],[-75.115,68.01],[-75.103,67.582],[-75.216,67.444],[-75.866,67.149]]],[[[-175.014,66.584],[-174.34,66.336],[-174.572,67.062],[-171.857,66.913],[-169.9,65.977],[-170.891,65.541],[-172.53,65.438],[-172.555,64.461],[-172.955,64.253],[-173.892,64.283],[-174.654,64.631],[-175.984,64.923],[-176.207,65.357],[-177.223,65.52],[-178.36,65.391],[-178.903,65.74],[-178.686,66.112],[-179.884,65.875],[-179.433,65.404],[-180,64.98],[-180,68.964],[-177.55,68.2],[-174.928,67.206],[-175.014,66.584]]],[[[-95.648,69.108],[-96.27,68.757],[-97.617,69.06],[-98.432,68.951],[-99.797,69.4],[-98.917,69.71],[-98.218,70.144],[-97.157,69.86],[-96.557,69.68],[-96.257,69.49],[-95.648,69.108]]],[[[180,70.832],[178.903,70.781],[178.725,71.099],[180,71.516],[180,70.832]]],[[[-178.694,70.893],[-180,70.832],[-180,71.516],[-179.872,71.558],[-179.024,71.556],[-177.578,71.269],[-177.664,71.133],[-178.694,70.893]]],[[[-90.547,69.498],[-90.552,68.475],[-89.215,69.259],[-88.02,68.615],[-88.318,67.873],[-87.35,67.199],[-86.306,67.922],[-85.577,68.784],[-85.522,69.882],[-84.101,69.805],[-82.622,69.658],[-81.28,69.162],[-81.22,68.666],[-81.964,68.133],[-81.259,67.597],[-81.386,67.111],[-83.344,66.412],[-84.735,66.257],[-85.769,66.558],[-86.068,66.056],[-87.031,65.213],[-87.323,64.776],[-88.483,64.099],[-89.914,64.033],[-90.704,63.61],[-90.77,62.96],[-91.933,62.835],[-93.157,62.025],[-94.242,60.899],[-94.629,60.11],[-94.685,58.949],[-93.215,58.782],[-92.765,57.846],[-92.297,57.087],[-90.898,57.285],[-89.039,56.852],[-88.04,56.472],[-87.324,55.999],[-86.071,55.724],[-85.012,55.303],[-83.36,55.245],[-82.273,55.148],[-82.436,54.282],[-82.125,53.277],[-81.401,52.158],[-79.913,51.208],[-79.143,51.534],[-78.602,52.562],[-79.124,54.141],[-79.83,54.668],[-78.229,55.136],[-77.096,55.838],[-76.541,56.534],[-76.623,57.203],[-77.302,58.052],[-78.517,58.805],[-77.337,59.853],[-77.773,60.758],[-78.107,62.32],[-77.411,62.55],[-75.696,62.279],[-74.668,62.181],[-73.84,62.444],[-72.909,62.105],[-71.677,61.525],[-71.374,61.137],[-69.59,61.062],[-69.62,60.221],[-69.288,58.957],[-68.375,58.801],[-67.65,58.212],[-66.202,58.767],[-65.245,59.871],[-64.583,60.336],[-63.805,59.443],[-62.502,58.167],[-61.396,56.968],[-61.799,56.339],[-60.469,55.776],[-59.57,55.204],[-57.975,54.945],[-57.333,54.627],[-56.937,53.78],[-56.158,53.648],[-55.756,53.271],[-55.683,52.147],[-56.409,51.771],[-57.127,51.42],[-58.775,51.064],[-60.033,50.243],[-61.724,50.081],[-63.862,50.291],[-65.363,50.298],[-66.399,50.229],[-67.236,49.511],[-68.511,49.068],[-69.954,47.745],[-71.104,46.822],[-70.255,46.986],[-68.65,48.3],[-66.552,49.133],[-65.056,49.233],[-64.171,48.742],[-65.115,48.071],[-64.799,46.993],[-64.472,46.239],[-63.173,45.739],[-61.521,45.884],[-60.518,47.008],[-60.449,46.283],[-59.803,45.92],[-61.04,45.265],[-63.255,44.67],[-64.247,44.266],[-65.364,43.545],[-66.123,43.619],[-66.162,44.465],[-64.425,45.292],[-66.026,45.259],[-67.137,45.138],[-66.965,44.81],[-68.032,44.325],[-69.06,43.98],[-70.116,43.684],[-70.69,43.03],[-70.815,42.865],[-70.825,42.335],[-70.495,41.805],[-70.08,41.78],[-70.185,42.145],[-69.885,41.923],[-69.965,41.637],[-70.64,41.475],[-71.12,41.495],[-71.86,41.32],[-72.295,41.27],[-72.876,41.221],[-73.71,40.931],[-72.241,41.12],[-71.945,40.93],[-73.345,40.63],[-73.982,40.628],[-73.952,40.751],[-74.257,40.474],[-73.962,40.428],[-74.178,39.709],[-74.906,38.94],[-74.98,39.196],[-75.2,39.248],[-75.528,39.498],[-75.32,38.96],[-75.083,38.781],[-75.057,38.404],[-75.377,38.016],[-75.94,37.217],[-76.031,37.257],[-75.722,37.937],[-76.233,38.319],[-76.35,39.15],[-76.543,38.718],[-76.329,38.083],[-76.96,38.233],[-76.302,37.918],[-76.259,36.966],[-75.972,36.897],[-75.868,36.551],[-75.727,35.551],[-76.363,34.808],[-77.398,34.512],[-78.055,33.925],[-78.554,33.861],[-79.061,33.494],[-79.203,33.159],[-80.301,32.509],[-80.865,32.033],[-81.336,31.44],[-81.49,30.73],[-81.314,30.036],[-80.98,29.18],[-80.536,28.472],[-80.53,28.04],[-80.057,26.88],[-80.088,26.206],[-80.131,25.817],[-80.381,25.206],[-80.68,25.08],[-81.172,25.201],[-81.33,25.64],[-81.71,25.87],[-82.24,26.73],[-82.705,27.495],[-82.855,27.886],[-82.65,28.55],[-82.93,29.1],[-83.71,29.937],[-84.1,30.09],[-85.109,29.636],[-85.288,29.686],[-85.773,30.153],[-86.4,30.4],[-87.53,30.274],[-88.418,30.385],[-89.18,30.316],[-89.605,30.176],[-89.414,29.894],[-89.43,29.489],[-89.218,29.291],[-89.408,29.16],[-89.779,29.307],[-90.155,29.117],[-90.88,29.149],[-91.627,29.677],[-92.499,29.552],[-93.226,29.784],[-93.848,29.714],[-94.69,29.48],[-95.6,28.739],[-96.594,28.307],[-97.14,27.83],[-97.37,27.38],[-97.38,26.69],[-97.33,26.21],[-97.14,25.87],[-97.139,25.868],[-97.142,25.866],[-97.528,24.992],[-97.703,24.272],[-97.776,22.933],[-97.872,22.444],[-97.699,21.899],[-97.389,21.411],[-97.189,20.635],[-96.526,19.891],[-96.292,19.32],[-95.901,18.828],[-94.839,18.563],[-94.426,18.144],[-93.549,18.424],[-92.786,18.525],[-92.037,18.705],[-91.408,18.876],[-90.772,19.284],[-90.534,19.867],[-90.451,20.708],[-90.279,21],[-89.601,21.262],[-88.544,21.494],[-87.658,21.459],[-87.052,21.544],[-86.812,21.331],[-86.846,20.85],[-87.383,20.255],[-87.621,19.646],[-87.437,19.472],[-87.586,19.04],[-87.837,18.26],[-88.091,18.517],[-88.3,18.5],[-88.296,18.353],[-88.107,18.349],[-88.123,18.077],[-88.285,17.644],[-88.198,17.49],[-88.303,17.132],[-88.24,17.036],[-88.355,16.531],[-88.552,16.266],[-88.732,16.234],[-88.931,15.887],[-88.605,15.706],[-88.518,15.856],[-88.225,15.728],[-88.121,15.689],[-87.902,15.865],[-87.616,15.879],[-87.523,15.797],[-87.368,15.847],[-86.903,15.757],[-86.441,15.783],[-86.119,15.893],[-86.002,16.005],[-85.683,15.954],[-85.444,15.886],[-85.182,15.909],[-84.984,15.996],[-84.527,15.857],[-84.368,15.835],[-84.063,15.648],[-83.774,15.424],[-83.41,15.271],[-83.147,14.996],[-83.233,14.9],[-83.284,14.677],[-83.182,14.311],[-83.412,13.97],[-83.52,13.568],[-83.552,13.127],[-83.498,12.869],[-83.473,12.419],[-83.626,12.321],[-83.72,11.893],[-83.651,11.629],[-83.855,11.373],[-83.809,11.103],[-83.656,10.939],[-83.402,10.396],[-83.016,9.993],[-82.546,9.566],[-82.187,9.208],[-82.208,8.996],[-81.809,8.951],[-81.714,9.032],[-81.439,8.786],[-80.947,8.859],[-80.522,9.111],[-79.915,9.313],[-79.573,9.612],[-79.021,9.553],[-79.058,9.455],[-78.501,9.42],[-78.056,9.248],[-77.729,8.947],[-77.353,8.67],[-76.837,8.639],[-76.086,9.337],[-75.675,9.443],[-75.665,9.774],[-75.48,10.619],[-74.907,11.083],[-74.277,11.102],[-74.197,11.31],[-73.415,11.227],[-72.628,11.732],[-72.238,11.956],[-71.754,12.437],[-71.4,12.376],[-71.137,12.113],[-71.332,11.776],[-71.36,11.54],[-71.947,11.423],[-71.621,10.969],[-71.633,10.446],[-72.074,9.866],[-71.696,9.072],[-71.265,9.137],[-71.04,9.86],[-71.35,10.212],[-71.401,10.969],[-70.155,11.375],[-70.294,11.847],[-69.943,12.162],[-69.584,11.46],[-68.883,11.443],[-68.233,10.886],[-68.194,10.555],[-67.296,10.546],[-66.228,10.649],[-65.655,10.201],[-64.89,10.077],[-64.329,10.39],[-64.318,10.641],[-63.079,10.702],[-61.881,10.716],[-62.73,10.42],[-62.388,9.948],[-61.589,9.873],[-60.831,9.381],[-60.671,8.58],[-60.15,8.603],[-59.758,8.367],[-59.102,7.999],[-58.483,7.348],[-58.455,6.833],[-58.078,6.809],[-57.542,6.321],[-57.147,5.973],[-55.949,5.773],[-55.842,5.953],[-55.033,6.025],[-53.958,5.757],[-53.618,5.646],[-52.882,5.41],[-51.823,4.566],[-51.658,4.156],[-51.317,4.203],[-51.07,3.651],[-50.509,1.901],[-49.974,1.737],[-49.947,1.046],[-50.699,.223],[-50.388,-.078],[-48.62,-.235],[-48.584,-1.238],[-47.825,-.582],[-46.567,-.941],[-44.906,-1.552],[-44.418,-2.138],[-44.582,-2.691],[-43.419,-2.383],[-41.473,-2.912],[-39.979,-2.873],[-38.5,-3.701],[-37.223,-4.821],[-36.453,-5.109],[-35.598,-5.149],[-35.235,-5.465],[-34.896,-6.738],[-34.73,-7.343],[-35.128,-8.996],[-35.637,-9.649],[-37.047,-11.041],[-37.684,-12.171],[-38.424,-13.038],[-38.674,-13.058],[-38.953,-13.793],[-38.882,-15.667],[-39.161,-17.208],[-39.267,-17.868],[-39.583,-18.262],[-39.761,-19.599],[-40.775,-20.904],[-40.945,-21.937],[-41.754,-22.371],[-41.988,-22.97],[-43.075,-22.968],[-44.648,-23.352],[-45.352,-23.797],[-46.472,-24.089],[-47.649,-24.885],[-48.495,-25.877],[-48.641,-26.624],[-48.475,-27.176],[-48.661,-28.186],[-48.888,-28.674],[-49.587,-29.224],[-50.697,-30.984],[-51.576,-31.778],[-52.256,-32.245],[-52.712,-33.197],[-53.374,-33.768],[-53.806,-34.397],[-54.936,-34.953],[-55.674,-34.753],[-56.215,-34.86],[-57.14,-34.43],[-57.818,-34.463],[-58.427,-33.909],[-58.495,-34.432],[-57.226,-35.288],[-57.362,-35.977],[-56.737,-36.413],[-56.788,-36.901],[-57.749,-38.184],[-59.232,-38.72],[-61.237,-38.928],[-62.336,-38.828],[-62.126,-39.424],[-62.331,-40.173],[-62.146,-40.677],[-62.746,-41.029],[-63.771,-41.167],[-64.732,-40.803],[-65.118,-41.064],[-64.979,-42.058],[-64.303,-42.359],[-63.756,-42.044],[-63.458,-42.563],[-64.379,-42.873],[-65.182,-43.495],[-65.329,-44.501],[-65.565,-45.037],[-66.51,-45.04],[-67.294,-45.552],[-67.581,-46.302],[-66.597,-47.034],[-65.641,-47.236],[-65.985,-48.133],[-67.166,-48.697],[-67.816,-49.87],[-68.729,-50.264],[-69.138,-50.732],[-68.815,-51.771],[-68.15,-52.35],[-68.571,-52.299],[-69.461,-52.292],[-69.943,-52.538],[-70.845,-52.899],[-71.006,-53.833],[-71.43,-53.856],[-72.558,-53.531],[-73.703,-52.835],[-74.947,-52.263],[-75.26,-51.629],[-74.977,-51.043],[-75.48,-50.378],[-75.608,-48.674],[-75.183,-47.712],[-74.127,-46.939],[-75.644,-46.648],[-74.692,-45.764],[-74.352,-44.103],[-73.24,-44.455],[-72.718,-42.383],[-73.389,-42.117],[-73.701,-43.366],[-74.332,-43.225],[-74.018,-41.795],[-73.677,-39.942],[-73.218,-39.259],[-73.505,-38.283],[-73.588,-37.156],[-73.167,-37.124],[-72.553,-35.509],[-71.862,-33.909],[-71.438,-32.419],[-71.669,-30.921],[-71.37,-30.096],[-71.49,-28.861],[-70.905,-27.64],[-70.725,-25.706],[-70.404,-23.629],[-70.091,-21.393],[-70.164,-19.756],[-70.372,-18.348],[-71.375,-17.774],[-71.462,-17.363],[-73.445,-16.359],[-75.238,-15.266],[-76.009,-14.649],[-76.423,-13.823],[-76.259,-13.535],[-77.106,-12.223],[-78.092,-10.378],[-79.037,-8.387],[-79.446,-7.931],[-79.76,-7.194],[-80.537,-6.542],[-81.25,-6.137],[-80.926,-5.69],[-81.411,-4.737],[-81.1,-4.036],[-80.302,-3.405],[-79.77,-2.657],[-79.987,-2.221],[-80.369,-2.685],[-80.968,-2.247],[-80.765,-1.965],[-80.934,-1.057],[-80.583,-.907],[-80.399,-.284],[-80.021,.36],[-80.091,.768],[-79.543,.983],[-78.855,1.381],[-78.991,1.691],[-78.618,1.766],[-78.662,2.267],[-78.428,2.63],[-77.932,2.697],[-77.51,3.325],[-77.128,3.85],[-77.496,4.088],[-77.308,4.668],[-77.533,5.583],[-77.319,5.845],[-77.477,6.691],[-77.882,7.224],[-78.215,7.512],[-78.429,8.052],[-78.182,8.319],[-78.435,8.388],[-78.622,8.718],[-79.12,8.996],[-79.558,8.932],[-79.76,8.584],[-80.164,8.333],[-80.383,8.299],[-80.481,8.09],[-80.004,7.547],[-80.277,7.42],[-80.421,7.271],[-80.886,7.221],[-81.06,7.818],[-81.19,7.648],[-81.519,7.707],[-81.721,8.109],[-82.131,8.175],[-82.391,8.292],[-82.82,8.291],[-82.851,8.074],[-82.966,8.225],[-83.508,8.447],[-83.711,8.657],[-83.596,8.831],[-83.633,9.052],[-83.91,9.291],[-84.303,9.487],[-84.648,9.615],[-84.713,9.908],[-84.976,10.087],[-84.911,9.796],[-85.111,9.557],[-85.339,9.834],[-85.661,9.933],[-85.797,10.135],[-85.792,10.439],[-85.659,10.754],[-85.942,10.895],[-85.713,11.089],[-86.058,11.404],[-86.526,11.807],[-86.746,12.144],[-87.167,12.458],[-87.669,12.91],[-87.557,13.065],[-87.392,12.914],[-87.317,12.985],[-87.489,13.297],[-87.793,13.385],[-87.904,13.149],[-88.483,13.164],[-88.843,13.26],[-89.257,13.459],[-89.812,13.521],[-90.096,13.735],[-90.609,13.91],[-91.232,13.928],[-91.69,14.126],[-92.228,14.539],[-93.359,15.615],[-93.875,15.94],[-94.692,16.201],[-95.25,16.128],[-96.053,15.752],[-96.557,15.654],[-97.264,15.917],[-98.013,16.107],[-98.948,16.566],[-99.697,16.706],[-100.83,17.171],[-101.666,17.649],[-101.919,17.916],[-102.478,17.976],[-103.501,18.292],[-103.917,18.749],[-104.992,19.316],[-105.493,19.947],[-105.731,20.434],[-105.398,20.532],[-105.501,20.817],[-105.271,21.076],[-105.266,21.422],[-105.603,21.871],[-105.693,22.269],[-106.029,22.774],[-106.91,23.768],[-107.915,24.549],[-108.402,25.172],[-109.26,25.581],[-109.444,25.825],[-109.292,26.443],[-109.801,26.676],[-110.392,27.162],[-110.641,27.86],[-111.179,27.941],[-111.76,28.468],[-112.228,28.955],[-112.272,29.267],[-112.81,30.021],[-113.164,30.787],[-113.149,31.171],[-113.872,31.568],[-114.206,31.524],[-114.776,31.8],[-114.937,31.393],[-114.771,30.914],[-114.674,30.163],[-114.331,29.75],[-113.589,29.062],[-113.424,28.826],[-113.272,28.755],[-113.14,28.411],[-112.962,28.425],[-112.762,27.78],[-112.458,27.526],[-112.245,27.172],[-111.617,26.663],[-111.285,25.733],[-110.988,25.295],[-110.71,24.826],[-110.655,24.299],[-110.173,24.266],[-109.772,23.811],[-109.409,23.365],[-109.433,23.186],[-109.854,22.818],[-110.031,22.823],[-110.295,23.431],[-110.95,24.001],[-111.671,24.484],[-112.182,24.739],[-112.149,25.47],[-112.301,26.012],[-112.777,26.322],[-113.465,26.768],[-113.597,26.64],[-113.849,26.9],[-114.466,27.142],[-115.055,27.723],[-114.982,27.798],[-114.57,27.742],[-114.199,28.115],[-114.162,28.566],[-114.932,29.279],[-115.519,29.556],[-115.887,30.181],[-116.258,30.836],[-116.721,31.636],[-117.128,32.535],[-117.296,33.046],[-117.944,33.621],[-118.411,33.741],[-118.52,34.028],[-119.081,34.078],[-119.439,34.349],[-120.368,34.447],[-120.623,34.609],[-120.744,35.157],[-121.715,36.162],[-122.547,37.552],[-122.512,37.784],[-122.953,38.114],[-123.727,38.952],[-123.865,39.767],[-124.398,40.313],[-124.179,41.142],[-124.214,42],[-124.533,42.766],[-124.142,43.708],[-123.899,45.523],[-124.08,46.865],[-124.396,47.72],[-124.687,48.185],[-124.566,48.38],[-123.12,48.04],[-122.587,47.096],[-122.34,47.36],[-122.5,48.18],[-122.84,49],[-122.974,49.003],[-124.91,49.985],[-125.625,50.417],[-127.436,50.831],[-127.993,51.716],[-127.85,52.33],[-129.13,52.755],[-129.305,53.562],[-130.515,54.288],[-130.536,54.803],[-131.086,55.179],[-131.967,55.498],[-132.25,56.37],[-133.539,57.179],[-134.078,58.123],[-135.038,58.188],[-136.628,58.212],[-137.8,58.5],[-139.868,59.538],[-140.825,59.727],[-142.574,60.084],[-143.959,59.999],[-145.925,60.459],[-147.114,60.885],[-148.224,60.673],[-148.018,59.978],[-148.571,59.914],[-149.728,59.706],[-150.608,59.368],[-151.716,59.156],[-151.859,59.745],[-151.41,60.726],[-150.347,61.034],[-150.621,61.284],[-151.896,60.727],[-152.578,60.062],[-154.019,59.35],[-153.287,58.865],[-154.232,58.146],[-155.307,57.728],[-156.308,57.423],[-156.556,56.98],[-158.117,56.464],[-158.433,55.994],[-159.603,55.567],[-160.29,55.644],[-161.223,55.365],[-162.238,55.024],[-163.069,54.69],[-164.786,54.404],[-164.942,54.572],[-163.848,55.039],[-162.87,55.348],[-161.804,55.895],[-160.564,56.008],[-160.07,56.418],[-158.684,57.017],[-158.461,57.217],[-157.723,57.57],[-157.55,58.328],[-157.042,58.919],[-158.195,58.616],[-158.517,58.788],[-159.059,58.424],[-159.712,58.932],[-159.981,58.573],[-160.355,59.071],[-161.355,58.671],[-161.969,58.672],[-162.055,59.267],[-161.874,59.634],[-162.518,59.99],[-163.818,59.798],[-164.662,60.268],[-165.346,60.508],[-165.351,61.074],[-166.121,61.5],[-165.734,62.075],[-164.919,62.633],[-164.563,63.146],[-163.753,63.219],[-163.067,63.06],[-162.26,63.542],[-161.534,63.456],[-160.773,63.766],[-160.958,64.223],[-161.518,64.403],[-160.778,64.789],[-161.392,64.777],[-162.453,64.56],[-162.758,64.339],[-163.546,64.559],[-164.961,64.447],[-166.425,64.687],[-166.845,65.089],[-168.11,65.67],[-166.705,66.088],[-164.475,66.577],[-163.653,66.577],[-163.789,66.077],[-161.678,66.116],[-162.49,66.735],[-163.72,67.117],[-164.431,67.616],[-165.39,68.043],[-166.764,68.359],[-166.205,68.883],[-164.431,68.916],[-163.169,69.371],[-162.93,69.858],[-161.909,70.333],[-160.935,70.448],[-159.039,70.892],[-158.12,70.825],[-156.581,71.358],[-155.068,71.148],[-154.344,70.696],[-153.9,70.89],[-152.21,70.83],[-152.27,70.6],[-150.74,70.43],[-149.72,70.53],[-147.613,70.214],[-145.69,70.12],[-144.92,69.99],[-143.589,70.153],[-142.073,69.852],[-140.986,69.712],[-139.12,69.471],[-137.546,68.99],[-136.504,68.898],[-135.626,69.315],[-134.415,69.628],[-132.929,69.505],[-131.431,69.945],[-129.795,70.194],[-129.108,69.779],[-128.362,70.013],[-128.138,70.484],[-127.447,70.377],[-125.756,69.481],[-124.425,70.159],[-124.29,69.4],[-123.061,69.564],[-122.683,69.856],[-121.472,69.798],[-119.943,69.378],[-117.603,69.011],[-116.226,68.841],[-115.247,68.906],[-113.898,68.399],[-115.305,67.903],[-113.497,67.688],[-110.798,67.806],[-109.946,67.981],[-108.88,67.382],[-107.792,67.888],[-108.813,68.312],[-108.167,68.654],[-106.95,68.7],[-106.15,68.8],[-105.343,68.561],[-104.338,68.018],[-103.221,68.098],[-101.454,67.647],[-99.902,67.806],[-98.443,67.782],[-98.559,68.404],[-97.669,68.579],[-96.12,68.24],[-96.126,67.294],[-95.489,68.091],[-94.685,68.064],[-94.233,69.069],[-95.304,69.686],[-96.471,70.09],[-96.391,71.195],[-95.209,71.92],[-93.89,71.76],[-92.878,71.319],[-91.52,70.191],[-92.407,69.7],[-90.547,69.498]]],[[[-114.167,73.121],[-114.666,72.653],[-112.441,72.955],[-111.05,72.45],[-109.92,72.961],[-109.007,72.633],[-108.188,71.651],[-107.686,72.065],[-108.396,73.09],[-107.516,73.236],[-106.523,73.076],[-105.402,72.673],[-104.775,71.698],[-104.465,70.993],[-102.785,70.498],[-100.981,70.024],[-101.089,69.584],[-102.731,69.504],[-102.093,69.12],[-102.43,68.753],[-104.24,68.91],[-105.96,69.18],[-107.123,69.119],[-109,68.78],[-111.967,68.604],[-113.313,68.536],[-113.855,69.007],[-115.22,69.28],[-116.108,69.168],[-117.34,69.96],[-116.675,70.067],[-115.131,70.237],[-113.721,70.192],[-112.416,70.366],[-114.35,70.6],[-116.487,70.52],[-117.905,70.541],[-118.432,70.909],[-116.113,71.309],[-117.656,71.295],[-119.402,71.559],[-118.563,72.308],[-117.866,72.706],[-115.189,73.315],[-114.167,73.121]]],[[[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6],[-105.26,73.64],[-104.5,73.42]]],[[[-76.34,73.103],[-76.251,72.826],[-77.314,72.856],[-78.392,72.877],[-79.486,72.742],[-79.776,72.803],[-80.876,73.333],[-80.834,73.693],[-80.353,73.76],[-78.064,73.652],[-76.34,73.103]]],[[[-86.562,73.157],[-85.774,72.534],[-84.85,73.34],[-82.316,73.751],[-80.6,72.717],[-80.749,72.062],[-78.771,72.352],[-77.825,72.75],[-75.606,72.244],[-74.229,71.767],[-74.099,71.331],[-72.242,71.557],[-71.2,70.92],[-68.786,70.525],[-67.915,70.122],[-66.969,69.186],[-68.805,68.72],[-66.45,68.067],[-64.862,67.848],[-63.425,66.928],[-61.852,66.862],[-62.163,66.16],[-63.918,64.999],[-65.149,65.426],[-66.721,66.388],[-68.015,66.263],[-68.141,65.69],[-67.09,65.108],[-65.732,64.648],[-65.32,64.383],[-64.669,63.393],[-65.014,62.674],[-66.275,62.945],[-68.783,63.746],[-67.37,62.884],[-66.328,62.28],[-66.166,61.931],[-68.877,62.33],[-71.023,62.911],[-72.235,63.398],[-71.886,63.68],[-73.378,64.194],[-74.834,64.679],[-74.819,64.389],[-77.71,64.23],[-78.556,64.573],[-77.897,65.309],[-76.018,65.327],[-73.96,65.455],[-74.294,65.812],[-73.945,66.311],[-72.651,67.285],[-72.926,67.727],[-73.312,68.069],[-74.843,68.555],[-76.869,68.895],[-76.229,69.148],[-77.287,69.77],[-78.169,69.826],[-78.957,70.167],[-79.492,69.872],[-81.305,69.743],[-84.945,69.967],[-87.06,70.26],[-88.682,70.411],[-89.513,70.762],[-88.468,71.218],[-89.888,71.223],[-90.205,72.235],[-89.437,73.129],[-88.408,73.538],[-85.826,73.804],[-86.562,73.157]]],[[[-100.356,73.844],[-99.164,73.633],[-97.38,73.76],[-97.12,73.47],[-98.054,72.991],[-96.54,72.56],[-96.72,71.66],[-98.36,71.273],[-99.323,71.356],[-100.015,71.738],[-102.5,72.51],[-102.48,72.83],[-100.438,72.706],[-101.54,73.36],[-100.356,73.844]]],[[[143.604,73.212],[142.088,73.205],[140.038,73.317],[139.863,73.37],[140.812,73.765],[142.062,73.858],[143.483,73.475],[143.604,73.212]]],[[[-93.196,72.772],[-94.269,72.025],[-95.41,72.062],[-96.034,72.94],[-96.018,73.437],[-95.496,73.862],[-94.504,74.135],[-92.42,74.1],[-90.51,73.857],[-92.004,72.966],[-93.196,72.772]]],[[[-120.46,71.4],[-123.092,70.902],[-123.62,71.34],[-125.929,71.869],[-125.593,72.195],[-124.807,73.023],[-123.94,73.68],[-124.918,74.293],[-121.538,74.449],[-120.11,74.241],[-117.556,74.186],[-116.584,73.896],[-115.511,73.475],[-116.768,73.223],[-119.22,72.52],[-120.46,71.82],[-120.46,71.4]]],[[[150.732,75.084],[149.576,74.689],[147.977,74.778],[146.119,75.173],[146.358,75.497],[148.222,75.346],[150.732,75.084]]],[[[-93.613,74.98],[-94.157,74.592],[-95.609,74.667],[-96.821,74.928],[-96.289,75.378],[-94.851,75.647],[-93.978,75.296],[-93.613,74.98]]],[[[145.086,75.563],[144.3,74.82],[140.614,74.848],[138.955,74.611],[136.974,75.262],[137.512,75.949],[138.831,76.137],[141.472,76.093],[145.086,75.563]]],[[[-98.5,76.72],[-97.736,76.257],[-97.704,75.743],[-98.16,75],[-99.809,74.897],[-100.884,75.057],[-100.863,75.641],[-102.502,75.564],[-102.566,76.337],[-101.49,76.305],[-99.983,76.646],[-98.577,76.589],[-98.5,76.72]]],[[[-108.211,76.202],[-107.819,75.846],[-106.929,76.013],[-105.881,75.969],[-105.705,75.48],[-106.313,75.005],[-109.7,74.85],[-112.223,74.417],[-113.744,74.394],[-113.871,74.72],[-111.794,75.162],[-116.312,75.043],[-117.71,75.222],[-116.346,76.199],[-115.405,76.479],[-112.591,76.141],[-110.814,75.549],[-109.067,75.473],[-110.497,76.43],[-109.581,76.794],[-108.549,76.678],[-108.211,76.202]]],[[[57.536,70.72],[56.945,70.633],[53.677,70.763],[53.412,71.207],[51.602,71.475],[51.456,72.015],[52.478,72.229],[52.444,72.775],[54.428,73.628],[53.508,73.75],[55.902,74.627],[55.632,75.081],[57.869,75.609],[61.17,76.252],[64.498,76.439],[66.211,76.81],[68.157,76.94],[68.852,76.545],[68.181,76.234],[64.637,75.738],[61.584,75.261],[58.477,74.309],[56.987,73.333],[55.419,72.371],[55.623,71.541],[57.536,70.72]]],[[[-94.684,77.098],[-93.574,76.776],[-91.605,76.779],[-90.742,76.45],[-90.97,76.074],[-89.822,75.848],[-89.187,75.61],[-87.838,75.566],[-86.379,75.482],[-84.79,75.699],[-82.753,75.784],[-81.129,75.714],[-80.058,75.337],[-79.834,74.923],[-80.458,74.657],[-81.949,74.442],[-83.229,74.564],[-86.097,74.41],[-88.15,74.392],[-89.765,74.516],[-92.422,74.838],[-92.768,75.387],[-92.89,75.883],[-93.894,76.319],[-95.962,76.441],[-97.121,76.751],[-96.745,77.161],[-94.684,77.098]]],[[[-116.199,77.645],[-116.336,76.877],[-117.106,76.53],[-118.04,76.481],[-119.899,76.053],[-121.5,75.9],[-122.855,76.117],[-122.855,76.117],[-121.158,76.865],[-119.104,77.512],[-117.57,77.498],[-116.199,77.645]]],[[[106.97,76.974],[107.24,76.48],[108.154,76.723],[111.077,76.71],[113.331,76.222],[114.134,75.848],[113.885,75.328],[112.779,75.032],[110.151,74.477],[109.4,74.18],[110.64,74.04],[112.119,73.788],[113.019,73.977],[113.53,73.335],[113.969,73.595],[115.568,73.753],[118.776,73.588],[119.02,73.12],[123.201,72.971],[123.258,73.735],[125.38,73.56],[126.977,73.565],[128.591,73.039],[129.052,72.399],[128.46,71.98],[129.716,71.193],[131.289,70.787],[132.253,71.836],[133.858,71.386],[135.562,71.655],[137.498,71.348],[138.234,71.628],[139.87,71.488],[139.148,72.416],[140.468,72.849],[149.5,72.2],[150.351,71.607],[152.969,70.842],[157.007,71.031],[158.998,70.867],[159.83,70.453],[159.709,69.722],[160.941,69.437],[162.279,69.642],[164.052,69.668],[165.94,69.472],[167.836,69.583],[169.578,68.694],[170.817,69.014],[170.008,69.653],[170.453,70.097],[173.644,69.818],[175.724,69.877],[178.6,69.4],[180,68.964],[180,64.98],[179.993,64.974],[178.707,64.535],[177.411,64.608],[178.313,64.076],[178.908,63.252],[179.37,62.983],[179.487,62.569],[179.228,62.304],[177.364,62.522],[174.569,61.769],[173.68,61.653],[172.15,60.95],[170.698,60.336],[170.331,59.882],[168.901,60.573],[166.295,59.789],[165.84,60.16],[164.877,59.732],[163.539,59.869],[163.217,59.211],[162.017,58.243],[162.053,57.839],[163.192,57.615],[163.058,56.159],[162.13,56.122],[161.701,55.286],[162.117,54.855],[160.369,54.344],[160.022,53.203],[158.531,52.959],[158.231,51.943],[156.79,51.011],[156.42,51.7],[155.992,53.159],[155.434,55.381],[155.914,56.768],[156.758,57.365],[156.81,57.832],[158.364,58.056],[160.151,59.315],[161.872,60.343],[163.67,61.141],[164.474,62.551],[163.258,62.466],[162.658,61.643],[160.122,60.544],[159.302,61.774],[156.721,61.435],[154.218,59.758],[155.044,59.145],[152.812,58.884],[151.266,58.781],[151.338,59.504],[149.784,59.656],[148.545,59.164],[145.487,59.336],[142.198,59.04],[138.958,57.088],[135.126,54.73],[136.702,54.604],[137.193,53.977],[138.165,53.755],[138.805,54.255],[139.901,54.19],[141.345,53.09],[141.379,52.239],[140.597,51.24],[140.513,50.045],[140.062,48.447],[138.555,47],[138.22,46.308],[136.862,45.143],[135.515,43.989],[134.87,43.398],[133.537,42.812],[132.906,42.799],[132.278,43.284],[130.936,42.553],[130.78,42.22],[130.4,42.28],[129.966,41.941],[129.667,41.601],[129.705,40.883],[129.188,40.662],[129.01,40.485],[128.633,40.19],[127.968,40.026],[127.534,39.757],[127.502,39.324],[127.385,39.214],[127.783,39.051],[128.35,38.612],[129.213,37.432],[129.461,36.784],[129.468,35.632],[129.091,35.083],[128.186,34.891],[127.386,34.476],[126.486,34.39],[126.374,34.935],[126.559,35.685],[126.117,36.726],[126.86,36.894],[126.175,37.75],[125.689,37.94],[125.568,37.752],[125.275,37.669],[125.24,37.857],[124.981,37.949],[124.712,38.108],[124.986,38.549],[125.222,38.666],[125.133,38.849],[125.387,39.388],[125.321,39.552],[124.737,39.66],[124.266,39.929],[122.868,39.638],[122.132,39.17],[121.055,38.898],[121.586,39.361],[121.377,39.75],[122.169,40.422],[121.641,40.946],[120.769,40.594],[119.64,39.898],[119.023,39.252],[118.043,39.204],[117.533,38.738],[118.06,38.062],[118.878,37.897],[118.912,37.448],[119.703,37.156],[120.823,37.87],[121.711,37.481],[122.358,37.455],[122.52,36.931],[121.104,36.651],[120.637,36.112],[119.665,35.61],[119.151,34.91],[120.227,34.36],[120.62,33.377],[121.229,32.46],[121.908,31.692],[121.892,30.949],[121.264,30.676],[121.503,30.143],[122.092,29.833],[121.938,29.018],[121.685,28.226],[121.126,28.136],[120.396,27.053],[119.586,25.741],[118.657,24.547],[117.282,23.625],[115.891,22.783],[114.764,22.668],[114.153,22.224],[113.807,22.548],[113.241,22.052],[111.844,21.55],[110.786,21.397],[110.444,20.341],[109.89,20.282],[109.628,21.008],[109.865,21.395],[108.523,21.715],[108.05,21.552],[106.715,20.697],[105.882,19.752],[105.662,19.058],[106.427,18.004],[107.362,16.698],[108.269,16.08],[108.877,15.277],[109.335,13.426],[109.2,11.667],[108.366,11.008],[107.221,10.365],[106.405,9.531],[105.158,8.6],[104.795,9.241],[105.076,9.919],[104.334,10.487],[103.497,10.633],[103.091,11.154],[102.585,12.187],[101.687,12.646],[100.832,12.627],[100.979,13.413],[100.098,13.407],[100.019,12.307],[99.479,10.846],[99.154,9.963],[99.222,9.239],[99.874,9.208],[100.28,8.295],[100.459,7.43],[101.017,6.857],[101.623,6.741],[102.141,6.222],[102.371,6.128],[102.962,5.524],[103.381,4.855],[103.439,4.182],[103.332,3.727],[103.43,3.383],[103.503,2.791],[103.855,2.516],[104.248,1.631],[104.229,1.293],[103.52,1.226],[102.574,1.967],[101.391,2.761],[101.274,3.27],[100.695,3.939],[100.557,4.767],[100.197,5.313],[100.306,6.041],[100.086,6.464],[99.691,6.848],[99.52,7.344],[98.988,7.908],[98.504,8.382],[98.34,7.794],[98.15,8.35],[98.259,8.974],[98.554,9.933],[98.457,10.675],[98.765,11.441],[98.428,12.033],[98.51,13.122],[98.104,13.641],[97.778,14.837],[97.597,16.101],[97.165,16.929],[96.506,16.427],[95.369,15.714],[94.808,15.804],[94.189,16.038],[94.534,17.277],[94.325,18.214],[93.541,19.367],[93.663,19.727],[93.078,19.855],[92.369,20.671],[92.083,21.192],[92.025,21.702],[91.835,22.183],[91.417,22.765],[90.496,22.805],[90.587,22.393],[90.273,21.836],[89.847,22.039],[89.702,21.857],[89.419,21.966],[89.032,22.056],[88.889,21.691],[88.208,21.703],[86.976,21.495],[87.033,20.743],[86.499,20.152],[85.06,19.479],[83.941,18.302],[83.189,17.671],[82.193,17.017],[82.191,16.557],[81.693,16.31],[80.792,15.952],[80.325,15.899],[80.025,15.136],[80.233,13.836],[80.286,13.006],[79.862,12.056],[79.858,10.357],[79.341,10.309],[78.885,9.546],[79.19,9.217],[78.278,8.933],[77.941,8.253],[77.54,7.966],[76.593,8.899],[76.13,10.3],[75.747,11.308],[75.396,11.781],[74.865,12.742],[74.617,13.993],[74.444,14.617],[73.534,15.991],[73.12,17.929],[72.821,19.208],[72.825,20.419],[72.631,21.356],[71.175,20.758],[70.471,20.877],[69.164,22.089],[69.645,22.451],[69.35,22.843],[68.177,23.692],[67.444,23.945],[67.146,24.664],[66.373,25.425],[64.531,25.237],[62.906,25.219],[61.497,25.078],[59.616,25.38],[58.526,25.61],[57.397,25.74],[56.971,26.966],[56.492,27.143],[55.724,26.965],[54.715,26.481],[53.493,26.813],[52.484,27.581],[51.521,27.866],[50.853,28.815],[50.115,30.148],[49.577,29.986],[48.941,30.317],[48.568,29.927],[47.974,29.976],[48.183,29.534],[48.094,29.306],[48.416,28.552],[48.808,27.69],[49.3,27.461],[49.471,27.11],[50.153,26.69],[50.213,26.277],[50.113,25.944],[50.24,25.608],[50.528,25.328],[50.661,25],[50.81,24.755],[50.744,25.482],[51.013,26.007],[51.286,26.115],[51.589,25.801],[51.607,25.216],[51.39,24.628],[51.58,24.245],[51.758,24.294],[51.794,24.02],[52.577,24.177],[53.404,24.151],[54.008,24.122],[54.693,24.798],[55.439,25.439],[56.071,26.055],[56.362,26.396],[56.486,26.309],[56.391,25.896],[56.261,25.715],[56.397,24.925],[56.845,24.242],[57.404,23.879],[58.137,23.748],[58.729,23.566],[59.18,22.992],[59.45,22.66],[59.808,22.534],[59.806,22.31],[59.442,21.714],[59.282,21.434],[58.861,21.114],[58.488,20.429],[58.034,20.482],[57.826,20.243],[57.666,19.736],[57.789,19.068],[57.695,18.945],[57.234,18.948],[56.61,18.574],[56.512,18.087],[56.284,17.876],[55.661,17.884],[55.27,17.632],[55.275,17.228],[54.791,16.951],[54.239,17.045],[53.57,16.708],[53.109,16.651],[52.385,16.383],[52.192,15.938],[52.168,15.597],[51.172,15.175],[49.575,14.709],[48.679,14.003],[48.239,13.948],[47.939,14.007],[47.354,13.592],[46.717,13.4],[45.878,13.348],[45.625,13.291],[45.406,13.027],[45.144,12.954],[44.99,12.7],[44.495,12.722],[44.175,12.586],[43.483,12.637],[43.223,13.221],[43.252,13.768],[43.088,14.063],[42.892,14.802],[42.605,15.213],[42.805,15.262],[42.703,15.719],[42.824,15.912],[42.779,16.348],[42.65,16.775],[42.348,17.076],[42.271,17.475],[41.755,17.833],[41.221,18.672],[40.939,19.487],[40.248,20.175],[39.802,20.339],[39.14,21.292],[39.024,21.987],[39.066,22.58],[38.493,23.688],[38.024,24.079],[37.484,24.286],[37.155,24.859],[37.209,25.084],[36.932,25.603],[36.64,25.826],[36.249,26.57],[35.64,27.377],[35.13,28.063],[34.632,28.058],[34.788,28.607],[34.832,28.958],[34.956,29.357],[34.923,29.501],[34.642,29.099],[34.427,28.344],[34.154,27.823],[33.922,27.649],[33.588,27.971],[33.137,28.418],[32.423,29.851],[32.32,29.76],[32.735,28.705],[33.349,27.7],[34.105,26.142],[34.474,25.599],[34.795,25.034],[35.693,23.927],[35.494,23.753],[35.526,23.102],[36.691,22.205],[36.866,22],[37.189,21.019],[36.969,20.838],[37.115,19.808],[37.482,18.614],[37.863,18.368],[38.41,17.998],[38.991,16.841],[39.266,15.923],[39.814,15.436],[41.179,14.491],[41.735,13.921],[42.277,13.344],[42.59,13],[43.081,12.7],[43.318,12.39],[43.286,11.975],[42.716,11.736],[43.145,11.462],[43.471,11.278],[43.667,10.864],[44.118,10.446],[44.614,10.442],[45.557,10.698],[46.646,10.817],[47.526,11.127],[48.022,11.193],[48.379,11.375],[48.948,11.411],[49.268,11.43],[49.729,11.579],[50.259,11.68],[50.732,12.022],[51.111,12.025],[51.134,11.748],[51.042,11.167],[51.045,10.641],[50.834,10.28],[50.552,9.199],[50.071,8.082],[49.453,6.805],[48.594,5.339],[47.741,4.219],[46.565,2.855],[45.564,2.046],[44.068,1.053],[43.136,.292],[42.042,-.919],[41.811,-1.446],[41.585,-1.683],[40.885,-2.083],[40.638,-2.5],[40.263,-2.573],[40.121,-3.278],[39.8,-3.681],[39.605,-4.346],[39.202,-4.677],[38.74,-5.909],[38.8,-6.476],[39.44,-6.84],[39.47,-7.1],[39.195,-7.704],[39.252,-8.008],[39.187,-8.485],[39.536,-9.112],[39.95,-10.098],[40.317,-10.317],[40.479,-10.765],[40.437,-11.762],[40.561,-12.639],[40.6,-14.202],[40.776,-14.692],[40.477,-15.406],[40.089,-16.101],[39.453,-16.721],[38.538,-17.101],[37.411,-17.586],[36.281,-18.66],[35.896,-18.842],[35.198,-19.553],[34.786,-19.784],[34.702,-20.497],[35.176,-21.254],[35.373,-21.841],[35.386,-22.14],[35.563,-22.09],[35.534,-23.071],[35.372,-23.535],[35.607,-23.706],[35.459,-24.123],[35.041,-24.478],[34.216,-24.816],[33.013,-25.357],[32.575,-25.727],[32.66,-26.148],[32.916,-26.216],[32.83,-26.742],[32.58,-27.47],[32.462,-28.301],[32.203,-28.752],[31.521,-29.257],[31.326,-29.402],[30.902,-29.91],[30.623,-30.424],[30.056,-31.14],[28.925,-32.172],[28.22,-32.772],[27.465,-33.227],[26.419,-33.615],[25.91,-33.667],[25.781,-33.945],[25.173,-33.797],[24.678,-33.987],[23.594,-33.794],[22.988,-33.916],[22.574,-33.864],[21.543,-34.259],[20.689,-34.417],[20.071,-34.795],[19.617,-34.819],[19.193,-34.463],[18.855,-34.444],[18.425,-33.998],[18.378,-34.136],[18.245,-33.868],[18.25,-33.281],[17.925,-32.611],[18.248,-32.429],[18.222,-31.662],[17.567,-30.726],[17.065,-29.879],[17.063,-29.876],[16.345,-28.577],[15.602,-27.821],[15.211,-27.091],[14.99,-26.117],[14.743,-25.393],[14.408,-23.853],[14.386,-22.657],[14.258,-22.111],[13.869,-21.699],[13.352,-20.873],[12.827,-19.673],[12.609,-19.045],[11.795,-18.069],[11.734,-17.302],[11.64,-16.673],[11.779,-15.794],[12.124,-14.878],[12.176,-14.449],[12.5,-13.548],[12.739,-13.138],[13.313,-12.484],[13.634,-12.039],[13.739,-11.298],[13.687,-10.731],[13.387,-10.374],[13.121,-9.767],[12.875,-9.167],[12.929,-8.959],[13.237,-8.563],[12.933,-7.596],[12.728,-6.927],[12.227,-6.294],[12.323,-6.1],[12.182,-5.79],[11.915,-5.038],[11.094,-3.979],[10.066,-2.969],[9.405,-2.144],[8.798,-1.111],[8.83,-.779],[9.049,-.459],[9.291,.269],[9.493,1.01],[9.306,1.161],[9.649,2.284],[9.795,3.073],[9.404,3.734],[8.948,3.904],[8.745,4.352],[8.489,4.496],[8.5,4.772],[7.462,4.412],[7.083,4.465],[6.698,4.241],[5.898,4.263],[5.363,4.888],[5.034,5.612],[4.326,6.271],[3.574,6.258],[2.692,6.259],[1.865,6.142],[1.06,5.929],[-.508,5.344],[-1.064,5],[-1.965,4.711],[-2.856,4.995],[-3.311,4.984],[-4.009,5.18],[-4.65,5.168],[-5.834,4.994],[-6.529,4.705],[-7.519,4.338],[-7.712,4.365],[-7.974,4.356],[-9.005,4.833],[-9.913,5.594],[-10.765,6.141],[-11.439,6.786],[-11.708,6.86],[-12.428,7.263],[-12.949,7.799],[-13.124,8.164],[-13.247,8.903],[-13.685,9.495],[-14.074,9.886],[-14.33,10.016],[-14.58,10.214],[-14.693,10.656],[-14.839,10.877],[-15.13,11.041],[-15.664,11.458],[-16.085,11.525],[-16.315,11.807],[-16.309,11.959],[-16.614,12.171],[-16.677,12.385],[-16.841,13.151],[-16.714,13.595],[-17.126,14.373],[-17.625,14.73],[-17.185,14.919],[-16.701,15.622],[-16.463,16.135],[-16.55,16.674],[-16.271,17.167],[-16.146,18.109],[-16.257,19.097],[-16.378,19.594],[-16.278,20.093],[-16.536,20.568],[-17.063,21],[-17.02,21.422],[-16.973,21.886],[-16.589,22.158],[-16.262,22.679],[-16.326,23.018],[-15.983,23.724],[-15.426,24.359],[-15.089,24.52],[-14.825,25.104],[-14.801,25.636],[-14.44,26.255],[-13.774,26.619],[-13.14,27.64],[-12.619,28.038],[-11.689,28.149],[-10.901,28.832],[-10.4,29.099],[-9.565,29.934],[-9.815,31.178],[-9.435,32.038],[-9.301,32.565],[-8.657,33.24],[-7.654,33.697],[-6.912,34.11],[-6.244,35.146],[-5.93,35.76],[-5.194,35.755],[-4.591,35.331],[-3.64,35.4],[-2.604,35.179],[-2.17,35.169],[-1.209,35.715],[-.127,35.889],[.504,36.301],[1.467,36.606],[3.162,36.784],[4.816,36.865],[5.32,36.716],[6.262,37.111],[7.331,37.119],[7.737,36.886],[8.421,36.946],[9.51,37.35],[10.21,37.23],[10.181,36.724],[11.029,37.092],[11.1,36.9],[10.6,36.41],[10.593,35.948],[10.94,35.699],[10.808,34.833],[10.15,34.331],[10.34,33.786],[10.857,33.769],[11.109,33.293],[11.489,33.137],[12.663,32.793],[13.083,32.879],[13.919,32.712],[15.246,32.265],[15.714,31.376],[16.612,31.182],[18.021,30.763],[19.086,30.266],[19.574,30.526],[20.053,30.986],[19.82,31.752],[20.134,32.238],[20.854,32.707],[21.543,32.843],[22.896,32.638],[23.237,32.192],[23.609,32.187],[23.927,32.017],[24.921,31.899],[25.165,31.569],[26.495,31.586],[27.458,31.321],[28.451,31.026],[28.914,30.87],[29.683,31.187],[30.095,31.474],[30.977,31.556],[31.688,31.43],[31.961,30.934],[32.193,31.26],[32.994,31.024],[33.773,30.968],[34.266,31.219],[34.557,31.549],[34.488,31.606],[34.753,32.073],[34.956,32.828],[35.099,33.081],[35.126,33.091],[35.482,33.906],[35.98,34.61],[35.998,34.645],[35.905,35.41],[36.15,35.821],[35.782,36.275],[36.161,36.651],[35.551,36.565],[34.714,36.795],[34.027,36.22],[32.509,36.107],[31.7,36.644],[30.622,36.678],[30.391,36.263],[29.7,36.144],[28.733,36.677],[27.641,36.659],[27.049,37.654],[26.318,38.208],[26.805,38.986],[26.171,39.464],[27.28,40.42],[28.82,40.46],[29.24,41.22],[31.146,41.088],[32.348,41.736],[33.513,42.019],[35.168,42.04],[36.913,41.336],[38.348,40.949],[39.513,41.103],[40.373,41.014],[41.554,41.536],[41.703,41.963],[41.453,42.645],[40.875,43.014],[40.321,43.129],[39.955,43.435],[38.68,44.28],[37.539,44.657],[36.675,45.245],[37.403,45.404],[38.233,46.241],[37.674,46.637],[39.148,47.045],[39.121,47.263],[38.224,47.102],[37.425,47.022],[36.76,46.699],[35.824,46.646],[34.962,46.273],[35.021,45.651],[35.51,45.41],[36.53,45.47],[36.335,45.113],[35.24,44.94],[33.883,44.362],[33.326,44.565],[33.547,45.035],[32.454,45.328],[32.631,45.519],[33.588,45.852],[33.299,46.081],[31.744,46.333],[31.675,46.706],[30.749,46.583],[30.378,46.032],[29.603,45.293],[29.627,45.036],[29.142,44.82],[28.838,44.914],[28.558,43.708],[28.039,43.293],[27.674,42.578],[27.997,42.008],[28.115,41.623],[28.989,41.3],[28.807,41.055],[27.619,41],[27.193,40.691],[26.358,40.152],[26.043,40.618],[26.057,40.824],[25.448,40.852],[24.926,40.947],[23.715,40.687],[24.408,40.125],[23.9,39.962],[23.343,39.961],[22.814,40.476],[22.626,40.257],[22.85,39.659],[23.35,39.19],[22.973,38.971],[23.53,38.51],[24.025,38.22],[24.04,37.655],[23.115,37.92],[23.41,37.41],[22.775,37.305],[23.154,36.422],[22.49,36.41],[21.67,36.845],[21.295,37.645],[21.12,38.31],[20.73,38.77],[20.218,39.34],[20.15,39.625],[19.98,39.695],[19.96,39.915],[19.406,40.251],[19.319,40.727],[19.404,41.409],[19.54,41.72],[19.372,41.878],[19.162,41.955],[18.882,42.281],[18.45,42.48],[17.51,42.85],[16.93,43.21],[16.016,43.507],[15.175,44.243],[15.376,44.318],[14.92,44.739],[14.902,45.076],[14.259,45.234],[13.952,44.802],[13.657,45.137],[13.68,45.484],[13.715,45.5],[13.938,45.591],[13.142,45.737],[12.329,45.382],[12.384,44.885],[12.261,44.601],[12.589,44.091],[13.527,43.588],[14.03,42.761],[15.143,41.955],[15.926,41.961],[16.17,41.74],[15.889,41.541],[16.785,41.18],[17.519,40.877],[18.377,40.356],[18.48,40.169],[18.294,39.811],[17.739,40.278],[16.87,40.442],[16.449,39.795],[17.172,39.425],[17.053,38.903],[16.635,38.844],[16.101,37.986],[15.684,37.909],[15.688,38.215],[15.892,38.751],[16.109,38.964],[15.719,39.544],[15.414,40.048],[14.998,40.173],[14.703,40.605],[14.061,40.786],[13.628,41.188],[12.888,41.253],[12.107,41.705],[11.192,42.356],[10.512,42.932],[10.2,43.92],[9.703,44.036],[8.889,44.366],[8.429,44.231],[7.851,43.767],[7.435,43.694],[6.529,43.129],[4.557,43.4],[3.101,43.075],[2.986,42.473],[3.039,41.892],[2.092,41.226],[.81,41.015],[.721,40.678],[.107,40.124],[-.279,39.31],[.111,38.739],[-.467,38.292],[-.683,37.642],[-1.438,37.443],[-2.146,36.674],[-3.416,36.659],[-4.369,36.678],[-4.995,36.325],[-5.377,35.947],[-5.866,36.03],[-6.237,36.368],[-6.52,36.943],[-7.454,37.098],[-7.856,36.838],[-8.383,36.979],[-8.899,36.869],[-8.746,37.651],[-8.84,38.266],[-9.287,38.359],[-9.526,38.737],[-9.447,39.392],[-9.048,39.755],[-8.977,40.159],[-8.769,40.761],[-8.791,41.184],[-8.991,41.544],[-9.035,41.881],[-8.984,42.593],[-9.393,43.027],[-7.978,43.748],[-6.755,43.568],[-5.412,43.574],[-4.348,43.404],[-3.518,43.456],[-1.901,43.423],[-1.384,44.023],[-1.194,46.015],[-2.226,47.065],[-2.963,47.57],[-4.492,47.955],[-4.592,48.684],[-3.296,48.902],[-1.617,48.644],[-1.933,49.776],[-.989,49.347],[1.339,50.127],[1.639,50.947],[2.513,51.148],[3.315,51.346],[3.83,51.62],[4.706,53.092],[6.074,53.51],[6.905,53.482],[7.101,53.694],[7.936,53.748],[8.122,53.528],[8.801,54.021],[8.572,54.396],[8.526,54.963],[8.12,55.518],[8.09,56.54],[8.257,56.81],[8.544,57.11],[9.425,57.172],[9.776,57.448],[10.58,57.73],[10.546,57.216],[10.25,56.89],[10.37,56.61],[10.912,56.459],[10.668,56.081],[10.37,56.19],[9.65,55.47],[9.922,54.983],[9.94,54.597],[10.95,54.364],[10.94,54.009],[11.956,54.196],[12.518,54.471],[13.648,54.075],[14.12,53.757],[14.803,54.051],[16.364,54.513],[17.623,54.852],[18.621,54.683],[18.696,54.439],[19.661,54.426],[19.888,54.866],[21.268,55.19],[21.056,56.031],[21.091,56.784],[21.582,57.412],[22.524,57.753],[23.318,57.006],[24.121,57.026],[24.313,57.794],[24.429,58.383],[24.061,58.258],[23.427,58.613],[23.34,59.187],[24.604,59.466],[25.864,59.611],[26.949,59.446],[27.981,59.476],[29.118,60.028],[28.07,60.503],[26.255,60.424],[24.497,60.057],[22.87,59.846],[22.291,60.392],[21.322,60.72],[21.545,61.705],[21.059,62.607],[21.536,63.19],[22.443,63.818],[24.731,64.902],[25.398,65.112],[25.294,65.534],[23.904,66.007],[22.183,65.724],[21.214,65.026],[21.37,64.414],[19.779,63.61],[17.848,62.75],[17.12,61.341],[17.831,60.637],[18.788,60.082],[17.869,58.954],[16.829,58.72],[16.448,57.041],[15.88,56.104],[14.667,56.201],[14.101,55.408],[12.943,55.362],[12.625,56.307],[11.788,57.442],[11.027,58.856],[10.357,59.47],[8.382,58.313],[7.049,58.079],[5.666,58.588],[5.308,59.663],[4.992,61.971],[5.913,62.615],[8.554,63.454],[10.528,64.486],[12.358,65.88],[14.761,67.811],[16.436,68.563],[19.184,69.818],[21.378,70.255],[23.024,70.202],[24.547,71.031],[26.37,70.986],[28.166,71.185],[31.294,70.454],[30.005,70.186],[31.101,69.558],[32.133,69.906],[33.776,69.302],[36.514,69.063],[40.292,67.932],[41.06,67.457],[41.126,66.792],[40.016,66.266],[38.383,66],[33.919,66.76],[33.185,66.633],[34.815,65.9],[34.944,64.414],[36.231,64.109],[37.013,63.85],[37.142,64.335],[36.518,64.78],[37.176,65.143],[39.594,64.521],[40.436,64.765],[39.763,65.497],[42.093,66.476],[43.016,66.419],[43.95,66.069],[44.532,66.756],[43.698,67.352],[44.188,67.951],[43.453,68.571],[46.25,68.25],[46.821,67.69],[45.555,67.567],[45.562,67.01],[46.349,66.668],[47.894,66.885],[48.139,67.523],[50.228,67.999],[53.718,68.857],[54.472,68.808],[53.486,68.201],[54.726,68.097],[55.443,68.439],[57.317,68.466],[58.802,68.881],[59.942,68.279],[61.078,68.941],[60.03,69.52],[60.55,69.85],[63.504,69.547],[64.888,69.235],[68.512,68.092],[69.181,68.616],[68.164,69.144],[68.135,69.357],[66.93,69.455],[67.26,69.929],[66.725,70.709],[66.695,71.029],[68.54,71.935],[69.196,72.844],[69.94,73.04],[72.588,72.776],[72.796,72.22],[71.848,71.409],[72.47,71.09],[72.792,70.391],[72.565,69.021],[73.668,68.408],[73.239,67.74],[71.28,66.32],[72.423,66.173],[72.821,66.533],[73.921,66.789],[74.187,67.284],[75.052,67.76],[74.469,68.329],[74.936,68.989],[73.842,69.071],[73.602,69.628],[74.4,70.632],[73.101,71.447],[74.891,72.121],[74.659,72.832],[75.158,72.855],[75.683,72.3],[75.289,71.336],[76.359,71.153],[75.903,71.874],[77.577,72.267],[79.652,72.32],[81.5,71.75],[80.611,72.583],[80.511,73.648],[82.25,73.85],[84.655,73.806],[86.822,73.937],[86.01,74.46],[87.167,75.117],[88.316,75.144],[90.26,75.64],[92.901,75.773],[93.234,76.047],[95.86,76.14],[96.678,75.916],[98.922,76.447],[100.76,76.43],[101.035,76.862],[101.991,77.287],[104.352,77.698],[106.067,77.374],[104.705,77.128],[106.97,76.974]],[[49.11,41.282],[49.619,40.573],[50.085,40.526],[50.393,40.257],[49.569,40.176],[49.395,39.399],[49.223,39.049],[48.857,38.815],[48.883,38.32],[49.2,37.583],[50.148,37.375],[50.842,36.873],[52.264,36.7],[53.826,36.965],[53.922,37.199],[53.735,37.906],[53.881,38.952],[53.101,39.291],[53.358,39.975],[52.694,40.034],[52.915,40.877],[53.858,40.631],[54.737,40.951],[54.008,41.551],[53.722,42.123],[52.917,41.868],[52.815,41.135],[52.503,41.783],[52.446,42.027],[52.692,42.444],[52.502,42.792],[51.343,43.133],[50.891,44.031],[50.339,44.284],[50.306,44.61],[51.279,44.515],[51.317,45.246],[52.167,45.409],[53.041,45.259],[53.221,46.235],[53.043,46.853],[52.042,46.805],[51.192,47.049],[50.034,46.609],[49.101,46.399],[48.646,45.806],[47.676,45.641],[46.682,44.609],[47.591,43.66],[47.492,42.987],[48.584,41.809],[49.11,41.282]]],[[[-93.84,77.52],[-94.296,77.491],[-96.17,77.555],[-96.436,77.835],[-94.423,77.82],[-93.721,77.634],[-93.84,77.52]]],[[[-110.187,77.697],[-112.051,77.409],[-113.534,77.732],[-112.725,78.051],[-111.264,78.153],[-109.854,77.996],[-110.187,77.697]]],[[[24.724,77.854],[22.49,77.445],[20.726,77.677],[21.416,77.935],[20.812,78.255],[22.884,78.455],[23.281,78.08],[24.724,77.854]]],[[[-109.663,78.602],[-110.881,78.407],[-112.542,78.408],[-112.526,78.551],[-111.5,78.85],[-110.964,78.804],[-109.663,78.602]]],[[[-95.83,78.057],[-97.31,77.851],[-98.124,78.083],[-98.553,78.458],[-98.632,78.872],[-97.337,78.832],[-96.754,78.766],[-95.559,78.418],[-95.83,78.057]]],[[[-100.06,78.325],[-99.671,77.908],[-101.304,78.019],[-102.95,78.343],[-105.176,78.38],[-104.21,78.677],[-105.42,78.918],[-105.492,79.302],[-103.529,79.165],[-100.825,78.8],[-100.06,78.325]]],[[[105.075,78.307],[99.438,77.921],[101.265,79.234],[102.086,79.346],[102.838,79.281],[105.372,78.713],[105.075,78.307]]],[[[18.252,79.702],[21.544,78.956],[19.027,78.563],[18.472,77.827],[17.594,77.638],[17.118,76.809],[15.913,76.77],[13.763,77.38],[14.67,77.736],[13.171,78.025],[11.222,78.869],[10.445,79.652],[13.171,80.01],[13.719,79.66],[15.143,79.674],[15.523,80.016],[16.991,80.051],[18.252,79.702]]],[[[25.448,80.407],[27.408,80.056],[25.925,79.518],[23.024,79.4],[20.075,79.567],[19.897,79.842],[18.462,79.86],[17.368,80.319],[20.456,80.598],[21.908,80.358],[22.919,80.657],[25.448,80.407]]],[[[51.136,80.547],[49.794,80.415],[48.894,80.34],[48.755,80.175],[47.586,80.01],[46.503,80.247],[47.072,80.559],[44.847,80.59],[46.799,80.772],[48.318,80.784],[48.523,80.515],[49.097,80.754],[50.04,80.919],[51.523,80.7],[51.136,80.547]]],[[[99.94,78.881],[97.758,78.756],[94.973,79.045],[93.313,79.427],[92.545,80.144],[91.181,80.341],[93.778,81.025],[95.941,81.25],[97.884,80.747],[100.187,79.78],[99.94,78.881]]],[[[-87.02,79.66],[-85.814,79.337],[-87.188,79.039],[-89.035,78.287],[-90.804,78.215],[-92.877,78.343],[-93.951,78.751],[-93.936,79.114],[-93.145,79.38],[-94.974,79.372],[-96.076,79.705],[-96.71,80.158],[-96.016,80.602],[-95.323,80.907],[-94.298,80.977],[-94.735,81.206],[-92.41,81.257],[-91.133,80.723],[-89.45,80.509],[-87.81,80.32],[-87.02,79.66]]],[[[-68.5,83.106],[-65.827,83.028],[-63.68,82.9],[-61.85,82.629],[-61.894,82.362],[-64.334,81.928],[-66.753,81.725],[-67.658,81.501],[-65.48,81.507],[-67.84,80.9],[-69.47,80.617],[-71.18,79.8],[-73.243,79.634],[-73.88,79.43],[-76.908,79.323],[-75.529,79.198],[-76.22,79.019],[-75.393,78.526],[-76.344,78.183],[-77.889,77.9],[-78.363,77.509],[-79.76,77.21],[-79.62,76.983],[-77.911,77.022],[-77.889,76.778],[-80.561,76.178],[-83.174,76.454],[-86.112,76.299],[-87.6,76.42],[-89.491,76.472],[-89.616,76.952],[-87.767,77.178],[-88.26,77.9],[-87.65,77.97],[-84.976,77.539],[-86.34,78.18],[-87.962,78.372],[-87.152,78.759],[-85.379,78.997],[-85.095,79.345],[-86.507,79.736],[-86.932,80.251],[-84.198,80.208],[-83.409,80.1],[-81.848,80.464],[-84.1,80.58],[-87.599,80.516],[-89.367,80.856],[-90.2,81.26],[-91.368,81.553],[-91.587,81.894],[-90.1,82.085],[-88.932,82.118],[-86.97,82.28],[-85.5,82.652],[-84.26,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.307,83.131],[-76.25,83.172],[-75.719,83.064],[-72.832,83.233],[-70.666,83.17],[-68.5,83.106]]],[[[-27.1,83.52],[-20.845,82.727],[-22.692,82.342],[-26.518,82.298],[-31.9,82.2],[-31.396,82.022],[-27.857,82.132],[-24.844,81.787],[-22.903,82.093],[-22.072,81.734],[-23.17,81.153],[-20.624,81.525],[-15.768,81.912],[-12.77,81.719],[-12.209,81.292],[-16.285,80.58],[-16.85,80.35],[-20.046,80.177],[-17.73,80.129],[-18.9,79.4],[-19.705,78.751],[-19.674,77.639],[-18.473,76.986],[-20.035,76.944],[-21.679,76.628],[-19.834,76.098],[-19.599,75.248],[-20.668,75.156],[-19.373,74.296],[-21.594,74.224],[-20.435,73.817],[-20.762,73.464],[-22.172,73.31],[-23.566,73.307],[-22.313,72.629],[-22.3,72.184],[-24.278,72.598],[-24.793,72.33],[-23.443,72.08],[-22.133,71.469],[-21.754,70.664],[-23.536,70.471],[-24.307,70.856],[-25.543,71.431],[-25.201,70.752],[-26.363,70.226],[-23.727,70.184],[-22.349,70.129],[-25.029,69.259],[-27.747,68.47],[-30.674,68.125],[-31.777,68.121],[-32.811,67.735],[-34.202,66.68],[-36.353,65.979],[-37.044,65.938],[-38.375,65.692],[-39.812,65.458],[-40.669,64.84],[-40.683,64.139],[-41.189,63.482],[-42.819,62.682],[-42.417,61.901],[-42.866,61.074],[-43.378,60.098],[-44.788,60.037],[-46.264,60.853],[-48.263,60.858],[-49.233,61.407],[-49.9,62.383],[-51.633,63.627],[-52.14,64.278],[-52.277,65.177],[-53.662,66.1],[-53.302,66.837],[-53.969,67.189],[-52.98,68.358],[-51.475,68.73],[-51.08,69.148],[-50.871,69.929],[-52.014,69.575],[-52.558,69.426],[-53.456,69.284],[-54.683,69.61],[-54.75,70.289],[-54.359,70.821],[-53.431,70.836],[-51.39,70.57],[-53.109,71.205],[-54.004,71.547],[-55,71.407],[-55.835,71.654],[-54.718,72.586],[-55.326,72.959],[-56.12,73.65],[-57.324,74.71],[-58.597,75.099],[-58.585,75.517],[-61.269,76.102],[-63.392,76.175],[-66.064,76.135],[-68.504,76.061],[-69.665,76.38],[-71.403,77.009],[-68.777,77.323],[-66.764,77.376],[-71.043,77.636],[-73.297,78.044],[-73.159,78.433],[-69.373,78.914],[-65.711,79.394],[-65.324,79.758],[-68.023,80.117],[-67.151,80.516],[-63.689,81.214],[-62.234,81.321],[-62.651,81.77],[-60.282,82.034],[-57.207,82.191],[-54.134,82.2],[-53.043,81.888],[-50.391,82.439],[-48.004,82.065],[-46.6,81.986],[-44.523,81.661],[-46.901,82.2],[-46.764,82.628],[-43.406,83.225],[-39.898,83.18],[-38.622,83.549],[-35.088,83.645],[-27.1,83.52]]]],fo=Object.freeze({map:[2048,1024],walnut:[256,512],scales:[1024,256]}),ys=Math.PI*2,W2=(n,t)=>{const e=document.createElement("canvas");return e.width=n,e.height=t,e};function po(n,t=!1){const e=new ji(n);return e.colorSpace=he,e.anisotropy=4,e.wrapS=t?wn:cn,e.wrapT=cn,e.name="Antique globe / "+n.width+"x"+n.height,e}function f0(n,t){let e=Math.imul(n+19,374761393)^Math.imul(t+53,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function en(n,t,e,i,s,r,a=!1){n.font=`${a?"italic ":""}${s}px Georgia, "Times New Roman", serif`,n.textBaseline="middle",n.textAlign="left";const o=[...t].map(l=>n.measureText(l).width);let c=e-(o.reduce((l,u)=>l+u,0)+(t.length-1)*r)/2;for(let l=0;l<t.length;l++)n.fillText(t[l],c,i),c+=o[l]+r}function al(n,t,e,i){n.save(),n.translate(t,e),n.strokeStyle="#766347",n.lineWidth=.9;for(const s of[i*.65,i*.71,i*1.02])n.beginPath(),n.arc(0,0,s,0,ys),n.stroke();for(let s=0;s<16;s++){n.save(),n.rotate(s*ys/16);const r=i*(s%4===0?1.25:s%2===0?.91:.64);n.beginPath(),n.moveTo(0,-r),n.lineTo(i*.1,0),n.lineTo(0,i*.15),n.closePath(),n.fillStyle=s%2?"#b79e6d":"#5e654f",n.fill(),n.stroke(),n.beginPath(),n.moveTo(0,-r),n.lineTo(-i*.1,0),n.lineTo(0,i*.15),n.closePath(),n.fillStyle="#e4d3a9",n.fill(),n.stroke(),n.restore()}n.fillStyle="#514936",en(n,"N",0,-i*1.52,15,0),en(n,"S",0,i*1.48,11,0),en(n,"E",i*1.48,0,11,0),en(n,"W",-i*1.48,0,11,0),n.restore()}function X2(n){const t=n.getContext("2d"),e=n.width,i=n.height,s=(l,u)=>[(l+180)/360*e,(90-u)/180*i],r=t.createImageData(e,i);for(let l=0;l<i;l++)for(let u=0;u<e;u++){const h=(l*e+u)*4,f=(f0(u,l)-.5)*5+Math.sin(u*.038)*Math.sin(l*.028)*1.5;r.data[h]=222+f,r.data[h+1]=207+f,r.data[h+2]=167+f,r.data[h+3]=255}t.putImageData(r,0,0),t.strokeStyle="rgba(123,89,52,0.12)",t.lineWidth=.75;for(const[l,u]of[[-138,-13],[68,-28]]){const[h,f]=s(l,u);for(let d=0;d<16;d++){const p=d*ys/16;t.beginPath(),t.moveTo(h-Math.cos(p)*e,f-Math.sin(p)*e),t.lineTo(h+Math.cos(p)*e,f+Math.sin(p)*e),t.stroke()}}t.lineJoin="round";for(let l=0;l<ol.length;l++){t.beginPath();for(const u of ol[l])u.forEach(([h,f],d)=>{const[p,_]=s(h,f);d===0?t.moveTo(p,_):t.lineTo(p,_)}),t.closePath();t.strokeStyle="rgba(119,107,69,0.22)",t.lineWidth=5,t.stroke(),t.fillStyle=["#9ca187","#a4a68a","#a6a88b","#98a08a"][l%4],t.fill("evenodd"),t.strokeStyle="#6e745b",t.lineWidth=1.15,t.stroke()}t.strokeStyle="rgba(100,89,62,0.30)",t.lineWidth=.65;for(let l=-180;l<=180;l+=15){const[u]=s(l,0);t.beginPath(),t.moveTo(u,0),t.lineTo(u,i),t.stroke()}for(let l=-75;l<=75;l+=15){const[,u]=s(0,l);t.beginPath(),t.moveTo(0,u),t.lineTo(e,u),t.stroke()}for(const l of[-66.56,-23.44,23.44,66.56]){const[,u]=s(0,l);t.setLineDash([5,4]),t.strokeStyle="rgba(120,83,45,0.43)",t.beginPath(),t.moveTo(0,u),t.lineTo(e,u),t.stroke()}t.setLineDash([]),t.strokeStyle="#9b8158",t.lineWidth=.8;for(const l of[i/2-1.5,i/2+1.5])t.beginPath(),t.moveTo(0,l),t.lineTo(e,l),t.stroke();t.fillStyle="#705b3e";for(let l=-180;l<=180;l+=5){const[u,h]=s(l,0),f=l%15?2.8:5;t.beginPath(),t.moveTo(u,h-f),t.lineTo(u,h+f),t.stroke(),l%30===0&&Math.abs(l)<180&&en(t,`${Math.abs(l)}°`,u,h+12,10,.2)}const a=[["NORTH",-106,47,22,3],["AMERICA",-104,40,23,3],["SOUTH",-58,-14,19,2.3],["AMERICA",-60,-21,19,2.3],["AFRICA",19,9,24,3.5],["EUROPE",25,52,20,2],["ASIA",92,42,29,5],["AUSTRALIA",134,-25,18,1.9],["GREENLAND",-42,72,13,1.5],["ANTARCTICA",20,-78,19,4]];t.fillStyle="#434f3e";for(const[l,u,h,f,d]of a)en(t,l,...s(u,h),f,d);t.fillStyle="#7c7155";for(const[l,u,h,f]of[["Atlantic Ocean",-34,29,22],["Atlantic Ocean",-20,-30,20],["Pacific Ocean",-130,15,25],["Pacific Ocean",165,-9,18],["Indian Ocean",75,-12,22],["Southern Ocean",-64,-57,20]])en(t,l,...s(u,h),f,1.2,!0);al(t,...s(-132,-25),29),al(t,...s(71,-40),22);const[o,c]=s(-132,-49);t.strokeStyle="#9d885d",t.lineWidth=1;for(const l of[0,5])t.beginPath(),t.ellipse(o,c,115-l,35-l,0,0,ys),t.stroke();return t.fillStyle="#6b6047",en(t,"ORBIS TERRARUM",o,c-8,14,1.8),en(t,"THE LIBRARY COLLECTION",o,c+10,9,1.4),n}function q2(n){const t=n.getContext("2d"),e=n.width,i=n.height,s=t.createImageData(e,i);for(let r=0;r<i;r++)for(let a=0;a<e;a++){const o=a/e*ys,c=Math.sin(o*15+Math.sin(r*.016)*.8)*5+Math.sin(o*51+Math.sin(r*.013))*2.5+(f0(a,r)-.5)*4,l=7*Math.sin(o*3+r*.006),u=(r*e+a)*4;s.data[u]=76+c+l,s.data[u+1]=42+c*.7+l*.6,s.data[u+2]=24+c*.4+l*.3,s.data[u+3]=255}return t.putImageData(s,0,0),n}function Y2(n){const t=n.getContext("2d"),e=n.width,i=n.height;t.fillStyle="#bfa373",t.fillRect(0,0,e,i);for(let s=0;s<2;s++){const r=s*128;t.fillStyle=s?"#c5ad80":"#cdb88e",t.fillRect(0,r+8,e,112),t.strokeStyle="#857047",t.lineWidth=1;for(const a of[9,14,114,119])t.beginPath(),t.moveTo(0,r+a),t.lineTo(e,r+a),t.stroke();for(let a=0;a<360;a+=1){const o=a/360*e,c=a%10===0,l=a%5===0,u=c?25:l?17:9;if(t.beginPath(),t.moveTo(o,r+15),t.lineTo(o,r+15+u),t.stroke(),t.beginPath(),t.moveTo(o,r+113),t.lineTo(o,r+113-u),t.stroke(),a%30===0){t.fillStyle="#504631";const h=(450-a)%360,f=s?`${Math.min(a%180,180-a%180)}°`:{0:"N",90:"E",180:"S",270:"W"}[h]||`${h}`;en(t,f,o,r+64,22,1),a===0&&en(t,f,e,r+64,22,1)}}}return n}function j2(n=W2){const t=po(X2(n(...fo.map))),e=po(q2(n(...fo.walnut)),!0),i=po(Y2(n(...fo.scales)),!0),s=(r,a)=>{const o=new Te(a);return o.name=`Antique globe / ${r}`,o};return{globe:s("engraved vellum",{map:t,roughness:.73,metalness:0}),globeWalnut:s("French-polished walnut",{map:e,roughness:.39,metalness:0}),globeBrass:s("aged brass",{color:11637593,roughness:.36,metalness:.78}),globeScales:s("engraved brass scales",{map:i,roughness:.48,metalness:.5})}}const Sr=Math.PI*2,cl=Object.freeze({location:[-5.9,0,-.7],yaw:.3,centreHeight:1,radius:.29,axisTilt:.4,horizonOuterRadius:.346,meridianOuterRadius:.327,sphereSegments:[64,40],ringSegments:96,collision:{width:.7,height:1.3,depth:.7,centre:[0,.65,0]}});function ll(n,t=96){const e=[],i=[],s=[],r=[];for(let o=0;o<n.length;o++){const[c,l]=n[o],[u,h]=n[(o+1)%n.length],f=u-c,d=h-l,p=Math.hypot(f,d),_=e.length/3;for(let m=0;m<=t;m++){const g=m/t*Sr,v=Math.cos(g),y=Math.sin(g);for(const[x,T]of[[c,l],[u,h]])e.push(x*v,x*y,T),i.push(d/p*v,d/p*y,-f/p),s.push(m/t,x*4);if(m<t){const x=_+m*2;r.push(x,x+2,x+1,x+2,x+3,x+1)}}}const a=new Qt;return a.setAttribute("position",new Ot(e,3)),a.setAttribute("normal",new Ot(i,3)),a.setAttribute("uv",new Ot(s,2)),a.setIndex(r),a}function mo(n,t,e,i,s=96){const r=new La(n,t,s),a=r.attributes.position,o=r.attributes.uv;for(let c=0;c<a.count;c++){const u=(Math.atan2(a.getY(c),a.getX(c))/Sr+1)%1,h=(Math.hypot(a.getX(c),a.getY(c))-n)/(t-n),f=c%(s+1);o.setXY(c,f===s?1:u,1-(i*128+10+h*108)/256),a.setZ(c,e)}return r}function $2(){const n=[[.006,.02,.325],[.01,.026,.325],[.026,.027,.325],[.041,.021,.322],[.056,.014,.318],[.09,.014,.309],[.135,.019,.297],[.18,.023,.291],[.215,.019,.289],[.236,.014,.289],[.252,.021,.289],[.268,.021,.289],[.28,.015,.291],[.45,.014,.306],[.65,.012,.319],[.79,.016,.32],[.808,.022,.32],[.825,.023,.32],[.843,.018,.32],[.865,.016,.32],[.941,.017,.32],[.967,.024,.32],[.98,.024,.32]],t=[],e=[],i=[],s=12;n.forEach(([c,l,u],h)=>{for(let f=0;f<=s;f++){const d=f/s*Sr;if(t.push(u+l*Math.cos(d),c,l*Math.sin(d)),e.push(f/s,c),h<n.length-1&&f<s){const p=h*(s+1)+f,_=p+s+1;i.push(p,_,p+1,_,_+1,p+1)}}});const r=new Qt;r.setAttribute("position",new Ot(t,3)),r.setAttribute("uv",new Ot(e,2)),r.setIndex(i),r.computeVertexNormals();const a=r.attributes.normal,o=new U;for(let c=0;c<n.length;c++){const l=c*(s+1),u=l+s;o.fromBufferAttribute(a,l).add(new U().fromBufferAttribute(a,u)).normalize(),a.setXYZ(l,o.x,o.y,o.z),a.setXYZ(u,o.x,o.y,o.z)}return r}function K2(n,t,e,i=8){const s=new U(...n),r=new U(...t),a=r.clone().sub(s),o=new Gn(e,e,a.length(),i);return o.applyQuaternion(new We().setFromUnitVectors(new U(0,1,0),a.normalize())),o.translate(...s.add(r).multiplyScalar(.5).toArray()),o}function Z2(n,t){const{radius:e,axisTilt:i,centreHeight:s}=cl,r=(u,h,f=0,d=0,p=0,_=0,m=0,g=0)=>{const v=h.index,y=h.attributes.position,x=[],T=new U,E=new U,w=new U;for(let b=0;b<v.count;b+=3)T.fromBufferAttribute(y,v.getX(b)),E.fromBufferAttribute(y,v.getX(b+1)),w.fromBufferAttribute(y,v.getX(b+2)),E.sub(T).cross(w.sub(T)).lengthSq()>1e-17&&x.push(v.getX(b),v.getX(b+1),v.getX(b+2));h.setIndex(x),n.geo(u,h,f,d,p,_,m,g)},a=(u,h=32)=>new ws(u.map(f=>new It(...f)),h),o=(u,h,f,d,p,_,m=0,g=0,v=0,y=64)=>r(u,new Hi(h,f,5,y),d,p,_,m,g,v),c=new ri(e,...cl.sphereSegments);c.rotateZ(i),r(t.globe,c,0,s,0),r(t.globeWalnut,ll([[.303,-.019],[.341,-.019],[.346,-.014],[.346,.007],[.342,.012],[.303,.012]],96),0,s-.01,0,-Math.PI/2),r(t.globeScales,mo(.305,.341,.0127,0),0,s-.01,0,-Math.PI/2),o(t.globeBrass,.343,.0024,0,s+.003,0,Math.PI/2),o(t.globeBrass,.304,.0018,0,s+.003,0,Math.PI/2),o(t.globeBrass,.344,.002,0,s-.025,0,Math.PI/2),r(t.globeBrass,ll([[.306,-.006],[.325,-.006],[.327,-.004],[.327,.004],[.325,.006],[.306,.006]],96),0,s,0),r(t.globeScales,mo(.307,.325,.0067,1),0,s,0);const l=mo(.307,.325,.0067,1);l.rotateY(Math.PI),r(t.globeScales,l,0,s,0),o(t.globeBrass,.326,.0015,0,s,0);for(const u of[-1,1]){const h=new U(-Math.sin(i),Math.cos(i),0).multiplyScalar(u),f=a([[.009,0],[.012,.003],[.012,.008],[.007,.01],[.007,.018]],16);f.applyQuaternion(new We().setFromUnitVectors(new U(0,1,0),h)),r(t.globeBrass,f,h.x*.2905,s+h.y*.2905,0)}for(let u=0;u<3;u++){const h=u/3*Sr+Math.PI/6,f=$2();f.rotateY(h),r(t.globeWalnut,f);const d=g=>(g.rotateY(h),g),p=a([[0,.001],[.024,.001],[.027,.006],[.027,.027],[.023,.033]],12);p.translate(.325,0,0),r(t.globeBrass,d(p));for(const g of[.255,.815,.968]){const v=g===.255?.289:.32,y=new Hi(g===.968?.024:.022,.0016,4,12);y.rotateX(Math.PI/2),y.translate(v,g,0),r(t.globeBrass,d(y))}const _=new Ca([new U(.035,.215,0),new U(.12,.192,0),new U(.23,.215,0),new U(.288,.259,0)]);r(t.globeWalnut,d(new Mr(_,10,.01,6,!1)));const m=new ri(.0045,8,4);m.scale(1,.45,1),m.translate(.337,1.005,0),r(t.globeBrass,d(m))}r(t.globeWalnut,a([[0,.183],[.028,.183],[.035,.192],[.035,.224],[.024,.234],[.017,.25],[.012,.26],[0,.264]],24)),o(t.globeBrass,.034,.0018,0,.22,0,Math.PI/2,0,0,24),r(t.globeBrass,K2([0,.264,0],[0,.674,0],.005,8)),r(t.globeBrass,a([[.014,.659],[.019,.663],[.019,.673],[.012,.677]],16))}const ul=new Ie,hl=new We;function la(n,t,e,i,s){const r=new Tn(n,t,e),a=r.attributes.uv,o=s(),c=s(),l=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let u=0;u<6;u++){const[h,f]=l[u],d=f>h;for(let p=0;p<4;p++){const _=u*4+p;let m=a.getX(_)*h,g=a.getY(_)*f;if(d){const v=m;m=g,g=v}a.setXY(_,m/i+o,g/i+c)}}return r}class ua{constructor(t){this.rand=t,this.batches=new Map,this.solids=[]}add(t,e){this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(e)}frame(t,e,i,s=0){return new wr(this,new jt().makeRotationY(s).setPosition(t,e,i))}finish(t){for(const[e,i]of this.batches){for(const a of i)for(const o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);const s=br(i,!1),r=new Jt(s,e);r.castShadow=!e.userData.noShadow,r.receiveShadow=!0,r.matrixAutoUpdate=!1,t.add(r);for(const a of i)a.dispose()}this.batches.clear()}}class wr{constructor(t,e){this.b=t,this.m=e}sub(t,e,i,s=0){return new wr(this.b,this.m.clone().multiply(new jt().makeRotationY(s).setPosition(t,e,i)))}local(t,e,i,s=0,r=0,a=0){return ul.set(s,r,a),hl.setFromEuler(ul),new jt().compose(new U(t,e,i),hl,new U(1,1,1)).premultiply(this.m)}geo(t,e,i,s,r,a,o,c){e.applyMatrix4(this.local(i,s,r,a,o,c)),this.b.add(t,e)}box(t,e,i,s,r,a,o,c=0,l=0,u=0){this.geo(t,la(e,i,s,t.userData.ts||1,this.b.rand),r,a,o,c,l,u)}cyl(t,e,i,s,r,a,o,c=12,l=0,u=0,h=0,f=!1,d,p){const _=new Gn(e,i,s,c,1,f,d||0,p||Math.PI*2),m=t.userData.ts||1,g=_.attributes.uv,v=Math.PI*2*Math.max(e,i);for(let y=0;y<g.count;y++)g.setXY(y,g.getY(y)*s/m,g.getX(y)*v/m);this.geo(t,_,r,a,o,l,u,h)}sphere(t,e,i,s,r,a=1,o=1,c=1,l=12,u=8){const h=new ri(e,l,u);h.scale(a,o,c),this.geo(t,h,i,s,r)}torus(t,e,i,s,r,a,o=0,c=0,l=0,u=32){this.geo(t,new Hi(e,i,6,u),s,r,a,o,c,l)}plane(t,e,i,s,r,a,o=0,c=0,l=0,u=null){const h=new si(e,i);if(u){const f=h.attributes.uv;for(let d=0;d<f.count;d++)f.setXY(d,u[0]+f.getX(d)*u[2],u[1]+f.getY(d)*u[3])}this.geo(t,h,s,r,a,o,c,l)}solid(t,e,i,s,r,a){const o=this.local(s,r,a),c=new U,l=new U(1/0,1/0,1/0),u=new U(-1/0,-1/0,-1/0);for(let h=0;h<8;h++)c.set((h&1?.5:-.5)*t,(h&2?.5:-.5)*e,(h&4?.5:-.5)*i).applyMatrix4(o),l.min(c),u.max(c);this.b.solids.push({x0:l.x,x1:u.x,y0:l.y,y1:u.y,z0:l.z,z1:u.z})}sbox(t,e,i,s,r,a,o){this.box(t,e,i,s,r,a,o),this.solid(e,i,s,r,a,o)}}function J2(){const n=(u,h)=>{const f=new Te(u);return f.userData.ts=h||1,f},t=ao(1,[118,70,38],[48,26,12],{rings:16}),e=ao(2,[184,124,70],[104,62,30],{rings:15}),i=ao(3,[84,50,30],[34,18,10],{rings:11}),s=M2(4),r=Qc(5,[232,214,184]),a=Qc(6,[150,158,124]),o=tl(7,[100,34,22]),c=tl(8,[92,56,30]),l=b2(9);return{walnut:n({map:t,bumpMap:t,bumpScale:.6,roughness:.6,color:16777215},1.3),oak:n({map:e,bumpMap:e,bumpScale:.5,roughness:.48},1.6),dark:n({map:i,bumpMap:i,bumpScale:.5,roughness:.55},1.2),floor:n({map:s,bumpMap:s,bumpScale:1.2,roughness:.42},1.9),plaster:n({map:r,bumpMap:r,bumpScale:1.5,roughness:.94},3),sage:n({map:a,bumpMap:a,bumpScale:1.5,roughness:.92},2.5),ceil:n({map:r,roughness:.95,color:15919320},4),leather:n({map:o,bumpMap:o,bumpScale:1.2,roughness:.5},.9),leather2:n({map:c,bumpMap:c,bumpScale:1.2,roughness:.55},.9),stone:n({map:l,bumpMap:l,bumpScale:2,roughness:.88},1.4),iron:n({color:1841946,metalness:.75,roughness:.48}),brass:n({color:11831880,metalness:1,roughness:.32}),gilt:n({color:10122294,metalness:.8,roughness:.42}),soot:n({color:920587,roughness:1}),cushion:n({map:co(10,[150,128,92],!0),roughness:.95},.5),cushion2:n({map:co(11,[70,88,70],!1),roughness:.95},.4),runner:n({map:co(12,[118,34,28],!0),roughness:.95},.6),paper:n({color:15129280,roughness:.9}),ceramic:n({color:15525590,roughness:.25}),terracotta:n({color:10246714,roughness:.85}),plant:n({color:4086828,roughness:.75,side:Ge}),greenGlass:n({color:1993264,emissive:3971642,emissiveIntensity:.55,roughness:.15,metalness:.1,side:Ge}),shade:n({color:15390376,emissive:16757865,emissiveIntensity:.9,roughness:.9,side:Ge}),flame:Object.assign(new ki({color:new Ht(2.4,1.6,.7)}),{userData:{noShadow:!0}}),ember:Object.assign(new ki({color:new Ht(2.2,.7,.2)}),{userData:{noShadow:!0}}),rug:n({map:S2(13),roughness:1}),painting:n({map:E2(14),roughness:.55}),...j2()}}const ha={H:10.5,GY:4.2},yt=.012;function Q2(n,t,e,i=null){const s=new ua(e),r=s.frame(0,0,0,0),a=ha.H,o=ha.GY,c=[],l=[],u=[],h=e;function f(C,F,O,G,X,ht,ft,Et,z){const Vt=[F,O];for(const gt of Et)Vt.push(gt[0],gt[1]);const zt=[...new Set(Vt)].sort((gt,pt)=>gt-pt);for(let gt=0;gt<zt.length-1;gt++){const pt=zt[gt],Lt=zt[gt+1],xt=Et.filter(j=>j[0]<=pt&&j[1]>=Lt).sort((j,it)=>j[2]-it[2]);let D=ht;const R=(j,it)=>{it-j<.001||(C==="x"?r.sbox(z,X-G,it-j,Lt-pt,(G+X)/2,(j+it)/2,(pt+Lt)/2):r.sbox(z,Lt-pt,it-j,X-G,(pt+Lt)/2,(j+it)/2,(G+X)/2))};for(const j of xt)R(D,j[2]),D=j[3];R(D,ft)}}r.sbox(n.floor,14,.3,19,0,-.15,-.5),r.box(n.ceil,15,.3,20,0,a+.15,-.5),f("z",-7.5,7.5,-10.5,-10,0,a,[],n.plaster);function d(C,F,O,G,X,ht,ft,Et,z=!1){if(!i){z?r.sbox(C,F,O,G,X,ht,ft):r.box(C,F,O,G,X,ht,ft);return}const Vt=[e(),e()];for(const[zt,gt,pt,Lt,xt,D]of Et){let R=0;r.geo(C,la(zt,gt,pt,C.userData.ts||1,()=>Vt[R++]),Lt,xt,D),z&&r.solid(zt,gt,pt,Lt,xt,D)}}const p=i||{z0:7.07,z1:8.43,height:2.46};d(n.plaster,.5,a,20,7.25,a/2,-.5,[[.5,a,p.z0+10.5,7.25,a/2,(p.z0-10.5)/2],[.5,a-p.height,p.z1-p.z0,7.25,(a+p.height)/2,(p.z0+p.z1)/2],[.5,a,9.5-p.z1,7.25,a/2,(9.5+p.z1)/2]],!0),f("z",-7.5,7.5,9,9.5,0,a,[[-5,-3,4.5,8.3],[2.6,4.6,4.5,8.3]],n.plaster),f("x",-10.5,9.5,-7.5,-7,0,a,[[-5.6,-3.6,.9,7.2],[-1.6,.4,.9,7.2],[2.4,7.4,0,3.4],[3.2,6.6,5,8]],n.plaster),r.sbox(n.floor,4.5,.3,5,-9.25,-.15,4.9),r.box(n.ceil,5,.3,6,-9.5,3.75,4.9),r.box(n.plaster,5.4,.3,6.6,-9.75,4.05,4.9),f("z",-12,-7.5,1.9,2.4,0,3.6,[[-10.4,-8.6,.9,2.9]],n.sage),f("z",-12,-7.5,7.4,7.9,0,3.6,[[-10.4,-8.6,.9,2.9]],n.sage),f("x",1.9,7.9,-12,-11.5,0,3.6,[[2.9,6.9,.6,3]],n.sage);const g=-7+yt;for(const C of[3.2,4.9,6.6])r.box(n.dark,4-2*yt,.18,.14,-9.5,3.6-.09-yt,C);r.box(n.oak,.3,.3,5.2,g+.15,3.45,4.9);function v(C,F,O,G,X=!0){const ht=[e(),e()];function ft(gt,pt,Lt){let xt=0;return la(gt,.05,pt,n.oak.userData.ts,()=>ht[xt++]).translate(0,.025+yt,Lt)}const Et=[ft(F+.3,.14,.07+yt),ft(F-2*yt,G,-G/2+yt)];C.geo(n.oak,br(Et,!1),0,0,0);for(const gt of Et)gt.dispose();C.box(n.oak,.12+yt,O+.12,.06,-F/2-.06+yt/2,O/2,.03+yt),C.box(n.oak,.12+yt,O+.12,.06,F/2+.06-yt/2,O/2,.03+yt),C.box(n.oak,F+.36,.14+yt,.07,0,O+.07-yt/2,.035+yt);const z=-G*.55;C.box(n.dark,F-2*yt,.07,.07,0,.06,z),C.box(n.dark,F-2*yt,.07,.07,0,O-.035-yt,z),C.box(n.dark,.07,O-2*yt,.07,-F/2+.035+yt,O/2,z),C.box(n.dark,.07,O-2*yt,.07,F/2-.035-yt,O/2,z);const Vt=Math.max(1,Math.round(F/.62));for(let gt=1;gt<Vt;gt++)C.box(n.iron,.03,O,.035,-F/2+F*gt/Vt,O/2,z);const zt=Math.max(1,Math.round(O/.55));for(let gt=1;gt<zt;gt++)C.box(gt%4===0?n.dark:n.iron,F-2*yt,gt%4===0?.06:.025,.035,0,O*gt/zt,z);if(X){const gt=[];for(const[pt,Lt]of[[-F/2,0],[F/2,0],[F/2,O],[-F/2,O]])gt.push(new U(pt,Lt,z).applyMatrix4(C.m));u.push(gt)}}v(r.sub(-7,.9,-4.6,Math.PI/2),2,6.3,.5),v(r.sub(-7,.9,-.6,Math.PI/2),2,6.3,.5),v(r.sub(-7,5,4.9,Math.PI/2),3.4,3,.5),v(r.sub(-11.5,.6,4.9,Math.PI/2),4,2.4,.5),v(r.sub(-9.5,.9,7.4,Math.PI),1.8,2,.5),v(r.sub(-9.5,.9,2.4,0),1.8,2,.5,!1),v(r.sub(-4,4.5,9,Math.PI),2,3.8,.5),v(r.sub(3.6,4.5,9,Math.PI),2,3.8,.5);for(const C of[2.33,7.47])r.box(n.oak,.14,3.5+yt,.6,-7+.07+yt,(3.5-yt)/2,C);for(const C of[-4.6,-.6])r.box(n.dark,.04,.85,2,-6.98+yt,.45,C);function y(C,F,O,G,X,ht,ft){const Et=ft-G/2,z=ft+G/2;d(C,F,O,G,X,ht,ft,[[F,O,p.z0-Et,X,ht,(Et+p.z0)/2],[F,O,z-p.z1,X,ht,(p.z1+z)/2]])}y(n.dark,.05,1,2.2-yt,7-.025-yt,.5,7.85-yt/2),y(n.oak,.08,.06,2.3-yt,6.96-yt,1.02,7.85-yt/2);for(const[C,F,O,G]of[[14,.3,0,-9.85],[14,.3,0,8.85],[.3,19,-6.85,-.5],[.3,19,6.85,-.5]]){const X=O&&O-Math.sign(O)*yt,ht=G===-.5?G:G-Math.sign(G)*yt;r.box(n.oak,C>1?C-2*yt:C,.22,F>1?F-2*yt:F,X,a-.11-yt,ht),r.box(n.dark,C>1?C-2*yt:C+.1,.08,F>1?F-2*yt:F+.12,X-(O?Math.sign(O)*.05:0),a-.26,ht-(G===-.5?0:Math.sign(G)*.06))}r.box(n.oak,.12,.1,19-2*yt,-6.94+yt,8.4,-.5),r.box(n.oak,14-2*yt,.1,.12,0,8.4,8.94-yt),r.box(n.oak,.12,.1,19-2*yt,6.94-yt,8.4,-.5);for(const C of[-4.6,-.6]){r.cyl(n.iron,.02,.02,2.9,-6.82,7.55,C,8,Math.PI/2,0,0);for(const F of[-1,1]){r.sphere(n.iron,.045,-6.82,7.55,C+F*1.45),r.box(n.iron,.12,.03,.03,-6.9,7.55,C+F*1.3);for(let O=0;O<4;O++)r.box(n.cushion2,.05+O%2*.03,4.85-O*.12,.05,-6.86+O%2*.03,5.08+O*.06,C+F*(1.04+O*.035),0,0,0);r.cyl(n.brass,.012,.012,.2,-6.8,3.4,C+F*1.1,6,Math.PI/2,0,0)}}for(const C of[-8.2,-4.6,-1,2.6,6.2]){r.box(n.dark,14-2*yt,.38,.3,0,9.85,C),r.box(n.dark,.24,.6,.24,0,10.2-yt,C);for(const F of[-1,1]){const O=(.2*Math.cos(.62)+1.4*Math.sin(.62))/2;r.box(n.dark,.2,1.4,.22,F*(7-yt-O),9.2,C,0,0,F*.62),r.box(n.iron,.36,.42,.32,F*3.4,9.85,C),r.box(n.dark,.25,.7,.32,F*(7-.125-yt),9.2,C)}}for(const C of[-3.4,3.4])r.box(n.dark,.2,.24,19-2*yt,C,10.25,-.5);r.sbox(n.floor,14,.35,3,0,o-.175,-8.5),r.sbox(n.floor,2.8,.35,5.8,5.6,o-.175,-4.1);for(let C=-6.6;C<4.2;C+=.9)r.box(n.dark,.12,.24,3-yt,C,o-.47,-8.5+yt/2);for(let C=-6.6;C<-1.2;C+=.9)r.box(n.dark,2.8-yt,.24,.12,5.6-yt/2,o-.47,C);r.box(n.oak,11.31-yt,.55,.24,-1.345+yt/2,o-.27,-6.9),r.box(n.oak,.24,.55,5.9,4.3,o-.27,-4.15),r.box(n.dark,11.31-yt,.06,.3,-1.345+yt/2,o-.02,-6.9),r.box(n.dark,.3,.06,5.9,4.3,o-.02,-4.15);const x=[[-4.6,-6.9,"x"],[-1.4,-6.9,"x"],[1.8,-6.9,"x"],[4.3,-6.9,"c"],[4.3,-4.1,"z"],[4.3,-1.35,"z"]];for(const[C,F,O]of x){r.cyl(n.iron,.07,.085,o-.55,C,(o-.55)/2,F,14),r.box(n.iron,.24,.16,.24,C,.08,F),r.box(n.iron,.26,.1,.26,C,o-.6,F),r.cyl(n.iron,.11,.07,.18,C,o-.75,F,14),r.solid(.26,o-.5,.26,C,(o-.5)/2,F);const G=O==="x"?[[1,0],[-1,0]]:O==="z"?[[0,1],[0,-1]]:[[-1,0],[0,1]];for(const[X,ht]of G)r.box(n.iron,.04,.9,.04,C+X*.3,o-.88,F+ht*.3,ht*.72,0,-X*.72),r.torus(n.iron,.12,.012,C+X*.22,o-.75,F+ht*.22,0,X?0:Math.PI/2,0,16)}function T(C,F,O,G,X,ht=2.4,ft){const Et=Math.hypot(O-C,G-F),z=Math.atan2(-(G-F),O-C),Vt=r.sub(C,X,F,z);Vt.box(n.oak,Et+.06,.07,.13,Et/2,1.02,0),Vt.box(n.iron,Et,.04,.05,Et/2,.97,0),Vt.box(n.iron,Et,.04,.05,Et/2,.1,0);const zt=Math.round((ft||Et)/.13);for(let xt=1;xt<zt;xt++){const D=Et*xt/zt;Vt.box(n.iron,.02,.86,.02,D,.53,0),xt%3===0&&Vt.sphere(n.iron,.025,D,.45,0)}const gt=Math.max(1,Math.round(Et/ht));for(let xt=0;xt<=gt;xt++){const D=Et*xt/gt;Vt.box(n.oak,.11,1.12,.11,D,.56,0),Vt.sphere(n.oak,.065,D,1.16,0,1,.8,1)}const pt=ft?r.sub(-7,X,F,z):Vt,Lt=ft||Et;pt.solid(Lt,1.1,.16,Lt/2,.55,0)}T(-7+.065+yt,-6.92,4.3,-6.92,o,2.4,11.3),T(4.3,-6.92,4.3,-1.25,o,1.9),r.box(n.oak,.08,.3,3-yt,-6.96+yt,o+.1,-8.5+yt/2);const E=o/24,w=.3,b=4.2,S=7,M=6.7,A=(b+S)/2,N=S-b,P=[];for(let C=1;C<=11;C++)P.push({y:C*E,z0:M-C*w,z1:M-(C-1)*w});P.push({y:12*E,z0:2.1,z1:3.4,landing:!0});for(let C=13;C<=23;C++)P.push({y:C*E,z0:2.1-(C-12)*w,z1:2.1-(C-13)*w});for(const C of P){const F=C.z1-C.z0,O=(C.z0+C.z1)/2;r.box(n.dark,N-yt,C.y-.045,F,A-yt/2,(C.y-.045)/2,O),r.box(n.oak,N+.03-yt,.045,F+.035,A-.015-yt/2,C.y-.0225,O+.0175),r.solid(N,C.y,F,A,C.y/2,O),r.box(n.runner,1.5,.012,F,A+.15,C.y+.006,O+.01),r.box(n.runner,1.5,E-.03,.012,A+.15,C.y-E/2-.02,C.z1+.007),r.cyl(n.brass,.008,.008,1.62,A+.15,C.y-E+.012,C.z1+.02,6,0,0,Math.PI/2);const G=C.landing?9:2;for(let X=0;X<G;X++){const ht=C.z0+F*(X+.5)/G;r.box(n.iron,.022,.9,.022,b+.07,C.y+.45,ht)}r.solid(.16,1.05,F,b+.07,C.y+.52,O)}const I=Math.atan(E/w),k=[[M,0,M-11*w,11*E],[2.1,12*E,-1.2,23*E]];for(const[C,F,O,G]of k){const X=Math.hypot(C-O,G-F),ht=(C+O)/2,ft=(F+G)/2;r.box(n.oak,.13,.07,X,b+.07,ft+1,ht,I,0,0),r.box(n.iron,.05,.04,X,b+.07,ft+.95,ht,I,0,0),r.box(n.oak,.07,.32,X+.2,b-.02,ft+.02,ht-.05,I,0,0)}r.box(n.oak,.13,.07,1.3,b+.07,12*E+1,2.75);for(const[C,F]of[[M-.12,0],[3.4,11*E],[2.1,12*E],[-1.25,o]])r.box(n.oak,.16,1.25,.16,b+.07,F+.62,C),r.box(n.oak,.2,.06,.2,b+.07,F+1.26,C),r.sphere(n.oak,.08,b+.07,F+1.35,C);r.solid(.2,1.25,.2,b+.07,.62,M-.12);function B(C,F,O,G,X={}){const ht=Math.max(1,Math.round(F/(X.bay||.92))),ft=F/ht,Et=X.spacing||.38,z=.14,Vt=Math.floor((O-z-.12)/Et),zt=(O-z-.12)/Vt;C.box(n.dark,F,z,G-.03,F/2,z/2,-G/2-.015),C.box(n.walnut,F,O,.02,F/2,O/2,-G+.01);function gt(pt,Lt,xt,D,R,j){const it=X.wallLeft?yt:-Lt/2,ct=X.wallRight?F-yt:F+Lt/2;C.box(pt,ct-it,xt,D,(it+ct)/2,R,j)}gt(n.walnut,.06,.07,G+.05,O-.035,-G/2+.025),gt(n.walnut,.12,.05,G+.09,O+.025,-G/2+.045),X.noCornice||gt(n.dark,.02,.1,.03,O-.12,.01);for(let pt=0;pt<=ht;pt++){const Lt=Math.min(F-.02,Math.max(.02,pt*ft));C.box(n.walnut,.04,O-.07,G,Lt,(O-.07)/2,-G/2);const xt=pt===0&&X.wallLeft?.03+yt:pt===ht&&X.wallRight?F-.03-yt:Lt;C.box(n.dark,.06,O-.2,.015,xt,O/2-.05,.005)}for(let pt=0;pt<ht;pt++){const Lt=pt*ft+.02,xt=(pt+1)*ft-.02,D=(h()-.5)*.04;for(let R=0;R<=Vt;R++){const j=z+R*zt+(R>0&&R<Vt?D:0);if(R>0&&R<Vt+1&&C.box(n.walnut,xt-Lt,.026,G-.025,(Lt+xt)/2,j-.013,-G/2-.0125),R<Vt){const ct=z+(R+1)*zt+(R+1<Vt?D:0)-j-.026-.005,st=X.sparse?.8:.97;h()<st&&c.push({m:C.local(Lt+.005,j,-.012),len:xt-Lt-.01,clear:ct,d:G-.04})}}}X.solid!==!1&&C.solid(F,O+.05,G,F/2,O/2,-G/2)}B(r.sub(-7,0,-9.6,0),14,3.45,.4,{wallLeft:!0,wallRight:!0}),B(r.sub(-6.6,0,-5.75,Math.PI/2),3.85,3.45,.4),B(r.sub(6.6,0,-9.6,-Math.PI/2),8.4,3.45,.4,{spacing:.4}),B(r.sub(-6.6,0,-1.7,Math.PI/2),1.8,2.4,.36,{spacing:.36}),B(r.sub(-6.6,0,2.3,Math.PI/2),1.8,2.4,.36,{spacing:.42}),B(r.sub(-1.4,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.4,wallRight:!0}),B(r.sub(7,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.37,wallLeft:!0}),B(r.sub(-7,o,-9.6,0),14,3.8,.4,{spacing:.4,wallLeft:!0,wallRight:!0}),B(r.sub(-6.6,o,-7,Math.PI/2),2.6,3.8,.4,{spacing:.4}),B(r.sub(6.6,o,-9.6,-Math.PI/2),8.4,3.8,.4,{spacing:.39});for(const C of[-5,-2.4]){B(r.sub(-4.3,0,C+.3,0),4,2.25,.3,{spacing:.36,solid:!1}),B(r.sub(-.3,0,C-.3,Math.PI),4,2.25,.3,{spacing:.36,solid:!1}),r.solid(4.1,2.3,.62,-2.3,1.15,C);for(const F of[-4.33,-.27])r.box(n.oak,.06,2.3,.66,F,1.15,C);r.box(n.oak,4.14,.05,.7,-2.3,2.3,C)}B(r.sub(-10.6,0,2.75,0),2.2,.85,.35,{bay:.75,noCornice:!0}),B(r.sub(-8.4,0,7.05,Math.PI),2.2,.85,.35,{bay:.75,noCornice:!0});function $(C,F,O){r.cyl(n.iron,.016,.016,13.6,0,C+O-.15,-9.47,8,0,0,Math.PI/2);for(let z=-6.4;z<=6.4;z+=2.13)r.box(n.iron,.03,.03,.14,z,C+O-.15,-9.53);const G=-9.45,X=-8.35,ht=Math.hypot(X-G,O),ft=-Math.atan((X-G)/O);for(const z of[-.22,.22])r.box(n.oak,.05,ht,.08,F+z,C+O/2,(G+X)/2,ft,0,0);const Et=Math.floor(ht/.28);for(let z=1;z<Et;z++){const Vt=z/Et;r.cyl(n.iron,.014,.014,.44,F,C+Vt*O,X+(G-X)*Vt,8,0,0,Math.PI/2)}for(const z of[-.22,.22])r.cyl(n.iron,.035,.035,.04,F+z,C+.035,X,10,0,0,Math.PI/2),r.box(n.iron,.02,.14,.02,F+z,C+O-.08,G-.02);r.solid(.6,1.2,.45,F,C+.6,X-.15)}$(0,-2.6,3.3),$(o,2.2,3.4);function H(C,F,O=.9,G=!0){if(G&&O===.9){L2(C,F===n.leather2?"tobacco":"oxblood");for(let Et=0;Et<14;Et++)h();C.solid(O,.95,.86,0,.47,0);return}const X=O,ht=.86;C.box(F,X,.3,ht,0,.27,0),C.box(F,X-.3,.13,ht-.24,0,.48,.06);for(const Et of[-1,1])C.box(F,.16,.36,ht-.05,Et*(X/2-.08),.6,.02),C.cyl(F,.095,.095,ht-.02,Et*(X/2-.07),.78,.03,12,Math.PI/2,0,0),C.cyl(n.dark,.03,.022,.12,Et*(X/2-.07),.06,ht/2-.08,8),C.cyl(n.dark,.03,.022,.12,Et*(X/2-.07),.06,-ht/2+.08,8),G&&C.box(F,.1,.45,.3,Et*(X/2-.06),1.05,-ht/2+.2);const ft=G?1.12:.9;C.box(F,X-.04,ft-.4,.2,0,.4+(ft-.4)/2,-ht/2+.1,-.08,0,0),C.cyl(F,.09,.09,X-.06,0,ft,-ht/2+.12,12,0,0,Math.PI/2);for(let Et=0;Et<3;Et++)for(let z=0;z<Math.round(X/.22);z++){const Vt=Math.round(X/.22);C.sphere(n.iron,.012,-X/2+.13+(X-.26)*(z+Et%2*.5)/Vt,.62+Et*.13,-ht/2+.215,1,1,.6,6,4)}C.solid(X,.95,ht,0,.47,0)}function K(C){C.box(n.oak,.44,.04,.42,0,.46,0);for(const[F,O]of[[-.19,.18],[.19,.18],[-.19,-.18],[.19,-.18]])C.cyl(n.oak,.02,.018,.44,F,.22,O,8);for(const F of[-.19,.19])C.box(n.oak,.035,.5,.035,F,.72,-.19,-.1,0,0);C.box(n.oak,.42,.08,.03,0,.94,-.215,-.1,0,0);for(let F=-1;F<=1;F++)C.box(n.oak,.03,.36,.02,F*.1,.72,-.2,-.1,0,0);C.box(n.oak,.38,.02,.02,0,.12,0),C.box(n.leather2,.36,.03,.34,0,.495,.01),C.solid(.44,.95,.44,0,.47,0)}function nt(C,F,O,G,X=0){C.cyl(n.brass,.07,.08,.025,F,O+.012,G,16),C.cyl(n.brass,.01,.01,.3,F,O+.17,G,8),C.cyl(n.brass,.012,.012,.12,F,O+.32,G,6,0,X,Math.PI/2),C.cyl(n.greenGlass,.1,.1,.3,F,O+.34,G,16,0,X,Math.PI/2,!1,0,Math.PI),C.sphere(n.flame,.03,F,O+.31,G,1.6,.6,1)}function W(C,F,O,G,X=1){C.cyl(n.ceramic,.06*X,.09*X,.25*X,F,O+.125*X,G,16),C.cyl(n.brass,.01,.01,.15*X,F,O+.3*X,G,6),C.cyl(n.shade,.1*X,.17*X,.2*X,F,O+.42*X,G,20,0,0,0,!0)}function ot(C,F,O,G,X,ht,ft){C.box(n.gilt,F+2*.07,.07,.05,G,X+O/2+.07/2,ht),C.box(n.gilt,F+2*.07,.07,.05,G,X-O/2-.07/2,ht),C.box(n.gilt,.07,O,.05,G-F/2-.07/2,X,ht),C.box(n.gilt,.07,O,.05,G+F/2+.07/2,X,ht),C.plane(n.painting,F,O,G,X,ht,0,0,0,[ft%2*.5,Math.floor(ft/2)*.5,.5,.5])}function Ct(C,F,O,G,X,ht){t.stack(C.m,F,O,G,X,ht)}function J(C,F,O,G,X=.18){C.cyl(n.brass,.045,.06,.02,F,O+.01,G,12),C.cyl(n.brass,.012,.02,.2,F,O+.11,G,8),C.cyl(n.brass,.03,.02,.03,F,O+.22,G,10),C.cyl(n.paper,.016,.016,X,F,O+.235+X/2,G,8),C.sphere(n.flame,.012,F,O+.25+X,G,1,2,1,6,4)}{const C=r.sub(-.5,0,1.9,0);C.box(n.oak,1.25,.06,3.9,0,.75,0),C.box(n.dark,1.05,.13,3.6,0,.655,0);for(const O of[-1.75,0,1.75])for(const G of[-.5,.5])C.cyl(n.dark,.05,.04,.6,G,.32,O,10),C.sphere(n.dark,.06,G,.45,O,1,.8,1,10,6);C.box(n.dark,.06,.06,3.4,0,.14,0),C.solid(1.25,.8,3.9,0,.4,0),nt(C,0,.78,-.95,Math.PI/2),nt(C,0,.78,.95,Math.PI/2),l.push({p:new U(-.5,1.15,1.9),c:16761466,i:5.5,d:9}),Ct(C,.35,.78,-1.5,4,.2),Ct(C,-.38,.78,1.55,3,-.4),Ct(C,.4,.78,.4,2,1.2),C.box(n.leather,.44,.012,.3,-.15,.786,-.25,0,.1,0),C.box(n.paper,.2,.025,.28,-.255,.8,-.26,0,.1,.06),C.box(n.paper,.2,.025,.28,-.055,.8,-.24,0,.1,-.06),C.box(n.paper,.21,.004,.29,.3,.783,.9,0,-.3,0),C.cyl(n.iron,.03,.03,.05,.42,.805,.95,10),C.cyl(n.brass,.002,.002,.18,.4,.86,.95,4,0,0,.4);const F=[[-.88,-1.2,Math.PI/2],[-.92,.05,Math.PI/2+.15],[-.86,1.25,Math.PI/2],[.86,-1.25,-Math.PI/2],[1.15,.1,-Math.PI/2-.4],[.88,1.2,-Math.PI/2]];for(const[O,G,X]of F)K(C.sub(O,0,G,X))}{V2(r);const C=new si(3.4,5.2);C.rotateX(-Math.PI/2),C.rotateY(Math.PI/2),r.geo(n.rug,C,0,.008,6.8);const F=new si(2.2,3.2);F.rotateX(-Math.PI/2),r.geo(n.rug,F,-9.4,.008,4.9)}{const C=r.sub(0,0,9,Math.PI);C.box(n.stone,2.7,.08,.75,0,.04,.37);for(const F of[-1,1])C.box(n.stone,.38,1.28,.38,F*.96,.64,.19);C.box(n.stone,2.3,.36,.4,0,1.46,.2),C.box(n.dark,2.7,.08,.48,0,1.68,.24),C.box(n.plaster,2.3,3,.3,0,3.22,.15),C.box(n.soot,1.56,1.28,.04,0,.64,.02),C.box(n.soot,1.56,.02,.38,0,.09,.19);for(let F=0;F<6;F++)C.box(n.iron,.025,.25,.025,-.4+F*.16,.24,.3);C.box(n.iron,.9,.03,.3,0,.14,.2),C.cyl(n.dark,.06,.07,.75,0,.22,.18,8,0,.1,Math.PI/2),C.cyl(n.dark,.05,.05,.7,.05,.3,.24,8,0,-.3,Math.PI/2),C.box(n.ember,.8,.03,.26,0,.165,.2),C.sphere(n.ember,.12,-.1,.25,.2,2.2,.5,.8,8,6),C.solid(2.7,1.72,.8,0,.86,.4),J(C,-1.05,1.72,.25),J(C,1.05,1.72,.25,.14),C.box(n.dark,.32,.36,.14,0,1.9,.37+yt),C.cyl(n.ceramic,.11,.11,.02,0,1.94,.45+yt,20,Math.PI/2,0,0),C.cyl(n.brass,.125,.125,.015,0,1.94,.445+yt,20,Math.PI/2,0,0),C.cyl(n.terracotta,.05,.08,.22,.6,1.83,.22,12),Ct(C,-.6,1.72,.24,2,.3),ot(C,1.4,.95,0,3.5,.325+yt,2),C.cyl(n.iron,.012,.012,.8,1.32,.4,.55,6,0,0,.08),C.cyl(n.brass,.025,.025,.06,1.35,.82,.55,8),l.push({p:new U(0,.55,8.35),c:16747068,i:6,d:10,fire:!0})}H(r.sub(0,0,5.7,0),n.leather,2.2,!1),H(r.sub(-2.15,0,7.4,Math.PI/2-.2),n.leather2),H(r.sub(2.15,0,7.4,-Math.PI/2+.25),n.leather);{const C=r.sub(0,0,7.3,.05);C.box(n.oak,1.1,.05,.6,0,.42,0);for(const[O,G]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]])C.box(n.dark,.05,.4,.05,O,.2,G);C.box(n.dark,1,.02,.5,0,.1,0),C.solid(1.1,.45,.6,0,.22,0),Ct(C,-.25,.445,0,3,.5),C.cyl(n.ceramic,.04,.03,.07,.25,.48,.05,12),C.torus(n.ceramic,.025,.006,.29,.48,.05,0,0,0,10),C.cyl(n.ceramic,.07,.07,.008,.25,.449,.05,16),Ct(C,-.2,.12,0,3,0);const F=r.sub(1.45,0,5.75,0);F.cyl(n.dark,.25,.25,.03,0,.6,0,20),F.cyl(n.dark,.03,.04,.58,0,.3,0,8),F.cyl(n.dark,.18,.2,.03,0,.015,0,16),F.solid(.5,.62,.5,0,.31,0),W(F,0,.615,0,1.1)}{r.box(n.oak,.6,.45,4,-11.19,.225,4.9),r.solid(.62,.45,4,-11.2,.225,4.9),r.box(n.cushion,.56,.1,3.9,-11.2,.5,4.9),r.box(n.cushion2,.16,.42,.5,-11.38,.74,3.25,0,0,-.25),r.box(n.leather2,.16,.38,.46,-11.38,.72,6.5,0,.2,-.3),r.box(n.cushion,.4,.06,.6,-11.1,.58,5.2,0,.4,0),t.stack(r.m,-11.2,.55,4.3,3,.4),r.cyl(n.terracotta,.11,.08,.2,-11.25,.65,6,14);for(let O=0;O<9;O++){const G=O/9*Math.PI*2;r.box(n.plant,.06,.32,.01,-11.25+Math.cos(G)*.06,.88,6+Math.sin(G)*.06,Math.sin(G)*.5,G,Math.cos(G)*.5)}H(r.sub(-9.3,0,3.4,-Math.PI/2+.55),n.leather),H(r.sub(-9.3,0,6.35,-Math.PI/2-.55),n.leather2);const C=r.sub(-9.9,0,4.9,0);C.cyl(n.oak,.3,.3,.035,0,.6,0,24),C.cyl(n.dark,.035,.05,.58,0,.3,0,10);for(let O=0;O<3;O++){const G=O/3*Math.PI*2;C.box(n.dark,.05,.05,.3,Math.cos(G)*.12,.04,Math.sin(G)*.12,0,-G+Math.PI/2,0)}C.solid(.6,.62,.6,0,.31,0),Ct(C,-.08,.62,-.08,3,.7),C.cyl(n.ceramic,.045,.035,.06,.14,.65,.1,12),C.cyl(n.ceramic,.075,.075,.008,.14,.62,.1,16);const F=r.sub(-8,0,7,0);F.cyl(n.iron,.16,.18,.03,0,.015,0,16),F.cyl(n.iron,.014,.014,1.5,0,.76,0,8),F.cyl(n.shade,.14,.24,.28,0,1.55,0,20,0,0,0,!0),F.solid(.36,1.6,.36,0,.8,0),l.push({p:new U(-8,1.5,6.9),c:16757866,i:4,d:7}),ot(r.sub(-7.5,0,2.4,0),.5,.4,-.45,2,.03,3),Ct(r,-8.6,0,7.15,5,.3)}{const C=r.sub(-5.9,0,-.7,.3);for(let F=0;F<6;F++)h();Z2(C,n),C.solid(.7,1.3,.7,0,.65,0)}{const C=r.sub(5.5,0,-1.22,Math.PI);C.box(n.oak,1.9,1.1,.5,0,.55,.25);for(let F=0;F<8;F++)for(let O=0;O<6;O++){const G=-.82+F*.235,X=.22+O*.15;C.box(n.walnut,.2,.12,.02,G,X,.505),C.box(n.brass,.05,.012,.02,G,X-.02,.52),C.box(n.paper,.05,.025,.005,G,X+.025,.517)}C.box(n.walnut,2,.05,.56,0,1.125,.25),C.solid(1.9,1.15,.5,0,.57,.25),W(C,.65,1.15,.25,.9),Ct(C,-.4,1.15,.25,4,.2),r.cyl(n.brass,.008,.008,.75,5.5,o-.95,-4.1,6),r.cyl(n.brass,.04,.04,.05,5.5,o-.6,-4.1,10),r.cyl(n.shade,.1,.22,.2,5.5,o-1.38,-4.1,20,0,0,0,!0),r.sphere(n.flame,.035,5.5,o-1.4,-4.1,1,1,1,8,6),l.push({p:new U(5.5,o-1.5,-4.1),c:16759930,i:3.5,d:7})}{const C=r.sub(-5.6,o,-8.85,0);z2(C),C.solid(1.4,.8,.7,0,.4,0),nt(C,-.4,.785,-.1,0),Ct(C,.45,.785,-.1,5,0),C.box(n.paper,.3,.004,.22,.05,.787,.1,0,.2,0),K(C.sub(.05,0,.6,Math.PI+.2)),l.push({p:new U(-5.9,o+1.25,-8.85),c:16761466,i:4.5,d:8}),H(r.sub(6,o,-3.6,-Math.PI/2),n.leather2);const F=r.sub(6.1,o,-2.4,0);F.cyl(n.dark,.22,.22,.03,0,.55,0,18),F.cyl(n.dark,.03,.03,.54,0,.27,0,8),F.cyl(n.dark,.15,.17,.03,0,.015,0,14),F.solid(.44,.58,.44,0,.29,0),Ct(F,0,.565,0,3,.4),t.stack(r.m,3.4,o,-9,6,.2),t.stack(r.m,-1.6,0,-8.9,4,.1)}for(const[C,F,O]of[[-.5,6.2,1.9],[-2.3,7,-3.7]]){r.torus(n.iron,.75,.025,C,F,O,Math.PI/2,0,0,40),r.torus(n.iron,.4,.018,C,F-.25,O,Math.PI/2,0,0,28),r.cyl(n.iron,.006,.006,10.5-F,C,(10.5+F)/2,O,4);for(let G=0;G<4;G++){const X=G/4*Math.PI*2+.4;r.cyl(n.iron,.005,.005,1.1,C+Math.cos(X)*.37,F+.45,O+Math.sin(X)*.37,4,Math.sin(X)*.72,0,-Math.cos(X)*.72)}for(let G=0;G<10;G++){const X=G/10*Math.PI*2,ht=C+Math.cos(X)*.75,ft=O+Math.sin(X)*.75;r.cyl(n.iron,.03,.02,.04,ht,F+.03,ft,8),r.cyl(n.paper,.014,.014,.14,ht,F+.12,ft,6),r.sphere(n.flame,.011,ht,F+.205,ft,1,2,1,6,4)}}ot(r.sub(7,0,0,-Math.PI/2),1.1,.8,4.6,3.1,.03,0),ot(r.sub(7,0,0,-Math.PI/2),.9,1.2,.7,5.3,.03,1),ot(r.sub(-7,0,0,Math.PI/2),.9,.7,2.6,3.2,.03,3),ot(r.sub(-7,0,0,Math.PI/2),.9,.7,-1.4,3.2,.03,1);{const C=r;C.sphere(n.ceramic,.12,-3.6,2.5,-5,.85,1.1,.85,14,10),C.cyl(n.ceramic,.07,.1,.16,-3.6,2.4,-5,12),C.box(n.stone,.2,.08,.2,-3.6,2.36,-5),t.stack(r.m,-1.2,2.325,-5,3,.3),C.cyl(n.terracotta,.12,.09,.26,-1,2.455,-2.4,14),C.sphere(n.plant,.18,-1,2.7,-2.4,1,.7,1,10,6),t.stack(r.m,-3.2,2.325,-2.4,4,1.2),J(r,-2.4,2.325,-2.4)}const at=(C,F,O)=>{const G=new wr(s,C.m),X=h();if(X<.35)G.box(n.iron,.012,Math.min(.16,C.clear-.02),.11,F-O/2+.01,Math.min(.16,C.clear-.02)/2,-.08),G.box(n.iron,.09,.006,.11,F-O/2+.05,.003,-.08);else if(X<.55&&C.clear>.22)G.cyl(h()<.5?n.ceramic:n.terracotta,.035,.05,.15,F,.075,-.1,12);else if(X<.75){const ht=Math.min(O-.02,.14);G.box(h()<.5?n.walnut:n.leather2,ht,Math.min(.08,C.clear-.02),.12,F,.04,-.1)}else X<.85&&C.clear>.2&&G.box(n.gilt,.1,.13,.012,F,.065,-.12,-.15,0,0)};for(const C of c)t.fillSlot(C,at);return s.finish=s.finish.bind(s),{B:s,lights:l,windows:u,slots:c}}const fl=[[.36,.08,.06],[.42,.12,.08],[.12,.2,.12],[.1,.16,.28],[.18,.1,.06],[.48,.32,.16],[.06,.06,.06],[.55,.42,.2],[.16,.26,.26],[.3,.1,.16],[.62,.55,.42],[.26,.24,.2],[.4,.24,.1],[.2,.12,.2],[.7,.62,.48]],dl=new We,pl=new Ie,tm=new U,em=new U;class nm{constructor(t){this.rand=t,this.mats=[],this.cols=[],this.vars=[]}color(t,e=0){const i=this.rand,s=t||fl[Math.floor(i()*fl.length)],r=.8+i()*.4,a=e||(i()<.12?.2+i()*.25:0);return[s[0]*r*(1-a)+.55*a,s[1]*r*(1-a)+.48*a,s[2]*r*(1-a)+.38*a]}add(t,e,i,s,r,a,o,c,l,u,h=0){pl.set(0,h,r),dl.setFromEuler(pl);const f=new jt().compose(tm.set(e,i,s),dl,em.set(a,o,c));f.premultiply(t),this.mats.push(f),this.cols.push(l),this.vars.push(u)}fillSlot(t,e){const i=this.rand,{m:s,len:r,clear:a,d:o}=t;let c=.01+i()*.04,l=.25;for(;c<r-.03;){const u=i(),h=r-c;if(u<.07&&h>.34&&a>.16){const x=2+Math.floor(i()*4);let T=0,E=0;const w=.2+i()*.1;for(let b=0;b<x;b++){const S=.022+i()*.04;if(T+S>a-.02)break;const M=Math.min(w+(i()-.5)*.06,h-.03),A=Math.min(o-.02,.15+i()*.08);this.add(s,c+M/2+(i()-.5)*.02,T+S/2,-A/2-.01-i()*.02,Math.PI/2,S,M,A,this.color(),Math.floor(i()*8),(i()-.5)*.12),T+=S,E=Math.max(E,M)}c+=E+.02+i()*.03;continue}if(u<.13){const x=.06+i()*.16;e&&x>.1&&h>.2&&e(t,c+x/2,x),c+=x;continue}const f=i()<.4,d=f?4+Math.floor(i()*10):3+Math.floor(i()*12),p=this.color(),_=Math.floor(i()*8),m=Math.min(a-.02,.2+i()*.16),g=.03+i()*.03,v=Math.min(o-.02,.15+i()*.08),y=i()<.2?.08:0;for(let x=0;x<d&&c<r-.03;x++){let T,E,w,b,S;if(f?(T=g*(.85+i()*.3),E=m,w=v,b=i()<.08?this.color():p,S=_):(T=.016+i()*.05+(i()<.1?.03:0),E=Math.min(a-.015,.17+i()*.17+y),w=Math.min(o-.02,.12+i()*.13),b=this.color(),S=Math.floor(i()*8)),c+T>r-.01)break;const M=.006+i()*(i()<.15?.06:.018);this.add(s,c+T/2,E/2,-w/2-M,0,T,E,w,b,S,(i()-.5)*.03),c+=T+.0015,l=E}if(i()<.35&&r-c>.12){const x=.12+i()*.3,T=.02+i()*.03,E=Math.min(l*.95,a-.03,.18+i()*.12),w=Math.min(o-.02,.14+i()*.08),b=c+T/2*Math.cos(x)+E/2*Math.sin(x),S=T/2*Math.sin(x)+E/2*Math.cos(x);c+T*Math.cos(x)+E*Math.sin(x)<r-.01&&(this.add(s,b,S,-w/2-.01,x,T,E,w,this.color(),Math.floor(i()*8)),c+=T*Math.cos(x)+E*Math.sin(x))}c+=.004+i()*.04}}stack(t,e,i,s,r,a=0){const o=this.rand;let c=i;for(let l=0;l<r;l++){const u=.025+o()*.04,h=.2+o()*.12,f=.15+o()*.08;this.add(t,e+(o()-.5)*.03,c+u/2,s+(o()-.5)*.03,Math.PI/2,u,h,f,this.color(),Math.floor(o()*8),a+(o()-.5)*.4),c+=u}return c}build(t){const e=new Tn(1,1,1),i=e.attributes.uv,s=new Float32Array(i.count),r=new Float32Array(i.count);for(let f=0;f<6;f++)for(let d=0;d<4;d++){const p=f*4+d;let _=i.getX(p),m=i.getY(p);if(f===4)_=_*.0625,s[p]=1;else if(f===0||f===1)_=.76+_*.23;else if(f===2||f===3){const g=_;_=.51+m*.23,m=g,r[p]=1}else _=.51+_*.23,r[p]=1;i.setXY(p,_,m)}e.setAttribute("aSpine",new pe(s,1)),e.setAttribute("aPage",new pe(r,1));const a=this.mats.length,o=new Float32Array(a);for(let f=0;f<a;f++)o[f]=this.vars[f];e.setAttribute("aVar",new oa(o,1));const c=new h2({map:t});c.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
attribute float aSpine;
attribute float aPage;
attribute float aVar;
varying float vPage;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x += aSpine * aVar * 0.0625;
vPage = aPage;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.xyz = mix(vColor.xyz, vec3(0.78, 0.71, 0.57), aPage);`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
varying float vPage;`).replace("#include <color_fragment>",`
          float gm = 0.0;
          #ifdef USE_MAP
            gm = clamp((sampledDiffuseColor.r - sampledDiffuseColor.b - 0.18) * 4.0, 0.0, 1.0) * (1.0 - vPage);
          #endif
          diffuseColor.rgb *= mix(vColor, vec3(1.25), gm);
        `).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.32, gm);
`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor = mix(metalnessFactor, 0.85, gm);
`)};const l=e.index.array;e.setIndex(Array.from(l.slice(0,30)));const u=new Aa(e,c,a),h=new Ht;for(let f=0;f<a;f++){u.setMatrixAt(f,this.mats[f]);const d=this.cols[f];h.setRGB(d[0],d[1],d[2]),u.setColorAt(f,h)}return u.instanceMatrix.needsUpdate=!0,u.instanceColor.needsUpdate=!0,u.castShadow=!0,u.receiveShadow=!0,u.computeBoundingSphere(),u}}const ml=.0026,gl=Math.PI/2-.02;function im({canvas:n,overlay:t,menuButton:e,player:i,camera:s,releaseMovement:r,toast:a,isInputBlocked:o=()=>!1,setMenuPaused:c=()=>{}}){const l=t.querySelector("#look-sensitivity"),u=t.querySelector("#look-sensitivity-value"),h=t.querySelector("[data-resume-look]");let f=ml,d=!1,p=!1,_=!1,m=!1,g=!1,v=document.hasFocus(),y=!1,x=!1,T=0,E=0,w=0,b=!1,S=!1;const M=[];function A(W,ot,Ct,J){W.addEventListener(ot,Ct,J),M.push(()=>W.removeEventListener(ot,Ct,J))}function N(){return!S&&!b&&v&&!t.open&&!o()}function P(){n.focus({preventScroll:!0}),v=document.visibilityState==="visible"&&document.hasFocus()}function I(W,ot){!Number.isFinite(W)||!Number.isFinite(ot)||(i.yaw-=W*f,i.pitch=Math.max(-gl,Math.min(gl,i.pitch-ot*f)),s.rotation.set(i.pitch,i.yaw,0))}function k(){++w,d=_=m=p=g=!1,r(),document.pointerLockElement===n&&document.exitPointerLock()}function B(){t.open&&t.close(),c(!1),!S&&!b&&P()}function $(){if(!(S||b||t.open||o()))return k(),t.showModal(),c(!0),h.focus({preventScroll:!0}),!0}function H(){_=g=!1,N()&&(y=!0,a("Hold left mouse to look. Esc opens controls."))}async function K(){if(d||_||!N())return;if(!n.requestPointerLock){H();return}const W=++w;_=g=!0,m=!1;try{const ot=n.requestPointerLock({unadjustedMovement:!0});if(!ot||typeof ot.then!="function"){m=!0;return}try{await ot}catch(Ct){if(Ct.name!=="NotSupportedError"||W!==w||!N())throw Ct;await n.requestPointerLock()}}catch{W===w&&N()&&H()}finally{W===w&&!m&&(_=!1)}}A(e,"click",$),A(h,"click",()=>{B(),K()}),A(t,"cancel",W=>{W.preventDefault(),B()}),A(t,"close",()=>{c(!1),!S&&!b&&P()}),A(n,"mousedown",W=>{W.button!==0||S||b||t.open||o()||(P(),!(d||!N())&&(x=!y,p=!0,T=W.clientX,E=W.clientY,K()))}),A(n,"click",W=>{x&&(x=!1,W.stopImmediatePropagation())},!0),A(n,"keydown",W=>{W.code==="Enter"&&!W.repeat&&N()&&(K(),W.preventDefault())}),A(globalThis,"mouseup",()=>{p=!1}),A(globalThis,"mousemove",W=>{if(!(!N()||document.visibilityState!=="visible")){if(d)I(W.movementX,W.movementY);else if(p){if(!(W.buttons&1)){p=!1;return}I(W.clientX-T,W.clientY-E),T=W.clientX,E=W.clientY}}}),A(document,"pointerlockchange",()=>{const W=d;d=document.pointerLockElement===n,_=m=p=!1,d&&(!N()||!g)&&(document.exitPointerLock(),d=!1),d?(y=!1,P()):(g=!1,W&&r())}),A(document,"pointerlockerror",()=>{m&&_&&(m=!1,H())});function nt(){v=!1,y=!1,k()}return A(globalThis,"blur",nt),A(globalThis,"focus",()=>{v=document.visibilityState==="visible"}),A(document,"visibilitychange",()=>{document.visibilityState!=="visible"?nt():v=document.hasFocus()}),A(globalThis,"keydown",W=>{W.code==="Escape"&&!W.repeat&&!t.open&&$()&&W.preventDefault()}),A(l,"input",()=>{const W=Math.max(40,Math.min(220,Number(l.value)||100));f=ml*W/100,u.textContent=`${W}%`}),{get menuOpen(){return t.open},pause(){b=!0,nt()},resume(){S||(b=!1,v=document.visibilityState==="visible"&&document.hasFocus())},dispose(){if(!S){S=!0,b=!0,nt();for(const W of M)W();t.open&&t.close()}}}}const _l=Object.freeze({welcome:{label:"Welcome book",cover:["A place","for you"],color:3362112,kicker:"Welcome · first shelf",title:"A place to leave good things",paragraphs:["Come in, take a seat, and read something that catches your attention. I’ve left a short find on the table and connected the writing desk to the private project workspace.","Start with Shapes & sound, the rust-colored book nearby. When you want to work on personal notes or decisions, visit the writing desk upstairs.","This first shelf is small. The room can change as better buildings arrive; the things worth keeping can move with it."],links:[],signature:"Left for you — Jippity"},drums:{label:"Shapes & sound",cover:["Shapes","& sound"],color:7356719,kicker:"An interesting find · mathematics",title:"Different shapes, the same spectrum",paragraphs:["Two mathematically different ideal drumheads can have exactly the same set of resonant frequencies, including their multiplicities. Gordon, Webb and Wolpert constructed distinct planar shapes with this property: the frequency list alone does not uniquely reveal the boundary.","There is a stronger surprise. Buser, Conway, Doyle and Semmler gave a homophonic pair with a special point on each drum. Corresponding normalized vibration modes take matching values there. In the ideal point-strike model, striking those points excites every frequency with matching strength.","The assumptions matter: ideal membranes with matching tension and density, fixed boundaries, and the mathematical wave model. This does not mean arbitrary real rooms, instruments or recordings sound identical. Strike location, damping, material, acoustics and how you listen still matter in practice.","That is the part I find interesting: a complete frequency list can be precise and still leave the shape ambiguous."],links:[{label:"Gordon, Webb & Wolpert · One cannot hear the shape of a drum (1992)",href:"https://arxiv.org/pdf/math/9207215"},{label:"Buser, Conway, Doyle & Semmler · Some planar isospectral domains (1994)",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],signature:"Selected by Jippity"},desk:{label:"Project Library",kicker:"The writing desk",title:"Project Library",paragraphs:["Personal notes and decisions belong in the signed-in Project Library. Open that workspace when you’re ready to write or pick up a project.","This desk is just the entrance. The link opens your private workspace in a new tab; sign in there if asked."],links:[{label:"Open private Project Library",href:"https://jippity-project-room.pazneria.chatgpt.site"}],signature:"Jippity"}}),xl=Object.freeze([{id:"table-welcome",contentId:"welcome",position:[-.35,.808,3.53],yaw:.12,kind:"book",bounds:{x0:-.53,x1:-.17,y0:.783,y1:.84,z0:3.32,z1:3.74}},{id:"table-drums",contentId:"drums",position:[-.87,.808,2.35],yaw:-.18,kind:"book",bounds:{x0:-1.06,x1:-.68,y0:.783,y1:.84,z0:2.13,z1:2.57}},{id:"gallery-writing-desk",contentId:"desk",kind:"existing-paper",position:[-5.55,4.999,-8.75],bounds:{x0:-5.76,x1:-5.34,y0:4.98,y1:5.025,z0:-8.94,z1:-8.56}}]),sm=2.2;function rm(n,t,e,i=()=>document.createElement("canvas")){const s=t.filter(E=>E.kind==="book"),r=i();r.width=256*s.length,r.height=384;const a=r.getContext("2d"),o=[],c=[],l=new U(0,1,0),u=[],h=new jt,f=new We,d=new U,p=new Tn(1,1,1),_=new Te({roughness:.85,color:16777215}),m=new Aa(p,_,s.length),g=new U;for(let E=0;E<s.length;E++){const w=s[E],b=e[w.contentId],S="#"+b.color.toString(16).padStart(6,"0");a.fillStyle=S,a.fillRect(E*256,0,256,384),a.strokeStyle="#c7a96c",a.lineWidth=2,a.strokeRect(E*256+20,24,216,336),a.fillStyle="#f0dfbe",a.textAlign="center",a.font="30px Georgia",b.cover.forEach((M,A)=>a.fillText(M,E*256+128,154+A*42)),a.font="15px Georgia",a.fillText("JIPPITY",E*256+128,304),f.setFromAxisAngle(l,w.yaw),h.compose(g.fromArray(w.position),f,d.set(.26,.038,.34)),m.setMatrixAt(E,h),m.setColorAt(E,new Ht(b.color));for(const[M,A,N,P]of[[-.13,.17,0,0],[.13,.17,1,0],[.13,-.17,1,1],[-.13,.17,0,0],[.13,-.17,1,1],[-.13,-.17,0,1]])g.set(M,.021,A).applyQuaternion(f).add(new U().fromArray(w.position)),o.push(g.x,g.y,g.z),u.push(0,1,0),c.push((E+N)/s.length,P)}m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0);const v=new Qt;v.setAttribute("position",new Ot(o,3)),v.setAttribute("normal",new Ot(u,3)),v.setAttribute("uv",new Ot(c,2));const y=new ji(r);y.colorSpace=he;const x=new Te({map:y,roughness:.9}),T=new Jt(v,x);return m.name="Jippity reading books",T.name="Jippity book covers",n.add(m,T),{objects:[m,T],budget:{books:s.length,drawCalls:2,triangles:s.length*14,texturePixels:r.width*r.height},dispose(){n.remove(m,T),m.dispose(),p.dispose(),_.dispose(),v.dispose(),x.dispose(),y.dispose()}}}const om=["x","y","z"];function fr(n,t,e,i=1/0){let s=0,r=i;if(!Number.isFinite(Math.hypot(t.x,t.y,t.z))||Math.hypot(t.x,t.y,t.z)<1e-10)return null;for(const a of om){const o=n[a],c=t[a],l=e[a+"0"],u=e[a+"1"];if(!Number.isFinite(o)||!Number.isFinite(c)||!Number.isFinite(l)||!Number.isFinite(u))return null;if(Math.abs(c)<1e-10){if(o<l||o>u)return null}else{const h=(l-o)/c,f=(u-o)/c;if(s=Math.max(s,Math.min(h,f)),r=Math.min(r,Math.max(h,f)),s>r)return null}}return r>=0?s:null}function vl(n,t,e,i,s=2.2){let r=null,a=s;for(const o of e){const c=fr(n,t,o.bounds,a);c!==null&&c<=a&&(r=o,a=c)}if(!r)return null;for(const o of i){const c=fr(n,t,o,a);if(c!==null&&c+.025<a)return null}return r}function Er(n){var t;return!!((t=n==null?void 0:n.closest)!=null&&t.call(n,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))}const ss="jippityLibraryReader";function am({document:n,window:t,canvas:e,dialog:i,hint:s,content:r,getTarget:a,canInteract:o,look:c,setPaused:l,releaseMovement:u,returnFocus:h}){const f=i.querySelector("#reader-title"),d=i.querySelector("#reader-kicker"),p=i.querySelector("#reader-pages"),_=i.querySelector("#reader-links"),m=i.querySelector("#reader-signature"),g=[];let v=null,y=!1,x=!1,T=null;function E(N,P,I){N.addEventListener(P,I),g.push(()=>N.removeEventListener(P,I))}function w(N){const P=r[N];d.textContent=P.kicker,f.textContent=P.title,p.replaceChildren(),_.replaceChildren();for(const I of P.paragraphs){const k=n.createElement("p");k.textContent=I,p.append(k)}for(const I of P.links){const k=n.createElement("a");k.textContent=I.label,k.href=I.href,k.target="_blank",k.rel="noopener noreferrer",k.referrerPolicy="no-referrer",_.append(k)}_.hidden=!P.links.length,m.textContent=P.signature}function b(N,P=!0){if(y||x||!Object.hasOwn(r,N))return!1;const I=v!==null;if(v=N,u(),c.pause(),l(!0),s.hidden=!0,w(N),n.body.classList.add("reading-open"),i.open||i.showModal(),i.scrollTop=0,f.focus({preventScroll:!0}),P){const k={...t.history.state,[ss]:N};I?t.history.replaceState(k,"",t.location.href):t.history.pushState(k,"",t.location.href)}return!0}function S(){v!==null&&(v=null,i.open&&i.close(),n.body.classList.remove("reading-open"),s.hidden=!0,u(),c.resume(),l(!1),h==null||h.focus({preventScroll:!0}))}function M(){var P;if(v===null)return;const N=((P=t.history.state)==null?void 0:P[ss])===v;S(),N&&(x=!0,t.history.back())}function A(){if(v!==null||y||x||!o())return!1;const N=a();return N?b(N.contentId):!1}return E(t,"keydown",N=>{N.code!=="KeyE"||N.repeat||v!==null||Er(N.target)||A()&&N.preventDefault()}),E(e,"mousedown",N=>{T=N.button===0?{x:N.clientX,y:N.clientY,dragged:!1}:null}),E(t,"mousemove",N=>{T&&Math.hypot(N.clientX-T.x,N.clientY-T.y)>5&&(T.dragged=!0)}),E(e,"click",N=>{const P=T==null?void 0:T.dragged;T=null,!P&&(N.button===void 0||N.button===0)&&A()}),E(s,"click",A),E(i,"cancel",N=>{N.preventDefault(),M()}),E(i.querySelector("#reader-close"),"click",M),E(i.querySelector("#reader-back"),"click",M),E(i,"close",M),E(t,"popstate",N=>{var I;x=!1;const P=(I=N.state)==null?void 0:I[ss];P&&Object.hasOwn(r,P)?b(P,!1):S()}),{get isOpen(){return v!==null},openNearby:A,close:M,updateHint(){const N=!y&&v===null&&o()?a():null;s.hidden=!N,N&&(s.textContent=`E — ${r[N.contentId].label}`)},dispose(){var N;if(!y){y=!0;for(const P of g)P();if(i.open&&i.close(),v=null,s.hidden=!0,n.body.classList.remove("reading-open"),(N=t.history.state)!=null&&N[ss]){const P={...t.history.state};delete P[ss],t.history.replaceState(P,"",t.location.href)}u(),c.pause(),l(!0)}}}}const cm=1,lm="shapes-and-sound",um="Shapes & Sound",hm="A small study of shared resonances",fm="Jippity · Field notes",dm="No. 01",pm="Selected by Jippity",mm={lines:["SHAPES","& SOUND"],spine:"SHAPES & SOUND",imprint:"JIPPITY",note:"ON THE GEOMETRY OF LISTENING"},gm=[{kind:"title",eyebrow:"Mathematics / Acoustics",title:`Shapes
& Sound`,paragraphs:["Different outlines can share the same ideal resonances. A short reading on what a sound can tell us—and what it can leave hidden."],note:"An original decorative resonance motif accompanies this text; it is not a diagram of an isospectral pair."},{kind:"text",eyebrow:"01 / The question",title:"Can a sound reveal a shape?",paragraphs:["Imagine an ideal, uniformly tensioned drumhead held fixed along its edge. Its natural vibration frequencies form a kind of fingerprint. Could that complete list determine its outline?","In 1992, Carolyn Gordon, David Webb, and Scott Wolpert announced differently shaped planar domains with the same spectrum. For this mathematical model, the answer is no."],sourceIds:["gww"]},{kind:"text",eyebrow:"02 / The construction",title:"Rearranging the pieces",paragraphs:["Peter Buser, John Conway, Peter Doyle, and Klaus-Dieter Semmler describe pairs assembled from congruent triangles. Their proof moves and combines pieces of vibration patterns from one domain to the other.","This “transplantation” preserves each eigenvalue and its multiplicity. The boundaries differ, yet the full spectral lists agree."],note:"Isospectral means equal spectra, including repeated eigenvalues.",sourceIds:["bcds"]},{kind:"text",eyebrow:"03 / A finer distinction",title:"The same notes are not the whole sound",paragraphs:["Matching natural frequencies does not by itself specify how strongly a particular strike excites them.","Buser and colleagues also give a stronger example: a homophonic pair with special corresponding strike points. In their ideal model, striking at those points excites matching frequencies with matching intensities."],sourceIds:["bcds"]},{kind:"text",eyebrow:"04 / Beyond the ideal",title:"And what about this room?",paragraphs:["The theorem concerns ideal mathematical domains. A real room adds three-dimensional geometry, absorbing surfaces, furnishings, and the positions of both source and listener.","It does not say that arbitrary differently shaped rooms—or ordinary recordings of real drums—sound identical. The lesson is more precise: even complete spectral information can leave some geometry unresolved."],note:"A mathematical possibility, not a room-acoustics simulation.",sourceIds:["gww","bcds"]},{kind:"sources",eyebrow:"Reading desk / Sources",title:"Follow the proof",paragraphs:["Two public papers for a longer visit. Links open only when you choose them."],sourceIds:["gww","bcds"],note:"Public reading sample · No audio simulation"}],_m=[{id:"gww",authors:"Carolyn Gordon, David L. Webb & Scott Wolpert",title:"One cannot hear the shape of a drum",detail:"Research announcement · 1992",href:"https://arxiv.org/pdf/math/9207215"},{id:"bcds",authors:"Peter Buser, John Conway, Peter Doyle & Klaus-Dieter Semmler",title:"Some planar isospectral domains",detail:"Version 1.0.1 · 1994",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],xm={schemaVersion:cm,id:lm,title:um,subtitle:hm,series:fm,edition:dm,signature:pm,cover:mm,pages:gm,sources:_m},vm=1,ym="welcome-to-the-library",Mm="A Place for Good Things",bm="Come in. Find a page worth keeping.",Sm="Jippity · The first shelf",wm="Welcome / 01",Em="Left for you — Jippity",Tm={lines:["A PLACE","FOR GOOD THINGS"],spine:"A PLACE FOR GOOD THINGS",imprint:"JIPPITY",note:"A WELCOME TO THE LIBRARY"},Am=[{kind:"title",eyebrow:"Welcome / The first shelf",title:`A place for
good things`,paragraphs:["Come in, take a seat, and read something that catches your attention. A good library makes room for curiosity and gives useful things a place to return to."],note:"The books can move with the room. The things worth keeping can stay."},{kind:"text",eyebrow:"A short way around",title:"Find your next page",paragraphs:["Start with Shapes & Sound, the petrol-cloth book nearby. It follows a precise and surprising question: how much can a sound tell you about a shape?","A Working Notebook rests on the north shelf downstairs. It is a public example of a small project book: a question, a useful observation, and a next step.","The writing desk upstairs leads to the signed-in Project Library. Visit it when you want to work on personal notes or decisions."],note:"Inspect a nearby book with E or a deliberate click. Read when you are ready; Escape returns you to its place."}],Rm=[],Cm={schemaVersion:vm,id:ym,title:Mm,subtitle:bm,series:Sm,edition:wm,signature:Em,cover:Tm,pages:Am,sources:Rm},Pm=1,Im="public-working-notebook",Lm="A Working Notebook",Dm="Small notes that make the next visit useful",Um="Jippity · Public notebooks",Nm="Sample / 01",Fm="A public example — Jippity",Om={lines:["A WORKING","NOTEBOOK"],spine:"A WORKING NOTEBOOK",imprint:"JIPPITY",note:"QUESTION · OBSERVATION · NEXT STEP"},Bm=[{kind:"title",eyebrow:"Public sample / Project book",title:`A working
notebook`,paragraphs:["A project book can be small enough to revisit and clear enough to continue. This one shows a simple pattern for useful notes."],note:"This sample contains public guidance. Personal work belongs in the signed-in Project Library."},{kind:"text",eyebrow:"01 / The question",title:"Leave a clear beginning",paragraphs:["Give a note one question to answer. Write enough context that you can understand it on the next visit, without having to reconstruct the whole conversation.","For a room like this, a useful question is: can a visitor find a book, read it comfortably, and return to exactly where they were?"],note:"A title should help someone choose a book before opening it."},{kind:"text",eyebrow:"02 / The observation",title:"Keep what helps",paragraphs:["Record the observation that changes your next decision. Separate what you have checked from what you still want to try.","In this public example, book content and placement are separate. The same edition can sit on a table or a shelf, while its pages and sources remain together."],note:"Add a source when it supports the note. Keep speculation recognizable as a question."},{kind:"text",eyebrow:"03 / The next visit",title:"End with a next step",paragraphs:["Leave one concrete action at the end of a note. A small, useful next step makes it easier to pick up the project later.","For this example: choose a public topic, give it a short edition with clear pages, and check its placement from a visitor's standing position."],note:"Revisit and revise the edition as the project changes. Keep private notes in their authenticated workspace."}],zm=[],km={schemaVersion:Pm,id:Im,title:Lm,subtitle:Dm,series:Um,edition:Nm,signature:Fm,cover:Om,pages:Bm,sources:zm},d0=Object.freeze({drums:{content:xm,summary:"A small study of shared resonances, with two primary papers.",palette:{}},welcome:{content:Cm,summary:"A short welcome and a guide to the first shelf.",palette:{cloth:"#334d40",ribbon:"#ad7653"}},notebook:{content:km,summary:"A public sample of useful project notes, ready to adapt.",colorSize:512,palette:{cloth:"#603d45",ribbon:"#7d8c65"}}}),p0=Object.freeze([{id:"table-drums",contentId:"drums",position:[-.87,.782,2.35],yaw:-.18,surface:"table"},{id:"table-welcome",contentId:"welcome",position:[-.35,.782,3.53],yaw:.12,surface:"table"},{id:"north-shelf-notebook",contentId:"notebook",position:[1.54,1.330682,-9.782],scale:.62,surface:"shelf",location:"On the north shelf",support:{bounds:{x0:-7,x1:7,y0:-.025,y1:3.475,z0:-10,z1:-9.6},aperture:{x0:1.42,x1:2.313333,y0:1.330682,y1:1.69,z0:-9.601,z1:-9.599}}}]),Gm=4;function dr(n,t,e,i=1/0){let s=0,r=i;for(const a of["x","y","z"]){const o=n[a],c=t[a],l=e[a+"0"],u=e[a+"1"];if(![o,c,l,u].every(Number.isFinite)||l>u)return null;if(Math.abs(c)<1e-10){if(o<l||o>u)return null}else{const h=(l-o)/c,f=(u-o)/c;if(s=Math.max(s,Math.min(h,f)),r=Math.min(r,Math.max(h,f)),s>r)return null}}return r>=0?s:null}const Hm=[{x0:-.18,x1:.17,y0:0,y1:.064,z0:-.235,z1:.235},{x0:-.065,x1:-.039,y0:.002,y1:.043,z0:.198,z1:.284}],Na=["x","y","z"],yl=n=>n&&Na.every(t=>Number.isFinite(n[t+"0"])&&Number.isFinite(n[t+"1"])&&n[t+"0"]<n[t+"1"]);function m0(n,t){if(!Array.isArray(n)||n.length>Gm)throw new RangeError("Use at most four authored book copies.");const e=new Set;return n.map(i=>{if(!i)throw new TypeError("Invalid public book placement.");const s=i.scale??1,r=[i.pitch??0,i.yaw??0,i.roll??0],a=i.reach??2.2;if(!i||typeof i.id!="string"||!i.id||e.has(i.id)||!Object.hasOwn(t,i.contentId)||!Array.isArray(i.position)||i.position.length!==3||!i.position.every(Number.isFinite)||!r.every(Number.isFinite)||!Number.isFinite(s)||s<.4||s>1.2||!Number.isFinite(a)||a<=0||a>2.2||!["table","shelf"].includes(i.surface))throw new TypeError("Invalid public book placement.");if(i.support&&(!yl(i.support.bounds)||!yl(i.support.aperture)))throw new TypeError("Invalid shelf support.");if(i.location!==void 0&&(typeof i.location!="string"||!i.location.trim()||i.location.length>120))throw new TypeError("Invalid book location label.");const o=t[i.contentId];if(typeof o.summary!="string"||!o.summary.trim()||o.summary.length>300||![512,1024].includes(o.colorSize??1024)||Object.entries(o.palette||{}).some(([l,u])=>!["cloth","foil","paper","ink","ribbon"].includes(l)||typeof u!="string"||!/^#[0-9a-f]{6}$/i.test(u)))throw new TypeError("Invalid public edition description or palette.");e.add(i.id);const c=new jt().compose(new U(...i.position),new We().setFromEuler(new Ie(...r)),new U(s,s,s));return{...i,scale:s,reach:a,matrix:c,inverse:c.clone().invert()}})}function Vm(n,t,e,i,s){const r=t.support;if(!r||!Na.every(c=>Math.abs(n[c+"0"]-r.bounds[c+"0"])<1e-4&&Math.abs(n[c+"1"]-r.bounds[c+"1"])<1e-4)||e.z<=n.z1||i.z>=0)return!1;const a=dr(e,i,n,s),o=dr(e,i,r.aperture,s);return a!==null&&o!==null&&Math.abs(a-o)<.002}function Wm(n,t,e,i=[]){const s=Math.hypot(t.x,t.y,t.z);if(!Number.isFinite(s)||s<1e-10||!Na.every(o=>Number.isFinite(n[o])))return null;const r=new U(t.x/s,t.y/s,t.z/s);let a=null;for(const o of e){const c=new U(n.x,n.y,n.z).applyMatrix4(o.inverse),l=r.clone().transformDirection(o.inverse).divideScalar(o.scale);let u=1/0;for(const f of Hm){const d=dr(c,l,f,o.reach);d!==null&&(u=Math.min(u,d))}if(!Number.isFinite(u)||a&&a.distance<=u)continue;i.some(f=>{const d=dr(n,r,f,u);return d!==null&&d+.022<u&&!Vm(f,o,n,r,u)})||(a={...o,distance:u})}return a}const Ai=Object.freeze({cover:[16,16,640,896],spine:[680,16,120,896],paper:[824,16,184,400],end:[824,448,184,256],ribbon:[824,752,184,240],cloth:[688,944,104,48]}),Ml=n=>n/1024;function Xm(n,t,e){const[i,s,r,a]=Ai[n];return[Ml(i+2+t*(r-4)),1-Ml(s+2+(1-e)*(a-4))]}function qm(){const n=[],t=[],e=[],i={min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0]};function s(y,x,T,E=[[0,0],[1,0],[1,1]],w="cloth"){const b=x.map((P,I)=>P-y[I]),S=T.map((P,I)=>P-y[I]),M=[b[1]*S[2]-b[2]*S[1],b[2]*S[0]-b[0]*S[2],b[0]*S[1]-b[1]*S[0]],A=Math.hypot(...M);if(A<1e-12)return;const N=M.map(P=>P/A);[y,x,T].forEach((P,I)=>{n.push(...P),t.push(...N),e.push(...Xm(w,...E[I])),P.forEach((k,B)=>{i.min[B]=Math.min(i.min[B],k),i.max[B]=Math.max(i.max[B],k)})})}function r(y,x,T,E,w="cloth",b=[[0,0],[1,0],[1,1],[0,1]]){s(y,x,T,[b[0],b[1],b[2]],w),s(y,T,E,[b[0],b[2],b[3]],w)}function a(y,x,T,E,w,b,S,M){const A=[];for(let B=0;B<4;B++){const $=B*Math.PI/2,H=(B===0||B===3?1:-1)*(y/2-w),K=(B<2?1:-1)*(x/2-w);for(let nt=0;nt<=b;nt++){const W=$+nt*Math.PI/(2*b);A.push([H+Math.cos(W)*w,K+Math.sin(W)*w])}}const N=Math.min(.0016,E*.24),P=[[T,.0012],[T+N,0],[T+E-N,0],[T+E,.0012]],I=P.map(([B,$])=>A.map(([H,K])=>[H*(1-$/(y/2)),B,K*(1-$/(x/2))])),k=A.length;for(let B=0;B<P.length-1;B++)for(let $=0;$<k;$++){const H=($+1)%k;r(I[B][$],I[B+1][$],I[B+1][H],I[B][H],M,[[$/k,(P[B][0]-T)/E],[$/k,(P[B+1][0]-T)/E],[H/k,(P[B+1][0]-T)/E],[H/k,(P[B][0]-T)/E]])}for(let B=0;B<k;B++){const $=(B+1)%k,H=I[3],K=I[0],nt=W=>[W[0]/y+.5,.5-W[2]/x];s([0,T+E,0],H[$],H[B],[[.5,.5],nt(H[$]),nt(H[B])],S),s([0,T,0],K[B],K[$],[[.5,.5],[0,0],[1,0]],"cloth")}}a(.34,.47,0,.006,.006,3,"end","cloth"),a(.314,.448,.007,.048,.003,2,"end","paper"),a(.34,.47,.058,.006,.006,3,"cover","cloth");const o=-.165,c=.032,l=.031;for(let y=0;y<10;y++){const x=-Math.PI/2+y*Math.PI/10,T=x+Math.PI/10,E=(w,b,S=0)=>[o-Math.cos(w)*(l*.4+S),c+Math.sin(w)*l,b];r(E(x,-.228),E(x,.228),E(T,.228),E(T,-.228),"spine",[[y/10,1],[y/10,0],[(y+1)/10,0],[(y+1)/10,1]]),s([o,c,-.228],E(x,-.228),E(T,-.228),void 0,"cloth"),s([o,c,.228],E(T,.228),E(x,.228),void 0,"cloth")}for(const y of[-.178,-.109,.109,.178])for(let x=0;x<8;x++){const T=-Math.PI/2+x*Math.PI/8,E=T+Math.PI/8,w=(b,S)=>[o-Math.cos(b)*.0144,c+Math.sin(b)*.0315,S];r(w(T,y-.0021),w(T,y+.0021),w(E,y+.0021),w(E,y-.0021))}const u=[-.064,.042,.198],h=[-.043,.042,.198],f=[-.041,.01,.248],d=[-.062,.01,.248],p=[-.04,.003,.284],_=[-.0505,.003,.277],g=[[u,d,f],[u,f,h],[d,[-.061,.003,.284],_],[d,_,f],[f,_,p]],v=y=>[(y[0]+.065)/.027,(.284-y[2])/.086];for(const y of g){s(...y,y.map(v),"ribbon");const x=y.map(T=>[T[0],T[1]-5e-4,T[2]]).reverse();s(...x,x.map(v),"ribbon")}return{position:new Float32Array(n),normal:new Float32Array(t),uv:new Float32Array(e),bounds:i,triangles:n.length/9}}const us=Object.freeze({cloth:"#173c40",foil:"#d6b16a",paper:"#eee4cc",ink:"#263f3b",ribbon:"#79374c"}),g0=Object.freeze({color:1024,control:512,bump:256});function _0(n,t,e="color"){const i=g0[e];n.width=n.height=i;const s=n.getContext("2d");if(!s)throw new Error("Jippity book requires a 2D canvas context.");s.save(),s.scale(i/1024,i/1024);const r=e==="color",a=e==="bump",o=r?us.cloth:a?"#808080":"rgb(0,212,0)",c=r?us.foil:a?"#777777":"rgb(0,100,220)";if(s.fillStyle=o,s.fillRect(0,0,1024,1024),r||a){s.lineWidth=.6;for(let I=0;I<1024;I+=3)s.strokeStyle=r?I%2?"rgba(210,230,204,.045)":"rgba(0,0,0,.05)":I%2?"#888":"#777",s.beginPath(),s.moveTo(I,0),s.lineTo(I+.7,1024),s.stroke();for(let I=0;I<1024;I+=4)s.strokeStyle=r?"rgba(225,235,211,.025)":"#848484",s.beginPath(),s.moveTo(0,I),s.lineTo(1024,I+.5),s.stroke()}const[l,u,h,f]=Ai.cover;s.strokeStyle=c,s.fillStyle=c,s.lineWidth=1.3,s.strokeRect(l+28,u+30,h-56,f-60),s.lineWidth=.65,s.strokeRect(l+35,u+37,h-70,f-74);for(const[I,k,B,$]of[[l+45,u+47,1,1],[l+h-45,u+47,-1,1],[l+45,u+f-47,1,-1],[l+h-45,u+f-47,-1,-1]])s.beginPath(),s.moveTo(I,k+12*$),s.lineTo(I,k),s.lineTo(I+12*B,k),s.stroke();s.textAlign="center",s.textBaseline="middle";function d(I,k,B,$,H="Georgia"){let K=B;for(s.font=K+"px "+H;s.measureText(I).width>$&&K>12;)K--,s.font=K+"px "+H;s.fillText(I,l+h/2,k)}d(t.series.toUpperCase(),u+97,16,h-110,"Arial"),s.lineWidth=.8,s.beginPath(),s.moveTo(l+250,u+131),s.lineTo(l+390,u+131),s.stroke(),t.cover.lines.forEach((I,k)=>d(I,u+215+k*83,67,h-98)),d(t.subtitle,u+385,19,h-115),s.save(),s.translate(l+h/2,u+570);for(let I=0;I<9;I++){s.beginPath();for(let k=0;k<=160;k++){const B=k*Math.PI*2/160,$=32+I*8.1+Math.sin(3*B+I*.16)*8+Math.cos(2*B)*4,H=Math.cos(B)*$*1.19,K=Math.sin(B)*$*.8;k?s.lineTo(H,K):s.moveTo(H,K)}s.closePath(),s.lineWidth=I===8?1.5:.85,s.stroke()}s.beginPath(),s.arc(0,0,2.8,0,Math.PI*2),s.fill(),s.restore(),d(t.cover.note,u+750,12.5,h-90,"Arial"),d(t.cover.imprint,u+806,21,h-90),d(t.edition.toUpperCase(),u+842,10,h-90,"Arial");const[p,_,m,g]=Ai.spine;s.save(),s.translate(p+m/2,_+g/2),s.rotate(Math.PI/2),s.font="26px Georgia",s.fillText(t.cover.spine,0,0,g*.7),s.font="12px Arial",s.fillText(t.cover.imprint,-g*.36,0),s.restore(),s.lineWidth=2;for(const I of[_+61,_+g-61])s.beginPath(),s.moveTo(p+14,I),s.lineTo(p+m-14,I),s.stroke();const[v,y,x,T]=Ai.paper;if(s.fillStyle=r?us.paper:a?"#808080":"rgb(0,241,0)",s.fillRect(v,y,x,T),r||a)for(let I=0;I<65;I++){const k=y+4+I*(T-8)/65;s.strokeStyle=r?I%7===0?"rgba(111,88,49,.28)":"rgba(132,107,66,.12)":I%7===0?"#6b6b6b":"#777777",s.lineWidth=I%7===0?1.6:.7,s.beginPath(),s.moveTo(v,k),s.bezierCurveTo(v+x*.3,k+.7,v+x*.7,k-.4,v+x,k+.3),s.stroke()}const[E,w,b,S]=Ai.end;if(s.fillStyle=r?"#d9d4b9":a?"#808080":"rgb(0,226,0)",s.fillRect(E,w,b,S),r){s.strokeStyle="#a4b0a1",s.lineWidth=.8;for(let I=0;I<18;I++)s.beginPath(),s.moveTo(E,w+I*16),s.lineTo(E+b,w+I*16+b*.34),s.stroke()}const[M,A,N,P]=Ai.ribbon;if(s.fillStyle=r?us.ribbon:a?"#808080":"rgb(0,135,20)",s.fillRect(M,A,N,P),r){s.strokeStyle="rgba(242,171,168,.15)",s.lineWidth=1;for(let I=0;I<N;I+=4)s.beginPath(),s.moveTo(M+I,A),s.lineTo(M+I,A+P),s.stroke()}return s.restore(),n}function Fa(n){const t=(i,s)=>typeof i=="string"&&i.trim().length>0&&i.length<=s;if(!n||n.schemaVersion!==1||!t(n.id,80)||!t(n.title,120))throw new TypeError("Invalid book identity.");if(!t(n.series,80)||!t(n.subtitle,160)||!t(n.signature,120)||!t(n.edition,40))throw new TypeError("Invalid book metadata.");if(!n.cover||!Array.isArray(n.cover.lines)||n.cover.lines.length<1||n.cover.lines.length>3||!n.cover.lines.every(i=>t(i,40))||!t(n.cover.spine,100)||!t(n.cover.imprint,50)||!t(n.cover.note,100))throw new TypeError("Invalid cover text.");if(!Array.isArray(n.pages)||!n.pages.length||n.pages.length>40)throw new TypeError("A book needs 1–40 pages.");if(!Array.isArray(n.sources)||n.sources.length>30)throw new TypeError("Invalid sources.");const e=new Set;for(const i of n.sources){if(!t(i.id,60)||e.has(i.id)||!t(i.title,240)||!t(i.authors,300)||!t(i.detail,120))throw new TypeError("Invalid source metadata.");if(typeof i.href!="string"||!/^https:\/\/[a-z0-9][a-z0-9.-]*(?::443)?\//i.test(i.href)||/[\s<>"\\]/.test(i.href))throw new TypeError("Sources must use a public HTTPS URL.");e.add(i.id)}for(const i of n.pages){if(!["title","text","sources"].includes(i.kind)||!t(i.title,140)||!t(i.eyebrow,100)||!Array.isArray(i.paragraphs)||i.paragraphs.length>8||!i.paragraphs.every(s=>t(s,1800)))throw new TypeError("Invalid page.");if(i.note!==void 0&&!t(i.note,500))throw new TypeError("Invalid page note.");if(i.sourceIds!==void 0&&(!Array.isArray(i.sourceIds)||i.sourceIds.some(s=>!e.has(s))))throw new TypeError("Unknown source.")}return n}function Ym({THREE:n,content:t,position:e=[0,0,0],yaw:i=0,makeCanvas:s=()=>document.createElement("canvas")}){Fa(t);const r=qm(),a=new n.BufferGeometry;a.setAttribute("position",new n.BufferAttribute(r.position,3)),a.setAttribute("normal",new n.BufferAttribute(r.normal,3)),a.setAttribute("uv",new n.BufferAttribute(r.uv,2)),a.computeBoundingBox(),a.computeBoundingSphere();const o={};for(const f of["color","control","bump"]){const d=new n.CanvasTexture(_0(s(),t,f));f==="color"&&(d.colorSpace=n.SRGBColorSpace),d.anisotropy=4,d.name="Jippity "+f+" atlas",o[f]=d}const c=new n.MeshStandardMaterial({map:o.color,roughnessMap:o.control,metalnessMap:o.control,bumpMap:o.bump,bumpScale:24e-5,roughness:1,metalness:1});c.name="Jippity cloth, foil, paper and silk";const l=new n.Mesh(a,c);l.name="Jippity — "+t.title,l.position.fromArray(e),l.rotation.y=i,l.castShadow=!0,l.receiveShadow=!0,l.updateMatrix(),l.matrixAutoUpdate=!1;const u=Object.values(g0).reduce((f,d)=>f+d*d,0);let h=!1;return{object:l,budget:Object.freeze({triangles:r.triangles,vertices:r.position.length/3,drawCalls:1,geometryBytes:r.position.byteLength+r.normal.byteLength+r.uv.byteLength,texturePixels:u,textureBaseRGBABytes:u*4,textureWithFullMipRGBABytes:Math.round(u*4*4/3),note:"Static geometry/texture accounting; drawCalls excludes shadow and optional host prepass. No frame-rate or GPU-memory measurement."}),dispose(){h||(h=!0,l.removeFromParent(),a.dispose(),c.dispose(),Object.values(o).forEach(f=>f.dispose()),Object.values(o).forEach(f=>{f.image=null}))}}}function bl(n,t,e,i=1024){const s=n(),r=s.getContext("2d"),a=new Map(Object.entries(e).map(([c,l])=>[us[c],l])),o=new Proxy(r,{get(c,l){if(l==="scale")return(h,f)=>c.scale(h*i/1024,f*i/1024);const u=c[l];return typeof u=="function"?u.bind(c):u},set(c,l,u){return c[l]=(l==="fillStyle"||l==="strokeStyle")&&a.has(u)?a.get(u):u,!0}});return _0({set width(c){s.width=i},set height(c){s.height=i},getContext:()=>o},t,"color"),s}function jm({THREE:n,catalog:t,placements:e,makeCanvas:i=()=>document.createElement("canvas")}){const s=m0(e,t),r=new Set,a=new Map,o=[];let c=null,l=!1;try{for(const f of s){const d=t[f.contentId];if(Fa(d.content),!a.has(f.contentId))if(c){const _=new n.CanvasTexture(bl(i,d.content,d.palette||{},d.colorSize));_.colorSpace=n.SRGBColorSpace,_.anisotropy=4,_.name=d.content.title+" color atlas";const m=c.object.material.clone();m.map=_,r.add(m),r.add(_),a.set(f.contentId,m)}else{c=Ym({THREE:n,content:d.content,makeCanvas:i});for(const m of[c.object.geometry,c.object.material,...["map","roughnessMap","bumpMap"].map(g=>c.object.material[g])])r.add(m);const _=c.object.material.map;(Object.keys(d.palette||{}).length||(d.colorSize??1024)!==1024)&&(_.image=bl(i,d.content,d.palette||{},d.colorSize)),a.set(f.contentId,c.object.material)}const p=new n.Mesh(c.object.geometry,a.get(f.contentId));p.name="Jippity - "+d.content.title,p.matrix.copy(f.matrix),p.matrixAutoUpdate=!1,p.castShadow=p.receiveShadow=!0,o.push({object:p,placement:f,content:d.content})}}catch(f){for(const d of r)d.dispose(),d.isCanvasTexture&&(d.image=null);throw f}const u=[...a.values()].reduce((f,d)=>f+d.map.image.width**2,0)+(c?512**2+256**2:0),h=Object.freeze({books:o.length,editions:a.size,triangles:o.length*466,drawCalls:o.length,texturePixels:u,textureWithFullMipRGBABytes:Math.round(u*4*4/3),geometryBytes:(c==null?void 0:c.budget.geometryBytes)||0,note:"CPU construction accounting; excludes shadows/prepass and measures neither GPU allocation nor frame rate."});return{books:o,placements:s,objects:o.map(f=>f.object),budget:h,dispose(){if(!l){l=!0;for(const f of o)f.object.removeFromParent();for(const f of r)f.dispose(),f.isCanvasTexture&&(f.image=null)}}}}function $m(n){if(!Number.isInteger(n)||n<1||n>40)throw new RangeError("Invalid page count.");const t=Math.ceil(n/2);let e="closed",i=0;const s=r=>Math.max(0,Math.min(t-1,Number.isFinite(r)?Math.trunc(r):0));return{get isOpen(){return e==="open"},get disposed(){return e==="disposed"},get spread(){return i},get count(){return t},open(r=i){return e==="disposed"?!1:(i=s(r),e="open",!0)},go(r){if(e!=="open")return!1;const a=s(r);return a===i?!1:(i=a,!0)},close(){return e!=="open"?!1:(e="closed",!0)},dispose(){e="disposed"}}}const tr="jippityBoundBook";let Km=0;const Zm=n=>{var t;return!!((t=n==null?void 0:n.closest)!=null&&t.call(n,'input, textarea, select, [contenteditable], [role="textbox"]'))};function Jm(n){const t=n.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","-145 -110 290 220"),t.setAttribute("aria-hidden","true"),t.setAttribute("class","jb-motif");for(let e=0;e<9;e++){const i=n.createElementNS("http://www.w3.org/2000/svg","path");let s="";for(let r=0;r<=120;r++){const a=r*Math.PI*2/120,o=32+e*8.1+Math.sin(3*a+e*.16)*8+Math.cos(2*a)*4;s+=(r?"L":"M")+(Math.cos(a)*o*1.19).toFixed(2)+" "+(Math.sin(a)*o*.8).toFixed(2)+" "}i.setAttribute("d",s+"Z"),t.append(i)}return t}function Qm({document:n,window:t,content:e,look:i,setPaused:s,releaseMovement:r,returnFocus:a,onError:o=()=>{}}){Fa(e);const c=$m(e.pages.length),l=e.id+":"+ ++Km,u=[];let h=!1,f=null,d=null,p=null,_=null;const m=(O,G,X)=>{const ht=n.createElement(O);return G&&(ht.className=G),X!==void 0&&(ht.textContent=X),ht},g=m("dialog","jb-reader");g.setAttribute("aria-label",e.title);const v=m("div","jb-shell"),y=m("header","jb-toolbar"),x=m("div","jb-identity",e.series),T=m("button","jb-close","Back to library");T.type="button",T.setAttribute("aria-label","Close "+e.title+" and return to the library");const E=m("span","jb-close-glyph","×");E.setAttribute("aria-hidden","true"),T.append(E),y.append(x,T);const w=m("div","jb-binding"),b=m("div","jb-spread");b.setAttribute("aria-label","Open book"),w.append(b);const S=m("footer","jb-navigation"),M=m("button","jb-page-button","← Previous"),A=m("button","jb-page-button","Next →");M.type=A.type="button",M.setAttribute("aria-label","Previous two pages"),A.setAttribute("aria-label","Next two pages");const N=m("div","jb-navigation-center"),P=m("select","jb-contents");P.setAttribute("aria-label","Choose a pair of pages");for(let O=0;O<c.count;O++){const G=m("option","",String(O+1).padStart(2,"0")+" / "+e.pages[O*2].title.replace(/\n/g," "));G.value=String(O),P.append(G)}const I=m("p","jb-status");I.setAttribute("role","status"),I.setAttribute("aria-live","polite"),I.setAttribute("aria-atomic","true"),N.append(P,I),S.append(M,N,A);const k=m("p","jb-keyboard-note","← → turn pages · Esc returns to the library");v.append(y,w,S,k),g.append(v),n.body.append(g);const B=(O,G,X)=>{O.addEventListener(G,X),u.push(()=>O.removeEventListener(G,X))},$=()=>{var O,G;return((G=(O=t.history.state)==null?void 0:O[tr])==null?void 0:G.session)===l},H=()=>{var O;return!!((O=t.matchMedia)!=null&&O.call(t,"(prefers-reduced-motion: reduce)").matches)};function K(O,G=!1){const X=m("a",G?"jb-source-link":"jb-citation",G?O.title:"["+(e.sources.indexOf(O)+1)+"]");return X.href=O.href,X.target="_blank",X.rel="noopener noreferrer",X.referrerPolicy="no-referrer",X.setAttribute("aria-label",O.title+" — opens PDF in a new tab"),X}function nt(O){var zt;const G=e.pages[O],X=m("article","jb-paper "+(O%2?"jb-paper-right":"jb-paper-left"));if(!G)return X.setAttribute("aria-label","Blank endpaper"),X.append(m("p","jb-colophon",e.signature)),X;const ht=m("div","jb-running-head",O===0?e.edition:e.title),ft=m("div","jb-page-body"+(G.kind==="title"?" jb-title-page":"")),Et=m("p","jb-eyebrow",G.eyebrow),z=m("h2","jb-heading",G.title);if(ft.append(Et,z),G.kind==="title"&&ft.append(Jm(n)),G.paragraphs.forEach(gt=>ft.append(m("p","jb-paragraph",gt))),G.kind==="sources"){const gt=m("ol","jb-sources");for(const pt of G.sourceIds||[]){const Lt=e.sources.find(D=>D.id===pt),xt=m("li","");xt.append(m("p","jb-source-authors",Lt.authors),K(Lt,!0),m("p","jb-source-detail",Lt.detail)),gt.append(xt)}ft.append(gt)}else if((zt=G.sourceIds)!=null&&zt.length){const gt=m("p","jb-citations");gt.append(m("span","","Sources ")),G.sourceIds.forEach(pt=>gt.append(K(e.sources.find(Lt=>Lt.id===pt)))),ft.append(gt)}G.note&&ft.append(m("p","jb-margin-note",G.note));const Vt=m("div","jb-folio");return Vt.append(m("span","",O===0?e.signature:e.series),m("span","",String(O+1).padStart(2,"0"))),X.append(ht,ft,Vt),X}function W(O=0){d==null||d.cancel(),d=null,b.replaceChildren(nt(c.spread*2),nt(c.spread*2+1));const G=c.spread*2+1,X=Math.min(G+1,e.pages.length);I.textContent="Pages "+G+"–"+X+" of "+e.pages.length,P.value=String(c.spread),M.disabled=c.spread===0,A.disabled=c.spread===c.count-1,g.scrollTop=0,O&&!H()&&b.animate&&(d=b.animate([{opacity:.35,transform:"translateX("+O*10+"px)"},{opacity:1,transform:"translateX(0)"}],{duration:180,easing:"cubic-bezier(.2,.65,.3,1)"}))}function ot(){if($())try{t.history.replaceState({...t.history.state,[tr]:{session:l,book:e.id,spread:c.spread}},"",t.location.href)}catch(O){o(O)}}function Ct(O=!0,G=c.spread){if(c.disposed||h)return!1;if(c.isOpen)return F(G),!0;p=n.activeElement,c.open(G);try{r(),i.pause(),s(!0),W(),g.showModal(),T.focus({preventScroll:!0})}catch(X){c.close(),g.open&&g.close();try{r(),i.resume()}finally{s(!1)}return o(X),!1}if(O)try{_=t.history.state;const X=_&&typeof _=="object"?_:{};t.history.pushState({...X,[tr]:{session:l,book:e.id,spread:c.spread}},"",t.location.href)}catch(X){o(X)}return!0}function J(){var G;if(!c.close())return!1;d==null||d.cancel(),d=null,g.open&&g.close();try{r(),i.resume()}finally{s(!1)}const O=(a==null?void 0:a.isConnected)!==!1&&(a!=null&&a.focus)?a:p;return(O==null?void 0:O.isConnected)!==!1&&((G=O==null?void 0:O.focus)==null||G.call(O,{preventScroll:!0})),!0}function at(){h=!1,f!==null&&t.clearTimeout(f),f=null}function C(){if(!c.isOpen)return!1;const O=$();if(J(),O){h=!0,f=t.setTimeout(()=>{if($())try{t.history.replaceState(_,"",t.location.href)}catch(G){o(G)}at()},1200);try{t.history.back()}catch(G){if($())try{t.history.replaceState(_,"",t.location.href)}catch(X){o(X)}at(),o(G)}}return!0}function F(O){const G=c.spread;return c.go(O)?(W(Math.sign(c.spread-G)),ot(),!0):!1}return B(T,"click",C),B(M,"click",()=>F(c.spread-1)),B(A,"click",()=>F(c.spread+1)),B(P,"change",()=>F(Number(P.value))),B(g,"cancel",O=>{O.preventDefault(),C()}),B(g,"close",()=>{!g.open&&c.isOpen&&C()}),B(g,"keydown",O=>{if(O.altKey||O.ctrlKey||O.metaKey||Zm(O.target))return;let G;if(O.key==="ArrowRight"||O.key==="PageDown")G=c.spread+1;else if(O.key==="ArrowLeft"||O.key==="PageUp")G=c.spread-1;else if(O.key==="Home")G=0;else if(O.key==="End")G=c.count-1;else return;O.preventDefault(),F(G)}),B(t,"popstate",O=>{var X;at();const G=(X=O.state)==null?void 0:X[tr];(G==null?void 0:G.session)===l&&G.book===e.id?c.isOpen?F(G.spread):Ct(!1,G.spread):J()}),{get isOpen(){return c.isOpen},get pendingBack(){return h},get spread(){return c.spread},open:()=>Ct(!0),close:C,go:F,element:g,dispose(){if(!c.disposed){if(at(),u.forEach(O=>O()),J(),c.dispose(),d==null||d.cancel(),$())try{t.history.replaceState(_,"",t.location.href)}catch(O){o(O)}g.remove()}}}}function t3(n,t,e){var b;const i=Qm({...n,content:t.content}),s=n.document,r=i.element,a=S=>r.querySelector("."+S),o=(S,M,A)=>{const N=s.createElement(S);return N.className=M,A!==void 0&&(N.textContent=A),N};r.classList.add("lb-reader"),r.setAttribute("style","--lb-cloth:"+(((b=t.palette)==null?void 0:b.cloth)||"#173c40"));const c=o("section","lb-inspect"),l=o("div","lb-cover");l.setAttribute("aria-hidden","true"),l.append(o("p","lb-cover-series",t.content.series),o("p","lb-cover-title",t.content.cover.lines.join(`
`)),o("p","lb-cover-note",t.content.cover.note),o("p","lb-cover-imprint",t.content.cover.imprint));const u=o("div","lb-detail"),h=e.location||(e.surface==="shelf"?"On a shelf":"On the reading table"),f=o("h2","lb-title",t.content.title);f.tabIndex=-1;const d=o("button","lb-read","Read this book");d.type="button",u.append(o("p","lb-location",h),f,o("p","lb-summary",t.summary),o("p","lb-edition",t.content.edition+" · "+t.content.pages.length+" pages"),d,o("p","lb-inspect-note","Your place in the room stays the same. Escape returns you to the book.")),c.append(l,u),a("jb-shell").append(c);const p=a("jb-binding"),_=a("jb-navigation"),m=a("jb-keyboard-note"),g=o("button","lb-details","Book details");g.type="button",g.hidden=!0,a("jb-toolbar").append(g);const v=a("jb-close");v.textContent="Return to "+e.surface,v.setAttribute("aria-label","Close "+t.content.title+" and return to the "+e.surface);let y=!0;function x(S=!0){y=!0,c.hidden=!1,p.hidden=_.hidden=m.hidden=!0,g.hidden=!0,r.scrollTop=0,S&&d.focus({preventScroll:!0})}function T(){y=!1,c.hidden=!0,p.hidden=_.hidden=m.hidden=!1,g.hidden=!1,r.scrollTop=0,a("jb-contents").focus({preventScroll:!0})}const E=S=>{y&&["ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(S.key)&&S.stopImmediatePropagation()},w=()=>x();return d.addEventListener("click",T),g.addEventListener("click",w),r.addEventListener("keydown",E,!0),x(!1),{get isOpen(){return i.isOpen},get pendingBack(){return i.pendingBack},element:r,close:i.close,open(){return x(!1),i.open()?(d.focus({preventScroll:!0}),!0):!1},dispose(){d.removeEventListener("click",T),g.removeEventListener("click",w),r.removeEventListener("keydown",E,!0),i.dispose()}}}const e3=n=>{var t;return!!((t=n==null?void 0:n.closest)!=null&&t.call(n,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))};function n3({window:n,document:t,canvas:e,hint:i,reader:s,content:r,getTarget:a,canInteract:o}){const c=[];let l=null,u=!1;const h=(p,_,m,g=!1)=>{p.addEventListener(_,m,g),c.push(()=>p.removeEventListener(_,m,g))},f=()=>!u&&!s.isOpen&&!s.pendingBack&&o();function d(p){return!f()||!a(p)?!1:(l=null,i.hidden=!0,s.open())}return h(n,"keydown",p=>{p.code!=="KeyE"||p.repeat||p.altKey||p.ctrlKey||p.metaKey||e3(p.target)||d()&&(p.preventDefault(),p.stopImmediatePropagation())},!0),h(e,"mousedown",p=>{l=null,!(p.button!==0||!f()||!a(p))&&(l={x:p.clientX,y:p.clientY,locked:t.pointerLockElement===e,distance:0,dragged:!1},p.stopImmediatePropagation())},!0),h(n,"mousemove",p=>{if(!l)return;const _=l.locked?Math.hypot(p.movementX||0,p.movementY||0):Math.hypot(p.clientX-l.x,p.clientY-l.y);l.locked?l.distance+=_:l.distance=Math.max(l.distance,_),l.distance>5&&(l.dragged=!0)},!0),h(e,"click",p=>{const _=l;l=null,!(p.button!==0||!_||_.dragged)&&d(p)&&(p.preventDefault(),p.stopImmediatePropagation())},!0),h(n,"mouseup",p=>{p.target!==e&&(l=null)},!0),h(e,"mouseleave",()=>{t.pointerLockElement!==e&&(l=null)}),h(n,"blur",()=>{l=null}),h(t,"visibilitychange",()=>{t.visibilityState!=="visible"&&(l=null)}),h(i,"click",p=>{d()&&(p.preventDefault(),p.stopImmediatePropagation())},!0),{openNearby:d,updateHint(){const p=f()&&!!a();return i.classList.toggle("jb-prompt",p),p&&(i.textContent="E — Read "+r.title,i.hidden=!1),p},dispose(){u||(u=!0,l=null,c.forEach(p=>p()),i.classList.remove("jb-prompt"))}}}const i3=Object.freeze({BufferGeometry:Qt,BufferAttribute:pe,CanvasTexture:ji,MeshStandardMaterial:Te,Mesh:Jt,SRGBColorSpace:he});function s3(n,t,e,i,{catalog:s=d0,placements:r=p0,makeCanvas:a}={}){const o=jm({THREE:i3,catalog:s,placements:r,makeCanvas:a}),c=new Set(r.map(f=>f.id)),l=t.filter(f=>f.kind==="book"&&!c.has(f.id)),u=l.length?i(n,l,e):{objects:[],dispose(){}};n.add(...o.objects);let h=!1;return{...o,book:o.books.find(f=>f.placement.contentId==="drums"),objects:[...o.objects,...u.objects],dispose(){h||(h=!0,u.dispose(),o.dispose())}}}function r3(n){var H;const{camera:t,solids:e,legacyFactory:i,catalog:s=d0,placements:r=p0,...a}=n,{document:o,window:c,canvas:l,hint:u,look:h,setPaused:f,releaseMovement:d,returnFocus:p,canInteract:_}=n,m=m0(r,s),g=new Set(r.map(K=>K.id)),v=new Map,y=new U,x=[];let T=null,E=!1;const w=()=>[...v.values()].some(K=>K.isOpen),b=()=>[...v.values()].some(K=>K.pendingBack);function S(){const K=w();o.body.classList.toggle("reading-open",K),f(K)}function M(K){if(!v.has(K.id)){const nt=t3({document:o,window:c,releaseMovement:d,returnFocus:p,look:{pause:()=>h.pause(),resume:()=>{w()||h.resume()}},setPaused:S},s[K.contentId],K);v.set(K.id,nt)}return v.get(K.id)}function A(K){if(t.updateMatrixWorld(),K&&o.pointerLockElement!==l&&Number.isFinite(K.clientX)&&Number.isFinite(K.clientY)){const nt=l.getBoundingClientRect();if(!nt.width||!nt.height)return null;const W=(K.clientX-nt.left)/nt.width,ot=(K.clientY-nt.top)/nt.height;if(W<0||W>1||ot<0||ot>1)return null;y.set(W*2-1,1-ot*2,.5).unproject(t).sub(t.position).normalize()}else t.getWorldDirection(y);return T=Wm(t.position,y,m,e),T}const N=i({...a,canInteract:()=>!w()&&!b()&&_(),getTarget:()=>{const K=a.getTarget();return K&&g.has(K.id)?null:K}}),I=n3({window:c,document:o,canvas:l,hint:u,reader:{get isOpen(){return w()},get pendingBack(){return b()},open(){return T?M(T).open():!1}},content:{get title(){return T?s[T.contentId].content.title:""}},getTarget:A,canInteract:()=>!N.isOpen&&_()}),k=n.controls||((H=o.getElementById)==null?void 0:H.call(o,"overlay")),B=k==null?void 0:k.querySelector(".card");let $=null;if(B){$=o.createElement("section"),$.className="lb-catalog",$.setAttribute("aria-label","Public books");const K=o.createElement("p");K.textContent="Public books",$.append(K);for(const nt of m){const W=o.createElement("button");W.type="button",W.className="lb-catalog-book",W.textContent=s[nt.contentId].content.title+" · "+nt.surface;const ot=()=>{E||w()||b()||N.isOpen||(k.close(),M(nt).open())};W.addEventListener("click",ot),x.push(()=>W.removeEventListener("click",ot)),$.append(W)}B.append($)}return{get isOpen(){return w()||N.isOpen},updateHint(){if(!E){if(w()){u.hidden=!0;return}I.updateHint()?u.textContent="E — Inspect "+s[T.contentId].content.title:N.updateHint()}},close(){const K=[...v.values()].find(nt=>nt.isOpen);K?K.close():N.close()},dispose(){if(!E){E=!0,I.dispose(),x.forEach(K=>K()),$==null||$.remove();for(const K of v.values())K.dispose();v.clear(),N.dispose()}}}}function o3({tick:n,request:t,cancel:e,now:i}){const s=new Set;let r=null,a=!1,o=null;function c(){!a&&!s.size&&r===null&&(r=t(l))}function l(u){if(r=null,a||s.size)return;const h=o===null?0:Math.max(0,(u-o)/1e3);o=u,n(u,h),c()}return{start(){o=i(),c()},setPaused(u,h){h?s.add(u):s.delete(u),s.size&&r!==null&&(e(r),r=null),o=null,c()},get paused(){return a||s.size>0},dispose(){a=!0,r!==null&&e(r),r=null}}}const er=Object.freeze({href:"https://pazneria.github.io/",plaque:"EXIT",plaqueSubtitle:"HOME",label:"Leave for Jordan's homepage",openPrompt:"E · Open the exit door",prompt:"E · Leave, or walk through",shortcut:"Alt+X",instructions:"Approach the oak door beside the stair foot to open it, then walk through to leave. E or a deliberate click opens the door, or leaves when open. The controls exit link and Alt+X return to Jordan's homepage."}),go=Object.freeze({id:"library-home-exit",position:Object.freeze([6.8963,0,7.75]),rotation:-Math.PI/2,width:1.3,height:2.42,bounds:Object.freeze({x0:6.7,x1:6.93,y0:.08,y1:2.58,z0:6.94,z1:8.56}),reach:2.2}),x0=Object.freeze({x0:7,x1:7.5,z0:7.07,z1:8.43,height:2.46,threshold:7.62,landingEnd:8.55});function a3({anchor:n,portal:t,setAngle:e=()=>{}}){const i=n.position[0]-35e-5,s=n.position[2]+n.width/2,r=Math.PI/2,a=.111,o=8;let c=0,l=0,u=!1;function h(p){return p.y>=-.15&&p.y<.35}function f(p,_){return h(p)&&p.x+_>i&&p.x-_<i+n.width&&p.z+_>s-n.width&&p.z-_<s+.12}function d(p,_,m,g,v){if(m>=n.height||m+g<=0)return!1;const y=n.rotation-c,x=Math.cos(y),T=Math.sin(y),E=p-i,w=_-s,b=E*x-w*T,S=E*T+w*x,M=Math.max(-n.width,Math.min(0,b)),A=Math.max(0,Math.min(a,S));return(b-M)**2+(S-A)**2<v**2}return{get angle(){return c},get passable(){return c>=1.48},use(){return u=!0,c>=1.48},update(p,_,m=.28){const g=Math.hypot(_.x-i,_.z-n.position[2]),v=h(_)&&g<2.15,y=f(_,m);(!h(_)||g>2.65)&&!y&&(u=!1);const x=v||y||u?r:0;if(!Number.isFinite(p)||p<=0)return;const T=c,E=d(_.x,_.z,_.y,1.75,m),w=c-x,b=l+o*w,S=Math.exp(-o*p);c=x+(w+b*p)*S,l=(l-o*b*p)*S,Math.abs(c-x)<5e-4&&Math.abs(l)<.004&&(c=x,l=0),c=Math.max(0,Math.min(r,c)),!E&&d(_.x,_.z,_.y,1.75,m)&&(c=T,l=0),e(-c)},blocks:d,crossed(p,_,m=.28){return c>.01&&!d(_.x,_.z,_.y,1.75,m)&&h(p)&&h(_)&&p.x<=t.threshold&&_.x>t.threshold&&Math.hypot(_.x-p.x,_.z-p.z)<=.45&&_.z>=t.z0+m&&_.z<=t.z1-m}}}function c3(n,t,e,i,s=()=>document.createElement("canvas")){const r=new bn;r.name="Library exit",r.position.set(...e.position),r.rotation.y=e.rotation;const a=new ua(()=>.37),o=a.frame(0,0,0);o.m.multiply(new jt().makeScale(1,1,.7));const{width:c,height:l}=e,{oak:u,dark:h,brass:f}=t,d=new bn;d.name="Hinged oak door leaf",d.position.set(c/2,0,35e-5);const p=new ua(()=>.37),_=p.frame(-c/2,0,-35e-5);_.m.multiply(new jt().makeScale(1,1,.7));let m=_;m.box(h,c,l-.04,.055,0,l/2,.028);for(const b of[-c/2+.065,c/2-.065])m.box(u,.13,l,.045,b,l/2,.082);for(const[b,S]of[[.11,.22],[.84,.13],[l-.09,.18]])m.box(u,c-.26,S,.045,0,b,.082);m.box(u,.07,1.33,.045,0,1.575,.082);for(const[b,S,M,A]of[[-.26,1.575,.42,1.28],[.26,1.575,.42,1.28],[0,.49,.96,.51]]){m.box(u,M,A,.018,b,S,.063);for(const N of[-1,1])m.box(h,.018,A+.04,.014,b+N*(M/2+.009),S,.081),m.box(h,M+.04,.018,.014,b,S+N*(A/2+.009),.081)}m=o;for(const b of[-1,1])m.box(h,.13,l+.02,.09,b*(c/2+.085),(l+.02)/2,.067),m.box(u,.1,l+.02,.035,b*(c/2+.085),(l+.02)/2,.129),m.box(u,.16,.24,.13,b*(c/2+.085),.12,.083);m.box(h,c+.3,.18,.09,0,l+.09,.067),m.box(u,c+.33,.1,.035,0,l+.11,.129),m.box(u,c+.37,.045,.15,0,l+.2025,.08),m=_,m.box(f,.045,.19,.014,-.47,1.03,.115),m.cyl(f,.018,.018,.025,-.47,1.06,.14,8,Math.PI/2),m.box(f,.13,.025,.025,-.425,1.06,.158),m=o;for(const b of[.32,1.2,2.1])m.cyl(f,.018,.018,.11,c/2,b,5e-4,8);const g=a.frame(0,0,0),v=x0;for(const b of[v.z0+.018,v.z1-.018])g.box(u,.012,v.height-.024,.476,b-e.position[2],(v.height-.024)/2,e.position[0]-7.25);g.box(u,v.z1-v.z0-.024,.012,.476,0,v.height-.018,e.position[0]-7.25),g.sbox(t.stone,v.z1-v.z0,.16,v.landingEnd-v.x0,0,-.08,e.position[0]-(v.x0+v.landingEnd)/2),g.box(f,v.z1-v.z0-.048,.012,.05,0,.006,e.position[0]-7.04);const y=s();y.width=512,y.height=256;const x=y.getContext("2d");x.fillStyle="#30271b",x.fillRect(0,0,512,256),x.strokeStyle="#b99a60",x.lineWidth=4,x.strokeRect(12,12,488,232),x.fillStyle="#efdab0",x.textAlign="center",x.textBaseline="middle",x.font="60px Georgia, serif",x.fillText(i.plaque,256,102),x.font="25px Georgia, serif",x.fillText(i.plaqueSubtitle,256,172);const T=new ji(y);T.colorSpace=he;const E=new Te({map:T,roughness:.62,emissive:15586976,emissiveMap:T,emissiveIntensity:.18});m.box(f,.45,.23,.012,0,2.51,.172),m.plane(E,.426,.206,0,2.51,.18),p.finish(d),r.add(d),a.finish(r),r.traverse(b=>{b.isMesh&&(b.castShadow=!1,b.receiveShadow=!0)}),n.add(r);const w=a3({anchor:e,portal:v,setAngle:b=>{d.rotation.y=b}});return{group:r,leaf:d,door:w,solids:a.solids.map(b=>({x0:e.position[0]-b.z1,x1:e.position[0]-b.z0,y0:b.y0,y1:b.y1,z0:e.position[2]+b.x0,z1:e.position[2]+b.x1})),materials:[E],textures:[T]}}function l3({document:n,window:t,canvas:e,controls:i,readerFooter:s,content:r,getTarget:a,canInteract:o,beforeLeave:c,useDoor:l=()=>!0,getPrompt:u=()=>r.prompt}){let h=!1,f=!1,d=null;const p=[],_=[],m=e.getAttribute("aria-describedby");function g(b,S,M,A){b.addEventListener(S,M,A),p.push(()=>b.removeEventListener(S,M,A))}function v(b){if(b==null||b.preventDefault(),b==null||b.stopPropagation(),f||h)return!1;f=!0;try{c()}finally{t.addEventListener("pageshow",S=>{S.persisted&&t.location.reload()},{once:!0}),t.location.assign(r.href)}return!0}function y(b){b==null||b.preventDefault(),b==null||b.stopPropagation(),!(f||h)&&l()&&v()}function x(b,S){const M=n.createElement("a");return M.href=r.href,M.textContent=r.label,M.className=`library-exit-link ${S}`,M.setAttribute("aria-keyshortcuts",r.shortcut),g(M,"click",v),b.append(M),_.push(M),M}const T=x(n.body,"library-exit-keyboard");i&&x(i,"library-exit-controls"),s&&x(s,"library-exit-reader");const E=n.createElement("span");E.id="library-exit-instructions",E.className="library-exit-instructions",E.textContent=r.instructions,n.body.append(E),_.push(E),e.setAttribute("aria-describedby",[m,E.id].filter(Boolean).join(" "));const w=n.createElement("button");return w.id="exit-hint",w.type="button",w.hidden=!0,w.textContent=r.prompt,w.setAttribute("aria-label",r.label),n.body.append(w),_.push(w),g(w,"click",b=>{o()&&a()&&y(b)}),g(t,"keydown",b=>{var S,M;if(!(b.repeat||b.defaultPrevented||b.isComposing)){if(b.code==="KeyX"&&b.altKey&&!b.ctrlKey&&!b.metaKey&&!((M=(S=b.target)==null?void 0:S.closest)!=null&&M.call(S,'input, textarea, select, [contenteditable], [role="textbox"]'))){v(b);return}b.code==="KeyE"&&!b.altKey&&!b.ctrlKey&&!b.metaKey&&!Er(b.target)&&o()&&a()&&y(b)}}),g(e,"mousedown",b=>{d=b.button===0&&o()&&a()?{x:b.clientX,y:b.clientY,travel:0}:null}),g(t,"mousemove",b=>{d&&(d.travel+=n.pointerLockElement===e?Math.hypot(b.movementX||0,b.movementY||0):Math.hypot(b.clientX-d.x,b.clientY-d.y),d.x=b.clientX,d.y=b.clientY)}),g(e,"click",b=>{const S=d&&d.travel<=5;d=null,S&&b.button===0&&o()&&a()&&y(b)}),g(t,"blur",()=>{d=null,w.hidden=!0}),g(n,"pointerlockchange",()=>{d=null,w.hidden=!0}),{leave:v,keyboardLink:T,updateHint(){w.hidden=h||!o()||!a(),w.textContent=u(),w.setAttribute("aria-label",w.textContent)},dispose(){if(!h){h=!0,d=null;for(const b of p)b();for(const b of _)b.remove();m===null?e.removeAttribute("aria-describedby"):e.setAttribute("aria-describedby",m)}}}}function v0({scene:n,renderer:t,environmentTarget:e,materials:i=[],extraMaterials:s=[]}){const r=new Set,a=new Set([...i,...s]),o=new Set,c=new Set,l=new Set,u=h=>{h!=null&&h.isTexture?o.add(h):Array.isArray(h)&&h.forEach(u)};n.traverse(h=>{var f,d;h.geometry&&r.add(h.geometry);for(const p of[].concat(h.material||[]))a.add(p);h.isInstancedMesh&&l.add(h);for(const p of[(f=h.shadow)==null?void 0:f.map,(d=h.shadow)==null?void 0:d.mapPass])p&&c.add(p)}),e&&c.add(e),u(n.environment),u(n.background);for(const h of a){for(const f of Object.values(h))u(f);for(const f of Object.values(h.uniforms||{}))u(f.value)}for(const h of c)for(const f of h.textures||[h.texture])o.delete(f);n.environment=null,n.overrideMaterial=null;for(const h of l)h.dispose();for(const h of r)h.dispose();for(const h of a)h.dispose();for(const h of o)h.dispose(),h.isCanvasTexture&&(h.image=null);for(const h of c)h.dispose();t.dispose(),n.clear()}const u3=20261008;function Oa(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ri(n,t){let e=-.7;const i=Math.max(0,-n-13);return e-=70*(1-Math.exp(-i/140)),e+=(Math.sin(n*.011+t*.017)*10+Math.sin(t*.029+1.3)*Math.cos(n*.013)*12)*Math.min(1,i/120),n<-420&&(e+=Math.min(140,(-n-420)*.22)*(.75+.18*Math.sin(t*.009+.5)+.07*Math.sin(t*.043))),n>8&&(e+=(n-8)*.35),Math.abs(t)>30&&n>-60&&(e+=(Math.abs(t)-30)*.12),e}function h3(n,t,e=0){return n+e>-13&&n-e<9&&t+e>-12&&t-e<11}function f3(n,t,e=0){const i=10+Math.max(0,-n-13)*.15;return n<-13&&n>-125&&Math.abs(t-3)<i+e}function d3(){const n=Oa(u3),t=[],e=[[-22,-18,12,"oak"],[-34,-29,15,"oak"],[-51,-24,14,"oak"],[-25,26,13,"oak"],[-39,38,16,"oak"],[-56,32,14,"oak"],[-20,44,12,"birch"],[12,43,13,"birch"],[-27,63,16,"birch"],[-61,-43,15,"birch"]];for(const[c,l,u,h]of e)t.push({x:c,z:l,height:u,species:h,tier:"near",yaw:n()*Math.PI*2,width:.9+n()*.2});[[-91,-65,34,29,20],[-119,67,32,35,20],[-202,-92,68,49,32],[-211,96,74,49,32],[-376,-190,110,85,54],[-403,155,125,93,60],[-615,-95,99,100,44],[-643,235,100,85,36],[-244,3,44,22,22]].forEach(([c,l,u,h,f],d)=>{for(let p=0;p<f;p++){const _=n()*Math.PI*2,m=Math.sqrt(n()),g=c+Math.cos(_)*m*u,v=l+Math.sin(_)*m*h,y=8+n()*9;f3(g,v,y*.34)||t.push({x:g,z:v,height:y,species:"woodland",tier:d<4||d===8?"middle":"far",grove:d,yaw:n()*Math.PI*2,width:.8+n()*.4})}});const s=[],r=[],a=[];[[-16.8,-5.6,3,6.2,80],[-19.2,13.8,4.8,4.7,72],[-31,18.4,7,4.3,64],[-1.5,18.4,8,4.1,64]].forEach(([c,l,u,h,f],d)=>{for(let p=0;p<f;p++){const _=n()*Math.PI*2,m=Math.sqrt(n()),g=c+Math.cos(_)*m*u,v=l+Math.sin(_)*m*h;h3(g,v,.5)||s.push({x:g,z:v,height:.24+n()*.36,width:.6+n()*.6,yaw:n()*Math.PI*2,bed:d})}});for(const[c,l,u]of[[-15.1,-10.5,.8],[-17.3,-12,1.1],[-20.2,-13.8,1.3],[-16.5,13.2,.9],[-18.1,15.2,1.1],[-21.2,17,1.4],[-29.2,22.2,1.3],[-33,24.4,1.7],[-37,26.1,1.5],[-8.5,19.8,1.1],[-5.4,21.8,1.2],[5.7,21,1]])r.push({x:c,z:l,height:u*.6,width:u,yaw:n()*Math.PI*2});for(const[c,l,u]of[[-14.2,-8,.65],[-16.4,-9.1,1.1],[-18.6,-10.6,.8],[-16,13.4,.7],[-20,15.3,1.3],[-21.7,16,.85],[-29,23,1.8],[-32.2,24,1.1],[-34,25,1.5],[-47,-17,2],[-50,-18.1,1.1],[-43,27,1.8]])a.push({x:c,z:l,height:u*.38,width:u,yaw:n()*Math.PI*2});return{trees:t,grass:s,shrubs:r,stones:a}}function Sl(n,t=null){return new Ye({name:t?"exterior-ground":"exterior-vegetation-stone",vertexColors:!0,defines:t?{EXTERIOR_GROUND:1}:{},uniforms:{sunDirection:{value:n.clone().normalize()},hazeColor:{value:new Ht(.84,.61,.48)},...t?{map:{value:t}}:{}},vertexShader:`
      uniform vec3 sunDirection;
      varying vec3 vExteriorColor;
      varying float vHaze;
      #ifdef EXTERIOR_GROUND
        varying vec2 vGroundUv;
      #endif
      void main() {
        vec4 p = vec4(position, 1.0);
        vec3 n = normal;
        vec3 tint = color;
        #ifdef USE_INSTANCING
          // Inverse squared column lengths compensate for nonuniform scale.
          mat3 im = mat3(instanceMatrix);
          n /= vec3(dot(im[0], im[0]), dot(im[1], im[1]), dot(im[2], im[2]));
          n = im * n;
          p = instanceMatrix * p;
        #endif
        #ifdef USE_INSTANCING_COLOR
          tint *= instanceColor;
        #endif
        vec4 world = modelMatrix * p;
        n = normalize(mat3(modelMatrix) * n);
        float sun = max(dot(n, sunDirection), 0.0);
        vec3 light = mix(vec3(0.64, 0.72, 0.70), vec3(1.52, 1.29, 0.93), sun);
        vExteriorColor = tint * light;
        float distanceToLibrary = length(world.xz - vec2(-10.0, 3.0));
        vHaze = (1.0 - exp(-distanceToLibrary / 420.0)) * 0.92;
        #ifdef EXTERIOR_GROUND
          vGroundUv = uv;
        #endif
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform vec3 hazeColor;
      varying vec3 vExteriorColor;
      varying float vHaze;
      #ifdef EXTERIOR_GROUND
        uniform sampler2D map;
        varying vec2 vGroundUv;
      #endif
      void main() {
        vec3 col = vExteriorColor;
        #ifdef EXTERIOR_GROUND
          col *= texture2D(map, vGroundUv).rgb;
        #endif
        gl_FragColor = vec4(mix(col, hazeColor, vHaze), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function p3(){const t=new Uint8Array(65536),e=Oa(407);for(let s=0;s<128;s++)for(let r=0;r<128;r++){const a=207+e()*38+7*Math.sin(r*.83+Math.sin(s*.24)),o=(s*128+r)*4;t[o]=a,t[o+1]=a+3,t[o+2]=a-4,t[o+3]=255}const i=new Ss(t,128,128);return i.name="hillside-ground-grain-128",i.wrapS=i.wrapT=wn,i.magFilter=Pe,i.minFilter=He,i.generateMipmaps=!0,i.anisotropy=4,i.needsUpdate=!0,i}function wl(n,t=[]){const e=[...t];for(const[i,s,r]of n)for(let a=0;a<=r;a++)e.push(i+(s-i)*a/r);return[...new Set(e)].sort((i,s)=>i-s)}function m3(){const n=wl([[-1200,-420,20],[-420,-100,20],[-100,-35,12],[-35,20,32],[20,100,10],[100,600,12]],[-13,8]),t=wl([[-900,-180,12],[-180,-45,10],[-45,45,36],[45,180,10],[180,900,12]],[-30,30]),e=[],i=[],s=[],r=[],a=[],o=new Ht(.25,.31,.115),c=new Ht(.37,.32,.16),l=new Ht(.23,.295,.12),u=new Ht,h=new U;for(const d of t)for(const p of n){e.push(p,Ri(p,d),d),h.set(Ri(p-.5,d)-Ri(p+.5,d),1,Ri(p,d-.5)-Ri(p,d+.5)).normalize(),i.push(h.x,h.y,h.z);const _=.5+.25*Math.sin(p*.039+Math.sin(d*.034)*1.5)+.18*Math.sin(d*.071+p*.018);u.copy(o).lerp(c,_);const m=Math.exp(-(((p+12)/19)**2)-(d/30)**2);u.lerp(l,m*.6),s.push(u.r,u.g,u.b),r.push(p/4,d/4)}for(let d=0;d<t.length-1;d++)for(let p=0;p<n.length-1;p++){const _=d*n.length+p,m=_+1,g=_+n.length,v=g+1;a.push(_,g,m,m,g,v)}const f=new Qt;return f.setAttribute("position",new Ot(e,3)),f.setAttribute("normal",new Ot(i,3)),f.setAttribute("color",new Ot(s,3)),f.setAttribute("uv",new Ot(r,2)),f.setIndex(a),f.computeBoundingBox(),f.computeBoundingSphere(),f}function Ba(n,t,e=.1){if(n.index){const o=n;n=n.toNonIndexed(),o.dispose()}const i=n.attributes.position,s=new Float32Array(i.count*3),r=new Ht(t),a=new Ht;for(let o=0;o<i.count;o++){const c=1+e*Math.sin(i.getX(o)*27+i.getY(o)*19+i.getZ(o)*23);a.copy(r).multiplyScalar(c),s.set([a.r,a.g,a.b],o*3)}return n.setAttribute("color",new pe(s,3)),n.deleteAttribute("uv"),n}function Tr(n){const t=br(n,!1);for(const e of n)e.dispose();return t.computeBoundingBox(),t.computeBoundingSphere(),t}function Ms(n,t,e,i,s,r=6){const a=new U(...n),o=new U(...t),c=o.clone().sub(a),l=new Gn(i,e,c.length(),r,1,!0);return l.applyQuaternion(new We().setFromUnitVectors(new U(0,1,0),c.normalize())),l.translate(...a.add(o).multiplyScalar(.5).toArray()),Ba(l,s,.14)}function Di(n,t,e,i,s,r,a,o=1){const c=new Ia(1,o),l=c.attributes.position;for(let u=0;u<l.count;u++){const h=1+.1*Math.sin(l.getX(u)*9+l.getY(u)*7+l.getZ(u)*11);l.setXYZ(u,l.getX(u)*h,l.getY(u)*h,l.getZ(u)*h)}return c.scale(i,s,r),c.translate(n,t,e),Ba(c,a,.08)}function g3(){const n=[Ms([0,0,0],[.018,.63,-.018],.035,.017,7430474,8)];return[[-.2,.65,.04,.19,.18,.2],[.18,.69,.02,.22,.2,.18],[-.03,.69,-.19,.2,.21,.18],[.03,.77,.19,.21,.2,.18],[-.11,.86,-.02,.19,.21,.21],[.1,.91,.03,.17,.19,.17],[.01,.78,-.05,.25,.21,.22]].forEach(([e,i,s,r,a,o],c)=>{n.push(Ms([.01,.34+c*.025,0],[e,i-.035,s],.014,.005,7889994)),n.push(Di(e,i,s,r,a,o,[7635531,8556627,6781763,9147481][c%4]))}),Tr(n)}function _3(){const n=[Ms([0,0,0],[-.022,.9,.01],.019,.006,12695706,7)];for(let t=0;t<5;t++){const e=t*2.4,i=.57+t*.08,s=Math.sin(e)*.08,r=Math.cos(e)*.07;n.push(Ms([0,i-.2,0],[s,i,r],.007,.002,10392951,5)),n.push(Di(s,i,r,.13,.19,.12,t%2?10329700:8098386))}return Tr(n)}function El(n=!1){const t=n?6:8,e=n?[[0,.34],[.24,.49],[.29,.7],[.18,.93],[0,1.04]]:[[0,.32],[.24,.45],[.3,.64],[.26,.83],[.15,1],[0,1.06]],i=new ws(e.map(([r,a])=>new It(r,a)),t),s=i.attributes.position;for(let r=0;r<s.count;r++){const a=1+.12*Math.sin(s.getX(r)*17+s.getZ(r)*11+s.getY(r)*13);s.setXYZ(r,s.getX(r)*a,s.getY(r),s.getZ(r)*a)}return Tr([Ba(i,7899984),Ms([0,0,0],[0,.52,0],.027,.016,7890768,n?4:5)])}function x3(){return Tr([Di(-.35,.38,.03,.55,.6,.51,6782280,0),Di(.3,.47,-.04,.62,.7,.54,8491607,0),Di(.02,.5,.22,.53,.66,.49,8886107,0)])}function v3(){return Di(0,.2,0,.6,.75,.5,11182474,0)}function y3(){const n=[],t=[],e=new Ht(8227656),i=new Ht(11510376);for(let r=0;r<4;r++){const a=r*2.4,o=Math.cos(a),c=Math.sin(a),l=.65+r%3*.17,u=.065,h=[[-c*u,0,o*u],[c*u,0,-o*u],[o*.16-c*u*.5,l*.6,c*.16+o*u*.5],[o*.3,l,c*.3]];for(const f of[0,1,2,1,3,2,2,1,0,2,3,1]){n.push(...h[f]);const d=e.clone().lerp(i,h[f][1]/l);t.push(d.r,d.g,d.b)}}const s=new Qt;return s.setAttribute("position",new Ot(n,3)),s.setAttribute("color",new Ot(t,3)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),s}function M3(n){const t=new Ye({name:"exterior-sunset",side:Ae,depthWrite:!1,uniforms:{sunDir:{value:n.clone()}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 zen = vec3(0.16,0.27,0.55); vec3 hor = vec3(1.25,0.74,0.45); vec3 below = vec3(0.55,0.42,0.36);
        vec3 col = mix(hor, zen, pow(clamp(h,0.0,1.0), 0.5));
        col = mix(col, below, 1.0 - smoothstep(-0.2,0.0,h));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.55,0.25)*pow(s,5.0)*0.7 + vec3(1.0,0.75,0.45)*pow(s,90.0)*2.5 + smoothstep(0.9993,0.9996,s)*vec3(18.0,12.0,7.0);
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new Jt(new ri(1200,32,16),t);return e.name="exterior-sky",e.frustumCulled=!1,e.renderOrder=-1,e.matrixAutoUpdate=!1,e}function rs(n,t,e,i,s){const r=new Aa(e,i,t.length);r.name=n;const a=new jt,o=new We,c=new U,l=new U,u=new U(0,1,0),h=new Ht,f=Oa(s);return t.forEach((d,p)=>{const{x:_,z:m,height:g,width:v,yaw:y}=d;c.set(_,Ri(_,m)-.045,m),o.setFromAxisAngle(u,y);const x=d.species?g*v:v;l.set(x,g,x),a.compose(c,o,l),r.setMatrixAt(p,a);const T=f();h.setRGB(.88+T*.23,.92+T*.14,.88+T*.11),r.setColorAt(p,h)}),r.instanceMatrix.setUsage(lr),r.instanceMatrix.needsUpdate=!0,r.instanceColor.setUsage(lr),r.instanceColor.needsUpdate=!0,r.matrixAutoUpdate=!1,r.computeBoundingBox(),r.computeBoundingSphere(),r}function b3(n){const t=new Set,e=new Set,i=new Set,s=[];let r=0,a=0,o=0;n.traverse(u=>{var _,m;if(!u.isMesh)return;const h=u.geometry,f=u.material,d=u.isInstancedMesh?u.count:1,p=(h.index?h.index.count:h.attributes.position.count)/3;if(a+=p*d,o+=u.isInstancedMesh?d:0,!t.has(h)){for(const g of Object.values(h.attributes))r+=g.array.byteLength;r+=((_=h.index)==null?void 0:_.array.byteLength)||0,t.add(h)}u.instanceMatrix&&(r+=u.instanceMatrix.array.byteLength),u.instanceColor&&(r+=u.instanceColor.array.byteLength),e.add(f);for(const g of Object.values(f.uniforms||{}))(m=g.value)!=null&&m.isTexture&&i.add(g.value);s.push({name:u.name,instances:d,templateTriangles:p,submittedTriangles:p*d})});let c=0,l=0;for(const u of i){const{width:h,height:f,data:d}=u.image;c+=d.byteLength;let p=h,_=f;do{if(l+=p*_*4,!u.generateMipmaps||p===1&&_===1)break;p=Math.max(1,p>>1),_=Math.max(1,_>>1)}while(!0)}return{triangles:a,drawCallsUpperBound:s.length,instances:o,geometries:t.size,materials:e.size,textures:i.size,bufferBytes:r,textureBytes:c,textureBytesWithMipmaps:l,batches:s}}function S3({sunDirection:n}){const t=new bn;t.name="hillside-exterior",t.matrixAutoUpdate=!1;const e=d3(),i=Sl(n),s=p3(),r=new Jt(m3(),Sl(n,s));r.name="exterior-continuous-terrain",r.matrixAutoUpdate=!1,t.add(M3(n),r);const a=g3(),o=_3(),c=El(),l=El(!0);for(const f of["oak","birch"]){const d=e.trees.filter(p=>p.species===f);t.add(rs(`exterior-near-${f}`,d,f==="oak"?a:o,i,f==="oak"?16:23))}for(const[f,d]of[["middle",[0,2]],["middle",[1,3,8]],["far",[4,6]],["far",[5,7]]]){const p=e.trees.filter(_=>d.includes(_.grove));t.add(rs(`exterior-${f}-groves-${d.join("-")}`,p,f==="middle"?c:l,i,70+d[0]))}const u=y3();for(let f=0;f<4;f++){const d=e.grass.filter(p=>p.bed===f);t.add(rs(`exterior-meadow-bed-${f}`,d,u,i,30+f))}t.add(rs("exterior-low-shrubs",e.shrubs,x3(),i,17)),t.add(rs("exterior-sandstone-outcrops",e.stones,v3(),i,12)),t.traverse(f=>{f.castShadow=!1,f.receiveShadow=!1}),t.updateMatrixWorld(!0);const h=b3(t);return t.userData.exteriorBudget=h,{group:t,layout:e,budget:h,dispose(){t.removeFromParent();const f=new Set,d=new Set;t.traverse(p=>{p.geometry&&f.add(p.geometry),p.material&&d.add(p.material),p.isInstancedMesh&&p.dispose()}),f.forEach(p=>p.dispose()),d.forEach(p=>p.dispose()),s.dispose()}}}function w3({document:n,window:t,onCancel:e=()=>{}}){var S;const i=n.getElementById("loading"),s=n.getElementById("loading-status"),r=n.getElementById("loading-retry"),a=n.getElementById("loading-error");(S=t.__libraryBootErrorCleanup)==null||S.call(t);const o=t.pazneriaRoomHandoff;let c="loading",l=null,u=null,h=!1,f=!1,d=null,p=null;function _(){d==null||d.disconnect(),d=null,p=null}function m(){var A;if(!p||o!=null&&o.active)return;const M=p;_(),n.visibilityState==="visible"&&n.hasFocus()&&((A=n.getElementById("c"))==null||A.focus({preventScroll:!0})),M()}const g=()=>Object.assign(new Error("Library loading cancelled"),{name:"AbortError"});function v(){l&&(t.cancelAnimationFrame(l.frame),l.timer!==null&&t.clearTimeout(l.timer),l.reject(g()),l=null)}function y(){u!==null&&t.clearTimeout(u),u=null,c==="ready"&&(i.hidden=!0)}function x(){f||h||c!=="loading"||(f=!0,c="cancelled",v(),_(),o==null||o.fail(),e())}function T(){_(),c==="loading"?x():y()}function E(M){f&&M.persisted&&t.location.reload()}function w(){h||f||(c="error",v(),_(),o==null||o.fail(),y(),i.hidden=!1,i.classList.remove("is-ready"),i.dataset.state="error",i.setAttribute("aria-busy","false"),s.textContent="Library could not load.",a.hidden=r.hidden=!1)}const b=()=>t.location.reload();return r.addEventListener("click",b),t.addEventListener("pagehide",T),t.addEventListener("pageshow",E),i.addEventListener("transitionend",y),{get cancelled(){return f},get state(){return c},async stage(M,A){if(h||f||c!=="loading")throw g();if(!Number.isInteger(M)||M<0||M>3)throw new RangeError("Invalid loading stage");if(i.dataset.stage=String(M),s.textContent=A,await new Promise((N,P)=>{l={frame:null,timer:null,reject:P},l.frame=t.requestAnimationFrame(()=>{l.timer=t.setTimeout(()=>{l=null,N()},0)})}),h||f)throw g()},ready(M=()=>{}){var A,N;if(!(h||f||c!=="loading")){if(c="ready",i.dataset.stage="4",i.dataset.state="ready",i.setAttribute("aria-busy","false"),s.textContent="Ready",(A=t.__libraryBootErrorCleanup)==null||A.call(t),o!=null&&o.active){i.hidden=!0,p=M,d=new t.MutationObserver(m),d.observe(n.documentElement,{attributes:!0,attributeFilter:["data-room-handoff"]}),o.ready(),m();return}M(),i.classList.add("is-ready"),(N=t.matchMedia)!=null&&N.call(t,"(prefers-reduced-motion: reduce)").matches?y():u=t.setTimeout(y,240)}},fail:w,dispose(){var M;h||(h=!0,v(),_(),o==null||o.fail(),y(),(M=t.__libraryBootErrorCleanup)==null||M.call(t),r.removeEventListener("click",b),t.removeEventListener("pagehide",T),t.removeEventListener("pageshow",E),i.removeEventListener("transitionend",y))}}}const y0="1.0.0+craft-refinement.1",pr=Math.PI,Be=pr*2,Ee=(n,t)=>n.map((e,i)=>e+t[i]),ae=(n,t)=>n.map((e,i)=>e-t[i]),de=(n,t)=>n.map(e=>e*t),mr=(n,t)=>n.reduce((e,i,s)=>e+i*t[s],0),un=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],ye=n=>de(n,1/(Math.hypot(...n)||1)),ms=(n,t,e)=>n+(t-n)*e,Qn=(n,t,e)=>Math.max(t,Math.min(e,n)),gr=n=>n*n*(3-2*n);function Ui(n,t){let e=Math.imul(n,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Ei(n,t,e=256){const i=Math.floor(n),s=Math.floor(t),r=gr(n-i),a=gr(t-s),o=l=>(l%e+e)%e,c=(l,u)=>Ui(o(l),o(u));return ms(ms(c(i,s),c(i+1,s),r),ms(c(i,s+1),c(i+1,s+1),r),a)}function E3(n){let t=2166136261;for(const e of n)t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0}function os(n,t){return{name:n,material:t,positions:[],normals:[],uvs:[],indices:[],parts:[]}}function Qe(n,t,e,i){const s=n.positions.length/3;return n.positions.push(...t),n.normals.push(...e),n.uvs.push(...i),s}function On(n,t,e,i){n.indices.push(t,e,i)}function gs(n,t,e,i,s,r=!1){r?(On(n,t,i,e),On(n,t,s,i)):(On(n,t,e,i),On(n,t,i,s))}function _r(n,t,e,i={}){n.parts.push({name:t,startTriangle:e/3,triangles:(n.indices.length-e)/3,...i})}function M0(n,t,e,i=6){const s=[];for(let r=0;r<4;r++){const a=r*pr/2,o=r===0||r===3?1:-1,c=r<2?1:-1,l=o*(n/2-e),u=c*(t/2-e);for(let h=0;h<=i;h++){const f=a+h*pr/2/i;s.push([l+e*Math.cos(f),u+e*Math.sin(f)])}}return s}function _o(n,t){const e=t*(n.length-1),i=Math.min(n.length-2,Math.floor(e)),s=e-i,r=n[Math.max(0,i-1)],a=n[i],o=n[i+1],c=n[Math.min(n.length-1,i+2)];return a.map((l,u)=>.5*(2*l+(-r[u]+o[u])*s+(2*r[u]-5*l+4*o[u]-c[u])*s*s+(-r[u]+3*l-3*o[u]+c[u])*s*s*s))}function rn(n,t,e,i,{sections:s=14,corner:r=5,reference:a=[1,0,0],radius:o=.006,phase:c=0,capBevel:l=.002,groundCut:u=!1}={}){const h=n.indices.length,f=4*(r+1),d=[],p=[],_=[0];for(let g=0;g<=s;g++){const v=g/s,y=_o(i,v),x=y.slice(0,3),T=_o(i,Math.max(0,v-1e-4)),E=_o(i,Math.min(1,v+1e-4)),w=ye(ae(E.slice(0,3),T.slice(0,3))),b=ye(ae(a,de(w,mr(a,w)))),S=ye(un(b,w)),M=g===0||g===s?l:0,A=M0(y[3]-2*M,y[4]-2*M,Math.min(o,y[3]/2*.85,y[4]/2*.85),r),N=[];g>0&&_.push(_[g-1]+Math.hypot(...ae(x,p[g-1].p))),p.push({p:x,u:b,v:S,axis:w,c:y,loop:A});for(let P=0;P<f;P++){const I=A[P],k=A[(P+f-1)%f],B=A[(P+1)%f],$=ye([B[0]-k[0],B[1]-k[1],0]),H=ye(Ee(de(b,$[1]),de(S,-$[0]))),K=Ee(x,Ee(de(b,I[0]),de(S,I[1])));u&&g===0&&(K[1]=0),N.push(Qe(n,K,H,[P/f*.84+c,_[g]/.75]))}d.push(N)}for(let g=0;g<s;g++)for(let v=0;v<f;v++)gs(n,d[g][v],d[g+1][v],d[g+1][(v+1)%f],d[g][(v+1)%f]);const m=(g,v)=>n.positions.slice(d[g][(v+f)%f]*3,d[g][(v+f)%f]*3+3);for(let g=0;g<=s;g++)for(let v=0;v<f;v++){const y=ae(m(Math.min(s,g+1),v),m(Math.max(0,g-1),v)),x=ae(m(g,v+1),m(g,v-1));n.normals.splice(d[g][v]*3,3,...ye(un(y,x)))}_r(n,e,h,{construction:"walnut member; longitudinal grain",stationCount:s+1});for(const g of[0,s]){const v=p[g],y=t.indices.length,x=u&&g===0?[0,-1,0]:de(v.axis,g===0?-1:1),T=v.p.slice();u&&g===0&&(T[1]=0);const E=E3(e),w=Ui(E,g)*Be,b=Math.cos(w),S=Math.sin(w),M=[.32+Ui(E+7,g)*.36,.32+Ui(E+17,g)*.36],A=Qe(t,T,x,M),N=v.loop.map(P=>{const I=Ee(v.p,Ee(de(v.u,P[0]),de(v.v,P[1])));return u&&g===0&&(I[1]=0),Qe(t,I,x,[M[0]+(P[0]*b-P[1]*S)/.16,M[1]+(P[0]*S+P[1]*b)/.16])});for(let P=0;P<f;P++){const I=N[P],k=N[(P+1)%f],B=t.positions.slice(I*3,I*3+3),$=t.positions.slice(k*3,k*3+3);mr(un(ae(B,T),ae($,T)),x)>0?On(t,A,I,k):On(t,A,k,I)}_r(t,e+(g===0?" / start end grain":" / finish end grain"),y)}}function Tl(n,t,e,i=.0017,s=6,r=!0){const a=n.indices.length,o=[],c=e.length;for(let l=0;l<c;l++){const u=e[l],h=e[(l+c-1)%c],f=e[(l+1)%c],d=ye(ae(f,h)),p=ye(un(d,Math.abs(d[1])<.88?[0,1,0]:[0,0,1])),_=ye(un(d,p)),m=[];for(let g=0;g<s;g++){const v=Ee(de(p,Math.cos(g*Be/s)),de(_,Math.sin(g*Be/s)));m.push(Qe(n,Ee(u,de(v,i)),v,[g/s,l/c]))}o.push(m)}for(let l=0;l<(r?c:c-1);l++)for(let u=0;u<s;u++)gs(n,o[l][u],o[(l+1)%c][u],o[(l+1)%c][(u+1)%s],o[l][(u+1)%s],!0);_r(n,t,a)}function Al(n,t){const e=(t+.245)/.56,i=Math.exp(-Math.pow(n/.19,2)-Math.pow((t+.025)/.18,2));return .448+.019*e+.004*(1-Math.pow(n/.3,2))-.021*i}function Rl(n,t,e,i,{width:s,depth:r,radius:a,transform:o,top:c,bottom:l,sideMid:u,phase:h=0,corner:f=10,radial:d=11}){const p=n.indices.length,_=M0(s,r,a,f),m=[],g=[],v=(I,k)=>{const $=(H,K)=>o([H,c(H,K),K]);return ye(un(ae($(I,k+5e-5),$(I,k-5e-5)),ae($(I+5e-5,k),$(I-5e-5,k))))};for(let I=0;I<_.length;I++)if(m.push(_[I]),(I+1)%(f+1)===0){const k=_[I],B=_[(I+1)%_.length];for(let $=1;$<8;$++)m.push(Ee(k,de(ae(B,k),$/8)))}const y=m.length,x=[],T=[[.945,l],[.99,ms(l,u,.25)],[1,ms(l,u,.7)],[1,u],[.985,u+.016],[.955,null]];for(let I=0;I<T.length;I++){const[k,B]=T[I],$=[];for(let H=0;H<y;H++){const[K,nt]=de(m[H],k),W=B===null?c(K,nt):B,ot=Qe(n,o([K,W,nt]),[0,1,0],[(K+s/2)/.24+h,(nt+r/2)/.24]);$.push(ot),B===null&&g.push({id:ot,x:K,z:nt})}x.push($)}for(let I=0;I<x.length-1;I++)for(let k=0;k<y;k++)gs(n,x[I][k],x[I][(k+1)%y],x[I+1][(k+1)%y],x[I+1][k],!0);let E=x[x.length-1];for(let I=1;I<d;I++){const k=.955*(1-I/d),B=[];for(let $=0;$<y;$++){const[H,K]=de(m[$],k),nt=Qe(n,o([H,c(H,K),K]),[0,1,0],[(H+s/2)/.24+h,(K+r/2)/.24]);B.push(nt),g.push({id:nt,x:H,z:K})}for(let $=0;$<y;$++)gs(n,E[$],E[($+1)%y],B[($+1)%y],B[$],!0);E=B}const w=Qe(n,o([0,c(0,0),0]),[0,1,0],[s/2/.24+h,r/2/.24]);g.push({id:w,x:0,z:0});for(let I=0;I<y;I++)On(n,E[(I+1)%y],E[I],w);const b=ye(ae(o([0,l-1,0]),o([0,l,0]))),S=Qe(n,o([0,l,0]),b,[.5,.5]),M=m.map(I=>Qe(n,o([I[0]*.945,l,I[1]*.945]),b,[I[0]/.24,I[1]/.24]));for(let I=0;I<y;I++)On(n,M[I],M[(I+1)%y],S);const A=new Set;for(let I=p;I<n.indices.length;I++)A.add(n.indices[I]);for(const I of A)n.normals.splice(I*3,3,0,0,0);for(let I=p;I<n.indices.length;I+=3){const[k,B,$]=n.indices.slice(I,I+3),H=n.positions,K=un(ae(H.slice(B*3,B*3+3),H.slice(k*3,k*3+3)),ae(H.slice($*3,$*3+3),H.slice(k*3,k*3+3)));for(const nt of[k,B,$])for(let W=0;W<3;W++)n.normals[nt*3+W]+=K[W]}for(const I of A)n.normals.splice(I*3,3,...ye(n.normals.slice(I*3,I*3+3)));for(const{id:I,x:k,z:B}of g)n.normals.splice(I*3,3,...v(k,B));_r(n,i,p,{construction:"closed shaped upholstery shell"});const N=m.map(I=>o([I[0]*.996,u+.003,I[1]*.996]));Tl(t,i+" / perimeter welt",N,.0018,6);const P=m.map(I=>{const k=I[0]*(.955-.009/(s/2)),B=I[1]*(.955-.009/(r/2));return o([k,c(k,B)+45e-5,B])});Tl(t,i+" / cover seam",P,55e-5,4);for(let I=0;I<y;I++){const k=P[I],B=P[(I+1)%y],$=Math.hypot(...ae(B,k)),H=Math.max(1,Math.floor($/.007));for(let K=0;K<H;K++){const nt=(K+.35)/H,W=Ee(k,de(ae(B,k),nt)),ot=de(ye(ae(B,k)),.0015),Ct=ye(ae(o([0,1,0]),o([0,0,0]))),J=de(ye(un(ye(ot),Ct)),28e-5),at=[];for(const C of[ae(W,ot),Ee(W,de(Ct,2e-4)),Ee(W,ot)])at.push([Qe(e,ae(C,J),Ct,[0,0]),Qe(e,Ee(C,J),Ct,[1,0])]);for(let C=0;C<2;C++){const F=e.positions.slice(at[C][0]*3,at[C][0]*3+3),O=e.positions.slice(at[C+1][0]*3,at[C+1][0]*3+3),G=e.positions.slice(at[C+1][1]*3,at[C+1][1]*3+3);gs(e,at[C][0],at[C+1][0],at[C+1][1],at[C][1],mr(un(ae(O,F),ae(G,F)),Ct)<0)}}}}function b0(){const n=os("Walnut / longitudinal","walnut"),t=os("Walnut / end grain","endgrain"),e=os("Umber leather","leather"),i=os("Leather welts and seams","welt"),s=os("Saddle stitching","thread"),r=.352,a=-.436;for(const w of[-1,1]){const b=w<0?"left":"right";rn(n,t,b+" front post",[[w*.344,.019,r,.038,.04],[w*.322,.344,.293,.054,.057],[w*.326,.614,.265,.057,.054]],{sections:14,corner:4,radius:.008,phase:w*.18,groundCut:!0}),rn(n,t,b+" rear lower leg",[[w*.354,.019,a,.042,.044],[w*.326,.355,-.225,.059,.059]],{sections:8,corner:4,radius:.007,phase:w*.26,groundCut:!0}),rn(n,t,b+" upper back post",[[w*.326,.352,-.225,.059,.059],[w*.322,.635,-.292,.055,.055],[w*.312,.946,-.411,.045,.048]],{sections:14,corner:4,radius:.007,phase:w*.26+.17}),rn(n,t,b+" side seat rail",[[w*.322,.344,-.24,.047,.081],[w*.322,.349,.022,.045,.076],[w*.322,.365,.291,.046,.075]],{sections:10,corner:4,reference:[1,0,0],radius:.006,phase:.22}),rn(n,t,b+" sculpted arm",[[w*.326,.622,-.295,.067,.036],[w*.339,.626,-.15,.107,.044],[w*.342,.633,.08,.112,.047],[w*.337,.631,.286,.098,.042],[w*.329,.623,.395,.061,.03]],{sections:24,corner:5,reference:[1,0,0],radius:.012,phase:w*.31,capBevel:.0018})}rn(n,t,"front cross rail",[[-.325,.357,.287,.068,.067],[0,.358,.289,.067,.065],[.325,.357,.287,.068,.067]],{sections:10,corner:4,reference:[0,0,1],radius:.006,phase:.64}),rn(n,t,"rear cross rail",[[-.325,.34,-.239,.056,.072],[0,.34,-.242,.056,.072],[.325,.34,-.239,.056,.072]],{sections:8,corner:4,reference:[0,0,1],radius:.005,phase:.42});for(let w=0;w<5;w++){const b=-.185+w*.104;rn(n,t,"seat bearing slat "+(w+1),[[-.306,.385,b,.066,.017],[.306,.385,b,.066,.017]],{sections:3,corner:2,reference:[0,0,1],radius:.003,phase:w*.14})}const o=w=>[0,.463+w*.496,-.219-w*.194];for(let w=0;w<3;w++){const b=.13+w*.38,S=o(b),M=.307-w*.004;rn(n,t,"back bearing batten "+(w+1),[[-M,S[1],S[2]-.036,.037,.057],[0,S[1],S[2]-.036,.037,.057],[M,S[1],S[2]-.036,.037,.057]],{sections:8,corner:3,reference:[0,0,1],radius:.004,phase:w*.19})}rn(n,t,"back crown rail",[[-.313,.946,-.411,.047,.04],[0,.954,-.415,.048,.042],[.313,.946,-.411,.047,.04]],{sections:14,corner:4,reference:[0,0,1],radius:.006,phase:.72}),Rl(e,i,s,"seat cushion",{width:.6,depth:.56,radius:.048,bottom:.39,sideMid:.421,top:(w,b)=>Al(w,b+.035),transform:w=>[w[0],w[1],w[2]+.035],phase:.15});const c=12*pr/180,l=Math.cos(c),u=Math.sin(c);Rl(e,i,s,"back cushion",{width:.575,depth:.53,radius:.067,bottom:-.014,sideMid:.011,top:(w,b)=>{const S=.016*Math.exp(-Math.pow((b+.145)/.09,2)),M=.006*Math.exp(-Math.pow((b-.19)/.09,2)),A=.005*Math.exp(-Math.pow((b-.065)/.13,2)-Math.pow(w/.19,2));return .046+S+M-A-.012*Math.pow(Math.abs(w)/.29,3)},transform:w=>[-w[0]*(1-.065*gr(Qn((w[2]+.1)/.365,0,1))),.711+w[2]*l+w[1]*u,-.299-w[2]*u+w[1]*l],phase:1.8,corner:12,radial:12});const p=[n,t,e,i,s],_=[1/0,1/0,1/0],m=[-1/0,-1/0,-1/0];for(const w of p)for(let b=0;b<w.positions.length;b++){const S=b%3;_[S]=Math.min(_[S],w.positions[b]),m[S]=Math.max(m[S],w.positions[b])}const g=[-(_[0]+m[0])/2,-_[1],-(_[2]+m[2])/2];for(const w of p)for(let b=0;b<w.positions.length;b++)w.positions[b]+=g[b%3];const v=Ee(_,g),y=Ee(m,g),x=w=>Ee(w,g),T=x([0,Al(0,-.025),-.025]),E={name:"Folio",version:y0,units:"metres",handedness:"right",up:[0,1,0],forward:[0,0,1],root:"footprint bounding-box centre at ground",buildOffset:g,bounds:{min:v,max:y,size:ae(y,v)},anchors:{seat:{position:T,forward:[0,0,1],up:[0,1,0],semantic:"pelvis contact on designed compressed seat; no skeleton hip offset"},seatedEye:{position:x([0,1.135,-.07]),forward:ye([0,-.065,1]),semantic:"camera suggestion for an average adult, above chair envelope; tune to avatar"},entry:{position:x([0,0,.84]),forward:[0,0,-1],semantic:"ground approach pose, facing chair"},standUp:{position:x([0,0,.73]),forward:[0,0,1],semantic:"ground destination for stand-up; animation path requires host clearance checks"},leftHand:{position:x([-.337,.652,.235]),semantic:"suggested hand contact on arm"},rightHand:{position:x([.337,.652,.235]),semantic:"suggested hand contact on arm"}},sittingEnvelope:{seatWidth:.6,seatCushionDepth:.56,clearBetweenArms:.57,backRakeDegrees:12,armContactY:x([0,.652,0])[1],usableSeatDepthApprox:.5,semantic:"design clearance only; no anthropometric or accessibility certification"},collision:{type:"compound-box",semantic:"conservative solid proxy; host must exclude chair seat/back solids during its seated pose, and must check the stand-up path; envelope AABB is broad-phase only",boxes:[{name:"seat base",center:x([0,.39,.025]),size:[.72,.18,.64]},{name:"back",center:x([0,.713,-.31]),size:[.716,.58,.2],rotationX:-c},{name:"left arm",center:x([-.342,.627,.048]),size:[.12,.065,.7]},{name:"right arm",center:x([.342,.627,.048]),size:[.12,.065,.7]},...[-1,1].flatMap(w=>[{name:(w<0?"left":"right")+" front leg",center:x([w*.335,.315,.315]),size:[.09,.64,.15]},{name:(w<0?"left":"right")+" rear leg",center:x([w*.344,.185,-.333]),size:[.08,.38,.25]}])],aabb:{min:v,max:y}}};return{batches:p,contract:E}}function xo(n,t,e){const i=new Uint8Array(n*t*4),s=new Uint8Array(n*t*4);for(let r=0;r<t;r++)for(let a=0;a<n;a++){const[o,c,l,u,h]=e(a/n,r/t,a,r),f=(r*n+a)*4;i[f]=Qn(Math.round(o),0,255),i[f+1]=Qn(Math.round(c),0,255),i[f+2]=Qn(Math.round(l),0,255),i[f+3]=255,s[f]=s[f+2]=Qn(Math.round(u),0,255),s[f+1]=Qn(Math.round(h??u),0,255),s[f+3]=255}return{width:n,height:t,color:i,heightData:s}}function T3(){const n=xo(512,1024,(i,s)=>{const r=.028*Math.sin(Be*s)+.009*Math.sin(Be*3*s+.8)+.006*Math.sin(Be*5*s),a=i+r,o=.5+.5*Math.sin(Be*(a*11+.12*Math.sin(Be*s))),c=Math.pow(.5+.5*Math.sin(Be*(a*103+.36*Math.sin(Be*s*2))),22),l=.5+.5*Math.sin(Be*(a*207+.4*Math.cos(Be*s*3))),u=(Ei(i*4,s*4,4)-.5)*3,h=o*3.2-c*3+l*.8+u;return[94+h,62+h*.77,43+h*.58,155+o*5-c*18,177+o*10-c*4]}),t=xo(256,256,(i,s)=>{const r=i+.31,a=(s-.27)*.83,o=Math.hypot(r,a),c=Math.pow(.5+.5*Math.sin(Be*(o*16+.36*Ei(i*5,s*5)+.06*Math.sin(Math.atan2(a,r)*3))),3),l=Math.pow(Ei(i*93,s*89),14),u=(Ei(i*4,s*4)-.5)*3;return[91+c*4-l*7+u,60+c*3-l*5+u*.8,42+c*2-l*4+u*.6,145+c*5-l*12,190+c*8+l*8]}),e=xo(512,512,(i,s,r,a)=>{const o=i*128,c=s*128,l=Math.floor(o),u=Math.floor(c),h=v=>(v+128)%128;let f=1/0,d=1/0;for(let v=-1;v<=1;v++)for(let y=-1;y<=1;y++){const x=l+y,T=u+v,E=.12+.76*Ui(h(x),h(T)),w=.12+.76*Ui(h(x)+8192,h(T)),b=(x+E-o)**2+(T+w-c)**2;b<f?(d=f,f=b):b<d&&(d=b)}const p=gr(Qn((Math.sqrt(d)-Math.sqrt(f))/.22,0,1)),_=Ei(i*256,s*256),m=Ei(i*4,s*4,4),g=(m-.5)*3+(_-.5)*.7-(1-p)*1.5;return[69+g,43+g*.75,30+g*.55,146+p*24+_*3,191+(1-p)*17+m*6]});return{walnut:n,endgrain:t,leather:e}}function A3(n=b0()){const t=[],e=[],i={triangles:0,vertices:0,drawCalls:n.batches.length,byBatch:[]};let s=1/0,r=0,a=0,o=0,c=0;for(const m of n.batches){const g=m.positions.length/3;(m.positions.length!==m.normals.length||m.uvs.length!==g*2)&&t.push(m.name+": attribute lengths disagree");for(const v of[...m.positions,...m.normals,...m.uvs])Number.isFinite(v)||a++;for(let v=0;v<g;v++)r=Math.max(r,Math.abs(Math.hypot(...m.normals.slice(v*3,v*3+3))-1));for(let v=0;v<m.indices.length;v+=3){const y=m.indices.slice(v,v+3);if(y.some(M=>!Number.isInteger(M)||M<0||M>=g)){o++;continue}const[x,T,E]=y.map(M=>m.positions.slice(M*3,M*3+3)),w=un(ae(T,x),ae(E,x)),b=Math.hypot(...w)/2;s=Math.min(s,b),b<1e-12&&t.push(m.name+": degenerate triangle "+v/3);const S=y.reduce((M,A)=>Ee(M,m.normals.slice(A*3,A*3+3)),[0,0,0]);mr(w,S)<-1e-12&&c++}i.triangles+=m.indices.length/3,i.vertices+=g,i.byBatch.push({name:m.name,triangles:m.indices.length/3,vertices:g})}const l=n.batches.find(m=>m.material==="leather");for(const m of l.parts){const g=[];for(let v=m.startTriangle*3;v<(m.startTriangle+m.triangles)*3;v++){const y=l.indices[v],x=l.positions.slice(y*3,y*3+3);m.name==="seat cushion"&&Math.abs(x[0])<.02&&Math.abs(x[2]-(.035+n.contract.buildOffset[2]))<.02&&x[1]>.42&&g.push(l.normals[y*3+1]),m.name==="back cushion"&&Math.abs(x[0])<.02&&Math.abs(x[1]-(.711+n.contract.buildOffset[1]))<.02&&x[2]>-.27+n.contract.buildOffset[2]&&g.push(l.normals[y*3+2])}(!g.length||g.reduce((v,y)=>v+y,0)/g.length<.7)&&t.push(m.name+": cover faces away from sitter")}a&&t.push(a+" nonfinite attributes"),o&&t.push(o+" out-of-range indices"),c&&t.push(c+" triangles disagree with outward vertex normals"),r>1e-6&&t.push("normals not unit length"),i.triangles>2e4&&t.push("triangle budget exceeded"),i.drawCalls>6&&t.push("chair draw-call budget exceeded");const u=(m,g)=>{let v=0;for(;v+=m*g,!(m===1&&g===1);)m=Math.max(1,m>>1),g=Math.max(1,g>>1);return v*4*2},h=u(512,1024)+u(256,256)+u(512,512);h>16*1024*1024&&t.push("texture budget exceeded");const{min:f,max:d,size:p}=n.contract.bounds;Math.abs(f[1])>1e-7&&t.push("feet not on ground"),(Math.abs(f[0]+d[0])>1e-7||Math.abs(f[2]+d[2])>1e-7)&&t.push("root not centred on footprint"),(p[0]>.83||p[0]<.74||p[1]>.995||p[1]<.94||p[2]>.95||p[2]<.79)&&e.push("envelope differs from target; inspect final dimensions");let _=0;for(const m of n.batches)for(let g=0;g<m.positions.length;g+=3){const v=m.positions.slice(g,g+3);n.contract.collision.boxes.some(x=>{const T=ae(v,x.center),E=x.rotationX||0,w=Math.cos(E),b=Math.sin(E);return[T[0],w*T[1]+b*T[2],-b*T[1]+w*T[2]].every((M,A)=>Math.abs(M)<=x.size[A]/2+.001)})||_++}return _&&t.push(_+" vertices outside conservative collision proxy"),{passed:t.length===0,errors:t,warnings:e,counts:i,bounds:n.contract.bounds,textureGPUBytesWithMips:Math.ceil(h),geometryAttributeBytes:i.vertices*8*4+i.triangles*3*2,collisionUncoveredVertices:_,normalCheck:{maxUnitError:r,invertedTriangles:c,minimumTriangleArea:s},verification:"CPU generation and structural checks only; browser GPU integration and physical chair tests are separate"}}function R3(n,{anisotropy:t=4,castShadow:e=!1,receiveShadow:i=!1}={}){if(!(n!=null&&n.BufferGeometry)||!(n!=null&&n.MeshStandardMaterial)||!(n!=null&&n.DataTexture))throw new TypeError("Supply the host Three.js namespace");const s=b0(),r=A3(s);if(!r.passed)throw new Error("Folio structural check failed: "+r.errors.join("; "));const a=T3(),o=[],c=[],l=[],u=new n.Group;u.name="Folio — walnut and umber leather";const h=(p,_=!1)=>{const m=new n.DataTexture(_?p.heightData:p.color,p.width,p.height,n.RGBAFormat,n.UnsignedByteType);return m.name="Folio owned "+(_?"bump":"colour"),m.wrapS=m.wrapT=n.RepeatWrapping,m.minFilter=n.LinearMipmapLinearFilter,m.magFilter=n.LinearFilter,m.generateMipmaps=!0,m.flipY=!1,m.anisotropy=Math.max(1,Math.floor(t)),!_&&n.SRGBColorSpace&&(m.colorSpace=n.SRGBColorSpace),m.needsUpdate=!0,o.push(m),m};let f=!1;try{const p=h(a.walnut),_=h(a.walnut,!0),m=h(a.endgrain),g=h(a.endgrain,!0),v=h(a.leather),y=h(a.leather,!0),x={walnut:{map:p,bumpMap:_,roughnessMap:_,bumpScale:8e-5,roughness:.55,metalness:0},endgrain:{map:m,bumpMap:g,roughnessMap:g,bumpScale:5e-5,roughness:.72,metalness:0},leather:{map:v,bumpMap:y,roughnessMap:y,bumpScale:9e-4,roughness:.92,metalness:0},welt:{map:v,bumpMap:y,roughnessMap:y,bumpScale:45e-5,color:11184810,roughness:.92,metalness:0},thread:{color:8214075,roughness:.74,metalness:0}},T={};for(const[E,w]of Object.entries(x)){const b=new n.MeshStandardMaterial(w);b.name="Folio "+E,T[E]=b,c.push(b)}for(const E of s.batches){const w=new n.BufferGeometry;w.name=E.name,l.push(w),w.setAttribute("position",new n.BufferAttribute(new Float32Array(E.positions),3)),w.setAttribute("normal",new n.BufferAttribute(new Float32Array(E.normals),3)),w.setAttribute("uv",new n.BufferAttribute(new Float32Array(E.uvs),2)),w.setIndex(new n.BufferAttribute(new Uint16Array(E.indices),1)),w.computeBoundingBox(),w.computeBoundingSphere();const b=new n.Mesh(w,T[E.material]);b.name=E.name,b.castShadow=e,b.receiveShadow=i,b.userData.parts=E.parts,u.add(b)}u.userData.folio={version:y0,contract:s.contract,performance:r.counts}}catch(p){throw l.forEach(_=>_.dispose()),c.forEach(_=>_.dispose()),o.forEach(_=>_.dispose()),p}const d=()=>{f||(f=!0,u.removeFromParent(),l.forEach(p=>p.dispose()),c.forEach(p=>p.dispose()),o.forEach(p=>p.dispose()),u.clear())};return{root:u,anchors:s.contract.anchors,bounds:s.contract.bounds,collision:s.contract.collision,contract:s.contract,report:r,dispose:d,get disposed(){return f}}}const vo=(n,t)=>{if(!Array.isArray(n)||n.length!==3||!n.every(Number.isFinite))throw new TypeError(t+" must be a finite [x, y, z] point.");return n.slice()},C3=n=>n*n*n*(10+n*(-15+6*n)),Cl=n=>Math.atan2(Math.sin(n),Math.cos(n));function P3({player:n,camera:t,anchors:e,facingYaw:i,facingPitch:s=n.pitch,canStandAt:r,recoverStanding:a,releaseMovement:o,reducedMotion:c=()=>!1,standingEyeHeight:l=()=>n.eye,onChange:u=()=>{},duration:h=.5}){const f=vo(e.seat,"Seat"),d=vo(e.eye,"Eye"),p=e.stand.map((W,ot)=>vo(W,"Stand "+ot));if(!p.length||!Number.isFinite(i)||!Number.isFinite(s)||!(h>0&&h<=1))throw new TypeError("A facing yaw, bounded duration and at least one stand anchor are required.");if(typeof a!="function"||typeof r!="function")throw new TypeError("Host collision validation and safe standing recovery are required.");let _="walking",m=0,g=null,v=null;const y=[0,0,0],x=[0,0,0];let T=0,E=0,w=0,b=0,S=n.yaw,M=n.pitch,A=!1;const N=W=>{_=W,u(W)},P=()=>t.position.toArray();function I(W,ot){const Ct=P();for(let J=0;J<3;J++)y[J]=Ct[J],x[J]=ot[J];m=0,N(W),c()&&K(h)}function k(){return[...p,...g?[g]:[]].find(W=>r(W))}function B(){n.pos.set(...v),n.smoothY=v[1],n.eyeCur=l(),n.vy=0,o(),A=!1,g=null,N("walking")}function $(){return _!=="walking"?!1:(g=n.pos.toArray(),k()?(o(),n.vy=0,n.pos.set(...f),T=n.yaw,E=Cl(i-T),w=n.pitch,b=s-w,S=n.yaw,M=n.pitch,A=!0,I("settling",d),!0):(g=null,!1))}function H({immediate:W=!1}={}){if(!["settling","seated"].includes(_))return!1;if(o(),A=!1,v=k(),!v)return a(),n.vy=0,o(),g=null,N("walking"),!0;n.pos.set(...v),n.vy=0;const ot=[v[0],v[1]+l(),v[2]];return I("rising",ot),W&&_==="rising"&&K(h),!0}function K(W){if(!["settling","seated","rising"].includes(_))return!1;if(_==="seated")return t.position.set(...d),t.rotation.set(n.pitch,n.yaw,0),!0;if(!Number.isFinite(W)||W<0)return!1;A&&(Math.abs(Cl(n.yaw-S))>1e-6||Math.abs(n.pitch-M)>1e-6)&&(A=!1),m=c()?h:Math.min(h,m+W);const ot=C3(m/h);return t.position.set(y[0]+(x[0]-y[0])*ot,y[1]+(x[1]-y[1])*ot,y[2]+(x[2]-y[2])*ot),A&&(n.yaw=T+E*ot,n.pitch=w+b*ot),S=n.yaw,M=n.pitch,t.rotation.set(n.pitch,n.yaw,0),m===h&&(_==="settling"?(A=!1,N("seated")):B()),!0}function nt(){return _==="rising"?(K(h),!0):H({immediate:!0})}return{get state(){return _},get ownsMovement(){return["settling","seated","rising"].includes(_)},sit:$,stand:H,cancel:nt,update:K,dispose(){_!=="disposed"&&(nt(),o(),N("disposed"))}}}function I3({position:n,yaw:t=0,anchors:e,collision:i,pickBox:s}){const r=u=>Array.isArray(u)&&u.length===3&&u.every(Number.isFinite),a=u=>u&&["x","y","z"].every(h=>Number.isFinite(u[h+"0"])&&Number.isFinite(u[h+"1"])&&u[h+"1"]>u[h+"0"]);if(!r(n)||!Number.isFinite(t)||!r(e==null?void 0:e.seat)||!r(e==null?void 0:e.eye)||!Array.isArray(e==null?void 0:e.stand)||!e.stand.length||!e.stand.every(r)||!Array.isArray(i)||!i.length||!i.every(a)||!a(s))throw new TypeError("Invalid chair interface.");const o=new jt().makeRotationY(t).setPosition(...n),c=u=>new U(...u).applyMatrix4(o).toArray(),l=i.map(u=>{const h=new En(new U(u.x0,u.y0,u.z0),new U(u.x1,u.y1,u.z1)).applyMatrix4(o);return{x0:h.min.x,x1:h.max.x,y0:h.min.y,y1:h.max.y,z0:h.min.z,z1:h.max.z}});return{matrix:o,inverse:o.clone().invert(),solids:l,pickBox:s,facingYaw:t+Math.PI,anchors:{seat:c(e.seat),eye:c(e.eye),stand:e.stand.map(c)}}}function L3({document:n,window:t,canvas:e,player:i,camera:s,chair:r,solids:a,canInteract:o,canStandAt:c,recoverStanding:l,releaseMovement:u,standingEyeHeight:h,toast:f=()=>{}}){const d=n.createElement("button"),p=n.createElement("button");d.className="seat-hint",d.type="button",d.textContent="E · Sit in the reading chair",p.className="seat-stand",p.type="button",p.textContent="Stand up · E / Esc",d.hidden=p.hidden=!0;const _=[],m=new U,g=new U,v=new U;let y=null,x=!1;const T=(A,N,P,I)=>{A.addEventListener(N,P,I),_.push(()=>A.removeEventListener(N,P,I))},E=P3({player:i,camera:s,anchors:r.anchors,facingYaw:r.facingYaw,facingPitch:r.facingPitch,canStandAt:c,recoverStanding:l,releaseMovement:u,standingEyeHeight:h,reducedMotion:()=>{var A;return!!((A=t.matchMedia)!=null&&A.call(t,"(prefers-reduced-motion: reduce)").matches)},onChange:A=>{d.hidden=!0,p.hidden=!["settling","seated","rising"].includes(A),p.disabled=A==="rising"}});n.body.append(d,p);function w(A){if(x||E.ownsMovement||!o())return!1;if(s.updateMatrixWorld(),s.getWorldDirection(m),A&&n.pointerLockElement!==e){const P=e.getBoundingClientRect();if(!P.width||!P.height)return!1;const I=(A.clientX-P.left)/P.width,k=(A.clientY-P.top)/P.height;if(!(I>=0&&I<=1&&k>=0&&k<=1))return!1;m.set(I*2-1,1-k*2,.5).unproject(s).sub(s.position).normalize()}g.copy(s.position).applyMatrix4(r.inverse),v.copy(m).transformDirection(r.inverse);const N=fr(g,v,r.pickBox,2.1);return N===null?!1:!a.some(P=>{const I=fr(s.position,m,P,N);return I!==null&&I+.025<N})}function b(){n.visibilityState==="visible"&&n.hasFocus()&&e.focus({preventScroll:!0})}function S(A){if(!o())return!1;const N=E.ownsMovement,P=N?E.stand():w(A)&&E.sit();return P&&(y=null,b(),f(N?"Standing up.":"Settle in. E or Escape stands up.")),P}T(d,"click",()=>S()),T(p,"click",()=>S()),T(e,"mousedown",A=>{y=A.button===0?{x:A.clientX,y:A.clientY,moved:0,locked:n.pointerLockElement===e}:null}),T(t,"mousemove",A=>{y&&(y.moved+=Math.abs(A.movementX||0)+Math.abs(A.movementY||0))}),T(e,"click",A=>{const N=y;y=null,!(!N||A.button!==0||N.moved>4||Math.hypot(A.clientX-N.x,A.clientY-N.y)>4||N.locked!==(n.pointerLockElement===e)||E.ownsMovement)&&S(A)&&(A.preventDefault(),A.stopImmediatePropagation())}),T(t,"keydown",A=>{if(!(A.defaultPrevented||A.altKey||A.ctrlKey||A.metaKey||Er(A.target))){if(E.ownsMovement&&(A.code==="KeyR"||/^Digit[1-5]$/.test(A.code))){E.cancel();return}if(E.ownsMovement&&["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyC"].includes(A.code)){A.preventDefault(),A.stopImmediatePropagation();return}if(A.code==="Escape"&&E.ownsMovement){A.repeat||(E.state==="rising"?E.cancel():S()),A.preventDefault(),A.stopImmediatePropagation();return}A.code==="KeyE"&&!A.repeat&&S()&&(A.preventDefault(),A.stopImmediatePropagation())}},!0);const M=()=>{y=null,E.cancel(),d.hidden=!0};return T(t,"blur",M),T(t,"popstate",M),T(t,"pagehide",M),T(t,"hashchange",M),T(n,"visibilitychange",()=>{n.visibilityState!=="visible"&&M()}),T(t,"resize",()=>E.update(0)),{get state(){return E.state},get ownsMovement(){return E.ownsMovement},target:w,cancel:M,update(A){E.update(A),d.hidden=E.ownsMovement||!w()},dispose(){if(!x){x=!0,y=null,E.dispose();for(const A of _)A();d.remove(),p.remove()}}}}function D3(n,t){var o,c,l;if(((o=n==null?void 0:n.collision)==null?void 0:o.type)!=="compound-box"||!((l=(c=n.anchors)==null?void 0:c.seatedEye)!=null&&l.forward))throw new TypeError("Expected the current Folio compound-box/anchor contract.");const e=n.collision.boxes.map(u=>{const h=new En(new U(...u.size).multiplyScalar(-.5),new U(...u.size).multiplyScalar(.5));return h.applyMatrix4(new jt().makeRotationX(u.rotationX||0).setPosition(...u.center)),{x0:h.min.x,x1:h.max.x,y0:h.min.y,y1:h.max.y,z0:h.min.z,z1:h.max.z}}),{min:i,max:s}=n.bounds,r=I3({...t,anchors:{seat:n.anchors.seat.position,eye:n.anchors.seatedEye.position,stand:[n.anchors.standUp.position,n.anchors.entry.position]},collision:e,pickBox:{x0:i[0],x1:s[0],y0:.2,y1:s[1],z0:i[2],z1:s[2]}}),a=new U(...n.anchors.seatedEye.forward).transformDirection(r.matrix);return r.facingYaw=Math.atan2(-a.x,-a.z),r.facingPitch=Math.asin(Lu.clamp(a.y,-1,1)),r}const U3=Object.freeze({position:Object.freeze([-7.35,0,4.9]),yaw:-Math.PI/2}),N3=Object.freeze({BufferGeometry:Qt,BufferAttribute:pe,MeshStandardMaterial:Te,DataTexture:Ss,Group:bn,Mesh:Jt,RGBAFormat:Ue,UnsignedByteType:hn,RepeatWrapping:wn,LinearMipmapLinearFilter:He,LinearFilter:Pe,SRGBColorSpace:he});function F3(n,t=U3){let e=R3(N3,{castShadow:!0,receiveShadow:!0});const i=D3(e.contract,t);return e.root.applyMatrix4(i.matrix),n.add(e.root),{chair:i,solids:i.solids,releaseReferences(){e=null}}}function O3(n,t=1.62){const e=n.anchors.stand[0].slice(),i=n.anchors.seat,s=i[0]-e[0],r=i[2]-e[2];return{position:e,yaw:Math.atan2(-s,-r),pitch:Math.atan2(i[1]+.18-e[1]-t,Math.hypot(s,r))}}const De={scene:null,renderer:null,environmentTarget:null,materials:null,cleanup:null};let fa=!1;function S0(){var n;fa||(fa=!0,De.cleanup?De.cleanup():De.scene&&De.renderer?v0({scene:De.scene,renderer:De.renderer,environmentTarget:De.environmentTarget,materials:Object.values(De.materials||{})}):(n=De.renderer)==null||n.dispose())}const ti=w3({document,window,onCancel:S0});window.__libraryLoading=ti;async function B3(){var At;await ti.stage(0,"Preparing library");const n=document.getElementById("c"),t=new qp({canvas:n,antialias:!0,powerPreference:"high-performance"});De.renderer=t;const e=Math.min(window.devicePixelRatio||1,1);let i=e;t.setPixelRatio(i),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=Pl,t.toneMappingExposure=1.05,t.outputColorSpace=he,t.shadowMap.enabled=!0,t.shadowMap.type=pa,t.shadowMap.autoUpdate=!1;const s=new o0;De.scene=s,s.background=new Ht(9075306);const r=new ke(70,window.innerWidth/window.innerHeight,.05,2500);r.rotation.order="YXZ";const a=new sa(t),o=new y2,c=a.fromScene(o,.04);De.environmentTarget=c,s.environment=c.texture,o.dispose(),a.dispose(),s.environmentIntensity=.22,await ti.stage(1,"Building room");const l=ei(20261006),u=J2();De.materials=u;const h=new nm(ei(77)),f=Q2(u,h,l,x0),d=new URLSearchParams(window.location.search).get("jippityStudy")!=="0"?await C0(()=>import("./index-5L12cqxx.js"),__vite__mapDeps([0,1])):null;if(d&&fa)throw Object.assign(new Error("Study loading cancelled"),{name:"AbortError"});const p=d==null?void 0:d.prepareStudy({lib:f,books:h,materials:u,scene:s});f.B.finish(s);const _=h.build(w2(31));s.add(_),p==null||p.attachBooks(_.material.map),s3(s,xl,_l,rm);const m=c3(s,u,go,er),g=F3(s),v=[...f.B.solids,...m.solids,...(p==null?void 0:p.solids)||[]],y=[...v,...g.solids];h.mats.length=h.cols.length=h.vars.length=0,await ti.stage(2,"Adding scenery");const x=new U(-.9,.4,.14).normalize(),T=new v2(16757611,8);T.target.position.set(-2,3,-1),T.position.copy(T.target.position).addScaledVector(x,60),T.castShadow=!0,T.shadow.mapSize.set(4096,4096);const E=T.shadow.camera;E.left=-17,E.right=17,E.top=15,E.bottom=-15,E.near=20,E.far=100,E.updateProjectionMatrix(),T.shadow.bias=-4e-4,T.shadow.normalBias=.025,s.add(T,T.target);const w=new g2(13227775,6964264,.42);s.add(w);const b=new ca(16754792,11,24,1.2);b.position.set(3,3.6,-.8),s.add(b);const S=[];for(const Z of f.lights){const ut=new ca(Z.c,Z.i,Z.d,2);ut.position.copy(Z.p),ut.userData=Z,s.add(ut),S.push(ut)}const M=S3({sunDirection:x});s.add(M.group);const A=x.clone().negate();{const Z=[],ut=[];for(const V of f.windows.slice(0,4))for(let mt=0;mt<4;mt++){const et=V[mt],rt=V[(mt+1)%4],St=et.clone().addScaledVector(A,12),vt=rt.clone().addScaledVector(A,12);for(const[Gt,ne,ce]of[[et,0,0],[rt,0,1],[vt,1,1],[et,0,0],[vt,1,1],[St,1,0]])Z.push(Gt.x,Gt.y,Gt.z),ut.push(ne,ce)}const Pt=new Qt;Pt.setAttribute("position",new Ot(Z,3)),Pt.setAttribute("uv",new Ot(ut,2));const Rt=new Ye({transparent:!0,depthWrite:!1,blending:cr,side:Ge,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float t; varying vec2 vUv; varying vec3 vW;
      void main(){ float along = vUv.x; float across = vUv.y;
        float a = pow(1.0-along, 1.6) * smoothstep(0.0,0.04,along) * smoothstep(0.0,0.25,across) * smoothstep(1.0,0.75,across);
        float n = 0.75 + 0.25*sin(vW.x*1.7 + vW.y*2.3 + t*0.3) * sin(vW.z*1.3 - t*0.2);
        float fadeFloor = smoothstep(0.0, 0.6, vW.y);
        gl_FragColor = vec4(vec3(1.0,0.72,0.42)*a*n*0.11*fadeFloor, 1.0); }`}),kt=new Jt(Pt,Rt);kt.frustumCulled=!1,kt.renderOrder=5,s.add(kt),window.__shafts=Rt}let N;{const Z=ei(9),ut=[],lt=[];for(const kt of f.windows)for(let V=0;V<420;V++){const mt=Z(),et=Z(),rt=kt[0].clone().lerp(kt[1],mt).lerp(kt[3].clone().lerp(kt[2],mt),et).addScaledVector(A,.5+Z()*11);rt.y<.1||rt.y>10||rt.x>6.9||rt.z<-9.9||rt.z>8.9||(ut.push(rt.x,rt.y,rt.z),lt.push(Z()*100))}const Pt=new Qt;Pt.setAttribute("position",new Ot(ut,3)),Pt.setAttribute("phase",new Ot(lt,1)),N=new Ye({transparent:!0,depthWrite:!1,blending:cr,uniforms:{t:{value:0},map:{value:T2()},scale:{value:window.innerHeight*.5}},vertexShader:`uniform float t; uniform float scale; attribute float phase; varying float vA;
      void main(){ vec3 p = position + vec3(sin(t*0.11+phase)*0.25, sin(t*0.07+phase*1.3)*0.3, cos(t*0.09+phase*0.7)*0.25);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        gl_PointSize = clamp(0.018*scale/-mv.z, 0.0, 6.0); vA = 0.55+0.45*sin(t*0.5+phase); }`,fragmentShader:"uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0,0.8,0.55)*a*vA*0.8, 1.0); }"});const Rt=new $p(Pt,N);Rt.frustumCulled=!1,s.add(Rt)}await ti.stage(3,"Preparing view");const P={pos:new U,vy:0,yaw:0,pitch:0,eye:1.62,eyeCur:1.62,smoothY:0,vel:new U,radius:.28,step:.42,height:1.75},I=[{p:[3.4,0,4.3],yaw:.78,pitch:.1,name:"Entrance by the hearth"},{p:[-2,0,-3.7],yaw:1.2,pitch:-.05,name:"Lower shelves, between the stacks"},{p:[-8.2,0,4.9],yaw:1.5,pitch:-.05,name:"Window reading alcove"},{p:[5.6,0,8],yaw:0,pitch:.18,name:"Foot of the staircase"},{p:[1.2,ha.GY,-7.6],yaw:Math.PI-.3,pitch:-.32,name:"Gallery overlook"}];function k(Z){const ut=I[Z];P.pos.set(ut.p[0],ut.p[1],ut.p[2]),P.yaw=ut.yaw,P.pitch=ut.pitch,P.vy=0,P.vel.set(0,0,0),P.smoothY=P.pos.y,X(ut.name)}function B(Z,ut,lt){let Pt=-1/0;const Rt=P.radius*.7;for(const kt of y)Z+Rt<kt.x0||Z-Rt>kt.x1||ut+Rt<kt.z0||ut-Rt>kt.z1||kt.y1<=lt+P.step&&kt.y1>Pt&&(Pt=kt.y1);return Pt}function $(Z,ut,lt,Pt){const Rt=P.radius;if(p!=null&&p.door.blocks(Z,ut,lt,Pt,Rt)||m.door.blocks(Z,ut,lt,Pt,Rt))return!0;for(const kt of y)if(!(Z+Rt<=kt.x0||Z-Rt>=kt.x1||ut+Rt<=kt.z0||ut-Rt>=kt.z1)&&kt.y0<lt+Pt&&kt.y1>lt+P.step)return!0;return!1}const H=new Set;let K=!1,nt=null,W=null,ot=null,Ct=null,J=!1;addEventListener("keydown",Z=>{if(!(J||nt!=null&&nt.isOpen||W!=null&&W.paused||Er(Z.target))&&(H.add(Z.code),!Z.repeat)){if(Z.code==="KeyR"&&k(0),Z.code.startsWith("Digit")){const ut=+Z.code.slice(5)-1;ut>=0&&ut<I.length&&k(ut)}Z.code==="KeyC"&&(K=!K),Z.code==="KeyF"&&F.classList.toggle("show"),Z.code==="KeyH"&&C.classList.toggle("hide"),Z.code==="KeyP"&&(i=i>.8?Math.max(.6,i-.25):e,t.setPixelRatio(i),pt(),X(`Render scale ${Math.round(i*100)}%`)),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(Z.code)&&Z.preventDefault()}}),addEventListener("keyup",Z=>H.delete(Z.code)),addEventListener("blur",()=>H.clear());const at=document.getElementById("overlay"),C=document.getElementById("help"),F=document.getElementById("stats"),O=document.getElementById("toast");let G=0;function X(Z){O.textContent=Z,O.classList.add("show"),G=2.2}function ht(){H.clear(),P.vel.set(0,0,0)}const ft=im({canvas:n,overlay:at,menuButton:document.getElementById("controls-toggle"),player:P,camera:r,toast:X,releaseMovement:ht,isInputBlocked:()=>!!(J||nt!=null&&nt.isOpen||p!=null&&p.isOpen||W!=null&&W.paused),setMenuPaused:Z=>{W==null||W.setPaused("controls",Z),Z&&(ot==null||ot.cancel())}}),Et=new U;nt=r3({legacyFactory:am,camera:r,solids:y,document,window,canvas:n,content:_l,look:ft,releaseMovement:ht,dialog:document.getElementById("reader"),hint:document.getElementById("interaction-hint"),returnFocus:n,canInteract:()=>!J&&!ft.menuOpen&&!(W!=null&&W.paused)&&document.hasFocus(),getTarget:()=>vl(r.position,r.getWorldDirection(Et),xl,y,sm),setPaused:Z=>{W==null||W.setPaused("reading",Z),Z&&(ot==null||ot.cancel()),Z&&(p!=null&&p.isOpen)&&(p.closeNote(),ft.pause())}}),Ct=l3({document,window,canvas:n,content:er,controls:at.querySelector(".card"),readerFooter:document.querySelector(".reader-footer"),canInteract:()=>!J&&!nt.isOpen&&!ft.menuOpen&&!(W!=null&&W.paused)&&document.hasFocus(),getTarget:()=>vl(r.position,r.getWorldDirection(Et),[go],y,go.reach),beforeLeave:dt,useDoor:()=>m.door.use(),getPrompt:()=>m.door.passable?er.prompt:er.openPrompt}),p==null||p.install({document,window,canvas:n,camera:r,player:P,solids:y,look:ft,releaseMovement:ht,controls:at.querySelector(".card"),toast:X,canInteract:()=>!J&&!nt.isOpen&&!ft.menuOpen&&!(W!=null&&W.paused)&&document.hasFocus(),setPaused:Z=>{W==null||W.setPaused("study-note",Z),Z&&(ot==null||ot.cancel())}}),ot=L3({document,window,canvas:n,player:P,camera:r,chair:g.chair,solids:v,canInteract:()=>!J&&!nt.isOpen&&!(p!=null&&p.isOpen)&&!ft.menuOpen&&!(W!=null&&W.paused)&&document.visibilityState==="visible"&&document.hasFocus()&&((ot==null?void 0:ot.ownsMovement)||Math.hypot(P.pos.x-r.position.x,P.pos.z-r.position.z)<.05),canStandAt:([Z,ut,lt])=>Math.abs(B(Z,lt,ut)-ut)<.01&&!$(Z,lt,ut,K?1.15:P.height),recoverStanding:()=>{k(0),gt(0)},releaseMovement:ht,standingEyeHeight:()=>K?1:P.eye,toast:X});const z=document.createElement("button");z.type="button",z.className="seat-find",z.textContent="Find the Folio chair",at.querySelector(".card").append(z);function Vt(){if(J)return;ot.cancel(),ht();const Z=O3(g.chair,K?1:P.eye);P.pos.set(...Z.position),P.smoothY=P.pos.y,P.vy=0,P.eyeCur=K?1:P.eye,P.yaw=Z.yaw,P.pitch=Z.pitch,gt(0),R(),X("Folio at the window alcove. Return to room, then press E to sit.")}z.addEventListener("click",Vt);const zt=new U;function gt(Z){const ut=(H.has("KeyW")||H.has("ArrowUp")?1:0)-(H.has("KeyS")||H.has("ArrowDown")?1:0),lt=(H.has("KeyD")||H.has("ArrowRight")?1:0)-(H.has("KeyA")||H.has("ArrowLeft")?1:0),Pt=(H.has("ShiftLeft")||H.has("ShiftRight")?4.6:2.5)*(K?.55:1),Rt=Math.sin(P.yaw),kt=Math.cos(P.yaw),V=-Rt*ut+kt*lt,mt=-kt*ut-Rt*lt,et=Math.hypot(V,mt)||1,rt=zt.set(V/et*Pt*(ut||lt?1:0),0,mt/et*Pt*(ut||lt?1:0)),St=1-Math.exp(-Z*12);P.vel.lerp(rt,St);const vt=K?1.15:P.height,Gt=P.pos.x+P.vel.x*Z,ne=P.pos.z+P.vel.z*Z;$(Gt,ne,P.pos.y,vt)?$(Gt,P.pos.z,P.pos.y,vt)?$(P.pos.x,ne,P.pos.y,vt)?P.vel.multiplyScalar(.2):(P.pos.z=ne,P.vel.x*=.5):(P.pos.x=Gt,P.vel.z*=.5):(P.pos.x=Gt,P.pos.z=ne);const ce=B(P.pos.x,P.pos.z,P.pos.y);ce>=P.pos.y-P.step&&ce>-1/0&&P.vy<=0?(P.pos.y=ce,P.vy=0):(P.vy-=9.8*Z,P.pos.y+=P.vy*Z,ce>-1/0&&P.pos.y<ce&&(P.pos.y=ce,P.vy=0)),P.pos.y<-10&&k(0),P.smoothY+=(P.pos.y-P.smoothY)*(1-Math.exp(-Z*14)),P.eyeCur+=((K?1:P.eye)-P.eyeCur)*(1-Math.exp(-Z*10)),r.position.set(P.pos.x,P.smoothY+P.eyeCur,P.pos.z),r.rotation.set(P.pitch,P.yaw,0)}function pt(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),N.uniforms.scale.value=window.innerHeight*i*.5}addEventListener("resize",pt),pt();const Lt=new ki({colorWrite:!1}),xt=[];s.traverse(Z=>{Z.material&&(Z.material.transparent||Z.material.isShaderMaterial||Z.isPoints)&&xt.push(Z)}),t.autoClear=!1;let D=!1;function R(){if(t.clear(),D){for(const Z of xt)Z.visible=!1;s.overrideMaterial=Lt,t.render(s,r),s.overrideMaterial=null;for(const Z of xt)Z.visible=!0}t.render(s,r)}const j=[];let it=0,ct=0,st=0;k(0),gt(0),O.classList.remove("show"),t.compile(s,r),s.traverse(Z=>{const ut=Z.material;if(ut){for(const lt of["map","bumpMap"])ut[lt]&&t.initTexture(ut[lt]);ut.uniforms&&ut.uniforms.map&&t.initTexture(ut.uniforms.map.value)}}),t.shadowMap.needsUpdate=!0;const Dt=new U;function bt(Z,ut){const lt=Math.min(ut,.05);st+=lt,Dt.copy(P.pos),p!=null&&p.update(lt,P.pos)&&(t.shadowMap.needsUpdate=!0),m.door.update(lt,P.pos,P.radius),ot!=null&&ot.ownsMovement?ot.update(lt):gt(lt),ct+=lt,ct>=.125&&(ct=0,nt.updateHint(),Ct.updateHint(),ot==null||ot.update(0));for(const Pt of S)Pt.userData.fire&&(Pt.intensity=Pt.userData.i*(.82+.12*Math.sin(st*9.1)+.08*Math.sin(st*23.7+1.3)));if(window.__shafts.uniforms.t.value=st,N.uniforms.t.value=st,R(),ut>0&&ut<.25&&document.visibilityState==="visible"&&j.push(ut*1e3),j.length>240&&j.shift(),it+=ut,it>.5){it=0;const Pt=[...j].sort((mt,et)=>mt-et),Rt=Pt.reduce((mt,et)=>mt+et,0)/Pt.length,kt=Pt[Math.floor(Pt.length*.99)-1]||Rt,V=t.info.render;F.textContent=`${(1e3/Rt).toFixed(0)} fps  avg ${Rt.toFixed(1)} ms  p99 ${kt.toFixed(1)} ms
calls ${V.calls}  tris ${(V.triangles/1e3).toFixed(0)}k  scale ${Math.round(i*100)}%
pos ${P.pos.x.toFixed(1)} ${P.pos.y.toFixed(2)} ${P.pos.z.toFixed(1)}`}G>0&&(G-=lt,G<=0&&O.classList.remove("show")),m.door.crossed(Dt,P.pos,P.radius)&&Ct.leave()}W=o3({tick:bt,request:Z=>window.requestAnimationFrame(Z),cancel:Z=>window.cancelAnimationFrame(Z),now:()=>performance.now()});const Tt=[];function $t(Z,ut,lt){Z.addEventListener(ut,lt),Tt.push(()=>Z.removeEventListener(ut,lt))}function dt(){var Z;if(!J){J=!0,ht(),ft.pause(),W==null||W.setPaused("exit",!0),ot==null||ot.dispose(),z.removeEventListener("click",Vt),z.remove(),Ct==null||Ct.dispose(),p==null||p.dispose(),nt.dispose(),ft.dispose(),W==null||W.dispose();for(const ut of Tt)ut();v0({scene:s,renderer:t,environmentTarget:c,materials:Object.values(u),extraMaterials:[Lt,...m.materials]}),g.releaseReferences(),delete window.__shafts,delete window.__lib,((Z=window.__libraryLoading)==null?void 0:Z.state)==="ready"&&(window.__libraryLoading.dispose(),delete window.__libraryLoading)}}De.cleanup=dt,$t(window,"blur",()=>{ht(),W.setPaused("focus",!0)}),$t(window,"focus",()=>W.setPaused("focus",!1)),$t(document,"visibilitychange",()=>W.setPaused("visibility",document.visibilityState!=="visible")),$t(window,"pagehide",Z=>{ft.pause(),W.setPaused("page",!0),Z.persisted||dt()}),$t(window,"pageshow",()=>{var Z;ft.resume(),W.setPaused("page",!1),W.setPaused("handoff",!!((Z=window.pazneriaRoomHandoff)!=null&&Z.active)),W.setPaused("visibility",document.visibilityState!=="visible"),W.setPaused("focus",!document.hasFocus())}),R(),W.setPaused("visibility",document.visibilityState!=="visible"),W.setPaused("focus",!document.hasFocus()),W.setPaused("handoff",!!((At=window.pazneriaRoomHandoff)!=null&&At.active)),W.start(),window.__lib={P,setView:k,solids:y,renderer:t,scene:s,camera:r,study:p,books:_,drawFrame:R,setPrepass:Z=>D=Z,sim:(Z,ut)=>{Z.forEach(lt=>H.add(lt));for(let lt=0;lt<ut;lt+=1/60)gt(1/60);return Z.forEach(lt=>H.delete(lt)),P.pos.toArray().map(lt=>+lt.toFixed(2))}},ti.ready(()=>{ht(),W.setPaused("handoff",!1)})}B3().catch(n=>{n.name!=="AbortError"&&(console.error("Library initialization failed:",n),ti.fail()),S0()});export{Qt as B,ji as C,Ge as D,Ot as F,bn as G,jt as M,ca as P,We as Q,he as S,U as V,Tn as a,ua as b,Te as c,ki as d,Gn as e,fr as f,nm as g,Er as i,ei as r};
