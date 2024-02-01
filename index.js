// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSqrt1pm1=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,i,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function F(r){var t,e,n,o;for(e=[],o=0,n=U.exec(r);n;)(t=r.slice(o,U.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),o=U.lastIndex,n=U.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function I(r){return"string"==typeof r}function k(r){var t,e,n;if(!I(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=F(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return x.apply(null,e)}var N,V=Object.prototype,P=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,G=V.__lookupGetter__,L=V.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(G.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,t,e.get),a&&C&&C.call(r,t,e.set),r};var B=N;function R(r,t,e){B(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var W=/./;function M(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return Z&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function Y(r,t){return null!=r&&q.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=H()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[D],t=Y(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[D]=e:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=H();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return M(r)||tr(r)}function nr(){return new Function("return this;")()}R(er,"isPrimitive",M),R(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!M(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;R(sr,"REGEXP",pr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function vr(r){return null!==r&&"object"==typeof r}function dr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=pr.exec(n.toString()))return t[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(vr));var gr="function"==typeof W||"object"==typeof lr||"function"==typeof fr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?dr(r).toLowerCase():t};function br(r){return"function"===gr(r)}function hr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&br(r.next)}function wr(r){return"number"==typeof r}var mr=Number,jr=mr.prototype.toString;var Ar=H();function _r(r){return"object"==typeof r&&(r instanceof mr||(Ar?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return wr(r)||_r(r)}R(Er,"isPrimitive",wr),R(Er,"isObject",_r);var Sr="function"==typeof z&&"symbol"==typeof z("foo")&&Y(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var Or,xr=Object,Ur=Object.getPrototypeOf;Or=br(Object.getPrototypeOf)?Ur:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Tr=Or;var Fr=Object.prototype;function Ir(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=xr(r),Tr(r))}(r),!t||!Y(r,"constructor")&&Y(t,"constructor")&&br(t.constructor)&&"[object Function]"===J(t.constructor)&&Y(t,"isPrototypeOf")&&br(t.isPrototypeOf)&&(t===Fr||function(r){var t;for(t in r)if(!Y(r,t))return!1;return!0}(r)))}function kr(r,t){return Ir(t)?(Y(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Nr(r,t,e){var n,o,i,a;if(!hr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!br(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=kr(n,e)))throw i;return R(o={},"next",u),R(o,"return",c),Sr&&br(r[Sr])&&R(o,Sr,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:wr(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Nr(r[Sr](),t,n)}}function Vr(r){return r!=r}var Pr="function"==typeof Uint32Array;var $r="function"==typeof Uint32Array?Uint32Array:null;var Cr,Gr="function"==typeof Uint32Array?Uint32Array:void 0;Cr=function(){var r,t,e;if("function"!=typeof $r)return!1;try{t=new $r(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Pr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr=Cr,Br="function"==typeof Float64Array;var Rr="function"==typeof Float64Array?Float64Array:null;var Wr,Mr="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,t,e;if("function"!=typeof Rr)return!1;try{t=new Rr([1,3.14,-3.14,NaN]),e=t,r=(Br&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Zr=Wr,Hr="function"==typeof Uint8Array;var Xr="function"==typeof Uint8Array?Uint8Array:null;var qr,Yr="function"==typeof Uint8Array?Uint8Array:void 0;qr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr(t=[1,3.14,-3.14,256,257]),e=t,r=(Hr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr=qr,Dr="function"==typeof Uint16Array;var Jr="function"==typeof Uint16Array?Uint16Array:null;var Kr,Qr="function"==typeof Uint16Array?Uint16Array:void 0;Kr=function(){var r,t,e;if("function"!=typeof Jr)return!1;try{t=new Jr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Dr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var rt,tt={uint16:Kr,uint8:zr};(rt=new tt.uint16(1))[0]=4660;var et=52===new tt.uint8(rt.buffer)[0],nt=!0===et?1:0,ot=new Zr(1),it=new Lr(ot.buffer);function at(r){return ot[0]=r,it[nt]}var ut,ct,ft=!0===et?1:0,lt=new Zr(1),st=new Lr(lt.buffer);function pt(r,t){return lt[0]=r,st[ft]=t>>>0,lt[0]}!0===et?(ut=1,ct=0):(ut=0,ct=1);var yt={HIGH:ut,LOW:ct},vt=new Zr(1),dt=new Lr(vt.buffer),gt=yt.HIGH,bt=yt.LOW;var ht=Number.POSITIVE_INFINITY,wt=mr.NEGATIVE_INFINITY,mt=1023;var jt=.6931471803691238,At=1.9082149292705877e-10,_t=1.4426950408889634;function Et(r){var t,e,n,o,i,a,u,c,f,l,s,p,y,v,d;if(r===ht||Vr(r))return r;if(r===wt)return-1;if(0===r)return r;if(r<0?(n=!0,c=-r):(n=!1,c=r),c>=38.816242111356935){if(n)return-1;if(c>=709.782712893384)return ht}if(a=0|at(c),c>.34657359027997264)c<1.0397207708399179?n?(o=r+jt,i=-At,y=-1):(o=r-jt,i=At,y=1):(y=n?_t*r-.5:_t*r+.5,o=r-(s=y|=0)*jt,i=s*At),l=o-(r=o-i)-i;else{if(a<1016070144)return r;y=0}return u=1+(f=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((u-(s=3-u*t))/(6-r*s)),0===y?r-(r*p-f):(v=mt+y<<20,d=0,dt[gt]=v,dt[bt]=d,e=vt[0],p=r*(p-l)-l,p-=f,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(c=1-(p-r),1024===y?c=pt(c,o=at(c)+(y<<20)|0):c*=e,c-1):(s=1,y<20?c=(s=pt(s,o=1072693248-(2097152>>y)|0))-(p-r):(c=r-(p+(s=pt(s,o=mt-y<<20|0))),c+=1),c*=e))}var St=.6931471803691238,Ot=1.9082149292705877e-10;var xt=Math.sqrt;function Ut(r){return Vr(r)?NaN:function(r){return Math.abs(r)}(r)>.75?xt(1+r)-1:Et(function(r){var t,e,n,o,i,a,u,c,f,l;if(r<-1||Vr(r))return NaN;if(-1===r)return wt;if(r===ht)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<.41421356237309503){if(n<1.862645149230957e-9)return n<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,e=1)}return 0!==l&&(n<9007199254740992?(i=(l=((e=at(f=1+r))>>20)-mt)>0?1-(f-r):r-(f-1),i/=f):(l=((e=at(f=r))>>20)-mt,i=0),(e&=1048575)<434334?f=pt(f,1072693248|e):(l+=1,f=pt(f,1071644672|e),e=1048576-e>>2),o=f-1),t=.5*o*o,0===e?0===o?l*St+(i+=l*Ot):l*St-((c=t*(1-.6666666666666666*o))-(l*Ot+i)-o):(c=(u=(a=o/(2+o))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?o-(t-a*(t+c)):l*St-(t-(a*(t+c)+(l*Ot+i))-o))}(r)/2)}return function(r){return Nr(r,Ut)}}));
//# sourceMappingURL=index.js.map
