(function(){"use strict";var __webpack_modules__={5438:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.A={name:"CalculadoraPage",data(){return{display:""}},methods:{appendValue(e){this.display+=e},operate(e){this.display+=` ${e} `},clear(){this.display=""},calculate(){try{this.display=eval(this.display).toString()}catch{this.display="Error"}}}}},4820:function(e,a,n){var t=n(5130),r=n(6768);const o={id:"app"};function c(e,a,n,t,c,u){const l=(0,r.g2)("AppHeader"),_=(0,r.g2)("router-view"),i=(0,r.g2)("AppFooter");return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.bF)(l),(0,r.Lk)("main",null,[(0,r.bF)(_)]),(0,r.bF)(i)])}function u(e,a,n,t,o,c){const u=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",null,[(0,r.Lk)("nav",null,[(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,[(0,r.bF)(u,{to:"/"},{default:(0,r.k6)((()=>a[0]||(a[0]=[(0,r.eW)("Inici")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(u,{to:"/calculator"},{default:(0,r.k6)((()=>a[1]||(a[1]=[(0,r.eW)("Calculadora")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(u,{to:"/fetch-data"},{default:(0,r.k6)((()=>a[2]||(a[2]=[(0,r.eW)("Dades Fetch")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(u,{to:"/axios-data"},{default:(0,r.k6)((()=>a[3]||(a[3]=[(0,r.eW)("Dades Axios")]))),_:1})])])])])}var l={name:"AppHeader"},_=n(1241);const i=(0,_.A)(l,[["render",u],["__scopeId","data-v-e080a15c"]]);var s=i;function p(e,a,n,t,o,c){return(0,r.uX)(),(0,r.CE)("footer",null,a[0]||(a[0]=[(0,r.Lk)("p",null,"© 2023 - Desenvolupat per Mr.Roberto",-1)]))}var d={name:"AppFooter"};const k=(0,_.A)(d,[["render",p],["__scopeId","data-v-495d9a81"]]);var b=k,v={name:"App",components:{AppHeader:s,AppFooter:b}};const f=(0,_.A)(v,[["render",c]]);var h=f,m=n(1387);const L={class:"container"},w={class:"card-container"};function C(e,a,n,t,o,c){return(0,r.uX)(),(0,r.CE)("div",L,[a[6]||(a[6]=(0,r.Lk)("h1",{class:"title"},"Benvingut a la meva pàgina web",-1)),a[7]||(a[7]=(0,r.Lk)("p",{class:"description"}," Explora les funcionalitats i descobreix tot el que fa cadascuna de les pàgines ",-1)),(0,r.Lk)("div",w,[(0,r.Lk)("div",{class:"card",onClick:a[0]||(a[0]=e=>c.navigateTo("/calculator"))},a[3]||(a[3]=[(0,r.Lk)("i",{class:"icon calculator-icon"},"🧮",-1),(0,r.Lk)("h3",null,"Calculadora",-1),(0,r.Lk)("p",null,"Fes càlculs ràpidament amb la nostra eina integrada.",-1)])),(0,r.Lk)("div",{class:"card",onClick:a[1]||(a[1]=e=>c.navigateTo("/fetch-data"))},a[4]||(a[4]=[(0,r.Lk)("i",{class:"icon fetch-icon"},"📊",-1),(0,r.Lk)("h3",null,"Dades de Comments",-1),(0,r.Lk)("p",null,"Consulta dades externes amb la nostra API Fetch.",-1)])),(0,r.Lk)("div",{class:"card",onClick:a[2]||(a[2]=e=>c.navigateTo("/axios-data"))},a[5]||(a[5]=[(0,r.Lk)("i",{class:"icon axios-icon"},"📋",-1),(0,r.Lk)("h3",null,"Dades d'Usuaris",-1),(0,r.Lk)("p",null,"Accedeix a les dades dels usuaris a través de l'API Axios.",-1)]))])])}n(4114);var y={name:"HomePage",methods:{navigateTo(e){this.$router.push(e)}}};const g=(0,_.A)(y,[["render",C],["__scopeId","data-v-4c27c92b"]]);var A=g;function q(e,a,n,t,o,c){const u=(0,r.g2)("Calculadora");return(0,r.uX)(),(0,r.CE)("div",null,[a[0]||(a[0]=(0,r.Lk)("h2",null,"Calculadora",-1)),(0,r.bF)(u)])}const x={class:"calculator"},E={class:"buttons"};function F(e,a,n,o,c,u){return(0,r.uX)(),(0,r.CE)("div",x,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>c.display=e),readonly:""},null,512),[[t.Jo,c.display]]),(0,r.Lk)("div",E,[(0,r.Lk)("button",{onClick:a[1]||(a[1]=(...e)=>u.clear&&u.clear(...e))},"C"),(0,r.Lk)("button",{onClick:a[2]||(a[2]=e=>u.appendValue("7"))},"7"),(0,r.Lk)("button",{onClick:a[3]||(a[3]=e=>u.appendValue("8"))},"8"),(0,r.Lk)("button",{onClick:a[4]||(a[4]=e=>u.appendValue("9"))},"9"),(0,r.Lk)("button",{onClick:a[5]||(a[5]=e=>u.operate("/"))},"/"),(0,r.Lk)("button",{onClick:a[6]||(a[6]=e=>u.appendValue("4"))},"4"),(0,r.Lk)("button",{onClick:a[7]||(a[7]=e=>u.appendValue("5"))},"5"),(0,r.Lk)("button",{onClick:a[8]||(a[8]=e=>u.appendValue("6"))},"6"),(0,r.Lk)("button",{onClick:a[9]||(a[9]=e=>u.operate("*"))},"*"),(0,r.Lk)("button",{onClick:a[10]||(a[10]=e=>u.appendValue("1"))},"1"),(0,r.Lk)("button",{onClick:a[11]||(a[11]=e=>u.appendValue("2"))},"2"),(0,r.Lk)("button",{onClick:a[12]||(a[12]=e=>u.appendValue("3"))},"3"),(0,r.Lk)("button",{onClick:a[13]||(a[13]=e=>u.operate("-"))},"-"),(0,r.Lk)("button",{onClick:a[14]||(a[14]=e=>u.appendValue("0"))},"0"),(0,r.Lk)("button",{onClick:a[15]||(a[15]=e=>u.appendValue("."))},"."),(0,r.Lk)("button",{onClick:a[16]||(a[16]=(...e)=>u.calculate&&u.calculate(...e))},"="),(0,r.Lk)("button",{onClick:a[17]||(a[17]=e=>u.operate("+"))},"+")])])}var V=n(5438);const I=(0,_.A)(V.A,[["render",F],["__scopeId","data-v-27ecd082"]]);var X=I,j={name:"CalculadoraPage",components:{Calculadora:X}};const O=(0,_.A)(j,[["render",q],["__scopeId","data-v-386449cc"]]);var D=O,P=n(4232);function T(e,a,n,t,o,c){return(0,r.uX)(),(0,r.CE)("div",null,[a[0]||(a[0]=(0,r.Lk)("h2",null,"Dades de Comments API (fetch)",-1)),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.comments,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id},(0,P.v_)(e.body),1)))),128))])])}var H={data(){return{comments:[]}},async created(){const e=await fetch("https://jsonplaceholder.typicode.com/comments");this.comments=await e.json()}};const W=(0,_.A)(H,[["render",T]]);var U=W;function K(e,a,n,t,o,c){return(0,r.uX)(),(0,r.CE)("div",null,[a[0]||(a[0]=(0,r.Lk)("h2",null,"Dades dels Usuaris (via Axios)",-1)),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.users,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id},(0,P.v_)(e.firstName)+" "+(0,P.v_)(e.lastName)+" - "+(0,P.v_)(e.email),1)))),128))])])}var M=n(788),N=n.n(M),$={name:"AxiosData",data(){return{users:[]}},async created(){try{const e=await N().get("https://dummyjson.com/users");this.users=e.data.users}catch(e){console.error("Error en obtenir les dades",e)}}};const B=(0,_.A)($,[["render",K],["__scopeId","data-v-58a3ad10"]]);var J=B;const R=[{path:"/",component:A},{path:"/calculator",component:D},{path:"/fetch-data",component:U},{path:"/axios-data",component:J}],S=(0,m.aE)({history:(0,m.LA)(),routes:R});var z=S;(0,t.Ef)(h).use(z).mount("#app")}},__webpack_module_cache__={};function __webpack_require__(e){var a=__webpack_module_cache__[e];if(void 0!==a)return a.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(a,n,t,r){if(!n){var o=1/0;for(_=0;_<e.length;_++){n=e[_][0],t=e[_][1],r=e[_][2];for(var c=!0,u=0;u<n.length;u++)(!1&r||o>=r)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](n[u])}))?n.splice(u--,1):(c=!1,r<o&&(o=r));if(c){e.splice(_--,1);var l=t();void 0!==l&&(a=l)}}return a}r=r||0;for(var _=e.length;_>0&&e[_-1][2]>r;_--)e[_]=e[_-1];e[_]=[n,t,r]}}(),function(){__webpack_require__.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(a,{a:a}),a}}(),function(){__webpack_require__.d=function(e,a){for(var n in a)__webpack_require__.o(a,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};__webpack_require__.O.j=function(a){return 0===e[a]};var a=function(a,n){var t,r,o=n[0],c=n[1],u=n[2],l=0;if(o.some((function(a){return 0!==e[a]}))){for(t in c)__webpack_require__.o(c,t)&&(__webpack_require__.m[t]=c[t]);if(u)var _=u(__webpack_require__)}for(a&&a(n);l<o.length;l++)r=o[l],__webpack_require__.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return __webpack_require__.O(_)},n=self["webpackChunkprojecte"]=self["webpackChunkprojecte"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var __webpack_exports__=__webpack_require__.O(void 0,[504],(function(){return __webpack_require__(4820)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.67f48c40.js.map