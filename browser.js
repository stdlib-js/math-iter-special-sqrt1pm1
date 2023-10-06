// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,o,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(o=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function F(r){var t,e,n,i;for(e=[],i=0,n=U.exec(r);n;)(t=r.slice(i,U.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),i=U.lastIndex,n=U.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function I(r){return"string"==typeof r}function k(r){var t,e,n;if(!I(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=F(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return x.apply(null,e)}var N,V=Object.prototype,P=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,G=V.__lookupGetter__,L=V.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(G.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,t,e.get),a&&C&&C.call(r,t,e.set),r};var B=N;function R(r,t,e){B(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var W=/./;function M(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return Z&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function Y(r,t){return null!=r&&q.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",J=H()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[D],t=Y(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[D]=e:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=H();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return M(r)||tr(r)}function nr(){return new Function("return this;")()}R(er,"isPrimitive",M),R(er,"isObject",tr);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!M(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;R(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function yr(r){return null!==r&&"object"==typeof r}function dr(r){var t,e,n,i;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=sr.exec(n.toString()))return t[1]}return yr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}R(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!pr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(yr));var gr="function"==typeof W||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function br(r){return"function"===gr(r)}function vr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&br(r.next)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString,jr=H();function Ar(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function _r(r){return hr(r)||Ar(r)}R(_r,"isPrimitive",hr),R(_r,"isObject",Ar);var Er,Sr="function"==typeof z&&"symbol"==typeof z("foo")&&Y(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null,Or=Object,xr=Object.getPrototypeOf;Er=br(Object.getPrototypeOf)?xr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ur=Er,Tr=Object.prototype;function Fr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(t=function(r){return null==r?null:(r=Or(r),Ur(r))}(r),!t||!Y(r,"constructor")&&Y(t,"constructor")&&br(t.constructor)&&"[object Function]"===J(t.constructor)&&Y(t,"isPrototypeOf")&&br(t.isPrototypeOf)&&(t===Tr||function(r){var t;for(t in r)if(!Y(r,t))return!1;return!0}(r)))}function Ir(r,t){return Fr(t)?(Y(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function kr(r,t,e){var n,i,o,a;if(!vr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!br(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(o=Ir(n,e)))throw o;return R(i={},"next",u),R(i,"return",c),Sr&&br(r[Sr])&&R(i,Sr,f),i;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:hr(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return kr(r[Sr](),t,n)}}function Nr(r){return r!=r}var Vr,Pr="function"==typeof Uint32Array,$r="function"==typeof Uint32Array?Uint32Array:null,Cr="function"==typeof Uint32Array?Uint32Array:void 0;Vr=function(){var r,t,e;if("function"!=typeof $r)return!1;try{t=new $r(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Pr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Gr,Lr=Vr,Br="function"==typeof Float64Array,Rr="function"==typeof Float64Array?Float64Array:null,Wr="function"==typeof Float64Array?Float64Array:void 0;Gr=function(){var r,t,e;if("function"!=typeof Rr)return!1;try{t=new Rr([1,3.14,-3.14,NaN]),e=t,r=(Br&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Mr,Zr=Gr,Hr="function"==typeof Uint8Array,Xr="function"==typeof Uint8Array?Uint8Array:null,qr="function"==typeof Uint8Array?Uint8Array:void 0;Mr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr(t=[1,3.14,-3.14,256,257]),e=t,r=(Hr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var Yr,zr=Mr,Dr="function"==typeof Uint16Array,Jr="function"==typeof Uint16Array?Uint16Array:null,Kr="function"==typeof Uint16Array?Uint16Array:void 0;Yr=function(){var r,t,e;if("function"!=typeof Jr)return!1;try{t=new Jr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Dr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr,rt={uint16:Yr,uint8:zr};(Qr=new rt.uint16(1))[0]=4660;var tt=52===new rt.uint8(Qr.buffer)[0],et=!0===tt?1:0,nt=new Zr(1),it=new Lr(nt.buffer);function ot(r){return nt[0]=r,it[et]}var at,ut,ct=!0===tt?1:0,ft=new Zr(1),lt=new Lr(ft.buffer);function st(r,t){return ft[0]=r,lt[ct]=t>>>0,ft[0]}!0===tt?(at=1,ut=0):(at=0,ut=1);var pt={HIGH:at,LOW:ut},yt=new Zr(1),dt=new Lr(yt.buffer),gt=pt.HIGH,bt=pt.LOW,vt=Number.POSITIVE_INFINITY,ht=wr.NEGATIVE_INFINITY,wt=1023,mt=.6931471803691238,jt=1.9082149292705877e-10,At=1.4426950408889634;function _t(r){var t,e,n,i,o,a,u,c,f,l,s,p,y,d,g;if(r===vt||Nr(r))return r;if(r===ht)return-1;if(0===r)return r;if(r<0?(n=!0,c=-r):(n=!1,c=r),c>=38.816242111356935){if(n)return-1;if(c>=709.782712893384)return vt}if(a=0|ot(c),c>.34657359027997264)c<1.0397207708399179?n?(i=r+mt,o=-jt,y=-1):(i=r-mt,o=jt,y=1):(y=n?At*r-.5:At*r+.5,i=r-(s=y|=0)*mt,o=s*jt),l=i-(r=i-o)-o;else{if(a<1016070144)return r;y=0}return u=1+(f=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((u-(s=3-u*t))/(6-r*s)),0===y?r-(r*p-f):(d=wt+y<<20,g=0,dt[gt]=d,dt[bt]=g,e=yt[0],p=r*(p-l)-l,p-=f,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(c=1-(p-r),1024===y?c=st(c,i=ot(c)+(y<<20)|0):c*=e,c-1):(s=1,y<20?c=(s=st(s,i=1072693248-(2097152>>y)|0))-(p-r):(c=r-(p+(s=st(s,i=wt-y<<20|0))),c+=1),c*=e))}var Et=.6931471803691238,St=1.9082149292705877e-10,Ot=Math.sqrt;function xt(r){return Nr(r)?NaN:function(r){return Math.abs(r)}(r)>.75?Ot(1+r)-1:_t(function(r){var t,e,n,i,o,a,u,c,f,l;if(r<-1||Nr(r))return NaN;if(-1===r)return ht;if(r===vt)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<.41421356237309503){if(n<1.862645149230957e-9)return n<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,i=r,e=1)}return 0!==l&&(n<9007199254740992?(o=(l=((e=ot(f=1+r))>>20)-wt)>0?1-(f-r):r-(f-1),o/=f):(l=((e=ot(f=r))>>20)-wt,o=0),(e&=1048575)<434334?f=st(f,1072693248|e):(l+=1,f=st(f,1071644672|e),e=1048576-e>>2),i=f-1),t=.5*i*i,0===e?0===i?l*Et+(o+=l*St):l*Et-((c=t*(1-.6666666666666666*i))-(l*St+o)-i):(c=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(t-a*(t+c)):l*Et-(t-(a*(t+c)+(l*St+o))-i))}(r)/2)}return function(r){return kr(r,xt)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSqrt1pm1=t();
//# sourceMappingURL=browser.js.map