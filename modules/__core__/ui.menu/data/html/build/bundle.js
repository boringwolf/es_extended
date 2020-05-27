var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return null==t?"":t}function i(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(){return f("")}function m(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function v(t,e){(null!=e||t.value)&&(t.value=e)}let y;function b(t){y=t}function k(){if(!y)throw new Error("Function called outside component initialization");return y}const $=[],x=[],_=[],w=[],z=Promise.resolve();let E=!1;function N(t){_.push(t)}let M=!1;const j=new Set;function A(){if(!M){M=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];b(e),S(e.$$)}for($.length=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];j.has(e)||(j.add(e),e())}_.length=0}while($.length);for(;w.length;)w.pop()();E=!1,M=!1,j.clear()}}function S(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const L=new Set;function O(t,e){-1===t.$$.dirty[0]&&($.push(t),E||(E=!0,z.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(c,a,i,r,s,f,d=[-1]){const p=y;b(c);const m=a.props||{},g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:d};let h=!1;if(g.ctx=i?i(c,m,(t,e,...n)=>{const l=n.length?n[0]:e;return g.ctx&&s(g.ctx[t],g.ctx[t]=l)&&(g.bound[t]&&g.bound[t](l),h&&O(c,t)),e}):[],g.update(),h=!0,l(g.before_update),g.fragment=!!r&&r(g.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();a.intro&&((v=c.$$.fragment)&&v.i&&(L.delete(v),v.i(k))),function(t,n,c){const{fragment:a,on_mount:i,on_destroy:r,after_update:u}=t.$$;a&&a.m(n,c),N(()=>{const n=i.map(e).filter(o);r?r.push(...n):l(n),t.$$.on_mount=[]}),u.forEach(N)}(c,a.target,a.anchor),A()}var v,k;b(p)}function P(t,e,n){const l=t.slice();return l[14]=e[n],l[15]=e,l[16]=n,l}function U(t){let e,n,l,o,c=("default"===t[14].type||"button"===t[14].type)&&X(t),a="slider"===t[14].type&&Y(t),i="check"===t[14].type&&q(t),s="text"===t[14].type&&B(t);return{c(){c&&c.c(),e=d(),a&&a.c(),n=d(),i&&i.c(),l=d(),s&&s.c(),o=p()},m(t,u){c&&c.m(t,u),r(t,e,u),a&&a.m(t,u),r(t,n,u),i&&i.m(t,u),r(t,l,u),s&&s.m(t,u),r(t,o,u)},p(t,r){"default"===t[14].type||"button"===t[14].type?c?c.p(t,r):(c=X(t),c.c(),c.m(e.parentNode,e)):c&&(c.d(1),c=null),"slider"===t[14].type?a?a.p(t,r):(a=Y(t),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null),"check"===t[14].type?i?i.p(t,r):(i=q(t),i.c(),i.m(l.parentNode,l)):i&&(i.d(1),i=null),"text"===t[14].type?s?s.p(t,r):(s=B(t),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},d(t){c&&c.d(t),t&&u(e),a&&a.d(t),t&&u(n),i&&i.d(t),t&&u(l),s&&s.d(t),t&&u(o)}}}function X(t){let e,n,l,o,c=t[14].label+"";function d(...e){return t[6](t[14],t[16],...e)}return{c(){e=s("item"),n=f(c),g(e,"class",l=a("button"===t[14].type?"button":"")+" svelte-klezg5")},m(t,l,c){r(t,e,l),i(e,n),c&&o(),o=m(e,"click",d)},p(o,i){t=o,4&i&&c!==(c=t[14].label+"")&&h(n,c),4&i&&l!==(l=a("button"===t[14].type?"button":"")+" svelte-klezg5")&&g(e,"class",l)},d(t){t&&u(e),o()}}}function Y(t){let e,n,o,c,a,p,y,b,k,$=t[14].label+"";function x(){t[7].call(p,t[14])}function _(...e){return t[8](t[14],t[16],...e)}function w(...e){return t[9](t[14],t[16],...e)}return{c(){e=s("item"),n=s("div"),o=f($),c=d(),a=s("div"),p=s("input"),g(n,"class","svelte-klezg5"),g(p,"type","range"),g(p,"min",y=t[14].min),g(p,"max",b=t[14].max),g(p,"class","svelte-klezg5"),g(a,"class","svelte-klezg5"),g(e,"class","slider svelte-klezg5")},m(u,s,f){r(u,e,s),i(e,n),i(n,o),i(e,c),i(e,a),i(a,p),v(p,t[14].value),f&&l(k),k=[m(p,"change",x),m(p,"input",x),m(e,"click",_),m(e,"wheel",w)]},p(e,n){t=e,4&n&&$!==($=t[14].label+"")&&h(o,$),4&n&&y!==(y=t[14].min)&&g(p,"min",y),4&n&&b!==(b=t[14].max)&&g(p,"max",b),4&n&&v(p,t[14].value)},d(t){t&&u(e),l(k)}}}function q(t){let e,n,o,c,a,p=t[14].label+"";function v(){t[10].call(c,t[14])}function y(...e){return t[11](t[14],t[16],...e)}return{c(){e=s("item"),n=f(p),o=d(),c=s("input"),g(c,"type","checkbox"),g(c,"class","svelte-klezg5"),g(e,"class","check svelte-klezg5")},m(u,s,f){r(u,e,s),i(e,n),i(e,o),i(e,c),c.checked=t[14].value,f&&l(a),a=[m(c,"change",v),m(e,"click",y)]},p(e,l){t=e,4&l&&p!==(p=t[14].label+"")&&h(n,p),4&l&&(c.checked=t[14].value)},d(t){t&&u(e),l(a)}}}function B(t){let e,n,o,c,a,p,y,b,k,$=t[14].label+"";function x(){t[12].call(p,t[14])}function _(...e){return t[13](t[14],t[16],...e)}return{c(){e=s("item"),n=s("div"),o=f($),c=d(),a=s("div"),p=s("input"),b=d(),g(n,"class","svelte-klezg5"),g(p,"type","text"),g(p,"placeholder",y=t[14].placeholder||""),g(p,"autocomplete","off"),g(p,"autocorrect","off"),g(p,"autocapitalize","off"),g(p,"spellcheck","false"),g(p,"class","svelte-klezg5"),g(a,"class","svelte-klezg5"),g(e,"class","text svelte-klezg5")},m(u,s,f){r(u,e,s),i(e,n),i(n,o),i(e,c),i(e,a),i(a,p),v(p,t[14].value),i(e,b),f&&l(k),k=[m(p,"input",x),m(e,"click",_)]},p(e,n){t=e,4&n&&$!==($=t[14].label+"")&&h(o,$),4&n&&y!==(y=t[14].placeholder||"")&&g(p,"placeholder",y),4&n&&p.value!==t[14].value&&v(p,t[14].value)},d(t){t&&u(e),l(k)}}}function F(t){let e,n=t[14].visible&&U(t);return{c(){n&&n.c(),e=p()},m(t,l){n&&n.m(t,l),r(t,e,l)},p(t,l){t[14].visible?n?n.p(t,l):(n=U(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&u(e)}}}function K(e){let n,l,o,c,p,m,v=e[2],y=[];for(let t=0;t<v.length;t+=1)y[t]=F(P(e,v,t));return{c(){n=s("main"),l=s("main-wrap"),o=s("item"),c=f(e[1]),p=d();for(let t=0;t<y.length;t+=1)y[t].c();var t,i,r;g(o,"class","title svelte-klezg5"),r="svelte-klezg5",(i="class")in(t=l)?t[i]=r:g(t,i,r),g(n,"class",m=a(e[0].split("|").map(T).join(" "))+" svelte-klezg5")},m(t,e){r(t,n,e),i(n,l),i(l,o),i(o,c),i(l,p);for(let t=0;t<y.length;t+=1)y[t].m(l,null)},p(t,[e]){if(2&e&&h(c,t[1]),28&e){let n;for(v=t[2],n=0;n<v.length;n+=1){const o=P(t,v,n);y[n]?y[n].p(o,e):(y[n]=F(o),y[n].c(),y[n].m(l,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=v.length}1&e&&m!==(m=a(t[0].split("|").map(T).join(" "))+" svelte-klezg5")&&g(n,"class",m)},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(y,t)}}}const T=t=>"float-"+t;function D(t,e,n){let{float:l="left|top"}=e,{title:o="Untitled ESX Menu"}=e,{items:c=[]}=e,{_items:a=[]}=e;var i;window.addEventListener("message",t=>{const e=t.data;switch(e.action){case"set":n(0,l=e.data.float||"left|top"),n(1,o=e.data.title||"Untitled ESX Menu"),n(5,c=e.data.items||[]);break;case"set_item":n(5,c[e.index][e.prop]=e.val,c),n(5,c=[...c])}}),i=()=>{window.parent.postMessage({action:"ready"},"*")},k().$$.on_mount.push(i),function(t){k().$$.before_update.push(t)}(()=>{n(2,a.length=0,a);for(let t=0;t<c.length;t++)(t=>{n(2,a[t]=new Proxy(c[t],{get:(t,e)=>t[e],set:(e,n,l)=>(e[n]=l,window.parent.postMessage({action:"item.change",index:t,prop:n,val:l},"*"),!0),has:(t,e)=>void 0!==t[e],ownKeys:t=>Object.keys(t)}),a)})(t);n(2,a=[...a])});const r=(t,e,n)=>{window.parent.postMessage({action:"item.click",index:n},"*")},u=(t,e,n)=>{t.deltaY>0&&e.value>e.min?e.value--:t.deltaY<0&&e.value<e.max&&e.value++};return t.$set=t=>{"float"in t&&n(0,l=t.float),"title"in t&&n(1,o=t.title),"items"in t&&n(5,c=t.items),"_items"in t&&n(2,a=t._items)},[l,o,a,r,u,c,(t,e,n)=>r(0,0,e),function(t){var e;t.value=""===(e=this.value)?void 0:+e,n(2,a)},(t,e,n)=>r(0,0,e),(t,e,n)=>u(n,t),function(t){t.value=this.checked,n(2,a)},(t,e,l)=>{r(0,0,e),n(2,t.value=!t.value,a)},function(t){t.value=this.value,n(2,a)},(t,e,n)=>r(0,0,e)]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),C(this,t,D,K,c,{float:0,title:1,items:5,_items:2})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
