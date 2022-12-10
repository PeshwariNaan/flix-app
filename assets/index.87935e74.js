function sk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var k={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),ok=Symbol.for("react.portal"),ak=Symbol.for("react.fragment"),lk=Symbol.for("react.strict_mode"),uk=Symbol.for("react.profiler"),ck=Symbol.for("react.provider"),hk=Symbol.for("react.context"),dk=Symbol.for("react.forward_ref"),fk=Symbol.for("react.suspense"),pk=Symbol.for("react.memo"),mk=Symbol.for("react.lazy"),km=Symbol.iterator;function gk(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mv=Object.assign,gv={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=gv,this.updater=n||pv}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yv(){}yv.prototype=Zi.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=gv,this.updater=n||pv}var Zd=Jd.prototype=new yv;Zd.constructor=Jd;mv(Zd,Zi.prototype);Zd.isPureReactComponent=!0;var _m=Array.isArray,vv=Object.prototype.hasOwnProperty,ef={current:null},wv={key:!0,ref:!0,__self:!0,__source:!0};function Sv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vv.call(e,r)&&!wv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Po,type:t,key:s,ref:o,props:i,_owner:ef.current}}function yk(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function vk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cm=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vk(""+t.key):e.toString(36)}function Ua(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Po:case ok:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xc(o,0):r,_m(i)?(n="",t!=null&&(n=t.replace(Cm,"$&/")+"/"),Ua(i,e,n,"",function(u){return u})):i!=null&&(tf(i)&&(i=yk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Cm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_m(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+xc(s,a);o+=Ua(s,e,n,l,i)}else if(l=gk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+xc(s,a++),o+=Ua(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(t,e,n){if(t==null)return t;var r=[],i=0;return Ua(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},Fa={transition:null},Sk={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:ef};ne.Children={map:ca,forEach:function(t,e,n){ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ca(t,function(){e++}),e},toArray:function(t){return ca(t,function(e){return e})||[]},only:function(t){if(!tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Zi;ne.Fragment=ak;ne.Profiler=uk;ne.PureComponent=Jd;ne.StrictMode=lk;ne.Suspense=fk;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sk;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ef.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vv.call(e,l)&&!wv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Po,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:hk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ck,_context:t},t.Consumer=t};ne.createElement=Sv;ne.createFactory=function(t){var e=Sv.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:dk,render:t}};ne.isValidElement=tf;ne.lazy=function(t){return{$$typeof:mk,_payload:{_status:-1,_result:t},_init:wk}};ne.memo=function(t,e){return{$$typeof:pk,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Fa.transition;Fa.transition={};try{t()}finally{Fa.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return St.current.useCallback(t,e)};ne.useContext=function(t){return St.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ne.useEffect=function(t,e){return St.current.useEffect(t,e)};ne.useId=function(){return St.current.useId()};ne.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return St.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ne.useRef=function(t){return St.current.useRef(t)};ne.useState=function(t){return St.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return St.current.useTransition()};ne.version="18.2.0";(function(t){t.exports=ne})(k);const Er=fv(k.exports),wh=sk({__proto__:null,default:Er},[k.exports]);var Sh={},nf={exports:{}},Mt={},Ev={exports:{}},kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,j){var K=R.length;R.push(j);e:for(;0<K;){var me=K-1>>>1,D=R[me];if(0<i(D,j))R[me]=j,R[K]=D,K=me;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var j=R[0],K=R.pop();if(K!==j){R[0]=K;e:for(var me=0,D=R.length,b=D>>>1;me<b;){var $=2*(me+1)-1,G=R[$],S=$+1,re=R[S];if(0>i(G,K))S<D&&0>i(re,G)?(R[me]=re,R[S]=K,me=S):(R[me]=G,R[$]=K,me=$);else if(S<D&&0>i(re,K))R[me]=re,R[S]=K,me=S;else break e}}return j}function i(R,j){var K=R.sortIndex-j.sortIndex;return K!==0?K:R.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=R)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function E(R){if(w=!1,y(R),!v)if(n(l)!==null)v=!0,mn(C);else{var j=n(u);j!==null&&gt(E,j.startTime-R)}}function C(R,j){v=!1,w&&(w=!1,p(L),L=-1),g=!0;var K=d;try{for(y(j),h=n(l);h!==null&&(!(h.expirationTime>j)||R&&!Ve());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var D=me(h.expirationTime<=j);j=t.unstable_now(),typeof D=="function"?h.callback=D:h===n(l)&&r(l),y(j)}else r(l);h=n(l)}if(h!==null)var b=!0;else{var $=n(u);$!==null&&gt(E,$.startTime-j),b=!1}return b}finally{h=null,d=K,g=!1}}var A=!1,P=null,L=-1,ee=5,W=-1;function Ve(){return!(t.unstable_now()-W<ee)}function Le(){if(P!==null){var R=t.unstable_now();W=R;var j=!0;try{j=P(!0,R)}finally{j?Ke():(A=!1,P=null)}}else A=!1}var Ke;if(typeof f=="function")Ke=function(){f(Le)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,rt=Nt.port2;Nt.port1.onmessage=Le,Ke=function(){rt.postMessage(null)}}else Ke=function(){_(Le,0)};function mn(R){P=R,A||(A=!0,Ke())}function gt(R,j){L=_(function(){R(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,mn(C))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var K=d;d=j;try{return R()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var K=d;d=R;try{return j()}finally{d=K}},t.unstable_scheduleCallback=function(R,j,K){var me=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?me+K:me):K=me,R){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=K+D,R={id:c++,callback:j,priorityLevel:R,startTime:K,expirationTime:D,sortIndex:-1},K>me?(R.sortIndex=K,e(u,R),n(l)===null&&R===n(u)&&(w?(p(L),L=-1):w=!0,gt(E,K-me))):(R.sortIndex=D,e(l,R),v||g||(v=!0,mn(C))),R},t.unstable_shouldYield=Ve,t.unstable_wrapCallback=function(R){var j=d;return function(){var K=d;d=j;try{return R.apply(this,arguments)}finally{d=K}}}})(kv);(function(t){t.exports=kv})(Ev);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=k.exports,bt=Ev.exports;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cv=new Set,Ys={};function ni(t,e){Mi(t,e),Mi(t+"Capture",e)}function Mi(t,e){for(Ys[t]=e,t=0;t<e.length;t++)Cv.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,Ek=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Im={},Tm={};function kk(t){return Eh.call(Tm,t)?!0:Eh.call(Im,t)?!1:Ek.test(t)?Tm[t]=!0:(Im[t]=!0,!1)}function _k(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ck(t,e,n,r){if(e===null||typeof e>"u"||_k(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var rf=/[\-:]([a-z])/g;function sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rf,sf);tt[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rf,sf);tt[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rf,sf);tt[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function of(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ck(e,n,i,r)&&(n=null),r||i===null?kk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),hi=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),af=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Tv=Symbol.for("react.context"),lf=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),Ch=Symbol.for("react.suspense_list"),uf=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),xv=Symbol.for("react.offscreen"),xm=Symbol.iterator;function ms(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Ac;function Cs(t){if(Ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ac=e&&e[1]||""}return`
`+Ac+t}var Rc=!1;function Nc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Cs(t):""}function Ik(t){switch(t.tag){case 5:return Cs(t.type);case 16:return Cs("Lazy");case 13:return Cs("Suspense");case 19:return Cs("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case di:return"Fragment";case hi:return"Portal";case kh:return"Profiler";case af:return"StrictMode";case _h:return"Suspense";case Ch:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tv:return(t.displayName||"Context")+".Consumer";case Iv:return(t._context.displayName||"Context")+".Provider";case lf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uf:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function Tk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xk(t){var e=Av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function da(t){t._valueTracker||(t._valueTracker=xk(t))}function Rv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Av(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Am(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nv(t,e){e=e.checked,e!=null&&of(t,"checked",e,!1)}function xh(t,e){Nv(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ah(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ah(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Is(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function Dv(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fa,Ov=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ak=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){Ak.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function Lv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function bv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Rk=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dh(t,e){if(e){if(Rk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=null;function cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lh=null,Ai=null,Ri=null;function Pm(t){if(t=bo(t)){if(typeof Lh!="function")throw Error(T(280));var e=t.stateNode;e&&(e=lu(e),Lh(t.stateNode,t.type,e))}}function $v(t){Ai?Ri?Ri.push(t):Ri=[t]:Ai=t}function Mv(){if(Ai){var t=Ai,e=Ri;if(Ri=Ai=null,Pm(t),e)for(t=0;t<e.length;t++)Pm(e[t])}}function Uv(t,e){return t(e)}function Fv(){}var Dc=!1;function Vv(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return Uv(t,e,n)}finally{Dc=!1,(Ai!==null||Ri!==null)&&(Fv(),Mv())}}function Js(t,e){var n=t.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var bh=!1;if(An)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){bh=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{bh=!1}function Nk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var bs=!1,ol=null,al=!1,$h=null,Dk={onError:function(t){bs=!0,ol=t}};function Pk(t,e,n,r,i,s,o,a,l){bs=!1,ol=null,Nk.apply(Dk,arguments)}function Ok(t,e,n,r,i,s,o,a,l){if(Pk.apply(this,arguments),bs){if(bs){var u=ol;bs=!1,ol=null}else throw Error(T(198));al||(al=!0,$h=u)}}function ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Om(t){if(ri(t)!==t)throw Error(T(188))}function Lk(t){var e=t.alternate;if(!e){if(e=ri(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Om(i),t;if(s===r)return Om(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function Bv(t){return t=Lk(t),t!==null?jv(t):null}function jv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jv(t);if(e!==null)return e;t=t.sibling}return null}var Hv=bt.unstable_scheduleCallback,Lm=bt.unstable_cancelCallback,bk=bt.unstable_shouldYield,$k=bt.unstable_requestPaint,Ne=bt.unstable_now,Mk=bt.unstable_getCurrentPriorityLevel,hf=bt.unstable_ImmediatePriority,Wv=bt.unstable_UserBlockingPriority,ll=bt.unstable_NormalPriority,Uk=bt.unstable_LowPriority,Kv=bt.unstable_IdlePriority,iu=null,un=null;function Fk(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Bk,Vk=Math.log,zk=Math.LN2;function Bk(t){return t>>>=0,t===0?32:31-(Vk(t)/zk|0)|0}var pa=64,ma=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ts(a):(s&=o,s!==0&&(r=Ts(s)))}else o=n&~i,o!==0?r=Ts(o):s!==0&&(r=Ts(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function jk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=jk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gv(){var t=pa;return pa<<=1,(pa&4194240)===0&&(pa=64),t}function Pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function Wk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function qv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Qv,ff,Yv,Xv,Jv,Uh=!1,ga=[],tr=null,nr=null,rr=null,Zs=new Map,eo=new Map,Kn=[],Kk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bm(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bo(e),e!==null&&ff(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Gk(t,e,n,r,i){switch(e){case"focusin":return tr=ys(tr,t,e,n,r,i),!0;case"dragenter":return nr=ys(nr,t,e,n,r,i),!0;case"mouseover":return rr=ys(rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zs.set(s,ys(Zs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,eo.set(s,ys(eo.get(s)||null,t,e,n,r,i)),!0}return!1}function Zv(t){var e=Nr(t.target);if(e!==null){var n=ri(e);if(n!==null){if(e=n.tag,e===13){if(e=zv(n),e!==null){t.blockedOn=e,Jv(t.priority,function(){Yv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oh=r,n.target.dispatchEvent(r),Oh=null}else return e=bo(n),e!==null&&ff(e),t.blockedOn=n,!1;e.shift()}return!0}function $m(t,e,n){Va(t)&&n.delete(e)}function qk(){Uh=!1,tr!==null&&Va(tr)&&(tr=null),nr!==null&&Va(nr)&&(nr=null),rr!==null&&Va(rr)&&(rr=null),Zs.forEach($m),eo.forEach($m)}function vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uh||(Uh=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,qk)))}function to(t){function e(i){return vs(i,t)}if(0<ga.length){vs(ga[0],t);for(var n=1;n<ga.length;n++){var r=ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&vs(tr,t),nr!==null&&vs(nr,t),rr!==null&&vs(rr,t),Zs.forEach(e),eo.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Zv(n),n.blockedOn===null&&Kn.shift()}var Ni=Mn.ReactCurrentBatchConfig,cl=!0;function Qk(t,e,n,r){var i=de,s=Ni.transition;Ni.transition=null;try{de=1,pf(t,e,n,r)}finally{de=i,Ni.transition=s}}function Yk(t,e,n,r){var i=de,s=Ni.transition;Ni.transition=null;try{de=4,pf(t,e,n,r)}finally{de=i,Ni.transition=s}}function pf(t,e,n,r){if(cl){var i=Fh(t,e,n,r);if(i===null)Bc(t,e,r,hl,n),bm(t,r);else if(Gk(i,t,e,n,r))r.stopPropagation();else if(bm(t,r),e&4&&-1<Kk.indexOf(t)){for(;i!==null;){var s=bo(i);if(s!==null&&Qv(s),s=Fh(t,e,n,r),s===null&&Bc(t,e,r,hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bc(t,e,r,null,n)}}var hl=null;function Fh(t,e,n,r){if(hl=null,t=cf(r),t=Nr(t),t!==null)if(e=ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function e0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mk()){case hf:return 1;case Wv:return 4;case ll:case Uk:return 16;case Kv:return 536870912;default:return 16}default:return 16}}var Xn=null,mf=null,za=null;function t0(){if(za)return za;var t,e=mf,n=e.length,r,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return za=i.slice(t,1<r?1-r:void 0)}function Ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ya(){return!0}function Mm(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ya:Mm,this.isPropagationStopped=Mm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gf=Ut(es),Lo=Ie({},es,{view:0,detail:0}),Xk=Ut(Lo),Oc,Lc,ws,su=Ie({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(Oc=t.screenX-ws.screenX,Lc=t.screenY-ws.screenY):Lc=Oc=0,ws=t),Oc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),Um=Ut(su),Jk=Ie({},su,{dataTransfer:0}),Zk=Ut(Jk),e_=Ie({},Lo,{relatedTarget:0}),bc=Ut(e_),t_=Ie({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),n_=Ut(t_),r_=Ie({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i_=Ut(r_),s_=Ie({},es,{data:0}),Fm=Ut(s_),o_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=l_[t])?!!e[t]:!1}function yf(){return u_}var c_=Ie({},Lo,{key:function(t){if(t.key){var e=o_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yf,charCode:function(t){return t.type==="keypress"?Ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h_=Ut(c_),d_=Ie({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=Ut(d_),f_=Ie({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yf}),p_=Ut(f_),m_=Ie({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),g_=Ut(m_),y_=Ie({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),v_=Ut(y_),w_=[9,13,27,32],vf=An&&"CompositionEvent"in window,$s=null;An&&"documentMode"in document&&($s=document.documentMode);var S_=An&&"TextEvent"in window&&!$s,n0=An&&(!vf||$s&&8<$s&&11>=$s),zm=String.fromCharCode(32),Bm=!1;function r0(t,e){switch(t){case"keyup":return w_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function E_(t,e){switch(t){case"compositionend":return i0(e);case"keypress":return e.which!==32?null:(Bm=!0,zm);case"textInput":return t=e.data,t===zm&&Bm?null:t;default:return null}}function k_(t,e){if(fi)return t==="compositionend"||!vf&&r0(t,e)?(t=t0(),za=mf=Xn=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n0&&e.locale!=="ko"?null:e.data;default:return null}}var __={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!__[t.type]:e==="textarea"}function s0(t,e,n,r){$v(r),e=dl(e,"onChange"),0<e.length&&(n=new gf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ms=null,no=null;function C_(t){g0(t,0)}function ou(t){var e=gi(t);if(Rv(e))return t}function I_(t,e){if(t==="change")return e}var o0=!1;if(An){var $c;if(An){var Mc="oninput"in document;if(!Mc){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),Mc=typeof Hm.oninput=="function"}$c=Mc}else $c=!1;o0=$c&&(!document.documentMode||9<document.documentMode)}function Wm(){Ms&&(Ms.detachEvent("onpropertychange",a0),no=Ms=null)}function a0(t){if(t.propertyName==="value"&&ou(no)){var e=[];s0(e,no,t,cf(t)),Vv(C_,e)}}function T_(t,e,n){t==="focusin"?(Wm(),Ms=e,no=n,Ms.attachEvent("onpropertychange",a0)):t==="focusout"&&Wm()}function x_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(no)}function A_(t,e){if(t==="click")return ou(e)}function R_(t,e){if(t==="input"||t==="change")return ou(e)}function N_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:N_;function ro(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eh.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,e){var n=Km(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function l0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function u0(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function D_(t){var e=u0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&l0(n.ownerDocument.documentElement,n)){if(r!==null&&wf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gm(n,s);var o=Gm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P_=An&&"documentMode"in document&&11>=document.documentMode,pi=null,Vh=null,Us=null,zh=!1;function qm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||pi==null||pi!==sl(r)||(r=pi,"selectionStart"in r&&wf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&ro(Us,r)||(Us=r,r=dl(Vh,"onSelect"),0<r.length&&(e=new gf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},Uc={},c0={};An&&(c0=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function au(t){if(Uc[t])return Uc[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in c0)return Uc[t]=e[n];return t}var h0=au("animationend"),d0=au("animationiteration"),f0=au("animationstart"),p0=au("transitionend"),m0=new Map,Qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){m0.set(t,e),ni(e,[t])}for(var Fc=0;Fc<Qm.length;Fc++){var Vc=Qm[Fc],O_=Vc.toLowerCase(),L_=Vc[0].toUpperCase()+Vc.slice(1);kr(O_,"on"+L_)}kr(h0,"onAnimationEnd");kr(d0,"onAnimationIteration");kr(f0,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(p0,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b_=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function Ym(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ok(r,e,void 0,t),t.currentTarget=null}function g0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ym(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ym(i,a,u),s=l}}}if(al)throw t=$h,al=!1,$h=null,t}function ve(t,e){var n=e[Kh];n===void 0&&(n=e[Kh]=new Set);var r=t+"__bubble";n.has(r)||(y0(e,t,2,!1),n.add(r))}function zc(t,e,n){var r=0;e&&(r|=4),y0(n,t,r,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[wa]){t[wa]=!0,Cv.forEach(function(n){n!=="selectionchange"&&(b_.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,zc("selectionchange",!1,e))}}function y0(t,e,n,r){switch(e0(e)){case 1:var i=Qk;break;case 4:i=Yk;break;default:i=pf}n=i.bind(null,e,n,t),i=void 0,!bh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Nr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Vv(function(){var u=s,c=cf(n),h=[];e:{var d=m0.get(t);if(d!==void 0){var g=gf,v=t;switch(t){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":g=h_;break;case"focusin":v="focus",g=bc;break;case"focusout":v="blur",g=bc;break;case"beforeblur":case"afterblur":g=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Zk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=p_;break;case h0:case d0:case f0:g=n_;break;case p0:g=g_;break;case"scroll":g=Xk;break;case"wheel":g=v_;break;case"copy":case"cut":case"paste":g=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vm}var w=(e&4)!==0,_=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,p!==null&&(E=Js(f,p),E!=null&&w.push(so(f,E,y)))),_)break;f=f.return}0<w.length&&(d=new g(d,v,null,n,c),h.push({event:d,listeners:w}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Oh&&(v=n.relatedTarget||n.fromElement)&&(Nr(v)||v[Rn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Nr(v):null,v!==null&&(_=ri(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Um,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Vm,E="onPointerLeave",p="onPointerEnter",f="pointer"),_=g==null?d:gi(g),y=v==null?d:gi(v),d=new w(E,f+"leave",g,n,c),d.target=_,d.relatedTarget=y,E=null,Nr(c)===u&&(w=new w(p,f+"enter",v,n,c),w.target=y,w.relatedTarget=_,E=w),_=E,g&&v)t:{for(w=g,p=v,f=0,y=w;y;y=ui(y))f++;for(y=0,E=p;E;E=ui(E))y++;for(;0<f-y;)w=ui(w),f--;for(;0<y-f;)p=ui(p),y--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=ui(w),p=ui(p)}w=null}else w=null;g!==null&&Xm(h,d,g,w,!1),v!==null&&_!==null&&Xm(h,_,v,w,!0)}}e:{if(d=u?gi(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=I_;else if(jm(d))if(o0)C=R_;else{C=x_;var A=T_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=A_);if(C&&(C=C(t,u))){s0(h,C,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Ah(d,"number",d.value)}switch(A=u?gi(u):window,t){case"focusin":(jm(A)||A.contentEditable==="true")&&(pi=A,Vh=u,Us=null);break;case"focusout":Us=Vh=pi=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,qm(h,n,c);break;case"selectionchange":if(P_)break;case"keydown":case"keyup":qm(h,n,c)}var P;if(vf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else fi?r0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(n0&&n.locale!=="ko"&&(fi||L!=="onCompositionStart"?L==="onCompositionEnd"&&fi&&(P=t0()):(Xn=c,mf="value"in Xn?Xn.value:Xn.textContent,fi=!0)),A=dl(u,L),0<A.length&&(L=new Fm(L,t,null,n,c),h.push({event:L,listeners:A}),P?L.data=P:(P=i0(n),P!==null&&(L.data=P)))),(P=S_?E_(t,n):k_(t,n))&&(u=dl(u,"onBeforeInput"),0<u.length&&(c=new Fm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}g0(h,e)})}function so(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Js(t,n),s!=null&&r.unshift(so(t,s,i)),s=Js(t,e),s!=null&&r.push(so(t,s,i))),t=t.return}return r}function ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Js(n,s),l!=null&&o.unshift(so(n,l,a))):i||(l=Js(n,s),l!=null&&o.push(so(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $_=/\r\n?/g,M_=/\u0000|\uFFFD/g;function Jm(t){return(typeof t=="string"?t:""+t).replace($_,`
`).replace(M_,"")}function Sa(t,e,n){if(e=Jm(e),Jm(t)!==e&&n)throw Error(T(425))}function fl(){}var Bh=null,jh=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wh=typeof setTimeout=="function"?setTimeout:void 0,U_=typeof clearTimeout=="function"?clearTimeout:void 0,Zm=typeof Promise=="function"?Promise:void 0,F_=typeof queueMicrotask=="function"?queueMicrotask:typeof Zm<"u"?function(t){return Zm.resolve(null).then(t).catch(V_)}:Wh;function V_(t){setTimeout(function(){throw t})}function jc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),to(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);to(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function eg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),on="__reactFiber$"+ts,oo="__reactProps$"+ts,Rn="__reactContainer$"+ts,Kh="__reactEvents$"+ts,z_="__reactListeners$"+ts,B_="__reactHandles$"+ts;function Nr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=eg(t);t!==null;){if(n=t[on])return n;t=eg(t)}return e}t=n,n=t.parentNode}return null}function bo(t){return t=t[on]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function lu(t){return t[oo]||null}var Gh=[],yi=-1;function _r(t){return{current:t}}function we(t){0>yi||(t.current=Gh[yi],Gh[yi]=null,yi--)}function ge(t,e){yi++,Gh[yi]=t.current,t.current=e}var gr={},dt=_r(gr),Tt=_r(!1),jr=gr;function Ui(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function pl(){we(Tt),we(dt)}function tg(t,e,n){if(dt.current!==gr)throw Error(T(168));ge(dt,e),ge(Tt,n)}function v0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,Tk(t)||"Unknown",i));return Ie({},n,r)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,jr=dt.current,ge(dt,t),ge(Tt,Tt.current),!0}function ng(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=v0(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,we(Tt),we(dt),ge(dt,t)):we(Tt),ge(Tt,n)}var yn=null,uu=!1,Hc=!1;function w0(t){yn===null?yn=[t]:yn.push(t)}function j_(t){uu=!0,w0(t)}function Cr(){if(!Hc&&yn!==null){Hc=!0;var t=0,e=de;try{var n=yn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,uu=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),Hv(hf,Cr),i}finally{de=e,Hc=!1}}return null}var vi=[],wi=0,gl=null,yl=0,Vt=[],zt=0,Hr=null,wn=1,Sn="";function xr(t,e){vi[wi++]=yl,vi[wi++]=gl,gl=t,yl=e}function S0(t,e,n){Vt[zt++]=wn,Vt[zt++]=Sn,Vt[zt++]=Hr,Hr=t;var r=wn;t=Sn;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wn=1<<32-en(e)+i|n<<i|r,Sn=s+t}else wn=1<<s|n<<i|r,Sn=t}function Sf(t){t.return!==null&&(xr(t,1),S0(t,1,0))}function Ef(t){for(;t===gl;)gl=vi[--wi],vi[wi]=null,yl=vi[--wi],vi[wi]=null;for(;t===Hr;)Hr=Vt[--zt],Vt[zt]=null,Sn=Vt[--zt],Vt[zt]=null,wn=Vt[--zt],Vt[zt]=null}var Ot=null,Pt=null,Se=!1,Zt=null;function E0(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Pt=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:wn,overflow:Sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Pt=null,!0):!1;default:return!1}}function qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(Se){var e=Pt;if(e){var n=e;if(!rg(t,e)){if(qh(t))throw Error(T(418));e=ir(n.nextSibling);var r=Ot;e&&rg(t,e)?E0(r,n):(t.flags=t.flags&-4097|2,Se=!1,Ot=t)}}else{if(qh(t))throw Error(T(418));t.flags=t.flags&-4097|2,Se=!1,Ot=t}}}function ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function Ea(t){if(t!==Ot)return!1;if(!Se)return ig(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=Pt)){if(qh(t))throw k0(),Error(T(418));for(;e;)E0(t,e),e=ir(e.nextSibling)}if(ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Ot?ir(t.stateNode.nextSibling):null;return!0}function k0(){for(var t=Pt;t;)t=ir(t.nextSibling)}function Fi(){Pt=Ot=null,Se=!1}function kf(t){Zt===null?Zt=[t]:Zt.push(t)}var H_=Mn.ReactCurrentBatchConfig;function Xt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vl=_r(null),wl=null,Si=null,_f=null;function Cf(){_f=Si=wl=null}function If(t){var e=vl.current;we(vl),t._currentValue=e}function Yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){wl=t,_f=Si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ct=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},Si===null){if(wl===null)throw Error(T(308));Si=t,wl.dependencies={lanes:0,firstContext:t}}else Si=Si.next=t;return e}var Dr=null;function Tf(t){Dr===null?Dr=[t]:Dr.push(t)}function _0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Tf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,Tf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,df(t,n)}}function sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sl(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(g,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(g,h,d):v,d==null)break e;h=Ie({},h,d);break e;case 2:Wn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=h}}function og(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var I0=new _v.Component().refs;function Xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=ar(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(tn(e,t,i,r),ja(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=ar(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(tn(e,t,i,r),ja(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=ar(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=sr(t,i,r),e!==null&&(tn(e,t,r,n),ja(e,t,r))}};function ag(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ro(n,r)||!ro(i,s):!0}function T0(t,e,n){var r=!1,i=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=xt(e)?jr:dt.current,r=e.contextTypes,s=(r=r!=null)?Ui(t,i):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function lg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function Jh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=I0,xf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=xt(e)?jr:dt.current,i.context=Ui(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cu.enqueueReplaceState(i,i.state,null),Sl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===I0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ug(t){var e=t._init;return e(t._payload)}function x0(t){function e(p,f){if(t){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=lr(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,y,E){return f===null||f.tag!==6?(f=Xc(y,p.mode,E),f.return=p,f):(f=i(f,y),f.return=p,f)}function l(p,f,y,E){var C=y.type;return C===di?c(p,f,y.props.children,E,y.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Hn&&ug(C)===f.type)?(E=i(f,y.props),E.ref=Ss(p,f,y),E.return=p,E):(E=Qa(y.type,y.key,y.props,null,p.mode,E),E.ref=Ss(p,f,y),E.return=p,E)}function u(p,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Jc(y,p.mode,E),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function c(p,f,y,E,C){return f===null||f.tag!==7?(f=Fr(y,p.mode,E,C),f.return=p,f):(f=i(f,y),f.return=p,f)}function h(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xc(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ha:return y=Qa(f.type,f.key,f.props,null,p.mode,y),y.ref=Ss(p,null,f),y.return=p,y;case hi:return f=Jc(f,p.mode,y),f.return=p,f;case Hn:var E=f._init;return h(p,E(f._payload),y)}if(Is(f)||ms(f))return f=Fr(f,p.mode,y,null),f.return=p,f;ka(p,f)}return null}function d(p,f,y,E){var C=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(p,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ha:return y.key===C?l(p,f,y,E):null;case hi:return y.key===C?u(p,f,y,E):null;case Hn:return C=y._init,d(p,f,C(y._payload),E)}if(Is(y)||ms(y))return C!==null?null:c(p,f,y,E,null);ka(p,y)}return null}function g(p,f,y,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(y)||null,a(f,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ha:return p=p.get(E.key===null?y:E.key)||null,l(f,p,E,C);case hi:return p=p.get(E.key===null?y:E.key)||null,u(f,p,E,C);case Hn:var A=E._init;return g(p,f,y,A(E._payload),C)}if(Is(E)||ms(E))return p=p.get(y)||null,c(f,p,E,C,null);ka(f,E)}return null}function v(p,f,y,E){for(var C=null,A=null,P=f,L=f=0,ee=null;P!==null&&L<y.length;L++){P.index>L?(ee=P,P=null):ee=P.sibling;var W=d(p,P,y[L],E);if(W===null){P===null&&(P=ee);break}t&&P&&W.alternate===null&&e(p,P),f=s(W,f,L),A===null?C=W:A.sibling=W,A=W,P=ee}if(L===y.length)return n(p,P),Se&&xr(p,L),C;if(P===null){for(;L<y.length;L++)P=h(p,y[L],E),P!==null&&(f=s(P,f,L),A===null?C=P:A.sibling=P,A=P);return Se&&xr(p,L),C}for(P=r(p,P);L<y.length;L++)ee=g(P,p,L,y[L],E),ee!==null&&(t&&ee.alternate!==null&&P.delete(ee.key===null?L:ee.key),f=s(ee,f,L),A===null?C=ee:A.sibling=ee,A=ee);return t&&P.forEach(function(Ve){return e(p,Ve)}),Se&&xr(p,L),C}function w(p,f,y,E){var C=ms(y);if(typeof C!="function")throw Error(T(150));if(y=C.call(y),y==null)throw Error(T(151));for(var A=C=null,P=f,L=f=0,ee=null,W=y.next();P!==null&&!W.done;L++,W=y.next()){P.index>L?(ee=P,P=null):ee=P.sibling;var Ve=d(p,P,W.value,E);if(Ve===null){P===null&&(P=ee);break}t&&P&&Ve.alternate===null&&e(p,P),f=s(Ve,f,L),A===null?C=Ve:A.sibling=Ve,A=Ve,P=ee}if(W.done)return n(p,P),Se&&xr(p,L),C;if(P===null){for(;!W.done;L++,W=y.next())W=h(p,W.value,E),W!==null&&(f=s(W,f,L),A===null?C=W:A.sibling=W,A=W);return Se&&xr(p,L),C}for(P=r(p,P);!W.done;L++,W=y.next())W=g(P,p,L,W.value,E),W!==null&&(t&&W.alternate!==null&&P.delete(W.key===null?L:W.key),f=s(W,f,L),A===null?C=W:A.sibling=W,A=W);return t&&P.forEach(function(Le){return e(p,Le)}),Se&&xr(p,L),C}function _(p,f,y,E){if(typeof y=="object"&&y!==null&&y.type===di&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ha:e:{for(var C=y.key,A=f;A!==null;){if(A.key===C){if(C=y.type,C===di){if(A.tag===7){n(p,A.sibling),f=i(A,y.props.children),f.return=p,p=f;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Hn&&ug(C)===A.type){n(p,A.sibling),f=i(A,y.props),f.ref=Ss(p,A,y),f.return=p,p=f;break e}n(p,A);break}else e(p,A);A=A.sibling}y.type===di?(f=Fr(y.props.children,p.mode,E,y.key),f.return=p,p=f):(E=Qa(y.type,y.key,y.props,null,p.mode,E),E.ref=Ss(p,f,y),E.return=p,p=E)}return o(p);case hi:e:{for(A=y.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Jc(y,p.mode,E),f.return=p,p=f}return o(p);case Hn:return A=y._init,_(p,f,A(y._payload),E)}if(Is(y))return v(p,f,y,E);if(ms(y))return w(p,f,y,E);ka(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=Xc(y,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return _}var Vi=x0(!0),A0=x0(!1),$o={},cn=_r($o),ao=_r($o),lo=_r($o);function Pr(t){if(t===$o)throw Error(T(174));return t}function Af(t,e){switch(ge(lo,e),ge(ao,t),ge(cn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nh(e,t)}we(cn),ge(cn,e)}function zi(){we(cn),we(ao),we(lo)}function R0(t){Pr(lo.current);var e=Pr(cn.current),n=Nh(e,t.type);e!==n&&(ge(ao,t),ge(cn,n))}function Rf(t){ao.current===t&&(we(cn),we(ao))}var _e=_r(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function Nf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var Ha=Mn.ReactCurrentDispatcher,Kc=Mn.ReactCurrentBatchConfig,Wr=0,Ce=null,be=null,Be=null,kl=!1,Fs=!1,uo=0,W_=0;function st(){throw Error(T(321))}function Df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function Pf(t,e,n,r,i,s){if(Wr=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ha.current=t===null||t.memoizedState===null?Q_:Y_,t=n(r,i),Fs){s=0;do{if(Fs=!1,uo=0,25<=s)throw Error(T(301));s+=1,Be=be=null,e.updateQueue=null,Ha.current=X_,t=n(r,i)}while(Fs)}if(Ha.current=_l,e=be!==null&&be.next!==null,Wr=0,Be=be=Ce=null,kl=!1,e)throw Error(T(300));return t}function Of(){var t=uo!==0;return uo=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ce.memoizedState=Be=t:Be=Be.next=t,Be}function Kt(){if(be===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Be===null?Ce.memoizedState:Be.next;if(e!==null)Be=e,be=t;else{if(t===null)throw Error(T(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Be===null?Ce.memoizedState=Be=t:Be=Be.next=t}return Be}function co(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Kt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Wr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ce.lanes|=c,Kr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,nn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Kt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function N0(){}function D0(t,e){var n=Ce,r=Kt(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,Lf(L0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,ho(9,O0.bind(null,n,r,i,e),void 0,null),je===null)throw Error(T(349));(Wr&30)!==0||P0(n,e,i)}return i}function P0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,r){e.value=n,e.getSnapshot=r,b0(e)&&$0(t)}function L0(t,e,n){return n(function(){b0(e)&&$0(t)})}function b0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function $0(t){var e=Nn(t,1);e!==null&&tn(e,t,1,-1)}function cg(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:t},e.queue=t,t=t.dispatch=q_.bind(null,Ce,t),[e.memoizedState,t]}function ho(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function M0(){return Kt().memoizedState}function Wa(t,e,n,r){var i=sn();Ce.flags|=t,i.memoizedState=ho(1|e,n,void 0,r===void 0?null:r)}function hu(t,e,n,r){var i=Kt();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&Df(r,o.deps)){i.memoizedState=ho(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=ho(1|e,n,s,r)}function hg(t,e){return Wa(8390656,8,t,e)}function Lf(t,e){return hu(2048,8,t,e)}function U0(t,e){return hu(4,2,t,e)}function F0(t,e){return hu(4,4,t,e)}function V0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z0(t,e,n){return n=n!=null?n.concat([t]):null,hu(4,4,V0.bind(null,e,t),n)}function bf(){}function B0(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Df(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function j0(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Df(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function H0(t,e,n){return(Wr&21)===0?(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n):(nn(n,e)||(n=Gv(),Ce.lanes|=n,Kr|=n,t.baseState=!0),e)}function K_(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{de=n,Kc.transition=r}}function W0(){return Kt().memoizedState}function G_(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},K0(t))G0(e,n);else if(n=_0(t,e,n,r),n!==null){var i=wt();tn(n,t,r,i),q0(n,e,r)}}function q_(t,e,n){var r=ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(t))G0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nn(a,o)){var l=e.interleaved;l===null?(i.next=i,Tf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=_0(t,e,i,r),n!==null&&(i=wt(),tn(n,t,r,i),q0(n,e,r))}}function K0(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function G0(t,e){Fs=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q0(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,df(t,n)}}var _l={readContext:Wt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Q_={readContext:Wt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wa(4194308,4,V0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wa(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=G_.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:cg,useDebugValue:bf,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=cg(!1),e=t[0];return t=K_.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=sn();if(Se){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),je===null)throw Error(T(349));(Wr&30)!==0||P0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hg(L0.bind(null,r,s,t),[t]),r.flags|=2048,ho(9,O0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=je.identifierPrefix;if(Se){var n=Sn,r=wn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y_={readContext:Wt,useCallback:B0,useContext:Wt,useEffect:Lf,useImperativeHandle:z0,useInsertionEffect:U0,useLayoutEffect:F0,useMemo:j0,useReducer:Gc,useRef:M0,useState:function(){return Gc(co)},useDebugValue:bf,useDeferredValue:function(t){var e=Kt();return H0(e,be.memoizedState,t)},useTransition:function(){var t=Gc(co)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:N0,useSyncExternalStore:D0,useId:W0,unstable_isNewReconciler:!1},X_={readContext:Wt,useCallback:B0,useContext:Wt,useEffect:Lf,useImperativeHandle:z0,useInsertionEffect:U0,useLayoutEffect:F0,useMemo:j0,useReducer:qc,useRef:M0,useState:function(){return qc(co)},useDebugValue:bf,useDeferredValue:function(t){var e=Kt();return be===null?e.memoizedState=t:H0(e,be.memoizedState,t)},useTransition:function(){var t=qc(co)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:N0,useSyncExternalStore:D0,useId:W0,unstable_isNewReconciler:!1};function Bi(t,e){try{var n="",r=e;do n+=Ik(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var J_=typeof WeakMap=="function"?WeakMap:Map;function Q0(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Il||(Il=!0,ud=r),Zh(t,e)},n}function Y0(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new J_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dC.bind(null,t,e,n),e.then(t,t))}function fg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pg(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Z_=Mn.ReactCurrentOwner,Ct=!1;function yt(t,e,n,r){e.child=t===null?A0(e,null,n,r):Vi(e,t.child,n,r)}function mg(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=Pf(t,e,n,r,s,i),n=Of(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(Se&&n&&Sf(e),e.flags|=1,yt(t,e,r,i),e.child)}function gg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,X0(t,e,s,r,i)):(t=Qa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function X0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ro(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ct=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return ed(t,e,n,r,i)}function J0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ki,Dt),Dt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(ki,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(ki,Dt),Dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(ki,Dt),Dt|=r;return yt(t,e,i,n),e.child}function Z0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,i){var s=xt(n)?jr:dt.current;return s=Ui(e,s),Di(e,i),n=Pf(t,e,n,r,s,i),r=Of(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(Se&&r&&Sf(e),e.flags|=1,yt(t,e,n,i),e.child)}function yg(t,e,n,r,i){if(xt(n)){var s=!0;ml(e)}else s=!1;if(Di(e,i),e.stateNode===null)Ka(t,e),T0(e,n,r),Jh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=xt(n)?jr:dt.current,u=Ui(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&lg(e,o,r,u),Wn=!1;var d=e.memoizedState;o.state=d,Sl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Tt.current||Wn?(typeof c=="function"&&(Xh(e,n,c,r),l=e.memoizedState),(a=Wn||ag(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,C0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wt(l):(l=xt(n)?jr:dt.current,l=Ui(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&lg(e,o,r,l),Wn=!1,d=e.memoizedState,o.state=d,Sl(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Tt.current||Wn?(typeof g=="function"&&(Xh(e,n,g,r),v=e.memoizedState),(u=Wn||ag(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,s,i)}function td(t,e,n,r,i,s){Z0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ng(e,n,!1),Dn(t,e,s);r=e.stateNode,Z_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vi(e,t.child,null,s),e.child=Vi(e,null,a,s)):yt(t,e,a,s),e.memoizedState=r.state,i&&ng(e,n,!0),e.child}function e1(t){var e=t.stateNode;e.pendingContext?tg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tg(t,e.context,!1),Af(t,e.containerInfo)}function vg(t,e,n,r,i){return Fi(),kf(i),e.flags|=256,yt(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function t1(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(_e,i&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,r,0,null),t=Fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=nd,t):$f(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return eC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=lr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return s=t.child,t=s.sibling,r=lr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $f(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,r){return r!==null&&kf(r),Vi(e,t.child,null,n),t=$f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qc(Error(T(422))),_a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pu({mode:"visible",children:r.children},i,0,null),s=Fr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Vi(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,s);if((e.mode&1)===0)return _a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Qc(s,r,void 0),_a(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ct||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),tn(r,t,i,-1))}return Bf(),r=Qc(Error(T(421))),_a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=ir(i.nextSibling),Ot=e,Se=!0,Zt=null,t!==null&&(Vt[zt++]=wn,Vt[zt++]=Sn,Vt[zt++]=Hr,wn=t.id,Sn=t.overflow,Hr=e),e=$f(e,r.children),e.flags|=4096,e)}function wg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yh(t.return,e,n)}function Yc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function n1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=_e.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,n,e);else if(t.tag===19)wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(_e,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&El(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yc(e,!0,n,null,s);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ka(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tC(t,e,n){switch(e.tag){case 3:e1(e),Fi();break;case 5:R0(e);break;case 1:xt(e.type)&&ml(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(_e,_e.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?t1(t,e,n):(ge(_e,_e.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);ge(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return n1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,J0(t,e,n)}return Dn(t,e,n)}var r1,id,i1,s1;r1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};i1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pr(cn.current);var s=null;switch(n){case"input":i=Th(t,i),r=Th(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Rh(t,i),r=Rh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fl)}Dh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ys.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ys.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};s1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Es(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nC(t,e,n){var r=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return xt(e.type)&&pl(),ot(e),null;case 3:return r=e.stateNode,zi(),we(Tt),we(dt),Nf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Zt!==null&&(dd(Zt),Zt=null))),id(t,e),ot(e),null;case 5:Rf(e);var i=Pr(lo.current);if(n=e.type,t!==null&&e.stateNode!=null)i1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return ot(e),null}if(t=Pr(cn.current),Ea(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[oo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)ve(xs[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Am(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Nm(r,s),ve("invalid",r)}Dh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,a,t),i=["children",""+a]):Ys.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":da(r),Rm(r,s,!0);break;case"textarea":da(r),Dm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[oo]=r,r1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ph(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)ve(xs[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Am(t,r),i=Th(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Nm(t,r),i=Rh(t,r),ve("invalid",t);break;default:i=r}Dh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?bv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ov(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xs(t,l):typeof l=="number"&&Xs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ys.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",t):l!=null&&of(t,s,l,o))}switch(n){case"input":da(t),Rm(t,r,!1);break;case"textarea":da(t),Dm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)s1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Pr(lo.current),Pr(cn.current),Ea(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:Sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return ot(e),null;case 13:if(we(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Pt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)k0(),Fi(),e.flags|=98560,s=!1;else if(s=Ea(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[on]=e}else Fi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else Zt!==null&&(dd(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(_e.current&1)!==0?$e===0&&($e=3):Bf())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return zi(),id(t,e),t===null&&io(e.stateNode.containerInfo),ot(e),null;case 10:return If(e.type._context),ot(e),null;case 17:return xt(e.type)&&pl(),ot(e),null;case 19:if(we(_e),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Es(s,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=El(t),o!==null){for(e.flags|=128,Es(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>ji&&(e.flags|=128,r=!0,Es(s,!1),e.lanes=4194304)}else{if(!r)if(t=El(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return ot(e),null}else 2*Ne()-s.renderingStartTime>ji&&n!==1073741824&&(e.flags|=128,r=!0,Es(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=_e.current,ge(_e,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return zf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Dt&1073741824)!==0&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function rC(t,e){switch(Ef(e),e.tag){case 1:return xt(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zi(),we(Tt),we(dt),Nf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(we(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(_e),null;case 4:return zi(),null;case 10:return If(e.type._context),null;case 22:case 23:return zf(),null;case 24:return null;default:return null}}var Ca=!1,lt=!1,iC=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ei(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function sd(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Sg=!1;function sC(t,e){if(Bh=cl,t=u0(),wf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jh={focusedElem:t,selectionRange:n},cl=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,_=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:Xt(e.type,w),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(E){xe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=Sg,Sg=!1,v}function Vs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sd(e,n,s)}i=i.next}while(i!==r)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o1(t){var e=t.alternate;e!==null&&(t.alternate=null,o1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[oo],delete e[Kh],delete e[z_],delete e[B_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function a1(t){return t.tag===5||t.tag===3||t.tag===4}function Eg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Ye=null,Jt=!1;function zn(t,e,n){for(n=n.child;n!==null;)l1(t,e,n),n=n.sibling}function l1(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:lt||Ei(n,e);case 6:var r=Ye,i=Jt;Ye=null,zn(t,e,n),Ye=r,Jt=i,Ye!==null&&(Jt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Jt?(t=Ye,n=n.stateNode,t.nodeType===8?jc(t.parentNode,n):t.nodeType===1&&jc(t,n),to(t)):jc(Ye,n.stateNode));break;case 4:r=Ye,i=Jt,Ye=n.stateNode.containerInfo,Jt=!0,zn(t,e,n),Ye=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&sd(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!lt&&(Ei(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,e,a)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,zn(t,e,n),lt=r):zn(t,e,n);break;default:zn(t,e,n)}}function kg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iC),e.forEach(function(r){var i=pC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Jt=!1;break e;case 3:Ye=a.stateNode.containerInfo,Jt=!0;break e;case 4:Ye=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(Ye===null)throw Error(T(160));l1(s,o,i),Ye=null,Jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){xe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u1(e,t),e=e.sibling}function u1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),rn(t),r&4){try{Vs(3,t,t.return),du(3,t)}catch(w){xe(t,t.return,w)}try{Vs(5,t,t.return)}catch(w){xe(t,t.return,w)}}break;case 1:Yt(e,t),rn(t),r&512&&n!==null&&Ei(n,n.return);break;case 5:if(Yt(e,t),rn(t),r&512&&n!==null&&Ei(n,n.return),t.flags&32){var i=t.stateNode;try{Xs(i,"")}catch(w){xe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Nv(i,s),Ph(a,o);var u=Ph(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?bv(i,h):c==="dangerouslySetInnerHTML"?Ov(i,h):c==="children"?Xs(i,h):of(i,c,h,u)}switch(a){case"input":xh(i,s);break;case"textarea":Dv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?xi(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?xi(i,!!s.multiple,s.defaultValue,!0):xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[oo]=s}catch(w){xe(t,t.return,w)}}break;case 6:if(Yt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){xe(t,t.return,w)}}break;case 3:if(Yt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(w){xe(t,t.return,w)}break;case 4:Yt(e,t),rn(t);break;case 13:Yt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ff=Ne())),r&4&&kg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(u=lt)||c,Yt(e,t),lt=u):Yt(e,t),rn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,g=d.child,d.tag){case 0:case 11:case 14:case 15:Vs(4,d,d.return);break;case 1:Ei(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){xe(r,n,w)}}break;case 5:Ei(d,d.return);break;case 22:if(d.memoizedState!==null){Cg(h);continue}}g!==null?(g.return=d,M=g):Cg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lv("display",o))}catch(w){xe(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){xe(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yt(e,t),rn(t),r&4&&kg(t);break;case 21:break;default:Yt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(a1(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xs(i,""),r.flags&=-33);var s=Eg(t);ld(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Eg(t);ad(t,a,o);break;default:throw Error(T(161))}}catch(l){xe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oC(t,e,n){M=t,c1(t)}function c1(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ca;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=Ca;var u=lt;if(Ca=o,(lt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Ig(i):l!==null?(l.return=o,M=l):Ig(i);for(;s!==null;)M=s,c1(s),s=s.sibling;M=i,Ca=a,lt=u}_g(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,M=s):_g(t)}}function _g(t){for(;M!==null;){var e=M;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:lt||du(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&og(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}og(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&to(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}lt||e.flags&512&&od(e)}catch(d){xe(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Cg(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Ig(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(l){xe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){xe(e,i,l)}}var s=e.return;try{od(e)}catch(l){xe(e,s,l)}break;case 5:var o=e.return;try{od(e)}catch(l){xe(e,o,l)}}}catch(l){xe(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var aC=Math.ceil,Cl=Mn.ReactCurrentDispatcher,Mf=Mn.ReactCurrentOwner,Ht=Mn.ReactCurrentBatchConfig,se=0,je=null,Oe=null,Ze=0,Dt=0,ki=_r(0),$e=0,fo=null,Kr=0,fu=0,Uf=0,zs=null,_t=null,Ff=0,ji=1/0,gn=null,Il=!1,ud=null,or=null,Ia=!1,Jn=null,Tl=0,Bs=0,cd=null,Ga=-1,qa=0;function wt(){return(se&6)!==0?Ne():Ga!==-1?Ga:Ga=Ne()}function ar(t){return(t.mode&1)===0?1:(se&2)!==0&&Ze!==0?Ze&-Ze:H_.transition!==null?(qa===0&&(qa=Gv()),qa):(t=de,t!==0||(t=window.event,t=t===void 0?16:e0(t.type)),t)}function tn(t,e,n,r){if(50<Bs)throw Bs=0,cd=null,Error(T(185));Oo(t,n,r),((se&2)===0||t!==je)&&(t===je&&((se&2)===0&&(fu|=n),$e===4&&Gn(t,Ze)),At(t,r),n===1&&se===0&&(e.mode&1)===0&&(ji=Ne()+500,uu&&Cr()))}function At(t,e){var n=t.callbackNode;Hk(t,e);var r=ul(t,t===je?Ze:0);if(r===0)n!==null&&Lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lm(n),e===1)t.tag===0?j_(Tg.bind(null,t)):w0(Tg.bind(null,t)),F_(function(){(se&6)===0&&Cr()}),n=null;else{switch(qv(r)){case 1:n=hf;break;case 4:n=Wv;break;case 16:n=ll;break;case 536870912:n=Kv;break;default:n=ll}n=v1(n,h1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h1(t,e){if(Ga=-1,qa=0,(se&6)!==0)throw Error(T(327));var n=t.callbackNode;if(Pi()&&t.callbackNode!==n)return null;var r=ul(t,t===je?Ze:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=xl(t,r);else{e=r;var i=se;se|=2;var s=f1();(je!==t||Ze!==e)&&(gn=null,ji=Ne()+500,Ur(t,e));do try{cC();break}catch(a){d1(t,a)}while(1);Cf(),Cl.current=s,se=i,Oe!==null?e=0:(je=null,Ze=0,e=$e)}if(e!==0){if(e===2&&(i=Mh(t),i!==0&&(r=i,e=hd(t,i))),e===1)throw n=fo,Ur(t,0),Gn(t,r),At(t,Ne()),n;if(e===6)Gn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!lC(i)&&(e=xl(t,r),e===2&&(s=Mh(t),s!==0&&(r=s,e=hd(t,s))),e===1))throw n=fo,Ur(t,0),Gn(t,r),At(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Ar(t,_t,gn);break;case 3:if(Gn(t,r),(r&130023424)===r&&(e=Ff+500-Ne(),10<e)){if(ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wh(Ar.bind(null,t,_t,gn),e);break}Ar(t,_t,gn);break;case 4:if(Gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aC(r/1960))-r,10<r){t.timeoutHandle=Wh(Ar.bind(null,t,_t,gn),r);break}Ar(t,_t,gn);break;case 5:Ar(t,_t,gn);break;default:throw Error(T(329))}}}return At(t,Ne()),t.callbackNode===n?h1.bind(null,t):null}function hd(t,e){var n=zs;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=xl(t,e),t!==2&&(e=_t,_t=n,e!==null&&dd(e)),t}function dd(t){_t===null?_t=t:_t.push.apply(_t,t)}function lC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e){for(e&=~Uf,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function Tg(t){if((se&6)!==0)throw Error(T(327));Pi();var e=ul(t,0);if((e&1)===0)return At(t,Ne()),null;var n=xl(t,e);if(t.tag!==0&&n===2){var r=Mh(t);r!==0&&(e=r,n=hd(t,r))}if(n===1)throw n=fo,Ur(t,0),Gn(t,e),At(t,Ne()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,_t,gn),At(t,Ne()),null}function Vf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(ji=Ne()+500,uu&&Cr())}}function Gr(t){Jn!==null&&Jn.tag===0&&(se&6)===0&&Pi();var e=se;se|=1;var n=Ht.transition,r=de;try{if(Ht.transition=null,de=1,t)return t()}finally{de=r,Ht.transition=n,se=e,(se&6)===0&&Cr()}}function zf(){Dt=ki.current,we(ki)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,U_(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:zi(),we(Tt),we(dt),Nf();break;case 5:Rf(r);break;case 4:zi();break;case 13:we(_e);break;case 19:we(_e);break;case 10:If(r.type._context);break;case 22:case 23:zf()}n=n.return}if(je=t,Oe=t=lr(t.current,null),Ze=Dt=e,$e=0,fo=null,Uf=fu=Kr=0,_t=zs=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function d1(t,e){do{var n=Oe;try{if(Cf(),Ha.current=_l,kl){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kl=!1}if(Wr=0,Be=be=Ce=null,Fs=!1,uo=0,Mf.current=null,n===null||n.return===null){$e=1,fo=e,Oe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=fg(o);if(g!==null){g.flags&=-257,pg(g,o,a,s,e),g.mode&1&&dg(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if((e&1)===0){dg(s,u,e),Bf();break e}l=Error(T(426))}}else if(Se&&a.mode&1){var _=fg(o);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),pg(_,o,a,s,e),kf(Bi(l,a));break e}}s=l=Bi(l,a),$e!==4&&($e=2),zs===null?zs=[s]:zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Q0(s,l,e);sg(s,p);break e;case 1:a=l;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(or===null||!or.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Y0(s,a,e);sg(s,E);break e}}s=s.return}while(s!==null)}m1(n)}catch(C){e=C,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function f1(){var t=Cl.current;return Cl.current=_l,t===null?_l:t}function Bf(){($e===0||$e===3||$e===2)&&($e=4),je===null||(Kr&268435455)===0&&(fu&268435455)===0||Gn(je,Ze)}function xl(t,e){var n=se;se|=2;var r=f1();(je!==t||Ze!==e)&&(gn=null,Ur(t,e));do try{uC();break}catch(i){d1(t,i)}while(1);if(Cf(),se=n,Cl.current=r,Oe!==null)throw Error(T(261));return je=null,Ze=0,$e}function uC(){for(;Oe!==null;)p1(Oe)}function cC(){for(;Oe!==null&&!bk();)p1(Oe)}function p1(t){var e=y1(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?m1(t):Oe=e,Mf.current=null}function m1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=nC(n,e,Dt),n!==null){Oe=n;return}}else{if(n=rC(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Oe=null;return}}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);$e===0&&($e=5)}function Ar(t,e,n){var r=de,i=Ht.transition;try{Ht.transition=null,de=1,hC(t,e,n,r)}finally{Ht.transition=i,de=r}return null}function hC(t,e,n,r){do Pi();while(Jn!==null);if((se&6)!==0)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wk(t,s),t===je&&(Oe=je=null,Ze=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ia||(Ia=!0,v1(ll,function(){return Pi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ht.transition,Ht.transition=null;var o=de;de=1;var a=se;se|=4,Mf.current=null,sC(t,n),u1(n,t),D_(jh),cl=!!Bh,jh=Bh=null,t.current=n,oC(n),$k(),se=a,de=o,Ht.transition=s}else t.current=n;if(Ia&&(Ia=!1,Jn=t,Tl=i),s=t.pendingLanes,s===0&&(or=null),Fk(n.stateNode),At(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Il)throw Il=!1,t=ud,ud=null,t;return(Tl&1)!==0&&t.tag!==0&&Pi(),s=t.pendingLanes,(s&1)!==0?t===cd?Bs++:(Bs=0,cd=t):Bs=0,Cr(),null}function Pi(){if(Jn!==null){var t=qv(Tl),e=Ht.transition,n=de;try{if(Ht.transition=null,de=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,Tl=0,(se&6)!==0)throw Error(T(331));var i=se;for(se|=4,M=t.current;M!==null;){var s=M,o=s.child;if((M.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Vs(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,g=c.return;if(o1(c),c===u){M=null;break}if(d!==null){d.return=g,M=d;break}M=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}M=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Vs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,M=y;else e:for(o=f;M!==null;){if(a=M,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:du(9,a)}}catch(C){xe(a,a.return,C)}if(a===o){M=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,M=E;break e}M=a.return}}if(se=i,Cr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(iu,t)}catch{}r=!0}return r}finally{de=n,Ht.transition=e}}return!1}function xg(t,e,n){e=Bi(n,e),e=Q0(t,e,1),t=sr(t,e,1),e=wt(),t!==null&&(Oo(t,1,e),At(t,e))}function xe(t,e,n){if(t.tag===3)xg(t,t,n);else for(;e!==null;){if(e.tag===3){xg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=Bi(n,t),t=Y0(e,t,1),e=sr(e,t,1),t=wt(),e!==null&&(Oo(e,1,t),At(e,t));break}}e=e.return}}function dC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(Ze&n)===n&&($e===4||$e===3&&(Ze&130023424)===Ze&&500>Ne()-Ff?Ur(t,0):Uf|=n),At(t,e)}function g1(t,e){e===0&&((t.mode&1)===0?e=1:(e=ma,ma<<=1,(ma&130023424)===0&&(ma=4194304)));var n=wt();t=Nn(t,e),t!==null&&(Oo(t,e,n),At(t,n))}function fC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g1(t,n)}function pC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),g1(t,n)}var y1;y1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Ct=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ct=!1,tC(t,e,n);Ct=(t.flags&131072)!==0}else Ct=!1,Se&&(e.flags&1048576)!==0&&S0(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ka(t,e),t=e.pendingProps;var i=Ui(e,dt.current);Di(e,n),i=Pf(null,e,r,t,i,n);var s=Of();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xf(e),i.updater=cu,e.stateNode=i,i._reactInternals=e,Jh(e,r,t,n),e=td(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Sf(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ka(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gC(r),t=Xt(r,t),i){case 0:e=ed(null,e,r,t,n);break e;case 1:e=yg(null,e,r,t,n);break e;case 11:e=mg(null,e,r,t,n);break e;case 14:e=gg(null,e,r,Xt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),ed(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),yg(t,e,r,i,n);case 3:e:{if(e1(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,C0(t,e),Sl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bi(Error(T(423)),e),e=vg(t,e,r,n,i);break e}else if(r!==i){i=Bi(Error(T(424)),e),e=vg(t,e,r,n,i);break e}else for(Pt=ir(e.stateNode.containerInfo.firstChild),Ot=e,Se=!0,Zt=null,n=A0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===i){e=Dn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return R0(e),t===null&&Qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hh(r,i)?o=null:s!==null&&Hh(r,s)&&(e.flags|=32),Z0(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return t1(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vi(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),mg(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(vl,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!Tt.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Cn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=Wt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),gg(t,e,r,i,n);case 15:return X0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Ka(t,e),e.tag=1,xt(r)?(t=!0,ml(e)):t=!1,Di(e,n),T0(e,r,i),Jh(e,r,i,n),td(null,e,r,!0,t,n);case 19:return n1(t,e,n);case 22:return J0(t,e,n)}throw Error(T(156,e.tag))};function v1(t,e){return Hv(t,e)}function mC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new mC(t,e,n,r)}function jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gC(t){if(typeof t=="function")return jf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lf)return 11;if(t===uf)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case di:return Fr(n.children,i,s,e);case af:o=8,i|=8;break;case kh:return t=jt(12,n,e,i|2),t.elementType=kh,t.lanes=s,t;case _h:return t=jt(13,n,e,i),t.elementType=_h,t.lanes=s,t;case Ch:return t=jt(19,n,e,i),t.elementType=Ch,t.lanes=s,t;case xv:return pu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Iv:o=10;break e;case Tv:o=9;break e;case lf:o=11;break e;case uf:o=14;break e;case Hn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function pu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=xv,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hf(t,e,n,r,i,s,o,a,l){return t=new yC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(s),t}function vC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function w1(t){if(!t)return gr;t=t._reactInternals;e:{if(ri(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(xt(n))return v0(t,n,e)}return e}function S1(t,e,n,r,i,s,o,a,l){return t=Hf(n,r,!0,t,i,s,o,a,l),t.context=w1(null),n=t.current,r=wt(),i=ar(n),s=Cn(r,i),s.callback=e!=null?e:null,sr(n,s,i),t.current.lanes=i,Oo(t,i,r),At(t,r),t}function mu(t,e,n,r){var i=e.current,s=wt(),o=ar(i);return n=w1(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sr(i,e,o),t!==null&&(tn(t,i,o,s),ja(t,i,o)),o}function Al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ag(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wf(t,e){Ag(t,e),(t=t.alternate)&&Ag(t,e)}function wC(){return null}var E1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kf(t){this._internalRoot=t}gu.prototype.render=Kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));mu(t,e,null,null)};gu.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){mu(null,t,null,null)}),e[Rn]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&Zv(t)}};function Gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rg(){}function SC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Al(o);s.call(u)}}var o=S1(e,r,t,0,null,!1,!1,"",Rg);return t._reactRootContainer=o,t[Rn]=o.current,io(t.nodeType===8?t.parentNode:t),Gr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Al(l);a.call(u)}}var l=Hf(t,0,!1,null,null,!1,!1,"",Rg);return t._reactRootContainer=l,t[Rn]=l.current,io(t.nodeType===8?t.parentNode:t),Gr(function(){mu(e,l,n,r)}),l}function vu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Al(o);a.call(l)}}mu(e,o,t,i)}else o=SC(n,e,t,i,r);return Al(o)}Qv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&(df(e,n|1),At(e,Ne()),(se&6)===0&&(ji=Ne()+500,Cr()))}break;case 13:Gr(function(){var r=Nn(t,1);if(r!==null){var i=wt();tn(r,t,1,i)}}),Wf(t,1)}};ff=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=wt();tn(e,t,134217728,n)}Wf(t,134217728)}};Yv=function(t){if(t.tag===13){var e=ar(t),n=Nn(t,e);if(n!==null){var r=wt();tn(n,t,e,r)}Wf(t,e)}};Xv=function(){return de};Jv=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Lh=function(t,e,n){switch(e){case"input":if(xh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lu(r);if(!i)throw Error(T(90));Rv(r),xh(r,i)}}}break;case"textarea":Dv(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};Uv=Vf;Fv=Gr;var EC={usingClientEntryPoint:!1,Events:[bo,gi,lu,$v,Mv,Vf]},ks={findFiberByHostInstance:Nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kC={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bv(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||wC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{iu=Ta.inject(kC),un=Ta}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EC;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(e))throw Error(T(200));return vC(t,e,null,n)};Mt.createRoot=function(t,e){if(!Gf(t))throw Error(T(299));var n=!1,r="",i=E1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hf(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,io(t.nodeType===8?t.parentNode:t),new Kf(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Bv(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return Gr(t)};Mt.hydrate=function(t,e,n){if(!yu(e))throw Error(T(200));return vu(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!Gf(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=E1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=S1(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Rn]=e.current,io(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gu(e)};Mt.render=function(t,e,n){if(!yu(e))throw Error(T(200));return vu(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!yu(t))throw Error(T(40));return t._reactRootContainer?(Gr(function(){vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Vf;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yu(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return vu(t,e,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Mt})(nf);const Ng=fv(nf.exports);var Dg=nf.exports;Sh.createRoot=Dg.createRoot,Sh.hydrateRoot=Dg.hydrateRoot;/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rl.apply(this,arguments)}var Zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zn||(Zn={}));const Pg="popstate";function _C(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return fd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:pd(i)}return IC(e,n,null,t)}function CC(){return Math.random().toString(36).substr(2,8)}function Og(t){return{usr:t.state,key:t.key}}function fd(t,e,n,r){return n===void 0&&(n=null),Rl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ns(e):e,{state:n,key:e&&e.key||r||CC()})}function pd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ns(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function IC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Zn.Pop,l=null;function u(){a=Zn.Pop,l&&l({action:a,location:d.location})}function c(g,v){a=Zn.Push;let w=fd(d.location,g,v);n&&n(w,g);let _=Og(w),p=d.createHref(w);try{o.pushState(_,"",p)}catch{i.location.assign(p)}s&&l&&l({action:a,location:w})}function h(g,v){a=Zn.Replace;let w=fd(d.location,g,v);n&&n(w,g);let _=Og(w),p=d.createHref(w);o.replaceState(_,"",p),s&&l&&l({action:a,location:w})}let d={get action(){return a},get location(){return t(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pg,u),l=g,()=>{i.removeEventListener(Pg,u),l=null}},createHref(g){return e(i,g)},push:c,replace:h,go(g){return o.go(g)}};return d}var Lg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Lg||(Lg={}));function TC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ns(e):e,i=_1(r.pathname||"/",n);if(i==null)return null;let s=k1(t);xC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=$C(s[a],i);return o}function k1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(ft(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=ur([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(ft(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),k1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:LC(a,i.index),routesMeta:l})}),e}function xC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:bC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AC=/^:\w+$/,RC=3,NC=2,DC=1,PC=10,OC=-2,bg=t=>t==="*";function LC(t,e){let n=t.split("/"),r=n.length;return n.some(bg)&&(r+=OC),e&&(r+=NC),n.filter(i=>!bg(i)).reduce((i,s)=>i+(AC.test(s)?RC:s===""?DC:PC),r)}function bC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $C(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=qf({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ur([i,c.pathname]),pathnameBase:zC(ur([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ur([i,c.pathnameBase]))}return s}function qf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=MC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=UC(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function MC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),C1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function UC(t,e){try{return decodeURIComponent(t)}catch(n){return C1(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function _1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ft(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function C1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ns(t):t;return{pathname:n?n.startsWith("/")?n:VC(n,e):e,search:BC(r),hash:jC(i)}}function VC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function I1(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?ns(t):Rl({},t),s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=FC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ur=t=>t.join("/").replace(/\/\/+/g,"/"),zC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class HC{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function WC(t){return t instanceof HC}var wu={exports:{}},Su={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KC=k.exports,GC=Symbol.for("react.element"),qC=Symbol.for("react.fragment"),QC=Object.prototype.hasOwnProperty,YC=KC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XC={key:!0,ref:!0,__self:!0,__source:!0};function T1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)QC.call(e,r)&&!XC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:GC,type:t,key:s,ref:o,props:i,_owner:YC.current}}Su.Fragment=qC;Su.jsx=T1;Su.jsxs=T1;(function(t){t.exports=Su})(wu);const yr=wu.exports.Fragment,m=wu.exports.jsx,V=wu.exports.jsxs;/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function md(){return md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},md.apply(this,arguments)}function JC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const ZC=typeof Object.is=="function"?Object.is:JC,{useState:eI,useEffect:tI,useLayoutEffect:nI,useDebugValue:rI}=wh;function iI(t,e,n){const r=e(),[{inst:i},s]=eI({inst:{value:r,getSnapshot:e}});return nI(()=>{i.value=r,i.getSnapshot=e,Zc(i)&&s({inst:i})},[t,r,e]),tI(()=>(Zc(i)&&s({inst:i}),t(()=>{Zc(i)&&s({inst:i})})),[t]),rI(r),r}function Zc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!ZC(n,r)}catch{return!0}}function sI(t,e,n){return e()}const oI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aI=!oI,lI=aI?sI:iI;"useSyncExternalStore"in wh&&(t=>t.useSyncExternalStore)(wh);const uI=k.exports.createContext(null),cI=k.exports.createContext(null),Eu=k.exports.createContext(null),Qf=k.exports.createContext(null),ku=k.exports.createContext(null),rs=k.exports.createContext({outlet:null,matches:[]}),x1=k.exports.createContext(null);function hI(t,e){let{relative:n}=e===void 0?{}:e;ii()||ft(!1);let{basename:r,navigator:i}=k.exports.useContext(Qf),{hash:s,pathname:o,search:a}=Nl(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ur([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ii(){return k.exports.useContext(ku)!=null}function Mo(){return ii()||ft(!1),k.exports.useContext(ku).location}function dI(t){ii()||ft(!1);let{pathname:e}=Mo();return k.exports.useMemo(()=>qf(t,e),[e,t])}function A1(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function R1(){ii()||ft(!1);let{basename:t,navigator:e}=k.exports.useContext(Qf),{matches:n}=k.exports.useContext(rs),{pathname:r}=Mo(),i=JSON.stringify(A1(n).map(a=>a.pathnameBase)),s=k.exports.useRef(!1);return k.exports.useEffect(()=>{s.current=!0}),k.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=I1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ur([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const fI=k.exports.createContext(null);function pI(t){let e=k.exports.useContext(rs).outlet;return e&&m(fI.Provider,{value:t,children:e})}function Nl(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.exports.useContext(rs),{pathname:i}=Mo(),s=JSON.stringify(A1(r).map(o=>o.pathnameBase));return k.exports.useMemo(()=>I1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function mI(t,e){ii()||ft(!1);let n=k.exports.useContext(Eu),{matches:r}=k.exports.useContext(rs),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=Mo(),l;if(e){var u;let v=typeof e=="string"?ns(e):e;o==="/"||((u=v.pathname)==null?void 0:u.startsWith(o))||ft(!1),l=v}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=TC(t,{pathname:h}),g=wI(d&&d.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:ur([o,v.pathname]),pathnameBase:v.pathnameBase==="/"?o:ur([o,v.pathnameBase])})),r,n||void 0);return e?m(ku.Provider,{value:{location:md({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Zn.Pop},children:g}):g}function gI(){let t=EI(),e=WC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return V(yr,{children:[m("h2",{children:"Unhandled Thrown Error!"}),m("h3",{style:{fontStyle:"italic"},children:e}),n?m("pre",{style:i,children:n}):null,m("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),V("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",m("code",{style:s,children:"errorElement"})," props on\xA0",m("code",{style:s,children:"<Route>"})]})]})}class yI extends k.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?m(x1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function vI(t){let{routeContext:e,match:n,children:r}=t,i=k.exports.useContext(uI);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),m(rs.Provider,{value:e,children:r})}function wI(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ft(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||m(gI,{}):null,c=()=>m(vI,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?m(yI,{location:n.location,component:u,error:l,children:c()}):c()},null)}var gd;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(gd||(gd={}));function SI(t){let e=k.exports.useContext(Eu);return e||ft(!1),e}function EI(){var t;let e=k.exports.useContext(x1),n=SI(gd.UseRouteError),r=k.exports.useContext(rs),i=r.matches[r.matches.length-1];return e||(r||ft(!1),i.route.id||ft(!1),(t=n.errors)==null?void 0:t[i.route.id])}function N1(t){let{to:e,replace:n,state:r,relative:i}=t;ii()||ft(!1);let s=k.exports.useContext(Eu),o=R1();return k.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function kI(t){return pI(t.context)}function jn(t){ft(!1)}function _I(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Zn.Pop,navigator:s,static:o=!1}=t;ii()&&ft(!1);let a=e.replace(/^\/*/,"/"),l=k.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ns(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,v=k.exports.useMemo(()=>{let w=_1(u,a);return w==null?null:{pathname:w,search:c,hash:h,state:d,key:g}},[a,u,c,h,d,g]);return v==null?null:m(Qf.Provider,{value:l,children:m(ku.Provider,{children:n,value:{location:v,navigationType:i}})})}function CI(t){let{children:e,location:n}=t,r=k.exports.useContext(cI),i=r&&!e?r.router.routes:yd(e);return mI(i,n)}var $g;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})($g||($g={}));new Promise(()=>{});function yd(t,e){e===void 0&&(e=[]);let n=[];return k.exports.Children.forEach(t,(r,i)=>{if(!k.exports.isValidElement(r))return;if(r.type===k.exports.Fragment){n.push.apply(n,yd(r.props.children,e));return}r.type!==jn&&ft(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=yd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function D1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function II(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TI(t,e){return t.button===0&&(!e||e==="_self")&&!II(t)}const xI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],AI=["aria-current","caseSensitive","className","end","style","to","children"];function RI(t){let{basename:e,children:n,window:r}=t,i=k.exports.useRef();i.current==null&&(i.current=_C({window:r,v5Compat:!0}));let s=i.current,[o,a]=k.exports.useState({action:s.action,location:s.location});return k.exports.useLayoutEffect(()=>s.listen(a),[s]),m(_I,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const P1=k.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=D1(e,xI),d=hI(u,{relative:i}),g=DI(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function v(w){r&&r(w),w.defaultPrevented||g(w)}return m("a",{...h,href:d,onClick:s?r:v,ref:n,target:l})}),NI=k.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=D1(e,AI),h=Nl(l),d=dI({path:h.pathname,end:o,caseSensitive:i}),g=k.exports.useContext(Eu),v=g==null?void 0:g.navigation.location,w=Nl(v||""),p=k.exports.useMemo(()=>v?qf({path:h.pathname,end:o,caseSensitive:i},w.pathname):null,[v,h.pathname,i,o,w.pathname])!=null,f=d!=null,y=f?r:void 0,E;typeof s=="function"?E=s({isActive:f,isPending:p}):E=[s,f?"active":null,p?"pending":null].filter(Boolean).join(" ");let C=typeof a=="function"?a({isActive:f,isPending:p}):a;return m(P1,{...c,"aria-current":y,className:E,ref:n,style:C,to:l,children:typeof u=="function"?u({isActive:f,isPending:p}):u})});function DI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=R1(),l=Mo(),u=Nl(t,{relative:o});return k.exports.useCallback(c=>{if(TI(c,n)){c.preventDefault();let h=r!==void 0?r:pd(l)===pd(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 *//**
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
 */const O1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},L1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(O1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},OI=function(t){const e=O1(t);return L1.encodeByteArray(e,!0)},Dl=function(t){return OI(t).replace(/\./g,"")},b1=function(t){try{return L1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function bI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $I(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MI(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UI(){return typeof indexedDB=="object"}function FI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function VI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zI=()=>VI().__FIREBASE_DEFAULTS__,BI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&b1(t[1]);return e&&JSON.parse(e)},Yf=()=>{try{return zI()||BI()||jI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$1=t=>{var e,n;return(n=(e=Yf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HI=t=>{const e=$1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},WI=()=>{var t;return(t=Yf())===null||t===void 0?void 0:t.config},M1=t=>{var e;return(e=Yf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class KI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function GI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Dl(JSON.stringify(n)),Dl(JSON.stringify(o)),a].join(".")}/**
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
 */const qI="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qI,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uo.prototype.create)}}class Uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Un(i,a,r)}}function QI(t,e){return t.replace(YI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YI=/\{\$([^}]+)}/g;function XI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Mg(s)&&Mg(o)){if(!Pl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mg(t){return t!==null&&typeof t=="object"}/**
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
 */function Fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JI(t,e){const n=new ZI(t,e);return n.subscribe.bind(n)}class ZI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=eh),i.error===void 0&&(i.error=eh),i.complete===void 0&&(i.complete=eh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function eh(){}/**
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
 */function Rt(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class tT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rT(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nT(t){return t===Rr?void 0:t}function rT(t){return t.instantiationMode==="EAGER"}/**
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
 */class iT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const sT={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},oT=ae.INFO,aT={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},lT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xf{constructor(e){this.name=e,this._logLevel=oT,this._logHandler=lT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const uT=(t,e)=>e.some(n=>t instanceof n);let Ug,Fg;function cT(){return Ug||(Ug=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hT(){return Fg||(Fg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U1=new WeakMap,vd=new WeakMap,F1=new WeakMap,th=new WeakMap,Jf=new WeakMap;function dT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&U1.set(n,t)}).catch(()=>{}),Jf.set(e,t),e}function fT(t){if(vd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vd.set(t,e)}let wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||F1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pT(t){wd=t(wd)}function mT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nh(this),e,...n);return F1.set(r,e.sort?e.sort():[e]),cr(r)}:hT().includes(t)?function(...e){return t.apply(nh(this),e),cr(U1.get(this))}:function(...e){return cr(t.apply(nh(this),e))}}function gT(t){return typeof t=="function"?mT(t):(t instanceof IDBTransaction&&fT(t),uT(t,cT())?new Proxy(t,wd):t)}function cr(t){if(t instanceof IDBRequest)return dT(t);if(th.has(t))return th.get(t);const e=gT(t);return e!==t&&(th.set(t,e),Jf.set(e,t)),e}const nh=t=>Jf.get(t);function yT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=cr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cr(o.result),l.oldVersion,l.newVersion,cr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const vT=["get","getKey","getAll","getAllKeys","count"],wT=["put","add","delete","clear"],rh=new Map;function Vg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rh.get(e))return rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return rh.set(e,s),s}pT(t=>({...t,get:(e,n,r)=>Vg(e,n)||t.get(e,n,r),has:(e,n)=>!!Vg(e,n)||t.has(e,n)}));/**
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
 */class ST{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ET(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ET(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sd="@firebase/app",zg="0.8.3";/**
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
 */const Qr=new Xf("@firebase/app"),kT="@firebase/app-compat",_T="@firebase/analytics-compat",CT="@firebase/analytics",IT="@firebase/app-check-compat",TT="@firebase/app-check",xT="@firebase/auth",AT="@firebase/auth-compat",RT="@firebase/database",NT="@firebase/database-compat",DT="@firebase/functions",PT="@firebase/functions-compat",OT="@firebase/installations",LT="@firebase/installations-compat",bT="@firebase/messaging",$T="@firebase/messaging-compat",MT="@firebase/performance",UT="@firebase/performance-compat",FT="@firebase/remote-config",VT="@firebase/remote-config-compat",zT="@firebase/storage",BT="@firebase/storage-compat",jT="@firebase/firestore",HT="@firebase/firestore-compat",WT="firebase",KT="9.13.0";/**
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
 */const Ed="[DEFAULT]",GT={[Sd]:"fire-core",[kT]:"fire-core-compat",[CT]:"fire-analytics",[_T]:"fire-analytics-compat",[TT]:"fire-app-check",[IT]:"fire-app-check-compat",[xT]:"fire-auth",[AT]:"fire-auth-compat",[RT]:"fire-rtdb",[NT]:"fire-rtdb-compat",[DT]:"fire-fn",[PT]:"fire-fn-compat",[OT]:"fire-iid",[LT]:"fire-iid-compat",[bT]:"fire-fcm",[$T]:"fire-fcm-compat",[MT]:"fire-perf",[UT]:"fire-perf-compat",[FT]:"fire-rc",[VT]:"fire-rc-compat",[zT]:"fire-gcs",[BT]:"fire-gcs-compat",[jT]:"fire-fst",[HT]:"fire-fst-compat","fire-js":"fire-js",[WT]:"fire-js-all"};/**
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
 */const Ol=new Map,kd=new Map;function qT(t,e){try{t.container.addComponent(e)}catch(n){Qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hi(t){const e=t.name;if(kd.has(e))return Qr.debug(`There were multiple attempts to register component ${e}.`),!1;kd.set(e,t);for(const n of Ol.values())qT(n,t);return!0}function Zf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const QT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hr=new Uo("app","Firebase",QT);/**
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
 */class YT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Vo=KT;function V1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ed,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=WI()),!n)throw hr.create("no-options");const s=Ol.get(i);if(s){if(Pl(n,s.options)&&Pl(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new iT(i);for(const l of kd.values())o.addComponent(l);const a=new YT(n,r,o);return Ol.set(i,a),a}function z1(t=Ed){const e=Ol.get(t);if(!e&&t===Ed)return V1();if(!e)throw hr.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let i=(r=GT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qr.warn(a.join(" "));return}Hi(new qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XT="firebase-heartbeat-database",JT=1,po="firebase-heartbeat-store";let ih=null;function B1(){return ih||(ih=yT(XT,JT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(po)}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),ih}async function ZT(t){var e;try{return(await B1()).transaction(po).objectStore(po).get(j1(t))}catch(n){if(n instanceof Un)Qr.warn(n.message);else{const r=hr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Qr.warn(r.message)}}}async function Bg(t,e){var n;try{const i=(await B1()).transaction(po,"readwrite");return await i.objectStore(po).put(e,j1(t)),i.done}catch(r){if(r instanceof Un)Qr.warn(r.message);else{const i=hr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Qr.warn(i.message)}}}function j1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ex=1024,tx=30*24*60*60*1e3;class nx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ix(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jg(),{heartbeatsToSend:n,unsentEntries:r}=rx(this._heartbeatsCache.heartbeats),i=Dl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jg(){return new Date().toISOString().substring(0,10)}function rx(t,e=ex){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ix{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UI()?FI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hg(t){return Dl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sx(t){Hi(new qr("platform-logger",e=>new ST(e),"PRIVATE")),Hi(new qr("heartbeat",e=>new nx(e),"PRIVATE")),dr(Sd,zg,t),dr(Sd,zg,"esm2017"),dr("fire-js","")}sx("");var ox="firebase",ax="9.13.0";/**
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
 */dr(ox,ax,"app");function ep(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function H1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lx=H1,W1=new Uo("auth","Firebase",H1());/**
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
 */const Wg=new Xf("@firebase/auth");function Ya(t,...e){Wg.logLevel<=ae.ERROR&&Wg.error(`Auth (${Vo}): ${t}`,...e)}/**
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
 */function Gt(t,...e){throw tp(t,...e)}function hn(t,...e){return tp(t,...e)}function K1(t,e,n){const r=Object.assign(Object.assign({},lx()),{[e]:n});return new Uo("auth","Firebase",r).create(e,{appName:t.name})}function ux(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Gt(t,"argument-error"),K1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return W1.create(t,...e)}function H(t,e,...n){if(!t)throw tp(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ya(e),new Error(e)}function Pn(t,e){t||En(e)}/**
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
 */const Kg=new Map;function kn(t){Pn(t instanceof Function,"Expected a class definition");let e=Kg.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kg.set(t,e),e)}/**
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
 */function cx(t,e){const n=Zf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Pl(s,e!=null?e:{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function hx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function _d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dx(){return Gg()==="http:"||Gg()==="https:"}function Gg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function fx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dx()||bI()||"connection"in navigator)?navigator.onLine:!0}function px(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=LI()||$I()}get(){return fx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function np(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class G1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const gx=new zo(3e4,6e4);function Bo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jo(t,e,n,r,i={}){return q1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),G1.fetch()(Q1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function q1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mx),e);try{const i=new yx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw K1(t,c,u);Gt(t,c)}}catch(i){if(i instanceof Un)throw i;Gt(t,"network-request-failed")}}async function Ho(t,e,n,r,i={}){const s=await jo(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Q1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?np(t.config,i):`${t.config.apiScheme}://${i}`}class yx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),gx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function vx(t,e){return jo(t,"POST","/v1/accounts:delete",e)}async function wx(t,e){return jo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function js(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sx(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),i=rp(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:js(sh(i.auth_time)),issuedAtTime:js(sh(i.iat)),expirationTime:js(sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sh(t){return Number(t)*1e3}function rp(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Ya("JWT malformed, contained fewer than 3 sections"),null;try{const s=b1(r);return s?JSON.parse(s):(Ya("Failed to decode base64 JWT payload"),null)}catch(s){return Ya("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function Ex(t){const e=rp(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&kx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _x{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Y1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=js(this.lastLoginAt),this.creationTime=js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ll(t){var e;const n=t.auth,r=await t.getIdToken(),i=await mo(t,wx(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Tx(s.providerUserInfo):[],a=Ix(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Cx(t){const e=Rt(t);await Ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ix(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Tx(t){return t.map(e=>{var{providerId:n}=e,r=ep(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xx(t,e){const n=await q1(t,{},async()=>{const r=Fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Q1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",G1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ex(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new go;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function Bn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ep(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _x(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Y1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sx(this,e)}reload(){return Cx(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mo(this,vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:C,providerData:A,stsTokenManager:P}=n;H(y&&P,e,"internal-error");const L=go.fromJSON(this.name,P);H(typeof y=="string",e,"internal-error"),Bn(h,e.name),Bn(d,e.name),H(typeof E=="boolean",e,"internal-error"),H(typeof C=="boolean",e,"internal-error"),Bn(g,e.name),Bn(v,e.name),Bn(w,e.name),Bn(_,e.name),Bn(p,e.name),Bn(f,e.name);const ee=new Vr({uid:y,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:C,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:L,createdAt:p,lastLoginAt:f});return A&&Array.isArray(A)&&(ee.providerData=A.map(W=>Object.assign({},W))),_&&(ee._redirectEventId=_),ee}static async _fromIdTokenResponse(e,n,r=!1){const i=new go;i.updateFromServerResponse(n);const s=new Vr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ll(s),s}}/**
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
 */class X1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}X1.type="NONE";const qg=X1;/**
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
 */function Xa(t,e,n){return`firebase:${t}:${e}:${n}`}class Oi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Oi(kn(qg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kn(qg);const o=Xa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Vr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Oi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Oi(s,e,r))}}/**
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
 */function Qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nw(e))return"Blackberry";if(rw(e))return"Webos";if(ip(e))return"Safari";if((e.includes("chrome/")||Z1(e))&&!e.includes("edge/"))return"Chrome";if(tw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function J1(t=pt()){return/firefox\//i.test(t)}function ip(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Z1(t=pt()){return/crios\//i.test(t)}function ew(t=pt()){return/iemobile/i.test(t)}function tw(t=pt()){return/android/i.test(t)}function nw(t=pt()){return/blackberry/i.test(t)}function rw(t=pt()){return/webos/i.test(t)}function _u(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ax(t=pt()){var e;return _u(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rx(){return MI()&&document.documentMode===10}function iw(t=pt()){return _u(t)||tw(t)||rw(t)||nw(t)||/windows phone/i.test(t)||ew(t)}function Nx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function sw(t,e=[]){let n;switch(t){case"Browser":n=Qg(pt());break;case"Worker":n=`${Qg(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vo}/${r}`}/**
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
 */class Dx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Px{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yg(this),this.idTokenSubscription=new Yg(this),this.beforeStateQueue=new Dx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=W1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Oi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ll(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=px()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Rt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Oi.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function is(t){return Rt(t)}class Yg{constructor(e){this.auth=e,this.observer=null,this.addObserver=JI(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ox(t,e,n){const r=is(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ow(e),{host:o,port:a}=Lx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bx()}function ow(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lx(t){const e=ow(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xg(o)}}}function Xg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class sp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function $x(t,e){return jo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Mx(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",Bo(t,e))}/**
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
 */async function Ux(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Bo(t,e))}async function Fx(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Bo(t,e))}/**
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
 */class yo extends sp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Mx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ux(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return $x(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fx(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Li(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",Bo(t,e))}/**
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
 */const Vx="http://localhost";class Yr extends sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ep(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:Vx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fo(n)}return e}}/**
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
 */function zx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bx(t){const e=As(Rs(t)).link,n=e?As(Rs(e)).deep_link_id:null,r=As(Rs(t)).deep_link_id;return(r?As(Rs(r)).link:null)||r||n||e||t}class op{constructor(e){var n,r,i,s,o,a;const l=As(Rs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=zx((i=l.mode)!==null&&i!==void 0?i:null);H(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Bx(e);try{return new op(n)}catch{return null}}}/**
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
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,n){return yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=op.parseLink(n);return H(r,"argument-error"),yo._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ap{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wo extends ap{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends Wo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class vn extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class Qn extends Wo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Yn extends Wo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function jx(t,e){return Ho(t,"POST","/v1/accounts:signUp",Bo(t,e))}/**
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
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vr._fromIdTokenResponse(e,r,i),o=Jg(r);return new Xr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jg(r);return new Xr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bl extends Un{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bl(e,n,r,i)}}function aw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,s,e,r):s})}async function Hx(t,e,n=!1){const r=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
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
 */async function Wx(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await mo(t,aw(i,s,e,t),n);H(o.idToken,i,"internal-error");const a=rp(o.idToken);H(a,i,"internal-error");const{sub:l}=a;return H(t.uid===l,i,"user-mismatch"),Xr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Gt(i,"user-mismatch"),o}}/**
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
 */async function lw(t,e,n=!1){const r="signIn",i=await aw(t,r,e),s=await Xr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Kx(t,e){return lw(is(t),e)}async function Gx(t,e,n){const r=is(t),i=await jx(r,{returnSecureToken:!0,email:e,password:n}),s=await Xr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function qx(t,e,n){return Kx(Rt(t),ss.credential(e,n))}function Qx(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function Yx(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function Xx(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}function Jx(t){return Rt(t).signOut()}const $l="__sak";/**
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
 */class uw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($l,"1"),this.storage.removeItem($l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Zx(){const t=pt();return ip(t)||_u(t)}const eA=1e3,tA=10;class cw extends uw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zx()&&Nx(),this.fallbackToPolling=iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Rx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cw.type="LOCAL";const nA=cw;/**
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
 */class hw extends uw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hw.type="SESSION";const dw=hw;/**
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
 */function rA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await rA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
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
 */function lp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=lp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function sA(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function fw(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function oA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lA(){return fw()?self:null}/**
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
 */const pw="firebaseLocalStorageDb",uA=1,Ml="firebaseLocalStorage",mw="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([Ml],e?"readwrite":"readonly").objectStore(Ml)}function cA(){const t=indexedDB.deleteDatabase(pw);return new Ko(t).toPromise()}function Cd(){const t=indexedDB.open(pw,uA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ml,{keyPath:mw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ml)?e(r):(r.close(),await cA(),e(await Cd()))})})}async function Zg(t,e,n){const r=Iu(t,!0).put({[mw]:e,value:n});return new Ko(r).toPromise()}async function hA(t,e){const n=Iu(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function ey(t,e){const n=Iu(t,!0).delete(e);return new Ko(n).toPromise()}const dA=800,fA=3;class gw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(lA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oA(),!this.activeServiceWorker)return;this.sender=new iA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await Zg(e,$l,"1"),await ey(e,$l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ey(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Iu(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gw.type="LOCAL";const pA=gw;/**
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
 */function mA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mA().appendChild(r)})}function yA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zo(3e4,6e4);/**
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
 */function yw(t,e){return e?kn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class up extends sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vA(t){return lw(t.auth,new up(t),t.bypassAuthState)}function wA(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Wx(n,new up(t),t.bypassAuthState)}async function SA(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Hx(n,new up(t),t.bypassAuthState)}/**
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
 */class vw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vA;case"linkViaPopup":case"linkViaRedirect":return SA;case"reauthViaPopup":case"reauthViaRedirect":return wA;default:Gt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EA=new zo(2e3,1e4);async function kA(t,e,n){const r=is(t);ux(t,e,ap);const i=yw(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}class Or extends vw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=lp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,EA.get())};e()}}Or.currentPopupAction=null;/**
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
 */const _A="pendingRedirect",Ja=new Map;class CA extends vw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ja.get(this.auth._key());if(!e){try{const r=await IA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ja.set(this.auth._key(),e)}return this.bypassAuthState||Ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IA(t,e){const n=AA(e),r=xA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function TA(t,e){Ja.set(t._key(),e)}function xA(t){return kn(t._redirectPersistence)}function AA(t){return Xa(_A,t.config.apiKey,t.name)}async function RA(t,e,n=!1){const r=is(t),i=yw(r,e),o=await new CA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const NA=10*60*1e3;class DA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ww(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ty(e))}saveEventToCache(e){this.cachedEventUids.add(ty(e)),this.lastProcessedEventTime=Date.now()}}function ty(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ww({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ww(t);default:return!1}}/**
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
 */async function OA(t,e={}){return jo(t,"GET","/v1/projects",e)}/**
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
 */const LA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bA=/^https?/;async function $A(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OA(t);for(const n of e)try{if(MA(n))return}catch{}Gt(t,"unauthorized-domain")}function MA(t){const e=_d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bA.test(n))return!1;if(LA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const UA=new zo(3e4,6e4);function ny(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FA(t){return new Promise((e,n)=>{var r,i,s;function o(){ny(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ny(),n(hn(t,"network-request-failed"))},timeout:UA.get()})}if(!((i=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dn().gapi)===null||s===void 0)&&s.load)o();else{const a=yA("iframefcb");return dn()[a]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},gA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Za=null,e})}let Za=null;function VA(t){return Za=Za||FA(t),Za}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const zA=new zo(5e3,15e3),BA="__/auth/iframe",jA="emulator/auth/iframe",HA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KA(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?np(e,jA):`https://${t.config.authDomain}/${BA}`,r={apiKey:e.apiKey,appName:t.name,v:Vo},i=WA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fo(r).slice(1)}`}async function GA(t){const e=await VA(t),n=dn().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:KA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),a=dn().setTimeout(()=>{s(o)},zA.get());function l(){dn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const qA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QA=500,YA=600,XA="_blank",JA="http://localhost";class ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZA(t,e,n,r=QA,i=YA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=pt().toLowerCase();n&&(a=Z1(u)?XA:n),J1(u)&&(e=e||JA,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(Ax(u)&&a!=="_self")return eR(e||"",a),new ry(null);const h=window.open(e||"",a,c);H(h,t,"popup-blocked");try{h.focus()}catch{}return new ry(h)}function eR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tR="__/auth/handler",nR="emulator/auth/handler";function iy(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vo,eventId:i};if(e instanceof ap){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Wo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${rR(t)}?${Fo(a).slice(1)}`}function rR({config:t}){return t.emulator?np(t,nR):`https://${t.authDomain}/${tR}`}/**
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
 */const oh="webStorageSupport";class iR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dw,this._completeRedirectFn=RA,this._overrideRedirectResult=TA}async _openPopup(e,n,r,i){var s;Pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=iy(e,n,r,_d(),i);return ZA(e,o,lp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),sA(iy(e,n,r,_d(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GA(e),r=new DA(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oh,{type:oh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[oh];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$A(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iw()||ip()||_u()}}const sR=iR;var sy="@firebase/auth",oy="0.20.11";/**
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
 */class oR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lR(t){Hi(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sw(t)},c=new Px(a,l,u);return hx(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hi(new qr("auth-internal",e=>{const n=is(e.getProvider("auth").getImmediate());return(r=>new oR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(sy,oy,aR(t)),dr(sy,oy,"esm2017")}/**
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
 */const uR=5*60,cR=M1("authIdTokenMaxAge")||uR;let ay=null;const hR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cR)return;const i=n==null?void 0:n.token;ay!==i&&(ay=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dR(t=z1()){const e=Zf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cx(t,{popupRedirectResolver:sR,persistence:[pA,nA,dw]}),r=M1("authTokenSyncURL");if(r){const s=hR(r);Yx(n,s,()=>s(n.currentUser)),Qx(n,o=>s(o))}const i=$1("auth");return i&&Ox(n,`http://${i}`),n}lR("Browser");var fR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,cp=cp||{},q=fR||self;function Ul(){}function Tu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Go(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pR(t){return Object.prototype.hasOwnProperty.call(t,ah)&&t[ah]||(t[ah]=++mR)}var ah="closure_uid_"+(1e9*Math.random()>>>0),mR=0;function gR(t,e,n){return t.call.apply(t.bind,arguments)}function yR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=gR:ct=yR,ct.apply(null,arguments)}function Aa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ir(){this.s=this.s,this.o=this.o}var vR=0;Ir.prototype.s=!1;Ir.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vR!=0)&&pR(this)};Ir.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ly(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Tu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var wR=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",Ul,e),q.removeEventListener("test",Ul,e)}catch{}return t}();function Fl(t){return/^[\s\xa0]*$/.test(t)}var uy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lh(t,e){return t<e?-1:t>e?1:0}function xu(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return xu().indexOf(t)!=-1}function dp(t){return dp[" "](t),t}dp[" "]=Ul;function SR(t){var e=_R;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ER=an("Opera"),Wi=an("Trident")||an("MSIE"),Ew=an("Edge"),Id=Ew||Wi,kw=an("Gecko")&&!(xu().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),kR=xu().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function _w(){var t=q.document;return t?t.documentMode:void 0}var Vl;e:{var uh="",ch=function(){var t=xu();if(kw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ew)return/Edge\/([\d\.]+)/.exec(t);if(Wi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kR)return/WebKit\/(\S+)/.exec(t);if(ER)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ch&&(uh=ch?ch[1]:""),Wi){var hh=_w();if(hh!=null&&hh>parseFloat(uh)){Vl=String(hh);break e}}Vl=uh}var _R={};function CR(){return SR(function(){let t=0;const e=uy(String(Vl)).split("."),n=uy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=lh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||lh(i[2].length==0,s[2].length==0)||lh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Td;if(q.document&&Wi){var cy=_w();Td=cy||parseInt(Vl,10)||void 0}else Td=void 0;var IR=Td;function vo(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kw){e:{try{dp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:TR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vo.X.h.call(this)}}nt(vo,ht);var TR={2:"touch",3:"pen",4:"mouse"};vo.prototype.h=function(){vo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qo="closure_listenable_"+(1e6*Math.random()|0),xR=0;function AR(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++xR,this.ba=this.ea=!1}function Au(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function fp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Cw(t){const e={};for(const n in t)e[n]=t[n];return e}const hy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Iw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<hy.length;s++)n=hy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ru(t){this.src=t,this.g={},this.h=0}Ru.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ad(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new AR(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function xd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Sw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Au(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ad(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var pp="closure_lm_"+(1e6*Math.random()|0),dh={};function Tw(t,e,n,r,i){if(r&&r.once)return Aw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Tw(t,e[s],n,r,i);return null}return n=yp(n),t&&t[qo]?t.N(e,n,Go(r)?!!r.capture:!!r,i):xw(t,e,n,!1,r,i)}function xw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Go(i)?!!i.capture:!!i,a=gp(t);if(a||(t[pp]=a=new Ru(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=RR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Nw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RR(){function t(n){return e.call(t.src,t.listener,n)}const e=NR;return t}function Aw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Aw(t,e[s],n,r,i);return null}return n=yp(n),t&&t[qo]?t.O(e,n,Go(r)?!!r.capture:!!r,i):xw(t,e,n,!0,r,i)}function Rw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Rw(t,e[s],n,r,i);else r=Go(r)?!!r.capture:!!r,n=yp(n),t&&t[qo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ad(s,n,r,i),-1<n&&(Au(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=gp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ad(e,n,r,i)),(n=-1<t?e[t]:null)&&mp(n))}function mp(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[qo])xd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Nw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gp(e))?(xd(n,t),n.h==0&&(n.src=null,e[pp]=null)):Au(t)}}}function Nw(t){return t in dh?dh[t]:dh[t]="on"+t}function NR(t,e){if(t.ba)t=!0;else{e=new vo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&mp(t),t=n.call(r,e)}return t}function gp(t){return t=t[pp],t instanceof Ru?t:null}var fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function yp(t){return typeof t=="function"?t:(t[fh]||(t[fh]=function(e){return t.handleEvent(e)}),t[fh])}function He(){Ir.call(this),this.i=new Ru(this),this.P=this,this.I=null}nt(He,Ir);He.prototype[qo]=!0;He.prototype.removeEventListener=function(t,e,n,r){Rw(this,t,e,n,r)};function et(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(r,t),Iw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ra(o,r,!0,e)&&i}if(o=e.g=t,i=Ra(o,r,!0,e)&&i,i=Ra(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ra(o,r,!1,e)&&i}He.prototype.M=function(){if(He.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Au(n[r]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ra(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&xd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var vp=q.JSON.stringify;function DR(){var t=Ow;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class PR{constructor(){this.h=this.g=null}add(e,n){const r=Dw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Dw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new OR,t=>t.reset());class OR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LR(t){q.setTimeout(()=>{throw t},0)}function Pw(t,e){Rd||bR(),Nd||(Rd(),Nd=!0),Ow.add(t,e)}var Rd;function bR(){var t=q.Promise.resolve(void 0);Rd=function(){t.then($R)}}var Nd=!1,Ow=new PR;function $R(){for(var t;t=DR();){try{t.h.call(t.g)}catch(n){LR(n)}var e=Dw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nd=!1}function Nu(t,e){He.call(this),this.h=t||1,this.g=e||q,this.j=ct(this.lb,this),this.l=Date.now()}nt(Nu,He);U=Nu.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),et(this,"tick"),this.ca&&(wp(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wp(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Nu.X.M.call(this),wp(this),delete this.g};function Sp(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function Lw(t){t.g=Sp(()=>{t.g=null,t.i&&(t.i=!1,Lw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class MR extends Ir{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lw(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wo(t){Ir.call(this),this.h=t,this.g={}}nt(wo,Ir);var dy=[];function bw(t,e,n,r){Array.isArray(n)||(n&&(dy[0]=n.toString()),n=dy);for(var i=0;i<n.length;i++){var s=Tw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function $w(t){fp(t.g,function(e,n){this.g.hasOwnProperty(n)&&mp(e)},t),t.g={}}wo.prototype.M=function(){wo.X.M.call(this),$w(this)};wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Du(){this.g=!0}Du.prototype.Aa=function(){this.g=!1};function UR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function FR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function _i(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zR(t,n)+(r?" "+r:"")})}function VR(t,e){t.info(function(){return"TIMEOUT: "+e})}Du.prototype.info=function(){};function zR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return vp(n)}catch{return e}}var si={},fy=null;function Pu(){return fy=fy||new He}si.Pa="serverreachability";function Mw(t){ht.call(this,si.Pa,t)}nt(Mw,ht);function So(t){const e=Pu();et(e,new Mw(e))}si.STAT_EVENT="statevent";function Uw(t,e){ht.call(this,si.STAT_EVENT,t),this.stat=e}nt(Uw,ht);function vt(t){const e=Pu();et(e,new Uw(e,t))}si.Qa="timingevent";function Fw(t,e){ht.call(this,si.Qa,t),this.size=e}nt(Fw,ht);function Qo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Ou={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Vw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ep(){}Ep.prototype.h=null;function py(t){return t.h||(t.h=t.i())}function zw(){}var Yo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function kp(){ht.call(this,"d")}nt(kp,ht);function _p(){ht.call(this,"c")}nt(_p,ht);var Dd;function Lu(){}nt(Lu,Ep);Lu.prototype.g=function(){return new XMLHttpRequest};Lu.prototype.i=function(){return{}};Dd=new Lu;function Xo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new wo(this),this.O=BR,t=Id?125:void 0,this.T=new Nu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Bw}function Bw(){this.i=null,this.g="",this.h=!1}var BR=45e3,Pd={},zl={};U=Xo.prototype;U.setTimeout=function(t){this.O=t};function Od(t,e,n){t.K=1,t.v=$u(On(e)),t.s=n,t.P=!0,jw(t,null)}function jw(t,e){t.F=Date.now(),Jo(t),t.A=On(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Xw(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Bw,t.g=vS(t.l,n?e:null,!t.s),0<t.N&&(t.L=new MR(ct(t.La,t,t.g),t.N)),bw(t.S,t.g,"readystatechange",t.ib),e=t.H?Cw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),So(),UR(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&_n(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const c=_n(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Id||this.g&&(this.h.h||this.g.fa()||vy(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?So(3):So(2)),bu(this);var n=this.g.aa();this.Y=n;t:if(Hw(this)){var r=vy(this.g);t="";var i=r.length,s=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),Hs(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,FR(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fl(a)){var u=a;break t}}u=null}if(n=u)_i(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ld(this,n);else{this.i=!1,this.o=3,vt(12),Lr(this),Hs(this);break e}}this.P?(Ww(this,c,o),Id&&this.i&&c==3&&(bw(this.S,this.T,"tick",this.hb),this.T.start())):(_i(this.j,this.m,o,null),Ld(this,o)),c==4&&Lr(this),this.i&&!this.I&&(c==4?pS(this.l,this):(this.i=!1,Jo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),Lr(this),Hs(this)}}}catch{}finally{}};function Hw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ww(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=jR(t,n),i==zl){e==4&&(t.o=4,vt(14),r=!1),_i(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Pd){t.o=4,vt(15),_i(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else _i(t.j,t.m,i,null),Ld(t,i);Hw(t)&&i!=zl&&i!=Pd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Np(e),e.K=!0,vt(11))):(_i(t.j,t.m,n,"[Invalid Chunked Response]"),Lr(t),Hs(t))}U.hb=function(){if(this.g){var t=_n(this.g),e=this.g.fa();this.C<e.length&&(bu(this),Ww(this,t,e),this.i&&t!=4&&Jo(this))}};function jR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?zl:(n=Number(e.substring(n,r)),isNaN(n)?Pd:(r+=1,r+n>e.length?zl:(e=e.substr(r,n),t.C=r+n,e)))}U.cancel=function(){this.I=!0,Lr(this)};function Jo(t){t.V=Date.now()+t.O,Kw(t,t.O)}function Kw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qo(ct(t.gb,t),e)}function bu(t){t.B&&(q.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(VR(this.j,this.A),this.K!=2&&(So(),vt(17)),Lr(this),this.o=2,Hs(this)):Kw(this,this.V-t)};function Hs(t){t.l.G==0||t.I||pS(t.l,t)}function Lr(t){bu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,wp(t.T),$w(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ld(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bd(n.h,t))){if(!t.J&&bd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Hl(n),Fu(n);else break e;Rp(n),vt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Qo(ct(n.cb,n),6e3));if(1>=eS(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else br(n,11)}else if((t.J||n.g==t)&&Hl(n),!Fl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Cp(s,s.h),s.h=null))}if(r.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,Ee(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=yS(r,r.H?r.ka:null,r.V),o.J){tS(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(bu(a),Jo(a)),r.g=o}else dS(r);0<n.i.length&&Vu(n)}else u[0]!="stop"&&u[0]!="close"||br(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?br(n,7):Ap(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}So(4)}catch{}}function HR(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Tu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function WR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Tu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Gw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=WR(t),r=HR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var qw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zr){this.h=e!==void 0?e:t.h,Bl(this,t.j),this.s=t.s,this.g=t.g,jl(this,t.m),this.l=t.l,e=t.i;var n=new Eo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),my(this,n),this.o=t.o}else t&&(n=String(t).match(qw))?(this.h=!!e,Bl(this,n[1]||"",!0),this.s=Ns(n[2]||""),this.g=Ns(n[3]||"",!0),jl(this,n[4]),this.l=Ns(n[5]||"",!0),my(this,n[6]||"",!0),this.o=Ns(n[7]||"")):(this.h=!!e,this.i=new Eo(null,this.h))}zr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ds(e,gy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ds(e,gy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ds(n,n.charAt(0)=="/"?QR:qR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ds(n,XR)),t.join("")};function On(t){return new zr(t)}function Bl(t,e,n){t.j=n?Ns(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function my(t,e,n){e instanceof Eo?(t.i=e,JR(t.i,t.h)):(n||(e=Ds(e,YR)),t.i=new Eo(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function $u(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ns(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ds(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gy=/[#\/\?@]/g,qR=/[#\?:]/g,QR=/[#\?]/g,YR=/[#\?@]/g,XR=/#/g;function Eo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tr(t){t.g||(t.g=new Map,t.h=0,t.i&&KR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Eo.prototype;U.add=function(t,e){Tr(this),this.i=null,t=os(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Qw(t,e){Tr(t),e=os(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Yw(t,e){return Tr(t),e=os(t,e),t.g.has(e)}U.forEach=function(t,e){Tr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.oa=function(){Tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.W=function(t){Tr(this);let e=[];if(typeof t=="string")Yw(this,t)&&(e=e.concat(this.g.get(os(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Tr(this),this.i=null,t=os(this,t),Yw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Xw(t,e,n){Qw(t,e),0<n.length&&(t.i=null,t.g.set(os(t,e),hp(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function os(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JR(t,e){e&&!t.j&&(Tr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Qw(this,r),Xw(this,i,n))},t)),t.j=e}var ZR=class{constructor(t,e){this.h=t,this.g=e}};function Jw(t){this.l=t||eN,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ga&&q.g.Ga()&&q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eN=10;function Zw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function eS(t){return t.h?1:t.g?t.g.size:0}function bd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cp(t,e){t.g?t.g.add(e):t.h=e}function tS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Jw.prototype.cancel=function(){if(this.i=nS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nS(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hp(t.i)}function Ip(){}Ip.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Ip.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function tN(){this.g=new Ip}function nN(t,e,n){const r=n||"";try{Gw(t,function(i,s){let o=i;Go(i)&&(o=vp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rN(t,e){const n=new Du;if(q.Image){const r=new Image;r.onload=Aa(Na,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Aa(Na,n,r,"TestLoadImage: error",!1,e),r.onabort=Aa(Na,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Aa(Na,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Na(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Zo(t){this.l=t.ac||null,this.j=t.jb||!1}nt(Zo,Ep);Zo.prototype.g=function(){return new Mu(this.l,this.j)};Zo.prototype.i=function(t){return function(){return t}}({});function Mu(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Tp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Mu,He);var Tp=0;U=Mu.prototype;U.open=function(t,e){if(this.readyState!=Tp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ko(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ea(this)),this.readyState=Tp};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ko(this)),this.g&&(this.readyState=3,ko(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rS(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function rS(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ea(this):ko(this),this.readyState==3&&rS(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,ea(this))};U.Ua=function(t){this.g&&(this.response=t,ea(this))};U.ga=function(){this.g&&ea(this)};function ea(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ko(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ko(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iN=q.JSON.parse;function Ae(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=iS,this.K=this.L=!1}nt(Ae,He);var iS="",sN=/^https?$/i,oN=["POST","PUT"];U=Ae.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Dd.g(),this.C=this.u?py(this.u):py(Dd),this.g.onreadystatechange=ct(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){yy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=Sw(oN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{aS(this),0<this.B&&((this.K=aN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.qa,this)):this.A=Sp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){yy(this,s)}};function aN(t){return Wi&&CR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof cp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function yy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sS(t),Uu(t)}function sS(t){t.D||(t.D=!0,et(t,"complete"),et(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Uu(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Uu(this,!0)),Ae.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?oS(this):this.fb())};U.fb=function(){oS(this)};function oS(t){if(t.h&&typeof cp<"u"&&(!t.C[1]||_n(t)!=4||t.aa()!=2)){if(t.v&&_n(t)==4)Sp(t.Ha,0,t);else if(et(t,"readystatechange"),_n(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(qw)[1]||null;if(!i&&q.self&&q.self.location){var s=q.self.location.protocol;i=s.substr(0,s.length-1)}r=!sN.test(i?i.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",sS(t)}}finally{Uu(t)}}}}function Uu(t,e){if(t.g){aS(t);const n=t.g,r=t.C[0]?Ul:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function aS(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iN(e)}};function vy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case iS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function lS(t){let e="";return fp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function xp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=lS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function _s(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uS(t){this.Ca=0,this.i=[],this.j=new Du,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=_s("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=_s("baseRetryDelayMs",5e3,t),this.bb=_s("retryDelaySeedMs",1e4,t),this.$a=_s("forwardChannelMaxRetries",2,t),this.ta=_s("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Jw(t&&t.concurrentRequestLimit),this.Fa=new tN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=uS.prototype;U.ma=8;U.G=1;function Ap(t){if(cS(t),t.G==3){var e=t.U++,n=On(t.F);Ee(n,"SID",t.I),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),ta(t,n),e=new Xo(t,t.j,e,void 0),e.K=2,e.v=$u(On(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=vS(e.l,null),e.g.da(e.v)),e.F=Date.now(),Jo(e)}gS(t)}function Fu(t){t.g&&(Np(t),t.g.cancel(),t.g=null)}function cS(t){Fu(t),t.u&&(q.clearTimeout(t.u),t.u=null),Hl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Vu(t){Zw(t.h)||t.m||(t.m=!0,Pw(t.Ja,t),t.C=0)}function lN(t,e){return eS(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Qo(ct(t.Ja,t,e),mS(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Xo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Cw(s),Iw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=hS(this,i,e),n=On(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),ta(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(lS(s)))+"&"+e:this.o&&xp(n,this.o,s)),Cp(this.h,i),this.Ya&&Ee(n,"TYPE","init"),this.O?(Ee(n,"$req",e),Ee(n,"SID","null"),i.Z=!0,Od(i,n,null)):Od(i,n,e),this.G=2}}else this.G==3&&(t?wy(this,t):this.i.length==0||Zw(this.h)||wy(this))};function wy(t,e){var n;e?n=e.m:n=t.U++;const r=On(t.F);Ee(r,"SID",t.I),Ee(r,"RID",n),Ee(r,"AID",t.T),ta(t,r),t.o&&t.s&&xp(r,t.o,t.s),n=new Xo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=hS(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Cp(t.h,n),Od(n,r,e)}function ta(t,e){t.ia&&fp(t.ia,function(n,r){Ee(e,r,n)}),t.l&&Gw({},function(n,r){Ee(e,r,n)})}function hS(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ct(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{nN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function dS(t){t.g||t.u||(t.Z=1,Pw(t.Ia,t),t.A=0)}function Rp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Qo(ct(t.Ia,t),mS(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,fS(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Qo(ct(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,vt(10),Fu(this),fS(this))};function Np(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function fS(t){t.g=new Xo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=On(t.sa);Ee(e,"RID","rpc"),Ee(e,"SID",t.I),Ee(e,"CI",t.L?"0":"1"),Ee(e,"AID",t.T),Ee(e,"TYPE","xmlhttp"),ta(t,e),t.o&&t.s&&xp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=$u(On(e)),n.s=null,n.P=!0,jw(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Fu(this),Rp(this),vt(19))};function Hl(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function pS(t,e){var n=null;if(t.g==e){Hl(t),Np(t),t.g=null;var r=2}else if(bd(t.h,e))n=e.D,tS(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Pu(),et(r,new Fw(r,n)),Vu(t)}else dS(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&lN(t,e)||r==2&&Rp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}}function mS(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function br(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ct(t.kb,t);n||(n=new zr("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Bl(n,"https"),$u(n)),rN(n.toString(),r)}else vt(2);t.G=0,t.l&&t.l.va(e),gS(t),cS(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function gS(t){if(t.G=0,t.la=[],t.l){const e=nS(t.h);(e.length!=0||t.i.length!=0)&&(ly(t.la,e),ly(t.la,t.i),t.h.i.length=0,hp(t.i),t.i.length=0),t.l.ua()}}function yS(t,e,n){var r=n instanceof zr?On(n):new zr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),jl(r,r.m);else{var i=q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new zr(null,void 0);r&&Bl(s,r),e&&(s.g=e),i&&jl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ma),ta(t,r),r}function vS(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ae(new Zo({jb:!0})):new Ae(t.ra),e.Ka(t.H),e}function wS(){}U=wS.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function Wl(){if(Wi&&!(10<=Number(IR)))throw Error("Environmental error: no available transport.")}Wl.prototype.g=function(t,e){return new $t(t,e)};function $t(t,e){He.call(this),this.g=new uS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Fl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new as(this)}nt($t,He);$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=yS(t,null,t.V),Vu(t)};$t.prototype.close=function(){Ap(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vp(t),t=n);e.i.push(new ZR(e.ab++,t)),e.G==3&&Vu(e)};$t.prototype.M=function(){this.g.l=null,delete this.j,Ap(this.g),delete this.g,$t.X.M.call(this)};function SS(t){kp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(SS,kp);function ES(){_p.call(this),this.status=1}nt(ES,_p);function as(t){this.g=t}nt(as,wS);as.prototype.xa=function(){et(this.g,"a")};as.prototype.wa=function(t){et(this.g,new SS(t))};as.prototype.va=function(t){et(this.g,new ES)};as.prototype.ua=function(){et(this.g,"b")};Wl.prototype.createWebChannel=Wl.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;Ou.NO_ERROR=0;Ou.TIMEOUT=8;Ou.HTTP_ERROR=6;Vw.COMPLETE="complete";zw.EventType=Yo;Yo.OPEN="a";Yo.CLOSE="b";Yo.ERROR="c";Yo.MESSAGE="d";He.prototype.listen=He.prototype.N;Ae.prototype.listenOnce=Ae.prototype.O;Ae.prototype.getLastError=Ae.prototype.Oa;Ae.prototype.getLastErrorCode=Ae.prototype.Ea;Ae.prototype.getStatus=Ae.prototype.aa;Ae.prototype.getResponseJson=Ae.prototype.Sa;Ae.prototype.getResponseText=Ae.prototype.fa;Ae.prototype.send=Ae.prototype.da;Ae.prototype.setWithCredentials=Ae.prototype.Ka;var uN=function(){return new Wl},cN=function(){return Pu()},ph=Ou,hN=Vw,dN=si,Sy={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},fN=Zo,Da=zw,pN=Ae;const Ey="@firebase/firestore";/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let ls="9.13.0";/**
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
 */const Jr=new Xf("@firebase/firestore");function ky(){return Jr.logLevel}function F(t,...e){if(Jr.logLevel<=ae.DEBUG){const n=e.map(Dp);Jr.debug(`Firestore (${ls}): ${t}`,...n)}}function Ln(t,...e){if(Jr.logLevel<=ae.ERROR){const n=e.map(Dp);Jr.error(`Firestore (${ls}): ${t}`,...n)}}function $d(t,...e){if(Jr.logLevel<=ae.WARN){const n=e.map(Dp);Jr.warn(`Firestore (${ls}): ${t}`,...n)}}function Dp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function ye(t,e){t||Y()}function X(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class kS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class gN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yN{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new In;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new In,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new kS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new at(e)}}class vN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=at.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ye(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new vN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.A=n.token,new SN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function kN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _S{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Me(0,0))}static max(){return new Z(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _o{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _o.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _o?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends _o{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const _N=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends _o{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return _N.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ke.fromString(e))}static fromName(e){return new B(ke.fromString(e).popFirst(5))}static empty(){return new B(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ke(e.slice()))}}function CN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new vr(i,B.empty(),e)}function IN(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(Z.min(),B.empty(),-1)}static max(){return new vr(Z.max(),B.empty(),-1)}}function TN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const xN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function na(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==xN)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ra(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Pp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function _y(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function CS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Pp.at=-1;class Fe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Xe.RED,this.left=i!=null?i:Xe.EMPTY,this.right=s!=null?s:Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cy(this.data.getIterator())}getIteratorFrom(e){return new Cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new fn([])}unionWith(e){let n=new Ue(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new mt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const RN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(ye(!!t),typeof t=="string"){let e=0;const n=RN.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gi(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function IS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function TS(t){const e=t.mapValue.fields.__previous_value__;return IS(e)?TS(e):e}function Co(t){const e=wr(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class NN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}function zu(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function DN(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Oa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?IS(t)?4:PN(t)?9007199254740991:10:Y()}function pn(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=wr(r.timestampValue),o=wr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Gi(r.bytesValue).isEqual(Gi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Pe(r.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(r.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Pe(r.integerValue)===Pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Pe(r.doubleValue),o=Pe(i.doubleValue);return s===o?Kl(s)===Kl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(_y(s)!==_y(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!pn(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function To(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Pe(i.integerValue||i.doubleValue),a=Pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Iy(t.timestampValue,e.timestampValue);case 4:return Iy(Co(t),Co(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Gi(i),a=Gi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ce(o[l],a[l]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ce(Pe(i.latitude),Pe(s.latitude));return o!==0?o:ce(Pe(i.longitude),Pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=qi(o[l],a[l]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Oa.mapValue&&s===Oa.mapValue)return 0;if(i===Oa.mapValue)return 1;if(s===Oa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ce(a[c],u[c]);if(h!==0)return h;const d=qi(o[a[c]],l[u[c]]);if(d!==0)return d}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=wr(t),r=wr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function bi(t){return Md(t)}function Md(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=wr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Md(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Md(r.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function Ud(t){return!!t&&"integerValue"in t}function Op(t){return!!t&&"arrayValue"in t}function Ty(t){return!!t&&"nullValue"in t}function xy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function el(t){return!!t&&"mapValue"in t}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ws(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!el(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(n)}setAll(e){let n=ut.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ws(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());el(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];el(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){us(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Bt(Ws(this.value))}}function xS(t){const e=[];return us(t.fields,(n,r)=>{const i=new ut([n]);if(el(r)){const s=xS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
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
 */class Je{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Je(e,0,Z.min(),Z.min(),Bt.empty(),0)}static newFoundDocument(e,n,r){return new Je(e,1,n,Z.min(),r,0)}static newNoDocument(e,n){return new Je(e,2,n,Z.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Z.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ON{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Ay(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ON(t,e,n,r,i,s,o)}function Lp(t){const e=X(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+bi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),zu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bi(r)).join(",")),e.ht=n}return e.ht}function LN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${bi(r.value)}`;var r}).join(", ")}]`),zu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>bi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>bi(n)).join(",")),`Target(${e})`}function bp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!BN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!pn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ny(t.startAt,e.startAt)&&Ny(t.endAt,e.endAt)}function Fd(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class It extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new bN(e,n,r):n==="array-contains"?new UN(e,r):n==="in"?new FN(e,r):n==="not-in"?new VN(e,r):n==="array-contains-any"?new zN(e,r):new It(e,n,r)}static lt(e,n,r){return n==="in"?new $N(e,r):new MN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(qi(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.ft(qi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class bN extends It{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.ft(n)}}class $N extends It{constructor(e,n){super(e,"in",n),this.keys=AS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MN extends It{constructor(e,n){super(e,"not-in",n),this.keys=AS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class UN extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Op(n)&&To(n.arrayValue,this.value)}}class FN extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class VN extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!To(this.value.arrayValue,n)}}class zN extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Op(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>To(this.value.arrayValue,r))}}class Gl{constructor(e,n){this.position=e,this.inclusive=n}}class Ks{constructor(e,n="asc"){this.field=e,this.dir=n}}function BN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ry(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ny(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function jN(t,e,n,r,i,s,o,a){return new Bu(t,e,n,r,i,s,o,a)}function $p(t){return new Bu(t)}function Dy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function WN(t){for(const e of t.filters)if(e.dt())return e.field;return null}function KN(t){return t.collectionGroup!==null}function xo(t){const e=X(t);if(e._t===null){e._t=[];const n=WN(e),r=HN(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Ks(n)),e._t.push(new Ks(ut.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ks(ut.keyField(),s))}}}return e._t}function bn(t){const e=X(t);if(!e.wt)if(e.limitType==="F")e.wt=Ay(e.path,e.collectionGroup,xo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of xo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ks(s.field,o))}const r=e.endAt?new Gl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Gl(e.startAt.position,e.startAt.inclusive):null;e.wt=Ay(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Vd(t,e,n){return new Bu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ju(t,e){return bp(bn(t),bn(e))&&t.limitType===e.limitType}function RS(t){return`${Lp(bn(t))}|lt:${t.limitType}`}function zd(t){return`Query(target=${LN(bn(t))}; limitType=${t.limitType})`}function Mp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Ry(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,xo(n),r)||n.endAt&&!function(i,s,o){const a=Ry(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,xo(n),r))}(t,e)}function GN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function NS(t){return(e,n)=>{let r=!1;for(const i of xo(t)){const s=qN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qN(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?qi(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */function DS(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function PS(t){return{integerValue:""+t}}function QN(t,e){return DN(e)?PS(e):DS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Hu{constructor(){this._=void 0}}function YN(t,e,n){return t instanceof ql?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ao?LS(t,e):t instanceof Ro?bS(t,e):function(r,i){const s=OS(r,i),o=Py(s)+Py(r.yt);return Ud(s)&&Ud(r.yt)?PS(o):DS(r.It,o)}(t,e)}function XN(t,e,n){return t instanceof Ao?LS(t,e):t instanceof Ro?bS(t,e):n}function OS(t,e){return t instanceof Ql?Ud(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ql extends Hu{}class Ao extends Hu{constructor(e){super(),this.elements=e}}function LS(t,e){const n=$S(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ro extends Hu{constructor(e){super(),this.elements=e}}function bS(t,e){let n=$S(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class Ql extends Hu{constructor(e,n){super(),this.It=e,this.yt=n}}function Py(t){return Pe(t.integerValue||t.doubleValue)}function $S(t){return Op(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function JN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ao&&r instanceof Ao||n instanceof Ro&&r instanceof Ro?Ki(n.elements,r.elements,pn):n instanceof Ql&&r instanceof Ql?pn(n.yt,r.yt):n instanceof ql&&r instanceof ql}(t.transform,e.transform)}class ZN{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wu{}function MS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new FS(t.key,Tn.none()):new ia(t.key,t.data,Tn.none());{const n=t.data,r=Bt.empty();let i=new Ue(ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new oi(t.key,r,new fn(i.toArray()),Tn.none())}}function eD(t,e,n){t instanceof ia?function(r,i,s){const o=r.value.clone(),a=Ly(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof oi?function(r,i,s){if(!tl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ly(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(US(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Gs(t,e,n,r){return t instanceof ia?function(i,s,o,a){if(!tl(i.precondition,s))return o;const l=i.value.clone(),u=by(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof oi?function(i,s,o,a){if(!tl(i.precondition,s))return o;const l=by(i.fieldTransforms,a,s),u=s.data;return u.setAll(US(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return tl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function tD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=OS(r.transform,i||null);s!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,s))}return n||null}function Oy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ki(n,r,(i,s)=>JN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ia extends Wu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oi extends Wu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function US(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ly(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,XN(o,a,n[i]))}return r}function by(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,YN(s,o,e))}return r}class FS extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nD extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rD{constructor(e){this.count=e}}/**
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
 */var De,ie;function iD(t){switch(t){default:return Y();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function VS(t){if(t===void 0)return Ln("GRPC error has no .code"),I.UNKNOWN;switch(t){case De.OK:return I.OK;case De.CANCELLED:return I.CANCELLED;case De.UNKNOWN:return I.UNKNOWN;case De.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case De.INTERNAL:return I.INTERNAL;case De.UNAVAILABLE:return I.UNAVAILABLE;case De.UNAUTHENTICATED:return I.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case De.NOT_FOUND:return I.NOT_FOUND;case De.ALREADY_EXISTS:return I.ALREADY_EXISTS;case De.PERMISSION_DENIED:return I.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case De.ABORTED:return I.ABORTED;case De.OUT_OF_RANGE:return I.OUT_OF_RANGE;case De.UNIMPLEMENTED:return I.UNIMPLEMENTED;case De.DATA_LOSS:return I.DATA_LOSS;default:return Y()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return CS(this.inner)}size(){return this.innerSize}}/**
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
 */const sD=new Fe(B.comparator);function $n(){return sD}const zS=new Fe(B.comparator);function Ps(...t){let e=zS;for(const n of t)e=e.insert(n.key,n);return e}function BS(t){let e=zS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return qs()}function jS(){return qs()}function qs(){return new cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const oD=new Fe(B.comparator),aD=new Ue(B.comparator);function te(...t){let e=aD;for(const n of t)e=e.add(n);return e}const lD=new Ue(ce);function HS(){return lD}/**
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
 */class Ku{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ku(Z.min(),i,HS(),$n(),te())}}class sa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new sa(r,n,te(),te(),te())}}/**
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
 */class nl{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class WS{constructor(e,n){this.targetId=e,this.At=n}}class KS{constructor(e,n,r=mt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $y{constructor(){this.Rt=0,this.bt=Uy(),this.Pt=mt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=te(),n=te(),r=te();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new sa(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Uy()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class uD{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=$n(),this.qt=My(),this.Kt=new Ue(ce)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Fd(s))if(r===0){const o=new B(s.path);this.jt(n,o,Je.newNoDocument(o,Z.min()))}else ye(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Fd(a.target)){const l=new B(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Je.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=te();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Ku(e,n,this.Kt,this.Ut,r);return this.Ut=$n(),this.qt=My(),this.Kt=new Ue(ce),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new $y,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ue(ce),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new $y),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function My(){return new Fe(B.comparator)}function Uy(){return new Fe(B.comparator)}/**
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
 */const cD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class dD{constructor(e,n){this.databaseId=e,this.gt=n}}function Yl(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GS(t,e){return t.gt?e.toBase64():e.toUint8Array()}function fD(t,e){return Yl(t,e.toTimestamp())}function xn(t){return ye(!!t),Z.fromTimestamp(function(e){const n=wr(e);return new Me(n.seconds,n.nanos)}(t))}function Up(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function qS(t){const e=ke.fromString(t);return ye(XS(e)),e}function Bd(t,e){return Up(t.databaseId,e.path)}function mh(t,e){const n=qS(e);if(n.get(1)!==t.databaseId.projectId)throw new z(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(QS(n))}function jd(t,e){return Up(t.databaseId,e)}function pD(t){const e=qS(t);return e.length===4?ke.emptyPath():QS(e)}function Hd(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QS(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fy(t,e,n){return{name:Bd(t,e),fields:n.value.mapValue.fields}}function mD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(ye(u===void 0||typeof u=="string"),mt.fromBase64String(u||"")):(ye(u===void 0||u instanceof Uint8Array),mt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:VS(l.code);return new z(u,l.message||"")}(o);n=new KS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mh(t,r.document.name),s=xn(r.document.updateTime),o=new Bt({mapValue:{fields:r.document.fields}}),a=Je.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new nl(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mh(t,r.document),s=r.readTime?xn(r.readTime):Z.min(),o=Je.newNoDocument(i,s),a=r.removedTargetIds||[];n=new nl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mh(t,r.document),s=r.removedTargetIds||[];n=new nl([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new rD(i),o=r.targetId;n=new WS(o,s)}}return n}function gD(t,e){let n;if(e instanceof ia)n={update:Fy(t,e.key,e.value)};else if(e instanceof FS)n={delete:Bd(t,e.key)};else if(e instanceof oi)n={update:Fy(t,e.key,e.data),updateMask:TD(e.fieldMask)};else{if(!(e instanceof nD))return Y();n={verify:Bd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ql)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ao)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ro)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ql)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:fD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function yD(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?xn(r.updateTime):xn(i);return s.isEqual(Z.min())&&(s=xn(i)),new ZN(s,r.transformResults||[])}(n,e))):[]}function vD(t,e){return{documents:[jd(t,e.path)]}}function wD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=jd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(xy(h.value))return{unaryFilter:{field:ci(h.field),op:"IS_NAN"}};if(Ty(h.value))return{unaryFilter:{field:ci(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(xy(h.value))return{unaryFilter:{field:ci(h.field),op:"IS_NOT_NAN"}};if(Ty(h.value))return{unaryFilter:{field:ci(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(h.field),op:_D(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ci(c.field),direction:kD(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||zu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function SD(t){let e=pD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=YS(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ks(Ci(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,zu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Gl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Gl(d,h)}(n.endAt)),jN(e,i,o,s,a,"F",l,u)}function ED(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function YS(t){return t?t.unaryFilter!==void 0?[ID(t)]:t.fieldFilter!==void 0?[CD(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>YS(e)).reduce((e,n)=>e.concat(n)):Y():[]}function kD(t){return cD[t]}function _D(t){return hD[t]}function ci(t){return{fieldPath:t.canonicalString()}}function Ci(t){return ut.fromServerFormat(t.fieldPath)}function CD(t){return It.create(Ci(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function ID(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ci(t.unaryFilter.field);return It.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ci(t.unaryFilter.field);return It.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ci(t.unaryFilter.field);return It.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ci(t.unaryFilter.field);return It.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function TD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function XS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class xD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&eD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=MS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,r)=>Oy(n,r))&&Ki(this.baseMutations,e.baseMutations,(n,r)=>Oy(n,r))}}class Fp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=oD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fp(e,n,r,i)}}/**
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
 */class AD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Br{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=mt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class RD{constructor(e){this.re=e}}function ND(t){const e=SD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vd(e,e.limit,"L"):e}/**
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
 */class DD{constructor(){this.Ye=new PD}addToCollectionParentIndex(e,n){return this.Ye.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(vr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class PD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(ke.comparator)).toArray()}}/**
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
 */class Qi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Qi(0)}static vn(){return new Qi(-1)}}/**
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
 */class OD{constructor(){this.changes=new cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class LD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Gs(r.mutation,i,fn.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ps();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=$n();const o=qs(),a=qs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof oi)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Gs(c.mutation,u,c.mutation.getFieldMask(),Me.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new LD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qs();let i=new Fe((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||fn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=jS();c.forEach(d=>{if(!s.has(d)){const g=MS(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve($r());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?x.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:BS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=Ps();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ps();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new Bu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Je.newInvalidDocument(u)))});let o=Ps();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Gs(u.mutation,l,fn.empty(),Me.now()),Mp(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):x.resolve(Je.newInvalidDocument(n))}}/**
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
 */class $D{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return x.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:xn(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:ND(r.bundledQuery),readTime:xn(r.readTime)}}(n)),x.resolve()}}/**
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
 */class MD{constructor(){this.overlays=new Fe(B.comparator),this.es=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=$r(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=$r(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AD(n,r));let s=this.es.get(n);s===void 0&&(s=te(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Vp{constructor(){this.ns=new Ue(ze.ss),this.rs=new Ue(ze.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new ze(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new ze(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new B(new ke([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new B(new ke([])),r=new ze(n,e),i=new ze(n,e+1);let s=te();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return B.comparator(e.key,n.key)||ce(e._s,n._s)}static os(e,n){return ce(e._s,n._s)||B.comparator(e.key,n.key)}}/**
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
 */class UD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ue(ze.ss)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(ce);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),x.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new ze(new B(s),0);let a=new Ue(ce);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),x.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return x.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new ze(n,0),i=this.gs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FD{constructor(e){this.Es=e,this.docs=new Fe(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),x.resolve(r)}getAllFromCollection(e,n,r){let i=$n();const s=new B(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||TN(IN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Y()}As(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VD(this)}getSize(e){return x.resolve(this.size)}}class VD extends OD{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class zD{constructor(e){this.persistence=e,this.Rs=new cs(n=>Lp(n),bp),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Vp,this.targetCount=0,this.vs=Qi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),x.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Dn(n),x.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Ps.containsKey(n))}}/**
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
 */class BD{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Pp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new zD(this),this.indexManager=new DD,this.remoteDocumentCache=function(r){return new FD(r)}(r=>this.referenceDelegate.xs(r)),this.It=new RD(n),this.Ns=new $D(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new UD(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new jD(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return x.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class jD extends AN{constructor(e){super(),this.currentSequenceNumber=e}}class zp{constructor(e){this.persistence=e,this.Fs=new Vp,this.$s=null}static Bs(e){return new zp(e)}get Ls(){if(this.$s)return this.$s;throw Y()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),x.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ls,r=>{const i=B.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return x.or([()=>x.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Bp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bp(e,n.fromCache,r,i)}}/**
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
 */class HD{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Dy(n))return x.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vd(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Vd(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return Dy(n)||i.isEqual(Z.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(ky()<=ae.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zd(n)),this.Bi(e,o,n,CN(i,-1)))})}Fi(e,n){let r=new Ue(NS(e));return n.forEach((i,s)=>{Mp(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return ky()<=ae.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",zd(n)),this.Ni.getDocumentsMatchingQuery(e,n,vr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class WD{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Fe(ce),this.qi=new cs(s=>Lp(s),bp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bD(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function KD(t,e,n,r){return new WD(t,e,n,r)}async function JS(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function GD(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=x.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const w=l.docVersions.get(g);ye(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=te();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ZS(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function qD(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(mt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(v,w,_){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=$n(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(QD(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Z.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function QD(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=$n();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function YD(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XD(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Br(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Wd(t,e,n){const r=X(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ra(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Vy(t,e,n){const r=X(t);let i=Z.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=X(a),h=c.qi.get(u);return h!==void 0?x.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,bn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:te())).next(a=>(JD(r,GN(e),a),{documents:a,Hi:s})))}function JD(t,e,n){let r=t.Ki.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class zy{constructor(){this.activeTargetIds=HS()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZD{constructor(){this.Lr=new zy,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new zy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class eP{qr(e){}shutdown(){}}/**
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
 */class By{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const tP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class nP{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class rP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(F("RestConnection","Received: ",l),l),l=>{throw $d("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ls,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=tP[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new pN;a.setWithCredentials(!0),a.listenOnce(hN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ph.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),s(u);break;case ph.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new z(I.DEADLINE_EXCEEDED,"Request time out"));break;case ph.HTTP_ERROR:const c=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(v)>=0?v:I.UNKNOWN}(h.status);o(new z(d,h.message))}else o(new z(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(I.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=uN(),o=cN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fN({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");F("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new nP({Hr:v=>{h?F("Connection","Not sending because WebChannel is closed:",v):(c||(F("Connection","Opening WebChannel transport."),u.open(),c=!0),F("Connection","WebChannel sending:",v),u.send(v))},Jr:()=>u.close()}),g=(v,w,_)=>{v.listen(w,p=>{try{_(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,Da.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(u,Da.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),d.io())}),g(u,Da.EventType.ERROR,v=>{h||(h=!0,$d("Connection","WebChannel transport errored:",v),d.io(new z(I.UNAVAILABLE,"The operation could not be completed")))}),g(u,Da.EventType.MESSAGE,v=>{var w;if(!h){const _=v.data[0];ye(!!_);const p=_,f=p.error||((w=p[0])===null||w===void 0?void 0:w.error);if(f){F("Connection","WebChannel received error:",f);const y=f.status;let E=function(A){const P=De[A];if(P!==void 0)return VS(P)}(y),C=f.message;E===void 0&&(E=I.INTERNAL,C="Unknown error status: "+y+" with message "+f.message),h=!0,d.io(new z(E,C)),u.close()}else F("Connection","WebChannel received:",_),d.ro(_)}}),g(o,dN.STAT_EVENT,v=>{v.stat===Sy.PROXY?F("Connection","Detected buffering proxy"):v.stat===Sy.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function gh(){return typeof document<"u"?document:null}/**
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
 */function Gu(t){return new dD(t,!0)}class eE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class tE{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new eE(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new z(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iP extends tE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=mD(this.It,e),r=function(i){if(!("targetChange"in i))return Z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?xn(s.readTime):Z.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Hd(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Fd(a)?{documents:vD(i,a)}:{query:wD(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=GS(i,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=Yl(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=ED(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Hd(this.It),n.removeTarget=e,this.Bo(n)}}class sP extends tE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=yD(e.writeResults,e.commitTime),r=xn(e.commitTime);return this.listener.Zo(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Hd(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gD(this.It,r))};this.Bo(n)}}/**
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
 */class oP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new z(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(I.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(I.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class aP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ln(n),this.ou=!1):F("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class lP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{ai(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=X(a);l._u.add(4),await oa(l),l.gu.set("Unknown"),l._u.delete(4),await qu(l)}(this))})}),this.gu=new aP(r,i)}}async function qu(t){if(ai(t))for(const e of t.wu)await e(!0)}async function oa(t){for(const e of t.wu)await e(!1)}function nE(t,e){const n=X(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Wp(n)?Hp(n):hs(n).ko()&&jp(n,e))}function rE(t,e){const n=X(t),r=hs(n);n.du.delete(e),r.ko()&&iE(n,e),n.du.size===0&&(r.ko()?r.Fo():ai(n)&&n.gu.set("Unknown"))}function jp(t,e){t.yu.Mt(e.targetId),hs(t).zo(e)}function iE(t,e){t.yu.Mt(e),hs(t).Ho(e)}function Hp(t){t.yu=new uD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),hs(t).start(),t.gu.uu()}function Wp(t){return ai(t)&&!hs(t).No()&&t.du.size>0}function ai(t){return X(t)._u.size===0}function sE(t){t.yu=void 0}async function uP(t){t.du.forEach((e,n)=>{jp(t,e)})}async function cP(t,e){sE(t),Wp(t)?(t.gu.hu(e),Hp(t)):t.gu.set("Unknown")}async function hP(t,e,n){if(t.gu.set("Online"),e instanceof KS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xl(t,r)}else if(e instanceof nl?t.yu.Gt(e):e instanceof WS?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Z.min()))try{const r=await ZS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(mt.EMPTY_BYTE_STRING,l.snapshotVersion)),iE(i,a);const u=new Br(l.target,a,1,l.sequenceNumber);jp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Xl(t,r)}}async function Xl(t,e,n){if(!ra(e))throw e;t._u.add(1),await oa(t),t.gu.set("Offline"),n||(n=()=>ZS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await qu(t)})}function oE(t,e){return e().catch(n=>Xl(t,n,e))}async function Qu(t){const e=X(t),n=Sr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;dP(e);)try{const i=await YD(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,fP(e,i)}catch(i){await Xl(e,i)}aE(e)&&lE(e)}function dP(t){return ai(t)&&t.fu.length<10}function fP(t,e){t.fu.push(e);const n=Sr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function aE(t){return ai(t)&&!Sr(t).No()&&t.fu.length>0}function lE(t){Sr(t).start()}async function pP(t){Sr(t).eu()}async function mP(t){const e=Sr(t);for(const n of t.fu)e.Xo(n.mutations)}async function gP(t,e,n){const r=t.fu.shift(),i=Fp.from(r,e,n);await oE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Qu(t)}async function yP(t,e){e&&Sr(t).Yo&&await async function(n,r){if(i=r.code,iD(i)&&i!==I.ABORTED){const s=n.fu.shift();Sr(n).Mo(),await oE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Qu(n)}var i}(t,e),aE(t)&&lE(t)}async function jy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=ai(n);n._u.add(3),await oa(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await qu(n)}async function vP(t,e){const n=X(t);e?(n._u.delete(2),await qu(n)):e||(n._u.add(2),await oa(n),n.gu.set("Unknown"))}function hs(t){return t.pu||(t.pu=function(e,n,r){const i=X(e);return i.su(),new iP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:uP.bind(null,t),Zr:cP.bind(null,t),Wo:hP.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Wp(t)?Hp(t):t.gu.set("Unknown")):(await t.pu.stop(),sE(t))})),t.pu}function Sr(t){return t.Iu||(t.Iu=function(e,n,r){const i=X(e);return i.su(),new sP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:pP.bind(null,t),Zr:yP.bind(null,t),tu:mP.bind(null,t),Zo:gP.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Qu(t)):(await t.Iu.stop(),t.fu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Kp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Kp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gp(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),ra(t))return new z(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $i{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Ps(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new $i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Hy{constructor(){this.Tu=new Fe(B.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Y():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Yi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Yi(e,n,$i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class wP{constructor(){this.Au=void 0,this.listeners=[]}}class SP{constructor(){this.queries=new cs(e=>RS(e),ju),this.onlineState="Unknown",this.Ru=new Set}}async function uE(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new wP),i)try{s.Au=await n.onListen(r)}catch(o){const a=Gp(o,`Initialization of query '${zd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&qp(n)}async function cE(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function EP(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&qp(n)}function kP(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function qp(t){t.Ru.forEach(e=>{e.next()})}class hE{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class dE{constructor(e){this.key=e}}class fE{constructor(e){this.key=e}}class _P{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=te(),this.mutatedKeys=te(),this.Gu=NS(e),this.Qu=new $i(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Hy,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Mp(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;d&&g?d.data.isEqual(g.data)?v!==w&&(r.track({type:3,doc:g}),_=!0):this.Hu(d,g)||(r.track({type:2,doc:g}),_=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),_=!0):d&&!g&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return g(h)-g(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Yi(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Hy,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=te(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new fE(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new dE(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Yi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class CP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class IP{constructor(e){this.key=e,this.nc=!1}}class TP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new cs(a=>RS(a),ju),this.rc=new Map,this.oc=new Set,this.uc=new Fe(B.comparator),this.cc=new Map,this.ac=new Vp,this.hc={},this.lc=new Map,this.fc=Qi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function xP(t,e){const n=MP(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await XD(n.localStore,bn(e));n.isPrimaryClient&&nE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await AP(n,e,r,a==="current",o.resumeToken)}return i}async function AP(t,e,n,r,i){t._c=(h,d,g)=>async function(v,w,_,p){let f=w.view.Wu(_);f.$i&&(f=await Vy(v.localStore,w.query,!1).then(({documents:C})=>w.view.Wu(C,f)));const y=p&&p.targetChanges.get(w.targetId),E=w.view.applyChanges(f,v.isPrimaryClient,y);return Ky(v,w.targetId,E.Xu),E.snapshot}(t,h,d,g);const s=await Vy(t.localStore,e,!0),o=new _P(e,s.Hi),a=o.Wu(s.documents),l=sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Ky(t,n,u.Xu);const c=new CP(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function RP(t,e){const n=X(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!ju(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),rE(n.remoteStore,r.targetId),Kd(n,r.targetId)}).catch(na)):(Kd(n,r.targetId),await Wd(n.localStore,r.targetId,!0))}async function NP(t,e,n){const r=UP(t);try{const i=await function(s,o){const a=X(s),l=Me.now(),u=o.reduce((d,g)=>d.add(g.key),te());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=$n(),v=te();return a.Gi.getEntries(d,u).next(w=>{g=w,g.forEach((_,p)=>{p.isValidDocument()||(v=v.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(w=>{c=w;const _=[];for(const p of o){const f=tD(p,c.get(p.key).overlayedDocument);f!=null&&_.push(new oi(p.key,f,xS(f.value.mapValue),Tn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(w=>{h=w;const _=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,_)})}).then(()=>({batchId:h.batchId,changes:BS(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Fe(ce)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await aa(r,i.changes),await Qu(r.remoteStore)}catch(i){const s=Gp(i,"Failed to persist write");n.reject(s)}}async function pE(t,e){const n=X(t);try{const r=await qD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ye(o.nc):i.removedDocuments.size>0&&(ye(o.nc),o.nc=!1))}),await aa(n,r,e)}catch(r){await na(r)}}function Wy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&qp(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Fe(B.comparator);o=o.insert(s,Je.newNoDocument(s,Z.min()));const a=te().add(s),l=new Ku(Z.min(),new Map,new Ue(ce),o,a);await pE(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Qp(r)}else await Wd(r.localStore,e,!1).then(()=>Kd(r,e,n)).catch(na)}async function PP(t,e){const n=X(t),r=e.batch.batchId;try{const i=await GD(n.localStore,e);gE(n,r,null),mE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await aa(n,i)}catch(i){await na(i)}}async function OP(t,e,n){const r=X(t);try{const i=await function(s,o){const a=X(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ye(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);gE(r,e,n),mE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await aa(r,i)}catch(i){await na(i)}}function mE(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function gE(t,e,n){const r=X(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Kd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||yE(t,r)})}function yE(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(rE(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Qp(t))}function Ky(t,e,n){for(const r of n)r instanceof dE?(t.ac.addReference(r.key,e),LP(t,r)):r instanceof fE?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||yE(t,r.key)):Y()}function LP(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.oc.add(r),Qp(t))}function Qp(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new B(ke.fromString(e)),r=t.fc.next();t.cc.set(r,new IP(n)),t.uc=t.uc.insert(n,r),nE(t.remoteStore,new Br(bn($p(n.path)),r,2,Pp.at))}}async function aa(t,e,n){const r=X(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Bp.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,h=>x.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>x.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ra(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(h,v)}}}(r.localStore,s))}async function bP(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await JS(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new z(I.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await aa(n,r.ji)}}function $P(t,e){const n=X(t),r=n.cc.get(e);if(r&&r.nc)return te().add(r.key);{let i=te();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function MP(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$P.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DP.bind(null,e),e.sc.Wo=EP.bind(null,e.eventManager),e.sc.wc=kP.bind(null,e.eventManager),e}function UP(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OP.bind(null,e),e}class FP{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Gu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return KD(this.persistence,new HD,e.initialUser,this.It)}yc(e){return new BD(zp.Bs,this.It)}gc(e){return new ZD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bP.bind(null,this.syncEngine),await vP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new SP}createDatastore(e){const n=Gu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new rP(i));var i;return function(s,o,a,l){return new oP(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Wy(this.syncEngine,a,0),o=By.C()?new By:new eP,new lP(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new TP(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);F("RemoteStore","RemoteStore shutting down."),n._u.add(5),await oa(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function vE(t,e,n){if(!n)throw new z(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zP(t,e,n,r){if(e===!0&&r===!0)throw new z(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gy(t){if(!B.isDocumentKey(t))throw new z(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qy(t){if(B.isDocumentKey(t))throw new z(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function ei(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yp(t);throw new z(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Qy=new Map;class Yy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Yu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mN;switch(n.type){case"gapi":const r=n.client;return new wN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qy.get(e);n&&(F("ComponentProvider","Removing Datastore"),Qy.delete(e),n.terminate())}(this),Promise.resolve()}}function BP(t,e,n,r={}){var i;const s=(t=ei(t,Yu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&$d("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=at.MOCK_USER;else{o=GI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new at(l)}t._authCredentials=new gN(new kS(o,a))}}/**
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
 */class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class Xu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xu(this.firestore,e,this._query)}}class fr extends Xu{constructor(e,n,r){super(e,n,$p(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new B(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function jP(t,e,...n){if(t=Rt(t),vE("collection","path",e),t instanceof Yu){const r=ke.fromString(e,...n);return qy(r),new fr(t,null,r)}{if(!(t instanceof Lt||t instanceof fr))throw new z(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return qy(r),new fr(t.firestore,null,r)}}function HP(t,e,...n){if(t=Rt(t),arguments.length===1&&(e=_S.R()),vE("doc","path",e),t instanceof Yu){const r=ke.fromString(e,...n);return Gy(r),new Lt(t,null,new B(r))}{if(!(t instanceof Lt||t instanceof fr))throw new z(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Gy(r),new Lt(t.firestore,t instanceof fr?t.converter:null,new B(r))}}/**
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
 *//**
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
 */class wE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class WP{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=_S.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function KP(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await JS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function GP(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qP(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>jy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>jy(e.remoteStore,s)),t.onlineComponents=e}async function qP(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await KP(t,new FP)),t.offlineComponents}async function SE(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await GP(t,new VP)),t.onlineComponents}function QP(t){return SE(t).then(e=>e.syncEngine)}async function EE(t){const e=await SE(t),n=e.eventManager;return n.onListen=xP.bind(null,e.syncEngine),n.onUnlisten=RP.bind(null,e.syncEngine),n}function YP(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new wE({next:h=>{s.enqueueAndForget(()=>cE(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new z(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new z(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new hE($p(o.path),u,{includeMetadataChanges:!0,Nu:!0});return uE(i,c)}(await EE(t),t.asyncQueue,e,n,r)),r.promise}function XP(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new wE({next:h=>{s.enqueueAndForget(()=>cE(i,c)),h.fromCache&&a.source==="server"?l.reject(new z(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new hE(o,u,{includeMetadataChanges:!0,Nu:!0});return uE(i,c)}(await EE(t),t.asyncQueue,e,n,r)),r.promise}class JP{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new eE(this,"async_queue_retry"),this.Wc=()=>{const n=gh();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=gh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new In;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ra(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Kp.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&Y()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Ju extends Yu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new JP,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kE(this),this._firestoreClient.terminate()}}function ZP(t,e){const n=typeof t=="object"?t:z1(),r=typeof t=="string"?t:e||"(default)",i=Zf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=HI("firestore");s&&BP(i,...s)}return i}function Xp(t){return t._firestoreClient||kE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new NN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new WP(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class Xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xi(mt.fromBase64String(e))}catch(n){throw new z(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xi(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Jp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _E{constructor(e){this._methodName=e}}/**
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
 */class Zp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const e2=/^__.*__$/;class t2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ia(e,this.data,n,this.fieldTransforms)}}function CE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class em{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new em(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Jl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(CE(this.sa)&&e2.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class n2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Gu(e)}da(e,n,r,i=!1){return new em({sa:e,methodName:n,fa:r,path:ut.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function r2(t){const e=t._freezeSettings(),n=Gu(t._databaseId);return new n2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function i2(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);AE("Data must be an object, but it was:",o,r);const a=TE(r,o);let l,u;if(s.merge)l=new fn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=s2(e,h,n);if(!o.contains(d))throw new z(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);a2(c,d)||c.push(d)}l=new fn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new t2(new Bt(a),l,u)}function IE(t,e){if(xE(t=Rt(t)))return AE("Unsupported field value:",e,t),TE(t,e);if(t instanceof _E)return function(n,r){if(!CE(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=IE(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return QN(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Me.fromDate(n);return{timestampValue:Yl(r.It,i)}}if(n instanceof Me){const i=new Me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yl(r.It,i)}}if(n instanceof Zp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xi)return{bytesValue:GS(r.It,n._byteString)};if(n instanceof Lt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Up(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Yp(n)}`)}(t,e)}function TE(t,e){const n={};return CS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,(r,i)=>{const s=IE(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Zp||t instanceof Xi||t instanceof Lt||t instanceof _E)}function AE(t,e,n){if(!xE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Yp(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function s2(t,e,n){if((e=Rt(e))instanceof Jp)return e._internalPath;if(typeof e=="string")return RE(t,e);throw Jl("Field path arguments must be of type string or ",t,!1,void 0,n)}const o2=new RegExp("[~\\*/\\[\\]]");function RE(t,e,n){if(e.search(o2)>=0)throw Jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jp(...e.split("."))._internalPath}catch{throw Jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Jl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(I.INVALID_ARGUMENT,a+t+l)}function a2(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class NE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new l2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(DE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class l2 extends NE{data(){return super.data()}}function DE(t,e){return typeof e=="string"?RE(t,e):e instanceof Jp?e._internalPath:e._delegate._internalPath}/**
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
 */function u2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function c2(t,...e){for(const n of e)t=n._apply(t);return t}/**
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
 */class h2{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const r={};return us(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Zp(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=TS(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const n=wr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);ye(XS(r));const i=new Io(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||Ln(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function d2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PE extends NE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(DE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class rl extends PE{data(e={}){return super.data(e)}}class f2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new rl(this._firestore,this._userDataWriter,r.key,r,new Os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new rl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Os(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new rl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Os(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:p2(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function p2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function m2(t){t=ei(t,Lt);const e=ei(t.firestore,Ju);return YP(Xp(e),t._key).then(n=>w2(e,t,n))}class OE extends h2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function g2(t){t=ei(t,Xu);const e=ei(t.firestore,Ju),n=Xp(e),r=new OE(e);return u2(t._query),XP(n,t._query).then(i=>new f2(e,r,t,i))}function y2(t,e,n){t=ei(t,Lt);const r=ei(t.firestore,Ju),i=d2(t.converter,e,n);return v2(r,[i2(r2(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Tn.none())])}function v2(t,e){return function(n,r){const i=new In;return n.asyncQueue.enqueueAndForget(async()=>NP(await QP(n),r,i)),i.promise}(Xp(t),e)}function w2(t,e,n){const r=n.docs.get(e._key),i=new OE(t);return new PE(t,i,e._key,r,new Os(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ls=n})(Vo),Hi(new qr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ju(new yN(n.getProvider("auth-internal")),new EN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),dr(Ey,"3.7.2",t),dr(Ey,"3.7.2","esm2017")})();const S2={apiKey:"AIzaSyBccE5F3I66ObR4kjYozYFItramXIEgUys",authDomain:"flix-app-db.firebaseapp.com",projectId:"flix-app-db",storageBucket:"flix-app-db.appspot.com",messagingSenderId:"868066721936",appId:"1:868066721936:web:85887c5f9d7ac953165815"};V1(S2);const LE=new vn;LE.setCustomParameters({prompt:"select_account"});const bE=ZP(),ds=dR(),E2=()=>kA(ds,LE),k2=async t=>{const e=jP(bE,t),n=c2(e);return(await g2(n)).docs.map(i=>i.data())},$E=async(t,e={})=>{if(!t)return;const n=HP(bE,"users",t.uid);if(!(await m2(n)).exists()){const{displayName:i,email:s}=t,o=new Date;try{await y2(n,{displayName:i,email:s,createdAt:o,...e})}catch(a){console.log("Error creating user",a.message)}}return n},_2=async(t,e)=>{if(!(!t||!e))return await Gx(ds,t,e)},C2=async(t,e)=>{if(!(!t||!e))return await qx(ds,t,e)},I2=async()=>Jx(ds),T2=t=>Xx(ds,t),Zu=k.exports.createContext({currentUser:null,setCurrentUser:()=>null}),x2=({children:t})=>{const[e,n]=k.exports.useState(null);k.exports.useEffect(()=>T2(s=>{s&&$E(s);const o=ds.currentUser;o!==null&&(o.displayName,o.email),n(s)}),[]);const r={currentUser:e,setCurrentUser:n};return m(Zu.Provider,{value:r,children:t})},li=k.exports.createContext({allShows:[]}),er={GET_ALL_SHOWS_REQUEST:"GET_ALL_SHOWS_REQUEST",GET_ALL_SHOWS_SUCCESS:"GET_ALL_SHOWS_SUCCESS",GET_ALL_SHOWS_FAIL:"GET_ALL_SHOWS_FAIL",TOGGLE_BOOKMARK:"TOGGLE_BOOKMARK"},A2={loading:!1,allShowsTotal:[]},R2=(t,e)=>{switch(e.type){case er.GET_ALL_SHOWS_REQUEST:return{loading:!0,allShowsTotal:[]};case er.GET_ALL_SHOWS_SUCCESS:return{...t,loading:!1,allShowsTotal:e.payload};case er.GET_ALL_SHOWS_FAIL:return{loading:!1};case er.TOGGLE_BOOKMARK:return{...t,allShowsTotal:e.payload};default:return t}},N2=({children:t})=>{const[e,n]=k.exports.useReducer(R2,A2),r={allShowsTotal:e.allShowsTotal,loading:e.loading,toggleIsBookmarked:o=>{const a=i(o);n({type:er.TOGGLE_BOOKMARK,payload:a})}},i=o=>e.allShowsTotal.map(l=>l.id===o?{...l,isBookmarked:!l.isBookmarked}:l),s=async()=>{n({type:er.GET_ALL_SHOWS_REQUEST});try{const o=await k2("moviesAndShows"),a=o[0].items.concat(o[1].items);n({type:er.GET_ALL_SHOWS_SUCCESS,payload:a})}catch(o){n({type:er.GET_ALL_SHOWS_FAIL}),console.log("error getting data",o.message)}};return k.exports.useEffect(()=>{s()},[]),m(li.Provider,{value:r,children:t})},Fn=k.exports.createContext(),D2=({children:t})=>{const[e,n]=k.exports.useState(),[r,i]=k.exports.useState(!1),a={onShowDetails:l=>{n(l),i(!0)},onHideDetails:()=>{n(null),i(!1)},isOpen:r,currentSlide:e};return m(Fn.Provider,{value:a,children:t})};var tm={exports:{}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm=Symbol.for("react.element"),rm=Symbol.for("react.portal"),ec=Symbol.for("react.fragment"),tc=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),rc=Symbol.for("react.provider"),ic=Symbol.for("react.context"),P2=Symbol.for("react.server_context"),sc=Symbol.for("react.forward_ref"),oc=Symbol.for("react.suspense"),ac=Symbol.for("react.suspense_list"),lc=Symbol.for("react.memo"),uc=Symbol.for("react.lazy"),O2=Symbol.for("react.offscreen"),ME;ME=Symbol.for("react.module.reference");function qt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case nm:switch(t=t.type,t){case ec:case nc:case tc:case oc:case ac:return t;default:switch(t=t&&t.$$typeof,t){case P2:case ic:case sc:case uc:case lc:case rc:return t;default:return e}}case rm:return e}}}fe.ContextConsumer=ic;fe.ContextProvider=rc;fe.Element=nm;fe.ForwardRef=sc;fe.Fragment=ec;fe.Lazy=uc;fe.Memo=lc;fe.Portal=rm;fe.Profiler=nc;fe.StrictMode=tc;fe.Suspense=oc;fe.SuspenseList=ac;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(t){return qt(t)===ic};fe.isContextProvider=function(t){return qt(t)===rc};fe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===nm};fe.isForwardRef=function(t){return qt(t)===sc};fe.isFragment=function(t){return qt(t)===ec};fe.isLazy=function(t){return qt(t)===uc};fe.isMemo=function(t){return qt(t)===lc};fe.isPortal=function(t){return qt(t)===rm};fe.isProfiler=function(t){return qt(t)===nc};fe.isStrictMode=function(t){return qt(t)===tc};fe.isSuspense=function(t){return qt(t)===oc};fe.isSuspenseList=function(t){return qt(t)===ac};fe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ec||t===nc||t===tc||t===oc||t===ac||t===O2||typeof t=="object"&&t!==null&&(t.$$typeof===uc||t.$$typeof===lc||t.$$typeof===rc||t.$$typeof===ic||t.$$typeof===sc||t.$$typeof===ME||t.getModuleId!==void 0)};fe.typeOf=qt;(function(t){t.exports=fe})(tm);function L2(t){function e(D,b,$,G,S){for(var re=0,N=0,Te=0,le=0,he,J,Ge=0,kt=0,oe,it=oe=he=0,ue=0,qe=0,fs=0,Qe=0,ua=$.length,ps=ua-1,Qt,Q="",Re="",Ic="",Tc="",Vn;ue<ua;){if(J=$.charCodeAt(ue),ue===ps&&N+le+Te+re!==0&&(N!==0&&(J=N===47?10:47),le=Te=re=0,ua++,ps++),N+le+Te+re===0){if(ue===ps&&(0<qe&&(Q=Q.replace(d,"")),0<Q.trim().length)){switch(J){case 32:case 9:case 59:case 13:case 10:break;default:Q+=$.charAt(ue)}J=59}switch(J){case 123:for(Q=Q.trim(),he=Q.charCodeAt(0),oe=1,Qe=++ue;ue<ua;){switch(J=$.charCodeAt(ue)){case 123:oe++;break;case 125:oe--;break;case 47:switch(J=$.charCodeAt(ue+1)){case 42:case 47:e:{for(it=ue+1;it<ps;++it)switch($.charCodeAt(it)){case 47:if(J===42&&$.charCodeAt(it-1)===42&&ue+2!==it){ue=it+1;break e}break;case 10:if(J===47){ue=it+1;break e}}ue=it}}break;case 91:J++;case 40:J++;case 34:case 39:for(;ue++<ps&&$.charCodeAt(ue)!==J;);}if(oe===0)break;ue++}switch(oe=$.substring(Qe,ue),he===0&&(he=(Q=Q.replace(h,"").trim()).charCodeAt(0)),he){case 64:switch(0<qe&&(Q=Q.replace(d,"")),J=Q.charCodeAt(1),J){case 100:case 109:case 115:case 45:qe=b;break;default:qe=mn}if(oe=e(b,qe,oe,J,S+1),Qe=oe.length,0<R&&(qe=n(mn,Q,fs),Vn=a(3,oe,qe,b,Ke,Le,Qe,J,S,G),Q=qe.join(""),Vn!==void 0&&(Qe=(oe=Vn.trim()).length)===0&&(J=0,oe="")),0<Qe)switch(J){case 115:Q=Q.replace(A,o);case 100:case 109:case 45:oe=Q+"{"+oe+"}";break;case 107:Q=Q.replace(f,"$1 $2"),oe=Q+"{"+oe+"}",oe=rt===1||rt===2&&s("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=Q+oe,G===112&&(oe=(Re+=oe,""))}else oe="";break;default:oe=e(b,n(b,Q,fs),oe,G,S+1)}Ic+=oe,oe=fs=qe=it=he=0,Q="",J=$.charCodeAt(++ue);break;case 125:case 59:if(Q=(0<qe?Q.replace(d,""):Q).trim(),1<(Qe=Q.length))switch(it===0&&(he=Q.charCodeAt(0),he===45||96<he&&123>he)&&(Qe=(Q=Q.replace(" ",":")).length),0<R&&(Vn=a(1,Q,b,D,Ke,Le,Re.length,G,S,G))!==void 0&&(Qe=(Q=Vn.trim()).length)===0&&(Q="\0\0"),he=Q.charCodeAt(0),J=Q.charCodeAt(1),he){case 0:break;case 64:if(J===105||J===99){Tc+=Q+$.charAt(ue);break}default:Q.charCodeAt(Qe-1)!==58&&(Re+=i(Q,he,J,Q.charCodeAt(2)))}fs=qe=it=he=0,Q="",J=$.charCodeAt(++ue)}}switch(J){case 13:case 10:N===47?N=0:1+he===0&&G!==107&&0<Q.length&&(qe=1,Q+="\0"),0<R*K&&a(0,Q,b,D,Ke,Le,Re.length,G,S,G),Le=1,Ke++;break;case 59:case 125:if(N+le+Te+re===0){Le++;break}default:switch(Le++,Qt=$.charAt(ue),J){case 9:case 32:if(le+re+N===0)switch(Ge){case 44:case 58:case 9:case 32:Qt="";break;default:J!==32&&(Qt=" ")}break;case 0:Qt="\\0";break;case 12:Qt="\\f";break;case 11:Qt="\\v";break;case 38:le+N+re===0&&(qe=fs=1,Qt="\f"+Qt);break;case 108:if(le+N+re+Nt===0&&0<it)switch(ue-it){case 2:Ge===112&&$.charCodeAt(ue-3)===58&&(Nt=Ge);case 8:kt===111&&(Nt=kt)}break;case 58:le+N+re===0&&(it=ue);break;case 44:N+Te+le+re===0&&(qe=1,Qt+="\r");break;case 34:case 39:N===0&&(le=le===J?0:le===0?J:le);break;case 91:le+N+Te===0&&re++;break;case 93:le+N+Te===0&&re--;break;case 41:le+N+re===0&&Te--;break;case 40:if(le+N+re===0){if(he===0)switch(2*Ge+3*kt){case 533:break;default:he=1}Te++}break;case 64:N+Te+le+re+it+oe===0&&(oe=1);break;case 42:case 47:if(!(0<le+re+Te))switch(N){case 0:switch(2*J+3*$.charCodeAt(ue+1)){case 235:N=47;break;case 220:Qe=ue,N=42}break;case 42:J===47&&Ge===42&&Qe+2!==ue&&($.charCodeAt(Qe+2)===33&&(Re+=$.substring(Qe,ue+1)),Qt="",N=0)}}N===0&&(Q+=Qt)}kt=Ge,Ge=J,ue++}if(Qe=Re.length,0<Qe){if(qe=b,0<R&&(Vn=a(2,Re,qe,D,Ke,Le,Qe,G,S,G),Vn!==void 0&&(Re=Vn).length===0))return Tc+Re+Ic;if(Re=qe.join(",")+"{"+Re+"}",rt*Nt!==0){switch(rt!==2||s(Re,2)||(Nt=0),Nt){case 111:Re=Re.replace(E,":-moz-$1")+Re;break;case 112:Re=Re.replace(y,"::-webkit-input-$1")+Re.replace(y,"::-moz-$1")+Re.replace(y,":-ms-input-$1")+Re}Nt=0}}return Tc+Re+Ic}function n(D,b,$){var G=b.trim().split(_);b=G;var S=G.length,re=D.length;switch(re){case 0:case 1:var N=0;for(D=re===0?"":D[0]+" ";N<S;++N)b[N]=r(D,b[N],$).trim();break;default:var Te=N=0;for(b=[];N<S;++N)for(var le=0;le<re;++le)b[Te++]=r(D[le]+" ",G[N],$).trim()}return b}function r(D,b,$){var G=b.charCodeAt(0);switch(33>G&&(G=(b=b.trim()).charCodeAt(0)),G){case 38:return b.replace(p,"$1"+D.trim());case 58:return D.trim()+b.replace(p,"$1"+D.trim());default:if(0<1*$&&0<b.indexOf("\f"))return b.replace(p,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+b}function i(D,b,$,G){var S=D+";",re=2*b+3*$+4*G;if(re===944){D=S.indexOf(":",9)+1;var N=S.substring(D,S.length-1).trim();return N=S.substring(0,D).trim()+N+";",rt===1||rt===2&&s(N,1)?"-webkit-"+N+N:N}if(rt===0||rt===2&&!s(S,1))return S;switch(re){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(Ve,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return N=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+S+"-ms-flex-pack"+N+S;case 1005:return v.test(S)?S.replace(g,":-webkit-")+S.replace(g,":-moz-")+S:S;case 1e3:switch(N=S.substring(13).trim(),b=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(b)){case 226:N=S.replace(C,"tb");break;case 232:N=S.replace(C,"tb-rl");break;case 220:N=S.replace(C,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+N+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(b=(S=D).length-10,N=(S.charCodeAt(b)===33?S.substring(0,b):S).substring(D.indexOf(":",7)+1).trim(),re=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:S=S.replace(N,"-webkit-"+N)+";"+S;break;case 207:case 102:S=S.replace(N,"-webkit-"+(102<re?"inline-":"")+"box")+";"+S.replace(N,"-webkit-"+N)+";"+S.replace(N,"-ms-"+N+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return N=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+N+"-ms-flex-"+N+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(L,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(L,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(W.test(D)===!0)return(N=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?i(D.replace("stretch","fill-available"),b,$,G).replace(":fill-available",":stretch"):S.replace(N,"-webkit-"+N)+S.replace(N,"-moz-"+N.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,$+G===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+S}return S}function s(D,b){var $=D.indexOf(b===1?":":"{"),G=D.substring(0,b!==3?$:10);return $=D.substring($+1,D.length-1),j(b!==2?G:G.replace(ee,"$1"),$,b)}function o(D,b){var $=i(b,b.charCodeAt(0),b.charCodeAt(1),b.charCodeAt(2));return $!==b+";"?$.replace(P," or ($1)").substring(4):"("+b+")"}function a(D,b,$,G,S,re,N,Te,le,he){for(var J=0,Ge=b,kt;J<R;++J)switch(kt=gt[J].call(c,D,Ge,$,G,S,re,N,Te,le,he)){case void 0:case!1:case!0:case null:break;default:Ge=kt}if(Ge!==b)return Ge}function l(D){switch(D){case void 0:case null:R=gt.length=0;break;default:if(typeof D=="function")gt[R++]=D;else if(typeof D=="object")for(var b=0,$=D.length;b<$;++b)l(D[b]);else K=!!D|0}return l}function u(D){return D=D.prefix,D!==void 0&&(j=null,D?typeof D!="function"?rt=1:(rt=2,j=D):rt=0),u}function c(D,b){var $=D;if(33>$.charCodeAt(0)&&($=$.trim()),me=$,$=[me],0<R){var G=a(-1,b,$,$,Ke,Le,0,0,0,0);G!==void 0&&typeof G=="string"&&(b=G)}var S=e(mn,$,b,0,0);return 0<R&&(G=a(-2,S,$,$,Ke,Le,S.length,0,0,0),G!==void 0&&(S=G)),me="",Nt=0,Le=Ke=1,S}var h=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,_=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,E=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,L=/-self|flex-/g,ee=/[^]*?(:[rp][el]a[\w-]+)[^]*/,W=/stretch|:\s*\w+\-(?:conte|avail)/,Ve=/([^-])(image-set\()/,Le=1,Ke=1,Nt=0,rt=1,mn=[],gt=[],R=0,j=null,K=0,me="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var b2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $2(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var M2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Xy=$2(function(t){return M2.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),UE={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We=typeof Symbol=="function"&&Symbol.for,im=We?Symbol.for("react.element"):60103,sm=We?Symbol.for("react.portal"):60106,cc=We?Symbol.for("react.fragment"):60107,hc=We?Symbol.for("react.strict_mode"):60108,dc=We?Symbol.for("react.profiler"):60114,fc=We?Symbol.for("react.provider"):60109,pc=We?Symbol.for("react.context"):60110,om=We?Symbol.for("react.async_mode"):60111,mc=We?Symbol.for("react.concurrent_mode"):60111,gc=We?Symbol.for("react.forward_ref"):60112,yc=We?Symbol.for("react.suspense"):60113,U2=We?Symbol.for("react.suspense_list"):60120,vc=We?Symbol.for("react.memo"):60115,wc=We?Symbol.for("react.lazy"):60116,F2=We?Symbol.for("react.block"):60121,V2=We?Symbol.for("react.fundamental"):60117,z2=We?Symbol.for("react.responder"):60118,B2=We?Symbol.for("react.scope"):60119;function Ft(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case im:switch(t=t.type,t){case om:case mc:case cc:case dc:case hc:case yc:return t;default:switch(t=t&&t.$$typeof,t){case pc:case gc:case wc:case vc:case fc:return t;default:return e}}case sm:return e}}}function FE(t){return Ft(t)===mc}pe.AsyncMode=om;pe.ConcurrentMode=mc;pe.ContextConsumer=pc;pe.ContextProvider=fc;pe.Element=im;pe.ForwardRef=gc;pe.Fragment=cc;pe.Lazy=wc;pe.Memo=vc;pe.Portal=sm;pe.Profiler=dc;pe.StrictMode=hc;pe.Suspense=yc;pe.isAsyncMode=function(t){return FE(t)||Ft(t)===om};pe.isConcurrentMode=FE;pe.isContextConsumer=function(t){return Ft(t)===pc};pe.isContextProvider=function(t){return Ft(t)===fc};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===im};pe.isForwardRef=function(t){return Ft(t)===gc};pe.isFragment=function(t){return Ft(t)===cc};pe.isLazy=function(t){return Ft(t)===wc};pe.isMemo=function(t){return Ft(t)===vc};pe.isPortal=function(t){return Ft(t)===sm};pe.isProfiler=function(t){return Ft(t)===dc};pe.isStrictMode=function(t){return Ft(t)===hc};pe.isSuspense=function(t){return Ft(t)===yc};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===cc||t===mc||t===dc||t===hc||t===yc||t===U2||typeof t=="object"&&t!==null&&(t.$$typeof===wc||t.$$typeof===vc||t.$$typeof===fc||t.$$typeof===pc||t.$$typeof===gc||t.$$typeof===V2||t.$$typeof===z2||t.$$typeof===B2||t.$$typeof===F2)};pe.typeOf=Ft;(function(t){t.exports=pe})(UE);var am=UE.exports,j2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},W2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},VE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lm={};lm[am.ForwardRef]=W2;lm[am.Memo]=VE;function Jy(t){return am.isMemo(t)?VE:lm[t.$$typeof]||j2}var K2=Object.defineProperty,G2=Object.getOwnPropertyNames,Zy=Object.getOwnPropertySymbols,q2=Object.getOwnPropertyDescriptor,Q2=Object.getPrototypeOf,ev=Object.prototype;function zE(t,e,n){if(typeof e!="string"){if(ev){var r=Q2(e);r&&r!==ev&&zE(t,r,n)}var i=G2(e);Zy&&(i=i.concat(Zy(e)));for(var s=Jy(t),o=Jy(e),a=0;a<i.length;++a){var l=i[a];if(!H2[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=q2(e,l);try{K2(t,l,u)}catch{}}}}return t}var Y2=zE;function ln(){return(ln=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var tv=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Gd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!tm.exports.typeOf(t)},Zl=Object.freeze([]),pr=Object.freeze({});function No(t){return typeof t=="function"}function nv(t){return t.displayName||t.name||"Component"}function um(t){return t&&typeof t.styledComponentId=="string"}var Ji=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",cm=typeof window<"u"&&"HTMLElement"in window,X2=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),J2={};function la(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Z2=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&la(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),il=new Map,eu=new Map,Qs=1,La=function(t){if(il.has(t))return il.get(t);for(;eu.has(Qs);)Qs++;var e=Qs++;return il.set(t,e),eu.set(e,t),e},eO=function(t){return eu.get(t)},tO=function(t,e){e>=Qs&&(Qs=e+1),il.set(t,e),eu.set(e,t)},nO="style["+Ji+'][data-styled-version="5.3.6"]',rO=new RegExp("^"+Ji+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),iO=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},sO=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(rO);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(tO(u,l),iO(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},oO=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},BE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ji))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ji,"active"),r.setAttribute("data-styled-version","5.3.6");var o=oO();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},aO=function(){function t(n){var r=this.element=BE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}la(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),lO=function(){function t(n){var r=this.element=BE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),uO=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),rv=cm,cO={isServer:!cm,useCSSOMInjection:!X2},tu=function(){function t(n,r,i){n===void 0&&(n=pr),r===void 0&&(r={}),this.options=ln({},cO,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&cm&&rv&&(rv=!1,function(s){for(var o=document.querySelectorAll(nO),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ji)!=="active"&&(sO(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return La(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(ln({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new uO(o):s?new aO(o):new lO(o),new Z2(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(La(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(La(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(La(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=eO(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ji+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),hO=/(a)(d)/gi,iv=function(t){return String.fromCharCode(t+(t>25?39:97))};function qd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=iv(e%52)+n;return(iv(e%52)+n).replace(hO,"$1-$2")}var Ii=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},jE=function(t){return Ii(5381,t)};function HE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(No(n)&&!um(n))return!1}return!0}var dO=jE("5.3.6"),fO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&HE(e),this.componentId=n,this.baseHash=Ii(dO,n),this.baseStyle=r,tu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ti(this.rules,e,n,r).join(""),a=qd(Ii(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ii(this.baseHash,r.hash),h="",d=0;d<u;d++){var g=this.rules[d];if(typeof g=="string")h+=g;else if(g){var v=ti(g,e,n,r),w=Array.isArray(v)?v.join(""):v;c=Ii(c,w+d),h+=w}}if(h){var _=qd(c>>>0);if(!n.hasNameForId(i,_)){var p=r(h,"."+_,void 0,i);n.insertRules(i,_,p)}s.push(_)}}return s.join(" ")},t}(),pO=/^\s*\/\/.*$/gm,mO=[":","[",".","#"];function gO(t){var e,n,r,i,s=t===void 0?pr:t,o=s.options,a=o===void 0?pr:o,l=s.plugins,u=l===void 0?Zl:l,c=new L2(a),h=[],d=function(w){function _(p){if(p)try{w(p+"}")}catch{}}return function(p,f,y,E,C,A,P,L,ee,W){switch(p){case 1:if(ee===0&&f.charCodeAt(0)===64)return w(f+";"),"";break;case 2:if(L===0)return f+"/*|*/";break;case 3:switch(L){case 102:case 112:return w(y[0]+f),"";default:return f+(W===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(_)}}}(function(w){h.push(w)}),g=function(w,_,p){return _===0&&mO.indexOf(p[n.length])!==-1||p.match(i)?w:"."+e};function v(w,_,p,f){f===void 0&&(f="&");var y=w.replace(pO,""),E=_&&p?p+" "+_+" { "+y+" }":y;return e=f,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!_?"":_,E)}return c.use([].concat(u,[function(w,_,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,g))},d,function(w){if(w===-2){var _=h;return h=[],_}}])),v.hash=u.length?u.reduce(function(w,_){return _.name||la(15),Ii(w,_.name)},5381).toString():"",v}var WE=Er.createContext();WE.Consumer;var KE=Er.createContext(),yO=(KE.Consumer,new tu),Qd=gO();function GE(){return k.exports.useContext(WE)||yO}function qE(){return k.exports.useContext(KE)||Qd}var QE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Qd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return la(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Qd),this.name+e.hash},t}(),vO=/([A-Z])/,wO=/([A-Z])/g,SO=/^ms-/,EO=function(t){return"-"+t.toLowerCase()};function sv(t){return vO.test(t)?t.replace(wO,EO).replace(SO,"-ms-"):t}var ov=function(t){return t==null||t===!1||t===""};function ti(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ti(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(ov(t))return"";if(um(t))return"."+t.styledComponentId;if(No(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ti(l,e,n,r)}var u;return t instanceof QE?n?(t.inject(n,r),t.getName(r)):t:Gd(t)?function c(h,d){var g,v,w=[];for(var _ in h)h.hasOwnProperty(_)&&!ov(h[_])&&(Array.isArray(h[_])&&h[_].isCss||No(h[_])?w.push(sv(_)+":",h[_],";"):Gd(h[_])?w.push.apply(w,c(h[_],_)):w.push(sv(_)+": "+(g=_,(v=h[_])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||g in b2?String(v).trim():v+"px")+";"));return d?[d+" {"].concat(w,["}"]):w}(t):t.toString()}var av=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Sc(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return No(t)||Gd(t)?av(ti(tv(Zl,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:av(ti(tv(t,n)))}var YE=function(t,e,n){return n===void 0&&(n=pr),t.theme!==n.theme&&t.theme||e||n.theme},kO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_O=/(^-|-$)/g;function yh(t){return t.replace(kO,"-").replace(_O,"")}var hm=function(t){return qd(jE(t)>>>0)};function ba(t){return typeof t=="string"&&!0}var Yd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},CO=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function IO(t,e,n){var r=t[n];Yd(e)&&Yd(r)?XE(r,e):t[n]=e}function XE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Yd(o))for(var a in o)CO(a)&&IO(t,o[a],a)}return t}var dm=Er.createContext();dm.Consumer;var vh={};function JE(t,e,n){var r=um(t),i=!ba(t),s=e.attrs,o=s===void 0?Zl:s,a=e.componentId,l=a===void 0?function(f,y){var E=typeof f!="string"?"sc":yh(f);vh[E]=(vh[E]||0)+1;var C=E+"-"+hm("5.3.6"+E+vh[E]);return y?y+"-"+C:C}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return ba(f)?"styled."+f:"Styled("+nv(f)+")"}(t):u,h=e.displayName&&e.componentId?yh(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(f,y,E){return t.shouldForwardProp(f,y,E)&&e.shouldForwardProp(f,y,E)}:t.shouldForwardProp);var v,w=new fO(n,h,r?t.componentStyle:void 0),_=w.isStatic&&o.length===0,p=function(f,y){return function(E,C,A,P){var L=E.attrs,ee=E.componentStyle,W=E.defaultProps,Ve=E.foldedComponentIds,Le=E.shouldForwardProp,Ke=E.styledComponentId,Nt=E.target,rt=function(G,S,re){G===void 0&&(G=pr);var N=ln({},S,{theme:G}),Te={};return re.forEach(function(le){var he,J,Ge,kt=le;for(he in No(kt)&&(kt=kt(N)),kt)N[he]=Te[he]=he==="className"?(J=Te[he],Ge=kt[he],J&&Ge?J+" "+Ge:J||Ge):kt[he]}),[N,Te]}(YE(C,k.exports.useContext(dm),W)||pr,C,L),mn=rt[0],gt=rt[1],R=function(G,S,re,N){var Te=GE(),le=qE(),he=S?G.generateAndInjectStyles(pr,Te,le):G.generateAndInjectStyles(re,Te,le);return he}(ee,P,mn),j=A,K=gt.$as||C.$as||gt.as||C.as||Nt,me=ba(K),D=gt!==C?ln({},C,{},gt):C,b={};for(var $ in D)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?b.as=D[$]:(Le?Le($,Xy,K):!me||Xy($))&&(b[$]=D[$]));return C.style&&gt.style!==C.style&&(b.style=ln({},C.style,{},gt.style)),b.className=Array.prototype.concat(Ve,Ke,R!==Ke?R:null,C.className,gt.className).filter(Boolean).join(" "),b.ref=j,k.exports.createElement(K,b)}(v,f,y,_)};return p.displayName=c,(v=Er.forwardRef(p)).attrs=d,v.componentStyle=w,v.displayName=c,v.shouldForwardProp=g,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Zl,v.styledComponentId=h,v.target=r?t.target:t,v.withComponent=function(f){var y=e.componentId,E=function(A,P){if(A==null)return{};var L,ee,W={},Ve=Object.keys(A);for(ee=0;ee<Ve.length;ee++)L=Ve[ee],P.indexOf(L)>=0||(W[L]=A[L]);return W}(e,["componentId"]),C=y&&y+"-"+(ba(f)?f:yh(nv(f)));return JE(f,ln({},E,{attrs:d,componentId:C}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?XE({},t.defaultProps,f):f}}),v.toString=function(){return"."+v.styledComponentId},i&&Y2(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Xd=function(t){return function e(n,r,i){if(i===void 0&&(i=pr),!tm.exports.isValidElementType(r))return la(1,String(r));var s=function(){return n(r,i,Sc.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,ln({},i,{},o))},s.attrs=function(o){return e(n,r,ln({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(JE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Xd[t]=Xd(t)});var TO=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=HE(n),tu.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(ti(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&tu.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function xO(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Sc.apply(void 0,[t].concat(n)),s="sc-global-"+hm(JSON.stringify(i)),o=new TO(i,s);function a(u){var c=GE(),h=qE(),d=k.exports.useContext(dm),g=k.exports.useRef(c.allocateGSInstance(s)).current;return c.server&&l(g,u,c,d,h),k.exports.useLayoutEffect(function(){if(!c.server)return l(g,u,c,d,h),function(){return o.removeStyles(g,c)}},[g,u,c,d,h]),null}function l(u,c,h,d,g){if(o.isStatic)o.renderStyles(u,J2,h,g);else{var v=ln({},c,{theme:YE(c,d,a.defaultProps)});o.renderStyles(u,v,h,g)}}return Er.memo(a)}function AO(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Sc.apply(void 0,[t].concat(n)).join(""),s=hm(i);return new QE(s,i)}const O=Xd,fm=O.button`
  min-width: 25rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 5rem;
  font-size: 1.5rem;
  background-color: var(--red);
  color: var(--white);
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 0 1rem 0;

  &:hover {
    background-color: var(--white);
    color: var(--red);
  }
`,RO=O(fm)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: var(--white);
    color: #4285f4;
    border: none;
  }
`,NO=O(fm)`
  width: 10rem;
  border: 1px solid black;
  min-width: 10rem;
  height: 3rem;
  line-height: 3rem;
  margin: 0;

  @media (max-width: 600px){
    width: 6rem;
    min-width: 6rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: .5rem;
  }
`,Mr={base:"base",google:"google-sign-in",exit:"exit"},DO=(t=Mr.base)=>({[Mr.base]:fm,[Mr.google]:RO,[Mr.exit]:NO})[t],Do=({children:t,buttonType:e,...n})=>{const r=DO(e);return m(r,{...n,children:t})},PO=O.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1rem 2rem;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  h2 {
    font-size: var(--Mhead);
    font-weight: 500;
    padding-bottom: 1rem;
  }
  p {
    font-size: var(--body-med);
    color: var(--white);
    font-weight: 300;
  }
  span {
    display: inline-block;
  }
`,OO=({show:t})=>V(PO,{children:[m("h2",{children:t.title}),V("p",{children:[t.year,m("span",{children:"\xA0"})," \u2022 ",m("span",{children:"\xA0"}),V("span",{children:[" ",t.category==="Movie"?m("svg",{width:"12",height:"12",xmlns:"http://www.w3.org/2000/svg",children:m("path",{d:"M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z",fill:"#FFF",opacity:".75"})}):m("svg",{width:"12",height:"12",xmlns:"http://www.w3.org/2000/svg",children:m("path",{d:"M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z",fill:"#FFF",opacity:".75"})})]}),m("span",{children:"\xA0"}),m("span",{children:"\xA0"}),t.category,m("span",{children:"\xA0"}),"\u2022",m("span",{children:"\xA0"})," ",t.rating]})]}),LO=O.button`
  display: flex;
  height: 5rem;
  width: 11rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5rem;
  padding: 0 1rem;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
 
`,pm=()=>V(LO,{children:[m("svg",{width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg",children:m("path",{d:"M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z",fill:"#fff"})}),m("h4",{style:{margin:"0 1rem 0 0"},children:m("strong",{children:"Play"})})]}),bO=O.button`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  //color: #fff;
  background: rgba(0, 0, 0, .5);

  ion-icon {
    font-size: 2rem;
    color: var(--white);
    cursor: pointer;
    transition: all 1s linear;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  `,mm=t=>m(bO,{onClick:t.onClick,children:t.bookmarked?m("ion-icon",{name:"bookmark"}):m("ion-icon",{name:"bookmark-outline"})}),$O=AO`
  0%{
    opacity: 0;    
    transform: translateY(-600px) scale(0);
  }
  100% {
    opacity: 1;    
    transform: translateY(0px) scale(1);
  }
  `,MO=O.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`,UO=O.div`
  position: fixed;
  display: grid;
  grid-template-rows: [row1-start] min-content [row1-end row2-start] auto [row2-end];
  grid-template-columns: 1;
  top: 5vh;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 50vw;
  background-color: var(--bg-ele);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${$O} 800ms ease-in-out;

  p {
    font-size: var(--body-med);
    color: var(--white);
  }

  @media (max-width: 1100px) {
    width: 60rem;
  }
  @media (max-width: 600px) {
    width: 90vw;
  }
`,gm=O.div`
  position: relative;
  display: grid;
  grid-column: 1;
  grid-row: 1 / 2;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1;
  overflow: hidden;
`,FO=O.img`
  grid-column: 1;
  grid-row: 1 / 6;
  object-fit: contain;
  min-width: 100%;
  border-radius: 1rem;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`,VO=O.div`
  grid-row: 3 / 6;
  grid-column: 1;
  background: linear-gradient(to top, #161d2f, rgba(22, 29, 47, 0));
  z-index: 50;
`,zO=O.div`
  display: grid;
  grid-column: 1;
  grid-row: 2 / 3;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(3rem, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 25% 40% 35%;
  }
`,BO=O.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  @media (max-width: 600px) {
    grid-column: 1 / 3;   
    padding: 0 0 2rem 0 ;
  }
`,jO=O.p`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  padding: 1rem;

  @media (max-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`,HO=O.p`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  padding: 1rem;

  @media (max-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`,WO=O.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  padding: 0 1.5rem;

  @media (max-width: 600px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    padding: 0 1rem 3rem 1rem;
  }
`,KO=O.div`
  position: absolute;
  left: 2rem;
  top: 75%;
  z-index: 900;
  opacity: 0;
  transition: opacity 500ms ease 100ms;

  ${gm}:hover & {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    opacity: 1;
  }
`,GO=O.button`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  top: 1rem;
  right: 2rem;
  opacity: 0;
  transition: opacity 500ms ease 100ms;

  ${gm}:hover & {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    opacity: 1;
  }

  ion-icon {
    font-size: 3rem;
    color: var(--white);
    cursor: pointer;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`,qO=O.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 100;
`,QO=t=>m(MO,{onClick:t.onClose}),YO=t=>{const{currentSlide:e}=k.exports.useContext(Fn),n=["Guywitha Beard","Her Again","Thatone Guy","Pixie Stix","Broseph Gabore","Tightpants Capone","Highkick McGee","Cher","Anomander Rake","The Eel of Darujhistan","Surly","Tiffany Aching","Quick Ben","Rincewind","Ganoes Paran","Smiles","One Eye Cat","The Seguleh"],r=["So boring","Snoozer","Horror","Adventure","Action","Mystery","Period Piece","Comedy","Ridiculous","Dont bother"];function i(a,l){const u=[];for(let h=a.length-1;h>0;h--){const d=Math.floor(Math.random()*(h+1));[a[h],a[d]]=[a[d],a[h]],u.push(a[h])}return u.slice(0,l)}const s=i(n,4).join(", "),o=i(r,2).join(", ");return V(UO,{children:[V(gm,{children:[m(qO,{children:m(mm,{bookmarked:e.isBookmarked})}),m(KO,{children:m(pm,{})}),m(GO,{onClick:t.onClose,children:m("ion-icon",{name:"close"})}),m(FO,{src:e.thumbnail.regular.medium,alt:`Movie title: ${e.title}`}),m(VO,{})]}),V(zO,{children:[m(BO,{children:m(OO,{show:e})}),V(jO,{children:[m("span",{style:{color:"grey"},children:"Cast:"}),m("span",{children:"\xA0"})," ",s]}),V(HO,{children:[m("span",{style:{color:"grey"},children:"Genres:"}),m("span",{children:"\xA0"})," ",o]}),m(WO,{children:m("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci nulla pellentesque. Augue interdum velit euismod in pellentesque massa placerat duis."})})]})]})},Ec=t=>V(k.exports.Fragment,{children:[Ng.createPortal(m(QO,{onClose:t.onClose}),document.getElementById("backdrop-root")),Ng.createPortal(m(YO,{onClose:t.onClose}),document.getElementById("overlay-root"))]}),ZE=O.div`
  position: relative;
  display: flex;
  width: 75vw;
  height: 6rem;
  background-color: none;
  margin: 3rem 0;

  ion-icon {
    font-size: 3rem;
    color: var(--white);
    align-self: center;
  }
  form {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 90vw;
  }
`,XO=O.input`
  -webkit-appearance: none;
  padding: 0 0 0 3rem;
  height: 100%;
  width: 100%;
  color: var(--white);
  background-color: transparent;
  line-height: 2rem;
  font-size: var(--Mhead) ;
  transition: border 500ms ease-in ;
  &:hover,
  :focus {
    border-bottom: 1px solid var(--grey);
  }

  &::placeholder {
    font-size: var(--Mhead);
  }

  @media (max-width: 500px) {
    font-size: var(--body-med);
    &::placeholder {
      font-size: var(--body-med);
    }

  }
`,JO=O.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  top: 2rem;
  right: 2rem;
  opacity: 0;
  transition: opacity 500ms ease 100ms;

  @media (max-width: 500px) {
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
  }

  ${ZE}:hover & {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    opacity: 1;
  }

  ion-icon {
    font-size: 3rem;
    color: var(--white);
    cursor: pointer;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
`,kc=({placeholder:t,handleSearchQuery:e,handleSearchSubmit:n,searchQuery:r,maxLength:i,clearInput:s})=>m(yr,{children:V(ZE,{children:[m("ion-icon",{name:"search"}),m("form",{onSubmit:n,children:m(XO,{type:"text",placeholder:t,onChange:e,value:r,"aria-label":"Search",maxLength:i})}),m(JO,{type:"button",onClick:s,children:m("ion-icon",{name:"close"})})]})}),ym=O.div`
  flex: 0 0 60rem;
  position: relative;
  margin: 0 2px;
  overflow: hidden;
  transition: all 0.4s ease 100ms;

  img {
    height: 100%;
    width: 100%;
    aspect-ratio: 2 / 1;
    vertical-align: top;
    border-radius: 1rem;
  }

  &:hover {
    transform: ${t=>t.isOpen?null:"scale(1.1)"};
    z-index: 10;
  }

  @media (max-width: 821px) {
    flex: 0 0 50rem;
  }

  @media (max-width: 500px) {
    flex: 0 0 25rem;
  }
`,ZO=O.div`
  position: absolute;
  width: 10rem;
  bottom: 3rem;
  left: 2rem;

  @media (max-width: 821px) {
    bottom: 0.5rem;
    left: 1rem;
  }
  @media (max-width: 500px) {
    bottom: 0.5rem;
    left: 0rem;
  }
`,eL=O.div`
  position: absolute;
  width: 11rem;
  left: 40%;
  top: 40%;
  z-index: 5;
  opacity: 0;
  transition: 0.4s ease 100ms;

  ${ym}:hover & {
    opacity: 1;
  }

  @media (max-width: 821px) {
    display: none !important;
  }
`,tL=O.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  left: 45%;
  bottom: -1rem;

  @media (max-width: 500px) {
    width: 3rem;
    height: 3rem;
    bottom: 0;
    left: 77%;
  }
`,nL=O.div`
  position: absolute;
  left: 88%;
  top: 2rem;

  @media (max-width: 821px) {
    top: 0.5rem;
  }
  @media (max-width: 500px) {
    left: 77%;
    height: 3rem;
    width: 3rem;
  }
`,vm=O.article`
  position: relative;
  overflow: hidden;
  transition: 0.4s ease 100ms;
  &:hover {
    transform: scale(1.1);
  }
  img {
    aspect-ratio: 3.3 / 2;
    object-fit: contain;
    max-width: 100%;
    border-radius: 1rem;
  }
  h2 {
    font-size: var(--body-med);
    color: var(--white);
    font-weight: 500;
  }
  p {
    font-size: var(--body-small);
    color: var(--white);
    font-weight: 300;
  }
`,rL=O.div`
  position: absolute;
  transition: 0.4s ease 100ms;
  left: 30%;
  bottom: 45%;
  opacity: 0;

  @media (max-width: 821px){
    display: none;
  }

  ${vm}:hover & {
    opacity: 1;
  }
`,iL=O.div`
  position: absolute;  
  right: 5rem;
  top: 1rem; 

  @media (max-width: 600px){
    top: .5rem;
    right: 4.5rem;
  }
 `,sL=O.div`
position: absolute;  
right: 5rem;
bottom: 3rem;

@media (max-width: 821px){
    bottom: 8rem;
}
`,oL=O.button`
  position: absolute;
  opacity: 0;
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  transition: opacity 500ms ease 100ms;
  background: transparent;
  outline: none;

  @media (max-width: 821px) {
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 821px) {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
  }

  ion-icon {
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
    @media (max-width: 811px) {
      font-size: 3rem;
    }
  }
  ${ym}:hover & {
    //ItemContainer is for trending shows item
    opacity: 1;
  }
  ${vm}:hover & {
    //ShowCard is general card for shows
    opacity: 1;
  }
`,ek=({onClick:t})=>m(oL,{onClick:t,children:m("ion-icon",{name:"chevron-down"})}),aL=O.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: ${t=>t.trending?"var(--Lhead)":"var(--body-med)"};
    color: var(--white);
    font-weight: 500;
  }
  p {
    font-size: var(--body-small);
    color: var(--white);
    font-weight: 300;
  }
  span {
    display: inline-block;
  }
`,tk=({show:t,trending:e})=>V(aL,{children:[V("p",{children:[t.year,m("span",{children:"\xA0"})," \u2022 ",m("span",{children:"\xA0"}),V("span",{children:[" ",t.category==="Movie"?m("svg",{width:"12",height:"12",xmlns:"http://www.w3.org/2000/svg",children:m("path",{d:"M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z",fill:"#FFF",opacity:".75"})}):m("svg",{width:"12",height:"12",xmlns:"http://www.w3.org/2000/svg",children:m("path",{d:"M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z",fill:"#FFF",opacity:".75"})})]}),m("span",{children:"\xA0"}),m("span",{children:"\xA0"}),t.category,m("span",{children:"\xA0"}),"\u2022",m("span",{children:"\xA0"})," ",t.rating]}),m("h2",{trending:+e,children:t.title})]}),wm=({show:t,trending:e,bookmarked:n})=>{const{onShowDetails:r}=k.exports.useContext(Fn);k.exports.useContext(Zu);const{toggleIsBookmarked:i}=k.exports.useContext(li);return V(vm,{children:[m("img",{src:t.thumbnail.regular.medium,alt:`Movie title: ${t.title}`}),m(iL,{children:m(mm,{bookmarked:n,onClick:()=>{i(t.id)}})}),m(rL,{children:m(pm,{})}),m(tk,{show:t,trending:e}),m(sL,{children:m(ek,{onClick:()=>r(t)})})]})},lL=O.div`
  display: grid;
  margin: 2rem 2rem 15rem 0;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;

  @media (max-width: 900px) {
    margin: 2rem 0 8rem 0;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`,uL=O.div`
  display: flex;
  margin: 0 0 0 0;
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
  }
`,nu=({title:t,shows:e})=>V(k.exports.Fragment,{children:[m(uL,{children:m("h1",{children:t})}),m(lL,{children:e.map(n=>m(wm,{show:n,trending:n.isTrending,bookmarked:n.isBookmarked},n.id))})]}),cL=O.div`
   display: grid;
  margin: 2rem 2rem 15rem 0;
  grid-template-columns: repeat(auto-fit, 30rem);
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;

  @media (max-width: 900px) {
    margin: 2rem 0 8rem 0;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`,hL=O.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 600px){
    flex-direction: column;
    }
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
    margin: 0 5rem 0 0 ;

    @media (max-width: 600px){
      font-size: var(--Mhead);
      margin: 0 5rem 2rem 0 ;
    }
  }
  

 
  
`,_c=({resultText:t,results:e,exitResults:n})=>V(k.exports.Fragment,{children:[V(hL,{children:[V("h1",{children:["Showing results for '",t,"'"]}),m(Do,{buttonType:Mr.exit,type:"button",onClick:n,children:"EXIT"})]}),m(cL,{children:e.map(r=>m(wm,{show:r,trending:r.isTrending,bookmarked:r.isBookmarked},r.id))})]}),dL=O.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  /* @media (max-width: 600px) {
    flex-direction: column;
    } */

  h1 {
    font-size: var(--Mhead);
    margin: 0 2rem 0 0;
    @media (max-width: 800px) {
      font-size: var(--Shead);
      margin: 0 1rem 0 0;
    }
    @media (max-width: 600px) {
      font-size: var(--body-med);
      margin: 0 1rem 0 0;
    }
  }
  span {
    color: var(--red);
    
  }
`,Cc=({query:t,exitResults:e})=>V(dL,{children:[V("h1",{children:["Sorry, there is nothing here for ",V("span",{children:["'",t,"'"]})]}),m(Do,{buttonType:Mr.exit,type:"button",onClick:e,children:"EXIT"})]}),fL=O.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20rem);
  float: right;


  @media (max-width: 900px) {
    width: 100%;
    float: null;
    padding: 0 2rem 15rem 2rem;
  }
`;var pL={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function mL(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return pL[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function lv(t){var e=mL(t);return"".concat(e.value).concat(e.unit)}var gL=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},ru=globalThis&&globalThis.__assign||function(){return ru=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ru.apply(this,arguments)},yL=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},vL=gL("SquareLoader",`25% {transform: rotateX(180deg) rotateY(0)}
  50% {transform: rotateX(180deg) rotateY(180deg)} 
  75% {transform: rotateX(0) rotateY(180deg)} 
  100% {transform: rotateX(0) rotateY(0)}`,"square");function wL(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.size,c=u===void 0?50:u,h=yL(t,["loading","color","speedMultiplier","cssOverride","size"]),d=ru({backgroundColor:i,width:lv(c),height:lv(c),display:"inline-block",animation:"".concat(vL," ").concat(3/o,"s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9)"),animationFillMode:"both"},l);return n?m("span",{...ru({style:d},h)}):null}const SL=O.div`
position: absolute;
inset: 0;
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2.5rem;
background: var(--bg-main);
transition: all .8s ease-in-out;
z-index: 999;
`,Sm=()=>V(SL,{children:[m(wL,{size:150,color:"#fc4747"}),m("h1",{children:"Loading..."})]}),EL=()=>{const[t,e]=k.exports.useState(""),[n,r]=k.exports.useState([]),[i,s]=k.exports.useState(!1),[o,a]=k.exports.useState(!1),[l,u]=k.exports.useState([]),{allShowsTotal:c}=k.exports.useContext(li),{isOpen:h,onHideDetails:d}=k.exports.useContext(Fn),g=p=>{e(p.target.value.toLocaleLowerCase())},v=()=>{a(!0);const p=[];c.filter(f=>{f.category==="Movie"&&p.push(f)}),u(p),a(!1)};k.exports.useEffect(()=>{v()},[c]);const w=p=>{p.preventDefault(),s(!0),r(t?l.filter(f=>f.title.toLocaleLowerCase().includes(t)):[])},_=()=>{e(""),r([]),s(!1)};return o?m(Sm,{}):m(k.exports.Fragment,{children:V(fL,{children:[m(kc,{placeholder:"Search for Movies",searchQuery:t,handleSearchQuery:g,handleSearchSubmit:w,maxLength:40,clearInput:_}),n.length===0&&!i?m(nu,{title:"Movies",shows:l}):i&&n.length===0?m(Cc,{query:t,exitResults:_}):m(_c,{resultText:t,results:n,exitResults:_}),h&&m(Ec,{onClose:d})]})})},kL=O.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20rem);
  float: right;
  @media (max-width: 900px) {
    width: 100%;
    float: null;
    padding: 0 2rem 15rem 2rem;
  }
`,_L=()=>{const[t,e]=k.exports.useState(""),[n,r]=k.exports.useState([]),[i,s]=k.exports.useState(!1),[o,a]=k.exports.useState([]),{allShowsTotal:l}=k.exports.useContext(li),[u,c]=k.exports.useState(!1),{isOpen:h,onHideDetails:d}=k.exports.useContext(Fn),g=p=>{e(p.target.value.toLocaleLowerCase())},v=p=>{p.preventDefault(),s(!0),r(t?o.filter(f=>f.title.toLocaleLowerCase().includes(t)):[])},w=()=>{c(!0);const p=[];l.filter(f=>{f.category==="TV Series"&&p.push(f)}),a(p),c(!1)};k.exports.useEffect(()=>{w()},[l]);const _=()=>{e(""),r([]),s(!1)};return u?m(Sm,{}):m(k.exports.Fragment,{children:V(kL,{children:[m(kc,{placeholder:"Search for a TV series",searchQuery:t,handleSearchQuery:g,handleSearchSubmit:v,maxLength:40,clearInput:_}),n.length===0&&!i?m(nu,{title:"TV Series",shows:o}):i&&n.length===0?m(Cc,{query:t,exitResults:_}):m(_c,{resultText:t,results:n,exitResults:_}),h&&m(Ec,{onClose:d})]})})},CL=()=>{const t=k.exports.useRef(),[e,n]=k.exports.useState(0);return k.exports.useEffect(()=>{setTimeout(()=>{n(t.current.clientWidth)},1e3)},[t.current]),{width:e,elementRef:t}},Em=k.exports.createContext(),IL=({children:t})=>{const[e,n]=k.exports.useState(!1),{width:r,elementRef:i}=CL(),a={onShowDetails:l=>{setCurrentSlide(l),n(!0)},onHideDetails:()=>{setCurrentSlide(null),n(!1)},elementRef:i,width:r,isOpen:e};return m(Em.Provider,{value:a,children:t})},TL=({show:t,trending:e,bookmarked:n})=>{const{elementRef:r}=k.exports.useContext(Em),{onShowDetails:i,currentSlide:s,isOpen:o}=k.exports.useContext(Fn),{toggleIsBookmarked:a}=k.exports.useContext(li),l=s&&s.id===t.id;return V(ym,{ref:r,isActive:l,isOpen:o,children:[m("img",{src:t.thumbnail.regular.medium,alt:`Show title: ${t.title}`}),m(nL,{children:m(mm,{bookmarked:n,onClick:()=>{a(t.id)}})}),m(eL,{children:m(pm,{})}),m(ZO,{children:m(tk,{show:t,trending:e})}),m(tL,{children:m(ek,{onClick:()=>i(t)})})]})},xL=O.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${t=>t.showRight?0:null};
  left: ${t=>t.showLeft?0:null};
  width: 5.5rem; 
  background: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 4rem 0;
  z-index: 4;

  span {
    width: 25px;
    color: #fff;
    display: block;
    margin: 0 auto;
  }
  ion-icon {
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    transition: all 1s linear;    
    }

    @media (max-width: 600px) {
      width: 3rem
    }
`,uv=({onClick:t,showLeft:e,showRight:n})=>m(xL,{showLeft:e,showRight:n,onClick:t,children:V("span",{children:[e?m("ion-icon",{name:"chevron-back"}):null,n?m("ion-icon",{name:"chevron-forward"}):null]})}),AL=O.div`
  padding: 40px 0;
  overflow: hidden;
  position: relative;
`,RL=({children:t})=>m(AL,{children:t}),NL=(t,e)=>{const n=k.exports.useRef(null),[r,i]=k.exports.useState(0),[s,o]=k.exports.useState(0),[a,l]=k.exports.useState(0);k.exports.useEffect(()=>{const v=n.current.clientWidth;o(Math.floor(v/t))},[n.current,t]);const u=()=>{l(a-s),i(r+t*s)},c=()=>{l(a+s),i(r-t*s)},h={style:{transform:`translate3d(${r}px, 0, 0)`}},d=r<0,g=a+s<e;return{handlePrev:u,handleNext:c,slideProps:h,containerRef:n,hasPrev:d,hasNext:g}},DL=O.div`
  display: flex;
  position: relative;

  div {
    display: flex;
    padding: 0 10px;
    transition: transform 300ms ease 100ms;
    z-index: 3;
    width: 100%;
  }
  `,PL=({children:t})=>{const{width:e}=k.exports.useContext(Em),{isOpen:n}=k.exports.useContext(Fn),{handlePrev:r,handleNext:i,slideProps:s,containerRef:o,hasNext:a,hasPrev:l}=NL(e,Er.Children.count(t));return m(k.exports.Fragment,{children:V(RL,{children:[m(DL,{isOpen:n,children:m("div",{ref:o,...s,children:t})}),l&&m(uv,{showLeft:l,onClick:r,type:"prev"}),a&&m(uv,{showRight:a,onClick:i,type:"next"})]})})},OL=O.div`
  display: grid;
  margin: 2rem 2rem 15rem 0 ;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)) !important;
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;

  @media (max-width: 900px) {
    margin: 2rem 0 0 0 ;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)) !important;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)) !important;
  }
`,LL=O.div`
  display: flex;
  margin-right: 2rem;
`,cv=O.div`
  display: flex;
  margin: 0;
  padding: 0;
  h1 {
    margin: 0;
    font-size: var(--Lhead);
    color: var(--white);
  }
`,bL=O.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20rem);
  float: right;

  @media (max-width: 900px) {
    width: 100%;
    float: null;
    padding: 0 2rem 15rem 2rem;
  }
`,$L=()=>{const[t,e]=k.exports.useState(""),[n,r]=k.exports.useState([]),[i,s]=k.exports.useState(!1),{loading:o,allShowsTotal:a}=k.exports.useContext(li),{isOpen:l,onHideDetails:u}=k.exports.useContext(Fn),c=g=>{e(g.target.value.toLocaleLowerCase())},h=g=>{g.preventDefault(),s(!0),r(t?a.filter(v=>v.title.toLocaleLowerCase().includes(t)):[])},d=()=>{e(""),r([]),s(!1)};return o?m(Sm,{}):m(k.exports.Fragment,{children:V(bL,{children:[m(kc,{placeholder:"Search for movies or TV series",searchQuery:t,handleSearchQuery:c,handleSearchSubmit:h,clearInput:d,maxLength:40}),n.length===0&&!i?V(k.exports.Fragment,{children:[o?m("h1",{children:"Loading..."}):V(yr,{children:[m(cv,{children:m("h1",{children:"Trending"})}),m(LL,{children:m(IL,{children:m(PL,{children:a.filter(g=>g.isTrending===!0?g:!1).map(g=>m(TL,{show:g,trending:g.isTrending,bookmarked:g.isBookmarked},g.id))})})})]}),m(cv,{children:m("h1",{children:"Recommended for you"})}),m(OL,{children:a.filter(g=>g.isTrending!==!0?g:!1).map(g=>m(wm,{show:g,trending:g.isTrending,bookmarked:g.isBookmarked},g.id))})]}):i&&n.length===0?m(Cc,{query:t,exitResults:d}):m(_c,{resultText:t,results:n,exitResults:d}),l&&m(Ec,{onClose:u})]})})},ML=O.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20rem);
  float: right;
  @media (max-width: 900px) {
    width: 100%;
    float: null;
    padding: 0 2rem 15rem 2rem;
  }
`;O.div`
  display: grid;
  margin: 2rem 2rem 15rem 0;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)) !important;
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 8rem;

  @media (max-width: 900px) {
    margin: 0 0 0 0;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)) !important;
  }
  @media (max-width: 600px) {
    margin: 0 0 0 0;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)) !important;
  }
`;O.div`
  display: flex;
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
  }
`;const UL=()=>{const[t,e]=k.exports.useState(""),[n,r]=k.exports.useState([]),[i,s]=k.exports.useState([]),[o,a]=k.exports.useState([]),[l,u]=k.exports.useState([]),[c,h]=k.exports.useState(!1),{allShowsTotal:d}=k.exports.useContext(li),{isOpen:g,onHideDetails:v}=k.exports.useContext(Fn),w=()=>{const y=[],E=[],C=[];d.filter(A=>{A.isBookmarked===!0&&A.category==="Movie"&&y.push(A)&&C.push(A),A.isBookmarked===!0&&A.category==="TV Series"&&E.push(A)&&C.push(A)}),s(C),a(y),u(E)};k.exports.useEffect(()=>{w()},[d]);const _=y=>{e(y.target.value.toLocaleLowerCase())},p=y=>{y.preventDefault(),h(!0),r(t?i.filter(E=>E.title.toLocaleLowerCase().includes(t)):[])},f=()=>{e(""),r([]),h(!1)};return m(k.exports.Fragment,{children:V(ML,{children:[m(kc,{placeholder:"Search bookmarked shows",searchQuery:t,handleSearchQuery:_,handleSearchSubmit:p,maxLength:40,clearInput:f}),n.length===0&&!c?m(yr,{children:i.length===0?V("h2",{children:[" ","You have no bookmarks. Click on the bookmark icon and see your favorites here!"]}):V(yr,{children:[o.length>0?m(nu,{title:"Bookmarked Movies",shows:o}):null,l.length>0?m(nu,{title:"Bookmarked Series",shows:l}):null]})}):c&&n.length===0?m(Cc,{query:t,exitResults:f}):m(_c,{resultText:t,results:n,exitResults:f}),g&&m(Ec,{onClose:v})]})})},FL="/flix-app/assets/icon-nav-home.c4618149.svg",nk="/flix-app/assets/logo.8c6ec767.svg",VL="/flix-app/assets/icon-nav-movies.24647170.svg",zL="/flix-app/assets/icon-nav-bookmark.7e16e935.svg",BL="/flix-app/assets/icon-nav-tv-series.dda276d9.svg",jL="/flix-app/assets/image-avatar.4ed255bd.png",HL=O(NI)`
  display: flex;
  flex-direction: row;
  font-size: 1.6rem;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  :hover {
    -webkit-filter: hue-rotate(115deg) saturate(0.9) brightness(100%) saturate(4)
      grayscale(0);
    filter: hue-rotate(115deg) saturate(0.9) brightness(100%) saturate(4)
      grayscale(0);
  }

  &.active  
    {
      -webkit-filter: hue-rotate(10deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
    filter: hue-rotate(10deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
  } 

  &:active {
    -webkit-filter: hue-rotate(100deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
    filter: hue-rotate(100deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
  }
`,$a=t=>m(yr,{children:m(HL,{end:!0,to:t.link,onClick:t.clicked,style:t.style,children:t.children})}),WL=O.div`
  display: ${t=>t.user?"flex":"none"};
  position: fixed;
  top: 2%;
  left: 1.5%;
  flex-direction: column;
  width: 10rem;
  height: 96vh;
  background-color: var(--bg-ele);
  border-radius: 1.5rem;
  align-items: center;

  span {
    color: var(--white);
    font-size: var(--body-med);
  }

  @media (max-width: 900px) {
    position: relative;
    flex-direction: row;
    width: 96vw;
    height: 8rem;
    margin-top: 2rem;
    justify-content: space-between;
    span {
      font-size: var(--body-small);
    }
  }
  @media (max-width: 600px) {
    top: 1rem;
    height: 6rem;
    margin-top: 0.5rem;
    span {
      font-size: var(--body-small);
    }
  }
`,Ma=O.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  @media (max-width: 600px) {
    height: 1.75rem;
    width: 1.75rem;
  }
`,KL=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 20%;
  @media (max-width: 900px) {
    flex-direction: row;
    width: 10rem;
    height: 100%;
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 600px) {
    flex-direction: row;
    width: 5rem;
  }
`,GL=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 25%;
  @media (max-width: 900px) {
    flex-direction: row;
    width: 35%;
    min-width: 15rem;
    height: 100%;
  }
  @media (max-width: 600px) {
    min-width: 10rem;
    height: 100%;
  }
`,qL=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 55%;
  width: 100%;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    flex-direction: row;
    width: 15rem;
    height: 5rem;
    flex-direction: row;
    margin: 0 1rem 0 0;
  }
  @media (max-width: 600px) {
    width: 10rem;
    
  }
`,QL=O.img`
  height: 5rem;
  width: 5rem;
  @media (max-width: 600px) {
    height: 3.5rem;
    width: 3.5rem;
  }
`,YL=O.img`
  width: 3rem;
  height: 2.5rem;
  margin-top: 2rem;
  @media (max-width: 900px) {
    margin-top: 0;
  }
  @media (max-width: 600px) {
    width: 2.5rem;
    height: 2rem;
  }
`,XL=O(P1)`
  padding: 1rem;
  cursor: pointer;
`,JL=t=>V(WL,{user:t.hasUser,children:[m(KL,{children:m(YL,{src:nk})}),V(GL,{children:[m($a,{link:"home",clicked:t.clicked,children:m(Ma,{src:FL})}),m($a,{link:"movies",children:m(Ma,{src:VL})}),m($a,{link:"tvseries",children:m(Ma,{src:BL})}),m($a,{link:"bookmarks",children:m(Ma,{src:zL})})]}),V(qL,{children:[m(QL,{src:jL,alt:"Avatar image"}),m(XL,{as:"span",onClick:I2,children:"SIGN-OUT"})]})]}),ZL=({user:t,redirectPath:e="authenticate",children:n})=>t?n||m(kI,{}):m(N1,{to:e,replace:!0}),rk=Sc`
  top: -14px;
  font-size: 12px;
  color: var(--red);
`,ik=O.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({shrink:t})=>t&&rk};
`,eb=O.input`
  background: none;
  background-color: transparent;
  color: var(--white);
  font-size: 18px;
  padding: 10px 0 10px 0;
  display: block;
  width: 100%;
  border: none;
  
  border-bottom: 1px solid var(--white);
  margin: 1rem 0;
  &:focus {
    outline: none;
  }
  &:focus ~ ${ik} {
    ${rk};
  }
`,tb=O.div`
  position: relative;
  margin: 1.75rem 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`,Ti=({label:t,...e})=>V(tb,{children:[m(eb,{...e}),t&&m(ik,{shrink:e.value.length,children:t})]}),nb=O.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  border-radius: 1rem;
  padding: 0 2rem 4rem 2rem;
  background-color: var(--bg-ele) ;
  align-self: center;
  h2 {
    margin: 0 0 0 0;
  }
  span, a {
    color: var(--white);
    font-size:var(--body-med) ;
    text-align: center;
  }

  @media (max-width: 500px) {
    width: 37rem;
  }
`,rb=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem 0 2rem 0;
`,hv={displayName:"",email:"",password:"",confirmPassword:""},ib=t=>{const[e,n]=k.exports.useState(hv),{displayName:r,email:i,password:s,confirmPassword:o}=e,a=()=>{n(hv)},l=async c=>{if(c.preventDefault(),s!==o){alert("passwords do not match");return}try{const{user:h}=await _2(i,s);await $E(h,{displayName:r}),a()}catch(h){h.code==="auth/email-already-in-use"?alert("Cannot create user, email already in use"):console.log("user creation encountered an error",h)}},u=c=>{const{name:h,value:d}=c.target;n({...e,[h]:d})};return V(yr,{children:[V(nb,{children:[m("h1",{children:"Sign Up"}),V("form",{onSubmit:l,children:[m(Ti,{label:"Display Name",type:"text",required:!0,onChange:u,name:"displayName",value:r}),m(Ti,{label:"Email",type:"email",required:!0,onChange:u,name:"email",value:i}),m(Ti,{label:"Password",type:"password",required:!0,onChange:u,name:"password",value:s}),m(Ti,{label:"Confirm Password",type:"password",required:!0,onChange:u,name:"confirmPassword",value:o}),m(rb,{children:m(Do,{disabled:!0,type:"submit",children:"Sign Up"})})]}),V("span",{children:[m("span",{children:"Already have an account? "}),m("span",{children:"\xA0"}),m("span",{children:"\xA0"}),V("a",{style:{color:"var(--red)",cursor:"pointer"},onClick:t.onClick,children:[" ","Sign-In"]})]})]}),m("h4",{children:" Sign-up is diabled - use the email on the sign-in page to login"})]})},sb=O.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  border-radius: 1rem;
  padding: 0 2rem 4rem 2rem;
  background-color: var(--bg-ele);
  align-self: center;
  h2 {
    margin: 0 0 0 0;
  }
  span,
  a {
    color: var(--white);
    font-size: var(--body-med);
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 37rem;
  }
`,ob=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  margin: 4rem 0 2rem 0;
`,dv={email:"",password:""},ab=t=>{const[e,n]=k.exports.useState(dv),{email:r,password:i}=e,s=()=>{n(dv)},o=async()=>{await E2()},a=async u=>{u.preventDefault();try{await C2(r,i),s()}catch(c){switch(c.code){case"auth/wrong-password":alert("Incorrect password!!");break;case"auth/user-not-found":alert("No user associated with this email.");break;default:console.log(c)}}},l=u=>{const{name:c,value:h}=u.target;n({...e,[c]:h})};return V(yr,{children:[V(sb,{children:[m("h1",{children:"Sign In"}),V("form",{onSubmit:a,children:[m(Ti,{label:"Email",type:"email",required:!0,onChange:l,name:"email",value:r}),m(Ti,{label:"Password",type:"password",required:!0,onChange:l,name:"password",value:i}),V(ob,{children:[m(Do,{type:"submit",children:"Sign In"}),m(Do,{buttonType:Mr.google,type:"button",onClick:o,disabled:!0,children:"Sign In With Google"})]})]}),V("span",{children:[m("span",{children:"Don't have an account? "}),m("span",{children:"\xA0"}),m("span",{children:"\xA0"}),m("a",{style:{color:"var(--red)",cursor:"pointer"},onClick:t.onClick,children:"Sign Up"})]})]}),m("h4",{children:"Sign-in with google is disabled -"}),m("h4",{children:"To sign-in use:"}),m("h4",{children:" email: test@test.com "}),m("h4",{children:" password: 12341234 "})]})},lb=O.div`
  display: flex;
  flex-direction: column;
  margin: 10rem auto;
  max-width: 40rem;
`,ub=O.img`
  width: 4.5rem;
  height: 3.5rem;
  margin: 0 auto 10rem auto;
 
  @media (max-width: 500px) {
    width: 3rem;
    height: 2rem;
  }
`,cb=()=>{const[t,e]=k.exports.useState(!0),{currentUser:n}=k.exports.useContext(Zu),r=()=>{e(!t),console.log(t)};return n?m(N1,{exact:!0,to:"/home",replace:!0}):V(lb,{children:[m(ub,{src:nk,alt:"flix logo"}),t?m(ab,{onClick:r}):m(ib,{onClick:r})]})},hb=xO`
    :root {
        --bg-main: #10141e;
        --bg-ele: #161d2f;
        --grey: #5a69af;
        --red: #fc4747;
        --white: #ffffff;
        --Lhead: 3.2rem;
        --Mhead: 2.4rem;
        --Shead: 2.5rem;
        --XSHead: 1.8rem;
        --body-med: 1.5rem;
        --body-small: 1.3rem;
    }
`;function db(){const{currentUser:t}=k.exports.useContext(Zu);return V(k.exports.Fragment,{children:[m(hb,{}),V("main",{children:[m(JL,{hasUser:t}),V(CI,{children:[m(jn,{path:"authenticate",element:m(cb,{})}),V(jn,{element:m(ZL,{user:t}),children:[m(jn,{path:"home",element:m($L,{})}),m(jn,{path:"movies",element:m(EL,{})}),m(jn,{path:"tvseries",element:m(_L,{})}),m(jn,{path:"bookmarks",element:m(UL,{})}),m(jn,{path:"*",element:m("h1",{children:"There is nothing here: 404"})})]})]})]})]})}Sh.createRoot(document.getElementById("root")).render(m(Er.StrictMode,{children:m(RI,{children:m(x2,{children:m(N2,{children:m(D2,{children:m(db,{})})})})})}));
