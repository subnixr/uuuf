!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.uuuf=n():t.uuuf=n()}(self,(()=>(()=>{"use strict";var t={d:(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{$$:()=>b,$$DOC:()=>w,$ALL:()=>m,$DOC:()=>g,$UP:()=>O,Component:()=>k,css:()=>o,dom:()=>r,emit:()=>P,events:()=>i,makeLoadComponents:()=>_,query:()=>v,tree:()=>e});var e={};t.r(e),t.d(e,{get:()=>f,map:()=>p});var r={};t.r(r),t.d(r,{$$:()=>b,$$DOC:()=>w,$ALL:()=>m,$DOC:()=>g,$UP:()=>O,query:()=>v,querySelect:()=>S});var o={};t.r(o),t.d(o,{cssClass:()=>A,cssClassNames:()=>j});var i={};function u(t,n,e){return Object.entries(t).reduce((function(t,n){var r=n[0],o=n[1];return e(t,o,r)}),n)}t.r(i),t.d(i,{bind:()=>D,emit:()=>P,unbind:()=>$});var c=function(){return c=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},c.apply(this,arguments)},a=function(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))};function l(t){return null!=t}function f(t,n){var e=("string"==typeof n?n.split("."):a([],n,!0)).reduce((function(t,n){return l(t)?t[n]:t}),t);return null===e?void 0:e}function s(t,n,e){return void 0===e&&(e=[]),u(t,{},(function(t,r,o){var i,u;if(l(r)&&r.constructor===Object)return c(c({},t),((i={})[o]=s(r,n,a(a([],e,!0),[o],!1)),i));var f=n(r,a(a([],e,!0),[o],!1),o);return void 0===f?c({},t):c(c({},t),((u={})[o]=f,u))}))}function p(t,n){return s(t,n)}var y,d=function(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))};function v(t,n){var e;return e="function"==typeof n?n:function(t){return t.matches(n)},Array.isArray(t)||(t=[t]),Array.from(t).map((function t(n){return e(n)?[n]:Array.from(n.children).map(t).flat()})).flat()}function h(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var o=n[0]+n.slice(1).map((function(t,n){return e[n]+t}));return Object.create(null,{toString:{value:function(){return o}},type:{value:t}})}function b(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return h.apply(void 0,d([y.Query,t],n,!1))}function m(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return h.apply(void 0,d([y.All,t],n,!1))}function g(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return h.apply(void 0,d([y.Document,t],n,!1))}function w(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return h.apply(void 0,d([y.DocumentAll,t],n,!1))}function O(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return h.apply(void 0,d([y.Closest,t],n,!1))}function S(t,n){return p(n,(function(n){return"string"==typeof n?t.querySelector(n):n.type===y.Query?v(t,n.toString()):n.type===y.All?Array.from(t.querySelectorAll(n.toString())):n.type===y.Document?document.querySelector(n.toString()):n.type===y.DocumentAll?Array.from(document.querySelectorAll(n.toString())):n.type===y.Closest?t.closest(n.toString()):void 0}))}function A(t){var n=function(n,e){return void 0===e&&(e=!0),n.classList.toggle(t,e)};return n.match=function(n){return n.classList.contains(t)},n.toString=function(){return t},n}function j(t){return p(t,A)}!function(t){t.All="all",t.Query="query",t.Document="document",t.DocumentAll="document-all",t.Closest="closest",t.Window="window"}(y||(y={}));var C=function(){return C=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},C.apply(this,arguments)};function P(t,n,e,r){void 0===r&&(r=!0);var o=new CustomEvent(n,{bubbles:r,detail:e});t.dispatchEvent(o)}function x(t,n){void 0===n&&(n=function(){});var e=t.bind(null);return e.remove=n,e}function D(t,n){return p(t,(function(t,e){var r=f(n,e);if(r)return u(r,{},(function(n,e,r){var o,i=function(t,n,e){return t?Array.isArray(t)?(t.forEach((function(t){return t.addEventListener(n,e)})),x(e,(function(){t.forEach((function(t){return t.removeEventListener(n,e)}))}))):(t.addEventListener(n,e),x(e,(function(){t.removeEventListener(n,e)}))):x(e)}(t,r,e);return C(C({},n),((o={})[r]=i,o))}))}))}function $(t){p(t,(function(t){t.remove()}))}var L=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}a((r=r.apply(t,n||[])).next())}))},E=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(e=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=n.call(t,u)}catch(t){c=[6,t],r=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}},k=function(){function t(t){this.elem=t,this.args=JSON.parse(t.dataset.args||"{}"),Object.defineProperties(this,{_handlers:{enumerable:!1,writable:!0,value:{}}}),this.css=j(this.CSS),function(t,{include:n,exclude:e}={}){const r=t=>{const r=n=>"string"==typeof n?t===n:n.test(t);return n?n.some(r):!e||!e.some(r)};for(const[n,e]of(t=>{const n=new Set;do{for(const e of Reflect.ownKeys(t))n.add([t,e])}while((t=Reflect.getPrototypeOf(t))&&t!==Object.prototype);return n})(t.constructor.prototype)){if("constructor"===e||!r(e))continue;const o=Reflect.getOwnPropertyDescriptor(n,e);o&&"function"==typeof o.value&&(t[e]=t[e].bind(t))}}(this)}return Object.defineProperty(t.prototype,"CSS",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"DOM",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.ready=function(){return L(this,void 0,void 0,(function(){return E(this,(function(t){return this.bind(),[2]}))}))},t.prototype.select=function(){var t=p(this.DOM,(function(t){return Array.isArray(t)?t[0]:t}));this.dom=S(this.elem,t)},t.prototype.bind=function(){this.select(),this.unbind();var t=p(this.DOM,(function(t){return Array.isArray(t)?t[1]:void 0}));this._handlers=D(this.dom,t)},t.prototype.unbind=function(){$(this._handlers)},t.prototype.emit=function(t,n,e){void 0===e&&(e=!0),P(this.elem,t,n,e)},t.prototype.mix=function(t,n){return void 0===n&&(n=this.elem),L(this,void 0,void 0,(function(){var e;return E(this,(function(r){switch(r.label){case 0:return[4,(e=new t(n)).ready()];case 1:return r.sent(),[2,e]}}))}))},t.prototype.is=function(t){return t===this.elem},t}(),q=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}a((r=r.apply(t,n||[])).next())}))},M=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(e=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=n.call(t,u)}catch(t){c=[6,t],r=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}},T=function(t){return t.dataset.jsComponent};function _(t,n){var e=void 0===n?{}:n,r=e.componentSelector,o=e.getComponentName;if("function"!=typeof t)throw new Error("importComponent must be a function");return void 0===r&&(r="[data-js-component]"),void 0===o&&(o=T),function(n,e){return void 0===e&&(e=function(){return!0}),q(this,void 0,void 0,(function(){var i,u,c=this;return M(this,(function(a){return i=n instanceof HTMLCollection?Array.from(n):n instanceof HTMLElement?[n]:n,u=v(i,(function(t){return function(t){return t.matches(r)&&Boolean(o(t))}(t)&&function(t){return!t.component}(t)&&e(t)})).map((function(n){return q(c,void 0,void 0,(function(){var e;return M(this,(function(r){switch(r.label){case 0:return e=o(n),[4,t(e)];case 1:return[2,new(r.sent())(n)]}}))}))})),[2,Promise.all(u).then((function(t){return q(c,void 0,void 0,(function(){var n,e,r;return M(this,(function(o){switch(o.label){case 0:n=0,e=t,o.label=1;case 1:return n<e.length?(r=e[n],Object.defineProperty(r.elem,"component",{configurable:!0,writable:!1,enumerable:!1,value:r}),[4,r.ready()]):[3,4];case 2:o.sent(),o.label=3;case 3:return n++,[3,1];case 4:return[2]}}))}))}))]}))}))}}return n})()));
//# sourceMappingURL=uuuf.js.map