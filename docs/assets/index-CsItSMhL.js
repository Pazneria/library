(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="170",gc=0,oa=1,_c=2,Co=1,xc=2,hn=3,In=0,ye=1,Ne=2,Pn=0,xi=1,Br=2,aa=3,la=4,vc=5,qn=100,Mc=101,Sc=102,yc=103,Ec=104,bc=200,Tc=201,Ac=202,wc=203,Ns=204,Fs=205,Rc=206,Cc=207,Pc=208,Lc=209,Ic=210,Dc=211,Uc=212,Nc=213,Fc=214,Os=0,Bs=1,zs=2,yi=3,ks=4,Hs=5,Gs=6,Vs=7,Po=0,Oc=1,Bc=2,Ln=0,zc=1,kc=2,Hc=3,Ml=4,Gc=5,Vc=6,Wc=7,Sl=300,Ei=301,bi=302,Ws=303,Xs=304,Xr=306,zr=1e3,$n=1001,qs=1002,Fe=1003,Xc=1004,sr=1005,Qe=1006,Jr=1007,Cn=1008,gn=1009,yl=1010,El=1011,$i=1012,Lo=1013,jn=1014,tn=1015,Ji=1016,Io=1017,Do=1018,Ti=1020,bl=35902,Tl=1021,Al=1022,Ye=1023,wl=1024,Rl=1025,vi=1026,Ai=1027,Uo=1028,No=1029,Cl=1030,Fo=1031,Oo=1033,Lr=33776,Ir=33777,Dr=33778,Ur=33779,Ys=35840,$s=35841,js=35842,Ks=35843,Zs=36196,Js=37492,Qs=37496,to=37808,eo=37809,no=37810,io=37811,ro=37812,so=37813,oo=37814,ao=37815,lo=37816,co=37817,uo=37818,ho=37819,fo=37820,po=37821,Nr=36492,mo=36494,go=36495,Pl=36283,_o=36284,xo=36285,vo=36286,qc=3200,Yc=3201,Bo=0,$c=1,wn="",Te="srgb",Ri="srgb-linear",qr="linear",ee="srgb",ei=7680,ca=519,jc=512,Kc=513,Zc=514,Ll=515,Jc=516,Qc=517,tu=518,eu=519,ua=35044,ha="300 es",fn=2e3,kr=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,Mo=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]).toLowerCase()}function Pe(n,t,e){return Math.max(t,Math.min(e,n))}function nu(n,t){return(n%t+t)%t}function ts(n,t,e){return(1-e)*n+e*t}function Ui(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,r,s,o,a,l,u){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],b=r[1],T=r[4],M=r[7],F=r[2],A=r[5],C=r[8];return s[0]=o*_+a*b+l*F,s[3]=o*m+a*T+l*A,s[6]=o*d+a*M+l*C,s[1]=u*_+c*b+f*F,s[4]=u*m+c*T+f*A,s[7]=u*d+c*M+f*C,s[2]=h*_+p*b+g*F,s[5]=h*m+p*T+g*A,s[8]=h*d+p*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,g=e*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*u-c*i)*_,t[2]=(a*i-r*o)*_,t[3]=h*_,t[4]=(c*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(i*l-u*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(es.makeScale(t,e)),this}rotate(t){return this.premultiply(es.makeRotation(-t)),this}translate(t,e){return this.premultiply(es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const es=new Ht;function Il(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function iu(){const n=Hr("canvas");return n.style.display="block",n}const fa={};function Wi(n){n in fa||(fa[n]=!0,console.warn(n))}function ru(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function su(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ou(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(n.r=dn(n.r),n.g=dn(n.g),n.b=dn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(n.r=Mi(n.r),n.g=Mi(n.g),n.b=Mi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===wn?qr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const da=[.64,.33,.3,.6,.15,.06],pa=[.2126,.7152,.0722],ma=[.3127,.329],ga=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_a=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Ri]:{primaries:da,whitePoint:ma,transfer:qr,toXYZ:ga,fromXYZ:_a,luminanceCoefficients:pa,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:da,whitePoint:ma,transfer:ee,toXYZ:ga,fromXYZ:_a,luminanceCoefficients:pa,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}});let ni;class au{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=Hr("canvas")),ni.width=t.width,ni.height=t.height;const i=ni.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=dn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(dn(e[i]/255)*255):e[i]=dn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lu=0;class Dl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ns(r[o].image)):s.push(ns(r[o]))}else s=ns(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ns(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?au.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cu=0;class Ee extends Ci{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,i=$n,r=$n,s=Qe,o=Cn,a=Ye,l=gn,u=Ee.DEFAULT_ANISOTROPY,c=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Qi(),this.name="",this.source=new Dl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zr:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case qs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zr:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case qs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Sl;Ee.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,i=0,r=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(u+1)/2,M=(p+1)/2,F=(d+1)/2,A=(c+h)/4,C=(f+_)/4,L=(g+m)/4;return T>M&&T>F?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=A/i,s=C/i):M>F?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=L/r):F<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),i=C/s,r=L/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(h-c)/b,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uu extends Ci{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ee(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends uu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ul extends Ee{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hu extends Ee{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*_,b=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const F=Math.sqrt(T),A=Math.atan2(F,d*b);m=Math.sin(m*A)/F,a=Math.sin(a*A)/F}const M=a*b;if(l=l*m+h*M,u=u*m+p*M,c=c*m+g*M,f=f*m+_*M,m===1-a){const F=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=F,u*=F,c*=F,f*=F}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+c*f+l*p-u*h,t[e+1]=l*g+c*h+u*f-a*p,t[e+2]=u*g+c*p+a*h-l*f,t[e+3]=c*g-a*f-l*h-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,h=Math.sin(e*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return is.copy(this).projectOnVector(t),this.sub(is)}reflect(t){return this.sub(is.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const is=new O,xa=new _n;class Zn{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ve):Ve.fromBufferAttribute(s,o),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),or.copy(i.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),ar.subVectors(this.max,Ni),ii.subVectors(t.a,Ni),ri.subVectors(t.b,Ni),si.subVectors(t.c,Ni),Sn.subVectors(ri,ii),yn.subVectors(si,ri),On.subVectors(ii,si);let e=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-On.z,On.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,On.z,0,-On.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-On.y,On.x,0];return!rs(e,ii,ri,si,ar)||(e=[1,0,0,0,1,0,0,0,1],!rs(e,ii,ri,si,ar))?!1:(lr.crossVectors(Sn,yn),e=[lr.x,lr.y,lr.z],rs(e,ii,ri,si,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new O,new O,new O,new O,new O,new O,new O,new O],Ve=new O,or=new Zn,ii=new O,ri=new O,si=new O,Sn=new O,yn=new O,On=new O,Ni=new O,ar=new O,lr=new O,Bn=new O;function rs(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Bn.fromArray(n,s);const a=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),l=t.dot(Bn),u=e.dot(Bn),c=i.dot(Bn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const fu=new Zn,Fi=new O,ss=new O;class Pi{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):fu.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fi.subVectors(t,this.center);const e=Fi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Fi,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ss.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fi.copy(t.center).add(ss)),this.expandByPoint(Fi.copy(t.center).sub(ss))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new O,os=new O,cr=new O,En=new O,as=new O,ur=new O,ls=new O;class Nl{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){os.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),En.copy(this.origin).sub(os);const s=t.distanceTo(e)*.5,o=-this.direction.dot(cr),a=En.dot(this.direction),l=-En.dot(cr),u=En.lengthSq(),c=Math.abs(1-o*o);let f,h,p,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(os).addScaledVector(cr,h),p}intersectSphere(t,e){an.subVectors(t.center,this.origin);const i=an.dot(this.direction),r=an.dot(an)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(t.min.x-h.x)*u,r=(t.max.x-h.x)*u):(i=(t.max.x-h.x)*u,r=(t.min.x-h.x)*u),c>=0?(s=(t.min.y-h.y)*c,o=(t.max.y-h.y)*c):(s=(t.max.y-h.y)*c,o=(t.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,i,r,s){as.subVectors(e,t),ur.subVectors(i,t),ls.crossVectors(as,ur);let o=this.direction.dot(ls),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);const l=a*this.direction.dot(ur.crossVectors(En,ur));if(l<0)return null;const u=a*this.direction.dot(as.cross(En));if(u<0||l+u>o)return null;const c=-a*En.dot(ls);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,i,r,s,o,a,l,u,c,f,h,p,g,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,f,h,p,g,_,m)}set(t,e,i,r,s,o,a,l,u,c,f,h,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/oi.setFromMatrixColumn(t,0).length(),s=1/oi.setFromMatrixColumn(t,1).length(),o=1/oi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*c,p=o*f,g=a*c,_=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=p+g*u,e[5]=h-_*u,e[9]=-a*l,e[2]=_-h*u,e[6]=g+p*u,e[10]=o*l}else if(t.order==="YXZ"){const h=l*c,p=l*f,g=u*c,_=u*f;e[0]=h+_*a,e[4]=g*a-p,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=p*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*c,p=l*f,g=u*c,_=u*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*c,e[9]=_-h*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*c,p=o*f,g=a*c,_=a*f;e[0]=l*c,e[4]=g*u-p,e[8]=h*u+_,e[1]=l*f,e[5]=_*u+h,e[9]=p*u-g,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,p=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=_-h*f,e[8]=g*f+p,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=p*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,p=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=h*f+_,e[5]=o*c,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*c,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(du,t,pu)}lookAt(t,e,i){const r=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),bn.crossVectors(i,Ie),bn.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),bn.crossVectors(i,Ie)),bn.normalize(),hr.crossVectors(Ie,bn),r[0]=bn.x,r[4]=hr.x,r[8]=Ie.x,r[1]=bn.y,r[5]=hr.y,r[9]=Ie.y,r[2]=bn.z,r[6]=hr.z,r[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],b=i[3],T=i[7],M=i[11],F=i[15],A=r[0],C=r[4],L=r[8],E=r[12],v=r[1],P=r[5],D=r[9],B=r[13],q=r[2],j=r[6],Z=r[10],et=r[14],Y=r[3],rt=r[7],ft=r[11],it=r[15];return s[0]=o*A+a*v+l*q+u*Y,s[4]=o*C+a*P+l*j+u*rt,s[8]=o*L+a*D+l*Z+u*ft,s[12]=o*E+a*B+l*et+u*it,s[1]=c*A+f*v+h*q+p*Y,s[5]=c*C+f*P+h*j+p*rt,s[9]=c*L+f*D+h*Z+p*ft,s[13]=c*E+f*B+h*et+p*it,s[2]=g*A+_*v+m*q+d*Y,s[6]=g*C+_*P+m*j+d*rt,s[10]=g*L+_*D+m*Z+d*ft,s[14]=g*E+_*B+m*et+d*it,s[3]=b*A+T*v+M*q+F*Y,s[7]=b*C+T*P+M*j+F*rt,s[11]=b*L+T*D+M*Z+F*ft,s[15]=b*E+T*B+M*et+F*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+e*l*p-e*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+e*u*f-e*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-e*l*f+e*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],b=f*m*u-_*h*u+_*l*p-a*m*p-f*l*d+a*h*d,T=g*h*u-c*m*u-g*l*p+o*m*p+c*l*d-o*h*d,M=c*_*u-g*f*u+g*a*p-o*_*p-c*a*d+o*f*d,F=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,A=e*b+i*T+r*M+s*F;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=b*C,t[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*C,t[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*C,t[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*C,t[4]=T*C,t[5]=(c*m*s-g*h*s+g*r*p-e*m*p-c*r*d+e*h*d)*C,t[6]=(g*l*s-o*m*s-g*r*u+e*m*u+o*r*d-e*l*d)*C,t[7]=(o*h*s-c*l*s+c*r*u-e*h*u-o*r*p+e*l*p)*C,t[8]=M*C,t[9]=(g*f*s-c*_*s-g*i*p+e*_*p+c*i*d-e*f*d)*C,t[10]=(o*_*s-g*a*s+g*i*u-e*_*u-o*i*d+e*a*d)*C,t[11]=(c*a*s-o*f*s-c*i*u+e*f*u+o*i*p-e*a*p)*C,t[12]=F*C,t[13]=(c*_*r-g*f*r+g*i*h-e*_*h-c*i*m+e*f*m)*C,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*C,t[15]=(o*f*r-c*a*r+c*i*l-e*f*l-o*i*h+e*a*h)*C,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,g=s*f,_=o*c,m=o*f,d=a*f,b=l*u,T=l*c,M=l*f,F=i.x,A=i.y,C=i.z;return r[0]=(1-(_+d))*F,r[1]=(p+M)*F,r[2]=(g-T)*F,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(h+d))*A,r[6]=(m+b)*A,r[7]=0,r[8]=(g+T)*C,r[9]=(m-b)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=oi.set(r[0],r[1],r[2]).length();const o=oi.set(r[4],r[5],r[6]).length(),a=oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],We.copy(this);const u=1/s,c=1/o,f=1/a;return We.elements[0]*=u,We.elements[1]*=u,We.elements[2]*=u,We.elements[4]*=c,We.elements[5]*=c,We.elements[6]*=c,We.elements[8]*=f,We.elements[9]*=f,We.elements[10]*=f,e.setFromRotationMatrix(We),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=fn){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let p,g;if(a===fn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===kr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=fn){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(o-s),h=(e+t)*u,p=(i+r)*c;let g,_;if(a===fn)g=(o+s)*f,_=-2*f;else if(a===kr)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const oi=new O,We=new jt,du=new O(0,0,0),pu=new O(1,1,1),bn=new O,hr=new O,Ie=new O,va=new jt,Ma=new _n;class Oe{constructor(t=0,e=0,i=0,r=Oe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return va.makeRotationFromQuaternion(t),this.setFromRotationMatrix(va,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oe.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mu=0;const Sa=new O,ai=new _n,ln=new jt,fr=new O,Oi=new O,gu=new O,_u=new _n,ya=new O(1,0,0),Ea=new O(0,1,0),ba=new O(0,0,1),Ta={type:"added"},xu={type:"removed"},li={type:"childadded",child:null},cs={type:"childremoved",child:null};class ge extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new O,e=new Oe,i=new _n,r=new O(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ht}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(ya,t)}rotateY(t){return this.rotateOnAxis(Ea,t)}rotateZ(t){return this.rotateOnAxis(ba,t)}translateOnAxis(t,e){return Sa.copy(t).applyQuaternion(this.quaternion),this.position.add(Sa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ya,t)}translateY(t){return this.translateOnAxis(Ea,t)}translateZ(t){return this.translateOnAxis(ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fr.copy(t):fr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Oi,fr,this.up):ln.lookAt(fr,Oi,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),ai.setFromRotationMatrix(ln),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ta),li.child=t,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xu),cs.child=t,this.dispatchEvent(cs),cs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ta),li.child=t,this.dispatchEvent(li),li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,_u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ge.DEFAULT_UP=new O(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new O,cn=new O,us=new O,un=new O,ci=new O,ui=new O,Aa=new O,hs=new O,fs=new O,ds=new O,ps=new ne,ms=new ne,gs=new ne;class qe{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Xe.subVectors(t,e),r.cross(Xe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Xe.subVectors(r,e),cn.subVectors(i,e),us.subVectors(t,e);const o=Xe.dot(Xe),a=Xe.dot(cn),l=Xe.dot(us),u=cn.dot(cn),c=cn.dot(us),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return ps.setScalar(0),ms.setScalar(0),gs.setScalar(0),ps.fromBufferAttribute(t,e),ms.fromBufferAttribute(t,i),gs.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ps,s.x),o.addScaledVector(ms,s.y),o.addScaledVector(gs,s.z),o}static isFrontFacing(t,e,i,r){return Xe.subVectors(i,e),cn.subVectors(t,e),Xe.cross(cn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Xe.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return qe.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;ci.subVectors(r,i),ui.subVectors(s,i),hs.subVectors(t,i);const l=ci.dot(hs),u=ui.dot(hs);if(l<=0&&u<=0)return e.copy(i);fs.subVectors(t,r);const c=ci.dot(fs),f=ui.dot(fs);if(c>=0&&f<=c)return e.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(ci,o);ds.subVectors(t,s);const p=ci.dot(ds),g=ui.dot(ds);if(g>=0&&p<=g)return e.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(i).addScaledVector(ui,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return Aa.subVectors(s,r),a=(f-c)/(f-c+(p-g)),e.copy(r).addScaledVector(Aa,a);const d=1/(m+_+h);return o=_*d,a=h*d,e.copy(i).addScaledVector(ci,o).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function _s(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Yt.workingColorSpace){if(t=nu(t,1),e=Pe(e,0,1),i=Pe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=_s(o,s,t+1/3),this.g=_s(o,s,t),this.b=_s(o,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=Te){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const i=Ol[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Yt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Pe(Me.r*255,0,255))*65536+Math.round(Pe(Me.g*255,0,255))*256+Math.round(Pe(Me.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Me.copy(this),e);const i=Me.r,r=Me.g,s=Me.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Te){Yt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,i=Me.g,r=Me.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(dr);const i=ts(Tn.h,dr.h,e),r=ts(Tn.s,dr.s,e),s=ts(Tn.l,dr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Ut;Ut.NAMES=Ol;let vu=0;class Jn extends Ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Qi(),this.name="",this.blending=xi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ns,this.blendDst=Fs,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ns&&(i.blendSrc=this.blendSrc),this.blendDst!==Fs&&(i.blendDst=this.blendDst),this.blendEquation!==qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ca&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dn extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new O,pr=new $t;class Ae{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ua,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),r=Ce(r,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ua&&(t.usage=this.usage),t}}class Bl extends Ae{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class zl extends Ae{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ce extends Ae{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Mu=0;const ze=new jt,xs=new ge,hi=new O,De=new Zn,Bi=new Zn,me=new O;class we extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Il(t)?zl:Bl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,i){return ze.makeTranslation(t,e,i),this.applyMatrix4(ze),this}scale(t,e,i){return ze.makeScale(t,e,i),this.applyMatrix4(ze),this}lookAt(t){return xs.lookAt(t),xs.updateMatrix(),this.applyMatrix4(xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];De.setFromBufferAttribute(s),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(De.min,Bi.min),De.expandByPoint(me),me.addVectors(De.max,Bi.max),De.expandByPoint(me)):(De.expandByPoint(Bi.min),De.expandByPoint(Bi.max))}De.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)me.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)me.fromBufferAttribute(a,u),l&&(hi.fromBufferAttribute(t,u),me.add(hi)),r=Math.max(r,i.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new O,l[L]=new O;const u=new O,c=new O,f=new O,h=new $t,p=new $t,g=new $t,_=new O,m=new O;function d(L,E,v){u.fromBufferAttribute(i,L),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,v),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,v),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),a[L].add(_),a[E].add(_),a[v].add(_),l[L].add(m),l[E].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,E=b.length;L<E;++L){const v=b[L],P=v.start,D=v.count;for(let B=P,q=P+D;B<q;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const T=new O,M=new O,F=new O,A=new O;function C(L){F.fromBufferAttribute(r,L),A.copy(F);const E=a[L];T.copy(E),T.sub(F.multiplyScalar(F.dot(E))).normalize(),M.crossVectors(A,E);const P=M.dot(l[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,P)}for(let L=0,E=b.length;L<E;++L){const v=b[L],P=v.start,D=v.count;for(let B=P,q=P+D;B<q;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,c=new O,f=new O;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new Ae(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=t(h,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wa=new jt,zn=new Nl,mr=new Pi,Ra=new O,gr=new O,_r=new O,xr=new O,vs=new O,vr=new O,Ca=new O,Mr=new O;class te extends ge{constructor(t=new we,e=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){vr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(vs.fromBufferAttribute(f,t),o?vr.addScaledVector(vs,c):vr.addScaledVector(vs.sub(e),c))}e.add(vr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(s),zn.copy(t.ray).recast(t.near),!(mr.containsPoint(zn.origin)===!1&&(zn.intersectSphere(mr,Ra)===null||zn.origin.distanceToSquared(Ra)>(t.far-t.near)**2))&&(wa.copy(s).invert(),zn.copy(t.ray).applyMatrix4(wa),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,F=T;M<F;M+=3){const A=a.getX(M),C=a.getX(M+1),L=a.getX(M+2);r=Sr(this,d,t,i,u,c,f,A,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);r=Sr(this,o,t,i,u,c,f,b,T,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,F=T;M<F;M+=3){const A=M,C=M+1,L=M+2;r=Sr(this,d,t,i,u,c,f,A,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=m,T=m+1,M=m+2;r=Sr(this,o,t,i,u,c,f,b,T,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Su(n,t,e,i,r,s,o,a){let l;if(t.side===ye?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===In,a),l===null)return null;Mr.copy(a),Mr.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Mr);return u<e.near||u>e.far?null:{distance:u,point:Mr.clone(),object:n}}function Sr(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,gr),n.getVertexPosition(l,_r),n.getVertexPosition(u,xr);const c=Su(n,t,e,i,gr,_r,xr,Ca);if(c){const f=new O;qe.getBarycoord(Ca,gr,_r,xr,f),r&&(c.uv=qe.getInterpolatedAttribute(r,a,l,u,f,new $t)),s&&(c.uv1=qe.getInterpolatedAttribute(s,a,l,u,f,new $t)),o&&(c.normal=qe.getInterpolatedAttribute(o,a,l,u,f,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new O,materialIndex:0};qe.getNormal(gr,_r,xr,h.normal),c.face=h,c.barycoord=f}return c}class xn extends we{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(f,2));function g(_,m,d,b,T,M,F,A,C,L,E){const v=M/C,P=F/L,D=M/2,B=F/2,q=A/2,j=C+1,Z=L+1;let et=0,Y=0;const rt=new O;for(let ft=0;ft<Z;ft++){const it=ft*P-B;for(let S=0;S<j;S++){const I=S*v-D;rt[_]=I*b,rt[m]=it*T,rt[d]=q,u.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[d]=A>0?1:-1,c.push(rt.x,rt.y,rt.z),f.push(S/C),f.push(1-ft/L),et+=1}}for(let ft=0;ft<L;ft++)for(let it=0;it<C;it++){const S=h+it+j*ft,I=h+it+j*(ft+1),R=h+(it+1)+j*(ft+1),U=h+(it+1)+j*ft;l.push(S,I,U),l.push(I,R,U),Y+=6}a.addGroup(p,Y,E),p+=Y,h+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function be(n){const t={};for(let e=0;e<n.length;e++){const i=wi(n[e]);for(const r in i)t[r]=i[r]}return t}function yu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kl(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Eu={clone:wi,merge:be};var bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Hl extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new O,Pa=new $t,La=new $t;class Ue extends Hl{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,Pa,La),e.subVectors(La,Pa)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,di=1;class Au extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ue(fi,di,t,e);r.layers=this.layers,this.add(r);const s=new Ue(fi,di,t,e);s.layers=this.layers,this.add(s);const o=new Ue(fi,di,t,e);o.layers=this.layers,this.add(o);const a=new Ue(fi,di,t,e);a.layers=this.layers,this.add(a);const l=new Ue(fi,di,t,e);l.layers=this.layers,this.add(l);const u=new Ue(fi,di,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gl extends Ee{constructor(t,e,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wu extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Gl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xn(5,5,5),s=new je({name:"CubemapFromEquirect",uniforms:wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ye,blending:Pn});s.uniforms.tEquirect.value=e;const o=new te(r,s),a=e.minFilter;return e.minFilter===Cn&&(e.minFilter=Qe),new Au(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Ms=new O,Ru=new O,Cu=new Ht;class Wn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ms.subVectors(i,e).cross(Ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ms),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Cu.getNormalMatrix(t),r=this.coplanarPoint(Ms).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Pi,yr=new O;class zo{constructor(t=new Wn,e=new Wn,i=new Wn,r=new Wn,s=new Wn,o=new Wn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],b=r[13],T=r[14],M=r[15];if(i[0].setComponents(l-s,h-u,m-p,M-d).normalize(),i[1].setComponents(l+s,h+u,m+p,M+d).normalize(),i[2].setComponents(l+o,h+c,m+g,M+b).normalize(),i[3].setComponents(l-o,h-c,m-g,M-b).normalize(),i[4].setComponents(l-a,h-f,m-_,M-T).normalize(),e===fn)i[5].setComponents(l+a,h+f,m+_,M+T).normalize();else if(e===kr)i[5].setComponents(a,f,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(yr.x=r.normal.x>0?t.max.x:t.min.x,yr.y=r.normal.y>0?t.max.y:t.min.y,yr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Pu(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class pn extends we{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=t/a,h=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const b=d*h-o;for(let T=0;T<u;T++){const M=T*f-s;g.push(M,-b,0),_.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const T=b+u*d,M=b+u*(d+1),F=b+1+u*(d+1),A=b+1+u*d;p.push(T,M,A),p.push(M,F,A)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
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
#endif`,Du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ou=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
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
#endif`,ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,th=`#define PI 3.141592653589793
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
} // validated`,eh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nh=`vec3 transformedNormal = objectNormal;
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
#endif`,ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",lh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ch=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_h=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xh=`#ifdef USE_GRADIENTMAP
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
}`,vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yh=`uniform bool receiveShadow;
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
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,bh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ah=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rh=`PhysicalMaterial material;
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
#endif`,Ch=`struct PhysicalMaterial {
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
}`,Ph=`
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
#endif`,Lh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kh=`#if defined( USE_POINTS_UV )
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
#endif`,Hh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qh=`#ifdef USE_MORPHTARGETS
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
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$h=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qh=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gf=`float getShadowMask() {
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
}`,_f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,zf=`#define DISTANCE
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
}`,kf=`#define DISTANCE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
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
}`,jf=`#define MATCAP
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
}`,Kf=`#define MATCAP
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
}`,Zf=`#define NORMAL
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
}`,Jf=`#define NORMAL
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
}`,Qf=`#define PHONG
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
}`,td=`#define PHONG
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
}`,ed=`#define STANDARD
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
}`,nd=`#define STANDARD
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
}`,id=`#define TOON
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
}`,rd=`#define TOON
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
}`,sd=`uniform float size;
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
}`,od=`uniform vec3 diffuse;
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
}`,ad=`#include <common>
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
}`,ld=`uniform vec3 color;
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
}`,cd=`uniform float rotation;
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
}`,ud=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Lu,alphahash_pars_fragment:Iu,alphamap_fragment:Du,alphamap_pars_fragment:Uu,alphatest_fragment:Nu,alphatest_pars_fragment:Fu,aomap_fragment:Ou,aomap_pars_fragment:Bu,batching_pars_vertex:zu,batching_vertex:ku,begin_vertex:Hu,beginnormal_vertex:Gu,bsdfs:Vu,iridescence_fragment:Wu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:Yu,clipping_planes_pars_vertex:$u,clipping_planes_vertex:ju,color_fragment:Ku,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:Qu,common:th,cube_uv_reflection_fragment:eh,defaultnormal_vertex:nh,displacementmap_pars_vertex:ih,displacementmap_vertex:rh,emissivemap_fragment:sh,emissivemap_pars_fragment:oh,colorspace_fragment:ah,colorspace_pars_fragment:lh,envmap_fragment:ch,envmap_common_pars_fragment:uh,envmap_pars_fragment:hh,envmap_pars_vertex:fh,envmap_physical_pars_fragment:Eh,envmap_vertex:dh,fog_vertex:ph,fog_pars_vertex:mh,fog_fragment:gh,fog_pars_fragment:_h,gradientmap_pars_fragment:xh,lightmap_pars_fragment:vh,lights_lambert_fragment:Mh,lights_lambert_pars_fragment:Sh,lights_pars_begin:yh,lights_toon_fragment:bh,lights_toon_pars_fragment:Th,lights_phong_fragment:Ah,lights_phong_pars_fragment:wh,lights_physical_fragment:Rh,lights_physical_pars_fragment:Ch,lights_fragment_begin:Ph,lights_fragment_maps:Lh,lights_fragment_end:Ih,logdepthbuf_fragment:Dh,logdepthbuf_pars_fragment:Uh,logdepthbuf_pars_vertex:Nh,logdepthbuf_vertex:Fh,map_fragment:Oh,map_pars_fragment:Bh,map_particle_fragment:zh,map_particle_pars_fragment:kh,metalnessmap_fragment:Hh,metalnessmap_pars_fragment:Gh,morphinstance_vertex:Vh,morphcolor_vertex:Wh,morphnormal_vertex:Xh,morphtarget_pars_vertex:qh,morphtarget_vertex:Yh,normal_fragment_begin:$h,normal_fragment_maps:jh,normal_pars_fragment:Kh,normal_pars_vertex:Zh,normal_vertex:Jh,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:ef,clearcoat_pars_fragment:nf,iridescence_pars_fragment:rf,opaque_fragment:sf,packing:of,premultiplied_alpha_fragment:af,project_vertex:lf,dithering_fragment:cf,dithering_pars_fragment:uf,roughnessmap_fragment:hf,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:df,shadowmap_pars_vertex:pf,shadowmap_vertex:mf,shadowmask_pars_fragment:gf,skinbase_vertex:_f,skinning_pars_vertex:xf,skinning_vertex:vf,skinnormal_vertex:Mf,specularmap_fragment:Sf,specularmap_pars_fragment:yf,tonemapping_fragment:Ef,tonemapping_pars_fragment:bf,transmission_fragment:Tf,transmission_pars_fragment:Af,uv_pars_fragment:wf,uv_pars_vertex:Rf,uv_vertex:Cf,worldpos_vertex:Pf,background_vert:Lf,background_frag:If,backgroundCube_vert:Df,backgroundCube_frag:Uf,cube_vert:Nf,cube_frag:Ff,depth_vert:Of,depth_frag:Bf,distanceRGBA_vert:zf,distanceRGBA_frag:kf,equirect_vert:Hf,equirect_frag:Gf,linedashed_vert:Vf,linedashed_frag:Wf,meshbasic_vert:Xf,meshbasic_frag:qf,meshlambert_vert:Yf,meshlambert_frag:$f,meshmatcap_vert:jf,meshmatcap_frag:Kf,meshnormal_vert:Zf,meshnormal_frag:Jf,meshphong_vert:Qf,meshphong_frag:td,meshphysical_vert:ed,meshphysical_frag:nd,meshtoon_vert:id,meshtoon_frag:rd,points_vert:sd,points_frag:od,shadow_vert:ad,shadow_frag:ld,sprite_vert:cd,sprite_frag:ud},ht={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Je={basic:{uniforms:be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:be([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:be([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:be([ht.points,ht.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:be([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:be([ht.common,ht.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:be([ht.sprite,ht.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:be([ht.common,ht.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:be([ht.lights,ht.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Je.physical={uniforms:be([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Er={r:0,b:0,g:0},Hn=new Oe,hd=new jt;function fd(n,t,e,i,r,s,o){const a=new Ut(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function g(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?e:t).get(T)),T}function _(b){let T=!1;const M=g(b);M===null?d(a,l):M&&M.isColor&&(d(M,1),T=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,T){const M=g(T);M&&(M.isCubeTexture||M.mapping===Xr)?(c===void 0&&(c=new te(new xn(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:wi(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:ye,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Hn.copy(T.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hd.makeRotationFromEuler(Hn)),c.material.toneMapped=Yt.getTransfer(M.colorSpace)!==ee,(f!==M||h!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new te(new pn(2,2),new je({name:"BackgroundMaterial",uniforms:wi(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=Yt.getTransfer(M.colorSpace)!==ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function d(b,T){b.getRGB(Er,kl(n)),i.buffers.color.setClear(Er.r,Er.g,Er.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),l=T,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:_,addToRenderList:m}}function dd(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(v,P,D,B,q){let j=!1;const Z=f(B,D,P);s!==Z&&(s=Z,u(s.object)),j=p(v,B,D,q),j&&g(v,B,D,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(v,P,D,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function u(v){return n.bindVertexArray(v)}function c(v){return n.deleteVertexArray(v)}function f(v,P,D){const B=D.wireframe===!0;let q=i[v.id];q===void 0&&(q={},i[v.id]=q);let j=q[P.id];j===void 0&&(j={},q[P.id]=j);let Z=j[B];return Z===void 0&&(Z=h(l()),j[B]=Z),Z}function h(v){const P=[],D=[],B=[];for(let q=0;q<e;q++)P[q]=0,D[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,P,D,B){const q=s.attributes,j=P.attributes;let Z=0;const et=D.getAttributes();for(const Y in et)if(et[Y].location>=0){const ft=q[Y];let it=j[Y];if(it===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),ft===void 0||ft.attribute!==it||it&&ft.data!==it.data)return!0;Z++}return s.attributesNum!==Z||s.index!==B}function g(v,P,D,B){const q={},j=P.attributes;let Z=0;const et=D.getAttributes();for(const Y in et)if(et[Y].location>=0){let ft=j[Y];ft===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor));const it={};it.attribute=ft,ft&&ft.data&&(it.data=ft.data),q[Y]=it,Z++}s.attributes=q,s.attributesNum=Z,s.index=B}function _(){const v=s.newAttributes;for(let P=0,D=v.length;P<D;P++)v[P]=0}function m(v){d(v,0)}function d(v,P){const D=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;D[v]=1,B[v]===0&&(n.enableVertexAttribArray(v),B[v]=1),q[v]!==P&&(n.vertexAttribDivisor(v,P),q[v]=P)}function b(){const v=s.newAttributes,P=s.enabledAttributes;for(let D=0,B=P.length;D<B;D++)P[D]!==v[D]&&(n.disableVertexAttribArray(D),P[D]=0)}function T(v,P,D,B,q,j,Z){Z===!0?n.vertexAttribIPointer(v,P,D,q,j):n.vertexAttribPointer(v,P,D,B,q,j)}function M(v,P,D,B){_();const q=B.attributes,j=D.getAttributes(),Z=P.defaultAttributeValues;for(const et in j){const Y=j[et];if(Y.location>=0){let rt=q[et];if(rt===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const ft=rt.normalized,it=rt.itemSize,S=t.get(rt);if(S===void 0)continue;const I=S.buffer,R=S.type,U=S.bytesPerElement,G=R===n.INT||R===n.UNSIGNED_INT||rt.gpuType===Lo;if(rt.isInterleavedBufferAttribute){const K=rt.data,at=K.stride,lt=rt.offset;if(K.isInstancedInterleavedBuffer){for(let ut=0;ut<Y.locationSize;ut++)d(Y.location+ut,K.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ut=0;ut<Y.locationSize;ut++)m(Y.location+ut);n.bindBuffer(n.ARRAY_BUFFER,I);for(let ut=0;ut<Y.locationSize;ut++)T(Y.location+ut,it/Y.locationSize,R,ft,at*U,(lt+it/Y.locationSize*ut)*U,G)}else{if(rt.isInstancedBufferAttribute){for(let K=0;K<Y.locationSize;K++)d(Y.location+K,rt.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let K=0;K<Y.locationSize;K++)m(Y.location+K);n.bindBuffer(n.ARRAY_BUFFER,I);for(let K=0;K<Y.locationSize;K++)T(Y.location+K,it/Y.locationSize,R,ft,it*U,it/Y.locationSize*K*U,G)}}else if(Z!==void 0){const ft=Z[et];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(Y.location,ft);break;case 3:n.vertexAttrib3fv(Y.location,ft);break;case 4:n.vertexAttrib4fv(Y.location,ft);break;default:n.vertexAttrib1fv(Y.location,ft)}}}}b()}function F(){L();for(const v in i){const P=i[v];for(const D in P){const B=P[D];for(const q in B)c(B[q].object),delete B[q];delete P[D]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;const P=i[v.id];for(const D in P){const B=P[D];for(const q in B)c(B[q].object),delete B[q];delete P[D]}delete i[v.id]}function C(v){for(const P in i){const D=i[P];if(D[v.id]===void 0)continue;const B=D[v.id];for(const q in B)c(B[q].object),delete B[q];delete D[v.id]}}function L(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function pd(n,t,e){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function a(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];e.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*h[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function md(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Ye&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==tn&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:F,maxSamples:A}}function gd(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Wn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const b=s?0:i,T=b*4;let M=d.clippingState||null;l.value=M,M=c(g,h,T,p);for(let F=0;F!==T;++F)M[F]=e[F];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,M=p;T!==_;++T,M+=4)o.copy(f[T]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function _d(n){let t=new WeakMap;function e(o,a){return a===Ws?o.mapping=Ei:a===Xs&&(o.mapping=bi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ws||a===Xs)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new wu(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Wl extends Hl{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _i=4,Ia=[.125,.215,.35,.446,.526,.582],Yn=20,Ss=new Wl,Da=new Ut;let ys=null,Es=0,bs=0,Ts=!1;const Xn=(1+Math.sqrt(5))/2,pi=1/Xn,Ua=[new O(-Xn,pi,0),new O(Xn,pi,0),new O(-pi,0,Xn),new O(pi,0,Xn),new O(0,Xn,-pi),new O(0,Xn,pi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class So{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){ys=this._renderer.getRenderTarget(),Es=this._renderer.getActiveCubeFace(),bs=this._renderer.getActiveMipmapLevel(),Ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ys,Es,bs),this._renderer.xr.enabled=Ts,t.scissorTest=!1,br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ys=this._renderer.getRenderTarget(),Es=this._renderer.getActiveCubeFace(),bs=this._renderer.getActiveMipmapLevel(),Ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Ji,format:Ye,colorSpace:Ri,depthBuffer:!1},r=Na(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xd(s)),this._blurMaterial=vd(s,t,e)}return r}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Ss)}_sceneToCubeUV(t,e,i,r){const a=new Ue(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Da),c.toneMapping=Ln,c.autoClear=!1;const p=new Dn({name:"PMREM.Background",side:ye,depthWrite:!1,depthTest:!1}),g=new te(new xn,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Da),_=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const T=this._cubeSize;br(r,b*T,d>2?T:0,T,T),c.setRenderTarget(r),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ei||t.mapping===bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;br(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ss)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ua[(r-s-1)%Ua.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new te(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Yn;m>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const d=[];let b=0;for(let C=0;C<Yn;++C){const L=C/_,E=Math.exp(-L*L/2);d.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/b;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const M=this._sizeLods[r],F=3*M*(r>T-_i?r-T+_i:0),A=4*(this._cubeSize-M);br(e,F,A,3*M,2*M),l.setRenderTarget(e),l.render(f,Ss)}}function xd(n){const t=[],e=[],i=[];let r=n;const s=n-_i+1+Ia.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-_i?l=Ia[o-n+_i-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,d=1,b=new Float32Array(_*g*p),T=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,L=A>2?0:-1,E=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];b.set(E,_*g*A),T.set(h,m*g*A);const v=[A,A,A,A,A,A];M.set(v,d*g*A)}const F=new we;F.setAttribute("position",new Ae(b,_)),F.setAttribute("uv",new Ae(T,m)),F.setAttribute("faceIndex",new Ae(M,d)),t.push(F),r>_i&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Na(n,t,e){const i=new Kn(n,t,e);return i.texture.mapping=Xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function br(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function vd(n,t,e){const i=new Float32Array(Yn),r=new O(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Fa(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Oa(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ko(){return`

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
	`}function Md(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ws||l===Xs,c=l===Ei||l===bi;if(u||c){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new So(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(e===null&&(e=new So(n)),f=u?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Sd(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Wi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yd(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let T=0,M=b.length;T<M;T+=3){const F=b[T+0],A=b[T+1],C=b[T+2];h.push(F,A,A,C,C,F)}}else if(g!==void 0){const b=g.array;_=g.version;for(let T=0,M=b.length/3-1;T<M;T+=3){const F=T+0,A=T+1,C=T+2;h.push(F,A,A,C,C,F)}}else return;const m=new(Il(h)?zl:Bl)(h,1);m.version=_;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Ed(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),e.update(p,i,1)}function u(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),e.update(p,i,g))}function c(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*_[b];e.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function bd(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Td(n,t,e){const i=new WeakMap,r=new ne;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let v=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var p=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let F=a.attributes.position.count*M,A=1;F>t.maxTextureSize&&(A=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const C=new Float32Array(F*A*4*f),L=new Ul(C,F,A,f);L.type=tn,L.needsUpdate=!0;const E=M*4;for(let P=0;P<f;P++){const D=d[P],B=b[P],q=T[P],j=F*A*4*P;for(let Z=0;Z<D.count;Z++){const et=Z*E;g===!0&&(r.fromBufferAttribute(D,Z),C[j+et+0]=r.x,C[j+et+1]=r.y,C[j+et+2]=r.z,C[j+et+3]=0),_===!0&&(r.fromBufferAttribute(B,Z),C[j+et+4]=r.x,C[j+et+5]=r.y,C[j+et+6]=r.z,C[j+et+7]=0),m===!0&&(r.fromBufferAttribute(q,Z),C[j+et+8]=r.x,C[j+et+9]=r.y,C[j+et+10]=r.z,C[j+et+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new $t(F,A)},i.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ad(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class Xl extends Ee{constructor(t,e,i,r,s,o,a,l,u,c=vi){if(c!==vi&&c!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===vi&&(i=jn),i===void 0&&c===Ai&&(i=Ti),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ql=new Ee,Ba=new Xl(1,1),Yl=new Ul,$l=new hu,jl=new Gl,za=[],ka=[],Ha=new Float32Array(16),Ga=new Float32Array(9),Va=new Float32Array(4);function Li(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=za[r];if(s===void 0&&(s=new Float32Array(r),za[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function de(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Yr(n,t){let e=ka[t];e===void 0&&(e=new Int32Array(t),ka[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function wd(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Rd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;n.uniform2fv(this.addr,t),pe(e,t)}}function Cd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;n.uniform3fv(this.addr,t),pe(e,t)}}function Pd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;n.uniform4fv(this.addr,t),pe(e,t)}}function Ld(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(de(e,i))return;Va.set(i),n.uniformMatrix2fv(this.addr,!1,Va),pe(e,i)}}function Id(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(de(e,i))return;Ga.set(i),n.uniformMatrix3fv(this.addr,!1,Ga),pe(e,i)}}function Dd(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(de(e,i))return;Ha.set(i),n.uniformMatrix4fv(this.addr,!1,Ha),pe(e,i)}}function Ud(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Nd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;n.uniform2iv(this.addr,t),pe(e,t)}}function Fd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;n.uniform3iv(this.addr,t),pe(e,t)}}function Od(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;n.uniform4iv(this.addr,t),pe(e,t)}}function Bd(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;n.uniform2uiv(this.addr,t),pe(e,t)}}function kd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;n.uniform3uiv(this.addr,t),pe(e,t)}}function Hd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;n.uniform4uiv(this.addr,t),pe(e,t)}}function Gd(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ba.compareFunction=Ll,s=Ba):s=ql,e.setTexture2D(t||s,r)}function Vd(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||$l,r)}function Wd(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||jl,r)}function Xd(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Yl,r)}function qd(n){switch(n){case 5126:return wd;case 35664:return Rd;case 35665:return Cd;case 35666:return Pd;case 35674:return Ld;case 35675:return Id;case 35676:return Dd;case 5124:case 35670:return Ud;case 35667:case 35671:return Nd;case 35668:case 35672:return Fd;case 35669:case 35673:return Od;case 5125:return Bd;case 36294:return zd;case 36295:return kd;case 36296:return Hd;case 35678:case 36198:case 36298:case 36306:case 35682:return Gd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Wd;case 36289:case 36303:case 36311:case 36292:return Xd}}function Yd(n,t){n.uniform1fv(this.addr,t)}function $d(n,t){const e=Li(t,this.size,2);n.uniform2fv(this.addr,e)}function jd(n,t){const e=Li(t,this.size,3);n.uniform3fv(this.addr,e)}function Kd(n,t){const e=Li(t,this.size,4);n.uniform4fv(this.addr,e)}function Zd(n,t){const e=Li(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Jd(n,t){const e=Li(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Qd(n,t){const e=Li(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function tp(n,t){n.uniform1iv(this.addr,t)}function ep(n,t){n.uniform2iv(this.addr,t)}function np(n,t){n.uniform3iv(this.addr,t)}function ip(n,t){n.uniform4iv(this.addr,t)}function rp(n,t){n.uniform1uiv(this.addr,t)}function sp(n,t){n.uniform2uiv(this.addr,t)}function op(n,t){n.uniform3uiv(this.addr,t)}function ap(n,t){n.uniform4uiv(this.addr,t)}function lp(n,t,e){const i=this.cache,r=t.length,s=Yr(e,r);de(i,s)||(n.uniform1iv(this.addr,s),pe(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ql,s[o])}function cp(n,t,e){const i=this.cache,r=t.length,s=Yr(e,r);de(i,s)||(n.uniform1iv(this.addr,s),pe(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||$l,s[o])}function up(n,t,e){const i=this.cache,r=t.length,s=Yr(e,r);de(i,s)||(n.uniform1iv(this.addr,s),pe(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||jl,s[o])}function hp(n,t,e){const i=this.cache,r=t.length,s=Yr(e,r);de(i,s)||(n.uniform1iv(this.addr,s),pe(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Yl,s[o])}function fp(n){switch(n){case 5126:return Yd;case 35664:return $d;case 35665:return jd;case 35666:return Kd;case 35674:return Zd;case 35675:return Jd;case 35676:return Qd;case 5124:case 35670:return tp;case 35667:case 35671:return ep;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return rp;case 36294:return sp;case 36295:return op;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return hp}}class dp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qd(e.type)}}class pp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fp(e.type)}}class mp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const As=/(\w+)(\])?(\[|\.)?/g;function Wa(n,t){n.seq.push(t),n.map[t.id]=t}function gp(n,t,e){const i=n.name,r=i.length;for(As.lastIndex=0;;){const s=As.exec(i),o=As.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Wa(e,u===void 0?new dp(a,n,t):new pp(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new mp(a),Wa(e,f)),e=f}}}class Fr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);gp(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Xa(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const _p=37297;let xp=0;function vp(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const qa=new Ht;function Mp(n){Yt._getMatrix(qa,Yt.workingColorSpace,n);const t=`mat3( ${qa.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case qr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ya(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+vp(n.getShaderSource(t),o)}else return r}function Sp(n,t){const e=Mp(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yp(n,t){let e;switch(t){case zc:e="Linear";break;case kc:e="Reinhard";break;case Hc:e="Cineon";break;case Ml:e="ACESFilmic";break;case Vc:e="AgX";break;case Wc:e="Neutral";break;case Gc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Tr=new O;function Ep(){Yt.getLuminanceCoefficients(Tr);const n=Tr.x.toFixed(4),t=Tr.y.toFixed(4),e=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function Tp(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ap(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Xi(n){return n!==""}function $a(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ja(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(n){return n.replace(wp,Cp)}const Rp=new Map;function Cp(n,t){let e=Vt[t];if(e===void 0){const i=Rp.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yo(e)}const Pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(n){return n.replace(Pp,Lp)}function Lp(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Za(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Ip(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Co?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dp(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case bi:t="ENVMAP_TYPE_CUBE";break;case Xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Up(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Np(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Po:t="ENVMAP_BLENDING_MULTIPLY";break;case Oc:t="ENVMAP_BLENDING_MIX";break;case Bc:t="ENVMAP_BLENDING_ADD";break}return t}function Fp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Op(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ip(e),u=Dp(e),c=Up(e),f=Np(e),h=Fp(e),p=bp(e),g=Tp(s),_=r.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xi).join(`
`),d.length>0&&(d+=`
`)):(m=[Za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),d=[Za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?yp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Sp("linearToOutputTexel",e.outputColorSpace),Ep(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xi).join(`
`)),o=yo(o),o=$a(o,e),o=ja(o,e),a=yo(a),a=$a(a,e),a=ja(a,e),o=Ka(o),a=Ka(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=b+m+o,M=b+d+a,F=Xa(r,r.VERTEX_SHADER,T),A=Xa(r,r.FRAGMENT_SHADER,M);r.attachShader(_,F),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(P){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(F).trim(),q=r.getShaderInfoLog(A).trim();let j=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,F,A);else{const et=Ya(r,F,"vertex"),Y=Ya(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+et+`
`+Y)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(B===""||q==="")&&(Z=!1);Z&&(P.diagnostics={runnable:j,programLog:D,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(F),r.deleteShader(A),L=new Fr(r,_),E=Ap(r,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,_p)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=A,this}let Bp=0;class zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new kp(t),e.set(t,i)),i}}class kp{constructor(t){this.id=Bp++,this.code=t,this.usedTimes=0}}function Hp(n,t,e,i,r,s,o){const a=new Fl,l=new zp,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,v,P,D,B){const q=D.fog,j=B.geometry,Z=E.isMeshStandardMaterial?D.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),Y=et&&et.mapping===Xr?et.image.height:null,rt=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ft=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,it=ft!==void 0?ft.length:0;let S=0;j.morphAttributes.position!==void 0&&(S=1),j.morphAttributes.normal!==void 0&&(S=2),j.morphAttributes.color!==void 0&&(S=3);let I,R,U,G;if(rt){const Qt=Je[rt];I=Qt.vertexShader,R=Qt.fragmentShader}else I=E.vertexShader,R=E.fragmentShader,l.update(E),U=l.getVertexShaderID(E),G=l.getFragmentShaderID(E);const K=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),lt=B.isInstancedMesh===!0,ut=B.isBatchedMesh===!0,Lt=!!E.map,Nt=!!E.matcap,Ct=!!et,N=!!E.aoMap,Wt=!!E.lightMap,Pt=!!E.bumpMap,It=!!E.normalMap,xt=!!E.displacementMap,Ft=!!E.emissiveMap,Et=!!E.metalnessMap,w=!!E.roughnessMap,x=E.anisotropy>0,V=E.clearcoat>0,Q=E.dispersion>0,nt=E.iridescence>0,J=E.sheen>0,wt=E.transmission>0,pt=x&&!!E.anisotropyMap,Mt=V&&!!E.clearcoatMap,qt=V&&!!E.clearcoatNormalMap,st=V&&!!E.clearcoatRoughnessMap,St=nt&&!!E.iridescenceMap,Dt=nt&&!!E.iridescenceThicknessMap,Ot=J&&!!E.sheenColorMap,yt=J&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,Gt=!!E.specularColorMap,re=!!E.specularIntensityMap,z=wt&&!!E.transmissionMap,dt=wt&&!!E.thicknessMap,$=!!E.gradientMap,tt=!!E.alphaMap,_t=E.alphaTest>0,mt=!!E.alphaHash,zt=!!E.extensions;let ue=Ln;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ue=n.toneMapping);const xe={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:I,fragmentShader:R,defines:E.defines,customVertexShaderID:U,customFragmentShaderID:G,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ut,batchingColor:ut&&B._colorsTexture!==null,instancing:lt,instancingColor:lt&&B.instanceColor!==null,instancingMorph:lt&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ri,alphaToCoverage:!!E.alphaToCoverage,map:Lt,matcap:Nt,envMap:Ct,envMapMode:Ct&&et.mapping,envMapCubeUVHeight:Y,aoMap:N,lightMap:Wt,bumpMap:Pt,normalMap:It,displacementMap:h&&xt,emissiveMap:Ft,normalMapObjectSpace:It&&E.normalMapType===$c,normalMapTangentSpace:It&&E.normalMapType===Bo,metalnessMap:Et,roughnessMap:w,anisotropy:x,anisotropyMap:pt,clearcoat:V,clearcoatMap:Mt,clearcoatNormalMap:qt,clearcoatRoughnessMap:st,dispersion:Q,iridescence:nt,iridescenceMap:St,iridescenceThicknessMap:Dt,sheen:J,sheenColorMap:Ot,sheenRoughnessMap:yt,specularMap:Xt,specularColorMap:Gt,specularIntensityMap:re,transmission:wt,transmissionMap:z,thicknessMap:dt,gradientMap:$,opaque:E.transparent===!1&&E.blending===xi&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:mt,combine:E.combine,mapUv:Lt&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:Wt&&_(E.lightMap.channel),bumpMapUv:Pt&&_(E.bumpMap.channel),normalMapUv:It&&_(E.normalMap.channel),displacementMapUv:xt&&_(E.displacementMap.channel),emissiveMapUv:Ft&&_(E.emissiveMap.channel),metalnessMapUv:Et&&_(E.metalnessMap.channel),roughnessMapUv:w&&_(E.roughnessMap.channel),anisotropyMapUv:pt&&_(E.anisotropyMap.channel),clearcoatMapUv:Mt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(E.sheenRoughnessMap.channel),specularMapUv:Xt&&_(E.specularMap.channel),specularColorMapUv:Gt&&_(E.specularColorMap.channel),specularIntensityMapUv:re&&_(E.specularIntensityMap.channel),transmissionMapUv:z&&_(E.transmissionMap.channel),thicknessMapUv:dt&&_(E.thicknessMap.channel),alphaMapUv:tt&&_(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(It||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(Lt||tt),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:at,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:S,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:Lt&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===ee,decodeVideoTextureEmissive:Ft&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ne,flipSided:E.side===ye,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:zt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&E.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=u.has(1),xe.vertexUv2s=u.has(2),xe.vertexUv3s=u.has(3),u.clear(),xe}function d(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)v.push(P),v.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(b(v,E),T(v,E),v.push(n.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function b(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function T(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const v=g[E.type];let P;if(v){const D=Je[v];P=Eu.clone(D.uniforms)}else P=E.uniforms;return P}function F(E,v){let P;for(let D=0,B=c.length;D<B;D++){const q=c[D];if(q.cacheKey===v){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Op(n,v,E,s),c.push(P)),P}function A(E){if(--E.usedTimes===0){const v=c.indexOf(E);c[v]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:F,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:L}}function Gp(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Vp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ja(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qa(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),t++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function u(f,h){e.length>1&&e.sort(f||Vp),i.length>1&&i.sort(h||Ja),r.length>1&&r.sort(h||Ja)}function c(){for(let f=t,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Wp(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qa,n.set(i,[o])):r>=s.length?(o=new Qa,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Xp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ut};break;case"SpotLight":e={position:new O,direction:new O,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function qp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Yp=0;function $p(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function jp(n){const t=new Xp,e=qp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new jt,o=new jt;function a(u){let c=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,b=0,T=0,M=0,F=0,A=0,C=0;u.sort($p);for(let E=0,v=u.length;E<v;E++){const P=u[E],D=P.color,B=P.intensity,q=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=D.r*B,f+=D.g*B,h+=D.b*B;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],B);C++}else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const et=P.shadow,Y=e.get(P);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=Z,p++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(D).multiplyScalar(B),Z.distance=q,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[_]=Z;const et=P.shadow;if(P.map&&(i.spotLightMap[F]=P.map,F++,et.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=et.matrix,P.castShadow){const Y=e.get(P);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=j,M++}_++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy(D).multiplyScalar(B),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Z,m++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const et=P.shadow,Y=e.get(P);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,Y.shadowCameraNear=et.camera.near,Y.shadowCameraFar=et.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=P.shadow.matrix,T++}i.point[g]=Z,g++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(B),Z.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[d]=Z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==M||L.numSpotMaps!==F||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+F-A,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=M,L.numSpotMaps=F,L.numLightProbes=C,i.version=Yp++)}function l(u,c){let f=0,h=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,b=u.length;d<b;d++){const T=u[d];if(T.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(T.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function tl(n){const t=new jp(n),e=[],i=[];function r(c){u.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Kp(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new tl(n),t.set(r,[a])):s>=o.length?(a=new tl(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Zp extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jp extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
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
}`;function em(n,t,e){let i=new zo;const r=new $t,s=new $t,o=new ne,a=new Zp({depthPacking:Yc}),l=new Jp,u={},c=e.maxTextureSize,f={[In]:ye,[ye]:In,[Ne]:Ne},h=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Qp,fragmentShader:tm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let d=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Pn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=d!==hn&&this.type===hn,q=d===hn&&this.type!==hn;for(let j=0,Z=A.length;j<Z;j++){const et=A[j],Y=et.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const rt=Y.getFrameExtents();if(r.multiply(rt),s.copy(Y.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/rt.x),r.x=s.x*rt.x,Y.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/rt.y),r.y=s.y*rt.y,Y.mapSize.y=s.y)),Y.map===null||B===!0||q===!0){const it=this.type!==hn?{minFilter:Fe,magFilter:Fe}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Kn(r.x,r.y,it),Y.map.texture.name=et.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const ft=Y.getViewportCount();for(let it=0;it<ft;it++){const S=Y.getViewport(it);o.set(s.x*S.x,s.y*S.y,s.x*S.z,s.y*S.w),D.viewport(o),Y.updateMatrices(et,it),i=Y.getFrustum(),M(C,L,Y.camera,et,this.type)}Y.isPointLightShadow!==!0&&this.type===hn&&b(Y,L),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,v,P)};function b(A,C){const L=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kn(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,L,h,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,L,p,_,null)}function T(A,C,L,E){let v=null;const P=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=v.uuid,B=C.uuid;let q=u[D];q===void 0&&(q={},u[D]=q);let j=q[B];j===void 0&&(j=v.clone(),q[B]=j,C.addEventListener("dispose",F)),v=j}if(v.visible=C.visible,v.wireframe=C.wireframe,E===hn?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:f[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=n.properties.get(v);D.light=L}return v}function M(A,C,L,E,v){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===hn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=t.update(A),q=A.material;if(Array.isArray(q)){const j=B.groups;for(let Z=0,et=j.length;Z<et;Z++){const Y=j[Z],rt=q[Y.materialIndex];if(rt&&rt.visible){const ft=T(A,rt,E,v);A.onBeforeShadow(n,A,C,L,B,ft,Y),n.renderBufferDirect(L,null,B,ft,A,Y),A.onAfterShadow(n,A,C,L,B,ft,Y)}}}else if(q.visible){const j=T(A,q,E,v);A.onBeforeShadow(n,A,C,L,B,j,null),n.renderBufferDirect(L,null,B,j,A,null),A.onAfterShadow(n,A,C,L,B,j,null)}}const D=A.children;for(let B=0,q=D.length;B<q;B++)M(D[B],C,L,E,v)}function F(A){A.target.removeEventListener("dispose",F);for(const L in u){const E=u[L],v=A.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const nm={[Os]:Bs,[zs]:Gs,[ks]:Vs,[yi]:Hs,[Bs]:Os,[Gs]:zs,[Vs]:ks,[Hs]:yi};function im(n,t){function e(){let z=!1;const dt=new ne;let $=null;const tt=new ne(0,0,0,0);return{setMask:function(_t){$!==_t&&!z&&(n.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){z=_t},setClear:function(_t,mt,zt,ue,xe){xe===!0&&(_t*=ue,mt*=ue,zt*=ue),dt.set(_t,mt,zt,ue),tt.equals(dt)===!1&&(n.clearColor(_t,mt,zt,ue),tt.copy(dt))},reset:function(){z=!1,$=null,tt.set(-1,0,0,0)}}}function i(){let z=!1,dt=!1,$=null,tt=null,_t=null;return{setReversed:function(mt){if(dt!==mt){const zt=t.get("EXT_clip_control");dt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const ue=_t;_t=null,this.setClear(ue)}dt=mt},getReversed:function(){return dt},setTest:function(mt){mt?K(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(mt){$!==mt&&!z&&(n.depthMask(mt),$=mt)},setFunc:function(mt){if(dt&&(mt=nm[mt]),tt!==mt){switch(mt){case Os:n.depthFunc(n.NEVER);break;case Bs:n.depthFunc(n.ALWAYS);break;case zs:n.depthFunc(n.LESS);break;case yi:n.depthFunc(n.LEQUAL);break;case ks:n.depthFunc(n.EQUAL);break;case Hs:n.depthFunc(n.GEQUAL);break;case Gs:n.depthFunc(n.GREATER);break;case Vs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=mt}},setLocked:function(mt){z=mt},setClear:function(mt){_t!==mt&&(dt&&(mt=1-mt),n.clearDepth(mt),_t=mt)},reset:function(){z=!1,$=null,tt=null,_t=null,dt=!1}}}function r(){let z=!1,dt=null,$=null,tt=null,_t=null,mt=null,zt=null,ue=null,xe=null;return{setTest:function(Qt){z||(Qt?K(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(Qt){dt!==Qt&&!z&&(n.stencilMask(Qt),dt=Qt)},setFunc:function(Qt,He,rn){($!==Qt||tt!==He||_t!==rn)&&(n.stencilFunc(Qt,He,rn),$=Qt,tt=He,_t=rn)},setOp:function(Qt,He,rn){(mt!==Qt||zt!==He||ue!==rn)&&(n.stencilOp(Qt,He,rn),mt=Qt,zt=He,ue=rn)},setLocked:function(Qt){z=Qt},setClear:function(Qt){xe!==Qt&&(n.clearStencil(Qt),xe=Qt)},reset:function(){z=!1,dt=null,$=null,tt=null,_t=null,mt=null,zt=null,ue=null,xe=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,T=null,M=null,F=null,A=null,C=new Ut(0,0,0),L=0,E=!1,v=null,P=null,D=null,B=null,q=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,et=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=et>=2);let rt=null,ft={};const it=n.getParameter(n.SCISSOR_BOX),S=n.getParameter(n.VIEWPORT),I=new ne().fromArray(it),R=new ne().fromArray(S);function U(z,dt,$,tt){const _t=new Uint8Array(4),mt=n.createTexture();n.bindTexture(z,mt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<$;zt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(dt+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return mt}const G={};G[n.TEXTURE_2D]=U(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=U(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=U(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=U(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(yi),Pt(!1),It(oa),K(n.CULL_FACE),N(Pn);function K(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function at(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function lt(z,dt){return f[z]!==dt?(n.bindFramebuffer(z,dt),f[z]=dt,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=dt),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function ut(z,dt){let $=p,tt=!1;if(z){$=h.get(dt),$===void 0&&($=[],h.set(dt,$));const _t=z.textures;if($.length!==_t.length||$[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,zt=_t.length;mt<zt;mt++)$[mt]=n.COLOR_ATTACHMENT0+mt;$.length=_t.length,tt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,tt=!0);tt&&n.drawBuffers($)}function Lt(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const Nt={[qn]:n.FUNC_ADD,[Mc]:n.FUNC_SUBTRACT,[Sc]:n.FUNC_REVERSE_SUBTRACT};Nt[yc]=n.MIN,Nt[Ec]=n.MAX;const Ct={[bc]:n.ZERO,[Tc]:n.ONE,[Ac]:n.SRC_COLOR,[Ns]:n.SRC_ALPHA,[Ic]:n.SRC_ALPHA_SATURATE,[Pc]:n.DST_COLOR,[Rc]:n.DST_ALPHA,[wc]:n.ONE_MINUS_SRC_COLOR,[Fs]:n.ONE_MINUS_SRC_ALPHA,[Lc]:n.ONE_MINUS_DST_COLOR,[Cc]:n.ONE_MINUS_DST_ALPHA,[Dc]:n.CONSTANT_COLOR,[Uc]:n.ONE_MINUS_CONSTANT_COLOR,[Nc]:n.CONSTANT_ALPHA,[Fc]:n.ONE_MINUS_CONSTANT_ALPHA};function N(z,dt,$,tt,_t,mt,zt,ue,xe,Qt){if(z===Pn){_===!0&&(at(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),z!==vc){if(z!==m||Qt!==E){if((d!==qn||M!==qn)&&(n.blendEquation(n.FUNC_ADD),d=qn,M=qn),Qt)switch(z){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Br:n.blendFunc(n.ONE,n.ONE);break;case aa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case la:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Br:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case aa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case la:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,T=null,F=null,A=null,C.set(0,0,0),L=0,m=z,E=Qt}return}_t=_t||dt,mt=mt||$,zt=zt||tt,(dt!==d||_t!==M)&&(n.blendEquationSeparate(Nt[dt],Nt[_t]),d=dt,M=_t),($!==b||tt!==T||mt!==F||zt!==A)&&(n.blendFuncSeparate(Ct[$],Ct[tt],Ct[mt],Ct[zt]),b=$,T=tt,F=mt,A=zt),(ue.equals(C)===!1||xe!==L)&&(n.blendColor(ue.r,ue.g,ue.b,xe),C.copy(ue),L=xe),m=z,E=!1}function Wt(z,dt){z.side===Ne?at(n.CULL_FACE):K(n.CULL_FACE);let $=z.side===ye;dt&&($=!$),Pt($),z.blending===xi&&z.transparent===!1?N(Pn):N(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const tt=z.stencilWrite;a.setTest(tt),tt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(z){v!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),v=z)}function It(z){z!==gc?(K(n.CULL_FACE),z!==P&&(z===oa?n.cullFace(n.BACK):z===_c?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),P=z}function xt(z){z!==D&&(Z&&n.lineWidth(z),D=z)}function Ft(z,dt,$){z?(K(n.POLYGON_OFFSET_FILL),(B!==dt||q!==$)&&(n.polygonOffset(dt,$),B=dt,q=$)):at(n.POLYGON_OFFSET_FILL)}function Et(z){z?K(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function w(z){z===void 0&&(z=n.TEXTURE0+j-1),rt!==z&&(n.activeTexture(z),rt=z)}function x(z,dt,$){$===void 0&&(rt===null?$=n.TEXTURE0+j-1:$=rt);let tt=ft[$];tt===void 0&&(tt={type:void 0,texture:void 0},ft[$]=tt),(tt.type!==z||tt.texture!==dt)&&(rt!==$&&(n.activeTexture($),rt=$),n.bindTexture(z,dt||G[z]),tt.type=z,tt.texture=dt)}function V(){const z=ft[rt];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(z){I.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),I.copy(z))}function yt(z){R.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),R.copy(z))}function Xt(z,dt){let $=u.get(dt);$===void 0&&($=new WeakMap,u.set(dt,$));let tt=$.get(z);tt===void 0&&(tt=n.getUniformBlockIndex(dt,z.name),$.set(z,tt))}function Gt(z,dt){const tt=u.get(dt).get(z);l.get(dt)!==tt&&(n.uniformBlockBinding(dt,tt,z.__bindingPointIndex),l.set(dt,tt))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},rt=null,ft={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,T=null,M=null,F=null,A=null,C=new Ut(0,0,0),L=0,E=!1,v=null,P=null,D=null,B=null,q=null,I.set(0,0,n.canvas.width,n.canvas.height),R.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:at,bindFramebuffer:lt,drawBuffers:ut,useProgram:Lt,setBlending:N,setMaterial:Wt,setFlipSided:Pt,setCullFace:It,setLineWidth:xt,setPolygonOffset:Ft,setScissorTest:Et,activeTexture:w,bindTexture:x,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:nt,texImage2D:St,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Gt,texStorage2D:qt,texStorage3D:st,texSubImage2D:J,texSubImage3D:wt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:Ot,viewport:yt,reset:re}}function el(n,t,e,i){const r=rm(i);switch(e){case Tl:return n*t;case wl:return n*t;case Rl:return n*t*2;case Uo:return n*t/r.components*r.byteLength;case No:return n*t/r.components*r.byteLength;case Cl:return n*t*2/r.components*r.byteLength;case Fo:return n*t*2/r.components*r.byteLength;case Al:return n*t*3/r.components*r.byteLength;case Ye:return n*t*4/r.components*r.byteLength;case Oo:return n*t*4/r.components*r.byteLength;case Lr:case Ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Ur:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $s:case Ks:return Math.max(n,16)*Math.max(t,8)/4;case Ys:case js:return Math.max(n,8)*Math.max(t,8)/2;case Zs:case Js:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ro:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case uo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Nr:case mo:case go:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Pl:case _o:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xo:case vo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rm(n){switch(n){case gn:case yl:return{byteLength:1,components:1};case $i:case El:case Ji:return{byteLength:2,components:1};case Io:case Do:return{byteLength:2,components:4};case jn:case Lo:case tn:return{byteLength:4,components:1};case bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function sm(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $t,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Hr("canvas")}function _(w,x,V){let Q=1;const nt=Et(w);if((nt.width>V||nt.height>V)&&(Q=V/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(Q*nt.width),wt=Math.floor(Q*nt.height);f===void 0&&(f=g(J,wt));const pt=x?g(J,wt):f;return pt.width=J,pt.height=wt,pt.getContext("2d").drawImage(w,0,0,J,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+wt+")."),pt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,x,V,Q,nt=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=x;if(x===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),x===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),x===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),x===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),x===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),x===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),x===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),x===n.RGBA){const wt=nt?qr:Yt.getTransfer(Q);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=wt===ee?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(w,x){let V;return w?x===null||x===jn||x===Ti?V=n.DEPTH24_STENCIL8:x===tn?V=n.DEPTH32F_STENCIL8:x===$i&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===jn||x===Ti?V=n.DEPTH_COMPONENT24:x===tn?V=n.DEPTH_COMPONENT32F:x===$i&&(V=n.DEPTH_COMPONENT16),V}function F(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Fe&&w.minFilter!==Qe?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){const x=w.target;x.removeEventListener("dispose",A),L(x),x.isVideoTexture&&c.delete(x)}function C(w){const x=w.target;x.removeEventListener("dispose",C),v(x)}function L(w){const x=i.get(w);if(x.__webglInit===void 0)return;const V=w.source,Q=h.get(V);if(Q){const nt=Q[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(w),Object.keys(Q).length===0&&h.delete(V)}i.remove(w)}function E(w){const x=i.get(w);n.deleteTexture(x.__webglTexture);const V=w.source,Q=h.get(V);delete Q[x.__cacheKey],o.memory.textures--}function v(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let nt=0;nt<x.__webglFramebuffer[Q].length;nt++)n.deleteFramebuffer(x.__webglFramebuffer[Q][nt]);else n.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[Q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=w.textures;for(let Q=0,nt=V.length;Q<nt;Q++){const J=i.get(V[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[Q])}i.remove(w)}let P=0;function D(){P=0}function B(){const w=P;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w}function q(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function j(w,x){const V=i.get(w);if(w.isVideoTexture&&xt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(V,w,x);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+x)}function Z(w,x){const V=i.get(w);if(w.version>0&&V.__version!==w.version){R(V,w,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+x)}function et(w,x){const V=i.get(w);if(w.version>0&&V.__version!==w.version){R(V,w,x);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+x)}function Y(w,x){const V=i.get(w);if(w.version>0&&V.__version!==w.version){U(V,w,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+x)}const rt={[zr]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[qs]:n.MIRRORED_REPEAT},ft={[Fe]:n.NEAREST,[Xc]:n.NEAREST_MIPMAP_NEAREST,[sr]:n.NEAREST_MIPMAP_LINEAR,[Qe]:n.LINEAR,[Jr]:n.LINEAR_MIPMAP_NEAREST,[Cn]:n.LINEAR_MIPMAP_LINEAR},it={[jc]:n.NEVER,[eu]:n.ALWAYS,[Kc]:n.LESS,[Ll]:n.LEQUAL,[Zc]:n.EQUAL,[tu]:n.GEQUAL,[Jc]:n.GREATER,[Qc]:n.NOTEQUAL};function S(w,x){if(x.type===tn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Qe||x.magFilter===Jr||x.magFilter===sr||x.magFilter===Cn||x.minFilter===Qe||x.minFilter===Jr||x.minFilter===sr||x.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,rt[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,rt[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,rt[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ft[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ft[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,it[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Fe||x.minFilter!==sr&&x.minFilter!==Cn||x.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function I(w,x){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));const Q=x.source;let nt=h.get(Q);nt===void 0&&(nt={},h.set(Q,nt));const J=q(x);if(J!==w.__cacheKey){nt[J]===void 0&&(nt[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[J].usedTimes++;const wt=nt[w.__cacheKey];wt!==void 0&&(nt[w.__cacheKey].usedTimes--,wt.usedTimes===0&&E(x)),w.__cacheKey=J,w.__webglTexture=nt[J].texture}return V}function R(w,x,V){let Q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=n.TEXTURE_3D);const nt=I(w,x),J=x.source;e.bindTexture(Q,w.__webglTexture,n.TEXTURE0+V);const wt=i.get(J);if(J.version!==wt.__version||nt===!0){e.activeTexture(n.TEXTURE0+V);const pt=Yt.getPrimaries(Yt.workingColorSpace),Mt=x.colorSpace===wn?null:Yt.getPrimaries(x.colorSpace),qt=x.colorSpace===wn||pt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let st=_(x.image,!1,r.maxTextureSize);st=Ft(x,st);const St=s.convert(x.format,x.colorSpace),Dt=s.convert(x.type);let Ot=T(x.internalFormat,St,Dt,x.colorSpace,x.isVideoTexture);S(Q,x);let yt;const Xt=x.mipmaps,Gt=x.isVideoTexture!==!0,re=wt.__version===void 0||nt===!0,z=J.dataReady,dt=F(x,st);if(x.isDepthTexture)Ot=M(x.format===Ai,x.type),re&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,Ot,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Ot,st.width,st.height,0,St,Dt,null));else if(x.isDataTexture)if(Xt.length>0){Gt&&re&&e.texStorage2D(n.TEXTURE_2D,dt,Ot,Xt[0].width,Xt[0].height);for(let $=0,tt=Xt.length;$<tt;$++)yt=Xt[$],Gt?z&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,yt.width,yt.height,St,Dt,yt.data):e.texImage2D(n.TEXTURE_2D,$,Ot,yt.width,yt.height,0,St,Dt,yt.data);x.generateMipmaps=!1}else Gt?(re&&e.texStorage2D(n.TEXTURE_2D,dt,Ot,st.width,st.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,St,Dt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,st.width,st.height,0,St,Dt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Gt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ot,Xt[0].width,Xt[0].height,st.depth);for(let $=0,tt=Xt.length;$<tt;$++)if(yt=Xt[$],x.format!==Ye)if(St!==null)if(Gt){if(z)if(x.layerUpdates.size>0){const _t=el(yt.width,yt.height,x.format,x.type);for(const mt of x.layerUpdates){const zt=yt.data.subarray(mt*_t/yt.data.BYTES_PER_ELEMENT,(mt+1)*_t/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,mt,yt.width,yt.height,1,St,zt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,st.depth,St,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Ot,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,st.depth,St,Dt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Ot,yt.width,yt.height,st.depth,0,St,Dt,yt.data)}else{Gt&&re&&e.texStorage2D(n.TEXTURE_2D,dt,Ot,Xt[0].width,Xt[0].height);for(let $=0,tt=Xt.length;$<tt;$++)yt=Xt[$],x.format!==Ye?St!==null?Gt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Ot,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?z&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,yt.width,yt.height,St,Dt,yt.data):e.texImage2D(n.TEXTURE_2D,$,Ot,yt.width,yt.height,0,St,Dt,yt.data)}else if(x.isDataArrayTexture)if(Gt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ot,st.width,st.height,st.depth),z)if(x.layerUpdates.size>0){const $=el(st.width,st.height,x.format,x.type);for(const tt of x.layerUpdates){const _t=st.data.subarray(tt*$/st.data.BYTES_PER_ELEMENT,(tt+1)*$/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,St,Dt,_t)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,St,Dt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,st.width,st.height,st.depth,0,St,Dt,st.data);else if(x.isData3DTexture)Gt?(re&&e.texStorage3D(n.TEXTURE_3D,dt,Ot,st.width,st.height,st.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,St,Dt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,st.width,st.height,st.depth,0,St,Dt,st.data);else if(x.isFramebufferTexture){if(re)if(Gt)e.texStorage2D(n.TEXTURE_2D,dt,Ot,st.width,st.height);else{let $=st.width,tt=st.height;for(let _t=0;_t<dt;_t++)e.texImage2D(n.TEXTURE_2D,_t,Ot,$,tt,0,St,Dt,null),$>>=1,tt>>=1}}else if(Xt.length>0){if(Gt&&re){const $=Et(Xt[0]);e.texStorage2D(n.TEXTURE_2D,dt,Ot,$.width,$.height)}for(let $=0,tt=Xt.length;$<tt;$++)yt=Xt[$],Gt?z&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,St,Dt,yt):e.texImage2D(n.TEXTURE_2D,$,Ot,St,Dt,yt);x.generateMipmaps=!1}else if(Gt){if(re){const $=Et(st);e.texStorage2D(n.TEXTURE_2D,dt,Ot,$.width,$.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Dt,st)}else e.texImage2D(n.TEXTURE_2D,0,Ot,St,Dt,st);m(x)&&d(Q),wt.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function U(w,x,V){if(x.image.length!==6)return;const Q=I(w,x),nt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+V);const J=i.get(nt);if(nt.version!==J.__version||Q===!0){e.activeTexture(n.TEXTURE0+V);const wt=Yt.getPrimaries(Yt.workingColorSpace),pt=x.colorSpace===wn?null:Yt.getPrimaries(x.colorSpace),Mt=x.colorSpace===wn||wt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const qt=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,St=[];for(let tt=0;tt<6;tt++)!qt&&!st?St[tt]=_(x.image[tt],!0,r.maxCubemapSize):St[tt]=st?x.image[tt].image:x.image[tt],St[tt]=Ft(x,St[tt]);const Dt=St[0],Ot=s.convert(x.format,x.colorSpace),yt=s.convert(x.type),Xt=T(x.internalFormat,Ot,yt,x.colorSpace),Gt=x.isVideoTexture!==!0,re=J.__version===void 0||Q===!0,z=nt.dataReady;let dt=F(x,Dt);S(n.TEXTURE_CUBE_MAP,x);let $;if(qt){Gt&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Xt,Dt.width,Dt.height);for(let tt=0;tt<6;tt++){$=St[tt].mipmaps;for(let _t=0;_t<$.length;_t++){const mt=$[_t];x.format!==Ye?Ot!==null?Gt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,mt.width,mt.height,Ot,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,Xt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,mt.width,mt.height,Ot,yt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,Xt,mt.width,mt.height,0,Ot,yt,mt.data)}}}else{if($=x.mipmaps,Gt&&re){$.length>0&&dt++;const tt=Et(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Xt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Gt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,St[tt].width,St[tt].height,Ot,yt,St[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,St[tt].width,St[tt].height,0,Ot,yt,St[tt].data);for(let _t=0;_t<$.length;_t++){const zt=$[_t].image[tt].image;Gt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,zt.width,zt.height,Ot,yt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,Xt,zt.width,zt.height,0,Ot,yt,zt.data)}}else{Gt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ot,yt,St[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,Ot,yt,St[tt]);for(let _t=0;_t<$.length;_t++){const mt=$[_t];Gt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Ot,yt,mt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,Xt,Ot,yt,mt.image[tt])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),J.__version=nt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function G(w,x,V,Q,nt,J){const wt=s.convert(V.format,V.colorSpace),pt=s.convert(V.type),Mt=T(V.internalFormat,wt,pt,V.colorSpace),qt=i.get(x),st=i.get(V);if(st.__renderTarget=x,!qt.__hasExternalTextures){const St=Math.max(1,x.width>>J),Dt=Math.max(1,x.height>>J);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,Mt,St,Dt,x.depth,0,wt,pt,null):e.texImage2D(nt,J,Mt,St,Dt,0,wt,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),It(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,nt,st.__webglTexture,0,Pt(x)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,nt,st.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function K(w,x,V){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){const Q=x.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,J=M(x.stencilBuffer,nt),wt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=Pt(x);It(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,J,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,w)}else{const Q=x.textures;for(let nt=0;nt<Q.length;nt++){const J=Q[nt],wt=s.convert(J.format,J.colorSpace),pt=s.convert(J.type),Mt=T(J.internalFormat,wt,pt,J.colorSpace),qt=Pt(x);V&&It(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Mt,x.width,x.height):It(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt,Mt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const nt=Q.__webglTexture,J=Pt(x);if(x.depthTexture.format===vi)It(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(x.depthTexture.format===Ai)It(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function lt(w){const x=i.get(w),V=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){const nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",nt)};Q.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=Q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");at(x.__webglFramebuffer,w)}else if(V){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=n.createRenderbuffer(),K(x.__webglDepthbuffer[Q],w,!1);else{const nt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),K(x.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(w,x,V){const Q=i.get(w);x!==void 0&&G(Q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&lt(w)}function Lt(w){const x=w.texture,V=i.get(w),Q=i.get(x);w.addEventListener("dispose",C);const nt=w.textures,J=w.isWebGLCubeRenderTarget===!0,wt=nt.length>1;if(wt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=x.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<x.mipmaps.length;Mt++)V.__webglFramebuffer[pt][Mt]=n.createFramebuffer()}else V.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<x.mipmaps.length;pt++)V.__webglFramebuffer[pt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(wt)for(let pt=0,Mt=nt.length;pt<Mt;pt++){const qt=i.get(nt[pt]);qt.__webglTexture===void 0&&(qt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&It(w)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<nt.length;pt++){const Mt=nt[pt];V.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);const qt=s.convert(Mt.format,Mt.colorSpace),st=s.convert(Mt.type),St=T(Mt.internalFormat,qt,st,Mt.colorSpace,w.isXRRenderTarget===!0),Dt=Pt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,St,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),K(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),S(n.TEXTURE_CUBE_MAP,x);for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)G(V.__webglFramebuffer[pt][Mt],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else G(V.__webglFramebuffer[pt],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let pt=0,Mt=nt.length;pt<Mt;pt++){const qt=nt[pt],st=i.get(qt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),S(n.TEXTURE_2D,qt),G(V.__webglFramebuffer,w,qt,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),m(qt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,Q.__webglTexture),S(pt,x),x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)G(V.__webglFramebuffer[Mt],w,x,n.COLOR_ATTACHMENT0,pt,Mt);else G(V.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,pt,0);m(x)&&d(pt),e.unbindTexture()}w.depthBuffer&&lt(w)}function Nt(w){const x=w.textures;for(let V=0,Q=x.length;V<Q;V++){const nt=x[V];if(m(nt)){const J=b(w),wt=i.get(nt).__webglTexture;e.bindTexture(J,wt),d(J),e.unbindTexture()}}}const Ct=[],N=[];function Wt(w){if(w.samples>0){if(It(w)===!1){const x=w.textures,V=w.width,Q=w.height;let nt=n.COLOR_BUFFER_BIT;const J=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(w),pt=x.length>1;if(pt)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Mt]);const qt=i.get(x[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,V,Q,0,0,V,Q,nt,n.NEAREST),l===!0&&(Ct.length=0,N.length=0,Ct.push(n.COLOR_ATTACHMENT0+Mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ct.push(J),N.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Mt]);const qt=i.get(x[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Pt(w){return Math.min(r.maxSamples,w.samples)}function It(w){const x=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function xt(w){const x=o.render.frame;c.get(w)!==x&&(c.set(w,x),w.update())}function Ft(w,x){const V=w.colorSpace,Q=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Ri&&V!==wn&&(Yt.getTransfer(V)===ee?(Q!==Ye||nt!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Et(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=Y,this.rebindTextures=ut,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=G,this.useMultisampledRTT=It}function om(n,t){function e(i,r=wn){let s;const o=Yt.getTransfer(r);if(i===gn)return n.UNSIGNED_BYTE;if(i===Io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Do)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yl)return n.BYTE;if(i===El)return n.SHORT;if(i===$i)return n.UNSIGNED_SHORT;if(i===Lo)return n.INT;if(i===jn)return n.UNSIGNED_INT;if(i===tn)return n.FLOAT;if(i===Ji)return n.HALF_FLOAT;if(i===Tl)return n.ALPHA;if(i===Al)return n.RGB;if(i===Ye)return n.RGBA;if(i===wl)return n.LUMINANCE;if(i===Rl)return n.LUMINANCE_ALPHA;if(i===vi)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===Uo)return n.RED;if(i===No)return n.RED_INTEGER;if(i===Cl)return n.RG;if(i===Fo)return n.RG_INTEGER;if(i===Oo)return n.RGBA_INTEGER;if(i===Lr||i===Ir||i===Dr||i===Ur)if(o===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Lr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Lr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ir)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ys||i===$s||i===js||i===Ks)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ys)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$s)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===js)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zs||i===Js||i===Qs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zs||i===Js)return o===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===to||i===eo||i===no||i===io||i===ro||i===so||i===oo||i===ao||i===lo||i===co||i===uo||i===ho||i===fo||i===po)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===to)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===no)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===io)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ro)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===so)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ao)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===co)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ho)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nr||i===mo||i===go)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Nr)return o===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pl||i===_o||i===xo||i===vo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_o)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ti?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class am extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ar extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lm={type:"move"};class ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ar;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,um=`
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

}`;class hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ee,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new je({vertexShader:cm,fragmentShader:um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fm extends Ci{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const _=new hm,m=e.getContextAttributes();let d=null,b=null;const T=[],M=[],F=new $t;let A=null;const C=new Ue;C.viewport=new ne;const L=new Ue;L.viewport=new ne;const E=[C,L],v=new am;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let U=T[R];return U===void 0&&(U=new ws,T[R]=U),U.getTargetRaySpace()},this.getControllerGrip=function(R){let U=T[R];return U===void 0&&(U=new ws,T[R]=U),U.getGripSpace()},this.getHand=function(R){let U=T[R];return U===void 0&&(U=new ws,T[R]=U),U.getHandSpace()};function B(R){const U=M.indexOf(R.inputSource);if(U===-1)return;const G=T[U];G!==void 0&&(G.update(R.inputSource,R.frame,u||o),G.dispatchEvent({type:R.type,data:R.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",j);for(let R=0;R<T.length;R++){const U=M[R];U!==null&&(M[R]=null,T[R].disconnect(U))}P=null,D=null,_.reset(),t.setRenderTarget(d),p=null,h=null,f=null,r=null,b=null,I.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(R){u=R},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){const U={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,U),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Kn(p.framebufferWidth,p.framebufferHeight,{format:Ye,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let U=null,G=null,K=null;m.depth&&(K=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=m.stencil?Ai:vi,G=m.stencil?Ti:jn);const at={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(at),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new Kn(h.textureWidth,h.textureHeight,{format:Ye,type:gn,depthTexture:new Xl(h.textureWidth,h.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(R){for(let U=0;U<R.removed.length;U++){const G=R.removed[U],K=M.indexOf(G);K>=0&&(M[K]=null,T[K].disconnect(G))}for(let U=0;U<R.added.length;U++){const G=R.added[U];let K=M.indexOf(G);if(K===-1){for(let lt=0;lt<T.length;lt++)if(lt>=M.length){M.push(G),K=lt;break}else if(M[lt]===null){M[lt]=G,K=lt;break}if(K===-1)break}const at=T[K];at&&at.connect(G)}}const Z=new O,et=new O;function Y(R,U,G){Z.setFromMatrixPosition(U.matrixWorld),et.setFromMatrixPosition(G.matrixWorld);const K=Z.distanceTo(et),at=U.projectionMatrix.elements,lt=G.projectionMatrix.elements,ut=at[14]/(at[10]-1),Lt=at[14]/(at[10]+1),Nt=(at[9]+1)/at[5],Ct=(at[9]-1)/at[5],N=(at[8]-1)/at[0],Wt=(lt[8]+1)/lt[0],Pt=ut*N,It=ut*Wt,xt=K/(-N+Wt),Ft=xt*-N;if(U.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Ft),R.translateZ(xt),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),at[10]===-1)R.projectionMatrix.copy(U.projectionMatrix),R.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const Et=ut+xt,w=Lt+xt,x=Pt-Ft,V=It+(K-Ft),Q=Nt*Lt/w*Et,nt=Ct*Lt/w*Et;R.projectionMatrix.makePerspective(x,V,Q,nt,Et,w),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function rt(R,U){U===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(U.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;let U=R.near,G=R.far;_.texture!==null&&(_.depthNear>0&&(U=_.depthNear),_.depthFar>0&&(G=_.depthFar)),v.near=L.near=C.near=U,v.far=L.far=C.far=G,(P!==v.near||D!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,D=v.far),C.layers.mask=R.layers.mask|2,L.layers.mask=R.layers.mask|4,v.layers.mask=C.layers.mask|L.layers.mask;const K=R.parent,at=v.cameras;rt(v,K);for(let lt=0;lt<at.length;lt++)rt(at[lt],K);at.length===2?Y(v,C,L):v.projectionMatrix.copy(C.projectionMatrix),ft(R,v,K)};function ft(R,U,G){G===null?R.matrix.copy(U.matrixWorld):(R.matrix.copy(G.matrixWorld),R.matrix.invert(),R.matrix.multiply(U.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(U.projectionMatrix),R.projectionMatrixInverse.copy(U.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Mo*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(R){l=R,h!==null&&(h.fixedFoveation=R),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=R)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let it=null;function S(R,U){if(c=U.getViewerPose(u||o),g=U,c!==null){const G=c.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let K=!1;G.length!==v.cameras.length&&(v.cameras.length=0,K=!0);for(let lt=0;lt<G.length;lt++){const ut=G[lt];let Lt=null;if(p!==null)Lt=p.getViewport(ut);else{const Ct=f.getViewSubImage(h,ut);Lt=Ct.viewport,lt===0&&(t.setRenderTargetTextures(b,Ct.colorTexture,h.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(b))}let Nt=E[lt];Nt===void 0&&(Nt=new Ue,Nt.layers.enable(lt),Nt.viewport=new ne,E[lt]=Nt),Nt.matrix.fromArray(ut.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(ut.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),lt===0&&(v.matrix.copy(Nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),K===!0&&v.cameras.push(Nt)}const at=r.enabledFeatures;if(at&&at.includes("depth-sensing")){const lt=f.getDepthInformation(G[0]);lt&&lt.isValid&&lt.texture&&_.init(t,lt,r.renderState)}}for(let G=0;G<T.length;G++){const K=M[G],at=T[G];K!==null&&at!==void 0&&at.update(K,U,u||o)}it&&it(R,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),g=null}const I=new Vl;I.setAnimationLoop(S),this.setAnimationLoop=function(R){it=R},this.dispose=function(){}}}const Gn=new Oe,dm=new jt;function pm(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,kl(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,T,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,b,T):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ye&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ye&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),T=b.envMap,M=b.envMapRotation;T&&(m.envMap.value=T,Gn.copy(M),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(dm.makeRotationFromEuler(Gn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ye&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mm(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const M=T.program;i.uniformBlockBinding(b,M)}function u(b,T){let M=r[b.id];M===void 0&&(g(b),M=c(b),r[b.id]=M,b.addEventListener("dispose",m));const F=T.program;i.updateUBOMapping(b,F);const A=t.render.frame;s[b.id]!==A&&(h(b),s[b.id]=A)}function c(b){const T=f();b.__bindingPointIndex=T;const M=n.createBuffer(),F=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,F,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const T=r[b.id],M=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let A=0,C=M.length;A<C;A++){const L=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,v=L.length;E<v;E++){const P=L[E];if(p(P,A,E,F)===!0){const D=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let j=0;j<B.length;j++){const Z=B[j],et=_(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,D+q,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,q),q+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,T,M,F){const A=b.value,C=T+"_"+M;if(F[C]===void 0)return typeof A=="number"||typeof A=="boolean"?F[C]=A:F[C]=A.clone(),!0;{const L=F[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return F[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(b){const T=b.uniforms;let M=0;const F=16;for(let C=0,L=T.length;C<L;C++){const E=Array.isArray(T[C])?T[C]:[T[C]];for(let v=0,P=E.length;v<P;v++){const D=E[v],B=Array.isArray(D.value)?D.value:[D.value];for(let q=0,j=B.length;q<j;q++){const Z=B[q],et=_(Z),Y=M%F,rt=Y%et.boundary,ft=Y+rt;M+=rt,ft!==0&&F-ft<et.storage&&(M+=F-ft),D.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=et.storage}}}const A=M%F;return A>0&&(M+=F-A),b.__size=M,b.__cache={},this}function _(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class gm{constructor(t={}){const{canvas:e=iu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this.toneMapping=Ln,this.toneMappingExposure=1;const M=this;let F=!1,A=0,C=0,L=null,E=-1,v=null;const P=new ne,D=new ne;let B=null;const q=new Ut(0);let j=0,Z=e.width,et=e.height,Y=1,rt=null,ft=null;const it=new ne(0,0,Z,et),S=new ne(0,0,Z,et);let I=!1;const R=new zo;let U=!1,G=!1;const K=new jt,at=new jt,lt=new O,ut=new ne,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Ct(){return L===null?Y:1}let N=i;function Wt(y,k){return e.getContext(y,k)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),N===null){const k="webgl2";if(N=Wt(k,y),N===null)throw Wt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Pt,It,xt,Ft,Et,w,x,V,Q,nt,J,wt,pt,Mt,qt,st,St,Dt,Ot,yt,Xt,Gt,re,z;function dt(){Pt=new Sd(N),Pt.init(),Gt=new om(N,Pt),It=new md(N,Pt,t,Gt),xt=new im(N,Pt),It.reverseDepthBuffer&&h&&xt.buffers.depth.setReversed(!0),Ft=new bd(N),Et=new Gp,w=new sm(N,Pt,xt,Et,It,Gt,Ft),x=new _d(M),V=new Md(M),Q=new Pu(N),re=new dd(N,Q),nt=new yd(N,Q,Ft,re),J=new Ad(N,nt,Q,Ft),Ot=new Td(N,It,w),st=new gd(Et),wt=new Hp(M,x,V,Pt,It,re,st),pt=new pm(M,Et),Mt=new Wp,qt=new Kp(Pt),Dt=new fd(M,x,V,xt,J,p,l),St=new em(M,J,It),z=new mm(N,Ft,It,xt),yt=new pd(N,Pt,Ft),Xt=new Ed(N,Pt,Ft),Ft.programs=wt.programs,M.capabilities=It,M.extensions=Pt,M.properties=Et,M.renderLists=Mt,M.shadowMap=St,M.state=xt,M.info=Ft}dt();const $=new fm(M,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Pt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Pt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(Z,et,!1))},this.getSize=function(y){return y.set(Z,et)},this.setSize=function(y,k,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,et=k,e.width=Math.floor(y*Y),e.height=Math.floor(k*Y),W===!0&&(e.style.width=y+"px",e.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(Z*Y,et*Y).floor()},this.setDrawingBufferSize=function(y,k,W){Z=y,et=k,Y=W,e.width=Math.floor(y*W),e.height=Math.floor(k*W),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(it)},this.setViewport=function(y,k,W,X){y.isVector4?it.set(y.x,y.y,y.z,y.w):it.set(y,k,W,X),xt.viewport(P.copy(it).multiplyScalar(Y).round())},this.getScissor=function(y){return y.copy(S)},this.setScissor=function(y,k,W,X){y.isVector4?S.set(y.x,y.y,y.z,y.w):S.set(y,k,W,X),xt.scissor(D.copy(S).multiplyScalar(Y).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(y){xt.setScissorTest(I=y)},this.setOpaqueSort=function(y){rt=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(y=!0,k=!0,W=!0){let X=0;if(y){let H=!1;if(L!==null){const ot=L.texture.format;H=ot===Oo||ot===Fo||ot===No}if(H){const ot=L.texture.type,gt=ot===gn||ot===jn||ot===$i||ot===Ti||ot===Io||ot===Do,bt=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Bt=bt.r,kt=bt.g,At=bt.b;gt?(g[0]=Bt,g[1]=kt,g[2]=At,g[3]=Tt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Bt,_[1]=kt,_[2]=At,_[3]=Tt,N.clearBufferiv(N.COLOR,0,_))}else X|=N.COLOR_BUFFER_BIT}k&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Mt.dispose(),qt.dispose(),Et.dispose(),x.dispose(),V.dispose(),J.dispose(),re.dispose(),z.dispose(),wt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Jo),$.removeEventListener("sessionend",Qo),Fn.stop()};function tt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const y=Ft.autoReset,k=St.enabled,W=St.autoUpdate,X=St.needsUpdate,H=St.type;dt(),Ft.autoReset=y,St.enabled=k,St.autoUpdate=W,St.needsUpdate=X,St.type=H}function mt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function zt(y){const k=y.target;k.removeEventListener("dispose",zt),ue(k)}function ue(y){xe(y),Et.remove(y)}function xe(y){const k=Et.get(y).programs;k!==void 0&&(k.forEach(function(W){wt.releaseProgram(W)}),y.isShaderMaterial&&wt.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,W,X,H,ot){k===null&&(k=Lt);const gt=H.isMesh&&H.matrixWorld.determinant()<0,bt=dc(y,k,W,X,H);xt.setMaterial(X,gt);let Tt=W.index,Bt=1;if(X.wireframe===!0){if(Tt=nt.getWireframeAttribute(W),Tt===void 0)return;Bt=2}const kt=W.drawRange,At=W.attributes.position;let Kt=kt.start*Bt,se=(kt.start+kt.count)*Bt;ot!==null&&(Kt=Math.max(Kt,ot.start*Bt),se=Math.min(se,(ot.start+ot.count)*Bt)),Tt!==null?(Kt=Math.max(Kt,0),se=Math.min(se,Tt.count)):At!=null&&(Kt=Math.max(Kt,0),se=Math.min(se,At.count));const oe=se-Kt;if(oe<0||oe===1/0)return;re.setup(H,X,bt,W,Tt);let Re,Zt=yt;if(Tt!==null&&(Re=Q.get(Tt),Zt=Xt,Zt.setIndex(Re)),H.isMesh)X.wireframe===!0?(xt.setLineWidth(X.wireframeLinewidth*Ct()),Zt.setMode(N.LINES)):Zt.setMode(N.TRIANGLES);else if(H.isLine){let Rt=X.linewidth;Rt===void 0&&(Rt=1),xt.setLineWidth(Rt*Ct()),H.isLineSegments?Zt.setMode(N.LINES):H.isLineLoop?Zt.setMode(N.LINE_LOOP):Zt.setMode(N.LINE_STRIP)}else H.isPoints?Zt.setMode(N.POINTS):H.isSprite&&Zt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Zt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Rt=H._multiDrawStarts,sn=H._multiDrawCounts,Jt=H._multiDrawCount,Ge=Tt?Q.get(Tt).bytesPerElement:1,ti=Et.get(X).currentProgram.getUniforms();for(let Le=0;Le<Jt;Le++)ti.setValue(N,"_gl_DrawID",Le),Zt.render(Rt[Le]/Ge,sn[Le])}else if(H.isInstancedMesh)Zt.renderInstances(Kt,oe,H.count);else if(W.isInstancedBufferGeometry){const Rt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,sn=Math.min(W.instanceCount,Rt);Zt.renderInstances(Kt,oe,sn)}else Zt.render(Kt,oe)};function Qt(y,k,W){y.transparent===!0&&y.side===Ne&&y.forceSinglePass===!1?(y.side=ye,y.needsUpdate=!0,rr(y,k,W),y.side=In,y.needsUpdate=!0,rr(y,k,W),y.side=Ne):rr(y,k,W)}this.compile=function(y,k,W=null){W===null&&(W=y),d=qt.get(W),d.init(k),T.push(d),W.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),y!==W&&y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const X=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ot=H.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){const bt=ot[gt];Qt(bt,W,H),X.add(bt)}else Qt(ot,W,H),X.add(ot)}),T.pop(),d=null,X},this.compileAsync=function(y,k,W=null){const X=this.compile(y,k,W);return new Promise(H=>{function ot(){if(X.forEach(function(gt){Et.get(gt).currentProgram.isReady()&&X.delete(gt)}),X.size===0){H(y);return}setTimeout(ot,10)}Pt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let He=null;function rn(y){He&&He(y)}function Jo(){Fn.stop()}function Qo(){Fn.start()}const Fn=new Vl;Fn.setAnimationLoop(rn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(y){He=y,$.setAnimationLoop(y),y===null?Fn.stop():Fn.start()},$.addEventListener("sessionstart",Jo),$.addEventListener("sessionend",Qo),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,k,L),d=qt.get(y,T.length),d.init(k),T.push(d),at.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),R.setFromProjectionMatrix(at),G=this.localClippingEnabled,U=st.init(this.clippingPlanes,G),m=Mt.get(y,b.length),m.init(),b.push(m),$.enabled===!0&&$.isPresenting===!0){const ot=M.xr.getDepthSensingMesh();ot!==null&&Zr(ot,k,-1/0,M.sortObjects)}Zr(y,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(rt,ft),Nt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Nt&&Dt.addToRenderList(m,y),this.info.render.frame++,U===!0&&st.beginShadows();const W=d.state.shadowsArray;St.render(W,y,k),U===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,H=m.transmissive;if(d.setupLights(),k.isArrayCamera){const ot=k.cameras;if(H.length>0)for(let gt=0,bt=ot.length;gt<bt;gt++){const Tt=ot[gt];ea(X,H,y,Tt)}Nt&&Dt.render(y);for(let gt=0,bt=ot.length;gt<bt;gt++){const Tt=ot[gt];ta(m,y,Tt,Tt.viewport)}}else H.length>0&&ea(X,H,y,k),Nt&&Dt.render(y),ta(m,y,k);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(M,y,k),re.resetDefaultState(),E=-1,v=null,T.pop(),T.length>0?(d=T[T.length-1],U===!0&&st.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Zr(y,k,W,X){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||R.intersectsSprite(y)){X&&ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(at);const gt=J.update(y),bt=y.material;bt.visible&&m.push(y,gt,bt,W,ut.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||R.intersectsObject(y))){const gt=J.update(y),bt=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ut.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),ut.copy(gt.boundingSphere.center)),ut.applyMatrix4(y.matrixWorld).applyMatrix4(at)),Array.isArray(bt)){const Tt=gt.groups;for(let Bt=0,kt=Tt.length;Bt<kt;Bt++){const At=Tt[Bt],Kt=bt[At.materialIndex];Kt&&Kt.visible&&m.push(y,gt,Kt,W,ut.z,At)}}else bt.visible&&m.push(y,gt,bt,W,ut.z,null)}}const ot=y.children;for(let gt=0,bt=ot.length;gt<bt;gt++)Zr(ot[gt],k,W,X)}function ta(y,k,W,X){const H=y.opaque,ot=y.transmissive,gt=y.transparent;d.setupLightsView(W),U===!0&&st.setGlobalState(M.clippingPlanes,W),X&&xt.viewport(P.copy(X)),H.length>0&&ir(H,k,W),ot.length>0&&ir(ot,k,W),gt.length>0&&ir(gt,k,W),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ea(y,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new Kn(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Ji:gn,minFilter:Cn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const ot=d.state.transmissionRenderTarget[X.id],gt=X.viewport||P;ot.setSize(gt.z,gt.w);const bt=M.getRenderTarget();M.setRenderTarget(ot),M.getClearColor(q),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),Nt&&Dt.render(W);const Tt=M.toneMapping;M.toneMapping=Ln;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),U===!0&&st.setGlobalState(M.clippingPlanes,X),ir(y,W,X),w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let At=0,Kt=k.length;At<Kt;At++){const se=k[At],oe=se.object,Re=se.geometry,Zt=se.material,Rt=se.group;if(Zt.side===Ne&&oe.layers.test(X.layers)){const sn=Zt.side;Zt.side=ye,Zt.needsUpdate=!0,na(oe,W,X,Re,Zt,Rt),Zt.side=sn,Zt.needsUpdate=!0,kt=!0}}kt===!0&&(w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot))}M.setRenderTarget(bt),M.setClearColor(q,j),Bt!==void 0&&(X.viewport=Bt),M.toneMapping=Tt}function ir(y,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ot=y.length;H<ot;H++){const gt=y[H],bt=gt.object,Tt=gt.geometry,Bt=X===null?gt.material:X,kt=gt.group;bt.layers.test(W.layers)&&na(bt,k,W,Tt,Bt,kt)}}function na(y,k,W,X,H,ot){y.onBeforeRender(M,k,W,X,H,ot),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(M,k,W,X,y,ot),H.transparent===!0&&H.side===Ne&&H.forceSinglePass===!1?(H.side=ye,H.needsUpdate=!0,M.renderBufferDirect(W,k,X,H,y,ot),H.side=In,H.needsUpdate=!0,M.renderBufferDirect(W,k,X,H,y,ot),H.side=Ne):M.renderBufferDirect(W,k,X,H,y,ot),y.onAfterRender(M,k,W,X,H,ot)}function rr(y,k,W){k.isScene!==!0&&(k=Lt);const X=Et.get(y),H=d.state.lights,ot=d.state.shadowsArray,gt=H.state.version,bt=wt.getParameters(y,H.state,ot,k,W),Tt=wt.getProgramCacheKey(bt);let Bt=X.programs;X.environment=y.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(y.isMeshStandardMaterial?V:x).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Bt===void 0&&(y.addEventListener("dispose",zt),Bt=new Map,X.programs=Bt);let kt=Bt.get(Tt);if(kt!==void 0){if(X.currentProgram===kt&&X.lightsStateVersion===gt)return ra(y,bt),kt}else bt.uniforms=wt.getUniforms(y),y.onBeforeCompile(bt,M),kt=wt.acquireProgram(bt,Tt),Bt.set(Tt,kt),X.uniforms=bt.uniforms;const At=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=st.uniform),ra(y,bt),X.needsLights=mc(y),X.lightsStateVersion=gt,X.needsLights&&(At.ambientLightColor.value=H.state.ambient,At.lightProbe.value=H.state.probe,At.directionalLights.value=H.state.directional,At.directionalLightShadows.value=H.state.directionalShadow,At.spotLights.value=H.state.spot,At.spotLightShadows.value=H.state.spotShadow,At.rectAreaLights.value=H.state.rectArea,At.ltc_1.value=H.state.rectAreaLTC1,At.ltc_2.value=H.state.rectAreaLTC2,At.pointLights.value=H.state.point,At.pointLightShadows.value=H.state.pointShadow,At.hemisphereLights.value=H.state.hemi,At.directionalShadowMap.value=H.state.directionalShadowMap,At.directionalShadowMatrix.value=H.state.directionalShadowMatrix,At.spotShadowMap.value=H.state.spotShadowMap,At.spotLightMatrix.value=H.state.spotLightMatrix,At.spotLightMap.value=H.state.spotLightMap,At.pointShadowMap.value=H.state.pointShadowMap,At.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=kt,X.uniformsList=null,kt}function ia(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=Fr.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function ra(y,k){const W=Et.get(y);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function dc(y,k,W,X,H){k.isScene!==!0&&(k=Lt),w.resetTextureUnits();const ot=k.fog,gt=X.isMeshStandardMaterial?k.environment:null,bt=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ri,Tt=(X.isMeshStandardMaterial?V:x).get(X.envMap||gt),Bt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,kt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),At=!!W.morphAttributes.position,Kt=!!W.morphAttributes.normal,se=!!W.morphAttributes.color;let oe=Ln;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(oe=M.toneMapping);const Re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Zt=Re!==void 0?Re.length:0,Rt=Et.get(X),sn=d.state.lights;if(U===!0&&(G===!0||y!==v)){const Be=y===v&&X.id===E;st.setState(X,y,Be)}let Jt=!1;X.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==sn.state.version||Rt.outputColorSpace!==bt||H.isBatchedMesh&&Rt.batching===!1||!H.isBatchedMesh&&Rt.batching===!0||H.isBatchedMesh&&Rt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Rt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Rt.instancing===!1||!H.isInstancedMesh&&Rt.instancing===!0||H.isSkinnedMesh&&Rt.skinning===!1||!H.isSkinnedMesh&&Rt.skinning===!0||H.isInstancedMesh&&Rt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Rt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Rt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Rt.instancingMorph===!1&&H.morphTexture!==null||Rt.envMap!==Tt||X.fog===!0&&Rt.fog!==ot||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==st.numPlanes||Rt.numIntersection!==st.numIntersection)||Rt.vertexAlphas!==Bt||Rt.vertexTangents!==kt||Rt.morphTargets!==At||Rt.morphNormals!==Kt||Rt.morphColors!==se||Rt.toneMapping!==oe||Rt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Rt.__version=X.version);let Ge=Rt.currentProgram;Jt===!0&&(Ge=rr(X,k,H));let ti=!1,Le=!1,Ii=!1;const ae=Ge.getUniforms(),Ze=Rt.uniforms;if(xt.useProgram(Ge.program)&&(ti=!0,Le=!0,Ii=!0),X.id!==E&&(E=X.id,Le=!0),ti||v!==y){xt.buffers.depth.getReversed()?(K.copy(y.projectionMatrix),su(K),ou(K),ae.setValue(N,"projectionMatrix",K)):ae.setValue(N,"projectionMatrix",y.projectionMatrix),ae.setValue(N,"viewMatrix",y.matrixWorldInverse);const vn=ae.map.cameraPosition;vn!==void 0&&vn.setValue(N,lt.setFromMatrixPosition(y.matrixWorld)),It.logarithmicDepthBuffer&&ae.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ae.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Le=!0,Ii=!0)}if(H.isSkinnedMesh){ae.setOptional(N,H,"bindMatrix"),ae.setOptional(N,H,"bindMatrixInverse");const Be=H.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ae.setValue(N,"boneTexture",Be.boneTexture,w))}H.isBatchedMesh&&(ae.setOptional(N,H,"batchingTexture"),ae.setValue(N,"batchingTexture",H._matricesTexture,w),ae.setOptional(N,H,"batchingIdTexture"),ae.setValue(N,"batchingIdTexture",H._indirectTexture,w),ae.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&ae.setValue(N,"batchingColorTexture",H._colorsTexture,w));const Di=W.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&Ot.update(H,W,Ge),(Le||Rt.receiveShadow!==H.receiveShadow)&&(Rt.receiveShadow=H.receiveShadow,ae.setValue(N,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ze.envMap.value=Tt,Ze.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Ze.envMapIntensity.value=k.environmentIntensity),Le&&(ae.setValue(N,"toneMappingExposure",M.toneMappingExposure),Rt.needsLights&&pc(Ze,Ii),ot&&X.fog===!0&&pt.refreshFogUniforms(Ze,ot),pt.refreshMaterialUniforms(Ze,X,Y,et,d.state.transmissionRenderTarget[y.id]),Fr.upload(N,ia(Rt),Ze,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Fr.upload(N,ia(Rt),Ze,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ae.setValue(N,"center",H.center),ae.setValue(N,"modelViewMatrix",H.modelViewMatrix),ae.setValue(N,"normalMatrix",H.normalMatrix),ae.setValue(N,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let vn=0,Mn=Be.length;vn<Mn;vn++){const sa=Be[vn];z.update(sa,Ge),z.bind(sa,Ge)}}return Ge}function pc(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function mc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,k,W){Et.get(y.texture).__webglTexture=k,Et.get(y.depthTexture).__webglTexture=W;const X=Et.get(y);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,k){const W=Et.get(y);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,W=0){L=y,A=k,C=W;let X=!0,H=null,ot=!1,gt=!1;if(y){const Tt=Et.get(y);if(Tt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(Tt.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(Tt.__hasExternalTextures)w.rebindTextures(y,Et.get(y.texture).__webglTexture,Et.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const At=y.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&Et.has(At)&&(y.width!==At.image.width||y.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);const kt=Et.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?H=kt[k][W]:H=kt[k],ot=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?H=Et.get(y).__webglMultisampledFramebuffer:Array.isArray(kt)?H=kt[W]:H=kt,P.copy(y.viewport),D.copy(y.scissor),B=y.scissorTest}else P.copy(it).multiplyScalar(Y).floor(),D.copy(S).multiplyScalar(Y).floor(),B=I;if(xt.bindFramebuffer(N.FRAMEBUFFER,H)&&X&&xt.drawBuffers(y,H),xt.viewport(P),xt.scissor(D),xt.setScissorTest(B),ot){const Tt=Et.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,W)}else if(gt){const Tt=Et.get(y.texture),Bt=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,W||0,Bt)}E=-1},this.readRenderTargetPixels=function(y,k,W,X,H,ot,gt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Et.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(bt=bt[gt]),bt){xt.bindFramebuffer(N.FRAMEBUFFER,bt);try{const Tt=y.texture,Bt=Tt.format,kt=Tt.type;if(!It.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-X&&W>=0&&W<=y.height-H&&N.readPixels(k,W,X,H,Gt.convert(Bt),Gt.convert(kt),ot)}finally{const Tt=L!==null?Et.get(L).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(y,k,W,X,H,ot,gt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Et.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(bt=bt[gt]),bt){const Tt=y.texture,Bt=Tt.format,kt=Tt.type;if(!It.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=y.width-X&&W>=0&&W<=y.height-H){xt.bindFramebuffer(N.FRAMEBUFFER,bt);const At=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,At),N.bufferData(N.PIXEL_PACK_BUFFER,ot.byteLength,N.STREAM_READ),N.readPixels(k,W,X,H,Gt.convert(Bt),Gt.convert(kt),0);const Kt=L!==null?Et.get(L).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,Kt);const se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ru(N,se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,At),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ot),N.deleteBuffer(At),N.deleteSync(se),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,k=null,W=0){y.isTexture!==!0&&(Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1]);const X=Math.pow(2,-W),H=Math.floor(y.image.width*X),ot=Math.floor(y.image.height*X),gt=k!==null?k.x:0,bt=k!==null?k.y:0;w.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,gt,bt,H,ot),xt.unbindTexture()},this.copyTextureToTexture=function(y,k,W=null,X=null,H=0){y.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,y=arguments[1],k=arguments[2],H=arguments[3]||0,W=null);let ot,gt,bt,Tt,Bt,kt,At,Kt,se;const oe=y.isCompressedTexture?y.mipmaps[H]:y.image;W!==null?(ot=W.max.x-W.min.x,gt=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Bt=W.min.y,kt=W.isBox3?W.min.z:0):(ot=oe.width,gt=oe.height,bt=oe.depth||1,Tt=0,Bt=0,kt=0),X!==null?(At=X.x,Kt=X.y,se=X.z):(At=0,Kt=0,se=0);const Re=Gt.convert(k.format),Zt=Gt.convert(k.type);let Rt;k.isData3DTexture?(w.setTexture3D(k,0),Rt=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),Rt=N.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),Rt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const sn=N.getParameter(N.UNPACK_ROW_LENGTH),Jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ge=N.getParameter(N.UNPACK_SKIP_PIXELS),ti=N.getParameter(N.UNPACK_SKIP_ROWS),Le=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,oe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kt);const Ii=y.isDataArrayTexture||y.isData3DTexture,ae=k.isDataArrayTexture||k.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Ze=Et.get(y),Di=Et.get(k),Be=Et.get(Ze.__renderTarget),vn=Et.get(Di.__renderTarget);xt.bindFramebuffer(N.READ_FRAMEBUFFER,Be.__webglFramebuffer),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Mn=0;Mn<bt;Mn++)Ii&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(y).__webglTexture,H,kt+Mn),y.isDepthTexture?(ae&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(k).__webglTexture,H,se+Mn),N.blitFramebuffer(Tt,Bt,ot,gt,At,Kt,ot,gt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ae?N.copyTexSubImage3D(Rt,H,At,Kt,se+Mn,Tt,Bt,ot,gt):N.copyTexSubImage2D(Rt,H,At,Kt,se+Mn,Tt,Bt,ot,gt);xt.bindFramebuffer(N.READ_FRAMEBUFFER,null),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ae?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Rt,H,At,Kt,se,ot,gt,bt,Re,Zt,oe.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Rt,H,At,Kt,se,ot,gt,bt,Re,oe.data):N.texSubImage3D(Rt,H,At,Kt,se,ot,gt,bt,Re,Zt,oe):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,At,Kt,ot,gt,Re,Zt,oe.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,At,Kt,oe.width,oe.height,Re,oe.data):N.texSubImage2D(N.TEXTURE_2D,H,At,Kt,ot,gt,Re,Zt,oe);N.pixelStorei(N.UNPACK_ROW_LENGTH,sn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,ti),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le),H===0&&k.generateMipmaps&&N.generateMipmap(Rt),xt.unbindTexture()},this.copyTextureToTexture3D=function(y,k,W=null,X=null,H=0){return y.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,y=arguments[2],k=arguments[3],H=arguments[4]||0),Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,k,W,X,H)},this.initRenderTarget=function(y){Et.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),xt.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,xt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Kl extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oe,this.environmentIntensity=1,this.environmentRotation=new Oe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _m extends Ee{constructor(t=null,e=1,i=1,r,s,o,a,l,u=Fe,c=Fe,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eo extends Ae{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const mi=new jt,nl=new jt,wr=[],il=new Zn,xm=new jt,zi=new te,ki=new Pi;class Ho extends te{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Eo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,xm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,mi),il.copy(t.boundingBox).applyMatrix4(mi),this.boundingBox.union(il)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,mi),ki.copy(t.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(ki)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(zi.geometry=this.geometry,zi.material=this.material,zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ki.copy(this.boundingSphere),ki.applyMatrix4(i),t.ray.intersectsSphere(ki)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mi),nl.multiplyMatrices(i,mi),zi.matrixWorld=nl,zi.raycast(t,wr);for(let o=0,a=wr.length;o<a;o++){const l=wr[o];l.instanceId=s,l.object=this,e.push(l)}wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new _m(new Float32Array(r*this.count),r,this.count,Uo,tn));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vm extends Jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rl=new jt,bo=new Nl,Rr=new Pi,Cr=new O;class Mm extends ge{constructor(t=new we,e=new vm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),Rr.radius+=s,t.ray.intersectsSphere(Rr)===!1)return;rl.copy(r).invert(),bo.copy(t.ray).applyMatrix4(rl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=u.getX(g);Cr.fromBufferAttribute(f,m),sl(Cr,m,l,r,t,e,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p;g<_;g++)Cr.fromBufferAttribute(f,g),sl(Cr,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sl(n,t,e,i,r,s,o){const a=bo.distanceSqToPoint(n);if(a<e){const l=new O;bo.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Go extends Ee{constructor(t,e,i,r,s,o,a,l,u){super(t,e,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $r extends we{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],p=[];let g=0;const _=[],m=i/2;let d=0;b(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(c),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(p,2));function b(){const M=new O,F=new O;let A=0;const C=(e-t)/i;for(let L=0;L<=s;L++){const E=[],v=L/s,P=v*(e-t)+t;for(let D=0;D<=r;D++){const B=D/r,q=B*l+a,j=Math.sin(q),Z=Math.cos(q);F.x=P*j,F.y=-v*i+m,F.z=P*Z,f.push(F.x,F.y,F.z),M.set(j,C,Z).normalize(),h.push(M.x,M.y,M.z),p.push(B,1-v),E.push(g++)}_.push(E)}for(let L=0;L<r;L++)for(let E=0;E<s;E++){const v=_[E][L],P=_[E+1][L],D=_[E+1][L+1],B=_[E][L+1];(t>0||E!==0)&&(c.push(v,P,B),A+=3),(e>0||E!==s-1)&&(c.push(P,D,B),A+=3)}u.addGroup(d,A,0),d+=A}function T(M){const F=g,A=new $t,C=new O;let L=0;const E=M===!0?t:e,v=M===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,m*v,0),h.push(0,v,0),p.push(.5,.5),g++;const P=g;for(let D=0;D<=r;D++){const q=D/r*l+a,j=Math.cos(q),Z=Math.sin(q);C.x=E*Z,C.y=m*v,C.z=E*j,f.push(C.x,C.y,C.z),h.push(0,v,0),A.x=j*.5+.5,A.y=Z*.5*v+.5,p.push(A.x,A.y),g++}for(let D=0;D<r;D++){const B=F+D,q=P+D;M===!0?c.push(q,q+1,B):c.push(q+1,q,B),L+=3}u.addGroup(d,L,M===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vo extends $r{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Vo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tr extends we{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new O,h=new O,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const b=[],T=d/i;let M=0;d===0&&o===0?M=.5/e:d===i&&l===Math.PI&&(M=-.5/e);for(let F=0;F<=e;F++){const A=F/e;f.x=-t*Math.cos(r+A*s)*Math.sin(o+T*a),f.y=t*Math.cos(o+T*a),f.z=t*Math.sin(r+A*s)*Math.sin(o+T*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(A+M,1-T),b.push(u++)}c.push(b)}for(let d=0;d<i;d++)for(let b=0;b<e;b++){const T=c[d][b+1],M=c[d][b],F=c[d+1][b],A=c[d+1][b+1];(d!==0||o>0)&&p.push(T,M,A),(d!==i-1||l<Math.PI)&&p.push(M,F,A)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wo extends we{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new O,f=new O,h=new O;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),h.subVectors(f,c).normalize(),l.push(h.x,h.y,h.z),u.push(g/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,b=(r+1)*p+g;o.push(_,m,b),o.push(m,d,b)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ji extends Jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sm extends Jn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xo extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ym extends Xo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Rs=new jt,ol=new O,al=new O;class Zl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(al),e.updateMatrixWorld(),Rs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ll=new jt,Hi=new O,Cs=new O;class Em extends Zl{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $t(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Hi.setFromMatrixPosition(t.matrixWorld),i.position.copy(Hi),Cs.copy(i.position),Cs.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Cs),i.updateMatrixWorld(),r.makeTranslation(-Hi.x,-Hi.y,-Hi.z),ll.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll)}}class qo extends Xo{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Em}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bm extends Zl{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tm extends Xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new bm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);class Am extends Kl{constructor(){super();const t=new xn;t.deleteAttribute("uv");const e=new ji({side:ye}),i=new ji,r=new qo(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new te(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new te(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new te(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new te(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const u=new te(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);const c=new te(t,i);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const f=new te(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const h=new te(t,gi(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new te(t,gi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new te(t,gi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new te(t,gi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new te(t,gi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new te(t,gi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function gi(n){const t=new Dn;return t.color.setScalar(n),t}function Un(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function _e(n,t=4,e=4){const i=Un(n),r=[];for(let f=0;f<e;f++){const h=t<<f,p=new Float32Array(h*h);for(let g=0;g<p.length;g++)p[g]=i();r.push({P:h,g:p})}const s=4096,o=new Map,a=new Map;function l(f,h,p){let g=f.get(h);if(g)return g;g=new Float64Array(r.length*3);for(let _=0;_<r.length;_++){const m=r[_].P,d=h*m,b=Math.floor(d),T=d-b,M=(b%m+m)%m,F=(M+1)%m,A=_*3;g[A]=p?M*m:M,g[A+1]=p?F*m:F,g[A+2]=T*T*(3-2*T)}return f.size>=s&&f.delete(f.keys().next().value),f.set(h,g),g}let u=0,c=.5;for(let f=0;f<r.length;f++)u+=c,c*=.5;return(f,h)=>{const p=l(o,f,!1),g=l(a,h,!0);let _=0,m=.5;for(let d=0;d<r.length;d++){const b=r[d].g,T=d*3,M=p[T],F=p[T+1],A=p[T+2],C=g[T],L=g[T+1],E=g[T+2],v=b[C+M],P=b[C+F],D=b[L+M],B=b[L+F];_+=m*(v+(P-v)*A+(D-v)*E+(v-P-D+B)*A*E),m*=.5}return _/u}}function Ke(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}function nn(n,t=!0,e=!0){const i=new Go(n);return t&&(i.colorSpace=Te),e&&(i.wrapS=i.wrapT=zr),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=Cn,i}function Nn(n,t){const e=n.getContext("2d"),i=e.createImageData(n.width,n.height),r=i.data,s=[0,0,0];for(let o=0;o<n.height;o++)for(let a=0;a<n.width;a++){t(a/n.width,o/n.height,s,a,o);const l=(o*n.width+a)*4;r[l]=s[0],r[l+1]=s[1],r[l+2]=s[2],r[l+3]=255}return e.putImageData(i,0,0),e}const $e=(n,t=0,e=255)=>n<t?t:n>e?e:n;function Ps(n,t,e,i={}){const r=i.size||512,s=Ke(r,r),o=_e(n,2,4),a=_e(n+7,8,3),l=_e(n+13,3,4),u=i.rings||9;return Nn(s,(c,f,h)=>{const p=o(c*.5,f)*3;let g=Math.sin((f*u+p)*Math.PI*2);g=Math.pow(Math.abs(g),.35);const _=a(c*.25,f*8),m=a(c*2,f*32%1);let d=.55*g+.3*_+.15*m;d=d*(.85+.3*l(c,f));for(let b=0;b<3;b++)h[b]=$e(e[b]+(t[b]-e[b])*d)}),nn(s)}function wm(n){const e=Ke(1024,1024),i=Un(n),r=8,s=[];for(let f=0;f<r;f++)s.push({off:i(),tone:.78+i()*.35,hue:i(),len:.45+i()*.3});const o=_e(n+3,2,4),a=_e(n+9,8,3),l=_e(n+11,3,4),u=[150,98,58],c=[78,46,24];return Nn(e,(f,h,p)=>{const g=Math.floor(h*r),_=s[g],m=h*r-g,d=(f+_.off)%1,b=Math.floor(d/_.len*2),T=d/_.len*2%1,M=_.tone*(b%2?.92:1.04)*(.96+.08*Math.sin(b*12.9+g)),F=o(f,h*.5+g*.13)*2.5;let A=Math.abs(Math.sin((m*3+F+b)*Math.PI*2));A=Math.pow(A,.4);const C=a(f*.5,h*4);let L=(.55*A+.45*C)*M;const E=l(f,h);L*=.9+.2*E;let v=Math.min(m,1-m)*64,P=Math.min(T,1-T)*260;const D=Math.min(1,v,P);for(let B=0;B<3;B++)p[B]=$e((c[B]+(u[B]-c[B])*L)*(.25+.75*D)+(_.hue-.5)*(B===0?12:B===1?6:0))}),nn(e)}function cl(n,t){const i=Ke(512,512),r=_e(n,4,5),s=_e(n+1,16,2);return Nn(i,(o,a,l)=>{const u=r(o,a),c=s(o,a),f=.88+.16*u+.05*c;l[0]=$e(t[0]*f),l[1]=$e(t[1]*f),l[2]=$e(t[2]*(f-.02))}),nn(i)}function Rm(n){const e=Ke(512,512),i=_e(n,6,5),r=_e(n+4,24,2);return Nn(e,(s,o,a)=>{const l=Math.floor(o*4),u=(s+l%2*.5)%1,c=o*4-l,f=u*2-Math.floor(u*2),h=Math.min(1,Math.min(c,1-c)*40,Math.min(f,1-f)*60),p=(.8+.25*i(s,o)+.08*r(s,o))*(.55+.45*h);a[0]=$e(196*p),a[1]=$e(178*p),a[2]=$e(150*p)}),nn(e)}function ul(n,t){const i=Ke(512,512),r=_e(n,64,2),s=_e(n+2,8,4),o=_e(n+5,3,4);return Nn(i,(a,l,u)=>{const c=r(a,l),h=Math.abs(s(a,l)-.5)<.015?.7:1,p=Math.max(0,o(a,l)-.52)*3.2,g=(.82+.3*c)*h;for(let _=0;_<3;_++){const m=t[_]+(_===0?70:_===1?52:36);u[_]=$e((t[_]*(1-p)+m*p)*g)}}),nn(i)}function Ls(n,t,e){const r=Ke(256,256),s=_e(n,8,3);return Nn(r,(o,a,l,u,c)=>{const f=((u+c)%4<2?1:.92)*(u%2?1:.96),h=e&&Math.sin(o*Math.PI*2*6)>.6?.82:1,p=f*h*(.9+.15*s(o,a));for(let g=0;g<3;g++)l[g]=$e(t[g]*p)}),nn(r)}function Cm(n){const i=Ke(512,768),r=i.getContext("2d");r.fillStyle="#7a2a22",r.fillRect(0,0,512,768);const s=(f,h,p)=>{r.strokeStyle=p,r.lineWidth=h,r.strokeRect(f,f,512-f*2,768-f*2)};s(14,22,"#2a2440"),s(34,6,"#c9a46a"),s(52,26,"#3c4a5c"),s(70,5,"#c9a46a"),r.fillStyle="#d2b07a";for(let f=0;f<26;f++){const h=f/26,p=[[h*512,52],[460,h*768],[512-h*512,716],[52,768-h*768]];for(const[g,_]of p)r.save(),r.translate(g,_),r.rotate(Math.PI/4),r.fillRect(-5,-5,10,10),r.restore()}for(let f=110;f<668;f+=48)for(let h=110;h<412;h+=48)r.fillStyle=(h+f)%96===0?"#2f3a52":"#a8742f",r.save(),r.translate(h,f),r.rotate(Math.PI/4),r.fillRect(-7,-7,14,14),r.restore(),r.fillStyle="#e0c590",r.fillRect(h-2,f-2,4,4);r.save(),r.translate(512/2,768/2);const o=[[150,"#2a2440"],[130,"#c9a46a"],[118,"#3c4a5c"],[86,"#8e3a2a"],[60,"#d8bd85"],[36,"#2a2440"]];for(const[f,h]of o)r.fillStyle=h,r.beginPath(),r.ellipse(0,0,f*.75,f,0,0,Math.PI*2),r.fill();r.restore();const a=r.getImageData(0,0,512,768),l=_e(n+3,4,4),u=_e(n+5,64,1);for(let f=0;f<768;f++)for(let h=0;h<512;h++){const p=(f*512+h)*4,g=.78+.28*l(h/512,f/768)+.08*u(h/512,f/768),_=Math.max(0,l(h/512+.3,f/768)-.58)*1.6;for(let m=0;m<3;m++)a.data[p+m]=$e(a.data[p+m]*g*(1-_)+150*_)}return r.putImageData(a,0,0),nn(i,!0,!1)}function Pm(n){const i=Ke(512,256),r=i.getContext("2d"),s=Un(n),o=_e(n,16,3);Nn(i,(u,c,f)=>{const h=200+40*o(u,c);f[0]=f[1]=f[2]=h});const a="#d9a94a",l=32;for(let u=0;u<8;u++){const c=u*l;r.save(),r.beginPath(),r.rect(c,0,l,256),r.clip();const f=r.createLinearGradient(c,0,c+l,0);if(f.addColorStop(0,"rgba(0,0,0,0.35)"),f.addColorStop(.2,"rgba(0,0,0,0)"),f.addColorStop(.8,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(0,0,0,0.35)"),r.fillStyle=f,r.fillRect(c,0,l,256),r.fillStyle=a,u===0&&(r.fillRect(c,14,l,2),r.fillRect(c,240,l,2)),u===1){for(const h of[40,90,140,190])r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(c,h,l,6),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(c,h,l,2);r.fillStyle="#2a1a14",r.fillRect(c+3,52,l-6,30),r.fillStyle=a;for(let h=0;h<3;h++)r.fillRect(c+7,60+h*7,l-14-s()*6,2)}if(u===2){for(let h=0;h<6;h++)r.fillRect(c+8,50+h*9,l-16-s()*8,3);r.fillRect(c,226,l,6)}if(u===3){r.fillStyle="rgba(0,0,0,0.5)",r.fillRect(c,0,l,34),r.fillRect(c,222,l,34),r.fillStyle=a,r.fillRect(c,34,l,2),r.fillRect(c,220,l,2);for(let h=0;h<4;h++)r.fillRect(c+9,80+h*8,l-18,2)}if(u===4){r.fillStyle="rgba(255,255,255,0.25)",r.fillRect(c,0,l,256),r.fillStyle="rgba(20,20,20,0.75)";for(let h=0;h<10;h++)r.fillRect(c+12,40+h*12,3+s()*4,7)}if(u===5){for(const h of[8,16,24,230,238,246])r.fillRect(c,h,l,2);for(let h=0;h<5;h++)r.beginPath(),r.arc(c+l/2,60+h*30,3,0,Math.PI*2),r.fill();r.fillStyle="#1d1d1d",r.fillRect(c+4,34,l-8,18),r.fillStyle=a,r.fillRect(c+8,41,l-16,3)}if(u===6){r.fillStyle="rgba(255,255,255,0.3)";for(let h=0;h<40;h++)r.fillRect(c+s()*l,s()<.5?s()*30:256-s()*30,2+s()*4,1+s()*2);r.fillStyle=a,r.fillRect(c+10,70,l-20,3)}u===7&&(r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(c,20,l,10),r.fillRect(c,226,l,10),r.fillStyle="rgba(240,235,220,1)",r.fillRect(c+5,60,l-10,34),r.fillStyle="rgba(40,30,20,0.8)",r.fillRect(c+8,70,l-16,2),r.fillRect(c+8,78,l-18,2)),r.restore()}for(let u=256;u<384;u++){const c=215+(Math.sin(u*2.7)*.5+.5)*30*s();r.fillStyle=`rgb(${c},${c},${c-4})`,r.fillRect(u,0,1,256)}return nn(i,!0,!1)}function Lm(n){const e=Ke(512,512),i=e.getContext("2d"),r=Un(n);return[["#d8b27a","#8a6a4a","#4b5a3a","#2e3a2a"],["#9fb3c0","#6a7a6a","#3e4a3a","#22281e"],["#e8c28a","#b07a4a","#5a3a2a","#2a1e18"],["#7a8aa0","#5a6058","#3a3a30","#1e1e18"]].forEach((o,a)=>{const l=a%2*256,u=Math.floor(a/2)*256,c=i.createLinearGradient(0,u,0,u+256);c.addColorStop(0,o[0]),c.addColorStop(.55,o[1]),c.addColorStop(1,o[3]),i.fillStyle=c,i.fillRect(l,u,256,256);for(let h=0;h<3;h++){i.fillStyle=o[1+h],i.beginPath(),i.moveTo(l,u+256);const p=120+h*45;for(let g=0;g<=16;g++)i.lineTo(l+g*16,u+p+Math.sin(g*.7+h*2+a)*18+r()*10);i.lineTo(l+256,u+256),i.fill()}a===2&&(i.fillStyle="rgba(255,230,170,0.8)",i.beginPath(),i.arc(l+180,u+90,18,0,7),i.fill());const f=i.createRadialGradient(l+128,u+128,40,l+128,u+128,190);f.addColorStop(0,"rgba(60,40,10,0)"),f.addColorStop(1,"rgba(40,25,5,0.55)"),i.fillStyle=f,i.fillRect(l,u,256,256)}),nn(e,!0,!1)}function Im(n){const i=Ke(512,256),r=_e(n,4,5);return Nn(i,(s,o,a)=>{const l=r(s,o*.5+.2)>.53,u=Math.abs(o-.5),c=Math.abs(s*24%1)<.03||Math.abs(o*12%1)<.04?.82:1;l?(a[0]=196*c,a[1]=168*c,a[2]=112*c):(a[0]=(150-u*60)*c,a[1]=(140-u*40)*c,a[2]=(100-u*20)*c)}),nn(i,!0,!1)}function Dm(){const n=Ke(64,64),t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Go(n)}function Jl(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new we;let u=0;for(let c=0;c<n.length;++c){const f=n[c];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(e){let c=0;const f=[];for(let h=0;h<n.length;++h){const p=n[h].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+c);c+=n[h].attributes.position.count}l.setIndex(f)}for(const c in s){const f=hl(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in o){const f=o[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let h=0;h<f;++h){const p=[];for(let _=0;_<o[c].length;++_)p.push(o[c][_][h]);const g=hl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function hl(n){let t,e,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*e}const o=new t(s),a=new Ae(o,e,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const f=l/e;for(let h=0,p=c.count;h<p;h++)for(let g=0;g<e;g++){const _=c.getComponent(h,g);a.setComponent(h+f,g,_)}}else o.set(c.array,l);l+=c.count*e}return r!==void 0&&(a.gpuType=r),a}const fl=new Oe,dl=new _n;function Ql(n,t,e,i,r){const s=new xn(n,t,e),o=s.attributes.uv,a=r(),l=r(),u=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let c=0;c<6;c++){const[f,h]=u[c],p=h>f;for(let g=0;g<4;g++){const _=c*4+g;let m=o.getX(_)*f,d=o.getY(_)*h;if(p){const b=m;m=d,d=b}o.setXY(_,m/i+a,d/i+l)}}return s}class Um{constructor(t){this.rand=t,this.batches=new Map,this.solids=[]}add(t,e){this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(e)}frame(t,e,i,r=0){return new jr(this,new jt().makeRotationY(r).setPosition(t,e,i))}finish(t){for(const[e,i]of this.batches){for(const o of i)for(const a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);const r=Jl(i,!1),s=new te(r,e);s.castShadow=!e.userData.noShadow,s.receiveShadow=!0,s.matrixAutoUpdate=!1,t.add(s);for(const o of i)o.dispose()}this.batches.clear()}}class jr{constructor(t,e){this.b=t,this.m=e}sub(t,e,i,r=0){return new jr(this.b,this.m.clone().multiply(new jt().makeRotationY(r).setPosition(t,e,i)))}local(t,e,i,r=0,s=0,o=0){return fl.set(r,s,o),dl.setFromEuler(fl),new jt().compose(new O(t,e,i),dl,new O(1,1,1)).premultiply(this.m)}geo(t,e,i,r,s,o,a,l){e.applyMatrix4(this.local(i,r,s,o,a,l)),this.b.add(t,e)}box(t,e,i,r,s,o,a,l=0,u=0,c=0){this.geo(t,Ql(e,i,r,t.userData.ts||1,this.b.rand),s,o,a,l,u,c)}cyl(t,e,i,r,s,o,a,l=12,u=0,c=0,f=0,h=!1,p,g){const _=new $r(e,i,r,l,1,h,p||0,g||Math.PI*2),m=t.userData.ts||1,d=_.attributes.uv,b=Math.PI*2*Math.max(e,i);for(let T=0;T<d.count;T++)d.setXY(T,d.getY(T)*r/m,d.getX(T)*b/m);this.geo(t,_,s,o,a,u,c,f)}sphere(t,e,i,r,s,o=1,a=1,l=1,u=12,c=8){const f=new tr(e,u,c);f.scale(o,a,l),this.geo(t,f,i,r,s)}torus(t,e,i,r,s,o,a=0,l=0,u=0,c=32){this.geo(t,new Wo(e,i,6,c),r,s,o,a,l,u)}plane(t,e,i,r,s,o,a=0,l=0,u=0,c=null){const f=new pn(e,i);if(c){const h=f.attributes.uv;for(let p=0;p<h.count;p++)h.setXY(p,c[0]+h.getX(p)*c[2],c[1]+h.getY(p)*c[3])}this.geo(t,f,r,s,o,a,l,u)}solid(t,e,i,r,s,o){const a=this.local(r,s,o),l=new O,u=new O(1/0,1/0,1/0),c=new O(-1/0,-1/0,-1/0);for(let f=0;f<8;f++)l.set((f&1?.5:-.5)*t,(f&2?.5:-.5)*e,(f&4?.5:-.5)*i).applyMatrix4(a),u.min(l),c.max(l);this.b.solids.push({x0:u.x,x1:c.x,y0:u.y,y1:c.y,z0:u.z,z1:c.z})}sbox(t,e,i,r,s,o,a){this.box(t,e,i,r,s,o,a),this.solid(e,i,r,s,o,a)}}function Nm(){const n=(c,f)=>{const h=new ji(c);return h.userData.ts=f||1,h},t=Ps(1,[118,70,38],[48,26,12],{rings:16}),e=Ps(2,[184,124,70],[104,62,30],{rings:15}),i=Ps(3,[84,50,30],[34,18,10],{rings:11}),r=wm(4),s=cl(5,[232,214,184]),o=cl(6,[150,158,124]),a=ul(7,[100,34,22]),l=ul(8,[92,56,30]),u=Rm(9);return{walnut:n({map:t,bumpMap:t,bumpScale:.6,roughness:.6,color:16777215},1.3),oak:n({map:e,bumpMap:e,bumpScale:.5,roughness:.48},1.6),dark:n({map:i,bumpMap:i,bumpScale:.5,roughness:.55},1.2),floor:n({map:r,bumpMap:r,bumpScale:1.2,roughness:.42},1.9),plaster:n({map:s,bumpMap:s,bumpScale:1.5,roughness:.94},3),sage:n({map:o,bumpMap:o,bumpScale:1.5,roughness:.92},2.5),ceil:n({map:s,roughness:.95,color:15919320},4),leather:n({map:a,bumpMap:a,bumpScale:1.2,roughness:.5},.9),leather2:n({map:l,bumpMap:l,bumpScale:1.2,roughness:.55},.9),stone:n({map:u,bumpMap:u,bumpScale:2,roughness:.88},1.4),iron:n({color:1841946,metalness:.75,roughness:.48}),brass:n({color:11831880,metalness:1,roughness:.32}),gilt:n({color:10122294,metalness:.8,roughness:.42}),soot:n({color:920587,roughness:1}),cushion:n({map:Ls(10,[150,128,92],!0),roughness:.95},.5),cushion2:n({map:Ls(11,[70,88,70],!1),roughness:.95},.4),runner:n({map:Ls(12,[118,34,28],!0),roughness:.95},.6),paper:n({color:15129280,roughness:.9}),ceramic:n({color:15525590,roughness:.25}),terracotta:n({color:10246714,roughness:.85}),plant:n({color:4086828,roughness:.75,side:Ne}),greenGlass:n({color:1993264,emissive:3971642,emissiveIntensity:.55,roughness:.15,metalness:.1,side:Ne}),shade:n({color:15390376,emissive:16757865,emissiveIntensity:.9,roughness:.9,side:Ne}),flame:Object.assign(new Dn({color:new Ut(2.4,1.6,.7)}),{userData:{noShadow:!0}}),ember:Object.assign(new Dn({color:new Ut(2.2,.7,.2)}),{userData:{noShadow:!0}}),rug:n({map:Cm(13),roughness:1}),painting:n({map:Lm(14),roughness:.55}),globe:n({map:Im(15),roughness:.4})}}const To={H:10.5,GY:4.2},ct=.012;function Fm(n,t,e){const i=new Um(e),r=i.frame(0,0,0,0),s=To.H,o=To.GY,a=[],l=[],u=[],c=e;function f(S,I,R,U,G,K,at,lt,ut){const Lt=[I,R];for(const Ct of lt)Lt.push(Ct[0],Ct[1]);const Nt=[...new Set(Lt)].sort((Ct,N)=>Ct-N);for(let Ct=0;Ct<Nt.length-1;Ct++){const N=Nt[Ct],Wt=Nt[Ct+1],Pt=lt.filter(Ft=>Ft[0]<=N&&Ft[1]>=Wt).sort((Ft,Et)=>Ft[2]-Et[2]);let It=K;const xt=(Ft,Et)=>{Et-Ft<.001||(S==="x"?r.sbox(ut,G-U,Et-Ft,Wt-N,(U+G)/2,(Ft+Et)/2,(N+Wt)/2):r.sbox(ut,Wt-N,Et-Ft,G-U,(N+Wt)/2,(Ft+Et)/2,(U+G)/2))};for(const Ft of Pt)xt(It,Ft[2]),It=Ft[3];xt(It,at)}}r.sbox(n.floor,14,.3,19,0,-.15,-.5),r.box(n.ceil,15,.3,20,0,s+.15,-.5),f("z",-7.5,7.5,-10.5,-10,0,s,[],n.plaster),f("x",-10.5,9.5,7,7.5,0,s,[],n.plaster),f("z",-7.5,7.5,9,9.5,0,s,[[-5,-3,4.5,8.3],[2.6,4.6,4.5,8.3]],n.plaster),f("x",-10.5,9.5,-7.5,-7,0,s,[[-5.6,-3.6,.9,7.2],[-1.6,.4,.9,7.2],[2.4,7.4,0,3.4],[3.2,6.6,5,8]],n.plaster),r.sbox(n.floor,4.5,.3,5,-9.25,-.15,4.9),r.box(n.ceil,5,.3,6,-9.5,3.75,4.9),r.box(n.plaster,5.4,.3,6.6,-9.75,4.05,4.9),f("z",-12,-7.5,1.9,2.4,0,3.6,[[-10.4,-8.6,.9,2.9]],n.sage),f("z",-12,-7.5,7.4,7.9,0,3.6,[[-10.4,-8.6,.9,2.9]],n.sage),f("x",1.9,7.9,-12,-11.5,0,3.6,[[2.9,6.9,.6,3]],n.sage);const g=-7+ct;for(const S of[3.2,4.9,6.6])r.box(n.dark,4-2*ct,.18,.14,-9.5,3.6-.09-ct,S);r.box(n.oak,.3,.3,5.2,g+.15,3.45,4.9);function _(S,I,R,U,G=!0){const K=[e(),e()];function at(Ct,N,Wt){let Pt=0;return Ql(Ct,.05,N,n.oak.userData.ts,()=>K[Pt++]).translate(0,.025+ct,Wt)}const lt=[at(I+.3,.14,.07+ct),at(I-2*ct,U,-U/2+ct)];S.geo(n.oak,Jl(lt,!1),0,0,0);for(const Ct of lt)Ct.dispose();S.box(n.oak,.12+ct,R+.12,.06,-I/2-.06+ct/2,R/2,.03+ct),S.box(n.oak,.12+ct,R+.12,.06,I/2+.06-ct/2,R/2,.03+ct),S.box(n.oak,I+.36,.14+ct,.07,0,R+.07-ct/2,.035+ct);const ut=-U*.55;S.box(n.dark,I-2*ct,.07,.07,0,.06,ut),S.box(n.dark,I-2*ct,.07,.07,0,R-.035-ct,ut),S.box(n.dark,.07,R-2*ct,.07,-I/2+.035+ct,R/2,ut),S.box(n.dark,.07,R-2*ct,.07,I/2-.035-ct,R/2,ut);const Lt=Math.max(1,Math.round(I/.62));for(let Ct=1;Ct<Lt;Ct++)S.box(n.iron,.03,R,.035,-I/2+I*Ct/Lt,R/2,ut);const Nt=Math.max(1,Math.round(R/.55));for(let Ct=1;Ct<Nt;Ct++)S.box(Ct%4===0?n.dark:n.iron,I-2*ct,Ct%4===0?.06:.025,.035,0,R*Ct/Nt,ut);if(G){const Ct=[];for(const[N,Wt]of[[-I/2,0],[I/2,0],[I/2,R],[-I/2,R]])Ct.push(new O(N,Wt,ut).applyMatrix4(S.m));u.push(Ct)}}_(r.sub(-7,.9,-4.6,Math.PI/2),2,6.3,.5),_(r.sub(-7,.9,-.6,Math.PI/2),2,6.3,.5),_(r.sub(-7,5,4.9,Math.PI/2),3.4,3,.5),_(r.sub(-11.5,.6,4.9,Math.PI/2),4,2.4,.5),_(r.sub(-9.5,.9,7.4,Math.PI),1.8,2,.5),_(r.sub(-9.5,.9,2.4,0),1.8,2,.5,!1),_(r.sub(-4,4.5,9,Math.PI),2,3.8,.5),_(r.sub(3.6,4.5,9,Math.PI),2,3.8,.5);for(const S of[2.33,7.47])r.box(n.oak,.14,3.5+ct,.6,-7+.07+ct,(3.5-ct)/2,S);for(const S of[-4.6,-.6])r.box(n.dark,.04,.85,2,-6.98+ct,.45,S);r.box(n.dark,.05,1,2.2-ct,7-.025-ct,.5,7.85-ct/2),r.box(n.oak,.08,.06,2.3-ct,6.96-ct,1.02,7.85-ct/2);for(const[S,I,R,U]of[[14,.3,0,-9.85],[14,.3,0,8.85],[.3,19,-6.85,-.5],[.3,19,6.85,-.5]]){const G=R&&R-Math.sign(R)*ct,K=U===-.5?U:U-Math.sign(U)*ct;r.box(n.oak,S>1?S-2*ct:S,.22,I>1?I-2*ct:I,G,s-.11-ct,K),r.box(n.dark,S>1?S-2*ct:S+.1,.08,I>1?I-2*ct:I+.12,G-(R?Math.sign(R)*.05:0),s-.26,K-(U===-.5?0:Math.sign(U)*.06))}r.box(n.oak,.12,.1,19-2*ct,-6.94+ct,8.4,-.5),r.box(n.oak,14-2*ct,.1,.12,0,8.4,8.94-ct),r.box(n.oak,.12,.1,19-2*ct,6.94-ct,8.4,-.5);for(const S of[-4.6,-.6]){r.cyl(n.iron,.02,.02,2.9,-6.82,7.55,S,8,Math.PI/2,0,0);for(const I of[-1,1]){r.sphere(n.iron,.045,-6.82,7.55,S+I*1.45),r.box(n.iron,.12,.03,.03,-6.9,7.55,S+I*1.3);for(let R=0;R<4;R++)r.box(n.cushion2,.05+R%2*.03,4.85-R*.12,.05,-6.86+R%2*.03,5.08+R*.06,S+I*(1.04+R*.035),0,0,0);r.cyl(n.brass,.012,.012,.2,-6.8,3.4,S+I*1.1,6,Math.PI/2,0,0)}}for(const S of[-8.2,-4.6,-1,2.6,6.2]){r.box(n.dark,14-2*ct,.38,.3,0,9.85,S),r.box(n.dark,.24,.6,.24,0,10.2-ct,S);for(const I of[-1,1]){const R=(.2*Math.cos(.62)+1.4*Math.sin(.62))/2;r.box(n.dark,.2,1.4,.22,I*(7-ct-R),9.2,S,0,0,I*.62),r.box(n.iron,.36,.42,.32,I*3.4,9.85,S),r.box(n.dark,.25,.7,.32,I*(7-.125-ct),9.2,S)}}for(const S of[-3.4,3.4])r.box(n.dark,.2,.24,19-2*ct,S,10.25,-.5);r.sbox(n.floor,14,.35,3,0,o-.175,-8.5),r.sbox(n.floor,2.8,.35,5.8,5.6,o-.175,-4.1);for(let S=-6.6;S<4.2;S+=.9)r.box(n.dark,.12,.24,3-ct,S,o-.47,-8.5+ct/2);for(let S=-6.6;S<-1.2;S+=.9)r.box(n.dark,2.8-ct,.24,.12,5.6-ct/2,o-.47,S);r.box(n.oak,11.31-ct,.55,.24,-1.345+ct/2,o-.27,-6.9),r.box(n.oak,.24,.55,5.9,4.3,o-.27,-4.15),r.box(n.dark,11.31-ct,.06,.3,-1.345+ct/2,o-.02,-6.9),r.box(n.dark,.3,.06,5.9,4.3,o-.02,-4.15);const m=[[-4.6,-6.9,"x"],[-1.4,-6.9,"x"],[1.8,-6.9,"x"],[4.3,-6.9,"c"],[4.3,-4.1,"z"],[4.3,-1.35,"z"]];for(const[S,I,R]of m){r.cyl(n.iron,.07,.085,o-.55,S,(o-.55)/2,I,14),r.box(n.iron,.24,.16,.24,S,.08,I),r.box(n.iron,.26,.1,.26,S,o-.6,I),r.cyl(n.iron,.11,.07,.18,S,o-.75,I,14),r.solid(.26,o-.5,.26,S,(o-.5)/2,I);const U=R==="x"?[[1,0],[-1,0]]:R==="z"?[[0,1],[0,-1]]:[[-1,0],[0,1]];for(const[G,K]of U)r.box(n.iron,.04,.9,.04,S+G*.3,o-.88,I+K*.3,K*.72,0,-G*.72),r.torus(n.iron,.12,.012,S+G*.22,o-.75,I+K*.22,0,G?0:Math.PI/2,0,16)}function d(S,I,R,U,G,K=2.4,at){const lt=Math.hypot(R-S,U-I),ut=Math.atan2(-(U-I),R-S),Lt=r.sub(S,G,I,ut);Lt.box(n.oak,lt+.06,.07,.13,lt/2,1.02,0),Lt.box(n.iron,lt,.04,.05,lt/2,.97,0),Lt.box(n.iron,lt,.04,.05,lt/2,.1,0);const Nt=Math.round((at||lt)/.13);for(let Pt=1;Pt<Nt;Pt++){const It=lt*Pt/Nt;Lt.box(n.iron,.02,.86,.02,It,.53,0),Pt%3===0&&Lt.sphere(n.iron,.025,It,.45,0)}const Ct=Math.max(1,Math.round(lt/K));for(let Pt=0;Pt<=Ct;Pt++){const It=lt*Pt/Ct;Lt.box(n.oak,.11,1.12,.11,It,.56,0),Lt.sphere(n.oak,.065,It,1.16,0,1,.8,1)}const N=at?r.sub(-7,G,I,ut):Lt,Wt=at||lt;N.solid(Wt,1.1,.16,Wt/2,.55,0)}d(-7+.065+ct,-6.92,4.3,-6.92,o,2.4,11.3),d(4.3,-6.92,4.3,-1.25,o,1.9),r.box(n.oak,.08,.3,3-ct,-6.96+ct,o+.1,-8.5+ct/2);const b=o/24,T=.3,M=4.2,F=7,A=6.7,C=(M+F)/2,L=F-M,E=[];for(let S=1;S<=11;S++)E.push({y:S*b,z0:A-S*T,z1:A-(S-1)*T});E.push({y:12*b,z0:2.1,z1:3.4,landing:!0});for(let S=13;S<=23;S++)E.push({y:S*b,z0:2.1-(S-12)*T,z1:2.1-(S-13)*T});for(const S of E){const I=S.z1-S.z0,R=(S.z0+S.z1)/2;r.box(n.dark,L-ct,S.y-.045,I,C-ct/2,(S.y-.045)/2,R),r.box(n.oak,L+.03-ct,.045,I+.035,C-.015-ct/2,S.y-.0225,R+.0175),r.solid(L,S.y,I,C,S.y/2,R),r.box(n.runner,1.5,.012,I,C+.15,S.y+.006,R+.01),r.box(n.runner,1.5,b-.03,.012,C+.15,S.y-b/2-.02,S.z1+.007),r.cyl(n.brass,.008,.008,1.62,C+.15,S.y-b+.012,S.z1+.02,6,0,0,Math.PI/2);const U=S.landing?9:2;for(let G=0;G<U;G++){const K=S.z0+I*(G+.5)/U;r.box(n.iron,.022,.9,.022,M+.07,S.y+.45,K)}r.solid(.16,1.05,I,M+.07,S.y+.52,R)}const v=Math.atan(b/T),P=[[A,0,A-11*T,11*b],[2.1,12*b,-1.2,23*b]];for(const[S,I,R,U]of P){const G=Math.hypot(S-R,U-I),K=(S+R)/2,at=(I+U)/2;r.box(n.oak,.13,.07,G,M+.07,at+1,K,v,0,0),r.box(n.iron,.05,.04,G,M+.07,at+.95,K,v,0,0),r.box(n.oak,.07,.32,G+.2,M-.02,at+.02,K-.05,v,0,0)}r.box(n.oak,.13,.07,1.3,M+.07,12*b+1,2.75);for(const[S,I]of[[A-.12,0],[3.4,11*b],[2.1,12*b],[-1.25,o]])r.box(n.oak,.16,1.25,.16,M+.07,I+.62,S),r.box(n.oak,.2,.06,.2,M+.07,I+1.26,S),r.sphere(n.oak,.08,M+.07,I+1.35,S);r.solid(.2,1.25,.2,M+.07,.62,A-.12);function D(S,I,R,U,G={}){const K=Math.max(1,Math.round(I/(G.bay||.92))),at=I/K,lt=G.spacing||.38,ut=.14,Lt=Math.floor((R-ut-.12)/lt),Nt=(R-ut-.12)/Lt;S.box(n.dark,I,ut,U-.03,I/2,ut/2,-U/2-.015),S.box(n.walnut,I,R,.02,I/2,R/2,-U+.01);function Ct(N,Wt,Pt,It,xt,Ft){const Et=G.wallLeft?ct:-Wt/2,w=G.wallRight?I-ct:I+Wt/2;S.box(N,w-Et,Pt,It,(Et+w)/2,xt,Ft)}Ct(n.walnut,.06,.07,U+.05,R-.035,-U/2+.025),Ct(n.walnut,.12,.05,U+.09,R+.025,-U/2+.045),G.noCornice||Ct(n.dark,.02,.1,.03,R-.12,.01);for(let N=0;N<=K;N++){const Wt=Math.min(I-.02,Math.max(.02,N*at));S.box(n.walnut,.04,R-.07,U,Wt,(R-.07)/2,-U/2);const Pt=N===0&&G.wallLeft?.03+ct:N===K&&G.wallRight?I-.03-ct:Wt;S.box(n.dark,.06,R-.2,.015,Pt,R/2-.05,.005)}for(let N=0;N<K;N++){const Wt=N*at+.02,Pt=(N+1)*at-.02,It=(c()-.5)*.04;for(let xt=0;xt<=Lt;xt++){const Ft=ut+xt*Nt+(xt>0&&xt<Lt?It:0);if(xt>0&&xt<Lt+1&&S.box(n.walnut,Pt-Wt,.026,U-.025,(Wt+Pt)/2,Ft-.013,-U/2-.0125),xt<Lt){const w=ut+(xt+1)*Nt+(xt+1<Lt?It:0)-Ft-.026-.005,x=G.sparse?.8:.97;c()<x&&a.push({m:S.local(Wt+.005,Ft,-.012),len:Pt-Wt-.01,clear:w,d:U-.04})}}}G.solid!==!1&&S.solid(I,R+.05,U,I/2,R/2,-U/2)}D(r.sub(-7,0,-9.6,0),14,3.45,.4,{wallLeft:!0,wallRight:!0}),D(r.sub(-6.6,0,-5.75,Math.PI/2),3.85,3.45,.4),D(r.sub(6.6,0,-9.6,-Math.PI/2),8.4,3.45,.4,{spacing:.4}),D(r.sub(-6.6,0,-1.7,Math.PI/2),1.8,2.4,.36,{spacing:.36}),D(r.sub(-6.6,0,2.3,Math.PI/2),1.8,2.4,.36,{spacing:.42}),D(r.sub(-1.4,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.4,wallRight:!0}),D(r.sub(7,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.37,wallLeft:!0}),D(r.sub(-7,o,-9.6,0),14,3.8,.4,{spacing:.4,wallLeft:!0,wallRight:!0}),D(r.sub(-6.6,o,-7,Math.PI/2),2.6,3.8,.4,{spacing:.4}),D(r.sub(6.6,o,-9.6,-Math.PI/2),8.4,3.8,.4,{spacing:.39});for(const S of[-5,-2.4]){D(r.sub(-4.3,0,S+.3,0),4,2.25,.3,{spacing:.36,solid:!1}),D(r.sub(-.3,0,S-.3,Math.PI),4,2.25,.3,{spacing:.36,solid:!1}),r.solid(4.1,2.3,.62,-2.3,1.15,S);for(const I of[-4.33,-.27])r.box(n.oak,.06,2.3,.66,I,1.15,S);r.box(n.oak,4.14,.05,.7,-2.3,2.3,S)}D(r.sub(-10.6,0,2.75,0),2.2,.85,.35,{bay:.75,noCornice:!0}),D(r.sub(-8.4,0,7.05,Math.PI),2.2,.85,.35,{bay:.75,noCornice:!0});function B(S,I,R){r.cyl(n.iron,.016,.016,13.6,0,S+R-.15,-9.47,8,0,0,Math.PI/2);for(let ut=-6.4;ut<=6.4;ut+=2.13)r.box(n.iron,.03,.03,.14,ut,S+R-.15,-9.53);const U=-9.45,G=-8.35,K=Math.hypot(G-U,R),at=-Math.atan((G-U)/R);for(const ut of[-.22,.22])r.box(n.oak,.05,K,.08,I+ut,S+R/2,(U+G)/2,at,0,0);const lt=Math.floor(K/.28);for(let ut=1;ut<lt;ut++){const Lt=ut/lt;r.cyl(n.iron,.014,.014,.44,I,S+Lt*R,G+(U-G)*Lt,8,0,0,Math.PI/2)}for(const ut of[-.22,.22])r.cyl(n.iron,.035,.035,.04,I+ut,S+.035,G,10,0,0,Math.PI/2),r.box(n.iron,.02,.14,.02,I+ut,S+R-.08,U-.02);r.solid(.6,1.2,.45,I,S+.6,G-.15)}B(0,-2.6,3.3),B(o,2.2,3.4);function q(S,I,R=.9,U=!0){const G=R,K=.86;S.box(I,G,.3,K,0,.27,0),S.box(I,G-.3,.13,K-.24,0,.48,.06);for(const lt of[-1,1])S.box(I,.16,.36,K-.05,lt*(G/2-.08),.6,.02),S.cyl(I,.095,.095,K-.02,lt*(G/2-.07),.78,.03,12,Math.PI/2,0,0),S.cyl(n.dark,.03,.022,.12,lt*(G/2-.07),.06,K/2-.08,8),S.cyl(n.dark,.03,.022,.12,lt*(G/2-.07),.06,-K/2+.08,8),U&&S.box(I,.1,.45,.3,lt*(G/2-.06),1.05,-K/2+.2);const at=U?1.12:.9;S.box(I,G-.04,at-.4,.2,0,.4+(at-.4)/2,-K/2+.1,-.08,0,0),S.cyl(I,.09,.09,G-.06,0,at,-K/2+.12,12,0,0,Math.PI/2);for(let lt=0;lt<3;lt++)for(let ut=0;ut<Math.round(G/.22);ut++){const Lt=Math.round(G/.22);S.sphere(n.iron,.012,-G/2+.13+(G-.26)*(ut+lt%2*.5)/Lt,.62+lt*.13,-K/2+.215,1,1,.6,6,4)}S.solid(G,.95,K,0,.47,0)}function j(S){S.box(n.oak,.44,.04,.42,0,.46,0);for(const[I,R]of[[-.19,.18],[.19,.18],[-.19,-.18],[.19,-.18]])S.cyl(n.oak,.02,.018,.44,I,.22,R,8);for(const I of[-.19,.19])S.box(n.oak,.035,.5,.035,I,.72,-.19,-.1,0,0);S.box(n.oak,.42,.08,.03,0,.94,-.215,-.1,0,0);for(let I=-1;I<=1;I++)S.box(n.oak,.03,.36,.02,I*.1,.72,-.2,-.1,0,0);S.box(n.oak,.38,.02,.02,0,.12,0),S.box(n.leather2,.36,.03,.34,0,.495,.01),S.solid(.44,.95,.44,0,.47,0)}function Z(S,I,R,U,G=0){S.cyl(n.brass,.07,.08,.025,I,R+.012,U,16),S.cyl(n.brass,.01,.01,.3,I,R+.17,U,8),S.cyl(n.brass,.012,.012,.12,I,R+.32,U,6,0,G,Math.PI/2),S.cyl(n.greenGlass,.1,.1,.3,I,R+.34,U,16,0,G,Math.PI/2,!1,0,Math.PI),S.sphere(n.flame,.03,I,R+.31,U,1.6,.6,1)}function et(S,I,R,U,G=1){S.cyl(n.ceramic,.06*G,.09*G,.25*G,I,R+.125*G,U,16),S.cyl(n.brass,.01,.01,.15*G,I,R+.3*G,U,6),S.cyl(n.shade,.1*G,.17*G,.2*G,I,R+.42*G,U,20,0,0,0,!0)}function Y(S,I,R,U,G,K,at){S.box(n.gilt,I+2*.07,.07,.05,U,G+R/2+.07/2,K),S.box(n.gilt,I+2*.07,.07,.05,U,G-R/2-.07/2,K),S.box(n.gilt,.07,R,.05,U-I/2-.07/2,G,K),S.box(n.gilt,.07,R,.05,U+I/2+.07/2,G,K),S.plane(n.painting,I,R,U,G,K,0,0,0,[at%2*.5,Math.floor(at/2)*.5,.5,.5])}function rt(S,I,R,U,G,K){t.stack(S.m,I,R,U,G,K)}function ft(S,I,R,U,G=.18){S.cyl(n.brass,.045,.06,.02,I,R+.01,U,12),S.cyl(n.brass,.012,.02,.2,I,R+.11,U,8),S.cyl(n.brass,.03,.02,.03,I,R+.22,U,10),S.cyl(n.paper,.016,.016,G,I,R+.235+G/2,U,8),S.sphere(n.flame,.012,I,R+.25+G,U,1,2,1,6,4)}{const S=r.sub(-.5,0,1.9,0);S.box(n.oak,1.25,.06,3.9,0,.75,0),S.box(n.dark,1.05,.13,3.6,0,.655,0);for(const R of[-1.75,0,1.75])for(const U of[-.5,.5])S.cyl(n.dark,.05,.04,.6,U,.32,R,10),S.sphere(n.dark,.06,U,.45,R,1,.8,1,10,6);S.box(n.dark,.06,.06,3.4,0,.14,0),S.solid(1.25,.8,3.9,0,.4,0),Z(S,0,.78,-.95,Math.PI/2),Z(S,0,.78,.95,Math.PI/2),l.push({p:new O(-.5,1.15,1.9),c:16761466,i:5.5,d:9}),rt(S,.35,.78,-1.5,4,.2),rt(S,-.38,.78,1.55,3,-.4),rt(S,.4,.78,.4,2,1.2),S.box(n.leather,.44,.012,.3,-.15,.786,-.25,0,.1,0),S.box(n.paper,.2,.025,.28,-.255,.8,-.26,0,.1,.06),S.box(n.paper,.2,.025,.28,-.055,.8,-.24,0,.1,-.06),S.box(n.paper,.21,.004,.29,.3,.783,.9,0,-.3,0),S.cyl(n.iron,.03,.03,.05,.42,.805,.95,10),S.cyl(n.brass,.002,.002,.18,.4,.86,.95,4,0,0,.4);const I=[[-.88,-1.2,Math.PI/2],[-.92,.05,Math.PI/2+.15],[-.86,1.25,Math.PI/2],[.86,-1.25,-Math.PI/2],[1.15,.1,-Math.PI/2-.4],[.88,1.2,-Math.PI/2]];for(const[R,U,G]of I)j(S.sub(R,0,U,G))}{const S=new pn(3.4,5.6);S.rotateX(-Math.PI/2),r.geo(n.rug,S,-.5,.008,1.9);const I=new pn(3.4,5.2);I.rotateX(-Math.PI/2),I.rotateY(Math.PI/2),r.geo(n.rug,I,0,.008,6.8);const R=new pn(2.2,3.2);R.rotateX(-Math.PI/2),r.geo(n.rug,R,-9.4,.008,4.9)}{const S=r.sub(0,0,9,Math.PI);S.box(n.stone,2.7,.08,.75,0,.04,.37);for(const I of[-1,1])S.box(n.stone,.38,1.28,.38,I*.96,.64,.19);S.box(n.stone,2.3,.36,.4,0,1.46,.2),S.box(n.dark,2.7,.08,.48,0,1.68,.24),S.box(n.plaster,2.3,3,.3,0,3.22,.15),S.box(n.soot,1.56,1.28,.04,0,.64,.02),S.box(n.soot,1.56,.02,.38,0,.09,.19);for(let I=0;I<6;I++)S.box(n.iron,.025,.25,.025,-.4+I*.16,.24,.3);S.box(n.iron,.9,.03,.3,0,.14,.2),S.cyl(n.dark,.06,.07,.75,0,.22,.18,8,0,.1,Math.PI/2),S.cyl(n.dark,.05,.05,.7,.05,.3,.24,8,0,-.3,Math.PI/2),S.box(n.ember,.8,.03,.26,0,.165,.2),S.sphere(n.ember,.12,-.1,.25,.2,2.2,.5,.8,8,6),S.solid(2.7,1.72,.8,0,.86,.4),ft(S,-1.05,1.72,.25),ft(S,1.05,1.72,.25,.14),S.box(n.dark,.32,.36,.14,0,1.9,.37+ct),S.cyl(n.ceramic,.11,.11,.02,0,1.94,.45+ct,20,Math.PI/2,0,0),S.cyl(n.brass,.125,.125,.015,0,1.94,.445+ct,20,Math.PI/2,0,0),S.cyl(n.terracotta,.05,.08,.22,.6,1.83,.22,12),rt(S,-.6,1.72,.24,2,.3),Y(S,1.4,.95,0,3.5,.325+ct,2),S.cyl(n.iron,.012,.012,.8,1.32,.4,.55,6,0,0,.08),S.cyl(n.brass,.025,.025,.06,1.35,.82,.55,8),l.push({p:new O(0,.55,8.35),c:16747068,i:6,d:10,fire:!0})}q(r.sub(0,0,5.7,0),n.leather,2.2,!1),q(r.sub(-2.15,0,7.4,Math.PI/2-.2),n.leather2),q(r.sub(2.15,0,7.4,-Math.PI/2+.25),n.leather);{const S=r.sub(0,0,7.3,.05);S.box(n.oak,1.1,.05,.6,0,.42,0);for(const[R,U]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]])S.box(n.dark,.05,.4,.05,R,.2,U);S.box(n.dark,1,.02,.5,0,.1,0),S.solid(1.1,.45,.6,0,.22,0),rt(S,-.25,.445,0,3,.5),S.cyl(n.ceramic,.04,.03,.07,.25,.48,.05,12),S.torus(n.ceramic,.025,.006,.29,.48,.05,0,0,0,10),S.cyl(n.ceramic,.07,.07,.008,.25,.449,.05,16),rt(S,-.2,.12,0,3,0);const I=r.sub(1.45,0,5.75,0);I.cyl(n.dark,.25,.25,.03,0,.6,0,20),I.cyl(n.dark,.03,.04,.58,0,.3,0,8),I.cyl(n.dark,.18,.2,.03,0,.015,0,16),I.solid(.5,.62,.5,0,.31,0),et(I,0,.615,0,1.1)}{r.box(n.oak,.6,.45,4,-11.19,.225,4.9),r.solid(.62,.45,4,-11.2,.225,4.9),r.box(n.cushion,.56,.1,3.9,-11.2,.5,4.9),r.box(n.cushion2,.16,.42,.5,-11.38,.74,3.25,0,0,-.25),r.box(n.leather2,.16,.38,.46,-11.38,.72,6.5,0,.2,-.3),r.box(n.cushion,.4,.06,.6,-11.1,.58,5.2,0,.4,0),t.stack(r.m,-11.2,.55,4.3,3,.4),r.cyl(n.terracotta,.11,.08,.2,-11.25,.65,6,14);for(let R=0;R<9;R++){const U=R/9*Math.PI*2;r.box(n.plant,.06,.32,.01,-11.25+Math.cos(U)*.06,.88,6+Math.sin(U)*.06,Math.sin(U)*.5,U,Math.cos(U)*.5)}q(r.sub(-9.3,0,3.4,-Math.PI/2+.55),n.leather),q(r.sub(-9.3,0,6.35,-Math.PI/2-.55),n.leather2);const S=r.sub(-9.9,0,4.9,0);S.cyl(n.oak,.3,.3,.035,0,.6,0,24),S.cyl(n.dark,.035,.05,.58,0,.3,0,10);for(let R=0;R<3;R++){const U=R/3*Math.PI*2;S.box(n.dark,.05,.05,.3,Math.cos(U)*.12,.04,Math.sin(U)*.12,0,-U+Math.PI/2,0)}S.solid(.6,.62,.6,0,.31,0),rt(S,-.08,.62,-.08,3,.7),S.cyl(n.ceramic,.045,.035,.06,.14,.65,.1,12),S.cyl(n.ceramic,.075,.075,.008,.14,.62,.1,16);const I=r.sub(-8,0,7,0);I.cyl(n.iron,.16,.18,.03,0,.015,0,16),I.cyl(n.iron,.014,.014,1.5,0,.76,0,8),I.cyl(n.shade,.14,.24,.28,0,1.55,0,20,0,0,0,!0),I.solid(.36,1.6,.36,0,.8,0),l.push({p:new O(-8,1.5,6.9),c:16757866,i:4,d:7}),Y(r.sub(-7.5,0,2.4,0),.5,.4,-.45,2,.03,3),rt(r,-8.6,0,7.15,5,.3)}{const S=r.sub(-5.9,0,-.7,.3);for(let R=0;R<3;R++){const U=R/3*Math.PI*2;S.box(n.dark,.04,.75,.04,Math.cos(U)*.18,.37,Math.sin(U)*.18,Math.sin(U)*.25,0,-Math.cos(U)*.25)}S.torus(n.oak,.3,.03,0,.76,0,Math.PI/2,0,0,32),S.torus(n.brass,.32,.01,0,1,0,0,0,.4,32);const I=new tr(.29,32,20);I.rotateZ(.4),S.geo(n.globe,I,0,1,0),S.solid(.7,1.3,.7,0,.65,0)}{const S=r.sub(5.5,0,-1.22,Math.PI);S.box(n.oak,1.9,1.1,.5,0,.55,.25);for(let I=0;I<8;I++)for(let R=0;R<6;R++){const U=-.82+I*.235,G=.22+R*.15;S.box(n.walnut,.2,.12,.02,U,G,.505),S.box(n.brass,.05,.012,.02,U,G-.02,.52),S.box(n.paper,.05,.025,.005,U,G+.025,.517)}S.box(n.walnut,2,.05,.56,0,1.125,.25),S.solid(1.9,1.15,.5,0,.57,.25),et(S,.65,1.15,.25,.9),rt(S,-.4,1.15,.25,4,.2),r.cyl(n.brass,.008,.008,.75,5.5,o-.95,-4.1,6),r.cyl(n.brass,.04,.04,.05,5.5,o-.6,-4.1,10),r.cyl(n.shade,.1,.22,.2,5.5,o-1.38,-4.1,20,0,0,0,!0),r.sphere(n.flame,.035,5.5,o-1.4,-4.1,1,1,1,8,6),l.push({p:new O(5.5,o-1.5,-4.1),c:16759930,i:3.5,d:7})}{const S=r.sub(-5.6,o,-8.85,0);S.box(n.oak,1.4,.05,.7,0,.76,0);for(const R of[-1,1])S.box(n.dark,.36,.72,.64,R*.5,.37,0);S.box(n.dark,.6,.12,.62,0,.67,0);for(const R of[-1,1])for(let U=0;U<3;U++)S.box(n.walnut,.32,.2,.02,R*.5,.16+U*.22,.33),S.cyl(n.brass,.015,.015,.02,R*.5,.16+U*.22,.345,8,Math.PI/2,0,0);S.solid(1.4,.8,.7,0,.4,0),Z(S,-.4,.785,-.1,0),rt(S,.45,.785,-.1,5,0),S.box(n.paper,.3,.004,.22,.05,.787,.1,0,.2,0),S.cyl(n.iron,.025,.03,.045,-.15,.81,-.15,10),j(S.sub(.05,0,.6,Math.PI+.2)),l.push({p:new O(-5.9,o+1.25,-8.85),c:16761466,i:4.5,d:8}),q(r.sub(6,o,-3.6,-Math.PI/2),n.leather2);const I=r.sub(6.1,o,-2.4,0);I.cyl(n.dark,.22,.22,.03,0,.55,0,18),I.cyl(n.dark,.03,.03,.54,0,.27,0,8),I.cyl(n.dark,.15,.17,.03,0,.015,0,14),I.solid(.44,.58,.44,0,.29,0),rt(I,0,.565,0,3,.4),t.stack(r.m,3.4,o,-9,6,.2),t.stack(r.m,-1.6,0,-8.9,4,.1)}for(const[S,I,R]of[[-.5,6.2,1.9],[-2.3,7,-3.7]]){r.torus(n.iron,.75,.025,S,I,R,Math.PI/2,0,0,40),r.torus(n.iron,.4,.018,S,I-.25,R,Math.PI/2,0,0,28),r.cyl(n.iron,.006,.006,10.5-I,S,(10.5+I)/2,R,4);for(let U=0;U<4;U++){const G=U/4*Math.PI*2+.4;r.cyl(n.iron,.005,.005,1.1,S+Math.cos(G)*.37,I+.45,R+Math.sin(G)*.37,4,Math.sin(G)*.72,0,-Math.cos(G)*.72)}for(let U=0;U<10;U++){const G=U/10*Math.PI*2,K=S+Math.cos(G)*.75,at=R+Math.sin(G)*.75;r.cyl(n.iron,.03,.02,.04,K,I+.03,at,8),r.cyl(n.paper,.014,.014,.14,K,I+.12,at,6),r.sphere(n.flame,.011,K,I+.205,at,1,2,1,6,4)}}Y(r.sub(7,0,0,-Math.PI/2),1.1,.8,4.6,3.1,.03,0),Y(r.sub(7,0,0,-Math.PI/2),.9,1.2,.7,5.3,.03,1),Y(r.sub(-7,0,0,Math.PI/2),.9,.7,2.6,3.2,.03,3),Y(r.sub(-7,0,0,Math.PI/2),.9,.7,-1.4,3.2,.03,1);{const S=r;S.sphere(n.ceramic,.12,-3.6,2.5,-5,.85,1.1,.85,14,10),S.cyl(n.ceramic,.07,.1,.16,-3.6,2.4,-5,12),S.box(n.stone,.2,.08,.2,-3.6,2.36,-5),t.stack(r.m,-1.2,2.325,-5,3,.3),S.cyl(n.terracotta,.12,.09,.26,-1,2.455,-2.4,14),S.sphere(n.plant,.18,-1,2.7,-2.4,1,.7,1,10,6),t.stack(r.m,-3.2,2.325,-2.4,4,1.2),ft(r,-2.4,2.325,-2.4)}const it=(S,I,R)=>{const U=new jr(i,S.m),G=c();if(G<.35)U.box(n.iron,.012,Math.min(.16,S.clear-.02),.11,I-R/2+.01,Math.min(.16,S.clear-.02)/2,-.08),U.box(n.iron,.09,.006,.11,I-R/2+.05,.003,-.08);else if(G<.55&&S.clear>.22)U.cyl(c()<.5?n.ceramic:n.terracotta,.035,.05,.15,I,.075,-.1,12);else if(G<.75){const K=Math.min(R-.02,.14);U.box(c()<.5?n.walnut:n.leather2,K,Math.min(.08,S.clear-.02),.12,I,.04,-.1)}else G<.85&&S.clear>.2&&U.box(n.gilt,.1,.13,.012,I,.065,-.12,-.15,0,0)};for(const S of a)t.fillSlot(S,it);return i.finish=i.finish.bind(i),{B:i,lights:l,windows:u,slots:a}}const pl=[[.36,.08,.06],[.42,.12,.08],[.12,.2,.12],[.1,.16,.28],[.18,.1,.06],[.48,.32,.16],[.06,.06,.06],[.55,.42,.2],[.16,.26,.26],[.3,.1,.16],[.62,.55,.42],[.26,.24,.2],[.4,.24,.1],[.2,.12,.2],[.7,.62,.48]],ml=new _n,gl=new Oe,Om=new O,Bm=new O;class zm{constructor(t){this.rand=t,this.mats=[],this.cols=[],this.vars=[]}color(t,e=0){const i=this.rand,r=t||pl[Math.floor(i()*pl.length)],s=.8+i()*.4,o=e||(i()<.12?.2+i()*.25:0);return[r[0]*s*(1-o)+.55*o,r[1]*s*(1-o)+.48*o,r[2]*s*(1-o)+.38*o]}add(t,e,i,r,s,o,a,l,u,c,f=0){gl.set(0,f,s),ml.setFromEuler(gl);const h=new jt().compose(Om.set(e,i,r),ml,Bm.set(o,a,l));h.premultiply(t),this.mats.push(h),this.cols.push(u),this.vars.push(c)}fillSlot(t,e){const i=this.rand,{m:r,len:s,clear:o,d:a}=t;let l=.01+i()*.04,u=.25;for(;l<s-.03;){const c=i(),f=s-l;if(c<.07&&f>.34&&o>.16){const M=2+Math.floor(i()*4);let F=0,A=0;const C=.2+i()*.1;for(let L=0;L<M;L++){const E=.022+i()*.04;if(F+E>o-.02)break;const v=Math.min(C+(i()-.5)*.06,f-.03),P=Math.min(a-.02,.15+i()*.08);this.add(r,l+v/2+(i()-.5)*.02,F+E/2,-P/2-.01-i()*.02,Math.PI/2,E,v,P,this.color(),Math.floor(i()*8),(i()-.5)*.12),F+=E,A=Math.max(A,v)}l+=A+.02+i()*.03;continue}if(c<.13){const M=.06+i()*.16;e&&M>.1&&f>.2&&e(t,l+M/2,M),l+=M;continue}const h=i()<.4,p=h?4+Math.floor(i()*10):3+Math.floor(i()*12),g=this.color(),_=Math.floor(i()*8),m=Math.min(o-.02,.2+i()*.16),d=.03+i()*.03,b=Math.min(a-.02,.15+i()*.08),T=i()<.2?.08:0;for(let M=0;M<p&&l<s-.03;M++){let F,A,C,L,E;if(h?(F=d*(.85+i()*.3),A=m,C=b,L=i()<.08?this.color():g,E=_):(F=.016+i()*.05+(i()<.1?.03:0),A=Math.min(o-.015,.17+i()*.17+T),C=Math.min(a-.02,.12+i()*.13),L=this.color(),E=Math.floor(i()*8)),l+F>s-.01)break;const v=.006+i()*(i()<.15?.06:.018);this.add(r,l+F/2,A/2,-C/2-v,0,F,A,C,L,E,(i()-.5)*.03),l+=F+.0015,u=A}if(i()<.35&&s-l>.12){const M=.12+i()*.3,F=.02+i()*.03,A=Math.min(u*.95,o-.03,.18+i()*.12),C=Math.min(a-.02,.14+i()*.08),L=l+F/2*Math.cos(M)+A/2*Math.sin(M),E=F/2*Math.sin(M)+A/2*Math.cos(M);l+F*Math.cos(M)+A*Math.sin(M)<s-.01&&(this.add(r,L,E,-C/2-.01,M,F,A,C,this.color(),Math.floor(i()*8)),l+=F*Math.cos(M)+A*Math.sin(M))}l+=.004+i()*.04}}stack(t,e,i,r,s,o=0){const a=this.rand;let l=i;for(let u=0;u<s;u++){const c=.025+a()*.04,f=.2+a()*.12,h=.15+a()*.08;this.add(t,e+(a()-.5)*.03,l+c/2,r+(a()-.5)*.03,Math.PI/2,c,f,h,this.color(),Math.floor(a()*8),o+(a()-.5)*.4),l+=c}return l}build(t){const e=new xn(1,1,1),i=e.attributes.uv,r=new Float32Array(i.count),s=new Float32Array(i.count);for(let h=0;h<6;h++)for(let p=0;p<4;p++){const g=h*4+p;let _=i.getX(g),m=i.getY(g);if(h===4)_=_*.0625,r[g]=1;else if(h===0||h===1)_=.76+_*.23;else if(h===2||h===3){const d=_;_=.51+m*.23,m=d,s[g]=1}else _=.51+_*.23,s[g]=1;i.setXY(g,_,m)}e.setAttribute("aSpine",new Ae(r,1)),e.setAttribute("aPage",new Ae(s,1));const o=this.mats.length,a=new Float32Array(o);for(let h=0;h<o;h++)a[h]=this.vars[h];e.setAttribute("aVar",new Eo(a,1));const l=new Sm({map:t});l.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
`)};const u=e.index.array;e.setIndex(Array.from(u.slice(0,30)));const c=new Ho(e,l,o),f=new Ut;for(let h=0;h<o;h++){c.setMatrixAt(h,this.mats[h]);const p=this.cols[h];f.setRGB(p[0],p[1],p[2]),c.setColorAt(h,f)}return c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,c.castShadow=!0,c.receiveShadow=!0,c.computeBoundingSphere(),c}}const _l=.0026,xl=Math.PI/2-.02;function km({canvas:n,overlay:t,menuButton:e,player:i,camera:r,releaseMovement:s,toast:o,isInputBlocked:a=()=>!1,setMenuPaused:l=()=>{}}){const u=t.querySelector("#look-sensitivity"),c=t.querySelector("#look-sensitivity-value"),f=t.querySelector("[data-resume-look]");let h=_l,p=!1,g=!1,_=!1,m=!1,d=!1,b=document.hasFocus(),T=!1,M=!1,F=0,A=0,C=0,L=!1,E=!1;const v=[];function P(it,S,I,R){it.addEventListener(S,I,R),v.push(()=>it.removeEventListener(S,I,R))}function D(){return!E&&!L&&b&&!t.open&&!a()}function B(){n.focus({preventScroll:!0}),b=document.visibilityState==="visible"&&document.hasFocus()}function q(it,S){!Number.isFinite(it)||!Number.isFinite(S)||(i.yaw-=it*h,i.pitch=Math.max(-xl,Math.min(xl,i.pitch-S*h)),r.rotation.set(i.pitch,i.yaw,0))}function j(){++C,p=_=m=g=d=!1,s(),document.pointerLockElement===n&&document.exitPointerLock()}function Z(){t.open&&t.close(),l(!1),!E&&!L&&B()}function et(){if(!(E||L||t.open||a()))return j(),t.showModal(),l(!0),f.focus({preventScroll:!0}),!0}function Y(){_=d=!1,D()&&(T=!0,o("Hold left mouse to look. Esc opens controls."))}async function rt(){if(p||_||!D())return;if(!n.requestPointerLock){Y();return}const it=++C;_=d=!0,m=!1;try{const S=n.requestPointerLock({unadjustedMovement:!0});if(!S||typeof S.then!="function"){m=!0;return}try{await S}catch(I){if(I.name!=="NotSupportedError"||it!==C||!D())throw I;await n.requestPointerLock()}}catch{it===C&&D()&&Y()}finally{it===C&&!m&&(_=!1)}}P(e,"click",et),P(f,"click",()=>{Z(),rt()}),P(t,"cancel",it=>{it.preventDefault(),Z()}),P(t,"close",()=>{l(!1),!E&&!L&&B()}),P(n,"mousedown",it=>{it.button!==0||E||L||t.open||a()||(B(),!(p||!D())&&(M=!T,g=!0,F=it.clientX,A=it.clientY,rt()))}),P(n,"click",it=>{M&&(M=!1,it.stopImmediatePropagation())},!0),P(n,"keydown",it=>{it.code==="Enter"&&!it.repeat&&D()&&(rt(),it.preventDefault())}),P(globalThis,"mouseup",()=>{g=!1}),P(globalThis,"mousemove",it=>{if(!(!D()||document.visibilityState!=="visible")){if(p)q(it.movementX,it.movementY);else if(g){if(!(it.buttons&1)){g=!1;return}q(it.clientX-F,it.clientY-A),F=it.clientX,A=it.clientY}}}),P(document,"pointerlockchange",()=>{const it=p;p=document.pointerLockElement===n,_=m=g=!1,p&&(!D()||!d)&&(document.exitPointerLock(),p=!1),p?(T=!1,B()):(d=!1,it&&s())}),P(document,"pointerlockerror",()=>{m&&_&&(m=!1,Y())});function ft(){b=!1,T=!1,j()}return P(globalThis,"blur",ft),P(globalThis,"focus",()=>{b=document.visibilityState==="visible"}),P(document,"visibilitychange",()=>{document.visibilityState!=="visible"?ft():b=document.hasFocus()}),P(globalThis,"keydown",it=>{it.code==="Escape"&&!it.repeat&&!t.open&&et()&&it.preventDefault()}),P(u,"input",()=>{const it=Math.max(40,Math.min(220,Number(u.value)||100));h=_l*it/100,c.textContent=`${it}%`}),{get menuOpen(){return t.open},pause(){L=!0,ft()},resume(){E||(L=!1,b=document.visibilityState==="visible"&&document.hasFocus())},dispose(){if(!E){E=!0,L=!0,ft();for(const it of v)it();t.open&&t.close()}}}}const tc=Object.freeze({welcome:{label:"Welcome book",cover:["A place","for you"],color:3362112,kicker:"Welcome · first shelf",title:"A place to leave good things",paragraphs:["Come in, take a seat, and read something that catches your attention. I’ve left a short find on the table and connected the writing desk to the private project workspace.","Start with Shapes & sound, the rust-colored book nearby. When you want to work on personal notes or decisions, visit the writing desk upstairs.","This first shelf is small. The room can change as better buildings arrive; the things worth keeping can move with it."],links:[],signature:"Left for you — Jippity"},drums:{label:"Shapes & sound",cover:["Shapes","& sound"],color:7356719,kicker:"An interesting find · mathematics",title:"Different shapes, the same spectrum",paragraphs:["Two mathematically different ideal drumheads can have exactly the same set of resonant frequencies, including their multiplicities. Gordon, Webb and Wolpert constructed distinct planar shapes with this property: the frequency list alone does not uniquely reveal the boundary.","There is a stronger surprise. Buser, Conway, Doyle and Semmler gave a homophonic pair with a special point on each drum. Corresponding normalized vibration modes take matching values there. In the ideal point-strike model, striking those points excites every frequency with matching strength.","The assumptions matter: ideal membranes with matching tension and density, fixed boundaries, and the mathematical wave model. This does not mean arbitrary real rooms, instruments or recordings sound identical. Strike location, damping, material, acoustics and how you listen still matter in practice.","That is the part I find interesting: a complete frequency list can be precise and still leave the shape ambiguous."],links:[{label:"Gordon, Webb & Wolpert · One cannot hear the shape of a drum (1992)",href:"https://arxiv.org/pdf/math/9207215"},{label:"Buser, Conway, Doyle & Semmler · Some planar isospectral domains (1994)",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],signature:"Selected by Jippity"},desk:{label:"Project Library",kicker:"The writing desk",title:"Project Library",paragraphs:["Personal notes and decisions belong in the signed-in Project Library. Open that workspace when you’re ready to write or pick up a project.","This desk is just the entrance. The link opens your private workspace in a new tab; sign in there if asked."],links:[{label:"Open private Project Library",href:"https://jippity-project-room.pazneria.chatgpt.site"}],signature:"Jippity"}}),ec=Object.freeze([{id:"table-welcome",contentId:"welcome",position:[-.35,.808,3.53],yaw:.12,kind:"book",bounds:{x0:-.53,x1:-.17,y0:.783,y1:.84,z0:3.32,z1:3.74}},{id:"table-drums",contentId:"drums",position:[-.87,.808,2.35],yaw:-.18,kind:"book",bounds:{x0:-1.06,x1:-.68,y0:.783,y1:.84,z0:2.13,z1:2.57}},{id:"gallery-writing-desk",contentId:"desk",kind:"existing-paper",position:[-5.55,4.999,-8.75],bounds:{x0:-5.76,x1:-5.34,y0:4.98,y1:5.025,z0:-8.94,z1:-8.56}}]),Hm=2.2;function Gm(n,t,e,i=()=>document.createElement("canvas")){const r=t.filter(A=>A.kind==="book"),s=i();s.width=256*r.length,s.height=384;const o=s.getContext("2d"),a=[],l=[],u=new O(0,1,0),c=[],f=new jt,h=new _n,p=new O,g=new xn(1,1,1),_=new ji({roughness:.85,color:16777215}),m=new Ho(g,_,r.length),d=new O;for(let A=0;A<r.length;A++){const C=r[A],L=e[C.contentId],E="#"+L.color.toString(16).padStart(6,"0");o.fillStyle=E,o.fillRect(A*256,0,256,384),o.strokeStyle="#c7a96c",o.lineWidth=2,o.strokeRect(A*256+20,24,216,336),o.fillStyle="#f0dfbe",o.textAlign="center",o.font="30px Georgia",L.cover.forEach((v,P)=>o.fillText(v,A*256+128,154+P*42)),o.font="15px Georgia",o.fillText("JIPPITY",A*256+128,304),h.setFromAxisAngle(u,C.yaw),f.compose(d.fromArray(C.position),h,p.set(.26,.038,.34)),m.setMatrixAt(A,f),m.setColorAt(A,new Ut(L.color));for(const[v,P,D,B]of[[-.13,.17,0,0],[.13,.17,1,0],[.13,-.17,1,1],[-.13,.17,0,0],[.13,-.17,1,1],[-.13,-.17,0,1]])d.set(v,.021,P).applyQuaternion(h).add(new O().fromArray(C.position)),a.push(d.x,d.y,d.z),c.push(0,1,0),l.push((A+D)/r.length,B)}m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0);const b=new we;b.setAttribute("position",new ce(a,3)),b.setAttribute("normal",new ce(c,3)),b.setAttribute("uv",new ce(l,2));const T=new Go(s);T.colorSpace=Te;const M=new ji({map:T,roughness:.9}),F=new te(b,M);return m.name="Jippity reading books",F.name="Jippity book covers",n.add(m,F),{objects:[m,F],budget:{books:r.length,drawCalls:2,triangles:r.length*14,texturePixels:s.width*s.height},dispose(){n.remove(m,F),m.dispose(),g.dispose(),_.dispose(),b.dispose(),M.dispose(),T.dispose()}}}const Vm=["x","y","z"];function vl(n,t,e,i=1/0){let r=0,s=i;if(!Number.isFinite(Math.hypot(t.x,t.y,t.z))||Math.hypot(t.x,t.y,t.z)<1e-10)return null;for(const o of Vm){const a=n[o],l=t[o],u=e[o+"0"],c=e[o+"1"];if(!Number.isFinite(a)||!Number.isFinite(l)||!Number.isFinite(u)||!Number.isFinite(c))return null;if(Math.abs(l)<1e-10){if(a<u||a>c)return null}else{const f=(u-a)/l,h=(c-a)/l;if(r=Math.max(r,Math.min(f,h)),s=Math.min(s,Math.max(f,h)),r>s)return null}}return s>=0?r:null}function Wm(n,t,e,i,r=2.2){let s=null,o=r;for(const a of e){const l=vl(n,t,a.bounds,o);l!==null&&l<=o&&(s=a,o=l)}if(!s)return null;for(const a of i){const l=vl(n,t,a,o);if(l!==null&&l+.025<o)return null}return s}function nc(n){var t;return!!((t=n==null?void 0:n.closest)!=null&&t.call(n,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))}const Gi="jippityLibraryReader";function Xm({document:n,window:t,canvas:e,dialog:i,hint:r,content:s,getTarget:o,canInteract:a,look:l,setPaused:u,releaseMovement:c,returnFocus:f}){const h=i.querySelector("#reader-title"),p=i.querySelector("#reader-kicker"),g=i.querySelector("#reader-pages"),_=i.querySelector("#reader-links"),m=i.querySelector("#reader-signature"),d=[];let b=null,T=!1,M=!1,F=null;function A(D,B,q){D.addEventListener(B,q),d.push(()=>D.removeEventListener(B,q))}function C(D){const B=s[D];p.textContent=B.kicker,h.textContent=B.title,g.replaceChildren(),_.replaceChildren();for(const q of B.paragraphs){const j=n.createElement("p");j.textContent=q,g.append(j)}for(const q of B.links){const j=n.createElement("a");j.textContent=q.label,j.href=q.href,j.target="_blank",j.rel="noopener noreferrer",j.referrerPolicy="no-referrer",_.append(j)}_.hidden=!B.links.length,m.textContent=B.signature}function L(D,B=!0){if(T||M||!Object.hasOwn(s,D))return!1;const q=b!==null;if(b=D,c(),l.pause(),u(!0),r.hidden=!0,C(D),n.body.classList.add("reading-open"),i.open||i.showModal(),i.scrollTop=0,h.focus({preventScroll:!0}),B){const j={...t.history.state,[Gi]:D};q?t.history.replaceState(j,"",t.location.href):t.history.pushState(j,"",t.location.href)}return!0}function E(){b!==null&&(b=null,i.open&&i.close(),n.body.classList.remove("reading-open"),r.hidden=!0,c(),l.resume(),u(!1),f==null||f.focus({preventScroll:!0}))}function v(){var B;if(b===null)return;const D=((B=t.history.state)==null?void 0:B[Gi])===b;E(),D&&(M=!0,t.history.back())}function P(){if(b!==null||T||M||!a())return!1;const D=o();return D?L(D.contentId):!1}return A(t,"keydown",D=>{D.code!=="KeyE"||D.repeat||b!==null||nc(D.target)||P()&&D.preventDefault()}),A(e,"mousedown",D=>{F=D.button===0?{x:D.clientX,y:D.clientY,dragged:!1}:null}),A(t,"mousemove",D=>{F&&Math.hypot(D.clientX-F.x,D.clientY-F.y)>5&&(F.dragged=!0)}),A(e,"click",D=>{const B=F==null?void 0:F.dragged;F=null,!B&&(D.button===void 0||D.button===0)&&P()}),A(r,"click",P),A(i,"cancel",D=>{D.preventDefault(),v()}),A(i.querySelector("#reader-close"),"click",v),A(i.querySelector("#reader-back"),"click",v),A(i,"close",v),A(t,"popstate",D=>{var q;M=!1;const B=(q=D.state)==null?void 0:q[Gi];B&&Object.hasOwn(s,B)?L(B,!1):E()}),{get isOpen(){return b!==null},openNearby:P,close:v,updateHint(){const D=!T&&b===null&&a()?o():null;r.hidden=!D,D&&(r.textContent=`E — ${s[D.contentId].label}`)},dispose(){var D;if(!T){T=!0;for(const B of d)B();if(i.open&&i.close(),b=null,r.hidden=!0,n.body.classList.remove("reading-open"),(D=t.history.state)!=null&&D[Gi]){const B={...t.history.state};delete B[Gi],t.history.replaceState(B,"",t.location.href)}c(),l.pause(),u(!0)}}}}function qm({tick:n,request:t,cancel:e,now:i}){const r=new Set;let s=null,o=!1,a=null;function l(){!o&&!r.size&&s===null&&(s=t(u))}function u(c){if(s=null,o||r.size)return;const f=a===null?0:Math.max(0,(c-a)/1e3);a=c,n(c,f),l()}return{start(){a=i(),l()},setPaused(c,f){f?r.add(c):r.delete(c),r.size&&s!==null&&(e(s),s=null),a=null,l()},get paused(){return o||r.size>0},dispose(){o=!0,s!==null&&e(s),s=null}}}const Gr=document.getElementById("c"),he=new gm({canvas:Gr,antialias:!0,powerPreference:"high-performance"}),ic=Math.min(window.devicePixelRatio||1,1);let Rn=ic;he.setPixelRatio(Rn);he.setSize(window.innerWidth,window.innerHeight);he.toneMapping=Ml;he.toneMappingExposure=1.05;he.outputColorSpace=Te;he.shadowMap.enabled=!0;he.shadowMap.type=Co;he.shadowMap.autoUpdate=!1;const le=new Kl;le.background=new Ut(9075306);const ke=new Ue(70,window.innerWidth/window.innerHeight,.05,2500);ke.rotation.order="YXZ";const rc=new So(he),sc=new Am,Ym=rc.fromScene(sc,.04);le.environment=Ym.texture;sc.dispose();rc.dispose();le.environmentIntensity=.22;const $m=Un(20261006),jm=Nm(),qi=new zm(Un(77)),er=Fm(jm,qi,$m);er.B.finish(le);const oc=qi.build(Pm(31));le.add(oc);const Km=Gm(le,ec,tc),Kr=er.B.solids;qi.mats.length=qi.cols.length=qi.vars.length=0;const Si=new O(-.9,.4,.14).normalize(),en=new Tm(16757611,8);en.target.position.set(-2,3,-1);en.position.copy(en.target.position).addScaledVector(Si,60);en.castShadow=!0;en.shadow.mapSize.set(4096,4096);const Qn=en.shadow.camera;Qn.left=-17;Qn.right=17;Qn.top=15;Qn.bottom=-15;Qn.near=20;Qn.far=100;Qn.updateProjectionMatrix();en.shadow.bias=-4e-4;en.shadow.normalBias=.025;le.add(en,en.target);const Zm=new ym(13227775,6964264,.42);le.add(Zm);const ac=new qo(16754792,11,24,1.2);ac.position.set(3,3.6,-.8);le.add(ac);const lc=[];for(const n of er.lights){const t=new qo(n.c,n.i,n.d,2);t.position.copy(n.p),t.userData=n,le.add(t),lc.push(t)}new Ut(1,.66,.42);{const n=new tr(1200,32,16),t=new je({side:ye,depthWrite:!1,uniforms:{sunDir:{value:Si}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 zen = vec3(0.16,0.27,0.55); vec3 hor = vec3(1.25,0.74,0.45); vec3 below = vec3(0.55,0.42,0.36);
        vec3 col = mix(hor, zen, pow(clamp(h,0.0,1.0), 0.5));
        col = mix(col, below, smoothstep(0.0,-0.2,h));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.55,0.25)*pow(s,5.0)*0.7 + vec3(1.0,0.75,0.45)*pow(s,90.0)*2.5 + smoothstep(0.9993,0.9996,s)*vec3(18.0,12.0,7.0);
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new te(n,t);e.frustumCulled=!1,e.renderOrder=-1,le.add(e)}function Vn(n,t){let e=-.7;const i=Math.max(0,-n-13);return e-=70*(1-Math.exp(-i/140)),e+=(Math.sin(n*.011+t*.017)*10+Math.sin(t*.029+1.3)*Math.cos(n*.013)*12)*Math.min(1,i/120),n<-420&&(e+=Math.min(140,(-n-420)*.22)*(.75+.18*Math.sin(t*.009+.5)+.07*Math.sin(t*.043))),n>8&&(e+=(n-8)*.35),Math.abs(t)>30&&n>-60&&(e+=(Math.abs(t)-30)*.12),e}{const e=new pn(1800,1800,220,220);e.rotateX(-Math.PI/2);const i=e.attributes.position,r=new Float32Array(i.count*3),s=new Ut(.24,.27,.1),o=new Ut(.34,.3,.12),a=new Ut,l=new O(Si.x,Si.y,Si.z);for(let A=0;A<i.count;A++)i.setY(A,Vn(i.getX(A),i.getZ(A)));e.setAttribute("color",new Ae(r,3)),e.computeVertexNormals();const u=new te(e,new Dn({vertexColors:!0}));u.position.x=-300,u.matrixAutoUpdate=!1,u.updateMatrix(),le.add(u);const c=new O,f=new Ut(.86,.6,.48);for(let A=0;A<i.count;A++){const C=i.getX(A)-300,L=i.getZ(A);i.setY(A,Vn(C,L));const E=Vn(C-1,L)-Vn(C+1,L),v=Vn(C,L-1)-Vn(C,L+1),P=c.set(E,2,v).normalize(),D=.45+.9*Math.max(0,P.dot(l));a.copy(s).lerp(o,.5+.5*Math.sin(C*.05)*Math.cos(L*.07)).multiplyScalar(D),a.r*=1.25,a.g*=1.05;const B=Math.hypot(C+10,L);a.lerp(f,(1-Math.exp(-B/420))*.92),r[A*3]=a.r,r[A*3+1]=a.g,r[A*3+2]=a.b}const h=Un(5),p=new Vo(1,1,7);p.translate(0,.5,0);const g=new Ho(p,new Dn,700),_=new jt,m=new _n,d=new O,b=new O,T=new Ut,M=new Ut(.8,.58,.5);let F=0;for(;F<700;){const A=-14-Math.pow(h(),1.6)*520,C=(h()-.5)*900;if(A>-45)continue;const L=5+h()*9,E=L*(.25+h()*.1);d.set(A,Vn(A,C)-.5,C),b.set(E,L,E),_.compose(d,m,b),g.setMatrixAt(F,_);const v=Math.hypot(A+10,C);T.setRGB(.16+h()*.06,.2+h()*.07,.1).lerp(M,(1-Math.exp(-v/300))*.92),g.setColorAt(F,T),F++}g.frustumCulled=!1,le.add(g)}const Ao=Si.clone().negate();{const n=[],t=[];for(const o of er.windows.slice(0,4))for(let a=0;a<4;a++){const l=o[a],u=o[(a+1)%4],c=l.clone().addScaledVector(Ao,12),f=u.clone().addScaledVector(Ao,12);for(const[h,p,g]of[[l,0,0],[u,0,1],[f,1,1],[l,0,0],[f,1,1],[c,1,0]])n.push(h.x,h.y,h.z),t.push(p,g)}const i=new we;i.setAttribute("position",new ce(n,3)),i.setAttribute("uv",new ce(t,2));const r=new je({transparent:!0,depthWrite:!1,blending:Br,side:Ne,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float t; varying vec2 vUv; varying vec3 vW;
      void main(){ float along = vUv.x; float across = vUv.y;
        float a = pow(1.0-along, 1.6) * smoothstep(0.0,0.04,along) * smoothstep(0.0,0.25,across) * smoothstep(1.0,0.75,across);
        float n = 0.75 + 0.25*sin(vW.x*1.7 + vW.y*2.3 + t*0.3) * sin(vW.z*1.3 - t*0.2);
        float fadeFloor = smoothstep(0.0, 0.6, vW.y);
        gl_FragColor = vec4(vec3(1.0,0.72,0.42)*a*n*0.11*fadeFloor, 1.0); }`}),s=new te(i,r);s.frustumCulled=!1,s.renderOrder=5,le.add(s),window.__shafts=r}let Vr;{const n=Un(9),t=[],e=[];for(const s of er.windows)for(let o=0;o<420;o++){const a=n(),l=n(),u=s[0].clone().lerp(s[1],a).lerp(s[3].clone().lerp(s[2],a),l).addScaledVector(Ao,.5+n()*11);u.y<.1||u.y>10||u.x>6.9||u.z<-9.9||u.z>8.9||(t.push(u.x,u.y,u.z),e.push(n()*100))}const i=new we;i.setAttribute("position",new ce(t,3)),i.setAttribute("phase",new ce(e,1)),Vr=new je({transparent:!0,depthWrite:!1,blending:Br,uniforms:{t:{value:0},map:{value:Dm()},scale:{value:window.innerHeight*.5}},vertexShader:`uniform float t; uniform float scale; attribute float phase; varying float vA;
      void main(){ vec3 p = position + vec3(sin(t*0.11+phase)*0.25, sin(t*0.07+phase*1.3)*0.3, cos(t*0.09+phase*0.7)*0.25);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        gl_PointSize = clamp(0.018*scale/-mv.z, 0.0, 6.0); vA = 0.55+0.45*sin(t*0.5+phase); }`,fragmentShader:"uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0,0.8,0.55)*a*vA*0.8, 1.0); }"});const r=new Mm(i,Vr);r.frustumCulled=!1,le.add(r)}const vt={pos:new O,vy:0,yaw:0,pitch:0,eye:1.62,eyeCur:1.62,smoothY:0,vel:new O,radius:.28,step:.42,height:1.75},cc=[{p:[3.4,0,4.3],yaw:.78,pitch:.1,name:"Entrance by the hearth"},{p:[-2,0,-3.7],yaw:1.2,pitch:-.05,name:"Lower shelves, between the stacks"},{p:[-8.2,0,4.9],yaw:1.5,pitch:-.05,name:"Window reading alcove"},{p:[5.6,0,8],yaw:0,pitch:.18,name:"Foot of the staircase"},{p:[1.2,To.GY,-7.6],yaw:Math.PI-.3,pitch:-.32,name:"Gallery overlook"}];function Ki(n){const t=cc[n];vt.pos.set(t.p[0],t.p[1],t.p[2]),vt.yaw=t.yaw,vt.pitch=t.pitch,vt.vy=0,vt.vel.set(0,0,0),vt.smoothY=vt.pos.y,Yo(t.name)}function Jm(n,t,e){let i=-1/0;const r=vt.radius*.7;for(const s of Kr)n+r<s.x0||n-r>s.x1||t+r<s.z0||t-r>s.z1||s.y1<=e+vt.step&&s.y1>i&&(i=s.y1);return i}function Is(n,t,e,i){const r=vt.radius;for(const s of Kr)if(!(n+r<=s.x0||n-r>=s.x1||t+r<=s.z0||t-r>=s.z1)&&s.y0<e+i&&s.y1>e+vt.step)return!0;return!1}const Se=new Set;let Yi=!1,mn=null,ie=null;addEventListener("keydown",n=>{if(!(mn!=null&&mn.isOpen||ie!=null&&ie.paused||nc(n.target))&&(Se.add(n.code),!n.repeat)){if(n.code==="KeyR"&&Ki(0),n.code.startsWith("Digit")){const t=+n.code.slice(5)-1;t>=0&&t<cc.length&&Ki(t)}n.code==="KeyC"&&(Yi=!Yi),n.code==="KeyF"&&uc.classList.toggle("show"),n.code==="KeyH"&&t0.classList.toggle("hide"),n.code==="KeyP"&&(Rn=Rn>.8?Math.max(.6,Rn-.25):ic,he.setPixelRatio(Rn),Ko(),Yo(`Render scale ${Math.round(Rn*100)}%`)),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault()}});addEventListener("keyup",n=>Se.delete(n.code));addEventListener("blur",()=>Se.clear());const Qm=document.getElementById("overlay"),t0=document.getElementById("help"),uc=document.getElementById("stats"),Wr=document.getElementById("toast");let Or=0;function Yo(n){Wr.textContent=n,Wr.classList.add("show"),Or=2.2}function $o(){Se.clear(),vt.vel.set(0,0,0)}const Zi=km({canvas:Gr,overlay:Qm,menuButton:document.getElementById("controls-toggle"),player:vt,camera:ke,toast:Yo,releaseMovement:$o,isInputBlocked:()=>!!(mn!=null&&mn.isOpen||ie!=null&&ie.paused),setMenuPaused:n=>ie==null?void 0:ie.setPaused("controls",n)}),e0=new O;mn=Xm({document,window,canvas:Gr,content:tc,look:Zi,releaseMovement:$o,dialog:document.getElementById("reader"),hint:document.getElementById("interaction-hint"),returnFocus:Gr,canInteract:()=>!Zi.menuOpen&&!(ie!=null&&ie.paused)&&document.hasFocus(),getTarget:()=>Wm(ke.position,ke.getWorldDirection(e0),ec,Kr,Hm),setPaused:n=>ie==null?void 0:ie.setPaused("reading",n)});const n0=new O;function jo(n){const t=(Se.has("KeyW")||Se.has("ArrowUp")?1:0)-(Se.has("KeyS")||Se.has("ArrowDown")?1:0),e=(Se.has("KeyD")||Se.has("ArrowRight")?1:0)-(Se.has("KeyA")||Se.has("ArrowLeft")?1:0),i=(Se.has("ShiftLeft")||Se.has("ShiftRight")?4.6:2.5)*(Yi?.55:1),r=Math.sin(vt.yaw),s=Math.cos(vt.yaw),o=-r*t+s*e,a=-s*t-r*e,l=Math.hypot(o,a)||1,u=n0.set(o/l*i*(t||e?1:0),0,a/l*i*(t||e?1:0)),c=1-Math.exp(-n*12);vt.vel.lerp(u,c);const f=Yi?1.15:vt.height,h=vt.pos.x+vt.vel.x*n,p=vt.pos.z+vt.vel.z*n;Is(h,p,vt.pos.y,f)?Is(h,vt.pos.z,vt.pos.y,f)?Is(vt.pos.x,p,vt.pos.y,f)?vt.vel.multiplyScalar(.2):(vt.pos.z=p,vt.vel.x*=.5):(vt.pos.x=h,vt.vel.z*=.5):(vt.pos.x=h,vt.pos.z=p);const g=Jm(vt.pos.x,vt.pos.z,vt.pos.y);g>=vt.pos.y-vt.step&&g>-1/0&&vt.vy<=0?(vt.pos.y=g,vt.vy=0):(vt.vy-=9.8*n,vt.pos.y+=vt.vy*n,g>-1/0&&vt.pos.y<g&&(vt.pos.y=g,vt.vy=0)),vt.pos.y<-10&&Ki(0),vt.smoothY+=(vt.pos.y-vt.smoothY)*(1-Math.exp(-n*14)),vt.eyeCur+=((Yi?1:vt.eye)-vt.eyeCur)*(1-Math.exp(-n*10)),ke.position.set(vt.pos.x,vt.smoothY+vt.eyeCur,vt.pos.z),ke.rotation.set(vt.pitch,vt.yaw,0)}function Ko(){ke.aspect=window.innerWidth/window.innerHeight,ke.updateProjectionMatrix(),he.setSize(window.innerWidth,window.innerHeight),Vr.uniforms.scale.value=window.innerHeight*Rn*.5}addEventListener("resize",Ko);Ko();const i0=new Dn({colorWrite:!1}),wo=[];le.traverse(n=>{n.material&&(n.material.transparent||n.material.isShaderMaterial||n.isPoints)&&wo.push(n)});he.autoClear=!1;let hc=!1;function Zo(){if(he.clear(),hc){for(const n of wo)n.visible=!1;le.overrideMaterial=i0,he.render(le,ke),le.overrideMaterial=null;for(const n of wo)n.visible=!0}he.render(le,ke)}const Pr=[];let Ds=0,Us=0,Vi=0;Ki(0);jo(0);Wr.classList.remove("show");he.compile(le,ke);le.traverse(n=>{const t=n.material;if(t){for(const e of["map","bumpMap"])t[e]&&he.initTexture(t[e]);t.uniforms&&t.uniforms.map&&he.initTexture(t.uniforms.map.value)}});he.shadowMap.needsUpdate=!0;function r0(n,t){const e=Math.min(t,.05);Vi+=e,jo(e),Us+=e,Us>=.125&&(Us=0,mn.updateHint());for(const i of lc)i.userData.fire&&(i.intensity=i.userData.i*(.82+.12*Math.sin(Vi*9.1)+.08*Math.sin(Vi*23.7+1.3)));if(window.__shafts.uniforms.t.value=Vi,Vr.uniforms.t.value=Vi,Zo(),t>0&&t<.25&&document.visibilityState==="visible"&&Pr.push(t*1e3),Pr.length>240&&Pr.shift(),Ds+=t,Ds>.5){Ds=0;const i=[...Pr].sort((a,l)=>a-l),r=i.reduce((a,l)=>a+l,0)/i.length,s=i[Math.floor(i.length*.99)-1]||r,o=he.info.render;uc.textContent=`${(1e3/r).toFixed(0)} fps  avg ${r.toFixed(1)} ms  p99 ${s.toFixed(1)} ms
calls ${o.calls}  tris ${(o.triangles/1e3).toFixed(0)}k  scale ${Math.round(Rn*100)}%
pos ${vt.pos.x.toFixed(1)} ${vt.pos.y.toFixed(2)} ${vt.pos.z.toFixed(1)}`}Or>0&&(Or-=e,Or<=0&&Wr.classList.remove("show"))}ie=qm({tick:r0,request:n=>window.requestAnimationFrame(n),cancel:n=>window.cancelAnimationFrame(n),now:()=>performance.now()});const fc=[];function nr(n,t,e){n.addEventListener(t,e),fc.push(()=>n.removeEventListener(t,e))}nr(window,"blur",()=>{$o(),ie.setPaused("focus",!0)});nr(window,"focus",()=>ie.setPaused("focus",!1));nr(document,"visibilitychange",()=>ie.setPaused("visibility",document.visibilityState!=="visible"));nr(window,"pagehide",n=>{if(Zi.pause(),ie.setPaused("page",!0),!n.persisted){mn.dispose(),Zi.dispose(),ie.dispose(),Km.dispose(),he.dispose();for(const t of fc)t()}});nr(window,"pageshow",()=>{Zi.resume(),ie.setPaused("page",!1),ie.setPaused("visibility",document.visibilityState!=="visible"),ie.setPaused("focus",!document.hasFocus())});Zo();ie.setPaused("visibility",document.visibilityState!=="visible");ie.setPaused("focus",!document.hasFocus());ie.start();document.getElementById("loading").classList.add("hide");window.__lib={P:vt,setView:Ki,solids:Kr,renderer:he,scene:le,camera:ke,books:oc,drawFrame:Zo,setPrepass:n=>hc=n,sim:(n,t)=>{n.forEach(e=>Se.add(e));for(let e=0;e<t;e+=1/60)jo(1/60);return n.forEach(e=>Se.delete(e)),vt.pos.toArray().map(e=>+e.toFixed(2))}};
