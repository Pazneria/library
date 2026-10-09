(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zs="170",Ec=0,ta=1,wc=2,ks=1,Tc=2,nn=3,yn=0,xe=1,Ie=2,_n=0,Zn=1,ar=2,ea=3,na=4,Ac=5,Dn=100,Rc=101,Cc=102,Pc=103,Ic=104,Lc=200,Dc=201,Uc=202,Nc=203,Zr=204,Jr=205,Fc=206,Oc=207,Bc=208,zc=209,kc=210,Hc=211,Gc=212,Vc=213,Wc=214,Qr=0,ts=1,es=2,ti=3,ns=4,is=5,rs=6,ss=7,Hs=0,Xc=1,qc=2,xn=0,Yc=1,jc=2,$c=3,pa=4,Kc=5,Zc=6,Jc=7,ma=300,ei=301,ni=302,os=303,as=304,dr=306,Mn=1e3,Je=1001,ls=1002,De=1003,Qc=1004,Ki=1005,Ee=1006,$r=1007,Be=1008,sn=1009,ga=1010,_a=1011,Li=1012,Gs=1013,Un=1014,Qe=1015,Ui=1016,Vs=1017,Ws=1018,ii=1020,xa=35902,va=1021,ya=1022,Le=1023,Ma=1024,ba=1025,Jn=1026,ri=1027,Xs=1028,qs=1029,Sa=1030,Ys=1031,js=1033,tr=33776,er=33777,nr=33778,ir=33779,cs=35840,us=35841,hs=35842,fs=35843,ds=36196,ps=37492,ms=37496,gs=37808,_s=37809,xs=37810,vs=37811,ys=37812,Ms=37813,bs=37814,Ss=37815,Es=37816,ws=37817,Ts=37818,As=37819,Rs=37820,Cs=37821,rr=36492,Ps=36494,Is=36495,Ea=36283,Ls=36284,Ds=36285,Us=36286,t0=3200,e0=3201,$s=0,n0=1,Ke="",ce="srgb",ai="srgb-linear",pr="linear",ie="srgb",Yn=7680,ia=519,i0=512,r0=513,s0=514,wa=515,o0=516,a0=517,l0=518,c0=519,lr=35044,ra="300 es",rn=2e3,cr=2001;class li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uo=Math.PI/180,sa=180/Math.PI;function mr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function ru(i,t){return(i%t+t)%t}function ho(i,t,e){return(1-e)*i+e*t}function ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,r,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=r[0],g=r[3],m=r[6],y=r[1],M=r[4],x=r[7],A=r[2],E=r[5],R=r[8];return s[0]=o*_+a*y+l*A,s[3]=o*g+a*M+l*E,s[6]=o*m+a*x+l*R,s[1]=c*_+u*y+h*A,s[4]=c*g+u*M+h*E,s[7]=c*m+u*x+h*R,s[2]=f*_+d*y+p*A,s[5]=f*g+d*M+p*E,s[8]=f*m+d*x+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=e*h+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=h*_,t[1]=(r*c-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fo.makeScale(t,e)),this}rotate(t){return this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new Vt;function u0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function h0(){const i=ur("canvas");return i.style.display="block",i}const Ja={};function Zi(i){i in Ja||(Ja[i]=!0,console.warn(i))}function su(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function ou(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function au(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ke?pr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Qa=[.64,.33,.3,.6,.15,.06],tl=[.2126,.7152,.0722],el=[.3127,.329],nl=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[ai]:{primaries:Qa,whitePoint:el,transfer:pr,toXYZ:nl,fromXYZ:il,luminanceCoefficients:tl,workingColorSpaceConfig:{unpackColorSpace:ce},outputColorSpaceConfig:{drawingBufferColorSpace:ce}},[ce]:{primaries:Qa,whitePoint:el,transfer:ie,toXYZ:nl,fromXYZ:il,luminanceCoefficients:tl,outputColorSpaceConfig:{drawingBufferColorSpace:ce}}});let fi;class f0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=ur("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lu=0;class Ta{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=mr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(po(r[o].image)):s.push(po(r[o]))}else s=po(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?f0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cu=0;class me extends li{constructor(t=me.DEFAULT_IMAGE,e=me.DEFAULT_MAPPING,n=Je,r=Je,s=Ee,o=Be,a=Le,l=sn,c=me.DEFAULT_ANISOTROPY,u=Ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=mr(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ma)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mn:t.x=t.x-Math.floor(t.x);break;case Je:t.x=t.x<0?0:1;break;case ls:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mn:t.y=t.y-Math.floor(t.y);break;case Je:t.y=t.y<0?0:1;break;case ls:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}me.DEFAULT_IMAGE=null;me.DEFAULT_MAPPING=ma;me.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,r=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(d+1)/2,A=(m+1)/2,E=(u+f)/4,R=(h+_)/4,S=(p+g)/4;return M>x&&M>A?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=R/n):x>A?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=S/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=R/s,r=S/s),this.set(n,r,s,e),this}let y=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d0 extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new me(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ta(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends d0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Aa extends me{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class p0 extends me{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ke{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==p){let g=1-a;const m=l*f+c*d+u*p+h*_,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const A=Math.sqrt(M),E=Math.atan2(A,m*y);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}const x=a*y;if(l=l*g+f*x,c=c*g+d*x,u=u*g+p*x,h=h*g+_*x,g===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new D,rl=new ke;class Bn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(s,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),Mr.subVectors(this.max,Hi),di.subVectors(t.a,Hi),pi.subVectors(t.b,Hi),mi.subVectors(t.c,Hi),Tn.subVectors(pi,di),An.subVectors(mi,pi),Hn.subVectors(di,mi);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Hn.z,Hn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Hn.z,0,-Hn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Hn.y,Hn.x,0];return!go(e,di,pi,mi,Mr)||(e=[1,0,0,0,1,0,0,0,1],!go(e,di,pi,mi,Mr))?!1:(br.crossVectors(Tn,An),e=[br.x,br.y,br.z],go(e,di,pi,mi,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hn=[new D,new D,new D,new D,new D,new D,new D,new D],qe=new D,yr=new Bn,di=new D,pi=new D,mi=new D,Tn=new D,An=new D,Hn=new D,Hi=new D,Mr=new D,br=new D,Gn=new D;function go(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Gn.fromArray(i,s);const a=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uu=new Bn,Gi=new D,_o=new D;class ci{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gi.subVectors(t,this.center);const e=Gi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gi.copy(t.center).add(_o)),this.expandByPoint(Gi.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new D,xo=new D,Sr=new D,Rn=new D,vo=new D,Er=new D,yo=new D;class Ra{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){xo.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(xo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Sr),a=Rn.dot(this.direction),l=-Rn.dot(Sr),c=Rn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xo).addScaledVector(Sr,f),d}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),r=fn.dot(fn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,r,s){vo.subVectors(e,t),Er.subVectors(n,t),yo.crossVectors(vo,Er);let o=this.direction.dot(yo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,t);const l=a*this.direction.dot(Er.crossVectors(Rn,Er));if(l<0)return null;const c=a*this.direction.dot(vo.cross(Rn));if(c<0||l+c>o)return null;const u=-a*Rn.dot(yo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,p,_,g){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,_,g)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/gi.setFromMatrixColumn(t,0).length(),s=1/gi.setFromMatrixColumn(t,1).length(),o=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,p=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,p=c*u,_=c*h;e[0]=f+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,p=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,p=a*u,_=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hu,t,fu)}lookAt(t,e,n){const r=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Cn.crossVectors(n,Ne),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Cn.crossVectors(n,Ne)),Cn.normalize(),wr.crossVectors(Ne,Cn),r[0]=Cn.x,r[4]=wr.x,r[8]=Ne.x,r[1]=Cn.y,r[5]=wr.y,r[9]=Ne.y,r[2]=Cn.z,r[6]=wr.z,r[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],M=n[7],x=n[11],A=n[15],E=r[0],R=r[4],S=r[8],v=r[12],b=r[1],P=r[5],F=r[9],O=r[13],N=r[2],Y=r[6],k=r[10],$=r[14],j=r[3],at=r[7],ft=r[11],it=r[15];return s[0]=o*E+a*b+l*N+c*j,s[4]=o*R+a*P+l*Y+c*at,s[8]=o*S+a*F+l*k+c*ft,s[12]=o*v+a*O+l*$+c*it,s[1]=u*E+h*b+f*N+d*j,s[5]=u*R+h*P+f*Y+d*at,s[9]=u*S+h*F+f*k+d*ft,s[13]=u*v+h*O+f*$+d*it,s[2]=p*E+_*b+g*N+m*j,s[6]=p*R+_*P+g*Y+m*at,s[10]=p*S+_*F+g*k+m*ft,s[14]=p*v+_*O+g*$+m*it,s[3]=y*E+M*b+x*N+A*j,s[7]=y*R+M*P+x*Y+A*at,s[11]=y*S+M*F+x*k+A*ft,s[15]=y*v+M*O+x*$+A*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+g*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-e*l*h+e*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],y=h*g*c-_*f*c+_*l*d-a*g*d-h*l*m+a*f*m,M=p*f*c-u*g*c-p*l*d+o*g*d+u*l*m-o*f*m,x=u*_*c-p*h*c+p*a*d-o*_*d-u*a*m+o*h*m,A=p*h*l-u*_*l-p*a*f+o*_*f+u*a*g-o*h*g,E=e*y+n*M+r*x+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=y*R,t[1]=(_*f*s-h*g*s-_*r*d+n*g*d+h*r*m-n*f*m)*R,t[2]=(a*g*s-_*l*s+_*r*c-n*g*c-a*r*m+n*l*m)*R,t[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*R,t[4]=M*R,t[5]=(u*g*s-p*f*s+p*r*d-e*g*d-u*r*m+e*f*m)*R,t[6]=(p*l*s-o*g*s-p*r*c+e*g*c+o*r*m-e*l*m)*R,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*R,t[8]=x*R,t[9]=(p*h*s-u*_*s-p*n*d+e*_*d+u*n*m-e*h*m)*R,t[10]=(o*_*s-p*a*s+p*n*c-e*_*c-o*n*m+e*a*m)*R,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*R,t[12]=A*R,t[13]=(u*_*r-p*h*r+p*n*f-e*_*f-u*n*g+e*h*g)*R,t[14]=(p*a*r-o*_*r-p*n*l+e*_*l+o*n*g-e*a*g)*R,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,_=o*u,g=o*h,m=a*h,y=l*c,M=l*u,x=l*h,A=n.x,E=n.y,R=n.z;return r[0]=(1-(_+m))*A,r[1]=(d+x)*A,r[2]=(p-M)*A,r[3]=0,r[4]=(d-x)*E,r[5]=(1-(f+m))*E,r[6]=(g+y)*E,r[7]=0,r[8]=(p+M)*R,r[9]=(g-y)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=gi.set(r[0],r[1],r[2]).length();const o=gi.set(r[4],r[5],r[6]).length(),a=gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ye.copy(this);const c=1/s,u=1/o,h=1/a;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=u,Ye.elements[5]*=u,Ye.elements[6]*=u,Ye.elements[8]*=h,Ye.elements[9]*=h,Ye.elements[10]*=h,e.setFromRotationMatrix(Ye),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=rn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let d,p;if(a===rn)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===cr)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=rn){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(o-s),f=(e+t)*c,d=(n+r)*u;let p,_;if(a===rn)p=(o+s)*h,_=-2*h;else if(a===cr)p=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new D,Ye=new jt,hu=new D(0,0,0),fu=new D(1,1,1),Cn=new D,wr=new D,Ne=new D,sl=new jt,ol=new ke;class Te{constructor(t=0,e=0,n=0,r=Te.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Te.DEFAULT_ORDER="XYZ";class Ca{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let du=0;const al=new D,_i=new ke,dn=new jt,Tr=new D,Vi=new D,pu=new D,mu=new ke,ll=new D(1,0,0),cl=new D(0,1,0),ul=new D(0,0,1),hl={type:"added"},gu={type:"removed"},xi={type:"childadded",child:null},Mo={type:"childremoved",child:null};class he extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new D,e=new Te,n=new ke,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Vt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(ll,t)}rotateY(t){return this.rotateOnAxis(cl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ll,t)}translateY(t){return this.translateOnAxis(cl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Vi,Tr,this.up):dn.lookAt(Tr,Vi,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),_i.setFromRotationMatrix(dn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gu),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,t,pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}he.DEFAULT_UP=new D(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new D,pn=new D,bo=new D,mn=new D,vi=new D,yi=new D,fl=new D,So=new D,Eo=new D,wo=new D,To=new re,Ao=new re,Ro=new re;class Ve{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),je.subVectors(t,e),r.cross(je);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){je.subVectors(r,e),pn.subVectors(n,e),bo.subVectors(t,e);const o=je.dot(je),a=je.dot(pn),l=je.dot(bo),c=pn.dot(pn),u=pn.dot(bo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return To.setScalar(0),Ao.setScalar(0),Ro.setScalar(0),To.fromBufferAttribute(t,e),Ao.fromBufferAttribute(t,n),Ro.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(To,s.x),o.addScaledVector(Ao,s.y),o.addScaledVector(Ro,s.z),o}static isFrontFacing(t,e,n,r){return je.subVectors(n,e),pn.subVectors(t,e),je.cross(pn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;vi.subVectors(r,n),yi.subVectors(s,n),So.subVectors(t,n);const l=vi.dot(So),c=yi.dot(So);if(l<=0&&c<=0)return e.copy(n);Eo.subVectors(t,r);const u=vi.dot(Eo),h=yi.dot(Eo);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(vi,o);wo.subVectors(t,s);const d=vi.dot(wo),p=yi.dot(wo);if(p>=0&&d<=p)return e.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(yi,a);const g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return fl.subVectors(s,r),a=(h-u)/(h-u+(d-p)),e.copy(r).addScaledVector(fl,a);const m=1/(g+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(vi,o).addScaledVector(yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Co(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Kt.workingColorSpace){if(t=ru(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Co(o,s,t+1/3),this.g=Co(o,s,t),this.b=Co(o,s,t-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(t,e=ce){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ce){const n=m0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ce){return Kt.fromWorkingColorSpace(be.copy(this),t),Math.round(_e(be.r*255,0,255))*65536+Math.round(_e(be.g*255,0,255))*256+Math.round(_e(be.b*255,0,255))}getHexString(t=ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,r=be.g,s=be.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ce){Kt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,r=be.b;return t!==ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Ar);const n=ho(Pn.h,Ar.h,e),r=ho(Pn.s,Ar.s,e),s=ho(Pn.l,Ar.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new zt;zt.NAMES=m0;let _u=0;class zn extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=mr(),this.name="",this.blending=Zn,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Jr,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class si extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Te,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new D,Rr=new Rt;class ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lr,this.updateRanges=[],this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lr&&(t.usage=this.usage),t}}class Pa extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ia extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Nt extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xu=0;const Ge=new jt,Po=new he,Mi=new D,Fe=new Bn,Wi=new Bn,pe=new D;class Qt extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(u0(t)?Ia:Pa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nt(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Fe.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(Fe.min,Wi.min),Fe.expandByPoint(pe),pe.addVectors(Fe.max,Wi.max),Fe.expandByPoint(pe)):(Fe.expandByPoint(Wi.min),Fe.expandByPoint(Wi.max))}Fe.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)pe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(pe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pe.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(t,c),pe.add(Mi)),r=Math.max(r,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new D,l[S]=new D;const c=new D,u=new D,h=new D,f=new Rt,d=new Rt,p=new Rt,_=new D,g=new D;function m(S,v,b){c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,b),f.fromBufferAttribute(s,S),d.fromBufferAttribute(s,v),p.fromBufferAttribute(s,b),u.sub(c),h.sub(c),d.sub(f),p.sub(f);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(P),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(P),a[S].add(_),a[v].add(_),a[b].add(_),l[S].add(g),l[v].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let S=0,v=y.length;S<v;++S){const b=y[S],P=b.start,F=b.count;for(let O=P,N=P+F;O<N;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new D,x=new D,A=new D,E=new D;function R(S){A.fromBufferAttribute(r,S),E.copy(A);const v=a[S];M.copy(v),M.sub(A.multiplyScalar(A.dot(v))).normalize(),x.crossVectors(E,v);const P=x.dot(l[S])<0?-1:1;o.setXYZW(S,M.x,M.y,M.z,P)}for(let S=0,v=y.length;S<v;++S){const b=y[S],P=b.start,F=b.count;for(let O=P,N=P+F;O<N;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new ge(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new jt,Vn=new Ra,Cr=new ci,pl=new D,Pr=new D,Ir=new D,Lr=new D,Io=new D,Dr=new D,ml=new D,Ur=new D;class Jt extends he{constructor(t=new Qt,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Dr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Io.fromBufferAttribute(h,t),o?Dr.addScaledVector(Io,u):Dr.addScaledVector(Io.sub(e),u))}e.add(Dr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Vn.copy(t.ray).recast(t.near),!(Cr.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Cr,pl)===null||Vn.origin.distanceToSquared(pl)>(t.far-t.near)**2))&&(dl.copy(s).invert(),Vn.copy(t.ray).applyMatrix4(dl),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,A=M;x<A;x+=3){const E=a.getX(x),R=a.getX(x+1),S=a.getX(x+2);r=Nr(this,m,t,n,c,u,h,E,R,S),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const y=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);r=Nr(this,o,t,n,c,u,h,y,M,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,A=M;x<A;x+=3){const E=x,R=x+1,S=x+2;r=Nr(this,m,t,n,c,u,h,E,R,S),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const y=g,M=g+1,x=g+2;r=Nr(this,o,t,n,c,u,h,y,M,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function vu(i,t,e,n,r,s,o,a){let l;if(t.side===xe?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===yn,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ur);return c<e.near||c>e.far?null:{distance:c,point:Ur.clone(),object:i}}function Nr(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Lr);const u=vu(i,t,e,n,Pr,Ir,Lr,ml);if(u){const h=new D;Ve.getBarycoord(ml,Pr,Ir,Lr,h),r&&(u.uv=Ve.getInterpolatedAttribute(r,a,l,c,h,new Rt)),s&&(u.uv1=Ve.getInterpolatedAttribute(s,a,l,c,h,new Rt)),o&&(u.normal=Ve.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};Ve.getNormal(Pr,Ir,Lr,f.normal),u.face=f,u.barycoord=h}return u}class on extends Qt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function p(_,g,m,y,M,x,A,E,R,S,v){const b=x/R,P=A/S,F=x/2,O=A/2,N=E/2,Y=R+1,k=S+1;let $=0,j=0;const at=new D;for(let ft=0;ft<k;ft++){const it=ft*P-O;for(let Ct=0;Ct<Y;Ct++){const Bt=Ct*b-F;at[_]=Bt*y,at[g]=it*M,at[m]=N,c.push(at.x,at.y,at.z),at[_]=0,at[g]=0,at[m]=E>0?1:-1,u.push(at.x,at.y,at.z),h.push(Ct/R),h.push(1-ft/S),$+=1}}for(let ft=0;ft<S;ft++)for(let it=0;it<R;it++){const Ct=f+it+Y*ft,Bt=f+it+Y*(ft+1),J=f+(it+1)+Y*(ft+1),lt=f+(it+1)+Y*ft;l.push(Ct,Bt,lt),l.push(Bt,J,lt),j+=6}a.addGroup(d,j,v),d+=j,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Di(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Se(i){const t={};for(let e=0;e<i.length;e++){const n=Di(i[e]);for(const r in n)t[r]=n[r]}return t}function yu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function g0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const _0={clone:Di,merge:Se};var Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ze extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class La extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new D,gl=new Rt,_l=new Rt;class Pe extends La{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,gl,_l),e.subVectors(_l,gl)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bi=-90,Si=1;class x0 extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pe(bi,Si,t,e);r.layers=this.layers,this.add(r);const s=new Pe(bi,Si,t,e);s.layers=this.layers,this.add(s);const o=new Pe(bi,Si,t,e);o.layers=this.layers,this.add(o);const a=new Pe(bi,Si,t,e);a.layers=this.layers,this.add(a);const l=new Pe(bi,Si,t,e);l.layers=this.layers,this.add(l);const c=new Pe(bi,Si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Da extends me{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ei,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class v0 extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Da(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new on(5,5,5),s=new ze({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xe,blending:_n});s.uniforms.tEquirect.value=e;const o=new Jt(r,s),a=e.minFilter;return e.minFilter===Be&&(e.minFilter=Ee),new x0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Lo=new D,Su=new D,Eu=new Vt;class Ln{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Lo.subVectors(n,e).cross(Su.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Lo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Eu.getNormalMatrix(t),r=this.coplanarPoint(Lo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new ci,Fr=new D;class Ks{constructor(t=new Ln,e=new Ln,n=new Ln,r=new Ln,s=new Ln,o=new Ln){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],p=r[9],_=r[10],g=r[11],m=r[12],y=r[13],M=r[14],x=r[15];if(n[0].setComponents(l-s,f-c,g-d,x-m).normalize(),n[1].setComponents(l+s,f+c,g+d,x+m).normalize(),n[2].setComponents(l+o,f+u,g+p,x+y).normalize(),n[3].setComponents(l-o,f-u,g-p,x-y).normalize(),n[4].setComponents(l-a,f-h,g-_,x-M).normalize(),e===rn)n[5].setComponents(l+a,f+h,g+_,x+M).normalize();else if(e===cr)n[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Fr.x=r.normal.x>0?t.max.x:t.min.x,Fr.y=r.normal.y>0?t.max.y:t.min.y,Fr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y0(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function wu(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Fn extends Qt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const y=m*f-o;for(let M=0;M<c;M++){const x=M*h-s;p.push(x,-y,0),_.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const M=y+c*m,x=y+c*(m+1),A=y+1+c*(m+1),E=y+1+c*m;d.push(M,x,E),d.push(x,A,E)}this.setIndex(d),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
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
#endif`,Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu=`#ifdef USE_BATCHING
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
#endif`,Nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$u=`#define PI 3.141592653589793
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
} // validated`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n1="gl_FragColor = linearToOutputTexel( gl_FragColor );",i1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d1=`#ifdef USE_GRADIENTMAP
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
}`,p1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_1=`uniform bool receiveShadow;
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
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S1=`PhysicalMaterial material;
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
#endif`,E1=`struct PhysicalMaterial {
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
}`,w1=`
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
#endif`,T1=`#if defined( RE_IndirectDiffuse )
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
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N1=`#if defined( USE_POINTS_UV )
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
#endif`,F1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
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
#endif`,G1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j1=`#ifdef USE_NORMALMAP
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
#endif`,$1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,th=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ih=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ah=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ch=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uh=`float getShadowMask() {
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
}`,hh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fh=`#ifdef USE_SKINNING
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
#endif`,dh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ph=`#ifdef USE_SKINNING
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
#endif`,mh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_h=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vh=`#ifdef USE_TRANSMISSION
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
#endif`,yh=`#ifdef USE_TRANSMISSION
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
#endif`,Mh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Th=`uniform sampler2D t2D;
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
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ph=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`#include <common>
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
}`,Lh=`#if DEPTH_PACKING == 3200
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
}`,Dh=`#define DISTANCE
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
}`,Uh=`#define DISTANCE
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
}`,Nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`uniform float scale;
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
}`,Bh=`uniform vec3 diffuse;
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
}`,zh=`#include <common>
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
}`,kh=`uniform vec3 diffuse;
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
}`,Hh=`#define LAMBERT
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
}`,Gh=`#define LAMBERT
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
}`,Vh=`#define MATCAP
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
}`,Wh=`#define MATCAP
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
}`,Xh=`#define NORMAL
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
}`,qh=`#define NORMAL
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
}`,Yh=`#define PHONG
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
}`,jh=`#define PHONG
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
}`,$h=`#define STANDARD
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
}`,Kh=`#define STANDARD
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
}`,Zh=`#define TOON
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
}`,Jh=`#define TOON
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
}`,Qh=`uniform float size;
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
}`,tf=`uniform vec3 diffuse;
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
}`,ef=`#include <common>
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
}`,nf=`uniform vec3 color;
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
}`,rf=`uniform float rotation;
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
}`,sf=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Tu,alphahash_pars_fragment:Au,alphamap_fragment:Ru,alphamap_pars_fragment:Cu,alphatest_fragment:Pu,alphatest_pars_fragment:Iu,aomap_fragment:Lu,aomap_pars_fragment:Du,batching_pars_vertex:Uu,batching_vertex:Nu,begin_vertex:Fu,beginnormal_vertex:Ou,bsdfs:Bu,iridescence_fragment:zu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:qu,color_pars_vertex:Yu,color_vertex:ju,common:$u,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ju,displacementmap_vertex:Qu,emissivemap_fragment:t1,emissivemap_pars_fragment:e1,colorspace_fragment:n1,colorspace_pars_fragment:i1,envmap_fragment:r1,envmap_common_pars_fragment:s1,envmap_pars_fragment:o1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:x1,envmap_vertex:l1,fog_vertex:c1,fog_pars_vertex:u1,fog_fragment:h1,fog_pars_fragment:f1,gradientmap_pars_fragment:d1,lightmap_pars_fragment:p1,lights_lambert_fragment:m1,lights_lambert_pars_fragment:g1,lights_pars_begin:_1,lights_toon_fragment:v1,lights_toon_pars_fragment:y1,lights_phong_fragment:M1,lights_phong_pars_fragment:b1,lights_physical_fragment:S1,lights_physical_pars_fragment:E1,lights_fragment_begin:w1,lights_fragment_maps:T1,lights_fragment_end:A1,logdepthbuf_fragment:R1,logdepthbuf_pars_fragment:C1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:I1,map_fragment:L1,map_pars_fragment:D1,map_particle_fragment:U1,map_particle_pars_fragment:N1,metalnessmap_fragment:F1,metalnessmap_pars_fragment:O1,morphinstance_vertex:B1,morphcolor_vertex:z1,morphnormal_vertex:k1,morphtarget_pars_vertex:H1,morphtarget_vertex:G1,normal_fragment_begin:V1,normal_fragment_maps:W1,normal_pars_fragment:X1,normal_pars_vertex:q1,normal_vertex:Y1,normalmap_pars_fragment:j1,clearcoat_normal_fragment_begin:$1,clearcoat_normal_fragment_maps:K1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:J1,opaque_fragment:Q1,packing:th,premultiplied_alpha_fragment:eh,project_vertex:nh,dithering_fragment:ih,dithering_pars_fragment:rh,roughnessmap_fragment:sh,roughnessmap_pars_fragment:oh,shadowmap_pars_fragment:ah,shadowmap_pars_vertex:lh,shadowmap_vertex:ch,shadowmask_pars_fragment:uh,skinbase_vertex:hh,skinning_pars_vertex:fh,skinning_vertex:dh,skinnormal_vertex:ph,specularmap_fragment:mh,specularmap_pars_fragment:gh,tonemapping_fragment:_h,tonemapping_pars_fragment:xh,transmission_fragment:vh,transmission_pars_fragment:yh,uv_pars_fragment:Mh,uv_pars_vertex:bh,uv_vertex:Sh,worldpos_vertex:Eh,background_vert:wh,background_frag:Th,backgroundCube_vert:Ah,backgroundCube_frag:Rh,cube_vert:Ch,cube_frag:Ph,depth_vert:Ih,depth_frag:Lh,distanceRGBA_vert:Dh,distanceRGBA_frag:Uh,equirect_vert:Nh,equirect_frag:Fh,linedashed_vert:Oh,linedashed_frag:Bh,meshbasic_vert:zh,meshbasic_frag:kh,meshlambert_vert:Hh,meshlambert_frag:Gh,meshmatcap_vert:Vh,meshmatcap_frag:Wh,meshnormal_vert:Xh,meshnormal_frag:qh,meshphong_vert:Yh,meshphong_frag:jh,meshphysical_vert:$h,meshphysical_frag:Kh,meshtoon_vert:Zh,meshtoon_frag:Jh,points_vert:Qh,points_frag:tf,shadow_vert:ef,shadow_frag:nf,sprite_vert:rf,sprite_frag:sf},yt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},$e={basic:{uniforms:Se([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Se([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new zt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Se([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Se([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Se([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new zt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Se([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Se([yt.points,yt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Se([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Se([yt.common,yt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Se([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Se([yt.sprite,yt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Se([yt.common,yt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Se([yt.lights,yt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};$e.physical={uniforms:Se([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Or={r:0,b:0,g:0},Xn=new Te,of=new jt;function af(i,t,e,n,r,s,o){const a=new zt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function p(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1;const x=p(y);x===null?m(a,l):x&&x.isColor&&(m(x,1),M=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,M){const x=p(M);x&&(x.isCubeTexture||x.mapping===dr)?(u===void 0&&(u=new Jt(new on(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Di($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xn.copy(M.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(of.makeRotationFromEuler(Xn)),u.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ie,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Jt(new Fn(2,2),new ze({name:"BackgroundMaterial",uniforms:Di($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(Or,g0(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:g}}function lf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(b,P,F,O,N){let Y=!1;const k=h(O,F,P);s!==k&&(s=k,c(s.object)),Y=d(b,O,F,N),Y&&p(b,O,F,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(b,P,F,O),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,P,F){const O=F.wireframe===!0;let N=n[b.id];N===void 0&&(N={},n[b.id]=N);let Y=N[P.id];Y===void 0&&(Y={},N[P.id]=Y);let k=Y[O];return k===void 0&&(k=f(l()),Y[O]=k),k}function f(b){const P=[],F=[],O=[];for(let N=0;N<e;N++)P[N]=0,F[N]=0,O[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:b,attributes:{},index:null}}function d(b,P,F,O){const N=s.attributes,Y=P.attributes;let k=0;const $=F.getAttributes();for(const j in $)if($[j].location>=0){const ft=N[j];let it=Y[j];if(it===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),ft===void 0||ft.attribute!==it||it&&ft.data!==it.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function p(b,P,F,O){const N={},Y=P.attributes;let k=0;const $=F.getAttributes();for(const j in $)if($[j].location>=0){let ft=Y[j];ft===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor));const it={};it.attribute=ft,ft&&ft.data&&(it.data=ft.data),N[j]=it,k++}s.attributes=N,s.attributesNum=k,s.index=O}function _(){const b=s.newAttributes;for(let P=0,F=b.length;P<F;P++)b[P]=0}function g(b){m(b,0)}function m(b,P){const F=s.newAttributes,O=s.enabledAttributes,N=s.attributeDivisors;F[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),N[b]!==P&&(i.vertexAttribDivisor(b,P),N[b]=P)}function y(){const b=s.newAttributes,P=s.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==b[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function M(b,P,F,O,N,Y,k){k===!0?i.vertexAttribIPointer(b,P,F,N,Y):i.vertexAttribPointer(b,P,F,O,N,Y)}function x(b,P,F,O){_();const N=O.attributes,Y=F.getAttributes(),k=P.defaultAttributeValues;for(const $ in Y){const j=Y[$];if(j.location>=0){let at=N[$];if(at===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),at!==void 0){const ft=at.normalized,it=at.itemSize,Ct=t.get(at);if(Ct===void 0)continue;const Bt=Ct.buffer,J=Ct.type,lt=Ct.bytesPerElement,T=J===i.INT||J===i.UNSIGNED_INT||at.gpuType===Gs;if(at.isInterleavedBufferAttribute){const L=at.data,U=L.stride,z=at.offset;if(L.isInstancedInterleavedBuffer){for(let V=0;V<j.locationSize;V++)m(j.location+V,L.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let V=0;V<j.locationSize;V++)g(j.location+V);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let V=0;V<j.locationSize;V++)M(j.location+V,it/j.locationSize,J,ft,U*lt,(z+it/j.locationSize*V)*lt,T)}else{if(at.isInstancedBufferAttribute){for(let L=0;L<j.locationSize;L++)m(j.location+L,at.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let L=0;L<j.locationSize;L++)g(j.location+L);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let L=0;L<j.locationSize;L++)M(j.location+L,it/j.locationSize,J,ft,it*lt,it/j.locationSize*L*lt,T)}}else if(k!==void 0){const ft=k[$];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(j.location,ft);break;case 3:i.vertexAttrib3fv(j.location,ft);break;case 4:i.vertexAttrib4fv(j.location,ft);break;default:i.vertexAttrib1fv(j.location,ft)}}}}y()}function A(){S();for(const b in n){const P=n[b];for(const F in P){const O=P[F];for(const N in O)u(O[N].object),delete O[N];delete P[F]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const F in P){const O=P[F];for(const N in O)u(O[N].object),delete O[N];delete P[F]}delete n[b.id]}function R(b){for(const P in n){const F=n[P];if(F[b.id]===void 0)continue;const O=F[b.id];for(const N in O)u(O[N].object),delete O[N];delete F[b.id]}}function S(){v(),o=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function cf(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_]*f[_];e.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function uf(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Le&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const S=R===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qe&&!S)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:A,maxSamples:E}}function hf(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Ln,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const y=s?0:n,M=y*4;let x=m.clippingState||null;l.value=x,x=u(p,f,M,d);for(let A=0;A!==M;++A)x[A]=e[A];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function ff(i){let t=new WeakMap;function e(o,a){return a===os?o.mapping=ei:a===as&&(o.mapping=ni),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===os||a===as)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new v0(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ua extends La{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ci=4,xl=[.125,.215,.35,.446,.526,.582],$n=20,Do=new Ua,vl=new zt;let Uo=null,No=0,Fo=0,Oo=!1;const jn=(1+Math.sqrt(5))/2,Ei=1/jn,yl=[new D(-jn,Ei,0),new D(jn,Ei,0),new D(-Ei,0,jn),new D(Ei,0,jn),new D(0,jn,-Ei),new D(0,jn,Ei),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ns{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uo,No,Fo),this._renderer.xr.enabled=Oo,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ei||t.mapping===ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:Ui,format:Le,colorSpace:ai,depthBuffer:!1},r=Ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=df(s)),this._blurMaterial=pf(s,t,e)}return r}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,n,r){const a=new Pe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(vl),u.toneMapping=xn,u.autoClear=!1;const d=new si({name:"PMREM.Background",side:xe,depthWrite:!1,depthTest:!1}),p=new Jt(new on,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(vl),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;Br(r,y*M,m>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ei||t.mapping===ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Do)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yl[(r-s-1)%yl.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*$n-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):$n;g>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$n}`);const m=[];let y=0;for(let R=0;R<$n;++R){const S=R/_,v=Math.exp(-S*S/2);m.push(v),R===0?y+=v:R<g&&(y+=2*v)}for(let R=0;R<m.length;R++)m[R]=m[R]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=p,f.mipInt.value=M-n;const x=this._sizeLods[r],A=3*x*(r>M-Ci?r-M+Ci:0),E=4*(this._cubeSize-x);Br(e,A,E,3*x,2*x),l.setRenderTarget(e),l.render(h,Do)}}function df(i){const t=[],e=[],n=[];let r=i;const s=i-Ci+1+xl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ci?l=xl[o-i+Ci-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*d),M=new Float32Array(g*p*d),x=new Float32Array(m*p*d);for(let E=0;E<d;E++){const R=E%3*2/3-1,S=E>2?0:-1,v=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];y.set(v,_*p*E),M.set(f,g*p*E);const b=[E,E,E,E,E,E];x.set(b,m*p*E)}const A=new Qt;A.setAttribute("position",new ge(y,_)),A.setAttribute("uv",new ge(M,g)),A.setAttribute("faceIndex",new ge(x,m)),t.push(A),r>Ci&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ml(i,t,e){const n=new Nn(i,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function pf(i,t,e){const n=new Float32Array($n),r=new D(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Na(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function bl(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Sl(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Na(){return`

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
	`}function mf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===os||l===as,u=l===ei||l===ni;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ns(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Ns(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function _f(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const _=d[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,p=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let M=0,x=y.length;M<x;M+=3){const A=y[M+0],E=y[M+1],R=y[M+2];f.push(A,E,E,R,R,A)}}else if(p!==void 0){const y=p.array;_=p.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const A=M+0,E=M+1,R=M+2;f.push(A,E,E,R,R,A)}}else return;const g=new(u0(f)?Ia:Pa)(f,1);g.version=_;const m=s.get(h);m&&t.remove(m),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function xf(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,f*o,p),e.update(d,n,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function h(f,d,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y]*_[y];e.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function yf(i,t,e){const n=new WeakMap,r=new re;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const E=new Float32Array(x*A*4*h),R=new Aa(E,x,A,h);R.type=Qe,R.needsUpdate=!0;const S=M*4;for(let b=0;b<h;b++){const P=g[b],F=m[b],O=y[b],N=x*A*4*b;for(let Y=0;Y<P.count;Y++){const k=Y*S;d===!0&&(r.fromBufferAttribute(P,Y),E[N+k+0]=r.x,E[N+k+1]=r.y,E[N+k+2]=r.z,E[N+k+3]=0),p===!0&&(r.fromBufferAttribute(F,Y),E[N+k+4]=r.x,E[N+k+5]=r.y,E[N+k+6]=r.z,E[N+k+7]=0),_===!0&&(r.fromBufferAttribute(O,Y),E[N+k+8]=r.x,E[N+k+9]=r.y,E[N+k+10]=r.z,E[N+k+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new Rt(x,A)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Mf(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Fa extends me{constructor(t,e,n,r,s,o,a,l,c,u=Jn){if(u!==Jn&&u!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Jn&&(n=Un),n===void 0&&u===ri&&(n=ii),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const M0=new me,El=new Fa(1,1),b0=new Aa,S0=new p0,E0=new Da,wl=[],Tl=[],Al=new Float32Array(16),Rl=new Float32Array(9),Cl=new Float32Array(4);function Ni(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=wl[r];if(s===void 0&&(s=new Float32Array(r),wl[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zs(i,t){let e=Tl[t];e===void 0&&(e=new Int32Array(t),Tl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function Ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function Tf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;Cl.set(n),i.uniformMatrix2fv(this.addr,!1,Cl),de(e,n)}}function Af(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;Rl.set(n),i.uniformMatrix3fv(this.addr,!1,Rl),de(e,n)}}function Rf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;Al.set(n),i.uniformMatrix4fv(this.addr,!1,Al),de(e,n)}}function Cf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function Lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function Df(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function Ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function Of(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(El.compareFunction=wa,s=El):s=M0,e.setTexture2D(t||s,r)}function Bf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||S0,r)}function zf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||E0,r)}function kf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||b0,r)}function Hf(i){switch(i){case 5126:return bf;case 35664:return Sf;case 35665:return Ef;case 35666:return wf;case 35674:return Tf;case 35675:return Af;case 35676:return Rf;case 5124:case 35670:return Cf;case 35667:case 35671:return Pf;case 35668:case 35672:return If;case 35669:case 35673:return Lf;case 5125:return Df;case 36294:return Uf;case 36295:return Nf;case 36296:return Ff;case 35678:case 36198:case 36298:case 36306:case 35682:return Of;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return kf}}function Gf(i,t){i.uniform1fv(this.addr,t)}function Vf(i,t){const e=Ni(t,this.size,2);i.uniform2fv(this.addr,e)}function Wf(i,t){const e=Ni(t,this.size,3);i.uniform3fv(this.addr,e)}function Xf(i,t){const e=Ni(t,this.size,4);i.uniform4fv(this.addr,e)}function qf(i,t){const e=Ni(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yf(i,t){const e=Ni(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jf(i,t){const e=Ni(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $f(i,t){i.uniform1iv(this.addr,t)}function Kf(i,t){i.uniform2iv(this.addr,t)}function Zf(i,t){i.uniform3iv(this.addr,t)}function Jf(i,t){i.uniform4iv(this.addr,t)}function Qf(i,t){i.uniform1uiv(this.addr,t)}function td(i,t){i.uniform2uiv(this.addr,t)}function ed(i,t){i.uniform3uiv(this.addr,t)}function nd(i,t){i.uniform4uiv(this.addr,t)}function id(i,t,e){const n=this.cache,r=t.length,s=Zs(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||M0,s[o])}function rd(i,t,e){const n=this.cache,r=t.length,s=Zs(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||S0,s[o])}function sd(i,t,e){const n=this.cache,r=t.length,s=Zs(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||E0,s[o])}function od(i,t,e){const n=this.cache,r=t.length,s=Zs(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||b0,s[o])}function ad(i){switch(i){case 5126:return Gf;case 35664:return Vf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return jf;case 5124:case 35670:return $f;case 35667:case 35671:return Kf;case 35668:case 35672:return Zf;case 35669:case 35673:return Jf;case 5125:return Qf;case 36294:return td;case 36295:return ed;case 36296:return nd;case 35678:case 36198:case 36298:case 36306:case 35682:return id;case 35679:case 36299:case 36307:return rd;case 35680:case 36300:case 36308:case 36293:return sd;case 36289:case 36303:case 36311:case 36292:return od}}class ld{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hf(e.type)}}class cd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ad(e.type)}}class ud{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Pl(i,t){i.seq.push(t),i.map[t.id]=t}function hd(i,t,e){const n=i.name,r=n.length;for(Bo.lastIndex=0;;){const s=Bo.exec(n),o=Bo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pl(e,c===void 0?new ld(a,i,t):new cd(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new ud(a),Pl(e,h)),e=h}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);hd(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Il(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fd=37297;let dd=0;function pd(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ll=new Vt;function md(i){Kt._getMatrix(Ll,Kt.workingColorSpace,i);const t=`mat3( ${Ll.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case pr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+pd(i.getShaderSource(t),o)}else return r}function gd(i,t){const e=md(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _d(i,t){let e;switch(t){case Yc:e="Linear";break;case jc:e="Reinhard";break;case $c:e="Cineon";break;case pa:e="ACESFilmic";break;case Zc:e="AgX";break;case Jc:e="Neutral";break;case Kc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new D;function xd(){Kt.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function yd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Md(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ji(i){return i!==""}function Ul(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bd=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(i){return i.replace(bd,Ed)}const Sd=new Map;function Ed(i,t){let e=qt[t];if(e===void 0){const n=Sd.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oa(e)}const wd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(i){return i.replace(wd,Td)}function Td(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ol(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ad(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ks?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rd(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ei:case ni:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cd(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ni:t="ENVMAP_MODE_REFRACTION";break}return t}function Pd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hs:t="ENVMAP_BLENDING_MULTIPLY";break;case Xc:t="ENVMAP_BLENDING_MIX";break;case qc:t="ENVMAP_BLENDING_ADD";break}return t}function Id(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ld(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ad(e),c=Rd(e),u=Cd(e),h=Pd(e),f=Id(e),d=vd(e),p=yd(s),_=r.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ji).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ji).join(`
`),m.length>0&&(m+=`
`)):(g=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),m=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?qt.tonemapping_pars_fragment:"",e.toneMapping!==xn?_d("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,gd("linearToOutputTexel",e.outputColorSpace),xd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),o=oa(o),o=Ul(o,e),o=Nl(o,e),a=oa(a),a=Ul(a,e),a=Nl(a,e),o=Fl(o),a=Fl(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+g+o,x=y+m+a,A=Il(r,r.VERTEX_SHADER,M),E=Il(r,r.FRAGMENT_SHADER,x);r.attachShader(_,A),r.attachShader(_,E),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(A).trim(),N=r.getShaderInfoLog(E).trim();let Y=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,E);else{const $=Dl(r,A,"vertex"),j=Dl(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+$+`
`+j)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||N==="")&&(k=!1);k&&(P.diagnostics={runnable:Y,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:N,prefix:m}})}r.deleteShader(A),r.deleteShader(E),S=new Kr(r,_),v=Md(r,_)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,fd)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dd++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let Dd=0;class Ud{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Nd(t),e.set(t,n)),n}}class Nd{constructor(t){this.id=Dd++,this.code=t,this.usedTimes=0}}function Fd(i,t,e,n,r,s,o){const a=new Ca,l=new Ud,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,b,P,F,O){const N=F.fog,Y=O.geometry,k=v.isMeshStandardMaterial?F.environment:null,$=(v.isMeshStandardMaterial?e:t).get(v.envMap||k),j=$&&$.mapping===dr?$.image.height:null,at=p[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,it=ft!==void 0?ft.length:0;let Ct=0;Y.morphAttributes.position!==void 0&&(Ct=1),Y.morphAttributes.normal!==void 0&&(Ct=2),Y.morphAttributes.color!==void 0&&(Ct=3);let Bt,J,lt,T;if(at){const ne=$e[at];Bt=ne.vertexShader,J=ne.fragmentShader}else Bt=v.vertexShader,J=v.fragmentShader,l.update(v),lt=l.getVertexShaderID(v),T=l.getFragmentShaderID(v);const L=i.getRenderTarget(),U=i.state.buffers.depth.getReversed(),z=O.isInstancedMesh===!0,V=O.isBatchedMesh===!0,ct=!!v.map,mt=!!v.matcap,bt=!!$,B=!!v.aoMap,kt=!!v.lightMap,Pt=!!v.bumpMap,pt=!!v.normalMap,ht=!!v.displacementMap,Tt=!!v.emissiveMap,_t=!!v.metalnessMap,I=!!v.roughnessMap,w=v.anisotropy>0,X=v.clearcoat>0,tt=v.dispersion>0,st=v.iridescence>0,H=v.sheen>0,nt=v.transmission>0,rt=w&&!!v.anisotropyMap,ut=X&&!!v.clearcoatMap,Ft=X&&!!v.clearcoatNormalMap,et=X&&!!v.clearcoatRoughnessMap,Mt=st&&!!v.iridescenceMap,At=st&&!!v.iridescenceThicknessMap,It=H&&!!v.sheenColorMap,xt=H&&!!v.sheenRoughnessMap,Yt=!!v.specularMap,Ht=!!v.specularColorMap,$t=!!v.specularIntensityMap,G=nt&&!!v.transmissionMap,gt=nt&&!!v.thicknessMap,Q=!!v.gradientMap,ot=!!v.alphaMap,wt=v.alphaTest>0,St=!!v.alphaHash,Wt=!!v.extensions;let le=xn;v.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(le=i.toneMapping);const ye={shaderID:at,shaderType:v.type,shaderName:v.name,vertexShader:Bt,fragmentShader:J,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:T,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:V,batchingColor:V&&O._colorsTexture!==null,instancing:z,instancingColor:z&&O.instanceColor!==null,instancingMorph:z&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ai,alphaToCoverage:!!v.alphaToCoverage,map:ct,matcap:mt,envMap:bt,envMapMode:bt&&$.mapping,envMapCubeUVHeight:j,aoMap:B,lightMap:kt,bumpMap:Pt,normalMap:pt,displacementMap:f&&ht,emissiveMap:Tt,normalMapObjectSpace:pt&&v.normalMapType===n0,normalMapTangentSpace:pt&&v.normalMapType===$s,metalnessMap:_t,roughnessMap:I,anisotropy:w,anisotropyMap:rt,clearcoat:X,clearcoatMap:ut,clearcoatNormalMap:Ft,clearcoatRoughnessMap:et,dispersion:tt,iridescence:st,iridescenceMap:Mt,iridescenceThicknessMap:At,sheen:H,sheenColorMap:It,sheenRoughnessMap:xt,specularMap:Yt,specularColorMap:Ht,specularIntensityMap:$t,transmission:nt,transmissionMap:G,thicknessMap:gt,gradientMap:Q,opaque:v.transparent===!1&&v.blending===Zn&&v.alphaToCoverage===!1,alphaMap:ot,alphaTest:wt,alphaHash:St,combine:v.combine,mapUv:ct&&_(v.map.channel),aoMapUv:B&&_(v.aoMap.channel),lightMapUv:kt&&_(v.lightMap.channel),bumpMapUv:Pt&&_(v.bumpMap.channel),normalMapUv:pt&&_(v.normalMap.channel),displacementMapUv:ht&&_(v.displacementMap.channel),emissiveMapUv:Tt&&_(v.emissiveMap.channel),metalnessMapUv:_t&&_(v.metalnessMap.channel),roughnessMapUv:I&&_(v.roughnessMap.channel),anisotropyMapUv:rt&&_(v.anisotropyMap.channel),clearcoatMapUv:ut&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:At&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(v.sheenRoughnessMap.channel),specularMapUv:Yt&&_(v.specularMap.channel),specularColorMapUv:Ht&&_(v.specularColorMap.channel),specularIntensityMapUv:$t&&_(v.specularIntensityMap.channel),transmissionMapUv:G&&_(v.transmissionMap.channel),thicknessMapUv:gt&&_(v.thicknessMap.channel),alphaMapUv:ot&&_(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(pt||w),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(ct||ot),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:U,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Ct,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:ct&&v.map.isVideoTexture===!0&&Kt.getTransfer(v.map.colorSpace)===ie,decodeVideoTextureEmissive:Tt&&v.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(v.emissiveMap.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ie,flipSided:v.side===xe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Wt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&v.extensions.multiDraw===!0||V)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function m(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(y(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const b=p[v.type];let P;if(b){const F=$e[b];P=_0.clone(F.uniforms)}else P=v.uniforms;return P}function A(v,b){let P;for(let F=0,O=u.length;F<O;F++){const N=u[F];if(N.cacheKey===b){P=N,++P.usedTimes;break}}return P===void 0&&(P=new Ld(i,b,v,s),u.push(P)),P}function E(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),v.destroy()}}function R(v){l.remove(v)}function S(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:S}}function Od(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Bd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,p,_,g){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},i[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=_,m.group=g),t++,m}function a(h,f,d,p,_,g){const m=o(h,f,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):e.push(m)}function l(h,f,d,p,_,g){const m=o(h,f,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||Bd),n.length>1&&n.sort(f||Bl),r.length>1&&r.sort(f||Bl)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function zd(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new zl,i.set(n,[o])):r>=s.length?(o=new zl,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Hd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gd=0;function Vd(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wd(i){const t=new kd,e=Hd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const r=new D,s=new jt,o=new jt;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,y=0,M=0,x=0,A=0,E=0,R=0;c.sort(Vd);for(let v=0,b=c.length;v<b;v++){const P=c[v],F=P.color,O=P.intensity,N=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*O,h+=F.g*O,f+=F.b*O;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],O);R++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,j=e.get(P);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=k,d++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(F).multiplyScalar(O),k.distance=N,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;const $=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,$.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=$.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=Y,x++}_++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(F).multiplyScalar(O),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=k,g++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const $=P.shadow,j=e.get(P);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=Y,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=k,p++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(O),k.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[m]=k,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==d||S.pointLength!==p||S.spotLength!==_||S.rectAreaLength!==g||S.hemiLength!==m||S.numDirectionalShadows!==y||S.numPointShadows!==M||S.numSpotShadows!==x||S.numSpotMaps!==A||S.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,S.directionalLength=d,S.pointLength=p,S.spotLength=_,S.rectAreaLength=g,S.hemiLength=m,S.numDirectionalShadows=y,S.numPointShadows=M,S.numSpotShadows=x,S.numSpotMaps=A,S.numLightProbes=R,n.version=Gd++)}function l(c,u){let h=0,f=0,d=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const M=c[m];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),h++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function kl(i){const t=new Wd(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Xd(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new kl(i),t.set(r,[a])):s>=o.length?(a=new kl(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class w0 extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=t0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class T0 extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yd=`uniform sampler2D shadow_pass;
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
}`;function jd(i,t,e){let n=new Ks;const r=new Rt,s=new Rt,o=new re,a=new w0({depthPacking:e0}),l=new T0,c={},u=e.maxTextureSize,h={[yn]:xe,[xe]:yn,[Ie]:Ie},f=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:qd,fragmentShader:Yd}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Qt;p.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let m=this.type;this.render=function(E,R,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const v=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(_n),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==nn&&this.type===nn,N=m===nn&&this.type!==nn;for(let Y=0,k=E.length;Y<k;Y++){const $=E[Y],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const at=j.getFrameExtents();if(r.multiply(at),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/at.x),r.x=s.x*at.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/at.y),r.y=s.y*at.y,j.mapSize.y=s.y)),j.map===null||O===!0||N===!0){const it=this.type!==nn?{minFilter:De,magFilter:De}:{};j.map!==null&&j.map.dispose(),j.map=new Nn(r.x,r.y,it),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const ft=j.getViewportCount();for(let it=0;it<ft;it++){const Ct=j.getViewport(it);o.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),F.viewport(o),j.updateMatrices($,it),n=j.getFrustum(),x(R,S,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===nn&&y(j,S),j.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(v,b,P)};function y(E,R){const S=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Nn(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,S,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,S,d,_,null)}function M(E,R,S,v){let b=null;const P=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=S.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=b.uuid,O=R.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let Y=N[O];Y===void 0&&(Y=b.clone(),N[O]=Y,R.addEventListener("dispose",A)),b=Y}if(b.visible=R.visible,b.wireframe=R.wireframe,v===nn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=i.properties.get(b);F.light=S}return b}function x(E,R,S,v,b){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===nn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const O=t.update(E),N=E.material;if(Array.isArray(N)){const Y=O.groups;for(let k=0,$=Y.length;k<$;k++){const j=Y[k],at=N[j.materialIndex];if(at&&at.visible){const ft=M(E,at,v,b);E.onBeforeShadow(i,E,R,S,O,ft,j),i.renderBufferDirect(S,null,O,ft,E,j),E.onAfterShadow(i,E,R,S,O,ft,j)}}}else if(N.visible){const Y=M(E,N,v,b);E.onBeforeShadow(i,E,R,S,O,Y,null),i.renderBufferDirect(S,null,O,Y,E,null),E.onAfterShadow(i,E,R,S,O,Y,null)}}const F=E.children;for(let O=0,N=F.length;O<N;O++)x(F[O],R,S,v,b)}function A(E){E.target.removeEventListener("dispose",A);for(const S in c){const v=c[S],b=E.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const $d={[Qr]:ts,[es]:rs,[ns]:ss,[ti]:is,[ts]:Qr,[rs]:es,[ss]:ns,[is]:ti};function Kd(i,t){function e(){let G=!1;const gt=new re;let Q=null;const ot=new re(0,0,0,0);return{setMask:function(wt){Q!==wt&&!G&&(i.colorMask(wt,wt,wt,wt),Q=wt)},setLocked:function(wt){G=wt},setClear:function(wt,St,Wt,le,ye){ye===!0&&(wt*=le,St*=le,Wt*=le),gt.set(wt,St,Wt,le),ot.equals(gt)===!1&&(i.clearColor(wt,St,Wt,le),ot.copy(gt))},reset:function(){G=!1,Q=null,ot.set(-1,0,0,0)}}}function n(){let G=!1,gt=!1,Q=null,ot=null,wt=null;return{setReversed:function(St){if(gt!==St){const Wt=t.get("EXT_clip_control");gt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const le=wt;wt=null,this.setClear(le)}gt=St},getReversed:function(){return gt},setTest:function(St){St?L(i.DEPTH_TEST):U(i.DEPTH_TEST)},setMask:function(St){Q!==St&&!G&&(i.depthMask(St),Q=St)},setFunc:function(St){if(gt&&(St=$d[St]),ot!==St){switch(St){case Qr:i.depthFunc(i.NEVER);break;case ts:i.depthFunc(i.ALWAYS);break;case es:i.depthFunc(i.LESS);break;case ti:i.depthFunc(i.LEQUAL);break;case ns:i.depthFunc(i.EQUAL);break;case is:i.depthFunc(i.GEQUAL);break;case rs:i.depthFunc(i.GREATER);break;case ss:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=St}},setLocked:function(St){G=St},setClear:function(St){wt!==St&&(gt&&(St=1-St),i.clearDepth(St),wt=St)},reset:function(){G=!1,Q=null,ot=null,wt=null,gt=!1}}}function r(){let G=!1,gt=null,Q=null,ot=null,wt=null,St=null,Wt=null,le=null,ye=null;return{setTest:function(ne){G||(ne?L(i.STENCIL_TEST):U(i.STENCIL_TEST))},setMask:function(ne){gt!==ne&&!G&&(i.stencilMask(ne),gt=ne)},setFunc:function(ne,We,cn){(Q!==ne||ot!==We||wt!==cn)&&(i.stencilFunc(ne,We,cn),Q=ne,ot=We,wt=cn)},setOp:function(ne,We,cn){(St!==ne||Wt!==We||le!==cn)&&(i.stencilOp(ne,We,cn),St=ne,Wt=We,le=cn)},setLocked:function(ne){G=ne},setClear:function(ne){ye!==ne&&(i.clearStencil(ne),ye=ne)},reset:function(){G=!1,gt=null,Q=null,ot=null,wt=null,St=null,Wt=null,le=null,ye=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,y=null,M=null,x=null,A=null,E=null,R=new zt(0,0,0),S=0,v=!1,b=null,P=null,F=null,O=null,N=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=$>=2);let at=null,ft={};const it=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Bt=new re().fromArray(it),J=new re().fromArray(Ct);function lt(G,gt,Q,ot){const wt=new Uint8Array(4),St=i.createTexture();i.bindTexture(G,St),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<Q;Wt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(gt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return St}const T={};T[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),T[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),T[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(i.DEPTH_TEST),o.setFunc(ti),Pt(!1),pt(ta),L(i.CULL_FACE),B(_n);function L(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function U(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function z(G,gt){return h[G]!==gt?(i.bindFramebuffer(G,gt),h[G]=gt,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function V(G,gt){let Q=d,ot=!1;if(G){Q=f.get(gt),Q===void 0&&(Q=[],f.set(gt,Q));const wt=G.textures;if(Q.length!==wt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Wt=wt.length;St<Wt;St++)Q[St]=i.COLOR_ATTACHMENT0+St;Q.length=wt.length,ot=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ot=!0);ot&&i.drawBuffers(Q)}function ct(G){return p!==G?(i.useProgram(G),p=G,!0):!1}const mt={[Dn]:i.FUNC_ADD,[Rc]:i.FUNC_SUBTRACT,[Cc]:i.FUNC_REVERSE_SUBTRACT};mt[Pc]=i.MIN,mt[Ic]=i.MAX;const bt={[Lc]:i.ZERO,[Dc]:i.ONE,[Uc]:i.SRC_COLOR,[Zr]:i.SRC_ALPHA,[kc]:i.SRC_ALPHA_SATURATE,[Bc]:i.DST_COLOR,[Fc]:i.DST_ALPHA,[Nc]:i.ONE_MINUS_SRC_COLOR,[Jr]:i.ONE_MINUS_SRC_ALPHA,[zc]:i.ONE_MINUS_DST_COLOR,[Oc]:i.ONE_MINUS_DST_ALPHA,[Hc]:i.CONSTANT_COLOR,[Gc]:i.ONE_MINUS_CONSTANT_COLOR,[Vc]:i.CONSTANT_ALPHA,[Wc]:i.ONE_MINUS_CONSTANT_ALPHA};function B(G,gt,Q,ot,wt,St,Wt,le,ye,ne){if(G===_n){_===!0&&(U(i.BLEND),_=!1);return}if(_===!1&&(L(i.BLEND),_=!0),G!==Ac){if(G!==g||ne!==v){if((m!==Dn||x!==Dn)&&(i.blendEquation(i.FUNC_ADD),m=Dn,x=Dn),ne)switch(G){case Zn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ar:i.blendFunc(i.ONE,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case na:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ar:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case na:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,M=null,A=null,E=null,R.set(0,0,0),S=0,g=G,v=ne}return}wt=wt||gt,St=St||Q,Wt=Wt||ot,(gt!==m||wt!==x)&&(i.blendEquationSeparate(mt[gt],mt[wt]),m=gt,x=wt),(Q!==y||ot!==M||St!==A||Wt!==E)&&(i.blendFuncSeparate(bt[Q],bt[ot],bt[St],bt[Wt]),y=Q,M=ot,A=St,E=Wt),(le.equals(R)===!1||ye!==S)&&(i.blendColor(le.r,le.g,le.b,ye),R.copy(le),S=ye),g=G,v=!1}function kt(G,gt){G.side===Ie?U(i.CULL_FACE):L(i.CULL_FACE);let Q=G.side===xe;gt&&(Q=!Q),Pt(Q),G.blending===Zn&&G.transparent===!1?B(_n):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const ot=G.stencilWrite;a.setTest(ot),ot&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Tt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):U(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function pt(G){G!==Ec?(L(i.CULL_FACE),G!==P&&(G===ta?i.cullFace(i.BACK):G===wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):U(i.CULL_FACE),P=G}function ht(G){G!==F&&(k&&i.lineWidth(G),F=G)}function Tt(G,gt,Q){G?(L(i.POLYGON_OFFSET_FILL),(O!==gt||N!==Q)&&(i.polygonOffset(gt,Q),O=gt,N=Q)):U(i.POLYGON_OFFSET_FILL)}function _t(G){G?L(i.SCISSOR_TEST):U(i.SCISSOR_TEST)}function I(G){G===void 0&&(G=i.TEXTURE0+Y-1),at!==G&&(i.activeTexture(G),at=G)}function w(G,gt,Q){Q===void 0&&(at===null?Q=i.TEXTURE0+Y-1:Q=at);let ot=ft[Q];ot===void 0&&(ot={type:void 0,texture:void 0},ft[Q]=ot),(ot.type!==G||ot.texture!==gt)&&(at!==Q&&(i.activeTexture(Q),at=Q),i.bindTexture(G,gt||T[G]),ot.type=G,ot.texture=gt)}function X(){const G=ft[at];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function It(G){Bt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Bt.copy(G))}function xt(G){J.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function Yt(G,gt){let Q=c.get(gt);Q===void 0&&(Q=new WeakMap,c.set(gt,Q));let ot=Q.get(G);ot===void 0&&(ot=i.getUniformBlockIndex(gt,G.name),Q.set(G,ot))}function Ht(G,gt){const ot=c.get(gt).get(G);l.get(gt)!==ot&&(i.uniformBlockBinding(gt,ot,G.__bindingPointIndex),l.set(gt,ot))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},at=null,ft={},h={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,y=null,M=null,x=null,A=null,E=null,R=new zt(0,0,0),S=0,v=!1,b=null,P=null,F=null,O=null,N=null,Bt.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:L,disable:U,bindFramebuffer:z,drawBuffers:V,useProgram:ct,setBlending:B,setMaterial:kt,setFlipSided:Pt,setCullFace:pt,setLineWidth:ht,setPolygonOffset:Tt,setScissorTest:_t,activeTexture:I,bindTexture:w,unbindTexture:X,compressedTexImage2D:tt,compressedTexImage3D:st,texImage2D:Mt,texImage3D:At,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:Ft,texStorage3D:et,texSubImage2D:H,texSubImage3D:nt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ut,scissor:It,viewport:xt,reset:$t}}function Hl(i,t,e,n){const r=Zd(n);switch(e){case va:return i*t;case Ma:return i*t;case ba:return i*t*2;case Xs:return i*t/r.components*r.byteLength;case qs:return i*t/r.components*r.byteLength;case Sa:return i*t*2/r.components*r.byteLength;case Ys:return i*t*2/r.components*r.byteLength;case ya:return i*t*3/r.components*r.byteLength;case Le:return i*t*4/r.components*r.byteLength;case js:return i*t*4/r.components*r.byteLength;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case us:case fs:return Math.max(i,16)*Math.max(t,8)/4;case cs:case hs:return Math.max(i,8)*Math.max(t,8)/2;case ds:case ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _s:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ys:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ms:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ss:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Es:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ws:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ts:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case As:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rs:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cs:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rr:case Ps:case Is:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ea:case Ls:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ds:case Us:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zd(i){switch(i){case sn:case ga:return{byteLength:1,components:1};case Li:case _a:case Ui:return{byteLength:2,components:1};case Vs:case Ws:return{byteLength:2,components:4};case Un:case Gs:case Qe:return{byteLength:4,components:1};case xa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jd(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,w){return d?new OffscreenCanvas(I,w):ur("canvas")}function _(I,w,X){let tt=1;const st=_t(I);if((st.width>X||st.height>X)&&(tt=X/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const H=Math.floor(tt*st.width),nt=Math.floor(tt*st.height);h===void 0&&(h=p(H,nt));const rt=w?p(H,nt):h;return rt.width=H,rt.height=nt,rt.getContext("2d").drawImage(I,0,0,H,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+H+"x"+nt+")."),rt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,w,X,tt,st=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let H=w;if(w===i.RED&&(X===i.FLOAT&&(H=i.R32F),X===i.HALF_FLOAT&&(H=i.R16F),X===i.UNSIGNED_BYTE&&(H=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(H=i.R8UI),X===i.UNSIGNED_SHORT&&(H=i.R16UI),X===i.UNSIGNED_INT&&(H=i.R32UI),X===i.BYTE&&(H=i.R8I),X===i.SHORT&&(H=i.R16I),X===i.INT&&(H=i.R32I)),w===i.RG&&(X===i.FLOAT&&(H=i.RG32F),X===i.HALF_FLOAT&&(H=i.RG16F),X===i.UNSIGNED_BYTE&&(H=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(H=i.RG8UI),X===i.UNSIGNED_SHORT&&(H=i.RG16UI),X===i.UNSIGNED_INT&&(H=i.RG32UI),X===i.BYTE&&(H=i.RG8I),X===i.SHORT&&(H=i.RG16I),X===i.INT&&(H=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(H=i.RGB8UI),X===i.UNSIGNED_SHORT&&(H=i.RGB16UI),X===i.UNSIGNED_INT&&(H=i.RGB32UI),X===i.BYTE&&(H=i.RGB8I),X===i.SHORT&&(H=i.RGB16I),X===i.INT&&(H=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),X===i.UNSIGNED_INT&&(H=i.RGBA32UI),X===i.BYTE&&(H=i.RGBA8I),X===i.SHORT&&(H=i.RGBA16I),X===i.INT&&(H=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),w===i.RGBA){const nt=st?pr:Kt.getTransfer(tt);X===i.FLOAT&&(H=i.RGBA32F),X===i.HALF_FLOAT&&(H=i.RGBA16F),X===i.UNSIGNED_BYTE&&(H=nt===ie?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function x(I,w){let X;return I?w===null||w===Un||w===ii?X=i.DEPTH24_STENCIL8:w===Qe?X=i.DEPTH32F_STENCIL8:w===Li&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Un||w===ii?X=i.DEPTH_COMPONENT24:w===Qe?X=i.DEPTH_COMPONENT32F:w===Li&&(X=i.DEPTH_COMPONENT16),X}function A(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==De&&I.minFilter!==Ee?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function E(I){const w=I.target;w.removeEventListener("dispose",E),S(w),w.isVideoTexture&&u.delete(w)}function R(I){const w=I.target;w.removeEventListener("dispose",R),b(w)}function S(I){const w=n.get(I);if(w.__webglInit===void 0)return;const X=I.source,tt=f.get(X);if(tt){const st=tt[w.__cacheKey];st.usedTimes--,st.usedTimes===0&&v(I),Object.keys(tt).length===0&&f.delete(X)}n.remove(I)}function v(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const X=I.source,tt=f.get(X);delete tt[w.__cacheKey],o.memory.textures--}function b(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(w.__webglFramebuffer[tt]))for(let st=0;st<w.__webglFramebuffer[tt].length;st++)i.deleteFramebuffer(w.__webglFramebuffer[tt][st]);else i.deleteFramebuffer(w.__webglFramebuffer[tt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[tt])}else{if(Array.isArray(w.__webglFramebuffer))for(let tt=0;tt<w.__webglFramebuffer.length;tt++)i.deleteFramebuffer(w.__webglFramebuffer[tt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let tt=0;tt<w.__webglColorRenderbuffer.length;tt++)w.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[tt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=I.textures;for(let tt=0,st=X.length;tt<st;tt++){const H=n.get(X[tt]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(X[tt])}n.remove(I)}let P=0;function F(){P=0}function O(){const I=P;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),P+=1,I}function N(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Y(I,w){const X=n.get(I);if(I.isVideoTexture&&ht(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){const tt=I.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,I,w);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function k(I,w){const X=n.get(I);if(I.version>0&&X.__version!==I.version){J(X,I,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function $(I,w){const X=n.get(I);if(I.version>0&&X.__version!==I.version){J(X,I,w);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function j(I,w){const X=n.get(I);if(I.version>0&&X.__version!==I.version){lt(X,I,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const at={[Mn]:i.REPEAT,[Je]:i.CLAMP_TO_EDGE,[ls]:i.MIRRORED_REPEAT},ft={[De]:i.NEAREST,[Qc]:i.NEAREST_MIPMAP_NEAREST,[Ki]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[Be]:i.LINEAR_MIPMAP_LINEAR},it={[i0]:i.NEVER,[c0]:i.ALWAYS,[r0]:i.LESS,[wa]:i.LEQUAL,[s0]:i.EQUAL,[l0]:i.GEQUAL,[o0]:i.GREATER,[a0]:i.NOTEQUAL};function Ct(I,w){if(w.type===Qe&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ee||w.magFilter===$r||w.magFilter===Ki||w.magFilter===Be||w.minFilter===Ee||w.minFilter===$r||w.minFilter===Ki||w.minFilter===Be)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,at[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,at[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,at[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ft[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ft[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,it[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===De||w.minFilter!==Ki&&w.minFilter!==Be||w.type===Qe&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Bt(I,w){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",E));const tt=w.source;let st=f.get(tt);st===void 0&&(st={},f.set(tt,st));const H=N(w);if(H!==I.__cacheKey){st[H]===void 0&&(st[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),st[H].usedTimes++;const nt=st[I.__cacheKey];nt!==void 0&&(st[I.__cacheKey].usedTimes--,nt.usedTimes===0&&v(w)),I.__cacheKey=H,I.__webglTexture=st[H].texture}return X}function J(I,w,X){let tt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(tt=i.TEXTURE_3D);const st=Bt(I,w),H=w.source;e.bindTexture(tt,I.__webglTexture,i.TEXTURE0+X);const nt=n.get(H);if(H.version!==nt.__version||st===!0){e.activeTexture(i.TEXTURE0+X);const rt=Kt.getPrimaries(Kt.workingColorSpace),ut=w.colorSpace===Ke?null:Kt.getPrimaries(w.colorSpace),Ft=w.colorSpace===Ke||rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let et=_(w.image,!1,r.maxTextureSize);et=Tt(w,et);const Mt=s.convert(w.format,w.colorSpace),At=s.convert(w.type);let It=M(w.internalFormat,Mt,At,w.colorSpace,w.isVideoTexture);Ct(tt,w);let xt;const Yt=w.mipmaps,Ht=w.isVideoTexture!==!0,$t=nt.__version===void 0||st===!0,G=H.dataReady,gt=A(w,et);if(w.isDepthTexture)It=x(w.format===ri,w.type),$t&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,It,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,It,et.width,et.height,0,Mt,At,null));else if(w.isDataTexture)if(Yt.length>0){Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,gt,It,Yt[0].width,Yt[0].height);for(let Q=0,ot=Yt.length;Q<ot;Q++)xt=Yt[Q],Ht?G&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,xt.width,xt.height,Mt,At,xt.data):e.texImage2D(i.TEXTURE_2D,Q,It,xt.width,xt.height,0,Mt,At,xt.data);w.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(i.TEXTURE_2D,gt,It,et.width,et.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Mt,At,et.data)):e.texImage2D(i.TEXTURE_2D,0,It,et.width,et.height,0,Mt,At,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,It,Yt[0].width,Yt[0].height,et.depth);for(let Q=0,ot=Yt.length;Q<ot;Q++)if(xt=Yt[Q],w.format!==Le)if(Mt!==null)if(Ht){if(G)if(w.layerUpdates.size>0){const wt=Hl(xt.width,xt.height,w.format,w.type);for(const St of w.layerUpdates){const Wt=xt.data.subarray(St*wt/xt.data.BYTES_PER_ELEMENT,(St+1)*wt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,St,xt.width,xt.height,1,Mt,Wt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,xt.width,xt.height,et.depth,Mt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,It,xt.width,xt.height,et.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,xt.width,xt.height,et.depth,Mt,At,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,It,xt.width,xt.height,et.depth,0,Mt,At,xt.data)}else{Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,gt,It,Yt[0].width,Yt[0].height);for(let Q=0,ot=Yt.length;Q<ot;Q++)xt=Yt[Q],w.format!==Le?Mt!==null?Ht?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,xt.width,xt.height,Mt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?G&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,xt.width,xt.height,Mt,At,xt.data):e.texImage2D(i.TEXTURE_2D,Q,It,xt.width,xt.height,0,Mt,At,xt.data)}else if(w.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,It,et.width,et.height,et.depth),G)if(w.layerUpdates.size>0){const Q=Hl(et.width,et.height,w.format,w.type);for(const ot of w.layerUpdates){const wt=et.data.subarray(ot*Q/et.data.BYTES_PER_ELEMENT,(ot+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,et.width,et.height,1,Mt,At,wt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Mt,At,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,et.width,et.height,et.depth,0,Mt,At,et.data);else if(w.isData3DTexture)Ht?($t&&e.texStorage3D(i.TEXTURE_3D,gt,It,et.width,et.height,et.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Mt,At,et.data)):e.texImage3D(i.TEXTURE_3D,0,It,et.width,et.height,et.depth,0,Mt,At,et.data);else if(w.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(i.TEXTURE_2D,gt,It,et.width,et.height);else{let Q=et.width,ot=et.height;for(let wt=0;wt<gt;wt++)e.texImage2D(i.TEXTURE_2D,wt,It,Q,ot,0,Mt,At,null),Q>>=1,ot>>=1}}else if(Yt.length>0){if(Ht&&$t){const Q=_t(Yt[0]);e.texStorage2D(i.TEXTURE_2D,gt,It,Q.width,Q.height)}for(let Q=0,ot=Yt.length;Q<ot;Q++)xt=Yt[Q],Ht?G&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Mt,At,xt):e.texImage2D(i.TEXTURE_2D,Q,It,Mt,At,xt);w.generateMipmaps=!1}else if(Ht){if($t){const Q=_t(et);e.texStorage2D(i.TEXTURE_2D,gt,It,Q.width,Q.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,At,et)}else e.texImage2D(i.TEXTURE_2D,0,It,Mt,At,et);g(w)&&m(tt),nt.__version=H.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function lt(I,w,X){if(w.image.length!==6)return;const tt=Bt(I,w),st=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);const H=n.get(st);if(st.version!==H.__version||tt===!0){e.activeTexture(i.TEXTURE0+X);const nt=Kt.getPrimaries(Kt.workingColorSpace),rt=w.colorSpace===Ke?null:Kt.getPrimaries(w.colorSpace),ut=w.colorSpace===Ke||nt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Ft=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,Mt=[];for(let ot=0;ot<6;ot++)!Ft&&!et?Mt[ot]=_(w.image[ot],!0,r.maxCubemapSize):Mt[ot]=et?w.image[ot].image:w.image[ot],Mt[ot]=Tt(w,Mt[ot]);const At=Mt[0],It=s.convert(w.format,w.colorSpace),xt=s.convert(w.type),Yt=M(w.internalFormat,It,xt,w.colorSpace),Ht=w.isVideoTexture!==!0,$t=H.__version===void 0||tt===!0,G=st.dataReady;let gt=A(w,At);Ct(i.TEXTURE_CUBE_MAP,w);let Q;if(Ft){Ht&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Yt,At.width,At.height);for(let ot=0;ot<6;ot++){Q=Mt[ot].mipmaps;for(let wt=0;wt<Q.length;wt++){const St=Q[wt];w.format!==Le?It!==null?Ht?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,0,0,St.width,St.height,It,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,Yt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,0,0,St.width,St.height,It,xt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,Yt,St.width,St.height,0,It,xt,St.data)}}}else{if(Q=w.mipmaps,Ht&&$t){Q.length>0&&gt++;const ot=_t(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Yt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(et){Ht?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Mt[ot].width,Mt[ot].height,It,xt,Mt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Yt,Mt[ot].width,Mt[ot].height,0,It,xt,Mt[ot].data);for(let wt=0;wt<Q.length;wt++){const Wt=Q[wt].image[ot].image;Ht?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,0,0,Wt.width,Wt.height,It,xt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,Yt,Wt.width,Wt.height,0,It,xt,Wt.data)}}else{Ht?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,It,xt,Mt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Yt,It,xt,Mt[ot]);for(let wt=0;wt<Q.length;wt++){const St=Q[wt];Ht?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,0,0,It,xt,St.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,Yt,It,xt,St.image[ot])}}}g(w)&&m(i.TEXTURE_CUBE_MAP),H.__version=st.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function T(I,w,X,tt,st,H){const nt=s.convert(X.format,X.colorSpace),rt=s.convert(X.type),ut=M(X.internalFormat,nt,rt,X.colorSpace),Ft=n.get(w),et=n.get(X);if(et.__renderTarget=w,!Ft.__hasExternalTextures){const Mt=Math.max(1,w.width>>H),At=Math.max(1,w.height>>H);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,H,ut,Mt,At,w.depth,0,nt,rt,null):e.texImage2D(st,H,ut,Mt,At,0,nt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,st,et.__webglTexture,0,Pt(w)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,st,et.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function L(I,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const tt=w.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,H=x(w.stencilBuffer,st),nt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Pt(w);pt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,H,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,H,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,H,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,I)}else{const tt=w.textures;for(let st=0;st<tt.length;st++){const H=tt[st],nt=s.convert(H.format,H.colorSpace),rt=s.convert(H.type),ut=M(H.internalFormat,nt,rt,H.colorSpace),Ft=Pt(w);X&&pt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,ut,w.width,w.height):pt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,ut,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ut,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function U(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(w.depthTexture);tt.__renderTarget=w,(!tt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const st=tt.__webglTexture,H=Pt(w);if(w.depthTexture.format===Jn)pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(w.depthTexture.format===ri)pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function z(I){const w=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const tt=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),tt){const st=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,tt.removeEventListener("dispose",st)};tt.addEventListener("dispose",st),w.__depthDisposeCallback=st}w.__boundDepthTexture=tt}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");U(w.__webglFramebuffer,I)}else if(X){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]===void 0)w.__webglDepthbuffer[tt]=i.createRenderbuffer(),L(w.__webglDepthbuffer[tt],I,!1);else{const st=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=w.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,H)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),L(w.__webglDepthbuffer,I,!1);else{const tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function V(I,w,X){const tt=n.get(I);w!==void 0&&T(tt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&z(I)}function ct(I){const w=I.texture,X=n.get(I),tt=n.get(w);I.addEventListener("dispose",R);const st=I.textures,H=I.isWebGLCubeRenderTarget===!0,nt=st.length>1;if(nt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=w.version,o.memory.textures++),H){X.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[rt]=[];for(let ut=0;ut<w.mipmaps.length;ut++)X.__webglFramebuffer[rt][ut]=i.createFramebuffer()}else X.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let rt=0;rt<w.mipmaps.length;rt++)X.__webglFramebuffer[rt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(nt)for(let rt=0,ut=st.length;rt<ut;rt++){const Ft=n.get(st[rt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&pt(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let rt=0;rt<st.length;rt++){const ut=st[rt];X.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[rt]);const Ft=s.convert(ut.format,ut.colorSpace),et=s.convert(ut.type),Mt=M(ut.internalFormat,Ft,et,ut.colorSpace,I.isXRRenderTarget===!0),At=Pt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Mt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,X.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),L(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,w);for(let rt=0;rt<6;rt++)if(w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)T(X.__webglFramebuffer[rt][ut],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut);else T(X.__webglFramebuffer[rt],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);g(w)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){for(let rt=0,ut=st.length;rt<ut;rt++){const Ft=st[rt],et=n.get(Ft);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Ct(i.TEXTURE_2D,Ft),T(X.__webglFramebuffer,I,Ft,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),g(Ft)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,tt.__webglTexture),Ct(rt,w),w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)T(X.__webglFramebuffer[ut],I,w,i.COLOR_ATTACHMENT0,rt,ut);else T(X.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,rt,0);g(w)&&m(rt),e.unbindTexture()}I.depthBuffer&&z(I)}function mt(I){const w=I.textures;for(let X=0,tt=w.length;X<tt;X++){const st=w[X];if(g(st)){const H=y(I),nt=n.get(st).__webglTexture;e.bindTexture(H,nt),m(H),e.unbindTexture()}}}const bt=[],B=[];function kt(I){if(I.samples>0){if(pt(I)===!1){const w=I.textures,X=I.width,tt=I.height;let st=i.COLOR_BUFFER_BIT;const H=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=n.get(I),rt=w.length>1;if(rt)for(let ut=0;ut<w.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let ut=0;ut<w.length;ut++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,nt.__webglColorRenderbuffer[ut]);const Ft=n.get(w[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,X,tt,0,0,X,tt,st,i.NEAREST),l===!0&&(bt.length=0,B.length=0,bt.push(i.COLOR_ATTACHMENT0+ut),I.depthBuffer&&I.resolveDepthBuffer===!1&&(bt.push(H),B.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ut=0;ut<w.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,nt.__webglColorRenderbuffer[ut]);const Ft=n.get(w[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Pt(I){return Math.min(r.maxSamples,I.samples)}function pt(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ht(I){const w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function Tt(I,w){const X=I.colorSpace,tt=I.format,st=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==ai&&X!==Ke&&(Kt.getTransfer(X)===ie?(tt!==Le||st!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function _t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=V,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=T,this.useMultisampledRTT=pt}function A0(i,t){function e(n,r=Ke){let s;const o=Kt.getTransfer(r);if(n===sn)return i.UNSIGNED_BYTE;if(n===Vs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ws)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ga)return i.BYTE;if(n===_a)return i.SHORT;if(n===Li)return i.UNSIGNED_SHORT;if(n===Gs)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Qe)return i.FLOAT;if(n===Ui)return i.HALF_FLOAT;if(n===va)return i.ALPHA;if(n===ya)return i.RGB;if(n===Le)return i.RGBA;if(n===Ma)return i.LUMINANCE;if(n===ba)return i.LUMINANCE_ALPHA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===Xs)return i.RED;if(n===qs)return i.RED_INTEGER;if(n===Sa)return i.RG;if(n===Ys)return i.RG_INTEGER;if(n===js)return i.RGBA_INTEGER;if(n===tr||n===er||n===nr||n===ir)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===tr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===tr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cs||n===us||n===hs||n===fs)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===us)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ds||n===ps||n===ms)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ds||n===ps)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ms)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gs||n===_s||n===xs||n===vs||n===ys||n===Ms||n===bs||n===Ss||n===Es||n===ws||n===Ts||n===As||n===Rs||n===Cs)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===gs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_s)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ys)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ms)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ss)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Es)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ws)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ts)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===As)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rr||n===Ps||n===Is)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===rr)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ps)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Is)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ea||n===Ls||n===Ds||n===Us)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===rr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ls)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ds)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Us)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class R0 extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gn extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qd={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ep=`
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

}`;class np{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new me,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ze({vertexShader:tp,fragmentShader:ep,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ip extends li{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null;const _=new np,g=e.getContextAttributes();let m=null,y=null;const M=[],x=[],A=new Rt;let E=null;const R=new Pe;R.viewport=new re;const S=new Pe;S.viewport=new re;const v=[R,S],b=new R0;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let lt=M[J];return lt===void 0&&(lt=new zo,M[J]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(J){let lt=M[J];return lt===void 0&&(lt=new zo,M[J]=lt),lt.getGripSpace()},this.getHand=function(J){let lt=M[J];return lt===void 0&&(lt=new zo,M[J]=lt),lt.getHandSpace()};function O(J){const lt=x.indexOf(J.inputSource);if(lt===-1)return;const T=M[lt];T!==void 0&&(T.update(J.inputSource,J.frame,c||o),T.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",Y);for(let J=0;J<M.length;J++){const lt=x[J];lt!==null&&(x[J]=null,M[J].disconnect(lt))}P=null,F=null,_.reset(),t.setRenderTarget(m),d=null,f=null,h=null,r=null,y=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",N),r.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),r.renderState.layers===void 0){const lt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,lt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Nn(d.framebufferWidth,d.framebufferHeight,{format:Le,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let lt=null,T=null,L=null;g.depth&&(L=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=g.stencil?ri:Jn,T=g.stencil?ii:Un);const U={colorFormat:e.RGBA8,depthFormat:L,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(U),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Nn(f.textureWidth,f.textureHeight,{format:Le,type:sn,depthTexture:new Fa(f.textureWidth,f.textureHeight,T,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Bt.setContext(r),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(J){for(let lt=0;lt<J.removed.length;lt++){const T=J.removed[lt],L=x.indexOf(T);L>=0&&(x[L]=null,M[L].disconnect(T))}for(let lt=0;lt<J.added.length;lt++){const T=J.added[lt];let L=x.indexOf(T);if(L===-1){for(let z=0;z<M.length;z++)if(z>=x.length){x.push(T),L=z;break}else if(x[z]===null){x[z]=T,L=z;break}if(L===-1)break}const U=M[L];U&&U.connect(T)}}const k=new D,$=new D;function j(J,lt,T){k.setFromMatrixPosition(lt.matrixWorld),$.setFromMatrixPosition(T.matrixWorld);const L=k.distanceTo($),U=lt.projectionMatrix.elements,z=T.projectionMatrix.elements,V=U[14]/(U[10]-1),ct=U[14]/(U[10]+1),mt=(U[9]+1)/U[5],bt=(U[9]-1)/U[5],B=(U[8]-1)/U[0],kt=(z[8]+1)/z[0],Pt=V*B,pt=V*kt,ht=L/(-B+kt),Tt=ht*-B;if(lt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Tt),J.translateZ(ht),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),U[10]===-1)J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const _t=V+ht,I=ct+ht,w=Pt-Tt,X=pt+(L-Tt),tt=mt*ct/I*_t,st=bt*ct/I*_t;J.projectionMatrix.makePerspective(w,X,tt,st,_t,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function at(J,lt){lt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(lt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let lt=J.near,T=J.far;_.texture!==null&&(_.depthNear>0&&(lt=_.depthNear),_.depthFar>0&&(T=_.depthFar)),b.near=S.near=R.near=lt,b.far=S.far=R.far=T,(P!==b.near||F!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,F=b.far),R.layers.mask=J.layers.mask|2,S.layers.mask=J.layers.mask|4,b.layers.mask=R.layers.mask|S.layers.mask;const L=J.parent,U=b.cameras;at(b,L);for(let z=0;z<U.length;z++)at(U[z],L);U.length===2?j(b,R,S):b.projectionMatrix.copy(R.projectionMatrix),ft(J,b,L)};function ft(J,lt,T){T===null?J.matrix.copy(lt.matrixWorld):(J.matrix.copy(T.matrixWorld),J.matrix.invert(),J.matrix.multiply(lt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=sa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let it=null;function Ct(J,lt){if(u=lt.getViewerPose(c||o),p=lt,u!==null){const T=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let L=!1;T.length!==b.cameras.length&&(b.cameras.length=0,L=!0);for(let z=0;z<T.length;z++){const V=T[z];let ct=null;if(d!==null)ct=d.getViewport(V);else{const bt=h.getViewSubImage(f,V);ct=bt.viewport,z===0&&(t.setRenderTargetTextures(y,bt.colorTexture,f.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(y))}let mt=v[z];mt===void 0&&(mt=new Pe,mt.layers.enable(z),mt.viewport=new re,v[z]=mt),mt.matrix.fromArray(V.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(V.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(ct.x,ct.y,ct.width,ct.height),z===0&&(b.matrix.copy(mt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),L===!0&&b.cameras.push(mt)}const U=r.enabledFeatures;if(U&&U.includes("depth-sensing")){const z=h.getDepthInformation(T[0]);z&&z.isValid&&z.texture&&_.init(t,z,r.renderState)}}for(let T=0;T<M.length;T++){const L=x[T],U=M[T];L!==null&&U!==void 0&&U.update(L,lt,c||o)}it&&it(J,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),p=null}const Bt=new y0;Bt.setAnimationLoop(Ct),this.setAnimationLoop=function(J){it=J},this.dispose=function(){}}}const qn=new Te,rp=new jt;function sp(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,g0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===xe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===xe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),M=y.envMap,x=y.envMapRotation;M&&(g.envMap.value=M,qn.copy(x),qn.x*=-1,qn.y*=-1,qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),g.envMapRotation.value.setFromMatrix4(rp.makeRotationFromEuler(qn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function op(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function c(y,M){let x=r[y.id];x===void 0&&(p(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",g));const A=M.program;n.updateUBOMapping(y,A);const E=t.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function u(y){const M=h();y.__bindingPointIndex=M;const x=i.createBuffer(),A=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=r[y.id],x=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,R=x.length;E<R;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,b=S.length;v<b;v++){const P=S[v];if(d(P,E,v,A)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let Y=0;Y<O.length;Y++){const k=O[Y],$=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,F+N,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,x,A){const E=y.value,R=M+"_"+x;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{const S=A[R];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return A[R]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function p(y){const M=y.uniforms;let x=0;const A=16;for(let R=0,S=M.length;R<S;R++){const v=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,P=v.length;b<P;b++){const F=v[b],O=Array.isArray(F.value)?F.value:[F.value];for(let N=0,Y=O.length;N<Y;N++){const k=O[N],$=_(k),j=x%A,at=j%$.boundary,ft=j+at;x+=at,ft!==0&&A-ft<$.storage&&(x+=A-ft),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=$.storage}}}const E=x%A;return E>0&&(x+=A-E),y.__size=x,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class C0{constructor(t={}){const{canvas:e=h0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ce,this.toneMapping=xn,this.toneMappingExposure=1;const x=this;let A=!1,E=0,R=0,S=null,v=-1,b=null;const P=new re,F=new re;let O=null;const N=new zt(0);let Y=0,k=e.width,$=e.height,j=1,at=null,ft=null;const it=new re(0,0,k,$),Ct=new re(0,0,k,$);let Bt=!1;const J=new Ks;let lt=!1,T=!1;const L=new jt,U=new jt,z=new D,V=new re,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function bt(){return S===null?j:1}let B=n;function kt(C,W){return e.getContext(C,W)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zs}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",St,!1),B===null){const W="webgl2";if(B=kt(W,C),B===null)throw kt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Pt,pt,ht,Tt,_t,I,w,X,tt,st,H,nt,rt,ut,Ft,et,Mt,At,It,xt,Yt,Ht,$t,G;function gt(){Pt=new gf(B),Pt.init(),Ht=new A0(B,Pt),pt=new uf(B,Pt,t,Ht),ht=new Kd(B,Pt),pt.reverseDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),Tt=new vf(B),_t=new Od,I=new Jd(B,Pt,ht,_t,pt,Ht,Tt),w=new ff(x),X=new mf(x),tt=new wu(B),$t=new lf(B,tt),st=new _f(B,tt,Tt,$t),H=new Mf(B,st,tt,Tt),It=new yf(B,pt,I),et=new hf(_t),nt=new Fd(x,w,X,Pt,pt,$t,et),rt=new sp(x,_t),ut=new zd,Ft=new Xd(Pt),At=new af(x,w,X,ht,H,d,l),Mt=new jd(x,H,pt),G=new op(B,Tt,pt,ht),xt=new cf(B,Pt,Tt),Yt=new xf(B,Pt,Tt),Tt.programs=nt.programs,x.capabilities=pt,x.extensions=Pt,x.properties=_t,x.renderLists=ut,x.shadowMap=Mt,x.state=ht,x.info=Tt}gt();const Q=new ip(x,B);this.xr=Q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(k,$,!1))},this.getSize=function(C){return C.set(k,$)},this.setSize=function(C,W,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,$=W,e.width=Math.floor(C*j),e.height=Math.floor(W*j),K===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(k*j,$*j).floor()},this.setDrawingBufferSize=function(C,W,K){k=C,$=W,j=K,e.width=Math.floor(C*K),e.height=Math.floor(W*K),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,W,K,Z){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,W,K,Z),ht.viewport(P.copy(it).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy(Ct)},this.setScissor=function(C,W,K,Z){C.isVector4?Ct.set(C.x,C.y,C.z,C.w):Ct.set(C,W,K,Z),ht.scissor(F.copy(Ct).multiplyScalar(j).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(C){ht.setScissorTest(Bt=C)},this.setOpaqueSort=function(C){at=C},this.setTransparentSort=function(C){ft=C},this.getClearColor=function(C){return C.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(C=!0,W=!0,K=!0){let Z=0;if(C){let q=!1;if(S!==null){const dt=S.texture.format;q=dt===js||dt===Ys||dt===qs}if(q){const dt=S.texture.type,Et=dt===sn||dt===Un||dt===Li||dt===ii||dt===Vs||dt===Ws,Lt=At.getClearColor(),Dt=At.getClearAlpha(),Gt=Lt.r,Xt=Lt.g,Ut=Lt.b;Et?(p[0]=Gt,p[1]=Xt,p[2]=Ut,p[3]=Dt,B.clearBufferuiv(B.COLOR,0,p)):(_[0]=Gt,_[1]=Xt,_[2]=Ut,_[3]=Dt,B.clearBufferiv(B.COLOR,0,_))}else Z|=B.COLOR_BUFFER_BIT}W&&(Z|=B.DEPTH_BUFFER_BIT),K&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ut.dispose(),Ft.dispose(),_t.dispose(),w.dispose(),X.dispose(),H.dispose(),$t.dispose(),G.dispose(),nt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Wa),Q.removeEventListener("sessionend",Xa),kn.stop()};function ot(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=Tt.autoReset,W=Mt.enabled,K=Mt.autoUpdate,Z=Mt.needsUpdate,q=Mt.type;gt(),Tt.autoReset=C,Mt.enabled=W,Mt.autoUpdate=K,Mt.needsUpdate=Z,Mt.type=q}function St(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Wt(C){const W=C.target;W.removeEventListener("dispose",Wt),le(W)}function le(C){ye(C),_t.remove(C)}function ye(C){const W=_t.get(C).programs;W!==void 0&&(W.forEach(function(K){nt.releaseProgram(K)}),C.isShaderMaterial&&nt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,K,Z,q,dt){W===null&&(W=ct);const Et=q.isMesh&&q.matrixWorld.determinant()<0,Lt=eu(C,W,K,Z,q);ht.setMaterial(Z,Et);let Dt=K.index,Gt=1;if(Z.wireframe===!0){if(Dt=st.getWireframeAttribute(K),Dt===void 0)return;Gt=2}const Xt=K.drawRange,Ut=K.attributes.position;let Zt=Xt.start*Gt,se=(Xt.start+Xt.count)*Gt;dt!==null&&(Zt=Math.max(Zt,dt.start*Gt),se=Math.min(se,(dt.start+dt.count)*Gt)),Dt!==null?(Zt=Math.max(Zt,0),se=Math.min(se,Dt.count)):Ut!=null&&(Zt=Math.max(Zt,0),se=Math.min(se,Ut.count));const oe=se-Zt;if(oe<0||oe===1/0)return;$t.setup(q,Z,Lt,K,Dt);let Ae,te=xt;if(Dt!==null&&(Ae=tt.get(Dt),te=Yt,te.setIndex(Ae)),q.isMesh)Z.wireframe===!0?(ht.setLineWidth(Z.wireframeLinewidth*bt()),te.setMode(B.LINES)):te.setMode(B.TRIANGLES);else if(q.isLine){let Ot=Z.linewidth;Ot===void 0&&(Ot=1),ht.setLineWidth(Ot*bt()),q.isLineSegments?te.setMode(B.LINES):q.isLineLoop?te.setMode(B.LINE_LOOP):te.setMode(B.LINE_STRIP)}else q.isPoints?te.setMode(B.POINTS):q.isSprite&&te.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)te.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))te.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ot=q._multiDrawStarts,un=q._multiDrawCounts,ee=q._multiDrawCount,Xe=Dt?tt.get(Dt).bytesPerElement:1,hi=_t.get(Z).currentProgram.getUniforms();for(let Ue=0;Ue<ee;Ue++)hi.setValue(B,"_gl_DrawID",Ue),te.render(Ot[Ue]/Xe,un[Ue])}else if(q.isInstancedMesh)te.renderInstances(Zt,oe,q.count);else if(K.isInstancedBufferGeometry){const Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,un=Math.min(K.instanceCount,Ot);te.renderInstances(Zt,oe,un)}else te.render(Zt,oe)};function ne(C,W,K){C.transparent===!0&&C.side===Ie&&C.forceSinglePass===!1?(C.side=xe,C.needsUpdate=!0,vr(C,W,K),C.side=yn,C.needsUpdate=!0,vr(C,W,K),C.side=Ie):vr(C,W,K)}this.compile=function(C,W,K=null){K===null&&(K=C),m=Ft.get(K),m.init(W),M.push(m),K.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),C!==K&&C.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const Z=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const dt=q.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const Lt=dt[Et];ne(Lt,K,q),Z.add(Lt)}else ne(dt,K,q),Z.add(dt)}),M.pop(),m=null,Z},this.compileAsync=function(C,W,K=null){const Z=this.compile(C,W,K);return new Promise(q=>{function dt(){if(Z.forEach(function(Et){_t.get(Et).currentProgram.isReady()&&Z.delete(Et)}),Z.size===0){q(C);return}setTimeout(dt,10)}Pt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let We=null;function cn(C){We&&We(C)}function Wa(){kn.stop()}function Xa(){kn.start()}const kn=new y0;kn.setAnimationLoop(cn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(C){We=C,Q.setAnimationLoop(C),C===null?kn.stop():kn.start()},Q.addEventListener("sessionstart",Wa),Q.addEventListener("sessionend",Xa),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(W),W=Q.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,W,S),m=Ft.get(C,M.length),m.init(W),M.push(m),U.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),J.setFromProjectionMatrix(U),T=this.localClippingEnabled,lt=et.init(this.clippingPlanes,T),g=ut.get(C,y.length),g.init(),y.push(g),Q.enabled===!0&&Q.isPresenting===!0){const dt=x.xr.getDepthSensingMesh();dt!==null&&co(dt,W,-1/0,x.sortObjects)}co(C,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(at,ft),mt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,mt&&At.addToRenderList(g,C),this.info.render.frame++,lt===!0&&et.beginShadows();const K=m.state.shadowsArray;Mt.render(K,C,W),lt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,q=g.transmissive;if(m.setupLights(),W.isArrayCamera){const dt=W.cameras;if(q.length>0)for(let Et=0,Lt=dt.length;Et<Lt;Et++){const Dt=dt[Et];Ya(Z,q,C,Dt)}mt&&At.render(C);for(let Et=0,Lt=dt.length;Et<Lt;Et++){const Dt=dt[Et];qa(g,C,Dt,Dt.viewport)}}else q.length>0&&Ya(Z,q,C,W),mt&&At.render(C),qa(g,C,W);S!==null&&(I.updateMultisampleRenderTarget(S),I.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(x,C,W),$t.resetDefaultState(),v=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],lt===!0&&et.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function co(C,W,K,Z){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){Z&&V.setFromMatrixPosition(C.matrixWorld).applyMatrix4(U);const Et=H.update(C),Lt=C.material;Lt.visible&&g.push(C,Et,Lt,K,V.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const Et=H.update(C),Lt=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),V.copy(C.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),V.copy(Et.boundingSphere.center)),V.applyMatrix4(C.matrixWorld).applyMatrix4(U)),Array.isArray(Lt)){const Dt=Et.groups;for(let Gt=0,Xt=Dt.length;Gt<Xt;Gt++){const Ut=Dt[Gt],Zt=Lt[Ut.materialIndex];Zt&&Zt.visible&&g.push(C,Et,Zt,K,V.z,Ut)}}else Lt.visible&&g.push(C,Et,Lt,K,V.z,null)}}const dt=C.children;for(let Et=0,Lt=dt.length;Et<Lt;Et++)co(dt[Et],W,K,Z)}function qa(C,W,K,Z){const q=C.opaque,dt=C.transmissive,Et=C.transparent;m.setupLightsView(K),lt===!0&&et.setGlobalState(x.clippingPlanes,K),Z&&ht.viewport(P.copy(Z)),q.length>0&&xr(q,W,K),dt.length>0&&xr(dt,W,K),Et.length>0&&xr(Et,W,K),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Ya(C,W,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Nn(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Ui:sn,minFilter:Be,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const dt=m.state.transmissionRenderTarget[Z.id],Et=Z.viewport||P;dt.setSize(Et.z,Et.w);const Lt=x.getRenderTarget();x.setRenderTarget(dt),x.getClearColor(N),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),mt&&At.render(K);const Dt=x.toneMapping;x.toneMapping=xn;const Gt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),lt===!0&&et.setGlobalState(x.clippingPlanes,Z),xr(C,K,Z),I.updateMultisampleRenderTarget(dt),I.updateRenderTargetMipmap(dt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ut=0,Zt=W.length;Ut<Zt;Ut++){const se=W[Ut],oe=se.object,Ae=se.geometry,te=se.material,Ot=se.group;if(te.side===Ie&&oe.layers.test(Z.layers)){const un=te.side;te.side=xe,te.needsUpdate=!0,ja(oe,K,Z,Ae,te,Ot),te.side=un,te.needsUpdate=!0,Xt=!0}}Xt===!0&&(I.updateMultisampleRenderTarget(dt),I.updateRenderTargetMipmap(dt))}x.setRenderTarget(Lt),x.setClearColor(N,Y),Gt!==void 0&&(Z.viewport=Gt),x.toneMapping=Dt}function xr(C,W,K){const Z=W.isScene===!0?W.overrideMaterial:null;for(let q=0,dt=C.length;q<dt;q++){const Et=C[q],Lt=Et.object,Dt=Et.geometry,Gt=Z===null?Et.material:Z,Xt=Et.group;Lt.layers.test(K.layers)&&ja(Lt,W,K,Dt,Gt,Xt)}}function ja(C,W,K,Z,q,dt){C.onBeforeRender(x,W,K,Z,q,dt),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(x,W,K,Z,C,dt),q.transparent===!0&&q.side===Ie&&q.forceSinglePass===!1?(q.side=xe,q.needsUpdate=!0,x.renderBufferDirect(K,W,Z,q,C,dt),q.side=yn,q.needsUpdate=!0,x.renderBufferDirect(K,W,Z,q,C,dt),q.side=Ie):x.renderBufferDirect(K,W,Z,q,C,dt),C.onAfterRender(x,W,K,Z,q,dt)}function vr(C,W,K){W.isScene!==!0&&(W=ct);const Z=_t.get(C),q=m.state.lights,dt=m.state.shadowsArray,Et=q.state.version,Lt=nt.getParameters(C,q.state,dt,W,K),Dt=nt.getProgramCacheKey(Lt);let Gt=Z.programs;Z.environment=C.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(C.isMeshStandardMaterial?X:w).get(C.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Gt===void 0&&(C.addEventListener("dispose",Wt),Gt=new Map,Z.programs=Gt);let Xt=Gt.get(Dt);if(Xt!==void 0){if(Z.currentProgram===Xt&&Z.lightsStateVersion===Et)return Ka(C,Lt),Xt}else Lt.uniforms=nt.getUniforms(C),C.onBeforeCompile(Lt,x),Xt=nt.acquireProgram(Lt,Dt),Gt.set(Dt,Xt),Z.uniforms=Lt.uniforms;const Ut=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ut.clippingPlanes=et.uniform),Ka(C,Lt),Z.needsLights=iu(C),Z.lightsStateVersion=Et,Z.needsLights&&(Ut.ambientLightColor.value=q.state.ambient,Ut.lightProbe.value=q.state.probe,Ut.directionalLights.value=q.state.directional,Ut.directionalLightShadows.value=q.state.directionalShadow,Ut.spotLights.value=q.state.spot,Ut.spotLightShadows.value=q.state.spotShadow,Ut.rectAreaLights.value=q.state.rectArea,Ut.ltc_1.value=q.state.rectAreaLTC1,Ut.ltc_2.value=q.state.rectAreaLTC2,Ut.pointLights.value=q.state.point,Ut.pointLightShadows.value=q.state.pointShadow,Ut.hemisphereLights.value=q.state.hemi,Ut.directionalShadowMap.value=q.state.directionalShadowMap,Ut.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ut.spotShadowMap.value=q.state.spotShadowMap,Ut.spotLightMatrix.value=q.state.spotLightMatrix,Ut.spotLightMap.value=q.state.spotLightMap,Ut.pointShadowMap.value=q.state.pointShadowMap,Ut.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=Xt,Z.uniformsList=null,Xt}function $a(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Kr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Ka(C,W){const K=_t.get(C);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function eu(C,W,K,Z,q){W.isScene!==!0&&(W=ct),I.resetTextureUnits();const dt=W.fog,Et=Z.isMeshStandardMaterial?W.environment:null,Lt=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ai,Dt=(Z.isMeshStandardMaterial?X:w).get(Z.envMap||Et),Gt=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xt=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ut=!!K.morphAttributes.position,Zt=!!K.morphAttributes.normal,se=!!K.morphAttributes.color;let oe=xn;Z.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(oe=x.toneMapping);const Ae=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,te=Ae!==void 0?Ae.length:0,Ot=_t.get(Z),un=m.state.lights;if(lt===!0&&(T===!0||C!==b)){const He=C===b&&Z.id===v;et.setState(Z,C,He)}let ee=!1;Z.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==un.state.version||Ot.outputColorSpace!==Lt||q.isBatchedMesh&&Ot.batching===!1||!q.isBatchedMesh&&Ot.batching===!0||q.isBatchedMesh&&Ot.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ot.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ot.instancing===!1||!q.isInstancedMesh&&Ot.instancing===!0||q.isSkinnedMesh&&Ot.skinning===!1||!q.isSkinnedMesh&&Ot.skinning===!0||q.isInstancedMesh&&Ot.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ot.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ot.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ot.instancingMorph===!1&&q.morphTexture!==null||Ot.envMap!==Dt||Z.fog===!0&&Ot.fog!==dt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==et.numPlanes||Ot.numIntersection!==et.numIntersection)||Ot.vertexAlphas!==Gt||Ot.vertexTangents!==Xt||Ot.morphTargets!==Ut||Ot.morphNormals!==Zt||Ot.morphColors!==se||Ot.toneMapping!==oe||Ot.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Ot.__version=Z.version);let Xe=Ot.currentProgram;ee===!0&&(Xe=vr(Z,W,q));let hi=!1,Ue=!1,Bi=!1;const ae=Xe.getUniforms(),en=Ot.uniforms;if(ht.useProgram(Xe.program)&&(hi=!0,Ue=!0,Bi=!0),Z.id!==v&&(v=Z.id,Ue=!0),hi||b!==C){ht.buffers.depth.getReversed()?(L.copy(C.projectionMatrix),ou(L),au(L),ae.setValue(B,"projectionMatrix",L)):ae.setValue(B,"projectionMatrix",C.projectionMatrix),ae.setValue(B,"viewMatrix",C.matrixWorldInverse);const En=ae.map.cameraPosition;En!==void 0&&En.setValue(B,z.setFromMatrixPosition(C.matrixWorld)),pt.logarithmicDepthBuffer&&ae.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ae.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Ue=!0,Bi=!0)}if(q.isSkinnedMesh){ae.setOptional(B,q,"bindMatrix"),ae.setOptional(B,q,"bindMatrixInverse");const He=q.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ae.setValue(B,"boneTexture",He.boneTexture,I))}q.isBatchedMesh&&(ae.setOptional(B,q,"batchingTexture"),ae.setValue(B,"batchingTexture",q._matricesTexture,I),ae.setOptional(B,q,"batchingIdTexture"),ae.setValue(B,"batchingIdTexture",q._indirectTexture,I),ae.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&ae.setValue(B,"batchingColorTexture",q._colorsTexture,I));const zi=K.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&It.update(q,K,Xe),(Ue||Ot.receiveShadow!==q.receiveShadow)&&(Ot.receiveShadow=q.receiveShadow,ae.setValue(B,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(en.envMap.value=Dt,en.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(en.envMapIntensity.value=W.environmentIntensity),Ue&&(ae.setValue(B,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&nu(en,Bi),dt&&Z.fog===!0&&rt.refreshFogUniforms(en,dt),rt.refreshMaterialUniforms(en,Z,j,$,m.state.transmissionRenderTarget[C.id]),Kr.upload(B,$a(Ot),en,I)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Kr.upload(B,$a(Ot),en,I),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ae.setValue(B,"center",q.center),ae.setValue(B,"modelViewMatrix",q.modelViewMatrix),ae.setValue(B,"normalMatrix",q.normalMatrix),ae.setValue(B,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const He=Z.uniformsGroups;for(let En=0,wn=He.length;En<wn;En++){const Za=He[En];G.update(Za,Xe),G.bind(Za,Xe)}}return Xe}function nu(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function iu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,W,K){_t.get(C.texture).__webglTexture=W,_t.get(C.depthTexture).__webglTexture=K;const Z=_t.get(C);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const K=_t.get(C);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,K=0){S=C,E=W,R=K;let Z=!0,q=null,dt=!1,Et=!1;if(C){const Dt=_t.get(C);if(Dt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1;else if(Dt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Dt.__hasExternalTextures)I.rebindTextures(C,_t.get(C.texture).__webglTexture,_t.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ut=C.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&_t.has(Ut)&&(C.width!==Ut.image.width||C.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const Gt=C.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Et=!0);const Xt=_t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[W])?q=Xt[W][K]:q=Xt[W],dt=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?q=_t.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[K]:q=Xt,P.copy(C.viewport),F.copy(C.scissor),O=C.scissorTest}else P.copy(it).multiplyScalar(j).floor(),F.copy(Ct).multiplyScalar(j).floor(),O=Bt;if(ht.bindFramebuffer(B.FRAMEBUFFER,q)&&Z&&ht.drawBuffers(C,q),ht.viewport(P),ht.scissor(F),ht.setScissorTest(O),dt){const Dt=_t.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Dt.__webglTexture,K)}else if(Et){const Dt=_t.get(C.texture),Gt=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,K||0,Gt)}v=-1},this.readRenderTargetPixels=function(C,W,K,Z,q,dt,Et){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){ht.bindFramebuffer(B.FRAMEBUFFER,Lt);try{const Dt=C.texture,Gt=Dt.format,Xt=Dt.type;if(!pt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-Z&&K>=0&&K<=C.height-q&&B.readPixels(W,K,Z,q,Ht.convert(Gt),Ht.convert(Xt),dt)}finally{const Dt=S!==null?_t.get(S).__webglFramebuffer:null;ht.bindFramebuffer(B.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(C,W,K,Z,q,dt,Et){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){const Dt=C.texture,Gt=Dt.format,Xt=Dt.type;if(!pt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-Z&&K>=0&&K<=C.height-q){ht.bindFramebuffer(B.FRAMEBUFFER,Lt);const Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,dt.byteLength,B.STREAM_READ),B.readPixels(W,K,Z,q,Ht.convert(Gt),Ht.convert(Xt),0);const Zt=S!==null?_t.get(S).__webglFramebuffer:null;ht.bindFramebuffer(B.FRAMEBUFFER,Zt);const se=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await su(B,se,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,dt),B.deleteBuffer(Ut),B.deleteSync(se),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,K=0){C.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const Z=Math.pow(2,-K),q=Math.floor(C.image.width*Z),dt=Math.floor(C.image.height*Z),Et=W!==null?W.x:0,Lt=W!==null?W.y:0;I.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Et,Lt,q,dt),ht.unbindTexture()},this.copyTextureToTexture=function(C,W,K=null,Z=null,q=0){C.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,C=arguments[1],W=arguments[2],q=arguments[3]||0,K=null);let dt,Et,Lt,Dt,Gt,Xt,Ut,Zt,se;const oe=C.isCompressedTexture?C.mipmaps[q]:C.image;K!==null?(dt=K.max.x-K.min.x,Et=K.max.y-K.min.y,Lt=K.isBox3?K.max.z-K.min.z:1,Dt=K.min.x,Gt=K.min.y,Xt=K.isBox3?K.min.z:0):(dt=oe.width,Et=oe.height,Lt=oe.depth||1,Dt=0,Gt=0,Xt=0),Z!==null?(Ut=Z.x,Zt=Z.y,se=Z.z):(Ut=0,Zt=0,se=0);const Ae=Ht.convert(W.format),te=Ht.convert(W.type);let Ot;W.isData3DTexture?(I.setTexture3D(W,0),Ot=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),Ot=B.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),Ot=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const un=B.getParameter(B.UNPACK_ROW_LENGTH),ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Xe=B.getParameter(B.UNPACK_SKIP_PIXELS),hi=B.getParameter(B.UNPACK_SKIP_ROWS),Ue=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Gt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);const Bi=C.isDataArrayTexture||C.isData3DTexture,ae=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const en=_t.get(C),zi=_t.get(W),He=_t.get(en.__renderTarget),En=_t.get(zi.__renderTarget);ht.bindFramebuffer(B.READ_FRAMEBUFFER,He.__webglFramebuffer),ht.bindFramebuffer(B.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let wn=0;wn<Lt;wn++)Bi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_t.get(C).__webglTexture,q,Xt+wn),C.isDepthTexture?(ae&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_t.get(W).__webglTexture,q,se+wn),B.blitFramebuffer(Dt,Gt,dt,Et,Ut,Zt,dt,Et,B.DEPTH_BUFFER_BIT,B.NEAREST)):ae?B.copyTexSubImage3D(Ot,q,Ut,Zt,se+wn,Dt,Gt,dt,Et):B.copyTexSubImage2D(Ot,q,Ut,Zt,se+wn,Dt,Gt,dt,Et);ht.bindFramebuffer(B.READ_FRAMEBUFFER,null),ht.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ae?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Ot,q,Ut,Zt,se,dt,Et,Lt,Ae,te,oe.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ot,q,Ut,Zt,se,dt,Et,Lt,Ae,oe.data):B.texSubImage3D(Ot,q,Ut,Zt,se,dt,Et,Lt,Ae,te,oe):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,q,Ut,Zt,dt,Et,Ae,te,oe.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,q,Ut,Zt,oe.width,oe.height,Ae,oe.data):B.texSubImage2D(B.TEXTURE_2D,q,Ut,Zt,dt,Et,Ae,te,oe);B.pixelStorei(B.UNPACK_ROW_LENGTH,un),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xe),B.pixelStorei(B.UNPACK_SKIP_ROWS,hi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ue),q===0&&W.generateMipmaps&&B.generateMipmap(Ot),ht.unbindTexture()},this.copyTextureToTexture3D=function(C,W,K=null,Z=null,q=0){return C.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,C=arguments[2],W=arguments[3],q=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,K,Z,q)},this.initRenderTarget=function(C){_t.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),ht.unbindTexture()},this.resetState=function(){E=0,R=0,S=null,ht.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Oa extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Te,this.environmentIntensity=1,this.environmentRotation=new Te,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gr extends me{constructor(t=null,e=1,n=1,r,s,o,a,l,c=De,u=De,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs extends ge{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wi=new jt,Gl=new jt,kr=[],Vl=new Bn,ap=new jt,Xi=new Jt,qi=new ci;class Js extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ap)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),Vl.copy(t.boundingBox).applyMatrix4(wi),this.boundingBox.union(Vl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),qi.copy(t.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qi.copy(this.boundingSphere),qi.applyMatrix4(n),t.ray.intersectsSphere(qi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wi),Gl.multiplyMatrices(n,wi),Xi.matrixWorld=Gl,Xi.raycast(t,kr);for(let o=0,a=kr.length;o<a;o++){const l=kr[o];l.instanceId=s,l.object=this,e.push(l)}kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new gr(new Float32Array(r*this.count),r,this.count,Xs,Qe));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class P0 extends zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wl=new jt,aa=new Ra,Hr=new ci,Gr=new D;class I0 extends he{constructor(t=new Qt,e=new P0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Hr.radius+=s,t.ray.intersectsSphere(Hr)===!1)return;Wl.copy(r).invert(),aa.copy(t.ray).applyMatrix4(Wl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const g=c.getX(p);Gr.fromBufferAttribute(h,g),Xl(Gr,g,l,r,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)Gr.fromBufferAttribute(h,p),Xl(Gr,p,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xl(i,t,e,n,r,s,o){const a=aa.distanceSqToPoint(i);if(a<e){const l=new D;aa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Fi extends me{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Rt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],s=[],o=[],a=new D,l=new jt;for(let d=0;d<=t;d++){const p=d/t;r[d]=this.getTangentAt(p,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(_e(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(_e(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],d*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ba extends an{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Rt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class L0 extends Ba{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function za(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Vr=new D,ko=new za,Ho=new za,Go=new za;class Qs extends an{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Vr.subVectors(r[0],r[1]).add(r[0]),c=Vr);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Vr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),ko.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,_,g),Ho.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,_,g),Go.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ho.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Go.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ko.calc(l),Ho.calc(l),Go.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ql(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function lp(i,t){const e=1-i;return e*e*t}function cp(i,t){return 2*(1-i)*i*t}function up(i,t){return i*i*t}function sr(i,t,e,n){return lp(i,t)+cp(i,e)+up(i,n)}function hp(i,t){const e=1-i;return e*e*e*t}function fp(i,t){const e=1-i;return 3*e*e*i*t}function dp(i,t){return 3*(1-i)*i*i*t}function pp(i,t){return i*i*i*t}function or(i,t,e,n,r){return hp(i,t)+fp(i,e)+dp(i,n)+pp(i,r)}class D0 extends an{constructor(t=new Rt,e=new Rt,n=new Rt,r=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Rt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(or(t,r.x,s.x,o.x,a.x),or(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class U0 extends an{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(or(t,r.x,s.x,o.x,a.x),or(t,r.y,s.y,o.y,a.y),or(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class N0 extends an{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F0 extends an{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class O0 extends an{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(sr(t,r.x,s.x,o.x),sr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ka extends an{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(sr(t,r.x,s.x,o.x),sr(t,r.y,s.y,o.y),sr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class B0 extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(ql(a,l.x,c.x,u.x,h.x),ql(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Rt().fromArray(r))}return this}}var mp=Object.freeze({__proto__:null,ArcCurve:L0,CatmullRomCurve3:Qs,CubicBezierCurve:D0,CubicBezierCurve3:U0,EllipseCurve:Ba,LineCurve:N0,LineCurve3:F0,QuadraticBezierCurve:O0,QuadraticBezierCurve3:ka,SplineCurve:B0});class Oi extends Qt{constructor(t=[new Rt(0,-.5),new Rt(.5,0),new Rt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=_e(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/e,h=new D,f=new Rt,d=new D,p=new D,_=new D;let g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=e;y++){const M=n+y*u*r,x=Math.sin(M),A=Math.cos(M);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*x,h.y=t[E].y,h.z=t[E].x*A,o.push(h.x,h.y,h.z),f.x=y/e,f.y=E/(t.length-1),a.push(f.x,f.y);const R=l[3*E+0]*x,S=l[3*E+1],v=l[3*E+0]*A;c.push(R,S,v)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const x=M+y*t.length,A=x,E=x+t.length,R=x+t.length+1,S=x+1;s.push(A,E,S),s.push(R,S,E)}this.setIndex(s),this.setAttribute("position",new Nt(o,3)),this.setAttribute("uv",new Nt(a,2)),this.setAttribute("normal",new Nt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.points,t.segments,t.phiStart,t.phiLength)}}class bn extends Qt{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let p=0;const _=[],g=n/2;let m=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(d,2));function y(){const x=new D,A=new D;let E=0;const R=(e-t)/n;for(let S=0;S<=s;S++){const v=[],b=S/s,P=b*(e-t)+t;for(let F=0;F<=r;F++){const O=F/r,N=O*l+a,Y=Math.sin(N),k=Math.cos(N);A.x=P*Y,A.y=-b*n+g,A.z=P*k,h.push(A.x,A.y,A.z),x.set(Y,R,k).normalize(),f.push(x.x,x.y,x.z),d.push(O,1-b),v.push(p++)}_.push(v)}for(let S=0;S<r;S++)for(let v=0;v<s;v++){const b=_[v][S],P=_[v+1][S],F=_[v+1][S+1],O=_[v][S+1];(t>0||v!==0)&&(u.push(b,P,O),E+=3),(e>0||v!==s-1)&&(u.push(P,F,O),E+=3)}c.addGroup(m,E,0),m+=E}function M(x){const A=p,E=new Rt,R=new D;let S=0;const v=x===!0?t:e,b=x===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),p++;const P=p;for(let F=0;F<=r;F++){const N=F/r*l+a,Y=Math.cos(N),k=Math.sin(N);R.x=v*k,R.y=g*b,R.z=v*Y,h.push(R.x,R.y,R.z),f.push(0,b,0),E.x=Y*.5+.5,E.y=k*.5*b+.5,d.push(E.x,E.y),p++}for(let F=0;F<r;F++){const O=A+F,N=P+F;x===!0?u.push(N,N+1,O):u.push(N+1,N,O),S+=3}c.addGroup(m,S,x===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class to extends Qt{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Nt(s,3)),this.setAttribute("normal",new Nt(s.slice(),3)),this.setAttribute("uv",new Nt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new D,x=new D,A=new D;for(let E=0;E<e.length;E+=3)d(e[E+0],M),d(e[E+1],x),d(e[E+2],A),l(M,x,A,y)}function l(y,M,x,A){const E=A+1,R=[];for(let S=0;S<=E;S++){R[S]=[];const v=y.clone().lerp(x,S/E),b=M.clone().lerp(x,S/E),P=E-S;for(let F=0;F<=P;F++)F===0&&S===E?R[S][F]=v:R[S][F]=v.clone().lerp(b,F/P)}for(let S=0;S<E;S++)for(let v=0;v<2*(E-S)-1;v++){const b=Math.floor(v/2);v%2===0?(f(R[S][b+1]),f(R[S+1][b]),f(R[S][b])):(f(R[S][b+1]),f(R[S+1][b+1]),f(R[S+1][b]))}}function c(y){const M=new D;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(y),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function u(){const y=new D;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];const x=g(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;o.push(x,1-A)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){const M=o[y+0],x=o[y+2],A=o[y+4],E=Math.max(M,x,A),R=Math.min(M,x,A);E>.9&&R<.1&&(M<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,M){const x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function p(){const y=new D,M=new D,x=new D,A=new D,E=new Rt,R=new Rt,S=new Rt;for(let v=0,b=0;v<s.length;v+=9,b+=6){y.set(s[v+0],s[v+1],s[v+2]),M.set(s[v+3],s[v+4],s[v+5]),x.set(s[v+6],s[v+7],s[v+8]),E.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),S.set(o[b+4],o[b+5]),A.copy(y).add(M).add(x).divideScalar(3);const P=g(A);_(E,b+0,y,P),_(R,b+2,M,P),_(S,b+4,x,P)}}function _(y,M,x,A){A<0&&y.x===1&&(o[M]=y.x-1),x.x===0&&x.z===0&&(o[M]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.vertices,t.indices,t.radius,t.details)}}class eo extends to{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new eo(t.radius,t.detail)}}class no extends Qt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/r,d=new D,p=new Rt;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){const m=s+g/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}h+=f}for(let _=0;_<r;_++){const g=_*(n+1);for(let m=0;m<n;m++){const y=m+g,M=y,x=y+n+1,A=y+n+2,E=y+1;a.push(M,x,E),a.push(x,A,E)}}this.setIndex(a),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class On extends Qt{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const y=[],M=m/n;let x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(r+E*s)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(r+E*s)*Math.sin(o+M*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(E+x,1-M),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const M=u[m][y+1],x=u[m][y],A=u[m+1][y],E=u[m+1][y+1];(m!==0||o>0)&&d.push(M,x,E),(m!==n-1||l<Math.PI)&&d.push(x,A,E)}this.setIndex(d),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oi extends Qt{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new D,h=new D,f=new D;for(let d=0;d<=n;d++)for(let p=0;p<=r;p++){const _=p/r*s,g=d/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=r;p++){const _=(r+1)*d+p-1,g=(r+1)*(d-1)+p-1,m=(r+1)*(d-1)+p,y=(r+1)*d+p;o.push(_,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _r extends Qt{constructor(t=new ka(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new Rt;let u=new D;const h=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(d,2));function _(){for(let M=0;M<e;M++)g(M);g(s===!1?e:0),y(),m()}function g(M){u=t.getPointAt(M/e,u);const x=o.normals[M],A=o.binormals[M];for(let E=0;E<=r;E++){const R=E/r*Math.PI*2,S=Math.sin(R),v=-Math.cos(R);l.x=v*x.x+S*A.x,l.y=v*x.y+S*A.y,l.z=v*x.z+S*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let x=1;x<=r;x++){const A=(r+1)*(M-1)+(x-1),E=(r+1)*M+(x-1),R=(r+1)*M+x,S=(r+1)*(M-1)+x;p.push(A,E,S),p.push(E,R,S)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=r;x++)c.x=M/e,c.y=x/r,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _r(new mp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class we extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Te,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class z0 extends zn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Te,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const la={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class k0{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const H0=new k0;class io{constructor(t){this.manager=t!==void 0?t:H0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}io.DEFAULT_MATERIAL_NAME="__DEFAULT";class G0 extends io{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=la.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ur("img");function l(){u(),la.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class V0 extends io{constructor(t){super(t)}load(t,e,n,r){const s=new me,o=new G0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class ro extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class W0 extends ro{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vo=new jt,Yl=new D,jl=new D;class X0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yl),jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jl),e.updateMatrixWorld(),Vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $l=new jt,Yi=new D,Wo=new D;class gp extends X0{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Yi),Wo.copy(n.position),Wo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Wo),n.updateMatrixWorld(),r.makeTranslation(-Yi.x,-Yi.y,-Yi.z),$l.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l)}}class Os extends ro{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new gp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _p extends X0{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q0 extends ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new _p}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zs);const xp=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:pa,AddEquation:Dn,AddOperation:qc,AdditiveBlending:ar,AgXToneMapping:Zc,AlphaFormat:va,AlwaysCompare:c0,AlwaysDepth:ts,AlwaysStencilFunc:ia,ArcCurve:L0,ArrayCamera:R0,BackSide:xe,BasicDepthPacking:t0,Box3:Bn,BoxGeometry:on,BufferAttribute:ge,BufferGeometry:Qt,ByteType:ga,Cache:la,Camera:La,CanvasTexture:Fi,CatmullRomCurve3:Qs,CineonToneMapping:$c,ClampToEdgeWrapping:Je,Color:zt,ColorManagement:Kt,ConstantAlphaFactor:Vc,ConstantColorFactor:Hc,CubeCamera:x0,CubeReflectionMapping:ei,CubeRefractionMapping:ni,CubeTexture:Da,CubeUVReflectionMapping:dr,CubicBezierCurve:D0,CubicBezierCurve3:U0,CullFaceBack:ta,CullFaceFront:wc,CullFaceNone:Ec,Curve:an,CustomBlending:Ac,CustomToneMapping:Kc,CylinderGeometry:bn,Data3DTexture:p0,DataArrayTexture:Aa,DataTexture:gr,DefaultLoadingManager:H0,DepthFormat:Jn,DepthStencilFormat:ri,DepthTexture:Fa,DirectionalLight:q0,DoubleSide:Ie,DstAlphaFactor:Fc,DstColorFactor:Bc,EllipseCurve:Ba,EqualCompare:s0,EqualDepth:ns,EquirectangularReflectionMapping:os,EquirectangularRefractionMapping:as,Euler:Te,EventDispatcher:li,Float32BufferAttribute:Nt,FloatType:Qe,FrontSide:yn,Frustum:Ks,GLSL3:ra,GreaterCompare:o0,GreaterDepth:rs,GreaterEqualCompare:l0,GreaterEqualDepth:is,Group:gn,HalfFloatType:Ui,HemisphereLight:W0,IcosahedronGeometry:eo,ImageLoader:G0,ImageUtils:f0,InstancedBufferAttribute:Fs,InstancedMesh:Js,IntType:Gs,KeepStencilOp:Yn,LatheGeometry:Oi,Layers:Ca,LessCompare:r0,LessDepth:es,LessEqualCompare:wa,LessEqualDepth:ti,Light:ro,LineCurve:N0,LineCurve3:F0,LinearFilter:Ee,LinearMipmapLinearFilter:Be,LinearMipmapNearestFilter:$r,LinearSRGBColorSpace:ai,LinearToneMapping:Yc,LinearTransfer:pr,Loader:io,LoadingManager:k0,LuminanceAlphaFormat:ba,LuminanceFormat:Ma,Material:zn,Matrix3:Vt,Matrix4:jt,MaxEquation:Ic,Mesh:Jt,MeshBasicMaterial:si,MeshDepthMaterial:w0,MeshDistanceMaterial:T0,MeshLambertMaterial:z0,MeshStandardMaterial:we,MinEquation:Pc,MirroredRepeatWrapping:ls,MixOperation:Xc,MultiplyBlending:na,MultiplyOperation:Hs,NearestFilter:De,NearestMipmapLinearFilter:Ki,NearestMipmapNearestFilter:Qc,NeutralToneMapping:Jc,NeverCompare:i0,NeverDepth:Qr,NoBlending:_n,NoColorSpace:Ke,NoToneMapping:xn,NormalBlending:Zn,NotEqualCompare:a0,NotEqualDepth:ss,Object3D:he,ObjectSpaceNormalMap:n0,OneFactor:Dc,OneMinusConstantAlphaFactor:Wc,OneMinusConstantColorFactor:Gc,OneMinusDstAlphaFactor:Oc,OneMinusDstColorFactor:zc,OneMinusSrcAlphaFactor:Jr,OneMinusSrcColorFactor:Nc,OrthographicCamera:Ua,PCFShadowMap:ks,PCFSoftShadowMap:Tc,PMREMGenerator:Ns,PerspectiveCamera:Pe,Plane:Ln,PlaneGeometry:Fn,PointLight:Os,Points:I0,PointsMaterial:P0,PolyhedronGeometry:to,QuadraticBezierCurve:O0,QuadraticBezierCurve3:ka,Quaternion:ke,RED_GREEN_RGTC2_Format:Ds,RED_RGTC1_Format:Ea,REVISION:zs,RGBADepthPacking:e0,RGBAFormat:Le,RGBAIntegerFormat:js,RGBA_ASTC_10x10_Format:As,RGBA_ASTC_10x5_Format:Es,RGBA_ASTC_10x6_Format:ws,RGBA_ASTC_10x8_Format:Ts,RGBA_ASTC_12x10_Format:Rs,RGBA_ASTC_12x12_Format:Cs,RGBA_ASTC_4x4_Format:gs,RGBA_ASTC_5x4_Format:_s,RGBA_ASTC_5x5_Format:xs,RGBA_ASTC_6x5_Format:vs,RGBA_ASTC_6x6_Format:ys,RGBA_ASTC_8x5_Format:Ms,RGBA_ASTC_8x6_Format:bs,RGBA_ASTC_8x8_Format:Ss,RGBA_BPTC_Format:rr,RGBA_ETC2_EAC_Format:ms,RGBA_PVRTC_2BPPV1_Format:fs,RGBA_PVRTC_4BPPV1_Format:hs,RGBA_S3TC_DXT1_Format:er,RGBA_S3TC_DXT3_Format:nr,RGBA_S3TC_DXT5_Format:ir,RGBFormat:ya,RGB_BPTC_SIGNED_Format:Ps,RGB_BPTC_UNSIGNED_Format:Is,RGB_ETC1_Format:ds,RGB_ETC2_Format:ps,RGB_PVRTC_2BPPV1_Format:us,RGB_PVRTC_4BPPV1_Format:cs,RGB_S3TC_DXT1_Format:tr,RGFormat:Sa,RGIntegerFormat:Ys,Ray:Ra,RedFormat:Xs,RedIntegerFormat:qs,ReinhardToneMapping:jc,RenderTarget:d0,RepeatWrapping:Mn,ReverseSubtractEquation:Cc,RingGeometry:no,SIGNED_RED_GREEN_RGTC2_Format:Us,SIGNED_RED_RGTC1_Format:Ls,SRGBColorSpace:ce,SRGBTransfer:ie,Scene:Oa,ShaderChunk:qt,ShaderLib:$e,ShaderMaterial:ze,ShortType:_a,Source:Ta,Sphere:ci,SphereGeometry:On,SplineCurve:B0,SrcAlphaFactor:Zr,SrcAlphaSaturateFactor:kc,SrcColorFactor:Uc,StaticDrawUsage:lr,SubtractEquation:Rc,SubtractiveBlending:ea,TangentSpaceNormalMap:$s,Texture:me,TextureLoader:V0,TorusGeometry:oi,Triangle:Ve,TubeGeometry:_r,UVMapping:ma,Uint16BufferAttribute:Pa,Uint32BufferAttribute:Ia,UniformsLib:yt,UniformsUtils:_0,UnsignedByteType:sn,UnsignedInt248Type:ii,UnsignedInt5999Type:xa,UnsignedIntType:Un,UnsignedShort4444Type:Vs,UnsignedShort5551Type:Ws,UnsignedShortType:Li,VSMShadowMap:nn,Vector2:Rt,Vector3:D,Vector4:re,WebGLCoordinateSystem:rn,WebGLCubeRenderTarget:v0,WebGLRenderTarget:Nn,WebGLRenderer:C0,WebGLUtils:A0,WebGPUCoordinateSystem:cr,ZeroFactor:Lc,createCanvasElement:h0},Symbol.toStringTag,{value:"Module"}));class vp extends Oa{constructor(){super();const t=new on;t.deleteAttribute("uv");const e=new we({side:xe}),n=new we,r=new Os(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Jt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Jt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Jt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Jt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Jt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new Jt(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new Jt(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new Jt(t,Ti(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Jt(t,Ti(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const p=new Jt(t,Ti(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const _=new Jt(t,Ti(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new Jt(t,Ti(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const m=new Jt(t,Ti(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ti(i){const t=new si;return t.color.setScalar(i),t}function Qn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ve(i,t=4,e=4){const n=Qn(i),r=[];for(let h=0;h<e;h++){const f=t<<h,d=new Float32Array(f*f);for(let p=0;p<d.length;p++)d[p]=n();r.push({P:f,g:d})}const s=4096,o=new Map,a=new Map;function l(h,f,d){let p=h.get(f);if(p)return p;p=new Float64Array(r.length*3);for(let _=0;_<r.length;_++){const g=r[_].P,m=f*g,y=Math.floor(m),M=m-y,x=(y%g+g)%g,A=(x+1)%g,E=_*3;p[E]=d?x*g:x,p[E+1]=d?A*g:A,p[E+2]=M*M*(3-2*M)}return h.size>=s&&h.delete(h.keys().next().value),h.set(f,p),p}let c=0,u=.5;for(let h=0;h<r.length;h++)c+=u,u*=.5;return(h,f)=>{const d=l(o,h,!1),p=l(a,f,!0);let _=0,g=.5;for(let m=0;m<r.length;m++){const y=r[m].g,M=m*3,x=d[M],A=d[M+1],E=d[M+2],R=p[M],S=p[M+1],v=p[M+2],b=y[R+x],P=y[R+A],F=y[S+x],O=y[S+A];_+=g*(b+(P-b)*E+(F-b)*v+(b-P-F+O)*E*v),g*=.5}return _/c}}function ln(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function Sn(i,t=!0,e=!0){const n=new Fi(i);return t&&(n.colorSpace=ce),e&&(n.wrapS=n.wrapT=Mn),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=Be,n}function ui(i,t){const e=i.getContext("2d"),n=e.createImageData(i.width,i.height),r=n.data,s=[0,0,0];for(let o=0;o<i.height;o++)for(let a=0;a<i.width;a++){t(a/i.width,o/i.height,s,a,o);const l=(o*i.width+a)*4;r[l]=s[0],r[l+1]=s[1],r[l+2]=s[2],r[l+3]=255}return e.putImageData(n,0,0),e}const tn=(i,t=0,e=255)=>i<t?t:i>e?e:i;function Xo(i,t,e,n={}){const r=n.size||512,s=ln(r,r),o=ve(i,2,4),a=ve(i+7,8,3),l=ve(i+13,3,4),c=n.rings||9;return ui(s,(u,h,f)=>{const d=o(u*.5,h)*3;let p=Math.sin((h*c+d)*Math.PI*2);p=Math.pow(Math.abs(p),.35);const _=a(u*.25,h*8),g=a(u*2,h*32%1);let m=.55*p+.3*_+.15*g;m=m*(.85+.3*l(u,h));for(let y=0;y<3;y++)f[y]=tn(e[y]+(t[y]-e[y])*m)}),Sn(s)}function yp(i){const e=ln(1024,1024),n=Qn(i),r=8,s=[];for(let h=0;h<r;h++)s.push({off:n(),tone:.78+n()*.35,hue:n(),len:.45+n()*.3});const o=ve(i+3,2,4),a=ve(i+9,8,3),l=ve(i+11,3,4),c=[150,98,58],u=[78,46,24];return ui(e,(h,f,d)=>{const p=Math.floor(f*r),_=s[p],g=f*r-p,m=(h+_.off)%1,y=Math.floor(m/_.len*2),M=m/_.len*2%1,x=_.tone*(y%2?.92:1.04)*(.96+.08*Math.sin(y*12.9+p)),A=o(h,f*.5+p*.13)*2.5;let E=Math.abs(Math.sin((g*3+A+y)*Math.PI*2));E=Math.pow(E,.4);const R=a(h*.5,f*4);let S=(.55*E+.45*R)*x;const v=l(h,f);S*=.9+.2*v;let b=Math.min(g,1-g)*64,P=Math.min(M,1-M)*260;const F=Math.min(1,b,P);for(let O=0;O<3;O++)d[O]=tn((u[O]+(c[O]-u[O])*S)*(.25+.75*F)+(_.hue-.5)*(O===0?12:O===1?6:0))}),Sn(e)}function Kl(i,t){const n=ln(512,512),r=ve(i,4,5),s=ve(i+1,16,2);return ui(n,(o,a,l)=>{const c=r(o,a),u=s(o,a),h=.88+.16*c+.05*u;l[0]=tn(t[0]*h),l[1]=tn(t[1]*h),l[2]=tn(t[2]*(h-.02))}),Sn(n)}function Mp(i){const e=ln(512,512),n=ve(i,6,5),r=ve(i+4,24,2);return ui(e,(s,o,a)=>{const l=Math.floor(o*4),c=(s+l%2*.5)%1,u=o*4-l,h=c*2-Math.floor(c*2),f=Math.min(1,Math.min(u,1-u)*40,Math.min(h,1-h)*60),d=(.8+.25*n(s,o)+.08*r(s,o))*(.55+.45*f);a[0]=tn(196*d),a[1]=tn(178*d),a[2]=tn(150*d)}),Sn(e)}function Zl(i,t){const n=ln(512,512),r=ve(i,64,2),s=ve(i+2,8,4),o=ve(i+5,3,4);return ui(n,(a,l,c)=>{const u=r(a,l),f=Math.abs(s(a,l)-.5)<.015?.7:1,d=Math.max(0,o(a,l)-.52)*3.2,p=(.82+.3*u)*f;for(let _=0;_<3;_++){const g=t[_]+(_===0?70:_===1?52:36);c[_]=tn((t[_]*(1-d)+g*d)*p)}}),Sn(n)}function qo(i,t,e){const r=ln(256,256),s=ve(i,8,3);return ui(r,(o,a,l,c,u)=>{const h=((c+u)%4<2?1:.92)*(c%2?1:.96),f=e&&Math.sin(o*Math.PI*2*6)>.6?.82:1,d=h*f*(.9+.15*s(o,a));for(let p=0;p<3;p++)l[p]=tn(t[p]*d)}),Sn(r)}function bp(i){const n=ln(512,768),r=n.getContext("2d");r.fillStyle="#7a2a22",r.fillRect(0,0,512,768);const s=(h,f,d)=>{r.strokeStyle=d,r.lineWidth=f,r.strokeRect(h,h,512-h*2,768-h*2)};s(14,22,"#2a2440"),s(34,6,"#c9a46a"),s(52,26,"#3c4a5c"),s(70,5,"#c9a46a"),r.fillStyle="#d2b07a";for(let h=0;h<26;h++){const f=h/26,d=[[f*512,52],[460,f*768],[512-f*512,716],[52,768-f*768]];for(const[p,_]of d)r.save(),r.translate(p,_),r.rotate(Math.PI/4),r.fillRect(-5,-5,10,10),r.restore()}for(let h=110;h<668;h+=48)for(let f=110;f<412;f+=48)r.fillStyle=(f+h)%96===0?"#2f3a52":"#a8742f",r.save(),r.translate(f,h),r.rotate(Math.PI/4),r.fillRect(-7,-7,14,14),r.restore(),r.fillStyle="#e0c590",r.fillRect(f-2,h-2,4,4);r.save(),r.translate(512/2,768/2);const o=[[150,"#2a2440"],[130,"#c9a46a"],[118,"#3c4a5c"],[86,"#8e3a2a"],[60,"#d8bd85"],[36,"#2a2440"]];for(const[h,f]of o)r.fillStyle=f,r.beginPath(),r.ellipse(0,0,h*.75,h,0,0,Math.PI*2),r.fill();r.restore();const a=r.getImageData(0,0,512,768),l=ve(i+3,4,4),c=ve(i+5,64,1);for(let h=0;h<768;h++)for(let f=0;f<512;f++){const d=(h*512+f)*4,p=.78+.28*l(f/512,h/768)+.08*c(f/512,h/768),_=Math.max(0,l(f/512+.3,h/768)-.58)*1.6;for(let g=0;g<3;g++)a.data[d+g]=tn(a.data[d+g]*p*(1-_)+150*_)}return r.putImageData(a,0,0),Sn(n,!0,!1)}function Sp(i){const n=ln(512,256),r=n.getContext("2d"),s=Qn(i),o=ve(i,16,3);ui(n,(c,u,h)=>{const f=200+40*o(c,u);h[0]=h[1]=h[2]=f});const a="#d9a94a",l=32;for(let c=0;c<8;c++){const u=c*l;r.save(),r.beginPath(),r.rect(u,0,l,256),r.clip();const h=r.createLinearGradient(u,0,u+l,0);if(h.addColorStop(0,"rgba(0,0,0,0.35)"),h.addColorStop(.2,"rgba(0,0,0,0)"),h.addColorStop(.8,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,0.35)"),r.fillStyle=h,r.fillRect(u,0,l,256),r.fillStyle=a,c===0&&(r.fillRect(u,14,l,2),r.fillRect(u,240,l,2)),c===1){for(const f of[40,90,140,190])r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(u,f,l,6),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(u,f,l,2);r.fillStyle="#2a1a14",r.fillRect(u+3,52,l-6,30),r.fillStyle=a;for(let f=0;f<3;f++)r.fillRect(u+7,60+f*7,l-14-s()*6,2)}if(c===2){for(let f=0;f<6;f++)r.fillRect(u+8,50+f*9,l-16-s()*8,3);r.fillRect(u,226,l,6)}if(c===3){r.fillStyle="rgba(0,0,0,0.5)",r.fillRect(u,0,l,34),r.fillRect(u,222,l,34),r.fillStyle=a,r.fillRect(u,34,l,2),r.fillRect(u,220,l,2);for(let f=0;f<4;f++)r.fillRect(u+9,80+f*8,l-18,2)}if(c===4){r.fillStyle="rgba(255,255,255,0.25)",r.fillRect(u,0,l,256),r.fillStyle="rgba(20,20,20,0.75)";for(let f=0;f<10;f++)r.fillRect(u+12,40+f*12,3+s()*4,7)}if(c===5){for(const f of[8,16,24,230,238,246])r.fillRect(u,f,l,2);for(let f=0;f<5;f++)r.beginPath(),r.arc(u+l/2,60+f*30,3,0,Math.PI*2),r.fill();r.fillStyle="#1d1d1d",r.fillRect(u+4,34,l-8,18),r.fillStyle=a,r.fillRect(u+8,41,l-16,3)}if(c===6){r.fillStyle="rgba(255,255,255,0.3)";for(let f=0;f<40;f++)r.fillRect(u+s()*l,s()<.5?s()*30:256-s()*30,2+s()*4,1+s()*2);r.fillStyle=a,r.fillRect(u+10,70,l-20,3)}c===7&&(r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(u,20,l,10),r.fillRect(u,226,l,10),r.fillStyle="rgba(240,235,220,1)",r.fillRect(u+5,60,l-10,34),r.fillStyle="rgba(40,30,20,0.8)",r.fillRect(u+8,70,l-16,2),r.fillRect(u+8,78,l-18,2)),r.restore()}for(let c=256;c<384;c++){const u=215+(Math.sin(c*2.7)*.5+.5)*30*s();r.fillStyle=`rgb(${u},${u},${u-4})`,r.fillRect(c,0,1,256)}return Sn(n,!0,!1)}function Ep(i){const e=ln(512,512),n=e.getContext("2d"),r=Qn(i);return[["#d8b27a","#8a6a4a","#4b5a3a","#2e3a2a"],["#9fb3c0","#6a7a6a","#3e4a3a","#22281e"],["#e8c28a","#b07a4a","#5a3a2a","#2a1e18"],["#7a8aa0","#5a6058","#3a3a30","#1e1e18"]].forEach((o,a)=>{const l=a%2*256,c=Math.floor(a/2)*256,u=n.createLinearGradient(0,c,0,c+256);u.addColorStop(0,o[0]),u.addColorStop(.55,o[1]),u.addColorStop(1,o[3]),n.fillStyle=u,n.fillRect(l,c,256,256);for(let f=0;f<3;f++){n.fillStyle=o[1+f],n.beginPath(),n.moveTo(l,c+256);const d=120+f*45;for(let p=0;p<=16;p++)n.lineTo(l+p*16,c+d+Math.sin(p*.7+f*2+a)*18+r()*10);n.lineTo(l+256,c+256),n.fill()}a===2&&(n.fillStyle="rgba(255,230,170,0.8)",n.beginPath(),n.arc(l+180,c+90,18,0,7),n.fill());const h=n.createRadialGradient(l+128,c+128,40,l+128,c+128,190);h.addColorStop(0,"rgba(60,40,10,0)"),h.addColorStop(1,"rgba(40,25,5,0.55)"),n.fillStyle=h,n.fillRect(l,c,256,256)}),Sn(e,!0,!1)}function wp(){const i=ln(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Fi(i)}function so(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Qt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Jl(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);const p=Jl(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Jl(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new ge(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<e;p++){const _=u.getComponent(f,p);a.setComponent(f+h,p,_)}}else o.set(u.array,l);l+=u.count*e}return r!==void 0&&(a.gpuType=r),a}function Tp(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,M=a.length;y<M;y++){const x=a[y],A=i.attributes[x];l[x]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const E=i.morphAttributes[x];E&&(c[x]||(c[x]=[]),E.forEach((R,S)=>{const v=new R.array.constructor(R.count*R.itemSize);c[x][S]=new R.constructor(v,R.itemSize,R.normalized)}))}const d=t*.5,p=Math.log10(1/t),_=Math.pow(10,p),g=d*_;for(let y=0;y<s;y++){const M=n?n.getX(y):y;let x="";for(let A=0,E=a.length;A<E;A++){const R=a[A],S=i.getAttribute(R),v=S.itemSize;for(let b=0;b<v;b++)x+=`${~~(S[h[b]](M)*_+g)},`}if(x in e)u.push(e[x]);else{for(let A=0,E=a.length;A<E;A++){const R=a[A],S=i.getAttribute(R),v=i.morphAttributes[R],b=S.itemSize,P=l[R],F=c[R];for(let O=0;O<b;O++){const N=h[O],Y=f[O];if(P[Y](o,S[N](M)),v)for(let k=0,$=v.length;k<$;k++)F[k][Y](o,v[k][N](M))}}e[x]=o,u.push(o),o++}}const m=i.clone();for(const y in i.attributes){const M=l[y];if(m.setAttribute(y,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),y in c)for(let x=0;x<c[y].length;x++){const A=c[y][x];m.morphAttributes[y][x]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return m.setIndex(u),m}function Ap(i,t,e,n,{bulge:r=0,dish:s=0,grain:o=!1}={}){const a=[i/2,t/2,e/2],l=Math.min(n,...a),c=[],u=[],h=[],f=[],d=[[2,1,0,1],[2,1,0,-1],[0,2,1,1],[0,2,1,-1],[0,1,2,1],[0,1,2,-1]],p=g=>o?[-a[g],-a[g]+l,0,a[g]-l,a[g]]:[-a[g],-a[g]+l*.3,-a[g]+l,0,a[g]-l,a[g]-l*.3,a[g]];for(const[g,m,y,M]of d){const x=p(g),A=p(m),E=c.length/3;for(let R=0;R<A.length;R++)for(let S=0;S<x.length;S++){const v=[0,0,0];v[g]=x[S],v[m]=A[R],v[y]=M*a[y];const b=v.map((N,Y)=>Math.max(-a[Y]+l,Math.min(a[Y]-l,N))),P=new D(...v.map((N,Y)=>N-b[Y])).normalize(),F=b.map((N,Y)=>N+P.getComponent(Y)*l);if(y===1&&M===1){const N=F[0]/a[0],Y=F[2]/a[2];F[1]+=r*Math.max(0,1-N*N)*Math.max(0,1-Y*Y)-s*Math.exp(-5*N*N-7*(Y+.08)**2)}c.push(...F),u.push(...P.toArray());const O=a.indexOf(Math.max(...a));o?h.push(F[O]/.75+.5,F[O===g?m:g]/.18+.5):h.push(S/(x.length-1),R/(A.length-1))}for(let R=0;R<A.length-1;R++)for(let S=0;S<x.length-1;S++){const v=x.length,b=E+R*v+S,P=new D;P.setComponent(g,1);const F=new D;F.setComponent(m,1),P.cross(F).getComponent(y)*M>0?f.push(b,b+1,b+v+1,b,b+v+1,b+v):f.push(b,b+v+1,b+1,b,b+v,b+v+1)}}const _=new Qt;return _.setAttribute("position",new Nt(c,3)),_.setAttribute("normal",new Nt(u,3)),_.setAttribute("uv",new Nt(h,2)),_.setIndex(f),(r||s)&&_.computeVertexNormals(),_}function Rp(i,t,e=28,n=6,r=!1){const s=new Qs(i.map(o=>new D(...o)),r,"centripetal");return new _r(s,e,t,n,r)}function Yo(i,t,e,n=0,r=.05){const s=[];for(const[o,a,l]of[[i/2-r,t/2-r,0],[-i/2+r,t/2-r,Math.PI/2],[-i/2+r,-t/2+r,Math.PI],[i/2-r,-t/2+r,Math.PI*1.5]])for(let c=0;c<=4;c++){const u=l+c/4*Math.PI/2;s.push([o+Math.cos(u)*r,e,n+a+Math.sin(u)*r])}return s}function Ql(i,t=!1){const e=t?[[0,0,-.338,.033],[.1,.1,-.333,.036],[.2,.21,-.314,.042],[.3,.35,-.3,.052]]:[[0,0,.326,.038],[.1,.085,.319,.037],[.2,.18,.295,.043],[.3,.35,.285,.057]],n=[],r=[],s=[],o=[[-1,-.76],[-.76,-1],[.76,-1],[1,-.76],[1,.76],[.76,1],[-.76,1],[-1,.76]];for(let l=0;l<e.length;l++){const[,c,u,h]=e[l],f=i*(.313+(t?0:.018*(1-l/3)));for(let d=0;d<8;d++)if(n.push(f+o[d][0]*h/2,c,u+o[d][1]*h/2),r.push(c/.65,d/8),l<3){const p=l*8+d,_=l*8+(d+1)%8;s.push(p,_+8,_,p,p+8,_+8)}}for(let l=1;l<7;l++)s.push(0,l,l+1,24,24+l+1,24+l);const a=new Qt;return a.setAttribute("position",new Nt(n,3)),a.setAttribute("uv",new Nt(r,2)),a.setIndex(s),a.computeVertexNormals(),a}function Cp(i){const t=[[.74,.318,-.3,-.12,.06],[.84,.345,-.327,-.06,.063],[1.02,.365,-.352,-.105,.061],[1.18,.341,-.373,-.205,.05],[1.225,.314,-.377,-.287,.025]],e=[],n=[],r=[];for(let o=0;o<t.length;o++){const[a,l,c,u,h]=t[o];for(let f=0;f<12;f++){const d=f/12*Math.PI*2;if(e.push(i*(l+Math.cos(d)*h/2),a,(c+u)/2+Math.sin(d)*(u-c)/2),n.push(f/12,o/(t.length-1)),o<t.length-1){const p=o*12+f,_=o*12+(f+1)%12;i>0?r.push(p,p+12,_,_,p+12,_+12):r.push(p,_,p+12,_,_+12,p+12)}}}for(let o=1;o<11;o++)i>0?r.push(0,o,o+1,48,48+o+1,48+o):r.push(0,o+1,o,48,48+o,48+o+1);const s=new Qt;return s.setAttribute("position",new Nt(e,3)),s.setAttribute("uv",new Nt(n,2)),s.setIndex(r),s.computeVertexNormals(),s}const Oe=256,jo=i=>Math.max(0,Math.min(255,Math.round(i)));function Qi(i,t,e){let n=Math.imul(i+131*e,374761393)^Math.imul(t+e,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function Wr(i,t,e){const n=Math.floor(i),r=Math.floor(t),s=i-n,o=t-r,a=s*s*(3-2*s),l=o*o*(3-2*o);return(Qi(n,r,e)*(1-a)+Qi(n+1,r,e)*a)*(1-l)+(Qi(n,r+1,e)*(1-a)+Qi(n+1,r+1,e)*a)*l}function Xr(i,t,e){const n=new Uint8Array(Oe*Oe*4);for(let s=0;s<Oe;s++)for(let o=0;o<Oe;o++){const a=t(o,s),l=(s*Oe+o)*4;n[l]=jo(a[0]),n[l+1]=jo(a[1]),n[l+2]=jo(a[2]),n[l+3]=255}const r=new gr(n,Oe,Oe,Le);return r.name=`reading-chairs/${i}`,r.colorSpace=e?ce:Ke,r.wrapS=r.wrapT=Mn,r.magFilter=Ee,r.minFilter=Be,r.generateMipmaps=!0,r.needsUpdate=!0,r.addEventListener("dispose",()=>{r.image=null}),r}function Pp(){const i=Xr("leather-patina",(o,a)=>{const l=o/(Oe-1),c=a/(Oe-1),u=Math.exp(-Math.min(l,1-l,c,1-c)*20),h=Wr(o/48,a/48,17)-.5,f=Wr(o/2,a/2,71)-.5,d=207+h*17+f*9+u*18;return[d+5,d+1,d-5]},!0),t=Xr("leather-physical",(o,a)=>{const l=Wr(o/2.2,a/2.2,71),c=Qi(o,a,41),u=Math.sin(a*.16+Wr(o/31,a/40,24)*6)*.04;return[117+l*28+c*9+u*30,180+l*27,128]},!1),e=Xr("walnut-grain",(o,a)=>{const l=o/Oe*Math.PI*2,c=a/Oe*Math.PI*2,u=c*18+.7*Math.sin(l)+.18*Math.sin(3*l+c),h=Math.sin(u)*5+Math.sin(u*2+.2)*2,f=Math.pow(.5+.5*Math.sin(c*77+.18*Math.sin(2*l)),12)*7,d=Math.sin(c*3+.3*Math.sin(l))*5;return[101+h+d-f,66+h*.68+d*.6-f,41+h*.44+d*.4-f]},!0),n=Xr("walnut-physical",(o,a)=>{const l=o/Oe*Math.PI*2,c=a/Oe*Math.PI*2,u=Math.sin(c*77+.18*Math.sin(l*2));return[125+u*7,181+u*8,128]},!1),r=(o,a)=>{const l=new we({name:`reading-chairs/${o}`,color:a,map:i,bumpMap:t,bumpScale:.0012,roughnessMap:t,roughness:.86,metalness:0});return l.userData.readingChair=!0,l},s={oxblood:r("oxblood",8736836),tobacco:r("tobacco",10056782),wood:new we({name:"reading-chairs/walnut",map:e,bumpMap:n,bumpScale:65e-5,roughnessMap:n,roughness:.78}),thread:new we({name:"reading-chairs/waxed-thread",color:9204308,roughness:.94}),brass:new we({name:"reading-chairs/aged-brass",color:8479549,metalness:.72,roughness:.57})};for(const o of Object.values(s))o.userData.readingChair=!0;return s.thread.userData.noShadow=!0,s.brass.userData.noShadow=!0,s}const $o=new WeakMap;function Ip(i,t="oxblood"){if(!["oxblood","tobacco"].includes(t))throw new Error(`Unknown reading chair finish: ${t}`);let e=$o.get(i.b);if(!e){e=Pp(),$o.set(i.b,e);for(const c of Object.values(e))c.addEventListener("dispose",()=>$o.delete(i.b))}const n=e[t],r=(c,u,h=0,f=0,d=0,p=0,_=0,g=0)=>i.geo(c,u,h,f,d,p,_,g),s=(c,u,h,f,d={},p=[0,0,0])=>r(c,Ap(...u,h,d),...f,...p),o=(c,u,h,f=28,d=!1)=>r(c,Rp(u,h,f,6,d));for(const c of[-1,1])r(e.wood,Ql(c)),r(e.wood,Ql(c,!0)),s(e.wood,[.06,.102,.635],.008,[c*.315,.339,-.005],{grain:!0});s(e.wood,[.63,.11,.065],.009,[0,.34,.286],{grain:!0}),s(e.wood,[.63,.092,.055],.007,[0,.335,-.304],{grain:!0}),s(n,[.625,.092,.6],.023,[0,.39,-.005]),s(n,[.619,.128,.564],.037,[0,.468,.023],{bulge:.011,dish:.014}),o(n,Yo(.62,.565,.482,.023,.037),.0033,48,!0),o(n,Yo(.611,.556,.428,.023,.037),.0024,48,!0);for(let c=0;c<31;c++){const u=-.259+c*.0172,h=new bn(85e-5,85e-5,.006,4);r(e.thread,h,u,.462,.3054,0,0,Math.PI/2)}s(n,[.674,.72,.112],.046,[0,.854,-.321],{},[-.1,0,0]),s(n,[.559,.555,.075],.035,[0,.877,-.251],{},[-.1,0,0]),s(n,[.526,.116,.099],.043,[0,.589,-.228],{},[-.1,0,0]),o(n,[[-.242,.629,-.184],[-.27,.671,-.184],[-.27,1.082,-.226],[-.229,1.143,-.237],[0,1.151,-.238],[.229,1.143,-.237],[.27,1.082,-.226],[.27,.671,-.184],[.242,.629,-.184],[0,.619,-.184]],.0028,64,!0);const l=[[-.322,.365,-.339],[-.342,.75,-.36],[-.341,1.14,-.392],[-.302,1.203,-.394],[-.18,1.221,-.394],[0,1.227,-.394],[.18,1.221,-.394],[.302,1.203,-.394],[.341,1.14,-.392],[.342,.75,-.36],[.322,.365,-.339]];o(e.wood,l,.014,72);for(const c of[-1,1]){r(n,Cp(c)),s(e.wood,[.039,.316,.052],.007,[c*.355,.523,.251],{grain:!0},[0,0,c*-.038]),s(e.wood,[.04,.328,.047],.007,[c*.347,.525,-.208],{grain:!0},[-.08,0,0]),s(e.wood,[.112,.048,.586],.019,[c*.363,.684,.012],{grain:!0},[.035,0,0]),s(n,[.131,.1,.589],.043,[c*.363,.743,.018],{},[.035,0,0]);const u=Yo(.132,.59,.743,.018,.043).map(([h,f,d])=>[h+c*.363,f-(d-.018)*.035,d]);o(n,u,.0026,40,!0),o(n,[[c*.318,.751,-.123],[c*.345,.843,-.063],[c*.365,1.021,-.108],[c*.341,1.18,-.208],[c*.314,1.224,-.287]],.003,32);for(let h=0;h<7;h++){const f=new On(.0035,6,4);f.scale(.42,1,1),r(e.brass,f,c*.314,.398,-.225+h*.071)}for(const h of[.26,-.28]){const f=new bn(.0045,.0045,.0015,8);r(e.wood,f,c*.346,.34,h,0,0,Math.PI/2)}}}const Y0=Object.freeze({origin:Object.freeze([-5.6,4.2,-8.85]),size:Object.freeze([1.4,.8,.7]),worktopY:.785,paper:Object.freeze({center:Object.freeze([.05,.787,.1]),yaw:.2}),notes:Object.freeze({x0:-.29,x1:-.13,z0:-.025,z1:.265,y:.7848}),legacyRandomDraws:20});function Lp(i){let t=i>>>0;return()=>(t=Math.imul(1664525,t)+1013904223|0,(t>>>0)/4294967296)}function tc(i,t,e,n,r=!1){const s=new gr(i,t,e,Le);return s.name=n,s.wrapS=s.wrapT=Mn,s.magFilter=Ee,s.minFilter=Be,s.generateMipmaps=!0,r&&(s.colorSpace=ce),s.needsUpdate=!0,s}function Dp(){const i=Lp(1463897166),t=512,e=256,n=new Uint8Array(t*e*4);for(let l=0;l<e;l++)for(let c=0;c<t;c++){const u=c/t*Math.PI*2,h=l/e*Math.PI*2,f=.32*Math.sin(u)+.1*Math.sin(2*u+3*h),d=Math.sin(h*27+f*4),p=Math.pow(Math.max(0,Math.sin(h*81+f*8)),9),_=Math.sin(h*3+.6*Math.sin(u)),g=1+.095*d-.065*p+.11*_+(i()-.5)*.025,m=(l*t+c)*4;n[m]=Math.round(119*g),n[m+1]=Math.round(75*g),n[m+2]=Math.round(43*g),n[m+3]=255}const r=tc(n,t,e,"Desk • quarter-cut walnut",!0),s=new Uint8Array(128*128*4);for(let l=0;l<s.length;l+=4){const c=Math.round(124+(i()-.5)*25);s[l]=s[l+1]=s[l+2]=c,s[l+3]=255}const o=tc(s,128,128,"Desk • fine hide grain");o.repeat.set(6,2);const a=(l,c)=>{const u=new we(c);return u.name=`Desk • ${l}`,u.userData.upstairsDesk=!0,u};return{walnut:a("walnut",{map:r,bumpMap:r,bumpScale:3e-4,roughness:.43}),recess:a("recessed walnut",{map:r,color:10652791,bumpMap:r,bumpScale:25e-5,roughness:.53}),brass:a("aged brass",{color:12163936,metalness:.83,roughness:.34}),leather:a("bottle-green hide",{color:2704442,bumpMap:o,bumpScale:16e-5,roughness:.74}),ink:a("ebonite and ink",{color:1056288,metalness:.13,roughness:.26}),cedar:a("endgrain and linen",{color:12953717,roughness:.8})}}function Up(i,t,e,n=.002){const r=[i/2,t/2,e/2],s=Math.min(n,...r.map(c=>c*.45)),o=[];function a(c,u){const h=new D(...c[0]),f=new D(...c[1]),d=new D(...c[2]);f.sub(h).cross(d.sub(h)).dot(new D(...u))<0&&c.reverse();for(let p=1;p<c.length-1;p++)o.push(...c[0],...c[p],...c[p+1])}for(let c=0;c<3;c++)for(const u of[-1,1]){const h=(c+1)%3,f=(c+2)%3,d=[0,0,0];d[c]=u,a([[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,_])=>{const g=[0,0,0];return g[c]=u*r[c],g[h]=p*(r[h]-s),g[f]=_*(r[f]-s),g}),d)}for(let c=0;c<3;c++)for(let u=c+1;u<3;u++){const h=3-c-u;for(const f of[-1,1])for(const d of[-1,1]){const p=[0,0,0];p[c]=f,p[u]=d,a([[0,-1],[0,1],[1,1],[1,-1]].map(([_,g])=>{const m=[0,0,0];return m[c]=f*(r[c]-_*s),m[u]=d*(r[u]-(1-_)*s),m[h]=g*(r[h]-s),m}),p)}}for(const c of[-1,1])for(const u of[-1,1])for(const h of[-1,1]){const f=[c,u,h];a([0,1,2].map(d=>r.map((p,_)=>f[_]*(p-(_===d?0:s)))),f)}const l=new Qt;return l.setAttribute("position",new Nt(o,3)),l.computeVertexNormals(),l}function Np(i,t,e){const n=i.attributes.position,r=i.attributes.normal,s=new Float32Array(n.count*2),o={x:0,y:1,z:2}[t];for(let a=0;a<n.count;a++){const l=[n.getX(a),n.getY(a),n.getZ(a)],c=[Math.abs(r.getX(a)),Math.abs(r.getY(a)),Math.abs(r.getZ(a))],u=c.indexOf(Math.max(...c)),h=u===o?(o+1)%3:o,f=[0,1,2].find(d=>d!==h&&d!==u);s[a*2]=l[h]/.7+e,s[a*2+1]=l[f]/.2+e*.37}return i.setAttribute("uv",new ge(s,2)),i}function Fp(i){const t=i.attributes.position,e=[],n=new D,r=new D,s=new D;for(let a=0;a<t.count;a+=3)n.fromBufferAttribute(t,a),r.fromBufferAttribute(t,a+1),s.fromBufferAttribute(t,a+2),r.sub(n).cross(s.sub(n)).lengthSq()>4e-24&&e.push(a,a+1,a+2);if(e.length===t.count)return i;const o=new Qt;for(const[a,l]of Object.entries(i.attributes)){const c=new Float32Array(e.length*l.itemSize);for(let u=0;u<e.length;u++)for(let h=0;h<l.itemSize;h++)c[u*l.itemSize+h]=l.array[e[u]*l.itemSize+h];o.setAttribute(a,new ge(c,l.itemSize))}return i.dispose(),o}function Op(){const i=Dp(),t=new Map,e=[];let n=0;function r(f,d,p,_,g,m=[0,0,0],y="x",M=f){let x=d;x.index&&(x=d.toNonIndexed(),d.dispose()),x=Fp(x),x.clearGroups(),Np(x,y,n+=.137);const A=new jt().makeRotationFromEuler(new Te(...m));A.setPosition(p,_,g),x.applyMatrix4(A),x.computeBoundingBox(),e.push({name:M,material:f,triangles:x.attributes.position.count/3,bounds:[x.boundingBox.min.toArray(),x.boundingBox.max.toArray()]}),t.has(f)||t.set(f,[]),t.get(f).push(x)}const s=(f,d,p,_,g,m,y,M=.002,x="x",A=f,E)=>r(f,Up(d,p,_,M),g,m,y,E,x,A),o=(f,d,p,_,g,m,y,M=16,x,A=f)=>r(f,new bn(d,p,_,M),g,m,y,x,"y",A),a=(f,d,p,_,g,m,y,M=f,x=Math.PI*2)=>r(f,new oi(d,p,5,20,x),_,g,m,y,"x",M);for(const f of[-1,1]){const d=f*.5;s("recess",.344,.642,.602,d,.379,-.005,.003,"y","pedestal carcass"),s("walnut",.356,.032,.622,d,.026,-.004,.003,"x","plinth foot"),s("walnut",.348,.02,.614,d,.05,-.004,.002,"x","plinth bevel"),s("walnut",.352,.029,.626,d,.7055,-.004,.002,"x","pedestal crown rail");for(const p of[-1,1]){s("walnut",.024,.622,.027,d+p*.164,.376,.305,.0015,"y","front stile");const _=d+p*.176;s("walnut",.006,.474,.432,_,.368,-.005,.001,"y","side field");for(const g of[-.267,.257])s("walnut",.01,.602,.028,_,.373,g,.0015,"y","side upright");for(const g of[.085,.66])s("walnut",.01,.027,.55,_,g,-.005,.0015,"z","side crossrail")}for(let p=0;p<3;p++){const _=.16+p*.22;s("walnut",.302,.191,.019,d,_,.3185,.002,"x","drawer cockbead"),s("recess",.285,.174,.005,d,_,.33,.001,"x","drawer inset"),s("walnut",.271,.16,.003,d,_,.334,.001,"x","drawer figured field");for(const g of[-.034,.034])o("brass",.009,.01,.003,d+g,_+.012,.338,12,[Math.PI/2,0,0],"handle rosette"),o("brass",.003,.003,.009,d+g,_+.012,.345,8,[Math.PI/2,0,0],"handle pivot"),s("ink",.005,8e-4,5e-4,d+g,_+.012,.3496,1e-4,"x","screw slot");a("brass",.034,.0025,d,_+.012,.35,[0,0,Math.PI],"hanging bail",Math.PI)}}s("recess",.64,.103,.578,0,.674,-.017,.003,"x","pencil drawer case"),s("walnut",.594,.086,.022,0,.672,.284,.002,"x","pencil drawer front"),s("recess",.558,.054,.004,0,.672,.297,.001,"x","pencil drawer inset");for(const f of[-.024,.024])o("brass",.004,.005,.015,f,.66,.305,10,[Math.PI/2,0,0],"pencil pull post");o("brass",.003,.003,.054,0,.66,.312,12,[0,0,Math.PI/2],"pencil pull bar"),o("brass",.007,.007,.002,0,.69,.301,14,[Math.PI/2,0,0],"key escutcheon"),s("ink",.002,.005,6e-4,0,.69,.3022,1e-4,"y","keyhole"),s("recess",1.356,.012,.656,0,.719,0,.002,"x","top shadow quirk"),s("walnut",1.378,.012,.678,0,.731,0,.003,"x","lower thumb bead"),s("walnut",1.4,.045,.7,0,.7595,0,.003,"x","desktop core"),s("walnut",1.4,.003,.27,0,.7835,-.215,.001,"x","rear writing rail"),s("walnut",1.4,.003,.06,0,.7835,.32,.001,"x","front writing rail");for(const f of[-1,1])s("walnut",.36,.003,.37,f*.52,.7835,.105,.001,"z","side writing rail");s("leather",.68,.0028,.37,0,.7834,.105,5e-4,"x","inset leather writing pad");for(const f of[-.078,.288])s("brass",.675,55e-5,.0012,0,.78465,f,15e-5,"x","pad edge fillet");for(const f of[-.338,.338])s("brass",.0012,55e-5,.365,f,.78465,.105,15e-5,"z","pad edge fillet");for(const f of[-.061,.271])s("ink",.641,25e-5,7e-4,0,.78486,f,5e-5,"x","blind pad rule");for(const f of[-.321,.321])s("ink",7e-4,25e-5,.332,f,.78486,.105,5e-5,"z","blind pad rule");o("brass",.031,.033,.0025,-.15,.78625,-.15,20,void 0,"inkwell coaster");const l=[[0,0],[.025,0],[.029,.006],[.028,.027],[.019,.036],[.019,.044],[.0125,.044],[.0125,.031],[0,.031]];r("ink",new Oi(l.map(([f,d])=>new Rt(f,d)),24),-.15,.7875,-.15,void 0,"y","hollow inkwell"),a("brass",.016,.0015,-.15,.8315,-.15,[Math.PI/2,0,0],"inkwell neck band"),o("ink",.0124,.0124,6e-4,-.15,.823,-.15,20,void 0,"recessed ink meniscus"),o("brass",.02,.021,.006,-.087,.788,-.178,20,void 0,"loose inkwell lid"),o("ink",.0155,.0155,.001,-.087,.7913,-.178,20,void 0,"lid inset"),s("recess",.282,.009,.074,.1,.7895,-.253,.003,"x","pen tray base"),s("leather",.262,.001,.054,.1,.7945,-.253,.001,"x","pen tray lining");for(const f of[-.286,-.22])s("walnut",.282,.008,.008,.1,.798,f,.002,"x","pen tray rim");for(const f of[-.037,.237])s("walnut",.008,.008,.058,f,.798,-.253,.002,"z","pen tray end");o("walnut",.0025,.004,.114,.122,.799,-.265,12,[0,0,-Math.PI/2],"dip pen shaft"),o("ink",.004,.0032,.03,.05,.799,-.265,12,[0,0,Math.PI/2],"dip pen grip"),o("brass",.0042,.0042,.006,.031,.799,-.265,12,[0,0,Math.PI/2],"dip pen collar");const c=new Qt,u=[.004,0,0,.027,0,-.004,.027,.0024,0,.004,0,0,.027,.0024,0,.027,0,.004,.004,0,0,.027,0,.004,.027,0,-.004,.027,0,-.004,.027,0,.004,.027,.0024,0];for(let f=0;f<u.length;f+=9)for(let d=0;d<3;d++)[u[f+3+d],u[f+6+d]]=[u[f+6+d],u[f+3+d]];c.setAttribute("position",new Nt(u,3)),c.computeVertexNormals(),r("brass",c,0,.799,-.265,void 0,"x","split brass nib"),s("ink",.013,35e-5,45e-5,.019,.801,-.265,1e-4,"x","nib slit"),o("ink",7e-4,7e-4,3e-4,.024,.8013,-.265,8,void 0,"nib breather"),o("walnut",.0031,.0031,.133,.116,.7981,-.24,6,[0,0,Math.PI/2],"hexagonal pencil"),o("cedar",0,.0031,.017,.041,.7981,-.24,6,[0,0,Math.PI/2],"sharpened cedar"),o("ink",0,9e-4,.004,.0315,.7981,-.24,6,[0,0,Math.PI/2],"graphite point"),o("brass",.0032,.0032,.004,.1845,.7981,-.24,8,[0,0,Math.PI/2],"pencil end ferrule");const h=new gn;h.name="Upstairs writing desk • walnut and brass";for(const[f,d]of t){const p=so(d,!1),_=Tp(p,1e-6);p.dispose();for(const m of d)m.dispose();_.computeBoundingBox(),_.computeBoundingSphere();const g=new Jt(_,i[f]);g.name=`Upstairs desk • ${f}`,g.castShadow=g.receiveShadow=!0,g.matrixAutoUpdate=!1,g.updateMatrix(),h.add(g)}return h.userData.parts=e,h.userData.spec=Y0,h}function Bp(i){const t=Op();for(let e=0;e<Y0.legacyRandomDraws;e++)i.b.rand();for(const e of t.children)i.geo(e.material,e.geometry,0,0,0)}const Bs=Object.freeze({center:Object.freeze([-.5,.008,1.9]),width:3.4,length:5.6,clothLength:5.4,fringeBundlesPerEnd:60,textureSize:Object.freeze([1024,2048]),detailSize:Object.freeze([512,1024])}),ec=i=>{let t=Math.imul(i^1530439581,73244475);return t=Math.imul(t^t>>>16,73244475),((t^t>>>16)>>>0)/4294967296};function j0(){const i=[],t=[],e=[];return{positions:i,uvs:t,indices:e,vertex(n,r,s,o,a){const l=i.length/3;return i.push(n,r,s),t.push(o,a),l},face(n,r,s){e.push(n,r,s)},quad(n,r,s,o){e.push(n,r,s,n,s,o)},finish(n){const r=new Qt;return r.name=n,r.setAttribute("position",new Nt(i,3)),r.setAttribute("uv",new Nt(t,2)),r.setIndex(e),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),r}}}function nc(i,t){const e=[-i,-i+.009,-i+.024,-i+.055];for(let n=1;n<t;n++)e.push(-i+.055+(2*i-.11)*n/t);return e.push(i-.055,i-.024,i-.009,i),e}function zp(){const i=j0(),t=Bs.width/2,e=Bs.clothLength/2,n=nc(t,16),r=nc(e,26),s=n.length,o=.034;for(const h of r)for(const f of n){const d=Math.max(0,Math.abs(h)-(e-o)),p=t-o+Math.sqrt(Math.max(0,o*o-d*d)),_=f*p/t,g=Math.min(t-Math.abs(f),e-Math.abs(h)),m=Math.min(1,g/.024),y=6e-4*Math.sin(_*2.4+.8)*Math.sin(h*1.9),M=3e-4+.0037*Math.sin(m*Math.PI/2)+y*m;i.vertex(_,M,h,(_+t)/(2*t),(h+e)/(2*e))}for(let h=0;h<r.length-1;h++)for(let f=0;f<s-1;f++){const d=h*s+f;i.quad(d,d+s,d+s+1,d+1)}const a=[];for(let h=0;h<s;h++)a.push(h);for(let h=1;h<r.length;h++)a.push(h*s+s-1);for(let h=s-2;h>=0;h--)a.push((r.length-1)*s+h);for(let h=r.length-2;h>0;h--)a.push(h*s);const l=[],c=[];for(const h of a){const[f,d,p]=i.positions.slice(h*3,h*3+3);l.push(i.vertex(f,d,p,i.uvs[h*2],i.uvs[h*2+1])),c.push(i.vertex(f*.999,-.005,p*.999,i.uvs[h*2],i.uvs[h*2+1]))}const u=i.vertex(0,-.005,0,.5,.5);for(let h=0;h<a.length;h++){const f=(h+1)%a.length;i.quad(l[h],l[f],c[f],c[h]),i.face(u,c[h],c[f])}return i.finish("Reading rug / soft bound cloth")}function kp(){const i=j0(),t=Bs.fringeBundlesPerEnd;for(const e of[-1,1])for(let n=0;n<t;n++){const r=-1.59+n*3.18/(t-1),s=.074+ec(n+(e+1)*301)*.024,o=(ec(n*17+83)-.5)*.016;for(const a of[-1,1]){const l=r+a*.005,c=e*2.691,u=l+o+a*.003,h=e*(2.7+s-(a>0?.007:0)),f=.0054,d=.0019,p=i.vertex(l-f,-.003,c,0,0),_=i.vertex(l+f,-.003,c,1,0),g=i.vertex(l,6e-4,c,.5,0),m=i.vertex(u-d,-.0047,h,0,1),y=i.vertex(u+d,-.0047,h,1,1),M=i.vertex(u,-.0028,h,.5,1),x=[[p,m,M,g],[g,M,y,_],[_,y,m,p]];for(const A of x)e<0&&A.reverse(),i.quad(...A);e>0?(i.face(p,g,_),i.face(m,y,M)):(i.face(_,g,p),i.face(M,y,m))}}return i.finish("Reading rug / short split cotton fringe")}function Hp(i=(t,e)=>new V0().load(t,e)){const t=new we({name:"Reading rug / dyed wool",color:8865339,bumpScale:.0013,roughness:1,metalness:0}),e=i(new URL("/library/assets/rug-albedo-DJLqXdw0.png",import.meta.url).href,()=>t.color.setHex(16777215)),n=i(new URL("/library/assets/rug-detail-BtSd2KDf.png",import.meta.url).href);e.name="Reading rug / madder & indigo wool",n.name="Reading rug / linear height R, roughness G",e.colorSpace=ce,n.colorSpace=Ke;for(const s of[e,n])s.wrapS=s.wrapT=Je,s.minFilter=Be,s.magFilter=Ee,s.generateMipmaps=!0,s.anisotropy=4;t.map=e,t.bumpMap=t.roughnessMap=n;const r=new we({name:"Reading rug / unbleached warp",color:12363910,roughness:.96,metalness:0});return t.userData.noShadow=r.userData.noShadow=!0,{cloth:t,fringe:r}}function Gp(i,t=Hp()){const[e,n,r]=Bs.center;i.geo(t.cloth,zp(),e,n,r),i.geo(t.fringe,kp(),e,n,r)}const ic=[[[[-59.572,-80.04],[-59.866,-80.55],[-60.16,-81],[-62.255,-80.863],[-64.488,-80.922],[-65.742,-80.589],[-65.742,-80.55],[-66.29,-80.256],[-64.038,-80.295],[-61.883,-80.393],[-61.139,-79.981],[-60.61,-79.629],[-59.572,-80.04]]],[[[-159.208,-79.497],[-161.128,-79.634],[-162.44,-79.281],[-163.027,-78.929],[-163.067,-78.87],[-163.713,-78.596],[-163.713,-78.596],[-163.106,-78.223],[-161.245,-78.38],[-160.246,-78.694],[-159.482,-79.046],[-159.208,-79.497]]],[[[-45.155,-78.047],[-43.921,-78.478],[-43.49,-79.086],[-43.372,-79.517],[-43.333,-80.026],[-44.881,-80.34],[-46.506,-80.594],[-48.386,-80.829],[-50.482,-81.025],[-52.852,-80.967],[-54.164,-80.634],[-53.988,-80.222],[-51.853,-79.948],[-50.991,-79.615],[-50.365,-79.183],[-49.914,-78.811],[-49.307,-78.459],[-48.661,-78.047],[-48.661,-78.047],[-48.151,-78.047],[-46.663,-77.831],[-45.155,-78.047]]],[[[-121.212,-73.501],[-119.919,-73.658],[-118.724,-73.481],[-119.292,-73.834],[-120.232,-74.089],[-121.623,-74.01],[-122.622,-73.658],[-122.622,-73.658],[-122.406,-73.325],[-121.212,-73.501]]],[[[-125.56,-73.481],[-124.032,-73.873],[-124.619,-73.834],[-125.912,-73.736],[-127.283,-73.462],[-127.283,-73.462],[-126.558,-73.246],[-125.56,-73.481]]],[[[-98.982,-71.933],[-97.885,-72.071],[-96.788,-71.953],[-96.2,-72.521],[-96.984,-72.443],[-98.198,-72.482],[-99.432,-72.443],[-100.783,-72.502],[-101.802,-72.306],[-102.331,-71.894],[-102.331,-71.894],[-101.704,-71.718],[-100.431,-71.855],[-98.982,-71.933]]],[[[-68.451,-70.956],[-68.334,-71.406],[-68.51,-71.798],[-68.784,-72.171],[-69.959,-72.308],[-71.076,-72.504],[-72.388,-72.484],[-71.898,-72.092],[-73.074,-72.229],[-74.19,-72.367],[-74.954,-72.073],[-75.013,-71.661],[-73.916,-71.269],[-73.916,-71.269],[-73.23,-71.152],[-72.075,-71.191],[-71.781,-70.681],[-71.722,-70.309],[-71.742,-69.506],[-71.174,-69.035],[-70.253,-68.879],[-69.724,-69.251],[-69.489,-69.623],[-69.059,-70.074],[-68.726,-70.505],[-68.451,-70.956]]],[[[-58.614,-64.152],[-59.045,-64.368],[-59.789,-64.211],[-60.612,-64.309],[-61.297,-64.544],[-62.022,-64.799],[-62.512,-65.093],[-62.649,-65.485],[-62.59,-65.857],[-62.12,-66.19],[-62.806,-66.426],[-63.746,-66.504],[-64.294,-66.837],[-64.882,-67.15],[-65.508,-67.582],[-65.665,-67.954],[-65.313,-68.365],[-64.784,-68.679],[-63.961,-68.914],[-63.197,-69.228],[-62.786,-69.619],[-62.571,-69.992],[-62.277,-70.384],[-61.807,-70.717],[-61.513,-71.089],[-61.376,-72.01],[-61.082,-72.382],[-61.004,-72.774],[-60.69,-73.166],[-60.827,-73.695],[-61.376,-74.107],[-61.963,-74.44],[-63.295,-74.577],[-63.746,-74.93],[-64.353,-75.263],[-65.861,-75.635],[-67.193,-75.792],[-68.446,-76.007],[-69.798,-76.223],[-70.601,-76.634],[-72.207,-76.674],[-73.97,-76.634],[-75.556,-76.713],[-77.24,-76.713],[-76.927,-77.105],[-75.399,-77.281],[-74.283,-77.555],[-73.656,-77.908],[-74.773,-78.222],[-76.496,-78.124],[-77.926,-78.378],[-77.985,-78.79],[-78.024,-79.182],[-76.849,-79.515],[-76.633,-79.887],[-75.36,-80.26],[-73.245,-80.416],[-71.443,-80.691],[-70.013,-81.004],[-68.192,-81.318],[-65.704,-81.474],[-63.256,-81.749],[-61.552,-82.043],[-59.691,-82.376],[-58.712,-82.846],[-58.222,-83.218],[-57.008,-82.866],[-55.363,-82.572],[-53.62,-82.258],[-51.544,-82.004],[-49.761,-81.729],[-47.274,-81.71],[-44.826,-81.847],[-42.808,-82.082],[-42.162,-81.651],[-40.771,-81.357],[-38.245,-81.337],[-36.267,-81.122],[-34.386,-80.906],[-32.31,-80.769],[-30.097,-80.593],[-28.55,-80.338],[-29.255,-79.985],[-29.686,-79.633],[-29.686,-79.26],[-31.625,-79.299],[-33.681,-79.456],[-35.64,-79.456],[-35.914,-79.084],[-35.777,-78.339],[-35.327,-78.124],[-33.897,-77.889],[-32.212,-77.653],[-30.998,-77.36],[-29.784,-77.066],[-28.883,-76.674],[-27.512,-76.497],[-26.16,-76.36],[-25.475,-76.282],[-23.928,-76.243],[-22.459,-76.105],[-21.225,-75.909],[-20.01,-75.674],[-18.914,-75.439],[-17.523,-75.126],[-16.642,-74.793],[-15.701,-74.499],[-15.408,-74.107],[-16.465,-73.872],[-16.113,-73.46],[-15.447,-73.147],[-14.409,-72.951],[-13.312,-72.715],[-12.294,-72.402],[-11.51,-72.01],[-11.02,-71.54],[-10.296,-71.265],[-9.101,-71.324],[-8.611,-71.657],[-7.417,-71.697],[-7.377,-71.324],[-6.868,-70.932],[-5.791,-71.03],[-5.536,-71.403],[-4.342,-71.461],[-3.049,-71.285],[-1.795,-71.167],[-.659,-71.226],[-.229,-71.638],[.868,-71.305],[1.887,-71.128],[3.023,-70.991],[4.139,-70.854],[5.158,-70.619],[6.274,-70.462],[7.136,-70.247],[7.743,-69.894],[8.487,-70.149],[9.525,-70.011],[10.25,-70.482],[10.818,-70.834],[11.954,-70.638],[12.404,-70.247],[13.423,-69.972],[14.735,-70.031],[15.127,-70.403],[15.949,-70.031],[17.027,-69.913],[18.202,-69.874],[19.259,-69.894],[20.376,-70.011],[21.453,-70.07],[21.923,-70.403],[22.569,-70.697],[23.666,-70.521],[24.841,-70.482],[25.977,-70.482],[27.094,-70.462],[28.093,-70.325],[29.15,-70.207],[30.032,-69.933],[30.972,-69.757],[31.99,-69.659],[32.754,-69.384],[33.302,-68.836],[33.87,-68.503],[34.908,-68.659],[35.3,-69.012],[36.162,-69.247],[37.2,-69.169],[37.905,-69.521],[38.649,-69.776],[39.668,-69.541],[40.02,-69.11],[40.921,-68.934],[41.959,-68.601],[42.939,-68.463],[44.114,-68.267],[44.897,-68.052],[45.72,-67.817],[46.503,-67.601],[47.443,-67.719],[48.344,-67.366],[48.991,-67.092],[49.931,-67.111],[50.753,-66.876],[50.949,-66.523],[51.792,-66.249],[52.614,-66.053],[53.613,-65.896],[54.534,-65.818],[55.415,-65.877],[56.355,-65.975],[57.158,-66.249],[57.256,-66.68],[58.137,-67.013],[58.745,-67.288],[59.939,-67.405],[60.605,-67.68],[61.428,-67.954],[62.387,-68.013],[63.19,-67.817],[64.052,-67.405],[64.992,-67.621],[65.972,-67.738],[66.912,-67.856],[67.891,-67.934],[68.89,-67.934],[69.713,-68.973],[69.673,-69.228],[69.556,-69.678],[68.596,-69.933],[67.813,-70.305],[67.95,-70.697],[69.066,-70.678],[68.929,-71.069],[68.42,-71.442],[67.95,-71.853],[68.714,-72.167],[69.869,-72.265],[71.025,-72.088],[71.573,-71.697],[71.906,-71.324],[72.455,-71.011],[73.081,-70.717],[73.336,-70.364],[73.865,-69.874],[74.492,-69.776],[75.628,-69.737],[76.626,-69.619],[77.645,-69.463],[78.135,-69.071],[78.428,-68.698],[79.114,-68.326],[80.093,-68.072],[80.935,-67.876],[81.484,-67.542],[82.052,-67.366],[82.776,-67.209],[83.775,-67.307],[84.676,-67.209],[85.656,-67.092],[86.752,-67.15],[87.477,-66.876],[87.986,-66.21],[88.358,-66.484],[88.828,-66.955],[89.671,-67.15],[90.63,-67.229],[91.59,-67.111],[92.609,-67.19],[93.549,-67.209],[94.175,-67.111],[95.018,-67.17],[95.781,-67.386],[96.682,-67.249],[97.76,-67.249],[98.68,-67.111],[99.718,-67.249],[100.384,-66.915],[100.893,-66.582],[101.579,-66.308],[102.832,-65.563],[103.479,-65.7],[104.243,-65.975],[104.908,-66.328],[106.182,-66.935],[107.161,-66.955],[108.081,-66.955],[109.159,-66.837],[110.236,-66.7],[111.058,-66.426],[111.744,-66.132],[112.86,-66.092],[113.605,-65.877],[114.388,-66.073],[114.897,-66.386],[115.602,-66.7],[116.699,-66.661],[117.385,-66.915],[118.579,-67.17],[119.833,-67.268],[120.871,-67.19],[121.654,-66.876],[122.32,-66.563],[123.221,-66.484],[124.122,-66.621],[125.16,-66.719],[126.1,-66.563],[127.001,-66.563],[127.883,-66.661],[128.803,-66.759],[129.704,-66.582],[130.781,-66.426],[131.8,-66.386],[132.936,-66.386],[133.856,-66.288],[134.757,-66.21],[135.032,-65.72],[135.071,-65.309],[135.697,-65.583],[135.874,-66.034],[136.207,-66.445],[136.618,-66.778],[137.46,-66.955],[138.596,-66.896],[139.908,-66.876],[140.809,-66.817],[142.122,-66.817],[143.062,-66.798],[144.374,-66.837],[145.49,-66.915],[146.196,-67.229],[146,-67.601],[146.646,-67.895],[147.723,-68.13],[148.84,-68.385],[150.132,-68.561],[151.484,-68.718],[152.502,-68.875],[153.638,-68.895],[154.285,-68.561],[155.166,-68.836],[155.93,-69.149],[156.811,-69.384],[158.026,-69.482],[159.181,-69.6],[159.671,-69.992],[160.807,-70.227],[161.57,-70.58],[162.687,-70.736],[163.842,-70.717],[164.92,-70.776],[166.114,-70.756],[167.309,-70.834],[168.426,-70.971],[169.464,-71.207],[170.502,-71.403],[171.207,-71.697],[171.089,-72.088],[170.56,-72.441],[170.11,-72.892],[169.757,-73.245],[169.287,-73.656],[167.975,-73.813],[167.387,-74.165],[166.095,-74.381],[165.644,-74.773],[164.959,-75.145],[164.234,-75.459],[163.823,-75.87],[163.568,-76.243],[163.47,-76.693],[163.49,-77.066],[164.058,-77.457],[164.273,-77.83],[164.743,-78.183],[166.604,-78.32],[166.996,-78.751],[165.194,-78.907],[163.666,-79.123],[161.766,-79.162],[160.924,-79.73],[160.748,-80.201],[160.317,-80.573],[159.788,-80.945],[161.12,-81.279],[161.629,-81.69],[162.491,-82.062],[163.705,-82.395],[165.096,-82.709],[166.604,-83.022],[168.896,-83.336],[169.405,-83.826],[172.284,-84.041],[172.477,-84.118],[173.224,-84.414],[175.986,-84.159],[178.277,-84.473],[180,-84.713],[180,-90],[-180,-90],[-180,-84.713],[-179.942,-84.721],[-179.059,-84.139],[-177.257,-84.453],[-177.141,-84.418],[-176.862,-84.334],[-176.524,-84.232],[-176.23,-84.143],[-176.085,-84.099],[-175.934,-84.102],[-175.83,-84.118],[-174.383,-84.534],[-173.117,-84.118],[-172.889,-84.061],[-169.951,-83.885],[-169,-84.118],[-168.53,-84.237],[-167.022,-84.57],[-164.182,-84.825],[-161.93,-85.139],[-158.071,-85.374],[-155.192,-85.1],[-150.942,-85.296],[-148.533,-85.609],[-145.889,-85.315],[-143.108,-85.041],[-142.892,-84.57],[-146.829,-84.531],[-150.061,-84.296],[-150.903,-83.904],[-153.586,-83.689],[-153.41,-83.238],[-153.038,-82.827],[-152.666,-82.454],[-152.862,-82.043],[-154.526,-81.768],[-155.29,-81.416],[-156.837,-81.102],[-154.409,-81.161],[-152.098,-81.004],[-150.648,-81.337],[-148.866,-81.043],[-147.221,-80.671],[-146.418,-80.338],[-146.77,-79.926],[-148.063,-79.652],[-149.532,-79.358],[-151.588,-79.299],[-153.39,-79.162],[-155.329,-79.064],[-155.976,-78.692],[-157.268,-78.378],[-158.052,-78.026],[-158.365,-76.889],[-157.875,-76.987],[-156.975,-77.301],[-155.329,-77.203],[-153.743,-77.066],[-152.92,-77.497],[-151.334,-77.399],[-150.002,-77.183],[-148.748,-76.909],[-147.612,-76.576],[-146.104,-76.478],[-146.144,-76.105],[-146.496,-75.733],[-146.202,-75.38],[-144.91,-75.204],[-144.322,-75.537],[-142.794,-75.341],[-141.639,-75.086],[-140.209,-75.067],[-138.858,-74.969],[-137.506,-74.734],[-136.429,-74.518],[-135.215,-74.303],[-134.431,-74.361],[-133.746,-74.44],[-132.257,-74.303],[-130.925,-74.479],[-129.554,-74.459],[-128.242,-74.322],[-126.891,-74.42],[-125.402,-74.518],[-124.011,-74.479],[-122.562,-74.499],[-121.074,-74.518],[-119.703,-74.479],[-118.684,-74.185],[-117.47,-74.028],[-116.216,-74.244],[-115.022,-74.068],[-113.944,-73.715],[-113.298,-74.028],[-112.945,-74.381],[-112.299,-74.714],[-111.261,-74.42],[-110.066,-74.793],[-108.715,-74.91],[-107.559,-75.184],[-106.149,-75.126],[-104.876,-74.949],[-103.368,-74.988],[-102.017,-75.126],[-100.646,-75.302],[-100.117,-74.871],[-100.763,-74.538],[-101.253,-74.185],[-102.545,-74.107],[-103.113,-73.734],[-103.329,-73.362],[-103.681,-72.618],[-102.917,-72.755],[-101.605,-72.813],[-100.313,-72.755],[-99.137,-72.911],[-98.119,-73.205],[-97.688,-73.558],[-96.337,-73.617],[-95.044,-73.48],[-93.673,-73.284],[-92.439,-73.166],[-91.421,-73.401],[-90.089,-73.323],[-89.227,-72.559],[-88.424,-73.009],[-87.268,-73.186],[-86.015,-73.088],[-85.192,-73.48],[-83.88,-73.519],[-82.666,-73.636],[-81.471,-73.852],[-80.687,-73.48],[-80.296,-73.127],[-79.297,-73.519],[-77.926,-73.421],[-76.907,-73.636],[-76.222,-73.97],[-74.89,-73.872],[-73.852,-73.656],[-72.834,-73.401],[-71.619,-73.264],[-70.209,-73.147],[-68.936,-73.009],[-67.957,-72.794],[-67.369,-72.48],[-67.134,-72.049],[-67.252,-71.638],[-67.565,-71.246],[-67.917,-70.854],[-68.231,-70.462],[-68.485,-70.109],[-68.544,-69.717],[-68.446,-69.326],[-67.976,-68.953],[-67.585,-68.542],[-67.428,-68.15],[-67.624,-67.719],[-67.741,-67.327],[-67.252,-66.876],[-66.703,-66.582],[-66.057,-66.21],[-65.371,-65.896],[-64.568,-65.603],[-64.177,-65.171],[-63.628,-64.897],[-63.001,-64.642],[-62.042,-64.584],[-61.415,-64.27],[-60.71,-64.074],[-59.887,-63.957],[-59.163,-63.702],[-58.595,-63.388],[-57.811,-63.271],[-57.224,-63.525],[-57.596,-63.859],[-58.614,-64.152]]],[[[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.96,-54.897],[-67.291,-55.301],[-68.149,-55.612],[-69.232,-55.499],[-69.958,-55.198],[-71.006,-55.054],[-72.264,-54.495],[-73.285,-53.958],[-74.663,-52.837],[-73.838,-53.047],[-72.434,-53.715],[-71.108,-54.074],[-70.592,-53.616],[-70.267,-52.931],[-69.346,-52.518],[-68.634,-52.636],[-68.634,-52.636],[-68.25,-53.1],[-67.75,-53.85]]],[[[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1]]],[[[70.28,-49.71],[68.745,-49.775],[68.72,-49.242],[68.868,-48.83],[68.935,-48.625],[69.58,-48.94],[70.525,-49.065],[70.56,-49.255],[70.28,-49.71]]],[[[145.398,-40.793],[146.364,-41.138],[146.909,-41.001],[147.689,-40.808],[148.289,-40.875],[148.36,-42.062],[148.017,-42.407],[147.914,-43.212],[147.565,-42.938],[146.87,-43.635],[146.663,-43.581],[146.048,-43.55],[145.432,-42.694],[145.295,-42.034],[144.718,-41.163],[144.744,-40.704],[145.398,-40.793]]],[[[173.02,-40.919],[173.247,-41.332],[173.958,-40.927],[174.248,-41.349],[174.249,-41.77],[173.876,-42.233],[173.223,-42.97],[172.711,-43.372],[173.08,-43.853],[172.309,-43.866],[171.453,-44.243],[171.185,-44.897],[170.617,-45.909],[169.831,-46.356],[169.332,-46.641],[168.411,-46.62],[167.764,-46.29],[166.677,-46.22],[166.509,-45.853],[167.046,-45.111],[168.304,-44.124],[168.949,-43.936],[169.668,-43.555],[170.525,-43.032],[171.125,-42.513],[171.57,-41.767],[171.949,-41.514],[172.097,-40.956],[172.799,-40.494],[173.02,-40.919]]],[[[174.612,-36.156],[175.337,-37.209],[175.358,-36.526],[175.809,-36.799],[175.958,-37.555],[176.763,-37.881],[177.439,-37.961],[178.01,-37.58],[178.517,-37.695],[178.275,-38.583],[177.97,-39.166],[177.207,-39.146],[176.94,-39.45],[177.033,-39.88],[176.886,-40.066],[176.508,-40.605],[176.012,-41.29],[175.24,-41.688],[175.068,-41.426],[174.651,-41.282],[175.228,-40.459],[174.9,-39.909],[173.824,-39.509],[173.852,-39.147],[174.575,-38.798],[174.743,-38.028],[174.697,-37.381],[174.292,-36.711],[174.319,-36.535],[173.841,-36.122],[173.054,-35.237],[172.636,-34.529],[173.007,-34.451],[173.551,-35.006],[174.329,-35.265],[174.612,-36.156]]],[[[167.12,-22.16],[166.74,-22.4],[166.19,-22.13],[165.474,-21.68],[164.83,-21.15],[164.168,-20.445],[164.03,-20.106],[164.46,-20.12],[165.02,-20.46],[165.46,-20.8],[165.78,-21.08],[166.6,-21.7],[167.12,-22.16]]],[[[178.374,-17.34],[178.718,-17.628],[178.553,-18.151],[177.933,-18.288],[177.381,-18.164],[177.285,-17.725],[177.671,-17.381],[178.126,-17.505],[178.374,-17.34]]],[[[179.364,-16.801],[178.725,-17.012],[178.597,-16.639],[179.097,-16.434],[179.414,-16.379],[180,-16.067],[180,-16.555],[179.364,-16.801]]],[[[-179.917,-16.502],[-180,-16.555],[-180,-16.067],[-179.793,-16.021],[-179.917,-16.502]]],[[[167.845,-16.466],[167.515,-16.598],[167.18,-16.16],[167.217,-15.892],[167.845,-16.466]]],[[[167.108,-14.934],[167.27,-15.74],[167.001,-15.615],[166.793,-15.669],[166.65,-15.393],[166.629,-14.626],[167.108,-14.934]]],[[[50.057,-13.556],[50.217,-14.759],[50.477,-15.227],[50.377,-15.706],[50.2,-16],[49.861,-15.414],[49.673,-15.71],[49.863,-16.451],[49.775,-16.875],[49.499,-17.106],[49.436,-17.953],[49.042,-19.119],[48.549,-20.497],[47.931,-22.392],[47.548,-23.782],[47.096,-24.942],[46.282,-25.178],[45.41,-25.601],[44.834,-25.346],[44.04,-24.988],[43.764,-24.461],[43.698,-23.574],[43.346,-22.777],[43.254,-22.057],[43.433,-21.336],[43.894,-21.163],[43.896,-20.83],[44.374,-20.072],[44.464,-19.435],[44.232,-18.962],[44.043,-18.331],[43.963,-17.41],[44.312,-16.85],[44.447,-16.216],[44.945,-16.179],[45.503,-15.974],[45.873,-15.793],[46.312,-15.78],[46.882,-15.21],[47.705,-14.594],[48.005,-14.091],[47.869,-13.664],[48.294,-13.784],[48.845,-13.089],[48.864,-12.488],[49.195,-12.041],[49.544,-12.47],[49.809,-12.895],[50.057,-13.556]]],[[[143.562,-13.764],[143.922,-14.548],[144.564,-14.171],[144.895,-14.594],[145.375,-14.985],[145.272,-15.428],[145.485,-16.286],[145.637,-16.785],[145.889,-16.907],[146.16,-17.762],[146.064,-18.28],[146.387,-18.958],[147.471,-19.481],[148.178,-19.956],[148.848,-20.391],[148.717,-20.633],[149.289,-21.261],[149.678,-22.343],[150.077,-22.123],[150.483,-22.556],[150.727,-22.402],[150.9,-23.462],[151.609,-24.076],[152.074,-24.458],[152.855,-25.268],[153.136,-26.071],[153.162,-26.641],[153.093,-27.26],[153.569,-28.11],[153.512,-28.995],[153.339,-29.458],[153.069,-30.35],[153.09,-30.924],[152.892,-31.64],[152.45,-32.55],[151.709,-33.041],[151.344,-33.816],[151.011,-34.31],[150.714,-35.173],[150.328,-35.672],[150.075,-36.42],[149.946,-37.109],[149.997,-37.425],[149.424,-37.773],[148.305,-37.809],[147.382,-38.219],[146.922,-38.607],[146.318,-39.036],[145.49,-38.594],[144.877,-38.417],[145.032,-37.896],[144.486,-38.085],[143.61,-38.809],[142.745,-38.538],[142.178,-38.38],[141.607,-38.309],[140.639,-38.019],[139.992,-37.403],[139.807,-36.644],[139.574,-36.138],[139.083,-35.733],[138.121,-35.612],[138.449,-35.127],[138.208,-34.385],[137.719,-35.077],[136.829,-35.261],[137.352,-34.707],[137.504,-34.13],[137.89,-33.64],[137.81,-32.9],[136.997,-33.753],[136.372,-34.095],[135.989,-34.89],[135.208,-34.479],[135.239,-33.948],[134.613,-33.223],[134.086,-32.848],[134.274,-32.617],[132.991,-32.011],[132.288,-31.983],[131.326,-31.496],[129.536,-31.59],[128.241,-31.948],[127.103,-32.282],[126.149,-32.216],[125.089,-32.729],[124.222,-32.959],[124.029,-33.484],[123.66,-33.89],[122.811,-33.914],[122.183,-34.003],[121.299,-33.821],[120.58,-33.93],[119.894,-33.976],[119.299,-34.509],[119.007,-34.464],[118.506,-34.747],[118.025,-35.065],[117.296,-35.025],[116.625,-35.025],[115.564,-34.386],[115.027,-34.197],[115.049,-33.623],[115.545,-33.487],[115.715,-33.26],[115.679,-32.9],[115.802,-32.205],[115.69,-31.612],[115.161,-30.602],[114.997,-30.031],[115.04,-29.461],[114.642,-28.81],[114.616,-28.516],[114.174,-28.118],[114.049,-27.335],[113.477,-26.543],[113.339,-26.117],[113.778,-26.549],[113.441,-25.621],[113.937,-25.911],[114.233,-26.298],[114.216,-25.786],[113.721,-24.999],[113.625,-24.684],[113.394,-24.385],[113.502,-23.806],[113.707,-23.56],[113.843,-23.06],[113.737,-22.475],[114.15,-21.756],[114.225,-22.517],[114.648,-21.83],[115.46,-21.495],[115.947,-21.069],[116.712,-20.702],[117.166,-20.624],[117.442,-20.747],[118.23,-20.374],[118.836,-20.263],[118.988,-20.044],[119.252,-19.953],[119.805,-19.977],[120.856,-19.684],[121.4,-19.24],[121.655,-18.705],[122.242,-18.198],[122.287,-17.799],[122.313,-17.255],[123.013,-16.405],[123.434,-17.269],[123.859,-17.069],[123.503,-16.597],[123.817,-16.111],[124.258,-16.328],[124.38,-15.567],[124.926,-15.075],[125.167,-14.68],[125.67,-14.51],[125.686,-14.231],[126.125,-14.347],[126.143,-14.096],[126.583,-13.953],[127.066,-13.818],[127.805,-14.277],[128.36,-14.869],[128.986,-14.876],[129.621,-14.97],[129.41,-14.421],[129.889,-13.619],[130.339,-13.357],[130.184,-13.108],[130.618,-12.536],[131.223,-12.184],[131.735,-12.302],[132.575,-12.114],[132.557,-11.603],[131.825,-11.274],[132.357,-11.129],[133.02,-11.376],[133.551,-11.787],[134.393,-12.042],[134.679,-11.941],[135.298,-12.249],[135.883,-11.962],[136.258,-12.049],[136.492,-11.857],[136.952,-12.352],[136.685,-12.887],[136.305,-13.291],[135.962,-13.325],[136.078,-13.724],[135.784,-14.224],[135.429,-14.715],[135.5,-14.998],[136.295,-15.55],[137.065,-15.871],[137.58,-16.215],[138.303,-16.808],[138.585,-16.807],[139.109,-17.063],[139.261,-17.372],[140.215,-17.711],[140.875,-17.369],[141.071,-16.832],[141.274,-16.389],[141.398,-15.841],[141.702,-15.045],[141.563,-14.561],[141.636,-14.27],[141.52,-13.698],[141.651,-12.945],[141.843,-12.742],[141.687,-12.408],[141.929,-11.877],[142.118,-11.328],[142.144,-11.043],[142.515,-10.668],[142.797,-11.157],[142.867,-11.785],[143.116,-11.906],[143.159,-12.326],[143.522,-12.834],[143.597,-13.4],[143.562,-13.764]]],[[[162.119,-10.483],[162.399,-10.826],[161.7,-10.82],[161.32,-10.205],[161.917,-10.447],[162.119,-10.483]]],[[[120.716,-10.24],[120.295,-10.259],[118.968,-9.558],[119.9,-9.361],[120.426,-9.666],[120.776,-9.97],[120.716,-10.24]]],[[[160.852,-9.873],[160.463,-9.895],[159.849,-9.794],[159.64,-9.64],[159.703,-9.243],[160.363,-9.4],[160.689,-9.61],[160.852,-9.873]]],[[[161.68,-9.6],[161.529,-9.784],[160.788,-8.918],[160.58,-8.32],[160.92,-8.32],[161.28,-9.12],[161.68,-9.6]]],[[[124.436,-10.14],[123.58,-10.36],[123.46,-10.24],[123.55,-9.9],[123.98,-9.29],[124.969,-8.893],[125.086,-8.657],[125.947,-8.432],[126.645,-8.398],[126.957,-8.273],[127.336,-8.397],[126.968,-8.668],[125.926,-9.106],[125.089,-9.393],[124.436,-10.14]]],[[[117.9,-8.096],[118.261,-8.362],[118.878,-8.281],[119.127,-8.706],[117.97,-8.907],[117.278,-9.041],[116.74,-9.033],[117.084,-8.457],[117.632,-8.449],[117.9,-8.096]]],[[[122.904,-8.094],[122.757,-8.65],[121.254,-8.934],[119.924,-8.81],[119.921,-8.445],[120.715,-8.237],[121.342,-8.537],[122.007,-8.461],[122.904,-8.094]]],[[[159.875,-8.337],[159.917,-8.538],[159.134,-8.114],[158.586,-7.755],[158.211,-7.422],[158.36,-7.32],[158.82,-7.56],[159.64,-8.02],[159.875,-8.337]]],[[[157.538,-7.348],[157.339,-7.405],[156.902,-7.177],[156.491,-6.766],[156.543,-6.599],[157.14,-7.022],[157.538,-7.348]]],[[[108.623,-6.778],[110.539,-6.877],[110.76,-6.465],[112.615,-6.946],[112.979,-7.594],[114.479,-7.777],[115.706,-8.371],[114.565,-8.752],[113.465,-8.349],[112.56,-8.376],[111.522,-8.302],[110.586,-8.123],[109.428,-7.741],[108.694,-7.642],[108.278,-7.767],[106.454,-7.355],[106.281,-6.925],[105.365,-6.851],[106.052,-5.896],[107.265,-5.955],[108.072,-6.346],[108.487,-6.422],[108.623,-6.778]]],[[[134.725,-6.214],[134.21,-6.895],[134.113,-6.142],[134.29,-5.783],[134.5,-5.445],[134.727,-5.738],[134.725,-6.214]]],[[[155.88,-6.82],[155.6,-6.92],[155.167,-6.536],[154.729,-5.901],[154.514,-5.139],[154.653,-5.042],[154.76,-5.34],[155.063,-5.567],[155.548,-6.201],[156.02,-6.54],[155.88,-6.82]]],[[[151.983,-5.478],[151.459,-5.56],[151.301,-5.841],[150.754,-6.084],[150.241,-6.318],[149.71,-6.317],[148.89,-6.026],[148.319,-5.747],[148.402,-5.438],[149.298,-5.584],[149.846,-5.506],[149.996,-5.026],[150.14,-5.001],[150.237,-5.532],[150.807,-5.456],[151.09,-5.114],[151.648,-4.757],[151.538,-4.168],[152.137,-4.149],[152.339,-4.313],[152.319,-4.868],[151.983,-5.478]]],[[[127.249,-3.459],[126.875,-3.791],[126.184,-3.607],[125.989,-3.177],[127.001,-3.129],[127.249,-3.459]]],[[[130.471,-3.094],[130.835,-3.858],[129.991,-3.446],[129.155,-3.363],[128.591,-3.429],[127.899,-3.393],[128.136,-2.844],[129.371,-2.802],[130.471,-3.094]]],[[[153.14,-4.5],[152.827,-4.766],[152.639,-4.176],[152.406,-3.79],[151.953,-3.462],[151.384,-3.035],[150.662,-2.741],[150.94,-2.5],[151.48,-2.78],[151.82,-3],[152.24,-3.24],[152.64,-3.66],[153.02,-3.98],[153.14,-4.5]]],[[[134.143,-1.152],[134.423,-2.769],[135.458,-3.368],[136.293,-2.307],[137.441,-1.704],[138.33,-1.703],[139.185,-2.051],[139.927,-2.409],[141,-2.6],[142.735,-3.289],[144.584,-3.861],[145.273,-4.374],[145.83,-4.876],[145.982,-5.466],[147.648,-6.084],[147.891,-6.614],[146.971,-6.722],[147.192,-7.388],[148.085,-8.044],[148.734,-9.105],[149.307,-9.071],[149.267,-9.514],[150.039,-9.684],[149.739,-9.873],[150.802,-10.294],[150.691,-10.583],[150.028,-10.652],[149.782,-10.393],[148.923,-10.281],[147.913,-10.13],[147.135,-9.492],[146.568,-8.943],[146.048,-8.067],[144.744,-7.63],[143.897,-7.915],[143.286,-8.245],[143.414,-8.983],[142.628,-9.327],[142.068,-9.16],[141.034,-9.118],[140.143,-8.297],[139.128,-8.096],[138.881,-8.381],[137.614,-8.412],[138.039,-7.598],[138.669,-7.32],[138.408,-6.233],[137.928,-5.393],[135.989,-4.547],[135.165,-4.463],[133.663,-3.539],[133.368,-4.025],[132.984,-4.113],[132.757,-3.746],[132.754,-3.312],[131.99,-2.821],[133.067,-2.46],[133.78,-2.48],[133.696,-2.215],[132.232,-2.213],[131.836,-1.617],[130.943,-1.433],[130.52,-.938],[131.868,-.695],[132.38,-.37],[133.986,-.78],[134.143,-1.152]]],[[[125.241,1.42],[124.437,.428],[123.686,.236],[122.723,.431],[121.057,.381],[120.183,.237],[120.041,-.52],[120.936,-1.409],[121.476,-.956],[123.341,-.616],[123.258,-1.076],[122.823,-.931],[122.389,-1.517],[121.508,-1.904],[122.455,-3.186],[122.272,-3.53],[123.171,-4.684],[123.162,-5.341],[122.629,-5.635],[122.236,-5.283],[122.72,-4.464],[121.738,-4.851],[121.489,-4.575],[121.619,-4.188],[120.898,-3.602],[120.972,-2.628],[120.305,-2.932],[120.39,-4.098],[120.431,-5.528],[119.797,-5.673],[119.367,-5.38],[119.654,-4.459],[119.499,-3.494],[119.078,-3.487],[118.768,-2.802],[119.181,-2.147],[119.323,-1.353],[119.826,.154],[120.036,.566],[120.886,1.309],[121.667,1.014],[122.928,.875],[124.078,.917],[125.066,1.643],[125.241,1.42]]],[[[128.688,1.132],[128.636,.258],[128.12,.356],[127.968,-.252],[128.38,-.78],[128.1,-.9],[127.696,-.267],[127.399,1.012],[127.601,1.811],[127.932,2.175],[128.004,1.629],[128.595,1.541],[128.688,1.132]]],[[[105.818,-5.852],[104.71,-5.873],[103.868,-5.037],[102.584,-4.22],[102.156,-3.614],[101.399,-2.8],[100.903,-2.05],[100.142,-.65],[99.264,.183],[98.97,1.043],[98.601,1.824],[97.7,2.453],[97.177,3.309],[96.424,3.869],[95.381,4.971],[95.293,5.48],[95.937,5.44],[97.485,5.246],[98.369,4.268],[99.143,3.59],[99.694,3.174],[100.641,2.099],[101.658,2.084],[102.498,1.399],[103.077,.561],[103.838,.105],[103.438,-.712],[104.011,-1.059],[104.37,-1.085],[104.539,-1.782],[104.888,-2.34],[105.622,-2.429],[106.109,-3.062],[105.857,-4.306],[105.818,-5.852]]],[[[117.876,1.828],[118.997,.902],[117.812,.784],[117.478,.102],[117.522,-.804],[116.56,-1.488],[116.534,-2.484],[116.148,-4.013],[116.001,-3.657],[114.865,-4.107],[114.469,-3.496],[113.756,-3.439],[113.257,-3.119],[112.068,-3.478],[111.703,-2.994],[111.048,-3.049],[110.224,-2.934],[110.071,-1.593],[109.572,-1.315],[109.092,-.46],[108.953,.415],[109.069,1.342],[109.663,2.006],[110.396,1.664],[111.169,1.851],[111.37,2.697],[111.797,2.886],[112.996,3.102],[113.713,3.894],[114.204,4.526],[114.6,4.9],[115.451,5.448],[116.221,6.143],[116.725,6.925],[117.13,6.928],[117.643,6.422],[117.689,5.987],[118.348,5.709],[119.182,5.408],[119.111,5.016],[118.44,4.967],[118.618,4.478],[117.882,4.138],[117.313,3.234],[118.048,2.288],[117.876,1.828]]],[[[126.377,8.415],[126.479,7.75],[126.537,7.189],[126.197,6.274],[125.831,7.294],[125.364,6.786],[125.683,6.05],[125.397,5.581],[124.22,6.161],[123.939,6.885],[124.244,7.361],[123.61,7.834],[123.296,7.419],[122.826,7.457],[122.085,6.899],[121.92,7.192],[122.312,8.035],[122.942,8.316],[123.488,8.693],[123.841,8.24],[124.601,8.514],[124.765,8.96],[125.471,8.987],[125.412,9.76],[126.223,9.286],[126.307,8.782],[126.377,8.415]]],[[[81.218,6.197],[80.348,5.968],[79.872,6.763],[79.695,8.201],[80.148,9.824],[80.839,9.268],[81.304,8.564],[81.788,7.523],[81.637,6.482],[81.218,6.197]]],[[[-60.935,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.365],[-61.68,10.76],[-61.105,10.89],[-60.895,10.855],[-60.935,10.11]]],[[[123.982,10.279],[123.623,9.95],[123.31,9.318],[122.996,9.022],[122.38,9.713],[122.586,9.981],[122.837,10.261],[122.947,10.882],[123.499,10.941],[123.338,10.267],[124.078,11.233],[123.982,10.279]]],[[[118.505,9.316],[117.174,8.367],[117.664,9.067],[118.387,9.684],[118.987,10.376],[119.511,11.37],[119.69,10.554],[119.029,10.004],[118.505,9.316]]],[[[121.884,11.892],[122.484,11.582],[123.12,11.584],[123.101,11.166],[122.638,10.741],[122.003,10.441],[121.967,10.906],[122.038,11.416],[121.884,11.892]]],[[[125.503,12.163],[125.783,11.046],[125.012,11.311],[125.033,10.976],[125.277,10.359],[124.802,10.135],[124.76,10.838],[124.459,10.89],[124.303,11.495],[124.891,11.416],[124.878,11.794],[124.267,12.558],[125.227,12.536],[125.503,12.163]]],[[[121.527,13.07],[121.262,12.206],[120.834,12.704],[120.323,13.466],[121.18,13.43],[121.527,13.07]]],[[[121.321,18.504],[121.938,18.219],[122.246,18.479],[122.337,18.225],[122.174,17.81],[122.516,17.094],[122.252,16.262],[121.663,15.931],[121.505,15.125],[121.729,14.328],[122.259,14.218],[122.701,14.337],[123.95,13.782],[123.855,13.238],[124.181,12.998],[124.077,12.537],[123.298,13.028],[122.929,13.553],[122.671,13.186],[122.035,13.784],[121.126,13.637],[120.629,13.858],[120.679,14.271],[120.992,14.525],[120.693,14.757],[120.564,14.396],[120.07,14.971],[119.921,15.406],[119.884,16.364],[120.286,16.035],[120.39,17.599],[120.716,18.505],[121.321,18.504]]],[[[-65.591,18.228],[-65.847,17.976],[-66.6,17.982],[-67.184,17.947],[-67.242,18.374],[-67.101,18.521],[-66.282,18.515],[-65.771,18.427],[-65.591,18.228]]],[[[-76.903,17.868],[-77.206,17.701],[-77.766,17.862],[-78.338,18.226],[-78.218,18.455],[-77.797,18.524],[-77.57,18.491],[-76.897,18.401],[-76.365,18.161],[-76.2,17.887],[-76.903,17.868]]],[[[-72.58,19.872],[-71.712,19.714],[-71.587,19.885],[-70.807,19.88],[-70.214,19.623],[-69.951,19.648],[-69.769,19.293],[-69.222,19.313],[-69.254,19.015],[-68.809,18.979],[-68.318,18.612],[-68.689,18.205],[-69.165,18.423],[-69.624,18.381],[-69.953,18.428],[-70.133,18.246],[-70.517,18.184],[-70.669,18.427],[-71,18.283],[-71.4,17.599],[-71.658,17.758],[-71.708,18.045],[-72.372,18.215],[-72.844,18.146],[-73.455,18.218],[-73.922,18.031],[-74.458,18.343],[-74.37,18.665],[-73.45,18.526],[-72.695,18.446],[-72.335,18.668],[-72.792,19.102],[-72.784,19.484],[-73.415,19.64],[-73.19,19.916],[-72.58,19.872]]],[[[110.339,18.678],[109.475,18.198],[108.655,18.508],[108.626,19.368],[109.119,19.821],[110.212,20.101],[110.787,20.078],[111.01,19.696],[110.571,19.256],[110.339,18.678]]],[[[-155.542,19.083],[-155.688,18.916],[-155.937,19.059],[-155.908,19.339],[-156.073,19.703],[-156.024,19.814],[-155.85,19.977],[-155.919,20.174],[-155.861,20.267],[-155.785,20.249],[-155.402,20.08],[-155.225,19.993],[-155.062,19.859],[-154.807,19.509],[-154.831,19.453],[-155.222,19.24],[-155.542,19.083]]],[[[-156.079,20.644],[-156.414,20.572],[-156.587,20.783],[-156.702,20.864],[-156.711,20.927],[-156.613,21.012],[-156.257,20.917],[-155.996,20.764],[-156.079,20.644]]],[[[-156.758,21.177],[-156.789,21.069],[-157.325,21.098],[-157.25,21.22],[-156.758,21.177]]],[[[-157.653,21.322],[-157.707,21.264],[-157.779,21.277],[-158.127,21.312],[-158.254,21.539],[-158.293,21.579],[-158.025,21.717],[-157.942,21.653],[-157.653,21.322]]],[[[-159.345,21.982],[-159.464,21.883],[-159.801,22.065],[-159.749,22.138],[-159.596,22.236],[-159.366,22.215],[-159.345,21.982]]],[[[-79.68,22.765],[-79.281,22.399],[-78.347,22.512],[-77.993,22.277],[-77.146,21.658],[-76.524,21.207],[-76.195,21.221],[-75.598,21.017],[-75.671,20.735],[-74.934,20.694],[-74.178,20.285],[-74.297,20.05],[-74.962,19.923],[-75.635,19.874],[-76.324,19.953],[-77.755,19.855],[-77.085,20.413],[-77.493,20.673],[-78.137,20.74],[-78.483,21.029],[-78.72,21.598],[-79.285,21.559],[-80.217,21.827],[-80.518,22.037],[-81.821,22.192],[-82.17,22.387],[-81.795,22.637],[-82.776,22.688],[-83.494,22.169],[-83.909,22.155],[-84.052,21.911],[-84.547,21.801],[-84.975,21.896],[-84.447,22.205],[-84.23,22.566],[-83.778,22.788],[-83.268,22.983],[-82.51,23.079],[-82.268,23.189],[-81.404,23.117],[-80.619,23.106],[-79.68,22.765]]],[[[-77.535,23.76],[-77.78,23.71],[-78.034,24.286],[-78.408,24.576],[-78.191,25.21],[-77.89,25.17],[-77.54,24.34],[-77.535,23.76]]],[[[121.176,22.791],[120.747,21.971],[120.22,22.815],[120.106,23.556],[120.695,24.538],[121.495,25.295],[121.951,24.998],[121.778,24.394],[121.176,22.791]]],[[[-77.82,26.58],[-78.91,26.42],[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58]]],[[[-77,26.59],[-77.173,25.879],[-77.356,26.007],[-77.34,26.53],[-77.788,26.925],[-77.79,27.04],[-77,26.59]]],[[[134.638,34.149],[134.766,33.806],[134.203,33.201],[133.793,33.522],[133.28,33.29],[133.015,32.705],[132.363,32.989],[132.371,33.464],[132.924,34.06],[133.493,33.945],[133.904,34.365],[134.638,34.149]]],[[[34.576,35.672],[33.901,35.246],[33.974,35.059],[34.005,34.978],[32.98,34.572],[32.49,34.702],[32.257,35.103],[32.732,35.14],[32.802,35.146],[32.947,35.387],[33.667,35.373],[34.576,35.672]]],[[[23.7,35.705],[24.247,35.368],[25.025,35.425],[25.769,35.354],[25.745,35.18],[26.29,35.3],[26.165,35.005],[24.725,34.92],[24.735,35.085],[23.515,35.28],[23.7,35.705]]],[[[15.52,38.231],[15.16,37.444],[15.31,37.134],[15.1,36.62],[14.335,36.997],[13.827,37.105],[12.431,37.613],[12.571,38.126],[13.741,38.035],[14.761,38.144],[15.52,38.231]]],[[[9.21,41.21],[9.81,40.5],[9.67,39.177],[9.215,39.24],[8.807,38.907],[8.428,39.172],[8.388,40.378],[8.16,40.95],[8.71,40.9],[9.21,41.21]]],[[[140.976,37.142],[140.6,36.344],[140.774,35.843],[140.253,35.138],[138.976,34.668],[137.218,34.606],[135.793,33.465],[135.121,33.849],[135.079,34.597],[133.34,34.376],[132.157,33.905],[130.986,33.886],[132,33.15],[131.333,31.45],[130.686,31.03],[130.202,31.418],[130.448,32.319],[129.815,32.61],[129.408,33.296],[130.354,33.604],[130.878,34.233],[131.884,34.75],[132.618,35.433],[134.608,35.732],[135.678,35.527],[136.724,37.305],[137.391,36.827],[138.858,37.827],[139.426,38.216],[140.055,39.439],[139.883,40.563],[140.306,41.195],[141.369,41.379],[141.914,39.992],[141.885,39.181],[140.959,38.174],[140.976,37.142]]],[[[9.56,42.152],[9.23,41.38],[8.776,41.584],[8.544,42.257],[8.746,42.628],[9.39,43.01],[9.56,42.152]]],[[[143.91,44.174],[144.613,43.961],[145.321,44.385],[145.543,43.262],[144.06,42.988],[143.184,41.995],[141.611,42.679],[141.067,41.585],[139.955,41.57],[139.818,42.564],[140.312,43.333],[141.381,43.389],[141.672,44.772],[141.968,45.551],[143.143,44.51],[143.91,44.174]]],[[[-63.664,46.55],[-62.939,46.416],[-62.012,46.443],[-62.504,46.033],[-62.874,45.968],[-64.143,46.393],[-64.393,46.727],[-64.015,47.036],[-63.664,46.55]]],[[[-61.806,49.105],[-62.293,49.087],[-63.589,49.401],[-64.519,49.873],[-64.173,49.957],[-62.858,49.706],[-61.836,49.289],[-61.806,49.105]]],[[[-123.51,48.51],[-124.013,48.371],[-125.655,48.825],[-125.955,49.18],[-126.85,49.53],[-127.03,49.815],[-128.059,49.995],[-128.445,50.539],[-128.358,50.771],[-127.309,50.553],[-126.695,50.401],[-125.755,50.295],[-125.415,49.95],[-124.921,49.475],[-123.923,49.062],[-123.51,48.51]]],[[[-56.134,50.687],[-56.796,49.812],[-56.143,50.15],[-55.471,49.936],[-55.822,49.587],[-54.935,49.313],[-54.474,49.557],[-53.477,49.249],[-53.786,48.517],[-53.086,48.688],[-52.959,48.157],[-52.648,47.536],[-53.069,46.655],[-53.521,46.618],[-54.179,46.807],[-53.962,47.625],[-54.24,47.752],[-55.401,46.885],[-55.997,46.92],[-55.291,47.39],[-56.251,47.633],[-57.325,47.573],[-59.266,47.603],[-59.419,47.899],[-58.797,48.252],[-59.232,48.523],[-58.392,49.126],[-57.359,50.718],[-56.739,51.287],[-55.871,51.632],[-55.407,51.588],[-55.6,51.317],[-56.134,50.687]]],[[[-132.71,54.04],[-132.71,54.04],[-132.71,54.04],[-132.71,54.04],[-131.75,54.12],[-132.049,52.985],[-131.179,52.18],[-131.578,52.182],[-132.18,52.64],[-132.55,53.1],[-133.055,53.411],[-133.24,53.851],[-133.18,54.17],[-132.71,54.04]]],[[[143.648,50.748],[144.654,48.976],[143.174,49.307],[142.559,47.862],[143.533,46.837],[143.505,46.138],[142.748,46.741],[142.092,45.967],[141.907,46.806],[142.018,47.78],[141.904,48.859],[142.136,49.615],[142.18,50.952],[141.594,51.935],[141.683,53.302],[142.607,53.762],[142.21,54.225],[142.655,54.366],[142.915,53.705],[143.261,52.741],[143.235,51.757],[143.648,50.748]]],[[[-6.789,52.26],[-8.562,51.669],[-9.977,51.82],[-9.166,52.865],[-9.689,53.881],[-8.328,54.665],[-7.572,55.132],[-6.734,55.173],[-5.662,54.555],[-6.198,53.868],[-6.033,53.153],[-6.789,52.26]]],[[[12.69,55.61],[12.09,54.8],[11.044,55.365],[10.904,55.78],[12.371,56.111],[12.69,55.61]]],[[[-153.006,57.116],[-154.005,56.735],[-154.516,56.993],[-154.671,57.461],[-153.763,57.817],[-153.229,57.969],[-152.565,57.901],[-152.141,57.591],[-153.006,57.116]]],[[[-3.005,58.635],[-4.074,57.553],[-3.055,57.69],[-1.959,57.685],[-2.22,56.87],[-3.119,55.974],[-2.085,55.91],[-1.115,54.625],[-.43,54.464],[.185,53.325],[.47,52.93],[1.682,52.74],[1.56,52.1],[1.051,51.807],[1.45,51.289],[.55,50.766],[-.788,50.775],[-2.49,50.5],[-2.956,50.697],[-3.617,50.228],[-4.543,50.342],[-5.245,49.96],[-5.777,50.16],[-4.31,51.21],[-3.415,51.426],[-4.984,51.593],[-5.267,51.991],[-4.222,52.301],[-4.77,52.84],[-4.58,53.495],[-3.092,53.404],[-2.945,53.985],[-3.63,54.615],[-4.844,54.791],[-5.083,55.062],[-4.719,55.508],[-5.048,55.784],[-5.586,55.311],[-5.645,56.275],[-6.15,56.785],[-5.787,57.819],[-5.01,58.63],[-4.211,58.551],[-3.005,58.635]]],[[[-165.579,59.91],[-166.193,59.754],[-166.848,59.941],[-167.455,60.213],[-166.468,60.384],[-165.674,60.294],[-165.579,59.91]]],[[[-79.266,62.159],[-79.658,61.633],[-80.1,61.718],[-80.362,62.016],[-80.315,62.086],[-79.929,62.386],[-79.52,62.364],[-79.266,62.159]]],[[[-81.898,62.711],[-83.069,62.159],[-83.775,62.182],[-83.994,62.453],[-83.25,62.914],[-81.877,62.905],[-81.898,62.711]]],[[[-171.732,63.783],[-171.114,63.592],[-170.491,63.695],[-169.683,63.431],[-168.689,63.298],[-168.772,63.189],[-169.529,62.977],[-170.291,63.194],[-170.671,63.376],[-171.553,63.318],[-171.791,63.406],[-171.732,63.783]]],[[[-85.161,65.657],[-84.976,65.218],[-84.464,65.372],[-83.883,65.11],[-82.788,64.767],[-81.642,64.455],[-81.553,63.98],[-80.817,64.057],[-80.103,63.726],[-80.991,63.411],[-82.547,63.652],[-83.109,64.102],[-84.1,63.57],[-85.523,63.052],[-85.867,63.637],[-87.222,63.541],[-86.353,64.036],[-86.225,64.823],[-85.884,65.739],[-85.161,65.657]]],[[[-14.509,66.456],[-14.74,65.809],[-13.61,65.127],[-14.91,64.364],[-17.794,63.679],[-18.656,63.496],[-19.973,63.644],[-22.763,63.96],[-21.778,64.402],[-23.955,64.891],[-22.184,65.085],[-22.227,65.379],[-24.326,65.611],[-23.651,66.263],[-22.135,66.41],[-20.576,65.732],[-19.057,66.277],[-17.799,65.994],[-16.168,66.527],[-14.509,66.456]]],[[[-75.866,67.149],[-76.987,67.099],[-77.236,67.588],[-76.812,68.149],[-75.895,68.287],[-75.115,68.01],[-75.103,67.582],[-75.216,67.444],[-75.866,67.149]]],[[[-175.014,66.584],[-174.34,66.336],[-174.572,67.062],[-171.857,66.913],[-169.9,65.977],[-170.891,65.541],[-172.53,65.438],[-172.555,64.461],[-172.955,64.253],[-173.892,64.283],[-174.654,64.631],[-175.984,64.923],[-176.207,65.357],[-177.223,65.52],[-178.36,65.391],[-178.903,65.74],[-178.686,66.112],[-179.884,65.875],[-179.433,65.404],[-180,64.98],[-180,68.964],[-177.55,68.2],[-174.928,67.206],[-175.014,66.584]]],[[[-95.648,69.108],[-96.27,68.757],[-97.617,69.06],[-98.432,68.951],[-99.797,69.4],[-98.917,69.71],[-98.218,70.144],[-97.157,69.86],[-96.557,69.68],[-96.257,69.49],[-95.648,69.108]]],[[[180,70.832],[178.903,70.781],[178.725,71.099],[180,71.516],[180,70.832]]],[[[-178.694,70.893],[-180,70.832],[-180,71.516],[-179.872,71.558],[-179.024,71.556],[-177.578,71.269],[-177.664,71.133],[-178.694,70.893]]],[[[-90.547,69.498],[-90.552,68.475],[-89.215,69.259],[-88.02,68.615],[-88.318,67.873],[-87.35,67.199],[-86.306,67.922],[-85.577,68.784],[-85.522,69.882],[-84.101,69.805],[-82.622,69.658],[-81.28,69.162],[-81.22,68.666],[-81.964,68.133],[-81.259,67.597],[-81.386,67.111],[-83.344,66.412],[-84.735,66.257],[-85.769,66.558],[-86.068,66.056],[-87.031,65.213],[-87.323,64.776],[-88.483,64.099],[-89.914,64.033],[-90.704,63.61],[-90.77,62.96],[-91.933,62.835],[-93.157,62.025],[-94.242,60.899],[-94.629,60.11],[-94.685,58.949],[-93.215,58.782],[-92.765,57.846],[-92.297,57.087],[-90.898,57.285],[-89.039,56.852],[-88.04,56.472],[-87.324,55.999],[-86.071,55.724],[-85.012,55.303],[-83.36,55.245],[-82.273,55.148],[-82.436,54.282],[-82.125,53.277],[-81.401,52.158],[-79.913,51.208],[-79.143,51.534],[-78.602,52.562],[-79.124,54.141],[-79.83,54.668],[-78.229,55.136],[-77.096,55.838],[-76.541,56.534],[-76.623,57.203],[-77.302,58.052],[-78.517,58.805],[-77.337,59.853],[-77.773,60.758],[-78.107,62.32],[-77.411,62.55],[-75.696,62.279],[-74.668,62.181],[-73.84,62.444],[-72.909,62.105],[-71.677,61.525],[-71.374,61.137],[-69.59,61.062],[-69.62,60.221],[-69.288,58.957],[-68.375,58.801],[-67.65,58.212],[-66.202,58.767],[-65.245,59.871],[-64.583,60.336],[-63.805,59.443],[-62.502,58.167],[-61.396,56.968],[-61.799,56.339],[-60.469,55.776],[-59.57,55.204],[-57.975,54.945],[-57.333,54.627],[-56.937,53.78],[-56.158,53.648],[-55.756,53.271],[-55.683,52.147],[-56.409,51.771],[-57.127,51.42],[-58.775,51.064],[-60.033,50.243],[-61.724,50.081],[-63.862,50.291],[-65.363,50.298],[-66.399,50.229],[-67.236,49.511],[-68.511,49.068],[-69.954,47.745],[-71.104,46.822],[-70.255,46.986],[-68.65,48.3],[-66.552,49.133],[-65.056,49.233],[-64.171,48.742],[-65.115,48.071],[-64.799,46.993],[-64.472,46.239],[-63.173,45.739],[-61.521,45.884],[-60.518,47.008],[-60.449,46.283],[-59.803,45.92],[-61.04,45.265],[-63.255,44.67],[-64.247,44.266],[-65.364,43.545],[-66.123,43.619],[-66.162,44.465],[-64.425,45.292],[-66.026,45.259],[-67.137,45.138],[-66.965,44.81],[-68.032,44.325],[-69.06,43.98],[-70.116,43.684],[-70.69,43.03],[-70.815,42.865],[-70.825,42.335],[-70.495,41.805],[-70.08,41.78],[-70.185,42.145],[-69.885,41.923],[-69.965,41.637],[-70.64,41.475],[-71.12,41.495],[-71.86,41.32],[-72.295,41.27],[-72.876,41.221],[-73.71,40.931],[-72.241,41.12],[-71.945,40.93],[-73.345,40.63],[-73.982,40.628],[-73.952,40.751],[-74.257,40.474],[-73.962,40.428],[-74.178,39.709],[-74.906,38.94],[-74.98,39.196],[-75.2,39.248],[-75.528,39.498],[-75.32,38.96],[-75.083,38.781],[-75.057,38.404],[-75.377,38.016],[-75.94,37.217],[-76.031,37.257],[-75.722,37.937],[-76.233,38.319],[-76.35,39.15],[-76.543,38.718],[-76.329,38.083],[-76.96,38.233],[-76.302,37.918],[-76.259,36.966],[-75.972,36.897],[-75.868,36.551],[-75.727,35.551],[-76.363,34.808],[-77.398,34.512],[-78.055,33.925],[-78.554,33.861],[-79.061,33.494],[-79.203,33.159],[-80.301,32.509],[-80.865,32.033],[-81.336,31.44],[-81.49,30.73],[-81.314,30.036],[-80.98,29.18],[-80.536,28.472],[-80.53,28.04],[-80.057,26.88],[-80.088,26.206],[-80.131,25.817],[-80.381,25.206],[-80.68,25.08],[-81.172,25.201],[-81.33,25.64],[-81.71,25.87],[-82.24,26.73],[-82.705,27.495],[-82.855,27.886],[-82.65,28.55],[-82.93,29.1],[-83.71,29.937],[-84.1,30.09],[-85.109,29.636],[-85.288,29.686],[-85.773,30.153],[-86.4,30.4],[-87.53,30.274],[-88.418,30.385],[-89.18,30.316],[-89.605,30.176],[-89.414,29.894],[-89.43,29.489],[-89.218,29.291],[-89.408,29.16],[-89.779,29.307],[-90.155,29.117],[-90.88,29.149],[-91.627,29.677],[-92.499,29.552],[-93.226,29.784],[-93.848,29.714],[-94.69,29.48],[-95.6,28.739],[-96.594,28.307],[-97.14,27.83],[-97.37,27.38],[-97.38,26.69],[-97.33,26.21],[-97.14,25.87],[-97.139,25.868],[-97.142,25.866],[-97.528,24.992],[-97.703,24.272],[-97.776,22.933],[-97.872,22.444],[-97.699,21.899],[-97.389,21.411],[-97.189,20.635],[-96.526,19.891],[-96.292,19.32],[-95.901,18.828],[-94.839,18.563],[-94.426,18.144],[-93.549,18.424],[-92.786,18.525],[-92.037,18.705],[-91.408,18.876],[-90.772,19.284],[-90.534,19.867],[-90.451,20.708],[-90.279,21],[-89.601,21.262],[-88.544,21.494],[-87.658,21.459],[-87.052,21.544],[-86.812,21.331],[-86.846,20.85],[-87.383,20.255],[-87.621,19.646],[-87.437,19.472],[-87.586,19.04],[-87.837,18.26],[-88.091,18.517],[-88.3,18.5],[-88.296,18.353],[-88.107,18.349],[-88.123,18.077],[-88.285,17.644],[-88.198,17.49],[-88.303,17.132],[-88.24,17.036],[-88.355,16.531],[-88.552,16.266],[-88.732,16.234],[-88.931,15.887],[-88.605,15.706],[-88.518,15.856],[-88.225,15.728],[-88.121,15.689],[-87.902,15.865],[-87.616,15.879],[-87.523,15.797],[-87.368,15.847],[-86.903,15.757],[-86.441,15.783],[-86.119,15.893],[-86.002,16.005],[-85.683,15.954],[-85.444,15.886],[-85.182,15.909],[-84.984,15.996],[-84.527,15.857],[-84.368,15.835],[-84.063,15.648],[-83.774,15.424],[-83.41,15.271],[-83.147,14.996],[-83.233,14.9],[-83.284,14.677],[-83.182,14.311],[-83.412,13.97],[-83.52,13.568],[-83.552,13.127],[-83.498,12.869],[-83.473,12.419],[-83.626,12.321],[-83.72,11.893],[-83.651,11.629],[-83.855,11.373],[-83.809,11.103],[-83.656,10.939],[-83.402,10.396],[-83.016,9.993],[-82.546,9.566],[-82.187,9.208],[-82.208,8.996],[-81.809,8.951],[-81.714,9.032],[-81.439,8.786],[-80.947,8.859],[-80.522,9.111],[-79.915,9.313],[-79.573,9.612],[-79.021,9.553],[-79.058,9.455],[-78.501,9.42],[-78.056,9.248],[-77.729,8.947],[-77.353,8.67],[-76.837,8.639],[-76.086,9.337],[-75.675,9.443],[-75.665,9.774],[-75.48,10.619],[-74.907,11.083],[-74.277,11.102],[-74.197,11.31],[-73.415,11.227],[-72.628,11.732],[-72.238,11.956],[-71.754,12.437],[-71.4,12.376],[-71.137,12.113],[-71.332,11.776],[-71.36,11.54],[-71.947,11.423],[-71.621,10.969],[-71.633,10.446],[-72.074,9.866],[-71.696,9.072],[-71.265,9.137],[-71.04,9.86],[-71.35,10.212],[-71.401,10.969],[-70.155,11.375],[-70.294,11.847],[-69.943,12.162],[-69.584,11.46],[-68.883,11.443],[-68.233,10.886],[-68.194,10.555],[-67.296,10.546],[-66.228,10.649],[-65.655,10.201],[-64.89,10.077],[-64.329,10.39],[-64.318,10.641],[-63.079,10.702],[-61.881,10.716],[-62.73,10.42],[-62.388,9.948],[-61.589,9.873],[-60.831,9.381],[-60.671,8.58],[-60.15,8.603],[-59.758,8.367],[-59.102,7.999],[-58.483,7.348],[-58.455,6.833],[-58.078,6.809],[-57.542,6.321],[-57.147,5.973],[-55.949,5.773],[-55.842,5.953],[-55.033,6.025],[-53.958,5.757],[-53.618,5.646],[-52.882,5.41],[-51.823,4.566],[-51.658,4.156],[-51.317,4.203],[-51.07,3.651],[-50.509,1.901],[-49.974,1.737],[-49.947,1.046],[-50.699,.223],[-50.388,-.078],[-48.62,-.235],[-48.584,-1.238],[-47.825,-.582],[-46.567,-.941],[-44.906,-1.552],[-44.418,-2.138],[-44.582,-2.691],[-43.419,-2.383],[-41.473,-2.912],[-39.979,-2.873],[-38.5,-3.701],[-37.223,-4.821],[-36.453,-5.109],[-35.598,-5.149],[-35.235,-5.465],[-34.896,-6.738],[-34.73,-7.343],[-35.128,-8.996],[-35.637,-9.649],[-37.047,-11.041],[-37.684,-12.171],[-38.424,-13.038],[-38.674,-13.058],[-38.953,-13.793],[-38.882,-15.667],[-39.161,-17.208],[-39.267,-17.868],[-39.583,-18.262],[-39.761,-19.599],[-40.775,-20.904],[-40.945,-21.937],[-41.754,-22.371],[-41.988,-22.97],[-43.075,-22.968],[-44.648,-23.352],[-45.352,-23.797],[-46.472,-24.089],[-47.649,-24.885],[-48.495,-25.877],[-48.641,-26.624],[-48.475,-27.176],[-48.661,-28.186],[-48.888,-28.674],[-49.587,-29.224],[-50.697,-30.984],[-51.576,-31.778],[-52.256,-32.245],[-52.712,-33.197],[-53.374,-33.768],[-53.806,-34.397],[-54.936,-34.953],[-55.674,-34.753],[-56.215,-34.86],[-57.14,-34.43],[-57.818,-34.463],[-58.427,-33.909],[-58.495,-34.432],[-57.226,-35.288],[-57.362,-35.977],[-56.737,-36.413],[-56.788,-36.901],[-57.749,-38.184],[-59.232,-38.72],[-61.237,-38.928],[-62.336,-38.828],[-62.126,-39.424],[-62.331,-40.173],[-62.146,-40.677],[-62.746,-41.029],[-63.771,-41.167],[-64.732,-40.803],[-65.118,-41.064],[-64.979,-42.058],[-64.303,-42.359],[-63.756,-42.044],[-63.458,-42.563],[-64.379,-42.873],[-65.182,-43.495],[-65.329,-44.501],[-65.565,-45.037],[-66.51,-45.04],[-67.294,-45.552],[-67.581,-46.302],[-66.597,-47.034],[-65.641,-47.236],[-65.985,-48.133],[-67.166,-48.697],[-67.816,-49.87],[-68.729,-50.264],[-69.138,-50.732],[-68.815,-51.771],[-68.15,-52.35],[-68.571,-52.299],[-69.461,-52.292],[-69.943,-52.538],[-70.845,-52.899],[-71.006,-53.833],[-71.43,-53.856],[-72.558,-53.531],[-73.703,-52.835],[-74.947,-52.263],[-75.26,-51.629],[-74.977,-51.043],[-75.48,-50.378],[-75.608,-48.674],[-75.183,-47.712],[-74.127,-46.939],[-75.644,-46.648],[-74.692,-45.764],[-74.352,-44.103],[-73.24,-44.455],[-72.718,-42.383],[-73.389,-42.117],[-73.701,-43.366],[-74.332,-43.225],[-74.018,-41.795],[-73.677,-39.942],[-73.218,-39.259],[-73.505,-38.283],[-73.588,-37.156],[-73.167,-37.124],[-72.553,-35.509],[-71.862,-33.909],[-71.438,-32.419],[-71.669,-30.921],[-71.37,-30.096],[-71.49,-28.861],[-70.905,-27.64],[-70.725,-25.706],[-70.404,-23.629],[-70.091,-21.393],[-70.164,-19.756],[-70.372,-18.348],[-71.375,-17.774],[-71.462,-17.363],[-73.445,-16.359],[-75.238,-15.266],[-76.009,-14.649],[-76.423,-13.823],[-76.259,-13.535],[-77.106,-12.223],[-78.092,-10.378],[-79.037,-8.387],[-79.446,-7.931],[-79.76,-7.194],[-80.537,-6.542],[-81.25,-6.137],[-80.926,-5.69],[-81.411,-4.737],[-81.1,-4.036],[-80.302,-3.405],[-79.77,-2.657],[-79.987,-2.221],[-80.369,-2.685],[-80.968,-2.247],[-80.765,-1.965],[-80.934,-1.057],[-80.583,-.907],[-80.399,-.284],[-80.021,.36],[-80.091,.768],[-79.543,.983],[-78.855,1.381],[-78.991,1.691],[-78.618,1.766],[-78.662,2.267],[-78.428,2.63],[-77.932,2.697],[-77.51,3.325],[-77.128,3.85],[-77.496,4.088],[-77.308,4.668],[-77.533,5.583],[-77.319,5.845],[-77.477,6.691],[-77.882,7.224],[-78.215,7.512],[-78.429,8.052],[-78.182,8.319],[-78.435,8.388],[-78.622,8.718],[-79.12,8.996],[-79.558,8.932],[-79.76,8.584],[-80.164,8.333],[-80.383,8.299],[-80.481,8.09],[-80.004,7.547],[-80.277,7.42],[-80.421,7.271],[-80.886,7.221],[-81.06,7.818],[-81.19,7.648],[-81.519,7.707],[-81.721,8.109],[-82.131,8.175],[-82.391,8.292],[-82.82,8.291],[-82.851,8.074],[-82.966,8.225],[-83.508,8.447],[-83.711,8.657],[-83.596,8.831],[-83.633,9.052],[-83.91,9.291],[-84.303,9.487],[-84.648,9.615],[-84.713,9.908],[-84.976,10.087],[-84.911,9.796],[-85.111,9.557],[-85.339,9.834],[-85.661,9.933],[-85.797,10.135],[-85.792,10.439],[-85.659,10.754],[-85.942,10.895],[-85.713,11.089],[-86.058,11.404],[-86.526,11.807],[-86.746,12.144],[-87.167,12.458],[-87.669,12.91],[-87.557,13.065],[-87.392,12.914],[-87.317,12.985],[-87.489,13.297],[-87.793,13.385],[-87.904,13.149],[-88.483,13.164],[-88.843,13.26],[-89.257,13.459],[-89.812,13.521],[-90.096,13.735],[-90.609,13.91],[-91.232,13.928],[-91.69,14.126],[-92.228,14.539],[-93.359,15.615],[-93.875,15.94],[-94.692,16.201],[-95.25,16.128],[-96.053,15.752],[-96.557,15.654],[-97.264,15.917],[-98.013,16.107],[-98.948,16.566],[-99.697,16.706],[-100.83,17.171],[-101.666,17.649],[-101.919,17.916],[-102.478,17.976],[-103.501,18.292],[-103.917,18.749],[-104.992,19.316],[-105.493,19.947],[-105.731,20.434],[-105.398,20.532],[-105.501,20.817],[-105.271,21.076],[-105.266,21.422],[-105.603,21.871],[-105.693,22.269],[-106.029,22.774],[-106.91,23.768],[-107.915,24.549],[-108.402,25.172],[-109.26,25.581],[-109.444,25.825],[-109.292,26.443],[-109.801,26.676],[-110.392,27.162],[-110.641,27.86],[-111.179,27.941],[-111.76,28.468],[-112.228,28.955],[-112.272,29.267],[-112.81,30.021],[-113.164,30.787],[-113.149,31.171],[-113.872,31.568],[-114.206,31.524],[-114.776,31.8],[-114.937,31.393],[-114.771,30.914],[-114.674,30.163],[-114.331,29.75],[-113.589,29.062],[-113.424,28.826],[-113.272,28.755],[-113.14,28.411],[-112.962,28.425],[-112.762,27.78],[-112.458,27.526],[-112.245,27.172],[-111.617,26.663],[-111.285,25.733],[-110.988,25.295],[-110.71,24.826],[-110.655,24.299],[-110.173,24.266],[-109.772,23.811],[-109.409,23.365],[-109.433,23.186],[-109.854,22.818],[-110.031,22.823],[-110.295,23.431],[-110.95,24.001],[-111.671,24.484],[-112.182,24.739],[-112.149,25.47],[-112.301,26.012],[-112.777,26.322],[-113.465,26.768],[-113.597,26.64],[-113.849,26.9],[-114.466,27.142],[-115.055,27.723],[-114.982,27.798],[-114.57,27.742],[-114.199,28.115],[-114.162,28.566],[-114.932,29.279],[-115.519,29.556],[-115.887,30.181],[-116.258,30.836],[-116.721,31.636],[-117.128,32.535],[-117.296,33.046],[-117.944,33.621],[-118.411,33.741],[-118.52,34.028],[-119.081,34.078],[-119.439,34.349],[-120.368,34.447],[-120.623,34.609],[-120.744,35.157],[-121.715,36.162],[-122.547,37.552],[-122.512,37.784],[-122.953,38.114],[-123.727,38.952],[-123.865,39.767],[-124.398,40.313],[-124.179,41.142],[-124.214,42],[-124.533,42.766],[-124.142,43.708],[-123.899,45.523],[-124.08,46.865],[-124.396,47.72],[-124.687,48.185],[-124.566,48.38],[-123.12,48.04],[-122.587,47.096],[-122.34,47.36],[-122.5,48.18],[-122.84,49],[-122.974,49.003],[-124.91,49.985],[-125.625,50.417],[-127.436,50.831],[-127.993,51.716],[-127.85,52.33],[-129.13,52.755],[-129.305,53.562],[-130.515,54.288],[-130.536,54.803],[-131.086,55.179],[-131.967,55.498],[-132.25,56.37],[-133.539,57.179],[-134.078,58.123],[-135.038,58.188],[-136.628,58.212],[-137.8,58.5],[-139.868,59.538],[-140.825,59.727],[-142.574,60.084],[-143.959,59.999],[-145.925,60.459],[-147.114,60.885],[-148.224,60.673],[-148.018,59.978],[-148.571,59.914],[-149.728,59.706],[-150.608,59.368],[-151.716,59.156],[-151.859,59.745],[-151.41,60.726],[-150.347,61.034],[-150.621,61.284],[-151.896,60.727],[-152.578,60.062],[-154.019,59.35],[-153.287,58.865],[-154.232,58.146],[-155.307,57.728],[-156.308,57.423],[-156.556,56.98],[-158.117,56.464],[-158.433,55.994],[-159.603,55.567],[-160.29,55.644],[-161.223,55.365],[-162.238,55.024],[-163.069,54.69],[-164.786,54.404],[-164.942,54.572],[-163.848,55.039],[-162.87,55.348],[-161.804,55.895],[-160.564,56.008],[-160.07,56.418],[-158.684,57.017],[-158.461,57.217],[-157.723,57.57],[-157.55,58.328],[-157.042,58.919],[-158.195,58.616],[-158.517,58.788],[-159.059,58.424],[-159.712,58.932],[-159.981,58.573],[-160.355,59.071],[-161.355,58.671],[-161.969,58.672],[-162.055,59.267],[-161.874,59.634],[-162.518,59.99],[-163.818,59.798],[-164.662,60.268],[-165.346,60.508],[-165.351,61.074],[-166.121,61.5],[-165.734,62.075],[-164.919,62.633],[-164.563,63.146],[-163.753,63.219],[-163.067,63.06],[-162.26,63.542],[-161.534,63.456],[-160.773,63.766],[-160.958,64.223],[-161.518,64.403],[-160.778,64.789],[-161.392,64.777],[-162.453,64.56],[-162.758,64.339],[-163.546,64.559],[-164.961,64.447],[-166.425,64.687],[-166.845,65.089],[-168.11,65.67],[-166.705,66.088],[-164.475,66.577],[-163.653,66.577],[-163.789,66.077],[-161.678,66.116],[-162.49,66.735],[-163.72,67.117],[-164.431,67.616],[-165.39,68.043],[-166.764,68.359],[-166.205,68.883],[-164.431,68.916],[-163.169,69.371],[-162.93,69.858],[-161.909,70.333],[-160.935,70.448],[-159.039,70.892],[-158.12,70.825],[-156.581,71.358],[-155.068,71.148],[-154.344,70.696],[-153.9,70.89],[-152.21,70.83],[-152.27,70.6],[-150.74,70.43],[-149.72,70.53],[-147.613,70.214],[-145.69,70.12],[-144.92,69.99],[-143.589,70.153],[-142.073,69.852],[-140.986,69.712],[-139.12,69.471],[-137.546,68.99],[-136.504,68.898],[-135.626,69.315],[-134.415,69.628],[-132.929,69.505],[-131.431,69.945],[-129.795,70.194],[-129.108,69.779],[-128.362,70.013],[-128.138,70.484],[-127.447,70.377],[-125.756,69.481],[-124.425,70.159],[-124.29,69.4],[-123.061,69.564],[-122.683,69.856],[-121.472,69.798],[-119.943,69.378],[-117.603,69.011],[-116.226,68.841],[-115.247,68.906],[-113.898,68.399],[-115.305,67.903],[-113.497,67.688],[-110.798,67.806],[-109.946,67.981],[-108.88,67.382],[-107.792,67.888],[-108.813,68.312],[-108.167,68.654],[-106.95,68.7],[-106.15,68.8],[-105.343,68.561],[-104.338,68.018],[-103.221,68.098],[-101.454,67.647],[-99.902,67.806],[-98.443,67.782],[-98.559,68.404],[-97.669,68.579],[-96.12,68.24],[-96.126,67.294],[-95.489,68.091],[-94.685,68.064],[-94.233,69.069],[-95.304,69.686],[-96.471,70.09],[-96.391,71.195],[-95.209,71.92],[-93.89,71.76],[-92.878,71.319],[-91.52,70.191],[-92.407,69.7],[-90.547,69.498]]],[[[-114.167,73.121],[-114.666,72.653],[-112.441,72.955],[-111.05,72.45],[-109.92,72.961],[-109.007,72.633],[-108.188,71.651],[-107.686,72.065],[-108.396,73.09],[-107.516,73.236],[-106.523,73.076],[-105.402,72.673],[-104.775,71.698],[-104.465,70.993],[-102.785,70.498],[-100.981,70.024],[-101.089,69.584],[-102.731,69.504],[-102.093,69.12],[-102.43,68.753],[-104.24,68.91],[-105.96,69.18],[-107.123,69.119],[-109,68.78],[-111.967,68.604],[-113.313,68.536],[-113.855,69.007],[-115.22,69.28],[-116.108,69.168],[-117.34,69.96],[-116.675,70.067],[-115.131,70.237],[-113.721,70.192],[-112.416,70.366],[-114.35,70.6],[-116.487,70.52],[-117.905,70.541],[-118.432,70.909],[-116.113,71.309],[-117.656,71.295],[-119.402,71.559],[-118.563,72.308],[-117.866,72.706],[-115.189,73.315],[-114.167,73.121]]],[[[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6],[-105.26,73.64],[-104.5,73.42]]],[[[-76.34,73.103],[-76.251,72.826],[-77.314,72.856],[-78.392,72.877],[-79.486,72.742],[-79.776,72.803],[-80.876,73.333],[-80.834,73.693],[-80.353,73.76],[-78.064,73.652],[-76.34,73.103]]],[[[-86.562,73.157],[-85.774,72.534],[-84.85,73.34],[-82.316,73.751],[-80.6,72.717],[-80.749,72.062],[-78.771,72.352],[-77.825,72.75],[-75.606,72.244],[-74.229,71.767],[-74.099,71.331],[-72.242,71.557],[-71.2,70.92],[-68.786,70.525],[-67.915,70.122],[-66.969,69.186],[-68.805,68.72],[-66.45,68.067],[-64.862,67.848],[-63.425,66.928],[-61.852,66.862],[-62.163,66.16],[-63.918,64.999],[-65.149,65.426],[-66.721,66.388],[-68.015,66.263],[-68.141,65.69],[-67.09,65.108],[-65.732,64.648],[-65.32,64.383],[-64.669,63.393],[-65.014,62.674],[-66.275,62.945],[-68.783,63.746],[-67.37,62.884],[-66.328,62.28],[-66.166,61.931],[-68.877,62.33],[-71.023,62.911],[-72.235,63.398],[-71.886,63.68],[-73.378,64.194],[-74.834,64.679],[-74.819,64.389],[-77.71,64.23],[-78.556,64.573],[-77.897,65.309],[-76.018,65.327],[-73.96,65.455],[-74.294,65.812],[-73.945,66.311],[-72.651,67.285],[-72.926,67.727],[-73.312,68.069],[-74.843,68.555],[-76.869,68.895],[-76.229,69.148],[-77.287,69.77],[-78.169,69.826],[-78.957,70.167],[-79.492,69.872],[-81.305,69.743],[-84.945,69.967],[-87.06,70.26],[-88.682,70.411],[-89.513,70.762],[-88.468,71.218],[-89.888,71.223],[-90.205,72.235],[-89.437,73.129],[-88.408,73.538],[-85.826,73.804],[-86.562,73.157]]],[[[-100.356,73.844],[-99.164,73.633],[-97.38,73.76],[-97.12,73.47],[-98.054,72.991],[-96.54,72.56],[-96.72,71.66],[-98.36,71.273],[-99.323,71.356],[-100.015,71.738],[-102.5,72.51],[-102.48,72.83],[-100.438,72.706],[-101.54,73.36],[-100.356,73.844]]],[[[143.604,73.212],[142.088,73.205],[140.038,73.317],[139.863,73.37],[140.812,73.765],[142.062,73.858],[143.483,73.475],[143.604,73.212]]],[[[-93.196,72.772],[-94.269,72.025],[-95.41,72.062],[-96.034,72.94],[-96.018,73.437],[-95.496,73.862],[-94.504,74.135],[-92.42,74.1],[-90.51,73.857],[-92.004,72.966],[-93.196,72.772]]],[[[-120.46,71.4],[-123.092,70.902],[-123.62,71.34],[-125.929,71.869],[-125.593,72.195],[-124.807,73.023],[-123.94,73.68],[-124.918,74.293],[-121.538,74.449],[-120.11,74.241],[-117.556,74.186],[-116.584,73.896],[-115.511,73.475],[-116.768,73.223],[-119.22,72.52],[-120.46,71.82],[-120.46,71.4]]],[[[150.732,75.084],[149.576,74.689],[147.977,74.778],[146.119,75.173],[146.358,75.497],[148.222,75.346],[150.732,75.084]]],[[[-93.613,74.98],[-94.157,74.592],[-95.609,74.667],[-96.821,74.928],[-96.289,75.378],[-94.851,75.647],[-93.978,75.296],[-93.613,74.98]]],[[[145.086,75.563],[144.3,74.82],[140.614,74.848],[138.955,74.611],[136.974,75.262],[137.512,75.949],[138.831,76.137],[141.472,76.093],[145.086,75.563]]],[[[-98.5,76.72],[-97.736,76.257],[-97.704,75.743],[-98.16,75],[-99.809,74.897],[-100.884,75.057],[-100.863,75.641],[-102.502,75.564],[-102.566,76.337],[-101.49,76.305],[-99.983,76.646],[-98.577,76.589],[-98.5,76.72]]],[[[-108.211,76.202],[-107.819,75.846],[-106.929,76.013],[-105.881,75.969],[-105.705,75.48],[-106.313,75.005],[-109.7,74.85],[-112.223,74.417],[-113.744,74.394],[-113.871,74.72],[-111.794,75.162],[-116.312,75.043],[-117.71,75.222],[-116.346,76.199],[-115.405,76.479],[-112.591,76.141],[-110.814,75.549],[-109.067,75.473],[-110.497,76.43],[-109.581,76.794],[-108.549,76.678],[-108.211,76.202]]],[[[57.536,70.72],[56.945,70.633],[53.677,70.763],[53.412,71.207],[51.602,71.475],[51.456,72.015],[52.478,72.229],[52.444,72.775],[54.428,73.628],[53.508,73.75],[55.902,74.627],[55.632,75.081],[57.869,75.609],[61.17,76.252],[64.498,76.439],[66.211,76.81],[68.157,76.94],[68.852,76.545],[68.181,76.234],[64.637,75.738],[61.584,75.261],[58.477,74.309],[56.987,73.333],[55.419,72.371],[55.623,71.541],[57.536,70.72]]],[[[-94.684,77.098],[-93.574,76.776],[-91.605,76.779],[-90.742,76.45],[-90.97,76.074],[-89.822,75.848],[-89.187,75.61],[-87.838,75.566],[-86.379,75.482],[-84.79,75.699],[-82.753,75.784],[-81.129,75.714],[-80.058,75.337],[-79.834,74.923],[-80.458,74.657],[-81.949,74.442],[-83.229,74.564],[-86.097,74.41],[-88.15,74.392],[-89.765,74.516],[-92.422,74.838],[-92.768,75.387],[-92.89,75.883],[-93.894,76.319],[-95.962,76.441],[-97.121,76.751],[-96.745,77.161],[-94.684,77.098]]],[[[-116.199,77.645],[-116.336,76.877],[-117.106,76.53],[-118.04,76.481],[-119.899,76.053],[-121.5,75.9],[-122.855,76.117],[-122.855,76.117],[-121.158,76.865],[-119.104,77.512],[-117.57,77.498],[-116.199,77.645]]],[[[106.97,76.974],[107.24,76.48],[108.154,76.723],[111.077,76.71],[113.331,76.222],[114.134,75.848],[113.885,75.328],[112.779,75.032],[110.151,74.477],[109.4,74.18],[110.64,74.04],[112.119,73.788],[113.019,73.977],[113.53,73.335],[113.969,73.595],[115.568,73.753],[118.776,73.588],[119.02,73.12],[123.201,72.971],[123.258,73.735],[125.38,73.56],[126.977,73.565],[128.591,73.039],[129.052,72.399],[128.46,71.98],[129.716,71.193],[131.289,70.787],[132.253,71.836],[133.858,71.386],[135.562,71.655],[137.498,71.348],[138.234,71.628],[139.87,71.488],[139.148,72.416],[140.468,72.849],[149.5,72.2],[150.351,71.607],[152.969,70.842],[157.007,71.031],[158.998,70.867],[159.83,70.453],[159.709,69.722],[160.941,69.437],[162.279,69.642],[164.052,69.668],[165.94,69.472],[167.836,69.583],[169.578,68.694],[170.817,69.014],[170.008,69.653],[170.453,70.097],[173.644,69.818],[175.724,69.877],[178.6,69.4],[180,68.964],[180,64.98],[179.993,64.974],[178.707,64.535],[177.411,64.608],[178.313,64.076],[178.908,63.252],[179.37,62.983],[179.487,62.569],[179.228,62.304],[177.364,62.522],[174.569,61.769],[173.68,61.653],[172.15,60.95],[170.698,60.336],[170.331,59.882],[168.901,60.573],[166.295,59.789],[165.84,60.16],[164.877,59.732],[163.539,59.869],[163.217,59.211],[162.017,58.243],[162.053,57.839],[163.192,57.615],[163.058,56.159],[162.13,56.122],[161.701,55.286],[162.117,54.855],[160.369,54.344],[160.022,53.203],[158.531,52.959],[158.231,51.943],[156.79,51.011],[156.42,51.7],[155.992,53.159],[155.434,55.381],[155.914,56.768],[156.758,57.365],[156.81,57.832],[158.364,58.056],[160.151,59.315],[161.872,60.343],[163.67,61.141],[164.474,62.551],[163.258,62.466],[162.658,61.643],[160.122,60.544],[159.302,61.774],[156.721,61.435],[154.218,59.758],[155.044,59.145],[152.812,58.884],[151.266,58.781],[151.338,59.504],[149.784,59.656],[148.545,59.164],[145.487,59.336],[142.198,59.04],[138.958,57.088],[135.126,54.73],[136.702,54.604],[137.193,53.977],[138.165,53.755],[138.805,54.255],[139.901,54.19],[141.345,53.09],[141.379,52.239],[140.597,51.24],[140.513,50.045],[140.062,48.447],[138.555,47],[138.22,46.308],[136.862,45.143],[135.515,43.989],[134.87,43.398],[133.537,42.812],[132.906,42.799],[132.278,43.284],[130.936,42.553],[130.78,42.22],[130.4,42.28],[129.966,41.941],[129.667,41.601],[129.705,40.883],[129.188,40.662],[129.01,40.485],[128.633,40.19],[127.968,40.026],[127.534,39.757],[127.502,39.324],[127.385,39.214],[127.783,39.051],[128.35,38.612],[129.213,37.432],[129.461,36.784],[129.468,35.632],[129.091,35.083],[128.186,34.891],[127.386,34.476],[126.486,34.39],[126.374,34.935],[126.559,35.685],[126.117,36.726],[126.86,36.894],[126.175,37.75],[125.689,37.94],[125.568,37.752],[125.275,37.669],[125.24,37.857],[124.981,37.949],[124.712,38.108],[124.986,38.549],[125.222,38.666],[125.133,38.849],[125.387,39.388],[125.321,39.552],[124.737,39.66],[124.266,39.929],[122.868,39.638],[122.132,39.17],[121.055,38.898],[121.586,39.361],[121.377,39.75],[122.169,40.422],[121.641,40.946],[120.769,40.594],[119.64,39.898],[119.023,39.252],[118.043,39.204],[117.533,38.738],[118.06,38.062],[118.878,37.897],[118.912,37.448],[119.703,37.156],[120.823,37.87],[121.711,37.481],[122.358,37.455],[122.52,36.931],[121.104,36.651],[120.637,36.112],[119.665,35.61],[119.151,34.91],[120.227,34.36],[120.62,33.377],[121.229,32.46],[121.908,31.692],[121.892,30.949],[121.264,30.676],[121.503,30.143],[122.092,29.833],[121.938,29.018],[121.685,28.226],[121.126,28.136],[120.396,27.053],[119.586,25.741],[118.657,24.547],[117.282,23.625],[115.891,22.783],[114.764,22.668],[114.153,22.224],[113.807,22.548],[113.241,22.052],[111.844,21.55],[110.786,21.397],[110.444,20.341],[109.89,20.282],[109.628,21.008],[109.865,21.395],[108.523,21.715],[108.05,21.552],[106.715,20.697],[105.882,19.752],[105.662,19.058],[106.427,18.004],[107.362,16.698],[108.269,16.08],[108.877,15.277],[109.335,13.426],[109.2,11.667],[108.366,11.008],[107.221,10.365],[106.405,9.531],[105.158,8.6],[104.795,9.241],[105.076,9.919],[104.334,10.487],[103.497,10.633],[103.091,11.154],[102.585,12.187],[101.687,12.646],[100.832,12.627],[100.979,13.413],[100.098,13.407],[100.019,12.307],[99.479,10.846],[99.154,9.963],[99.222,9.239],[99.874,9.208],[100.28,8.295],[100.459,7.43],[101.017,6.857],[101.623,6.741],[102.141,6.222],[102.371,6.128],[102.962,5.524],[103.381,4.855],[103.439,4.182],[103.332,3.727],[103.43,3.383],[103.503,2.791],[103.855,2.516],[104.248,1.631],[104.229,1.293],[103.52,1.226],[102.574,1.967],[101.391,2.761],[101.274,3.27],[100.695,3.939],[100.557,4.767],[100.197,5.313],[100.306,6.041],[100.086,6.464],[99.691,6.848],[99.52,7.344],[98.988,7.908],[98.504,8.382],[98.34,7.794],[98.15,8.35],[98.259,8.974],[98.554,9.933],[98.457,10.675],[98.765,11.441],[98.428,12.033],[98.51,13.122],[98.104,13.641],[97.778,14.837],[97.597,16.101],[97.165,16.929],[96.506,16.427],[95.369,15.714],[94.808,15.804],[94.189,16.038],[94.534,17.277],[94.325,18.214],[93.541,19.367],[93.663,19.727],[93.078,19.855],[92.369,20.671],[92.083,21.192],[92.025,21.702],[91.835,22.183],[91.417,22.765],[90.496,22.805],[90.587,22.393],[90.273,21.836],[89.847,22.039],[89.702,21.857],[89.419,21.966],[89.032,22.056],[88.889,21.691],[88.208,21.703],[86.976,21.495],[87.033,20.743],[86.499,20.152],[85.06,19.479],[83.941,18.302],[83.189,17.671],[82.193,17.017],[82.191,16.557],[81.693,16.31],[80.792,15.952],[80.325,15.899],[80.025,15.136],[80.233,13.836],[80.286,13.006],[79.862,12.056],[79.858,10.357],[79.341,10.309],[78.885,9.546],[79.19,9.217],[78.278,8.933],[77.941,8.253],[77.54,7.966],[76.593,8.899],[76.13,10.3],[75.747,11.308],[75.396,11.781],[74.865,12.742],[74.617,13.993],[74.444,14.617],[73.534,15.991],[73.12,17.929],[72.821,19.208],[72.825,20.419],[72.631,21.356],[71.175,20.758],[70.471,20.877],[69.164,22.089],[69.645,22.451],[69.35,22.843],[68.177,23.692],[67.444,23.945],[67.146,24.664],[66.373,25.425],[64.531,25.237],[62.906,25.219],[61.497,25.078],[59.616,25.38],[58.526,25.61],[57.397,25.74],[56.971,26.966],[56.492,27.143],[55.724,26.965],[54.715,26.481],[53.493,26.813],[52.484,27.581],[51.521,27.866],[50.853,28.815],[50.115,30.148],[49.577,29.986],[48.941,30.317],[48.568,29.927],[47.974,29.976],[48.183,29.534],[48.094,29.306],[48.416,28.552],[48.808,27.69],[49.3,27.461],[49.471,27.11],[50.153,26.69],[50.213,26.277],[50.113,25.944],[50.24,25.608],[50.528,25.328],[50.661,25],[50.81,24.755],[50.744,25.482],[51.013,26.007],[51.286,26.115],[51.589,25.801],[51.607,25.216],[51.39,24.628],[51.58,24.245],[51.758,24.294],[51.794,24.02],[52.577,24.177],[53.404,24.151],[54.008,24.122],[54.693,24.798],[55.439,25.439],[56.071,26.055],[56.362,26.396],[56.486,26.309],[56.391,25.896],[56.261,25.715],[56.397,24.925],[56.845,24.242],[57.404,23.879],[58.137,23.748],[58.729,23.566],[59.18,22.992],[59.45,22.66],[59.808,22.534],[59.806,22.31],[59.442,21.714],[59.282,21.434],[58.861,21.114],[58.488,20.429],[58.034,20.482],[57.826,20.243],[57.666,19.736],[57.789,19.068],[57.695,18.945],[57.234,18.948],[56.61,18.574],[56.512,18.087],[56.284,17.876],[55.661,17.884],[55.27,17.632],[55.275,17.228],[54.791,16.951],[54.239,17.045],[53.57,16.708],[53.109,16.651],[52.385,16.383],[52.192,15.938],[52.168,15.597],[51.172,15.175],[49.575,14.709],[48.679,14.003],[48.239,13.948],[47.939,14.007],[47.354,13.592],[46.717,13.4],[45.878,13.348],[45.625,13.291],[45.406,13.027],[45.144,12.954],[44.99,12.7],[44.495,12.722],[44.175,12.586],[43.483,12.637],[43.223,13.221],[43.252,13.768],[43.088,14.063],[42.892,14.802],[42.605,15.213],[42.805,15.262],[42.703,15.719],[42.824,15.912],[42.779,16.348],[42.65,16.775],[42.348,17.076],[42.271,17.475],[41.755,17.833],[41.221,18.672],[40.939,19.487],[40.248,20.175],[39.802,20.339],[39.14,21.292],[39.024,21.987],[39.066,22.58],[38.493,23.688],[38.024,24.079],[37.484,24.286],[37.155,24.859],[37.209,25.084],[36.932,25.603],[36.64,25.826],[36.249,26.57],[35.64,27.377],[35.13,28.063],[34.632,28.058],[34.788,28.607],[34.832,28.958],[34.956,29.357],[34.923,29.501],[34.642,29.099],[34.427,28.344],[34.154,27.823],[33.922,27.649],[33.588,27.971],[33.137,28.418],[32.423,29.851],[32.32,29.76],[32.735,28.705],[33.349,27.7],[34.105,26.142],[34.474,25.599],[34.795,25.034],[35.693,23.927],[35.494,23.753],[35.526,23.102],[36.691,22.205],[36.866,22],[37.189,21.019],[36.969,20.838],[37.115,19.808],[37.482,18.614],[37.863,18.368],[38.41,17.998],[38.991,16.841],[39.266,15.923],[39.814,15.436],[41.179,14.491],[41.735,13.921],[42.277,13.344],[42.59,13],[43.081,12.7],[43.318,12.39],[43.286,11.975],[42.716,11.736],[43.145,11.462],[43.471,11.278],[43.667,10.864],[44.118,10.446],[44.614,10.442],[45.557,10.698],[46.646,10.817],[47.526,11.127],[48.022,11.193],[48.379,11.375],[48.948,11.411],[49.268,11.43],[49.729,11.579],[50.259,11.68],[50.732,12.022],[51.111,12.025],[51.134,11.748],[51.042,11.167],[51.045,10.641],[50.834,10.28],[50.552,9.199],[50.071,8.082],[49.453,6.805],[48.594,5.339],[47.741,4.219],[46.565,2.855],[45.564,2.046],[44.068,1.053],[43.136,.292],[42.042,-.919],[41.811,-1.446],[41.585,-1.683],[40.885,-2.083],[40.638,-2.5],[40.263,-2.573],[40.121,-3.278],[39.8,-3.681],[39.605,-4.346],[39.202,-4.677],[38.74,-5.909],[38.8,-6.476],[39.44,-6.84],[39.47,-7.1],[39.195,-7.704],[39.252,-8.008],[39.187,-8.485],[39.536,-9.112],[39.95,-10.098],[40.317,-10.317],[40.479,-10.765],[40.437,-11.762],[40.561,-12.639],[40.6,-14.202],[40.776,-14.692],[40.477,-15.406],[40.089,-16.101],[39.453,-16.721],[38.538,-17.101],[37.411,-17.586],[36.281,-18.66],[35.896,-18.842],[35.198,-19.553],[34.786,-19.784],[34.702,-20.497],[35.176,-21.254],[35.373,-21.841],[35.386,-22.14],[35.563,-22.09],[35.534,-23.071],[35.372,-23.535],[35.607,-23.706],[35.459,-24.123],[35.041,-24.478],[34.216,-24.816],[33.013,-25.357],[32.575,-25.727],[32.66,-26.148],[32.916,-26.216],[32.83,-26.742],[32.58,-27.47],[32.462,-28.301],[32.203,-28.752],[31.521,-29.257],[31.326,-29.402],[30.902,-29.91],[30.623,-30.424],[30.056,-31.14],[28.925,-32.172],[28.22,-32.772],[27.465,-33.227],[26.419,-33.615],[25.91,-33.667],[25.781,-33.945],[25.173,-33.797],[24.678,-33.987],[23.594,-33.794],[22.988,-33.916],[22.574,-33.864],[21.543,-34.259],[20.689,-34.417],[20.071,-34.795],[19.617,-34.819],[19.193,-34.463],[18.855,-34.444],[18.425,-33.998],[18.378,-34.136],[18.245,-33.868],[18.25,-33.281],[17.925,-32.611],[18.248,-32.429],[18.222,-31.662],[17.567,-30.726],[17.065,-29.879],[17.063,-29.876],[16.345,-28.577],[15.602,-27.821],[15.211,-27.091],[14.99,-26.117],[14.743,-25.393],[14.408,-23.853],[14.386,-22.657],[14.258,-22.111],[13.869,-21.699],[13.352,-20.873],[12.827,-19.673],[12.609,-19.045],[11.795,-18.069],[11.734,-17.302],[11.64,-16.673],[11.779,-15.794],[12.124,-14.878],[12.176,-14.449],[12.5,-13.548],[12.739,-13.138],[13.313,-12.484],[13.634,-12.039],[13.739,-11.298],[13.687,-10.731],[13.387,-10.374],[13.121,-9.767],[12.875,-9.167],[12.929,-8.959],[13.237,-8.563],[12.933,-7.596],[12.728,-6.927],[12.227,-6.294],[12.323,-6.1],[12.182,-5.79],[11.915,-5.038],[11.094,-3.979],[10.066,-2.969],[9.405,-2.144],[8.798,-1.111],[8.83,-.779],[9.049,-.459],[9.291,.269],[9.493,1.01],[9.306,1.161],[9.649,2.284],[9.795,3.073],[9.404,3.734],[8.948,3.904],[8.745,4.352],[8.489,4.496],[8.5,4.772],[7.462,4.412],[7.083,4.465],[6.698,4.241],[5.898,4.263],[5.363,4.888],[5.034,5.612],[4.326,6.271],[3.574,6.258],[2.692,6.259],[1.865,6.142],[1.06,5.929],[-.508,5.344],[-1.064,5],[-1.965,4.711],[-2.856,4.995],[-3.311,4.984],[-4.009,5.18],[-4.65,5.168],[-5.834,4.994],[-6.529,4.705],[-7.519,4.338],[-7.712,4.365],[-7.974,4.356],[-9.005,4.833],[-9.913,5.594],[-10.765,6.141],[-11.439,6.786],[-11.708,6.86],[-12.428,7.263],[-12.949,7.799],[-13.124,8.164],[-13.247,8.903],[-13.685,9.495],[-14.074,9.886],[-14.33,10.016],[-14.58,10.214],[-14.693,10.656],[-14.839,10.877],[-15.13,11.041],[-15.664,11.458],[-16.085,11.525],[-16.315,11.807],[-16.309,11.959],[-16.614,12.171],[-16.677,12.385],[-16.841,13.151],[-16.714,13.595],[-17.126,14.373],[-17.625,14.73],[-17.185,14.919],[-16.701,15.622],[-16.463,16.135],[-16.55,16.674],[-16.271,17.167],[-16.146,18.109],[-16.257,19.097],[-16.378,19.594],[-16.278,20.093],[-16.536,20.568],[-17.063,21],[-17.02,21.422],[-16.973,21.886],[-16.589,22.158],[-16.262,22.679],[-16.326,23.018],[-15.983,23.724],[-15.426,24.359],[-15.089,24.52],[-14.825,25.104],[-14.801,25.636],[-14.44,26.255],[-13.774,26.619],[-13.14,27.64],[-12.619,28.038],[-11.689,28.149],[-10.901,28.832],[-10.4,29.099],[-9.565,29.934],[-9.815,31.178],[-9.435,32.038],[-9.301,32.565],[-8.657,33.24],[-7.654,33.697],[-6.912,34.11],[-6.244,35.146],[-5.93,35.76],[-5.194,35.755],[-4.591,35.331],[-3.64,35.4],[-2.604,35.179],[-2.17,35.169],[-1.209,35.715],[-.127,35.889],[.504,36.301],[1.467,36.606],[3.162,36.784],[4.816,36.865],[5.32,36.716],[6.262,37.111],[7.331,37.119],[7.737,36.886],[8.421,36.946],[9.51,37.35],[10.21,37.23],[10.181,36.724],[11.029,37.092],[11.1,36.9],[10.6,36.41],[10.593,35.948],[10.94,35.699],[10.808,34.833],[10.15,34.331],[10.34,33.786],[10.857,33.769],[11.109,33.293],[11.489,33.137],[12.663,32.793],[13.083,32.879],[13.919,32.712],[15.246,32.265],[15.714,31.376],[16.612,31.182],[18.021,30.763],[19.086,30.266],[19.574,30.526],[20.053,30.986],[19.82,31.752],[20.134,32.238],[20.854,32.707],[21.543,32.843],[22.896,32.638],[23.237,32.192],[23.609,32.187],[23.927,32.017],[24.921,31.899],[25.165,31.569],[26.495,31.586],[27.458,31.321],[28.451,31.026],[28.914,30.87],[29.683,31.187],[30.095,31.474],[30.977,31.556],[31.688,31.43],[31.961,30.934],[32.193,31.26],[32.994,31.024],[33.773,30.968],[34.266,31.219],[34.557,31.549],[34.488,31.606],[34.753,32.073],[34.956,32.828],[35.099,33.081],[35.126,33.091],[35.482,33.906],[35.98,34.61],[35.998,34.645],[35.905,35.41],[36.15,35.821],[35.782,36.275],[36.161,36.651],[35.551,36.565],[34.714,36.795],[34.027,36.22],[32.509,36.107],[31.7,36.644],[30.622,36.678],[30.391,36.263],[29.7,36.144],[28.733,36.677],[27.641,36.659],[27.049,37.654],[26.318,38.208],[26.805,38.986],[26.171,39.464],[27.28,40.42],[28.82,40.46],[29.24,41.22],[31.146,41.088],[32.348,41.736],[33.513,42.019],[35.168,42.04],[36.913,41.336],[38.348,40.949],[39.513,41.103],[40.373,41.014],[41.554,41.536],[41.703,41.963],[41.453,42.645],[40.875,43.014],[40.321,43.129],[39.955,43.435],[38.68,44.28],[37.539,44.657],[36.675,45.245],[37.403,45.404],[38.233,46.241],[37.674,46.637],[39.148,47.045],[39.121,47.263],[38.224,47.102],[37.425,47.022],[36.76,46.699],[35.824,46.646],[34.962,46.273],[35.021,45.651],[35.51,45.41],[36.53,45.47],[36.335,45.113],[35.24,44.94],[33.883,44.362],[33.326,44.565],[33.547,45.035],[32.454,45.328],[32.631,45.519],[33.588,45.852],[33.299,46.081],[31.744,46.333],[31.675,46.706],[30.749,46.583],[30.378,46.032],[29.603,45.293],[29.627,45.036],[29.142,44.82],[28.838,44.914],[28.558,43.708],[28.039,43.293],[27.674,42.578],[27.997,42.008],[28.115,41.623],[28.989,41.3],[28.807,41.055],[27.619,41],[27.193,40.691],[26.358,40.152],[26.043,40.618],[26.057,40.824],[25.448,40.852],[24.926,40.947],[23.715,40.687],[24.408,40.125],[23.9,39.962],[23.343,39.961],[22.814,40.476],[22.626,40.257],[22.85,39.659],[23.35,39.19],[22.973,38.971],[23.53,38.51],[24.025,38.22],[24.04,37.655],[23.115,37.92],[23.41,37.41],[22.775,37.305],[23.154,36.422],[22.49,36.41],[21.67,36.845],[21.295,37.645],[21.12,38.31],[20.73,38.77],[20.218,39.34],[20.15,39.625],[19.98,39.695],[19.96,39.915],[19.406,40.251],[19.319,40.727],[19.404,41.409],[19.54,41.72],[19.372,41.878],[19.162,41.955],[18.882,42.281],[18.45,42.48],[17.51,42.85],[16.93,43.21],[16.016,43.507],[15.175,44.243],[15.376,44.318],[14.92,44.739],[14.902,45.076],[14.259,45.234],[13.952,44.802],[13.657,45.137],[13.68,45.484],[13.715,45.5],[13.938,45.591],[13.142,45.737],[12.329,45.382],[12.384,44.885],[12.261,44.601],[12.589,44.091],[13.527,43.588],[14.03,42.761],[15.143,41.955],[15.926,41.961],[16.17,41.74],[15.889,41.541],[16.785,41.18],[17.519,40.877],[18.377,40.356],[18.48,40.169],[18.294,39.811],[17.739,40.278],[16.87,40.442],[16.449,39.795],[17.172,39.425],[17.053,38.903],[16.635,38.844],[16.101,37.986],[15.684,37.909],[15.688,38.215],[15.892,38.751],[16.109,38.964],[15.719,39.544],[15.414,40.048],[14.998,40.173],[14.703,40.605],[14.061,40.786],[13.628,41.188],[12.888,41.253],[12.107,41.705],[11.192,42.356],[10.512,42.932],[10.2,43.92],[9.703,44.036],[8.889,44.366],[8.429,44.231],[7.851,43.767],[7.435,43.694],[6.529,43.129],[4.557,43.4],[3.101,43.075],[2.986,42.473],[3.039,41.892],[2.092,41.226],[.81,41.015],[.721,40.678],[.107,40.124],[-.279,39.31],[.111,38.739],[-.467,38.292],[-.683,37.642],[-1.438,37.443],[-2.146,36.674],[-3.416,36.659],[-4.369,36.678],[-4.995,36.325],[-5.377,35.947],[-5.866,36.03],[-6.237,36.368],[-6.52,36.943],[-7.454,37.098],[-7.856,36.838],[-8.383,36.979],[-8.899,36.869],[-8.746,37.651],[-8.84,38.266],[-9.287,38.359],[-9.526,38.737],[-9.447,39.392],[-9.048,39.755],[-8.977,40.159],[-8.769,40.761],[-8.791,41.184],[-8.991,41.544],[-9.035,41.881],[-8.984,42.593],[-9.393,43.027],[-7.978,43.748],[-6.755,43.568],[-5.412,43.574],[-4.348,43.404],[-3.518,43.456],[-1.901,43.423],[-1.384,44.023],[-1.194,46.015],[-2.226,47.065],[-2.963,47.57],[-4.492,47.955],[-4.592,48.684],[-3.296,48.902],[-1.617,48.644],[-1.933,49.776],[-.989,49.347],[1.339,50.127],[1.639,50.947],[2.513,51.148],[3.315,51.346],[3.83,51.62],[4.706,53.092],[6.074,53.51],[6.905,53.482],[7.101,53.694],[7.936,53.748],[8.122,53.528],[8.801,54.021],[8.572,54.396],[8.526,54.963],[8.12,55.518],[8.09,56.54],[8.257,56.81],[8.544,57.11],[9.425,57.172],[9.776,57.448],[10.58,57.73],[10.546,57.216],[10.25,56.89],[10.37,56.61],[10.912,56.459],[10.668,56.081],[10.37,56.19],[9.65,55.47],[9.922,54.983],[9.94,54.597],[10.95,54.364],[10.94,54.009],[11.956,54.196],[12.518,54.471],[13.648,54.075],[14.12,53.757],[14.803,54.051],[16.364,54.513],[17.623,54.852],[18.621,54.683],[18.696,54.439],[19.661,54.426],[19.888,54.866],[21.268,55.19],[21.056,56.031],[21.091,56.784],[21.582,57.412],[22.524,57.753],[23.318,57.006],[24.121,57.026],[24.313,57.794],[24.429,58.383],[24.061,58.258],[23.427,58.613],[23.34,59.187],[24.604,59.466],[25.864,59.611],[26.949,59.446],[27.981,59.476],[29.118,60.028],[28.07,60.503],[26.255,60.424],[24.497,60.057],[22.87,59.846],[22.291,60.392],[21.322,60.72],[21.545,61.705],[21.059,62.607],[21.536,63.19],[22.443,63.818],[24.731,64.902],[25.398,65.112],[25.294,65.534],[23.904,66.007],[22.183,65.724],[21.214,65.026],[21.37,64.414],[19.779,63.61],[17.848,62.75],[17.12,61.341],[17.831,60.637],[18.788,60.082],[17.869,58.954],[16.829,58.72],[16.448,57.041],[15.88,56.104],[14.667,56.201],[14.101,55.408],[12.943,55.362],[12.625,56.307],[11.788,57.442],[11.027,58.856],[10.357,59.47],[8.382,58.313],[7.049,58.079],[5.666,58.588],[5.308,59.663],[4.992,61.971],[5.913,62.615],[8.554,63.454],[10.528,64.486],[12.358,65.88],[14.761,67.811],[16.436,68.563],[19.184,69.818],[21.378,70.255],[23.024,70.202],[24.547,71.031],[26.37,70.986],[28.166,71.185],[31.294,70.454],[30.005,70.186],[31.101,69.558],[32.133,69.906],[33.776,69.302],[36.514,69.063],[40.292,67.932],[41.06,67.457],[41.126,66.792],[40.016,66.266],[38.383,66],[33.919,66.76],[33.185,66.633],[34.815,65.9],[34.944,64.414],[36.231,64.109],[37.013,63.85],[37.142,64.335],[36.518,64.78],[37.176,65.143],[39.594,64.521],[40.436,64.765],[39.763,65.497],[42.093,66.476],[43.016,66.419],[43.95,66.069],[44.532,66.756],[43.698,67.352],[44.188,67.951],[43.453,68.571],[46.25,68.25],[46.821,67.69],[45.555,67.567],[45.562,67.01],[46.349,66.668],[47.894,66.885],[48.139,67.523],[50.228,67.999],[53.718,68.857],[54.472,68.808],[53.486,68.201],[54.726,68.097],[55.443,68.439],[57.317,68.466],[58.802,68.881],[59.942,68.279],[61.078,68.941],[60.03,69.52],[60.55,69.85],[63.504,69.547],[64.888,69.235],[68.512,68.092],[69.181,68.616],[68.164,69.144],[68.135,69.357],[66.93,69.455],[67.26,69.929],[66.725,70.709],[66.695,71.029],[68.54,71.935],[69.196,72.844],[69.94,73.04],[72.588,72.776],[72.796,72.22],[71.848,71.409],[72.47,71.09],[72.792,70.391],[72.565,69.021],[73.668,68.408],[73.239,67.74],[71.28,66.32],[72.423,66.173],[72.821,66.533],[73.921,66.789],[74.187,67.284],[75.052,67.76],[74.469,68.329],[74.936,68.989],[73.842,69.071],[73.602,69.628],[74.4,70.632],[73.101,71.447],[74.891,72.121],[74.659,72.832],[75.158,72.855],[75.683,72.3],[75.289,71.336],[76.359,71.153],[75.903,71.874],[77.577,72.267],[79.652,72.32],[81.5,71.75],[80.611,72.583],[80.511,73.648],[82.25,73.85],[84.655,73.806],[86.822,73.937],[86.01,74.46],[87.167,75.117],[88.316,75.144],[90.26,75.64],[92.901,75.773],[93.234,76.047],[95.86,76.14],[96.678,75.916],[98.922,76.447],[100.76,76.43],[101.035,76.862],[101.991,77.287],[104.352,77.698],[106.067,77.374],[104.705,77.128],[106.97,76.974]],[[49.11,41.282],[49.619,40.573],[50.085,40.526],[50.393,40.257],[49.569,40.176],[49.395,39.399],[49.223,39.049],[48.857,38.815],[48.883,38.32],[49.2,37.583],[50.148,37.375],[50.842,36.873],[52.264,36.7],[53.826,36.965],[53.922,37.199],[53.735,37.906],[53.881,38.952],[53.101,39.291],[53.358,39.975],[52.694,40.034],[52.915,40.877],[53.858,40.631],[54.737,40.951],[54.008,41.551],[53.722,42.123],[52.917,41.868],[52.815,41.135],[52.503,41.783],[52.446,42.027],[52.692,42.444],[52.502,42.792],[51.343,43.133],[50.891,44.031],[50.339,44.284],[50.306,44.61],[51.279,44.515],[51.317,45.246],[52.167,45.409],[53.041,45.259],[53.221,46.235],[53.043,46.853],[52.042,46.805],[51.192,47.049],[50.034,46.609],[49.101,46.399],[48.646,45.806],[47.676,45.641],[46.682,44.609],[47.591,43.66],[47.492,42.987],[48.584,41.809],[49.11,41.282]]],[[[-93.84,77.52],[-94.296,77.491],[-96.17,77.555],[-96.436,77.835],[-94.423,77.82],[-93.721,77.634],[-93.84,77.52]]],[[[-110.187,77.697],[-112.051,77.409],[-113.534,77.732],[-112.725,78.051],[-111.264,78.153],[-109.854,77.996],[-110.187,77.697]]],[[[24.724,77.854],[22.49,77.445],[20.726,77.677],[21.416,77.935],[20.812,78.255],[22.884,78.455],[23.281,78.08],[24.724,77.854]]],[[[-109.663,78.602],[-110.881,78.407],[-112.542,78.408],[-112.526,78.551],[-111.5,78.85],[-110.964,78.804],[-109.663,78.602]]],[[[-95.83,78.057],[-97.31,77.851],[-98.124,78.083],[-98.553,78.458],[-98.632,78.872],[-97.337,78.832],[-96.754,78.766],[-95.559,78.418],[-95.83,78.057]]],[[[-100.06,78.325],[-99.671,77.908],[-101.304,78.019],[-102.95,78.343],[-105.176,78.38],[-104.21,78.677],[-105.42,78.918],[-105.492,79.302],[-103.529,79.165],[-100.825,78.8],[-100.06,78.325]]],[[[105.075,78.307],[99.438,77.921],[101.265,79.234],[102.086,79.346],[102.838,79.281],[105.372,78.713],[105.075,78.307]]],[[[18.252,79.702],[21.544,78.956],[19.027,78.563],[18.472,77.827],[17.594,77.638],[17.118,76.809],[15.913,76.77],[13.763,77.38],[14.67,77.736],[13.171,78.025],[11.222,78.869],[10.445,79.652],[13.171,80.01],[13.719,79.66],[15.143,79.674],[15.523,80.016],[16.991,80.051],[18.252,79.702]]],[[[25.448,80.407],[27.408,80.056],[25.925,79.518],[23.024,79.4],[20.075,79.567],[19.897,79.842],[18.462,79.86],[17.368,80.319],[20.456,80.598],[21.908,80.358],[22.919,80.657],[25.448,80.407]]],[[[51.136,80.547],[49.794,80.415],[48.894,80.34],[48.755,80.175],[47.586,80.01],[46.503,80.247],[47.072,80.559],[44.847,80.59],[46.799,80.772],[48.318,80.784],[48.523,80.515],[49.097,80.754],[50.04,80.919],[51.523,80.7],[51.136,80.547]]],[[[99.94,78.881],[97.758,78.756],[94.973,79.045],[93.313,79.427],[92.545,80.144],[91.181,80.341],[93.778,81.025],[95.941,81.25],[97.884,80.747],[100.187,79.78],[99.94,78.881]]],[[[-87.02,79.66],[-85.814,79.337],[-87.188,79.039],[-89.035,78.287],[-90.804,78.215],[-92.877,78.343],[-93.951,78.751],[-93.936,79.114],[-93.145,79.38],[-94.974,79.372],[-96.076,79.705],[-96.71,80.158],[-96.016,80.602],[-95.323,80.907],[-94.298,80.977],[-94.735,81.206],[-92.41,81.257],[-91.133,80.723],[-89.45,80.509],[-87.81,80.32],[-87.02,79.66]]],[[[-68.5,83.106],[-65.827,83.028],[-63.68,82.9],[-61.85,82.629],[-61.894,82.362],[-64.334,81.928],[-66.753,81.725],[-67.658,81.501],[-65.48,81.507],[-67.84,80.9],[-69.47,80.617],[-71.18,79.8],[-73.243,79.634],[-73.88,79.43],[-76.908,79.323],[-75.529,79.198],[-76.22,79.019],[-75.393,78.526],[-76.344,78.183],[-77.889,77.9],[-78.363,77.509],[-79.76,77.21],[-79.62,76.983],[-77.911,77.022],[-77.889,76.778],[-80.561,76.178],[-83.174,76.454],[-86.112,76.299],[-87.6,76.42],[-89.491,76.472],[-89.616,76.952],[-87.767,77.178],[-88.26,77.9],[-87.65,77.97],[-84.976,77.539],[-86.34,78.18],[-87.962,78.372],[-87.152,78.759],[-85.379,78.997],[-85.095,79.345],[-86.507,79.736],[-86.932,80.251],[-84.198,80.208],[-83.409,80.1],[-81.848,80.464],[-84.1,80.58],[-87.599,80.516],[-89.367,80.856],[-90.2,81.26],[-91.368,81.553],[-91.587,81.894],[-90.1,82.085],[-88.932,82.118],[-86.97,82.28],[-85.5,82.652],[-84.26,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.307,83.131],[-76.25,83.172],[-75.719,83.064],[-72.832,83.233],[-70.666,83.17],[-68.5,83.106]]],[[[-27.1,83.52],[-20.845,82.727],[-22.692,82.342],[-26.518,82.298],[-31.9,82.2],[-31.396,82.022],[-27.857,82.132],[-24.844,81.787],[-22.903,82.093],[-22.072,81.734],[-23.17,81.153],[-20.624,81.525],[-15.768,81.912],[-12.77,81.719],[-12.209,81.292],[-16.285,80.58],[-16.85,80.35],[-20.046,80.177],[-17.73,80.129],[-18.9,79.4],[-19.705,78.751],[-19.674,77.639],[-18.473,76.986],[-20.035,76.944],[-21.679,76.628],[-19.834,76.098],[-19.599,75.248],[-20.668,75.156],[-19.373,74.296],[-21.594,74.224],[-20.435,73.817],[-20.762,73.464],[-22.172,73.31],[-23.566,73.307],[-22.313,72.629],[-22.3,72.184],[-24.278,72.598],[-24.793,72.33],[-23.443,72.08],[-22.133,71.469],[-21.754,70.664],[-23.536,70.471],[-24.307,70.856],[-25.543,71.431],[-25.201,70.752],[-26.363,70.226],[-23.727,70.184],[-22.349,70.129],[-25.029,69.259],[-27.747,68.47],[-30.674,68.125],[-31.777,68.121],[-32.811,67.735],[-34.202,66.68],[-36.353,65.979],[-37.044,65.938],[-38.375,65.692],[-39.812,65.458],[-40.669,64.84],[-40.683,64.139],[-41.189,63.482],[-42.819,62.682],[-42.417,61.901],[-42.866,61.074],[-43.378,60.098],[-44.788,60.037],[-46.264,60.853],[-48.263,60.858],[-49.233,61.407],[-49.9,62.383],[-51.633,63.627],[-52.14,64.278],[-52.277,65.177],[-53.662,66.1],[-53.302,66.837],[-53.969,67.189],[-52.98,68.358],[-51.475,68.73],[-51.08,69.148],[-50.871,69.929],[-52.014,69.575],[-52.558,69.426],[-53.456,69.284],[-54.683,69.61],[-54.75,70.289],[-54.359,70.821],[-53.431,70.836],[-51.39,70.57],[-53.109,71.205],[-54.004,71.547],[-55,71.407],[-55.835,71.654],[-54.718,72.586],[-55.326,72.959],[-56.12,73.65],[-57.324,74.71],[-58.597,75.099],[-58.585,75.517],[-61.269,76.102],[-63.392,76.175],[-66.064,76.135],[-68.504,76.061],[-69.665,76.38],[-71.403,77.009],[-68.777,77.323],[-66.764,77.376],[-71.043,77.636],[-73.297,78.044],[-73.159,78.433],[-69.373,78.914],[-65.711,79.394],[-65.324,79.758],[-68.023,80.117],[-67.151,80.516],[-63.689,81.214],[-62.234,81.321],[-62.651,81.77],[-60.282,82.034],[-57.207,82.191],[-54.134,82.2],[-53.043,81.888],[-50.391,82.439],[-48.004,82.065],[-46.6,81.986],[-44.523,81.661],[-46.901,82.2],[-46.764,82.628],[-43.406,83.225],[-39.898,83.18],[-38.622,83.549],[-35.088,83.645],[-27.1,83.52]]]],Ko=Object.freeze({map:[2048,1024],walnut:[256,512],scales:[1024,256]}),hr=Math.PI*2,Vp=(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e};function Zo(i,t=!1){const e=new Fi(i);return e.colorSpace=ce,e.anisotropy=4,e.wrapS=t?Mn:Je,e.wrapT=Je,e.name="Antique globe / "+i.width+"x"+i.height,e}function $0(i,t){let e=Math.imul(i+19,374761393)^Math.imul(t+53,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function Ze(i,t,e,n,r,s,o=!1){i.font=`${o?"italic ":""}${r}px Georgia, "Times New Roman", serif`,i.textBaseline="middle",i.textAlign="left";const a=[...t].map(c=>i.measureText(c).width);let l=e-(a.reduce((c,u)=>c+u,0)+(t.length-1)*s)/2;for(let c=0;c<t.length;c++)i.fillText(t[c],l,n),l+=a[c]+s}function rc(i,t,e,n){i.save(),i.translate(t,e),i.strokeStyle="#766347",i.lineWidth=.9;for(const r of[n*.65,n*.71,n*1.02])i.beginPath(),i.arc(0,0,r,0,hr),i.stroke();for(let r=0;r<16;r++){i.save(),i.rotate(r*hr/16);const s=n*(r%4===0?1.25:r%2===0?.91:.64);i.beginPath(),i.moveTo(0,-s),i.lineTo(n*.1,0),i.lineTo(0,n*.15),i.closePath(),i.fillStyle=r%2?"#b79e6d":"#5e654f",i.fill(),i.stroke(),i.beginPath(),i.moveTo(0,-s),i.lineTo(-n*.1,0),i.lineTo(0,n*.15),i.closePath(),i.fillStyle="#e4d3a9",i.fill(),i.stroke(),i.restore()}i.fillStyle="#514936",Ze(i,"N",0,-n*1.52,15,0),Ze(i,"S",0,n*1.48,11,0),Ze(i,"E",n*1.48,0,11,0),Ze(i,"W",-n*1.48,0,11,0),i.restore()}function Wp(i){const t=i.getContext("2d"),e=i.width,n=i.height,r=(c,u)=>[(c+180)/360*e,(90-u)/180*n],s=t.createImageData(e,n);for(let c=0;c<n;c++)for(let u=0;u<e;u++){const h=(c*e+u)*4,f=($0(u,c)-.5)*5+Math.sin(u*.038)*Math.sin(c*.028)*1.5;s.data[h]=222+f,s.data[h+1]=207+f,s.data[h+2]=167+f,s.data[h+3]=255}t.putImageData(s,0,0),t.strokeStyle="rgba(123,89,52,0.12)",t.lineWidth=.75;for(const[c,u]of[[-138,-13],[68,-28]]){const[h,f]=r(c,u);for(let d=0;d<16;d++){const p=d*hr/16;t.beginPath(),t.moveTo(h-Math.cos(p)*e,f-Math.sin(p)*e),t.lineTo(h+Math.cos(p)*e,f+Math.sin(p)*e),t.stroke()}}t.lineJoin="round";for(let c=0;c<ic.length;c++){t.beginPath();for(const u of ic[c])u.forEach(([h,f],d)=>{const[p,_]=r(h,f);d===0?t.moveTo(p,_):t.lineTo(p,_)}),t.closePath();t.strokeStyle="rgba(119,107,69,0.22)",t.lineWidth=5,t.stroke(),t.fillStyle=["#9ca187","#a4a68a","#a6a88b","#98a08a"][c%4],t.fill("evenodd"),t.strokeStyle="#6e745b",t.lineWidth=1.15,t.stroke()}t.strokeStyle="rgba(100,89,62,0.30)",t.lineWidth=.65;for(let c=-180;c<=180;c+=15){const[u]=r(c,0);t.beginPath(),t.moveTo(u,0),t.lineTo(u,n),t.stroke()}for(let c=-75;c<=75;c+=15){const[,u]=r(0,c);t.beginPath(),t.moveTo(0,u),t.lineTo(e,u),t.stroke()}for(const c of[-66.56,-23.44,23.44,66.56]){const[,u]=r(0,c);t.setLineDash([5,4]),t.strokeStyle="rgba(120,83,45,0.43)",t.beginPath(),t.moveTo(0,u),t.lineTo(e,u),t.stroke()}t.setLineDash([]),t.strokeStyle="#9b8158",t.lineWidth=.8;for(const c of[n/2-1.5,n/2+1.5])t.beginPath(),t.moveTo(0,c),t.lineTo(e,c),t.stroke();t.fillStyle="#705b3e";for(let c=-180;c<=180;c+=5){const[u,h]=r(c,0),f=c%15?2.8:5;t.beginPath(),t.moveTo(u,h-f),t.lineTo(u,h+f),t.stroke(),c%30===0&&Math.abs(c)<180&&Ze(t,`${Math.abs(c)}°`,u,h+12,10,.2)}const o=[["NORTH",-106,47,22,3],["AMERICA",-104,40,23,3],["SOUTH",-58,-14,19,2.3],["AMERICA",-60,-21,19,2.3],["AFRICA",19,9,24,3.5],["EUROPE",25,52,20,2],["ASIA",92,42,29,5],["AUSTRALIA",134,-25,18,1.9],["GREENLAND",-42,72,13,1.5],["ANTARCTICA",20,-78,19,4]];t.fillStyle="#434f3e";for(const[c,u,h,f,d]of o)Ze(t,c,...r(u,h),f,d);t.fillStyle="#7c7155";for(const[c,u,h,f]of[["Atlantic Ocean",-34,29,22],["Atlantic Ocean",-20,-30,20],["Pacific Ocean",-130,15,25],["Pacific Ocean",165,-9,18],["Indian Ocean",75,-12,22],["Southern Ocean",-64,-57,20]])Ze(t,c,...r(u,h),f,1.2,!0);rc(t,...r(-132,-25),29),rc(t,...r(71,-40),22);const[a,l]=r(-132,-49);t.strokeStyle="#9d885d",t.lineWidth=1;for(const c of[0,5])t.beginPath(),t.ellipse(a,l,115-c,35-c,0,0,hr),t.stroke();return t.fillStyle="#6b6047",Ze(t,"ORBIS TERRARUM",a,l-8,14,1.8),Ze(t,"THE LIBRARY COLLECTION",a,l+10,9,1.4),i}function Xp(i){const t=i.getContext("2d"),e=i.width,n=i.height,r=t.createImageData(e,n);for(let s=0;s<n;s++)for(let o=0;o<e;o++){const a=o/e*hr,l=Math.sin(a*15+Math.sin(s*.016)*.8)*5+Math.sin(a*51+Math.sin(s*.013))*2.5+($0(o,s)-.5)*4,c=7*Math.sin(a*3+s*.006),u=(s*e+o)*4;r.data[u]=76+l+c,r.data[u+1]=42+l*.7+c*.6,r.data[u+2]=24+l*.4+c*.3,r.data[u+3]=255}return t.putImageData(r,0,0),i}function qp(i){const t=i.getContext("2d"),e=i.width,n=i.height;t.fillStyle="#bfa373",t.fillRect(0,0,e,n);for(let r=0;r<2;r++){const s=r*128;t.fillStyle=r?"#c5ad80":"#cdb88e",t.fillRect(0,s+8,e,112),t.strokeStyle="#857047",t.lineWidth=1;for(const o of[9,14,114,119])t.beginPath(),t.moveTo(0,s+o),t.lineTo(e,s+o),t.stroke();for(let o=0;o<360;o+=1){const a=o/360*e,l=o%10===0,c=o%5===0,u=l?25:c?17:9;if(t.beginPath(),t.moveTo(a,s+15),t.lineTo(a,s+15+u),t.stroke(),t.beginPath(),t.moveTo(a,s+113),t.lineTo(a,s+113-u),t.stroke(),o%30===0){t.fillStyle="#504631";const h=(450-o)%360,f=r?`${Math.min(o%180,180-o%180)}°`:{0:"N",90:"E",180:"S",270:"W"}[h]||`${h}`;Ze(t,f,a,s+64,22,1),o===0&&Ze(t,f,e,s+64,22,1)}}}return i}function Yp(i=Vp){const t=Zo(Wp(i(...Ko.map))),e=Zo(Xp(i(...Ko.walnut)),!0),n=Zo(qp(i(...Ko.scales)),!0),r=(s,o)=>{const a=new we(o);return a.name=`Antique globe / ${s}`,a};return{globe:r("engraved vellum",{map:t,roughness:.73,metalness:0}),globeWalnut:r("French-polished walnut",{map:e,roughness:.39,metalness:0}),globeBrass:r("aged brass",{color:11637593,roughness:.36,metalness:.78}),globeScales:r("engraved brass scales",{map:n,roughness:.48,metalness:.5})}}const oo=Math.PI*2,sc=Object.freeze({location:[-5.9,0,-.7],yaw:.3,centreHeight:1,radius:.29,axisTilt:.4,horizonOuterRadius:.346,meridianOuterRadius:.327,sphereSegments:[64,40],ringSegments:96,collision:{width:.7,height:1.3,depth:.7,centre:[0,.65,0]}});function oc(i,t=96){const e=[],n=[],r=[],s=[];for(let a=0;a<i.length;a++){const[l,c]=i[a],[u,h]=i[(a+1)%i.length],f=u-l,d=h-c,p=Math.hypot(f,d),_=e.length/3;for(let g=0;g<=t;g++){const m=g/t*oo,y=Math.cos(m),M=Math.sin(m);for(const[x,A]of[[l,c],[u,h]])e.push(x*y,x*M,A),n.push(d/p*y,d/p*M,-f/p),r.push(g/t,x*4);if(g<t){const x=_+g*2;s.push(x,x+2,x+1,x+2,x+3,x+1)}}}const o=new Qt;return o.setAttribute("position",new Nt(e,3)),o.setAttribute("normal",new Nt(n,3)),o.setAttribute("uv",new Nt(r,2)),o.setIndex(s),o}function Jo(i,t,e,n,r=96){const s=new no(i,t,r),o=s.attributes.position,a=s.attributes.uv;for(let l=0;l<o.count;l++){const u=(Math.atan2(o.getY(l),o.getX(l))/oo+1)%1,h=(Math.hypot(o.getX(l),o.getY(l))-i)/(t-i),f=l%(r+1);a.setXY(l,f===r?1:u,1-(n*128+10+h*108)/256),o.setZ(l,e)}return s}function jp(){const i=[[.006,.02,.325],[.01,.026,.325],[.026,.027,.325],[.041,.021,.322],[.056,.014,.318],[.09,.014,.309],[.135,.019,.297],[.18,.023,.291],[.215,.019,.289],[.236,.014,.289],[.252,.021,.289],[.268,.021,.289],[.28,.015,.291],[.45,.014,.306],[.65,.012,.319],[.79,.016,.32],[.808,.022,.32],[.825,.023,.32],[.843,.018,.32],[.865,.016,.32],[.941,.017,.32],[.967,.024,.32],[.98,.024,.32]],t=[],e=[],n=[],r=12;i.forEach(([l,c,u],h)=>{for(let f=0;f<=r;f++){const d=f/r*oo;if(t.push(u+c*Math.cos(d),l,c*Math.sin(d)),e.push(f/r,l),h<i.length-1&&f<r){const p=h*(r+1)+f,_=p+r+1;n.push(p,_,p+1,_,_+1,p+1)}}});const s=new Qt;s.setAttribute("position",new Nt(t,3)),s.setAttribute("uv",new Nt(e,2)),s.setIndex(n),s.computeVertexNormals();const o=s.attributes.normal,a=new D;for(let l=0;l<i.length;l++){const c=l*(r+1),u=c+r;a.fromBufferAttribute(o,c).add(new D().fromBufferAttribute(o,u)).normalize(),o.setXYZ(c,a.x,a.y,a.z),o.setXYZ(u,a.x,a.y,a.z)}return s}function $p(i,t,e,n=8){const r=new D(...i),s=new D(...t),o=s.clone().sub(r),a=new bn(e,e,o.length(),n);return a.applyQuaternion(new ke().setFromUnitVectors(new D(0,1,0),o.normalize())),a.translate(...r.add(s).multiplyScalar(.5).toArray()),a}function Kp(i,t){const{radius:e,axisTilt:n,centreHeight:r}=sc,s=(u,h,f=0,d=0,p=0,_=0,g=0,m=0)=>{const y=h.index,M=h.attributes.position,x=[],A=new D,E=new D,R=new D;for(let S=0;S<y.count;S+=3)A.fromBufferAttribute(M,y.getX(S)),E.fromBufferAttribute(M,y.getX(S+1)),R.fromBufferAttribute(M,y.getX(S+2)),E.sub(A).cross(R.sub(A)).lengthSq()>1e-17&&x.push(y.getX(S),y.getX(S+1),y.getX(S+2));h.setIndex(x),i.geo(u,h,f,d,p,_,g,m)},o=(u,h=32)=>new Oi(u.map(f=>new Rt(...f)),h),a=(u,h,f,d,p,_,g=0,m=0,y=0,M=64)=>s(u,new oi(h,f,5,M),d,p,_,g,m,y),l=new On(e,...sc.sphereSegments);l.rotateZ(n),s(t.globe,l,0,r,0),s(t.globeWalnut,oc([[.303,-.019],[.341,-.019],[.346,-.014],[.346,.007],[.342,.012],[.303,.012]],96),0,r-.01,0,-Math.PI/2),s(t.globeScales,Jo(.305,.341,.0127,0),0,r-.01,0,-Math.PI/2),a(t.globeBrass,.343,.0024,0,r+.003,0,Math.PI/2),a(t.globeBrass,.304,.0018,0,r+.003,0,Math.PI/2),a(t.globeBrass,.344,.002,0,r-.025,0,Math.PI/2),s(t.globeBrass,oc([[.306,-.006],[.325,-.006],[.327,-.004],[.327,.004],[.325,.006],[.306,.006]],96),0,r,0),s(t.globeScales,Jo(.307,.325,.0067,1),0,r,0);const c=Jo(.307,.325,.0067,1);c.rotateY(Math.PI),s(t.globeScales,c,0,r,0),a(t.globeBrass,.326,.0015,0,r,0);for(const u of[-1,1]){const h=new D(-Math.sin(n),Math.cos(n),0).multiplyScalar(u),f=o([[.009,0],[.012,.003],[.012,.008],[.007,.01],[.007,.018]],16);f.applyQuaternion(new ke().setFromUnitVectors(new D(0,1,0),h)),s(t.globeBrass,f,h.x*.2905,r+h.y*.2905,0)}for(let u=0;u<3;u++){const h=u/3*oo+Math.PI/6,f=jp();f.rotateY(h),s(t.globeWalnut,f);const d=m=>(m.rotateY(h),m),p=o([[0,.001],[.024,.001],[.027,.006],[.027,.027],[.023,.033]],12);p.translate(.325,0,0),s(t.globeBrass,d(p));for(const m of[.255,.815,.968]){const y=m===.255?.289:.32,M=new oi(m===.968?.024:.022,.0016,4,12);M.rotateX(Math.PI/2),M.translate(y,m,0),s(t.globeBrass,d(M))}const _=new Qs([new D(.035,.215,0),new D(.12,.192,0),new D(.23,.215,0),new D(.288,.259,0)]);s(t.globeWalnut,d(new _r(_,10,.01,6,!1)));const g=new On(.0045,8,4);g.scale(1,.45,1),g.translate(.337,1.005,0),s(t.globeBrass,d(g))}s(t.globeWalnut,o([[0,.183],[.028,.183],[.035,.192],[.035,.224],[.024,.234],[.017,.25],[.012,.26],[0,.264]],24)),a(t.globeBrass,.034,.0018,0,.22,0,Math.PI/2,0,0,24),s(t.globeBrass,$p([0,.264,0],[0,.674,0],.005,8)),s(t.globeBrass,o([[.014,.659],[.019,.663],[.019,.673],[.012,.677]],16))}const ac=new Te,lc=new ke;function ca(i,t,e,n,r){const s=new on(i,t,e),o=s.attributes.uv,a=r(),l=r(),c=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let u=0;u<6;u++){const[h,f]=c[u],d=f>h;for(let p=0;p<4;p++){const _=u*4+p;let g=o.getX(_)*h,m=o.getY(_)*f;if(d){const y=g;g=m,m=y}o.setXY(_,g/n+a,m/n+l)}}return s}class ua{constructor(t){this.rand=t,this.batches=new Map,this.solids=[]}add(t,e){this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(e)}frame(t,e,n,r=0){return new ao(this,new jt().makeRotationY(r).setPosition(t,e,n))}finish(t){for(const[e,n]of this.batches){for(const o of n)for(const a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);const r=so(n,!1),s=new Jt(r,e);s.castShadow=!e.userData.noShadow,s.receiveShadow=!0,s.matrixAutoUpdate=!1,t.add(s);for(const o of n)o.dispose()}this.batches.clear()}}class ao{constructor(t,e){this.b=t,this.m=e}sub(t,e,n,r=0){return new ao(this.b,this.m.clone().multiply(new jt().makeRotationY(r).setPosition(t,e,n)))}local(t,e,n,r=0,s=0,o=0){return ac.set(r,s,o),lc.setFromEuler(ac),new jt().compose(new D(t,e,n),lc,new D(1,1,1)).premultiply(this.m)}geo(t,e,n,r,s,o,a,l){e.applyMatrix4(this.local(n,r,s,o,a,l)),this.b.add(t,e)}box(t,e,n,r,s,o,a,l=0,c=0,u=0){this.geo(t,ca(e,n,r,t.userData.ts||1,this.b.rand),s,o,a,l,c,u)}cyl(t,e,n,r,s,o,a,l=12,c=0,u=0,h=0,f=!1,d,p){const _=new bn(e,n,r,l,1,f,d||0,p||Math.PI*2),g=t.userData.ts||1,m=_.attributes.uv,y=Math.PI*2*Math.max(e,n);for(let M=0;M<m.count;M++)m.setXY(M,m.getY(M)*r/g,m.getX(M)*y/g);this.geo(t,_,s,o,a,c,u,h)}sphere(t,e,n,r,s,o=1,a=1,l=1,c=12,u=8){const h=new On(e,c,u);h.scale(o,a,l),this.geo(t,h,n,r,s)}torus(t,e,n,r,s,o,a=0,l=0,c=0,u=32){this.geo(t,new oi(e,n,6,u),r,s,o,a,l,c)}plane(t,e,n,r,s,o,a=0,l=0,c=0,u=null){const h=new Fn(e,n);if(u){const f=h.attributes.uv;for(let d=0;d<f.count;d++)f.setXY(d,u[0]+f.getX(d)*u[2],u[1]+f.getY(d)*u[3])}this.geo(t,h,r,s,o,a,l,c)}solid(t,e,n,r,s,o){const a=this.local(r,s,o),l=new D,c=new D(1/0,1/0,1/0),u=new D(-1/0,-1/0,-1/0);for(let h=0;h<8;h++)l.set((h&1?.5:-.5)*t,(h&2?.5:-.5)*e,(h&4?.5:-.5)*n).applyMatrix4(a),c.min(l),u.max(l);this.b.solids.push({x0:c.x,x1:u.x,y0:c.y,y1:u.y,z0:c.z,z1:u.z})}sbox(t,e,n,r,s,o,a){this.box(t,e,n,r,s,o,a),this.solid(e,n,r,s,o,a)}}function Zp(){const i=(u,h)=>{const f=new we(u);return f.userData.ts=h||1,f},t=Xo(1,[118,70,38],[48,26,12],{rings:16}),e=Xo(2,[184,124,70],[104,62,30],{rings:15}),n=Xo(3,[84,50,30],[34,18,10],{rings:11}),r=yp(4),s=Kl(5,[232,214,184]),o=Kl(6,[150,158,124]),a=Zl(7,[100,34,22]),l=Zl(8,[92,56,30]),c=Mp(9);return{walnut:i({map:t,bumpMap:t,bumpScale:.6,roughness:.6,color:16777215},1.3),oak:i({map:e,bumpMap:e,bumpScale:.5,roughness:.48},1.6),dark:i({map:n,bumpMap:n,bumpScale:.5,roughness:.55},1.2),floor:i({map:r,bumpMap:r,bumpScale:1.2,roughness:.42},1.9),plaster:i({map:s,bumpMap:s,bumpScale:1.5,roughness:.94},3),sage:i({map:o,bumpMap:o,bumpScale:1.5,roughness:.92},2.5),ceil:i({map:s,roughness:.95,color:15919320},4),leather:i({map:a,bumpMap:a,bumpScale:1.2,roughness:.5},.9),leather2:i({map:l,bumpMap:l,bumpScale:1.2,roughness:.55},.9),stone:i({map:c,bumpMap:c,bumpScale:2,roughness:.88},1.4),iron:i({color:1841946,metalness:.75,roughness:.48}),brass:i({color:11831880,metalness:1,roughness:.32}),gilt:i({color:10122294,metalness:.8,roughness:.42}),soot:i({color:920587,roughness:1}),cushion:i({map:qo(10,[150,128,92],!0),roughness:.95},.5),cushion2:i({map:qo(11,[70,88,70],!1),roughness:.95},.4),runner:i({map:qo(12,[118,34,28],!0),roughness:.95},.6),paper:i({color:15129280,roughness:.9}),ceramic:i({color:15525590,roughness:.25}),terracotta:i({color:10246714,roughness:.85}),plant:i({color:4086828,roughness:.75,side:Ie}),greenGlass:i({color:1993264,emissive:3971642,emissiveIntensity:.55,roughness:.15,metalness:.1,side:Ie}),shade:i({color:15390376,emissive:16757865,emissiveIntensity:.9,roughness:.9,side:Ie}),flame:Object.assign(new si({color:new zt(2.4,1.6,.7)}),{userData:{noShadow:!0}}),ember:Object.assign(new si({color:new zt(2.2,.7,.2)}),{userData:{noShadow:!0}}),rug:i({map:bp(13),roughness:1}),painting:i({map:Ep(14),roughness:.55}),...Yp()}}const ha={H:10.5,GY:4.2},vt=.012;function Jp(i,t,e,n=null){const r=new ua(e),s=r.frame(0,0,0,0),o=ha.H,a=ha.GY,l=[],c=[],u=[],h=e;function f(T,L,U,z,V,ct,mt,bt,B){const kt=[L,U];for(const pt of bt)kt.push(pt[0],pt[1]);const Pt=[...new Set(kt)].sort((pt,ht)=>pt-ht);for(let pt=0;pt<Pt.length-1;pt++){const ht=Pt[pt],Tt=Pt[pt+1],_t=bt.filter(X=>X[0]<=ht&&X[1]>=Tt).sort((X,tt)=>X[2]-tt[2]);let I=ct;const w=(X,tt)=>{tt-X<.001||(T==="x"?s.sbox(B,V-z,tt-X,Tt-ht,(z+V)/2,(X+tt)/2,(ht+Tt)/2):s.sbox(B,Tt-ht,tt-X,V-z,(ht+Tt)/2,(X+tt)/2,(z+V)/2))};for(const X of _t)w(I,X[2]),I=X[3];w(I,mt)}}s.sbox(i.floor,14,.3,19,0,-.15,-.5),s.box(i.ceil,15,.3,20,0,o+.15,-.5),f("z",-7.5,7.5,-10.5,-10,0,o,[],i.plaster);function d(T,L,U,z,V,ct,mt,bt,B=!1){if(!n){B?s.sbox(T,L,U,z,V,ct,mt):s.box(T,L,U,z,V,ct,mt);return}const kt=[e(),e()];for(const[Pt,pt,ht,Tt,_t,I]of bt){let w=0;s.geo(T,ca(Pt,pt,ht,T.userData.ts||1,()=>kt[w++]),Tt,_t,I),B&&s.solid(Pt,pt,ht,Tt,_t,I)}}const p=n||{z0:7.07,z1:8.43,height:2.46};d(i.plaster,.5,o,20,7.25,o/2,-.5,[[.5,o,p.z0+10.5,7.25,o/2,(p.z0-10.5)/2],[.5,o-p.height,p.z1-p.z0,7.25,(o+p.height)/2,(p.z0+p.z1)/2],[.5,o,9.5-p.z1,7.25,o/2,(9.5+p.z1)/2]],!0),f("z",-7.5,7.5,9,9.5,0,o,[[-5,-3,4.5,8.3],[2.6,4.6,4.5,8.3]],i.plaster),f("x",-10.5,9.5,-7.5,-7,0,o,[[-5.6,-3.6,.9,7.2],[-1.6,.4,.9,7.2],[2.4,7.4,0,3.4],[3.2,6.6,5,8]],i.plaster),s.sbox(i.floor,4.5,.3,5,-9.25,-.15,4.9),s.box(i.ceil,5,.3,6,-9.5,3.75,4.9),s.box(i.plaster,5.4,.3,6.6,-9.75,4.05,4.9),f("z",-12,-7.5,1.9,2.4,0,3.6,[[-10.4,-8.6,.9,2.9]],i.sage),f("z",-12,-7.5,7.4,7.9,0,3.6,[[-10.4,-8.6,.9,2.9]],i.sage),f("x",1.9,7.9,-12,-11.5,0,3.6,[[2.9,6.9,.6,3]],i.sage);const m=-7+vt;for(const T of[3.2,4.9,6.6])s.box(i.dark,4-2*vt,.18,.14,-9.5,3.6-.09-vt,T);s.box(i.oak,.3,.3,5.2,m+.15,3.45,4.9);function y(T,L,U,z,V=!0){const ct=[e(),e()];function mt(pt,ht,Tt){let _t=0;return ca(pt,.05,ht,i.oak.userData.ts,()=>ct[_t++]).translate(0,.025+vt,Tt)}const bt=[mt(L+.3,.14,.07+vt),mt(L-2*vt,z,-z/2+vt)];T.geo(i.oak,so(bt,!1),0,0,0);for(const pt of bt)pt.dispose();T.box(i.oak,.12+vt,U+.12,.06,-L/2-.06+vt/2,U/2,.03+vt),T.box(i.oak,.12+vt,U+.12,.06,L/2+.06-vt/2,U/2,.03+vt),T.box(i.oak,L+.36,.14+vt,.07,0,U+.07-vt/2,.035+vt);const B=-z*.55;T.box(i.dark,L-2*vt,.07,.07,0,.06,B),T.box(i.dark,L-2*vt,.07,.07,0,U-.035-vt,B),T.box(i.dark,.07,U-2*vt,.07,-L/2+.035+vt,U/2,B),T.box(i.dark,.07,U-2*vt,.07,L/2-.035-vt,U/2,B);const kt=Math.max(1,Math.round(L/.62));for(let pt=1;pt<kt;pt++)T.box(i.iron,.03,U,.035,-L/2+L*pt/kt,U/2,B);const Pt=Math.max(1,Math.round(U/.55));for(let pt=1;pt<Pt;pt++)T.box(pt%4===0?i.dark:i.iron,L-2*vt,pt%4===0?.06:.025,.035,0,U*pt/Pt,B);if(V){const pt=[];for(const[ht,Tt]of[[-L/2,0],[L/2,0],[L/2,U],[-L/2,U]])pt.push(new D(ht,Tt,B).applyMatrix4(T.m));u.push(pt)}}y(s.sub(-7,.9,-4.6,Math.PI/2),2,6.3,.5),y(s.sub(-7,.9,-.6,Math.PI/2),2,6.3,.5),y(s.sub(-7,5,4.9,Math.PI/2),3.4,3,.5),y(s.sub(-11.5,.6,4.9,Math.PI/2),4,2.4,.5),y(s.sub(-9.5,.9,7.4,Math.PI),1.8,2,.5),y(s.sub(-9.5,.9,2.4,0),1.8,2,.5,!1),y(s.sub(-4,4.5,9,Math.PI),2,3.8,.5),y(s.sub(3.6,4.5,9,Math.PI),2,3.8,.5);for(const T of[2.33,7.47])s.box(i.oak,.14,3.5+vt,.6,-7+.07+vt,(3.5-vt)/2,T);for(const T of[-4.6,-.6])s.box(i.dark,.04,.85,2,-6.98+vt,.45,T);function M(T,L,U,z,V,ct,mt){const bt=mt-z/2,B=mt+z/2;d(T,L,U,z,V,ct,mt,[[L,U,p.z0-bt,V,ct,(bt+p.z0)/2],[L,U,B-p.z1,V,ct,(p.z1+B)/2]])}M(i.dark,.05,1,2.2-vt,7-.025-vt,.5,7.85-vt/2),M(i.oak,.08,.06,2.3-vt,6.96-vt,1.02,7.85-vt/2);for(const[T,L,U,z]of[[14,.3,0,-9.85],[14,.3,0,8.85],[.3,19,-6.85,-.5],[.3,19,6.85,-.5]]){const V=U&&U-Math.sign(U)*vt,ct=z===-.5?z:z-Math.sign(z)*vt;s.box(i.oak,T>1?T-2*vt:T,.22,L>1?L-2*vt:L,V,o-.11-vt,ct),s.box(i.dark,T>1?T-2*vt:T+.1,.08,L>1?L-2*vt:L+.12,V-(U?Math.sign(U)*.05:0),o-.26,ct-(z===-.5?0:Math.sign(z)*.06))}s.box(i.oak,.12,.1,19-2*vt,-6.94+vt,8.4,-.5),s.box(i.oak,14-2*vt,.1,.12,0,8.4,8.94-vt),s.box(i.oak,.12,.1,19-2*vt,6.94-vt,8.4,-.5);for(const T of[-4.6,-.6]){s.cyl(i.iron,.02,.02,2.9,-6.82,7.55,T,8,Math.PI/2,0,0);for(const L of[-1,1]){s.sphere(i.iron,.045,-6.82,7.55,T+L*1.45),s.box(i.iron,.12,.03,.03,-6.9,7.55,T+L*1.3);for(let U=0;U<4;U++)s.box(i.cushion2,.05+U%2*.03,4.85-U*.12,.05,-6.86+U%2*.03,5.08+U*.06,T+L*(1.04+U*.035),0,0,0);s.cyl(i.brass,.012,.012,.2,-6.8,3.4,T+L*1.1,6,Math.PI/2,0,0)}}for(const T of[-8.2,-4.6,-1,2.6,6.2]){s.box(i.dark,14-2*vt,.38,.3,0,9.85,T),s.box(i.dark,.24,.6,.24,0,10.2-vt,T);for(const L of[-1,1]){const U=(.2*Math.cos(.62)+1.4*Math.sin(.62))/2;s.box(i.dark,.2,1.4,.22,L*(7-vt-U),9.2,T,0,0,L*.62),s.box(i.iron,.36,.42,.32,L*3.4,9.85,T),s.box(i.dark,.25,.7,.32,L*(7-.125-vt),9.2,T)}}for(const T of[-3.4,3.4])s.box(i.dark,.2,.24,19-2*vt,T,10.25,-.5);s.sbox(i.floor,14,.35,3,0,a-.175,-8.5),s.sbox(i.floor,2.8,.35,5.8,5.6,a-.175,-4.1);for(let T=-6.6;T<4.2;T+=.9)s.box(i.dark,.12,.24,3-vt,T,a-.47,-8.5+vt/2);for(let T=-6.6;T<-1.2;T+=.9)s.box(i.dark,2.8-vt,.24,.12,5.6-vt/2,a-.47,T);s.box(i.oak,11.31-vt,.55,.24,-1.345+vt/2,a-.27,-6.9),s.box(i.oak,.24,.55,5.9,4.3,a-.27,-4.15),s.box(i.dark,11.31-vt,.06,.3,-1.345+vt/2,a-.02,-6.9),s.box(i.dark,.3,.06,5.9,4.3,a-.02,-4.15);const x=[[-4.6,-6.9,"x"],[-1.4,-6.9,"x"],[1.8,-6.9,"x"],[4.3,-6.9,"c"],[4.3,-4.1,"z"],[4.3,-1.35,"z"]];for(const[T,L,U]of x){s.cyl(i.iron,.07,.085,a-.55,T,(a-.55)/2,L,14),s.box(i.iron,.24,.16,.24,T,.08,L),s.box(i.iron,.26,.1,.26,T,a-.6,L),s.cyl(i.iron,.11,.07,.18,T,a-.75,L,14),s.solid(.26,a-.5,.26,T,(a-.5)/2,L);const z=U==="x"?[[1,0],[-1,0]]:U==="z"?[[0,1],[0,-1]]:[[-1,0],[0,1]];for(const[V,ct]of z)s.box(i.iron,.04,.9,.04,T+V*.3,a-.88,L+ct*.3,ct*.72,0,-V*.72),s.torus(i.iron,.12,.012,T+V*.22,a-.75,L+ct*.22,0,V?0:Math.PI/2,0,16)}function A(T,L,U,z,V,ct=2.4,mt){const bt=Math.hypot(U-T,z-L),B=Math.atan2(-(z-L),U-T),kt=s.sub(T,V,L,B);kt.box(i.oak,bt+.06,.07,.13,bt/2,1.02,0),kt.box(i.iron,bt,.04,.05,bt/2,.97,0),kt.box(i.iron,bt,.04,.05,bt/2,.1,0);const Pt=Math.round((mt||bt)/.13);for(let _t=1;_t<Pt;_t++){const I=bt*_t/Pt;kt.box(i.iron,.02,.86,.02,I,.53,0),_t%3===0&&kt.sphere(i.iron,.025,I,.45,0)}const pt=Math.max(1,Math.round(bt/ct));for(let _t=0;_t<=pt;_t++){const I=bt*_t/pt;kt.box(i.oak,.11,1.12,.11,I,.56,0),kt.sphere(i.oak,.065,I,1.16,0,1,.8,1)}const ht=mt?s.sub(-7,V,L,B):kt,Tt=mt||bt;ht.solid(Tt,1.1,.16,Tt/2,.55,0)}A(-7+.065+vt,-6.92,4.3,-6.92,a,2.4,11.3),A(4.3,-6.92,4.3,-1.25,a,1.9),s.box(i.oak,.08,.3,3-vt,-6.96+vt,a+.1,-8.5+vt/2);const E=a/24,R=.3,S=4.2,v=7,b=6.7,P=(S+v)/2,F=v-S,O=[];for(let T=1;T<=11;T++)O.push({y:T*E,z0:b-T*R,z1:b-(T-1)*R});O.push({y:12*E,z0:2.1,z1:3.4,landing:!0});for(let T=13;T<=23;T++)O.push({y:T*E,z0:2.1-(T-12)*R,z1:2.1-(T-13)*R});for(const T of O){const L=T.z1-T.z0,U=(T.z0+T.z1)/2;s.box(i.dark,F-vt,T.y-.045,L,P-vt/2,(T.y-.045)/2,U),s.box(i.oak,F+.03-vt,.045,L+.035,P-.015-vt/2,T.y-.0225,U+.0175),s.solid(F,T.y,L,P,T.y/2,U),s.box(i.runner,1.5,.012,L,P+.15,T.y+.006,U+.01),s.box(i.runner,1.5,E-.03,.012,P+.15,T.y-E/2-.02,T.z1+.007),s.cyl(i.brass,.008,.008,1.62,P+.15,T.y-E+.012,T.z1+.02,6,0,0,Math.PI/2);const z=T.landing?9:2;for(let V=0;V<z;V++){const ct=T.z0+L*(V+.5)/z;s.box(i.iron,.022,.9,.022,S+.07,T.y+.45,ct)}s.solid(.16,1.05,L,S+.07,T.y+.52,U)}const N=Math.atan(E/R),Y=[[b,0,b-11*R,11*E],[2.1,12*E,-1.2,23*E]];for(const[T,L,U,z]of Y){const V=Math.hypot(T-U,z-L),ct=(T+U)/2,mt=(L+z)/2;s.box(i.oak,.13,.07,V,S+.07,mt+1,ct,N,0,0),s.box(i.iron,.05,.04,V,S+.07,mt+.95,ct,N,0,0),s.box(i.oak,.07,.32,V+.2,S-.02,mt+.02,ct-.05,N,0,0)}s.box(i.oak,.13,.07,1.3,S+.07,12*E+1,2.75);for(const[T,L]of[[b-.12,0],[3.4,11*E],[2.1,12*E],[-1.25,a]])s.box(i.oak,.16,1.25,.16,S+.07,L+.62,T),s.box(i.oak,.2,.06,.2,S+.07,L+1.26,T),s.sphere(i.oak,.08,S+.07,L+1.35,T);s.solid(.2,1.25,.2,S+.07,.62,b-.12);function k(T,L,U,z,V={}){const ct=Math.max(1,Math.round(L/(V.bay||.92))),mt=L/ct,bt=V.spacing||.38,B=.14,kt=Math.floor((U-B-.12)/bt),Pt=(U-B-.12)/kt;T.box(i.dark,L,B,z-.03,L/2,B/2,-z/2-.015),T.box(i.walnut,L,U,.02,L/2,U/2,-z+.01);function pt(ht,Tt,_t,I,w,X){const tt=V.wallLeft?vt:-Tt/2,st=V.wallRight?L-vt:L+Tt/2;T.box(ht,st-tt,_t,I,(tt+st)/2,w,X)}pt(i.walnut,.06,.07,z+.05,U-.035,-z/2+.025),pt(i.walnut,.12,.05,z+.09,U+.025,-z/2+.045),V.noCornice||pt(i.dark,.02,.1,.03,U-.12,.01);for(let ht=0;ht<=ct;ht++){const Tt=Math.min(L-.02,Math.max(.02,ht*mt));T.box(i.walnut,.04,U-.07,z,Tt,(U-.07)/2,-z/2);const _t=ht===0&&V.wallLeft?.03+vt:ht===ct&&V.wallRight?L-.03-vt:Tt;T.box(i.dark,.06,U-.2,.015,_t,U/2-.05,.005)}for(let ht=0;ht<ct;ht++){const Tt=ht*mt+.02,_t=(ht+1)*mt-.02,I=(h()-.5)*.04;for(let w=0;w<=kt;w++){const X=B+w*Pt+(w>0&&w<kt?I:0);if(w>0&&w<kt+1&&T.box(i.walnut,_t-Tt,.026,z-.025,(Tt+_t)/2,X-.013,-z/2-.0125),w<kt){const st=B+(w+1)*Pt+(w+1<kt?I:0)-X-.026-.005,H=V.sparse?.8:.97;h()<H&&l.push({m:T.local(Tt+.005,X,-.012),len:_t-Tt-.01,clear:st,d:z-.04})}}}V.solid!==!1&&T.solid(L,U+.05,z,L/2,U/2,-z/2)}k(s.sub(-7,0,-9.6,0),14,3.45,.4,{wallLeft:!0,wallRight:!0}),k(s.sub(-6.6,0,-5.75,Math.PI/2),3.85,3.45,.4),k(s.sub(6.6,0,-9.6,-Math.PI/2),8.4,3.45,.4,{spacing:.4}),k(s.sub(-6.6,0,-1.7,Math.PI/2),1.8,2.4,.36,{spacing:.36}),k(s.sub(-6.6,0,2.3,Math.PI/2),1.8,2.4,.36,{spacing:.42}),k(s.sub(-1.4,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.4,wallRight:!0}),k(s.sub(7,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.37,wallLeft:!0}),k(s.sub(-7,a,-9.6,0),14,3.8,.4,{spacing:.4,wallLeft:!0,wallRight:!0}),k(s.sub(-6.6,a,-7,Math.PI/2),2.6,3.8,.4,{spacing:.4}),k(s.sub(6.6,a,-9.6,-Math.PI/2),8.4,3.8,.4,{spacing:.39});for(const T of[-5,-2.4]){k(s.sub(-4.3,0,T+.3,0),4,2.25,.3,{spacing:.36,solid:!1}),k(s.sub(-.3,0,T-.3,Math.PI),4,2.25,.3,{spacing:.36,solid:!1}),s.solid(4.1,2.3,.62,-2.3,1.15,T);for(const L of[-4.33,-.27])s.box(i.oak,.06,2.3,.66,L,1.15,T);s.box(i.oak,4.14,.05,.7,-2.3,2.3,T)}k(s.sub(-10.6,0,2.75,0),2.2,.85,.35,{bay:.75,noCornice:!0}),k(s.sub(-8.4,0,7.05,Math.PI),2.2,.85,.35,{bay:.75,noCornice:!0});function $(T,L,U){s.cyl(i.iron,.016,.016,13.6,0,T+U-.15,-9.47,8,0,0,Math.PI/2);for(let B=-6.4;B<=6.4;B+=2.13)s.box(i.iron,.03,.03,.14,B,T+U-.15,-9.53);const z=-9.45,V=-8.35,ct=Math.hypot(V-z,U),mt=-Math.atan((V-z)/U);for(const B of[-.22,.22])s.box(i.oak,.05,ct,.08,L+B,T+U/2,(z+V)/2,mt,0,0);const bt=Math.floor(ct/.28);for(let B=1;B<bt;B++){const kt=B/bt;s.cyl(i.iron,.014,.014,.44,L,T+kt*U,V+(z-V)*kt,8,0,0,Math.PI/2)}for(const B of[-.22,.22])s.cyl(i.iron,.035,.035,.04,L+B,T+.035,V,10,0,0,Math.PI/2),s.box(i.iron,.02,.14,.02,L+B,T+U-.08,z-.02);s.solid(.6,1.2,.45,L,T+.6,V-.15)}$(0,-2.6,3.3),$(a,2.2,3.4);function j(T,L,U=.9,z=!0){if(z&&U===.9){Ip(T,L===i.leather2?"tobacco":"oxblood");for(let bt=0;bt<14;bt++)h();T.solid(U,.95,.86,0,.47,0);return}const V=U,ct=.86;T.box(L,V,.3,ct,0,.27,0),T.box(L,V-.3,.13,ct-.24,0,.48,.06);for(const bt of[-1,1])T.box(L,.16,.36,ct-.05,bt*(V/2-.08),.6,.02),T.cyl(L,.095,.095,ct-.02,bt*(V/2-.07),.78,.03,12,Math.PI/2,0,0),T.cyl(i.dark,.03,.022,.12,bt*(V/2-.07),.06,ct/2-.08,8),T.cyl(i.dark,.03,.022,.12,bt*(V/2-.07),.06,-ct/2+.08,8),z&&T.box(L,.1,.45,.3,bt*(V/2-.06),1.05,-ct/2+.2);const mt=z?1.12:.9;T.box(L,V-.04,mt-.4,.2,0,.4+(mt-.4)/2,-ct/2+.1,-.08,0,0),T.cyl(L,.09,.09,V-.06,0,mt,-ct/2+.12,12,0,0,Math.PI/2);for(let bt=0;bt<3;bt++)for(let B=0;B<Math.round(V/.22);B++){const kt=Math.round(V/.22);T.sphere(i.iron,.012,-V/2+.13+(V-.26)*(B+bt%2*.5)/kt,.62+bt*.13,-ct/2+.215,1,1,.6,6,4)}T.solid(V,.95,ct,0,.47,0)}function at(T){T.box(i.oak,.44,.04,.42,0,.46,0);for(const[L,U]of[[-.19,.18],[.19,.18],[-.19,-.18],[.19,-.18]])T.cyl(i.oak,.02,.018,.44,L,.22,U,8);for(const L of[-.19,.19])T.box(i.oak,.035,.5,.035,L,.72,-.19,-.1,0,0);T.box(i.oak,.42,.08,.03,0,.94,-.215,-.1,0,0);for(let L=-1;L<=1;L++)T.box(i.oak,.03,.36,.02,L*.1,.72,-.2,-.1,0,0);T.box(i.oak,.38,.02,.02,0,.12,0),T.box(i.leather2,.36,.03,.34,0,.495,.01),T.solid(.44,.95,.44,0,.47,0)}function ft(T,L,U,z,V=0){T.cyl(i.brass,.07,.08,.025,L,U+.012,z,16),T.cyl(i.brass,.01,.01,.3,L,U+.17,z,8),T.cyl(i.brass,.012,.012,.12,L,U+.32,z,6,0,V,Math.PI/2),T.cyl(i.greenGlass,.1,.1,.3,L,U+.34,z,16,0,V,Math.PI/2,!1,0,Math.PI),T.sphere(i.flame,.03,L,U+.31,z,1.6,.6,1)}function it(T,L,U,z,V=1){T.cyl(i.ceramic,.06*V,.09*V,.25*V,L,U+.125*V,z,16),T.cyl(i.brass,.01,.01,.15*V,L,U+.3*V,z,6),T.cyl(i.shade,.1*V,.17*V,.2*V,L,U+.42*V,z,20,0,0,0,!0)}function Ct(T,L,U,z,V,ct,mt){T.box(i.gilt,L+2*.07,.07,.05,z,V+U/2+.07/2,ct),T.box(i.gilt,L+2*.07,.07,.05,z,V-U/2-.07/2,ct),T.box(i.gilt,.07,U,.05,z-L/2-.07/2,V,ct),T.box(i.gilt,.07,U,.05,z+L/2+.07/2,V,ct),T.plane(i.painting,L,U,z,V,ct,0,0,0,[mt%2*.5,Math.floor(mt/2)*.5,.5,.5])}function Bt(T,L,U,z,V,ct){t.stack(T.m,L,U,z,V,ct)}function J(T,L,U,z,V=.18){T.cyl(i.brass,.045,.06,.02,L,U+.01,z,12),T.cyl(i.brass,.012,.02,.2,L,U+.11,z,8),T.cyl(i.brass,.03,.02,.03,L,U+.22,z,10),T.cyl(i.paper,.016,.016,V,L,U+.235+V/2,z,8),T.sphere(i.flame,.012,L,U+.25+V,z,1,2,1,6,4)}{const T=s.sub(-.5,0,1.9,0);T.box(i.oak,1.25,.06,3.9,0,.75,0),T.box(i.dark,1.05,.13,3.6,0,.655,0);for(const U of[-1.75,0,1.75])for(const z of[-.5,.5])T.cyl(i.dark,.05,.04,.6,z,.32,U,10),T.sphere(i.dark,.06,z,.45,U,1,.8,1,10,6);T.box(i.dark,.06,.06,3.4,0,.14,0),T.solid(1.25,.8,3.9,0,.4,0),ft(T,0,.78,-.95,Math.PI/2),ft(T,0,.78,.95,Math.PI/2),c.push({p:new D(-.5,1.15,1.9),c:16761466,i:5.5,d:9}),Bt(T,.35,.78,-1.5,4,.2),Bt(T,-.38,.78,1.55,3,-.4),Bt(T,.4,.78,.4,2,1.2),T.box(i.leather,.44,.012,.3,-.15,.786,-.25,0,.1,0),T.box(i.paper,.2,.025,.28,-.255,.8,-.26,0,.1,.06),T.box(i.paper,.2,.025,.28,-.055,.8,-.24,0,.1,-.06),T.box(i.paper,.21,.004,.29,.3,.783,.9,0,-.3,0),T.cyl(i.iron,.03,.03,.05,.42,.805,.95,10),T.cyl(i.brass,.002,.002,.18,.4,.86,.95,4,0,0,.4);const L=[[-.88,-1.2,Math.PI/2],[-.92,.05,Math.PI/2+.15],[-.86,1.25,Math.PI/2],[.86,-1.25,-Math.PI/2],[1.15,.1,-Math.PI/2-.4],[.88,1.2,-Math.PI/2]];for(const[U,z,V]of L)at(T.sub(U,0,z,V))}{Gp(s);const T=new Fn(3.4,5.2);T.rotateX(-Math.PI/2),T.rotateY(Math.PI/2),s.geo(i.rug,T,0,.008,6.8);const L=new Fn(2.2,3.2);L.rotateX(-Math.PI/2),s.geo(i.rug,L,-9.4,.008,4.9)}{const T=s.sub(0,0,9,Math.PI);T.box(i.stone,2.7,.08,.75,0,.04,.37);for(const L of[-1,1])T.box(i.stone,.38,1.28,.38,L*.96,.64,.19);T.box(i.stone,2.3,.36,.4,0,1.46,.2),T.box(i.dark,2.7,.08,.48,0,1.68,.24),T.box(i.plaster,2.3,3,.3,0,3.22,.15),T.box(i.soot,1.56,1.28,.04,0,.64,.02),T.box(i.soot,1.56,.02,.38,0,.09,.19);for(let L=0;L<6;L++)T.box(i.iron,.025,.25,.025,-.4+L*.16,.24,.3);T.box(i.iron,.9,.03,.3,0,.14,.2),T.cyl(i.dark,.06,.07,.75,0,.22,.18,8,0,.1,Math.PI/2),T.cyl(i.dark,.05,.05,.7,.05,.3,.24,8,0,-.3,Math.PI/2),T.box(i.ember,.8,.03,.26,0,.165,.2),T.sphere(i.ember,.12,-.1,.25,.2,2.2,.5,.8,8,6),T.solid(2.7,1.72,.8,0,.86,.4),J(T,-1.05,1.72,.25),J(T,1.05,1.72,.25,.14),T.box(i.dark,.32,.36,.14,0,1.9,.37+vt),T.cyl(i.ceramic,.11,.11,.02,0,1.94,.45+vt,20,Math.PI/2,0,0),T.cyl(i.brass,.125,.125,.015,0,1.94,.445+vt,20,Math.PI/2,0,0),T.cyl(i.terracotta,.05,.08,.22,.6,1.83,.22,12),Bt(T,-.6,1.72,.24,2,.3),Ct(T,1.4,.95,0,3.5,.325+vt,2),T.cyl(i.iron,.012,.012,.8,1.32,.4,.55,6,0,0,.08),T.cyl(i.brass,.025,.025,.06,1.35,.82,.55,8),c.push({p:new D(0,.55,8.35),c:16747068,i:6,d:10,fire:!0})}j(s.sub(0,0,5.7,0),i.leather,2.2,!1),j(s.sub(-2.15,0,7.4,Math.PI/2-.2),i.leather2),j(s.sub(2.15,0,7.4,-Math.PI/2+.25),i.leather);{const T=s.sub(0,0,7.3,.05);T.box(i.oak,1.1,.05,.6,0,.42,0);for(const[U,z]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]])T.box(i.dark,.05,.4,.05,U,.2,z);T.box(i.dark,1,.02,.5,0,.1,0),T.solid(1.1,.45,.6,0,.22,0),Bt(T,-.25,.445,0,3,.5),T.cyl(i.ceramic,.04,.03,.07,.25,.48,.05,12),T.torus(i.ceramic,.025,.006,.29,.48,.05,0,0,0,10),T.cyl(i.ceramic,.07,.07,.008,.25,.449,.05,16),Bt(T,-.2,.12,0,3,0);const L=s.sub(1.45,0,5.75,0);L.cyl(i.dark,.25,.25,.03,0,.6,0,20),L.cyl(i.dark,.03,.04,.58,0,.3,0,8),L.cyl(i.dark,.18,.2,.03,0,.015,0,16),L.solid(.5,.62,.5,0,.31,0),it(L,0,.615,0,1.1)}{s.box(i.oak,.6,.45,4,-11.19,.225,4.9),s.solid(.62,.45,4,-11.2,.225,4.9),s.box(i.cushion,.56,.1,3.9,-11.2,.5,4.9),s.box(i.cushion2,.16,.42,.5,-11.38,.74,3.25,0,0,-.25),s.box(i.leather2,.16,.38,.46,-11.38,.72,6.5,0,.2,-.3),s.box(i.cushion,.4,.06,.6,-11.1,.58,5.2,0,.4,0),t.stack(s.m,-11.2,.55,4.3,3,.4),s.cyl(i.terracotta,.11,.08,.2,-11.25,.65,6,14);for(let U=0;U<9;U++){const z=U/9*Math.PI*2;s.box(i.plant,.06,.32,.01,-11.25+Math.cos(z)*.06,.88,6+Math.sin(z)*.06,Math.sin(z)*.5,z,Math.cos(z)*.5)}j(s.sub(-9.3,0,3.4,-Math.PI/2+.55),i.leather),j(s.sub(-9.3,0,6.35,-Math.PI/2-.55),i.leather2);const T=s.sub(-9.9,0,4.9,0);T.cyl(i.oak,.3,.3,.035,0,.6,0,24),T.cyl(i.dark,.035,.05,.58,0,.3,0,10);for(let U=0;U<3;U++){const z=U/3*Math.PI*2;T.box(i.dark,.05,.05,.3,Math.cos(z)*.12,.04,Math.sin(z)*.12,0,-z+Math.PI/2,0)}T.solid(.6,.62,.6,0,.31,0),Bt(T,-.08,.62,-.08,3,.7),T.cyl(i.ceramic,.045,.035,.06,.14,.65,.1,12),T.cyl(i.ceramic,.075,.075,.008,.14,.62,.1,16);const L=s.sub(-8,0,7,0);L.cyl(i.iron,.16,.18,.03,0,.015,0,16),L.cyl(i.iron,.014,.014,1.5,0,.76,0,8),L.cyl(i.shade,.14,.24,.28,0,1.55,0,20,0,0,0,!0),L.solid(.36,1.6,.36,0,.8,0),c.push({p:new D(-8,1.5,6.9),c:16757866,i:4,d:7}),Ct(s.sub(-7.5,0,2.4,0),.5,.4,-.45,2,.03,3),Bt(s,-8.6,0,7.15,5,.3)}{const T=s.sub(-5.9,0,-.7,.3);for(let L=0;L<6;L++)h();Kp(T,i),T.solid(.7,1.3,.7,0,.65,0)}{const T=s.sub(5.5,0,-1.22,Math.PI);T.box(i.oak,1.9,1.1,.5,0,.55,.25);for(let L=0;L<8;L++)for(let U=0;U<6;U++){const z=-.82+L*.235,V=.22+U*.15;T.box(i.walnut,.2,.12,.02,z,V,.505),T.box(i.brass,.05,.012,.02,z,V-.02,.52),T.box(i.paper,.05,.025,.005,z,V+.025,.517)}T.box(i.walnut,2,.05,.56,0,1.125,.25),T.solid(1.9,1.15,.5,0,.57,.25),it(T,.65,1.15,.25,.9),Bt(T,-.4,1.15,.25,4,.2),s.cyl(i.brass,.008,.008,.75,5.5,a-.95,-4.1,6),s.cyl(i.brass,.04,.04,.05,5.5,a-.6,-4.1,10),s.cyl(i.shade,.1,.22,.2,5.5,a-1.38,-4.1,20,0,0,0,!0),s.sphere(i.flame,.035,5.5,a-1.4,-4.1,1,1,1,8,6),c.push({p:new D(5.5,a-1.5,-4.1),c:16759930,i:3.5,d:7})}{const T=s.sub(-5.6,a,-8.85,0);Bp(T),T.solid(1.4,.8,.7,0,.4,0),ft(T,-.4,.785,-.1,0),Bt(T,.45,.785,-.1,5,0),T.box(i.paper,.3,.004,.22,.05,.787,.1,0,.2,0),at(T.sub(.05,0,.6,Math.PI+.2)),c.push({p:new D(-5.9,a+1.25,-8.85),c:16761466,i:4.5,d:8}),j(s.sub(6,a,-3.6,-Math.PI/2),i.leather2);const L=s.sub(6.1,a,-2.4,0);L.cyl(i.dark,.22,.22,.03,0,.55,0,18),L.cyl(i.dark,.03,.03,.54,0,.27,0,8),L.cyl(i.dark,.15,.17,.03,0,.015,0,14),L.solid(.44,.58,.44,0,.29,0),Bt(L,0,.565,0,3,.4),t.stack(s.m,3.4,a,-9,6,.2),t.stack(s.m,-1.6,0,-8.9,4,.1)}for(const[T,L,U]of[[-.5,6.2,1.9],[-2.3,7,-3.7]]){s.torus(i.iron,.75,.025,T,L,U,Math.PI/2,0,0,40),s.torus(i.iron,.4,.018,T,L-.25,U,Math.PI/2,0,0,28),s.cyl(i.iron,.006,.006,10.5-L,T,(10.5+L)/2,U,4);for(let z=0;z<4;z++){const V=z/4*Math.PI*2+.4;s.cyl(i.iron,.005,.005,1.1,T+Math.cos(V)*.37,L+.45,U+Math.sin(V)*.37,4,Math.sin(V)*.72,0,-Math.cos(V)*.72)}for(let z=0;z<10;z++){const V=z/10*Math.PI*2,ct=T+Math.cos(V)*.75,mt=U+Math.sin(V)*.75;s.cyl(i.iron,.03,.02,.04,ct,L+.03,mt,8),s.cyl(i.paper,.014,.014,.14,ct,L+.12,mt,6),s.sphere(i.flame,.011,ct,L+.205,mt,1,2,1,6,4)}}Ct(s.sub(7,0,0,-Math.PI/2),1.1,.8,4.6,3.1,.03,0),Ct(s.sub(7,0,0,-Math.PI/2),.9,1.2,.7,5.3,.03,1),Ct(s.sub(-7,0,0,Math.PI/2),.9,.7,2.6,3.2,.03,3),Ct(s.sub(-7,0,0,Math.PI/2),.9,.7,-1.4,3.2,.03,1);{const T=s;T.sphere(i.ceramic,.12,-3.6,2.5,-5,.85,1.1,.85,14,10),T.cyl(i.ceramic,.07,.1,.16,-3.6,2.4,-5,12),T.box(i.stone,.2,.08,.2,-3.6,2.36,-5),t.stack(s.m,-1.2,2.325,-5,3,.3),T.cyl(i.terracotta,.12,.09,.26,-1,2.455,-2.4,14),T.sphere(i.plant,.18,-1,2.7,-2.4,1,.7,1,10,6),t.stack(s.m,-3.2,2.325,-2.4,4,1.2),J(s,-2.4,2.325,-2.4)}const lt=(T,L,U)=>{const z=new ao(r,T.m),V=h();if(V<.35)z.box(i.iron,.012,Math.min(.16,T.clear-.02),.11,L-U/2+.01,Math.min(.16,T.clear-.02)/2,-.08),z.box(i.iron,.09,.006,.11,L-U/2+.05,.003,-.08);else if(V<.55&&T.clear>.22)z.cyl(h()<.5?i.ceramic:i.terracotta,.035,.05,.15,L,.075,-.1,12);else if(V<.75){const ct=Math.min(U-.02,.14);z.box(h()<.5?i.walnut:i.leather2,ct,Math.min(.08,T.clear-.02),.12,L,.04,-.1)}else V<.85&&T.clear>.2&&z.box(i.gilt,.1,.13,.012,L,.065,-.12,-.15,0,0)};for(const T of l)t.fillSlot(T,lt);return r.finish=r.finish.bind(r),{B:r,lights:c,windows:u,slots:l}}const cc=[[.36,.08,.06],[.42,.12,.08],[.12,.2,.12],[.1,.16,.28],[.18,.1,.06],[.48,.32,.16],[.06,.06,.06],[.55,.42,.2],[.16,.26,.26],[.3,.1,.16],[.62,.55,.42],[.26,.24,.2],[.4,.24,.1],[.2,.12,.2],[.7,.62,.48]],uc=new ke,hc=new Te,Qp=new D,t2=new D;class e2{constructor(t){this.rand=t,this.mats=[],this.cols=[],this.vars=[]}color(t,e=0){const n=this.rand,r=t||cc[Math.floor(n()*cc.length)],s=.8+n()*.4,o=e||(n()<.12?.2+n()*.25:0);return[r[0]*s*(1-o)+.55*o,r[1]*s*(1-o)+.48*o,r[2]*s*(1-o)+.38*o]}add(t,e,n,r,s,o,a,l,c,u,h=0){hc.set(0,h,s),uc.setFromEuler(hc);const f=new jt().compose(Qp.set(e,n,r),uc,t2.set(o,a,l));f.premultiply(t),this.mats.push(f),this.cols.push(c),this.vars.push(u)}fillSlot(t,e){const n=this.rand,{m:r,len:s,clear:o,d:a}=t;let l=.01+n()*.04,c=.25;for(;l<s-.03;){const u=n(),h=s-l;if(u<.07&&h>.34&&o>.16){const x=2+Math.floor(n()*4);let A=0,E=0;const R=.2+n()*.1;for(let S=0;S<x;S++){const v=.022+n()*.04;if(A+v>o-.02)break;const b=Math.min(R+(n()-.5)*.06,h-.03),P=Math.min(a-.02,.15+n()*.08);this.add(r,l+b/2+(n()-.5)*.02,A+v/2,-P/2-.01-n()*.02,Math.PI/2,v,b,P,this.color(),Math.floor(n()*8),(n()-.5)*.12),A+=v,E=Math.max(E,b)}l+=E+.02+n()*.03;continue}if(u<.13){const x=.06+n()*.16;e&&x>.1&&h>.2&&e(t,l+x/2,x),l+=x;continue}const f=n()<.4,d=f?4+Math.floor(n()*10):3+Math.floor(n()*12),p=this.color(),_=Math.floor(n()*8),g=Math.min(o-.02,.2+n()*.16),m=.03+n()*.03,y=Math.min(a-.02,.15+n()*.08),M=n()<.2?.08:0;for(let x=0;x<d&&l<s-.03;x++){let A,E,R,S,v;if(f?(A=m*(.85+n()*.3),E=g,R=y,S=n()<.08?this.color():p,v=_):(A=.016+n()*.05+(n()<.1?.03:0),E=Math.min(o-.015,.17+n()*.17+M),R=Math.min(a-.02,.12+n()*.13),S=this.color(),v=Math.floor(n()*8)),l+A>s-.01)break;const b=.006+n()*(n()<.15?.06:.018);this.add(r,l+A/2,E/2,-R/2-b,0,A,E,R,S,v,(n()-.5)*.03),l+=A+.0015,c=E}if(n()<.35&&s-l>.12){const x=.12+n()*.3,A=.02+n()*.03,E=Math.min(c*.95,o-.03,.18+n()*.12),R=Math.min(a-.02,.14+n()*.08),S=l+A/2*Math.cos(x)+E/2*Math.sin(x),v=A/2*Math.sin(x)+E/2*Math.cos(x);l+A*Math.cos(x)+E*Math.sin(x)<s-.01&&(this.add(r,S,v,-R/2-.01,x,A,E,R,this.color(),Math.floor(n()*8)),l+=A*Math.cos(x)+E*Math.sin(x))}l+=.004+n()*.04}}stack(t,e,n,r,s,o=0){const a=this.rand;let l=n;for(let c=0;c<s;c++){const u=.025+a()*.04,h=.2+a()*.12,f=.15+a()*.08;this.add(t,e+(a()-.5)*.03,l+u/2,r+(a()-.5)*.03,Math.PI/2,u,h,f,this.color(),Math.floor(a()*8),o+(a()-.5)*.4),l+=u}return l}build(t){const e=new on(1,1,1),n=e.attributes.uv,r=new Float32Array(n.count),s=new Float32Array(n.count);for(let f=0;f<6;f++)for(let d=0;d<4;d++){const p=f*4+d;let _=n.getX(p),g=n.getY(p);if(f===4)_=_*.0625,r[p]=1;else if(f===0||f===1)_=.76+_*.23;else if(f===2||f===3){const m=_;_=.51+g*.23,g=m,s[p]=1}else _=.51+_*.23,s[p]=1;n.setXY(p,_,g)}e.setAttribute("aSpine",new ge(r,1)),e.setAttribute("aPage",new ge(s,1));const o=this.mats.length,a=new Float32Array(o);for(let f=0;f<o;f++)a[f]=this.vars[f];e.setAttribute("aVar",new Fs(a,1));const l=new z0({map:t});l.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
`)};const c=e.index.array;e.setIndex(Array.from(c.slice(0,30)));const u=new Js(e,l,o),h=new zt;for(let f=0;f<o;f++){u.setMatrixAt(f,this.mats[f]);const d=this.cols[f];h.setRGB(d[0],d[1],d[2]),u.setColorAt(f,h)}return u.instanceMatrix.needsUpdate=!0,u.instanceColor.needsUpdate=!0,u.castShadow=!0,u.receiveShadow=!0,u.computeBoundingSphere(),u}}const fc=.0026,dc=Math.PI/2-.02;function n2({canvas:i,overlay:t,menuButton:e,player:n,camera:r,releaseMovement:s,toast:o,isInputBlocked:a=()=>!1,setMenuPaused:l=()=>{}}){const c=t.querySelector("#look-sensitivity"),u=t.querySelector("#look-sensitivity-value"),h=t.querySelector("[data-resume-look]");let f=fc,d=!1,p=!1,_=!1,g=!1,m=!1,y=document.hasFocus(),M=!1,x=!1,A=0,E=0,R=0,S=!1,v=!1;const b=[];function P(it,Ct,Bt,J){it.addEventListener(Ct,Bt,J),b.push(()=>it.removeEventListener(Ct,Bt,J))}function F(){return!v&&!S&&y&&!t.open&&!a()}function O(){i.focus({preventScroll:!0}),y=document.visibilityState==="visible"&&document.hasFocus()}function N(it,Ct){!Number.isFinite(it)||!Number.isFinite(Ct)||(n.yaw-=it*f,n.pitch=Math.max(-dc,Math.min(dc,n.pitch-Ct*f)),r.rotation.set(n.pitch,n.yaw,0))}function Y(){++R,d=_=g=p=m=!1,s(),document.pointerLockElement===i&&document.exitPointerLock()}function k(){t.open&&t.close(),l(!1),!v&&!S&&O()}function $(){if(!(v||S||t.open||a()))return Y(),t.showModal(),l(!0),h.focus({preventScroll:!0}),!0}function j(){_=m=!1,F()&&(M=!0,o("Hold left mouse to look. Esc opens controls."))}async function at(){if(d||_||!F())return;if(!i.requestPointerLock){j();return}const it=++R;_=m=!0,g=!1;try{const Ct=i.requestPointerLock({unadjustedMovement:!0});if(!Ct||typeof Ct.then!="function"){g=!0;return}try{await Ct}catch(Bt){if(Bt.name!=="NotSupportedError"||it!==R||!F())throw Bt;await i.requestPointerLock()}}catch{it===R&&F()&&j()}finally{it===R&&!g&&(_=!1)}}P(e,"click",$),P(h,"click",()=>{k(),at()}),P(t,"cancel",it=>{it.preventDefault(),k()}),P(t,"close",()=>{l(!1),!v&&!S&&O()}),P(i,"mousedown",it=>{it.button!==0||v||S||t.open||a()||(O(),!(d||!F())&&(x=!M,p=!0,A=it.clientX,E=it.clientY,at()))}),P(i,"click",it=>{x&&(x=!1,it.stopImmediatePropagation())},!0),P(i,"keydown",it=>{it.code==="Enter"&&!it.repeat&&F()&&(at(),it.preventDefault())}),P(globalThis,"mouseup",()=>{p=!1}),P(globalThis,"mousemove",it=>{if(!(!F()||document.visibilityState!=="visible")){if(d)N(it.movementX,it.movementY);else if(p){if(!(it.buttons&1)){p=!1;return}N(it.clientX-A,it.clientY-E),A=it.clientX,E=it.clientY}}}),P(document,"pointerlockchange",()=>{const it=d;d=document.pointerLockElement===i,_=g=p=!1,d&&(!F()||!m)&&(document.exitPointerLock(),d=!1),d?(M=!1,O()):(m=!1,it&&s())}),P(document,"pointerlockerror",()=>{g&&_&&(g=!1,j())});function ft(){y=!1,M=!1,Y()}return P(globalThis,"blur",ft),P(globalThis,"focus",()=>{y=document.visibilityState==="visible"}),P(document,"visibilitychange",()=>{document.visibilityState!=="visible"?ft():y=document.hasFocus()}),P(globalThis,"keydown",it=>{it.code==="Escape"&&!it.repeat&&!t.open&&$()&&it.preventDefault()}),P(c,"input",()=>{const it=Math.max(40,Math.min(220,Number(c.value)||100));f=fc*it/100,u.textContent=`${it}%`}),{get menuOpen(){return t.open},pause(){S=!0,ft()},resume(){v||(S=!1,y=document.visibilityState==="visible"&&document.hasFocus())},dispose(){if(!v){v=!0,S=!0,ft();for(const it of b)it();t.open&&t.close()}}}}const pc=Object.freeze({welcome:{label:"Welcome book",cover:["A place","for you"],color:3362112,kicker:"Welcome · first shelf",title:"A place to leave good things",paragraphs:["Come in, take a seat, and read something that catches your attention. I’ve left a short find on the table and connected the writing desk to the private project workspace.","Start with Shapes & sound, the rust-colored book nearby. When you want to work on personal notes or decisions, visit the writing desk upstairs.","This first shelf is small. The room can change as better buildings arrive; the things worth keeping can move with it."],links:[],signature:"Left for you — Jippity"},drums:{label:"Shapes & sound",cover:["Shapes","& sound"],color:7356719,kicker:"An interesting find · mathematics",title:"Different shapes, the same spectrum",paragraphs:["Two mathematically different ideal drumheads can have exactly the same set of resonant frequencies, including their multiplicities. Gordon, Webb and Wolpert constructed distinct planar shapes with this property: the frequency list alone does not uniquely reveal the boundary.","There is a stronger surprise. Buser, Conway, Doyle and Semmler gave a homophonic pair with a special point on each drum. Corresponding normalized vibration modes take matching values there. In the ideal point-strike model, striking those points excites every frequency with matching strength.","The assumptions matter: ideal membranes with matching tension and density, fixed boundaries, and the mathematical wave model. This does not mean arbitrary real rooms, instruments or recordings sound identical. Strike location, damping, material, acoustics and how you listen still matter in practice.","That is the part I find interesting: a complete frequency list can be precise and still leave the shape ambiguous."],links:[{label:"Gordon, Webb & Wolpert · One cannot hear the shape of a drum (1992)",href:"https://arxiv.org/pdf/math/9207215"},{label:"Buser, Conway, Doyle & Semmler · Some planar isospectral domains (1994)",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],signature:"Selected by Jippity"},desk:{label:"Project Library",kicker:"The writing desk",title:"Project Library",paragraphs:["Personal notes and decisions belong in the signed-in Project Library. Open that workspace when you’re ready to write or pick up a project.","This desk is just the entrance. The link opens your private workspace in a new tab; sign in there if asked."],links:[{label:"Open private Project Library",href:"https://jippity-project-room.pazneria.chatgpt.site"}],signature:"Jippity"}}),mc=Object.freeze([{id:"table-welcome",contentId:"welcome",position:[-.35,.808,3.53],yaw:.12,kind:"book",bounds:{x0:-.53,x1:-.17,y0:.783,y1:.84,z0:3.32,z1:3.74}},{id:"table-drums",contentId:"drums",position:[-.87,.808,2.35],yaw:-.18,kind:"book",bounds:{x0:-1.06,x1:-.68,y0:.783,y1:.84,z0:2.13,z1:2.57}},{id:"gallery-writing-desk",contentId:"desk",kind:"existing-paper",position:[-5.55,4.999,-8.75],bounds:{x0:-5.76,x1:-5.34,y0:4.98,y1:5.025,z0:-8.94,z1:-8.56}}]),i2=2.2;function r2(i,t,e,n=()=>document.createElement("canvas")){const r=t.filter(E=>E.kind==="book"),s=n();s.width=256*r.length,s.height=384;const o=s.getContext("2d"),a=[],l=[],c=new D(0,1,0),u=[],h=new jt,f=new ke,d=new D,p=new on(1,1,1),_=new we({roughness:.85,color:16777215}),g=new Js(p,_,r.length),m=new D;for(let E=0;E<r.length;E++){const R=r[E],S=e[R.contentId],v="#"+S.color.toString(16).padStart(6,"0");o.fillStyle=v,o.fillRect(E*256,0,256,384),o.strokeStyle="#c7a96c",o.lineWidth=2,o.strokeRect(E*256+20,24,216,336),o.fillStyle="#f0dfbe",o.textAlign="center",o.font="30px Georgia",S.cover.forEach((b,P)=>o.fillText(b,E*256+128,154+P*42)),o.font="15px Georgia",o.fillText("JIPPITY",E*256+128,304),f.setFromAxisAngle(c,R.yaw),h.compose(m.fromArray(R.position),f,d.set(.26,.038,.34)),g.setMatrixAt(E,h),g.setColorAt(E,new zt(S.color));for(const[b,P,F,O]of[[-.13,.17,0,0],[.13,.17,1,0],[.13,-.17,1,1],[-.13,.17,0,0],[.13,-.17,1,1],[-.13,-.17,0,1]])m.set(b,.021,P).applyQuaternion(f).add(new D().fromArray(R.position)),a.push(m.x,m.y,m.z),u.push(0,1,0),l.push((E+F)/r.length,O)}g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0);const y=new Qt;y.setAttribute("position",new Nt(a,3)),y.setAttribute("normal",new Nt(u,3)),y.setAttribute("uv",new Nt(l,2));const M=new Fi(s);M.colorSpace=ce;const x=new we({map:M,roughness:.9}),A=new Jt(y,x);return g.name="Jippity reading books",A.name="Jippity book covers",i.add(g,A),{objects:[g,A],budget:{books:r.length,drawCalls:2,triangles:r.length*14,texturePixels:s.width*s.height},dispose(){i.remove(g,A),g.dispose(),p.dispose(),_.dispose(),y.dispose(),x.dispose(),M.dispose()}}}const s2=["x","y","z"];function gc(i,t,e,n=1/0){let r=0,s=n;if(!Number.isFinite(Math.hypot(t.x,t.y,t.z))||Math.hypot(t.x,t.y,t.z)<1e-10)return null;for(const o of s2){const a=i[o],l=t[o],c=e[o+"0"],u=e[o+"1"];if(!Number.isFinite(a)||!Number.isFinite(l)||!Number.isFinite(c)||!Number.isFinite(u))return null;if(Math.abs(l)<1e-10){if(a<c||a>u)return null}else{const h=(c-a)/l,f=(u-a)/l;if(r=Math.max(r,Math.min(h,f)),s=Math.min(s,Math.max(h,f)),r>s)return null}}return s>=0?r:null}function _c(i,t,e,n,r=2.2){let s=null,o=r;for(const a of e){const l=gc(i,t,a.bounds,o);l!==null&&l<=o&&(s=a,o=l)}if(!s)return null;for(const a of n){const l=gc(i,t,a,o);if(l!==null&&l+.025<o)return null}return s}function Ha(i){var t;return!!((t=i==null?void 0:i.closest)!=null&&t.call(i,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))}const ji="jippityLibraryReader";function o2({document:i,window:t,canvas:e,dialog:n,hint:r,content:s,getTarget:o,canInteract:a,look:l,setPaused:c,releaseMovement:u,returnFocus:h}){const f=n.querySelector("#reader-title"),d=n.querySelector("#reader-kicker"),p=n.querySelector("#reader-pages"),_=n.querySelector("#reader-links"),g=n.querySelector("#reader-signature"),m=[];let y=null,M=!1,x=!1,A=null;function E(F,O,N){F.addEventListener(O,N),m.push(()=>F.removeEventListener(O,N))}function R(F){const O=s[F];d.textContent=O.kicker,f.textContent=O.title,p.replaceChildren(),_.replaceChildren();for(const N of O.paragraphs){const Y=i.createElement("p");Y.textContent=N,p.append(Y)}for(const N of O.links){const Y=i.createElement("a");Y.textContent=N.label,Y.href=N.href,Y.target="_blank",Y.rel="noopener noreferrer",Y.referrerPolicy="no-referrer",_.append(Y)}_.hidden=!O.links.length,g.textContent=O.signature}function S(F,O=!0){if(M||x||!Object.hasOwn(s,F))return!1;const N=y!==null;if(y=F,u(),l.pause(),c(!0),r.hidden=!0,R(F),i.body.classList.add("reading-open"),n.open||n.showModal(),n.scrollTop=0,f.focus({preventScroll:!0}),O){const Y={...t.history.state,[ji]:F};N?t.history.replaceState(Y,"",t.location.href):t.history.pushState(Y,"",t.location.href)}return!0}function v(){y!==null&&(y=null,n.open&&n.close(),i.body.classList.remove("reading-open"),r.hidden=!0,u(),l.resume(),c(!1),h==null||h.focus({preventScroll:!0}))}function b(){var O;if(y===null)return;const F=((O=t.history.state)==null?void 0:O[ji])===y;v(),F&&(x=!0,t.history.back())}function P(){if(y!==null||M||x||!a())return!1;const F=o();return F?S(F.contentId):!1}return E(t,"keydown",F=>{F.code!=="KeyE"||F.repeat||y!==null||Ha(F.target)||P()&&F.preventDefault()}),E(e,"mousedown",F=>{A=F.button===0?{x:F.clientX,y:F.clientY,dragged:!1}:null}),E(t,"mousemove",F=>{A&&Math.hypot(F.clientX-A.x,F.clientY-A.y)>5&&(A.dragged=!0)}),E(e,"click",F=>{const O=A==null?void 0:A.dragged;A=null,!O&&(F.button===void 0||F.button===0)&&P()}),E(r,"click",P),E(n,"cancel",F=>{F.preventDefault(),b()}),E(n.querySelector("#reader-close"),"click",b),E(n.querySelector("#reader-back"),"click",b),E(n,"close",b),E(t,"popstate",F=>{var N;x=!1;const O=(N=F.state)==null?void 0:N[ji];O&&Object.hasOwn(s,O)?S(O,!1):v()}),{get isOpen(){return y!==null},openNearby:P,close:b,updateHint(){const F=!M&&y===null&&a()?o():null;r.hidden=!F,F&&(r.textContent=`E — ${s[F.contentId].label}`)},dispose(){var F;if(!M){M=!0;for(const O of m)O();if(n.open&&n.close(),y=null,r.hidden=!0,i.body.classList.remove("reading-open"),(F=t.history.state)!=null&&F[ji]){const O={...t.history.state};delete O[ji],t.history.replaceState(O,"",t.location.href)}u(),l.pause(),c(!0)}}}}const a2=1,l2="shapes-and-sound",c2="Shapes & Sound",u2="A small study of shared resonances",h2="Jippity · Field notes",f2="No. 01",d2="Selected by Jippity",p2={lines:["SHAPES","& SOUND"],spine:"SHAPES & SOUND",imprint:"JIPPITY",note:"ON THE GEOMETRY OF LISTENING"},m2=[{kind:"title",eyebrow:"Mathematics / Acoustics",title:`Shapes
& Sound`,paragraphs:["Different outlines can share the same ideal resonances. A short reading on what a sound can tell us—and what it can leave hidden."],note:"An original decorative resonance motif accompanies this text; it is not a diagram of an isospectral pair."},{kind:"text",eyebrow:"01 / The question",title:"Can a sound reveal a shape?",paragraphs:["Imagine an ideal, uniformly tensioned drumhead held fixed along its edge. Its natural vibration frequencies form a kind of fingerprint. Could that complete list determine its outline?","In 1992, Carolyn Gordon, David Webb, and Scott Wolpert announced differently shaped planar domains with the same spectrum. For this mathematical model, the answer is no."],sourceIds:["gww"]},{kind:"text",eyebrow:"02 / The construction",title:"Rearranging the pieces",paragraphs:["Peter Buser, John Conway, Peter Doyle, and Klaus-Dieter Semmler describe pairs assembled from congruent triangles. Their proof moves and combines pieces of vibration patterns from one domain to the other.","This “transplantation” preserves each eigenvalue and its multiplicity. The boundaries differ, yet the full spectral lists agree."],note:"Isospectral means equal spectra, including repeated eigenvalues.",sourceIds:["bcds"]},{kind:"text",eyebrow:"03 / A finer distinction",title:"The same notes are not the whole sound",paragraphs:["Matching natural frequencies does not by itself specify how strongly a particular strike excites them.","Buser and colleagues also give a stronger example: a homophonic pair with special corresponding strike points. In their ideal model, striking at those points excites matching frequencies with matching intensities."],sourceIds:["bcds"]},{kind:"text",eyebrow:"04 / Beyond the ideal",title:"And what about this room?",paragraphs:["The theorem concerns ideal mathematical domains. A real room adds three-dimensional geometry, absorbing surfaces, furnishings, and the positions of both source and listener.","It does not say that arbitrary differently shaped rooms—or ordinary recordings of real drums—sound identical. The lesson is more precise: even complete spectral information can leave some geometry unresolved."],note:"A mathematical possibility, not a room-acoustics simulation.",sourceIds:["gww","bcds"]},{kind:"sources",eyebrow:"Reading desk / Sources",title:"Follow the proof",paragraphs:["Two public papers for a longer visit. Links open only when you choose them."],sourceIds:["gww","bcds"],note:"Public reading sample · No audio simulation"}],g2=[{id:"gww",authors:"Carolyn Gordon, David L. Webb & Scott Wolpert",title:"One cannot hear the shape of a drum",detail:"Research announcement · 1992",href:"https://arxiv.org/pdf/math/9207215"},{id:"bcds",authors:"Peter Buser, John Conway, Peter Doyle & Klaus-Dieter Semmler",title:"Some planar isospectral domains",detail:"Version 1.0.1 · 1994",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],fa={schemaVersion:a2,id:l2,title:c2,subtitle:u2,series:h2,edition:f2,signature:d2,cover:p2,pages:m2,sources:g2},Ai=Object.freeze({cover:[16,16,640,896],spine:[680,16,120,896],paper:[824,16,184,400],end:[824,448,184,256],ribbon:[824,752,184,240],cloth:[688,944,104,48]}),xc=i=>i/1024;function _2(i,t,e){const[n,r,s,o]=Ai[i];return[xc(n+2+t*(s-4)),1-xc(r+2+(1-e)*(o-4))]}function x2(){const i=[],t=[],e=[],n={min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0]};function r(M,x,A,E=[[0,0],[1,0],[1,1]],R="cloth"){const S=x.map((O,N)=>O-M[N]),v=A.map((O,N)=>O-M[N]),b=[S[1]*v[2]-S[2]*v[1],S[2]*v[0]-S[0]*v[2],S[0]*v[1]-S[1]*v[0]],P=Math.hypot(...b);if(P<1e-12)return;const F=b.map(O=>O/P);[M,x,A].forEach((O,N)=>{i.push(...O),t.push(...F),e.push(..._2(R,...E[N])),O.forEach((Y,k)=>{n.min[k]=Math.min(n.min[k],Y),n.max[k]=Math.max(n.max[k],Y)})})}function s(M,x,A,E,R="cloth",S=[[0,0],[1,0],[1,1],[0,1]]){r(M,x,A,[S[0],S[1],S[2]],R),r(M,A,E,[S[0],S[2],S[3]],R)}function o(M,x,A,E,R,S,v,b){const P=[];for(let k=0;k<4;k++){const $=k*Math.PI/2,j=(k===0||k===3?1:-1)*(M/2-R),at=(k<2?1:-1)*(x/2-R);for(let ft=0;ft<=S;ft++){const it=$+ft*Math.PI/(2*S);P.push([j+Math.cos(it)*R,at+Math.sin(it)*R])}}const F=Math.min(.0016,E*.24),O=[[A,.0012],[A+F,0],[A+E-F,0],[A+E,.0012]],N=O.map(([k,$])=>P.map(([j,at])=>[j*(1-$/(M/2)),k,at*(1-$/(x/2))])),Y=P.length;for(let k=0;k<O.length-1;k++)for(let $=0;$<Y;$++){const j=($+1)%Y;s(N[k][$],N[k+1][$],N[k+1][j],N[k][j],b,[[$/Y,(O[k][0]-A)/E],[$/Y,(O[k+1][0]-A)/E],[j/Y,(O[k+1][0]-A)/E],[j/Y,(O[k][0]-A)/E]])}for(let k=0;k<Y;k++){const $=(k+1)%Y,j=N[3],at=N[0],ft=it=>[it[0]/M+.5,.5-it[2]/x];r([0,A+E,0],j[$],j[k],[[.5,.5],ft(j[$]),ft(j[k])],v),r([0,A,0],at[k],at[$],[[.5,.5],[0,0],[1,0]],"cloth")}}o(.34,.47,0,.006,.006,3,"end","cloth"),o(.314,.448,.007,.048,.003,2,"end","paper"),o(.34,.47,.058,.006,.006,3,"cover","cloth");const a=-.165,l=.032,c=.031;for(let M=0;M<10;M++){const x=-Math.PI/2+M*Math.PI/10,A=x+Math.PI/10,E=(R,S,v=0)=>[a-Math.cos(R)*(c*.4+v),l+Math.sin(R)*c,S];s(E(x,-.228),E(x,.228),E(A,.228),E(A,-.228),"spine",[[M/10,1],[M/10,0],[(M+1)/10,0],[(M+1)/10,1]]),r([a,l,-.228],E(x,-.228),E(A,-.228),void 0,"cloth"),r([a,l,.228],E(A,.228),E(x,.228),void 0,"cloth")}for(const M of[-.178,-.109,.109,.178])for(let x=0;x<8;x++){const A=-Math.PI/2+x*Math.PI/8,E=A+Math.PI/8,R=(S,v)=>[a-Math.cos(S)*.0144,l+Math.sin(S)*.0315,v];s(R(A,M-.0021),R(A,M+.0021),R(E,M+.0021),R(E,M-.0021))}const u=[-.064,.042,.198],h=[-.043,.042,.198],f=[-.041,.01,.248],d=[-.062,.01,.248],p=[-.04,.003,.284],_=[-.0505,.003,.277],m=[[u,d,f],[u,f,h],[d,[-.061,.003,.284],_],[d,_,f],[f,_,p]],y=M=>[(M[0]+.065)/.027,(.284-M[2])/.086];for(const M of m){r(...M,M.map(y),"ribbon");const x=M.map(A=>[A[0],A[1]-5e-4,A[2]]).reverse();r(...x,x.map(y),"ribbon")}return{position:new Float32Array(i),normal:new Float32Array(t),uv:new Float32Array(e),bounds:n,triangles:i.length/9}}const qr=Object.freeze({cloth:"#173c40",foil:"#d6b16a",paper:"#eee4cc",ink:"#263f3b",ribbon:"#79374c"}),K0=Object.freeze({color:1024,control:512,bump:256});function v2(i,t,e="color"){const n=K0[e];i.width=i.height=n;const r=i.getContext("2d");if(!r)throw new Error("Jippity book requires a 2D canvas context.");r.save(),r.scale(n/1024,n/1024);const s=e==="color",o=e==="bump",a=s?qr.cloth:o?"#808080":"rgb(0,212,0)",l=s?qr.foil:o?"#777777":"rgb(0,100,220)";if(r.fillStyle=a,r.fillRect(0,0,1024,1024),s||o){r.lineWidth=.6;for(let N=0;N<1024;N+=3)r.strokeStyle=s?N%2?"rgba(210,230,204,.045)":"rgba(0,0,0,.05)":N%2?"#888":"#777",r.beginPath(),r.moveTo(N,0),r.lineTo(N+.7,1024),r.stroke();for(let N=0;N<1024;N+=4)r.strokeStyle=s?"rgba(225,235,211,.025)":"#848484",r.beginPath(),r.moveTo(0,N),r.lineTo(1024,N+.5),r.stroke()}const[c,u,h,f]=Ai.cover;r.strokeStyle=l,r.fillStyle=l,r.lineWidth=1.3,r.strokeRect(c+28,u+30,h-56,f-60),r.lineWidth=.65,r.strokeRect(c+35,u+37,h-70,f-74);for(const[N,Y,k,$]of[[c+45,u+47,1,1],[c+h-45,u+47,-1,1],[c+45,u+f-47,1,-1],[c+h-45,u+f-47,-1,-1]])r.beginPath(),r.moveTo(N,Y+12*$),r.lineTo(N,Y),r.lineTo(N+12*k,Y),r.stroke();r.textAlign="center",r.textBaseline="middle";function d(N,Y,k,$,j="Georgia"){let at=k;for(r.font=at+"px "+j;r.measureText(N).width>$&&at>12;)at--,r.font=at+"px "+j;r.fillText(N,c+h/2,Y)}d(t.series.toUpperCase(),u+97,16,h-110,"Arial"),r.lineWidth=.8,r.beginPath(),r.moveTo(c+250,u+131),r.lineTo(c+390,u+131),r.stroke(),t.cover.lines.forEach((N,Y)=>d(N,u+215+Y*83,67,h-98)),d(t.subtitle,u+385,19,h-115),r.save(),r.translate(c+h/2,u+570);for(let N=0;N<9;N++){r.beginPath();for(let Y=0;Y<=160;Y++){const k=Y*Math.PI*2/160,$=32+N*8.1+Math.sin(3*k+N*.16)*8+Math.cos(2*k)*4,j=Math.cos(k)*$*1.19,at=Math.sin(k)*$*.8;Y?r.lineTo(j,at):r.moveTo(j,at)}r.closePath(),r.lineWidth=N===8?1.5:.85,r.stroke()}r.beginPath(),r.arc(0,0,2.8,0,Math.PI*2),r.fill(),r.restore(),d(t.cover.note,u+750,12.5,h-90,"Arial"),d(t.cover.imprint,u+806,21,h-90),d(t.edition.toUpperCase(),u+842,10,h-90,"Arial");const[p,_,g,m]=Ai.spine;r.save(),r.translate(p+g/2,_+m/2),r.rotate(Math.PI/2),r.font="26px Georgia",r.fillText(t.cover.spine,0,0,m*.7),r.font="12px Arial",r.fillText(t.cover.imprint,-m*.36,0),r.restore(),r.lineWidth=2;for(const N of[_+61,_+m-61])r.beginPath(),r.moveTo(p+14,N),r.lineTo(p+g-14,N),r.stroke();const[y,M,x,A]=Ai.paper;if(r.fillStyle=s?qr.paper:o?"#808080":"rgb(0,241,0)",r.fillRect(y,M,x,A),s||o)for(let N=0;N<65;N++){const Y=M+4+N*(A-8)/65;r.strokeStyle=s?N%7===0?"rgba(111,88,49,.28)":"rgba(132,107,66,.12)":N%7===0?"#6b6b6b":"#777777",r.lineWidth=N%7===0?1.6:.7,r.beginPath(),r.moveTo(y,Y),r.bezierCurveTo(y+x*.3,Y+.7,y+x*.7,Y-.4,y+x,Y+.3),r.stroke()}const[E,R,S,v]=Ai.end;if(r.fillStyle=s?"#d9d4b9":o?"#808080":"rgb(0,226,0)",r.fillRect(E,R,S,v),s){r.strokeStyle="#a4b0a1",r.lineWidth=.8;for(let N=0;N<18;N++)r.beginPath(),r.moveTo(E,R+N*16),r.lineTo(E+S,R+N*16+S*.34),r.stroke()}const[b,P,F,O]=Ai.ribbon;if(r.fillStyle=s?qr.ribbon:o?"#808080":"rgb(0,135,20)",r.fillRect(b,P,F,O),s){r.strokeStyle="rgba(242,171,168,.15)",r.lineWidth=1;for(let N=0;N<F;N+=4)r.beginPath(),r.moveTo(b+N,P),r.lineTo(b+N,P+O),r.stroke()}return r.restore(),i}function Z0(i){const t=(n,r)=>typeof n=="string"&&n.trim().length>0&&n.length<=r;if(!i||i.schemaVersion!==1||!t(i.id,80)||!t(i.title,120))throw new TypeError("Invalid book identity.");if(!t(i.series,80)||!t(i.subtitle,160)||!t(i.signature,120)||!t(i.edition,40))throw new TypeError("Invalid book metadata.");if(!i.cover||!Array.isArray(i.cover.lines)||i.cover.lines.length<1||i.cover.lines.length>3||!i.cover.lines.every(n=>t(n,40))||!t(i.cover.spine,100)||!t(i.cover.imprint,50)||!t(i.cover.note,100))throw new TypeError("Invalid cover text.");if(!Array.isArray(i.pages)||!i.pages.length||i.pages.length>40)throw new TypeError("A book needs 1–40 pages.");if(!Array.isArray(i.sources)||i.sources.length>30)throw new TypeError("Invalid sources.");const e=new Set;for(const n of i.sources){if(!t(n.id,60)||e.has(n.id)||!t(n.title,240)||!t(n.authors,300)||!t(n.detail,120))throw new TypeError("Invalid source metadata.");if(typeof n.href!="string"||!/^https:\/\/[a-z0-9][a-z0-9.-]*(?::443)?\//i.test(n.href)||/[\s<>"\\]/.test(n.href))throw new TypeError("Sources must use a public HTTPS URL.");e.add(n.id)}for(const n of i.pages){if(!["title","text","sources"].includes(n.kind)||!t(n.title,140)||!t(n.eyebrow,100)||!Array.isArray(n.paragraphs)||n.paragraphs.length>8||!n.paragraphs.every(r=>t(r,1800)))throw new TypeError("Invalid page.");if(n.note!==void 0&&!t(n.note,500))throw new TypeError("Invalid page note.");if(n.sourceIds!==void 0&&(!Array.isArray(n.sourceIds)||n.sourceIds.some(r=>!e.has(r))))throw new TypeError("Unknown source.")}return i}function y2({THREE:i,content:t,position:e=[0,0,0],yaw:n=0,makeCanvas:r=()=>document.createElement("canvas")}){Z0(t);const s=x2(),o=new i.BufferGeometry;o.setAttribute("position",new i.BufferAttribute(s.position,3)),o.setAttribute("normal",new i.BufferAttribute(s.normal,3)),o.setAttribute("uv",new i.BufferAttribute(s.uv,2)),o.computeBoundingBox(),o.computeBoundingSphere();const a={};for(const f of["color","control","bump"]){const d=new i.CanvasTexture(v2(r(),t,f));f==="color"&&(d.colorSpace=i.SRGBColorSpace),d.anisotropy=4,d.name="Jippity "+f+" atlas",a[f]=d}const l=new i.MeshStandardMaterial({map:a.color,roughnessMap:a.control,metalnessMap:a.control,bumpMap:a.bump,bumpScale:24e-5,roughness:1,metalness:1});l.name="Jippity cloth, foil, paper and silk";const c=new i.Mesh(o,l);c.name="Jippity — "+t.title,c.position.fromArray(e),c.rotation.y=n,c.castShadow=!0,c.receiveShadow=!0,c.updateMatrix(),c.matrixAutoUpdate=!1;const u=Object.values(K0).reduce((f,d)=>f+d*d,0);let h=!1;return{object:c,budget:Object.freeze({triangles:s.triangles,vertices:s.position.length/3,drawCalls:1,geometryBytes:s.position.byteLength+s.normal.byteLength+s.uv.byteLength,texturePixels:u,textureBaseRGBABytes:u*4,textureWithFullMipRGBABytes:Math.round(u*4*4/3),note:"Static geometry/texture accounting; drawCalls excludes shadow and optional host prepass. No frame-rate or GPU-memory measurement."}),dispose(){h||(h=!0,c.removeFromParent(),o.dispose(),l.dispose(),Object.values(a).forEach(f=>f.dispose()),Object.values(a).forEach(f=>{f.image=null}))}}}function M2(i){if(!Number.isInteger(i)||i<1||i>40)throw new RangeError("Invalid page count.");const t=Math.ceil(i/2);let e="closed",n=0;const r=s=>Math.max(0,Math.min(t-1,Number.isFinite(s)?Math.trunc(s):0));return{get isOpen(){return e==="open"},get disposed(){return e==="disposed"},get spread(){return n},get count(){return t},open(s=n){return e==="disposed"?!1:(n=r(s),e="open",!0)},go(s){if(e!=="open")return!1;const o=r(s);return o===n?!1:(n=o,!0)},close(){return e!=="open"?!1:(e="closed",!0)},dispose(){e="disposed"}}}const Yr="jippityBoundBook";let b2=0;const S2=i=>{var t;return!!((t=i==null?void 0:i.closest)!=null&&t.call(i,'input, textarea, select, [contenteditable], [role="textbox"]'))};function E2(i){const t=i.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","-145 -110 290 220"),t.setAttribute("aria-hidden","true"),t.setAttribute("class","jb-motif");for(let e=0;e<9;e++){const n=i.createElementNS("http://www.w3.org/2000/svg","path");let r="";for(let s=0;s<=120;s++){const o=s*Math.PI*2/120,a=32+e*8.1+Math.sin(3*o+e*.16)*8+Math.cos(2*o)*4;r+=(s?"L":"M")+(Math.cos(o)*a*1.19).toFixed(2)+" "+(Math.sin(o)*a*.8).toFixed(2)+" "}n.setAttribute("d",r+"Z"),t.append(n)}return t}function w2({document:i,window:t,content:e,look:n,setPaused:r,releaseMovement:s,returnFocus:o,onError:a=()=>{}}){Z0(e);const l=M2(e.pages.length),c=e.id+":"+ ++b2,u=[];let h=!1,f=null,d=null,p=null,_=null;const g=(U,z,V)=>{const ct=i.createElement(U);return z&&(ct.className=z),V!==void 0&&(ct.textContent=V),ct},m=g("dialog","jb-reader");m.setAttribute("aria-label",e.title);const y=g("div","jb-shell"),M=g("header","jb-toolbar"),x=g("div","jb-identity",e.series),A=g("button","jb-close","Back to library");A.type="button",A.setAttribute("aria-label","Close "+e.title+" and return to the library");const E=g("span","jb-close-glyph","×");E.setAttribute("aria-hidden","true"),A.append(E),M.append(x,A);const R=g("div","jb-binding"),S=g("div","jb-spread");S.setAttribute("aria-label","Open book"),R.append(S);const v=g("footer","jb-navigation"),b=g("button","jb-page-button","← Previous"),P=g("button","jb-page-button","Next →");b.type=P.type="button",b.setAttribute("aria-label","Previous two pages"),P.setAttribute("aria-label","Next two pages");const F=g("div","jb-navigation-center"),O=g("select","jb-contents");O.setAttribute("aria-label","Choose a pair of pages");for(let U=0;U<l.count;U++){const z=g("option","",String(U+1).padStart(2,"0")+" / "+e.pages[U*2].title.replace(/\n/g," "));z.value=String(U),O.append(z)}const N=g("p","jb-status");N.setAttribute("role","status"),N.setAttribute("aria-live","polite"),N.setAttribute("aria-atomic","true"),F.append(O,N),v.append(b,F,P);const Y=g("p","jb-keyboard-note","← → turn pages · Esc returns to the library");y.append(M,R,v,Y),m.append(y),i.body.append(m);const k=(U,z,V)=>{U.addEventListener(z,V),u.push(()=>U.removeEventListener(z,V))},$=()=>{var U,z;return((z=(U=t.history.state)==null?void 0:U[Yr])==null?void 0:z.session)===c},j=()=>{var U;return!!((U=t.matchMedia)!=null&&U.call(t,"(prefers-reduced-motion: reduce)").matches)};function at(U,z=!1){const V=g("a",z?"jb-source-link":"jb-citation",z?U.title:"["+(e.sources.indexOf(U)+1)+"]");return V.href=U.href,V.target="_blank",V.rel="noopener noreferrer",V.referrerPolicy="no-referrer",V.setAttribute("aria-label",U.title+" — opens PDF in a new tab"),V}function ft(U){var Pt;const z=e.pages[U],V=g("article","jb-paper "+(U%2?"jb-paper-right":"jb-paper-left"));if(!z)return V.setAttribute("aria-label","Blank endpaper"),V.append(g("p","jb-colophon",e.signature)),V;const ct=g("div","jb-running-head",U===0?e.edition:e.title),mt=g("div","jb-page-body"+(z.kind==="title"?" jb-title-page":"")),bt=g("p","jb-eyebrow",z.eyebrow),B=g("h2","jb-heading",z.title);if(mt.append(bt,B),z.kind==="title"&&mt.append(E2(i)),z.paragraphs.forEach(pt=>mt.append(g("p","jb-paragraph",pt))),z.kind==="sources"){const pt=g("ol","jb-sources");for(const ht of z.sourceIds||[]){const Tt=e.sources.find(I=>I.id===ht),_t=g("li","");_t.append(g("p","jb-source-authors",Tt.authors),at(Tt,!0),g("p","jb-source-detail",Tt.detail)),pt.append(_t)}mt.append(pt)}else if((Pt=z.sourceIds)!=null&&Pt.length){const pt=g("p","jb-citations");pt.append(g("span","","Sources ")),z.sourceIds.forEach(ht=>pt.append(at(e.sources.find(Tt=>Tt.id===ht)))),mt.append(pt)}z.note&&mt.append(g("p","jb-margin-note",z.note));const kt=g("div","jb-folio");return kt.append(g("span","",U===0?e.signature:e.series),g("span","",String(U+1).padStart(2,"0"))),V.append(ct,mt,kt),V}function it(U=0){d==null||d.cancel(),d=null,S.replaceChildren(ft(l.spread*2),ft(l.spread*2+1));const z=l.spread*2+1,V=Math.min(z+1,e.pages.length);N.textContent="Pages "+z+"–"+V+" of "+e.pages.length,O.value=String(l.spread),b.disabled=l.spread===0,P.disabled=l.spread===l.count-1,m.scrollTop=0,U&&!j()&&S.animate&&(d=S.animate([{opacity:.35,transform:"translateX("+U*10+"px)"},{opacity:1,transform:"translateX(0)"}],{duration:180,easing:"cubic-bezier(.2,.65,.3,1)"}))}function Ct(){if($())try{t.history.replaceState({...t.history.state,[Yr]:{session:c,book:e.id,spread:l.spread}},"",t.location.href)}catch(U){a(U)}}function Bt(U=!0,z=l.spread){if(l.disposed||h)return!1;if(l.isOpen)return L(z),!0;p=i.activeElement,l.open(z);try{s(),n.pause(),r(!0),it(),m.showModal(),A.focus({preventScroll:!0})}catch(V){l.close(),m.open&&m.close();try{s(),n.resume()}finally{r(!1)}return a(V),!1}if(U)try{_=t.history.state;const V=_&&typeof _=="object"?_:{};t.history.pushState({...V,[Yr]:{session:c,book:e.id,spread:l.spread}},"",t.location.href)}catch(V){a(V)}return!0}function J(){var z;if(!l.close())return!1;d==null||d.cancel(),d=null,m.open&&m.close();try{s(),n.resume()}finally{r(!1)}const U=(o==null?void 0:o.isConnected)!==!1&&(o!=null&&o.focus)?o:p;return(U==null?void 0:U.isConnected)!==!1&&((z=U==null?void 0:U.focus)==null||z.call(U,{preventScroll:!0})),!0}function lt(){h=!1,f!==null&&t.clearTimeout(f),f=null}function T(){if(!l.isOpen)return!1;const U=$();if(J(),U){h=!0,f=t.setTimeout(()=>{if($())try{t.history.replaceState(_,"",t.location.href)}catch(z){a(z)}lt()},1200);try{t.history.back()}catch(z){if($())try{t.history.replaceState(_,"",t.location.href)}catch(V){a(V)}lt(),a(z)}}return!0}function L(U){const z=l.spread;return l.go(U)?(it(Math.sign(l.spread-z)),Ct(),!0):!1}return k(A,"click",T),k(b,"click",()=>L(l.spread-1)),k(P,"click",()=>L(l.spread+1)),k(O,"change",()=>L(Number(O.value))),k(m,"cancel",U=>{U.preventDefault(),T()}),k(m,"close",()=>{!m.open&&l.isOpen&&T()}),k(m,"keydown",U=>{if(U.altKey||U.ctrlKey||U.metaKey||S2(U.target))return;let z;if(U.key==="ArrowRight"||U.key==="PageDown")z=l.spread+1;else if(U.key==="ArrowLeft"||U.key==="PageUp")z=l.spread-1;else if(U.key==="Home")z=0;else if(U.key==="End")z=l.count-1;else return;U.preventDefault(),L(z)}),k(t,"popstate",U=>{var V;lt();const z=(V=U.state)==null?void 0:V[Yr];(z==null?void 0:z.session)===c&&z.book===e.id?l.isOpen?L(z.spread):Bt(!1,z.spread):J()}),{get isOpen(){return l.isOpen},get pendingBack(){return h},get spread(){return l.spread},open:()=>Bt(!0),close:T,go:L,element:m,dispose(){if(!l.disposed){if(lt(),u.forEach(U=>U()),J(),l.dispose(),d==null||d.cancel(),$())try{t.history.replaceState(_,"",t.location.href)}catch(U){a(U)}m.remove()}}}}const T2=i=>{var t;return!!((t=i==null?void 0:i.closest)!=null&&t.call(i,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))};function A2({window:i,document:t,canvas:e,hint:n,reader:r,content:s,getTarget:o,canInteract:a}){const l=[];let c=null,u=!1;const h=(p,_,g,m=!1)=>{p.addEventListener(_,g,m),l.push(()=>p.removeEventListener(_,g,m))},f=()=>!u&&!r.isOpen&&!r.pendingBack&&a();function d(p){return!f()||!o(p)?!1:(c=null,n.hidden=!0,r.open())}return h(i,"keydown",p=>{p.code!=="KeyE"||p.repeat||p.altKey||p.ctrlKey||p.metaKey||T2(p.target)||d()&&(p.preventDefault(),p.stopImmediatePropagation())},!0),h(e,"mousedown",p=>{c=null,!(p.button!==0||!f()||!o(p))&&(c={x:p.clientX,y:p.clientY,locked:t.pointerLockElement===e,distance:0,dragged:!1},p.stopImmediatePropagation())},!0),h(i,"mousemove",p=>{if(!c)return;const _=c.locked?Math.hypot(p.movementX||0,p.movementY||0):Math.hypot(p.clientX-c.x,p.clientY-c.y);c.locked?c.distance+=_:c.distance=Math.max(c.distance,_),c.distance>5&&(c.dragged=!0)},!0),h(e,"click",p=>{const _=c;c=null,!(p.button!==0||!_||_.dragged)&&d(p)&&(p.preventDefault(),p.stopImmediatePropagation())},!0),h(i,"mouseup",p=>{p.target!==e&&(c=null)},!0),h(e,"mouseleave",()=>{t.pointerLockElement!==e&&(c=null)}),h(i,"blur",()=>{c=null}),h(t,"visibilitychange",()=>{t.visibilityState!=="visible"&&(c=null)}),h(n,"click",p=>{d()&&(p.preventDefault(),p.stopImmediatePropagation())},!0),{openNearby:d,updateHint(){const p=f()&&!!o();return n.classList.toggle("jb-prompt",p),p&&(n.textContent="E — Read "+s.title,n.hidden=!1),p},dispose(){u||(u=!0,c=null,l.forEach(p=>p()),n.classList.remove("jb-prompt"))}}}const da=Object.freeze({position:Object.freeze([-.87,.782,2.35]),yaw:-.18,reach:2.2}),R2=[{x0:-.18,x1:.17,y0:0,y1:.064,z0:-.235,z1:.235},{x0:-.065,x1:-.039,y0:.002,y1:.043,z0:.198,z1:.284}];function vc(i,t,e,n=1/0){let r=0,s=n;for(const o of["x","y","z"]){const a=i[o],l=t[o],c=e[o+"0"],u=e[o+"1"];if(![a,l,c,u].every(Number.isFinite)||c>u)return null;if(Math.abs(l)<1e-10){if(a<c||a>u)return null}else{const h=(c-a)/l,f=(u-a)/l;if(r=Math.max(r,Math.min(h,f)),s=Math.min(s,Math.max(h,f)),r>s)return null}}return s>=0?r:null}function C2(i,t,e=[],n=da){const r=Math.hypot(t.x,t.y,t.z);if(!Number.isFinite(r)||r<1e-10||!Number.isFinite(n.yaw)||!(n.reach>0))return null;const s={x:t.x/r,y:t.y/r,z:t.z/r},[o,a,l]=n.position,c=Math.cos(n.yaw),u=Math.sin(n.yaw),h=i.x-o,f=i.z-l,d={x:c*h-u*f,y:i.y-a,z:u*h+c*f},p={x:c*s.x-u*s.z,y:s.y,z:u*s.x+c*s.z};let _=1/0;for(const g of R2){const m=vc(d,p,g,n.reach);m!==null&&(_=Math.min(_,m))}if(!Number.isFinite(_))return null;for(const g of e){const m=vc(i,s,g,_);if(m!==null&&m+.022<_)return null}return{id:"table-drums",contentId:"drums",distance:_}}function P2(i,t,e,n){const r=n(i,t.filter(a=>a.id!=="table-drums"),e),s=y2({THREE:xp,content:fa,position:da.position,yaw:da.yaw});i.add(s.object);let o=!1;return{book:s,objects:[...r.objects,s.object],dispose(){o||(o=!0,r.dispose(),s.dispose())}}}function I2(i){const{camera:t,solids:e,legacyFactory:n,...r}=i,{document:s,window:o,canvas:a,hint:l,look:c,setPaused:u,releaseMovement:h,returnFocus:f,canInteract:d}=i;let p=!1;const _=w2({document:s,window:o,content:fa,look:c,releaseMovement:h,returnFocus:f,setPaused:A=>{A?(p=!s.body.classList.contains("reading-open"),s.body.classList.add("reading-open")):p&&(s.body.classList.remove("reading-open"),p=!1),u(A)}}),g=new D;function m(A){if(t.updateMatrixWorld(),A&&s.pointerLockElement!==a&&Number.isFinite(A.clientX)&&Number.isFinite(A.clientY)){const E=a.getBoundingClientRect();if(!E.width||!E.height)return null;const R=(A.clientX-E.left)/E.width,S=(A.clientY-E.top)/E.height;if(R<0||R>1||S<0||S>1)return null;g.set(R*2-1,1-S*2,.5).unproject(t).sub(t.position).normalize()}else t.getWorldDirection(g);return C2(t.position,g,e)}const y=n({...r,canInteract:()=>!_.isOpen&&!_.pendingBack&&d(),getTarget:()=>{const A=r.getTarget();return(A==null?void 0:A.id)==="table-drums"?null:A}}),M=A2({window:o,document:s,canvas:a,hint:l,reader:_,content:fa,getTarget:m,canInteract:()=>!y.isOpen&&d()});let x=!1;return{get isOpen(){return _.isOpen||y.isOpen},updateHint(){if(!x){if(_.isOpen){l.hidden=!0;return}M.updateHint()||y.updateHint()}},close(){_.isOpen?_.close():y.close()},dispose(){x||(x=!0,M.dispose(),_.dispose(),y.dispose())}}}function L2({tick:i,request:t,cancel:e,now:n}){const r=new Set;let s=null,o=!1,a=null;function l(){!o&&!r.size&&s===null&&(s=t(c))}function c(u){if(s=null,o||r.size)return;const h=a===null?0:Math.max(0,(u-a)/1e3);a=u,i(u,h),l()}return{start(){a=n(),l()},setPaused(u,h){h?r.add(u):r.delete(u),r.size&&s!==null&&(e(s),s=null),a=null,l()},get paused(){return o||r.size>0},dispose(){o=!0,s!==null&&e(s),s=null}}}const jr=Object.freeze({href:"https://pazneria.github.io/",plaque:"EXIT",plaqueSubtitle:"HOME",label:"Leave for Jordan's homepage",openPrompt:"E · Open the exit door",prompt:"E · Leave, or walk through",shortcut:"Alt+X",instructions:"Approach the oak door beside the stair foot to open it, then walk through to leave. E or a deliberate click opens the door, or leaves when open. The controls exit link and Alt+X return to Jordan's homepage."}),Qo=Object.freeze({id:"library-home-exit",position:Object.freeze([6.8963,0,7.75]),rotation:-Math.PI/2,width:1.3,height:2.42,bounds:Object.freeze({x0:6.7,x1:6.93,y0:.08,y1:2.58,z0:6.94,z1:8.56}),reach:2.2}),J0=Object.freeze({x0:7,x1:7.5,z0:7.07,z1:8.43,height:2.46,threshold:7.62,landingEnd:8.55});function D2({anchor:i,portal:t,setAngle:e=()=>{}}){const n=i.position[0]-35e-5,r=i.position[2]+i.width/2,s=Math.PI/2,o=.111,a=8;let l=0,c=0,u=!1;function h(p){return p.y>=-.15&&p.y<.35}function f(p,_){return h(p)&&p.x+_>n&&p.x-_<n+i.width&&p.z+_>r-i.width&&p.z-_<r+.12}function d(p,_,g,m,y){if(g>=i.height||g+m<=0)return!1;const M=i.rotation-l,x=Math.cos(M),A=Math.sin(M),E=p-n,R=_-r,S=E*x-R*A,v=E*A+R*x,b=Math.max(-i.width,Math.min(0,S)),P=Math.max(0,Math.min(o,v));return(S-b)**2+(v-P)**2<y**2}return{get angle(){return l},get passable(){return l>=1.48},use(){return u=!0,l>=1.48},update(p,_,g=.28){const m=Math.hypot(_.x-n,_.z-i.position[2]),y=h(_)&&m<2.15,M=f(_,g);(!h(_)||m>2.65)&&!M&&(u=!1);const x=y||M||u?s:0;if(!Number.isFinite(p)||p<=0)return;const A=l,E=d(_.x,_.z,_.y,1.75,g),R=l-x,S=c+a*R,v=Math.exp(-a*p);l=x+(R+S*p)*v,c=(c-a*S*p)*v,Math.abs(l-x)<5e-4&&Math.abs(c)<.004&&(l=x,c=0),l=Math.max(0,Math.min(s,l)),!E&&d(_.x,_.z,_.y,1.75,g)&&(l=A,c=0),e(-l)},blocks:d,crossed(p,_,g=.28){return l>.01&&!d(_.x,_.z,_.y,1.75,g)&&h(p)&&h(_)&&p.x<=t.threshold&&_.x>t.threshold&&Math.hypot(_.x-p.x,_.z-p.z)<=.45&&_.z>=t.z0+g&&_.z<=t.z1-g}}}function U2(i,t,e,n,r=()=>document.createElement("canvas")){const s=new gn;s.name="Library exit",s.position.set(...e.position),s.rotation.y=e.rotation;const o=new ua(()=>.37),a=o.frame(0,0,0);a.m.multiply(new jt().makeScale(1,1,.7));const{width:l,height:c}=e,{oak:u,dark:h,brass:f}=t,d=new gn;d.name="Hinged oak door leaf",d.position.set(l/2,0,35e-5);const p=new ua(()=>.37),_=p.frame(-l/2,0,-35e-5);_.m.multiply(new jt().makeScale(1,1,.7));let g=_;g.box(h,l,c-.04,.055,0,c/2,.028);for(const S of[-l/2+.065,l/2-.065])g.box(u,.13,c,.045,S,c/2,.082);for(const[S,v]of[[.11,.22],[.84,.13],[c-.09,.18]])g.box(u,l-.26,v,.045,0,S,.082);g.box(u,.07,1.33,.045,0,1.575,.082);for(const[S,v,b,P]of[[-.26,1.575,.42,1.28],[.26,1.575,.42,1.28],[0,.49,.96,.51]]){g.box(u,b,P,.018,S,v,.063);for(const F of[-1,1])g.box(h,.018,P+.04,.014,S+F*(b/2+.009),v,.081),g.box(h,b+.04,.018,.014,S,v+F*(P/2+.009),.081)}g=a;for(const S of[-1,1])g.box(h,.13,c+.02,.09,S*(l/2+.085),(c+.02)/2,.067),g.box(u,.1,c+.02,.035,S*(l/2+.085),(c+.02)/2,.129),g.box(u,.16,.24,.13,S*(l/2+.085),.12,.083);g.box(h,l+.3,.18,.09,0,c+.09,.067),g.box(u,l+.33,.1,.035,0,c+.11,.129),g.box(u,l+.37,.045,.15,0,c+.2025,.08),g=_,g.box(f,.045,.19,.014,-.47,1.03,.115),g.cyl(f,.018,.018,.025,-.47,1.06,.14,8,Math.PI/2),g.box(f,.13,.025,.025,-.425,1.06,.158),g=a;for(const S of[.32,1.2,2.1])g.cyl(f,.018,.018,.11,l/2,S,5e-4,8);const m=o.frame(0,0,0),y=J0;for(const S of[y.z0+.018,y.z1-.018])m.box(u,.012,y.height-.024,.476,S-e.position[2],(y.height-.024)/2,e.position[0]-7.25);m.box(u,y.z1-y.z0-.024,.012,.476,0,y.height-.018,e.position[0]-7.25),m.sbox(t.stone,y.z1-y.z0,.16,y.landingEnd-y.x0,0,-.08,e.position[0]-(y.x0+y.landingEnd)/2),m.box(f,y.z1-y.z0-.048,.012,.05,0,.006,e.position[0]-7.04);const M=r();M.width=512,M.height=256;const x=M.getContext("2d");x.fillStyle="#30271b",x.fillRect(0,0,512,256),x.strokeStyle="#b99a60",x.lineWidth=4,x.strokeRect(12,12,488,232),x.fillStyle="#efdab0",x.textAlign="center",x.textBaseline="middle",x.font="60px Georgia, serif",x.fillText(n.plaque,256,102),x.font="25px Georgia, serif",x.fillText(n.plaqueSubtitle,256,172);const A=new Fi(M);A.colorSpace=ce;const E=new we({map:A,roughness:.62,emissive:15586976,emissiveMap:A,emissiveIntensity:.18});g.box(f,.45,.23,.012,0,2.51,.172),g.plane(E,.426,.206,0,2.51,.18),p.finish(d),s.add(d),o.finish(s),s.traverse(S=>{S.isMesh&&(S.castShadow=!1,S.receiveShadow=!0)}),i.add(s);const R=D2({anchor:e,portal:y,setAngle:S=>{d.rotation.y=S}});return{group:s,leaf:d,door:R,solids:o.solids.map(S=>({x0:e.position[0]-S.z1,x1:e.position[0]-S.z0,y0:S.y0,y1:S.y1,z0:e.position[2]+S.x0,z1:e.position[2]+S.x1})),materials:[E],textures:[A]}}function N2({document:i,window:t,canvas:e,controls:n,readerFooter:r,content:s,getTarget:o,canInteract:a,beforeLeave:l,useDoor:c=()=>!0,getPrompt:u=()=>s.prompt}){let h=!1,f=!1,d=null;const p=[],_=[],g=e.getAttribute("aria-describedby");function m(S,v,b,P){S.addEventListener(v,b,P),p.push(()=>S.removeEventListener(v,b,P))}function y(S){if(S==null||S.preventDefault(),S==null||S.stopPropagation(),f||h)return!1;f=!0;try{l()}finally{t.addEventListener("pageshow",v=>{v.persisted&&t.location.reload()},{once:!0}),t.location.assign(s.href)}return!0}function M(S){S==null||S.preventDefault(),S==null||S.stopPropagation(),!(f||h)&&c()&&y()}function x(S,v){const b=i.createElement("a");return b.href=s.href,b.textContent=s.label,b.className=`library-exit-link ${v}`,b.setAttribute("aria-keyshortcuts",s.shortcut),m(b,"click",y),S.append(b),_.push(b),b}const A=x(i.body,"library-exit-keyboard");n&&x(n,"library-exit-controls"),r&&x(r,"library-exit-reader");const E=i.createElement("span");E.id="library-exit-instructions",E.className="library-exit-instructions",E.textContent=s.instructions,i.body.append(E),_.push(E),e.setAttribute("aria-describedby",[g,E.id].filter(Boolean).join(" "));const R=i.createElement("button");return R.id="exit-hint",R.type="button",R.hidden=!0,R.textContent=s.prompt,R.setAttribute("aria-label",s.label),i.body.append(R),_.push(R),m(R,"click",S=>{a()&&o()&&M(S)}),m(t,"keydown",S=>{var v,b;if(!(S.repeat||S.defaultPrevented||S.isComposing)){if(S.code==="KeyX"&&S.altKey&&!S.ctrlKey&&!S.metaKey&&!((b=(v=S.target)==null?void 0:v.closest)!=null&&b.call(v,'input, textarea, select, [contenteditable], [role="textbox"]'))){y(S);return}S.code==="KeyE"&&!S.altKey&&!S.ctrlKey&&!S.metaKey&&!Ha(S.target)&&a()&&o()&&M(S)}}),m(e,"mousedown",S=>{d=S.button===0&&a()&&o()?{x:S.clientX,y:S.clientY,travel:0}:null}),m(t,"mousemove",S=>{d&&(d.travel+=i.pointerLockElement===e?Math.hypot(S.movementX||0,S.movementY||0):Math.hypot(S.clientX-d.x,S.clientY-d.y),d.x=S.clientX,d.y=S.clientY)}),m(e,"click",S=>{const v=d&&d.travel<=5;d=null,v&&S.button===0&&a()&&o()&&M(S)}),m(t,"blur",()=>{d=null,R.hidden=!0}),m(i,"pointerlockchange",()=>{d=null,R.hidden=!0}),{leave:y,keyboardLink:A,updateHint(){R.hidden=h||!a()||!o(),R.textContent=u(),R.setAttribute("aria-label",R.textContent)},dispose(){if(!h){h=!0,d=null;for(const S of p)S();for(const S of _)S.remove();g===null?e.removeAttribute("aria-describedby"):e.setAttribute("aria-describedby",g)}}}}function Q0({scene:i,renderer:t,environmentTarget:e,materials:n=[],extraMaterials:r=[]}){const s=new Set,o=new Set([...n,...r]),a=new Set,l=new Set,c=new Set,u=h=>{h!=null&&h.isTexture?a.add(h):Array.isArray(h)&&h.forEach(u)};i.traverse(h=>{var f,d;h.geometry&&s.add(h.geometry);for(const p of[].concat(h.material||[]))o.add(p);h.isInstancedMesh&&c.add(h);for(const p of[(f=h.shadow)==null?void 0:f.map,(d=h.shadow)==null?void 0:d.mapPass])p&&l.add(p)}),e&&l.add(e),u(i.environment),u(i.background);for(const h of o){for(const f of Object.values(h))u(f);for(const f of Object.values(h.uniforms||{}))u(f.value)}for(const h of l)for(const f of h.textures||[h.texture])a.delete(f);i.environment=null,i.overrideMaterial=null;for(const h of c)h.dispose();for(const h of s)h.dispose();for(const h of o)h.dispose();for(const h of a)h.dispose(),h.isCanvasTexture&&(h.image=null);for(const h of l)h.dispose();t.dispose(),i.clear()}const F2=20261008;function Ga(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ri(i,t){let e=-.7;const n=Math.max(0,-i-13);return e-=70*(1-Math.exp(-n/140)),e+=(Math.sin(i*.011+t*.017)*10+Math.sin(t*.029+1.3)*Math.cos(i*.013)*12)*Math.min(1,n/120),i<-420&&(e+=Math.min(140,(-i-420)*.22)*(.75+.18*Math.sin(t*.009+.5)+.07*Math.sin(t*.043))),i>8&&(e+=(i-8)*.35),Math.abs(t)>30&&i>-60&&(e+=(Math.abs(t)-30)*.12),e}function O2(i,t,e=0){return i+e>-13&&i-e<9&&t+e>-12&&t-e<11}function B2(i,t,e=0){const n=10+Math.max(0,-i-13)*.15;return i<-13&&i>-125&&Math.abs(t-3)<n+e}function z2(){const i=Ga(F2),t=[],e=[[-22,-18,12,"oak"],[-34,-29,15,"oak"],[-51,-24,14,"oak"],[-25,26,13,"oak"],[-39,38,16,"oak"],[-56,32,14,"oak"],[-20,44,12,"birch"],[12,43,13,"birch"],[-27,63,16,"birch"],[-61,-43,15,"birch"]];for(const[l,c,u,h]of e)t.push({x:l,z:c,height:u,species:h,tier:"near",yaw:i()*Math.PI*2,width:.9+i()*.2});[[-91,-65,34,29,20],[-119,67,32,35,20],[-202,-92,68,49,32],[-211,96,74,49,32],[-376,-190,110,85,54],[-403,155,125,93,60],[-615,-95,99,100,44],[-643,235,100,85,36],[-244,3,44,22,22]].forEach(([l,c,u,h,f],d)=>{for(let p=0;p<f;p++){const _=i()*Math.PI*2,g=Math.sqrt(i()),m=l+Math.cos(_)*g*u,y=c+Math.sin(_)*g*h,M=8+i()*9;B2(m,y,M*.34)||t.push({x:m,z:y,height:M,species:"woodland",tier:d<4||d===8?"middle":"far",grove:d,yaw:i()*Math.PI*2,width:.8+i()*.4})}});const r=[],s=[],o=[];[[-16.8,-5.6,3,6.2,80],[-19.2,13.8,4.8,4.7,72],[-31,18.4,7,4.3,64],[-1.5,18.4,8,4.1,64]].forEach(([l,c,u,h,f],d)=>{for(let p=0;p<f;p++){const _=i()*Math.PI*2,g=Math.sqrt(i()),m=l+Math.cos(_)*g*u,y=c+Math.sin(_)*g*h;O2(m,y,.5)||r.push({x:m,z:y,height:.24+i()*.36,width:.6+i()*.6,yaw:i()*Math.PI*2,bed:d})}});for(const[l,c,u]of[[-15.1,-10.5,.8],[-17.3,-12,1.1],[-20.2,-13.8,1.3],[-16.5,13.2,.9],[-18.1,15.2,1.1],[-21.2,17,1.4],[-29.2,22.2,1.3],[-33,24.4,1.7],[-37,26.1,1.5],[-8.5,19.8,1.1],[-5.4,21.8,1.2],[5.7,21,1]])s.push({x:l,z:c,height:u*.6,width:u,yaw:i()*Math.PI*2});for(const[l,c,u]of[[-14.2,-8,.65],[-16.4,-9.1,1.1],[-18.6,-10.6,.8],[-16,13.4,.7],[-20,15.3,1.3],[-21.7,16,.85],[-29,23,1.8],[-32.2,24,1.1],[-34,25,1.5],[-47,-17,2],[-50,-18.1,1.1],[-43,27,1.8]])o.push({x:l,z:c,height:u*.38,width:u,yaw:i()*Math.PI*2});return{trees:t,grass:r,shrubs:s,stones:o}}function yc(i,t=null){return new ze({name:t?"exterior-ground":"exterior-vegetation-stone",vertexColors:!0,defines:t?{EXTERIOR_GROUND:1}:{},uniforms:{sunDirection:{value:i.clone().normalize()},hazeColor:{value:new zt(.84,.61,.48)},...t?{map:{value:t}}:{}},vertexShader:`
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
      }`})}function k2(){const t=new Uint8Array(65536),e=Ga(407);for(let r=0;r<128;r++)for(let s=0;s<128;s++){const o=207+e()*38+7*Math.sin(s*.83+Math.sin(r*.24)),a=(r*128+s)*4;t[a]=o,t[a+1]=o+3,t[a+2]=o-4,t[a+3]=255}const n=new gr(t,128,128);return n.name="hillside-ground-grain-128",n.wrapS=n.wrapT=Mn,n.magFilter=Ee,n.minFilter=Be,n.generateMipmaps=!0,n.anisotropy=4,n.needsUpdate=!0,n}function Mc(i,t=[]){const e=[...t];for(const[n,r,s]of i)for(let o=0;o<=s;o++)e.push(n+(r-n)*o/s);return[...new Set(e)].sort((n,r)=>n-r)}function H2(){const i=Mc([[-1200,-420,20],[-420,-100,20],[-100,-35,12],[-35,20,32],[20,100,10],[100,600,12]],[-13,8]),t=Mc([[-900,-180,12],[-180,-45,10],[-45,45,36],[45,180,10],[180,900,12]],[-30,30]),e=[],n=[],r=[],s=[],o=[],a=new zt(.25,.31,.115),l=new zt(.37,.32,.16),c=new zt(.23,.295,.12),u=new zt,h=new D;for(const d of t)for(const p of i){e.push(p,Ri(p,d),d),h.set(Ri(p-.5,d)-Ri(p+.5,d),1,Ri(p,d-.5)-Ri(p,d+.5)).normalize(),n.push(h.x,h.y,h.z);const _=.5+.25*Math.sin(p*.039+Math.sin(d*.034)*1.5)+.18*Math.sin(d*.071+p*.018);u.copy(a).lerp(l,_);const g=Math.exp(-(((p+12)/19)**2)-(d/30)**2);u.lerp(c,g*.6),r.push(u.r,u.g,u.b),s.push(p/4,d/4)}for(let d=0;d<t.length-1;d++)for(let p=0;p<i.length-1;p++){const _=d*i.length+p,g=_+1,m=_+i.length,y=m+1;o.push(_,m,g,g,m,y)}const f=new Qt;return f.setAttribute("position",new Nt(e,3)),f.setAttribute("normal",new Nt(n,3)),f.setAttribute("color",new Nt(r,3)),f.setAttribute("uv",new Nt(s,2)),f.setIndex(o),f.computeBoundingBox(),f.computeBoundingSphere(),f}function Va(i,t,e=.1){if(i.index){const a=i;i=i.toNonIndexed(),a.dispose()}const n=i.attributes.position,r=new Float32Array(n.count*3),s=new zt(t),o=new zt;for(let a=0;a<n.count;a++){const l=1+e*Math.sin(n.getX(a)*27+n.getY(a)*19+n.getZ(a)*23);o.copy(s).multiplyScalar(l),r.set([o.r,o.g,o.b],a*3)}return i.setAttribute("color",new ge(r,3)),i.deleteAttribute("uv"),i}function lo(i){const t=so(i,!1);for(const e of i)e.dispose();return t.computeBoundingBox(),t.computeBoundingSphere(),t}function fr(i,t,e,n,r,s=6){const o=new D(...i),a=new D(...t),l=a.clone().sub(o),c=new bn(n,e,l.length(),s,1,!0);return c.applyQuaternion(new ke().setFromUnitVectors(new D(0,1,0),l.normalize())),c.translate(...o.add(a).multiplyScalar(.5).toArray()),Va(c,r,.14)}function Ii(i,t,e,n,r,s,o,a=1){const l=new eo(1,a),c=l.attributes.position;for(let u=0;u<c.count;u++){const h=1+.1*Math.sin(c.getX(u)*9+c.getY(u)*7+c.getZ(u)*11);c.setXYZ(u,c.getX(u)*h,c.getY(u)*h,c.getZ(u)*h)}return l.scale(n,r,s),l.translate(i,t,e),Va(l,o,.08)}function G2(){const i=[fr([0,0,0],[.018,.63,-.018],.035,.017,7430474,8)];return[[-.2,.65,.04,.19,.18,.2],[.18,.69,.02,.22,.2,.18],[-.03,.69,-.19,.2,.21,.18],[.03,.77,.19,.21,.2,.18],[-.11,.86,-.02,.19,.21,.21],[.1,.91,.03,.17,.19,.17],[.01,.78,-.05,.25,.21,.22]].forEach(([e,n,r,s,o,a],l)=>{i.push(fr([.01,.34+l*.025,0],[e,n-.035,r],.014,.005,7889994)),i.push(Ii(e,n,r,s,o,a,[7635531,8556627,6781763,9147481][l%4]))}),lo(i)}function V2(){const i=[fr([0,0,0],[-.022,.9,.01],.019,.006,12695706,7)];for(let t=0;t<5;t++){const e=t*2.4,n=.57+t*.08,r=Math.sin(e)*.08,s=Math.cos(e)*.07;i.push(fr([0,n-.2,0],[r,n,s],.007,.002,10392951,5)),i.push(Ii(r,n,s,.13,.19,.12,t%2?10329700:8098386))}return lo(i)}function bc(i=!1){const t=i?6:8,e=i?[[0,.34],[.24,.49],[.29,.7],[.18,.93],[0,1.04]]:[[0,.32],[.24,.45],[.3,.64],[.26,.83],[.15,1],[0,1.06]],n=new Oi(e.map(([s,o])=>new Rt(s,o)),t),r=n.attributes.position;for(let s=0;s<r.count;s++){const o=1+.12*Math.sin(r.getX(s)*17+r.getZ(s)*11+r.getY(s)*13);r.setXYZ(s,r.getX(s)*o,r.getY(s),r.getZ(s)*o)}return lo([Va(n,7899984),fr([0,0,0],[0,.52,0],.027,.016,7890768,i?4:5)])}function W2(){return lo([Ii(-.35,.38,.03,.55,.6,.51,6782280,0),Ii(.3,.47,-.04,.62,.7,.54,8491607,0),Ii(.02,.5,.22,.53,.66,.49,8886107,0)])}function X2(){return Ii(0,.2,0,.6,.75,.5,11182474,0)}function q2(){const i=[],t=[],e=new zt(8227656),n=new zt(11510376);for(let s=0;s<4;s++){const o=s*2.4,a=Math.cos(o),l=Math.sin(o),c=.65+s%3*.17,u=.065,h=[[-l*u,0,a*u],[l*u,0,-a*u],[a*.16-l*u*.5,c*.6,l*.16+a*u*.5],[a*.3,c,l*.3]];for(const f of[0,1,2,1,3,2,2,1,0,2,3,1]){i.push(...h[f]);const d=e.clone().lerp(n,h[f][1]/c);t.push(d.r,d.g,d.b)}}const r=new Qt;return r.setAttribute("position",new Nt(i,3)),r.setAttribute("color",new Nt(t,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),r}function Y2(i){const t=new ze({name:"exterior-sunset",side:xe,depthWrite:!1,uniforms:{sunDir:{value:i.clone()}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 zen = vec3(0.16,0.27,0.55); vec3 hor = vec3(1.25,0.74,0.45); vec3 below = vec3(0.55,0.42,0.36);
        vec3 col = mix(hor, zen, pow(clamp(h,0.0,1.0), 0.5));
        col = mix(col, below, 1.0 - smoothstep(-0.2,0.0,h));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.55,0.25)*pow(s,5.0)*0.7 + vec3(1.0,0.75,0.45)*pow(s,90.0)*2.5 + smoothstep(0.9993,0.9996,s)*vec3(18.0,12.0,7.0);
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new Jt(new On(1200,32,16),t);return e.name="exterior-sky",e.frustumCulled=!1,e.renderOrder=-1,e.matrixAutoUpdate=!1,e}function $i(i,t,e,n,r){const s=new Js(e,n,t.length);s.name=i;const o=new jt,a=new ke,l=new D,c=new D,u=new D(0,1,0),h=new zt,f=Ga(r);return t.forEach((d,p)=>{const{x:_,z:g,height:m,width:y,yaw:M}=d;l.set(_,Ri(_,g)-.045,g),a.setFromAxisAngle(u,M);const x=d.species?m*y:y;c.set(x,m,x),o.compose(l,a,c),s.setMatrixAt(p,o);const A=f();h.setRGB(.88+A*.23,.92+A*.14,.88+A*.11),s.setColorAt(p,h)}),s.instanceMatrix.setUsage(lr),s.instanceMatrix.needsUpdate=!0,s.instanceColor.setUsage(lr),s.instanceColor.needsUpdate=!0,s.matrixAutoUpdate=!1,s.computeBoundingBox(),s.computeBoundingSphere(),s}function j2(i){const t=new Set,e=new Set,n=new Set,r=[];let s=0,o=0,a=0;i.traverse(u=>{var _,g;if(!u.isMesh)return;const h=u.geometry,f=u.material,d=u.isInstancedMesh?u.count:1,p=(h.index?h.index.count:h.attributes.position.count)/3;if(o+=p*d,a+=u.isInstancedMesh?d:0,!t.has(h)){for(const m of Object.values(h.attributes))s+=m.array.byteLength;s+=((_=h.index)==null?void 0:_.array.byteLength)||0,t.add(h)}u.instanceMatrix&&(s+=u.instanceMatrix.array.byteLength),u.instanceColor&&(s+=u.instanceColor.array.byteLength),e.add(f);for(const m of Object.values(f.uniforms||{}))(g=m.value)!=null&&g.isTexture&&n.add(m.value);r.push({name:u.name,instances:d,templateTriangles:p,submittedTriangles:p*d})});let l=0,c=0;for(const u of n){const{width:h,height:f,data:d}=u.image;l+=d.byteLength;let p=h,_=f;do{if(c+=p*_*4,!u.generateMipmaps||p===1&&_===1)break;p=Math.max(1,p>>1),_=Math.max(1,_>>1)}while(!0)}return{triangles:o,drawCallsUpperBound:r.length,instances:a,geometries:t.size,materials:e.size,textures:n.size,bufferBytes:s,textureBytes:l,textureBytesWithMipmaps:c,batches:r}}function $2({sunDirection:i}){const t=new gn;t.name="hillside-exterior",t.matrixAutoUpdate=!1;const e=z2(),n=yc(i),r=k2(),s=new Jt(H2(),yc(i,r));s.name="exterior-continuous-terrain",s.matrixAutoUpdate=!1,t.add(Y2(i),s);const o=G2(),a=V2(),l=bc(),c=bc(!0);for(const f of["oak","birch"]){const d=e.trees.filter(p=>p.species===f);t.add($i(`exterior-near-${f}`,d,f==="oak"?o:a,n,f==="oak"?16:23))}for(const[f,d]of[["middle",[0,2]],["middle",[1,3,8]],["far",[4,6]],["far",[5,7]]]){const p=e.trees.filter(_=>d.includes(_.grove));t.add($i(`exterior-${f}-groves-${d.join("-")}`,p,f==="middle"?l:c,n,70+d[0]))}const u=q2();for(let f=0;f<4;f++){const d=e.grass.filter(p=>p.bed===f);t.add($i(`exterior-meadow-bed-${f}`,d,u,n,30+f))}t.add($i("exterior-low-shrubs",e.shrubs,W2(),n,17)),t.add($i("exterior-sandstone-outcrops",e.stones,X2(),n,12)),t.traverse(f=>{f.castShadow=!1,f.receiveShadow=!1}),t.updateMatrixWorld(!0);const h=j2(t);return t.userData.exteriorBudget=h,{group:t,layout:e,budget:h,dispose(){t.removeFromParent();const f=new Set,d=new Set;t.traverse(p=>{p.geometry&&f.add(p.geometry),p.material&&d.add(p.material),p.isInstancedMesh&&p.dispose()}),f.forEach(p=>p.dispose()),d.forEach(p=>p.dispose()),r.dispose()}}}function K2({document:i,window:t,onCancel:e=()=>{}}){var v;const n=i.getElementById("loading"),r=i.getElementById("loading-status"),s=i.getElementById("loading-retry"),o=i.getElementById("loading-error");(v=t.__libraryBootErrorCleanup)==null||v.call(t);const a=t.pazneriaRoomHandoff;let l="loading",c=null,u=null,h=!1,f=!1,d=null,p=null;function _(){d==null||d.disconnect(),d=null,p=null}function g(){var P;if(!p||a!=null&&a.active)return;const b=p;_(),i.visibilityState==="visible"&&i.hasFocus()&&((P=i.getElementById("c"))==null||P.focus({preventScroll:!0})),b()}const m=()=>Object.assign(new Error("Library loading cancelled"),{name:"AbortError"});function y(){c&&(t.cancelAnimationFrame(c.frame),c.timer!==null&&t.clearTimeout(c.timer),c.reject(m()),c=null)}function M(){u!==null&&t.clearTimeout(u),u=null,l==="ready"&&(n.hidden=!0)}function x(){f||h||l!=="loading"||(f=!0,l="cancelled",y(),_(),a==null||a.fail(),e())}function A(){_(),l==="loading"?x():M()}function E(b){f&&b.persisted&&t.location.reload()}function R(){h||f||(l="error",y(),_(),a==null||a.fail(),M(),n.hidden=!1,n.classList.remove("is-ready"),n.dataset.state="error",n.setAttribute("aria-busy","false"),r.textContent="Library could not load.",o.hidden=s.hidden=!1)}const S=()=>t.location.reload();return s.addEventListener("click",S),t.addEventListener("pagehide",A),t.addEventListener("pageshow",E),n.addEventListener("transitionend",M),{get cancelled(){return f},get state(){return l},async stage(b,P){if(h||f||l!=="loading")throw m();if(!Number.isInteger(b)||b<0||b>3)throw new RangeError("Invalid loading stage");if(n.dataset.stage=String(b),r.textContent=P,await new Promise((F,O)=>{c={frame:null,timer:null,reject:O},c.frame=t.requestAnimationFrame(()=>{c.timer=t.setTimeout(()=>{c=null,F()},0)})}),h||f)throw m()},ready(b=()=>{}){var P,F;if(!(h||f||l!=="loading")){if(l="ready",n.dataset.stage="4",n.dataset.state="ready",n.setAttribute("aria-busy","false"),r.textContent="Ready",(P=t.__libraryBootErrorCleanup)==null||P.call(t),a!=null&&a.active){n.hidden=!0,p=b,d=new t.MutationObserver(g),d.observe(i.documentElement,{attributes:!0,attributeFilter:["data-room-handoff"]}),a.ready(),g();return}b(),n.classList.add("is-ready"),(F=t.matchMedia)!=null&&F.call(t,"(prefers-reduced-motion: reduce)").matches?M():u=t.setTimeout(M,240)}},fail:R,dispose(){var b;h||(h=!0,y(),_(),a==null||a.fail(),M(),(b=t.__libraryBootErrorCleanup)==null||b.call(t),s.removeEventListener("click",S),t.removeEventListener("pagehide",A),t.removeEventListener("pageshow",E),n.removeEventListener("transitionend",M))}}}const Ce={scene:null,renderer:null,environmentTarget:null,materials:null,cleanup:null};let Sc=!1;function tu(){var i;Sc||(Sc=!0,Ce.cleanup?Ce.cleanup():Ce.scene&&Ce.renderer?Q0({scene:Ce.scene,renderer:Ce.renderer,environmentTarget:Ce.environmentTarget,materials:Object.values(Ce.materials||{})}):(i=Ce.renderer)==null||i.dispose())}const Kn=K2({document,window,onCancel:tu});window.__libraryLoading=Kn;async function Z2(){var st;await Kn.stage(0,"Preparing library");const i=document.getElementById("c"),t=new C0({canvas:i,antialias:!0,powerPreference:"high-performance"});Ce.renderer=t;const e=Math.min(window.devicePixelRatio||1,1);let n=e;t.setPixelRatio(n),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=pa,t.toneMappingExposure=1.05,t.outputColorSpace=ce,t.shadowMap.enabled=!0,t.shadowMap.type=ks,t.shadowMap.autoUpdate=!1;const r=new Oa;Ce.scene=r,r.background=new zt(9075306);const s=new Pe(70,window.innerWidth/window.innerHeight,.05,2500);s.rotation.order="YXZ";const o=new Ns(t),a=new vp,l=o.fromScene(a,.04);Ce.environmentTarget=l,r.environment=l.texture,a.dispose(),o.dispose(),r.environmentIntensity=.22,await Kn.stage(1,"Building room");const c=Qn(20261006),u=Zp();Ce.materials=u;const h=new e2(Qn(77)),f=Jp(u,h,c,J0);f.B.finish(r);const d=h.build(Sp(31));r.add(d),P2(r,mc,pc,r2);const p=U2(r,u,Qo,jr),_=[...f.B.solids,...p.solids];h.mats.length=h.cols.length=h.vars.length=0,await Kn.stage(2,"Adding scenery");const g=new D(-.9,.4,.14).normalize(),m=new q0(16757611,8);m.target.position.set(-2,3,-1),m.position.copy(m.target.position).addScaledVector(g,60),m.castShadow=!0,m.shadow.mapSize.set(4096,4096);const y=m.shadow.camera;y.left=-17,y.right=17,y.top=15,y.bottom=-15,y.near=20,y.far=100,y.updateProjectionMatrix(),m.shadow.bias=-4e-4,m.shadow.normalBias=.025,r.add(m,m.target);const M=new W0(13227775,6964264,.42);r.add(M);const x=new Os(16754792,11,24,1.2);x.position.set(3,3.6,-.8),r.add(x);const A=[];for(const H of f.lights){const nt=new Os(H.c,H.i,H.d,2);nt.position.copy(H.p),nt.userData=H,r.add(nt),A.push(nt)}const E=$2({sunDirection:g});r.add(E.group);const R=g.clone().negate();{const H=[],nt=[];for(const Mt of f.windows.slice(0,4))for(let At=0;At<4;At++){const It=Mt[At],xt=Mt[(At+1)%4],Yt=It.clone().addScaledVector(R,12),Ht=xt.clone().addScaledVector(R,12);for(const[$t,G,gt]of[[It,0,0],[xt,0,1],[Ht,1,1],[It,0,0],[Ht,1,1],[Yt,1,0]])H.push($t.x,$t.y,$t.z),nt.push(G,gt)}const ut=new Qt;ut.setAttribute("position",new Nt(H,3)),ut.setAttribute("uv",new Nt(nt,2));const Ft=new ze({transparent:!0,depthWrite:!1,blending:ar,side:Ie,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float t; varying vec2 vUv; varying vec3 vW;
      void main(){ float along = vUv.x; float across = vUv.y;
        float a = pow(1.0-along, 1.6) * smoothstep(0.0,0.04,along) * smoothstep(0.0,0.25,across) * smoothstep(1.0,0.75,across);
        float n = 0.75 + 0.25*sin(vW.x*1.7 + vW.y*2.3 + t*0.3) * sin(vW.z*1.3 - t*0.2);
        float fadeFloor = smoothstep(0.0, 0.6, vW.y);
        gl_FragColor = vec4(vec3(1.0,0.72,0.42)*a*n*0.11*fadeFloor, 1.0); }`}),et=new Jt(ut,Ft);et.frustumCulled=!1,et.renderOrder=5,r.add(et),window.__shafts=Ft}let S;{const H=Qn(9),nt=[],rt=[];for(const et of f.windows)for(let Mt=0;Mt<420;Mt++){const At=H(),It=H(),xt=et[0].clone().lerp(et[1],At).lerp(et[3].clone().lerp(et[2],At),It).addScaledVector(R,.5+H()*11);xt.y<.1||xt.y>10||xt.x>6.9||xt.z<-9.9||xt.z>8.9||(nt.push(xt.x,xt.y,xt.z),rt.push(H()*100))}const ut=new Qt;ut.setAttribute("position",new Nt(nt,3)),ut.setAttribute("phase",new Nt(rt,1)),S=new ze({transparent:!0,depthWrite:!1,blending:ar,uniforms:{t:{value:0},map:{value:wp()},scale:{value:window.innerHeight*.5}},vertexShader:`uniform float t; uniform float scale; attribute float phase; varying float vA;
      void main(){ vec3 p = position + vec3(sin(t*0.11+phase)*0.25, sin(t*0.07+phase*1.3)*0.3, cos(t*0.09+phase*0.7)*0.25);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        gl_PointSize = clamp(0.018*scale/-mv.z, 0.0, 6.0); vA = 0.55+0.45*sin(t*0.5+phase); }`,fragmentShader:"uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0,0.8,0.55)*a*vA*0.8, 1.0); }"});const Ft=new I0(ut,S);Ft.frustumCulled=!1,r.add(Ft)}await Kn.stage(3,"Preparing view");const v={pos:new D,vy:0,yaw:0,pitch:0,eye:1.62,eyeCur:1.62,smoothY:0,vel:new D,radius:.28,step:.42,height:1.75},b=[{p:[3.4,0,4.3],yaw:.78,pitch:.1,name:"Entrance by the hearth"},{p:[-2,0,-3.7],yaw:1.2,pitch:-.05,name:"Lower shelves, between the stacks"},{p:[-8.2,0,4.9],yaw:1.5,pitch:-.05,name:"Window reading alcove"},{p:[5.6,0,8],yaw:0,pitch:.18,name:"Foot of the staircase"},{p:[1.2,ha.GY,-7.6],yaw:Math.PI-.3,pitch:-.32,name:"Gallery overlook"}];function P(H){const nt=b[H];v.pos.set(nt.p[0],nt.p[1],nt.p[2]),v.yaw=nt.yaw,v.pitch=nt.pitch,v.vy=0,v.vel.set(0,0,0),v.smoothY=v.pos.y,lt(nt.name)}function F(H,nt,rt){let ut=-1/0;const Ft=v.radius*.7;for(const et of _)H+Ft<et.x0||H-Ft>et.x1||nt+Ft<et.z0||nt-Ft>et.z1||et.y1<=rt+v.step&&et.y1>ut&&(ut=et.y1);return ut}function O(H,nt,rt,ut){const Ft=v.radius;if(p.door.blocks(H,nt,rt,ut,Ft))return!0;for(const et of _)if(!(H+Ft<=et.x0||H-Ft>=et.x1||nt+Ft<=et.z0||nt-Ft>=et.z1)&&et.y0<rt+ut&&et.y1>rt+v.step)return!0;return!1}const N=new Set;let Y=!1,k=null,$=null,j=null,at=!1;addEventListener("keydown",H=>{if(!(at||k!=null&&k.isOpen||$!=null&&$.paused||Ha(H.target))&&(N.add(H.code),!H.repeat)){if(H.code==="KeyR"&&P(0),H.code.startsWith("Digit")){const nt=+H.code.slice(5)-1;nt>=0&&nt<b.length&&P(nt)}H.code==="KeyC"&&(Y=!Y),H.code==="KeyF"&&Ct.classList.toggle("show"),H.code==="KeyH"&&it.classList.toggle("hide"),H.code==="KeyP"&&(n=n>.8?Math.max(.6,n-.25):e,t.setPixelRatio(n),ct(),lt(`Render scale ${Math.round(n*100)}%`)),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(H.code)&&H.preventDefault()}}),addEventListener("keyup",H=>N.delete(H.code)),addEventListener("blur",()=>N.clear());const ft=document.getElementById("overlay"),it=document.getElementById("help"),Ct=document.getElementById("stats"),Bt=document.getElementById("toast");let J=0;function lt(H){Bt.textContent=H,Bt.classList.add("show"),J=2.2}function T(){N.clear(),v.vel.set(0,0,0)}const L=n2({canvas:i,overlay:ft,menuButton:document.getElementById("controls-toggle"),player:v,camera:s,toast:lt,releaseMovement:T,isInputBlocked:()=>!!(at||k!=null&&k.isOpen||$!=null&&$.paused),setMenuPaused:H=>$==null?void 0:$.setPaused("controls",H)}),U=new D;k=I2({legacyFactory:o2,camera:s,solids:_,document,window,canvas:i,content:pc,look:L,releaseMovement:T,dialog:document.getElementById("reader"),hint:document.getElementById("interaction-hint"),returnFocus:i,canInteract:()=>!at&&!L.menuOpen&&!($!=null&&$.paused)&&document.hasFocus(),getTarget:()=>_c(s.position,s.getWorldDirection(U),mc,_,i2),setPaused:H=>$==null?void 0:$.setPaused("reading",H)}),j=N2({document,window,canvas:i,content:jr,controls:ft.querySelector(".card"),readerFooter:document.querySelector(".reader-footer"),canInteract:()=>!at&&!k.isOpen&&!L.menuOpen&&!($!=null&&$.paused)&&document.hasFocus(),getTarget:()=>_c(s.position,s.getWorldDirection(U),[Qo],_,Qo.reach),beforeLeave:tt,useDoor:()=>p.door.use(),getPrompt:()=>p.door.passable?jr.prompt:jr.openPrompt});const z=new D;function V(H){const nt=(N.has("KeyW")||N.has("ArrowUp")?1:0)-(N.has("KeyS")||N.has("ArrowDown")?1:0),rt=(N.has("KeyD")||N.has("ArrowRight")?1:0)-(N.has("KeyA")||N.has("ArrowLeft")?1:0),ut=(N.has("ShiftLeft")||N.has("ShiftRight")?4.6:2.5)*(Y?.55:1),Ft=Math.sin(v.yaw),et=Math.cos(v.yaw),Mt=-Ft*nt+et*rt,At=-et*nt-Ft*rt,It=Math.hypot(Mt,At)||1,xt=z.set(Mt/It*ut*(nt||rt?1:0),0,At/It*ut*(nt||rt?1:0)),Yt=1-Math.exp(-H*12);v.vel.lerp(xt,Yt);const Ht=Y?1.15:v.height,$t=v.pos.x+v.vel.x*H,G=v.pos.z+v.vel.z*H;O($t,G,v.pos.y,Ht)?O($t,v.pos.z,v.pos.y,Ht)?O(v.pos.x,G,v.pos.y,Ht)?v.vel.multiplyScalar(.2):(v.pos.z=G,v.vel.x*=.5):(v.pos.x=$t,v.vel.z*=.5):(v.pos.x=$t,v.pos.z=G);const gt=F(v.pos.x,v.pos.z,v.pos.y);gt>=v.pos.y-v.step&&gt>-1/0&&v.vy<=0?(v.pos.y=gt,v.vy=0):(v.vy-=9.8*H,v.pos.y+=v.vy*H,gt>-1/0&&v.pos.y<gt&&(v.pos.y=gt,v.vy=0)),v.pos.y<-10&&P(0),v.smoothY+=(v.pos.y-v.smoothY)*(1-Math.exp(-H*14)),v.eyeCur+=((Y?1:v.eye)-v.eyeCur)*(1-Math.exp(-H*10)),s.position.set(v.pos.x,v.smoothY+v.eyeCur,v.pos.z),s.rotation.set(v.pitch,v.yaw,0)}function ct(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),S.uniforms.scale.value=window.innerHeight*n*.5}addEventListener("resize",ct),ct();const mt=new si({colorWrite:!1}),bt=[];r.traverse(H=>{H.material&&(H.material.transparent||H.material.isShaderMaterial||H.isPoints)&&bt.push(H)}),t.autoClear=!1;let B=!1;function kt(){if(t.clear(),B){for(const H of bt)H.visible=!1;r.overrideMaterial=mt,t.render(r,s),r.overrideMaterial=null;for(const H of bt)H.visible=!0}t.render(r,s)}const Pt=[];let pt=0,ht=0,Tt=0;P(0),V(0),Bt.classList.remove("show"),t.compile(r,s),r.traverse(H=>{const nt=H.material;if(nt){for(const rt of["map","bumpMap"])nt[rt]&&t.initTexture(nt[rt]);nt.uniforms&&nt.uniforms.map&&t.initTexture(nt.uniforms.map.value)}}),t.shadowMap.needsUpdate=!0;const _t=new D;function I(H,nt){const rt=Math.min(nt,.05);Tt+=rt,_t.copy(v.pos),p.door.update(rt,v.pos,v.radius),V(rt),ht+=rt,ht>=.125&&(ht=0,k.updateHint(),j.updateHint());for(const ut of A)ut.userData.fire&&(ut.intensity=ut.userData.i*(.82+.12*Math.sin(Tt*9.1)+.08*Math.sin(Tt*23.7+1.3)));if(window.__shafts.uniforms.t.value=Tt,S.uniforms.t.value=Tt,kt(),nt>0&&nt<.25&&document.visibilityState==="visible"&&Pt.push(nt*1e3),Pt.length>240&&Pt.shift(),pt+=nt,pt>.5){pt=0;const ut=[...Pt].sort((At,It)=>At-It),Ft=ut.reduce((At,It)=>At+It,0)/ut.length,et=ut[Math.floor(ut.length*.99)-1]||Ft,Mt=t.info.render;Ct.textContent=`${(1e3/Ft).toFixed(0)} fps  avg ${Ft.toFixed(1)} ms  p99 ${et.toFixed(1)} ms
calls ${Mt.calls}  tris ${(Mt.triangles/1e3).toFixed(0)}k  scale ${Math.round(n*100)}%
pos ${v.pos.x.toFixed(1)} ${v.pos.y.toFixed(2)} ${v.pos.z.toFixed(1)}`}J>0&&(J-=rt,J<=0&&Bt.classList.remove("show")),p.door.crossed(_t,v.pos,v.radius)&&j.leave()}$=L2({tick:I,request:H=>window.requestAnimationFrame(H),cancel:H=>window.cancelAnimationFrame(H),now:()=>performance.now()});const w=[];function X(H,nt,rt){H.addEventListener(nt,rt),w.push(()=>H.removeEventListener(nt,rt))}function tt(){var H;if(!at){at=!0,T(),L.pause(),$==null||$.setPaused("exit",!0),j==null||j.dispose(),k.dispose(),L.dispose(),$==null||$.dispose();for(const nt of w)nt();Q0({scene:r,renderer:t,environmentTarget:l,materials:Object.values(u),extraMaterials:[mt,...p.materials]}),delete window.__shafts,delete window.__lib,((H=window.__libraryLoading)==null?void 0:H.state)==="ready"&&(window.__libraryLoading.dispose(),delete window.__libraryLoading)}}Ce.cleanup=tt,X(window,"blur",()=>{T(),$.setPaused("focus",!0)}),X(window,"focus",()=>$.setPaused("focus",!1)),X(document,"visibilitychange",()=>$.setPaused("visibility",document.visibilityState!=="visible")),X(window,"pagehide",H=>{L.pause(),$.setPaused("page",!0),H.persisted||tt()}),X(window,"pageshow",()=>{var H;L.resume(),$.setPaused("page",!1),$.setPaused("handoff",!!((H=window.pazneriaRoomHandoff)!=null&&H.active)),$.setPaused("visibility",document.visibilityState!=="visible"),$.setPaused("focus",!document.hasFocus())}),kt(),$.setPaused("visibility",document.visibilityState!=="visible"),$.setPaused("focus",!document.hasFocus()),$.setPaused("handoff",!!((st=window.pazneriaRoomHandoff)!=null&&st.active)),$.start(),window.__lib={P:v,setView:P,solids:_,renderer:t,scene:r,camera:s,books:d,drawFrame:kt,setPrepass:H=>B=H,sim:(H,nt)=>{H.forEach(rt=>N.add(rt));for(let rt=0;rt<nt;rt+=1/60)V(1/60);return H.forEach(rt=>N.delete(rt)),v.pos.toArray().map(rt=>+rt.toFixed(2))}},Kn.ready(()=>{T(),$.setPaused("handoff",!1)})}Z2().catch(i=>{i.name!=="AbortError"&&(console.error("Library initialization failed:",i),Kn.fail()),tu()});
