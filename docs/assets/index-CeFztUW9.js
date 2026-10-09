(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bs="170",Bl=0,wo=1,zl=2,Es=1,kl=2,Zt=3,gn=0,gt=1,Rt=2,fn=0,Xn=1,Zi=2,Ao=3,Ro=4,Hl=5,wn=100,Gl=101,Vl=102,Wl=103,Xl=104,ql=200,Yl=201,jl=202,Kl=203,Nr=204,Fr=205,$l=206,Zl=207,Jl=208,Ql=209,ec=210,tc=211,nc=212,ic=213,rc=214,Or=0,Br=1,zr=2,jn=3,kr=4,Hr=5,Gr=6,Vr=7,Ts=0,sc=1,oc=2,dn=0,ac=1,lc=2,cc=3,Oo=4,uc=5,hc=6,fc=7,Bo=300,Kn=301,$n=302,Wr=303,Xr=304,tr=306,Ti=1e3,An=1001,qr=1002,Ct=1003,dc=1004,Vi=1005,Bt=1006,Dr=1007,Jt=1008,en=1009,zo=1010,ko=1011,wi=1012,ws=1013,Rn=1014,qt=1015,Ri=1016,As=1017,Rs=1018,Zn=1020,Ho=35902,Go=1021,Vo=1022,zt=1023,Wo=1024,Xo=1025,qn=1026,Jn=1027,Cs=1028,Ps=1029,qo=1030,Is=1031,Ls=1033,qi=33776,Yi=33777,ji=33778,Ki=33779,Yr=35840,jr=35841,Kr=35842,$r=35843,Zr=36196,Jr=37492,Qr=37496,es=37808,ts=37809,ns=37810,is=37811,rs=37812,ss=37813,os=37814,as=37815,ls=37816,cs=37817,us=37818,hs=37819,fs=37820,ds=37821,$i=36492,ps=36494,ms=36495,Yo=36283,gs=36284,_s=36285,xs=36286,pc=3200,mc=3201,Ds=0,gc=1,hn="",mt="srgb",ti="srgb-linear",nr="linear",nt="srgb",kn=7680,Co=519,_c=512,xc=513,vc=514,jo=515,Mc=516,yc=517,Sc=518,bc=519,Ji=35044,Po="300 es",Qt=2e3,Qi=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,Io=180/Math.PI;function ir(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function su(i,e){return(i%e+e)%e}function qs(i,e,t){return(1-t)*i+t*e}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,r,s,o,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u)}set(e,t,n,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],M=r[1],y=r[4],x=r[7],T=r[2],E=r[5],R=r[8];return s[0]=o*_+a*M+l*T,s[3]=o*m+a*y+l*E,s[6]=o*d+a*x+l*R,s[1]=u*_+c*M+h*T,s[4]=u*m+c*y+h*E,s[7]=u*d+c*x+h*R,s[2]=f*_+p*M+g*T,s[5]=f*m+p*y+g*E,s[8]=f*d+p*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*u-c*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(n*l-u*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ys.makeScale(e,t)),this}rotate(e){return this.premultiply(Ys.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ys.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new Ge;function Ec(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tc(){const i=vs("canvas");return i.style.display="block",i}const Ma={};function Wi(i){i in Ma||(Ma[i]=!0,console.warn(i))}function ou(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function au(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:ti,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(i.r=pn(i.r),i.g=pn(i.g),i.b=pn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hn?nr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ya=[.64,.33,.3,.6,.15,.06],Sa=[.2126,.7152,.0722],ba=[.3127,.329],Ea=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ta=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[ti]:{primaries:ya,whitePoint:ba,transfer:nr,toXYZ:Ea,fromXYZ:Ta,luminanceCoefficients:Sa,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:ya,whitePoint:ba,transfer:nt,toXYZ:Ea,fromXYZ:Ta,luminanceCoefficients:Sa,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});let si;class wc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=vs("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cu=0;class Ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(js(r[o].image)):s.push(js(r[o]))}else s=js(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uu=0;class _t extends ni{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=An,r=An,s=Bt,o=Jt,a=zt,l=en,u=_t.DEFAULT_ANISOTROPY,c=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ir(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=Bo;_t.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,x=(p+1)/2,T=(d+1)/2,E=(c+f)/4,R=(h+_)/4,C=(g+m)/4;return y>x&&y>T?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=E/n,s=R/n):x>T?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=C/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=R/s,r=C/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-c)/M,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ac extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _t(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $o extends _t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rc extends _t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],u=n[r+1],c=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||u!==p||c!==g){let m=1-a;const d=l*f+u*p+c*g+h*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const T=Math.sqrt(y),E=Math.atan2(T,d*M);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}const x=a*M;if(l=l*m+f*x,u=u*m+p*x,c=c*m+g*x,h=h*m+_*x,m===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=T,u*=T,c*=T,h*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],c=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*h+l*p-u*f,e[t+1]=l*g+c*f+u*h-a*p,e[t+2]=u*g+c*p+a*f-l*h,e[t+3]=c*g-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-r*a,this._w=o*c-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*n),c=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*u+o*h-a*c,this.y=n+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new B,wa=new jt;class Pn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(s,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),cr.subVectors(this.max,Ui),oi.subVectors(e.a,Ui),ai.subVectors(e.b,Ui),li.subVectors(e.c,Ui),vn.subVectors(ai,oi),Mn.subVectors(li,ai),Un.subVectors(oi,li);let t=[0,-vn.z,vn.y,0,-Mn.z,Mn.y,0,-Un.z,Un.y,vn.z,0,-vn.x,Mn.z,0,-Mn.x,Un.z,0,-Un.x,-vn.y,vn.x,0,-Mn.y,Mn.x,0,-Un.y,Un.x,0];return!$s(t,oi,ai,li,cr)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,oi,ai,li,cr))?!1:(ur.crossVectors(vn,Mn),t=[ur.x,ur.y,ur.z],$s(t,oi,ai,li,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new B,new B,new B,new B,new B,new B,new B,new B],Gt=new B,lr=new Pn,oi=new B,ai=new B,li=new B,vn=new B,Mn=new B,Un=new B,Ui=new B,cr=new B,ur=new B,Nn=new B;function $s(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Nn.fromArray(i,s);const a=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),l=e.dot(Nn),u=t.dot(Nn),c=n.dot(Nn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const hu=new Pn,Ni=new B,Zs=new B;class ii{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ni,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(Zs)),this.expandByPoint(Ni.copy(e.center).sub(Zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new B,Js=new B,hr=new B,yn=new B,Qs=new B,fr=new B,eo=new B;class Zo{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Js.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(Js);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=yn.dot(this.direction),l=-yn.dot(hr),u=yn.lengthSq(),c=Math.abs(1-o*o);let h,f,p,g;if(c>0)if(h=o*l-a,f=o*a-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Js).addScaledVector(hr,f),p}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),r=an.dot(an)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,r,s){Qs.subVectors(t,e),fr.subVectors(n,e),eo.crossVectors(Qs,fr);let o=this.direction.dot(eo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yn.subVectors(this.origin,e);const l=a*this.direction.dot(fr.crossVectors(yn,fr));if(l<0)return null;const u=a*this.direction.dot(Qs.cross(yn));if(u<0||l+u>o)return null;const c=-a*yn.dot(eo);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,r,s,o,a,l,u,c,h,f,p,g,_,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u,c,h,f,p,g,_,m)}set(e,t,n,r,s,o,a,l,u,c,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ci.setFromMatrixColumn(e,0).length(),s=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+_,t[1]=l*h,t[5]=_*u+f,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+_,t[5]=o*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fu,e,du)}lookAt(e,t,n){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Sn.crossVectors(n,Lt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Sn.crossVectors(n,Lt)),Sn.normalize(),dr.crossVectors(Lt,Sn),r[0]=Sn.x,r[4]=dr.x,r[8]=Lt.x,r[1]=Sn.y,r[5]=dr.y,r[9]=Lt.y,r[2]=Sn.z,r[6]=dr.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],y=n[7],x=n[11],T=n[15],E=r[0],R=r[4],C=r[8],v=r[12],S=r[1],L=r[5],D=r[9],F=r[13],U=r[2],j=r[6],H=r[10],q=r[14],Y=r[3],re=r[7],he=r[11],oe=r[15];return s[0]=o*E+a*S+l*U+u*Y,s[4]=o*R+a*L+l*j+u*re,s[8]=o*C+a*D+l*H+u*he,s[12]=o*v+a*F+l*q+u*oe,s[1]=c*E+h*S+f*U+p*Y,s[5]=c*R+h*L+f*j+p*re,s[9]=c*C+h*D+f*H+p*he,s[13]=c*v+h*F+f*q+p*oe,s[2]=g*E+_*S+m*U+d*Y,s[6]=g*R+_*L+m*j+d*re,s[10]=g*C+_*D+m*H+d*he,s[14]=g*v+_*F+m*q+d*oe,s[3]=M*E+y*S+x*U+T*Y,s[7]=M*R+y*L+x*j+T*re,s[11]=M*C+y*D+x*H+T*he,s[15]=M*v+y*F+x*q+T*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*u*h-s*a*f+n*u*f+r*a*p-n*l*p)+_*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*h-t*a*p-s*o*h+n*o*p+s*a*c-n*u*c)+d*(-r*a*c-t*l*h+t*a*f+r*o*h-n*o*f+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],M=h*m*u-_*f*u+_*l*p-a*m*p-h*l*d+a*f*d,y=g*f*u-c*m*u-g*l*p+o*m*p+c*l*d-o*f*d,x=c*_*u-g*h*u+g*a*p-o*_*p-c*a*d+o*h*d,T=g*h*l-c*_*l-g*a*f+o*_*f+c*a*m-o*h*m,E=t*M+n*y+r*x+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=M*R,e[1]=(_*f*s-h*m*s-_*r*p+n*m*p+h*r*d-n*f*d)*R,e[2]=(a*m*s-_*l*s+_*r*u-n*m*u-a*r*d+n*l*d)*R,e[3]=(h*l*s-a*f*s-h*r*u+n*f*u+a*r*p-n*l*p)*R,e[4]=y*R,e[5]=(c*m*s-g*f*s+g*r*p-t*m*p-c*r*d+t*f*d)*R,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*d-t*l*d)*R,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*R,e[8]=x*R,e[9]=(g*h*s-c*_*s-g*n*p+t*_*p+c*n*d-t*h*d)*R,e[10]=(o*_*s-g*a*s+g*n*u-t*_*u-o*n*d+t*a*d)*R,e[11]=(c*a*s-o*h*s-c*n*u+t*h*u+o*n*p-t*a*p)*R,e[12]=T*R,e[13]=(c*_*r-g*h*r+g*n*f-t*_*f-c*n*m+t*h*m)*R,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*h*r-c*a*r+c*n*l-t*h*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+n,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,g=s*h,_=o*c,m=o*h,d=a*h,M=l*u,y=l*c,x=l*h,T=n.x,E=n.y,R=n.z;return r[0]=(1-(_+d))*T,r[1]=(p+x)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(p-x)*E,r[5]=(1-(f+d))*E,r[6]=(m+M)*E,r[7]=0,r[8]=(g+y)*R,r[9]=(m-M)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ci.set(r[0],r[1],r[2]).length();const o=ci.set(r[4],r[5],r[6]).length(),a=ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const u=1/s,c=1/o,h=1/a;return Vt.elements[0]*=u,Vt.elements[1]*=u,Vt.elements[2]*=u,Vt.elements[4]*=c,Vt.elements[5]*=c,Vt.elements[6]*=c,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Qt){const l=this.elements,u=2*s/(t-e),c=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let p,g;if(a===Qt)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Qi)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Qt){const l=this.elements,u=1/(t-e),c=1/(n-r),h=1/(o-s),f=(t+e)*u,p=(n+r)*c;let g,_;if(a===Qt)g=(o+s)*h,_=-2*h;else if(a===Qi)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new B,Vt=new Ke,fu=new B(0,0,0),du=new B(1,1,1),Sn=new B,dr=new B,Lt=new B,Aa=new Ke,Ra=new jt;class Pt{constructor(e=0,t=0,n=0,r=Pt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pt.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pu=0;const Ca=new B,ui=new jt,ln=new Ke,pr=new B,Fi=new B,mu=new B,gu=new jt,Pa=new B(1,0,0),Ia=new B(0,1,0),La=new B(0,0,1),Da={type:"added"},_u={type:"removed"},hi={type:"childadded",child:null},to={type:"childremoved",child:null};class ut extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new B,t=new Pt,n=new jt,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ge}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Pa,e)}rotateY(e){return this.rotateOnAxis(Ia,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return Ca.copy(e).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pa,e)}translateY(e){return this.translateOnAxis(Ia,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pr.copy(e):pr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Fi,pr,this.up):ln.lookAt(pr,Fi,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),ui.setFromRotationMatrix(ln),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Da),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_u),to.child=e,this.dispatchEvent(to),to.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Da),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ut.DEFAULT_UP=new B(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new B,cn=new B,no=new B,un=new B,fi=new B,di=new B,Ua=new B,io=new B,ro=new B,so=new B,oo=new it,ao=new it,lo=new it;class Ot{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Wt.subVectors(r,t),cn.subVectors(n,t),no.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(cn),l=Wt.dot(no),u=cn.dot(cn),c=cn.dot(no),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return oo.setScalar(0),ao.setScalar(0),lo.setScalar(0),oo.fromBufferAttribute(e,t),ao.fromBufferAttribute(e,n),lo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(oo,s.x),o.addScaledVector(ao,s.y),o.addScaledVector(lo,s.z),o}static isFrontFacing(e,t,n,r){return Wt.subVectors(n,t),cn.subVectors(e,t),Wt.cross(cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Wt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ot.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;fi.subVectors(r,n),di.subVectors(s,n),io.subVectors(e,n);const l=fi.dot(io),u=di.dot(io);if(l<=0&&u<=0)return t.copy(n);ro.subVectors(e,r);const c=fi.dot(ro),h=di.dot(ro);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(fi,o);so.subVectors(e,s);const p=fi.dot(so),g=di.dot(so);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(n).addScaledVector(di,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return Ua.subVectors(s,r),a=(h-c)/(h-c+(p-g)),t.copy(r).addScaledVector(Ua,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(fi,o).addScaledVector(di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function co(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=su(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=co(o,s,e+1/3),this.g=co(o,s,e),this.b=co(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=Cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return $e.fromWorkingColorSpace(Mt.copy(this),e),Math.round(bt(Mt.r*255,0,255))*65536+Math.round(bt(Mt.g*255,0,255))*256+Math.round(bt(Mt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=mt){$e.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(mr);const n=qs(bn.h,mr.h,t),r=qs(bn.s,mr.s,t),s=qs(bn.l,mr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ne;Ne.NAMES=Cc;let xu=0;class In extends ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=ir(),this.name="",this.blending=Xn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Fr,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Fr&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Co&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qn extends In{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new B,gr=new Ve;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ji,this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ji&&(e.usage=this.usage),e}}class Qo extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ea extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vu=0;const Ft=new Ke,uo=new ut,pi=new B,Dt=new Pn,Oi=new Pn,dt=new B;class ct extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ec(e)?ea:Qo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Oi.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(Dt.min,Oi.min),Dt.expandByPoint(dt),dt.addVectors(Dt.max,Oi.max),Dt.expandByPoint(dt)):(Dt.expandByPoint(Oi.min),Dt.expandByPoint(Oi.max))}Dt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)dt.fromBufferAttribute(a,u),l&&(pi.fromBufferAttribute(e,u),dt.add(pi)),r=Math.max(r,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new B,l[C]=new B;const u=new B,c=new B,h=new B,f=new Ve,p=new Ve,g=new Ve,_=new B,m=new B;function d(C,v,S){u.fromBufferAttribute(n,C),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,v),g.fromBufferAttribute(s,S),c.sub(u),h.sub(u),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),a[C].add(_),a[v].add(_),a[S].add(_),l[C].add(m),l[v].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,v=M.length;C<v;++C){const S=M[C],L=S.start,D=S.count;for(let F=L,U=L+D;F<U;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new B,x=new B,T=new B,E=new B;function R(C){T.fromBufferAttribute(r,C),E.copy(T);const v=a[C];y.copy(v),y.sub(T.multiplyScalar(T.dot(v))).normalize(),x.crossVectors(E,v);const L=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,v=M.length;C<v;++C){const S=M[C],L=S.start,D=S.count;for(let F=L,U=L+D;F<U;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,h=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),a.add(c),l.add(c),u.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new yt(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ct,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new Ke,Fn=new Zo,_r=new ii,Fa=new B,xr=new B,vr=new B,Mr=new B,ho=new B,yr=new B,Oa=new B,Sr=new B;class et extends ut{constructor(e=new ct,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(ho.fromBufferAttribute(h,e),o?yr.addScaledVector(ho,c):yr.addScaledVector(ho.sub(t),c))}t.add(yr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),Fn.copy(e.ray).recast(e.near),!(_r.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(_r,Fa)===null||Fn.origin.distanceToSquared(Fa)>(e.far-e.near)**2))&&(Na.copy(s).invert(),Fn.copy(e.ray).applyMatrix4(Na),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,T=y;x<T;x+=3){const E=a.getX(x),R=a.getX(x+1),C=a.getX(x+2);r=br(this,d,e,n,u,c,h,E,R,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=br(this,o,e,n,u,c,h,M,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,T=y;x<T;x+=3){const E=x,R=x+1,C=x+2;r=br(this,d,e,n,u,c,h,E,R,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,y=m+1,x=m+2;r=br(this,o,e,n,u,c,h,M,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Mu(i,e,t,n,r,s,o,a){let l;if(e.side===gt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===gn,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Sr);return u<t.near||u>t.far?null:{distance:u,point:Sr.clone(),object:i}}function br(i,e,t,n,r,s,o,a,l,u){i.getVertexPosition(a,xr),i.getVertexPosition(l,vr),i.getVertexPosition(u,Mr);const c=Mu(i,e,t,n,xr,vr,Mr,Oa);if(c){const h=new B;Ot.getBarycoord(Oa,xr,vr,Mr,h),r&&(c.uv=Ot.getInterpolatedAttribute(r,a,l,u,h,new Ve)),s&&(c.uv1=Ot.getInterpolatedAttribute(s,a,l,u,h,new Ve)),o&&(c.normal=Ot.getInterpolatedAttribute(o,a,l,u,h,new B),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new B,materialIndex:0};Ot.getNormal(xr,vr,Mr,f.normal),c.face=f,c.barycoord=h}return c}class tn extends ct{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2));function g(_,m,d,M,y,x,T,E,R,C,v){const S=x/R,L=T/C,D=x/2,F=T/2,U=E/2,j=R+1,H=C+1;let q=0,Y=0;const re=new B;for(let he=0;he<H;he++){const oe=he*L-F;for(let w=0;w<j;w++){const N=w*S-D;re[_]=N*M,re[m]=oe*y,re[d]=U,u.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[d]=E>0?1:-1,c.push(re.x,re.y,re.z),h.push(w/R),h.push(1-he/C),q+=1}}for(let he=0;he<C;he++)for(let oe=0;oe<R;oe++){const w=f+oe+j*he,N=f+oe+j*(he+1),I=f+(oe+1)+j*(he+1),O=f+(oe+1)+j*he;l.push(w,N,O),l.push(N,I,O),Y+=6}a.addGroup(p,Y,v),p+=Y,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=Ai(i[t]);for(const r in n)e[r]=n[r]}return e}function yu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Ic={clone:Ai,merge:St};var Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends In{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=yu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ta extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new B,Ba=new Ve,za=new Ve;class At extends ta{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,Ba,za),t.subVectors(za,Ba)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class Lc extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new At(mi,gi,e,t);r.layers=this.layers,this.add(r);const s=new At(mi,gi,e,t);s.layers=this.layers,this.add(s);const o=new At(mi,gi,e,t);o.layers=this.layers,this.add(o);const a=new At(mi,gi,e,t);a.layers=this.layers,this.add(a);const l=new At(mi,gi,e,t);l.layers=this.layers,this.add(l);const u=new At(mi,gi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class na extends _t{constructor(e,t,n,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Kn,super(e,t,n,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dc extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new na(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new tn(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:fn});s.uniforms.tEquirect.value=t;const o=new et(r,s),a=t.minFilter;return t.minFilter===Jt&&(t.minFilter=Bt),new Lc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const fo=new B,Eu=new B,Tu=new Ge;class Tn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=fo.subVectors(n,t).cross(Eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tu.getNormalMatrix(e),r=this.coplanarPoint(fo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new ii,Er=new B;class Us{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,s=new Tn,o=new Tn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],M=r[13],y=r[14],x=r[15];if(n[0].setComponents(l-s,f-u,m-p,x-d).normalize(),n[1].setComponents(l+s,f+u,m+p,x+d).normalize(),n[2].setComponents(l+o,f+c,m+g,x+M).normalize(),n[3].setComponents(l-o,f-c,m-g,x-M).normalize(),n[4].setComponents(l-a,f-h,m-_,x-y).normalize(),t===Qt)n[5].setComponents(l+a,f+h,m+_,x+y).normalize();else if(t===Qi)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Er.x=r.normal.x>0?e.max.x:e.min.x,Er.y=r.normal.y>0?e.max.y:e.min.y,Er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function wu(i){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,u){const c=l.array,h=l.updateRanges;if(i.bindBuffer(u,a),h.length===0)i.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class mn extends ct{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const M=d*f-o;for(let y=0;y<u;y++){const x=y*h-s;g.push(x,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const y=M+u*d,x=M+u*(d+1),T=M+1+u*(d+1),E=M+1+u*d;p.push(y,x,E),p.push(x,T,E)}this.setIndex(p),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
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
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Du=`#ifdef USE_AOMAP
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
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
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
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Hu=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,Zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ju=`vec3 transformedNormal = objectNormal;
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
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",rh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sh=`#ifdef USE_ENVMAP
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
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ph=`#ifdef USE_GRADIENTMAP
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
}`,mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
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
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eh=`PhysicalMaterial material;
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
#endif`,Th=`struct PhysicalMaterial {
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
}`,wh=`
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
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ih=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fh=`#if defined( USE_POINTS_UV )
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
#endif`,Oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gh=`#ifdef USE_MORPHTARGETS
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
#endif`,Vh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kh=`#ifdef USE_NORMALMAP
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
#endif`,$h=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ff=`float getShadowMask() {
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
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`#include <common>
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
}`,Uf=`#if DEPTH_PACKING == 3200
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
}`,Nf=`#define DISTANCE
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
}`,Ff=`#define DISTANCE
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`uniform float scale;
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
}`,kf=`uniform vec3 diffuse;
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
}`,Hf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Vf=`#define LAMBERT
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
}`,Wf=`#define LAMBERT
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
}`,Xf=`#define MATCAP
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
}`,qf=`#define MATCAP
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
}`,Yf=`#define NORMAL
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
}`,jf=`#define NORMAL
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
}`,Kf=`#define PHONG
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
}`,$f=`#define PHONG
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
}`,Zf=`#define STANDARD
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
}`,Jf=`#define STANDARD
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
}`,Qf=`#define TOON
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
}`,ed=`#define TOON
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
}`,td=`uniform float size;
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
}`,nd=`uniform vec3 diffuse;
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
}`,id=`#include <common>
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
}`,rd=`uniform vec3 color;
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
}`,sd=`uniform float rotation;
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
}`,od=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Au,alphahash_pars_fragment:Ru,alphamap_fragment:Cu,alphamap_pars_fragment:Pu,alphatest_fragment:Iu,alphatest_pars_fragment:Lu,aomap_fragment:Du,aomap_pars_fragment:Uu,batching_pars_vertex:Nu,batching_vertex:Fu,begin_vertex:Ou,beginnormal_vertex:Bu,bsdfs:zu,iridescence_fragment:ku,bumpmap_pars_fragment:Hu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:qu,color_pars_fragment:Yu,color_pars_vertex:ju,color_vertex:Ku,common:$u,cube_uv_reflection_fragment:Zu,defaultnormal_vertex:Ju,displacementmap_pars_vertex:Qu,displacementmap_vertex:eh,emissivemap_fragment:th,emissivemap_pars_fragment:nh,colorspace_fragment:ih,colorspace_pars_fragment:rh,envmap_fragment:sh,envmap_common_pars_fragment:oh,envmap_pars_fragment:ah,envmap_pars_vertex:lh,envmap_physical_pars_fragment:vh,envmap_vertex:ch,fog_vertex:uh,fog_pars_vertex:hh,fog_fragment:fh,fog_pars_fragment:dh,gradientmap_pars_fragment:ph,lightmap_pars_fragment:mh,lights_lambert_fragment:gh,lights_lambert_pars_fragment:_h,lights_pars_begin:xh,lights_toon_fragment:Mh,lights_toon_pars_fragment:yh,lights_phong_fragment:Sh,lights_phong_pars_fragment:bh,lights_physical_fragment:Eh,lights_physical_pars_fragment:Th,lights_fragment_begin:wh,lights_fragment_maps:Ah,lights_fragment_end:Rh,logdepthbuf_fragment:Ch,logdepthbuf_pars_fragment:Ph,logdepthbuf_pars_vertex:Ih,logdepthbuf_vertex:Lh,map_fragment:Dh,map_pars_fragment:Uh,map_particle_fragment:Nh,map_particle_pars_fragment:Fh,metalnessmap_fragment:Oh,metalnessmap_pars_fragment:Bh,morphinstance_vertex:zh,morphcolor_vertex:kh,morphnormal_vertex:Hh,morphtarget_pars_vertex:Gh,morphtarget_vertex:Vh,normal_fragment_begin:Wh,normal_fragment_maps:Xh,normal_pars_fragment:qh,normal_pars_vertex:Yh,normal_vertex:jh,normalmap_pars_fragment:Kh,clearcoat_normal_fragment_begin:$h,clearcoat_normal_fragment_maps:Zh,clearcoat_pars_fragment:Jh,iridescence_pars_fragment:Qh,opaque_fragment:ef,packing:tf,premultiplied_alpha_fragment:nf,project_vertex:rf,dithering_fragment:sf,dithering_pars_fragment:of,roughnessmap_fragment:af,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:uf,shadowmap_vertex:hf,shadowmask_pars_fragment:ff,skinbase_vertex:df,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:_f,specularmap_pars_fragment:xf,tonemapping_fragment:vf,tonemapping_pars_fragment:Mf,transmission_fragment:yf,transmission_pars_fragment:Sf,uv_pars_fragment:bf,uv_pars_vertex:Ef,uv_vertex:Tf,worldpos_vertex:wf,background_vert:Af,background_frag:Rf,backgroundCube_vert:Cf,backgroundCube_frag:Pf,cube_vert:If,cube_frag:Lf,depth_vert:Df,depth_frag:Uf,distanceRGBA_vert:Nf,distanceRGBA_frag:Ff,equirect_vert:Of,equirect_frag:Bf,linedashed_vert:zf,linedashed_frag:kf,meshbasic_vert:Hf,meshbasic_frag:Gf,meshlambert_vert:Vf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:jf,meshphong_vert:Kf,meshphong_frag:$f,meshphysical_vert:Zf,meshphysical_frag:Jf,meshtoon_vert:Qf,meshtoon_frag:ed,points_vert:td,points_frag:nd,shadow_vert:id,shadow_frag:rd,sprite_vert:sd,sprite_frag:od},ge={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Xt={basic:{uniforms:St([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:St([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:St([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:St([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:St([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:St([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:St([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:St([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:St([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:St([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:St([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:St([ge.common,ge.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:St([ge.lights,ge.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Xt.physical={uniforms:St([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Tr={r:0,b:0,g:0},Bn=new Pt,ad=new Ke;function ld(i,e,t,n,r,s,o){const a=new Ne(0);let l=s===!0?0:1,u,c,h=null,f=0,p=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1;const x=g(M);x===null?d(a,l):x&&x.isColor&&(d(x,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===tr)?(c===void 0&&(c=new et(new tn(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Ai(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Bn.copy(y.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ad.makeRotationFromEuler(Bn)),c.material.toneMapped=$e.getTransfer(x.colorSpace)!==nt,(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new et(new mn(2,2),new Ut({name:"BackgroundMaterial",uniforms:Ai(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=$e.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function d(M,y){M.getRGB(Tr,Pc(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:m}}function cd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(S,L,D,F,U){let j=!1;const H=h(F,D,L);s!==H&&(s=H,u(s.object)),j=p(S,F,D,U),j&&g(S,F,D,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(S,L,D,F),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function c(S){return i.deleteVertexArray(S)}function h(S,L,D){const F=D.wireframe===!0;let U=n[S.id];U===void 0&&(U={},n[S.id]=U);let j=U[L.id];j===void 0&&(j={},U[L.id]=j);let H=j[F];return H===void 0&&(H=f(l()),j[F]=H),H}function f(S){const L=[],D=[],F=[];for(let U=0;U<t;U++)L[U]=0,D[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,L,D,F){const U=s.attributes,j=L.attributes;let H=0;const q=D.getAttributes();for(const Y in q)if(q[Y].location>=0){const he=U[Y];let oe=j[Y];if(oe===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),he===void 0||he.attribute!==oe||oe&&he.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(S,L,D,F){const U={},j=L.attributes;let H=0;const q=D.getAttributes();for(const Y in q)if(q[Y].location>=0){let he=j[Y];he===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));const oe={};oe.attribute=he,he&&he.data&&(oe.data=he.data),U[Y]=oe,H++}s.attributes=U,s.attributesNum=H,s.index=F}function _(){const S=s.newAttributes;for(let L=0,D=S.length;L<D;L++)S[L]=0}function m(S){d(S,0)}function d(S,L){const D=s.newAttributes,F=s.enabledAttributes,U=s.attributeDivisors;D[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),U[S]!==L&&(i.vertexAttribDivisor(S,L),U[S]=L)}function M(){const S=s.newAttributes,L=s.enabledAttributes;for(let D=0,F=L.length;D<F;D++)L[D]!==S[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function y(S,L,D,F,U,j,H){H===!0?i.vertexAttribIPointer(S,L,D,U,j):i.vertexAttribPointer(S,L,D,F,U,j)}function x(S,L,D,F){_();const U=F.attributes,j=D.getAttributes(),H=L.defaultAttributeValues;for(const q in j){const Y=j[q];if(Y.location>=0){let re=U[q];if(re===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const he=re.normalized,oe=re.itemSize,w=e.get(re);if(w===void 0)continue;const N=w.buffer,I=w.type,O=w.bytesPerElement,X=I===i.INT||I===i.UNSIGNED_INT||re.gpuType===ws;if(re.isInterleavedBufferAttribute){const te=re.data,Z=te.stride,ne=re.offset;if(te.isInstancedInterleavedBuffer){for(let se=0;se<Y.locationSize;se++)d(Y.location+se,te.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<Y.locationSize;se++)m(Y.location+se);i.bindBuffer(i.ARRAY_BUFFER,N);for(let se=0;se<Y.locationSize;se++)y(Y.location+se,oe/Y.locationSize,I,he,Z*O,(ne+oe/Y.locationSize*se)*O,X)}else{if(re.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)d(Y.location+te,re.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let te=0;te<Y.locationSize;te++)m(Y.location+te);i.bindBuffer(i.ARRAY_BUFFER,N);for(let te=0;te<Y.locationSize;te++)y(Y.location+te,oe/Y.locationSize,I,he,oe*O,oe/Y.locationSize*te*O,X)}}else if(H!==void 0){const he=H[q];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(Y.location,he);break;case 3:i.vertexAttrib3fv(Y.location,he);break;case 4:i.vertexAttrib4fv(Y.location,he);break;default:i.vertexAttrib1fv(Y.location,he)}}}}M()}function T(){C();for(const S in n){const L=n[S];for(const D in L){const F=L[D];for(const U in F)c(F[U].object),delete F[U];delete L[D]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const D in L){const F=L[D];for(const U in F)c(F[U].object),delete F[U];delete L[D]}delete n[S.id]}function R(S){for(const L in n){const D=n[L];if(D[S.id]===void 0)continue;const F=D[S.id];for(const U in F)c(F[U].object),delete F[U];delete D[S.id]}}function C(){v(),o=!0,s!==r&&(s=r,u(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function ud(i,e,t){let n;function r(u){n=u}function s(u,c){i.drawArrays(n,u,c),t.update(c,n,1)}function o(u,c,h){h!==0&&(i.drawArraysInstanced(n,u,c,h),t.update(c,n,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];t.update(p,n,1)}function l(u,c,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_]*f[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==zt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==qt&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function fd(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Tn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const M=s?0:n,y=M*4;let x=d.clippingState||null;l.value=x,x=c(g,f,y,p);for(let T=0;T!==y;++T)x[T]=t[T];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function dd(i){let e=new WeakMap;function t(o,a){return a===Wr?o.mapping=Kn:a===Xr&&(o.mapping=$n),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wr||a===Xr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Dc(l.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ia extends ta{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,ka=[.125,.215,.35,.446,.526,.582],Gn=20,po=new ia,Ha=new Ne;let mo=null,go=0,_o=0,xo=!1;const Hn=(1+Math.sqrt(5))/2,_i=1/Hn,Ga=[new B(-Hn,_i,0),new B(Hn,_i,0),new B(-_i,0,Hn),new B(_i,0,Hn),new B(0,Hn,-_i),new B(0,Hn,_i),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Ms{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mo,go,_o),this._renderer.xr.enabled=xo,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Ri,format:zt,colorSpace:ti,depthBuffer:!1},r=Va(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pd(s)),this._blurMaterial=md(s,e,t)}return r}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,n,r){const a=new At(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Ha),c.toneMapping=dn,c.autoClear=!1;const p=new Qn({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),g=new et(new tn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ha),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const y=this._cubeSize;wr(r,M*y,d>2?y:0,y,y),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Kn||e.mapping===$n;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ga[(r-s-1)%Ga.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new et(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Gn-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Gn;m>Gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const d=[];let M=0;for(let R=0;R<Gn;++R){const C=R/_,v=Math.exp(-C*C/2);d.push(v),R===0?M+=v:R<m&&(M+=2*v)}for(let R=0;R<d.length;R++)d[R]=d[R]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const x=this._sizeLods[r],T=3*x*(r>y-Si?r-y+Si:0),E=4*(this._cubeSize-x);wr(t,T,E,3*x,2*x),l.setRenderTarget(t),l.render(h,po)}}function pd(i){const e=[],t=[],n=[];let r=i;const s=i-Si+1+ka.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Si?l=ka[o-i+Si-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let E=0;E<p;E++){const R=E%3*2/3-1,C=E>2?0:-1,v=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];M.set(v,_*g*E),y.set(f,m*g*E);const S=[E,E,E,E,E,E];x.set(S,d*g*E)}const T=new ct;T.setAttribute("position",new yt(M,_)),T.setAttribute("uv",new yt(y,m)),T.setAttribute("faceIndex",new yt(x,d)),e.push(T),r>Si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Va(i,e,t){const n=new Cn(i,e,t);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function md(i,e,t){const n=new Float32Array(Gn),r=new B(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ra(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Wa(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Xa(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ra(){return`

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
	`}function gd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Wr||l===Xr,c=l===Kn||l===$n;if(u||c){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ms(i)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Ms(i)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _d(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function xd(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let y=0,x=M.length;y<x;y+=3){const T=M[y+0],E=M[y+1],R=M[y+2];f.push(T,E,E,R,R,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const T=y+0,E=y+1,R=y+2;f.push(T,E,E,R,R,T)}}else return;const m=new(Ec(f)?ea:Qo)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function vd(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function u(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*o,g),t.update(p,n,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*_[M];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Md(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function yd(i,e,t){const n=new WeakMap,r=new it;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*E*4*h),C=new $o(R,T,E,h);C.type=qt,C.needsUpdate=!0;const v=x*4;for(let L=0;L<h;L++){const D=d[L],F=M[L],U=y[L],j=T*E*4*L;for(let H=0;H<D.count;H++){const q=H*v;g===!0&&(r.fromBufferAttribute(D,H),R[j+q+0]=r.x,R[j+q+1]=r.y,R[j+q+2]=r.z,R[j+q+3]=0),_===!0&&(r.fromBufferAttribute(F,H),R[j+q+4]=r.x,R[j+q+5]=r.y,R[j+q+6]=r.z,R[j+q+7]=0),m===!0&&(r.fromBufferAttribute(U,H),R[j+q+8]=r.x,R[j+q+9]=r.y,R[j+q+10]=r.z,R[j+q+11]=U.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Ve(T,E)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Sd(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class sa extends _t{constructor(e,t,n,r,s,o,a,l,u,c=qn){if(c!==qn&&c!==Jn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===qn&&(n=Rn),n===void 0&&c===Jn&&(n=Zn),super(null,r,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nc=new _t,qa=new sa(1,1),Fc=new $o,Oc=new Rc,Bc=new na,Ya=[],ja=[],Ka=new Float32Array(16),$a=new Float32Array(9),Za=new Float32Array(4);function Ci(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ya[r];if(s===void 0&&(s=new Float32Array(r),Ya[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ns(i,e){let t=ja[e];t===void 0&&(t=new Int32Array(e),ja[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ed(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function Td(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function Ad(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Za.set(n),i.uniformMatrix2fv(this.addr,!1,Za),ft(t,n)}}function Rd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;$a.set(n),i.uniformMatrix3fv(this.addr,!1,$a),ft(t,n)}}function Cd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Ka.set(n),i.uniformMatrix4fv(this.addr,!1,Ka),ft(t,n)}}function Pd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Id(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function Ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function Ud(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function Fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function Bd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(qa.compareFunction=jo,s=qa):s=Nc,t.setTexture2D(e||s,r)}function zd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Oc,r)}function kd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bc,r)}function Hd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fc,r)}function Gd(i){switch(i){case 5126:return bd;case 35664:return Ed;case 35665:return Td;case 35666:return wd;case 35674:return Ad;case 35675:return Rd;case 35676:return Cd;case 5124:case 35670:return Pd;case 35667:case 35671:return Id;case 35668:case 35672:return Ld;case 35669:case 35673:return Dd;case 5125:return Ud;case 36294:return Nd;case 36295:return Fd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return zd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Hd}}function Vd(i,e){i.uniform1fv(this.addr,e)}function Wd(i,e){const t=Ci(e,this.size,2);i.uniform2fv(this.addr,t)}function Xd(i,e){const t=Ci(e,this.size,3);i.uniform3fv(this.addr,t)}function qd(i,e){const t=Ci(e,this.size,4);i.uniform4fv(this.addr,t)}function Yd(i,e){const t=Ci(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jd(i,e){const t=Ci(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kd(i,e){const t=Ci(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $d(i,e){i.uniform1iv(this.addr,e)}function Zd(i,e){i.uniform2iv(this.addr,e)}function Jd(i,e){i.uniform3iv(this.addr,e)}function Qd(i,e){i.uniform4iv(this.addr,e)}function ep(i,e){i.uniform1uiv(this.addr,e)}function tp(i,e){i.uniform2uiv(this.addr,e)}function np(i,e){i.uniform3uiv(this.addr,e)}function ip(i,e){i.uniform4uiv(this.addr,e)}function rp(i,e,t){const n=this.cache,r=e.length,s=Ns(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Nc,s[o])}function sp(i,e,t){const n=this.cache,r=e.length,s=Ns(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Oc,s[o])}function op(i,e,t){const n=this.cache,r=e.length,s=Ns(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Bc,s[o])}function ap(i,e,t){const n=this.cache,r=e.length,s=Ns(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fc,s[o])}function lp(i){switch(i){case 5126:return Vd;case 35664:return Wd;case 35665:return Xd;case 35666:return qd;case 35674:return Yd;case 35675:return jd;case 35676:return Kd;case 5124:case 35670:return $d;case 35667:case 35671:return Zd;case 35668:case 35672:return Jd;case 35669:case 35673:return Qd;case 5125:return ep;case 36294:return tp;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return ap}}class cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gd(t.type)}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lp(t.type)}}class hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function Ja(i,e){i.seq.push(e),i.map[e.id]=e}function fp(i,e,t){const n=i.name,r=n.length;for(vo.lastIndex=0;;){const s=vo.exec(n),o=vo.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ja(t,u===void 0?new cp(a,i,e):new up(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new hp(a),Ja(t,h)),t=h}}}class Ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);fp(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Qa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const dp=37297;let pp=0;function mp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const el=new Ge;function gp(i){$e._getMatrix(el,$e.workingColorSpace,i);const e=`mat3( ${el.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case nr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+mp(i.getShaderSource(e),o)}else return r}function _p(i,e){const t=gp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xp(i,e){let t;switch(e){case ac:t="Linear";break;case lc:t="Reinhard";break;case cc:t="Cineon";break;case Oo:t="ACESFilmic";break;case hc:t="AgX";break;case fc:t="Neutral";break;case uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new B;function vp(){$e.getLuminanceCoefficients(Ar);const i=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function yp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xi(i){return i!==""}function nl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function il(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(i){return i.replace(bp,Tp)}const Ep=new Map;function Tp(i,e){let t=qe[e];if(t===void 0){const n=Ep.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lo(t)}const wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(i){return i.replace(wp,Ap)}function Ap(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sl(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Es?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function Cp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Kn:case $n:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function Ip(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ts:e="ENVMAP_BLENDING_MULTIPLY";break;case sc:e="ENVMAP_BLENDING_MIX";break;case oc:e="ENVMAP_BLENDING_ADD";break}return e}function Lp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Rp(t),u=Cp(t),c=Pp(t),h=Ip(t),f=Lp(t),p=Mp(t),g=yp(s),_=r.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),d.length>0&&(d+=`
`)):(m=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),d=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?qe.tonemapping_pars_fragment:"",t.toneMapping!==dn?xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,_p("linearToOutputTexel",t.outputColorSpace),vp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=Lo(o),o=nl(o,t),o=il(o,t),a=Lo(a),a=nl(a,t),a=il(a,t),o=rl(o),a=rl(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+m+o,x=M+d+a,T=Qa(r,r.VERTEX_SHADER,y),E=Qa(r,r.FRAGMENT_SHADER,x);r.attachShader(_,T),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(L){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(T).trim(),U=r.getShaderInfoLog(E).trim();let j=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,E);else{const q=tl(r,T,"vertex"),Y=tl(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+q+`
`+Y)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||U==="")&&(H=!1);H&&(L.diagnostics={runnable:j,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:U,prefix:d}})}r.deleteShader(T),r.deleteShader(E),C=new Ur(r,_),v=Sp(r,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,dp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let Up=0;class Np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fp(e),t.set(e,n)),n}}class Fp{constructor(e){this.id=Up++,this.code=e,this.usedTimes=0}}function Op(i,e,t,n,r,s,o){const a=new Jo,l=new Np,u=new Set,c=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return u.add(v),v===0?"uv":`uv${v}`}function m(v,S,L,D,F){const U=D.fog,j=F.geometry,H=v.isMeshStandardMaterial?D.environment:null,q=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),Y=q&&q.mapping===tr?q.image.height:null,re=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,oe=he!==void 0?he.length:0;let w=0;j.morphAttributes.position!==void 0&&(w=1),j.morphAttributes.normal!==void 0&&(w=2),j.morphAttributes.color!==void 0&&(w=3);let N,I,O,X;if(re){const tt=Xt[re];N=tt.vertexShader,I=tt.fragmentShader}else N=v.vertexShader,I=v.fragmentShader,l.update(v),O=l.getVertexShaderID(v),X=l.getFragmentShaderID(v);const te=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),ne=F.isInstancedMesh===!0,se=F.isBatchedMesh===!0,Re=!!v.map,Le=!!v.matcap,Ae=!!q,z=!!v.aoMap,ke=!!v.lightMap,Ee=!!v.bumpMap,Te=!!v.normalMap,_e=!!v.displacementMap,De=!!v.emissiveMap,be=!!v.metalnessMap,P=!!v.roughnessMap,b=v.anisotropy>0,K=v.clearcoat>0,k=v.dispersion>0,$=v.iridescence>0,J=v.sheen>0,de=v.transmission>0,ce=b&&!!v.anisotropyMap,ue=K&&!!v.clearcoatMap,Be=K&&!!v.clearcoatNormalMap,le=K&&!!v.clearcoatRoughnessMap,pe=$&&!!v.iridescenceMap,we=$&&!!v.iridescenceThicknessMap,Fe=J&&!!v.sheenColorMap,ve=J&&!!v.sheenRoughnessMap,He=!!v.specularMap,Oe=!!v.specularColorMap,je=!!v.specularIntensityMap,G=de&&!!v.transmissionMap,xe=de&&!!v.thicknessMap,ie=!!v.gradientMap,ae=!!v.alphaMap,Se=v.alphaTest>0,Me=!!v.alphaHash,We=!!v.extensions;let at=dn;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(at=i.toneMapping);const xt={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:N,fragmentShader:I,defines:v.defines,customVertexShaderID:O,customFragmentShaderID:X,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:se,batchingColor:se&&F._colorsTexture!==null,instancing:ne,instancingColor:ne&&F.instanceColor!==null,instancingMorph:ne&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ti,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:Le,envMap:Ae,envMapMode:Ae&&q.mapping,envMapCubeUVHeight:Y,aoMap:z,lightMap:ke,bumpMap:Ee,normalMap:Te,displacementMap:f&&_e,emissiveMap:De,normalMapObjectSpace:Te&&v.normalMapType===gc,normalMapTangentSpace:Te&&v.normalMapType===Ds,metalnessMap:be,roughnessMap:P,anisotropy:b,anisotropyMap:ce,clearcoat:K,clearcoatMap:ue,clearcoatNormalMap:Be,clearcoatRoughnessMap:le,dispersion:k,iridescence:$,iridescenceMap:pe,iridescenceThicknessMap:we,sheen:J,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:He,specularColorMap:Oe,specularIntensityMap:je,transmission:de,transmissionMap:G,thicknessMap:xe,gradientMap:ie,opaque:v.transparent===!1&&v.blending===Xn&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:Se,alphaHash:Me,combine:v.combine,mapUv:Re&&_(v.map.channel),aoMapUv:z&&_(v.aoMap.channel),lightMapUv:ke&&_(v.lightMap.channel),bumpMapUv:Ee&&_(v.bumpMap.channel),normalMapUv:Te&&_(v.normalMap.channel),displacementMapUv:_e&&_(v.displacementMap.channel),emissiveMapUv:De&&_(v.emissiveMap.channel),metalnessMapUv:be&&_(v.metalnessMap.channel),roughnessMapUv:P&&_(v.roughnessMap.channel),anisotropyMapUv:ce&&_(v.anisotropyMap.channel),clearcoatMapUv:ue&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(v.sheenRoughnessMap.channel),specularMapUv:He&&_(v.specularMap.channel),specularColorMapUv:Oe&&_(v.specularColorMap.channel),specularIntensityMapUv:je&&_(v.specularIntensityMap.channel),transmissionMapUv:G&&_(v.transmissionMap.channel),thicknessMapUv:xe&&_(v.thicknessMap.channel),alphaMapUv:ae&&_(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Te||b),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(Re||ae),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Z,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:w,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&$e.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&$e.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rt,flipSided:v.side===gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:We&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&v.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return xt.vertexUv1s=u.has(1),xt.vertexUv2s=u.has(2),xt.vertexUv3s=u.has(3),u.clear(),xt}function d(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)S.push(L),S.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(M(S,v),y(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const S=g[v.type];let L;if(S){const D=Xt[S];L=Ic.clone(D.uniforms)}else L=v.uniforms;return L}function T(v,S){let L;for(let D=0,F=c.length;D<F;D++){const U=c[D];if(U.cacheKey===S){L=U,++L.usedTimes;break}}return L===void 0&&(L=new Dp(i,S,v,s),c.push(L)),L}function E(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function R(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:C}}function Bp(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ol(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function al(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(h,f){t.length>1&&t.sort(h||zp),n.length>1&&n.sort(f||ol),r.length>1&&r.sort(f||ol)}function c(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function kp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new al,i.set(n,[o])):r>=s.length?(o=new al,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ne};break;case"SpotLight":t={position:new B,direction:new B,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Gp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vp=0;function Wp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xp(i){const e=new Hp,t=Gp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new B);const r=new B,s=new Ke,o=new Ke;function a(u){let c=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,M=0,y=0,x=0,T=0,E=0,R=0;u.sort(Wp);for(let v=0,S=u.length;v<S;v++){const L=u[v],D=L.color,F=L.intensity,U=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=D.r*F,h+=D.g*F,f+=D.b*F;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],F);R++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,Y=t.get(L);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=H,p++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(D).multiplyScalar(F),H.distance=U,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const q=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,q.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[_]=q.matrix,L.castShadow){const Y=t.get(L);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=j,x++}_++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(D).multiplyScalar(F),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const q=L.shadow,Y=t.get(L);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(F),H.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=R,n.version=Vp++)}function l(u,c){let h=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,M=u.length;d<M;d++){const y=u[d];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ll(i){const e=new Xp(i),t=[],n=[];function r(c){u.camera=c,t.length=0,n.length=0}function s(c){t.push(c)}function o(c){n.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function qp(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ll(i),e.set(r,[a])):s>=o.length?(a=new ll(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class zc extends In{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kc extends In{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jp=`uniform sampler2D shadow_pass;
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
}`;function Kp(i,e,t){let n=new Us;const r=new Ve,s=new Ve,o=new it,a=new zc({depthPacking:mc}),l=new kc,u={},c=t.maxTextureSize,h={[gn]:gt,[gt]:gn,[Rt]:Rt},f=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Yp,fragmentShader:jp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ct;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let d=this.type;this.render=function(E,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const v=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(fn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=d!==Zt&&this.type===Zt,U=d===Zt&&this.type!==Zt;for(let j=0,H=E.length;j<H;j++){const q=E[j],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const re=Y.getFrameExtents();if(r.multiply(re),s.copy(Y.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/re.x),r.x=s.x*re.x,Y.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/re.y),r.y=s.y*re.y,Y.mapSize.y=s.y)),Y.map===null||F===!0||U===!0){const oe=this.type!==Zt?{minFilter:Ct,magFilter:Ct}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Cn(r.x,r.y,oe),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const he=Y.getViewportCount();for(let oe=0;oe<he;oe++){const w=Y.getViewport(oe);o.set(s.x*w.x,s.y*w.y,s.x*w.z,s.y*w.w),D.viewport(o),Y.updateMatrices(q,oe),n=Y.getFrustum(),x(R,C,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Zt&&M(Y,C),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(v,S,L)};function M(E,R){const C=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cn(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,C,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,C,p,_,null)}function y(E,R,C,v){let S=null;const L=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const D=S.uuid,F=R.uuid;let U=u[D];U===void 0&&(U={},u[D]=U);let j=U[F];j===void 0&&(j=S.clone(),U[F]=j,R.addEventListener("dispose",T)),S=j}if(S.visible=R.visible,S.wireframe=R.wireframe,v===Zt?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=i.properties.get(S);D.light=C}return S}function x(E,R,C,v,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Zt)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const F=e.update(E),U=E.material;if(Array.isArray(U)){const j=F.groups;for(let H=0,q=j.length;H<q;H++){const Y=j[H],re=U[Y.materialIndex];if(re&&re.visible){const he=y(E,re,v,S);E.onBeforeShadow(i,E,R,C,F,he,Y),i.renderBufferDirect(C,null,F,he,E,Y),E.onAfterShadow(i,E,R,C,F,he,Y)}}}else if(U.visible){const j=y(E,U,v,S);E.onBeforeShadow(i,E,R,C,F,j,null),i.renderBufferDirect(C,null,F,j,E,null),E.onAfterShadow(i,E,R,C,F,j,null)}}const D=E.children;for(let F=0,U=D.length;F<U;F++)x(D[F],R,C,v,S)}function T(E){E.target.removeEventListener("dispose",T);for(const C in u){const v=u[C],S=E.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const $p={[Or]:Br,[zr]:Gr,[kr]:Vr,[jn]:Hr,[Br]:Or,[Gr]:zr,[Vr]:kr,[Hr]:jn};function Zp(i,e){function t(){let G=!1;const xe=new it;let ie=null;const ae=new it(0,0,0,0);return{setMask:function(Se){ie!==Se&&!G&&(i.colorMask(Se,Se,Se,Se),ie=Se)},setLocked:function(Se){G=Se},setClear:function(Se,Me,We,at,xt){xt===!0&&(Se*=at,Me*=at,We*=at),xe.set(Se,Me,We,at),ae.equals(xe)===!1&&(i.clearColor(Se,Me,We,at),ae.copy(xe))},reset:function(){G=!1,ie=null,ae.set(-1,0,0,0)}}}function n(){let G=!1,xe=!1,ie=null,ae=null,Se=null;return{setReversed:function(Me){if(xe!==Me){const We=e.get("EXT_clip_control");xe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const at=Se;Se=null,this.setClear(at)}xe=Me},getReversed:function(){return xe},setTest:function(Me){Me?te(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(Me){ie!==Me&&!G&&(i.depthMask(Me),ie=Me)},setFunc:function(Me){if(xe&&(Me=$p[Me]),ae!==Me){switch(Me){case Or:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case jn:i.depthFunc(i.LEQUAL);break;case kr:i.depthFunc(i.EQUAL);break;case Hr:i.depthFunc(i.GEQUAL);break;case Gr:i.depthFunc(i.GREATER);break;case Vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Me}},setLocked:function(Me){G=Me},setClear:function(Me){Se!==Me&&(xe&&(Me=1-Me),i.clearDepth(Me),Se=Me)},reset:function(){G=!1,ie=null,ae=null,Se=null,xe=!1}}}function r(){let G=!1,xe=null,ie=null,ae=null,Se=null,Me=null,We=null,at=null,xt=null;return{setTest:function(tt){G||(tt?te(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(tt){xe!==tt&&!G&&(i.stencilMask(tt),xe=tt)},setFunc:function(tt,kt,rn){(ie!==tt||ae!==kt||Se!==rn)&&(i.stencilFunc(tt,kt,rn),ie=tt,ae=kt,Se=rn)},setOp:function(tt,kt,rn){(Me!==tt||We!==kt||at!==rn)&&(i.stencilOp(tt,kt,rn),Me=tt,We=kt,at=rn)},setLocked:function(tt){G=tt},setClear:function(tt){xt!==tt&&(i.clearStencil(tt),xt=tt)},reset:function(){G=!1,xe=null,ie=null,ae=null,Se=null,Me=null,We=null,at=null,xt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,u=new WeakMap;let c={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,y=null,x=null,T=null,E=null,R=new Ne(0,0,0),C=0,v=!1,S=null,L=null,D=null,F=null,U=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=q>=2);let re=null,he={};const oe=i.getParameter(i.SCISSOR_BOX),w=i.getParameter(i.VIEWPORT),N=new it().fromArray(oe),I=new it().fromArray(w);function O(G,xe,ie,ae){const Se=new Uint8Array(4),Me=i.createTexture();i.bindTexture(G,Me),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<ie;We++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(xe+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return Me}const X={};X[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(jn),Ee(!1),Te(wo),te(i.CULL_FACE),z(fn);function te(G){c[G]!==!0&&(i.enable(G),c[G]=!0)}function Z(G){c[G]!==!1&&(i.disable(G),c[G]=!1)}function ne(G,xe){return h[G]!==xe?(i.bindFramebuffer(G,xe),h[G]=xe,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function se(G,xe){let ie=p,ae=!1;if(G){ie=f.get(xe),ie===void 0&&(ie=[],f.set(xe,ie));const Se=G.textures;if(ie.length!==Se.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,We=Se.length;Me<We;Me++)ie[Me]=i.COLOR_ATTACHMENT0+Me;ie.length=Se.length,ae=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ae=!0);ae&&i.drawBuffers(ie)}function Re(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const Le={[wn]:i.FUNC_ADD,[Gl]:i.FUNC_SUBTRACT,[Vl]:i.FUNC_REVERSE_SUBTRACT};Le[Wl]=i.MIN,Le[Xl]=i.MAX;const Ae={[ql]:i.ZERO,[Yl]:i.ONE,[jl]:i.SRC_COLOR,[Nr]:i.SRC_ALPHA,[ec]:i.SRC_ALPHA_SATURATE,[Jl]:i.DST_COLOR,[$l]:i.DST_ALPHA,[Kl]:i.ONE_MINUS_SRC_COLOR,[Fr]:i.ONE_MINUS_SRC_ALPHA,[Ql]:i.ONE_MINUS_DST_COLOR,[Zl]:i.ONE_MINUS_DST_ALPHA,[tc]:i.CONSTANT_COLOR,[nc]:i.ONE_MINUS_CONSTANT_COLOR,[ic]:i.CONSTANT_ALPHA,[rc]:i.ONE_MINUS_CONSTANT_ALPHA};function z(G,xe,ie,ae,Se,Me,We,at,xt,tt){if(G===fn){_===!0&&(Z(i.BLEND),_=!1);return}if(_===!1&&(te(i.BLEND),_=!0),G!==Hl){if(G!==m||tt!==v){if((d!==wn||x!==wn)&&(i.blendEquation(i.FUNC_ADD),d=wn,x=wn),tt)switch(G){case Xn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFunc(i.ONE,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Xn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,y=null,T=null,E=null,R.set(0,0,0),C=0,m=G,v=tt}return}Se=Se||xe,Me=Me||ie,We=We||ae,(xe!==d||Se!==x)&&(i.blendEquationSeparate(Le[xe],Le[Se]),d=xe,x=Se),(ie!==M||ae!==y||Me!==T||We!==E)&&(i.blendFuncSeparate(Ae[ie],Ae[ae],Ae[Me],Ae[We]),M=ie,y=ae,T=Me,E=We),(at.equals(R)===!1||xt!==C)&&(i.blendColor(at.r,at.g,at.b,xt),R.copy(at),C=xt),m=G,v=!1}function ke(G,xe){G.side===Rt?Z(i.CULL_FACE):te(i.CULL_FACE);let ie=G.side===gt;xe&&(ie=!ie),Ee(ie),G.blending===Xn&&G.transparent===!1?z(fn):z(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const ae=G.stencilWrite;a.setTest(ae),ae&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),De(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(G){S!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),S=G)}function Te(G){G!==Bl?(te(i.CULL_FACE),G!==L&&(G===wo?i.cullFace(i.BACK):G===zl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),L=G}function _e(G){G!==D&&(H&&i.lineWidth(G),D=G)}function De(G,xe,ie){G?(te(i.POLYGON_OFFSET_FILL),(F!==xe||U!==ie)&&(i.polygonOffset(xe,ie),F=xe,U=ie)):Z(i.POLYGON_OFFSET_FILL)}function be(G){G?te(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function P(G){G===void 0&&(G=i.TEXTURE0+j-1),re!==G&&(i.activeTexture(G),re=G)}function b(G,xe,ie){ie===void 0&&(re===null?ie=i.TEXTURE0+j-1:ie=re);let ae=he[ie];ae===void 0&&(ae={type:void 0,texture:void 0},he[ie]=ae),(ae.type!==G||ae.texture!==xe)&&(re!==ie&&(i.activeTexture(ie),re=ie),i.bindTexture(G,xe||X[G]),ae.type=G,ae.texture=xe)}function K(){const G=he[re];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(G){N.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),N.copy(G))}function ve(G){I.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),I.copy(G))}function He(G,xe){let ie=u.get(xe);ie===void 0&&(ie=new WeakMap,u.set(xe,ie));let ae=ie.get(G);ae===void 0&&(ae=i.getUniformBlockIndex(xe,G.name),ie.set(G,ae))}function Oe(G,xe){const ae=u.get(xe).get(G);l.get(xe)!==ae&&(i.uniformBlockBinding(xe,ae,G.__bindingPointIndex),l.set(xe,ae))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},re=null,he={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,y=null,x=null,T=null,E=null,R=new Ne(0,0,0),C=0,v=!1,S=null,L=null,D=null,F=null,U=null,N.set(0,0,i.canvas.width,i.canvas.height),I.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:Z,bindFramebuffer:ne,drawBuffers:se,useProgram:Re,setBlending:z,setMaterial:ke,setFlipSided:Ee,setCullFace:Te,setLineWidth:_e,setPolygonOffset:De,setScissorTest:be,activeTexture:P,bindTexture:b,unbindTexture:K,compressedTexImage2D:k,compressedTexImage3D:$,texImage2D:pe,texImage3D:we,updateUBOMapping:He,uniformBlockBinding:Oe,texStorage2D:Be,texStorage3D:le,texSubImage2D:J,texSubImage3D:de,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:Fe,viewport:ve,reset:je}}function cl(i,e,t,n){const r=Jp(n);switch(t){case Go:return i*e;case Wo:return i*e;case Xo:return i*e*2;case Cs:return i*e/r.components*r.byteLength;case Ps:return i*e/r.components*r.byteLength;case qo:return i*e*2/r.components*r.byteLength;case Is:return i*e*2/r.components*r.byteLength;case Vo:return i*e*3/r.components*r.byteLength;case zt:return i*e*4/r.components*r.byteLength;case Ls:return i*e*4/r.components*r.byteLength;case qi:case Yi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ji:case Ki:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jr:case $r:return Math.max(i,16)*Math.max(e,8)/4;case Yr:case Kr:return Math.max(i,8)*Math.max(e,8)/2;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ts:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ns:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case is:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ss:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case os:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case as:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ls:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case us:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ds:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $i:case ps:case ms:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yo:case gs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _s:case xs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jp(i){switch(i){case en:case zo:return{byteLength:1,components:1};case wi:case ko:case Ri:return{byteLength:2,components:1};case As:case Rs:return{byteLength:2,components:4};case Rn:case ws:case qt:return{byteLength:4,components:1};case Ho:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qp(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ve,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return p?new OffscreenCanvas(P,b):vs("canvas")}function _(P,b,K){let k=1;const $=be(P);if(($.width>K||$.height>K)&&(k=K/Math.max($.width,$.height)),k<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(k*$.width),de=Math.floor(k*$.height);h===void 0&&(h=g(J,de));const ce=b?g(J,de):h;return ce.width=J,ce.height=de,ce.getContext("2d").drawImage(P,0,0,J,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+J+"x"+de+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,b,K,k,$=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=b;if(b===i.RED&&(K===i.FLOAT&&(J=i.R32F),K===i.HALF_FLOAT&&(J=i.R16F),K===i.UNSIGNED_BYTE&&(J=i.R8)),b===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(J=i.R8UI),K===i.UNSIGNED_SHORT&&(J=i.R16UI),K===i.UNSIGNED_INT&&(J=i.R32UI),K===i.BYTE&&(J=i.R8I),K===i.SHORT&&(J=i.R16I),K===i.INT&&(J=i.R32I)),b===i.RG&&(K===i.FLOAT&&(J=i.RG32F),K===i.HALF_FLOAT&&(J=i.RG16F),K===i.UNSIGNED_BYTE&&(J=i.RG8)),b===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(J=i.RG8UI),K===i.UNSIGNED_SHORT&&(J=i.RG16UI),K===i.UNSIGNED_INT&&(J=i.RG32UI),K===i.BYTE&&(J=i.RG8I),K===i.SHORT&&(J=i.RG16I),K===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(J=i.RGB8UI),K===i.UNSIGNED_SHORT&&(J=i.RGB16UI),K===i.UNSIGNED_INT&&(J=i.RGB32UI),K===i.BYTE&&(J=i.RGB8I),K===i.SHORT&&(J=i.RGB16I),K===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),K===i.UNSIGNED_INT&&(J=i.RGBA32UI),K===i.BYTE&&(J=i.RGBA8I),K===i.SHORT&&(J=i.RGBA16I),K===i.INT&&(J=i.RGBA32I)),b===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),b===i.RGBA){const de=$?nr:$e.getTransfer(k);K===i.FLOAT&&(J=i.RGBA32F),K===i.HALF_FLOAT&&(J=i.RGBA16F),K===i.UNSIGNED_BYTE&&(J=de===nt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(P,b){let K;return P?b===null||b===Rn||b===Zn?K=i.DEPTH24_STENCIL8:b===qt?K=i.DEPTH32F_STENCIL8:b===wi&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rn||b===Zn?K=i.DEPTH_COMPONENT24:b===qt?K=i.DEPTH_COMPONENT32F:b===wi&&(K=i.DEPTH_COMPONENT16),K}function T(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function E(P){const b=P.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&c.delete(b)}function R(P){const b=P.target;b.removeEventListener("dispose",R),S(b)}function C(P){const b=n.get(P);if(b.__webglInit===void 0)return;const K=P.source,k=f.get(K);if(k){const $=k[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(P),Object.keys(k).length===0&&f.delete(K)}n.remove(P)}function v(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const K=P.source,k=f.get(K);delete k[b.__cacheKey],o.memory.textures--}function S(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(b.__webglFramebuffer[k]))for(let $=0;$<b.__webglFramebuffer[k].length;$++)i.deleteFramebuffer(b.__webglFramebuffer[k][$]);else i.deleteFramebuffer(b.__webglFramebuffer[k]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[k])}else{if(Array.isArray(b.__webglFramebuffer))for(let k=0;k<b.__webglFramebuffer.length;k++)i.deleteFramebuffer(b.__webglFramebuffer[k]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let k=0;k<b.__webglColorRenderbuffer.length;k++)b.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[k]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=P.textures;for(let k=0,$=K.length;k<$;k++){const J=n.get(K[k]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(K[k])}n.remove(P)}let L=0;function D(){L=0}function F(){const P=L;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function U(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function j(P,b){const K=n.get(P);if(P.isVideoTexture&&_e(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const k=P.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(K,P,b);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+b)}function H(P,b){const K=n.get(P);if(P.version>0&&K.__version!==P.version){I(K,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+b)}function q(P,b){const K=n.get(P);if(P.version>0&&K.__version!==P.version){I(K,P,b);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+b)}function Y(P,b){const K=n.get(P);if(P.version>0&&K.__version!==P.version){O(K,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+b)}const re={[Ti]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},he={[Ct]:i.NEAREST,[dc]:i.NEAREST_MIPMAP_NEAREST,[Vi]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[Jt]:i.LINEAR_MIPMAP_LINEAR},oe={[_c]:i.NEVER,[bc]:i.ALWAYS,[xc]:i.LESS,[jo]:i.LEQUAL,[vc]:i.EQUAL,[Sc]:i.GEQUAL,[Mc]:i.GREATER,[yc]:i.NOTEQUAL};function w(P,b){if(b.type===qt&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bt||b.magFilter===Dr||b.magFilter===Vi||b.magFilter===Jt||b.minFilter===Bt||b.minFilter===Dr||b.minFilter===Vi||b.minFilter===Jt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,re[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,re[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,re[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,he[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,he[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ct||b.minFilter!==Vi&&b.minFilter!==Jt||b.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function N(P,b){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",E));const k=b.source;let $=f.get(k);$===void 0&&($={},f.set(k,$));const J=U(b);if(J!==P.__cacheKey){$[J]===void 0&&($[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),$[J].usedTimes++;const de=$[P.__cacheKey];de!==void 0&&($[P.__cacheKey].usedTimes--,de.usedTimes===0&&v(b)),P.__cacheKey=J,P.__webglTexture=$[J].texture}return K}function I(P,b,K){let k=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(k=i.TEXTURE_3D);const $=N(P,b),J=b.source;t.bindTexture(k,P.__webglTexture,i.TEXTURE0+K);const de=n.get(J);if(J.version!==de.__version||$===!0){t.activeTexture(i.TEXTURE0+K);const ce=$e.getPrimaries($e.workingColorSpace),ue=b.colorSpace===hn?null:$e.getPrimaries(b.colorSpace),Be=b.colorSpace===hn||ce===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let le=_(b.image,!1,r.maxTextureSize);le=De(b,le);const pe=s.convert(b.format,b.colorSpace),we=s.convert(b.type);let Fe=y(b.internalFormat,pe,we,b.colorSpace,b.isVideoTexture);w(k,b);let ve;const He=b.mipmaps,Oe=b.isVideoTexture!==!0,je=de.__version===void 0||$===!0,G=J.dataReady,xe=T(b,le);if(b.isDepthTexture)Fe=x(b.format===Jn,b.type),je&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Fe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,pe,we,null));else if(b.isDataTexture)if(He.length>0){Oe&&je&&t.texStorage2D(i.TEXTURE_2D,xe,Fe,He[0].width,He[0].height);for(let ie=0,ae=He.length;ie<ae;ie++)ve=He[ie],Oe?G&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ve.width,ve.height,pe,we,ve.data):t.texImage2D(i.TEXTURE_2D,ie,Fe,ve.width,ve.height,0,pe,we,ve.data);b.generateMipmaps=!1}else Oe?(je&&t.texStorage2D(i.TEXTURE_2D,xe,Fe,le.width,le.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,pe,we,le.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,pe,we,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Oe&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Fe,He[0].width,He[0].height,le.depth);for(let ie=0,ae=He.length;ie<ae;ie++)if(ve=He[ie],b.format!==zt)if(pe!==null)if(Oe){if(G)if(b.layerUpdates.size>0){const Se=cl(ve.width,ve.height,b.format,b.type);for(const Me of b.layerUpdates){const We=ve.data.subarray(Me*Se/ve.data.BYTES_PER_ELEMENT,(Me+1)*Se/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Me,ve.width,ve.height,1,pe,We)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,le.depth,pe,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Fe,ve.width,ve.height,le.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,le.depth,pe,we,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Fe,ve.width,ve.height,le.depth,0,pe,we,ve.data)}else{Oe&&je&&t.texStorage2D(i.TEXTURE_2D,xe,Fe,He[0].width,He[0].height);for(let ie=0,ae=He.length;ie<ae;ie++)ve=He[ie],b.format!==zt?pe!==null?Oe?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,ve.width,ve.height,pe,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Fe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?G&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ve.width,ve.height,pe,we,ve.data):t.texImage2D(i.TEXTURE_2D,ie,Fe,ve.width,ve.height,0,pe,we,ve.data)}else if(b.isDataArrayTexture)if(Oe){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Fe,le.width,le.height,le.depth),G)if(b.layerUpdates.size>0){const ie=cl(le.width,le.height,b.format,b.type);for(const ae of b.layerUpdates){const Se=le.data.subarray(ae*ie/le.data.BYTES_PER_ELEMENT,(ae+1)*ie/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,pe,we,Se)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,pe,we,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,le.width,le.height,le.depth,0,pe,we,le.data);else if(b.isData3DTexture)Oe?(je&&t.texStorage3D(i.TEXTURE_3D,xe,Fe,le.width,le.height,le.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,pe,we,le.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,le.width,le.height,le.depth,0,pe,we,le.data);else if(b.isFramebufferTexture){if(je)if(Oe)t.texStorage2D(i.TEXTURE_2D,xe,Fe,le.width,le.height);else{let ie=le.width,ae=le.height;for(let Se=0;Se<xe;Se++)t.texImage2D(i.TEXTURE_2D,Se,Fe,ie,ae,0,pe,we,null),ie>>=1,ae>>=1}}else if(He.length>0){if(Oe&&je){const ie=be(He[0]);t.texStorage2D(i.TEXTURE_2D,xe,Fe,ie.width,ie.height)}for(let ie=0,ae=He.length;ie<ae;ie++)ve=He[ie],Oe?G&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,pe,we,ve):t.texImage2D(i.TEXTURE_2D,ie,Fe,pe,we,ve);b.generateMipmaps=!1}else if(Oe){if(je){const ie=be(le);t.texStorage2D(i.TEXTURE_2D,xe,Fe,ie.width,ie.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,we,le)}else t.texImage2D(i.TEXTURE_2D,0,Fe,pe,we,le);m(b)&&d(k),de.__version=J.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function O(P,b,K){if(b.image.length!==6)return;const k=N(P,b),$=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+K);const J=n.get($);if($.version!==J.__version||k===!0){t.activeTexture(i.TEXTURE0+K);const de=$e.getPrimaries($e.workingColorSpace),ce=b.colorSpace===hn?null:$e.getPrimaries(b.colorSpace),ue=b.colorSpace===hn||de===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Be=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let ae=0;ae<6;ae++)!Be&&!le?pe[ae]=_(b.image[ae],!0,r.maxCubemapSize):pe[ae]=le?b.image[ae].image:b.image[ae],pe[ae]=De(b,pe[ae]);const we=pe[0],Fe=s.convert(b.format,b.colorSpace),ve=s.convert(b.type),He=y(b.internalFormat,Fe,ve,b.colorSpace),Oe=b.isVideoTexture!==!0,je=J.__version===void 0||k===!0,G=$.dataReady;let xe=T(b,we);w(i.TEXTURE_CUBE_MAP,b);let ie;if(Be){Oe&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,He,we.width,we.height);for(let ae=0;ae<6;ae++){ie=pe[ae].mipmaps;for(let Se=0;Se<ie.length;Se++){const Me=ie[Se];b.format!==zt?Fe!==null?Oe?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Me.width,Me.height,Fe,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Me.width,Me.height,Fe,ve,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,He,Me.width,Me.height,0,Fe,ve,Me.data)}}}else{if(ie=b.mipmaps,Oe&&je){ie.length>0&&xe++;const ae=be(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,He,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){Oe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,pe[ae].width,pe[ae].height,Fe,ve,pe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,pe[ae].width,pe[ae].height,0,Fe,ve,pe[ae].data);for(let Se=0;Se<ie.length;Se++){const We=ie[Se].image[ae].image;Oe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,We.width,We.height,Fe,ve,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,He,We.width,We.height,0,Fe,ve,We.data)}}else{Oe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,ve,pe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,Fe,ve,pe[ae]);for(let Se=0;Se<ie.length;Se++){const Me=ie[Se];Oe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,Fe,ve,Me.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,He,Fe,ve,Me.image[ae])}}}m(b)&&d(i.TEXTURE_CUBE_MAP),J.__version=$.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function X(P,b,K,k,$,J){const de=s.convert(K.format,K.colorSpace),ce=s.convert(K.type),ue=y(K.internalFormat,de,ce,K.colorSpace),Be=n.get(b),le=n.get(K);if(le.__renderTarget=b,!Be.__hasExternalTextures){const pe=Math.max(1,b.width>>J),we=Math.max(1,b.height>>J);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,J,ue,pe,we,b.depth,0,de,ce,null):t.texImage2D($,J,ue,pe,we,0,de,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Te(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,$,le.__webglTexture,0,Ee(b)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,$,le.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(P,b,K){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const k=b.depthTexture,$=k&&k.isDepthTexture?k.type:null,J=x(b.stencilBuffer,$),de=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Ee(b);Te(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,J,b.width,b.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,P)}else{const k=b.textures;for(let $=0;$<k.length;$++){const J=k[$],de=s.convert(J.format,J.colorSpace),ce=s.convert(J.type),ue=y(J.internalFormat,de,ce,J.colorSpace),Be=Ee(b);K&&Te(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,ue,b.width,b.height):Te(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=n.get(b.depthTexture);k.__renderTarget=b,(!k.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const $=k.__webglTexture,J=Ee(b);if(b.depthTexture.format===qn)Te(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(b.depthTexture.format===Jn)Te(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ne(P){const b=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const k=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),k){const $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,k.removeEventListener("dispose",$)};k.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=k}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Z(b.__webglFramebuffer,P)}else if(K){b.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[k]),b.__webglDepthbuffer[k]===void 0)b.__webglDepthbuffer[k]=i.createRenderbuffer(),te(b.__webglDepthbuffer[k],P,!1);else{const $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),te(b.__webglDepthbuffer,P,!1);else{const k=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(P,b,K){const k=n.get(P);b!==void 0&&X(k.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ne(P)}function Re(P){const b=P.texture,K=n.get(P),k=n.get(b);P.addEventListener("dispose",R);const $=P.textures,J=P.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=b.version,o.memory.textures++),J){K.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[ce]=[];for(let ue=0;ue<b.mipmaps.length;ue++)K.__webglFramebuffer[ce][ue]=i.createFramebuffer()}else K.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)K.__webglFramebuffer[ce]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(de)for(let ce=0,ue=$.length;ce<ue;ce++){const Be=n.get($[ce]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Te(P)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const ue=$[ce];K.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ce]);const Be=s.convert(ue.format,ue.colorSpace),le=s.convert(ue.type),pe=y(ue.internalFormat,Be,le,ue.colorSpace,P.isXRRenderTarget===!0),we=Ee(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,pe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,K.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),te(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),w(i.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)X(K.__webglFramebuffer[ce][ue],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else X(K.__webglFramebuffer[ce],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(b)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ce=0,ue=$.length;ce<ue;ce++){const Be=$[ce],le=n.get(Be);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),w(i.TEXTURE_2D,Be),X(K.__webglFramebuffer,P,Be,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Be)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,k.__webglTexture),w(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)X(K.__webglFramebuffer[ue],P,b,i.COLOR_ATTACHMENT0,ce,ue);else X(K.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,ce,0);m(b)&&d(ce),t.unbindTexture()}P.depthBuffer&&ne(P)}function Le(P){const b=P.textures;for(let K=0,k=b.length;K<k;K++){const $=b[K];if(m($)){const J=M(P),de=n.get($).__webglTexture;t.bindTexture(J,de),d(J),t.unbindTexture()}}}const Ae=[],z=[];function ke(P){if(P.samples>0){if(Te(P)===!1){const b=P.textures,K=P.width,k=P.height;let $=i.COLOR_BUFFER_BIT;const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(P),ce=b.length>1;if(ce)for(let ue=0;ue<b.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const Be=n.get(b[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,K,k,0,0,K,k,$,i.NEAREST),l===!0&&(Ae.length=0,z.length=0,Ae.push(i.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ae.push(J),z.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<b.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const Be=n.get(b[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ee(P){return Math.min(r.maxSamples,P.samples)}function Te(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _e(P){const b=o.render.frame;c.get(P)!==b&&(c.set(P,b),P.update())}function De(P,b){const K=P.colorSpace,k=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==ti&&K!==hn&&($e.getTransfer(K)===nt?(k!==zt||$!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=se,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Te}function Hc(i,e){function t(n,r=hn){let s;const o=$e.getTransfer(r);if(n===en)return i.UNSIGNED_BYTE;if(n===As)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zo)return i.BYTE;if(n===ko)return i.SHORT;if(n===wi)return i.UNSIGNED_SHORT;if(n===ws)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===qt)return i.FLOAT;if(n===Ri)return i.HALF_FLOAT;if(n===Go)return i.ALPHA;if(n===Vo)return i.RGB;if(n===zt)return i.RGBA;if(n===Wo)return i.LUMINANCE;if(n===Xo)return i.LUMINANCE_ALPHA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Jn)return i.DEPTH_STENCIL;if(n===Cs)return i.RED;if(n===Ps)return i.RED_INTEGER;if(n===qo)return i.RG;if(n===Is)return i.RG_INTEGER;if(n===Ls)return i.RGBA_INTEGER;if(n===qi||n===Yi||n===ji||n===Ki)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===qi)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ji)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ki)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===qi)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yi)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ji)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ki)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yr||n===jr||n===Kr||n===$r)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Yr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$r)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zr||n===Jr||n===Qr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zr||n===Jr)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===es||n===ts||n===ns||n===is||n===rs||n===ss||n===os||n===as||n===ls||n===cs||n===us||n===hs||n===fs||n===ds)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===es)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ts)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ns)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===is)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rs)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ss)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===os)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===as)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ls)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cs)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===us)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hs)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fs)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ds)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$i||n===ps||n===ms)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$i)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ps)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ms)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yo||n===gs||n===_s||n===xs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===$i)return s.COMPRESSED_RED_RGTC1_EXT;if(n===gs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_s)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Gc extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wn extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e0={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const t0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n0=`
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

}`;class i0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new _t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ut({vertexShader:t0,fragmentShader:n0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r0 extends ni{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const _=new i0,m=t.getContextAttributes();let d=null,M=null;const y=[],x=[],T=new Ve;let E=null;const R=new At;R.viewport=new it;const C=new At;C.viewport=new it;const v=[R,C],S=new Gc;let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=y[I];return O===void 0&&(O=new Mo,y[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=y[I];return O===void 0&&(O=new Mo,y[I]=O),O.getGripSpace()},this.getHand=function(I){let O=y[I];return O===void 0&&(O=new Mo,y[I]=O),O.getHandSpace()};function F(I){const O=x.indexOf(I.inputSource);if(O===-1)return;const X=y[O];X!==void 0&&(X.update(I.inputSource,I.frame,u||o),X.dispatchEvent({type:I.type,data:I.inputSource}))}function U(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",j);for(let I=0;I<y.length;I++){const O=x[I];O!==null&&(x[I]=null,y[I].disconnect(O))}L=null,D=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,M=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",U),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const O={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Cn(p.framebufferWidth,p.framebufferHeight,{format:zt,type:en,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let O=null,X=null,te=null;m.depth&&(te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=m.stencil?Jn:qn,X=m.stencil?Zn:Rn);const Z={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Z),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Cn(f.textureWidth,f.textureHeight,{format:zt,type:en,depthTexture:new sa(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(I){for(let O=0;O<I.removed.length;O++){const X=I.removed[O],te=x.indexOf(X);te>=0&&(x[te]=null,y[te].disconnect(X))}for(let O=0;O<I.added.length;O++){const X=I.added[O];let te=x.indexOf(X);if(te===-1){for(let ne=0;ne<y.length;ne++)if(ne>=x.length){x.push(X),te=ne;break}else if(x[ne]===null){x[ne]=X,te=ne;break}if(te===-1)break}const Z=y[te];Z&&Z.connect(X)}}const H=new B,q=new B;function Y(I,O,X){H.setFromMatrixPosition(O.matrixWorld),q.setFromMatrixPosition(X.matrixWorld);const te=H.distanceTo(q),Z=O.projectionMatrix.elements,ne=X.projectionMatrix.elements,se=Z[14]/(Z[10]-1),Re=Z[14]/(Z[10]+1),Le=(Z[9]+1)/Z[5],Ae=(Z[9]-1)/Z[5],z=(Z[8]-1)/Z[0],ke=(ne[8]+1)/ne[0],Ee=se*z,Te=se*ke,_e=te/(-z+ke),De=_e*-z;if(O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(De),I.translateZ(_e),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),Z[10]===-1)I.projectionMatrix.copy(O.projectionMatrix),I.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const be=se+_e,P=Re+_e,b=Ee-De,K=Te+(te-De),k=Le*Re/P*be,$=Ae*Re/P*be;I.projectionMatrix.makePerspective(b,K,k,$,be,P),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function re(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;let O=I.near,X=I.far;_.texture!==null&&(_.depthNear>0&&(O=_.depthNear),_.depthFar>0&&(X=_.depthFar)),S.near=C.near=R.near=O,S.far=C.far=R.far=X,(L!==S.near||D!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,D=S.far),R.layers.mask=I.layers.mask|2,C.layers.mask=I.layers.mask|4,S.layers.mask=R.layers.mask|C.layers.mask;const te=I.parent,Z=S.cameras;re(S,te);for(let ne=0;ne<Z.length;ne++)re(Z[ne],te);Z.length===2?Y(S,R,C):S.projectionMatrix.copy(R.projectionMatrix),he(I,S,te)};function he(I,O,X){X===null?I.matrix.copy(O.matrixWorld):(I.matrix.copy(X.matrixWorld),I.matrix.invert(),I.matrix.multiply(O.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(O.projectionMatrix),I.projectionMatrixInverse.copy(O.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Io*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let oe=null;function w(I,O){if(c=O.getViewerPose(u||o),g=O,c!==null){const X=c.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let te=!1;X.length!==S.cameras.length&&(S.cameras.length=0,te=!0);for(let ne=0;ne<X.length;ne++){const se=X[ne];let Re=null;if(p!==null)Re=p.getViewport(se);else{const Ae=h.getViewSubImage(f,se);Re=Ae.viewport,ne===0&&(e.setRenderTargetTextures(M,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(M))}let Le=v[ne];Le===void 0&&(Le=new At,Le.layers.enable(ne),Le.viewport=new it,v[ne]=Le),Le.matrix.fromArray(se.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(se.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Re.x,Re.y,Re.width,Re.height),ne===0&&(S.matrix.copy(Le.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),te===!0&&S.cameras.push(Le)}const Z=r.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const ne=h.getDepthInformation(X[0]);ne&&ne.isValid&&ne.texture&&_.init(e,ne,r.renderState)}}for(let X=0;X<y.length;X++){const te=x[X],Z=y[X];te!==null&&Z!==void 0&&Z.update(te,O,u||o)}oe&&oe(I,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}const N=new Uc;N.setAnimationLoop(w),this.setAnimationLoop=function(I){oe=I},this.dispose=function(){}}}const zn=new Pt,s0=new Ke;function o0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Pc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,y):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===gt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===gt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),y=M.envMap,x=M.envMapRotation;y&&(m.envMap.value=y,zn.copy(x),zn.x*=-1,zn.y*=-1,zn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(s0.makeRotationFromEuler(zn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function a0(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function u(M,y){let x=r[M.id];x===void 0&&(g(M),x=c(M),r[M.id]=x,M.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(M,T);const E=e.render.frame;s[M.id]!==E&&(f(M),s[M.id]=E)}function c(M){const y=h();M.__bindingPointIndex=y;const x=i.createBuffer(),T=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=r[M.id],x=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,R=x.length;E<R;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,S=C.length;v<S;v++){const L=C[v];if(p(L,E,v,T)===!0){const D=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let j=0;j<F.length;j++){const H=F[j],q=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,D+U,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,y,x,T){const E=M.value,R=y+"_"+x;if(T[R]===void 0)return typeof E=="number"||typeof E=="boolean"?T[R]=E:T[R]=E.clone(),!0;{const C=T[R];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[R]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(M){const y=M.uniforms;let x=0;const T=16;for(let R=0,C=y.length;R<C;R++){const v=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,L=v.length;S<L;S++){const D=v[S],F=Array.isArray(D.value)?D.value:[D.value];for(let U=0,j=F.length;U<j;U++){const H=F[U],q=_(H),Y=x%T,re=Y%q.boundary,he=Y+re;x+=re,he!==0&&T-he<q.storage&&(x+=T-he),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=q.storage}}}const E=x%T;return E>0&&(x+=T-E),M.__size=x,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Vc{constructor(e={}){const{canvas:t=Tc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=dn,this.toneMappingExposure=1;const x=this;let T=!1,E=0,R=0,C=null,v=-1,S=null;const L=new it,D=new it;let F=null;const U=new Ne(0);let j=0,H=t.width,q=t.height,Y=1,re=null,he=null;const oe=new it(0,0,H,q),w=new it(0,0,H,q);let N=!1;const I=new Us;let O=!1,X=!1;const te=new Ke,Z=new Ke,ne=new B,se=new it,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function Ae(){return C===null?Y:1}let z=n;function ke(A,V){return t.getContext(A,V)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bs}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Me,!1),z===null){const V="webgl2";if(z=ke(V,A),z===null)throw ke(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,Te,_e,De,be,P,b,K,k,$,J,de,ce,ue,Be,le,pe,we,Fe,ve,He,Oe,je,G;function xe(){Ee=new _d(z),Ee.init(),Oe=new Hc(z,Ee),Te=new hd(z,Ee,e,Oe),_e=new Zp(z,Ee),Te.reverseDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),De=new Md(z),be=new Bp,P=new Qp(z,Ee,_e,be,Te,Oe,De),b=new dd(x),K=new gd(x),k=new wu(z),je=new cd(z,k),$=new xd(z,k,De,je),J=new Sd(z,$,k,De),Fe=new yd(z,Te,P),le=new fd(be),de=new Op(x,b,K,Ee,Te,je,le),ce=new o0(x,be),ue=new kp,Be=new qp(Ee),we=new ld(x,b,K,_e,J,p,l),pe=new Kp(x,J,Te),G=new a0(z,De,Te,_e),ve=new ud(z,Ee,De),He=new vd(z,Ee,De),De.programs=de.programs,x.capabilities=Te,x.extensions=Ee,x.properties=be,x.renderLists=ue,x.shadowMap=pe,x.state=_e,x.info=De}xe();const ie=new r0(x,z);this.xr=ie,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(H,q,!1))},this.getSize=function(A){return A.set(H,q)},this.setSize=function(A,V,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,q=V,t.width=Math.floor(A*Y),t.height=Math.floor(V*Y),Q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(H*Y,q*Y).floor()},this.setDrawingBufferSize=function(A,V,Q){H=A,q=V,Y=Q,t.width=Math.floor(A*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,V,Q,ee){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,V,Q,ee),_e.viewport(L.copy(oe).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(w)},this.setScissor=function(A,V,Q,ee){A.isVector4?w.set(A.x,A.y,A.z,A.w):w.set(A,V,Q,ee),_e.scissor(D.copy(w).multiplyScalar(Y).round())},this.getScissorTest=function(){return N},this.setScissorTest=function(A){_e.setScissorTest(N=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(A=!0,V=!0,Q=!0){let ee=0;if(A){let W=!1;if(C!==null){const fe=C.texture.format;W=fe===Ls||fe===Is||fe===Ps}if(W){const fe=C.texture.type,ye=fe===en||fe===Rn||fe===wi||fe===Zn||fe===As||fe===Rs,Ce=we.getClearColor(),Pe=we.getClearAlpha(),ze=Ce.r,Xe=Ce.g,Ie=Ce.b;ye?(g[0]=ze,g[1]=Xe,g[2]=Ie,g[3]=Pe,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=ze,_[1]=Xe,_[2]=Ie,_[3]=Pe,z.clearBufferiv(z.COLOR,0,_))}else ee|=z.COLOR_BUFFER_BIT}V&&(ee|=z.DEPTH_BUFFER_BIT),Q&&(ee|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ue.dispose(),Be.dispose(),be.dispose(),b.dispose(),K.dispose(),J.dispose(),je.dispose(),G.dispose(),de.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",fa),ie.removeEventListener("sessionend",da),Dn.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=De.autoReset,V=pe.enabled,Q=pe.autoUpdate,ee=pe.needsUpdate,W=pe.type;xe(),De.autoReset=A,pe.enabled=V,pe.autoUpdate=Q,pe.needsUpdate=ee,pe.type=W}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function We(A){const V=A.target;V.removeEventListener("dispose",We),at(V)}function at(A){xt(A),be.remove(A)}function xt(A){const V=be.get(A).programs;V!==void 0&&(V.forEach(function(Q){de.releaseProgram(Q)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Q,ee,W,fe){V===null&&(V=Re);const ye=W.isMesh&&W.matrixWorld.determinant()<0,Ce=nu(A,V,Q,ee,W);_e.setMaterial(ee,ye);let Pe=Q.index,ze=1;if(ee.wireframe===!0){if(Pe=$.getWireframeAttribute(Q),Pe===void 0)return;ze=2}const Xe=Q.drawRange,Ie=Q.attributes.position;let Ze=Xe.start*ze,rt=(Xe.start+Xe.count)*ze;fe!==null&&(Ze=Math.max(Ze,fe.start*ze),rt=Math.min(rt,(fe.start+fe.count)*ze)),Pe!==null?(Ze=Math.max(Ze,0),rt=Math.min(rt,Pe.count)):Ie!=null&&(Ze=Math.max(Ze,0),rt=Math.min(rt,Ie.count));const st=rt-Ze;if(st<0||st===1/0)return;je.setup(W,ee,Ce,Q,Pe);let Et,Je=ve;if(Pe!==null&&(Et=k.get(Pe),Je=He,Je.setIndex(Et)),W.isMesh)ee.wireframe===!0?(_e.setLineWidth(ee.wireframeLinewidth*Ae()),Je.setMode(z.LINES)):Je.setMode(z.TRIANGLES);else if(W.isLine){let Ue=ee.linewidth;Ue===void 0&&(Ue=1),_e.setLineWidth(Ue*Ae()),W.isLineSegments?Je.setMode(z.LINES):W.isLineLoop?Je.setMode(z.LINE_LOOP):Je.setMode(z.LINE_STRIP)}else W.isPoints?Je.setMode(z.POINTS):W.isSprite&&Je.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Je.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Je.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ue=W._multiDrawStarts,sn=W._multiDrawCounts,Qe=W._multiDrawCount,Ht=Pe?k.get(Pe).bytesPerElement:1,ri=be.get(ee).currentProgram.getUniforms();for(let It=0;It<Qe;It++)ri.setValue(z,"_gl_DrawID",It),Je.render(Ue[It]/Ht,sn[It])}else if(W.isInstancedMesh)Je.renderInstances(Ze,st,W.count);else if(Q.isInstancedBufferGeometry){const Ue=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,sn=Math.min(Q.instanceCount,Ue);Je.renderInstances(Ze,st,sn)}else Je.render(Ze,st)};function tt(A,V,Q){A.transparent===!0&&A.side===Rt&&A.forceSinglePass===!1?(A.side=gt,A.needsUpdate=!0,ar(A,V,Q),A.side=gn,A.needsUpdate=!0,ar(A,V,Q),A.side=Rt):ar(A,V,Q)}this.compile=function(A,V,Q=null){Q===null&&(Q=A),d=Be.get(Q),d.init(V),y.push(d),Q.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),A!==Q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights();const ee=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const fe=W.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const Ce=fe[ye];tt(Ce,Q,W),ee.add(Ce)}else tt(fe,Q,W),ee.add(fe)}),y.pop(),d=null,ee},this.compileAsync=function(A,V,Q=null){const ee=this.compile(A,V,Q);return new Promise(W=>{function fe(){if(ee.forEach(function(ye){be.get(ye).currentProgram.isReady()&&ee.delete(ye)}),ee.size===0){W(A);return}setTimeout(fe,10)}Ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let kt=null;function rn(A){kt&&kt(A)}function fa(){Dn.stop()}function da(){Dn.start()}const Dn=new Uc;Dn.setAnimationLoop(rn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(A){kt=A,ie.setAnimationLoop(A),A===null?Dn.stop():Dn.start()},ie.addEventListener("sessionstart",fa),ie.addEventListener("sessionend",da),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(V),V=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,V,C),d=Be.get(A,y.length),d.init(V),y.push(d),Z.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),I.setFromProjectionMatrix(Z),X=this.localClippingEnabled,O=le.init(this.clippingPlanes,X),m=ue.get(A,M.length),m.init(),M.push(m),ie.enabled===!0&&ie.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&Ws(fe,V,-1/0,x.sortObjects)}Ws(A,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(re,he),Le=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Le&&we.addToRenderList(m,A),this.info.render.frame++,O===!0&&le.beginShadows();const Q=d.state.shadowsArray;pe.render(Q,A,V),O===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,W=m.transmissive;if(d.setupLights(),V.isArrayCamera){const fe=V.cameras;if(W.length>0)for(let ye=0,Ce=fe.length;ye<Ce;ye++){const Pe=fe[ye];ma(ee,W,A,Pe)}Le&&we.render(A);for(let ye=0,Ce=fe.length;ye<Ce;ye++){const Pe=fe[ye];pa(m,A,Pe,Pe.viewport)}}else W.length>0&&ma(ee,W,A,V),Le&&we.render(A),pa(m,A,V);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,V),je.resetDefaultState(),v=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],O===!0&&le.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ws(A,V,Q,ee){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||I.intersectsSprite(A)){ee&&se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const ye=J.update(A),Ce=A.material;Ce.visible&&m.push(A,ye,Ce,Q,se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||I.intersectsObject(A))){const ye=J.update(A),Ce=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),se.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),se.copy(ye.boundingSphere.center)),se.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(Ce)){const Pe=ye.groups;for(let ze=0,Xe=Pe.length;ze<Xe;ze++){const Ie=Pe[ze],Ze=Ce[Ie.materialIndex];Ze&&Ze.visible&&m.push(A,ye,Ze,Q,se.z,Ie)}}else Ce.visible&&m.push(A,ye,Ce,Q,se.z,null)}}const fe=A.children;for(let ye=0,Ce=fe.length;ye<Ce;ye++)Ws(fe[ye],V,Q,ee)}function pa(A,V,Q,ee){const W=A.opaque,fe=A.transmissive,ye=A.transparent;d.setupLightsView(Q),O===!0&&le.setGlobalState(x.clippingPlanes,Q),ee&&_e.viewport(L.copy(ee)),W.length>0&&or(W,V,Q),fe.length>0&&or(fe,V,Q),ye.length>0&&or(ye,V,Q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ma(A,V,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ee.id]===void 0&&(d.state.transmissionRenderTarget[ee.id]=new Cn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Ri:en,minFilter:Jt,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const fe=d.state.transmissionRenderTarget[ee.id],ye=ee.viewport||L;fe.setSize(ye.z,ye.w);const Ce=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(U),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Le&&we.render(Q);const Pe=x.toneMapping;x.toneMapping=dn;const ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),d.setupLightsView(ee),O===!0&&le.setGlobalState(x.clippingPlanes,ee),or(A,Q,ee),P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ie=0,Ze=V.length;Ie<Ze;Ie++){const rt=V[Ie],st=rt.object,Et=rt.geometry,Je=rt.material,Ue=rt.group;if(Je.side===Rt&&st.layers.test(ee.layers)){const sn=Je.side;Je.side=gt,Je.needsUpdate=!0,ga(st,Q,ee,Et,Je,Ue),Je.side=sn,Je.needsUpdate=!0,Xe=!0}}Xe===!0&&(P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe))}x.setRenderTarget(Ce),x.setClearColor(U,j),ze!==void 0&&(ee.viewport=ze),x.toneMapping=Pe}function or(A,V,Q){const ee=V.isScene===!0?V.overrideMaterial:null;for(let W=0,fe=A.length;W<fe;W++){const ye=A[W],Ce=ye.object,Pe=ye.geometry,ze=ee===null?ye.material:ee,Xe=ye.group;Ce.layers.test(Q.layers)&&ga(Ce,V,Q,Pe,ze,Xe)}}function ga(A,V,Q,ee,W,fe){A.onBeforeRender(x,V,Q,ee,W,fe),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(x,V,Q,ee,A,fe),W.transparent===!0&&W.side===Rt&&W.forceSinglePass===!1?(W.side=gt,W.needsUpdate=!0,x.renderBufferDirect(Q,V,ee,W,A,fe),W.side=gn,W.needsUpdate=!0,x.renderBufferDirect(Q,V,ee,W,A,fe),W.side=Rt):x.renderBufferDirect(Q,V,ee,W,A,fe),A.onAfterRender(x,V,Q,ee,W,fe)}function ar(A,V,Q){V.isScene!==!0&&(V=Re);const ee=be.get(A),W=d.state.lights,fe=d.state.shadowsArray,ye=W.state.version,Ce=de.getParameters(A,W.state,fe,V,Q),Pe=de.getProgramCacheKey(Ce);let ze=ee.programs;ee.environment=A.isMeshStandardMaterial?V.environment:null,ee.fog=V.fog,ee.envMap=(A.isMeshStandardMaterial?K:b).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",We),ze=new Map,ee.programs=ze);let Xe=ze.get(Pe);if(Xe!==void 0){if(ee.currentProgram===Xe&&ee.lightsStateVersion===ye)return xa(A,Ce),Xe}else Ce.uniforms=de.getUniforms(A),A.onBeforeCompile(Ce,x),Xe=de.acquireProgram(Ce,Pe),ze.set(Pe,Xe),ee.uniforms=Ce.uniforms;const Ie=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=le.uniform),xa(A,Ce),ee.needsLights=ru(A),ee.lightsStateVersion=ye,ee.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.directionalShadowMap.value=W.state.directionalShadowMap,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotShadowMap.value=W.state.spotShadowMap,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMap.value=W.state.pointShadowMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=Xe,ee.uniformsList=null,Xe}function _a(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Ur.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function xa(A,V){const Q=be.get(A);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function nu(A,V,Q,ee,W){V.isScene!==!0&&(V=Re),P.resetTextureUnits();const fe=V.fog,ye=ee.isMeshStandardMaterial?V.environment:null,Ce=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ti,Pe=(ee.isMeshStandardMaterial?K:b).get(ee.envMap||ye),ze=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Xe=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ie=!!Q.morphAttributes.position,Ze=!!Q.morphAttributes.normal,rt=!!Q.morphAttributes.color;let st=dn;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(st=x.toneMapping);const Et=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Je=Et!==void 0?Et.length:0,Ue=be.get(ee),sn=d.state.lights;if(O===!0&&(X===!0||A!==S)){const Nt=A===S&&ee.id===v;le.setState(ee,A,Nt)}let Qe=!1;ee.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==sn.state.version||Ue.outputColorSpace!==Ce||W.isBatchedMesh&&Ue.batching===!1||!W.isBatchedMesh&&Ue.batching===!0||W.isBatchedMesh&&Ue.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ue.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ue.instancing===!1||!W.isInstancedMesh&&Ue.instancing===!0||W.isSkinnedMesh&&Ue.skinning===!1||!W.isSkinnedMesh&&Ue.skinning===!0||W.isInstancedMesh&&Ue.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ue.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ue.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ue.instancingMorph===!1&&W.morphTexture!==null||Ue.envMap!==Pe||ee.fog===!0&&Ue.fog!==fe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==ze||Ue.vertexTangents!==Xe||Ue.morphTargets!==Ie||Ue.morphNormals!==Ze||Ue.morphColors!==rt||Ue.toneMapping!==st||Ue.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Ue.__version=ee.version);let Ht=Ue.currentProgram;Qe===!0&&(Ht=ar(ee,V,W));let ri=!1,It=!1,Ii=!1;const ot=Ht.getUniforms(),$t=Ue.uniforms;if(_e.useProgram(Ht.program)&&(ri=!0,It=!0,Ii=!0),ee.id!==v&&(v=ee.id,It=!0),ri||S!==A){_e.buffers.depth.getReversed()?(te.copy(A.projectionMatrix),au(te),lu(te),ot.setValue(z,"projectionMatrix",te)):ot.setValue(z,"projectionMatrix",A.projectionMatrix),ot.setValue(z,"viewMatrix",A.matrixWorldInverse);const _n=ot.map.cameraPosition;_n!==void 0&&_n.setValue(z,ne.setFromMatrixPosition(A.matrixWorld)),Te.logarithmicDepthBuffer&&ot.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&ot.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,It=!0,Ii=!0)}if(W.isSkinnedMesh){ot.setOptional(z,W,"bindMatrix"),ot.setOptional(z,W,"bindMatrixInverse");const Nt=W.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ot.setValue(z,"boneTexture",Nt.boneTexture,P))}W.isBatchedMesh&&(ot.setOptional(z,W,"batchingTexture"),ot.setValue(z,"batchingTexture",W._matricesTexture,P),ot.setOptional(z,W,"batchingIdTexture"),ot.setValue(z,"batchingIdTexture",W._indirectTexture,P),ot.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&ot.setValue(z,"batchingColorTexture",W._colorsTexture,P));const Li=Q.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Fe.update(W,Q,Ht),(It||Ue.receiveShadow!==W.receiveShadow)&&(Ue.receiveShadow=W.receiveShadow,ot.setValue(z,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&($t.envMap.value=Pe,$t.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&V.environment!==null&&($t.envMapIntensity.value=V.environmentIntensity),It&&(ot.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ue.needsLights&&iu($t,Ii),fe&&ee.fog===!0&&ce.refreshFogUniforms($t,fe),ce.refreshMaterialUniforms($t,ee,Y,q,d.state.transmissionRenderTarget[A.id]),Ur.upload(z,_a(Ue),$t,P)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ur.upload(z,_a(Ue),$t,P),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&ot.setValue(z,"center",W.center),ot.setValue(z,"modelViewMatrix",W.modelViewMatrix),ot.setValue(z,"normalMatrix",W.normalMatrix),ot.setValue(z,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Nt=ee.uniformsGroups;for(let _n=0,xn=Nt.length;_n<xn;_n++){const va=Nt[_n];G.update(va,Ht),G.bind(va,Ht)}}return Ht}function iu(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function ru(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,V,Q){be.get(A.texture).__webglTexture=V,be.get(A.depthTexture).__webglTexture=Q;const ee=be.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const Q=be.get(A);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Q=0){C=A,E=V,R=Q;let ee=!0,W=null,fe=!1,ye=!1;if(A){const Pe=be.get(A);if(Pe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(z.FRAMEBUFFER,null),ee=!1;else if(Pe.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Pe.__hasExternalTextures)P.rebindTextures(A,be.get(A.texture).__webglTexture,be.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ie=A.depthTexture;if(Pe.__boundDepthTexture!==Ie){if(Ie!==null&&be.has(Ie)&&(A.width!==Ie.image.width||A.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);const Xe=be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[V])?W=Xe[V][Q]:W=Xe[V],fe=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?W=be.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?W=Xe[Q]:W=Xe,L.copy(A.viewport),D.copy(A.scissor),F=A.scissorTest}else L.copy(oe).multiplyScalar(Y).floor(),D.copy(w).multiplyScalar(Y).floor(),F=N;if(_e.bindFramebuffer(z.FRAMEBUFFER,W)&&ee&&_e.drawBuffers(A,W),_e.viewport(L),_e.scissor(D),_e.setScissorTest(F),fe){const Pe=be.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,Q)}else if(ye){const Pe=be.get(A.texture),ze=V||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pe.__webglTexture,Q||0,ze)}v=-1},this.readRenderTargetPixels=function(A,V,Q,ee,W,fe,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){_e.bindFramebuffer(z.FRAMEBUFFER,Ce);try{const Pe=A.texture,ze=Pe.format,Xe=Pe.type;if(!Te.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-ee&&Q>=0&&Q<=A.height-W&&z.readPixels(V,Q,ee,W,Oe.convert(ze),Oe.convert(Xe),fe)}finally{const Pe=C!==null?be.get(C).__webglFramebuffer:null;_e.bindFramebuffer(z.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,V,Q,ee,W,fe,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){const Pe=A.texture,ze=Pe.format,Xe=Pe.type;if(!Te.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-ee&&Q>=0&&Q<=A.height-W){_e.bindFramebuffer(z.FRAMEBUFFER,Ce);const Ie=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ie),z.bufferData(z.PIXEL_PACK_BUFFER,fe.byteLength,z.STREAM_READ),z.readPixels(V,Q,ee,W,Oe.convert(ze),Oe.convert(Xe),0);const Ze=C!==null?be.get(C).__webglFramebuffer:null;_e.bindFramebuffer(z.FRAMEBUFFER,Ze);const rt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ou(z,rt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ie),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,fe),z.deleteBuffer(Ie),z.deleteSync(rt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,Q=0){A.isTexture!==!0&&(Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const ee=Math.pow(2,-Q),W=Math.floor(A.image.width*ee),fe=Math.floor(A.image.height*ee),ye=V!==null?V.x:0,Ce=V!==null?V.y:0;P.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,ye,Ce,W,fe),_e.unbindTexture()},this.copyTextureToTexture=function(A,V,Q=null,ee=null,W=0){A.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],V=arguments[2],W=arguments[3]||0,Q=null);let fe,ye,Ce,Pe,ze,Xe,Ie,Ze,rt;const st=A.isCompressedTexture?A.mipmaps[W]:A.image;Q!==null?(fe=Q.max.x-Q.min.x,ye=Q.max.y-Q.min.y,Ce=Q.isBox3?Q.max.z-Q.min.z:1,Pe=Q.min.x,ze=Q.min.y,Xe=Q.isBox3?Q.min.z:0):(fe=st.width,ye=st.height,Ce=st.depth||1,Pe=0,ze=0,Xe=0),ee!==null?(Ie=ee.x,Ze=ee.y,rt=ee.z):(Ie=0,Ze=0,rt=0);const Et=Oe.convert(V.format),Je=Oe.convert(V.type);let Ue;V.isData3DTexture?(P.setTexture3D(V,0),Ue=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(P.setTexture2DArray(V,0),Ue=z.TEXTURE_2D_ARRAY):(P.setTexture2D(V,0),Ue=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const sn=z.getParameter(z.UNPACK_ROW_LENGTH),Qe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ht=z.getParameter(z.UNPACK_SKIP_PIXELS),ri=z.getParameter(z.UNPACK_SKIP_ROWS),It=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,st.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pe),z.pixelStorei(z.UNPACK_SKIP_ROWS,ze),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe);const Ii=A.isDataArrayTexture||A.isData3DTexture,ot=V.isDataArrayTexture||V.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const $t=be.get(A),Li=be.get(V),Nt=be.get($t.__renderTarget),_n=be.get(Li.__renderTarget);_e.bindFramebuffer(z.READ_FRAMEBUFFER,Nt.__webglFramebuffer),_e.bindFramebuffer(z.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let xn=0;xn<Ce;xn++)Ii&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,be.get(A).__webglTexture,W,Xe+xn),A.isDepthTexture?(ot&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,be.get(V).__webglTexture,W,rt+xn),z.blitFramebuffer(Pe,ze,fe,ye,Ie,Ze,fe,ye,z.DEPTH_BUFFER_BIT,z.NEAREST)):ot?z.copyTexSubImage3D(Ue,W,Ie,Ze,rt+xn,Pe,ze,fe,ye):z.copyTexSubImage2D(Ue,W,Ie,Ze,rt+xn,Pe,ze,fe,ye);_e.bindFramebuffer(z.READ_FRAMEBUFFER,null),_e.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ot?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ue,W,Ie,Ze,rt,fe,ye,Ce,Et,Je,st.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Ue,W,Ie,Ze,rt,fe,ye,Ce,Et,st.data):z.texSubImage3D(Ue,W,Ie,Ze,rt,fe,ye,Ce,Et,Je,st):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,Ie,Ze,fe,ye,Et,Je,st.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,Ie,Ze,st.width,st.height,Et,st.data):z.texSubImage2D(z.TEXTURE_2D,W,Ie,Ze,fe,ye,Et,Je,st);z.pixelStorei(z.UNPACK_ROW_LENGTH,sn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Qe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ht),z.pixelStorei(z.UNPACK_SKIP_ROWS,ri),z.pixelStorei(z.UNPACK_SKIP_IMAGES,It),W===0&&V.generateMipmaps&&z.generateMipmap(Ue),_e.unbindTexture()},this.copyTextureToTexture3D=function(A,V,Q=null,ee=null,W=0){return A.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],V=arguments[3],W=arguments[4]||0),Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,Q,ee,W)},this.initRenderTarget=function(A){be.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,_e.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class oa extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pt,this.environmentIntensity=1,this.environmentRotation=new Pt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class aa extends _t{constructor(e=null,t=1,n=1,r,s,o,a,l,u=Ct,c=Ct,h,f){super(null,o,a,l,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys extends yt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xi=new Ke,ul=new Ke,Rr=[],hl=new Pn,l0=new Ke,Bi=new et,zi=new ii;class Fs extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,l0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),hl.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(hl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),zi.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(n),e.ray.intersectsSphere(zi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xi),ul.multiplyMatrices(n,xi),Bi.matrixWorld=ul,Bi.raycast(e,Rr);for(let o=0,a=Rr.length;o<a;o++){const l=Rr[o];l.instanceId=s,l.object=this,t.push(l)}Rr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new aa(new Float32Array(r*this.count),r,this.count,Cs,qt));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Wc extends In{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fl=new Ke,Do=new Zo,Cr=new ii,Pr=new B;class Xc extends ut{constructor(e=new ct,t=new Wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Cr.radius+=s,e.ray.intersectsSphere(Cr)===!1)return;fl.copy(r).invert(),Do.copy(e.ray).applyMatrix4(fl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=u.getX(g);Pr.fromBufferAttribute(h,m),dl(Pr,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Pr.fromBufferAttribute(h,g),dl(Pr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function dl(i,e,t,n,r,s,o){const a=Do.distanceSqToPoint(i);if(a<t){const l=new B;Do.closestPointToPoint(i,l),l.applyMatrix4(n);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class rr extends _t{constructor(e,t,n,r,s,o,a,l,u){super(e,t,n,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Os extends ct{constructor(e=[new Ve(0,-.5),new Ve(.5,0),new Ve(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=bt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],u=[],c=1/t,h=new B,f=new Ve,p=new B,g=new B,_=new B;let m=0,d=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let M=0;M<=t;M++){const y=n+M*c*r,x=Math.sin(y),T=Math.cos(y);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*x,h.y=e[E].y,h.z=e[E].x*T,o.push(h.x,h.y,h.z),f.x=M/t,f.y=E/(e.length-1),a.push(f.x,f.y);const R=l[3*E+0]*x,C=l[3*E+1],v=l[3*E+0]*T;u.push(R,C,v)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){const x=y+M*e.length,T=x,E=x+e.length,R=x+e.length+1,C=x+1;s.push(T,E,C),s.push(R,C,E)}this.setIndex(s),this.setAttribute("position",new Ye(o,3)),this.setAttribute("uv",new Ye(a,2)),this.setAttribute("normal",new Ye(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.points,e.segments,e.phiStart,e.phiLength)}}class sr extends ct{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(p,2));function M(){const x=new B,T=new B;let E=0;const R=(t-e)/n;for(let C=0;C<=s;C++){const v=[],S=C/s,L=S*(t-e)+e;for(let D=0;D<=r;D++){const F=D/r,U=F*l+a,j=Math.sin(U),H=Math.cos(U);T.x=L*j,T.y=-S*n+m,T.z=L*H,h.push(T.x,T.y,T.z),x.set(j,R,H).normalize(),f.push(x.x,x.y,x.z),p.push(F,1-S),v.push(g++)}_.push(v)}for(let C=0;C<r;C++)for(let v=0;v<s;v++){const S=_[v][C],L=_[v+1][C],D=_[v+1][C+1],F=_[v][C+1];(e>0||v!==0)&&(c.push(S,L,F),E+=3),(t>0||v!==s-1)&&(c.push(L,D,F),E+=3)}u.addGroup(d,E,0),d+=E}function y(x){const T=g,E=new Ve,R=new B;let C=0;const v=x===!0?e:t,S=x===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const L=g;for(let D=0;D<=r;D++){const U=D/r*l+a,j=Math.cos(U),H=Math.sin(U);R.x=v*H,R.y=m*S,R.z=v*j,h.push(R.x,R.y,R.z),f.push(0,S,0),E.x=j*.5+.5,E.y=H*.5*S+.5,p.push(E.x,E.y),g++}for(let D=0;D<r;D++){const F=T+D,U=L+D;x===!0?c.push(U,U+1,F):c.push(U+1,U,F),C+=3}u.addGroup(d,C,x===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bs extends ct{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),u(n),c(),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(s.slice(),3)),this.setAttribute("uv",new Ye(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new B,x=new B,T=new B;for(let E=0;E<t.length;E+=3)p(t[E+0],y),p(t[E+1],x),p(t[E+2],T),l(y,x,T,M)}function l(M,y,x,T){const E=T+1,R=[];for(let C=0;C<=E;C++){R[C]=[];const v=M.clone().lerp(x,C/E),S=y.clone().lerp(x,C/E),L=E-C;for(let D=0;D<=L;D++)D===0&&C===E?R[C][D]=v:R[C][D]=v.clone().lerp(S,D/L)}for(let C=0;C<E;C++)for(let v=0;v<2*(E-C)-1;v++){const S=Math.floor(v/2);v%2===0?(f(R[C][S+1]),f(R[C+1][S]),f(R[C][S])):(f(R[C][S+1]),f(R[C+1][S+1]),f(R[C+1][S]))}}function u(M){const y=new B;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(M),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function c(){const M=new B;for(let y=0;y<s.length;y+=3){M.x=s[y+0],M.y=s[y+1],M.z=s[y+2];const x=m(M)/2/Math.PI+.5,T=d(M)/Math.PI+.5;o.push(x,1-T)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],x=o[M+2],T=o[M+4],E=Math.max(y,x,T),R=Math.min(y,x,T);E>.9&&R<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function f(M){s.push(M.x,M.y,M.z)}function p(M,y){const x=M*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const M=new B,y=new B,x=new B,T=new B,E=new Ve,R=new Ve,C=new Ve;for(let v=0,S=0;v<s.length;v+=9,S+=6){M.set(s[v+0],s[v+1],s[v+2]),y.set(s[v+3],s[v+4],s[v+5]),x.set(s[v+6],s[v+7],s[v+8]),E.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),T.copy(M).add(y).add(x).divideScalar(3);const L=m(T);_(E,S+0,M,L),_(R,S+2,y,L),_(C,S+4,x,L)}}function _(M,y,x,T){T<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.vertices,e.indices,e.radius,e.details)}}class zs extends Bs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zs(e.radius,e.detail)}}class Pi extends ct{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new B,f=new B,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const M=[],y=d/n;let x=0;d===0&&o===0?x=.5/t:d===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const E=T/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(E+x,1-y),M.push(u++)}c.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const y=c[d][M+1],x=c[d][M],T=c[d+1][M],E=c[d+1][M+1];(d!==0||o>0)&&p.push(y,x,E),(d!==n-1||l<Math.PI)&&p.push(x,T,E)}this.setIndex(p),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ks extends ct{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new B,h=new B,f=new B;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),c.x=e*Math.cos(_),c.y=e*Math.sin(_),f.subVectors(h,c).normalize(),l.push(f.x,f.y,f.z),u.push(g/r),u.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,M=(r+1)*p+g;o.push(_,m,M),o.push(m,d,M)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ei extends In{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qc extends In{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hs extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Yc extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yo=new Ke,pl=new B,ml=new B;class jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(pl),ml.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ml),t.updateMatrixWorld(),yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gl=new Ke,ki=new B,So=new B;class c0 extends jc{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ki.setFromMatrixPosition(e.matrixWorld),n.position.copy(ki),So.copy(n.position),So.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(So),n.updateMatrixWorld(),r.makeTranslation(-ki.x,-ki.y,-ki.z),gl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl)}}class Ss extends Hs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new c0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class u0 extends jc{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kc extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new u0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bs);const h0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Oo,AddEquation:wn,AddOperation:oc,AdditiveBlending:Zi,AgXToneMapping:hc,AlphaFormat:Go,AlwaysCompare:bc,AlwaysDepth:Br,AlwaysStencilFunc:Co,ArrayCamera:Gc,BackSide:gt,BasicDepthPacking:pc,Box3:Pn,BoxGeometry:tn,BufferAttribute:yt,BufferGeometry:ct,ByteType:zo,Camera:ta,CanvasTexture:rr,CineonToneMapping:cc,ClampToEdgeWrapping:An,Color:Ne,ColorManagement:$e,ConstantAlphaFactor:ic,ConstantColorFactor:tc,CubeCamera:Lc,CubeReflectionMapping:Kn,CubeRefractionMapping:$n,CubeTexture:na,CubeUVReflectionMapping:tr,CullFaceBack:wo,CullFaceFront:zl,CullFaceNone:Bl,CustomBlending:Hl,CustomToneMapping:uc,CylinderGeometry:sr,Data3DTexture:Rc,DataArrayTexture:$o,DataTexture:aa,DepthFormat:qn,DepthStencilFormat:Jn,DepthTexture:sa,DirectionalLight:Kc,DoubleSide:Rt,DstAlphaFactor:$l,DstColorFactor:Jl,EqualCompare:vc,EqualDepth:kr,EquirectangularReflectionMapping:Wr,EquirectangularRefractionMapping:Xr,Euler:Pt,EventDispatcher:ni,Float32BufferAttribute:Ye,FloatType:qt,FrontSide:gn,Frustum:Us,GLSL3:Po,GreaterCompare:Mc,GreaterDepth:Gr,GreaterEqualCompare:Sc,GreaterEqualDepth:Hr,Group:Wn,HalfFloatType:Ri,HemisphereLight:Yc,IcosahedronGeometry:zs,ImageUtils:wc,InstancedBufferAttribute:ys,InstancedMesh:Fs,IntType:ws,KeepStencilOp:kn,LatheGeometry:Os,Layers:Jo,LessCompare:xc,LessDepth:zr,LessEqualCompare:jo,LessEqualDepth:jn,Light:Hs,LinearFilter:Bt,LinearMipmapLinearFilter:Jt,LinearMipmapNearestFilter:Dr,LinearSRGBColorSpace:ti,LinearToneMapping:ac,LinearTransfer:nr,LuminanceAlphaFormat:Xo,LuminanceFormat:Wo,Material:In,Matrix3:Ge,Matrix4:Ke,MaxEquation:Xl,Mesh:et,MeshBasicMaterial:Qn,MeshDepthMaterial:zc,MeshDistanceMaterial:kc,MeshLambertMaterial:qc,MeshStandardMaterial:ei,MinEquation:Wl,MirroredRepeatWrapping:qr,MixOperation:sc,MultiplyBlending:Ro,MultiplyOperation:Ts,NearestFilter:Ct,NearestMipmapLinearFilter:Vi,NearestMipmapNearestFilter:dc,NeutralToneMapping:fc,NeverCompare:_c,NeverDepth:Or,NoBlending:fn,NoColorSpace:hn,NoToneMapping:dn,NormalBlending:Xn,NotEqualCompare:yc,NotEqualDepth:Vr,Object3D:ut,ObjectSpaceNormalMap:gc,OneFactor:Yl,OneMinusConstantAlphaFactor:rc,OneMinusConstantColorFactor:nc,OneMinusDstAlphaFactor:Zl,OneMinusDstColorFactor:Ql,OneMinusSrcAlphaFactor:Fr,OneMinusSrcColorFactor:Kl,OrthographicCamera:ia,PCFShadowMap:Es,PCFSoftShadowMap:kl,PMREMGenerator:Ms,PerspectiveCamera:At,Plane:Tn,PlaneGeometry:mn,PointLight:Ss,Points:Xc,PointsMaterial:Wc,PolyhedronGeometry:Bs,Quaternion:jt,RED_GREEN_RGTC2_Format:_s,RED_RGTC1_Format:Yo,REVISION:bs,RGBADepthPacking:mc,RGBAFormat:zt,RGBAIntegerFormat:Ls,RGBA_ASTC_10x10_Format:hs,RGBA_ASTC_10x5_Format:ls,RGBA_ASTC_10x6_Format:cs,RGBA_ASTC_10x8_Format:us,RGBA_ASTC_12x10_Format:fs,RGBA_ASTC_12x12_Format:ds,RGBA_ASTC_4x4_Format:es,RGBA_ASTC_5x4_Format:ts,RGBA_ASTC_5x5_Format:ns,RGBA_ASTC_6x5_Format:is,RGBA_ASTC_6x6_Format:rs,RGBA_ASTC_8x5_Format:ss,RGBA_ASTC_8x6_Format:os,RGBA_ASTC_8x8_Format:as,RGBA_BPTC_Format:$i,RGBA_ETC2_EAC_Format:Qr,RGBA_PVRTC_2BPPV1_Format:$r,RGBA_PVRTC_4BPPV1_Format:Kr,RGBA_S3TC_DXT1_Format:Yi,RGBA_S3TC_DXT3_Format:ji,RGBA_S3TC_DXT5_Format:Ki,RGBFormat:Vo,RGB_BPTC_SIGNED_Format:ps,RGB_BPTC_UNSIGNED_Format:ms,RGB_ETC1_Format:Zr,RGB_ETC2_Format:Jr,RGB_PVRTC_2BPPV1_Format:jr,RGB_PVRTC_4BPPV1_Format:Yr,RGB_S3TC_DXT1_Format:qi,RGFormat:qo,RGIntegerFormat:Is,Ray:Zo,RedFormat:Cs,RedIntegerFormat:Ps,ReinhardToneMapping:lc,RenderTarget:Ac,RepeatWrapping:Ti,ReverseSubtractEquation:Vl,SIGNED_RED_GREEN_RGTC2_Format:xs,SIGNED_RED_RGTC1_Format:gs,SRGBColorSpace:mt,SRGBTransfer:nt,Scene:oa,ShaderChunk:qe,ShaderLib:Xt,ShaderMaterial:Ut,ShortType:ko,Source:Ko,Sphere:ii,SphereGeometry:Pi,SrcAlphaFactor:Nr,SrcAlphaSaturateFactor:ec,SrcColorFactor:jl,StaticDrawUsage:Ji,SubtractEquation:Gl,SubtractiveBlending:Ao,TangentSpaceNormalMap:Ds,Texture:_t,TorusGeometry:ks,Triangle:Ot,UVMapping:Bo,Uint16BufferAttribute:Qo,Uint32BufferAttribute:ea,UniformsLib:ge,UniformsUtils:Ic,UnsignedByteType:en,UnsignedInt248Type:Zn,UnsignedInt5999Type:Ho,UnsignedIntType:Rn,UnsignedShort4444Type:As,UnsignedShort5551Type:Rs,UnsignedShortType:wi,VSMShadowMap:Zt,Vector2:Ve,Vector3:B,Vector4:it,WebGLCoordinateSystem:Qt,WebGLCubeRenderTarget:Dc,WebGLRenderTarget:Cn,WebGLRenderer:Vc,WebGLUtils:Hc,WebGPUCoordinateSystem:Qi,ZeroFactor:ql,createCanvasElement:Tc},Symbol.toStringTag,{value:"Module"}));class f0 extends oa{constructor(){super();const e=new tn;e.deleteAttribute("uv");const t=new ei({side:gt}),n=new ei,r=new Ss(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new et(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new et(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new et(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new et(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const u=new et(e,n);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);const c=new et(e,n);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const h=new et(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new et(e,vi(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new et(e,vi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new et(e,vi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new et(e,vi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new et(e,vi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new et(e,vi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function vi(i){const e=new Qn;return e.color.setScalar(i),e}function Yn(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function pt(i,e=4,t=4){const n=Yn(i),r=[];for(let h=0;h<t;h++){const f=e<<h,p=new Float32Array(f*f);for(let g=0;g<p.length;g++)p[g]=n();r.push({P:f,g:p})}const s=4096,o=new Map,a=new Map;function l(h,f,p){let g=h.get(f);if(g)return g;g=new Float64Array(r.length*3);for(let _=0;_<r.length;_++){const m=r[_].P,d=f*m,M=Math.floor(d),y=d-M,x=(M%m+m)%m,T=(x+1)%m,E=_*3;g[E]=p?x*m:x,g[E+1]=p?T*m:T,g[E+2]=y*y*(3-2*y)}return h.size>=s&&h.delete(h.keys().next().value),h.set(f,g),g}let u=0,c=.5;for(let h=0;h<r.length;h++)u+=c,c*=.5;return(h,f)=>{const p=l(o,h,!1),g=l(a,f,!0);let _=0,m=.5;for(let d=0;d<r.length;d++){const M=r[d].g,y=d*3,x=p[y],T=p[y+1],E=p[y+2],R=g[y],C=g[y+1],v=g[y+2],S=M[R+x],L=M[R+T],D=M[C+x],F=M[C+T];_+=m*(S+(L-S)*E+(D-S)*v+(S-L-D+F)*E*v),m*=.5}return _/u}}function Kt(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,t}function nn(i,e=!0,t=!0){const n=new rr(i);return e&&(n.colorSpace=mt),t&&(n.wrapS=n.wrapT=Ti),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=Jt,n}function Ln(i,e){const t=i.getContext("2d"),n=t.createImageData(i.width,i.height),r=n.data,s=[0,0,0];for(let o=0;o<i.height;o++)for(let a=0;a<i.width;a++){e(a/i.width,o/i.height,s,a,o);const l=(o*i.width+a)*4;r[l]=s[0],r[l+1]=s[1],r[l+2]=s[2],r[l+3]=255}return t.putImageData(n,0,0),t}const Yt=(i,e=0,t=255)=>i<e?e:i>t?t:i;function bo(i,e,t,n={}){const r=n.size||512,s=Kt(r,r),o=pt(i,2,4),a=pt(i+7,8,3),l=pt(i+13,3,4),u=n.rings||9;return Ln(s,(c,h,f)=>{const p=o(c*.5,h)*3;let g=Math.sin((h*u+p)*Math.PI*2);g=Math.pow(Math.abs(g),.35);const _=a(c*.25,h*8),m=a(c*2,h*32%1);let d=.55*g+.3*_+.15*m;d=d*(.85+.3*l(c,h));for(let M=0;M<3;M++)f[M]=Yt(t[M]+(e[M]-t[M])*d)}),nn(s)}function d0(i){const t=Kt(1024,1024),n=Yn(i),r=8,s=[];for(let h=0;h<r;h++)s.push({off:n(),tone:.78+n()*.35,hue:n(),len:.45+n()*.3});const o=pt(i+3,2,4),a=pt(i+9,8,3),l=pt(i+11,3,4),u=[150,98,58],c=[78,46,24];return Ln(t,(h,f,p)=>{const g=Math.floor(f*r),_=s[g],m=f*r-g,d=(h+_.off)%1,M=Math.floor(d/_.len*2),y=d/_.len*2%1,x=_.tone*(M%2?.92:1.04)*(.96+.08*Math.sin(M*12.9+g)),T=o(h,f*.5+g*.13)*2.5;let E=Math.abs(Math.sin((m*3+T+M)*Math.PI*2));E=Math.pow(E,.4);const R=a(h*.5,f*4);let C=(.55*E+.45*R)*x;const v=l(h,f);C*=.9+.2*v;let S=Math.min(m,1-m)*64,L=Math.min(y,1-y)*260;const D=Math.min(1,S,L);for(let F=0;F<3;F++)p[F]=Yt((c[F]+(u[F]-c[F])*C)*(.25+.75*D)+(_.hue-.5)*(F===0?12:F===1?6:0))}),nn(t)}function _l(i,e){const n=Kt(512,512),r=pt(i,4,5),s=pt(i+1,16,2);return Ln(n,(o,a,l)=>{const u=r(o,a),c=s(o,a),h=.88+.16*u+.05*c;l[0]=Yt(e[0]*h),l[1]=Yt(e[1]*h),l[2]=Yt(e[2]*(h-.02))}),nn(n)}function p0(i){const t=Kt(512,512),n=pt(i,6,5),r=pt(i+4,24,2);return Ln(t,(s,o,a)=>{const l=Math.floor(o*4),u=(s+l%2*.5)%1,c=o*4-l,h=u*2-Math.floor(u*2),f=Math.min(1,Math.min(c,1-c)*40,Math.min(h,1-h)*60),p=(.8+.25*n(s,o)+.08*r(s,o))*(.55+.45*f);a[0]=Yt(196*p),a[1]=Yt(178*p),a[2]=Yt(150*p)}),nn(t)}function xl(i,e){const n=Kt(512,512),r=pt(i,64,2),s=pt(i+2,8,4),o=pt(i+5,3,4);return Ln(n,(a,l,u)=>{const c=r(a,l),f=Math.abs(s(a,l)-.5)<.015?.7:1,p=Math.max(0,o(a,l)-.52)*3.2,g=(.82+.3*c)*f;for(let _=0;_<3;_++){const m=e[_]+(_===0?70:_===1?52:36);u[_]=Yt((e[_]*(1-p)+m*p)*g)}}),nn(n)}function Eo(i,e,t){const r=Kt(256,256),s=pt(i,8,3);return Ln(r,(o,a,l,u,c)=>{const h=((u+c)%4<2?1:.92)*(u%2?1:.96),f=t&&Math.sin(o*Math.PI*2*6)>.6?.82:1,p=h*f*(.9+.15*s(o,a));for(let g=0;g<3;g++)l[g]=Yt(e[g]*p)}),nn(r)}function m0(i){const n=Kt(512,768),r=n.getContext("2d");r.fillStyle="#7a2a22",r.fillRect(0,0,512,768);const s=(h,f,p)=>{r.strokeStyle=p,r.lineWidth=f,r.strokeRect(h,h,512-h*2,768-h*2)};s(14,22,"#2a2440"),s(34,6,"#c9a46a"),s(52,26,"#3c4a5c"),s(70,5,"#c9a46a"),r.fillStyle="#d2b07a";for(let h=0;h<26;h++){const f=h/26,p=[[f*512,52],[460,f*768],[512-f*512,716],[52,768-f*768]];for(const[g,_]of p)r.save(),r.translate(g,_),r.rotate(Math.PI/4),r.fillRect(-5,-5,10,10),r.restore()}for(let h=110;h<668;h+=48)for(let f=110;f<412;f+=48)r.fillStyle=(f+h)%96===0?"#2f3a52":"#a8742f",r.save(),r.translate(f,h),r.rotate(Math.PI/4),r.fillRect(-7,-7,14,14),r.restore(),r.fillStyle="#e0c590",r.fillRect(f-2,h-2,4,4);r.save(),r.translate(512/2,768/2);const o=[[150,"#2a2440"],[130,"#c9a46a"],[118,"#3c4a5c"],[86,"#8e3a2a"],[60,"#d8bd85"],[36,"#2a2440"]];for(const[h,f]of o)r.fillStyle=f,r.beginPath(),r.ellipse(0,0,h*.75,h,0,0,Math.PI*2),r.fill();r.restore();const a=r.getImageData(0,0,512,768),l=pt(i+3,4,4),u=pt(i+5,64,1);for(let h=0;h<768;h++)for(let f=0;f<512;f++){const p=(h*512+f)*4,g=.78+.28*l(f/512,h/768)+.08*u(f/512,h/768),_=Math.max(0,l(f/512+.3,h/768)-.58)*1.6;for(let m=0;m<3;m++)a.data[p+m]=Yt(a.data[p+m]*g*(1-_)+150*_)}return r.putImageData(a,0,0),nn(n,!0,!1)}function g0(i){const n=Kt(512,256),r=n.getContext("2d"),s=Yn(i),o=pt(i,16,3);Ln(n,(u,c,h)=>{const f=200+40*o(u,c);h[0]=h[1]=h[2]=f});const a="#d9a94a",l=32;for(let u=0;u<8;u++){const c=u*l;r.save(),r.beginPath(),r.rect(c,0,l,256),r.clip();const h=r.createLinearGradient(c,0,c+l,0);if(h.addColorStop(0,"rgba(0,0,0,0.35)"),h.addColorStop(.2,"rgba(0,0,0,0)"),h.addColorStop(.8,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,0.35)"),r.fillStyle=h,r.fillRect(c,0,l,256),r.fillStyle=a,u===0&&(r.fillRect(c,14,l,2),r.fillRect(c,240,l,2)),u===1){for(const f of[40,90,140,190])r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(c,f,l,6),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(c,f,l,2);r.fillStyle="#2a1a14",r.fillRect(c+3,52,l-6,30),r.fillStyle=a;for(let f=0;f<3;f++)r.fillRect(c+7,60+f*7,l-14-s()*6,2)}if(u===2){for(let f=0;f<6;f++)r.fillRect(c+8,50+f*9,l-16-s()*8,3);r.fillRect(c,226,l,6)}if(u===3){r.fillStyle="rgba(0,0,0,0.5)",r.fillRect(c,0,l,34),r.fillRect(c,222,l,34),r.fillStyle=a,r.fillRect(c,34,l,2),r.fillRect(c,220,l,2);for(let f=0;f<4;f++)r.fillRect(c+9,80+f*8,l-18,2)}if(u===4){r.fillStyle="rgba(255,255,255,0.25)",r.fillRect(c,0,l,256),r.fillStyle="rgba(20,20,20,0.75)";for(let f=0;f<10;f++)r.fillRect(c+12,40+f*12,3+s()*4,7)}if(u===5){for(const f of[8,16,24,230,238,246])r.fillRect(c,f,l,2);for(let f=0;f<5;f++)r.beginPath(),r.arc(c+l/2,60+f*30,3,0,Math.PI*2),r.fill();r.fillStyle="#1d1d1d",r.fillRect(c+4,34,l-8,18),r.fillStyle=a,r.fillRect(c+8,41,l-16,3)}if(u===6){r.fillStyle="rgba(255,255,255,0.3)";for(let f=0;f<40;f++)r.fillRect(c+s()*l,s()<.5?s()*30:256-s()*30,2+s()*4,1+s()*2);r.fillStyle=a,r.fillRect(c+10,70,l-20,3)}u===7&&(r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(c,20,l,10),r.fillRect(c,226,l,10),r.fillStyle="rgba(240,235,220,1)",r.fillRect(c+5,60,l-10,34),r.fillStyle="rgba(40,30,20,0.8)",r.fillRect(c+8,70,l-16,2),r.fillRect(c+8,78,l-18,2)),r.restore()}for(let u=256;u<384;u++){const c=215+(Math.sin(u*2.7)*.5+.5)*30*s();r.fillStyle=`rgb(${c},${c},${c-4})`,r.fillRect(u,0,1,256)}return nn(n,!0,!1)}function _0(i){const t=Kt(512,512),n=t.getContext("2d"),r=Yn(i);return[["#d8b27a","#8a6a4a","#4b5a3a","#2e3a2a"],["#9fb3c0","#6a7a6a","#3e4a3a","#22281e"],["#e8c28a","#b07a4a","#5a3a2a","#2a1e18"],["#7a8aa0","#5a6058","#3a3a30","#1e1e18"]].forEach((o,a)=>{const l=a%2*256,u=Math.floor(a/2)*256,c=n.createLinearGradient(0,u,0,u+256);c.addColorStop(0,o[0]),c.addColorStop(.55,o[1]),c.addColorStop(1,o[3]),n.fillStyle=c,n.fillRect(l,u,256,256);for(let f=0;f<3;f++){n.fillStyle=o[1+f],n.beginPath(),n.moveTo(l,u+256);const p=120+f*45;for(let g=0;g<=16;g++)n.lineTo(l+g*16,u+p+Math.sin(g*.7+f*2+a)*18+r()*10);n.lineTo(l+256,u+256),n.fill()}a===2&&(n.fillStyle="rgba(255,230,170,0.8)",n.beginPath(),n.arc(l+180,u+90,18,0,7),n.fill());const h=n.createRadialGradient(l+128,u+128,40,l+128,u+128,190);h.addColorStop(0,"rgba(60,40,10,0)"),h.addColorStop(1,"rgba(40,25,5,0.55)"),n.fillStyle=h,n.fillRect(l,u,256,256)}),nn(t,!0,!1)}function x0(i){const n=Kt(512,256),r=pt(i,4,5);return Ln(n,(s,o,a)=>{const l=r(s,o*.5+.2)>.53,u=Math.abs(o-.5),c=Math.abs(s*24%1)<.03||Math.abs(o*12%1)<.04?.82:1;l?(a[0]=196*c,a[1]=168*c,a[2]=112*c):(a[0]=(150-u*60)*c,a[1]=(140-u*40)*c,a[2]=(100-u*20)*c)}),nn(n,!0,!1)}function v0(){const i=Kt(64,64),e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new rr(i)}function la(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new ct;let u=0;for(let c=0;c<i.length;++c){const h=i[c];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(t){let c=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+c);c+=i[f].attributes.position.count}l.setIndex(h)}for(const c in s){const h=vl(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<h;++f){const p=[];for(let _=0;_<o[c].length;++_)p.push(o[c][_][f]);const g=vl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function vl(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){const c=i[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const o=new e(s),a=new yt(o,t,n);let l=0;for(let u=0;u<i.length;++u){const c=i[u];if(c.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=c.count;f<p;f++)for(let g=0;g<t;g++){const _=c.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(c.array,l);l+=c.count*t}return r!==void 0&&(a.gpuType=r),a}const Ml=new Pt,yl=new jt;function $c(i,e,t,n,r){const s=new tn(i,e,t),o=s.attributes.uv,a=r(),l=r(),u=[[t,e],[t,e],[i,t],[i,t],[i,e],[i,e]];for(let c=0;c<6;c++){const[h,f]=u[c],p=f>h;for(let g=0;g<4;g++){const _=c*4+g;let m=o.getX(_)*h,d=o.getY(_)*f;if(p){const M=m;m=d,d=M}o.setXY(_,m/n+a,d/n+l)}}return s}class Zc{constructor(e){this.rand=e,this.batches=new Map,this.solids=[]}add(e,t){this.batches.has(e)||this.batches.set(e,[]),this.batches.get(e).push(t)}frame(e,t,n,r=0){return new Gs(this,new Ke().makeRotationY(r).setPosition(e,t,n))}finish(e){for(const[t,n]of this.batches){for(const o of n)for(const a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);const r=la(n,!1),s=new et(r,t);s.castShadow=!t.userData.noShadow,s.receiveShadow=!0,s.matrixAutoUpdate=!1,e.add(s);for(const o of n)o.dispose()}this.batches.clear()}}class Gs{constructor(e,t){this.b=e,this.m=t}sub(e,t,n,r=0){return new Gs(this.b,this.m.clone().multiply(new Ke().makeRotationY(r).setPosition(e,t,n)))}local(e,t,n,r=0,s=0,o=0){return Ml.set(r,s,o),yl.setFromEuler(Ml),new Ke().compose(new B(e,t,n),yl,new B(1,1,1)).premultiply(this.m)}geo(e,t,n,r,s,o,a,l){t.applyMatrix4(this.local(n,r,s,o,a,l)),this.b.add(e,t)}box(e,t,n,r,s,o,a,l=0,u=0,c=0){this.geo(e,$c(t,n,r,e.userData.ts||1,this.b.rand),s,o,a,l,u,c)}cyl(e,t,n,r,s,o,a,l=12,u=0,c=0,h=0,f=!1,p,g){const _=new sr(t,n,r,l,1,f,p||0,g||Math.PI*2),m=e.userData.ts||1,d=_.attributes.uv,M=Math.PI*2*Math.max(t,n);for(let y=0;y<d.count;y++)d.setXY(y,d.getY(y)*r/m,d.getX(y)*M/m);this.geo(e,_,s,o,a,u,c,h)}sphere(e,t,n,r,s,o=1,a=1,l=1,u=12,c=8){const h=new Pi(t,u,c);h.scale(o,a,l),this.geo(e,h,n,r,s)}torus(e,t,n,r,s,o,a=0,l=0,u=0,c=32){this.geo(e,new ks(t,n,6,c),r,s,o,a,l,u)}plane(e,t,n,r,s,o,a=0,l=0,u=0,c=null){const h=new mn(t,n);if(c){const f=h.attributes.uv;for(let p=0;p<f.count;p++)f.setXY(p,c[0]+f.getX(p)*c[2],c[1]+f.getY(p)*c[3])}this.geo(e,h,r,s,o,a,l,u)}solid(e,t,n,r,s,o){const a=this.local(r,s,o),l=new B,u=new B(1/0,1/0,1/0),c=new B(-1/0,-1/0,-1/0);for(let h=0;h<8;h++)l.set((h&1?.5:-.5)*e,(h&2?.5:-.5)*t,(h&4?.5:-.5)*n).applyMatrix4(a),u.min(l),c.max(l);this.b.solids.push({x0:u.x,x1:c.x,y0:u.y,y1:c.y,z0:u.z,z1:c.z})}sbox(e,t,n,r,s,o,a){this.box(e,t,n,r,s,o,a),this.solid(t,n,r,s,o,a)}}function M0(){const i=(c,h)=>{const f=new ei(c);return f.userData.ts=h||1,f},e=bo(1,[118,70,38],[48,26,12],{rings:16}),t=bo(2,[184,124,70],[104,62,30],{rings:15}),n=bo(3,[84,50,30],[34,18,10],{rings:11}),r=d0(4),s=_l(5,[232,214,184]),o=_l(6,[150,158,124]),a=xl(7,[100,34,22]),l=xl(8,[92,56,30]),u=p0(9);return{walnut:i({map:e,bumpMap:e,bumpScale:.6,roughness:.6,color:16777215},1.3),oak:i({map:t,bumpMap:t,bumpScale:.5,roughness:.48},1.6),dark:i({map:n,bumpMap:n,bumpScale:.5,roughness:.55},1.2),floor:i({map:r,bumpMap:r,bumpScale:1.2,roughness:.42},1.9),plaster:i({map:s,bumpMap:s,bumpScale:1.5,roughness:.94},3),sage:i({map:o,bumpMap:o,bumpScale:1.5,roughness:.92},2.5),ceil:i({map:s,roughness:.95,color:15919320},4),leather:i({map:a,bumpMap:a,bumpScale:1.2,roughness:.5},.9),leather2:i({map:l,bumpMap:l,bumpScale:1.2,roughness:.55},.9),stone:i({map:u,bumpMap:u,bumpScale:2,roughness:.88},1.4),iron:i({color:1841946,metalness:.75,roughness:.48}),brass:i({color:11831880,metalness:1,roughness:.32}),gilt:i({color:10122294,metalness:.8,roughness:.42}),soot:i({color:920587,roughness:1}),cushion:i({map:Eo(10,[150,128,92],!0),roughness:.95},.5),cushion2:i({map:Eo(11,[70,88,70],!1),roughness:.95},.4),runner:i({map:Eo(12,[118,34,28],!0),roughness:.95},.6),paper:i({color:15129280,roughness:.9}),ceramic:i({color:15525590,roughness:.25}),terracotta:i({color:10246714,roughness:.85}),plant:i({color:4086828,roughness:.75,side:Rt}),greenGlass:i({color:1993264,emissive:3971642,emissiveIntensity:.55,roughness:.15,metalness:.1,side:Rt}),shade:i({color:15390376,emissive:16757865,emissiveIntensity:.9,roughness:.9,side:Rt}),flame:Object.assign(new Qn({color:new Ne(2.4,1.6,.7)}),{userData:{noShadow:!0}}),ember:Object.assign(new Qn({color:new Ne(2.2,.7,.2)}),{userData:{noShadow:!0}}),rug:i({map:m0(13),roughness:1}),painting:i({map:_0(14),roughness:.55}),globe:i({map:x0(15),roughness:.4})}}const Uo={H:10.5,GY:4.2},me=.012;function y0(i,e,t){const n=new Zc(t),r=n.frame(0,0,0,0),s=Uo.H,o=Uo.GY,a=[],l=[],u=[],c=t;function h(w,N,I,O,X,te,Z,ne,se){const Re=[N,I];for(const Ae of ne)Re.push(Ae[0],Ae[1]);const Le=[...new Set(Re)].sort((Ae,z)=>Ae-z);for(let Ae=0;Ae<Le.length-1;Ae++){const z=Le[Ae],ke=Le[Ae+1],Ee=ne.filter(De=>De[0]<=z&&De[1]>=ke).sort((De,be)=>De[2]-be[2]);let Te=te;const _e=(De,be)=>{be-De<.001||(w==="x"?r.sbox(se,X-O,be-De,ke-z,(O+X)/2,(De+be)/2,(z+ke)/2):r.sbox(se,ke-z,be-De,X-O,(z+ke)/2,(De+be)/2,(O+X)/2))};for(const De of Ee)_e(Te,De[2]),Te=De[3];_e(Te,Z)}}r.sbox(i.floor,14,.3,19,0,-.15,-.5),r.box(i.ceil,15,.3,20,0,s+.15,-.5),h("z",-7.5,7.5,-10.5,-10,0,s,[],i.plaster),h("x",-10.5,9.5,7,7.5,0,s,[],i.plaster),h("z",-7.5,7.5,9,9.5,0,s,[[-5,-3,4.5,8.3],[2.6,4.6,4.5,8.3]],i.plaster),h("x",-10.5,9.5,-7.5,-7,0,s,[[-5.6,-3.6,.9,7.2],[-1.6,.4,.9,7.2],[2.4,7.4,0,3.4],[3.2,6.6,5,8]],i.plaster),r.sbox(i.floor,4.5,.3,5,-9.25,-.15,4.9),r.box(i.ceil,5,.3,6,-9.5,3.75,4.9),r.box(i.plaster,5.4,.3,6.6,-9.75,4.05,4.9),h("z",-12,-7.5,1.9,2.4,0,3.6,[[-10.4,-8.6,.9,2.9]],i.sage),h("z",-12,-7.5,7.4,7.9,0,3.6,[[-10.4,-8.6,.9,2.9]],i.sage),h("x",1.9,7.9,-12,-11.5,0,3.6,[[2.9,6.9,.6,3]],i.sage);const g=-7+me;for(const w of[3.2,4.9,6.6])r.box(i.dark,4-2*me,.18,.14,-9.5,3.6-.09-me,w);r.box(i.oak,.3,.3,5.2,g+.15,3.45,4.9);function _(w,N,I,O,X=!0){const te=[t(),t()];function Z(Ae,z,ke){let Ee=0;return $c(Ae,.05,z,i.oak.userData.ts,()=>te[Ee++]).translate(0,.025+me,ke)}const ne=[Z(N+.3,.14,.07+me),Z(N-2*me,O,-O/2+me)];w.geo(i.oak,la(ne,!1),0,0,0);for(const Ae of ne)Ae.dispose();w.box(i.oak,.12+me,I+.12,.06,-N/2-.06+me/2,I/2,.03+me),w.box(i.oak,.12+me,I+.12,.06,N/2+.06-me/2,I/2,.03+me),w.box(i.oak,N+.36,.14+me,.07,0,I+.07-me/2,.035+me);const se=-O*.55;w.box(i.dark,N-2*me,.07,.07,0,.06,se),w.box(i.dark,N-2*me,.07,.07,0,I-.035-me,se),w.box(i.dark,.07,I-2*me,.07,-N/2+.035+me,I/2,se),w.box(i.dark,.07,I-2*me,.07,N/2-.035-me,I/2,se);const Re=Math.max(1,Math.round(N/.62));for(let Ae=1;Ae<Re;Ae++)w.box(i.iron,.03,I,.035,-N/2+N*Ae/Re,I/2,se);const Le=Math.max(1,Math.round(I/.55));for(let Ae=1;Ae<Le;Ae++)w.box(Ae%4===0?i.dark:i.iron,N-2*me,Ae%4===0?.06:.025,.035,0,I*Ae/Le,se);if(X){const Ae=[];for(const[z,ke]of[[-N/2,0],[N/2,0],[N/2,I],[-N/2,I]])Ae.push(new B(z,ke,se).applyMatrix4(w.m));u.push(Ae)}}_(r.sub(-7,.9,-4.6,Math.PI/2),2,6.3,.5),_(r.sub(-7,.9,-.6,Math.PI/2),2,6.3,.5),_(r.sub(-7,5,4.9,Math.PI/2),3.4,3,.5),_(r.sub(-11.5,.6,4.9,Math.PI/2),4,2.4,.5),_(r.sub(-9.5,.9,7.4,Math.PI),1.8,2,.5),_(r.sub(-9.5,.9,2.4,0),1.8,2,.5,!1),_(r.sub(-4,4.5,9,Math.PI),2,3.8,.5),_(r.sub(3.6,4.5,9,Math.PI),2,3.8,.5);for(const w of[2.33,7.47])r.box(i.oak,.14,3.5+me,.6,-7+.07+me,(3.5-me)/2,w);for(const w of[-4.6,-.6])r.box(i.dark,.04,.85,2,-6.98+me,.45,w);r.box(i.dark,.05,1,2.2-me,7-.025-me,.5,7.85-me/2),r.box(i.oak,.08,.06,2.3-me,6.96-me,1.02,7.85-me/2);for(const[w,N,I,O]of[[14,.3,0,-9.85],[14,.3,0,8.85],[.3,19,-6.85,-.5],[.3,19,6.85,-.5]]){const X=I&&I-Math.sign(I)*me,te=O===-.5?O:O-Math.sign(O)*me;r.box(i.oak,w>1?w-2*me:w,.22,N>1?N-2*me:N,X,s-.11-me,te),r.box(i.dark,w>1?w-2*me:w+.1,.08,N>1?N-2*me:N+.12,X-(I?Math.sign(I)*.05:0),s-.26,te-(O===-.5?0:Math.sign(O)*.06))}r.box(i.oak,.12,.1,19-2*me,-6.94+me,8.4,-.5),r.box(i.oak,14-2*me,.1,.12,0,8.4,8.94-me),r.box(i.oak,.12,.1,19-2*me,6.94-me,8.4,-.5);for(const w of[-4.6,-.6]){r.cyl(i.iron,.02,.02,2.9,-6.82,7.55,w,8,Math.PI/2,0,0);for(const N of[-1,1]){r.sphere(i.iron,.045,-6.82,7.55,w+N*1.45),r.box(i.iron,.12,.03,.03,-6.9,7.55,w+N*1.3);for(let I=0;I<4;I++)r.box(i.cushion2,.05+I%2*.03,4.85-I*.12,.05,-6.86+I%2*.03,5.08+I*.06,w+N*(1.04+I*.035),0,0,0);r.cyl(i.brass,.012,.012,.2,-6.8,3.4,w+N*1.1,6,Math.PI/2,0,0)}}for(const w of[-8.2,-4.6,-1,2.6,6.2]){r.box(i.dark,14-2*me,.38,.3,0,9.85,w),r.box(i.dark,.24,.6,.24,0,10.2-me,w);for(const N of[-1,1]){const I=(.2*Math.cos(.62)+1.4*Math.sin(.62))/2;r.box(i.dark,.2,1.4,.22,N*(7-me-I),9.2,w,0,0,N*.62),r.box(i.iron,.36,.42,.32,N*3.4,9.85,w),r.box(i.dark,.25,.7,.32,N*(7-.125-me),9.2,w)}}for(const w of[-3.4,3.4])r.box(i.dark,.2,.24,19-2*me,w,10.25,-.5);r.sbox(i.floor,14,.35,3,0,o-.175,-8.5),r.sbox(i.floor,2.8,.35,5.8,5.6,o-.175,-4.1);for(let w=-6.6;w<4.2;w+=.9)r.box(i.dark,.12,.24,3-me,w,o-.47,-8.5+me/2);for(let w=-6.6;w<-1.2;w+=.9)r.box(i.dark,2.8-me,.24,.12,5.6-me/2,o-.47,w);r.box(i.oak,11.31-me,.55,.24,-1.345+me/2,o-.27,-6.9),r.box(i.oak,.24,.55,5.9,4.3,o-.27,-4.15),r.box(i.dark,11.31-me,.06,.3,-1.345+me/2,o-.02,-6.9),r.box(i.dark,.3,.06,5.9,4.3,o-.02,-4.15);const m=[[-4.6,-6.9,"x"],[-1.4,-6.9,"x"],[1.8,-6.9,"x"],[4.3,-6.9,"c"],[4.3,-4.1,"z"],[4.3,-1.35,"z"]];for(const[w,N,I]of m){r.cyl(i.iron,.07,.085,o-.55,w,(o-.55)/2,N,14),r.box(i.iron,.24,.16,.24,w,.08,N),r.box(i.iron,.26,.1,.26,w,o-.6,N),r.cyl(i.iron,.11,.07,.18,w,o-.75,N,14),r.solid(.26,o-.5,.26,w,(o-.5)/2,N);const O=I==="x"?[[1,0],[-1,0]]:I==="z"?[[0,1],[0,-1]]:[[-1,0],[0,1]];for(const[X,te]of O)r.box(i.iron,.04,.9,.04,w+X*.3,o-.88,N+te*.3,te*.72,0,-X*.72),r.torus(i.iron,.12,.012,w+X*.22,o-.75,N+te*.22,0,X?0:Math.PI/2,0,16)}function d(w,N,I,O,X,te=2.4,Z){const ne=Math.hypot(I-w,O-N),se=Math.atan2(-(O-N),I-w),Re=r.sub(w,X,N,se);Re.box(i.oak,ne+.06,.07,.13,ne/2,1.02,0),Re.box(i.iron,ne,.04,.05,ne/2,.97,0),Re.box(i.iron,ne,.04,.05,ne/2,.1,0);const Le=Math.round((Z||ne)/.13);for(let Ee=1;Ee<Le;Ee++){const Te=ne*Ee/Le;Re.box(i.iron,.02,.86,.02,Te,.53,0),Ee%3===0&&Re.sphere(i.iron,.025,Te,.45,0)}const Ae=Math.max(1,Math.round(ne/te));for(let Ee=0;Ee<=Ae;Ee++){const Te=ne*Ee/Ae;Re.box(i.oak,.11,1.12,.11,Te,.56,0),Re.sphere(i.oak,.065,Te,1.16,0,1,.8,1)}const z=Z?r.sub(-7,X,N,se):Re,ke=Z||ne;z.solid(ke,1.1,.16,ke/2,.55,0)}d(-7+.065+me,-6.92,4.3,-6.92,o,2.4,11.3),d(4.3,-6.92,4.3,-1.25,o,1.9),r.box(i.oak,.08,.3,3-me,-6.96+me,o+.1,-8.5+me/2);const M=o/24,y=.3,x=4.2,T=7,E=6.7,R=(x+T)/2,C=T-x,v=[];for(let w=1;w<=11;w++)v.push({y:w*M,z0:E-w*y,z1:E-(w-1)*y});v.push({y:12*M,z0:2.1,z1:3.4,landing:!0});for(let w=13;w<=23;w++)v.push({y:w*M,z0:2.1-(w-12)*y,z1:2.1-(w-13)*y});for(const w of v){const N=w.z1-w.z0,I=(w.z0+w.z1)/2;r.box(i.dark,C-me,w.y-.045,N,R-me/2,(w.y-.045)/2,I),r.box(i.oak,C+.03-me,.045,N+.035,R-.015-me/2,w.y-.0225,I+.0175),r.solid(C,w.y,N,R,w.y/2,I),r.box(i.runner,1.5,.012,N,R+.15,w.y+.006,I+.01),r.box(i.runner,1.5,M-.03,.012,R+.15,w.y-M/2-.02,w.z1+.007),r.cyl(i.brass,.008,.008,1.62,R+.15,w.y-M+.012,w.z1+.02,6,0,0,Math.PI/2);const O=w.landing?9:2;for(let X=0;X<O;X++){const te=w.z0+N*(X+.5)/O;r.box(i.iron,.022,.9,.022,x+.07,w.y+.45,te)}r.solid(.16,1.05,N,x+.07,w.y+.52,I)}const S=Math.atan(M/y),L=[[E,0,E-11*y,11*M],[2.1,12*M,-1.2,23*M]];for(const[w,N,I,O]of L){const X=Math.hypot(w-I,O-N),te=(w+I)/2,Z=(N+O)/2;r.box(i.oak,.13,.07,X,x+.07,Z+1,te,S,0,0),r.box(i.iron,.05,.04,X,x+.07,Z+.95,te,S,0,0),r.box(i.oak,.07,.32,X+.2,x-.02,Z+.02,te-.05,S,0,0)}r.box(i.oak,.13,.07,1.3,x+.07,12*M+1,2.75);for(const[w,N]of[[E-.12,0],[3.4,11*M],[2.1,12*M],[-1.25,o]])r.box(i.oak,.16,1.25,.16,x+.07,N+.62,w),r.box(i.oak,.2,.06,.2,x+.07,N+1.26,w),r.sphere(i.oak,.08,x+.07,N+1.35,w);r.solid(.2,1.25,.2,x+.07,.62,E-.12);function D(w,N,I,O,X={}){const te=Math.max(1,Math.round(N/(X.bay||.92))),Z=N/te,ne=X.spacing||.38,se=.14,Re=Math.floor((I-se-.12)/ne),Le=(I-se-.12)/Re;w.box(i.dark,N,se,O-.03,N/2,se/2,-O/2-.015),w.box(i.walnut,N,I,.02,N/2,I/2,-O+.01);function Ae(z,ke,Ee,Te,_e,De){const be=X.wallLeft?me:-ke/2,P=X.wallRight?N-me:N+ke/2;w.box(z,P-be,Ee,Te,(be+P)/2,_e,De)}Ae(i.walnut,.06,.07,O+.05,I-.035,-O/2+.025),Ae(i.walnut,.12,.05,O+.09,I+.025,-O/2+.045),X.noCornice||Ae(i.dark,.02,.1,.03,I-.12,.01);for(let z=0;z<=te;z++){const ke=Math.min(N-.02,Math.max(.02,z*Z));w.box(i.walnut,.04,I-.07,O,ke,(I-.07)/2,-O/2);const Ee=z===0&&X.wallLeft?.03+me:z===te&&X.wallRight?N-.03-me:ke;w.box(i.dark,.06,I-.2,.015,Ee,I/2-.05,.005)}for(let z=0;z<te;z++){const ke=z*Z+.02,Ee=(z+1)*Z-.02,Te=(c()-.5)*.04;for(let _e=0;_e<=Re;_e++){const De=se+_e*Le+(_e>0&&_e<Re?Te:0);if(_e>0&&_e<Re+1&&w.box(i.walnut,Ee-ke,.026,O-.025,(ke+Ee)/2,De-.013,-O/2-.0125),_e<Re){const P=se+(_e+1)*Le+(_e+1<Re?Te:0)-De-.026-.005,b=X.sparse?.8:.97;c()<b&&a.push({m:w.local(ke+.005,De,-.012),len:Ee-ke-.01,clear:P,d:O-.04})}}}X.solid!==!1&&w.solid(N,I+.05,O,N/2,I/2,-O/2)}D(r.sub(-7,0,-9.6,0),14,3.45,.4,{wallLeft:!0,wallRight:!0}),D(r.sub(-6.6,0,-5.75,Math.PI/2),3.85,3.45,.4),D(r.sub(6.6,0,-9.6,-Math.PI/2),8.4,3.45,.4,{spacing:.4}),D(r.sub(-6.6,0,-1.7,Math.PI/2),1.8,2.4,.36,{spacing:.36}),D(r.sub(-6.6,0,2.3,Math.PI/2),1.8,2.4,.36,{spacing:.42}),D(r.sub(-1.4,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.4,wallRight:!0}),D(r.sub(7,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.37,wallLeft:!0}),D(r.sub(-7,o,-9.6,0),14,3.8,.4,{spacing:.4,wallLeft:!0,wallRight:!0}),D(r.sub(-6.6,o,-7,Math.PI/2),2.6,3.8,.4,{spacing:.4}),D(r.sub(6.6,o,-9.6,-Math.PI/2),8.4,3.8,.4,{spacing:.39});for(const w of[-5,-2.4]){D(r.sub(-4.3,0,w+.3,0),4,2.25,.3,{spacing:.36,solid:!1}),D(r.sub(-.3,0,w-.3,Math.PI),4,2.25,.3,{spacing:.36,solid:!1}),r.solid(4.1,2.3,.62,-2.3,1.15,w);for(const N of[-4.33,-.27])r.box(i.oak,.06,2.3,.66,N,1.15,w);r.box(i.oak,4.14,.05,.7,-2.3,2.3,w)}D(r.sub(-10.6,0,2.75,0),2.2,.85,.35,{bay:.75,noCornice:!0}),D(r.sub(-8.4,0,7.05,Math.PI),2.2,.85,.35,{bay:.75,noCornice:!0});function F(w,N,I){r.cyl(i.iron,.016,.016,13.6,0,w+I-.15,-9.47,8,0,0,Math.PI/2);for(let se=-6.4;se<=6.4;se+=2.13)r.box(i.iron,.03,.03,.14,se,w+I-.15,-9.53);const O=-9.45,X=-8.35,te=Math.hypot(X-O,I),Z=-Math.atan((X-O)/I);for(const se of[-.22,.22])r.box(i.oak,.05,te,.08,N+se,w+I/2,(O+X)/2,Z,0,0);const ne=Math.floor(te/.28);for(let se=1;se<ne;se++){const Re=se/ne;r.cyl(i.iron,.014,.014,.44,N,w+Re*I,X+(O-X)*Re,8,0,0,Math.PI/2)}for(const se of[-.22,.22])r.cyl(i.iron,.035,.035,.04,N+se,w+.035,X,10,0,0,Math.PI/2),r.box(i.iron,.02,.14,.02,N+se,w+I-.08,O-.02);r.solid(.6,1.2,.45,N,w+.6,X-.15)}F(0,-2.6,3.3),F(o,2.2,3.4);function U(w,N,I=.9,O=!0){const X=I,te=.86;w.box(N,X,.3,te,0,.27,0),w.box(N,X-.3,.13,te-.24,0,.48,.06);for(const ne of[-1,1])w.box(N,.16,.36,te-.05,ne*(X/2-.08),.6,.02),w.cyl(N,.095,.095,te-.02,ne*(X/2-.07),.78,.03,12,Math.PI/2,0,0),w.cyl(i.dark,.03,.022,.12,ne*(X/2-.07),.06,te/2-.08,8),w.cyl(i.dark,.03,.022,.12,ne*(X/2-.07),.06,-te/2+.08,8),O&&w.box(N,.1,.45,.3,ne*(X/2-.06),1.05,-te/2+.2);const Z=O?1.12:.9;w.box(N,X-.04,Z-.4,.2,0,.4+(Z-.4)/2,-te/2+.1,-.08,0,0),w.cyl(N,.09,.09,X-.06,0,Z,-te/2+.12,12,0,0,Math.PI/2);for(let ne=0;ne<3;ne++)for(let se=0;se<Math.round(X/.22);se++){const Re=Math.round(X/.22);w.sphere(i.iron,.012,-X/2+.13+(X-.26)*(se+ne%2*.5)/Re,.62+ne*.13,-te/2+.215,1,1,.6,6,4)}w.solid(X,.95,te,0,.47,0)}function j(w){w.box(i.oak,.44,.04,.42,0,.46,0);for(const[N,I]of[[-.19,.18],[.19,.18],[-.19,-.18],[.19,-.18]])w.cyl(i.oak,.02,.018,.44,N,.22,I,8);for(const N of[-.19,.19])w.box(i.oak,.035,.5,.035,N,.72,-.19,-.1,0,0);w.box(i.oak,.42,.08,.03,0,.94,-.215,-.1,0,0);for(let N=-1;N<=1;N++)w.box(i.oak,.03,.36,.02,N*.1,.72,-.2,-.1,0,0);w.box(i.oak,.38,.02,.02,0,.12,0),w.box(i.leather2,.36,.03,.34,0,.495,.01),w.solid(.44,.95,.44,0,.47,0)}function H(w,N,I,O,X=0){w.cyl(i.brass,.07,.08,.025,N,I+.012,O,16),w.cyl(i.brass,.01,.01,.3,N,I+.17,O,8),w.cyl(i.brass,.012,.012,.12,N,I+.32,O,6,0,X,Math.PI/2),w.cyl(i.greenGlass,.1,.1,.3,N,I+.34,O,16,0,X,Math.PI/2,!1,0,Math.PI),w.sphere(i.flame,.03,N,I+.31,O,1.6,.6,1)}function q(w,N,I,O,X=1){w.cyl(i.ceramic,.06*X,.09*X,.25*X,N,I+.125*X,O,16),w.cyl(i.brass,.01,.01,.15*X,N,I+.3*X,O,6),w.cyl(i.shade,.1*X,.17*X,.2*X,N,I+.42*X,O,20,0,0,0,!0)}function Y(w,N,I,O,X,te,Z){w.box(i.gilt,N+2*.07,.07,.05,O,X+I/2+.07/2,te),w.box(i.gilt,N+2*.07,.07,.05,O,X-I/2-.07/2,te),w.box(i.gilt,.07,I,.05,O-N/2-.07/2,X,te),w.box(i.gilt,.07,I,.05,O+N/2+.07/2,X,te),w.plane(i.painting,N,I,O,X,te,0,0,0,[Z%2*.5,Math.floor(Z/2)*.5,.5,.5])}function re(w,N,I,O,X,te){e.stack(w.m,N,I,O,X,te)}function he(w,N,I,O,X=.18){w.cyl(i.brass,.045,.06,.02,N,I+.01,O,12),w.cyl(i.brass,.012,.02,.2,N,I+.11,O,8),w.cyl(i.brass,.03,.02,.03,N,I+.22,O,10),w.cyl(i.paper,.016,.016,X,N,I+.235+X/2,O,8),w.sphere(i.flame,.012,N,I+.25+X,O,1,2,1,6,4)}{const w=r.sub(-.5,0,1.9,0);w.box(i.oak,1.25,.06,3.9,0,.75,0),w.box(i.dark,1.05,.13,3.6,0,.655,0);for(const I of[-1.75,0,1.75])for(const O of[-.5,.5])w.cyl(i.dark,.05,.04,.6,O,.32,I,10),w.sphere(i.dark,.06,O,.45,I,1,.8,1,10,6);w.box(i.dark,.06,.06,3.4,0,.14,0),w.solid(1.25,.8,3.9,0,.4,0),H(w,0,.78,-.95,Math.PI/2),H(w,0,.78,.95,Math.PI/2),l.push({p:new B(-.5,1.15,1.9),c:16761466,i:5.5,d:9}),re(w,.35,.78,-1.5,4,.2),re(w,-.38,.78,1.55,3,-.4),re(w,.4,.78,.4,2,1.2),w.box(i.leather,.44,.012,.3,-.15,.786,-.25,0,.1,0),w.box(i.paper,.2,.025,.28,-.255,.8,-.26,0,.1,.06),w.box(i.paper,.2,.025,.28,-.055,.8,-.24,0,.1,-.06),w.box(i.paper,.21,.004,.29,.3,.783,.9,0,-.3,0),w.cyl(i.iron,.03,.03,.05,.42,.805,.95,10),w.cyl(i.brass,.002,.002,.18,.4,.86,.95,4,0,0,.4);const N=[[-.88,-1.2,Math.PI/2],[-.92,.05,Math.PI/2+.15],[-.86,1.25,Math.PI/2],[.86,-1.25,-Math.PI/2],[1.15,.1,-Math.PI/2-.4],[.88,1.2,-Math.PI/2]];for(const[I,O,X]of N)j(w.sub(I,0,O,X))}{const w=new mn(3.4,5.6);w.rotateX(-Math.PI/2),r.geo(i.rug,w,-.5,.008,1.9);const N=new mn(3.4,5.2);N.rotateX(-Math.PI/2),N.rotateY(Math.PI/2),r.geo(i.rug,N,0,.008,6.8);const I=new mn(2.2,3.2);I.rotateX(-Math.PI/2),r.geo(i.rug,I,-9.4,.008,4.9)}{const w=r.sub(0,0,9,Math.PI);w.box(i.stone,2.7,.08,.75,0,.04,.37);for(const N of[-1,1])w.box(i.stone,.38,1.28,.38,N*.96,.64,.19);w.box(i.stone,2.3,.36,.4,0,1.46,.2),w.box(i.dark,2.7,.08,.48,0,1.68,.24),w.box(i.plaster,2.3,3,.3,0,3.22,.15),w.box(i.soot,1.56,1.28,.04,0,.64,.02),w.box(i.soot,1.56,.02,.38,0,.09,.19);for(let N=0;N<6;N++)w.box(i.iron,.025,.25,.025,-.4+N*.16,.24,.3);w.box(i.iron,.9,.03,.3,0,.14,.2),w.cyl(i.dark,.06,.07,.75,0,.22,.18,8,0,.1,Math.PI/2),w.cyl(i.dark,.05,.05,.7,.05,.3,.24,8,0,-.3,Math.PI/2),w.box(i.ember,.8,.03,.26,0,.165,.2),w.sphere(i.ember,.12,-.1,.25,.2,2.2,.5,.8,8,6),w.solid(2.7,1.72,.8,0,.86,.4),he(w,-1.05,1.72,.25),he(w,1.05,1.72,.25,.14),w.box(i.dark,.32,.36,.14,0,1.9,.37+me),w.cyl(i.ceramic,.11,.11,.02,0,1.94,.45+me,20,Math.PI/2,0,0),w.cyl(i.brass,.125,.125,.015,0,1.94,.445+me,20,Math.PI/2,0,0),w.cyl(i.terracotta,.05,.08,.22,.6,1.83,.22,12),re(w,-.6,1.72,.24,2,.3),Y(w,1.4,.95,0,3.5,.325+me,2),w.cyl(i.iron,.012,.012,.8,1.32,.4,.55,6,0,0,.08),w.cyl(i.brass,.025,.025,.06,1.35,.82,.55,8),l.push({p:new B(0,.55,8.35),c:16747068,i:6,d:10,fire:!0})}U(r.sub(0,0,5.7,0),i.leather,2.2,!1),U(r.sub(-2.15,0,7.4,Math.PI/2-.2),i.leather2),U(r.sub(2.15,0,7.4,-Math.PI/2+.25),i.leather);{const w=r.sub(0,0,7.3,.05);w.box(i.oak,1.1,.05,.6,0,.42,0);for(const[I,O]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]])w.box(i.dark,.05,.4,.05,I,.2,O);w.box(i.dark,1,.02,.5,0,.1,0),w.solid(1.1,.45,.6,0,.22,0),re(w,-.25,.445,0,3,.5),w.cyl(i.ceramic,.04,.03,.07,.25,.48,.05,12),w.torus(i.ceramic,.025,.006,.29,.48,.05,0,0,0,10),w.cyl(i.ceramic,.07,.07,.008,.25,.449,.05,16),re(w,-.2,.12,0,3,0);const N=r.sub(1.45,0,5.75,0);N.cyl(i.dark,.25,.25,.03,0,.6,0,20),N.cyl(i.dark,.03,.04,.58,0,.3,0,8),N.cyl(i.dark,.18,.2,.03,0,.015,0,16),N.solid(.5,.62,.5,0,.31,0),q(N,0,.615,0,1.1)}{r.box(i.oak,.6,.45,4,-11.19,.225,4.9),r.solid(.62,.45,4,-11.2,.225,4.9),r.box(i.cushion,.56,.1,3.9,-11.2,.5,4.9),r.box(i.cushion2,.16,.42,.5,-11.38,.74,3.25,0,0,-.25),r.box(i.leather2,.16,.38,.46,-11.38,.72,6.5,0,.2,-.3),r.box(i.cushion,.4,.06,.6,-11.1,.58,5.2,0,.4,0),e.stack(r.m,-11.2,.55,4.3,3,.4),r.cyl(i.terracotta,.11,.08,.2,-11.25,.65,6,14);for(let I=0;I<9;I++){const O=I/9*Math.PI*2;r.box(i.plant,.06,.32,.01,-11.25+Math.cos(O)*.06,.88,6+Math.sin(O)*.06,Math.sin(O)*.5,O,Math.cos(O)*.5)}U(r.sub(-9.3,0,3.4,-Math.PI/2+.55),i.leather),U(r.sub(-9.3,0,6.35,-Math.PI/2-.55),i.leather2);const w=r.sub(-9.9,0,4.9,0);w.cyl(i.oak,.3,.3,.035,0,.6,0,24),w.cyl(i.dark,.035,.05,.58,0,.3,0,10);for(let I=0;I<3;I++){const O=I/3*Math.PI*2;w.box(i.dark,.05,.05,.3,Math.cos(O)*.12,.04,Math.sin(O)*.12,0,-O+Math.PI/2,0)}w.solid(.6,.62,.6,0,.31,0),re(w,-.08,.62,-.08,3,.7),w.cyl(i.ceramic,.045,.035,.06,.14,.65,.1,12),w.cyl(i.ceramic,.075,.075,.008,.14,.62,.1,16);const N=r.sub(-8,0,7,0);N.cyl(i.iron,.16,.18,.03,0,.015,0,16),N.cyl(i.iron,.014,.014,1.5,0,.76,0,8),N.cyl(i.shade,.14,.24,.28,0,1.55,0,20,0,0,0,!0),N.solid(.36,1.6,.36,0,.8,0),l.push({p:new B(-8,1.5,6.9),c:16757866,i:4,d:7}),Y(r.sub(-7.5,0,2.4,0),.5,.4,-.45,2,.03,3),re(r,-8.6,0,7.15,5,.3)}{const w=r.sub(-5.9,0,-.7,.3);for(let I=0;I<3;I++){const O=I/3*Math.PI*2;w.box(i.dark,.04,.75,.04,Math.cos(O)*.18,.37,Math.sin(O)*.18,Math.sin(O)*.25,0,-Math.cos(O)*.25)}w.torus(i.oak,.3,.03,0,.76,0,Math.PI/2,0,0,32),w.torus(i.brass,.32,.01,0,1,0,0,0,.4,32);const N=new Pi(.29,32,20);N.rotateZ(.4),w.geo(i.globe,N,0,1,0),w.solid(.7,1.3,.7,0,.65,0)}{const w=r.sub(5.5,0,-1.22,Math.PI);w.box(i.oak,1.9,1.1,.5,0,.55,.25);for(let N=0;N<8;N++)for(let I=0;I<6;I++){const O=-.82+N*.235,X=.22+I*.15;w.box(i.walnut,.2,.12,.02,O,X,.505),w.box(i.brass,.05,.012,.02,O,X-.02,.52),w.box(i.paper,.05,.025,.005,O,X+.025,.517)}w.box(i.walnut,2,.05,.56,0,1.125,.25),w.solid(1.9,1.15,.5,0,.57,.25),q(w,.65,1.15,.25,.9),re(w,-.4,1.15,.25,4,.2),r.cyl(i.brass,.008,.008,.75,5.5,o-.95,-4.1,6),r.cyl(i.brass,.04,.04,.05,5.5,o-.6,-4.1,10),r.cyl(i.shade,.1,.22,.2,5.5,o-1.38,-4.1,20,0,0,0,!0),r.sphere(i.flame,.035,5.5,o-1.4,-4.1,1,1,1,8,6),l.push({p:new B(5.5,o-1.5,-4.1),c:16759930,i:3.5,d:7})}{const w=r.sub(-5.6,o,-8.85,0);w.box(i.oak,1.4,.05,.7,0,.76,0);for(const I of[-1,1])w.box(i.dark,.36,.72,.64,I*.5,.37,0);w.box(i.dark,.6,.12,.62,0,.67,0);for(const I of[-1,1])for(let O=0;O<3;O++)w.box(i.walnut,.32,.2,.02,I*.5,.16+O*.22,.33),w.cyl(i.brass,.015,.015,.02,I*.5,.16+O*.22,.345,8,Math.PI/2,0,0);w.solid(1.4,.8,.7,0,.4,0),H(w,-.4,.785,-.1,0),re(w,.45,.785,-.1,5,0),w.box(i.paper,.3,.004,.22,.05,.787,.1,0,.2,0),w.cyl(i.iron,.025,.03,.045,-.15,.81,-.15,10),j(w.sub(.05,0,.6,Math.PI+.2)),l.push({p:new B(-5.9,o+1.25,-8.85),c:16761466,i:4.5,d:8}),U(r.sub(6,o,-3.6,-Math.PI/2),i.leather2);const N=r.sub(6.1,o,-2.4,0);N.cyl(i.dark,.22,.22,.03,0,.55,0,18),N.cyl(i.dark,.03,.03,.54,0,.27,0,8),N.cyl(i.dark,.15,.17,.03,0,.015,0,14),N.solid(.44,.58,.44,0,.29,0),re(N,0,.565,0,3,.4),e.stack(r.m,3.4,o,-9,6,.2),e.stack(r.m,-1.6,0,-8.9,4,.1)}for(const[w,N,I]of[[-.5,6.2,1.9],[-2.3,7,-3.7]]){r.torus(i.iron,.75,.025,w,N,I,Math.PI/2,0,0,40),r.torus(i.iron,.4,.018,w,N-.25,I,Math.PI/2,0,0,28),r.cyl(i.iron,.006,.006,10.5-N,w,(10.5+N)/2,I,4);for(let O=0;O<4;O++){const X=O/4*Math.PI*2+.4;r.cyl(i.iron,.005,.005,1.1,w+Math.cos(X)*.37,N+.45,I+Math.sin(X)*.37,4,Math.sin(X)*.72,0,-Math.cos(X)*.72)}for(let O=0;O<10;O++){const X=O/10*Math.PI*2,te=w+Math.cos(X)*.75,Z=I+Math.sin(X)*.75;r.cyl(i.iron,.03,.02,.04,te,N+.03,Z,8),r.cyl(i.paper,.014,.014,.14,te,N+.12,Z,6),r.sphere(i.flame,.011,te,N+.205,Z,1,2,1,6,4)}}Y(r.sub(7,0,0,-Math.PI/2),1.1,.8,4.6,3.1,.03,0),Y(r.sub(7,0,0,-Math.PI/2),.9,1.2,.7,5.3,.03,1),Y(r.sub(-7,0,0,Math.PI/2),.9,.7,2.6,3.2,.03,3),Y(r.sub(-7,0,0,Math.PI/2),.9,.7,-1.4,3.2,.03,1);{const w=r;w.sphere(i.ceramic,.12,-3.6,2.5,-5,.85,1.1,.85,14,10),w.cyl(i.ceramic,.07,.1,.16,-3.6,2.4,-5,12),w.box(i.stone,.2,.08,.2,-3.6,2.36,-5),e.stack(r.m,-1.2,2.325,-5,3,.3),w.cyl(i.terracotta,.12,.09,.26,-1,2.455,-2.4,14),w.sphere(i.plant,.18,-1,2.7,-2.4,1,.7,1,10,6),e.stack(r.m,-3.2,2.325,-2.4,4,1.2),he(r,-2.4,2.325,-2.4)}const oe=(w,N,I)=>{const O=new Gs(n,w.m),X=c();if(X<.35)O.box(i.iron,.012,Math.min(.16,w.clear-.02),.11,N-I/2+.01,Math.min(.16,w.clear-.02)/2,-.08),O.box(i.iron,.09,.006,.11,N-I/2+.05,.003,-.08);else if(X<.55&&w.clear>.22)O.cyl(c()<.5?i.ceramic:i.terracotta,.035,.05,.15,N,.075,-.1,12);else if(X<.75){const te=Math.min(I-.02,.14);O.box(c()<.5?i.walnut:i.leather2,te,Math.min(.08,w.clear-.02),.12,N,.04,-.1)}else X<.85&&w.clear>.2&&O.box(i.gilt,.1,.13,.012,N,.065,-.12,-.15,0,0)};for(const w of a)e.fillSlot(w,oe);return n.finish=n.finish.bind(n),{B:n,lights:l,windows:u,slots:a}}const Sl=[[.36,.08,.06],[.42,.12,.08],[.12,.2,.12],[.1,.16,.28],[.18,.1,.06],[.48,.32,.16],[.06,.06,.06],[.55,.42,.2],[.16,.26,.26],[.3,.1,.16],[.62,.55,.42],[.26,.24,.2],[.4,.24,.1],[.2,.12,.2],[.7,.62,.48]],bl=new jt,El=new Pt,S0=new B,b0=new B;class E0{constructor(e){this.rand=e,this.mats=[],this.cols=[],this.vars=[]}color(e,t=0){const n=this.rand,r=e||Sl[Math.floor(n()*Sl.length)],s=.8+n()*.4,o=t||(n()<.12?.2+n()*.25:0);return[r[0]*s*(1-o)+.55*o,r[1]*s*(1-o)+.48*o,r[2]*s*(1-o)+.38*o]}add(e,t,n,r,s,o,a,l,u,c,h=0){El.set(0,h,s),bl.setFromEuler(El);const f=new Ke().compose(S0.set(t,n,r),bl,b0.set(o,a,l));f.premultiply(e),this.mats.push(f),this.cols.push(u),this.vars.push(c)}fillSlot(e,t){const n=this.rand,{m:r,len:s,clear:o,d:a}=e;let l=.01+n()*.04,u=.25;for(;l<s-.03;){const c=n(),h=s-l;if(c<.07&&h>.34&&o>.16){const x=2+Math.floor(n()*4);let T=0,E=0;const R=.2+n()*.1;for(let C=0;C<x;C++){const v=.022+n()*.04;if(T+v>o-.02)break;const S=Math.min(R+(n()-.5)*.06,h-.03),L=Math.min(a-.02,.15+n()*.08);this.add(r,l+S/2+(n()-.5)*.02,T+v/2,-L/2-.01-n()*.02,Math.PI/2,v,S,L,this.color(),Math.floor(n()*8),(n()-.5)*.12),T+=v,E=Math.max(E,S)}l+=E+.02+n()*.03;continue}if(c<.13){const x=.06+n()*.16;t&&x>.1&&h>.2&&t(e,l+x/2,x),l+=x;continue}const f=n()<.4,p=f?4+Math.floor(n()*10):3+Math.floor(n()*12),g=this.color(),_=Math.floor(n()*8),m=Math.min(o-.02,.2+n()*.16),d=.03+n()*.03,M=Math.min(a-.02,.15+n()*.08),y=n()<.2?.08:0;for(let x=0;x<p&&l<s-.03;x++){let T,E,R,C,v;if(f?(T=d*(.85+n()*.3),E=m,R=M,C=n()<.08?this.color():g,v=_):(T=.016+n()*.05+(n()<.1?.03:0),E=Math.min(o-.015,.17+n()*.17+y),R=Math.min(a-.02,.12+n()*.13),C=this.color(),v=Math.floor(n()*8)),l+T>s-.01)break;const S=.006+n()*(n()<.15?.06:.018);this.add(r,l+T/2,E/2,-R/2-S,0,T,E,R,C,v,(n()-.5)*.03),l+=T+.0015,u=E}if(n()<.35&&s-l>.12){const x=.12+n()*.3,T=.02+n()*.03,E=Math.min(u*.95,o-.03,.18+n()*.12),R=Math.min(a-.02,.14+n()*.08),C=l+T/2*Math.cos(x)+E/2*Math.sin(x),v=T/2*Math.sin(x)+E/2*Math.cos(x);l+T*Math.cos(x)+E*Math.sin(x)<s-.01&&(this.add(r,C,v,-R/2-.01,x,T,E,R,this.color(),Math.floor(n()*8)),l+=T*Math.cos(x)+E*Math.sin(x))}l+=.004+n()*.04}}stack(e,t,n,r,s,o=0){const a=this.rand;let l=n;for(let u=0;u<s;u++){const c=.025+a()*.04,h=.2+a()*.12,f=.15+a()*.08;this.add(e,t+(a()-.5)*.03,l+c/2,r+(a()-.5)*.03,Math.PI/2,c,h,f,this.color(),Math.floor(a()*8),o+(a()-.5)*.4),l+=c}return l}build(e){const t=new tn(1,1,1),n=t.attributes.uv,r=new Float32Array(n.count),s=new Float32Array(n.count);for(let f=0;f<6;f++)for(let p=0;p<4;p++){const g=f*4+p;let _=n.getX(g),m=n.getY(g);if(f===4)_=_*.0625,r[g]=1;else if(f===0||f===1)_=.76+_*.23;else if(f===2||f===3){const d=_;_=.51+m*.23,m=d,s[g]=1}else _=.51+_*.23,s[g]=1;n.setXY(g,_,m)}t.setAttribute("aSpine",new yt(r,1)),t.setAttribute("aPage",new yt(s,1));const o=this.mats.length,a=new Float32Array(o);for(let f=0;f<o;f++)a[f]=this.vars[f];t.setAttribute("aVar",new ys(a,1));const l=new qc({map:e});l.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
`)};const u=t.index.array;t.setIndex(Array.from(u.slice(0,30)));const c=new Fs(t,l,o),h=new Ne;for(let f=0;f<o;f++){c.setMatrixAt(f,this.mats[f]);const p=this.cols[f];h.setRGB(p[0],p[1],p[2]),c.setColorAt(f,h)}return c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,c.castShadow=!0,c.receiveShadow=!0,c.computeBoundingSphere(),c}}const Tl=.0026,wl=Math.PI/2-.02;function T0({canvas:i,overlay:e,menuButton:t,player:n,camera:r,releaseMovement:s,toast:o,isInputBlocked:a=()=>!1,setMenuPaused:l=()=>{}}){const u=e.querySelector("#look-sensitivity"),c=e.querySelector("#look-sensitivity-value"),h=e.querySelector("[data-resume-look]");let f=Tl,p=!1,g=!1,_=!1,m=!1,d=!1,M=document.hasFocus(),y=!1,x=!1,T=0,E=0,R=0,C=!1,v=!1;const S=[];function L(oe,w,N,I){oe.addEventListener(w,N,I),S.push(()=>oe.removeEventListener(w,N,I))}function D(){return!v&&!C&&M&&!e.open&&!a()}function F(){i.focus({preventScroll:!0}),M=document.visibilityState==="visible"&&document.hasFocus()}function U(oe,w){!Number.isFinite(oe)||!Number.isFinite(w)||(n.yaw-=oe*f,n.pitch=Math.max(-wl,Math.min(wl,n.pitch-w*f)),r.rotation.set(n.pitch,n.yaw,0))}function j(){++R,p=_=m=g=d=!1,s(),document.pointerLockElement===i&&document.exitPointerLock()}function H(){e.open&&e.close(),l(!1),!v&&!C&&F()}function q(){if(!(v||C||e.open||a()))return j(),e.showModal(),l(!0),h.focus({preventScroll:!0}),!0}function Y(){_=d=!1,D()&&(y=!0,o("Hold left mouse to look. Esc opens controls."))}async function re(){if(p||_||!D())return;if(!i.requestPointerLock){Y();return}const oe=++R;_=d=!0,m=!1;try{const w=i.requestPointerLock({unadjustedMovement:!0});if(!w||typeof w.then!="function"){m=!0;return}try{await w}catch(N){if(N.name!=="NotSupportedError"||oe!==R||!D())throw N;await i.requestPointerLock()}}catch{oe===R&&D()&&Y()}finally{oe===R&&!m&&(_=!1)}}L(t,"click",q),L(h,"click",()=>{H(),re()}),L(e,"cancel",oe=>{oe.preventDefault(),H()}),L(e,"close",()=>{l(!1),!v&&!C&&F()}),L(i,"mousedown",oe=>{oe.button!==0||v||C||e.open||a()||(F(),!(p||!D())&&(x=!y,g=!0,T=oe.clientX,E=oe.clientY,re()))}),L(i,"click",oe=>{x&&(x=!1,oe.stopImmediatePropagation())},!0),L(i,"keydown",oe=>{oe.code==="Enter"&&!oe.repeat&&D()&&(re(),oe.preventDefault())}),L(globalThis,"mouseup",()=>{g=!1}),L(globalThis,"mousemove",oe=>{if(!(!D()||document.visibilityState!=="visible")){if(p)U(oe.movementX,oe.movementY);else if(g){if(!(oe.buttons&1)){g=!1;return}U(oe.clientX-T,oe.clientY-E),T=oe.clientX,E=oe.clientY}}}),L(document,"pointerlockchange",()=>{const oe=p;p=document.pointerLockElement===i,_=m=g=!1,p&&(!D()||!d)&&(document.exitPointerLock(),p=!1),p?(y=!1,F()):(d=!1,oe&&s())}),L(document,"pointerlockerror",()=>{m&&_&&(m=!1,Y())});function he(){M=!1,y=!1,j()}return L(globalThis,"blur",he),L(globalThis,"focus",()=>{M=document.visibilityState==="visible"}),L(document,"visibilitychange",()=>{document.visibilityState!=="visible"?he():M=document.hasFocus()}),L(globalThis,"keydown",oe=>{oe.code==="Escape"&&!oe.repeat&&!e.open&&q()&&oe.preventDefault()}),L(u,"input",()=>{const oe=Math.max(40,Math.min(220,Number(u.value)||100));f=Tl*oe/100,c.textContent=`${oe}%`}),{get menuOpen(){return e.open},pause(){C=!0,he()},resume(){v||(C=!1,M=document.visibilityState==="visible"&&document.hasFocus())},dispose(){if(!v){v=!0,C=!0,he();for(const oe of S)oe();e.open&&e.close()}}}}const Al=Object.freeze({welcome:{label:"Welcome book",cover:["A place","for you"],color:3362112,kicker:"Welcome · first shelf",title:"A place to leave good things",paragraphs:["Come in, take a seat, and read something that catches your attention. I’ve left a short find on the table and connected the writing desk to the private project workspace.","Start with Shapes & sound, the rust-colored book nearby. When you want to work on personal notes or decisions, visit the writing desk upstairs.","This first shelf is small. The room can change as better buildings arrive; the things worth keeping can move with it."],links:[],signature:"Left for you — Jippity"},drums:{label:"Shapes & sound",cover:["Shapes","& sound"],color:7356719,kicker:"An interesting find · mathematics",title:"Different shapes, the same spectrum",paragraphs:["Two mathematically different ideal drumheads can have exactly the same set of resonant frequencies, including their multiplicities. Gordon, Webb and Wolpert constructed distinct planar shapes with this property: the frequency list alone does not uniquely reveal the boundary.","There is a stronger surprise. Buser, Conway, Doyle and Semmler gave a homophonic pair with a special point on each drum. Corresponding normalized vibration modes take matching values there. In the ideal point-strike model, striking those points excites every frequency with matching strength.","The assumptions matter: ideal membranes with matching tension and density, fixed boundaries, and the mathematical wave model. This does not mean arbitrary real rooms, instruments or recordings sound identical. Strike location, damping, material, acoustics and how you listen still matter in practice.","That is the part I find interesting: a complete frequency list can be precise and still leave the shape ambiguous."],links:[{label:"Gordon, Webb & Wolpert · One cannot hear the shape of a drum (1992)",href:"https://arxiv.org/pdf/math/9207215"},{label:"Buser, Conway, Doyle & Semmler · Some planar isospectral domains (1994)",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],signature:"Selected by Jippity"},desk:{label:"Project Library",kicker:"The writing desk",title:"Project Library",paragraphs:["Personal notes and decisions belong in the signed-in Project Library. Open that workspace when you’re ready to write or pick up a project.","This desk is just the entrance. The link opens your private workspace in a new tab; sign in there if asked."],links:[{label:"Open private Project Library",href:"https://jippity-project-room.pazneria.chatgpt.site"}],signature:"Jippity"}}),Rl=Object.freeze([{id:"table-welcome",contentId:"welcome",position:[-.35,.808,3.53],yaw:.12,kind:"book",bounds:{x0:-.53,x1:-.17,y0:.783,y1:.84,z0:3.32,z1:3.74}},{id:"table-drums",contentId:"drums",position:[-.87,.808,2.35],yaw:-.18,kind:"book",bounds:{x0:-1.06,x1:-.68,y0:.783,y1:.84,z0:2.13,z1:2.57}},{id:"gallery-writing-desk",contentId:"desk",kind:"existing-paper",position:[-5.55,4.999,-8.75],bounds:{x0:-5.76,x1:-5.34,y0:4.98,y1:5.025,z0:-8.94,z1:-8.56}}]),w0=2.2;function A0(i,e,t,n=()=>document.createElement("canvas")){const r=e.filter(E=>E.kind==="book"),s=n();s.width=256*r.length,s.height=384;const o=s.getContext("2d"),a=[],l=[],u=new B(0,1,0),c=[],h=new Ke,f=new jt,p=new B,g=new tn(1,1,1),_=new ei({roughness:.85,color:16777215}),m=new Fs(g,_,r.length),d=new B;for(let E=0;E<r.length;E++){const R=r[E],C=t[R.contentId],v="#"+C.color.toString(16).padStart(6,"0");o.fillStyle=v,o.fillRect(E*256,0,256,384),o.strokeStyle="#c7a96c",o.lineWidth=2,o.strokeRect(E*256+20,24,216,336),o.fillStyle="#f0dfbe",o.textAlign="center",o.font="30px Georgia",C.cover.forEach((S,L)=>o.fillText(S,E*256+128,154+L*42)),o.font="15px Georgia",o.fillText("JIPPITY",E*256+128,304),f.setFromAxisAngle(u,R.yaw),h.compose(d.fromArray(R.position),f,p.set(.26,.038,.34)),m.setMatrixAt(E,h),m.setColorAt(E,new Ne(C.color));for(const[S,L,D,F]of[[-.13,.17,0,0],[.13,.17,1,0],[.13,-.17,1,1],[-.13,.17,0,0],[.13,-.17,1,1],[-.13,-.17,0,1]])d.set(S,.021,L).applyQuaternion(f).add(new B().fromArray(R.position)),a.push(d.x,d.y,d.z),c.push(0,1,0),l.push((E+D)/r.length,F)}m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0);const M=new ct;M.setAttribute("position",new Ye(a,3)),M.setAttribute("normal",new Ye(c,3)),M.setAttribute("uv",new Ye(l,2));const y=new rr(s);y.colorSpace=mt;const x=new ei({map:y,roughness:.9}),T=new et(M,x);return m.name="Jippity reading books",T.name="Jippity book covers",i.add(m,T),{objects:[m,T],budget:{books:r.length,drawCalls:2,triangles:r.length*14,texturePixels:s.width*s.height},dispose(){i.remove(m,T),m.dispose(),g.dispose(),_.dispose(),M.dispose(),x.dispose(),y.dispose()}}}const R0=["x","y","z"];function Cl(i,e,t,n=1/0){let r=0,s=n;if(!Number.isFinite(Math.hypot(e.x,e.y,e.z))||Math.hypot(e.x,e.y,e.z)<1e-10)return null;for(const o of R0){const a=i[o],l=e[o],u=t[o+"0"],c=t[o+"1"];if(!Number.isFinite(a)||!Number.isFinite(l)||!Number.isFinite(u)||!Number.isFinite(c))return null;if(Math.abs(l)<1e-10){if(a<u||a>c)return null}else{const h=(u-a)/l,f=(c-a)/l;if(r=Math.max(r,Math.min(h,f)),s=Math.min(s,Math.max(h,f)),r>s)return null}}return s>=0?r:null}function Pl(i,e,t,n,r=2.2){let s=null,o=r;for(const a of t){const l=Cl(i,e,a.bounds,o);l!==null&&l<=o&&(s=a,o=l)}if(!s)return null;for(const a of n){const l=Cl(i,e,a,o);if(l!==null&&l+.025<o)return null}return s}function ca(i){var e;return!!((e=i==null?void 0:i.closest)!=null&&e.call(i,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))}const Hi="jippityLibraryReader";function C0({document:i,window:e,canvas:t,dialog:n,hint:r,content:s,getTarget:o,canInteract:a,look:l,setPaused:u,releaseMovement:c,returnFocus:h}){const f=n.querySelector("#reader-title"),p=n.querySelector("#reader-kicker"),g=n.querySelector("#reader-pages"),_=n.querySelector("#reader-links"),m=n.querySelector("#reader-signature"),d=[];let M=null,y=!1,x=!1,T=null;function E(D,F,U){D.addEventListener(F,U),d.push(()=>D.removeEventListener(F,U))}function R(D){const F=s[D];p.textContent=F.kicker,f.textContent=F.title,g.replaceChildren(),_.replaceChildren();for(const U of F.paragraphs){const j=i.createElement("p");j.textContent=U,g.append(j)}for(const U of F.links){const j=i.createElement("a");j.textContent=U.label,j.href=U.href,j.target="_blank",j.rel="noopener noreferrer",j.referrerPolicy="no-referrer",_.append(j)}_.hidden=!F.links.length,m.textContent=F.signature}function C(D,F=!0){if(y||x||!Object.hasOwn(s,D))return!1;const U=M!==null;if(M=D,c(),l.pause(),u(!0),r.hidden=!0,R(D),i.body.classList.add("reading-open"),n.open||n.showModal(),n.scrollTop=0,f.focus({preventScroll:!0}),F){const j={...e.history.state,[Hi]:D};U?e.history.replaceState(j,"",e.location.href):e.history.pushState(j,"",e.location.href)}return!0}function v(){M!==null&&(M=null,n.open&&n.close(),i.body.classList.remove("reading-open"),r.hidden=!0,c(),l.resume(),u(!1),h==null||h.focus({preventScroll:!0}))}function S(){var F;if(M===null)return;const D=((F=e.history.state)==null?void 0:F[Hi])===M;v(),D&&(x=!0,e.history.back())}function L(){if(M!==null||y||x||!a())return!1;const D=o();return D?C(D.contentId):!1}return E(e,"keydown",D=>{D.code!=="KeyE"||D.repeat||M!==null||ca(D.target)||L()&&D.preventDefault()}),E(t,"mousedown",D=>{T=D.button===0?{x:D.clientX,y:D.clientY,dragged:!1}:null}),E(e,"mousemove",D=>{T&&Math.hypot(D.clientX-T.x,D.clientY-T.y)>5&&(T.dragged=!0)}),E(t,"click",D=>{const F=T==null?void 0:T.dragged;T=null,!F&&(D.button===void 0||D.button===0)&&L()}),E(r,"click",L),E(n,"cancel",D=>{D.preventDefault(),S()}),E(n.querySelector("#reader-close"),"click",S),E(n.querySelector("#reader-back"),"click",S),E(n,"close",S),E(e,"popstate",D=>{var U;x=!1;const F=(U=D.state)==null?void 0:U[Hi];F&&Object.hasOwn(s,F)?C(F,!1):v()}),{get isOpen(){return M!==null},openNearby:L,close:S,updateHint(){const D=!y&&M===null&&a()?o():null;r.hidden=!D,D&&(r.textContent=`E — ${s[D.contentId].label}`)},dispose(){var D;if(!y){y=!0;for(const F of d)F();if(n.open&&n.close(),M=null,r.hidden=!0,i.body.classList.remove("reading-open"),(D=e.history.state)!=null&&D[Hi]){const F={...e.history.state};delete F[Hi],e.history.replaceState(F,"",e.location.href)}c(),l.pause(),u(!0)}}}}const P0=1,I0="shapes-and-sound",L0="Shapes & Sound",D0="A small study of shared resonances",U0="Jippity · Field notes",N0="No. 01",F0="Selected by Jippity",O0={lines:["SHAPES","& SOUND"],spine:"SHAPES & SOUND",imprint:"JIPPITY",note:"ON THE GEOMETRY OF LISTENING"},B0=[{kind:"title",eyebrow:"Mathematics / Acoustics",title:`Shapes
& Sound`,paragraphs:["Different outlines can share the same ideal resonances. A short reading on what a sound can tell us—and what it can leave hidden."],note:"An original decorative resonance motif accompanies this text; it is not a diagram of an isospectral pair."},{kind:"text",eyebrow:"01 / The question",title:"Can a sound reveal a shape?",paragraphs:["Imagine an ideal, uniformly tensioned drumhead held fixed along its edge. Its natural vibration frequencies form a kind of fingerprint. Could that complete list determine its outline?","In 1992, Carolyn Gordon, David Webb, and Scott Wolpert announced differently shaped planar domains with the same spectrum. For this mathematical model, the answer is no."],sourceIds:["gww"]},{kind:"text",eyebrow:"02 / The construction",title:"Rearranging the pieces",paragraphs:["Peter Buser, John Conway, Peter Doyle, and Klaus-Dieter Semmler describe pairs assembled from congruent triangles. Their proof moves and combines pieces of vibration patterns from one domain to the other.","This “transplantation” preserves each eigenvalue and its multiplicity. The boundaries differ, yet the full spectral lists agree."],note:"Isospectral means equal spectra, including repeated eigenvalues.",sourceIds:["bcds"]},{kind:"text",eyebrow:"03 / A finer distinction",title:"The same notes are not the whole sound",paragraphs:["Matching natural frequencies does not by itself specify how strongly a particular strike excites them.","Buser and colleagues also give a stronger example: a homophonic pair with special corresponding strike points. In their ideal model, striking at those points excites matching frequencies with matching intensities."],sourceIds:["bcds"]},{kind:"text",eyebrow:"04 / Beyond the ideal",title:"And what about this room?",paragraphs:["The theorem concerns ideal mathematical domains. A real room adds three-dimensional geometry, absorbing surfaces, furnishings, and the positions of both source and listener.","It does not say that arbitrary differently shaped rooms—or ordinary recordings of real drums—sound identical. The lesson is more precise: even complete spectral information can leave some geometry unresolved."],note:"A mathematical possibility, not a room-acoustics simulation.",sourceIds:["gww","bcds"]},{kind:"sources",eyebrow:"Reading desk / Sources",title:"Follow the proof",paragraphs:["Two public papers for a longer visit. Links open only when you choose them."],sourceIds:["gww","bcds"],note:"Public reading sample · No audio simulation"}],z0=[{id:"gww",authors:"Carolyn Gordon, David L. Webb & Scott Wolpert",title:"One cannot hear the shape of a drum",detail:"Research announcement · 1992",href:"https://arxiv.org/pdf/math/9207215"},{id:"bcds",authors:"Peter Buser, John Conway, Peter Doyle & Klaus-Dieter Semmler",title:"Some planar isospectral domains",detail:"Version 1.0.1 · 1994",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],No={schemaVersion:P0,id:I0,title:L0,subtitle:D0,series:U0,edition:N0,signature:F0,cover:O0,pages:B0,sources:z0},Mi=Object.freeze({cover:[16,16,640,896],spine:[680,16,120,896],paper:[824,16,184,400],end:[824,448,184,256],ribbon:[824,752,184,240],cloth:[688,944,104,48]}),Il=i=>i/1024;function k0(i,e,t){const[n,r,s,o]=Mi[i];return[Il(n+2+e*(s-4)),1-Il(r+2+(1-t)*(o-4))]}function H0(){const i=[],e=[],t=[],n={min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0]};function r(y,x,T,E=[[0,0],[1,0],[1,1]],R="cloth"){const C=x.map((F,U)=>F-y[U]),v=T.map((F,U)=>F-y[U]),S=[C[1]*v[2]-C[2]*v[1],C[2]*v[0]-C[0]*v[2],C[0]*v[1]-C[1]*v[0]],L=Math.hypot(...S);if(L<1e-12)return;const D=S.map(F=>F/L);[y,x,T].forEach((F,U)=>{i.push(...F),e.push(...D),t.push(...k0(R,...E[U])),F.forEach((j,H)=>{n.min[H]=Math.min(n.min[H],j),n.max[H]=Math.max(n.max[H],j)})})}function s(y,x,T,E,R="cloth",C=[[0,0],[1,0],[1,1],[0,1]]){r(y,x,T,[C[0],C[1],C[2]],R),r(y,T,E,[C[0],C[2],C[3]],R)}function o(y,x,T,E,R,C,v,S){const L=[];for(let H=0;H<4;H++){const q=H*Math.PI/2,Y=(H===0||H===3?1:-1)*(y/2-R),re=(H<2?1:-1)*(x/2-R);for(let he=0;he<=C;he++){const oe=q+he*Math.PI/(2*C);L.push([Y+Math.cos(oe)*R,re+Math.sin(oe)*R])}}const D=Math.min(.0016,E*.24),F=[[T,.0012],[T+D,0],[T+E-D,0],[T+E,.0012]],U=F.map(([H,q])=>L.map(([Y,re])=>[Y*(1-q/(y/2)),H,re*(1-q/(x/2))])),j=L.length;for(let H=0;H<F.length-1;H++)for(let q=0;q<j;q++){const Y=(q+1)%j;s(U[H][q],U[H+1][q],U[H+1][Y],U[H][Y],S,[[q/j,(F[H][0]-T)/E],[q/j,(F[H+1][0]-T)/E],[Y/j,(F[H+1][0]-T)/E],[Y/j,(F[H][0]-T)/E]])}for(let H=0;H<j;H++){const q=(H+1)%j,Y=U[3],re=U[0],he=oe=>[oe[0]/y+.5,.5-oe[2]/x];r([0,T+E,0],Y[q],Y[H],[[.5,.5],he(Y[q]),he(Y[H])],v),r([0,T,0],re[H],re[q],[[.5,.5],[0,0],[1,0]],"cloth")}}o(.34,.47,0,.006,.006,3,"end","cloth"),o(.314,.448,.007,.048,.003,2,"end","paper"),o(.34,.47,.058,.006,.006,3,"cover","cloth");const a=-.165,l=.032,u=.031;for(let y=0;y<10;y++){const x=-Math.PI/2+y*Math.PI/10,T=x+Math.PI/10,E=(R,C,v=0)=>[a-Math.cos(R)*(u*.4+v),l+Math.sin(R)*u,C];s(E(x,-.228),E(x,.228),E(T,.228),E(T,-.228),"spine",[[y/10,1],[y/10,0],[(y+1)/10,0],[(y+1)/10,1]]),r([a,l,-.228],E(x,-.228),E(T,-.228),void 0,"cloth"),r([a,l,.228],E(T,.228),E(x,.228),void 0,"cloth")}for(const y of[-.178,-.109,.109,.178])for(let x=0;x<8;x++){const T=-Math.PI/2+x*Math.PI/8,E=T+Math.PI/8,R=(C,v)=>[a-Math.cos(C)*.0144,l+Math.sin(C)*.0315,v];s(R(T,y-.0021),R(T,y+.0021),R(E,y+.0021),R(E,y-.0021))}const c=[-.064,.042,.198],h=[-.043,.042,.198],f=[-.041,.01,.248],p=[-.062,.01,.248],g=[-.04,.003,.284],_=[-.0505,.003,.277],d=[[c,p,f],[c,f,h],[p,[-.061,.003,.284],_],[p,_,f],[f,_,g]],M=y=>[(y[0]+.065)/.027,(.284-y[2])/.086];for(const y of d){r(...y,y.map(M),"ribbon");const x=y.map(T=>[T[0],T[1]-5e-4,T[2]]).reverse();r(...x,x.map(M),"ribbon")}return{position:new Float32Array(i),normal:new Float32Array(e),uv:new Float32Array(t),bounds:n,triangles:i.length/9}}const Ir=Object.freeze({cloth:"#173c40",foil:"#d6b16a",paper:"#eee4cc",ink:"#263f3b",ribbon:"#79374c"}),Jc=Object.freeze({color:1024,control:512,bump:256});function G0(i,e,t="color"){const n=Jc[t];i.width=i.height=n;const r=i.getContext("2d");if(!r)throw new Error("Jippity book requires a 2D canvas context.");r.save(),r.scale(n/1024,n/1024);const s=t==="color",o=t==="bump",a=s?Ir.cloth:o?"#808080":"rgb(0,212,0)",l=s?Ir.foil:o?"#777777":"rgb(0,100,220)";if(r.fillStyle=a,r.fillRect(0,0,1024,1024),s||o){r.lineWidth=.6;for(let U=0;U<1024;U+=3)r.strokeStyle=s?U%2?"rgba(210,230,204,.045)":"rgba(0,0,0,.05)":U%2?"#888":"#777",r.beginPath(),r.moveTo(U,0),r.lineTo(U+.7,1024),r.stroke();for(let U=0;U<1024;U+=4)r.strokeStyle=s?"rgba(225,235,211,.025)":"#848484",r.beginPath(),r.moveTo(0,U),r.lineTo(1024,U+.5),r.stroke()}const[u,c,h,f]=Mi.cover;r.strokeStyle=l,r.fillStyle=l,r.lineWidth=1.3,r.strokeRect(u+28,c+30,h-56,f-60),r.lineWidth=.65,r.strokeRect(u+35,c+37,h-70,f-74);for(const[U,j,H,q]of[[u+45,c+47,1,1],[u+h-45,c+47,-1,1],[u+45,c+f-47,1,-1],[u+h-45,c+f-47,-1,-1]])r.beginPath(),r.moveTo(U,j+12*q),r.lineTo(U,j),r.lineTo(U+12*H,j),r.stroke();r.textAlign="center",r.textBaseline="middle";function p(U,j,H,q,Y="Georgia"){let re=H;for(r.font=re+"px "+Y;r.measureText(U).width>q&&re>12;)re--,r.font=re+"px "+Y;r.fillText(U,u+h/2,j)}p(e.series.toUpperCase(),c+97,16,h-110,"Arial"),r.lineWidth=.8,r.beginPath(),r.moveTo(u+250,c+131),r.lineTo(u+390,c+131),r.stroke(),e.cover.lines.forEach((U,j)=>p(U,c+215+j*83,67,h-98)),p(e.subtitle,c+385,19,h-115),r.save(),r.translate(u+h/2,c+570);for(let U=0;U<9;U++){r.beginPath();for(let j=0;j<=160;j++){const H=j*Math.PI*2/160,q=32+U*8.1+Math.sin(3*H+U*.16)*8+Math.cos(2*H)*4,Y=Math.cos(H)*q*1.19,re=Math.sin(H)*q*.8;j?r.lineTo(Y,re):r.moveTo(Y,re)}r.closePath(),r.lineWidth=U===8?1.5:.85,r.stroke()}r.beginPath(),r.arc(0,0,2.8,0,Math.PI*2),r.fill(),r.restore(),p(e.cover.note,c+750,12.5,h-90,"Arial"),p(e.cover.imprint,c+806,21,h-90),p(e.edition.toUpperCase(),c+842,10,h-90,"Arial");const[g,_,m,d]=Mi.spine;r.save(),r.translate(g+m/2,_+d/2),r.rotate(Math.PI/2),r.font="26px Georgia",r.fillText(e.cover.spine,0,0,d*.7),r.font="12px Arial",r.fillText(e.cover.imprint,-d*.36,0),r.restore(),r.lineWidth=2;for(const U of[_+61,_+d-61])r.beginPath(),r.moveTo(g+14,U),r.lineTo(g+m-14,U),r.stroke();const[M,y,x,T]=Mi.paper;if(r.fillStyle=s?Ir.paper:o?"#808080":"rgb(0,241,0)",r.fillRect(M,y,x,T),s||o)for(let U=0;U<65;U++){const j=y+4+U*(T-8)/65;r.strokeStyle=s?U%7===0?"rgba(111,88,49,.28)":"rgba(132,107,66,.12)":U%7===0?"#6b6b6b":"#777777",r.lineWidth=U%7===0?1.6:.7,r.beginPath(),r.moveTo(M,j),r.bezierCurveTo(M+x*.3,j+.7,M+x*.7,j-.4,M+x,j+.3),r.stroke()}const[E,R,C,v]=Mi.end;if(r.fillStyle=s?"#d9d4b9":o?"#808080":"rgb(0,226,0)",r.fillRect(E,R,C,v),s){r.strokeStyle="#a4b0a1",r.lineWidth=.8;for(let U=0;U<18;U++)r.beginPath(),r.moveTo(E,R+U*16),r.lineTo(E+C,R+U*16+C*.34),r.stroke()}const[S,L,D,F]=Mi.ribbon;if(r.fillStyle=s?Ir.ribbon:o?"#808080":"rgb(0,135,20)",r.fillRect(S,L,D,F),s){r.strokeStyle="rgba(242,171,168,.15)",r.lineWidth=1;for(let U=0;U<D;U+=4)r.beginPath(),r.moveTo(S+U,L),r.lineTo(S+U,L+F),r.stroke()}return r.restore(),i}function Qc(i){const e=(n,r)=>typeof n=="string"&&n.trim().length>0&&n.length<=r;if(!i||i.schemaVersion!==1||!e(i.id,80)||!e(i.title,120))throw new TypeError("Invalid book identity.");if(!e(i.series,80)||!e(i.subtitle,160)||!e(i.signature,120)||!e(i.edition,40))throw new TypeError("Invalid book metadata.");if(!i.cover||!Array.isArray(i.cover.lines)||i.cover.lines.length<1||i.cover.lines.length>3||!i.cover.lines.every(n=>e(n,40))||!e(i.cover.spine,100)||!e(i.cover.imprint,50)||!e(i.cover.note,100))throw new TypeError("Invalid cover text.");if(!Array.isArray(i.pages)||!i.pages.length||i.pages.length>40)throw new TypeError("A book needs 1–40 pages.");if(!Array.isArray(i.sources)||i.sources.length>30)throw new TypeError("Invalid sources.");const t=new Set;for(const n of i.sources){if(!e(n.id,60)||t.has(n.id)||!e(n.title,240)||!e(n.authors,300)||!e(n.detail,120))throw new TypeError("Invalid source metadata.");if(typeof n.href!="string"||!/^https:\/\/[a-z0-9][a-z0-9.-]*(?::443)?\//i.test(n.href)||/[\s<>"\\]/.test(n.href))throw new TypeError("Sources must use a public HTTPS URL.");t.add(n.id)}for(const n of i.pages){if(!["title","text","sources"].includes(n.kind)||!e(n.title,140)||!e(n.eyebrow,100)||!Array.isArray(n.paragraphs)||n.paragraphs.length>8||!n.paragraphs.every(r=>e(r,1800)))throw new TypeError("Invalid page.");if(n.note!==void 0&&!e(n.note,500))throw new TypeError("Invalid page note.");if(n.sourceIds!==void 0&&(!Array.isArray(n.sourceIds)||n.sourceIds.some(r=>!t.has(r))))throw new TypeError("Unknown source.")}return i}function V0({THREE:i,content:e,position:t=[0,0,0],yaw:n=0,makeCanvas:r=()=>document.createElement("canvas")}){Qc(e);const s=H0(),o=new i.BufferGeometry;o.setAttribute("position",new i.BufferAttribute(s.position,3)),o.setAttribute("normal",new i.BufferAttribute(s.normal,3)),o.setAttribute("uv",new i.BufferAttribute(s.uv,2)),o.computeBoundingBox(),o.computeBoundingSphere();const a={};for(const f of["color","control","bump"]){const p=new i.CanvasTexture(G0(r(),e,f));f==="color"&&(p.colorSpace=i.SRGBColorSpace),p.anisotropy=4,p.name="Jippity "+f+" atlas",a[f]=p}const l=new i.MeshStandardMaterial({map:a.color,roughnessMap:a.control,metalnessMap:a.control,bumpMap:a.bump,bumpScale:24e-5,roughness:1,metalness:1});l.name="Jippity cloth, foil, paper and silk";const u=new i.Mesh(o,l);u.name="Jippity — "+e.title,u.position.fromArray(t),u.rotation.y=n,u.castShadow=!0,u.receiveShadow=!0,u.updateMatrix(),u.matrixAutoUpdate=!1;const c=Object.values(Jc).reduce((f,p)=>f+p*p,0);let h=!1;return{object:u,budget:Object.freeze({triangles:s.triangles,vertices:s.position.length/3,drawCalls:1,geometryBytes:s.position.byteLength+s.normal.byteLength+s.uv.byteLength,texturePixels:c,textureBaseRGBABytes:c*4,textureWithFullMipRGBABytes:Math.round(c*4*4/3),note:"Static geometry/texture accounting; drawCalls excludes shadow and optional host prepass. No frame-rate or GPU-memory measurement."}),dispose(){h||(h=!0,u.removeFromParent(),o.dispose(),l.dispose(),Object.values(a).forEach(f=>f.dispose()),Object.values(a).forEach(f=>{f.image=null}))}}}function W0(i){if(!Number.isInteger(i)||i<1||i>40)throw new RangeError("Invalid page count.");const e=Math.ceil(i/2);let t="closed",n=0;const r=s=>Math.max(0,Math.min(e-1,Number.isFinite(s)?Math.trunc(s):0));return{get isOpen(){return t==="open"},get disposed(){return t==="disposed"},get spread(){return n},get count(){return e},open(s=n){return t==="disposed"?!1:(n=r(s),t="open",!0)},go(s){if(t!=="open")return!1;const o=r(s);return o===n?!1:(n=o,!0)},close(){return t!=="open"?!1:(t="closed",!0)},dispose(){t="disposed"}}}const Lr="jippityBoundBook";let X0=0;const q0=i=>{var e;return!!((e=i==null?void 0:i.closest)!=null&&e.call(i,'input, textarea, select, [contenteditable], [role="textbox"]'))};function Y0(i){const e=i.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","-145 -110 290 220"),e.setAttribute("aria-hidden","true"),e.setAttribute("class","jb-motif");for(let t=0;t<9;t++){const n=i.createElementNS("http://www.w3.org/2000/svg","path");let r="";for(let s=0;s<=120;s++){const o=s*Math.PI*2/120,a=32+t*8.1+Math.sin(3*o+t*.16)*8+Math.cos(2*o)*4;r+=(s?"L":"M")+(Math.cos(o)*a*1.19).toFixed(2)+" "+(Math.sin(o)*a*.8).toFixed(2)+" "}n.setAttribute("d",r+"Z"),e.append(n)}return e}function j0({document:i,window:e,content:t,look:n,setPaused:r,releaseMovement:s,returnFocus:o,onError:a=()=>{}}){Qc(t);const l=W0(t.pages.length),u=t.id+":"+ ++X0,c=[];let h=!1,f=null,p=null,g=null,_=null;const m=(Z,ne,se)=>{const Re=i.createElement(Z);return ne&&(Re.className=ne),se!==void 0&&(Re.textContent=se),Re},d=m("dialog","jb-reader");d.setAttribute("aria-label",t.title);const M=m("div","jb-shell"),y=m("header","jb-toolbar"),x=m("div","jb-identity",t.series),T=m("button","jb-close","Back to library");T.type="button",T.setAttribute("aria-label","Close "+t.title+" and return to the library");const E=m("span","jb-close-glyph","×");E.setAttribute("aria-hidden","true"),T.append(E),y.append(x,T);const R=m("div","jb-binding"),C=m("div","jb-spread");C.setAttribute("aria-label","Open book"),R.append(C);const v=m("footer","jb-navigation"),S=m("button","jb-page-button","← Previous"),L=m("button","jb-page-button","Next →");S.type=L.type="button",S.setAttribute("aria-label","Previous two pages"),L.setAttribute("aria-label","Next two pages");const D=m("div","jb-navigation-center"),F=m("select","jb-contents");F.setAttribute("aria-label","Choose a pair of pages");for(let Z=0;Z<l.count;Z++){const ne=m("option","",String(Z+1).padStart(2,"0")+" / "+t.pages[Z*2].title.replace(/\n/g," "));ne.value=String(Z),F.append(ne)}const U=m("p","jb-status");U.setAttribute("role","status"),U.setAttribute("aria-live","polite"),U.setAttribute("aria-atomic","true"),D.append(F,U),v.append(S,D,L);const j=m("p","jb-keyboard-note","← → turn pages · Esc returns to the library");M.append(y,R,v,j),d.append(M),i.body.append(d);const H=(Z,ne,se)=>{Z.addEventListener(ne,se),c.push(()=>Z.removeEventListener(ne,se))},q=()=>{var Z,ne;return((ne=(Z=e.history.state)==null?void 0:Z[Lr])==null?void 0:ne.session)===u},Y=()=>{var Z;return!!((Z=e.matchMedia)!=null&&Z.call(e,"(prefers-reduced-motion: reduce)").matches)};function re(Z,ne=!1){const se=m("a",ne?"jb-source-link":"jb-citation",ne?Z.title:"["+(t.sources.indexOf(Z)+1)+"]");return se.href=Z.href,se.target="_blank",se.rel="noopener noreferrer",se.referrerPolicy="no-referrer",se.setAttribute("aria-label",Z.title+" — opens PDF in a new tab"),se}function he(Z){var Ee;const ne=t.pages[Z],se=m("article","jb-paper "+(Z%2?"jb-paper-right":"jb-paper-left"));if(!ne)return se.setAttribute("aria-label","Blank endpaper"),se.append(m("p","jb-colophon",t.signature)),se;const Re=m("div","jb-running-head",Z===0?t.edition:t.title),Le=m("div","jb-page-body"+(ne.kind==="title"?" jb-title-page":"")),Ae=m("p","jb-eyebrow",ne.eyebrow),z=m("h2","jb-heading",ne.title);if(Le.append(Ae,z),ne.kind==="title"&&Le.append(Y0(i)),ne.paragraphs.forEach(Te=>Le.append(m("p","jb-paragraph",Te))),ne.kind==="sources"){const Te=m("ol","jb-sources");for(const _e of ne.sourceIds||[]){const De=t.sources.find(P=>P.id===_e),be=m("li","");be.append(m("p","jb-source-authors",De.authors),re(De,!0),m("p","jb-source-detail",De.detail)),Te.append(be)}Le.append(Te)}else if((Ee=ne.sourceIds)!=null&&Ee.length){const Te=m("p","jb-citations");Te.append(m("span","","Sources ")),ne.sourceIds.forEach(_e=>Te.append(re(t.sources.find(De=>De.id===_e)))),Le.append(Te)}ne.note&&Le.append(m("p","jb-margin-note",ne.note));const ke=m("div","jb-folio");return ke.append(m("span","",Z===0?t.signature:t.series),m("span","",String(Z+1).padStart(2,"0"))),se.append(Re,Le,ke),se}function oe(Z=0){p==null||p.cancel(),p=null,C.replaceChildren(he(l.spread*2),he(l.spread*2+1));const ne=l.spread*2+1,se=Math.min(ne+1,t.pages.length);U.textContent="Pages "+ne+"–"+se+" of "+t.pages.length,F.value=String(l.spread),S.disabled=l.spread===0,L.disabled=l.spread===l.count-1,d.scrollTop=0,Z&&!Y()&&C.animate&&(p=C.animate([{opacity:.35,transform:"translateX("+Z*10+"px)"},{opacity:1,transform:"translateX(0)"}],{duration:180,easing:"cubic-bezier(.2,.65,.3,1)"}))}function w(){if(q())try{e.history.replaceState({...e.history.state,[Lr]:{session:u,book:t.id,spread:l.spread}},"",e.location.href)}catch(Z){a(Z)}}function N(Z=!0,ne=l.spread){if(l.disposed||h)return!1;if(l.isOpen)return te(ne),!0;g=i.activeElement,l.open(ne);try{s(),n.pause(),r(!0),oe(),d.showModal(),T.focus({preventScroll:!0})}catch(se){l.close(),d.open&&d.close();try{s(),n.resume()}finally{r(!1)}return a(se),!1}if(Z)try{_=e.history.state;const se=_&&typeof _=="object"?_:{};e.history.pushState({...se,[Lr]:{session:u,book:t.id,spread:l.spread}},"",e.location.href)}catch(se){a(se)}return!0}function I(){var ne;if(!l.close())return!1;p==null||p.cancel(),p=null,d.open&&d.close();try{s(),n.resume()}finally{r(!1)}const Z=(o==null?void 0:o.isConnected)!==!1&&(o!=null&&o.focus)?o:g;return(Z==null?void 0:Z.isConnected)!==!1&&((ne=Z==null?void 0:Z.focus)==null||ne.call(Z,{preventScroll:!0})),!0}function O(){h=!1,f!==null&&e.clearTimeout(f),f=null}function X(){if(!l.isOpen)return!1;const Z=q();if(I(),Z){h=!0,f=e.setTimeout(()=>{if(q())try{e.history.replaceState(_,"",e.location.href)}catch(ne){a(ne)}O()},1200);try{e.history.back()}catch(ne){if(q())try{e.history.replaceState(_,"",e.location.href)}catch(se){a(se)}O(),a(ne)}}return!0}function te(Z){const ne=l.spread;return l.go(Z)?(oe(Math.sign(l.spread-ne)),w(),!0):!1}return H(T,"click",X),H(S,"click",()=>te(l.spread-1)),H(L,"click",()=>te(l.spread+1)),H(F,"change",()=>te(Number(F.value))),H(d,"cancel",Z=>{Z.preventDefault(),X()}),H(d,"close",()=>{!d.open&&l.isOpen&&X()}),H(d,"keydown",Z=>{if(Z.altKey||Z.ctrlKey||Z.metaKey||q0(Z.target))return;let ne;if(Z.key==="ArrowRight"||Z.key==="PageDown")ne=l.spread+1;else if(Z.key==="ArrowLeft"||Z.key==="PageUp")ne=l.spread-1;else if(Z.key==="Home")ne=0;else if(Z.key==="End")ne=l.count-1;else return;Z.preventDefault(),te(ne)}),H(e,"popstate",Z=>{var se;O();const ne=(se=Z.state)==null?void 0:se[Lr];(ne==null?void 0:ne.session)===u&&ne.book===t.id?l.isOpen?te(ne.spread):N(!1,ne.spread):I()}),{get isOpen(){return l.isOpen},get pendingBack(){return h},get spread(){return l.spread},open:()=>N(!0),close:X,go:te,element:d,dispose(){if(!l.disposed){if(O(),c.forEach(Z=>Z()),I(),l.dispose(),p==null||p.cancel(),q())try{e.history.replaceState(_,"",e.location.href)}catch(Z){a(Z)}d.remove()}}}}const K0=i=>{var e;return!!((e=i==null?void 0:i.closest)!=null&&e.call(i,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))};function $0({window:i,document:e,canvas:t,hint:n,reader:r,content:s,getTarget:o,canInteract:a}){const l=[];let u=null,c=!1;const h=(g,_,m,d=!1)=>{g.addEventListener(_,m,d),l.push(()=>g.removeEventListener(_,m,d))},f=()=>!c&&!r.isOpen&&!r.pendingBack&&a();function p(g){return!f()||!o(g)?!1:(u=null,n.hidden=!0,r.open())}return h(i,"keydown",g=>{g.code!=="KeyE"||g.repeat||g.altKey||g.ctrlKey||g.metaKey||K0(g.target)||p()&&(g.preventDefault(),g.stopImmediatePropagation())},!0),h(t,"mousedown",g=>{u=null,!(g.button!==0||!f()||!o(g))&&(u={x:g.clientX,y:g.clientY,locked:e.pointerLockElement===t,distance:0,dragged:!1},g.stopImmediatePropagation())},!0),h(i,"mousemove",g=>{if(!u)return;const _=u.locked?Math.hypot(g.movementX||0,g.movementY||0):Math.hypot(g.clientX-u.x,g.clientY-u.y);u.locked?u.distance+=_:u.distance=Math.max(u.distance,_),u.distance>5&&(u.dragged=!0)},!0),h(t,"click",g=>{const _=u;u=null,!(g.button!==0||!_||_.dragged)&&p(g)&&(g.preventDefault(),g.stopImmediatePropagation())},!0),h(i,"mouseup",g=>{g.target!==t&&(u=null)},!0),h(t,"mouseleave",()=>{e.pointerLockElement!==t&&(u=null)}),h(i,"blur",()=>{u=null}),h(e,"visibilitychange",()=>{e.visibilityState!=="visible"&&(u=null)}),h(n,"click",g=>{p()&&(g.preventDefault(),g.stopImmediatePropagation())},!0),{openNearby:p,updateHint(){const g=f()&&!!o();return n.classList.toggle("jb-prompt",g),g&&(n.textContent="E — Read "+s.title,n.hidden=!1),g},dispose(){c||(c=!0,u=null,l.forEach(g=>g()),n.classList.remove("jb-prompt"))}}}const Fo=Object.freeze({position:Object.freeze([-.87,.782,2.35]),yaw:-.18,reach:2.2}),Z0=[{x0:-.18,x1:.17,y0:0,y1:.064,z0:-.235,z1:.235},{x0:-.065,x1:-.039,y0:.002,y1:.043,z0:.198,z1:.284}];function Ll(i,e,t,n=1/0){let r=0,s=n;for(const o of["x","y","z"]){const a=i[o],l=e[o],u=t[o+"0"],c=t[o+"1"];if(![a,l,u,c].every(Number.isFinite)||u>c)return null;if(Math.abs(l)<1e-10){if(a<u||a>c)return null}else{const h=(u-a)/l,f=(c-a)/l;if(r=Math.max(r,Math.min(h,f)),s=Math.min(s,Math.max(h,f)),r>s)return null}}return s>=0?r:null}function J0(i,e,t=[],n=Fo){const r=Math.hypot(e.x,e.y,e.z);if(!Number.isFinite(r)||r<1e-10||!Number.isFinite(n.yaw)||!(n.reach>0))return null;const s={x:e.x/r,y:e.y/r,z:e.z/r},[o,a,l]=n.position,u=Math.cos(n.yaw),c=Math.sin(n.yaw),h=i.x-o,f=i.z-l,p={x:u*h-c*f,y:i.y-a,z:c*h+u*f},g={x:u*s.x-c*s.z,y:s.y,z:c*s.x+u*s.z};let _=1/0;for(const m of Z0){const d=Ll(p,g,m,n.reach);d!==null&&(_=Math.min(_,d))}if(!Number.isFinite(_))return null;for(const m of t){const d=Ll(i,s,m,_);if(d!==null&&d+.022<_)return null}return{id:"table-drums",contentId:"drums",distance:_}}function Q0(i,e,t,n){const r=n(i,e.filter(a=>a.id!=="table-drums"),t),s=V0({THREE:h0,content:No,position:Fo.position,yaw:Fo.yaw});i.add(s.object);let o=!1;return{book:s,objects:[...r.objects,s.object],dispose(){o||(o=!0,r.dispose(),s.dispose())}}}function em(i){const{camera:e,solids:t,legacyFactory:n,...r}=i,{document:s,window:o,canvas:a,hint:l,look:u,setPaused:c,releaseMovement:h,returnFocus:f,canInteract:p}=i;let g=!1;const _=j0({document:s,window:o,content:No,look:u,releaseMovement:h,returnFocus:f,setPaused:T=>{T?(g=!s.body.classList.contains("reading-open"),s.body.classList.add("reading-open")):g&&(s.body.classList.remove("reading-open"),g=!1),c(T)}}),m=new B;function d(T){if(e.updateMatrixWorld(),T&&s.pointerLockElement!==a&&Number.isFinite(T.clientX)&&Number.isFinite(T.clientY)){const E=a.getBoundingClientRect();if(!E.width||!E.height)return null;const R=(T.clientX-E.left)/E.width,C=(T.clientY-E.top)/E.height;if(R<0||R>1||C<0||C>1)return null;m.set(R*2-1,1-C*2,.5).unproject(e).sub(e.position).normalize()}else e.getWorldDirection(m);return J0(e.position,m,t)}const M=n({...r,canInteract:()=>!_.isOpen&&!_.pendingBack&&p(),getTarget:()=>{const T=r.getTarget();return(T==null?void 0:T.id)==="table-drums"?null:T}}),y=$0({window:o,document:s,canvas:a,hint:l,reader:_,content:No,getTarget:d,canInteract:()=>!M.isOpen&&p()});let x=!1;return{get isOpen(){return _.isOpen||M.isOpen},updateHint(){if(!x){if(_.isOpen){l.hidden=!0;return}y.updateHint()||M.updateHint()}},close(){_.isOpen?_.close():M.close()},dispose(){x||(x=!0,y.dispose(),_.dispose(),M.dispose())}}}function tm({tick:i,request:e,cancel:t,now:n}){const r=new Set;let s=null,o=!1,a=null;function l(){!o&&!r.size&&s===null&&(s=e(u))}function u(c){if(s=null,o||r.size)return;const h=a===null?0:Math.max(0,(c-a)/1e3);a=c,i(c,h),l()}return{start(){a=n(),l()},setPaused(c,h){h?r.add(c):r.delete(c),r.size&&s!==null&&(t(s),s=null),a=null,l()},get paused(){return o||r.size>0},dispose(){o=!0,s!==null&&t(s),s=null}}}const Dl=Object.freeze({href:"https://pazneria.github.io/",plaque:"EXIT",plaqueSubtitle:"HOME",label:"Leave for Jordan's homepage",prompt:"E · Leave the library",shortcut:"Alt+X",instructions:"Leave through the oak door beside the stair foot, or use the exit link in controls. Alt+X returns to Jordan’s homepage."}),To=Object.freeze({id:"library-home-exit",position:Object.freeze([6.8963,0,7.75]),rotation:-Math.PI/2,width:1.3,height:2.42,bounds:Object.freeze({x0:6.7,x1:6.93,y0:.08,y1:2.58,z0:6.94,z1:8.56}),reach:2.2});function nm(i,e,t,n,r=()=>document.createElement("canvas")){const s=new Wn;s.name="Library exit";const o=new Zc(()=>.37),a=o.frame(...t.position,t.rotation);a.m.multiply(new Ke().makeScale(1,1,.7));const{width:l,height:u}=t,{oak:c,dark:h,brass:f}=e;a.box(h,l,u-.04,.055,0,u/2,.028);for(const d of[-l/2+.065,l/2-.065])a.box(c,.13,u,.045,d,u/2,.082);for(const[d,M]of[[.11,.22],[.84,.13],[u-.09,.18]])a.box(c,l-.26,M,.045,0,d,.082);a.box(c,.07,1.33,.045,0,1.575,.082);for(const[d,M,y,x]of[[-.26,1.575,.42,1.28],[.26,1.575,.42,1.28],[0,.49,.96,.51]]){a.box(c,y,x,.018,d,M,.063);for(const T of[-1,1])a.box(h,.018,x+.04,.014,d+T*(y/2+.009),M,.081),a.box(h,y+.04,.018,.014,d,M+T*(x/2+.009),.081)}for(const d of[-1,1])a.box(h,.13,u+.02,.09,d*(l/2+.085),(u+.02)/2,.067),a.box(c,.1,u+.02,.035,d*(l/2+.085),(u+.02)/2,.129),a.box(c,.16,.24,.13,d*(l/2+.085),.12,.083);a.box(h,l+.3,.18,.09,0,u+.09,.067),a.box(c,l+.33,.1,.035,0,u+.11,.129),a.box(c,l+.37,.045,.15,0,u+.2025,.08),a.box(f,.045,.19,.014,-.47,1.03,.115),a.cyl(f,.018,.018,.025,-.47,1.06,.14,8,Math.PI/2),a.box(f,.13,.025,.025,-.425,1.06,.158);for(const d of[.32,1.2,2.1])a.cyl(f,.018,.018,.11,.637,d,.117,8);const p=r();p.width=512,p.height=256;const g=p.getContext("2d");g.fillStyle="#30271b",g.fillRect(0,0,512,256),g.strokeStyle="#b99a60",g.lineWidth=4,g.strokeRect(12,12,488,232),g.fillStyle="#efdab0",g.textAlign="center",g.textBaseline="middle",g.font="60px Georgia, serif",g.fillText(n.plaque,256,102),g.font="25px Georgia, serif",g.fillText(n.plaqueSubtitle,256,172);const _=new rr(p);_.colorSpace=mt;const m=new ei({map:_,roughness:.62,emissive:15586976,emissiveMap:_,emissiveIntensity:.18});a.box(f,.45,.23,.012,0,2.51,.172),a.plane(m,.426,.206,0,2.51,.18),o.finish(s);for(const d of s.children)d.castShadow=!1,d.receiveShadow=!0;return i.add(s),{group:s,materials:[m],textures:[_]}}function im({document:i,window:e,canvas:t,controls:n,readerFooter:r,content:s,getTarget:o,canInteract:a,beforeLeave:l}){let u=!1,c=!1,h=null;const f=[],p=[],g=t.getAttribute("aria-describedby");function _(T,E,R,C){T.addEventListener(E,R,C),f.push(()=>T.removeEventListener(E,R,C))}function m(T){if(T==null||T.preventDefault(),T==null||T.stopPropagation(),c||u)return!1;c=!0;try{l()}finally{e.addEventListener("pageshow",E=>{E.persisted&&e.location.reload()},{once:!0}),e.location.assign(s.href)}return!0}function d(T,E){const R=i.createElement("a");return R.href=s.href,R.textContent=s.label,R.className=`library-exit-link ${E}`,R.setAttribute("aria-keyshortcuts",s.shortcut),_(R,"click",m),T.append(R),p.push(R),R}const M=d(i.body,"library-exit-keyboard");n&&d(n,"library-exit-controls"),r&&d(r,"library-exit-reader");const y=i.createElement("span");y.id="library-exit-instructions",y.className="library-exit-instructions",y.textContent=s.instructions,i.body.append(y),p.push(y),t.setAttribute("aria-describedby",[g,y.id].filter(Boolean).join(" "));const x=i.createElement("button");return x.id="exit-hint",x.type="button",x.hidden=!0,x.textContent=s.prompt,x.setAttribute("aria-label",s.label),i.body.append(x),p.push(x),_(x,"click",T=>{a()&&o()&&m(T)}),_(e,"keydown",T=>{var E,R;if(!(T.repeat||T.defaultPrevented||T.isComposing)){if(T.code==="KeyX"&&T.altKey&&!T.ctrlKey&&!T.metaKey&&!((R=(E=T.target)==null?void 0:E.closest)!=null&&R.call(E,'input, textarea, select, [contenteditable], [role="textbox"]'))){m(T);return}T.code==="KeyE"&&!T.altKey&&!T.ctrlKey&&!T.metaKey&&!ca(T.target)&&a()&&o()&&m(T)}}),_(t,"mousedown",T=>{h=T.button===0&&a()&&o()?{x:T.clientX,y:T.clientY,travel:0}:null}),_(e,"mousemove",T=>{h&&(h.travel+=i.pointerLockElement===t?Math.hypot(T.movementX||0,T.movementY||0):Math.hypot(T.clientX-h.x,T.clientY-h.y),h.x=T.clientX,h.y=T.clientY)}),_(t,"click",T=>{const E=h&&h.travel<=5;h=null,E&&T.button===0&&a()&&o()&&m(T)}),_(e,"blur",()=>{h=null,x.hidden=!0}),_(i,"pointerlockchange",()=>{h=null,x.hidden=!0}),{leave:m,keyboardLink:M,updateHint(){x.hidden=u||!a()||!o()},dispose(){if(!u){u=!0,h=null;for(const T of f)T();for(const T of p)T.remove();g===null?t.removeAttribute("aria-describedby"):t.setAttribute("aria-describedby",g)}}}}function eu({scene:i,renderer:e,environmentTarget:t,materials:n=[],extraMaterials:r=[]}){const s=new Set,o=new Set([...n,...r]),a=new Set,l=new Set,u=new Set,c=h=>{h!=null&&h.isTexture?a.add(h):Array.isArray(h)&&h.forEach(c)};i.traverse(h=>{var f,p;h.geometry&&s.add(h.geometry);for(const g of[].concat(h.material||[]))o.add(g);h.isInstancedMesh&&u.add(h);for(const g of[(f=h.shadow)==null?void 0:f.map,(p=h.shadow)==null?void 0:p.mapPass])g&&l.add(g)}),t&&l.add(t),c(i.environment),c(i.background);for(const h of o){for(const f of Object.values(h))c(f);for(const f of Object.values(h.uniforms||{}))c(f.value)}for(const h of l)for(const f of h.textures||[h.texture])a.delete(f);i.environment=null,i.overrideMaterial=null;for(const h of u)h.dispose();for(const h of s)h.dispose();for(const h of o)h.dispose();for(const h of a)h.dispose(),h.isCanvasTexture&&(h.image=null);for(const h of l)h.dispose();e.dispose(),i.clear()}const rm=20261008;function ua(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function yi(i,e){let t=-.7;const n=Math.max(0,-i-13);return t-=70*(1-Math.exp(-n/140)),t+=(Math.sin(i*.011+e*.017)*10+Math.sin(e*.029+1.3)*Math.cos(i*.013)*12)*Math.min(1,n/120),i<-420&&(t+=Math.min(140,(-i-420)*.22)*(.75+.18*Math.sin(e*.009+.5)+.07*Math.sin(e*.043))),i>8&&(t+=(i-8)*.35),Math.abs(e)>30&&i>-60&&(t+=(Math.abs(e)-30)*.12),t}function sm(i,e,t=0){return i+t>-13&&i-t<9&&e+t>-12&&e-t<11}function om(i,e,t=0){const n=10+Math.max(0,-i-13)*.15;return i<-13&&i>-125&&Math.abs(e-3)<n+t}function am(){const i=ua(rm),e=[],t=[[-22,-18,12,"oak"],[-34,-29,15,"oak"],[-51,-24,14,"oak"],[-25,26,13,"oak"],[-39,38,16,"oak"],[-56,32,14,"oak"],[-20,44,12,"birch"],[12,43,13,"birch"],[-27,63,16,"birch"],[-61,-43,15,"birch"]];for(const[l,u,c,h]of t)e.push({x:l,z:u,height:c,species:h,tier:"near",yaw:i()*Math.PI*2,width:.9+i()*.2});[[-91,-65,34,29,20],[-119,67,32,35,20],[-202,-92,68,49,32],[-211,96,74,49,32],[-376,-190,110,85,54],[-403,155,125,93,60],[-615,-95,99,100,44],[-643,235,100,85,36],[-244,3,44,22,22]].forEach(([l,u,c,h,f],p)=>{for(let g=0;g<f;g++){const _=i()*Math.PI*2,m=Math.sqrt(i()),d=l+Math.cos(_)*m*c,M=u+Math.sin(_)*m*h,y=8+i()*9;om(d,M,y*.34)||e.push({x:d,z:M,height:y,species:"woodland",tier:p<4||p===8?"middle":"far",grove:p,yaw:i()*Math.PI*2,width:.8+i()*.4})}});const r=[],s=[],o=[];[[-16.8,-5.6,3,6.2,80],[-19.2,13.8,4.8,4.7,72],[-31,18.4,7,4.3,64],[-1.5,18.4,8,4.1,64]].forEach(([l,u,c,h,f],p)=>{for(let g=0;g<f;g++){const _=i()*Math.PI*2,m=Math.sqrt(i()),d=l+Math.cos(_)*m*c,M=u+Math.sin(_)*m*h;sm(d,M,.5)||r.push({x:d,z:M,height:.24+i()*.36,width:.6+i()*.6,yaw:i()*Math.PI*2,bed:p})}});for(const[l,u,c]of[[-15.1,-10.5,.8],[-17.3,-12,1.1],[-20.2,-13.8,1.3],[-16.5,13.2,.9],[-18.1,15.2,1.1],[-21.2,17,1.4],[-29.2,22.2,1.3],[-33,24.4,1.7],[-37,26.1,1.5],[-8.5,19.8,1.1],[-5.4,21.8,1.2],[5.7,21,1]])s.push({x:l,z:u,height:c*.6,width:c,yaw:i()*Math.PI*2});for(const[l,u,c]of[[-14.2,-8,.65],[-16.4,-9.1,1.1],[-18.6,-10.6,.8],[-16,13.4,.7],[-20,15.3,1.3],[-21.7,16,.85],[-29,23,1.8],[-32.2,24,1.1],[-34,25,1.5],[-47,-17,2],[-50,-18.1,1.1],[-43,27,1.8]])o.push({x:l,z:u,height:c*.38,width:c,yaw:i()*Math.PI*2});return{trees:e,grass:r,shrubs:s,stones:o}}function Ul(i,e=null){return new Ut({name:e?"exterior-ground":"exterior-vegetation-stone",vertexColors:!0,defines:e?{EXTERIOR_GROUND:1}:{},uniforms:{sunDirection:{value:i.clone().normalize()},hazeColor:{value:new Ne(.84,.61,.48)},...e?{map:{value:e}}:{}},vertexShader:`
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
      }`})}function lm(){const e=new Uint8Array(65536),t=ua(407);for(let r=0;r<128;r++)for(let s=0;s<128;s++){const o=207+t()*38+7*Math.sin(s*.83+Math.sin(r*.24)),a=(r*128+s)*4;e[a]=o,e[a+1]=o+3,e[a+2]=o-4,e[a+3]=255}const n=new aa(e,128,128);return n.name="hillside-ground-grain-128",n.wrapS=n.wrapT=Ti,n.magFilter=Bt,n.minFilter=Jt,n.generateMipmaps=!0,n.anisotropy=4,n.needsUpdate=!0,n}function Nl(i,e=[]){const t=[...e];for(const[n,r,s]of i)for(let o=0;o<=s;o++)t.push(n+(r-n)*o/s);return[...new Set(t)].sort((n,r)=>n-r)}function cm(){const i=Nl([[-1200,-420,20],[-420,-100,20],[-100,-35,12],[-35,20,32],[20,100,10],[100,600,12]],[-13,8]),e=Nl([[-900,-180,12],[-180,-45,10],[-45,45,36],[45,180,10],[180,900,12]],[-30,30]),t=[],n=[],r=[],s=[],o=[],a=new Ne(.25,.31,.115),l=new Ne(.37,.32,.16),u=new Ne(.23,.295,.12),c=new Ne,h=new B;for(const p of e)for(const g of i){t.push(g,yi(g,p),p),h.set(yi(g-.5,p)-yi(g+.5,p),1,yi(g,p-.5)-yi(g,p+.5)).normalize(),n.push(h.x,h.y,h.z);const _=.5+.25*Math.sin(g*.039+Math.sin(p*.034)*1.5)+.18*Math.sin(p*.071+g*.018);c.copy(a).lerp(l,_);const m=Math.exp(-(((g+12)/19)**2)-(p/30)**2);c.lerp(u,m*.6),r.push(c.r,c.g,c.b),s.push(g/4,p/4)}for(let p=0;p<e.length-1;p++)for(let g=0;g<i.length-1;g++){const _=p*i.length+g,m=_+1,d=_+i.length,M=d+1;o.push(_,d,m,m,d,M)}const f=new ct;return f.setAttribute("position",new Ye(t,3)),f.setAttribute("normal",new Ye(n,3)),f.setAttribute("color",new Ye(r,3)),f.setAttribute("uv",new Ye(s,2)),f.setIndex(o),f.computeBoundingBox(),f.computeBoundingSphere(),f}function ha(i,e,t=.1){if(i.index){const a=i;i=i.toNonIndexed(),a.dispose()}const n=i.attributes.position,r=new Float32Array(n.count*3),s=new Ne(e),o=new Ne;for(let a=0;a<n.count;a++){const l=1+t*Math.sin(n.getX(a)*27+n.getY(a)*19+n.getZ(a)*23);o.copy(s).multiplyScalar(l),r.set([o.r,o.g,o.b],a*3)}return i.setAttribute("color",new yt(r,3)),i.deleteAttribute("uv"),i}function Vs(i){const e=la(i,!1);for(const t of i)t.dispose();return e.computeBoundingBox(),e.computeBoundingSphere(),e}function er(i,e,t,n,r,s=6){const o=new B(...i),a=new B(...e),l=a.clone().sub(o),u=new sr(n,t,l.length(),s,1,!0);return u.applyQuaternion(new jt().setFromUnitVectors(new B(0,1,0),l.normalize())),u.translate(...o.add(a).multiplyScalar(.5).toArray()),ha(u,r,.14)}function Ei(i,e,t,n,r,s,o,a=1){const l=new zs(1,a),u=l.attributes.position;for(let c=0;c<u.count;c++){const h=1+.1*Math.sin(u.getX(c)*9+u.getY(c)*7+u.getZ(c)*11);u.setXYZ(c,u.getX(c)*h,u.getY(c)*h,u.getZ(c)*h)}return l.scale(n,r,s),l.translate(i,e,t),ha(l,o,.08)}function um(){const i=[er([0,0,0],[.018,.63,-.018],.035,.017,7430474,8)];return[[-.2,.65,.04,.19,.18,.2],[.18,.69,.02,.22,.2,.18],[-.03,.69,-.19,.2,.21,.18],[.03,.77,.19,.21,.2,.18],[-.11,.86,-.02,.19,.21,.21],[.1,.91,.03,.17,.19,.17],[.01,.78,-.05,.25,.21,.22]].forEach(([t,n,r,s,o,a],l)=>{i.push(er([.01,.34+l*.025,0],[t,n-.035,r],.014,.005,7889994)),i.push(Ei(t,n,r,s,o,a,[7635531,8556627,6781763,9147481][l%4]))}),Vs(i)}function hm(){const i=[er([0,0,0],[-.022,.9,.01],.019,.006,12695706,7)];for(let e=0;e<5;e++){const t=e*2.4,n=.57+e*.08,r=Math.sin(t)*.08,s=Math.cos(t)*.07;i.push(er([0,n-.2,0],[r,n,s],.007,.002,10392951,5)),i.push(Ei(r,n,s,.13,.19,.12,e%2?10329700:8098386))}return Vs(i)}function Fl(i=!1){const e=i?6:8,t=i?[[0,.34],[.24,.49],[.29,.7],[.18,.93],[0,1.04]]:[[0,.32],[.24,.45],[.3,.64],[.26,.83],[.15,1],[0,1.06]],n=new Os(t.map(([s,o])=>new Ve(s,o)),e),r=n.attributes.position;for(let s=0;s<r.count;s++){const o=1+.12*Math.sin(r.getX(s)*17+r.getZ(s)*11+r.getY(s)*13);r.setXYZ(s,r.getX(s)*o,r.getY(s),r.getZ(s)*o)}return Vs([ha(n,7899984),er([0,0,0],[0,.52,0],.027,.016,7890768,i?4:5)])}function fm(){return Vs([Ei(-.35,.38,.03,.55,.6,.51,6782280,0),Ei(.3,.47,-.04,.62,.7,.54,8491607,0),Ei(.02,.5,.22,.53,.66,.49,8886107,0)])}function dm(){return Ei(0,.2,0,.6,.75,.5,11182474,0)}function pm(){const i=[],e=[],t=new Ne(8227656),n=new Ne(11510376);for(let s=0;s<4;s++){const o=s*2.4,a=Math.cos(o),l=Math.sin(o),u=.65+s%3*.17,c=.065,h=[[-l*c,0,a*c],[l*c,0,-a*c],[a*.16-l*c*.5,u*.6,l*.16+a*c*.5],[a*.3,u,l*.3]];for(const f of[0,1,2,1,3,2,2,1,0,2,3,1]){i.push(...h[f]);const p=t.clone().lerp(n,h[f][1]/u);e.push(p.r,p.g,p.b)}}const r=new ct;return r.setAttribute("position",new Ye(i,3)),r.setAttribute("color",new Ye(e,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),r}function mm(i){const e=new Ut({name:"exterior-sunset",side:gt,depthWrite:!1,uniforms:{sunDir:{value:i.clone()}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 zen = vec3(0.16,0.27,0.55); vec3 hor = vec3(1.25,0.74,0.45); vec3 below = vec3(0.55,0.42,0.36);
        vec3 col = mix(hor, zen, pow(clamp(h,0.0,1.0), 0.5));
        col = mix(col, below, 1.0 - smoothstep(-0.2,0.0,h));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.55,0.25)*pow(s,5.0)*0.7 + vec3(1.0,0.75,0.45)*pow(s,90.0)*2.5 + smoothstep(0.9993,0.9996,s)*vec3(18.0,12.0,7.0);
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),t=new et(new Pi(1200,32,16),e);return t.name="exterior-sky",t.frustumCulled=!1,t.renderOrder=-1,t.matrixAutoUpdate=!1,t}function Gi(i,e,t,n,r){const s=new Fs(t,n,e.length);s.name=i;const o=new Ke,a=new jt,l=new B,u=new B,c=new B(0,1,0),h=new Ne,f=ua(r);return e.forEach((p,g)=>{const{x:_,z:m,height:d,width:M,yaw:y}=p;l.set(_,yi(_,m)-.045,m),a.setFromAxisAngle(c,y);const x=p.species?d*M:M;u.set(x,d,x),o.compose(l,a,u),s.setMatrixAt(g,o);const T=f();h.setRGB(.88+T*.23,.92+T*.14,.88+T*.11),s.setColorAt(g,h)}),s.instanceMatrix.setUsage(Ji),s.instanceMatrix.needsUpdate=!0,s.instanceColor.setUsage(Ji),s.instanceColor.needsUpdate=!0,s.matrixAutoUpdate=!1,s.computeBoundingBox(),s.computeBoundingSphere(),s}function gm(i){const e=new Set,t=new Set,n=new Set,r=[];let s=0,o=0,a=0;i.traverse(c=>{var _,m;if(!c.isMesh)return;const h=c.geometry,f=c.material,p=c.isInstancedMesh?c.count:1,g=(h.index?h.index.count:h.attributes.position.count)/3;if(o+=g*p,a+=c.isInstancedMesh?p:0,!e.has(h)){for(const d of Object.values(h.attributes))s+=d.array.byteLength;s+=((_=h.index)==null?void 0:_.array.byteLength)||0,e.add(h)}c.instanceMatrix&&(s+=c.instanceMatrix.array.byteLength),c.instanceColor&&(s+=c.instanceColor.array.byteLength),t.add(f);for(const d of Object.values(f.uniforms||{}))(m=d.value)!=null&&m.isTexture&&n.add(d.value);r.push({name:c.name,instances:p,templateTriangles:g,submittedTriangles:g*p})});let l=0,u=0;for(const c of n){const{width:h,height:f,data:p}=c.image;l+=p.byteLength;let g=h,_=f;do{if(u+=g*_*4,!c.generateMipmaps||g===1&&_===1)break;g=Math.max(1,g>>1),_=Math.max(1,_>>1)}while(!0)}return{triangles:o,drawCallsUpperBound:r.length,instances:a,geometries:e.size,materials:t.size,textures:n.size,bufferBytes:s,textureBytes:l,textureBytesWithMipmaps:u,batches:r}}function _m({sunDirection:i}){const e=new Wn;e.name="hillside-exterior",e.matrixAutoUpdate=!1;const t=am(),n=Ul(i),r=lm(),s=new et(cm(),Ul(i,r));s.name="exterior-continuous-terrain",s.matrixAutoUpdate=!1,e.add(mm(i),s);const o=um(),a=hm(),l=Fl(),u=Fl(!0);for(const f of["oak","birch"]){const p=t.trees.filter(g=>g.species===f);e.add(Gi(`exterior-near-${f}`,p,f==="oak"?o:a,n,f==="oak"?16:23))}for(const[f,p]of[["middle",[0,2]],["middle",[1,3,8]],["far",[4,6]],["far",[5,7]]]){const g=t.trees.filter(_=>p.includes(_.grove));e.add(Gi(`exterior-${f}-groves-${p.join("-")}`,g,f==="middle"?l:u,n,70+p[0]))}const c=pm();for(let f=0;f<4;f++){const p=t.grass.filter(g=>g.bed===f);e.add(Gi(`exterior-meadow-bed-${f}`,p,c,n,30+f))}e.add(Gi("exterior-low-shrubs",t.shrubs,fm(),n,17)),e.add(Gi("exterior-sandstone-outcrops",t.stones,dm(),n,12)),e.traverse(f=>{f.castShadow=!1,f.receiveShadow=!1}),e.updateMatrixWorld(!0);const h=gm(e);return e.userData.exteriorBudget=h,{group:e,layout:t,budget:h,dispose(){e.removeFromParent();const f=new Set,p=new Set;e.traverse(g=>{g.geometry&&f.add(g.geometry),g.material&&p.add(g.material),g.isInstancedMesh&&g.dispose()}),f.forEach(g=>g.dispose()),p.forEach(g=>g.dispose()),r.dispose()}}}function xm({document:i,window:e,onCancel:t=()=>{}}){var x;const n=i.getElementById("loading"),r=i.getElementById("loading-status"),s=i.getElementById("loading-retry"),o=i.getElementById("loading-error");(x=e.__libraryBootErrorCleanup)==null||x.call(e);let a="loading",l=null,u=null,c=!1,h=!1;const f=()=>Object.assign(new Error("Library loading cancelled"),{name:"AbortError"});function p(){l&&(e.cancelAnimationFrame(l.frame),l.timer!==null&&e.clearTimeout(l.timer),l.reject(f()),l=null)}function g(){u!==null&&e.clearTimeout(u),u=null,a==="ready"&&(n.hidden=!0)}function _(){h||c||a!=="loading"||(h=!0,a="cancelled",p(),t())}function m(){a==="loading"?_():g()}function d(T){h&&T.persisted&&e.location.reload()}function M(){c||h||(a="error",p(),g(),n.hidden=!1,n.classList.remove("is-ready"),n.dataset.state="error",n.setAttribute("aria-busy","false"),r.textContent="Library could not load.",o.hidden=s.hidden=!1)}const y=()=>e.location.reload();return s.addEventListener("click",y),e.addEventListener("pagehide",m),e.addEventListener("pageshow",d),n.addEventListener("transitionend",g),{get cancelled(){return h},get state(){return a},async stage(T,E){if(c||h||a!=="loading")throw f();if(!Number.isInteger(T)||T<0||T>3)throw new RangeError("Invalid loading stage");if(n.dataset.stage=String(T),r.textContent=E,await new Promise((R,C)=>{l={frame:null,timer:null,reject:C},l.frame=e.requestAnimationFrame(()=>{l.timer=e.setTimeout(()=>{l=null,R()},0)})}),c||h)throw f()},ready(){var T,E;c||h||a!=="loading"||(a="ready",n.dataset.stage="4",n.dataset.state="ready",n.setAttribute("aria-busy","false"),r.textContent="Ready",(T=e.__libraryBootErrorCleanup)==null||T.call(e),n.classList.add("is-ready"),(E=e.matchMedia)!=null&&E.call(e,"(prefers-reduced-motion: reduce)").matches?g():u=e.setTimeout(g,240))},fail:M,dispose(){var T;c||(c=!0,p(),g(),(T=e.__libraryBootErrorCleanup)==null||T.call(e),s.removeEventListener("click",y),e.removeEventListener("pagehide",m),e.removeEventListener("pageshow",d),n.removeEventListener("transitionend",g))}}}const wt={scene:null,renderer:null,environmentTarget:null,materials:null,cleanup:null};let Ol=!1;function tu(){var i;Ol||(Ol=!0,wt.cleanup?wt.cleanup():wt.scene&&wt.renderer?eu({scene:wt.scene,renderer:wt.renderer,environmentTarget:wt.environmentTarget,materials:Object.values(wt.materials||{})}):(i=wt.renderer)==null||i.dispose())}const Vn=xm({document,window,onCancel:tu});window.__libraryLoading=Vn;async function vm(){await Vn.stage(0,"Preparing library");const i=document.getElementById("c"),e=new Vc({canvas:i,antialias:!0,powerPreference:"high-performance"});wt.renderer=e;const t=Math.min(window.devicePixelRatio||1,1);let n=t;e.setPixelRatio(n),e.setSize(window.innerWidth,window.innerHeight),e.toneMapping=Oo,e.toneMappingExposure=1.05,e.outputColorSpace=mt,e.shadowMap.enabled=!0,e.shadowMap.type=Es,e.shadowMap.autoUpdate=!1;const r=new oa;wt.scene=r,r.background=new Ne(9075306);const s=new At(70,window.innerWidth/window.innerHeight,.05,2500);s.rotation.order="YXZ";const o=new Ms(e),a=new f0,l=o.fromScene(a,.04);wt.environmentTarget=l,r.environment=l.texture,a.dispose(),o.dispose(),r.environmentIntensity=.22,await Vn.stage(1,"Building room");const u=Yn(20261006),c=M0();wt.materials=c;const h=new E0(Yn(77)),f=y0(c,h,u);f.B.finish(r);const p=h.build(g0(31));r.add(p),Q0(r,Rl,Al,A0);const g=nm(r,c,To,Dl),_=f.B.solids;h.mats.length=h.cols.length=h.vars.length=0,await Vn.stage(2,"Adding scenery");const m=new B(-.9,.4,.14).normalize(),d=new Kc(16757611,8);d.target.position.set(-2,3,-1),d.position.copy(d.target.position).addScaledVector(m,60),d.castShadow=!0,d.shadow.mapSize.set(4096,4096);const M=d.shadow.camera;M.left=-17,M.right=17,M.top=15,M.bottom=-15,M.near=20,M.far=100,M.updateProjectionMatrix(),d.shadow.bias=-4e-4,d.shadow.normalBias=.025,r.add(d,d.target);const y=new Yc(13227775,6964264,.42);r.add(y);const x=new Ss(16754792,11,24,1.2);x.position.set(3,3.6,-.8),r.add(x);const T=[];for(const k of f.lights){const $=new Ss(k.c,k.i,k.d,2);$.position.copy(k.p),$.userData=k,r.add($),T.push($)}const E=_m({sunDirection:m});r.add(E.group);const R=m.clone().negate();{const k=[],$=[];for(const Be of f.windows.slice(0,4))for(let le=0;le<4;le++){const pe=Be[le],we=Be[(le+1)%4],Fe=pe.clone().addScaledVector(R,12),ve=we.clone().addScaledVector(R,12);for(const[He,Oe,je]of[[pe,0,0],[we,0,1],[ve,1,1],[pe,0,0],[ve,1,1],[Fe,1,0]])k.push(He.x,He.y,He.z),$.push(Oe,je)}const de=new ct;de.setAttribute("position",new Ye(k,3)),de.setAttribute("uv",new Ye($,2));const ce=new Ut({transparent:!0,depthWrite:!1,blending:Zi,side:Rt,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float t; varying vec2 vUv; varying vec3 vW;
      void main(){ float along = vUv.x; float across = vUv.y;
        float a = pow(1.0-along, 1.6) * smoothstep(0.0,0.04,along) * smoothstep(0.0,0.25,across) * smoothstep(1.0,0.75,across);
        float n = 0.75 + 0.25*sin(vW.x*1.7 + vW.y*2.3 + t*0.3) * sin(vW.z*1.3 - t*0.2);
        float fadeFloor = smoothstep(0.0, 0.6, vW.y);
        gl_FragColor = vec4(vec3(1.0,0.72,0.42)*a*n*0.11*fadeFloor, 1.0); }`}),ue=new et(de,ce);ue.frustumCulled=!1,ue.renderOrder=5,r.add(ue),window.__shafts=ce}let C;{const k=Yn(9),$=[],J=[];for(const ue of f.windows)for(let Be=0;Be<420;Be++){const le=k(),pe=k(),we=ue[0].clone().lerp(ue[1],le).lerp(ue[3].clone().lerp(ue[2],le),pe).addScaledVector(R,.5+k()*11);we.y<.1||we.y>10||we.x>6.9||we.z<-9.9||we.z>8.9||($.push(we.x,we.y,we.z),J.push(k()*100))}const de=new ct;de.setAttribute("position",new Ye($,3)),de.setAttribute("phase",new Ye(J,1)),C=new Ut({transparent:!0,depthWrite:!1,blending:Zi,uniforms:{t:{value:0},map:{value:v0()},scale:{value:window.innerHeight*.5}},vertexShader:`uniform float t; uniform float scale; attribute float phase; varying float vA;
      void main(){ vec3 p = position + vec3(sin(t*0.11+phase)*0.25, sin(t*0.07+phase*1.3)*0.3, cos(t*0.09+phase*0.7)*0.25);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        gl_PointSize = clamp(0.018*scale/-mv.z, 0.0, 6.0); vA = 0.55+0.45*sin(t*0.5+phase); }`,fragmentShader:"uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0,0.8,0.55)*a*vA*0.8, 1.0); }"});const ce=new Xc(de,C);ce.frustumCulled=!1,r.add(ce)}await Vn.stage(3,"Preparing view");const v={pos:new B,vy:0,yaw:0,pitch:0,eye:1.62,eyeCur:1.62,smoothY:0,vel:new B,radius:.28,step:.42,height:1.75},S=[{p:[3.4,0,4.3],yaw:.78,pitch:.1,name:"Entrance by the hearth"},{p:[-2,0,-3.7],yaw:1.2,pitch:-.05,name:"Lower shelves, between the stacks"},{p:[-8.2,0,4.9],yaw:1.5,pitch:-.05,name:"Window reading alcove"},{p:[5.6,0,8],yaw:0,pitch:.18,name:"Foot of the staircase"},{p:[1.2,Uo.GY,-7.6],yaw:Math.PI-.3,pitch:-.32,name:"Gallery overlook"}];function L(k){const $=S[k];v.pos.set($.p[0],$.p[1],$.p[2]),v.yaw=$.yaw,v.pitch=$.pitch,v.vy=0,v.vel.set(0,0,0),v.smoothY=v.pos.y,O($.name)}function D(k,$,J){let de=-1/0;const ce=v.radius*.7;for(const ue of _)k+ce<ue.x0||k-ce>ue.x1||$+ce<ue.z0||$-ce>ue.z1||ue.y1<=J+v.step&&ue.y1>de&&(de=ue.y1);return de}function F(k,$,J,de){const ce=v.radius;for(const ue of _)if(!(k+ce<=ue.x0||k-ce>=ue.x1||$+ce<=ue.z0||$-ce>=ue.z1)&&ue.y0<J+de&&ue.y1>J+v.step)return!0;return!1}const U=new Set;let j=!1,H=null,q=null,Y=null,re=!1;addEventListener("keydown",k=>{if(!(re||H!=null&&H.isOpen||q!=null&&q.paused||ca(k.target))&&(U.add(k.code),!k.repeat)){if(k.code==="KeyR"&&L(0),k.code.startsWith("Digit")){const $=+k.code.slice(5)-1;$>=0&&$<S.length&&L($)}k.code==="KeyC"&&(j=!j),k.code==="KeyF"&&w.classList.toggle("show"),k.code==="KeyH"&&oe.classList.toggle("hide"),k.code==="KeyP"&&(n=n>.8?Math.max(.6,n-.25):t,e.setPixelRatio(n),Re(),O(`Render scale ${Math.round(n*100)}%`)),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(k.code)&&k.preventDefault()}}),addEventListener("keyup",k=>U.delete(k.code)),addEventListener("blur",()=>U.clear());const he=document.getElementById("overlay"),oe=document.getElementById("help"),w=document.getElementById("stats"),N=document.getElementById("toast");let I=0;function O(k){N.textContent=k,N.classList.add("show"),I=2.2}function X(){U.clear(),v.vel.set(0,0,0)}const te=T0({canvas:i,overlay:he,menuButton:document.getElementById("controls-toggle"),player:v,camera:s,toast:O,releaseMovement:X,isInputBlocked:()=>!!(re||H!=null&&H.isOpen||q!=null&&q.paused),setMenuPaused:k=>q==null?void 0:q.setPaused("controls",k)}),Z=new B;H=em({legacyFactory:C0,camera:s,solids:_,document,window,canvas:i,content:Al,look:te,releaseMovement:X,dialog:document.getElementById("reader"),hint:document.getElementById("interaction-hint"),returnFocus:i,canInteract:()=>!re&&!te.menuOpen&&!(q!=null&&q.paused)&&document.hasFocus(),getTarget:()=>Pl(s.position,s.getWorldDirection(Z),Rl,_,w0),setPaused:k=>q==null?void 0:q.setPaused("reading",k)}),Y=im({document,window,canvas:i,content:Dl,controls:he.querySelector(".card"),readerFooter:document.querySelector(".reader-footer"),canInteract:()=>!re&&!H.isOpen&&!te.menuOpen&&!(q!=null&&q.paused)&&document.hasFocus(),getTarget:()=>Pl(s.position,s.getWorldDirection(Z),[To],_,To.reach),beforeLeave:K});const ne=new B;function se(k){const $=(U.has("KeyW")||U.has("ArrowUp")?1:0)-(U.has("KeyS")||U.has("ArrowDown")?1:0),J=(U.has("KeyD")||U.has("ArrowRight")?1:0)-(U.has("KeyA")||U.has("ArrowLeft")?1:0),de=(U.has("ShiftLeft")||U.has("ShiftRight")?4.6:2.5)*(j?.55:1),ce=Math.sin(v.yaw),ue=Math.cos(v.yaw),Be=-ce*$+ue*J,le=-ue*$-ce*J,pe=Math.hypot(Be,le)||1,we=ne.set(Be/pe*de*($||J?1:0),0,le/pe*de*($||J?1:0)),Fe=1-Math.exp(-k*12);v.vel.lerp(we,Fe);const ve=j?1.15:v.height,He=v.pos.x+v.vel.x*k,Oe=v.pos.z+v.vel.z*k;F(He,Oe,v.pos.y,ve)?F(He,v.pos.z,v.pos.y,ve)?F(v.pos.x,Oe,v.pos.y,ve)?v.vel.multiplyScalar(.2):(v.pos.z=Oe,v.vel.x*=.5):(v.pos.x=He,v.vel.z*=.5):(v.pos.x=He,v.pos.z=Oe);const je=D(v.pos.x,v.pos.z,v.pos.y);je>=v.pos.y-v.step&&je>-1/0&&v.vy<=0?(v.pos.y=je,v.vy=0):(v.vy-=9.8*k,v.pos.y+=v.vy*k,je>-1/0&&v.pos.y<je&&(v.pos.y=je,v.vy=0)),v.pos.y<-10&&L(0),v.smoothY+=(v.pos.y-v.smoothY)*(1-Math.exp(-k*14)),v.eyeCur+=((j?1:v.eye)-v.eyeCur)*(1-Math.exp(-k*10)),s.position.set(v.pos.x,v.smoothY+v.eyeCur,v.pos.z),s.rotation.set(v.pitch,v.yaw,0)}function Re(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),C.uniforms.scale.value=window.innerHeight*n*.5}addEventListener("resize",Re),Re();const Le=new Qn({colorWrite:!1}),Ae=[];r.traverse(k=>{k.material&&(k.material.transparent||k.material.isShaderMaterial||k.isPoints)&&Ae.push(k)}),e.autoClear=!1;let z=!1;function ke(){if(e.clear(),z){for(const k of Ae)k.visible=!1;r.overrideMaterial=Le,e.render(r,s),r.overrideMaterial=null;for(const k of Ae)k.visible=!0}e.render(r,s)}const Ee=[];let Te=0,_e=0,De=0;L(0),se(0),N.classList.remove("show"),e.compile(r,s),r.traverse(k=>{const $=k.material;if($){for(const J of["map","bumpMap"])$[J]&&e.initTexture($[J]);$.uniforms&&$.uniforms.map&&e.initTexture($.uniforms.map.value)}}),e.shadowMap.needsUpdate=!0;function be(k,$){const J=Math.min($,.05);De+=J,se(J),_e+=J,_e>=.125&&(_e=0,H.updateHint(),Y.updateHint());for(const de of T)de.userData.fire&&(de.intensity=de.userData.i*(.82+.12*Math.sin(De*9.1)+.08*Math.sin(De*23.7+1.3)));if(window.__shafts.uniforms.t.value=De,C.uniforms.t.value=De,ke(),$>0&&$<.25&&document.visibilityState==="visible"&&Ee.push($*1e3),Ee.length>240&&Ee.shift(),Te+=$,Te>.5){Te=0;const de=[...Ee].sort((le,pe)=>le-pe),ce=de.reduce((le,pe)=>le+pe,0)/de.length,ue=de[Math.floor(de.length*.99)-1]||ce,Be=e.info.render;w.textContent=`${(1e3/ce).toFixed(0)} fps  avg ${ce.toFixed(1)} ms  p99 ${ue.toFixed(1)} ms
calls ${Be.calls}  tris ${(Be.triangles/1e3).toFixed(0)}k  scale ${Math.round(n*100)}%
pos ${v.pos.x.toFixed(1)} ${v.pos.y.toFixed(2)} ${v.pos.z.toFixed(1)}`}I>0&&(I-=J,I<=0&&N.classList.remove("show"))}q=tm({tick:be,request:k=>window.requestAnimationFrame(k),cancel:k=>window.cancelAnimationFrame(k),now:()=>performance.now()});const P=[];function b(k,$,J){k.addEventListener($,J),P.push(()=>k.removeEventListener($,J))}function K(){var k;if(!re){re=!0,X(),te.pause(),q==null||q.setPaused("exit",!0),Y==null||Y.dispose(),H.dispose(),te.dispose(),q==null||q.dispose();for(const $ of P)$();eu({scene:r,renderer:e,environmentTarget:l,materials:Object.values(c),extraMaterials:[Le,...g.materials]}),delete window.__shafts,delete window.__lib,((k=window.__libraryLoading)==null?void 0:k.state)==="ready"&&(window.__libraryLoading.dispose(),delete window.__libraryLoading)}}wt.cleanup=K,b(window,"blur",()=>{X(),q.setPaused("focus",!0)}),b(window,"focus",()=>q.setPaused("focus",!1)),b(document,"visibilitychange",()=>q.setPaused("visibility",document.visibilityState!=="visible")),b(window,"pagehide",k=>{te.pause(),q.setPaused("page",!0),k.persisted||K()}),b(window,"pageshow",()=>{te.resume(),q.setPaused("page",!1),q.setPaused("visibility",document.visibilityState!=="visible"),q.setPaused("focus",!document.hasFocus())}),ke(),q.setPaused("visibility",document.visibilityState!=="visible"),q.setPaused("focus",!document.hasFocus()),q.start(),window.__lib={P:v,setView:L,solids:_,renderer:e,scene:r,camera:s,books:p,drawFrame:ke,setPrepass:k=>z=k,sim:(k,$)=>{k.forEach(J=>U.add(J));for(let J=0;J<$;J+=1/60)se(1/60);return k.forEach(J=>U.delete(J)),v.pos.toArray().map(J=>+J.toFixed(2))}},Vn.ready()}vm().catch(i=>{i.name!=="AbortError"&&(console.error("Library initialization failed:",i),Vn.fail()),tu()});
