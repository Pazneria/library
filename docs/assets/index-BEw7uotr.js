(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="170",$l=0,ba=1,Kl=2,Vo=1,Zl=2,hn=3,Cn=0,be=1,Ne=2,An=0,xi=1,Vr=2,Sa=3,Ea=4,Jl=5,Hn=100,Ql=101,t0=102,e0=103,n0=104,i0=200,r0=201,s0=202,o0=203,js=204,$s=205,a0=206,c0=207,l0=208,u0=209,h0=210,f0=211,d0=212,p0=213,m0=214,Ks=0,Zs=1,Js=2,bi=3,Qs=4,to=5,eo=6,no=7,Wo=0,g0=1,_0=2,Rn=0,x0=1,v0=2,y0=3,el=4,M0=5,b0=6,S0=7,nl=300,Si=301,Ei=302,io=303,ro=304,jr=306,Pn=1e3,tn=1001,so=1002,Oe=1003,E0=1004,cr=1005,Ce=1006,rs=1007,He=1008,pn=1009,il=1010,rl=1011,Qi=1012,Xo=1013,Xn=1014,en=1015,ir=1016,qo=1017,Yo=1018,wi=1020,sl=35902,ol=1021,al=1022,Fe=1023,cl=1024,ll=1025,vi=1026,Ti=1027,jo=1028,$o=1029,ul=1030,Ko=1031,Zo=1033,Or=33776,Br=33777,zr=33778,kr=33779,oo=35840,ao=35841,co=35842,lo=35843,uo=36196,ho=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,xo=37812,vo=37813,yo=37814,Mo=37815,bo=37816,So=37817,Eo=37818,wo=37819,To=37820,Ao=37821,Hr=36492,Ro=36494,Co=36495,hl=36283,Po=36284,Io=36285,Lo=36286,w0=3200,T0=3201,Jo=0,A0=1,Qe="",le="srgb",Pi="srgb-linear",$r="linear",ie="srgb",Qn=7680,wa=519,R0=512,C0=513,P0=514,fl=515,I0=516,L0=517,D0=518,U0=519,Wr=35044,Ta="300 es",fn=2e3,Xr=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,Do=180/Math.PI;function rr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function N0(i,t){return(i%t+t)%t}function os(i,t,e){return(1-e)*i+e*t}function Oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,r,s,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=r[0],g=r[3],m=r[6],y=r[1],M=r[4],x=r[7],R=r[2],E=r[5],A=r[8];return s[0]=o*_+a*y+c*R,s[3]=o*g+a*M+c*E,s[6]=o*m+a*x+c*A,s[1]=l*_+u*y+f*R,s[4]=l*g+u*M+f*E,s[7]=l*m+u*x+f*A,s[2]=h*_+d*y+p*R,s[5]=h*g+d*M+p*E,s[8]=h*m+d*x+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*s,d=l*s-o*c,p=e*f+n*h+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=f*_,t[1]=(r*l-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=h*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(as.makeScale(t,e)),this}rotate(t){return this.premultiply(as.makeRotation(-t)),this}translate(t,e){return this.premultiply(as.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const as=new Xt;function dl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function F0(){const i=tr("canvas");return i.style.display="block",i}const Aa={};function Yi(i){i in Aa||(Aa[i]=!0,console.warn(i))}function O0(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function B0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function z0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=dn(i.r),i.g=dn(i.g),i.b=dn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qe?$r:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ra=[.64,.33,.3,.6,.15,.06],Ca=[.2126,.7152,.0722],Pa=[.3127,.329],Ia=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),La=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[Pi]:{primaries:Ra,whitePoint:Pa,transfer:$r,toXYZ:Ia,fromXYZ:La,luminanceCoefficients:Ca,workingColorSpaceConfig:{unpackColorSpace:le},outputColorSpaceConfig:{drawingBufferColorSpace:le}},[le]:{primaries:Ra,whitePoint:Pa,transfer:ie,toXYZ:Ia,fromXYZ:La,luminanceCoefficients:Ca,outputColorSpaceConfig:{drawingBufferColorSpace:le}}});let ti;class k0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=tr("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=dn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let H0=0;class pl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cs(r[o].image)):s.push(cs(r[o]))}else s=cs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function cs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?k0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G0=0;class _e extends Ii{constructor(t=_e.DEFAULT_IMAGE,e=_e.DEFAULT_MAPPING,n=tn,r=tn,s=Ce,o=He,a=Fe,c=pn,l=_e.DEFAULT_ANISOTROPY,u=Qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=rr(),this.name="",this.source=new pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pn:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pn:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_e.DEFAULT_IMAGE=null;_e.DEFAULT_MAPPING=nl;_e.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,r=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(d+1)/2,R=(m+1)/2,E=(u+h)/4,A=(f+_)/4,S=(p+g)/4;return M>x&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=A/n):x>R?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=S/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=A/s,r=S/s),this.set(n,r,s,e),this}let y=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V0 extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _e(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends V0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ml extends _e{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class W0 extends _e{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Be{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(f!==_||c!==h||l!==d||u!==p){let g=1-a;const m=c*h+l*d+u*p+f*_,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const R=Math.sqrt(M),E=Math.atan2(R,m*y);g=Math.sin(g*E)/R,a=Math.sin(a*E)/R}const x=a*y;if(c=c*g+h*x,l=l*g+d*x,u=u*g+p*x,f=f*g+_*x,g===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=R,l*=R,u*=R,f*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+u*f+c*d-l*h,t[e+1]=c*p+u*h+l*f-a*d,t[e+2]=l*p+u*d+a*h-c*f,t[e+3]=u*p-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),f=a(s/2),h=c(n/2),d=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f+h*d*p;break;case"YZX":this._x=h*u*f+l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f-h*d*p;break;case"XZY":this._x=h*u*f-l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f+h*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Da.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Da.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ls.copy(this).projectOnVector(t),this.sub(ls)}reflect(t){return this.sub(ls.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ls=new D,Da=new Be;class $n{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(s,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),ur.subVectors(this.max,Bi),ei.subVectors(t.a,Bi),ni.subVectors(t.b,Bi),ii.subVectors(t.c,Bi),yn.subVectors(ni,ei),Mn.subVectors(ii,ni),Dn.subVectors(ei,ii);let e=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-Dn.z,Dn.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,Dn.z,0,-Dn.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-Dn.y,Dn.x,0];return!us(e,ei,ni,ii,ur)||(e=[1,0,0,0,1,0,0,0,1],!us(e,ei,ni,ii,ur))?!1:(hr.crossVectors(yn,Mn),e=[hr.x,hr.y,hr.z],us(e,ei,ni,ii,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new D,new D,new D,new D,new D,new D,new D,new D],Xe=new D,lr=new $n,ei=new D,ni=new D,ii=new D,yn=new D,Mn=new D,Dn=new D,Bi=new D,ur=new D,hr=new D,Un=new D;function us(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Un.fromArray(i,s);const a=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=t.dot(Un),l=e.dot(Un),u=n.dot(Un);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const X0=new $n,zi=new D,hs=new D;class Li{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):X0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);const e=zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(zi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(hs)),this.expandByPoint(zi.copy(t.center).sub(hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new D,fs=new D,fr=new D,bn=new D,ds=new D,dr=new D,ps=new D;class gl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){fs.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(fs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=bn.dot(this.direction),c=-bn.dot(fr),l=bn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,p;if(u>0)if(f=o*c-a,h=o*a-c,p=s*u,f>=0)if(h>=-p)if(h<=p){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-p?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=p?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fs).addScaledVector(fr,h),d}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),r=an.dot(an)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,r,s){ds.subVectors(e,t),dr.subVectors(n,t),ps.crossVectors(ds,dr);let o=this.direction.dot(ps),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,t);const c=a*this.direction.dot(dr.crossVectors(bn,dr));if(c<0)return null;const l=a*this.direction.dot(ds.cross(bn));if(l<0||c+l>o)return null;const u=-a*bn.dot(ps);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,r,s,o,a,c,l,u,f,h,d,p,_,g){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,f,h,d,p,_,g)}set(t,e,n,r,s,o,a,c,l,u,f,h,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ri.setFromMatrixColumn(t,0).length(),s=1/ri.setFromMatrixColumn(t,1).length(),o=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,p=a*u,_=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+p*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,p=l*u,_=l*f;e[0]=h+_*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,p=l*u,_=l*f;e[0]=h-_*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,p=a*u,_=a*f;e[0]=c*u,e[4]=p*l-d,e[8]=h*l+_,e[1]=c*f,e[5]=_*l+h,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,p=a*c,_=a*l;e[0]=c*u,e[4]=_-h*f,e[8]=p*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+p,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*c,d=o*l,p=a*c,_=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(q0,t,Y0)}lookAt(t,e,n){const r=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Sn.crossVectors(n,Ie),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Sn.crossVectors(n,Ie)),Sn.normalize(),pr.crossVectors(Ie,Sn),r[0]=Sn.x,r[4]=pr.x,r[8]=Ie.x,r[1]=Sn.y,r[5]=pr.y,r[9]=Ie.y,r[2]=Sn.z,r[6]=pr.z,r[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],M=n[7],x=n[11],R=n[15],E=r[0],A=r[4],S=r[8],v=r[12],b=r[1],P=r[5],F=r[9],O=r[13],N=r[2],Y=r[6],k=r[10],j=r[14],$=r[3],J=r[7],ct=r[11],nt=r[15];return s[0]=o*E+a*b+c*N+l*$,s[4]=o*A+a*P+c*Y+l*J,s[8]=o*S+a*F+c*k+l*ct,s[12]=o*v+a*O+c*j+l*nt,s[1]=u*E+f*b+h*N+d*$,s[5]=u*A+f*P+h*Y+d*J,s[9]=u*S+f*F+h*k+d*ct,s[13]=u*v+f*O+h*j+d*nt,s[2]=p*E+_*b+g*N+m*$,s[6]=p*A+_*P+g*Y+m*J,s[10]=p*S+_*F+g*k+m*ct,s[14]=p*v+_*O+g*j+m*nt,s[3]=y*E+M*b+x*N+R*$,s[7]=y*A+M*P+x*Y+R*J,s[11]=y*S+M*F+x*k+R*ct,s[15]=y*v+M*O+x*j+R*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+s*c*f-r*l*f-s*a*h+n*l*h+r*a*d-n*c*d)+_*(+e*c*d-e*l*h+s*o*h-r*o*d+r*l*u-s*c*u)+g*(+e*l*f-e*a*d-s*o*f+n*o*d+s*a*u-n*l*u)+m*(-r*a*u-e*c*f+e*a*h+r*o*f-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],y=f*g*l-_*h*l+_*c*d-a*g*d-f*c*m+a*h*m,M=p*h*l-u*g*l-p*c*d+o*g*d+u*c*m-o*h*m,x=u*_*l-p*f*l+p*a*d-o*_*d-u*a*m+o*f*m,R=p*f*c-u*_*c-p*a*h+o*_*h+u*a*g-o*f*g,E=e*y+n*M+r*x+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=y*A,t[1]=(_*h*s-f*g*s-_*r*d+n*g*d+f*r*m-n*h*m)*A,t[2]=(a*g*s-_*c*s+_*r*l-n*g*l-a*r*m+n*c*m)*A,t[3]=(f*c*s-a*h*s-f*r*l+n*h*l+a*r*d-n*c*d)*A,t[4]=M*A,t[5]=(u*g*s-p*h*s+p*r*d-e*g*d-u*r*m+e*h*m)*A,t[6]=(p*c*s-o*g*s-p*r*l+e*g*l+o*r*m-e*c*m)*A,t[7]=(o*h*s-u*c*s+u*r*l-e*h*l-o*r*d+e*c*d)*A,t[8]=x*A,t[9]=(p*f*s-u*_*s-p*n*d+e*_*d+u*n*m-e*f*m)*A,t[10]=(o*_*s-p*a*s+p*n*l-e*_*l-o*n*m+e*a*m)*A,t[11]=(u*a*s-o*f*s-u*n*l+e*f*l+o*n*d-e*a*d)*A,t[12]=R*A,t[13]=(u*_*r-p*f*r+p*n*h-e*_*h-u*n*g+e*f*g)*A,t[14]=(p*a*r-o*_*r-p*n*c+e*_*c+o*n*g-e*a*g)*A,t[15]=(o*f*r-u*a*r+u*n*c-e*f*c-o*n*h+e*a*h)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,h=s*l,d=s*u,p=s*f,_=o*u,g=o*f,m=a*f,y=c*l,M=c*u,x=c*f,R=n.x,E=n.y,A=n.z;return r[0]=(1-(_+m))*R,r[1]=(d+x)*R,r[2]=(p-M)*R,r[3]=0,r[4]=(d-x)*E,r[5]=(1-(h+m))*E,r[6]=(g+y)*E,r[7]=0,r[8]=(p+M)*A,r[9]=(g-y)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ri.set(r[0],r[1],r[2]).length();const o=ri.set(r[4],r[5],r[6]).length(),a=ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],qe.copy(this);const l=1/s,u=1/o,f=1/a;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=u,qe.elements[5]*=u,qe.elements[6]*=u,qe.elements[8]*=f,qe.elements[9]*=f,qe.elements[10]*=f,e.setFromRotationMatrix(qe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=fn){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),h=(n+r)/(n-r);let d,p;if(a===fn)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===Xr)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=fn){const c=this.elements,l=1/(e-t),u=1/(n-r),f=1/(o-s),h=(e+t)*l,d=(n+r)*u;let p,_;if(a===fn)p=(o+s)*f,_=-2*f;else if(a===Xr)p=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new D,qe=new jt,q0=new D(0,0,0),Y0=new D(1,1,1),Sn=new D,pr=new D,Ie=new D,Ua=new jt,Na=new Be;class we{constructor(t=0,e=0,n=0,r=we.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Na.setFromEuler(this),this.setFromQuaternion(Na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}we.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let j0=0;const Fa=new D,si=new Be,cn=new jt,mr=new D,ki=new D,$0=new D,K0=new Be,Oa=new D(1,0,0),Ba=new D(0,1,0),za=new D(0,0,1),ka={type:"added"},Z0={type:"removed"},oi={type:"childadded",child:null},ms={type:"childremoved",child:null};class pe extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new D,e=new we,n=new Be,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Xt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(Oa,t)}rotateY(t){return this.rotateOnAxis(Ba,t)}rotateZ(t){return this.rotateOnAxis(za,t)}translateOnAxis(t,e){return Fa.copy(t).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oa,t)}translateY(t){return this.translateOnAxis(Ba,t)}translateZ(t){return this.translateOnAxis(za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(ki,mr,this.up):cn.lookAt(mr,ki,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),si.setFromRotationMatrix(cn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ka),oi.child=t,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Z0),ms.child=t,this.dispatchEvent(ms),ms.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ka),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,$0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,K0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}pe.DEFAULT_UP=new D(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new D,ln=new D,gs=new D,un=new D,ai=new D,ci=new D,Ha=new D,_s=new D,xs=new D,vs=new D,ys=new re,Ms=new re,bs=new re;class je{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ye.subVectors(t,e),r.cross(Ye);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ye.subVectors(r,e),ln.subVectors(n,e),gs.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(ln),c=Ye.dot(gs),l=ln.dot(ln),u=ln.dot(gs),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,p=(o*u-a*c)*h;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,un.x),c.addScaledVector(o,un.y),c.addScaledVector(a,un.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return ys.setScalar(0),Ms.setScalar(0),bs.setScalar(0),ys.fromBufferAttribute(t,e),Ms.fromBufferAttribute(t,n),bs.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ys,s.x),o.addScaledVector(Ms,s.y),o.addScaledVector(bs,s.z),o}static isFrontFacing(t,e,n,r){return Ye.subVectors(n,e),ln.subVectors(t,e),Ye.cross(ln).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Ye.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return je.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;ai.subVectors(r,n),ci.subVectors(s,n),_s.subVectors(t,n);const c=ai.dot(_s),l=ci.dot(_s);if(c<=0&&l<=0)return e.copy(n);xs.subVectors(t,r);const u=ai.dot(xs),f=ci.dot(xs);if(u>=0&&f<=u)return e.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ai,o);vs.subVectors(t,s);const d=ai.dot(vs),p=ci.dot(vs);if(p>=0&&d<=p)return e.copy(s);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(ci,a);const g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return Ha.subVectors(s,r),a=(f-u)/(f-u+(d-p)),e.copy(r).addScaledVector(Ha,a);const m=1/(g+_+h);return o=_*m,a=h*m,e.copy(n).addScaledVector(ai,o).addScaledVector(ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Ss(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Kt.workingColorSpace){if(t=N0(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ss(o,s,t+1/3),this.g=Ss(o,s,t),this.b=Ss(o,s,t-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(t,e=le){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=le){const n=xl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=le){return Kt.fromWorkingColorSpace(Me.copy(this),t),Math.round(ge(Me.r*255,0,255))*65536+Math.round(ge(Me.g*255,0,255))*256+Math.round(ge(Me.b*255,0,255))}getHexString(t=le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,r=Me.g,s=Me.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=le){Kt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,r=Me.b;return t!==le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(gr);const n=os(En.h,gr.h,e),r=os(En.s,gr.s,e),s=os(En.l,gr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new zt;zt.NAMES=xl;let J0=0;class Kn extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=rr(),this.name="",this.blending=xi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=$s,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==js&&(n.blendSrc=this.blendSrc),this.blendDst!==$s&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ai extends Kn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new we,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new D,_r=new Ct;class me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wr,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wr&&(t.usage=this.usage),t}}class vl extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yl extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ft extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Q0=0;const ke=new jt,Es=new pe,li=new D,Le=new $n,Hi=new $n,de=new D;class Qt extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dl(t)?yl:vl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Es.lookAt(t),Es.updateMatrix(),this.applyMatrix4(Es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Le.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(Le.min,Hi.min),Le.expandByPoint(de),de.addVectors(Le.max,Hi.max),Le.expandByPoint(de)):(Le.expandByPoint(Hi.min),Le.expandByPoint(Hi.max))}Le.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)de.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(de));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)de.fromBufferAttribute(a,l),c&&(li.fromBufferAttribute(t,l),de.add(li)),r=Math.max(r,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new D,c[S]=new D;const l=new D,u=new D,f=new D,h=new Ct,d=new Ct,p=new Ct,_=new D,g=new D;function m(S,v,b){l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),f.fromBufferAttribute(n,b),h.fromBufferAttribute(s,S),d.fromBufferAttribute(s,v),p.fromBufferAttribute(s,b),u.sub(l),f.sub(l),d.sub(h),p.sub(h);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(P),a[S].add(_),a[v].add(_),a[b].add(_),c[S].add(g),c[v].add(g),c[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let S=0,v=y.length;S<v;++S){const b=y[S],P=b.start,F=b.count;for(let O=P,N=P+F;O<N;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new D,x=new D,R=new D,E=new D;function A(S){R.fromBufferAttribute(r,S),E.copy(R);const v=a[S];M.copy(v),M.sub(R.multiplyScalar(R.dot(v))).normalize(),x.crossVectors(E,v);const P=x.dot(c[S])<0?-1:1;o.setXYZW(S,M.x,M.y,M.z,P)}for(let S=0,v=y.length;S<v;++S){const b=y[S],P=b.start,F=b.count;for(let O=P,N=P+F;O<N;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,u=new D,f=new D;if(t)for(let h=0,d=t.count;h<d;h+=3){const p=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let m=0;m<u;m++)h[p++]=l[d++]}return new me(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new jt,Nn=new gl,xr=new Li,Va=new D,vr=new D,yr=new D,Mr=new D,ws=new D,br=new D,Wa=new D,Sr=new D;class Jt extends pe{constructor(t=new Qt,e=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){br.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(ws.fromBufferAttribute(f,t),o?br.addScaledVector(ws,u):br.addScaledVector(ws.sub(e),u))}e.add(br)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),Nn.copy(t.ray).recast(t.near),!(xr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(xr,Va)===null||Nn.origin.distanceToSquared(Va)>(t.far-t.near)**2))&&(Ga.copy(s).invert(),Nn.copy(t.ray).applyMatrix4(Ga),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,R=M;x<R;x+=3){const E=a.getX(x),A=a.getX(x+1),S=a.getX(x+2);r=Er(this,m,t,n,l,u,f,E,A,S),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const y=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);r=Er(this,o,t,n,l,u,f,y,M,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,R=M;x<R;x+=3){const E=x,A=x+1,S=x+2;r=Er(this,m,t,n,l,u,f,E,A,S),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const y=g,M=g+1,x=g+2;r=Er(this,o,t,n,l,u,f,y,M,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function tu(i,t,e,n,r,s,o,a){let c;if(t.side===be?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Cn,a),c===null)return null;Sr.copy(a),Sr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Sr);return l<e.near||l>e.far?null:{distance:l,point:Sr.clone(),object:i}}function Er(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,vr),i.getVertexPosition(c,yr),i.getVertexPosition(l,Mr);const u=tu(i,t,e,n,vr,yr,Mr,Wa);if(u){const f=new D;je.getBarycoord(Wa,vr,yr,Mr,f),r&&(u.uv=je.getInterpolatedAttribute(r,a,c,l,f,new Ct)),s&&(u.uv1=je.getInterpolatedAttribute(s,a,c,l,f,new Ct)),o&&(u.normal=je.getInterpolatedAttribute(o,a,c,l,f,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new D,materialIndex:0};je.getNormal(vr,yr,Mr,h.normal),u.face=h,u.barycoord=f}return u}class mn extends Qt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function p(_,g,m,y,M,x,R,E,A,S,v){const b=x/A,P=R/S,F=x/2,O=R/2,N=E/2,Y=A+1,k=S+1;let j=0,$=0;const J=new D;for(let ct=0;ct<k;ct++){const nt=ct*P-O;for(let Tt=0;Tt<Y;Tt++){const Bt=Tt*b-F;J[_]=Bt*y,J[g]=nt*M,J[m]=N,l.push(J.x,J.y,J.z),J[_]=0,J[g]=0,J[m]=E>0?1:-1,u.push(J.x,J.y,J.z),f.push(Tt/A),f.push(1-ct/S),j+=1}}for(let ct=0;ct<S;ct++)for(let nt=0;nt<A;nt++){const Tt=h+nt+Y*ct,Bt=h+nt+Y*(ct+1),Q=h+(nt+1)+Y*(ct+1),lt=h+(nt+1)+Y*ct;c.push(Tt,Bt,lt),c.push(Bt,Q,lt),$+=6}a.addGroup(d,$,v),d+=$,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Se(i){const t={};for(let e=0;e<i.length;e++){const n=Ri(i[e]);for(const r in n)t[r]=n[r]}return t}function eu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ml(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const nu={clone:Ri,merge:Se};var iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends Kn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iu,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=eu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bl extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new D,Xa=new Ct,qa=new Ct;class Ue extends bl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,Xa,qa),e.subVectors(qa,Xa)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ss*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,hi=1;class su extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ue(ui,hi,t,e);r.layers=this.layers,this.add(r);const s=new Ue(ui,hi,t,e);s.layers=this.layers,this.add(s);const o=new Ue(ui,hi,t,e);o.layers=this.layers,this.add(o);const a=new Ue(ui,hi,t,e);a.layers=this.layers,this.add(a);const c=new Ue(ui,hi,t,e);c.layers=this.layers,this.add(c);const l=new Ue(ui,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Sl extends _e{constructor(t,e,n,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ou extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Sl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mn(5,5,5),s=new Ge({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:An});s.uniforms.tEquirect.value=e;const o=new Jt(r,s),a=e.minFilter;return e.minFilter===He&&(e.minFilter=Ce),new su(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Ts=new D,au=new D,cu=new Xt;class zn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ts.subVectors(n,e).cross(au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ts),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cu.getNormalMatrix(t),r=this.coplanarPoint(Ts).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Li,wr=new D;class Qo{constructor(t=new zn,e=new zn,n=new zn,r=new zn,s=new zn,o=new zn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],d=r[8],p=r[9],_=r[10],g=r[11],m=r[12],y=r[13],M=r[14],x=r[15];if(n[0].setComponents(c-s,h-l,g-d,x-m).normalize(),n[1].setComponents(c+s,h+l,g+d,x+m).normalize(),n[2].setComponents(c+o,h+u,g+p,x+y).normalize(),n[3].setComponents(c-o,h-u,g-p,x-y).normalize(),n[4].setComponents(c-a,h-f,g-_,x-M).normalize(),e===fn)n[5].setComponents(c+a,h+f,g+_,x+M).normalize();else if(e===Xr)n[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(wr.x=r.normal.x>0?t.max.x:t.min.x,wr.y=r.normal.y>0?t.max.y:t.min.y,wr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function El(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function lu(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Yn extends Qt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,f=t/a,h=e/c,d=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const y=m*h-o;for(let M=0;M<l;M++){const x=M*f-s;p.push(x,-y,0),_.push(0,0,1),g.push(M/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const M=y+l*m,x=y+l*(m+1),R=y+1+l*(m+1),E=y+1+l*m;d.push(M,x,E),d.push(x,R,E)}this.setIndex(d),this.setAttribute("position",new Ft(p,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.width,t.height,t.widthSegments,t.heightSegments)}}var uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
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
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gu=`#ifdef USE_AOMAP
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
#endif`,_u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xu=`#ifdef USE_BATCHING
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
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Su=`#ifdef USE_IRIDESCENCE
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
#endif`,Eu=`#ifdef USE_BUMPMAP
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
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Du=`#define PI 3.141592653589793
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
} // validated`,Uu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nu=`vec3 transformedNormal = objectNormal;
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
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zu=`#ifdef USE_GRADIENTMAP
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
}`,Ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
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
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
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
#endif`,c1=`struct PhysicalMaterial {
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
}`,l1=`
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
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
#endif`,h1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v1=`#if defined( USE_POINTS_UV )
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
#endif`,y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
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
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L1=`#ifdef USE_NORMALMAP
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
#endif`,D1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j1=`float getShadowMask() {
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
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,Q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,th=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ih=`#ifdef USE_TRANSMISSION
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
#endif`,rh=`#ifdef USE_TRANSMISSION
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
#endif`,sh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ah=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ch=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uh=`uniform sampler2D t2D;
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
}`,hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ph=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mh=`#include <common>
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
}`,gh=`#if DEPTH_PACKING == 3200
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
}`,_h=`#define DISTANCE
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
}`,xh=`#define DISTANCE
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
}`,vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mh=`uniform float scale;
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
}`,bh=`uniform vec3 diffuse;
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
}`,Sh=`#include <common>
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
}`,Eh=`uniform vec3 diffuse;
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
}`,wh=`#define LAMBERT
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
}`,Th=`#define LAMBERT
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
}`,Ah=`#define MATCAP
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
}`,Rh=`#define MATCAP
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
}`,Ch=`#define NORMAL
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
}`,Ph=`#define NORMAL
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
}`,Ih=`#define PHONG
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
}`,Lh=`#define PHONG
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
}`,Dh=`#define STANDARD
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
}`,Uh=`#define STANDARD
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
}`,Nh=`#define TOON
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
}`,Fh=`#define TOON
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
}`,Oh=`uniform float size;
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
}`,Bh=`uniform vec3 diffuse;
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
}`,zh=`#include <common>
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
}`,kh=`uniform vec3 color;
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
}`,Hh=`uniform float rotation;
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
}`,Gh=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:uu,alphahash_pars_fragment:hu,alphamap_fragment:fu,alphamap_pars_fragment:du,alphatest_fragment:pu,alphatest_pars_fragment:mu,aomap_fragment:gu,aomap_pars_fragment:_u,batching_pars_vertex:xu,batching_vertex:vu,begin_vertex:yu,beginnormal_vertex:Mu,bsdfs:bu,iridescence_fragment:Su,bumpmap_pars_fragment:Eu,clipping_planes_fragment:wu,clipping_planes_pars_fragment:Tu,clipping_planes_pars_vertex:Au,clipping_planes_vertex:Ru,color_fragment:Cu,color_pars_fragment:Pu,color_pars_vertex:Iu,color_vertex:Lu,common:Du,cube_uv_reflection_fragment:Uu,defaultnormal_vertex:Nu,displacementmap_pars_vertex:Fu,displacementmap_vertex:Ou,emissivemap_fragment:Bu,emissivemap_pars_fragment:zu,colorspace_fragment:ku,colorspace_pars_fragment:Hu,envmap_fragment:Gu,envmap_common_pars_fragment:Vu,envmap_pars_fragment:Wu,envmap_pars_vertex:Xu,envmap_physical_pars_fragment:n1,envmap_vertex:qu,fog_vertex:Yu,fog_pars_vertex:ju,fog_fragment:$u,fog_pars_fragment:Ku,gradientmap_pars_fragment:Zu,lightmap_pars_fragment:Ju,lights_lambert_fragment:Qu,lights_lambert_pars_fragment:t1,lights_pars_begin:e1,lights_toon_fragment:i1,lights_toon_pars_fragment:r1,lights_phong_fragment:s1,lights_phong_pars_fragment:o1,lights_physical_fragment:a1,lights_physical_pars_fragment:c1,lights_fragment_begin:l1,lights_fragment_maps:u1,lights_fragment_end:h1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:_1,map_particle_fragment:x1,map_particle_pars_fragment:v1,metalnessmap_fragment:y1,metalnessmap_pars_fragment:M1,morphinstance_vertex:b1,morphcolor_vertex:S1,morphnormal_vertex:E1,morphtarget_pars_vertex:w1,morphtarget_vertex:T1,normal_fragment_begin:A1,normal_fragment_maps:R1,normal_pars_fragment:C1,normal_pars_vertex:P1,normal_vertex:I1,normalmap_pars_fragment:L1,clearcoat_normal_fragment_begin:D1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:N1,iridescence_pars_fragment:F1,opaque_fragment:O1,packing:B1,premultiplied_alpha_fragment:z1,project_vertex:k1,dithering_fragment:H1,dithering_pars_fragment:G1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:W1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:q1,shadowmap_vertex:Y1,shadowmask_pars_fragment:j1,skinbase_vertex:$1,skinning_pars_vertex:K1,skinning_vertex:Z1,skinnormal_vertex:J1,specularmap_fragment:Q1,specularmap_pars_fragment:th,tonemapping_fragment:eh,tonemapping_pars_fragment:nh,transmission_fragment:ih,transmission_pars_fragment:rh,uv_pars_fragment:sh,uv_pars_vertex:oh,uv_vertex:ah,worldpos_vertex:ch,background_vert:lh,background_frag:uh,backgroundCube_vert:hh,backgroundCube_frag:fh,cube_vert:dh,cube_frag:ph,depth_vert:mh,depth_frag:gh,distanceRGBA_vert:_h,distanceRGBA_frag:xh,equirect_vert:vh,equirect_frag:yh,linedashed_vert:Mh,linedashed_frag:bh,meshbasic_vert:Sh,meshbasic_frag:Eh,meshlambert_vert:wh,meshlambert_frag:Th,meshmatcap_vert:Ah,meshmatcap_frag:Rh,meshnormal_vert:Ch,meshnormal_frag:Ph,meshphong_vert:Ih,meshphong_frag:Lh,meshphysical_vert:Dh,meshphysical_frag:Uh,meshtoon_vert:Nh,meshtoon_frag:Fh,points_vert:Oh,points_frag:Bh,shadow_vert:zh,shadow_frag:kh,sprite_vert:Hh,sprite_frag:Gh},Mt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Je={basic:{uniforms:Se([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Se([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new zt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Se([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Se([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Se([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new zt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Se([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Se([Mt.points,Mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Se([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Se([Mt.common,Mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Se([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Se([Mt.sprite,Mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Se([Mt.common,Mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Se([Mt.lights,Mt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Je.physical={uniforms:Se([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Tr={r:0,b:0,g:0},On=new we,Vh=new jt;function Wh(i,t,e,n,r,s,o){const a=new zt(0);let c=s===!0?0:1,l,u,f=null,h=0,d=null;function p(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1;const x=p(y);x===null?m(a,c):x&&x.isColor&&(m(x,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,M){const x=p(M);x&&(x.isCubeTexture||x.mapping===jr)?(u===void 0&&(u=new Jt(new mn(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Ri(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),On.copy(M.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vh.makeRotationFromEuler(On)),u.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ie,(f!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Jt(new Yn(2,2),new Ge({name:"BackgroundMaterial",uniforms:Ri(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(Tr,Ml(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:_,addToRenderList:g}}function Xh(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(b,P,F,O,N){let Y=!1;const k=f(O,F,P);s!==k&&(s=k,l(s.object)),Y=d(b,O,F,N),Y&&p(b,O,F,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(b,P,F,O),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,P,F){const O=F.wireframe===!0;let N=n[b.id];N===void 0&&(N={},n[b.id]=N);let Y=N[P.id];Y===void 0&&(Y={},N[P.id]=Y);let k=Y[O];return k===void 0&&(k=h(c()),Y[O]=k),k}function h(b){const P=[],F=[],O=[];for(let N=0;N<e;N++)P[N]=0,F[N]=0,O[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:b,attributes:{},index:null}}function d(b,P,F,O){const N=s.attributes,Y=P.attributes;let k=0;const j=F.getAttributes();for(const $ in j)if(j[$].location>=0){const ct=N[$];let nt=Y[$];if(nt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),ct===void 0||ct.attribute!==nt||nt&&ct.data!==nt.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function p(b,P,F,O){const N={},Y=P.attributes;let k=0;const j=F.getAttributes();for(const $ in j)if(j[$].location>=0){let ct=Y[$];ct===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor));const nt={};nt.attribute=ct,ct&&ct.data&&(nt.data=ct.data),N[$]=nt,k++}s.attributes=N,s.attributesNum=k,s.index=O}function _(){const b=s.newAttributes;for(let P=0,F=b.length;P<F;P++)b[P]=0}function g(b){m(b,0)}function m(b,P){const F=s.newAttributes,O=s.enabledAttributes,N=s.attributeDivisors;F[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),N[b]!==P&&(i.vertexAttribDivisor(b,P),N[b]=P)}function y(){const b=s.newAttributes,P=s.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==b[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function M(b,P,F,O,N,Y,k){k===!0?i.vertexAttribIPointer(b,P,F,N,Y):i.vertexAttribPointer(b,P,F,O,N,Y)}function x(b,P,F,O){_();const N=O.attributes,Y=F.getAttributes(),k=P.defaultAttributeValues;for(const j in Y){const $=Y[j];if($.location>=0){let J=N[j];if(J===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),J!==void 0){const ct=J.normalized,nt=J.itemSize,Tt=t.get(J);if(Tt===void 0)continue;const Bt=Tt.buffer,Q=Tt.type,lt=Tt.bytesPerElement,T=Q===i.INT||Q===i.UNSIGNED_INT||J.gpuType===Xo;if(J.isInterleavedBufferAttribute){const L=J.data,U=L.stride,z=J.offset;if(L.isInstancedInterleavedBuffer){for(let V=0;V<$.locationSize;V++)m($.location+V,L.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let V=0;V<$.locationSize;V++)g($.location+V);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let V=0;V<$.locationSize;V++)M($.location+V,nt/$.locationSize,Q,ct,U*lt,(z+nt/$.locationSize*V)*lt,T)}else{if(J.isInstancedBufferAttribute){for(let L=0;L<$.locationSize;L++)m($.location+L,J.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let L=0;L<$.locationSize;L++)g($.location+L);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let L=0;L<$.locationSize;L++)M($.location+L,nt/$.locationSize,Q,ct,nt*lt,nt/$.locationSize*L*lt,T)}}else if(k!==void 0){const ct=k[j];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv($.location,ct);break;case 3:i.vertexAttrib3fv($.location,ct);break;case 4:i.vertexAttrib4fv($.location,ct);break;default:i.vertexAttrib1fv($.location,ct)}}}}y()}function R(){S();for(const b in n){const P=n[b];for(const F in P){const O=P[F];for(const N in O)u(O[N].object),delete O[N];delete P[F]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const F in P){const O=P[F];for(const N in O)u(O[N].object),delete O[N];delete P[F]}delete n[b.id]}function A(b){for(const P in n){const F=n[P];if(F[b.id]===void 0)continue;const O=F[b.id];for(const N in O)u(O[N].object),delete O[N];delete F[b.id]}}function S(){v(),o=!0,s!==r&&(s=r,l(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function qh(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let p=0;p<f;p++)d+=u[p];e.update(d,n,1)}function c(l,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)o(l[p],u[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_]*h[_];e.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Yh(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Fe&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const S=A===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==en&&!S)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:R,maxSamples:E}}function jh(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new zn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!r||p===null||p.length===0||s&&!g)s?u(null):l();else{const y=s?0:n,M=y*4;let x=m.clippingState||null;c.value=x,x=u(p,h,M,d);for(let R=0;R!==M;++R)x[R]=e[R];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(f[M]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function $h(i){let t=new WeakMap;function e(o,a){return a===io?o.mapping=Si:a===ro&&(o.mapping=Ei),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===io||a===ro)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ou(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class wl extends bl{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _i=4,Ya=[.125,.215,.35,.446,.526,.582],Gn=20,As=new wl,ja=new zt;let Rs=null,Cs=0,Ps=0,Is=!1;const kn=(1+Math.sqrt(5))/2,fi=1/kn,$a=[new D(-kn,fi,0),new D(kn,fi,0),new D(-fi,0,kn),new D(fi,0,kn),new D(0,kn,-fi),new D(0,kn,fi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Rs=this._renderer.getRenderTarget(),Cs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rs,Cs,Ps),this._renderer.xr.enabled=Is,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rs=this._renderer.getRenderTarget(),Cs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:ir,format:Fe,colorSpace:Pi,depthBuffer:!1},r=Ka(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kh(s)),this._blurMaterial=Zh(s,t,e)}return r}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,As)}_sceneToCubeUV(t,e,n,r){const a=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ja),u.toneMapping=Rn,u.autoClear=!1;const d=new Ai({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),p=new Jt(new mn,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(ja),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const M=this._cubeSize;Ar(r,y*M,m>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Si||t.mapping===Ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,As)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$a[(r-s-1)%$a.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Jt(this._lodPlanes[r],l),h=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gn-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):Gn;g>Gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gn}`);const m=[];let y=0;for(let A=0;A<Gn;++A){const S=A/_,v=Math.exp(-S*S/2);m.push(v),A===0?y+=v:A<g&&(y+=2*v)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=p,h.mipInt.value=M-n;const x=this._sizeLods[r],R=3*x*(r>M-_i?r-M+_i:0),E=4*(this._cubeSize-x);Ar(e,R,E,3*x,2*x),c.setRenderTarget(e),c.render(f,As)}}function Kh(i){const t=[],e=[],n=[];let r=i;const s=i-_i+1+Ya.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-_i?c=Ya[o-i+_i-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*d),M=new Float32Array(g*p*d),x=new Float32Array(m*p*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,S=E>2?0:-1,v=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];y.set(v,_*p*E),M.set(h,g*p*E);const b=[E,E,E,E,E,E];x.set(b,m*p*E)}const R=new Qt;R.setAttribute("position",new me(y,_)),R.setAttribute("uv",new me(M,g)),R.setAttribute("faceIndex",new me(x,m)),t.push(R),r>_i&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ka(i,t,e){const n=new qn(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Zh(i,t,e){const n=new Float32Array(Gn),r=new D(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ta(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Za(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ja(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ta(){return`

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
	`}function Jh(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===io||c===ro,u=c===Si||c===Ei;if(l||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Uo(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Uo(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Qh(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Yi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function tf(i,t,e,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);for(const p in h.morphAttributes){const _=h.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const p in d){const _=d[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,p=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let M=0,x=y.length;M<x;M+=3){const R=y[M+0],E=y[M+1],A=y[M+2];h.push(R,E,E,A,A,R)}}else if(p!==void 0){const y=p.array;_=p.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const R=M+0,E=M+1,A=M+2;h.push(R,E,E,A,A,R)}}else return;const g=new(dl(h)?yl:vl)(h,1);g.version=_;const m=s.get(f);m&&t.remove(m),s.set(f,g)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function ef(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,s,h*o),e.update(d,n,1)}function l(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,h*o,p),e.update(d,n,p))}function u(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function f(h,d,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)l(h[m]/o,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y]*_[y];e.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function nf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function rf(i,t,e){const n=new WeakMap,r=new re;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",v)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const E=new Float32Array(x*R*4*f),A=new ml(E,x,R,f);A.type=en,A.needsUpdate=!0;const S=M*4;for(let b=0;b<f;b++){const P=g[b],F=m[b],O=y[b],N=x*R*4*b;for(let Y=0;Y<P.count;Y++){const k=Y*S;d===!0&&(r.fromBufferAttribute(P,Y),E[N+k+0]=r.x,E[N+k+1]=r.y,E[N+k+2]=r.z,E[N+k+3]=0),p===!0&&(r.fromBufferAttribute(F,Y),E[N+k+4]=r.x,E[N+k+5]=r.y,E[N+k+6]=r.z,E[N+k+7]=0),_===!0&&(r.fromBufferAttribute(O,Y),E[N+k+8]=r.x,E[N+k+9]=r.y,E[N+k+10]=r.z,E[N+k+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new Ct(x,R)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function sf(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Tl extends _e{constructor(t,e,n,r,s,o,a,c,l,u=vi){if(u!==vi&&u!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vi&&(n=Xn),n===void 0&&u===Ti&&(n=wi),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=c!==void 0?c:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Al=new _e,Qa=new Tl(1,1),Rl=new ml,Cl=new W0,Pl=new Sl,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),rc=new Float32Array(4);function Di(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=tc[r];if(s===void 0&&(s=new Float32Array(r),tc[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Kr(i,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function of(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),fe(e,t)}}function cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),fe(e,t)}}function lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),fe(e,t)}}function uf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(he(e,n))return;rc.set(n),i.uniformMatrix2fv(this.addr,!1,rc),fe(e,n)}}function hf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(he(e,n))return;ic.set(n),i.uniformMatrix3fv(this.addr,!1,ic),fe(e,n)}}function ff(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(he(e,n))return;nc.set(n),i.uniformMatrix4fv(this.addr,!1,nc),fe(e,n)}}function df(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),fe(e,t)}}function mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),fe(e,t)}}function gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),fe(e,t)}}function _f(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),fe(e,t)}}function vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),fe(e,t)}}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),fe(e,t)}}function Mf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Qa.compareFunction=fl,s=Qa):s=Al,e.setTexture2D(t||s,r)}function bf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Cl,r)}function Sf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Pl,r)}function Ef(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Rl,r)}function wf(i){switch(i){case 5126:return of;case 35664:return af;case 35665:return cf;case 35666:return lf;case 35674:return uf;case 35675:return hf;case 35676:return ff;case 5124:case 35670:return df;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return _f;case 36294:return xf;case 36295:return vf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return Ef}}function Tf(i,t){i.uniform1fv(this.addr,t)}function Af(i,t){const e=Di(t,this.size,2);i.uniform2fv(this.addr,e)}function Rf(i,t){const e=Di(t,this.size,3);i.uniform3fv(this.addr,e)}function Cf(i,t){const e=Di(t,this.size,4);i.uniform4fv(this.addr,e)}function Pf(i,t){const e=Di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function If(i,t){const e=Di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lf(i,t){const e=Di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Df(i,t){i.uniform1iv(this.addr,t)}function Uf(i,t){i.uniform2iv(this.addr,t)}function Nf(i,t){i.uniform3iv(this.addr,t)}function Ff(i,t){i.uniform4iv(this.addr,t)}function Of(i,t){i.uniform1uiv(this.addr,t)}function Bf(i,t){i.uniform2uiv(this.addr,t)}function zf(i,t){i.uniform3uiv(this.addr,t)}function kf(i,t){i.uniform4uiv(this.addr,t)}function Hf(i,t,e){const n=this.cache,r=t.length,s=Kr(e,r);he(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Al,s[o])}function Gf(i,t,e){const n=this.cache,r=t.length,s=Kr(e,r);he(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Cl,s[o])}function Vf(i,t,e){const n=this.cache,r=t.length,s=Kr(e,r);he(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Pl,s[o])}function Wf(i,t,e){const n=this.cache,r=t.length,s=Kr(e,r);he(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Rl,s[o])}function Xf(i){switch(i){case 5126:return Tf;case 35664:return Af;case 35665:return Rf;case 35666:return Cf;case 35674:return Pf;case 35675:return If;case 35676:return Lf;case 5124:case 35670:return Df;case 35667:case 35671:return Uf;case 35668:case 35672:return Nf;case 35669:case 35673:return Ff;case 5125:return Of;case 36294:return Bf;case 36295:return zf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return Wf}}class qf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wf(e.type)}}class Yf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xf(e.type)}}class jf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Ls=/(\w+)(\])?(\[|\.)?/g;function sc(i,t){i.seq.push(t),i.map[t.id]=t}function $f(i,t,e){const n=i.name,r=n.length;for(Ls.lastIndex=0;;){const s=Ls.exec(n),o=Ls.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){sc(e,l===void 0?new qf(a,i,t):new Yf(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new jf(a),sc(e,f)),e=f}}}class Gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);$f(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function oc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Kf=37297;let Zf=0;function Jf(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ac=new Xt;function Qf(i){Kt._getMatrix(ac,Kt.workingColorSpace,i);const t=`mat3( ${ac.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case $r:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Jf(i.getShaderSource(t),o)}else return r}function td(i,t){const e=Qf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ed(i,t){let e;switch(t){case x0:e="Linear";break;case v0:e="Reinhard";break;case y0:e="Cineon";break;case el:e="ACESFilmic";break;case b0:e="AgX";break;case S0:e="Neutral";break;case M0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rr=new D;function nd(){Kt.getLuminanceCoefficients(Rr);const i=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function id(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function rd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ji(i){return i!==""}function lc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const od=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(i){return i.replace(od,cd)}const ad=new Map;function cd(i,t){let e=qt[t];if(e===void 0){const n=ad.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return No(e)}const ld=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(ld,ud)}function ud(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hd(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function fd(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case Ei:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dd(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function pd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wo:t="ENVMAP_BLENDING_MULTIPLY";break;case g0:t="ENVMAP_BLENDING_MIX";break;case _0:t="ENVMAP_BLENDING_ADD";break}return t}function md(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function gd(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=hd(e),l=fd(e),u=dd(e),f=pd(e),h=md(e),d=id(e),p=rd(s),_=r.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ji).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ji).join(`
`),m.length>0&&(m+=`
`)):(g=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),m=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?ed("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,td("linearToOutputTexel",e.outputColorSpace),nd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),o=No(o),o=lc(o,e),o=uc(o,e),a=No(a),a=lc(a,e),a=uc(a,e),o=hc(o),a=hc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+g+o,x=y+m+a,R=oc(r,r.VERTEX_SHADER,M),E=oc(r,r.FRAGMENT_SHADER,x);r.attachShader(_,R),r.attachShader(_,E),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(R).trim(),N=r.getShaderInfoLog(E).trim();let Y=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,E);else{const j=cc(r,R,"vertex"),$=cc(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+j+`
`+$)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||N==="")&&(k=!1);k&&(P.diagnostics={runnable:Y,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:N,prefix:m}})}r.deleteShader(R),r.deleteShader(E),S=new Gr(r,_),v=sd(r,_)}let S;this.getUniforms=function(){return S===void 0&&A(this),S};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,Kf)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}let _d=0;class xd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vd(t),e.set(t,n)),n}}class vd{constructor(t){this.id=_d++,this.code=t,this.usedTimes=0}}function yd(i,t,e,n,r,s,o){const a=new _l,c=new xd,l=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,b,P,F,O){const N=F.fog,Y=O.geometry,k=v.isMeshStandardMaterial?F.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||k),$=j&&j.mapping===jr?j.image.height:null,J=p[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ct=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=ct!==void 0?ct.length:0;let Tt=0;Y.morphAttributes.position!==void 0&&(Tt=1),Y.morphAttributes.normal!==void 0&&(Tt=2),Y.morphAttributes.color!==void 0&&(Tt=3);let Bt,Q,lt,T;if(J){const ne=Je[J];Bt=ne.vertexShader,Q=ne.fragmentShader}else Bt=v.vertexShader,Q=v.fragmentShader,c.update(v),lt=c.getVertexShaderID(v),T=c.getFragmentShaderID(v);const L=i.getRenderTarget(),U=i.state.buffers.depth.getReversed(),z=O.isInstancedMesh===!0,V=O.isBatchedMesh===!0,ut=!!v.map,mt=!!v.matcap,bt=!!j,B=!!v.aoMap,kt=!!v.lightMap,Pt=!!v.bumpMap,pt=!!v.normalMap,ft=!!v.displacementMap,At=!!v.emissiveMap,_t=!!v.metalnessMap,I=!!v.roughnessMap,w=v.anisotropy>0,X=v.clearcoat>0,et=v.dispersion>0,ot=v.iridescence>0,H=v.sheen>0,rt=v.transmission>0,st=w&&!!v.anisotropyMap,ht=X&&!!v.clearcoatMap,Nt=X&&!!v.clearcoatNormalMap,it=X&&!!v.clearcoatRoughnessMap,yt=ot&&!!v.iridescenceMap,Rt=ot&&!!v.iridescenceThicknessMap,It=H&&!!v.sheenColorMap,xt=H&&!!v.sheenRoughnessMap,Yt=!!v.specularMap,Ht=!!v.specularColorMap,$t=!!v.specularIntensityMap,G=rt&&!!v.transmissionMap,gt=rt&&!!v.thicknessMap,tt=!!v.gradientMap,at=!!v.alphaMap,wt=v.alphaTest>0,St=!!v.alphaHash,Vt=!!v.extensions;let ce=Rn;v.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ce=i.toneMapping);const ve={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:Bt,fragmentShader:Q,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:T,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:V,batchingColor:V&&O._colorsTexture!==null,instancing:z,instancingColor:z&&O.instanceColor!==null,instancingMorph:z&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Pi,alphaToCoverage:!!v.alphaToCoverage,map:ut,matcap:mt,envMap:bt,envMapMode:bt&&j.mapping,envMapCubeUVHeight:$,aoMap:B,lightMap:kt,bumpMap:Pt,normalMap:pt,displacementMap:h&&ft,emissiveMap:At,normalMapObjectSpace:pt&&v.normalMapType===A0,normalMapTangentSpace:pt&&v.normalMapType===Jo,metalnessMap:_t,roughnessMap:I,anisotropy:w,anisotropyMap:st,clearcoat:X,clearcoatMap:ht,clearcoatNormalMap:Nt,clearcoatRoughnessMap:it,dispersion:et,iridescence:ot,iridescenceMap:yt,iridescenceThicknessMap:Rt,sheen:H,sheenColorMap:It,sheenRoughnessMap:xt,specularMap:Yt,specularColorMap:Ht,specularIntensityMap:$t,transmission:rt,transmissionMap:G,thicknessMap:gt,gradientMap:tt,opaque:v.transparent===!1&&v.blending===xi&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:wt,alphaHash:St,combine:v.combine,mapUv:ut&&_(v.map.channel),aoMapUv:B&&_(v.aoMap.channel),lightMapUv:kt&&_(v.lightMap.channel),bumpMapUv:Pt&&_(v.bumpMap.channel),normalMapUv:pt&&_(v.normalMap.channel),displacementMapUv:ft&&_(v.displacementMap.channel),emissiveMapUv:At&&_(v.emissiveMap.channel),metalnessMapUv:_t&&_(v.metalnessMap.channel),roughnessMapUv:I&&_(v.roughnessMap.channel),anisotropyMapUv:st&&_(v.anisotropyMap.channel),clearcoatMapUv:ht&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(v.sheenRoughnessMap.channel),specularMapUv:Yt&&_(v.specularMap.channel),specularColorMapUv:Ht&&_(v.specularColorMap.channel),specularIntensityMapUv:$t&&_(v.specularIntensityMap.channel),transmissionMapUv:G&&_(v.transmissionMap.channel),thicknessMapUv:gt&&_(v.thicknessMap.channel),alphaMapUv:at&&_(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(pt||w),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(ut||at),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:U,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Tt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:ut&&v.map.isVideoTexture===!0&&Kt.getTransfer(v.map.colorSpace)===ie,decodeVideoTextureEmissive:At&&v.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(v.emissiveMap.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ne,flipSided:v.side===be,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Vt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&v.extensions.multiDraw===!0||V)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function m(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(y(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const b=p[v.type];let P;if(b){const F=Je[b];P=nu.clone(F.uniforms)}else P=v.uniforms;return P}function R(v,b){let P;for(let F=0,O=u.length;F<O;F++){const N=u[F];if(N.cacheKey===b){P=N,++P.usedTimes;break}}return P===void 0&&(P=new gd(i,b,v,s),u.push(P)),P}function E(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),v.destroy()}}function A(v){c.remove(v)}function S(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:S}}function Md(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function bd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,h,d,p,_,g){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:p,renderOrder:f.renderOrder,z:_,group:g},i[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=p,m.renderOrder=f.renderOrder,m.z=_,m.group=g),t++,m}function a(f,h,d,p,_,g){const m=o(f,h,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):e.push(m)}function c(f,h,d,p,_,g){const m=o(f,h,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function l(f,h){e.length>1&&e.sort(f||bd),n.length>1&&n.sort(h||dc),r.length>1&&r.sort(h||dc)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Sd(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new pc,i.set(n,[o])):r>=s.length?(o=new pc,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ed(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function wd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Td=0;function Ad(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rd(i){const t=new Ed,e=wd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,s=new jt,o=new jt;function a(l){let u=0,f=0,h=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,y=0,M=0,x=0,R=0,E=0,A=0;l.sort(Ad);for(let v=0,b=l.length;v<b;v++){const P=l[v],F=P.color,O=P.intensity,N=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*O,f+=F.g*O,h+=F.b*O;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],O);A++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,$=e.get(P);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=k,d++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(F).multiplyScalar(O),k.distance=N,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;const j=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,j.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=j.matrix,P.castShadow){const $=e.get(P);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=Y,x++}_++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(F).multiplyScalar(O),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=k,g++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const j=P.shadow,$=e.get(P);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,$.shadowCameraNear=j.camera.near,$.shadowCameraFar=j.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=Y,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=k,p++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(O),k.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[m]=k,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const S=n.hash;(S.directionalLength!==d||S.pointLength!==p||S.spotLength!==_||S.rectAreaLength!==g||S.hemiLength!==m||S.numDirectionalShadows!==y||S.numPointShadows!==M||S.numSpotShadows!==x||S.numSpotMaps!==R||S.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,S.directionalLength=d,S.pointLength=p,S.spotLength=_,S.rectAreaLength=g,S.hemiLength=m,S.numDirectionalShadows=y,S.numPointShadows=M,S.numSpotShadows=x,S.numSpotMaps=R,S.numLightProbes=A,n.version=Td++)}function c(l,u){let f=0,h=0,d=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const M=l[m];if(M.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),f++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function mc(i){const t=new Rd(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Cd(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new mc(i),t.set(r,[a])):s>=o.length?(a=new mc(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Pd extends Kn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=w0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Id extends Kn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ld=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dd=`uniform sampler2D shadow_pass;
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
}`;function Ud(i,t,e){let n=new Qo;const r=new Ct,s=new Ct,o=new re,a=new Pd({depthPacking:T0}),c=new Id,l={},u=e.maxTextureSize,f={[Cn]:be,[be]:Cn,[Ne]:Ne},h=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Ld,fragmentShader:Dd}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Qt;p.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let m=this.type;this.render=function(E,A,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const v=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(An),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==hn&&this.type===hn,N=m===hn&&this.type!==hn;for(let Y=0,k=E.length;Y<k;Y++){const j=E[Y],$=j.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const J=$.getFrameExtents();if(r.multiply(J),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,$.mapSize.y=s.y)),$.map===null||O===!0||N===!0){const nt=this.type!==hn?{minFilter:Oe,magFilter:Oe}:{};$.map!==null&&$.map.dispose(),$.map=new qn(r.x,r.y,nt),$.map.texture.name=j.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const ct=$.getViewportCount();for(let nt=0;nt<ct;nt++){const Tt=$.getViewport(nt);o.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),F.viewport(o),$.updateMatrices(j,nt),n=$.getFrustum(),x(A,S,$.camera,j,this.type)}$.isPointLightShadow!==!0&&this.type===hn&&y($,S),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(v,b,P)};function y(E,A){const S=t.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qn(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,S,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,S,d,_,null)}function M(E,A,S,v){let b=null;const P=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=S.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=b.uuid,O=A.uuid;let N=l[F];N===void 0&&(N={},l[F]=N);let Y=N[O];Y===void 0&&(Y=b.clone(),N[O]=Y,A.addEventListener("dispose",R)),b=Y}if(b.visible=A.visible,b.wireframe=A.wireframe,v===hn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=i.properties.get(b);F.light=S}return b}function x(E,A,S,v,b){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===hn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const O=t.update(E),N=E.material;if(Array.isArray(N)){const Y=O.groups;for(let k=0,j=Y.length;k<j;k++){const $=Y[k],J=N[$.materialIndex];if(J&&J.visible){const ct=M(E,J,v,b);E.onBeforeShadow(i,E,A,S,O,ct,$),i.renderBufferDirect(S,null,O,ct,E,$),E.onAfterShadow(i,E,A,S,O,ct,$)}}}else if(N.visible){const Y=M(E,N,v,b);E.onBeforeShadow(i,E,A,S,O,Y,null),i.renderBufferDirect(S,null,O,Y,E,null),E.onAfterShadow(i,E,A,S,O,Y,null)}}const F=E.children;for(let O=0,N=F.length;O<N;O++)x(F[O],A,S,v,b)}function R(E){E.target.removeEventListener("dispose",R);for(const S in l){const v=l[S],b=E.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const Nd={[Ks]:Zs,[Js]:eo,[Qs]:no,[bi]:to,[Zs]:Ks,[eo]:Js,[no]:Qs,[to]:bi};function Fd(i,t){function e(){let G=!1;const gt=new re;let tt=null;const at=new re(0,0,0,0);return{setMask:function(wt){tt!==wt&&!G&&(i.colorMask(wt,wt,wt,wt),tt=wt)},setLocked:function(wt){G=wt},setClear:function(wt,St,Vt,ce,ve){ve===!0&&(wt*=ce,St*=ce,Vt*=ce),gt.set(wt,St,Vt,ce),at.equals(gt)===!1&&(i.clearColor(wt,St,Vt,ce),at.copy(gt))},reset:function(){G=!1,tt=null,at.set(-1,0,0,0)}}}function n(){let G=!1,gt=!1,tt=null,at=null,wt=null;return{setReversed:function(St){if(gt!==St){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const ce=wt;wt=null,this.setClear(ce)}gt=St},getReversed:function(){return gt},setTest:function(St){St?L(i.DEPTH_TEST):U(i.DEPTH_TEST)},setMask:function(St){tt!==St&&!G&&(i.depthMask(St),tt=St)},setFunc:function(St){if(gt&&(St=Nd[St]),at!==St){switch(St){case Ks:i.depthFunc(i.NEVER);break;case Zs:i.depthFunc(i.ALWAYS);break;case Js:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case Qs:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case no:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=St}},setLocked:function(St){G=St},setClear:function(St){wt!==St&&(gt&&(St=1-St),i.clearDepth(St),wt=St)},reset:function(){G=!1,tt=null,at=null,wt=null,gt=!1}}}function r(){let G=!1,gt=null,tt=null,at=null,wt=null,St=null,Vt=null,ce=null,ve=null;return{setTest:function(ne){G||(ne?L(i.STENCIL_TEST):U(i.STENCIL_TEST))},setMask:function(ne){gt!==ne&&!G&&(i.stencilMask(ne),gt=ne)},setFunc:function(ne,Ve,rn){(tt!==ne||at!==Ve||wt!==rn)&&(i.stencilFunc(ne,Ve,rn),tt=ne,at=Ve,wt=rn)},setOp:function(ne,Ve,rn){(St!==ne||Vt!==Ve||ce!==rn)&&(i.stencilOp(ne,Ve,rn),St=ne,Vt=Ve,ce=rn)},setLocked:function(ne){G=ne},setClear:function(ne){ve!==ne&&(i.clearStencil(ne),ve=ne)},reset:function(){G=!1,gt=null,tt=null,at=null,wt=null,St=null,Vt=null,ce=null,ve=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,_=!1,g=null,m=null,y=null,M=null,x=null,R=null,E=null,A=new zt(0,0,0),S=0,v=!1,b=null,P=null,F=null,O=null,N=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,j=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),k=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=j>=2);let J=null,ct={};const nt=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),Bt=new re().fromArray(nt),Q=new re().fromArray(Tt);function lt(G,gt,tt,at){const wt=new Uint8Array(4),St=i.createTexture();i.bindTexture(G,St),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<tt;Vt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(gt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return St}const T={};T[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),T[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),T[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(i.DEPTH_TEST),o.setFunc(bi),Pt(!1),pt(ba),L(i.CULL_FACE),B(An);function L(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function U(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function z(G,gt){return f[G]!==gt?(i.bindFramebuffer(G,gt),f[G]=gt,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=gt),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function V(G,gt){let tt=d,at=!1;if(G){tt=h.get(gt),tt===void 0&&(tt=[],h.set(gt,tt));const wt=G.textures;if(tt.length!==wt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Vt=wt.length;St<Vt;St++)tt[St]=i.COLOR_ATTACHMENT0+St;tt.length=wt.length,at=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,at=!0);at&&i.drawBuffers(tt)}function ut(G){return p!==G?(i.useProgram(G),p=G,!0):!1}const mt={[Hn]:i.FUNC_ADD,[Ql]:i.FUNC_SUBTRACT,[t0]:i.FUNC_REVERSE_SUBTRACT};mt[e0]=i.MIN,mt[n0]=i.MAX;const bt={[i0]:i.ZERO,[r0]:i.ONE,[s0]:i.SRC_COLOR,[js]:i.SRC_ALPHA,[h0]:i.SRC_ALPHA_SATURATE,[l0]:i.DST_COLOR,[a0]:i.DST_ALPHA,[o0]:i.ONE_MINUS_SRC_COLOR,[$s]:i.ONE_MINUS_SRC_ALPHA,[u0]:i.ONE_MINUS_DST_COLOR,[c0]:i.ONE_MINUS_DST_ALPHA,[f0]:i.CONSTANT_COLOR,[d0]:i.ONE_MINUS_CONSTANT_COLOR,[p0]:i.CONSTANT_ALPHA,[m0]:i.ONE_MINUS_CONSTANT_ALPHA};function B(G,gt,tt,at,wt,St,Vt,ce,ve,ne){if(G===An){_===!0&&(U(i.BLEND),_=!1);return}if(_===!1&&(L(i.BLEND),_=!0),G!==Jl){if(G!==g||ne!==v){if((m!==Hn||x!==Hn)&&(i.blendEquation(i.FUNC_ADD),m=Hn,x=Hn),ne)switch(G){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.ONE,i.ONE);break;case Sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,M=null,R=null,E=null,A.set(0,0,0),S=0,g=G,v=ne}return}wt=wt||gt,St=St||tt,Vt=Vt||at,(gt!==m||wt!==x)&&(i.blendEquationSeparate(mt[gt],mt[wt]),m=gt,x=wt),(tt!==y||at!==M||St!==R||Vt!==E)&&(i.blendFuncSeparate(bt[tt],bt[at],bt[St],bt[Vt]),y=tt,M=at,R=St,E=Vt),(ce.equals(A)===!1||ve!==S)&&(i.blendColor(ce.r,ce.g,ce.b,ve),A.copy(ce),S=ve),g=G,v=!1}function kt(G,gt){G.side===Ne?U(i.CULL_FACE):L(i.CULL_FACE);let tt=G.side===be;gt&&(tt=!tt),Pt(tt),G.blending===xi&&G.transparent===!1?B(An):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const at=G.stencilWrite;a.setTest(at),at&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),At(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):U(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function pt(G){G!==$l?(L(i.CULL_FACE),G!==P&&(G===ba?i.cullFace(i.BACK):G===Kl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):U(i.CULL_FACE),P=G}function ft(G){G!==F&&(k&&i.lineWidth(G),F=G)}function At(G,gt,tt){G?(L(i.POLYGON_OFFSET_FILL),(O!==gt||N!==tt)&&(i.polygonOffset(gt,tt),O=gt,N=tt)):U(i.POLYGON_OFFSET_FILL)}function _t(G){G?L(i.SCISSOR_TEST):U(i.SCISSOR_TEST)}function I(G){G===void 0&&(G=i.TEXTURE0+Y-1),J!==G&&(i.activeTexture(G),J=G)}function w(G,gt,tt){tt===void 0&&(J===null?tt=i.TEXTURE0+Y-1:tt=J);let at=ct[tt];at===void 0&&(at={type:void 0,texture:void 0},ct[tt]=at),(at.type!==G||at.texture!==gt)&&(J!==tt&&(i.activeTexture(tt),J=tt),i.bindTexture(G,gt||T[G]),at.type=G,at.texture=gt)}function X(){const G=ct[J];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function It(G){Bt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Bt.copy(G))}function xt(G){Q.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function Yt(G,gt){let tt=l.get(gt);tt===void 0&&(tt=new WeakMap,l.set(gt,tt));let at=tt.get(G);at===void 0&&(at=i.getUniformBlockIndex(gt,G.name),tt.set(G,at))}function Ht(G,gt){const at=l.get(gt).get(G);c.get(gt)!==at&&(i.uniformBlockBinding(gt,at,G.__bindingPointIndex),c.set(gt,at))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},J=null,ct={},f={},h=new WeakMap,d=[],p=null,_=!1,g=null,m=null,y=null,M=null,x=null,R=null,E=null,A=new zt(0,0,0),S=0,v=!1,b=null,P=null,F=null,O=null,N=null,Bt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:L,disable:U,bindFramebuffer:z,drawBuffers:V,useProgram:ut,setBlending:B,setMaterial:kt,setFlipSided:Pt,setCullFace:pt,setLineWidth:ft,setPolygonOffset:At,setScissorTest:_t,activeTexture:I,bindTexture:w,unbindTexture:X,compressedTexImage2D:et,compressedTexImage3D:ot,texImage2D:yt,texImage3D:Rt,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:Nt,texStorage3D:it,texSubImage2D:H,texSubImage3D:rt,compressedTexSubImage2D:st,compressedTexSubImage3D:ht,scissor:It,viewport:xt,reset:$t}}function gc(i,t,e,n){const r=Od(n);switch(e){case ol:return i*t;case cl:return i*t;case ll:return i*t*2;case jo:return i*t/r.components*r.byteLength;case $o:return i*t/r.components*r.byteLength;case ul:return i*t*2/r.components*r.byteLength;case Ko:return i*t*2/r.components*r.byteLength;case al:return i*t*3/r.components*r.byteLength;case Fe:return i*t*4/r.components*r.byteLength;case Zo:return i*t*4/r.components*r.byteLength;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:case lo:return Math.max(i,16)*Math.max(t,8)/4;case oo:case co:return Math.max(i,8)*Math.max(t,8)/2;case uo:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hr:case Ro:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hl:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Io:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Od(i){switch(i){case pn:case il:return{byteLength:1,components:1};case Qi:case rl:case ir:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case Xn:case Xo:case en:return{byteLength:4,components:1};case sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bd(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ct,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,w){return d?new OffscreenCanvas(I,w):tr("canvas")}function _(I,w,X){let et=1;const ot=_t(I);if((ot.width>X||ot.height>X)&&(et=X/Math.max(ot.width,ot.height)),et<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const H=Math.floor(et*ot.width),rt=Math.floor(et*ot.height);f===void 0&&(f=p(H,rt));const st=w?p(H,rt):f;return st.width=H,st.height=rt,st.getContext("2d").drawImage(I,0,0,H,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+H+"x"+rt+")."),st}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,w,X,et,ot=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let H=w;if(w===i.RED&&(X===i.FLOAT&&(H=i.R32F),X===i.HALF_FLOAT&&(H=i.R16F),X===i.UNSIGNED_BYTE&&(H=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(H=i.R8UI),X===i.UNSIGNED_SHORT&&(H=i.R16UI),X===i.UNSIGNED_INT&&(H=i.R32UI),X===i.BYTE&&(H=i.R8I),X===i.SHORT&&(H=i.R16I),X===i.INT&&(H=i.R32I)),w===i.RG&&(X===i.FLOAT&&(H=i.RG32F),X===i.HALF_FLOAT&&(H=i.RG16F),X===i.UNSIGNED_BYTE&&(H=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(H=i.RG8UI),X===i.UNSIGNED_SHORT&&(H=i.RG16UI),X===i.UNSIGNED_INT&&(H=i.RG32UI),X===i.BYTE&&(H=i.RG8I),X===i.SHORT&&(H=i.RG16I),X===i.INT&&(H=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(H=i.RGB8UI),X===i.UNSIGNED_SHORT&&(H=i.RGB16UI),X===i.UNSIGNED_INT&&(H=i.RGB32UI),X===i.BYTE&&(H=i.RGB8I),X===i.SHORT&&(H=i.RGB16I),X===i.INT&&(H=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),X===i.UNSIGNED_INT&&(H=i.RGBA32UI),X===i.BYTE&&(H=i.RGBA8I),X===i.SHORT&&(H=i.RGBA16I),X===i.INT&&(H=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),w===i.RGBA){const rt=ot?$r:Kt.getTransfer(et);X===i.FLOAT&&(H=i.RGBA32F),X===i.HALF_FLOAT&&(H=i.RGBA16F),X===i.UNSIGNED_BYTE&&(H=rt===ie?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function x(I,w){let X;return I?w===null||w===Xn||w===wi?X=i.DEPTH24_STENCIL8:w===en?X=i.DEPTH32F_STENCIL8:w===Qi&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xn||w===wi?X=i.DEPTH_COMPONENT24:w===en?X=i.DEPTH_COMPONENT32F:w===Qi&&(X=i.DEPTH_COMPONENT16),X}function R(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Oe&&I.minFilter!==Ce?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function E(I){const w=I.target;w.removeEventListener("dispose",E),S(w),w.isVideoTexture&&u.delete(w)}function A(I){const w=I.target;w.removeEventListener("dispose",A),b(w)}function S(I){const w=n.get(I);if(w.__webglInit===void 0)return;const X=I.source,et=h.get(X);if(et){const ot=et[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&v(I),Object.keys(et).length===0&&h.delete(X)}n.remove(I)}function v(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const X=I.source,et=h.get(X);delete et[w.__cacheKey],o.memory.textures--}function b(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let ot=0;ot<w.__webglFramebuffer[et].length;ot++)i.deleteFramebuffer(w.__webglFramebuffer[et][ot]);else i.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)i.deleteFramebuffer(w.__webglFramebuffer[et]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=I.textures;for(let et=0,ot=X.length;et<ot;et++){const H=n.get(X[et]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(X[et])}n.remove(I)}let P=0;function F(){P=0}function O(){const I=P;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),P+=1,I}function N(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Y(I,w){const X=n.get(I);if(I.isVideoTexture&&ft(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){const et=I.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(X,I,w);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function k(I,w){const X=n.get(I);if(I.version>0&&X.__version!==I.version){Q(X,I,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function j(I,w){const X=n.get(I);if(I.version>0&&X.__version!==I.version){Q(X,I,w);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function $(I,w){const X=n.get(I);if(I.version>0&&X.__version!==I.version){lt(X,I,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const J={[Pn]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},ct={[Oe]:i.NEAREST,[E0]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[Ce]:i.LINEAR,[rs]:i.LINEAR_MIPMAP_NEAREST,[He]:i.LINEAR_MIPMAP_LINEAR},nt={[R0]:i.NEVER,[U0]:i.ALWAYS,[C0]:i.LESS,[fl]:i.LEQUAL,[P0]:i.EQUAL,[D0]:i.GEQUAL,[I0]:i.GREATER,[L0]:i.NOTEQUAL};function Tt(I,w){if(w.type===en&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ce||w.magFilter===rs||w.magFilter===cr||w.magFilter===He||w.minFilter===Ce||w.minFilter===rs||w.minFilter===cr||w.minFilter===He)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,J[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,J[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,J[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ct[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ct[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,nt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Oe||w.minFilter!==cr&&w.minFilter!==He||w.type===en&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Bt(I,w){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",E));const et=w.source;let ot=h.get(et);ot===void 0&&(ot={},h.set(et,ot));const H=N(w);if(H!==I.__cacheKey){ot[H]===void 0&&(ot[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ot[H].usedTimes++;const rt=ot[I.__cacheKey];rt!==void 0&&(ot[I.__cacheKey].usedTimes--,rt.usedTimes===0&&v(w)),I.__cacheKey=H,I.__webglTexture=ot[H].texture}return X}function Q(I,w,X){let et=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=i.TEXTURE_3D);const ot=Bt(I,w),H=w.source;e.bindTexture(et,I.__webglTexture,i.TEXTURE0+X);const rt=n.get(H);if(H.version!==rt.__version||ot===!0){e.activeTexture(i.TEXTURE0+X);const st=Kt.getPrimaries(Kt.workingColorSpace),ht=w.colorSpace===Qe?null:Kt.getPrimaries(w.colorSpace),Nt=w.colorSpace===Qe||st===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let it=_(w.image,!1,r.maxTextureSize);it=At(w,it);const yt=s.convert(w.format,w.colorSpace),Rt=s.convert(w.type);let It=M(w.internalFormat,yt,Rt,w.colorSpace,w.isVideoTexture);Tt(et,w);let xt;const Yt=w.mipmaps,Ht=w.isVideoTexture!==!0,$t=rt.__version===void 0||ot===!0,G=H.dataReady,gt=R(w,it);if(w.isDepthTexture)It=x(w.format===Ti,w.type),$t&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,It,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,It,it.width,it.height,0,yt,Rt,null));else if(w.isDataTexture)if(Yt.length>0){Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,gt,It,Yt[0].width,Yt[0].height);for(let tt=0,at=Yt.length;tt<at;tt++)xt=Yt[tt],Ht?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,xt.width,xt.height,yt,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,tt,It,xt.width,xt.height,0,yt,Rt,xt.data);w.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(i.TEXTURE_2D,gt,It,it.width,it.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,yt,Rt,it.data)):e.texImage2D(i.TEXTURE_2D,0,It,it.width,it.height,0,yt,Rt,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,It,Yt[0].width,Yt[0].height,it.depth);for(let tt=0,at=Yt.length;tt<at;tt++)if(xt=Yt[tt],w.format!==Fe)if(yt!==null)if(Ht){if(G)if(w.layerUpdates.size>0){const wt=gc(xt.width,xt.height,w.format,w.type);for(const St of w.layerUpdates){const Vt=xt.data.subarray(St*wt/xt.data.BYTES_PER_ELEMENT,(St+1)*wt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,St,xt.width,xt.height,1,yt,Vt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,xt.width,xt.height,it.depth,yt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,It,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,xt.width,xt.height,it.depth,yt,Rt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,It,xt.width,xt.height,it.depth,0,yt,Rt,xt.data)}else{Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,gt,It,Yt[0].width,Yt[0].height);for(let tt=0,at=Yt.length;tt<at;tt++)xt=Yt[tt],w.format!==Fe?yt!==null?Ht?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,xt.width,xt.height,yt,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,tt,It,xt.width,xt.height,0,yt,Rt,xt.data)}else if(w.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,It,it.width,it.height,it.depth),G)if(w.layerUpdates.size>0){const tt=gc(it.width,it.height,w.format,w.type);for(const at of w.layerUpdates){const wt=it.data.subarray(at*tt/it.data.BYTES_PER_ELEMENT,(at+1)*tt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,it.width,it.height,1,yt,Rt,wt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Rt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,it.width,it.height,it.depth,0,yt,Rt,it.data);else if(w.isData3DTexture)Ht?($t&&e.texStorage3D(i.TEXTURE_3D,gt,It,it.width,it.height,it.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Rt,it.data)):e.texImage3D(i.TEXTURE_3D,0,It,it.width,it.height,it.depth,0,yt,Rt,it.data);else if(w.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(i.TEXTURE_2D,gt,It,it.width,it.height);else{let tt=it.width,at=it.height;for(let wt=0;wt<gt;wt++)e.texImage2D(i.TEXTURE_2D,wt,It,tt,at,0,yt,Rt,null),tt>>=1,at>>=1}}else if(Yt.length>0){if(Ht&&$t){const tt=_t(Yt[0]);e.texStorage2D(i.TEXTURE_2D,gt,It,tt.width,tt.height)}for(let tt=0,at=Yt.length;tt<at;tt++)xt=Yt[tt],Ht?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,yt,Rt,xt):e.texImage2D(i.TEXTURE_2D,tt,It,yt,Rt,xt);w.generateMipmaps=!1}else if(Ht){if($t){const tt=_t(it);e.texStorage2D(i.TEXTURE_2D,gt,It,tt.width,tt.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Rt,it)}else e.texImage2D(i.TEXTURE_2D,0,It,yt,Rt,it);g(w)&&m(et),rt.__version=H.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function lt(I,w,X){if(w.image.length!==6)return;const et=Bt(I,w),ot=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);const H=n.get(ot);if(ot.version!==H.__version||et===!0){e.activeTexture(i.TEXTURE0+X);const rt=Kt.getPrimaries(Kt.workingColorSpace),st=w.colorSpace===Qe?null:Kt.getPrimaries(w.colorSpace),ht=w.colorSpace===Qe||rt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Nt=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,yt=[];for(let at=0;at<6;at++)!Nt&&!it?yt[at]=_(w.image[at],!0,r.maxCubemapSize):yt[at]=it?w.image[at].image:w.image[at],yt[at]=At(w,yt[at]);const Rt=yt[0],It=s.convert(w.format,w.colorSpace),xt=s.convert(w.type),Yt=M(w.internalFormat,It,xt,w.colorSpace),Ht=w.isVideoTexture!==!0,$t=H.__version===void 0||et===!0,G=ot.dataReady;let gt=R(w,Rt);Tt(i.TEXTURE_CUBE_MAP,w);let tt;if(Nt){Ht&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Yt,Rt.width,Rt.height);for(let at=0;at<6;at++){tt=yt[at].mipmaps;for(let wt=0;wt<tt.length;wt++){const St=tt[wt];w.format!==Fe?It!==null?Ht?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,0,0,St.width,St.height,It,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,Yt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,0,0,St.width,St.height,It,xt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,Yt,St.width,St.height,0,It,xt,St.data)}}}else{if(tt=w.mipmaps,Ht&&$t){tt.length>0&&gt++;const at=_t(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Yt,at.width,at.height)}for(let at=0;at<6;at++)if(it){Ht?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,yt[at].width,yt[at].height,It,xt,yt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,yt[at].width,yt[at].height,0,It,xt,yt[at].data);for(let wt=0;wt<tt.length;wt++){const Vt=tt[wt].image[at].image;Ht?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,0,0,Vt.width,Vt.height,It,xt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,Yt,Vt.width,Vt.height,0,It,xt,Vt.data)}}else{Ht?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,It,xt,yt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,It,xt,yt[at]);for(let wt=0;wt<tt.length;wt++){const St=tt[wt];Ht?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,0,0,It,xt,St.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,Yt,It,xt,St.image[at])}}}g(w)&&m(i.TEXTURE_CUBE_MAP),H.__version=ot.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function T(I,w,X,et,ot,H){const rt=s.convert(X.format,X.colorSpace),st=s.convert(X.type),ht=M(X.internalFormat,rt,st,X.colorSpace),Nt=n.get(w),it=n.get(X);if(it.__renderTarget=w,!Nt.__hasExternalTextures){const yt=Math.max(1,w.width>>H),Rt=Math.max(1,w.height>>H);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,H,ht,yt,Rt,w.depth,0,rt,st,null):e.texImage2D(ot,H,ht,yt,Rt,0,rt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ot,it.__webglTexture,0,Pt(w)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ot,it.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function L(I,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const et=w.depthTexture,ot=et&&et.isDepthTexture?et.type:null,H=x(w.stencilBuffer,ot),rt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=Pt(w);pt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,H,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,H,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,H,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,I)}else{const et=w.textures;for(let ot=0;ot<et.length;ot++){const H=et[ot],rt=s.convert(H.format,H.colorSpace),st=s.convert(H.type),ht=M(H.internalFormat,rt,st,H.colorSpace),Nt=Pt(w);X&&pt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,ht,w.width,w.height):pt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,ht,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ht,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function U(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(w.depthTexture);et.__renderTarget=w,(!et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const ot=et.__webglTexture,H=Pt(w);if(w.depthTexture.format===vi)pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(w.depthTexture.format===Ti)pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function z(I){const w=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const et=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){const ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",ot)};et.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=et}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");U(w.__webglFramebuffer,I)}else if(X){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=i.createRenderbuffer(),L(w.__webglDepthbuffer[et],I,!1);else{const ot=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=w.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,H)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),L(w.__webglDepthbuffer,I,!1);else{const et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function V(I,w,X){const et=n.get(I);w!==void 0&&T(et.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&z(I)}function ut(I){const w=I.texture,X=n.get(I),et=n.get(w);I.addEventListener("dispose",A);const ot=I.textures,H=I.isWebGLCubeRenderTarget===!0,rt=ot.length>1;if(rt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=w.version,o.memory.textures++),H){X.__webglFramebuffer=[];for(let st=0;st<6;st++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[st]=[];for(let ht=0;ht<w.mipmaps.length;ht++)X.__webglFramebuffer[st][ht]=i.createFramebuffer()}else X.__webglFramebuffer[st]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let st=0;st<w.mipmaps.length;st++)X.__webglFramebuffer[st]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(rt)for(let st=0,ht=ot.length;st<ht;st++){const Nt=n.get(ot[st]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&pt(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let st=0;st<ot.length;st++){const ht=ot[st];X.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[st]);const Nt=s.convert(ht.format,ht.colorSpace),it=s.convert(ht.type),yt=M(ht.internalFormat,Nt,it,ht.colorSpace,I.isXRRenderTarget===!0),Rt=Pt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,yt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,X.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),L(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,w);for(let st=0;st<6;st++)if(w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)T(X.__webglFramebuffer[st][ht],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht);else T(X.__webglFramebuffer[st],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);g(w)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let st=0,ht=ot.length;st<ht;st++){const Nt=ot[st],it=n.get(Nt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Tt(i.TEXTURE_2D,Nt),T(X.__webglFramebuffer,I,Nt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),g(Nt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(st=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,et.__webglTexture),Tt(st,w),w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)T(X.__webglFramebuffer[ht],I,w,i.COLOR_ATTACHMENT0,st,ht);else T(X.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,st,0);g(w)&&m(st),e.unbindTexture()}I.depthBuffer&&z(I)}function mt(I){const w=I.textures;for(let X=0,et=w.length;X<et;X++){const ot=w[X];if(g(ot)){const H=y(I),rt=n.get(ot).__webglTexture;e.bindTexture(H,rt),m(H),e.unbindTexture()}}}const bt=[],B=[];function kt(I){if(I.samples>0){if(pt(I)===!1){const w=I.textures,X=I.width,et=I.height;let ot=i.COLOR_BUFFER_BIT;const H=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(I),st=w.length>1;if(st)for(let ht=0;ht<w.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ht=0;ht<w.length;ht++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ht]);const Nt=n.get(w[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,X,et,0,0,X,et,ot,i.NEAREST),c===!0&&(bt.length=0,B.length=0,bt.push(i.COLOR_ATTACHMENT0+ht),I.depthBuffer&&I.resolveDepthBuffer===!1&&(bt.push(H),B.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let ht=0;ht<w.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ht]);const Nt=n.get(w[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Pt(I){return Math.min(r.maxSamples,I.samples)}function pt(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(I){const w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function At(I,w){const X=I.colorSpace,et=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Pi&&X!==Qe&&(Kt.getTransfer(X)===ie?(et!==Fe||ot!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function _t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=V,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=T,this.useMultisampledRTT=pt}function zd(i,t){function e(n,r=Qe){let s;const o=Kt.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===il)return i.BYTE;if(n===rl)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===ir)return i.HALF_FLOAT;if(n===ol)return i.ALPHA;if(n===al)return i.RGB;if(n===Fe)return i.RGBA;if(n===cl)return i.LUMINANCE;if(n===ll)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===$o)return i.RED_INTEGER;if(n===ul)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===Zo)return i.RGBA_INTEGER;if(n===Or||n===Br||n===zr||n===kr)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Or)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Or)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===ao||n===co||n===lo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===ho||n===fo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uo||n===ho)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===yo||n===Mo||n===bo||n===So||n===Eo||n===wo||n===To||n===Ao)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===po)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===So)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===Ro||n===Co)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Hr)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hl||n===Po||n===Io||n===Lo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class kd extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Tn extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hd={type:"move"};class Ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;l.inputState.pinching&&h>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vd=`
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

}`;class Wd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new _e,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ge({vertexShader:Gd,fragmentShader:Vd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xd extends Ii{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,p=null;const _=new Wd,g=e.getContextAttributes();let m=null,y=null;const M=[],x=[],R=new Ct;let E=null;const A=new Ue;A.viewport=new re;const S=new Ue;S.viewport=new re;const v=[A,S],b=new kd;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let lt=M[Q];return lt===void 0&&(lt=new Ds,M[Q]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Q){let lt=M[Q];return lt===void 0&&(lt=new Ds,M[Q]=lt),lt.getGripSpace()},this.getHand=function(Q){let lt=M[Q];return lt===void 0&&(lt=new Ds,M[Q]=lt),lt.getHandSpace()};function O(Q){const lt=x.indexOf(Q.inputSource);if(lt===-1)return;const T=M[lt];T!==void 0&&(T.update(Q.inputSource,Q.frame,l||o),T.dispatchEvent({type:Q.type,data:Q.inputSource}))}function N(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<M.length;Q++){const lt=x[Q];lt!==null&&(x[Q]=null,M[Q].disconnect(lt))}P=null,F=null,_.reset(),t.setRenderTarget(m),d=null,h=null,f=null,r=null,y=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",N),r.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const lt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,lt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new qn(d.framebufferWidth,d.framebufferHeight,{format:Fe,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let lt=null,T=null,L=null;g.depth&&(L=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=g.stencil?Ti:vi,T=g.stencil?wi:Xn);const U={colorFormat:e.RGBA8,depthFormat:L,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(U),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new qn(h.textureWidth,h.textureHeight,{format:Fe,type:pn,depthTexture:new Tl(h.textureWidth,h.textureHeight,T,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Bt.setContext(r),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(Q){for(let lt=0;lt<Q.removed.length;lt++){const T=Q.removed[lt],L=x.indexOf(T);L>=0&&(x[L]=null,M[L].disconnect(T))}for(let lt=0;lt<Q.added.length;lt++){const T=Q.added[lt];let L=x.indexOf(T);if(L===-1){for(let z=0;z<M.length;z++)if(z>=x.length){x.push(T),L=z;break}else if(x[z]===null){x[z]=T,L=z;break}if(L===-1)break}const U=M[L];U&&U.connect(T)}}const k=new D,j=new D;function $(Q,lt,T){k.setFromMatrixPosition(lt.matrixWorld),j.setFromMatrixPosition(T.matrixWorld);const L=k.distanceTo(j),U=lt.projectionMatrix.elements,z=T.projectionMatrix.elements,V=U[14]/(U[10]-1),ut=U[14]/(U[10]+1),mt=(U[9]+1)/U[5],bt=(U[9]-1)/U[5],B=(U[8]-1)/U[0],kt=(z[8]+1)/z[0],Pt=V*B,pt=V*kt,ft=L/(-B+kt),At=ft*-B;if(lt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(At),Q.translateZ(ft),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),U[10]===-1)Q.projectionMatrix.copy(lt.projectionMatrix),Q.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const _t=V+ft,I=ut+ft,w=Pt-At,X=pt+(L-At),et=mt*ut/I*_t,ot=bt*ut/I*_t;Q.projectionMatrix.makePerspective(w,X,et,ot,_t,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function J(Q,lt){lt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(lt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let lt=Q.near,T=Q.far;_.texture!==null&&(_.depthNear>0&&(lt=_.depthNear),_.depthFar>0&&(T=_.depthFar)),b.near=S.near=A.near=lt,b.far=S.far=A.far=T,(P!==b.near||F!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,F=b.far),A.layers.mask=Q.layers.mask|2,S.layers.mask=Q.layers.mask|4,b.layers.mask=A.layers.mask|S.layers.mask;const L=Q.parent,U=b.cameras;J(b,L);for(let z=0;z<U.length;z++)J(U[z],L);U.length===2?$(b,A,S):b.projectionMatrix.copy(A.projectionMatrix),ct(Q,b,L)};function ct(Q,lt,T){T===null?Q.matrix.copy(lt.matrixWorld):(Q.matrix.copy(T.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(lt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(lt.projectionMatrix),Q.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Do*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let nt=null;function Tt(Q,lt){if(u=lt.getViewerPose(l||o),p=lt,u!==null){const T=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let L=!1;T.length!==b.cameras.length&&(b.cameras.length=0,L=!0);for(let z=0;z<T.length;z++){const V=T[z];let ut=null;if(d!==null)ut=d.getViewport(V);else{const bt=f.getViewSubImage(h,V);ut=bt.viewport,z===0&&(t.setRenderTargetTextures(y,bt.colorTexture,h.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(y))}let mt=v[z];mt===void 0&&(mt=new Ue,mt.layers.enable(z),mt.viewport=new re,v[z]=mt),mt.matrix.fromArray(V.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(V.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(ut.x,ut.y,ut.width,ut.height),z===0&&(b.matrix.copy(mt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),L===!0&&b.cameras.push(mt)}const U=r.enabledFeatures;if(U&&U.includes("depth-sensing")){const z=f.getDepthInformation(T[0]);z&&z.isValid&&z.texture&&_.init(t,z,r.renderState)}}for(let T=0;T<M.length;T++){const L=x[T],U=M[T];L!==null&&U!==void 0&&U.update(L,lt,l||o)}nt&&nt(Q,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),p=null}const Bt=new El;Bt.setAnimationLoop(Tt),this.setAnimationLoop=function(Q){nt=Q},this.dispose=function(){}}}const Bn=new we,qd=new jt;function Yd(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ml(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,y,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===be&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===be&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),M=y.envMap,x=y.envMapRotation;M&&(g.envMap.value=M,Bn.copy(x),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),g.envMapRotation.value.setFromMatrix4(qd.makeRotationFromEuler(Bn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===be&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jd(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function l(y,M){let x=r[y.id];x===void 0&&(p(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",g));const R=M.program;n.updateUBOMapping(y,R);const E=t.render.frame;s[y.id]!==E&&(h(y),s[y.id]=E)}function u(y){const M=f();y.__bindingPointIndex=M;const x=i.createBuffer(),R=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=r[y.id],x=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,A=x.length;E<A;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,b=S.length;v<b;v++){const P=S[v];if(d(P,E,v,R)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let Y=0;Y<O.length;Y++){const k=O[Y],j=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,F+N,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,N),N+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,x,R){const E=y.value,A=M+"_"+x;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const S=R[A];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return R[A]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function p(y){const M=y.uniforms;let x=0;const R=16;for(let A=0,S=M.length;A<S;A++){const v=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,P=v.length;b<P;b++){const F=v[b],O=Array.isArray(F.value)?F.value:[F.value];for(let N=0,Y=O.length;N<Y;N++){const k=O[N],j=_(k),$=x%R,J=$%j.boundary,ct=$+J;x+=J,ct!==0&&R-ct<j.storage&&(x+=R-ct),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=j.storage}}}const E=x%R;return E>0&&(x+=R-E),y.__size=x,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class $d{constructor(t={}){const{canvas:e=F0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=le,this.toneMapping=Rn,this.toneMappingExposure=1;const x=this;let R=!1,E=0,A=0,S=null,v=-1,b=null;const P=new re,F=new re;let O=null;const N=new zt(0);let Y=0,k=e.width,j=e.height,$=1,J=null,ct=null;const nt=new re(0,0,k,j),Tt=new re(0,0,k,j);let Bt=!1;const Q=new Qo;let lt=!1,T=!1;const L=new jt,U=new jt,z=new D,V=new re,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function bt(){return S===null?$:1}let B=n;function kt(C,W){return e.getContext(C,W)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Go}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",St,!1),B===null){const W="webgl2";if(B=kt(W,C),B===null)throw kt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Pt,pt,ft,At,_t,I,w,X,et,ot,H,rt,st,ht,Nt,it,yt,Rt,It,xt,Yt,Ht,$t,G;function gt(){Pt=new Qh(B),Pt.init(),Ht=new zd(B,Pt),pt=new Yh(B,Pt,t,Ht),ft=new Fd(B,Pt),pt.reverseDepthBuffer&&h&&ft.buffers.depth.setReversed(!0),At=new nf(B),_t=new Md,I=new Bd(B,Pt,ft,_t,pt,Ht,At),w=new $h(x),X=new Jh(x),et=new lu(B),$t=new Xh(B,et),ot=new tf(B,et,At,$t),H=new sf(B,ot,et,At),It=new rf(B,pt,I),it=new jh(_t),rt=new yd(x,w,X,Pt,pt,$t,it),st=new Yd(x,_t),ht=new Sd,Nt=new Cd(Pt),Rt=new Wh(x,w,X,ft,H,d,c),yt=new Ud(x,H,pt),G=new jd(B,At,pt,ft),xt=new qh(B,Pt,At),Yt=new ef(B,Pt,At),At.programs=rt.programs,x.capabilities=pt,x.extensions=Pt,x.properties=_t,x.renderLists=ht,x.shadowMap=yt,x.state=ft,x.info=At}gt();const tt=new Xd(x,B);this.xr=tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(k,j,!1))},this.getSize=function(C){return C.set(k,j)},this.setSize=function(C,W,K=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,j=W,e.width=Math.floor(C*$),e.height=Math.floor(W*$),K===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(k*$,j*$).floor()},this.setDrawingBufferSize=function(C,W,K){k=C,j=W,$=K,e.width=Math.floor(C*K),e.height=Math.floor(W*K),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,W,K,Z){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,W,K,Z),ft.viewport(P.copy(nt).multiplyScalar($).round())},this.getScissor=function(C){return C.copy(Tt)},this.setScissor=function(C,W,K,Z){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,W,K,Z),ft.scissor(F.copy(Tt).multiplyScalar($).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(C){ft.setScissorTest(Bt=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){ct=C},this.getClearColor=function(C){return C.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(C=!0,W=!0,K=!0){let Z=0;if(C){let q=!1;if(S!==null){const dt=S.texture.format;q=dt===Zo||dt===Ko||dt===$o}if(q){const dt=S.texture.type,Et=dt===pn||dt===Xn||dt===Qi||dt===wi||dt===qo||dt===Yo,Lt=Rt.getClearColor(),Dt=Rt.getClearAlpha(),Gt=Lt.r,Wt=Lt.g,Ut=Lt.b;Et?(p[0]=Gt,p[1]=Wt,p[2]=Ut,p[3]=Dt,B.clearBufferuiv(B.COLOR,0,p)):(_[0]=Gt,_[1]=Wt,_[2]=Ut,_[3]=Dt,B.clearBufferiv(B.COLOR,0,_))}else Z|=B.COLOR_BUFFER_BIT}W&&(Z|=B.DEPTH_BUFFER_BIT),K&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ht.dispose(),Nt.dispose(),_t.dispose(),w.dispose(),X.dispose(),H.dispose(),$t.dispose(),G.dispose(),rt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",pa),tt.removeEventListener("sessionend",ma),Ln.stop()};function at(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const C=At.autoReset,W=yt.enabled,K=yt.autoUpdate,Z=yt.needsUpdate,q=yt.type;gt(),At.autoReset=C,yt.enabled=W,yt.autoUpdate=K,yt.needsUpdate=Z,yt.type=q}function St(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Vt(C){const W=C.target;W.removeEventListener("dispose",Vt),ce(W)}function ce(C){ve(C),_t.remove(C)}function ve(C){const W=_t.get(C).programs;W!==void 0&&(W.forEach(function(K){rt.releaseProgram(K)}),C.isShaderMaterial&&rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,K,Z,q,dt){W===null&&(W=ut);const Et=q.isMesh&&q.matrixWorld.determinant()<0,Lt=ql(C,W,K,Z,q);ft.setMaterial(Z,Et);let Dt=K.index,Gt=1;if(Z.wireframe===!0){if(Dt=ot.getWireframeAttribute(K),Dt===void 0)return;Gt=2}const Wt=K.drawRange,Ut=K.attributes.position;let Zt=Wt.start*Gt,se=(Wt.start+Wt.count)*Gt;dt!==null&&(Zt=Math.max(Zt,dt.start*Gt),se=Math.min(se,(dt.start+dt.count)*Gt)),Dt!==null?(Zt=Math.max(Zt,0),se=Math.min(se,Dt.count)):Ut!=null&&(Zt=Math.max(Zt,0),se=Math.min(se,Ut.count));const oe=se-Zt;if(oe<0||oe===1/0)return;$t.setup(q,Z,Lt,K,Dt);let Te,te=xt;if(Dt!==null&&(Te=et.get(Dt),te=Yt,te.setIndex(Te)),q.isMesh)Z.wireframe===!0?(ft.setLineWidth(Z.wireframeLinewidth*bt()),te.setMode(B.LINES)):te.setMode(B.TRIANGLES);else if(q.isLine){let Ot=Z.linewidth;Ot===void 0&&(Ot=1),ft.setLineWidth(Ot*bt()),q.isLineSegments?te.setMode(B.LINES):q.isLineLoop?te.setMode(B.LINE_LOOP):te.setMode(B.LINE_STRIP)}else q.isPoints?te.setMode(B.POINTS):q.isSprite&&te.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)te.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))te.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ot=q._multiDrawStarts,sn=q._multiDrawCounts,ee=q._multiDrawCount,We=Dt?et.get(Dt).bytesPerElement:1,Jn=_t.get(Z).currentProgram.getUniforms();for(let Pe=0;Pe<ee;Pe++)Jn.setValue(B,"_gl_DrawID",Pe),te.render(Ot[Pe]/We,sn[Pe])}else if(q.isInstancedMesh)te.renderInstances(Zt,oe,q.count);else if(K.isInstancedBufferGeometry){const Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,sn=Math.min(K.instanceCount,Ot);te.renderInstances(Zt,oe,sn)}else te.render(Zt,oe)};function ne(C,W,K){C.transparent===!0&&C.side===Ne&&C.forceSinglePass===!1?(C.side=be,C.needsUpdate=!0,ar(C,W,K),C.side=Cn,C.needsUpdate=!0,ar(C,W,K),C.side=Ne):ar(C,W,K)}this.compile=function(C,W,K=null){K===null&&(K=C),m=Nt.get(K),m.init(W),M.push(m),K.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),C!==K&&C.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const Z=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const dt=q.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const Lt=dt[Et];ne(Lt,K,q),Z.add(Lt)}else ne(dt,K,q),Z.add(dt)}),M.pop(),m=null,Z},this.compileAsync=function(C,W,K=null){const Z=this.compile(C,W,K);return new Promise(q=>{function dt(){if(Z.forEach(function(Et){_t.get(Et).currentProgram.isReady()&&Z.delete(Et)}),Z.size===0){q(C);return}setTimeout(dt,10)}Pt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ve=null;function rn(C){Ve&&Ve(C)}function pa(){Ln.stop()}function ma(){Ln.start()}const Ln=new El;Ln.setAnimationLoop(rn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(C){Ve=C,tt.setAnimationLoop(C),C===null?Ln.stop():Ln.start()},tt.addEventListener("sessionstart",pa),tt.addEventListener("sessionend",ma),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,W,S),m=Nt.get(C,M.length),m.init(W),M.push(m),U.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(U),T=this.localClippingEnabled,lt=it.init(this.clippingPlanes,T),g=ht.get(C,y.length),g.init(),y.push(g),tt.enabled===!0&&tt.isPresenting===!0){const dt=x.xr.getDepthSensingMesh();dt!==null&&is(dt,W,-1/0,x.sortObjects)}is(C,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(J,ct),mt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,mt&&Rt.addToRenderList(g,C),this.info.render.frame++,lt===!0&&it.beginShadows();const K=m.state.shadowsArray;yt.render(K,C,W),lt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,q=g.transmissive;if(m.setupLights(),W.isArrayCamera){const dt=W.cameras;if(q.length>0)for(let Et=0,Lt=dt.length;Et<Lt;Et++){const Dt=dt[Et];_a(Z,q,C,Dt)}mt&&Rt.render(C);for(let Et=0,Lt=dt.length;Et<Lt;Et++){const Dt=dt[Et];ga(g,C,Dt,Dt.viewport)}}else q.length>0&&_a(Z,q,C,W),mt&&Rt.render(C),ga(g,C,W);S!==null&&(I.updateMultisampleRenderTarget(S),I.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(x,C,W),$t.resetDefaultState(),v=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],lt===!0&&it.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function is(C,W,K,Z){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){Z&&V.setFromMatrixPosition(C.matrixWorld).applyMatrix4(U);const Et=H.update(C),Lt=C.material;Lt.visible&&g.push(C,Et,Lt,K,V.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Q.intersectsObject(C))){const Et=H.update(C),Lt=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),V.copy(C.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),V.copy(Et.boundingSphere.center)),V.applyMatrix4(C.matrixWorld).applyMatrix4(U)),Array.isArray(Lt)){const Dt=Et.groups;for(let Gt=0,Wt=Dt.length;Gt<Wt;Gt++){const Ut=Dt[Gt],Zt=Lt[Ut.materialIndex];Zt&&Zt.visible&&g.push(C,Et,Zt,K,V.z,Ut)}}else Lt.visible&&g.push(C,Et,Lt,K,V.z,null)}}const dt=C.children;for(let Et=0,Lt=dt.length;Et<Lt;Et++)is(dt[Et],W,K,Z)}function ga(C,W,K,Z){const q=C.opaque,dt=C.transmissive,Et=C.transparent;m.setupLightsView(K),lt===!0&&it.setGlobalState(x.clippingPlanes,K),Z&&ft.viewport(P.copy(Z)),q.length>0&&or(q,W,K),dt.length>0&&or(dt,W,K),Et.length>0&&or(Et,W,K),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function _a(C,W,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new qn(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?ir:pn,minFilter:He,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const dt=m.state.transmissionRenderTarget[Z.id],Et=Z.viewport||P;dt.setSize(Et.z,Et.w);const Lt=x.getRenderTarget();x.setRenderTarget(dt),x.getClearColor(N),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),mt&&Rt.render(K);const Dt=x.toneMapping;x.toneMapping=Rn;const Gt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),lt===!0&&it.setGlobalState(x.clippingPlanes,Z),or(C,K,Z),I.updateMultisampleRenderTarget(dt),I.updateRenderTargetMipmap(dt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ut=0,Zt=W.length;Ut<Zt;Ut++){const se=W[Ut],oe=se.object,Te=se.geometry,te=se.material,Ot=se.group;if(te.side===Ne&&oe.layers.test(Z.layers)){const sn=te.side;te.side=be,te.needsUpdate=!0,xa(oe,K,Z,Te,te,Ot),te.side=sn,te.needsUpdate=!0,Wt=!0}}Wt===!0&&(I.updateMultisampleRenderTarget(dt),I.updateRenderTargetMipmap(dt))}x.setRenderTarget(Lt),x.setClearColor(N,Y),Gt!==void 0&&(Z.viewport=Gt),x.toneMapping=Dt}function or(C,W,K){const Z=W.isScene===!0?W.overrideMaterial:null;for(let q=0,dt=C.length;q<dt;q++){const Et=C[q],Lt=Et.object,Dt=Et.geometry,Gt=Z===null?Et.material:Z,Wt=Et.group;Lt.layers.test(K.layers)&&xa(Lt,W,K,Dt,Gt,Wt)}}function xa(C,W,K,Z,q,dt){C.onBeforeRender(x,W,K,Z,q,dt),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(x,W,K,Z,C,dt),q.transparent===!0&&q.side===Ne&&q.forceSinglePass===!1?(q.side=be,q.needsUpdate=!0,x.renderBufferDirect(K,W,Z,q,C,dt),q.side=Cn,q.needsUpdate=!0,x.renderBufferDirect(K,W,Z,q,C,dt),q.side=Ne):x.renderBufferDirect(K,W,Z,q,C,dt),C.onAfterRender(x,W,K,Z,q,dt)}function ar(C,W,K){W.isScene!==!0&&(W=ut);const Z=_t.get(C),q=m.state.lights,dt=m.state.shadowsArray,Et=q.state.version,Lt=rt.getParameters(C,q.state,dt,W,K),Dt=rt.getProgramCacheKey(Lt);let Gt=Z.programs;Z.environment=C.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(C.isMeshStandardMaterial?X:w).get(C.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Gt===void 0&&(C.addEventListener("dispose",Vt),Gt=new Map,Z.programs=Gt);let Wt=Gt.get(Dt);if(Wt!==void 0){if(Z.currentProgram===Wt&&Z.lightsStateVersion===Et)return ya(C,Lt),Wt}else Lt.uniforms=rt.getUniforms(C),C.onBeforeCompile(Lt,x),Wt=rt.acquireProgram(Lt,Dt),Gt.set(Dt,Wt),Z.uniforms=Lt.uniforms;const Ut=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ut.clippingPlanes=it.uniform),ya(C,Lt),Z.needsLights=jl(C),Z.lightsStateVersion=Et,Z.needsLights&&(Ut.ambientLightColor.value=q.state.ambient,Ut.lightProbe.value=q.state.probe,Ut.directionalLights.value=q.state.directional,Ut.directionalLightShadows.value=q.state.directionalShadow,Ut.spotLights.value=q.state.spot,Ut.spotLightShadows.value=q.state.spotShadow,Ut.rectAreaLights.value=q.state.rectArea,Ut.ltc_1.value=q.state.rectAreaLTC1,Ut.ltc_2.value=q.state.rectAreaLTC2,Ut.pointLights.value=q.state.point,Ut.pointLightShadows.value=q.state.pointShadow,Ut.hemisphereLights.value=q.state.hemi,Ut.directionalShadowMap.value=q.state.directionalShadowMap,Ut.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ut.spotShadowMap.value=q.state.spotShadowMap,Ut.spotLightMatrix.value=q.state.spotLightMatrix,Ut.spotLightMap.value=q.state.spotLightMap,Ut.pointShadowMap.value=q.state.pointShadowMap,Ut.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=Wt,Z.uniformsList=null,Wt}function va(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Gr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function ya(C,W){const K=_t.get(C);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function ql(C,W,K,Z,q){W.isScene!==!0&&(W=ut),I.resetTextureUnits();const dt=W.fog,Et=Z.isMeshStandardMaterial?W.environment:null,Lt=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Pi,Dt=(Z.isMeshStandardMaterial?X:w).get(Z.envMap||Et),Gt=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Wt=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ut=!!K.morphAttributes.position,Zt=!!K.morphAttributes.normal,se=!!K.morphAttributes.color;let oe=Rn;Z.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(oe=x.toneMapping);const Te=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,te=Te!==void 0?Te.length:0,Ot=_t.get(Z),sn=m.state.lights;if(lt===!0&&(T===!0||C!==b)){const ze=C===b&&Z.id===v;it.setState(Z,C,ze)}let ee=!1;Z.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==sn.state.version||Ot.outputColorSpace!==Lt||q.isBatchedMesh&&Ot.batching===!1||!q.isBatchedMesh&&Ot.batching===!0||q.isBatchedMesh&&Ot.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ot.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ot.instancing===!1||!q.isInstancedMesh&&Ot.instancing===!0||q.isSkinnedMesh&&Ot.skinning===!1||!q.isSkinnedMesh&&Ot.skinning===!0||q.isInstancedMesh&&Ot.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ot.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ot.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ot.instancingMorph===!1&&q.morphTexture!==null||Ot.envMap!==Dt||Z.fog===!0&&Ot.fog!==dt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==it.numPlanes||Ot.numIntersection!==it.numIntersection)||Ot.vertexAlphas!==Gt||Ot.vertexTangents!==Wt||Ot.morphTargets!==Ut||Ot.morphNormals!==Zt||Ot.morphColors!==se||Ot.toneMapping!==oe||Ot.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Ot.__version=Z.version);let We=Ot.currentProgram;ee===!0&&(We=ar(Z,W,q));let Jn=!1,Pe=!1,Ni=!1;const ae=We.getUniforms(),Ze=Ot.uniforms;if(ft.useProgram(We.program)&&(Jn=!0,Pe=!0,Ni=!0),Z.id!==v&&(v=Z.id,Pe=!0),Jn||b!==C){ft.buffers.depth.getReversed()?(L.copy(C.projectionMatrix),B0(L),z0(L),ae.setValue(B,"projectionMatrix",L)):ae.setValue(B,"projectionMatrix",C.projectionMatrix),ae.setValue(B,"viewMatrix",C.matrixWorldInverse);const xn=ae.map.cameraPosition;xn!==void 0&&xn.setValue(B,z.setFromMatrixPosition(C.matrixWorld)),pt.logarithmicDepthBuffer&&ae.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ae.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Pe=!0,Ni=!0)}if(q.isSkinnedMesh){ae.setOptional(B,q,"bindMatrix"),ae.setOptional(B,q,"bindMatrixInverse");const ze=q.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ae.setValue(B,"boneTexture",ze.boneTexture,I))}q.isBatchedMesh&&(ae.setOptional(B,q,"batchingTexture"),ae.setValue(B,"batchingTexture",q._matricesTexture,I),ae.setOptional(B,q,"batchingIdTexture"),ae.setValue(B,"batchingIdTexture",q._indirectTexture,I),ae.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&ae.setValue(B,"batchingColorTexture",q._colorsTexture,I));const Fi=K.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&It.update(q,K,We),(Pe||Ot.receiveShadow!==q.receiveShadow)&&(Ot.receiveShadow=q.receiveShadow,ae.setValue(B,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ze.envMap.value=Dt,Ze.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(Ze.envMapIntensity.value=W.environmentIntensity),Pe&&(ae.setValue(B,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&Yl(Ze,Ni),dt&&Z.fog===!0&&st.refreshFogUniforms(Ze,dt),st.refreshMaterialUniforms(Ze,Z,$,j,m.state.transmissionRenderTarget[C.id]),Gr.upload(B,va(Ot),Ze,I)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Gr.upload(B,va(Ot),Ze,I),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ae.setValue(B,"center",q.center),ae.setValue(B,"modelViewMatrix",q.modelViewMatrix),ae.setValue(B,"normalMatrix",q.normalMatrix),ae.setValue(B,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const ze=Z.uniformsGroups;for(let xn=0,vn=ze.length;xn<vn;xn++){const Ma=ze[xn];G.update(Ma,We),G.bind(Ma,We)}}return We}function Yl(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function jl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,W,K){_t.get(C.texture).__webglTexture=W,_t.get(C.depthTexture).__webglTexture=K;const Z=_t.get(C);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const K=_t.get(C);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,K=0){S=C,E=W,A=K;let Z=!0,q=null,dt=!1,Et=!1;if(C){const Dt=_t.get(C);if(Dt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1;else if(Dt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Dt.__hasExternalTextures)I.rebindTextures(C,_t.get(C.texture).__webglTexture,_t.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ut=C.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&_t.has(Ut)&&(C.width!==Ut.image.width||C.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const Gt=C.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Et=!0);const Wt=_t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[W])?q=Wt[W][K]:q=Wt[W],dt=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?q=_t.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?q=Wt[K]:q=Wt,P.copy(C.viewport),F.copy(C.scissor),O=C.scissorTest}else P.copy(nt).multiplyScalar($).floor(),F.copy(Tt).multiplyScalar($).floor(),O=Bt;if(ft.bindFramebuffer(B.FRAMEBUFFER,q)&&Z&&ft.drawBuffers(C,q),ft.viewport(P),ft.scissor(F),ft.setScissorTest(O),dt){const Dt=_t.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Dt.__webglTexture,K)}else if(Et){const Dt=_t.get(C.texture),Gt=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,K||0,Gt)}v=-1},this.readRenderTargetPixels=function(C,W,K,Z,q,dt,Et){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){ft.bindFramebuffer(B.FRAMEBUFFER,Lt);try{const Dt=C.texture,Gt=Dt.format,Wt=Dt.type;if(!pt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-Z&&K>=0&&K<=C.height-q&&B.readPixels(W,K,Z,q,Ht.convert(Gt),Ht.convert(Wt),dt)}finally{const Dt=S!==null?_t.get(S).__webglFramebuffer:null;ft.bindFramebuffer(B.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(C,W,K,Z,q,dt,Et){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){const Dt=C.texture,Gt=Dt.format,Wt=Dt.type;if(!pt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-Z&&K>=0&&K<=C.height-q){ft.bindFramebuffer(B.FRAMEBUFFER,Lt);const Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,dt.byteLength,B.STREAM_READ),B.readPixels(W,K,Z,q,Ht.convert(Gt),Ht.convert(Wt),0);const Zt=S!==null?_t.get(S).__webglFramebuffer:null;ft.bindFramebuffer(B.FRAMEBUFFER,Zt);const se=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await O0(B,se,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,dt),B.deleteBuffer(Ut),B.deleteSync(se),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,K=0){C.isTexture!==!0&&(Yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const Z=Math.pow(2,-K),q=Math.floor(C.image.width*Z),dt=Math.floor(C.image.height*Z),Et=W!==null?W.x:0,Lt=W!==null?W.y:0;I.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Et,Lt,q,dt),ft.unbindTexture()},this.copyTextureToTexture=function(C,W,K=null,Z=null,q=0){C.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,C=arguments[1],W=arguments[2],q=arguments[3]||0,K=null);let dt,Et,Lt,Dt,Gt,Wt,Ut,Zt,se;const oe=C.isCompressedTexture?C.mipmaps[q]:C.image;K!==null?(dt=K.max.x-K.min.x,Et=K.max.y-K.min.y,Lt=K.isBox3?K.max.z-K.min.z:1,Dt=K.min.x,Gt=K.min.y,Wt=K.isBox3?K.min.z:0):(dt=oe.width,Et=oe.height,Lt=oe.depth||1,Dt=0,Gt=0,Wt=0),Z!==null?(Ut=Z.x,Zt=Z.y,se=Z.z):(Ut=0,Zt=0,se=0);const Te=Ht.convert(W.format),te=Ht.convert(W.type);let Ot;W.isData3DTexture?(I.setTexture3D(W,0),Ot=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),Ot=B.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),Ot=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const sn=B.getParameter(B.UNPACK_ROW_LENGTH),ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),We=B.getParameter(B.UNPACK_SKIP_PIXELS),Jn=B.getParameter(B.UNPACK_SKIP_ROWS),Pe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Gt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Wt);const Ni=C.isDataArrayTexture||C.isData3DTexture,ae=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Ze=_t.get(C),Fi=_t.get(W),ze=_t.get(Ze.__renderTarget),xn=_t.get(Fi.__renderTarget);ft.bindFramebuffer(B.READ_FRAMEBUFFER,ze.__webglFramebuffer),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let vn=0;vn<Lt;vn++)Ni&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_t.get(C).__webglTexture,q,Wt+vn),C.isDepthTexture?(ae&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_t.get(W).__webglTexture,q,se+vn),B.blitFramebuffer(Dt,Gt,dt,Et,Ut,Zt,dt,Et,B.DEPTH_BUFFER_BIT,B.NEAREST)):ae?B.copyTexSubImage3D(Ot,q,Ut,Zt,se+vn,Dt,Gt,dt,Et):B.copyTexSubImage2D(Ot,q,Ut,Zt,se+vn,Dt,Gt,dt,Et);ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ae?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Ot,q,Ut,Zt,se,dt,Et,Lt,Te,te,oe.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ot,q,Ut,Zt,se,dt,Et,Lt,Te,oe.data):B.texSubImage3D(Ot,q,Ut,Zt,se,dt,Et,Lt,Te,te,oe):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,q,Ut,Zt,dt,Et,Te,te,oe.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,q,Ut,Zt,oe.width,oe.height,Te,oe.data):B.texSubImage2D(B.TEXTURE_2D,q,Ut,Zt,dt,Et,Te,te,oe);B.pixelStorei(B.UNPACK_ROW_LENGTH,sn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,We),B.pixelStorei(B.UNPACK_SKIP_ROWS,Jn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pe),q===0&&W.generateMipmaps&&B.generateMipmap(Ot),ft.unbindTexture()},this.copyTextureToTexture3D=function(C,W,K=null,Z=null,q=0){return C.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,C=arguments[2],W=arguments[3],q=arguments[4]||0),Yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,K,Z,q)},this.initRenderTarget=function(C){_t.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),ft.unbindTexture()},this.resetState=function(){E=0,A=0,S=null,ft.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Il extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new we,this.environmentIntensity=1,this.environmentRotation=new we,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zr extends _e{constructor(t=null,e=1,n=1,r,s,o,a,c,l=Oe,u=Oe,f,h){super(null,o,a,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo extends me{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const di=new jt,_c=new jt,Cr=[],xc=new $n,Kd=new jt,Gi=new Jt,Vi=new Li;class ea extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Kd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),xc.copy(t.boundingBox).applyMatrix4(di),this.boundingBox.union(xc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),Vi.copy(t.boundingSphere).applyMatrix4(di),this.boundingSphere.union(Vi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Gi.geometry=this.geometry,Gi.material=this.material,Gi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),t.ray.intersectsSphere(Vi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,di),_c.multiplyMatrices(n,di),Gi.matrixWorld=_c,Gi.raycast(t,Cr);for(let o=0,a=Cr.length;o<a;o++){const c=Cr[o];c.instanceId=s,c.object=this,e.push(c)}Cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zr(new Float32Array(r*this.count),r,this.count,jo,en));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Zd extends Kn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vc=new jt,Oo=new gl,Pr=new Li,Ir=new D;class Jd extends pe{constructor(t=new Qt,e=new Zd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(r),Pr.radius+=s,t.ray.intersectsSphere(Pr)===!1)return;vc.copy(r).invert(),Oo.copy(t.ray).applyMatrix4(vc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=h,_=d;p<_;p++){const g=l.getX(p);Ir.fromBufferAttribute(f,g),yc(Ir,g,c,r,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,_=d;p<_;p++)Ir.fromBufferAttribute(f,p),yc(Ir,p,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yc(i,t,e,n,r,s,o){const a=Oo.distanceSqToPoint(i);if(a<e){const c=new D;Oo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ui extends _e{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Ct:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],s=[],o=[],a=new D,c=new jt;for(let d=0;d<=t;d++){const p=d/t;r[d]=this.getTangentAt(p,new D)}s[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ge(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(ge(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(c.makeRotationAxis(r[p],d*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ll extends gn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ct){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qd extends Ll{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function na(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Lr=new D,Us=new na,Ns=new na,Fs=new na;class ia extends gn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Lr.subVectors(r[0],r[1]).add(r[0]),l=Lr);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Lr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Us.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,p,_,g),Ns.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,p,_,g),Fs.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(Us.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Ns.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Fs.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Us.calc(c),Ns.calc(c),Fs.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mc(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function tp(i,t){const e=1-i;return e*e*t}function ep(i,t){return 2*(1-i)*i*t}function np(i,t){return i*i*t}function Zi(i,t,e,n){return tp(i,t)+ep(i,e)+np(i,n)}function ip(i,t){const e=1-i;return e*e*e*t}function rp(i,t){const e=1-i;return 3*e*e*i*t}function sp(i,t){return 3*(1-i)*i*i*t}function op(i,t){return i*i*i*t}function Ji(i,t,e,n,r){return ip(i,t)+rp(i,e)+sp(i,n)+op(i,r)}class ap extends gn{constructor(t=new Ct,e=new Ct,n=new Ct,r=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Ct){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ji(t,r.x,s.x,o.x,a.x),Ji(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cp extends gn{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ji(t,r.x,s.x,o.x,a.x),Ji(t,r.y,s.y,o.y,a.y),Ji(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lp extends gn{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class up extends gn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hp extends gn{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Zi(t,r.x,s.x,o.x),Zi(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dl extends gn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Zi(t,r.x,s.x,o.x),Zi(t,r.y,s.y,o.y),Zi(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fp extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(Mc(a,c.x,l.x,u.x,f.x),Mc(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Ct().fromArray(r))}return this}}var dp=Object.freeze({__proto__:null,ArcCurve:Qd,CatmullRomCurve3:ia,CubicBezierCurve:ap,CubicBezierCurve3:cp,EllipseCurve:Ll,LineCurve:lp,LineCurve3:up,QuadraticBezierCurve:hp,QuadraticBezierCurve3:Dl,SplineCurve:fp});class sr extends Qt{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=ge(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/e,f=new D,h=new Ct,d=new D,p=new D,_=new D;let g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=e;y++){const M=n+y*u*r,x=Math.sin(M),R=Math.cos(M);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*x,f.y=t[E].y,f.z=t[E].x*R,o.push(f.x,f.y,f.z),h.x=y/e,h.y=E/(t.length-1),a.push(h.x,h.y);const A=c[3*E+0]*x,S=c[3*E+1],v=c[3*E+0]*R;l.push(A,S,v)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const x=M+y*t.length,R=x,E=x+t.length,A=x+t.length+1,S=x+1;s.push(R,E,S),s.push(A,S,E)}this.setIndex(s),this.setAttribute("position",new Ft(o,3)),this.setAttribute("uv",new Ft(a,2)),this.setAttribute("normal",new Ft(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.points,t.segments,t.phiStart,t.phiLength)}}class In extends Qt{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let p=0;const _=[],g=n/2;let m=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(d,2));function y(){const x=new D,R=new D;let E=0;const A=(e-t)/n;for(let S=0;S<=s;S++){const v=[],b=S/s,P=b*(e-t)+t;for(let F=0;F<=r;F++){const O=F/r,N=O*c+a,Y=Math.sin(N),k=Math.cos(N);R.x=P*Y,R.y=-b*n+g,R.z=P*k,f.push(R.x,R.y,R.z),x.set(Y,A,k).normalize(),h.push(x.x,x.y,x.z),d.push(O,1-b),v.push(p++)}_.push(v)}for(let S=0;S<r;S++)for(let v=0;v<s;v++){const b=_[v][S],P=_[v+1][S],F=_[v+1][S+1],O=_[v][S+1];(t>0||v!==0)&&(u.push(b,P,O),E+=3),(e>0||v!==s-1)&&(u.push(P,F,O),E+=3)}l.addGroup(m,E,0),m+=E}function M(x){const R=p,E=new Ct,A=new D;let S=0;const v=x===!0?t:e,b=x===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,g*b,0),h.push(0,b,0),d.push(.5,.5),p++;const P=p;for(let F=0;F<=r;F++){const N=F/r*c+a,Y=Math.cos(N),k=Math.sin(N);A.x=v*k,A.y=g*b,A.z=v*Y,f.push(A.x,A.y,A.z),h.push(0,b,0),E.x=Y*.5+.5,E.y=k*.5*b+.5,d.push(E.x,E.y),p++}for(let F=0;F<r;F++){const O=R+F,N=P+F;x===!0?u.push(N,N+1,O):u.push(N+1,N,O),S+=3}l.addGroup(m,S,x===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ra extends Qt{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new Ft(s,3)),this.setAttribute("normal",new Ft(s.slice(),3)),this.setAttribute("uv",new Ft(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new D,x=new D,R=new D;for(let E=0;E<e.length;E+=3)d(e[E+0],M),d(e[E+1],x),d(e[E+2],R),c(M,x,R,y)}function c(y,M,x,R){const E=R+1,A=[];for(let S=0;S<=E;S++){A[S]=[];const v=y.clone().lerp(x,S/E),b=M.clone().lerp(x,S/E),P=E-S;for(let F=0;F<=P;F++)F===0&&S===E?A[S][F]=v:A[S][F]=v.clone().lerp(b,F/P)}for(let S=0;S<E;S++)for(let v=0;v<2*(E-S)-1;v++){const b=Math.floor(v/2);v%2===0?(h(A[S][b+1]),h(A[S+1][b]),h(A[S][b])):(h(A[S][b+1]),h(A[S+1][b+1]),h(A[S+1][b]))}}function l(y){const M=new D;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(y),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function u(){const y=new D;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];const x=g(y)/2/Math.PI+.5,R=m(y)/Math.PI+.5;o.push(x,1-R)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){const M=o[y+0],x=o[y+2],R=o[y+4],E=Math.max(M,x,R),A=Math.min(M,x,R);E>.9&&A<.1&&(M<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function d(y,M){const x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function p(){const y=new D,M=new D,x=new D,R=new D,E=new Ct,A=new Ct,S=new Ct;for(let v=0,b=0;v<s.length;v+=9,b+=6){y.set(s[v+0],s[v+1],s[v+2]),M.set(s[v+3],s[v+4],s[v+5]),x.set(s[v+6],s[v+7],s[v+8]),E.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),S.set(o[b+4],o[b+5]),R.copy(y).add(M).add(x).divideScalar(3);const P=g(R);_(E,b+0,y,P),_(A,b+2,M,P),_(S,b+4,x,P)}}function _(y,M,x,R){R<0&&y.x===1&&(o[M]=y.x-1),x.x===0&&x.z===0&&(o[M]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.vertices,t.indices,t.radius,t.details)}}class sa extends ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sa(t.radius,t.detail)}}class oa extends Qt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let f=t;const h=(e-t)/r,d=new D,p=new Ct;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){const m=s+g/n*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}f+=h}for(let _=0;_<r;_++){const g=_*(n+1);for(let m=0;m<n;m++){const y=m+g,M=y,x=y+n+1,R=y+n+2,E=y+1;a.push(M,x,E),a.push(x,R,E)}}this.setIndex(a),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class jn extends Qt{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new D,h=new D,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const y=[],M=m/n;let x=0;m===0&&o===0?x=.5/e:m===n&&c===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const E=R/e;f.x=-t*Math.cos(r+E*s)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(r+E*s)*Math.sin(o+M*a),p.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),g.push(E+x,1-M),y.push(l++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const M=u[m][y+1],x=u[m][y],R=u[m+1][y],E=u[m+1][y+1];(m!==0||o>0)&&d.push(M,x,E),(m!==n-1||c<Math.PI)&&d.push(x,R,E)}this.setIndex(d),this.setAttribute("position",new Ft(p,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ci extends Qt{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new D,f=new D,h=new D;for(let d=0;d<=n;d++)for(let p=0;p<=r;p++){const _=p/r*s,g=d/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(p/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=r;p++){const _=(r+1)*d+p-1,g=(r+1)*(d-1)+p-1,m=(r+1)*(d-1)+p,y=(r+1)*d+p;o.push(_,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jr extends Qt{constructor(t=new Dl(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new Ct;let u=new D;const f=[],h=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(d,2));function _(){for(let M=0;M<e;M++)g(M);g(s===!1?e:0),y(),m()}function g(M){u=t.getPointAt(M/e,u);const x=o.normals[M],R=o.binormals[M];for(let E=0;E<=r;E++){const A=E/r*Math.PI*2,S=Math.sin(A),v=-Math.cos(A);c.x=v*x.x+S*R.x,c.y=v*x.y+S*R.y,c.z=v*x.z+S*R.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,f.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let x=1;x<=r;x++){const R=(r+1)*(M-1)+(x-1),E=(r+1)*M+(x-1),A=(r+1)*M+x,S=(r+1)*(M-1)+x;p.push(R,E,S),p.push(E,A,S)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=r;x++)l.x=M/e,l.y=x/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Jr(new dp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ee extends Kn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new we,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pp extends Kn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new we,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const bc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class mp{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],p=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const gp=new mp;class aa{constructor(t){this.manager=t!==void 0?t:gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}aa.DEFAULT_MATERIAL_NAME="__DEFAULT";class _p extends aa{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=bc.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=tr("img");function c(){u(),bc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){u(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class xp extends aa{constructor(t){super(t)}load(t,e,n,r){const s=new _e,o=new _p(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class ca extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vp extends ca{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Os=new jt,Sc=new D,Ec=new D;class Ul{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qo,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),Ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ec),e.updateMatrixWorld(),Os.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Os),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Os)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wc=new jt,Wi=new D,Bs=new D;class yp extends Ul{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Wi),Bs.copy(n.position),Bs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Bs),n.updateMatrixWorld(),r.makeTranslation(-Wi.x,-Wi.y,-Wi.z),wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class Bo extends ca{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new yp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mp extends Ul{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bp extends ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Mp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);class Sp extends Il{constructor(){super();const t=new mn;t.deleteAttribute("uv");const e=new Ee({side:be}),n=new Ee,r=new Bo(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Jt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Jt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Jt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Jt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Jt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new Jt(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const f=new Jt(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const h=new Jt(t,pi(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const d=new Jt(t,pi(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const p=new Jt(t,pi(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const _=new Jt(t,pi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new Jt(t,pi(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const m=new Jt(t,pi(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function pi(i){const t=new Ai;return t.color.setScalar(i),t}function Wn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function xe(i,t=4,e=4){const n=Wn(i),r=[];for(let f=0;f<e;f++){const h=t<<f,d=new Float32Array(h*h);for(let p=0;p<d.length;p++)d[p]=n();r.push({P:h,g:d})}const s=4096,o=new Map,a=new Map;function c(f,h,d){let p=f.get(h);if(p)return p;p=new Float64Array(r.length*3);for(let _=0;_<r.length;_++){const g=r[_].P,m=h*g,y=Math.floor(m),M=m-y,x=(y%g+g)%g,R=(x+1)%g,E=_*3;p[E]=d?x*g:x,p[E+1]=d?R*g:R,p[E+2]=M*M*(3-2*M)}return f.size>=s&&f.delete(f.keys().next().value),f.set(h,p),p}let l=0,u=.5;for(let f=0;f<r.length;f++)l+=u,u*=.5;return(f,h)=>{const d=c(o,f,!1),p=c(a,h,!0);let _=0,g=.5;for(let m=0;m<r.length;m++){const y=r[m].g,M=m*3,x=d[M],R=d[M+1],E=d[M+2],A=p[M],S=p[M+1],v=p[M+2],b=y[A+x],P=y[A+R],F=y[S+x],O=y[S+R];_+=g*(b+(P-b)*E+(F-b)*v+(b-P-F+O)*E*v),g*=.5}return _/l}}function nn(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function _n(i,t=!0,e=!0){const n=new Ui(i);return t&&(n.colorSpace=le),e&&(n.wrapS=n.wrapT=Pn),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=He,n}function Zn(i,t){const e=i.getContext("2d"),n=e.createImageData(i.width,i.height),r=n.data,s=[0,0,0];for(let o=0;o<i.height;o++)for(let a=0;a<i.width;a++){t(a/i.width,o/i.height,s,a,o);const c=(o*i.width+a)*4;r[c]=s[0],r[c+1]=s[1],r[c+2]=s[2],r[c+3]=255}return e.putImageData(n,0,0),e}const Ke=(i,t=0,e=255)=>i<t?t:i>e?e:i;function zs(i,t,e,n={}){const r=n.size||512,s=nn(r,r),o=xe(i,2,4),a=xe(i+7,8,3),c=xe(i+13,3,4),l=n.rings||9;return Zn(s,(u,f,h)=>{const d=o(u*.5,f)*3;let p=Math.sin((f*l+d)*Math.PI*2);p=Math.pow(Math.abs(p),.35);const _=a(u*.25,f*8),g=a(u*2,f*32%1);let m=.55*p+.3*_+.15*g;m=m*(.85+.3*c(u,f));for(let y=0;y<3;y++)h[y]=Ke(e[y]+(t[y]-e[y])*m)}),_n(s)}function Ep(i){const e=nn(1024,1024),n=Wn(i),r=8,s=[];for(let f=0;f<r;f++)s.push({off:n(),tone:.78+n()*.35,hue:n(),len:.45+n()*.3});const o=xe(i+3,2,4),a=xe(i+9,8,3),c=xe(i+11,3,4),l=[150,98,58],u=[78,46,24];return Zn(e,(f,h,d)=>{const p=Math.floor(h*r),_=s[p],g=h*r-p,m=(f+_.off)%1,y=Math.floor(m/_.len*2),M=m/_.len*2%1,x=_.tone*(y%2?.92:1.04)*(.96+.08*Math.sin(y*12.9+p)),R=o(f,h*.5+p*.13)*2.5;let E=Math.abs(Math.sin((g*3+R+y)*Math.PI*2));E=Math.pow(E,.4);const A=a(f*.5,h*4);let S=(.55*E+.45*A)*x;const v=c(f,h);S*=.9+.2*v;let b=Math.min(g,1-g)*64,P=Math.min(M,1-M)*260;const F=Math.min(1,b,P);for(let O=0;O<3;O++)d[O]=Ke((u[O]+(l[O]-u[O])*S)*(.25+.75*F)+(_.hue-.5)*(O===0?12:O===1?6:0))}),_n(e)}function Tc(i,t){const n=nn(512,512),r=xe(i,4,5),s=xe(i+1,16,2);return Zn(n,(o,a,c)=>{const l=r(o,a),u=s(o,a),f=.88+.16*l+.05*u;c[0]=Ke(t[0]*f),c[1]=Ke(t[1]*f),c[2]=Ke(t[2]*(f-.02))}),_n(n)}function wp(i){const e=nn(512,512),n=xe(i,6,5),r=xe(i+4,24,2);return Zn(e,(s,o,a)=>{const c=Math.floor(o*4),l=(s+c%2*.5)%1,u=o*4-c,f=l*2-Math.floor(l*2),h=Math.min(1,Math.min(u,1-u)*40,Math.min(f,1-f)*60),d=(.8+.25*n(s,o)+.08*r(s,o))*(.55+.45*h);a[0]=Ke(196*d),a[1]=Ke(178*d),a[2]=Ke(150*d)}),_n(e)}function Ac(i,t){const n=nn(512,512),r=xe(i,64,2),s=xe(i+2,8,4),o=xe(i+5,3,4);return Zn(n,(a,c,l)=>{const u=r(a,c),h=Math.abs(s(a,c)-.5)<.015?.7:1,d=Math.max(0,o(a,c)-.52)*3.2,p=(.82+.3*u)*h;for(let _=0;_<3;_++){const g=t[_]+(_===0?70:_===1?52:36);l[_]=Ke((t[_]*(1-d)+g*d)*p)}}),_n(n)}function ks(i,t,e){const r=nn(256,256),s=xe(i,8,3);return Zn(r,(o,a,c,l,u)=>{const f=((l+u)%4<2?1:.92)*(l%2?1:.96),h=e&&Math.sin(o*Math.PI*2*6)>.6?.82:1,d=f*h*(.9+.15*s(o,a));for(let p=0;p<3;p++)c[p]=Ke(t[p]*d)}),_n(r)}function Tp(i){const n=nn(512,768),r=n.getContext("2d");r.fillStyle="#7a2a22",r.fillRect(0,0,512,768);const s=(f,h,d)=>{r.strokeStyle=d,r.lineWidth=h,r.strokeRect(f,f,512-f*2,768-f*2)};s(14,22,"#2a2440"),s(34,6,"#c9a46a"),s(52,26,"#3c4a5c"),s(70,5,"#c9a46a"),r.fillStyle="#d2b07a";for(let f=0;f<26;f++){const h=f/26,d=[[h*512,52],[460,h*768],[512-h*512,716],[52,768-h*768]];for(const[p,_]of d)r.save(),r.translate(p,_),r.rotate(Math.PI/4),r.fillRect(-5,-5,10,10),r.restore()}for(let f=110;f<668;f+=48)for(let h=110;h<412;h+=48)r.fillStyle=(h+f)%96===0?"#2f3a52":"#a8742f",r.save(),r.translate(h,f),r.rotate(Math.PI/4),r.fillRect(-7,-7,14,14),r.restore(),r.fillStyle="#e0c590",r.fillRect(h-2,f-2,4,4);r.save(),r.translate(512/2,768/2);const o=[[150,"#2a2440"],[130,"#c9a46a"],[118,"#3c4a5c"],[86,"#8e3a2a"],[60,"#d8bd85"],[36,"#2a2440"]];for(const[f,h]of o)r.fillStyle=h,r.beginPath(),r.ellipse(0,0,f*.75,f,0,0,Math.PI*2),r.fill();r.restore();const a=r.getImageData(0,0,512,768),c=xe(i+3,4,4),l=xe(i+5,64,1);for(let f=0;f<768;f++)for(let h=0;h<512;h++){const d=(f*512+h)*4,p=.78+.28*c(h/512,f/768)+.08*l(h/512,f/768),_=Math.max(0,c(h/512+.3,f/768)-.58)*1.6;for(let g=0;g<3;g++)a.data[d+g]=Ke(a.data[d+g]*p*(1-_)+150*_)}return r.putImageData(a,0,0),_n(n,!0,!1)}function Ap(i){const n=nn(512,256),r=n.getContext("2d"),s=Wn(i),o=xe(i,16,3);Zn(n,(l,u,f)=>{const h=200+40*o(l,u);f[0]=f[1]=f[2]=h});const a="#d9a94a",c=32;for(let l=0;l<8;l++){const u=l*c;r.save(),r.beginPath(),r.rect(u,0,c,256),r.clip();const f=r.createLinearGradient(u,0,u+c,0);if(f.addColorStop(0,"rgba(0,0,0,0.35)"),f.addColorStop(.2,"rgba(0,0,0,0)"),f.addColorStop(.8,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(0,0,0,0.35)"),r.fillStyle=f,r.fillRect(u,0,c,256),r.fillStyle=a,l===0&&(r.fillRect(u,14,c,2),r.fillRect(u,240,c,2)),l===1){for(const h of[40,90,140,190])r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(u,h,c,6),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(u,h,c,2);r.fillStyle="#2a1a14",r.fillRect(u+3,52,c-6,30),r.fillStyle=a;for(let h=0;h<3;h++)r.fillRect(u+7,60+h*7,c-14-s()*6,2)}if(l===2){for(let h=0;h<6;h++)r.fillRect(u+8,50+h*9,c-16-s()*8,3);r.fillRect(u,226,c,6)}if(l===3){r.fillStyle="rgba(0,0,0,0.5)",r.fillRect(u,0,c,34),r.fillRect(u,222,c,34),r.fillStyle=a,r.fillRect(u,34,c,2),r.fillRect(u,220,c,2);for(let h=0;h<4;h++)r.fillRect(u+9,80+h*8,c-18,2)}if(l===4){r.fillStyle="rgba(255,255,255,0.25)",r.fillRect(u,0,c,256),r.fillStyle="rgba(20,20,20,0.75)";for(let h=0;h<10;h++)r.fillRect(u+12,40+h*12,3+s()*4,7)}if(l===5){for(const h of[8,16,24,230,238,246])r.fillRect(u,h,c,2);for(let h=0;h<5;h++)r.beginPath(),r.arc(u+c/2,60+h*30,3,0,Math.PI*2),r.fill();r.fillStyle="#1d1d1d",r.fillRect(u+4,34,c-8,18),r.fillStyle=a,r.fillRect(u+8,41,c-16,3)}if(l===6){r.fillStyle="rgba(255,255,255,0.3)";for(let h=0;h<40;h++)r.fillRect(u+s()*c,s()<.5?s()*30:256-s()*30,2+s()*4,1+s()*2);r.fillStyle=a,r.fillRect(u+10,70,c-20,3)}l===7&&(r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(u,20,c,10),r.fillRect(u,226,c,10),r.fillStyle="rgba(240,235,220,1)",r.fillRect(u+5,60,c-10,34),r.fillStyle="rgba(40,30,20,0.8)",r.fillRect(u+8,70,c-16,2),r.fillRect(u+8,78,c-18,2)),r.restore()}for(let l=256;l<384;l++){const u=215+(Math.sin(l*2.7)*.5+.5)*30*s();r.fillStyle=`rgb(${u},${u},${u-4})`,r.fillRect(l,0,1,256)}return _n(n,!0,!1)}function Rp(i){const e=nn(512,512),n=e.getContext("2d"),r=Wn(i);return[["#d8b27a","#8a6a4a","#4b5a3a","#2e3a2a"],["#9fb3c0","#6a7a6a","#3e4a3a","#22281e"],["#e8c28a","#b07a4a","#5a3a2a","#2a1e18"],["#7a8aa0","#5a6058","#3a3a30","#1e1e18"]].forEach((o,a)=>{const c=a%2*256,l=Math.floor(a/2)*256,u=n.createLinearGradient(0,l,0,l+256);u.addColorStop(0,o[0]),u.addColorStop(.55,o[1]),u.addColorStop(1,o[3]),n.fillStyle=u,n.fillRect(c,l,256,256);for(let h=0;h<3;h++){n.fillStyle=o[1+h],n.beginPath(),n.moveTo(c,l+256);const d=120+h*45;for(let p=0;p<=16;p++)n.lineTo(c+p*16,l+d+Math.sin(p*.7+h*2+a)*18+r()*10);n.lineTo(c+256,l+256),n.fill()}a===2&&(n.fillStyle="rgba(255,230,170,0.8)",n.beginPath(),n.arc(c+180,l+90,18,0,7),n.fill());const f=n.createRadialGradient(c+128,l+128,40,c+128,l+128,190);f.addColorStop(0,"rgba(60,40,10,0)"),f.addColorStop(1,"rgba(40,25,5,0.55)"),n.fillStyle=f,n.fillRect(c,l,256,256)}),_n(e,!0,!1)}function Cp(){const i=nn(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Ui(i)}function Qr(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new Qt;let l=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(const u in s){const f=Rc(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][h]);const p=Rc(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function Rc(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new me(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let h=0,d=u.count;h<d;h++)for(let p=0;p<e;p++){const _=u.getComponent(h,p);a.setComponent(h+f,p,_)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}function Pp(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),c={},l={},u=[],f=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let y=0,M=a.length;y<M;y++){const x=a[y],R=i.attributes[x];c[x]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const E=i.morphAttributes[x];E&&(l[x]||(l[x]=[]),E.forEach((A,S)=>{const v=new A.array.constructor(A.count*A.itemSize);l[x][S]=new A.constructor(v,A.itemSize,A.normalized)}))}const d=t*.5,p=Math.log10(1/t),_=Math.pow(10,p),g=d*_;for(let y=0;y<s;y++){const M=n?n.getX(y):y;let x="";for(let R=0,E=a.length;R<E;R++){const A=a[R],S=i.getAttribute(A),v=S.itemSize;for(let b=0;b<v;b++)x+=`${~~(S[f[b]](M)*_+g)},`}if(x in e)u.push(e[x]);else{for(let R=0,E=a.length;R<E;R++){const A=a[R],S=i.getAttribute(A),v=i.morphAttributes[A],b=S.itemSize,P=c[A],F=l[A];for(let O=0;O<b;O++){const N=f[O],Y=h[O];if(P[Y](o,S[N](M)),v)for(let k=0,j=v.length;k<j;k++)F[k][Y](o,v[k][N](M))}}e[x]=o,u.push(o),o++}}const m=i.clone();for(const y in i.attributes){const M=c[y];if(m.setAttribute(y,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),y in l)for(let x=0;x<l[y].length;x++){const R=l[y][x];m.morphAttributes[y][x]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return m.setIndex(u),m}function Ip(i,t,e,n,{bulge:r=0,dish:s=0,grain:o=!1}={}){const a=[i/2,t/2,e/2],c=Math.min(n,...a),l=[],u=[],f=[],h=[],d=[[2,1,0,1],[2,1,0,-1],[0,2,1,1],[0,2,1,-1],[0,1,2,1],[0,1,2,-1]],p=g=>o?[-a[g],-a[g]+c,0,a[g]-c,a[g]]:[-a[g],-a[g]+c*.3,-a[g]+c,0,a[g]-c,a[g]-c*.3,a[g]];for(const[g,m,y,M]of d){const x=p(g),R=p(m),E=l.length/3;for(let A=0;A<R.length;A++)for(let S=0;S<x.length;S++){const v=[0,0,0];v[g]=x[S],v[m]=R[A],v[y]=M*a[y];const b=v.map((N,Y)=>Math.max(-a[Y]+c,Math.min(a[Y]-c,N))),P=new D(...v.map((N,Y)=>N-b[Y])).normalize(),F=b.map((N,Y)=>N+P.getComponent(Y)*c);if(y===1&&M===1){const N=F[0]/a[0],Y=F[2]/a[2];F[1]+=r*Math.max(0,1-N*N)*Math.max(0,1-Y*Y)-s*Math.exp(-5*N*N-7*(Y+.08)**2)}l.push(...F),u.push(...P.toArray());const O=a.indexOf(Math.max(...a));o?f.push(F[O]/.75+.5,F[O===g?m:g]/.18+.5):f.push(S/(x.length-1),A/(R.length-1))}for(let A=0;A<R.length-1;A++)for(let S=0;S<x.length-1;S++){const v=x.length,b=E+A*v+S,P=new D;P.setComponent(g,1);const F=new D;F.setComponent(m,1),P.cross(F).getComponent(y)*M>0?h.push(b,b+1,b+v+1,b,b+v+1,b+v):h.push(b,b+v+1,b+1,b,b+v,b+v+1)}}const _=new Qt;return _.setAttribute("position",new Ft(l,3)),_.setAttribute("normal",new Ft(u,3)),_.setAttribute("uv",new Ft(f,2)),_.setIndex(h),(r||s)&&_.computeVertexNormals(),_}function Lp(i,t,e=28,n=6,r=!1){const s=new ia(i.map(o=>new D(...o)),r,"centripetal");return new Jr(s,e,t,n,r)}function Hs(i,t,e,n=0,r=.05){const s=[];for(const[o,a,c]of[[i/2-r,t/2-r,0],[-i/2+r,t/2-r,Math.PI/2],[-i/2+r,-t/2+r,Math.PI],[i/2-r,-t/2+r,Math.PI*1.5]])for(let l=0;l<=4;l++){const u=c+l/4*Math.PI/2;s.push([o+Math.cos(u)*r,e,n+a+Math.sin(u)*r])}return s}function Cc(i,t=!1){const e=t?[[0,0,-.338,.033],[.1,.1,-.333,.036],[.2,.21,-.314,.042],[.3,.35,-.3,.052]]:[[0,0,.326,.038],[.1,.085,.319,.037],[.2,.18,.295,.043],[.3,.35,.285,.057]],n=[],r=[],s=[],o=[[-1,-.76],[-.76,-1],[.76,-1],[1,-.76],[1,.76],[.76,1],[-.76,1],[-1,.76]];for(let c=0;c<e.length;c++){const[,l,u,f]=e[c],h=i*(.313+(t?0:.018*(1-c/3)));for(let d=0;d<8;d++)if(n.push(h+o[d][0]*f/2,l,u+o[d][1]*f/2),r.push(l/.65,d/8),c<3){const p=c*8+d,_=c*8+(d+1)%8;s.push(p,_+8,_,p,p+8,_+8)}}for(let c=1;c<7;c++)s.push(0,c,c+1,24,24+c+1,24+c);const a=new Qt;return a.setAttribute("position",new Ft(n,3)),a.setAttribute("uv",new Ft(r,2)),a.setIndex(s),a.computeVertexNormals(),a}function Dp(i){const t=[[.74,.318,-.3,-.12,.06],[.84,.345,-.327,-.06,.063],[1.02,.365,-.352,-.105,.061],[1.18,.341,-.373,-.205,.05],[1.225,.314,-.377,-.287,.025]],e=[],n=[],r=[];for(let o=0;o<t.length;o++){const[a,c,l,u,f]=t[o];for(let h=0;h<12;h++){const d=h/12*Math.PI*2;if(e.push(i*(c+Math.cos(d)*f/2),a,(l+u)/2+Math.sin(d)*(u-l)/2),n.push(h/12,o/(t.length-1)),o<t.length-1){const p=o*12+h,_=o*12+(h+1)%12;i>0?r.push(p,p+12,_,_,p+12,_+12):r.push(p,_,p+12,_,_+12,p+12)}}}for(let o=1;o<11;o++)i>0?r.push(0,o,o+1,48,48+o+1,48+o):r.push(0,o+1,o,48,48+o,48+o+1);const s=new Qt;return s.setAttribute("position",new Ft(e,3)),s.setAttribute("uv",new Ft(n,2)),s.setIndex(r),s.computeVertexNormals(),s}const De=256,Gs=i=>Math.max(0,Math.min(255,Math.round(i)));function $i(i,t,e){let n=Math.imul(i+131*e,374761393)^Math.imul(t+e,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function Dr(i,t,e){const n=Math.floor(i),r=Math.floor(t),s=i-n,o=t-r,a=s*s*(3-2*s),c=o*o*(3-2*o);return($i(n,r,e)*(1-a)+$i(n+1,r,e)*a)*(1-c)+($i(n,r+1,e)*(1-a)+$i(n+1,r+1,e)*a)*c}function Ur(i,t,e){const n=new Uint8Array(De*De*4);for(let s=0;s<De;s++)for(let o=0;o<De;o++){const a=t(o,s),c=(s*De+o)*4;n[c]=Gs(a[0]),n[c+1]=Gs(a[1]),n[c+2]=Gs(a[2]),n[c+3]=255}const r=new Zr(n,De,De,Fe);return r.name=`reading-chairs/${i}`,r.colorSpace=e?le:Qe,r.wrapS=r.wrapT=Pn,r.magFilter=Ce,r.minFilter=He,r.generateMipmaps=!0,r.needsUpdate=!0,r.addEventListener("dispose",()=>{r.image=null}),r}function Up(){const i=Ur("leather-patina",(o,a)=>{const c=o/(De-1),l=a/(De-1),u=Math.exp(-Math.min(c,1-c,l,1-l)*20),f=Dr(o/48,a/48,17)-.5,h=Dr(o/2,a/2,71)-.5,d=207+f*17+h*9+u*18;return[d+5,d+1,d-5]},!0),t=Ur("leather-physical",(o,a)=>{const c=Dr(o/2.2,a/2.2,71),l=$i(o,a,41),u=Math.sin(a*.16+Dr(o/31,a/40,24)*6)*.04;return[117+c*28+l*9+u*30,180+c*27,128]},!1),e=Ur("walnut-grain",(o,a)=>{const c=o/De*Math.PI*2,l=a/De*Math.PI*2,u=l*18+.7*Math.sin(c)+.18*Math.sin(3*c+l),f=Math.sin(u)*5+Math.sin(u*2+.2)*2,h=Math.pow(.5+.5*Math.sin(l*77+.18*Math.sin(2*c)),12)*7,d=Math.sin(l*3+.3*Math.sin(c))*5;return[101+f+d-h,66+f*.68+d*.6-h,41+f*.44+d*.4-h]},!0),n=Ur("walnut-physical",(o,a)=>{const c=o/De*Math.PI*2,l=a/De*Math.PI*2,u=Math.sin(l*77+.18*Math.sin(c*2));return[125+u*7,181+u*8,128]},!1),r=(o,a)=>{const c=new Ee({name:`reading-chairs/${o}`,color:a,map:i,bumpMap:t,bumpScale:.0012,roughnessMap:t,roughness:.86,metalness:0});return c.userData.readingChair=!0,c},s={oxblood:r("oxblood",8736836),tobacco:r("tobacco",10056782),wood:new Ee({name:"reading-chairs/walnut",map:e,bumpMap:n,bumpScale:65e-5,roughnessMap:n,roughness:.78}),thread:new Ee({name:"reading-chairs/waxed-thread",color:9204308,roughness:.94}),brass:new Ee({name:"reading-chairs/aged-brass",color:8479549,metalness:.72,roughness:.57})};for(const o of Object.values(s))o.userData.readingChair=!0;return s.thread.userData.noShadow=!0,s.brass.userData.noShadow=!0,s}const Vs=new WeakMap;function Np(i,t="oxblood"){if(!["oxblood","tobacco"].includes(t))throw new Error(`Unknown reading chair finish: ${t}`);let e=Vs.get(i.b);if(!e){e=Up(),Vs.set(i.b,e);for(const l of Object.values(e))l.addEventListener("dispose",()=>Vs.delete(i.b))}const n=e[t],r=(l,u,f=0,h=0,d=0,p=0,_=0,g=0)=>i.geo(l,u,f,h,d,p,_,g),s=(l,u,f,h,d={},p=[0,0,0])=>r(l,Ip(...u,f,d),...h,...p),o=(l,u,f,h=28,d=!1)=>r(l,Lp(u,f,h,6,d));for(const l of[-1,1])r(e.wood,Cc(l)),r(e.wood,Cc(l,!0)),s(e.wood,[.06,.102,.635],.008,[l*.315,.339,-.005],{grain:!0});s(e.wood,[.63,.11,.065],.009,[0,.34,.286],{grain:!0}),s(e.wood,[.63,.092,.055],.007,[0,.335,-.304],{grain:!0}),s(n,[.625,.092,.6],.023,[0,.39,-.005]),s(n,[.619,.128,.564],.037,[0,.468,.023],{bulge:.011,dish:.014}),o(n,Hs(.62,.565,.482,.023,.037),.0033,48,!0),o(n,Hs(.611,.556,.428,.023,.037),.0024,48,!0);for(let l=0;l<31;l++){const u=-.259+l*.0172,f=new In(85e-5,85e-5,.006,4);r(e.thread,f,u,.462,.3054,0,0,Math.PI/2)}s(n,[.674,.72,.112],.046,[0,.854,-.321],{},[-.1,0,0]),s(n,[.559,.555,.075],.035,[0,.877,-.251],{},[-.1,0,0]),s(n,[.526,.116,.099],.043,[0,.589,-.228],{},[-.1,0,0]),o(n,[[-.242,.629,-.184],[-.27,.671,-.184],[-.27,1.082,-.226],[-.229,1.143,-.237],[0,1.151,-.238],[.229,1.143,-.237],[.27,1.082,-.226],[.27,.671,-.184],[.242,.629,-.184],[0,.619,-.184]],.0028,64,!0);const c=[[-.322,.365,-.339],[-.342,.75,-.36],[-.341,1.14,-.392],[-.302,1.203,-.394],[-.18,1.221,-.394],[0,1.227,-.394],[.18,1.221,-.394],[.302,1.203,-.394],[.341,1.14,-.392],[.342,.75,-.36],[.322,.365,-.339]];o(e.wood,c,.014,72);for(const l of[-1,1]){r(n,Dp(l)),s(e.wood,[.039,.316,.052],.007,[l*.355,.523,.251],{grain:!0},[0,0,l*-.038]),s(e.wood,[.04,.328,.047],.007,[l*.347,.525,-.208],{grain:!0},[-.08,0,0]),s(e.wood,[.112,.048,.586],.019,[l*.363,.684,.012],{grain:!0},[.035,0,0]),s(n,[.131,.1,.589],.043,[l*.363,.743,.018],{},[.035,0,0]);const u=Hs(.132,.59,.743,.018,.043).map(([f,h,d])=>[f+l*.363,h-(d-.018)*.035,d]);o(n,u,.0026,40,!0),o(n,[[l*.318,.751,-.123],[l*.345,.843,-.063],[l*.365,1.021,-.108],[l*.341,1.18,-.208],[l*.314,1.224,-.287]],.003,32);for(let f=0;f<7;f++){const h=new jn(.0035,6,4);h.scale(.42,1,1),r(e.brass,h,l*.314,.398,-.225+f*.071)}for(const f of[.26,-.28]){const h=new In(.0045,.0045,.0015,8);r(e.wood,h,l*.346,.34,f,0,0,Math.PI/2)}}}const Nl=Object.freeze({origin:Object.freeze([-5.6,4.2,-8.85]),size:Object.freeze([1.4,.8,.7]),worktopY:.785,paper:Object.freeze({center:Object.freeze([.05,.787,.1]),yaw:.2}),notes:Object.freeze({x0:-.29,x1:-.13,z0:-.025,z1:.265,y:.7848}),legacyRandomDraws:20});function Fp(i){let t=i>>>0;return()=>(t=Math.imul(1664525,t)+1013904223|0,(t>>>0)/4294967296)}function Pc(i,t,e,n,r=!1){const s=new Zr(i,t,e,Fe);return s.name=n,s.wrapS=s.wrapT=Pn,s.magFilter=Ce,s.minFilter=He,s.generateMipmaps=!0,r&&(s.colorSpace=le),s.needsUpdate=!0,s}function Op(){const i=Fp(1463897166),t=512,e=256,n=new Uint8Array(t*e*4);for(let c=0;c<e;c++)for(let l=0;l<t;l++){const u=l/t*Math.PI*2,f=c/e*Math.PI*2,h=.32*Math.sin(u)+.1*Math.sin(2*u+3*f),d=Math.sin(f*27+h*4),p=Math.pow(Math.max(0,Math.sin(f*81+h*8)),9),_=Math.sin(f*3+.6*Math.sin(u)),g=1+.095*d-.065*p+.11*_+(i()-.5)*.025,m=(c*t+l)*4;n[m]=Math.round(119*g),n[m+1]=Math.round(75*g),n[m+2]=Math.round(43*g),n[m+3]=255}const r=Pc(n,t,e,"Desk • quarter-cut walnut",!0),s=new Uint8Array(128*128*4);for(let c=0;c<s.length;c+=4){const l=Math.round(124+(i()-.5)*25);s[c]=s[c+1]=s[c+2]=l,s[c+3]=255}const o=Pc(s,128,128,"Desk • fine hide grain");o.repeat.set(6,2);const a=(c,l)=>{const u=new Ee(l);return u.name=`Desk • ${c}`,u.userData.upstairsDesk=!0,u};return{walnut:a("walnut",{map:r,bumpMap:r,bumpScale:3e-4,roughness:.43}),recess:a("recessed walnut",{map:r,color:10652791,bumpMap:r,bumpScale:25e-5,roughness:.53}),brass:a("aged brass",{color:12163936,metalness:.83,roughness:.34}),leather:a("bottle-green hide",{color:2704442,bumpMap:o,bumpScale:16e-5,roughness:.74}),ink:a("ebonite and ink",{color:1056288,metalness:.13,roughness:.26}),cedar:a("endgrain and linen",{color:12953717,roughness:.8})}}function Bp(i,t,e,n=.002){const r=[i/2,t/2,e/2],s=Math.min(n,...r.map(l=>l*.45)),o=[];function a(l,u){const f=new D(...l[0]),h=new D(...l[1]),d=new D(...l[2]);h.sub(f).cross(d.sub(f)).dot(new D(...u))<0&&l.reverse();for(let p=1;p<l.length-1;p++)o.push(...l[0],...l[p],...l[p+1])}for(let l=0;l<3;l++)for(const u of[-1,1]){const f=(l+1)%3,h=(l+2)%3,d=[0,0,0];d[l]=u,a([[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,_])=>{const g=[0,0,0];return g[l]=u*r[l],g[f]=p*(r[f]-s),g[h]=_*(r[h]-s),g}),d)}for(let l=0;l<3;l++)for(let u=l+1;u<3;u++){const f=3-l-u;for(const h of[-1,1])for(const d of[-1,1]){const p=[0,0,0];p[l]=h,p[u]=d,a([[0,-1],[0,1],[1,1],[1,-1]].map(([_,g])=>{const m=[0,0,0];return m[l]=h*(r[l]-_*s),m[u]=d*(r[u]-(1-_)*s),m[f]=g*(r[f]-s),m}),p)}}for(const l of[-1,1])for(const u of[-1,1])for(const f of[-1,1]){const h=[l,u,f];a([0,1,2].map(d=>r.map((p,_)=>h[_]*(p-(_===d?0:s)))),h)}const c=new Qt;return c.setAttribute("position",new Ft(o,3)),c.computeVertexNormals(),c}function zp(i,t,e){const n=i.attributes.position,r=i.attributes.normal,s=new Float32Array(n.count*2),o={x:0,y:1,z:2}[t];for(let a=0;a<n.count;a++){const c=[n.getX(a),n.getY(a),n.getZ(a)],l=[Math.abs(r.getX(a)),Math.abs(r.getY(a)),Math.abs(r.getZ(a))],u=l.indexOf(Math.max(...l)),f=u===o?(o+1)%3:o,h=[0,1,2].find(d=>d!==f&&d!==u);s[a*2]=c[f]/.7+e,s[a*2+1]=c[h]/.2+e*.37}return i.setAttribute("uv",new me(s,2)),i}function kp(i){const t=i.attributes.position,e=[],n=new D,r=new D,s=new D;for(let a=0;a<t.count;a+=3)n.fromBufferAttribute(t,a),r.fromBufferAttribute(t,a+1),s.fromBufferAttribute(t,a+2),r.sub(n).cross(s.sub(n)).lengthSq()>4e-24&&e.push(a,a+1,a+2);if(e.length===t.count)return i;const o=new Qt;for(const[a,c]of Object.entries(i.attributes)){const l=new Float32Array(e.length*c.itemSize);for(let u=0;u<e.length;u++)for(let f=0;f<c.itemSize;f++)l[u*c.itemSize+f]=c.array[e[u]*c.itemSize+f];o.setAttribute(a,new me(l,c.itemSize))}return i.dispose(),o}function Hp(){const i=Op(),t=new Map,e=[];let n=0;function r(h,d,p,_,g,m=[0,0,0],y="x",M=h){let x=d;x.index&&(x=d.toNonIndexed(),d.dispose()),x=kp(x),x.clearGroups(),zp(x,y,n+=.137);const R=new jt().makeRotationFromEuler(new we(...m));R.setPosition(p,_,g),x.applyMatrix4(R),x.computeBoundingBox(),e.push({name:M,material:h,triangles:x.attributes.position.count/3,bounds:[x.boundingBox.min.toArray(),x.boundingBox.max.toArray()]}),t.has(h)||t.set(h,[]),t.get(h).push(x)}const s=(h,d,p,_,g,m,y,M=.002,x="x",R=h,E)=>r(h,Bp(d,p,_,M),g,m,y,E,x,R),o=(h,d,p,_,g,m,y,M=16,x,R=h)=>r(h,new In(d,p,_,M),g,m,y,x,"y",R),a=(h,d,p,_,g,m,y,M=h,x=Math.PI*2)=>r(h,new Ci(d,p,5,20,x),_,g,m,y,"x",M);for(const h of[-1,1]){const d=h*.5;s("recess",.344,.642,.602,d,.379,-.005,.003,"y","pedestal carcass"),s("walnut",.356,.032,.622,d,.026,-.004,.003,"x","plinth foot"),s("walnut",.348,.02,.614,d,.05,-.004,.002,"x","plinth bevel"),s("walnut",.352,.029,.626,d,.7055,-.004,.002,"x","pedestal crown rail");for(const p of[-1,1]){s("walnut",.024,.622,.027,d+p*.164,.376,.305,.0015,"y","front stile");const _=d+p*.176;s("walnut",.006,.474,.432,_,.368,-.005,.001,"y","side field");for(const g of[-.267,.257])s("walnut",.01,.602,.028,_,.373,g,.0015,"y","side upright");for(const g of[.085,.66])s("walnut",.01,.027,.55,_,g,-.005,.0015,"z","side crossrail")}for(let p=0;p<3;p++){const _=.16+p*.22;s("walnut",.302,.191,.019,d,_,.3185,.002,"x","drawer cockbead"),s("recess",.285,.174,.005,d,_,.33,.001,"x","drawer inset"),s("walnut",.271,.16,.003,d,_,.334,.001,"x","drawer figured field");for(const g of[-.034,.034])o("brass",.009,.01,.003,d+g,_+.012,.338,12,[Math.PI/2,0,0],"handle rosette"),o("brass",.003,.003,.009,d+g,_+.012,.345,8,[Math.PI/2,0,0],"handle pivot"),s("ink",.005,8e-4,5e-4,d+g,_+.012,.3496,1e-4,"x","screw slot");a("brass",.034,.0025,d,_+.012,.35,[0,0,Math.PI],"hanging bail",Math.PI)}}s("recess",.64,.103,.578,0,.674,-.017,.003,"x","pencil drawer case"),s("walnut",.594,.086,.022,0,.672,.284,.002,"x","pencil drawer front"),s("recess",.558,.054,.004,0,.672,.297,.001,"x","pencil drawer inset");for(const h of[-.024,.024])o("brass",.004,.005,.015,h,.66,.305,10,[Math.PI/2,0,0],"pencil pull post");o("brass",.003,.003,.054,0,.66,.312,12,[0,0,Math.PI/2],"pencil pull bar"),o("brass",.007,.007,.002,0,.69,.301,14,[Math.PI/2,0,0],"key escutcheon"),s("ink",.002,.005,6e-4,0,.69,.3022,1e-4,"y","keyhole"),s("recess",1.356,.012,.656,0,.719,0,.002,"x","top shadow quirk"),s("walnut",1.378,.012,.678,0,.731,0,.003,"x","lower thumb bead"),s("walnut",1.4,.045,.7,0,.7595,0,.003,"x","desktop core"),s("walnut",1.4,.003,.27,0,.7835,-.215,.001,"x","rear writing rail"),s("walnut",1.4,.003,.06,0,.7835,.32,.001,"x","front writing rail");for(const h of[-1,1])s("walnut",.36,.003,.37,h*.52,.7835,.105,.001,"z","side writing rail");s("leather",.68,.0028,.37,0,.7834,.105,5e-4,"x","inset leather writing pad");for(const h of[-.078,.288])s("brass",.675,55e-5,.0012,0,.78465,h,15e-5,"x","pad edge fillet");for(const h of[-.338,.338])s("brass",.0012,55e-5,.365,h,.78465,.105,15e-5,"z","pad edge fillet");for(const h of[-.061,.271])s("ink",.641,25e-5,7e-4,0,.78486,h,5e-5,"x","blind pad rule");for(const h of[-.321,.321])s("ink",7e-4,25e-5,.332,h,.78486,.105,5e-5,"z","blind pad rule");o("brass",.031,.033,.0025,-.15,.78625,-.15,20,void 0,"inkwell coaster");const c=[[0,0],[.025,0],[.029,.006],[.028,.027],[.019,.036],[.019,.044],[.0125,.044],[.0125,.031],[0,.031]];r("ink",new sr(c.map(([h,d])=>new Ct(h,d)),24),-.15,.7875,-.15,void 0,"y","hollow inkwell"),a("brass",.016,.0015,-.15,.8315,-.15,[Math.PI/2,0,0],"inkwell neck band"),o("ink",.0124,.0124,6e-4,-.15,.823,-.15,20,void 0,"recessed ink meniscus"),o("brass",.02,.021,.006,-.087,.788,-.178,20,void 0,"loose inkwell lid"),o("ink",.0155,.0155,.001,-.087,.7913,-.178,20,void 0,"lid inset"),s("recess",.282,.009,.074,.1,.7895,-.253,.003,"x","pen tray base"),s("leather",.262,.001,.054,.1,.7945,-.253,.001,"x","pen tray lining");for(const h of[-.286,-.22])s("walnut",.282,.008,.008,.1,.798,h,.002,"x","pen tray rim");for(const h of[-.037,.237])s("walnut",.008,.008,.058,h,.798,-.253,.002,"z","pen tray end");o("walnut",.0025,.004,.114,.122,.799,-.265,12,[0,0,-Math.PI/2],"dip pen shaft"),o("ink",.004,.0032,.03,.05,.799,-.265,12,[0,0,Math.PI/2],"dip pen grip"),o("brass",.0042,.0042,.006,.031,.799,-.265,12,[0,0,Math.PI/2],"dip pen collar");const l=new Qt,u=[.004,0,0,.027,0,-.004,.027,.0024,0,.004,0,0,.027,.0024,0,.027,0,.004,.004,0,0,.027,0,.004,.027,0,-.004,.027,0,-.004,.027,0,.004,.027,.0024,0];for(let h=0;h<u.length;h+=9)for(let d=0;d<3;d++)[u[h+3+d],u[h+6+d]]=[u[h+6+d],u[h+3+d]];l.setAttribute("position",new Ft(u,3)),l.computeVertexNormals(),r("brass",l,0,.799,-.265,void 0,"x","split brass nib"),s("ink",.013,35e-5,45e-5,.019,.801,-.265,1e-4,"x","nib slit"),o("ink",7e-4,7e-4,3e-4,.024,.8013,-.265,8,void 0,"nib breather"),o("walnut",.0031,.0031,.133,.116,.7981,-.24,6,[0,0,Math.PI/2],"hexagonal pencil"),o("cedar",0,.0031,.017,.041,.7981,-.24,6,[0,0,Math.PI/2],"sharpened cedar"),o("ink",0,9e-4,.004,.0315,.7981,-.24,6,[0,0,Math.PI/2],"graphite point"),o("brass",.0032,.0032,.004,.1845,.7981,-.24,8,[0,0,Math.PI/2],"pencil end ferrule");const f=new Tn;f.name="Upstairs writing desk • walnut and brass";for(const[h,d]of t){const p=Qr(d,!1),_=Pp(p,1e-6);p.dispose();for(const m of d)m.dispose();_.computeBoundingBox(),_.computeBoundingSphere();const g=new Jt(_,i[h]);g.name=`Upstairs desk • ${h}`,g.castShadow=g.receiveShadow=!0,g.matrixAutoUpdate=!1,g.updateMatrix(),f.add(g)}return f.userData.parts=e,f.userData.spec=Nl,f}function Gp(i){const t=Hp();for(let e=0;e<Nl.legacyRandomDraws;e++)i.b.rand();for(const e of t.children)i.geo(e.material,e.geometry,0,0,0)}const qr=Object.freeze({center:Object.freeze([-.5,.008,1.9]),width:3.4,length:5.6,clothLength:5.4,fringeBundlesPerEnd:60,textureSize:Object.freeze([1024,2048]),detailSize:Object.freeze([512,1024])}),Ic=i=>{let t=Math.imul(i^1530439581,73244475);return t=Math.imul(t^t>>>16,73244475),((t^t>>>16)>>>0)/4294967296};function Fl(){const i=[],t=[],e=[];return{positions:i,uvs:t,indices:e,vertex(n,r,s,o,a){const c=i.length/3;return i.push(n,r,s),t.push(o,a),c},face(n,r,s){e.push(n,r,s)},quad(n,r,s,o){e.push(n,r,s,n,s,o)},finish(n){const r=new Qt;return r.name=n,r.setAttribute("position",new Ft(i,3)),r.setAttribute("uv",new Ft(t,2)),r.setIndex(e),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),r}}}function Lc(i,t){const e=[-i,-i+.009,-i+.024,-i+.055];for(let n=1;n<t;n++)e.push(-i+.055+(2*i-.11)*n/t);return e.push(i-.055,i-.024,i-.009,i),e}function Vp(){const i=Fl(),t=qr.width/2,e=qr.clothLength/2,n=Lc(t,16),r=Lc(e,26),s=n.length,o=.034;for(const f of r)for(const h of n){const d=Math.max(0,Math.abs(f)-(e-o)),p=t-o+Math.sqrt(Math.max(0,o*o-d*d)),_=h*p/t,g=Math.min(t-Math.abs(h),e-Math.abs(f)),m=Math.min(1,g/.024),y=6e-4*Math.sin(_*2.4+.8)*Math.sin(f*1.9),M=3e-4+.0037*Math.sin(m*Math.PI/2)+y*m;i.vertex(_,M,f,(_+t)/(2*t),(f+e)/(2*e))}for(let f=0;f<r.length-1;f++)for(let h=0;h<s-1;h++){const d=f*s+h;i.quad(d,d+s,d+s+1,d+1)}const a=[];for(let f=0;f<s;f++)a.push(f);for(let f=1;f<r.length;f++)a.push(f*s+s-1);for(let f=s-2;f>=0;f--)a.push((r.length-1)*s+f);for(let f=r.length-2;f>0;f--)a.push(f*s);const c=[],l=[];for(const f of a){const[h,d,p]=i.positions.slice(f*3,f*3+3);c.push(i.vertex(h,d,p,i.uvs[f*2],i.uvs[f*2+1])),l.push(i.vertex(h*.999,-.005,p*.999,i.uvs[f*2],i.uvs[f*2+1]))}const u=i.vertex(0,-.005,0,.5,.5);for(let f=0;f<a.length;f++){const h=(f+1)%a.length;i.quad(c[f],c[h],l[h],l[f]),i.face(u,l[f],l[h])}return i.finish("Reading rug / soft bound cloth")}function Wp(){const i=Fl(),t=qr.fringeBundlesPerEnd;for(const e of[-1,1])for(let n=0;n<t;n++){const r=-1.59+n*3.18/(t-1),s=.074+Ic(n+(e+1)*301)*.024,o=(Ic(n*17+83)-.5)*.016;for(const a of[-1,1]){const c=r+a*.005,l=e*2.691,u=c+o+a*.003,f=e*(2.7+s-(a>0?.007:0)),h=.0054,d=.0019,p=i.vertex(c-h,-.003,l,0,0),_=i.vertex(c+h,-.003,l,1,0),g=i.vertex(c,6e-4,l,.5,0),m=i.vertex(u-d,-.0047,f,0,1),y=i.vertex(u+d,-.0047,f,1,1),M=i.vertex(u,-.0028,f,.5,1),x=[[p,m,M,g],[g,M,y,_],[_,y,m,p]];for(const R of x)e<0&&R.reverse(),i.quad(...R);e>0?(i.face(p,g,_),i.face(m,y,M)):(i.face(_,g,p),i.face(M,y,m))}}return i.finish("Reading rug / short split cotton fringe")}function Xp(i=(t,e)=>new xp().load(t,e)){const t=new Ee({name:"Reading rug / dyed wool",color:8865339,bumpScale:.0013,roughness:1,metalness:0}),e=i(new URL("/library/assets/rug-albedo-DJLqXdw0.png",import.meta.url).href,()=>t.color.setHex(16777215)),n=i(new URL("/library/assets/rug-detail-BtSd2KDf.png",import.meta.url).href);e.name="Reading rug / madder & indigo wool",n.name="Reading rug / linear height R, roughness G",e.colorSpace=le,n.colorSpace=Qe;for(const s of[e,n])s.wrapS=s.wrapT=tn,s.minFilter=He,s.magFilter=Ce,s.generateMipmaps=!0,s.anisotropy=4;t.map=e,t.bumpMap=t.roughnessMap=n;const r=new Ee({name:"Reading rug / unbleached warp",color:12363910,roughness:.96,metalness:0});return t.userData.noShadow=r.userData.noShadow=!0,{cloth:t,fringe:r}}function qp(i,t=Xp()){const[e,n,r]=qr.center;i.geo(t.cloth,Vp(),e,n,r),i.geo(t.fringe,Wp(),e,n,r)}const Dc=[[[[-59.572,-80.04],[-59.866,-80.55],[-60.16,-81],[-62.255,-80.863],[-64.488,-80.922],[-65.742,-80.589],[-65.742,-80.55],[-66.29,-80.256],[-64.038,-80.295],[-61.883,-80.393],[-61.139,-79.981],[-60.61,-79.629],[-59.572,-80.04]]],[[[-159.208,-79.497],[-161.128,-79.634],[-162.44,-79.281],[-163.027,-78.929],[-163.067,-78.87],[-163.713,-78.596],[-163.713,-78.596],[-163.106,-78.223],[-161.245,-78.38],[-160.246,-78.694],[-159.482,-79.046],[-159.208,-79.497]]],[[[-45.155,-78.047],[-43.921,-78.478],[-43.49,-79.086],[-43.372,-79.517],[-43.333,-80.026],[-44.881,-80.34],[-46.506,-80.594],[-48.386,-80.829],[-50.482,-81.025],[-52.852,-80.967],[-54.164,-80.634],[-53.988,-80.222],[-51.853,-79.948],[-50.991,-79.615],[-50.365,-79.183],[-49.914,-78.811],[-49.307,-78.459],[-48.661,-78.047],[-48.661,-78.047],[-48.151,-78.047],[-46.663,-77.831],[-45.155,-78.047]]],[[[-121.212,-73.501],[-119.919,-73.658],[-118.724,-73.481],[-119.292,-73.834],[-120.232,-74.089],[-121.623,-74.01],[-122.622,-73.658],[-122.622,-73.658],[-122.406,-73.325],[-121.212,-73.501]]],[[[-125.56,-73.481],[-124.032,-73.873],[-124.619,-73.834],[-125.912,-73.736],[-127.283,-73.462],[-127.283,-73.462],[-126.558,-73.246],[-125.56,-73.481]]],[[[-98.982,-71.933],[-97.885,-72.071],[-96.788,-71.953],[-96.2,-72.521],[-96.984,-72.443],[-98.198,-72.482],[-99.432,-72.443],[-100.783,-72.502],[-101.802,-72.306],[-102.331,-71.894],[-102.331,-71.894],[-101.704,-71.718],[-100.431,-71.855],[-98.982,-71.933]]],[[[-68.451,-70.956],[-68.334,-71.406],[-68.51,-71.798],[-68.784,-72.171],[-69.959,-72.308],[-71.076,-72.504],[-72.388,-72.484],[-71.898,-72.092],[-73.074,-72.229],[-74.19,-72.367],[-74.954,-72.073],[-75.013,-71.661],[-73.916,-71.269],[-73.916,-71.269],[-73.23,-71.152],[-72.075,-71.191],[-71.781,-70.681],[-71.722,-70.309],[-71.742,-69.506],[-71.174,-69.035],[-70.253,-68.879],[-69.724,-69.251],[-69.489,-69.623],[-69.059,-70.074],[-68.726,-70.505],[-68.451,-70.956]]],[[[-58.614,-64.152],[-59.045,-64.368],[-59.789,-64.211],[-60.612,-64.309],[-61.297,-64.544],[-62.022,-64.799],[-62.512,-65.093],[-62.649,-65.485],[-62.59,-65.857],[-62.12,-66.19],[-62.806,-66.426],[-63.746,-66.504],[-64.294,-66.837],[-64.882,-67.15],[-65.508,-67.582],[-65.665,-67.954],[-65.313,-68.365],[-64.784,-68.679],[-63.961,-68.914],[-63.197,-69.228],[-62.786,-69.619],[-62.571,-69.992],[-62.277,-70.384],[-61.807,-70.717],[-61.513,-71.089],[-61.376,-72.01],[-61.082,-72.382],[-61.004,-72.774],[-60.69,-73.166],[-60.827,-73.695],[-61.376,-74.107],[-61.963,-74.44],[-63.295,-74.577],[-63.746,-74.93],[-64.353,-75.263],[-65.861,-75.635],[-67.193,-75.792],[-68.446,-76.007],[-69.798,-76.223],[-70.601,-76.634],[-72.207,-76.674],[-73.97,-76.634],[-75.556,-76.713],[-77.24,-76.713],[-76.927,-77.105],[-75.399,-77.281],[-74.283,-77.555],[-73.656,-77.908],[-74.773,-78.222],[-76.496,-78.124],[-77.926,-78.378],[-77.985,-78.79],[-78.024,-79.182],[-76.849,-79.515],[-76.633,-79.887],[-75.36,-80.26],[-73.245,-80.416],[-71.443,-80.691],[-70.013,-81.004],[-68.192,-81.318],[-65.704,-81.474],[-63.256,-81.749],[-61.552,-82.043],[-59.691,-82.376],[-58.712,-82.846],[-58.222,-83.218],[-57.008,-82.866],[-55.363,-82.572],[-53.62,-82.258],[-51.544,-82.004],[-49.761,-81.729],[-47.274,-81.71],[-44.826,-81.847],[-42.808,-82.082],[-42.162,-81.651],[-40.771,-81.357],[-38.245,-81.337],[-36.267,-81.122],[-34.386,-80.906],[-32.31,-80.769],[-30.097,-80.593],[-28.55,-80.338],[-29.255,-79.985],[-29.686,-79.633],[-29.686,-79.26],[-31.625,-79.299],[-33.681,-79.456],[-35.64,-79.456],[-35.914,-79.084],[-35.777,-78.339],[-35.327,-78.124],[-33.897,-77.889],[-32.212,-77.653],[-30.998,-77.36],[-29.784,-77.066],[-28.883,-76.674],[-27.512,-76.497],[-26.16,-76.36],[-25.475,-76.282],[-23.928,-76.243],[-22.459,-76.105],[-21.225,-75.909],[-20.01,-75.674],[-18.914,-75.439],[-17.523,-75.126],[-16.642,-74.793],[-15.701,-74.499],[-15.408,-74.107],[-16.465,-73.872],[-16.113,-73.46],[-15.447,-73.147],[-14.409,-72.951],[-13.312,-72.715],[-12.294,-72.402],[-11.51,-72.01],[-11.02,-71.54],[-10.296,-71.265],[-9.101,-71.324],[-8.611,-71.657],[-7.417,-71.697],[-7.377,-71.324],[-6.868,-70.932],[-5.791,-71.03],[-5.536,-71.403],[-4.342,-71.461],[-3.049,-71.285],[-1.795,-71.167],[-.659,-71.226],[-.229,-71.638],[.868,-71.305],[1.887,-71.128],[3.023,-70.991],[4.139,-70.854],[5.158,-70.619],[6.274,-70.462],[7.136,-70.247],[7.743,-69.894],[8.487,-70.149],[9.525,-70.011],[10.25,-70.482],[10.818,-70.834],[11.954,-70.638],[12.404,-70.247],[13.423,-69.972],[14.735,-70.031],[15.127,-70.403],[15.949,-70.031],[17.027,-69.913],[18.202,-69.874],[19.259,-69.894],[20.376,-70.011],[21.453,-70.07],[21.923,-70.403],[22.569,-70.697],[23.666,-70.521],[24.841,-70.482],[25.977,-70.482],[27.094,-70.462],[28.093,-70.325],[29.15,-70.207],[30.032,-69.933],[30.972,-69.757],[31.99,-69.659],[32.754,-69.384],[33.302,-68.836],[33.87,-68.503],[34.908,-68.659],[35.3,-69.012],[36.162,-69.247],[37.2,-69.169],[37.905,-69.521],[38.649,-69.776],[39.668,-69.541],[40.02,-69.11],[40.921,-68.934],[41.959,-68.601],[42.939,-68.463],[44.114,-68.267],[44.897,-68.052],[45.72,-67.817],[46.503,-67.601],[47.443,-67.719],[48.344,-67.366],[48.991,-67.092],[49.931,-67.111],[50.753,-66.876],[50.949,-66.523],[51.792,-66.249],[52.614,-66.053],[53.613,-65.896],[54.534,-65.818],[55.415,-65.877],[56.355,-65.975],[57.158,-66.249],[57.256,-66.68],[58.137,-67.013],[58.745,-67.288],[59.939,-67.405],[60.605,-67.68],[61.428,-67.954],[62.387,-68.013],[63.19,-67.817],[64.052,-67.405],[64.992,-67.621],[65.972,-67.738],[66.912,-67.856],[67.891,-67.934],[68.89,-67.934],[69.713,-68.973],[69.673,-69.228],[69.556,-69.678],[68.596,-69.933],[67.813,-70.305],[67.95,-70.697],[69.066,-70.678],[68.929,-71.069],[68.42,-71.442],[67.95,-71.853],[68.714,-72.167],[69.869,-72.265],[71.025,-72.088],[71.573,-71.697],[71.906,-71.324],[72.455,-71.011],[73.081,-70.717],[73.336,-70.364],[73.865,-69.874],[74.492,-69.776],[75.628,-69.737],[76.626,-69.619],[77.645,-69.463],[78.135,-69.071],[78.428,-68.698],[79.114,-68.326],[80.093,-68.072],[80.935,-67.876],[81.484,-67.542],[82.052,-67.366],[82.776,-67.209],[83.775,-67.307],[84.676,-67.209],[85.656,-67.092],[86.752,-67.15],[87.477,-66.876],[87.986,-66.21],[88.358,-66.484],[88.828,-66.955],[89.671,-67.15],[90.63,-67.229],[91.59,-67.111],[92.609,-67.19],[93.549,-67.209],[94.175,-67.111],[95.018,-67.17],[95.781,-67.386],[96.682,-67.249],[97.76,-67.249],[98.68,-67.111],[99.718,-67.249],[100.384,-66.915],[100.893,-66.582],[101.579,-66.308],[102.832,-65.563],[103.479,-65.7],[104.243,-65.975],[104.908,-66.328],[106.182,-66.935],[107.161,-66.955],[108.081,-66.955],[109.159,-66.837],[110.236,-66.7],[111.058,-66.426],[111.744,-66.132],[112.86,-66.092],[113.605,-65.877],[114.388,-66.073],[114.897,-66.386],[115.602,-66.7],[116.699,-66.661],[117.385,-66.915],[118.579,-67.17],[119.833,-67.268],[120.871,-67.19],[121.654,-66.876],[122.32,-66.563],[123.221,-66.484],[124.122,-66.621],[125.16,-66.719],[126.1,-66.563],[127.001,-66.563],[127.883,-66.661],[128.803,-66.759],[129.704,-66.582],[130.781,-66.426],[131.8,-66.386],[132.936,-66.386],[133.856,-66.288],[134.757,-66.21],[135.032,-65.72],[135.071,-65.309],[135.697,-65.583],[135.874,-66.034],[136.207,-66.445],[136.618,-66.778],[137.46,-66.955],[138.596,-66.896],[139.908,-66.876],[140.809,-66.817],[142.122,-66.817],[143.062,-66.798],[144.374,-66.837],[145.49,-66.915],[146.196,-67.229],[146,-67.601],[146.646,-67.895],[147.723,-68.13],[148.84,-68.385],[150.132,-68.561],[151.484,-68.718],[152.502,-68.875],[153.638,-68.895],[154.285,-68.561],[155.166,-68.836],[155.93,-69.149],[156.811,-69.384],[158.026,-69.482],[159.181,-69.6],[159.671,-69.992],[160.807,-70.227],[161.57,-70.58],[162.687,-70.736],[163.842,-70.717],[164.92,-70.776],[166.114,-70.756],[167.309,-70.834],[168.426,-70.971],[169.464,-71.207],[170.502,-71.403],[171.207,-71.697],[171.089,-72.088],[170.56,-72.441],[170.11,-72.892],[169.757,-73.245],[169.287,-73.656],[167.975,-73.813],[167.387,-74.165],[166.095,-74.381],[165.644,-74.773],[164.959,-75.145],[164.234,-75.459],[163.823,-75.87],[163.568,-76.243],[163.47,-76.693],[163.49,-77.066],[164.058,-77.457],[164.273,-77.83],[164.743,-78.183],[166.604,-78.32],[166.996,-78.751],[165.194,-78.907],[163.666,-79.123],[161.766,-79.162],[160.924,-79.73],[160.748,-80.201],[160.317,-80.573],[159.788,-80.945],[161.12,-81.279],[161.629,-81.69],[162.491,-82.062],[163.705,-82.395],[165.096,-82.709],[166.604,-83.022],[168.896,-83.336],[169.405,-83.826],[172.284,-84.041],[172.477,-84.118],[173.224,-84.414],[175.986,-84.159],[178.277,-84.473],[180,-84.713],[180,-90],[-180,-90],[-180,-84.713],[-179.942,-84.721],[-179.059,-84.139],[-177.257,-84.453],[-177.141,-84.418],[-176.862,-84.334],[-176.524,-84.232],[-176.23,-84.143],[-176.085,-84.099],[-175.934,-84.102],[-175.83,-84.118],[-174.383,-84.534],[-173.117,-84.118],[-172.889,-84.061],[-169.951,-83.885],[-169,-84.118],[-168.53,-84.237],[-167.022,-84.57],[-164.182,-84.825],[-161.93,-85.139],[-158.071,-85.374],[-155.192,-85.1],[-150.942,-85.296],[-148.533,-85.609],[-145.889,-85.315],[-143.108,-85.041],[-142.892,-84.57],[-146.829,-84.531],[-150.061,-84.296],[-150.903,-83.904],[-153.586,-83.689],[-153.41,-83.238],[-153.038,-82.827],[-152.666,-82.454],[-152.862,-82.043],[-154.526,-81.768],[-155.29,-81.416],[-156.837,-81.102],[-154.409,-81.161],[-152.098,-81.004],[-150.648,-81.337],[-148.866,-81.043],[-147.221,-80.671],[-146.418,-80.338],[-146.77,-79.926],[-148.063,-79.652],[-149.532,-79.358],[-151.588,-79.299],[-153.39,-79.162],[-155.329,-79.064],[-155.976,-78.692],[-157.268,-78.378],[-158.052,-78.026],[-158.365,-76.889],[-157.875,-76.987],[-156.975,-77.301],[-155.329,-77.203],[-153.743,-77.066],[-152.92,-77.497],[-151.334,-77.399],[-150.002,-77.183],[-148.748,-76.909],[-147.612,-76.576],[-146.104,-76.478],[-146.144,-76.105],[-146.496,-75.733],[-146.202,-75.38],[-144.91,-75.204],[-144.322,-75.537],[-142.794,-75.341],[-141.639,-75.086],[-140.209,-75.067],[-138.858,-74.969],[-137.506,-74.734],[-136.429,-74.518],[-135.215,-74.303],[-134.431,-74.361],[-133.746,-74.44],[-132.257,-74.303],[-130.925,-74.479],[-129.554,-74.459],[-128.242,-74.322],[-126.891,-74.42],[-125.402,-74.518],[-124.011,-74.479],[-122.562,-74.499],[-121.074,-74.518],[-119.703,-74.479],[-118.684,-74.185],[-117.47,-74.028],[-116.216,-74.244],[-115.022,-74.068],[-113.944,-73.715],[-113.298,-74.028],[-112.945,-74.381],[-112.299,-74.714],[-111.261,-74.42],[-110.066,-74.793],[-108.715,-74.91],[-107.559,-75.184],[-106.149,-75.126],[-104.876,-74.949],[-103.368,-74.988],[-102.017,-75.126],[-100.646,-75.302],[-100.117,-74.871],[-100.763,-74.538],[-101.253,-74.185],[-102.545,-74.107],[-103.113,-73.734],[-103.329,-73.362],[-103.681,-72.618],[-102.917,-72.755],[-101.605,-72.813],[-100.313,-72.755],[-99.137,-72.911],[-98.119,-73.205],[-97.688,-73.558],[-96.337,-73.617],[-95.044,-73.48],[-93.673,-73.284],[-92.439,-73.166],[-91.421,-73.401],[-90.089,-73.323],[-89.227,-72.559],[-88.424,-73.009],[-87.268,-73.186],[-86.015,-73.088],[-85.192,-73.48],[-83.88,-73.519],[-82.666,-73.636],[-81.471,-73.852],[-80.687,-73.48],[-80.296,-73.127],[-79.297,-73.519],[-77.926,-73.421],[-76.907,-73.636],[-76.222,-73.97],[-74.89,-73.872],[-73.852,-73.656],[-72.834,-73.401],[-71.619,-73.264],[-70.209,-73.147],[-68.936,-73.009],[-67.957,-72.794],[-67.369,-72.48],[-67.134,-72.049],[-67.252,-71.638],[-67.565,-71.246],[-67.917,-70.854],[-68.231,-70.462],[-68.485,-70.109],[-68.544,-69.717],[-68.446,-69.326],[-67.976,-68.953],[-67.585,-68.542],[-67.428,-68.15],[-67.624,-67.719],[-67.741,-67.327],[-67.252,-66.876],[-66.703,-66.582],[-66.057,-66.21],[-65.371,-65.896],[-64.568,-65.603],[-64.177,-65.171],[-63.628,-64.897],[-63.001,-64.642],[-62.042,-64.584],[-61.415,-64.27],[-60.71,-64.074],[-59.887,-63.957],[-59.163,-63.702],[-58.595,-63.388],[-57.811,-63.271],[-57.224,-63.525],[-57.596,-63.859],[-58.614,-64.152]]],[[[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.96,-54.897],[-67.291,-55.301],[-68.149,-55.612],[-69.232,-55.499],[-69.958,-55.198],[-71.006,-55.054],[-72.264,-54.495],[-73.285,-53.958],[-74.663,-52.837],[-73.838,-53.047],[-72.434,-53.715],[-71.108,-54.074],[-70.592,-53.616],[-70.267,-52.931],[-69.346,-52.518],[-68.634,-52.636],[-68.634,-52.636],[-68.25,-53.1],[-67.75,-53.85]]],[[[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1]]],[[[70.28,-49.71],[68.745,-49.775],[68.72,-49.242],[68.868,-48.83],[68.935,-48.625],[69.58,-48.94],[70.525,-49.065],[70.56,-49.255],[70.28,-49.71]]],[[[145.398,-40.793],[146.364,-41.138],[146.909,-41.001],[147.689,-40.808],[148.289,-40.875],[148.36,-42.062],[148.017,-42.407],[147.914,-43.212],[147.565,-42.938],[146.87,-43.635],[146.663,-43.581],[146.048,-43.55],[145.432,-42.694],[145.295,-42.034],[144.718,-41.163],[144.744,-40.704],[145.398,-40.793]]],[[[173.02,-40.919],[173.247,-41.332],[173.958,-40.927],[174.248,-41.349],[174.249,-41.77],[173.876,-42.233],[173.223,-42.97],[172.711,-43.372],[173.08,-43.853],[172.309,-43.866],[171.453,-44.243],[171.185,-44.897],[170.617,-45.909],[169.831,-46.356],[169.332,-46.641],[168.411,-46.62],[167.764,-46.29],[166.677,-46.22],[166.509,-45.853],[167.046,-45.111],[168.304,-44.124],[168.949,-43.936],[169.668,-43.555],[170.525,-43.032],[171.125,-42.513],[171.57,-41.767],[171.949,-41.514],[172.097,-40.956],[172.799,-40.494],[173.02,-40.919]]],[[[174.612,-36.156],[175.337,-37.209],[175.358,-36.526],[175.809,-36.799],[175.958,-37.555],[176.763,-37.881],[177.439,-37.961],[178.01,-37.58],[178.517,-37.695],[178.275,-38.583],[177.97,-39.166],[177.207,-39.146],[176.94,-39.45],[177.033,-39.88],[176.886,-40.066],[176.508,-40.605],[176.012,-41.29],[175.24,-41.688],[175.068,-41.426],[174.651,-41.282],[175.228,-40.459],[174.9,-39.909],[173.824,-39.509],[173.852,-39.147],[174.575,-38.798],[174.743,-38.028],[174.697,-37.381],[174.292,-36.711],[174.319,-36.535],[173.841,-36.122],[173.054,-35.237],[172.636,-34.529],[173.007,-34.451],[173.551,-35.006],[174.329,-35.265],[174.612,-36.156]]],[[[167.12,-22.16],[166.74,-22.4],[166.19,-22.13],[165.474,-21.68],[164.83,-21.15],[164.168,-20.445],[164.03,-20.106],[164.46,-20.12],[165.02,-20.46],[165.46,-20.8],[165.78,-21.08],[166.6,-21.7],[167.12,-22.16]]],[[[178.374,-17.34],[178.718,-17.628],[178.553,-18.151],[177.933,-18.288],[177.381,-18.164],[177.285,-17.725],[177.671,-17.381],[178.126,-17.505],[178.374,-17.34]]],[[[179.364,-16.801],[178.725,-17.012],[178.597,-16.639],[179.097,-16.434],[179.414,-16.379],[180,-16.067],[180,-16.555],[179.364,-16.801]]],[[[-179.917,-16.502],[-180,-16.555],[-180,-16.067],[-179.793,-16.021],[-179.917,-16.502]]],[[[167.845,-16.466],[167.515,-16.598],[167.18,-16.16],[167.217,-15.892],[167.845,-16.466]]],[[[167.108,-14.934],[167.27,-15.74],[167.001,-15.615],[166.793,-15.669],[166.65,-15.393],[166.629,-14.626],[167.108,-14.934]]],[[[50.057,-13.556],[50.217,-14.759],[50.477,-15.227],[50.377,-15.706],[50.2,-16],[49.861,-15.414],[49.673,-15.71],[49.863,-16.451],[49.775,-16.875],[49.499,-17.106],[49.436,-17.953],[49.042,-19.119],[48.549,-20.497],[47.931,-22.392],[47.548,-23.782],[47.096,-24.942],[46.282,-25.178],[45.41,-25.601],[44.834,-25.346],[44.04,-24.988],[43.764,-24.461],[43.698,-23.574],[43.346,-22.777],[43.254,-22.057],[43.433,-21.336],[43.894,-21.163],[43.896,-20.83],[44.374,-20.072],[44.464,-19.435],[44.232,-18.962],[44.043,-18.331],[43.963,-17.41],[44.312,-16.85],[44.447,-16.216],[44.945,-16.179],[45.503,-15.974],[45.873,-15.793],[46.312,-15.78],[46.882,-15.21],[47.705,-14.594],[48.005,-14.091],[47.869,-13.664],[48.294,-13.784],[48.845,-13.089],[48.864,-12.488],[49.195,-12.041],[49.544,-12.47],[49.809,-12.895],[50.057,-13.556]]],[[[143.562,-13.764],[143.922,-14.548],[144.564,-14.171],[144.895,-14.594],[145.375,-14.985],[145.272,-15.428],[145.485,-16.286],[145.637,-16.785],[145.889,-16.907],[146.16,-17.762],[146.064,-18.28],[146.387,-18.958],[147.471,-19.481],[148.178,-19.956],[148.848,-20.391],[148.717,-20.633],[149.289,-21.261],[149.678,-22.343],[150.077,-22.123],[150.483,-22.556],[150.727,-22.402],[150.9,-23.462],[151.609,-24.076],[152.074,-24.458],[152.855,-25.268],[153.136,-26.071],[153.162,-26.641],[153.093,-27.26],[153.569,-28.11],[153.512,-28.995],[153.339,-29.458],[153.069,-30.35],[153.09,-30.924],[152.892,-31.64],[152.45,-32.55],[151.709,-33.041],[151.344,-33.816],[151.011,-34.31],[150.714,-35.173],[150.328,-35.672],[150.075,-36.42],[149.946,-37.109],[149.997,-37.425],[149.424,-37.773],[148.305,-37.809],[147.382,-38.219],[146.922,-38.607],[146.318,-39.036],[145.49,-38.594],[144.877,-38.417],[145.032,-37.896],[144.486,-38.085],[143.61,-38.809],[142.745,-38.538],[142.178,-38.38],[141.607,-38.309],[140.639,-38.019],[139.992,-37.403],[139.807,-36.644],[139.574,-36.138],[139.083,-35.733],[138.121,-35.612],[138.449,-35.127],[138.208,-34.385],[137.719,-35.077],[136.829,-35.261],[137.352,-34.707],[137.504,-34.13],[137.89,-33.64],[137.81,-32.9],[136.997,-33.753],[136.372,-34.095],[135.989,-34.89],[135.208,-34.479],[135.239,-33.948],[134.613,-33.223],[134.086,-32.848],[134.274,-32.617],[132.991,-32.011],[132.288,-31.983],[131.326,-31.496],[129.536,-31.59],[128.241,-31.948],[127.103,-32.282],[126.149,-32.216],[125.089,-32.729],[124.222,-32.959],[124.029,-33.484],[123.66,-33.89],[122.811,-33.914],[122.183,-34.003],[121.299,-33.821],[120.58,-33.93],[119.894,-33.976],[119.299,-34.509],[119.007,-34.464],[118.506,-34.747],[118.025,-35.065],[117.296,-35.025],[116.625,-35.025],[115.564,-34.386],[115.027,-34.197],[115.049,-33.623],[115.545,-33.487],[115.715,-33.26],[115.679,-32.9],[115.802,-32.205],[115.69,-31.612],[115.161,-30.602],[114.997,-30.031],[115.04,-29.461],[114.642,-28.81],[114.616,-28.516],[114.174,-28.118],[114.049,-27.335],[113.477,-26.543],[113.339,-26.117],[113.778,-26.549],[113.441,-25.621],[113.937,-25.911],[114.233,-26.298],[114.216,-25.786],[113.721,-24.999],[113.625,-24.684],[113.394,-24.385],[113.502,-23.806],[113.707,-23.56],[113.843,-23.06],[113.737,-22.475],[114.15,-21.756],[114.225,-22.517],[114.648,-21.83],[115.46,-21.495],[115.947,-21.069],[116.712,-20.702],[117.166,-20.624],[117.442,-20.747],[118.23,-20.374],[118.836,-20.263],[118.988,-20.044],[119.252,-19.953],[119.805,-19.977],[120.856,-19.684],[121.4,-19.24],[121.655,-18.705],[122.242,-18.198],[122.287,-17.799],[122.313,-17.255],[123.013,-16.405],[123.434,-17.269],[123.859,-17.069],[123.503,-16.597],[123.817,-16.111],[124.258,-16.328],[124.38,-15.567],[124.926,-15.075],[125.167,-14.68],[125.67,-14.51],[125.686,-14.231],[126.125,-14.347],[126.143,-14.096],[126.583,-13.953],[127.066,-13.818],[127.805,-14.277],[128.36,-14.869],[128.986,-14.876],[129.621,-14.97],[129.41,-14.421],[129.889,-13.619],[130.339,-13.357],[130.184,-13.108],[130.618,-12.536],[131.223,-12.184],[131.735,-12.302],[132.575,-12.114],[132.557,-11.603],[131.825,-11.274],[132.357,-11.129],[133.02,-11.376],[133.551,-11.787],[134.393,-12.042],[134.679,-11.941],[135.298,-12.249],[135.883,-11.962],[136.258,-12.049],[136.492,-11.857],[136.952,-12.352],[136.685,-12.887],[136.305,-13.291],[135.962,-13.325],[136.078,-13.724],[135.784,-14.224],[135.429,-14.715],[135.5,-14.998],[136.295,-15.55],[137.065,-15.871],[137.58,-16.215],[138.303,-16.808],[138.585,-16.807],[139.109,-17.063],[139.261,-17.372],[140.215,-17.711],[140.875,-17.369],[141.071,-16.832],[141.274,-16.389],[141.398,-15.841],[141.702,-15.045],[141.563,-14.561],[141.636,-14.27],[141.52,-13.698],[141.651,-12.945],[141.843,-12.742],[141.687,-12.408],[141.929,-11.877],[142.118,-11.328],[142.144,-11.043],[142.515,-10.668],[142.797,-11.157],[142.867,-11.785],[143.116,-11.906],[143.159,-12.326],[143.522,-12.834],[143.597,-13.4],[143.562,-13.764]]],[[[162.119,-10.483],[162.399,-10.826],[161.7,-10.82],[161.32,-10.205],[161.917,-10.447],[162.119,-10.483]]],[[[120.716,-10.24],[120.295,-10.259],[118.968,-9.558],[119.9,-9.361],[120.426,-9.666],[120.776,-9.97],[120.716,-10.24]]],[[[160.852,-9.873],[160.463,-9.895],[159.849,-9.794],[159.64,-9.64],[159.703,-9.243],[160.363,-9.4],[160.689,-9.61],[160.852,-9.873]]],[[[161.68,-9.6],[161.529,-9.784],[160.788,-8.918],[160.58,-8.32],[160.92,-8.32],[161.28,-9.12],[161.68,-9.6]]],[[[124.436,-10.14],[123.58,-10.36],[123.46,-10.24],[123.55,-9.9],[123.98,-9.29],[124.969,-8.893],[125.086,-8.657],[125.947,-8.432],[126.645,-8.398],[126.957,-8.273],[127.336,-8.397],[126.968,-8.668],[125.926,-9.106],[125.089,-9.393],[124.436,-10.14]]],[[[117.9,-8.096],[118.261,-8.362],[118.878,-8.281],[119.127,-8.706],[117.97,-8.907],[117.278,-9.041],[116.74,-9.033],[117.084,-8.457],[117.632,-8.449],[117.9,-8.096]]],[[[122.904,-8.094],[122.757,-8.65],[121.254,-8.934],[119.924,-8.81],[119.921,-8.445],[120.715,-8.237],[121.342,-8.537],[122.007,-8.461],[122.904,-8.094]]],[[[159.875,-8.337],[159.917,-8.538],[159.134,-8.114],[158.586,-7.755],[158.211,-7.422],[158.36,-7.32],[158.82,-7.56],[159.64,-8.02],[159.875,-8.337]]],[[[157.538,-7.348],[157.339,-7.405],[156.902,-7.177],[156.491,-6.766],[156.543,-6.599],[157.14,-7.022],[157.538,-7.348]]],[[[108.623,-6.778],[110.539,-6.877],[110.76,-6.465],[112.615,-6.946],[112.979,-7.594],[114.479,-7.777],[115.706,-8.371],[114.565,-8.752],[113.465,-8.349],[112.56,-8.376],[111.522,-8.302],[110.586,-8.123],[109.428,-7.741],[108.694,-7.642],[108.278,-7.767],[106.454,-7.355],[106.281,-6.925],[105.365,-6.851],[106.052,-5.896],[107.265,-5.955],[108.072,-6.346],[108.487,-6.422],[108.623,-6.778]]],[[[134.725,-6.214],[134.21,-6.895],[134.113,-6.142],[134.29,-5.783],[134.5,-5.445],[134.727,-5.738],[134.725,-6.214]]],[[[155.88,-6.82],[155.6,-6.92],[155.167,-6.536],[154.729,-5.901],[154.514,-5.139],[154.653,-5.042],[154.76,-5.34],[155.063,-5.567],[155.548,-6.201],[156.02,-6.54],[155.88,-6.82]]],[[[151.983,-5.478],[151.459,-5.56],[151.301,-5.841],[150.754,-6.084],[150.241,-6.318],[149.71,-6.317],[148.89,-6.026],[148.319,-5.747],[148.402,-5.438],[149.298,-5.584],[149.846,-5.506],[149.996,-5.026],[150.14,-5.001],[150.237,-5.532],[150.807,-5.456],[151.09,-5.114],[151.648,-4.757],[151.538,-4.168],[152.137,-4.149],[152.339,-4.313],[152.319,-4.868],[151.983,-5.478]]],[[[127.249,-3.459],[126.875,-3.791],[126.184,-3.607],[125.989,-3.177],[127.001,-3.129],[127.249,-3.459]]],[[[130.471,-3.094],[130.835,-3.858],[129.991,-3.446],[129.155,-3.363],[128.591,-3.429],[127.899,-3.393],[128.136,-2.844],[129.371,-2.802],[130.471,-3.094]]],[[[153.14,-4.5],[152.827,-4.766],[152.639,-4.176],[152.406,-3.79],[151.953,-3.462],[151.384,-3.035],[150.662,-2.741],[150.94,-2.5],[151.48,-2.78],[151.82,-3],[152.24,-3.24],[152.64,-3.66],[153.02,-3.98],[153.14,-4.5]]],[[[134.143,-1.152],[134.423,-2.769],[135.458,-3.368],[136.293,-2.307],[137.441,-1.704],[138.33,-1.703],[139.185,-2.051],[139.927,-2.409],[141,-2.6],[142.735,-3.289],[144.584,-3.861],[145.273,-4.374],[145.83,-4.876],[145.982,-5.466],[147.648,-6.084],[147.891,-6.614],[146.971,-6.722],[147.192,-7.388],[148.085,-8.044],[148.734,-9.105],[149.307,-9.071],[149.267,-9.514],[150.039,-9.684],[149.739,-9.873],[150.802,-10.294],[150.691,-10.583],[150.028,-10.652],[149.782,-10.393],[148.923,-10.281],[147.913,-10.13],[147.135,-9.492],[146.568,-8.943],[146.048,-8.067],[144.744,-7.63],[143.897,-7.915],[143.286,-8.245],[143.414,-8.983],[142.628,-9.327],[142.068,-9.16],[141.034,-9.118],[140.143,-8.297],[139.128,-8.096],[138.881,-8.381],[137.614,-8.412],[138.039,-7.598],[138.669,-7.32],[138.408,-6.233],[137.928,-5.393],[135.989,-4.547],[135.165,-4.463],[133.663,-3.539],[133.368,-4.025],[132.984,-4.113],[132.757,-3.746],[132.754,-3.312],[131.99,-2.821],[133.067,-2.46],[133.78,-2.48],[133.696,-2.215],[132.232,-2.213],[131.836,-1.617],[130.943,-1.433],[130.52,-.938],[131.868,-.695],[132.38,-.37],[133.986,-.78],[134.143,-1.152]]],[[[125.241,1.42],[124.437,.428],[123.686,.236],[122.723,.431],[121.057,.381],[120.183,.237],[120.041,-.52],[120.936,-1.409],[121.476,-.956],[123.341,-.616],[123.258,-1.076],[122.823,-.931],[122.389,-1.517],[121.508,-1.904],[122.455,-3.186],[122.272,-3.53],[123.171,-4.684],[123.162,-5.341],[122.629,-5.635],[122.236,-5.283],[122.72,-4.464],[121.738,-4.851],[121.489,-4.575],[121.619,-4.188],[120.898,-3.602],[120.972,-2.628],[120.305,-2.932],[120.39,-4.098],[120.431,-5.528],[119.797,-5.673],[119.367,-5.38],[119.654,-4.459],[119.499,-3.494],[119.078,-3.487],[118.768,-2.802],[119.181,-2.147],[119.323,-1.353],[119.826,.154],[120.036,.566],[120.886,1.309],[121.667,1.014],[122.928,.875],[124.078,.917],[125.066,1.643],[125.241,1.42]]],[[[128.688,1.132],[128.636,.258],[128.12,.356],[127.968,-.252],[128.38,-.78],[128.1,-.9],[127.696,-.267],[127.399,1.012],[127.601,1.811],[127.932,2.175],[128.004,1.629],[128.595,1.541],[128.688,1.132]]],[[[105.818,-5.852],[104.71,-5.873],[103.868,-5.037],[102.584,-4.22],[102.156,-3.614],[101.399,-2.8],[100.903,-2.05],[100.142,-.65],[99.264,.183],[98.97,1.043],[98.601,1.824],[97.7,2.453],[97.177,3.309],[96.424,3.869],[95.381,4.971],[95.293,5.48],[95.937,5.44],[97.485,5.246],[98.369,4.268],[99.143,3.59],[99.694,3.174],[100.641,2.099],[101.658,2.084],[102.498,1.399],[103.077,.561],[103.838,.105],[103.438,-.712],[104.011,-1.059],[104.37,-1.085],[104.539,-1.782],[104.888,-2.34],[105.622,-2.429],[106.109,-3.062],[105.857,-4.306],[105.818,-5.852]]],[[[117.876,1.828],[118.997,.902],[117.812,.784],[117.478,.102],[117.522,-.804],[116.56,-1.488],[116.534,-2.484],[116.148,-4.013],[116.001,-3.657],[114.865,-4.107],[114.469,-3.496],[113.756,-3.439],[113.257,-3.119],[112.068,-3.478],[111.703,-2.994],[111.048,-3.049],[110.224,-2.934],[110.071,-1.593],[109.572,-1.315],[109.092,-.46],[108.953,.415],[109.069,1.342],[109.663,2.006],[110.396,1.664],[111.169,1.851],[111.37,2.697],[111.797,2.886],[112.996,3.102],[113.713,3.894],[114.204,4.526],[114.6,4.9],[115.451,5.448],[116.221,6.143],[116.725,6.925],[117.13,6.928],[117.643,6.422],[117.689,5.987],[118.348,5.709],[119.182,5.408],[119.111,5.016],[118.44,4.967],[118.618,4.478],[117.882,4.138],[117.313,3.234],[118.048,2.288],[117.876,1.828]]],[[[126.377,8.415],[126.479,7.75],[126.537,7.189],[126.197,6.274],[125.831,7.294],[125.364,6.786],[125.683,6.05],[125.397,5.581],[124.22,6.161],[123.939,6.885],[124.244,7.361],[123.61,7.834],[123.296,7.419],[122.826,7.457],[122.085,6.899],[121.92,7.192],[122.312,8.035],[122.942,8.316],[123.488,8.693],[123.841,8.24],[124.601,8.514],[124.765,8.96],[125.471,8.987],[125.412,9.76],[126.223,9.286],[126.307,8.782],[126.377,8.415]]],[[[81.218,6.197],[80.348,5.968],[79.872,6.763],[79.695,8.201],[80.148,9.824],[80.839,9.268],[81.304,8.564],[81.788,7.523],[81.637,6.482],[81.218,6.197]]],[[[-60.935,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.365],[-61.68,10.76],[-61.105,10.89],[-60.895,10.855],[-60.935,10.11]]],[[[123.982,10.279],[123.623,9.95],[123.31,9.318],[122.996,9.022],[122.38,9.713],[122.586,9.981],[122.837,10.261],[122.947,10.882],[123.499,10.941],[123.338,10.267],[124.078,11.233],[123.982,10.279]]],[[[118.505,9.316],[117.174,8.367],[117.664,9.067],[118.387,9.684],[118.987,10.376],[119.511,11.37],[119.69,10.554],[119.029,10.004],[118.505,9.316]]],[[[121.884,11.892],[122.484,11.582],[123.12,11.584],[123.101,11.166],[122.638,10.741],[122.003,10.441],[121.967,10.906],[122.038,11.416],[121.884,11.892]]],[[[125.503,12.163],[125.783,11.046],[125.012,11.311],[125.033,10.976],[125.277,10.359],[124.802,10.135],[124.76,10.838],[124.459,10.89],[124.303,11.495],[124.891,11.416],[124.878,11.794],[124.267,12.558],[125.227,12.536],[125.503,12.163]]],[[[121.527,13.07],[121.262,12.206],[120.834,12.704],[120.323,13.466],[121.18,13.43],[121.527,13.07]]],[[[121.321,18.504],[121.938,18.219],[122.246,18.479],[122.337,18.225],[122.174,17.81],[122.516,17.094],[122.252,16.262],[121.663,15.931],[121.505,15.125],[121.729,14.328],[122.259,14.218],[122.701,14.337],[123.95,13.782],[123.855,13.238],[124.181,12.998],[124.077,12.537],[123.298,13.028],[122.929,13.553],[122.671,13.186],[122.035,13.784],[121.126,13.637],[120.629,13.858],[120.679,14.271],[120.992,14.525],[120.693,14.757],[120.564,14.396],[120.07,14.971],[119.921,15.406],[119.884,16.364],[120.286,16.035],[120.39,17.599],[120.716,18.505],[121.321,18.504]]],[[[-65.591,18.228],[-65.847,17.976],[-66.6,17.982],[-67.184,17.947],[-67.242,18.374],[-67.101,18.521],[-66.282,18.515],[-65.771,18.427],[-65.591,18.228]]],[[[-76.903,17.868],[-77.206,17.701],[-77.766,17.862],[-78.338,18.226],[-78.218,18.455],[-77.797,18.524],[-77.57,18.491],[-76.897,18.401],[-76.365,18.161],[-76.2,17.887],[-76.903,17.868]]],[[[-72.58,19.872],[-71.712,19.714],[-71.587,19.885],[-70.807,19.88],[-70.214,19.623],[-69.951,19.648],[-69.769,19.293],[-69.222,19.313],[-69.254,19.015],[-68.809,18.979],[-68.318,18.612],[-68.689,18.205],[-69.165,18.423],[-69.624,18.381],[-69.953,18.428],[-70.133,18.246],[-70.517,18.184],[-70.669,18.427],[-71,18.283],[-71.4,17.599],[-71.658,17.758],[-71.708,18.045],[-72.372,18.215],[-72.844,18.146],[-73.455,18.218],[-73.922,18.031],[-74.458,18.343],[-74.37,18.665],[-73.45,18.526],[-72.695,18.446],[-72.335,18.668],[-72.792,19.102],[-72.784,19.484],[-73.415,19.64],[-73.19,19.916],[-72.58,19.872]]],[[[110.339,18.678],[109.475,18.198],[108.655,18.508],[108.626,19.368],[109.119,19.821],[110.212,20.101],[110.787,20.078],[111.01,19.696],[110.571,19.256],[110.339,18.678]]],[[[-155.542,19.083],[-155.688,18.916],[-155.937,19.059],[-155.908,19.339],[-156.073,19.703],[-156.024,19.814],[-155.85,19.977],[-155.919,20.174],[-155.861,20.267],[-155.785,20.249],[-155.402,20.08],[-155.225,19.993],[-155.062,19.859],[-154.807,19.509],[-154.831,19.453],[-155.222,19.24],[-155.542,19.083]]],[[[-156.079,20.644],[-156.414,20.572],[-156.587,20.783],[-156.702,20.864],[-156.711,20.927],[-156.613,21.012],[-156.257,20.917],[-155.996,20.764],[-156.079,20.644]]],[[[-156.758,21.177],[-156.789,21.069],[-157.325,21.098],[-157.25,21.22],[-156.758,21.177]]],[[[-157.653,21.322],[-157.707,21.264],[-157.779,21.277],[-158.127,21.312],[-158.254,21.539],[-158.293,21.579],[-158.025,21.717],[-157.942,21.653],[-157.653,21.322]]],[[[-159.345,21.982],[-159.464,21.883],[-159.801,22.065],[-159.749,22.138],[-159.596,22.236],[-159.366,22.215],[-159.345,21.982]]],[[[-79.68,22.765],[-79.281,22.399],[-78.347,22.512],[-77.993,22.277],[-77.146,21.658],[-76.524,21.207],[-76.195,21.221],[-75.598,21.017],[-75.671,20.735],[-74.934,20.694],[-74.178,20.285],[-74.297,20.05],[-74.962,19.923],[-75.635,19.874],[-76.324,19.953],[-77.755,19.855],[-77.085,20.413],[-77.493,20.673],[-78.137,20.74],[-78.483,21.029],[-78.72,21.598],[-79.285,21.559],[-80.217,21.827],[-80.518,22.037],[-81.821,22.192],[-82.17,22.387],[-81.795,22.637],[-82.776,22.688],[-83.494,22.169],[-83.909,22.155],[-84.052,21.911],[-84.547,21.801],[-84.975,21.896],[-84.447,22.205],[-84.23,22.566],[-83.778,22.788],[-83.268,22.983],[-82.51,23.079],[-82.268,23.189],[-81.404,23.117],[-80.619,23.106],[-79.68,22.765]]],[[[-77.535,23.76],[-77.78,23.71],[-78.034,24.286],[-78.408,24.576],[-78.191,25.21],[-77.89,25.17],[-77.54,24.34],[-77.535,23.76]]],[[[121.176,22.791],[120.747,21.971],[120.22,22.815],[120.106,23.556],[120.695,24.538],[121.495,25.295],[121.951,24.998],[121.778,24.394],[121.176,22.791]]],[[[-77.82,26.58],[-78.91,26.42],[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58]]],[[[-77,26.59],[-77.173,25.879],[-77.356,26.007],[-77.34,26.53],[-77.788,26.925],[-77.79,27.04],[-77,26.59]]],[[[134.638,34.149],[134.766,33.806],[134.203,33.201],[133.793,33.522],[133.28,33.29],[133.015,32.705],[132.363,32.989],[132.371,33.464],[132.924,34.06],[133.493,33.945],[133.904,34.365],[134.638,34.149]]],[[[34.576,35.672],[33.901,35.246],[33.974,35.059],[34.005,34.978],[32.98,34.572],[32.49,34.702],[32.257,35.103],[32.732,35.14],[32.802,35.146],[32.947,35.387],[33.667,35.373],[34.576,35.672]]],[[[23.7,35.705],[24.247,35.368],[25.025,35.425],[25.769,35.354],[25.745,35.18],[26.29,35.3],[26.165,35.005],[24.725,34.92],[24.735,35.085],[23.515,35.28],[23.7,35.705]]],[[[15.52,38.231],[15.16,37.444],[15.31,37.134],[15.1,36.62],[14.335,36.997],[13.827,37.105],[12.431,37.613],[12.571,38.126],[13.741,38.035],[14.761,38.144],[15.52,38.231]]],[[[9.21,41.21],[9.81,40.5],[9.67,39.177],[9.215,39.24],[8.807,38.907],[8.428,39.172],[8.388,40.378],[8.16,40.95],[8.71,40.9],[9.21,41.21]]],[[[140.976,37.142],[140.6,36.344],[140.774,35.843],[140.253,35.138],[138.976,34.668],[137.218,34.606],[135.793,33.465],[135.121,33.849],[135.079,34.597],[133.34,34.376],[132.157,33.905],[130.986,33.886],[132,33.15],[131.333,31.45],[130.686,31.03],[130.202,31.418],[130.448,32.319],[129.815,32.61],[129.408,33.296],[130.354,33.604],[130.878,34.233],[131.884,34.75],[132.618,35.433],[134.608,35.732],[135.678,35.527],[136.724,37.305],[137.391,36.827],[138.858,37.827],[139.426,38.216],[140.055,39.439],[139.883,40.563],[140.306,41.195],[141.369,41.379],[141.914,39.992],[141.885,39.181],[140.959,38.174],[140.976,37.142]]],[[[9.56,42.152],[9.23,41.38],[8.776,41.584],[8.544,42.257],[8.746,42.628],[9.39,43.01],[9.56,42.152]]],[[[143.91,44.174],[144.613,43.961],[145.321,44.385],[145.543,43.262],[144.06,42.988],[143.184,41.995],[141.611,42.679],[141.067,41.585],[139.955,41.57],[139.818,42.564],[140.312,43.333],[141.381,43.389],[141.672,44.772],[141.968,45.551],[143.143,44.51],[143.91,44.174]]],[[[-63.664,46.55],[-62.939,46.416],[-62.012,46.443],[-62.504,46.033],[-62.874,45.968],[-64.143,46.393],[-64.393,46.727],[-64.015,47.036],[-63.664,46.55]]],[[[-61.806,49.105],[-62.293,49.087],[-63.589,49.401],[-64.519,49.873],[-64.173,49.957],[-62.858,49.706],[-61.836,49.289],[-61.806,49.105]]],[[[-123.51,48.51],[-124.013,48.371],[-125.655,48.825],[-125.955,49.18],[-126.85,49.53],[-127.03,49.815],[-128.059,49.995],[-128.445,50.539],[-128.358,50.771],[-127.309,50.553],[-126.695,50.401],[-125.755,50.295],[-125.415,49.95],[-124.921,49.475],[-123.923,49.062],[-123.51,48.51]]],[[[-56.134,50.687],[-56.796,49.812],[-56.143,50.15],[-55.471,49.936],[-55.822,49.587],[-54.935,49.313],[-54.474,49.557],[-53.477,49.249],[-53.786,48.517],[-53.086,48.688],[-52.959,48.157],[-52.648,47.536],[-53.069,46.655],[-53.521,46.618],[-54.179,46.807],[-53.962,47.625],[-54.24,47.752],[-55.401,46.885],[-55.997,46.92],[-55.291,47.39],[-56.251,47.633],[-57.325,47.573],[-59.266,47.603],[-59.419,47.899],[-58.797,48.252],[-59.232,48.523],[-58.392,49.126],[-57.359,50.718],[-56.739,51.287],[-55.871,51.632],[-55.407,51.588],[-55.6,51.317],[-56.134,50.687]]],[[[-132.71,54.04],[-132.71,54.04],[-132.71,54.04],[-132.71,54.04],[-131.75,54.12],[-132.049,52.985],[-131.179,52.18],[-131.578,52.182],[-132.18,52.64],[-132.55,53.1],[-133.055,53.411],[-133.24,53.851],[-133.18,54.17],[-132.71,54.04]]],[[[143.648,50.748],[144.654,48.976],[143.174,49.307],[142.559,47.862],[143.533,46.837],[143.505,46.138],[142.748,46.741],[142.092,45.967],[141.907,46.806],[142.018,47.78],[141.904,48.859],[142.136,49.615],[142.18,50.952],[141.594,51.935],[141.683,53.302],[142.607,53.762],[142.21,54.225],[142.655,54.366],[142.915,53.705],[143.261,52.741],[143.235,51.757],[143.648,50.748]]],[[[-6.789,52.26],[-8.562,51.669],[-9.977,51.82],[-9.166,52.865],[-9.689,53.881],[-8.328,54.665],[-7.572,55.132],[-6.734,55.173],[-5.662,54.555],[-6.198,53.868],[-6.033,53.153],[-6.789,52.26]]],[[[12.69,55.61],[12.09,54.8],[11.044,55.365],[10.904,55.78],[12.371,56.111],[12.69,55.61]]],[[[-153.006,57.116],[-154.005,56.735],[-154.516,56.993],[-154.671,57.461],[-153.763,57.817],[-153.229,57.969],[-152.565,57.901],[-152.141,57.591],[-153.006,57.116]]],[[[-3.005,58.635],[-4.074,57.553],[-3.055,57.69],[-1.959,57.685],[-2.22,56.87],[-3.119,55.974],[-2.085,55.91],[-1.115,54.625],[-.43,54.464],[.185,53.325],[.47,52.93],[1.682,52.74],[1.56,52.1],[1.051,51.807],[1.45,51.289],[.55,50.766],[-.788,50.775],[-2.49,50.5],[-2.956,50.697],[-3.617,50.228],[-4.543,50.342],[-5.245,49.96],[-5.777,50.16],[-4.31,51.21],[-3.415,51.426],[-4.984,51.593],[-5.267,51.991],[-4.222,52.301],[-4.77,52.84],[-4.58,53.495],[-3.092,53.404],[-2.945,53.985],[-3.63,54.615],[-4.844,54.791],[-5.083,55.062],[-4.719,55.508],[-5.048,55.784],[-5.586,55.311],[-5.645,56.275],[-6.15,56.785],[-5.787,57.819],[-5.01,58.63],[-4.211,58.551],[-3.005,58.635]]],[[[-165.579,59.91],[-166.193,59.754],[-166.848,59.941],[-167.455,60.213],[-166.468,60.384],[-165.674,60.294],[-165.579,59.91]]],[[[-79.266,62.159],[-79.658,61.633],[-80.1,61.718],[-80.362,62.016],[-80.315,62.086],[-79.929,62.386],[-79.52,62.364],[-79.266,62.159]]],[[[-81.898,62.711],[-83.069,62.159],[-83.775,62.182],[-83.994,62.453],[-83.25,62.914],[-81.877,62.905],[-81.898,62.711]]],[[[-171.732,63.783],[-171.114,63.592],[-170.491,63.695],[-169.683,63.431],[-168.689,63.298],[-168.772,63.189],[-169.529,62.977],[-170.291,63.194],[-170.671,63.376],[-171.553,63.318],[-171.791,63.406],[-171.732,63.783]]],[[[-85.161,65.657],[-84.976,65.218],[-84.464,65.372],[-83.883,65.11],[-82.788,64.767],[-81.642,64.455],[-81.553,63.98],[-80.817,64.057],[-80.103,63.726],[-80.991,63.411],[-82.547,63.652],[-83.109,64.102],[-84.1,63.57],[-85.523,63.052],[-85.867,63.637],[-87.222,63.541],[-86.353,64.036],[-86.225,64.823],[-85.884,65.739],[-85.161,65.657]]],[[[-14.509,66.456],[-14.74,65.809],[-13.61,65.127],[-14.91,64.364],[-17.794,63.679],[-18.656,63.496],[-19.973,63.644],[-22.763,63.96],[-21.778,64.402],[-23.955,64.891],[-22.184,65.085],[-22.227,65.379],[-24.326,65.611],[-23.651,66.263],[-22.135,66.41],[-20.576,65.732],[-19.057,66.277],[-17.799,65.994],[-16.168,66.527],[-14.509,66.456]]],[[[-75.866,67.149],[-76.987,67.099],[-77.236,67.588],[-76.812,68.149],[-75.895,68.287],[-75.115,68.01],[-75.103,67.582],[-75.216,67.444],[-75.866,67.149]]],[[[-175.014,66.584],[-174.34,66.336],[-174.572,67.062],[-171.857,66.913],[-169.9,65.977],[-170.891,65.541],[-172.53,65.438],[-172.555,64.461],[-172.955,64.253],[-173.892,64.283],[-174.654,64.631],[-175.984,64.923],[-176.207,65.357],[-177.223,65.52],[-178.36,65.391],[-178.903,65.74],[-178.686,66.112],[-179.884,65.875],[-179.433,65.404],[-180,64.98],[-180,68.964],[-177.55,68.2],[-174.928,67.206],[-175.014,66.584]]],[[[-95.648,69.108],[-96.27,68.757],[-97.617,69.06],[-98.432,68.951],[-99.797,69.4],[-98.917,69.71],[-98.218,70.144],[-97.157,69.86],[-96.557,69.68],[-96.257,69.49],[-95.648,69.108]]],[[[180,70.832],[178.903,70.781],[178.725,71.099],[180,71.516],[180,70.832]]],[[[-178.694,70.893],[-180,70.832],[-180,71.516],[-179.872,71.558],[-179.024,71.556],[-177.578,71.269],[-177.664,71.133],[-178.694,70.893]]],[[[-90.547,69.498],[-90.552,68.475],[-89.215,69.259],[-88.02,68.615],[-88.318,67.873],[-87.35,67.199],[-86.306,67.922],[-85.577,68.784],[-85.522,69.882],[-84.101,69.805],[-82.622,69.658],[-81.28,69.162],[-81.22,68.666],[-81.964,68.133],[-81.259,67.597],[-81.386,67.111],[-83.344,66.412],[-84.735,66.257],[-85.769,66.558],[-86.068,66.056],[-87.031,65.213],[-87.323,64.776],[-88.483,64.099],[-89.914,64.033],[-90.704,63.61],[-90.77,62.96],[-91.933,62.835],[-93.157,62.025],[-94.242,60.899],[-94.629,60.11],[-94.685,58.949],[-93.215,58.782],[-92.765,57.846],[-92.297,57.087],[-90.898,57.285],[-89.039,56.852],[-88.04,56.472],[-87.324,55.999],[-86.071,55.724],[-85.012,55.303],[-83.36,55.245],[-82.273,55.148],[-82.436,54.282],[-82.125,53.277],[-81.401,52.158],[-79.913,51.208],[-79.143,51.534],[-78.602,52.562],[-79.124,54.141],[-79.83,54.668],[-78.229,55.136],[-77.096,55.838],[-76.541,56.534],[-76.623,57.203],[-77.302,58.052],[-78.517,58.805],[-77.337,59.853],[-77.773,60.758],[-78.107,62.32],[-77.411,62.55],[-75.696,62.279],[-74.668,62.181],[-73.84,62.444],[-72.909,62.105],[-71.677,61.525],[-71.374,61.137],[-69.59,61.062],[-69.62,60.221],[-69.288,58.957],[-68.375,58.801],[-67.65,58.212],[-66.202,58.767],[-65.245,59.871],[-64.583,60.336],[-63.805,59.443],[-62.502,58.167],[-61.396,56.968],[-61.799,56.339],[-60.469,55.776],[-59.57,55.204],[-57.975,54.945],[-57.333,54.627],[-56.937,53.78],[-56.158,53.648],[-55.756,53.271],[-55.683,52.147],[-56.409,51.771],[-57.127,51.42],[-58.775,51.064],[-60.033,50.243],[-61.724,50.081],[-63.862,50.291],[-65.363,50.298],[-66.399,50.229],[-67.236,49.511],[-68.511,49.068],[-69.954,47.745],[-71.104,46.822],[-70.255,46.986],[-68.65,48.3],[-66.552,49.133],[-65.056,49.233],[-64.171,48.742],[-65.115,48.071],[-64.799,46.993],[-64.472,46.239],[-63.173,45.739],[-61.521,45.884],[-60.518,47.008],[-60.449,46.283],[-59.803,45.92],[-61.04,45.265],[-63.255,44.67],[-64.247,44.266],[-65.364,43.545],[-66.123,43.619],[-66.162,44.465],[-64.425,45.292],[-66.026,45.259],[-67.137,45.138],[-66.965,44.81],[-68.032,44.325],[-69.06,43.98],[-70.116,43.684],[-70.69,43.03],[-70.815,42.865],[-70.825,42.335],[-70.495,41.805],[-70.08,41.78],[-70.185,42.145],[-69.885,41.923],[-69.965,41.637],[-70.64,41.475],[-71.12,41.495],[-71.86,41.32],[-72.295,41.27],[-72.876,41.221],[-73.71,40.931],[-72.241,41.12],[-71.945,40.93],[-73.345,40.63],[-73.982,40.628],[-73.952,40.751],[-74.257,40.474],[-73.962,40.428],[-74.178,39.709],[-74.906,38.94],[-74.98,39.196],[-75.2,39.248],[-75.528,39.498],[-75.32,38.96],[-75.083,38.781],[-75.057,38.404],[-75.377,38.016],[-75.94,37.217],[-76.031,37.257],[-75.722,37.937],[-76.233,38.319],[-76.35,39.15],[-76.543,38.718],[-76.329,38.083],[-76.96,38.233],[-76.302,37.918],[-76.259,36.966],[-75.972,36.897],[-75.868,36.551],[-75.727,35.551],[-76.363,34.808],[-77.398,34.512],[-78.055,33.925],[-78.554,33.861],[-79.061,33.494],[-79.203,33.159],[-80.301,32.509],[-80.865,32.033],[-81.336,31.44],[-81.49,30.73],[-81.314,30.036],[-80.98,29.18],[-80.536,28.472],[-80.53,28.04],[-80.057,26.88],[-80.088,26.206],[-80.131,25.817],[-80.381,25.206],[-80.68,25.08],[-81.172,25.201],[-81.33,25.64],[-81.71,25.87],[-82.24,26.73],[-82.705,27.495],[-82.855,27.886],[-82.65,28.55],[-82.93,29.1],[-83.71,29.937],[-84.1,30.09],[-85.109,29.636],[-85.288,29.686],[-85.773,30.153],[-86.4,30.4],[-87.53,30.274],[-88.418,30.385],[-89.18,30.316],[-89.605,30.176],[-89.414,29.894],[-89.43,29.489],[-89.218,29.291],[-89.408,29.16],[-89.779,29.307],[-90.155,29.117],[-90.88,29.149],[-91.627,29.677],[-92.499,29.552],[-93.226,29.784],[-93.848,29.714],[-94.69,29.48],[-95.6,28.739],[-96.594,28.307],[-97.14,27.83],[-97.37,27.38],[-97.38,26.69],[-97.33,26.21],[-97.14,25.87],[-97.139,25.868],[-97.142,25.866],[-97.528,24.992],[-97.703,24.272],[-97.776,22.933],[-97.872,22.444],[-97.699,21.899],[-97.389,21.411],[-97.189,20.635],[-96.526,19.891],[-96.292,19.32],[-95.901,18.828],[-94.839,18.563],[-94.426,18.144],[-93.549,18.424],[-92.786,18.525],[-92.037,18.705],[-91.408,18.876],[-90.772,19.284],[-90.534,19.867],[-90.451,20.708],[-90.279,21],[-89.601,21.262],[-88.544,21.494],[-87.658,21.459],[-87.052,21.544],[-86.812,21.331],[-86.846,20.85],[-87.383,20.255],[-87.621,19.646],[-87.437,19.472],[-87.586,19.04],[-87.837,18.26],[-88.091,18.517],[-88.3,18.5],[-88.296,18.353],[-88.107,18.349],[-88.123,18.077],[-88.285,17.644],[-88.198,17.49],[-88.303,17.132],[-88.24,17.036],[-88.355,16.531],[-88.552,16.266],[-88.732,16.234],[-88.931,15.887],[-88.605,15.706],[-88.518,15.856],[-88.225,15.728],[-88.121,15.689],[-87.902,15.865],[-87.616,15.879],[-87.523,15.797],[-87.368,15.847],[-86.903,15.757],[-86.441,15.783],[-86.119,15.893],[-86.002,16.005],[-85.683,15.954],[-85.444,15.886],[-85.182,15.909],[-84.984,15.996],[-84.527,15.857],[-84.368,15.835],[-84.063,15.648],[-83.774,15.424],[-83.41,15.271],[-83.147,14.996],[-83.233,14.9],[-83.284,14.677],[-83.182,14.311],[-83.412,13.97],[-83.52,13.568],[-83.552,13.127],[-83.498,12.869],[-83.473,12.419],[-83.626,12.321],[-83.72,11.893],[-83.651,11.629],[-83.855,11.373],[-83.809,11.103],[-83.656,10.939],[-83.402,10.396],[-83.016,9.993],[-82.546,9.566],[-82.187,9.208],[-82.208,8.996],[-81.809,8.951],[-81.714,9.032],[-81.439,8.786],[-80.947,8.859],[-80.522,9.111],[-79.915,9.313],[-79.573,9.612],[-79.021,9.553],[-79.058,9.455],[-78.501,9.42],[-78.056,9.248],[-77.729,8.947],[-77.353,8.67],[-76.837,8.639],[-76.086,9.337],[-75.675,9.443],[-75.665,9.774],[-75.48,10.619],[-74.907,11.083],[-74.277,11.102],[-74.197,11.31],[-73.415,11.227],[-72.628,11.732],[-72.238,11.956],[-71.754,12.437],[-71.4,12.376],[-71.137,12.113],[-71.332,11.776],[-71.36,11.54],[-71.947,11.423],[-71.621,10.969],[-71.633,10.446],[-72.074,9.866],[-71.696,9.072],[-71.265,9.137],[-71.04,9.86],[-71.35,10.212],[-71.401,10.969],[-70.155,11.375],[-70.294,11.847],[-69.943,12.162],[-69.584,11.46],[-68.883,11.443],[-68.233,10.886],[-68.194,10.555],[-67.296,10.546],[-66.228,10.649],[-65.655,10.201],[-64.89,10.077],[-64.329,10.39],[-64.318,10.641],[-63.079,10.702],[-61.881,10.716],[-62.73,10.42],[-62.388,9.948],[-61.589,9.873],[-60.831,9.381],[-60.671,8.58],[-60.15,8.603],[-59.758,8.367],[-59.102,7.999],[-58.483,7.348],[-58.455,6.833],[-58.078,6.809],[-57.542,6.321],[-57.147,5.973],[-55.949,5.773],[-55.842,5.953],[-55.033,6.025],[-53.958,5.757],[-53.618,5.646],[-52.882,5.41],[-51.823,4.566],[-51.658,4.156],[-51.317,4.203],[-51.07,3.651],[-50.509,1.901],[-49.974,1.737],[-49.947,1.046],[-50.699,.223],[-50.388,-.078],[-48.62,-.235],[-48.584,-1.238],[-47.825,-.582],[-46.567,-.941],[-44.906,-1.552],[-44.418,-2.138],[-44.582,-2.691],[-43.419,-2.383],[-41.473,-2.912],[-39.979,-2.873],[-38.5,-3.701],[-37.223,-4.821],[-36.453,-5.109],[-35.598,-5.149],[-35.235,-5.465],[-34.896,-6.738],[-34.73,-7.343],[-35.128,-8.996],[-35.637,-9.649],[-37.047,-11.041],[-37.684,-12.171],[-38.424,-13.038],[-38.674,-13.058],[-38.953,-13.793],[-38.882,-15.667],[-39.161,-17.208],[-39.267,-17.868],[-39.583,-18.262],[-39.761,-19.599],[-40.775,-20.904],[-40.945,-21.937],[-41.754,-22.371],[-41.988,-22.97],[-43.075,-22.968],[-44.648,-23.352],[-45.352,-23.797],[-46.472,-24.089],[-47.649,-24.885],[-48.495,-25.877],[-48.641,-26.624],[-48.475,-27.176],[-48.661,-28.186],[-48.888,-28.674],[-49.587,-29.224],[-50.697,-30.984],[-51.576,-31.778],[-52.256,-32.245],[-52.712,-33.197],[-53.374,-33.768],[-53.806,-34.397],[-54.936,-34.953],[-55.674,-34.753],[-56.215,-34.86],[-57.14,-34.43],[-57.818,-34.463],[-58.427,-33.909],[-58.495,-34.432],[-57.226,-35.288],[-57.362,-35.977],[-56.737,-36.413],[-56.788,-36.901],[-57.749,-38.184],[-59.232,-38.72],[-61.237,-38.928],[-62.336,-38.828],[-62.126,-39.424],[-62.331,-40.173],[-62.146,-40.677],[-62.746,-41.029],[-63.771,-41.167],[-64.732,-40.803],[-65.118,-41.064],[-64.979,-42.058],[-64.303,-42.359],[-63.756,-42.044],[-63.458,-42.563],[-64.379,-42.873],[-65.182,-43.495],[-65.329,-44.501],[-65.565,-45.037],[-66.51,-45.04],[-67.294,-45.552],[-67.581,-46.302],[-66.597,-47.034],[-65.641,-47.236],[-65.985,-48.133],[-67.166,-48.697],[-67.816,-49.87],[-68.729,-50.264],[-69.138,-50.732],[-68.815,-51.771],[-68.15,-52.35],[-68.571,-52.299],[-69.461,-52.292],[-69.943,-52.538],[-70.845,-52.899],[-71.006,-53.833],[-71.43,-53.856],[-72.558,-53.531],[-73.703,-52.835],[-74.947,-52.263],[-75.26,-51.629],[-74.977,-51.043],[-75.48,-50.378],[-75.608,-48.674],[-75.183,-47.712],[-74.127,-46.939],[-75.644,-46.648],[-74.692,-45.764],[-74.352,-44.103],[-73.24,-44.455],[-72.718,-42.383],[-73.389,-42.117],[-73.701,-43.366],[-74.332,-43.225],[-74.018,-41.795],[-73.677,-39.942],[-73.218,-39.259],[-73.505,-38.283],[-73.588,-37.156],[-73.167,-37.124],[-72.553,-35.509],[-71.862,-33.909],[-71.438,-32.419],[-71.669,-30.921],[-71.37,-30.096],[-71.49,-28.861],[-70.905,-27.64],[-70.725,-25.706],[-70.404,-23.629],[-70.091,-21.393],[-70.164,-19.756],[-70.372,-18.348],[-71.375,-17.774],[-71.462,-17.363],[-73.445,-16.359],[-75.238,-15.266],[-76.009,-14.649],[-76.423,-13.823],[-76.259,-13.535],[-77.106,-12.223],[-78.092,-10.378],[-79.037,-8.387],[-79.446,-7.931],[-79.76,-7.194],[-80.537,-6.542],[-81.25,-6.137],[-80.926,-5.69],[-81.411,-4.737],[-81.1,-4.036],[-80.302,-3.405],[-79.77,-2.657],[-79.987,-2.221],[-80.369,-2.685],[-80.968,-2.247],[-80.765,-1.965],[-80.934,-1.057],[-80.583,-.907],[-80.399,-.284],[-80.021,.36],[-80.091,.768],[-79.543,.983],[-78.855,1.381],[-78.991,1.691],[-78.618,1.766],[-78.662,2.267],[-78.428,2.63],[-77.932,2.697],[-77.51,3.325],[-77.128,3.85],[-77.496,4.088],[-77.308,4.668],[-77.533,5.583],[-77.319,5.845],[-77.477,6.691],[-77.882,7.224],[-78.215,7.512],[-78.429,8.052],[-78.182,8.319],[-78.435,8.388],[-78.622,8.718],[-79.12,8.996],[-79.558,8.932],[-79.76,8.584],[-80.164,8.333],[-80.383,8.299],[-80.481,8.09],[-80.004,7.547],[-80.277,7.42],[-80.421,7.271],[-80.886,7.221],[-81.06,7.818],[-81.19,7.648],[-81.519,7.707],[-81.721,8.109],[-82.131,8.175],[-82.391,8.292],[-82.82,8.291],[-82.851,8.074],[-82.966,8.225],[-83.508,8.447],[-83.711,8.657],[-83.596,8.831],[-83.633,9.052],[-83.91,9.291],[-84.303,9.487],[-84.648,9.615],[-84.713,9.908],[-84.976,10.087],[-84.911,9.796],[-85.111,9.557],[-85.339,9.834],[-85.661,9.933],[-85.797,10.135],[-85.792,10.439],[-85.659,10.754],[-85.942,10.895],[-85.713,11.089],[-86.058,11.404],[-86.526,11.807],[-86.746,12.144],[-87.167,12.458],[-87.669,12.91],[-87.557,13.065],[-87.392,12.914],[-87.317,12.985],[-87.489,13.297],[-87.793,13.385],[-87.904,13.149],[-88.483,13.164],[-88.843,13.26],[-89.257,13.459],[-89.812,13.521],[-90.096,13.735],[-90.609,13.91],[-91.232,13.928],[-91.69,14.126],[-92.228,14.539],[-93.359,15.615],[-93.875,15.94],[-94.692,16.201],[-95.25,16.128],[-96.053,15.752],[-96.557,15.654],[-97.264,15.917],[-98.013,16.107],[-98.948,16.566],[-99.697,16.706],[-100.83,17.171],[-101.666,17.649],[-101.919,17.916],[-102.478,17.976],[-103.501,18.292],[-103.917,18.749],[-104.992,19.316],[-105.493,19.947],[-105.731,20.434],[-105.398,20.532],[-105.501,20.817],[-105.271,21.076],[-105.266,21.422],[-105.603,21.871],[-105.693,22.269],[-106.029,22.774],[-106.91,23.768],[-107.915,24.549],[-108.402,25.172],[-109.26,25.581],[-109.444,25.825],[-109.292,26.443],[-109.801,26.676],[-110.392,27.162],[-110.641,27.86],[-111.179,27.941],[-111.76,28.468],[-112.228,28.955],[-112.272,29.267],[-112.81,30.021],[-113.164,30.787],[-113.149,31.171],[-113.872,31.568],[-114.206,31.524],[-114.776,31.8],[-114.937,31.393],[-114.771,30.914],[-114.674,30.163],[-114.331,29.75],[-113.589,29.062],[-113.424,28.826],[-113.272,28.755],[-113.14,28.411],[-112.962,28.425],[-112.762,27.78],[-112.458,27.526],[-112.245,27.172],[-111.617,26.663],[-111.285,25.733],[-110.988,25.295],[-110.71,24.826],[-110.655,24.299],[-110.173,24.266],[-109.772,23.811],[-109.409,23.365],[-109.433,23.186],[-109.854,22.818],[-110.031,22.823],[-110.295,23.431],[-110.95,24.001],[-111.671,24.484],[-112.182,24.739],[-112.149,25.47],[-112.301,26.012],[-112.777,26.322],[-113.465,26.768],[-113.597,26.64],[-113.849,26.9],[-114.466,27.142],[-115.055,27.723],[-114.982,27.798],[-114.57,27.742],[-114.199,28.115],[-114.162,28.566],[-114.932,29.279],[-115.519,29.556],[-115.887,30.181],[-116.258,30.836],[-116.721,31.636],[-117.128,32.535],[-117.296,33.046],[-117.944,33.621],[-118.411,33.741],[-118.52,34.028],[-119.081,34.078],[-119.439,34.349],[-120.368,34.447],[-120.623,34.609],[-120.744,35.157],[-121.715,36.162],[-122.547,37.552],[-122.512,37.784],[-122.953,38.114],[-123.727,38.952],[-123.865,39.767],[-124.398,40.313],[-124.179,41.142],[-124.214,42],[-124.533,42.766],[-124.142,43.708],[-123.899,45.523],[-124.08,46.865],[-124.396,47.72],[-124.687,48.185],[-124.566,48.38],[-123.12,48.04],[-122.587,47.096],[-122.34,47.36],[-122.5,48.18],[-122.84,49],[-122.974,49.003],[-124.91,49.985],[-125.625,50.417],[-127.436,50.831],[-127.993,51.716],[-127.85,52.33],[-129.13,52.755],[-129.305,53.562],[-130.515,54.288],[-130.536,54.803],[-131.086,55.179],[-131.967,55.498],[-132.25,56.37],[-133.539,57.179],[-134.078,58.123],[-135.038,58.188],[-136.628,58.212],[-137.8,58.5],[-139.868,59.538],[-140.825,59.727],[-142.574,60.084],[-143.959,59.999],[-145.925,60.459],[-147.114,60.885],[-148.224,60.673],[-148.018,59.978],[-148.571,59.914],[-149.728,59.706],[-150.608,59.368],[-151.716,59.156],[-151.859,59.745],[-151.41,60.726],[-150.347,61.034],[-150.621,61.284],[-151.896,60.727],[-152.578,60.062],[-154.019,59.35],[-153.287,58.865],[-154.232,58.146],[-155.307,57.728],[-156.308,57.423],[-156.556,56.98],[-158.117,56.464],[-158.433,55.994],[-159.603,55.567],[-160.29,55.644],[-161.223,55.365],[-162.238,55.024],[-163.069,54.69],[-164.786,54.404],[-164.942,54.572],[-163.848,55.039],[-162.87,55.348],[-161.804,55.895],[-160.564,56.008],[-160.07,56.418],[-158.684,57.017],[-158.461,57.217],[-157.723,57.57],[-157.55,58.328],[-157.042,58.919],[-158.195,58.616],[-158.517,58.788],[-159.059,58.424],[-159.712,58.932],[-159.981,58.573],[-160.355,59.071],[-161.355,58.671],[-161.969,58.672],[-162.055,59.267],[-161.874,59.634],[-162.518,59.99],[-163.818,59.798],[-164.662,60.268],[-165.346,60.508],[-165.351,61.074],[-166.121,61.5],[-165.734,62.075],[-164.919,62.633],[-164.563,63.146],[-163.753,63.219],[-163.067,63.06],[-162.26,63.542],[-161.534,63.456],[-160.773,63.766],[-160.958,64.223],[-161.518,64.403],[-160.778,64.789],[-161.392,64.777],[-162.453,64.56],[-162.758,64.339],[-163.546,64.559],[-164.961,64.447],[-166.425,64.687],[-166.845,65.089],[-168.11,65.67],[-166.705,66.088],[-164.475,66.577],[-163.653,66.577],[-163.789,66.077],[-161.678,66.116],[-162.49,66.735],[-163.72,67.117],[-164.431,67.616],[-165.39,68.043],[-166.764,68.359],[-166.205,68.883],[-164.431,68.916],[-163.169,69.371],[-162.93,69.858],[-161.909,70.333],[-160.935,70.448],[-159.039,70.892],[-158.12,70.825],[-156.581,71.358],[-155.068,71.148],[-154.344,70.696],[-153.9,70.89],[-152.21,70.83],[-152.27,70.6],[-150.74,70.43],[-149.72,70.53],[-147.613,70.214],[-145.69,70.12],[-144.92,69.99],[-143.589,70.153],[-142.073,69.852],[-140.986,69.712],[-139.12,69.471],[-137.546,68.99],[-136.504,68.898],[-135.626,69.315],[-134.415,69.628],[-132.929,69.505],[-131.431,69.945],[-129.795,70.194],[-129.108,69.779],[-128.362,70.013],[-128.138,70.484],[-127.447,70.377],[-125.756,69.481],[-124.425,70.159],[-124.29,69.4],[-123.061,69.564],[-122.683,69.856],[-121.472,69.798],[-119.943,69.378],[-117.603,69.011],[-116.226,68.841],[-115.247,68.906],[-113.898,68.399],[-115.305,67.903],[-113.497,67.688],[-110.798,67.806],[-109.946,67.981],[-108.88,67.382],[-107.792,67.888],[-108.813,68.312],[-108.167,68.654],[-106.95,68.7],[-106.15,68.8],[-105.343,68.561],[-104.338,68.018],[-103.221,68.098],[-101.454,67.647],[-99.902,67.806],[-98.443,67.782],[-98.559,68.404],[-97.669,68.579],[-96.12,68.24],[-96.126,67.294],[-95.489,68.091],[-94.685,68.064],[-94.233,69.069],[-95.304,69.686],[-96.471,70.09],[-96.391,71.195],[-95.209,71.92],[-93.89,71.76],[-92.878,71.319],[-91.52,70.191],[-92.407,69.7],[-90.547,69.498]]],[[[-114.167,73.121],[-114.666,72.653],[-112.441,72.955],[-111.05,72.45],[-109.92,72.961],[-109.007,72.633],[-108.188,71.651],[-107.686,72.065],[-108.396,73.09],[-107.516,73.236],[-106.523,73.076],[-105.402,72.673],[-104.775,71.698],[-104.465,70.993],[-102.785,70.498],[-100.981,70.024],[-101.089,69.584],[-102.731,69.504],[-102.093,69.12],[-102.43,68.753],[-104.24,68.91],[-105.96,69.18],[-107.123,69.119],[-109,68.78],[-111.967,68.604],[-113.313,68.536],[-113.855,69.007],[-115.22,69.28],[-116.108,69.168],[-117.34,69.96],[-116.675,70.067],[-115.131,70.237],[-113.721,70.192],[-112.416,70.366],[-114.35,70.6],[-116.487,70.52],[-117.905,70.541],[-118.432,70.909],[-116.113,71.309],[-117.656,71.295],[-119.402,71.559],[-118.563,72.308],[-117.866,72.706],[-115.189,73.315],[-114.167,73.121]]],[[[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6],[-105.26,73.64],[-104.5,73.42]]],[[[-76.34,73.103],[-76.251,72.826],[-77.314,72.856],[-78.392,72.877],[-79.486,72.742],[-79.776,72.803],[-80.876,73.333],[-80.834,73.693],[-80.353,73.76],[-78.064,73.652],[-76.34,73.103]]],[[[-86.562,73.157],[-85.774,72.534],[-84.85,73.34],[-82.316,73.751],[-80.6,72.717],[-80.749,72.062],[-78.771,72.352],[-77.825,72.75],[-75.606,72.244],[-74.229,71.767],[-74.099,71.331],[-72.242,71.557],[-71.2,70.92],[-68.786,70.525],[-67.915,70.122],[-66.969,69.186],[-68.805,68.72],[-66.45,68.067],[-64.862,67.848],[-63.425,66.928],[-61.852,66.862],[-62.163,66.16],[-63.918,64.999],[-65.149,65.426],[-66.721,66.388],[-68.015,66.263],[-68.141,65.69],[-67.09,65.108],[-65.732,64.648],[-65.32,64.383],[-64.669,63.393],[-65.014,62.674],[-66.275,62.945],[-68.783,63.746],[-67.37,62.884],[-66.328,62.28],[-66.166,61.931],[-68.877,62.33],[-71.023,62.911],[-72.235,63.398],[-71.886,63.68],[-73.378,64.194],[-74.834,64.679],[-74.819,64.389],[-77.71,64.23],[-78.556,64.573],[-77.897,65.309],[-76.018,65.327],[-73.96,65.455],[-74.294,65.812],[-73.945,66.311],[-72.651,67.285],[-72.926,67.727],[-73.312,68.069],[-74.843,68.555],[-76.869,68.895],[-76.229,69.148],[-77.287,69.77],[-78.169,69.826],[-78.957,70.167],[-79.492,69.872],[-81.305,69.743],[-84.945,69.967],[-87.06,70.26],[-88.682,70.411],[-89.513,70.762],[-88.468,71.218],[-89.888,71.223],[-90.205,72.235],[-89.437,73.129],[-88.408,73.538],[-85.826,73.804],[-86.562,73.157]]],[[[-100.356,73.844],[-99.164,73.633],[-97.38,73.76],[-97.12,73.47],[-98.054,72.991],[-96.54,72.56],[-96.72,71.66],[-98.36,71.273],[-99.323,71.356],[-100.015,71.738],[-102.5,72.51],[-102.48,72.83],[-100.438,72.706],[-101.54,73.36],[-100.356,73.844]]],[[[143.604,73.212],[142.088,73.205],[140.038,73.317],[139.863,73.37],[140.812,73.765],[142.062,73.858],[143.483,73.475],[143.604,73.212]]],[[[-93.196,72.772],[-94.269,72.025],[-95.41,72.062],[-96.034,72.94],[-96.018,73.437],[-95.496,73.862],[-94.504,74.135],[-92.42,74.1],[-90.51,73.857],[-92.004,72.966],[-93.196,72.772]]],[[[-120.46,71.4],[-123.092,70.902],[-123.62,71.34],[-125.929,71.869],[-125.593,72.195],[-124.807,73.023],[-123.94,73.68],[-124.918,74.293],[-121.538,74.449],[-120.11,74.241],[-117.556,74.186],[-116.584,73.896],[-115.511,73.475],[-116.768,73.223],[-119.22,72.52],[-120.46,71.82],[-120.46,71.4]]],[[[150.732,75.084],[149.576,74.689],[147.977,74.778],[146.119,75.173],[146.358,75.497],[148.222,75.346],[150.732,75.084]]],[[[-93.613,74.98],[-94.157,74.592],[-95.609,74.667],[-96.821,74.928],[-96.289,75.378],[-94.851,75.647],[-93.978,75.296],[-93.613,74.98]]],[[[145.086,75.563],[144.3,74.82],[140.614,74.848],[138.955,74.611],[136.974,75.262],[137.512,75.949],[138.831,76.137],[141.472,76.093],[145.086,75.563]]],[[[-98.5,76.72],[-97.736,76.257],[-97.704,75.743],[-98.16,75],[-99.809,74.897],[-100.884,75.057],[-100.863,75.641],[-102.502,75.564],[-102.566,76.337],[-101.49,76.305],[-99.983,76.646],[-98.577,76.589],[-98.5,76.72]]],[[[-108.211,76.202],[-107.819,75.846],[-106.929,76.013],[-105.881,75.969],[-105.705,75.48],[-106.313,75.005],[-109.7,74.85],[-112.223,74.417],[-113.744,74.394],[-113.871,74.72],[-111.794,75.162],[-116.312,75.043],[-117.71,75.222],[-116.346,76.199],[-115.405,76.479],[-112.591,76.141],[-110.814,75.549],[-109.067,75.473],[-110.497,76.43],[-109.581,76.794],[-108.549,76.678],[-108.211,76.202]]],[[[57.536,70.72],[56.945,70.633],[53.677,70.763],[53.412,71.207],[51.602,71.475],[51.456,72.015],[52.478,72.229],[52.444,72.775],[54.428,73.628],[53.508,73.75],[55.902,74.627],[55.632,75.081],[57.869,75.609],[61.17,76.252],[64.498,76.439],[66.211,76.81],[68.157,76.94],[68.852,76.545],[68.181,76.234],[64.637,75.738],[61.584,75.261],[58.477,74.309],[56.987,73.333],[55.419,72.371],[55.623,71.541],[57.536,70.72]]],[[[-94.684,77.098],[-93.574,76.776],[-91.605,76.779],[-90.742,76.45],[-90.97,76.074],[-89.822,75.848],[-89.187,75.61],[-87.838,75.566],[-86.379,75.482],[-84.79,75.699],[-82.753,75.784],[-81.129,75.714],[-80.058,75.337],[-79.834,74.923],[-80.458,74.657],[-81.949,74.442],[-83.229,74.564],[-86.097,74.41],[-88.15,74.392],[-89.765,74.516],[-92.422,74.838],[-92.768,75.387],[-92.89,75.883],[-93.894,76.319],[-95.962,76.441],[-97.121,76.751],[-96.745,77.161],[-94.684,77.098]]],[[[-116.199,77.645],[-116.336,76.877],[-117.106,76.53],[-118.04,76.481],[-119.899,76.053],[-121.5,75.9],[-122.855,76.117],[-122.855,76.117],[-121.158,76.865],[-119.104,77.512],[-117.57,77.498],[-116.199,77.645]]],[[[106.97,76.974],[107.24,76.48],[108.154,76.723],[111.077,76.71],[113.331,76.222],[114.134,75.848],[113.885,75.328],[112.779,75.032],[110.151,74.477],[109.4,74.18],[110.64,74.04],[112.119,73.788],[113.019,73.977],[113.53,73.335],[113.969,73.595],[115.568,73.753],[118.776,73.588],[119.02,73.12],[123.201,72.971],[123.258,73.735],[125.38,73.56],[126.977,73.565],[128.591,73.039],[129.052,72.399],[128.46,71.98],[129.716,71.193],[131.289,70.787],[132.253,71.836],[133.858,71.386],[135.562,71.655],[137.498,71.348],[138.234,71.628],[139.87,71.488],[139.148,72.416],[140.468,72.849],[149.5,72.2],[150.351,71.607],[152.969,70.842],[157.007,71.031],[158.998,70.867],[159.83,70.453],[159.709,69.722],[160.941,69.437],[162.279,69.642],[164.052,69.668],[165.94,69.472],[167.836,69.583],[169.578,68.694],[170.817,69.014],[170.008,69.653],[170.453,70.097],[173.644,69.818],[175.724,69.877],[178.6,69.4],[180,68.964],[180,64.98],[179.993,64.974],[178.707,64.535],[177.411,64.608],[178.313,64.076],[178.908,63.252],[179.37,62.983],[179.487,62.569],[179.228,62.304],[177.364,62.522],[174.569,61.769],[173.68,61.653],[172.15,60.95],[170.698,60.336],[170.331,59.882],[168.901,60.573],[166.295,59.789],[165.84,60.16],[164.877,59.732],[163.539,59.869],[163.217,59.211],[162.017,58.243],[162.053,57.839],[163.192,57.615],[163.058,56.159],[162.13,56.122],[161.701,55.286],[162.117,54.855],[160.369,54.344],[160.022,53.203],[158.531,52.959],[158.231,51.943],[156.79,51.011],[156.42,51.7],[155.992,53.159],[155.434,55.381],[155.914,56.768],[156.758,57.365],[156.81,57.832],[158.364,58.056],[160.151,59.315],[161.872,60.343],[163.67,61.141],[164.474,62.551],[163.258,62.466],[162.658,61.643],[160.122,60.544],[159.302,61.774],[156.721,61.435],[154.218,59.758],[155.044,59.145],[152.812,58.884],[151.266,58.781],[151.338,59.504],[149.784,59.656],[148.545,59.164],[145.487,59.336],[142.198,59.04],[138.958,57.088],[135.126,54.73],[136.702,54.604],[137.193,53.977],[138.165,53.755],[138.805,54.255],[139.901,54.19],[141.345,53.09],[141.379,52.239],[140.597,51.24],[140.513,50.045],[140.062,48.447],[138.555,47],[138.22,46.308],[136.862,45.143],[135.515,43.989],[134.87,43.398],[133.537,42.812],[132.906,42.799],[132.278,43.284],[130.936,42.553],[130.78,42.22],[130.4,42.28],[129.966,41.941],[129.667,41.601],[129.705,40.883],[129.188,40.662],[129.01,40.485],[128.633,40.19],[127.968,40.026],[127.534,39.757],[127.502,39.324],[127.385,39.214],[127.783,39.051],[128.35,38.612],[129.213,37.432],[129.461,36.784],[129.468,35.632],[129.091,35.083],[128.186,34.891],[127.386,34.476],[126.486,34.39],[126.374,34.935],[126.559,35.685],[126.117,36.726],[126.86,36.894],[126.175,37.75],[125.689,37.94],[125.568,37.752],[125.275,37.669],[125.24,37.857],[124.981,37.949],[124.712,38.108],[124.986,38.549],[125.222,38.666],[125.133,38.849],[125.387,39.388],[125.321,39.552],[124.737,39.66],[124.266,39.929],[122.868,39.638],[122.132,39.17],[121.055,38.898],[121.586,39.361],[121.377,39.75],[122.169,40.422],[121.641,40.946],[120.769,40.594],[119.64,39.898],[119.023,39.252],[118.043,39.204],[117.533,38.738],[118.06,38.062],[118.878,37.897],[118.912,37.448],[119.703,37.156],[120.823,37.87],[121.711,37.481],[122.358,37.455],[122.52,36.931],[121.104,36.651],[120.637,36.112],[119.665,35.61],[119.151,34.91],[120.227,34.36],[120.62,33.377],[121.229,32.46],[121.908,31.692],[121.892,30.949],[121.264,30.676],[121.503,30.143],[122.092,29.833],[121.938,29.018],[121.685,28.226],[121.126,28.136],[120.396,27.053],[119.586,25.741],[118.657,24.547],[117.282,23.625],[115.891,22.783],[114.764,22.668],[114.153,22.224],[113.807,22.548],[113.241,22.052],[111.844,21.55],[110.786,21.397],[110.444,20.341],[109.89,20.282],[109.628,21.008],[109.865,21.395],[108.523,21.715],[108.05,21.552],[106.715,20.697],[105.882,19.752],[105.662,19.058],[106.427,18.004],[107.362,16.698],[108.269,16.08],[108.877,15.277],[109.335,13.426],[109.2,11.667],[108.366,11.008],[107.221,10.365],[106.405,9.531],[105.158,8.6],[104.795,9.241],[105.076,9.919],[104.334,10.487],[103.497,10.633],[103.091,11.154],[102.585,12.187],[101.687,12.646],[100.832,12.627],[100.979,13.413],[100.098,13.407],[100.019,12.307],[99.479,10.846],[99.154,9.963],[99.222,9.239],[99.874,9.208],[100.28,8.295],[100.459,7.43],[101.017,6.857],[101.623,6.741],[102.141,6.222],[102.371,6.128],[102.962,5.524],[103.381,4.855],[103.439,4.182],[103.332,3.727],[103.43,3.383],[103.503,2.791],[103.855,2.516],[104.248,1.631],[104.229,1.293],[103.52,1.226],[102.574,1.967],[101.391,2.761],[101.274,3.27],[100.695,3.939],[100.557,4.767],[100.197,5.313],[100.306,6.041],[100.086,6.464],[99.691,6.848],[99.52,7.344],[98.988,7.908],[98.504,8.382],[98.34,7.794],[98.15,8.35],[98.259,8.974],[98.554,9.933],[98.457,10.675],[98.765,11.441],[98.428,12.033],[98.51,13.122],[98.104,13.641],[97.778,14.837],[97.597,16.101],[97.165,16.929],[96.506,16.427],[95.369,15.714],[94.808,15.804],[94.189,16.038],[94.534,17.277],[94.325,18.214],[93.541,19.367],[93.663,19.727],[93.078,19.855],[92.369,20.671],[92.083,21.192],[92.025,21.702],[91.835,22.183],[91.417,22.765],[90.496,22.805],[90.587,22.393],[90.273,21.836],[89.847,22.039],[89.702,21.857],[89.419,21.966],[89.032,22.056],[88.889,21.691],[88.208,21.703],[86.976,21.495],[87.033,20.743],[86.499,20.152],[85.06,19.479],[83.941,18.302],[83.189,17.671],[82.193,17.017],[82.191,16.557],[81.693,16.31],[80.792,15.952],[80.325,15.899],[80.025,15.136],[80.233,13.836],[80.286,13.006],[79.862,12.056],[79.858,10.357],[79.341,10.309],[78.885,9.546],[79.19,9.217],[78.278,8.933],[77.941,8.253],[77.54,7.966],[76.593,8.899],[76.13,10.3],[75.747,11.308],[75.396,11.781],[74.865,12.742],[74.617,13.993],[74.444,14.617],[73.534,15.991],[73.12,17.929],[72.821,19.208],[72.825,20.419],[72.631,21.356],[71.175,20.758],[70.471,20.877],[69.164,22.089],[69.645,22.451],[69.35,22.843],[68.177,23.692],[67.444,23.945],[67.146,24.664],[66.373,25.425],[64.531,25.237],[62.906,25.219],[61.497,25.078],[59.616,25.38],[58.526,25.61],[57.397,25.74],[56.971,26.966],[56.492,27.143],[55.724,26.965],[54.715,26.481],[53.493,26.813],[52.484,27.581],[51.521,27.866],[50.853,28.815],[50.115,30.148],[49.577,29.986],[48.941,30.317],[48.568,29.927],[47.974,29.976],[48.183,29.534],[48.094,29.306],[48.416,28.552],[48.808,27.69],[49.3,27.461],[49.471,27.11],[50.153,26.69],[50.213,26.277],[50.113,25.944],[50.24,25.608],[50.528,25.328],[50.661,25],[50.81,24.755],[50.744,25.482],[51.013,26.007],[51.286,26.115],[51.589,25.801],[51.607,25.216],[51.39,24.628],[51.58,24.245],[51.758,24.294],[51.794,24.02],[52.577,24.177],[53.404,24.151],[54.008,24.122],[54.693,24.798],[55.439,25.439],[56.071,26.055],[56.362,26.396],[56.486,26.309],[56.391,25.896],[56.261,25.715],[56.397,24.925],[56.845,24.242],[57.404,23.879],[58.137,23.748],[58.729,23.566],[59.18,22.992],[59.45,22.66],[59.808,22.534],[59.806,22.31],[59.442,21.714],[59.282,21.434],[58.861,21.114],[58.488,20.429],[58.034,20.482],[57.826,20.243],[57.666,19.736],[57.789,19.068],[57.695,18.945],[57.234,18.948],[56.61,18.574],[56.512,18.087],[56.284,17.876],[55.661,17.884],[55.27,17.632],[55.275,17.228],[54.791,16.951],[54.239,17.045],[53.57,16.708],[53.109,16.651],[52.385,16.383],[52.192,15.938],[52.168,15.597],[51.172,15.175],[49.575,14.709],[48.679,14.003],[48.239,13.948],[47.939,14.007],[47.354,13.592],[46.717,13.4],[45.878,13.348],[45.625,13.291],[45.406,13.027],[45.144,12.954],[44.99,12.7],[44.495,12.722],[44.175,12.586],[43.483,12.637],[43.223,13.221],[43.252,13.768],[43.088,14.063],[42.892,14.802],[42.605,15.213],[42.805,15.262],[42.703,15.719],[42.824,15.912],[42.779,16.348],[42.65,16.775],[42.348,17.076],[42.271,17.475],[41.755,17.833],[41.221,18.672],[40.939,19.487],[40.248,20.175],[39.802,20.339],[39.14,21.292],[39.024,21.987],[39.066,22.58],[38.493,23.688],[38.024,24.079],[37.484,24.286],[37.155,24.859],[37.209,25.084],[36.932,25.603],[36.64,25.826],[36.249,26.57],[35.64,27.377],[35.13,28.063],[34.632,28.058],[34.788,28.607],[34.832,28.958],[34.956,29.357],[34.923,29.501],[34.642,29.099],[34.427,28.344],[34.154,27.823],[33.922,27.649],[33.588,27.971],[33.137,28.418],[32.423,29.851],[32.32,29.76],[32.735,28.705],[33.349,27.7],[34.105,26.142],[34.474,25.599],[34.795,25.034],[35.693,23.927],[35.494,23.753],[35.526,23.102],[36.691,22.205],[36.866,22],[37.189,21.019],[36.969,20.838],[37.115,19.808],[37.482,18.614],[37.863,18.368],[38.41,17.998],[38.991,16.841],[39.266,15.923],[39.814,15.436],[41.179,14.491],[41.735,13.921],[42.277,13.344],[42.59,13],[43.081,12.7],[43.318,12.39],[43.286,11.975],[42.716,11.736],[43.145,11.462],[43.471,11.278],[43.667,10.864],[44.118,10.446],[44.614,10.442],[45.557,10.698],[46.646,10.817],[47.526,11.127],[48.022,11.193],[48.379,11.375],[48.948,11.411],[49.268,11.43],[49.729,11.579],[50.259,11.68],[50.732,12.022],[51.111,12.025],[51.134,11.748],[51.042,11.167],[51.045,10.641],[50.834,10.28],[50.552,9.199],[50.071,8.082],[49.453,6.805],[48.594,5.339],[47.741,4.219],[46.565,2.855],[45.564,2.046],[44.068,1.053],[43.136,.292],[42.042,-.919],[41.811,-1.446],[41.585,-1.683],[40.885,-2.083],[40.638,-2.5],[40.263,-2.573],[40.121,-3.278],[39.8,-3.681],[39.605,-4.346],[39.202,-4.677],[38.74,-5.909],[38.8,-6.476],[39.44,-6.84],[39.47,-7.1],[39.195,-7.704],[39.252,-8.008],[39.187,-8.485],[39.536,-9.112],[39.95,-10.098],[40.317,-10.317],[40.479,-10.765],[40.437,-11.762],[40.561,-12.639],[40.6,-14.202],[40.776,-14.692],[40.477,-15.406],[40.089,-16.101],[39.453,-16.721],[38.538,-17.101],[37.411,-17.586],[36.281,-18.66],[35.896,-18.842],[35.198,-19.553],[34.786,-19.784],[34.702,-20.497],[35.176,-21.254],[35.373,-21.841],[35.386,-22.14],[35.563,-22.09],[35.534,-23.071],[35.372,-23.535],[35.607,-23.706],[35.459,-24.123],[35.041,-24.478],[34.216,-24.816],[33.013,-25.357],[32.575,-25.727],[32.66,-26.148],[32.916,-26.216],[32.83,-26.742],[32.58,-27.47],[32.462,-28.301],[32.203,-28.752],[31.521,-29.257],[31.326,-29.402],[30.902,-29.91],[30.623,-30.424],[30.056,-31.14],[28.925,-32.172],[28.22,-32.772],[27.465,-33.227],[26.419,-33.615],[25.91,-33.667],[25.781,-33.945],[25.173,-33.797],[24.678,-33.987],[23.594,-33.794],[22.988,-33.916],[22.574,-33.864],[21.543,-34.259],[20.689,-34.417],[20.071,-34.795],[19.617,-34.819],[19.193,-34.463],[18.855,-34.444],[18.425,-33.998],[18.378,-34.136],[18.245,-33.868],[18.25,-33.281],[17.925,-32.611],[18.248,-32.429],[18.222,-31.662],[17.567,-30.726],[17.065,-29.879],[17.063,-29.876],[16.345,-28.577],[15.602,-27.821],[15.211,-27.091],[14.99,-26.117],[14.743,-25.393],[14.408,-23.853],[14.386,-22.657],[14.258,-22.111],[13.869,-21.699],[13.352,-20.873],[12.827,-19.673],[12.609,-19.045],[11.795,-18.069],[11.734,-17.302],[11.64,-16.673],[11.779,-15.794],[12.124,-14.878],[12.176,-14.449],[12.5,-13.548],[12.739,-13.138],[13.313,-12.484],[13.634,-12.039],[13.739,-11.298],[13.687,-10.731],[13.387,-10.374],[13.121,-9.767],[12.875,-9.167],[12.929,-8.959],[13.237,-8.563],[12.933,-7.596],[12.728,-6.927],[12.227,-6.294],[12.323,-6.1],[12.182,-5.79],[11.915,-5.038],[11.094,-3.979],[10.066,-2.969],[9.405,-2.144],[8.798,-1.111],[8.83,-.779],[9.049,-.459],[9.291,.269],[9.493,1.01],[9.306,1.161],[9.649,2.284],[9.795,3.073],[9.404,3.734],[8.948,3.904],[8.745,4.352],[8.489,4.496],[8.5,4.772],[7.462,4.412],[7.083,4.465],[6.698,4.241],[5.898,4.263],[5.363,4.888],[5.034,5.612],[4.326,6.271],[3.574,6.258],[2.692,6.259],[1.865,6.142],[1.06,5.929],[-.508,5.344],[-1.064,5],[-1.965,4.711],[-2.856,4.995],[-3.311,4.984],[-4.009,5.18],[-4.65,5.168],[-5.834,4.994],[-6.529,4.705],[-7.519,4.338],[-7.712,4.365],[-7.974,4.356],[-9.005,4.833],[-9.913,5.594],[-10.765,6.141],[-11.439,6.786],[-11.708,6.86],[-12.428,7.263],[-12.949,7.799],[-13.124,8.164],[-13.247,8.903],[-13.685,9.495],[-14.074,9.886],[-14.33,10.016],[-14.58,10.214],[-14.693,10.656],[-14.839,10.877],[-15.13,11.041],[-15.664,11.458],[-16.085,11.525],[-16.315,11.807],[-16.309,11.959],[-16.614,12.171],[-16.677,12.385],[-16.841,13.151],[-16.714,13.595],[-17.126,14.373],[-17.625,14.73],[-17.185,14.919],[-16.701,15.622],[-16.463,16.135],[-16.55,16.674],[-16.271,17.167],[-16.146,18.109],[-16.257,19.097],[-16.378,19.594],[-16.278,20.093],[-16.536,20.568],[-17.063,21],[-17.02,21.422],[-16.973,21.886],[-16.589,22.158],[-16.262,22.679],[-16.326,23.018],[-15.983,23.724],[-15.426,24.359],[-15.089,24.52],[-14.825,25.104],[-14.801,25.636],[-14.44,26.255],[-13.774,26.619],[-13.14,27.64],[-12.619,28.038],[-11.689,28.149],[-10.901,28.832],[-10.4,29.099],[-9.565,29.934],[-9.815,31.178],[-9.435,32.038],[-9.301,32.565],[-8.657,33.24],[-7.654,33.697],[-6.912,34.11],[-6.244,35.146],[-5.93,35.76],[-5.194,35.755],[-4.591,35.331],[-3.64,35.4],[-2.604,35.179],[-2.17,35.169],[-1.209,35.715],[-.127,35.889],[.504,36.301],[1.467,36.606],[3.162,36.784],[4.816,36.865],[5.32,36.716],[6.262,37.111],[7.331,37.119],[7.737,36.886],[8.421,36.946],[9.51,37.35],[10.21,37.23],[10.181,36.724],[11.029,37.092],[11.1,36.9],[10.6,36.41],[10.593,35.948],[10.94,35.699],[10.808,34.833],[10.15,34.331],[10.34,33.786],[10.857,33.769],[11.109,33.293],[11.489,33.137],[12.663,32.793],[13.083,32.879],[13.919,32.712],[15.246,32.265],[15.714,31.376],[16.612,31.182],[18.021,30.763],[19.086,30.266],[19.574,30.526],[20.053,30.986],[19.82,31.752],[20.134,32.238],[20.854,32.707],[21.543,32.843],[22.896,32.638],[23.237,32.192],[23.609,32.187],[23.927,32.017],[24.921,31.899],[25.165,31.569],[26.495,31.586],[27.458,31.321],[28.451,31.026],[28.914,30.87],[29.683,31.187],[30.095,31.474],[30.977,31.556],[31.688,31.43],[31.961,30.934],[32.193,31.26],[32.994,31.024],[33.773,30.968],[34.266,31.219],[34.557,31.549],[34.488,31.606],[34.753,32.073],[34.956,32.828],[35.099,33.081],[35.126,33.091],[35.482,33.906],[35.98,34.61],[35.998,34.645],[35.905,35.41],[36.15,35.821],[35.782,36.275],[36.161,36.651],[35.551,36.565],[34.714,36.795],[34.027,36.22],[32.509,36.107],[31.7,36.644],[30.622,36.678],[30.391,36.263],[29.7,36.144],[28.733,36.677],[27.641,36.659],[27.049,37.654],[26.318,38.208],[26.805,38.986],[26.171,39.464],[27.28,40.42],[28.82,40.46],[29.24,41.22],[31.146,41.088],[32.348,41.736],[33.513,42.019],[35.168,42.04],[36.913,41.336],[38.348,40.949],[39.513,41.103],[40.373,41.014],[41.554,41.536],[41.703,41.963],[41.453,42.645],[40.875,43.014],[40.321,43.129],[39.955,43.435],[38.68,44.28],[37.539,44.657],[36.675,45.245],[37.403,45.404],[38.233,46.241],[37.674,46.637],[39.148,47.045],[39.121,47.263],[38.224,47.102],[37.425,47.022],[36.76,46.699],[35.824,46.646],[34.962,46.273],[35.021,45.651],[35.51,45.41],[36.53,45.47],[36.335,45.113],[35.24,44.94],[33.883,44.362],[33.326,44.565],[33.547,45.035],[32.454,45.328],[32.631,45.519],[33.588,45.852],[33.299,46.081],[31.744,46.333],[31.675,46.706],[30.749,46.583],[30.378,46.032],[29.603,45.293],[29.627,45.036],[29.142,44.82],[28.838,44.914],[28.558,43.708],[28.039,43.293],[27.674,42.578],[27.997,42.008],[28.115,41.623],[28.989,41.3],[28.807,41.055],[27.619,41],[27.193,40.691],[26.358,40.152],[26.043,40.618],[26.057,40.824],[25.448,40.852],[24.926,40.947],[23.715,40.687],[24.408,40.125],[23.9,39.962],[23.343,39.961],[22.814,40.476],[22.626,40.257],[22.85,39.659],[23.35,39.19],[22.973,38.971],[23.53,38.51],[24.025,38.22],[24.04,37.655],[23.115,37.92],[23.41,37.41],[22.775,37.305],[23.154,36.422],[22.49,36.41],[21.67,36.845],[21.295,37.645],[21.12,38.31],[20.73,38.77],[20.218,39.34],[20.15,39.625],[19.98,39.695],[19.96,39.915],[19.406,40.251],[19.319,40.727],[19.404,41.409],[19.54,41.72],[19.372,41.878],[19.162,41.955],[18.882,42.281],[18.45,42.48],[17.51,42.85],[16.93,43.21],[16.016,43.507],[15.175,44.243],[15.376,44.318],[14.92,44.739],[14.902,45.076],[14.259,45.234],[13.952,44.802],[13.657,45.137],[13.68,45.484],[13.715,45.5],[13.938,45.591],[13.142,45.737],[12.329,45.382],[12.384,44.885],[12.261,44.601],[12.589,44.091],[13.527,43.588],[14.03,42.761],[15.143,41.955],[15.926,41.961],[16.17,41.74],[15.889,41.541],[16.785,41.18],[17.519,40.877],[18.377,40.356],[18.48,40.169],[18.294,39.811],[17.739,40.278],[16.87,40.442],[16.449,39.795],[17.172,39.425],[17.053,38.903],[16.635,38.844],[16.101,37.986],[15.684,37.909],[15.688,38.215],[15.892,38.751],[16.109,38.964],[15.719,39.544],[15.414,40.048],[14.998,40.173],[14.703,40.605],[14.061,40.786],[13.628,41.188],[12.888,41.253],[12.107,41.705],[11.192,42.356],[10.512,42.932],[10.2,43.92],[9.703,44.036],[8.889,44.366],[8.429,44.231],[7.851,43.767],[7.435,43.694],[6.529,43.129],[4.557,43.4],[3.101,43.075],[2.986,42.473],[3.039,41.892],[2.092,41.226],[.81,41.015],[.721,40.678],[.107,40.124],[-.279,39.31],[.111,38.739],[-.467,38.292],[-.683,37.642],[-1.438,37.443],[-2.146,36.674],[-3.416,36.659],[-4.369,36.678],[-4.995,36.325],[-5.377,35.947],[-5.866,36.03],[-6.237,36.368],[-6.52,36.943],[-7.454,37.098],[-7.856,36.838],[-8.383,36.979],[-8.899,36.869],[-8.746,37.651],[-8.84,38.266],[-9.287,38.359],[-9.526,38.737],[-9.447,39.392],[-9.048,39.755],[-8.977,40.159],[-8.769,40.761],[-8.791,41.184],[-8.991,41.544],[-9.035,41.881],[-8.984,42.593],[-9.393,43.027],[-7.978,43.748],[-6.755,43.568],[-5.412,43.574],[-4.348,43.404],[-3.518,43.456],[-1.901,43.423],[-1.384,44.023],[-1.194,46.015],[-2.226,47.065],[-2.963,47.57],[-4.492,47.955],[-4.592,48.684],[-3.296,48.902],[-1.617,48.644],[-1.933,49.776],[-.989,49.347],[1.339,50.127],[1.639,50.947],[2.513,51.148],[3.315,51.346],[3.83,51.62],[4.706,53.092],[6.074,53.51],[6.905,53.482],[7.101,53.694],[7.936,53.748],[8.122,53.528],[8.801,54.021],[8.572,54.396],[8.526,54.963],[8.12,55.518],[8.09,56.54],[8.257,56.81],[8.544,57.11],[9.425,57.172],[9.776,57.448],[10.58,57.73],[10.546,57.216],[10.25,56.89],[10.37,56.61],[10.912,56.459],[10.668,56.081],[10.37,56.19],[9.65,55.47],[9.922,54.983],[9.94,54.597],[10.95,54.364],[10.94,54.009],[11.956,54.196],[12.518,54.471],[13.648,54.075],[14.12,53.757],[14.803,54.051],[16.364,54.513],[17.623,54.852],[18.621,54.683],[18.696,54.439],[19.661,54.426],[19.888,54.866],[21.268,55.19],[21.056,56.031],[21.091,56.784],[21.582,57.412],[22.524,57.753],[23.318,57.006],[24.121,57.026],[24.313,57.794],[24.429,58.383],[24.061,58.258],[23.427,58.613],[23.34,59.187],[24.604,59.466],[25.864,59.611],[26.949,59.446],[27.981,59.476],[29.118,60.028],[28.07,60.503],[26.255,60.424],[24.497,60.057],[22.87,59.846],[22.291,60.392],[21.322,60.72],[21.545,61.705],[21.059,62.607],[21.536,63.19],[22.443,63.818],[24.731,64.902],[25.398,65.112],[25.294,65.534],[23.904,66.007],[22.183,65.724],[21.214,65.026],[21.37,64.414],[19.779,63.61],[17.848,62.75],[17.12,61.341],[17.831,60.637],[18.788,60.082],[17.869,58.954],[16.829,58.72],[16.448,57.041],[15.88,56.104],[14.667,56.201],[14.101,55.408],[12.943,55.362],[12.625,56.307],[11.788,57.442],[11.027,58.856],[10.357,59.47],[8.382,58.313],[7.049,58.079],[5.666,58.588],[5.308,59.663],[4.992,61.971],[5.913,62.615],[8.554,63.454],[10.528,64.486],[12.358,65.88],[14.761,67.811],[16.436,68.563],[19.184,69.818],[21.378,70.255],[23.024,70.202],[24.547,71.031],[26.37,70.986],[28.166,71.185],[31.294,70.454],[30.005,70.186],[31.101,69.558],[32.133,69.906],[33.776,69.302],[36.514,69.063],[40.292,67.932],[41.06,67.457],[41.126,66.792],[40.016,66.266],[38.383,66],[33.919,66.76],[33.185,66.633],[34.815,65.9],[34.944,64.414],[36.231,64.109],[37.013,63.85],[37.142,64.335],[36.518,64.78],[37.176,65.143],[39.594,64.521],[40.436,64.765],[39.763,65.497],[42.093,66.476],[43.016,66.419],[43.95,66.069],[44.532,66.756],[43.698,67.352],[44.188,67.951],[43.453,68.571],[46.25,68.25],[46.821,67.69],[45.555,67.567],[45.562,67.01],[46.349,66.668],[47.894,66.885],[48.139,67.523],[50.228,67.999],[53.718,68.857],[54.472,68.808],[53.486,68.201],[54.726,68.097],[55.443,68.439],[57.317,68.466],[58.802,68.881],[59.942,68.279],[61.078,68.941],[60.03,69.52],[60.55,69.85],[63.504,69.547],[64.888,69.235],[68.512,68.092],[69.181,68.616],[68.164,69.144],[68.135,69.357],[66.93,69.455],[67.26,69.929],[66.725,70.709],[66.695,71.029],[68.54,71.935],[69.196,72.844],[69.94,73.04],[72.588,72.776],[72.796,72.22],[71.848,71.409],[72.47,71.09],[72.792,70.391],[72.565,69.021],[73.668,68.408],[73.239,67.74],[71.28,66.32],[72.423,66.173],[72.821,66.533],[73.921,66.789],[74.187,67.284],[75.052,67.76],[74.469,68.329],[74.936,68.989],[73.842,69.071],[73.602,69.628],[74.4,70.632],[73.101,71.447],[74.891,72.121],[74.659,72.832],[75.158,72.855],[75.683,72.3],[75.289,71.336],[76.359,71.153],[75.903,71.874],[77.577,72.267],[79.652,72.32],[81.5,71.75],[80.611,72.583],[80.511,73.648],[82.25,73.85],[84.655,73.806],[86.822,73.937],[86.01,74.46],[87.167,75.117],[88.316,75.144],[90.26,75.64],[92.901,75.773],[93.234,76.047],[95.86,76.14],[96.678,75.916],[98.922,76.447],[100.76,76.43],[101.035,76.862],[101.991,77.287],[104.352,77.698],[106.067,77.374],[104.705,77.128],[106.97,76.974]],[[49.11,41.282],[49.619,40.573],[50.085,40.526],[50.393,40.257],[49.569,40.176],[49.395,39.399],[49.223,39.049],[48.857,38.815],[48.883,38.32],[49.2,37.583],[50.148,37.375],[50.842,36.873],[52.264,36.7],[53.826,36.965],[53.922,37.199],[53.735,37.906],[53.881,38.952],[53.101,39.291],[53.358,39.975],[52.694,40.034],[52.915,40.877],[53.858,40.631],[54.737,40.951],[54.008,41.551],[53.722,42.123],[52.917,41.868],[52.815,41.135],[52.503,41.783],[52.446,42.027],[52.692,42.444],[52.502,42.792],[51.343,43.133],[50.891,44.031],[50.339,44.284],[50.306,44.61],[51.279,44.515],[51.317,45.246],[52.167,45.409],[53.041,45.259],[53.221,46.235],[53.043,46.853],[52.042,46.805],[51.192,47.049],[50.034,46.609],[49.101,46.399],[48.646,45.806],[47.676,45.641],[46.682,44.609],[47.591,43.66],[47.492,42.987],[48.584,41.809],[49.11,41.282]]],[[[-93.84,77.52],[-94.296,77.491],[-96.17,77.555],[-96.436,77.835],[-94.423,77.82],[-93.721,77.634],[-93.84,77.52]]],[[[-110.187,77.697],[-112.051,77.409],[-113.534,77.732],[-112.725,78.051],[-111.264,78.153],[-109.854,77.996],[-110.187,77.697]]],[[[24.724,77.854],[22.49,77.445],[20.726,77.677],[21.416,77.935],[20.812,78.255],[22.884,78.455],[23.281,78.08],[24.724,77.854]]],[[[-109.663,78.602],[-110.881,78.407],[-112.542,78.408],[-112.526,78.551],[-111.5,78.85],[-110.964,78.804],[-109.663,78.602]]],[[[-95.83,78.057],[-97.31,77.851],[-98.124,78.083],[-98.553,78.458],[-98.632,78.872],[-97.337,78.832],[-96.754,78.766],[-95.559,78.418],[-95.83,78.057]]],[[[-100.06,78.325],[-99.671,77.908],[-101.304,78.019],[-102.95,78.343],[-105.176,78.38],[-104.21,78.677],[-105.42,78.918],[-105.492,79.302],[-103.529,79.165],[-100.825,78.8],[-100.06,78.325]]],[[[105.075,78.307],[99.438,77.921],[101.265,79.234],[102.086,79.346],[102.838,79.281],[105.372,78.713],[105.075,78.307]]],[[[18.252,79.702],[21.544,78.956],[19.027,78.563],[18.472,77.827],[17.594,77.638],[17.118,76.809],[15.913,76.77],[13.763,77.38],[14.67,77.736],[13.171,78.025],[11.222,78.869],[10.445,79.652],[13.171,80.01],[13.719,79.66],[15.143,79.674],[15.523,80.016],[16.991,80.051],[18.252,79.702]]],[[[25.448,80.407],[27.408,80.056],[25.925,79.518],[23.024,79.4],[20.075,79.567],[19.897,79.842],[18.462,79.86],[17.368,80.319],[20.456,80.598],[21.908,80.358],[22.919,80.657],[25.448,80.407]]],[[[51.136,80.547],[49.794,80.415],[48.894,80.34],[48.755,80.175],[47.586,80.01],[46.503,80.247],[47.072,80.559],[44.847,80.59],[46.799,80.772],[48.318,80.784],[48.523,80.515],[49.097,80.754],[50.04,80.919],[51.523,80.7],[51.136,80.547]]],[[[99.94,78.881],[97.758,78.756],[94.973,79.045],[93.313,79.427],[92.545,80.144],[91.181,80.341],[93.778,81.025],[95.941,81.25],[97.884,80.747],[100.187,79.78],[99.94,78.881]]],[[[-87.02,79.66],[-85.814,79.337],[-87.188,79.039],[-89.035,78.287],[-90.804,78.215],[-92.877,78.343],[-93.951,78.751],[-93.936,79.114],[-93.145,79.38],[-94.974,79.372],[-96.076,79.705],[-96.71,80.158],[-96.016,80.602],[-95.323,80.907],[-94.298,80.977],[-94.735,81.206],[-92.41,81.257],[-91.133,80.723],[-89.45,80.509],[-87.81,80.32],[-87.02,79.66]]],[[[-68.5,83.106],[-65.827,83.028],[-63.68,82.9],[-61.85,82.629],[-61.894,82.362],[-64.334,81.928],[-66.753,81.725],[-67.658,81.501],[-65.48,81.507],[-67.84,80.9],[-69.47,80.617],[-71.18,79.8],[-73.243,79.634],[-73.88,79.43],[-76.908,79.323],[-75.529,79.198],[-76.22,79.019],[-75.393,78.526],[-76.344,78.183],[-77.889,77.9],[-78.363,77.509],[-79.76,77.21],[-79.62,76.983],[-77.911,77.022],[-77.889,76.778],[-80.561,76.178],[-83.174,76.454],[-86.112,76.299],[-87.6,76.42],[-89.491,76.472],[-89.616,76.952],[-87.767,77.178],[-88.26,77.9],[-87.65,77.97],[-84.976,77.539],[-86.34,78.18],[-87.962,78.372],[-87.152,78.759],[-85.379,78.997],[-85.095,79.345],[-86.507,79.736],[-86.932,80.251],[-84.198,80.208],[-83.409,80.1],[-81.848,80.464],[-84.1,80.58],[-87.599,80.516],[-89.367,80.856],[-90.2,81.26],[-91.368,81.553],[-91.587,81.894],[-90.1,82.085],[-88.932,82.118],[-86.97,82.28],[-85.5,82.652],[-84.26,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.307,83.131],[-76.25,83.172],[-75.719,83.064],[-72.832,83.233],[-70.666,83.17],[-68.5,83.106]]],[[[-27.1,83.52],[-20.845,82.727],[-22.692,82.342],[-26.518,82.298],[-31.9,82.2],[-31.396,82.022],[-27.857,82.132],[-24.844,81.787],[-22.903,82.093],[-22.072,81.734],[-23.17,81.153],[-20.624,81.525],[-15.768,81.912],[-12.77,81.719],[-12.209,81.292],[-16.285,80.58],[-16.85,80.35],[-20.046,80.177],[-17.73,80.129],[-18.9,79.4],[-19.705,78.751],[-19.674,77.639],[-18.473,76.986],[-20.035,76.944],[-21.679,76.628],[-19.834,76.098],[-19.599,75.248],[-20.668,75.156],[-19.373,74.296],[-21.594,74.224],[-20.435,73.817],[-20.762,73.464],[-22.172,73.31],[-23.566,73.307],[-22.313,72.629],[-22.3,72.184],[-24.278,72.598],[-24.793,72.33],[-23.443,72.08],[-22.133,71.469],[-21.754,70.664],[-23.536,70.471],[-24.307,70.856],[-25.543,71.431],[-25.201,70.752],[-26.363,70.226],[-23.727,70.184],[-22.349,70.129],[-25.029,69.259],[-27.747,68.47],[-30.674,68.125],[-31.777,68.121],[-32.811,67.735],[-34.202,66.68],[-36.353,65.979],[-37.044,65.938],[-38.375,65.692],[-39.812,65.458],[-40.669,64.84],[-40.683,64.139],[-41.189,63.482],[-42.819,62.682],[-42.417,61.901],[-42.866,61.074],[-43.378,60.098],[-44.788,60.037],[-46.264,60.853],[-48.263,60.858],[-49.233,61.407],[-49.9,62.383],[-51.633,63.627],[-52.14,64.278],[-52.277,65.177],[-53.662,66.1],[-53.302,66.837],[-53.969,67.189],[-52.98,68.358],[-51.475,68.73],[-51.08,69.148],[-50.871,69.929],[-52.014,69.575],[-52.558,69.426],[-53.456,69.284],[-54.683,69.61],[-54.75,70.289],[-54.359,70.821],[-53.431,70.836],[-51.39,70.57],[-53.109,71.205],[-54.004,71.547],[-55,71.407],[-55.835,71.654],[-54.718,72.586],[-55.326,72.959],[-56.12,73.65],[-57.324,74.71],[-58.597,75.099],[-58.585,75.517],[-61.269,76.102],[-63.392,76.175],[-66.064,76.135],[-68.504,76.061],[-69.665,76.38],[-71.403,77.009],[-68.777,77.323],[-66.764,77.376],[-71.043,77.636],[-73.297,78.044],[-73.159,78.433],[-69.373,78.914],[-65.711,79.394],[-65.324,79.758],[-68.023,80.117],[-67.151,80.516],[-63.689,81.214],[-62.234,81.321],[-62.651,81.77],[-60.282,82.034],[-57.207,82.191],[-54.134,82.2],[-53.043,81.888],[-50.391,82.439],[-48.004,82.065],[-46.6,81.986],[-44.523,81.661],[-46.901,82.2],[-46.764,82.628],[-43.406,83.225],[-39.898,83.18],[-38.622,83.549],[-35.088,83.645],[-27.1,83.52]]]],Ws=Object.freeze({map:[2048,1024],walnut:[256,512],scales:[1024,256]}),er=Math.PI*2,Yp=(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e};function Xs(i,t=!1){const e=new Ui(i);return e.colorSpace=le,e.anisotropy=4,e.wrapS=t?Pn:tn,e.wrapT=tn,e.name="Antique globe / "+i.width+"x"+i.height,e}function Ol(i,t){let e=Math.imul(i+19,374761393)^Math.imul(t+53,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function $e(i,t,e,n,r,s,o=!1){i.font=`${o?"italic ":""}${r}px Georgia, "Times New Roman", serif`,i.textBaseline="middle",i.textAlign="left";const a=[...t].map(l=>i.measureText(l).width);let c=e-(a.reduce((l,u)=>l+u,0)+(t.length-1)*s)/2;for(let l=0;l<t.length;l++)i.fillText(t[l],c,n),c+=a[l]+s}function Uc(i,t,e,n){i.save(),i.translate(t,e),i.strokeStyle="#766347",i.lineWidth=.9;for(const r of[n*.65,n*.71,n*1.02])i.beginPath(),i.arc(0,0,r,0,er),i.stroke();for(let r=0;r<16;r++){i.save(),i.rotate(r*er/16);const s=n*(r%4===0?1.25:r%2===0?.91:.64);i.beginPath(),i.moveTo(0,-s),i.lineTo(n*.1,0),i.lineTo(0,n*.15),i.closePath(),i.fillStyle=r%2?"#b79e6d":"#5e654f",i.fill(),i.stroke(),i.beginPath(),i.moveTo(0,-s),i.lineTo(-n*.1,0),i.lineTo(0,n*.15),i.closePath(),i.fillStyle="#e4d3a9",i.fill(),i.stroke(),i.restore()}i.fillStyle="#514936",$e(i,"N",0,-n*1.52,15,0),$e(i,"S",0,n*1.48,11,0),$e(i,"E",n*1.48,0,11,0),$e(i,"W",-n*1.48,0,11,0),i.restore()}function jp(i){const t=i.getContext("2d"),e=i.width,n=i.height,r=(l,u)=>[(l+180)/360*e,(90-u)/180*n],s=t.createImageData(e,n);for(let l=0;l<n;l++)for(let u=0;u<e;u++){const f=(l*e+u)*4,h=(Ol(u,l)-.5)*5+Math.sin(u*.038)*Math.sin(l*.028)*1.5;s.data[f]=222+h,s.data[f+1]=207+h,s.data[f+2]=167+h,s.data[f+3]=255}t.putImageData(s,0,0),t.strokeStyle="rgba(123,89,52,0.12)",t.lineWidth=.75;for(const[l,u]of[[-138,-13],[68,-28]]){const[f,h]=r(l,u);for(let d=0;d<16;d++){const p=d*er/16;t.beginPath(),t.moveTo(f-Math.cos(p)*e,h-Math.sin(p)*e),t.lineTo(f+Math.cos(p)*e,h+Math.sin(p)*e),t.stroke()}}t.lineJoin="round";for(let l=0;l<Dc.length;l++){t.beginPath();for(const u of Dc[l])u.forEach(([f,h],d)=>{const[p,_]=r(f,h);d===0?t.moveTo(p,_):t.lineTo(p,_)}),t.closePath();t.strokeStyle="rgba(119,107,69,0.22)",t.lineWidth=5,t.stroke(),t.fillStyle=["#9ca187","#a4a68a","#a6a88b","#98a08a"][l%4],t.fill("evenodd"),t.strokeStyle="#6e745b",t.lineWidth=1.15,t.stroke()}t.strokeStyle="rgba(100,89,62,0.30)",t.lineWidth=.65;for(let l=-180;l<=180;l+=15){const[u]=r(l,0);t.beginPath(),t.moveTo(u,0),t.lineTo(u,n),t.stroke()}for(let l=-75;l<=75;l+=15){const[,u]=r(0,l);t.beginPath(),t.moveTo(0,u),t.lineTo(e,u),t.stroke()}for(const l of[-66.56,-23.44,23.44,66.56]){const[,u]=r(0,l);t.setLineDash([5,4]),t.strokeStyle="rgba(120,83,45,0.43)",t.beginPath(),t.moveTo(0,u),t.lineTo(e,u),t.stroke()}t.setLineDash([]),t.strokeStyle="#9b8158",t.lineWidth=.8;for(const l of[n/2-1.5,n/2+1.5])t.beginPath(),t.moveTo(0,l),t.lineTo(e,l),t.stroke();t.fillStyle="#705b3e";for(let l=-180;l<=180;l+=5){const[u,f]=r(l,0),h=l%15?2.8:5;t.beginPath(),t.moveTo(u,f-h),t.lineTo(u,f+h),t.stroke(),l%30===0&&Math.abs(l)<180&&$e(t,`${Math.abs(l)}°`,u,f+12,10,.2)}const o=[["NORTH",-106,47,22,3],["AMERICA",-104,40,23,3],["SOUTH",-58,-14,19,2.3],["AMERICA",-60,-21,19,2.3],["AFRICA",19,9,24,3.5],["EUROPE",25,52,20,2],["ASIA",92,42,29,5],["AUSTRALIA",134,-25,18,1.9],["GREENLAND",-42,72,13,1.5],["ANTARCTICA",20,-78,19,4]];t.fillStyle="#434f3e";for(const[l,u,f,h,d]of o)$e(t,l,...r(u,f),h,d);t.fillStyle="#7c7155";for(const[l,u,f,h]of[["Atlantic Ocean",-34,29,22],["Atlantic Ocean",-20,-30,20],["Pacific Ocean",-130,15,25],["Pacific Ocean",165,-9,18],["Indian Ocean",75,-12,22],["Southern Ocean",-64,-57,20]])$e(t,l,...r(u,f),h,1.2,!0);Uc(t,...r(-132,-25),29),Uc(t,...r(71,-40),22);const[a,c]=r(-132,-49);t.strokeStyle="#9d885d",t.lineWidth=1;for(const l of[0,5])t.beginPath(),t.ellipse(a,c,115-l,35-l,0,0,er),t.stroke();return t.fillStyle="#6b6047",$e(t,"ORBIS TERRARUM",a,c-8,14,1.8),$e(t,"THE LIBRARY COLLECTION",a,c+10,9,1.4),i}function $p(i){const t=i.getContext("2d"),e=i.width,n=i.height,r=t.createImageData(e,n);for(let s=0;s<n;s++)for(let o=0;o<e;o++){const a=o/e*er,c=Math.sin(a*15+Math.sin(s*.016)*.8)*5+Math.sin(a*51+Math.sin(s*.013))*2.5+(Ol(o,s)-.5)*4,l=7*Math.sin(a*3+s*.006),u=(s*e+o)*4;r.data[u]=76+c+l,r.data[u+1]=42+c*.7+l*.6,r.data[u+2]=24+c*.4+l*.3,r.data[u+3]=255}return t.putImageData(r,0,0),i}function Kp(i){const t=i.getContext("2d"),e=i.width,n=i.height;t.fillStyle="#bfa373",t.fillRect(0,0,e,n);for(let r=0;r<2;r++){const s=r*128;t.fillStyle=r?"#c5ad80":"#cdb88e",t.fillRect(0,s+8,e,112),t.strokeStyle="#857047",t.lineWidth=1;for(const o of[9,14,114,119])t.beginPath(),t.moveTo(0,s+o),t.lineTo(e,s+o),t.stroke();for(let o=0;o<360;o+=1){const a=o/360*e,c=o%10===0,l=o%5===0,u=c?25:l?17:9;if(t.beginPath(),t.moveTo(a,s+15),t.lineTo(a,s+15+u),t.stroke(),t.beginPath(),t.moveTo(a,s+113),t.lineTo(a,s+113-u),t.stroke(),o%30===0){t.fillStyle="#504631";const f=(450-o)%360,h=r?`${Math.min(o%180,180-o%180)}°`:{0:"N",90:"E",180:"S",270:"W"}[f]||`${f}`;$e(t,h,a,s+64,22,1),o===0&&$e(t,h,e,s+64,22,1)}}}return i}function Zp(i=Yp){const t=Xs(jp(i(...Ws.map))),e=Xs($p(i(...Ws.walnut)),!0),n=Xs(Kp(i(...Ws.scales)),!0),r=(s,o)=>{const a=new Ee(o);return a.name=`Antique globe / ${s}`,a};return{globe:r("engraved vellum",{map:t,roughness:.73,metalness:0}),globeWalnut:r("French-polished walnut",{map:e,roughness:.39,metalness:0}),globeBrass:r("aged brass",{color:11637593,roughness:.36,metalness:.78}),globeScales:r("engraved brass scales",{map:n,roughness:.48,metalness:.5})}}const ts=Math.PI*2,Nc=Object.freeze({location:[-5.9,0,-.7],yaw:.3,centreHeight:1,radius:.29,axisTilt:.4,horizonOuterRadius:.346,meridianOuterRadius:.327,sphereSegments:[64,40],ringSegments:96,collision:{width:.7,height:1.3,depth:.7,centre:[0,.65,0]}});function Fc(i,t=96){const e=[],n=[],r=[],s=[];for(let a=0;a<i.length;a++){const[c,l]=i[a],[u,f]=i[(a+1)%i.length],h=u-c,d=f-l,p=Math.hypot(h,d),_=e.length/3;for(let g=0;g<=t;g++){const m=g/t*ts,y=Math.cos(m),M=Math.sin(m);for(const[x,R]of[[c,l],[u,f]])e.push(x*y,x*M,R),n.push(d/p*y,d/p*M,-h/p),r.push(g/t,x*4);if(g<t){const x=_+g*2;s.push(x,x+2,x+1,x+2,x+3,x+1)}}}const o=new Qt;return o.setAttribute("position",new Ft(e,3)),o.setAttribute("normal",new Ft(n,3)),o.setAttribute("uv",new Ft(r,2)),o.setIndex(s),o}function qs(i,t,e,n,r=96){const s=new oa(i,t,r),o=s.attributes.position,a=s.attributes.uv;for(let c=0;c<o.count;c++){const u=(Math.atan2(o.getY(c),o.getX(c))/ts+1)%1,f=(Math.hypot(o.getX(c),o.getY(c))-i)/(t-i),h=c%(r+1);a.setXY(c,h===r?1:u,1-(n*128+10+f*108)/256),o.setZ(c,e)}return s}function Jp(){const i=[[.006,.02,.325],[.01,.026,.325],[.026,.027,.325],[.041,.021,.322],[.056,.014,.318],[.09,.014,.309],[.135,.019,.297],[.18,.023,.291],[.215,.019,.289],[.236,.014,.289],[.252,.021,.289],[.268,.021,.289],[.28,.015,.291],[.45,.014,.306],[.65,.012,.319],[.79,.016,.32],[.808,.022,.32],[.825,.023,.32],[.843,.018,.32],[.865,.016,.32],[.941,.017,.32],[.967,.024,.32],[.98,.024,.32]],t=[],e=[],n=[],r=12;i.forEach(([c,l,u],f)=>{for(let h=0;h<=r;h++){const d=h/r*ts;if(t.push(u+l*Math.cos(d),c,l*Math.sin(d)),e.push(h/r,c),f<i.length-1&&h<r){const p=f*(r+1)+h,_=p+r+1;n.push(p,_,p+1,_,_+1,p+1)}}});const s=new Qt;s.setAttribute("position",new Ft(t,3)),s.setAttribute("uv",new Ft(e,2)),s.setIndex(n),s.computeVertexNormals();const o=s.attributes.normal,a=new D;for(let c=0;c<i.length;c++){const l=c*(r+1),u=l+r;a.fromBufferAttribute(o,l).add(new D().fromBufferAttribute(o,u)).normalize(),o.setXYZ(l,a.x,a.y,a.z),o.setXYZ(u,a.x,a.y,a.z)}return s}function Qp(i,t,e,n=8){const r=new D(...i),s=new D(...t),o=s.clone().sub(r),a=new In(e,e,o.length(),n);return a.applyQuaternion(new Be().setFromUnitVectors(new D(0,1,0),o.normalize())),a.translate(...r.add(s).multiplyScalar(.5).toArray()),a}function t2(i,t){const{radius:e,axisTilt:n,centreHeight:r}=Nc,s=(u,f,h=0,d=0,p=0,_=0,g=0,m=0)=>{const y=f.index,M=f.attributes.position,x=[],R=new D,E=new D,A=new D;for(let S=0;S<y.count;S+=3)R.fromBufferAttribute(M,y.getX(S)),E.fromBufferAttribute(M,y.getX(S+1)),A.fromBufferAttribute(M,y.getX(S+2)),E.sub(R).cross(A.sub(R)).lengthSq()>1e-17&&x.push(y.getX(S),y.getX(S+1),y.getX(S+2));f.setIndex(x),i.geo(u,f,h,d,p,_,g,m)},o=(u,f=32)=>new sr(u.map(h=>new Ct(...h)),f),a=(u,f,h,d,p,_,g=0,m=0,y=0,M=64)=>s(u,new Ci(f,h,5,M),d,p,_,g,m,y),c=new jn(e,...Nc.sphereSegments);c.rotateZ(n),s(t.globe,c,0,r,0),s(t.globeWalnut,Fc([[.303,-.019],[.341,-.019],[.346,-.014],[.346,.007],[.342,.012],[.303,.012]],96),0,r-.01,0,-Math.PI/2),s(t.globeScales,qs(.305,.341,.0127,0),0,r-.01,0,-Math.PI/2),a(t.globeBrass,.343,.0024,0,r+.003,0,Math.PI/2),a(t.globeBrass,.304,.0018,0,r+.003,0,Math.PI/2),a(t.globeBrass,.344,.002,0,r-.025,0,Math.PI/2),s(t.globeBrass,Fc([[.306,-.006],[.325,-.006],[.327,-.004],[.327,.004],[.325,.006],[.306,.006]],96),0,r,0),s(t.globeScales,qs(.307,.325,.0067,1),0,r,0);const l=qs(.307,.325,.0067,1);l.rotateY(Math.PI),s(t.globeScales,l,0,r,0),a(t.globeBrass,.326,.0015,0,r,0);for(const u of[-1,1]){const f=new D(-Math.sin(n),Math.cos(n),0).multiplyScalar(u),h=o([[.009,0],[.012,.003],[.012,.008],[.007,.01],[.007,.018]],16);h.applyQuaternion(new Be().setFromUnitVectors(new D(0,1,0),f)),s(t.globeBrass,h,f.x*.2905,r+f.y*.2905,0)}for(let u=0;u<3;u++){const f=u/3*ts+Math.PI/6,h=Jp();h.rotateY(f),s(t.globeWalnut,h);const d=m=>(m.rotateY(f),m),p=o([[0,.001],[.024,.001],[.027,.006],[.027,.027],[.023,.033]],12);p.translate(.325,0,0),s(t.globeBrass,d(p));for(const m of[.255,.815,.968]){const y=m===.255?.289:.32,M=new Ci(m===.968?.024:.022,.0016,4,12);M.rotateX(Math.PI/2),M.translate(y,m,0),s(t.globeBrass,d(M))}const _=new ia([new D(.035,.215,0),new D(.12,.192,0),new D(.23,.215,0),new D(.288,.259,0)]);s(t.globeWalnut,d(new Jr(_,10,.01,6,!1)));const g=new jn(.0045,8,4);g.scale(1,.45,1),g.translate(.337,1.005,0),s(t.globeBrass,d(g))}s(t.globeWalnut,o([[0,.183],[.028,.183],[.035,.192],[.035,.224],[.024,.234],[.017,.25],[.012,.26],[0,.264]],24)),a(t.globeBrass,.034,.0018,0,.22,0,Math.PI/2,0,0,24),s(t.globeBrass,Qp([0,.264,0],[0,.674,0],.005,8)),s(t.globeBrass,o([[.014,.659],[.019,.663],[.019,.673],[.012,.677]],16))}const Oc=new we,Bc=new Be;function zo(i,t,e,n,r){const s=new mn(i,t,e),o=s.attributes.uv,a=r(),c=r(),l=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let u=0;u<6;u++){const[f,h]=l[u],d=h>f;for(let p=0;p<4;p++){const _=u*4+p;let g=o.getX(_)*f,m=o.getY(_)*h;if(d){const y=g;g=m,m=y}o.setXY(_,g/n+a,m/n+c)}}return s}class ko{constructor(t){this.rand=t,this.batches=new Map,this.solids=[]}add(t,e){this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(e)}frame(t,e,n,r=0){return new es(this,new jt().makeRotationY(r).setPosition(t,e,n))}finish(t){for(const[e,n]of this.batches){for(const o of n)for(const a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);const r=Qr(n,!1),s=new Jt(r,e);s.castShadow=!e.userData.noShadow,s.receiveShadow=!0,s.matrixAutoUpdate=!1,t.add(s);for(const o of n)o.dispose()}this.batches.clear()}}class es{constructor(t,e){this.b=t,this.m=e}sub(t,e,n,r=0){return new es(this.b,this.m.clone().multiply(new jt().makeRotationY(r).setPosition(t,e,n)))}local(t,e,n,r=0,s=0,o=0){return Oc.set(r,s,o),Bc.setFromEuler(Oc),new jt().compose(new D(t,e,n),Bc,new D(1,1,1)).premultiply(this.m)}geo(t,e,n,r,s,o,a,c){e.applyMatrix4(this.local(n,r,s,o,a,c)),this.b.add(t,e)}box(t,e,n,r,s,o,a,c=0,l=0,u=0){this.geo(t,zo(e,n,r,t.userData.ts||1,this.b.rand),s,o,a,c,l,u)}cyl(t,e,n,r,s,o,a,c=12,l=0,u=0,f=0,h=!1,d,p){const _=new In(e,n,r,c,1,h,d||0,p||Math.PI*2),g=t.userData.ts||1,m=_.attributes.uv,y=Math.PI*2*Math.max(e,n);for(let M=0;M<m.count;M++)m.setXY(M,m.getY(M)*r/g,m.getX(M)*y/g);this.geo(t,_,s,o,a,l,u,f)}sphere(t,e,n,r,s,o=1,a=1,c=1,l=12,u=8){const f=new jn(e,l,u);f.scale(o,a,c),this.geo(t,f,n,r,s)}torus(t,e,n,r,s,o,a=0,c=0,l=0,u=32){this.geo(t,new Ci(e,n,6,u),r,s,o,a,c,l)}plane(t,e,n,r,s,o,a=0,c=0,l=0,u=null){const f=new Yn(e,n);if(u){const h=f.attributes.uv;for(let d=0;d<h.count;d++)h.setXY(d,u[0]+h.getX(d)*u[2],u[1]+h.getY(d)*u[3])}this.geo(t,f,r,s,o,a,c,l)}solid(t,e,n,r,s,o){const a=this.local(r,s,o),c=new D,l=new D(1/0,1/0,1/0),u=new D(-1/0,-1/0,-1/0);for(let f=0;f<8;f++)c.set((f&1?.5:-.5)*t,(f&2?.5:-.5)*e,(f&4?.5:-.5)*n).applyMatrix4(a),l.min(c),u.max(c);this.b.solids.push({x0:l.x,x1:u.x,y0:l.y,y1:u.y,z0:l.z,z1:u.z})}sbox(t,e,n,r,s,o,a){this.box(t,e,n,r,s,o,a),this.solid(e,n,r,s,o,a)}}function e2(){const i=(u,f)=>{const h=new Ee(u);return h.userData.ts=f||1,h},t=zs(1,[118,70,38],[48,26,12],{rings:16}),e=zs(2,[184,124,70],[104,62,30],{rings:15}),n=zs(3,[84,50,30],[34,18,10],{rings:11}),r=Ep(4),s=Tc(5,[232,214,184]),o=Tc(6,[150,158,124]),a=Ac(7,[100,34,22]),c=Ac(8,[92,56,30]),l=wp(9);return{walnut:i({map:t,bumpMap:t,bumpScale:.6,roughness:.6,color:16777215},1.3),oak:i({map:e,bumpMap:e,bumpScale:.5,roughness:.48},1.6),dark:i({map:n,bumpMap:n,bumpScale:.5,roughness:.55},1.2),floor:i({map:r,bumpMap:r,bumpScale:1.2,roughness:.42},1.9),plaster:i({map:s,bumpMap:s,bumpScale:1.5,roughness:.94},3),sage:i({map:o,bumpMap:o,bumpScale:1.5,roughness:.92},2.5),ceil:i({map:s,roughness:.95,color:15919320},4),leather:i({map:a,bumpMap:a,bumpScale:1.2,roughness:.5},.9),leather2:i({map:c,bumpMap:c,bumpScale:1.2,roughness:.55},.9),stone:i({map:l,bumpMap:l,bumpScale:2,roughness:.88},1.4),iron:i({color:1841946,metalness:.75,roughness:.48}),brass:i({color:11831880,metalness:1,roughness:.32}),gilt:i({color:10122294,metalness:.8,roughness:.42}),soot:i({color:920587,roughness:1}),cushion:i({map:ks(10,[150,128,92],!0),roughness:.95},.5),cushion2:i({map:ks(11,[70,88,70],!1),roughness:.95},.4),runner:i({map:ks(12,[118,34,28],!0),roughness:.95},.6),paper:i({color:15129280,roughness:.9}),ceramic:i({color:15525590,roughness:.25}),terracotta:i({color:10246714,roughness:.85}),plant:i({color:4086828,roughness:.75,side:Ne}),greenGlass:i({color:1993264,emissive:3971642,emissiveIntensity:.55,roughness:.15,metalness:.1,side:Ne}),shade:i({color:15390376,emissive:16757865,emissiveIntensity:.9,roughness:.9,side:Ne}),flame:Object.assign(new Ai({color:new zt(2.4,1.6,.7)}),{userData:{noShadow:!0}}),ember:Object.assign(new Ai({color:new zt(2.2,.7,.2)}),{userData:{noShadow:!0}}),rug:i({map:Tp(13),roughness:1}),painting:i({map:Rp(14),roughness:.55}),...Zp()}}const Ho={H:10.5,GY:4.2},vt=.012;function n2(i,t,e,n=null){const r=new ko(e),s=r.frame(0,0,0,0),o=Ho.H,a=Ho.GY,c=[],l=[],u=[],f=e;function h(T,L,U,z,V,ut,mt,bt,B){const kt=[L,U];for(const pt of bt)kt.push(pt[0],pt[1]);const Pt=[...new Set(kt)].sort((pt,ft)=>pt-ft);for(let pt=0;pt<Pt.length-1;pt++){const ft=Pt[pt],At=Pt[pt+1],_t=bt.filter(X=>X[0]<=ft&&X[1]>=At).sort((X,et)=>X[2]-et[2]);let I=ut;const w=(X,et)=>{et-X<.001||(T==="x"?s.sbox(B,V-z,et-X,At-ft,(z+V)/2,(X+et)/2,(ft+At)/2):s.sbox(B,At-ft,et-X,V-z,(ft+At)/2,(X+et)/2,(z+V)/2))};for(const X of _t)w(I,X[2]),I=X[3];w(I,mt)}}s.sbox(i.floor,14,.3,19,0,-.15,-.5),s.box(i.ceil,15,.3,20,0,o+.15,-.5),h("z",-7.5,7.5,-10.5,-10,0,o,[],i.plaster);function d(T,L,U,z,V,ut,mt,bt,B=!1){if(!n){B?s.sbox(T,L,U,z,V,ut,mt):s.box(T,L,U,z,V,ut,mt);return}const kt=[e(),e()];for(const[Pt,pt,ft,At,_t,I]of bt){let w=0;s.geo(T,zo(Pt,pt,ft,T.userData.ts||1,()=>kt[w++]),At,_t,I),B&&s.solid(Pt,pt,ft,At,_t,I)}}const p=n||{z0:7.07,z1:8.43,height:2.46};d(i.plaster,.5,o,20,7.25,o/2,-.5,[[.5,o,p.z0+10.5,7.25,o/2,(p.z0-10.5)/2],[.5,o-p.height,p.z1-p.z0,7.25,(o+p.height)/2,(p.z0+p.z1)/2],[.5,o,9.5-p.z1,7.25,o/2,(9.5+p.z1)/2]],!0),h("z",-7.5,7.5,9,9.5,0,o,[[-5,-3,4.5,8.3],[2.6,4.6,4.5,8.3]],i.plaster),h("x",-10.5,9.5,-7.5,-7,0,o,[[-5.6,-3.6,.9,7.2],[-1.6,.4,.9,7.2],[2.4,7.4,0,3.4],[3.2,6.6,5,8]],i.plaster),s.sbox(i.floor,4.5,.3,5,-9.25,-.15,4.9),s.box(i.ceil,5,.3,6,-9.5,3.75,4.9),s.box(i.plaster,5.4,.3,6.6,-9.75,4.05,4.9),h("z",-12,-7.5,1.9,2.4,0,3.6,[[-10.4,-8.6,.9,2.9]],i.sage),h("z",-12,-7.5,7.4,7.9,0,3.6,[[-10.4,-8.6,.9,2.9]],i.sage),h("x",1.9,7.9,-12,-11.5,0,3.6,[[2.9,6.9,.6,3]],i.sage);const m=-7+vt;for(const T of[3.2,4.9,6.6])s.box(i.dark,4-2*vt,.18,.14,-9.5,3.6-.09-vt,T);s.box(i.oak,.3,.3,5.2,m+.15,3.45,4.9);function y(T,L,U,z,V=!0){const ut=[e(),e()];function mt(pt,ft,At){let _t=0;return zo(pt,.05,ft,i.oak.userData.ts,()=>ut[_t++]).translate(0,.025+vt,At)}const bt=[mt(L+.3,.14,.07+vt),mt(L-2*vt,z,-z/2+vt)];T.geo(i.oak,Qr(bt,!1),0,0,0);for(const pt of bt)pt.dispose();T.box(i.oak,.12+vt,U+.12,.06,-L/2-.06+vt/2,U/2,.03+vt),T.box(i.oak,.12+vt,U+.12,.06,L/2+.06-vt/2,U/2,.03+vt),T.box(i.oak,L+.36,.14+vt,.07,0,U+.07-vt/2,.035+vt);const B=-z*.55;T.box(i.dark,L-2*vt,.07,.07,0,.06,B),T.box(i.dark,L-2*vt,.07,.07,0,U-.035-vt,B),T.box(i.dark,.07,U-2*vt,.07,-L/2+.035+vt,U/2,B),T.box(i.dark,.07,U-2*vt,.07,L/2-.035-vt,U/2,B);const kt=Math.max(1,Math.round(L/.62));for(let pt=1;pt<kt;pt++)T.box(i.iron,.03,U,.035,-L/2+L*pt/kt,U/2,B);const Pt=Math.max(1,Math.round(U/.55));for(let pt=1;pt<Pt;pt++)T.box(pt%4===0?i.dark:i.iron,L-2*vt,pt%4===0?.06:.025,.035,0,U*pt/Pt,B);if(V){const pt=[];for(const[ft,At]of[[-L/2,0],[L/2,0],[L/2,U],[-L/2,U]])pt.push(new D(ft,At,B).applyMatrix4(T.m));u.push(pt)}}y(s.sub(-7,.9,-4.6,Math.PI/2),2,6.3,.5),y(s.sub(-7,.9,-.6,Math.PI/2),2,6.3,.5),y(s.sub(-7,5,4.9,Math.PI/2),3.4,3,.5),y(s.sub(-11.5,.6,4.9,Math.PI/2),4,2.4,.5),y(s.sub(-9.5,.9,7.4,Math.PI),1.8,2,.5),y(s.sub(-9.5,.9,2.4,0),1.8,2,.5,!1),y(s.sub(-4,4.5,9,Math.PI),2,3.8,.5),y(s.sub(3.6,4.5,9,Math.PI),2,3.8,.5);for(const T of[2.33,7.47])s.box(i.oak,.14,3.5+vt,.6,-7+.07+vt,(3.5-vt)/2,T);for(const T of[-4.6,-.6])s.box(i.dark,.04,.85,2,-6.98+vt,.45,T);function M(T,L,U,z,V,ut,mt){const bt=mt-z/2,B=mt+z/2;d(T,L,U,z,V,ut,mt,[[L,U,p.z0-bt,V,ut,(bt+p.z0)/2],[L,U,B-p.z1,V,ut,(p.z1+B)/2]])}M(i.dark,.05,1,2.2-vt,7-.025-vt,.5,7.85-vt/2),M(i.oak,.08,.06,2.3-vt,6.96-vt,1.02,7.85-vt/2);for(const[T,L,U,z]of[[14,.3,0,-9.85],[14,.3,0,8.85],[.3,19,-6.85,-.5],[.3,19,6.85,-.5]]){const V=U&&U-Math.sign(U)*vt,ut=z===-.5?z:z-Math.sign(z)*vt;s.box(i.oak,T>1?T-2*vt:T,.22,L>1?L-2*vt:L,V,o-.11-vt,ut),s.box(i.dark,T>1?T-2*vt:T+.1,.08,L>1?L-2*vt:L+.12,V-(U?Math.sign(U)*.05:0),o-.26,ut-(z===-.5?0:Math.sign(z)*.06))}s.box(i.oak,.12,.1,19-2*vt,-6.94+vt,8.4,-.5),s.box(i.oak,14-2*vt,.1,.12,0,8.4,8.94-vt),s.box(i.oak,.12,.1,19-2*vt,6.94-vt,8.4,-.5);for(const T of[-4.6,-.6]){s.cyl(i.iron,.02,.02,2.9,-6.82,7.55,T,8,Math.PI/2,0,0);for(const L of[-1,1]){s.sphere(i.iron,.045,-6.82,7.55,T+L*1.45),s.box(i.iron,.12,.03,.03,-6.9,7.55,T+L*1.3);for(let U=0;U<4;U++)s.box(i.cushion2,.05+U%2*.03,4.85-U*.12,.05,-6.86+U%2*.03,5.08+U*.06,T+L*(1.04+U*.035),0,0,0);s.cyl(i.brass,.012,.012,.2,-6.8,3.4,T+L*1.1,6,Math.PI/2,0,0)}}for(const T of[-8.2,-4.6,-1,2.6,6.2]){s.box(i.dark,14-2*vt,.38,.3,0,9.85,T),s.box(i.dark,.24,.6,.24,0,10.2-vt,T);for(const L of[-1,1]){const U=(.2*Math.cos(.62)+1.4*Math.sin(.62))/2;s.box(i.dark,.2,1.4,.22,L*(7-vt-U),9.2,T,0,0,L*.62),s.box(i.iron,.36,.42,.32,L*3.4,9.85,T),s.box(i.dark,.25,.7,.32,L*(7-.125-vt),9.2,T)}}for(const T of[-3.4,3.4])s.box(i.dark,.2,.24,19-2*vt,T,10.25,-.5);s.sbox(i.floor,14,.35,3,0,a-.175,-8.5),s.sbox(i.floor,2.8,.35,5.8,5.6,a-.175,-4.1);for(let T=-6.6;T<4.2;T+=.9)s.box(i.dark,.12,.24,3-vt,T,a-.47,-8.5+vt/2);for(let T=-6.6;T<-1.2;T+=.9)s.box(i.dark,2.8-vt,.24,.12,5.6-vt/2,a-.47,T);s.box(i.oak,11.31-vt,.55,.24,-1.345+vt/2,a-.27,-6.9),s.box(i.oak,.24,.55,5.9,4.3,a-.27,-4.15),s.box(i.dark,11.31-vt,.06,.3,-1.345+vt/2,a-.02,-6.9),s.box(i.dark,.3,.06,5.9,4.3,a-.02,-4.15);const x=[[-4.6,-6.9,"x"],[-1.4,-6.9,"x"],[1.8,-6.9,"x"],[4.3,-6.9,"c"],[4.3,-4.1,"z"],[4.3,-1.35,"z"]];for(const[T,L,U]of x){s.cyl(i.iron,.07,.085,a-.55,T,(a-.55)/2,L,14),s.box(i.iron,.24,.16,.24,T,.08,L),s.box(i.iron,.26,.1,.26,T,a-.6,L),s.cyl(i.iron,.11,.07,.18,T,a-.75,L,14),s.solid(.26,a-.5,.26,T,(a-.5)/2,L);const z=U==="x"?[[1,0],[-1,0]]:U==="z"?[[0,1],[0,-1]]:[[-1,0],[0,1]];for(const[V,ut]of z)s.box(i.iron,.04,.9,.04,T+V*.3,a-.88,L+ut*.3,ut*.72,0,-V*.72),s.torus(i.iron,.12,.012,T+V*.22,a-.75,L+ut*.22,0,V?0:Math.PI/2,0,16)}function R(T,L,U,z,V,ut=2.4,mt){const bt=Math.hypot(U-T,z-L),B=Math.atan2(-(z-L),U-T),kt=s.sub(T,V,L,B);kt.box(i.oak,bt+.06,.07,.13,bt/2,1.02,0),kt.box(i.iron,bt,.04,.05,bt/2,.97,0),kt.box(i.iron,bt,.04,.05,bt/2,.1,0);const Pt=Math.round((mt||bt)/.13);for(let _t=1;_t<Pt;_t++){const I=bt*_t/Pt;kt.box(i.iron,.02,.86,.02,I,.53,0),_t%3===0&&kt.sphere(i.iron,.025,I,.45,0)}const pt=Math.max(1,Math.round(bt/ut));for(let _t=0;_t<=pt;_t++){const I=bt*_t/pt;kt.box(i.oak,.11,1.12,.11,I,.56,0),kt.sphere(i.oak,.065,I,1.16,0,1,.8,1)}const ft=mt?s.sub(-7,V,L,B):kt,At=mt||bt;ft.solid(At,1.1,.16,At/2,.55,0)}R(-7+.065+vt,-6.92,4.3,-6.92,a,2.4,11.3),R(4.3,-6.92,4.3,-1.25,a,1.9),s.box(i.oak,.08,.3,3-vt,-6.96+vt,a+.1,-8.5+vt/2);const E=a/24,A=.3,S=4.2,v=7,b=6.7,P=(S+v)/2,F=v-S,O=[];for(let T=1;T<=11;T++)O.push({y:T*E,z0:b-T*A,z1:b-(T-1)*A});O.push({y:12*E,z0:2.1,z1:3.4,landing:!0});for(let T=13;T<=23;T++)O.push({y:T*E,z0:2.1-(T-12)*A,z1:2.1-(T-13)*A});for(const T of O){const L=T.z1-T.z0,U=(T.z0+T.z1)/2;s.box(i.dark,F-vt,T.y-.045,L,P-vt/2,(T.y-.045)/2,U),s.box(i.oak,F+.03-vt,.045,L+.035,P-.015-vt/2,T.y-.0225,U+.0175),s.solid(F,T.y,L,P,T.y/2,U),s.box(i.runner,1.5,.012,L,P+.15,T.y+.006,U+.01),s.box(i.runner,1.5,E-.03,.012,P+.15,T.y-E/2-.02,T.z1+.007),s.cyl(i.brass,.008,.008,1.62,P+.15,T.y-E+.012,T.z1+.02,6,0,0,Math.PI/2);const z=T.landing?9:2;for(let V=0;V<z;V++){const ut=T.z0+L*(V+.5)/z;s.box(i.iron,.022,.9,.022,S+.07,T.y+.45,ut)}s.solid(.16,1.05,L,S+.07,T.y+.52,U)}const N=Math.atan(E/A),Y=[[b,0,b-11*A,11*E],[2.1,12*E,-1.2,23*E]];for(const[T,L,U,z]of Y){const V=Math.hypot(T-U,z-L),ut=(T+U)/2,mt=(L+z)/2;s.box(i.oak,.13,.07,V,S+.07,mt+1,ut,N,0,0),s.box(i.iron,.05,.04,V,S+.07,mt+.95,ut,N,0,0),s.box(i.oak,.07,.32,V+.2,S-.02,mt+.02,ut-.05,N,0,0)}s.box(i.oak,.13,.07,1.3,S+.07,12*E+1,2.75);for(const[T,L]of[[b-.12,0],[3.4,11*E],[2.1,12*E],[-1.25,a]])s.box(i.oak,.16,1.25,.16,S+.07,L+.62,T),s.box(i.oak,.2,.06,.2,S+.07,L+1.26,T),s.sphere(i.oak,.08,S+.07,L+1.35,T);s.solid(.2,1.25,.2,S+.07,.62,b-.12);function k(T,L,U,z,V={}){const ut=Math.max(1,Math.round(L/(V.bay||.92))),mt=L/ut,bt=V.spacing||.38,B=.14,kt=Math.floor((U-B-.12)/bt),Pt=(U-B-.12)/kt;T.box(i.dark,L,B,z-.03,L/2,B/2,-z/2-.015),T.box(i.walnut,L,U,.02,L/2,U/2,-z+.01);function pt(ft,At,_t,I,w,X){const et=V.wallLeft?vt:-At/2,ot=V.wallRight?L-vt:L+At/2;T.box(ft,ot-et,_t,I,(et+ot)/2,w,X)}pt(i.walnut,.06,.07,z+.05,U-.035,-z/2+.025),pt(i.walnut,.12,.05,z+.09,U+.025,-z/2+.045),V.noCornice||pt(i.dark,.02,.1,.03,U-.12,.01);for(let ft=0;ft<=ut;ft++){const At=Math.min(L-.02,Math.max(.02,ft*mt));T.box(i.walnut,.04,U-.07,z,At,(U-.07)/2,-z/2);const _t=ft===0&&V.wallLeft?.03+vt:ft===ut&&V.wallRight?L-.03-vt:At;T.box(i.dark,.06,U-.2,.015,_t,U/2-.05,.005)}for(let ft=0;ft<ut;ft++){const At=ft*mt+.02,_t=(ft+1)*mt-.02,I=(f()-.5)*.04;for(let w=0;w<=kt;w++){const X=B+w*Pt+(w>0&&w<kt?I:0);if(w>0&&w<kt+1&&T.box(i.walnut,_t-At,.026,z-.025,(At+_t)/2,X-.013,-z/2-.0125),w<kt){const ot=B+(w+1)*Pt+(w+1<kt?I:0)-X-.026-.005,H=V.sparse?.8:.97;f()<H&&c.push({m:T.local(At+.005,X,-.012),len:_t-At-.01,clear:ot,d:z-.04})}}}V.solid!==!1&&T.solid(L,U+.05,z,L/2,U/2,-z/2)}k(s.sub(-7,0,-9.6,0),14,3.45,.4,{wallLeft:!0,wallRight:!0}),k(s.sub(-6.6,0,-5.75,Math.PI/2),3.85,3.45,.4),k(s.sub(6.6,0,-9.6,-Math.PI/2),8.4,3.45,.4,{spacing:.4}),k(s.sub(-6.6,0,-1.7,Math.PI/2),1.8,2.4,.36,{spacing:.36}),k(s.sub(-6.6,0,2.3,Math.PI/2),1.8,2.4,.36,{spacing:.42}),k(s.sub(-1.4,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.4,wallRight:!0}),k(s.sub(7,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.37,wallLeft:!0}),k(s.sub(-7,a,-9.6,0),14,3.8,.4,{spacing:.4,wallLeft:!0,wallRight:!0}),k(s.sub(-6.6,a,-7,Math.PI/2),2.6,3.8,.4,{spacing:.4}),k(s.sub(6.6,a,-9.6,-Math.PI/2),8.4,3.8,.4,{spacing:.39});for(const T of[-5,-2.4]){k(s.sub(-4.3,0,T+.3,0),4,2.25,.3,{spacing:.36,solid:!1}),k(s.sub(-.3,0,T-.3,Math.PI),4,2.25,.3,{spacing:.36,solid:!1}),s.solid(4.1,2.3,.62,-2.3,1.15,T);for(const L of[-4.33,-.27])s.box(i.oak,.06,2.3,.66,L,1.15,T);s.box(i.oak,4.14,.05,.7,-2.3,2.3,T)}k(s.sub(-10.6,0,2.75,0),2.2,.85,.35,{bay:.75,noCornice:!0}),k(s.sub(-8.4,0,7.05,Math.PI),2.2,.85,.35,{bay:.75,noCornice:!0});function j(T,L,U){s.cyl(i.iron,.016,.016,13.6,0,T+U-.15,-9.47,8,0,0,Math.PI/2);for(let B=-6.4;B<=6.4;B+=2.13)s.box(i.iron,.03,.03,.14,B,T+U-.15,-9.53);const z=-9.45,V=-8.35,ut=Math.hypot(V-z,U),mt=-Math.atan((V-z)/U);for(const B of[-.22,.22])s.box(i.oak,.05,ut,.08,L+B,T+U/2,(z+V)/2,mt,0,0);const bt=Math.floor(ut/.28);for(let B=1;B<bt;B++){const kt=B/bt;s.cyl(i.iron,.014,.014,.44,L,T+kt*U,V+(z-V)*kt,8,0,0,Math.PI/2)}for(const B of[-.22,.22])s.cyl(i.iron,.035,.035,.04,L+B,T+.035,V,10,0,0,Math.PI/2),s.box(i.iron,.02,.14,.02,L+B,T+U-.08,z-.02);s.solid(.6,1.2,.45,L,T+.6,V-.15)}j(0,-2.6,3.3),j(a,2.2,3.4);function $(T,L,U=.9,z=!0){if(z&&U===.9){Np(T,L===i.leather2?"tobacco":"oxblood");for(let bt=0;bt<14;bt++)f();T.solid(U,.95,.86,0,.47,0);return}const V=U,ut=.86;T.box(L,V,.3,ut,0,.27,0),T.box(L,V-.3,.13,ut-.24,0,.48,.06);for(const bt of[-1,1])T.box(L,.16,.36,ut-.05,bt*(V/2-.08),.6,.02),T.cyl(L,.095,.095,ut-.02,bt*(V/2-.07),.78,.03,12,Math.PI/2,0,0),T.cyl(i.dark,.03,.022,.12,bt*(V/2-.07),.06,ut/2-.08,8),T.cyl(i.dark,.03,.022,.12,bt*(V/2-.07),.06,-ut/2+.08,8),z&&T.box(L,.1,.45,.3,bt*(V/2-.06),1.05,-ut/2+.2);const mt=z?1.12:.9;T.box(L,V-.04,mt-.4,.2,0,.4+(mt-.4)/2,-ut/2+.1,-.08,0,0),T.cyl(L,.09,.09,V-.06,0,mt,-ut/2+.12,12,0,0,Math.PI/2);for(let bt=0;bt<3;bt++)for(let B=0;B<Math.round(V/.22);B++){const kt=Math.round(V/.22);T.sphere(i.iron,.012,-V/2+.13+(V-.26)*(B+bt%2*.5)/kt,.62+bt*.13,-ut/2+.215,1,1,.6,6,4)}T.solid(V,.95,ut,0,.47,0)}function J(T){T.box(i.oak,.44,.04,.42,0,.46,0);for(const[L,U]of[[-.19,.18],[.19,.18],[-.19,-.18],[.19,-.18]])T.cyl(i.oak,.02,.018,.44,L,.22,U,8);for(const L of[-.19,.19])T.box(i.oak,.035,.5,.035,L,.72,-.19,-.1,0,0);T.box(i.oak,.42,.08,.03,0,.94,-.215,-.1,0,0);for(let L=-1;L<=1;L++)T.box(i.oak,.03,.36,.02,L*.1,.72,-.2,-.1,0,0);T.box(i.oak,.38,.02,.02,0,.12,0),T.box(i.leather2,.36,.03,.34,0,.495,.01),T.solid(.44,.95,.44,0,.47,0)}function ct(T,L,U,z,V=0){T.cyl(i.brass,.07,.08,.025,L,U+.012,z,16),T.cyl(i.brass,.01,.01,.3,L,U+.17,z,8),T.cyl(i.brass,.012,.012,.12,L,U+.32,z,6,0,V,Math.PI/2),T.cyl(i.greenGlass,.1,.1,.3,L,U+.34,z,16,0,V,Math.PI/2,!1,0,Math.PI),T.sphere(i.flame,.03,L,U+.31,z,1.6,.6,1)}function nt(T,L,U,z,V=1){T.cyl(i.ceramic,.06*V,.09*V,.25*V,L,U+.125*V,z,16),T.cyl(i.brass,.01,.01,.15*V,L,U+.3*V,z,6),T.cyl(i.shade,.1*V,.17*V,.2*V,L,U+.42*V,z,20,0,0,0,!0)}function Tt(T,L,U,z,V,ut,mt){T.box(i.gilt,L+2*.07,.07,.05,z,V+U/2+.07/2,ut),T.box(i.gilt,L+2*.07,.07,.05,z,V-U/2-.07/2,ut),T.box(i.gilt,.07,U,.05,z-L/2-.07/2,V,ut),T.box(i.gilt,.07,U,.05,z+L/2+.07/2,V,ut),T.plane(i.painting,L,U,z,V,ut,0,0,0,[mt%2*.5,Math.floor(mt/2)*.5,.5,.5])}function Bt(T,L,U,z,V,ut){t.stack(T.m,L,U,z,V,ut)}function Q(T,L,U,z,V=.18){T.cyl(i.brass,.045,.06,.02,L,U+.01,z,12),T.cyl(i.brass,.012,.02,.2,L,U+.11,z,8),T.cyl(i.brass,.03,.02,.03,L,U+.22,z,10),T.cyl(i.paper,.016,.016,V,L,U+.235+V/2,z,8),T.sphere(i.flame,.012,L,U+.25+V,z,1,2,1,6,4)}{const T=s.sub(-.5,0,1.9,0);T.box(i.oak,1.25,.06,3.9,0,.75,0),T.box(i.dark,1.05,.13,3.6,0,.655,0);for(const U of[-1.75,0,1.75])for(const z of[-.5,.5])T.cyl(i.dark,.05,.04,.6,z,.32,U,10),T.sphere(i.dark,.06,z,.45,U,1,.8,1,10,6);T.box(i.dark,.06,.06,3.4,0,.14,0),T.solid(1.25,.8,3.9,0,.4,0),ct(T,0,.78,-.95,Math.PI/2),ct(T,0,.78,.95,Math.PI/2),l.push({p:new D(-.5,1.15,1.9),c:16761466,i:5.5,d:9}),Bt(T,.35,.78,-1.5,4,.2),Bt(T,-.38,.78,1.55,3,-.4),Bt(T,.4,.78,.4,2,1.2),T.box(i.leather,.44,.012,.3,-.15,.786,-.25,0,.1,0),T.box(i.paper,.2,.025,.28,-.255,.8,-.26,0,.1,.06),T.box(i.paper,.2,.025,.28,-.055,.8,-.24,0,.1,-.06),T.box(i.paper,.21,.004,.29,.3,.783,.9,0,-.3,0),T.cyl(i.iron,.03,.03,.05,.42,.805,.95,10),T.cyl(i.brass,.002,.002,.18,.4,.86,.95,4,0,0,.4);const L=[[-.88,-1.2,Math.PI/2],[-.92,.05,Math.PI/2+.15],[-.86,1.25,Math.PI/2],[.86,-1.25,-Math.PI/2],[1.15,.1,-Math.PI/2-.4],[.88,1.2,-Math.PI/2]];for(const[U,z,V]of L)J(T.sub(U,0,z,V))}{qp(s);const T=new Yn(3.4,5.2);T.rotateX(-Math.PI/2),T.rotateY(Math.PI/2),s.geo(i.rug,T,0,.008,6.8);const L=new Yn(2.2,3.2);L.rotateX(-Math.PI/2),s.geo(i.rug,L,-9.4,.008,4.9)}{const T=s.sub(0,0,9,Math.PI);T.box(i.stone,2.7,.08,.75,0,.04,.37);for(const L of[-1,1])T.box(i.stone,.38,1.28,.38,L*.96,.64,.19);T.box(i.stone,2.3,.36,.4,0,1.46,.2),T.box(i.dark,2.7,.08,.48,0,1.68,.24),T.box(i.plaster,2.3,3,.3,0,3.22,.15),T.box(i.soot,1.56,1.28,.04,0,.64,.02),T.box(i.soot,1.56,.02,.38,0,.09,.19);for(let L=0;L<6;L++)T.box(i.iron,.025,.25,.025,-.4+L*.16,.24,.3);T.box(i.iron,.9,.03,.3,0,.14,.2),T.cyl(i.dark,.06,.07,.75,0,.22,.18,8,0,.1,Math.PI/2),T.cyl(i.dark,.05,.05,.7,.05,.3,.24,8,0,-.3,Math.PI/2),T.box(i.ember,.8,.03,.26,0,.165,.2),T.sphere(i.ember,.12,-.1,.25,.2,2.2,.5,.8,8,6),T.solid(2.7,1.72,.8,0,.86,.4),Q(T,-1.05,1.72,.25),Q(T,1.05,1.72,.25,.14),T.box(i.dark,.32,.36,.14,0,1.9,.37+vt),T.cyl(i.ceramic,.11,.11,.02,0,1.94,.45+vt,20,Math.PI/2,0,0),T.cyl(i.brass,.125,.125,.015,0,1.94,.445+vt,20,Math.PI/2,0,0),T.cyl(i.terracotta,.05,.08,.22,.6,1.83,.22,12),Bt(T,-.6,1.72,.24,2,.3),Tt(T,1.4,.95,0,3.5,.325+vt,2),T.cyl(i.iron,.012,.012,.8,1.32,.4,.55,6,0,0,.08),T.cyl(i.brass,.025,.025,.06,1.35,.82,.55,8),l.push({p:new D(0,.55,8.35),c:16747068,i:6,d:10,fire:!0})}$(s.sub(0,0,5.7,0),i.leather,2.2,!1),$(s.sub(-2.15,0,7.4,Math.PI/2-.2),i.leather2),$(s.sub(2.15,0,7.4,-Math.PI/2+.25),i.leather);{const T=s.sub(0,0,7.3,.05);T.box(i.oak,1.1,.05,.6,0,.42,0);for(const[U,z]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]])T.box(i.dark,.05,.4,.05,U,.2,z);T.box(i.dark,1,.02,.5,0,.1,0),T.solid(1.1,.45,.6,0,.22,0),Bt(T,-.25,.445,0,3,.5),T.cyl(i.ceramic,.04,.03,.07,.25,.48,.05,12),T.torus(i.ceramic,.025,.006,.29,.48,.05,0,0,0,10),T.cyl(i.ceramic,.07,.07,.008,.25,.449,.05,16),Bt(T,-.2,.12,0,3,0);const L=s.sub(1.45,0,5.75,0);L.cyl(i.dark,.25,.25,.03,0,.6,0,20),L.cyl(i.dark,.03,.04,.58,0,.3,0,8),L.cyl(i.dark,.18,.2,.03,0,.015,0,16),L.solid(.5,.62,.5,0,.31,0),nt(L,0,.615,0,1.1)}{s.box(i.oak,.6,.45,4,-11.19,.225,4.9),s.solid(.62,.45,4,-11.2,.225,4.9),s.box(i.cushion,.56,.1,3.9,-11.2,.5,4.9),s.box(i.cushion2,.16,.42,.5,-11.38,.74,3.25,0,0,-.25),s.box(i.leather2,.16,.38,.46,-11.38,.72,6.5,0,.2,-.3),s.box(i.cushion,.4,.06,.6,-11.1,.58,5.2,0,.4,0),t.stack(s.m,-11.2,.55,4.3,3,.4),s.cyl(i.terracotta,.11,.08,.2,-11.25,.65,6,14);for(let U=0;U<9;U++){const z=U/9*Math.PI*2;s.box(i.plant,.06,.32,.01,-11.25+Math.cos(z)*.06,.88,6+Math.sin(z)*.06,Math.sin(z)*.5,z,Math.cos(z)*.5)}$(s.sub(-9.3,0,3.4,-Math.PI/2+.55),i.leather),$(s.sub(-9.3,0,6.35,-Math.PI/2-.55),i.leather2);const T=s.sub(-9.9,0,4.9,0);T.cyl(i.oak,.3,.3,.035,0,.6,0,24),T.cyl(i.dark,.035,.05,.58,0,.3,0,10);for(let U=0;U<3;U++){const z=U/3*Math.PI*2;T.box(i.dark,.05,.05,.3,Math.cos(z)*.12,.04,Math.sin(z)*.12,0,-z+Math.PI/2,0)}T.solid(.6,.62,.6,0,.31,0),Bt(T,-.08,.62,-.08,3,.7),T.cyl(i.ceramic,.045,.035,.06,.14,.65,.1,12),T.cyl(i.ceramic,.075,.075,.008,.14,.62,.1,16);const L=s.sub(-8,0,7,0);L.cyl(i.iron,.16,.18,.03,0,.015,0,16),L.cyl(i.iron,.014,.014,1.5,0,.76,0,8),L.cyl(i.shade,.14,.24,.28,0,1.55,0,20,0,0,0,!0),L.solid(.36,1.6,.36,0,.8,0),l.push({p:new D(-8,1.5,6.9),c:16757866,i:4,d:7}),Tt(s.sub(-7.5,0,2.4,0),.5,.4,-.45,2,.03,3),Bt(s,-8.6,0,7.15,5,.3)}{const T=s.sub(-5.9,0,-.7,.3);for(let L=0;L<6;L++)f();t2(T,i),T.solid(.7,1.3,.7,0,.65,0)}{const T=s.sub(5.5,0,-1.22,Math.PI);T.box(i.oak,1.9,1.1,.5,0,.55,.25);for(let L=0;L<8;L++)for(let U=0;U<6;U++){const z=-.82+L*.235,V=.22+U*.15;T.box(i.walnut,.2,.12,.02,z,V,.505),T.box(i.brass,.05,.012,.02,z,V-.02,.52),T.box(i.paper,.05,.025,.005,z,V+.025,.517)}T.box(i.walnut,2,.05,.56,0,1.125,.25),T.solid(1.9,1.15,.5,0,.57,.25),nt(T,.65,1.15,.25,.9),Bt(T,-.4,1.15,.25,4,.2),s.cyl(i.brass,.008,.008,.75,5.5,a-.95,-4.1,6),s.cyl(i.brass,.04,.04,.05,5.5,a-.6,-4.1,10),s.cyl(i.shade,.1,.22,.2,5.5,a-1.38,-4.1,20,0,0,0,!0),s.sphere(i.flame,.035,5.5,a-1.4,-4.1,1,1,1,8,6),l.push({p:new D(5.5,a-1.5,-4.1),c:16759930,i:3.5,d:7})}{const T=s.sub(-5.6,a,-8.85,0);Gp(T),T.solid(1.4,.8,.7,0,.4,0),ct(T,-.4,.785,-.1,0),Bt(T,.45,.785,-.1,5,0),T.box(i.paper,.3,.004,.22,.05,.787,.1,0,.2,0),J(T.sub(.05,0,.6,Math.PI+.2)),l.push({p:new D(-5.9,a+1.25,-8.85),c:16761466,i:4.5,d:8}),$(s.sub(6,a,-3.6,-Math.PI/2),i.leather2);const L=s.sub(6.1,a,-2.4,0);L.cyl(i.dark,.22,.22,.03,0,.55,0,18),L.cyl(i.dark,.03,.03,.54,0,.27,0,8),L.cyl(i.dark,.15,.17,.03,0,.015,0,14),L.solid(.44,.58,.44,0,.29,0),Bt(L,0,.565,0,3,.4),t.stack(s.m,3.4,a,-9,6,.2),t.stack(s.m,-1.6,0,-8.9,4,.1)}for(const[T,L,U]of[[-.5,6.2,1.9],[-2.3,7,-3.7]]){s.torus(i.iron,.75,.025,T,L,U,Math.PI/2,0,0,40),s.torus(i.iron,.4,.018,T,L-.25,U,Math.PI/2,0,0,28),s.cyl(i.iron,.006,.006,10.5-L,T,(10.5+L)/2,U,4);for(let z=0;z<4;z++){const V=z/4*Math.PI*2+.4;s.cyl(i.iron,.005,.005,1.1,T+Math.cos(V)*.37,L+.45,U+Math.sin(V)*.37,4,Math.sin(V)*.72,0,-Math.cos(V)*.72)}for(let z=0;z<10;z++){const V=z/10*Math.PI*2,ut=T+Math.cos(V)*.75,mt=U+Math.sin(V)*.75;s.cyl(i.iron,.03,.02,.04,ut,L+.03,mt,8),s.cyl(i.paper,.014,.014,.14,ut,L+.12,mt,6),s.sphere(i.flame,.011,ut,L+.205,mt,1,2,1,6,4)}}Tt(s.sub(7,0,0,-Math.PI/2),1.1,.8,4.6,3.1,.03,0),Tt(s.sub(7,0,0,-Math.PI/2),.9,1.2,.7,5.3,.03,1),Tt(s.sub(-7,0,0,Math.PI/2),.9,.7,2.6,3.2,.03,3),Tt(s.sub(-7,0,0,Math.PI/2),.9,.7,-1.4,3.2,.03,1);{const T=s;T.sphere(i.ceramic,.12,-3.6,2.5,-5,.85,1.1,.85,14,10),T.cyl(i.ceramic,.07,.1,.16,-3.6,2.4,-5,12),T.box(i.stone,.2,.08,.2,-3.6,2.36,-5),t.stack(s.m,-1.2,2.325,-5,3,.3),T.cyl(i.terracotta,.12,.09,.26,-1,2.455,-2.4,14),T.sphere(i.plant,.18,-1,2.7,-2.4,1,.7,1,10,6),t.stack(s.m,-3.2,2.325,-2.4,4,1.2),Q(s,-2.4,2.325,-2.4)}const lt=(T,L,U)=>{const z=new es(r,T.m),V=f();if(V<.35)z.box(i.iron,.012,Math.min(.16,T.clear-.02),.11,L-U/2+.01,Math.min(.16,T.clear-.02)/2,-.08),z.box(i.iron,.09,.006,.11,L-U/2+.05,.003,-.08);else if(V<.55&&T.clear>.22)z.cyl(f()<.5?i.ceramic:i.terracotta,.035,.05,.15,L,.075,-.1,12);else if(V<.75){const ut=Math.min(U-.02,.14);z.box(f()<.5?i.walnut:i.leather2,ut,Math.min(.08,T.clear-.02),.12,L,.04,-.1)}else V<.85&&T.clear>.2&&z.box(i.gilt,.1,.13,.012,L,.065,-.12,-.15,0,0)};for(const T of c)t.fillSlot(T,lt);return r.finish=r.finish.bind(r),{B:r,lights:l,windows:u,slots:c}}const zc=[[.36,.08,.06],[.42,.12,.08],[.12,.2,.12],[.1,.16,.28],[.18,.1,.06],[.48,.32,.16],[.06,.06,.06],[.55,.42,.2],[.16,.26,.26],[.3,.1,.16],[.62,.55,.42],[.26,.24,.2],[.4,.24,.1],[.2,.12,.2],[.7,.62,.48]],kc=new Be,Hc=new we,i2=new D,r2=new D;class s2{constructor(t){this.rand=t,this.mats=[],this.cols=[],this.vars=[]}color(t,e=0){const n=this.rand,r=t||zc[Math.floor(n()*zc.length)],s=.8+n()*.4,o=e||(n()<.12?.2+n()*.25:0);return[r[0]*s*(1-o)+.55*o,r[1]*s*(1-o)+.48*o,r[2]*s*(1-o)+.38*o]}add(t,e,n,r,s,o,a,c,l,u,f=0){Hc.set(0,f,s),kc.setFromEuler(Hc);const h=new jt().compose(i2.set(e,n,r),kc,r2.set(o,a,c));h.premultiply(t),this.mats.push(h),this.cols.push(l),this.vars.push(u)}fillSlot(t,e){const n=this.rand,{m:r,len:s,clear:o,d:a}=t;let c=.01+n()*.04,l=.25;for(;c<s-.03;){const u=n(),f=s-c;if(u<.07&&f>.34&&o>.16){const x=2+Math.floor(n()*4);let R=0,E=0;const A=.2+n()*.1;for(let S=0;S<x;S++){const v=.022+n()*.04;if(R+v>o-.02)break;const b=Math.min(A+(n()-.5)*.06,f-.03),P=Math.min(a-.02,.15+n()*.08);this.add(r,c+b/2+(n()-.5)*.02,R+v/2,-P/2-.01-n()*.02,Math.PI/2,v,b,P,this.color(),Math.floor(n()*8),(n()-.5)*.12),R+=v,E=Math.max(E,b)}c+=E+.02+n()*.03;continue}if(u<.13){const x=.06+n()*.16;e&&x>.1&&f>.2&&e(t,c+x/2,x),c+=x;continue}const h=n()<.4,d=h?4+Math.floor(n()*10):3+Math.floor(n()*12),p=this.color(),_=Math.floor(n()*8),g=Math.min(o-.02,.2+n()*.16),m=.03+n()*.03,y=Math.min(a-.02,.15+n()*.08),M=n()<.2?.08:0;for(let x=0;x<d&&c<s-.03;x++){let R,E,A,S,v;if(h?(R=m*(.85+n()*.3),E=g,A=y,S=n()<.08?this.color():p,v=_):(R=.016+n()*.05+(n()<.1?.03:0),E=Math.min(o-.015,.17+n()*.17+M),A=Math.min(a-.02,.12+n()*.13),S=this.color(),v=Math.floor(n()*8)),c+R>s-.01)break;const b=.006+n()*(n()<.15?.06:.018);this.add(r,c+R/2,E/2,-A/2-b,0,R,E,A,S,v,(n()-.5)*.03),c+=R+.0015,l=E}if(n()<.35&&s-c>.12){const x=.12+n()*.3,R=.02+n()*.03,E=Math.min(l*.95,o-.03,.18+n()*.12),A=Math.min(a-.02,.14+n()*.08),S=c+R/2*Math.cos(x)+E/2*Math.sin(x),v=R/2*Math.sin(x)+E/2*Math.cos(x);c+R*Math.cos(x)+E*Math.sin(x)<s-.01&&(this.add(r,S,v,-A/2-.01,x,R,E,A,this.color(),Math.floor(n()*8)),c+=R*Math.cos(x)+E*Math.sin(x))}c+=.004+n()*.04}}stack(t,e,n,r,s,o=0){const a=this.rand;let c=n;for(let l=0;l<s;l++){const u=.025+a()*.04,f=.2+a()*.12,h=.15+a()*.08;this.add(t,e+(a()-.5)*.03,c+u/2,r+(a()-.5)*.03,Math.PI/2,u,f,h,this.color(),Math.floor(a()*8),o+(a()-.5)*.4),c+=u}return c}build(t){const e=new mn(1,1,1),n=e.attributes.uv,r=new Float32Array(n.count),s=new Float32Array(n.count);for(let h=0;h<6;h++)for(let d=0;d<4;d++){const p=h*4+d;let _=n.getX(p),g=n.getY(p);if(h===4)_=_*.0625,r[p]=1;else if(h===0||h===1)_=.76+_*.23;else if(h===2||h===3){const m=_;_=.51+g*.23,g=m,s[p]=1}else _=.51+_*.23,s[p]=1;n.setXY(p,_,g)}e.setAttribute("aSpine",new me(r,1)),e.setAttribute("aPage",new me(s,1));const o=this.mats.length,a=new Float32Array(o);for(let h=0;h<o;h++)a[h]=this.vars[h];e.setAttribute("aVar",new Fo(a,1));const c=new pp({map:t});c.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
attribute float aSpine;
attribute float aPage;
attribute float aVar;
varying float vPage;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x += aSpine * aVar * 0.0625;
vPage = aPage;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.xyz = mix(vColor.xyz, vec3(0.78, 0.71, 0.57), aPage);`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
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
`)};const l=e.index.array;e.setIndex(Array.from(l.slice(0,30)));const u=new ea(e,c,o),f=new zt;for(let h=0;h<o;h++){u.setMatrixAt(h,this.mats[h]);const d=this.cols[h];f.setRGB(d[0],d[1],d[2]),u.setColorAt(h,f)}return u.instanceMatrix.needsUpdate=!0,u.instanceColor.needsUpdate=!0,u.castShadow=!0,u.receiveShadow=!0,u.computeBoundingSphere(),u}}const Gc=.0026,Vc=Math.PI/2-.02;function o2({canvas:i,overlay:t,menuButton:e,player:n,camera:r,releaseMovement:s,toast:o,isInputBlocked:a=()=>!1,setMenuPaused:c=()=>{}}){const l=t.querySelector("#look-sensitivity"),u=t.querySelector("#look-sensitivity-value"),f=t.querySelector("[data-resume-look]");let h=Gc,d=!1,p=!1,_=!1,g=!1,m=!1,y=document.hasFocus(),M=!1,x=!1,R=0,E=0,A=0,S=!1,v=!1;const b=[];function P(nt,Tt,Bt,Q){nt.addEventListener(Tt,Bt,Q),b.push(()=>nt.removeEventListener(Tt,Bt,Q))}function F(){return!v&&!S&&y&&!t.open&&!a()}function O(){i.focus({preventScroll:!0}),y=document.visibilityState==="visible"&&document.hasFocus()}function N(nt,Tt){!Number.isFinite(nt)||!Number.isFinite(Tt)||(n.yaw-=nt*h,n.pitch=Math.max(-Vc,Math.min(Vc,n.pitch-Tt*h)),r.rotation.set(n.pitch,n.yaw,0))}function Y(){++A,d=_=g=p=m=!1,s(),document.pointerLockElement===i&&document.exitPointerLock()}function k(){t.open&&t.close(),c(!1),!v&&!S&&O()}function j(){if(!(v||S||t.open||a()))return Y(),t.showModal(),c(!0),f.focus({preventScroll:!0}),!0}function $(){_=m=!1,F()&&(M=!0,o("Hold left mouse to look. Esc opens controls."))}async function J(){if(d||_||!F())return;if(!i.requestPointerLock){$();return}const nt=++A;_=m=!0,g=!1;try{const Tt=i.requestPointerLock({unadjustedMovement:!0});if(!Tt||typeof Tt.then!="function"){g=!0;return}try{await Tt}catch(Bt){if(Bt.name!=="NotSupportedError"||nt!==A||!F())throw Bt;await i.requestPointerLock()}}catch{nt===A&&F()&&$()}finally{nt===A&&!g&&(_=!1)}}P(e,"click",j),P(f,"click",()=>{k(),J()}),P(t,"cancel",nt=>{nt.preventDefault(),k()}),P(t,"close",()=>{c(!1),!v&&!S&&O()}),P(i,"mousedown",nt=>{nt.button!==0||v||S||t.open||a()||(O(),!(d||!F())&&(x=!M,p=!0,R=nt.clientX,E=nt.clientY,J()))}),P(i,"click",nt=>{x&&(x=!1,nt.stopImmediatePropagation())},!0),P(i,"keydown",nt=>{nt.code==="Enter"&&!nt.repeat&&F()&&(J(),nt.preventDefault())}),P(globalThis,"mouseup",()=>{p=!1}),P(globalThis,"mousemove",nt=>{if(!(!F()||document.visibilityState!=="visible")){if(d)N(nt.movementX,nt.movementY);else if(p){if(!(nt.buttons&1)){p=!1;return}N(nt.clientX-R,nt.clientY-E),R=nt.clientX,E=nt.clientY}}}),P(document,"pointerlockchange",()=>{const nt=d;d=document.pointerLockElement===i,_=g=p=!1,d&&(!F()||!m)&&(document.exitPointerLock(),d=!1),d?(M=!1,O()):(m=!1,nt&&s())}),P(document,"pointerlockerror",()=>{g&&_&&(g=!1,$())});function ct(){y=!1,M=!1,Y()}return P(globalThis,"blur",ct),P(globalThis,"focus",()=>{y=document.visibilityState==="visible"}),P(document,"visibilitychange",()=>{document.visibilityState!=="visible"?ct():y=document.hasFocus()}),P(globalThis,"keydown",nt=>{nt.code==="Escape"&&!nt.repeat&&!t.open&&j()&&nt.preventDefault()}),P(l,"input",()=>{const nt=Math.max(40,Math.min(220,Number(l.value)||100));h=Gc*nt/100,u.textContent=`${nt}%`}),{get menuOpen(){return t.open},pause(){S=!0,ct()},resume(){v||(S=!1,y=document.visibilityState==="visible"&&document.hasFocus())},dispose(){if(!v){v=!0,S=!0,ct();for(const nt of b)nt();t.open&&t.close()}}}}const Wc=Object.freeze({welcome:{label:"Welcome book",cover:["A place","for you"],color:3362112,kicker:"Welcome · first shelf",title:"A place to leave good things",paragraphs:["Come in, take a seat, and read something that catches your attention. I’ve left a short find on the table and connected the writing desk to the private project workspace.","Start with Shapes & sound, the rust-colored book nearby. When you want to work on personal notes or decisions, visit the writing desk upstairs.","This first shelf is small. The room can change as better buildings arrive; the things worth keeping can move with it."],links:[],signature:"Left for you — Jippity"},drums:{label:"Shapes & sound",cover:["Shapes","& sound"],color:7356719,kicker:"An interesting find · mathematics",title:"Different shapes, the same spectrum",paragraphs:["Two mathematically different ideal drumheads can have exactly the same set of resonant frequencies, including their multiplicities. Gordon, Webb and Wolpert constructed distinct planar shapes with this property: the frequency list alone does not uniquely reveal the boundary.","There is a stronger surprise. Buser, Conway, Doyle and Semmler gave a homophonic pair with a special point on each drum. Corresponding normalized vibration modes take matching values there. In the ideal point-strike model, striking those points excites every frequency with matching strength.","The assumptions matter: ideal membranes with matching tension and density, fixed boundaries, and the mathematical wave model. This does not mean arbitrary real rooms, instruments or recordings sound identical. Strike location, damping, material, acoustics and how you listen still matter in practice.","That is the part I find interesting: a complete frequency list can be precise and still leave the shape ambiguous."],links:[{label:"Gordon, Webb & Wolpert · One cannot hear the shape of a drum (1992)",href:"https://arxiv.org/pdf/math/9207215"},{label:"Buser, Conway, Doyle & Semmler · Some planar isospectral domains (1994)",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],signature:"Selected by Jippity"},desk:{label:"Project Library",kicker:"The writing desk",title:"Project Library",paragraphs:["Personal notes and decisions belong in the signed-in Project Library. Open that workspace when you’re ready to write or pick up a project.","This desk is just the entrance. The link opens your private workspace in a new tab; sign in there if asked."],links:[{label:"Open private Project Library",href:"https://jippity-project-room.pazneria.chatgpt.site"}],signature:"Jippity"}}),Xc=Object.freeze([{id:"table-welcome",contentId:"welcome",position:[-.35,.808,3.53],yaw:.12,kind:"book",bounds:{x0:-.53,x1:-.17,y0:.783,y1:.84,z0:3.32,z1:3.74}},{id:"table-drums",contentId:"drums",position:[-.87,.808,2.35],yaw:-.18,kind:"book",bounds:{x0:-1.06,x1:-.68,y0:.783,y1:.84,z0:2.13,z1:2.57}},{id:"gallery-writing-desk",contentId:"desk",kind:"existing-paper",position:[-5.55,4.999,-8.75],bounds:{x0:-5.76,x1:-5.34,y0:4.98,y1:5.025,z0:-8.94,z1:-8.56}}]),a2=2.2;function c2(i,t,e,n=()=>document.createElement("canvas")){const r=t.filter(E=>E.kind==="book"),s=n();s.width=256*r.length,s.height=384;const o=s.getContext("2d"),a=[],c=[],l=new D(0,1,0),u=[],f=new jt,h=new Be,d=new D,p=new mn(1,1,1),_=new Ee({roughness:.85,color:16777215}),g=new ea(p,_,r.length),m=new D;for(let E=0;E<r.length;E++){const A=r[E],S=e[A.contentId],v="#"+S.color.toString(16).padStart(6,"0");o.fillStyle=v,o.fillRect(E*256,0,256,384),o.strokeStyle="#c7a96c",o.lineWidth=2,o.strokeRect(E*256+20,24,216,336),o.fillStyle="#f0dfbe",o.textAlign="center",o.font="30px Georgia",S.cover.forEach((b,P)=>o.fillText(b,E*256+128,154+P*42)),o.font="15px Georgia",o.fillText("JIPPITY",E*256+128,304),h.setFromAxisAngle(l,A.yaw),f.compose(m.fromArray(A.position),h,d.set(.26,.038,.34)),g.setMatrixAt(E,f),g.setColorAt(E,new zt(S.color));for(const[b,P,F,O]of[[-.13,.17,0,0],[.13,.17,1,0],[.13,-.17,1,1],[-.13,.17,0,0],[.13,-.17,1,1],[-.13,-.17,0,1]])m.set(b,.021,P).applyQuaternion(h).add(new D().fromArray(A.position)),a.push(m.x,m.y,m.z),u.push(0,1,0),c.push((E+F)/r.length,O)}g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0);const y=new Qt;y.setAttribute("position",new Ft(a,3)),y.setAttribute("normal",new Ft(u,3)),y.setAttribute("uv",new Ft(c,2));const M=new Ui(s);M.colorSpace=le;const x=new Ee({map:M,roughness:.9}),R=new Jt(y,x);return g.name="Jippity reading books",R.name="Jippity book covers",i.add(g,R),{objects:[g,R],budget:{books:r.length,drawCalls:2,triangles:r.length*14,texturePixels:s.width*s.height},dispose(){i.remove(g,R),g.dispose(),p.dispose(),_.dispose(),y.dispose(),x.dispose(),M.dispose()}}}const l2=["x","y","z"];function qc(i,t,e,n=1/0){let r=0,s=n;if(!Number.isFinite(Math.hypot(t.x,t.y,t.z))||Math.hypot(t.x,t.y,t.z)<1e-10)return null;for(const o of l2){const a=i[o],c=t[o],l=e[o+"0"],u=e[o+"1"];if(!Number.isFinite(a)||!Number.isFinite(c)||!Number.isFinite(l)||!Number.isFinite(u))return null;if(Math.abs(c)<1e-10){if(a<l||a>u)return null}else{const f=(l-a)/c,h=(u-a)/c;if(r=Math.max(r,Math.min(f,h)),s=Math.min(s,Math.max(f,h)),r>s)return null}}return s>=0?r:null}function Yc(i,t,e,n,r=2.2){let s=null,o=r;for(const a of e){const c=qc(i,t,a.bounds,o);c!==null&&c<=o&&(s=a,o=c)}if(!s)return null;for(const a of n){const c=qc(i,t,a,o);if(c!==null&&c+.025<o)return null}return s}function la(i){var t;return!!((t=i==null?void 0:i.closest)!=null&&t.call(i,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))}const Xi="jippityLibraryReader";function u2({document:i,window:t,canvas:e,dialog:n,hint:r,content:s,getTarget:o,canInteract:a,look:c,setPaused:l,releaseMovement:u,returnFocus:f}){const h=n.querySelector("#reader-title"),d=n.querySelector("#reader-kicker"),p=n.querySelector("#reader-pages"),_=n.querySelector("#reader-links"),g=n.querySelector("#reader-signature"),m=[];let y=null,M=!1,x=!1,R=null;function E(F,O,N){F.addEventListener(O,N),m.push(()=>F.removeEventListener(O,N))}function A(F){const O=s[F];d.textContent=O.kicker,h.textContent=O.title,p.replaceChildren(),_.replaceChildren();for(const N of O.paragraphs){const Y=i.createElement("p");Y.textContent=N,p.append(Y)}for(const N of O.links){const Y=i.createElement("a");Y.textContent=N.label,Y.href=N.href,Y.target="_blank",Y.rel="noopener noreferrer",Y.referrerPolicy="no-referrer",_.append(Y)}_.hidden=!O.links.length,g.textContent=O.signature}function S(F,O=!0){if(M||x||!Object.hasOwn(s,F))return!1;const N=y!==null;if(y=F,u(),c.pause(),l(!0),r.hidden=!0,A(F),i.body.classList.add("reading-open"),n.open||n.showModal(),n.scrollTop=0,h.focus({preventScroll:!0}),O){const Y={...t.history.state,[Xi]:F};N?t.history.replaceState(Y,"",t.location.href):t.history.pushState(Y,"",t.location.href)}return!0}function v(){y!==null&&(y=null,n.open&&n.close(),i.body.classList.remove("reading-open"),r.hidden=!0,u(),c.resume(),l(!1),f==null||f.focus({preventScroll:!0}))}function b(){var O;if(y===null)return;const F=((O=t.history.state)==null?void 0:O[Xi])===y;v(),F&&(x=!0,t.history.back())}function P(){if(y!==null||M||x||!a())return!1;const F=o();return F?S(F.contentId):!1}return E(t,"keydown",F=>{F.code!=="KeyE"||F.repeat||y!==null||la(F.target)||P()&&F.preventDefault()}),E(e,"mousedown",F=>{R=F.button===0?{x:F.clientX,y:F.clientY,dragged:!1}:null}),E(t,"mousemove",F=>{R&&Math.hypot(F.clientX-R.x,F.clientY-R.y)>5&&(R.dragged=!0)}),E(e,"click",F=>{const O=R==null?void 0:R.dragged;R=null,!O&&(F.button===void 0||F.button===0)&&P()}),E(r,"click",P),E(n,"cancel",F=>{F.preventDefault(),b()}),E(n.querySelector("#reader-close"),"click",b),E(n.querySelector("#reader-back"),"click",b),E(n,"close",b),E(t,"popstate",F=>{var N;x=!1;const O=(N=F.state)==null?void 0:N[Xi];O&&Object.hasOwn(s,O)?S(O,!1):v()}),{get isOpen(){return y!==null},openNearby:P,close:b,updateHint(){const F=!M&&y===null&&a()?o():null;r.hidden=!F,F&&(r.textContent=`E — ${s[F.contentId].label}`)},dispose(){var F;if(!M){M=!0;for(const O of m)O();if(n.open&&n.close(),y=null,r.hidden=!0,i.body.classList.remove("reading-open"),(F=t.history.state)!=null&&F[Xi]){const O={...t.history.state};delete O[Xi],t.history.replaceState(O,"",t.location.href)}u(),c.pause(),l(!0)}}}}const h2=1,f2="shapes-and-sound",d2="Shapes & Sound",p2="A small study of shared resonances",m2="Jippity · Field notes",g2="No. 01",_2="Selected by Jippity",x2={lines:["SHAPES","& SOUND"],spine:"SHAPES & SOUND",imprint:"JIPPITY",note:"ON THE GEOMETRY OF LISTENING"},v2=[{kind:"title",eyebrow:"Mathematics / Acoustics",title:`Shapes
& Sound`,paragraphs:["Different outlines can share the same ideal resonances. A short reading on what a sound can tell us—and what it can leave hidden."],note:"An original decorative resonance motif accompanies this text; it is not a diagram of an isospectral pair."},{kind:"text",eyebrow:"01 / The question",title:"Can a sound reveal a shape?",paragraphs:["Imagine an ideal, uniformly tensioned drumhead held fixed along its edge. Its natural vibration frequencies form a kind of fingerprint. Could that complete list determine its outline?","In 1992, Carolyn Gordon, David Webb, and Scott Wolpert announced differently shaped planar domains with the same spectrum. For this mathematical model, the answer is no."],sourceIds:["gww"]},{kind:"text",eyebrow:"02 / The construction",title:"Rearranging the pieces",paragraphs:["Peter Buser, John Conway, Peter Doyle, and Klaus-Dieter Semmler describe pairs assembled from congruent triangles. Their proof moves and combines pieces of vibration patterns from one domain to the other.","This “transplantation” preserves each eigenvalue and its multiplicity. The boundaries differ, yet the full spectral lists agree."],note:"Isospectral means equal spectra, including repeated eigenvalues.",sourceIds:["bcds"]},{kind:"text",eyebrow:"03 / A finer distinction",title:"The same notes are not the whole sound",paragraphs:["Matching natural frequencies does not by itself specify how strongly a particular strike excites them.","Buser and colleagues also give a stronger example: a homophonic pair with special corresponding strike points. In their ideal model, striking at those points excites matching frequencies with matching intensities."],sourceIds:["bcds"]},{kind:"text",eyebrow:"04 / Beyond the ideal",title:"And what about this room?",paragraphs:["The theorem concerns ideal mathematical domains. A real room adds three-dimensional geometry, absorbing surfaces, furnishings, and the positions of both source and listener.","It does not say that arbitrary differently shaped rooms—or ordinary recordings of real drums—sound identical. The lesson is more precise: even complete spectral information can leave some geometry unresolved."],note:"A mathematical possibility, not a room-acoustics simulation.",sourceIds:["gww","bcds"]},{kind:"sources",eyebrow:"Reading desk / Sources",title:"Follow the proof",paragraphs:["Two public papers for a longer visit. Links open only when you choose them."],sourceIds:["gww","bcds"],note:"Public reading sample · No audio simulation"}],y2=[{id:"gww",authors:"Carolyn Gordon, David L. Webb & Scott Wolpert",title:"One cannot hear the shape of a drum",detail:"Research announcement · 1992",href:"https://arxiv.org/pdf/math/9207215"},{id:"bcds",authors:"Peter Buser, John Conway, Peter Doyle & Klaus-Dieter Semmler",title:"Some planar isospectral domains",detail:"Version 1.0.1 · 1994",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],M2={schemaVersion:h2,id:f2,title:d2,subtitle:p2,series:m2,edition:g2,signature:_2,cover:x2,pages:v2,sources:y2},b2=1,S2="welcome-to-the-library",E2="A Place for Good Things",w2="Come in. Find a page worth keeping.",T2="Jippity · The first shelf",A2="Welcome / 01",R2="Left for you — Jippity",C2={lines:["A PLACE","FOR GOOD THINGS"],spine:"A PLACE FOR GOOD THINGS",imprint:"JIPPITY",note:"A WELCOME TO THE LIBRARY"},P2=[{kind:"title",eyebrow:"Welcome / The first shelf",title:`A place for
good things`,paragraphs:["Come in, take a seat, and read something that catches your attention. A good library makes room for curiosity and gives useful things a place to return to."],note:"The books can move with the room. The things worth keeping can stay."},{kind:"text",eyebrow:"A short way around",title:"Find your next page",paragraphs:["Start with Shapes & Sound, the petrol-cloth book nearby. It follows a precise and surprising question: how much can a sound tell you about a shape?","A Working Notebook rests on the north shelf downstairs. It is a public example of a small project book: a question, a useful observation, and a next step.","The writing desk upstairs leads to the signed-in Project Library. Visit it when you want to work on personal notes or decisions."],note:"Inspect a nearby book with E or a deliberate click. Read when you are ready; Escape returns you to its place."}],I2=[],L2={schemaVersion:b2,id:S2,title:E2,subtitle:w2,series:T2,edition:A2,signature:R2,cover:C2,pages:P2,sources:I2},D2=1,U2="public-working-notebook",N2="A Working Notebook",F2="Small notes that make the next visit useful",O2="Jippity · Public notebooks",B2="Sample / 01",z2="A public example — Jippity",k2={lines:["A WORKING","NOTEBOOK"],spine:"A WORKING NOTEBOOK",imprint:"JIPPITY",note:"QUESTION · OBSERVATION · NEXT STEP"},H2=[{kind:"title",eyebrow:"Public sample / Project book",title:`A working
notebook`,paragraphs:["A project book can be small enough to revisit and clear enough to continue. This one shows a simple pattern for useful notes."],note:"This sample contains public guidance. Personal work belongs in the signed-in Project Library."},{kind:"text",eyebrow:"01 / The question",title:"Leave a clear beginning",paragraphs:["Give a note one question to answer. Write enough context that you can understand it on the next visit, without having to reconstruct the whole conversation.","For a room like this, a useful question is: can a visitor find a book, read it comfortably, and return to exactly where they were?"],note:"A title should help someone choose a book before opening it."},{kind:"text",eyebrow:"02 / The observation",title:"Keep what helps",paragraphs:["Record the observation that changes your next decision. Separate what you have checked from what you still want to try.","In this public example, book content and placement are separate. The same edition can sit on a table or a shelf, while its pages and sources remain together."],note:"Add a source when it supports the note. Keep speculation recognizable as a question."},{kind:"text",eyebrow:"03 / The next visit",title:"End with a next step",paragraphs:["Leave one concrete action at the end of a note. A small, useful next step makes it easier to pick up the project later.","For this example: choose a public topic, give it a short edition with clear pages, and check its placement from a visitor's standing position."],note:"Revisit and revise the edition as the project changes. Keep private notes in their authenticated workspace."}],G2=[],V2={schemaVersion:D2,id:U2,title:N2,subtitle:F2,series:O2,edition:B2,signature:z2,cover:k2,pages:H2,sources:G2},Bl=Object.freeze({drums:{content:M2,summary:"A small study of shared resonances, with two primary papers.",palette:{}},welcome:{content:L2,summary:"A short welcome and a guide to the first shelf.",palette:{cloth:"#334d40",ribbon:"#ad7653"}},notebook:{content:V2,summary:"A public sample of useful project notes, ready to adapt.",colorSize:512,palette:{cloth:"#603d45",ribbon:"#7d8c65"}}}),zl=Object.freeze([{id:"table-drums",contentId:"drums",position:[-.87,.782,2.35],yaw:-.18,surface:"table"},{id:"table-welcome",contentId:"welcome",position:[-.35,.782,3.53],yaw:.12,surface:"table"},{id:"north-shelf-notebook",contentId:"notebook",position:[1.54,1.330682,-9.782],scale:.62,surface:"shelf",location:"On the north shelf",support:{bounds:{x0:-7,x1:7,y0:-.025,y1:3.475,z0:-10,z1:-9.6},aperture:{x0:1.42,x1:2.313333,y0:1.330682,y1:1.69,z0:-9.601,z1:-9.599}}}]),W2=4;function Yr(i,t,e,n=1/0){let r=0,s=n;for(const o of["x","y","z"]){const a=i[o],c=t[o],l=e[o+"0"],u=e[o+"1"];if(![a,c,l,u].every(Number.isFinite)||l>u)return null;if(Math.abs(c)<1e-10){if(a<l||a>u)return null}else{const f=(l-a)/c,h=(u-a)/c;if(r=Math.max(r,Math.min(f,h)),s=Math.min(s,Math.max(f,h)),r>s)return null}}return s>=0?r:null}const X2=[{x0:-.18,x1:.17,y0:0,y1:.064,z0:-.235,z1:.235},{x0:-.065,x1:-.039,y0:.002,y1:.043,z0:.198,z1:.284}],ua=["x","y","z"],jc=i=>i&&ua.every(t=>Number.isFinite(i[t+"0"])&&Number.isFinite(i[t+"1"])&&i[t+"0"]<i[t+"1"]);function kl(i,t){if(!Array.isArray(i)||i.length>W2)throw new RangeError("Use at most four authored book copies.");const e=new Set;return i.map(n=>{if(!n)throw new TypeError("Invalid public book placement.");const r=n.scale??1,s=[n.pitch??0,n.yaw??0,n.roll??0],o=n.reach??2.2;if(!n||typeof n.id!="string"||!n.id||e.has(n.id)||!Object.hasOwn(t,n.contentId)||!Array.isArray(n.position)||n.position.length!==3||!n.position.every(Number.isFinite)||!s.every(Number.isFinite)||!Number.isFinite(r)||r<.4||r>1.2||!Number.isFinite(o)||o<=0||o>2.2||!["table","shelf"].includes(n.surface))throw new TypeError("Invalid public book placement.");if(n.support&&(!jc(n.support.bounds)||!jc(n.support.aperture)))throw new TypeError("Invalid shelf support.");if(n.location!==void 0&&(typeof n.location!="string"||!n.location.trim()||n.location.length>120))throw new TypeError("Invalid book location label.");const a=t[n.contentId];if(typeof a.summary!="string"||!a.summary.trim()||a.summary.length>300||![512,1024].includes(a.colorSize??1024)||Object.entries(a.palette||{}).some(([l,u])=>!["cloth","foil","paper","ink","ribbon"].includes(l)||typeof u!="string"||!/^#[0-9a-f]{6}$/i.test(u)))throw new TypeError("Invalid public edition description or palette.");e.add(n.id);const c=new jt().compose(new D(...n.position),new Be().setFromEuler(new we(...s)),new D(r,r,r));return{...n,scale:r,reach:o,matrix:c,inverse:c.clone().invert()}})}function q2(i,t,e,n,r){const s=t.support;if(!s||!ua.every(c=>Math.abs(i[c+"0"]-s.bounds[c+"0"])<1e-4&&Math.abs(i[c+"1"]-s.bounds[c+"1"])<1e-4)||e.z<=i.z1||n.z>=0)return!1;const o=Yr(e,n,i,r),a=Yr(e,n,s.aperture,r);return o!==null&&a!==null&&Math.abs(o-a)<.002}function Y2(i,t,e,n=[]){const r=Math.hypot(t.x,t.y,t.z);if(!Number.isFinite(r)||r<1e-10||!ua.every(a=>Number.isFinite(i[a])))return null;const s=new D(t.x/r,t.y/r,t.z/r);let o=null;for(const a of e){const c=new D(i.x,i.y,i.z).applyMatrix4(a.inverse),l=s.clone().transformDirection(a.inverse).divideScalar(a.scale);let u=1/0;for(const h of X2){const d=Yr(c,l,h,a.reach);d!==null&&(u=Math.min(u,d))}if(!Number.isFinite(u)||o&&o.distance<=u)continue;n.some(h=>{const d=Yr(i,s,h,u);return d!==null&&d+.022<u&&!q2(h,a,i,s,u)})||(o={...a,distance:u})}return o}const mi=Object.freeze({cover:[16,16,640,896],spine:[680,16,120,896],paper:[824,16,184,400],end:[824,448,184,256],ribbon:[824,752,184,240],cloth:[688,944,104,48]}),$c=i=>i/1024;function j2(i,t,e){const[n,r,s,o]=mi[i];return[$c(n+2+t*(s-4)),1-$c(r+2+(1-e)*(o-4))]}function $2(){const i=[],t=[],e=[],n={min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0]};function r(M,x,R,E=[[0,0],[1,0],[1,1]],A="cloth"){const S=x.map((O,N)=>O-M[N]),v=R.map((O,N)=>O-M[N]),b=[S[1]*v[2]-S[2]*v[1],S[2]*v[0]-S[0]*v[2],S[0]*v[1]-S[1]*v[0]],P=Math.hypot(...b);if(P<1e-12)return;const F=b.map(O=>O/P);[M,x,R].forEach((O,N)=>{i.push(...O),t.push(...F),e.push(...j2(A,...E[N])),O.forEach((Y,k)=>{n.min[k]=Math.min(n.min[k],Y),n.max[k]=Math.max(n.max[k],Y)})})}function s(M,x,R,E,A="cloth",S=[[0,0],[1,0],[1,1],[0,1]]){r(M,x,R,[S[0],S[1],S[2]],A),r(M,R,E,[S[0],S[2],S[3]],A)}function o(M,x,R,E,A,S,v,b){const P=[];for(let k=0;k<4;k++){const j=k*Math.PI/2,$=(k===0||k===3?1:-1)*(M/2-A),J=(k<2?1:-1)*(x/2-A);for(let ct=0;ct<=S;ct++){const nt=j+ct*Math.PI/(2*S);P.push([$+Math.cos(nt)*A,J+Math.sin(nt)*A])}}const F=Math.min(.0016,E*.24),O=[[R,.0012],[R+F,0],[R+E-F,0],[R+E,.0012]],N=O.map(([k,j])=>P.map(([$,J])=>[$*(1-j/(M/2)),k,J*(1-j/(x/2))])),Y=P.length;for(let k=0;k<O.length-1;k++)for(let j=0;j<Y;j++){const $=(j+1)%Y;s(N[k][j],N[k+1][j],N[k+1][$],N[k][$],b,[[j/Y,(O[k][0]-R)/E],[j/Y,(O[k+1][0]-R)/E],[$/Y,(O[k+1][0]-R)/E],[$/Y,(O[k][0]-R)/E]])}for(let k=0;k<Y;k++){const j=(k+1)%Y,$=N[3],J=N[0],ct=nt=>[nt[0]/M+.5,.5-nt[2]/x];r([0,R+E,0],$[j],$[k],[[.5,.5],ct($[j]),ct($[k])],v),r([0,R,0],J[k],J[j],[[.5,.5],[0,0],[1,0]],"cloth")}}o(.34,.47,0,.006,.006,3,"end","cloth"),o(.314,.448,.007,.048,.003,2,"end","paper"),o(.34,.47,.058,.006,.006,3,"cover","cloth");const a=-.165,c=.032,l=.031;for(let M=0;M<10;M++){const x=-Math.PI/2+M*Math.PI/10,R=x+Math.PI/10,E=(A,S,v=0)=>[a-Math.cos(A)*(l*.4+v),c+Math.sin(A)*l,S];s(E(x,-.228),E(x,.228),E(R,.228),E(R,-.228),"spine",[[M/10,1],[M/10,0],[(M+1)/10,0],[(M+1)/10,1]]),r([a,c,-.228],E(x,-.228),E(R,-.228),void 0,"cloth"),r([a,c,.228],E(R,.228),E(x,.228),void 0,"cloth")}for(const M of[-.178,-.109,.109,.178])for(let x=0;x<8;x++){const R=-Math.PI/2+x*Math.PI/8,E=R+Math.PI/8,A=(S,v)=>[a-Math.cos(S)*.0144,c+Math.sin(S)*.0315,v];s(A(R,M-.0021),A(R,M+.0021),A(E,M+.0021),A(E,M-.0021))}const u=[-.064,.042,.198],f=[-.043,.042,.198],h=[-.041,.01,.248],d=[-.062,.01,.248],p=[-.04,.003,.284],_=[-.0505,.003,.277],m=[[u,d,h],[u,h,f],[d,[-.061,.003,.284],_],[d,_,h],[h,_,p]],y=M=>[(M[0]+.065)/.027,(.284-M[2])/.086];for(const M of m){r(...M,M.map(y),"ribbon");const x=M.map(R=>[R[0],R[1]-5e-4,R[2]]).reverse();r(...x,x.map(y),"ribbon")}return{position:new Float32Array(i),normal:new Float32Array(t),uv:new Float32Array(e),bounds:n,triangles:i.length/9}}const Ki=Object.freeze({cloth:"#173c40",foil:"#d6b16a",paper:"#eee4cc",ink:"#263f3b",ribbon:"#79374c"}),Hl=Object.freeze({color:1024,control:512,bump:256});function Gl(i,t,e="color"){const n=Hl[e];i.width=i.height=n;const r=i.getContext("2d");if(!r)throw new Error("Jippity book requires a 2D canvas context.");r.save(),r.scale(n/1024,n/1024);const s=e==="color",o=e==="bump",a=s?Ki.cloth:o?"#808080":"rgb(0,212,0)",c=s?Ki.foil:o?"#777777":"rgb(0,100,220)";if(r.fillStyle=a,r.fillRect(0,0,1024,1024),s||o){r.lineWidth=.6;for(let N=0;N<1024;N+=3)r.strokeStyle=s?N%2?"rgba(210,230,204,.045)":"rgba(0,0,0,.05)":N%2?"#888":"#777",r.beginPath(),r.moveTo(N,0),r.lineTo(N+.7,1024),r.stroke();for(let N=0;N<1024;N+=4)r.strokeStyle=s?"rgba(225,235,211,.025)":"#848484",r.beginPath(),r.moveTo(0,N),r.lineTo(1024,N+.5),r.stroke()}const[l,u,f,h]=mi.cover;r.strokeStyle=c,r.fillStyle=c,r.lineWidth=1.3,r.strokeRect(l+28,u+30,f-56,h-60),r.lineWidth=.65,r.strokeRect(l+35,u+37,f-70,h-74);for(const[N,Y,k,j]of[[l+45,u+47,1,1],[l+f-45,u+47,-1,1],[l+45,u+h-47,1,-1],[l+f-45,u+h-47,-1,-1]])r.beginPath(),r.moveTo(N,Y+12*j),r.lineTo(N,Y),r.lineTo(N+12*k,Y),r.stroke();r.textAlign="center",r.textBaseline="middle";function d(N,Y,k,j,$="Georgia"){let J=k;for(r.font=J+"px "+$;r.measureText(N).width>j&&J>12;)J--,r.font=J+"px "+$;r.fillText(N,l+f/2,Y)}d(t.series.toUpperCase(),u+97,16,f-110,"Arial"),r.lineWidth=.8,r.beginPath(),r.moveTo(l+250,u+131),r.lineTo(l+390,u+131),r.stroke(),t.cover.lines.forEach((N,Y)=>d(N,u+215+Y*83,67,f-98)),d(t.subtitle,u+385,19,f-115),r.save(),r.translate(l+f/2,u+570);for(let N=0;N<9;N++){r.beginPath();for(let Y=0;Y<=160;Y++){const k=Y*Math.PI*2/160,j=32+N*8.1+Math.sin(3*k+N*.16)*8+Math.cos(2*k)*4,$=Math.cos(k)*j*1.19,J=Math.sin(k)*j*.8;Y?r.lineTo($,J):r.moveTo($,J)}r.closePath(),r.lineWidth=N===8?1.5:.85,r.stroke()}r.beginPath(),r.arc(0,0,2.8,0,Math.PI*2),r.fill(),r.restore(),d(t.cover.note,u+750,12.5,f-90,"Arial"),d(t.cover.imprint,u+806,21,f-90),d(t.edition.toUpperCase(),u+842,10,f-90,"Arial");const[p,_,g,m]=mi.spine;r.save(),r.translate(p+g/2,_+m/2),r.rotate(Math.PI/2),r.font="26px Georgia",r.fillText(t.cover.spine,0,0,m*.7),r.font="12px Arial",r.fillText(t.cover.imprint,-m*.36,0),r.restore(),r.lineWidth=2;for(const N of[_+61,_+m-61])r.beginPath(),r.moveTo(p+14,N),r.lineTo(p+g-14,N),r.stroke();const[y,M,x,R]=mi.paper;if(r.fillStyle=s?Ki.paper:o?"#808080":"rgb(0,241,0)",r.fillRect(y,M,x,R),s||o)for(let N=0;N<65;N++){const Y=M+4+N*(R-8)/65;r.strokeStyle=s?N%7===0?"rgba(111,88,49,.28)":"rgba(132,107,66,.12)":N%7===0?"#6b6b6b":"#777777",r.lineWidth=N%7===0?1.6:.7,r.beginPath(),r.moveTo(y,Y),r.bezierCurveTo(y+x*.3,Y+.7,y+x*.7,Y-.4,y+x,Y+.3),r.stroke()}const[E,A,S,v]=mi.end;if(r.fillStyle=s?"#d9d4b9":o?"#808080":"rgb(0,226,0)",r.fillRect(E,A,S,v),s){r.strokeStyle="#a4b0a1",r.lineWidth=.8;for(let N=0;N<18;N++)r.beginPath(),r.moveTo(E,A+N*16),r.lineTo(E+S,A+N*16+S*.34),r.stroke()}const[b,P,F,O]=mi.ribbon;if(r.fillStyle=s?Ki.ribbon:o?"#808080":"rgb(0,135,20)",r.fillRect(b,P,F,O),s){r.strokeStyle="rgba(242,171,168,.15)",r.lineWidth=1;for(let N=0;N<F;N+=4)r.beginPath(),r.moveTo(b+N,P),r.lineTo(b+N,P+O),r.stroke()}return r.restore(),i}function ha(i){const t=(n,r)=>typeof n=="string"&&n.trim().length>0&&n.length<=r;if(!i||i.schemaVersion!==1||!t(i.id,80)||!t(i.title,120))throw new TypeError("Invalid book identity.");if(!t(i.series,80)||!t(i.subtitle,160)||!t(i.signature,120)||!t(i.edition,40))throw new TypeError("Invalid book metadata.");if(!i.cover||!Array.isArray(i.cover.lines)||i.cover.lines.length<1||i.cover.lines.length>3||!i.cover.lines.every(n=>t(n,40))||!t(i.cover.spine,100)||!t(i.cover.imprint,50)||!t(i.cover.note,100))throw new TypeError("Invalid cover text.");if(!Array.isArray(i.pages)||!i.pages.length||i.pages.length>40)throw new TypeError("A book needs 1–40 pages.");if(!Array.isArray(i.sources)||i.sources.length>30)throw new TypeError("Invalid sources.");const e=new Set;for(const n of i.sources){if(!t(n.id,60)||e.has(n.id)||!t(n.title,240)||!t(n.authors,300)||!t(n.detail,120))throw new TypeError("Invalid source metadata.");if(typeof n.href!="string"||!/^https:\/\/[a-z0-9][a-z0-9.-]*(?::443)?\//i.test(n.href)||/[\s<>"\\]/.test(n.href))throw new TypeError("Sources must use a public HTTPS URL.");e.add(n.id)}for(const n of i.pages){if(!["title","text","sources"].includes(n.kind)||!t(n.title,140)||!t(n.eyebrow,100)||!Array.isArray(n.paragraphs)||n.paragraphs.length>8||!n.paragraphs.every(r=>t(r,1800)))throw new TypeError("Invalid page.");if(n.note!==void 0&&!t(n.note,500))throw new TypeError("Invalid page note.");if(n.sourceIds!==void 0&&(!Array.isArray(n.sourceIds)||n.sourceIds.some(r=>!e.has(r))))throw new TypeError("Unknown source.")}return i}function K2({THREE:i,content:t,position:e=[0,0,0],yaw:n=0,makeCanvas:r=()=>document.createElement("canvas")}){ha(t);const s=$2(),o=new i.BufferGeometry;o.setAttribute("position",new i.BufferAttribute(s.position,3)),o.setAttribute("normal",new i.BufferAttribute(s.normal,3)),o.setAttribute("uv",new i.BufferAttribute(s.uv,2)),o.computeBoundingBox(),o.computeBoundingSphere();const a={};for(const h of["color","control","bump"]){const d=new i.CanvasTexture(Gl(r(),t,h));h==="color"&&(d.colorSpace=i.SRGBColorSpace),d.anisotropy=4,d.name="Jippity "+h+" atlas",a[h]=d}const c=new i.MeshStandardMaterial({map:a.color,roughnessMap:a.control,metalnessMap:a.control,bumpMap:a.bump,bumpScale:24e-5,roughness:1,metalness:1});c.name="Jippity cloth, foil, paper and silk";const l=new i.Mesh(o,c);l.name="Jippity — "+t.title,l.position.fromArray(e),l.rotation.y=n,l.castShadow=!0,l.receiveShadow=!0,l.updateMatrix(),l.matrixAutoUpdate=!1;const u=Object.values(Hl).reduce((h,d)=>h+d*d,0);let f=!1;return{object:l,budget:Object.freeze({triangles:s.triangles,vertices:s.position.length/3,drawCalls:1,geometryBytes:s.position.byteLength+s.normal.byteLength+s.uv.byteLength,texturePixels:u,textureBaseRGBABytes:u*4,textureWithFullMipRGBABytes:Math.round(u*4*4/3),note:"Static geometry/texture accounting; drawCalls excludes shadow and optional host prepass. No frame-rate or GPU-memory measurement."}),dispose(){f||(f=!0,l.removeFromParent(),o.dispose(),c.dispose(),Object.values(a).forEach(h=>h.dispose()),Object.values(a).forEach(h=>{h.image=null}))}}}function Kc(i,t,e,n=1024){const r=i(),s=r.getContext("2d"),o=new Map(Object.entries(e).map(([c,l])=>[Ki[c],l])),a=new Proxy(s,{get(c,l){if(l==="scale")return(f,h)=>c.scale(f*n/1024,h*n/1024);const u=c[l];return typeof u=="function"?u.bind(c):u},set(c,l,u){return c[l]=(l==="fillStyle"||l==="strokeStyle")&&o.has(u)?o.get(u):u,!0}});return Gl({set width(c){r.width=n},set height(c){r.height=n},getContext:()=>a},t,"color"),r}function Z2({THREE:i,catalog:t,placements:e,makeCanvas:n=()=>document.createElement("canvas")}){const r=kl(e,t),s=new Set,o=new Map,a=[];let c=null,l=!1;try{for(const h of r){const d=t[h.contentId];if(ha(d.content),!o.has(h.contentId))if(c){const _=new i.CanvasTexture(Kc(n,d.content,d.palette||{},d.colorSize));_.colorSpace=i.SRGBColorSpace,_.anisotropy=4,_.name=d.content.title+" color atlas";const g=c.object.material.clone();g.map=_,s.add(g),s.add(_),o.set(h.contentId,g)}else{c=K2({THREE:i,content:d.content,makeCanvas:n});for(const g of[c.object.geometry,c.object.material,...["map","roughnessMap","bumpMap"].map(m=>c.object.material[m])])s.add(g);const _=c.object.material.map;(Object.keys(d.palette||{}).length||(d.colorSize??1024)!==1024)&&(_.image=Kc(n,d.content,d.palette||{},d.colorSize)),o.set(h.contentId,c.object.material)}const p=new i.Mesh(c.object.geometry,o.get(h.contentId));p.name="Jippity - "+d.content.title,p.matrix.copy(h.matrix),p.matrixAutoUpdate=!1,p.castShadow=p.receiveShadow=!0,a.push({object:p,placement:h,content:d.content})}}catch(h){for(const d of s)d.dispose(),d.isCanvasTexture&&(d.image=null);throw h}const u=[...o.values()].reduce((h,d)=>h+d.map.image.width**2,0)+(c?512**2+256**2:0),f=Object.freeze({books:a.length,editions:o.size,triangles:a.length*466,drawCalls:a.length,texturePixels:u,textureWithFullMipRGBABytes:Math.round(u*4*4/3),geometryBytes:(c==null?void 0:c.budget.geometryBytes)||0,note:"CPU construction accounting; excludes shadows/prepass and measures neither GPU allocation nor frame rate."});return{books:a,placements:r,objects:a.map(h=>h.object),budget:f,dispose(){if(!l){l=!0;for(const h of a)h.object.removeFromParent();for(const h of s)h.dispose(),h.isCanvasTexture&&(h.image=null)}}}}function J2(i){if(!Number.isInteger(i)||i<1||i>40)throw new RangeError("Invalid page count.");const t=Math.ceil(i/2);let e="closed",n=0;const r=s=>Math.max(0,Math.min(t-1,Number.isFinite(s)?Math.trunc(s):0));return{get isOpen(){return e==="open"},get disposed(){return e==="disposed"},get spread(){return n},get count(){return t},open(s=n){return e==="disposed"?!1:(n=r(s),e="open",!0)},go(s){if(e!=="open")return!1;const o=r(s);return o===n?!1:(n=o,!0)},close(){return e!=="open"?!1:(e="closed",!0)},dispose(){e="disposed"}}}const Nr="jippityBoundBook";let Q2=0;const tm=i=>{var t;return!!((t=i==null?void 0:i.closest)!=null&&t.call(i,'input, textarea, select, [contenteditable], [role="textbox"]'))};function em(i){const t=i.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","-145 -110 290 220"),t.setAttribute("aria-hidden","true"),t.setAttribute("class","jb-motif");for(let e=0;e<9;e++){const n=i.createElementNS("http://www.w3.org/2000/svg","path");let r="";for(let s=0;s<=120;s++){const o=s*Math.PI*2/120,a=32+e*8.1+Math.sin(3*o+e*.16)*8+Math.cos(2*o)*4;r+=(s?"L":"M")+(Math.cos(o)*a*1.19).toFixed(2)+" "+(Math.sin(o)*a*.8).toFixed(2)+" "}n.setAttribute("d",r+"Z"),t.append(n)}return t}function nm({document:i,window:t,content:e,look:n,setPaused:r,releaseMovement:s,returnFocus:o,onError:a=()=>{}}){ha(e);const c=J2(e.pages.length),l=e.id+":"+ ++Q2,u=[];let f=!1,h=null,d=null,p=null,_=null;const g=(U,z,V)=>{const ut=i.createElement(U);return z&&(ut.className=z),V!==void 0&&(ut.textContent=V),ut},m=g("dialog","jb-reader");m.setAttribute("aria-label",e.title);const y=g("div","jb-shell"),M=g("header","jb-toolbar"),x=g("div","jb-identity",e.series),R=g("button","jb-close","Back to library");R.type="button",R.setAttribute("aria-label","Close "+e.title+" and return to the library");const E=g("span","jb-close-glyph","×");E.setAttribute("aria-hidden","true"),R.append(E),M.append(x,R);const A=g("div","jb-binding"),S=g("div","jb-spread");S.setAttribute("aria-label","Open book"),A.append(S);const v=g("footer","jb-navigation"),b=g("button","jb-page-button","← Previous"),P=g("button","jb-page-button","Next →");b.type=P.type="button",b.setAttribute("aria-label","Previous two pages"),P.setAttribute("aria-label","Next two pages");const F=g("div","jb-navigation-center"),O=g("select","jb-contents");O.setAttribute("aria-label","Choose a pair of pages");for(let U=0;U<c.count;U++){const z=g("option","",String(U+1).padStart(2,"0")+" / "+e.pages[U*2].title.replace(/\n/g," "));z.value=String(U),O.append(z)}const N=g("p","jb-status");N.setAttribute("role","status"),N.setAttribute("aria-live","polite"),N.setAttribute("aria-atomic","true"),F.append(O,N),v.append(b,F,P);const Y=g("p","jb-keyboard-note","← → turn pages · Esc returns to the library");y.append(M,A,v,Y),m.append(y),i.body.append(m);const k=(U,z,V)=>{U.addEventListener(z,V),u.push(()=>U.removeEventListener(z,V))},j=()=>{var U,z;return((z=(U=t.history.state)==null?void 0:U[Nr])==null?void 0:z.session)===l},$=()=>{var U;return!!((U=t.matchMedia)!=null&&U.call(t,"(prefers-reduced-motion: reduce)").matches)};function J(U,z=!1){const V=g("a",z?"jb-source-link":"jb-citation",z?U.title:"["+(e.sources.indexOf(U)+1)+"]");return V.href=U.href,V.target="_blank",V.rel="noopener noreferrer",V.referrerPolicy="no-referrer",V.setAttribute("aria-label",U.title+" — opens PDF in a new tab"),V}function ct(U){var Pt;const z=e.pages[U],V=g("article","jb-paper "+(U%2?"jb-paper-right":"jb-paper-left"));if(!z)return V.setAttribute("aria-label","Blank endpaper"),V.append(g("p","jb-colophon",e.signature)),V;const ut=g("div","jb-running-head",U===0?e.edition:e.title),mt=g("div","jb-page-body"+(z.kind==="title"?" jb-title-page":"")),bt=g("p","jb-eyebrow",z.eyebrow),B=g("h2","jb-heading",z.title);if(mt.append(bt,B),z.kind==="title"&&mt.append(em(i)),z.paragraphs.forEach(pt=>mt.append(g("p","jb-paragraph",pt))),z.kind==="sources"){const pt=g("ol","jb-sources");for(const ft of z.sourceIds||[]){const At=e.sources.find(I=>I.id===ft),_t=g("li","");_t.append(g("p","jb-source-authors",At.authors),J(At,!0),g("p","jb-source-detail",At.detail)),pt.append(_t)}mt.append(pt)}else if((Pt=z.sourceIds)!=null&&Pt.length){const pt=g("p","jb-citations");pt.append(g("span","","Sources ")),z.sourceIds.forEach(ft=>pt.append(J(e.sources.find(At=>At.id===ft)))),mt.append(pt)}z.note&&mt.append(g("p","jb-margin-note",z.note));const kt=g("div","jb-folio");return kt.append(g("span","",U===0?e.signature:e.series),g("span","",String(U+1).padStart(2,"0"))),V.append(ut,mt,kt),V}function nt(U=0){d==null||d.cancel(),d=null,S.replaceChildren(ct(c.spread*2),ct(c.spread*2+1));const z=c.spread*2+1,V=Math.min(z+1,e.pages.length);N.textContent="Pages "+z+"–"+V+" of "+e.pages.length,O.value=String(c.spread),b.disabled=c.spread===0,P.disabled=c.spread===c.count-1,m.scrollTop=0,U&&!$()&&S.animate&&(d=S.animate([{opacity:.35,transform:"translateX("+U*10+"px)"},{opacity:1,transform:"translateX(0)"}],{duration:180,easing:"cubic-bezier(.2,.65,.3,1)"}))}function Tt(){if(j())try{t.history.replaceState({...t.history.state,[Nr]:{session:l,book:e.id,spread:c.spread}},"",t.location.href)}catch(U){a(U)}}function Bt(U=!0,z=c.spread){if(c.disposed||f)return!1;if(c.isOpen)return L(z),!0;p=i.activeElement,c.open(z);try{s(),n.pause(),r(!0),nt(),m.showModal(),R.focus({preventScroll:!0})}catch(V){c.close(),m.open&&m.close();try{s(),n.resume()}finally{r(!1)}return a(V),!1}if(U)try{_=t.history.state;const V=_&&typeof _=="object"?_:{};t.history.pushState({...V,[Nr]:{session:l,book:e.id,spread:c.spread}},"",t.location.href)}catch(V){a(V)}return!0}function Q(){var z;if(!c.close())return!1;d==null||d.cancel(),d=null,m.open&&m.close();try{s(),n.resume()}finally{r(!1)}const U=(o==null?void 0:o.isConnected)!==!1&&(o!=null&&o.focus)?o:p;return(U==null?void 0:U.isConnected)!==!1&&((z=U==null?void 0:U.focus)==null||z.call(U,{preventScroll:!0})),!0}function lt(){f=!1,h!==null&&t.clearTimeout(h),h=null}function T(){if(!c.isOpen)return!1;const U=j();if(Q(),U){f=!0,h=t.setTimeout(()=>{if(j())try{t.history.replaceState(_,"",t.location.href)}catch(z){a(z)}lt()},1200);try{t.history.back()}catch(z){if(j())try{t.history.replaceState(_,"",t.location.href)}catch(V){a(V)}lt(),a(z)}}return!0}function L(U){const z=c.spread;return c.go(U)?(nt(Math.sign(c.spread-z)),Tt(),!0):!1}return k(R,"click",T),k(b,"click",()=>L(c.spread-1)),k(P,"click",()=>L(c.spread+1)),k(O,"change",()=>L(Number(O.value))),k(m,"cancel",U=>{U.preventDefault(),T()}),k(m,"close",()=>{!m.open&&c.isOpen&&T()}),k(m,"keydown",U=>{if(U.altKey||U.ctrlKey||U.metaKey||tm(U.target))return;let z;if(U.key==="ArrowRight"||U.key==="PageDown")z=c.spread+1;else if(U.key==="ArrowLeft"||U.key==="PageUp")z=c.spread-1;else if(U.key==="Home")z=0;else if(U.key==="End")z=c.count-1;else return;U.preventDefault(),L(z)}),k(t,"popstate",U=>{var V;lt();const z=(V=U.state)==null?void 0:V[Nr];(z==null?void 0:z.session)===l&&z.book===e.id?c.isOpen?L(z.spread):Bt(!1,z.spread):Q()}),{get isOpen(){return c.isOpen},get pendingBack(){return f},get spread(){return c.spread},open:()=>Bt(!0),close:T,go:L,element:m,dispose(){if(!c.disposed){if(lt(),u.forEach(U=>U()),Q(),c.dispose(),d==null||d.cancel(),j())try{t.history.replaceState(_,"",t.location.href)}catch(U){a(U)}m.remove()}}}}function im(i,t,e){var S;const n=nm({...i,content:t.content}),r=i.document,s=n.element,o=v=>s.querySelector("."+v),a=(v,b,P)=>{const F=r.createElement(v);return F.className=b,P!==void 0&&(F.textContent=P),F};s.classList.add("lb-reader"),s.setAttribute("style","--lb-cloth:"+(((S=t.palette)==null?void 0:S.cloth)||"#173c40"));const c=a("section","lb-inspect"),l=a("div","lb-cover");l.setAttribute("aria-hidden","true"),l.append(a("p","lb-cover-series",t.content.series),a("p","lb-cover-title",t.content.cover.lines.join(`
`)),a("p","lb-cover-note",t.content.cover.note),a("p","lb-cover-imprint",t.content.cover.imprint));const u=a("div","lb-detail"),f=e.location||(e.surface==="shelf"?"On a shelf":"On the reading table"),h=a("h2","lb-title",t.content.title);h.tabIndex=-1;const d=a("button","lb-read","Read this book");d.type="button",u.append(a("p","lb-location",f),h,a("p","lb-summary",t.summary),a("p","lb-edition",t.content.edition+" · "+t.content.pages.length+" pages"),d,a("p","lb-inspect-note","Your place in the room stays the same. Escape returns you to the book.")),c.append(l,u),o("jb-shell").append(c);const p=o("jb-binding"),_=o("jb-navigation"),g=o("jb-keyboard-note"),m=a("button","lb-details","Book details");m.type="button",m.hidden=!0,o("jb-toolbar").append(m);const y=o("jb-close");y.textContent="Return to "+e.surface,y.setAttribute("aria-label","Close "+t.content.title+" and return to the "+e.surface);let M=!0;function x(v=!0){M=!0,c.hidden=!1,p.hidden=_.hidden=g.hidden=!0,m.hidden=!0,s.scrollTop=0,v&&d.focus({preventScroll:!0})}function R(){M=!1,c.hidden=!0,p.hidden=_.hidden=g.hidden=!1,m.hidden=!1,s.scrollTop=0,o("jb-contents").focus({preventScroll:!0})}const E=v=>{M&&["ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(v.key)&&v.stopImmediatePropagation()},A=()=>x();return d.addEventListener("click",R),m.addEventListener("click",A),s.addEventListener("keydown",E,!0),x(!1),{get isOpen(){return n.isOpen},get pendingBack(){return n.pendingBack},element:s,close:n.close,open(){return x(!1),n.open()?(d.focus({preventScroll:!0}),!0):!1},dispose(){d.removeEventListener("click",R),m.removeEventListener("click",A),s.removeEventListener("keydown",E,!0),n.dispose()}}}const rm=i=>{var t;return!!((t=i==null?void 0:i.closest)!=null&&t.call(i,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))};function sm({window:i,document:t,canvas:e,hint:n,reader:r,content:s,getTarget:o,canInteract:a}){const c=[];let l=null,u=!1;const f=(p,_,g,m=!1)=>{p.addEventListener(_,g,m),c.push(()=>p.removeEventListener(_,g,m))},h=()=>!u&&!r.isOpen&&!r.pendingBack&&a();function d(p){return!h()||!o(p)?!1:(l=null,n.hidden=!0,r.open())}return f(i,"keydown",p=>{p.code!=="KeyE"||p.repeat||p.altKey||p.ctrlKey||p.metaKey||rm(p.target)||d()&&(p.preventDefault(),p.stopImmediatePropagation())},!0),f(e,"mousedown",p=>{l=null,!(p.button!==0||!h()||!o(p))&&(l={x:p.clientX,y:p.clientY,locked:t.pointerLockElement===e,distance:0,dragged:!1},p.stopImmediatePropagation())},!0),f(i,"mousemove",p=>{if(!l)return;const _=l.locked?Math.hypot(p.movementX||0,p.movementY||0):Math.hypot(p.clientX-l.x,p.clientY-l.y);l.locked?l.distance+=_:l.distance=Math.max(l.distance,_),l.distance>5&&(l.dragged=!0)},!0),f(e,"click",p=>{const _=l;l=null,!(p.button!==0||!_||_.dragged)&&d(p)&&(p.preventDefault(),p.stopImmediatePropagation())},!0),f(i,"mouseup",p=>{p.target!==e&&(l=null)},!0),f(e,"mouseleave",()=>{t.pointerLockElement!==e&&(l=null)}),f(i,"blur",()=>{l=null}),f(t,"visibilitychange",()=>{t.visibilityState!=="visible"&&(l=null)}),f(n,"click",p=>{d()&&(p.preventDefault(),p.stopImmediatePropagation())},!0),{openNearby:d,updateHint(){const p=h()&&!!o();return n.classList.toggle("jb-prompt",p),p&&(n.textContent="E — Read "+s.title,n.hidden=!1),p},dispose(){u||(u=!0,l=null,c.forEach(p=>p()),n.classList.remove("jb-prompt"))}}}const om=Object.freeze({BufferGeometry:Qt,BufferAttribute:me,CanvasTexture:Ui,MeshStandardMaterial:Ee,Mesh:Jt,SRGBColorSpace:le});function am(i,t,e,n,{catalog:r=Bl,placements:s=zl,makeCanvas:o}={}){const a=Z2({THREE:om,catalog:r,placements:s,makeCanvas:o}),c=new Set(s.map(h=>h.id)),l=t.filter(h=>h.kind==="book"&&!c.has(h.id)),u=l.length?n(i,l,e):{objects:[],dispose(){}};i.add(...a.objects);let f=!1;return{...a,book:a.books.find(h=>h.placement.contentId==="drums"),objects:[...a.objects,...u.objects],dispose(){f||(f=!0,u.dispose(),a.dispose())}}}function cm(i){var $;const{camera:t,solids:e,legacyFactory:n,catalog:r=Bl,placements:s=zl,...o}=i,{document:a,window:c,canvas:l,hint:u,look:f,setPaused:h,releaseMovement:d,returnFocus:p,canInteract:_}=i,g=kl(s,r),m=new Set(s.map(J=>J.id)),y=new Map,M=new D,x=[];let R=null,E=!1;const A=()=>[...y.values()].some(J=>J.isOpen),S=()=>[...y.values()].some(J=>J.pendingBack);function v(){const J=A();a.body.classList.toggle("reading-open",J),h(J)}function b(J){if(!y.has(J.id)){const ct=im({document:a,window:c,releaseMovement:d,returnFocus:p,look:{pause:()=>f.pause(),resume:()=>{A()||f.resume()}},setPaused:v},r[J.contentId],J);y.set(J.id,ct)}return y.get(J.id)}function P(J){if(t.updateMatrixWorld(),J&&a.pointerLockElement!==l&&Number.isFinite(J.clientX)&&Number.isFinite(J.clientY)){const ct=l.getBoundingClientRect();if(!ct.width||!ct.height)return null;const nt=(J.clientX-ct.left)/ct.width,Tt=(J.clientY-ct.top)/ct.height;if(nt<0||nt>1||Tt<0||Tt>1)return null;M.set(nt*2-1,1-Tt*2,.5).unproject(t).sub(t.position).normalize()}else t.getWorldDirection(M);return R=Y2(t.position,M,g,e),R}const F=n({...o,canInteract:()=>!A()&&!S()&&_(),getTarget:()=>{const J=o.getTarget();return J&&m.has(J.id)?null:J}}),N=sm({window:c,document:a,canvas:l,hint:u,reader:{get isOpen(){return A()},get pendingBack(){return S()},open(){return R?b(R).open():!1}},content:{get title(){return R?r[R.contentId].content.title:""}},getTarget:P,canInteract:()=>!F.isOpen&&_()}),Y=i.controls||(($=a.getElementById)==null?void 0:$.call(a,"overlay")),k=Y==null?void 0:Y.querySelector(".card");let j=null;if(k){j=a.createElement("section"),j.className="lb-catalog",j.setAttribute("aria-label","Public books");const J=a.createElement("p");J.textContent="Public books",j.append(J);for(const ct of g){const nt=a.createElement("button");nt.type="button",nt.className="lb-catalog-book",nt.textContent=r[ct.contentId].content.title+" · "+ct.surface;const Tt=()=>{E||A()||S()||F.isOpen||(Y.close(),b(ct).open())};nt.addEventListener("click",Tt),x.push(()=>nt.removeEventListener("click",Tt)),j.append(nt)}k.append(j)}return{get isOpen(){return A()||F.isOpen},updateHint(){if(!E){if(A()){u.hidden=!0;return}N.updateHint()?u.textContent="E — Inspect "+r[R.contentId].content.title:F.updateHint()}},close(){const J=[...y.values()].find(ct=>ct.isOpen);J?J.close():F.close()},dispose(){if(!E){E=!0,N.dispose(),x.forEach(J=>J()),j==null||j.remove();for(const J of y.values())J.dispose();y.clear(),F.dispose()}}}}function lm({tick:i,request:t,cancel:e,now:n}){const r=new Set;let s=null,o=!1,a=null;function c(){!o&&!r.size&&s===null&&(s=t(l))}function l(u){if(s=null,o||r.size)return;const f=a===null?0:Math.max(0,(u-a)/1e3);a=u,i(u,f),c()}return{start(){a=n(),c()},setPaused(u,f){f?r.add(u):r.delete(u),r.size&&s!==null&&(e(s),s=null),a=null,c()},get paused(){return o||r.size>0},dispose(){o=!0,s!==null&&e(s),s=null}}}const Fr=Object.freeze({href:"https://pazneria.github.io/",plaque:"EXIT",plaqueSubtitle:"HOME",label:"Leave for Jordan's homepage",openPrompt:"E · Open the exit door",prompt:"E · Leave, or walk through",shortcut:"Alt+X",instructions:"Approach the oak door beside the stair foot to open it, then walk through to leave. E or a deliberate click opens the door, or leaves when open. The controls exit link and Alt+X return to Jordan's homepage."}),Ys=Object.freeze({id:"library-home-exit",position:Object.freeze([6.8963,0,7.75]),rotation:-Math.PI/2,width:1.3,height:2.42,bounds:Object.freeze({x0:6.7,x1:6.93,y0:.08,y1:2.58,z0:6.94,z1:8.56}),reach:2.2}),Vl=Object.freeze({x0:7,x1:7.5,z0:7.07,z1:8.43,height:2.46,threshold:7.62,landingEnd:8.55});function um({anchor:i,portal:t,setAngle:e=()=>{}}){const n=i.position[0]-35e-5,r=i.position[2]+i.width/2,s=Math.PI/2,o=.111,a=8;let c=0,l=0,u=!1;function f(p){return p.y>=-.15&&p.y<.35}function h(p,_){return f(p)&&p.x+_>n&&p.x-_<n+i.width&&p.z+_>r-i.width&&p.z-_<r+.12}function d(p,_,g,m,y){if(g>=i.height||g+m<=0)return!1;const M=i.rotation-c,x=Math.cos(M),R=Math.sin(M),E=p-n,A=_-r,S=E*x-A*R,v=E*R+A*x,b=Math.max(-i.width,Math.min(0,S)),P=Math.max(0,Math.min(o,v));return(S-b)**2+(v-P)**2<y**2}return{get angle(){return c},get passable(){return c>=1.48},use(){return u=!0,c>=1.48},update(p,_,g=.28){const m=Math.hypot(_.x-n,_.z-i.position[2]),y=f(_)&&m<2.15,M=h(_,g);(!f(_)||m>2.65)&&!M&&(u=!1);const x=y||M||u?s:0;if(!Number.isFinite(p)||p<=0)return;const R=c,E=d(_.x,_.z,_.y,1.75,g),A=c-x,S=l+a*A,v=Math.exp(-a*p);c=x+(A+S*p)*v,l=(l-a*S*p)*v,Math.abs(c-x)<5e-4&&Math.abs(l)<.004&&(c=x,l=0),c=Math.max(0,Math.min(s,c)),!E&&d(_.x,_.z,_.y,1.75,g)&&(c=R,l=0),e(-c)},blocks:d,crossed(p,_,g=.28){return c>.01&&!d(_.x,_.z,_.y,1.75,g)&&f(p)&&f(_)&&p.x<=t.threshold&&_.x>t.threshold&&Math.hypot(_.x-p.x,_.z-p.z)<=.45&&_.z>=t.z0+g&&_.z<=t.z1-g}}}function hm(i,t,e,n,r=()=>document.createElement("canvas")){const s=new Tn;s.name="Library exit",s.position.set(...e.position),s.rotation.y=e.rotation;const o=new ko(()=>.37),a=o.frame(0,0,0);a.m.multiply(new jt().makeScale(1,1,.7));const{width:c,height:l}=e,{oak:u,dark:f,brass:h}=t,d=new Tn;d.name="Hinged oak door leaf",d.position.set(c/2,0,35e-5);const p=new ko(()=>.37),_=p.frame(-c/2,0,-35e-5);_.m.multiply(new jt().makeScale(1,1,.7));let g=_;g.box(f,c,l-.04,.055,0,l/2,.028);for(const S of[-c/2+.065,c/2-.065])g.box(u,.13,l,.045,S,l/2,.082);for(const[S,v]of[[.11,.22],[.84,.13],[l-.09,.18]])g.box(u,c-.26,v,.045,0,S,.082);g.box(u,.07,1.33,.045,0,1.575,.082);for(const[S,v,b,P]of[[-.26,1.575,.42,1.28],[.26,1.575,.42,1.28],[0,.49,.96,.51]]){g.box(u,b,P,.018,S,v,.063);for(const F of[-1,1])g.box(f,.018,P+.04,.014,S+F*(b/2+.009),v,.081),g.box(f,b+.04,.018,.014,S,v+F*(P/2+.009),.081)}g=a;for(const S of[-1,1])g.box(f,.13,l+.02,.09,S*(c/2+.085),(l+.02)/2,.067),g.box(u,.1,l+.02,.035,S*(c/2+.085),(l+.02)/2,.129),g.box(u,.16,.24,.13,S*(c/2+.085),.12,.083);g.box(f,c+.3,.18,.09,0,l+.09,.067),g.box(u,c+.33,.1,.035,0,l+.11,.129),g.box(u,c+.37,.045,.15,0,l+.2025,.08),g=_,g.box(h,.045,.19,.014,-.47,1.03,.115),g.cyl(h,.018,.018,.025,-.47,1.06,.14,8,Math.PI/2),g.box(h,.13,.025,.025,-.425,1.06,.158),g=a;for(const S of[.32,1.2,2.1])g.cyl(h,.018,.018,.11,c/2,S,5e-4,8);const m=o.frame(0,0,0),y=Vl;for(const S of[y.z0+.018,y.z1-.018])m.box(u,.012,y.height-.024,.476,S-e.position[2],(y.height-.024)/2,e.position[0]-7.25);m.box(u,y.z1-y.z0-.024,.012,.476,0,y.height-.018,e.position[0]-7.25),m.sbox(t.stone,y.z1-y.z0,.16,y.landingEnd-y.x0,0,-.08,e.position[0]-(y.x0+y.landingEnd)/2),m.box(h,y.z1-y.z0-.048,.012,.05,0,.006,e.position[0]-7.04);const M=r();M.width=512,M.height=256;const x=M.getContext("2d");x.fillStyle="#30271b",x.fillRect(0,0,512,256),x.strokeStyle="#b99a60",x.lineWidth=4,x.strokeRect(12,12,488,232),x.fillStyle="#efdab0",x.textAlign="center",x.textBaseline="middle",x.font="60px Georgia, serif",x.fillText(n.plaque,256,102),x.font="25px Georgia, serif",x.fillText(n.plaqueSubtitle,256,172);const R=new Ui(M);R.colorSpace=le;const E=new Ee({map:R,roughness:.62,emissive:15586976,emissiveMap:R,emissiveIntensity:.18});g.box(h,.45,.23,.012,0,2.51,.172),g.plane(E,.426,.206,0,2.51,.18),p.finish(d),s.add(d),o.finish(s),s.traverse(S=>{S.isMesh&&(S.castShadow=!1,S.receiveShadow=!0)}),i.add(s);const A=um({anchor:e,portal:y,setAngle:S=>{d.rotation.y=S}});return{group:s,leaf:d,door:A,solids:o.solids.map(S=>({x0:e.position[0]-S.z1,x1:e.position[0]-S.z0,y0:S.y0,y1:S.y1,z0:e.position[2]+S.x0,z1:e.position[2]+S.x1})),materials:[E],textures:[R]}}function fm({document:i,window:t,canvas:e,controls:n,readerFooter:r,content:s,getTarget:o,canInteract:a,beforeLeave:c,useDoor:l=()=>!0,getPrompt:u=()=>s.prompt}){let f=!1,h=!1,d=null;const p=[],_=[],g=e.getAttribute("aria-describedby");function m(S,v,b,P){S.addEventListener(v,b,P),p.push(()=>S.removeEventListener(v,b,P))}function y(S){if(S==null||S.preventDefault(),S==null||S.stopPropagation(),h||f)return!1;h=!0;try{c()}finally{t.addEventListener("pageshow",v=>{v.persisted&&t.location.reload()},{once:!0}),t.location.assign(s.href)}return!0}function M(S){S==null||S.preventDefault(),S==null||S.stopPropagation(),!(h||f)&&l()&&y()}function x(S,v){const b=i.createElement("a");return b.href=s.href,b.textContent=s.label,b.className=`library-exit-link ${v}`,b.setAttribute("aria-keyshortcuts",s.shortcut),m(b,"click",y),S.append(b),_.push(b),b}const R=x(i.body,"library-exit-keyboard");n&&x(n,"library-exit-controls"),r&&x(r,"library-exit-reader");const E=i.createElement("span");E.id="library-exit-instructions",E.className="library-exit-instructions",E.textContent=s.instructions,i.body.append(E),_.push(E),e.setAttribute("aria-describedby",[g,E.id].filter(Boolean).join(" "));const A=i.createElement("button");return A.id="exit-hint",A.type="button",A.hidden=!0,A.textContent=s.prompt,A.setAttribute("aria-label",s.label),i.body.append(A),_.push(A),m(A,"click",S=>{a()&&o()&&M(S)}),m(t,"keydown",S=>{var v,b;if(!(S.repeat||S.defaultPrevented||S.isComposing)){if(S.code==="KeyX"&&S.altKey&&!S.ctrlKey&&!S.metaKey&&!((b=(v=S.target)==null?void 0:v.closest)!=null&&b.call(v,'input, textarea, select, [contenteditable], [role="textbox"]'))){y(S);return}S.code==="KeyE"&&!S.altKey&&!S.ctrlKey&&!S.metaKey&&!la(S.target)&&a()&&o()&&M(S)}}),m(e,"mousedown",S=>{d=S.button===0&&a()&&o()?{x:S.clientX,y:S.clientY,travel:0}:null}),m(t,"mousemove",S=>{d&&(d.travel+=i.pointerLockElement===e?Math.hypot(S.movementX||0,S.movementY||0):Math.hypot(S.clientX-d.x,S.clientY-d.y),d.x=S.clientX,d.y=S.clientY)}),m(e,"click",S=>{const v=d&&d.travel<=5;d=null,v&&S.button===0&&a()&&o()&&M(S)}),m(t,"blur",()=>{d=null,A.hidden=!0}),m(i,"pointerlockchange",()=>{d=null,A.hidden=!0}),{leave:y,keyboardLink:R,updateHint(){A.hidden=f||!a()||!o(),A.textContent=u(),A.setAttribute("aria-label",A.textContent)},dispose(){if(!f){f=!0,d=null;for(const S of p)S();for(const S of _)S.remove();g===null?e.removeAttribute("aria-describedby"):e.setAttribute("aria-describedby",g)}}}}function Wl({scene:i,renderer:t,environmentTarget:e,materials:n=[],extraMaterials:r=[]}){const s=new Set,o=new Set([...n,...r]),a=new Set,c=new Set,l=new Set,u=f=>{f!=null&&f.isTexture?a.add(f):Array.isArray(f)&&f.forEach(u)};i.traverse(f=>{var h,d;f.geometry&&s.add(f.geometry);for(const p of[].concat(f.material||[]))o.add(p);f.isInstancedMesh&&l.add(f);for(const p of[(h=f.shadow)==null?void 0:h.map,(d=f.shadow)==null?void 0:d.mapPass])p&&c.add(p)}),e&&c.add(e),u(i.environment),u(i.background);for(const f of o){for(const h of Object.values(f))u(h);for(const h of Object.values(f.uniforms||{}))u(h.value)}for(const f of c)for(const h of f.textures||[f.texture])a.delete(h);i.environment=null,i.overrideMaterial=null;for(const f of l)f.dispose();for(const f of s)f.dispose();for(const f of o)f.dispose();for(const f of a)f.dispose(),f.isCanvasTexture&&(f.image=null);for(const f of c)f.dispose();t.dispose(),i.clear()}const dm=20261008;function fa(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function gi(i,t){let e=-.7;const n=Math.max(0,-i-13);return e-=70*(1-Math.exp(-n/140)),e+=(Math.sin(i*.011+t*.017)*10+Math.sin(t*.029+1.3)*Math.cos(i*.013)*12)*Math.min(1,n/120),i<-420&&(e+=Math.min(140,(-i-420)*.22)*(.75+.18*Math.sin(t*.009+.5)+.07*Math.sin(t*.043))),i>8&&(e+=(i-8)*.35),Math.abs(t)>30&&i>-60&&(e+=(Math.abs(t)-30)*.12),e}function pm(i,t,e=0){return i+e>-13&&i-e<9&&t+e>-12&&t-e<11}function mm(i,t,e=0){const n=10+Math.max(0,-i-13)*.15;return i<-13&&i>-125&&Math.abs(t-3)<n+e}function gm(){const i=fa(dm),t=[],e=[[-22,-18,12,"oak"],[-34,-29,15,"oak"],[-51,-24,14,"oak"],[-25,26,13,"oak"],[-39,38,16,"oak"],[-56,32,14,"oak"],[-20,44,12,"birch"],[12,43,13,"birch"],[-27,63,16,"birch"],[-61,-43,15,"birch"]];for(const[c,l,u,f]of e)t.push({x:c,z:l,height:u,species:f,tier:"near",yaw:i()*Math.PI*2,width:.9+i()*.2});[[-91,-65,34,29,20],[-119,67,32,35,20],[-202,-92,68,49,32],[-211,96,74,49,32],[-376,-190,110,85,54],[-403,155,125,93,60],[-615,-95,99,100,44],[-643,235,100,85,36],[-244,3,44,22,22]].forEach(([c,l,u,f,h],d)=>{for(let p=0;p<h;p++){const _=i()*Math.PI*2,g=Math.sqrt(i()),m=c+Math.cos(_)*g*u,y=l+Math.sin(_)*g*f,M=8+i()*9;mm(m,y,M*.34)||t.push({x:m,z:y,height:M,species:"woodland",tier:d<4||d===8?"middle":"far",grove:d,yaw:i()*Math.PI*2,width:.8+i()*.4})}});const r=[],s=[],o=[];[[-16.8,-5.6,3,6.2,80],[-19.2,13.8,4.8,4.7,72],[-31,18.4,7,4.3,64],[-1.5,18.4,8,4.1,64]].forEach(([c,l,u,f,h],d)=>{for(let p=0;p<h;p++){const _=i()*Math.PI*2,g=Math.sqrt(i()),m=c+Math.cos(_)*g*u,y=l+Math.sin(_)*g*f;pm(m,y,.5)||r.push({x:m,z:y,height:.24+i()*.36,width:.6+i()*.6,yaw:i()*Math.PI*2,bed:d})}});for(const[c,l,u]of[[-15.1,-10.5,.8],[-17.3,-12,1.1],[-20.2,-13.8,1.3],[-16.5,13.2,.9],[-18.1,15.2,1.1],[-21.2,17,1.4],[-29.2,22.2,1.3],[-33,24.4,1.7],[-37,26.1,1.5],[-8.5,19.8,1.1],[-5.4,21.8,1.2],[5.7,21,1]])s.push({x:c,z:l,height:u*.6,width:u,yaw:i()*Math.PI*2});for(const[c,l,u]of[[-14.2,-8,.65],[-16.4,-9.1,1.1],[-18.6,-10.6,.8],[-16,13.4,.7],[-20,15.3,1.3],[-21.7,16,.85],[-29,23,1.8],[-32.2,24,1.1],[-34,25,1.5],[-47,-17,2],[-50,-18.1,1.1],[-43,27,1.8]])o.push({x:c,z:l,height:u*.38,width:u,yaw:i()*Math.PI*2});return{trees:t,grass:r,shrubs:s,stones:o}}function Zc(i,t=null){return new Ge({name:t?"exterior-ground":"exterior-vegetation-stone",vertexColors:!0,defines:t?{EXTERIOR_GROUND:1}:{},uniforms:{sunDirection:{value:i.clone().normalize()},hazeColor:{value:new zt(.84,.61,.48)},...t?{map:{value:t}}:{}},vertexShader:`
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
      }`})}function _m(){const t=new Uint8Array(65536),e=fa(407);for(let r=0;r<128;r++)for(let s=0;s<128;s++){const o=207+e()*38+7*Math.sin(s*.83+Math.sin(r*.24)),a=(r*128+s)*4;t[a]=o,t[a+1]=o+3,t[a+2]=o-4,t[a+3]=255}const n=new Zr(t,128,128);return n.name="hillside-ground-grain-128",n.wrapS=n.wrapT=Pn,n.magFilter=Ce,n.minFilter=He,n.generateMipmaps=!0,n.anisotropy=4,n.needsUpdate=!0,n}function Jc(i,t=[]){const e=[...t];for(const[n,r,s]of i)for(let o=0;o<=s;o++)e.push(n+(r-n)*o/s);return[...new Set(e)].sort((n,r)=>n-r)}function xm(){const i=Jc([[-1200,-420,20],[-420,-100,20],[-100,-35,12],[-35,20,32],[20,100,10],[100,600,12]],[-13,8]),t=Jc([[-900,-180,12],[-180,-45,10],[-45,45,36],[45,180,10],[180,900,12]],[-30,30]),e=[],n=[],r=[],s=[],o=[],a=new zt(.25,.31,.115),c=new zt(.37,.32,.16),l=new zt(.23,.295,.12),u=new zt,f=new D;for(const d of t)for(const p of i){e.push(p,gi(p,d),d),f.set(gi(p-.5,d)-gi(p+.5,d),1,gi(p,d-.5)-gi(p,d+.5)).normalize(),n.push(f.x,f.y,f.z);const _=.5+.25*Math.sin(p*.039+Math.sin(d*.034)*1.5)+.18*Math.sin(d*.071+p*.018);u.copy(a).lerp(c,_);const g=Math.exp(-(((p+12)/19)**2)-(d/30)**2);u.lerp(l,g*.6),r.push(u.r,u.g,u.b),s.push(p/4,d/4)}for(let d=0;d<t.length-1;d++)for(let p=0;p<i.length-1;p++){const _=d*i.length+p,g=_+1,m=_+i.length,y=m+1;o.push(_,m,g,g,m,y)}const h=new Qt;return h.setAttribute("position",new Ft(e,3)),h.setAttribute("normal",new Ft(n,3)),h.setAttribute("color",new Ft(r,3)),h.setAttribute("uv",new Ft(s,2)),h.setIndex(o),h.computeBoundingBox(),h.computeBoundingSphere(),h}function da(i,t,e=.1){if(i.index){const a=i;i=i.toNonIndexed(),a.dispose()}const n=i.attributes.position,r=new Float32Array(n.count*3),s=new zt(t),o=new zt;for(let a=0;a<n.count;a++){const c=1+e*Math.sin(n.getX(a)*27+n.getY(a)*19+n.getZ(a)*23);o.copy(s).multiplyScalar(c),r.set([o.r,o.g,o.b],a*3)}return i.setAttribute("color",new me(r,3)),i.deleteAttribute("uv"),i}function ns(i){const t=Qr(i,!1);for(const e of i)e.dispose();return t.computeBoundingBox(),t.computeBoundingSphere(),t}function nr(i,t,e,n,r,s=6){const o=new D(...i),a=new D(...t),c=a.clone().sub(o),l=new In(n,e,c.length(),s,1,!0);return l.applyQuaternion(new Be().setFromUnitVectors(new D(0,1,0),c.normalize())),l.translate(...o.add(a).multiplyScalar(.5).toArray()),da(l,r,.14)}function Mi(i,t,e,n,r,s,o,a=1){const c=new sa(1,a),l=c.attributes.position;for(let u=0;u<l.count;u++){const f=1+.1*Math.sin(l.getX(u)*9+l.getY(u)*7+l.getZ(u)*11);l.setXYZ(u,l.getX(u)*f,l.getY(u)*f,l.getZ(u)*f)}return c.scale(n,r,s),c.translate(i,t,e),da(c,o,.08)}function vm(){const i=[nr([0,0,0],[.018,.63,-.018],.035,.017,7430474,8)];return[[-.2,.65,.04,.19,.18,.2],[.18,.69,.02,.22,.2,.18],[-.03,.69,-.19,.2,.21,.18],[.03,.77,.19,.21,.2,.18],[-.11,.86,-.02,.19,.21,.21],[.1,.91,.03,.17,.19,.17],[.01,.78,-.05,.25,.21,.22]].forEach(([e,n,r,s,o,a],c)=>{i.push(nr([.01,.34+c*.025,0],[e,n-.035,r],.014,.005,7889994)),i.push(Mi(e,n,r,s,o,a,[7635531,8556627,6781763,9147481][c%4]))}),ns(i)}function ym(){const i=[nr([0,0,0],[-.022,.9,.01],.019,.006,12695706,7)];for(let t=0;t<5;t++){const e=t*2.4,n=.57+t*.08,r=Math.sin(e)*.08,s=Math.cos(e)*.07;i.push(nr([0,n-.2,0],[r,n,s],.007,.002,10392951,5)),i.push(Mi(r,n,s,.13,.19,.12,t%2?10329700:8098386))}return ns(i)}function Qc(i=!1){const t=i?6:8,e=i?[[0,.34],[.24,.49],[.29,.7],[.18,.93],[0,1.04]]:[[0,.32],[.24,.45],[.3,.64],[.26,.83],[.15,1],[0,1.06]],n=new sr(e.map(([s,o])=>new Ct(s,o)),t),r=n.attributes.position;for(let s=0;s<r.count;s++){const o=1+.12*Math.sin(r.getX(s)*17+r.getZ(s)*11+r.getY(s)*13);r.setXYZ(s,r.getX(s)*o,r.getY(s),r.getZ(s)*o)}return ns([da(n,7899984),nr([0,0,0],[0,.52,0],.027,.016,7890768,i?4:5)])}function Mm(){return ns([Mi(-.35,.38,.03,.55,.6,.51,6782280,0),Mi(.3,.47,-.04,.62,.7,.54,8491607,0),Mi(.02,.5,.22,.53,.66,.49,8886107,0)])}function bm(){return Mi(0,.2,0,.6,.75,.5,11182474,0)}function Sm(){const i=[],t=[],e=new zt(8227656),n=new zt(11510376);for(let s=0;s<4;s++){const o=s*2.4,a=Math.cos(o),c=Math.sin(o),l=.65+s%3*.17,u=.065,f=[[-c*u,0,a*u],[c*u,0,-a*u],[a*.16-c*u*.5,l*.6,c*.16+a*u*.5],[a*.3,l,c*.3]];for(const h of[0,1,2,1,3,2,2,1,0,2,3,1]){i.push(...f[h]);const d=e.clone().lerp(n,f[h][1]/l);t.push(d.r,d.g,d.b)}}const r=new Qt;return r.setAttribute("position",new Ft(i,3)),r.setAttribute("color",new Ft(t,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),r}function Em(i){const t=new Ge({name:"exterior-sunset",side:be,depthWrite:!1,uniforms:{sunDir:{value:i.clone()}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 zen = vec3(0.16,0.27,0.55); vec3 hor = vec3(1.25,0.74,0.45); vec3 below = vec3(0.55,0.42,0.36);
        vec3 col = mix(hor, zen, pow(clamp(h,0.0,1.0), 0.5));
        col = mix(col, below, 1.0 - smoothstep(-0.2,0.0,h));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.55,0.25)*pow(s,5.0)*0.7 + vec3(1.0,0.75,0.45)*pow(s,90.0)*2.5 + smoothstep(0.9993,0.9996,s)*vec3(18.0,12.0,7.0);
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new Jt(new jn(1200,32,16),t);return e.name="exterior-sky",e.frustumCulled=!1,e.renderOrder=-1,e.matrixAutoUpdate=!1,e}function qi(i,t,e,n,r){const s=new ea(e,n,t.length);s.name=i;const o=new jt,a=new Be,c=new D,l=new D,u=new D(0,1,0),f=new zt,h=fa(r);return t.forEach((d,p)=>{const{x:_,z:g,height:m,width:y,yaw:M}=d;c.set(_,gi(_,g)-.045,g),a.setFromAxisAngle(u,M);const x=d.species?m*y:y;l.set(x,m,x),o.compose(c,a,l),s.setMatrixAt(p,o);const R=h();f.setRGB(.88+R*.23,.92+R*.14,.88+R*.11),s.setColorAt(p,f)}),s.instanceMatrix.setUsage(Wr),s.instanceMatrix.needsUpdate=!0,s.instanceColor.setUsage(Wr),s.instanceColor.needsUpdate=!0,s.matrixAutoUpdate=!1,s.computeBoundingBox(),s.computeBoundingSphere(),s}function wm(i){const t=new Set,e=new Set,n=new Set,r=[];let s=0,o=0,a=0;i.traverse(u=>{var _,g;if(!u.isMesh)return;const f=u.geometry,h=u.material,d=u.isInstancedMesh?u.count:1,p=(f.index?f.index.count:f.attributes.position.count)/3;if(o+=p*d,a+=u.isInstancedMesh?d:0,!t.has(f)){for(const m of Object.values(f.attributes))s+=m.array.byteLength;s+=((_=f.index)==null?void 0:_.array.byteLength)||0,t.add(f)}u.instanceMatrix&&(s+=u.instanceMatrix.array.byteLength),u.instanceColor&&(s+=u.instanceColor.array.byteLength),e.add(h);for(const m of Object.values(h.uniforms||{}))(g=m.value)!=null&&g.isTexture&&n.add(m.value);r.push({name:u.name,instances:d,templateTriangles:p,submittedTriangles:p*d})});let c=0,l=0;for(const u of n){const{width:f,height:h,data:d}=u.image;c+=d.byteLength;let p=f,_=h;do{if(l+=p*_*4,!u.generateMipmaps||p===1&&_===1)break;p=Math.max(1,p>>1),_=Math.max(1,_>>1)}while(!0)}return{triangles:o,drawCallsUpperBound:r.length,instances:a,geometries:t.size,materials:e.size,textures:n.size,bufferBytes:s,textureBytes:c,textureBytesWithMipmaps:l,batches:r}}function Tm({sunDirection:i}){const t=new Tn;t.name="hillside-exterior",t.matrixAutoUpdate=!1;const e=gm(),n=Zc(i),r=_m(),s=new Jt(xm(),Zc(i,r));s.name="exterior-continuous-terrain",s.matrixAutoUpdate=!1,t.add(Em(i),s);const o=vm(),a=ym(),c=Qc(),l=Qc(!0);for(const h of["oak","birch"]){const d=e.trees.filter(p=>p.species===h);t.add(qi(`exterior-near-${h}`,d,h==="oak"?o:a,n,h==="oak"?16:23))}for(const[h,d]of[["middle",[0,2]],["middle",[1,3,8]],["far",[4,6]],["far",[5,7]]]){const p=e.trees.filter(_=>d.includes(_.grove));t.add(qi(`exterior-${h}-groves-${d.join("-")}`,p,h==="middle"?c:l,n,70+d[0]))}const u=Sm();for(let h=0;h<4;h++){const d=e.grass.filter(p=>p.bed===h);t.add(qi(`exterior-meadow-bed-${h}`,d,u,n,30+h))}t.add(qi("exterior-low-shrubs",e.shrubs,Mm(),n,17)),t.add(qi("exterior-sandstone-outcrops",e.stones,bm(),n,12)),t.traverse(h=>{h.castShadow=!1,h.receiveShadow=!1}),t.updateMatrixWorld(!0);const f=wm(t);return t.userData.exteriorBudget=f,{group:t,layout:e,budget:f,dispose(){t.removeFromParent();const h=new Set,d=new Set;t.traverse(p=>{p.geometry&&h.add(p.geometry),p.material&&d.add(p.material),p.isInstancedMesh&&p.dispose()}),h.forEach(p=>p.dispose()),d.forEach(p=>p.dispose()),r.dispose()}}}function Am({document:i,window:t,onCancel:e=()=>{}}){var v;const n=i.getElementById("loading"),r=i.getElementById("loading-status"),s=i.getElementById("loading-retry"),o=i.getElementById("loading-error");(v=t.__libraryBootErrorCleanup)==null||v.call(t);const a=t.pazneriaRoomHandoff;let c="loading",l=null,u=null,f=!1,h=!1,d=null,p=null;function _(){d==null||d.disconnect(),d=null,p=null}function g(){var P;if(!p||a!=null&&a.active)return;const b=p;_(),i.visibilityState==="visible"&&i.hasFocus()&&((P=i.getElementById("c"))==null||P.focus({preventScroll:!0})),b()}const m=()=>Object.assign(new Error("Library loading cancelled"),{name:"AbortError"});function y(){l&&(t.cancelAnimationFrame(l.frame),l.timer!==null&&t.clearTimeout(l.timer),l.reject(m()),l=null)}function M(){u!==null&&t.clearTimeout(u),u=null,c==="ready"&&(n.hidden=!0)}function x(){h||f||c!=="loading"||(h=!0,c="cancelled",y(),_(),a==null||a.fail(),e())}function R(){_(),c==="loading"?x():M()}function E(b){h&&b.persisted&&t.location.reload()}function A(){f||h||(c="error",y(),_(),a==null||a.fail(),M(),n.hidden=!1,n.classList.remove("is-ready"),n.dataset.state="error",n.setAttribute("aria-busy","false"),r.textContent="Library could not load.",o.hidden=s.hidden=!1)}const S=()=>t.location.reload();return s.addEventListener("click",S),t.addEventListener("pagehide",R),t.addEventListener("pageshow",E),n.addEventListener("transitionend",M),{get cancelled(){return h},get state(){return c},async stage(b,P){if(f||h||c!=="loading")throw m();if(!Number.isInteger(b)||b<0||b>3)throw new RangeError("Invalid loading stage");if(n.dataset.stage=String(b),r.textContent=P,await new Promise((F,O)=>{l={frame:null,timer:null,reject:O},l.frame=t.requestAnimationFrame(()=>{l.timer=t.setTimeout(()=>{l=null,F()},0)})}),f||h)throw m()},ready(b=()=>{}){var P,F;if(!(f||h||c!=="loading")){if(c="ready",n.dataset.stage="4",n.dataset.state="ready",n.setAttribute("aria-busy","false"),r.textContent="Ready",(P=t.__libraryBootErrorCleanup)==null||P.call(t),a!=null&&a.active){n.hidden=!0,p=b,d=new t.MutationObserver(g),d.observe(i.documentElement,{attributes:!0,attributeFilter:["data-room-handoff"]}),a.ready(),g();return}b(),n.classList.add("is-ready"),(F=t.matchMedia)!=null&&F.call(t,"(prefers-reduced-motion: reduce)").matches?M():u=t.setTimeout(M,240)}},fail:A,dispose(){var b;f||(f=!0,y(),_(),a==null||a.fail(),M(),(b=t.__libraryBootErrorCleanup)==null||b.call(t),s.removeEventListener("click",S),t.removeEventListener("pagehide",R),t.removeEventListener("pageshow",E),n.removeEventListener("transitionend",M))}}}const Re={scene:null,renderer:null,environmentTarget:null,materials:null,cleanup:null};let tl=!1;function Xl(){var i;tl||(tl=!0,Re.cleanup?Re.cleanup():Re.scene&&Re.renderer?Wl({scene:Re.scene,renderer:Re.renderer,environmentTarget:Re.environmentTarget,materials:Object.values(Re.materials||{})}):(i=Re.renderer)==null||i.dispose())}const Vn=Am({document,window,onCancel:Xl});window.__libraryLoading=Vn;async function Rm(){var ot;await Vn.stage(0,"Preparing library");const i=document.getElementById("c"),t=new $d({canvas:i,antialias:!0,powerPreference:"high-performance"});Re.renderer=t;const e=Math.min(window.devicePixelRatio||1,1);let n=e;t.setPixelRatio(n),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=el,t.toneMappingExposure=1.05,t.outputColorSpace=le,t.shadowMap.enabled=!0,t.shadowMap.type=Vo,t.shadowMap.autoUpdate=!1;const r=new Il;Re.scene=r,r.background=new zt(9075306);const s=new Ue(70,window.innerWidth/window.innerHeight,.05,2500);s.rotation.order="YXZ";const o=new Uo(t),a=new Sp,c=o.fromScene(a,.04);Re.environmentTarget=c,r.environment=c.texture,a.dispose(),o.dispose(),r.environmentIntensity=.22,await Vn.stage(1,"Building room");const l=Wn(20261006),u=e2();Re.materials=u;const f=new s2(Wn(77)),h=n2(u,f,l,Vl);h.B.finish(r);const d=f.build(Ap(31));r.add(d),am(r,Xc,Wc,c2);const p=hm(r,u,Ys,Fr),_=[...h.B.solids,...p.solids];f.mats.length=f.cols.length=f.vars.length=0,await Vn.stage(2,"Adding scenery");const g=new D(-.9,.4,.14).normalize(),m=new bp(16757611,8);m.target.position.set(-2,3,-1),m.position.copy(m.target.position).addScaledVector(g,60),m.castShadow=!0,m.shadow.mapSize.set(4096,4096);const y=m.shadow.camera;y.left=-17,y.right=17,y.top=15,y.bottom=-15,y.near=20,y.far=100,y.updateProjectionMatrix(),m.shadow.bias=-4e-4,m.shadow.normalBias=.025,r.add(m,m.target);const M=new vp(13227775,6964264,.42);r.add(M);const x=new Bo(16754792,11,24,1.2);x.position.set(3,3.6,-.8),r.add(x);const R=[];for(const H of h.lights){const rt=new Bo(H.c,H.i,H.d,2);rt.position.copy(H.p),rt.userData=H,r.add(rt),R.push(rt)}const E=Tm({sunDirection:g});r.add(E.group);const A=g.clone().negate();{const H=[],rt=[];for(const yt of h.windows.slice(0,4))for(let Rt=0;Rt<4;Rt++){const It=yt[Rt],xt=yt[(Rt+1)%4],Yt=It.clone().addScaledVector(A,12),Ht=xt.clone().addScaledVector(A,12);for(const[$t,G,gt]of[[It,0,0],[xt,0,1],[Ht,1,1],[It,0,0],[Ht,1,1],[Yt,1,0]])H.push($t.x,$t.y,$t.z),rt.push(G,gt)}const ht=new Qt;ht.setAttribute("position",new Ft(H,3)),ht.setAttribute("uv",new Ft(rt,2));const Nt=new Ge({transparent:!0,depthWrite:!1,blending:Vr,side:Ne,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float t; varying vec2 vUv; varying vec3 vW;
      void main(){ float along = vUv.x; float across = vUv.y;
        float a = pow(1.0-along, 1.6) * smoothstep(0.0,0.04,along) * smoothstep(0.0,0.25,across) * smoothstep(1.0,0.75,across);
        float n = 0.75 + 0.25*sin(vW.x*1.7 + vW.y*2.3 + t*0.3) * sin(vW.z*1.3 - t*0.2);
        float fadeFloor = smoothstep(0.0, 0.6, vW.y);
        gl_FragColor = vec4(vec3(1.0,0.72,0.42)*a*n*0.11*fadeFloor, 1.0); }`}),it=new Jt(ht,Nt);it.frustumCulled=!1,it.renderOrder=5,r.add(it),window.__shafts=Nt}let S;{const H=Wn(9),rt=[],st=[];for(const it of h.windows)for(let yt=0;yt<420;yt++){const Rt=H(),It=H(),xt=it[0].clone().lerp(it[1],Rt).lerp(it[3].clone().lerp(it[2],Rt),It).addScaledVector(A,.5+H()*11);xt.y<.1||xt.y>10||xt.x>6.9||xt.z<-9.9||xt.z>8.9||(rt.push(xt.x,xt.y,xt.z),st.push(H()*100))}const ht=new Qt;ht.setAttribute("position",new Ft(rt,3)),ht.setAttribute("phase",new Ft(st,1)),S=new Ge({transparent:!0,depthWrite:!1,blending:Vr,uniforms:{t:{value:0},map:{value:Cp()},scale:{value:window.innerHeight*.5}},vertexShader:`uniform float t; uniform float scale; attribute float phase; varying float vA;
      void main(){ vec3 p = position + vec3(sin(t*0.11+phase)*0.25, sin(t*0.07+phase*1.3)*0.3, cos(t*0.09+phase*0.7)*0.25);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        gl_PointSize = clamp(0.018*scale/-mv.z, 0.0, 6.0); vA = 0.55+0.45*sin(t*0.5+phase); }`,fragmentShader:"uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0,0.8,0.55)*a*vA*0.8, 1.0); }"});const Nt=new Jd(ht,S);Nt.frustumCulled=!1,r.add(Nt)}await Vn.stage(3,"Preparing view");const v={pos:new D,vy:0,yaw:0,pitch:0,eye:1.62,eyeCur:1.62,smoothY:0,vel:new D,radius:.28,step:.42,height:1.75},b=[{p:[3.4,0,4.3],yaw:.78,pitch:.1,name:"Entrance by the hearth"},{p:[-2,0,-3.7],yaw:1.2,pitch:-.05,name:"Lower shelves, between the stacks"},{p:[-8.2,0,4.9],yaw:1.5,pitch:-.05,name:"Window reading alcove"},{p:[5.6,0,8],yaw:0,pitch:.18,name:"Foot of the staircase"},{p:[1.2,Ho.GY,-7.6],yaw:Math.PI-.3,pitch:-.32,name:"Gallery overlook"}];function P(H){const rt=b[H];v.pos.set(rt.p[0],rt.p[1],rt.p[2]),v.yaw=rt.yaw,v.pitch=rt.pitch,v.vy=0,v.vel.set(0,0,0),v.smoothY=v.pos.y,lt(rt.name)}function F(H,rt,st){let ht=-1/0;const Nt=v.radius*.7;for(const it of _)H+Nt<it.x0||H-Nt>it.x1||rt+Nt<it.z0||rt-Nt>it.z1||it.y1<=st+v.step&&it.y1>ht&&(ht=it.y1);return ht}function O(H,rt,st,ht){const Nt=v.radius;if(p.door.blocks(H,rt,st,ht,Nt))return!0;for(const it of _)if(!(H+Nt<=it.x0||H-Nt>=it.x1||rt+Nt<=it.z0||rt-Nt>=it.z1)&&it.y0<st+ht&&it.y1>st+v.step)return!0;return!1}const N=new Set;let Y=!1,k=null,j=null,$=null,J=!1;addEventListener("keydown",H=>{if(!(J||k!=null&&k.isOpen||j!=null&&j.paused||la(H.target))&&(N.add(H.code),!H.repeat)){if(H.code==="KeyR"&&P(0),H.code.startsWith("Digit")){const rt=+H.code.slice(5)-1;rt>=0&&rt<b.length&&P(rt)}H.code==="KeyC"&&(Y=!Y),H.code==="KeyF"&&Tt.classList.toggle("show"),H.code==="KeyH"&&nt.classList.toggle("hide"),H.code==="KeyP"&&(n=n>.8?Math.max(.6,n-.25):e,t.setPixelRatio(n),ut(),lt(`Render scale ${Math.round(n*100)}%`)),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(H.code)&&H.preventDefault()}}),addEventListener("keyup",H=>N.delete(H.code)),addEventListener("blur",()=>N.clear());const ct=document.getElementById("overlay"),nt=document.getElementById("help"),Tt=document.getElementById("stats"),Bt=document.getElementById("toast");let Q=0;function lt(H){Bt.textContent=H,Bt.classList.add("show"),Q=2.2}function T(){N.clear(),v.vel.set(0,0,0)}const L=o2({canvas:i,overlay:ct,menuButton:document.getElementById("controls-toggle"),player:v,camera:s,toast:lt,releaseMovement:T,isInputBlocked:()=>!!(J||k!=null&&k.isOpen||j!=null&&j.paused),setMenuPaused:H=>j==null?void 0:j.setPaused("controls",H)}),U=new D;k=cm({legacyFactory:u2,camera:s,solids:_,document,window,canvas:i,content:Wc,look:L,releaseMovement:T,dialog:document.getElementById("reader"),hint:document.getElementById("interaction-hint"),returnFocus:i,canInteract:()=>!J&&!L.menuOpen&&!(j!=null&&j.paused)&&document.hasFocus(),getTarget:()=>Yc(s.position,s.getWorldDirection(U),Xc,_,a2),setPaused:H=>j==null?void 0:j.setPaused("reading",H)}),$=fm({document,window,canvas:i,content:Fr,controls:ct.querySelector(".card"),readerFooter:document.querySelector(".reader-footer"),canInteract:()=>!J&&!k.isOpen&&!L.menuOpen&&!(j!=null&&j.paused)&&document.hasFocus(),getTarget:()=>Yc(s.position,s.getWorldDirection(U),[Ys],_,Ys.reach),beforeLeave:et,useDoor:()=>p.door.use(),getPrompt:()=>p.door.passable?Fr.prompt:Fr.openPrompt});const z=new D;function V(H){const rt=(N.has("KeyW")||N.has("ArrowUp")?1:0)-(N.has("KeyS")||N.has("ArrowDown")?1:0),st=(N.has("KeyD")||N.has("ArrowRight")?1:0)-(N.has("KeyA")||N.has("ArrowLeft")?1:0),ht=(N.has("ShiftLeft")||N.has("ShiftRight")?4.6:2.5)*(Y?.55:1),Nt=Math.sin(v.yaw),it=Math.cos(v.yaw),yt=-Nt*rt+it*st,Rt=-it*rt-Nt*st,It=Math.hypot(yt,Rt)||1,xt=z.set(yt/It*ht*(rt||st?1:0),0,Rt/It*ht*(rt||st?1:0)),Yt=1-Math.exp(-H*12);v.vel.lerp(xt,Yt);const Ht=Y?1.15:v.height,$t=v.pos.x+v.vel.x*H,G=v.pos.z+v.vel.z*H;O($t,G,v.pos.y,Ht)?O($t,v.pos.z,v.pos.y,Ht)?O(v.pos.x,G,v.pos.y,Ht)?v.vel.multiplyScalar(.2):(v.pos.z=G,v.vel.x*=.5):(v.pos.x=$t,v.vel.z*=.5):(v.pos.x=$t,v.pos.z=G);const gt=F(v.pos.x,v.pos.z,v.pos.y);gt>=v.pos.y-v.step&&gt>-1/0&&v.vy<=0?(v.pos.y=gt,v.vy=0):(v.vy-=9.8*H,v.pos.y+=v.vy*H,gt>-1/0&&v.pos.y<gt&&(v.pos.y=gt,v.vy=0)),v.pos.y<-10&&P(0),v.smoothY+=(v.pos.y-v.smoothY)*(1-Math.exp(-H*14)),v.eyeCur+=((Y?1:v.eye)-v.eyeCur)*(1-Math.exp(-H*10)),s.position.set(v.pos.x,v.smoothY+v.eyeCur,v.pos.z),s.rotation.set(v.pitch,v.yaw,0)}function ut(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),S.uniforms.scale.value=window.innerHeight*n*.5}addEventListener("resize",ut),ut();const mt=new Ai({colorWrite:!1}),bt=[];r.traverse(H=>{H.material&&(H.material.transparent||H.material.isShaderMaterial||H.isPoints)&&bt.push(H)}),t.autoClear=!1;let B=!1;function kt(){if(t.clear(),B){for(const H of bt)H.visible=!1;r.overrideMaterial=mt,t.render(r,s),r.overrideMaterial=null;for(const H of bt)H.visible=!0}t.render(r,s)}const Pt=[];let pt=0,ft=0,At=0;P(0),V(0),Bt.classList.remove("show"),t.compile(r,s),r.traverse(H=>{const rt=H.material;if(rt){for(const st of["map","bumpMap"])rt[st]&&t.initTexture(rt[st]);rt.uniforms&&rt.uniforms.map&&t.initTexture(rt.uniforms.map.value)}}),t.shadowMap.needsUpdate=!0;const _t=new D;function I(H,rt){const st=Math.min(rt,.05);At+=st,_t.copy(v.pos),p.door.update(st,v.pos,v.radius),V(st),ft+=st,ft>=.125&&(ft=0,k.updateHint(),$.updateHint());for(const ht of R)ht.userData.fire&&(ht.intensity=ht.userData.i*(.82+.12*Math.sin(At*9.1)+.08*Math.sin(At*23.7+1.3)));if(window.__shafts.uniforms.t.value=At,S.uniforms.t.value=At,kt(),rt>0&&rt<.25&&document.visibilityState==="visible"&&Pt.push(rt*1e3),Pt.length>240&&Pt.shift(),pt+=rt,pt>.5){pt=0;const ht=[...Pt].sort((Rt,It)=>Rt-It),Nt=ht.reduce((Rt,It)=>Rt+It,0)/ht.length,it=ht[Math.floor(ht.length*.99)-1]||Nt,yt=t.info.render;Tt.textContent=`${(1e3/Nt).toFixed(0)} fps  avg ${Nt.toFixed(1)} ms  p99 ${it.toFixed(1)} ms
calls ${yt.calls}  tris ${(yt.triangles/1e3).toFixed(0)}k  scale ${Math.round(n*100)}%
pos ${v.pos.x.toFixed(1)} ${v.pos.y.toFixed(2)} ${v.pos.z.toFixed(1)}`}Q>0&&(Q-=st,Q<=0&&Bt.classList.remove("show")),p.door.crossed(_t,v.pos,v.radius)&&$.leave()}j=lm({tick:I,request:H=>window.requestAnimationFrame(H),cancel:H=>window.cancelAnimationFrame(H),now:()=>performance.now()});const w=[];function X(H,rt,st){H.addEventListener(rt,st),w.push(()=>H.removeEventListener(rt,st))}function et(){var H;if(!J){J=!0,T(),L.pause(),j==null||j.setPaused("exit",!0),$==null||$.dispose(),k.dispose(),L.dispose(),j==null||j.dispose();for(const rt of w)rt();Wl({scene:r,renderer:t,environmentTarget:c,materials:Object.values(u),extraMaterials:[mt,...p.materials]}),delete window.__shafts,delete window.__lib,((H=window.__libraryLoading)==null?void 0:H.state)==="ready"&&(window.__libraryLoading.dispose(),delete window.__libraryLoading)}}Re.cleanup=et,X(window,"blur",()=>{T(),j.setPaused("focus",!0)}),X(window,"focus",()=>j.setPaused("focus",!1)),X(document,"visibilitychange",()=>j.setPaused("visibility",document.visibilityState!=="visible")),X(window,"pagehide",H=>{L.pause(),j.setPaused("page",!0),H.persisted||et()}),X(window,"pageshow",()=>{var H;L.resume(),j.setPaused("page",!1),j.setPaused("handoff",!!((H=window.pazneriaRoomHandoff)!=null&&H.active)),j.setPaused("visibility",document.visibilityState!=="visible"),j.setPaused("focus",!document.hasFocus())}),kt(),j.setPaused("visibility",document.visibilityState!=="visible"),j.setPaused("focus",!document.hasFocus()),j.setPaused("handoff",!!((ot=window.pazneriaRoomHandoff)!=null&&ot.active)),j.start(),window.__lib={P:v,setView:P,solids:_,renderer:t,scene:r,camera:s,books:d,drawFrame:kt,setPrepass:H=>B=H,sim:(H,rt)=>{H.forEach(st=>N.add(st));for(let st=0;st<rt;st+=1/60)V(1/60);return H.forEach(st=>N.delete(st)),v.pos.toArray().map(st=>+st.toFixed(2))}},Vn.ready(()=>{T(),j.setPaused("handoff",!1)})}Rm().catch(i=>{i.name!=="AbortError"&&(console.error("Library initialization failed:",i),Vn.fail()),Xl()});
