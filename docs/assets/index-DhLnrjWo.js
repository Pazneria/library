(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="170",rc=0,Ya=1,sc=2,Ma=1,ac=2,un=3,Rn=0,Me=1,De=2,An=0,gi=1,Ir=2,$a=3,Ka=4,oc=5,Wn=100,lc=101,cc=102,uc=103,hc=104,fc=200,dc=201,pc=202,mc=203,As=204,ws=205,gc=206,_c=207,xc=208,vc=209,Mc=210,Sc=211,yc=212,Ec=213,bc=214,Rs=0,Cs=1,Ps=2,Mi=3,Ls=4,Is=5,Ds=6,Us=7,Sa=0,Tc=1,Ac=2,wn=0,wc=1,Rc=2,Cc=3,ll=4,Pc=5,Lc=6,Ic=7,cl=300,Si=301,yi=302,Ns=303,Fs=304,Br=306,Dr=1e3,qn=1001,Os=1002,Ue=1003,Dc=1004,Qi=1005,Ze=1006,Wr=1007,Tn=1008,pn=1009,ul=1010,hl=1011,Xi=1012,ya=1013,Yn=1014,je=1015,Yi=1016,Ea=1017,ba=1018,Ei=1020,fl=35902,dl=1021,pl=1022,We=1023,ml=1024,gl=1025,_i=1026,bi=1027,Ta=1028,Aa=1029,_l=1030,wa=1031,Ra=1033,Tr=33776,Ar=33777,wr=33778,Rr=33779,Bs=35840,zs=35841,Hs=35842,ks=35843,Gs=36196,Vs=37492,Ws=37496,Xs=37808,qs=37809,Ys=37810,$s=37811,Ks=37812,Zs=37813,js=37814,Js=37815,Qs=37816,ta=37817,ea=37818,na=37819,ia=37820,ra=37821,Cr=36492,sa=36494,aa=36495,xl=36283,oa=36284,la=36285,ca=36286,Uc=3200,Nc=3201,Ca=0,Fc=1,En="",Ae="srgb",Ai="srgb-linear",zr="linear",Jt="srgb",Qn=7680,Za=519,Oc=512,Bc=513,zc=514,vl=515,Hc=516,kc=517,Gc=518,Vc=519,ja=35044,Ja="300 es",hn=2e3,Ur=2001;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,ua=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]).toLowerCase()}function we(n,t,e){return Math.max(t,Math.min(e,n))}function Wc(n,t){return(n%t+t)%t}function qr(n,t,e){return(1-e)*n+e*t}function Ii(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Te(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,i,r,s,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],T=r[1],A=r[4],M=r[7],O=r[2],b=r[5],C=r[8];return s[0]=a*_+o*T+l*O,s[3]=a*m+o*A+l*b,s[6]=a*d+o*M+l*C,s[1]=c*_+u*T+f*O,s[4]=c*m+u*A+f*b,s[7]=c*d+u*M+f*C,s[2]=h*_+p*T+g*O,s[5]=h*m+p*A+g*b,s[8]=h*d+p*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=e*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Yr.makeScale(t,e)),this}rotate(t){return this.premultiply(Yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Bt;function Ml(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xc(){const n=Nr("canvas");return n.style.display="block",n}const Qa={};function ki(n){n in Qa||(Qa[n]=!0,console.warn(n))}function qc(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Yc(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $c(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:Ai,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(n.r=fn(n.r),n.g=fn(n.g),n.b=fn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(n.r=xi(n.r),n.g=xi(n.g),n.b=xi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===En?zr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const to=[.64,.33,.3,.6,.15,.06],eo=[.2126,.7152,.0722],no=[.3127,.329],io=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ro=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Ai]:{primaries:to,whitePoint:no,transfer:zr,toXYZ:io,fromXYZ:ro,luminanceCoefficients:eo,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:to,whitePoint:no,transfer:Jt,toXYZ:io,fromXYZ:ro,luminanceCoefficients:eo,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});let ti;class Kc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=Nr("canvas")),ti.width=t.width,ti.height=t.height;const i=ti.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fn(e[i]/255)*255):e[i]=fn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zc=0;class Sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($r(r[a].image)):s.push($r(r[a]))}else s=$r(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function $r(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jc=0;class Se extends wi{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,i=qn,r=qn,s=Ze,a=Tn,o=We,l=pn,c=Se.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=$i(),this.name="",this.source=new Sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dr:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Os:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dr:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Os:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=cl;Se.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,i=0,r=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,M=(p+1)/2,O=(d+1)/2,b=(u+h)/4,C=(f+_)/4,L=(g+m)/4;return A>M&&A>O?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=b/i,s=C/i):M>O?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=L/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=C/s,r=L/s),this.set(i,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jc extends wi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Se(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Jc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yl extends Se{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qc extends Se{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-o;const d=l*h+c*p+u*g+f*_,T=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const O=Math.sqrt(A),b=Math.atan2(O,d*T);m=Math.sin(m*b)/O,o=Math.sin(o*b)/O}const M=o*T;if(l=l*m+h*M,c=c*m+p*M,u=u*m+g*M,f=f*m+_*M,m===1-o){const O=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=O,c*=O,u*=O,f*=O}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*f+l*p-c*h,t[e+1]=l*g+u*h+c*f-o*p,t[e+2]=c*g+u*p+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(so.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(so.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kr.copy(this).projectOnVector(t),this.sub(Kr)}reflect(t){return this.sub(Kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new N,so=new Pn;class Kn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(s,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tr.copy(i.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),er.subVectors(this.max,Di),ei.subVectors(t.a,Di),ni.subVectors(t.b,Di),ii.subVectors(t.c,Di),_n.subVectors(ni,ei),xn.subVectors(ii,ni),Nn.subVectors(ei,ii);let e=[0,-_n.z,_n.y,0,-xn.z,xn.y,0,-Nn.z,Nn.y,_n.z,0,-_n.x,xn.z,0,-xn.x,Nn.z,0,-Nn.x,-_n.y,_n.x,0,-xn.y,xn.x,0,-Nn.y,Nn.x,0];return!Zr(e,ei,ni,ii,er)||(e=[1,0,0,0,1,0,0,0,1],!Zr(e,ei,ni,ii,er))?!1:(nr.crossVectors(_n,xn),e=[nr.x,nr.y,nr.z],Zr(e,ei,ni,ii,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rn=[new N,new N,new N,new N,new N,new N,new N,new N],He=new N,tr=new Kn,ei=new N,ni=new N,ii=new N,_n=new N,xn=new N,Nn=new N,Di=new N,er=new N,nr=new N,Fn=new N;function Zr(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Fn.fromArray(n,s);const o=r.x*Math.abs(Fn.x)+r.y*Math.abs(Fn.y)+r.z*Math.abs(Fn.z),l=t.dot(Fn),c=e.dot(Fn),u=i.dot(Fn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const tu=new Kn,Ui=new N,jr=new N;class Ri{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):tu.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ui,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(jr)),this.expandByPoint(Ui.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new N,Jr=new N,ir=new N,vn=new N,Qr=new N,rr=new N,ts=new N;class El{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Jr.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(Jr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=vn.dot(this.direction),l=-vn.dot(ir),c=vn.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Jr).addScaledVector(ir,h),p}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const i=sn.dot(this.direction),r=sn.dot(sn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,i,r,s){Qr.subVectors(e,t),rr.subVectors(i,t),ts.crossVectors(Qr,rr);let a=this.direction.dot(ts),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);const l=o*this.direction.dot(rr.crossVectors(vn,rr));if(l<0)return null;const c=o*this.direction.dot(Qr.cross(vn));if(c<0||l+c>a)return null;const u=-o*vn.dot(ts);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,i,r,s,a,o,l,c,u,f,h,p,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,f,h,p,g,_,m)}set(t,e,i,r,s,a,o,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/ri.setFromMatrixColumn(t,0).length(),s=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,p=a*f,g=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,p=a*f,g=o*u,_=o*f;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eu,t,nu)}lookAt(t,e,i){const r=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),Mn.crossVectors(i,Pe),Mn.lengthSq()===0&&(Math.abs(i.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),Mn.crossVectors(i,Pe)),Mn.normalize(),sr.crossVectors(Pe,Mn),r[0]=Mn.x,r[4]=sr.x,r[8]=Pe.x,r[1]=Mn.y,r[5]=sr.y,r[9]=Pe.y,r[2]=Mn.z,r[6]=sr.z,r[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],T=i[3],A=i[7],M=i[11],O=i[15],b=r[0],C=r[4],L=r[8],E=r[12],v=r[1],P=r[5],G=r[9],H=r[13],K=r[2],J=r[6],Z=r[10],et=r[14],q=r[3],ot=r[7],pt=r[11],wt=r[15];return s[0]=a*b+o*v+l*K+c*q,s[4]=a*C+o*P+l*J+c*ot,s[8]=a*L+o*G+l*Z+c*pt,s[12]=a*E+o*H+l*et+c*wt,s[1]=u*b+f*v+h*K+p*q,s[5]=u*C+f*P+h*J+p*ot,s[9]=u*L+f*G+h*Z+p*pt,s[13]=u*E+f*H+h*et+p*wt,s[2]=g*b+_*v+m*K+d*q,s[6]=g*C+_*P+m*J+d*ot,s[10]=g*L+_*G+m*Z+d*pt,s[14]=g*E+_*H+m*et+d*wt,s[3]=T*b+A*v+M*K+O*q,s[7]=T*C+A*P+M*J+O*ot,s[11]=T*L+A*G+M*Z+O*pt,s[15]=T*E+A*H+M*et+O*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+_*(+e*l*p-e*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+e*c*f-e*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-e*l*f+e*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],T=f*m*c-_*h*c+_*l*p-o*m*p-f*l*d+o*h*d,A=g*h*c-u*m*c-g*l*p+a*m*p+u*l*d-a*h*d,M=u*_*c-g*f*c+g*o*p-a*_*p-u*o*d+a*f*d,O=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,b=e*T+i*A+r*M+s*O;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=T*C,t[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*C,t[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*d+i*l*d)*C,t[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*C,t[4]=A*C,t[5]=(u*m*s-g*h*s+g*r*p-e*m*p-u*r*d+e*h*d)*C,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*d-e*l*d)*C,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*p+e*l*p)*C,t[8]=M*C,t[9]=(g*f*s-u*_*s-g*i*p+e*_*p+u*i*d-e*f*d)*C,t[10]=(a*_*s-g*o*s+g*i*c-e*_*c-a*i*d+e*o*d)*C,t[11]=(u*o*s-a*f*s-u*i*c+e*f*c+a*i*p-e*o*p)*C,t[12]=O*C,t[13]=(u*_*r-g*f*r+g*i*h-e*_*h-u*i*m+e*f*m)*C,t[14]=(g*o*r-a*_*r-g*i*l+e*_*l+a*i*m-e*o*m)*C,t[15]=(a*f*r-u*o*r+u*i*l-e*f*l-a*i*h+e*o*h)*C,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,g=s*f,_=a*u,m=a*f,d=o*f,T=l*c,A=l*u,M=l*f,O=i.x,b=i.y,C=i.z;return r[0]=(1-(_+d))*O,r[1]=(p+M)*O,r[2]=(g-A)*O,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(h+d))*b,r[6]=(m+T)*b,r[7]=0,r[8]=(g+A)*C,r[9]=(m-T)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=ri.set(r[0],r[1],r[2]).length();const a=ri.set(r[4],r[5],r[6]).length(),o=ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ke.copy(this);const c=1/s,u=1/a,f=1/o;return ke.elements[0]*=c,ke.elements[1]*=c,ke.elements[2]*=c,ke.elements[4]*=u,ke.elements[5]*=u,ke.elements[6]*=u,ke.elements[8]*=f,ke.elements[9]*=f,ke.elements[10]*=f,e.setFromRotationMatrix(ke),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=hn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let p,g;if(o===hn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ur)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=hn){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(a-s),h=(e+t)*c,p=(i+r)*u;let g,_;if(o===hn)g=(a+s)*f,_=-2*f;else if(o===Ur)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ri=new N,ke=new $t,eu=new N(0,0,0),nu=new N(1,1,1),Mn=new N,sr=new N,Pe=new N,ao=new $t,oo=new Pn;class Ne{constructor(t=0,e=0,i=0,r=Ne.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ao.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ao,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oo.setFromEuler(this),this.setFromQuaternion(oo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ne.DEFAULT_ORDER="XYZ";class bl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iu=0;const lo=new N,si=new Pn,an=new $t,ar=new N,Ni=new N,ru=new N,su=new Pn,co=new N(1,0,0),uo=new N(0,1,0),ho=new N(0,0,1),fo={type:"added"},au={type:"removed"},ai={type:"childadded",child:null},es={type:"childremoved",child:null};class pe extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new N,e=new Ne,i=new Pn,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new Bt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(co,t)}rotateY(t){return this.rotateOnAxis(uo,t)}rotateZ(t){return this.rotateOnAxis(ho,t)}translateOnAxis(t,e){return lo.copy(t).applyQuaternion(this.quaternion),this.position.add(lo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(co,t)}translateY(t){return this.translateOnAxis(uo,t)}translateZ(t){return this.translateOnAxis(ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ar.copy(t):ar.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ni,ar,this.up):an.lookAt(ar,Ni,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),si.setFromRotationMatrix(an),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fo),ai.child=t,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(au),es.child=t,this.dispatchEvent(es),es.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fo),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,ru),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}pe.DEFAULT_UP=new N(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new N,on=new N,ns=new N,ln=new N,oi=new N,li=new N,po=new N,is=new N,rs=new N,ss=new N,as=new te,os=new te,ls=new te;class Ve{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Ge.subVectors(t,e),r.cross(Ge);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Ge.subVectors(r,e),on.subVectors(i,e),ns.subVectors(t,e);const a=Ge.dot(Ge),o=Ge.dot(on),l=Ge.dot(ns),c=on.dot(on),u=on.dot(ns),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ln.x),l.addScaledVector(a,ln.y),l.addScaledVector(o,ln.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return as.setScalar(0),os.setScalar(0),ls.setScalar(0),as.fromBufferAttribute(t,e),os.fromBufferAttribute(t,i),ls.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(as,s.x),a.addScaledVector(os,s.y),a.addScaledVector(ls,s.z),a}static isFrontFacing(t,e,i,r){return Ge.subVectors(i,e),on.subVectors(t,e),Ge.cross(on).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ge.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Ve.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;oi.subVectors(r,i),li.subVectors(s,i),is.subVectors(t,i);const l=oi.dot(is),c=li.dot(is);if(l<=0&&c<=0)return e.copy(i);rs.subVectors(t,r);const u=oi.dot(rs),f=li.dot(rs);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(oi,a);ss.subVectors(t,s);const p=oi.dot(ss),g=li.dot(ss);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(li,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return po.subVectors(s,r),o=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(po,o);const d=1/(m+_+h);return a=_*d,o=h*d,e.copy(i).addScaledVector(oi,a).addScaledVector(li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},or={h:0,s:0,l:0};function cs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Xt.workingColorSpace){if(t=Wc(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=cs(a,s,t+1/3),this.g=cs(a,s,t),this.b=cs(a,s,t-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ae){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const i=Tl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fn(t.r),this.g=fn(t.g),this.b=fn(t.b),this}copyLinearToSRGB(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Xt.fromWorkingColorSpace(xe.copy(this),t),Math.round(we(xe.r*255,0,255))*65536+Math.round(we(xe.g*255,0,255))*256+Math.round(we(xe.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(xe.copy(this),e);const i=xe.r,r=xe.g,s=xe.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=Ae){Xt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,i=xe.g,r=xe.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(or);const i=qr(Sn.h,or.h,e),r=qr(Sn.s,or.s,e),s=qr(Sn.l,or.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Lt;Lt.NAMES=Tl;let ou=0;class Zn extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=$i(),this.name="",this.blending=gi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=As,this.blendDst=ws,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==As&&(i.blendSrc=this.blendSrc),this.blendDst!==ws&&(i.blendDst=this.blendDst),this.blendEquation!==Wn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Za&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cn extends Zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new N,lr=new qt;class Ee{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ja,this.updateRanges=[],this.gpuType=je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),r=Te(r,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ja&&(t.usage=this.usage),t}}class Al extends Ee{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class wl extends Ee{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ue extends Ee{constructor(t,e,i){super(new Float32Array(t),e,i)}}let lu=0;const Oe=new $t,us=new pe,ci=new N,Le=new Kn,Fi=new Kn,de=new N;class Re extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ml(t)?wl:Al)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Bt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,i){return Oe.makeTranslation(t,e,i),this.applyMatrix4(Oe),this}scale(t,e,i){return Oe.makeScale(t,e,i),this.applyMatrix4(Oe),this}lookAt(t){return us.lookAt(t),us.updateMatrix(),this.applyMatrix4(us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Le.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(de.addVectors(Le.min,Fi.min),Le.expandByPoint(de),de.addVectors(Le.max,Fi.max),Le.expandByPoint(de)):(Le.expandByPoint(Fi.min),Le.expandByPoint(Fi.max))}Le.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)de.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(de));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)de.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(t,c),de.add(ci)),r=Math.max(r,i.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new N,l[L]=new N;const c=new N,u=new N,f=new N,h=new qt,p=new qt,g=new qt,_=new N,m=new N;function d(L,E,v){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,v),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,v),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[L].add(_),o[E].add(_),o[v].add(_),l[L].add(m),l[E].add(m),l[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,E=T.length;L<E;++L){const v=T[L],P=v.start,G=v.count;for(let H=P,K=P+G;H<K;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const A=new N,M=new N,O=new N,b=new N;function C(L){O.fromBufferAttribute(r,L),b.copy(O);const E=o[L];A.copy(E),A.sub(O.multiplyScalar(O.dot(E))).normalize(),M.crossVectors(b,E);const P=M.dot(l[L])<0?-1:1;a.setXYZW(L,A.x,A.y,A.z,P)}for(let L=0,E=T.length;L<E;++L){const v=T[L],P=v.start,G=v.count;for(let H=P,K=P+G;H<K;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Ee(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mo=new $t,On=new El,cr=new Ri,go=new N,ur=new N,hr=new N,fr=new N,hs=new N,dr=new N,_o=new N,pr=new N;class Qt extends pe{constructor(t=new Re,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){dr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(hs.fromBufferAttribute(f,t),a?dr.addScaledVector(hs,u):dr.addScaledVector(hs.sub(e),u))}e.add(dr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere),cr.applyMatrix4(s),On.copy(t.ray).recast(t.near),!(cr.containsPoint(On.origin)===!1&&(On.intersectSphere(cr,go)===null||On.origin.distanceToSquared(go)>(t.far-t.near)**2))&&(mo.copy(s).invert(),On.copy(t.ray).applyMatrix4(mo),!(i.boundingBox!==null&&On.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,O=A;M<O;M+=3){const b=o.getX(M),C=o.getX(M+1),L=o.getX(M+2);r=mr(this,d,t,i,c,u,f,b,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);r=mr(this,a,t,i,c,u,f,T,A,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,O=A;M<O;M+=3){const b=M,C=M+1,L=M+2;r=mr(this,d,t,i,c,u,f,b,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=m,A=m+1,M=m+2;r=mr(this,a,t,i,c,u,f,T,A,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function cu(n,t,e,i,r,s,a,o){let l;if(t.side===Me?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Rn,o),l===null)return null;pr.copy(o),pr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(pr);return c<e.near||c>e.far?null:{distance:c,point:pr.clone(),object:n}}function mr(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,ur),n.getVertexPosition(l,hr),n.getVertexPosition(c,fr);const u=cu(n,t,e,i,ur,hr,fr,_o);if(u){const f=new N;Ve.getBarycoord(_o,ur,hr,fr,f),r&&(u.uv=Ve.getInterpolatedAttribute(r,o,l,c,f,new qt)),s&&(u.uv1=Ve.getInterpolatedAttribute(s,o,l,c,f,new qt)),a&&(u.normal=Ve.getInterpolatedAttribute(a,o,l,c,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};Ve.getNormal(ur,hr,fr,h.normal),u.face=h,u.barycoord=f}return u}class Ln extends Re{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function g(_,m,d,T,A,M,O,b,C,L,E){const v=M/C,P=O/L,G=M/2,H=O/2,K=b/2,J=C+1,Z=L+1;let et=0,q=0;const ot=new N;for(let pt=0;pt<Z;pt++){const wt=pt*P-H;for(let y=0;y<J;y++){const I=y*v-G;ot[_]=I*T,ot[m]=wt*A,ot[d]=K,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[d]=b>0?1:-1,u.push(ot.x,ot.y,ot.z),f.push(y/C),f.push(1-pt/L),et+=1}}for(let pt=0;pt<L;pt++)for(let wt=0;wt<C;wt++){const y=h+wt+J*pt,I=h+wt+J*(pt+1),R=h+(wt+1)+J*(pt+1),D=h+(wt+1)+J*pt;l.push(y,I,D),l.push(I,R,D),q+=6}o.addGroup(p,q,E),p+=q,h+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function ye(n){const t={};for(let e=0;e<n.length;e++){const i=Ti(n[e]);for(const r in i)t[r]=i[r]}return t}function uu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rl(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const hu={clone:Ti,merge:ye};var fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends Zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=uu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Cl extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new N,xo=new qt,vo=new qt;class Ie extends Cl{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,xo,vo),e.subVectors(vo,xo)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,hi=1;class pu extends pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ie(ui,hi,t,e);r.layers=this.layers,this.add(r);const s=new Ie(ui,hi,t,e);s.layers=this.layers,this.add(s);const a=new Ie(ui,hi,t,e);a.layers=this.layers,this.add(a);const o=new Ie(ui,hi,t,e);o.layers=this.layers,this.add(o);const l=new Ie(ui,hi,t,e);l.layers=this.layers,this.add(l);const c=new Ie(ui,hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Pl extends Se{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mu extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Pl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ln(5,5,5),s=new qe({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Me,blending:An});s.uniforms.tEquirect.value=e;const a=new Qt(r,s),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=Ze),new pu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const fs=new N,gu=new N,_u=new Bt;class Gn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=fs.subVectors(i,e).cross(gu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(fs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_u.getNormalMatrix(t),r=this.coplanarPoint(fs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Ri,gr=new N;class Pa{constructor(t=new Gn,e=new Gn,i=new Gn,r=new Gn,s=new Gn,a=new Gn){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],T=r[13],A=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-d).normalize(),i[1].setComponents(l+s,h+c,m+p,M+d).normalize(),i[2].setComponents(l+a,h+u,m+g,M+T).normalize(),i[3].setComponents(l-a,h-u,m-g,M-T).normalize(),i[4].setComponents(l-o,h-f,m-_,M-A).normalize(),e===hn)i[5].setComponents(l+o,h+f,m+_,M+A).normalize();else if(e===Ur)i[5].setComponents(o,f,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(gr.x=r.normal.x>0?t.max.x:t.min.x,gr.y=r.normal.y>0?t.max.y:t.min.y,gr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ll(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function xu(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class dn extends Re{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*h-a;for(let A=0;A<c;A++){const M=A*f-s;g.push(M,-T,0),_.push(0,0,1),m.push(A/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const A=T+c*d,M=T+c*(d+1),O=T+1+c*(d+1),b=T+1+c*d;p.push(A,M,b),p.push(M,O,b)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}var vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mu=`#ifdef USE_ALPHAHASH
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
#endif`,Su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tu=`#ifdef USE_AOMAP
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
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu=`#ifdef USE_BATCHING
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
#endif`,Ru=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iu=`#ifdef USE_IRIDESCENCE
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
#endif`,Du=`#ifdef USE_BUMPMAP
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
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gu=`#define PI 3.141592653589793
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
} // validated`,Vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wu=`vec3 transformedNormal = objectNormal;
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
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ju=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qu=`#ifdef USE_ENVMAP
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
#endif`,th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eh=`#ifdef USE_ENVMAP
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
#endif`,nh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ih=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ah=`#ifdef USE_GRADIENTMAP
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
}`,oh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uh=`uniform bool receiveShadow;
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
#endif`,hh=`#ifdef USE_ENVMAP
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
#endif`,fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ph=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gh=`PhysicalMaterial material;
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
#endif`,_h=`struct PhysicalMaterial {
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
}`,xh=`
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
#endif`,vh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Th=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ah=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rh=`#if defined( USE_POINTS_UV )
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
#endif`,Ch=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ph=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ih=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uh=`#ifdef USE_MORPHTARGETS
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
#endif`,Nh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Oh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kh=`#ifdef USE_NORMALMAP
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
#endif`,Gh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$h=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rf=`float getShadowMask() {
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
}`,sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lf=`#ifdef USE_SKINNING
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
#endif`,cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,df=`#ifdef USE_TRANSMISSION
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
#endif`,pf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mf=`uniform sampler2D t2D;
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`#include <common>
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
}`,Af=`#if DEPTH_PACKING == 3200
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
}`,wf=`#define DISTANCE
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
}`,Rf=`#define DISTANCE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`uniform float scale;
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
}`,If=`uniform vec3 diffuse;
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
}`,Df=`#include <common>
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Nf=`#define LAMBERT
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
}`,Ff=`#define LAMBERT
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
}`,Of=`#define MATCAP
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
}`,Bf=`#define MATCAP
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
}`,zf=`#define NORMAL
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
}`,Hf=`#define NORMAL
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
}`,kf=`#define PHONG
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
}`,Gf=`#define PHONG
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
}`,Vf=`#define STANDARD
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
}`,Wf=`#define STANDARD
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
}`,Xf=`#define TOON
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
}`,qf=`#define TOON
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
}`,Yf=`uniform float size;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Kf=`#include <common>
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
}`,Zf=`uniform vec3 color;
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
}`,jf=`uniform float rotation;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:vu,alphahash_pars_fragment:Mu,alphamap_fragment:Su,alphamap_pars_fragment:yu,alphatest_fragment:Eu,alphatest_pars_fragment:bu,aomap_fragment:Tu,aomap_pars_fragment:Au,batching_pars_vertex:wu,batching_vertex:Ru,begin_vertex:Cu,beginnormal_vertex:Pu,bsdfs:Lu,iridescence_fragment:Iu,bumpmap_pars_fragment:Du,clipping_planes_fragment:Uu,clipping_planes_pars_fragment:Nu,clipping_planes_pars_vertex:Fu,clipping_planes_vertex:Ou,color_fragment:Bu,color_pars_fragment:zu,color_pars_vertex:Hu,color_vertex:ku,common:Gu,cube_uv_reflection_fragment:Vu,defaultnormal_vertex:Wu,displacementmap_pars_vertex:Xu,displacementmap_vertex:qu,emissivemap_fragment:Yu,emissivemap_pars_fragment:$u,colorspace_fragment:Ku,colorspace_pars_fragment:Zu,envmap_fragment:ju,envmap_common_pars_fragment:Ju,envmap_pars_fragment:Qu,envmap_pars_vertex:th,envmap_physical_pars_fragment:hh,envmap_vertex:eh,fog_vertex:nh,fog_pars_vertex:ih,fog_fragment:rh,fog_pars_fragment:sh,gradientmap_pars_fragment:ah,lightmap_pars_fragment:oh,lights_lambert_fragment:lh,lights_lambert_pars_fragment:ch,lights_pars_begin:uh,lights_toon_fragment:fh,lights_toon_pars_fragment:dh,lights_phong_fragment:ph,lights_phong_pars_fragment:mh,lights_physical_fragment:gh,lights_physical_pars_fragment:_h,lights_fragment_begin:xh,lights_fragment_maps:vh,lights_fragment_end:Mh,logdepthbuf_fragment:Sh,logdepthbuf_pars_fragment:yh,logdepthbuf_pars_vertex:Eh,logdepthbuf_vertex:bh,map_fragment:Th,map_pars_fragment:Ah,map_particle_fragment:wh,map_particle_pars_fragment:Rh,metalnessmap_fragment:Ch,metalnessmap_pars_fragment:Ph,morphinstance_vertex:Lh,morphcolor_vertex:Ih,morphnormal_vertex:Dh,morphtarget_pars_vertex:Uh,morphtarget_vertex:Nh,normal_fragment_begin:Fh,normal_fragment_maps:Oh,normal_pars_fragment:Bh,normal_pars_vertex:zh,normal_vertex:Hh,normalmap_pars_fragment:kh,clearcoat_normal_fragment_begin:Gh,clearcoat_normal_fragment_maps:Vh,clearcoat_pars_fragment:Wh,iridescence_pars_fragment:Xh,opaque_fragment:qh,packing:Yh,premultiplied_alpha_fragment:$h,project_vertex:Kh,dithering_fragment:Zh,dithering_pars_fragment:jh,roughnessmap_fragment:Jh,roughnessmap_pars_fragment:Qh,shadowmap_pars_fragment:tf,shadowmap_pars_vertex:ef,shadowmap_vertex:nf,shadowmask_pars_fragment:rf,skinbase_vertex:sf,skinning_pars_vertex:af,skinning_vertex:of,skinnormal_vertex:lf,specularmap_fragment:cf,specularmap_pars_fragment:uf,tonemapping_fragment:hf,tonemapping_pars_fragment:ff,transmission_fragment:df,transmission_pars_fragment:pf,uv_pars_fragment:mf,uv_pars_vertex:gf,uv_vertex:_f,worldpos_vertex:xf,background_vert:vf,background_frag:Mf,backgroundCube_vert:Sf,backgroundCube_frag:yf,cube_vert:Ef,cube_frag:bf,depth_vert:Tf,depth_frag:Af,distanceRGBA_vert:wf,distanceRGBA_frag:Rf,equirect_vert:Cf,equirect_frag:Pf,linedashed_vert:Lf,linedashed_frag:If,meshbasic_vert:Df,meshbasic_frag:Uf,meshlambert_vert:Nf,meshlambert_frag:Ff,meshmatcap_vert:Of,meshmatcap_frag:Bf,meshnormal_vert:zf,meshnormal_frag:Hf,meshphong_vert:kf,meshphong_frag:Gf,meshphysical_vert:Vf,meshphysical_frag:Wf,meshtoon_vert:Xf,meshtoon_frag:qf,points_vert:Yf,points_frag:$f,shadow_vert:Kf,shadow_frag:Zf,sprite_vert:jf,sprite_frag:Jf},lt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ke={basic:{uniforms:ye([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:ye([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:ye([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:ye([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:ye([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:ye([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:ye([lt.points,lt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:ye([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:ye([lt.common,lt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:ye([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:ye([lt.sprite,lt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:ye([lt.common,lt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:ye([lt.lights,lt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Ke.physical={uniforms:ye([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const _r={r:0,b:0,g:0},zn=new Ne,Qf=new $t;function td(n,t,e,i,r,s,a){const o=new Lt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?e:t).get(A)),A}function _(T){let A=!1;const M=g(T);M===null?d(o,l):M&&M.isColor&&(d(M,1),A=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,A){const M=g(A);M&&(M.isCubeTexture||M.mapping===Br)?(u===void 0&&(u=new Qt(new Ln(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Ti(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zn.copy(A.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qf.makeRotationFromEuler(zn)),u.material.toneMapped=Xt.getTransfer(M.colorSpace)!==Jt,(f!==M||h!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Qt(new dn(2,2),new qe({name:"BackgroundMaterial",uniforms:Ti(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(M.colorSpace)!==Jt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,A){T.getRGB(_r,Rl(n)),i.buffers.color.setClear(_r.r,_r.g,_r.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(T,A=1){o.set(T),l=A,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:_,addToRenderList:m}}function ed(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(v,P,G,H,K){let J=!1;const Z=f(H,G,P);s!==Z&&(s=Z,c(s.object)),J=p(v,H,G,K),J&&g(v,H,G,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(v,P,G,H),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function f(v,P,G){const H=G.wireframe===!0;let K=i[v.id];K===void 0&&(K={},i[v.id]=K);let J=K[P.id];J===void 0&&(J={},K[P.id]=J);let Z=J[H];return Z===void 0&&(Z=h(l()),J[H]=Z),Z}function h(v){const P=[],G=[],H=[];for(let K=0;K<e;K++)P[K]=0,G[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:H,object:v,attributes:{},index:null}}function p(v,P,G,H){const K=s.attributes,J=P.attributes;let Z=0;const et=G.getAttributes();for(const q in et)if(et[q].location>=0){const pt=K[q];let wt=J[q];if(wt===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(wt=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(wt=v.instanceColor)),pt===void 0||pt.attribute!==wt||wt&&pt.data!==wt.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function g(v,P,G,H){const K={},J=P.attributes;let Z=0;const et=G.getAttributes();for(const q in et)if(et[q].location>=0){let pt=J[q];pt===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const wt={};wt.attribute=pt,pt&&pt.data&&(wt.data=pt.data),K[q]=wt,Z++}s.attributes=K,s.attributesNum=Z,s.index=H}function _(){const v=s.newAttributes;for(let P=0,G=v.length;P<G;P++)v[P]=0}function m(v){d(v,0)}function d(v,P){const G=s.newAttributes,H=s.enabledAttributes,K=s.attributeDivisors;G[v]=1,H[v]===0&&(n.enableVertexAttribArray(v),H[v]=1),K[v]!==P&&(n.vertexAttribDivisor(v,P),K[v]=P)}function T(){const v=s.newAttributes,P=s.enabledAttributes;for(let G=0,H=P.length;G<H;G++)P[G]!==v[G]&&(n.disableVertexAttribArray(G),P[G]=0)}function A(v,P,G,H,K,J,Z){Z===!0?n.vertexAttribIPointer(v,P,G,K,J):n.vertexAttribPointer(v,P,G,H,K,J)}function M(v,P,G,H){_();const K=H.attributes,J=G.getAttributes(),Z=P.defaultAttributeValues;for(const et in J){const q=J[et];if(q.location>=0){let ot=K[et];if(ot===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){const pt=ot.normalized,wt=ot.itemSize,y=t.get(ot);if(y===void 0)continue;const I=y.buffer,R=y.type,D=y.bytesPerElement,k=R===n.INT||R===n.UNSIGNED_INT||ot.gpuType===ya;if(ot.isInterleavedBufferAttribute){const Y=ot.data,it=Y.stride,mt=ot.offset;if(Y.isInstancedInterleavedBuffer){for(let rt=0;rt<q.locationSize;rt++)d(q.location+rt,Y.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let rt=0;rt<q.locationSize;rt++)m(q.location+rt);n.bindBuffer(n.ARRAY_BUFFER,I);for(let rt=0;rt<q.locationSize;rt++)A(q.location+rt,wt/q.locationSize,R,pt,it*D,(mt+wt/q.locationSize*rt)*D,k)}else{if(ot.isInstancedBufferAttribute){for(let Y=0;Y<q.locationSize;Y++)d(q.location+Y,ot.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Y=0;Y<q.locationSize;Y++)m(q.location+Y);n.bindBuffer(n.ARRAY_BUFFER,I);for(let Y=0;Y<q.locationSize;Y++)A(q.location+Y,wt/q.locationSize,R,pt,wt*D,wt/q.locationSize*Y*D,k)}}else if(Z!==void 0){const pt=Z[et];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(q.location,pt);break;case 3:n.vertexAttrib3fv(q.location,pt);break;case 4:n.vertexAttrib4fv(q.location,pt);break;default:n.vertexAttrib1fv(q.location,pt)}}}}T()}function O(){L();for(const v in i){const P=i[v];for(const G in P){const H=P[G];for(const K in H)u(H[K].object),delete H[K];delete P[G]}delete i[v]}}function b(v){if(i[v.id]===void 0)return;const P=i[v.id];for(const G in P){const H=P[G];for(const K in H)u(H[K].object),delete H[K];delete P[G]}delete i[v.id]}function C(v){for(const P in i){const G=i[P];if(G[v.id]===void 0)continue;const H=G[v.id];for(const K in H)u(H[K].object),delete H[K];delete G[v.id]}}function L(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function nd(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function id(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==We&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===Yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==pn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==je&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:O,maxSamples:b}}function rd(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Gn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,A=T*4;let M=d.clippingState||null;l.value=M,M=u(g,h,A,p);for(let O=0;O!==A;++O)M[O]=e[O];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,M=p;A!==_;++A,M+=4)a.copy(f[A]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function sd(n){let t=new WeakMap;function e(a,o){return o===Ns?a.mapping=Si:o===Fs&&(a.mapping=yi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ns||o===Fs)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new mu(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Il extends Cl{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mi=4,Mo=[.125,.215,.35,.446,.526,.582],Xn=20,ds=new Il,So=new Lt;let ps=null,ms=0,gs=0,_s=!1;const Vn=(1+Math.sqrt(5))/2,fi=1/Vn,yo=[new N(-Vn,fi,0),new N(Vn,fi,0),new N(-fi,0,Vn),new N(fi,0,Vn),new N(0,Vn,-fi),new N(0,Vn,fi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class ha{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),_s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=To(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ps,ms,gs),this._renderer.xr.enabled=_s,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),_s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Yi,format:We,colorSpace:Ai,depthBuffer:!1},r=Eo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ad(s)),this._blurMaterial=od(s,t,e)}return r}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,ds)}_sceneToCubeUV(t,e,i,r){const o=new Ie(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(So),u.toneMapping=wn,u.autoClear=!1;const p=new Cn({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),g=new Qt(new Ln,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(So),_=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):T===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const A=this._cubeSize;xr(r,T*A,d>2?A:0,A,A),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Si||t.mapping===yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=To()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;xr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ds)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yo[(r-s-1)%yo.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Xn;m>Xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const d=[];let T=0;for(let C=0;C<Xn;++C){const L=C/_,E=Math.exp(-L*L/2);d.push(E),C===0?T+=E:C<m&&(T+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/T;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-i;const M=this._sizeLods[r],O=3*M*(r>A-mi?r-A+mi:0),b=4*(this._cubeSize-M);xr(e,O,b,3*M,2*M),l.setRenderTarget(e),l.render(f,ds)}}function ad(n){const t=[],e=[],i=[];let r=n;const s=n-mi+1+Mo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-mi?l=Mo[a-n+mi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),A=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,L=b>2?0:-1,E=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];T.set(E,_*g*b),A.set(h,m*g*b);const v=[b,b,b,b,b,b];M.set(v,d*g*b)}const O=new Re;O.setAttribute("position",new Ee(T,_)),O.setAttribute("uv",new Ee(A,m)),O.setAttribute("faceIndex",new Ee(M,d)),t.push(O),r>mi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Eo(n,t,e){const i=new $n(n,t,e);return i.texture.mapping=Br,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function od(n,t,e){const i=new Float32Array(Xn),r=new N(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:La(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function bo(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function To(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}function ld(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ns||l===Fs,u=l===Si||l===yi;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new ha(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new ha(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function cd(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ki("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ud(n,t,e,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let A=0,M=T.length;A<M;A+=3){const O=T[A+0],b=T[A+1],C=T[A+2];h.push(O,b,b,C,C,O)}}else if(g!==void 0){const T=g.array;_=g.version;for(let A=0,M=T.length/3-1;A<M;A+=3){const O=A+0,b=A+1,C=A+2;h.push(O,b,b,C,C,O)}}else return;const m=new(Ml(h)?wl:Al)(h,1);m.version=_;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function hd(n,t,e){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*a),e.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*a,g),e.update(p,i,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*_[T];e.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function fd(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function dd(n,t,e){const i=new WeakMap,r=new te;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let v=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var p=v;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let O=o.attributes.position.count*M,b=1;O>t.maxTextureSize&&(b=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const C=new Float32Array(O*b*4*f),L=new yl(C,O,b,f);L.type=je,L.needsUpdate=!0;const E=M*4;for(let P=0;P<f;P++){const G=d[P],H=T[P],K=A[P],J=O*b*4*P;for(let Z=0;Z<G.count;Z++){const et=Z*E;g===!0&&(r.fromBufferAttribute(G,Z),C[J+et+0]=r.x,C[J+et+1]=r.y,C[J+et+2]=r.z,C[J+et+3]=0),_===!0&&(r.fromBufferAttribute(H,Z),C[J+et+4]=r.x,C[J+et+5]=r.y,C[J+et+6]=r.z,C[J+et+7]=0),m===!0&&(r.fromBufferAttribute(K,Z),C[J+et+8]=r.x,C[J+et+9]=r.y,C[J+et+10]=r.z,C[J+et+11]=K.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new qt(O,b)},i.set(o,h),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function pd(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Dl extends Se{constructor(t,e,i,r,s,a,o,l,c,u=_i){if(u!==_i&&u!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_i&&(i=Yn),i===void 0&&u===bi&&(i=Ei),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=l!==void 0?l:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ul=new Se,Ao=new Dl(1,1),Nl=new yl,Fl=new Qc,Ol=new Pl,wo=[],Ro=[],Co=new Float32Array(16),Po=new Float32Array(9),Lo=new Float32Array(4);function Ci(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=wo[r];if(s===void 0&&(s=new Float32Array(r),wo[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function he(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Hr(n,t){let e=Ro[t];e===void 0&&(e=new Int32Array(t),Ro[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function md(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function gd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2fv(this.addr,t),fe(e,t)}}function _d(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;n.uniform3fv(this.addr,t),fe(e,t)}}function xd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4fv(this.addr,t),fe(e,t)}}function vd(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Lo.set(i),n.uniformMatrix2fv(this.addr,!1,Lo),fe(e,i)}}function Md(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Po.set(i),n.uniformMatrix3fv(this.addr,!1,Po),fe(e,i)}}function Sd(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Co.set(i),n.uniformMatrix4fv(this.addr,!1,Co),fe(e,i)}}function yd(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ed(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2iv(this.addr,t),fe(e,t)}}function bd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3iv(this.addr,t),fe(e,t)}}function Td(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4iv(this.addr,t),fe(e,t)}}function Ad(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2uiv(this.addr,t),fe(e,t)}}function Rd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3uiv(this.addr,t),fe(e,t)}}function Cd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4uiv(this.addr,t),fe(e,t)}}function Pd(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ao.compareFunction=vl,s=Ao):s=Ul,e.setTexture2D(t||s,r)}function Ld(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Fl,r)}function Id(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ol,r)}function Dd(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Nl,r)}function Ud(n){switch(n){case 5126:return md;case 35664:return gd;case 35665:return _d;case 35666:return xd;case 35674:return vd;case 35675:return Md;case 35676:return Sd;case 5124:case 35670:return yd;case 35667:case 35671:return Ed;case 35668:case 35672:return bd;case 35669:case 35673:return Td;case 5125:return Ad;case 36294:return wd;case 36295:return Rd;case 36296:return Cd;case 35678:case 36198:case 36298:case 36306:case 35682:return Pd;case 35679:case 36299:case 36307:return Ld;case 35680:case 36300:case 36308:case 36293:return Id;case 36289:case 36303:case 36311:case 36292:return Dd}}function Nd(n,t){n.uniform1fv(this.addr,t)}function Fd(n,t){const e=Ci(t,this.size,2);n.uniform2fv(this.addr,e)}function Od(n,t){const e=Ci(t,this.size,3);n.uniform3fv(this.addr,e)}function Bd(n,t){const e=Ci(t,this.size,4);n.uniform4fv(this.addr,e)}function zd(n,t){const e=Ci(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hd(n,t){const e=Ci(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function kd(n,t){const e=Ci(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Gd(n,t){n.uniform1iv(this.addr,t)}function Vd(n,t){n.uniform2iv(this.addr,t)}function Wd(n,t){n.uniform3iv(this.addr,t)}function Xd(n,t){n.uniform4iv(this.addr,t)}function qd(n,t){n.uniform1uiv(this.addr,t)}function Yd(n,t){n.uniform2uiv(this.addr,t)}function $d(n,t){n.uniform3uiv(this.addr,t)}function Kd(n,t){n.uniform4uiv(this.addr,t)}function Zd(n,t,e){const i=this.cache,r=t.length,s=Hr(e,r);he(i,s)||(n.uniform1iv(this.addr,s),fe(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ul,s[a])}function jd(n,t,e){const i=this.cache,r=t.length,s=Hr(e,r);he(i,s)||(n.uniform1iv(this.addr,s),fe(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Fl,s[a])}function Jd(n,t,e){const i=this.cache,r=t.length,s=Hr(e,r);he(i,s)||(n.uniform1iv(this.addr,s),fe(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Ol,s[a])}function Qd(n,t,e){const i=this.cache,r=t.length,s=Hr(e,r);he(i,s)||(n.uniform1iv(this.addr,s),fe(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Nl,s[a])}function tp(n){switch(n){case 5126:return Nd;case 35664:return Fd;case 35665:return Od;case 35666:return Bd;case 35674:return zd;case 35675:return Hd;case 35676:return kd;case 5124:case 35670:return Gd;case 35667:case 35671:return Vd;case 35668:case 35672:return Wd;case 35669:case 35673:return Xd;case 5125:return qd;case 36294:return Yd;case 36295:return $d;case 36296:return Kd;case 35678:case 36198:case 36298:case 36306:case 35682:return Zd;case 35679:case 36299:case 36307:return jd;case 35680:case 36300:case 36308:case 36293:return Jd;case 36289:case 36303:case 36311:case 36292:return Qd}}class ep{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ud(e.type)}}class np{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tp(e.type)}}class ip{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function Io(n,t){n.seq.push(t),n.map[t.id]=t}function rp(n,t,e){const i=n.name,r=i.length;for(xs.lastIndex=0;;){const s=xs.exec(i),a=xs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Io(e,c===void 0?new ep(o,n,t):new np(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new ip(o),Io(e,f)),e=f}}}class Pr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);rp(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Do(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sp=37297;let ap=0;function op(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Uo=new Bt;function lp(n){Xt._getMatrix(Uo,Xt.workingColorSpace,n);const t=`mat3( ${Uo.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(n)){case zr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function No(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+op(n.getShaderSource(t),a)}else return r}function cp(n,t){const e=lp(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function up(n,t){let e;switch(t){case wc:e="Linear";break;case Rc:e="Reinhard";break;case Cc:e="Cineon";break;case ll:e="ACESFilmic";break;case Lc:e="AgX";break;case Ic:e="Neutral";break;case Pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new N;function hp(){Xt.getLuminanceCoefficients(vr);const n=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function dp(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function pp(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Gi(n){return n!==""}function Fo(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oo(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(n){return n.replace(mp,_p)}const gp=new Map;function _p(n,t){let e=kt[t];if(e===void 0){const i=gp.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return fa(e)}const xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(n){return n.replace(xp,vp)}function vp(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zo(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Mp(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ma?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function Sp(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Si:case yi:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yp(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ep(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sa:t="ENVMAP_BLENDING_MULTIPLY";break;case Tc:t="ENVMAP_BLENDING_MIX";break;case Ac:t="ENVMAP_BLENDING_ADD";break}return t}function bp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Tp(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Mp(e),c=Sp(e),u=yp(e),f=Ep(e),h=bp(e),p=fp(e),g=dp(s),_=r.createProgram();let m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),d.length>0&&(d+=`
`)):(m=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),d=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?kt.tonemapping_pars_fragment:"",e.toneMapping!==wn?up("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,cp("linearToOutputTexel",e.outputColorSpace),hp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),a=fa(a),a=Fo(a,e),a=Oo(a,e),o=fa(o),o=Fo(o,e),o=Oo(o,e),a=Bo(a),o=Bo(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=T+m+a,M=T+d+o,O=Do(r,r.VERTEX_SHADER,A),b=Do(r,r.FRAGMENT_SHADER,M);r.attachShader(_,O),r.attachShader(_,b),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(P){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(O).trim(),K=r.getShaderInfoLog(b).trim();let J=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,O,b);else{const et=No(r,O,"vertex"),q=No(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+et+`
`+q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||K==="")&&(Z=!1);Z&&(P.diagnostics={runnable:J,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:K,prefix:d}})}r.deleteShader(O),r.deleteShader(b),L=new Pr(r,_),E=pp(r,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,sp)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ap++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=b,this}let Ap=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Rp(t),e.set(t,i)),i}}class Rp{constructor(t){this.id=Ap++,this.code=t,this.usedTimes=0}}function Cp(n,t,e,i,r,s,a){const o=new bl,l=new wp,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,P,G,H){const K=G.fog,J=H.geometry,Z=E.isMeshStandardMaterial?G.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),q=et&&et.mapping===Br?et.image.height:null,ot=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const pt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,wt=pt!==void 0?pt.length:0;let y=0;J.morphAttributes.position!==void 0&&(y=1),J.morphAttributes.normal!==void 0&&(y=2),J.morphAttributes.color!==void 0&&(y=3);let I,R,D,k;if(ot){const jt=Ke[ot];I=jt.vertexShader,R=jt.fragmentShader}else I=E.vertexShader,R=E.fragmentShader,l.update(E),D=l.getVertexShaderID(E),k=l.getFragmentShaderID(E);const Y=n.getRenderTarget(),it=n.state.buffers.depth.getReversed(),mt=H.isInstancedMesh===!0,rt=H.isBatchedMesh===!0,Nt=!!E.map,It=!!E.matcap,Rt=!!et,U=!!E.aoMap,se=!!E.lightMap,Gt=!!E.bumpMap,Ct=!!E.normalMap,bt=!!E.displacementMap,zt=!!E.emissiveMap,Mt=!!E.metalnessMap,w=!!E.roughnessMap,x=E.anisotropy>0,V=E.clearcoat>0,Q=E.dispersion>0,nt=E.iridescence>0,j=E.sheen>0,Tt=E.transmission>0,ut=x&&!!E.anisotropyMap,_t=V&&!!E.clearcoatMap,Wt=V&&!!E.clearcoatNormalMap,st=V&&!!E.clearcoatRoughnessMap,xt=nt&&!!E.iridescenceMap,Pt=nt&&!!E.iridescenceThicknessMap,Dt=j&&!!E.sheenColorMap,vt=j&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Ht=!!E.specularColorMap,ee=!!E.specularIntensityMap,F=Tt&&!!E.transmissionMap,ct=Tt&&!!E.thicknessMap,$=!!E.gradientMap,tt=!!E.alphaMap,dt=E.alphaTest>0,ht=!!E.alphaHash,Ft=!!E.extensions;let ae=wn;E.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ae=n.toneMapping);const ge={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:I,fragmentShader:R,defines:E.defines,customVertexShaderID:D,customFragmentShaderID:k,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:rt,batchingColor:rt&&H._colorsTexture!==null,instancing:mt,instancingColor:mt&&H.instanceColor!==null,instancingMorph:mt&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ai,alphaToCoverage:!!E.alphaToCoverage,map:Nt,matcap:It,envMap:Rt,envMapMode:Rt&&et.mapping,envMapCubeUVHeight:q,aoMap:U,lightMap:se,bumpMap:Gt,normalMap:Ct,displacementMap:h&&bt,emissiveMap:zt,normalMapObjectSpace:Ct&&E.normalMapType===Fc,normalMapTangentSpace:Ct&&E.normalMapType===Ca,metalnessMap:Mt,roughnessMap:w,anisotropy:x,anisotropyMap:ut,clearcoat:V,clearcoatMap:_t,clearcoatNormalMap:Wt,clearcoatRoughnessMap:st,dispersion:Q,iridescence:nt,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:j,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:Vt,specularColorMap:Ht,specularIntensityMap:ee,transmission:Tt,transmissionMap:F,thicknessMap:ct,gradientMap:$,opaque:E.transparent===!1&&E.blending===gi&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:dt,alphaHash:ht,combine:E.combine,mapUv:Nt&&_(E.map.channel),aoMapUv:U&&_(E.aoMap.channel),lightMapUv:se&&_(E.lightMap.channel),bumpMapUv:Gt&&_(E.bumpMap.channel),normalMapUv:Ct&&_(E.normalMap.channel),displacementMapUv:bt&&_(E.displacementMap.channel),emissiveMapUv:zt&&_(E.emissiveMap.channel),metalnessMapUv:Mt&&_(E.metalnessMap.channel),roughnessMapUv:w&&_(E.roughnessMap.channel),anisotropyMapUv:ut&&_(E.anisotropyMap.channel),clearcoatMapUv:_t&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(E.sheenRoughnessMap.channel),specularMapUv:Vt&&_(E.specularMap.channel),specularColorMapUv:Ht&&_(E.specularColorMap.channel),specularIntensityMapUv:ee&&_(E.specularIntensityMap.channel),transmissionMapUv:F&&_(E.transmissionMap.channel),thicknessMapUv:ct&&_(E.thicknessMap.channel),alphaMapUv:tt&&_(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ct||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(Nt||tt),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:it,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:y,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Nt&&E.map.isVideoTexture===!0&&Xt.getTransfer(E.map.colorSpace)===Jt,decodeVideoTextureEmissive:zt&&E.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(E.emissiveMap.colorSpace)===Jt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===De,flipSided:E.side===Me,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function d(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)v.push(P),v.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(T(v,E),A(v,E),v.push(n.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function T(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function A(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const v=g[E.type];let P;if(v){const G=Ke[v];P=hu.clone(G.uniforms)}else P=E.uniforms;return P}function O(E,v){let P;for(let G=0,H=u.length;G<H;G++){const K=u[G];if(K.cacheKey===v){P=K,++P.usedTimes;break}}return P===void 0&&(P=new Tp(n,v,E,s),u.push(P)),P}function b(E){if(--E.usedTimes===0){const v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:O,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:L}}function Pp(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Lp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ho(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ko(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,h,p,g,_,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),t++,d}function o(f,h,p,g,_,m){const d=a(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(f,h,p,g,_,m){const d=a(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(f,h){e.length>1&&e.sort(f||Lp),i.length>1&&i.sort(h||Ho),r.length>1&&r.sort(h||Ho)}function u(){for(let f=t,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Ip(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new ko,n.set(i,[a])):r>=s.length?(a=new ko,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Dp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Lt};break;case"SpotLight":e={position:new N,direction:new N,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Up(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Np=0;function Fp(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Op(n){const t=new Dp,e=Up(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new $t,a=new $t;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,T=0,A=0,M=0,O=0,b=0,C=0;c.sort(Fp);for(let E=0,v=c.length;E<v;E++){const P=c[E],G=P.color,H=P.intensity,K=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=G.r*H,f+=G.g*H,h+=G.b*H;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],H);C++}else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const et=P.shadow,q=e.get(P);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=Z,p++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(G).multiplyScalar(H),Z.distance=K,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[_]=Z;const et=P.shadow;if(P.map&&(i.spotLightMap[O]=P.map,O++,et.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[_]=et.matrix,P.castShadow){const q=e.get(P);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=J,M++}_++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy(G).multiplyScalar(H),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Z,m++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const et=P.shadow,q=e.get(P);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,q.shadowCameraNear=et.camera.near,q.shadowCameraFar=et.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=P.shadow.matrix,A++}i.point[g]=Z,g++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(H),Z.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[d]=Z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==T||L.numPointShadows!==A||L.numSpotShadows!==M||L.numSpotMaps!==O||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+O-b,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=T,L.numPointShadows=A,L.numSpotShadows=M,L.numSpotMaps=O,L.numLightProbes=C,i.version=Np++)}function l(c,u){let f=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const A=c[d];if(A.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(A.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(A.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Go(n){const t=new Op(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Bp(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Go(n),t.set(r,[o])):s>=a.length?(o=new Go(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class zp extends Zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hp extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
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
}`;function Vp(n,t,e){let i=new Pa;const r=new qt,s=new qt,a=new te,o=new zp({depthPacking:Nc}),l=new Hp,c={},u=e.maxTextureSize,f={[Rn]:Me,[Me]:Rn,[De]:De},h=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:kp,fragmentShader:Gp}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let d=this.type;this.render=function(b,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),G=n.state;G.setBlending(An),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=d!==un&&this.type===un,K=d===un&&this.type!==un;for(let J=0,Z=b.length;J<Z;J++){const et=b[J],q=et.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ot=q.getFrameExtents();if(r.multiply(ot),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ot.x),r.x=s.x*ot.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ot.y),r.y=s.y*ot.y,q.mapSize.y=s.y)),q.map===null||H===!0||K===!0){const wt=this.type!==un?{minFilter:Ue,magFilter:Ue}:{};q.map!==null&&q.map.dispose(),q.map=new $n(r.x,r.y,wt),q.map.texture.name=et.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const pt=q.getViewportCount();for(let wt=0;wt<pt;wt++){const y=q.getViewport(wt);a.set(s.x*y.x,s.y*y.y,s.x*y.z,s.y*y.w),G.viewport(a),q.updateMatrices(et,wt),i=q.getFrustum(),M(C,L,q.camera,et,this.type)}q.isPointLightShadow!==!0&&this.type===un&&T(q,L),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,v,P)};function T(b,C){const L=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $n(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,L,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,L,p,_,null)}function A(b,C,L,E){let v=null;const P=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)v=P;else if(v=L.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=v.uuid,H=C.uuid;let K=c[G];K===void 0&&(K={},c[G]=K);let J=K[H];J===void 0&&(J=v.clone(),K[H]=J,C.addEventListener("dispose",O)),v=J}if(v.visible=C.visible,v.wireframe=C.wireframe,E===un?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:f[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=n.properties.get(v);G.light=L}return v}function M(b,C,L,E,v){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===un)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const H=t.update(b),K=b.material;if(Array.isArray(K)){const J=H.groups;for(let Z=0,et=J.length;Z<et;Z++){const q=J[Z],ot=K[q.materialIndex];if(ot&&ot.visible){const pt=A(b,ot,E,v);b.onBeforeShadow(n,b,C,L,H,pt,q),n.renderBufferDirect(L,null,H,pt,b,q),b.onAfterShadow(n,b,C,L,H,pt,q)}}}else if(K.visible){const J=A(b,K,E,v);b.onBeforeShadow(n,b,C,L,H,J,null),n.renderBufferDirect(L,null,H,J,b,null),b.onAfterShadow(n,b,C,L,H,J,null)}}const G=b.children;for(let H=0,K=G.length;H<K;H++)M(G[H],C,L,E,v)}function O(b){b.target.removeEventListener("dispose",O);for(const L in c){const E=c[L],v=b.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const Wp={[Rs]:Cs,[Ps]:Ds,[Ls]:Us,[Mi]:Is,[Cs]:Rs,[Ds]:Ps,[Us]:Ls,[Is]:Mi};function Xp(n,t){function e(){let F=!1;const ct=new te;let $=null;const tt=new te(0,0,0,0);return{setMask:function(dt){$!==dt&&!F&&(n.colorMask(dt,dt,dt,dt),$=dt)},setLocked:function(dt){F=dt},setClear:function(dt,ht,Ft,ae,ge){ge===!0&&(dt*=ae,ht*=ae,Ft*=ae),ct.set(dt,ht,Ft,ae),tt.equals(ct)===!1&&(n.clearColor(dt,ht,Ft,ae),tt.copy(ct))},reset:function(){F=!1,$=null,tt.set(-1,0,0,0)}}}function i(){let F=!1,ct=!1,$=null,tt=null,dt=null;return{setReversed:function(ht){if(ct!==ht){const Ft=t.get("EXT_clip_control");ct?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const ae=dt;dt=null,this.setClear(ae)}ct=ht},getReversed:function(){return ct},setTest:function(ht){ht?Y(n.DEPTH_TEST):it(n.DEPTH_TEST)},setMask:function(ht){$!==ht&&!F&&(n.depthMask(ht),$=ht)},setFunc:function(ht){if(ct&&(ht=Wp[ht]),tt!==ht){switch(ht){case Rs:n.depthFunc(n.NEVER);break;case Cs:n.depthFunc(n.ALWAYS);break;case Ps:n.depthFunc(n.LESS);break;case Mi:n.depthFunc(n.LEQUAL);break;case Ls:n.depthFunc(n.EQUAL);break;case Is:n.depthFunc(n.GEQUAL);break;case Ds:n.depthFunc(n.GREATER);break;case Us:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=ht}},setLocked:function(ht){F=ht},setClear:function(ht){dt!==ht&&(ct&&(ht=1-ht),n.clearDepth(ht),dt=ht)},reset:function(){F=!1,$=null,tt=null,dt=null,ct=!1}}}function r(){let F=!1,ct=null,$=null,tt=null,dt=null,ht=null,Ft=null,ae=null,ge=null;return{setTest:function(jt){F||(jt?Y(n.STENCIL_TEST):it(n.STENCIL_TEST))},setMask:function(jt){ct!==jt&&!F&&(n.stencilMask(jt),ct=jt)},setFunc:function(jt,Be,en){($!==jt||tt!==Be||dt!==en)&&(n.stencilFunc(jt,Be,en),$=jt,tt=Be,dt=en)},setOp:function(jt,Be,en){(ht!==jt||Ft!==Be||ae!==en)&&(n.stencilOp(jt,Be,en),ht=jt,Ft=Be,ae=en)},setLocked:function(jt){F=jt},setClear:function(jt){ge!==jt&&(n.clearStencil(jt),ge=jt)},reset:function(){F=!1,ct=null,$=null,tt=null,dt=null,ht=null,Ft=null,ae=null,ge=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,A=null,M=null,O=null,b=null,C=new Lt(0,0,0),L=0,E=!1,v=null,P=null,G=null,H=null,K=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,et=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=et>=2);let ot=null,pt={};const wt=n.getParameter(n.SCISSOR_BOX),y=n.getParameter(n.VIEWPORT),I=new te().fromArray(wt),R=new te().fromArray(y);function D(F,ct,$,tt){const dt=new Uint8Array(4),ht=n.createTexture();n.bindTexture(F,ht),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<$;Ft++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(ct+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return ht}const k={};k[n.TEXTURE_2D]=D(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=D(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=D(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=D(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(n.DEPTH_TEST),a.setFunc(Mi),Gt(!1),Ct(Ya),Y(n.CULL_FACE),U(An);function Y(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function it(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function mt(F,ct){return f[F]!==ct?(n.bindFramebuffer(F,ct),f[F]=ct,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ct),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function rt(F,ct){let $=p,tt=!1;if(F){$=h.get(ct),$===void 0&&($=[],h.set(ct,$));const dt=F.textures;if($.length!==dt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Ft=dt.length;ht<Ft;ht++)$[ht]=n.COLOR_ATTACHMENT0+ht;$.length=dt.length,tt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,tt=!0);tt&&n.drawBuffers($)}function Nt(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const It={[Wn]:n.FUNC_ADD,[lc]:n.FUNC_SUBTRACT,[cc]:n.FUNC_REVERSE_SUBTRACT};It[uc]=n.MIN,It[hc]=n.MAX;const Rt={[fc]:n.ZERO,[dc]:n.ONE,[pc]:n.SRC_COLOR,[As]:n.SRC_ALPHA,[Mc]:n.SRC_ALPHA_SATURATE,[xc]:n.DST_COLOR,[gc]:n.DST_ALPHA,[mc]:n.ONE_MINUS_SRC_COLOR,[ws]:n.ONE_MINUS_SRC_ALPHA,[vc]:n.ONE_MINUS_DST_COLOR,[_c]:n.ONE_MINUS_DST_ALPHA,[Sc]:n.CONSTANT_COLOR,[yc]:n.ONE_MINUS_CONSTANT_COLOR,[Ec]:n.CONSTANT_ALPHA,[bc]:n.ONE_MINUS_CONSTANT_ALPHA};function U(F,ct,$,tt,dt,ht,Ft,ae,ge,jt){if(F===An){_===!0&&(it(n.BLEND),_=!1);return}if(_===!1&&(Y(n.BLEND),_=!0),F!==oc){if(F!==m||jt!==E){if((d!==Wn||M!==Wn)&&(n.blendEquation(n.FUNC_ADD),d=Wn,M=Wn),jt)switch(F){case gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ir:n.blendFunc(n.ONE,n.ONE);break;case $a:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ka:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ir:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $a:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ka:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,A=null,O=null,b=null,C.set(0,0,0),L=0,m=F,E=jt}return}dt=dt||ct,ht=ht||$,Ft=Ft||tt,(ct!==d||dt!==M)&&(n.blendEquationSeparate(It[ct],It[dt]),d=ct,M=dt),($!==T||tt!==A||ht!==O||Ft!==b)&&(n.blendFuncSeparate(Rt[$],Rt[tt],Rt[ht],Rt[Ft]),T=$,A=tt,O=ht,b=Ft),(ae.equals(C)===!1||ge!==L)&&(n.blendColor(ae.r,ae.g,ae.b,ge),C.copy(ae),L=ge),m=F,E=!1}function se(F,ct){F.side===De?it(n.CULL_FACE):Y(n.CULL_FACE);let $=F.side===Me;ct&&($=!$),Gt($),F.blending===gi&&F.transparent===!1?U(An):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const tt=F.stencilWrite;o.setTest(tt),tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),zt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):it(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(F){v!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),v=F)}function Ct(F){F!==rc?(Y(n.CULL_FACE),F!==P&&(F===Ya?n.cullFace(n.BACK):F===sc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):it(n.CULL_FACE),P=F}function bt(F){F!==G&&(Z&&n.lineWidth(F),G=F)}function zt(F,ct,$){F?(Y(n.POLYGON_OFFSET_FILL),(H!==ct||K!==$)&&(n.polygonOffset(ct,$),H=ct,K=$)):it(n.POLYGON_OFFSET_FILL)}function Mt(F){F?Y(n.SCISSOR_TEST):it(n.SCISSOR_TEST)}function w(F){F===void 0&&(F=n.TEXTURE0+J-1),ot!==F&&(n.activeTexture(F),ot=F)}function x(F,ct,$){$===void 0&&(ot===null?$=n.TEXTURE0+J-1:$=ot);let tt=pt[$];tt===void 0&&(tt={type:void 0,texture:void 0},pt[$]=tt),(tt.type!==F||tt.texture!==ct)&&(ot!==$&&(n.activeTexture($),ot=$),n.bindTexture(F,ct||k[F]),tt.type=F,tt.texture=ct)}function V(){const F=pt[ot];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Wt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(F){I.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),I.copy(F))}function vt(F){R.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),R.copy(F))}function Vt(F,ct){let $=c.get(ct);$===void 0&&($=new WeakMap,c.set(ct,$));let tt=$.get(F);tt===void 0&&(tt=n.getUniformBlockIndex(ct,F.name),$.set(F,tt))}function Ht(F,ct){const tt=c.get(ct).get(F);l.get(ct)!==tt&&(n.uniformBlockBinding(ct,tt,F.__bindingPointIndex),l.set(ct,tt))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ot=null,pt={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,A=null,M=null,O=null,b=null,C=new Lt(0,0,0),L=0,E=!1,v=null,P=null,G=null,H=null,K=null,I.set(0,0,n.canvas.width,n.canvas.height),R.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:it,bindFramebuffer:mt,drawBuffers:rt,useProgram:Nt,setBlending:U,setMaterial:se,setFlipSided:Gt,setCullFace:Ct,setLineWidth:bt,setPolygonOffset:zt,setScissorTest:Mt,activeTexture:w,bindTexture:x,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:nt,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Vt,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:st,texSubImage2D:j,texSubImage3D:Tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Dt,viewport:vt,reset:ee}}function Vo(n,t,e,i){const r=qp(i);switch(e){case dl:return n*t;case ml:return n*t;case gl:return n*t*2;case Ta:return n*t/r.components*r.byteLength;case Aa:return n*t/r.components*r.byteLength;case _l:return n*t*2/r.components*r.byteLength;case wa:return n*t*2/r.components*r.byteLength;case pl:return n*t*3/r.components*r.byteLength;case We:return n*t*4/r.components*r.byteLength;case Ra:return n*t*4/r.components*r.byteLength;case Tr:case Ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wr:case Rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zs:case ks:return Math.max(n,16)*Math.max(t,8)/4;case Bs:case Hs:return Math.max(n,8)*Math.max(t,8)/2;case Gs:case Vs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ws:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qs:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ys:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $s:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ks:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Zs:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case js:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Js:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Qs:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ta:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ea:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case na:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ia:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ra:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Cr:case sa:case aa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xl:case oa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case la:case ca:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qp(n){switch(n){case pn:case ul:return{byteLength:1,components:1};case Xi:case hl:case Yi:return{byteLength:2,components:1};case Ea:case ba:return{byteLength:2,components:4};case Yn:case ya:case je:return{byteLength:4,components:1};case fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Yp(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Nr("canvas")}function _(w,x,V){let Q=1;const nt=Mt(w);if((nt.width>V||nt.height>V)&&(Q=V/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(Q*nt.width),Tt=Math.floor(Q*nt.height);f===void 0&&(f=g(j,Tt));const ut=x?g(j,Tt):f;return ut.width=j,ut.height=Tt,ut.getContext("2d").drawImage(w,0,0,j,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+j+"x"+Tt+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(w,x,V,Q,nt=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=x;if(x===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),x===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),x===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),x===n.RGBA){const Tt=nt?zr:Xt.getTransfer(Q);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=Tt===Jt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(w,x){let V;return w?x===null||x===Yn||x===Ei?V=n.DEPTH24_STENCIL8:x===je?V=n.DEPTH32F_STENCIL8:x===Xi&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yn||x===Ei?V=n.DEPTH_COMPONENT24:x===je?V=n.DEPTH_COMPONENT32F:x===Xi&&(V=n.DEPTH_COMPONENT16),V}function O(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ue&&w.minFilter!==Ze?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function b(w){const x=w.target;x.removeEventListener("dispose",b),L(x),x.isVideoTexture&&u.delete(x)}function C(w){const x=w.target;x.removeEventListener("dispose",C),v(x)}function L(w){const x=i.get(w);if(x.__webglInit===void 0)return;const V=w.source,Q=h.get(V);if(Q){const nt=Q[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(w),Object.keys(Q).length===0&&h.delete(V)}i.remove(w)}function E(w){const x=i.get(w);n.deleteTexture(x.__webglTexture);const V=w.source,Q=h.get(V);delete Q[x.__cacheKey],a.memory.textures--}function v(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let nt=0;nt<x.__webglFramebuffer[Q].length;nt++)n.deleteFramebuffer(x.__webglFramebuffer[Q][nt]);else n.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[Q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=w.textures;for(let Q=0,nt=V.length;Q<nt;Q++){const j=i.get(V[Q]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(V[Q])}i.remove(w)}let P=0;function G(){P=0}function H(){const w=P;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w}function K(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function J(w,x){const V=i.get(w);if(w.isVideoTexture&&bt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(V,w,x);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+x)}function Z(w,x){const V=i.get(w);if(w.version>0&&V.__version!==w.version){R(V,w,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+x)}function et(w,x){const V=i.get(w);if(w.version>0&&V.__version!==w.version){R(V,w,x);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+x)}function q(w,x){const V=i.get(w);if(w.version>0&&V.__version!==w.version){D(V,w,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+x)}const ot={[Dr]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[Os]:n.MIRRORED_REPEAT},pt={[Ue]:n.NEAREST,[Dc]:n.NEAREST_MIPMAP_NEAREST,[Qi]:n.NEAREST_MIPMAP_LINEAR,[Ze]:n.LINEAR,[Wr]:n.LINEAR_MIPMAP_NEAREST,[Tn]:n.LINEAR_MIPMAP_LINEAR},wt={[Oc]:n.NEVER,[Vc]:n.ALWAYS,[Bc]:n.LESS,[vl]:n.LEQUAL,[zc]:n.EQUAL,[Gc]:n.GEQUAL,[Hc]:n.GREATER,[kc]:n.NOTEQUAL};function y(w,x){if(x.type===je&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ze||x.magFilter===Wr||x.magFilter===Qi||x.magFilter===Tn||x.minFilter===Ze||x.minFilter===Wr||x.minFilter===Qi||x.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ot[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ot[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ot[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,pt[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,wt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ue||x.minFilter!==Qi&&x.minFilter!==Tn||x.type===je&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function I(w,x){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",b));const Q=x.source;let nt=h.get(Q);nt===void 0&&(nt={},h.set(Q,nt));const j=K(x);if(j!==w.__cacheKey){nt[j]===void 0&&(nt[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),nt[j].usedTimes++;const Tt=nt[w.__cacheKey];Tt!==void 0&&(nt[w.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(x)),w.__cacheKey=j,w.__webglTexture=nt[j].texture}return V}function R(w,x,V){let Q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=n.TEXTURE_3D);const nt=I(w,x),j=x.source;e.bindTexture(Q,w.__webglTexture,n.TEXTURE0+V);const Tt=i.get(j);if(j.version!==Tt.__version||nt===!0){e.activeTexture(n.TEXTURE0+V);const ut=Xt.getPrimaries(Xt.workingColorSpace),_t=x.colorSpace===En?null:Xt.getPrimaries(x.colorSpace),Wt=x.colorSpace===En||ut===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let st=_(x.image,!1,r.maxTextureSize);st=zt(x,st);const xt=s.convert(x.format,x.colorSpace),Pt=s.convert(x.type);let Dt=A(x.internalFormat,xt,Pt,x.colorSpace,x.isVideoTexture);y(Q,x);let vt;const Vt=x.mipmaps,Ht=x.isVideoTexture!==!0,ee=Tt.__version===void 0||nt===!0,F=j.dataReady,ct=O(x,st);if(x.isDepthTexture)Dt=M(x.format===bi,x.type),ee&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,Dt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Dt,st.width,st.height,0,xt,Pt,null));else if(x.isDataTexture)if(Vt.length>0){Ht&&ee&&e.texStorage2D(n.TEXTURE_2D,ct,Dt,Vt[0].width,Vt[0].height);for(let $=0,tt=Vt.length;$<tt;$++)vt=Vt[$],Ht?F&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,vt.width,vt.height,xt,Pt,vt.data):e.texImage2D(n.TEXTURE_2D,$,Dt,vt.width,vt.height,0,xt,Pt,vt.data);x.generateMipmaps=!1}else Ht?(ee&&e.texStorage2D(n.TEXTURE_2D,ct,Dt,st.width,st.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,xt,Pt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,st.width,st.height,0,xt,Pt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ht&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Dt,Vt[0].width,Vt[0].height,st.depth);for(let $=0,tt=Vt.length;$<tt;$++)if(vt=Vt[$],x.format!==We)if(xt!==null)if(Ht){if(F)if(x.layerUpdates.size>0){const dt=Vo(vt.width,vt.height,x.format,x.type);for(const ht of x.layerUpdates){const Ft=vt.data.subarray(ht*dt/vt.data.BYTES_PER_ELEMENT,(ht+1)*dt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,ht,vt.width,vt.height,1,xt,Ft)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,vt.width,vt.height,st.depth,xt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Dt,vt.width,vt.height,st.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,vt.width,vt.height,st.depth,xt,Pt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Dt,vt.width,vt.height,st.depth,0,xt,Pt,vt.data)}else{Ht&&ee&&e.texStorage2D(n.TEXTURE_2D,ct,Dt,Vt[0].width,Vt[0].height);for(let $=0,tt=Vt.length;$<tt;$++)vt=Vt[$],x.format!==We?xt!==null?Ht?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?F&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,vt.width,vt.height,xt,Pt,vt.data):e.texImage2D(n.TEXTURE_2D,$,Dt,vt.width,vt.height,0,xt,Pt,vt.data)}else if(x.isDataArrayTexture)if(Ht){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Dt,st.width,st.height,st.depth),F)if(x.layerUpdates.size>0){const $=Vo(st.width,st.height,x.format,x.type);for(const tt of x.layerUpdates){const dt=st.data.subarray(tt*$/st.data.BYTES_PER_ELEMENT,(tt+1)*$/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,xt,Pt,dt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Pt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,st.width,st.height,st.depth,0,xt,Pt,st.data);else if(x.isData3DTexture)Ht?(ee&&e.texStorage3D(n.TEXTURE_3D,ct,Dt,st.width,st.height,st.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Pt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,st.width,st.height,st.depth,0,xt,Pt,st.data);else if(x.isFramebufferTexture){if(ee)if(Ht)e.texStorage2D(n.TEXTURE_2D,ct,Dt,st.width,st.height);else{let $=st.width,tt=st.height;for(let dt=0;dt<ct;dt++)e.texImage2D(n.TEXTURE_2D,dt,Dt,$,tt,0,xt,Pt,null),$>>=1,tt>>=1}}else if(Vt.length>0){if(Ht&&ee){const $=Mt(Vt[0]);e.texStorage2D(n.TEXTURE_2D,ct,Dt,$.width,$.height)}for(let $=0,tt=Vt.length;$<tt;$++)vt=Vt[$],Ht?F&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,xt,Pt,vt):e.texImage2D(n.TEXTURE_2D,$,Dt,xt,Pt,vt);x.generateMipmaps=!1}else if(Ht){if(ee){const $=Mt(st);e.texStorage2D(n.TEXTURE_2D,ct,Dt,$.width,$.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Pt,st)}else e.texImage2D(n.TEXTURE_2D,0,Dt,xt,Pt,st);m(x)&&d(Q),Tt.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function D(w,x,V){if(x.image.length!==6)return;const Q=I(w,x),nt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+V);const j=i.get(nt);if(nt.version!==j.__version||Q===!0){e.activeTexture(n.TEXTURE0+V);const Tt=Xt.getPrimaries(Xt.workingColorSpace),ut=x.colorSpace===En?null:Xt.getPrimaries(x.colorSpace),_t=x.colorSpace===En||Tt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!Wt&&!st?xt[tt]=_(x.image[tt],!0,r.maxCubemapSize):xt[tt]=st?x.image[tt].image:x.image[tt],xt[tt]=zt(x,xt[tt]);const Pt=xt[0],Dt=s.convert(x.format,x.colorSpace),vt=s.convert(x.type),Vt=A(x.internalFormat,Dt,vt,x.colorSpace),Ht=x.isVideoTexture!==!0,ee=j.__version===void 0||Q===!0,F=nt.dataReady;let ct=O(x,Pt);y(n.TEXTURE_CUBE_MAP,x);let $;if(Wt){Ht&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Vt,Pt.width,Pt.height);for(let tt=0;tt<6;tt++){$=xt[tt].mipmaps;for(let dt=0;dt<$.length;dt++){const ht=$[dt];x.format!==We?Dt!==null?Ht?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,ht.width,ht.height,Dt,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,Vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,ht.width,ht.height,Dt,vt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,Vt,ht.width,ht.height,0,Dt,vt,ht.data)}}}else{if($=x.mipmaps,Ht&&ee){$.length>0&&ct++;const tt=Mt(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Vt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Ht?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,Dt,vt,xt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,xt[tt].width,xt[tt].height,0,Dt,vt,xt[tt].data);for(let dt=0;dt<$.length;dt++){const Ft=$[dt].image[tt].image;Ht?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Ft.width,Ft.height,Dt,vt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,Vt,Ft.width,Ft.height,0,Dt,vt,Ft.data)}}else{Ht?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,vt,xt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,Dt,vt,xt[tt]);for(let dt=0;dt<$.length;dt++){const ht=$[dt];Ht?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Dt,vt,ht.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,Vt,Dt,vt,ht.image[tt])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),j.__version=nt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function k(w,x,V,Q,nt,j){const Tt=s.convert(V.format,V.colorSpace),ut=s.convert(V.type),_t=A(V.internalFormat,Tt,ut,V.colorSpace),Wt=i.get(x),st=i.get(V);if(st.__renderTarget=x,!Wt.__hasExternalTextures){const xt=Math.max(1,x.width>>j),Pt=Math.max(1,x.height>>j);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,j,_t,xt,Pt,x.depth,0,Tt,ut,null):e.texImage2D(nt,j,_t,xt,Pt,0,Tt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Ct(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,nt,st.__webglTexture,0,Gt(x)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,nt,st.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(w,x,V){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){const Q=x.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,j=M(x.stencilBuffer,nt),Tt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=Gt(x);Ct(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,j,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,w)}else{const Q=x.textures;for(let nt=0;nt<Q.length;nt++){const j=Q[nt],Tt=s.convert(j.format,j.colorSpace),ut=s.convert(j.type),_t=A(j.internalFormat,Tt,ut,j.colorSpace),Wt=Gt(x);V&&Ct(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt,_t,x.width,x.height):Ct(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt,_t,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,_t,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const nt=Q.__webglTexture,j=Gt(x);if(x.depthTexture.format===_i)Ct(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(x.depthTexture.format===bi)Ct(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function mt(w){const x=i.get(w),V=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){const nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",nt)};Q.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=Q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");it(x.__webglFramebuffer,w)}else if(V){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=n.createRenderbuffer(),Y(x.__webglDepthbuffer[Q],w,!1);else{const nt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Y(x.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(w,x,V){const Q=i.get(w);x!==void 0&&k(Q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&mt(w)}function Nt(w){const x=w.texture,V=i.get(w),Q=i.get(x);w.addEventListener("dispose",C);const nt=w.textures,j=w.isWebGLCubeRenderTarget===!0,Tt=nt.length>1;if(Tt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=x.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let _t=0;_t<x.mipmaps.length;_t++)V.__webglFramebuffer[ut][_t]=n.createFramebuffer()}else V.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)V.__webglFramebuffer[ut]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ut=0,_t=nt.length;ut<_t;ut++){const Wt=i.get(nt[ut]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Ct(w)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const _t=nt[ut];V.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ut]);const Wt=s.convert(_t.format,_t.colorSpace),st=s.convert(_t.type),xt=A(_t.internalFormat,Wt,st,_t.colorSpace,w.isXRRenderTarget===!0),Pt=Gt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,xt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,V.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),y(n.TEXTURE_CUBE_MAP,x);for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)k(V.__webglFramebuffer[ut][_t],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else k(V.__webglFramebuffer[ut],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ut=0,_t=nt.length;ut<_t;ut++){const Wt=nt[ut],st=i.get(Wt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),y(n.TEXTURE_2D,Wt),k(V.__webglFramebuffer,w,Wt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(Wt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),y(ut,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)k(V.__webglFramebuffer[_t],w,x,n.COLOR_ATTACHMENT0,ut,_t);else k(V.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,ut,0);m(x)&&d(ut),e.unbindTexture()}w.depthBuffer&&mt(w)}function It(w){const x=w.textures;for(let V=0,Q=x.length;V<Q;V++){const nt=x[V];if(m(nt)){const j=T(w),Tt=i.get(nt).__webglTexture;e.bindTexture(j,Tt),d(j),e.unbindTexture()}}}const Rt=[],U=[];function se(w){if(w.samples>0){if(Ct(w)===!1){const x=w.textures,V=w.width,Q=w.height;let nt=n.COLOR_BUFFER_BIT;const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(w),ut=x.length>1;if(ut)for(let _t=0;_t<x.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Wt=i.get(x[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Wt,0)}n.blitFramebuffer(0,0,V,Q,0,0,V,Q,nt,n.NEAREST),l===!0&&(Rt.length=0,U.length=0,Rt.push(n.COLOR_ATTACHMENT0+_t),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Rt.push(j),U.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<x.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Wt=i.get(x[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Gt(w){return Math.min(r.maxSamples,w.samples)}function Ct(w){const x=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function bt(w){const x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function zt(w,x){const V=w.colorSpace,Q=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Ai&&V!==En&&(Xt.getTransfer(V)===Jt?(Q!==We||nt!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=q,this.rebindTextures=rt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=k,this.useMultisampledRTT=Ct}function $p(n,t){function e(i,r=En){let s;const a=Xt.getTransfer(r);if(i===pn)return n.UNSIGNED_BYTE;if(i===Ea)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ba)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ul)return n.BYTE;if(i===hl)return n.SHORT;if(i===Xi)return n.UNSIGNED_SHORT;if(i===ya)return n.INT;if(i===Yn)return n.UNSIGNED_INT;if(i===je)return n.FLOAT;if(i===Yi)return n.HALF_FLOAT;if(i===dl)return n.ALPHA;if(i===pl)return n.RGB;if(i===We)return n.RGBA;if(i===ml)return n.LUMINANCE;if(i===gl)return n.LUMINANCE_ALPHA;if(i===_i)return n.DEPTH_COMPONENT;if(i===bi)return n.DEPTH_STENCIL;if(i===Ta)return n.RED;if(i===Aa)return n.RED_INTEGER;if(i===_l)return n.RG;if(i===wa)return n.RG_INTEGER;if(i===Ra)return n.RGBA_INTEGER;if(i===Tr||i===Ar||i===wr||i===Rr)if(a===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bs||i===zs||i===Hs||i===ks)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gs||i===Vs||i===Ws)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gs||i===Vs)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ws)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xs||i===qs||i===Ys||i===$s||i===Ks||i===Zs||i===js||i===Js||i===Qs||i===ta||i===ea||i===na||i===ia||i===ra)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xs)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qs)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ys)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$s)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ks)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zs)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===js)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Js)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qs)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ta)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ea)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===na)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ia)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ra)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cr||i===sa||i===aa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Cr)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===aa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===oa||i===la||i===ca)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===oa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===la)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ei?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Kp extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mr extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zp={type:"move"};class vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const jp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jp=`
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

}`;class Qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Se,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new qe({vertexShader:jp,fragmentShader:Jp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t0 extends wi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=new Qp,m=e.getContextAttributes();let d=null,T=null;const A=[],M=[],O=new qt;let b=null;const C=new Ie;C.viewport=new te;const L=new Ie;L.viewport=new te;const E=[C,L],v=new Kp;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let D=A[R];return D===void 0&&(D=new vs,A[R]=D),D.getTargetRaySpace()},this.getControllerGrip=function(R){let D=A[R];return D===void 0&&(D=new vs,A[R]=D),D.getGripSpace()},this.getHand=function(R){let D=A[R];return D===void 0&&(D=new vs,A[R]=D),D.getHandSpace()};function H(R){const D=M.indexOf(R.inputSource);if(D===-1)return;const k=A[D];k!==void 0&&(k.update(R.inputSource,R.frame,c||a),k.dispatchEvent({type:R.type,data:R.inputSource}))}function K(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",J);for(let R=0;R<A.length;R++){const D=M[R];D!==null&&(M[R]=null,A[R].disconnect(D))}P=null,G=null,_.reset(),t.setRenderTarget(d),p=null,h=null,f=null,r=null,T=null,I.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){o=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",K),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(O),r.renderState.layers===void 0){const D={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,D),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new $n(p.framebufferWidth,p.framebufferHeight,{format:We,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let D=null,k=null,Y=null;m.depth&&(Y=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=m.stencil?bi:_i,k=m.stencil?Ei:Yn);const it={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(it),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new $n(h.textureWidth,h.textureHeight,{format:We,type:pn,depthTexture:new Dl(h.textureWidth,h.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(R){for(let D=0;D<R.removed.length;D++){const k=R.removed[D],Y=M.indexOf(k);Y>=0&&(M[Y]=null,A[Y].disconnect(k))}for(let D=0;D<R.added.length;D++){const k=R.added[D];let Y=M.indexOf(k);if(Y===-1){for(let mt=0;mt<A.length;mt++)if(mt>=M.length){M.push(k),Y=mt;break}else if(M[mt]===null){M[mt]=k,Y=mt;break}if(Y===-1)break}const it=A[Y];it&&it.connect(k)}}const Z=new N,et=new N;function q(R,D,k){Z.setFromMatrixPosition(D.matrixWorld),et.setFromMatrixPosition(k.matrixWorld);const Y=Z.distanceTo(et),it=D.projectionMatrix.elements,mt=k.projectionMatrix.elements,rt=it[14]/(it[10]-1),Nt=it[14]/(it[10]+1),It=(it[9]+1)/it[5],Rt=(it[9]-1)/it[5],U=(it[8]-1)/it[0],se=(mt[8]+1)/mt[0],Gt=rt*U,Ct=rt*se,bt=Y/(-U+se),zt=bt*-U;if(D.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(zt),R.translateZ(bt),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),it[10]===-1)R.projectionMatrix.copy(D.projectionMatrix),R.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const Mt=rt+bt,w=Nt+bt,x=Gt-zt,V=Ct+(Y-zt),Q=It*Nt/w*Mt,nt=Rt*Nt/w*Mt;R.projectionMatrix.makePerspective(x,V,Q,nt,Mt,w),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function ot(R,D){D===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(D.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;let D=R.near,k=R.far;_.texture!==null&&(_.depthNear>0&&(D=_.depthNear),_.depthFar>0&&(k=_.depthFar)),v.near=L.near=C.near=D,v.far=L.far=C.far=k,(P!==v.near||G!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,G=v.far),C.layers.mask=R.layers.mask|2,L.layers.mask=R.layers.mask|4,v.layers.mask=C.layers.mask|L.layers.mask;const Y=R.parent,it=v.cameras;ot(v,Y);for(let mt=0;mt<it.length;mt++)ot(it[mt],Y);it.length===2?q(v,C,L):v.projectionMatrix.copy(C.projectionMatrix),pt(R,v,Y)};function pt(R,D,k){k===null?R.matrix.copy(D.matrixWorld):(R.matrix.copy(k.matrixWorld),R.matrix.invert(),R.matrix.multiply(D.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(D.projectionMatrix),R.projectionMatrixInverse.copy(D.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=ua*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(R){l=R,h!==null&&(h.fixedFoveation=R),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=R)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let wt=null;function y(R,D){if(u=D.getViewerPose(c||a),g=D,u!==null){const k=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let Y=!1;k.length!==v.cameras.length&&(v.cameras.length=0,Y=!0);for(let mt=0;mt<k.length;mt++){const rt=k[mt];let Nt=null;if(p!==null)Nt=p.getViewport(rt);else{const Rt=f.getViewSubImage(h,rt);Nt=Rt.viewport,mt===0&&(t.setRenderTargetTextures(T,Rt.colorTexture,h.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(T))}let It=E[mt];It===void 0&&(It=new Ie,It.layers.enable(mt),It.viewport=new te,E[mt]=It),It.matrix.fromArray(rt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(rt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),mt===0&&(v.matrix.copy(It.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Y===!0&&v.cameras.push(It)}const it=r.enabledFeatures;if(it&&it.includes("depth-sensing")){const mt=f.getDepthInformation(k[0]);mt&&mt.isValid&&mt.texture&&_.init(t,mt,r.renderState)}}for(let k=0;k<A.length;k++){const Y=M[k],it=A[k];Y!==null&&it!==void 0&&it.update(Y,D,c||a)}wt&&wt(R,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}const I=new Ll;I.setAnimationLoop(y),this.setAnimationLoop=function(R){wt=R},this.dispose=function(){}}}const Hn=new Ne,e0=new $t;function n0(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Rl(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,A,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Me&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Me&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=t.get(d),A=T.envMap,M=T.envMapRotation;A&&(m.envMap.value=A,Hn.copy(M),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),m.envMapRotation.value.setFromMatrix4(e0.makeRotationFromEuler(Hn)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=A*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Me&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i0(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const M=A.program;i.uniformBlockBinding(T,M)}function c(T,A){let M=r[T.id];M===void 0&&(g(T),M=u(T),r[T.id]=M,T.addEventListener("dispose",m));const O=A.program;i.updateUBOMapping(T,O);const b=t.render.frame;s[T.id]!==b&&(h(T),s[T.id]=b)}function u(T){const A=f();T.__bindingPointIndex=A;const M=n.createBuffer(),O=T.__size,b=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,O,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,M),M}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const A=r[T.id],M=T.uniforms,O=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let b=0,C=M.length;b<C;b++){const L=Array.isArray(M[b])?M[b]:[M[b]];for(let E=0,v=L.length;E<v;E++){const P=L[E];if(p(P,b,E,O)===!0){const G=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let J=0;J<H.length;J++){const Z=H[J],et=_(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,G+K,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,K),K+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,A,M,O){const b=T.value,C=A+"_"+M;if(O[C]===void 0)return typeof b=="number"||typeof b=="boolean"?O[C]=b:O[C]=b.clone(),!0;{const L=O[C];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return O[C]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function g(T){const A=T.uniforms;let M=0;const O=16;for(let C=0,L=A.length;C<L;C++){const E=Array.isArray(A[C])?A[C]:[A[C]];for(let v=0,P=E.length;v<P;v++){const G=E[v],H=Array.isArray(G.value)?G.value:[G.value];for(let K=0,J=H.length;K<J;K++){const Z=H[K],et=_(Z),q=M%O,ot=q%et.boundary,pt=q+ot;M+=ot,pt!==0&&O-pt<et.storage&&(M+=O-pt),G.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=et.storage}}}const b=M%O;return b>0&&(M+=O-b),T.__size=M,T.__cache={},this}function _(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const M=a.indexOf(A.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class r0{constructor(t={}){const{canvas:e=Xc(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const T=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=wn,this.toneMappingExposure=1;const M=this;let O=!1,b=0,C=0,L=null,E=-1,v=null;const P=new te,G=new te;let H=null;const K=new Lt(0);let J=0,Z=e.width,et=e.height,q=1,ot=null,pt=null;const wt=new te(0,0,Z,et),y=new te(0,0,Z,et);let I=!1;const R=new Pa;let D=!1,k=!1;const Y=new $t,it=new $t,mt=new N,rt=new te,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function Rt(){return L===null?q:1}let U=i;function se(S,B){return e.getContext(S,B)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){const B="webgl2";if(U=se(B,S),U===null)throw se(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Gt,Ct,bt,zt,Mt,w,x,V,Q,nt,j,Tt,ut,_t,Wt,st,xt,Pt,Dt,vt,Vt,Ht,ee,F;function ct(){Gt=new cd(U),Gt.init(),Ht=new $p(U,Gt),Ct=new id(U,Gt,t,Ht),bt=new Xp(U,Gt),Ct.reverseDepthBuffer&&h&&bt.buffers.depth.setReversed(!0),zt=new fd(U),Mt=new Pp,w=new Yp(U,Gt,bt,Mt,Ct,Ht,zt),x=new sd(M),V=new ld(M),Q=new xu(U),ee=new ed(U,Q),nt=new ud(U,Q,zt,ee),j=new pd(U,nt,Q,zt),Dt=new dd(U,Ct,w),st=new rd(Mt),Tt=new Cp(M,x,V,Gt,Ct,ee,st),ut=new n0(M,Mt),_t=new Ip,Wt=new Bp(Gt),Pt=new td(M,x,V,bt,j,p,l),xt=new Vp(M,j,Ct),F=new i0(U,zt,Ct,bt),vt=new nd(U,Gt,zt),Vt=new hd(U,Gt,zt),zt.programs=Tt.programs,M.capabilities=Ct,M.extensions=Gt,M.properties=Mt,M.renderLists=_t,M.shadowMap=xt,M.state=bt,M.info=zt}ct();const $=new t0(M,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(Z,et,!1))},this.getSize=function(S){return S.set(Z,et)},this.setSize=function(S,B,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,et=B,e.width=Math.floor(S*q),e.height=Math.floor(B*q),W===!0&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(Z*q,et*q).floor()},this.setDrawingBufferSize=function(S,B,W){Z=S,et=B,q=W,e.width=Math.floor(S*W),e.height=Math.floor(B*W),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(wt)},this.setViewport=function(S,B,W,X){S.isVector4?wt.set(S.x,S.y,S.z,S.w):wt.set(S,B,W,X),bt.viewport(P.copy(wt).multiplyScalar(q).round())},this.getScissor=function(S){return S.copy(y)},this.setScissor=function(S,B,W,X){S.isVector4?y.set(S.x,S.y,S.z,S.w):y.set(S,B,W,X),bt.scissor(G.copy(y).multiplyScalar(q).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(S){bt.setScissorTest(I=S)},this.setOpaqueSort=function(S){ot=S},this.setTransparentSort=function(S){pt=S},this.getClearColor=function(S){return S.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(S=!0,B=!0,W=!0){let X=0;if(S){let z=!1;if(L!==null){const at=L.texture.format;z=at===Ra||at===wa||at===Aa}if(z){const at=L.texture.type,ft=at===pn||at===Yn||at===Xi||at===Ei||at===Ea||at===ba,St=Pt.getClearColor(),yt=Pt.getClearAlpha(),Ut=St.r,Ot=St.g,Et=St.b;ft?(g[0]=Ut,g[1]=Ot,g[2]=Et,g[3]=yt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ut,_[1]=Ot,_[2]=Et,_[3]=yt,U.clearBufferiv(U.COLOR,0,_))}else X|=U.COLOR_BUFFER_BIT}B&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),_t.dispose(),Wt.dispose(),Mt.dispose(),x.dispose(),V.dispose(),j.dispose(),ee.dispose(),F.dispose(),Tt.dispose(),$.dispose(),$.removeEventListener("sessionstart",za),$.removeEventListener("sessionend",Ha),Un.stop()};function tt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const S=zt.autoReset,B=xt.enabled,W=xt.autoUpdate,X=xt.needsUpdate,z=xt.type;ct(),zt.autoReset=S,xt.enabled=B,xt.autoUpdate=W,xt.needsUpdate=X,xt.type=z}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ft(S){const B=S.target;B.removeEventListener("dispose",Ft),ae(B)}function ae(S){ge(S),Mt.remove(S)}function ge(S){const B=Mt.get(S).programs;B!==void 0&&(B.forEach(function(W){Tt.releaseProgram(W)}),S.isShaderMaterial&&Tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,W,X,z,at){B===null&&(B=Nt);const ft=z.isMesh&&z.matrixWorld.determinant()<0,St=ec(S,B,W,X,z);bt.setMaterial(X,ft);let yt=W.index,Ut=1;if(X.wireframe===!0){if(yt=nt.getWireframeAttribute(W),yt===void 0)return;Ut=2}const Ot=W.drawRange,Et=W.attributes.position;let Yt=Ot.start*Ut,ne=(Ot.start+Ot.count)*Ut;at!==null&&(Yt=Math.max(Yt,at.start*Ut),ne=Math.min(ne,(at.start+at.count)*Ut)),yt!==null?(Yt=Math.max(Yt,0),ne=Math.min(ne,yt.count)):Et!=null&&(Yt=Math.max(Yt,0),ne=Math.min(ne,Et.count));const ie=ne-Yt;if(ie<0||ie===1/0)return;ee.setup(z,X,St,W,yt);let be,Kt=vt;if(yt!==null&&(be=Q.get(yt),Kt=Vt,Kt.setIndex(be)),z.isMesh)X.wireframe===!0?(bt.setLineWidth(X.wireframeLinewidth*Rt()),Kt.setMode(U.LINES)):Kt.setMode(U.TRIANGLES);else if(z.isLine){let At=X.linewidth;At===void 0&&(At=1),bt.setLineWidth(At*Rt()),z.isLineSegments?Kt.setMode(U.LINES):z.isLineLoop?Kt.setMode(U.LINE_LOOP):Kt.setMode(U.LINE_STRIP)}else z.isPoints?Kt.setMode(U.POINTS):z.isSprite&&Kt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Kt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const At=z._multiDrawStarts,nn=z._multiDrawCounts,Zt=z._multiDrawCount,ze=yt?Q.get(yt).bytesPerElement:1,Jn=Mt.get(X).currentProgram.getUniforms();for(let Ce=0;Ce<Zt;Ce++)Jn.setValue(U,"_gl_DrawID",Ce),Kt.render(At[Ce]/ze,nn[Ce])}else if(z.isInstancedMesh)Kt.renderInstances(Yt,ie,z.count);else if(W.isInstancedBufferGeometry){const At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,nn=Math.min(W.instanceCount,At);Kt.renderInstances(Yt,ie,nn)}else Kt.render(Yt,ie)};function jt(S,B,W){S.transparent===!0&&S.side===De&&S.forceSinglePass===!1?(S.side=Me,S.needsUpdate=!0,Ji(S,B,W),S.side=Rn,S.needsUpdate=!0,Ji(S,B,W),S.side=De):Ji(S,B,W)}this.compile=function(S,B,W=null){W===null&&(W=S),d=Wt.get(W),d.init(B),A.push(d),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),S!==W&&S.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const X=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const at=z.material;if(at)if(Array.isArray(at))for(let ft=0;ft<at.length;ft++){const St=at[ft];jt(St,W,z),X.add(St)}else jt(at,W,z),X.add(at)}),A.pop(),d=null,X},this.compileAsync=function(S,B,W=null){const X=this.compile(S,B,W);return new Promise(z=>{function at(){if(X.forEach(function(ft){Mt.get(ft).currentProgram.isReady()&&X.delete(ft)}),X.size===0){z(S);return}setTimeout(at,10)}Gt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Be=null;function en(S){Be&&Be(S)}function za(){Un.stop()}function Ha(){Un.start()}const Un=new Ll;Un.setAnimationLoop(en),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(S){Be=S,$.setAnimationLoop(S),S===null?Un.stop():Un.start()},$.addEventListener("sessionstart",za),$.addEventListener("sessionend",Ha),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,B,L),d=Wt.get(S,A.length),d.init(B),A.push(d),it.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),R.setFromProjectionMatrix(it),k=this.localClippingEnabled,D=st.init(this.clippingPlanes,k),m=_t.get(S,T.length),m.init(),T.push(m),$.enabled===!0&&$.isPresenting===!0){const at=M.xr.getDepthSensingMesh();at!==null&&Vr(at,B,-1/0,M.sortObjects)}Vr(S,B,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ot,pt),It=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,It&&Pt.addToRenderList(m,S),this.info.render.frame++,D===!0&&st.beginShadows();const W=d.state.shadowsArray;xt.render(W,S,B),D===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(d.setupLights(),B.isArrayCamera){const at=B.cameras;if(z.length>0)for(let ft=0,St=at.length;ft<St;ft++){const yt=at[ft];Ga(X,z,S,yt)}It&&Pt.render(S);for(let ft=0,St=at.length;ft<St;ft++){const yt=at[ft];ka(m,S,yt,yt.viewport)}}else z.length>0&&Ga(X,z,S,B),It&&Pt.render(S),ka(m,S,B);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(M,S,B),ee.resetDefaultState(),E=-1,v=null,A.pop(),A.length>0?(d=A[A.length-1],D===!0&&st.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Vr(S,B,W,X){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||R.intersectsSprite(S)){X&&rt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(it);const ft=j.update(S),St=S.material;St.visible&&m.push(S,ft,St,W,rt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||R.intersectsObject(S))){const ft=j.update(S),St=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),rt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),rt.copy(ft.boundingSphere.center)),rt.applyMatrix4(S.matrixWorld).applyMatrix4(it)),Array.isArray(St)){const yt=ft.groups;for(let Ut=0,Ot=yt.length;Ut<Ot;Ut++){const Et=yt[Ut],Yt=St[Et.materialIndex];Yt&&Yt.visible&&m.push(S,ft,Yt,W,rt.z,Et)}}else St.visible&&m.push(S,ft,St,W,rt.z,null)}}const at=S.children;for(let ft=0,St=at.length;ft<St;ft++)Vr(at[ft],B,W,X)}function ka(S,B,W,X){const z=S.opaque,at=S.transmissive,ft=S.transparent;d.setupLightsView(W),D===!0&&st.setGlobalState(M.clippingPlanes,W),X&&bt.viewport(P.copy(X)),z.length>0&&ji(z,B,W),at.length>0&&ji(at,B,W),ft.length>0&&ji(ft,B,W),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Ga(S,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new $n(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Yi:pn,minFilter:Tn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const at=d.state.transmissionRenderTarget[X.id],ft=X.viewport||P;at.setSize(ft.z,ft.w);const St=M.getRenderTarget();M.setRenderTarget(at),M.getClearColor(K),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),It&&Pt.render(W);const yt=M.toneMapping;M.toneMapping=wn;const Ut=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),D===!0&&st.setGlobalState(M.clippingPlanes,X),ji(S,W,X),w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Et=0,Yt=B.length;Et<Yt;Et++){const ne=B[Et],ie=ne.object,be=ne.geometry,Kt=ne.material,At=ne.group;if(Kt.side===De&&ie.layers.test(X.layers)){const nn=Kt.side;Kt.side=Me,Kt.needsUpdate=!0,Va(ie,W,X,be,Kt,At),Kt.side=nn,Kt.needsUpdate=!0,Ot=!0}}Ot===!0&&(w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at))}M.setRenderTarget(St),M.setClearColor(K,J),Ut!==void 0&&(X.viewport=Ut),M.toneMapping=yt}function ji(S,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,at=S.length;z<at;z++){const ft=S[z],St=ft.object,yt=ft.geometry,Ut=X===null?ft.material:X,Ot=ft.group;St.layers.test(W.layers)&&Va(St,B,W,yt,Ut,Ot)}}function Va(S,B,W,X,z,at){S.onBeforeRender(M,B,W,X,z,at),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(M,B,W,X,S,at),z.transparent===!0&&z.side===De&&z.forceSinglePass===!1?(z.side=Me,z.needsUpdate=!0,M.renderBufferDirect(W,B,X,z,S,at),z.side=Rn,z.needsUpdate=!0,M.renderBufferDirect(W,B,X,z,S,at),z.side=De):M.renderBufferDirect(W,B,X,z,S,at),S.onAfterRender(M,B,W,X,z,at)}function Ji(S,B,W){B.isScene!==!0&&(B=Nt);const X=Mt.get(S),z=d.state.lights,at=d.state.shadowsArray,ft=z.state.version,St=Tt.getParameters(S,z.state,at,B,W),yt=Tt.getProgramCacheKey(St);let Ut=X.programs;X.environment=S.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(S.isMeshStandardMaterial?V:x).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ut===void 0&&(S.addEventListener("dispose",Ft),Ut=new Map,X.programs=Ut);let Ot=Ut.get(yt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===ft)return Xa(S,St),Ot}else St.uniforms=Tt.getUniforms(S),S.onBeforeCompile(St,M),Ot=Tt.acquireProgram(St,yt),Ut.set(yt,Ot),X.uniforms=St.uniforms;const Et=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=st.uniform),Xa(S,St),X.needsLights=ic(S),X.lightsStateVersion=ft,X.needsLights&&(Et.ambientLightColor.value=z.state.ambient,Et.lightProbe.value=z.state.probe,Et.directionalLights.value=z.state.directional,Et.directionalLightShadows.value=z.state.directionalShadow,Et.spotLights.value=z.state.spot,Et.spotLightShadows.value=z.state.spotShadow,Et.rectAreaLights.value=z.state.rectArea,Et.ltc_1.value=z.state.rectAreaLTC1,Et.ltc_2.value=z.state.rectAreaLTC2,Et.pointLights.value=z.state.point,Et.pointLightShadows.value=z.state.pointShadow,Et.hemisphereLights.value=z.state.hemi,Et.directionalShadowMap.value=z.state.directionalShadowMap,Et.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Et.spotShadowMap.value=z.state.spotShadowMap,Et.spotLightMatrix.value=z.state.spotLightMatrix,Et.spotLightMap.value=z.state.spotLightMap,Et.pointShadowMap.value=z.state.pointShadowMap,Et.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function Wa(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=Pr.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Xa(S,B){const W=Mt.get(S);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function ec(S,B,W,X,z){B.isScene!==!0&&(B=Nt),w.resetTextureUnits();const at=B.fog,ft=X.isMeshStandardMaterial?B.environment:null,St=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ai,yt=(X.isMeshStandardMaterial?V:x).get(X.envMap||ft),Ut=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Et=!!W.morphAttributes.position,Yt=!!W.morphAttributes.normal,ne=!!W.morphAttributes.color;let ie=wn;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ie=M.toneMapping);const be=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Kt=be!==void 0?be.length:0,At=Mt.get(X),nn=d.state.lights;if(D===!0&&(k===!0||S!==v)){const Fe=S===v&&X.id===E;st.setState(X,S,Fe)}let Zt=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==nn.state.version||At.outputColorSpace!==St||z.isBatchedMesh&&At.batching===!1||!z.isBatchedMesh&&At.batching===!0||z.isBatchedMesh&&At.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&At.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&At.instancing===!1||!z.isInstancedMesh&&At.instancing===!0||z.isSkinnedMesh&&At.skinning===!1||!z.isSkinnedMesh&&At.skinning===!0||z.isInstancedMesh&&At.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&At.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&At.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&At.instancingMorph===!1&&z.morphTexture!==null||At.envMap!==yt||X.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Ut||At.vertexTangents!==Ot||At.morphTargets!==Et||At.morphNormals!==Yt||At.morphColors!==ne||At.toneMapping!==ie||At.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,At.__version=X.version);let ze=At.currentProgram;Zt===!0&&(ze=Ji(X,B,z));let Jn=!1,Ce=!1,Pi=!1;const re=ze.getUniforms(),$e=At.uniforms;if(bt.useProgram(ze.program)&&(Jn=!0,Ce=!0,Pi=!0),X.id!==E&&(E=X.id,Ce=!0),Jn||v!==S){bt.buffers.depth.getReversed()?(Y.copy(S.projectionMatrix),Yc(Y),$c(Y),re.setValue(U,"projectionMatrix",Y)):re.setValue(U,"projectionMatrix",S.projectionMatrix),re.setValue(U,"viewMatrix",S.matrixWorldInverse);const mn=re.map.cameraPosition;mn!==void 0&&mn.setValue(U,mt.setFromMatrixPosition(S.matrixWorld)),Ct.logarithmicDepthBuffer&&re.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&re.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Ce=!0,Pi=!0)}if(z.isSkinnedMesh){re.setOptional(U,z,"bindMatrix"),re.setOptional(U,z,"bindMatrixInverse");const Fe=z.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),re.setValue(U,"boneTexture",Fe.boneTexture,w))}z.isBatchedMesh&&(re.setOptional(U,z,"batchingTexture"),re.setValue(U,"batchingTexture",z._matricesTexture,w),re.setOptional(U,z,"batchingIdTexture"),re.setValue(U,"batchingIdTexture",z._indirectTexture,w),re.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&re.setValue(U,"batchingColorTexture",z._colorsTexture,w));const Li=W.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Dt.update(z,W,ze),(Ce||At.receiveShadow!==z.receiveShadow)&&(At.receiveShadow=z.receiveShadow,re.setValue(U,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($e.envMap.value=yt,$e.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&($e.envMapIntensity.value=B.environmentIntensity),Ce&&(re.setValue(U,"toneMappingExposure",M.toneMappingExposure),At.needsLights&&nc($e,Pi),at&&X.fog===!0&&ut.refreshFogUniforms($e,at),ut.refreshMaterialUniforms($e,X,q,et,d.state.transmissionRenderTarget[S.id]),Pr.upload(U,Wa(At),$e,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Pr.upload(U,Wa(At),$e,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&re.setValue(U,"center",z.center),re.setValue(U,"modelViewMatrix",z.modelViewMatrix),re.setValue(U,"normalMatrix",z.normalMatrix),re.setValue(U,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Fe=X.uniformsGroups;for(let mn=0,gn=Fe.length;mn<gn;mn++){const qa=Fe[mn];F.update(qa,ze),F.bind(qa,ze)}}return ze}function nc(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function ic(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,B,W){Mt.get(S.texture).__webglTexture=B,Mt.get(S.depthTexture).__webglTexture=W;const X=Mt.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,B){const W=Mt.get(S);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,W=0){L=S,b=B,C=W;let X=!0,z=null,at=!1,ft=!1;if(S){const yt=Mt.get(S);if(yt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(yt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(yt.__hasExternalTextures)w.rebindTextures(S,Mt.get(S.texture).__webglTexture,Mt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Et=S.depthTexture;if(yt.__boundDepthTexture!==Et){if(Et!==null&&Mt.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ft=!0);const Ot=Mt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ot[B])?z=Ot[B][W]:z=Ot[B],at=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?z=Mt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[W]:z=Ot,P.copy(S.viewport),G.copy(S.scissor),H=S.scissorTest}else P.copy(wt).multiplyScalar(q).floor(),G.copy(y).multiplyScalar(q).floor(),H=I;if(bt.bindFramebuffer(U.FRAMEBUFFER,z)&&X&&bt.drawBuffers(S,z),bt.viewport(P),bt.scissor(G),bt.setScissorTest(H),at){const yt=Mt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,yt.__webglTexture,W)}else if(ft){const yt=Mt.get(S.texture),Ut=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,W||0,Ut)}E=-1},this.readRenderTargetPixels=function(S,B,W,X,z,at,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){bt.bindFramebuffer(U.FRAMEBUFFER,St);try{const yt=S.texture,Ut=yt.format,Ot=yt.type;if(!Ct.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-X&&W>=0&&W<=S.height-z&&U.readPixels(B,W,X,z,Ht.convert(Ut),Ht.convert(Ot),at)}finally{const yt=L!==null?Mt.get(L).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(S,B,W,X,z,at,ft){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){const yt=S.texture,Ut=yt.format,Ot=yt.type;if(!Ct.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=S.width-X&&W>=0&&W<=S.height-z){bt.bindFramebuffer(U.FRAMEBUFFER,St);const Et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.bufferData(U.PIXEL_PACK_BUFFER,at.byteLength,U.STREAM_READ),U.readPixels(B,W,X,z,Ht.convert(Ut),Ht.convert(Ot),0);const Yt=L!==null?Mt.get(L).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,Yt);const ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await qc(U,ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,at),U.deleteBuffer(Et),U.deleteSync(ne),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,B=null,W=0){S.isTexture!==!0&&(ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(S.image.width*X),at=Math.floor(S.image.height*X),ft=B!==null?B.x:0,St=B!==null?B.y:0;w.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,ft,St,z,at),bt.unbindTexture()},this.copyTextureToTexture=function(S,B,W=null,X=null,z=0){S.isTexture!==!0&&(ki("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,S=arguments[1],B=arguments[2],z=arguments[3]||0,W=null);let at,ft,St,yt,Ut,Ot,Et,Yt,ne;const ie=S.isCompressedTexture?S.mipmaps[z]:S.image;W!==null?(at=W.max.x-W.min.x,ft=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,yt=W.min.x,Ut=W.min.y,Ot=W.isBox3?W.min.z:0):(at=ie.width,ft=ie.height,St=ie.depth||1,yt=0,Ut=0,Ot=0),X!==null?(Et=X.x,Yt=X.y,ne=X.z):(Et=0,Yt=0,ne=0);const be=Ht.convert(B.format),Kt=Ht.convert(B.type);let At;B.isData3DTexture?(w.setTexture3D(B,0),At=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(w.setTexture2DArray(B,0),At=U.TEXTURE_2D_ARRAY):(w.setTexture2D(B,0),At=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const nn=U.getParameter(U.UNPACK_ROW_LENGTH),Zt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ze=U.getParameter(U.UNPACK_SKIP_PIXELS),Jn=U.getParameter(U.UNPACK_SKIP_ROWS),Ce=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ie.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot);const Pi=S.isDataArrayTexture||S.isData3DTexture,re=B.isDataArrayTexture||B.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const $e=Mt.get(S),Li=Mt.get(B),Fe=Mt.get($e.__renderTarget),mn=Mt.get(Li.__renderTarget);bt.bindFramebuffer(U.READ_FRAMEBUFFER,Fe.__webglFramebuffer),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let gn=0;gn<St;gn++)Pi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(S).__webglTexture,z,Ot+gn),S.isDepthTexture?(re&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(B).__webglTexture,z,ne+gn),U.blitFramebuffer(yt,Ut,at,ft,Et,Yt,at,ft,U.DEPTH_BUFFER_BIT,U.NEAREST)):re?U.copyTexSubImage3D(At,z,Et,Yt,ne+gn,yt,Ut,at,ft):U.copyTexSubImage2D(At,z,Et,Yt,ne+gn,yt,Ut,at,ft);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else re?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(At,z,Et,Yt,ne,at,ft,St,be,Kt,ie.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(At,z,Et,Yt,ne,at,ft,St,be,ie.data):U.texSubImage3D(At,z,Et,Yt,ne,at,ft,St,be,Kt,ie):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,Et,Yt,at,ft,be,Kt,ie.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,Et,Yt,ie.width,ie.height,be,ie.data):U.texSubImage2D(U.TEXTURE_2D,z,Et,Yt,at,ft,be,Kt,ie);U.pixelStorei(U.UNPACK_ROW_LENGTH,nn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ze),U.pixelStorei(U.UNPACK_SKIP_ROWS,Jn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ce),z===0&&B.generateMipmaps&&U.generateMipmap(At),bt.unbindTexture()},this.copyTextureToTexture3D=function(S,B,W=null,X=null,z=0){return S.isTexture!==!0&&(ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,S=arguments[2],B=arguments[3],z=arguments[4]||0),ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,B,W,X,z)},this.initRenderTarget=function(S){Mt.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),bt.unbindTexture()},this.resetState=function(){b=0,C=0,L=null,bt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class Bl extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ne,this.environmentIntensity=1,this.environmentRotation=new Ne,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class s0 extends Se{constructor(t=null,e=1,i=1,r,s,a,o,l,c=Ue,u=Ue,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class da extends Ee{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const di=new $t,Wo=new $t,Sr=[],Xo=new Kn,a0=new $t,Oi=new Qt,Bi=new Ri;class zl extends Qt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new da(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,a0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,di),Xo.copy(t.boundingBox).applyMatrix4(di),this.boundingBox.union(Xo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,di),Bi.copy(t.boundingSphere).applyMatrix4(di),this.boundingSphere.union(Bi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bi.copy(this.boundingSphere),Bi.applyMatrix4(i),t.ray.intersectsSphere(Bi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,di),Wo.multiplyMatrices(i,di),Oi.matrixWorld=Wo,Oi.raycast(t,Sr);for(let a=0,o=Sr.length;a<o;a++){const l=Sr[a];l.instanceId=s,l.object=this,e.push(l)}Sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new s0(new Float32Array(r*this.count),r,this.count,Ta,je));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class o0 extends Zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qo=new $t,pa=new El,yr=new Ri,Er=new N;class l0 extends pe{constructor(t=new Re,e=new o0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(r),yr.radius+=s,t.ray.intersectsSphere(yr)===!1)return;qo.copy(r).invert(),pa.copy(t.ray).applyMatrix4(qo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,_=p;g<_;g++){const m=c.getX(g);Er.fromBufferAttribute(f,m),Yo(Er,m,l,r,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,_=p;g<_;g++)Er.fromBufferAttribute(f,g),Yo(Er,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Yo(n,t,e,i,r,s,a){const o=pa.distanceSqToPoint(n);if(o<e){const l=new N;pa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Hl extends Se{constructor(t,e,i,r,s,a,o,l,c){super(t,e,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kr extends Re{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let g=0;const _=[],m=i/2;let d=0;T(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(p,2));function T(){const M=new N,O=new N;let b=0;const C=(e-t)/i;for(let L=0;L<=s;L++){const E=[],v=L/s,P=v*(e-t)+t;for(let G=0;G<=r;G++){const H=G/r,K=H*l+o,J=Math.sin(K),Z=Math.cos(K);O.x=P*J,O.y=-v*i+m,O.z=P*Z,f.push(O.x,O.y,O.z),M.set(J,C,Z).normalize(),h.push(M.x,M.y,M.z),p.push(H,1-v),E.push(g++)}_.push(E)}for(let L=0;L<r;L++)for(let E=0;E<s;E++){const v=_[E][L],P=_[E+1][L],G=_[E+1][L+1],H=_[E][L+1];(t>0||E!==0)&&(u.push(v,P,H),b+=3),(e>0||E!==s-1)&&(u.push(P,G,H),b+=3)}c.addGroup(d,b,0),d+=b}function A(M){const O=g,b=new qt,C=new N;let L=0;const E=M===!0?t:e,v=M===!0?1:-1;for(let G=1;G<=r;G++)f.push(0,m*v,0),h.push(0,v,0),p.push(.5,.5),g++;const P=g;for(let G=0;G<=r;G++){const K=G/r*l+o,J=Math.cos(K),Z=Math.sin(K);C.x=E*Z,C.y=m*v,C.z=E*J,f.push(C.x,C.y,C.z),h.push(0,v,0),b.x=J*.5+.5,b.y=Z*.5*v+.5,p.push(b.x,b.y),g++}for(let G=0;G<r;G++){const H=O+G,K=P+G;M===!0?u.push(K,K+1,H):u.push(K+1,K,H),L+=3}c.addGroup(d,L,M===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ia extends kr{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ia(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ki extends Re{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new N,h=new N,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const T=[],A=d/i;let M=0;d===0&&a===0?M=.5/e:d===i&&l===Math.PI&&(M=-.5/e);for(let O=0;O<=e;O++){const b=O/e;f.x=-t*Math.cos(r+b*s)*Math.sin(a+A*o),f.y=t*Math.cos(a+A*o),f.z=t*Math.sin(r+b*s)*Math.sin(a+A*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(b+M,1-A),T.push(c++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<e;T++){const A=u[d][T+1],M=u[d][T],O=u[d+1][T],b=u[d+1][T+1];(d!==0||a>0)&&p.push(A,M,b),(d!==i-1||l<Math.PI)&&p.push(M,O,b)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Da extends Re{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new N,f=new N,h=new N;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,T=(r+1)*p+g;a.push(_,m,T),a.push(m,d,T)}this.setIndex(a),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ma extends Zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class c0 extends Zn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ua extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class u0 extends Ua{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ms=new $t,$o=new N,Ko=new N;class kl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;$o.setFromMatrixPosition(t.matrixWorld),e.position.copy($o),Ko.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ko),e.updateMatrixWorld(),Ms.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ms),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ms)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zo=new $t,zi=new N,Ss=new N;class h0 extends kl{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),zi.setFromMatrixPosition(t.matrixWorld),i.position.copy(zi),Ss.copy(i.position),Ss.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ss),i.updateMatrixWorld(),r.makeTranslation(-zi.x,-zi.y,-zi.z),Zo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo)}}class Na extends Ua{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new h0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class f0 extends kl{constructor(){super(new Il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class d0 extends Ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new f0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);class p0 extends Bl{constructor(){super();const t=new Ln;t.deleteAttribute("uv");const e=new ma({side:Me}),i=new ma,r=new Na(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Qt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Qt(t,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Qt(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Qt(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Qt(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new Qt(t,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const f=new Qt(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const h=new Qt(t,pi(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new Qt(t,pi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Qt(t,pi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Qt(t,pi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Qt(t,pi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new Qt(t,pi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function pi(n){const t=new Cn;return t.color.setScalar(n),t}function In(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function me(n,t=4,e=4){const i=In(n),r=[];for(let f=0;f<e;f++){const h=t<<f,p=new Float32Array(h*h);for(let g=0;g<p.length;g++)p[g]=i();r.push({P:h,g:p})}const s=4096,a=new Map,o=new Map;function l(f,h,p){let g=f.get(h);if(g)return g;g=new Float64Array(r.length*3);for(let _=0;_<r.length;_++){const m=r[_].P,d=h*m,T=Math.floor(d),A=d-T,M=(T%m+m)%m,O=(M+1)%m,b=_*3;g[b]=p?M*m:M,g[b+1]=p?O*m:O,g[b+2]=A*A*(3-2*A)}return f.size>=s&&f.delete(f.keys().next().value),f.set(h,g),g}let c=0,u=.5;for(let f=0;f<r.length;f++)c+=u,u*=.5;return(f,h)=>{const p=l(a,f,!1),g=l(o,h,!0);let _=0,m=.5;for(let d=0;d<r.length;d++){const T=r[d].g,A=d*3,M=p[A],O=p[A+1],b=p[A+2],C=g[A],L=g[A+1],E=g[A+2],v=T[C+M],P=T[C+O],G=T[L+M],H=T[L+O];_+=m*(v+(P-v)*b+(G-v)*E+(v-P-G+H)*b*E),m*=.5}return _/c}}function Ye(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}function tn(n,t=!0,e=!0){const i=new Hl(n);return t&&(i.colorSpace=Ae),e&&(i.wrapS=i.wrapT=Dr),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=Tn,i}function Dn(n,t){const e=n.getContext("2d"),i=e.createImageData(n.width,n.height),r=i.data,s=[0,0,0];for(let a=0;a<n.height;a++)for(let o=0;o<n.width;o++){t(o/n.width,a/n.height,s,o,a);const l=(a*n.width+o)*4;r[l]=s[0],r[l+1]=s[1],r[l+2]=s[2],r[l+3]=255}return e.putImageData(i,0,0),e}const Xe=(n,t=0,e=255)=>n<t?t:n>e?e:n;function ys(n,t,e,i={}){const r=i.size||512,s=Ye(r,r),a=me(n,2,4),o=me(n+7,8,3),l=me(n+13,3,4),c=i.rings||9;return Dn(s,(u,f,h)=>{const p=a(u*.5,f)*3;let g=Math.sin((f*c+p)*Math.PI*2);g=Math.pow(Math.abs(g),.35);const _=o(u*.25,f*8),m=o(u*2,f*32%1);let d=.55*g+.3*_+.15*m;d=d*(.85+.3*l(u,f));for(let T=0;T<3;T++)h[T]=Xe(e[T]+(t[T]-e[T])*d)}),tn(s)}function m0(n){const e=Ye(1024,1024),i=In(n),r=8,s=[];for(let f=0;f<r;f++)s.push({off:i(),tone:.78+i()*.35,hue:i(),len:.45+i()*.3});const a=me(n+3,2,4),o=me(n+9,8,3),l=me(n+11,3,4),c=[150,98,58],u=[78,46,24];return Dn(e,(f,h,p)=>{const g=Math.floor(h*r),_=s[g],m=h*r-g,d=(f+_.off)%1,T=Math.floor(d/_.len*2),A=d/_.len*2%1,M=_.tone*(T%2?.92:1.04)*(.96+.08*Math.sin(T*12.9+g)),O=a(f,h*.5+g*.13)*2.5;let b=Math.abs(Math.sin((m*3+O+T)*Math.PI*2));b=Math.pow(b,.4);const C=o(f*.5,h*4);let L=(.55*b+.45*C)*M;const E=l(f,h);L*=.9+.2*E;let v=Math.min(m,1-m)*64,P=Math.min(A,1-A)*260;const G=Math.min(1,v,P);for(let H=0;H<3;H++)p[H]=Xe((u[H]+(c[H]-u[H])*L)*(.25+.75*G)+(_.hue-.5)*(H===0?12:H===1?6:0))}),tn(e)}function jo(n,t){const i=Ye(512,512),r=me(n,4,5),s=me(n+1,16,2);return Dn(i,(a,o,l)=>{const c=r(a,o),u=s(a,o),f=.88+.16*c+.05*u;l[0]=Xe(t[0]*f),l[1]=Xe(t[1]*f),l[2]=Xe(t[2]*(f-.02))}),tn(i)}function g0(n){const e=Ye(512,512),i=me(n,6,5),r=me(n+4,24,2);return Dn(e,(s,a,o)=>{const l=Math.floor(a*4),c=(s+l%2*.5)%1,u=a*4-l,f=c*2-Math.floor(c*2),h=Math.min(1,Math.min(u,1-u)*40,Math.min(f,1-f)*60),p=(.8+.25*i(s,a)+.08*r(s,a))*(.55+.45*h);o[0]=Xe(196*p),o[1]=Xe(178*p),o[2]=Xe(150*p)}),tn(e)}function Jo(n,t){const i=Ye(512,512),r=me(n,64,2),s=me(n+2,8,4),a=me(n+5,3,4);return Dn(i,(o,l,c)=>{const u=r(o,l),h=Math.abs(s(o,l)-.5)<.015?.7:1,p=Math.max(0,a(o,l)-.52)*3.2,g=(.82+.3*u)*h;for(let _=0;_<3;_++){const m=t[_]+(_===0?70:_===1?52:36);c[_]=Xe((t[_]*(1-p)+m*p)*g)}}),tn(i)}function Es(n,t,e){const r=Ye(256,256),s=me(n,8,3);return Dn(r,(a,o,l,c,u)=>{const f=((c+u)%4<2?1:.92)*(c%2?1:.96),h=e&&Math.sin(a*Math.PI*2*6)>.6?.82:1,p=f*h*(.9+.15*s(a,o));for(let g=0;g<3;g++)l[g]=Xe(t[g]*p)}),tn(r)}function _0(n){const i=Ye(512,768),r=i.getContext("2d");r.fillStyle="#7a2a22",r.fillRect(0,0,512,768);const s=(f,h,p)=>{r.strokeStyle=p,r.lineWidth=h,r.strokeRect(f,f,512-f*2,768-f*2)};s(14,22,"#2a2440"),s(34,6,"#c9a46a"),s(52,26,"#3c4a5c"),s(70,5,"#c9a46a"),r.fillStyle="#d2b07a";for(let f=0;f<26;f++){const h=f/26,p=[[h*512,52],[460,h*768],[512-h*512,716],[52,768-h*768]];for(const[g,_]of p)r.save(),r.translate(g,_),r.rotate(Math.PI/4),r.fillRect(-5,-5,10,10),r.restore()}for(let f=110;f<668;f+=48)for(let h=110;h<412;h+=48)r.fillStyle=(h+f)%96===0?"#2f3a52":"#a8742f",r.save(),r.translate(h,f),r.rotate(Math.PI/4),r.fillRect(-7,-7,14,14),r.restore(),r.fillStyle="#e0c590",r.fillRect(h-2,f-2,4,4);r.save(),r.translate(512/2,768/2);const a=[[150,"#2a2440"],[130,"#c9a46a"],[118,"#3c4a5c"],[86,"#8e3a2a"],[60,"#d8bd85"],[36,"#2a2440"]];for(const[f,h]of a)r.fillStyle=h,r.beginPath(),r.ellipse(0,0,f*.75,f,0,0,Math.PI*2),r.fill();r.restore();const o=r.getImageData(0,0,512,768),l=me(n+3,4,4),c=me(n+5,64,1);for(let f=0;f<768;f++)for(let h=0;h<512;h++){const p=(f*512+h)*4,g=.78+.28*l(h/512,f/768)+.08*c(h/512,f/768),_=Math.max(0,l(h/512+.3,f/768)-.58)*1.6;for(let m=0;m<3;m++)o.data[p+m]=Xe(o.data[p+m]*g*(1-_)+150*_)}return r.putImageData(o,0,0),tn(i,!0,!1)}function x0(n){const i=Ye(512,256),r=i.getContext("2d"),s=In(n),a=me(n,16,3);Dn(i,(c,u,f)=>{const h=200+40*a(c,u);f[0]=f[1]=f[2]=h});const o="#d9a94a",l=32;for(let c=0;c<8;c++){const u=c*l;r.save(),r.beginPath(),r.rect(u,0,l,256),r.clip();const f=r.createLinearGradient(u,0,u+l,0);if(f.addColorStop(0,"rgba(0,0,0,0.35)"),f.addColorStop(.2,"rgba(0,0,0,0)"),f.addColorStop(.8,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(0,0,0,0.35)"),r.fillStyle=f,r.fillRect(u,0,l,256),r.fillStyle=o,c===0&&(r.fillRect(u,14,l,2),r.fillRect(u,240,l,2)),c===1){for(const h of[40,90,140,190])r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(u,h,l,6),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(u,h,l,2);r.fillStyle="#2a1a14",r.fillRect(u+3,52,l-6,30),r.fillStyle=o;for(let h=0;h<3;h++)r.fillRect(u+7,60+h*7,l-14-s()*6,2)}if(c===2){for(let h=0;h<6;h++)r.fillRect(u+8,50+h*9,l-16-s()*8,3);r.fillRect(u,226,l,6)}if(c===3){r.fillStyle="rgba(0,0,0,0.5)",r.fillRect(u,0,l,34),r.fillRect(u,222,l,34),r.fillStyle=o,r.fillRect(u,34,l,2),r.fillRect(u,220,l,2);for(let h=0;h<4;h++)r.fillRect(u+9,80+h*8,l-18,2)}if(c===4){r.fillStyle="rgba(255,255,255,0.25)",r.fillRect(u,0,l,256),r.fillStyle="rgba(20,20,20,0.75)";for(let h=0;h<10;h++)r.fillRect(u+12,40+h*12,3+s()*4,7)}if(c===5){for(const h of[8,16,24,230,238,246])r.fillRect(u,h,l,2);for(let h=0;h<5;h++)r.beginPath(),r.arc(u+l/2,60+h*30,3,0,Math.PI*2),r.fill();r.fillStyle="#1d1d1d",r.fillRect(u+4,34,l-8,18),r.fillStyle=o,r.fillRect(u+8,41,l-16,3)}if(c===6){r.fillStyle="rgba(255,255,255,0.3)";for(let h=0;h<40;h++)r.fillRect(u+s()*l,s()<.5?s()*30:256-s()*30,2+s()*4,1+s()*2);r.fillStyle=o,r.fillRect(u+10,70,l-20,3)}c===7&&(r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(u,20,l,10),r.fillRect(u,226,l,10),r.fillStyle="rgba(240,235,220,1)",r.fillRect(u+5,60,l-10,34),r.fillStyle="rgba(40,30,20,0.8)",r.fillRect(u+8,70,l-16,2),r.fillRect(u+8,78,l-18,2)),r.restore()}for(let c=256;c<384;c++){const u=215+(Math.sin(c*2.7)*.5+.5)*30*s();r.fillStyle=`rgb(${u},${u},${u-4})`,r.fillRect(c,0,1,256)}return tn(i,!0,!1)}function v0(n){const e=Ye(512,512),i=e.getContext("2d"),r=In(n);return[["#d8b27a","#8a6a4a","#4b5a3a","#2e3a2a"],["#9fb3c0","#6a7a6a","#3e4a3a","#22281e"],["#e8c28a","#b07a4a","#5a3a2a","#2a1e18"],["#7a8aa0","#5a6058","#3a3a30","#1e1e18"]].forEach((a,o)=>{const l=o%2*256,c=Math.floor(o/2)*256,u=i.createLinearGradient(0,c,0,c+256);u.addColorStop(0,a[0]),u.addColorStop(.55,a[1]),u.addColorStop(1,a[3]),i.fillStyle=u,i.fillRect(l,c,256,256);for(let h=0;h<3;h++){i.fillStyle=a[1+h],i.beginPath(),i.moveTo(l,c+256);const p=120+h*45;for(let g=0;g<=16;g++)i.lineTo(l+g*16,c+p+Math.sin(g*.7+h*2+o)*18+r()*10);i.lineTo(l+256,c+256),i.fill()}o===2&&(i.fillStyle="rgba(255,230,170,0.8)",i.beginPath(),i.arc(l+180,c+90,18,0,7),i.fill());const f=i.createRadialGradient(l+128,c+128,40,l+128,c+128,190);f.addColorStop(0,"rgba(60,40,10,0)"),f.addColorStop(1,"rgba(40,25,5,0.55)"),i.fillStyle=f,i.fillRect(l,c,256,256)}),tn(e,!0,!1)}function M0(n){const i=Ye(512,256),r=me(n,4,5);return Dn(i,(s,a,o)=>{const l=r(s,a*.5+.2)>.53,c=Math.abs(a-.5),u=Math.abs(s*24%1)<.03||Math.abs(a*12%1)<.04?.82:1;l?(o[0]=196*u,o[1]=168*u,o[2]=112*u):(o[0]=(150-c*60)*u,o[1]=(140-c*40)*u,o[2]=(100-c*20)*u)}),tn(i,!0,!1)}function S0(){const n=Ye(64,64),t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Hl(n)}function y0(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new Re;let c=0;for(let u=0;u<n.length;++u){const f=n[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0;const f=[];for(let h=0;h<n.length;++h){const p=n[h].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(f)}for(const u in s){const f=Qo(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const p=[];for(let _=0;_<a[u].length;++_)p.push(a[u][_][h]);const g=Qo(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Qo(n){let t,e,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new Ee(a,e,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,p=u.count;h<p;h++)for(let g=0;g<e;g++){const _=u.getComponent(h,g);o.setComponent(h+f,g,_)}}else a.set(u.array,l);l+=u.count*e}return r!==void 0&&(o.gpuType=r),o}const tl=new Ne,el=new Pn;function E0(n,t,e,i,r){const s=new Ln(n,t,e),a=s.attributes.uv,o=r(),l=r(),c=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let u=0;u<6;u++){const[f,h]=c[u],p=h>f;for(let g=0;g<4;g++){const _=u*4+g;let m=a.getX(_)*f,d=a.getY(_)*h;if(p){const T=m;m=d,d=T}a.setXY(_,m/i+o,d/i+l)}}return s}class b0{constructor(t){this.rand=t,this.batches=new Map,this.solids=[]}add(t,e){this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(e)}frame(t,e,i,r=0){return new Gr(this,new $t().makeRotationY(r).setPosition(t,e,i))}finish(t){for(const[e,i]of this.batches){for(const a of i)for(const o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);const r=y0(i,!1),s=new Qt(r,e);s.castShadow=!e.userData.noShadow,s.receiveShadow=!0,s.matrixAutoUpdate=!1,t.add(s);for(const a of i)a.dispose()}this.batches.clear()}}class Gr{constructor(t,e){this.b=t,this.m=e}sub(t,e,i,r=0){return new Gr(this.b,this.m.clone().multiply(new $t().makeRotationY(r).setPosition(t,e,i)))}local(t,e,i,r=0,s=0,a=0){return tl.set(r,s,a),el.setFromEuler(tl),new $t().compose(new N(t,e,i),el,new N(1,1,1)).premultiply(this.m)}geo(t,e,i,r,s,a,o,l){e.applyMatrix4(this.local(i,r,s,a,o,l)),this.b.add(t,e)}box(t,e,i,r,s,a,o,l=0,c=0,u=0){this.geo(t,E0(e,i,r,t.userData.ts||1,this.b.rand),s,a,o,l,c,u)}cyl(t,e,i,r,s,a,o,l=12,c=0,u=0,f=0,h=!1,p,g){const _=new kr(e,i,r,l,1,h,p||0,g||Math.PI*2),m=t.userData.ts||1,d=_.attributes.uv,T=Math.PI*2*Math.max(e,i);for(let A=0;A<d.count;A++)d.setXY(A,d.getY(A)*r/m,d.getX(A)*T/m);this.geo(t,_,s,a,o,c,u,f)}sphere(t,e,i,r,s,a=1,o=1,l=1,c=12,u=8){const f=new Ki(e,c,u);f.scale(a,o,l),this.geo(t,f,i,r,s)}torus(t,e,i,r,s,a,o=0,l=0,c=0,u=32){this.geo(t,new Da(e,i,6,u),r,s,a,o,l,c)}plane(t,e,i,r,s,a,o=0,l=0,c=0,u=null){const f=new dn(e,i);if(u){const h=f.attributes.uv;for(let p=0;p<h.count;p++)h.setXY(p,u[0]+h.getX(p)*u[2],u[1]+h.getY(p)*u[3])}this.geo(t,f,r,s,a,o,l,c)}solid(t,e,i,r,s,a){const o=this.local(r,s,a),l=new N,c=new N(1/0,1/0,1/0),u=new N(-1/0,-1/0,-1/0);for(let f=0;f<8;f++)l.set((f&1?.5:-.5)*t,(f&2?.5:-.5)*e,(f&4?.5:-.5)*i).applyMatrix4(o),c.min(l),u.max(l);this.b.solids.push({x0:c.x,x1:u.x,y0:c.y,y1:u.y,z0:c.z,z1:u.z})}sbox(t,e,i,r,s,a,o){this.box(t,e,i,r,s,a,o),this.solid(e,i,r,s,a,o)}}function T0(){const n=(u,f)=>{const h=new ma(u);return h.userData.ts=f||1,h},t=ys(1,[118,70,38],[48,26,12],{rings:16}),e=ys(2,[184,124,70],[104,62,30],{rings:15}),i=ys(3,[84,50,30],[34,18,10],{rings:11}),r=m0(4),s=jo(5,[232,214,184]),a=jo(6,[150,158,124]),o=Jo(7,[100,34,22]),l=Jo(8,[92,56,30]),c=g0(9);return{walnut:n({map:t,bumpMap:t,bumpScale:.6,roughness:.6,color:16777215},1.3),oak:n({map:e,bumpMap:e,bumpScale:.5,roughness:.48},1.6),dark:n({map:i,bumpMap:i,bumpScale:.5,roughness:.55},1.2),floor:n({map:r,bumpMap:r,bumpScale:1.2,roughness:.42},1.9),plaster:n({map:s,bumpMap:s,bumpScale:1.5,roughness:.94},3),sage:n({map:a,bumpMap:a,bumpScale:1.5,roughness:.92},2.5),ceil:n({map:s,roughness:.95,color:15919320},4),leather:n({map:o,bumpMap:o,bumpScale:1.2,roughness:.5},.9),leather2:n({map:l,bumpMap:l,bumpScale:1.2,roughness:.55},.9),stone:n({map:c,bumpMap:c,bumpScale:2,roughness:.88},1.4),iron:n({color:1841946,metalness:.75,roughness:.48}),brass:n({color:11831880,metalness:1,roughness:.32}),gilt:n({color:10122294,metalness:.8,roughness:.42}),soot:n({color:920587,roughness:1}),cushion:n({map:Es(10,[150,128,92],!0),roughness:.95},.5),cushion2:n({map:Es(11,[70,88,70],!1),roughness:.95},.4),runner:n({map:Es(12,[118,34,28],!0),roughness:.95},.6),paper:n({color:15129280,roughness:.9}),ceramic:n({color:15525590,roughness:.25}),terracotta:n({color:10246714,roughness:.85}),plant:n({color:4086828,roughness:.75,side:De}),greenGlass:n({color:1993264,emissive:3971642,emissiveIntensity:.55,roughness:.15,metalness:.1,side:De}),shade:n({color:15390376,emissive:16757865,emissiveIntensity:.9,roughness:.9,side:De}),flame:Object.assign(new Cn({color:new Lt(2.4,1.6,.7)}),{userData:{noShadow:!0}}),ember:Object.assign(new Cn({color:new Lt(2.2,.7,.2)}),{userData:{noShadow:!0}}),rug:n({map:_0(13),roughness:1}),painting:n({map:v0(14),roughness:.55}),globe:n({map:M0(15),roughness:.4})}}const ga={H:10.5,GY:4.2},cn=.012;function A0(n,t,e){const i=new b0(e),r=i.frame(0,0,0,0),s=ga.H,a=ga.GY,o=[],l=[],c=[],u=e;function f(y,I,R,D,k,Y,it,mt,rt){const Nt=[I,R];for(const Rt of mt)Nt.push(Rt[0],Rt[1]);const It=[...new Set(Nt)].sort((Rt,U)=>Rt-U);for(let Rt=0;Rt<It.length-1;Rt++){const U=It[Rt],se=It[Rt+1],Gt=mt.filter(zt=>zt[0]<=U&&zt[1]>=se).sort((zt,Mt)=>zt[2]-Mt[2]);let Ct=Y;const bt=(zt,Mt)=>{Mt-zt<.001||(y==="x"?r.sbox(rt,k-D,Mt-zt,se-U,(D+k)/2,(zt+Mt)/2,(U+se)/2):r.sbox(rt,se-U,Mt-zt,k-D,(U+se)/2,(zt+Mt)/2,(D+k)/2))};for(const zt of Gt)bt(Ct,zt[2]),Ct=zt[3];bt(Ct,it)}}r.sbox(n.floor,14,.3,19,0,-.15,-.5),r.box(n.ceil,15,.3,20,0,s+.15,-.5),f("z",-7.5,7.5,-10.5,-10,0,s,[],n.plaster),f("x",-10.5,9.5,7,7.5,0,s,[],n.plaster),f("z",-7.5,7.5,9,9.5,0,s,[[-5,-3,4.5,8.3],[2.6,4.6,4.5,8.3]],n.plaster),f("x",-10.5,9.5,-7.5,-7,0,s,[[-5.6,-3.6,.9,7.2],[-1.6,.4,.9,7.2],[2.4,7.4,0,3.4],[3.2,6.6,5,8]],n.plaster),r.sbox(n.floor,4.5,.3,5,-9.25,-.15,4.9),r.box(n.ceil,5,.3,6,-9.5,3.75,4.9),r.box(n.plaster,5.4,.3,6.6,-9.75,4.05,4.9),f("z",-12,-7.5,1.9,2.4,0,3.6,[[-10.4,-8.6,.9,2.9]],n.sage),f("z",-12,-7.5,7.4,7.9,0,3.6,[[-10.4,-8.6,.9,2.9]],n.sage),f("x",1.9,7.9,-12,-11.5,0,3.6,[[2.9,6.9,.6,3]],n.sage);const g=.04;for(const y of[3.2,4.9,6.6])r.box(n.dark,4.5+g,.18,.14,-9.25+g/2,3.52,y);r.box(n.oak,.3,.3,5.2,-7.15+g,3.45,4.9);function _(y,I,R,D,k=!0){y.box(n.oak,I+.3,.05,D+.14+2*cn,0,0,(-D+.14)/2),y.box(n.oak,.12+cn,R+.12,.06,-I/2-.06+cn/2,R/2,.02),y.box(n.oak,.12+cn,R+.12,.06,I/2+.06-cn/2,R/2,.02),y.box(n.oak,I+.36,.14+cn,.07,0,R+.07-cn/2,.02);const Y=-D*.55;y.box(n.dark,I,.07,.07,0,.06,Y),y.box(n.dark,I,.07,.07,0,R-.035,Y),y.box(n.dark,.07,R,.07,-I/2+.035,R/2,Y),y.box(n.dark,.07,R,.07,I/2-.035,R/2,Y);const it=Math.max(1,Math.round(I/.62));for(let rt=1;rt<it;rt++)y.box(n.iron,.03,R,.035,-I/2+I*rt/it,R/2,Y);const mt=Math.max(1,Math.round(R/.55));for(let rt=1;rt<mt;rt++)y.box(rt%4===0?n.dark:n.iron,I,rt%4===0?.06:.025,.035,0,R*rt/mt,Y);if(k){const rt=[];for(const[Nt,It]of[[-I/2,0],[I/2,0],[I/2,R],[-I/2,R]])rt.push(new N(Nt,It,Y).applyMatrix4(y.m));c.push(rt)}}_(r.sub(-7,.9,-4.6,Math.PI/2),2,6.3,.5),_(r.sub(-7,.9,-.6,Math.PI/2),2,6.3,.5),_(r.sub(-7,5,4.9,Math.PI/2),3.4,3,.5),_(r.sub(-11.5,.6,4.9,Math.PI/2),4,2.4,.5),_(r.sub(-9.5,.9,7.4,Math.PI),1.8,2,.5),_(r.sub(-9.5,.9,2.4,0),1.8,2,.5,!1),_(r.sub(-4,4.5,9,Math.PI),2,3.8,.5),_(r.sub(3.6,4.5,9,Math.PI),2,3.8,.5);for(const y of[2.33,7.47])r.box(n.oak,.14,3.5+cn,.6,-6.95,(3.5-cn)/2,y);for(const y of[-4.6,-.6])r.box(n.dark,.04,.85,2,-6.98,.45,y);r.box(n.dark,.05,1,2.2,6.97,.5,7.85),r.box(n.oak,.08,.06,2.3,6.96,1.02,7.85);for(const[y,I,R,D]of[[14,.3,0,-9.85],[14,.3,0,8.85],[.3,19,-6.85,-.5],[.3,19,6.85,-.5]])r.box(n.oak,y,.22,I,R,s-.11,D),r.box(n.dark,y+(y>1?0:.1),.08,I+(I>1?0:.12),R,s-.26,D);r.box(n.oak,.12,.1,19,-6.94,8.4,-.5),r.box(n.oak,14,.1,.12,0,8.4,8.94),r.box(n.oak,.12,.1,19,6.94,8.4,-.5);for(const y of[-4.6,-.6]){r.cyl(n.iron,.02,.02,2.9,-6.82,7.55,y,8,Math.PI/2,0,0);for(const I of[-1,1]){r.sphere(n.iron,.045,-6.82,7.55,y+I*1.45),r.box(n.iron,.12,.03,.03,-6.9,7.55,y+I*1.3);for(let R=0;R<4;R++)r.box(n.cushion2,.05+R%2*.03,4.85-R*.12,.05,-6.86+R%2*.03,5.08+R*.06,y+I*(1.04+R*.035),0,0,0);r.cyl(n.brass,.012,.012,.2,-6.8,3.4,y+I*1.1,6,Math.PI/2,0,0)}}for(const y of[-8.2,-4.6,-1,2.6,6.2]){r.box(n.dark,14,.38,.3,0,9.85,y),r.box(n.dark,.24,.6,.24,0,10.2,y);for(const I of[-1,1])r.box(n.dark,.2,1.4,.22,I*6.55,9.2,y,0,0,I*.62),r.box(n.iron,.36,.42,.32,I*3.4,9.85,y),r.box(n.dark,.25,.7,.32,I*6.88,9.2,y)}for(const y of[-3.4,3.4])r.box(n.dark,.2,.24,19,y,10.25,-.5);r.sbox(n.floor,14,.35,3,0,a-.175,-8.5),r.sbox(n.floor,2.8,.35,5.8,5.6,a-.175,-4.1);for(let y=-6.6;y<4.2;y+=.9)r.box(n.dark,.12,.24,3,y,a-.47,-8.5);for(let y=-6.6;y<-1.2;y+=.9)r.box(n.dark,2.8,.24,.12,5.6,a-.47,y);r.box(n.oak,11.42,.55,.24,-1.4,a-.27,-6.9),r.box(n.oak,.24,.55,5.9,4.3,a-.27,-4.15),r.box(n.dark,11.42,.06,.3,-1.4,a-.02,-6.9),r.box(n.dark,.3,.06,5.9,4.3,a-.02,-4.15);const m=[[-4.6,-6.9,"x"],[-1.4,-6.9,"x"],[1.8,-6.9,"x"],[4.3,-6.9,"c"],[4.3,-4.1,"z"],[4.3,-1.35,"z"]];for(const[y,I,R]of m){r.cyl(n.iron,.07,.085,a-.55,y,(a-.55)/2,I,14),r.box(n.iron,.24,.16,.24,y,.08,I),r.box(n.iron,.26,.1,.26,y,a-.6,I),r.cyl(n.iron,.11,.07,.18,y,a-.75,I,14),r.solid(.26,a-.5,.26,y,(a-.5)/2,I);const D=R==="x"?[[1,0],[-1,0]]:R==="z"?[[0,1],[0,-1]]:[[-1,0],[0,1]];for(const[k,Y]of D)r.box(n.iron,.04,.9,.04,y+k*.3,a-.88,I+Y*.3,Y*.72,0,-k*.72),r.torus(n.iron,.12,.012,y+k*.22,a-.75,I+Y*.22,0,k?0:Math.PI/2,0,16)}function d(y,I,R,D,k,Y=2.4){const it=Math.hypot(R-y,D-I),mt=Math.atan2(-(D-I),R-y),rt=r.sub(y,k,I,mt);rt.box(n.oak,it+.06,.07,.13,it/2,1.02,0),rt.box(n.iron,it,.04,.05,it/2,.97,0),rt.box(n.iron,it,.04,.05,it/2,.1,0);const Nt=Math.round(it/.13);for(let Rt=1;Rt<Nt;Rt++){const U=it*Rt/Nt;rt.box(n.iron,.02,.86,.02,U,.53,0),Rt%3===0&&rt.sphere(n.iron,.025,U,.45,0)}const It=Math.max(1,Math.round(it/Y));for(let Rt=0;Rt<=It;Rt++){const U=it*Rt/It;rt.box(n.oak,.11,1.12,.11,U,.56,0),rt.sphere(n.oak,.065,U,1.16,0,1,.8,1)}rt.solid(it,1.1,.16,it/2,.55,0)}d(-7,-6.92,4.3,-6.92,a),d(4.3,-6.92,4.3,-1.25,a,1.9),r.box(n.oak,.08,.3,3,-6.96,a+.1,-8.5);const T=a/24,A=.3,M=4.2,O=7,b=6.7,C=(M+O)/2,L=O-M,E=[];for(let y=1;y<=11;y++)E.push({y:y*T,z0:b-y*A,z1:b-(y-1)*A});E.push({y:12*T,z0:2.1,z1:3.4,landing:!0});for(let y=13;y<=23;y++)E.push({y:y*T,z0:2.1-(y-12)*A,z1:2.1-(y-13)*A});for(const y of E){const I=y.z1-y.z0,R=(y.z0+y.z1)/2;r.box(n.dark,L,y.y-.045,I,C,(y.y-.045)/2,R),r.box(n.oak,L+.03,.045,I+.035,C-.015,y.y-.0225,R+.0175),r.solid(L,y.y,I,C,y.y/2,R),r.box(n.runner,1.5,.012,I,C+.15,y.y+.006,R+.01),r.box(n.runner,1.5,T-.03,.012,C+.15,y.y-T/2-.02,y.z1+.007),r.cyl(n.brass,.008,.008,1.62,C+.15,y.y-T+.012,y.z1+.02,6,0,0,Math.PI/2);const D=y.landing?9:2;for(let k=0;k<D;k++){const Y=y.z0+I*(k+.5)/D;r.box(n.iron,.022,.9,.022,M+.07,y.y+.45,Y)}r.solid(.16,1.05,I,M+.07,y.y+.52,R)}const v=Math.atan(T/A),P=[[b,0,b-11*A,11*T],[2.1,12*T,-1.2,23*T]];for(const[y,I,R,D]of P){const k=Math.hypot(y-R,D-I),Y=(y+R)/2,it=(I+D)/2;r.box(n.oak,.13,.07,k,M+.07,it+1,Y,v,0,0),r.box(n.iron,.05,.04,k,M+.07,it+.95,Y,v,0,0),r.box(n.oak,.07,.32,k+.2,M-.02,it+.02,Y-.05,v,0,0)}r.box(n.oak,.13,.07,1.3,M+.07,12*T+1,2.75);for(const[y,I]of[[b-.12,0],[3.4,11*T],[2.1,12*T],[-1.25,a]])r.box(n.oak,.16,1.25,.16,M+.07,I+.62,y),r.box(n.oak,.2,.06,.2,M+.07,I+1.26,y),r.sphere(n.oak,.08,M+.07,I+1.35,y);r.solid(.2,1.25,.2,M+.07,.62,b-.12);function G(y,I,R,D,k={}){const Y=Math.max(1,Math.round(I/(k.bay||.92))),it=I/Y,mt=k.spacing||.38,rt=.14,Nt=Math.floor((R-rt-.12)/mt),It=(R-rt-.12)/Nt;y.box(n.dark,I,rt,D-.03,I/2,rt/2,-D/2-.015),y.box(n.walnut,I,R,.02,I/2,R/2,-D+.01),y.box(n.walnut,I+.06,.07,D+.05,I/2,R-.035,-D/2+.025),y.box(n.walnut,I+.12,.05,D+.09,I/2,R+.025,-D/2+.045),k.noCornice||y.box(n.dark,I+.02,.1,.03,I/2,R-.12,.01);for(let Rt=0;Rt<=Y;Rt++){const U=Math.min(I-.02,Math.max(.02,Rt*it));y.box(n.walnut,.04,R-.07,D,U,(R-.07)/2,-D/2),y.box(n.dark,.06,R-.2,.015,U,R/2-.05,.005)}for(let Rt=0;Rt<Y;Rt++){const U=Rt*it+.02,se=(Rt+1)*it-.02,Gt=(u()-.5)*.04;for(let Ct=0;Ct<=Nt;Ct++){const bt=rt+Ct*It+(Ct>0&&Ct<Nt?Gt:0);if(Ct>0&&Ct<Nt+1&&y.box(n.walnut,se-U,.026,D-.025,(U+se)/2,bt-.013,-D/2-.0125),Ct<Nt){const Mt=rt+(Ct+1)*It+(Ct+1<Nt?Gt:0)-bt-.026-.005,w=k.sparse?.8:.97;u()<w&&o.push({m:y.local(U+.005,bt,-.012),len:se-U-.01,clear:Mt,d:D-.04})}}}k.solid!==!1&&y.solid(I,R+.05,D,I/2,R/2,-D/2)}G(r.sub(-7,0,-9.6,0),14,3.45,.4),G(r.sub(-6.6,0,-5.75,Math.PI/2),3.85,3.45,.4),G(r.sub(6.6,0,-9.6,-Math.PI/2),8.4,3.45,.4,{spacing:.4}),G(r.sub(-6.6,0,-1.7,Math.PI/2),1.8,2.4,.36,{spacing:.36}),G(r.sub(-6.6,0,2.3,Math.PI/2),1.8,2.4,.36,{spacing:.42}),G(r.sub(-1.4,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.4}),G(r.sub(7,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.37}),G(r.sub(-7,a,-9.6,0),14,3.8,.4,{spacing:.4}),G(r.sub(-6.6,a,-7,Math.PI/2),2.6,3.8,.4,{spacing:.4}),G(r.sub(6.6,a,-9.6,-Math.PI/2),8.4,3.8,.4,{spacing:.39});for(const y of[-5,-2.4]){G(r.sub(-4.3,0,y+.3,0),4,2.25,.3,{spacing:.36,solid:!1}),G(r.sub(-.3,0,y-.3,Math.PI),4,2.25,.3,{spacing:.36,solid:!1}),r.solid(4.1,2.3,.62,-2.3,1.15,y);for(const I of[-4.33,-.27])r.box(n.oak,.06,2.3,.66,I,1.15,y);r.box(n.oak,4.14,.05,.7,-2.3,2.3,y)}G(r.sub(-10.6,0,2.75,0),2.2,.85,.35,{bay:.75,noCornice:!0}),G(r.sub(-8.4,0,7.05,Math.PI),2.2,.85,.35,{bay:.75,noCornice:!0});function H(y,I,R){r.cyl(n.iron,.016,.016,13.6,0,y+R-.15,-9.47,8,0,0,Math.PI/2);for(let rt=-6.4;rt<=6.4;rt+=2.13)r.box(n.iron,.03,.03,.14,rt,y+R-.15,-9.53);const D=-9.45,k=-8.35,Y=Math.hypot(k-D,R),it=-Math.atan((k-D)/R);for(const rt of[-.22,.22])r.box(n.oak,.05,Y,.08,I+rt,y+R/2,(D+k)/2,it,0,0);const mt=Math.floor(Y/.28);for(let rt=1;rt<mt;rt++){const Nt=rt/mt;r.cyl(n.iron,.014,.014,.44,I,y+Nt*R,k+(D-k)*Nt,8,0,0,Math.PI/2)}for(const rt of[-.22,.22])r.cyl(n.iron,.035,.035,.04,I+rt,y+.035,k,10,0,0,Math.PI/2),r.box(n.iron,.02,.14,.02,I+rt,y+R-.08,D-.02);r.solid(.6,1.2,.45,I,y+.6,k-.15)}H(0,-2.6,3.3),H(a,2.2,3.4);function K(y,I,R=.9,D=!0){const k=R,Y=.86;y.box(I,k,.3,Y,0,.27,0),y.box(I,k-.3,.13,Y-.24,0,.48,.06);for(const mt of[-1,1])y.box(I,.16,.36,Y-.05,mt*(k/2-.08),.6,.02),y.cyl(I,.095,.095,Y-.02,mt*(k/2-.07),.78,.03,12,Math.PI/2,0,0),y.cyl(n.dark,.03,.022,.12,mt*(k/2-.07),.06,Y/2-.08,8),y.cyl(n.dark,.03,.022,.12,mt*(k/2-.07),.06,-Y/2+.08,8),D&&y.box(I,.1,.45,.3,mt*(k/2-.06),1.05,-Y/2+.2);const it=D?1.12:.9;y.box(I,k-.04,it-.4,.2,0,.4+(it-.4)/2,-Y/2+.1,-.08,0,0),y.cyl(I,.09,.09,k-.06,0,it,-Y/2+.12,12,0,0,Math.PI/2);for(let mt=0;mt<3;mt++)for(let rt=0;rt<Math.round(k/.22);rt++){const Nt=Math.round(k/.22);y.sphere(n.iron,.012,-k/2+.13+(k-.26)*(rt+mt%2*.5)/Nt,.62+mt*.13,-Y/2+.215,1,1,.6,6,4)}y.solid(k,.95,Y,0,.47,0)}function J(y){y.box(n.oak,.44,.04,.42,0,.46,0);for(const[I,R]of[[-.19,.18],[.19,.18],[-.19,-.18],[.19,-.18]])y.cyl(n.oak,.02,.018,.44,I,.22,R,8);for(const I of[-.19,.19])y.box(n.oak,.035,.5,.035,I,.72,-.19,-.1,0,0);y.box(n.oak,.42,.08,.03,0,.94,-.215,-.1,0,0);for(let I=-1;I<=1;I++)y.box(n.oak,.03,.36,.02,I*.1,.72,-.2,-.1,0,0);y.box(n.oak,.38,.02,.02,0,.12,0),y.box(n.leather2,.36,.03,.34,0,.495,.01),y.solid(.44,.95,.44,0,.47,0)}function Z(y,I,R,D,k=0){y.cyl(n.brass,.07,.08,.025,I,R+.012,D,16),y.cyl(n.brass,.01,.01,.3,I,R+.17,D,8),y.cyl(n.brass,.012,.012,.12,I,R+.32,D,6,0,k,Math.PI/2),y.cyl(n.greenGlass,.1,.1,.3,I,R+.34,D,16,0,k,Math.PI/2,!1,0,Math.PI),y.sphere(n.flame,.03,I,R+.31,D,1.6,.6,1)}function et(y,I,R,D,k=1){y.cyl(n.ceramic,.06*k,.09*k,.25*k,I,R+.125*k,D,16),y.cyl(n.brass,.01,.01,.15*k,I,R+.3*k,D,6),y.cyl(n.shade,.1*k,.17*k,.2*k,I,R+.42*k,D,20,0,0,0,!0)}function q(y,I,R,D,k,Y,it){y.box(n.gilt,I+2*.07,.07,.05,D,k+R/2+.07/2,Y),y.box(n.gilt,I+2*.07,.07,.05,D,k-R/2-.07/2,Y),y.box(n.gilt,.07,R,.05,D-I/2-.07/2,k,Y),y.box(n.gilt,.07,R,.05,D+I/2+.07/2,k,Y),y.plane(n.painting,I,R,D,k,Y,0,0,0,[it%2*.5,Math.floor(it/2)*.5,.5,.5])}function ot(y,I,R,D,k,Y){t.stack(y.m,I,R,D,k,Y)}function pt(y,I,R,D,k=.18){y.cyl(n.brass,.045,.06,.02,I,R+.01,D,12),y.cyl(n.brass,.012,.02,.2,I,R+.11,D,8),y.cyl(n.brass,.03,.02,.03,I,R+.22,D,10),y.cyl(n.paper,.016,.016,k,I,R+.235+k/2,D,8),y.sphere(n.flame,.012,I,R+.25+k,D,1,2,1,6,4)}{const y=r.sub(-.5,0,1.9,0);y.box(n.oak,1.25,.06,3.9,0,.75,0),y.box(n.dark,1.05,.13,3.6,0,.655,0);for(const R of[-1.75,0,1.75])for(const D of[-.5,.5])y.cyl(n.dark,.05,.04,.6,D,.32,R,10),y.sphere(n.dark,.06,D,.45,R,1,.8,1,10,6);y.box(n.dark,.06,.06,3.4,0,.14,0),y.solid(1.25,.8,3.9,0,.4,0),Z(y,0,.78,-.95,Math.PI/2),Z(y,0,.78,.95,Math.PI/2),l.push({p:new N(-.5,1.15,1.9),c:16761466,i:5.5,d:9}),ot(y,.35,.78,-1.5,4,.2),ot(y,-.38,.78,1.55,3,-.4),ot(y,.4,.78,.4,2,1.2),y.box(n.leather,.44,.012,.3,-.15,.786,-.25,0,.1,0),y.box(n.paper,.2,.025,.28,-.255,.8,-.26,0,.1,.06),y.box(n.paper,.2,.025,.28,-.055,.8,-.24,0,.1,-.06),y.box(n.paper,.21,.004,.29,.3,.783,.9,0,-.3,0),y.cyl(n.iron,.03,.03,.05,.42,.805,.95,10),y.cyl(n.brass,.002,.002,.18,.4,.86,.95,4,0,0,.4);const I=[[-.88,-1.2,Math.PI/2],[-.92,.05,Math.PI/2+.15],[-.86,1.25,Math.PI/2],[.86,-1.25,-Math.PI/2],[1.15,.1,-Math.PI/2-.4],[.88,1.2,-Math.PI/2]];for(const[R,D,k]of I)J(y.sub(R,0,D,k))}{const y=new dn(3.4,5.6);y.rotateX(-Math.PI/2),r.geo(n.rug,y,-.5,.008,1.9);const I=new dn(3.4,5.2);I.rotateX(-Math.PI/2),I.rotateY(Math.PI/2),r.geo(n.rug,I,0,.008,6.8);const R=new dn(2.2,3.2);R.rotateX(-Math.PI/2),r.geo(n.rug,R,-9.4,.008,4.9)}{const y=r.sub(0,0,9,Math.PI);y.box(n.stone,2.7,.08,.75,0,.04,.37);for(const I of[-1,1])y.box(n.stone,.38,1.28,.38,I*.96,.64,.19);y.box(n.stone,2.3,.36,.4,0,1.46,.2),y.box(n.dark,2.7,.08,.48,0,1.68,.24),y.box(n.plaster,2.3,3,.3,0,3.22,.15),y.box(n.soot,1.56,1.28,.04,0,.64,.02),y.box(n.soot,1.56,.02,.38,0,.09,.19);for(let I=0;I<6;I++)y.box(n.iron,.025,.25,.025,-.4+I*.16,.24,.3);y.box(n.iron,.9,.03,.3,0,.14,.2),y.cyl(n.dark,.06,.07,.75,0,.22,.18,8,0,.1,Math.PI/2),y.cyl(n.dark,.05,.05,.7,.05,.3,.24,8,0,-.3,Math.PI/2),y.box(n.ember,.8,.03,.26,0,.165,.2),y.sphere(n.ember,.12,-.1,.25,.2,2.2,.5,.8,8,6),y.solid(2.7,1.72,.8,0,.86,.4),pt(y,-1.05,1.72,.25),pt(y,1.05,1.72,.25,.14),y.box(n.dark,.32,.36,.14,0,1.9,.22),y.cyl(n.ceramic,.11,.11,.02,0,1.94,.3,20,Math.PI/2,0,0),y.cyl(n.brass,.125,.125,.015,0,1.94,.295,20,Math.PI/2,0,0),y.cyl(n.terracotta,.05,.08,.22,.6,1.83,.22,12),ot(y,-.6,1.72,.24,2,.3),q(y,1.4,.95,0,3.5,.31,2),y.cyl(n.iron,.012,.012,.8,1.32,.4,.55,6,0,0,.08),y.cyl(n.brass,.025,.025,.06,1.35,.82,.55,8),l.push({p:new N(0,.55,8.35),c:16747068,i:6,d:10,fire:!0})}K(r.sub(0,0,5.7,0),n.leather,2.2,!1),K(r.sub(-2.15,0,7.4,Math.PI/2-.2),n.leather2),K(r.sub(2.15,0,7.4,-Math.PI/2+.25),n.leather);{const y=r.sub(0,0,7.3,.05);y.box(n.oak,1.1,.05,.6,0,.42,0);for(const[R,D]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]])y.box(n.dark,.05,.4,.05,R,.2,D);y.box(n.dark,1,.02,.5,0,.1,0),y.solid(1.1,.45,.6,0,.22,0),ot(y,-.25,.445,0,3,.5),y.cyl(n.ceramic,.04,.03,.07,.25,.48,.05,12),y.torus(n.ceramic,.025,.006,.29,.48,.05,0,0,0,10),y.cyl(n.ceramic,.07,.07,.008,.25,.449,.05,16),ot(y,-.2,.12,0,3,0);const I=r.sub(1.45,0,5.75,0);I.cyl(n.dark,.25,.25,.03,0,.6,0,20),I.cyl(n.dark,.03,.04,.58,0,.3,0,8),I.cyl(n.dark,.18,.2,.03,0,.015,0,16),I.solid(.5,.62,.5,0,.31,0),et(I,0,.615,0,1.1)}{r.box(n.oak,.6,.45,4,-11.19,.225,4.9),r.solid(.62,.45,4,-11.2,.225,4.9),r.box(n.cushion,.56,.1,3.9,-11.2,.5,4.9),r.box(n.cushion2,.16,.42,.5,-11.38,.74,3.25,0,0,-.25),r.box(n.leather2,.16,.38,.46,-11.38,.72,6.5,0,.2,-.3),r.box(n.cushion,.4,.06,.6,-11.1,.58,5.2,0,.4,0),t.stack(r.m,-11.2,.55,4.3,3,.4),r.cyl(n.terracotta,.11,.08,.2,-11.25,.65,6,14);for(let R=0;R<9;R++){const D=R/9*Math.PI*2;r.box(n.plant,.06,.32,.01,-11.25+Math.cos(D)*.06,.88,6+Math.sin(D)*.06,Math.sin(D)*.5,D,Math.cos(D)*.5)}K(r.sub(-9.3,0,3.4,-Math.PI/2+.55),n.leather),K(r.sub(-9.3,0,6.35,-Math.PI/2-.55),n.leather2);const y=r.sub(-9.9,0,4.9,0);y.cyl(n.oak,.3,.3,.035,0,.6,0,24),y.cyl(n.dark,.035,.05,.58,0,.3,0,10);for(let R=0;R<3;R++){const D=R/3*Math.PI*2;y.box(n.dark,.05,.05,.3,Math.cos(D)*.12,.04,Math.sin(D)*.12,0,-D+Math.PI/2,0)}y.solid(.6,.62,.6,0,.31,0),ot(y,-.08,.62,-.08,3,.7),y.cyl(n.ceramic,.045,.035,.06,.14,.65,.1,12),y.cyl(n.ceramic,.075,.075,.008,.14,.62,.1,16);const I=r.sub(-8,0,7,0);I.cyl(n.iron,.16,.18,.03,0,.015,0,16),I.cyl(n.iron,.014,.014,1.5,0,.76,0,8),I.cyl(n.shade,.14,.24,.28,0,1.55,0,20,0,0,0,!0),I.solid(.36,1.6,.36,0,.8,0),l.push({p:new N(-8,1.5,6.9),c:16757866,i:4,d:7}),q(r.sub(-7.5,0,2.4,0),.5,.4,-.45,2,.03,3),ot(r,-8.6,0,7.15,5,.3)}{const y=r.sub(-5.9,0,-.7,.3);for(let R=0;R<3;R++){const D=R/3*Math.PI*2;y.box(n.dark,.04,.75,.04,Math.cos(D)*.18,.37,Math.sin(D)*.18,Math.sin(D)*.25,0,-Math.cos(D)*.25)}y.torus(n.oak,.3,.03,0,.76,0,Math.PI/2,0,0,32),y.torus(n.brass,.32,.01,0,1,0,0,0,.4,32);const I=new Ki(.29,32,20);I.rotateZ(.4),y.geo(n.globe,I,0,1,0),y.solid(.7,1.3,.7,0,.65,0)}{const y=r.sub(5.5,0,-1.22,Math.PI);y.box(n.oak,1.9,1.1,.5,0,.55,.25);for(let I=0;I<8;I++)for(let R=0;R<6;R++){const D=-.82+I*.235,k=.22+R*.15;y.box(n.walnut,.2,.12,.02,D,k,.505),y.box(n.brass,.05,.012,.02,D,k-.02,.52),y.box(n.paper,.05,.025,.005,D,k+.025,.517)}y.box(n.walnut,2,.05,.56,0,1.125,.25),y.solid(1.9,1.15,.5,0,.57,.25),et(y,.65,1.15,.25,.9),ot(y,-.4,1.15,.25,4,.2),r.cyl(n.brass,.008,.008,.75,5.5,a-.95,-4.1,6),r.cyl(n.brass,.04,.04,.05,5.5,a-.6,-4.1,10),r.cyl(n.shade,.1,.22,.2,5.5,a-1.38,-4.1,20,0,0,0,!0),r.sphere(n.flame,.035,5.5,a-1.4,-4.1,1,1,1,8,6),l.push({p:new N(5.5,a-1.5,-4.1),c:16759930,i:3.5,d:7})}{const y=r.sub(-5.6,a,-8.85,0);y.box(n.oak,1.4,.05,.7,0,.76,0);for(const R of[-1,1])y.box(n.dark,.36,.72,.64,R*.5,.37,0);y.box(n.dark,.6,.12,.62,0,.67,0);for(const R of[-1,1])for(let D=0;D<3;D++)y.box(n.walnut,.32,.2,.02,R*.5,.16+D*.22,.33),y.cyl(n.brass,.015,.015,.02,R*.5,.16+D*.22,.345,8,Math.PI/2,0,0);y.solid(1.4,.8,.7,0,.4,0),Z(y,-.4,.785,-.1,0),ot(y,.45,.785,-.1,5,0),y.box(n.paper,.3,.004,.22,.05,.787,.1,0,.2,0),y.cyl(n.iron,.025,.03,.045,-.15,.81,-.15,10),J(y.sub(.05,0,.6,Math.PI+.2)),l.push({p:new N(-5.9,a+1.25,-8.85),c:16761466,i:4.5,d:8}),K(r.sub(6,a,-3.6,-Math.PI/2),n.leather2);const I=r.sub(6.1,a,-2.4,0);I.cyl(n.dark,.22,.22,.03,0,.55,0,18),I.cyl(n.dark,.03,.03,.54,0,.27,0,8),I.cyl(n.dark,.15,.17,.03,0,.015,0,14),I.solid(.44,.58,.44,0,.29,0),ot(I,0,.565,0,3,.4),t.stack(r.m,3.4,a,-9,6,.2),t.stack(r.m,-1.6,0,-8.9,4,.1)}for(const[y,I,R]of[[-.5,6.2,1.9],[-2.3,7,-3.7]]){r.torus(n.iron,.75,.025,y,I,R,Math.PI/2,0,0,40),r.torus(n.iron,.4,.018,y,I-.25,R,Math.PI/2,0,0,28),r.cyl(n.iron,.006,.006,10.5-I,y,(10.5+I)/2,R,4);for(let D=0;D<4;D++){const k=D/4*Math.PI*2+.4;r.cyl(n.iron,.005,.005,1.1,y+Math.cos(k)*.37,I+.45,R+Math.sin(k)*.37,4,Math.sin(k)*.72,0,-Math.cos(k)*.72)}for(let D=0;D<10;D++){const k=D/10*Math.PI*2,Y=y+Math.cos(k)*.75,it=R+Math.sin(k)*.75;r.cyl(n.iron,.03,.02,.04,Y,I+.03,it,8),r.cyl(n.paper,.014,.014,.14,Y,I+.12,it,6),r.sphere(n.flame,.011,Y,I+.205,it,1,2,1,6,4)}}q(r.sub(7,0,0,-Math.PI/2),1.1,.8,4.6,3.1,.03,0),q(r.sub(7,0,0,-Math.PI/2),.9,1.2,.7,5.3,.03,1),q(r.sub(-7,0,0,Math.PI/2),.9,.7,2.6,3.2,.03,3),q(r.sub(-7,0,0,Math.PI/2),.9,.7,-1.4,3.2,.03,1);{const y=r;y.sphere(n.ceramic,.12,-3.6,2.5,-5,.85,1.1,.85,14,10),y.cyl(n.ceramic,.07,.1,.16,-3.6,2.4,-5,12),y.box(n.stone,.2,.08,.2,-3.6,2.36,-5),t.stack(r.m,-1.2,2.325,-5,3,.3),y.cyl(n.terracotta,.12,.09,.26,-1,2.455,-2.4,14),y.sphere(n.plant,.18,-1,2.7,-2.4,1,.7,1,10,6),t.stack(r.m,-3.2,2.325,-2.4,4,1.2),pt(r,-2.4,2.325,-2.4)}const wt=(y,I,R)=>{const D=new Gr(i,y.m),k=u();if(k<.35)D.box(n.iron,.012,Math.min(.16,y.clear-.02),.11,I-R/2+.01,Math.min(.16,y.clear-.02)/2,-.08),D.box(n.iron,.09,.006,.11,I-R/2+.05,.003,-.08);else if(k<.55&&y.clear>.22)D.cyl(u()<.5?n.ceramic:n.terracotta,.035,.05,.15,I,.075,-.1,12);else if(k<.75){const Y=Math.min(R-.02,.14);D.box(u()<.5?n.walnut:n.leather2,Y,Math.min(.08,y.clear-.02),.12,I,.04,-.1)}else k<.85&&y.clear>.2&&D.box(n.gilt,.1,.13,.012,I,.065,-.12,-.15,0,0)};for(const y of o)t.fillSlot(y,wt);return i.finish=i.finish.bind(i),{B:i,lights:l,windows:c,slots:o}}const nl=[[.36,.08,.06],[.42,.12,.08],[.12,.2,.12],[.1,.16,.28],[.18,.1,.06],[.48,.32,.16],[.06,.06,.06],[.55,.42,.2],[.16,.26,.26],[.3,.1,.16],[.62,.55,.42],[.26,.24,.2],[.4,.24,.1],[.2,.12,.2],[.7,.62,.48]],il=new Pn,rl=new Ne,w0=new N,R0=new N;class C0{constructor(t){this.rand=t,this.mats=[],this.cols=[],this.vars=[]}color(t,e=0){const i=this.rand,r=t||nl[Math.floor(i()*nl.length)],s=.8+i()*.4,a=e||(i()<.12?.2+i()*.25:0);return[r[0]*s*(1-a)+.55*a,r[1]*s*(1-a)+.48*a,r[2]*s*(1-a)+.38*a]}add(t,e,i,r,s,a,o,l,c,u,f=0){rl.set(0,f,s),il.setFromEuler(rl);const h=new $t().compose(w0.set(e,i,r),il,R0.set(a,o,l));h.premultiply(t),this.mats.push(h),this.cols.push(c),this.vars.push(u)}fillSlot(t,e){const i=this.rand,{m:r,len:s,clear:a,d:o}=t;let l=.01+i()*.04,c=.25;for(;l<s-.03;){const u=i(),f=s-l;if(u<.07&&f>.34&&a>.16){const M=2+Math.floor(i()*4);let O=0,b=0;const C=.2+i()*.1;for(let L=0;L<M;L++){const E=.022+i()*.04;if(O+E>a-.02)break;const v=Math.min(C+(i()-.5)*.06,f-.03),P=Math.min(o-.02,.15+i()*.08);this.add(r,l+v/2+(i()-.5)*.02,O+E/2,-P/2-.01-i()*.02,Math.PI/2,E,v,P,this.color(),Math.floor(i()*8),(i()-.5)*.12),O+=E,b=Math.max(b,v)}l+=b+.02+i()*.03;continue}if(u<.13){const M=.06+i()*.16;e&&M>.1&&f>.2&&e(t,l+M/2,M),l+=M;continue}const h=i()<.4,p=h?4+Math.floor(i()*10):3+Math.floor(i()*12),g=this.color(),_=Math.floor(i()*8),m=Math.min(a-.02,.2+i()*.16),d=.03+i()*.03,T=Math.min(o-.02,.15+i()*.08),A=i()<.2?.08:0;for(let M=0;M<p&&l<s-.03;M++){let O,b,C,L,E;if(h?(O=d*(.85+i()*.3),b=m,C=T,L=i()<.08?this.color():g,E=_):(O=.016+i()*.05+(i()<.1?.03:0),b=Math.min(a-.015,.17+i()*.17+A),C=Math.min(o-.02,.12+i()*.13),L=this.color(),E=Math.floor(i()*8)),l+O>s-.01)break;const v=.006+i()*(i()<.15?.06:.018);this.add(r,l+O/2,b/2,-C/2-v,0,O,b,C,L,E,(i()-.5)*.03),l+=O+.0015,c=b}if(i()<.35&&s-l>.12){const M=.12+i()*.3,O=.02+i()*.03,b=Math.min(c*.95,a-.03,.18+i()*.12),C=Math.min(o-.02,.14+i()*.08),L=l+O/2*Math.cos(M)+b/2*Math.sin(M),E=O/2*Math.sin(M)+b/2*Math.cos(M);l+O*Math.cos(M)+b*Math.sin(M)<s-.01&&(this.add(r,L,E,-C/2-.01,M,O,b,C,this.color(),Math.floor(i()*8)),l+=O*Math.cos(M)+b*Math.sin(M))}l+=.004+i()*.04}}stack(t,e,i,r,s,a=0){const o=this.rand;let l=i;for(let c=0;c<s;c++){const u=.025+o()*.04,f=.2+o()*.12,h=.15+o()*.08;this.add(t,e+(o()-.5)*.03,l+u/2,r+(o()-.5)*.03,Math.PI/2,u,f,h,this.color(),Math.floor(o()*8),a+(o()-.5)*.4),l+=u}return l}build(t){const e=new Ln(1,1,1),i=e.attributes.uv,r=new Float32Array(i.count),s=new Float32Array(i.count);for(let h=0;h<6;h++)for(let p=0;p<4;p++){const g=h*4+p;let _=i.getX(g),m=i.getY(g);if(h===4)_=_*.0625,r[g]=1;else if(h===0||h===1)_=.76+_*.23;else if(h===2||h===3){const d=_;_=.51+m*.23,m=d,s[g]=1}else _=.51+_*.23,s[g]=1;i.setXY(g,_,m)}e.setAttribute("aSpine",new Ee(r,1)),e.setAttribute("aPage",new Ee(s,1));const a=this.mats.length,o=new Float32Array(a);for(let h=0;h<a;h++)o[h]=this.vars[h];e.setAttribute("aVar",new da(o,1));const l=new c0({map:t});l.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
`)};const c=e.index.array;e.setIndex(Array.from(c.slice(0,30)));const u=new zl(e,l,a),f=new Lt;for(let h=0;h<a;h++){u.setMatrixAt(h,this.mats[h]);const p=this.cols[h];f.setRGB(p[0],p[1],p[2]),u.setColorAt(h,f)}return u.instanceMatrix.needsUpdate=!0,u.instanceColor.needsUpdate=!0,u.castShadow=!0,u.receiveShadow=!0,u.computeBoundingSphere(),u}}const sl=.0026,al=Math.PI/2-.02;function P0({canvas:n,overlay:t,player:e,camera:i,releaseMovement:r,toast:s}){const a=t.querySelector("#look-sensitivity"),o=t.querySelector("#look-sensitivity-value");let l=sl,c=!1,u=!1,f=!1,h=!1,p=!1,g=document.hasFocus(),_=0,m=0,d=0;function T(b,C){!Number.isFinite(b)||!Number.isFinite(C)||(e.yaw-=b*l,e.pitch=Math.max(-al,Math.min(al,e.pitch-C*l)),i.rotation.set(e.pitch,e.yaw,0))}function A(){f=p=!1,t.classList.add("hide"),s("Mouse capture unavailable. Hold left mouse to look; Esc opens controls.")}async function M(){if(c||f||!g)return;if(!n.requestPointerLock){A();return}const b=++d;f=!0,p=!0,h=!1;try{const C=n.requestPointerLock({unadjustedMovement:!0});if(!C||typeof C.then!="function"){h=!0;return}try{await C}catch(L){if(L.name!=="NotSupportedError"||b!==d||!g)throw L;await n.requestPointerLock()}}catch{b===d&&g&&A()}finally{b===d&&!h&&(f=!1)}}t.addEventListener("click",b=>{b.target.closest("[data-look-setting]")||M()}),n.addEventListener("mousedown",b=>{b.button!==0||c||!g||(u=!0,_=b.clientX,m=b.clientY,M())}),addEventListener("mouseup",()=>{u=!1}),addEventListener("mousemove",b=>{if(!(!g||document.visibilityState!=="visible")){if(c)T(b.movementX,b.movementY);else if(u){if(!(b.buttons&1)){u=!1;return}T(b.clientX-_,b.clientY-m),_=b.clientX,m=b.clientY}}}),document.addEventListener("pointerlockchange",()=>{c=document.pointerLockElement===n,f=h=u=!1,r(),c&&(!g||!p)&&(document.exitPointerLock(),c=!1),c||(p=!1),t.classList.toggle("hide",c)}),document.addEventListener("pointerlockerror",()=>{h&&f&&(h=!1,A())});function O(){g=!1,++d,c=f=h=u=p=!1,r(),t.classList.remove("hide"),document.pointerLockElement===n&&document.exitPointerLock()}addEventListener("blur",O),addEventListener("focus",()=>{g=document.visibilityState==="visible"}),document.addEventListener("visibilitychange",()=>{document.visibilityState!=="visible"?O():g=document.hasFocus()}),addEventListener("keydown",b=>{b.code==="Escape"&&!c&&(++d,u=f=h=p=!1,r(),t.classList.remove("hide"))}),a.addEventListener("input",()=>{const b=Math.max(40,Math.min(220,Number(a.value)||100));l=sl*b/100,o.textContent=`${b}%`})}const Gl=document.getElementById("c"),le=new r0({canvas:Gl,antialias:!0,powerPreference:"high-performance"}),Vl=Math.min(window.devicePixelRatio||1,1);let bn=Vl;le.setPixelRatio(bn);le.setSize(window.innerWidth,window.innerHeight);le.toneMapping=ll;le.toneMappingExposure=1.05;le.outputColorSpace=Ae;le.shadowMap.enabled=!0;le.shadowMap.type=Ma;le.shadowMap.autoUpdate=!1;const oe=new Bl;oe.background=new Lt(9075306);const Je=new Ie(70,window.innerWidth/window.innerHeight,.05,2500);Je.rotation.order="YXZ";const Wl=new ha(le),Xl=new p0,L0=Wl.fromScene(Xl,.04);oe.environment=L0.texture;Xl.dispose();Wl.dispose();oe.environmentIntensity=.22;const I0=In(20261006),D0=T0(),Vi=new C0(In(77)),Zi=A0(D0,Vi,I0);Zi.B.finish(oe);const ql=Vi.build(x0(31));oe.add(ql);const Fa=Zi.B.solids;Vi.mats.length=Vi.cols.length=Vi.vars.length=0;const vi=new N(-.9,.4,.14).normalize(),Qe=new d0(16757611,8);Qe.target.position.set(-2,3,-1);Qe.position.copy(Qe.target.position).addScaledVector(vi,60);Qe.castShadow=!0;Qe.shadow.mapSize.set(4096,4096);const jn=Qe.shadow.camera;jn.left=-17;jn.right=17;jn.top=15;jn.bottom=-15;jn.near=20;jn.far=100;jn.updateProjectionMatrix();Qe.shadow.bias=-4e-4;Qe.shadow.normalBias=.025;oe.add(Qe,Qe.target);const U0=new u0(13227775,6964264,.42);oe.add(U0);const Yl=new Na(16754792,11,24,1.2);Yl.position.set(3,3.6,-.8);oe.add(Yl);const $l=[];for(const n of Zi.lights){const t=new Na(n.c,n.i,n.d,2);t.position.copy(n.p),t.userData=n,oe.add(t),$l.push(t)}new Lt(1,.66,.42);{const n=new Ki(1200,32,16),t=new qe({side:Me,depthWrite:!1,uniforms:{sunDir:{value:vi}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 zen = vec3(0.16,0.27,0.55); vec3 hor = vec3(1.25,0.74,0.45); vec3 below = vec3(0.55,0.42,0.36);
        vec3 col = mix(hor, zen, pow(clamp(h,0.0,1.0), 0.5));
        col = mix(col, below, smoothstep(0.0,-0.2,h));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.55,0.25)*pow(s,5.0)*0.7 + vec3(1.0,0.75,0.45)*pow(s,90.0)*2.5 + smoothstep(0.9993,0.9996,s)*vec3(18.0,12.0,7.0);
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new Qt(n,t);e.frustumCulled=!1,e.renderOrder=-1,oe.add(e)}function kn(n,t){let e=-.7;const i=Math.max(0,-n-13);return e-=70*(1-Math.exp(-i/140)),e+=(Math.sin(n*.011+t*.017)*10+Math.sin(t*.029+1.3)*Math.cos(n*.013)*12)*Math.min(1,i/120),n<-420&&(e+=Math.min(140,(-n-420)*.22)*(.75+.18*Math.sin(t*.009+.5)+.07*Math.sin(t*.043))),n>8&&(e+=(n-8)*.35),Math.abs(t)>30&&n>-60&&(e+=(Math.abs(t)-30)*.12),e}{const e=new dn(1800,1800,220,220);e.rotateX(-Math.PI/2);const i=e.attributes.position,r=new Float32Array(i.count*3),s=new Lt(.24,.27,.1),a=new Lt(.34,.3,.12),o=new Lt,l=new N(vi.x,vi.y,vi.z);for(let b=0;b<i.count;b++)i.setY(b,kn(i.getX(b),i.getZ(b)));e.setAttribute("color",new Ee(r,3)),e.computeVertexNormals();const c=new Qt(e,new Cn({vertexColors:!0}));c.position.x=-300,c.matrixAutoUpdate=!1,c.updateMatrix(),oe.add(c);const u=new N,f=new Lt(.86,.6,.48);for(let b=0;b<i.count;b++){const C=i.getX(b)-300,L=i.getZ(b);i.setY(b,kn(C,L));const E=kn(C-1,L)-kn(C+1,L),v=kn(C,L-1)-kn(C,L+1),P=u.set(E,2,v).normalize(),G=.45+.9*Math.max(0,P.dot(l));o.copy(s).lerp(a,.5+.5*Math.sin(C*.05)*Math.cos(L*.07)).multiplyScalar(G),o.r*=1.25,o.g*=1.05;const H=Math.hypot(C+10,L);o.lerp(f,(1-Math.exp(-H/420))*.92),r[b*3]=o.r,r[b*3+1]=o.g,r[b*3+2]=o.b}const h=In(5),p=new Ia(1,1,7);p.translate(0,.5,0);const g=new zl(p,new Cn,700),_=new $t,m=new Pn,d=new N,T=new N,A=new Lt,M=new Lt(.8,.58,.5);let O=0;for(;O<700;){const b=-14-Math.pow(h(),1.6)*520,C=(h()-.5)*900;if(b>-45)continue;const L=5+h()*9,E=L*(.25+h()*.1);d.set(b,kn(b,C)-.5,C),T.set(E,L,E),_.compose(d,m,T),g.setMatrixAt(O,_);const v=Math.hypot(b+10,C);A.setRGB(.16+h()*.06,.2+h()*.07,.1).lerp(M,(1-Math.exp(-v/300))*.92),g.setColorAt(O,A),O++}g.frustumCulled=!1,oe.add(g)}const _a=vi.clone().negate();{const n=[],t=[];for(const a of Zi.windows.slice(0,4))for(let o=0;o<4;o++){const l=a[o],c=a[(o+1)%4],u=l.clone().addScaledVector(_a,12),f=c.clone().addScaledVector(_a,12);for(const[h,p,g]of[[l,0,0],[c,0,1],[f,1,1],[l,0,0],[f,1,1],[u,1,0]])n.push(h.x,h.y,h.z),t.push(p,g)}const i=new Re;i.setAttribute("position",new ue(n,3)),i.setAttribute("uv",new ue(t,2));const r=new qe({transparent:!0,depthWrite:!1,blending:Ir,side:De,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float t; varying vec2 vUv; varying vec3 vW;
      void main(){ float along = vUv.x; float across = vUv.y;
        float a = pow(1.0-along, 1.6) * smoothstep(0.0,0.04,along) * smoothstep(0.0,0.25,across) * smoothstep(1.0,0.75,across);
        float n = 0.75 + 0.25*sin(vW.x*1.7 + vW.y*2.3 + t*0.3) * sin(vW.z*1.3 - t*0.2);
        float fadeFloor = smoothstep(0.0, 0.6, vW.y);
        gl_FragColor = vec4(vec3(1.0,0.72,0.42)*a*n*0.11*fadeFloor, 1.0); }`}),s=new Qt(i,r);s.frustumCulled=!1,s.renderOrder=5,oe.add(s),window.__shafts=r}let Fr;{const n=In(9),t=[],e=[];for(const s of Zi.windows)for(let a=0;a<420;a++){const o=n(),l=n(),c=s[0].clone().lerp(s[1],o).lerp(s[3].clone().lerp(s[2],o),l).addScaledVector(_a,.5+n()*11);c.y<.1||c.y>10||c.x>6.9||c.z<-9.9||c.z>8.9||(t.push(c.x,c.y,c.z),e.push(n()*100))}const i=new Re;i.setAttribute("position",new ue(t,3)),i.setAttribute("phase",new ue(e,1)),Fr=new qe({transparent:!0,depthWrite:!1,blending:Ir,uniforms:{t:{value:0},map:{value:S0()},scale:{value:window.innerHeight*.5}},vertexShader:`uniform float t; uniform float scale; attribute float phase; varying float vA;
      void main(){ vec3 p = position + vec3(sin(t*0.11+phase)*0.25, sin(t*0.07+phase*1.3)*0.3, cos(t*0.09+phase*0.7)*0.25);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        gl_PointSize = clamp(0.018*scale/-mv.z, 0.0, 6.0); vA = 0.55+0.45*sin(t*0.5+phase); }`,fragmentShader:"uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0,0.8,0.55)*a*vA*0.8, 1.0); }"});const r=new l0(i,Fr);r.frustumCulled=!1,oe.add(r)}const gt={pos:new N,vy:0,yaw:0,pitch:0,eye:1.62,eyeCur:1.62,smoothY:0,vel:new N,radius:.28,step:.42,height:1.75},Kl=[{p:[3.4,0,4.3],yaw:.78,pitch:.1,name:"Entrance by the hearth"},{p:[-2,0,-3.7],yaw:1.2,pitch:-.05,name:"Lower shelves, between the stacks"},{p:[-8.2,0,4.9],yaw:1.5,pitch:-.05,name:"Window reading alcove"},{p:[5.6,0,8],yaw:0,pitch:.18,name:"Foot of the staircase"},{p:[1.2,ga.GY,-7.6],yaw:Math.PI-.3,pitch:-.32,name:"Gallery overlook"}];function qi(n){const t=Kl[n];gt.pos.set(t.p[0],t.p[1],t.p[2]),gt.yaw=t.yaw,gt.pitch=t.pitch,gt.vy=0,gt.vel.set(0,0,0),gt.smoothY=gt.pos.y,Oa(t.name)}function N0(n,t,e){let i=-1/0;const r=gt.radius*.7;for(const s of Fa)n+r<s.x0||n-r>s.x1||t+r<s.z0||t-r>s.z1||s.y1<=e+gt.step&&s.y1>i&&(i=s.y1);return i}function bs(n,t,e,i){const r=gt.radius;for(const s of Fa)if(!(n+r<=s.x0||n-r>=s.x1||t+r<=s.z0||t-r>=s.z1)&&s.y0<e+i&&s.y1>e+gt.step)return!0;return!1}const ve=new Set;let Wi=!1;addEventListener("keydown",n=>{var t,e;if(!((e=(t=n.target)==null?void 0:t.matches)!=null&&e.call(t,"input, button"))&&(ve.add(n.code),!n.repeat)){if(n.code==="KeyR"&&qi(0),n.code.startsWith("Digit")){const i=+n.code.slice(5)-1;i>=0&&i<Kl.length&&qi(i)}n.code==="KeyC"&&(Wi=!Wi),n.code==="KeyF"&&Zl.classList.toggle("show"),n.code==="KeyH"&&O0.classList.toggle("hide"),n.code==="KeyP"&&(bn=bn>.8?Math.max(.6,bn-.25):Vl,le.setPixelRatio(bn),Ba(),Oa(`Render scale ${Math.round(bn*100)}%`)),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault()}});addEventListener("keyup",n=>ve.delete(n.code));addEventListener("blur",()=>ve.clear());const F0=document.getElementById("overlay"),O0=document.getElementById("help"),Zl=document.getElementById("stats"),Or=document.getElementById("toast");let Lr=0;function Oa(n){Or.textContent=n,Or.classList.add("show"),Lr=2.2}P0({canvas:Gl,overlay:F0,player:gt,camera:Je,toast:Oa,releaseMovement:()=>{ve.clear(),gt.vel.set(0,0,0)}});const B0=new N;function jl(n){const t=(ve.has("KeyW")||ve.has("ArrowUp")?1:0)-(ve.has("KeyS")||ve.has("ArrowDown")?1:0),e=(ve.has("KeyD")||ve.has("ArrowRight")?1:0)-(ve.has("KeyA")||ve.has("ArrowLeft")?1:0),i=(ve.has("ShiftLeft")||ve.has("ShiftRight")?4.6:2.5)*(Wi?.55:1),r=Math.sin(gt.yaw),s=Math.cos(gt.yaw),a=-r*t+s*e,o=-s*t-r*e,l=Math.hypot(a,o)||1,c=B0.set(a/l*i*(t||e?1:0),0,o/l*i*(t||e?1:0)),u=1-Math.exp(-n*12);gt.vel.lerp(c,u);const f=Wi?1.15:gt.height,h=gt.pos.x+gt.vel.x*n,p=gt.pos.z+gt.vel.z*n;bs(h,p,gt.pos.y,f)?bs(h,gt.pos.z,gt.pos.y,f)?bs(gt.pos.x,p,gt.pos.y,f)?gt.vel.multiplyScalar(.2):(gt.pos.z=p,gt.vel.x*=.5):(gt.pos.x=h,gt.vel.z*=.5):(gt.pos.x=h,gt.pos.z=p);const g=N0(gt.pos.x,gt.pos.z,gt.pos.y);g>=gt.pos.y-gt.step&&g>-1/0&&gt.vy<=0?(gt.pos.y=g,gt.vy=0):(gt.vy-=9.8*n,gt.pos.y+=gt.vy*n,g>-1/0&&gt.pos.y<g&&(gt.pos.y=g,gt.vy=0)),gt.pos.y<-10&&qi(0),gt.smoothY+=(gt.pos.y-gt.smoothY)*(1-Math.exp(-n*14)),gt.eyeCur+=((Wi?1:gt.eye)-gt.eyeCur)*(1-Math.exp(-n*10)),Je.position.set(gt.pos.x,gt.smoothY+gt.eyeCur,gt.pos.z),Je.rotation.set(gt.pitch,gt.yaw,0)}function Ba(){Je.aspect=window.innerWidth/window.innerHeight,Je.updateProjectionMatrix(),le.setSize(window.innerWidth,window.innerHeight),Fr.uniforms.scale.value=window.innerHeight*bn*.5}addEventListener("resize",Ba);Ba();const z0=new Cn({colorWrite:!1}),xa=[];oe.traverse(n=>{n.material&&(n.material.transparent||n.material.isShaderMaterial||n.isPoints)&&xa.push(n)});le.autoClear=!1;let Jl=!1;function Ql(){if(le.clear(),Jl){for(const n of xa)n.visible=!1;oe.overrideMaterial=z0,le.render(oe,Je),oe.overrideMaterial=null;for(const n of xa)n.visible=!0}le.render(oe,Je)}const br=[];let Ts=0,ol=performance.now(),Hi=0;qi(0);Or.classList.remove("show");le.compile(oe,Je);oe.traverse(n=>{const t=n.material;if(t){for(const e of["map","bumpMap"])t[e]&&le.initTexture(t[e]);t.uniforms&&t.uniforms.map&&le.initTexture(t.uniforms.map.value)}});le.shadowMap.needsUpdate=!0;function tc(n){const t=(n-ol)/1e3;ol=n;const e=Math.min(t,.05);Hi+=e,jl(e);for(const i of $l)i.userData.fire&&(i.intensity=i.userData.i*(.82+.12*Math.sin(Hi*9.1)+.08*Math.sin(Hi*23.7+1.3)));if(window.__shafts.uniforms.t.value=Hi,Fr.uniforms.t.value=Hi,Ql(),t<.25&&document.visibilityState==="visible"&&br.push(t*1e3),br.length>240&&br.shift(),Ts+=t,Ts>.5){Ts=0;const i=[...br].sort((o,l)=>o-l),r=i.reduce((o,l)=>o+l,0)/i.length,s=i[Math.floor(i.length*.99)-1]||r,a=le.info.render;Zl.textContent=`${(1e3/r).toFixed(0)} fps  avg ${r.toFixed(1)} ms  p99 ${s.toFixed(1)} ms
calls ${a.calls}  tris ${(a.triangles/1e3).toFixed(0)}k  scale ${Math.round(bn*100)}%
pos ${gt.pos.x.toFixed(1)} ${gt.pos.y.toFixed(2)} ${gt.pos.z.toFixed(1)}`}Lr>0&&(Lr-=e,Lr<=0&&Or.classList.remove("show")),requestAnimationFrame(tc)}requestAnimationFrame(tc);document.getElementById("loading").classList.add("hide");window.__lib={P:gt,setView:qi,solids:Fa,renderer:le,scene:oe,camera:Je,books:ql,drawFrame:Ql,setPrepass:n=>Jl=n,sim:(n,t)=>{n.forEach(e=>ve.add(e));for(let e=0;e<t;e+=1/60)jl(1/60);return n.forEach(e=>ve.delete(e)),gt.pos.toArray().map(e=>+e.toFixed(2))}};
