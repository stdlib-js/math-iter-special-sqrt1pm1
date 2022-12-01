// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterSqrt1pm1=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t};var c=r;function l(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},A=Boolean.prototype.toString;var g=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var S="object"==typeof self?self:null,U="object"==typeof window?window:null,E="object"==typeof global?global:null;var N=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(S)return S;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),T=N.document&&N.document.childNodes,F=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var I=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",I);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function x(t){return null!==t&&"object"==typeof t}function B(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=I.exec(e.toString()))return r[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!V(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(x));var G="function"==typeof y||"object"==typeof F||"function"==typeof T?function(t){return B(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?B(t).toLowerCase():r};function M(t){return"function"===G(t)}function k(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&M(t.next)}function C(t){return"number"==typeof t}var L=Number,q=L.prototype.toString;var Y=b();function R(t){return"object"==typeof t&&(t instanceof L||(Y?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return C(t)||R(t)}l(X,"isPrimitive",C),l(X,"isObject",R);var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var D,H=Object.getPrototypeOf;D=M(Object.getPrototypeOf)?H:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=D;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&M(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&M(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function W(t,r){return Q(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(t,r,n){var e,o,i,u;if(!k(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!M(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(i=W(e,n)))throw i;return l(o={},"next",f),l(o,"return",a),z&&M(t[z])&&l(o,z,c),o;function f(){var n;return u?{done:!0}:(n=t.next()).done?(u=!0,n):{value:C(n.value)?r(n.value):e.invalid,done:!1}}function a(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){return Z(t[z](),r,e)}}function $(t){return t!=t}var tt="function"==typeof Uint32Array;var rt="function"==typeof Uint32Array?Uint32Array:null;var nt,et="function"==typeof Uint32Array?Uint32Array:void 0;nt=function(){var t,r,n;if("function"!=typeof rt)return!1;try{r=new rt(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(tt&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?et:function(){throw new Error("not implemented")};var ot=nt,it="function"==typeof Float64Array;var ut="function"==typeof Float64Array?Float64Array:null;var ft,at="function"==typeof Float64Array?Float64Array:void 0;ft=function(){var t,r,n;if("function"!=typeof ut)return!1;try{r=new ut([1,3.14,-3.14,NaN]),n=r,t=(it&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?at:function(){throw new Error("not implemented")};var ct=ft,lt="function"==typeof Uint8Array;var yt="function"==typeof Uint8Array?Uint8Array:null;var pt,vt="function"==typeof Uint8Array?Uint8Array:void 0;pt=function(){var t,r,n;if("function"!=typeof yt)return!1;try{r=new yt(r=[1,3.14,-3.14,256,257]),n=r,t=(lt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?vt:function(){throw new Error("not implemented")};var bt=pt,st="function"==typeof Uint16Array;var dt="function"==typeof Uint16Array?Uint16Array:null;var mt,wt="function"==typeof Uint16Array?Uint16Array:void 0;mt=function(){var t,r,n;if("function"!=typeof dt)return!1;try{r=new dt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(st&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?wt:function(){throw new Error("not implemented")};var jt,At={uint16:mt,uint8:bt};(jt=new At.uint16(1))[0]=4660;var gt=52===new At.uint8(jt.buffer)[0],_t=!0===gt?1:0,ht=new ct(1),Ot=new ot(ht.buffer);function St(t){return ht[0]=t,Ot[_t]}var Ut=!0===gt?1:0,Et=new ct(1),Nt=new ot(Et.buffer);function Tt(t,r){return Et[0]=t,Nt[Ut]=r>>>0,Et[0]}var Ft=Number.POSITIVE_INFINITY,Pt=L.NEGATIVE_INFINITY,It=1023;var Vt=.6931471803691238,xt=1.9082149292705877e-10,Bt=1.4426950408889634;var Gt=.6931471803691238,Mt=1.9082149292705877e-10;var kt=Math.sqrt;function Ct(t){return $(t)?NaN:function(t){return Math.abs(t)}(t)>.75?kt(1+t)-1:function(t){var r,n,e,o,i,u,f,a,c,l,y,p;if(t===Ft||$(t))return t;if(t===Pt)return-1;if(0===t)return t;if(t<0?(n=!0,f=-t):(n=!1,f=t),f>=38.816242111356935){if(n)return-1;if(f>=709.782712893384)return Ft}if(i=0|St(f),f>.34657359027997264)f<1.0397207708399179?n?(e=t+Vt,o=-xt,p=-1):(e=t-Vt,o=xt,p=1):(p=n?Bt*t-.5:Bt*t+.5,e=t-(l=p|=0)*Vt,o=l*xt),c=e-(t=e-o)-o;else{if(i<1016070144)return t;p=0}return u=1+(a=t*(r=.5*t))*function(t){return 0===t?-.03333333333333313:t*(.0015873015872548146+t*(t*(4008217827329362e-21+-2.0109921818362437e-7*t)-793650757867488e-19))-.03333333333333313}(a),y=a*((u-(l=3-u*r))/(6-t*l)),0===p?t-(t*y-a):(y=t*(y-c)-c,y-=a,-1===p?.5*(t-y)-.5:1===p?t<-.25?-2*(y-(t+.5)):1+2*(t-y):p<=-2||p>56?(f=Tt(f=1-(y-t),e=St(f)+(p<<20)|0))-1:(l=1,p<20?f=(l=Tt(l,e=1072693248-(2097152>>p)|0))-(y-t):(f=t-(y+(l=Tt(l,e=It-p<<20|0))),f+=1),Tt(f,e=St(f)+(p<<20)|0)))}(function(t){var r,n,e,o,i,u,f,a,c,l;if(t<-1||$(t))return NaN;if(-1===t)return Pt;if(t===Ft)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=St(c=1+t))>>20)-It)>0?1-(c-t):t-(c-1),i/=c):(l=((n=St(c=t))>>20)-It,i=0),(n&=1048575)<434334?c=Tt(c,1072693248|n):(l+=1,c=Tt(c,1071644672|n),n=1048576-n>>2),o=c-1),r=.5*o*o,0===n?0===o?l*Gt+(i+=l*Mt):l*Gt-((a=r*(1-.6666666666666666*o))-(l*Mt+i)-o):(a=(f=(u=o/(2+o))*u)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(f),0===l?o-(r-u*(r+a)):l*Gt-(r-(u*(r+a)+(l*Mt+i))-o))}(t)/2)}return function(t){return Z(t,Ct)}}));
//# sourceMappingURL=index.js.map
