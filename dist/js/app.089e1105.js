(function(){"use strict";var e={8513:function(e,n,t){var r=t(9242),o=t(4301),a=t(5708),i=t(3990),c=t(579),u=t(2389),s=t(6265),d=t.n(s),f=t(6423),l=t(6216),h=(t(3455),t(9345)),p=t.n(h),m=t(3396);function b(e,n,t,r,o,a){const i=(0,m.up)("vue-progress-bar"),c=(0,m.up)("router-view");return(0,m.wg)(),(0,m.iD)(m.HY,null,[(0,m.Wm)(i),(0,m.Wm)(c)],64)}var v={},g=t(89);const y=(0,g.Z)(v,[["render",b]]);var C=y,k=t(678);const O=[{path:"/",name:"StoreView",component:()=>t.e(461).then(t.bind(t,1461)),children:[{path:"",name:"home",component:()=>t.e(742).then(t.bind(t,4742))},{path:"thermos/classic",name:"thermosClassic",component:()=>t.e(9).then(t.bind(t,9))},{path:"thermos/classic/details/:color",name:"thermosClassicDetails",component:()=>t.e(506).then(t.bind(t,1506))},{path:"user/cart",name:"usercart",component:()=>t.e(53).then(t.bind(t,3053)),children:[{path:"",name:"cart",components:{StoreUserCartProgressBar:()=>t.e(190).then(t.bind(t,190)),StoreUserCartProductTable:()=>t.e(468).then(t.bind(t,3468)),StoreUserCartSpreadsheet:()=>t.e(943).then(t.bind(t,2943))}},{path:"order",name:"order",components:{StoreUserCartProgressBar:()=>t.e(190).then(t.bind(t,190)),StoreUserCartOrderForm:()=>t.e(328).then(t.bind(t,2328)),StoreUserCartSpreadsheet:()=>t.e(943).then(t.bind(t,2943))}},{path:"checkout",name:"checkout",components:{default:()=>t.e(234).then(t.bind(t,8234)),StoreUserCartProgressBar:()=>t.e(190).then(t.bind(t,190))}},{path:"checkout/:orderId",name:"checkoutOrder",component:()=>t.e(282).then(t.bind(t,2282))}]},{path:"order-check",name:"OrderCheck",component:()=>t.e(944).then(t.bind(t,1944))},{path:"about-us",name:"aboutUs",component:()=>t.e(575).then(t.bind(t,5575))}]},{path:"/dashboard",name:"DashboardView",component:()=>Promise.all([t.e(473),t.e(645)]).then(t.bind(t,1645)),children:[{path:"",name:"dashboard",component:()=>t.e(32).then(t.bind(t,5032))},{path:"products",component:()=>Promise.all([t.e(473),t.e(61),t.e(246)]).then(t.bind(t,2246))},{path:"orders",component:()=>Promise.all([t.e(473),t.e(61),t.e(173)]).then(t.bind(t,9173))},{path:"coupons",component:()=>Promise.all([t.e(473),t.e(61),t.e(79)]).then(t.bind(t,5079))},{path:"/login",name:"login",component:()=>t.e(316).then(t.bind(t,4316))}]}],w=(0,k.p7)({history:(0,k.r5)(),routes:O});var S=w;(0,a.aH)("email",i.Do),(0,a.aH)("required",i.C1),(0,a.aH)("numeric",i.uR),(0,a.aH)("min",i.VV),(0,a.aH)("max",i.Fp),(0,a.jQ)({generateMessage:(0,c.NC)({zhTW:u})}),(0,c.i_)("zhTW");const j={color:"#4d6d58",failedColor:"#CC7E85",thickness:"5px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1},P=(0,r.ri)(C);P.use((0,o.WB)()),P.use(f.Z,d()),P.use(S),P.use(p(),j),P.component("LoadingOverlay",l.Z),P.component("VForm",a.l0),P.component("VField",a.gN),P.component("ErrorMessage",a.Bc),P.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(d--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{9:"bbd8c19a",32:"02c2b29e",53:"aa3e9093",61:"ae1529fb",79:"701c10b2",173:"2fea40d0",190:"4508b173",234:"f9c802a9",246:"759be6a0",282:"4c9198e4",316:"752a2d35",328:"87cddda5",461:"f0a7e93a",468:"bc3ee62f",473:"166f9330",506:"8b70f9ae",575:"538bc1ea",645:"969b233e",742:"a84bf6d9",943:"cdf8cc3c",944:"b9f7668c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{9:"05e30d1e",234:"075ae4af",328:"7748ac31",461:"0d1066dd",468:"075ae4af",506:"aa2d5a5c",742:"b9420904",943:"0fee79c2",944:"c411f96f"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="my-project:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var f=s[d];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=r),e[r]=[o];var l=function(n,t){c.onerror=c.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/CHIRP-thermos/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),c=t.p+i;if(n(i,c))return o();e(r,c,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={9:1,234:1,328:1,461:1,468:1,506:1,742:1,943:1,944:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],c=r[1],u=r[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var d=u(t)}for(n&&n(r);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},r=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8513)}));r=t.O(r)})();
//# sourceMappingURL=app.089e1105.js.map