// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSqrt1pm1=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,o,a,c,f,l,s,p,y,d,v;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,v=void 0,(v=y-p.length)<0?p:p=d?p+m(v):m(v)+p)),c+=n.arg||"",f+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,i;for(e=[],i=0,n=O.exec(r);n;)(t=r.slice(i,O.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),i=O.lastIndex,n=O.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function T(r){var t,e;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var F,I=Object.prototype,k=I.toString,V=I.__defineGetter__,N=I.__defineSetter__,P=I.__lookupGetter__,$=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(P.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=I,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,t,e.get),a&&N&&N.call(r,t,e.set),r};var C=F;function G(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var L=/./;function B(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return R&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;function H(r,t){return null!=r&&Z.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,q="function"==typeof X?X.toStringTag:"";var Y=W()?function(r){var t,e,n;if(null==r)return M.call(r);e=r[q],t=H(r,q);try{r[q]=void 0}catch(t){return M.call(r)}return n=M.call(r),t?r[q]=e:delete r[q],n}:function(r){return M.call(r)},z=Boolean,D=Boolean.prototype.toString;var J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function Q(r){return B(r)||K(r)}G(Q,"isPrimitive",B),G(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!B(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(tr)return tr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),or=ir.document&&ir.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;G(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var t,e,n,i;if(("Object"===(e=Y(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=cr.exec(n.toString()))return t[1]}return lr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}G(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!fr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(lr));var pr="function"==typeof L||"object"==typeof ar||"function"==typeof or?function(r){return sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t};function yr(r){return"function"===pr(r)}function dr(r){return"number"==typeof r}var vr=Number,gr=vr.prototype.toString;var br=W();function hr(r){return"object"==typeof r&&(r instanceof vr||(br?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function wr(r){return dr(r)||hr(r)}G(wr,"isPrimitive",dr),G(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&H(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,_r=Object.getPrototypeOf;jr=yr(Object.getPrototypeOf)?_r:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=jr;var Sr=Object.prototype;function Or(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(t=function(r){return null==r?null:(r=Ar(r),Er(r))}(r),!t||!H(r,"constructor")&&H(t,"constructor")&&yr(t.constructor)&&"[object Function]"===Y(t.constructor)&&H(t,"isPrototypeOf")&&yr(t.isPrototypeOf)&&(t===Sr||function(r){var t;for(t in r)if(!H(r,t))return!1;return!0}(r)))}function xr(r,t,e){var n,i,o,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!yr(u.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(t))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(o=function(r,t){return Or(t)?(H(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),o))throw o;return G(i={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:dr(e.value)?t(e.value):n.invalid,done:!1}})),G(i,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr&&yr(r[mr])&&G(i,mr,(function(){return xr(r[mr](),t,n)})),i}function Ur(r){return r!=r}var Tr="function"==typeof Uint32Array;var Fr="function"==typeof Uint32Array?Uint32Array:null;var Ir,kr="function"==typeof Uint32Array?Uint32Array:void 0;Ir=function(){var r,t,e;if("function"!=typeof Fr)return!1;try{t=new Fr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Tr&&e instanceof Uint32Array||"[object Uint32Array]"===Y(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Vr=Ir,Nr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null;var $r,Cr="function"==typeof Float64Array?Float64Array:void 0;$r=function(){var r,t,e;if("function"!=typeof Pr)return!1;try{t=new Pr([1,3.14,-3.14,NaN]),e=t,r=(Nr&&e instanceof Float64Array||"[object Float64Array]"===Y(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Gr=$r,Lr="function"==typeof Uint8Array;var Br="function"==typeof Uint8Array?Uint8Array:null;var Rr,Wr="function"==typeof Uint8Array?Uint8Array:void 0;Rr=function(){var r,t,e;if("function"!=typeof Br)return!1;try{t=new Br(t=[1,3.14,-3.14,256,257]),e=t,r=(Lr&&e instanceof Uint8Array||"[object Uint8Array]"===Y(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Mr=Rr,Zr="function"==typeof Uint16Array;var Hr="function"==typeof Uint16Array?Uint16Array:null;var Xr,qr="function"==typeof Uint16Array?Uint16Array:void 0;Xr=function(){var r,t,e;if("function"!=typeof Hr)return!1;try{t=new Hr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Zr&&e instanceof Uint16Array||"[object Uint16Array]"===Y(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var Yr,zr={uint16:Xr,uint8:Mr};(Yr=new zr.uint16(1))[0]=4660;var Dr=52===new zr.uint8(Yr.buffer)[0],Jr=!0===Dr?1:0,Kr=new Gr(1),Qr=new Vr(Kr.buffer);function rt(r){return Kr[0]=r,Qr[Jr]}var tt,et,nt=!0===Dr?1:0,it=new Gr(1),ot=new Vr(it.buffer);function at(r,t){return it[0]=r,ot[nt]=t>>>0,it[0]}!0===Dr?(tt=1,et=0):(tt=0,et=1);var ut={HIGH:tt,LOW:et},ct=new Gr(1),ft=new Vr(ct.buffer),lt=ut.HIGH,st=ut.LOW;var pt=Number.POSITIVE_INFINITY,yt=vr.NEGATIVE_INFINITY,dt=1023,vt=.34657359027997264;var gt=709.782712893384,bt=.6931471803691238,ht=1.9082149292705877e-10,wt=1.4426950408889634,mt=38.816242111356935,jt=1.0397207708399179;function At(r){var t,e,n,i,o,a,u,c,f,l,s,p,y,d,v;if(r===pt||Ur(r))return r;if(r===yt)return-1;if(0===r)return r;if(r<0?(n=!0,c=-r):(n=!1,c=r),c>=mt){if(n)return-1;if(c>=gt)return pt}if(a=0|rt(c),c>vt)c<jt?n?(i=r+bt,o=-ht,y=-1):(i=r-bt,o=ht,y=1):(y=n?wt*r-.5:wt*r+.5,i=r-(s=y|=0)*bt,o=s*ht),l=i-(r=i-o)-o;else{if(a<1016070144)return r;y=0}return u=1+(f=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((u-(s=3-u*t))/(6-r*s)),0===y?r-(r*p-f):(d=dt+y<<20,v=0,ft[lt]=d,ft[st]=v,e=ct[0],p=r*(p-l)-l,p-=f,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(c=1-(p-r),1024===y?c=at(c,i=rt(c)+(y<<20)|0):c*=e,c-1):(s=1,y<20?c=(s=at(s,i=1072693248-(2097152>>y)|0))-(p-r):(c=r-(p+(s=at(s,i=dt-y<<20|0))),c+=1),c*=e))}var _t=.6931471803691238,Et=1.9082149292705877e-10,St=.41421356237309503,Ot=-.2928932188134525,xt=1.862645149230957e-9,Ut=5551115123125783e-32,Tt=9007199254740992,Ft=.6666666666666666;var It=Math.sqrt;function kt(r){return Ur(r)?NaN:function(r){return Math.abs(r)}(r)>.75?It(1+r)-1:At(function(r){var t,e,n,i,o,a,u,c,f,l;if(r<-1||Ur(r))return NaN;if(-1===r)return yt;if(r===pt)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<St){if(n<xt)return n<Ut?r:r-r*r*.5;r>Ot&&(l=0,i=r,e=1)}return 0!==l&&(n<Tt?(o=(l=((e=rt(f=1+r))>>20)-dt)>0?1-(f-r):r-(f-1),o/=f):(l=((e=rt(f=r))>>20)-dt,o=0),(e&=1048575)<434334?f=at(f,1072693248|e):(l+=1,f=at(f,1071644672|e),e=1048576-e>>2),i=f-1),t=.5*i*i,0===e?0===i?l*_t+(o+=l*Et):l*_t-((c=t*(1-Ft*i))-(l*Et+o)-i):(c=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(t-a*(t+c)):l*_t-(t-(a*(t+c)+(l*Et+o))-i))}(r)/2)}return function(r){return xr(r,kt)}}));
//# sourceMappingURL=index.js.map
