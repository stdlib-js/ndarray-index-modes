// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,l=o.__defineGetter__,a=o.__defineSetter__,i=o.__lookupGetter__,u=o.__lookupSetter__,c=r,p=function(e,t,r){var c,p,f,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((p="value"in r)&&(i.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),f="get"in r,_="set"in r,p&&(f||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&l&&l.call(e,t,r.get),_&&a&&a.call(e,t,r.set),e},f=t()?c:p,_=["throw","clamp","wrap"];function d(){return _.slice()}return f(d,"enum",{configurable:!1,enumerable:!1,writable:!1,value:function(){return{throw:1,clamp:2,wrap:3}}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).modes=t();
//# sourceMappingURL=index.js.map
