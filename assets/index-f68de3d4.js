(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function w(){}function dt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function et(t){return t()}function Y(){return Object.create(null)}function N(t){t.forEach(et)}function nt(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function ht(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function pt(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function j(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function E(){return O(" ")}function gt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t){return Array.from(t.childNodes)}let M;function y(t){M=t}function bt(){if(!M)throw new Error("Function called outside component initialization");return M}const A=[],Q=[];let L=[];const V=[],yt=Promise.resolve();let H=!1;function wt(){H||(H=!0,yt.then(U))}function J(t){L.push(t)}const G=new Set;let x=0;function U(){if(x!==0)return;const t=M;do{try{for(;x<A.length;){const e=A[x];x++,y(e),$t(e.$$)}}catch(e){throw A.length=0,x=0,e}for(y(null),A.length=0,x=0;Q.length;)Q.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];G.has(n)||(G.add(n),n())}L.length=0}while(A.length);for(;V.length;)V.pop()();H=!1,G.clear(),y(t)}function $t(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function vt(t){const e=[],n=[];L.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),L=e}const q=new Set;let $;function kt(){$={r:0,c:[],p:$}}function xt(){$.r||N($.c),$=$.p}function R(t,e){t&&t.i&&(q.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),$.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Et(t,e){const n=e.token={};function r(l,c,i,a){if(e.token!==n)return;e.resolved=a;let o=e.ctx;i!==void 0&&(o=o.slice(),o[i]=a);const s=l&&(e.current=l)(o);let d=!1;e.block&&(e.blocks?e.blocks.forEach((u,_)=>{_!==c&&u&&(kt(),lt(u,1,1,()=>{e.blocks[_]===u&&(e.blocks[_]=null)}),xt())}):e.block.d(1),s.c(),R(s,1),s.m(e.mount(),e.anchor),d=!0),e.block=s,e.blocks&&(e.blocks[c]=s),d&&U()}if(dt(t)){const l=bt();if(t.then(c=>{y(l),r(e.then,1,e.value,c),y(null)},c=>{if(y(l),r(e.catch,2,e.error,c),y(null),!e.hasCatch)throw c}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function At(t,e,n){const r=e.slice(),{resolved:l}=t;t.current===t.then&&(r[t.value]=l),t.current===t.catch&&(r[t.error]=l),t.block.p(r,n)}function Ot(t){t&&t.c()}function ct(t,e,n,r){const{fragment:l,after_update:c}=t.$$;l&&l.m(e,n),r||J(()=>{const i=t.$$.on_mount.map(et).filter(nt);t.$$.on_destroy?t.$$.on_destroy.push(...i):N(i),t.$$.on_mount=[]}),c.forEach(J)}function st(t,e){const n=t.$$;n.fragment!==null&&(vt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(A.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(t,e,n,r,l,c,i,a=[-1]){const o=M;y(t);const s=t.$$={fragment:null,ctx:[],props:c,update:w,not_equal:l,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Y(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};i&&i(s.root);let d=!1;if(s.ctx=n?n(t,e.props||{},(u,_,...P)=>{const S=P.length?P[0]:_;return s.ctx&&l(s.ctx[u],s.ctx[u]=S)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](S),d&&Lt(t,u)),_}):[],s.update(),d=!0,N(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const u=_t(e.target);s.fragment&&s.fragment.l(u),u.forEach(v)}else s.fragment&&s.fragment.c();e.intro&&R(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),U()}y(o)}class it{$destroy(){st(this,1),this.$destroy=w}$on(e,n){if(!nt(n))return w;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function jt(t){let e;return{c(){e=m("header"),e.innerHTML=`<ul class="flex not-flex-mobil flex-align-center"><li class="fb-20"><h1>Artistic3DMatthew</h1></li> 
        <li class="fb-80 flex"><ul class="flex flex-space-between"><li class="fb-30 fb-100-mobil"><ul class="social flex"><li class="fb-33"><a href="https://github.com/artistic3dmatthew/arts" target="_array"><img src="/arts/images/logoGitHub.png" alt="Github" style="filter: invert(1);"/></a></li> 
                        <li class="fb-33"><a href="https://www.instagram.com/artistic3dmatthew/" target="_blank"><img src="/arts/images/logoInstagram.png" alt="Github"/></a></li> 
                        <li class="fb-33"><a href="https://artistic3dmatthew.artstation.com/" target="_blank"><img src="/arts/images/logoArtstation.png" alt="Github"/></a></li></ul></li> 
                <li class="only-pc"><a href="https://github.com/artistic3dmatthew/arts/blob/d493ae06351d7be2e466cf7c79c300122c7ab5c4/README.md" target="_array">Read-me</a></li></ul></li></ul>`},m(n,r){j(n,e,r)},p:w,i:w,o:w,d(n){n&&v(e)}}}class Pt extends it{constructor(e){super(),ot(this,e,null,jt,rt,{})}}function W(t,e,n){const r=t.slice();return r[8]=e[n],r[10]=n,r}function St(t){let e;return{c(){e=m("h2"),e.textContent="API Error"},m(n,r){j(n,e,r)},p:w,d(n){n&&v(e)}}}function Ct(t){let e,n,r,l,c,i,a,o,s,d,u,_=t[7][0].title+"",P,S,ft=t[7][0].translation+"",F,z,C,B,k=Object.keys(t[7][0][0]),g=[];for(let p=0;p<k.length;p+=1)g[p]=X(W(t,k,p));return{c(){e=m("div"),n=m("div"),r=m("p"),r.textContent="Due to the high resolution of the images, you need to click on the one of your choice to download it.",l=E(),c=m("ul");for(let p=0;p<g.length;p+=1)g[p].c();i=E(),a=m("section"),a.innerHTML=`<h3>Important links</h3> 
                        <ul class="flex-only-pc flex"><li class="fb-50"><a target="_blank" href="https://www.youtube.com/@SamJess">Youtube de Sam&amp;Jess</a></li> 
                            <li class="fb-50"><a target="_blank" href="https://www.instagram.com/samandjessofficial/">Instagram</a></li></ul>`,o=E(),s=m("div"),d=m("div"),u=m("h2"),P=O(_),S=E(),F=O(ft),z=E(),C=m("img"),b(a,"class","importantLinks"),b(n,"class","fb-50 descriptor fb-100-mobil"),b(d,"class","content"),ht(C.src,B=I+"/assets/images/samjess/low/artistic3dmatthew_samJess_low.png")||b(C,"src",B),b(C,"alt","Image erreur"),b(s,"class","fb-50 list only-pc"),b(e,"class","flex")},m(p,T){j(p,e,T),f(e,n),f(n,r),f(n,l),f(n,c);for(let h=0;h<g.length;h+=1)g[h]&&g[h].m(c,null);f(n,i),f(n,a),f(e,o),f(e,s),f(s,d),f(d,u),f(u,P),f(d,S),f(d,F),f(s,z),f(s,C)},p(p,T){if(T&3){k=Object.keys(p[7][0][0]);let h;for(h=0;h<k.length;h+=1){const K=W(p,k,h);g[h]?g[h].p(K,T):(g[h]=X(K),g[h].c(),g[h].m(c,null))}for(;h<g.length;h+=1)g[h].d(1);g.length=k.length}},d(p){p&&v(e),mt(g,p)}}}function X(t){let e,n,r=t[7][0][0][t[10]].libelle+"",l,c,i,a;function o(){return t[2](t[7],t[10])}return{c(){e=m("li"),n=O(">>"),l=O(r),c=O(`<<\r
                            `)},m(s,d){j(s,e,d),f(e,n),f(e,l),f(e,c),i||(a=gt(e,"click",o),i=!0)},p(s,d){t=s},d(s){s&&v(e),i=!1,a()}}}function It(t){let e;return{c(){e=m("h2"),e.textContent="Loading...."},m(n,r){j(n,e,r)},p:w,d(n){n&&v(e)}}}function Mt(t){let e,n,r,l,c,i;r=new Pt({});let a={ctx:t,current:null,token:null,hasCatch:!0,pending:It,then:Ct,catch:St,value:7,error:11};return Et(t[1],a),{c(){e=m("div"),n=m("main"),Ot(r.$$.fragment),l=E(),c=m("section"),a.block.c(),b(n,"class","listImages"),b(e,"id","body"),b(e,"class","index")},m(o,s){j(o,e,s),f(e,n),ct(r,n,null),f(n,l),f(n,c),a.block.m(c,a.anchor=null),a.mount=()=>c,a.anchor=null,i=!0},p(o,[s]){t=o,At(a,t,s)},i(o){i||(R(r.$$.fragment,o),i=!0)},o(o){lt(r.$$.fragment,o),i=!1},d(o){o&&v(e),st(r),a.block.d(),a.token=null,a=null}}}function Nt(t){window.open(t,"_blank")}function Z(t,e){fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({parameters:e})}).then(r=>r.json()).then(r=>{console.log(r)}).catch(r=>{console.error("Erreur lors de la requête POST :",r)})}function Tt(t,e,n){document.title="Artistic3DMatthew | Téléchargement";const r=new URLSearchParams(window.location.search);let l=r.get("grp"),c=r.get("src");l==null&&(l="3"),c==null&&(c="empty");let a=(async d=>{var u=await fetch(d),_=await u.json();return _})(I+"/quality/fr/"+l);function o(){Z(I+"/visits",[{driver:navigator.userAgent,source:c,type:0,url:null}])}return o(),[c,a,function(d,u){Nt(I+d[0][0][u].url),Z(I+"/visits",[{driver:navigator.userAgent,source:c,type:1,url:d[0][0][u].url}])}]}class Dt extends it{constructor(e){super(),ot(this,e,Tt,Mt,rt,{})}}let qt="https://justindelfraissy.fr/arts",Gt=qt,tt={};function at(t,e){return e=document.querySelector("#app"),e.innerHTML="",t=window.location.pathname.split("/"),console.log(t),t[1]=="arts"?tt=new Dt({target:e}):console.log("404"),tt}const I=Gt;let ut=window.location.pathname;at(ut,"#app");window.addEventListener("popstate",function(t){at(ut,"#body")});
