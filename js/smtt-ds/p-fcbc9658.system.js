System.register([],(function(e,t){"use strict";return{execute:function(){const s="smtt-ds";let n;let l;let o;let $=false;let r=false;let i=false;let c=false;let a=0;let f=false;const u=typeof window!=="undefined"?window:{};const d=u.CSS;const m=u.document||{head:{}};const h={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n)};const g=(()=>(m.head.attachShadow+"").indexOf("[native")>-1)();const p=e=>Promise.resolve(e);const y=(()=>{try{new CSSStyleSheet;return true}catch(e){}return false})();const w=(e,t,s,n)=>{if(s){s.map(([s,n,l])=>{const o=R(e,s);const $=b(t,l);const r=N(s);h.ael(o,n,$,r);(t.$rmListeners$=t.$rmListeners$||[]).push(()=>h.rel(o,n,$,r))})}};const b=(e,t)=>s=>{{if(e.$flags$&256){e.$lazyInstance$[t](s)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,s])}}};const R=(e,t)=>{if(t&4)return m;if(t&8)return u;return e};const N=e=>(e&2)!==0;const S="{visibility:hidden}.hydrated{visibility:inherit}";const v="http://www.w3.org/1999/xlink";const L=(e,t="")=>{{return()=>{}}};const x=(e,t)=>{{return()=>{}}};const k=new WeakMap;const T=(e,t,s)=>{let n=ze.get(e);if(y&&s){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}ze.set(e,n)};const C=(e,t,s,n)=>{let l=E(t.$tagName$);let o=ze.get(l);e=e.nodeType===11?e:m;if(o){if(typeof o==="string"){e=e.head||e;let s=k.get(e);let $;if(!s){k.set(e,s=new Set)}if(!s.has(l)){{if(h.$cssShim$){$=h.$cssShim$.createHostStyle(n,l,o,!!(t.$flags$&10));const e=$["s-sc"];if(e){l=e;s=null}}else{$=m.createElement("style");$.innerHTML=o}e.insertBefore($,e.querySelector("link"))}if(s){s.add(l)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]}}return l};const j=e=>{const t=e.$cmpMeta$;const s=e.$hostElement$;const n=t.$flags$;const l=L("attachStyles",t.$tagName$);const o=C(g&&s.shadowRoot?s.shadowRoot:s.getRootNode(),t,e.$modeName$,s);if(n&10){s["s-sc"]=o;s.classList.add(o+"-h")}l()};const E=(e,t)=>"sc-"+e;const M={};const I="http://www.w3.org/2000/svg";const P="http://www.w3.org/1999/xhtml";const U=e=>e!=null;const A=e=>{e=typeof e;return e==="object"||e==="function"};const O=e=>`__sc_import_${e.replace(/\s|-/g,"_")}`;const B=e("h",(e,t,...s)=>{let n=null;let l=null;let o=null;let $=false;let r=false;let i=[];const c=t=>{for(let s=0;s<t.length;s++){n=t[s];if(Array.isArray(n)){c(n)}else if(n!=null&&typeof n!=="boolean"){if($=typeof e!=="function"&&!A(n)){n=String(n)}if($&&r){i[i.length-1].$text$+=n}else{i.push($?z(null,n):n)}r=$}}};c(s);if(t){if(t.key){l=t.key}if(t.name){o=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter(t=>e[t]).join(" ")}}}const a=z(e,null);a.$attrs$=t;if(i.length>0){a.$children$=i}{a.$key$=l}{a.$name$=o}return a});const z=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{s.$attrs$=null}{s.$key$=null}{s.$name$=null}return s};const _=e("H",{});const q=e=>e&&e.$tag$===_;const H=(e,t,s,n,l,o)=>{if(s!==n){let r=Ue(e,t);let i=t.toLowerCase();if(t==="class"){const t=e.classList;const l=F(s);const o=F(n);t.remove(...l.filter(e=>e&&!o.includes(e)));t.add(...o.filter(e=>e&&!l.includes(e)))}else if(t==="style"){{for(const t in s){if(!n||n[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in n){if(!s||n[t]!==s[t]){if(t.includes("-")){e.style.setProperty(t,n[t])}else{e.style[t]=n[t]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!r&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Ue(u,i)){t=i.slice(2)}else{t=i[2]+t.slice(3)}if(s){h.rel(e,t,s,false)}if(n){h.ael(e,t,n,false)}}else{const c=A(n);if((r||c&&n!==null)&&!l){try{if(!e.tagName.includes("-")){let l=n==null?"":n;if(t==="list"){r=false}else if(s==null||e[t]!=l){e[t]=l}}else{e[t]=n}}catch($){}}let a=false;{if(i!==(i=i.replace(/^xlink\:?/,""))){t=i;a=true}}if(n==null||n===false){if(a){e.removeAttributeNS(v,t)}else{e.removeAttribute(t)}}else if((!r||o&4||l)&&!c){n=n===true?"":n;if(a){e.setAttributeNS(v,t,n)}else{e.setAttribute(t,n)}}}}};const V=/\s/;const F=e=>!e?[]:e.split(V);const W=(e,t,s,n)=>{const l=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;const o=e&&e.$attrs$||M;const $=t.$attrs$||M;{for(n in o){if(!(n in $)){H(l,n,o[n],undefined,s,t.$flags$)}}}for(n in $){H(l,n,o[n],$[n],s,t.$flags$)}};const D=(e,t,s,r)=>{let a=t.$children$[s];let f=0;let u;let d;let h;if(!$){i=true;if(a.$tag$==="slot"){if(n){r.classList.add(n+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){u=a.$elm$=m.createTextNode(a.$text$)}else if(a.$flags$&1){u=a.$elm$=m.createTextNode("")}else{if(!c){c=a.$tag$==="svg"}u=a.$elm$=m.createElementNS(c?I:P,a.$flags$&2?"slot-fb":a.$tag$);if(c&&a.$tag$==="foreignObject"){c=false}{W(null,a,c)}if(U(n)&&u["s-si"]!==n){u.classList.add(u["s-si"]=n)}if(a.$children$){for(f=0;f<a.$children$.length;++f){d=D(e,a,f,u);if(d){u.appendChild(d)}}}{if(a.$tag$==="svg"){c=false}else if(u.tagName==="foreignObject"){c=true}}}{u["s-hn"]=o;if(a.$flags$&(2|1)){u["s-sr"]=true;u["s-cr"]=l;u["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[s];if(h&&h.$tag$===a.$tag$&&e.$elm$){Q(e.$elm$,false)}}}return u};const Q=(e,t)=>{h.$flags$|=1;const s=e.childNodes;for(let n=s.length-1;n>=0;n--){const e=s[n];if(e["s-hn"]!==o&&e["s-ol"]){Z(e).insertBefore(e,Y(e));e["s-ol"].remove();e["s-ol"]=undefined;i=true}if(t){Q(e,t)}}h.$flags$&=~1};const G=(e,t,s,n,l,$)=>{let r=e["s-cr"]&&e["s-cr"].parentNode||e;let i;if(r.shadowRoot&&r.tagName===o){r=r.shadowRoot}for(;l<=$;++l){if(n[l]){i=D(null,s,l,e);if(i){n[l].$elm$=i;r.insertBefore(i,Y(t))}}}};const J=(e,t,s,n,l)=>{for(;t<=s;++t){if(n=e[t]){l=n.$elm$;oe(n);{r=true;if(l["s-ol"]){l["s-ol"].remove()}else{Q(l,true)}}l.remove()}}};const K=(e,t,s,n)=>{let l=0;let o=0;let $=0;let r=0;let i=t.length-1;let c=t[0];let a=t[i];let f=n.length-1;let u=n[0];let d=n[f];let m;let h;while(l<=i&&o<=f){if(c==null){c=t[++l]}else if(a==null){a=t[--i]}else if(u==null){u=n[++o]}else if(d==null){d=n[--f]}else if(X(c,u)){ee(c,u);c=t[++l];u=n[++o]}else if(X(a,d)){ee(a,d);a=t[--i];d=n[--f]}else if(X(c,d)){if(c.$tag$==="slot"||d.$tag$==="slot"){Q(c.$elm$.parentNode,false)}ee(c,d);e.insertBefore(c.$elm$,a.$elm$.nextSibling);c=t[++l];d=n[--f]}else if(X(a,u)){if(c.$tag$==="slot"||d.$tag$==="slot"){Q(a.$elm$.parentNode,false)}ee(a,u);e.insertBefore(a.$elm$,c.$elm$);a=t[--i];u=n[++o]}else{$=-1;{for(r=l;r<=i;++r){if(t[r]&&t[r].$key$!==null&&t[r].$key$===u.$key$){$=r;break}}}if($>=0){h=t[$];if(h.$tag$!==u.$tag$){m=D(t&&t[o],s,$,e)}else{ee(h,u);t[$]=undefined;m=h.$elm$}u=n[++o]}else{m=D(t&&t[o],s,o,e);u=n[++o]}if(m){{Z(c.$elm$).insertBefore(m,Y(c.$elm$))}}}}if(l>i){G(e,n[f+1]==null?null:n[f+1].$elm$,s,n,o,f)}else if(o>f){J(t,l,i)}};const X=(e,t)=>{if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};const Y=e=>e&&e["s-ol"]||e;const Z=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const ee=(e,t)=>{const s=t.$elm$=e.$elm$;const n=e.$children$;const l=t.$children$;const o=t.$tag$;const $=t.$text$;let r;if($===null){{c=o==="svg"?true:o==="foreignObject"?false:c}{if(o==="slot");else{W(e,t,c)}}if(n!==null&&l!==null){K(s,n,t,l)}else if(l!==null){if(e.$text$!==null){s.textContent=""}G(s,null,t,l,0,l.length-1)}else if(n!==null){J(n,0,n.length-1)}if(c&&o==="svg"){c=false}}else if(r=s["s-cr"]){r.parentNode.textContent=$}else if(e.$text$!==$){s.data=$}};const te=e=>{let t=e.childNodes;let s;let n;let l;let o;let $;let r;for(n=0,l=t.length;n<l;n++){s=t[n];if(s.nodeType===1){if(s["s-sr"]){$=s["s-sn"];s.hidden=false;for(o=0;o<l;o++){if(t[o]["s-hn"]!==s["s-hn"]){r=t[o].nodeType;if($!==""){if(r===1&&$===t[o].getAttribute("slot")){s.hidden=true;break}}else{if(r===1||r===3&&t[o].textContent.trim()!==""){s.hidden=true;break}}}}}te(s)}}};const se=[];const ne=e=>{let t;let s;let n;let l;let o;let $;let i=0;let c=e.childNodes;let a=c.length;for(;i<a;i++){t=c[i];if(t["s-sr"]&&(s=t["s-cr"])){n=s.parentNode.childNodes;l=t["s-sn"];for($=n.length-1;$>=0;$--){s=n[$];if(!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==t["s-hn"]){if(le(s,l)){o=se.find(e=>e.$nodeToRelocate$===s);r=true;s["s-sn"]=s["s-sn"]||l;if(o){o.$slotRefNode$=t}else{se.push({$slotRefNode$:t,$nodeToRelocate$:s})}if(s["s-sr"]){se.map(e=>{if(le(e.$nodeToRelocate$,s["s-sn"])){o=se.find(e=>e.$nodeToRelocate$===s);if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}})}}else if(!se.some(e=>e.$nodeToRelocate$===s)){se.push({$nodeToRelocate$:s})}}}}if(t.nodeType===1){ne(t)}}};const le=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const oe=e=>{{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(oe)}};const $e=(e,t)=>{const s=e.$hostElement$;const c=e.$cmpMeta$;const a=e.$vnode$||z(null,null);const f=q(t)?t:B(null,null,t);o=s.tagName;if(c.$attrsToReflect$){f.$attrs$=f.$attrs$||{};c.$attrsToReflect$.map(([e,t])=>f.$attrs$[t]=s[e])}f.$tag$=null;f.$flags$|=4;e.$vnode$=f;f.$elm$=a.$elm$=s.shadowRoot||s;{n=s["s-sc"]}{l=s["s-cr"];$=g&&(c.$flags$&1)!==0;r=false}ee(a,f);{if(i){h.$flags$|=1;ne(f.$elm$);let e;let t;let s;let n;let l;let o;let $=0;for(;$<se.length;$++){e=se[$];t=e.$nodeToRelocate$;if(!t["s-ol"]){s=m.createTextNode("");s["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=s,t)}}for($=0;$<se.length;$++){e=se[$];t=e.$nodeToRelocate$;if(e.$slotRefNode$){n=e.$slotRefNode$.parentNode;l=e.$slotRefNode$.nextSibling;s=t["s-ol"];while(s=s.previousSibling){o=s["s-nr"];if(o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){l=o;break}}}if(!l&&n!==t.parentNode||t.nextSibling!==l){if(t!==l){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}n.insertBefore(t,l)}}}else{if(t.nodeType===1){t.hidden=true}}}h.$flags$&=~1}if(r){te(f.$elm$)}se.length=0}};const re=e("g",e=>Me(e).$hostElement$);const ie=e("d",(e,t,s)=>{const n=re(e);return{emit:e=>ce(n,t,{bubbles:!!(s&4),composed:!!(s&2),cancelable:!!(s&1),detail:e})}});const ce=(e,t,s)=>{const n=new CustomEvent(t,s);e.dispatchEvent(n);return n};const ae=(e,t)=>{if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))}};const fe=(e,t)=>{{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}const s=L("scheduleUpdate",e.$cmpMeta$.$tagName$);const n=e.$ancestorComponent$;const l=e.$lazyInstance$;const o=()=>ue(e,l,t);ae(e,n);let $;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map(([e,t])=>pe(l,e,t));e.$queuedListeners$=null}}{$=pe(l,"componentWillLoad")}}s();return ye($,()=>Ge(o))};const ue=(e,t,s)=>{const n=e.$hostElement$;const l=L("update",e.$cmpMeta$.$tagName$);const o=n["s-rc"];if(s){j(e)}const $=L("render",e.$cmpMeta$.$tagName$);{{$e(e,de(t))}}if(h.$cssShim$){h.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(o){o.map(e=>e());n["s-rc"]=undefined}$();l();{const t=n["s-p"];const s=()=>me(e);if(t.length===0){s()}else{Promise.all(t).then(s);e.$flags$|=4;t.length=0}}};const de=e=>{try{e=e.render()}catch(t){Ae(t)}return e};const me=e=>{const t=e.$cmpMeta$.$tagName$;const s=e.$hostElement$;const n=L("postUpdate",t);const l=e.$lazyInstance$;const o=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{we(s)}{pe(l,"componentDidLoad")}n();{e.$onReadyResolve$(s);if(!o){ge()}}}else{n()}{e.$onInstanceResolve$(s)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Qe(()=>fe(e,false))}e.$flags$&=~(4|512)}};const he=e=>{{const t=Me(e);const s=t.$hostElement$.isConnected;if(s&&(t.$flags$&(2|16))===2){fe(t,false)}return s}};const ge=e=>{{we(m.documentElement)}{h.$flags$|=2}Qe(()=>ce(u,"appload",{detail:{namespace:s}}))};const pe=(e,t,s)=>{if(e&&e[t]){try{return e[t](s)}catch(n){Ae(n)}}return undefined};const ye=(e,t)=>e&&e.then?e.then(t):t();const we=e=>e.classList.add("hydrated");const be=(e,t)=>{if(e!=null&&!A(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};const Re=(e,t)=>Me(e).$instanceValues$.get(t);const Ne=(e,t,s,n)=>{const l=Me(e);const o=l.$instanceValues$.get(t);const $=l.$flags$;const r=l.$lazyInstance$;s=be(s,n.$members$[t][0]);if((!($&8)||o===undefined)&&s!==o){l.$instanceValues$.set(t,s);if(r){if(n.$watchers$&&$&128){const e=n.$watchers$[t];if(e){e.map(e=>{try{r[e](s,o,t)}catch(n){Ae(n)}})}}if(($&(2|16))===2){fe(l,false)}}}};const Se=(e,t,s)=>{if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}const n=Object.entries(t.$members$);const l=e.prototype;n.map(([e,[n]])=>{if(n&31||s&2&&n&32){Object.defineProperty(l,e,{get(){return Re(this,e)},set(s){Ne(this,e,s,t)},configurable:true,enumerable:true})}else if(s&1&&n&64){Object.defineProperty(l,e,{value(...t){const s=Me(this);return s.$onInstancePromise$.then(()=>s.$lazyInstance$[e](...t))}})}});if(s&1){const s=new Map;l.attributeChangedCallback=function(e,t,n){h.jmp(()=>{const t=s.get(e);this[t]=n===null&&typeof this[t]==="boolean"?false:n})};e.observedAttributes=n.filter(([e,t])=>t[0]&15).map(([e,n])=>{const l=n[1]||e;s.set(l,e);if(n[0]&512){t.$attrsToReflect$.push([e,l])}return l})}}return e};const ve=async(e,s,n,l,o)=>{if((s.$flags$&32)===0){s.$flags$|=32;{o=Be(n);if(o.then){const e=x();o=await o;e()}if(!o.isProxied){{n.$watchers$=o.watchers}Se(o,n,2);o.isProxied=true}const e=L("createInstance",n.$tagName$);{s.$flags$|=8}try{new o(s)}catch(i){Ae(i)}{s.$flags$&=~8}{s.$flags$|=128}e();Le(s.$lazyInstance$)}const e=E(n.$tagName$);if(!ze.has(e)&&o.style){const s=L("registerStyles",n.$tagName$);let l=o.style;if(n.$flags$&8){l=await t.import("./p-c75ab1d7.system.js").then(t=>t.scopeCss(l,e,false))}T(e,l,!!(n.$flags$&1));s()}}const $=s.$ancestorComponent$;const r=()=>fe(s,true);if($&&$["s-rc"]){$["s-rc"].push(r)}else{r()}};const Le=e=>{{pe(e,"connectedCallback")}};const xe=e=>{if((h.$flags$&1)===0){const t=Me(e);const s=t.$cmpMeta$;const n=L("connectedCallback",s.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(s.$flags$&(4|8)){ke(e)}}{let s=e;while(s=s.parentNode||s.host){if(s["s-p"]){ae(t,t.$ancestorComponent$=s);break}}}if(s.$members$){Object.entries(s.$members$).map(([t,[s]])=>{if(s&31&&e.hasOwnProperty(t)){const s=e[t];delete e[t];e[t]=s}})}{ve(e,t,s)}}else{w(e,t,s.$listeners$);Le(t.$lazyInstance$)}n()}};const ke=e=>{const t=e["s-cr"]=m.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const Te=e=>{if((h.$flags$&1)===0){const t=Me(e);{if(t.$rmListeners$){t.$rmListeners$.map(e=>e());t.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};const Ce=e("b",(e,t={})=>{const s=L();const n=[];const l=t.exclude||[];const o=u.customElements;const $=m.head;const r=$.querySelector("meta[charset]");const i=m.createElement("style");const c=[];let a;let f=true;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",m.baseURI).href;if(t.syncQueue){h.$flags$|=4}e.map(e=>e[1].map(t=>{const s={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{s.$members$=t[2]}{s.$listeners$=t[3]}{s.$attrsToReflect$=[]}{s.$watchers$={}}if(!g&&s.$flags$&1){s.$flags$|=8}const $=s.$tagName$;const r=class extends HTMLElement{constructor(e){super(e);e=this;Pe(e,s);if(s.$flags$&1){if(g){{e.attachShadow({mode:"open"})}}else if(!("shadowRoot"in e)){e.shadowRoot=e}}}connectedCallback(){if(a){clearTimeout(a);a=null}if(f){c.push(this)}else{h.jmp(()=>xe(this))}}disconnectedCallback(){h.jmp(()=>Te(this))}forceUpdate(){he(this)}componentOnReady(){return Me(this).$onReadyPromise$}};s.$lazyBundleIds$=e[0];if(!l.includes($)&&!o.get($)){n.push($);o.define($,Se(r,s,1))}}));{i.innerHTML=n+S;i.setAttribute("data-styles","");$.insertBefore(i,r?r.nextSibling:$.firstChild)}f=false;if(c.length){c.map(e=>e.connectedCallback())}else{{h.jmp(()=>a=setTimeout(ge,30))}}s()});const je=e("c",e=>{const t=new URL(e,h.$resourcesUrl$);return t.origin!==u.location.origin?t.href:t.pathname});const Ee=new WeakMap;const Me=e=>Ee.get(e);const Ie=e("r",(e,t)=>Ee.set(t.$lazyInstance$=e,t));const Pe=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{s.$onInstancePromise$=new Promise(e=>s.$onInstanceResolve$=e)}{s.$onReadyPromise$=new Promise(e=>s.$onReadyResolve$=e);e["s-p"]=[];e["s-rc"]=[]}w(e,s,t.$listeners$);return Ee.set(e,s)};const Ue=(e,t)=>t in e;const Ae=e=>console.error(e);const Oe=new Map;const Be=(e,s,n)=>{const l=e.$tagName$.replace(/-/g,"_");const o=e.$lazyBundleIds$;const $=Oe.get(o);if($){return $[l]}return t.import(`./${o}.entry.js${""}`).then(e=>{{Oe.set(o,e)}return e[l]},Ae)};const ze=new Map;const _e=[];const qe=[];const He=[];const Ve=(e,t)=>s=>{e.push(s);if(!f){f=true;if(t&&h.$flags$&4){Qe(De)}else{h.raf(De)}}};const Fe=e=>{for(let s=0;s<e.length;s++){try{e[s](performance.now())}catch(t){Ae(t)}}e.length=0};const We=(e,t)=>{let s=0;let n=0;while(s<e.length&&(n=performance.now())<t){try{e[s++](n)}catch(l){Ae(l)}}if(s===e.length){e.length=0}else if(s!==0){e.splice(0,s)}};const De=()=>{a++;Fe(_e);const e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;We(qe,e);We(He,e);if(qe.length>0){He.push(...qe);qe.length=0}if(f=_e.length+qe.length+He.length>0){h.raf(De)}else{a=0}};const Qe=e=>p().then(e);const Ge=Ve(qe,true);const Je=e("a",()=>{if(!(d&&d.supports&&d.supports("color","var(--c)"))){return t.import("./p-9c81688a.system.js").then(()=>{if(h.$cssShim$=u.__cssshim){return h.$cssShim$.i()}else{return 0}})}return p()});const Ke=e("p",()=>{{h.$cssShim$=u.__cssshim}const e=Array.from(m.querySelectorAll("script")).find(e=>new RegExp(`/${s}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===s);const n=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then(){}}}{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,u.location.href)).href;{Xe(n.resourcesUrl,e)}if(!u.customElements){return t.import("./p-2d6966bf.system.js").then(()=>n)}}return p(n)});const Xe=(e,t)=>{const n=O(s);try{u[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;u[n]=l=>{const o=new URL(l,e).href;let $=s.get(o);if(!$){const e=m.createElement("script");e.type="module";e.crossOrigin=t.crossOrigin;e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${n}.m = m;`],{type:"application/javascript"}));$=new Promise(t=>{e.onload=()=>{t(u[n].m);e.remove()}});s.set(o,$);m.head.appendChild(e)}return $}}}}}}));