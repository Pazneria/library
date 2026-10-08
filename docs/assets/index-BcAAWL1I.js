(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="170",kc=0,Sa=1,Hc=2,Bo=1,Gc=2,dn=3,In=0,Ee=1,Fe=2,Cn=0,vi=1,Xr=2,ya=3,ba=4,Vc=5,Vn=100,Wc=101,Xc=102,qc=103,Yc=104,Kc=200,$c=201,jc=202,Zc=203,Vs=204,Ws=205,Jc=206,Qc=207,tu=208,eu=209,nu=210,iu=211,ru=212,su=213,ou=214,Xs=0,qs=1,Ys=2,bi=3,Ks=4,$s=5,js=6,Zs=7,zo=0,au=1,lu=2,Pn=0,cu=1,uu=2,hu=3,Ol=4,fu=5,du=6,pu=7,Bl=300,Ei=301,Ti=302,Js=303,Qs=304,Zr=306,tr=1e3,Xn=1001,to=1002,Oe=1003,mu=1004,dr=1005,Ke=1006,os=1007,pn=1008,_n=1009,zl=1010,kl=1011,er=1012,ko=1013,qn=1014,tn=1015,sr=1016,Ho=1017,Go=1018,wi=1020,Hl=35902,Gl=1021,Vl=1022,$e=1023,Wl=1024,Xl=1025,Mi=1026,Ai=1027,Vo=1028,Wo=1029,ql=1030,Xo=1031,qo=1033,Br=33776,zr=33777,kr=33778,Hr=33779,eo=35840,no=35841,io=35842,ro=35843,so=36196,oo=37492,ao=37496,lo=37808,co=37809,uo=37810,ho=37811,fo=37812,po=37813,mo=37814,go=37815,_o=37816,xo=37817,vo=37818,Mo=37819,So=37820,yo=37821,Gr=36492,bo=36494,Eo=36495,Yl=36283,To=36284,wo=36285,Ao=36286,gu=3200,_u=3201,Yo=0,xu=1,An="",be="srgb",Ii="srgb-linear",Jr="linear",ie="srgb",ti=7680,Ea=519,vu=512,Mu=513,Su=514,Kl=515,yu=516,bu=517,Eu=518,Tu=519,qr=35044,Ta="300 es",mn=2e3,Yr=2001;class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],as=Math.PI/180,Ro=180/Math.PI;function or(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function Ae(n,t,e){return Math.max(t,Math.min(e,n))}function wu(n,t){return(n%t+t)%t}function ls(n,t,e){return(1-e)*n+e*t}function Bi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,r,s,o,a,l,u){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],v=r[1],b=r[4],x=r[7],A=r[2],w=r[5],R=r[8];return s[0]=o*_+a*v+l*A,s[3]=o*m+a*b+l*w,s[6]=o*d+a*x+l*R,s[1]=u*_+c*v+h*A,s[4]=u*m+c*b+h*w,s[7]=u*d+c*x+h*R,s[2]=f*_+p*v+g*A,s[5]=f*m+p*b+g*w,s[8]=f*d+p*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=e*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*u-c*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(c*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(i*l-u*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cs.makeScale(t,e)),this}rotate(t){return this.premultiply(cs.makeRotation(-t)),this}translate(t,e){return this.premultiply(cs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cs=new Ht;function $l(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Au(){const n=Kr("canvas");return n.style.display="block",n}const wa={};function $i(n){n in wa||(wa[n]=!0,console.warn(n))}function Ru(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Cu(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pu(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(n.r=gn(n.r),n.g=gn(n.g),n.b=gn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(n.r=Si(n.r),n.g=Si(n.g),n.b=Si(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===An?Jr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Si(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Aa=[.64,.33,.3,.6,.15,.06],Ra=[.2126,.7152,.0722],Ca=[.3127,.329],Pa=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),La=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Ii]:{primaries:Aa,whitePoint:Ca,transfer:Jr,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:Ra,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Aa,whitePoint:Ca,transfer:ie,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:Ra,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});let ei;class Lu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=Kr("canvas")),ei.width=t.width,ei.height=t.height;const i=ei.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Kr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gn(e[i]/255)*255):e[i]=gn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Iu=0;class jl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=or(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(us(r[o].image)):s.push(us(r[o]))}else s=us(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function us(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Du=0;class Te extends Di{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,i=Xn,r=Xn,s=Ke,o=pn,a=$e,l=_n,u=Te.DEFAULT_ANISOTROPY,c=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=or(),this.name="",this.source=new jl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Bl;Te.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,i=0,r=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(u+1)/2,x=(p+1)/2,A=(d+1)/2,w=(c+f)/4,R=(h+_)/4,I=(g+m)/4;return b>x&&b>A?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=w/i,s=R/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=I/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=I/s),this.set(i,r,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uu extends Di{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Te(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new jl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Uu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Zl extends Te{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nu extends Te{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||u!==p||c!==g){let m=1-a;const d=l*f+u*p+c*g+h*_,v=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const A=Math.sqrt(b),w=Math.atan2(A,d*v);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const x=a*v;if(l=l*m+f*x,u=u*m+p*x,c=c*m+g*x,h=h*m+_*x,m===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=A,u*=A,c*=A,h*=A}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+c*h+l*p-u*f,t[e+1]=l*g+c*f+u*h-a*p,t[e+2]=u*g+c*p+a*f-l*h,t[e+3]=c*g-a*h-l*f-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-e)*c)/u,f=Math.sin(e*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return hs.copy(this).projectOnVector(t),this.sub(hs)}reflect(t){return this.sub(hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hs=new N,Ia=new rn;class $n{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,We):We.fromBufferAttribute(s,o),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pr.copy(i.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),mr.subVectors(this.max,zi),ni.subVectors(t.a,zi),ii.subVectors(t.b,zi),ri.subVectors(t.c,zi),Sn.subVectors(ii,ni),yn.subVectors(ri,ii),Nn.subVectors(ni,ri);let e=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-Nn.z,Nn.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,Nn.z,0,-Nn.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-Nn.y,Nn.x,0];return!fs(e,ni,ii,ri,mr)||(e=[1,0,0,0,1,0,0,0,1],!fs(e,ni,ii,ri,mr))?!1:(gr.crossVectors(Sn,yn),e=[gr.x,gr.y,gr.z],fs(e,ni,ii,ri,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new N,new N,new N,new N,new N,new N,new N,new N],We=new N,pr=new $n,ni=new N,ii=new N,ri=new N,Sn=new N,yn=new N,Nn=new N,zi=new N,mr=new N,gr=new N,Fn=new N;function fs(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fn.fromArray(n,s);const a=r.x*Math.abs(Fn.x)+r.y*Math.abs(Fn.y)+r.z*Math.abs(Fn.z),l=t.dot(Fn),u=e.dot(Fn),c=i.dot(Fn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Fu=new $n,ki=new N,ds=new N;class Ui{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Fu.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ki,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ds.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(ds)),this.expandByPoint(ki.copy(t.center).sub(ds))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new N,ps=new N,_r=new N,bn=new N,ms=new N,xr=new N,gs=new N;class Jl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ps.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(ps);const s=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=bn.dot(this.direction),l=-bn.dot(_r),u=bn.lengthSq(),c=Math.abs(1-o*o);let h,f,p,g;if(c>0)if(h=o*l-a,f=o*a-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ps).addScaledVector(_r,f),p}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const i=cn.dot(this.direction),r=cn.dot(cn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),c>=0?(s=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(s=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,i,r,s){ms.subVectors(e,t),xr.subVectors(i,t),gs.crossVectors(ms,xr);let o=this.direction.dot(gs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,t);const l=a*this.direction.dot(xr.crossVectors(bn,xr));if(l<0)return null;const u=a*this.direction.dot(ms.cross(bn));if(u<0||l+u>o)return null;const c=-a*bn.dot(gs);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,i,r,s,o,a,l,u,c,h,f,p,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,h,f,p,g,_,m)}set(t,e,i,r,s,o,a,l,u,c,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/si.setFromMatrixColumn(t,0).length(),s=1/si.setFromMatrixColumn(t,1).length(),o=1/si.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*c,p=o*h,g=a*c,_=a*h;e[0]=l*c,e[4]=-l*h,e[8]=u,e[1]=p+g*u,e[5]=f-_*u,e[9]=-a*l,e[2]=_-f*u,e[6]=g+p*u,e[10]=o*l}else if(t.order==="YXZ"){const f=l*c,p=l*h,g=u*c,_=u*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*u,e[1]=o*h,e[5]=o*c,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*c,p=l*h,g=u*c,_=u*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*c,e[9]=_-f*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*c,p=o*h,g=a*c,_=a*h;e[0]=l*c,e[4]=g*u-p,e[8]=f*u+_,e[1]=l*h,e[5]=_*u+f,e[9]=p*u-g,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=-h,e[8]=u*c,e[1]=f*h+_,e[5]=o*c,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*c,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ou,t,Bu)}lookAt(t,e,i){const r=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),En.crossVectors(i,De),En.lengthSq()===0&&(Math.abs(i.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),En.crossVectors(i,De)),En.normalize(),vr.crossVectors(De,En),r[0]=En.x,r[4]=vr.x,r[8]=De.x,r[1]=En.y,r[5]=vr.y,r[9]=De.y,r[2]=En.z,r[6]=vr.z,r[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],b=i[7],x=i[11],A=i[15],w=r[0],R=r[4],I=r[8],y=r[12],M=r[1],L=r[5],U=r[9],B=r[13],q=r[2],$=r[6],Z=r[10],et=r[14],Y=r[3],rt=r[7],ft=r[11],it=r[15];return s[0]=o*w+a*M+l*q+u*Y,s[4]=o*R+a*L+l*$+u*rt,s[8]=o*I+a*U+l*Z+u*ft,s[12]=o*y+a*B+l*et+u*it,s[1]=c*w+h*M+f*q+p*Y,s[5]=c*R+h*L+f*$+p*rt,s[9]=c*I+h*U+f*Z+p*ft,s[13]=c*y+h*B+f*et+p*it,s[2]=g*w+_*M+m*q+d*Y,s[6]=g*R+_*L+m*$+d*rt,s[10]=g*I+_*U+m*Z+d*ft,s[14]=g*y+_*B+m*et+d*it,s[3]=v*w+b*M+x*q+A*Y,s[7]=v*R+b*L+x*$+A*rt,s[11]=v*I+b*U+x*Z+A*ft,s[15]=v*y+b*B+x*et+A*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+e*l*p-e*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+e*u*h-e*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-e*l*h+e*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],v=h*m*u-_*f*u+_*l*p-a*m*p-h*l*d+a*f*d,b=g*f*u-c*m*u-g*l*p+o*m*p+c*l*d-o*f*d,x=c*_*u-g*h*u+g*a*p-o*_*p-c*a*d+o*h*d,A=g*h*l-c*_*l-g*a*f+o*_*f+c*a*m-o*h*m,w=e*v+i*b+r*x+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=v*R,t[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*R,t[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*R,t[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*R,t[4]=b*R,t[5]=(c*m*s-g*f*s+g*r*p-e*m*p-c*r*d+e*f*d)*R,t[6]=(g*l*s-o*m*s-g*r*u+e*m*u+o*r*d-e*l*d)*R,t[7]=(o*f*s-c*l*s+c*r*u-e*f*u-o*r*p+e*l*p)*R,t[8]=x*R,t[9]=(g*h*s-c*_*s-g*i*p+e*_*p+c*i*d-e*h*d)*R,t[10]=(o*_*s-g*a*s+g*i*u-e*_*u-o*i*d+e*a*d)*R,t[11]=(c*a*s-o*h*s-c*i*u+e*h*u+o*i*p-e*a*p)*R,t[12]=A*R,t[13]=(c*_*r-g*h*r+g*i*f-e*_*f-c*i*m+e*h*m)*R,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*R,t[15]=(o*h*r-c*a*r+c*i*l-e*h*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,g=s*h,_=o*c,m=o*h,d=a*h,v=l*u,b=l*c,x=l*h,A=i.x,w=i.y,R=i.z;return r[0]=(1-(_+d))*A,r[1]=(p+x)*A,r[2]=(g-b)*A,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(f+d))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+b)*R,r[9]=(m-v)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=si.set(r[0],r[1],r[2]).length();const o=si.set(r[4],r[5],r[6]).length(),a=si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Xe.copy(this);const u=1/s,c=1/o,h=1/a;return Xe.elements[0]*=u,Xe.elements[1]*=u,Xe.elements[2]*=u,Xe.elements[4]*=c,Xe.elements[5]*=c,Xe.elements[6]*=c,Xe.elements[8]*=h,Xe.elements[9]*=h,Xe.elements[10]*=h,e.setFromRotationMatrix(Xe),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=mn){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let p,g;if(a===mn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Yr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=mn){const l=this.elements,u=1/(e-t),c=1/(i-r),h=1/(o-s),f=(e+t)*u,p=(i+r)*c;let g,_;if(a===mn)g=(o+s)*h,_=-2*h;else if(a===Yr)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const si=new N,Xe=new $t,Ou=new N(0,0,0),Bu=new N(1,1,1),En=new N,vr=new N,De=new N,Da=new $t,Ua=new rn;class Be{constructor(t=0,e=0,i=0,r=Be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Da,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Be.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zu=0;const Na=new N,oi=new rn,un=new $t,Mr=new N,Hi=new N,ku=new N,Hu=new rn,Fa=new N(1,0,0),Oa=new N(0,1,0),Ba=new N(0,0,1),za={type:"added"},Gu={type:"removed"},ai={type:"childadded",child:null},_s={type:"childremoved",child:null};class _e extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new N,e=new Be,i=new rn,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new Ht}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Na.copy(t).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mr.copy(t):Mr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Hi,Mr,this.up):un.lookAt(Mr,Hi,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(un),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(za),ai.child=t,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gu),_s.child=t,this.dispatchEvent(_s),_s.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(za),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,t,ku),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}_e.DEFAULT_UP=new N(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new N,hn=new N,xs=new N,fn=new N,li=new N,ci=new N,ka=new N,vs=new N,Ms=new N,Ss=new N,ys=new re,bs=new re,Es=new re;class Ye{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),qe.subVectors(t,e),r.cross(qe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){qe.subVectors(r,e),hn.subVectors(i,e),xs.subVectors(t,e);const o=qe.dot(qe),a=qe.dot(hn),l=qe.dot(xs),u=hn.dot(hn),c=hn.dot(xs),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return ys.setScalar(0),bs.setScalar(0),Es.setScalar(0),ys.fromBufferAttribute(t,e),bs.fromBufferAttribute(t,i),Es.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ys,s.x),o.addScaledVector(bs,s.y),o.addScaledVector(Es,s.z),o}static isFrontFacing(t,e,i,r){return qe.subVectors(i,e),hn.subVectors(t,e),qe.cross(hn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qe.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Ye.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;li.subVectors(r,i),ci.subVectors(s,i),vs.subVectors(t,i);const l=li.dot(vs),u=ci.dot(vs);if(l<=0&&u<=0)return e.copy(i);Ms.subVectors(t,r);const c=li.dot(Ms),h=ci.dot(Ms);if(c>=0&&h<=c)return e.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(li,o);Ss.subVectors(t,s);const p=li.dot(Ss),g=ci.dot(Ss);if(g>=0&&p<=g)return e.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(i).addScaledVector(ci,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return ka.subVectors(s,r),a=(h-c)/(h-c+(p-g)),e.copy(r).addScaledVector(ka,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(li,o).addScaledVector(ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ts(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class It{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=wu(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ts(o,s,t+1/3),this.g=Ts(o,s,t),this.b=Ts(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=be){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const i=tc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Zt.fromWorkingColorSpace(Se.copy(this),t),Math.round(Ae(Se.r*255,0,255))*65536+Math.round(Ae(Se.g*255,0,255))*256+Math.round(Ae(Se.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Se.copy(this),e);const i=Se.r,r=Se.g,s=Se.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=be){Zt.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,i=Se.g,r=Se.b;return t!==be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(Sr);const i=ls(Tn.h,Sr.h,e),r=ls(Tn.s,Sr.s,e),s=ls(Tn.l,Sr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new It;It.NAMES=tc;let Vu=0;class jn extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=or(),this.name="",this.blending=vi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vs,this.blendDst=Ws,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vs&&(i.blendSrc=this.blendSrc),this.blendDst!==Ws&&(i.blendDst=this.blendDst),this.blendEquation!==Vn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ea&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ri extends jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new N,yr=new Gt;class Re{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qr,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),r=Pe(r,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qr&&(t.usage=this.usage),t}}class ec extends Re{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class nc extends Re{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Yt extends Re{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Wu=0;const ke=new $t,ws=new _e,ui=new N,Ue=new $n,Gi=new $n,ge=new N;class me extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($l(t)?nc:ec)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,i){return ke.makeTranslation(t,e,i),this.applyMatrix4(ke),this}scale(t,e,i){return ke.makeScale(t,e,i),this.applyMatrix4(ke),this}lookAt(t){return ws.lookAt(t),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Gi.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Ue.min,Gi.min),Ue.expandByPoint(ge),ge.addVectors(Ue.max,Gi.max),Ue.expandByPoint(ge)):(Ue.expandByPoint(Gi.min),Ue.expandByPoint(Gi.max))}Ue.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)ge.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ge.fromBufferAttribute(a,u),l&&(ui.fromBufferAttribute(t,u),ge.add(ui)),r=Math.max(r,i.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new N,l[I]=new N;const u=new N,c=new N,h=new N,f=new Gt,p=new Gt,g=new Gt,_=new N,m=new N;function d(I,y,M){u.fromBufferAttribute(i,I),c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,I),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),c.sub(u),h.sub(u),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),a[I].add(_),a[y].add(_),a[M].add(_),l[I].add(m),l[y].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,y=v.length;I<y;++I){const M=v[I],L=M.start,U=M.count;for(let B=L,q=L+U;B<q;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new N,x=new N,A=new N,w=new N;function R(I){A.fromBufferAttribute(r,I),w.copy(A);const y=a[I];b.copy(y),b.sub(A.multiplyScalar(A.dot(y))).normalize(),x.crossVectors(w,y);const L=x.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,L)}for(let I=0,y=v.length;I<y;++I){const M=v[I],L=M.start,U=M.count;for(let B=L,q=L+U;B<q;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,h=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new Re(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new $t,On=new Jl,br=new Ui,Ga=new N,Er=new N,Tr=new N,wr=new N,As=new N,Ar=new N,Va=new N,Rr=new N;class ne extends _e{constructor(t=new me,e=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ar.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(As.fromBufferAttribute(h,t),o?Ar.addScaledVector(As,c):Ar.addScaledVector(As.sub(e),c))}e.add(Ar)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(s),On.copy(t.ray).recast(t.near),!(br.containsPoint(On.origin)===!1&&(On.intersectSphere(br,Ga)===null||On.origin.distanceToSquared(Ga)>(t.far-t.near)**2))&&(Ha.copy(s).invert(),On.copy(t.ray).applyMatrix4(Ha),!(i.boundingBox!==null&&On.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,A=b;x<A;x+=3){const w=a.getX(x),R=a.getX(x+1),I=a.getX(x+2);r=Cr(this,d,t,i,u,c,h,w,R,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);r=Cr(this,o,t,i,u,c,h,v,b,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,A=b;x<A;x+=3){const w=x,R=x+1,I=x+2;r=Cr(this,d,t,i,u,c,h,w,R,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,b=m+1,x=m+2;r=Cr(this,o,t,i,u,c,h,v,b,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Xu(n,t,e,i,r,s,o,a){let l;if(t.side===Ee?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===In,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Rr);return u<e.near||u>e.far?null:{distance:u,point:Rr.clone(),object:n}}function Cr(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,Er),n.getVertexPosition(l,Tr),n.getVertexPosition(u,wr);const c=Xu(n,t,e,i,Er,Tr,wr,Va);if(c){const h=new N;Ye.getBarycoord(Va,Er,Tr,wr,h),r&&(c.uv=Ye.getInterpolatedAttribute(r,a,l,u,h,new Gt)),s&&(c.uv1=Ye.getInterpolatedAttribute(s,a,l,u,h,new Gt)),o&&(c.normal=Ye.getInterpolatedAttribute(o,a,l,u,h,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new N,materialIndex:0};Ye.getNormal(Er,Tr,wr,f.normal),c.face=f,c.barycoord=h}return c}class xn extends me{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2));function g(_,m,d,v,b,x,A,w,R,I,y){const M=x/R,L=A/I,U=x/2,B=A/2,q=w/2,$=R+1,Z=I+1;let et=0,Y=0;const rt=new N;for(let ft=0;ft<Z;ft++){const it=ft*L-B;for(let E=0;E<$;E++){const D=E*M-U;rt[_]=D*v,rt[m]=it*b,rt[d]=q,u.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[d]=w>0?1:-1,c.push(rt.x,rt.y,rt.z),h.push(E/R),h.push(1-ft/I),et+=1}}for(let ft=0;ft<I;ft++)for(let it=0;it<R;it++){const E=f+it+$*ft,D=f+it+$*(ft+1),P=f+(it+1)+$*(ft+1),F=f+(it+1)+$*ft;l.push(E,D,F),l.push(D,P,F),Y+=6}a.addGroup(p,Y,y),p+=Y,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function we(n){const t={};for(let e=0;e<n.length;e++){const i=Ci(n[e]);for(const r in i)t[r]=i[r]}return t}function qu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ic(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Yu={clone:Ci,merge:we};var Ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ku,this.fragmentShader=$u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class rc extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new N,Wa=new Gt,Xa=new Gt;class Ne extends rc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,Wa,Xa),e.subVectors(Xa,Wa)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(as*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hi=-90,fi=1;class ju extends _e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ne(hi,fi,t,e);r.layers=this.layers,this.add(r);const s=new Ne(hi,fi,t,e);s.layers=this.layers,this.add(s);const o=new Ne(hi,fi,t,e);o.layers=this.layers,this.add(o);const a=new Ne(hi,fi,t,e);a.layers=this.layers,this.add(a);const l=new Ne(hi,fi,t,e);l.layers=this.layers,this.add(l);const u=new Ne(hi,fi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sc extends Te{constructor(t,e,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zu extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new sc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xn(5,5,5),s=new He({name:"CubemapFromEquirect",uniforms:Ci(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ee,blending:Cn});s.uniforms.tEquirect.value=e;const o=new ne(r,s),a=e.minFilter;return e.minFilter===pn&&(e.minFilter=Ke),new ju(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Rs=new N,Ju=new N,Qu=new Ht;class Hn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Rs.subVectors(i,e).cross(Ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Rs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qu.getNormalMatrix(t),r=this.coplanarPoint(Rs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Ui,Pr=new N;class Ko{constructor(t=new Hn,e=new Hn,i=new Hn,r=new Hn,s=new Hn,o=new Hn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],v=r[13],b=r[14],x=r[15];if(i[0].setComponents(l-s,f-u,m-p,x-d).normalize(),i[1].setComponents(l+s,f+u,m+p,x+d).normalize(),i[2].setComponents(l+o,f+c,m+g,x+v).normalize(),i[3].setComponents(l-o,f-c,m-g,x-v).normalize(),i[4].setComponents(l-a,f-h,m-_,x-b).normalize(),e===mn)i[5].setComponents(l+a,f+h,m+_,x+b).normalize();else if(e===Yr)i[5].setComponents(a,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Pr.x=r.normal.x>0?t.max.x:t.min.x,Pr.y=r.normal.y>0?t.max.y:t.min.y,Pr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oc(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function th(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Ln extends me{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const v=d*f-o;for(let b=0;b<u;b++){const x=b*h-s;g.push(x,-v,0),_.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const b=v+u*d,x=v+u*(d+1),A=v+1+u*(d+1),w=v+1+u*d;p.push(b,x,w),p.push(x,A,w)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.widthSegments,t.heightSegments)}}var eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nh=`#ifdef USE_ALPHAHASH
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
#endif`,ih=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
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
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ch=`#ifdef USE_BATCHING
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
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ph=`#ifdef USE_IRIDESCENCE
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
#endif`,mh=`#ifdef USE_BUMPMAP
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
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Eh=`#define PI 3.141592653589793
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
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ih=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
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
}`,Vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qh=`uniform bool receiveShadow;
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
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jh=`PhysicalMaterial material;
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
#endif`,Qh=`struct PhysicalMaterial {
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
}`,tf=`
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hf=`#if defined( USE_POINTS_UV )
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
#endif`,ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
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
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ef=`#ifdef USE_NORMALMAP
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
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kf=`float getShadowMask() {
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
}`,Hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wf=`#ifdef USE_SKINNING
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
#endif`,Xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,jf=`#ifdef USE_TRANSMISSION
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nd=`uniform sampler2D t2D;
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`#include <common>
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
}`,ld=`#if DEPTH_PACKING == 3200
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
}`,cd=`#define DISTANCE
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
}`,ud=`#define DISTANCE
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
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dd=`uniform float scale;
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
}`,pd=`uniform vec3 diffuse;
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
}`,md=`#include <common>
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
}`,gd=`uniform vec3 diffuse;
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
}`,_d=`#define LAMBERT
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
}`,xd=`#define LAMBERT
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
}`,vd=`#define MATCAP
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
}`,Md=`#define MATCAP
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
}`,Sd=`#define NORMAL
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
}`,yd=`#define NORMAL
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
}`,bd=`#define PHONG
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
}`,Ed=`#define PHONG
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
}`,Td=`#define STANDARD
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
}`,wd=`#define STANDARD
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
}`,Ad=`#define TOON
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
}`,Rd=`#define TOON
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
}`,Cd=`uniform float size;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Ld=`#include <common>
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
}`,Id=`uniform vec3 color;
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
}`,Dd=`uniform float rotation;
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
}`,Ud=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:eh,alphahash_pars_fragment:nh,alphamap_fragment:ih,alphamap_pars_fragment:rh,alphatest_fragment:sh,alphatest_pars_fragment:oh,aomap_fragment:ah,aomap_pars_fragment:lh,batching_pars_vertex:ch,batching_vertex:uh,begin_vertex:hh,beginnormal_vertex:fh,bsdfs:dh,iridescence_fragment:ph,bumpmap_pars_fragment:mh,clipping_planes_fragment:gh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:xh,clipping_planes_vertex:vh,color_fragment:Mh,color_pars_fragment:Sh,color_pars_vertex:yh,color_vertex:bh,common:Eh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:wh,displacementmap_pars_vertex:Ah,displacementmap_vertex:Rh,emissivemap_fragment:Ch,emissivemap_pars_fragment:Ph,colorspace_fragment:Lh,colorspace_pars_fragment:Ih,envmap_fragment:Dh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:Nh,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:Yh,envmap_vertex:Oh,fog_vertex:Bh,fog_pars_vertex:zh,fog_fragment:kh,fog_pars_fragment:Hh,gradientmap_pars_fragment:Gh,lightmap_pars_fragment:Vh,lights_lambert_fragment:Wh,lights_lambert_pars_fragment:Xh,lights_pars_begin:qh,lights_toon_fragment:Kh,lights_toon_pars_fragment:$h,lights_phong_fragment:jh,lights_phong_pars_fragment:Zh,lights_physical_fragment:Jh,lights_physical_pars_fragment:Qh,lights_fragment_begin:tf,lights_fragment_maps:ef,lights_fragment_end:nf,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:af,map_fragment:lf,map_pars_fragment:cf,map_particle_fragment:uf,map_particle_pars_fragment:hf,metalnessmap_fragment:ff,metalnessmap_pars_fragment:df,morphinstance_vertex:pf,morphcolor_vertex:mf,morphnormal_vertex:gf,morphtarget_pars_vertex:_f,morphtarget_vertex:xf,normal_fragment_begin:vf,normal_fragment_maps:Mf,normal_pars_fragment:Sf,normal_pars_vertex:yf,normal_vertex:bf,normalmap_pars_fragment:Ef,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Af,iridescence_pars_fragment:Rf,opaque_fragment:Cf,packing:Pf,premultiplied_alpha_fragment:Lf,project_vertex:If,dithering_fragment:Df,dithering_pars_fragment:Uf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:Bf,shadowmap_vertex:zf,shadowmask_pars_fragment:kf,skinbase_vertex:Hf,skinning_pars_vertex:Gf,skinning_vertex:Vf,skinnormal_vertex:Wf,specularmap_fragment:Xf,specularmap_pars_fragment:qf,tonemapping_fragment:Yf,tonemapping_pars_fragment:Kf,transmission_fragment:$f,transmission_pars_fragment:jf,uv_pars_fragment:Zf,uv_pars_vertex:Jf,uv_vertex:Qf,worldpos_vertex:td,background_vert:ed,background_frag:nd,backgroundCube_vert:id,backgroundCube_frag:rd,cube_vert:sd,cube_frag:od,depth_vert:ad,depth_frag:ld,distanceRGBA_vert:cd,distanceRGBA_frag:ud,equirect_vert:hd,equirect_frag:fd,linedashed_vert:dd,linedashed_frag:pd,meshbasic_vert:md,meshbasic_frag:gd,meshlambert_vert:_d,meshlambert_frag:xd,meshmatcap_vert:vd,meshmatcap_frag:Md,meshnormal_vert:Sd,meshnormal_frag:yd,meshphong_vert:bd,meshphong_frag:Ed,meshphysical_vert:Td,meshphysical_frag:wd,meshtoon_vert:Ad,meshtoon_frag:Rd,points_vert:Cd,points_frag:Pd,shadow_vert:Ld,shadow_frag:Id,sprite_vert:Dd,sprite_frag:Ud},ht={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Qe={basic:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new It(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:we([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:we([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new It(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:we([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:we([ht.points,ht.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:we([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:we([ht.common,ht.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:we([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:we([ht.sprite,ht.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:we([ht.common,ht.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:we([ht.lights,ht.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Qe.physical={uniforms:we([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Lr={r:0,b:0,g:0},zn=new Be,Nd=new $t;function Fd(n,t,e,i,r,s,o){const a=new It(0);let l=s===!0?0:1,u,c,h=null,f=0,p=null;function g(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?e:t).get(b)),b}function _(v){let b=!1;const x=g(v);x===null?d(a,l):x&&x.isColor&&(d(x,1),b=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Zr)?(c===void 0&&(c=new ne(new xn(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Ci(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),zn.copy(b.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Nd.makeRotationFromEuler(zn)),c.material.toneMapped=Zt.getTransfer(x.colorSpace)!==ie,(h!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new ne(new Ln(2,2),new He({name:"BackgroundMaterial",uniforms:Ci(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=Zt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,b){v.getRGB(Lr,ic(n)),i.buffers.color.setClear(Lr.r,Lr.g,Lr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function Od(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,L,U,B,q){let $=!1;const Z=h(B,U,L);s!==Z&&(s=Z,u(s.object)),$=p(M,B,U,q),$&&g(M,B,U,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(M,L,U,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function h(M,L,U){const B=U.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let $=q[L.id];$===void 0&&($={},q[L.id]=$);let Z=$[B];return Z===void 0&&(Z=f(l()),$[B]=Z),Z}function f(M){const L=[],U=[],B=[];for(let q=0;q<e;q++)L[q]=0,U[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,L,U,B){const q=s.attributes,$=L.attributes;let Z=0;const et=U.getAttributes();for(const Y in et)if(et[Y].location>=0){const ft=q[Y];let it=$[Y];if(it===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),ft===void 0||ft.attribute!==it||it&&ft.data!==it.data)return!0;Z++}return s.attributesNum!==Z||s.index!==B}function g(M,L,U,B){const q={},$=L.attributes;let Z=0;const et=U.getAttributes();for(const Y in et)if(et[Y].location>=0){let ft=$[Y];ft===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor));const it={};it.attribute=ft,ft&&ft.data&&(it.data=ft.data),q[Y]=it,Z++}s.attributes=q,s.attributesNum=Z,s.index=B}function _(){const M=s.newAttributes;for(let L=0,U=M.length;L<U;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const U=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;U[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),q[M]!==L&&(n.vertexAttribDivisor(M,L),q[M]=L)}function v(){const M=s.newAttributes,L=s.enabledAttributes;for(let U=0,B=L.length;U<B;U++)L[U]!==M[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function b(M,L,U,B,q,$,Z){Z===!0?n.vertexAttribIPointer(M,L,U,q,$):n.vertexAttribPointer(M,L,U,B,q,$)}function x(M,L,U,B){_();const q=B.attributes,$=U.getAttributes(),Z=L.defaultAttributeValues;for(const et in $){const Y=$[et];if(Y.location>=0){let rt=q[et];if(rt===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const ft=rt.normalized,it=rt.itemSize,E=t.get(rt);if(E===void 0)continue;const D=E.buffer,P=E.type,F=E.bytesPerElement,G=P===n.INT||P===n.UNSIGNED_INT||rt.gpuType===ko;if(rt.isInterleavedBufferAttribute){const j=rt.data,at=j.stride,lt=rt.offset;if(j.isInstancedInterleavedBuffer){for(let ut=0;ut<Y.locationSize;ut++)d(Y.location+ut,j.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ut=0;ut<Y.locationSize;ut++)m(Y.location+ut);n.bindBuffer(n.ARRAY_BUFFER,D);for(let ut=0;ut<Y.locationSize;ut++)b(Y.location+ut,it/Y.locationSize,P,ft,at*F,(lt+it/Y.locationSize*ut)*F,G)}else{if(rt.isInstancedBufferAttribute){for(let j=0;j<Y.locationSize;j++)d(Y.location+j,rt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let j=0;j<Y.locationSize;j++)m(Y.location+j);n.bindBuffer(n.ARRAY_BUFFER,D);for(let j=0;j<Y.locationSize;j++)b(Y.location+j,it/Y.locationSize,P,ft,it*F,it/Y.locationSize*j*F,G)}}else if(Z!==void 0){const ft=Z[et];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(Y.location,ft);break;case 3:n.vertexAttrib3fv(Y.location,ft);break;case 4:n.vertexAttrib4fv(Y.location,ft);break;default:n.vertexAttrib1fv(Y.location,ft)}}}}v()}function A(){I();for(const M in i){const L=i[M];for(const U in L){const B=L[U];for(const q in B)c(B[q].object),delete B[q];delete L[U]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const U in L){const B=L[U];for(const q in B)c(B[q].object),delete B[q];delete L[U]}delete i[M.id]}function R(M){for(const L in i){const U=i[L];if(U[M.id]===void 0)continue;const B=U[M.id];for(const q in B)c(B[q].object),delete B[q];delete U[M.id]}}function I(){y(),o=!0,s!==r&&(s=r,u(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Bd(n,t,e){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),e.update(c,i,h))}function a(u,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];e.update(p,i,1)}function l(u,c,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zd(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==$e&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==_n&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==tn&&!I)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function kd(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Hn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,b=v*4;let x=d.clippingState||null;l.value=x,x=c(g,f,b,p);for(let A=0;A!==b;++A)x[A]=e[A];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,x=p;b!==_;++b,x+=4)o.copy(h[b]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Hd(n){let t=new WeakMap;function e(o,a){return a===Js?o.mapping=Ei:a===Qs&&(o.mapping=Ti),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Js||a===Qs)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Zu(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class ac extends rc{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _i=4,qa=[.125,.215,.35,.446,.526,.582],Wn=20,Cs=new ac,Ya=new It;let Ps=null,Ls=0,Is=0,Ds=!1;const Gn=(1+Math.sqrt(5))/2,di=1/Gn,Ka=[new N(-Gn,di,0),new N(Gn,di,0),new N(-di,0,Gn),new N(di,0,Gn),new N(0,Gn,-di),new N(0,Gn,di),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Co{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ps=this._renderer.getRenderTarget(),Ls=this._renderer.getActiveCubeFace(),Is=this._renderer.getActiveMipmapLevel(),Ds=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ps,Ls,Is),this._renderer.xr.enabled=Ds,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ps=this._renderer.getRenderTarget(),Ls=this._renderer.getActiveCubeFace(),Is=this._renderer.getActiveMipmapLevel(),Ds=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:sr,format:$e,colorSpace:Ii,depthBuffer:!1},r=$a(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$a(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gd(s)),this._blurMaterial=Vd(s,t,e)}return r}_compileMaterial(t){const e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,Cs)}_sceneToCubeUV(t,e,i,r){const a=new Ne(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Ya),c.toneMapping=Pn,c.autoClear=!1;const p=new Ri({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),g=new ne(new xn,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ya),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const b=this._cubeSize;Ir(r,v*b,d>2?b:0,b,b),c.setRenderTarget(r),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ei||t.mapping===Ti;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ir(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Cs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ka[(r-s-1)%Ka.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new ne(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wn-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Wn;m>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const d=[];let v=0;for(let R=0;R<Wn;++R){const I=R/_,y=Math.exp(-I*I/2);d.push(y),R===0?v+=y:R<m&&(v+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const x=this._sizeLods[r],A=3*x*(r>b-_i?r-b+_i:0),w=4*(this._cubeSize-x);Ir(e,A,w,3*x,2*x),l.setRenderTarget(e),l.render(h,Cs)}}function Gd(n){const t=[],e=[],i=[];let r=n;const s=n-_i+1+qa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-_i?l=qa[o-n+_i-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),b=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,I=w>2?0:-1,y=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(y,_*g*w),b.set(f,m*g*w);const M=[w,w,w,w,w,w];x.set(M,d*g*w)}const A=new me;A.setAttribute("position",new Re(v,_)),A.setAttribute("uv",new Re(b,m)),A.setAttribute("faceIndex",new Re(x,d)),t.push(A),r>_i&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $a(n,t,e){const i=new Yn(n,t,e);return i.texture.mapping=Zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ir(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Vd(n,t,e){const i=new Float32Array(Wn),r=new N(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$o(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ja(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Za(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function $o(){return`

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
	`}function Wd(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Js||l===Qs,c=l===Ei||l===Ti;if(u||c){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Co(n)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(e===null&&(e=new Co(n)),h=u?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Xd(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&$i("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qd(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let b=0,x=v.length;b<x;b+=3){const A=v[b+0],w=v[b+1],R=v[b+2];f.push(A,w,w,R,R,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let b=0,x=v.length/3-1;b<x;b+=3){const A=b+0,w=b+1,R=b+2;f.push(A,w,w,R,R,A)}}else return;const m=new($l(f)?nc:ec)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function Yd(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),e.update(p,i,1)}function u(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),e.update(p,i,g))}function c(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];e.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Kd(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function $d(n,t,e){const i=new WeakMap,r=new re;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*w*4*h),I=new Zl(R,A,w,h);I.type=tn,I.needsUpdate=!0;const y=x*4;for(let L=0;L<h;L++){const U=d[L],B=v[L],q=b[L],$=A*w*4*L;for(let Z=0;Z<U.count;Z++){const et=Z*y;g===!0&&(r.fromBufferAttribute(U,Z),R[$+et+0]=r.x,R[$+et+1]=r.y,R[$+et+2]=r.z,R[$+et+3]=0),_===!0&&(r.fromBufferAttribute(B,Z),R[$+et+4]=r.x,R[$+et+5]=r.y,R[$+et+6]=r.z,R[$+et+7]=0),m===!0&&(r.fromBufferAttribute(q,Z),R[$+et+8]=r.x,R[$+et+9]=r.y,R[$+et+10]=r.z,R[$+et+11]=q.itemSize===4?r.w:1)}}f={count:h,texture:I,size:new Gt(A,w)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function jd(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=t.get(l,c);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class lc extends Te{constructor(t,e,i,r,s,o,a,l,u,c=Mi){if(c!==Mi&&c!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Mi&&(i=qn),i===void 0&&c===Ai&&(i=wi),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cc=new Te,Ja=new lc(1,1),uc=new Zl,hc=new Nu,fc=new sc,Qa=[],tl=[],el=new Float32Array(16),nl=new Float32Array(9),il=new Float32Array(4);function Ni(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Qa[r];if(s===void 0&&(s=new Float32Array(r),Qa[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function de(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Qr(n,t){let e=tl[t];e===void 0&&(e=new Int32Array(t),tl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Zd(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Jd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;n.uniform2fv(this.addr,t),pe(e,t)}}function Qd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;n.uniform3fv(this.addr,t),pe(e,t)}}function tp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;n.uniform4fv(this.addr,t),pe(e,t)}}function ep(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(de(e,i))return;il.set(i),n.uniformMatrix2fv(this.addr,!1,il),pe(e,i)}}function np(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(de(e,i))return;nl.set(i),n.uniformMatrix3fv(this.addr,!1,nl),pe(e,i)}}function ip(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(de(e,i))return;el.set(i),n.uniformMatrix4fv(this.addr,!1,el),pe(e,i)}}function rp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;n.uniform2iv(this.addr,t),pe(e,t)}}function op(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;n.uniform3iv(this.addr,t),pe(e,t)}}function ap(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;n.uniform4iv(this.addr,t),pe(e,t)}}function lp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;n.uniform2uiv(this.addr,t),pe(e,t)}}function up(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;n.uniform3uiv(this.addr,t),pe(e,t)}}function hp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;n.uniform4uiv(this.addr,t),pe(e,t)}}function fp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ja.compareFunction=Kl,s=Ja):s=cc,e.setTexture2D(t||s,r)}function dp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||hc,r)}function pp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||fc,r)}function mp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||uc,r)}function gp(n){switch(n){case 5126:return Zd;case 35664:return Jd;case 35665:return Qd;case 35666:return tp;case 35674:return ep;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return sp;case 35668:case 35672:return op;case 35669:case 35673:return ap;case 5125:return lp;case 36294:return cp;case 36295:return up;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function _p(n,t){n.uniform1fv(this.addr,t)}function xp(n,t){const e=Ni(t,this.size,2);n.uniform2fv(this.addr,e)}function vp(n,t){const e=Ni(t,this.size,3);n.uniform3fv(this.addr,e)}function Mp(n,t){const e=Ni(t,this.size,4);n.uniform4fv(this.addr,e)}function Sp(n,t){const e=Ni(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function yp(n,t){const e=Ni(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function bp(n,t){const e=Ni(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ep(n,t){n.uniform1iv(this.addr,t)}function Tp(n,t){n.uniform2iv(this.addr,t)}function wp(n,t){n.uniform3iv(this.addr,t)}function Ap(n,t){n.uniform4iv(this.addr,t)}function Rp(n,t){n.uniform1uiv(this.addr,t)}function Cp(n,t){n.uniform2uiv(this.addr,t)}function Pp(n,t){n.uniform3uiv(this.addr,t)}function Lp(n,t){n.uniform4uiv(this.addr,t)}function Ip(n,t,e){const i=this.cache,r=t.length,s=Qr(e,r);de(i,s)||(n.uniform1iv(this.addr,s),pe(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||cc,s[o])}function Dp(n,t,e){const i=this.cache,r=t.length,s=Qr(e,r);de(i,s)||(n.uniform1iv(this.addr,s),pe(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||hc,s[o])}function Up(n,t,e){const i=this.cache,r=t.length,s=Qr(e,r);de(i,s)||(n.uniform1iv(this.addr,s),pe(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||fc,s[o])}function Np(n,t,e){const i=this.cache,r=t.length,s=Qr(e,r);de(i,s)||(n.uniform1iv(this.addr,s),pe(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||uc,s[o])}function Fp(n){switch(n){case 5126:return _p;case 35664:return xp;case 35665:return vp;case 35666:return Mp;case 35674:return Sp;case 35675:return yp;case 35676:return bp;case 5124:case 35670:return Ep;case 35667:case 35671:return Tp;case 35668:case 35672:return wp;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Np}}class Op{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gp(e.type)}}class Bp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fp(e.type)}}class zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Us=/(\w+)(\])?(\[|\.)?/g;function rl(n,t){n.seq.push(t),n.map[t.id]=t}function kp(n,t,e){const i=n.name,r=i.length;for(Us.lastIndex=0;;){const s=Us.exec(i),o=Us.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){rl(e,u===void 0?new Op(a,n,t):new Bp(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new zp(a),rl(e,h)),e=h}}}class Vr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);kp(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function sl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Hp=37297;let Gp=0;function Vp(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const ol=new Ht;function Wp(n){Zt._getMatrix(ol,Zt.workingColorSpace,n);const t=`mat3( ${ol.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case Jr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function al(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Vp(n.getShaderSource(t),o)}else return r}function Xp(n,t){const e=Wp(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qp(n,t){let e;switch(t){case cu:e="Linear";break;case uu:e="Reinhard";break;case hu:e="Cineon";break;case Ol:e="ACESFilmic";break;case du:e="AgX";break;case pu:e="Neutral";break;case fu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Dr=new N;function Yp(){Zt.getLuminanceCoefficients(Dr);const n=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function $p(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function jp(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ji(n){return n!==""}function ll(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(n){return n.replace(Zp,Qp)}const Jp=new Map;function Qp(n,t){let e=Wt[t];if(e===void 0){const i=Jp.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Po(e)}const t0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(n){return n.replace(t0,e0)}function e0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hl(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function n0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bo?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function i0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case Ti:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function s0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zo:t="ENVMAP_BLENDING_MULTIPLY";break;case au:t="ENVMAP_BLENDING_MIX";break;case lu:t="ENVMAP_BLENDING_ADD";break}return t}function o0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function a0(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=n0(e),u=i0(e),c=r0(e),h=s0(e),f=o0(e),p=Kp(e),g=$p(s),_=r.createProgram();let m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ji).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ji).join(`
`),d.length>0&&(d+=`
`)):(m=[hl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),d=[hl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?qp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Xp("linearToOutputTexel",e.outputColorSpace),Yp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),o=Po(o),o=ll(o,e),o=cl(o,e),a=Po(a),a=ll(a,e),a=cl(a,e),o=ul(o),a=ul(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=v+m+o,x=v+d+a,A=sl(r,r.VERTEX_SHADER,b),w=sl(r,r.FRAGMENT_SHADER,x);r.attachShader(_,A),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(L){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(w).trim();let $=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,w);else{const et=al(r,A,"vertex"),Y=al(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+et+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||q==="")&&(Z=!1);Z&&(L.diagnostics={runnable:$,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(A),r.deleteShader(w),I=new Vr(r,_),y=jp(r,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Hp)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let l0=0;class c0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new u0(t),e.set(t,i)),i}}class u0{constructor(t){this.id=l0++,this.code=t,this.usedTimes=0}}function h0(n,t,e,i,r,s,o){const a=new Ql,l=new c0,u=new Set,c=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return u.add(y),y===0?"uv":`uv${y}`}function m(y,M,L,U,B){const q=U.fog,$=B.geometry,Z=y.isMeshStandardMaterial?U.environment:null,et=(y.isMeshStandardMaterial?e:t).get(y.envMap||Z),Y=et&&et.mapping===Zr?et.image.height:null,rt=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,it=ft!==void 0?ft.length:0;let E=0;$.morphAttributes.position!==void 0&&(E=1),$.morphAttributes.normal!==void 0&&(E=2),$.morphAttributes.color!==void 0&&(E=3);let D,P,F,G;if(rt){const ee=Qe[rt];D=ee.vertexShader,P=ee.fragmentShader}else D=y.vertexShader,P=y.fragmentShader,l.update(y),F=l.getVertexShaderID(y),G=l.getFragmentShaderID(y);const j=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),lt=B.isInstancedMesh===!0,ut=B.isBatchedMesh===!0,Lt=!!y.map,Nt=!!y.matcap,Ct=!!et,O=!!y.aoMap,Xt=!!y.lightMap,Pt=!!y.bumpMap,Dt=!!y.normalMap,xt=!!y.displacementMap,Ft=!!y.emissiveMap,bt=!!y.metalnessMap,C=!!y.roughnessMap,S=y.anisotropy>0,V=y.clearcoat>0,Q=y.dispersion>0,nt=y.iridescence>0,J=y.sheen>0,At=y.transmission>0,pt=S&&!!y.anisotropyMap,Mt=V&&!!y.clearcoatMap,jt=V&&!!y.clearcoatNormalMap,st=V&&!!y.clearcoatRoughnessMap,St=nt&&!!y.iridescenceMap,Ut=nt&&!!y.iridescenceThicknessMap,Ot=J&&!!y.sheenColorMap,yt=J&&!!y.sheenRoughnessMap,Kt=!!y.specularMap,Vt=!!y.specularColorMap,se=!!y.specularIntensityMap,z=At&&!!y.transmissionMap,dt=At&&!!y.thicknessMap,K=!!y.gradientMap,tt=!!y.alphaMap,_t=y.alphaTest>0,mt=!!y.alphaHash,zt=!!y.extensions;let ue=Pn;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ue=n.toneMapping);const ve={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:D,fragmentShader:P,defines:y.defines,customVertexShaderID:F,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ut,batchingColor:ut&&B._colorsTexture!==null,instancing:lt,instancingColor:lt&&B.instanceColor!==null,instancingMorph:lt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ii,alphaToCoverage:!!y.alphaToCoverage,map:Lt,matcap:Nt,envMap:Ct,envMapMode:Ct&&et.mapping,envMapCubeUVHeight:Y,aoMap:O,lightMap:Xt,bumpMap:Pt,normalMap:Dt,displacementMap:f&&xt,emissiveMap:Ft,normalMapObjectSpace:Dt&&y.normalMapType===xu,normalMapTangentSpace:Dt&&y.normalMapType===Yo,metalnessMap:bt,roughnessMap:C,anisotropy:S,anisotropyMap:pt,clearcoat:V,clearcoatMap:Mt,clearcoatNormalMap:jt,clearcoatRoughnessMap:st,dispersion:Q,iridescence:nt,iridescenceMap:St,iridescenceThicknessMap:Ut,sheen:J,sheenColorMap:Ot,sheenRoughnessMap:yt,specularMap:Kt,specularColorMap:Vt,specularIntensityMap:se,transmission:At,transmissionMap:z,thicknessMap:dt,gradientMap:K,opaque:y.transparent===!1&&y.blending===vi&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:mt,combine:y.combine,mapUv:Lt&&_(y.map.channel),aoMapUv:O&&_(y.aoMap.channel),lightMapUv:Xt&&_(y.lightMap.channel),bumpMapUv:Pt&&_(y.bumpMap.channel),normalMapUv:Dt&&_(y.normalMap.channel),displacementMapUv:xt&&_(y.displacementMap.channel),emissiveMapUv:Ft&&_(y.emissiveMap.channel),metalnessMapUv:bt&&_(y.metalnessMap.channel),roughnessMapUv:C&&_(y.roughnessMap.channel),anisotropyMapUv:pt&&_(y.anisotropyMap.channel),clearcoatMapUv:Mt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(y.sheenRoughnessMap.channel),specularMapUv:Kt&&_(y.specularMap.channel),specularColorMapUv:Vt&&_(y.specularColorMap.channel),specularIntensityMapUv:se&&_(y.specularIntensityMap.channel),transmissionMapUv:z&&_(y.transmissionMap.channel),thicknessMapUv:dt&&_(y.thicknessMap.channel),alphaMapUv:tt&&_(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Dt||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Lt||tt),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:at,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:E,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:Lt&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===ie,decodeVideoTextureEmissive:Ft&&y.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(y.emissiveMap.colorSpace)===ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fe,flipSided:y.side===Ee,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:zt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&y.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=u.has(1),ve.vertexUv2s=u.has(2),ve.vertexUv3s=u.has(3),u.clear(),ve}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(v(M,y),b(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=g[y.type];let L;if(M){const U=Qe[M];L=Yu.clone(U.uniforms)}else L=y.uniforms;return L}function A(y,M){let L;for(let U=0,B=c.length;U<B;U++){const q=c[U];if(q.cacheKey===M){L=q,++L.usedTimes;break}}return L===void 0&&(L=new a0(n,M,y,s),c.push(L)),L}function w(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:I}}function f0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function d0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function dl(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function u(h,f){e.length>1&&e.sort(h||d0),i.length>1&&i.sort(f||fl),r.length>1&&r.sort(f||fl)}function c(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function p0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new dl,n.set(i,[o])):r>=s.length?(o=new dl,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function m0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new It};break;case"SpotLight":e={position:new N,direction:new N,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function g0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let _0=0;function x0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function v0(n){const t=new m0,e=g0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new $t,o=new $t;function a(u){let c=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,b=0,x=0,A=0,w=0,R=0;u.sort(x0);for(let y=0,M=u.length;y<M;y++){const L=u[y],U=L.color,B=L.intensity,q=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=U.r*B,h+=U.g*B,f+=U.b*B;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],B);R++}else if(L.isDirectionalLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const et=L.shadow,Y=e.get(L);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=Z,p++}else if(L.isSpotLight){const Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(U).multiplyScalar(B),Z.distance=q,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[_]=Z;const et=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,et.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=et.matrix,L.castShadow){const Y=e.get(L);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=$,x++}_++}else if(L.isRectAreaLight){const Z=t.get(L);Z.color.copy(U).multiplyScalar(B),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Z,m++}else if(L.isPointLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const et=L.shadow,Y=e.get(L);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,Y.shadowCameraNear=et.camera.near,Y.shadowCameraFar=et.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=L.shadow.matrix,b++}i.point[g]=Z,g++}else if(L.isHemisphereLight){const Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(B),Z.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[d]=Z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==v||I.numPointShadows!==b||I.numSpotShadows!==x||I.numSpotMaps!==A||I.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=v,I.numPointShadows=b,I.numSpotShadows=x,I.numSpotMaps=A,I.numLightProbes=R,i.version=_0++)}function l(u,c){let h=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const b=u[d];if(b.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function pl(n){const t=new v0(n),e=[],i=[];function r(c){u.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function M0(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new pl(n),t.set(r,[a])):s>=o.length?(a=new pl(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class S0 extends jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class y0 extends jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E0=`uniform sampler2D shadow_pass;
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
}`;function T0(n,t,e){let i=new Ko;const r=new Gt,s=new Gt,o=new re,a=new S0({depthPacking:_u}),l=new y0,u={},c=e.maxTextureSize,h={[In]:Ee,[Ee]:In,[Fe]:Fe},f=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:b0,fragmentShader:E0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new me;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let d=this.type;this.render=function(w,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Cn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=d!==dn&&this.type===dn,q=d===dn&&this.type!==dn;for(let $=0,Z=w.length;$<Z;$++){const et=w[$],Y=et.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const rt=Y.getFrameExtents();if(r.multiply(rt),s.copy(Y.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/rt.x),r.x=s.x*rt.x,Y.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/rt.y),r.y=s.y*rt.y,Y.mapSize.y=s.y)),Y.map===null||B===!0||q===!0){const it=this.type!==dn?{minFilter:Oe,magFilter:Oe}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Yn(r.x,r.y,it),Y.map.texture.name=et.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const ft=Y.getViewportCount();for(let it=0;it<ft;it++){const E=Y.getViewport(it);o.set(s.x*E.x,s.y*E.y,s.x*E.z,s.y*E.w),U.viewport(o),Y.updateMatrices(et,it),i=Y.getFrustum(),x(R,I,Y.camera,et,this.type)}Y.isPointLightShadow!==!0&&this.type===dn&&v(Y,I),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,L)};function v(w,R){const I=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,I,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,I,p,_,null)}function b(w,R,I,y){let M=null;const L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=M.uuid,B=R.uuid;let q=u[U];q===void 0&&(q={},u[U]=q);let $=q[B];$===void 0&&($=M.clone(),q[B]=$,R.addEventListener("dispose",A)),M=$}if(M.visible=R.visible,M.wireframe=R.wireframe,y===dn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=I}return M}function x(w,R,I,y,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===dn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const B=t.update(w),q=w.material;if(Array.isArray(q)){const $=B.groups;for(let Z=0,et=$.length;Z<et;Z++){const Y=$[Z],rt=q[Y.materialIndex];if(rt&&rt.visible){const ft=b(w,rt,y,M);w.onBeforeShadow(n,w,R,I,B,ft,Y),n.renderBufferDirect(I,null,B,ft,w,Y),w.onAfterShadow(n,w,R,I,B,ft,Y)}}}else if(q.visible){const $=b(w,q,y,M);w.onBeforeShadow(n,w,R,I,B,$,null),n.renderBufferDirect(I,null,B,$,w,null),w.onAfterShadow(n,w,R,I,B,$,null)}}const U=w.children;for(let B=0,q=U.length;B<q;B++)x(U[B],R,I,y,M)}function A(w){w.target.removeEventListener("dispose",A);for(const I in u){const y=u[I],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const w0={[Xs]:qs,[Ys]:js,[Ks]:Zs,[bi]:$s,[qs]:Xs,[js]:Ys,[Zs]:Ks,[$s]:bi};function A0(n,t){function e(){let z=!1;const dt=new re;let K=null;const tt=new re(0,0,0,0);return{setMask:function(_t){K!==_t&&!z&&(n.colorMask(_t,_t,_t,_t),K=_t)},setLocked:function(_t){z=_t},setClear:function(_t,mt,zt,ue,ve){ve===!0&&(_t*=ue,mt*=ue,zt*=ue),dt.set(_t,mt,zt,ue),tt.equals(dt)===!1&&(n.clearColor(_t,mt,zt,ue),tt.copy(dt))},reset:function(){z=!1,K=null,tt.set(-1,0,0,0)}}}function i(){let z=!1,dt=!1,K=null,tt=null,_t=null;return{setReversed:function(mt){if(dt!==mt){const zt=t.get("EXT_clip_control");dt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const ue=_t;_t=null,this.setClear(ue)}dt=mt},getReversed:function(){return dt},setTest:function(mt){mt?j(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(mt){K!==mt&&!z&&(n.depthMask(mt),K=mt)},setFunc:function(mt){if(dt&&(mt=w0[mt]),tt!==mt){switch(mt){case Xs:n.depthFunc(n.NEVER);break;case qs:n.depthFunc(n.ALWAYS);break;case Ys:n.depthFunc(n.LESS);break;case bi:n.depthFunc(n.LEQUAL);break;case Ks:n.depthFunc(n.EQUAL);break;case $s:n.depthFunc(n.GEQUAL);break;case js:n.depthFunc(n.GREATER);break;case Zs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=mt}},setLocked:function(mt){z=mt},setClear:function(mt){_t!==mt&&(dt&&(mt=1-mt),n.clearDepth(mt),_t=mt)},reset:function(){z=!1,K=null,tt=null,_t=null,dt=!1}}}function r(){let z=!1,dt=null,K=null,tt=null,_t=null,mt=null,zt=null,ue=null,ve=null;return{setTest:function(ee){z||(ee?j(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(ee){dt!==ee&&!z&&(n.stencilMask(ee),dt=ee)},setFunc:function(ee,Ge,on){(K!==ee||tt!==Ge||_t!==on)&&(n.stencilFunc(ee,Ge,on),K=ee,tt=Ge,_t=on)},setOp:function(ee,Ge,on){(mt!==ee||zt!==Ge||ue!==on)&&(n.stencilOp(ee,Ge,on),mt=ee,zt=Ge,ue=on)},setLocked:function(ee){z=ee},setClear:function(ee){ve!==ee&&(n.clearStencil(ee),ve=ee)},reset:function(){z=!1,dt=null,K=null,tt=null,_t=null,mt=null,zt=null,ue=null,ve=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,b=null,x=null,A=null,w=null,R=new It(0,0,0),I=0,y=!1,M=null,L=null,U=null,B=null,q=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,et=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=et>=2);let rt=null,ft={};const it=n.getParameter(n.SCISSOR_BOX),E=n.getParameter(n.VIEWPORT),D=new re().fromArray(it),P=new re().fromArray(E);function F(z,dt,K,tt){const _t=new Uint8Array(4),mt=n.createTexture();n.bindTexture(z,mt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<K;zt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(dt+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return mt}const G={};G[n.TEXTURE_2D]=F(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=F(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=F(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=F(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(bi),Pt(!1),Dt(Sa),j(n.CULL_FACE),O(Cn);function j(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function at(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function lt(z,dt){return h[z]!==dt?(n.bindFramebuffer(z,dt),h[z]=dt,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=dt),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function ut(z,dt){let K=p,tt=!1;if(z){K=f.get(dt),K===void 0&&(K=[],f.set(dt,K));const _t=z.textures;if(K.length!==_t.length||K[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,zt=_t.length;mt<zt;mt++)K[mt]=n.COLOR_ATTACHMENT0+mt;K.length=_t.length,tt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,tt=!0);tt&&n.drawBuffers(K)}function Lt(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const Nt={[Vn]:n.FUNC_ADD,[Wc]:n.FUNC_SUBTRACT,[Xc]:n.FUNC_REVERSE_SUBTRACT};Nt[qc]=n.MIN,Nt[Yc]=n.MAX;const Ct={[Kc]:n.ZERO,[$c]:n.ONE,[jc]:n.SRC_COLOR,[Vs]:n.SRC_ALPHA,[nu]:n.SRC_ALPHA_SATURATE,[tu]:n.DST_COLOR,[Jc]:n.DST_ALPHA,[Zc]:n.ONE_MINUS_SRC_COLOR,[Ws]:n.ONE_MINUS_SRC_ALPHA,[eu]:n.ONE_MINUS_DST_COLOR,[Qc]:n.ONE_MINUS_DST_ALPHA,[iu]:n.CONSTANT_COLOR,[ru]:n.ONE_MINUS_CONSTANT_COLOR,[su]:n.CONSTANT_ALPHA,[ou]:n.ONE_MINUS_CONSTANT_ALPHA};function O(z,dt,K,tt,_t,mt,zt,ue,ve,ee){if(z===Cn){_===!0&&(at(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),z!==Vc){if(z!==m||ee!==y){if((d!==Vn||x!==Vn)&&(n.blendEquation(n.FUNC_ADD),d=Vn,x=Vn),ee)switch(z){case vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xr:n.blendFunc(n.ONE,n.ONE);break;case ya:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ba:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ya:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ba:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,b=null,A=null,w=null,R.set(0,0,0),I=0,m=z,y=ee}return}_t=_t||dt,mt=mt||K,zt=zt||tt,(dt!==d||_t!==x)&&(n.blendEquationSeparate(Nt[dt],Nt[_t]),d=dt,x=_t),(K!==v||tt!==b||mt!==A||zt!==w)&&(n.blendFuncSeparate(Ct[K],Ct[tt],Ct[mt],Ct[zt]),v=K,b=tt,A=mt,w=zt),(ue.equals(R)===!1||ve!==I)&&(n.blendColor(ue.r,ue.g,ue.b,ve),R.copy(ue),I=ve),m=z,y=!1}function Xt(z,dt){z.side===Fe?at(n.CULL_FACE):j(n.CULL_FACE);let K=z.side===Ee;dt&&(K=!K),Pt(K),z.blending===vi&&z.transparent===!1?O(Cn):O(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const tt=z.stencilWrite;a.setTest(tt),tt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function Dt(z){z!==kc?(j(n.CULL_FACE),z!==L&&(z===Sa?n.cullFace(n.BACK):z===Hc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),L=z}function xt(z){z!==U&&(Z&&n.lineWidth(z),U=z)}function Ft(z,dt,K){z?(j(n.POLYGON_OFFSET_FILL),(B!==dt||q!==K)&&(n.polygonOffset(dt,K),B=dt,q=K)):at(n.POLYGON_OFFSET_FILL)}function bt(z){z?j(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function C(z){z===void 0&&(z=n.TEXTURE0+$-1),rt!==z&&(n.activeTexture(z),rt=z)}function S(z,dt,K){K===void 0&&(rt===null?K=n.TEXTURE0+$-1:K=rt);let tt=ft[K];tt===void 0&&(tt={type:void 0,texture:void 0},ft[K]=tt),(tt.type!==z||tt.texture!==dt)&&(rt!==K&&(n.activeTexture(K),rt=K),n.bindTexture(z,dt||G[z]),tt.type=z,tt.texture=dt)}function V(){const z=ft[rt];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(z){D.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),D.copy(z))}function yt(z){P.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),P.copy(z))}function Kt(z,dt){let K=u.get(dt);K===void 0&&(K=new WeakMap,u.set(dt,K));let tt=K.get(z);tt===void 0&&(tt=n.getUniformBlockIndex(dt,z.name),K.set(z,tt))}function Vt(z,dt){const tt=u.get(dt).get(z);l.get(dt)!==tt&&(n.uniformBlockBinding(dt,tt,z.__bindingPointIndex),l.set(dt,tt))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},rt=null,ft={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,b=null,x=null,A=null,w=null,R=new It(0,0,0),I=0,y=!1,M=null,L=null,U=null,B=null,q=null,D.set(0,0,n.canvas.width,n.canvas.height),P.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:at,bindFramebuffer:lt,drawBuffers:ut,useProgram:Lt,setBlending:O,setMaterial:Xt,setFlipSided:Pt,setCullFace:Dt,setLineWidth:xt,setPolygonOffset:Ft,setScissorTest:bt,activeTexture:C,bindTexture:S,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:nt,texImage2D:St,texImage3D:Ut,updateUBOMapping:Kt,uniformBlockBinding:Vt,texStorage2D:jt,texStorage3D:st,texSubImage2D:J,texSubImage3D:At,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:Ot,viewport:yt,reset:se}}function ml(n,t,e,i){const r=R0(i);switch(e){case Gl:return n*t;case Wl:return n*t;case Xl:return n*t*2;case Vo:return n*t/r.components*r.byteLength;case Wo:return n*t/r.components*r.byteLength;case ql:return n*t*2/r.components*r.byteLength;case Xo:return n*t*2/r.components*r.byteLength;case Vl:return n*t*3/r.components*r.byteLength;case $e:return n*t*4/r.components*r.byteLength;case qo:return n*t*4/r.components*r.byteLength;case Br:case zr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kr:case Hr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case no:case ro:return Math.max(n,16)*Math.max(t,8)/4;case eo:case io:return Math.max(n,8)*Math.max(t,8)/2;case so:case oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case mo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case vo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case So:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case yo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Gr:case bo:case Eo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Yl:case To:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wo:case Ao:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function R0(n){switch(n){case _n:case zl:return{byteLength:1,components:1};case er:case kl:case sr:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case qn:case ko:case tn:return{byteLength:4,components:1};case Hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function C0(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Gt,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):Kr("canvas")}function _(C,S,V){let Q=1;const nt=bt(C);if((nt.width>V||nt.height>V)&&(Q=V/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Q*nt.width),At=Math.floor(Q*nt.height);h===void 0&&(h=g(J,At));const pt=S?g(J,At):h;return pt.width=J,pt.height=At,pt.getContext("2d").drawImage(C,0,0,J,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+At+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,S,V,Q,nt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),S===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),S===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),S===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),S===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),S===n.RGBA){const At=nt?Jr:Zt.getTransfer(Q);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=At===ie?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(C,S){let V;return C?S===null||S===qn||S===wi?V=n.DEPTH24_STENCIL8:S===tn?V=n.DEPTH32F_STENCIL8:S===er&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qn||S===wi?V=n.DEPTH_COMPONENT24:S===tn?V=n.DEPTH_COMPONENT32F:S===er&&(V=n.DEPTH_COMPONENT16),V}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Oe&&C.minFilter!==Ke?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){const S=C.target;S.removeEventListener("dispose",w),I(S),S.isVideoTexture&&c.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),M(S)}function I(C){const S=i.get(C);if(S.__webglInit===void 0)return;const V=C.source,Q=f.get(V);if(Q){const nt=Q[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&y(C),Object.keys(Q).length===0&&f.delete(V)}i.remove(C)}function y(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const V=C.source,Q=f.get(V);delete Q[S.__cacheKey],o.memory.textures--}function M(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let nt=0;nt<S.__webglFramebuffer[Q].length;nt++)n.deleteFramebuffer(S.__webglFramebuffer[Q][nt]);else n.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=C.textures;for(let Q=0,nt=V.length;Q<nt;Q++){const J=i.get(V[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[Q])}i.remove(C)}let L=0;function U(){L=0}function B(){const C=L;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function q(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function $(C,S){const V=i.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{P(V,C,S);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+S)}function Z(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){P(V,C,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+S)}function et(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){P(V,C,S);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+S)}function Y(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){F(V,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+S)}const rt={[tr]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[to]:n.MIRRORED_REPEAT},ft={[Oe]:n.NEAREST,[mu]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[Ke]:n.LINEAR,[os]:n.LINEAR_MIPMAP_NEAREST,[pn]:n.LINEAR_MIPMAP_LINEAR},it={[vu]:n.NEVER,[Tu]:n.ALWAYS,[Mu]:n.LESS,[Kl]:n.LEQUAL,[Su]:n.EQUAL,[Eu]:n.GEQUAL,[yu]:n.GREATER,[bu]:n.NOTEQUAL};function E(C,S){if(S.type===tn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ke||S.magFilter===os||S.magFilter===dr||S.magFilter===pn||S.minFilter===Ke||S.minFilter===os||S.minFilter===dr||S.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,rt[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,rt[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,rt[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ft[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ft[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Oe||S.minFilter!==dr&&S.minFilter!==pn||S.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function D(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",w));const Q=S.source;let nt=f.get(Q);nt===void 0&&(nt={},f.set(Q,nt));const J=q(S);if(J!==C.__cacheKey){nt[J]===void 0&&(nt[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[J].usedTimes++;const At=nt[C.__cacheKey];At!==void 0&&(nt[C.__cacheKey].usedTimes--,At.usedTimes===0&&y(S)),C.__cacheKey=J,C.__webglTexture=nt[J].texture}return V}function P(C,S,V){let Q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=n.TEXTURE_3D);const nt=D(C,S),J=S.source;e.bindTexture(Q,C.__webglTexture,n.TEXTURE0+V);const At=i.get(J);if(J.version!==At.__version||nt===!0){e.activeTexture(n.TEXTURE0+V);const pt=Zt.getPrimaries(Zt.workingColorSpace),Mt=S.colorSpace===An?null:Zt.getPrimaries(S.colorSpace),jt=S.colorSpace===An||pt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let st=_(S.image,!1,r.maxTextureSize);st=Ft(S,st);const St=s.convert(S.format,S.colorSpace),Ut=s.convert(S.type);let Ot=b(S.internalFormat,St,Ut,S.colorSpace,S.isVideoTexture);E(Q,S);let yt;const Kt=S.mipmaps,Vt=S.isVideoTexture!==!0,se=At.__version===void 0||nt===!0,z=J.dataReady,dt=A(S,st);if(S.isDepthTexture)Ot=x(S.format===Ai,S.type),se&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,Ot,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Ot,st.width,st.height,0,St,Ut,null));else if(S.isDataTexture)if(Kt.length>0){Vt&&se&&e.texStorage2D(n.TEXTURE_2D,dt,Ot,Kt[0].width,Kt[0].height);for(let K=0,tt=Kt.length;K<tt;K++)yt=Kt[K],Vt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,yt.width,yt.height,St,Ut,yt.data):e.texImage2D(n.TEXTURE_2D,K,Ot,yt.width,yt.height,0,St,Ut,yt.data);S.generateMipmaps=!1}else Vt?(se&&e.texStorage2D(n.TEXTURE_2D,dt,Ot,st.width,st.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,St,Ut,st.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,st.width,st.height,0,St,Ut,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Vt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ot,Kt[0].width,Kt[0].height,st.depth);for(let K=0,tt=Kt.length;K<tt;K++)if(yt=Kt[K],S.format!==$e)if(St!==null)if(Vt){if(z)if(S.layerUpdates.size>0){const _t=ml(yt.width,yt.height,S.format,S.type);for(const mt of S.layerUpdates){const zt=yt.data.subarray(mt*_t/yt.data.BYTES_PER_ELEMENT,(mt+1)*_t/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,mt,yt.width,yt.height,1,St,zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,yt.width,yt.height,st.depth,St,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ot,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,yt.width,yt.height,st.depth,St,Ut,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,Ot,yt.width,yt.height,st.depth,0,St,Ut,yt.data)}else{Vt&&se&&e.texStorage2D(n.TEXTURE_2D,dt,Ot,Kt[0].width,Kt[0].height);for(let K=0,tt=Kt.length;K<tt;K++)yt=Kt[K],S.format!==$e?St!==null?Vt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,Ot,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,yt.width,yt.height,St,Ut,yt.data):e.texImage2D(n.TEXTURE_2D,K,Ot,yt.width,yt.height,0,St,Ut,yt.data)}else if(S.isDataArrayTexture)if(Vt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ot,st.width,st.height,st.depth),z)if(S.layerUpdates.size>0){const K=ml(st.width,st.height,S.format,S.type);for(const tt of S.layerUpdates){const _t=st.data.subarray(tt*K/st.data.BYTES_PER_ELEMENT,(tt+1)*K/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,St,Ut,_t)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,St,Ut,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,st.width,st.height,st.depth,0,St,Ut,st.data);else if(S.isData3DTexture)Vt?(se&&e.texStorage3D(n.TEXTURE_3D,dt,Ot,st.width,st.height,st.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,St,Ut,st.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,st.width,st.height,st.depth,0,St,Ut,st.data);else if(S.isFramebufferTexture){if(se)if(Vt)e.texStorage2D(n.TEXTURE_2D,dt,Ot,st.width,st.height);else{let K=st.width,tt=st.height;for(let _t=0;_t<dt;_t++)e.texImage2D(n.TEXTURE_2D,_t,Ot,K,tt,0,St,Ut,null),K>>=1,tt>>=1}}else if(Kt.length>0){if(Vt&&se){const K=bt(Kt[0]);e.texStorage2D(n.TEXTURE_2D,dt,Ot,K.width,K.height)}for(let K=0,tt=Kt.length;K<tt;K++)yt=Kt[K],Vt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,St,Ut,yt):e.texImage2D(n.TEXTURE_2D,K,Ot,St,Ut,yt);S.generateMipmaps=!1}else if(Vt){if(se){const K=bt(st);e.texStorage2D(n.TEXTURE_2D,dt,Ot,K.width,K.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Ut,st)}else e.texImage2D(n.TEXTURE_2D,0,Ot,St,Ut,st);m(S)&&d(Q),At.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function F(C,S,V){if(S.image.length!==6)return;const Q=D(C,S),nt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const J=i.get(nt);if(nt.version!==J.__version||Q===!0){e.activeTexture(n.TEXTURE0+V);const At=Zt.getPrimaries(Zt.workingColorSpace),pt=S.colorSpace===An?null:Zt.getPrimaries(S.colorSpace),Mt=S.colorSpace===An||At===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const jt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,St=[];for(let tt=0;tt<6;tt++)!jt&&!st?St[tt]=_(S.image[tt],!0,r.maxCubemapSize):St[tt]=st?S.image[tt].image:S.image[tt],St[tt]=Ft(S,St[tt]);const Ut=St[0],Ot=s.convert(S.format,S.colorSpace),yt=s.convert(S.type),Kt=b(S.internalFormat,Ot,yt,S.colorSpace),Vt=S.isVideoTexture!==!0,se=J.__version===void 0||Q===!0,z=nt.dataReady;let dt=A(S,Ut);E(n.TEXTURE_CUBE_MAP,S);let K;if(jt){Vt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Kt,Ut.width,Ut.height);for(let tt=0;tt<6;tt++){K=St[tt].mipmaps;for(let _t=0;_t<K.length;_t++){const mt=K[_t];S.format!==$e?Ot!==null?Vt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,mt.width,mt.height,Ot,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,Kt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,mt.width,mt.height,Ot,yt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,Kt,mt.width,mt.height,0,Ot,yt,mt.data)}}}else{if(K=S.mipmaps,Vt&&se){K.length>0&&dt++;const tt=bt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Vt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,St[tt].width,St[tt].height,Ot,yt,St[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,St[tt].width,St[tt].height,0,Ot,yt,St[tt].data);for(let _t=0;_t<K.length;_t++){const zt=K[_t].image[tt].image;Vt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,zt.width,zt.height,Ot,yt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,Kt,zt.width,zt.height,0,Ot,yt,zt.data)}}else{Vt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ot,yt,St[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,Ot,yt,St[tt]);for(let _t=0;_t<K.length;_t++){const mt=K[_t];Vt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Ot,yt,mt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,Kt,Ot,yt,mt.image[tt])}}}m(S)&&d(n.TEXTURE_CUBE_MAP),J.__version=nt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function G(C,S,V,Q,nt,J){const At=s.convert(V.format,V.colorSpace),pt=s.convert(V.type),Mt=b(V.internalFormat,At,pt,V.colorSpace),jt=i.get(S),st=i.get(V);if(st.__renderTarget=S,!jt.__hasExternalTextures){const St=Math.max(1,S.width>>J),Ut=Math.max(1,S.height>>J);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,Mt,St,Ut,S.depth,0,At,pt,null):e.texImage2D(nt,J,Mt,St,Ut,0,At,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Dt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,nt,st.__webglTexture,0,Pt(S)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,nt,st.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function j(C,S,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const Q=S.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,J=x(S.stencilBuffer,nt),At=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=Pt(S);Dt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,J,S.width,S.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,C)}else{const Q=S.textures;for(let nt=0;nt<Q.length;nt++){const J=Q[nt],At=s.convert(J.format,J.colorSpace),pt=s.convert(J.type),Mt=b(J.internalFormat,At,pt,J.colorSpace),jt=Pt(S);V&&Dt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,Mt,S.width,S.height):Dt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,Mt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const nt=Q.__webglTexture,J=Pt(S);if(S.depthTexture.format===Mi)Dt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(S.depthTexture.format===Ai)Dt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function lt(C){const S=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",nt)};Q.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=Q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=n.createRenderbuffer(),j(S.__webglDepthbuffer[Q],C,!1);else{const nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),j(S.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(C,S,V){const Q=i.get(C);S!==void 0&&G(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&lt(C)}function Lt(C){const S=C.texture,V=i.get(C),Q=i.get(S);C.addEventListener("dispose",R);const nt=C.textures,J=C.isWebGLCubeRenderTarget===!0,At=nt.length>1;if(At||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=S.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)V.__webglFramebuffer[pt][Mt]=n.createFramebuffer()}else V.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)V.__webglFramebuffer[pt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(At)for(let pt=0,Mt=nt.length;pt<Mt;pt++){const jt=i.get(nt[pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Dt(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<nt.length;pt++){const Mt=nt[pt];V.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);const jt=s.convert(Mt.format,Mt.colorSpace),st=s.convert(Mt.type),St=b(Mt.internalFormat,jt,st,Mt.colorSpace,C.isXRRenderTarget===!0),Ut=Pt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,St,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),j(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),E(n.TEXTURE_CUBE_MAP,S);for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)G(V.__webglFramebuffer[pt][Mt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else G(V.__webglFramebuffer[pt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(S)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let pt=0,Mt=nt.length;pt<Mt;pt++){const jt=nt[pt],st=i.get(jt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),E(n.TEXTURE_2D,jt),G(V.__webglFramebuffer,C,jt,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),m(jt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,Q.__webglTexture),E(pt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)G(V.__webglFramebuffer[Mt],C,S,n.COLOR_ATTACHMENT0,pt,Mt);else G(V.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,pt,0);m(S)&&d(pt),e.unbindTexture()}C.depthBuffer&&lt(C)}function Nt(C){const S=C.textures;for(let V=0,Q=S.length;V<Q;V++){const nt=S[V];if(m(nt)){const J=v(C),At=i.get(nt).__webglTexture;e.bindTexture(J,At),d(J),e.unbindTexture()}}}const Ct=[],O=[];function Xt(C){if(C.samples>0){if(Dt(C)===!1){const S=C.textures,V=C.width,Q=C.height;let nt=n.COLOR_BUFFER_BIT;const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(C),pt=S.length>1;if(pt)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);const jt=i.get(S[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,V,Q,0,0,V,Q,nt,n.NEAREST),l===!0&&(Ct.length=0,O.length=0,Ct.push(n.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ct.push(J),O.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);const jt=i.get(S[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Pt(C){return Math.min(r.maxSamples,C.samples)}function Dt(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xt(C){const S=o.render.frame;c.get(C)!==S&&(c.set(C,S),C.update())}function Ft(C,S){const V=C.colorSpace,Q=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Ii&&V!==An&&(Zt.getTransfer(V)===ie?(Q!==$e||nt!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=Y,this.rebindTextures=ut,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=G,this.useMultisampledRTT=Dt}function P0(n,t){function e(i,r=An){let s;const o=Zt.getTransfer(r);if(i===_n)return n.UNSIGNED_BYTE;if(i===Ho)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Go)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zl)return n.BYTE;if(i===kl)return n.SHORT;if(i===er)return n.UNSIGNED_SHORT;if(i===ko)return n.INT;if(i===qn)return n.UNSIGNED_INT;if(i===tn)return n.FLOAT;if(i===sr)return n.HALF_FLOAT;if(i===Gl)return n.ALPHA;if(i===Vl)return n.RGB;if(i===$e)return n.RGBA;if(i===Wl)return n.LUMINANCE;if(i===Xl)return n.LUMINANCE_ALPHA;if(i===Mi)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===Vo)return n.RED;if(i===Wo)return n.RED_INTEGER;if(i===ql)return n.RG;if(i===Xo)return n.RG_INTEGER;if(i===qo)return n.RGBA_INTEGER;if(i===Br||i===zr||i===kr||i===Hr)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eo||i===no||i===io||i===ro)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===no)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===so||i===oo||i===ao)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===so||i===oo)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ao)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lo||i===co||i===uo||i===ho||i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===vo||i===Mo||i===So||i===yo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===co)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ho)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===po)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===go)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_o)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===So)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gr||i===bo||i===Eo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Gr)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yl||i===To||i===wo||i===Ao)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===To)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ao)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class L0 extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xi extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I0={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U0=`
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

}`;class N0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Te,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new He({vertexShader:D0,fragmentShader:U0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends Di{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const _=new N0,m=e.getContextAttributes();let d=null,v=null;const b=[],x=[],A=new Gt;let w=null;const R=new Ne;R.viewport=new re;const I=new Ne;I.viewport=new re;const y=[R,I],M=new L0;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let F=b[P];return F===void 0&&(F=new Ns,b[P]=F),F.getTargetRaySpace()},this.getControllerGrip=function(P){let F=b[P];return F===void 0&&(F=new Ns,b[P]=F),F.getGripSpace()},this.getHand=function(P){let F=b[P];return F===void 0&&(F=new Ns,b[P]=F),F.getHandSpace()};function B(P){const F=x.indexOf(P.inputSource);if(F===-1)return;const G=b[F];G!==void 0&&(G.update(P.inputSource,P.frame,u||o),G.dispatchEvent({type:P.type,data:P.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let P=0;P<b.length;P++){const F=x[P];F!==null&&(x[P]=null,b[P].disconnect(F))}L=null,U=null,_.reset(),t.setRenderTarget(d),p=null,f=null,h=null,r=null,v=null,D.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(P){u=P},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),r.renderState.layers===void 0){const F={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,F),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Yn(p.framebufferWidth,p.framebufferHeight,{format:$e,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let F=null,G=null,j=null;m.depth&&(j=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=m.stencil?Ai:Mi,G=m.stencil?wi:qn);const at={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(at),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Yn(f.textureWidth,f.textureHeight,{format:$e,type:_n,depthTexture:new lc(f.textureWidth,f.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),D.setContext(r),D.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(P){for(let F=0;F<P.removed.length;F++){const G=P.removed[F],j=x.indexOf(G);j>=0&&(x[j]=null,b[j].disconnect(G))}for(let F=0;F<P.added.length;F++){const G=P.added[F];let j=x.indexOf(G);if(j===-1){for(let lt=0;lt<b.length;lt++)if(lt>=x.length){x.push(G),j=lt;break}else if(x[lt]===null){x[lt]=G,j=lt;break}if(j===-1)break}const at=b[j];at&&at.connect(G)}}const Z=new N,et=new N;function Y(P,F,G){Z.setFromMatrixPosition(F.matrixWorld),et.setFromMatrixPosition(G.matrixWorld);const j=Z.distanceTo(et),at=F.projectionMatrix.elements,lt=G.projectionMatrix.elements,ut=at[14]/(at[10]-1),Lt=at[14]/(at[10]+1),Nt=(at[9]+1)/at[5],Ct=(at[9]-1)/at[5],O=(at[8]-1)/at[0],Xt=(lt[8]+1)/lt[0],Pt=ut*O,Dt=ut*Xt,xt=j/(-O+Xt),Ft=xt*-O;if(F.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ft),P.translateZ(xt),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),at[10]===-1)P.projectionMatrix.copy(F.projectionMatrix),P.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const bt=ut+xt,C=Lt+xt,S=Pt-Ft,V=Dt+(j-Ft),Q=Nt*Lt/C*bt,nt=Ct*Lt/C*bt;P.projectionMatrix.makePerspective(S,V,Q,nt,bt,C),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function rt(P,F){F===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(F.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;let F=P.near,G=P.far;_.texture!==null&&(_.depthNear>0&&(F=_.depthNear),_.depthFar>0&&(G=_.depthFar)),M.near=I.near=R.near=F,M.far=I.far=R.far=G,(L!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,U=M.far),R.layers.mask=P.layers.mask|2,I.layers.mask=P.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;const j=P.parent,at=M.cameras;rt(M,j);for(let lt=0;lt<at.length;lt++)rt(at[lt],j);at.length===2?Y(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),ft(P,M,j)};function ft(P,F,G){G===null?P.matrix.copy(F.matrixWorld):(P.matrix.copy(G.matrixWorld),P.matrix.invert(),P.matrix.multiply(F.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(F.projectionMatrix),P.projectionMatrixInverse.copy(F.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Ro*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(P){l=P,f!==null&&(f.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let it=null;function E(P,F){if(c=F.getViewerPose(u||o),g=F,c!==null){const G=c.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let j=!1;G.length!==M.cameras.length&&(M.cameras.length=0,j=!0);for(let lt=0;lt<G.length;lt++){const ut=G[lt];let Lt=null;if(p!==null)Lt=p.getViewport(ut);else{const Ct=h.getViewSubImage(f,ut);Lt=Ct.viewport,lt===0&&(t.setRenderTargetTextures(v,Ct.colorTexture,f.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(v))}let Nt=y[lt];Nt===void 0&&(Nt=new Ne,Nt.layers.enable(lt),Nt.viewport=new re,y[lt]=Nt),Nt.matrix.fromArray(ut.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(ut.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),lt===0&&(M.matrix.copy(Nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),j===!0&&M.cameras.push(Nt)}const at=r.enabledFeatures;if(at&&at.includes("depth-sensing")){const lt=h.getDepthInformation(G[0]);lt&&lt.isValid&&lt.texture&&_.init(t,lt,r.renderState)}}for(let G=0;G<b.length;G++){const j=x[G],at=b[G];j!==null&&at!==void 0&&at.update(j,F,u||o)}it&&it(P,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),g=null}const D=new oc;D.setAnimationLoop(E),this.setAnimationLoop=function(P){it=P},this.dispose=function(){}}}const kn=new Be,O0=new $t;function B0(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,ic(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,b,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,b):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ee&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ee&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=t.get(d),b=v.envMap,x=v.envMapRotation;b&&(m.envMap.value=b,kn.copy(x),kn.x*=-1,kn.y*=-1,kn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(kn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ee&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function z0(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const x=b.program;i.uniformBlockBinding(v,x)}function u(v,b){let x=r[v.id];x===void 0&&(g(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",m));const A=b.program;i.updateUBOMapping(v,A);const w=t.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const b=h();v.__bindingPointIndex=b;const x=n.createBuffer(),A=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=r[v.id],x=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,R=x.length;w<R;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,M=I.length;y<M;y++){const L=I[y];if(p(L,w,y,A)===!0){const U=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let $=0;$<B.length;$++){const Z=B[$],et=_(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,U+q,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,q),q+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,b,x,A){const w=v.value,R=b+"_"+x;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const I=A[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(v){const b=v.uniforms;let x=0;const A=16;for(let R=0,I=b.length;R<I;R++){const y=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,L=y.length;M<L;M++){const U=y[M],B=Array.isArray(U.value)?U.value:[U.value];for(let q=0,$=B.length;q<$;q++){const Z=B[q],et=_(Z),Y=x%A,rt=Y%et.boundary,ft=Y+rt;x+=rt,ft!==0&&A-ft<et.storage&&(x+=A-ft),U.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=et.storage}}}const w=x%A;return w>0&&(x+=A-w),v.__size=x,v.__cache={},this}function _(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class k0{constructor(t={}){const{canvas:e=Au(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const v=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=Pn,this.toneMappingExposure=1;const x=this;let A=!1,w=0,R=0,I=null,y=-1,M=null;const L=new re,U=new re;let B=null;const q=new It(0);let $=0,Z=e.width,et=e.height,Y=1,rt=null,ft=null;const it=new re(0,0,Z,et),E=new re(0,0,Z,et);let D=!1;const P=new Ko;let F=!1,G=!1;const j=new $t,at=new $t,lt=new N,ut=new re,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Ct(){return I===null?Y:1}let O=i;function Xt(T,k){return e.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),O===null){const k="webgl2";if(O=Xt(k,T),O===null)throw Xt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pt,Dt,xt,Ft,bt,C,S,V,Q,nt,J,At,pt,Mt,jt,st,St,Ut,Ot,yt,Kt,Vt,se,z;function dt(){Pt=new Xd(O),Pt.init(),Vt=new P0(O,Pt),Dt=new zd(O,Pt,t,Vt),xt=new A0(O,Pt),Dt.reverseDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),Ft=new Kd(O),bt=new f0,C=new C0(O,Pt,xt,bt,Dt,Vt,Ft),S=new Hd(x),V=new Wd(x),Q=new th(O),se=new Od(O,Q),nt=new qd(O,Q,Ft,se),J=new jd(O,nt,Q,Ft),Ot=new $d(O,Dt,C),st=new kd(bt),At=new h0(x,S,V,Pt,Dt,se,st),pt=new B0(x,bt),Mt=new p0,jt=new M0(Pt),Ut=new Fd(x,S,V,xt,J,p,l),St=new T0(x,J,Dt),z=new z0(O,Ft,Dt,xt),yt=new Bd(O,Pt,Ft),Kt=new Yd(O,Pt,Ft),Ft.programs=At.programs,x.capabilities=Dt,x.extensions=Pt,x.properties=bt,x.renderLists=Mt,x.shadowMap=St,x.state=xt,x.info=Ft}dt();const K=new F0(x,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(Z,et,!1))},this.getSize=function(T){return T.set(Z,et)},this.setSize=function(T,k,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,et=k,e.width=Math.floor(T*Y),e.height=Math.floor(k*Y),W===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(Z*Y,et*Y).floor()},this.setDrawingBufferSize=function(T,k,W){Z=T,et=k,Y=W,e.width=Math.floor(T*W),e.height=Math.floor(k*W),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(it)},this.setViewport=function(T,k,W,X){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,k,W,X),xt.viewport(L.copy(it).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(E)},this.setScissor=function(T,k,W,X){T.isVector4?E.set(T.x,T.y,T.z,T.w):E.set(T,k,W,X),xt.scissor(U.copy(E).multiplyScalar(Y).round())},this.getScissorTest=function(){return D},this.setScissorTest=function(T){xt.setScissorTest(D=T)},this.setOpaqueSort=function(T){rt=T},this.setTransparentSort=function(T){ft=T},this.getClearColor=function(T){return T.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(T=!0,k=!0,W=!0){let X=0;if(T){let H=!1;if(I!==null){const ot=I.texture.format;H=ot===qo||ot===Xo||ot===Wo}if(H){const ot=I.texture.type,gt=ot===_n||ot===qn||ot===er||ot===wi||ot===Ho||ot===Go,Et=Ut.getClearColor(),Tt=Ut.getClearAlpha(),Bt=Et.r,kt=Et.g,wt=Et.b;gt?(g[0]=Bt,g[1]=kt,g[2]=wt,g[3]=Tt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Bt,_[1]=kt,_[2]=wt,_[3]=Tt,O.clearBufferiv(O.COLOR,0,_))}else X|=O.COLOR_BUFFER_BIT}k&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Mt.dispose(),jt.dispose(),bt.dispose(),S.dispose(),V.dispose(),J.dispose(),se.dispose(),z.dispose(),At.dispose(),K.dispose(),K.removeEventListener("sessionstart",da),K.removeEventListener("sessionend",pa),Un.stop()};function tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Ft.autoReset,k=St.enabled,W=St.autoUpdate,X=St.needsUpdate,H=St.type;dt(),Ft.autoReset=T,St.enabled=k,St.autoUpdate=W,St.needsUpdate=X,St.type=H}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function zt(T){const k=T.target;k.removeEventListener("dispose",zt),ue(k)}function ue(T){ve(T),bt.remove(T)}function ve(T){const k=bt.get(T).programs;k!==void 0&&(k.forEach(function(W){At.releaseProgram(W)}),T.isShaderMaterial&&At.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,W,X,H,ot){k===null&&(k=Lt);const gt=H.isMesh&&H.matrixWorld.determinant()<0,Et=Oc(T,k,W,X,H);xt.setMaterial(X,gt);let Tt=W.index,Bt=1;if(X.wireframe===!0){if(Tt=nt.getWireframeAttribute(W),Tt===void 0)return;Bt=2}const kt=W.drawRange,wt=W.attributes.position;let Jt=kt.start*Bt,oe=(kt.start+kt.count)*Bt;ot!==null&&(Jt=Math.max(Jt,ot.start*Bt),oe=Math.min(oe,(ot.start+ot.count)*Bt)),Tt!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,Tt.count)):wt!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,wt.count));const ae=oe-Jt;if(ae<0||ae===1/0)return;se.setup(H,X,Et,W,Tt);let Ce,Qt=yt;if(Tt!==null&&(Ce=Q.get(Tt),Qt=Kt,Qt.setIndex(Ce)),H.isMesh)X.wireframe===!0?(xt.setLineWidth(X.wireframeLinewidth*Ct()),Qt.setMode(O.LINES)):Qt.setMode(O.TRIANGLES);else if(H.isLine){let Rt=X.linewidth;Rt===void 0&&(Rt=1),xt.setLineWidth(Rt*Ct()),H.isLineSegments?Qt.setMode(O.LINES):H.isLineLoop?Qt.setMode(O.LINE_LOOP):Qt.setMode(O.LINE_STRIP)}else H.isPoints?Qt.setMode(O.POINTS):H.isSprite&&Qt.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Qt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Rt=H._multiDrawStarts,an=H._multiDrawCounts,te=H._multiDrawCount,Ve=Tt?Q.get(Tt).bytesPerElement:1,Qn=bt.get(X).currentProgram.getUniforms();for(let Ie=0;Ie<te;Ie++)Qn.setValue(O,"_gl_DrawID",Ie),Qt.render(Rt[Ie]/Ve,an[Ie])}else if(H.isInstancedMesh)Qt.renderInstances(Jt,ae,H.count);else if(W.isInstancedBufferGeometry){const Rt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,an=Math.min(W.instanceCount,Rt);Qt.renderInstances(Jt,ae,an)}else Qt.render(Jt,ae)};function ee(T,k,W){T.transparent===!0&&T.side===Fe&&T.forceSinglePass===!1?(T.side=Ee,T.needsUpdate=!0,fr(T,k,W),T.side=In,T.needsUpdate=!0,fr(T,k,W),T.side=Fe):fr(T,k,W)}this.compile=function(T,k,W=null){W===null&&(W=T),d=jt.get(W),d.init(k),b.push(d),W.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const X=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ot=H.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){const Et=ot[gt];ee(Et,W,H),X.add(Et)}else ee(ot,W,H),X.add(ot)}),b.pop(),d=null,X},this.compileAsync=function(T,k,W=null){const X=this.compile(T,k,W);return new Promise(H=>{function ot(){if(X.forEach(function(gt){bt.get(gt).currentProgram.isReady()&&X.delete(gt)}),X.size===0){H(T);return}setTimeout(ot,10)}Pt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Ge=null;function on(T){Ge&&Ge(T)}function da(){Un.stop()}function pa(){Un.start()}const Un=new oc;Un.setAnimationLoop(on),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(T){Ge=T,K.setAnimationLoop(T),T===null?Un.stop():Un.start()},K.addEventListener("sessionstart",da),K.addEventListener("sessionend",pa),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,k,I),d=jt.get(T,b.length),d.init(k),b.push(d),at.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),P.setFromProjectionMatrix(at),G=this.localClippingEnabled,F=st.init(this.clippingPlanes,G),m=Mt.get(T,v.length),m.init(),v.push(m),K.enabled===!0&&K.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&ss(ot,k,-1/0,x.sortObjects)}ss(T,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,ft),Nt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Nt&&Ut.addToRenderList(m,T),this.info.render.frame++,F===!0&&st.beginShadows();const W=d.state.shadowsArray;St.render(W,T,k),F===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,H=m.transmissive;if(d.setupLights(),k.isArrayCamera){const ot=k.cameras;if(H.length>0)for(let gt=0,Et=ot.length;gt<Et;gt++){const Tt=ot[gt];ga(X,H,T,Tt)}Nt&&Ut.render(T);for(let gt=0,Et=ot.length;gt<Et;gt++){const Tt=ot[gt];ma(m,T,Tt,Tt.viewport)}}else H.length>0&&ga(X,H,T,k),Nt&&Ut.render(T),ma(m,T,k);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(x,T,k),se.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(d=b[b.length-1],F===!0&&st.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ss(T,k,W,X){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||P.intersectsSprite(T)){X&&ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(at);const gt=J.update(T),Et=T.material;Et.visible&&m.push(T,gt,Et,W,ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||P.intersectsObject(T))){const gt=J.update(T),Et=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ut.copy(T.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),ut.copy(gt.boundingSphere.center)),ut.applyMatrix4(T.matrixWorld).applyMatrix4(at)),Array.isArray(Et)){const Tt=gt.groups;for(let Bt=0,kt=Tt.length;Bt<kt;Bt++){const wt=Tt[Bt],Jt=Et[wt.materialIndex];Jt&&Jt.visible&&m.push(T,gt,Jt,W,ut.z,wt)}}else Et.visible&&m.push(T,gt,Et,W,ut.z,null)}}const ot=T.children;for(let gt=0,Et=ot.length;gt<Et;gt++)ss(ot[gt],k,W,X)}function ma(T,k,W,X){const H=T.opaque,ot=T.transmissive,gt=T.transparent;d.setupLightsView(W),F===!0&&st.setGlobalState(x.clippingPlanes,W),X&&xt.viewport(L.copy(X)),H.length>0&&hr(H,k,W),ot.length>0&&hr(ot,k,W),gt.length>0&&hr(gt,k,W),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ga(T,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new Yn(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?sr:_n,minFilter:pn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const ot=d.state.transmissionRenderTarget[X.id],gt=X.viewport||L;ot.setSize(gt.z,gt.w);const Et=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(q),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Nt&&Ut.render(W);const Tt=x.toneMapping;x.toneMapping=Pn;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),F===!0&&st.setGlobalState(x.clippingPlanes,X),hr(T,W,X),C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let wt=0,Jt=k.length;wt<Jt;wt++){const oe=k[wt],ae=oe.object,Ce=oe.geometry,Qt=oe.material,Rt=oe.group;if(Qt.side===Fe&&ae.layers.test(X.layers)){const an=Qt.side;Qt.side=Ee,Qt.needsUpdate=!0,_a(ae,W,X,Ce,Qt,Rt),Qt.side=an,Qt.needsUpdate=!0,kt=!0}}kt===!0&&(C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot))}x.setRenderTarget(Et),x.setClearColor(q,$),Bt!==void 0&&(X.viewport=Bt),x.toneMapping=Tt}function hr(T,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ot=T.length;H<ot;H++){const gt=T[H],Et=gt.object,Tt=gt.geometry,Bt=X===null?gt.material:X,kt=gt.group;Et.layers.test(W.layers)&&_a(Et,k,W,Tt,Bt,kt)}}function _a(T,k,W,X,H,ot){T.onBeforeRender(x,k,W,X,H,ot),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,k,W,X,T,ot),H.transparent===!0&&H.side===Fe&&H.forceSinglePass===!1?(H.side=Ee,H.needsUpdate=!0,x.renderBufferDirect(W,k,X,H,T,ot),H.side=In,H.needsUpdate=!0,x.renderBufferDirect(W,k,X,H,T,ot),H.side=Fe):x.renderBufferDirect(W,k,X,H,T,ot),T.onAfterRender(x,k,W,X,H,ot)}function fr(T,k,W){k.isScene!==!0&&(k=Lt);const X=bt.get(T),H=d.state.lights,ot=d.state.shadowsArray,gt=H.state.version,Et=At.getParameters(T,H.state,ot,k,W),Tt=At.getProgramCacheKey(Et);let Bt=X.programs;X.environment=T.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(T.isMeshStandardMaterial?V:S).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",zt),Bt=new Map,X.programs=Bt);let kt=Bt.get(Tt);if(kt!==void 0){if(X.currentProgram===kt&&X.lightsStateVersion===gt)return va(T,Et),kt}else Et.uniforms=At.getUniforms(T),T.onBeforeCompile(Et,x),kt=At.acquireProgram(Et,Tt),Bt.set(Tt,kt),X.uniforms=Et.uniforms;const wt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(wt.clippingPlanes=st.uniform),va(T,Et),X.needsLights=zc(T),X.lightsStateVersion=gt,X.needsLights&&(wt.ambientLightColor.value=H.state.ambient,wt.lightProbe.value=H.state.probe,wt.directionalLights.value=H.state.directional,wt.directionalLightShadows.value=H.state.directionalShadow,wt.spotLights.value=H.state.spot,wt.spotLightShadows.value=H.state.spotShadow,wt.rectAreaLights.value=H.state.rectArea,wt.ltc_1.value=H.state.rectAreaLTC1,wt.ltc_2.value=H.state.rectAreaLTC2,wt.pointLights.value=H.state.point,wt.pointLightShadows.value=H.state.pointShadow,wt.hemisphereLights.value=H.state.hemi,wt.directionalShadowMap.value=H.state.directionalShadowMap,wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,wt.spotShadowMap.value=H.state.spotShadowMap,wt.spotLightMatrix.value=H.state.spotLightMatrix,wt.spotLightMap.value=H.state.spotLightMap,wt.pointShadowMap.value=H.state.pointShadowMap,wt.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=kt,X.uniformsList=null,kt}function xa(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Vr.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function va(T,k){const W=bt.get(T);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Oc(T,k,W,X,H){k.isScene!==!0&&(k=Lt),C.resetTextureUnits();const ot=k.fog,gt=X.isMeshStandardMaterial?k.environment:null,Et=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ii,Tt=(X.isMeshStandardMaterial?V:S).get(X.envMap||gt),Bt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,kt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,oe=!!W.morphAttributes.color;let ae=Pn;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ae=x.toneMapping);const Ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qt=Ce!==void 0?Ce.length:0,Rt=bt.get(X),an=d.state.lights;if(F===!0&&(G===!0||T!==M)){const ze=T===M&&X.id===y;st.setState(X,T,ze)}let te=!1;X.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==an.state.version||Rt.outputColorSpace!==Et||H.isBatchedMesh&&Rt.batching===!1||!H.isBatchedMesh&&Rt.batching===!0||H.isBatchedMesh&&Rt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Rt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Rt.instancing===!1||!H.isInstancedMesh&&Rt.instancing===!0||H.isSkinnedMesh&&Rt.skinning===!1||!H.isSkinnedMesh&&Rt.skinning===!0||H.isInstancedMesh&&Rt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Rt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Rt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Rt.instancingMorph===!1&&H.morphTexture!==null||Rt.envMap!==Tt||X.fog===!0&&Rt.fog!==ot||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==st.numPlanes||Rt.numIntersection!==st.numIntersection)||Rt.vertexAlphas!==Bt||Rt.vertexTangents!==kt||Rt.morphTargets!==wt||Rt.morphNormals!==Jt||Rt.morphColors!==oe||Rt.toneMapping!==ae||Rt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Rt.__version=X.version);let Ve=Rt.currentProgram;te===!0&&(Ve=fr(X,k,H));let Qn=!1,Ie=!1,Fi=!1;const le=Ve.getUniforms(),Je=Rt.uniforms;if(xt.useProgram(Ve.program)&&(Qn=!0,Ie=!0,Fi=!0),X.id!==y&&(y=X.id,Ie=!0),Qn||M!==T){xt.buffers.depth.getReversed()?(j.copy(T.projectionMatrix),Cu(j),Pu(j),le.setValue(O,"projectionMatrix",j)):le.setValue(O,"projectionMatrix",T.projectionMatrix),le.setValue(O,"viewMatrix",T.matrixWorldInverse);const vn=le.map.cameraPosition;vn!==void 0&&vn.setValue(O,lt.setFromMatrixPosition(T.matrixWorld)),Dt.logarithmicDepthBuffer&&le.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&le.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Ie=!0,Fi=!0)}if(H.isSkinnedMesh){le.setOptional(O,H,"bindMatrix"),le.setOptional(O,H,"bindMatrixInverse");const ze=H.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),le.setValue(O,"boneTexture",ze.boneTexture,C))}H.isBatchedMesh&&(le.setOptional(O,H,"batchingTexture"),le.setValue(O,"batchingTexture",H._matricesTexture,C),le.setOptional(O,H,"batchingIdTexture"),le.setValue(O,"batchingIdTexture",H._indirectTexture,C),le.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&le.setValue(O,"batchingColorTexture",H._colorsTexture,C));const Oi=W.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Ot.update(H,W,Ve),(Ie||Rt.receiveShadow!==H.receiveShadow)&&(Rt.receiveShadow=H.receiveShadow,le.setValue(O,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Je.envMap.value=Tt,Je.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Je.envMapIntensity.value=k.environmentIntensity),Ie&&(le.setValue(O,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&Bc(Je,Fi),ot&&X.fog===!0&&pt.refreshFogUniforms(Je,ot),pt.refreshMaterialUniforms(Je,X,Y,et,d.state.transmissionRenderTarget[T.id]),Vr.upload(O,xa(Rt),Je,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Vr.upload(O,xa(Rt),Je,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&le.setValue(O,"center",H.center),le.setValue(O,"modelViewMatrix",H.modelViewMatrix),le.setValue(O,"normalMatrix",H.normalMatrix),le.setValue(O,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ze=X.uniformsGroups;for(let vn=0,Mn=ze.length;vn<Mn;vn++){const Ma=ze[vn];z.update(Ma,Ve),z.bind(Ma,Ve)}}return Ve}function Bc(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function zc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,k,W){bt.get(T.texture).__webglTexture=k,bt.get(T.depthTexture).__webglTexture=W;const X=bt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const W=bt.get(T);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,W=0){I=T,w=k,R=W;let X=!0,H=null,ot=!1,gt=!1;if(T){const Tt=bt.get(T);if(Tt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(Tt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Tt.__hasExternalTextures)C.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const wt=T.depthTexture;if(Tt.__boundDepthTexture!==wt){if(wt!==null&&bt.has(wt)&&(T.width!==wt.image.width||T.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);const kt=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?H=kt[k][W]:H=kt[k],ot=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?H=bt.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?H=kt[W]:H=kt,L.copy(T.viewport),U.copy(T.scissor),B=T.scissorTest}else L.copy(it).multiplyScalar(Y).floor(),U.copy(E).multiplyScalar(Y).floor(),B=D;if(xt.bindFramebuffer(O.FRAMEBUFFER,H)&&X&&xt.drawBuffers(T,H),xt.viewport(L),xt.scissor(U),xt.setScissorTest(B),ot){const Tt=bt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,W)}else if(gt){const Tt=bt.get(T.texture),Bt=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tt.__webglTexture,W||0,Bt)}y=-1},this.readRenderTargetPixels=function(T,k,W,X,H,ot,gt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){xt.bindFramebuffer(O.FRAMEBUFFER,Et);try{const Tt=T.texture,Bt=Tt.format,kt=Tt.type;if(!Dt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-X&&W>=0&&W<=T.height-H&&O.readPixels(k,W,X,H,Vt.convert(Bt),Vt.convert(kt),ot)}finally{const Tt=I!==null?bt.get(I).__webglFramebuffer:null;xt.bindFramebuffer(O.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(T,k,W,X,H,ot,gt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){const Tt=T.texture,Bt=Tt.format,kt=Tt.type;if(!Dt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-X&&W>=0&&W<=T.height-H){xt.bindFramebuffer(O.FRAMEBUFFER,Et);const wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.bufferData(O.PIXEL_PACK_BUFFER,ot.byteLength,O.STREAM_READ),O.readPixels(k,W,X,H,Vt.convert(Bt),Vt.convert(kt),0);const Jt=I!==null?bt.get(I).__webglFramebuffer:null;xt.bindFramebuffer(O.FRAMEBUFFER,Jt);const oe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ru(O,oe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ot),O.deleteBuffer(wt),O.deleteSync(oe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,W=0){T.isTexture!==!0&&($i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),H=Math.floor(T.image.width*X),ot=Math.floor(T.image.height*X),gt=k!==null?k.x:0,Et=k!==null?k.y:0;C.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,gt,Et,H,ot),xt.unbindTexture()},this.copyTextureToTexture=function(T,k,W=null,X=null,H=0){T.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],k=arguments[2],H=arguments[3]||0,W=null);let ot,gt,Et,Tt,Bt,kt,wt,Jt,oe;const ae=T.isCompressedTexture?T.mipmaps[H]:T.image;W!==null?(ot=W.max.x-W.min.x,gt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Bt=W.min.y,kt=W.isBox3?W.min.z:0):(ot=ae.width,gt=ae.height,Et=ae.depth||1,Tt=0,Bt=0,kt=0),X!==null?(wt=X.x,Jt=X.y,oe=X.z):(wt=0,Jt=0,oe=0);const Ce=Vt.convert(k.format),Qt=Vt.convert(k.type);let Rt;k.isData3DTexture?(C.setTexture3D(k,0),Rt=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Rt=O.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Rt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const an=O.getParameter(O.UNPACK_ROW_LENGTH),te=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ve=O.getParameter(O.UNPACK_SKIP_PIXELS),Qn=O.getParameter(O.UNPACK_SKIP_ROWS),Ie=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ae.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ae.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Tt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,kt);const Fi=T.isDataArrayTexture||T.isData3DTexture,le=k.isDataArrayTexture||k.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Je=bt.get(T),Oi=bt.get(k),ze=bt.get(Je.__renderTarget),vn=bt.get(Oi.__renderTarget);xt.bindFramebuffer(O.READ_FRAMEBUFFER,ze.__webglFramebuffer),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Mn=0;Mn<Et;Mn++)Fi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.get(T).__webglTexture,H,kt+Mn),T.isDepthTexture?(le&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.get(k).__webglTexture,H,oe+Mn),O.blitFramebuffer(Tt,Bt,ot,gt,wt,Jt,ot,gt,O.DEPTH_BUFFER_BIT,O.NEAREST)):le?O.copyTexSubImage3D(Rt,H,wt,Jt,oe+Mn,Tt,Bt,ot,gt):O.copyTexSubImage2D(Rt,H,wt,Jt,oe+Mn,Tt,Bt,ot,gt);xt.bindFramebuffer(O.READ_FRAMEBUFFER,null),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else le?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Rt,H,wt,Jt,oe,ot,gt,Et,Ce,Qt,ae.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Rt,H,wt,Jt,oe,ot,gt,Et,Ce,ae.data):O.texSubImage3D(Rt,H,wt,Jt,oe,ot,gt,Et,Ce,Qt,ae):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,wt,Jt,ot,gt,Ce,Qt,ae.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,wt,Jt,ae.width,ae.height,Ce,ae.data):O.texSubImage2D(O.TEXTURE_2D,H,wt,Jt,ot,gt,Ce,Qt,ae);O.pixelStorei(O.UNPACK_ROW_LENGTH,an),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,te),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ve),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ie),H===0&&k.generateMipmaps&&O.generateMipmap(Rt),xt.unbindTexture()},this.copyTextureToTexture3D=function(T,k,W=null,X=null,H=0){return T.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],k=arguments[3],H=arguments[4]||0),$i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,W,X,H)},this.initRenderTarget=function(T){bt.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),xt.unbindTexture()},this.resetState=function(){w=0,R=0,I=null,xt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class dc extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pc extends Te{constructor(t=null,e=1,i=1,r,s,o,a,l,u=Oe,c=Oe,h,f){super(null,o,a,l,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo extends Re{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pi=new $t,gl=new $t,Ur=[],_l=new $n,H0=new $t,Vi=new ne,Wi=new Ui;class jo extends ne{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,H0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pi),_l.copy(t.boundingBox).applyMatrix4(pi),this.boundingBox.union(_l)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pi),Wi.copy(t.boundingSphere).applyMatrix4(pi),this.boundingSphere.union(Wi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wi.copy(this.boundingSphere),Wi.applyMatrix4(i),t.ray.intersectsSphere(Wi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,pi),gl.multiplyMatrices(i,pi),Vi.matrixWorld=gl,Vi.raycast(t,Ur);for(let o=0,a=Ur.length;o<a;o++){const l=Ur[o];l.instanceId=s,l.object=this,e.push(l)}Ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new pc(new Float32Array(r*this.count),r,this.count,Vo,tn));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class G0 extends jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xl=new $t,Io=new Jl,Nr=new Ui,Fr=new N;class V0 extends _e{constructor(t=new me,e=new G0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(r),Nr.radius+=s,t.ray.intersectsSphere(Nr)===!1)return;xl.copy(r).invert(),Io.copy(t.ray).applyMatrix4(xl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=u.getX(g);Fr.fromBufferAttribute(h,m),vl(Fr,m,l,r,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Fr.fromBufferAttribute(h,g),vl(Fr,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vl(n,t,e,i,r,s,o){const a=Io.distanceSqToPoint(n);if(a<e){const l=new N;Io.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ts extends Te{constructor(t,e,i,r,s,o,a,l,u){super(t,e,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zo extends me{constructor(t=[new Gt(0,-.5),new Gt(.5,0),new Gt(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=Ae(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],u=[],c=1/e,h=new N,f=new Gt,p=new N,g=new N,_=new N;let m=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let v=0;v<=e;v++){const b=i+v*c*r,x=Math.sin(b),A=Math.cos(b);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*x,h.y=t[w].y,h.z=t[w].x*A,o.push(h.x,h.y,h.z),f.x=v/e,f.y=w/(t.length-1),a.push(f.x,f.y);const R=l[3*w+0]*x,I=l[3*w+1],y=l[3*w+0]*A;u.push(R,I,y)}}for(let v=0;v<e;v++)for(let b=0;b<t.length-1;b++){const x=b+v*t.length,A=x,w=x+t.length,R=x+t.length+1,I=x+1;s.push(A,w,I),s.push(R,I,w)}this.setIndex(s),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.points,t.segments,t.phiStart,t.phiLength)}}class es extends me{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;v(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(p,2));function v(){const x=new N,A=new N;let w=0;const R=(e-t)/i;for(let I=0;I<=s;I++){const y=[],M=I/s,L=M*(e-t)+t;for(let U=0;U<=r;U++){const B=U/r,q=B*l+a,$=Math.sin(q),Z=Math.cos(q);A.x=L*$,A.y=-M*i+m,A.z=L*Z,h.push(A.x,A.y,A.z),x.set($,R,Z).normalize(),f.push(x.x,x.y,x.z),p.push(B,1-M),y.push(g++)}_.push(y)}for(let I=0;I<r;I++)for(let y=0;y<s;y++){const M=_[y][I],L=_[y+1][I],U=_[y+1][I+1],B=_[y][I+1];(t>0||y!==0)&&(c.push(M,L,B),w+=3),(e>0||y!==s-1)&&(c.push(L,U,B),w+=3)}u.addGroup(d,w,0),d+=w}function b(x){const A=g,w=new Gt,R=new N;let I=0;const y=x===!0?t:e,M=x===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const L=g;for(let U=0;U<=r;U++){const q=U/r*l+a,$=Math.cos(q),Z=Math.sin(q);R.x=y*Z,R.y=m*M,R.z=y*$,h.push(R.x,R.y,R.z),f.push(0,M,0),w.x=$*.5+.5,w.y=Z*.5*M+.5,p.push(w.x,w.y),g++}for(let U=0;U<r;U++){const B=A+U,q=L+U;x===!0?c.push(q,q+1,B):c.push(q+1,q,B),I+=3}u.addGroup(d,I,x===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jo extends me{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(s.slice(),3)),this.setAttribute("uv",new Yt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const b=new N,x=new N,A=new N;for(let w=0;w<e.length;w+=3)p(e[w+0],b),p(e[w+1],x),p(e[w+2],A),l(b,x,A,v)}function l(v,b,x,A){const w=A+1,R=[];for(let I=0;I<=w;I++){R[I]=[];const y=v.clone().lerp(x,I/w),M=b.clone().lerp(x,I/w),L=w-I;for(let U=0;U<=L;U++)U===0&&I===w?R[I][U]=y:R[I][U]=y.clone().lerp(M,U/L)}for(let I=0;I<w;I++)for(let y=0;y<2*(w-I)-1;y++){const M=Math.floor(y/2);y%2===0?(f(R[I][M+1]),f(R[I+1][M]),f(R[I][M])):(f(R[I][M+1]),f(R[I+1][M+1]),f(R[I+1][M]))}}function u(v){const b=new N;for(let x=0;x<s.length;x+=3)b.x=s[x+0],b.y=s[x+1],b.z=s[x+2],b.normalize().multiplyScalar(v),s[x+0]=b.x,s[x+1]=b.y,s[x+2]=b.z}function c(){const v=new N;for(let b=0;b<s.length;b+=3){v.x=s[b+0],v.y=s[b+1],v.z=s[b+2];const x=m(v)/2/Math.PI+.5,A=d(v)/Math.PI+.5;o.push(x,1-A)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const b=o[v+0],x=o[v+2],A=o[v+4],w=Math.max(b,x,A),R=Math.min(b,x,A);w>.9&&R<.1&&(b<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,b){const x=v*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){const v=new N,b=new N,x=new N,A=new N,w=new Gt,R=new Gt,I=new Gt;for(let y=0,M=0;y<s.length;y+=9,M+=6){v.set(s[y+0],s[y+1],s[y+2]),b.set(s[y+3],s[y+4],s[y+5]),x.set(s[y+6],s[y+7],s[y+8]),w.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),A.copy(v).add(b).add(x).divideScalar(3);const L=m(A);_(w,M+0,v,L),_(R,M+2,b,L),_(I,M+4,x,L)}}function _(v,b,x,A){A<0&&v.x===1&&(o[b]=v.x-1),x.x===0&&x.z===0&&(o[b]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.vertices,t.indices,t.radius,t.details)}}class Qo extends Jo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qo(t.radius,t.detail)}}class ar extends me{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new N,f=new N,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const v=[],b=d/i;let x=0;d===0&&o===0?x=.5/e:d===i&&l===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const w=A/e;h.x=-t*Math.cos(r+w*s)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(r+w*s)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+x,1-b),v.push(u++)}c.push(v)}for(let d=0;d<i;d++)for(let v=0;v<e;v++){const b=c[d][v+1],x=c[d][v],A=c[d+1][v],w=c[d+1][v+1];(d!==0||o>0)&&p.push(b,x,w),(d!==i-1||l<Math.PI)&&p.push(x,A,w)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ta extends me{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new N,h=new N,f=new N;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),f.subVectors(h,c).normalize(),l.push(f.x,f.y,f.z),u.push(g/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(_,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pi extends jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class W0 extends jn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ea extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class X0 extends ea{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fs=new $t,Ml=new N,Sl=new N;class mc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ml),Sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sl),e.updateMatrixWorld(),Fs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yl=new $t,Xi=new N,Os=new N;class q0 extends mc{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Gt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Xi.setFromMatrixPosition(t.matrixWorld),i.position.copy(Xi),Os.copy(i.position),Os.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Os),i.updateMatrixWorld(),r.makeTranslation(-Xi.x,-Xi.y,-Xi.z),yl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl)}}class na extends ea{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new q0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Y0 extends mc{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K0 extends ea{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);class $0 extends dc{constructor(){super();const t=new xn;t.deleteAttribute("uv");const e=new Pi({side:Ee}),i=new Pi,r=new na(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new ne(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new ne(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ne(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new ne(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const u=new ne(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);const c=new ne(t,i);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const h=new ne(t,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new ne(t,mi(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new ne(t,mi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new ne(t,mi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new ne(t,mi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new ne(t,mi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new ne(t,mi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function mi(n){const t=new Ri;return t.color.setScalar(n),t}function Zn(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function xe(n,t=4,e=4){const i=Zn(n),r=[];for(let h=0;h<e;h++){const f=t<<h,p=new Float32Array(f*f);for(let g=0;g<p.length;g++)p[g]=i();r.push({P:f,g:p})}const s=4096,o=new Map,a=new Map;function l(h,f,p){let g=h.get(f);if(g)return g;g=new Float64Array(r.length*3);for(let _=0;_<r.length;_++){const m=r[_].P,d=f*m,v=Math.floor(d),b=d-v,x=(v%m+m)%m,A=(x+1)%m,w=_*3;g[w]=p?x*m:x,g[w+1]=p?A*m:A,g[w+2]=b*b*(3-2*b)}return h.size>=s&&h.delete(h.keys().next().value),h.set(f,g),g}let u=0,c=.5;for(let h=0;h<r.length;h++)u+=c,c*=.5;return(h,f)=>{const p=l(o,h,!1),g=l(a,f,!0);let _=0,m=.5;for(let d=0;d<r.length;d++){const v=r[d].g,b=d*3,x=p[b],A=p[b+1],w=p[b+2],R=g[b],I=g[b+1],y=g[b+2],M=v[R+x],L=v[R+A],U=v[I+x],B=v[I+A];_+=m*(M+(L-M)*w+(U-M)*y+(M-L-U+B)*w*y),m*=.5}return _/u}}function Ze(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}function sn(n,t=!0,e=!0){const i=new ts(n);return t&&(i.colorSpace=be),e&&(i.wrapS=i.wrapT=tr),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=pn,i}function Dn(n,t){const e=n.getContext("2d"),i=e.createImageData(n.width,n.height),r=i.data,s=[0,0,0];for(let o=0;o<n.height;o++)for(let a=0;a<n.width;a++){t(a/n.width,o/n.height,s,a,o);const l=(o*n.width+a)*4;r[l]=s[0],r[l+1]=s[1],r[l+2]=s[2],r[l+3]=255}return e.putImageData(i,0,0),e}const je=(n,t=0,e=255)=>n<t?t:n>e?e:n;function Bs(n,t,e,i={}){const r=i.size||512,s=Ze(r,r),o=xe(n,2,4),a=xe(n+7,8,3),l=xe(n+13,3,4),u=i.rings||9;return Dn(s,(c,h,f)=>{const p=o(c*.5,h)*3;let g=Math.sin((h*u+p)*Math.PI*2);g=Math.pow(Math.abs(g),.35);const _=a(c*.25,h*8),m=a(c*2,h*32%1);let d=.55*g+.3*_+.15*m;d=d*(.85+.3*l(c,h));for(let v=0;v<3;v++)f[v]=je(e[v]+(t[v]-e[v])*d)}),sn(s)}function j0(n){const e=Ze(1024,1024),i=Zn(n),r=8,s=[];for(let h=0;h<r;h++)s.push({off:i(),tone:.78+i()*.35,hue:i(),len:.45+i()*.3});const o=xe(n+3,2,4),a=xe(n+9,8,3),l=xe(n+11,3,4),u=[150,98,58],c=[78,46,24];return Dn(e,(h,f,p)=>{const g=Math.floor(f*r),_=s[g],m=f*r-g,d=(h+_.off)%1,v=Math.floor(d/_.len*2),b=d/_.len*2%1,x=_.tone*(v%2?.92:1.04)*(.96+.08*Math.sin(v*12.9+g)),A=o(h,f*.5+g*.13)*2.5;let w=Math.abs(Math.sin((m*3+A+v)*Math.PI*2));w=Math.pow(w,.4);const R=a(h*.5,f*4);let I=(.55*w+.45*R)*x;const y=l(h,f);I*=.9+.2*y;let M=Math.min(m,1-m)*64,L=Math.min(b,1-b)*260;const U=Math.min(1,M,L);for(let B=0;B<3;B++)p[B]=je((c[B]+(u[B]-c[B])*I)*(.25+.75*U)+(_.hue-.5)*(B===0?12:B===1?6:0))}),sn(e)}function bl(n,t){const i=Ze(512,512),r=xe(n,4,5),s=xe(n+1,16,2);return Dn(i,(o,a,l)=>{const u=r(o,a),c=s(o,a),h=.88+.16*u+.05*c;l[0]=je(t[0]*h),l[1]=je(t[1]*h),l[2]=je(t[2]*(h-.02))}),sn(i)}function Z0(n){const e=Ze(512,512),i=xe(n,6,5),r=xe(n+4,24,2);return Dn(e,(s,o,a)=>{const l=Math.floor(o*4),u=(s+l%2*.5)%1,c=o*4-l,h=u*2-Math.floor(u*2),f=Math.min(1,Math.min(c,1-c)*40,Math.min(h,1-h)*60),p=(.8+.25*i(s,o)+.08*r(s,o))*(.55+.45*f);a[0]=je(196*p),a[1]=je(178*p),a[2]=je(150*p)}),sn(e)}function El(n,t){const i=Ze(512,512),r=xe(n,64,2),s=xe(n+2,8,4),o=xe(n+5,3,4);return Dn(i,(a,l,u)=>{const c=r(a,l),f=Math.abs(s(a,l)-.5)<.015?.7:1,p=Math.max(0,o(a,l)-.52)*3.2,g=(.82+.3*c)*f;for(let _=0;_<3;_++){const m=t[_]+(_===0?70:_===1?52:36);u[_]=je((t[_]*(1-p)+m*p)*g)}}),sn(i)}function zs(n,t,e){const r=Ze(256,256),s=xe(n,8,3);return Dn(r,(o,a,l,u,c)=>{const h=((u+c)%4<2?1:.92)*(u%2?1:.96),f=e&&Math.sin(o*Math.PI*2*6)>.6?.82:1,p=h*f*(.9+.15*s(o,a));for(let g=0;g<3;g++)l[g]=je(t[g]*p)}),sn(r)}function J0(n){const i=Ze(512,768),r=i.getContext("2d");r.fillStyle="#7a2a22",r.fillRect(0,0,512,768);const s=(h,f,p)=>{r.strokeStyle=p,r.lineWidth=f,r.strokeRect(h,h,512-h*2,768-h*2)};s(14,22,"#2a2440"),s(34,6,"#c9a46a"),s(52,26,"#3c4a5c"),s(70,5,"#c9a46a"),r.fillStyle="#d2b07a";for(let h=0;h<26;h++){const f=h/26,p=[[f*512,52],[460,f*768],[512-f*512,716],[52,768-f*768]];for(const[g,_]of p)r.save(),r.translate(g,_),r.rotate(Math.PI/4),r.fillRect(-5,-5,10,10),r.restore()}for(let h=110;h<668;h+=48)for(let f=110;f<412;f+=48)r.fillStyle=(f+h)%96===0?"#2f3a52":"#a8742f",r.save(),r.translate(f,h),r.rotate(Math.PI/4),r.fillRect(-7,-7,14,14),r.restore(),r.fillStyle="#e0c590",r.fillRect(f-2,h-2,4,4);r.save(),r.translate(512/2,768/2);const o=[[150,"#2a2440"],[130,"#c9a46a"],[118,"#3c4a5c"],[86,"#8e3a2a"],[60,"#d8bd85"],[36,"#2a2440"]];for(const[h,f]of o)r.fillStyle=f,r.beginPath(),r.ellipse(0,0,h*.75,h,0,0,Math.PI*2),r.fill();r.restore();const a=r.getImageData(0,0,512,768),l=xe(n+3,4,4),u=xe(n+5,64,1);for(let h=0;h<768;h++)for(let f=0;f<512;f++){const p=(h*512+f)*4,g=.78+.28*l(f/512,h/768)+.08*u(f/512,h/768),_=Math.max(0,l(f/512+.3,h/768)-.58)*1.6;for(let m=0;m<3;m++)a.data[p+m]=je(a.data[p+m]*g*(1-_)+150*_)}return r.putImageData(a,0,0),sn(i,!0,!1)}function Q0(n){const i=Ze(512,256),r=i.getContext("2d"),s=Zn(n),o=xe(n,16,3);Dn(i,(u,c,h)=>{const f=200+40*o(u,c);h[0]=h[1]=h[2]=f});const a="#d9a94a",l=32;for(let u=0;u<8;u++){const c=u*l;r.save(),r.beginPath(),r.rect(c,0,l,256),r.clip();const h=r.createLinearGradient(c,0,c+l,0);if(h.addColorStop(0,"rgba(0,0,0,0.35)"),h.addColorStop(.2,"rgba(0,0,0,0)"),h.addColorStop(.8,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,0.35)"),r.fillStyle=h,r.fillRect(c,0,l,256),r.fillStyle=a,u===0&&(r.fillRect(c,14,l,2),r.fillRect(c,240,l,2)),u===1){for(const f of[40,90,140,190])r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(c,f,l,6),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(c,f,l,2);r.fillStyle="#2a1a14",r.fillRect(c+3,52,l-6,30),r.fillStyle=a;for(let f=0;f<3;f++)r.fillRect(c+7,60+f*7,l-14-s()*6,2)}if(u===2){for(let f=0;f<6;f++)r.fillRect(c+8,50+f*9,l-16-s()*8,3);r.fillRect(c,226,l,6)}if(u===3){r.fillStyle="rgba(0,0,0,0.5)",r.fillRect(c,0,l,34),r.fillRect(c,222,l,34),r.fillStyle=a,r.fillRect(c,34,l,2),r.fillRect(c,220,l,2);for(let f=0;f<4;f++)r.fillRect(c+9,80+f*8,l-18,2)}if(u===4){r.fillStyle="rgba(255,255,255,0.25)",r.fillRect(c,0,l,256),r.fillStyle="rgba(20,20,20,0.75)";for(let f=0;f<10;f++)r.fillRect(c+12,40+f*12,3+s()*4,7)}if(u===5){for(const f of[8,16,24,230,238,246])r.fillRect(c,f,l,2);for(let f=0;f<5;f++)r.beginPath(),r.arc(c+l/2,60+f*30,3,0,Math.PI*2),r.fill();r.fillStyle="#1d1d1d",r.fillRect(c+4,34,l-8,18),r.fillStyle=a,r.fillRect(c+8,41,l-16,3)}if(u===6){r.fillStyle="rgba(255,255,255,0.3)";for(let f=0;f<40;f++)r.fillRect(c+s()*l,s()<.5?s()*30:256-s()*30,2+s()*4,1+s()*2);r.fillStyle=a,r.fillRect(c+10,70,l-20,3)}u===7&&(r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(c,20,l,10),r.fillRect(c,226,l,10),r.fillStyle="rgba(240,235,220,1)",r.fillRect(c+5,60,l-10,34),r.fillStyle="rgba(40,30,20,0.8)",r.fillRect(c+8,70,l-16,2),r.fillRect(c+8,78,l-18,2)),r.restore()}for(let u=256;u<384;u++){const c=215+(Math.sin(u*2.7)*.5+.5)*30*s();r.fillStyle=`rgb(${c},${c},${c-4})`,r.fillRect(u,0,1,256)}return sn(i,!0,!1)}function tm(n){const e=Ze(512,512),i=e.getContext("2d"),r=Zn(n);return[["#d8b27a","#8a6a4a","#4b5a3a","#2e3a2a"],["#9fb3c0","#6a7a6a","#3e4a3a","#22281e"],["#e8c28a","#b07a4a","#5a3a2a","#2a1e18"],["#7a8aa0","#5a6058","#3a3a30","#1e1e18"]].forEach((o,a)=>{const l=a%2*256,u=Math.floor(a/2)*256,c=i.createLinearGradient(0,u,0,u+256);c.addColorStop(0,o[0]),c.addColorStop(.55,o[1]),c.addColorStop(1,o[3]),i.fillStyle=c,i.fillRect(l,u,256,256);for(let f=0;f<3;f++){i.fillStyle=o[1+f],i.beginPath(),i.moveTo(l,u+256);const p=120+f*45;for(let g=0;g<=16;g++)i.lineTo(l+g*16,u+p+Math.sin(g*.7+f*2+a)*18+r()*10);i.lineTo(l+256,u+256),i.fill()}a===2&&(i.fillStyle="rgba(255,230,170,0.8)",i.beginPath(),i.arc(l+180,u+90,18,0,7),i.fill());const h=i.createRadialGradient(l+128,u+128,40,l+128,u+128,190);h.addColorStop(0,"rgba(60,40,10,0)"),h.addColorStop(1,"rgba(40,25,5,0.55)"),i.fillStyle=h,i.fillRect(l,u,256,256)}),sn(e,!0,!1)}function em(n){const i=Ze(512,256),r=xe(n,4,5);return Dn(i,(s,o,a)=>{const l=r(s,o*.5+.2)>.53,u=Math.abs(o-.5),c=Math.abs(s*24%1)<.03||Math.abs(o*12%1)<.04?.82:1;l?(a[0]=196*c,a[1]=168*c,a[2]=112*c):(a[0]=(150-u*60)*c,a[1]=(140-u*40)*c,a[2]=(100-u*20)*c)}),sn(i,!0,!1)}function nm(){const n=Ze(64,64),t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ts(n)}function ia(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new me;let u=0;for(let c=0;c<n.length;++c){const h=n[c];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(e){let c=0;const h=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+c);c+=n[f].attributes.position.count}l.setIndex(h)}for(const c in s){const h=Tl(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<h;++f){const p=[];for(let _=0;_<o[c].length;++_)p.push(o[c][_][f]);const g=Tl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Tl(n){let t,e,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*e}const o=new t(s),a=new Re(o,e,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const h=l/e;for(let f=0,p=c.count;f<p;f++)for(let g=0;g<e;g++){const _=c.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(c.array,l);l+=c.count*e}return r!==void 0&&(a.gpuType=r),a}const wl=new Be,Al=new rn;function gc(n,t,e,i,r){const s=new xn(n,t,e),o=s.attributes.uv,a=r(),l=r(),u=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let c=0;c<6;c++){const[h,f]=u[c],p=f>h;for(let g=0;g<4;g++){const _=c*4+g;let m=o.getX(_)*h,d=o.getY(_)*f;if(p){const v=m;m=d,d=v}o.setXY(_,m/i+a,d/i+l)}}return s}class _c{constructor(t){this.rand=t,this.batches=new Map,this.solids=[]}add(t,e){this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(e)}frame(t,e,i,r=0){return new ns(this,new $t().makeRotationY(r).setPosition(t,e,i))}finish(t){for(const[e,i]of this.batches){for(const o of i)for(const a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);const r=ia(i,!1),s=new ne(r,e);s.castShadow=!e.userData.noShadow,s.receiveShadow=!0,s.matrixAutoUpdate=!1,t.add(s);for(const o of i)o.dispose()}this.batches.clear()}}class ns{constructor(t,e){this.b=t,this.m=e}sub(t,e,i,r=0){return new ns(this.b,this.m.clone().multiply(new $t().makeRotationY(r).setPosition(t,e,i)))}local(t,e,i,r=0,s=0,o=0){return wl.set(r,s,o),Al.setFromEuler(wl),new $t().compose(new N(t,e,i),Al,new N(1,1,1)).premultiply(this.m)}geo(t,e,i,r,s,o,a,l){e.applyMatrix4(this.local(i,r,s,o,a,l)),this.b.add(t,e)}box(t,e,i,r,s,o,a,l=0,u=0,c=0){this.geo(t,gc(e,i,r,t.userData.ts||1,this.b.rand),s,o,a,l,u,c)}cyl(t,e,i,r,s,o,a,l=12,u=0,c=0,h=0,f=!1,p,g){const _=new es(e,i,r,l,1,f,p||0,g||Math.PI*2),m=t.userData.ts||1,d=_.attributes.uv,v=Math.PI*2*Math.max(e,i);for(let b=0;b<d.count;b++)d.setXY(b,d.getY(b)*r/m,d.getX(b)*v/m);this.geo(t,_,s,o,a,u,c,h)}sphere(t,e,i,r,s,o=1,a=1,l=1,u=12,c=8){const h=new ar(e,u,c);h.scale(o,a,l),this.geo(t,h,i,r,s)}torus(t,e,i,r,s,o,a=0,l=0,u=0,c=32){this.geo(t,new ta(e,i,6,c),r,s,o,a,l,u)}plane(t,e,i,r,s,o,a=0,l=0,u=0,c=null){const h=new Ln(e,i);if(c){const f=h.attributes.uv;for(let p=0;p<f.count;p++)f.setXY(p,c[0]+f.getX(p)*c[2],c[1]+f.getY(p)*c[3])}this.geo(t,h,r,s,o,a,l,u)}solid(t,e,i,r,s,o){const a=this.local(r,s,o),l=new N,u=new N(1/0,1/0,1/0),c=new N(-1/0,-1/0,-1/0);for(let h=0;h<8;h++)l.set((h&1?.5:-.5)*t,(h&2?.5:-.5)*e,(h&4?.5:-.5)*i).applyMatrix4(a),u.min(l),c.max(l);this.b.solids.push({x0:u.x,x1:c.x,y0:u.y,y1:c.y,z0:u.z,z1:c.z})}sbox(t,e,i,r,s,o,a){this.box(t,e,i,r,s,o,a),this.solid(e,i,r,s,o,a)}}function im(){const n=(c,h)=>{const f=new Pi(c);return f.userData.ts=h||1,f},t=Bs(1,[118,70,38],[48,26,12],{rings:16}),e=Bs(2,[184,124,70],[104,62,30],{rings:15}),i=Bs(3,[84,50,30],[34,18,10],{rings:11}),r=j0(4),s=bl(5,[232,214,184]),o=bl(6,[150,158,124]),a=El(7,[100,34,22]),l=El(8,[92,56,30]),u=Z0(9);return{walnut:n({map:t,bumpMap:t,bumpScale:.6,roughness:.6,color:16777215},1.3),oak:n({map:e,bumpMap:e,bumpScale:.5,roughness:.48},1.6),dark:n({map:i,bumpMap:i,bumpScale:.5,roughness:.55},1.2),floor:n({map:r,bumpMap:r,bumpScale:1.2,roughness:.42},1.9),plaster:n({map:s,bumpMap:s,bumpScale:1.5,roughness:.94},3),sage:n({map:o,bumpMap:o,bumpScale:1.5,roughness:.92},2.5),ceil:n({map:s,roughness:.95,color:15919320},4),leather:n({map:a,bumpMap:a,bumpScale:1.2,roughness:.5},.9),leather2:n({map:l,bumpMap:l,bumpScale:1.2,roughness:.55},.9),stone:n({map:u,bumpMap:u,bumpScale:2,roughness:.88},1.4),iron:n({color:1841946,metalness:.75,roughness:.48}),brass:n({color:11831880,metalness:1,roughness:.32}),gilt:n({color:10122294,metalness:.8,roughness:.42}),soot:n({color:920587,roughness:1}),cushion:n({map:zs(10,[150,128,92],!0),roughness:.95},.5),cushion2:n({map:zs(11,[70,88,70],!1),roughness:.95},.4),runner:n({map:zs(12,[118,34,28],!0),roughness:.95},.6),paper:n({color:15129280,roughness:.9}),ceramic:n({color:15525590,roughness:.25}),terracotta:n({color:10246714,roughness:.85}),plant:n({color:4086828,roughness:.75,side:Fe}),greenGlass:n({color:1993264,emissive:3971642,emissiveIntensity:.55,roughness:.15,metalness:.1,side:Fe}),shade:n({color:15390376,emissive:16757865,emissiveIntensity:.9,roughness:.9,side:Fe}),flame:Object.assign(new Ri({color:new It(2.4,1.6,.7)}),{userData:{noShadow:!0}}),ember:Object.assign(new Ri({color:new It(2.2,.7,.2)}),{userData:{noShadow:!0}}),rug:n({map:J0(13),roughness:1}),painting:n({map:tm(14),roughness:.55}),globe:n({map:em(15),roughness:.4})}}const Do={H:10.5,GY:4.2},ct=.012;function rm(n,t,e){const i=new _c(e),r=i.frame(0,0,0,0),s=Do.H,o=Do.GY,a=[],l=[],u=[],c=e;function h(E,D,P,F,G,j,at,lt,ut){const Lt=[D,P];for(const Ct of lt)Lt.push(Ct[0],Ct[1]);const Nt=[...new Set(Lt)].sort((Ct,O)=>Ct-O);for(let Ct=0;Ct<Nt.length-1;Ct++){const O=Nt[Ct],Xt=Nt[Ct+1],Pt=lt.filter(Ft=>Ft[0]<=O&&Ft[1]>=Xt).sort((Ft,bt)=>Ft[2]-bt[2]);let Dt=j;const xt=(Ft,bt)=>{bt-Ft<.001||(E==="x"?r.sbox(ut,G-F,bt-Ft,Xt-O,(F+G)/2,(Ft+bt)/2,(O+Xt)/2):r.sbox(ut,Xt-O,bt-Ft,G-F,(O+Xt)/2,(Ft+bt)/2,(F+G)/2))};for(const Ft of Pt)xt(Dt,Ft[2]),Dt=Ft[3];xt(Dt,at)}}r.sbox(n.floor,14,.3,19,0,-.15,-.5),r.box(n.ceil,15,.3,20,0,s+.15,-.5),h("z",-7.5,7.5,-10.5,-10,0,s,[],n.plaster),h("x",-10.5,9.5,7,7.5,0,s,[],n.plaster),h("z",-7.5,7.5,9,9.5,0,s,[[-5,-3,4.5,8.3],[2.6,4.6,4.5,8.3]],n.plaster),h("x",-10.5,9.5,-7.5,-7,0,s,[[-5.6,-3.6,.9,7.2],[-1.6,.4,.9,7.2],[2.4,7.4,0,3.4],[3.2,6.6,5,8]],n.plaster),r.sbox(n.floor,4.5,.3,5,-9.25,-.15,4.9),r.box(n.ceil,5,.3,6,-9.5,3.75,4.9),r.box(n.plaster,5.4,.3,6.6,-9.75,4.05,4.9),h("z",-12,-7.5,1.9,2.4,0,3.6,[[-10.4,-8.6,.9,2.9]],n.sage),h("z",-12,-7.5,7.4,7.9,0,3.6,[[-10.4,-8.6,.9,2.9]],n.sage),h("x",1.9,7.9,-12,-11.5,0,3.6,[[2.9,6.9,.6,3]],n.sage);const g=-7+ct;for(const E of[3.2,4.9,6.6])r.box(n.dark,4-2*ct,.18,.14,-9.5,3.6-.09-ct,E);r.box(n.oak,.3,.3,5.2,g+.15,3.45,4.9);function _(E,D,P,F,G=!0){const j=[e(),e()];function at(Ct,O,Xt){let Pt=0;return gc(Ct,.05,O,n.oak.userData.ts,()=>j[Pt++]).translate(0,.025+ct,Xt)}const lt=[at(D+.3,.14,.07+ct),at(D-2*ct,F,-F/2+ct)];E.geo(n.oak,ia(lt,!1),0,0,0);for(const Ct of lt)Ct.dispose();E.box(n.oak,.12+ct,P+.12,.06,-D/2-.06+ct/2,P/2,.03+ct),E.box(n.oak,.12+ct,P+.12,.06,D/2+.06-ct/2,P/2,.03+ct),E.box(n.oak,D+.36,.14+ct,.07,0,P+.07-ct/2,.035+ct);const ut=-F*.55;E.box(n.dark,D-2*ct,.07,.07,0,.06,ut),E.box(n.dark,D-2*ct,.07,.07,0,P-.035-ct,ut),E.box(n.dark,.07,P-2*ct,.07,-D/2+.035+ct,P/2,ut),E.box(n.dark,.07,P-2*ct,.07,D/2-.035-ct,P/2,ut);const Lt=Math.max(1,Math.round(D/.62));for(let Ct=1;Ct<Lt;Ct++)E.box(n.iron,.03,P,.035,-D/2+D*Ct/Lt,P/2,ut);const Nt=Math.max(1,Math.round(P/.55));for(let Ct=1;Ct<Nt;Ct++)E.box(Ct%4===0?n.dark:n.iron,D-2*ct,Ct%4===0?.06:.025,.035,0,P*Ct/Nt,ut);if(G){const Ct=[];for(const[O,Xt]of[[-D/2,0],[D/2,0],[D/2,P],[-D/2,P]])Ct.push(new N(O,Xt,ut).applyMatrix4(E.m));u.push(Ct)}}_(r.sub(-7,.9,-4.6,Math.PI/2),2,6.3,.5),_(r.sub(-7,.9,-.6,Math.PI/2),2,6.3,.5),_(r.sub(-7,5,4.9,Math.PI/2),3.4,3,.5),_(r.sub(-11.5,.6,4.9,Math.PI/2),4,2.4,.5),_(r.sub(-9.5,.9,7.4,Math.PI),1.8,2,.5),_(r.sub(-9.5,.9,2.4,0),1.8,2,.5,!1),_(r.sub(-4,4.5,9,Math.PI),2,3.8,.5),_(r.sub(3.6,4.5,9,Math.PI),2,3.8,.5);for(const E of[2.33,7.47])r.box(n.oak,.14,3.5+ct,.6,-7+.07+ct,(3.5-ct)/2,E);for(const E of[-4.6,-.6])r.box(n.dark,.04,.85,2,-6.98+ct,.45,E);r.box(n.dark,.05,1,2.2-ct,7-.025-ct,.5,7.85-ct/2),r.box(n.oak,.08,.06,2.3-ct,6.96-ct,1.02,7.85-ct/2);for(const[E,D,P,F]of[[14,.3,0,-9.85],[14,.3,0,8.85],[.3,19,-6.85,-.5],[.3,19,6.85,-.5]]){const G=P&&P-Math.sign(P)*ct,j=F===-.5?F:F-Math.sign(F)*ct;r.box(n.oak,E>1?E-2*ct:E,.22,D>1?D-2*ct:D,G,s-.11-ct,j),r.box(n.dark,E>1?E-2*ct:E+.1,.08,D>1?D-2*ct:D+.12,G-(P?Math.sign(P)*.05:0),s-.26,j-(F===-.5?0:Math.sign(F)*.06))}r.box(n.oak,.12,.1,19-2*ct,-6.94+ct,8.4,-.5),r.box(n.oak,14-2*ct,.1,.12,0,8.4,8.94-ct),r.box(n.oak,.12,.1,19-2*ct,6.94-ct,8.4,-.5);for(const E of[-4.6,-.6]){r.cyl(n.iron,.02,.02,2.9,-6.82,7.55,E,8,Math.PI/2,0,0);for(const D of[-1,1]){r.sphere(n.iron,.045,-6.82,7.55,E+D*1.45),r.box(n.iron,.12,.03,.03,-6.9,7.55,E+D*1.3);for(let P=0;P<4;P++)r.box(n.cushion2,.05+P%2*.03,4.85-P*.12,.05,-6.86+P%2*.03,5.08+P*.06,E+D*(1.04+P*.035),0,0,0);r.cyl(n.brass,.012,.012,.2,-6.8,3.4,E+D*1.1,6,Math.PI/2,0,0)}}for(const E of[-8.2,-4.6,-1,2.6,6.2]){r.box(n.dark,14-2*ct,.38,.3,0,9.85,E),r.box(n.dark,.24,.6,.24,0,10.2-ct,E);for(const D of[-1,1]){const P=(.2*Math.cos(.62)+1.4*Math.sin(.62))/2;r.box(n.dark,.2,1.4,.22,D*(7-ct-P),9.2,E,0,0,D*.62),r.box(n.iron,.36,.42,.32,D*3.4,9.85,E),r.box(n.dark,.25,.7,.32,D*(7-.125-ct),9.2,E)}}for(const E of[-3.4,3.4])r.box(n.dark,.2,.24,19-2*ct,E,10.25,-.5);r.sbox(n.floor,14,.35,3,0,o-.175,-8.5),r.sbox(n.floor,2.8,.35,5.8,5.6,o-.175,-4.1);for(let E=-6.6;E<4.2;E+=.9)r.box(n.dark,.12,.24,3-ct,E,o-.47,-8.5+ct/2);for(let E=-6.6;E<-1.2;E+=.9)r.box(n.dark,2.8-ct,.24,.12,5.6-ct/2,o-.47,E);r.box(n.oak,11.31-ct,.55,.24,-1.345+ct/2,o-.27,-6.9),r.box(n.oak,.24,.55,5.9,4.3,o-.27,-4.15),r.box(n.dark,11.31-ct,.06,.3,-1.345+ct/2,o-.02,-6.9),r.box(n.dark,.3,.06,5.9,4.3,o-.02,-4.15);const m=[[-4.6,-6.9,"x"],[-1.4,-6.9,"x"],[1.8,-6.9,"x"],[4.3,-6.9,"c"],[4.3,-4.1,"z"],[4.3,-1.35,"z"]];for(const[E,D,P]of m){r.cyl(n.iron,.07,.085,o-.55,E,(o-.55)/2,D,14),r.box(n.iron,.24,.16,.24,E,.08,D),r.box(n.iron,.26,.1,.26,E,o-.6,D),r.cyl(n.iron,.11,.07,.18,E,o-.75,D,14),r.solid(.26,o-.5,.26,E,(o-.5)/2,D);const F=P==="x"?[[1,0],[-1,0]]:P==="z"?[[0,1],[0,-1]]:[[-1,0],[0,1]];for(const[G,j]of F)r.box(n.iron,.04,.9,.04,E+G*.3,o-.88,D+j*.3,j*.72,0,-G*.72),r.torus(n.iron,.12,.012,E+G*.22,o-.75,D+j*.22,0,G?0:Math.PI/2,0,16)}function d(E,D,P,F,G,j=2.4,at){const lt=Math.hypot(P-E,F-D),ut=Math.atan2(-(F-D),P-E),Lt=r.sub(E,G,D,ut);Lt.box(n.oak,lt+.06,.07,.13,lt/2,1.02,0),Lt.box(n.iron,lt,.04,.05,lt/2,.97,0),Lt.box(n.iron,lt,.04,.05,lt/2,.1,0);const Nt=Math.round((at||lt)/.13);for(let Pt=1;Pt<Nt;Pt++){const Dt=lt*Pt/Nt;Lt.box(n.iron,.02,.86,.02,Dt,.53,0),Pt%3===0&&Lt.sphere(n.iron,.025,Dt,.45,0)}const Ct=Math.max(1,Math.round(lt/j));for(let Pt=0;Pt<=Ct;Pt++){const Dt=lt*Pt/Ct;Lt.box(n.oak,.11,1.12,.11,Dt,.56,0),Lt.sphere(n.oak,.065,Dt,1.16,0,1,.8,1)}const O=at?r.sub(-7,G,D,ut):Lt,Xt=at||lt;O.solid(Xt,1.1,.16,Xt/2,.55,0)}d(-7+.065+ct,-6.92,4.3,-6.92,o,2.4,11.3),d(4.3,-6.92,4.3,-1.25,o,1.9),r.box(n.oak,.08,.3,3-ct,-6.96+ct,o+.1,-8.5+ct/2);const v=o/24,b=.3,x=4.2,A=7,w=6.7,R=(x+A)/2,I=A-x,y=[];for(let E=1;E<=11;E++)y.push({y:E*v,z0:w-E*b,z1:w-(E-1)*b});y.push({y:12*v,z0:2.1,z1:3.4,landing:!0});for(let E=13;E<=23;E++)y.push({y:E*v,z0:2.1-(E-12)*b,z1:2.1-(E-13)*b});for(const E of y){const D=E.z1-E.z0,P=(E.z0+E.z1)/2;r.box(n.dark,I-ct,E.y-.045,D,R-ct/2,(E.y-.045)/2,P),r.box(n.oak,I+.03-ct,.045,D+.035,R-.015-ct/2,E.y-.0225,P+.0175),r.solid(I,E.y,D,R,E.y/2,P),r.box(n.runner,1.5,.012,D,R+.15,E.y+.006,P+.01),r.box(n.runner,1.5,v-.03,.012,R+.15,E.y-v/2-.02,E.z1+.007),r.cyl(n.brass,.008,.008,1.62,R+.15,E.y-v+.012,E.z1+.02,6,0,0,Math.PI/2);const F=E.landing?9:2;for(let G=0;G<F;G++){const j=E.z0+D*(G+.5)/F;r.box(n.iron,.022,.9,.022,x+.07,E.y+.45,j)}r.solid(.16,1.05,D,x+.07,E.y+.52,P)}const M=Math.atan(v/b),L=[[w,0,w-11*b,11*v],[2.1,12*v,-1.2,23*v]];for(const[E,D,P,F]of L){const G=Math.hypot(E-P,F-D),j=(E+P)/2,at=(D+F)/2;r.box(n.oak,.13,.07,G,x+.07,at+1,j,M,0,0),r.box(n.iron,.05,.04,G,x+.07,at+.95,j,M,0,0),r.box(n.oak,.07,.32,G+.2,x-.02,at+.02,j-.05,M,0,0)}r.box(n.oak,.13,.07,1.3,x+.07,12*v+1,2.75);for(const[E,D]of[[w-.12,0],[3.4,11*v],[2.1,12*v],[-1.25,o]])r.box(n.oak,.16,1.25,.16,x+.07,D+.62,E),r.box(n.oak,.2,.06,.2,x+.07,D+1.26,E),r.sphere(n.oak,.08,x+.07,D+1.35,E);r.solid(.2,1.25,.2,x+.07,.62,w-.12);function U(E,D,P,F,G={}){const j=Math.max(1,Math.round(D/(G.bay||.92))),at=D/j,lt=G.spacing||.38,ut=.14,Lt=Math.floor((P-ut-.12)/lt),Nt=(P-ut-.12)/Lt;E.box(n.dark,D,ut,F-.03,D/2,ut/2,-F/2-.015),E.box(n.walnut,D,P,.02,D/2,P/2,-F+.01);function Ct(O,Xt,Pt,Dt,xt,Ft){const bt=G.wallLeft?ct:-Xt/2,C=G.wallRight?D-ct:D+Xt/2;E.box(O,C-bt,Pt,Dt,(bt+C)/2,xt,Ft)}Ct(n.walnut,.06,.07,F+.05,P-.035,-F/2+.025),Ct(n.walnut,.12,.05,F+.09,P+.025,-F/2+.045),G.noCornice||Ct(n.dark,.02,.1,.03,P-.12,.01);for(let O=0;O<=j;O++){const Xt=Math.min(D-.02,Math.max(.02,O*at));E.box(n.walnut,.04,P-.07,F,Xt,(P-.07)/2,-F/2);const Pt=O===0&&G.wallLeft?.03+ct:O===j&&G.wallRight?D-.03-ct:Xt;E.box(n.dark,.06,P-.2,.015,Pt,P/2-.05,.005)}for(let O=0;O<j;O++){const Xt=O*at+.02,Pt=(O+1)*at-.02,Dt=(c()-.5)*.04;for(let xt=0;xt<=Lt;xt++){const Ft=ut+xt*Nt+(xt>0&&xt<Lt?Dt:0);if(xt>0&&xt<Lt+1&&E.box(n.walnut,Pt-Xt,.026,F-.025,(Xt+Pt)/2,Ft-.013,-F/2-.0125),xt<Lt){const C=ut+(xt+1)*Nt+(xt+1<Lt?Dt:0)-Ft-.026-.005,S=G.sparse?.8:.97;c()<S&&a.push({m:E.local(Xt+.005,Ft,-.012),len:Pt-Xt-.01,clear:C,d:F-.04})}}}G.solid!==!1&&E.solid(D,P+.05,F,D/2,P/2,-F/2)}U(r.sub(-7,0,-9.6,0),14,3.45,.4,{wallLeft:!0,wallRight:!0}),U(r.sub(-6.6,0,-5.75,Math.PI/2),3.85,3.45,.4),U(r.sub(6.6,0,-9.6,-Math.PI/2),8.4,3.45,.4,{spacing:.4}),U(r.sub(-6.6,0,-1.7,Math.PI/2),1.8,2.4,.36,{spacing:.36}),U(r.sub(-6.6,0,2.3,Math.PI/2),1.8,2.4,.36,{spacing:.42}),U(r.sub(-1.4,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.4,wallRight:!0}),U(r.sub(7,0,8.6,Math.PI),5.6,3.2,.4,{spacing:.37,wallLeft:!0}),U(r.sub(-7,o,-9.6,0),14,3.8,.4,{spacing:.4,wallLeft:!0,wallRight:!0}),U(r.sub(-6.6,o,-7,Math.PI/2),2.6,3.8,.4,{spacing:.4}),U(r.sub(6.6,o,-9.6,-Math.PI/2),8.4,3.8,.4,{spacing:.39});for(const E of[-5,-2.4]){U(r.sub(-4.3,0,E+.3,0),4,2.25,.3,{spacing:.36,solid:!1}),U(r.sub(-.3,0,E-.3,Math.PI),4,2.25,.3,{spacing:.36,solid:!1}),r.solid(4.1,2.3,.62,-2.3,1.15,E);for(const D of[-4.33,-.27])r.box(n.oak,.06,2.3,.66,D,1.15,E);r.box(n.oak,4.14,.05,.7,-2.3,2.3,E)}U(r.sub(-10.6,0,2.75,0),2.2,.85,.35,{bay:.75,noCornice:!0}),U(r.sub(-8.4,0,7.05,Math.PI),2.2,.85,.35,{bay:.75,noCornice:!0});function B(E,D,P){r.cyl(n.iron,.016,.016,13.6,0,E+P-.15,-9.47,8,0,0,Math.PI/2);for(let ut=-6.4;ut<=6.4;ut+=2.13)r.box(n.iron,.03,.03,.14,ut,E+P-.15,-9.53);const F=-9.45,G=-8.35,j=Math.hypot(G-F,P),at=-Math.atan((G-F)/P);for(const ut of[-.22,.22])r.box(n.oak,.05,j,.08,D+ut,E+P/2,(F+G)/2,at,0,0);const lt=Math.floor(j/.28);for(let ut=1;ut<lt;ut++){const Lt=ut/lt;r.cyl(n.iron,.014,.014,.44,D,E+Lt*P,G+(F-G)*Lt,8,0,0,Math.PI/2)}for(const ut of[-.22,.22])r.cyl(n.iron,.035,.035,.04,D+ut,E+.035,G,10,0,0,Math.PI/2),r.box(n.iron,.02,.14,.02,D+ut,E+P-.08,F-.02);r.solid(.6,1.2,.45,D,E+.6,G-.15)}B(0,-2.6,3.3),B(o,2.2,3.4);function q(E,D,P=.9,F=!0){const G=P,j=.86;E.box(D,G,.3,j,0,.27,0),E.box(D,G-.3,.13,j-.24,0,.48,.06);for(const lt of[-1,1])E.box(D,.16,.36,j-.05,lt*(G/2-.08),.6,.02),E.cyl(D,.095,.095,j-.02,lt*(G/2-.07),.78,.03,12,Math.PI/2,0,0),E.cyl(n.dark,.03,.022,.12,lt*(G/2-.07),.06,j/2-.08,8),E.cyl(n.dark,.03,.022,.12,lt*(G/2-.07),.06,-j/2+.08,8),F&&E.box(D,.1,.45,.3,lt*(G/2-.06),1.05,-j/2+.2);const at=F?1.12:.9;E.box(D,G-.04,at-.4,.2,0,.4+(at-.4)/2,-j/2+.1,-.08,0,0),E.cyl(D,.09,.09,G-.06,0,at,-j/2+.12,12,0,0,Math.PI/2);for(let lt=0;lt<3;lt++)for(let ut=0;ut<Math.round(G/.22);ut++){const Lt=Math.round(G/.22);E.sphere(n.iron,.012,-G/2+.13+(G-.26)*(ut+lt%2*.5)/Lt,.62+lt*.13,-j/2+.215,1,1,.6,6,4)}E.solid(G,.95,j,0,.47,0)}function $(E){E.box(n.oak,.44,.04,.42,0,.46,0);for(const[D,P]of[[-.19,.18],[.19,.18],[-.19,-.18],[.19,-.18]])E.cyl(n.oak,.02,.018,.44,D,.22,P,8);for(const D of[-.19,.19])E.box(n.oak,.035,.5,.035,D,.72,-.19,-.1,0,0);E.box(n.oak,.42,.08,.03,0,.94,-.215,-.1,0,0);for(let D=-1;D<=1;D++)E.box(n.oak,.03,.36,.02,D*.1,.72,-.2,-.1,0,0);E.box(n.oak,.38,.02,.02,0,.12,0),E.box(n.leather2,.36,.03,.34,0,.495,.01),E.solid(.44,.95,.44,0,.47,0)}function Z(E,D,P,F,G=0){E.cyl(n.brass,.07,.08,.025,D,P+.012,F,16),E.cyl(n.brass,.01,.01,.3,D,P+.17,F,8),E.cyl(n.brass,.012,.012,.12,D,P+.32,F,6,0,G,Math.PI/2),E.cyl(n.greenGlass,.1,.1,.3,D,P+.34,F,16,0,G,Math.PI/2,!1,0,Math.PI),E.sphere(n.flame,.03,D,P+.31,F,1.6,.6,1)}function et(E,D,P,F,G=1){E.cyl(n.ceramic,.06*G,.09*G,.25*G,D,P+.125*G,F,16),E.cyl(n.brass,.01,.01,.15*G,D,P+.3*G,F,6),E.cyl(n.shade,.1*G,.17*G,.2*G,D,P+.42*G,F,20,0,0,0,!0)}function Y(E,D,P,F,G,j,at){E.box(n.gilt,D+2*.07,.07,.05,F,G+P/2+.07/2,j),E.box(n.gilt,D+2*.07,.07,.05,F,G-P/2-.07/2,j),E.box(n.gilt,.07,P,.05,F-D/2-.07/2,G,j),E.box(n.gilt,.07,P,.05,F+D/2+.07/2,G,j),E.plane(n.painting,D,P,F,G,j,0,0,0,[at%2*.5,Math.floor(at/2)*.5,.5,.5])}function rt(E,D,P,F,G,j){t.stack(E.m,D,P,F,G,j)}function ft(E,D,P,F,G=.18){E.cyl(n.brass,.045,.06,.02,D,P+.01,F,12),E.cyl(n.brass,.012,.02,.2,D,P+.11,F,8),E.cyl(n.brass,.03,.02,.03,D,P+.22,F,10),E.cyl(n.paper,.016,.016,G,D,P+.235+G/2,F,8),E.sphere(n.flame,.012,D,P+.25+G,F,1,2,1,6,4)}{const E=r.sub(-.5,0,1.9,0);E.box(n.oak,1.25,.06,3.9,0,.75,0),E.box(n.dark,1.05,.13,3.6,0,.655,0);for(const P of[-1.75,0,1.75])for(const F of[-.5,.5])E.cyl(n.dark,.05,.04,.6,F,.32,P,10),E.sphere(n.dark,.06,F,.45,P,1,.8,1,10,6);E.box(n.dark,.06,.06,3.4,0,.14,0),E.solid(1.25,.8,3.9,0,.4,0),Z(E,0,.78,-.95,Math.PI/2),Z(E,0,.78,.95,Math.PI/2),l.push({p:new N(-.5,1.15,1.9),c:16761466,i:5.5,d:9}),rt(E,.35,.78,-1.5,4,.2),rt(E,-.38,.78,1.55,3,-.4),rt(E,.4,.78,.4,2,1.2),E.box(n.leather,.44,.012,.3,-.15,.786,-.25,0,.1,0),E.box(n.paper,.2,.025,.28,-.255,.8,-.26,0,.1,.06),E.box(n.paper,.2,.025,.28,-.055,.8,-.24,0,.1,-.06),E.box(n.paper,.21,.004,.29,.3,.783,.9,0,-.3,0),E.cyl(n.iron,.03,.03,.05,.42,.805,.95,10),E.cyl(n.brass,.002,.002,.18,.4,.86,.95,4,0,0,.4);const D=[[-.88,-1.2,Math.PI/2],[-.92,.05,Math.PI/2+.15],[-.86,1.25,Math.PI/2],[.86,-1.25,-Math.PI/2],[1.15,.1,-Math.PI/2-.4],[.88,1.2,-Math.PI/2]];for(const[P,F,G]of D)$(E.sub(P,0,F,G))}{const E=new Ln(3.4,5.6);E.rotateX(-Math.PI/2),r.geo(n.rug,E,-.5,.008,1.9);const D=new Ln(3.4,5.2);D.rotateX(-Math.PI/2),D.rotateY(Math.PI/2),r.geo(n.rug,D,0,.008,6.8);const P=new Ln(2.2,3.2);P.rotateX(-Math.PI/2),r.geo(n.rug,P,-9.4,.008,4.9)}{const E=r.sub(0,0,9,Math.PI);E.box(n.stone,2.7,.08,.75,0,.04,.37);for(const D of[-1,1])E.box(n.stone,.38,1.28,.38,D*.96,.64,.19);E.box(n.stone,2.3,.36,.4,0,1.46,.2),E.box(n.dark,2.7,.08,.48,0,1.68,.24),E.box(n.plaster,2.3,3,.3,0,3.22,.15),E.box(n.soot,1.56,1.28,.04,0,.64,.02),E.box(n.soot,1.56,.02,.38,0,.09,.19);for(let D=0;D<6;D++)E.box(n.iron,.025,.25,.025,-.4+D*.16,.24,.3);E.box(n.iron,.9,.03,.3,0,.14,.2),E.cyl(n.dark,.06,.07,.75,0,.22,.18,8,0,.1,Math.PI/2),E.cyl(n.dark,.05,.05,.7,.05,.3,.24,8,0,-.3,Math.PI/2),E.box(n.ember,.8,.03,.26,0,.165,.2),E.sphere(n.ember,.12,-.1,.25,.2,2.2,.5,.8,8,6),E.solid(2.7,1.72,.8,0,.86,.4),ft(E,-1.05,1.72,.25),ft(E,1.05,1.72,.25,.14),E.box(n.dark,.32,.36,.14,0,1.9,.37+ct),E.cyl(n.ceramic,.11,.11,.02,0,1.94,.45+ct,20,Math.PI/2,0,0),E.cyl(n.brass,.125,.125,.015,0,1.94,.445+ct,20,Math.PI/2,0,0),E.cyl(n.terracotta,.05,.08,.22,.6,1.83,.22,12),rt(E,-.6,1.72,.24,2,.3),Y(E,1.4,.95,0,3.5,.325+ct,2),E.cyl(n.iron,.012,.012,.8,1.32,.4,.55,6,0,0,.08),E.cyl(n.brass,.025,.025,.06,1.35,.82,.55,8),l.push({p:new N(0,.55,8.35),c:16747068,i:6,d:10,fire:!0})}q(r.sub(0,0,5.7,0),n.leather,2.2,!1),q(r.sub(-2.15,0,7.4,Math.PI/2-.2),n.leather2),q(r.sub(2.15,0,7.4,-Math.PI/2+.25),n.leather);{const E=r.sub(0,0,7.3,.05);E.box(n.oak,1.1,.05,.6,0,.42,0);for(const[P,F]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]])E.box(n.dark,.05,.4,.05,P,.2,F);E.box(n.dark,1,.02,.5,0,.1,0),E.solid(1.1,.45,.6,0,.22,0),rt(E,-.25,.445,0,3,.5),E.cyl(n.ceramic,.04,.03,.07,.25,.48,.05,12),E.torus(n.ceramic,.025,.006,.29,.48,.05,0,0,0,10),E.cyl(n.ceramic,.07,.07,.008,.25,.449,.05,16),rt(E,-.2,.12,0,3,0);const D=r.sub(1.45,0,5.75,0);D.cyl(n.dark,.25,.25,.03,0,.6,0,20),D.cyl(n.dark,.03,.04,.58,0,.3,0,8),D.cyl(n.dark,.18,.2,.03,0,.015,0,16),D.solid(.5,.62,.5,0,.31,0),et(D,0,.615,0,1.1)}{r.box(n.oak,.6,.45,4,-11.19,.225,4.9),r.solid(.62,.45,4,-11.2,.225,4.9),r.box(n.cushion,.56,.1,3.9,-11.2,.5,4.9),r.box(n.cushion2,.16,.42,.5,-11.38,.74,3.25,0,0,-.25),r.box(n.leather2,.16,.38,.46,-11.38,.72,6.5,0,.2,-.3),r.box(n.cushion,.4,.06,.6,-11.1,.58,5.2,0,.4,0),t.stack(r.m,-11.2,.55,4.3,3,.4),r.cyl(n.terracotta,.11,.08,.2,-11.25,.65,6,14);for(let P=0;P<9;P++){const F=P/9*Math.PI*2;r.box(n.plant,.06,.32,.01,-11.25+Math.cos(F)*.06,.88,6+Math.sin(F)*.06,Math.sin(F)*.5,F,Math.cos(F)*.5)}q(r.sub(-9.3,0,3.4,-Math.PI/2+.55),n.leather),q(r.sub(-9.3,0,6.35,-Math.PI/2-.55),n.leather2);const E=r.sub(-9.9,0,4.9,0);E.cyl(n.oak,.3,.3,.035,0,.6,0,24),E.cyl(n.dark,.035,.05,.58,0,.3,0,10);for(let P=0;P<3;P++){const F=P/3*Math.PI*2;E.box(n.dark,.05,.05,.3,Math.cos(F)*.12,.04,Math.sin(F)*.12,0,-F+Math.PI/2,0)}E.solid(.6,.62,.6,0,.31,0),rt(E,-.08,.62,-.08,3,.7),E.cyl(n.ceramic,.045,.035,.06,.14,.65,.1,12),E.cyl(n.ceramic,.075,.075,.008,.14,.62,.1,16);const D=r.sub(-8,0,7,0);D.cyl(n.iron,.16,.18,.03,0,.015,0,16),D.cyl(n.iron,.014,.014,1.5,0,.76,0,8),D.cyl(n.shade,.14,.24,.28,0,1.55,0,20,0,0,0,!0),D.solid(.36,1.6,.36,0,.8,0),l.push({p:new N(-8,1.5,6.9),c:16757866,i:4,d:7}),Y(r.sub(-7.5,0,2.4,0),.5,.4,-.45,2,.03,3),rt(r,-8.6,0,7.15,5,.3)}{const E=r.sub(-5.9,0,-.7,.3);for(let P=0;P<3;P++){const F=P/3*Math.PI*2;E.box(n.dark,.04,.75,.04,Math.cos(F)*.18,.37,Math.sin(F)*.18,Math.sin(F)*.25,0,-Math.cos(F)*.25)}E.torus(n.oak,.3,.03,0,.76,0,Math.PI/2,0,0,32),E.torus(n.brass,.32,.01,0,1,0,0,0,.4,32);const D=new ar(.29,32,20);D.rotateZ(.4),E.geo(n.globe,D,0,1,0),E.solid(.7,1.3,.7,0,.65,0)}{const E=r.sub(5.5,0,-1.22,Math.PI);E.box(n.oak,1.9,1.1,.5,0,.55,.25);for(let D=0;D<8;D++)for(let P=0;P<6;P++){const F=-.82+D*.235,G=.22+P*.15;E.box(n.walnut,.2,.12,.02,F,G,.505),E.box(n.brass,.05,.012,.02,F,G-.02,.52),E.box(n.paper,.05,.025,.005,F,G+.025,.517)}E.box(n.walnut,2,.05,.56,0,1.125,.25),E.solid(1.9,1.15,.5,0,.57,.25),et(E,.65,1.15,.25,.9),rt(E,-.4,1.15,.25,4,.2),r.cyl(n.brass,.008,.008,.75,5.5,o-.95,-4.1,6),r.cyl(n.brass,.04,.04,.05,5.5,o-.6,-4.1,10),r.cyl(n.shade,.1,.22,.2,5.5,o-1.38,-4.1,20,0,0,0,!0),r.sphere(n.flame,.035,5.5,o-1.4,-4.1,1,1,1,8,6),l.push({p:new N(5.5,o-1.5,-4.1),c:16759930,i:3.5,d:7})}{const E=r.sub(-5.6,o,-8.85,0);E.box(n.oak,1.4,.05,.7,0,.76,0);for(const P of[-1,1])E.box(n.dark,.36,.72,.64,P*.5,.37,0);E.box(n.dark,.6,.12,.62,0,.67,0);for(const P of[-1,1])for(let F=0;F<3;F++)E.box(n.walnut,.32,.2,.02,P*.5,.16+F*.22,.33),E.cyl(n.brass,.015,.015,.02,P*.5,.16+F*.22,.345,8,Math.PI/2,0,0);E.solid(1.4,.8,.7,0,.4,0),Z(E,-.4,.785,-.1,0),rt(E,.45,.785,-.1,5,0),E.box(n.paper,.3,.004,.22,.05,.787,.1,0,.2,0),E.cyl(n.iron,.025,.03,.045,-.15,.81,-.15,10),$(E.sub(.05,0,.6,Math.PI+.2)),l.push({p:new N(-5.9,o+1.25,-8.85),c:16761466,i:4.5,d:8}),q(r.sub(6,o,-3.6,-Math.PI/2),n.leather2);const D=r.sub(6.1,o,-2.4,0);D.cyl(n.dark,.22,.22,.03,0,.55,0,18),D.cyl(n.dark,.03,.03,.54,0,.27,0,8),D.cyl(n.dark,.15,.17,.03,0,.015,0,14),D.solid(.44,.58,.44,0,.29,0),rt(D,0,.565,0,3,.4),t.stack(r.m,3.4,o,-9,6,.2),t.stack(r.m,-1.6,0,-8.9,4,.1)}for(const[E,D,P]of[[-.5,6.2,1.9],[-2.3,7,-3.7]]){r.torus(n.iron,.75,.025,E,D,P,Math.PI/2,0,0,40),r.torus(n.iron,.4,.018,E,D-.25,P,Math.PI/2,0,0,28),r.cyl(n.iron,.006,.006,10.5-D,E,(10.5+D)/2,P,4);for(let F=0;F<4;F++){const G=F/4*Math.PI*2+.4;r.cyl(n.iron,.005,.005,1.1,E+Math.cos(G)*.37,D+.45,P+Math.sin(G)*.37,4,Math.sin(G)*.72,0,-Math.cos(G)*.72)}for(let F=0;F<10;F++){const G=F/10*Math.PI*2,j=E+Math.cos(G)*.75,at=P+Math.sin(G)*.75;r.cyl(n.iron,.03,.02,.04,j,D+.03,at,8),r.cyl(n.paper,.014,.014,.14,j,D+.12,at,6),r.sphere(n.flame,.011,j,D+.205,at,1,2,1,6,4)}}Y(r.sub(7,0,0,-Math.PI/2),1.1,.8,4.6,3.1,.03,0),Y(r.sub(7,0,0,-Math.PI/2),.9,1.2,.7,5.3,.03,1),Y(r.sub(-7,0,0,Math.PI/2),.9,.7,2.6,3.2,.03,3),Y(r.sub(-7,0,0,Math.PI/2),.9,.7,-1.4,3.2,.03,1);{const E=r;E.sphere(n.ceramic,.12,-3.6,2.5,-5,.85,1.1,.85,14,10),E.cyl(n.ceramic,.07,.1,.16,-3.6,2.4,-5,12),E.box(n.stone,.2,.08,.2,-3.6,2.36,-5),t.stack(r.m,-1.2,2.325,-5,3,.3),E.cyl(n.terracotta,.12,.09,.26,-1,2.455,-2.4,14),E.sphere(n.plant,.18,-1,2.7,-2.4,1,.7,1,10,6),t.stack(r.m,-3.2,2.325,-2.4,4,1.2),ft(r,-2.4,2.325,-2.4)}const it=(E,D,P)=>{const F=new ns(i,E.m),G=c();if(G<.35)F.box(n.iron,.012,Math.min(.16,E.clear-.02),.11,D-P/2+.01,Math.min(.16,E.clear-.02)/2,-.08),F.box(n.iron,.09,.006,.11,D-P/2+.05,.003,-.08);else if(G<.55&&E.clear>.22)F.cyl(c()<.5?n.ceramic:n.terracotta,.035,.05,.15,D,.075,-.1,12);else if(G<.75){const j=Math.min(P-.02,.14);F.box(c()<.5?n.walnut:n.leather2,j,Math.min(.08,E.clear-.02),.12,D,.04,-.1)}else G<.85&&E.clear>.2&&F.box(n.gilt,.1,.13,.012,D,.065,-.12,-.15,0,0)};for(const E of a)t.fillSlot(E,it);return i.finish=i.finish.bind(i),{B:i,lights:l,windows:u,slots:a}}const Rl=[[.36,.08,.06],[.42,.12,.08],[.12,.2,.12],[.1,.16,.28],[.18,.1,.06],[.48,.32,.16],[.06,.06,.06],[.55,.42,.2],[.16,.26,.26],[.3,.1,.16],[.62,.55,.42],[.26,.24,.2],[.4,.24,.1],[.2,.12,.2],[.7,.62,.48]],Cl=new rn,Pl=new Be,sm=new N,om=new N;class am{constructor(t){this.rand=t,this.mats=[],this.cols=[],this.vars=[]}color(t,e=0){const i=this.rand,r=t||Rl[Math.floor(i()*Rl.length)],s=.8+i()*.4,o=e||(i()<.12?.2+i()*.25:0);return[r[0]*s*(1-o)+.55*o,r[1]*s*(1-o)+.48*o,r[2]*s*(1-o)+.38*o]}add(t,e,i,r,s,o,a,l,u,c,h=0){Pl.set(0,h,s),Cl.setFromEuler(Pl);const f=new $t().compose(sm.set(e,i,r),Cl,om.set(o,a,l));f.premultiply(t),this.mats.push(f),this.cols.push(u),this.vars.push(c)}fillSlot(t,e){const i=this.rand,{m:r,len:s,clear:o,d:a}=t;let l=.01+i()*.04,u=.25;for(;l<s-.03;){const c=i(),h=s-l;if(c<.07&&h>.34&&o>.16){const x=2+Math.floor(i()*4);let A=0,w=0;const R=.2+i()*.1;for(let I=0;I<x;I++){const y=.022+i()*.04;if(A+y>o-.02)break;const M=Math.min(R+(i()-.5)*.06,h-.03),L=Math.min(a-.02,.15+i()*.08);this.add(r,l+M/2+(i()-.5)*.02,A+y/2,-L/2-.01-i()*.02,Math.PI/2,y,M,L,this.color(),Math.floor(i()*8),(i()-.5)*.12),A+=y,w=Math.max(w,M)}l+=w+.02+i()*.03;continue}if(c<.13){const x=.06+i()*.16;e&&x>.1&&h>.2&&e(t,l+x/2,x),l+=x;continue}const f=i()<.4,p=f?4+Math.floor(i()*10):3+Math.floor(i()*12),g=this.color(),_=Math.floor(i()*8),m=Math.min(o-.02,.2+i()*.16),d=.03+i()*.03,v=Math.min(a-.02,.15+i()*.08),b=i()<.2?.08:0;for(let x=0;x<p&&l<s-.03;x++){let A,w,R,I,y;if(f?(A=d*(.85+i()*.3),w=m,R=v,I=i()<.08?this.color():g,y=_):(A=.016+i()*.05+(i()<.1?.03:0),w=Math.min(o-.015,.17+i()*.17+b),R=Math.min(a-.02,.12+i()*.13),I=this.color(),y=Math.floor(i()*8)),l+A>s-.01)break;const M=.006+i()*(i()<.15?.06:.018);this.add(r,l+A/2,w/2,-R/2-M,0,A,w,R,I,y,(i()-.5)*.03),l+=A+.0015,u=w}if(i()<.35&&s-l>.12){const x=.12+i()*.3,A=.02+i()*.03,w=Math.min(u*.95,o-.03,.18+i()*.12),R=Math.min(a-.02,.14+i()*.08),I=l+A/2*Math.cos(x)+w/2*Math.sin(x),y=A/2*Math.sin(x)+w/2*Math.cos(x);l+A*Math.cos(x)+w*Math.sin(x)<s-.01&&(this.add(r,I,y,-R/2-.01,x,A,w,R,this.color(),Math.floor(i()*8)),l+=A*Math.cos(x)+w*Math.sin(x))}l+=.004+i()*.04}}stack(t,e,i,r,s,o=0){const a=this.rand;let l=i;for(let u=0;u<s;u++){const c=.025+a()*.04,h=.2+a()*.12,f=.15+a()*.08;this.add(t,e+(a()-.5)*.03,l+c/2,r+(a()-.5)*.03,Math.PI/2,c,h,f,this.color(),Math.floor(a()*8),o+(a()-.5)*.4),l+=c}return l}build(t){const e=new xn(1,1,1),i=e.attributes.uv,r=new Float32Array(i.count),s=new Float32Array(i.count);for(let f=0;f<6;f++)for(let p=0;p<4;p++){const g=f*4+p;let _=i.getX(g),m=i.getY(g);if(f===4)_=_*.0625,r[g]=1;else if(f===0||f===1)_=.76+_*.23;else if(f===2||f===3){const d=_;_=.51+m*.23,m=d,s[g]=1}else _=.51+_*.23,s[g]=1;i.setXY(g,_,m)}e.setAttribute("aSpine",new Re(r,1)),e.setAttribute("aPage",new Re(s,1));const o=this.mats.length,a=new Float32Array(o);for(let f=0;f<o;f++)a[f]=this.vars[f];e.setAttribute("aVar",new Lo(a,1));const l=new W0({map:t});l.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
`)};const u=e.index.array;e.setIndex(Array.from(u.slice(0,30)));const c=new jo(e,l,o),h=new It;for(let f=0;f<o;f++){c.setMatrixAt(f,this.mats[f]);const p=this.cols[f];h.setRGB(p[0],p[1],p[2]),c.setColorAt(f,h)}return c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,c.castShadow=!0,c.receiveShadow=!0,c.computeBoundingSphere(),c}}const Ll=.0026,Il=Math.PI/2-.02;function lm({canvas:n,overlay:t,menuButton:e,player:i,camera:r,releaseMovement:s,toast:o,isInputBlocked:a=()=>!1,setMenuPaused:l=()=>{}}){const u=t.querySelector("#look-sensitivity"),c=t.querySelector("#look-sensitivity-value"),h=t.querySelector("[data-resume-look]");let f=Ll,p=!1,g=!1,_=!1,m=!1,d=!1,v=document.hasFocus(),b=!1,x=!1,A=0,w=0,R=0,I=!1,y=!1;const M=[];function L(it,E,D,P){it.addEventListener(E,D,P),M.push(()=>it.removeEventListener(E,D,P))}function U(){return!y&&!I&&v&&!t.open&&!a()}function B(){n.focus({preventScroll:!0}),v=document.visibilityState==="visible"&&document.hasFocus()}function q(it,E){!Number.isFinite(it)||!Number.isFinite(E)||(i.yaw-=it*f,i.pitch=Math.max(-Il,Math.min(Il,i.pitch-E*f)),r.rotation.set(i.pitch,i.yaw,0))}function $(){++R,p=_=m=g=d=!1,s(),document.pointerLockElement===n&&document.exitPointerLock()}function Z(){t.open&&t.close(),l(!1),!y&&!I&&B()}function et(){if(!(y||I||t.open||a()))return $(),t.showModal(),l(!0),h.focus({preventScroll:!0}),!0}function Y(){_=d=!1,U()&&(b=!0,o("Hold left mouse to look. Esc opens controls."))}async function rt(){if(p||_||!U())return;if(!n.requestPointerLock){Y();return}const it=++R;_=d=!0,m=!1;try{const E=n.requestPointerLock({unadjustedMovement:!0});if(!E||typeof E.then!="function"){m=!0;return}try{await E}catch(D){if(D.name!=="NotSupportedError"||it!==R||!U())throw D;await n.requestPointerLock()}}catch{it===R&&U()&&Y()}finally{it===R&&!m&&(_=!1)}}L(e,"click",et),L(h,"click",()=>{Z(),rt()}),L(t,"cancel",it=>{it.preventDefault(),Z()}),L(t,"close",()=>{l(!1),!y&&!I&&B()}),L(n,"mousedown",it=>{it.button!==0||y||I||t.open||a()||(B(),!(p||!U())&&(x=!b,g=!0,A=it.clientX,w=it.clientY,rt()))}),L(n,"click",it=>{x&&(x=!1,it.stopImmediatePropagation())},!0),L(n,"keydown",it=>{it.code==="Enter"&&!it.repeat&&U()&&(rt(),it.preventDefault())}),L(globalThis,"mouseup",()=>{g=!1}),L(globalThis,"mousemove",it=>{if(!(!U()||document.visibilityState!=="visible")){if(p)q(it.movementX,it.movementY);else if(g){if(!(it.buttons&1)){g=!1;return}q(it.clientX-A,it.clientY-w),A=it.clientX,w=it.clientY}}}),L(document,"pointerlockchange",()=>{const it=p;p=document.pointerLockElement===n,_=m=g=!1,p&&(!U()||!d)&&(document.exitPointerLock(),p=!1),p?(b=!1,B()):(d=!1,it&&s())}),L(document,"pointerlockerror",()=>{m&&_&&(m=!1,Y())});function ft(){v=!1,b=!1,$()}return L(globalThis,"blur",ft),L(globalThis,"focus",()=>{v=document.visibilityState==="visible"}),L(document,"visibilitychange",()=>{document.visibilityState!=="visible"?ft():v=document.hasFocus()}),L(globalThis,"keydown",it=>{it.code==="Escape"&&!it.repeat&&!t.open&&et()&&it.preventDefault()}),L(u,"input",()=>{const it=Math.max(40,Math.min(220,Number(u.value)||100));f=Ll*it/100,c.textContent=`${it}%`}),{get menuOpen(){return t.open},pause(){I=!0,ft()},resume(){y||(I=!1,v=document.visibilityState==="visible"&&document.hasFocus())},dispose(){if(!y){y=!0,I=!0,ft();for(const it of M)it();t.open&&t.close()}}}}const xc=Object.freeze({welcome:{label:"Welcome book",cover:["A place","for you"],color:3362112,kicker:"Welcome · first shelf",title:"A place to leave good things",paragraphs:["Come in, take a seat, and read something that catches your attention. I’ve left a short find on the table and connected the writing desk to the private project workspace.","Start with Shapes & sound, the rust-colored book nearby. When you want to work on personal notes or decisions, visit the writing desk upstairs.","This first shelf is small. The room can change as better buildings arrive; the things worth keeping can move with it."],links:[],signature:"Left for you — Jippity"},drums:{label:"Shapes & sound",cover:["Shapes","& sound"],color:7356719,kicker:"An interesting find · mathematics",title:"Different shapes, the same spectrum",paragraphs:["Two mathematically different ideal drumheads can have exactly the same set of resonant frequencies, including their multiplicities. Gordon, Webb and Wolpert constructed distinct planar shapes with this property: the frequency list alone does not uniquely reveal the boundary.","There is a stronger surprise. Buser, Conway, Doyle and Semmler gave a homophonic pair with a special point on each drum. Corresponding normalized vibration modes take matching values there. In the ideal point-strike model, striking those points excites every frequency with matching strength.","The assumptions matter: ideal membranes with matching tension and density, fixed boundaries, and the mathematical wave model. This does not mean arbitrary real rooms, instruments or recordings sound identical. Strike location, damping, material, acoustics and how you listen still matter in practice.","That is the part I find interesting: a complete frequency list can be precise and still leave the shape ambiguous."],links:[{label:"Gordon, Webb & Wolpert · One cannot hear the shape of a drum (1992)",href:"https://arxiv.org/pdf/math/9207215"},{label:"Buser, Conway, Doyle & Semmler · Some planar isospectral domains (1994)",href:"https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf"}],signature:"Selected by Jippity"},desk:{label:"Project Library",kicker:"The writing desk",title:"Project Library",paragraphs:["Personal notes and decisions belong in the signed-in Project Library. Open that workspace when you’re ready to write or pick up a project.","This desk is just the entrance. The link opens your private workspace in a new tab; sign in there if asked."],links:[{label:"Open private Project Library",href:"https://jippity-project-room.pazneria.chatgpt.site"}],signature:"Jippity"}}),vc=Object.freeze([{id:"table-welcome",contentId:"welcome",position:[-.35,.808,3.53],yaw:.12,kind:"book",bounds:{x0:-.53,x1:-.17,y0:.783,y1:.84,z0:3.32,z1:3.74}},{id:"table-drums",contentId:"drums",position:[-.87,.808,2.35],yaw:-.18,kind:"book",bounds:{x0:-1.06,x1:-.68,y0:.783,y1:.84,z0:2.13,z1:2.57}},{id:"gallery-writing-desk",contentId:"desk",kind:"existing-paper",position:[-5.55,4.999,-8.75],bounds:{x0:-5.76,x1:-5.34,y0:4.98,y1:5.025,z0:-8.94,z1:-8.56}}]),cm=2.2;function um(n,t,e,i=()=>document.createElement("canvas")){const r=t.filter(w=>w.kind==="book"),s=i();s.width=256*r.length,s.height=384;const o=s.getContext("2d"),a=[],l=[],u=new N(0,1,0),c=[],h=new $t,f=new rn,p=new N,g=new xn(1,1,1),_=new Pi({roughness:.85,color:16777215}),m=new jo(g,_,r.length),d=new N;for(let w=0;w<r.length;w++){const R=r[w],I=e[R.contentId],y="#"+I.color.toString(16).padStart(6,"0");o.fillStyle=y,o.fillRect(w*256,0,256,384),o.strokeStyle="#c7a96c",o.lineWidth=2,o.strokeRect(w*256+20,24,216,336),o.fillStyle="#f0dfbe",o.textAlign="center",o.font="30px Georgia",I.cover.forEach((M,L)=>o.fillText(M,w*256+128,154+L*42)),o.font="15px Georgia",o.fillText("JIPPITY",w*256+128,304),f.setFromAxisAngle(u,R.yaw),h.compose(d.fromArray(R.position),f,p.set(.26,.038,.34)),m.setMatrixAt(w,h),m.setColorAt(w,new It(I.color));for(const[M,L,U,B]of[[-.13,.17,0,0],[.13,.17,1,0],[.13,-.17,1,1],[-.13,.17,0,0],[.13,-.17,1,1],[-.13,-.17,0,1]])d.set(M,.021,L).applyQuaternion(f).add(new N().fromArray(R.position)),a.push(d.x,d.y,d.z),c.push(0,1,0),l.push((w+U)/r.length,B)}m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0);const v=new me;v.setAttribute("position",new Yt(a,3)),v.setAttribute("normal",new Yt(c,3)),v.setAttribute("uv",new Yt(l,2));const b=new ts(s);b.colorSpace=be;const x=new Pi({map:b,roughness:.9}),A=new ne(v,x);return m.name="Jippity reading books",A.name="Jippity book covers",n.add(m,A),{objects:[m,A],budget:{books:r.length,drawCalls:2,triangles:r.length*14,texturePixels:s.width*s.height},dispose(){n.remove(m,A),m.dispose(),g.dispose(),_.dispose(),v.dispose(),x.dispose(),b.dispose()}}}const hm=["x","y","z"];function Dl(n,t,e,i=1/0){let r=0,s=i;if(!Number.isFinite(Math.hypot(t.x,t.y,t.z))||Math.hypot(t.x,t.y,t.z)<1e-10)return null;for(const o of hm){const a=n[o],l=t[o],u=e[o+"0"],c=e[o+"1"];if(!Number.isFinite(a)||!Number.isFinite(l)||!Number.isFinite(u)||!Number.isFinite(c))return null;if(Math.abs(l)<1e-10){if(a<u||a>c)return null}else{const h=(u-a)/l,f=(c-a)/l;if(r=Math.max(r,Math.min(h,f)),s=Math.min(s,Math.max(h,f)),r>s)return null}}return s>=0?r:null}function Mc(n,t,e,i,r=2.2){let s=null,o=r;for(const a of e){const l=Dl(n,t,a.bounds,o);l!==null&&l<=o&&(s=a,o=l)}if(!s)return null;for(const a of i){const l=Dl(n,t,a,o);if(l!==null&&l+.025<o)return null}return s}function ra(n){var t;return!!((t=n==null?void 0:n.closest)!=null&&t.call(n,'input, textarea, select, button, a, [contenteditable], [role="textbox"]'))}const qi="jippityLibraryReader";function fm({document:n,window:t,canvas:e,dialog:i,hint:r,content:s,getTarget:o,canInteract:a,look:l,setPaused:u,releaseMovement:c,returnFocus:h}){const f=i.querySelector("#reader-title"),p=i.querySelector("#reader-kicker"),g=i.querySelector("#reader-pages"),_=i.querySelector("#reader-links"),m=i.querySelector("#reader-signature"),d=[];let v=null,b=!1,x=!1,A=null;function w(U,B,q){U.addEventListener(B,q),d.push(()=>U.removeEventListener(B,q))}function R(U){const B=s[U];p.textContent=B.kicker,f.textContent=B.title,g.replaceChildren(),_.replaceChildren();for(const q of B.paragraphs){const $=n.createElement("p");$.textContent=q,g.append($)}for(const q of B.links){const $=n.createElement("a");$.textContent=q.label,$.href=q.href,$.target="_blank",$.rel="noopener noreferrer",$.referrerPolicy="no-referrer",_.append($)}_.hidden=!B.links.length,m.textContent=B.signature}function I(U,B=!0){if(b||x||!Object.hasOwn(s,U))return!1;const q=v!==null;if(v=U,c(),l.pause(),u(!0),r.hidden=!0,R(U),n.body.classList.add("reading-open"),i.open||i.showModal(),i.scrollTop=0,f.focus({preventScroll:!0}),B){const $={...t.history.state,[qi]:U};q?t.history.replaceState($,"",t.location.href):t.history.pushState($,"",t.location.href)}return!0}function y(){v!==null&&(v=null,i.open&&i.close(),n.body.classList.remove("reading-open"),r.hidden=!0,c(),l.resume(),u(!1),h==null||h.focus({preventScroll:!0}))}function M(){var B;if(v===null)return;const U=((B=t.history.state)==null?void 0:B[qi])===v;y(),U&&(x=!0,t.history.back())}function L(){if(v!==null||b||x||!a())return!1;const U=o();return U?I(U.contentId):!1}return w(t,"keydown",U=>{U.code!=="KeyE"||U.repeat||v!==null||ra(U.target)||L()&&U.preventDefault()}),w(e,"mousedown",U=>{A=U.button===0?{x:U.clientX,y:U.clientY,dragged:!1}:null}),w(t,"mousemove",U=>{A&&Math.hypot(U.clientX-A.x,U.clientY-A.y)>5&&(A.dragged=!0)}),w(e,"click",U=>{const B=A==null?void 0:A.dragged;A=null,!B&&(U.button===void 0||U.button===0)&&L()}),w(r,"click",L),w(i,"cancel",U=>{U.preventDefault(),M()}),w(i.querySelector("#reader-close"),"click",M),w(i.querySelector("#reader-back"),"click",M),w(i,"close",M),w(t,"popstate",U=>{var q;x=!1;const B=(q=U.state)==null?void 0:q[qi];B&&Object.hasOwn(s,B)?I(B,!1):y()}),{get isOpen(){return v!==null},openNearby:L,close:M,updateHint(){const U=!b&&v===null&&a()?o():null;r.hidden=!U,U&&(r.textContent=`E — ${s[U.contentId].label}`)},dispose(){var U;if(!b){b=!0;for(const B of d)B();if(i.open&&i.close(),v=null,r.hidden=!0,n.body.classList.remove("reading-open"),(U=t.history.state)!=null&&U[qi]){const B={...t.history.state};delete B[qi],t.history.replaceState(B,"",t.location.href)}c(),l.pause(),u(!0)}}}}function dm({tick:n,request:t,cancel:e,now:i}){const r=new Set;let s=null,o=!1,a=null;function l(){!o&&!r.size&&s===null&&(s=t(u))}function u(c){if(s=null,o||r.size)return;const h=a===null?0:Math.max(0,(c-a)/1e3);a=c,n(c,h),l()}return{start(){a=i(),l()},setPaused(c,h){h?r.add(c):r.delete(c),r.size&&s!==null&&(e(s),s=null),a=null,l()},get paused(){return o||r.size>0},dispose(){o=!0,s!==null&&e(s),s=null}}}const Sc=Object.freeze({href:"https://pazneria.github.io/",plaque:"EXIT",plaqueSubtitle:"HOME",label:"Leave for Jordan's homepage",prompt:"E · Leave the library",shortcut:"Alt+X",instructions:"Leave through the oak door beside the stair foot, or use the exit link in controls. Alt+X returns to Jordan’s homepage."}),Uo=Object.freeze({id:"library-home-exit",position:Object.freeze([6.8963,0,7.75]),rotation:-Math.PI/2,width:1.3,height:2.42,bounds:Object.freeze({x0:6.7,x1:6.93,y0:.08,y1:2.58,z0:6.94,z1:8.56}),reach:2.2});function pm(n,t,e,i,r=()=>document.createElement("canvas")){const s=new xi;s.name="Library exit";const o=new _c(()=>.37),a=o.frame(...e.position,e.rotation);a.m.multiply(new $t().makeScale(1,1,.7));const{width:l,height:u}=e,{oak:c,dark:h,brass:f}=t;a.box(h,l,u-.04,.055,0,u/2,.028);for(const d of[-l/2+.065,l/2-.065])a.box(c,.13,u,.045,d,u/2,.082);for(const[d,v]of[[.11,.22],[.84,.13],[u-.09,.18]])a.box(c,l-.26,v,.045,0,d,.082);a.box(c,.07,1.33,.045,0,1.575,.082);for(const[d,v,b,x]of[[-.26,1.575,.42,1.28],[.26,1.575,.42,1.28],[0,.49,.96,.51]]){a.box(c,b,x,.018,d,v,.063);for(const A of[-1,1])a.box(h,.018,x+.04,.014,d+A*(b/2+.009),v,.081),a.box(h,b+.04,.018,.014,d,v+A*(x/2+.009),.081)}for(const d of[-1,1])a.box(h,.13,u+.02,.09,d*(l/2+.085),(u+.02)/2,.067),a.box(c,.1,u+.02,.035,d*(l/2+.085),(u+.02)/2,.129),a.box(c,.16,.24,.13,d*(l/2+.085),.12,.083);a.box(h,l+.3,.18,.09,0,u+.09,.067),a.box(c,l+.33,.1,.035,0,u+.11,.129),a.box(c,l+.37,.045,.15,0,u+.2025,.08),a.box(f,.045,.19,.014,-.47,1.03,.115),a.cyl(f,.018,.018,.025,-.47,1.06,.14,8,Math.PI/2),a.box(f,.13,.025,.025,-.425,1.06,.158);for(const d of[.32,1.2,2.1])a.cyl(f,.018,.018,.11,.637,d,.117,8);const p=r();p.width=512,p.height=256;const g=p.getContext("2d");g.fillStyle="#30271b",g.fillRect(0,0,512,256),g.strokeStyle="#b99a60",g.lineWidth=4,g.strokeRect(12,12,488,232),g.fillStyle="#efdab0",g.textAlign="center",g.textBaseline="middle",g.font="60px Georgia, serif",g.fillText(i.plaque,256,102),g.font="25px Georgia, serif",g.fillText(i.plaqueSubtitle,256,172);const _=new ts(p);_.colorSpace=be;const m=new Pi({map:_,roughness:.62,emissive:15586976,emissiveMap:_,emissiveIntensity:.18});a.box(f,.45,.23,.012,0,2.51,.172),a.plane(m,.426,.206,0,2.51,.18),o.finish(s);for(const d of s.children)d.castShadow=!1,d.receiveShadow=!0;return n.add(s),{group:s,materials:[m],textures:[_]}}function mm({document:n,window:t,canvas:e,controls:i,readerFooter:r,content:s,getTarget:o,canInteract:a,beforeLeave:l}){let u=!1,c=!1,h=null;const f=[],p=[],g=e.getAttribute("aria-describedby");function _(A,w,R,I){A.addEventListener(w,R,I),f.push(()=>A.removeEventListener(w,R,I))}function m(A){if(A==null||A.preventDefault(),A==null||A.stopPropagation(),c||u)return!1;c=!0;try{l()}finally{t.addEventListener("pageshow",w=>{w.persisted&&t.location.reload()},{once:!0}),t.location.assign(s.href)}return!0}function d(A,w){const R=n.createElement("a");return R.href=s.href,R.textContent=s.label,R.className=`library-exit-link ${w}`,R.setAttribute("aria-keyshortcuts",s.shortcut),_(R,"click",m),A.append(R),p.push(R),R}const v=d(n.body,"library-exit-keyboard");i&&d(i,"library-exit-controls"),r&&d(r,"library-exit-reader");const b=n.createElement("span");b.id="library-exit-instructions",b.className="library-exit-instructions",b.textContent=s.instructions,n.body.append(b),p.push(b),e.setAttribute("aria-describedby",[g,b.id].filter(Boolean).join(" "));const x=n.createElement("button");return x.id="exit-hint",x.type="button",x.hidden=!0,x.textContent=s.prompt,x.setAttribute("aria-label",s.label),n.body.append(x),p.push(x),_(x,"click",A=>{a()&&o()&&m(A)}),_(t,"keydown",A=>{var w,R;if(!(A.repeat||A.defaultPrevented||A.isComposing)){if(A.code==="KeyX"&&A.altKey&&!A.ctrlKey&&!A.metaKey&&!((R=(w=A.target)==null?void 0:w.closest)!=null&&R.call(w,'input, textarea, select, [contenteditable], [role="textbox"]'))){m(A);return}A.code==="KeyE"&&!A.altKey&&!A.ctrlKey&&!A.metaKey&&!ra(A.target)&&a()&&o()&&m(A)}}),_(e,"mousedown",A=>{h=A.button===0&&a()&&o()?{x:A.clientX,y:A.clientY,travel:0}:null}),_(t,"mousemove",A=>{h&&(h.travel+=n.pointerLockElement===e?Math.hypot(A.movementX||0,A.movementY||0):Math.hypot(A.clientX-h.x,A.clientY-h.y),h.x=A.clientX,h.y=A.clientY)}),_(e,"click",A=>{const w=h&&h.travel<=5;h=null,w&&A.button===0&&a()&&o()&&m(A)}),_(t,"blur",()=>{h=null,x.hidden=!0}),_(n,"pointerlockchange",()=>{h=null,x.hidden=!0}),{leave:m,keyboardLink:v,updateHint(){x.hidden=u||!a()||!o()},dispose(){if(!u){u=!0,h=null;for(const A of f)A();for(const A of p)A.remove();g===null?e.removeAttribute("aria-describedby"):e.setAttribute("aria-describedby",g)}}}}function gm({scene:n,renderer:t,environmentTarget:e,materials:i=[],extraMaterials:r=[]}){const s=new Set,o=new Set([...i,...r]),a=new Set,l=new Set,u=new Set,c=h=>{h!=null&&h.isTexture?a.add(h):Array.isArray(h)&&h.forEach(c)};n.traverse(h=>{var f,p;h.geometry&&s.add(h.geometry);for(const g of[].concat(h.material||[]))o.add(g);h.isInstancedMesh&&u.add(h);for(const g of[(f=h.shadow)==null?void 0:f.map,(p=h.shadow)==null?void 0:p.mapPass])g&&l.add(g)}),e&&l.add(e),c(n.environment),c(n.background);for(const h of o){for(const f of Object.values(h))c(f);for(const f of Object.values(h.uniforms||{}))c(f.value)}for(const h of l)for(const f of h.textures||[h.texture])a.delete(f);n.environment=null,n.overrideMaterial=null;for(const h of u)h.dispose();for(const h of s)h.dispose();for(const h of o)h.dispose();for(const h of a)h.dispose();for(const h of l)h.dispose();t.dispose(),n.clear()}const _m=20261008;function sa(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function gi(n,t){let e=-.7;const i=Math.max(0,-n-13);return e-=70*(1-Math.exp(-i/140)),e+=(Math.sin(n*.011+t*.017)*10+Math.sin(t*.029+1.3)*Math.cos(n*.013)*12)*Math.min(1,i/120),n<-420&&(e+=Math.min(140,(-n-420)*.22)*(.75+.18*Math.sin(t*.009+.5)+.07*Math.sin(t*.043))),n>8&&(e+=(n-8)*.35),Math.abs(t)>30&&n>-60&&(e+=(Math.abs(t)-30)*.12),e}function xm(n,t,e=0){return n+e>-13&&n-e<9&&t+e>-12&&t-e<11}function vm(n,t,e=0){const i=10+Math.max(0,-n-13)*.15;return n<-13&&n>-125&&Math.abs(t-3)<i+e}function Mm(){const n=sa(_m),t=[],e=[[-22,-18,12,"oak"],[-34,-29,15,"oak"],[-51,-24,14,"oak"],[-25,26,13,"oak"],[-39,38,16,"oak"],[-56,32,14,"oak"],[-20,44,12,"birch"],[12,43,13,"birch"],[-27,63,16,"birch"],[-61,-43,15,"birch"]];for(const[l,u,c,h]of e)t.push({x:l,z:u,height:c,species:h,tier:"near",yaw:n()*Math.PI*2,width:.9+n()*.2});[[-91,-65,34,29,20],[-119,67,32,35,20],[-202,-92,68,49,32],[-211,96,74,49,32],[-376,-190,110,85,54],[-403,155,125,93,60],[-615,-95,99,100,44],[-643,235,100,85,36],[-244,3,44,22,22]].forEach(([l,u,c,h,f],p)=>{for(let g=0;g<f;g++){const _=n()*Math.PI*2,m=Math.sqrt(n()),d=l+Math.cos(_)*m*c,v=u+Math.sin(_)*m*h,b=8+n()*9;vm(d,v,b*.34)||t.push({x:d,z:v,height:b,species:"woodland",tier:p<4||p===8?"middle":"far",grove:p,yaw:n()*Math.PI*2,width:.8+n()*.4})}});const r=[],s=[],o=[];[[-16.8,-5.6,3,6.2,80],[-19.2,13.8,4.8,4.7,72],[-31,18.4,7,4.3,64],[-1.5,18.4,8,4.1,64]].forEach(([l,u,c,h,f],p)=>{for(let g=0;g<f;g++){const _=n()*Math.PI*2,m=Math.sqrt(n()),d=l+Math.cos(_)*m*c,v=u+Math.sin(_)*m*h;xm(d,v,.5)||r.push({x:d,z:v,height:.24+n()*.36,width:.6+n()*.6,yaw:n()*Math.PI*2,bed:p})}});for(const[l,u,c]of[[-15.1,-10.5,.8],[-17.3,-12,1.1],[-20.2,-13.8,1.3],[-16.5,13.2,.9],[-18.1,15.2,1.1],[-21.2,17,1.4],[-29.2,22.2,1.3],[-33,24.4,1.7],[-37,26.1,1.5],[-8.5,19.8,1.1],[-5.4,21.8,1.2],[5.7,21,1]])s.push({x:l,z:u,height:c*.6,width:c,yaw:n()*Math.PI*2});for(const[l,u,c]of[[-14.2,-8,.65],[-16.4,-9.1,1.1],[-18.6,-10.6,.8],[-16,13.4,.7],[-20,15.3,1.3],[-21.7,16,.85],[-29,23,1.8],[-32.2,24,1.1],[-34,25,1.5],[-47,-17,2],[-50,-18.1,1.1],[-43,27,1.8]])o.push({x:l,z:u,height:c*.38,width:c,yaw:n()*Math.PI*2});return{trees:t,grass:r,shrubs:s,stones:o}}function Ul(n,t=null){return new He({name:t?"exterior-ground":"exterior-vegetation-stone",vertexColors:!0,defines:t?{EXTERIOR_GROUND:1}:{},uniforms:{sunDirection:{value:n.clone().normalize()},hazeColor:{value:new It(.84,.61,.48)},...t?{map:{value:t}}:{}},vertexShader:`
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
      }`})}function Sm(){const t=new Uint8Array(65536),e=sa(407);for(let r=0;r<128;r++)for(let s=0;s<128;s++){const o=207+e()*38+7*Math.sin(s*.83+Math.sin(r*.24)),a=(r*128+s)*4;t[a]=o,t[a+1]=o+3,t[a+2]=o-4,t[a+3]=255}const i=new pc(t,128,128);return i.name="hillside-ground-grain-128",i.wrapS=i.wrapT=tr,i.magFilter=Ke,i.minFilter=pn,i.generateMipmaps=!0,i.anisotropy=4,i.needsUpdate=!0,i}function Nl(n,t=[]){const e=[...t];for(const[i,r,s]of n)for(let o=0;o<=s;o++)e.push(i+(r-i)*o/s);return[...new Set(e)].sort((i,r)=>i-r)}function ym(){const n=Nl([[-1200,-420,20],[-420,-100,20],[-100,-35,12],[-35,20,32],[20,100,10],[100,600,12]],[-13,8]),t=Nl([[-900,-180,12],[-180,-45,10],[-45,45,36],[45,180,10],[180,900,12]],[-30,30]),e=[],i=[],r=[],s=[],o=[],a=new It(.25,.31,.115),l=new It(.37,.32,.16),u=new It(.23,.295,.12),c=new It,h=new N;for(const p of t)for(const g of n){e.push(g,gi(g,p),p),h.set(gi(g-.5,p)-gi(g+.5,p),1,gi(g,p-.5)-gi(g,p+.5)).normalize(),i.push(h.x,h.y,h.z);const _=.5+.25*Math.sin(g*.039+Math.sin(p*.034)*1.5)+.18*Math.sin(p*.071+g*.018);c.copy(a).lerp(l,_);const m=Math.exp(-(((g+12)/19)**2)-(p/30)**2);c.lerp(u,m*.6),r.push(c.r,c.g,c.b),s.push(g/4,p/4)}for(let p=0;p<t.length-1;p++)for(let g=0;g<n.length-1;g++){const _=p*n.length+g,m=_+1,d=_+n.length,v=d+1;o.push(_,d,m,m,d,v)}const f=new me;return f.setAttribute("position",new Yt(e,3)),f.setAttribute("normal",new Yt(i,3)),f.setAttribute("color",new Yt(r,3)),f.setAttribute("uv",new Yt(s,2)),f.setIndex(o),f.computeBoundingBox(),f.computeBoundingSphere(),f}function oa(n,t,e=.1){if(n.index){const a=n;n=n.toNonIndexed(),a.dispose()}const i=n.attributes.position,r=new Float32Array(i.count*3),s=new It(t),o=new It;for(let a=0;a<i.count;a++){const l=1+e*Math.sin(i.getX(a)*27+i.getY(a)*19+i.getZ(a)*23);o.copy(s).multiplyScalar(l),r.set([o.r,o.g,o.b],a*3)}return n.setAttribute("color",new Re(r,3)),n.deleteAttribute("uv"),n}function is(n){const t=ia(n,!1);for(const e of n)e.dispose();return t.computeBoundingBox(),t.computeBoundingSphere(),t}function nr(n,t,e,i,r,s=6){const o=new N(...n),a=new N(...t),l=a.clone().sub(o),u=new es(i,e,l.length(),s,1,!0);return u.applyQuaternion(new rn().setFromUnitVectors(new N(0,1,0),l.normalize())),u.translate(...o.add(a).multiplyScalar(.5).toArray()),oa(u,r,.14)}function yi(n,t,e,i,r,s,o,a=1){const l=new Qo(1,a),u=l.attributes.position;for(let c=0;c<u.count;c++){const h=1+.1*Math.sin(u.getX(c)*9+u.getY(c)*7+u.getZ(c)*11);u.setXYZ(c,u.getX(c)*h,u.getY(c)*h,u.getZ(c)*h)}return l.scale(i,r,s),l.translate(n,t,e),oa(l,o,.08)}function bm(){const n=[nr([0,0,0],[.018,.63,-.018],.035,.017,7430474,8)];return[[-.2,.65,.04,.19,.18,.2],[.18,.69,.02,.22,.2,.18],[-.03,.69,-.19,.2,.21,.18],[.03,.77,.19,.21,.2,.18],[-.11,.86,-.02,.19,.21,.21],[.1,.91,.03,.17,.19,.17],[.01,.78,-.05,.25,.21,.22]].forEach(([e,i,r,s,o,a],l)=>{n.push(nr([.01,.34+l*.025,0],[e,i-.035,r],.014,.005,7889994)),n.push(yi(e,i,r,s,o,a,[7635531,8556627,6781763,9147481][l%4]))}),is(n)}function Em(){const n=[nr([0,0,0],[-.022,.9,.01],.019,.006,12695706,7)];for(let t=0;t<5;t++){const e=t*2.4,i=.57+t*.08,r=Math.sin(e)*.08,s=Math.cos(e)*.07;n.push(nr([0,i-.2,0],[r,i,s],.007,.002,10392951,5)),n.push(yi(r,i,s,.13,.19,.12,t%2?10329700:8098386))}return is(n)}function Fl(n=!1){const t=n?6:8,e=n?[[0,.34],[.24,.49],[.29,.7],[.18,.93],[0,1.04]]:[[0,.32],[.24,.45],[.3,.64],[.26,.83],[.15,1],[0,1.06]],i=new Zo(e.map(([s,o])=>new Gt(s,o)),t),r=i.attributes.position;for(let s=0;s<r.count;s++){const o=1+.12*Math.sin(r.getX(s)*17+r.getZ(s)*11+r.getY(s)*13);r.setXYZ(s,r.getX(s)*o,r.getY(s),r.getZ(s)*o)}return is([oa(i,7899984),nr([0,0,0],[0,.52,0],.027,.016,7890768,n?4:5)])}function Tm(){return is([yi(-.35,.38,.03,.55,.6,.51,6782280,0),yi(.3,.47,-.04,.62,.7,.54,8491607,0),yi(.02,.5,.22,.53,.66,.49,8886107,0)])}function wm(){return yi(0,.2,0,.6,.75,.5,11182474,0)}function Am(){const n=[],t=[],e=new It(8227656),i=new It(11510376);for(let s=0;s<4;s++){const o=s*2.4,a=Math.cos(o),l=Math.sin(o),u=.65+s%3*.17,c=.065,h=[[-l*c,0,a*c],[l*c,0,-a*c],[a*.16-l*c*.5,u*.6,l*.16+a*c*.5],[a*.3,u,l*.3]];for(const f of[0,1,2,1,3,2,2,1,0,2,3,1]){n.push(...h[f]);const p=e.clone().lerp(i,h[f][1]/u);t.push(p.r,p.g,p.b)}}const r=new me;return r.setAttribute("position",new Yt(n,3)),r.setAttribute("color",new Yt(t,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),r}function Rm(n){const t=new He({name:"exterior-sunset",side:Ee,depthWrite:!1,uniforms:{sunDir:{value:n.clone()}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 zen = vec3(0.16,0.27,0.55); vec3 hor = vec3(1.25,0.74,0.45); vec3 below = vec3(0.55,0.42,0.36);
        vec3 col = mix(hor, zen, pow(clamp(h,0.0,1.0), 0.5));
        col = mix(col, below, 1.0 - smoothstep(-0.2,0.0,h));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.55,0.25)*pow(s,5.0)*0.7 + vec3(1.0,0.75,0.45)*pow(s,90.0)*2.5 + smoothstep(0.9993,0.9996,s)*vec3(18.0,12.0,7.0);
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new ne(new ar(1200,32,16),t);return e.name="exterior-sky",e.frustumCulled=!1,e.renderOrder=-1,e.matrixAutoUpdate=!1,e}function Yi(n,t,e,i,r){const s=new jo(e,i,t.length);s.name=n;const o=new $t,a=new rn,l=new N,u=new N,c=new N(0,1,0),h=new It,f=sa(r);return t.forEach((p,g)=>{const{x:_,z:m,height:d,width:v,yaw:b}=p;l.set(_,gi(_,m)-.045,m),a.setFromAxisAngle(c,b);const x=p.species?d*v:v;u.set(x,d,x),o.compose(l,a,u),s.setMatrixAt(g,o);const A=f();h.setRGB(.88+A*.23,.92+A*.14,.88+A*.11),s.setColorAt(g,h)}),s.instanceMatrix.setUsage(qr),s.instanceMatrix.needsUpdate=!0,s.instanceColor.setUsage(qr),s.instanceColor.needsUpdate=!0,s.matrixAutoUpdate=!1,s.computeBoundingBox(),s.computeBoundingSphere(),s}function Cm(n){const t=new Set,e=new Set,i=new Set,r=[];let s=0,o=0,a=0;n.traverse(c=>{var _,m;if(!c.isMesh)return;const h=c.geometry,f=c.material,p=c.isInstancedMesh?c.count:1,g=(h.index?h.index.count:h.attributes.position.count)/3;if(o+=g*p,a+=c.isInstancedMesh?p:0,!t.has(h)){for(const d of Object.values(h.attributes))s+=d.array.byteLength;s+=((_=h.index)==null?void 0:_.array.byteLength)||0,t.add(h)}c.instanceMatrix&&(s+=c.instanceMatrix.array.byteLength),c.instanceColor&&(s+=c.instanceColor.array.byteLength),e.add(f);for(const d of Object.values(f.uniforms||{}))(m=d.value)!=null&&m.isTexture&&i.add(d.value);r.push({name:c.name,instances:p,templateTriangles:g,submittedTriangles:g*p})});let l=0,u=0;for(const c of i){const{width:h,height:f,data:p}=c.image;l+=p.byteLength;let g=h,_=f;do{if(u+=g*_*4,!c.generateMipmaps||g===1&&_===1)break;g=Math.max(1,g>>1),_=Math.max(1,_>>1)}while(!0)}return{triangles:o,drawCallsUpperBound:r.length,instances:a,geometries:t.size,materials:e.size,textures:i.size,bufferBytes:s,textureBytes:l,textureBytesWithMipmaps:u,batches:r}}function Pm({sunDirection:n}){const t=new xi;t.name="hillside-exterior",t.matrixAutoUpdate=!1;const e=Mm(),i=Ul(n),r=Sm(),s=new ne(ym(),Ul(n,r));s.name="exterior-continuous-terrain",s.matrixAutoUpdate=!1,t.add(Rm(n),s);const o=bm(),a=Em(),l=Fl(),u=Fl(!0);for(const f of["oak","birch"]){const p=e.trees.filter(g=>g.species===f);t.add(Yi(`exterior-near-${f}`,p,f==="oak"?o:a,i,f==="oak"?16:23))}for(const[f,p]of[["middle",[0,2]],["middle",[1,3,8]],["far",[4,6]],["far",[5,7]]]){const g=e.trees.filter(_=>p.includes(_.grove));t.add(Yi(`exterior-${f}-groves-${p.join("-")}`,g,f==="middle"?l:u,i,70+p[0]))}const c=Am();for(let f=0;f<4;f++){const p=e.grass.filter(g=>g.bed===f);t.add(Yi(`exterior-meadow-bed-${f}`,p,c,i,30+f))}t.add(Yi("exterior-low-shrubs",e.shrubs,Tm(),i,17)),t.add(Yi("exterior-sandstone-outcrops",e.stones,wm(),i,12)),t.traverse(f=>{f.castShadow=!1,f.receiveShadow=!1}),t.updateMatrixWorld(!0);const h=Cm(t);return t.userData.exteriorBudget=h,{group:t,layout:e,budget:h,dispose(){t.removeFromParent();const f=new Set,p=new Set;t.traverse(g=>{g.geometry&&f.add(g.geometry),g.material&&p.add(g.material),g.isInstancedMesh&&g.dispose()}),f.forEach(g=>g.dispose()),p.forEach(g=>g.dispose()),r.dispose()}}}const ir=document.getElementById("c"),he=new k0({canvas:ir,antialias:!0,powerPreference:"high-performance"}),yc=Math.min(window.devicePixelRatio||1,1);let Rn=yc;he.setPixelRatio(Rn);he.setSize(window.innerWidth,window.innerHeight);he.toneMapping=Ol;he.toneMappingExposure=1.05;he.outputColorSpace=be;he.shadowMap.enabled=!0;he.shadowMap.type=Bo;he.shadowMap.autoUpdate=!1;const ce=new dc;ce.background=new It(9075306);const Le=new Ne(70,window.innerWidth/window.innerHeight,.05,2500);Le.rotation.order="YXZ";const bc=new Co(he),Ec=new $0,Tc=bc.fromScene(Ec,.04);ce.environment=Tc.texture;Ec.dispose();bc.dispose();ce.environmentIntensity=.22;const Lm=Zn(20261006),aa=im(),Zi=new am(Zn(77)),lr=rm(aa,Zi,Lm);lr.B.finish(ce);const wc=Zi.build(Q0(31));ce.add(wc);um(ce,vc,xc);const Im=pm(ce,aa,Uo,Sc),cr=lr.B.solids;Zi.mats.length=Zi.cols.length=Zi.vars.length=0;const la=new N(-.9,.4,.14).normalize(),nn=new K0(16757611,8);nn.target.position.set(-2,3,-1);nn.position.copy(nn.target.position).addScaledVector(la,60);nn.castShadow=!0;nn.shadow.mapSize.set(4096,4096);const Jn=nn.shadow.camera;Jn.left=-17;Jn.right=17;Jn.top=15;Jn.bottom=-15;Jn.near=20;Jn.far=100;Jn.updateProjectionMatrix();nn.shadow.bias=-4e-4;nn.shadow.normalBias=.025;ce.add(nn,nn.target);const Dm=new X0(13227775,6964264,.42);ce.add(Dm);const Ac=new na(16754792,11,24,1.2);Ac.position.set(3,3.6,-.8);ce.add(Ac);const Rc=[];for(const n of lr.lights){const t=new na(n.c,n.i,n.d,2);t.position.copy(n.p),t.userData=n,ce.add(t),Rc.push(t)}const Um=Pm({sunDirection:la});ce.add(Um.group);const No=la.clone().negate();{const n=[],t=[];for(const o of lr.windows.slice(0,4))for(let a=0;a<4;a++){const l=o[a],u=o[(a+1)%4],c=l.clone().addScaledVector(No,12),h=u.clone().addScaledVector(No,12);for(const[f,p,g]of[[l,0,0],[u,0,1],[h,1,1],[l,0,0],[h,1,1],[c,1,0]])n.push(f.x,f.y,f.z),t.push(p,g)}const i=new me;i.setAttribute("position",new Yt(n,3)),i.setAttribute("uv",new Yt(t,2));const r=new He({transparent:!0,depthWrite:!1,blending:Xr,side:Fe,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float t; varying vec2 vUv; varying vec3 vW;
      void main(){ float along = vUv.x; float across = vUv.y;
        float a = pow(1.0-along, 1.6) * smoothstep(0.0,0.04,along) * smoothstep(0.0,0.25,across) * smoothstep(1.0,0.75,across);
        float n = 0.75 + 0.25*sin(vW.x*1.7 + vW.y*2.3 + t*0.3) * sin(vW.z*1.3 - t*0.2);
        float fadeFloor = smoothstep(0.0, 0.6, vW.y);
        gl_FragColor = vec4(vec3(1.0,0.72,0.42)*a*n*0.11*fadeFloor, 1.0); }`}),s=new ne(i,r);s.frustumCulled=!1,s.renderOrder=5,ce.add(s),window.__shafts=r}let $r;{const n=Zn(9),t=[],e=[];for(const s of lr.windows)for(let o=0;o<420;o++){const a=n(),l=n(),u=s[0].clone().lerp(s[1],a).lerp(s[3].clone().lerp(s[2],a),l).addScaledVector(No,.5+n()*11);u.y<.1||u.y>10||u.x>6.9||u.z<-9.9||u.z>8.9||(t.push(u.x,u.y,u.z),e.push(n()*100))}const i=new me;i.setAttribute("position",new Yt(t,3)),i.setAttribute("phase",new Yt(e,1)),$r=new He({transparent:!0,depthWrite:!1,blending:Xr,uniforms:{t:{value:0},map:{value:nm()},scale:{value:window.innerHeight*.5}},vertexShader:`uniform float t; uniform float scale; attribute float phase; varying float vA;
      void main(){ vec3 p = position + vec3(sin(t*0.11+phase)*0.25, sin(t*0.07+phase*1.3)*0.3, cos(t*0.09+phase*0.7)*0.25);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        gl_PointSize = clamp(0.018*scale/-mv.z, 0.0, 6.0); vA = 0.55+0.45*sin(t*0.5+phase); }`,fragmentShader:"uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0,0.8,0.55)*a*vA*0.8, 1.0); }"});const r=new V0(i,$r);r.frustumCulled=!1,ce.add(r)}const vt={pos:new N,vy:0,yaw:0,pitch:0,eye:1.62,eyeCur:1.62,smoothY:0,vel:new N,radius:.28,step:.42,height:1.75},Cc=[{p:[3.4,0,4.3],yaw:.78,pitch:.1,name:"Entrance by the hearth"},{p:[-2,0,-3.7],yaw:1.2,pitch:-.05,name:"Lower shelves, between the stacks"},{p:[-8.2,0,4.9],yaw:1.5,pitch:-.05,name:"Window reading alcove"},{p:[5.6,0,8],yaw:0,pitch:.18,name:"Foot of the staircase"},{p:[1.2,Do.GY,-7.6],yaw:Math.PI-.3,pitch:-.32,name:"Gallery overlook"}];function rr(n){const t=Cc[n];vt.pos.set(t.p[0],t.p[1],t.p[2]),vt.yaw=t.yaw,vt.pitch=t.pitch,vt.vy=0,vt.vel.set(0,0,0),vt.smoothY=vt.pos.y,ca(t.name)}function Nm(n,t,e){let i=-1/0;const r=vt.radius*.7;for(const s of cr)n+r<s.x0||n-r>s.x1||t+r<s.z0||t-r>s.z1||s.y1<=e+vt.step&&s.y1>i&&(i=s.y1);return i}function ks(n,t,e,i){const r=vt.radius;for(const s of cr)if(!(n+r<=s.x0||n-r>=s.x1||t+r<=s.z0||t-r>=s.z1)&&s.y0<e+i&&s.y1>e+vt.step)return!0;return!1}const ye=new Set;let Ji=!1,en=null,qt=null,Qi=null,Li=!1;addEventListener("keydown",n=>{if(!(Li||en!=null&&en.isOpen||qt!=null&&qt.paused||ra(n.target))&&(ye.add(n.code),!n.repeat)){if(n.code==="KeyR"&&rr(0),n.code.startsWith("Digit")){const t=+n.code.slice(5)-1;t>=0&&t<Cc.length&&rr(t)}n.code==="KeyC"&&(Ji=!Ji),n.code==="KeyF"&&Lc.classList.toggle("show"),n.code==="KeyH"&&Fm.classList.toggle("hide"),n.code==="KeyP"&&(Rn=Rn>.8?Math.max(.6,Rn-.25):yc,he.setPixelRatio(Rn),ha(),ca(`Render scale ${Math.round(Rn*100)}%`)),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault()}});addEventListener("keyup",n=>ye.delete(n.code));addEventListener("blur",()=>ye.clear());const Pc=document.getElementById("overlay"),Fm=document.getElementById("help"),Lc=document.getElementById("stats"),jr=document.getElementById("toast");let Wr=0;function ca(n){jr.textContent=n,jr.classList.add("show"),Wr=2.2}function rs(){ye.clear(),vt.vel.set(0,0,0)}const Kn=lm({canvas:ir,overlay:Pc,menuButton:document.getElementById("controls-toggle"),player:vt,camera:Le,toast:ca,releaseMovement:rs,isInputBlocked:()=>!!(Li||en!=null&&en.isOpen||qt!=null&&qt.paused),setMenuPaused:n=>qt==null?void 0:qt.setPaused("controls",n)}),Ic=new N;en=fm({document,window,canvas:ir,content:xc,look:Kn,releaseMovement:rs,dialog:document.getElementById("reader"),hint:document.getElementById("interaction-hint"),returnFocus:ir,canInteract:()=>!Li&&!Kn.menuOpen&&!(qt!=null&&qt.paused)&&document.hasFocus(),getTarget:()=>Mc(Le.position,Le.getWorldDirection(Ic),vc,cr,cm),setPaused:n=>qt==null?void 0:qt.setPaused("reading",n)});Qi=mm({document,window,canvas:ir,content:Sc,controls:Pc.querySelector(".card"),readerFooter:document.querySelector(".reader-footer"),canInteract:()=>!Li&&!en.isOpen&&!Kn.menuOpen&&!(qt!=null&&qt.paused)&&document.hasFocus(),getTarget:()=>Mc(Le.position,Le.getWorldDirection(Ic),[Uo],cr,Uo.reach),beforeLeave:Fc});const Om=new N;function ua(n){const t=(ye.has("KeyW")||ye.has("ArrowUp")?1:0)-(ye.has("KeyS")||ye.has("ArrowDown")?1:0),e=(ye.has("KeyD")||ye.has("ArrowRight")?1:0)-(ye.has("KeyA")||ye.has("ArrowLeft")?1:0),i=(ye.has("ShiftLeft")||ye.has("ShiftRight")?4.6:2.5)*(Ji?.55:1),r=Math.sin(vt.yaw),s=Math.cos(vt.yaw),o=-r*t+s*e,a=-s*t-r*e,l=Math.hypot(o,a)||1,u=Om.set(o/l*i*(t||e?1:0),0,a/l*i*(t||e?1:0)),c=1-Math.exp(-n*12);vt.vel.lerp(u,c);const h=Ji?1.15:vt.height,f=vt.pos.x+vt.vel.x*n,p=vt.pos.z+vt.vel.z*n;ks(f,p,vt.pos.y,h)?ks(f,vt.pos.z,vt.pos.y,h)?ks(vt.pos.x,p,vt.pos.y,h)?vt.vel.multiplyScalar(.2):(vt.pos.z=p,vt.vel.x*=.5):(vt.pos.x=f,vt.vel.z*=.5):(vt.pos.x=f,vt.pos.z=p);const g=Nm(vt.pos.x,vt.pos.z,vt.pos.y);g>=vt.pos.y-vt.step&&g>-1/0&&vt.vy<=0?(vt.pos.y=g,vt.vy=0):(vt.vy-=9.8*n,vt.pos.y+=vt.vy*n,g>-1/0&&vt.pos.y<g&&(vt.pos.y=g,vt.vy=0)),vt.pos.y<-10&&rr(0),vt.smoothY+=(vt.pos.y-vt.smoothY)*(1-Math.exp(-n*14)),vt.eyeCur+=((Ji?1:vt.eye)-vt.eyeCur)*(1-Math.exp(-n*10)),Le.position.set(vt.pos.x,vt.smoothY+vt.eyeCur,vt.pos.z),Le.rotation.set(vt.pitch,vt.yaw,0)}function ha(){Le.aspect=window.innerWidth/window.innerHeight,Le.updateProjectionMatrix(),he.setSize(window.innerWidth,window.innerHeight),$r.uniforms.scale.value=window.innerHeight*Rn*.5}addEventListener("resize",ha);ha();const Dc=new Ri({colorWrite:!1}),Fo=[];ce.traverse(n=>{n.material&&(n.material.transparent||n.material.isShaderMaterial||n.isPoints)&&Fo.push(n)});he.autoClear=!1;let Uc=!1;function fa(){if(he.clear(),Uc){for(const n of Fo)n.visible=!1;ce.overrideMaterial=Dc,he.render(ce,Le),ce.overrideMaterial=null;for(const n of Fo)n.visible=!0}he.render(ce,Le)}const Or=[];let Hs=0,Gs=0,Ki=0;rr(0);ua(0);jr.classList.remove("show");he.compile(ce,Le);ce.traverse(n=>{const t=n.material;if(t){for(const e of["map","bumpMap"])t[e]&&he.initTexture(t[e]);t.uniforms&&t.uniforms.map&&he.initTexture(t.uniforms.map.value)}});he.shadowMap.needsUpdate=!0;function Bm(n,t){const e=Math.min(t,.05);Ki+=e,ua(e),Gs+=e,Gs>=.125&&(Gs=0,en.updateHint(),Qi.updateHint());for(const i of Rc)i.userData.fire&&(i.intensity=i.userData.i*(.82+.12*Math.sin(Ki*9.1)+.08*Math.sin(Ki*23.7+1.3)));if(window.__shafts.uniforms.t.value=Ki,$r.uniforms.t.value=Ki,fa(),t>0&&t<.25&&document.visibilityState==="visible"&&Or.push(t*1e3),Or.length>240&&Or.shift(),Hs+=t,Hs>.5){Hs=0;const i=[...Or].sort((a,l)=>a-l),r=i.reduce((a,l)=>a+l,0)/i.length,s=i[Math.floor(i.length*.99)-1]||r,o=he.info.render;Lc.textContent=`${(1e3/r).toFixed(0)} fps  avg ${r.toFixed(1)} ms  p99 ${s.toFixed(1)} ms
calls ${o.calls}  tris ${(o.triangles/1e3).toFixed(0)}k  scale ${Math.round(Rn*100)}%
pos ${vt.pos.x.toFixed(1)} ${vt.pos.y.toFixed(2)} ${vt.pos.z.toFixed(1)}`}Wr>0&&(Wr-=e,Wr<=0&&jr.classList.remove("show"))}qt=dm({tick:Bm,request:n=>window.requestAnimationFrame(n),cancel:n=>window.cancelAnimationFrame(n),now:()=>performance.now()});const Nc=[];function ur(n,t,e){n.addEventListener(t,e),Nc.push(()=>n.removeEventListener(t,e))}function Fc(){if(!Li){Li=!0,rs(),Kn.pause(),qt==null||qt.setPaused("exit",!0),Qi==null||Qi.dispose(),en.dispose(),Kn.dispose(),qt==null||qt.dispose();for(const n of Nc)n();gm({scene:ce,renderer:he,environmentTarget:Tc,materials:Object.values(aa),extraMaterials:[Dc,...Im.materials]}),delete window.__shafts,delete window.__lib}}ur(window,"blur",()=>{rs(),qt.setPaused("focus",!0)});ur(window,"focus",()=>qt.setPaused("focus",!1));ur(document,"visibilitychange",()=>qt.setPaused("visibility",document.visibilityState!=="visible"));ur(window,"pagehide",n=>{Kn.pause(),qt.setPaused("page",!0),n.persisted||Fc()});ur(window,"pageshow",()=>{Kn.resume(),qt.setPaused("page",!1),qt.setPaused("visibility",document.visibilityState!=="visible"),qt.setPaused("focus",!document.hasFocus())});fa();qt.setPaused("visibility",document.visibilityState!=="visible");qt.setPaused("focus",!document.hasFocus());qt.start();document.getElementById("loading").classList.add("hide");window.__lib={P:vt,setView:rr,solids:cr,renderer:he,scene:ce,camera:Le,books:wc,drawFrame:fa,setPrepass:n=>Uc=n,sim:(n,t)=>{n.forEach(e=>ye.add(e));for(let e=0;e<t;e+=1/60)ua(1/60);return n.forEach(e=>ye.delete(e)),vt.pos.toArray().map(e=>+e.toFixed(2))}};
