(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Pr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const re={},pn=[],Ge=()=>{},uh=()=>!1,hh=/^on[^a-z]/,ni=t=>hh.test(t),Or=t=>t.startsWith("onUpdate:"),ge=Object.assign,Dr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fh=Object.prototype.hasOwnProperty,q=(t,e)=>fh.call(t,e),U=Array.isArray,_n=t=>si(t)==="[object Map]",yc=t=>si(t)==="[object Set]",$=t=>typeof t=="function",fe=t=>typeof t=="string",Mr=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",vc=t=>ae(t)&&$(t.then)&&$(t.catch),Ec=Object.prototype.toString,si=t=>Ec.call(t),dh=t=>si(t).slice(8,-1),bc=t=>si(t)==="[object Object]",Lr=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=Pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ii=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ph=/-(\w)/g,lt=ii(t=>t.replace(ph,(e,n)=>n?n.toUpperCase():"")),_h=/\B([A-Z])/g,xn=ii(t=>t.replace(_h,"-$1").toLowerCase()),ri=ii(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ti=ii(t=>t?`on${ri(t)}`:""),ts=(t,e)=>!Object.is(t,e),ks=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Po;const Yi=()=>Po||(Po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=fe(s)?vh(s):Fr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(fe(t))return t;if(ae(t))return t}}const mh=/;(?![^(]*\))/g,gh=/:([^]+)/,yh=/\/\*[^]*?\*\//g;function vh(t){const e={};return t.replace(yh,"").split(mh).forEach(n=>{if(n){const s=n.split(gh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Kt(t){let e="";if(fe(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=Kt(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Eh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bh=Pr(Eh);function Cc(t){return!!t||t===""}const Br=t=>fe(t)?t:t==null?"":U(t)||ae(t)&&(t.toString===Ec||!$(t.toString))?JSON.stringify(t,wc,2):String(t),wc=(t,e)=>e&&e.__v_isRef?wc(t,e.value):_n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:yc(e)?{[`Set(${e.size})`]:[...e.values()]}:ae(e)&&!U(e)&&!bc(e)?String(e):e;let $e;class Ch{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!e&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$e;try{return $e=this,e()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function wh(t,e=$e){e&&e.active&&e.effects.push(t)}function Ih(){return $e}const Ur=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ic=t=>(t.w&Ot)>0,Sc=t=>(t.n&Ot)>0,Sh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},Th=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ic(i)&&!Sc(i)?i.delete(t):e[n++]=i,i.w&=~Ot,i.n&=~Ot}e.length=n}},Qi=new WeakMap;let zn=0,Ot=1;const Ji=30;let je;const zt=Symbol(""),Xi=Symbol("");class Hr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wh(this,s)}run(){if(!this.active)return this.fn();let e=je,n=At;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=je,je=this,At=!0,Ot=1<<++zn,zn<=Ji?Sh(this):Oo(this),this.fn()}finally{zn<=Ji&&Th(this),Ot=1<<--zn,je=this.parent,At=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){je===this?this.deferStop=!0:this.active&&(Oo(this),this.onStop&&this.onStop(),this.active=!1)}}function Oo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let At=!0;const Tc=[];function kn(){Tc.push(At),At=!1}function Pn(){const t=Tc.pop();At=t===void 0?!0:t}function Me(t,e,n){if(At&&je){let s=Qi.get(t);s||Qi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ur()),Rc(i)}}function Rc(t,e){let n=!1;zn<=Ji?Sc(t)||(t.n|=Ot,n=!Ic(t)):n=!t.has(je),n&&(t.add(je),je.deps.push(t))}function mt(t,e,n,s,i,r){const o=Qi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&U(t)){const c=Number(s);o.forEach((a,u)=>{(u==="length"||u>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":U(t)?Lr(n)&&l.push(o.get("length")):(l.push(o.get(zt)),_n(t)&&l.push(o.get(Xi)));break;case"delete":U(t)||(l.push(o.get(zt)),_n(t)&&l.push(o.get(Xi)));break;case"set":_n(t)&&l.push(o.get(zt));break}if(l.length===1)l[0]&&Zi(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);Zi(Ur(c))}}function Zi(t,e){const n=U(t)?t:[...t];for(const s of n)s.computed&&Do(s);for(const s of n)s.computed||Do(s)}function Do(t,e){(t!==je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Rh=Pr("__proto__,__v_isRef,__isVue"),Ac=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mr)),Ah=$r(),Nh=$r(!1,!0),xh=$r(!0),Mo=kh();function kh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=G(this);for(let r=0,o=this.length;r<o;r++)Me(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){kn();const s=G(this)[e].apply(this,n);return Pn(),s}}),t}function Ph(t){const e=G(this);return Me(e,"has",t),e.hasOwnProperty(t)}function $r(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Gh:Oc:e?Pc:kc).get(s))return s;const o=U(s);if(!t){if(o&&q(Mo,i))return Reflect.get(Mo,i,r);if(i==="hasOwnProperty")return Ph}const l=Reflect.get(s,i,r);return(Mr(i)?Ac.has(i):Rh(i))||(t||Me(s,"get",i),e)?l:Te(l)?o&&Lr(i)?l:l.value:ae(l)?t?Mc(l):li(l):l}}const Oh=Nc(),Dh=Nc(!0);function Nc(t=!1){return function(n,s,i,r){let o=n[s];if(Cn(o)&&Te(o)&&!Te(i))return!1;if(!t&&(!Us(i)&&!Cn(i)&&(o=G(o),i=G(i)),!U(n)&&Te(o)&&!Te(i)))return o.value=i,!0;const l=U(n)&&Lr(s)?Number(s)<n.length:q(n,s),c=Reflect.set(n,s,i,r);return n===G(r)&&(l?ts(i,o)&&mt(n,"set",s,i):mt(n,"add",s,i)),c}}function Mh(t,e){const n=q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&mt(t,"delete",e,void 0),s}function Lh(t,e){const n=Reflect.has(t,e);return(!Mr(e)||!Ac.has(e))&&Me(t,"has",e),n}function Fh(t){return Me(t,"iterate",U(t)?"length":zt),Reflect.ownKeys(t)}const xc={get:Ah,set:Oh,deleteProperty:Mh,has:Lh,ownKeys:Fh},Bh={get:xh,set(t,e){return!0},deleteProperty(t,e){return!0}},Uh=ge({},xc,{get:Nh,set:Dh}),Wr=t=>t,oi=t=>Reflect.getPrototypeOf(t);function Cs(t,e,n=!1,s=!1){t=t.__v_raw;const i=G(t),r=G(e);n||(e!==r&&Me(i,"get",e),Me(i,"get",r));const{has:o}=oi(i),l=s?Wr:n?Kr:ns;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function ws(t,e=!1){const n=this.__v_raw,s=G(n),i=G(t);return e||(t!==i&&Me(s,"has",t),Me(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Is(t,e=!1){return t=t.__v_raw,!e&&Me(G(t),"iterate",zt),Reflect.get(t,"size",t)}function Lo(t){t=G(t);const e=G(this);return oi(e).has.call(e,t)||(e.add(t),mt(e,"add",t,t)),this}function Fo(t,e){e=G(e);const n=G(this),{has:s,get:i}=oi(n);let r=s.call(n,t);r||(t=G(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ts(e,o)&&mt(n,"set",t,e):mt(n,"add",t,e),this}function Bo(t){const e=G(this),{has:n,get:s}=oi(e);let i=n.call(e,t);i||(t=G(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&mt(e,"delete",t,void 0),r}function Uo(){const t=G(this),e=t.size!==0,n=t.clear();return e&&mt(t,"clear",void 0,void 0),n}function Ss(t,e){return function(s,i){const r=this,o=r.__v_raw,l=G(o),c=e?Wr:t?Kr:ns;return!t&&Me(l,"iterate",zt),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Ts(t,e,n){return function(...s){const i=this.__v_raw,r=G(i),o=_n(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Wr:e?Kr:ns;return!e&&Me(r,"iterate",c?Xi:zt),{next(){const{value:h,done:d}=a.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function It(t){return function(...e){return t==="delete"?!1:this}}function Hh(){const t={get(r){return Cs(this,r)},get size(){return Is(this)},has:ws,add:Lo,set:Fo,delete:Bo,clear:Uo,forEach:Ss(!1,!1)},e={get(r){return Cs(this,r,!1,!0)},get size(){return Is(this)},has:ws,add:Lo,set:Fo,delete:Bo,clear:Uo,forEach:Ss(!1,!0)},n={get(r){return Cs(this,r,!0)},get size(){return Is(this,!0)},has(r){return ws.call(this,r,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Ss(!0,!1)},s={get(r){return Cs(this,r,!0,!0)},get size(){return Is(this,!0)},has(r){return ws.call(this,r,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ts(r,!1,!1),n[r]=Ts(r,!0,!1),e[r]=Ts(r,!1,!0),s[r]=Ts(r,!0,!0)}),[t,n,e,s]}const[$h,Wh,jh,Vh]=Hh();function jr(t,e){const n=e?t?Vh:jh:t?Wh:$h;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const Kh={get:jr(!1,!1)},zh={get:jr(!1,!0)},qh={get:jr(!0,!1)},kc=new WeakMap,Pc=new WeakMap,Oc=new WeakMap,Gh=new WeakMap;function Yh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qh(t){return t.__v_skip||!Object.isExtensible(t)?0:Yh(dh(t))}function li(t){return Cn(t)?t:Vr(t,!1,xc,Kh,kc)}function Dc(t){return Vr(t,!1,Uh,zh,Pc)}function Mc(t){return Vr(t,!0,Bh,qh,Oc)}function Vr(t,e,n,s,i){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Qh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function mn(t){return Cn(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function Us(t){return!!(t&&t.__v_isShallow)}function Lc(t){return mn(t)||Cn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Fc(t){return Bs(t,"__v_skip",!0),t}const ns=t=>ae(t)?li(t):t,Kr=t=>ae(t)?Mc(t):t;function Bc(t){At&&je&&(t=G(t),Rc(t.dep||(t.dep=Ur())))}function Uc(t,e){t=G(t);const n=t.dep;n&&Zi(n)}function Te(t){return!!(t&&t.__v_isRef===!0)}function We(t){return Hc(t,!1)}function Jh(t){return Hc(t,!0)}function Hc(t,e){return Te(t)?t:new Xh(t,e)}class Xh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:ns(e)}get value(){return Bc(this),this._value}set value(e){const n=this.__v_isShallow||Us(e)||Cn(e);e=n?e:G(e),ts(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ns(e),Uc(this))}}function qt(t){return Te(t)?t.value:t}const Zh={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Te(i)&&!Te(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function $c(t){return mn(t)?t:new Proxy(t,Zh)}class ef{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Hr(e,()=>{this._dirty||(this._dirty=!0,Uc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=G(this);return Bc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tf(t,e,n=!1){let s,i;const r=$(t);return r?(s=t,i=Ge):(s=t.get,i=t.set),new ef(s,i,r||!i,n)}function Nt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ci(r,e,n)}return i}function Ye(t,e,n,s){if($(t)){const r=Nt(t,e,n,s);return r&&vc(r)&&r.catch(o=>{ci(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ye(t[r],e,n,s));return i}function ci(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Nt(c,null,10,[t,o,l]);return}}nf(t,n,i,s)}function nf(t,e,n,s=!0){console.error(t)}let ss=!1,er=!1;const Se=[];let rt=0;const gn=[];let ft=null,Ht=0;const Wc=Promise.resolve();let zr=null;function jc(t){const e=zr||Wc;return t?e.then(this?t.bind(this):t):e}function sf(t){let e=rt+1,n=Se.length;for(;e<n;){const s=e+n>>>1;is(Se[s])<t?e=s+1:n=s}return e}function qr(t){(!Se.length||!Se.includes(t,ss&&t.allowRecurse?rt+1:rt))&&(t.id==null?Se.push(t):Se.splice(sf(t.id),0,t),Vc())}function Vc(){!ss&&!er&&(er=!0,zr=Wc.then(zc))}function rf(t){const e=Se.indexOf(t);e>rt&&Se.splice(e,1)}function of(t){U(t)?gn.push(...t):(!ft||!ft.includes(t,t.allowRecurse?Ht+1:Ht))&&gn.push(t),Vc()}function Ho(t,e=ss?rt+1:0){for(;e<Se.length;e++){const n=Se[e];n&&n.pre&&(Se.splice(e,1),e--,n())}}function Kc(t){if(gn.length){const e=[...new Set(gn)];if(gn.length=0,ft){ft.push(...e);return}for(ft=e,ft.sort((n,s)=>is(n)-is(s)),Ht=0;Ht<ft.length;Ht++)ft[Ht]();ft=null,Ht=0}}const is=t=>t.id==null?1/0:t.id,lf=(t,e)=>{const n=is(t)-is(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zc(t){er=!1,ss=!0,Se.sort(lf);const e=Ge;try{for(rt=0;rt<Se.length;rt++){const n=Se[rt];n&&n.active!==!1&&Nt(n,null,14)}}finally{rt=0,Se.length=0,Kc(),ss=!1,zr=null,(Se.length||gn.length)&&zc()}}function cf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||re;d&&(i=n.map(m=>fe(m)?m.trim():m)),h&&(i=n.map(Gi))}let l,c=s[l=Ti(e)]||s[l=Ti(lt(e))];!c&&r&&(c=s[l=Ti(xn(e))]),c&&Ye(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ye(a,t,6,i)}}function qc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!$(t)){const c=a=>{const u=qc(a,e,!0);u&&(l=!0,ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ae(t)&&s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):ge(o,r),ae(t)&&s.set(t,o),o)}function ai(t,e){return!t||!ni(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,xn(e))||q(t,e))}let Fe=null,ui=null;function Hs(t){const e=Fe;return Fe=t,ui=t&&t.type.__scopeId||null,e}function ds(t){ui=t}function ps(){ui=null}function Ps(t,e=Fe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Jo(-1);const r=Hs(e);let o;try{o=t(...i)}finally{Hs(r),s._d&&Jo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ri(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:d,setupState:m,ctx:E,inheritAttrs:R}=t;let k,P;const D=Hs(t);try{if(n.shapeFlag&4){const B=i||s;k=it(u.call(B,B,h,r,m,d,E)),P=c}else{const B=e;k=it(B.length>1?B(r,{attrs:c,slots:l,emit:a}):B(r,null)),P=e.props?c:af(c)}}catch(B){Yn.length=0,ci(B,t,1),k=le(Qt)}let V=k;if(P&&R!==!1){const B=Object.keys(P),{shapeFlag:Ce}=V;B.length&&Ce&7&&(o&&B.some(Or)&&(P=uf(P,o)),V=wn(V,P))}return n.dirs&&(V=wn(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),k=V,Hs(D),k}const af=t=>{let e;for(const n in t)(n==="class"||n==="style"||ni(n))&&((e||(e={}))[n]=t[n]);return e},uf=(t,e)=>{const n={};for(const s in t)(!Or(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?$o(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ai(a,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?$o(s,o,a):!0:!!o;return!1}function $o(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ai(n,r))return!0}return!1}function ff({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const df=t=>t.__isSuspense;function pf(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):of(t)}const Rs={};function Os(t,e,n){return Gc(t,e,n)}function Gc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=re){var l;const c=Ih()===((l=ve)==null?void 0:l.scope)?ve:null;let a,u=!1,h=!1;if(Te(t)?(a=()=>t.value,u=Us(t)):mn(t)?(a=()=>t,s=!0):U(t)?(h=!0,u=t.some(B=>mn(B)||Us(B)),a=()=>t.map(B=>{if(Te(B))return B.value;if(mn(B))return Wt(B);if($(B))return Nt(B,c,2)})):$(t)?e?a=()=>Nt(t,c,2):a=()=>{if(!(c&&c.isUnmounted))return d&&d(),Ye(t,c,3,[m])}:a=Ge,e&&s){const B=a;a=()=>Wt(B())}let d,m=B=>{d=D.onStop=()=>{Nt(B,c,4)}},E;if(os)if(m=Ge,e?n&&Ye(e,c,3,[a(),h?[]:void 0,m]):a(),i==="sync"){const B=ld();E=B.__watcherHandles||(B.__watcherHandles=[])}else return Ge;let R=h?new Array(t.length).fill(Rs):Rs;const k=()=>{if(D.active)if(e){const B=D.run();(s||u||(h?B.some((Ce,Ae)=>ts(Ce,R[Ae])):ts(B,R)))&&(d&&d(),Ye(e,c,3,[B,R===Rs?void 0:h&&R[0]===Rs?[]:R,m]),R=B)}else D.run()};k.allowRecurse=!!e;let P;i==="sync"?P=k:i==="post"?P=()=>ke(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),P=()=>qr(k));const D=new Hr(a,P);e?n?k():R=D.run():i==="post"?ke(D.run.bind(D),c&&c.suspense):D.run();const V=()=>{D.stop(),c&&c.scope&&Dr(c.scope.effects,D)};return E&&E.push(V),V}function _f(t,e,n){const s=this.proxy,i=fe(t)?t.includes(".")?Yc(s,t):()=>s[t]:t.bind(s,s);let r;$(e)?r=e:(r=e.handler,n=e);const o=ve;In(this);const l=Gc(i,r.bind(s),n);return o?In(o):Gt(),l}function Yc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Wt(t,e){if(!ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Te(t))Wt(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)Wt(t[n],e);else if(yc(t)||_n(t))t.forEach(n=>{Wt(n,e)});else if(bc(t))for(const n in t)Wt(t[n],e);return t}function Ai(t,e){const n=Fe;if(n===null)return t;const s=_i(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,c,a=re]=e[r];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&Wt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a}))}return t}function Lt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(kn(),Ye(c,n,8,[t.el,l,t,e]),Pn())}}function Qc(t,e){return $(t)?(()=>ge({name:t.name},e,{setup:t}))():t}const Ds=t=>!!t.type.__asyncLoader,Jc=t=>t.type.__isKeepAlive;function mf(t,e){Xc(t,"a",e)}function gf(t,e){Xc(t,"da",e)}function Xc(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(hi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Jc(i.parent.vnode)&&yf(s,e,n,i),i=i.parent}}function yf(t,e,n,s){const i=hi(e,t,s,!0);ea(()=>{Dr(s[e],i)},n)}function hi(t,e,n=ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;kn(),In(n);const l=Ye(e,n,t,o);return Gt(),Pn(),l});return s?i.unshift(r):i.push(r),r}}const vt=t=>(e,n=ve)=>(!os||t==="sp")&&hi(t,(...s)=>e(...s),n),vf=vt("bm"),Zc=vt("m"),Ef=vt("bu"),bf=vt("u"),Cf=vt("bum"),ea=vt("um"),wf=vt("sp"),If=vt("rtg"),Sf=vt("rtc");function Tf(t,e=ve){hi("ec",t,e)}const ta="components";function na(t,e){return Af(ta,t,!0,e)||t}const Rf=Symbol.for("v-ndc");function Af(t,e,n=!0,s=!1){const i=Fe||ve;if(i){const r=i.type;if(t===ta){const l=id(r,!1);if(l&&(l===e||l===lt(e)||l===ri(lt(e))))return r}const o=Wo(i[t]||r[t],e)||Wo(i.appContext[t],e);return!o&&s?r:o}}function Wo(t,e){return t&&(t[e]||t[lt(e)]||t[ri(lt(e))])}function Ni(t,e,n,s){let i;const r=n&&n[s];if(U(t)||fe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ae(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const tr=t=>t?pa(t)?_i(t)||t.proxy:tr(t.parent):null,Gn=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tr(t.parent),$root:t=>tr(t.root),$emit:t=>t.emit,$options:t=>Gr(t),$forceUpdate:t=>t.f||(t.f=()=>qr(t.update)),$nextTick:t=>t.n||(t.n=jc.bind(t.proxy)),$watch:t=>_f.bind(t)}),xi=(t,e)=>t!==re&&!t.__isScriptSetup&&q(t,e),Nf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(xi(s,e))return o[e]=1,s[e];if(i!==re&&q(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&q(a,e))return o[e]=3,r[e];if(n!==re&&q(n,e))return o[e]=4,n[e];nr&&(o[e]=0)}}const u=Gn[e];let h,d;if(u)return e==="$attrs"&&Me(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==re&&q(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return xi(i,e)?(i[e]=n,!0):s!==re&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==re&&q(t,o)||xi(e,o)||(l=r[0])&&q(l,o)||q(s,o)||q(Gn,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jo(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nr=!0;function xf(t){const e=Gr(t),n=t.proxy,s=t.ctx;nr=!1,e.beforeCreate&&Vo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:E,activated:R,deactivated:k,beforeDestroy:P,beforeUnmount:D,destroyed:V,unmounted:B,render:Ce,renderTracked:Ae,renderTriggered:Xe,errorCaptured:at,serverPrefetch:sn,expose:Ze,inheritAttrs:Ct,components:Mt,directives:et,filters:Bn}=e;if(a&&kf(a,s,null),o)for(const te in o){const Y=o[te];$(Y)&&(s[te]=Y.bind(n))}if(i){const te=i.call(n,n);ae(te)&&(t.data=li(te))}if(nr=!0,r)for(const te in r){const Y=r[te],ut=$(Y)?Y.bind(n,n):$(Y.get)?Y.get.bind(n,n):Ge,wt=!$(Y)&&$(Y.set)?Y.set.bind(n):Ge,tt=Ve({get:ut,set:wt});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>tt.value,set:xe=>tt.value=xe})}if(l)for(const te in l)sa(l[te],s,n,te);if(c){const te=$(c)?c.call(n):c;Reflect.ownKeys(te).forEach(Y=>{Ms(Y,te[Y])})}u&&Vo(u,t,"c");function de(te,Y){U(Y)?Y.forEach(ut=>te(ut.bind(n))):Y&&te(Y.bind(n))}if(de(vf,h),de(Zc,d),de(Ef,m),de(bf,E),de(mf,R),de(gf,k),de(Tf,at),de(Sf,Ae),de(If,Xe),de(Cf,D),de(ea,B),de(wf,sn),U(Ze))if(Ze.length){const te=t.exposed||(t.exposed={});Ze.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>n[Y],set:ut=>n[Y]=ut})})}else t.exposed||(t.exposed={});Ce&&t.render===Ge&&(t.render=Ce),Ct!=null&&(t.inheritAttrs=Ct),Mt&&(t.components=Mt),et&&(t.directives=et)}function kf(t,e,n=Ge){U(t)&&(t=sr(t));for(const s in t){const i=t[s];let r;ae(i)?"default"in i?r=pt(i.from||s,i.default,!0):r=pt(i.from||s):r=pt(i),Te(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Vo(t,e,n){Ye(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sa(t,e,n,s){const i=s.includes(".")?Yc(n,s):()=>n[s];if(fe(t)){const r=e[t];$(r)&&Os(i,r)}else if($(t))Os(i,t.bind(n));else if(ae(t))if(U(t))t.forEach(r=>sa(r,e,n,s));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&Os(i,r,t)}}function Gr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>$s(c,a,o,!0)),$s(c,e,o)),ae(e)&&r.set(e,c),c}function $s(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&$s(t,r,n,!0),i&&i.forEach(o=>$s(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Pf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Pf={data:Ko,props:zo,emits:zo,methods:qn,computed:qn,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:qn,directives:qn,watch:Df,provide:Ko,inject:Of};function Ko(t,e){return e?t?function(){return ge($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Of(t,e){return qn(sr(t),sr(e))}function sr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function qn(t,e){return t?ge(Object.create(null),t,e):e}function zo(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:ge(Object.create(null),jo(t),jo(e??{})):e}function Df(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const s in e)n[s]=Ne(t[s],e[s]);return n}function ia(){return{app:null,config:{isNativeTag:uh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mf=0;function Lf(t,e){return function(s,i=null){$(s)||(s=ge({},s)),i!=null&&!ae(i)&&(i=null);const r=ia(),o=new Set;let l=!1;const c=r.app={_uid:Mf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:cd,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&$(a.install)?(o.add(a),a.install(c,...u)):$(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const d=le(s,i);return d.appContext=r,u&&e?e(d,a):t(d,a,h),l=!0,c._container=a,a.__vue_app__=c,_i(d.component)||d.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c},runWithContext(a){Ws=c;try{return a()}finally{Ws=null}}};return c}}let Ws=null;function Ms(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function pt(t,e,n=!1){const s=ve||Fe;if(s||Ws){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ws._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&$(e)?e.call(s&&s.proxy):e}}function Ff(t,e,n,s=!1){const i={},r={};Bs(r,di,1),t.propsDefaults=Object.create(null),ra(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Dc(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Bf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=G(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ai(t.emitsOptions,d))continue;const m=e[d];if(c)if(q(r,d))m!==r[d]&&(r[d]=m,a=!0);else{const E=lt(d);i[E]=ir(c,l,E,m,t,!1)}else m!==r[d]&&(r[d]=m,a=!0)}}}else{ra(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!q(e,h)&&((u=xn(h))===h||!q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ir(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!q(e,h))&&(delete r[h],a=!0)}a&&mt(t,"set","$attrs")}function ra(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(xs(c))continue;const a=e[c];let u;i&&q(i,u=lt(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:ai(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=G(n),a=l||re;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ir(i,c,h,a[h],t,!q(a,h))}}return o}function ir(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=q(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&$(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(In(i),s=a[n]=c.call(null,e),Gt())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===xn(n))&&(s=!0))}return s}function oa(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!$(t)){const u=h=>{c=!0;const[d,m]=oa(h,e,!0);ge(o,d),m&&l.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ae(t)&&s.set(t,pn),pn;if(U(r))for(let u=0;u<r.length;u++){const h=lt(r[u]);qo(h)&&(o[h]=re)}else if(r)for(const u in r){const h=lt(u);if(qo(h)){const d=r[u],m=o[h]=U(d)||$(d)?{type:d}:ge({},d);if(m){const E=Qo(Boolean,m.type),R=Qo(String,m.type);m[0]=E>-1,m[1]=R<0||E<R,(E>-1||q(m,"default"))&&l.push(h)}}}const a=[o,l];return ae(t)&&s.set(t,a),a}function qo(t){return t[0]!=="$"}function Go(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Yo(t,e){return Go(t)===Go(e)}function Qo(t,e){return U(e)?e.findIndex(n=>Yo(n,t)):$(e)&&Yo(e,t)?0:-1}const la=t=>t[0]==="_"||t==="$stable",Yr=t=>U(t)?t.map(it):[it(t)],Uf=(t,e,n)=>{if(e._n)return e;const s=Ps((...i)=>Yr(e(...i)),n);return s._c=!1,s},ca=(t,e,n)=>{const s=t._ctx;for(const i in t){if(la(i))continue;const r=t[i];if($(r))e[i]=Uf(i,r,s);else if(r!=null){const o=Yr(r);e[i]=()=>o}}},aa=(t,e)=>{const n=Yr(e);t.slots.default=()=>n},Hf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),Bs(e,"_",n)):ca(e,t.slots={})}else t.slots={},e&&aa(t,e);Bs(t.slots,di,1)},$f=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=re;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ge(i,e),!n&&l===1&&delete i._):(r=!e.$stable,ca(e,i)),o=e}else e&&(aa(t,e),o={default:1});if(r)for(const l in i)!la(l)&&!(l in o)&&delete i[l]};function rr(t,e,n,s,i=!1){if(U(t)){t.forEach((d,m)=>rr(d,e&&(U(e)?e[m]:e),n,s,i));return}if(Ds(s)&&!i)return;const r=s.shapeFlag&4?_i(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===re?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(fe(a)?(u[a]=null,q(h,a)&&(h[a]=null)):Te(a)&&(a.value=null)),$(c))Nt(c,l,12,[o,u]);else{const d=fe(c),m=Te(c);if(d||m){const E=()=>{if(t.f){const R=d?q(h,c)?h[c]:u[c]:c.value;i?U(R)&&Dr(R,r):U(R)?R.includes(r)||R.push(r):d?(u[c]=[r],q(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,q(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,ke(E,n)):E()}}}const ke=pf;function Wf(t){return jf(t)}function jf(t,e){const n=Yi();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Ge,insertStaticContent:E}=t,R=(f,p,_,g=null,v=null,b=null,A=!1,w=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!Hn(f,p)&&(g=y(f),xe(f,v,b,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:C,ref:L,shapeFlag:x}=p;switch(C){case fi:k(f,p,_,g);break;case Qt:P(f,p,_,g);break;case Ls:f==null&&D(p,_,g,A);break;case Pe:Mt(f,p,_,g,v,b,A,w,I);break;default:x&1?Ce(f,p,_,g,v,b,A,w,I):x&6?et(f,p,_,g,v,b,A,w,I):(x&64||x&128)&&C.process(f,p,_,g,v,b,A,w,I,T)}L!=null&&v&&rr(L,f&&f.ref,b,p||f,!p)},k=(f,p,_,g)=>{if(f==null)s(p.el=l(p.children),_,g);else{const v=p.el=f.el;p.children!==f.children&&a(v,p.children)}},P=(f,p,_,g)=>{f==null?s(p.el=c(p.children||""),_,g):p.el=f.el},D=(f,p,_,g)=>{[f.el,f.anchor]=E(f.children,p,_,g,f.el,f.anchor)},V=({el:f,anchor:p},_,g)=>{let v;for(;f&&f!==p;)v=d(f),s(f,_,g),f=v;s(p,_,g)},B=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},Ce=(f,p,_,g,v,b,A,w,I)=>{A=A||p.type==="svg",f==null?Ae(p,_,g,v,b,A,w,I):sn(f,p,v,b,A,w,I)},Ae=(f,p,_,g,v,b,A,w)=>{let I,C;const{type:L,props:x,shapeFlag:F,transition:H,dirs:W}=f;if(I=f.el=o(f.type,b,x&&x.is,x),F&8?u(I,f.children):F&16&&at(f.children,I,null,g,v,b&&L!=="foreignObject",A,w),W&&Lt(f,null,g,"created"),Xe(I,f,f.scopeId,A,g),x){for(const Z in x)Z!=="value"&&!xs(Z)&&r(I,Z,null,x[Z],b,f.children,g,v,we);"value"in x&&r(I,"value",null,x.value),(C=x.onVnodeBeforeMount)&&st(C,g,f)}W&&Lt(f,null,g,"beforeMount");const ne=(!v||v&&!v.pendingBranch)&&H&&!H.persisted;ne&&H.beforeEnter(I),s(I,p,_),((C=x&&x.onVnodeMounted)||ne||W)&&ke(()=>{C&&st(C,g,f),ne&&H.enter(I),W&&Lt(f,null,g,"mounted")},v)},Xe=(f,p,_,g,v)=>{if(_&&m(f,_),g)for(let b=0;b<g.length;b++)m(f,g[b]);if(v){let b=v.subTree;if(p===b){const A=v.vnode;Xe(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},at=(f,p,_,g,v,b,A,w,I=0)=>{for(let C=I;C<f.length;C++){const L=f[C]=w?Tt(f[C]):it(f[C]);R(null,L,p,_,g,v,b,A,w)}},sn=(f,p,_,g,v,b,A)=>{const w=p.el=f.el;let{patchFlag:I,dynamicChildren:C,dirs:L}=p;I|=f.patchFlag&16;const x=f.props||re,F=p.props||re;let H;_&&Ft(_,!1),(H=F.onVnodeBeforeUpdate)&&st(H,_,p,f),L&&Lt(p,f,_,"beforeUpdate"),_&&Ft(_,!0);const W=v&&p.type!=="foreignObject";if(C?Ze(f.dynamicChildren,C,w,_,g,W,b):A||Y(f,p,w,null,_,g,W,b,!1),I>0){if(I&16)Ct(w,p,x,F,_,g,v);else if(I&2&&x.class!==F.class&&r(w,"class",null,F.class,v),I&4&&r(w,"style",x.style,F.style,v),I&8){const ne=p.dynamicProps;for(let Z=0;Z<ne.length;Z++){const ue=ne[Z],He=x[ue],cn=F[ue];(cn!==He||ue==="value")&&r(w,ue,He,cn,v,f.children,_,g,we)}}I&1&&f.children!==p.children&&u(w,p.children)}else!A&&C==null&&Ct(w,p,x,F,_,g,v);((H=F.onVnodeUpdated)||L)&&ke(()=>{H&&st(H,_,p,f),L&&Lt(p,f,_,"updated")},g)},Ze=(f,p,_,g,v,b,A)=>{for(let w=0;w<p.length;w++){const I=f[w],C=p[w],L=I.el&&(I.type===Pe||!Hn(I,C)||I.shapeFlag&70)?h(I.el):_;R(I,C,L,null,g,v,b,A,!0)}},Ct=(f,p,_,g,v,b,A)=>{if(_!==g){if(_!==re)for(const w in _)!xs(w)&&!(w in g)&&r(f,w,_[w],null,A,p.children,v,b,we);for(const w in g){if(xs(w))continue;const I=g[w],C=_[w];I!==C&&w!=="value"&&r(f,w,C,I,A,p.children,v,b,we)}"value"in g&&r(f,"value",_.value,g.value)}},Mt=(f,p,_,g,v,b,A,w,I)=>{const C=p.el=f?f.el:l(""),L=p.anchor=f?f.anchor:l("");let{patchFlag:x,dynamicChildren:F,slotScopeIds:H}=p;H&&(w=w?w.concat(H):H),f==null?(s(C,_,g),s(L,_,g),at(p.children,_,L,v,b,A,w,I)):x>0&&x&64&&F&&f.dynamicChildren?(Ze(f.dynamicChildren,F,_,v,b,A,w),(p.key!=null||v&&p===v.subTree)&&ua(f,p,!0)):Y(f,p,_,L,v,b,A,w,I)},et=(f,p,_,g,v,b,A,w,I)=>{p.slotScopeIds=w,f==null?p.shapeFlag&512?v.ctx.activate(p,_,g,A,I):Bn(p,_,g,v,b,A,I):rn(f,p,I)},Bn=(f,p,_,g,v,b,A)=>{const w=f.component=Zf(f,g,v);if(Jc(f)&&(w.ctx.renderer=T),ed(w),w.asyncDep){if(v&&v.registerDep(w,de),!f.el){const I=w.subTree=le(Qt);P(null,I,p,_)}return}de(w,f,p,_,v,b,A)},rn=(f,p,_)=>{const g=p.component=f.component;if(hf(f,p,_))if(g.asyncDep&&!g.asyncResolved){te(g,p,_);return}else g.next=p,rf(g.update),g.update();else p.el=f.el,g.vnode=p},de=(f,p,_,g,v,b,A)=>{const w=()=>{if(f.isMounted){let{next:L,bu:x,u:F,parent:H,vnode:W}=f,ne=L,Z;Ft(f,!1),L?(L.el=W.el,te(f,L,A)):L=W,x&&ks(x),(Z=L.props&&L.props.onVnodeBeforeUpdate)&&st(Z,H,L,W),Ft(f,!0);const ue=Ri(f),He=f.subTree;f.subTree=ue,R(He,ue,h(He.el),y(He),f,v,b),L.el=ue.el,ne===null&&ff(f,ue.el),F&&ke(F,v),(Z=L.props&&L.props.onVnodeUpdated)&&ke(()=>st(Z,H,L,W),v)}else{let L;const{el:x,props:F}=p,{bm:H,m:W,parent:ne}=f,Z=Ds(p);if(Ft(f,!1),H&&ks(H),!Z&&(L=F&&F.onVnodeBeforeMount)&&st(L,ne,p),Ft(f,!0),x&&Q){const ue=()=>{f.subTree=Ri(f),Q(x,f.subTree,f,v,null)};Z?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ue()):ue()}else{const ue=f.subTree=Ri(f);R(null,ue,_,g,f,v,b),p.el=ue.el}if(W&&ke(W,v),!Z&&(L=F&&F.onVnodeMounted)){const ue=p;ke(()=>st(L,ne,ue),v)}(p.shapeFlag&256||ne&&Ds(ne.vnode)&&ne.vnode.shapeFlag&256)&&f.a&&ke(f.a,v),f.isMounted=!0,p=_=g=null}},I=f.effect=new Hr(w,()=>qr(C),f.scope),C=f.update=()=>I.run();C.id=f.uid,Ft(f,!0),C()},te=(f,p,_)=>{p.component=f;const g=f.vnode.props;f.vnode=p,f.next=null,Bf(f,p.props,g,_),$f(f,p.children,_),kn(),Ho(),Pn()},Y=(f,p,_,g,v,b,A,w,I=!1)=>{const C=f&&f.children,L=f?f.shapeFlag:0,x=p.children,{patchFlag:F,shapeFlag:H}=p;if(F>0){if(F&128){wt(C,x,_,g,v,b,A,w,I);return}else if(F&256){ut(C,x,_,g,v,b,A,w,I);return}}H&8?(L&16&&we(C,v,b),x!==C&&u(_,x)):L&16?H&16?wt(C,x,_,g,v,b,A,w,I):we(C,v,b,!0):(L&8&&u(_,""),H&16&&at(x,_,g,v,b,A,w,I))},ut=(f,p,_,g,v,b,A,w,I)=>{f=f||pn,p=p||pn;const C=f.length,L=p.length,x=Math.min(C,L);let F;for(F=0;F<x;F++){const H=p[F]=I?Tt(p[F]):it(p[F]);R(f[F],H,_,null,v,b,A,w,I)}C>L?we(f,v,b,!0,!1,x):at(p,_,g,v,b,A,w,I,x)},wt=(f,p,_,g,v,b,A,w,I)=>{let C=0;const L=p.length;let x=f.length-1,F=L-1;for(;C<=x&&C<=F;){const H=f[C],W=p[C]=I?Tt(p[C]):it(p[C]);if(Hn(H,W))R(H,W,_,null,v,b,A,w,I);else break;C++}for(;C<=x&&C<=F;){const H=f[x],W=p[F]=I?Tt(p[F]):it(p[F]);if(Hn(H,W))R(H,W,_,null,v,b,A,w,I);else break;x--,F--}if(C>x){if(C<=F){const H=F+1,W=H<L?p[H].el:g;for(;C<=F;)R(null,p[C]=I?Tt(p[C]):it(p[C]),_,W,v,b,A,w,I),C++}}else if(C>F)for(;C<=x;)xe(f[C],v,b,!0),C++;else{const H=C,W=C,ne=new Map;for(C=W;C<=F;C++){const Le=p[C]=I?Tt(p[C]):it(p[C]);Le.key!=null&&ne.set(Le.key,C)}let Z,ue=0;const He=F-W+1;let cn=!1,No=0;const Un=new Array(He);for(C=0;C<He;C++)Un[C]=0;for(C=H;C<=x;C++){const Le=f[C];if(ue>=He){xe(Le,v,b,!0);continue}let nt;if(Le.key!=null)nt=ne.get(Le.key);else for(Z=W;Z<=F;Z++)if(Un[Z-W]===0&&Hn(Le,p[Z])){nt=Z;break}nt===void 0?xe(Le,v,b,!0):(Un[nt-W]=C+1,nt>=No?No=nt:cn=!0,R(Le,p[nt],_,null,v,b,A,w,I),ue++)}const xo=cn?Vf(Un):pn;for(Z=xo.length-1,C=He-1;C>=0;C--){const Le=W+C,nt=p[Le],ko=Le+1<L?p[Le+1].el:g;Un[C]===0?R(null,nt,_,ko,v,b,A,w,I):cn&&(Z<0||C!==xo[Z]?tt(nt,_,ko,2):Z--)}}},tt=(f,p,_,g,v=null)=>{const{el:b,type:A,transition:w,children:I,shapeFlag:C}=f;if(C&6){tt(f.component.subTree,p,_,g);return}if(C&128){f.suspense.move(p,_,g);return}if(C&64){A.move(f,p,_,T);return}if(A===Pe){s(b,p,_);for(let x=0;x<I.length;x++)tt(I[x],p,_,g);s(f.anchor,p,_);return}if(A===Ls){V(f,p,_);return}if(g!==2&&C&1&&w)if(g===0)w.beforeEnter(b),s(b,p,_),ke(()=>w.enter(b),v);else{const{leave:x,delayLeave:F,afterLeave:H}=w,W=()=>s(b,p,_),ne=()=>{x(b,()=>{W(),H&&H()})};F?F(b,W,ne):ne()}else s(b,p,_)},xe=(f,p,_,g=!1,v=!1)=>{const{type:b,props:A,ref:w,children:I,dynamicChildren:C,shapeFlag:L,patchFlag:x,dirs:F}=f;if(w!=null&&rr(w,null,_,f,!0),L&256){p.ctx.deactivate(f);return}const H=L&1&&F,W=!Ds(f);let ne;if(W&&(ne=A&&A.onVnodeBeforeUnmount)&&st(ne,p,f),L&6)bs(f.component,_,g);else{if(L&128){f.suspense.unmount(_,g);return}H&&Lt(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,_,v,T,g):C&&(b!==Pe||x>0&&x&64)?we(C,p,_,!1,!0):(b===Pe&&x&384||!v&&L&16)&&we(I,p,_),g&&on(f)}(W&&(ne=A&&A.onVnodeUnmounted)||H)&&ke(()=>{ne&&st(ne,p,f),H&&Lt(f,null,p,"unmounted")},_)},on=f=>{const{type:p,el:_,anchor:g,transition:v}=f;if(p===Pe){ln(_,g);return}if(p===Ls){B(f);return}const b=()=>{i(_),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:w}=v,I=()=>A(_,b);w?w(f.el,b,I):I()}else b()},ln=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},bs=(f,p,_)=>{const{bum:g,scope:v,update:b,subTree:A,um:w}=f;g&&ks(g),v.stop(),b&&(b.active=!1,xe(A,f,p,_)),w&&ke(w,p),ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},we=(f,p,_,g=!1,v=!1,b=0)=>{for(let A=b;A<f.length;A++)xe(f[A],p,_,g,v)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),N=(f,p,_)=>{f==null?p._vnode&&xe(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,_),Ho(),Kc(),p._vnode=f},T={p:R,um:xe,m:tt,r:on,mt:Bn,mc:at,pc:Y,pbc:Ze,n:y,o:t};let O,Q;return e&&([O,Q]=e(T)),{render:N,hydrate:O,createApp:Lf(N,O)}}function Ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ua(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Tt(i[r]),l.el=o.el),n||ua(o,l)),l.type===fi&&(l.el=o.el)}}function Vf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Kf=t=>t.__isTeleport,Pe=Symbol.for("v-fgt"),fi=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),Ls=Symbol.for("v-stc"),Yn=[];let ze=null;function me(t=!1){Yn.push(ze=t?null:[])}function zf(){Yn.pop(),ze=Yn[Yn.length-1]||null}let rs=1;function Jo(t){rs+=t}function ha(t){return t.dynamicChildren=rs>0?ze||pn:null,zf(),rs>0&&ze&&ze.push(t),t}function be(t,e,n,s,i,r){return ha(M(t,e,n,s,i,r,!0))}function qf(t,e,n,s,i){return ha(le(t,e,n,s,i,!0))}function or(t){return t?t.__v_isVNode===!0:!1}function Hn(t,e){return t.type===e.type&&t.key===e.key}const di="__vInternal",fa=({key:t})=>t??null,Fs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||Te(t)||$(t)?{i:Fe,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,s=0,i=null,r=t===Pe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fa(e),ref:e&&Fs(e),scopeId:ui,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Fe};return l?(Qr(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),rs>0&&!o&&ze&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ze.push(c),c}const le=Gf;function Gf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Rf)&&(t=Qt),or(t)){const l=wn(t,e,!0);return n&&Qr(l,n),rs>0&&!r&&ze&&(l.shapeFlag&6?ze[ze.indexOf(t)]=l:ze.push(l)),l.patchFlag|=-2,l}if(rd(t)&&(t=t.__vccOpts),e){e=Yf(e);let{class:l,style:c}=e;l&&!fe(l)&&(e.class=Kt(l)),ae(c)&&(Lc(c)&&!U(c)&&(c=ge({},c)),e.style=Fr(c))}const o=fe(t)?1:df(t)?128:Kf(t)?64:ae(t)?4:$(t)?2:0;return M(t,e,n,s,i,o,r,!0)}function Yf(t){return t?Lc(t)||di in t?ge({},t):t:null}function wn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Qf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&fa(l),ref:e&&e.ref?n&&i?U(i)?i.concat(Fs(e)):[i,Fs(e)]:Fs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wn(t.ssContent),ssFallback:t.ssFallback&&wn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pi(t=" ",e=0){return le(fi,null,t,e)}function da(t,e){const n=le(Ls,null,t);return n.staticCount=e,n}function Xo(t="",e=!1){return e?(me(),qf(Qt,null,t)):le(Qt,null,t)}function it(t){return t==null||typeof t=="boolean"?le(Qt):U(t)?le(Pe,null,t.slice()):typeof t=="object"?Tt(t):le(fi,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wn(t)}function Qr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Qr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(di in e)?e._ctx=Fe:i===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),s&64?(n=16,e=[pi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Kt([e.class,s.class]));else if(i==="style")e.style=Fr([e.style,s.style]);else if(ni(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function st(t,e,n,s=null){Ye(t,e,7,[n,s])}const Jf=ia();let Xf=0;function Zf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Jf,r={uid:Xf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ch(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oa(s,i),emitsOptions:qc(s,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=cf.bind(null,r),t.ce&&t.ce(r),r}let ve=null,Jr,an,Zo="__VUE_INSTANCE_SETTERS__";(an=Yi()[Zo])||(an=Yi()[Zo]=[]),an.push(t=>ve=t),Jr=t=>{an.length>1?an.forEach(e=>e(t)):an[0](t)};const In=t=>{Jr(t),t.scope.on()},Gt=()=>{ve&&ve.scope.off(),Jr(null)};function pa(t){return t.vnode.shapeFlag&4}let os=!1;function ed(t,e=!1){os=e;const{props:n,children:s}=t.vnode,i=pa(t);Ff(t,n,i,e),Hf(t,s);const r=i?td(t,e):void 0;return os=!1,r}function td(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fc(new Proxy(t.ctx,Nf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?sd(t):null;In(t),kn();const r=Nt(s,t,0,[t.props,i]);if(Pn(),Gt(),vc(r)){if(r.then(Gt,Gt),e)return r.then(o=>{el(t,o,e)}).catch(o=>{ci(o,t,0)});t.asyncDep=r}else el(t,r,e)}else _a(t,e)}function el(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=$c(e)),_a(t,n)}let tl;function _a(t,e,n){const s=t.type;if(!t.render){if(!e&&tl&&!s.render){const i=s.template||Gr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=ge(ge({isCustomElement:r,delimiters:l},o),c);s.render=tl(i,a)}}t.render=s.render||Ge}In(t),kn(),xf(t),Pn(),Gt()}function nd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Me(t,"get","$attrs"),e[n]}}))}function sd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return nd(t)},slots:t.slots,emit:t.emit,expose:e}}function _i(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($c(Fc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}}))}function id(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function rd(t){return $(t)&&"__vccOpts"in t}const Ve=(t,e)=>tf(t,e,os);function ma(t,e,n){const s=arguments.length;return s===2?ae(e)&&!U(e)?or(e)?le(t,null,[e]):le(t,e):le(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&or(n)&&(n=[n]),le(t,e,n))}const od=Symbol.for("v-scx"),ld=()=>pt(od),cd="3.3.4",ad="http://www.w3.org/2000/svg",$t=typeof document<"u"?document:null,nl=$t&&$t.createElement("template"),ud={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?$t.createElementNS(ad,t):$t.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>$t.createTextNode(t),createComment:t=>$t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{nl.innerHTML=s?`<svg>${t}</svg>`:t;const l=nl.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function hd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function fd(t,e,n){const s=t.style,i=fe(n);if(n&&!i){if(e&&!fe(e))for(const r in e)n[r]==null&&lr(s,r,"");for(const r in n)lr(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const sl=/\s*!important$/;function lr(t,e,n){if(U(n))n.forEach(s=>lr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=dd(t,e);sl.test(n)?t.setProperty(xn(s),n.replace(sl,""),"important"):t[s]=n}}const il=["Webkit","Moz","ms"],ki={};function dd(t,e){const n=ki[e];if(n)return n;let s=lt(e);if(s!=="filter"&&s in t)return ki[e]=s;s=ri(s);for(let i=0;i<il.length;i++){const r=il[i]+s;if(r in t)return ki[e]=r}return e}const rl="http://www.w3.org/1999/xlink";function pd(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(rl,e.slice(6,e.length)):t.setAttributeNS(rl,e,n);else{const r=bh(e);n==null||r&&!Cc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function _d(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const a=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";a!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Cc(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function hn(t,e,n,s){t.addEventListener(e,n,s)}function md(t,e,n,s){t.removeEventListener(e,n,s)}function gd(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=yd(e);if(s){const a=r[e]=bd(s,i);hn(t,l,a,c)}else o&&(md(t,l,o,c),r[e]=void 0)}}const ol=/(?:Once|Passive|Capture)$/;function yd(t){let e;if(ol.test(t)){e={};let s;for(;s=t.match(ol);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xn(t.slice(2)),e]}let Pi=0;const vd=Promise.resolve(),Ed=()=>Pi||(vd.then(()=>Pi=0),Pi=Date.now());function bd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ye(Cd(s,n.value),e,5,[s])};return n.value=t,n.attached=Ed(),n}function Cd(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ll=/^on[a-z]/,wd=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?hd(t,s,i):e==="style"?fd(t,n,s):ni(e)?Or(e)||gd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Id(t,e,s,i))?_d(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),pd(t,e,s,i))};function Id(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ll.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ll.test(e)&&fe(n)?!1:e in t}const cl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>ks(e,n):e};function Sd(t){t.target.composing=!0}function al(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Oi={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=cl(i);const r=s||i.props&&i.props.type==="number";hn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Gi(l)),t._assign(l)}),n&&hn(t,"change",()=>{t.value=t.value.trim()}),e||(hn(t,"compositionstart",Sd),hn(t,"compositionend",al),hn(t,"change",al))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=cl(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Gi(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Td=ge({patchProp:wd},ud);let ul;function Rd(){return ul||(ul=Wf(Td))}const Ad=(...t)=>{const e=Rd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Nd(s);if(!i)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Nd(t){return fe(t)?document.querySelector(t):t}const Et=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},xd={},kd=t=>(ds("data-v-08644eb5"),t=t(),ps(),t),Pd=kd(()=>M("p",{class:"footer-text"},"@2023 By Ankush",-1)),Od=[Pd];function Dd(t,e){return me(),be("footer",null,Od)}const Md=Et(xd,[["render",Dd],["__scopeId","data-v-08644eb5"]]),Ld="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBklEQVR4nO1aS2gUQRAtma7dBD8o+EdQFC/eRDx48yB+QNGbPwRP3kQR9CSCePIDxh8i3hREFrPVuybRoJKjIp48aBJz8oMfNCIa3e4RR2qTHcedyWanu7O7iAVz2Zmt7lf1uuZ19QD8t3/Ugi6YVaLMNiXxtJLYrUn0K8JhJVGVL8JhTeI53+NnSoXM1oBgJrSCBT2QVRJ3K4m9SuJPLTFIc/F/FOEdRbiLfUHDAeSgXUtxSJN4k3by414kXmsSB4M+aGsICD/vbdJSDDkDEAf0widvw+TSiPDcpAGIXeIaZ94tiALM0xKfNA4Ejq4hwsdBJ8x1AuIHZZdwuhsNQv+h2iDPwS4TOZjDZbRpIGRIs6GgC+abgeiDtmbQSdeimUmJVoSXmz15HQdzwaDEWg4qUQVFmB1muBemKsIvtn79vLe+Pkr1QFZLMWAdQRK5at9aiqsO/L6o66VZfmM7oIFf8DbGfOfFGjc0EwcmzgZLBfuBXgU58MqTJ1xVup1ZHgnUMyf+e2osfBaALiKmCE+EPgk7tBTHIkAOOxkjjztrAel1AOLXj3x2WTnDfSAU4VvmdZj1AsxTErX1OBK7k2nVBbNMpHgCkAeJ1a8oVodZIVFwMI4f9MCMGBDeFDlJucTdERrdiPx+1vVYft7bnESrMw5AfK4o1kDCdEU4EongW6Za+d4VQEX4zkFWTiUB6XYA5FJkke+NRTCyz+Dtrn1WRDEGhFWmtWPCVZGJ3k8Y+FpIL5lZYT+e6E/KyCfL6Dyt+BqR7QuTCoci/BbkYFokaw8tGfAhCYiyjM7+SHaP1FP/NeE+KyCEJadAqgUiZ6fG4F2V57h8RguCdgTEglriJhgarxun1NIWirduaZ1gPnlrLej83GH5/SMQTSwIYIp5e0nEy69pXVeEx8Po5r31afUYm5biqCG1TsaAmMiG8oRuZZeGEyJxPUU0Q0U80tm+yETn+UkShRvKaZ0pwnt/bWUlfk0BZKCKEXdTZkMnikZDZzvC/xLuSU2PiCJWhNtTBjEs43EghLtSOBqO7p3TBmHMx7mqzv4nkyBabXWjrZmgExYYHiu8ryjisWCcT1EpM1DLuLVf5yRWumhYRJsUSuLKtHJooqy0QJsUxwMxWHfHkfcNTZ+wTKTzL1966+oCEaaZ8GILAulIBaJCMW4ctxCIRxMu8HHBFGF2a6wXMcRtJHBw0DPYRBAD32+1LbYCEWamE+Y2g2ZqlE5znICoPgzlytEgIFcm9ey9LNUnk2ok+lOXWFMbO0M5wFLB4Vp4yW/s5nwBwXTL487y9yWEvsEa8FnFsgA0Lq2ujfcGJcps4Tamknh77AOaj+FHNRI/jp6NiCLv7HhTxG1V5xP5b9Aa9hv3WGuinTwuQgAAAABJRU5ErkJggg==";const ct=t=>(ds("data-v-0ce118a8"),t=t(),ps(),t),Fd={class:"logo"},Bd=["src"],Ud=ct(()=>M("span",{class:"material-icons"},"keyboard_double_arrow_right",-1)),Hd=[Ud],$d=ct(()=>M("h3",null,"Menu",-1)),Wd={class:"menu"},jd=ct(()=>M("span",{class:"material-icons"},"home",-1)),Vd=ct(()=>M("span",{class:"text"},"Home",-1)),Kd=ct(()=>M("span",{class:"material-icons"},"hourglass_full",-1)),zd=ct(()=>M("span",{class:"text"},"Skills",-1)),qd=ct(()=>M("span",{class:"material-icons"},"perm_contact_calendar",-1)),Gd=ct(()=>M("span",{class:"text"},"Contact",-1)),Yd=ct(()=>M("div",{class:"flex"},null,-1)),Qd={class:"menu"},Jd={key:0,class:"material-symbols-outlined",style:{color:"gold"}},Xd={key:1,class:"material-symbols-outlined",style:{color:"gold"}},Zd=ct(()=>M("span",{class:"text"},"View Mode",-1)),ep={__name:"SideBar",setup(t){const e=We(localStorage.getItem("is_expanded")==="true"),n=We("false"),s=()=>{n.value=!n.value,n.value?(document.documentElement.style.setProperty("--primary","#2ecc71"),document.documentElement.style.setProperty("--primary-alt","#27ae60"),document.documentElement.style.setProperty("--grey","#95a5a6"),document.documentElement.style.setProperty("--dark","#34495e"),document.documentElement.style.setProperty("--dark-alt","#2c3e50"),document.documentElement.style.setProperty("--light","#ecf0f1")):(document.documentElement.style.setProperty("--primary","#4ade80"),document.documentElement.style.setProperty("--primary-alt","#22c55e"),document.documentElement.style.setProperty("--grey","#64748b"),document.documentElement.style.setProperty("--dark","#1e293b"),document.documentElement.style.setProperty("--dark-alt","#334155"),document.documentElement.style.setProperty("--light","#f1f5f9"))},i=()=>{e.value=!e.value,localStorage.setItem("is_expanded",e.value)};return(r,o)=>{const l=na("router-link");return me(),be("aside",{class:Kt(`${e.value?"is-expanded":""}`)},[M("div",Fd,[M("img",{src:qt(Ld),alt:"Vue"},null,8,Bd)]),M("div",{class:"menu-toggle-wrap"},[M("button",{class:"menu-toggle",onClick:i},Hd)]),$d,M("div",Wd,[le(l,{class:"button",to:"/"},{default:Ps(()=>[jd,Vd]),_:1}),le(l,{class:"button",to:"/skills"},{default:Ps(()=>[Kd,zd]),_:1}),le(l,{class:"button",to:"/contact"},{default:Ps(()=>[qd,Gd]),_:1})]),Yd,M("div",Qd,[M("div",{class:"button",onClick:s},[n.value==!1?(me(),be("span",Jd," light_mode ")):(me(),be("span",Xd," dark_mode ")),Zd])])],2)}}},tp=Et(ep,[["__scopeId","data-v-0ce118a8"]]);const np={class:"app"},sp={__name:"App",setup(t){return(e,n)=>{const s=na("router-view");return me(),be(Pe,null,[M("div",np,[le(tp),le(s)]),le(Md)],64)}}};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const fn=typeof window<"u";function ip(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Di(t,e){const n={};for(const s in e){const i=e[s];n[s]=Je(i)?i.map(t):t(i)}return n}const Qn=()=>{},Je=Array.isArray,rp=/\/$/,op=t=>t.replace(rp,"");function Mi(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=up(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function lp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Sn(e.matched[s],n.matched[i])&&ga(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ga(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ap(t[n],e[n]))return!1;return!0}function ap(t,e){return Je(t)?fl(t,e):Je(e)?fl(e,t):t===e}function fl(t,e){return Je(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function up(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ls;(function(t){t.pop="pop",t.push="push"})(ls||(ls={}));var Jn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jn||(Jn={}));function hp(t){if(!t)if(fn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),op(t)}const fp=/^[^#]+#/;function dp(t,e){return t.replace(fp,"#")+e}function pp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const mi=()=>({left:window.pageXOffset,top:window.pageYOffset});function _p(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=pp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function dl(t,e){return(history.state?history.state.position-e:-1)+t}const cr=new Map;function mp(t,e){cr.set(t,e)}function gp(t){const e=cr.get(t);return cr.delete(t),e}let yp=()=>location.protocol+"//"+location.host;function ya(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),hl(c,"")}return hl(n,t)+s+i}function vp(t,e,n,s){let i=[],r=[],o=null;const l=({state:d})=>{const m=ya(t,location),E=n.value,R=e.value;let k=0;if(d){if(n.value=m,e.value=d,o&&o===E){o=null;return}k=R?d.position-R.position:0}else s(m);i.forEach(P=>{P(n.value,E,{delta:k,type:ls.pop,direction:k?k>0?Jn.forward:Jn.back:Jn.unknown})})};function c(){o=n.value}function a(d){i.push(d);const m=()=>{const E=i.indexOf(d);E>-1&&i.splice(E,1)};return r.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(X({},d.state,{scroll:mi()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:a,destroy:h}}function pl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?mi():null}}function Ep(t){const{history:e,location:n}=window,s={value:ya(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:yp()+t+c;try{e[u?"replaceState":"pushState"](a,"",d),i.value=a}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,a){const u=X({},e.state,pl(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=X({},i.value,e.state,{forward:c,scroll:mi()});r(u.current,u,!0);const h=X({},pl(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function bp(t){t=hp(t);const e=Ep(t),n=vp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=X({location:"",base:t,go:s,createHref:dp.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Cp(t){return typeof t=="string"||t&&typeof t=="object"}function va(t){return typeof t=="string"||typeof t=="symbol"}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ea=Symbol("");var _l;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_l||(_l={}));function Tn(t,e){return X(new Error,{type:t,[Ea]:!0},e)}function ht(t,e){return t instanceof Error&&Ea in t&&(e==null||!!(t.type&e))}const ml="[^/]+?",wp={sensitive:!1,strict:!1,start:!0,end:!0},Ip=/[.+*?^${}()[\]/\\]/g;function Sp(t,e){const n=X({},wp,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const d=a[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Ip,"\\$&"),m+=40;else if(d.type===1){const{value:E,repeatable:R,optional:k,regexp:P}=d;r.push({name:E,repeatable:R,optional:k});const D=P||ml;if(D!==ml){m+=10;try{new RegExp(`(${D})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${E}" (${D}): `+B.message)}}let V=R?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(V=k&&a.length<2?`(?:/${V})`:"/"+V),k&&(V+="?"),i+=V,m+=20,k&&(m+=-8),R&&(m+=-20),D===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",E=r[d-1];h[E.name]=m&&E.repeatable?m.split("/"):m}return h}function c(a){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:R,optional:k}=m,P=E in a?a[E]:"";if(Je(P)&&!R)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const D=Je(P)?P.join("/"):P;if(!D)if(k)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);u+=D}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function Tp(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Rp(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Tp(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(gl(s))return 1;if(gl(i))return-1}return i.length-s.length}function gl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ap={type:0,value:""},Np=/[a-zA-Z0-9_]/;function xp(t){if(!t)return[[]];if(t==="/")return[[Ap]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${a}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){a&&(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function d(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Np.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function kp(t,e,n){const s=Sp(xp(t.path),n),i=X(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Pp(t,e){const n=[],s=new Map;e=El({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const m=!d,E=Op(u);E.aliasOf=d&&d.record;const R=El(e,u),k=[E];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of V)k.push(X({},E,{components:d?d.record.components:E.components,path:B,aliasOf:d?d.record:E}))}let P,D;for(const V of k){const{path:B}=V;if(h&&B[0]!=="/"){const Ce=h.record.path,Ae=Ce[Ce.length-1]==="/"?"":"/";V.path=h.record.path+(B&&Ae+B)}if(P=kp(V,h,R),d?d.alias.push(P):(D=D||P,D!==P&&D.alias.push(P),m&&u.name&&!vl(P)&&o(u.name)),E.children){const Ce=E.children;for(let Ae=0;Ae<Ce.length;Ae++)r(Ce[Ae],P,d&&d.children[Ae])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return D?()=>{o(D)}:Qn}function o(u){if(va(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function c(u){let h=0;for(;h<n.length&&Rp(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ba(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!vl(u)&&s.set(u.record.name,u)}function a(u,h){let d,m={},E,R;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Tn(1,{location:u});R=d.record.name,m=X(yl(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&yl(u.params,d.keys.map(D=>D.name))),E=d.stringify(m)}else if("path"in u)E=u.path,d=n.find(D=>D.re.test(E)),d&&(m=d.parse(E),R=d.record.name);else{if(d=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw Tn(1,{location:u,currentLocation:h});R=d.record.name,m=X({},h.params,u.params),E=d.stringify(m)}const k=[];let P=d;for(;P;)k.unshift(P.record),P=P.parent;return{name:R,path:E,params:m,matched:k,meta:Mp(k)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:a,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function yl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Op(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Dp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Dp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function vl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Mp(t){return t.reduce((e,n)=>X(e,n.meta),{})}function El(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ba(t,e){return e.children.some(n=>n===t||ba(t,n))}const Ca=/#/g,Lp=/&/g,Fp=/\//g,Bp=/=/g,Up=/\?/g,wa=/\+/g,Hp=/%5B/g,$p=/%5D/g,Ia=/%5E/g,Wp=/%60/g,Sa=/%7B/g,jp=/%7C/g,Ta=/%7D/g,Vp=/%20/g;function Xr(t){return encodeURI(""+t).replace(jp,"|").replace(Hp,"[").replace($p,"]")}function Kp(t){return Xr(t).replace(Sa,"{").replace(Ta,"}").replace(Ia,"^")}function ar(t){return Xr(t).replace(wa,"%2B").replace(Vp,"+").replace(Ca,"%23").replace(Lp,"%26").replace(Wp,"`").replace(Sa,"{").replace(Ta,"}").replace(Ia,"^")}function zp(t){return ar(t).replace(Bp,"%3D")}function qp(t){return Xr(t).replace(Ca,"%23").replace(Up,"%3F")}function Gp(t){return t==null?"":qp(t).replace(Fp,"%2F")}function js(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Yp(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(wa," "),o=r.indexOf("="),l=js(o<0?r:r.slice(0,o)),c=o<0?null:js(r.slice(o+1));if(l in e){let a=e[l];Je(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function bl(t){let e="";for(let n in t){const s=t[n];if(n=zp(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Je(s)?s.map(r=>r&&ar(r)):[s&&ar(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Qp(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Je(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Jp=Symbol(""),Cl=Symbol(""),Zr=Symbol(""),Ra=Symbol(""),ur=Symbol("");function $n(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(Tn(4,{from:n,to:e})):h instanceof Error?l(h):Cp(h)?l(Tn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},a=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(a);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function Li(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Xp(l)){const a=(l.__vccOpts||l)[e];a&&i.push(Rt(a,n,s,r,o))}else{let c=l();i.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=ip(a)?a.default:a;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Rt(d,n,s,r,o)()}))}}return i}function Xp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wl(t){const e=pt(Zr),n=pt(Ra),s=Ve(()=>e.resolve(qt(t.to))),i=Ve(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Sn.bind(null,u));if(d>-1)return d;const m=Il(c[a-2]);return a>1&&Il(u)===m&&h[h.length-1].path!==m?h.findIndex(Sn.bind(null,c[a-2])):d}),r=Ve(()=>i.value>-1&&n_(n.params,s.value.params)),o=Ve(()=>i.value>-1&&i.value===n.matched.length-1&&ga(n.params,s.value.params));function l(c={}){return t_(c)?e[qt(t.replace)?"replace":"push"](qt(t.to)).catch(Qn):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const Zp=Qc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wl,setup(t,{slots:e}){const n=li(wl(t)),{options:s}=pt(Zr),i=Ve(()=>({[Sl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Sl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ma("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),e_=Zp;function t_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function n_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Je(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Il(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sl=(t,e,n)=>t??e??n,s_=Qc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=pt(ur),i=Ve(()=>t.route||s.value),r=pt(Cl,0),o=Ve(()=>{let a=qt(r);const{matched:u}=i.value;let h;for(;(h=u[a])&&!h.components;)a++;return a}),l=Ve(()=>i.value.matched[o.value]);Ms(Cl,Ve(()=>o.value+1)),Ms(Jp,l),Ms(ur,i);const c=We();return Os(()=>[c.value,l.value,t.name],([a,u,h],[d,m,E])=>{u&&(u.instances[h]=a,m&&m!==u&&a&&a===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),a&&u&&(!m||!Sn(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(R=>R(a))},{flush:"post"}),()=>{const a=i.value,u=t.name,h=l.value,d=h&&h.components[u];if(!d)return Tl(n.default,{Component:d,route:a});const m=h.props[u],E=m?m===!0?a.params:typeof m=="function"?m(a):m:null,k=ma(d,X({},E,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Tl(n.default,{Component:k,route:a})||k}}});function Tl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const i_=s_;function r_(t){const e=Pp(t.routes,t),n=t.parseQuery||Yp,s=t.stringifyQuery||bl,i=t.history,r=$n(),o=$n(),l=$n(),c=Jh(St);let a=St;fn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Di.bind(null,y=>""+y),h=Di.bind(null,Gp),d=Di.bind(null,js);function m(y,N){let T,O;return va(y)?(T=e.getRecordMatcher(y),O=N):O=y,e.addRoute(O,T)}function E(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function R(){return e.getRoutes().map(y=>y.record)}function k(y){return!!e.getRecordMatcher(y)}function P(y,N){if(N=X({},N||c.value),typeof y=="string"){const _=Mi(n,y,N.path),g=e.resolve({path:_.path},N),v=i.createHref(_.fullPath);return X(_,g,{params:d(g.params),hash:js(_.hash),redirectedFrom:void 0,href:v})}let T;if("path"in y)T=X({},y,{path:Mi(n,y.path,N.path).path});else{const _=X({},y.params);for(const g in _)_[g]==null&&delete _[g];T=X({},y,{params:h(_)}),N.params=h(N.params)}const O=e.resolve(T,N),Q=y.hash||"";O.params=u(d(O.params));const f=lp(s,X({},y,{hash:Kp(Q),path:O.path})),p=i.createHref(f);return X({fullPath:f,hash:Q,query:s===bl?Qp(y.query):y.query||{}},O,{redirectedFrom:void 0,href:p})}function D(y){return typeof y=="string"?Mi(n,y,c.value.path):X({},y)}function V(y,N){if(a!==y)return Tn(8,{from:N,to:y})}function B(y){return Xe(y)}function Ce(y){return B(X(D(y),{replace:!0}))}function Ae(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:T}=N;let O=typeof T=="function"?T(y):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=D(O):{path:O},O.params={}),X({query:y.query,hash:y.hash,params:"path"in O?{}:y.params},O)}}function Xe(y,N){const T=a=P(y),O=c.value,Q=y.state,f=y.force,p=y.replace===!0,_=Ae(T);if(_)return Xe(X(D(_),{state:typeof _=="object"?X({},Q,_.state):Q,force:f,replace:p}),N||T);const g=T;g.redirectedFrom=N;let v;return!f&&cp(s,O,T)&&(v=Tn(16,{to:g,from:O}),tt(O,O,!0,!1)),(v?Promise.resolve(v):Ze(g,O)).catch(b=>ht(b)?ht(b,2)?b:wt(b):Y(b,g,O)).then(b=>{if(b){if(ht(b,2))return Xe(X({replace:p},D(b.to),{state:typeof b.to=="object"?X({},Q,b.to.state):Q,force:f}),N||g)}else b=Mt(g,O,!0,p,Q);return Ct(g,O,b),b})}function at(y,N){const T=V(y,N);return T?Promise.reject(T):Promise.resolve()}function sn(y){const N=ln.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function Ze(y,N){let T;const[O,Q,f]=o_(y,N);T=Li(O.reverse(),"beforeRouteLeave",y,N);for(const _ of O)_.leaveGuards.forEach(g=>{T.push(Rt(g,y,N))});const p=at.bind(null,y,N);return T.push(p),we(T).then(()=>{T=[];for(const _ of r.list())T.push(Rt(_,y,N));return T.push(p),we(T)}).then(()=>{T=Li(Q,"beforeRouteUpdate",y,N);for(const _ of Q)_.updateGuards.forEach(g=>{T.push(Rt(g,y,N))});return T.push(p),we(T)}).then(()=>{T=[];for(const _ of f)if(_.beforeEnter)if(Je(_.beforeEnter))for(const g of _.beforeEnter)T.push(Rt(g,y,N));else T.push(Rt(_.beforeEnter,y,N));return T.push(p),we(T)}).then(()=>(y.matched.forEach(_=>_.enterCallbacks={}),T=Li(f,"beforeRouteEnter",y,N),T.push(p),we(T))).then(()=>{T=[];for(const _ of o.list())T.push(Rt(_,y,N));return T.push(p),we(T)}).catch(_=>ht(_,8)?_:Promise.reject(_))}function Ct(y,N,T){l.list().forEach(O=>sn(()=>O(y,N,T)))}function Mt(y,N,T,O,Q){const f=V(y,N);if(f)return f;const p=N===St,_=fn?history.state:{};T&&(O||p?i.replace(y.fullPath,X({scroll:p&&_&&_.scroll},Q)):i.push(y.fullPath,Q)),c.value=y,tt(y,N,T,p),wt()}let et;function Bn(){et||(et=i.listen((y,N,T)=>{if(!bs.listening)return;const O=P(y),Q=Ae(O);if(Q){Xe(X(Q,{replace:!0}),O).catch(Qn);return}a=O;const f=c.value;fn&&mp(dl(f.fullPath,T.delta),mi()),Ze(O,f).catch(p=>ht(p,12)?p:ht(p,2)?(Xe(p.to,O).then(_=>{ht(_,20)&&!T.delta&&T.type===ls.pop&&i.go(-1,!1)}).catch(Qn),Promise.reject()):(T.delta&&i.go(-T.delta,!1),Y(p,O,f))).then(p=>{p=p||Mt(O,f,!1),p&&(T.delta&&!ht(p,8)?i.go(-T.delta,!1):T.type===ls.pop&&ht(p,20)&&i.go(-1,!1)),Ct(O,f,p)}).catch(Qn)}))}let rn=$n(),de=$n(),te;function Y(y,N,T){wt(y);const O=de.list();return O.length?O.forEach(Q=>Q(y,N,T)):console.error(y),Promise.reject(y)}function ut(){return te&&c.value!==St?Promise.resolve():new Promise((y,N)=>{rn.add([y,N])})}function wt(y){return te||(te=!y,Bn(),rn.list().forEach(([N,T])=>y?T(y):N()),rn.reset()),y}function tt(y,N,T,O){const{scrollBehavior:Q}=t;if(!fn||!Q)return Promise.resolve();const f=!T&&gp(dl(y.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return jc().then(()=>Q(y,N,f)).then(p=>p&&_p(p)).catch(p=>Y(p,y,N))}const xe=y=>i.go(y);let on;const ln=new Set,bs={currentRoute:c,listening:!0,addRoute:m,removeRoute:E,hasRoute:k,getRoutes:R,resolve:P,options:t,push:B,replace:Ce,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:de.add,isReady:ut,install(y){const N=this;y.component("RouterLink",e_),y.component("RouterView",i_),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(c)}),fn&&!on&&c.value===St&&(on=!0,B(i.location).catch(Q=>{}));const T={};for(const Q in St)Object.defineProperty(T,Q,{get:()=>c.value[Q],enumerable:!0});y.provide(Zr,N),y.provide(Ra,Dc(T)),y.provide(ur,c);const O=y.unmount;ln.add(y),y.unmount=function(){ln.delete(y),ln.size<1&&(a=St,et&&et(),et=null,c.value=St,on=!1,te=!1),O()}}};function we(y){return y.reduce((N,T)=>N.then(()=>sn(T)),Promise.resolve())}return bs}function o_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>Sn(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>Sn(a,c))||i.push(c))}return[n,s,i]}const l_={},c_={class:"social-buttons"},a_=da('<div class="social" data-v-e79bcedf><a target="_blank" rel="noreferrer" href="https://github.com/ACS-lessgo" class="social-link" data-v-e79bcedf><i class="fab fa-github green-icon" data-v-e79bcedf></i></a><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ankush-c-s-7b9305241/" class="social-link" data-v-e79bcedf><i class="fab fa-linkedin green-icon" data-v-e79bcedf></i></a><a target="_blank" rel="noreferrer" href="https://twitter.com/_gipsyDang4r" class="social-link" data-v-e79bcedf><i class="fab fa-twitter-square green-icon" data-v-e79bcedf></i></a><a href="mailto:ankushcs3327@gmail.com" class="social-link" data-v-e79bcedf><i class="fas fa-envelope green-icon" data-v-e79bcedf></i></a></div><hr class="small-hr" data-v-e79bcedf><div class="site-buttons" data-v-e79bcedf><button type="button" class="DriveBtn" data-v-e79bcedf><a href="https://drive.google.com/file/d/16Lo-KFX9FXvQ4BozJCqHEIPyHTvnKTva/view?usp=sharing" target="_blank" data-v-e79bcedf><span class="BtnText" data-v-e79bcedf>RESUME</span></a></button></div>',3),u_=[a_];function h_(t,e){return me(),be("div",c_,u_)}const f_=Et(l_,[["render",h_],["__scopeId","data-v-e79bcedf"]]),d_="/assets/my1-removebg-preview-a959a9a9.png",p_="/assets/my2-removebg-preview-a796445e.png",__="/assets/my3-removebg-preview-a36cf9c1.png",m_="/assets/my4-removebg-preview-aade72aa.png";const eo=t=>(ds("data-v-21100258"),t=t(),ps(),t),g_={class:"home-page"},y_={id:"home-container"},v_={class:"image-container"},E_=["src"],b_={class:"content-container"},C_=eo(()=>M("hr",{class:"small-hr"},null,-1)),w_=eo(()=>M("h1",{class:"fade-in"},"I'm Ankush",-1)),I_={class:"typing-text",style:{color:"gold"}},S_=eo(()=>M("span",{class:"typing-cursor"},"|",-1)),T_=da('<hr class="small-hr" data-v-21100258><p class="fade-in" data-v-21100258> &quot;I&#39;m a web developer with a strong coding background and a passion for creating beautiful, user-friendly websites. I&#39;m dedicated to continuously improving my skills and applying them in a professional context.&quot; </p><hr class="small-hr" data-v-21100258><ul class="no-bullets fade-in" data-v-21100258><li data-v-21100258>🚀 Passionate about exploring the edges of web applications.</li><li data-v-21100258> 📚 Have a strong appetite to learn new technologies in a short span and implement independently. </li><li data-v-21100258> 🔒 Proficient in Vue.js, JavaScript, and Java, committed to developing web applications with good coding standards. </li></ul><hr class="small-hr" data-v-21100258>',5),R_="Software Engineer",A_=100,N_=1e3,x_={__name:"Home",setup(t){const e=[d_,p_,__,m_];let n=0;const s=We(e[n]);function i(){n=(n+1)%e.length,s.value=e[n]}document.querySelectorAll(".fade-in").forEach((c,a)=>{c.style.animation=`fadeIn 1s ease forwards ${a/5+.5}s`});const o=We("");function l(c,a,u){let h=0,d=!1;function m(){!d&&h<c.length?(o.value+=c[h],h++,setTimeout(m,a)):!d&&h===c.length?(d=!0,setTimeout(m,u)):d&&h>0?(o.value=c.substring(0,h-1),h--,setTimeout(m,a)):(d=!1,h=0,setTimeout(m,a))}m()}return Zc(()=>{l(R_,A_,N_)}),(c,a)=>(me(),be("main",g_,[M("div",y_,[M("div",v_,[M("img",{src:s.value,alt:"my-emoji",onClick:i,class:"rounded-image"},null,8,E_)]),M("div",b_,[C_,w_,M("h2",I_,[pi(Br(o.value)+" ",1),S_]),T_])]),le(f_)]))}},k_=Et(x_,[["__scopeId","data-v-21100258"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw On(e)},On=function(t){return new Error("Firebase Database ("+Aa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},P_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},to={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|a>>6,m=a&63;c||(m=64,o||(d=64)),s.push(n[u],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Na(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):P_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw new O_;const d=r<<2|l>>4;if(s.push(d),a!==64){const m=l<<4&240|a>>2;if(s.push(m),h!==64){const E=a<<6&192|h;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class O_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xa=function(t){const e=Na(t);return to.encodeByteArray(e,!0)},Vs=function(t){return xa(t).replace(/\./g,"")},hr=function(t){try{return to.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){return ka(void 0,t)}function ka(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!M_(n)||(t[n]=ka(t[n],e[n]));return t}function M_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=()=>L_().__FIREBASE_DEFAULTS__,B_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},U_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hr(t[1]);return e&&JSON.parse(e)},Pa=()=>{try{return F_()||B_()||U_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},H_=t=>{var e,n;return(n=(e=Pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$_=t=>{const e=H_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Oa=()=>{var t;return(t=Pa())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Vs(JSON.stringify(n)),Vs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Da(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(j_())}function V_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ma(){return Aa.NODE_ADMIN===!0}function K_(){try{return typeof indexedDB=="object"}catch{return!1}}function z_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="FirebaseError";class _s extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=q_,Object.setPrototypeOf(this,_s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?G_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _s(i,l,s)}}function G_(t,e){return t.replace(Y_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Y_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=cs(hr(r[0])||""),n=cs(hr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Q_=function(t){const e=Fa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},J_=function(t){const e=Fa(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ks(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Al(r)&&Al(o)){if(!fr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Al(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function no(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){return t&&t._delegate?t._delegate:t}class as{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new gi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sm(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nm(t){return t===Bt?void 0:t}function sm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const rm={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},om=se.INFO,lm={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},cm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=lm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ba{constructor(e){this.name=e,this._logLevel=om,this._logHandler=cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const am=(t,e)=>e.some(n=>t instanceof n);let Nl,xl;function um(){return Nl||(Nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hm(){return xl||(xl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ua=new WeakMap,dr=new WeakMap,Ha=new WeakMap,Fi=new WeakMap,so=new WeakMap;function fm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(xt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ua.set(n,t)}).catch(()=>{}),so.set(e,t),e}function dm(t){if(dr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});dr.set(t,e)}let pr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ha.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pm(t){pr=t(pr)}function _m(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bi(this),e,...n);return Ha.set(s,e.sort?e.sort():[e]),xt(s)}:hm().includes(t)?function(...e){return t.apply(Bi(this),e),xt(Ua.get(this))}:function(...e){return xt(t.apply(Bi(this),e))}}function mm(t){return typeof t=="function"?_m(t):(t instanceof IDBTransaction&&dm(t),am(t,um())?new Proxy(t,pr):t)}function xt(t){if(t instanceof IDBRequest)return fm(t);if(Fi.has(t))return Fi.get(t);const e=mm(t);return e!==t&&(Fi.set(t,e),so.set(e,t)),e}const Bi=t=>so.get(t);function gm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=xt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(xt(o.result),c.oldVersion,c.newVersion,xt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const ym=["get","getKey","getAll","getAllKeys","count"],vm=["put","add","delete","clear"],Ui=new Map;function kl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ui.get(e))return Ui.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=vm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ym.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return Ui.set(e,r),r}pm(t=>({...t,get:(e,n,s)=>kl(e,n)||t.get(e,n,s),has:(e,n)=>!!kl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _r="@firebase/app",Pl="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Ba("@firebase/app"),Cm="@firebase/app-compat",wm="@firebase/analytics-compat",Im="@firebase/analytics",Sm="@firebase/app-check-compat",Tm="@firebase/app-check",Rm="@firebase/auth",Am="@firebase/auth-compat",Nm="@firebase/database",xm="@firebase/database-compat",km="@firebase/functions",Pm="@firebase/functions-compat",Om="@firebase/installations",Dm="@firebase/installations-compat",Mm="@firebase/messaging",Lm="@firebase/messaging-compat",Fm="@firebase/performance",Bm="@firebase/performance-compat",Um="@firebase/remote-config",Hm="@firebase/remote-config-compat",$m="@firebase/storage",Wm="@firebase/storage-compat",jm="@firebase/firestore",Vm="@firebase/firestore-compat",Km="firebase",zm="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="[DEFAULT]",qm={[_r]:"fire-core",[Cm]:"fire-core-compat",[Im]:"fire-analytics",[wm]:"fire-analytics-compat",[Tm]:"fire-app-check",[Sm]:"fire-app-check-compat",[Rm]:"fire-auth",[Am]:"fire-auth-compat",[Nm]:"fire-rtdb",[xm]:"fire-rtdb-compat",[km]:"fire-fn",[Pm]:"fire-fn-compat",[Om]:"fire-iid",[Dm]:"fire-iid-compat",[Mm]:"fire-fcm",[Lm]:"fire-fcm-compat",[Fm]:"fire-perf",[Bm]:"fire-perf-compat",[Um]:"fire-rc",[Hm]:"fire-rc-compat",[$m]:"fire-gcs",[Wm]:"fire-gcs-compat",[jm]:"fire-fst",[Vm]:"fire-fst-compat","fire-js":"fire-js",[Km]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Map,gr=new Map;function Gm(t,e){try{t.container.addComponent(e)}catch(n){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qs(t){const e=t.name;if(gr.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;gr.set(e,t);for(const n of zs.values())Gm(n,t);return!0}function Ym(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kt=new La("app","Firebase",Qm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=zm;function $a(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(n||(n=Oa()),!n)throw kt.create("no-options");const r=zs.get(i);if(r){if(fr(n,r.options)&&fr(s,r.config))return r;throw kt.create("duplicate-app",{appName:i})}const o=new im(i);for(const c of gr.values())o.addComponent(c);const l=new Jm(n,s,o);return zs.set(i,l),l}function Zm(t=mr){const e=zs.get(t);if(!e&&t===mr&&Oa())return $a();if(!e)throw kt.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let i=(s=qm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(l.join(" "));return}qs(new as(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="firebase-heartbeat-database",tg=1,us="firebase-heartbeat-store";let Hi=null;function Wa(){return Hi||(Hi=gm(eg,tg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(us)}}}).catch(t=>{throw kt.create("idb-open",{originalErrorMessage:t.message})})),Hi}async function ng(t){try{return await(await Wa()).transaction(us).objectStore(us).get(ja(t))}catch(e){if(e instanceof _s)Jt.warn(e.message);else{const n=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(n.message)}}}async function Ol(t,e){try{const s=(await Wa()).transaction(us,"readwrite");await s.objectStore(us).put(e,ja(t)),await s.done}catch(n){if(n instanceof _s)Jt.warn(n.message);else{const s=kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(s.message)}}}function ja(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=1024,ig=30*24*60*60*1e3;class rg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ig}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dl(),{heartbeatsToSend:n,unsentEntries:s}=og(this._heartbeatsCache.heartbeats),i=Vs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dl(){return new Date().toISOString().substring(0,10)}function og(t,e=sg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ml(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ml(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class lg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K_()?z_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ng(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ml(t){return Vs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){qs(new as("platform-logger",e=>new Em(e),"PRIVATE")),qs(new as("heartbeat",e=>new rg(e),"PRIVATE")),yn(_r,Pl,t),yn(_r,Pl,"esm2017"),yn("fire-js","")}cg("");const Ll="@firebase/database",Fl="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va="";function ag(t){Va=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:cs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ug(e)}}catch{}return new hg},jt=Ka("localStorage"),yr=Ka("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Ba("@firebase/database"),fg=function(){let t=1;return function(){return t++}}(),za=function(t){const e=em(t),n=new Z_;n.update(e);const s=n.digest();return to.encodeByteArray(s)},ms=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ms.apply(null,s):typeof s=="object"?e+=Ee(s):e+=s,e+=" "}return e};let Yt=null,Bl=!0;const dg=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(vn.logLevel=se.VERBOSE,Yt=vn.log.bind(vn),e&&yr.set("logging_enabled",!0)):typeof t=="function"?Yt=t:(Yt=null,yr.remove("logging_enabled"))},Ie=function(...t){if(Bl===!0&&(Bl=!1,Yt===null&&yr.get("logging_enabled")===!0&&dg(!0)),Yt){const e=ms.apply(null,t);Yt(e)}},gs=function(t){return function(...e){Ie(t,...e)}},vr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ms(...t);vn.error(e)},gt=function(...t){const e=`FIREBASE FATAL ERROR: ${ms(...t)}`;throw vn.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+ms(...t);vn.warn(e)},pg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qa=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_g=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},An="[MIN_NAME]",Xt="[MAX_NAME]",Mn=function(t,e){if(t===e)return 0;if(t===An||e===Xt)return-1;if(e===An||t===Xt)return 1;{const n=Ul(t),s=Ul(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},mg=function(t,e){return t===e?0:t<e?-1:1},Wn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},io=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ee(e[s]),n+=":",n+=io(t[e[s]]);return n+="}",n},Ga=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ya=function(t){S(!qa(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},gg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},vg=new RegExp("^-?(0*)\\d{1,10}$"),Eg=-2147483648,bg=2147483647,Ul=function(t){if(vg.test(t)){const e=Number(t);if(e>=Eg&&e<=bg)return e}return null},Ln=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},Cg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class En{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}En.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="5",Qa="v",Ja="s",Xa="r",Za="f",eu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,tu="ls",nu="p",Er="ac",su="websocket",iu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&jt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Sg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ou(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===su)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===iu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sg(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return D_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i={},Wi={};function oo(t){const e=t.toString();return $i[e]||($i[e]=new Tg),$i[e]}function Rg(t,e){const n=t.toString();return Wi[n]||(Wi[n]=e()),Wi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ln(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="start",Ng="close",xg="pLPCommand",kg="pRTLPCB",lu="id",cu="pw",au="ser",Pg="cb",Og="seg",Dg="ts",Mg="d",Lg="dframe",uu=1870,hu=30,Fg=uu-hu,Bg=25e3,Ug=3e4;class dn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gs(e),this.stats_=oo(n),this.urlFn=c=>(this.appCheckToken&&(c[Er]=this.appCheckToken),ou(n,iu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ag(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ug)),_g(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hl)this.id=l,this.password=c;else if(o===Ng)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hl]="t",s[au]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Pg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Qa]=ro,this.transportSessionId&&(s[Ja]=this.transportSessionId),this.lastSessionId&&(s[tu]=this.lastSessionId),this.applicationId&&(s[nu]=this.applicationId),this.appCheckToken&&(s[Er]=this.appCheckToken),typeof location<"u"&&location.hostname&&eu.test(location.hostname)&&(s[Xa]=Za);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dn.forceAllow_=!0}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){return dn.forceAllow_?!0:!dn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gg()&&!yg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xa(n),i=Ga(s,Fg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Lg]="t",s[lu]=e,s[cu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fg(),window[xg+this.uniqueCallbackIdentifier]=e,window[kg+this.uniqueCallbackIdentifier]=n,this.myIFrame=lo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lu]=this.myID,e[cu]=this.myPW,e[au]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hu+s.length<=uu;){const o=this.pendingSegs.shift();s=s+"&"+Og+i+"="+o.seg+"&"+Dg+i+"="+o.ts+"&"+Mg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Bg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=16384,$g=45e3;let Gs=null;typeof MozWebSocket<"u"?Gs=MozWebSocket:typeof WebSocket<"u"&&(Gs=WebSocket);class Ke{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gs(this.connId),this.stats_=oo(n),this.connURL=Ke.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Qa]=ro,typeof location<"u"&&location.hostname&&eu.test(location.hostname)&&(o[Xa]=Za),n&&(o[Ja]=n),s&&(o[tu]=s),i&&(o[Er]=i),r&&(o[nu]=r),ou(e,su,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jt.set("previous_websocket_failure",!0);try{let s;Ma(),this.mySock=new Gs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Gs!==null&&!Ke.forceDisallow_}static previouslyFailed(){return jt.isInMemoryStorage||jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){jt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=cs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ga(n,Hg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($g))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[dn,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ke&&Ke.isAvailable();let s=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ke];else{const i=this.transports_=[];for(const r of hs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);hs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=6e4,jg=5e3,Vg=10*1024,Kg=100*1024,ji="t",$l="d",zg="s",Wl="r",qg="e",jl="o",Vl="a",Kl="n",zl="p",Gg="h";class Yg{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gs("c:"+this.id+":"),this.transportManager_=new hs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ji in e){const n=e[ji];n===Vl?this.upgradeIfSecondaryHealthy_():n===Wl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wn(ji,e);if($l in e){const s=e[$l];if(n===Gg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Kl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zg?this.onConnectionShutdown_(s):n===Wl?this.onReset_(s):n===qg?vr("Server Error: "+s):n===jl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ro!==s&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Xn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Wg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends du{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Da()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ys}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=32,Gl=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new ce("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function pu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Qg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _u(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function mu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function he(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ce(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Be(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return Be(oe(t),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gu(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Jg{constructor(e,n){this.errorPrefix_=n,this.parts_=_u(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=yi(this.parts_[s]);yu(this)}}function Xg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=yi(e),yu(t)}function Zg(t){const e=t.parts_.pop();t.byteLength_-=yi(e),t.parts_.length>0&&(t.byteLength_-=1)}function yu(t){if(t.byteLength_>Gl)throw new Error(t.errorPrefix_+"has a key path longer than "+Gl+" bytes ("+t.byteLength_+").");if(t.parts_.length>ql)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ql+") or object contains a cycle "+Ut(t))}function Ut(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends du{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new co}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=1e3,ey=60*5*1e3,Yl=30*1e3,ty=1.3,ny=3e4,sy="server_kill",Ql=3;class _t extends fu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=_t.nextPersistentConnectionId_++,this.log_=gs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jn,this.maxReconnectDelay_=ey,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ma())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");co.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ys.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ee(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new gi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;_t.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const s=Rn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||J_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Q_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vr("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ny&&(this.reconnectDelay_=jn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ty)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_t.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Yg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{De(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(sy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&De(h),c())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rl(this.interruptReasons_)&&(this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>io(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ce(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ql&&(this.reconnectDelay_=Yl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ql&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Va.replace(/\./g,"-")]=1,Da()?e["framework.cordova"]=1:V_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ys.getInstance().currentlyOnline();return Rl(this.interruptReasons_)&&e}}_t.nextPersistentConnectionId_=0;_t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new z(An,e),i=new z(An,n);return this.compare(s,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;class vu extends vi{static get __EMPTY_NODE(){return As}static set __EMPTY_NODE(e){As=e}compare(e,n){return Mn(e.name,n.name)}isDefinedOn(e){throw On("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Xt,As)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,As)}toString(){return".key"}}const bn=new vu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class iy{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ns(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ns(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ns(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ns(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new iy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t,e){return Mn(t.name,e.name)}function ao(t,e){return Mn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br;function oy(t){br=t}const Eu=function(t){return typeof t=="number"?"number:"+Ya(t):"string:"+t},bu=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else S(t===br||t.isEmpty(),"priority of unexpected type.");S(t===br||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jl;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bu(this.priorityNode_)}static set __childrenNodeConstructor(e){Jl=e}static get __childrenNodeConstructor(){return Jl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:j(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Eu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ya(this.value_):e+=this.value_,this.lazyHash_=za(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu,wu;function ly(t){Cu=t}function cy(t){wu=t}class ay extends vi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Mn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Xt,new pe("[PRIORITY-POST]",wu))}makePost(e,n){const s=Cu(e);return new z(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Re=new ay;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=Math.log(2);class hy{constructor(e){const n=r=>parseInt(Math.log(r)/uy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qs=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new _e(d,h.node,_e.BLACK,null,null);{const m=parseInt(u/2,10)+c,E=i(c,m),R=i(m+1,a);return h=t[m],d=n?n(h):h,new _e(d,h.node,_e.BLACK,E,R)}},r=function(c){let a=null,u=null,h=t.length;const d=function(E,R){const k=h-E,P=h;h-=E;const D=i(k+1,P),V=t[k],B=n?n(V):V;m(new _e(B,V.node,R,null,D))},m=function(E){a?(a.left=E,a=E):(u=E,a=E)};for(let E=0;E<c.count;++E){const R=c.nextBitIsOne(),k=Math.pow(2,c.count-(E+1));R?d(k,_e.BLACK):(d(k,_e.BLACK),d(k,_e.RED))}return u},o=new hy(t.length),l=r(o);return new Oe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi;const un={};class dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(un&&Re,"ChildrenNode.ts has not been loaded"),Vi=Vi||new dt({".priority":un},{".priority":Re}),Vi}get(e){const n=Rn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Qs(s,e.getCompare()):l=un;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new dt(u,a)}addToIndexes(e,n){const s=Ks(this.indexes_,(i,r)=>{const o=Rn(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===un)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(z.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),Qs(l,o.getCompare())}else return un;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new z(e.name,l))),c.insert(e,e.node)}});return new dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ks(this.indexes_,i=>{if(i===un)return i;{const r=n.get(e.name);return r?i.remove(new z(e.name,r)):i}});return new dt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn;class J{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&bu(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Vn||(Vn=new J(new Oe(ao),null,dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vn}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vn:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Vn:this.priorityNode_;return new J(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{S(j(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(oe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Re,(o,l)=>{n[o]=l.val(e),s++,r&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Eu(this.getPriority().val())+":"),this.forEachChild(Re,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":za(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ys?-1:0}withIndex(e){if(e===bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Re),i=n.getIterator(Re);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bn?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fy extends J{constructor(){super(new Oe(ao),J.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const ys=new fy;Object.defineProperties(z,{MIN:{value:new z(An,J.EMPTY_NODE)},MAX:{value:new z(Xt,ys)}});vu.__EMPTY_NODE=J.EMPTY_NODE;pe.__childrenNodeConstructor=J;oy(ys);cy(ys);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=!0;function ye(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,ye(e))}if(!(t instanceof Array)&&dy){const n=[];let s=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=ye(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new z(o,c)))}}),n.length===0)return J.EMPTY_NODE;const r=Qs(n,ry,o=>o.name,ao);if(s){const o=Qs(n,Re.getCompare());return new J(r,ye(e),new dt({".priority":o},{".priority":Re}))}else return new J(r,ye(e),dt.Default)}else{let n=J.EMPTY_NODE;return Ue(t,(s,i)=>{if(bt(t,s)&&s.substring(0,1)!=="."){const r=ye(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ye(e))}}ly(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py extends vi{constructor(e){super(),this.indexPath_=e,S(!K(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Mn(e.name,n.name):r}makePost(e,n){const s=ye(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,ys);return new z(Xt,e)}toString(){return _u(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y extends vi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Mn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const s=ye(e);return new z(n,s)}toString(){return".value"}}const my=new _y;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t){return{type:"value",snapshotNode:t}}function yy(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vy(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ey(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:An}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new uo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Zl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Re?n="$priority":t.index_===my?n="$value":t.index_===bn?n="$key":(S(t.index_ instanceof py,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ee(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ee(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ee(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ec(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Re&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends fu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=gs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Js.getListenId_(e,s),l={};this.listens_[o]=l;const c=Zl(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),Rn(this.listens_,o)===l){let d;a?a===401?d="permission_denied":d="rest_error:"+a:d="ok",i(d,null)}})}unlisten(e,n){const s=Js.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Zl(e._queryParams),s=e._path.toString(),i=new gi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+X_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=cs(l.responseText)}catch{De("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(){return{value:null,children:new Map}}function Iu(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,Xs());const i=t.children.get(s);e=oe(e),Iu(i,e,n)}}function Cr(t,e,n){t.value!==null?n(e,t.value):Cy(t,(s,i)=>{const r=new ce(e.toString()+"/"+s);Cr(i,r,n)})}function Cy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=10*1e3,Iy=30*1e3,Sy=5*60*1e3;class Ty{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wy(e);const s=tc+(Iy-tc)*Math.random();Xn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ue(e,(i,r)=>{r>0&&bt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Xn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Sy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function Su(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ru(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ot.ACK_USER_WRITE,this.source=Su()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new Zs(ee(),n,this.revert)}}else return S(j(this.path)===e,"operationForChild called for unrelated child."),new Zs(oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ot.OVERWRITE}operationForChild(e){return K(this.path)?new Zt(this.source,ee(),this.snap.getImmediateChild(e)):new Zt(this.source,oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ot.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new Zt(this.source,ee(),n.value):new fs(this.source,ee(),n)}else return S(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fs(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Ry(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ey(o.childName,o.snapshotNode))}),Kn(t,i,"child_removed",e,s,n),Kn(t,i,"child_added",e,s,n),Kn(t,i,"child_moved",r,s,n),Kn(t,i,"child_changed",e,s,n),Kn(t,i,"value",e,s,n),i}function Kn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Ny(t,l,c)),o.forEach(l=>{const c=Ay(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Ay(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ny(t,e,n){if(e.childName==null||n.childName==null)throw On("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t,e){return{eventCache:t,serverCache:e}}function Zn(t,e,n,s){return Au(new ho(e,n,s),t.serverCache)}function Nu(t,e,n,s){return Au(t.eventCache,new ho(e,n,s))}function wr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function en(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki;const xy=()=>(Ki||(Ki=new Oe(mg)),Ki);class ie{constructor(e,n=xy()){this.value=e,this.children=n}static fromObject(e){let n=new ie(null);return Ue(e,(s,i)=>{n=n.set(new ce(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(K(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(oe(e),n);return r!=null?{path:he(new ce(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(oe(e)):new ie(null)}}set(e,n){if(K(e))return new ie(n,this.children);{const s=j(e),r=(this.children.get(s)||new ie(null)).set(oe(e),n),o=this.children.insert(s,r);return new ie(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(oe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ie(null):new ie(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(oe(e)):null}}setTree(e,n){if(K(e))return n;{const s=j(e),r=(this.children.get(s)||new ie(null)).setTree(oe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ie(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(he(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(oe(e),he(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(oe(e),he(n,i),s):new ie(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(he(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new ie(null))}}function es(t,e,n){if(K(e))return new Qe(new ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Be(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new ie(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function nc(t,e,n){let s=t;return Ue(n,(i,r)=>{s=es(s,he(e,i),r)}),s}function sc(t,e){if(K(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new Qe(n)}}function Ir(t,e){return tn(t,e)!=null}function tn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Be(n.path,e)):null}function ic(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Re,(s,i)=>{e.push(new z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new z(s,i.value))}),e}function Pt(t,e){if(K(e))return t;{const n=tn(t,e);return n!=null?new Qe(new ie(n)):new Qe(t.writeTree_.subtree(e))}}function Sr(t){return t.writeTree_.isEmpty()}function Nn(t,e){return xu(ee(),t.writeTree_,e)}function xu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=xu(he(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(he(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e){return Lu(e,t)}function ky(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=es(t.visibleWrites,e,n)),t.lastWriteId=s}function Py(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Oy(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Dy(l,s.path)?i=!1:qe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return My(t),!0;if(s.snap)t.visibleWrites=sc(t.visibleWrites,s.path);else{const l=s.children;Ue(l,c=>{t.visibleWrites=sc(t.visibleWrites,he(s.path,c))})}return!0}else return!1}function Dy(t,e){if(t.snap)return qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qe(he(t.path,n),e))return!0;return!1}function My(t){t.visibleWrites=Pu(t.allWrites,Ly,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ly(t){return t.visible}function Pu(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)qe(n,o)?(l=Be(n,o),s=es(s,l,r.snap)):qe(o,n)&&(l=Be(o,n),s=es(s,ee(),r.snap.getChild(l)));else if(r.children){if(qe(n,o))l=Be(n,o),s=nc(s,l,r.children);else if(qe(o,n))if(l=Be(o,n),K(l))s=nc(s,ee(),r.children);else{const c=Rn(r.children,j(l));if(c){const a=c.getChild(oe(l));s=es(s,ee(),a)}}}else throw On("WriteRecord should have .snap or .children")}}return s}function Ou(t,e,n,s,i){if(!s&&!i){const r=tn(t.visibleWrites,e);if(r!=null)return r;{const o=Pt(t.visibleWrites,e);if(Sr(o))return n;if(n==null&&!Ir(o,ee()))return null;{const l=n||J.EMPTY_NODE;return Nn(o,l)}}}else{const r=Pt(t.visibleWrites,e);if(!i&&Sr(r))return n;if(!i&&n==null&&!Ir(r,ee()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(qe(a.path,e)||qe(e,a.path))},l=Pu(t.allWrites,o,e),c=n||J.EMPTY_NODE;return Nn(l,c)}}}function Fy(t,e,n){let s=J.EMPTY_NODE;const i=tn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Re,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Pt(t.visibleWrites,e);return n.forEachChild(Re,(o,l)=>{const c=Nn(Pt(r,new ce(o)),l);s=s.updateImmediateChild(o,c)}),ic(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Pt(t.visibleWrites,e);return ic(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function By(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=he(e,n);if(Ir(t.visibleWrites,r))return null;{const o=Pt(t.visibleWrites,r);return Sr(o)?i.getChild(n):Nn(o,i.getChild(n))}}function Uy(t,e,n,s){const i=he(e,n),r=tn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Pt(t.visibleWrites,i);return Nn(o,s.getNode().getImmediateChild(n))}else return null}function Hy(t,e){return tn(t.visibleWrites,e)}function $y(t,e,n,s,i,r,o){let l;const c=Pt(t.visibleWrites,e),a=tn(c,ee());if(a!=null)l=a;else if(n!=null)l=Nn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=d.getNext();for(;m&&u.length<i;)h(m,s)!==0&&u.push(m),m=d.getNext();return u}else return[]}function Wy(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function Tr(t,e,n,s){return Ou(t.writeTree,t.treePath,e,n,s)}function Du(t,e){return Fy(t.writeTree,t.treePath,e)}function rc(t,e,n,s){return By(t.writeTree,t.treePath,e,n,s)}function ei(t,e){return Hy(t.writeTree,he(t.treePath,e))}function jy(t,e,n,s,i,r){return $y(t.writeTree,t.treePath,e,n,s,i,r)}function fo(t,e,n){return Uy(t.writeTree,t.treePath,e,n)}function Mu(t,e){return Lu(he(t.treePath,e),t.writeTree)}function Lu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Xl(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,vy(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,yy(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Xl(s,e.snapshotNode,i.oldSnap));else throw On("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Fu=new Ky;class po{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ho(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:en(this.viewCache_),r=jy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function zy(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qy(t,e,n,s,i){const r=new Vy;let o,l;if(n.type===ot.OVERWRITE){const a=n;a.source.fromUser?o=Rr(t,e,a.path,a.snap,s,i,r):(S(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!K(a.path),o=ti(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===ot.MERGE){const a=n;a.source.fromUser?o=Yy(t,e,a.path,a.children,s,i,r):(S(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Ar(t,e,a.path,a.children,s,i,l,r))}else if(n.type===ot.ACK_USER_WRITE){const a=n;a.revert?o=Xy(t,e,a.path,s,i,r):o=Qy(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===ot.LISTEN_COMPLETE)o=Jy(t,e,n.path,s,r);else throw On("Unknown operation type: "+n.type);const c=r.getChanges();return Gy(e,o,c),{viewCache:o,changes:c}}function Gy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=wr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(gy(wr(e)))}}function Bu(t,e,n,s,i,r){const o=e.eventCache;if(ei(s,n)!=null)return e;{let l,c;if(K(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=en(e),u=a instanceof J?a:J.EMPTY_NODE,h=Du(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=Tr(s,en(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=j(n);if(a===".priority"){S(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=rc(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=oe(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const d=rc(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(a).updateChild(u,d):h=o.getNode().getImmediateChild(a)}else h=fo(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return Zn(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function ti(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),m,null)}else{const m=j(n);if(!c.isCompleteForPath(n)&&Dt(n)>1)return e;const E=oe(n),k=c.getNode().getImmediateChild(m).updateChild(E,s);m===".priority"?a=u.updatePriority(c.getNode(),k):a=u.updateChild(c.getNode(),m,k,E,Fu,null)}const h=Nu(e,a,c.isFullyInitialized()||K(n),u.filtersNodes()),d=new po(i,h,r);return Bu(t,h,n,i,d,l)}function Rr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new po(i,e,r);if(K(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Zn(e,a,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Zn(e,a,l.isFullyInitialized(),l.isFiltered());else{const d=oe(n),m=l.getNode().getImmediateChild(h);let E;if(K(d))E=s;else{const R=u.getCompleteChild(h);R!=null?pu(d)===".priority"&&R.getChild(mu(d)).isEmpty()?E=R:E=R.updateChild(d,s):E=J.EMPTY_NODE}if(m.equals(E))c=e;else{const R=t.filter.updateChild(l.getNode(),h,E,d,u,o);c=Zn(e,R,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function oc(t,e){return t.eventCache.isCompleteForChild(e)}function Yy(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=he(n,c);oc(e,j(u))&&(l=Rr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=he(n,c);oc(e,j(u))||(l=Rr(t,l,u,a,i,r,o))}),l}function lc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ar(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;K(n)?a=s:a=new ie(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),E=lc(t,m,d);c=ti(t,c,new ce(h),E,i,r,o,l)}}),a.children.inorderTraversal((h,d)=>{const m=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!m){const E=e.serverCache.getNode().getImmediateChild(h),R=lc(t,E,d);c=ti(t,c,new ce(h),R,i,r,o,l)}}),c}function Qy(t,e,n,s,i,r,o){if(ei(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ti(t,e,n,c.getNode().getChild(n),i,r,l,o);if(K(n)){let a=new ie(null);return c.getNode().forEachChild(bn,(u,h)=>{a=a.set(new ce(u),h)}),Ar(t,e,n,a,i,r,l,o)}else return e}else{let a=new ie(null);return s.foreach((u,h)=>{const d=he(n,u);c.isCompleteForPath(d)&&(a=a.set(u,c.getNode().getChild(d)))}),Ar(t,e,n,a,i,r,l,o)}}function Jy(t,e,n,s,i){const r=e.serverCache,o=Nu(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return Bu(t,o,n,s,Fu,i)}function Xy(t,e,n,s,i,r){let o;if(ei(s,n)!=null)return e;{const l=new po(s,e,i),c=e.eventCache.getNode();let a;if(K(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Tr(s,en(e));else{const h=e.serverCache.getNode();S(h instanceof J,"serverChildren would be complete if leaf node"),u=Du(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=j(n);let h=fo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,oe(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,J.EMPTY_NODE,oe(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Tr(s,en(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||ei(s,ee())!=null,Zn(e,a,o,t.filter.filtersNodes())}}function Zy(t,e){const n=en(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function cc(t,e,n,s){e.type===ot.MERGE&&e.source.queryId!==null&&(S(en(t.viewCache_),"We should always have a full cache before handling merges"),S(wr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=qy(t.processor_,i,e,n,s);return zy(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ev(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ev(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ry(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;function tv(t){S(!ac,"__referenceConstructor has already been defined"),ac=t}function _o(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),cc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(cc(o,e,n,s));return r}}function mo(t,e){let n=null;for(const s of t.views.values())n=n||Zy(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc;function nv(t){S(!uc,"__referenceConstructor has already been defined"),uc=t}class hc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=Wy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Uu(t,e,n,s,i){return ky(t.pendingWriteTree_,e,n,s,i),i?bi(t,new Zt(Su(),e,n)):[]}function Vt(t,e,n=!1){const s=Py(t.pendingWriteTree_,e);if(Oy(t.pendingWriteTree_,e)){let r=new ie(null);return s.snap!=null?r=r.set(ee(),!0):Ue(s.children,o=>{r=r.set(new ce(o),!0)}),bi(t,new Zs(s.path,r,n))}else return[]}function Ei(t,e,n){return bi(t,new Zt(Tu(),e,n))}function sv(t,e,n){const s=ie.fromObject(n);return bi(t,new fs(Tu(),e,s))}function iv(t,e,n,s){const i=Wu(t,s);if(i!=null){const r=ju(i),o=r.path,l=r.queryId,c=Be(o,e),a=new Zt(Ru(l),c,n);return Vu(t,o,a)}else return[]}function rv(t,e,n,s){const i=Wu(t,s);if(i){const r=ju(i),o=r.path,l=r.queryId,c=Be(o,e),a=ie.fromObject(n),u=new fs(Ru(l),c,a);return Vu(t,o,u)}else return[]}function go(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Be(o,e),a=mo(l,c);if(a)return a});return Ou(i,e,r,n,!0)}function bi(t,e){return Hu(e,t.syncPointTree_,null,ku(t.pendingWriteTree_,ee()))}function Hu(t,e,n,s){if(K(t.path))return $u(t,e,n,s);{const i=e.get(ee());n==null&&i!=null&&(n=mo(i,ee()));let r=[];const o=j(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Mu(s,o);r=r.concat(Hu(l,c,a,u))}return i&&(r=r.concat(_o(i,t,s,n))),r}}function $u(t,e,n,s){const i=e.get(ee());n==null&&i!=null&&(n=mo(i,ee()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Mu(s,o),u=t.operationForChild(o);u&&(r=r.concat($u(u,l,c,a)))}),i&&(r=r.concat(_o(i,t,s,n))),r}function Wu(t,e){return t.tagToQueryMap.get(e)}function ju(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function Vu(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=ku(t.pendingWriteTree_,e);return _o(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yo(n)}node(){return this.node_}}class vo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=he(this.path_,e);return new vo(this.syncTree_,n)}node(){return go(this.syncTree_,this.path_)}}const ov=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},fc=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cv(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},cv=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},av=function(t,e,n,s){return Eo(e,new vo(n,t),s)},Ku=function(t,e,n){return Eo(t,new yo(e),n)};function Eo(t,e,n){const s=t.getPriority().val(),i=fc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=fc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,ye(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(Re,(l,c)=>{const a=Eo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Co(t,e){let n=e instanceof ce?e:new ce(e),s=t,i=j(n);for(;i!==null;){const r=Rn(s.node.children,i)||{children:{},childCount:0};s=new bo(i,s,r),n=oe(n),i=j(n)}return s}function Fn(t){return t.node.value}function zu(t,e){t.node.value=e,Nr(t)}function qu(t){return t.node.childCount>0}function uv(t){return Fn(t)===void 0&&!qu(t)}function Ci(t,e){Ue(t.node.children,(n,s)=>{e(new bo(n,t,s))})}function Gu(t,e,n,s){n&&!s&&e(t),Ci(t,i=>{Gu(i,e,!0,s)}),n&&s&&e(t)}function hv(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vs(t){return new ce(t.parent===null?t.name:vs(t.parent)+"/"+t.name)}function Nr(t){t.parent!==null&&fv(t.parent,t.name,t)}function fv(t,e,n){const s=uv(n),i=bt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Nr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Nr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=/[\[\].#$\/\u0000-\u001F\u007F]/,pv=/[\[\].#$\u0000-\u001F\u007F]/,zi=10*1024*1024,Yu=function(t){return typeof t=="string"&&t.length!==0&&!dv.test(t)},Qu=function(t){return typeof t=="string"&&t.length!==0&&!pv.test(t)},_v=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qu(t)},Ju=function(t,e,n,s){s&&e===void 0||wo(no(t,"value"),e,n)},wo=function(t,e,n){const s=n instanceof ce?new Jg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ut(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ut(s)+" with contents = "+e.toString());if(qa(e))throw new Error(t+"contains "+e.toString()+" "+Ut(s));if(typeof e=="string"&&e.length>zi/3&&yi(e)>zi)throw new Error(t+"contains a string greater than "+zi+" utf8 bytes "+Ut(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Yu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ut(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xg(s,o),wo(t,l,s),Zg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ut(s)+" in addition to actual children.")}},Xu=function(t,e,n,s){if(!(s&&n===void 0)&&!Qu(n))throw new Error(no(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xu(t,e,n,s)},Zu=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},gv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_v(n))throw new Error(no(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eh(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!gu(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function yt(t,e,n){eh(t,n),vv(t,s=>qe(s,e)||qe(e,s))}function vv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Ev(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ev(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yt&&Ie("event: "+n.toString()),Ln(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="repo_interrupt",Cv=25;class wv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xs(),this.transactionQueueTree_=new bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Iv(t,e,n){if(t.stats_=oo(t.repoInfo_),t.forceRestClient_||Cg())t.server_=new Js(t.repoInfo_,(s,i,r,o)=>{dc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>pc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new _t(t.repoInfo_,e,(s,i,r,o)=>{dc(t,s,i,r,o)},s=>{pc(t,s)},s=>{Sv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Rg(t.repoInfo_,()=>new Ty(t.stats_,t.server_)),t.infoData_=new by,t.infoSyncTree_=new hc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ei(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),So(t,"connected",!1),t.serverSyncTree_=new hc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);yt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function th(t){const n=t.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Io(t){return ov({timestamp:th(t)})}function dc(t,e,n,s,i){t.dataUpdateCount++;const r=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ks(n,a=>ye(a));o=rv(t.serverSyncTree_,r,c,i)}else{const c=ye(n);o=iv(t.serverSyncTree_,r,c,i)}else if(s){const c=Ks(n,a=>ye(a));o=sv(t.serverSyncTree_,r,c)}else{const c=ye(n);o=Ei(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=wi(t,r)),yt(t.eventQueue_,l,o)}function pc(t,e){So(t,"connected",e),e===!1&&Rv(t)}function Sv(t,e){Ue(e,(n,s)=>{So(t,n,s)})}function So(t,e,n){const s=new ce("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(s,i);const r=Ei(t.infoSyncTree_,s,i);yt(t.eventQueue_,s,r)}function nh(t){return t.nextWriteId_++}function Tv(t,e,n,s,i){To(t,"set",{path:e.toString(),value:n,priority:s});const r=Io(t),o=ye(n,s),l=go(t.serverSyncTree_,e),c=Ku(o,l,r),a=nh(t),u=Uu(t.serverSyncTree_,e,c,a,!0);eh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const E=d==="ok";E||De("set at "+e+" failed: "+d);const R=Vt(t.serverSyncTree_,a,!E);yt(t.eventQueue_,e,R),Nv(t,i,d,m)});const h=lh(t,e);wi(t,h),yt(t.eventQueue_,h,[])}function Rv(t){To(t,"onDisconnectEvents");const e=Io(t),n=Xs();Cr(t.onDisconnect_,ee(),(i,r)=>{const o=av(i,r,t.serverSyncTree_,e);Iu(n,i,o)});let s=[];Cr(n,ee(),(i,r)=>{s=s.concat(Ei(t.serverSyncTree_,i,r));const o=lh(t,i);wi(t,o)}),t.onDisconnect_=Xs(),yt(t.eventQueue_,ee(),s)}function Av(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bv)}function To(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function Nv(t,e,n,s){e&&Ln(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function sh(t,e,n){return go(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function Ro(t,e=t.transactionQueueTree_){if(e||Ii(t,e),Fn(e)){const n=rh(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&xv(t,vs(e),n)}else qu(e)&&Ci(e,n=>{Ro(t,n)})}function xv(t,e,n){const s=n.map(a=>a.currentWriteId),i=sh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Be(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{To(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Vt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ii(t,Co(t.transactionQueueTree_,e)),Ro(t,t.transactionQueueTree_),yt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ln(h[d])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{De("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}wi(t,e)}},o)}function wi(t,e){const n=ih(t,e),s=vs(n),i=rh(t,n);return kv(t,i,s),s}function kv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Be(n,c.path);let u=!1,h;if(S(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Vt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Cv)u=!0,h="maxretry",i=i.concat(Vt(t.serverSyncTree_,c.currentWriteId,!0));else{const d=sh(t,c.path,o);c.currentInputSnapshot=d;const m=e[l].update(d.val());if(m!==void 0){wo("transaction failed: Data returned ",m,c.path);let E=ye(m);typeof m=="object"&&m!=null&&bt(m,".priority")||(E=E.updatePriority(d.getPriority()));const k=c.currentWriteId,P=Io(t),D=Ku(E,d,P);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=D,c.currentWriteId=nh(t),o.splice(o.indexOf(k),1),i=i.concat(Uu(t.serverSyncTree_,c.path,D,c.currentWriteId,c.applyLocally)),i=i.concat(Vt(t.serverSyncTree_,k,!0))}else u=!0,h="nodata",i=i.concat(Vt(t.serverSyncTree_,c.currentWriteId,!0))}yt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ii(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Ln(s[l]);Ro(t,t.transactionQueueTree_)}function ih(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&Fn(s)===void 0;)s=Co(s,n),e=oe(e),n=j(e);return s}function rh(t,e){const n=[];return oh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function oh(t,e,n){const s=Fn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ci(e,i=>{oh(t,i,n)})}function Ii(t,e){const n=Fn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,zu(e,n.length>0?n:void 0)}Ci(e,s=>{Ii(t,s)})}function lh(t,e){const n=vs(ih(t,e)),s=Co(t.transactionQueueTree_,e);return hv(s,i=>{qi(t,i)}),qi(t,s),Gu(s,i=>{qi(t,i)}),n}function qi(t,e){const n=Fn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?zu(e,void 0):n.length=r+1,yt(t.eventQueue_,vs(e),i);for(let o=0;o<s.length;o++)Ln(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ov(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const _c=function(t,e){const n=Dv(t),s=n.namespace;n.domain==="firebase.com"&&gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ru(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ce(n.pathString)}},Dv=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Pv(t.substring(u,h)));const d=Ov(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const m=e.slice(0,a);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Mv=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=mc.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=mc.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:pu(this._path)}get ref(){return new nn(this._repo,this._path)}get _queryIdentifier(){const e=ec(this._queryParams),n=io(e);return n==="{}"?"default":n}get _queryObject(){return ec(this._queryParams)}isEqual(e){if(e=Dn(e),!(e instanceof Ao))return!1;const n=this._repo===e._repo,s=gu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Qg(this._path)}}class nn extends Ao{constructor(e,n){super(e,n,new uo,!1)}get parent(){const e=mu(this._path);return e===null?null:new nn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function ch(t,e){return t=Dn(t),t._checkNotDeleted("ref"),e!==void 0?xr(t._root,e):t._root}function xr(t,e){return t=Dn(t),j(t._path)===null?mv("child","path",e,!1):Xu("child","path",e,!1),new nn(t._repo,he(t._path,e))}function Lv(t,e){t=Dn(t),Zu("push",t._path),Ju("push",e,t._path,!0);const n=th(t._repo),s=Mv(n),i=xr(t,s),r=xr(t,s);let o;return e!=null?o=Fv(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Fv(t,e){t=Dn(t),Zu("set",t._path),Ju("set",e,t._path,!1);const n=new gi;return Tv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}tv(nn);nv(nn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="FIREBASE_DATABASE_EMULATOR_HOST",kr={};let Uv=!1;function Hv(t,e,n,s){t.repoInfo_=new ru(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function $v(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=_c(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[Bv]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=_c(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new En(En.OWNER):new Ig(t.name,t.options,e);gv("Invalid Firebase Database URL",o),K(o.path)||gt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=jv(l,t,u,new wg(t.name,n));return new Vv(h,t)}function Wv(t,e){const n=kr[e];(!n||n[t.key]!==t)&&gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Av(t),delete n[t.key]}function jv(t,e,n,s){let i=kr[e.name];i||(i={},kr[e.name]=i);let r=i[t.toURLString()];return r&&gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new wv(t,Uv,n,s),i[t.toURLString()]=r,r}class Vv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Iv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new nn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gt("Cannot call "+e+" on a deleted database.")}}function ah(t=Zm(),e){const n=Ym(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=$_("database");s&&Kv(n,...s)}return n}function Kv(t,e,n,s={}){t=Dn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&gt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new En(En.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:W_(s.mockUserToken,t.app.options.projectId);r=new En(o)}Hv(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){ag(Xm),qs(new as("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return $v(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),yn(Ll,Fl,t),yn(Ll,Fl,"esm2017")}_t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zv();const Si=t=>(ds("data-v-05c5de4c"),t=t(),ps(),t),qv=Si(()=>M("h1",{style:{color:"gold"}},"Get In Touch",-1)),Gv={class:"user-form"},Yv=Si(()=>M("span",{class:"input-text"},[pi("Email"),M("span",{style:{color:"red"}},"*")],-1)),Qv={key:0,class:"error-message"},Jv=Si(()=>M("span",{class:"input-text"},[pi("Name"),M("span",{style:{color:"red"}},"*")],-1)),Xv={key:1,class:"error-message"},Zv=Si(()=>M("span",{class:"input-text"},"Message",-1)),eE={__name:"UserForm",setup(t){const e=We(""),n=We(""),s=We(""),i=We(!1),r=We(!1),o=()=>{if(i.value=!l(n.value),r.value=!s.value.trim(),!i.value&&!r.value){const u=ah(),h=ch(u,"formData"),d={email:n.value,name:s.value,message:e.value,timestamp:new Date().toISOString()};Lv(h,d),n.value="",s.value="",e.value=""}};function l(u){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u)}const c=We(!1);function a(){c.value=!0,setTimeout(()=>{c.value=!1},1500)}return(u,h)=>(me(),be(Pe,null,[qv,M("div",Gv,[Yv,Ai(M("input",{type:"text",placeholder:"Your Email","onUpdate:modelValue":h[0]||(h[0]=d=>n.value=d),class:Kt(["inputFields",{error:i.value}])},null,2),[[Oi,n.value]]),i.value?(me(),be("span",Qv,"Incorrect email format")):Xo("",!0),Jv,Ai(M("input",{class:Kt(["inputFields",{error:r.value}]),type:"text",placeholder:"Your Name","onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d)},null,2),[[Oi,s.value]]),r.value?(me(),be("span",Xv,"Name is required")):Xo("",!0),Zv,Ai(M("textarea",{placeholder:"Your Message",class:"inputFields","onUpdate:modelValue":h[2]||(h[2]=d=>e.value=d)},null,512),[[Oi,e.value]]),M("div",{class:Kt({shake:c.value}),onClick:a},[M("button",{class:"SubmitBtn",onClick:o},"Submit")],2)])],64))}},tE=Et(eE,[["__scopeId","data-v-05c5de4c"]]);const nE={class:"contact-page"},sE={__name:"Contact",setup(t){return(e,n)=>(me(),be("main",nE,[le(tE)]))}},iE=Et(sE,[["__scopeId","data-v-e45165af"]]);const rE={class:"item"},oE={class:"rounded-image-container"},lE=["src"],cE={class:"skill-label"},aE={__name:"SkillsCard",props:{skillImageUrl:String,skillName:String},setup(t){return(e,n)=>(me(),be("div",rE,[M("div",oE,[M("img",{class:"shadow-rounded-circle",src:t.skillImageUrl,alt:"image"},null,8,lE)]),M("p",cE,Br(t.skillName),1)]))}},gc=Et(aE,[["__scopeId","data-v-d85a0678"]]);const uE={class:"my-certificates-item"},hE=["src"],fE={class:"skill-label"},dE={__name:"CertificateCard",props:{certificateImageUrl:String,certificateName:String},setup(t){return(e,n)=>(me(),be("div",uE,[M("img",{class:"certificate-images",src:t.certificateImageUrl,alt:"image"},null,8,hE),M("h2",fE,Br(t.certificateName),1)]))}},pE=Et(dE,[["__scopeId","data-v-cd6296cb"]]),_E="/assets/bootstrap-7eb33105.svg",mE="/assets/css-4dd88ce3.svg",gE="/assets/github-a9ef9fd9.svg",yE="/assets/html-77916ceb.svg",vE="/assets/java-cbe62035.svg",EE="/assets/mysql-fda483c5.svg",bE="/assets/nodejs-fd943bcd.svg",CE="/assets/python-6aa0ccc7.svg",wE="/assets/typescript-e8392ea1.svg",IE="/assets/vuejs-d13d9b79.svg",SE="/assets/c1-b6401214.jpg",TE="/assets/c2-06514bfd.jpg",RE="/assets/c3-5b4858a6.jpg",AE="/assets/c4-8c5e0887.jpg",NE="/assets/c5-088fefea.png",xE="/assets/c6-5a116e18.jpg";const Es=t=>(ds("data-v-edc2af42"),t=t(),ps(),t),kE={id:"skills-page"},PE={class:"container"},OE=Es(()=>M("h2",{class:"title-text",style:{"font-size":"35px",color:"gold"}}," Production Level Skills ",-1)),DE={class:"skills-container"},ME=Es(()=>M("hr",{class:"small-hr"},null,-1)),LE=Es(()=>M("h2",{class:"title-text",style:{"font-size":"35px",color:"gold"}}," Other Relevant Skills ",-1)),FE=Es(()=>M("hr",{class:"small-hr"},null,-1)),BE={class:"my-certifications"},UE=Es(()=>M("h2",{class:"title-text",style:{"font-size":"35px",color:"gold"}}," Certificates ",-1)),HE={__name:"Skills",setup(t){const e=[{skillImageUrl:_E,skillName:"Bootstrap"},{skillImageUrl:mE,skillName:"CSS"},{skillImageUrl:yE,skillName:"HTML"},{skillImageUrl:EE,skillName:"MySQL"},{skillImageUrl:bE,skillName:"Node.js"},{skillImageUrl:IE,skillName:"Vue.js"},{skillImageUrl:wE,skillName:"TypeScript"}],n=[{skillImageUrl:gE,skillName:"GitHub"},{skillImageUrl:CE,skillName:"Python"},{skillImageUrl:vE,skillName:"Java"}],s=[{imageUrl:SE,certificateName:"Designing Network Systems"},{imageUrl:TE,certificateName:"Python (DSA)"},{imageUrl:RE,certificateName:"Machine Learning (Python)"},{imageUrl:AE,certificateName:"IOT and Embedded Systems"},{imageUrl:NE,certificateName:"Image Recognition (Python)"},{imageUrl:xE,certificateName:"DS and ML (Python)"}];return(i,r)=>(me(),be("div",kE,[M("div",PE,[OE,M("div",DE,[(me(),be(Pe,null,Ni(e,(o,l)=>le(gc,{key:l,skillImageUrl:o.skillImageUrl,skillName:o.skillName},null,8,["skillImageUrl","skillName"])),64))]),ME,LE,(me(),be(Pe,null,Ni(n,(o,l)=>le(gc,{key:l,skillImageUrl:o.skillImageUrl,skillName:o.skillName},null,8,["skillImageUrl","skillName"])),64)),FE,M("div",BE,[UE,(me(),be(Pe,null,Ni(s,(o,l)=>le(pE,{key:l,certificateImageUrl:o.imageUrl,certificateName:o.certificateName},null,8,["certificateImageUrl","certificateName"])),64))])])]))}},$E=Et(HE,[["__scopeId","data-v-edc2af42"]]),WE=r_({history:bp(),routes:[{path:"/",component:k_},{path:"/Contact",component:iE},{path:"/skills",component:$E}]});var jE="firebase",VE="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(jE,VE,"app");const KE={apiKey:"AIzaSyB8UNrnpPnP-65Snz3_QJ5IMclWLEANUVQ",authDomain:"my-portfolio-7d4ff.firebaseapp.com",databaseURL:"https://my-portfolio-7d4ff-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-portfolio-7d4ff",storageBucket:"my-portfolio-7d4ff.appspot.com",messagingSenderId:"315985407581",appId:"1:315985407581:web:748f9668334e93b02667b4"},zE=$a(KE),qE=ah();ch(qE,"formData");Ad(sp).use(WE).provide("$app",zE).mount("#app");
