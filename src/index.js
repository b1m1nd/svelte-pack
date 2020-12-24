import"/svelte-pack/chunk.3I42H3S6.js";var lt={MODE:"production",NODE_ENV:"production",SSR:!1};function k(){}function it(t){return t()}function ct(){return Object.create(null)}function W(t){t.forEach(it)}function At(t){return typeof t=="function"}function C(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ct(t){return Object.keys(t).length===0}function Et(t,...e){if(t==null)return k;let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function L(t,e,n){t.$$.on_destroy.push(Et(e,n))}function m(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function T(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function y(){return x(" ")}function Q(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function j(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pt(t){return Array.from(t.childNodes)}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}var at;function M(t){at=t}var B=[],ut=[],K=[],ft=[],Ot=Promise.resolve(),X=!1;function Dt(){X||(X=!0,Ot.then(dt))}function Y(t){K.push(t)}var Z=!1,tt=new Set;function dt(){if(Z)return;Z=!0;do{for(let t=0;t<B.length;t+=1){let e=B[t];M(e),Nt(e.$$)}for(M(null),B.length=0;ut.length;)ut.pop()();for(let t=0;t<K.length;t+=1){let e=K[t];tt.has(e)||(tt.add(e),e())}K.length=0}while(B.length);for(;ft.length;)ft.pop()();X=!1,Z=!1,tt.clear()}function Nt(t){if(t.fragment!==null){t.update(),W(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}var U=new Set,E;function et(){E={r:0,c:[],p:E}}function nt(){E.r||W(E.c),E=E.p}function P(t,e){t&&t.i&&(U.delete(t),t.i(e))}function H(t,e,n,s){if(t&&t.o){if(U.has(t))return;U.add(t),E.c.push(()=>{U.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function st(t){t&&t.c()}function z(t,e,n){let{fragment:s,on_mount:l,on_destroy:r,after_update:c}=t.$$;s&&s.m(e,n),Y(()=>{let f=l.map(it).filter(At);r?r.push(...f):W(f),t.$$.on_mount=[]}),c.forEach(Y)}function F(t,e){let n=t.$$;n.fragment!==null&&(W(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(B.push(t),Dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,n,s,l,r,c=[-1]){let f=at;M(t);let i=e.props||{},o=t.$$={fragment:null,ctx:null,props:r,update:k,not_equal:l,bound:ct(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:ct(),dirty:c,skip_bound:!1},_=!1;if(o.ctx=n?n(t,i,(a,$,...O)=>{let q=O.length?O[0]:$;return o.ctx&&l(o.ctx[a],o.ctx[a]=q)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](q),_&&Rt(t,a)),$}):[],o.update(),_=!0,W(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){let a=Pt(e.target);o.fragment&&o.fragment.l(a),a.forEach(b)}else o.fragment&&o.fragment.c();e.intro&&P(t.$$.fragment),z(t,e.target,e.anchor),dt()}M(f)}var N=class{$destroy(){F(this,1),this.$destroy=k}$on(e,n){let s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{let l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!Ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var R=[];function _t(t,e){return{subscribe:ot(t,e).subscribe}}function ot(t,e=k){let n,s=[];function l(f){if(C(t,f)&&(t=f,n)){let i=!R.length;for(let o=0;o<s.length;o+=1){let _=s[o];_[1](),R.push(_,t)}if(i){for(let o=0;o<R.length;o+=2)R[o][0](R[o+1]);R.length=0}}}function r(f){l(f(t))}function c(f,i=k){let o=[f,i];return s.push(o),s.length===1&&(n=e(l)||k),f(t),()=>{let _=s.indexOf(o);_!==-1&&s.splice(_,1),s.length===0&&(n(),n=null)}}return{set:l,update:r,subscribe:c}}var mt=ot([{id:1,question:"What's more reactive Svelte, React, or Angular?",answers:[{text:"Svelte",votes:28},{text:"React",votes:20},{text:"Angular",votes:0}]},{id:2,question:"What's better to write Svelte, React, or Angular?",answers:[{text:"Svelte",votes:18},{text:"React",votes:10},{text:"Angular",votes:0}]}]),Vt="https://cors-anywhere.herokuapp.com/",Wt="https://www.reddit.com/r/ProgrammerHumor/.json",Tt=t=>{if(!t&&typeof t!="string"||t.length===0)return;let e=/\.(jpe?g|png|gif)$/i;if(t.match(e))return!0},pt=_t([],async t=>{try{let e=await fetch(`${Vt}${Wt}`),n=await e.json();console.dir(n.data.children);let s=n.data.children.reduce((l,{data:r})=>{if(Tt(r.url)){let c={id:r.id,img:r.url,title:r.title,created:new Date(r.created*1e3).toDateString(),upVotes:r.ups,author:r.author};l=[c,...l]}return l},[]);t(s)}catch(e){let n="\u{1F4A9} something messed up";console.error(n,e)}});function Bt(t){let e,n,s,l,r,c,f,i,o;return{c(){e=v("div"),n=v("img"),l=y(),r=v("p"),c=x(t[1]),f=y(),i=v("i"),o=x(t[2]),n.src!==(s=t[0])&&j(n,"src",s),j(n,"alt",t[1]),j(n,"class","svelte-gavdqr"),j(r,"class","svelte-gavdqr"),j(e,"class","card")},m(_,a){w(_,e,a),m(e,n),m(e,l),m(e,r),m(r,c),m(r,f),m(r,i),m(i,o)},p(_,[a]){a&1&&n.src!==(s=_[0])&&j(n,"src",s),a&2&&j(n,"alt",_[1]),a&2&&S(c,_[1]),a&4&&S(o,_[2])},i:k,o:k,d(_){_&&b(e)}}}function Ht(t,e,n){let{url:s}=e,{title:l}=e,{date:r}=e;return t.$$set=c=>{"url"in c&&n(0,s=c.url),"title"in c&&n(1,l=c.title),"date"in c&&n(2,r=c.date)},[s,l,r]}var ht=class extends N{constructor(e){super();I(this,e,Ht,Bt,C,{url:0,title:1,date:2})}},gt=ht;function bt(t,e,n){let s=t.slice();return s[4]=e[n],s}function vt(t,e,n){let s=t.slice();return s[7]=e[n],s}function wt(t,e,n){let s=t.slice();return s[10]=e[n],s}function xt(t){let e,n;return e=new gt({props:{url:t[10].img,title:t[10].title,date:t[10].created}}),{c(){st(e.$$.fragment)},m(s,l){z(e,s,l),n=!0},p(s,l){let r={};l&2&&(r.url=s[10].img),l&2&&(r.title=s[10].title),l&2&&(r.date=s[10].created),e.$set(r)},i(s){if(n)return;P(e.$$.fragment,s),n=!0},o(s){H(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function yt(t){let e=t[7].text+"",n,s,l=t[7].votes+"",r,c,f;return{c(){n=x(e),s=x(" = "),r=x(l),c=y(),f=v("br")},m(i,o){w(i,n,o),w(i,s,o),w(i,r,o),w(i,c,o),w(i,f,o)},p(i,o){o&4&&e!==(e=i[7].text+"")&&S(n,e),o&4&&l!==(l=i[7].votes+"")&&S(r,l)},d(i){i&&b(n),i&&b(s),i&&b(r),i&&b(c),i&&b(f)}}}function kt(t){let e,n=t[4].question+"",s,l,r,c,f=t[4].answers,i=[];for(let o=0;o<f.length;o+=1)i[o]=yt(vt(t,f,o));return{c(){e=v("h3"),s=x(n),l=y(),r=v("p");for(let o=0;o<i.length;o+=1)i[o].c();c=y()},m(o,_){w(o,e,_),m(e,s),w(o,l,_),w(o,r,_);for(let a=0;a<i.length;a+=1)i[a].m(r,null);m(r,c)},p(o,_){if(_&4&&n!==(n=o[4].question+"")&&S(s,n),_&4){f=o[4].answers;let a;for(a=0;a<f.length;a+=1){let $=vt(o,f,a);i[a]?i[a].p($,_):(i[a]=yt($),i[a].c(),i[a].m(r,c))}for(;a<i.length;a+=1)i[a].d(1);i.length=f.length}},d(o){o&&b(e),o&&b(l),o&&b(r),T(i,o)}}}function Lt(t){let e,n,s,l,r,c,f,i,o,_=(t[0]===1?"time":"times")+"",a,$,O,q,J,rt,A=t[1],p=[];for(let d=0;d<A.length;d+=1)p[d]=xt(wt(t,A,d));let $t=d=>H(p[d],1,1,()=>{p[d]=null}),D=t[2],g=[];for(let d=0;d<D.length;d+=1)g[d]=kt(bt(t,D,d));return{c(){e=v("main"),n=v("h1"),n.textContent="This is Svelte-Pack!",s=y(),l=v("p"),l.textContent=`Hello ${It}`,r=y(),c=v("button"),f=x(`Clicked\r
    `),i=x(t[0]),o=y(),a=x(_),$=y();for(let d=0;d<p.length;d+=1)p[d].c();O=y();for(let d=0;d<g.length;d+=1)g[d].c();j(e,"class","svelte-1yo0bu")},m(d,h){w(d,e,h),m(e,n),m(e,s),m(e,l),m(e,r),m(e,c),m(c,f),m(c,i),m(c,o),m(c,a),m(e,$);for(let u=0;u<p.length;u+=1)p[u].m(e,null);m(e,O);for(let u=0;u<g.length;u+=1)g[u].m(e,null);q=!0,J||(rt=Q(c,"click",t[3]),J=!0)},p(d,[h]){if((!q||h&1)&&S(i,d[0]),(!q||h&1)&&_!==(_=(d[0]===1?"time":"times")+"")&&S(a,_),h&2){A=d[1];let u;for(u=0;u<A.length;u+=1){let V=wt(d,A,u);p[u]?(p[u].p(V,h),P(p[u],1)):(p[u]=xt(V),p[u].c(),P(p[u],1),p[u].m(e,O))}for(et(),u=A.length;u<p.length;u+=1)$t(u);nt()}if(h&4){D=d[2];let u;for(u=0;u<D.length;u+=1){let V=bt(d,D,u);g[u]?g[u].p(V,h):(g[u]=kt(V),g[u].c(),g[u].m(e,null))}for(;u<g.length;u+=1)g[u].d(1);g.length=D.length}},i(d){if(q)return;for(let h=0;h<A.length;h+=1)P(p[h]);q=!0},o(d){p=p.filter(Boolean);for(let h=0;h<p.length;h+=1)H(p[h]);q=!1},d(d){d&&b(e),T(p,d),T(g,d),J=!1,rt()}}}var It="World";function Mt(t,e,n){let s,l;L(t,pt,f=>n(1,s=f)),L(t,mt,f=>n(2,l=f));let r=0,c=()=>n(0,r++,r);return[r,s,l,c]}var jt=class extends N{constructor(e){super();I(this,e,Mt,Lt,C,{})}},St=jt,G={};G.env=lt;var qt=new St({target:document.querySelector("#app")}),Kt=qt;G.hot&&(G.hot.accept(),G.hot.dispose(()=>{qt.$destroy()}));export{Kt as default};
