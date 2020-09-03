!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueInputMask",[],t):"object"==typeof exports?exports.VueInputMask=t():e.VueInputMask=t()}(window,function(){return u={},r.m=n=[function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={"!":{escape:!0},"+":{skip:!0},X:{pattern:/./},"#":{pattern:/[0-9]/},S:{pattern:/[a-zA-Z]/},N:{pattern:/[0-9a-zA-Z]/},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()},untransform:function(e){return e}},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()},untransform:function(e){return e.toLocaleLowerCase()}}}},function(e,t,n){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.demask=t.mask=void 0;var o=u(n(2));t.demask=o.default;var l=u(n(3));t.mask=l.default,t.default={inserted:function(e,t){var n,u,r=t.value;/input/i.test(e.tagName)&&/text/i.test(e.type)?r.length?(n=l.default(e.value,r),u=o.default(e.value,r),e.value=n,e.setAttribute("raw-value",u),e.dispatchEvent(new CustomEvent("input"))):console.warn("v-mask: Element must have a specified mask value to work properly.",e):console.warn("v-mask: Element must be a text input to work properly.",e)},bind:function(r,e){var a=e.value;a.length&&/input/i.test(r.tagName)&&/text/i.test(r.type)&&(r.maskInput=function(e){var t,n,u=e.inputType;e.isTrusted&&!/(delete|backspace)/i.test(u)&&(t=l.default(r.value,a),n=o.default(t,a),r.value=t,r.setAttribute("raw-value",n),r.dispatchEvent(new CustomEvent("input")))},r.addEventListener("input",r.maskInput))},unbind:function(e){e.removeEventListener("input",e.maskInput)}}},function(e,t,n){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=u(n(0));t.default=function(e,t){for(var n,u,r=e.split(""),a=t.split(""),o=0,l=0;l<a.length;)i.default[a[l]]||a[l]!==r[o]||(r.splice(o,1),o--),null!==(n=i.default[a[l]])&&void 0!==n&&n.escape&&a[l+1]===r[o]&&(r.splice(o,1),o--,l++),null!==(u=i.default[a[l]])&&void 0!==u&&u.untransform&&(r[o]=i.default[a[l]].untransform(r[o])),o++,l++;return r.join("")}},function(e,t,n){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var k=u(n(0));t.default=function(e,t){for(var n=e.split(""),u=0,r="";0<n.length;){var a=function(e,t,n){var u,r,a,o,l,i,s,f,d,p,c=e.split(""),v=t.split(""),m=c.pop()||"",b=c.length+n,h=0,_="";if(null!==(u=k.default[v[b]])&&void 0!==u&&u.skip)return _=v[v.length-2],null!==(a=null===(r=k.default[_])||void 0===r?void 0:r.pattern)&&void 0!==a&&a.test(m)&&c.push(m),{escaped:h,value:c.join("")};if(b>=v.length)return null!==(o=k.default[v[v.length-1]])&&void 0!==o&&o.skip&&(_=v[v.length-2],null!==(i=null===(l=k.default[_])||void 0===l?void 0:l.pattern)&&void 0!==i&&i.test(m)&&c.push(m)),{escaped:h,value:c.join("")};for(;!k.default[v[b]]||k.default[v[b]].escape;){if(null!==(s=k.default[v[b]])&&void 0!==s&&s.escape&&(b++,h++),v[b]===m)return c.push(v[b]),{escaped:h,value:c.join("")};c.push(v[b]),b++}_=v[b],null!==(d=null===(f=k.default[_])||void 0===f?void 0:f.pattern)&&void 0!==d&&d.test(m)&&(c.push(k.default[_].transform?k.default[_].transform(m):m),b++);for(var y="";b<v.length;){if(k.default[v[b]]&&!k.default[v[b]].escape){y="";break}null!==(p=k.default[v[b]])&&void 0!==p&&p.escape?(y+=v[++b],b++):(y+=v[b],b++)}return{escaped:h,value:c.join("")+y}}(r+n.shift(),t,u),o=a.value;u+=a.escaped,r=o}return r}}],r.c=u,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)r.d(n,u,function(e){return t[e]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1);function r(e){if(u[e])return u[e].exports;var t=u[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var n,u});