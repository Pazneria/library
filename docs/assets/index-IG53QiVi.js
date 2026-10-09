(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Es="170",kl=0,Ao=1,Hl=2,Ts=1,Gl=2,Zt=3,gn=0,gt=1,Rt=2,fn=0,Xn=1,Zi=2,Ro=3,Co=4,Vl=5,wn=100,Wl=101,Xl=102,ql=103,Yl=104,jl=200,Kl=201,$l=202,Zl=203,Fr=204,Or=205,Jl=206,Ql=207,ec=208,tc=209,nc=210,ic=211,rc=212,sc=213,oc=214,Br=0,zr=1,kr=2,jn=3,Hr=4,Gr=5,Vr=6,Wr=7,ws=0,ac=1,lc=2,dn=0,cc=1,uc=2,hc=3,ko=4,fc=5,dc=6,pc=7,Ho=300,Kn=301,$n=302,Xr=303,qr=304,tr=306,Ti=1e3,An=1001,Yr=1002,Ct=1003,mc=1004,Vi=1005,Bt=1006,Ur=1007,Jt=1008,en=1009,Go=1010,Vo=1011,wi=1012,As=1013,Cn=1014,qt=1015,Ri=1016,Rs=1017,Cs=1018,Zn=1020,Wo=35902,Xo=1021,qo=1022,zt=1023,Yo=1024,jo=1025,qn=1026,Jn=1027,Ps=1028,Is=1029,Ko=1030,Ls=1031,Ds=1033,qi=33776,Yi=33777,ji=33778,Ki=33779,jr=35840,Kr=35841,$r=35842,Zr=35843,Jr=36196,Qr=37492,es=37496,ts=37808,ns=37809,is=37810,rs=37811,ss=37812,os=37813,as=37814,ls=37815,cs=37816,us=37817,hs=37818,fs=37819,ds=37820,ps=37821,$i=36492,ms=36494,gs=36495,$o=36283,_s=36284,xs=36285,vs=36286,gc=3200,_c=3201,Us=0,xc=1,hn="",mt="srgb",ti="srgb-linear",nr="linear",nt="srgb",Hn=7680,Po=519,vc=512,Mc=513,yc=514,Zo=515,Sc=516,bc=517,Ec=518,Tc=519,Ji=35044,Io="300 es",Qt=2e3,Qi=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,Lo=180/Math.PI;function ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function ou(n,e){return(n%e+e)%e}function Ys(n,e,t){return(1-t)*n+t*e}function Di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],S=r[4],v=r[7],C=r[2],w=r[5],R=r[8];return s[0]=o*_+a*y+l*C,s[3]=o*m+a*S+l*w,s[6]=o*p+a*v+l*R,s[1]=u*_+c*y+h*C,s[4]=u*m+c*S+h*w,s[7]=u*p+c*v+h*R,s[2]=f*_+d*y+g*C,s[5]=f*m+d*S+g*w,s[8]=f*p+d*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,d=u*s-o*l,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(js.makeScale(e,t)),this}rotate(e){return this.premultiply(js.makeRotation(-e)),this}translate(e,t){return this.premultiply(js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const js=new He;function wc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ac(){const n=Ms("canvas");return n.style.display="block",n}const ba={};function Wi(n){n in ba||(ba[n]=!0,console.warn(n))}function au(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function lu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:ti,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(n.r=pn(n.r),n.g=pn(n.g),n.b=pn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(n.r=bi(n.r),n.g=bi(n.g),n.b=bi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hn?nr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ea=[.64,.33,.3,.6,.15,.06],Ta=[.2126,.7152,.0722],wa=[.3127,.329],Aa=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ra=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[ti]:{primaries:Ea,whitePoint:wa,transfer:nr,toXYZ:Aa,fromXYZ:Ra,luminanceCoefficients:Ta,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:Ea,whitePoint:wa,transfer:nt,toXYZ:Aa,fromXYZ:Ra,luminanceCoefficients:Ta,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});let si;class Rc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=Ms("canvas")),si.width=e.width,si.height=e.height;const i=si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pn(t[i]/255)*255):t[i]=pn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uu=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ks(r[o].image)):s.push(Ks(r[o]))}else s=Ks(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ks(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hu=0;class _t extends ni{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,i=An,r=An,s=Bt,o=Jt,a=zt,l=en,u=_t.DEFAULT_ANISOTROPY,c=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ir(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=Ho;_t.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,v=(d+1)/2,C=(p+1)/2,w=(c+f)/4,R=(h+_)/4,b=(g+m)/4;return S>v&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=R/i):v>C?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=b/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-c)/y,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cc extends ni{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new _t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Cc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qo extends _t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pc extends _t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||u!==d||c!==g){let m=1-a;const p=l*f+u*d+c*g+h*_,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const C=Math.sqrt(S),w=Math.atan2(C,p*y);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const v=a*y;if(l=l*m+f*v,u=u*m+d*v,c=c*m+g*v,h=h*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=C,u*=C,c*=C,h*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+c*h+l*d-u*f,e[t+1]=l*g+c*f+u*h-a*d,e[t+2]=u*g+c*d+a*f-l*h,e[t+3]=c*g-a*h-l*f-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*d*g,this._y=u*d*h-f*c*g,this._z=u*c*g+f*d*h,this._w=u*c*h-f*d*g;break;case"YXZ":this._x=f*c*h+u*d*g,this._y=u*d*h-f*c*g,this._z=u*c*g-f*d*h,this._w=u*c*h+f*d*g;break;case"ZXY":this._x=f*c*h-u*d*g,this._y=u*d*h+f*c*g,this._z=u*c*g+f*d*h,this._w=u*c*h-f*d*g;break;case"ZYX":this._x=f*c*h-u*d*g,this._y=u*d*h+f*c*g,this._z=u*c*g-f*d*h,this._w=u*c*h+f*d*g;break;case"YZX":this._x=f*c*h+u*d*g,this._y=u*d*h+f*c*g,this._z=u*c*g-f*d*h,this._w=u*c*h-f*d*g;break;case"XZY":this._x=f*c*h-u*d*g,this._y=u*d*h-f*c*g,this._z=u*c*g+f*d*h,this._w=u*c*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $s.copy(this).projectOnVector(e),this.sub($s)}reflect(e){return this.sub($s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new z,Ca=new jt;class In{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(s,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lr.copy(i.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),cr.subVectors(this.max,Ui),oi.subVectors(e.a,Ui),ai.subVectors(e.b,Ui),li.subVectors(e.c,Ui),vn.subVectors(ai,oi),Mn.subVectors(li,ai),Nn.subVectors(oi,li);let t=[0,-vn.z,vn.y,0,-Mn.z,Mn.y,0,-Nn.z,Nn.y,vn.z,0,-vn.x,Mn.z,0,-Mn.x,Nn.z,0,-Nn.x,-vn.y,vn.x,0,-Mn.y,Mn.x,0,-Nn.y,Nn.x,0];return!Zs(t,oi,ai,li,cr)||(t=[1,0,0,0,1,0,0,0,1],!Zs(t,oi,ai,li,cr))?!1:(ur.crossVectors(vn,Mn),t=[ur.x,ur.y,ur.z],Zs(t,oi,ai,li,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new z,new z,new z,new z,new z,new z,new z,new z],Gt=new z,lr=new In,oi=new z,ai=new z,li=new z,vn=new z,Mn=new z,Nn=new z,Ui=new z,cr=new z,ur=new z,Fn=new z;function Zs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fn.fromArray(n,s);const a=r.x*Math.abs(Fn.x)+r.y*Math.abs(Fn.y)+r.z*Math.abs(Fn.z),l=e.dot(Fn),u=t.dot(Fn),c=i.dot(Fn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const fu=new In,Ni=new z,Js=new z;class ii{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ni,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Js.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(Js)),this.expandByPoint(Ni.copy(e.center).sub(Js))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new z,Qs=new z,hr=new z,yn=new z,eo=new z,fr=new z,to=new z;class ea{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qs.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(Qs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=yn.dot(this.direction),l=-yn.dot(hr),u=yn.lengthSq(),c=Math.abs(1-o*o);let h,f,d,g;if(c>0)if(h=o*l-a,f=o*a-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qs).addScaledVector(hr,f),d}intersectSphere(e,t){an.subVectors(e.center,this.origin);const i=an.dot(this.direction),r=an.dot(an)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,i,r,s){eo.subVectors(t,e),fr.subVectors(i,e),to.crossVectors(eo,fr);let o=this.direction.dot(to),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yn.subVectors(this.origin,e);const l=a*this.direction.dot(fr.crossVectors(yn,fr));if(l<0)return null;const u=a*this.direction.dot(eo.cross(yn));if(u<0||l+u>o)return null;const c=-a*yn.dot(to);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,r,s,o,a,l,u,c,h,f,d,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,f,d,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ci.setFromMatrixColumn(e,0).length(),s=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,d=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=d+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+d*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,d=l*h,g=u*c,_=u*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,d=l*h,g=u*c,_=u*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,d=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=g*u-d,t[8]=f*u+_,t[1]=l*h,t[5]=_*u+f,t[9]=d*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+_,t[5]=o*c,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(du,e,pu)}lookAt(e,t,i){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Sn.crossVectors(i,Lt),Sn.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Sn.crossVectors(i,Lt)),Sn.normalize(),dr.crossVectors(Lt,Sn),r[0]=Sn.x,r[4]=dr.x,r[8]=Lt.x,r[1]=Sn.y,r[5]=dr.y,r[9]=Lt.y,r[2]=Sn.z,r[6]=dr.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],S=i[7],v=i[11],C=i[15],w=r[0],R=r[4],b=r[8],x=r[12],M=r[1],P=r[5],O=r[9],F=r[13],B=r[2],K=r[6],H=r[10],Y=r[14],j=r[3],ae=r[7],fe=r[11],ie=r[15];return s[0]=o*w+a*M+l*B+u*j,s[4]=o*R+a*P+l*K+u*ae,s[8]=o*b+a*O+l*H+u*fe,s[12]=o*x+a*F+l*Y+u*ie,s[1]=c*w+h*M+f*B+d*j,s[5]=c*R+h*P+f*K+d*ae,s[9]=c*b+h*O+f*H+d*fe,s[13]=c*x+h*F+f*Y+d*ie,s[2]=g*w+_*M+m*B+p*j,s[6]=g*R+_*P+m*K+p*ae,s[10]=g*b+_*O+m*H+p*fe,s[14]=g*x+_*F+m*Y+p*ie,s[3]=y*w+S*M+v*B+C*j,s[7]=y*R+S*P+v*K+C*ae,s[11]=y*b+S*O+v*H+C*fe,s[15]=y*x+S*F+v*Y+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*d-i*l*d)+_*(+t*l*d-t*u*f+s*o*f-r*o*d+r*u*c-s*l*c)+m*(+t*u*h-t*a*d-s*o*h+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-t*l*h+t*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*u-_*f*u+_*l*d-a*m*d-h*l*p+a*f*p,S=g*f*u-c*m*u-g*l*d+o*m*d+c*l*p-o*f*p,v=c*_*u-g*h*u+g*a*d-o*_*d-c*a*p+o*h*p,C=g*h*l-c*_*l-g*a*f+o*_*f+c*a*m-o*h*m,w=t*y+i*S+r*v+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=y*R,e[1]=(_*f*s-h*m*s-_*r*d+i*m*d+h*r*p-i*f*p)*R,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*p+i*l*p)*R,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*d-i*l*d)*R,e[4]=S*R,e[5]=(c*m*s-g*f*s+g*r*d-t*m*d-c*r*p+t*f*p)*R,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*p-t*l*p)*R,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*d+t*l*d)*R,e[8]=v*R,e[9]=(g*h*s-c*_*s-g*i*d+t*_*d+c*i*p-t*h*p)*R,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*p+t*a*p)*R,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*d-t*a*d)*R,e[12]=C*R,e[13]=(c*_*r-g*h*r+g*i*f-t*_*f-c*i*m+t*h*m)*R,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*R,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,d=s*c,g=s*h,_=o*c,m=o*h,p=a*h,y=l*u,S=l*c,v=l*h,C=i.x,w=i.y,R=i.z;return r[0]=(1-(_+p))*C,r[1]=(d+v)*C,r[2]=(g-S)*C,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+p))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(g+S)*R,r[9]=(m-y)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ci.set(r[0],r[1],r[2]).length();const o=ci.set(r[4],r[5],r[6]).length(),a=ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const u=1/s,c=1/o,h=1/a;return Vt.elements[0]*=u,Vt.elements[1]*=u,Vt.elements[2]*=u,Vt.elements[4]*=c,Vt.elements[5]*=c,Vt.elements[6]*=c,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Qt){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(a===Qt)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Qi)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Qt){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),f=(t+e)*u,d=(i+r)*c;let g,_;if(a===Qt)g=(o+s)*h,_=-2*h;else if(a===Qi)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ci=new z,Vt=new je,du=new z(0,0,0),pu=new z(1,1,1),Sn=new z,dr=new z,Lt=new z,Pa=new je,Ia=new jt;class Pt{constructor(e=0,t=0,i=0,r=Pt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pt.DEFAULT_ORDER="XYZ";class ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mu=0;const La=new z,ui=new jt,ln=new je,pr=new z,Fi=new z,gu=new z,_u=new jt,Da=new z(1,0,0),Ua=new z(0,1,0),Na=new z(0,0,1),Fa={type:"added"},xu={type:"removed"},hi={type:"childadded",child:null},no={type:"childremoved",child:null};class ut extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new z,t=new Pt,i=new jt,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new He}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Da,e)}rotateY(e){return this.rotateOnAxis(Ua,e)}rotateZ(e){return this.rotateOnAxis(Na,e)}translateOnAxis(e,t){return La.copy(e).applyQuaternion(this.quaternion),this.position.add(La.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Da,e)}translateY(e){return this.translateOnAxis(Ua,e)}translateZ(e){return this.translateOnAxis(Na,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pr.copy(e):pr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Fi,pr,this.up):ln.lookAt(pr,Fi,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),ui.setFromRotationMatrix(ln),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fa),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xu),no.child=e,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fa),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,_u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ut.DEFAULT_UP=new z(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new z,cn=new z,io=new z,un=new z,fi=new z,di=new z,Oa=new z,ro=new z,so=new z,oo=new z,ao=new it,lo=new it,co=new it;class Ot{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wt.subVectors(r,t),cn.subVectors(i,t),io.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(cn),l=Wt.dot(io),u=cn.dot(cn),c=cn.dot(io),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ao.setScalar(0),lo.setScalar(0),co.setScalar(0),ao.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,i),co.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ao,s.x),o.addScaledVector(lo,s.y),o.addScaledVector(co,s.z),o}static isFrontFacing(e,t,i,r){return Wt.subVectors(i,t),cn.subVectors(e,t),Wt.cross(cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Wt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Ot.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;fi.subVectors(r,i),di.subVectors(s,i),ro.subVectors(e,i);const l=fi.dot(ro),u=di.dot(ro);if(l<=0&&u<=0)return t.copy(i);so.subVectors(e,r);const c=fi.dot(so),h=di.dot(so);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(fi,o);oo.subVectors(e,s);const d=fi.dot(oo),g=di.dot(oo);if(g>=0&&d<=g)return t.copy(s);const _=d*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(di,a);const m=c*g-d*h;if(m<=0&&h-c>=0&&d-g>=0)return Oa.subVectors(s,r),a=(h-c)/(h-c+(d-g)),t.copy(r).addScaledVector(Oa,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(fi,o).addScaledVector(di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function uo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=ou(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=uo(o,s,e+1/3),this.g=uo(o,s,e),this.b=uo(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const i=Ic[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return $e.fromWorkingColorSpace(Mt.copy(this),e),Math.round(bt(Mt.r*255,0,255))*65536+Math.round(bt(Mt.g*255,0,255))*256+Math.round(bt(Mt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Mt.copy(this),t);const i=Mt.r,r=Mt.g,s=Mt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=mt){$e.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,i=Mt.g,r=Mt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(mr);const i=Ys(bn.h,mr.h,t),r=Ys(bn.s,mr.s,t),s=Ys(bn.l,mr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Oe;Oe.NAMES=Ic;let vu=0;class Ln extends ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=ir(),this.name="",this.blending=Xn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fr,this.blendDst=Or,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fr&&(i.blendSrc=this.blendSrc),this.blendDst!==Or&&(i.blendDst=this.blendDst),this.blendEquation!==wn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qn extends Ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.combine=ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new z,gr=new Ge;class yt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ji,this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ji&&(e.usage=this.usage),e}}class na extends yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ia extends yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ye extends yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mu=0;const Ft=new je,ho=new ut,pi=new z,Dt=new In,Oi=new In,dt=new z;class ct extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wc(e)?ia:na)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,i){return Ft.makeTranslation(e,t,i),this.applyMatrix4(Ft),this}scale(e,t,i){return Ft.makeScale(e,t,i),this.applyMatrix4(Ft),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Oi.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(Dt.min,Oi.min),Dt.expandByPoint(dt),dt.addVectors(Dt.max,Oi.max),Dt.expandByPoint(dt)):(Dt.expandByPoint(Oi.min),Dt.expandByPoint(Oi.max))}Dt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)dt.fromBufferAttribute(a,u),l&&(pi.fromBufferAttribute(e,u),dt.add(pi)),r=Math.max(r,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new z,l[b]=new z;const u=new z,c=new z,h=new z,f=new Ge,d=new Ge,g=new Ge,_=new z,m=new z;function p(b,x,M){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,b),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),c.sub(u),h.sub(u),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(P),a[b].add(_),a[x].add(_),a[M].add(_),l[b].add(m),l[x].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let b=0,x=y.length;b<x;++b){const M=y[b],P=M.start,O=M.count;for(let F=P,B=P+O;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new z,v=new z,C=new z,w=new z;function R(b){C.fromBufferAttribute(r,b),w.copy(C);const x=a[b];S.copy(x),S.sub(C.multiplyScalar(C.dot(x))).normalize(),v.crossVectors(w,x);const P=v.dot(l[b])<0?-1:1;o.setXYZW(b,S.x,S.y,S.z,P)}for(let b=0,x=y.length;b<x;++b){const M=y[b],P=M.start,O=M.count;for(let F=P,B=P+O;F<B;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)f[g++]=u[d++]}return new yt(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ct,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const d=u[h];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,d=h.length;f<d;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new je,On=new ea,_r=new ii,za=new z,xr=new z,vr=new z,Mr=new z,fo=new z,yr=new z,ka=new z,Sr=new z;class et extends ut{constructor(e=new ct,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(fo.fromBufferAttribute(h,e),o?yr.addScaledVector(fo,c):yr.addScaledVector(fo.sub(t),c))}t.add(yr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(s),On.copy(e.ray).recast(e.near),!(_r.containsPoint(On.origin)===!1&&(On.intersectSphere(_r,za)===null||On.origin.distanceToSquared(za)>(e.far-e.near)**2))&&(Ba.copy(s).invert(),On.copy(e.ray).applyMatrix4(Ba),!(i.boundingBox!==null&&On.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,C=S;v<C;v+=3){const w=a.getX(v),R=a.getX(v+1),b=a.getX(v+2);r=br(this,p,e,i,u,c,h,w,R,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);r=br(this,o,e,i,u,c,h,y,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,C=S;v<C;v+=3){const w=v,R=v+1,b=v+2;r=br(this,p,e,i,u,c,h,w,R,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,S=m+1,v=m+2;r=br(this,o,e,i,u,c,h,y,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function yu(n,e,t,i,r,s,o,a){let l;if(e.side===gt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gn,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Sr);return u<t.near||u>t.far?null:{distance:u,point:Sr.clone(),object:n}}function br(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,xr),n.getVertexPosition(l,vr),n.getVertexPosition(u,Mr);const c=yu(n,e,t,i,xr,vr,Mr,ka);if(c){const h=new z;Ot.getBarycoord(ka,xr,vr,Mr,h),r&&(c.uv=Ot.getInterpolatedAttribute(r,a,l,u,h,new Ge)),s&&(c.uv1=Ot.getInterpolatedAttribute(s,a,l,u,h,new Ge)),o&&(c.normal=Ot.getInterpolatedAttribute(o,a,l,u,h,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new z,materialIndex:0};Ot.getNormal(xr,vr,Mr,f.normal),c.face=f,c.barycoord=h}return c}class tn extends ct{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2));function g(_,m,p,y,S,v,C,w,R,b,x){const M=v/R,P=C/b,O=v/2,F=C/2,B=w/2,K=R+1,H=b+1;let Y=0,j=0;const ae=new z;for(let fe=0;fe<H;fe++){const ie=fe*P-F;for(let Re=0;Re<K;Re++){const Fe=Re*M-O;ae[_]=Fe*y,ae[m]=ie*S,ae[p]=B,u.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[p]=w>0?1:-1,c.push(ae.x,ae.y,ae.z),h.push(Re/R),h.push(1-fe/b),Y+=1}}for(let fe=0;fe<b;fe++)for(let ie=0;ie<R;ie++){const Re=f+ie+K*fe,Fe=f+ie+K*(fe+1),J=f+(ie+1)+K*(fe+1),le=f+(ie+1)+K*fe;l.push(Re,Fe,le),l.push(Fe,J,le),j+=6}a.addGroup(d,j,x),d+=j,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function St(n){const e={};for(let t=0;t<n.length;t++){const i=Ai(n[t]);for(const r in i)e[r]=i[r]}return e}function Su(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Dc={clone:Ai,merge:St};var bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends Ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bu,this.fragmentShader=Eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Su(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ra extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new z,Ha=new Ge,Ga=new Ge;class At extends ra{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,Ha,Ga),t.subVectors(Ga,Ha)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class Uc extends ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new At(mi,gi,e,t);r.layers=this.layers,this.add(r);const s=new At(mi,gi,e,t);s.layers=this.layers,this.add(s);const o=new At(mi,gi,e,t);o.layers=this.layers,this.add(o);const a=new At(mi,gi,e,t);a.layers=this.layers,this.add(a);const l=new At(mi,gi,e,t);l.layers=this.layers,this.add(l);const u=new At(mi,gi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Qt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qi)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sa extends _t{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Kn,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nc extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new tn(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:Ai(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gt,blending:fn});s.uniforms.tEquirect.value=t;const o=new et(r,s),a=t.minFilter;return t.minFilter===Jt&&(t.minFilter=Bt),new Uc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const po=new z,Tu=new z,wu=new He;class Tn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=po.subVectors(i,t).cross(Tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wu.getNormalMatrix(e),r=this.coplanarPoint(po).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new ii,Er=new z;class Ns{constructor(e=new Tn,t=new Tn,i=new Tn,r=new Tn,s=new Tn,o=new Tn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qt){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],S=r[14],v=r[15];if(i[0].setComponents(l-s,f-u,m-d,v-p).normalize(),i[1].setComponents(l+s,f+u,m+d,v+p).normalize(),i[2].setComponents(l+o,f+c,m+g,v+y).normalize(),i[3].setComponents(l-o,f-c,m-g,v-y).normalize(),i[4].setComponents(l-a,f-h,m-_,v-S).normalize(),t===Qt)i[5].setComponents(l+a,f+h,m+_,v+S).normalize();else if(t===Qi)i[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Er.x=r.normal.x>0?e.max.x:e.min.x,Er.y=r.normal.y>0?e.max.y:e.min.y,Er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fc(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Au(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class mn extends ct{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const y=p*f-o;for(let S=0;S<u;S++){const v=S*h-s;g.push(v,-y,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const S=y+u*p,v=y+u*(p+1),C=y+1+u*(p+1),w=y+1+u*p;d.push(S,v,w),d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
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
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
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
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ku=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
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
#endif`,Gu=`#ifdef USE_BUMPMAP
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zu=`#define PI 3.141592653589793
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qu=`vec3 transformedNormal = objectNormal;
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
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",sh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oh=`#ifdef USE_ENVMAP
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
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
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
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mh=`#ifdef USE_GRADIENTMAP
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
}`,gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vh=`uniform bool receiveShadow;
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
#endif`,Mh=`#ifdef USE_ENVMAP
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
#endif`,yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Th=`PhysicalMaterial material;
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
#endif`,wh=`struct PhysicalMaterial {
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
}`,Ah=`
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
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ih=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Oh=`#if defined( USE_POINTS_UV )
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
#endif`,Bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vh=`#ifdef USE_MORPHTARGETS
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
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$h=`#ifdef USE_NORMALMAP
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
#endif`,Zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,df=`float getShadowMask() {
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
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
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
}`,Nf=`#if DEPTH_PACKING == 3200
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
}`,Ff=`#define DISTANCE
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
}`,Of=`#define DISTANCE
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Wf=`#define LAMBERT
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
}`,Xf=`#define LAMBERT
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
}`,qf=`#define MATCAP
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
}`,Yf=`#define MATCAP
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
}`,jf=`#define NORMAL
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
}`,Kf=`#define NORMAL
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
}`,$f=`#define PHONG
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
}`,Zf=`#define PHONG
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
}`,Jf=`#define STANDARD
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
}`,Qf=`#define STANDARD
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
}`,ed=`#define TOON
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
}`,td=`#define TOON
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
}`,nd=`uniform float size;
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
}`,id=`uniform vec3 diffuse;
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
}`,rd=`#include <common>
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
}`,sd=`uniform vec3 color;
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
}`,od=`uniform float rotation;
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
}`,ad=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Pu,alphamap_pars_fragment:Iu,alphatest_fragment:Lu,alphatest_pars_fragment:Du,aomap_fragment:Uu,aomap_pars_fragment:Nu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:ku,iridescence_fragment:Hu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:ju,color_pars_vertex:Ku,color_vertex:$u,common:Zu,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Qu,displacementmap_pars_vertex:eh,displacementmap_vertex:th,emissivemap_fragment:nh,emissivemap_pars_fragment:ih,colorspace_fragment:rh,colorspace_pars_fragment:sh,envmap_fragment:oh,envmap_common_pars_fragment:ah,envmap_pars_fragment:lh,envmap_pars_vertex:ch,envmap_physical_pars_fragment:Mh,envmap_vertex:uh,fog_vertex:hh,fog_pars_vertex:fh,fog_fragment:dh,fog_pars_fragment:ph,gradientmap_pars_fragment:mh,lightmap_pars_fragment:gh,lights_lambert_fragment:_h,lights_lambert_pars_fragment:xh,lights_pars_begin:vh,lights_toon_fragment:yh,lights_toon_pars_fragment:Sh,lights_phong_fragment:bh,lights_phong_pars_fragment:Eh,lights_physical_fragment:Th,lights_physical_pars_fragment:wh,lights_fragment_begin:Ah,lights_fragment_maps:Rh,lights_fragment_end:Ch,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Ih,logdepthbuf_pars_vertex:Lh,logdepthbuf_vertex:Dh,map_fragment:Uh,map_pars_fragment:Nh,map_particle_fragment:Fh,map_particle_pars_fragment:Oh,metalnessmap_fragment:Bh,metalnessmap_pars_fragment:zh,morphinstance_vertex:kh,morphcolor_vertex:Hh,morphnormal_vertex:Gh,morphtarget_pars_vertex:Vh,morphtarget_vertex:Wh,normal_fragment_begin:Xh,normal_fragment_maps:qh,normal_pars_fragment:Yh,normal_pars_vertex:jh,normal_vertex:Kh,normalmap_pars_fragment:$h,clearcoat_normal_fragment_begin:Zh,clearcoat_normal_fragment_maps:Jh,clearcoat_pars_fragment:Qh,iridescence_pars_fragment:ef,opaque_fragment:tf,packing:nf,premultiplied_alpha_fragment:rf,project_vertex:sf,dithering_fragment:of,dithering_pars_fragment:af,roughnessmap_fragment:lf,roughnessmap_pars_fragment:cf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:hf,shadowmap_vertex:ff,shadowmask_pars_fragment:df,skinbase_vertex:pf,skinning_pars_vertex:mf,skinning_vertex:gf,skinnormal_vertex:_f,specularmap_fragment:xf,specularmap_pars_fragment:vf,tonemapping_fragment:Mf,tonemapping_pars_fragment:yf,transmission_fragment:Sf,transmission_pars_fragment:bf,uv_pars_fragment:Ef,uv_pars_vertex:Tf,uv_vertex:wf,worldpos_vertex:Af,background_vert:Rf,background_frag:Cf,backgroundCube_vert:Pf,backgroundCube_frag:If,cube_vert:Lf,cube_frag:Df,depth_vert:Uf,depth_frag:Nf,distanceRGBA_vert:Ff,distanceRGBA_frag:Of,equirect_vert:Bf,equirect_frag:zf,linedashed_vert:kf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Vf,meshlambert_vert:Wf,meshlambert_frag:Xf,meshmatcap_vert:qf,meshmatcap_frag:Yf,meshnormal_vert:jf,meshnormal_frag:Kf,meshphong_vert:$f,meshphong_frag:Zf,meshphysical_vert:Jf,meshphysical_frag:Qf,meshtoon_vert:ed,meshtoon_frag:td,points_vert:nd,points_frag:id,shadow_vert:rd,shadow_frag:sd,sprite_vert:od,sprite_frag:ad},Me={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Xt={basic:{uniforms:St([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:St([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:St([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:St([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:St([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:St([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:St([Me.points,Me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:St([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:St([Me.common,Me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:St([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:St([Me.sprite,Me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:St([Me.common,Me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:St([Me.lights,Me.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Xt.physical={uniforms:St([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Tr={r:0,b:0,g:0},zn=new Pt,ld=new je;function cd(n,e,t,i,r,s,o){const a=new Oe(0);let l=s===!0?0:1,u,c,h=null,f=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function _(y){let S=!1;const v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),S=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===tr)?(c===void 0&&(c=new et(new tn(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Ai(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),zn.copy(S.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ld.makeRotationFromEuler(zn)),c.material.toneMapped=$e.getTransfer(v.colorSpace)!==nt,(h!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new et(new mn(2,2),new Ut({name:"BackgroundMaterial",uniforms:Ai(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=$e.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function p(y,S){y.getRGB(Tr,Lc(n)),i.buffers.color.setClear(Tr.r,Tr.g,Tr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function ud(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,P,O,F,B){let K=!1;const H=h(F,O,P);s!==H&&(s=H,u(s.object)),K=d(M,F,O,B),K&&g(M,F,O,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(M,P,O,F),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function h(M,P,O){const F=O.wireframe===!0;let B=i[M.id];B===void 0&&(B={},i[M.id]=B);let K=B[P.id];K===void 0&&(K={},B[P.id]=K);let H=K[F];return H===void 0&&(H=f(l()),K[F]=H),H}function f(M){const P=[],O=[],F=[];for(let B=0;B<t;B++)P[B]=0,O[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,P,O,F){const B=s.attributes,K=P.attributes;let H=0;const Y=O.getAttributes();for(const j in Y)if(Y[j].location>=0){const fe=B[j];let ie=K[j];if(ie===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),fe===void 0||fe.attribute!==ie||ie&&fe.data!==ie.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(M,P,O,F){const B={},K=P.attributes;let H=0;const Y=O.getAttributes();for(const j in Y)if(Y[j].location>=0){let fe=K[j];fe===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));const ie={};ie.attribute=fe,fe&&fe.data&&(ie.data=fe.data),B[j]=ie,H++}s.attributes=B,s.attributesNum=H,s.index=F}function _(){const M=s.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const O=s.newAttributes,F=s.enabledAttributes,B=s.attributeDivisors;O[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),B[M]!==P&&(n.vertexAttribDivisor(M,P),B[M]=P)}function y(){const M=s.newAttributes,P=s.enabledAttributes;for(let O=0,F=P.length;O<F;O++)P[O]!==M[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function S(M,P,O,F,B,K,H){H===!0?n.vertexAttribIPointer(M,P,O,B,K):n.vertexAttribPointer(M,P,O,F,B,K)}function v(M,P,O,F){_();const B=F.attributes,K=O.getAttributes(),H=P.defaultAttributeValues;for(const Y in K){const j=K[Y];if(j.location>=0){let ae=B[Y];if(ae===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const fe=ae.normalized,ie=ae.itemSize,Re=e.get(ae);if(Re===void 0)continue;const Fe=Re.buffer,J=Re.type,le=Re.bytesPerElement,T=J===n.INT||J===n.UNSIGNED_INT||ae.gpuType===As;if(ae.isInterleavedBufferAttribute){const L=ae.data,D=L.stride,U=ae.offset;if(L.isInstancedInterleavedBuffer){for(let V=0;V<j.locationSize;V++)p(j.location+V,L.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let V=0;V<j.locationSize;V++)m(j.location+V);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let V=0;V<j.locationSize;V++)S(j.location+V,ie/j.locationSize,J,fe,D*le,(U+ie/j.locationSize*V)*le,T)}else{if(ae.isInstancedBufferAttribute){for(let L=0;L<j.locationSize;L++)p(j.location+L,ae.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let L=0;L<j.locationSize;L++)m(j.location+L);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let L=0;L<j.locationSize;L++)S(j.location+L,ie/j.locationSize,J,fe,ie*le,ie/j.locationSize*L*le,T)}}else if(H!==void 0){const fe=H[Y];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(j.location,fe);break;case 3:n.vertexAttrib3fv(j.location,fe);break;case 4:n.vertexAttrib4fv(j.location,fe);break;default:n.vertexAttrib1fv(j.location,fe)}}}}y()}function C(){b();for(const M in i){const P=i[M];for(const O in P){const F=P[O];for(const B in F)c(F[B].object),delete F[B];delete P[O]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const O in P){const F=P[O];for(const B in F)c(F[B].object),delete F[B];delete P[O]}delete i[M.id]}function R(M){for(const P in i){const O=i[P];if(O[M.id]===void 0)continue;const F=O[M.id];for(const B in F)c(F[B].object),delete F[B];delete O[M.id]}}function b(){x(),o=!0,s!==r&&(s=r,u(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function hd(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),t.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let d=0;for(let g=0;g<h;g++)d+=c[g];t.update(d,i,1)}function l(u,c,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fd(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==zt&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const b=R===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==en&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==qt&&!b)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function dd(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Tn,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,S=y*4;let v=p.clippingState||null;l.value=v,v=c(g,f,S,d);for(let C=0;C!==S;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==_;++S,v+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function pd(n){let e=new WeakMap;function t(o,a){return a===Xr?o.mapping=Kn:a===qr&&(o.mapping=$n),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xr||a===qr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Nc(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class oa extends ra{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,Va=[.125,.215,.35,.446,.526,.582],Vn=20,mo=new oa,Wa=new Oe;let go=null,_o=0,xo=0,vo=!1;const Gn=(1+Math.sqrt(5))/2,_i=1/Gn,Xa=[new z(-Gn,_i,0),new z(Gn,_i,0),new z(-_i,0,Gn),new z(_i,0,Gn),new z(0,Gn,-_i),new z(0,Gn,_i),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class ys{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,xo),this._renderer.xr.enabled=vo,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Ri,format:zt,colorSpace:ti,depthBuffer:!1},r=qa(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=md(s)),this._blurMaterial=gd(s,e,t)}return r}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,i,r){const a=new At(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Wa),c.toneMapping=dn,c.autoClear=!1;const d=new Qn({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),g=new et(new tn,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Wa),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const S=this._cubeSize;wr(r,y*S,p>2?S:0,S,S),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Kn||e.mapping===$n;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,mo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xa[(r-s-1)%Xa.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new et(this._lodPlanes[r],u),f=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Vn-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Vn;m>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const p=[];let y=0;for(let R=0;R<Vn;++R){const b=R/_,x=Math.exp(-b*b/2);p.push(x),R===0?y+=x:R<m&&(y+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const v=this._sizeLods[r],C=3*v*(r>S-Si?r-S+Si:0),w=4*(this._cubeSize-v);wr(t,C,w,3*v,2*v),l.setRenderTarget(t),l.render(h,mo)}}function md(n){const e=[],t=[],i=[];let r=n;const s=n-Si+1+Va.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Si?l=Va[o-n+Si-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),S=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,b=w>2?0:-1,x=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];y.set(x,_*g*w),S.set(f,m*g*w);const M=[w,w,w,w,w,w];v.set(M,p*g*w)}const C=new ct;C.setAttribute("position",new yt(y,_)),C.setAttribute("uv",new yt(S,m)),C.setAttribute("faceIndex",new yt(v,p)),e.push(C),r>Si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qa(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gd(n,e,t){const i=new Float32Array(Vn),r=new z(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:aa(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ya(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ja(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function aa(){return`

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
	`}function _d(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Xr||l===qr,c=l===Kn||l===$n;if(u||c){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ys(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(t===null&&(t=new ys(n)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function xd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Wi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vd(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let S=0,v=y.length;S<v;S+=3){const C=y[S+0],w=y[S+1],R=y[S+2];f.push(C,w,w,R,R,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const C=S+0,w=S+1,R=S+2;f.push(C,w,w,R,R,C)}}else return;const m=new(wc(f)?ia:na)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function c(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function Md(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function u(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),t.update(d,i,g))}function c(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function yd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Sd(n,e,t){const i=new WeakMap,r=new it;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*w*4*h),b=new Qo(R,C,w,h);b.type=qt,b.needsUpdate=!0;const x=v*4;for(let P=0;P<h;P++){const O=p[P],F=y[P],B=S[P],K=C*w*4*P;for(let H=0;H<O.count;H++){const Y=H*x;g===!0&&(r.fromBufferAttribute(O,H),R[K+Y+0]=r.x,R[K+Y+1]=r.y,R[K+Y+2]=r.z,R[K+Y+3]=0),_===!0&&(r.fromBufferAttribute(F,H),R[K+Y+4]=r.x,R[K+Y+5]=r.y,R[K+Y+6]=r.z,R[K+Y+7]=0),m===!0&&(r.fromBufferAttribute(B,H),R[K+Y+8]=r.x,R[K+Y+9]=r.y,R[K+Y+10]=r.z,R[K+Y+11]=B.itemSize===4?r.w:1)}}f={count:h,texture:b,size:new Ge(C,w)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function bd(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class la extends _t{constructor(e,t,i,r,s,o,a,l,u,c=qn){if(c!==qn&&c!==Jn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===qn&&(i=Cn),i===void 0&&c===Jn&&(i=Zn),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Oc=new _t,Ka=new la(1,1),Bc=new Qo,zc=new Pc,kc=new sa,$a=[],Za=[],Ja=new Float32Array(16),Qa=new Float32Array(9),el=new Float32Array(4);function Ci(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=$a[r];if(s===void 0&&(s=new Float32Array(r),$a[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fs(n,e){let t=Za[e];t===void 0&&(t=new Int32Array(e),Za[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ed(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Td(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function wd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function Ad(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Rd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;el.set(i),n.uniformMatrix2fv(this.addr,!1,el),ft(t,i)}}function Cd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Qa.set(i),n.uniformMatrix3fv(this.addr,!1,Qa),ft(t,i)}}function Pd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Ja.set(i),n.uniformMatrix4fv(this.addr,!1,Ja),ft(t,i)}}function Id(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ld(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Dd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function Ud(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Nd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function Od(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function Bd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function zd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ka.compareFunction=Zo,s=Ka):s=Oc,t.setTexture2D(e||s,r)}function kd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zc,r)}function Hd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kc,r)}function Gd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bc,r)}function Vd(n){switch(n){case 5126:return Ed;case 35664:return Td;case 35665:return wd;case 35666:return Ad;case 35674:return Rd;case 35675:return Cd;case 35676:return Pd;case 5124:case 35670:return Id;case 35667:case 35671:return Ld;case 35668:case 35672:return Dd;case 35669:case 35673:return Ud;case 5125:return Nd;case 36294:return Fd;case 36295:return Od;case 36296:return Bd;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return kd;case 35680:case 36300:case 36308:case 36293:return Hd;case 36289:case 36303:case 36311:case 36292:return Gd}}function Wd(n,e){n.uniform1fv(this.addr,e)}function Xd(n,e){const t=Ci(e,this.size,2);n.uniform2fv(this.addr,t)}function qd(n,e){const t=Ci(e,this.size,3);n.uniform3fv(this.addr,t)}function Yd(n,e){const t=Ci(e,this.size,4);n.uniform4fv(this.addr,t)}function jd(n,e){const t=Ci(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kd(n,e){const t=Ci(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $d(n,e){const t=Ci(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zd(n,e){n.uniform1iv(this.addr,e)}function Jd(n,e){n.uniform2iv(this.addr,e)}function Qd(n,e){n.uniform3iv(this.addr,e)}function ep(n,e){n.uniform4iv(this.addr,e)}function tp(n,e){n.uniform1uiv(this.addr,e)}function np(n,e){n.uniform2uiv(this.addr,e)}function ip(n,e){n.uniform3uiv(this.addr,e)}function rp(n,e){n.uniform4uiv(this.addr,e)}function sp(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Oc,s[o])}function op(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zc,s[o])}function ap(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kc,s[o])}function lp(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bc,s[o])}function cp(n){switch(n){case 5126:return Wd;case 35664:return Xd;case 35665:return qd;case 35666:return Yd;case 35674:return jd;case 35675:return Kd;case 35676:return $d;case 5124:case 35670:return Zd;case 35667:case 35671:return Jd;case 35668:case 35672:return Qd;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return lp}}class up{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vd(t.type)}}class hp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cp(t.type)}}class fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function tl(n,e){n.seq.push(e),n.map[e.id]=e}function dp(n,e,t){const i=n.name,r=i.length;for(Mo.lastIndex=0;;){const s=Mo.exec(i),o=Mo.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){tl(t,u===void 0?new up(a,n,e):new hp(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new fp(a),tl(t,h)),t=h}}}class Nr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);dp(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function nl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pp=37297;let mp=0;function gp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const il=new He;function _p(n){$e._getMatrix(il,$e.workingColorSpace,n);const e=`mat3( ${il.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case nr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+gp(n.getShaderSource(e),o)}else return r}function xp(n,e){const t=_p(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vp(n,e){let t;switch(e){case cc:t="Linear";break;case uc:t="Reinhard";break;case hc:t="Cineon";break;case ko:t="ACESFilmic";break;case dc:t="AgX";break;case pc:t="Neutral";break;case fc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new z;function Mp(){$e.getLuminanceCoefficients(Ar);const n=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function Sp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xi(n){return n!==""}function sl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(n){return n.replace(Ep,wp)}const Tp=new Map;function wp(n,e){let t=Xe[e];if(t===void 0){const i=Tp.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const Ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(n){return n.replace(Ap,Rp)}function Rp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ll(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ts?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function Pp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Kn:case $n:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ip(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function Lp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ws:e="ENVMAP_BLENDING_MULTIPLY";break;case ac:e="ENVMAP_BLENDING_MIX";break;case lc:e="ENVMAP_BLENDING_ADD";break}return e}function Dp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Up(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cp(t),u=Pp(t),c=Ip(t),h=Lp(t),f=Dp(t),d=yp(t),g=Sp(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),p.length>0&&(p+=`
`)):(m=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),p=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==dn?vp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,xp("linearToOutputTexel",t.outputColorSpace),Mp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=Do(o),o=sl(o,t),o=ol(o,t),a=Do(a),a=sl(a,t),a=ol(a,t),o=al(o),a=al(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+o,v=y+p+a,C=nl(r,r.VERTEX_SHADER,S),w=nl(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(P){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(w).trim();let K=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,w);else{const Y=rl(r,C,"vertex"),j=rl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Y+`
`+j)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||B==="")&&(H=!1);H&&(P.diagnostics={runnable:K,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(C),r.deleteShader(w),b=new Nr(r,_),x=bp(r,_)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,pp)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let Np=0;class Fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Op(e),t.set(e,i)),i}}class Op{constructor(e){this.id=Np++,this.code=e,this.usedTimes=0}}function Bp(n,e,t,i,r,s,o){const a=new ta,l=new Fp,u=new Set,c=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return u.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,O,F){const B=O.fog,K=F.geometry,H=x.isMeshStandardMaterial?O.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),j=Y&&Y.mapping===tr?Y.image.height:null,ae=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const fe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ie=fe!==void 0?fe.length:0;let Re=0;K.morphAttributes.position!==void 0&&(Re=1),K.morphAttributes.normal!==void 0&&(Re=2),K.morphAttributes.color!==void 0&&(Re=3);let Fe,J,le,T;if(ae){const tt=Xt[ae];Fe=tt.vertexShader,J=tt.fragmentShader}else Fe=x.vertexShader,J=x.fragmentShader,l.update(x),le=l.getVertexShaderID(x),T=l.getFragmentShaderID(x);const L=n.getRenderTarget(),D=n.state.buffers.depth.getReversed(),U=F.isInstancedMesh===!0,V=F.isBatchedMesh===!0,ce=!!x.map,me=!!x.matcap,Te=!!Y,N=!!x.aoMap,Be=!!x.lightMap,Ce=!!x.bumpMap,pe=!!x.normalMap,he=!!x.displacementMap,we=!!x.emissiveMap,_e=!!x.metalnessMap,I=!!x.roughnessMap,E=x.anisotropy>0,X=x.clearcoat>0,ee=x.dispersion>0,se=x.iridescence>0,k=x.sheen>0,ne=x.transmission>0,re=E&&!!x.anisotropyMap,ue=X&&!!x.clearcoatMap,Ue=X&&!!x.clearcoatNormalMap,te=X&&!!x.clearcoatRoughnessMap,ye=se&&!!x.iridescenceMap,Ae=se&&!!x.iridescenceThicknessMap,Pe=k&&!!x.sheenColorMap,xe=k&&!!x.sheenRoughnessMap,qe=!!x.specularMap,ze=!!x.specularColorMap,Ke=!!x.specularIntensityMap,G=ne&&!!x.transmissionMap,ge=ne&&!!x.thicknessMap,Q=!!x.gradientMap,oe=!!x.alphaMap,Ee=x.alphaTest>0,Se=!!x.alphaHash,Ve=!!x.extensions;let at=dn;x.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(at=n.toneMapping);const xt={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:J,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:T,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:V,batchingColor:V&&F._colorsTexture!==null,instancing:U,instancingColor:U&&F.instanceColor!==null,instancingMorph:U&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:L===null?n.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ti,alphaToCoverage:!!x.alphaToCoverage,map:ce,matcap:me,envMap:Te,envMapMode:Te&&Y.mapping,envMapCubeUVHeight:j,aoMap:N,lightMap:Be,bumpMap:Ce,normalMap:pe,displacementMap:f&&he,emissiveMap:we,normalMapObjectSpace:pe&&x.normalMapType===xc,normalMapTangentSpace:pe&&x.normalMapType===Us,metalnessMap:_e,roughnessMap:I,anisotropy:E,anisotropyMap:re,clearcoat:X,clearcoatMap:ue,clearcoatNormalMap:Ue,clearcoatRoughnessMap:te,dispersion:ee,iridescence:se,iridescenceMap:ye,iridescenceThicknessMap:Ae,sheen:k,sheenColorMap:Pe,sheenRoughnessMap:xe,specularMap:qe,specularColorMap:ze,specularIntensityMap:Ke,transmission:ne,transmissionMap:G,thicknessMap:ge,gradientMap:Q,opaque:x.transparent===!1&&x.blending===Xn&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:Ee,alphaHash:Se,combine:x.combine,mapUv:ce&&_(x.map.channel),aoMapUv:N&&_(x.aoMap.channel),lightMapUv:Be&&_(x.lightMap.channel),bumpMapUv:Ce&&_(x.bumpMap.channel),normalMapUv:pe&&_(x.normalMap.channel),displacementMapUv:he&&_(x.displacementMap.channel),emissiveMapUv:we&&_(x.emissiveMap.channel),metalnessMapUv:_e&&_(x.metalnessMap.channel),roughnessMapUv:I&&_(x.roughnessMap.channel),anisotropyMapUv:re&&_(x.anisotropyMap.channel),clearcoatMapUv:ue&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(x.sheenRoughnessMap.channel),specularMapUv:qe&&_(x.specularMap.channel),specularColorMapUv:ze&&_(x.specularColorMap.channel),specularIntensityMapUv:Ke&&_(x.specularIntensityMap.channel),transmissionMapUv:G&&_(x.transmissionMap.channel),thicknessMapUv:ge&&_(x.thicknessMap.channel),alphaMapUv:oe&&_(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(pe||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(ce||oe),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:D,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:ce&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:we&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Rt,flipSided:x.side===gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ve&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&x.extensions.multiDraw===!0||V)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=u.has(1),xt.vertexUv2s=u.has(2),xt.vertexUv3s=u.has(3),u.clear(),xt}function p(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(M,x),S(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const M=g[x.type];let P;if(M){const O=Xt[M];P=Dc.clone(O.uniforms)}else P=x.uniforms;return P}function C(x,M){let P;for(let O=0,F=c.length;O<F;O++){const B=c[O];if(B.cacheKey===M){P=B,++P.usedTimes;break}}return P===void 0&&(P=new Up(n,M,x,s),c.push(P)),P}function w(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:b}}function zp(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function kp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ul(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,f){t.length>1&&t.sort(h||kp),i.length>1&&i.sort(f||cl),r.length>1&&r.sort(f||cl)}function c(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Hp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ul,n.set(i,[o])):r>=s.length?(o=new ul,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Gp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Oe};break;case"SpotLight":t={position:new z,direction:new z,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Vp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Wp=0;function Xp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qp(n){const e=new Gp,t=Vp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new je,o=new je;function a(u){let c=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,S=0,v=0,C=0,w=0,R=0;u.sort(Xp);for(let x=0,M=u.length;x<M;x++){const P=u[x],O=P.color,F=P.intensity,B=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=O.r*F,h+=O.g*F,f+=O.b*F;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],F);R++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,j=t.get(P);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=P.shadow.matrix,y++}i.directional[d]=H,d++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(O).multiplyScalar(F),H.distance=B,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[_]=H;const Y=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Y.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=Y.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=K,v++}_++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(O).multiplyScalar(F),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Y=P.shadow,j=t.get(P);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(F),H.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==d||b.pointLength!==g||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==y||b.numPointShadows!==S||b.numSpotShadows!==v||b.numSpotMaps!==C||b.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,b.directionalLength=d,b.pointLength=g,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=y,b.numPointShadows=S,b.numSpotShadows=v,b.numSpotMaps=C,b.numLightProbes=R,i.version=Wp++)}function l(u,c){let h=0,f=0,d=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,y=u.length;p<y;p++){const S=u[p];if(S.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function hl(n){const e=new qp(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Yp(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hl(n),e.set(r,[a])):s>=o.length?(a=new hl(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Hc extends Ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gc extends Ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kp=`uniform sampler2D shadow_pass;
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
}`;function $p(n,e,t){let i=new Ns;const r=new Ge,s=new Ge,o=new it,a=new Hc({depthPacking:_c}),l=new Gc,u={},c=t.maxTextureSize,h={[gn]:gt,[gt]:gn,[Rt]:Rt},f=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:jp,fragmentShader:Kp}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ct;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let p=this.type;this.render=function(w,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(fn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==Zt&&this.type===Zt,B=p===Zt&&this.type!==Zt;for(let K=0,H=w.length;K<H;K++){const Y=w[K],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ae=j.getFrameExtents();if(r.multiply(ae),s.copy(j.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ae.x),r.x=s.x*ae.x,j.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ae.y),r.y=s.y*ae.y,j.mapSize.y=s.y)),j.map===null||F===!0||B===!0){const ie=this.type!==Zt?{minFilter:Ct,magFilter:Ct}:{};j.map!==null&&j.map.dispose(),j.map=new Pn(r.x,r.y,ie),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const fe=j.getViewportCount();for(let ie=0;ie<fe;ie++){const Re=j.getViewport(ie);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),O.viewport(o),j.updateMatrices(Y,ie),i=j.getFrustum(),v(R,b,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Zt&&y(j,b),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,M,P)};function y(w,R){const b=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,b,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,b,d,_,null)}function S(w,R,b,x){let M=null;const P=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=b.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=M.uuid,F=R.uuid;let B=u[O];B===void 0&&(B={},u[O]=B);let K=B[F];K===void 0&&(K=M.clone(),B[F]=K,R.addEventListener("dispose",C)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,x===Zt?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=b}return M}function v(w,R,b,x,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Zt)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const F=e.update(w),B=w.material;if(Array.isArray(B)){const K=F.groups;for(let H=0,Y=K.length;H<Y;H++){const j=K[H],ae=B[j.materialIndex];if(ae&&ae.visible){const fe=S(w,ae,x,M);w.onBeforeShadow(n,w,R,b,F,fe,j),n.renderBufferDirect(b,null,F,fe,w,j),w.onAfterShadow(n,w,R,b,F,fe,j)}}}else if(B.visible){const K=S(w,B,x,M);w.onBeforeShadow(n,w,R,b,F,K,null),n.renderBufferDirect(b,null,F,K,w,null),w.onAfterShadow(n,w,R,b,F,K,null)}}const O=w.children;for(let F=0,B=O.length;F<B;F++)v(O[F],R,b,x,M)}function C(w){w.target.removeEventListener("dispose",C);for(const b in u){const x=u[b],M=w.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const Zp={[Br]:zr,[kr]:Vr,[Hr]:Wr,[jn]:Gr,[zr]:Br,[Vr]:kr,[Wr]:Hr,[Gr]:jn};function Jp(n,e){function t(){let G=!1;const ge=new it;let Q=null;const oe=new it(0,0,0,0);return{setMask:function(Ee){Q!==Ee&&!G&&(n.colorMask(Ee,Ee,Ee,Ee),Q=Ee)},setLocked:function(Ee){G=Ee},setClear:function(Ee,Se,Ve,at,xt){xt===!0&&(Ee*=at,Se*=at,Ve*=at),ge.set(Ee,Se,Ve,at),oe.equals(ge)===!1&&(n.clearColor(Ee,Se,Ve,at),oe.copy(ge))},reset:function(){G=!1,Q=null,oe.set(-1,0,0,0)}}}function i(){let G=!1,ge=!1,Q=null,oe=null,Ee=null;return{setReversed:function(Se){if(ge!==Se){const Ve=e.get("EXT_clip_control");ge?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const at=Ee;Ee=null,this.setClear(at)}ge=Se},getReversed:function(){return ge},setTest:function(Se){Se?L(n.DEPTH_TEST):D(n.DEPTH_TEST)},setMask:function(Se){Q!==Se&&!G&&(n.depthMask(Se),Q=Se)},setFunc:function(Se){if(ge&&(Se=Zp[Se]),oe!==Se){switch(Se){case Br:n.depthFunc(n.NEVER);break;case zr:n.depthFunc(n.ALWAYS);break;case kr:n.depthFunc(n.LESS);break;case jn:n.depthFunc(n.LEQUAL);break;case Hr:n.depthFunc(n.EQUAL);break;case Gr:n.depthFunc(n.GEQUAL);break;case Vr:n.depthFunc(n.GREATER);break;case Wr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Se}},setLocked:function(Se){G=Se},setClear:function(Se){Ee!==Se&&(ge&&(Se=1-Se),n.clearDepth(Se),Ee=Se)},reset:function(){G=!1,Q=null,oe=null,Ee=null,ge=!1}}}function r(){let G=!1,ge=null,Q=null,oe=null,Ee=null,Se=null,Ve=null,at=null,xt=null;return{setTest:function(tt){G||(tt?L(n.STENCIL_TEST):D(n.STENCIL_TEST))},setMask:function(tt){ge!==tt&&!G&&(n.stencilMask(tt),ge=tt)},setFunc:function(tt,kt,rn){(Q!==tt||oe!==kt||Ee!==rn)&&(n.stencilFunc(tt,kt,rn),Q=tt,oe=kt,Ee=rn)},setOp:function(tt,kt,rn){(Se!==tt||Ve!==kt||at!==rn)&&(n.stencilOp(tt,kt,rn),Se=tt,Ve=kt,at=rn)},setLocked:function(tt){G=tt},setClear:function(tt){xt!==tt&&(n.clearStencil(tt),xt=tt)},reset:function(){G=!1,ge=null,Q=null,oe=null,Ee=null,Se=null,Ve=null,at=null,xt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,S=null,v=null,C=null,w=null,R=new Oe(0,0,0),b=0,x=!1,M=null,P=null,O=null,F=null,B=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=Y>=2);let ae=null,fe={};const ie=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),Fe=new it().fromArray(ie),J=new it().fromArray(Re);function le(G,ge,Q,oe){const Ee=new Uint8Array(4),Se=n.createTexture();n.bindTexture(G,Se),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<Q;Ve++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(ge+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return Se}const T={};T[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),T[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),T[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(n.DEPTH_TEST),o.setFunc(jn),Ce(!1),pe(Ao),L(n.CULL_FACE),N(fn);function L(G){c[G]!==!0&&(n.enable(G),c[G]=!0)}function D(G){c[G]!==!1&&(n.disable(G),c[G]=!1)}function U(G,ge){return h[G]!==ge?(n.bindFramebuffer(G,ge),h[G]=ge,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function V(G,ge){let Q=d,oe=!1;if(G){Q=f.get(ge),Q===void 0&&(Q=[],f.set(ge,Q));const Ee=G.textures;if(Q.length!==Ee.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Ve=Ee.length;Se<Ve;Se++)Q[Se]=n.COLOR_ATTACHMENT0+Se;Q.length=Ee.length,oe=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,oe=!0);oe&&n.drawBuffers(Q)}function ce(G){return g!==G?(n.useProgram(G),g=G,!0):!1}const me={[wn]:n.FUNC_ADD,[Wl]:n.FUNC_SUBTRACT,[Xl]:n.FUNC_REVERSE_SUBTRACT};me[ql]=n.MIN,me[Yl]=n.MAX;const Te={[jl]:n.ZERO,[Kl]:n.ONE,[$l]:n.SRC_COLOR,[Fr]:n.SRC_ALPHA,[nc]:n.SRC_ALPHA_SATURATE,[ec]:n.DST_COLOR,[Jl]:n.DST_ALPHA,[Zl]:n.ONE_MINUS_SRC_COLOR,[Or]:n.ONE_MINUS_SRC_ALPHA,[tc]:n.ONE_MINUS_DST_COLOR,[Ql]:n.ONE_MINUS_DST_ALPHA,[ic]:n.CONSTANT_COLOR,[rc]:n.ONE_MINUS_CONSTANT_COLOR,[sc]:n.CONSTANT_ALPHA,[oc]:n.ONE_MINUS_CONSTANT_ALPHA};function N(G,ge,Q,oe,Ee,Se,Ve,at,xt,tt){if(G===fn){_===!0&&(D(n.BLEND),_=!1);return}if(_===!1&&(L(n.BLEND),_=!0),G!==Vl){if(G!==m||tt!==x){if((p!==wn||v!==wn)&&(n.blendEquation(n.FUNC_ADD),p=wn,v=wn),tt)switch(G){case Xn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFunc(n.ONE,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Co:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Xn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Co:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,S=null,C=null,w=null,R.set(0,0,0),b=0,m=G,x=tt}return}Ee=Ee||ge,Se=Se||Q,Ve=Ve||oe,(ge!==p||Ee!==v)&&(n.blendEquationSeparate(me[ge],me[Ee]),p=ge,v=Ee),(Q!==y||oe!==S||Se!==C||Ve!==w)&&(n.blendFuncSeparate(Te[Q],Te[oe],Te[Se],Te[Ve]),y=Q,S=oe,C=Se,w=Ve),(at.equals(R)===!1||xt!==b)&&(n.blendColor(at.r,at.g,at.b,xt),R.copy(at),b=xt),m=G,x=!1}function Be(G,ge){G.side===Rt?D(n.CULL_FACE):L(n.CULL_FACE);let Q=G.side===gt;ge&&(Q=!Q),Ce(Q),G.blending===Xn&&G.transparent===!1?N(fn):N(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const oe=G.stencilWrite;a.setTest(oe),oe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),we(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?L(n.SAMPLE_ALPHA_TO_COVERAGE):D(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(G){M!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),M=G)}function pe(G){G!==kl?(L(n.CULL_FACE),G!==P&&(G===Ao?n.cullFace(n.BACK):G===Hl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):D(n.CULL_FACE),P=G}function he(G){G!==O&&(H&&n.lineWidth(G),O=G)}function we(G,ge,Q){G?(L(n.POLYGON_OFFSET_FILL),(F!==ge||B!==Q)&&(n.polygonOffset(ge,Q),F=ge,B=Q)):D(n.POLYGON_OFFSET_FILL)}function _e(G){G?L(n.SCISSOR_TEST):D(n.SCISSOR_TEST)}function I(G){G===void 0&&(G=n.TEXTURE0+K-1),ae!==G&&(n.activeTexture(G),ae=G)}function E(G,ge,Q){Q===void 0&&(ae===null?Q=n.TEXTURE0+K-1:Q=ae);let oe=fe[Q];oe===void 0&&(oe={type:void 0,texture:void 0},fe[Q]=oe),(oe.type!==G||oe.texture!==ge)&&(ae!==Q&&(n.activeTexture(Q),ae=Q),n.bindTexture(G,ge||T[G]),oe.type=G,oe.texture=ge)}function X(){const G=fe[ae];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(G){Fe.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Fe.copy(G))}function xe(G){J.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function qe(G,ge){let Q=u.get(ge);Q===void 0&&(Q=new WeakMap,u.set(ge,Q));let oe=Q.get(G);oe===void 0&&(oe=n.getUniformBlockIndex(ge,G.name),Q.set(G,oe))}function ze(G,ge){const oe=u.get(ge).get(G);l.get(ge)!==oe&&(n.uniformBlockBinding(ge,oe,G.__bindingPointIndex),l.set(ge,oe))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ae=null,fe={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,S=null,v=null,C=null,w=null,R=new Oe(0,0,0),b=0,x=!1,M=null,P=null,O=null,F=null,B=null,Fe.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:L,disable:D,bindFramebuffer:U,drawBuffers:V,useProgram:ce,setBlending:N,setMaterial:Be,setFlipSided:Ce,setCullFace:pe,setLineWidth:he,setPolygonOffset:we,setScissorTest:_e,activeTexture:I,bindTexture:E,unbindTexture:X,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:ye,texImage3D:Ae,updateUBOMapping:qe,uniformBlockBinding:ze,texStorage2D:Ue,texStorage3D:te,texSubImage2D:k,texSubImage3D:ne,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Pe,viewport:xe,reset:Ke}}function fl(n,e,t,i){const r=Qp(i);switch(t){case Xo:return n*e;case Yo:return n*e;case jo:return n*e*2;case Ps:return n*e/r.components*r.byteLength;case Is:return n*e/r.components*r.byteLength;case Ko:return n*e*2/r.components*r.byteLength;case Ls:return n*e*2/r.components*r.byteLength;case qo:return n*e*3/r.components*r.byteLength;case zt:return n*e*4/r.components*r.byteLength;case Ds:return n*e*4/r.components*r.byteLength;case qi:case Yi:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ji:case Ki:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kr:case Zr:return Math.max(n,16)*Math.max(e,8)/4;case jr:case $r:return Math.max(n,8)*Math.max(e,8)/2;case Jr:case Qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ts:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ns:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case is:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ss:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case os:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case as:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ls:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case us:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hs:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fs:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ds:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ps:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $i:case ms:case gs:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $o:case _s:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xs:case vs:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qp(n){switch(n){case en:case Go:return{byteLength:1,components:1};case wi:case Vo:case Ri:return{byteLength:2,components:1};case Rs:case Cs:return{byteLength:2,components:4};case Cn:case As:case qt:return{byteLength:4,components:1};case Wo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function e0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ge,c=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return d?new OffscreenCanvas(I,E):Ms("canvas")}function _(I,E,X){let ee=1;const se=_e(I);if((se.width>X||se.height>X)&&(ee=X/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const k=Math.floor(ee*se.width),ne=Math.floor(ee*se.height);h===void 0&&(h=g(k,ne));const re=E?g(k,ne):h;return re.width=k,re.height=ne,re.getContext("2d").drawImage(I,0,0,k,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+k+"x"+ne+")."),re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){n.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(I,E,X,ee,se=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let k=E;if(E===n.RED&&(X===n.FLOAT&&(k=n.R32F),X===n.HALF_FLOAT&&(k=n.R16F),X===n.UNSIGNED_BYTE&&(k=n.R8)),E===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(k=n.R8UI),X===n.UNSIGNED_SHORT&&(k=n.R16UI),X===n.UNSIGNED_INT&&(k=n.R32UI),X===n.BYTE&&(k=n.R8I),X===n.SHORT&&(k=n.R16I),X===n.INT&&(k=n.R32I)),E===n.RG&&(X===n.FLOAT&&(k=n.RG32F),X===n.HALF_FLOAT&&(k=n.RG16F),X===n.UNSIGNED_BYTE&&(k=n.RG8)),E===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(k=n.RG8UI),X===n.UNSIGNED_SHORT&&(k=n.RG16UI),X===n.UNSIGNED_INT&&(k=n.RG32UI),X===n.BYTE&&(k=n.RG8I),X===n.SHORT&&(k=n.RG16I),X===n.INT&&(k=n.RG32I)),E===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(k=n.RGB8UI),X===n.UNSIGNED_SHORT&&(k=n.RGB16UI),X===n.UNSIGNED_INT&&(k=n.RGB32UI),X===n.BYTE&&(k=n.RGB8I),X===n.SHORT&&(k=n.RGB16I),X===n.INT&&(k=n.RGB32I)),E===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),X===n.UNSIGNED_INT&&(k=n.RGBA32UI),X===n.BYTE&&(k=n.RGBA8I),X===n.SHORT&&(k=n.RGBA16I),X===n.INT&&(k=n.RGBA32I)),E===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),E===n.RGBA){const ne=se?nr:$e.getTransfer(ee);X===n.FLOAT&&(k=n.RGBA32F),X===n.HALF_FLOAT&&(k=n.RGBA16F),X===n.UNSIGNED_BYTE&&(k=ne===nt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function v(I,E){let X;return I?E===null||E===Cn||E===Zn?X=n.DEPTH24_STENCIL8:E===qt?X=n.DEPTH32F_STENCIL8:E===wi&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cn||E===Zn?X=n.DEPTH_COMPONENT24:E===qt?X=n.DEPTH_COMPONENT32F:E===wi&&(X=n.DEPTH_COMPONENT16),X}function C(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ct&&I.minFilter!==Bt?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){const E=I.target;E.removeEventListener("dispose",w),b(E),E.isVideoTexture&&c.delete(E)}function R(I){const E=I.target;E.removeEventListener("dispose",R),M(E)}function b(I){const E=i.get(I);if(E.__webglInit===void 0)return;const X=I.source,ee=f.get(X);if(ee){const se=ee[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&x(I),Object.keys(ee).length===0&&f.delete(X)}i.remove(I)}function x(I){const E=i.get(I);n.deleteTexture(E.__webglTexture);const X=I.source,ee=f.get(X);delete ee[E.__cacheKey],o.memory.textures--}function M(I){const E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let se=0;se<E.__webglFramebuffer[ee].length;se++)n.deleteFramebuffer(E.__webglFramebuffer[ee][se]);else n.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[ee]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=I.textures;for(let ee=0,se=X.length;ee<se;ee++){const k=i.get(X[ee]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(X[ee])}i.remove(I)}let P=0;function O(){P=0}function F(){const I=P;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),P+=1,I}function B(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function K(I,E){const X=i.get(I);if(I.isVideoTexture&&he(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){const ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,I,E);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+E)}function H(I,E){const X=i.get(I);if(I.version>0&&X.__version!==I.version){J(X,I,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+E)}function Y(I,E){const X=i.get(I);if(I.version>0&&X.__version!==I.version){J(X,I,E);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+E)}function j(I,E){const X=i.get(I);if(I.version>0&&X.__version!==I.version){le(X,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+E)}const ae={[Ti]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[Yr]:n.MIRRORED_REPEAT},fe={[Ct]:n.NEAREST,[mc]:n.NEAREST_MIPMAP_NEAREST,[Vi]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[Ur]:n.LINEAR_MIPMAP_NEAREST,[Jt]:n.LINEAR_MIPMAP_LINEAR},ie={[vc]:n.NEVER,[Tc]:n.ALWAYS,[Mc]:n.LESS,[Zo]:n.LEQUAL,[yc]:n.EQUAL,[Ec]:n.GEQUAL,[Sc]:n.GREATER,[bc]:n.NOTEQUAL};function Re(I,E){if(E.type===qt&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bt||E.magFilter===Ur||E.magFilter===Vi||E.magFilter===Jt||E.minFilter===Bt||E.minFilter===Ur||E.minFilter===Vi||E.minFilter===Jt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ae[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ae[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ae[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,fe[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,fe[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ct||E.minFilter!==Vi&&E.minFilter!==Jt||E.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Fe(I,E){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));const ee=E.source;let se=f.get(ee);se===void 0&&(se={},f.set(ee,se));const k=B(E);if(k!==I.__cacheKey){se[k]===void 0&&(se[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[k].usedTimes++;const ne=se[I.__cacheKey];ne!==void 0&&(se[I.__cacheKey].usedTimes--,ne.usedTimes===0&&x(E)),I.__cacheKey=k,I.__webglTexture=se[k].texture}return X}function J(I,E,X){let ee=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=n.TEXTURE_3D);const se=Fe(I,E),k=E.source;t.bindTexture(ee,I.__webglTexture,n.TEXTURE0+X);const ne=i.get(k);if(k.version!==ne.__version||se===!0){t.activeTexture(n.TEXTURE0+X);const re=$e.getPrimaries($e.workingColorSpace),ue=E.colorSpace===hn?null:$e.getPrimaries(E.colorSpace),Ue=E.colorSpace===hn||re===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let te=_(E.image,!1,r.maxTextureSize);te=we(E,te);const ye=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type);let Pe=S(E.internalFormat,ye,Ae,E.colorSpace,E.isVideoTexture);Re(ee,E);let xe;const qe=E.mipmaps,ze=E.isVideoTexture!==!0,Ke=ne.__version===void 0||se===!0,G=k.dataReady,ge=C(E,te);if(E.isDepthTexture)Pe=v(E.format===Jn,E.type),Ke&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Pe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Pe,te.width,te.height,0,ye,Ae,null));else if(E.isDataTexture)if(qe.length>0){ze&&Ke&&t.texStorage2D(n.TEXTURE_2D,ge,Pe,qe[0].width,qe[0].height);for(let Q=0,oe=qe.length;Q<oe;Q++)xe=qe[Q],ze?G&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,xe.width,xe.height,ye,Ae,xe.data):t.texImage2D(n.TEXTURE_2D,Q,Pe,xe.width,xe.height,0,ye,Ae,xe.data);E.generateMipmaps=!1}else ze?(Ke&&t.texStorage2D(n.TEXTURE_2D,ge,Pe,te.width,te.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,ye,Ae,te.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,te.width,te.height,0,ye,Ae,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Pe,qe[0].width,qe[0].height,te.depth);for(let Q=0,oe=qe.length;Q<oe;Q++)if(xe=qe[Q],E.format!==zt)if(ye!==null)if(ze){if(G)if(E.layerUpdates.size>0){const Ee=fl(xe.width,xe.height,E.format,E.type);for(const Se of E.layerUpdates){const Ve=xe.data.subarray(Se*Ee/xe.data.BYTES_PER_ELEMENT,(Se+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Se,xe.width,xe.height,1,ye,Ve)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,xe.width,xe.height,te.depth,ye,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Pe,xe.width,xe.height,te.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,xe.width,xe.height,te.depth,ye,Ae,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Pe,xe.width,xe.height,te.depth,0,ye,Ae,xe.data)}else{ze&&Ke&&t.texStorage2D(n.TEXTURE_2D,ge,Pe,qe[0].width,qe[0].height);for(let Q=0,oe=qe.length;Q<oe;Q++)xe=qe[Q],E.format!==zt?ye!==null?ze?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Pe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?G&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,xe.width,xe.height,ye,Ae,xe.data):t.texImage2D(n.TEXTURE_2D,Q,Pe,xe.width,xe.height,0,ye,Ae,xe.data)}else if(E.isDataArrayTexture)if(ze){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Pe,te.width,te.height,te.depth),G)if(E.layerUpdates.size>0){const Q=fl(te.width,te.height,E.format,E.type);for(const oe of E.layerUpdates){const Ee=te.data.subarray(oe*Q/te.data.BYTES_PER_ELEMENT,(oe+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,te.width,te.height,1,ye,Ae,Ee)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ye,Ae,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,te.width,te.height,te.depth,0,ye,Ae,te.data);else if(E.isData3DTexture)ze?(Ke&&t.texStorage3D(n.TEXTURE_3D,ge,Pe,te.width,te.height,te.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ye,Ae,te.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,te.width,te.height,te.depth,0,ye,Ae,te.data);else if(E.isFramebufferTexture){if(Ke)if(ze)t.texStorage2D(n.TEXTURE_2D,ge,Pe,te.width,te.height);else{let Q=te.width,oe=te.height;for(let Ee=0;Ee<ge;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Pe,Q,oe,0,ye,Ae,null),Q>>=1,oe>>=1}}else if(qe.length>0){if(ze&&Ke){const Q=_e(qe[0]);t.texStorage2D(n.TEXTURE_2D,ge,Pe,Q.width,Q.height)}for(let Q=0,oe=qe.length;Q<oe;Q++)xe=qe[Q],ze?G&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ye,Ae,xe):t.texImage2D(n.TEXTURE_2D,Q,Pe,ye,Ae,xe);E.generateMipmaps=!1}else if(ze){if(Ke){const Q=_e(te);t.texStorage2D(n.TEXTURE_2D,ge,Pe,Q.width,Q.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ae,te)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ye,Ae,te);m(E)&&p(ee),ne.__version=k.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function le(I,E,X){if(E.image.length!==6)return;const ee=Fe(I,E),se=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+X);const k=i.get(se);if(se.version!==k.__version||ee===!0){t.activeTexture(n.TEXTURE0+X);const ne=$e.getPrimaries($e.workingColorSpace),re=E.colorSpace===hn?null:$e.getPrimaries(E.colorSpace),ue=E.colorSpace===hn||ne===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,te=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let oe=0;oe<6;oe++)!Ue&&!te?ye[oe]=_(E.image[oe],!0,r.maxCubemapSize):ye[oe]=te?E.image[oe].image:E.image[oe],ye[oe]=we(E,ye[oe]);const Ae=ye[0],Pe=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),qe=S(E.internalFormat,Pe,xe,E.colorSpace),ze=E.isVideoTexture!==!0,Ke=k.__version===void 0||ee===!0,G=se.dataReady;let ge=C(E,Ae);Re(n.TEXTURE_CUBE_MAP,E);let Q;if(Ue){ze&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,qe,Ae.width,Ae.height);for(let oe=0;oe<6;oe++){Q=ye[oe].mipmaps;for(let Ee=0;Ee<Q.length;Ee++){const Se=Q[Ee];E.format!==zt?Pe!==null?ze?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,0,0,Se.width,Se.height,Pe,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,qe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,0,0,Se.width,Se.height,Pe,xe,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,qe,Se.width,Se.height,0,Pe,xe,Se.data)}}}else{if(Q=E.mipmaps,ze&&Ke){Q.length>0&&ge++;const oe=_e(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(te){ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ye[oe].width,ye[oe].height,Pe,xe,ye[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,ye[oe].width,ye[oe].height,0,Pe,xe,ye[oe].data);for(let Ee=0;Ee<Q.length;Ee++){const Ve=Q[Ee].image[oe].image;ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,0,0,Ve.width,Ve.height,Pe,xe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,qe,Ve.width,Ve.height,0,Pe,xe,Ve.data)}}else{ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Pe,xe,ye[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Pe,xe,ye[oe]);for(let Ee=0;Ee<Q.length;Ee++){const Se=Q[Ee];ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,0,0,Pe,xe,Se.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,qe,Pe,xe,Se.image[oe])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),k.__version=se.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function T(I,E,X,ee,se,k){const ne=s.convert(X.format,X.colorSpace),re=s.convert(X.type),ue=S(X.internalFormat,ne,re,X.colorSpace),Ue=i.get(E),te=i.get(X);if(te.__renderTarget=E,!Ue.__hasExternalTextures){const ye=Math.max(1,E.width>>k),Ae=Math.max(1,E.height>>k);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,k,ue,ye,Ae,E.depth,0,ne,re,null):t.texImage2D(se,k,ue,ye,Ae,0,ne,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,se,te.__webglTexture,0,Ce(E)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,se,te.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(I,E,X){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){const ee=E.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,k=v(E.stencilBuffer,se),ne=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=Ce(E);pe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,k,E.width,E.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,k,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,k,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,I)}else{const ee=E.textures;for(let se=0;se<ee.length;se++){const k=ee[se],ne=s.convert(k.format,k.colorSpace),re=s.convert(k.type),ue=S(k.internalFormat,ne,re,k.colorSpace),Ue=Ce(E);X&&pe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ue,E.width,E.height):pe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,ue,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ue,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function D(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(E.depthTexture);ee.__renderTarget=E,(!ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const se=ee.__webglTexture,k=Ce(E);if(E.depthTexture.format===qn)pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(E.depthTexture.format===Jn)pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function U(I){const E=i.get(I),X=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const ee=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=ee}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");D(E.__webglFramebuffer,I)}else if(X){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=n.createRenderbuffer(),L(E.__webglDepthbuffer[ee],I,!1);else{const se=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=E.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,k)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),L(E.__webglDepthbuffer,I,!1);else{const ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(I,E,X){const ee=i.get(I);E!==void 0&&T(ee.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&U(I)}function ce(I){const E=I.texture,X=i.get(I),ee=i.get(E);I.addEventListener("dispose",R);const se=I.textures,k=I.isWebGLCubeRenderTarget===!0,ne=se.length>1;if(ne||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=E.version,o.memory.textures++),k){X.__webglFramebuffer=[];for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[re]=[];for(let ue=0;ue<E.mipmaps.length;ue++)X.__webglFramebuffer[re][ue]=n.createFramebuffer()}else X.__webglFramebuffer[re]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let re=0;re<E.mipmaps.length;re++)X.__webglFramebuffer[re]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(ne)for(let re=0,ue=se.length;re<ue;re++){const Ue=i.get(se[re]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&pe(I)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let re=0;re<se.length;re++){const ue=se[re];X.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[re]);const Ue=s.convert(ue.format,ue.colorSpace),te=s.convert(ue.type),ye=S(ue.internalFormat,Ue,te,ue.colorSpace,I.isXRRenderTarget===!0),Ae=Ce(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ye,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,X.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),L(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Re(n.TEXTURE_CUBE_MAP,E);for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)T(X.__webglFramebuffer[re][ue],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else T(X.__webglFramebuffer[re],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(E)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){for(let re=0,ue=se.length;re<ue;re++){const Ue=se[re],te=i.get(Ue);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),Re(n.TEXTURE_2D,Ue),T(X.__webglFramebuffer,I,Ue,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(Ue)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(re=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,ee.__webglTexture),Re(re,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)T(X.__webglFramebuffer[ue],I,E,n.COLOR_ATTACHMENT0,re,ue);else T(X.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,re,0);m(E)&&p(re),t.unbindTexture()}I.depthBuffer&&U(I)}function me(I){const E=I.textures;for(let X=0,ee=E.length;X<ee;X++){const se=E[X];if(m(se)){const k=y(I),ne=i.get(se).__webglTexture;t.bindTexture(k,ne),p(k),t.unbindTexture()}}}const Te=[],N=[];function Be(I){if(I.samples>0){if(pe(I)===!1){const E=I.textures,X=I.width,ee=I.height;let se=n.COLOR_BUFFER_BIT;const k=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=i.get(I),re=E.length>1;if(re)for(let ue=0;ue<E.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ne.__webglColorRenderbuffer[ue]);const Ue=i.get(E[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,X,ee,0,0,X,ee,se,n.NEAREST),l===!0&&(Te.length=0,N.length=0,Te.push(n.COLOR_ATTACHMENT0+ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Te.push(k),N.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<E.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,ne.__webglColorRenderbuffer[ue]);const Ue=i.get(E[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ce(I){return Math.min(r.maxSamples,I.samples)}function pe(I){const E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function he(I){const E=o.render.frame;c.get(I)!==E&&(c.set(I,E),I.update())}function we(I,E){const X=I.colorSpace,ee=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==ti&&X!==hn&&($e.getTransfer(X)===nt?(ee!==zt||se!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function _e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=V,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=T,this.useMultisampledRTT=pe}function Vc(n,e){function t(i,r=hn){let s;const o=$e.getTransfer(r);if(i===en)return n.UNSIGNED_BYTE;if(i===Rs)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cs)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Go)return n.BYTE;if(i===Vo)return n.SHORT;if(i===wi)return n.UNSIGNED_SHORT;if(i===As)return n.INT;if(i===Cn)return n.UNSIGNED_INT;if(i===qt)return n.FLOAT;if(i===Ri)return n.HALF_FLOAT;if(i===Xo)return n.ALPHA;if(i===qo)return n.RGB;if(i===zt)return n.RGBA;if(i===Yo)return n.LUMINANCE;if(i===jo)return n.LUMINANCE_ALPHA;if(i===qn)return n.DEPTH_COMPONENT;if(i===Jn)return n.DEPTH_STENCIL;if(i===Ps)return n.RED;if(i===Is)return n.RED_INTEGER;if(i===Ko)return n.RG;if(i===Ls)return n.RG_INTEGER;if(i===Ds)return n.RGBA_INTEGER;if(i===qi||i===Yi||i===ji||i===Ki)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qi)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ji)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ki)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qi)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yi)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ji)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ki)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jr||i===Kr||i===$r||i===Zr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$r)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jr||i===Qr||i===es)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jr||i===Qr)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===es)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ts||i===ns||i===is||i===rs||i===ss||i===os||i===as||i===ls||i===cs||i===us||i===hs||i===fs||i===ds||i===ps)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ts)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ns)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===is)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rs)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ss)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===os)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===as)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ls)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cs)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===us)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hs)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fs)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ds)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ps)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$i||i===ms||i===gs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$i)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ms)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$o||i===_s||i===xs||i===vs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$i)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_s)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Wc extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rn extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t0={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),d=.02,g=.005;u.inputState.pinching&&f>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const n0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i0=`
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

}`;class r0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new _t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ut({vertexShader:n0,fragmentShader:i0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new mn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s0 extends ni{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,d=null,g=null;const _=new r0,m=t.getContextAttributes();let p=null,y=null;const S=[],v=[],C=new Ge;let w=null;const R=new At;R.viewport=new it;const b=new At;b.viewport=new it;const x=[R,b],M=new Wc;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=S[J];return le===void 0&&(le=new yo,S[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=S[J];return le===void 0&&(le=new yo,S[J]=le),le.getGripSpace()},this.getHand=function(J){let le=S[J];return le===void 0&&(le=new yo,S[J]=le),le.getHandSpace()};function F(J){const le=v.indexOf(J.inputSource);if(le===-1)return;const T=S[le];T!==void 0&&(T.update(J.inputSource,J.frame,u||o),T.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",K);for(let J=0;J<S.length;J++){const le=v[J];le!==null&&(v[J]=null,S[J].disconnect(le))}P=null,O=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,y=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Pn(d.framebufferWidth,d.framebufferHeight,{format:zt,type:en,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,T=null,L=null;m.depth&&(L=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?Jn:qn,T=m.stencil?Zn:Cn);const D={colorFormat:t.RGBA8,depthFormat:L,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(D),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Pn(f.textureWidth,f.textureHeight,{format:zt,type:en,depthTexture:new la(f.textureWidth,f.textureHeight,T,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(J){for(let le=0;le<J.removed.length;le++){const T=J.removed[le],L=v.indexOf(T);L>=0&&(v[L]=null,S[L].disconnect(T))}for(let le=0;le<J.added.length;le++){const T=J.added[le];let L=v.indexOf(T);if(L===-1){for(let U=0;U<S.length;U++)if(U>=v.length){v.push(T),L=U;break}else if(v[U]===null){v[U]=T,L=U;break}if(L===-1)break}const D=S[L];D&&D.connect(T)}}const H=new z,Y=new z;function j(J,le,T){H.setFromMatrixPosition(le.matrixWorld),Y.setFromMatrixPosition(T.matrixWorld);const L=H.distanceTo(Y),D=le.projectionMatrix.elements,U=T.projectionMatrix.elements,V=D[14]/(D[10]-1),ce=D[14]/(D[10]+1),me=(D[9]+1)/D[5],Te=(D[9]-1)/D[5],N=(D[8]-1)/D[0],Be=(U[8]+1)/U[0],Ce=V*N,pe=V*Be,he=L/(-N+Be),we=he*-N;if(le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(we),J.translateZ(he),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),D[10]===-1)J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const _e=V+he,I=ce+he,E=Ce-we,X=pe+(L-we),ee=me*ce/I*_e,se=Te*ce/I*_e;J.projectionMatrix.makePerspective(E,X,ee,se,_e,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ae(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let le=J.near,T=J.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(T=_.depthFar)),M.near=b.near=R.near=le,M.far=b.far=R.far=T,(P!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,O=M.far),R.layers.mask=J.layers.mask|2,b.layers.mask=J.layers.mask|4,M.layers.mask=R.layers.mask|b.layers.mask;const L=J.parent,D=M.cameras;ae(M,L);for(let U=0;U<D.length;U++)ae(D[U],L);D.length===2?j(M,R,b):M.projectionMatrix.copy(R.projectionMatrix),fe(J,M,L)};function fe(J,le,T){T===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(T.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Lo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ie=null;function Re(J,le){if(c=le.getViewerPose(u||o),g=le,c!==null){const T=c.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let L=!1;T.length!==M.cameras.length&&(M.cameras.length=0,L=!0);for(let U=0;U<T.length;U++){const V=T[U];let ce=null;if(d!==null)ce=d.getViewport(V);else{const Te=h.getViewSubImage(f,V);ce=Te.viewport,U===0&&(e.setRenderTargetTextures(y,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(y))}let me=x[U];me===void 0&&(me=new At,me.layers.enable(U),me.viewport=new it,x[U]=me),me.matrix.fromArray(V.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(V.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ce.x,ce.y,ce.width,ce.height),U===0&&(M.matrix.copy(me.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),L===!0&&M.cameras.push(me)}const D=r.enabledFeatures;if(D&&D.includes("depth-sensing")){const U=h.getDepthInformation(T[0]);U&&U.isValid&&U.texture&&_.init(e,U,r.renderState)}}for(let T=0;T<S.length;T++){const L=v[T],D=S[T];L!==null&&D!==void 0&&D.update(L,le,u||o)}ie&&ie(J,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const Fe=new Fc;Fe.setAnimationLoop(Re),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}}const kn=new Pt,o0=new je;function a0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Lc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,kn.copy(v),kn.x*=-1,kn.y*=-1,kn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),m.envMapRotation.value.setFromMatrix4(o0.makeRotationFromEuler(kn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function l0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const v=S.program;i.uniformBlockBinding(y,v)}function u(y,S){let v=r[y.id];v===void 0&&(g(y),v=c(y),r[y.id]=v,y.addEventListener("dispose",m));const C=S.program;i.updateUBOMapping(y,C);const w=e.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function c(y){const S=h();y.__bindingPointIndex=S;const v=n.createBuffer(),C=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=r[y.id],v=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,R=v.length;w<R;w++){const b=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,M=b.length;x<M;x++){const P=b[x];if(d(P,w,x,C)===!0){const O=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let K=0;K<F.length;K++){const H=F[K],Y=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,O+B,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,S,v,C){const w=y.value,R=S+"_"+v;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const b=C[R];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return C[R]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function g(y){const S=y.uniforms;let v=0;const C=16;for(let R=0,b=S.length;R<b;R++){const x=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,P=x.length;M<P;M++){const O=x[M],F=Array.isArray(O.value)?O.value:[O.value];for(let B=0,K=F.length;B<K;B++){const H=F[B],Y=_(H),j=v%C,ae=j%Y.boundary,fe=j+ae;v+=ae,fe!==0&&C-fe<Y.storage&&(v+=C-fe),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Y.storage}}}const w=v%C;return w>0&&(v+=C-w),y.__size=v,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class Xc{constructor(e={}){const{canvas:t=Ac(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=dn,this.toneMappingExposure=1;const v=this;let C=!1,w=0,R=0,b=null,x=-1,M=null;const P=new it,O=new it;let F=null;const B=new Oe(0);let K=0,H=t.width,Y=t.height,j=1,ae=null,fe=null;const ie=new it(0,0,H,Y),Re=new it(0,0,H,Y);let Fe=!1;const J=new Ns;let le=!1,T=!1;const L=new je,D=new je,U=new z,V=new it,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function Te(){return b===null?j:1}let N=i;function Be(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Es}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Se,!1),N===null){const W="webgl2";if(N=Be(W,A),N===null)throw Be(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ce,pe,he,we,_e,I,E,X,ee,se,k,ne,re,ue,Ue,te,ye,Ae,Pe,xe,qe,ze,Ke,G;function ge(){Ce=new xd(N),Ce.init(),ze=new Vc(N,Ce),pe=new fd(N,Ce,e,ze),he=new Jp(N,Ce),pe.reverseDepthBuffer&&f&&he.buffers.depth.setReversed(!0),we=new yd(N),_e=new zp,I=new e0(N,Ce,he,_e,pe,ze,we),E=new pd(v),X=new _d(v),ee=new Au(N),Ke=new ud(N,ee),se=new vd(N,ee,we,Ke),k=new bd(N,se,ee,we),Pe=new Sd(N,pe,I),te=new dd(_e),ne=new Bp(v,E,X,Ce,pe,Ke,te),re=new a0(v,_e),ue=new Hp,Ue=new Yp(Ce),Ae=new cd(v,E,X,he,k,d,l),ye=new $p(v,k,pe),G=new l0(N,we,pe,he),xe=new hd(N,Ce,we),qe=new Md(N,Ce,we),we.programs=ne.programs,v.capabilities=pe,v.extensions=Ce,v.properties=_e,v.renderLists=ue,v.shadowMap=ye,v.state=he,v.info=we}ge();const Q=new s0(v,N);this.xr=Q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(H,Y,!1))},this.getSize=function(A){return A.set(H,Y)},this.setSize=function(A,W,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,Y=W,t.width=Math.floor(A*j),t.height=Math.floor(W*j),$===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(H*j,Y*j).floor()},this.setDrawingBufferSize=function(A,W,$){H=A,Y=W,j=$,t.width=Math.floor(A*$),t.height=Math.floor(W*$),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,W,$,Z){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,W,$,Z),he.viewport(P.copy(ie).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,W,$,Z){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,W,$,Z),he.scissor(O.copy(Re).multiplyScalar(j).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){he.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(A=!0,W=!0,$=!0){let Z=0;if(A){let q=!1;if(b!==null){const de=b.texture.format;q=de===Ds||de===Ls||de===Is}if(q){const de=b.texture.type,be=de===en||de===Cn||de===wi||de===Zn||de===Rs||de===Cs,Ie=Ae.getClearColor(),Le=Ae.getClearAlpha(),ke=Ie.r,We=Ie.g,De=Ie.b;be?(g[0]=ke,g[1]=We,g[2]=De,g[3]=Le,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=ke,_[1]=We,_[2]=De,_[3]=Le,N.clearBufferiv(N.COLOR,0,_))}else Z|=N.COLOR_BUFFER_BIT}W&&(Z|=N.DEPTH_BUFFER_BIT),$&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ue.dispose(),Ue.dispose(),_e.dispose(),E.dispose(),X.dispose(),k.dispose(),Ke.dispose(),G.dispose(),ne.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ma),Q.removeEventListener("sessionend",ga),Un.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=we.autoReset,W=ye.enabled,$=ye.autoUpdate,Z=ye.needsUpdate,q=ye.type;ge(),we.autoReset=A,ye.enabled=W,ye.autoUpdate=$,ye.needsUpdate=Z,ye.type=q}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ve(A){const W=A.target;W.removeEventListener("dispose",Ve),at(W)}function at(A){xt(A),_e.remove(A)}function xt(A){const W=_e.get(A).programs;W!==void 0&&(W.forEach(function($){ne.releaseProgram($)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,$,Z,q,de){W===null&&(W=ce);const be=q.isMesh&&q.matrixWorld.determinant()<0,Ie=iu(A,W,$,Z,q);he.setMaterial(Z,be);let Le=$.index,ke=1;if(Z.wireframe===!0){if(Le=se.getWireframeAttribute($),Le===void 0)return;ke=2}const We=$.drawRange,De=$.attributes.position;let Ze=We.start*ke,rt=(We.start+We.count)*ke;de!==null&&(Ze=Math.max(Ze,de.start*ke),rt=Math.min(rt,(de.start+de.count)*ke)),Le!==null?(Ze=Math.max(Ze,0),rt=Math.min(rt,Le.count)):De!=null&&(Ze=Math.max(Ze,0),rt=Math.min(rt,De.count));const st=rt-Ze;if(st<0||st===1/0)return;Ke.setup(q,Z,Ie,$,Le);let Et,Je=xe;if(Le!==null&&(Et=ee.get(Le),Je=qe,Je.setIndex(Et)),q.isMesh)Z.wireframe===!0?(he.setLineWidth(Z.wireframeLinewidth*Te()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(q.isLine){let Ne=Z.linewidth;Ne===void 0&&(Ne=1),he.setLineWidth(Ne*Te()),q.isLineSegments?Je.setMode(N.LINES):q.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else q.isPoints?Je.setMode(N.POINTS):q.isSprite&&Je.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Je.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))Je.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ne=q._multiDrawStarts,sn=q._multiDrawCounts,Qe=q._multiDrawCount,Ht=Le?ee.get(Le).bytesPerElement:1,ri=_e.get(Z).currentProgram.getUniforms();for(let It=0;It<Qe;It++)ri.setValue(N,"_gl_DrawID",It),Je.render(Ne[It]/Ht,sn[It])}else if(q.isInstancedMesh)Je.renderInstances(Ze,st,q.count);else if($.isInstancedBufferGeometry){const Ne=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,sn=Math.min($.instanceCount,Ne);Je.renderInstances(Ze,st,sn)}else Je.render(Ze,st)};function tt(A,W,$){A.transparent===!0&&A.side===Rt&&A.forceSinglePass===!1?(A.side=gt,A.needsUpdate=!0,ar(A,W,$),A.side=gn,A.needsUpdate=!0,ar(A,W,$),A.side=Rt):ar(A,W,$)}this.compile=function(A,W,$=null){$===null&&($=A),p=Ue.get($),p.init(W),S.push(p),$.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),A!==$&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const Z=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const de=q.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){const Ie=de[be];tt(Ie,$,q),Z.add(Ie)}else tt(de,$,q),Z.add(de)}),S.pop(),p=null,Z},this.compileAsync=function(A,W,$=null){const Z=this.compile(A,W,$);return new Promise(q=>{function de(){if(Z.forEach(function(be){_e.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){q(A);return}setTimeout(de,10)}Ce.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let kt=null;function rn(A){kt&&kt(A)}function ma(){Un.stop()}function ga(){Un.start()}const Un=new Fc;Un.setAnimationLoop(rn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){kt=A,Q.setAnimationLoop(A),A===null?Un.stop():Un.start()},Q.addEventListener("sessionstart",ma),Q.addEventListener("sessionend",ga),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(W),W=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,W,b),p=Ue.get(A,S.length),p.init(W),S.push(p),D.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),J.setFromProjectionMatrix(D),T=this.localClippingEnabled,le=te.init(this.clippingPlanes,T),m=ue.get(A,y.length),m.init(),y.push(m),Q.enabled===!0&&Q.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&Xs(de,W,-1/0,v.sortObjects)}Xs(A,W,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ae,fe),me=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,me&&Ae.addToRenderList(m,A),this.info.render.frame++,le===!0&&te.beginShadows();const $=p.state.shadowsArray;ye.render($,A,W),le===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,q=m.transmissive;if(p.setupLights(),W.isArrayCamera){const de=W.cameras;if(q.length>0)for(let be=0,Ie=de.length;be<Ie;be++){const Le=de[be];xa(Z,q,A,Le)}me&&Ae.render(A);for(let be=0,Ie=de.length;be<Ie;be++){const Le=de[be];_a(m,A,Le,Le.viewport)}}else q.length>0&&xa(Z,q,A,W),me&&Ae.render(A),_a(m,A,W);b!==null&&(I.updateMultisampleRenderTarget(b),I.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(v,A,W),Ke.resetDefaultState(),x=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],le===!0&&te.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Xs(A,W,$,Z){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){Z&&V.setFromMatrixPosition(A.matrixWorld).applyMatrix4(D);const be=k.update(A),Ie=A.material;Ie.visible&&m.push(A,be,Ie,$,V.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const be=k.update(A),Ie=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),V.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),V.copy(be.boundingSphere.center)),V.applyMatrix4(A.matrixWorld).applyMatrix4(D)),Array.isArray(Ie)){const Le=be.groups;for(let ke=0,We=Le.length;ke<We;ke++){const De=Le[ke],Ze=Ie[De.materialIndex];Ze&&Ze.visible&&m.push(A,be,Ze,$,V.z,De)}}else Ie.visible&&m.push(A,be,Ie,$,V.z,null)}}const de=A.children;for(let be=0,Ie=de.length;be<Ie;be++)Xs(de[be],W,$,Z)}function _a(A,W,$,Z){const q=A.opaque,de=A.transmissive,be=A.transparent;p.setupLightsView($),le===!0&&te.setGlobalState(v.clippingPlanes,$),Z&&he.viewport(P.copy(Z)),q.length>0&&or(q,W,$),de.length>0&&or(de,W,$),be.length>0&&or(be,W,$),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function xa(A,W,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Pn(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Ri:en,minFilter:Jt,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const de=p.state.transmissionRenderTarget[Z.id],be=Z.viewport||P;de.setSize(be.z,be.w);const Ie=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(B),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),me&&Ae.render($);const Le=v.toneMapping;v.toneMapping=dn;const ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),le===!0&&te.setGlobalState(v.clippingPlanes,Z),or(A,$,Z),I.updateMultisampleRenderTarget(de),I.updateRenderTargetMipmap(de),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let De=0,Ze=W.length;De<Ze;De++){const rt=W[De],st=rt.object,Et=rt.geometry,Je=rt.material,Ne=rt.group;if(Je.side===Rt&&st.layers.test(Z.layers)){const sn=Je.side;Je.side=gt,Je.needsUpdate=!0,va(st,$,Z,Et,Je,Ne),Je.side=sn,Je.needsUpdate=!0,We=!0}}We===!0&&(I.updateMultisampleRenderTarget(de),I.updateRenderTargetMipmap(de))}v.setRenderTarget(Ie),v.setClearColor(B,K),ke!==void 0&&(Z.viewport=ke),v.toneMapping=Le}function or(A,W,$){const Z=W.isScene===!0?W.overrideMaterial:null;for(let q=0,de=A.length;q<de;q++){const be=A[q],Ie=be.object,Le=be.geometry,ke=Z===null?be.material:Z,We=be.group;Ie.layers.test($.layers)&&va(Ie,W,$,Le,ke,We)}}function va(A,W,$,Z,q,de){A.onBeforeRender(v,W,$,Z,q,de),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(v,W,$,Z,A,de),q.transparent===!0&&q.side===Rt&&q.forceSinglePass===!1?(q.side=gt,q.needsUpdate=!0,v.renderBufferDirect($,W,Z,q,A,de),q.side=gn,q.needsUpdate=!0,v.renderBufferDirect($,W,Z,q,A,de),q.side=Rt):v.renderBufferDirect($,W,Z,q,A,de),A.onAfterRender(v,W,$,Z,q,de)}function ar(A,W,$){W.isScene!==!0&&(W=ce);const Z=_e.get(A),q=p.state.lights,de=p.state.shadowsArray,be=q.state.version,Ie=ne.getParameters(A,q.state,de,W,$),Le=ne.getProgramCacheKey(Ie);let ke=Z.programs;Z.environment=A.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(A.isMeshStandardMaterial?X:E).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Ve),ke=new Map,Z.programs=ke);let We=ke.get(Le);if(We!==void 0){if(Z.currentProgram===We&&Z.lightsStateVersion===be)return ya(A,Ie),We}else Ie.uniforms=ne.getUniforms(A),A.onBeforeCompile(Ie,v),We=ne.acquireProgram(Ie,Le),ke.set(Le,We),Z.uniforms=Ie.uniforms;const De=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=te.uniform),ya(A,Ie),Z.needsLights=su(A),Z.lightsStateVersion=be,Z.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.directionalShadowMap.value=q.state.directionalShadowMap,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotShadowMap.value=q.state.spotShadowMap,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMap.value=q.state.pointShadowMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=We,Z.uniformsList=null,We}function Ma(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Nr.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ya(A,W){const $=_e.get(A);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function iu(A,W,$,Z,q){W.isScene!==!0&&(W=ce),I.resetTextureUnits();const de=W.fog,be=Z.isMeshStandardMaterial?W.environment:null,Ie=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ti,Le=(Z.isMeshStandardMaterial?X:E).get(Z.envMap||be),ke=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),De=!!$.morphAttributes.position,Ze=!!$.morphAttributes.normal,rt=!!$.morphAttributes.color;let st=dn;Z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(st=v.toneMapping);const Et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Je=Et!==void 0?Et.length:0,Ne=_e.get(Z),sn=p.state.lights;if(le===!0&&(T===!0||A!==M)){const Nt=A===M&&Z.id===x;te.setState(Z,A,Nt)}let Qe=!1;Z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==sn.state.version||Ne.outputColorSpace!==Ie||q.isBatchedMesh&&Ne.batching===!1||!q.isBatchedMesh&&Ne.batching===!0||q.isBatchedMesh&&Ne.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ne.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ne.instancing===!1||!q.isInstancedMesh&&Ne.instancing===!0||q.isSkinnedMesh&&Ne.skinning===!1||!q.isSkinnedMesh&&Ne.skinning===!0||q.isInstancedMesh&&Ne.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ne.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ne.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ne.instancingMorph===!1&&q.morphTexture!==null||Ne.envMap!==Le||Z.fog===!0&&Ne.fog!==de||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==te.numPlanes||Ne.numIntersection!==te.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==We||Ne.morphTargets!==De||Ne.morphNormals!==Ze||Ne.morphColors!==rt||Ne.toneMapping!==st||Ne.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Ne.__version=Z.version);let Ht=Ne.currentProgram;Qe===!0&&(Ht=ar(Z,W,q));let ri=!1,It=!1,Ii=!1;const ot=Ht.getUniforms(),$t=Ne.uniforms;if(he.useProgram(Ht.program)&&(ri=!0,It=!0,Ii=!0),Z.id!==x&&(x=Z.id,It=!0),ri||M!==A){he.buffers.depth.getReversed()?(L.copy(A.projectionMatrix),lu(L),cu(L),ot.setValue(N,"projectionMatrix",L)):ot.setValue(N,"projectionMatrix",A.projectionMatrix),ot.setValue(N,"viewMatrix",A.matrixWorldInverse);const _n=ot.map.cameraPosition;_n!==void 0&&_n.setValue(N,U.setFromMatrixPosition(A.matrixWorld)),pe.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ot.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,It=!0,Ii=!0)}if(q.isSkinnedMesh){ot.setOptional(N,q,"bindMatrix"),ot.setOptional(N,q,"bindMatrixInverse");const Nt=q.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ot.setValue(N,"boneTexture",Nt.boneTexture,I))}q.isBatchedMesh&&(ot.setOptional(N,q,"batchingTexture"),ot.setValue(N,"batchingTexture",q._matricesTexture,I),ot.setOptional(N,q,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",q._indirectTexture,I),ot.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",q._colorsTexture,I));const Li=$.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Pe.update(q,$,Ht),(It||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,ot.setValue(N,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&($t.envMap.value=Le,$t.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&($t.envMapIntensity.value=W.environmentIntensity),It&&(ot.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&ru($t,Ii),de&&Z.fog===!0&&re.refreshFogUniforms($t,de),re.refreshMaterialUniforms($t,Z,j,Y,p.state.transmissionRenderTarget[A.id]),Nr.upload(N,Ma(Ne),$t,I)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Nr.upload(N,Ma(Ne),$t,I),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ot.setValue(N,"center",q.center),ot.setValue(N,"modelViewMatrix",q.modelViewMatrix),ot.setValue(N,"normalMatrix",q.normalMatrix),ot.setValue(N,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Nt=Z.uniformsGroups;for(let _n=0,xn=Nt.length;_n<xn;_n++){const Sa=Nt[_n];G.update(Sa,Ht),G.bind(Sa,Ht)}}return Ht}function ru(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function su(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,W,$){_e.get(A.texture).__webglTexture=W,_e.get(A.depthTexture).__webglTexture=$;const Z=_e.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const $=_e.get(A);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,$=0){b=A,w=W,R=$;let Z=!0,q=null,de=!1,be=!1;if(A){const Le=_e.get(A);if(Le.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(N.FRAMEBUFFER,null),Z=!1;else if(Le.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Le.__hasExternalTextures)I.rebindTextures(A,_e.get(A.texture).__webglTexture,_e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(Le.__boundDepthTexture!==De){if(De!==null&&_e.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(be=!0);const We=_e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[W])?q=We[W][$]:q=We[W],de=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?q=_e.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?q=We[$]:q=We,P.copy(A.viewport),O.copy(A.scissor),F=A.scissorTest}else P.copy(ie).multiplyScalar(j).floor(),O.copy(Re).multiplyScalar(j).floor(),F=Fe;if(he.bindFramebuffer(N.FRAMEBUFFER,q)&&Z&&he.drawBuffers(A,q),he.viewport(P),he.scissor(O),he.setScissorTest(F),de){const Le=_e.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,$)}else if(be){const Le=_e.get(A.texture),ke=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.__webglTexture,$||0,ke)}x=-1},this.readRenderTargetPixels=function(A,W,$,Z,q,de,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){he.bindFramebuffer(N.FRAMEBUFFER,Ie);try{const Le=A.texture,ke=Le.format,We=Le.type;if(!pe.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-Z&&$>=0&&$<=A.height-q&&N.readPixels(W,$,Z,q,ze.convert(ke),ze.convert(We),de)}finally{const Le=b!==null?_e.get(b).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,W,$,Z,q,de,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){const Le=A.texture,ke=Le.format,We=Le.type;if(!pe.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-Z&&$>=0&&$<=A.height-q){he.bindFramebuffer(N.FRAMEBUFFER,Ie);const De=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,De),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(W,$,Z,q,ze.convert(ke),ze.convert(We),0);const Ze=b!==null?_e.get(b).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,Ze);const rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await au(N,rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,De),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.deleteBuffer(De),N.deleteSync(rt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,$=0){A.isTexture!==!0&&(Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-$),q=Math.floor(A.image.width*Z),de=Math.floor(A.image.height*Z),be=W!==null?W.x:0,Ie=W!==null?W.y:0;I.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,be,Ie,q,de),he.unbindTexture()},this.copyTextureToTexture=function(A,W,$=null,Z=null,q=0){A.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],W=arguments[2],q=arguments[3]||0,$=null);let de,be,Ie,Le,ke,We,De,Ze,rt;const st=A.isCompressedTexture?A.mipmaps[q]:A.image;$!==null?(de=$.max.x-$.min.x,be=$.max.y-$.min.y,Ie=$.isBox3?$.max.z-$.min.z:1,Le=$.min.x,ke=$.min.y,We=$.isBox3?$.min.z:0):(de=st.width,be=st.height,Ie=st.depth||1,Le=0,ke=0,We=0),Z!==null?(De=Z.x,Ze=Z.y,rt=Z.z):(De=0,Ze=0,rt=0);const Et=ze.convert(W.format),Je=ze.convert(W.type);let Ne;W.isData3DTexture?(I.setTexture3D(W,0),Ne=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),Ne=N.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),Ne=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const sn=N.getParameter(N.UNPACK_ROW_LENGTH),Qe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ht=N.getParameter(N.UNPACK_SKIP_PIXELS),ri=N.getParameter(N.UNPACK_SKIP_ROWS),It=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,st.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,We);const Ii=A.isDataArrayTexture||A.isData3DTexture,ot=W.isDataArrayTexture||W.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const $t=_e.get(A),Li=_e.get(W),Nt=_e.get($t.__renderTarget),_n=_e.get(Li.__renderTarget);he.bindFramebuffer(N.READ_FRAMEBUFFER,Nt.__webglFramebuffer),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let xn=0;xn<Ie;xn++)Ii&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(A).__webglTexture,q,We+xn),A.isDepthTexture?(ot&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(W).__webglTexture,q,rt+xn),N.blitFramebuffer(Le,ke,de,be,De,Ze,de,be,N.DEPTH_BUFFER_BIT,N.NEAREST)):ot?N.copyTexSubImage3D(Ne,q,De,Ze,rt+xn,Le,ke,de,be):N.copyTexSubImage2D(Ne,q,De,Ze,rt+xn,Le,ke,de,be);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ot?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ne,q,De,Ze,rt,de,be,Ie,Et,Je,st.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(Ne,q,De,Ze,rt,de,be,Ie,Et,st.data):N.texSubImage3D(Ne,q,De,Ze,rt,de,be,Ie,Et,Je,st):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,q,De,Ze,de,be,Et,Je,st.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,q,De,Ze,st.width,st.height,Et,st.data):N.texSubImage2D(N.TEXTURE_2D,q,De,Ze,de,be,Et,Je,st);N.pixelStorei(N.UNPACK_ROW_LENGTH,sn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ht),N.pixelStorei(N.UNPACK_SKIP_ROWS,ri),N.pixelStorei(N.UNPACK_SKIP_IMAGES,It),q===0&&W.generateMipmaps&&N.generateMipmap(Ne),he.unbindTexture()},this.copyTextureToTexture3D=function(A,W,$=null,Z=null,q=0){return A.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],W=arguments[3],q=arguments[4]||0),Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,$,Z,q)},this.initRenderTarget=function(A){_e.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),he.unbindTexture()},this.resetState=function(){w=0,R=0,b=null,he.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class ca extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pt,this.environmentIntensity=1,this.environmentRotation=new Pt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ua extends _t{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Ct,c=Ct,h,f){super(null,o,a,l,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ss extends yt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xi=new je,dl=new je,Rr=[],pl=new In,c0=new je,Bi=new et,zi=new ii;class Os extends et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,c0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xi),pl.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(pl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xi),zi.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(i),e.ray.intersectsSphere(zi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xi),dl.multiplyMatrices(i,xi),Bi.matrixWorld=dl,Bi.raycast(e,Rr);for(let o=0,a=Rr.length;o<a;o++){const l=Rr[o];l.instanceId=s,l.object=this,t.push(l)}Rr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ua(new Float32Array(r*this.count),r,this.count,Ps,qt));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qc extends Ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ml=new je,Uo=new ea,Cr=new ii,Pr=new z;class Yc extends ut{constructor(e=new ct,t=new qc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),Cr.radius+=s,e.ray.intersectsSphere(Cr)===!1)return;ml.copy(r).invert(),Uo.copy(e.ray).applyMatrix4(ml);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=u.getX(g);Pr.fromBufferAttribute(h,m),gl(Pr,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Pr.fromBufferAttribute(h,g),gl(Pr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gl(n,e,t,i,r,s,o){const a=Uo.distanceSqToPoint(n);if(a<t){const l=new z;Uo.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class rr extends _t{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bs extends ct{constructor(e=[new Ge(0,-.5),new Ge(.5,0),new Ge(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=bt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],u=[],c=1/t,h=new z,f=new Ge,d=new z,g=new z,_=new z;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=t;y++){const S=i+y*c*r,v=Math.sin(S),C=Math.cos(S);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*v,h.y=e[w].y,h.z=e[w].x*C,o.push(h.x,h.y,h.z),f.x=y/t,f.y=w/(e.length-1),a.push(f.x,f.y);const R=l[3*w+0]*v,b=l[3*w+1],x=l[3*w+0]*C;u.push(R,b,x)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){const v=S+y*e.length,C=v,w=v+e.length,R=v+e.length+1,b=v+1;s.push(C,w,b),s.push(R,b,w)}this.setIndex(s),this.setAttribute("position",new Ye(o,3)),this.setAttribute("uv",new Ye(a,2)),this.setAttribute("normal",new Ye(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.points,e.segments,e.phiStart,e.phiLength)}}class sr extends ct{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function y(){const v=new z,C=new z;let w=0;const R=(t-e)/i;for(let b=0;b<=s;b++){const x=[],M=b/s,P=M*(t-e)+e;for(let O=0;O<=r;O++){const F=O/r,B=F*l+a,K=Math.sin(B),H=Math.cos(B);C.x=P*K,C.y=-M*i+m,C.z=P*H,h.push(C.x,C.y,C.z),v.set(K,R,H).normalize(),f.push(v.x,v.y,v.z),d.push(F,1-M),x.push(g++)}_.push(x)}for(let b=0;b<r;b++)for(let x=0;x<s;x++){const M=_[x][b],P=_[x+1][b],O=_[x+1][b+1],F=_[x][b+1];(e>0||x!==0)&&(c.push(M,P,F),w+=3),(t>0||x!==s-1)&&(c.push(P,O,F),w+=3)}u.addGroup(p,w,0),p+=w}function S(v){const C=g,w=new Ge,R=new z;let b=0;const x=v===!0?e:t,M=v===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const P=g;for(let O=0;O<=r;O++){const B=O/r*l+a,K=Math.cos(B),H=Math.sin(B);R.x=x*H,R.y=m*M,R.z=x*K,h.push(R.x,R.y,R.z),f.push(0,M,0),w.x=K*.5+.5,w.y=H*.5*M+.5,d.push(w.x,w.y),g++}for(let O=0;O<r;O++){const F=C+O,B=P+O;v===!0?c.push(B,B+1,F):c.push(B+1,B,F),b+=3}u.addGroup(p,b,v===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zs extends ct{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(s.slice(),3)),this.setAttribute("uv",new Ye(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new z,v=new z,C=new z;for(let w=0;w<t.length;w+=3)d(t[w+0],S),d(t[w+1],v),d(t[w+2],C),l(S,v,C,y)}function l(y,S,v,C){const w=C+1,R=[];for(let b=0;b<=w;b++){R[b]=[];const x=y.clone().lerp(v,b/w),M=S.clone().lerp(v,b/w),P=w-b;for(let O=0;O<=P;O++)O===0&&b===w?R[b][O]=x:R[b][O]=x.clone().lerp(M,O/P)}for(let b=0;b<w;b++)for(let x=0;x<2*(w-b)-1;x++){const M=Math.floor(x/2);x%2===0?(f(R[b][M+1]),f(R[b+1][M]),f(R[b][M])):(f(R[b][M+1]),f(R[b+1][M+1]),f(R[b+1][M]))}}function u(y){const S=new z;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(y),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function c(){const y=new z;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];const v=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;o.push(v,1-C)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const S=o[y+0],v=o[y+2],C=o[y+4],w=Math.max(S,v,C),R=Math.min(S,v,C);w>.9&&R<.1&&(S<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,S){const v=y*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const y=new z,S=new z,v=new z,C=new z,w=new Ge,R=new Ge,b=new Ge;for(let x=0,M=0;x<s.length;x+=9,M+=6){y.set(s[x+0],s[x+1],s[x+2]),S.set(s[x+3],s[x+4],s[x+5]),v.set(s[x+6],s[x+7],s[x+8]),w.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),C.copy(y).add(S).add(v).divideScalar(3);const P=m(C);_(w,M+0,y,P),_(R,M+2,S,P),_(b,M+4,v,P)}}function _(y,S,v,C){C<0&&y.x===1&&(o[S]=y.x-1),v.x===0&&v.z===0&&(o[S]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.vertices,e.indices,e.radius,e.details)}}class ks extends zs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ks(e.radius,e.detail)}}class Pi extends ct{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new z,f=new z,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],S=p/i;let v=0;p===0&&o===0?v=.5/t:p===i&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const w=C/t;h.x=-e*Math.cos(r+w*s)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-S),y.push(u++)}c.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const S=c[p][y+1],v=c[p][y],C=c[p+1][y],w=c[p+1][y+1];(p!==0||o>0)&&d.push(S,v,w),(p!==i-1||l<Math.PI)&&d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hs extends ct{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new z,h=new z,f=new z;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),c.x=e*Math.cos(_),c.y=e*Math.sin(_),f.subVectors(h,c).normalize(),l.push(f.x,f.y,f.z),u.push(g/r),u.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,y=(r+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ei extends Ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jc extends Ln{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.combine=ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gs extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Kc extends Gs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const So=new je,_l=new z,xl=new z;class $c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xl),t.updateMatrixWorld(),So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vl=new je,ki=new z,bo=new z;class u0 extends $c{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ki.setFromMatrixPosition(e.matrixWorld),i.position.copy(ki),bo.copy(i.position),bo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bo),i.updateMatrixWorld(),r.makeTranslation(-ki.x,-ki.y,-ki.z),vl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl)}}class bs extends Gs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new u0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class h0 extends $c{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zc extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new h0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Es}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Es);const f0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ko,AddEquation:wn,AddOperation:lc,AdditiveBlending:Zi,AgXToneMapping:dc,AlphaFormat:Xo,AlwaysCompare:Tc,AlwaysDepth:zr,AlwaysStencilFunc:Po,ArrayCamera:Wc,BackSide:gt,BasicDepthPacking:gc,Box3:In,BoxGeometry:tn,BufferAttribute:yt,BufferGeometry:ct,ByteType:Go,Camera:ra,CanvasTexture:rr,CineonToneMapping:hc,ClampToEdgeWrapping:An,Color:Oe,ColorManagement:$e,ConstantAlphaFactor:sc,ConstantColorFactor:ic,CubeCamera:Uc,CubeReflectionMapping:Kn,CubeRefractionMapping:$n,CubeTexture:sa,CubeUVReflectionMapping:tr,CullFaceBack:Ao,CullFaceFront:Hl,CullFaceNone:kl,CustomBlending:Vl,CustomToneMapping:fc,CylinderGeometry:sr,Data3DTexture:Pc,DataArrayTexture:Qo,DataTexture:ua,DepthFormat:qn,DepthStencilFormat:Jn,DepthTexture:la,DirectionalLight:Zc,DoubleSide:Rt,DstAlphaFactor:Jl,DstColorFactor:ec,EqualCompare:yc,EqualDepth:Hr,EquirectangularReflectionMapping:Xr,EquirectangularRefractionMapping:qr,Euler:Pt,EventDispatcher:ni,Float32BufferAttribute:Ye,FloatType:qt,FrontSide:gn,Frustum:Ns,GLSL3:Io,GreaterCompare:Sc,GreaterDepth:Vr,GreaterEqualCompare:Ec,GreaterEqualDepth:Gr,Group:Rn,HalfFloatType:Ri,HemisphereLight:Kc,IcosahedronGeometry:ks,ImageUtils:Rc,InstancedBufferAttribute:Ss,InstancedMesh:Os,IntType:As,KeepStencilOp:Hn,LatheGeometry:Bs,Layers:ta,LessCompare:Mc,LessDepth:kr,LessEqualCompare:Zo,LessEqualDepth:jn,Light:Gs,LinearFilter:Bt,LinearMipmapLinearFilter:Jt,LinearMipmapNearestFilter:Ur,LinearSRGBColorSpace:ti,LinearToneMapping:cc,LinearTransfer:nr,LuminanceAlphaFormat:jo,LuminanceFormat:Yo,Material:Ln,Matrix3:He,Matrix4:je,MaxEquation:Yl,Mesh:et,MeshBasicMaterial:Qn,MeshDepthMaterial:Hc,MeshDistanceMaterial:Gc,MeshLambertMaterial:jc,MeshStandardMaterial:ei,MinEquation:ql,MirroredRepeatWrapping:Yr,MixOperation:ac,MultiplyBlending:Co,MultiplyOperation:ws,NearestFilter:Ct,NearestMipmapLinearFilter:Vi,NearestMipmapNearestFilter:mc,NeutralToneMapping:pc,NeverCompare:vc,NeverDepth:Br,NoBlending:fn,NoColorSpace:hn,NoToneMapping:dn,NormalBlending:Xn,NotEqualCompare:bc,NotEqualDepth:Wr,Object3D:ut,ObjectSpaceNormalMap:xc,OneFactor:Kl,OneMinusConstantAlphaFactor:oc,OneMinusConstantColorFactor:rc,OneMinusDstAlphaFactor:Ql,OneMinusDstColorFactor:tc,OneMinusSrcAlphaFactor:Or,OneMinusSrcColorFactor:Zl,OrthographicCamera:oa,PCFShadowMap:Ts,PCFSoftShadowMap:Gl,PMREMGenerator:ys,PerspectiveCamera:At,Plane:Tn,PlaneGeometry:mn,PointLight:bs,Points:Yc,PointsMaterial:qc,PolyhedronGeometry:zs,Quaternion:jt,RED_GREEN_RGTC2_Format:xs,RED_RGTC1_Format:$o,REVISION:Es,RGBADepthPacking:_c,RGBAFormat:zt,RGBAIntegerFormat:Ds,RGBA_ASTC_10x10_Format:fs,RGBA_ASTC_10x5_Format:cs,RGBA_ASTC_10x6_Format:us,RGBA_ASTC_10x8_Format:hs,RGBA_ASTC_12x10_Format:ds,RGBA_ASTC_12x12_Format:ps,RGBA_ASTC_4x4_Format:ts,RGBA_ASTC_5x4_Format:ns,RGBA_ASTC_5x5_Format:is,RGBA_ASTC_6x5_Format:rs,RGBA_ASTC_6x6_Format:ss,RGBA_ASTC_8x5_Format:os,RGBA_ASTC_8x6_Format:as,RGBA_ASTC_8x8_Format:ls,RGBA_BPTC_Format:$i,RGBA_ETC2_EAC_Format:es,RGBA_PVRTC_2BPPV1_Format:Zr,RGBA_PVRTC_4BPPV1_Format:$r,RGBA_S3TC_DXT1_Format:Yi,RGBA_S3TC_DXT3_Format:ji,RGBA_S3TC_DXT5_Format:Ki,RGBFormat:qo,RGB_BPTC_SIGNED_Format:ms,RGB_BPTC_UNSIGNED_Format:gs,RGB_ETC1_Format:Jr,RGB_ETC2_Format:Qr,RGB_PVRTC_2BPPV1_Format:Kr,RGB_PVRTC_4BPPV1_Format:jr,RGB_S3TC_DXT1_Format:qi,RGFormat:Ko,RGIntegerFormat:Ls,Ray:ea,RedFormat:Ps,RedIntegerFormat:Is,ReinhardToneMapping:uc,RenderTarget:Cc,RepeatWrapping:Ti,ReverseSubtractEquation:Xl,SIGNED_RED_GREEN_RGTC2_Format:vs,SIGNED_RED_RGTC1_Format:_s,SRGBColorSpace:mt,SRGBTransfer:nt,Scene:ca,ShaderChunk:Xe,ShaderLib:Xt,ShaderMaterial:Ut,ShortType:Vo,Source:Jo,Sphere:ii,SphereGeometry:Pi,SrcAlphaFactor:Fr,SrcAlphaSaturateFactor:nc,SrcColorFactor:$l,StaticDrawUsage:Ji,SubtractEquation:Wl,SubtractiveBlending:Ro,TangentSpaceNormalMap:Us,Texture:_t,TorusGeometry:Hs,Triangle:Ot,UVMapping:Ho,Uint16BufferAttribute:na,Uint32BufferAttribute:ia,UniformsLib:Me,UniformsUtils:Dc,UnsignedByteType:en,UnsignedInt248Type:Zn,UnsignedInt5999Type:Wo,UnsignedIntType:Cn,UnsignedShort4444Type:Rs,UnsignedShort5551Type:Cs,UnsignedShortType:wi,VSMShadowMap:Zt,Vector2:Ge,Vector3:z,Vector4:it,WebGLCoordinateSystem:Qt,WebGLCubeRenderTarget:Nc,WebGLRenderTarget:Pn,WebGLRenderer:Xc,WebGLUtils:Vc,WebGPUCoordinateSystem:Qi,ZeroFactor:jl,createCanvasElement:Ac},Symbol.toStringTag,{value:"Module"}));class d0 extends ca{constructor(){super();const e=new tn;e.deleteAttribute("uv");const t=new ei({side:gt}),i=new ei,r=new bs(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new et(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new et(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new et(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new et(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const u=new et(e,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);const c=new et(e,i);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const h=new et(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new et(e,vi(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new et(e,vi(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new et(e,vi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new et(e,vi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new et(e,vi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new et(e,vi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function vi(n){const e=new Qn;return e.color.setScalar(n),e}function Yn(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function pt(n,e=4,t=4){const i=Yn(n),r=[];for(let h=0;h<t;h++){const f=e<<h,d=new Float32Array(f*f);for(let g=0;g<d.length;g++)d[g]=i();r.push({P:f,g:d})}const s=4096,o=new Map,a=new Map;function l(h,f,d){let g=h.get(f);if(g)return g;g=new Float64Array(r.length*3);for(let _=0;_<r.length;_++){const m=r[_].P,p=f*m,y=Math.floor(p),S=p-y,v=(y%m+m)%m,C=(v+1)%m,w=_*3;g[w]=d?v*m:v,g[w+1]=d?C*m:C,g[w+2]=S*S*(3-2*S)}return h.size>=s&&h.delete(h.keys().next().value),h.set(f,g),g}let u=0,c=.5;for(let h=0;h<r.length;h++)u+=c,c*=.5;return(h,f)=>{const d=l(o,h,!1),g=l(a,f,!0);let _=0,m=.5;for(let p=0;p<r.length;p++){const y=r[p].g,S=p*3,v=d[S],C=d[S+1],w=d[S+2],R=g[S],b=g[S+1],x=g[S+2],M=y[R+v],P=y[R+C],O=y[b+v],F=y[b+C];_+=m*(M+(P-M)*w+(O-M)*x+(M-P-O+F)*w*x),m*=.5}return _/u}}function Kt(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,t}function nn(n,e=!0,t=!0){const i=new rr(n);return e&&(i.colorSpace=mt),t&&(i.wrapS=i.wrapT=Ti),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=Jt,i}function Dn(n,e){const t=n.getContext("2d"),i=t.createImageData(n.width,n.height),r=i.data,s=[0,0,0];for(let o=0;o<n.height;o++)for(let a=0;a<n.width;a++){e(a/n.width,o/n.height,s,a,o);const l=(o*n.width+a)*4;r[l]=s[0],r[l+1]=s[1],r[l+2]=s[2],r[l+3]=255}return t.putImageData(i,0,0),t}const Yt=(n,e=0,t=255)=>n<e?e:n>t?t:n;function Eo(n,e,t,i={}){const r=i.size||512,s=Kt(r,r),o=pt(n,2,4),a=pt(n+7,8,3),l=pt(n+13,3,4),u=i.rings||9;return Dn(s,(c,h,f)=>{const d=o(c*.5,h)*3;let g=Math.sin((h*u+d)*Math.PI*2);g=Math.pow(Math.abs(g),.35);const _=a(c*.25,h*8),m=a(c*2,h*32%1);let p=.55*g+.3*_+.15*m;p=p*(.85+.3*l(c,h));for(let y=0;y<3;y++)f[y]=Yt(t[y]+(e[y]-t[y])*p)}),nn(s)}function p0(n){const t=Kt(1024,1024),i=Yn(n),r=8,s=[];for(let h=0;h<r;h++)s.push({off:i(),tone:.78+i()*.35,hue:i(),len:.45+i()*.3});const o=pt(n+3,2,4),a=pt(n+9,8,3),l=pt(n+11,3,4),u=[150,98,58],c=[78,46,24];return Dn(t,(h,f,d)=>{const g=Math.floor(f*r),_=s[g],m=f*r-g,p=(h+_.off)%1,y=Math.floor(p/_.len*2),S=p/_.len*2%1,v=_.tone*(y%2?.92:1.04)*(.96+.08*Math.sin(y*12.9+g)),C=o(h,f*.5+g*.13)*2.5;let w=Math.abs(Math.sin((m*3+C+y)*Math.PI*2));w=Math.pow(w,.4);const R=a(h*.5,f*4);let b=(.55*w+.45*R)*v;const x=l(h,f);b*=.9+.2*x;let M=Math.min(m,1-m)*64,P=Math.min(S,1-S)*260;const O=Math.min(1,M,P);for(let F=0;F<3;F++)d[F]=Yt((c[F]+(u[F]-c[F])*b)*(.25+.75*O)+(_.hue-.5)*(F===0?12:F===1?6:0))}),nn(t)}function Ml(n,e){const i=Kt(512,512),r=pt(n,4,5),s=pt(n+1,16,2);return Dn(i,(o,a,l)=>{const u=r(o,a),c=s(o,a),h=.88+.16*u+.05*c;l[0]=Yt(e[0]*h),l[1]=Yt(e[1]*h),l[2]=Yt(e[2]*(h-.02))}),nn(i)}function m0(n){const t=Kt(512,512),i=pt(n,6,5),r=pt(n+4,24,2);return Dn(t,(s,o,a)=>{const l=Math.floor(o*4),u=(s+l%2*.5)%1,c=o*4-l,h=u*2-Math.floor(u*2),f=Math.min(1,Math.min(c,1-c)*40,Math.min(h,1-h)*60),d=(.8+.25*i(s,o)+.08*r(s,o))*(.55+.45*f);a[0]=Yt(196*d),a[1]=Yt(178*d),a[2]=Yt(150*d)}),nn(t)}function yl(n,e){const i=Kt(512,512),r=pt(n,64,2),s=pt(n+2,8,4),o=pt(n+5,3,4);return Dn(i,(a,l,u)=>{const c=r(a,l),f=Math.abs(s(a,l)-.5)<.015?.7:1,d=Math.max(0,o(a,l)-.52)*3.2,g=(.82+.3*c)*f;for(let _=0;_<3;_++){const m=e[_]+(_===0?70:_===1?52:36);u[_]=Yt((e[_]*(1-d)+m*d)*g)}}),nn(i)}function To(n,e,t){const r=Kt(256,256),s=pt(n,8,3);return Dn(r,(o,a,l,u,c)=>{const h=((u+c)%4<2?1:.92)*(u%2?1:.96),f=t&&Math.sin(o*Math.PI*2*6)>.6?.82:1,d=h*f*(.9+.15*s(o,a));for(let g=0;g<3;g++)l[g]=Yt(e[g]*d)}),nn(r)}function g0(n){const i=Kt(512,768),r=i.getContext("2d");r.fillStyle="#7a2a22",r.fillRect(0,0,512,768);const s=(h,f,d)=>{r.strokeStyle=d,r.lineWidth=f,r.strokeRect(h,h,512-h*2,768-h*2)};s(14,22,"#2a2440"),s(34,6,"#c9a46a"),s(52,26,"#3c4a5c"),s(70,5,"#c9a46a"),r.fillStyle="#d2b07a";for(let h=0;h<26;h++){const f=h/26,d=[[f*512,52],[460,f*768],[512-f*512,716],[52,768-f*768]];for(const[g,_]of d)r.save(),r.translate(g,_),r.rotate(Math.PI/4),r.fillRect(-5,-5,10,10),r.restore()}for(let h=110;h<668;h+=48)for(let f=110;f<412;f+=48)r.fillStyle=(f+h)%96===0?"#2f3a52":"#a8742f",r.save(),r.translate(f,h),r.rotate(Math.PI/4),r.fillRect(-7,-7,14,14),r.restore(),r.fillStyle="#e0c590",r.fillRect(f-2,h-2,4,4);r.save(),r.translate(512/2,768/2);const o=[[150,"#2a2440"],[130,"#c9a46a"],[118,"#3c4a5c"],[86,"#8e3a2a"],[60,"#d8bd85"],[36,"#2a2440"]];for(const[h,f]of o)r.fillStyle=f,r.beginPath(),r.ellipse(0,0,h*.75,h,0,0,Math.PI*2),r.fill();r.restore();const a=r.getImageData(0,0,512,768),l=pt(n+3,4,4),u=pt(n+5,64,1);for(let h=0;h<768;h++)for(let f=0;f<512;f++){const d=(h*512+f)*4,g=.78+.28*l(f/512,h/768)+.08*u(f/512,h/768),_=Math.max(0,l(f/512+.3,h/768)-.58)*1.6;for(let m=0;m<3;m++)a.data[d+m]=Yt(a.data[d+m]*g*(1-_)+150*_)}return r.putImageData(a,0,0),nn(i,!0,!1)}function _0(n){const i=Kt(512,256),r=i.getContext("2d"),s=Yn(n),o=pt(n,16,3);Dn(i,(u,c,h)=>{const f=200+40*o(u,c);h[0]=h[1]=h[2]=f});const a="#d9a94a",l=32;for(let u=0;u<8;u++){const c=u*l;r.save(),r.beginPath(),r.rect(c,0,l,256),r.clip();const h=r.createLinearGradient(c,0,c+l,0);if(h.addColorStop(0,"rgba(0,0,0,0.35)"),h.addColorStop(.2,"rgba(0,0,0,0)"),h.addColorStop(.8,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,0.35)"),r.fillStyle=h,r.fillRect(c,0,l,256),r.fillStyle=a,u===0&&(r.fillRect(c,14,l,2),r.fillRect(c,240,l,2)),u===1){for(const f of[40,90,140,190])r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(c,f,l,6),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(c,f,l,2);r.fillStyle="#2a1a14",r.fillRect(c+3,52,l-6,30),r.fillStyle=a;for(let f=0;f<3;f++)r.fillRect(c+7,60+f*7,l-14-s()*6,2)}if(u===2){for(let f=0;f<6;f++)r.fillRect(c+8,50+f*9,l-16-s()*8,3);r.fillRect(c,226,l,6)}if(u===3){r.fillStyle="rgba(0,0,0,0.5)",r.fillRect(c,0,l,34),r.fillRect(c,222,l,34),r.fillStyle=a,r.fillRect(c,34,l,2),r.fillRect(c,220,l,2);for(let f=0;f<4;f++)r.fillRect(c+9,80+f*8,l-18,2)}if(u===4){r.fillStyle="rgba(255,255,255,0.25)",r.fillRect(c,0,l,256),r.fillStyle="rgba(20,20,20,0.75)";for(let f=0;f<10;f++)r.fillRect(c+12,40+f*12,3+s()*4,7)}if(u===5){for(const f of[8,16,24,230,238,246])r.fillRect(c,f,l,2);for(let f=0;f<5;f++)r.beginPath(),r.arc(c+l/2,60+f*30,3,0,Math.PI*2),r.fill();r.fillStyle="#1d1d1d",r.fillRect(c+4,34,l-8,18),r.fillStyle=a,r.fillRect(c+8,41,l-16,3)}if(u===6){r.fillStyle="rgba(255,255,255,0.3)";for(let f=0;f<40;f++)r.fillRect(c+s()*l,s()<.5?s()*30:256-s()*30,2+s()*4,1+s()*2);r.fillStyle=a,r.fillRect(c+10,70,l-20,3)}u===7&&(r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(c,20,l,10),r.fillRect(c,226,l,10),r.fillStyle="rgba(240,235,220,1)",r.fillRect(c+5,60,l-10,34),r.fillStyle="rgba(40,30,20,0.8)",r.fillRect(c+8,70,l-16,2),r.fillRect(c+8,78,l-18,2)),r.restore()}for(let u=256;u<384;u++){const c=215+(Math.sin(u*2.7)*.5+.5)*30*s();r.fillStyle=`rgb(${c},${c},${c-4})`,r.fillRect(u,0,1,256)}return nn(i,!0,!1)}function x0(n){const t=Kt(512,512),i=t.getContext("2d"),r=Yn(n);return[["#d8b27a","#8a6a4a","#4b5a3a","#2e3a2a"],["#9fb3c0","#6a7a6a","#3e4a3a","#22281e"],["#e8c28a","#b07a4a","#5a3a2a","#2a1e18"],["#7a8aa0","#5a6058","#3a3a30","#1e1e18"]].forEach((o,a)=>{const l=a%2*256,u=Math.floor(a/2)*256,c=i.createLinearGradient(0,u,0,u+256);c.addColorStop(0,o[0]),c.addColorStop(.55,o[1]),c.addColorStop(1,o[3]),i.fillStyle=c,i.fillRect(l,u,256,256);for(let f=0;f<3;f++){i.fillStyle=o[1+f],i.beginPath(),i.moveTo(l,u+256);const d=120+f*45;for(let g=0;g<=16;g++)i.lineTo(l+g*16,u+d+Math.sin(g*.7+f*2+a)*18+r()*10);i.lineTo(l+256,u+256),i.fill()}a===2&&(i.fillStyle="rgba(255,230,170,0.8)",i.beginPath(),i.arc(l+180,u+90,18,0,7),i.fill());const h=i.createRadialGradient(l+128,u+128,40,l+128,u+128,190);h.addColorStop(0,"rgba(60,40,10,0)"),h.addColorStop(1,"rgba(40,25,5,0.55)"),i.fillStyle=h,i.fillRect(l,u,256,256)}),nn(t,!0,!1)}function v0(n){const i=Kt(512,256),r=pt(n,4,5);return Dn(i,(s,o,a)=>{const l=r(s,o*.5+.2)>.53,u=Math.abs(o-.5),c=Math.abs(s*24%1)<.03||Math.abs(o*12%1)<.04?.82:1;l?(a[0]=196*c,a[1]=168*c,a[2]=112*c):(a[0]=(150-u*60)*c,a[1]=(140-u*40)*c,a[2]=(100-u*20)*c)}),nn(i,!0,!1)}function M0(){const n=Kt(64,64),e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new rr(n)}function ha(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new ct;let u=0;for(let c=0;c<n.length;++c){const h=n[c];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,d,c),u+=d}}if(t){let c=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+c);c+=n[f].attributes.position.count}l.setIndex(h)}for(const c in s){const h=Sl(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[c].length;++_)d.push(o[c][_][f]);const g=Sl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Sl(n){let e,t,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const o=new e(s),a=new yt(o,t,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const h=l/t;for(let f=0,d=c.count;f<d;f++)for(let g=0;g<t;g++){const _=c.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(c.array,l);l+=c.count*t}return r!==void 0&&(a.gpuType=r),a}const bl=new Pt,El=new jt;function No(n,e,t,i,r){const s=new tn(n,e,t),o=s.attributes.uv,a=r(),l=r(),u=[[t,e],[t,e],[n,t],[n,t],[n,e],[n,e]];for(let c=0;c<6;c++){const[h,f]=u[c],d=f>h;for(let g=0;g<4;g++){const _=c*4+g;let m=o.getX(_)*h,p=o.getY(_)*f;if(d){const y=m;m=p,p=y}o.setXY(_,m/i+a,p/i+l)}}return s}class Fo{constructor(e){this.rand=e,this.batches=new Map,this.solids=[]}add(e,t){this.batches.has(e)||this.batches.set(e,[]),this.batches.get(e).push(t)}frame(e,t,i,r=0){return new Vs(this,new je().makeRotationY(r).setPosition(e,t,i))}finish(e){for(const[t,i]of this.batches){for(const o of i)for(const a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);const r=ha(i,!1),s=new et(r,t);s.castShadow=!t.userData.noShadow,s.receiveShadow=!0,s.matrixAutoUpdate=!1,e.add(s);for(const o of i)o.dispose()}this.batches.clear()}}class Vs{constructor(e,t){this.b=e,this.m=t}sub(e,t,i,r=0){return new Vs(this.b,this.m.clone().multiply(new je().makeRotationY(r).setPosition(e,t,i)))}local(e,t,i,r=0,s=0,o=0){return bl.set(r,s,o),El.setFromEuler(bl),new je().compose(new z(e,t,i),El,new z(1,1,1)).premultiply(this.m)}geo(e,t,i,r,s,o,a,l){t.applyMatrix4(this.local(i,r,s,o,a,l)),this.b.add(e,t)}box(e,t,i,r,s,o,a,l=0,u=0,c=0){this.geo(e,No(t,i,r,e.userData.ts||1,this.b.rand),s,o,a,l,u,c)}cyl(e,t,i,r,s,o,a,l=12,u=0,c=0,h=0,f=!1,d,g){const _=new sr(t,i,r,l,1,f,d||0,g||Math.PI*2),m=e.userData.ts||1,p=_.attributes.uv,y=Math.PI*2*Math.max(t,i);for(let S=0;S<p.count;S++)p.setXY(S,p.getY(S)*r/m,p.getX(S)*y/m);this.geo(e,_,s,o,a,u,c,h)}sphere(e,t,i,r,s,o=1,a=1,l=1,u=12,c=8){const h=new Pi(t,u,c);h.scale(o,a,l),this.geo(e,h,i,r,s)}torus(e,t,i,r,s,o,a=0,l=0,u=0,c=32){this.geo(e,new Hs(t,i,6,c),r,s,o,a,l,u)}plane(e,t,i,r,s,o,a=0,l=0,u=0,c=null){const h=new mn(t,i);if(c){const f=h.attributes.uv;for(let d=0;d<f.count;d++)f.setXY(d,c[0]+f.getX(d)*c[2],c[1]+f.getY(d)*c[3])}this.geo(e,h,r,s,o,a,l,u)}solid(e,t,i,r,s,o){const a=this.local(r,s,o),l=new z,u=new z(1/0,1/0,1/0),c=new z(-1/0,-1/0,-1/0);for(let h=0;h<8;h++)l.set((h&1?.5:-.5)*e,(h&2?.5:-.5)*t,(h&4?.5:-.5)*i).applyMatrix4(a),u.min(l),c.max(l);this.b.solids.push({x0:u.x,x1:c.x,y0:u.y,y1:c.y,z0:u.z,z1:c.z})}sbox(e,t,i,r,s,o,a){this.box(e,t,i,r,s,o,a),this.solid(t,i,r,s,o,a)}}function y0(){const n=(c,h)=>{const f=new ei(c);return f.userData.ts=h||1,f},e=Eo(1,[118,70,38],[48,26,12],{rings:16}),t=Eo(2,[184,124,70],[104,62,30],{rings:15}),i=Eo(3,[84,50,30],[34,18,10],{rings:11}),r=p0(4),s=Ml(5,[232,214,184]),o=Ml(6,[150,158,124]),a=yl(7,[100,34,22]),l=yl(8,[92,56,30]),u=m0(9);return{walnut:n({map:e,bumpMap:e,bumpScale:.6,roughness:.6,color:16777215},1.3),oak:n({map:t,bumpMap:t,bumpScale:.5,roughness:.48},1.6),dark:n({map:i,bumpMap:i,bumpScale:.5,roughness:.55},1.2),floor:n({map:r,bumpMap:r,bumpScale:1.2,roughness:.42},1.9),plaster:n({map:s,bumpMap:s,bumpScale:1.5,roughness:.94},3),sage:n({map:o,bumpMap:o,bumpScale:1.5,roughness:.92},2.5),ceil:n({map:s,roughness:.95,color:15919320},4),leather:n({map:a,bumpMap:a,bumpScale:1.2,roughness:.5},.9),leather2:n({map:l,bumpMap:l,bumpScale:1.2,roughness:.55},.9),stone:n({map:u,bumpMap:u,bumpScale:2,roughness:.88},1.4),iron:n({color:1841946,metalness:.75,roughness:.48}),brass:n({color:11831880,metalness:1,roughness:.32}),gilt:n({color:10122294,metalness:.8,roughness:.42}),soot:n({color:920587,roughness:1}),cushion:n({map:To(10,[150,128,92],!0),roughness:.95},.5),cushion2:n({map:To(11,[70,88,70],!1),roughness:.95},.4),runner:n({map:To(12,[118,34,28],!0),roughness:.95},.6),paper:n({color:15129280,roughness:.9}),ceramic:n({color:15525590,roughness:.25}),terracotta:n({color:10246714,roughness:.85}),plant:n({color:4086828,roughness:.75,side:Rt}),greenGlass:n({color:1993264,emissive:3971642,emissiveIntensity:.55,roughness:.15,metalness:.1,side:Rt}),shade:n({color:15390376,emissive:16757865,emissiveIntensity:.9,roughness:.9,side:Rt}),flame:Object.assign(new Qn({color:new Oe(2.4,1.6,.7)}),{userData:{noShadow:!0}}),ember:Object.assign(new Qn({color:new Oe(2.2,.7,.2)}),{userData:{noShadow:!0}}),rug:n({map:g0(13),roughness:1}),painting:n({map:x0(14),roughness:.55}),globe:n({map:v0(15),roughness:.4})}}const Oo={H:10.5,GY:4.2},ve=.012;function S0(n,e,t,i=null){const r=new Fo(t),s=r.frame(0,0,0,0),o=Oo.H,a=Oo.GY,l=[],u=[],c=[],h=t;function f(T,L,D,U,V,ce,me,Te,N){const Be=[L,D];for(const pe of Te)Be.push(pe[0],pe[1]);const Ce=[...new Set(Be)].sort((pe,he)=>pe-he);for(let pe=0;pe<Ce.length-1;pe++){const he=Ce[pe],we=Ce[pe+1],_e=Te.filter(X=>X[0]<=he&&X[1]>=we).sort((X,ee)=>X[2]-ee[2]);let I=ce;const E=(X,ee)=>{ee-X<.001||(T==="x"?s.sbox(N,V-U,ee-X,we-he,(U+V)/2,(X+ee)/2,(he+we)/2):s.sbox(N,we-he,ee-X,V-U,(he+we)/2,(X+ee)/2,(U+V)/2))};for(const X of _e)E(I,X[2]),I=X[3];E(I,me)}}s.sbox(n.floor,14,.3,19,0,-.15,-.5),s.box(n.ceil,15,.3,20,0,o+.15,-.5),f("z",-7.5,7.5,-10.5,-10,0,o,[],n.plaster);function d(T,L,D,U,V,ce,me,Te,N=!1){if(!i){N?s.sbox(T,L,D,U,V,ce,me):s.box(T,L,D,U,V,ce,me);return}const Be=[t(),t()];for(const[Ce,pe,he,we,_e,I]of Te){let E=0;s.geo(T,No(Ce,pe,he,T.userData.ts||1,()=>Be[E++]),we,_e,I),N&&s.solid(Ce,pe,he,we,_e,I)}}const g=i||{z0:7.07,z1:8.43,height:2.46};d(n.plaster,.5,o,20,7.25,o/2,-.5,[[.5,o,g.z0+10.5,7.25,o/2,(g.z0-10.5)/2],[.5,o-g.height,g.z1-g.z0,7.25,(o+g.height)/2,(g.z0+g.z1)/2],[.5,o,9.5-g.z1,7.25,o/2,(9.5+g.z1)/2]],!0),f("z",-7.5,7.5,9,9.5,0,o,[[-5,-3,4.5,8.3],[2.6,4.6,4.5,8.3]],n.plaster),f("x",-10.5,9.5,-7.5,-7,0,o,[[-5.6,-3.6,.9,7.2],[-1.6,.4,.9,7.2],[2.4,7.4,0,3.4],[3.2,6.6,5,8]],n.plaster),s.sbox(n.floor,4.5,.3,5,-9.25,-.15,4.9),s.box(n.ceil,5,.3,6,-9.5,3.75,4.9),s.box(n.plaster,5.4,.3,6.6,-9.75,4.05,4.9),f("z",-12,-7.5,1.9,2.4,0,3.6,[[-10.4,-8.6,.9,2.9]],n.sage),f("z",-12,-7.5,7.4,7.9,0,3.6,[[-10.4,-8.6,.9,2.9]],n.sage),f("x",1.9,7.9,-12,-11.5,0,3.6,[[2.9,6.9,.6,3]],n.sage);const p=-7+ve;for(const T of[3.2,4.9,6.6])s.box(n.dark,4-2*ve,.18,.14,-9.5,3.6-.09-ve,T);s.box(n.oak,.3,.3,5.2,p+.15,3.45,4.9);function y(T,L,D,U,V=!0){const ce=[t(),t()];function me(pe,he,we){let _e=0;return No(pe,.05,he,n.oak.userData.ts,()=>ce[_e++]).translate(0,.025+ve,we)}const Te=[me(L+.3,.14,.07+ve),me(L-2*ve,U,-U/2+ve)];T.geo(n.oak,ha(Te,!1),0,0,0);for(const pe of Te)pe.dispose();T.box(n.oak,.12+ve,D+.12,.06,-L/2-.06+ve/2,D/2,.03+ve),T.box(n.oak,.12+ve,D+.12,.06,L/2+.06-ve/2,D/2,.03+ve),T.box(n.oak,L+.36,.14+ve,.07,0,D+.07-ve/2,.035+ve);const N=-U*.55;T.box(n.dark,L-2*ve,.07,.07,0,.06,N),T.box(n.dark,L-2*ve,.07,.07,0,D-.035-ve,N),T.box(n.dark,.07,D-2*ve,.07,-L/2+.035+ve,D/2,N),T.box(n.dark,.07,D-2*ve,.07,L/2-.035-ve,D/2,N);const Be=Math.max(1,Math.round(L/.62));for(let pe=1;pe<Be;pe++)T.box(n.iron,.03,D,.035,-L/2+L*pe/Be,D/2,N);const Ce=Math.max(1,Math.round(D/.55));for(let pe=1;pe<Ce;pe++)T.box(pe%4===0?n.dark:n.iron,L-2*ve,pe%4===0?.06:.025,.035,0,D*pe/Ce,N);if(V){const pe=[];for(const[he,we]of[[-L/2,0],[L/2,0],[L/2,D],[-L/2,D]])pe.push(new z(he,we,N).applyMatrix4(T.m));c.push(pe)}}y(s.sub(-7,.9,-4.6,Math.PI/2),2,6.3,.5),y(s.sub(-7,.9,-.6,Math.PI/2),2,6.3,.5),y(s.sub(-7,5,4.9,Math.PI/2),3.4,3,.5),y(s.sub(-11.5,.6,4.9,Math.PI/2),4,2.4,.5),y(s.sub(-9.5,.9,7.4,Math.PI),1.8,2,.5),y(s.sub(-9.5,.9,2.4,0),1.8,2,.5,!1),y(s.sub(-4,4.5,9,Math.PI),2,3.8,.5),y(s.sub(3.6,4.5,9,Math.PI),2,3.8,.5);for(const T of[2.33,7.47])s.box(n.oak,.14,3.5+ve,.6,-7+.07+ve,(3.5-ve)/2,T);for(const T of[-4.6,-.6])s.box(n.dark,.04,.85,2,-6.98+ve,.45,T);function S(T,L,D,U,V,ce,me){const Te=me-U/2,N=me+U/2;d(T,L,D,U,V,ce,me,[[L,D,g.z0-Te,V,ce,(Te+g.z0)/2],[L,D,N-g.z1,V,ce,(g.z1+N)/2]])}S(n.dark,.05,1,2.2-ve,7-.025-ve,.5,7.85-ve/2),S(n.oak,.08,.06,2.3-ve,6.96-ve,1.02,7.85-ve/2);for(const[T,L,D,U]of[[14,.3,0,-9.85],[14,.3,0,8.85],[.3,19,-6.85,-.5],[.3,19,6.85,-.5]]){const V=D&&D-Math.sign(D)*ve,ce=U===-.5?U:U-Math.sign(U)*ve;s.box(n.oak,T>1?T-2*ve:T,.22,L>1?L-2*ve:L,V,o-.11-ve,ce),s.box(n.dark,T>1?T-2*ve:T+.1,.08,L>1?L-2*ve:L+.12,V-(D?Math.sign(D)*.05:0),o-.26,ce-(U===-.5?0:Math.sign(U)*.06))}s.box(n.oak,.12,.1,19-2*ve,-6.94+ve,8.4,-.5),s.box(n.oak,14-2*ve,.1,.12,0,8.4,8.94-ve),s.box(n.oak,.12,.1,19-2*ve,6.94-ve,8.4,-.5);for(const T of[-4.6,-.6]){s.cyl(n.iron,.02,.02,2.9,-6.82,7.55,T,8,Math.PI/2,0,0);for(const L of[-1,1]){s.sphere(n.iron,.045,-6.82,7.55,T+L*1.45),s.box(n.iron,.12,.03,.03,-6.9,7.55,T+L*1.3);for(let D=0;D<4;D++)s.box(n.cushion2,.05+D%2*.03,4.85-D*.12,.05,-6.86+D%2*.03,5.08+D*.06,T+L*(1.04+D*.035),0,0,0);s.cyl(n.brass,.012,.012,.2,-6.8,3.4,T+L*1.1,6,Math.PI/2,0,0)}}for(const T of[-8.2,-4.6,-1,2.6,6.2]){s.box(n.dark,14-2*ve,.38,.3,0,9.85,T),s.box(n.dark,.24,.6,.24,0,10.2-ve,T);for(const L of[-1,1]){const D=(.2*Math.cos(.62)+1.4*Math.sin(.62))/2;s.box(n.dark,.2,1.4,.22,L*(7-ve-D),9.2,T,0,0,L*.62),s.box(n.iron,.36,.42,.32,L*3.4,9.85,T),s.box(n.dark,.25,.7,.32,L*(7-.125-ve),9.2,T)}}for(const T of[-3.4,3.4])s.box(n.dark,.2,.24,19-2*ve,T,10.25,-.5);s.sbox(n.floor,14,.35,3,0,a-.175,-8.5),s.sbox(n.floor,2.8,.35,5.8,5.6,a-.175,-4.1);for(let T=-6.6;T<4.2;T+=.9)s.box(n.dark,.12,.24,3-ve,T,a-.47,-8.5+ve/2);for(let T=-6.6;T<-1.2;T+=.9)s.box(n.dark,2.8-ve,.24,.12,5.6-ve/2,a-.47,T);s.box(n.oak,11.31-ve,.55,.24,-1.345+ve/2,a-.27,-6.9),s.box(n.oak,.24,.55,5.9,4.3,a-.27,-4.15),s.box(n.dark,11.31-ve,.06,.3,-1.345+ve/2,a-.02,-6.9),s.box(n.dark,.3,.06,5.9,4.3,a-.02,-4.15);const v=[[-4.6,-6.9,"x"],[-1.4,-6.9,"x"],[1.8,-6.9,"x"],[4.3,-6.9,"c"],[4.3,-4.1,"z"],[4.3,-1.35,"z"]];for(const[T,L,D]of v){s.cyl(n.iron,.07,.085,a-.55,T,(a-.55)/2,L,14),s.box(n.iron,.24,.16,.24,T,.08,L),s.box(n.iron,.26,.1,.26,T,a-.6,L),s.cyl(n.iron,.11,.07,.18,T,a-.75,L,14),s.solid(.26,a-.5,.26,T,(a-.5)/2,L);const U=D==="x"?[[1,0],[-1,0]]:D==="z"?[[0,1],[0,-1]]:[[-1,0],[0,1]];for(const[V,ce]of U)s.box(n.iron,.04,.9,.04,T+V*.3,a-.88,L+ce*.3,ce*.72,0,-V*.72),s.torus(n.iron,.12,.012,T+V*.22,a-.75,L+ce*.22,0,V?0:Math.PI/2,0,16)}function C(T,L,D,U,V,ce=2.4,me){const Te=Math.hypot(D-T,U-L),N=Math.atan2(-(U-L),D-T),Be=s.sub(T,V,L,N);Be.box(n.oak,Te+.06,.07,.13,Te/2,1.02,0),Be.box(n.iron,Te,.04,.05,Te/2,.97,0),Be.box(n.iron,Te,.04,.05,Te/2,.1,0);const Ce=Math.round((me||Te)/.13);for(let _e=1;_e<Ce;_e++){const I=Te*_e/Ce;Be.box(n.iron,.02,.86,.02,I,.53,0),_e%3===0&&Be.sphere(n.iron,.025,I,.45,0)}const pe=Math.max(1,Math.round(Te/ce));for(let _e=0;_e<=pe;_e++){const I=Te*_e/pe;Be.box(n.oak,.11,1.12,.11,I,.56,0),Be.sphere(n.oak,.065,I,1.16,0,1,.8,1)}const he=me?s.sub(-7,V,L,N):Be,we=me||Te;he.solid(we,1.1,.16,we/2,.55,0)}C(-7+.065+ve,-6.92,4.3,-6.92,a,2.4,11.3),C(4.3,-6.92,4.3,-1.25,a,1.9),s.box(n.oak,.08,.3,3-ve,-6.96+ve,a+.1,-8.5+ve/2);const w=a/24,R=.3,b=4.2,x=7,M=6.7,P=(b+x)/2,O=x-b,F=[];for(let T=1;T<=11;T++)F.push({y:T*w,z0:M-T*R,z1:M-(T-1)*R});F.push({y:12*w,z0:2.1,z1:3.4,landing:!0});for(let T=13;T<=23;T++)F.push({y:T*w,z0:2.1-(T-12)*R,z1:2.1-(T-13)*R});for(const T of F){const L=T.z1-T.z0,D=(T.z0+T.z1)/2;s.box(n.dark,O-ve,T.y-.045,L,P-ve/2,(T.y-.045)/2,D),s.box(n.oak,O+.03-ve,.045,L+.035,P-.015-ve/2,T.y-.0225,D+.0175),s.solid(O,T.y,L,P,T.y/2,D),s.box(n.runner,1.5,.012,L,P+.15,T.y+.006,D+.01),s.box(n.runner,1.5,w-.03,.012,P+.15,T.y-w/2-.02,T.z1+.007),s.cyl(n.brass,.008,.008,1.62,P+.15,T.y-w+.012,T.z1+.02,6,0,0,Math.PI/2);const U=T.landing?9:2;for(let V=0;V<U;V++){const ce=T.z0+L*(V+.5)/U;s.box(n.iron,.022,.9,.022,b+.07,T.y+.45,ce)}s.solid(.16,1.05,L,b+.07,T.y+.52,D)}const B=Math.atan(w/R),K=[[M,0,M-11*R,11*w],[2.1,12*w,-1.2,23*w]];for(const[T,L,D,U]of K){const V=Math.hypot(T-D,U-L),ce=(T+D)/2,me=(L+U)/2;s.box(n.oak,.13,.07,V,b+.07,me+1,ce,B,0,0),s.box(n.iron,.05,.04,V,b+.07,me+.95,ce,B,0,0),s.box(n.oak,.07,.32,V+.2,b-.02,me+.02,ce-.05,B,0,0)}s.box(n.oak,.13,.07,1.3,b+.07,12*w+1,2.75);for(const[T,L]of[[M-.12,0],[3.4,11*w],[2.1,12*w],[-1.25,a]])s.box(n.oak,.16,1.25,.16,b+.07,L+.62,T),s.box(n.oak,.2,.06,.2,b+.07,L+1.26,T),s.sphere(n.oak,.08,b+.07,L+1.35,T);s.solid(.2,1.25,.2,b+.07,.62,M-.12);function H(T,L,D,U,V={}){const ce=Math.max(1,Math.round(L/(V.bay||.92))),me=L/ce,Te=V.spacing||.38,N=.14,Be=Math.floor((D-N-.12)/Te),Ce=(D-N-.12)/Be;T.box(n.dark,L,N,U-.03,L/2,N/2,-U/2-.015),T.box(n.walnut,L,D,.02,L/2,D/2,-U+.01);function pe(he,we,_e,I,E,X){const ee=V.wallLeft?ve:-we/2,se=V.wallRight?L-ve:L+we/2;T.box(he,se-ee,_e,I,(ee+se)/2,E,X)}pe(n.walnut,.06,.07,U+.05,D-.035,-U/2+.025),pe(n.walnut,.12,.05,U+.09,D+.025,-U/2+.045),V.noCornice||pe(n.dark,.02,.1,.03,D-.12,.01);for(let he=0;he<=ce;he++){const we=Math.min(L-.02,Math.max(.02,he*me));T.box(n.walnut,.04,D-.07,U,we,(D-.07)/2,-U/2);const _e=he===0&&V.wallLeft?.03+ve:he===ce&&V.wallRight?L-.03-ve:we;T.box(n.dark,.06,D-.2,.015,_e,D/2-.05,.005)}for(let he=0;he<ce;he++){const we=he*me+.02,_e=(he+1)*me-.02,I=(h()-.5)*.04;for(let E=0;E<=Be;E++){const X=N+E*Ce+(E>0&&E<Be?I:0);if(E>0&&E<Be+1&&T.box(n.walnut,_e-we,.026,U-.025,(we+_e)/2,X-.013,-U/2-.0125),E<Be){const se=N+(E+1)*Ce+(E+1<Be?I:0)-X-.026-.005,k=V.sparse?.8:.97;h()<k&&l.push({m:T.local(we+.005,X,-.012),len:_e-we-.01,clear:se,d:U-.04})}}}V.solid!==!1&&T.solid(L,D+.05,U,L/2,D/2,-U/2)}H(s.sub(-7,0,-9.6,0),14,3.45,.4,{wallLeft:!0,wallRight:!0}),H(s.sub(-6.6,0,-5.75,Math.PI/2),3.85,3.45,.4),H(s.sub(6.6,0,-9.6,-Math.PI/2),8.4,3.45,.4,{spacing:.4}),H(s.sub(-6.6,0,-1.7,Math.PI/2),1.8,2.4,.36,{spacing:.36}),H(s.sub(-6.6,0,2.3,Math.PI/2),1.8,2.4,.36,{spacing:.42}),H(s.sub(-1.4,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.4,wallRight:!0}),H(s.sub(7,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.37,wallLeft:!0}),H(s.sub(-7,a,-9.6,0),14,3.8,.4,{spacing:.4,wallLeft:!0,wallRight:!0}),H(s.sub(-6.6,a,-7,Math.PI/2),2.6,3.8,.4,{spacing:.4}),H(s.sub(6.6,a,-9.6,-Math.PI/2),8.4,3.8,.4,{spacing:.39});for(const T of[-5,-2.4]){H(s.sub(-4.3,0,T+.3,0),4,2.25,.3,{spacing:.36,solid:!1}),H(s.sub(-.3,0,T-.3,Math.PI),4,2.25,.3,{spacing:.36,solid:!1}),s.solid(4.1,2.3,.62,-2.3,1.15,T);for(const L of[-4.33,-.27])s.box(n.oak,.06,2.3,.66,L,1.15,T);s.box(n.oak,4.14,.05,.7,-2.3,2.3,T)}H(s.sub(-10.6,0,2.75,0),2.2,.85,.35,{bay:.75,noCornice:!0}),H(s.sub(-8.4,0,7.05,Math.PI),2.2,.85,.35,{bay:.75,noCornice:!0});function Y(T,L,D){s.cyl(n.iron,.016,.016,13.6,0,T+D-.15,-9.47,8,0,0,Math.PI/2);for(let N=-6.4;N<=6.4;N+=2.13)s.box(n.iron,.03,.03,.14,N,T+D-.15,-9.53);const U=-9.45,V=-8.35,ce=Math.hypot(V-U,D),me=-Math.atan((V-U)/D);for(const N of[-.22,.22])s.box(n.oak,.05,ce,.08,L+N,T+D/2,(U+V)/2,me,0,0);const Te=Math.floor(ce/.28);for(let N=1;N<Te;N++){const Be=N/Te;s.cyl(n.iron,.014,.014,.44,L,T+Be*D,V+(U-V)*Be,8,0,0,Math.PI/2)}for(const N of[-.22,.22])s.cyl(n.iron,.035,.035,.04,L+N,T+.035,V,10,0,0,Math.PI/2),s.box(n.iron,.02,.14,.02,L+N,T+D-.08,U-.02);s.solid(.6,1.2,.45,L,T+.6,V-.15)}Y(0,-2.6,3.3),Y(a,2.2,3.4);function j(T,L,D=.9,U=!0){const V=D,ce=.86;T.box(L,V,.3,ce,0,.27,0),T.box(L,V-.3,.13,ce-.24,0,.48,.06);for(const Te of[-1,1])T.box(L,.16,.36,ce-.05,Te*(V/2-.08),.6,.02),T.cyl(L,.095,.095,ce-.02,Te*(V/2-.07),.78,.03,12,Math.PI/2,0,0),T.cyl(n.dark,.03,.022,.12,Te*(V/2-.07),.06,ce/2-.08,8),T.cyl(n.dark,.03,.022,.12,Te*(V/2-.07),.06,-ce/2+.08,8),U&&T.box(L,.1,.45,.3,Te*(V/2-.06),1.05,-ce/2+.2);const me=U?1.12:.9;T.box(L,V-.04,me-.4,.2,0,.4+(me-.4)/2,-ce/2+.1,-.08,0,0),T.cyl(L,.09,.09,V-.06,0,me,-ce/2+.12,12,0,0,Math.PI/2);for(let Te=0;Te<3;Te++)for(let N=0;N<Math.round(V/.22);N++){const Be=Math.round(V/.22);T.sphere(n.iron,.012,-V/2+.13+(V-.26)*(N+Te%2*.5)/Be,.62+Te*.13,-ce/2+.215,1,1,.6,6,4)}T.solid(V,.95,ce,0,.47,0)}function ae(T){T.box(n.oak,.44,.04,.42,0,.46,0);for(const[L,D]of[[-.19,.18],[.19,.18],[-.19,-.18],[.19,-.18]])T.cyl(n.oak,.02,.018,.44,L,.22,D,8);for(const L of[-.19,.19])T.box(n.oak,.035,.5,.035,L,.72,-.19,-.1,0,0);T.box(n.oak,.42,.08,.03,0,.94,-.215,-.1,0,0);for(let L=-1;L<=1;L++)T.box(n.oak,.03,.36,.02,L*.1,.72,-.2,-.1,0,0);T.box(n.oak,.38,.02,.02,0,.12,0),T.box(n.leather2,.36,.03,.34,0,.495,.01),T.solid(.44,.95,.44,0,.47,0)}function fe(T,L,D,U,V=0){T.cyl(n.brass,.07,.08,.025,L,D+.012,U,16),T.cyl(n.brass,.01,.01,.3,L,D+.17,U,8),T.cyl(n.brass,.012,.012,.12,L,D+.32,U,6,0,V,Math.PI/2),T.cyl(n.greenGlass,.1,.1,.3,L,D+.34,U,16,0,V,Math.PI/2,!1,0,Math.PI),T.sphere(n.flame,.03,L,D+.31,U,1.6,.6,1)}function ie(T,L,D,U,V=1){T.cyl(n.ceramic,.06*V,.09*V,.25*V,L,D+.125*V,U,16),T.cyl(n.brass,.01,.01,.15*V,L,D+.3*V,U,6),T.cyl(n.shade,.1*V,.17*V,.2*V,L,D+.42*V,U,20,0,0,0,!0)}function Re(T,L,D,U,V,ce,me){T.box(n.gilt,L+2*.07,.07,.05,U,V+D/2+.07/2,ce),T.box(n.gilt,L+2*.07,.07,.05,U,V-D/2-.07/2,ce),T.box(n.gilt,.07,D,.05,U-L/2-.07/2,V,ce),T.box(n.gilt,.07,D,.05,U+L/2+.07/2,V,ce),T.plane(n.painting,L,D,U,V,ce,0,0,0,[me%2*.5,Math.floor(me/2)*.5,.5,.5])}function Fe(T,L,D,U,V,ce){e.stack(T.m,L,D,U,V,ce)}function J(T,L,D,U,V=.18){T.cyl(n.brass,.045,.06,.02,L,D+.01,U,12),T.cyl(n.brass,.012,.02,.2,L,D+.11,U,8),T.cyl(n.brass,.03,.02,.03,L,D+.22,U,10),T.cyl(n.paper,.016,.016,V,L,D+.235+V/2,U,8),T.sphere(n.flame,.012,L,D+.25+V,U,1,2,1,6,4)}{const T=s.sub(-.5,0,1.9,0);T.box(n.oak,1.25,.06,3.9,0,.75,0),T.box(n.dark,1.05,.13,3.6,0,.655,0);for(const D of[-1.75,0,1.75])for(const U of[-.5,.5])T.cyl(n.dark,.05,.04,.6,U,.32,D,10),T.sphere(n.dark,.06,U,.45,D,1,.8,1,10,6);T.box(n.dark,.06,.06,3.4,0,.14,0),T.solid(1.25,.8,3.9,0,.4,0),fe(T,0,.78,-.95,Math.PI/2),fe(T,0,.78,.95,Math.PI/2),u.push({p:new z(-.5,1.15,1.9),c:16761466,i:5.5,d:9}),Fe(T,.35,.78,-1.5,4,.2),Fe(T,-.38,.78,1.55,3,-.4),Fe(T,.4,.78,.4,2,1.2),T.box(n.leather,.44,.012,.3,-.15,.786,-.25,0,.1,0),T.box(n.paper,.2,.025,.28,-.255,.8,-.26,0,.1,.06),T.box(n.paper,.2,.025,.28,-.055,.8,-.24,0,.1,-.06),T.box(n.paper,.21,.004,.29,.3,.783,.9,0,-.3,0),T.cyl(n.iron,.03,.03,.05,.42,.805,.95,10),T.cyl(n.brass,.002,.002,.18,.4,.86,.95,4,0,0,.4);const L=[[-.88,-1.2,Math.PI/2],[-.92,.05,Math.PI/2+.15],[-.86,1.25,Math.PI/2],[.86,-1.25,-Math.PI/2],[1.15,.1,-Math.PI/2-.4],[.88,1.2,-Math.PI/2]];for(const[D,U,V]of L)ae(T.sub(D,0,U,V))}{const T=new mn(3.4,5.6);T.rotateX(-Math.PI/2),s.geo(n.rug,T,-.5,.008,1.9);const L=new mn(3.4,5.2);L.rotateX(-Math.PI/2),L.rotateY(Math.PI/2),s.geo(n.rug,L,0,.008,6.8);const D=new mn(2.2,3.2);D.rotateX(-Math.PI/2),s.geo(n.rug,D,-9.4,.008,4.9)}{const T=s.sub(0,0,9,Math.PI);T.box(n.stone,2.7,.08,.75,0,.04,.37);for(const L of[-1,1])T.box(n.stone,.38,1.28,.38,L*.96,.64,.19);T.box(n.stone,2.3,.36,.4,0,1.46,.2),T.box(n.dark,2.7,.08,.48,0,1.68,.24),T.box(n.plaster,2.3,3,.3,0,3.22,.15),T.box(n.soot,1.56,1.28,.04,0,.64,.02),T.box(n.soot,1.56,.02,.38,0,.09,.19);for(let L=0;L<6;L++)T.box(n.iron,.025,.25,.025,-.4+L*.16,.24,.3);T.box(n.iron,.9,.03,.3,0,.14,.2),T.cyl(n.dark,.06,.07,.75,0,.22,.18,8,0,.1,Math.PI/2),T.cyl(n.dark,.05,.05,.7,.05,.3,.24,8,0,-.3,Math.PI/2),T.box(n.ember,.8,.03,.26,0,.165,.2),T.sphere(n.ember,.12,-.1,.25,.2,2.2,.5,.8,8,6),T.solid(2.7,1.72,.8,0,.86,.4),J(T,-1.05,1.72,.25),J(T,1.05,1.72,.25,.14),T.box(n.dark,.32,.36,.14,0,1.9,.37+ve),T.cyl(n.ceramic,.11,.11,.02,0,1.94,.45+ve,20,Math.PI/2,0,0),T.cyl(n.brass,.125,.125,.015,0,1.94,.445+ve,20,Math.PI/2,0,0),T.cyl(n.terracotta,.05,.08,.22,.6,1.83,.22,12),Fe(T,-.6,1.72,.24,2,.3),Re(T,1.4,.95,0,3.5,.325+ve,2),T.cyl(n.iron,.012,.012,.8,1.32,.4,.55,6,0,0,.08),T.cyl(n.brass,.025,.025,.06,1.35,.82,.55,8),u.push({p:new z(0,.55,8.35),c:16747068,i:6,d:10,fire:!0})}j(s.sub(0,0,5.7,0),n.leather,2.2,!1),j(s.sub(-2.15,0,7.4,Math.PI/2-.2),n.leather2),j(s.sub(2.15,0,7.4,-Math.PI/2+.25),n.leather);{const T=s.sub(0,0,7.3,.05);T.box(n.oak,1.1,.05,.6,0,.42,0);for(const[D,U]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]])T.box(n.dark,.05,.4,.05,D,.2,U);T.box(n.dark,1,.02,.5,0,.1,0),T.solid(1.1,.45,.6,0,.22,0),Fe(T,-.25,.445,0,3,.5),T.cyl(n.ceramic,.04,.03,.07,.25,.48,.05,12),T.torus(n.ceramic,.025,.006,.29,.48,.05,0,0,0,10),T.cyl(n.ceramic,.07,.07,.008,.25,.449,.05,16),Fe(T,-.2,.12,0,3,0);const L=s.sub(1.45,0,5.75,0);L.cyl(n.dark,.25,.25,.03,0,.6,0,20),L.cyl(n.dark,.03,.04,.58,0,.3,0,8),L.cyl(n.dark,.18,.2,.03,0,.015,0,16),L.solid(.5,.62,.5,0,.31,0),ie(L,0,.615,0,1.1)}{s.box(n.oak,.6,.45,4,-11.19,.225,4.9),s.solid(.62,.45,4,-11.2,.225,4.9),s.box(n.cushion,.56,.1,3.9,-11.2,.5,4.9),s.box(n.cushion2,.16,.42,.5,-11.38,.74,3.25,0,0,-.25),s.box(n.leather2,.16,.38,.46,-11.38,.72,6.5,0,.2,-.3),s.box(n.cushion,.4,.06,.6,-11.1,.58,5.2,0,.4,0),e.stack(s.m,-11.2,.55,4.3,3,.4),s.cyl(n.terracotta,.11,.08,.2,-11.25,.65,6,14);for(let D=0;D<9;D++){const U=D/9*Math.PI*2;s.box(n.plant,.06,.32,.01,-11.25+Math.cos(U)*.06,.88,6+Math.sin(U)*.06,Math.sin(U)*.5,U,Math.cos(U)*.5)}j(s.sub(-9.3,0,3.4,-Math.PI/2+.55),n.leather),j(s.sub(-9.3,0,6.35,-Math.PI/2-.55),n.leather2);const T=s.sub(-9.9,0,4.9,0);T.cyl(n.oak,.3,.3,.035,0,.6,0,24),T.cyl(n.dark,.035,.05,.58,0,.3,0,10);for(let D=0;D<3;D++){const U=D/3*Math.PI*2;T.box(n.dark,.05,.05,.3,Math.cos(U)*.12,.04,Math.sin(U)*.12,0,-U+Math.PI/2,0)}T.solid(.6,.62,.6,0,.31,0),Fe(T,-.08,.62,-.08,3,.7),T.cyl(n.ceramic,.045,.035,.06,.14,.65,.1,12),T.cyl(n.ceramic,.075,.075,.008,.14,.62,.1,16);const L=s.sub(-8,0,7,0);L.cyl(n.iron,.16,.18,.03,0,.015,0,16),L.cyl(n.iron,.014,.014,1.5,0,.76,0,8),L.cyl(n.shade,.14,.24,.28,0,1.55,0,20,0,0,0,!0),L.solid(.36,1.6,.36,0,.8,0),u.push({p:new z(-8,1.5,6.9),c:16757866,i:4,d:7}),Re(s.sub(-7.5,0,2.4,0),.5,.4,-.45,2,.03,3),Fe(s,-8.6,0,7.15,5,.3)}{const T=s.sub(-5.9,0,-.7,.3);for(let D=0;D<3;D++){const U=D/3*Math.PI*2;T.box(n.dark,.04,.75,.04,Math.cos(U)*.18,.37,Math.sin(U)*.18,Math.sin(U)*.25,0,-Math.cos(U)*.25)}T.torus(n.oak,.3,.03,0,.76,0,Math.PI/2,0,0,32),T.torus(n.brass,.32,.01,0,1,0,0,0,.4,32);const L=new Pi(.29,32,20);L.rotateZ(.4),T.geo(n.globe,L,0,1,0),T.solid(.7,1.3,.7,0,.65,0)}{const T=s.sub(5.5,0,-1.22,Math.PI);T.box(n.oak,1.9,1.1,.5,0,.55,.25);for(let L=0;L<8;L++)for(let D=0;D<6;D++){const U=-.82+L*.235,V=.22+D*.15;T.box(n.walnut,.2,.12,.02,U,V,.505),T.box(n.brass,.05,.012,.02,U,V-.02,.52),T.box(n.paper,.05,.025,.005,U,V+.025,.517)}T.box(n.walnut,2,.05,.56,0,1.125,.25),T.solid(1.9,1.15,.5,0,.57,.25),ie(T,.65,1.15,.25,.9),Fe(T,-.4,1.15,.25,4,.2),s.cyl(n.brass,.008,.008,.75,5.5,a-.95,-4.1,6),s.cyl(n.brass,.04,.04,.05,5.5,a-.6,-4.1,10),s.cyl(n.shade,.1,.22,.2,5.5,a-1.38,-4.1,20,0,0,0,!0),s.sphere(n.flame,.035,5.5,a-1.4,-4.1,1,1,1,8,6),u.push({p:new z(5.5,a-1.5,-4.1),c:16759930,i:3.5,d:7})}{const T=s.sub(-5.6,a,-8.85,0);T.box(n.oak,1.4,.05,.7,0,.76,0);for(const D of[-1,1])T.box(n.dark,.36,.72,.64,D*.5,.37,0);T.box(n.dark,.6,.12,.62,0,.67,0);for(const D of[-1,1])for(let U=0;U<3;U++)T.box(n.walnut,.32,.2,.02,D*.5,.16+U*.22,.33),T.cyl(n.brass,.015,.015,.02,D*.5,.16+U*.22,.345,8,Math.PI/2,0,0);T.solid(1.4,.8,.7,0,.4,0),fe(T,-.4,.785,-.1,0),Fe(T,.45,.785,-.1,5,0),T.box(n.paper,.3,.004,.22,.05,.787,.1,0,.2,0),T.cyl(n.iron,.025,.03,.045,-.15,.81,-.15,10),ae(T.sub(.05,0,.6,Math.PI+.2)),u.push({p:new z(-5.9,a+1.25,-8.85),c:16761466,i:4.5,d:8}),j(s.sub(6,a,-3.6,-Math.PI/2),n.leather2);const L=s.sub(6.1,a,-2.4,0);L.cyl(n.dark,.22,.22,.03,0,.55,0,18),L.cyl(n.dark,.03,.03,.54,0,.27,0,8),L.cyl(n.dark,.15,.17,.03,0,.015,0,14),L.solid(.44,.58,.44,0,.29,0),Fe(L,0,.565,0,3,.4),e.stack(s.m,3.4,a,-9,6,.2),e.stack(s.m,-1.6,0,-8.9,4,.1)}for(const[T,L,D]of[[-.5,6.2,1.9],[-2.3,7,-3.7]]){s.torus(n.iron,.75,.025,T,L,D,Math.PI/2,0,0,40),s.torus(n.iron,.4,.018,T,L-.25,D,Math.PI/2,0,0,28),s.cyl(n.iron,.006,.006,10.5-L,T,(10.5+L)/2,D,4);for(let U=0;U<4;U++){const V=U/4*Math.PI*2+.4;s.cyl(n.iron,.005,.005,1.1,T+Math.cos(V)*.37,L+.45,D+Math.sin(V)*.37,4,Math.sin(V)*.72,0,-Math.cos(V)*.72)}for(let U=0;U<10;U++){const V=U/10*Math.PI*2,ce=T+Math.cos(V)*.75,me=D+Math.sin(V)*.75;s.cyl(n.iron,.03,.02,.04,ce,L+.03,me,8),s.cyl(n.paper,.014,.014,.14,ce,L+.12,me,6),s.sphere(n.flame,.011,ce,L+.205,me,1,2,1,6,4)}}Re(s.sub(7,0,0,-Math.PI/2),1.1,.8,4.6,3.1,.03,0),Re(s.sub(7,0,0,-Math.PI/2),.9,1.2,.7,5.3,.03,1),Re(s.sub(-7,0,0,Math.PI/2),.9,.7,2.6,3.2,.03,3),Re(s.sub(-7,0,0,Math.PI/2),.9,.7,-1.4,3.2,.03,1);{const T=s;T.sphere(n.ceramic,.12,-3.6,2.5,-5,.85,1.1,.85,14,10),T.cyl(n.ceramic,.07,.1,.16,-3.6,2.4,-5,12),T.box(n.stone,.2,.08,.2,-3.6,2.36,-5),e.stack(s.m,-1.2,2.325,-5,3,.3),T.cyl(n.terracotta,.12,.09,.26,-1,2.455,-2.4,14),T.sphere(n.plant,.18,-1,2.7,-2.4,1,.7,1,10,6),e.stack(s.m,-3.2,2.325,-2.4,4,1.2),J(s,-2.4,2.325,-2.4)}const le=(T,L,D)=>{const U=new Vs(r,T.m),V=h();if(V<.35)U.box(n.iron,.012,Math.min(.16,T.clear-.02),.11,L-D/2+.01,Math.min(.16,T.clear-.02)/2,-.08),U.box(n.iron,.09,.006,.11,L-D/2+.05,.003,-.08);else if(V<.55&&T.clear>.22)U.cyl(h()<.5?n.ceramic:n.terracotta,.035,.05,.15,L,.075,-.1,12);else if(V<.75){const ce=Math.min(D-.02,.14);U.box(h()<.5?n.walnut:n.leather2,ce,Math.min(.08,T.clear-.02),.12,L,.04,-.1)}else V<.85&&T.clear>.2&&U.box(n.gilt,.1,.13,.012,L,.065,-.12,-.15,0,0)};for(const T of l)e.fillSlot(T,le);return r.finish=r.finish.bind(r),{B:r,lights:u,windows:c,slots:l}}const Tl=[[.36,.08,.06],[.42,.12,.08],[.12,.2,.12],[.1,.16,.28],[.18,.1,.06],[.48,.32,.16],[.06,.06,.06],[.55,.42,.2],[.16,.26,.26],[.3,.1,.16],[.62,.55,.42],[.26,.24,.2],[.4,.24,.1],[.2,.12,.2],[.7,.62,.48]],wl=new jt,Al=new Pt,b0=new z,E0=new z;class T0{constructor(e){this.rand=e,this.mats=[],this.cols=[],this.vars=[]}color(e,t=0){const i=this.rand,r=e||Tl[Math.floor(i()*Tl.length)],s=.8+i()*.4,o=t||(i()<.12?.2+i()*.25:0);return[r[0]*s*(1-o)+.55*o,r[1]*s*(1-o)+.48*o,r[2]*s*(1-o)+.38*o]}add(e,t,i,r,s,o,a,l,u,c,h=0){Al.set(0,h,s),wl.setFromEuler(Al);const f=new je().compose(b0.set(t,i,r),wl,E0.set(o,a,l));f.premultiply(e),this.mats.push(f),this.cols.push(u),this.vars.push(c)}fillSlot(e,t){const i=this.rand,{m:r,len:s,clear:o,d:a}=e;let l=.01+i()*.04,u=.25;for(;l<s-.03;){const c=i(),h=s-l;if(c<.07&&h>.34&&o>.16){const v=2+Math.floor(i()*4);let C=0,w=0;const R=.2+i()*.1;for(let b=0;b<v;b++){const x=.022+i()*.04;if(C+x>o-.02)break;const M=Math.min(R+(i()-.5)*.06,h-.03),P=Math.min(a-.02,.15+i()*.08);this.add(r,l+M/2+(i()-.5)*.02,C+x/2,-P/2-.01-i()*.02,Math.PI/2,x,M,P,this.color(),Math.floor(i()*8),(i()-.5)*.12),C+=x,w=Math.max(w,M)}l+=w+.02+i()*.03;continue}if(c<.13){const v=.06+i()*.16;t&&v>.1&&h>.2&&t(e,l+v/2,v),l+=v;continue}const f=i()<.4,d=f?4+Math.floor(i()*10):3+Math.floor(i()*12),g=this.color(),_=Math.floor(i()*8),m=Math.min(o-.02,.2+i()*.16),p=.03+i()*.03,y=Math.min(a-.02,.15+i()*.08),S=i()<.2?.08:0;for(let v=0;v<d&&l<s-.03;v++){let C,w,R,b,x;if(f?(C=p*(.85+i()*.3),w=m,R=y,b=i()<.08?this.color():g,x=_):(C=.016+i()*.05+(i()<.1?.03:0),w=Math.min(o-.015,.17+i()*.17+S),R=Math.min(a-.02,.12+i()*.13),b=this.color(),x=Math.floor(i()*8)),l+C>s-.01)break;const M=.006+i()*(i()<.15?.06:.018);this.add(r,l+C/2,w/2,-R/2-M,0,C,w,R,b,x,(i()-.5)*.03),l+=C+.0015,u=w}if(i()<.35&&s-l>.12){const v=.12+i()*.3,C=.02+i()*.03,w=Math.min(u*.95,o-.03,.18+i()*.12),R=Math.min(a-.02,.14+i()*.08),b=l+C/2*Math.cos(v)+w/2*Math.sin(v),x=C/2*Math.sin(v)+w/2*Math.cos(v);l+C*Math.cos(v)+w*Math.sin(v)<s-.01&&(this.add(r,b,x,-R/2-.01,v,C,w,R,this.color(),Math.floor(i()*8)),l+=C*Math.cos(v)+w*Math.sin(v))}l+=.004+i()*.04}}stack(e,t,i,r,s,o=0){const a=this.rand;let l=i;for(let u=0;u<s;u++){const c=.025+a()*.04,h=.2+a()*.12,f=.15+a()*.08;this.add(e,t+(a()-.5)*.03,l+c/2,r+(a()-.5)*.03,Math.PI/2,c,h,f,this.color(),Math.floor(a()*8),o+(a()-.5)*.4),l+=c}return l}build(e){const t=new tn(1,1,1),i=t.attributes.uv,r=new Float32Array(i.count),s=new Float32Array(i.count);for(let f=0;f<6;f++)for(let d=0;d<4;d++){const g=f*4+d;let _=i.getX(g),m=i.getY(g);if(f===4)_=_*.0625,r[g]=1;else if(f===0||f===1)_=.76+_*.23;else if(f===2||f===3){const p=_;_=.51+m*.23,m=p,s[g]=1}else _=.51+_*.23,s[g]=1;i.setXY(g,_,m)}t.setAttribute("aSpine",new yt(r,1)),t.setAttribute("aPage",new yt(s,1));const o=this.mats.length,a=new Float32Array(o);for(let f=0;f<o;f++)a[f]=this.vars[f];t.setAttribute("aVar",new Ss(a,1));const l=new jc({map:e});l.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
`)};const u=t.index.array;t.setIndex(Array.from(u.slice(0,30)));const c=new Os(t,l,o),h=new Oe;for(let f=0;f<o;f++){c.setMatrixAt(f,this.mats[f]);const d=this.cols[f];h.setRGB(d[0],d[1],d[2]),c.setColorAt(f,h)}return c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,c.castShadow=!0,c.receiveShadow=!0,c.computeBoundingSphere(),c}}const Rl=.0026,Cl=Math.PI/2-.02;function w0({canvas:n,overlay:e,menuButton:t,player:i,camera:r,releaseMovement:s,toast:o,isInputBlocked:a=()=>!1,setMenuPaused:l=()=>{}}){const u=e.querySelector("#look-sensitivity"),c=e.querySelector("#look-sensitivity-value"),h=e.querySelector("[data-resume-look]");let f=Rl,d=!1,g=!1,_=!1,m=!1,p=!1,y=document.hasFocus(),S=!1,v=!1,C=0,w=0,R=0,b=!1,x=!1;const M=[];function P(ie,Re,Fe,J){ie.addEventListener(Re,Fe,J),M.push(()=>ie.removeEventListener(Re,Fe,J))}function O(){return!x&&!b&&y&&!e.open&&!a()}function F(){n.focus({preventScroll:!0}),y=document.visibilityState==="visible"&&document.hasFocus()}function B(ie,Re){!Number.isFinite(ie)||!Number.isFinite(Re)||(i.yaw-=ie*f,i.pitch=Math.max(-Cl,Math.min(Cl,i.pitch-Re*f)),r.rotation.set(i.pitch,i.yaw,0))}function K(){++R,d=_=m=g=p=!1,s(),document.pointerLockElement===n&&document.exitPointerLock()}function H(){e.open&&e.close(),l(!1),!x&&!b&&F()}function Y(){if(!(x||b||e.open||a()))return K(),e.showModal(),l(!0),h.focus({preventScroll:!0}),!0}function j(){_=p=!1,O()&&(S=!0,o("Hold left mouse to look. Esc opens controls."))}async function ae(){if(d||_||!O())return;if(!n.requestPointerLock){j();return}const ie=++R;_=p=!0,m=!1;try{const Re=n.requestPointerLock({unadjustedMovement:!0});if(!Re||typeof Re.then!="function"){m=!0;return}try{await Re}catch(Fe){if(Fe.name!=="NotSupportedError"||ie!==R||!O())throw Fe;await n.requestPointerLock()}}catch{ie===R&&O()&&j()}finally{ie===R&&!m&&(_=!1)}}P(t,"click",Y),P(h,"click",()=>{H(),ae()}),P(e,"cancel",ie=>{ie.preventDefault(),H()}),P(e,"close",()=>{l(!1),!x&&!b&&F()}),P(n,"mousedown",ie=>{ie.button!==0||x||b||e.open||a()||(F(),!(d||!O())&&(v=!S,g=!0,C=ie.clientX,w=ie.clientY,ae()))}),P(n,"click",ie=>{v&&(v=!1,ie.stopImmediatePropagation())},!0),P(n,"keydown",ie=>{ie.code==="Enter"&&!ie.repeat&&O()&&(ae(),ie.preventDefault())}),P(globalThis,"mouseup",()=>{g=!1}),P(globalThis,"mousemove",ie=>{if(!(!O()||document.visibilityState!=="visible")){if(d)B(ie.movementX,ie.movementY);else if(g){if(!(ie.buttons&1)){g=!1;return}B(ie.clientX-C,ie.clientY-w),C=ie.clientX,w=ie.clientY}}}),P(document,"pointerlockchange",()=>{const ie=d;d=document.pointerLockElement===n,_=m=g=!1,d&&(!O()||!p)&&(document.exitPointerLock(),d=!1),d?(S=!1,F()):(p=!1,ie&&s())}),P(document,"pointerlockerror",()=>{m&&_&&(m=!1,j())});function fe(){y=!1,S=!1,K()}return P(globalThis,"blur",fe),P(globalThis,"focus",()=>{y=document.visibilityState==="visible"}),P(document,"visibilitychange",()=>{document.visibilityState!=="visible"?fe():y=document.hasFocus()}),P(globalThis,"keydown",ie=>{ie.code==="Escape"&&!ie.repeat&&!e.open&&Y()&&ie.preventDefault()}),P(u,"input",()=>{const ie=Math.max(40,Math.min(220,Number(u.value)||100));f=Rl*ie/100,c.textContent=`${ie}%`}),{get menuOpen(){return e.open},pause(){b=!0,fe()},resume(){x||(b=!1,y=document.visibilityState==="visible"&&document.hasFocus())},dispose(){if(!x){x=!0,b=!0,fe();for(const ie of M)ie();e.open&&e.close()}}}}const Pl=Object.freeze({welcome:{label:"Welcome book",cover:["A place","for you"],color:3362112,kicker:"Welcome · first shelf",title:"A place to leave good things",paragraphs:["Come in, take a seat, and read something that catches your attention. I’ve left a short find on the table and connected the writing desk to the private project workspace.","Start with Shapes & sound, the rust-colored book nearby. When you want to work on personal notes or decisions, visit the writing desk upstairs.","This first shelf is small. The room can change as better buildings arrive; the things worth keeping can move with it."],links:[],signature:"Left for you — Jippity"},drums:{label:"Shapes & sound",cover:["Shapes","& sound"],color:7356719,kicker:"An interesting find · mathematics",title:"Different shapes, the same spectrum",paragraphs:["Two mathematically different ideal drumheads can have exactly the same set of resonant frequencies, including their multiplicities. Gordon, Webb and Wolpert constructed distinct planar shapes with this property: the frequency list alone does not uniquely reveal the boundary.","There is a stronger surprise. Buser, Conway, Doyle and Semmler gave a homophonic pair with a special point on each drum. Corresponding normalized vibration modes take matching values there. In the ideal point-strike model, striking those points excites every frequency with matching strength.","The assumptions matter: ideal membranes with matching tension and density, fixed boundaries, and the mathematical wave model. This does not mean arbitrary real rooms, instruments or recordings sound identical. Strike location, damping, material, acoustics and how you listen still matter in practice.","That is the part I find interesting: a complete frequency list can be precise and still leave the shape ambiguous."],links:[{label:"Gordon, Webb & Wolpert · One cannot hear the shape of a drum (1992)",href:"https://arxiv.org/pdf/math/9207215"},{label:"Buser, Conway, Doyle & Semmler · Some planar isospectral domains (1994)",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],signature:"Selected by Jippity"},desk:{label:"Project Library",kicker:"The writing desk",title:"Project Library",paragraphs:["Personal notes and decisions belong in the signed-in Project Library. Open that workspace when you’re ready to write or pick up a project.","This desk is just the entrance. The link opens your private workspace in a new tab; sign in there if asked."],links:[{label:"Open private Project Library",href:"https://jippity-project-room.pazneria.chatgpt.site"}],signature:"Jippity"}}),Il=Object.freeze([{id:"table-welcome",contentId:"welcome",position:[-.35,.808,3.53],yaw:.12,kind:"book",bounds:{x0:-.53,x1:-.17,y0:.783,y1:.84,z0:3.32,z1:3.74}},{id:"table-drums",contentId:"drums",position:[-.87,.808,2.35],yaw:-.18,kind:"book",bounds:{x0:-1.06,x1:-.68,y0:.783,y1:.84,z0:2.13,z1:2.57}},{id:"gallery-writing-desk",contentId:"desk",kind:"existing-paper",position:[-5.55,4.999,-8.75],bounds:{x0:-5.76,x1:-5.34,y0:4.98,y1:5.025,z0:-8.94,z1:-8.56}}]),A0=2.2;function R0(n,e,t,i=()=>document.createElement("canvas")){const r=e.filter(w=>w.kind==="book"),s=i();s.width=256*r.length,s.height=384;const o=s.getContext("2d"),a=[],l=[],u=new z(0,1,0),c=[],h=new je,f=new jt,d=new z,g=new tn(1,1,1),_=new ei({roughness:.85,color:16777215}),m=new Os(g,_,r.length),p=new z;for(let w=0;w<r.length;w++){const R=r[w],b=t[R.contentId],x="#"+b.color.toString(16).padStart(6,"0");o.fillStyle=x,o.fillRect(w*256,0,256,384),o.strokeStyle="#c7a96c",o.lineWidth=2,o.strokeRect(w*256+20,24,216,336),o.fillStyle="#f0dfbe",o.textAlign="center",o.font="30px Georgia",b.cover.forEach((M,P)=>o.fillText(M,w*256+128,154+P*42)),o.font="15px Georgia",o.fillText("JIPPITY",w*256+128,304),f.setFromAxisAngle(u,R.yaw),h.compose(p.fromArray(R.position),f,d.set(.26,.038,.34)),m.setMatrixAt(w,h),m.setColorAt(w,new Oe(b.color));for(const[M,P,O,F]of[[-.13,.17,0,0],[.13,.17,1,0],[.13,-.17,1,1],[-.13,.17,0,0],[.13,-.17,1,1],[-.13,-.17,0,1]])p.set(M,.021,P).applyQuaternion(f).add(new z().fromArray(R.position)),a.push(p.x,p.y,p.z),c.push(0,1,0),l.push((w+O)/r.length,F)}m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0);const y=new ct;y.setAttribute("position",new Ye(a,3)),y.setAttribute("normal",new Ye(c,3)),y.setAttribute("uv",new Ye(l,2));const S=new rr(s);S.colorSpace=mt;const v=new ei({map:S,roughness:.9}),C=new et(y,v);return m.name="Jippity reading books",C.name="Jippity book covers",n.add(m,C),{objects:[m,C],budget:{books:r.length,drawCalls:2,triangles:r.length*14,texturePixels:s.width*s.height},dispose(){n.remove(m,C),m.dispose(),g.dispose(),_.dispose(),y.dispose(),v.dispose(),S.dispose()}}}const C0=["x","y","z"];function Ll(n,e,t,i=1/0){let r=0,s=i;if(!Number.isFinite(Math.hypot(e.x,e.y,e.z))||Math.hypot(e.x,e.y,e.z)<1e-10)return null;for(const o of C0){const a=n[o],l=e[o],u=t[o+"0"],c=t[o+"1"];if(!Number.isFinite(a)||!Number.isFinite(l)||!Number.isFinite(u)||!Number.isFinite(c))return null;if(Math.abs(l)<1e-10){if(a<u||a>c)return null}else{const h=(u-a)/l,f=(c-a)/l;if(r=Math.max(r,Math.min(h,f)),s=Math.min(s,Math.max(h,f)),r>s)return null}}return s>=0?r:null}function Dl(n,e,t,i,r=2.2){let s=null,o=r;for(const a of t){const l=Ll(n,e,a.bounds,o);l!==null&&l<=o&&(s=a,o=l)}if(!s)return null;for(const a of i){const l=Ll(n,e,a,o);if(l!==null&&l+.025<o)return null}return s}function fa(n){var e;return!!((e=n==null?void 0:n.closest)!=null&&e.call(n,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))}const Hi="jippityLibraryReader";function P0({document:n,window:e,canvas:t,dialog:i,hint:r,content:s,getTarget:o,canInteract:a,look:l,setPaused:u,releaseMovement:c,returnFocus:h}){const f=i.querySelector("#reader-title"),d=i.querySelector("#reader-kicker"),g=i.querySelector("#reader-pages"),_=i.querySelector("#reader-links"),m=i.querySelector("#reader-signature"),p=[];let y=null,S=!1,v=!1,C=null;function w(O,F,B){O.addEventListener(F,B),p.push(()=>O.removeEventListener(F,B))}function R(O){const F=s[O];d.textContent=F.kicker,f.textContent=F.title,g.replaceChildren(),_.replaceChildren();for(const B of F.paragraphs){const K=n.createElement("p");K.textContent=B,g.append(K)}for(const B of F.links){const K=n.createElement("a");K.textContent=B.label,K.href=B.href,K.target="_blank",K.rel="noopener noreferrer",K.referrerPolicy="no-referrer",_.append(K)}_.hidden=!F.links.length,m.textContent=F.signature}function b(O,F=!0){if(S||v||!Object.hasOwn(s,O))return!1;const B=y!==null;if(y=O,c(),l.pause(),u(!0),r.hidden=!0,R(O),n.body.classList.add("reading-open"),i.open||i.showModal(),i.scrollTop=0,f.focus({preventScroll:!0}),F){const K={...e.history.state,[Hi]:O};B?e.history.replaceState(K,"",e.location.href):e.history.pushState(K,"",e.location.href)}return!0}function x(){y!==null&&(y=null,i.open&&i.close(),n.body.classList.remove("reading-open"),r.hidden=!0,c(),l.resume(),u(!1),h==null||h.focus({preventScroll:!0}))}function M(){var F;if(y===null)return;const O=((F=e.history.state)==null?void 0:F[Hi])===y;x(),O&&(v=!0,e.history.back())}function P(){if(y!==null||S||v||!a())return!1;const O=o();return O?b(O.contentId):!1}return w(e,"keydown",O=>{O.code!=="KeyE"||O.repeat||y!==null||fa(O.target)||P()&&O.preventDefault()}),w(t,"mousedown",O=>{C=O.button===0?{x:O.clientX,y:O.clientY,dragged:!1}:null}),w(e,"mousemove",O=>{C&&Math.hypot(O.clientX-C.x,O.clientY-C.y)>5&&(C.dragged=!0)}),w(t,"click",O=>{const F=C==null?void 0:C.dragged;C=null,!F&&(O.button===void 0||O.button===0)&&P()}),w(r,"click",P),w(i,"cancel",O=>{O.preventDefault(),M()}),w(i.querySelector("#reader-close"),"click",M),w(i.querySelector("#reader-back"),"click",M),w(i,"close",M),w(e,"popstate",O=>{var B;v=!1;const F=(B=O.state)==null?void 0:B[Hi];F&&Object.hasOwn(s,F)?b(F,!1):x()}),{get isOpen(){return y!==null},openNearby:P,close:M,updateHint(){const O=!S&&y===null&&a()?o():null;r.hidden=!O,O&&(r.textContent=`E — ${s[O.contentId].label}`)},dispose(){var O;if(!S){S=!0;for(const F of p)F();if(i.open&&i.close(),y=null,r.hidden=!0,n.body.classList.remove("reading-open"),(O=e.history.state)!=null&&O[Hi]){const F={...e.history.state};delete F[Hi],e.history.replaceState(F,"",e.location.href)}c(),l.pause(),u(!0)}}}}const I0=1,L0="shapes-and-sound",D0="Shapes & Sound",U0="A small study of shared resonances",N0="Jippity · Field notes",F0="No. 01",O0="Selected by Jippity",B0={lines:["SHAPES","& SOUND"],spine:"SHAPES & SOUND",imprint:"JIPPITY",note:"ON THE GEOMETRY OF LISTENING"},z0=[{kind:"title",eyebrow:"Mathematics / Acoustics",title:`Shapes
& Sound`,paragraphs:["Different outlines can share the same ideal resonances. A short reading on what a sound can tell us—and what it can leave hidden."],note:"An original decorative resonance motif accompanies this text; it is not a diagram of an isospectral pair."},{kind:"text",eyebrow:"01 / The question",title:"Can a sound reveal a shape?",paragraphs:["Imagine an ideal, uniformly tensioned drumhead held fixed along its edge. Its natural vibration frequencies form a kind of fingerprint. Could that complete list determine its outline?","In 1992, Carolyn Gordon, David Webb, and Scott Wolpert announced differently shaped planar domains with the same spectrum. For this mathematical model, the answer is no."],sourceIds:["gww"]},{kind:"text",eyebrow:"02 / The construction",title:"Rearranging the pieces",paragraphs:["Peter Buser, John Conway, Peter Doyle, and Klaus-Dieter Semmler describe pairs assembled from congruent triangles. Their proof moves and combines pieces of vibration patterns from one domain to the other.","This “transplantation” preserves each eigenvalue and its multiplicity. The boundaries differ, yet the full spectral lists agree."],note:"Isospectral means equal spectra, including repeated eigenvalues.",sourceIds:["bcds"]},{kind:"text",eyebrow:"03 / A finer distinction",title:"The same notes are not the whole sound",paragraphs:["Matching natural frequencies does not by itself specify how strongly a particular strike excites them.","Buser and colleagues also give a stronger example: a homophonic pair with special corresponding strike points. In their ideal model, striking at those points excites matching frequencies with matching intensities."],sourceIds:["bcds"]},{kind:"text",eyebrow:"04 / Beyond the ideal",title:"And what about this room?",paragraphs:["The theorem concerns ideal mathematical domains. A real room adds three-dimensional geometry, absorbing surfaces, furnishings, and the positions of both source and listener.","It does not say that arbitrary differently shaped rooms—or ordinary recordings of real drums—sound identical. The lesson is more precise: even complete spectral information can leave some geometry unresolved."],note:"A mathematical possibility, not a room-acoustics simulation.",sourceIds:["gww","bcds"]},{kind:"sources",eyebrow:"Reading desk / Sources",title:"Follow the proof",paragraphs:["Two public papers for a longer visit. Links open only when you choose them."],sourceIds:["gww","bcds"],note:"Public reading sample · No audio simulation"}],k0=[{id:"gww",authors:"Carolyn Gordon, David L. Webb & Scott Wolpert",title:"One cannot hear the shape of a drum",detail:"Research announcement · 1992",href:"https://arxiv.org/pdf/math/9207215"},{id:"bcds",authors:"Peter Buser, John Conway, Peter Doyle & Klaus-Dieter Semmler",title:"Some planar isospectral domains",detail:"Version 1.0.1 · 1994",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],Bo={schemaVersion:I0,id:L0,title:D0,subtitle:U0,series:N0,edition:F0,signature:O0,cover:B0,pages:z0,sources:k0},Mi=Object.freeze({cover:[16,16,640,896],spine:[680,16,120,896],paper:[824,16,184,400],end:[824,448,184,256],ribbon:[824,752,184,240],cloth:[688,944,104,48]}),Ul=n=>n/1024;function H0(n,e,t){const[i,r,s,o]=Mi[n];return[Ul(i+2+e*(s-4)),1-Ul(r+2+(1-t)*(o-4))]}function G0(){const n=[],e=[],t=[],i={min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0]};function r(S,v,C,w=[[0,0],[1,0],[1,1]],R="cloth"){const b=v.map((F,B)=>F-S[B]),x=C.map((F,B)=>F-S[B]),M=[b[1]*x[2]-b[2]*x[1],b[2]*x[0]-b[0]*x[2],b[0]*x[1]-b[1]*x[0]],P=Math.hypot(...M);if(P<1e-12)return;const O=M.map(F=>F/P);[S,v,C].forEach((F,B)=>{n.push(...F),e.push(...O),t.push(...H0(R,...w[B])),F.forEach((K,H)=>{i.min[H]=Math.min(i.min[H],K),i.max[H]=Math.max(i.max[H],K)})})}function s(S,v,C,w,R="cloth",b=[[0,0],[1,0],[1,1],[0,1]]){r(S,v,C,[b[0],b[1],b[2]],R),r(S,C,w,[b[0],b[2],b[3]],R)}function o(S,v,C,w,R,b,x,M){const P=[];for(let H=0;H<4;H++){const Y=H*Math.PI/2,j=(H===0||H===3?1:-1)*(S/2-R),ae=(H<2?1:-1)*(v/2-R);for(let fe=0;fe<=b;fe++){const ie=Y+fe*Math.PI/(2*b);P.push([j+Math.cos(ie)*R,ae+Math.sin(ie)*R])}}const O=Math.min(.0016,w*.24),F=[[C,.0012],[C+O,0],[C+w-O,0],[C+w,.0012]],B=F.map(([H,Y])=>P.map(([j,ae])=>[j*(1-Y/(S/2)),H,ae*(1-Y/(v/2))])),K=P.length;for(let H=0;H<F.length-1;H++)for(let Y=0;Y<K;Y++){const j=(Y+1)%K;s(B[H][Y],B[H+1][Y],B[H+1][j],B[H][j],M,[[Y/K,(F[H][0]-C)/w],[Y/K,(F[H+1][0]-C)/w],[j/K,(F[H+1][0]-C)/w],[j/K,(F[H][0]-C)/w]])}for(let H=0;H<K;H++){const Y=(H+1)%K,j=B[3],ae=B[0],fe=ie=>[ie[0]/S+.5,.5-ie[2]/v];r([0,C+w,0],j[Y],j[H],[[.5,.5],fe(j[Y]),fe(j[H])],x),r([0,C,0],ae[H],ae[Y],[[.5,.5],[0,0],[1,0]],"cloth")}}o(.34,.47,0,.006,.006,3,"end","cloth"),o(.314,.448,.007,.048,.003,2,"end","paper"),o(.34,.47,.058,.006,.006,3,"cover","cloth");const a=-.165,l=.032,u=.031;for(let S=0;S<10;S++){const v=-Math.PI/2+S*Math.PI/10,C=v+Math.PI/10,w=(R,b,x=0)=>[a-Math.cos(R)*(u*.4+x),l+Math.sin(R)*u,b];s(w(v,-.228),w(v,.228),w(C,.228),w(C,-.228),"spine",[[S/10,1],[S/10,0],[(S+1)/10,0],[(S+1)/10,1]]),r([a,l,-.228],w(v,-.228),w(C,-.228),void 0,"cloth"),r([a,l,.228],w(C,.228),w(v,.228),void 0,"cloth")}for(const S of[-.178,-.109,.109,.178])for(let v=0;v<8;v++){const C=-Math.PI/2+v*Math.PI/8,w=C+Math.PI/8,R=(b,x)=>[a-Math.cos(b)*.0144,l+Math.sin(b)*.0315,x];s(R(C,S-.0021),R(C,S+.0021),R(w,S+.0021),R(w,S-.0021))}const c=[-.064,.042,.198],h=[-.043,.042,.198],f=[-.041,.01,.248],d=[-.062,.01,.248],g=[-.04,.003,.284],_=[-.0505,.003,.277],p=[[c,d,f],[c,f,h],[d,[-.061,.003,.284],_],[d,_,f],[f,_,g]],y=S=>[(S[0]+.065)/.027,(.284-S[2])/.086];for(const S of p){r(...S,S.map(y),"ribbon");const v=S.map(C=>[C[0],C[1]-5e-4,C[2]]).reverse();r(...v,v.map(y),"ribbon")}return{position:new Float32Array(n),normal:new Float32Array(e),uv:new Float32Array(t),bounds:i,triangles:n.length/9}}const Ir=Object.freeze({cloth:"#173c40",foil:"#d6b16a",paper:"#eee4cc",ink:"#263f3b",ribbon:"#79374c"}),Jc=Object.freeze({color:1024,control:512,bump:256});function V0(n,e,t="color"){const i=Jc[t];n.width=n.height=i;const r=n.getContext("2d");if(!r)throw new Error("Jippity book requires a 2D canvas context.");r.save(),r.scale(i/1024,i/1024);const s=t==="color",o=t==="bump",a=s?Ir.cloth:o?"#808080":"rgb(0,212,0)",l=s?Ir.foil:o?"#777777":"rgb(0,100,220)";if(r.fillStyle=a,r.fillRect(0,0,1024,1024),s||o){r.lineWidth=.6;for(let B=0;B<1024;B+=3)r.strokeStyle=s?B%2?"rgba(210,230,204,.045)":"rgba(0,0,0,.05)":B%2?"#888":"#777",r.beginPath(),r.moveTo(B,0),r.lineTo(B+.7,1024),r.stroke();for(let B=0;B<1024;B+=4)r.strokeStyle=s?"rgba(225,235,211,.025)":"#848484",r.beginPath(),r.moveTo(0,B),r.lineTo(1024,B+.5),r.stroke()}const[u,c,h,f]=Mi.cover;r.strokeStyle=l,r.fillStyle=l,r.lineWidth=1.3,r.strokeRect(u+28,c+30,h-56,f-60),r.lineWidth=.65,r.strokeRect(u+35,c+37,h-70,f-74);for(const[B,K,H,Y]of[[u+45,c+47,1,1],[u+h-45,c+47,-1,1],[u+45,c+f-47,1,-1],[u+h-45,c+f-47,-1,-1]])r.beginPath(),r.moveTo(B,K+12*Y),r.lineTo(B,K),r.lineTo(B+12*H,K),r.stroke();r.textAlign="center",r.textBaseline="middle";function d(B,K,H,Y,j="Georgia"){let ae=H;for(r.font=ae+"px "+j;r.measureText(B).width>Y&&ae>12;)ae--,r.font=ae+"px "+j;r.fillText(B,u+h/2,K)}d(e.series.toUpperCase(),c+97,16,h-110,"Arial"),r.lineWidth=.8,r.beginPath(),r.moveTo(u+250,c+131),r.lineTo(u+390,c+131),r.stroke(),e.cover.lines.forEach((B,K)=>d(B,c+215+K*83,67,h-98)),d(e.subtitle,c+385,19,h-115),r.save(),r.translate(u+h/2,c+570);for(let B=0;B<9;B++){r.beginPath();for(let K=0;K<=160;K++){const H=K*Math.PI*2/160,Y=32+B*8.1+Math.sin(3*H+B*.16)*8+Math.cos(2*H)*4,j=Math.cos(H)*Y*1.19,ae=Math.sin(H)*Y*.8;K?r.lineTo(j,ae):r.moveTo(j,ae)}r.closePath(),r.lineWidth=B===8?1.5:.85,r.stroke()}r.beginPath(),r.arc(0,0,2.8,0,Math.PI*2),r.fill(),r.restore(),d(e.cover.note,c+750,12.5,h-90,"Arial"),d(e.cover.imprint,c+806,21,h-90),d(e.edition.toUpperCase(),c+842,10,h-90,"Arial");const[g,_,m,p]=Mi.spine;r.save(),r.translate(g+m/2,_+p/2),r.rotate(Math.PI/2),r.font="26px Georgia",r.fillText(e.cover.spine,0,0,p*.7),r.font="12px Arial",r.fillText(e.cover.imprint,-p*.36,0),r.restore(),r.lineWidth=2;for(const B of[_+61,_+p-61])r.beginPath(),r.moveTo(g+14,B),r.lineTo(g+m-14,B),r.stroke();const[y,S,v,C]=Mi.paper;if(r.fillStyle=s?Ir.paper:o?"#808080":"rgb(0,241,0)",r.fillRect(y,S,v,C),s||o)for(let B=0;B<65;B++){const K=S+4+B*(C-8)/65;r.strokeStyle=s?B%7===0?"rgba(111,88,49,.28)":"rgba(132,107,66,.12)":B%7===0?"#6b6b6b":"#777777",r.lineWidth=B%7===0?1.6:.7,r.beginPath(),r.moveTo(y,K),r.bezierCurveTo(y+v*.3,K+.7,y+v*.7,K-.4,y+v,K+.3),r.stroke()}const[w,R,b,x]=Mi.end;if(r.fillStyle=s?"#d9d4b9":o?"#808080":"rgb(0,226,0)",r.fillRect(w,R,b,x),s){r.strokeStyle="#a4b0a1",r.lineWidth=.8;for(let B=0;B<18;B++)r.beginPath(),r.moveTo(w,R+B*16),r.lineTo(w+b,R+B*16+b*.34),r.stroke()}const[M,P,O,F]=Mi.ribbon;if(r.fillStyle=s?Ir.ribbon:o?"#808080":"rgb(0,135,20)",r.fillRect(M,P,O,F),s){r.strokeStyle="rgba(242,171,168,.15)",r.lineWidth=1;for(let B=0;B<O;B+=4)r.beginPath(),r.moveTo(M+B,P),r.lineTo(M+B,P+F),r.stroke()}return r.restore(),n}function Qc(n){const e=(i,r)=>typeof i=="string"&&i.trim().length>0&&i.length<=r;if(!n||n.schemaVersion!==1||!e(n.id,80)||!e(n.title,120))throw new TypeError("Invalid book identity.");if(!e(n.series,80)||!e(n.subtitle,160)||!e(n.signature,120)||!e(n.edition,40))throw new TypeError("Invalid book metadata.");if(!n.cover||!Array.isArray(n.cover.lines)||n.cover.lines.length<1||n.cover.lines.length>3||!n.cover.lines.every(i=>e(i,40))||!e(n.cover.spine,100)||!e(n.cover.imprint,50)||!e(n.cover.note,100))throw new TypeError("Invalid cover text.");if(!Array.isArray(n.pages)||!n.pages.length||n.pages.length>40)throw new TypeError("A book needs 1–40 pages.");if(!Array.isArray(n.sources)||n.sources.length>30)throw new TypeError("Invalid sources.");const t=new Set;for(const i of n.sources){if(!e(i.id,60)||t.has(i.id)||!e(i.title,240)||!e(i.authors,300)||!e(i.detail,120))throw new TypeError("Invalid source metadata.");if(typeof i.href!="string"||!/^https:\/\/[a-z0-9][a-z0-9.-]*(?::443)?\//i.test(i.href)||/[\s<>"\\]/.test(i.href))throw new TypeError("Sources must use a public HTTPS URL.");t.add(i.id)}for(const i of n.pages){if(!["title","text","sources"].includes(i.kind)||!e(i.title,140)||!e(i.eyebrow,100)||!Array.isArray(i.paragraphs)||i.paragraphs.length>8||!i.paragraphs.every(r=>e(r,1800)))throw new TypeError("Invalid page.");if(i.note!==void 0&&!e(i.note,500))throw new TypeError("Invalid page note.");if(i.sourceIds!==void 0&&(!Array.isArray(i.sourceIds)||i.sourceIds.some(r=>!t.has(r))))throw new TypeError("Unknown source.")}return n}function W0({THREE:n,content:e,position:t=[0,0,0],yaw:i=0,makeCanvas:r=()=>document.createElement("canvas")}){Qc(e);const s=G0(),o=new n.BufferGeometry;o.setAttribute("position",new n.BufferAttribute(s.position,3)),o.setAttribute("normal",new n.BufferAttribute(s.normal,3)),o.setAttribute("uv",new n.BufferAttribute(s.uv,2)),o.computeBoundingBox(),o.computeBoundingSphere();const a={};for(const f of["color","control","bump"]){const d=new n.CanvasTexture(V0(r(),e,f));f==="color"&&(d.colorSpace=n.SRGBColorSpace),d.anisotropy=4,d.name="Jippity "+f+" atlas",a[f]=d}const l=new n.MeshStandardMaterial({map:a.color,roughnessMap:a.control,metalnessMap:a.control,bumpMap:a.bump,bumpScale:24e-5,roughness:1,metalness:1});l.name="Jippity cloth, foil, paper and silk";const u=new n.Mesh(o,l);u.name="Jippity — "+e.title,u.position.fromArray(t),u.rotation.y=i,u.castShadow=!0,u.receiveShadow=!0,u.updateMatrix(),u.matrixAutoUpdate=!1;const c=Object.values(Jc).reduce((f,d)=>f+d*d,0);let h=!1;return{object:u,budget:Object.freeze({triangles:s.triangles,vertices:s.position.length/3,drawCalls:1,geometryBytes:s.position.byteLength+s.normal.byteLength+s.uv.byteLength,texturePixels:c,textureBaseRGBABytes:c*4,textureWithFullMipRGBABytes:Math.round(c*4*4/3),note:"Static geometry/texture accounting; drawCalls excludes shadow and optional host prepass. No frame-rate or GPU-memory measurement."}),dispose(){h||(h=!0,u.removeFromParent(),o.dispose(),l.dispose(),Object.values(a).forEach(f=>f.dispose()),Object.values(a).forEach(f=>{f.image=null}))}}}function X0(n){if(!Number.isInteger(n)||n<1||n>40)throw new RangeError("Invalid page count.");const e=Math.ceil(n/2);let t="closed",i=0;const r=s=>Math.max(0,Math.min(e-1,Number.isFinite(s)?Math.trunc(s):0));return{get isOpen(){return t==="open"},get disposed(){return t==="disposed"},get spread(){return i},get count(){return e},open(s=i){return t==="disposed"?!1:(i=r(s),t="open",!0)},go(s){if(t!=="open")return!1;const o=r(s);return o===i?!1:(i=o,!0)},close(){return t!=="open"?!1:(t="closed",!0)},dispose(){t="disposed"}}}const Lr="jippityBoundBook";let q0=0;const Y0=n=>{var e;return!!((e=n==null?void 0:n.closest)!=null&&e.call(n,'input, textarea, select, [contenteditable], [role="textbox"]'))};function j0(n){const e=n.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","-145 -110 290 220"),e.setAttribute("aria-hidden","true"),e.setAttribute("class","jb-motif");for(let t=0;t<9;t++){const i=n.createElementNS("http://www.w3.org/2000/svg","path");let r="";for(let s=0;s<=120;s++){const o=s*Math.PI*2/120,a=32+t*8.1+Math.sin(3*o+t*.16)*8+Math.cos(2*o)*4;r+=(s?"L":"M")+(Math.cos(o)*a*1.19).toFixed(2)+" "+(Math.sin(o)*a*.8).toFixed(2)+" "}i.setAttribute("d",r+"Z"),e.append(i)}return e}function K0({document:n,window:e,content:t,look:i,setPaused:r,releaseMovement:s,returnFocus:o,onError:a=()=>{}}){Qc(t);const l=X0(t.pages.length),u=t.id+":"+ ++q0,c=[];let h=!1,f=null,d=null,g=null,_=null;const m=(D,U,V)=>{const ce=n.createElement(D);return U&&(ce.className=U),V!==void 0&&(ce.textContent=V),ce},p=m("dialog","jb-reader");p.setAttribute("aria-label",t.title);const y=m("div","jb-shell"),S=m("header","jb-toolbar"),v=m("div","jb-identity",t.series),C=m("button","jb-close","Back to library");C.type="button",C.setAttribute("aria-label","Close "+t.title+" and return to the library");const w=m("span","jb-close-glyph","×");w.setAttribute("aria-hidden","true"),C.append(w),S.append(v,C);const R=m("div","jb-binding"),b=m("div","jb-spread");b.setAttribute("aria-label","Open book"),R.append(b);const x=m("footer","jb-navigation"),M=m("button","jb-page-button","← Previous"),P=m("button","jb-page-button","Next →");M.type=P.type="button",M.setAttribute("aria-label","Previous two pages"),P.setAttribute("aria-label","Next two pages");const O=m("div","jb-navigation-center"),F=m("select","jb-contents");F.setAttribute("aria-label","Choose a pair of pages");for(let D=0;D<l.count;D++){const U=m("option","",String(D+1).padStart(2,"0")+" / "+t.pages[D*2].title.replace(/\n/g," "));U.value=String(D),F.append(U)}const B=m("p","jb-status");B.setAttribute("role","status"),B.setAttribute("aria-live","polite"),B.setAttribute("aria-atomic","true"),O.append(F,B),x.append(M,O,P);const K=m("p","jb-keyboard-note","← → turn pages · Esc returns to the library");y.append(S,R,x,K),p.append(y),n.body.append(p);const H=(D,U,V)=>{D.addEventListener(U,V),c.push(()=>D.removeEventListener(U,V))},Y=()=>{var D,U;return((U=(D=e.history.state)==null?void 0:D[Lr])==null?void 0:U.session)===u},j=()=>{var D;return!!((D=e.matchMedia)!=null&&D.call(e,"(prefers-reduced-motion: reduce)").matches)};function ae(D,U=!1){const V=m("a",U?"jb-source-link":"jb-citation",U?D.title:"["+(t.sources.indexOf(D)+1)+"]");return V.href=D.href,V.target="_blank",V.rel="noopener noreferrer",V.referrerPolicy="no-referrer",V.setAttribute("aria-label",D.title+" — opens PDF in a new tab"),V}function fe(D){var Ce;const U=t.pages[D],V=m("article","jb-paper "+(D%2?"jb-paper-right":"jb-paper-left"));if(!U)return V.setAttribute("aria-label","Blank endpaper"),V.append(m("p","jb-colophon",t.signature)),V;const ce=m("div","jb-running-head",D===0?t.edition:t.title),me=m("div","jb-page-body"+(U.kind==="title"?" jb-title-page":"")),Te=m("p","jb-eyebrow",U.eyebrow),N=m("h2","jb-heading",U.title);if(me.append(Te,N),U.kind==="title"&&me.append(j0(n)),U.paragraphs.forEach(pe=>me.append(m("p","jb-paragraph",pe))),U.kind==="sources"){const pe=m("ol","jb-sources");for(const he of U.sourceIds||[]){const we=t.sources.find(I=>I.id===he),_e=m("li","");_e.append(m("p","jb-source-authors",we.authors),ae(we,!0),m("p","jb-source-detail",we.detail)),pe.append(_e)}me.append(pe)}else if((Ce=U.sourceIds)!=null&&Ce.length){const pe=m("p","jb-citations");pe.append(m("span","","Sources ")),U.sourceIds.forEach(he=>pe.append(ae(t.sources.find(we=>we.id===he)))),me.append(pe)}U.note&&me.append(m("p","jb-margin-note",U.note));const Be=m("div","jb-folio");return Be.append(m("span","",D===0?t.signature:t.series),m("span","",String(D+1).padStart(2,"0"))),V.append(ce,me,Be),V}function ie(D=0){d==null||d.cancel(),d=null,b.replaceChildren(fe(l.spread*2),fe(l.spread*2+1));const U=l.spread*2+1,V=Math.min(U+1,t.pages.length);B.textContent="Pages "+U+"–"+V+" of "+t.pages.length,F.value=String(l.spread),M.disabled=l.spread===0,P.disabled=l.spread===l.count-1,p.scrollTop=0,D&&!j()&&b.animate&&(d=b.animate([{opacity:.35,transform:"translateX("+D*10+"px)"},{opacity:1,transform:"translateX(0)"}],{duration:180,easing:"cubic-bezier(.2,.65,.3,1)"}))}function Re(){if(Y())try{e.history.replaceState({...e.history.state,[Lr]:{session:u,book:t.id,spread:l.spread}},"",e.location.href)}catch(D){a(D)}}function Fe(D=!0,U=l.spread){if(l.disposed||h)return!1;if(l.isOpen)return L(U),!0;g=n.activeElement,l.open(U);try{s(),i.pause(),r(!0),ie(),p.showModal(),C.focus({preventScroll:!0})}catch(V){l.close(),p.open&&p.close();try{s(),i.resume()}finally{r(!1)}return a(V),!1}if(D)try{_=e.history.state;const V=_&&typeof _=="object"?_:{};e.history.pushState({...V,[Lr]:{session:u,book:t.id,spread:l.spread}},"",e.location.href)}catch(V){a(V)}return!0}function J(){var U;if(!l.close())return!1;d==null||d.cancel(),d=null,p.open&&p.close();try{s(),i.resume()}finally{r(!1)}const D=(o==null?void 0:o.isConnected)!==!1&&(o!=null&&o.focus)?o:g;return(D==null?void 0:D.isConnected)!==!1&&((U=D==null?void 0:D.focus)==null||U.call(D,{preventScroll:!0})),!0}function le(){h=!1,f!==null&&e.clearTimeout(f),f=null}function T(){if(!l.isOpen)return!1;const D=Y();if(J(),D){h=!0,f=e.setTimeout(()=>{if(Y())try{e.history.replaceState(_,"",e.location.href)}catch(U){a(U)}le()},1200);try{e.history.back()}catch(U){if(Y())try{e.history.replaceState(_,"",e.location.href)}catch(V){a(V)}le(),a(U)}}return!0}function L(D){const U=l.spread;return l.go(D)?(ie(Math.sign(l.spread-U)),Re(),!0):!1}return H(C,"click",T),H(M,"click",()=>L(l.spread-1)),H(P,"click",()=>L(l.spread+1)),H(F,"change",()=>L(Number(F.value))),H(p,"cancel",D=>{D.preventDefault(),T()}),H(p,"close",()=>{!p.open&&l.isOpen&&T()}),H(p,"keydown",D=>{if(D.altKey||D.ctrlKey||D.metaKey||Y0(D.target))return;let U;if(D.key==="ArrowRight"||D.key==="PageDown")U=l.spread+1;else if(D.key==="ArrowLeft"||D.key==="PageUp")U=l.spread-1;else if(D.key==="Home")U=0;else if(D.key==="End")U=l.count-1;else return;D.preventDefault(),L(U)}),H(e,"popstate",D=>{var V;le();const U=(V=D.state)==null?void 0:V[Lr];(U==null?void 0:U.session)===u&&U.book===t.id?l.isOpen?L(U.spread):Fe(!1,U.spread):J()}),{get isOpen(){return l.isOpen},get pendingBack(){return h},get spread(){return l.spread},open:()=>Fe(!0),close:T,go:L,element:p,dispose(){if(!l.disposed){if(le(),c.forEach(D=>D()),J(),l.dispose(),d==null||d.cancel(),Y())try{e.history.replaceState(_,"",e.location.href)}catch(D){a(D)}p.remove()}}}}const $0=n=>{var e;return!!((e=n==null?void 0:n.closest)!=null&&e.call(n,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))};function Z0({window:n,document:e,canvas:t,hint:i,reader:r,content:s,getTarget:o,canInteract:a}){const l=[];let u=null,c=!1;const h=(g,_,m,p=!1)=>{g.addEventListener(_,m,p),l.push(()=>g.removeEventListener(_,m,p))},f=()=>!c&&!r.isOpen&&!r.pendingBack&&a();function d(g){return!f()||!o(g)?!1:(u=null,i.hidden=!0,r.open())}return h(n,"keydown",g=>{g.code!=="KeyE"||g.repeat||g.altKey||g.ctrlKey||g.metaKey||$0(g.target)||d()&&(g.preventDefault(),g.stopImmediatePropagation())},!0),h(t,"mousedown",g=>{u=null,!(g.button!==0||!f()||!o(g))&&(u={x:g.clientX,y:g.clientY,locked:e.pointerLockElement===t,distance:0,dragged:!1},g.stopImmediatePropagation())},!0),h(n,"mousemove",g=>{if(!u)return;const _=u.locked?Math.hypot(g.movementX||0,g.movementY||0):Math.hypot(g.clientX-u.x,g.clientY-u.y);u.locked?u.distance+=_:u.distance=Math.max(u.distance,_),u.distance>5&&(u.dragged=!0)},!0),h(t,"click",g=>{const _=u;u=null,!(g.button!==0||!_||_.dragged)&&d(g)&&(g.preventDefault(),g.stopImmediatePropagation())},!0),h(n,"mouseup",g=>{g.target!==t&&(u=null)},!0),h(t,"mouseleave",()=>{e.pointerLockElement!==t&&(u=null)}),h(n,"blur",()=>{u=null}),h(e,"visibilitychange",()=>{e.visibilityState!=="visible"&&(u=null)}),h(i,"click",g=>{d()&&(g.preventDefault(),g.stopImmediatePropagation())},!0),{openNearby:d,updateHint(){const g=f()&&!!o();return i.classList.toggle("jb-prompt",g),g&&(i.textContent="E — Read "+s.title,i.hidden=!1),g},dispose(){c||(c=!0,u=null,l.forEach(g=>g()),i.classList.remove("jb-prompt"))}}}const zo=Object.freeze({position:Object.freeze([-.87,.782,2.35]),yaw:-.18,reach:2.2}),J0=[{x0:-.18,x1:.17,y0:0,y1:.064,z0:-.235,z1:.235},{x0:-.065,x1:-.039,y0:.002,y1:.043,z0:.198,z1:.284}];function Nl(n,e,t,i=1/0){let r=0,s=i;for(const o of["x","y","z"]){const a=n[o],l=e[o],u=t[o+"0"],c=t[o+"1"];if(![a,l,u,c].every(Number.isFinite)||u>c)return null;if(Math.abs(l)<1e-10){if(a<u||a>c)return null}else{const h=(u-a)/l,f=(c-a)/l;if(r=Math.max(r,Math.min(h,f)),s=Math.min(s,Math.max(h,f)),r>s)return null}}return s>=0?r:null}function Q0(n,e,t=[],i=zo){const r=Math.hypot(e.x,e.y,e.z);if(!Number.isFinite(r)||r<1e-10||!Number.isFinite(i.yaw)||!(i.reach>0))return null;const s={x:e.x/r,y:e.y/r,z:e.z/r},[o,a,l]=i.position,u=Math.cos(i.yaw),c=Math.sin(i.yaw),h=n.x-o,f=n.z-l,d={x:u*h-c*f,y:n.y-a,z:c*h+u*f},g={x:u*s.x-c*s.z,y:s.y,z:c*s.x+u*s.z};let _=1/0;for(const m of J0){const p=Nl(d,g,m,i.reach);p!==null&&(_=Math.min(_,p))}if(!Number.isFinite(_))return null;for(const m of t){const p=Nl(n,s,m,_);if(p!==null&&p+.022<_)return null}return{id:"table-drums",contentId:"drums",distance:_}}function em(n,e,t,i){const r=i(n,e.filter(a=>a.id!=="table-drums"),t),s=W0({THREE:f0,content:Bo,position:zo.position,yaw:zo.yaw});n.add(s.object);let o=!1;return{book:s,objects:[...r.objects,s.object],dispose(){o||(o=!0,r.dispose(),s.dispose())}}}function tm(n){const{camera:e,solids:t,legacyFactory:i,...r}=n,{document:s,window:o,canvas:a,hint:l,look:u,setPaused:c,releaseMovement:h,returnFocus:f,canInteract:d}=n;let g=!1;const _=K0({document:s,window:o,content:Bo,look:u,releaseMovement:h,returnFocus:f,setPaused:C=>{C?(g=!s.body.classList.contains("reading-open"),s.body.classList.add("reading-open")):g&&(s.body.classList.remove("reading-open"),g=!1),c(C)}}),m=new z;function p(C){if(e.updateMatrixWorld(),C&&s.pointerLockElement!==a&&Number.isFinite(C.clientX)&&Number.isFinite(C.clientY)){const w=a.getBoundingClientRect();if(!w.width||!w.height)return null;const R=(C.clientX-w.left)/w.width,b=(C.clientY-w.top)/w.height;if(R<0||R>1||b<0||b>1)return null;m.set(R*2-1,1-b*2,.5).unproject(e).sub(e.position).normalize()}else e.getWorldDirection(m);return Q0(e.position,m,t)}const y=i({...r,canInteract:()=>!_.isOpen&&!_.pendingBack&&d(),getTarget:()=>{const C=r.getTarget();return(C==null?void 0:C.id)==="table-drums"?null:C}}),S=Z0({window:o,document:s,canvas:a,hint:l,reader:_,content:Bo,getTarget:p,canInteract:()=>!y.isOpen&&d()});let v=!1;return{get isOpen(){return _.isOpen||y.isOpen},updateHint(){if(!v){if(_.isOpen){l.hidden=!0;return}S.updateHint()||y.updateHint()}},close(){_.isOpen?_.close():y.close()},dispose(){v||(v=!0,S.dispose(),_.dispose(),y.dispose())}}}function nm({tick:n,request:e,cancel:t,now:i}){const r=new Set;let s=null,o=!1,a=null;function l(){!o&&!r.size&&s===null&&(s=e(u))}function u(c){if(s=null,o||r.size)return;const h=a===null?0:Math.max(0,(c-a)/1e3);a=c,n(c,h),l()}return{start(){a=i(),l()},setPaused(c,h){h?r.add(c):r.delete(c),r.size&&s!==null&&(t(s),s=null),a=null,l()},get paused(){return o||r.size>0},dispose(){o=!0,s!==null&&t(s),s=null}}}const Dr=Object.freeze({href:"https://pazneria.github.io/",plaque:"EXIT",plaqueSubtitle:"HOME",label:"Leave for Jordan's homepage",openPrompt:"E · Open the exit door",prompt:"E · Leave, or walk through",shortcut:"Alt+X",instructions:"Approach the oak door beside the stair foot to open it, then walk through to leave. E or a deliberate click opens the door, or leaves when open. The controls exit link and Alt+X return to Jordan's homepage."}),wo=Object.freeze({id:"library-home-exit",position:Object.freeze([6.8963,0,7.75]),rotation:-Math.PI/2,width:1.3,height:2.42,bounds:Object.freeze({x0:6.7,x1:6.93,y0:.08,y1:2.58,z0:6.94,z1:8.56}),reach:2.2}),eu=Object.freeze({x0:7,x1:7.5,z0:7.07,z1:8.43,height:2.46,threshold:7.62,landingEnd:8.55});function im({anchor:n,portal:e,setAngle:t=()=>{}}){const i=n.position[0]-35e-5,r=n.position[2]+n.width/2,s=Math.PI/2,o=.111,a=8;let l=0,u=0,c=!1;function h(g){return g.y>=-.15&&g.y<.35}function f(g,_){return h(g)&&g.x+_>i&&g.x-_<i+n.width&&g.z+_>r-n.width&&g.z-_<r+.12}function d(g,_,m,p,y){if(m>=n.height||m+p<=0)return!1;const S=n.rotation-l,v=Math.cos(S),C=Math.sin(S),w=g-i,R=_-r,b=w*v-R*C,x=w*C+R*v,M=Math.max(-n.width,Math.min(0,b)),P=Math.max(0,Math.min(o,x));return(b-M)**2+(x-P)**2<y**2}return{get angle(){return l},get passable(){return l>=1.48},use(){return c=!0,l>=1.48},update(g,_,m=.28){const p=Math.hypot(_.x-i,_.z-n.position[2]),y=h(_)&&p<2.15,S=f(_,m);(!h(_)||p>2.65)&&!S&&(c=!1);const v=y||S||c?s:0;if(!Number.isFinite(g)||g<=0)return;const C=l,w=d(_.x,_.z,_.y,1.75,m),R=l-v,b=u+a*R,x=Math.exp(-a*g);l=v+(R+b*g)*x,u=(u-a*b*g)*x,Math.abs(l-v)<5e-4&&Math.abs(u)<.004&&(l=v,u=0),l=Math.max(0,Math.min(s,l)),!w&&d(_.x,_.z,_.y,1.75,m)&&(l=C,u=0),t(-l)},blocks:d,crossed(g,_,m=.28){return l>.01&&!d(_.x,_.z,_.y,1.75,m)&&h(g)&&h(_)&&g.x<=e.threshold&&_.x>e.threshold&&Math.hypot(_.x-g.x,_.z-g.z)<=.45&&_.z>=e.z0+m&&_.z<=e.z1-m}}}function rm(n,e,t,i,r=()=>document.createElement("canvas")){const s=new Rn;s.name="Library exit",s.position.set(...t.position),s.rotation.y=t.rotation;const o=new Fo(()=>.37),a=o.frame(0,0,0);a.m.multiply(new je().makeScale(1,1,.7));const{width:l,height:u}=t,{oak:c,dark:h,brass:f}=e,d=new Rn;d.name="Hinged oak door leaf",d.position.set(l/2,0,35e-5);const g=new Fo(()=>.37),_=g.frame(-l/2,0,-35e-5);_.m.multiply(new je().makeScale(1,1,.7));let m=_;m.box(h,l,u-.04,.055,0,u/2,.028);for(const b of[-l/2+.065,l/2-.065])m.box(c,.13,u,.045,b,u/2,.082);for(const[b,x]of[[.11,.22],[.84,.13],[u-.09,.18]])m.box(c,l-.26,x,.045,0,b,.082);m.box(c,.07,1.33,.045,0,1.575,.082);for(const[b,x,M,P]of[[-.26,1.575,.42,1.28],[.26,1.575,.42,1.28],[0,.49,.96,.51]]){m.box(c,M,P,.018,b,x,.063);for(const O of[-1,1])m.box(h,.018,P+.04,.014,b+O*(M/2+.009),x,.081),m.box(h,M+.04,.018,.014,b,x+O*(P/2+.009),.081)}m=a;for(const b of[-1,1])m.box(h,.13,u+.02,.09,b*(l/2+.085),(u+.02)/2,.067),m.box(c,.1,u+.02,.035,b*(l/2+.085),(u+.02)/2,.129),m.box(c,.16,.24,.13,b*(l/2+.085),.12,.083);m.box(h,l+.3,.18,.09,0,u+.09,.067),m.box(c,l+.33,.1,.035,0,u+.11,.129),m.box(c,l+.37,.045,.15,0,u+.2025,.08),m=_,m.box(f,.045,.19,.014,-.47,1.03,.115),m.cyl(f,.018,.018,.025,-.47,1.06,.14,8,Math.PI/2),m.box(f,.13,.025,.025,-.425,1.06,.158),m=a;for(const b of[.32,1.2,2.1])m.cyl(f,.018,.018,.11,l/2,b,5e-4,8);const p=o.frame(0,0,0),y=eu;for(const b of[y.z0+.018,y.z1-.018])p.box(c,.012,y.height-.024,.476,b-t.position[2],(y.height-.024)/2,t.position[0]-7.25);p.box(c,y.z1-y.z0-.024,.012,.476,0,y.height-.018,t.position[0]-7.25),p.sbox(e.stone,y.z1-y.z0,.16,y.landingEnd-y.x0,0,-.08,t.position[0]-(y.x0+y.landingEnd)/2),p.box(f,y.z1-y.z0-.048,.012,.05,0,.006,t.position[0]-7.04);const S=r();S.width=512,S.height=256;const v=S.getContext("2d");v.fillStyle="#30271b",v.fillRect(0,0,512,256),v.strokeStyle="#b99a60",v.lineWidth=4,v.strokeRect(12,12,488,232),v.fillStyle="#efdab0",v.textAlign="center",v.textBaseline="middle",v.font="60px Georgia, serif",v.fillText(i.plaque,256,102),v.font="25px Georgia, serif",v.fillText(i.plaqueSubtitle,256,172);const C=new rr(S);C.colorSpace=mt;const w=new ei({map:C,roughness:.62,emissive:15586976,emissiveMap:C,emissiveIntensity:.18});m.box(f,.45,.23,.012,0,2.51,.172),m.plane(w,.426,.206,0,2.51,.18),g.finish(d),s.add(d),o.finish(s),s.traverse(b=>{b.isMesh&&(b.castShadow=!1,b.receiveShadow=!0)}),n.add(s);const R=im({anchor:t,portal:y,setAngle:b=>{d.rotation.y=b}});return{group:s,leaf:d,door:R,solids:o.solids.map(b=>({x0:t.position[0]-b.z1,x1:t.position[0]-b.z0,y0:b.y0,y1:b.y1,z0:t.position[2]+b.x0,z1:t.position[2]+b.x1})),materials:[w],textures:[C]}}function sm({document:n,window:e,canvas:t,controls:i,readerFooter:r,content:s,getTarget:o,canInteract:a,beforeLeave:l,useDoor:u=()=>!0,getPrompt:c=()=>s.prompt}){let h=!1,f=!1,d=null;const g=[],_=[],m=t.getAttribute("aria-describedby");function p(b,x,M,P){b.addEventListener(x,M,P),g.push(()=>b.removeEventListener(x,M,P))}function y(b){if(b==null||b.preventDefault(),b==null||b.stopPropagation(),f||h)return!1;f=!0;try{l()}finally{e.addEventListener("pageshow",x=>{x.persisted&&e.location.reload()},{once:!0}),e.location.assign(s.href)}return!0}function S(b){b==null||b.preventDefault(),b==null||b.stopPropagation(),!(f||h)&&u()&&y()}function v(b,x){const M=n.createElement("a");return M.href=s.href,M.textContent=s.label,M.className=`library-exit-link ${x}`,M.setAttribute("aria-keyshortcuts",s.shortcut),p(M,"click",y),b.append(M),_.push(M),M}const C=v(n.body,"library-exit-keyboard");i&&v(i,"library-exit-controls"),r&&v(r,"library-exit-reader");const w=n.createElement("span");w.id="library-exit-instructions",w.className="library-exit-instructions",w.textContent=s.instructions,n.body.append(w),_.push(w),t.setAttribute("aria-describedby",[m,w.id].filter(Boolean).join(" "));const R=n.createElement("button");return R.id="exit-hint",R.type="button",R.hidden=!0,R.textContent=s.prompt,R.setAttribute("aria-label",s.label),n.body.append(R),_.push(R),p(R,"click",b=>{a()&&o()&&S(b)}),p(e,"keydown",b=>{var x,M;if(!(b.repeat||b.defaultPrevented||b.isComposing)){if(b.code==="KeyX"&&b.altKey&&!b.ctrlKey&&!b.metaKey&&!((M=(x=b.target)==null?void 0:x.closest)!=null&&M.call(x,'input, textarea, select, [contenteditable], [role="textbox"]'))){y(b);return}b.code==="KeyE"&&!b.altKey&&!b.ctrlKey&&!b.metaKey&&!fa(b.target)&&a()&&o()&&S(b)}}),p(t,"mousedown",b=>{d=b.button===0&&a()&&o()?{x:b.clientX,y:b.clientY,travel:0}:null}),p(e,"mousemove",b=>{d&&(d.travel+=n.pointerLockElement===t?Math.hypot(b.movementX||0,b.movementY||0):Math.hypot(b.clientX-d.x,b.clientY-d.y),d.x=b.clientX,d.y=b.clientY)}),p(t,"click",b=>{const x=d&&d.travel<=5;d=null,x&&b.button===0&&a()&&o()&&S(b)}),p(e,"blur",()=>{d=null,R.hidden=!0}),p(n,"pointerlockchange",()=>{d=null,R.hidden=!0}),{leave:y,keyboardLink:C,updateHint(){R.hidden=h||!a()||!o(),R.textContent=c(),R.setAttribute("aria-label",R.textContent)},dispose(){if(!h){h=!0,d=null;for(const b of g)b();for(const b of _)b.remove();m===null?t.removeAttribute("aria-describedby"):t.setAttribute("aria-describedby",m)}}}}function tu({scene:n,renderer:e,environmentTarget:t,materials:i=[],extraMaterials:r=[]}){const s=new Set,o=new Set([...i,...r]),a=new Set,l=new Set,u=new Set,c=h=>{h!=null&&h.isTexture?a.add(h):Array.isArray(h)&&h.forEach(c)};n.traverse(h=>{var f,d;h.geometry&&s.add(h.geometry);for(const g of[].concat(h.material||[]))o.add(g);h.isInstancedMesh&&u.add(h);for(const g of[(f=h.shadow)==null?void 0:f.map,(d=h.shadow)==null?void 0:d.mapPass])g&&l.add(g)}),t&&l.add(t),c(n.environment),c(n.background);for(const h of o){for(const f of Object.values(h))c(f);for(const f of Object.values(h.uniforms||{}))c(f.value)}for(const h of l)for(const f of h.textures||[h.texture])a.delete(f);n.environment=null,n.overrideMaterial=null;for(const h of u)h.dispose();for(const h of s)h.dispose();for(const h of o)h.dispose();for(const h of a)h.dispose(),h.isCanvasTexture&&(h.image=null);for(const h of l)h.dispose();e.dispose(),n.clear()}const om=20261008;function da(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function yi(n,e){let t=-.7;const i=Math.max(0,-n-13);return t-=70*(1-Math.exp(-i/140)),t+=(Math.sin(n*.011+e*.017)*10+Math.sin(e*.029+1.3)*Math.cos(n*.013)*12)*Math.min(1,i/120),n<-420&&(t+=Math.min(140,(-n-420)*.22)*(.75+.18*Math.sin(e*.009+.5)+.07*Math.sin(e*.043))),n>8&&(t+=(n-8)*.35),Math.abs(e)>30&&n>-60&&(t+=(Math.abs(e)-30)*.12),t}function am(n,e,t=0){return n+t>-13&&n-t<9&&e+t>-12&&e-t<11}function lm(n,e,t=0){const i=10+Math.max(0,-n-13)*.15;return n<-13&&n>-125&&Math.abs(e-3)<i+t}function cm(){const n=da(om),e=[],t=[[-22,-18,12,"oak"],[-34,-29,15,"oak"],[-51,-24,14,"oak"],[-25,26,13,"oak"],[-39,38,16,"oak"],[-56,32,14,"oak"],[-20,44,12,"birch"],[12,43,13,"birch"],[-27,63,16,"birch"],[-61,-43,15,"birch"]];for(const[l,u,c,h]of t)e.push({x:l,z:u,height:c,species:h,tier:"near",yaw:n()*Math.PI*2,width:.9+n()*.2});[[-91,-65,34,29,20],[-119,67,32,35,20],[-202,-92,68,49,32],[-211,96,74,49,32],[-376,-190,110,85,54],[-403,155,125,93,60],[-615,-95,99,100,44],[-643,235,100,85,36],[-244,3,44,22,22]].forEach(([l,u,c,h,f],d)=>{for(let g=0;g<f;g++){const _=n()*Math.PI*2,m=Math.sqrt(n()),p=l+Math.cos(_)*m*c,y=u+Math.sin(_)*m*h,S=8+n()*9;lm(p,y,S*.34)||e.push({x:p,z:y,height:S,species:"woodland",tier:d<4||d===8?"middle":"far",grove:d,yaw:n()*Math.PI*2,width:.8+n()*.4})}});const r=[],s=[],o=[];[[-16.8,-5.6,3,6.2,80],[-19.2,13.8,4.8,4.7,72],[-31,18.4,7,4.3,64],[-1.5,18.4,8,4.1,64]].forEach(([l,u,c,h,f],d)=>{for(let g=0;g<f;g++){const _=n()*Math.PI*2,m=Math.sqrt(n()),p=l+Math.cos(_)*m*c,y=u+Math.sin(_)*m*h;am(p,y,.5)||r.push({x:p,z:y,height:.24+n()*.36,width:.6+n()*.6,yaw:n()*Math.PI*2,bed:d})}});for(const[l,u,c]of[[-15.1,-10.5,.8],[-17.3,-12,1.1],[-20.2,-13.8,1.3],[-16.5,13.2,.9],[-18.1,15.2,1.1],[-21.2,17,1.4],[-29.2,22.2,1.3],[-33,24.4,1.7],[-37,26.1,1.5],[-8.5,19.8,1.1],[-5.4,21.8,1.2],[5.7,21,1]])s.push({x:l,z:u,height:c*.6,width:c,yaw:n()*Math.PI*2});for(const[l,u,c]of[[-14.2,-8,.65],[-16.4,-9.1,1.1],[-18.6,-10.6,.8],[-16,13.4,.7],[-20,15.3,1.3],[-21.7,16,.85],[-29,23,1.8],[-32.2,24,1.1],[-34,25,1.5],[-47,-17,2],[-50,-18.1,1.1],[-43,27,1.8]])o.push({x:l,z:u,height:c*.38,width:c,yaw:n()*Math.PI*2});return{trees:e,grass:r,shrubs:s,stones:o}}function Fl(n,e=null){return new Ut({name:e?"exterior-ground":"exterior-vegetation-stone",vertexColors:!0,defines:e?{EXTERIOR_GROUND:1}:{},uniforms:{sunDirection:{value:n.clone().normalize()},hazeColor:{value:new Oe(.84,.61,.48)},...e?{map:{value:e}}:{}},vertexShader:`
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
      }`})}function um(){const e=new Uint8Array(65536),t=da(407);for(let r=0;r<128;r++)for(let s=0;s<128;s++){const o=207+t()*38+7*Math.sin(s*.83+Math.sin(r*.24)),a=(r*128+s)*4;e[a]=o,e[a+1]=o+3,e[a+2]=o-4,e[a+3]=255}const i=new ua(e,128,128);return i.name="hillside-ground-grain-128",i.wrapS=i.wrapT=Ti,i.magFilter=Bt,i.minFilter=Jt,i.generateMipmaps=!0,i.anisotropy=4,i.needsUpdate=!0,i}function Ol(n,e=[]){const t=[...e];for(const[i,r,s]of n)for(let o=0;o<=s;o++)t.push(i+(r-i)*o/s);return[...new Set(t)].sort((i,r)=>i-r)}function hm(){const n=Ol([[-1200,-420,20],[-420,-100,20],[-100,-35,12],[-35,20,32],[20,100,10],[100,600,12]],[-13,8]),e=Ol([[-900,-180,12],[-180,-45,10],[-45,45,36],[45,180,10],[180,900,12]],[-30,30]),t=[],i=[],r=[],s=[],o=[],a=new Oe(.25,.31,.115),l=new Oe(.37,.32,.16),u=new Oe(.23,.295,.12),c=new Oe,h=new z;for(const d of e)for(const g of n){t.push(g,yi(g,d),d),h.set(yi(g-.5,d)-yi(g+.5,d),1,yi(g,d-.5)-yi(g,d+.5)).normalize(),i.push(h.x,h.y,h.z);const _=.5+.25*Math.sin(g*.039+Math.sin(d*.034)*1.5)+.18*Math.sin(d*.071+g*.018);c.copy(a).lerp(l,_);const m=Math.exp(-(((g+12)/19)**2)-(d/30)**2);c.lerp(u,m*.6),r.push(c.r,c.g,c.b),s.push(g/4,d/4)}for(let d=0;d<e.length-1;d++)for(let g=0;g<n.length-1;g++){const _=d*n.length+g,m=_+1,p=_+n.length,y=p+1;o.push(_,p,m,m,p,y)}const f=new ct;return f.setAttribute("position",new Ye(t,3)),f.setAttribute("normal",new Ye(i,3)),f.setAttribute("color",new Ye(r,3)),f.setAttribute("uv",new Ye(s,2)),f.setIndex(o),f.computeBoundingBox(),f.computeBoundingSphere(),f}function pa(n,e,t=.1){if(n.index){const a=n;n=n.toNonIndexed(),a.dispose()}const i=n.attributes.position,r=new Float32Array(i.count*3),s=new Oe(e),o=new Oe;for(let a=0;a<i.count;a++){const l=1+t*Math.sin(i.getX(a)*27+i.getY(a)*19+i.getZ(a)*23);o.copy(s).multiplyScalar(l),r.set([o.r,o.g,o.b],a*3)}return n.setAttribute("color",new yt(r,3)),n.deleteAttribute("uv"),n}function Ws(n){const e=ha(n,!1);for(const t of n)t.dispose();return e.computeBoundingBox(),e.computeBoundingSphere(),e}function er(n,e,t,i,r,s=6){const o=new z(...n),a=new z(...e),l=a.clone().sub(o),u=new sr(i,t,l.length(),s,1,!0);return u.applyQuaternion(new jt().setFromUnitVectors(new z(0,1,0),l.normalize())),u.translate(...o.add(a).multiplyScalar(.5).toArray()),pa(u,r,.14)}function Ei(n,e,t,i,r,s,o,a=1){const l=new ks(1,a),u=l.attributes.position;for(let c=0;c<u.count;c++){const h=1+.1*Math.sin(u.getX(c)*9+u.getY(c)*7+u.getZ(c)*11);u.setXYZ(c,u.getX(c)*h,u.getY(c)*h,u.getZ(c)*h)}return l.scale(i,r,s),l.translate(n,e,t),pa(l,o,.08)}function fm(){const n=[er([0,0,0],[.018,.63,-.018],.035,.017,7430474,8)];return[[-.2,.65,.04,.19,.18,.2],[.18,.69,.02,.22,.2,.18],[-.03,.69,-.19,.2,.21,.18],[.03,.77,.19,.21,.2,.18],[-.11,.86,-.02,.19,.21,.21],[.1,.91,.03,.17,.19,.17],[.01,.78,-.05,.25,.21,.22]].forEach(([t,i,r,s,o,a],l)=>{n.push(er([.01,.34+l*.025,0],[t,i-.035,r],.014,.005,7889994)),n.push(Ei(t,i,r,s,o,a,[7635531,8556627,6781763,9147481][l%4]))}),Ws(n)}function dm(){const n=[er([0,0,0],[-.022,.9,.01],.019,.006,12695706,7)];for(let e=0;e<5;e++){const t=e*2.4,i=.57+e*.08,r=Math.sin(t)*.08,s=Math.cos(t)*.07;n.push(er([0,i-.2,0],[r,i,s],.007,.002,10392951,5)),n.push(Ei(r,i,s,.13,.19,.12,e%2?10329700:8098386))}return Ws(n)}function Bl(n=!1){const e=n?6:8,t=n?[[0,.34],[.24,.49],[.29,.7],[.18,.93],[0,1.04]]:[[0,.32],[.24,.45],[.3,.64],[.26,.83],[.15,1],[0,1.06]],i=new Bs(t.map(([s,o])=>new Ge(s,o)),e),r=i.attributes.position;for(let s=0;s<r.count;s++){const o=1+.12*Math.sin(r.getX(s)*17+r.getZ(s)*11+r.getY(s)*13);r.setXYZ(s,r.getX(s)*o,r.getY(s),r.getZ(s)*o)}return Ws([pa(i,7899984),er([0,0,0],[0,.52,0],.027,.016,7890768,n?4:5)])}function pm(){return Ws([Ei(-.35,.38,.03,.55,.6,.51,6782280,0),Ei(.3,.47,-.04,.62,.7,.54,8491607,0),Ei(.02,.5,.22,.53,.66,.49,8886107,0)])}function mm(){return Ei(0,.2,0,.6,.75,.5,11182474,0)}function gm(){const n=[],e=[],t=new Oe(8227656),i=new Oe(11510376);for(let s=0;s<4;s++){const o=s*2.4,a=Math.cos(o),l=Math.sin(o),u=.65+s%3*.17,c=.065,h=[[-l*c,0,a*c],[l*c,0,-a*c],[a*.16-l*c*.5,u*.6,l*.16+a*c*.5],[a*.3,u,l*.3]];for(const f of[0,1,2,1,3,2,2,1,0,2,3,1]){n.push(...h[f]);const d=t.clone().lerp(i,h[f][1]/u);e.push(d.r,d.g,d.b)}}const r=new ct;return r.setAttribute("position",new Ye(n,3)),r.setAttribute("color",new Ye(e,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),r}function _m(n){const e=new Ut({name:"exterior-sunset",side:gt,depthWrite:!1,uniforms:{sunDir:{value:n.clone()}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 zen = vec3(0.16,0.27,0.55); vec3 hor = vec3(1.25,0.74,0.45); vec3 below = vec3(0.55,0.42,0.36);
        vec3 col = mix(hor, zen, pow(clamp(h,0.0,1.0), 0.5));
        col = mix(col, below, 1.0 - smoothstep(-0.2,0.0,h));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.55,0.25)*pow(s,5.0)*0.7 + vec3(1.0,0.75,0.45)*pow(s,90.0)*2.5 + smoothstep(0.9993,0.9996,s)*vec3(18.0,12.0,7.0);
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),t=new et(new Pi(1200,32,16),e);return t.name="exterior-sky",t.frustumCulled=!1,t.renderOrder=-1,t.matrixAutoUpdate=!1,t}function Gi(n,e,t,i,r){const s=new Os(t,i,e.length);s.name=n;const o=new je,a=new jt,l=new z,u=new z,c=new z(0,1,0),h=new Oe,f=da(r);return e.forEach((d,g)=>{const{x:_,z:m,height:p,width:y,yaw:S}=d;l.set(_,yi(_,m)-.045,m),a.setFromAxisAngle(c,S);const v=d.species?p*y:y;u.set(v,p,v),o.compose(l,a,u),s.setMatrixAt(g,o);const C=f();h.setRGB(.88+C*.23,.92+C*.14,.88+C*.11),s.setColorAt(g,h)}),s.instanceMatrix.setUsage(Ji),s.instanceMatrix.needsUpdate=!0,s.instanceColor.setUsage(Ji),s.instanceColor.needsUpdate=!0,s.matrixAutoUpdate=!1,s.computeBoundingBox(),s.computeBoundingSphere(),s}function xm(n){const e=new Set,t=new Set,i=new Set,r=[];let s=0,o=0,a=0;n.traverse(c=>{var _,m;if(!c.isMesh)return;const h=c.geometry,f=c.material,d=c.isInstancedMesh?c.count:1,g=(h.index?h.index.count:h.attributes.position.count)/3;if(o+=g*d,a+=c.isInstancedMesh?d:0,!e.has(h)){for(const p of Object.values(h.attributes))s+=p.array.byteLength;s+=((_=h.index)==null?void 0:_.array.byteLength)||0,e.add(h)}c.instanceMatrix&&(s+=c.instanceMatrix.array.byteLength),c.instanceColor&&(s+=c.instanceColor.array.byteLength),t.add(f);for(const p of Object.values(f.uniforms||{}))(m=p.value)!=null&&m.isTexture&&i.add(p.value);r.push({name:c.name,instances:d,templateTriangles:g,submittedTriangles:g*d})});let l=0,u=0;for(const c of i){const{width:h,height:f,data:d}=c.image;l+=d.byteLength;let g=h,_=f;do{if(u+=g*_*4,!c.generateMipmaps||g===1&&_===1)break;g=Math.max(1,g>>1),_=Math.max(1,_>>1)}while(!0)}return{triangles:o,drawCallsUpperBound:r.length,instances:a,geometries:e.size,materials:t.size,textures:i.size,bufferBytes:s,textureBytes:l,textureBytesWithMipmaps:u,batches:r}}function vm({sunDirection:n}){const e=new Rn;e.name="hillside-exterior",e.matrixAutoUpdate=!1;const t=cm(),i=Fl(n),r=um(),s=new et(hm(),Fl(n,r));s.name="exterior-continuous-terrain",s.matrixAutoUpdate=!1,e.add(_m(n),s);const o=fm(),a=dm(),l=Bl(),u=Bl(!0);for(const f of["oak","birch"]){const d=t.trees.filter(g=>g.species===f);e.add(Gi(`exterior-near-${f}`,d,f==="oak"?o:a,i,f==="oak"?16:23))}for(const[f,d]of[["middle",[0,2]],["middle",[1,3,8]],["far",[4,6]],["far",[5,7]]]){const g=t.trees.filter(_=>d.includes(_.grove));e.add(Gi(`exterior-${f}-groves-${d.join("-")}`,g,f==="middle"?l:u,i,70+d[0]))}const c=gm();for(let f=0;f<4;f++){const d=t.grass.filter(g=>g.bed===f);e.add(Gi(`exterior-meadow-bed-${f}`,d,c,i,30+f))}e.add(Gi("exterior-low-shrubs",t.shrubs,pm(),i,17)),e.add(Gi("exterior-sandstone-outcrops",t.stones,mm(),i,12)),e.traverse(f=>{f.castShadow=!1,f.receiveShadow=!1}),e.updateMatrixWorld(!0);const h=xm(e);return e.userData.exteriorBudget=h,{group:e,layout:t,budget:h,dispose(){e.removeFromParent();const f=new Set,d=new Set;e.traverse(g=>{g.geometry&&f.add(g.geometry),g.material&&d.add(g.material),g.isInstancedMesh&&g.dispose()}),f.forEach(g=>g.dispose()),d.forEach(g=>g.dispose()),r.dispose()}}}function Mm({document:n,window:e,onCancel:t=()=>{}}){var x;const i=n.getElementById("loading"),r=n.getElementById("loading-status"),s=n.getElementById("loading-retry"),o=n.getElementById("loading-error");(x=e.__libraryBootErrorCleanup)==null||x.call(e);const a=e.pazneriaRoomHandoff;let l="loading",u=null,c=null,h=!1,f=!1,d=null,g=null;function _(){d==null||d.disconnect(),d=null,g=null}function m(){var P;if(!g||a!=null&&a.active)return;const M=g;_(),n.visibilityState==="visible"&&n.hasFocus()&&((P=n.getElementById("c"))==null||P.focus({preventScroll:!0})),M()}const p=()=>Object.assign(new Error("Library loading cancelled"),{name:"AbortError"});function y(){u&&(e.cancelAnimationFrame(u.frame),u.timer!==null&&e.clearTimeout(u.timer),u.reject(p()),u=null)}function S(){c!==null&&e.clearTimeout(c),c=null,l==="ready"&&(i.hidden=!0)}function v(){f||h||l!=="loading"||(f=!0,l="cancelled",y(),_(),a==null||a.fail(),t())}function C(){_(),l==="loading"?v():S()}function w(M){f&&M.persisted&&e.location.reload()}function R(){h||f||(l="error",y(),_(),a==null||a.fail(),S(),i.hidden=!1,i.classList.remove("is-ready"),i.dataset.state="error",i.setAttribute("aria-busy","false"),r.textContent="Library could not load.",o.hidden=s.hidden=!1)}const b=()=>e.location.reload();return s.addEventListener("click",b),e.addEventListener("pagehide",C),e.addEventListener("pageshow",w),i.addEventListener("transitionend",S),{get cancelled(){return f},get state(){return l},async stage(M,P){if(h||f||l!=="loading")throw p();if(!Number.isInteger(M)||M<0||M>3)throw new RangeError("Invalid loading stage");if(i.dataset.stage=String(M),r.textContent=P,await new Promise((O,F)=>{u={frame:null,timer:null,reject:F},u.frame=e.requestAnimationFrame(()=>{u.timer=e.setTimeout(()=>{u=null,O()},0)})}),h||f)throw p()},ready(M=()=>{}){var P,O;if(!(h||f||l!=="loading")){if(l="ready",i.dataset.stage="4",i.dataset.state="ready",i.setAttribute("aria-busy","false"),r.textContent="Ready",(P=e.__libraryBootErrorCleanup)==null||P.call(e),a!=null&&a.active){i.hidden=!0,g=M,d=new e.MutationObserver(m),d.observe(n.documentElement,{attributes:!0,attributeFilter:["data-room-handoff"]}),a.ready(),m();return}M(),i.classList.add("is-ready"),(O=e.matchMedia)!=null&&O.call(e,"(prefers-reduced-motion: reduce)").matches?S():c=e.setTimeout(S,240)}},fail:R,dispose(){var M;h||(h=!0,y(),_(),a==null||a.fail(),S(),(M=e.__libraryBootErrorCleanup)==null||M.call(e),s.removeEventListener("click",b),e.removeEventListener("pagehide",C),e.removeEventListener("pageshow",w),i.removeEventListener("transitionend",S))}}}const wt={scene:null,renderer:null,environmentTarget:null,materials:null,cleanup:null};let zl=!1;function nu(){var n;zl||(zl=!0,wt.cleanup?wt.cleanup():wt.scene&&wt.renderer?tu({scene:wt.scene,renderer:wt.renderer,environmentTarget:wt.environmentTarget,materials:Object.values(wt.materials||{})}):(n=wt.renderer)==null||n.dispose())}const Wn=Mm({document,window,onCancel:nu});window.__libraryLoading=Wn;async function ym(){var se;await Wn.stage(0,"Preparing library");const n=document.getElementById("c"),e=new Xc({canvas:n,antialias:!0,powerPreference:"high-performance"});wt.renderer=e;const t=Math.min(window.devicePixelRatio||1,1);let i=t;e.setPixelRatio(i),e.setSize(window.innerWidth,window.innerHeight),e.toneMapping=ko,e.toneMappingExposure=1.05,e.outputColorSpace=mt,e.shadowMap.enabled=!0,e.shadowMap.type=Ts,e.shadowMap.autoUpdate=!1;const r=new ca;wt.scene=r,r.background=new Oe(9075306);const s=new At(70,window.innerWidth/window.innerHeight,.05,2500);s.rotation.order="YXZ";const o=new ys(e),a=new d0,l=o.fromScene(a,.04);wt.environmentTarget=l,r.environment=l.texture,a.dispose(),o.dispose(),r.environmentIntensity=.22,await Wn.stage(1,"Building room");const u=Yn(20261006),c=y0();wt.materials=c;const h=new T0(Yn(77)),f=S0(c,h,u,eu);f.B.finish(r);const d=h.build(_0(31));r.add(d),em(r,Il,Pl,R0);const g=rm(r,c,wo,Dr),_=[...f.B.solids,...g.solids];h.mats.length=h.cols.length=h.vars.length=0,await Wn.stage(2,"Adding scenery");const m=new z(-.9,.4,.14).normalize(),p=new Zc(16757611,8);p.target.position.set(-2,3,-1),p.position.copy(p.target.position).addScaledVector(m,60),p.castShadow=!0,p.shadow.mapSize.set(4096,4096);const y=p.shadow.camera;y.left=-17,y.right=17,y.top=15,y.bottom=-15,y.near=20,y.far=100,y.updateProjectionMatrix(),p.shadow.bias=-4e-4,p.shadow.normalBias=.025,r.add(p,p.target);const S=new Kc(13227775,6964264,.42);r.add(S);const v=new bs(16754792,11,24,1.2);v.position.set(3,3.6,-.8),r.add(v);const C=[];for(const k of f.lights){const ne=new bs(k.c,k.i,k.d,2);ne.position.copy(k.p),ne.userData=k,r.add(ne),C.push(ne)}const w=vm({sunDirection:m});r.add(w.group);const R=m.clone().negate();{const k=[],ne=[];for(const ye of f.windows.slice(0,4))for(let Ae=0;Ae<4;Ae++){const Pe=ye[Ae],xe=ye[(Ae+1)%4],qe=Pe.clone().addScaledVector(R,12),ze=xe.clone().addScaledVector(R,12);for(const[Ke,G,ge]of[[Pe,0,0],[xe,0,1],[ze,1,1],[Pe,0,0],[ze,1,1],[qe,1,0]])k.push(Ke.x,Ke.y,Ke.z),ne.push(G,ge)}const ue=new ct;ue.setAttribute("position",new Ye(k,3)),ue.setAttribute("uv",new Ye(ne,2));const Ue=new Ut({transparent:!0,depthWrite:!1,blending:Zi,side:Rt,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float t; varying vec2 vUv; varying vec3 vW;
      void main(){ float along = vUv.x; float across = vUv.y;
        float a = pow(1.0-along, 1.6) * smoothstep(0.0,0.04,along) * smoothstep(0.0,0.25,across) * smoothstep(1.0,0.75,across);
        float n = 0.75 + 0.25*sin(vW.x*1.7 + vW.y*2.3 + t*0.3) * sin(vW.z*1.3 - t*0.2);
        float fadeFloor = smoothstep(0.0, 0.6, vW.y);
        gl_FragColor = vec4(vec3(1.0,0.72,0.42)*a*n*0.11*fadeFloor, 1.0); }`}),te=new et(ue,Ue);te.frustumCulled=!1,te.renderOrder=5,r.add(te),window.__shafts=Ue}let b;{const k=Yn(9),ne=[],re=[];for(const te of f.windows)for(let ye=0;ye<420;ye++){const Ae=k(),Pe=k(),xe=te[0].clone().lerp(te[1],Ae).lerp(te[3].clone().lerp(te[2],Ae),Pe).addScaledVector(R,.5+k()*11);xe.y<.1||xe.y>10||xe.x>6.9||xe.z<-9.9||xe.z>8.9||(ne.push(xe.x,xe.y,xe.z),re.push(k()*100))}const ue=new ct;ue.setAttribute("position",new Ye(ne,3)),ue.setAttribute("phase",new Ye(re,1)),b=new Ut({transparent:!0,depthWrite:!1,blending:Zi,uniforms:{t:{value:0},map:{value:M0()},scale:{value:window.innerHeight*.5}},vertexShader:`uniform float t; uniform float scale; attribute float phase; varying float vA;
      void main(){ vec3 p = position + vec3(sin(t*0.11+phase)*0.25, sin(t*0.07+phase*1.3)*0.3, cos(t*0.09+phase*0.7)*0.25);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        gl_PointSize = clamp(0.018*scale/-mv.z, 0.0, 6.0); vA = 0.55+0.45*sin(t*0.5+phase); }`,fragmentShader:"uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0,0.8,0.55)*a*vA*0.8, 1.0); }"});const Ue=new Yc(ue,b);Ue.frustumCulled=!1,r.add(Ue)}await Wn.stage(3,"Preparing view");const x={pos:new z,vy:0,yaw:0,pitch:0,eye:1.62,eyeCur:1.62,smoothY:0,vel:new z,radius:.28,step:.42,height:1.75},M=[{p:[3.4,0,4.3],yaw:.78,pitch:.1,name:"Entrance by the hearth"},{p:[-2,0,-3.7],yaw:1.2,pitch:-.05,name:"Lower shelves, between the stacks"},{p:[-8.2,0,4.9],yaw:1.5,pitch:-.05,name:"Window reading alcove"},{p:[5.6,0,8],yaw:0,pitch:.18,name:"Foot of the staircase"},{p:[1.2,Oo.GY,-7.6],yaw:Math.PI-.3,pitch:-.32,name:"Gallery overlook"}];function P(k){const ne=M[k];x.pos.set(ne.p[0],ne.p[1],ne.p[2]),x.yaw=ne.yaw,x.pitch=ne.pitch,x.vy=0,x.vel.set(0,0,0),x.smoothY=x.pos.y,le(ne.name)}function O(k,ne,re){let ue=-1/0;const Ue=x.radius*.7;for(const te of _)k+Ue<te.x0||k-Ue>te.x1||ne+Ue<te.z0||ne-Ue>te.z1||te.y1<=re+x.step&&te.y1>ue&&(ue=te.y1);return ue}function F(k,ne,re,ue){const Ue=x.radius;if(g.door.blocks(k,ne,re,ue,Ue))return!0;for(const te of _)if(!(k+Ue<=te.x0||k-Ue>=te.x1||ne+Ue<=te.z0||ne-Ue>=te.z1)&&te.y0<re+ue&&te.y1>re+x.step)return!0;return!1}const B=new Set;let K=!1,H=null,Y=null,j=null,ae=!1;addEventListener("keydown",k=>{if(!(ae||H!=null&&H.isOpen||Y!=null&&Y.paused||fa(k.target))&&(B.add(k.code),!k.repeat)){if(k.code==="KeyR"&&P(0),k.code.startsWith("Digit")){const ne=+k.code.slice(5)-1;ne>=0&&ne<M.length&&P(ne)}k.code==="KeyC"&&(K=!K),k.code==="KeyF"&&Re.classList.toggle("show"),k.code==="KeyH"&&ie.classList.toggle("hide"),k.code==="KeyP"&&(i=i>.8?Math.max(.6,i-.25):t,e.setPixelRatio(i),ce(),le(`Render scale ${Math.round(i*100)}%`)),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(k.code)&&k.preventDefault()}}),addEventListener("keyup",k=>B.delete(k.code)),addEventListener("blur",()=>B.clear());const fe=document.getElementById("overlay"),ie=document.getElementById("help"),Re=document.getElementById("stats"),Fe=document.getElementById("toast");let J=0;function le(k){Fe.textContent=k,Fe.classList.add("show"),J=2.2}function T(){B.clear(),x.vel.set(0,0,0)}const L=w0({canvas:n,overlay:fe,menuButton:document.getElementById("controls-toggle"),player:x,camera:s,toast:le,releaseMovement:T,isInputBlocked:()=>!!(ae||H!=null&&H.isOpen||Y!=null&&Y.paused),setMenuPaused:k=>Y==null?void 0:Y.setPaused("controls",k)}),D=new z;H=tm({legacyFactory:P0,camera:s,solids:_,document,window,canvas:n,content:Pl,look:L,releaseMovement:T,dialog:document.getElementById("reader"),hint:document.getElementById("interaction-hint"),returnFocus:n,canInteract:()=>!ae&&!L.menuOpen&&!(Y!=null&&Y.paused)&&document.hasFocus(),getTarget:()=>Dl(s.position,s.getWorldDirection(D),Il,_,A0),setPaused:k=>Y==null?void 0:Y.setPaused("reading",k)}),j=sm({document,window,canvas:n,content:Dr,controls:fe.querySelector(".card"),readerFooter:document.querySelector(".reader-footer"),canInteract:()=>!ae&&!H.isOpen&&!L.menuOpen&&!(Y!=null&&Y.paused)&&document.hasFocus(),getTarget:()=>Dl(s.position,s.getWorldDirection(D),[wo],_,wo.reach),beforeLeave:ee,useDoor:()=>g.door.use(),getPrompt:()=>g.door.passable?Dr.prompt:Dr.openPrompt});const U=new z;function V(k){const ne=(B.has("KeyW")||B.has("ArrowUp")?1:0)-(B.has("KeyS")||B.has("ArrowDown")?1:0),re=(B.has("KeyD")||B.has("ArrowRight")?1:0)-(B.has("KeyA")||B.has("ArrowLeft")?1:0),ue=(B.has("ShiftLeft")||B.has("ShiftRight")?4.6:2.5)*(K?.55:1),Ue=Math.sin(x.yaw),te=Math.cos(x.yaw),ye=-Ue*ne+te*re,Ae=-te*ne-Ue*re,Pe=Math.hypot(ye,Ae)||1,xe=U.set(ye/Pe*ue*(ne||re?1:0),0,Ae/Pe*ue*(ne||re?1:0)),qe=1-Math.exp(-k*12);x.vel.lerp(xe,qe);const ze=K?1.15:x.height,Ke=x.pos.x+x.vel.x*k,G=x.pos.z+x.vel.z*k;F(Ke,G,x.pos.y,ze)?F(Ke,x.pos.z,x.pos.y,ze)?F(x.pos.x,G,x.pos.y,ze)?x.vel.multiplyScalar(.2):(x.pos.z=G,x.vel.x*=.5):(x.pos.x=Ke,x.vel.z*=.5):(x.pos.x=Ke,x.pos.z=G);const ge=O(x.pos.x,x.pos.z,x.pos.y);ge>=x.pos.y-x.step&&ge>-1/0&&x.vy<=0?(x.pos.y=ge,x.vy=0):(x.vy-=9.8*k,x.pos.y+=x.vy*k,ge>-1/0&&x.pos.y<ge&&(x.pos.y=ge,x.vy=0)),x.pos.y<-10&&P(0),x.smoothY+=(x.pos.y-x.smoothY)*(1-Math.exp(-k*14)),x.eyeCur+=((K?1:x.eye)-x.eyeCur)*(1-Math.exp(-k*10)),s.position.set(x.pos.x,x.smoothY+x.eyeCur,x.pos.z),s.rotation.set(x.pitch,x.yaw,0)}function ce(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),b.uniforms.scale.value=window.innerHeight*i*.5}addEventListener("resize",ce),ce();const me=new Qn({colorWrite:!1}),Te=[];r.traverse(k=>{k.material&&(k.material.transparent||k.material.isShaderMaterial||k.isPoints)&&Te.push(k)}),e.autoClear=!1;let N=!1;function Be(){if(e.clear(),N){for(const k of Te)k.visible=!1;r.overrideMaterial=me,e.render(r,s),r.overrideMaterial=null;for(const k of Te)k.visible=!0}e.render(r,s)}const Ce=[];let pe=0,he=0,we=0;P(0),V(0),Fe.classList.remove("show"),e.compile(r,s),r.traverse(k=>{const ne=k.material;if(ne){for(const re of["map","bumpMap"])ne[re]&&e.initTexture(ne[re]);ne.uniforms&&ne.uniforms.map&&e.initTexture(ne.uniforms.map.value)}}),e.shadowMap.needsUpdate=!0;const _e=new z;function I(k,ne){const re=Math.min(ne,.05);we+=re,_e.copy(x.pos),g.door.update(re,x.pos,x.radius),V(re),he+=re,he>=.125&&(he=0,H.updateHint(),j.updateHint());for(const ue of C)ue.userData.fire&&(ue.intensity=ue.userData.i*(.82+.12*Math.sin(we*9.1)+.08*Math.sin(we*23.7+1.3)));if(window.__shafts.uniforms.t.value=we,b.uniforms.t.value=we,Be(),ne>0&&ne<.25&&document.visibilityState==="visible"&&Ce.push(ne*1e3),Ce.length>240&&Ce.shift(),pe+=ne,pe>.5){pe=0;const ue=[...Ce].sort((Ae,Pe)=>Ae-Pe),Ue=ue.reduce((Ae,Pe)=>Ae+Pe,0)/ue.length,te=ue[Math.floor(ue.length*.99)-1]||Ue,ye=e.info.render;Re.textContent=`${(1e3/Ue).toFixed(0)} fps  avg ${Ue.toFixed(1)} ms  p99 ${te.toFixed(1)} ms
calls ${ye.calls}  tris ${(ye.triangles/1e3).toFixed(0)}k  scale ${Math.round(i*100)}%
pos ${x.pos.x.toFixed(1)} ${x.pos.y.toFixed(2)} ${x.pos.z.toFixed(1)}`}J>0&&(J-=re,J<=0&&Fe.classList.remove("show")),g.door.crossed(_e,x.pos,x.radius)&&j.leave()}Y=nm({tick:I,request:k=>window.requestAnimationFrame(k),cancel:k=>window.cancelAnimationFrame(k),now:()=>performance.now()});const E=[];function X(k,ne,re){k.addEventListener(ne,re),E.push(()=>k.removeEventListener(ne,re))}function ee(){var k;if(!ae){ae=!0,T(),L.pause(),Y==null||Y.setPaused("exit",!0),j==null||j.dispose(),H.dispose(),L.dispose(),Y==null||Y.dispose();for(const ne of E)ne();tu({scene:r,renderer:e,environmentTarget:l,materials:Object.values(c),extraMaterials:[me,...g.materials]}),delete window.__shafts,delete window.__lib,((k=window.__libraryLoading)==null?void 0:k.state)==="ready"&&(window.__libraryLoading.dispose(),delete window.__libraryLoading)}}wt.cleanup=ee,X(window,"blur",()=>{T(),Y.setPaused("focus",!0)}),X(window,"focus",()=>Y.setPaused("focus",!1)),X(document,"visibilitychange",()=>Y.setPaused("visibility",document.visibilityState!=="visible")),X(window,"pagehide",k=>{L.pause(),Y.setPaused("page",!0),k.persisted||ee()}),X(window,"pageshow",()=>{var k;L.resume(),Y.setPaused("page",!1),Y.setPaused("handoff",!!((k=window.pazneriaRoomHandoff)!=null&&k.active)),Y.setPaused("visibility",document.visibilityState!=="visible"),Y.setPaused("focus",!document.hasFocus())}),Be(),Y.setPaused("visibility",document.visibilityState!=="visible"),Y.setPaused("focus",!document.hasFocus()),Y.setPaused("handoff",!!((se=window.pazneriaRoomHandoff)!=null&&se.active)),Y.start(),window.__lib={P:x,setView:P,solids:_,renderer:e,scene:r,camera:s,books:d,drawFrame:Be,setPrepass:k=>N=k,sim:(k,ne)=>{k.forEach(re=>B.add(re));for(let re=0;re<ne;re+=1/60)V(1/60);return k.forEach(re=>B.delete(re)),x.pos.toArray().map(re=>+re.toFixed(2))}},Wn.ready(()=>{T(),Y.setPaused("handoff",!1)})}ym().catch(n=>{n.name!=="AbortError"&&(console.error("Library initialization failed:",n),Wn.fail()),nu()});
