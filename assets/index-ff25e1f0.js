(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function y(){}function ht(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function nt(t){return t()}function V(){return Object.create(null)}function I(t){t.forEach(nt)}function rt(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function mt(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function pt(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function P(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function $(){return j(" ")}function _t(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return Array.from(t.childNodes)}let S;function w(t){S=t}function wt(){if(!S)throw new Error("Function called outside component initialization");return S}const L=[],W=[];let O=[];const X=[],yt=Promise.resolve();let H=!1;function $t(){H||(H=!0,yt.then(R))}function T(t){O.push(t)}const G=new Set;let A=0;function R(){if(A!==0)return;const t=S;do{try{for(;A<L.length;){const e=L[A];A++,w(e),kt(e.$$)}}catch(e){throw L.length=0,A=0,e}for(w(null),L.length=0,A=0;W.length;)W.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];G.has(n)||(G.add(n),n())}O.length=0}while(L.length);for(;X.length;)X.pop()();H=!1,G.clear(),w(t)}function kt(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}function vt(t){const e=[],n=[];O.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),O=e}const q=new Set;let k;function xt(){k={r:0,c:[],p:k}}function Et(){k.r||I(k.c),k=k.p}function U(t,e){t&&t.i&&(q.delete(t),t.i(e))}function ct(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),k.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function At(t,e){const n=e.token={};function r(l,c,a,i){if(e.token!==n)return;e.resolved=i;let o=e.ctx;a!==void 0&&(o=o.slice(),o[a]=i);const s=l&&(e.current=l)(o);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,g)=>{g!==c&&f&&(xt(),ct(f,1,1,()=>{e.blocks[g]===f&&(e.blocks[g]=null)}),Et())}):e.block.d(1),s.c(),U(s,1),s.m(e.mount(),e.anchor),_=!0),e.block=s,e.blocks&&(e.blocks[c]=s),_&&R()}if(ht(t)){const l=wt();if(t.then(c=>{w(l),r(e.then,1,e.value,c),w(null)},c=>{if(w(l),r(e.catch,2,e.error,c),w(null),!e.hasCatch)throw c}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Lt(t,e,n){const r=e.slice(),{resolved:l}=t;t.current===t.then&&(r[t.value]=l),t.current===t.catch&&(r[t.error]=l),t.block.p(r,n)}function jt(t){t&&t.c()}function st(t,e,n,r){const{fragment:l,after_update:c}=t.$$;l&&l.m(e,n),r||T(()=>{const a=t.$$.on_mount.map(nt).filter(rt);t.$$.on_destroy?t.$$.on_destroy.push(...a):I(a),t.$$.on_mount=[]}),c.forEach(T)}function at(t,e){const n=t.$$;n.fragment!==null&&(vt(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(L.push(t),$t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(t,e,n,r,l,c,a,i=[-1]){const o=S;w(t);const s=t.$$={fragment:null,ctx:[],props:c,update:y,not_equal:l,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:V(),dirty:i,skip_bound:!1,root:e.target||o.$$.root};a&&a(s.root);let _=!1;if(s.ctx=n?n(t,e.props||{},(f,g,...x)=>{const M=x.length?x[0]:g;return s.ctx&&l(s.ctx[f],s.ctx[f]=M)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](M),_&&Ot(t,f)),g}):[],s.update(),_=!0,I(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const f=bt(e.target);s.fragment&&s.fragment.l(f),f.forEach(v)}else s.fragment&&s.fragment.c();e.intro&&U(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),R()}w(o)}class ot{$destroy(){at(this,1),this.$destroy=y}$on(e,n){if(!rt(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Pt(t){let e;return{c(){e=h("header"),e.innerHTML=`<ul class="flex not-flex-mobil flex-align-center"><li class="fb-20"><h1>Artistic3DMatthew</h1></li> 
        <li class="fb-80 flex"><ul class="flex flex-space-between"><li class="fb-30"><ul class="social flex"><li class="fb-20"><a href="https://github.com/artistic3dmatthew/arts" target="_array"><img src="/arts/images/logoGitHub.png" alt="Github" style="filter: invert(1);"/></a></li> 
                        <li class="fb-20"><a href="https://www.instagram.com/artistic3dmatthew/" target="_blank"><img src="/arts/images/logoInstagram.png" alt="Github"/></a></li> 
                        <li class="fb-20"><a href="https://artistic3dmatthew.artstation.com/" target="_blank"><img src="/arts/images/logoArtstation.png" alt="Github"/></a></li></ul></li> 
                <li><a href="https://github.com/artistic3dmatthew/arts/blob/d493ae06351d7be2e466cf7c79c300122c7ab5c4/README.md" target="_array">Read-me</a></li></ul></li></ul>`},m(n,r){P(n,e,r)},p:y,i:y,o:y,d(n){n&&v(e)}}}class Ct extends ot{constructor(e){super(),it(this,e,null,Pt,lt,{})}}function Z(t,e,n){const r=t.slice();return r[6]=e[n],r[8]=n,r}function St(t){let e;return{c(){e=h("h2"),e.textContent="API Error"},m(n,r){P(n,e,r)},p:y,d(n){n&&v(e)}}}function It(t){let e,n,r,l,c,a,i,o,s,_,f,g,x,M=t[5][0].title+"",F,z,dt=t[5][0].translation+"",B,K,C,Y,E=Object.keys(t[5][0][0]),p=[];for(let m=0;m<E.length;m+=1)p[m]=tt(Z(t,E,m));return{c(){e=h("div"),n=h("div"),r=h("p"),r.textContent="Due to the high resolution of the images, you need to click on the one of your choice to download it.",l=$(),c=h("ul");for(let m=0;m<p.length;m+=1)p[m].c();a=$(),i=h("h3"),i.textContent="Important links",o=$(),s=h("ul"),s.innerHTML=`<li class="fb-50"><a target="_blank" href="https://www.youtube.com/@SamJess">Youtube de Sam&amp;Jess : https://www.youtube.com/@SamJess</a></li> 
                        <li class="fb-50"><a target="_blank" href="https://www.instagram.com/samandjessofficial/">Instagram : https://www.instagram.com/samandjessofficial/</a></li>`,_=$(),f=h("div"),g=h("div"),x=h("h2"),F=j(M),z=$(),B=j(dt),K=$(),C=h("img"),b(s,"class","flex"),b(n,"class","fb-50 descriptor"),b(g,"class","content"),mt(C.src,Y=J+"/assets/images/samjess/low/samJess.png")||b(C,"src",Y),b(C,"alt","Image erreur"),b(f,"class","fb-50 list"),b(e,"class","flex")},m(m,N){P(m,e,N),u(e,n),u(n,r),u(n,l),u(n,c);for(let d=0;d<p.length;d+=1)p[d]&&p[d].m(c,null);u(n,a),u(n,i),u(n,o),u(n,s),u(e,_),u(e,f),u(f,g),u(g,x),u(x,F),u(g,z),u(g,B),u(f,K),u(f,C)},p(m,N){if(N&1){E=Object.keys(m[5][0][0]);let d;for(d=0;d<E.length;d+=1){const Q=Z(m,E,d);p[d]?p[d].p(Q,N):(p[d]=tt(Q),p[d].c(),p[d].m(c,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=E.length}},d(m){m&&v(e),gt(p,m)}}}function tt(t){let e,n,r=t[5][0][0][t[8]].libelle+"",l,c,a,i;function o(){return t[1](t[5],t[8])}return{c(){e=h("li"),n=j(">>"),l=j(r),c=j(`<<\r
                            `)},m(s,_){P(s,e,_),u(e,n),u(e,l),u(e,c),a||(i=_t(e,"click",o),a=!0)},p(s,_){t=s},d(s){s&&v(e),a=!1,i()}}}function Mt(t){let e;return{c(){e=h("h2"),e.textContent="Loading...."},m(n,r){P(n,e,r)},p:y,d(n){n&&v(e)}}}function Nt(t){let e,n,r,l,c,a;r=new Ct({});let i={ctx:t,current:null,token:null,hasCatch:!0,pending:Mt,then:It,catch:St,value:5,error:9};return At(t[0],i),{c(){e=h("div"),n=h("main"),jt(r.$$.fragment),l=$(),c=h("section"),i.block.c(),b(n,"class","listImages"),b(e,"id","body"),b(e,"class","index")},m(o,s){P(o,e,s),u(e,n),st(r,n,null),u(n,l),u(n,c),i.block.m(c,i.anchor=null),i.mount=()=>c,i.anchor=null,a=!0},p(o,[s]){t=o,Lt(i,t,s)},i(o){a||(U(r.$$.fragment,o),a=!0)},o(o){ct(r.$$.fragment,o),a=!1},d(o){o&&v(e),at(r),i.block.d(),i.token=null,i=null}}}function Dt(t){window.open(t,"_blank")}function qt(t){document.title="Artistic3DMatthew | Téléchargement";let n=new URLSearchParams(window.location.search).get("grp");return n==null&&(n="3"),[(async a=>{var i=await fetch(a),o=await i.json();return o})(J+"/quality/fr/"+n),function(a,i){Dt(J+a[0][0][i].url)}]}class Gt extends ot{constructor(e){super(),it(this,e,qt,Nt,lt,{})}}let Ht="https://justindelfraissy.fr/arts",Tt=Ht,et={};function ut(t,e){return e=document.querySelector("#app"),e.innerHTML="",t=window.location.pathname.split("/"),console.log(t),t[1]=="arts"?et=new Gt({target:e}):console.log("404"),et}const J=Tt;let ft=window.location.pathname;ut(ft,"#app");window.addEventListener("popstate",function(t){ut(ft,"#body")});
