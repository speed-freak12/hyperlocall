(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var e_={exports:{}},nu={},t_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),Hx=Symbol.for("react.portal"),qx=Symbol.for("react.fragment"),Wx=Symbol.for("react.strict_mode"),Kx=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),Qx=Symbol.for("react.context"),Yx=Symbol.for("react.forward_ref"),Xx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),wm=Symbol.iterator;function eT(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var n_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r_=Object.assign,s_={};function oi(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||n_}oi.prototype.isReactComponent={};oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i_(){}i_.prototype=oi.prototype;function _d(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||n_}var vd=_d.prototype=new i_;vd.constructor=_d;r_(vd,oi.prototype);vd.isPureReactComponent=!0;var Em=Array.isArray,o_=Object.prototype.hasOwnProperty,wd={current:null},a_={key:!0,ref:!0,__self:!0,__source:!0};function l_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)o_.call(e,r)&&!a_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Uo,type:t,key:i,ref:o,props:s,_owner:wd.current}}function tT(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function nT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xm=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nT(""+t.key):e.toString(36)}function Ga(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case Hx:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+mc(o,0):r,Em(s)?(n="",t!=null&&(n=t.replace(xm,"$&/")+"/"),Ga(s,e,n,"",function(h){return h})):s!=null&&(Ed(s)&&(s=tT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(xm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Em(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+mc(i,l);o+=Ga(i,e,n,u,s)}else if(u=eT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+mc(i,l++),o+=Ga(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var r=[],s=0;return Ga(t,r,"","",function(i){return e.call(n,i,s++)}),r}function rT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},Qa={transition:null},sT={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:wd};function u_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!Ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=oi;ee.Fragment=qx;ee.Profiler=Kx;ee.PureComponent=_d;ee.StrictMode=Wx;ee.Suspense=Xx;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sT;ee.act=u_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=r_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=wd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)o_.call(e,u)&&!a_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Uo,type:t.type,key:s,ref:i,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:Qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gx,_context:t},t.Consumer=t};ee.createElement=l_;ee.createFactory=function(t){var e=l_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:Yx,render:t}};ee.isValidElement=Ed;ee.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:rT}};ee.memo=function(t,e){return{$$typeof:Jx,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Qa.transition;Qa.transition={};try{t()}finally{Qa.transition=e}};ee.unstable_act=u_;ee.useCallback=function(t,e){return dt.current.useCallback(t,e)};ee.useContext=function(t){return dt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return dt.current.useEffect(t,e)};ee.useId=function(){return dt.current.useId()};ee.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return dt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};ee.useRef=function(t){return dt.current.useRef(t)};ee.useState=function(t){return dt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return dt.current.useTransition()};ee.version="18.3.1";t_.exports=ee;var U=t_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iT=U,oT=Symbol.for("react.element"),aT=Symbol.for("react.fragment"),lT=Object.prototype.hasOwnProperty,uT=iT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cT={key:!0,ref:!0,__self:!0,__source:!0};function c_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lT.call(e,r)&&!cT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:oT,type:t,key:i,ref:o,props:s,_owner:uT.current}}nu.Fragment=aT;nu.jsx=c_;nu.jsxs=c_;e_.exports=nu;var d=e_.exports,h_={exports:{}},Ct={},d_={exports:{}},f_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var ve=J-1>>>1,ue=z[ve];if(0<s(ue,Q))z[ve]=Q,z[J]=ue,J=ve;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var ve=0,ue=z.length,Re=ue>>>1;ve<Re;){var pn=2*(ve+1)-1,mn=z[pn],gn=pn+1,yn=z[gn];if(0>s(mn,J))gn<ue&&0>s(yn,mn)?(z[ve]=yn,z[gn]=J,ve=gn):(z[ve]=mn,z[pn]=J,ve=pn);else if(gn<ue&&0>s(yn,J))z[ve]=yn,z[gn]=J,ve=gn;else break e}}return Q}function s(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,g=3,T=!1,A=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=z)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function D(z){if(P=!1,S(z),!A)if(n(u)!==null)A=!0,pi(M);else{var Q=n(h);Q!==null&&fn(D,Q.startTime-z)}}function M(z,Q){A=!1,P&&(P=!1,x(y),y=-1),T=!0;var J=g;try{for(S(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||z&&!R());){var ve=m.callback;if(typeof ve=="function"){m.callback=null,g=m.priorityLevel;var ue=ve(m.expirationTime<=Q);Q=t.unstable_now(),typeof ue=="function"?m.callback=ue:m===n(u)&&r(u),S(Q)}else r(u);m=n(u)}if(m!==null)var Re=!0;else{var pn=n(h);pn!==null&&fn(D,pn.startTime-Q),Re=!1}return Re}finally{m=null,g=J,T=!1}}var V=!1,w=null,y=-1,E=5,I=-1;function R(){return!(t.unstable_now()-I<E)}function N(){if(w!==null){var z=t.unstable_now();I=z;var Q=!0;try{Q=w(!0,z)}finally{Q?k():(V=!1,w=null)}}else V=!1}var k;if(typeof v=="function")k=function(){v(N)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,Dr=Pt.port2;Pt.port1.onmessage=N,k=function(){Dr.postMessage(null)}}else k=function(){C(N,0)};function pi(z){w=z,V||(V=!0,k())}function fn(z,Q){y=C(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||T||(A=!0,pi(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return Q()}finally{g=J}},t.unstable_scheduleCallback=function(z,Q,J){var ve=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ve+J:ve):J=ve,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=J+ue,z={id:p++,callback:Q,priorityLevel:z,startTime:J,expirationTime:ue,sortIndex:-1},J>ve?(z.sortIndex=J,e(h,z),n(u)===null&&z===n(h)&&(P?(x(y),y=-1):P=!0,fn(D,J-ve))):(z.sortIndex=ue,e(u,z),A||T||(A=!0,pi(M))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var Q=g;return function(){var J=g;g=Q;try{return z.apply(this,arguments)}finally{g=J}}}})(f_);d_.exports=f_;var hT=d_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dT=U,Rt=hT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p_=new Set,uo={};function as(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(uo[t]=e,t=0;t<e.length;t++)p_.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),th=Object.prototype.hasOwnProperty,fT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tm={},Im={};function pT(t){return th.call(Im,t)?!0:th.call(Tm,t)?!1:fT.test(t)?Im[t]=!0:(Tm[t]=!0,!1)}function mT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gT(t,e,n,r){if(e===null||typeof e>"u"||mT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function Td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xd,Td);Ke[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xd,Td);Ke[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xd,Td);Ke[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Id(t,e,n,r){var s=Ke.hasOwnProperty(e)?Ke[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gT(e,n,s,r)&&(n=null),r||s===null?pT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=dT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),nh=Symbol.for("react.profiler"),m_=Symbol.for("react.provider"),g_=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),sh=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),y_=Symbol.for("react.offscreen"),Sm=Symbol.iterator;function Ri(t){return t===null||typeof t!="object"?null:(t=Sm&&t[Sm]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,gc;function Mi(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var yc=!1;function _c(t,e){if(!t||yc)return"";yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mi(t):""}function yT(t){switch(t.tag){case 5:return Mi(t.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 2:case 15:return t=_c(t.type,!1),t;case 11:return t=_c(t.type.render,!1),t;case 1:return t=_c(t.type,!0),t;default:return""}}function ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case xs:return"Portal";case nh:return"Profiler";case Sd:return"StrictMode";case rh:return"Suspense";case sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case g_:return(t.displayName||"Context")+".Consumer";case m_:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ad:return e=t.displayName||null,e!==null?e:ih(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return ih(t(e))}catch{}}return null}function _T(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function __(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vT(t){var e=__(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sa(t){t._valueTracker||(t._valueTracker=vT(t))}function v_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=__(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oh(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function km(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function w_(t,e){e=e.checked,e!=null&&Id(t,"checked",e,!1)}function ah(t,e){w_(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lh(t,e.type,n):e.hasOwnProperty("defaultValue")&&lh(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Am(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lh(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ui=Array.isArray;function Os(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function uh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ui(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function E_(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function x_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?x_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ka,T_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wT=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(t){wT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gi[e]=Gi[t]})});function I_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gi.hasOwnProperty(t)&&Gi[t]?(""+e).trim():e+"px"}function S_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=I_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var ET=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hh(t,e){if(e){if(ET[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fh=null;function Rd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ph=null,Vs=null,js=null;function Nm(t){if(t=zo(t)){if(typeof ph!="function")throw Error(F(280));var e=t.stateNode;e&&(e=au(e),ph(t.stateNode,t.type,e))}}function k_(t){Vs?js?js.push(t):js=[t]:Vs=t}function A_(){if(Vs){var t=Vs,e=js;if(js=Vs=null,Nm(t),e)for(t=0;t<e.length;t++)Nm(e[t])}}function R_(t,e){return t(e)}function C_(){}var vc=!1;function N_(t,e,n){if(vc)return t(e,n);vc=!0;try{return R_(t,e,n)}finally{vc=!1,(Vs!==null||js!==null)&&(C_(),A_())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=au(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var mh=!1;if(Pn)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){mh=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{mh=!1}function xT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Qi=!1,gl=null,yl=!1,gh=null,TT={onError:function(t){Qi=!0,gl=t}};function IT(t,e,n,r,s,i,o,l,u){Qi=!1,gl=null,xT.apply(TT,arguments)}function ST(t,e,n,r,s,i,o,l,u){if(IT.apply(this,arguments),Qi){if(Qi){var h=gl;Qi=!1,gl=null}else throw Error(F(198));yl||(yl=!0,gh=h)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pm(t){if(ls(t)!==t)throw Error(F(188))}function kT(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Pm(s),t;if(i===r)return Pm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function b_(t){return t=kT(t),t!==null?D_(t):null}function D_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=D_(t);if(e!==null)return e;t=t.sibling}return null}var L_=Rt.unstable_scheduleCallback,bm=Rt.unstable_cancelCallback,AT=Rt.unstable_shouldYield,RT=Rt.unstable_requestPaint,Ne=Rt.unstable_now,CT=Rt.unstable_getCurrentPriorityLevel,Cd=Rt.unstable_ImmediatePriority,O_=Rt.unstable_UserBlockingPriority,_l=Rt.unstable_NormalPriority,NT=Rt.unstable_LowPriority,V_=Rt.unstable_IdlePriority,ru=null,rn=null;function PT(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:LT,bT=Math.log,DT=Math.LN2;function LT(t){return t>>>=0,t===0?32:31-(bT(t)/DT|0)|0}var Aa=64,Ra=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Fi(l):(i&=o,i!==0&&(r=Fi(i)))}else o=n&~s,o!==0?r=Fi(o):i!==0&&(r=Fi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),s=1<<n,r|=t[n],e&=~s;return r}function OT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-qt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=OT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j_(){var t=Aa;return Aa<<=1,!(Aa&4194240)&&(Aa=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function jT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-qt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function M_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U_,Pd,F_,B_,z_,_h=!1,Ca=[],or=null,ar=null,lr=null,fo=new Map,po=new Map,Yn=[],MT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dm(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Ni(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=zo(e),e!==null&&Pd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function UT(t,e,n,r,s){switch(e){case"focusin":return or=Ni(or,t,e,n,r,s),!0;case"dragenter":return ar=Ni(ar,t,e,n,r,s),!0;case"mouseover":return lr=Ni(lr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return fo.set(i,Ni(fo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,po.set(i,Ni(po.get(i)||null,t,e,n,r,s)),!0}return!1}function $_(t){var e=Br(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=P_(n),e!==null){t.blockedOn=e,z_(t.priority,function(){F_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fh=r,n.target.dispatchEvent(r),fh=null}else return e=zo(n),e!==null&&Pd(e),t.blockedOn=n,!1;e.shift()}return!0}function Lm(t,e,n){Ya(t)&&n.delete(e)}function FT(){_h=!1,or!==null&&Ya(or)&&(or=null),ar!==null&&Ya(ar)&&(ar=null),lr!==null&&Ya(lr)&&(lr=null),fo.forEach(Lm),po.forEach(Lm)}function Pi(t,e){t.blockedOn===e&&(t.blockedOn=null,_h||(_h=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,FT)))}function mo(t){function e(s){return Pi(s,t)}if(0<Ca.length){Pi(Ca[0],t);for(var n=1;n<Ca.length;n++){var r=Ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Pi(or,t),ar!==null&&Pi(ar,t),lr!==null&&Pi(lr,t),fo.forEach(e),po.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)$_(n),n.blockedOn===null&&Yn.shift()}var Ms=Fn.ReactCurrentBatchConfig,wl=!0;function BT(t,e,n,r){var s=ae,i=Ms.transition;Ms.transition=null;try{ae=1,bd(t,e,n,r)}finally{ae=s,Ms.transition=i}}function zT(t,e,n,r){var s=ae,i=Ms.transition;Ms.transition=null;try{ae=4,bd(t,e,n,r)}finally{ae=s,Ms.transition=i}}function bd(t,e,n,r){if(wl){var s=vh(t,e,n,r);if(s===null)Nc(t,e,r,El,n),Dm(t,r);else if(UT(s,t,e,n,r))r.stopPropagation();else if(Dm(t,r),e&4&&-1<MT.indexOf(t)){for(;s!==null;){var i=zo(s);if(i!==null&&U_(i),i=vh(t,e,n,r),i===null&&Nc(t,e,r,El,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Nc(t,e,r,null,n)}}var El=null;function vh(t,e,n,r){if(El=null,t=Rd(r),t=Br(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function H_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CT()){case Cd:return 1;case O_:return 4;case _l:case NT:return 16;case V_:return 536870912;default:return 16}default:return 16}}var rr=null,Dd=null,Xa=null;function q_(){if(Xa)return Xa;var t,e=Dd,n=e.length,r,s="value"in rr?rr.value:rr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Xa=s.slice(t,1<r?1-r:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Om(){return!1}function Nt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Na:Om,this.isPropagationStopped=Om,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ld=Nt(ai),Bo=xe({},ai,{view:0,detail:0}),$T=Nt(Bo),Ec,xc,bi,su=xe({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bi&&(bi&&t.type==="mousemove"?(Ec=t.screenX-bi.screenX,xc=t.screenY-bi.screenY):xc=Ec=0,bi=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),Vm=Nt(su),HT=xe({},su,{dataTransfer:0}),qT=Nt(HT),WT=xe({},Bo,{relatedTarget:0}),Tc=Nt(WT),KT=xe({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),GT=Nt(KT),QT=xe({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YT=Nt(QT),XT=xe({},ai,{data:0}),jm=Nt(XT),JT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eI[t])?!!e[t]:!1}function Od(){return tI}var nI=xe({},Bo,{key:function(t){if(t.key){var e=JT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Od,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rI=Nt(nI),sI=xe({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mm=Nt(sI),iI=xe({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Od}),oI=Nt(iI),aI=xe({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),lI=Nt(aI),uI=xe({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cI=Nt(uI),hI=[9,13,27,32],Vd=Pn&&"CompositionEvent"in window,Yi=null;Pn&&"documentMode"in document&&(Yi=document.documentMode);var dI=Pn&&"TextEvent"in window&&!Yi,W_=Pn&&(!Vd||Yi&&8<Yi&&11>=Yi),Um=" ",Fm=!1;function K_(t,e){switch(t){case"keyup":return hI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function fI(t,e){switch(t){case"compositionend":return G_(e);case"keypress":return e.which!==32?null:(Fm=!0,Um);case"textInput":return t=e.data,t===Um&&Fm?null:t;default:return null}}function pI(t,e){if(Is)return t==="compositionend"||!Vd&&K_(t,e)?(t=q_(),Xa=Dd=rr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W_&&e.locale!=="ko"?null:e.data;default:return null}}var mI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mI[t.type]:e==="textarea"}function Q_(t,e,n,r){k_(r),e=xl(e,"onChange"),0<e.length&&(n=new Ld("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xi=null,go=null;function gI(t){ov(t,0)}function iu(t){var e=As(t);if(v_(e))return t}function yI(t,e){if(t==="change")return e}var Y_=!1;if(Pn){var Ic;if(Pn){var Sc="oninput"in document;if(!Sc){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),Sc=typeof zm.oninput=="function"}Ic=Sc}else Ic=!1;Y_=Ic&&(!document.documentMode||9<document.documentMode)}function $m(){Xi&&(Xi.detachEvent("onpropertychange",X_),go=Xi=null)}function X_(t){if(t.propertyName==="value"&&iu(go)){var e=[];Q_(e,go,t,Rd(t)),N_(gI,e)}}function _I(t,e,n){t==="focusin"?($m(),Xi=e,go=n,Xi.attachEvent("onpropertychange",X_)):t==="focusout"&&$m()}function vI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(go)}function wI(t,e){if(t==="click")return iu(e)}function EI(t,e){if(t==="input"||t==="change")return iu(e)}function xI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:xI;function yo(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!th.call(e,s)||!Qt(t[s],e[s]))return!1}return!0}function Hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qm(t,e){var n=Hm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hm(n)}}function J_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z_(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function TI(t){var e=Z_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J_(n.ownerDocument.documentElement,n)){if(r!==null&&jd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=qm(n,i);var o=qm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var II=Pn&&"documentMode"in document&&11>=document.documentMode,Ss=null,wh=null,Ji=null,Eh=!1;function Wm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eh||Ss==null||Ss!==ml(r)||(r=Ss,"selectionStart"in r&&jd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ji&&yo(Ji,r)||(Ji=r,r=xl(wh,"onSelect"),0<r.length&&(e=new Ld("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ss)))}function Pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},kc={},ev={};Pn&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function ou(t){if(kc[t])return kc[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ev)return kc[t]=e[n];return t}var tv=ou("animationend"),nv=ou("animationiteration"),rv=ou("animationstart"),sv=ou("transitionend"),iv=new Map,Km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){iv.set(t,e),as(e,[t])}for(var Ac=0;Ac<Km.length;Ac++){var Rc=Km[Ac],SI=Rc.toLowerCase(),kI=Rc[0].toUpperCase()+Rc.slice(1);Ar(SI,"on"+kI)}Ar(tv,"onAnimationEnd");Ar(nv,"onAnimationIteration");Ar(rv,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(sv,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function Gm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ST(r,e,void 0,t),t.currentTarget=null}function ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Gm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Gm(s,l,h),i=u}}}if(yl)throw t=gh,yl=!1,gh=null,t}function fe(t,e){var n=e[kh];n===void 0&&(n=e[kh]=new Set);var r=t+"__bubble";n.has(r)||(av(e,t,2,!1),n.add(r))}function Cc(t,e,n){var r=0;e&&(r|=4),av(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[ba]){t[ba]=!0,p_.forEach(function(n){n!=="selectionchange"&&(AI.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Cc("selectionchange",!1,e))}}function av(t,e,n,r){switch(H_(e)){case 1:var s=BT;break;case 4:s=zT;break;default:s=bd}n=s.bind(null,e,n,t),s=void 0,!mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Nc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Br(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}N_(function(){var h=i,p=Rd(n),m=[];e:{var g=iv.get(t);if(g!==void 0){var T=Ld,A=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":T=rI;break;case"focusin":A="focus",T=Tc;break;case"focusout":A="blur",T=Tc;break;case"beforeblur":case"afterblur":T=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=qT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=oI;break;case tv:case nv:case rv:T=GT;break;case sv:T=lI;break;case"scroll":T=$T;break;case"wheel":T=cI;break;case"copy":case"cut":case"paste":T=YT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Mm}var P=(e&4)!==0,C=!P&&t==="scroll",x=P?g!==null?g+"Capture":null:g;P=[];for(var v=h,S;v!==null;){S=v;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,x!==null&&(D=ho(v,x),D!=null&&P.push(vo(v,D,S)))),C)break;v=v.return}0<P.length&&(g=new T(g,A,null,n,p),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==fh&&(A=n.relatedTarget||n.fromElement)&&(Br(A)||A[bn]))break e;if((T||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,T?(A=n.relatedTarget||n.toElement,T=h,A=A?Br(A):null,A!==null&&(C=ls(A),A!==C||A.tag!==5&&A.tag!==6)&&(A=null)):(T=null,A=h),T!==A)){if(P=Vm,D="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Mm,D="onPointerLeave",x="onPointerEnter",v="pointer"),C=T==null?g:As(T),S=A==null?g:As(A),g=new P(D,v+"leave",T,n,p),g.target=C,g.relatedTarget=S,D=null,Br(p)===h&&(P=new P(x,v+"enter",A,n,p),P.target=S,P.relatedTarget=C,D=P),C=D,T&&A)t:{for(P=T,x=A,v=0,S=P;S;S=ys(S))v++;for(S=0,D=x;D;D=ys(D))S++;for(;0<v-S;)P=ys(P),v--;for(;0<S-v;)x=ys(x),S--;for(;v--;){if(P===x||x!==null&&P===x.alternate)break t;P=ys(P),x=ys(x)}P=null}else P=null;T!==null&&Qm(m,g,T,P,!1),A!==null&&C!==null&&Qm(m,C,A,P,!0)}}e:{if(g=h?As(h):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var M=yI;else if(Bm(g))if(Y_)M=EI;else{M=vI;var V=_I}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=wI);if(M&&(M=M(t,h))){Q_(m,M,n,p);break e}V&&V(t,g,h),t==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&lh(g,"number",g.value)}switch(V=h?As(h):window,t){case"focusin":(Bm(V)||V.contentEditable==="true")&&(Ss=V,wh=h,Ji=null);break;case"focusout":Ji=wh=Ss=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,Wm(m,n,p);break;case"selectionchange":if(II)break;case"keydown":case"keyup":Wm(m,n,p)}var w;if(Vd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Is?K_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(W_&&n.locale!=="ko"&&(Is||y!=="onCompositionStart"?y==="onCompositionEnd"&&Is&&(w=q_()):(rr=p,Dd="value"in rr?rr.value:rr.textContent,Is=!0)),V=xl(h,y),0<V.length&&(y=new jm(y,t,null,n,p),m.push({event:y,listeners:V}),w?y.data=w:(w=G_(n),w!==null&&(y.data=w)))),(w=dI?fI(t,n):pI(t,n))&&(h=xl(h,"onBeforeInput"),0<h.length&&(p=new jm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=w))}ov(m,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ho(t,n),i!=null&&r.unshift(vo(t,i,s)),i=ho(t,e),i!=null&&r.push(vo(t,i,s))),t=t.return}return r}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=ho(n,i),u!=null&&o.unshift(vo(n,u,l))):s||(u=ho(n,i),u!=null&&o.push(vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var RI=/\r\n?/g,CI=/\u0000|\uFFFD/g;function Ym(t){return(typeof t=="string"?t:""+t).replace(RI,`
`).replace(CI,"")}function Da(t,e,n){if(e=Ym(e),Ym(t)!==e&&n)throw Error(F(425))}function Tl(){}var xh=null,Th=null;function Ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,NI=typeof clearTimeout=="function"?clearTimeout:void 0,Xm=typeof Promise=="function"?Promise:void 0,PI=typeof queueMicrotask=="function"?queueMicrotask:typeof Xm<"u"?function(t){return Xm.resolve(null).then(t).catch(bI)}:Sh;function bI(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);mo(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var li=Math.random().toString(36).slice(2),en="__reactFiber$"+li,wo="__reactProps$"+li,bn="__reactContainer$"+li,kh="__reactEvents$"+li,DI="__reactListeners$"+li,LI="__reactHandles$"+li;function Br(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jm(t);t!==null;){if(n=t[en])return n;t=Jm(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[en]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function au(t){return t[wo]||null}var Ah=[],Rs=-1;function Rr(t){return{current:t}}function me(t){0>Rs||(t.current=Ah[Rs],Ah[Rs]=null,Rs--)}function he(t,e){Rs++,Ah[Rs]=t.current,t.current=e}var vr={},it=Rr(vr),_t=Rr(!1),Qr=vr;function Ws(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function vt(t){return t=t.childContextTypes,t!=null}function Il(){me(_t),me(it)}function Zm(t,e,n){if(it.current!==vr)throw Error(F(168));he(it,e),he(_t,n)}function lv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,_T(t)||"Unknown",s));return xe({},n,r)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Qr=it.current,he(it,t),he(_t,_t.current),!0}function eg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=lv(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,me(_t),me(it),he(it,t)):me(_t),he(_t,n)}var En=null,lu=!1,bc=!1;function uv(t){En===null?En=[t]:En.push(t)}function OI(t){lu=!0,uv(t)}function Cr(){if(!bc&&En!==null){bc=!0;var t=0,e=ae;try{var n=En;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,lu=!1}catch(s){throw En!==null&&(En=En.slice(t+1)),L_(Cd,Cr),s}finally{ae=e,bc=!1}}return null}var Cs=[],Ns=0,kl=null,Al=0,bt=[],Dt=0,Yr=null,xn=1,Tn="";function Mr(t,e){Cs[Ns++]=Al,Cs[Ns++]=kl,kl=t,Al=e}function cv(t,e,n){bt[Dt++]=xn,bt[Dt++]=Tn,bt[Dt++]=Yr,Yr=t;var r=xn;t=Tn;var s=32-qt(r)-1;r&=~(1<<s),n+=1;var i=32-qt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,xn=1<<32-qt(e)+s|n<<s|r,Tn=i+t}else xn=1<<i|n<<s|r,Tn=t}function Md(t){t.return!==null&&(Mr(t,1),cv(t,1,0))}function Ud(t){for(;t===kl;)kl=Cs[--Ns],Cs[Ns]=null,Al=Cs[--Ns],Cs[Ns]=null;for(;t===Yr;)Yr=bt[--Dt],bt[Dt]=null,Tn=bt[--Dt],bt[Dt]=null,xn=bt[--Dt],bt[Dt]=null}var kt=null,Tt=null,ge=!1,$t=null;function hv(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Tt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:xn,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Tt=null,!0):!1;default:return!1}}function Rh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(ge){var e=Tt;if(e){var n=e;if(!tg(t,e)){if(Rh(t))throw Error(F(418));e=ur(n.nextSibling);var r=kt;e&&tg(t,e)?hv(r,n):(t.flags=t.flags&-4097|2,ge=!1,kt=t)}}else{if(Rh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ge=!1,kt=t}}}function ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function La(t){if(t!==kt)return!1;if(!ge)return ng(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ih(t.type,t.memoizedProps)),e&&(e=Tt)){if(Rh(t))throw dv(),Error(F(418));for(;e;)hv(t,e),e=ur(e.nextSibling)}if(ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=kt?ur(t.stateNode.nextSibling):null;return!0}function dv(){for(var t=Tt;t;)t=ur(t.nextSibling)}function Ks(){Tt=kt=null,ge=!1}function Fd(t){$t===null?$t=[t]:$t.push(t)}var VI=Fn.ReactCurrentBatchConfig;function Di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rg(t){var e=t._init;return e(t._payload)}function fv(t){function e(x,v){if(t){var S=x.deletions;S===null?(x.deletions=[v],x.flags|=16):S.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function s(x,v){return x=fr(x,v),x.index=0,x.sibling=null,x}function i(x,v,S){return x.index=S,t?(S=x.alternate,S!==null?(S=S.index,S<v?(x.flags|=2,v):S):(x.flags|=2,v)):(x.flags|=1048576,v)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,v,S,D){return v===null||v.tag!==6?(v=Uc(S,x.mode,D),v.return=x,v):(v=s(v,S),v.return=x,v)}function u(x,v,S,D){var M=S.type;return M===Ts?p(x,v,S.props.children,D,S.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gn&&rg(M)===v.type)?(D=s(v,S.props),D.ref=Di(x,v,S),D.return=x,D):(D=il(S.type,S.key,S.props,null,x.mode,D),D.ref=Di(x,v,S),D.return=x,D)}function h(x,v,S,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Fc(S,x.mode,D),v.return=x,v):(v=s(v,S.children||[]),v.return=x,v)}function p(x,v,S,D,M){return v===null||v.tag!==7?(v=Wr(S,x.mode,D,M),v.return=x,v):(v=s(v,S),v.return=x,v)}function m(x,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Uc(""+v,x.mode,S),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ia:return S=il(v.type,v.key,v.props,null,x.mode,S),S.ref=Di(x,null,v),S.return=x,S;case xs:return v=Fc(v,x.mode,S),v.return=x,v;case Gn:var D=v._init;return m(x,D(v._payload),S)}if(Ui(v)||Ri(v))return v=Wr(v,x.mode,S,null),v.return=x,v;Oa(x,v)}return null}function g(x,v,S,D){var M=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:l(x,v,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ia:return S.key===M?u(x,v,S,D):null;case xs:return S.key===M?h(x,v,S,D):null;case Gn:return M=S._init,g(x,v,M(S._payload),D)}if(Ui(S)||Ri(S))return M!==null?null:p(x,v,S,D,null);Oa(x,S)}return null}function T(x,v,S,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return x=x.get(S)||null,l(v,x,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ia:return x=x.get(D.key===null?S:D.key)||null,u(v,x,D,M);case xs:return x=x.get(D.key===null?S:D.key)||null,h(v,x,D,M);case Gn:var V=D._init;return T(x,v,S,V(D._payload),M)}if(Ui(D)||Ri(D))return x=x.get(S)||null,p(v,x,D,M,null);Oa(v,D)}return null}function A(x,v,S,D){for(var M=null,V=null,w=v,y=v=0,E=null;w!==null&&y<S.length;y++){w.index>y?(E=w,w=null):E=w.sibling;var I=g(x,w,S[y],D);if(I===null){w===null&&(w=E);break}t&&w&&I.alternate===null&&e(x,w),v=i(I,v,y),V===null?M=I:V.sibling=I,V=I,w=E}if(y===S.length)return n(x,w),ge&&Mr(x,y),M;if(w===null){for(;y<S.length;y++)w=m(x,S[y],D),w!==null&&(v=i(w,v,y),V===null?M=w:V.sibling=w,V=w);return ge&&Mr(x,y),M}for(w=r(x,w);y<S.length;y++)E=T(w,x,y,S[y],D),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?y:E.key),v=i(E,v,y),V===null?M=E:V.sibling=E,V=E);return t&&w.forEach(function(R){return e(x,R)}),ge&&Mr(x,y),M}function P(x,v,S,D){var M=Ri(S);if(typeof M!="function")throw Error(F(150));if(S=M.call(S),S==null)throw Error(F(151));for(var V=M=null,w=v,y=v=0,E=null,I=S.next();w!==null&&!I.done;y++,I=S.next()){w.index>y?(E=w,w=null):E=w.sibling;var R=g(x,w,I.value,D);if(R===null){w===null&&(w=E);break}t&&w&&R.alternate===null&&e(x,w),v=i(R,v,y),V===null?M=R:V.sibling=R,V=R,w=E}if(I.done)return n(x,w),ge&&Mr(x,y),M;if(w===null){for(;!I.done;y++,I=S.next())I=m(x,I.value,D),I!==null&&(v=i(I,v,y),V===null?M=I:V.sibling=I,V=I);return ge&&Mr(x,y),M}for(w=r(x,w);!I.done;y++,I=S.next())I=T(w,x,y,I.value,D),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),v=i(I,v,y),V===null?M=I:V.sibling=I,V=I);return t&&w.forEach(function(N){return e(x,N)}),ge&&Mr(x,y),M}function C(x,v,S,D){if(typeof S=="object"&&S!==null&&S.type===Ts&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ia:e:{for(var M=S.key,V=v;V!==null;){if(V.key===M){if(M=S.type,M===Ts){if(V.tag===7){n(x,V.sibling),v=s(V,S.props.children),v.return=x,x=v;break e}}else if(V.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gn&&rg(M)===V.type){n(x,V.sibling),v=s(V,S.props),v.ref=Di(x,V,S),v.return=x,x=v;break e}n(x,V);break}else e(x,V);V=V.sibling}S.type===Ts?(v=Wr(S.props.children,x.mode,D,S.key),v.return=x,x=v):(D=il(S.type,S.key,S.props,null,x.mode,D),D.ref=Di(x,v,S),D.return=x,x=D)}return o(x);case xs:e:{for(V=S.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(x,v.sibling),v=s(v,S.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=Fc(S,x.mode,D),v.return=x,x=v}return o(x);case Gn:return V=S._init,C(x,v,V(S._payload),D)}if(Ui(S))return A(x,v,S,D);if(Ri(S))return P(x,v,S,D);Oa(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(x,v.sibling),v=s(v,S),v.return=x,x=v):(n(x,v),v=Uc(S,x.mode,D),v.return=x,x=v),o(x)):n(x,v)}return C}var Gs=fv(!0),pv=fv(!1),Rl=Rr(null),Cl=null,Ps=null,Bd=null;function zd(){Bd=Ps=Cl=null}function $d(t){var e=Rl.current;me(Rl),t._currentValue=e}function Nh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){Cl=t,Bd=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Bd!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Cl===null)throw Error(F(308));Ps=t,Cl.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var zr=null;function Hd(t){zr===null?zr=[t]:zr.push(t)}function mv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Hd(e)):(n.next=s.next,s.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function qd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Dn(t,n)}return s=r.interleaved,s===null?(e.next=e,Hd(r)):(e.next=s.next,s.next=e),r.interleaved=e,Dn(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}function sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,r){var s=t.updateQueue;Qn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=h=u=null,l=i;do{var g=l.lane,T=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,P=l;switch(g=e,T=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){m=A.call(T,m,g);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,g=typeof A=="function"?A.call(T,m,g):A,g==null)break e;m=xe({},m,g);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=T,u=m):p=p.next=T,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=m}}function ig(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var $o={},sn=Rr($o),Eo=Rr($o),xo=Rr($o);function $r(t){if(t===$o)throw Error(F(174));return t}function Wd(t,e){switch(he(xo,e),he(Eo,t),he(sn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ch(e,t)}me(sn),he(sn,e)}function Qs(){me(sn),me(Eo),me(xo)}function yv(t){$r(xo.current);var e=$r(sn.current),n=ch(e,t.type);e!==n&&(he(Eo,t),he(sn,n))}function Kd(t){Eo.current===t&&(me(sn),me(Eo))}var we=Rr(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function Gd(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var el=Fn.ReactCurrentDispatcher,Lc=Fn.ReactCurrentBatchConfig,Xr=0,Ee=null,Le=null,Me=null,bl=!1,Zi=!1,To=0,jI=0;function Je(){throw Error(F(321))}function Qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function Yd(t,e,n,r,s,i){if(Xr=i,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?BI:zI,t=n(r,s),Zi){i=0;do{if(Zi=!1,To=0,25<=i)throw Error(F(301));i+=1,Me=Le=null,e.updateQueue=null,el.current=$I,t=n(r,s)}while(Zi)}if(el.current=Dl,e=Le!==null&&Le.next!==null,Xr=0,Me=Le=Ee=null,bl=!1,e)throw Error(F(300));return t}function Xd(){var t=To!==0;return To=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ee.memoizedState=Me=t:Me=Me.next=t,Me}function Mt(){if(Le===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=Me===null?Ee.memoizedState:Me.next;if(e!==null)Me=e,Le=t;else{if(t===null)throw Error(F(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Me===null?Ee.memoizedState=Me=t:Me=Me.next=t}return Me}function Io(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Le,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var p=h.lane;if((Xr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ee.lanes|=p,Jr|=p}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,Qt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ee.lanes|=i,Jr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Qt(i,e.memoizedState)||(yt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function _v(){}function vv(t,e){var n=Ee,r=Mt(),s=e(),i=!Qt(r.memoizedState,s);if(i&&(r.memoizedState=s,yt=!0),r=r.queue,Jd(xv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,So(9,Ev.bind(null,n,r,s,e),void 0,null),Ue===null)throw Error(F(349));Xr&30||wv(n,e,s)}return s}function wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ev(t,e,n,r){e.value=n,e.getSnapshot=r,Tv(e)&&Iv(t)}function xv(t,e,n){return n(function(){Tv(e)&&Iv(t)})}function Tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function Iv(t){var e=Dn(t,1);e!==null&&Wt(e,t,1,-1)}function og(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},e.queue=t,t=t.dispatch=FI.bind(null,Ee,t),[e.memoizedState,t]}function So(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Sv(){return Mt().memoizedState}function tl(t,e,n,r){var s=Zt();Ee.flags|=t,s.memoizedState=So(1|e,n,void 0,r===void 0?null:r)}function uu(t,e,n,r){var s=Mt();r=r===void 0?null:r;var i=void 0;if(Le!==null){var o=Le.memoizedState;if(i=o.destroy,r!==null&&Qd(r,o.deps)){s.memoizedState=So(e,n,i,r);return}}Ee.flags|=t,s.memoizedState=So(1|e,n,i,r)}function ag(t,e){return tl(8390656,8,t,e)}function Jd(t,e){return uu(2048,8,t,e)}function kv(t,e){return uu(4,2,t,e)}function Av(t,e){return uu(4,4,t,e)}function Rv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cv(t,e,n){return n=n!=null?n.concat([t]):null,uu(4,4,Rv.bind(null,e,t),n)}function Zd(){}function Nv(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Pv(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bv(t,e,n){return Xr&21?(Qt(n,e)||(n=j_(),Ee.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function MI(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Lc.transition;Lc.transition={};try{t(!1),e()}finally{ae=n,Lc.transition=r}}function Dv(){return Mt().memoizedState}function UI(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lv(t))Ov(e,n);else if(n=mv(t,e,n,r),n!==null){var s=ht();Wt(n,t,r,s),Vv(n,e,r)}}function FI(t,e,n){var r=dr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lv(t))Ov(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Qt(l,o)){var u=e.interleaved;u===null?(s.next=s,Hd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=mv(t,e,s,r),n!==null&&(s=ht(),Wt(n,t,r,s),Vv(n,e,r))}}function Lv(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function Ov(t,e){Zi=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}var Dl={readContext:jt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},BI={readContext:jt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,Rv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=UI.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:og,useDebugValue:Zd,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=og(!1),e=t[0];return t=MI.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,s=Zt();if(ge){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ue===null)throw Error(F(349));Xr&30||wv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,ag(xv.bind(null,r,i,t),[t]),r.flags|=2048,So(9,Ev.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Zt(),e=Ue.identifierPrefix;if(ge){var n=Tn,r=xn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zI={readContext:jt,useCallback:Nv,useContext:jt,useEffect:Jd,useImperativeHandle:Cv,useInsertionEffect:kv,useLayoutEffect:Av,useMemo:Pv,useReducer:Oc,useRef:Sv,useState:function(){return Oc(Io)},useDebugValue:Zd,useDeferredValue:function(t){var e=Mt();return bv(e,Le.memoizedState,t)},useTransition:function(){var t=Oc(Io)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:_v,useSyncExternalStore:vv,useId:Dv,unstable_isNewReconciler:!1},$I={readContext:jt,useCallback:Nv,useContext:jt,useEffect:Jd,useImperativeHandle:Cv,useInsertionEffect:kv,useLayoutEffect:Av,useMemo:Pv,useReducer:Vc,useRef:Sv,useState:function(){return Vc(Io)},useDebugValue:Zd,useDeferredValue:function(t){var e=Mt();return Le===null?e.memoizedState=t:bv(e,Le.memoizedState,t)},useTransition:function(){var t=Vc(Io)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:_v,useSyncExternalStore:vv,useId:Dv,unstable_isNewReconciler:!1};function Bt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ph(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),s=dr(t),i=An(r,s);i.payload=e,n!=null&&(i.callback=n),e=cr(t,i,s),e!==null&&(Wt(e,t,s,r),Za(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),s=dr(t),i=An(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=cr(t,i,s),e!==null&&(Wt(e,t,s,r),Za(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=dr(t),s=An(n,r);s.tag=2,e!=null&&(s.callback=e),e=cr(t,s,r),e!==null&&(Wt(e,t,r,n),Za(e,t,r))}};function lg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,r)||!yo(s,i):!0}function jv(t,e,n){var r=!1,s=vr,i=e.contextType;return typeof i=="object"&&i!==null?i=jt(i):(s=vt(e)?Qr:it.current,r=e.contextTypes,i=(r=r!=null)?Ws(t,s):vr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function ug(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function bh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},qd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=jt(i):(i=vt(e)?Qr:it.current,s.context=Ws(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ph(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&cu.enqueueReplaceState(s,s.state,null),Nl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",r=e;do n+=yT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HI=typeof WeakMap=="function"?WeakMap:Map;function Mv(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,$h=r),Dh(t,e)},n}function Uv(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Dh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Dh(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new HI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=s1.bind(null,t,e,n),e.then(t,t))}function hg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var qI=Fn.ReactCurrentOwner,yt=!1;function ct(t,e,n,r){e.child=t===null?pv(e,null,n,r):Gs(e,t.child,n,r)}function fg(t,e,n,r,s){n=n.render;var i=e.ref;return Us(e,s),r=Yd(t,e,n,r,i,s),n=Xd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ln(t,e,s)):(ge&&n&&Md(e),e.flags|=1,ct(t,e,r,s),e.child)}function pg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!lf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Fv(t,e,i,r,s)):(t=il(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,r)&&t.ref===e.ref)return Ln(t,e,s)}return e.flags|=1,t=fr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Fv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(yo(i,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Ln(t,e,s)}return Lh(t,e,n,r,s)}function Bv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ds,xt),xt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Ds,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,he(Ds,xt),xt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,he(Ds,xt),xt|=r;return ct(t,e,s,n),e.child}function zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lh(t,e,n,r,s){var i=vt(n)?Qr:it.current;return i=Ws(e,i),Us(e,s),n=Yd(t,e,n,r,i,s),r=Xd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ln(t,e,s)):(ge&&r&&Md(e),e.flags|=1,ct(t,e,n,s),e.child)}function mg(t,e,n,r,s){if(vt(n)){var i=!0;Sl(e)}else i=!1;if(Us(e,s),e.stateNode===null)nl(t,e),jv(e,n,r),bh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=jt(h):(h=vt(n)?Qr:it.current,h=Ws(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&ug(e,o,r,h),Qn=!1;var g=e.memoizedState;o.state=g,Nl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||_t.current||Qn?(typeof p=="function"&&(Ph(e,n,p,r),u=e.memoizedState),(l=Qn||lg(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Bt(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=vt(n)?Qr:it.current,u=Ws(e,u));var T=n.getDerivedStateFromProps;(p=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&ug(e,o,r,u),Qn=!1,g=e.memoizedState,o.state=g,Nl(e,r,o,s);var A=e.memoizedState;l!==m||g!==A||_t.current||Qn?(typeof T=="function"&&(Ph(e,n,T,r),A=e.memoizedState),(h=Qn||lg(e,n,h,r,g,A,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Oh(t,e,n,r,i,s)}function Oh(t,e,n,r,s,i){zv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&eg(e,n,!1),Ln(t,e,i);r=e.stateNode,qI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,i),e.child=Gs(e,null,l,i)):ct(t,e,l,i),e.memoizedState=r.state,s&&eg(e,n,!0),e.child}function $v(t){var e=t.stateNode;e.pendingContext?Zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zm(t,e.context,!1),Wd(t,e.containerInfo)}function gg(t,e,n,r,s){return Ks(),Fd(s),e.flags|=256,ct(t,e,n,r),e.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var r=e.pendingProps,s=we.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),he(we,s&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fu(o,r,0,null),t=Wr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=jh(n),e.memoizedState=Vh,t):ef(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return WI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=fr(l,i):(i=Wr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Vh,r}return i=t.child,t=i.sibling,r=fr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ef(t,e){return e=fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,r){return r!==null&&Fd(r),Gs(e,t.child,null,n),t=ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function WI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=jc(Error(F(422))),Va(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=fu({mode:"visible",children:r.children},s,0,null),i=Wr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=jh(o),e.memoizedState=Vh,i);if(!(e.mode&1))return Va(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=jc(i,r,void 0),Va(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=Ue,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Dn(t,s),Wt(r,t,s,-1))}return af(),r=jc(Error(F(421))),Va(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=i1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Tt=ur(s.nextSibling),kt=e,ge=!0,$t=null,t!==null&&(bt[Dt++]=xn,bt[Dt++]=Tn,bt[Dt++]=Yr,xn=t.id,Tn=t.overflow,Yr=e),e=ef(e,r.children),e.flags|=4096,e)}function yg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nh(t.return,e,n)}function Mc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function qv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ct(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yg(t,n,e);else if(t.tag===19)yg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(we,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Mc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Pl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Mc(e,!0,n,null,i);break;case"together":Mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KI(t,e,n){switch(e.tag){case 3:$v(e),Ks();break;case 5:yv(e);break;case 1:vt(e.type)&&Sl(e);break;case 4:Wd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;he(Rl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(he(we,we.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return qv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,Bv(t,e,n)}return Ln(t,e,n)}var Wv,Mh,Kv,Gv;Wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mh=function(){};Kv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,$r(sn.current);var i=null;switch(n){case"input":s=oh(t,s),r=oh(t,r),i=[];break;case"select":s=xe({},s,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":s=uh(t,s),r=uh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tl)}hh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(uo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(uo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&fe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Gv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Li(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GI(t,e,n){var r=e.pendingProps;switch(Ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return vt(e.type)&&Il(),Ze(e),null;case 3:return r=e.stateNode,Qs(),me(_t),me(it),Gd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(Wh($t),$t=null))),Mh(t,e),Ze(e),null;case 5:Kd(e);var s=$r(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)Kv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ze(e),null}if(t=$r(sn.current),La(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[en]=e,r[wo]=i,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(s=0;s<Bi.length;s++)fe(Bi[s],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":km(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":Rm(r,i),fe("invalid",r)}hh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),s=["children",""+l]):uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Sa(r),Am(r,i,!0);break;case"textarea":Sa(r),Cm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Tl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=x_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[wo]=r,Wv(t,e,!1,!1),e.stateNode=t;e:{switch(o=dh(n,r),n){case"dialog":fe("cancel",t),fe("close",t),s=r;break;case"iframe":case"object":case"embed":fe("load",t),s=r;break;case"video":case"audio":for(s=0;s<Bi.length;s++)fe(Bi[s],t);s=r;break;case"source":fe("error",t),s=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),s=r;break;case"details":fe("toggle",t),s=r;break;case"input":km(t,r),s=oh(t,r),fe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=xe({},r,{value:void 0}),fe("invalid",t);break;case"textarea":Rm(t,r),s=uh(t,r),fe("invalid",t);break;default:s=r}hh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?S_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&T_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&co(t,u):typeof u=="number"&&co(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(uo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&fe("scroll",t):u!=null&&Id(t,i,u,o))}switch(n){case"input":Sa(t),Am(t,r,!1);break;case"textarea":Sa(t),Cm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Os(t,!!r.multiple,i,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)Gv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=$r(xo.current),$r(sn.current),La(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(i=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:Da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Ze(e),null;case 13:if(me(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&Tt!==null&&e.mode&1&&!(e.flags&128))dv(),Ks(),e.flags|=98560,i=!1;else if(i=La(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[en]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),i=!1}else $t!==null&&(Wh($t),$t=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Oe===0&&(Oe=3):af())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Qs(),Mh(t,e),t===null&&_o(e.stateNode.containerInfo),Ze(e),null;case 10:return $d(e.type._context),Ze(e),null;case 17:return vt(e.type)&&Il(),Ze(e),null;case 19:if(me(we),i=e.memoizedState,i===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Li(i,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,Li(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(we,we.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ne()>Xs&&(e.flags|=128,r=!0,Li(i,!1),e.lanes=4194304)}else{if(!r)if(t=Pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Li(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ge)return Ze(e),null}else 2*Ne()-i.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,r=!0,Li(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ne(),e.sibling=null,n=we.current,he(we,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return of(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function QI(t,e){switch(Ud(e),e.tag){case 1:return vt(e.type)&&Il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),me(_t),me(it),Gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kd(e),null;case 13:if(me(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(we),null;case 4:return Qs(),null;case 10:return $d(e.type._context),null;case 22:case 23:return of(),null;case 24:return null;default:return null}}var ja=!1,nt=!1,YI=typeof WeakSet=="function"?WeakSet:Set,H=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Uh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var _g=!1;function XI(t,e){if(xh=wl,t=Z_(),jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,g=null;t:for(;;){for(var T;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(T=m.firstChild)!==null;)g=m,m=T;for(;;){if(m===t)break t;if(g===n&&++h===s&&(l=o),g===i&&++p===r&&(u=o),(T=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Th={focusedElem:t,selectionRange:n},wl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,C=A.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?P:Bt(e.type,P),C);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Se(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return A=_g,_g=!1,A}function eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Uh(e,n,i)}s=s.next}while(s!==r)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qv(t){var e=t.alternate;e!==null&&(t.alternate=null,Qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[wo],delete e[kh],delete e[DI],delete e[LI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yv(t){return t.tag===5||t.tag===3||t.tag===4}function vg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(r!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}function zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}var Be=null,zt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)Xv(t,e,n),n=n.sibling}function Xv(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:nt||bs(n,e);case 6:var r=Be,s=zt;Be=null,Wn(t,e,n),Be=r,zt=s,Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),mo(t)):Pc(Be,n.stateNode));break;case 4:r=Be,s=zt,Be=n.stateNode.containerInfo,zt=!0,Wn(t,e,n),Be=r,zt=s;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Uh(n,e,o),s=s.next}while(s!==r)}Wn(t,e,n);break;case 1:if(!nt&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Wn(t,e,n),nt=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function wg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YI),e.forEach(function(r){var s=o1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,zt=!1;break e;case 3:Be=l.stateNode.containerInfo,zt=!0;break e;case 4:Be=l.stateNode.containerInfo,zt=!0;break e}l=l.return}if(Be===null)throw Error(F(160));Xv(i,o,s),Be=null,zt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Se(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jv(e,t),e=e.sibling}function Jv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Jt(t),r&4){try{eo(3,t,t.return),hu(3,t)}catch(P){Se(t,t.return,P)}try{eo(5,t,t.return)}catch(P){Se(t,t.return,P)}}break;case 1:Ft(e,t),Jt(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(Ft(e,t),Jt(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var s=t.stateNode;try{co(s,"")}catch(P){Se(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&w_(s,i),dh(l,o);var h=dh(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?S_(s,m):p==="dangerouslySetInnerHTML"?T_(s,m):p==="children"?co(s,m):Id(s,p,m,h)}switch(l){case"input":ah(s,i);break;case"textarea":E_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var T=i.value;T!=null?Os(s,!!i.multiple,T,!1):g!==!!i.multiple&&(i.defaultValue!=null?Os(s,!!i.multiple,i.defaultValue,!0):Os(s,!!i.multiple,i.multiple?[]:"",!1))}s[wo]=i}catch(P){Se(t,t.return,P)}}break;case 6:if(Ft(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Se(t,t.return,P)}}break;case 3:if(Ft(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(P){Se(t,t.return,P)}break;case 4:Ft(e,t),Jt(t);break;case 13:Ft(e,t),Jt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(rf=Ne())),r&4&&wg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(h=nt)||p,Ft(e,t),nt=h):Ft(e,t),Jt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(H=t,p=t.child;p!==null;){for(m=H=p;H!==null;){switch(g=H,T=g.child,g.tag){case 0:case 11:case 14:case 15:eo(4,g,g.return);break;case 1:bs(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){Se(r,n,P)}}break;case 5:bs(g,g.return);break;case 22:if(g.memoizedState!==null){xg(m);continue}}T!==null?(T.return=g,H=T):xg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=I_("display",o))}catch(P){Se(t,t.return,P)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){Se(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ft(e,t),Jt(t),r&4&&wg(t);break;case 21:break;default:Ft(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(co(s,""),r.flags&=-33);var i=vg(t);zh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=vg(t);Bh(t,l,o);break;default:throw Error(F(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JI(t,e,n){H=t,Zv(t)}function Zv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ja;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||nt;l=ja;var h=nt;if(ja=o,(nt=u)&&!h)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Tg(s):u!==null?(u.return=o,H=u):Tg(s);for(;i!==null;)H=i,Zv(i),i=i.sibling;H=s,ja=l,nt=h}Eg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):Eg(t)}}function Eg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&ig(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ig(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&mo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}nt||e.flags&512&&Fh(e)}catch(g){Se(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function xg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Tg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Se(e,s,u)}}var i=e.return;try{Fh(e)}catch(u){Se(e,i,u)}break;case 5:var o=e.return;try{Fh(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var ZI=Math.ceil,Ll=Fn.ReactCurrentDispatcher,tf=Fn.ReactCurrentOwner,Ot=Fn.ReactCurrentBatchConfig,se=0,Ue=null,be=null,He=0,xt=0,Ds=Rr(0),Oe=0,ko=null,Jr=0,du=0,nf=0,to=null,mt=null,rf=0,Xs=1/0,wn=null,Ol=!1,$h=null,hr=null,Ma=!1,sr=null,Vl=0,no=0,Hh=null,rl=-1,sl=0;function ht(){return se&6?Ne():rl!==-1?rl:rl=Ne()}function dr(t){return t.mode&1?se&2&&He!==0?He&-He:VI.transition!==null?(sl===0&&(sl=j_()),sl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:H_(t.type)),t):1}function Wt(t,e,n,r){if(50<no)throw no=0,Hh=null,Error(F(185));Fo(t,n,r),(!(se&2)||t!==Ue)&&(t===Ue&&(!(se&2)&&(du|=n),Oe===4&&Xn(t,He)),wt(t,r),n===1&&se===0&&!(e.mode&1)&&(Xs=Ne()+500,lu&&Cr()))}function wt(t,e){var n=t.callbackNode;VT(t,e);var r=vl(t,t===Ue?He:0);if(r===0)n!==null&&bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bm(n),e===1)t.tag===0?OI(Ig.bind(null,t)):uv(Ig.bind(null,t)),PI(function(){!(se&6)&&Cr()}),n=null;else{switch(M_(r)){case 1:n=Cd;break;case 4:n=O_;break;case 16:n=_l;break;case 536870912:n=V_;break;default:n=_l}n=a0(n,e0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e0(t,e){if(rl=-1,sl=0,se&6)throw Error(F(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var r=vl(t,t===Ue?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jl(t,r);else{e=r;var s=se;se|=2;var i=n0();(Ue!==t||He!==e)&&(wn=null,Xs=Ne()+500,qr(t,e));do try{n1();break}catch(l){t0(t,l)}while(!0);zd(),Ll.current=i,se=s,be!==null?e=0:(Ue=null,He=0,e=Oe)}if(e!==0){if(e===2&&(s=yh(t),s!==0&&(r=s,e=qh(t,s))),e===1)throw n=ko,qr(t,0),Xn(t,r),wt(t,Ne()),n;if(e===6)Xn(t,r);else{if(s=t.current.alternate,!(r&30)&&!e1(s)&&(e=jl(t,r),e===2&&(i=yh(t),i!==0&&(r=i,e=qh(t,i))),e===1))throw n=ko,qr(t,0),Xn(t,r),wt(t,Ne()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Ur(t,mt,wn);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=rf+500-Ne(),10<e)){if(vl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Sh(Ur.bind(null,t,mt,wn),e);break}Ur(t,mt,wn);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-qt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ZI(r/1960))-r,10<r){t.timeoutHandle=Sh(Ur.bind(null,t,mt,wn),r);break}Ur(t,mt,wn);break;case 5:Ur(t,mt,wn);break;default:throw Error(F(329))}}}return wt(t,Ne()),t.callbackNode===n?e0.bind(null,t):null}function qh(t,e){var n=to;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=jl(t,e),t!==2&&(e=mt,mt=n,e!==null&&Wh(e)),t}function Wh(t){mt===null?mt=t:mt.push.apply(mt,t)}function e1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Qt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~nf,e&=~du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function Ig(t){if(se&6)throw Error(F(327));Fs();var e=vl(t,0);if(!(e&1))return wt(t,Ne()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var r=yh(t);r!==0&&(e=r,n=qh(t,r))}if(n===1)throw n=ko,qr(t,0),Xn(t,e),wt(t,Ne()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,mt,wn),wt(t,Ne()),null}function sf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Xs=Ne()+500,lu&&Cr())}}function Zr(t){sr!==null&&sr.tag===0&&!(se&6)&&Fs();var e=se;se|=1;var n=Ot.transition,r=ae;try{if(Ot.transition=null,ae=1,t)return t()}finally{ae=r,Ot.transition=n,se=e,!(se&6)&&Cr()}}function of(){xt=Ds.current,me(Ds)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NI(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Ud(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Il();break;case 3:Qs(),me(_t),me(it),Gd();break;case 5:Kd(r);break;case 4:Qs();break;case 13:me(we);break;case 19:me(we);break;case 10:$d(r.type._context);break;case 22:case 23:of()}n=n.return}if(Ue=t,be=t=fr(t.current,null),He=xt=e,Oe=0,ko=null,nf=du=Jr=0,mt=to=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}zr=null}return t}function t0(t,e){do{var n=be;try{if(zd(),el.current=Dl,bl){for(var r=Ee.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}bl=!1}if(Xr=0,Me=Le=Ee=null,Zi=!1,To=0,tf.current=null,n===null||n.return===null){Oe=1,ko=e,be=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var T=hg(o);if(T!==null){T.flags&=-257,dg(T,o,l,i,e),T.mode&1&&cg(i,h,e),e=T,u=h;var A=e.updateQueue;if(A===null){var P=new Set;P.add(u),e.updateQueue=P}else A.add(u);break e}else{if(!(e&1)){cg(i,h,e),af();break e}u=Error(F(426))}}else if(ge&&l.mode&1){var C=hg(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),dg(C,o,l,i,e),Fd(Ys(u,l));break e}}i=u=Ys(u,l),Oe!==4&&(Oe=2),to===null?to=[i]:to.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=Mv(i,u,e);sg(i,x);break e;case 1:l=u;var v=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(hr===null||!hr.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=Uv(i,l,e);sg(i,D);break e}}i=i.return}while(i!==null)}s0(n)}catch(M){e=M,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function n0(){var t=Ll.current;return Ll.current=Dl,t===null?Dl:t}function af(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ue===null||!(Jr&268435455)&&!(du&268435455)||Xn(Ue,He)}function jl(t,e){var n=se;se|=2;var r=n0();(Ue!==t||He!==e)&&(wn=null,qr(t,e));do try{t1();break}catch(s){t0(t,s)}while(!0);if(zd(),se=n,Ll.current=r,be!==null)throw Error(F(261));return Ue=null,He=0,Oe}function t1(){for(;be!==null;)r0(be)}function n1(){for(;be!==null&&!AT();)r0(be)}function r0(t){var e=o0(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?s0(t):be=e,tf.current=null}function s0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QI(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,be=null;return}}else if(n=GI(n,e,xt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Oe===0&&(Oe=5)}function Ur(t,e,n){var r=ae,s=Ot.transition;try{Ot.transition=null,ae=1,r1(t,e,n,r)}finally{Ot.transition=s,ae=r}return null}function r1(t,e,n,r){do Fs();while(sr!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(jT(t,i),t===Ue&&(be=Ue=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,a0(_l,function(){return Fs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ot.transition,Ot.transition=null;var o=ae;ae=1;var l=se;se|=4,tf.current=null,XI(t,n),Jv(n,t),TI(Th),wl=!!xh,Th=xh=null,t.current=n,JI(n),RT(),se=l,ae=o,Ot.transition=i}else t.current=n;if(Ma&&(Ma=!1,sr=t,Vl=s),i=t.pendingLanes,i===0&&(hr=null),PT(n.stateNode),wt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ol)throw Ol=!1,t=$h,$h=null,t;return Vl&1&&t.tag!==0&&Fs(),i=t.pendingLanes,i&1?t===Hh?no++:(no=0,Hh=t):no=0,Cr(),null}function Fs(){if(sr!==null){var t=M_(Vl),e=Ot.transition,n=ae;try{if(Ot.transition=null,ae=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Vl=0,se&6)throw Error(F(331));var s=se;for(se|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:eo(8,p,i)}var m=p.child;if(m!==null)m.return=p,H=m;else for(;H!==null;){p=H;var g=p.sibling,T=p.return;if(Qv(p),p===h){H=null;break}if(g!==null){g.return=T,H=g;break}H=T}}}var A=i.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var C=P.sibling;P.sibling=null,P=C}while(P!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:eo(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,H=x;break e}H=i.return}}var v=t.current;for(H=v;H!==null;){o=H;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,H=S;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hu(9,l)}}catch(M){Se(l,l.return,M)}if(l===o){H=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,H=D;break e}H=l.return}}if(se=s,Cr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(ru,t)}catch{}r=!0}return r}finally{ae=n,Ot.transition=e}}return!1}function Sg(t,e,n){e=Ys(n,e),e=Mv(t,e,1),t=cr(t,e,1),e=ht(),t!==null&&(Fo(t,1,e),wt(t,e))}function Se(t,e,n){if(t.tag===3)Sg(t,t,n);else for(;e!==null;){if(e.tag===3){Sg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=Ys(n,t),t=Uv(e,t,1),e=cr(e,t,1),t=ht(),e!==null&&(Fo(e,1,t),wt(e,t));break}}e=e.return}}function s1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(He&n)===n&&(Oe===4||Oe===3&&(He&130023424)===He&&500>Ne()-rf?qr(t,0):nf|=n),wt(t,e)}function i0(t,e){e===0&&(t.mode&1?(e=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):e=1);var n=ht();t=Dn(t,e),t!==null&&(Fo(t,e,n),wt(t,n))}function i1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i0(t,n)}function o1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),i0(t,n)}var o0;o0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,KI(t,e,n);yt=!!(t.flags&131072)}else yt=!1,ge&&e.flags&1048576&&cv(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nl(t,e),t=e.pendingProps;var s=Ws(e,it.current);Us(e,n),s=Yd(null,e,r,t,s,n);var i=Xd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(i=!0,Sl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,qd(e),s.updater=cu,e.stateNode=s,s._reactInternals=e,bh(e,r,t,n),e=Oh(null,e,r,!0,i,n)):(e.tag=0,ge&&i&&Md(e),ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=l1(r),t=Bt(r,t),s){case 0:e=Lh(null,e,r,t,n);break e;case 1:e=mg(null,e,r,t,n);break e;case 11:e=fg(null,e,r,t,n);break e;case 14:e=pg(null,e,r,Bt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),Lh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),mg(t,e,r,s,n);case 3:e:{if($v(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,gv(t,e),Nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ys(Error(F(423)),e),e=gg(t,e,r,n,s);break e}else if(r!==s){s=Ys(Error(F(424)),e),e=gg(t,e,r,n,s);break e}else for(Tt=ur(e.stateNode.containerInfo.firstChild),kt=e,ge=!0,$t=null,n=pv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),r===s){e=Ln(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return yv(e),t===null&&Ch(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Ih(r,s)?o=null:i!==null&&Ih(r,i)&&(e.flags|=32),zv(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return Hv(t,e,n);case 4:return Wd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gs(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),fg(t,e,r,s,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,he(Rl,r._currentValue),r._currentValue=o,i!==null)if(Qt(i.value,o)){if(i.children===s.children&&!_t.current){e=Ln(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=An(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Nh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Nh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Us(e,n),s=jt(s),r=r(s),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,s=Bt(r,e.pendingProps),s=Bt(r.type,s),pg(t,e,r,s,n);case 15:return Fv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),nl(t,e),e.tag=1,vt(r)?(t=!0,Sl(e)):t=!1,Us(e,n),jv(e,r,s),bh(e,r,s,n),Oh(null,e,r,!0,t,n);case 19:return qv(t,e,n);case 22:return Bv(t,e,n)}throw Error(F(156,e.tag))};function a0(t,e){return L_(t,e)}function a1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new a1(t,e,n,r)}function lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function l1(t){if(typeof t=="function")return lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===Ad)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ts:return Wr(n.children,s,i,e);case Sd:o=8,s|=8;break;case nh:return t=Lt(12,n,e,s|2),t.elementType=nh,t.lanes=i,t;case rh:return t=Lt(13,n,e,s),t.elementType=rh,t.lanes=i,t;case sh:return t=Lt(19,n,e,s),t.elementType=sh,t.lanes=i,t;case y_:return fu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case m_:o=10;break e;case g_:o=9;break e;case kd:o=11;break e;case Ad:o=14;break e;case Gn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Wr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function fu(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=y_,t.lanes=n,t.stateNode={isHidden:!1},t}function Uc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function Fc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function u1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function uf(t,e,n,r,s,i,o,l,u){return t=new u1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Lt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qd(i),t}function c1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function l0(t){if(!t)return vr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(vt(n))return lv(t,n,e)}return e}function u0(t,e,n,r,s,i,o,l,u){return t=uf(n,r,!0,t,s,i,o,l,u),t.context=l0(null),n=t.current,r=ht(),s=dr(n),i=An(r,s),i.callback=e??null,cr(n,i,s),t.current.lanes=s,Fo(t,s,r),wt(t,r),t}function pu(t,e,n,r){var s=e.current,i=ht(),o=dr(s);return n=l0(n),e.context===null?e.context=n:e.pendingContext=n,e=An(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(s,e,o),t!==null&&(Wt(t,s,o,i),Za(t,s,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cf(t,e){kg(t,e),(t=t.alternate)&&kg(t,e)}function h1(){return null}var c0=typeof reportError=="function"?reportError:function(t){console.error(t)};function hf(t){this._internalRoot=t}mu.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));pu(t,e,null,null)};mu.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){pu(null,t,null,null)}),e[bn]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=B_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&$_(t)}};function df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ag(){}function d1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Ml(o);i.call(h)}}var o=u0(e,r,t,0,null,!1,!1,"",Ag);return t._reactRootContainer=o,t[bn]=o.current,_o(t.nodeType===8?t.parentNode:t),Zr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=Ml(u);l.call(h)}}var u=uf(t,0,!1,null,null,!1,!1,"",Ag);return t._reactRootContainer=u,t[bn]=u.current,_o(t.nodeType===8?t.parentNode:t),Zr(function(){pu(e,u,n,r)}),u}function yu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Ml(o);l.call(u)}}pu(e,o,t,s)}else o=d1(n,e,t,s,r);return Ml(o)}U_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fi(e.pendingLanes);n!==0&&(Nd(e,n|1),wt(e,Ne()),!(se&6)&&(Xs=Ne()+500,Cr()))}break;case 13:Zr(function(){var r=Dn(t,1);if(r!==null){var s=ht();Wt(r,t,1,s)}}),cf(t,1)}};Pd=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=ht();Wt(e,t,134217728,n)}cf(t,134217728)}};F_=function(t){if(t.tag===13){var e=dr(t),n=Dn(t,e);if(n!==null){var r=ht();Wt(n,t,e,r)}cf(t,e)}};B_=function(){return ae};z_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};ph=function(t,e,n){switch(e){case"input":if(ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=au(r);if(!s)throw Error(F(90));v_(r),ah(r,s)}}}break;case"textarea":E_(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};R_=sf;C_=Zr;var f1={usingClientEntryPoint:!1,Events:[zo,As,au,k_,A_,sf]},Oi={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p1={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b_(t),t===null?null:t.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||h1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{ru=Ua.inject(p1),rn=Ua}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f1;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(e))throw Error(F(200));return c1(t,e,null,n)};Ct.createRoot=function(t,e){if(!df(t))throw Error(F(299));var n=!1,r="",s=c0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=uf(t,1,!1,null,null,n,!1,r,s),t[bn]=e.current,_o(t.nodeType===8?t.parentNode:t),new hf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=b_(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return Zr(t)};Ct.hydrate=function(t,e,n){if(!gu(e))throw Error(F(200));return yu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!df(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=c0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=u0(e,null,t,1,n??null,s,!1,i,o),t[bn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new mu(e)};Ct.render=function(t,e,n){if(!gu(e))throw Error(F(200));return yu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!gu(t))throw Error(F(40));return t._reactRootContainer?(Zr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};Ct.unstable_batchedUpdates=sf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return yu(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function h0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0)}catch(t){console.error(t)}}h0(),h_.exports=Ct;var m1=h_.exports,d0,Rg=m1;d0=Rg.createRoot,Rg.hydrateRoot;/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f0=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=U.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>U.createElement("svg",{ref:u,...y1,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:f0("lucide",s),...l},[...o.map(([h,p])=>U.createElement(h,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(t,e)=>{const n=U.forwardRef(({className:r,...s},i)=>U.createElement(_1,{ref:i,iconNode:e,className:f0(`lucide-${g1(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=Z("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=Z("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=Z("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=Z("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Z("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=Z("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=Z("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=Z("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=Z("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Z("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=Z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=Z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=Z("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=Z("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=Z("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=Z("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=Z("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=Z("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=Z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=Z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=Z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=Z("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Z("MessageSquareReply",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=Z("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=Z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=Z("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=Z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=Z("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=Z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=Z("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=Z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=Z("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=Z("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=Z("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=Z("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=Z("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=Z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=Z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=Z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=Z("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var Cg={};/**
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
 */const C0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},V1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},N0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,T=h&63;u||(T=64,o||(g=64)),r.push(n[p],n[m],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(C0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):V1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new j1;const g=i<<2|l>>4;if(r.push(g),h!==64){const T=l<<4&240|h>>2;if(r.push(T),m!==64){const A=h<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class j1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const M1=function(t){const e=C0(t);return N0.encodeByteArray(e,!0)},Ul=function(t){return M1(t).replace(/\./g,"")},P0=function(t){try{return N0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function U1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const F1=()=>U1().__FIREBASE_DEFAULTS__,B1=()=>{if(typeof process>"u"||typeof Cg>"u")return;const t=Cg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},z1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&P0(t[1]);return e&&JSON.parse(e)},Eu=()=>{try{return F1()||B1()||z1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},b0=t=>{var e,n;return(n=(e=Eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},D0=t=>{const e=b0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},L0=()=>{var t;return(t=Eu())===null||t===void 0?void 0:t.config},O0=t=>{var e;return(e=Eu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function V0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ul(JSON.stringify(n)),Ul(JSON.stringify(o)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function H1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function q1(){var t;const e=(t=Eu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function W1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function K1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function G1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q1(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y1(){return!q1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function X1(){try{return typeof indexedDB=="object"}catch{return!1}}function J1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Z1="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Z1,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?eS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new dn(s,l,r)}}function eS(t,e){return t.replace(tS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tS=/\{\$([^}]+)}/g;function nS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ng(i)&&Ng(o)){if(!Fl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ng(t){return t!==null&&typeof t=="object"}/**
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
 */function qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $i(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rS(t,e){const n=new sS(t,e);return n.subscribe.bind(n)}class sS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Bc),s.error===void 0&&(s.error=Bc),s.complete===void 0&&(s.complete=Bc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bc(){}/**
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
 */function _e(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class oS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lS(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aS(t){return t===Fr?void 0:t}function lS(t){return t.instantiationMode==="EAGER"}/**
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
 */class uS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const j0=[];var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const cS={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},hS=ne.INFO,dS={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},fS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=dS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gf{constructor(e){this.name=e,this._logLevel=hS,this._logHandler=fS,this._userLogHandler=null,j0.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}function pS(t){j0.forEach(e=>{e.setLogLevel(t)})}const mS=(t,e)=>e.some(n=>t instanceof n);let Pg,bg;function gS(){return Pg||(Pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yS(){return bg||(bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const M0=new WeakMap,Kh=new WeakMap,U0=new WeakMap,zc=new WeakMap,yf=new WeakMap;function _S(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&M0.set(n,t)}).catch(()=>{}),yf.set(e,t),e}function vS(t){if(Kh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kh.set(t,e)}let Gh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||U0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wS(t){Gh=t(Gh)}function ES(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($c(this),e,...n);return U0.set(r,e.sort?e.sort():[e]),pr(r)}:yS().includes(t)?function(...e){return t.apply($c(this),e),pr(M0.get(this))}:function(...e){return pr(t.apply($c(this),e))}}function xS(t){return typeof t=="function"?ES(t):(t instanceof IDBTransaction&&vS(t),mS(t,gS())?new Proxy(t,Gh):t)}function pr(t){if(t instanceof IDBRequest)return _S(t);if(zc.has(t))return zc.get(t);const e=xS(t);return e!==t&&(zc.set(t,e),yf.set(e,t)),e}const $c=t=>yf.get(t);function TS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pr(o.result),u.oldVersion,u.newVersion,pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const IS=["get","getKey","getAll","getAllKeys","count"],SS=["put","add","delete","clear"],Hc=new Map;function Dg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hc.get(e))return Hc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=SS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IS.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Hc.set(e,i),i}wS(t=>({...t,get:(e,n,r)=>Dg(e,n)||t.get(e,n,r),has:(e,n)=>!!Dg(e,n)||t.has(e,n)}));/**
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
 */class kS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qh="@firebase/app",Lg="0.10.13";/**
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
 */const On=new gf("@firebase/app"),RS="@firebase/app-compat",CS="@firebase/analytics-compat",NS="@firebase/analytics",PS="@firebase/app-check-compat",bS="@firebase/app-check",DS="@firebase/auth",LS="@firebase/auth-compat",OS="@firebase/database",VS="@firebase/data-connect",jS="@firebase/database-compat",MS="@firebase/functions",US="@firebase/functions-compat",FS="@firebase/installations",BS="@firebase/installations-compat",zS="@firebase/messaging",$S="@firebase/messaging-compat",HS="@firebase/performance",qS="@firebase/performance-compat",WS="@firebase/remote-config",KS="@firebase/remote-config-compat",GS="@firebase/storage",QS="@firebase/storage-compat",YS="@firebase/firestore",XS="@firebase/vertexai-preview",JS="@firebase/firestore-compat",ZS="firebase",ek="10.14.1";/**
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
 */const Yh="[DEFAULT]",tk={[Qh]:"fire-core",[RS]:"fire-core-compat",[NS]:"fire-analytics",[CS]:"fire-analytics-compat",[bS]:"fire-app-check",[PS]:"fire-app-check-compat",[DS]:"fire-auth",[LS]:"fire-auth-compat",[OS]:"fire-rtdb",[VS]:"fire-data-connect",[jS]:"fire-rtdb-compat",[MS]:"fire-fn",[US]:"fire-fn-compat",[FS]:"fire-iid",[BS]:"fire-iid-compat",[zS]:"fire-fcm",[$S]:"fire-fcm-compat",[HS]:"fire-perf",[qS]:"fire-perf-compat",[WS]:"fire-rc",[KS]:"fire-rc-compat",[GS]:"fire-gcs",[QS]:"fire-gcs-compat",[YS]:"fire-fst",[JS]:"fire-fst-compat",[XS]:"fire-vertex","fire-js":"fire-js",[ZS]:"fire-js-all"};/**
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
 */const Bl=new Map,nk=new Map,Xh=new Map;function Og(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Xh.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;Xh.set(e,t);for(const n of Bl.values())Og(n,t);for(const n of nk.values())Og(n,t);return!0}function xu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t.settings!==void 0}/**
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
 */const rk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new Ho("app","Firebase",rk);/**
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
 */class sk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const us=ek;function F0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw mr.create("bad-app-name",{appName:String(s)});if(n||(n=L0()),!n)throw mr.create("no-options");const i=Bl.get(s);if(i){if(Fl(n,i.options)&&Fl(r,i.config))return i;throw mr.create("duplicate-app",{appName:s})}const o=new uS(s);for(const u of Xh.values())o.addComponent(u);const l=new sk(n,r,o);return Bl.set(s,l),l}function _f(t=Yh){const e=Bl.get(t);if(!e&&t===Yh&&L0())return F0();if(!e)throw mr.create("no-app",{appName:t});return e}function on(t,e,n){var r;let s=(r=tk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(l.join(" "));return}es(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function ik(t){pS(t)}/**
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
 */const ok="firebase-heartbeat-database",ak=1,Co="firebase-heartbeat-store";let qc=null;function B0(){return qc||(qc=TS(ok,ak,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Co)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),qc}async function lk(t){try{const n=(await B0()).transaction(Co),r=await n.objectStore(Co).get(z0(t));return await n.done,r}catch(e){if(e instanceof dn)On.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function Vg(t,e){try{const r=(await B0()).transaction(Co,"readwrite");await r.objectStore(Co).put(e,z0(t)),await r.done}catch(n){if(n instanceof dn)On.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function z0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uk=1024,ck=30*24*60*60*1e3;class hk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ck}),this._storage.overwrite(this._heartbeatsCache))}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jg(),{heartbeatsToSend:r,unsentEntries:s}=dk(this._heartbeatsCache.heartbeats),i=Ul(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return On.warn(n),""}}}function jg(){return new Date().toISOString().substring(0,10)}function dk(t,e=uk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X1()?J1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mg(t){return Ul(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pk(t){es(new Er("platform-logger",e=>new kS(e),"PRIVATE")),es(new Er("heartbeat",e=>new hk(e),"PRIVATE")),on(Qh,Lg,t),on(Qh,Lg,"esm2017"),on("fire-js","")}pk("");var mk="firebase",gk="10.14.1";/**
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
 */on(mk,gk,"app");function vf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yk=$0,H0=new Ho("auth","Firebase",$0());/**
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
 */const zl=new gf("@firebase/auth");function _k(t,...e){zl.logLevel<=ne.WARN&&zl.warn(`Auth (${us}): ${t}`,...e)}function ol(t,...e){zl.logLevel<=ne.ERROR&&zl.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw wf(t,...e)}function an(t,...e){return wf(t,...e)}function q0(t,e,n){const r=Object.assign(Object.assign({},yk()),{[e]:n});return new Ho("auth","Firebase",r).create(e,{appName:t.name})}function Rn(t){return q0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return H0.create(t,...e)}function K(t,e,...n){if(!t)throw wf(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ol(e),new Error(e)}function Vn(t,e){t||In(e)}/**
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
 */function Jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vk(){return Ug()==="http:"||Ug()==="https:"}function Ug(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vk()||K1()||"connection"in navigator)?navigator.onLine:!0}function Ek(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=H1()||G1()}get(){return wk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ef(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class W0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Tk=new Wo(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,s={}){return K0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=qo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return W1()||(h.referrerPolicy="no-referrer"),W0.fetch()(G0(t,t.config.apiHost,n,l),h)})}async function K0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xk),e);try{const s=new Sk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Fa(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw q0(t,p,h);Yt(t,p)}}catch(s){if(s instanceof dn)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function Ko(t,e,n,r,s={}){const i=await Bn(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function G0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ef(t.config,s):`${t.config.apiScheme}://${s}`}function Ik(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),Tk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Fg(t){return t!==void 0&&t.enterprise!==void 0}class kk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ik(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ak(t,e){return Bn(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
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
 */async function Rk(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function Q0(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ck(t,e=!1){const n=_e(t),r=await n.getIdToken(e),s=xf(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ro(Wc(s.auth_time)),issuedAtTime:ro(Wc(s.iat)),expirationTime:ro(Wc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wc(t){return Number(t)*1e3}function xf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const s=P0(n);return s?JSON.parse(s):(ol("Failed to decode base64 JWT payload"),null)}catch(s){return ol("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bg(t){const e=xf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&Nk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Nk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Pk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $l(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Js(t,Q0(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Y0(i.providerUserInfo):[],l=Dk(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Zh(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function bk(t){const e=_e(t);await $l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Y0(t){return t.map(e=>{var{providerId:n}=e,r=vf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Lk(t,e){const n=await K0(t,{},async()=>{const r=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=G0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",W0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ok(t,e){return Bn(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
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
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Bg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Lk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bs;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function Kn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ck(this,e)}reload(){return bk(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await Js(this,Rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,x=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:S,emailVerified:D,isAnonymous:M,providerData:V,stsTokenManager:w}=n;K(S&&w,e,"internal-error");const y=Bs.fromJSON(this.name,w);K(typeof S=="string",e,"internal-error"),Kn(m,e.name),Kn(g,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof M=="boolean",e,"internal-error"),Kn(T,e.name),Kn(A,e.name),Kn(P,e.name),Kn(C,e.name),Kn(x,e.name),Kn(v,e.name);const E=new Sn({uid:S,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:M,photoURL:A,phoneNumber:T,tenantId:P,stsTokenManager:y,createdAt:x,lastLoginAt:v});return V&&Array.isArray(V)&&(E.providerData=V.map(I=>Object.assign({},I))),C&&(E._redirectEventId=C),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bs;s.updateFromServerResponse(n);const i=new Sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $l(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Y0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Bs;l.updateFromIdToken(r);const u=new Sn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const zg=new Map;function kn(t){Vn(t instanceof Function,"Expected a class definition");let e=zg.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zg.set(t,e),e)}/**
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
 */class X0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}X0.type="NONE";const $g=X0;/**
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
 */function al(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=al(this.userKey,s.apiKey,i),this.fullPersistenceKey=al("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(kn($g),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||kn($g);const o=al(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){const m=Sn._fromJSON(e,p);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new zs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new zs(i,e,r))}}/**
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
 */function Hg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rw(e))return"Blackberry";if(sw(e))return"Webos";if(Z0(e))return"Safari";if((e.includes("chrome/")||ew(e))&&!e.includes("edge/"))return"Chrome";if(nw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function J0(t=ot()){return/firefox\//i.test(t)}function Z0(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ew(t=ot()){return/crios\//i.test(t)}function tw(t=ot()){return/iemobile/i.test(t)}function nw(t=ot()){return/android/i.test(t)}function rw(t=ot()){return/blackberry/i.test(t)}function sw(t=ot()){return/webos/i.test(t)}function Tf(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vk(t=ot()){var e;return Tf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jk(){return Q1()&&document.documentMode===10}function iw(t=ot()){return Tf(t)||nw(t)||sw(t)||rw(t)||/windows phone/i.test(t)||tw(t)}/**
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
 */function ow(t,e=[]){let n;switch(t){case"Browser":n=Hg(ot());break;case"Worker":n=`${Hg(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class Mk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e={}){return Bn(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=6;class Bk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Fk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class zk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qg(this),this.idTokenSubscription=new qg(this),this.beforeStateQueue=new Mk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Q0(this,{idToken:e}),r=await Sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ek()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Rn(this));const n=e?_e(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Uk(this),n=new Bk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ok(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ow(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_k(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cs(t){return _e(t)}class qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=rS(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $k(t){Tu=t}function aw(t){return Tu.loadJS(t)}function Hk(){return Tu.recaptchaEnterpriseScript}function qk(){return Tu.gapiScript}function Wk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Kk="recaptcha-enterprise",Gk="NO_RECAPTCHA";class Qk{constructor(e){this.type=Kk,this.auth=cs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Ak(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new kk(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Fg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Gk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Fg(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Hk();u.length!==0&&(u+=l),aw(u).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Wg(t,e,n,r=!1){const s=new Qk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ed(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Yk(t,e){const n=xu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fl(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function Xk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jk(t,e,n){const r=cs(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=lw(e),{host:o,port:l}=Zk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),eA()}function lw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zk(t){const e=lw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Kg(o)}}}function Kg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class If{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function tA(t,e){return Bn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function nA(t,e){return Ko(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
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
 */async function rA(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function sA(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
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
 */class No extends If{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new No(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new No(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ed(e,n,"signInWithPassword",nA);case"emailLink":return rA(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ed(e,r,"signUpPassword",tA);case"emailLink":return sA(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $s(t,e){return Ko(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
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
 */const iA="http://localhost";class ts extends If{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=vf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:iA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
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
 */function oA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aA(t){const e=zi($i(t)).link,n=e?zi($i(e)).deep_link_id:null,r=zi($i(t)).deep_link_id;return(r?zi($i(r)).link:null)||r||n||e||t}class Sf{constructor(e){var n,r,s,i,o,l;const u=zi($i(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=oA((s=u.mode)!==null&&s!==void 0?s:null);K(h&&p&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=aA(e);try{return new Sf(n)}catch{return null}}}/**
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
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(e,n){return No._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sf.parseLink(n);return K(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Go extends uw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jn extends Go{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
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
 */class Zn extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
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
 */class er extends Go{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
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
 */class tr extends Go{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
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
 */async function lA(t,e){return Ko(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Sn._fromIdTokenResponse(e,r,s),o=Gg(r);return new ns({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gg(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Hl extends dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hl(e,n,r,s)}}function cw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hl._fromErrorAndOperation(t,i,e,r):i})}async function uA(t,e,n=!1){const r=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
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
 */async function cA(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await Js(t,cw(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=xf(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),ns._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function hw(t,e,n=!1){if(tn(t.app))return Promise.reject(Rn(t));const r="signIn",s=await cw(t,r,e),i=await ns._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function hA(t,e){return hw(cs(t),e)}/**
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
 */async function dw(t){const e=cs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dA(t,e,n){if(tn(t.app))return Promise.reject(Rn(t));const r=cs(t),o=await ed(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dw(t),u}),l=await ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function fA(t,e,n){return tn(t.app)?Promise.reject(Rn(t)):hA(_e(t),ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dw(t),r})}/**
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
 */async function pA(t,e){return Bn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function kf(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=_e(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Js(r,pA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function mA(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function gA(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function yA(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function _A(t){return _e(t).signOut()}const ql="__sak";/**
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
 */class fw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ql,"1"),this.storage.removeItem(ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vA=1e3,wA=10;class pw extends fw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pw.type="LOCAL";const EA=pw;/**
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
 */class mw extends fw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mw.type="SESSION";const gw=mw;/**
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
 */function xA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await xA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Iu.receivers=[];/**
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
 */function Af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class TA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Af("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function IA(t){ln().location.href=t}/**
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
 */function yw(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function SA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AA(){return yw()?self:null}/**
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
 */const _w="firebaseLocalStorageDb",RA=1,Wl="firebaseLocalStorage",vw="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Su(t,e){return t.transaction([Wl],e?"readwrite":"readonly").objectStore(Wl)}function CA(){const t=indexedDB.deleteDatabase(_w);return new Qo(t).toPromise()}function td(){const t=indexedDB.open(_w,RA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wl,{keyPath:vw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wl)?e(r):(r.close(),await CA(),e(await td()))})})}async function Qg(t,e,n){const r=Su(t,!0).put({[vw]:e,value:n});return new Qo(r).toPromise()}async function NA(t,e){const n=Su(t,!1).get(e),r=await new Qo(n).toPromise();return r===void 0?null:r.value}function Yg(t,e){const n=Su(t,!0).delete(e);return new Qo(n).toPromise()}const PA=800,bA=3;class ww{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Iu._getInstance(AA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SA(),!this.activeServiceWorker)return;this.sender=new TA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await td();return await Qg(e,ql,"1"),await Yg(e,ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Su(s,!1).getAll();return new Qo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ww.type="LOCAL";const DA=ww;new Wo(3e4,6e4);/**
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
 */function LA(t,e){return e?kn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rf extends If{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OA(t){return hw(t.auth,new Rf(t),t.bypassAuthState)}function VA(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),cA(n,new Rf(t),t.bypassAuthState)}async function jA(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),uA(n,new Rf(t),t.bypassAuthState)}/**
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
 */class Ew{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OA;case"linkViaPopup":case"linkViaRedirect":return jA;case"reauthViaPopup":case"reauthViaRedirect":return VA;default:Yt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const MA=new Wo(2e3,1e4);class Ls extends Ew{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ls.currentPopupAction&&Ls.currentPopupAction.cancel(),Ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MA.get())};e()}}Ls.currentPopupAction=null;/**
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
 */const UA="pendingRedirect",ll=new Map;class FA extends Ew{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ll.get(this.auth._key());if(!e){try{const r=await BA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ll.set(this.auth._key(),e)}return this.bypassAuthState||ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BA(t,e){const n=HA(e),r=$A(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zA(t,e){ll.set(t._key(),e)}function $A(t){return kn(t._redirectPersistence)}function HA(t){return al(UA,t.config.apiKey,t.name)}async function qA(t,e,n=!1){if(tn(t.app))return Promise.reject(Rn(t));const r=cs(t),s=LA(r,e),o=await new FA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const WA=10*60*1e3;class KA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xg(e))}saveEventToCache(e){this.cachedEventUids.add(Xg(e)),this.lastProcessedEventTime=Date.now()}}function Xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xw(t);default:return!1}}/**
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
 */async function QA(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
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
 */const YA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XA=/^https?/;async function JA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QA(t);for(const n of e)try{if(ZA(n))return}catch{}Yt(t,"unauthorized-domain")}function ZA(t){const e=Jh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XA.test(n))return!1;if(YA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const eR=new Wo(3e4,6e4);function Jg(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tR(t){return new Promise((e,n)=>{var r,s,i;function o(){Jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jg(),n(an(t,"network-request-failed"))},timeout:eR.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const l=Wk("iframefcb");return ln()[l]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},aw(`${qk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ul=null,e})}let ul=null;function nR(t){return ul=ul||tR(t),ul}/**
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
 */const rR=new Wo(5e3,15e3),sR="__/auth/iframe",iR="emulator/auth/iframe",oR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ef(e,iR):`https://${t.config.authDomain}/${sR}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=aR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qo(r).slice(1)}`}async function uR(t){const e=await nR(t),n=ln().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:lR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=ln().setTimeout(()=>{i(o)},rR.get());function u(){ln().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const cR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hR=500,dR=600,fR="_blank",pR="http://localhost";class Zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mR(t,e,n,r=hR,s=dR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},cR),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ot().toLowerCase();n&&(l=ew(h)?fR:n),J0(h)&&(e=e||pR,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[T,A])=>`${g}${T}=${A},`,"");if(Vk(h)&&l!=="_self")return gR(e||"",l),new Zg(null);const m=window.open(e||"",l,p);K(m,t,"popup-blocked");try{m.focus()}catch{}return new Zg(m)}function gR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yR="__/auth/handler",_R="emulator/auth/handler",vR=encodeURIComponent("fac");async function ey(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof uw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Go){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${vR}=${encodeURIComponent(u)}`:"";return`${wR(t)}?${qo(l).slice(1)}${h}`}function wR({config:t}){return t.emulator?Ef(t,_R):`https://${t.authDomain}/${yR}`}/**
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
 */const Kc="webStorageSupport";class ER{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gw,this._completeRedirectFn=qA,this._overrideRedirectResult=zA}async _openPopup(e,n,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ey(e,n,r,Jh(),s);return mR(e,o,Af())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ey(e,n,r,Jh(),s);return IA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uR(e),r=new KA(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kc,{type:Kc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Kc];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iw()||Z0()||Tf()}}const xR=ER;var ty="@firebase/auth",ny="1.7.9";/**
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
 */class TR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SR(t){es(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ow(t)},h=new zk(r,s,i,u);return Xk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new Er("auth-internal",e=>{const n=cs(e.getProvider("auth").getImmediate());return(r=>new TR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(ty,ny,IR(t)),on(ty,ny,"esm2017")}/**
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
 */const kR=5*60,AR=O0("authIdTokenMaxAge")||kR;let ry=null;const RR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AR)return;const s=n==null?void 0:n.token;ry!==s&&(ry=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function CR(t=_f()){const e=xu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Yk(t,{popupRedirectResolver:xR,persistence:[DA,EA,gw]}),r=O0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=RR(i.toString());gA(n,o,()=>o(n.currentUser)),mA(n,l=>o(l))}}const s=b0("auth");return s&&Jk(n,`http://${s}`),n}function NR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$k({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",NR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SR("Browser");var sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,Tw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.D=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(I,R,N){for(var k=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)k[Pt-2]=arguments[Pt];return y.prototype[R].apply(I,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,E){E||(E=0);var I=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)I[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;16>R;++R)I[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],R=w.g[2];var N=w.g[3],k=y+(N^E&(R^N))+I[0]+3614090360&4294967295;y=E+(k<<7&4294967295|k>>>25),k=N+(R^y&(E^R))+I[1]+3905402710&4294967295,N=y+(k<<12&4294967295|k>>>20),k=R+(E^N&(y^E))+I[2]+606105819&4294967295,R=N+(k<<17&4294967295|k>>>15),k=E+(y^R&(N^y))+I[3]+3250441966&4294967295,E=R+(k<<22&4294967295|k>>>10),k=y+(N^E&(R^N))+I[4]+4118548399&4294967295,y=E+(k<<7&4294967295|k>>>25),k=N+(R^y&(E^R))+I[5]+1200080426&4294967295,N=y+(k<<12&4294967295|k>>>20),k=R+(E^N&(y^E))+I[6]+2821735955&4294967295,R=N+(k<<17&4294967295|k>>>15),k=E+(y^R&(N^y))+I[7]+4249261313&4294967295,E=R+(k<<22&4294967295|k>>>10),k=y+(N^E&(R^N))+I[8]+1770035416&4294967295,y=E+(k<<7&4294967295|k>>>25),k=N+(R^y&(E^R))+I[9]+2336552879&4294967295,N=y+(k<<12&4294967295|k>>>20),k=R+(E^N&(y^E))+I[10]+4294925233&4294967295,R=N+(k<<17&4294967295|k>>>15),k=E+(y^R&(N^y))+I[11]+2304563134&4294967295,E=R+(k<<22&4294967295|k>>>10),k=y+(N^E&(R^N))+I[12]+1804603682&4294967295,y=E+(k<<7&4294967295|k>>>25),k=N+(R^y&(E^R))+I[13]+4254626195&4294967295,N=y+(k<<12&4294967295|k>>>20),k=R+(E^N&(y^E))+I[14]+2792965006&4294967295,R=N+(k<<17&4294967295|k>>>15),k=E+(y^R&(N^y))+I[15]+1236535329&4294967295,E=R+(k<<22&4294967295|k>>>10),k=y+(R^N&(E^R))+I[1]+4129170786&4294967295,y=E+(k<<5&4294967295|k>>>27),k=N+(E^R&(y^E))+I[6]+3225465664&4294967295,N=y+(k<<9&4294967295|k>>>23),k=R+(y^E&(N^y))+I[11]+643717713&4294967295,R=N+(k<<14&4294967295|k>>>18),k=E+(N^y&(R^N))+I[0]+3921069994&4294967295,E=R+(k<<20&4294967295|k>>>12),k=y+(R^N&(E^R))+I[5]+3593408605&4294967295,y=E+(k<<5&4294967295|k>>>27),k=N+(E^R&(y^E))+I[10]+38016083&4294967295,N=y+(k<<9&4294967295|k>>>23),k=R+(y^E&(N^y))+I[15]+3634488961&4294967295,R=N+(k<<14&4294967295|k>>>18),k=E+(N^y&(R^N))+I[4]+3889429448&4294967295,E=R+(k<<20&4294967295|k>>>12),k=y+(R^N&(E^R))+I[9]+568446438&4294967295,y=E+(k<<5&4294967295|k>>>27),k=N+(E^R&(y^E))+I[14]+3275163606&4294967295,N=y+(k<<9&4294967295|k>>>23),k=R+(y^E&(N^y))+I[3]+4107603335&4294967295,R=N+(k<<14&4294967295|k>>>18),k=E+(N^y&(R^N))+I[8]+1163531501&4294967295,E=R+(k<<20&4294967295|k>>>12),k=y+(R^N&(E^R))+I[13]+2850285829&4294967295,y=E+(k<<5&4294967295|k>>>27),k=N+(E^R&(y^E))+I[2]+4243563512&4294967295,N=y+(k<<9&4294967295|k>>>23),k=R+(y^E&(N^y))+I[7]+1735328473&4294967295,R=N+(k<<14&4294967295|k>>>18),k=E+(N^y&(R^N))+I[12]+2368359562&4294967295,E=R+(k<<20&4294967295|k>>>12),k=y+(E^R^N)+I[5]+4294588738&4294967295,y=E+(k<<4&4294967295|k>>>28),k=N+(y^E^R)+I[8]+2272392833&4294967295,N=y+(k<<11&4294967295|k>>>21),k=R+(N^y^E)+I[11]+1839030562&4294967295,R=N+(k<<16&4294967295|k>>>16),k=E+(R^N^y)+I[14]+4259657740&4294967295,E=R+(k<<23&4294967295|k>>>9),k=y+(E^R^N)+I[1]+2763975236&4294967295,y=E+(k<<4&4294967295|k>>>28),k=N+(y^E^R)+I[4]+1272893353&4294967295,N=y+(k<<11&4294967295|k>>>21),k=R+(N^y^E)+I[7]+4139469664&4294967295,R=N+(k<<16&4294967295|k>>>16),k=E+(R^N^y)+I[10]+3200236656&4294967295,E=R+(k<<23&4294967295|k>>>9),k=y+(E^R^N)+I[13]+681279174&4294967295,y=E+(k<<4&4294967295|k>>>28),k=N+(y^E^R)+I[0]+3936430074&4294967295,N=y+(k<<11&4294967295|k>>>21),k=R+(N^y^E)+I[3]+3572445317&4294967295,R=N+(k<<16&4294967295|k>>>16),k=E+(R^N^y)+I[6]+76029189&4294967295,E=R+(k<<23&4294967295|k>>>9),k=y+(E^R^N)+I[9]+3654602809&4294967295,y=E+(k<<4&4294967295|k>>>28),k=N+(y^E^R)+I[12]+3873151461&4294967295,N=y+(k<<11&4294967295|k>>>21),k=R+(N^y^E)+I[15]+530742520&4294967295,R=N+(k<<16&4294967295|k>>>16),k=E+(R^N^y)+I[2]+3299628645&4294967295,E=R+(k<<23&4294967295|k>>>9),k=y+(R^(E|~N))+I[0]+4096336452&4294967295,y=E+(k<<6&4294967295|k>>>26),k=N+(E^(y|~R))+I[7]+1126891415&4294967295,N=y+(k<<10&4294967295|k>>>22),k=R+(y^(N|~E))+I[14]+2878612391&4294967295,R=N+(k<<15&4294967295|k>>>17),k=E+(N^(R|~y))+I[5]+4237533241&4294967295,E=R+(k<<21&4294967295|k>>>11),k=y+(R^(E|~N))+I[12]+1700485571&4294967295,y=E+(k<<6&4294967295|k>>>26),k=N+(E^(y|~R))+I[3]+2399980690&4294967295,N=y+(k<<10&4294967295|k>>>22),k=R+(y^(N|~E))+I[10]+4293915773&4294967295,R=N+(k<<15&4294967295|k>>>17),k=E+(N^(R|~y))+I[1]+2240044497&4294967295,E=R+(k<<21&4294967295|k>>>11),k=y+(R^(E|~N))+I[8]+1873313359&4294967295,y=E+(k<<6&4294967295|k>>>26),k=N+(E^(y|~R))+I[15]+4264355552&4294967295,N=y+(k<<10&4294967295|k>>>22),k=R+(y^(N|~E))+I[6]+2734768916&4294967295,R=N+(k<<15&4294967295|k>>>17),k=E+(N^(R|~y))+I[13]+1309151649&4294967295,E=R+(k<<21&4294967295|k>>>11),k=y+(R^(E|~N))+I[4]+4149444226&4294967295,y=E+(k<<6&4294967295|k>>>26),k=N+(E^(y|~R))+I[11]+3174756917&4294967295,N=y+(k<<10&4294967295|k>>>22),k=R+(y^(N|~E))+I[2]+718787259&4294967295,R=N+(k<<15&4294967295|k>>>17),k=E+(N^(R|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(k<<21&4294967295|k>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var E=y-this.blockSize,I=this.B,R=this.h,N=0;N<y;){if(R==0)for(;N<=E;)s(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<y;)if(I[R++]=w.charCodeAt(N++),R==this.blockSize){s(this,I),R=0;break}}else for(;N<y;)if(I[R++]=w[N++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var E=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=E&255,E/=256;for(this.u(w),w=Array(16),y=E=0;4>y;++y)for(var I=0;32>I;I+=8)w[E++]=this.g[y]>>>I&255;return w};function i(w,y){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function o(w,y){this.h=y;for(var E=[],I=!0,R=w.length-1;0<=R;R--){var N=w[R]|0;I&&N==y||(E[R]=N,I=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return C(h(-w));for(var y=[],E=1,I=0;w>=E;I++)y[I]=w/E|0,E*=4294967296;return new o(y,0)}function p(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return C(p(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),I=m,R=0;R<w.length;R+=8){var N=Math.min(8,w.length-R),k=parseInt(w.substring(R,R+N),y);8>N?(N=h(Math.pow(y,N)),I=I.j(N).add(h(k))):(I=I.j(E),I=I.add(h(k)))}return I}var m=u(0),g=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();for(var w=0,y=1,E=0;E<this.g.length;E++){var I=this.i(E);w+=(0<=I?I:4294967296+I)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(P(this))return"-"+C(this).toString(w);for(var y=h(Math.pow(w,6)),E=this,I="";;){var R=D(E,y).g;E=x(E,R.j(y));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=R,A(E))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=x(this,w),P(w)?-1:A(w)?0:1};function C(w){for(var y=w.g.length,E=[],I=0;I<y;I++)E[I]=~w.g[I];return new o(E,~w.h).add(g)}t.abs=function(){return P(this)?C(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0,R=0;R<=y;R++){var N=I+(this.i(R)&65535)+(w.i(R)&65535),k=(N>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);I=k>>>16,N&=65535,k&=65535,E[R]=k<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function x(w,y){return w.add(C(y))}t.j=function(w){if(A(this)||A(w))return m;if(P(this))return P(w)?C(this).j(C(w)):C(C(this).j(w));if(P(w))return C(this.j(C(w)));if(0>this.l(T)&&0>w.l(T))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,E=[],I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<w.g.length;R++){var N=this.i(I)>>>16,k=this.i(I)&65535,Pt=w.i(R)>>>16,Dr=w.i(R)&65535;E[2*I+2*R]+=k*Dr,v(E,2*I+2*R),E[2*I+2*R+1]+=N*Dr,v(E,2*I+2*R+1),E[2*I+2*R+1]+=k*Pt,v(E,2*I+2*R+1),E[2*I+2*R+2]+=N*Pt,v(E,2*I+2*R+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new o(E,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function S(w,y){this.g=w,this.h=y}function D(w,y){if(A(y))throw Error("division by zero");if(A(w))return new S(m,m);if(P(w))return y=D(C(w),y),new S(C(y.g),C(y.h));if(P(y))return y=D(w,C(y)),new S(C(y.g),y.h);if(30<w.g.length){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,I=y;0>=I.l(w);)E=M(E),I=M(I);var R=V(E,1),N=V(I,1);for(I=V(I,2),E=V(E,2);!A(I);){var k=N.add(I);0>=k.l(w)&&(R=R.add(E),N=k),I=V(I,1),E=V(E,1)}return y=x(w,R.j(y)),new S(R,y)}for(R=m;0<=w.l(y);){for(E=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=h(E),k=N.j(y);P(k)||0<k.l(w);)E-=I,N=h(E),k=N.j(y);A(N)&&(N=g),R=R.add(N),w=x(w,k)}return new S(R,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)&w.i(I);return new o(E,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)|w.i(I);return new o(E,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)^w.i(I);return new o(E,this.h^w.h)};function M(w){for(var y=w.g.length+1,E=[],I=0;I<y;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(E,w.h)}function V(w,y){var E=y>>5;y%=32;for(var I=w.g.length-E,R=[],N=0;N<I;N++)R[N]=0<y?w.i(N+E)>>>y|w.i(N+E+1)<<32-y:w.i(N+E);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Tw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Kr=o}).apply(typeof sy<"u"?sy:typeof self<"u"?self:typeof window<"u"?window:{});var Ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Iw,Hi,Sw,cl,nd,kw,Aw,Rw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ba=="object"&&Ba];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var b=a[_];if(!(b in f))break e;f=f[b]}a=a[a.length-1],_=f[a],c=c(_),c!=_&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var f=0,_=!1,b={next:function(){if(!_&&f<a.length){var L=f++;return{value:c(L,a[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function m(a,c,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,_),a.apply(c,b)}}return function(){return a.apply(c,arguments)}}function g(a,c,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function T(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,b,L){for(var B=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)B[ce-2]=arguments[ce];return c.prototype[b].apply(_,B)}}function P(a){const c=a.length;if(0<c){const f=Array(c);for(let _=0;_<c;_++)f[_]=a[_];return f}return[]}function C(a,c){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(u(_)){const b=a.length||0,L=_.length||0;a.length=b+L;for(let B=0;B<L;B++)a[b+B]=_[B]}else a.push(_)}}class x{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function V(a,c,f){for(const _ in a)c.call(f,a[_],_,a)}function w(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function y(a){const c={};for(const f in a)c[f]=a[f];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let f,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(f in _)a[f]=_[f];for(let L=0;L<E.length;L++)f=E[L],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function R(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function k(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Pt{constructor(){this.h=this.g=null}add(c,f){const _=Dr.get();_.set(c,f),this.h?this.h.next=_:this.g=_,this.h=_}}var Dr=new x(()=>new pi,a=>a.reset());class pi{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let fn,z=!1,Q=new Pt,J=()=>{const a=l.Promise.resolve(void 0);fn=()=>{a.then(ve)}};var ve=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(f){N(f)}var c=Dr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var pn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function mn(a,c){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(M){e:{try{D(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:gn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&mn.aa.h.call(this)}}A(mn,Re);var gn={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),fx=0;function px(a,c,f,_,b){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!_,this.ha=b,this.key=++fx,this.da=this.fa=!1}function ia(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function oa(a){this.src=a,this.g={},this.h=0}oa.prototype.add=function(a,c,f,_,b){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var B=Ku(a,c,_,b);return-1<B?(c=a[B],f||(c.fa=!1)):(c=new px(c,this.src,L,!!_,b),c.fa=f,a.push(c)),c};function Wu(a,c){var f=c.type;if(f in a.g){var _=a.g[f],b=Array.prototype.indexOf.call(_,c,void 0),L;(L=0<=b)&&Array.prototype.splice.call(_,b,1),L&&(ia(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ku(a,c,f,_){for(var b=0;b<a.length;++b){var L=a[b];if(!L.da&&L.listener==c&&L.capture==!!f&&L.ha==_)return b}return-1}var Gu="closure_lm_"+(1e6*Math.random()|0),Qu={};function Ep(a,c,f,_,b){if(Array.isArray(c)){for(var L=0;L<c.length;L++)Ep(a,c[L],f,_,b);return null}return f=Ip(f),a&&a[yn]?a.K(c,f,h(_)?!!_.capture:!1,b):mx(a,c,f,!1,_,b)}function mx(a,c,f,_,b,L){if(!c)throw Error("Invalid event type");var B=h(b)?!!b.capture:!!b,ce=Xu(a);if(ce||(a[Gu]=ce=new oa(a)),f=ce.add(c,f,_,B,L),f.proxy)return f;if(_=gx(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)pn||(b=B),b===void 0&&(b=!1),a.addEventListener(c.toString(),_,b);else if(a.attachEvent)a.attachEvent(Tp(c.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function gx(){function a(f){return c.call(a.src,a.listener,f)}const c=yx;return a}function xp(a,c,f,_,b){if(Array.isArray(c))for(var L=0;L<c.length;L++)xp(a,c[L],f,_,b);else _=h(_)?!!_.capture:!!_,f=Ip(f),a&&a[yn]?(a=a.i,c=String(c).toString(),c in a.g&&(L=a.g[c],f=Ku(L,f,_,b),-1<f&&(ia(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[c],a.h--)))):a&&(a=Xu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Ku(c,f,_,b)),(f=-1<a?c[a]:null)&&Yu(f))}function Yu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[yn])Wu(c.i,a);else{var f=a.type,_=a.proxy;c.removeEventListener?c.removeEventListener(f,_,a.capture):c.detachEvent?c.detachEvent(Tp(f),_):c.addListener&&c.removeListener&&c.removeListener(_),(f=Xu(c))?(Wu(f,a),f.h==0&&(f.src=null,c[Gu]=null)):ia(a)}}}function Tp(a){return a in Qu?Qu[a]:Qu[a]="on"+a}function yx(a,c){if(a.da)a=!0;else{c=new mn(c,this);var f=a.listener,_=a.ha||a.src;a.fa&&Yu(a),a=f.call(_,c)}return a}function Xu(a){return a=a[Gu],a instanceof oa?a:null}var Ju="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ip(a){return typeof a=="function"?a:(a[Ju]||(a[Ju]=function(c){return a.handleEvent(c)}),a[Ju])}function Qe(){ue.call(this),this.i=new oa(this),this.M=this,this.F=null}A(Qe,ue),Qe.prototype[yn]=!0,Qe.prototype.removeEventListener=function(a,c,f,_){xp(this,a,c,f,_)};function at(a,c){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=c.type||c,typeof c=="string")c=new Re(c,a);else if(c instanceof Re)c.target=c.target||a;else{var b=c;c=new Re(_,a),I(c,b)}if(b=!0,f)for(var L=f.length-1;0<=L;L--){var B=c.g=f[L];b=aa(B,_,!0,c)&&b}if(B=c.g=a,b=aa(B,_,!0,c)&&b,b=aa(B,_,!1,c)&&b,f)for(L=0;L<f.length;L++)B=c.g=f[L],b=aa(B,_,!1,c)&&b}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],_=0;_<f.length;_++)ia(f[_]);delete a.g[c],a.h--}}this.F=null},Qe.prototype.K=function(a,c,f,_){return this.i.add(String(a),c,!1,f,_)},Qe.prototype.L=function(a,c,f,_){return this.i.add(String(a),c,!0,f,_)};function aa(a,c,f,_){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,L=0;L<c.length;++L){var B=c[L];if(B&&!B.da&&B.capture==f){var ce=B.listener,Fe=B.ha||B.src;B.fa&&Wu(a.i,B),b=ce.call(Fe,_)!==!1&&b}}return b&&!_.defaultPrevented}function Sp(a,c,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function kp(a){a.g=Sp(()=>{a.g=null,a.i&&(a.i=!1,kp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class _x extends ue{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:kp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(a){ue.call(this),this.h=a,this.g={}}A(mi,ue);var Ap=[];function Rp(a){V(a.g,function(c,f){this.g.hasOwnProperty(f)&&Yu(c)},a),a.g={}}mi.prototype.N=function(){mi.aa.N.call(this),Rp(this)},mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zu=l.JSON.stringify,vx=l.JSON.parse,wx=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ec(){}ec.prototype.h=null;function Cp(a){return a.h||(a.h=a.i())}function Np(){}var gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tc(){Re.call(this,"d")}A(tc,Re);function nc(){Re.call(this,"c")}A(nc,Re);var Lr={},Pp=null;function la(){return Pp=Pp||new Qe}Lr.La="serverreachability";function bp(a){Re.call(this,Lr.La,a)}A(bp,Re);function yi(a){const c=la();at(c,new bp(c))}Lr.STAT_EVENT="statevent";function Dp(a,c){Re.call(this,Lr.STAT_EVENT,a),this.stat=c}A(Dp,Re);function lt(a){const c=la();at(c,new Dp(c,a))}Lr.Ma="timingevent";function Lp(a,c){Re.call(this,Lr.Ma,a),this.size=c}A(Lp,Re);function _i(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function Ex(a,c,f,_,b,L){a.info(function(){if(a.g)if(L)for(var B="",ce=L.split("&"),Fe=0;Fe<ce.length;Fe++){var ie=ce[Fe].split("=");if(1<ie.length){var Ye=ie[0];ie=ie[1];var Xe=Ye.split("_");B=2<=Xe.length&&Xe[1]=="type"?B+(Ye+"="+ie+"&"):B+(Ye+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+c+`
`+f+`
`+B})}function xx(a,c,f,_,b,L,B){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+c+`
`+f+`
`+L+" "+B})}function fs(a,c,f,_){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ix(a,f)+(_?" "+_:"")})}function Tx(a,c){a.info(function(){return"TIMEOUT: "+c})}vi.prototype.info=function(){};function Ix(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var b=_[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<b.length;B++)b[B]=""}}}}return Zu(f)}catch{return c}}var ua={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Op={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rc;function ca(){}A(ca,ec),ca.prototype.g=function(){return new XMLHttpRequest},ca.prototype.i=function(){return{}},rc=new ca;function $n(a,c,f,_){this.j=a,this.i=c,this.l=f,this.R=_||1,this.U=new mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vp}function Vp(){this.i=null,this.g="",this.h=!1}var jp={},sc={};function ic(a,c,f){a.L=1,a.v=pa(_n(c)),a.m=f,a.P=!0,Mp(a,null)}function Mp(a,c){a.F=Date.now(),ha(a),a.A=_n(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Jp(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Vp,a.g=gm(a.j,f?c:null,!a.m),0<a.O&&(a.M=new _x(g(a.Y,a,a.g),a.O)),c=a.U,f=a.g,_=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ap[0]=b.toString()),b=Ap);for(var L=0;L<b.length;L++){var B=Ep(f,b[L],_||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),yi(),Ex(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const c=this.M;c&&vn(a)==3?c.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=vn(this.g);var c=this.g.Ba();const gs=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||im(this.g)))){this.J||Xe!=4||c==7||(c==8||0>=gs?yi(3):yi(2)),oc(this);var f=this.g.Z();this.X=f;t:if(Up(this)){var _=im(this.g);a="";var b=_.length,L=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),wi(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,a+=this.h.i.decode(_[c],{stream:!(L&&c==b-1)});_.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,xx(this.i,this.u,this.A,this.l,this.R,Xe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Fe=this.g;if((ce=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ce)){var ie=ce;break t}}ie=null}if(f=ie)fs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ac(this,f);else{this.o=!1,this.s=3,lt(12),Or(this),wi(this);break e}}if(this.P){f=!0;let Ut;for(;!this.J&&this.C<B.length;)if(Ut=Sx(this,B),Ut==sc){Xe==4&&(this.s=4,lt(14),f=!1),fs(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==jp){this.s=4,lt(15),fs(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else fs(this.i,this.l,Ut,null),ac(this,Ut);if(Up(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||B.length!=0||this.h.h||(this.s=1,lt(16),f=!1),this.o=this.o&&f,!f)fs(this.i,this.l,B,"[Invalid Chunked Response]"),Or(this),wi(this);else if(0<B.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),fc(Ye),Ye.M=!0,lt(11))}}else fs(this.i,this.l,B,null),ac(this,B);Xe==4&&Or(this),this.o&&!this.J&&(Xe==4?dm(this.j,this):(this.o=!1,ha(this)))}else zx(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Or(this),wi(this)}}}catch{}finally{}};function Up(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Sx(a,c){var f=a.C,_=c.indexOf(`
`,f);return _==-1?sc:(f=Number(c.substring(f,_)),isNaN(f)?jp:(_+=1,_+f>c.length?sc:(c=c.slice(_,_+f),a.C=_+f,c)))}$n.prototype.cancel=function(){this.J=!0,Or(this)};function ha(a){a.S=Date.now()+a.I,Fp(a,a.I)}function Fp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_i(g(a.ba,a),c)}function oc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Tx(this.i,this.A),this.L!=2&&(yi(),lt(17)),Or(this),this.s=2,wi(this)):Fp(this,this.S-a)};function wi(a){a.j.G==0||a.J||dm(a.j,a)}function Or(a){oc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Rp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function ac(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||lc(f.h,a))){if(!a.K&&lc(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(c)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)wa(f),_a(f);else break e;dc(f),lt(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=_i(g(f.Za,f),6e3));if(1>=$p(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else jr(f,11)}else if((a.K||f.g==a)&&wa(f),!v(c))for(b=f.Da.g.parse(c),c=0;c<b.length;c++){let ie=b[c];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const Ye=ie[3];Ye!=null&&(f.la=Ye,f.j.info("VER="+f.la));const Xe=ie[4];Xe!=null&&(f.Aa=Xe,f.j.info("SVER="+f.Aa));const gs=ie[5];gs!=null&&typeof gs=="number"&&0<gs&&(_=1.5*gs,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const Ut=a.g;if(Ut){const xa=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xa){var L=_.h;L.g||xa.indexOf("spdy")==-1&&xa.indexOf("quic")==-1&&xa.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(uc(L,L.h),L.h=null))}if(_.D){const pc=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;pc&&(_.ya=pc,de(_.I,_.D,pc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var B=a;if(_.qa=mm(_,_.J?_.ia:null,_.W),B.K){Hp(_.h,B);var ce=B,Fe=_.L;Fe&&(ce.I=Fe),ce.B&&(oc(ce),ha(ce)),_.g=B}else cm(_);0<f.i.length&&va(f)}else ie[0]!="stop"&&ie[0]!="close"||jr(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?jr(f,7):hc(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}yi(4)}catch{}}var kx=class{constructor(a,c){this.g=a,this.map=c}};function Bp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function $p(a){return a.h?1:a.g?a.g.size:0}function lc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function uc(a,c){a.g?a.g.add(c):a.h=c}function Hp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Bp.prototype.cancel=function(){if(this.i=qp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return P(a.i)}function Ax(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,_=0;_<f;_++)c.push(a[_]);return c}c=[],f=0;for(_ in a)c[f++]=a[_];return c}function Rx(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const _ in a)c[f++]=_;return c}}}function Wp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=Rx(a),_=Ax(a),b=_.length,L=0;L<b;L++)c.call(void 0,_[L],f&&f[L],a)}var Kp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cx(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),b=null;if(0<=_){var L=a[f].substring(0,_);b=a[f].substring(_+1)}else L=a[f];c(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,da(this,a.j),this.o=a.o,this.g=a.g,fa(this,a.s),this.l=a.l;var c=a.i,f=new Ti;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Gp(this,f),this.m=a.m}else a&&(c=String(a).match(Kp))?(this.h=!1,da(this,c[1]||"",!0),this.o=Ei(c[2]||""),this.g=Ei(c[3]||"",!0),fa(this,c[4]),this.l=Ei(c[5]||"",!0),Gp(this,c[6]||"",!0),this.m=Ei(c[7]||"")):(this.h=!1,this.i=new Ti(null,this.h))}Vr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(xi(c,Qp,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(xi(c,Qp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(xi(f,f.charAt(0)=="/"?bx:Px,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",xi(f,Lx)),a.join("")};function _n(a){return new Vr(a)}function da(a,c,f){a.j=f?Ei(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function fa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Gp(a,c,f){c instanceof Ti?(a.i=c,Ox(a.i,a.h)):(f||(c=xi(c,Dx)),a.i=new Ti(c,a.h))}function de(a,c,f){a.i.set(c,f)}function pa(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ei(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function xi(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,Nx),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Nx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Qp=/[#\/\?@]/g,Px=/[#\?:]/g,bx=/[#\?]/g,Dx=/[#\?@]/g,Lx=/#/g;function Ti(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&Cx(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=Ti.prototype,t.add=function(a,c){Hn(this),this.i=null,a=ps(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function Yp(a,c){Hn(a),c=ps(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Xp(a,c){return Hn(a),c=ps(a,c),a.g.has(c)}t.forEach=function(a,c){Hn(this),this.g.forEach(function(f,_){f.forEach(function(b){a.call(c,b,_,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let _=0;_<c.length;_++){const b=a[_];for(let L=0;L<b.length;L++)f.push(c[_])}return f},t.V=function(a){Hn(this);let c=[];if(typeof a=="string")Xp(this,a)&&(c=c.concat(this.g.get(ps(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Hn(this),this.i=null,a=ps(this,a),Xp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Jp(a,c,f){Yp(a,c),0<f.length&&(a.i=null,a.g.set(ps(a,c),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var _=c[f];const L=encodeURIComponent(String(_)),B=this.V(_);for(_=0;_<B.length;_++){var b=L;B[_]!==""&&(b+="="+encodeURIComponent(String(B[_]))),a.push(b)}}return this.i=a.join("&")};function ps(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Ox(a,c){c&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(f,_){var b=_.toLowerCase();_!=b&&(Yp(this,_),Jp(this,b,f))},a)),a.j=c}function Vx(a,c){const f=new vi;if(l.Image){const _=new Image;_.onload=T(qn,f,"TestLoadImage: loaded",!0,c,_),_.onerror=T(qn,f,"TestLoadImage: error",!1,c,_),_.onabort=T(qn,f,"TestLoadImage: abort",!1,c,_),_.ontimeout=T(qn,f,"TestLoadImage: timeout",!1,c,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else c(!1)}function jx(a,c){const f=new vi,_=new AbortController,b=setTimeout(()=>{_.abort(),qn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:_.signal}).then(L=>{clearTimeout(b),L.ok?qn(f,"TestPingServer: ok",!0,c):qn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),qn(f,"TestPingServer: error",!1,c)})}function qn(a,c,f,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(f)}catch{}}function Mx(){this.g=new wx}function Ux(a,c,f){const _=f||"";try{Wp(a,function(b,L){let B=b;h(b)&&(B=Zu(b)),c.push(_+L+"="+encodeURIComponent(B))})}catch(b){throw c.push(_+"type="+encodeURIComponent("_badmap")),b}}function ma(a){this.l=a.Ub||null,this.j=a.eb||!1}A(ma,ec),ma.prototype.g=function(){return new ga(this.l,this.j)},ma.prototype.i=function(a){return function(){return a}}({});function ga(a,c){Qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ga,Qe),t=ga.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Si(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ii(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ii(this):Si(this),this.readyState==3&&Zp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ii(this))},t.Qa=function(a){this.g&&(this.response=a,Ii(this))},t.ga=function(){this.g&&Ii(this)};function Ii(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Si(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function Si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function em(a){let c="";return V(a,function(f,_){c+=_,c+=":",c+=f,c+=`\r
`}),c}function cc(a,c,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=em(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):de(a,c,f))}function Ie(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ie,Qe);var Fx=/^https?$/i,Bx=["POST","PUT"];t=Ie.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rc.g(),this.v=this.o?Cp(this.o):Cp(rc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(L){tm(this,L);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)f.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())f.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Bx,c,void 0))||_||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of f)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sm(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){tm(this,L)}};function tm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,nm(a),ya(a)}function nm(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,at(this,"complete"),at(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),Ie.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?rm(this):this.bb())},t.bb=function(){rm(this)};function rm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)Sp(a.Ea,0,a);else if(at(a,"readystatechange"),vn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var _;if(_=B===0){var b=String(a.D).match(Kp)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),_=!Fx.test(b?b.toLowerCase():"")}f=_}if(f)at(a,"complete"),at(a,"success");else{a.m=6;try{var L=2<vn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",nm(a)}}finally{ya(a)}}}}function ya(a,c){if(a.g){sm(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||at(a,"ready");try{f.onreadystatechange=_}catch{}}}function sm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),vx(c)}};function im(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function zx(a){const c={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(v(a[_]))continue;var f=R(a[_]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=c[b]||[];c[b]=L,L.push(f)}w(c,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ki(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function om(a){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ki("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ki("baseRetryDelayMs",5e3,a),this.cb=ki("retryDelaySeedMs",1e4,a),this.Wa=ki("forwardChannelMaxRetries",2,a),this.wa=ki("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bp(a&&a.concurrentRequestLimit),this.Da=new Mx,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=om.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,_){lt(0),this.W=a,this.H=c||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=mm(this,null,this.W),va(this)};function hc(a){if(am(a),a.G==3){var c=a.U++,f=_n(a.I);if(de(f,"SID",a.K),de(f,"RID",c),de(f,"TYPE","terminate"),Ai(a,f),c=new $n(a,a.j,c),c.L=2,c.v=pa(_n(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=gm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ha(c)}pm(a)}function _a(a){a.g&&(fc(a),a.g.cancel(),a.g=null)}function am(a){_a(a),a.u&&(l.clearTimeout(a.u),a.u=null),wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function va(a){if(!zp(a.h)&&!a.s){a.s=!0;var c=a.Ga;fn||J(),z||(fn(),z=!0),Q.add(c,a),a.B=0}}function $x(a,c){return $p(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_i(g(a.Ga,a,c),fm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new $n(this,this.j,a);let L=this.o;if(this.S&&(L?(L=y(L),I(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(c+=_,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=um(this,b,c),f=_n(this.I),de(f,"RID",a),de(f,"CVER",22),this.D&&de(f,"X-HTTP-Session-Id",this.D),Ai(this,f),L&&(this.O?c="headers="+encodeURIComponent(String(em(L)))+"&"+c:this.m&&cc(f,this.m,L)),uc(this.h,b),this.Ua&&de(f,"TYPE","init"),this.P?(de(f,"$req",c),de(f,"SID","null"),b.T=!0,ic(b,f,null)):ic(b,f,c),this.G=2}}else this.G==3&&(a?lm(this,a):this.i.length==0||zp(this.h)||lm(this))};function lm(a,c){var f;c?f=c.l:f=a.U++;const _=_n(a.I);de(_,"SID",a.K),de(_,"RID",f),de(_,"AID",a.T),Ai(a,_),a.m&&a.o&&cc(_,a.m,a.o),f=new $n(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=um(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),uc(a.h,f),ic(f,_,c)}function Ai(a,c){a.H&&V(a.H,function(f,_){de(c,_,f)}),a.l&&Wp({},function(f,_){de(c,_,f)})}function um(a,c,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var b=a.i;let L=-1;for(;;){const B=["count="+f];L==-1?0<f?(L=b[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let ce=!0;for(let Fe=0;Fe<f;Fe++){let ie=b[Fe].g;const Ye=b[Fe].map;if(ie-=L,0>ie)L=Math.max(0,b[Fe].g-100),ce=!1;else try{Ux(Ye,B,"req"+ie+"_")}catch{_&&_(Ye)}}if(ce){_=B.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,_}function cm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;fn||J(),z||(fn(),z=!0),Q.add(c,a),a.v=0}}function dc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_i(g(a.Fa,a),fm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,hm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_i(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),_a(this),hm(this))};function fc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function hm(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=_n(a.qa);de(c,"RID","rpc"),de(c,"SID",a.K),de(c,"AID",a.T),de(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(c,"TO",a.ja),de(c,"TYPE","xmlhttp"),Ai(a,c),a.m&&a.o&&cc(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=pa(_n(c)),f.m=null,f.P=!0,Mp(f,a)}t.Za=function(){this.C!=null&&(this.C=null,_a(this),dc(this),lt(19))};function wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function dm(a,c){var f=null;if(a.g==c){wa(a),fc(a),a.g=null;var _=2}else if(lc(a.h,c))f=c.D,Hp(a.h,c),_=1;else return;if(a.G!=0){if(c.o)if(_==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var b=a.B;_=la(),at(_,new Lp(_,f)),va(a)}else cm(a);else if(b=c.s,b==3||b==0&&0<c.X||!(_==1&&$x(a,c)||_==2&&dc(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),b){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function fm(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function jr(a,c){if(a.j.info("Error code "+c),c==2){var f=g(a.fb,a),_=a.Xa;const b=!_;_=new Vr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||da(_,"https"),pa(_),b?Vx(_.toString(),f):jx(_.toString(),f)}else lt(2);a.G=0,a.l&&a.l.sa(c),pm(a),am(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function pm(a){if(a.G=0,a.ka=[],a.l){const c=qp(a.h);(c.length!=0||a.i.length!=0)&&(C(a.ka,c),C(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function mm(a,c,f){var _=f instanceof Vr?_n(f):new Vr(f);if(_.g!="")c&&(_.g=c+"."+_.g),fa(_,_.s);else{var b=l.location;_=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var L=new Vr(null);_&&da(L,_),c&&(L.g=c),b&&fa(L,b),f&&(L.l=f),_=L}return f=a.D,c=a.ya,f&&c&&de(_,f,c),de(_,"VER",a.la),Ai(a,_),_}function gm(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ie(new ma({eb:f})):new Ie(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ym(){}t=ym.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ea(){}Ea.prototype.g=function(a,c){return new Et(a,c)};function Et(a,c){Qe.call(this),this.g=new om(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ms(this)}A(Et,Qe),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){hc(this.g)},Et.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Zu(a),a=f);c.i.push(new kx(c.Ya++,a)),c.G==3&&va(c)},Et.prototype.N=function(){this.g.l=null,delete this.j,hc(this.g),delete this.g,Et.aa.N.call(this)};function _m(a){tc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}A(_m,tc);function vm(){nc.call(this),this.status=1}A(vm,nc);function ms(a){this.g=a}A(ms,ym),ms.prototype.ua=function(){at(this.g,"a")},ms.prototype.ta=function(a){at(this.g,new _m(a))},ms.prototype.sa=function(a){at(this.g,new vm)},ms.prototype.ra=function(){at(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Rw=function(){return new Ea},Aw=function(){return la()},kw=Lr,nd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ua.NO_ERROR=0,ua.TIMEOUT=8,ua.HTTP_ERROR=6,cl=ua,Op.COMPLETE="complete",Sw=Op,Np.EventType=gi,gi.OPEN="a",gi.CLOSE="b",gi.ERROR="c",gi.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,Hi=Np,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,Iw=Ie}).apply(typeof Ba<"u"?Ba:typeof self<"u"?self:typeof window<"u"?window:{});const iy="@firebase/firestore";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let ci="10.14.0";/**
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
 */const rs=new gf("@firebase/firestore");function Vi(){return rs.logLevel}function q(t,...e){if(rs.logLevel<=ne.DEBUG){const n=e.map(Cf);rs.debug(`Firestore (${ci}): ${t}`,...n)}}function jn(t,...e){if(rs.logLevel<=ne.ERROR){const n=e.map(Cf);rs.error(`Firestore (${ci}): ${t}`,...n)}}function Zs(t,...e){if(rs.logLevel<=ne.WARN){const n=e.map(Cf);rs.warn(`Firestore (${ci}): ${t}`,...n)}}function Cf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ci}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function le(t,e){t||G()}function X(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Cw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class bR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DR{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new Cw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new tt(e)}}class LR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new VR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function MR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Nw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=MR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ve(0,0))}static max(){return new Y(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Po{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Po.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Po?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends Po{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const UR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Po{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return UR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(pe.fromString(e))}static fromName(e){return new W(pe.fromString(e).popFirst(5))}static empty(){return new W(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new pe(e.slice()))}}function FR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new xr(s,W.empty(),e)}function BR(t){return new xr(t.readTime,t.key,-1)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(Y.min(),W.empty(),-1)}static max(){return new xr(Y.max(),W.empty(),-1)}}function zR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const $R="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yo(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==$R)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function qR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Nf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Nf.oe=-1;function ku(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function WR(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Te{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}}class za{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ay(this.data.getIterator())}getIteratorFrom(e){return new ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new It([])}unionWith(e){let n=new qe($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bw("Invalid base64 string: "+i):i}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const KR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(le(!!t),typeof t=="string"){let e=0;const n=KR.exec(t);if(le(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */function Pf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bf(t){const e=t.mapValue.fields.__previous_value__;return Pf(e)?bf(e):e}function bo(t){const e=Tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class GR{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Do{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Do("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Do&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $a={mapValue:{}};function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pf(t)?4:YR(t)?9007199254740991:QR(t)?10:11:G()}function hn(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bo(t).isEqual(bo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),l=Tr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ss(s.bytesValue).isEqual(ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ce(s.doubleValue),l=Ce(i.doubleValue);return o===l?Kl(o)===Kl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(oy(o)!==oy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!hn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Lo(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=is(t),r=is(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ce(i.integerValue||i.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ly(t.timestampValue,e.timestampValue);case 4:return ly(bo(t),bo(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ss(i),u=ss(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=oe(l[h],u[h]);if(p!==0)return p}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=oe(Ce(i.latitude),Ce(o.latitude));return l!==0?l:oe(Ce(i.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return uy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,p;const m=i.fields||{},g=o.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=oe(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((p=A==null?void 0:A.values)===null||p===void 0?void 0:p.length)||0);return P!==0?P:uy(T,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===$a.mapValue&&o===$a.mapValue)return 0;if(i===$a.mapValue)return 1;if(o===$a.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=oe(u[m],p[m]);if(g!==0)return g;const T=ti(l[u[m]],h[p[m]]);if(T!==0)return T}return oe(u.length,p.length)}(t.mapValue,e.mapValue);default:throw G()}}function ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Tr(t),r=Tr(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function uy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ti(n[s],r[s]);if(i)return i}return oe(n.length,r.length)}function ni(t){return rd(t)}function rd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=rd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${rd(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function cy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sd(t){return!!t&&"integerValue"in t}function Df(t){return!!t&&"arrayValue"in t}function hy(t){return!!t&&"nullValue"in t}function dy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hl(t){return!!t&&"mapValue"in t}function QR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function so(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=so(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=so(n)}setAll(e){let n=$e.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=so(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];hl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new gt(so(this.value))}}function Dw(t){const e=[];return hs(t.fields,(n,r)=>{const s=new $e([n]);if(hl(r)){const i=Dw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new It(e)}/**
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
 */class rt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,Y.min(),Y.min(),Y.min(),gt.empty(),0)}static newFoundDocument(e,n,r,s){return new rt(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new rt(e,2,n,Y.min(),Y.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,Y.min(),Y.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gl{constructor(e,n){this.position=e,this.inclusive=n}}function fy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ti(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function py(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function XR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Lw{}class De extends Lw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZR(e,n,r):n==="array-contains"?new nC(e,r):n==="in"?new rC(e,r):n==="not-in"?new sC(e,r):n==="array-contains-any"?new iC(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eC(e,r):new tC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends Lw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Xt(e,n)}matches(e){return Ow(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ow(t){return t.op==="and"}function Vw(t){return JR(t)&&Ow(t)}function JR(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function id(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(Vw(t))return t.filters.map(e=>id(e)).join(",");{const e=t.filters.map(n=>id(n)).join(",");return`${t.op}(${e})`}}function jw(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(t,e):t instanceof Xt?function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&jw(o,s.filters[l]),!0):!1}(t,e):void G()}function Mw(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${ni(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(Mw).join(" ,")+"}"}(t):"Filter"}class ZR extends De{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class eC extends De{constructor(e,n){super(e,"in",n),this.keys=Uw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tC extends De{constructor(e,n){super(e,"not-in",n),this.keys=Uw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Uw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class nC extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Df(n)&&Lo(n.arrayValue,this.value)}}class rC extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class sC extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lo(this.value.arrayValue,n)}}class iC extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Df(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
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
 */class oC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function my(t,e=null,n=[],r=[],s=null,i=null,o=null){return new oC(t,e,n,r,s,i,o)}function Lf(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>id(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ku(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ni(r)).join(",")),e.ue=n}return e.ue}function Of(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!py(t.startAt,e.startAt)&&py(t.endAt,e.endAt)}function od(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class hi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aC(t,e,n,r,s,i,o,l){return new hi(t,e,n,r,s,i,o,l)}function Au(t){return new hi(t)}function gy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fw(t){return t.collectionGroup!==null}function io(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Oo(i,r))}),n.has($e.keyField().canonicalString())||e.ce.push(new Oo($e.keyField(),r))}return e.ce}function un(t){const e=X(t);return e.le||(e.le=lC(e,io(t))),e.le}function lC(t,e){if(t.limitType==="F")return my(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oo(s.field,i)});const n=t.endAt?new Gl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gl(t.startAt.position,t.startAt.inclusive):null;return my(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ad(t,e){const n=t.filters.concat([e]);return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ql(t,e,n){return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ru(t,e){return Of(un(t),un(e))&&t.limitType===e.limitType}function Bw(t){return`${Lf(un(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Mw(s)).join(", ")}]`),ku(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ni(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ni(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function Cu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of io(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=fy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,io(r),s)||r.endAt&&!function(o,l,u){const h=fy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,io(r),s))}(t,e)}function uC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zw(t){return(e,n)=>{let r=!1;for(const s of io(t)){const i=cC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cC(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?ti(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Pw(this.inner)}size(){return this.innerSize}}/**
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
 */const hC=new Te(W.comparator);function Mn(){return hC}const $w=new Te(W.comparator);function qi(...t){let e=$w;for(const n of t)e=e.insert(n.key,n);return e}function Hw(t){let e=$w;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hr(){return oo()}function qw(){return oo()}function oo(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const dC=new Te(W.comparator),fC=new qe(W.comparator);function te(...t){let e=fC;for(const n of t)e=e.add(n);return e}const pC=new qe(oe);function mC(){return pC}/**
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
 */function Vf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function Ww(t){return{integerValue:""+t}}function gC(t,e){return WR(e)?Ww(e):Vf(t,e)}/**
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
 */class Nu{constructor(){this._=void 0}}function yC(t,e,n){return t instanceof Vo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Pf(i)&&(i=bf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof jo?Gw(t,e):t instanceof Mo?Qw(t,e):function(s,i){const o=Kw(s,i),l=yy(o)+yy(s.Pe);return sd(o)&&sd(s.Pe)?Ww(l):Vf(s.serializer,l)}(t,e)}function _C(t,e,n){return t instanceof jo?Gw(t,e):t instanceof Mo?Qw(t,e):n}function Kw(t,e){return t instanceof Yl?function(r){return sd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Vo extends Nu{}class jo extends Nu{constructor(e){super(),this.elements=e}}function Gw(t,e){const n=Yw(e);for(const r of t.elements)n.some(s=>hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Mo extends Nu{constructor(e){super(),this.elements=e}}function Qw(t,e){let n=Yw(e);for(const r of t.elements)n=n.filter(s=>!hn(s,r));return{arrayValue:{values:n}}}class Yl extends Nu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yy(t){return Ce(t.integerValue||t.doubleValue)}function Yw(t){return Df(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class vC{constructor(e,n){this.field=e,this.transform=n}}function wC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof jo&&s instanceof jo||r instanceof Mo&&s instanceof Mo?ei(r.elements,s.elements,hn):r instanceof Yl&&s instanceof Yl?hn(r.Pe,s.Pe):r instanceof Vo&&s instanceof Vo}(t.transform,e.transform)}class EC{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pu{}function Xw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zw(t.key,Kt.none()):new Jo(t.key,t.data,Kt.none());{const n=t.data,r=gt.empty();let s=new qe($e.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Pr(t.key,r,new It(s.toArray()),Kt.none())}}function xC(t,e,n){t instanceof Jo?function(s,i,o){const l=s.value.clone(),u=vy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(s,i,o){if(!dl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=vy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Jw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ao(t,e,n,r){return t instanceof Jo?function(i,o,l,u){if(!dl(i.precondition,o))return l;const h=i.value.clone(),p=wy(i.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(i,o,l,u){if(!dl(i.precondition,o))return l;const h=wy(i.fieldTransforms,u,o),p=o.data;return p.setAll(Jw(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return dl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function TC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Kw(r.transform,s||null);i!=null&&(n===null&&(n=gt.empty()),n.set(r.field,i))}return n||null}function _y(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ei(r,s,(i,o)=>wC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jo extends Pu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends Pu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vy(t,e,n){const r=new Map;le(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,_C(o,l,n[s]))}return r}function wy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,yC(i,o,e))}return r}class Zw extends Pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IC extends Pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class SC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Xw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,r)=>_y(n,r))&&ei(this.baseMutations,e.baseMutations,(n,r)=>_y(n,r))}}class jf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){le(e.mutations.length===r.length);let s=function(){return dC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new jf(e,n,r,s)}}/**
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
 */class kC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,re;function RC(t){switch(t){default:return G();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function eE(t){if(t===void 0)return jn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Pe.OK:return O.OK;case Pe.CANCELLED:return O.CANCELLED;case Pe.UNKNOWN:return O.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return O.INTERNAL;case Pe.UNAVAILABLE:return O.UNAVAILABLE;case Pe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Pe.NOT_FOUND:return O.NOT_FOUND;case Pe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Pe.ABORTED:return O.ABORTED;case Pe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Pe.DATA_LOSS:return O.DATA_LOSS;default:return G()}}(re=Pe||(Pe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){return new TextEncoder}/**
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
 */const NC=new Kr([4294967295,4294967295],0);function Ey(t){const e=CC().encode(t),n=new Tw;return n.update(e),new Uint8Array(n.digest())}function xy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([s,i],0)]}class Mf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wi(`Invalid padding: ${n}`);if(r<0)throw new Wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Wi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Kr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Kr.fromNumber(r)));return s.compare(NC)===1&&(s=new Kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ey(e),[r,s]=xy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Mf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ey(e),[r,s]=xy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class bu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bu(Y.min(),s,new Te(oe),Mn(),te())}}class Zo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zo(r,n,te(),te(),te())}}/**
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
 */class fl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class tE{constructor(e,n){this.targetId=e,this.me=n}}class nE{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ty{constructor(){this.fe=0,this.ge=Sy(),this.pe=Ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Zo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Sy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mn(),this.qe=Iy(),this.Qe=new Te(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(od(i))if(r===0){const o=new W(i.path);this.Ue(n,o,rt.newNoDocument(o,Y.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ss(r).toUint8Array()}catch(u){if(u instanceof bw)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Mf(o,s,i)}catch(u){return Zs(u instanceof Wi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&od(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,rt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=te();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new bu(e,n,this.Qe,this.ke,r);return this.ke=Mn(),this.qe=Iy(),this.Qe=new Te(oe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ty,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new qe(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ty),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Iy(){return new Te(W.comparator)}function Sy(){return new Te(W.comparator)}const bC={asc:"ASCENDING",desc:"DESCENDING"},DC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LC={and:"AND",or:"OR"};class OC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ld(t,e){return t.useProto3Json||ku(e)?e:{value:e}}function Xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VC(t,e){return Xl(t,e.toTimestamp())}function cn(t){return le(!!t),Y.fromTimestamp(function(n){const r=Tr(n);return new Ve(r.seconds,r.nanos)}(t))}function Uf(t,e){return ud(t,e).canonicalString()}function ud(t,e){const n=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sE(t){const e=pe.fromString(t);return le(uE(e)),e}function cd(t,e){return Uf(t.databaseId,e.path)}function Gc(t,e){const n=sE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(oE(n))}function iE(t,e){return Uf(t.databaseId,e)}function jC(t){const e=sE(t);return e.length===4?pe.emptyPath():oE(e)}function hd(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oE(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ky(t,e,n){return{name:cd(t,e),fields:n.value.mapValue.fields}}function MC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(le(p===void 0||typeof p=="string"),Ge.fromBase64String(p||"")):(le(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ge.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?O.UNKNOWN:eE(h.code);return new $(p,h.message||"")}(o);n=new nE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gc(t,r.document.name),i=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):Y.min(),l=new gt({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(s,i,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new fl(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gc(t,r.document),i=r.readTime?cn(r.readTime):Y.min(),o=rt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gc(t,r.document),i=r.removedTargetIds||[];n=new fl([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new AC(s,i),l=r.targetId;n=new tE(l,o)}}return n}function UC(t,e){let n;if(e instanceof Jo)n={update:ky(t,e.key,e.value)};else if(e instanceof Zw)n={delete:cd(t,e.key)};else if(e instanceof Pr)n={update:ky(t,e.key,e.data),updateMask:GC(e.fieldMask)};else{if(!(e instanceof IC))return G();n={verify:cd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:VC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function FC(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?cn(s.updateTime):cn(i);return o.isEqual(Y.min())&&(o=cn(i)),new EC(o,s.transformResults||[])}(n,e))):[]}function BC(t,e){return{documents:[iE(t,e.path)]}}function zC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=iE(t,s);const i=function(h){if(h.length!==0)return lE(Xt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(g){return{field:ws(g.field),direction:qC(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ld(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function $C(t){let e=jC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){le(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=aE(m);return g instanceof Xt&&Vw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(A){return new Oo(Es(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ku(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,T=m.values||[];return new Gl(T,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,T=m.values||[];return new Gl(T,g)}(n.endAt)),aC(e,s,o,i,l,"F",u,h)}function HC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Es(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Es(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return De.create(Es(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>aE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function qC(t){return bC[t]}function WC(t){return DC[t]}function KC(t){return LC[t]}function ws(t){return{fieldPath:t.canonicalString()}}function Es(t){return $e.fromServerFormat(t.fieldPath)}function lE(t){return t instanceof De?function(n){if(n.op==="=="){if(dy(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NAN"}};if(hy(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dy(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NAN"}};if(hy(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ws(n.field),op:WC(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(s=>lE(s));return r.length===1?r[0]:{compositeFilter:{op:KC(n.op),filters:r}}}(t):G()}function GC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ir{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QC{constructor(e){this.ct=e}}function YC(t){const e=$C({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ql(e,e.limit,"L"):e}/**
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
 */class XC{constructor(){this.un=new JC}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(xr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class JC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(pe.comparator)).toArray()}}/**
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
 */class ri{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ri(0)}static kn(){return new ri(-1)}}/**
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
 */class ZC{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ao(r.mutation,s,It.empty(),Ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=Hr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Mn();const o=oo(),l=function(){return oo()}();return n.forEach((u,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Pr)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),ao(p.mutation,h,p.mutation.getFieldMask(),Ve.now())):o.set(h.key,It.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var m;return l.set(h,new eN(p,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=oo();let s=new Te((o,l)=>o-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||It.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(s.get(l.batchId)||te()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=qw();p.forEach(g=>{if(!i.has(g)){const T=Xw(n.get(g),r.get(g));T!==null&&m.set(g,T),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Hr());let l=-1,u=i;return o.next(h=>j.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?j.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,te())).next(p=>({batchId:l,changes:Hw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qi();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,u=>{const h=function(m,g){return new hi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,rt.newInvalidDocument(p)))});let l=qi();return o.forEach((u,h)=>{const p=i.get(u);p!==void 0&&ao(p.mutation,h,It.empty(),Ve.now()),Cu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class nN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:cn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:YC(s.bundledQuery),readTime:cn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class rN{constructor(){this.overlays=new Te(W.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Hr(),i=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Te((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=Hr(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Hr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return j.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kC(n,r));let i=this.Ir.get(n);i===void 0&&(i=te(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Ff{constructor(){this.Tr=new qe(je.Er),this.dr=new qe(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new pe([])),r=new je(n,e),s=new je(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new pe([])),r=new je(n,e),s=new je(n,e+1);let i=te();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
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
 */class iN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qe(je.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),s=new je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(oe);return n.forEach(s=>{const i=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new je(new W(i),0);let l=new qe(oe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new je(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class oN{constructor(e){this.Mr=e,this.docs=function(){return new Te(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,l=new W(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||zR(BR(p),r)<=0||(s.has(p.key)||Cu(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aN(this)}getSize(e){return j.resolve(this.size)}}class aN extends ZC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class lN{constructor(e){this.persistence=e,this.Nr=new di(n=>Lf(n),Of),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ff,this.targetCount=0,this.kr=ri.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ri(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class uN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Nf(0),this.Kr=!1,this.Kr=!0,this.$r=new sN,this.referenceDelegate=e(this),this.Ur=new lN(this),this.indexManager=new XC,this.remoteDocumentCache=function(s){return new oN(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new QC(n),this.Gr=new nN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new iN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new cN(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class cN extends HR{constructor(e){super(),this.currentSequenceNumber=e}}class Bf{constructor(e){this.persistence=e,this.Jr=new Ff,this.Yr=null}static Zr(e){return new Bf(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=W.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class zf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Y1()?8:qR(ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new hN;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Vi()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Vi()<=ne.DEBUG&&q("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Vi()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):j.resolve())}Yi(e,n){if(gy(n))return j.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ql(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ql(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return gy(n)||s.isEqual(Y.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(Vi()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vs(n)),this.rs(e,o,n,FR(s,-1)).next(l=>l))})}ts(e,n){let r=new qe(zw(e));return n.forEach((s,i)=>{Cu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Vi()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",vs(n)),this.Ji.getDocumentsMatchingQuery(e,n,xr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class fN{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Te(oe),this._s=new di(i=>Lf(i),Of),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function pN(t,e,n,r){return new fN(t,e,n,r)}async function cE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=te();for(const h of s){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function mN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,g=m.keys();let T=j.resolve();return g.forEach(A=>{T=T.next(()=>p.getEntry(u,A)).next(P=>{const C=h.docVersions.get(A);le(C!==null),P.version.compareTo(C)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),p.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function hE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gN(t,e){const n=X(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,m)));let T=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(Ge.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(p.resumeToken,r)),s=s.insert(m,T),function(P,C,x){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,T,p)&&l.push(n.Ur.updateTargetData(i,T))});let u=Mn(),h=te();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(yN(i,o,e.documentUpdates).next(p=>{u=p.Ps,h=p.Is})),!r.isEqual(Y.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function yN(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function _N(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function dd(t,e,n){const r=X(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ay(t,e,n){const r=X(t);let s=Y.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const m=X(u),g=m._s.get(p);return g!==void 0?j.resolve(m.os.get(g)):m.Ur.getTargetData(h,p)}(r,o,un(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:te())).next(l=>(wN(r,uC(e),l),{documents:l,Ts:i})))}function wN(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Ry{constructor(){this.activeTargetIds=mC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EN{constructor(){this.so=new Ry,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ry,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xN{_o(e){}shutdown(){}}/**
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
 */class Cy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha=null;function Qc(){return Ha===null?Ha=function(){return 268435456+Math.round(2147483648*Math.random())}():Ha++,"0x"+Ha.toString(16)}/**
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
 */const TN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class IN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const et="WebChannelConnection";class SN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Qc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(p=>(q("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Zs("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ci}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=TN[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Qc();return new Promise((o,l)=>{const u=new Iw;u.setWithCredentials(!0),u.listenOnce(Sw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case cl.NO_ERROR:const p=u.getResponseJson();q(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case cl.TIMEOUT:q(et,`RPC '${e}' ${i} timed out`),l(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case cl.HTTP_ERROR:const m=u.getStatus();if(q(et,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const A=function(C){const x=C.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(x)>=0?x:O.UNKNOWN}(T.status);l(new $(A,T.message))}else l(new $(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(O.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{q(et,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);q(et,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Qc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rw(),l=Aw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");q(et,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let g=!1,T=!1;const A=new IN({Io:C=>{T?q(et,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(q(et,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),q(et,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},To:()=>m.close()}),P=(C,x,v)=>{C.listen(x,S=>{try{v(S)}catch(D){setTimeout(()=>{throw D},0)}})};return P(m,Hi.EventType.OPEN,()=>{T||(q(et,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),P(m,Hi.EventType.CLOSE,()=>{T||(T=!0,q(et,`RPC '${e}' stream ${s} transport closed`),A.So())}),P(m,Hi.EventType.ERROR,C=>{T||(T=!0,Zs(et,`RPC '${e}' stream ${s} transport errored:`,C),A.So(new $(O.UNAVAILABLE,"The operation could not be completed")))}),P(m,Hi.EventType.MESSAGE,C=>{var x;if(!T){const v=C.data[0];le(!!v);const S=v,D=S.error||((x=S[0])===null||x===void 0?void 0:x.error);if(D){q(et,`RPC '${e}' stream ${s} received error:`,D);const M=D.status;let V=function(E){const I=Pe[E];if(I!==void 0)return eE(I)}(M),w=D.message;V===void 0&&(V=O.INTERNAL,w="Unknown error status: "+M+" with message "+D.message),T=!0,A.So(new $(V,w)),m.close()}else q(et,`RPC '${e}' stream ${s} received:`,v),A.bo(v)}}),P(l,kw.STAT_EVENT,C=>{C.stat===nd.PROXY?q(et,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===nd.NOPROXY&&q(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function Yc(){return typeof document<"u"?document:null}/**
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
 */function Du(t){return new OC(t,!0)}/**
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
 */class dE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class fE{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new dE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kN extends fE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=MC(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?cn(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=hd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=od(u)?{documents:BC(i,u)}:{query:zC(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rE(i,o.resumeToken);const h=ld(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Xl(i,o.snapshotVersion.toTimestamp());const h=ld(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=HC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=hd(this.serializer),n.removeTarget=e,this.a_(n)}}class AN extends fE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=FC(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=hd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UC(this.serializer,r))};this.a_(n)}}/**
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
 */class RN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,ud(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(O.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,ud(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class CN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class NN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ds(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.L_.add(4),await ea(h),h.q_.set("Unknown"),h.L_.delete(4),await Lu(h)}(this))})}),this.q_=new CN(r,s)}}async function Lu(t){if(ds(t))for(const e of t.B_)await e(!0)}async function ea(t){for(const e of t.B_)await e(!1)}function pE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Wf(n)?qf(n):fi(n).r_()&&Hf(n,e))}function $f(t,e){const n=X(t),r=fi(n);n.N_.delete(e),r.r_()&&mE(n,e),n.N_.size===0&&(r.r_()?r.o_():ds(n)&&n.q_.set("Unknown"))}function Hf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fi(t).A_(e)}function mE(t,e){t.Q_.xe(e),fi(t).R_(e)}function qf(t){t.Q_=new PC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fi(t).start(),t.q_.v_()}function Wf(t){return ds(t)&&!fi(t).n_()&&t.N_.size>0}function ds(t){return X(t).L_.size===0}function gE(t){t.Q_=void 0}async function PN(t){t.q_.set("Online")}async function bN(t){t.N_.forEach((e,n)=>{Hf(t,e)})}async function DN(t,e){gE(t),Wf(t)?(t.q_.M_(e),qf(t)):t.q_.set("Unknown")}async function LN(t,e,n){if(t.q_.set("Online"),e instanceof nE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jl(t,r)}else if(e instanceof fl?t.Q_.Ke(e):e instanceof tE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await hE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(h);p&&i.N_.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(Ge.EMPTY_BYTE_STRING,p.snapshotVersion)),mE(i,u);const m=new ir(p.target,u,h,p.sequenceNumber);Hf(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Jl(t,r)}}async function Jl(t,e,n){if(!Xo(e))throw e;t.L_.add(1),await ea(t),t.q_.set("Offline"),n||(n=()=>hE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Lu(t)})}function yE(t,e){return e().catch(n=>Jl(t,n,e))}async function Ou(t){const e=X(t),n=Ir(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ON(e);)try{const s=await _N(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,VN(e,s)}catch(s){await Jl(e,s)}_E(e)&&vE(e)}function ON(t){return ds(t)&&t.O_.length<10}function VN(t,e){t.O_.push(e);const n=Ir(t);n.r_()&&n.V_&&n.m_(e.mutations)}function _E(t){return ds(t)&&!Ir(t).n_()&&t.O_.length>0}function vE(t){Ir(t).start()}async function jN(t){Ir(t).p_()}async function MN(t){const e=Ir(t);for(const n of t.O_)e.m_(n.mutations)}async function UN(t,e,n){const r=t.O_.shift(),s=jf.from(r,e,n);await yE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ou(t)}async function FN(t,e){e&&Ir(t).V_&&await async function(r,s){if(function(o){return RC(o)&&o!==O.ABORTED}(s.code)){const i=r.O_.shift();Ir(r).s_(),await yE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ou(r)}}(t,e),_E(t)&&vE(t)}async function Ny(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.L_.add(3),await ea(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Lu(n)}async function BN(t,e){const n=X(t);e?(n.L_.delete(2),await Lu(n)):e||(n.L_.add(2),await ea(n),n.q_.set("Unknown"))}function fi(t){return t.K_||(t.K_=function(n,r,s){const i=X(n);return i.w_(),new kN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:PN.bind(null,t),Ro:bN.bind(null,t),mo:DN.bind(null,t),d_:LN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Wf(t)?qf(t):t.q_.set("Unknown")):(await t.K_.stop(),gE(t))})),t.K_}function Ir(t){return t.U_||(t.U_=function(n,r,s){const i=X(n);return i.w_(),new AN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:jN.bind(null,t),mo:FN.bind(null,t),f_:MN.bind(null,t),g_:UN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ou(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Kf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Kf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gf(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Xo(t))return new $(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=qi(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Py{constructor(){this.W_=new Te(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class si{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new si(e,n,Hs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class zN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $N{constructor(){this.queries=by(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=by(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function by(){return new di(t=>Bw(t),Ru)}async function Qf(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new zN,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Gf(o,`Initialization of query '${vs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Xf(n)}async function Yf(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HN(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Xf(n)}function qN(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Xf(t){t.Y_.forEach(e=>{e.next()})}var fd,Dy;(Dy=fd||(fd={})).ea="default",Dy.Cache="cache";class Jf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==fd.Cache}}/**
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
 */class wE{constructor(e){this.key=e}}class EE{constructor(e){this.key=e}}class WN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=zw(e),this.Ra=new Hs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Py,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),T=Cu(this.query,m)?m:null,A=!!g&&this.mutatedKeys.has(g.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let C=!1;g&&T?g.data.isEqual(T.data)?A!==P&&(r.track({type:3,doc:T}),C=!0):this.ga(g,T)||(r.track({type:2,doc:T}),C=!0,(u&&this.Aa(T,u)>0||h&&this.Aa(T,h)<0)&&(l=!0)):!g&&T?(r.track({type:0,doc:T}),C=!0):g&&!T&&(r.track({type:1,doc:g}),C=!0,(u||h)&&(l=!0)),C&&(T?(o=o.add(T),i=P?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(T,A){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return P(T)-P(A)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new si(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Py,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new EE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new wE(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return si.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class KN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GN{constructor(e){this.key=e,this.va=!1}}class QN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new di(l=>Bw(l),Ru),this.Ma=new Map,this.xa=new Set,this.Oa=new Te(W.comparator),this.Na=new Map,this.La=new Ff,this.Ba={},this.ka=new Map,this.qa=ri.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function YN(t,e,n=!0){const r=AE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await xE(r,e,n,!0),s}async function XN(t,e){const n=AE(t);await xE(n,e,!0,!1)}async function xE(t,e,n,r){const s=await vN(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await JN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&pE(t.remoteStore,s),l}async function JN(t,e,n,r,s){t.Ka=(m,g,T)=>async function(P,C,x,v){let S=C.view.ma(x);S.ns&&(S=await Ay(P.localStore,C.query,!1).then(({documents:w})=>C.view.ma(w,S)));const D=v&&v.targetChanges.get(C.targetId),M=v&&v.targetMismatches.get(C.targetId)!=null,V=C.view.applyChanges(S,P.isPrimaryClient,D,M);return Oy(P,C.targetId,V.wa),V.snapshot}(t,m,g,T);const i=await Ay(t.localStore,e,!0),o=new WN(e,i.Ts),l=o.ma(i.documents),u=Zo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Oy(t,n,h.wa);const p=new KN(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function ZN(t,e,n){const r=X(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ru(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await dd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&$f(r.remoteStore,s.targetId),pd(r,s.targetId)}).catch(Yo)):(pd(r,s.targetId),await dd(r.localStore,s.targetId,!0))}async function eP(t,e){const n=X(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$f(n.remoteStore,r.targetId))}async function tP(t,e,n){const r=lP(t);try{const s=await function(o,l){const u=X(o),h=Ve.now(),p=l.reduce((T,A)=>T.add(A.key),te());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let A=Mn(),P=te();return u.cs.getEntries(T,p).next(C=>{A=C,A.forEach((x,v)=>{v.isValidDocument()||(P=P.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,A)).next(C=>{m=C;const x=[];for(const v of l){const S=TC(v,m.get(v.key).overlayedDocument);S!=null&&x.push(new Pr(v.key,S,Dw(S.value.mapValue),Kt.exists(!0)))}return u.mutationQueue.addMutationBatch(T,h,x,l)}).next(C=>{g=C;const x=C.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(T,C.batchId,x)})}).then(()=>({batchId:g.batchId,changes:Hw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Te(oe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await ta(r,s.changes),await Ou(r.remoteStore)}catch(s){const i=Gf(s,"Failed to persist write");n.reject(i)}}async function TE(t,e){const n=X(t);try{const r=await gN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?le(o.va):s.removedDocuments.size>0&&(le(o.va),o.va=!1))}),await ta(n,r,e)}catch(r){await Yo(r)}}function Ly(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&Xf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Te(W.comparator);o=o.insert(i,rt.newNoDocument(i,Y.min()));const l=te().add(i),u=new bu(Y.min(),new Map,new Te(oe),o,l);await TE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Zf(r)}else await dd(r.localStore,e,!1).then(()=>pd(r,e,n)).catch(Yo)}async function rP(t,e){const n=X(t),r=e.batch.batchId;try{const s=await mN(n.localStore,e);SE(n,r,null),IE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,s)}catch(s){await Yo(s)}}async function sP(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(le(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);SE(r,e,n),IE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ta(r,s)}catch(s){await Yo(s)}}function IE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function SE(t,e,n){const r=X(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function pd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||kE(t,r)})}function kE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&($f(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Zf(t))}function Oy(t,e,n){for(const r of n)r instanceof wE?(t.La.addReference(r.key,e),iP(t,r)):r instanceof EE?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||kE(t,r.key)):G()}function iP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Zf(t))}function Zf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(pe.fromString(e)),r=t.qa.next();t.Na.set(r,new GN(n)),t.Oa=t.Oa.insert(n,r),pE(t.remoteStore,new ir(un(Au(n.path)),r,"TargetPurposeLimboResolution",Nf.oe))}}async function ta(t,e,n){const r=X(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=zf.Wi(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const p=X(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(h,g=>j.forEach(g.$i,T=>p.persistence.referenceDelegate.addReference(m,g.targetId,T)).next(()=>j.forEach(g.Ui,T=>p.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))}catch(m){if(!Xo(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const T=p.os.get(g),A=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(A);p.os=p.os.insert(g,P)}}}(r.localStore,i))}async function oP(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await cE(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(O.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ta(n,r.hs)}}function aP(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let s=te();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function AE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nP.bind(null,e),e.Ca.d_=HN.bind(null,e.eventManager),e.Ca.$a=qN.bind(null,e.eventManager),e}function lP(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sP.bind(null,e),e}class Zl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Du(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return pN(this.persistence,new dN,e.initialUser,this.serializer)}Ga(e){return new uN(Bf.Zr,this.serializer)}Wa(e){return new EN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zl.provider={build:()=>new Zl};class md{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ly(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oP.bind(null,this.syncEngine),await BN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $N}()}createDatastore(e){const n=Du(e.databaseInfo.databaseId),r=function(i){return new SN(i)}(e.databaseInfo);return function(i,o,l,u){return new RN(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new NN(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ly(this.syncEngine,n,0),function(){return Cy.D()?new Cy:new xN}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,p){const m=new QN(s,i,o,l,u,h);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ea(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}md.provider={build:()=>new md};/**
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
 */class ep{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class uP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=Nw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await cE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cP(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ny(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ny(e.remoteStore,s)),t._onlineComponents=e}async function cP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await Xc(t,new Zl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Xc(t,new Zl);return t._offlineComponents}async function RE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Vy(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Vy(t,new md))),t._onlineComponents}function hP(t){return RE(t).then(e=>e.syncEngine)}async function eu(t){const e=await RE(t),n=e.eventManager;return n.onListen=YN.bind(null,e.syncEngine),n.onUnlisten=ZN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=XN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eP.bind(null,e.syncEngine),n}function dP(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new ep({next:g=>{p.Za(),o.enqueueAndForget(()=>Yf(i,m));const T=g.docs.has(l);!T&&g.fromCache?h.reject(new $(O.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&u&&u.source==="server"?h.reject(new $(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Jf(Au(l.path),p,{includeMetadataChanges:!0,_a:!0});return Qf(i,m)}(await eu(t),t.asyncQueue,e,n,r)),r.promise}function fP(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new ep({next:g=>{p.Za(),o.enqueueAndForget(()=>Yf(i,m)),g.fromCache&&u.source==="server"?h.reject(new $(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Jf(l,p,{includeMetadataChanges:!0,_a:!0});return Qf(i,m)}(await eu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const jy=new Map;/**
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
 */function NE(t,e,n){if(!n)throw new $(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pP(t,e,n,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function My(t){if(!W.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uy(t){if(W.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function At(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vu(t);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Fy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ju{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PR;switch(r.type){case"firstParty":return new OR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jy.get(n);r&&(q("ComponentProvider","Removing Datastore"),jy.delete(n),r.terminate())}(this),Promise.resolve()}}function mP(t,e,n,r={}){var s;const i=(t=At(t,ju))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=tt.MOCK_USER;else{l=V0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new tt(h)}t._authCredentials=new bR(new Cw(l,u))}}/**
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
 */class zn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zn(this.firestore,e,this._query)}}class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class gr extends zn{constructor(e,n,r){super(e,n,Au(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new W(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function We(t,e,...n){if(t=_e(t),NE("collection","path",e),t instanceof ju){const r=pe.fromString(e,...n);return Uy(r),new gr(t,null,r)}{if(!(t instanceof st||t instanceof gr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Uy(r),new gr(t.firestore,null,r)}}function Un(t,e,...n){if(t=_e(t),arguments.length===1&&(e=Nw.newId()),NE("doc","path",e),t instanceof ju){const r=pe.fromString(e,...n);return My(r),new st(t,null,new W(r))}{if(!(t instanceof st||t instanceof gr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return My(r),new st(t.firestore,t instanceof gr?t.converter:null,new W(r))}}/**
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
 */class By{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new dE(this,"async_queue_retry"),this.Vu=()=>{const r=Yc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Yc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Cn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Kf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function zy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Sr extends ju{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new By,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new By(e),this._firestoreClient=void 0,await e}}}function gP(t,e){const n=typeof t=="object"?t:_f(),r=typeof t=="string"?t:"(default)",s=xu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=D0("firestore");i&&mP(s,...i)}return s}function Mu(t){if(t._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yP(t),t._firestoreClient}function yP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,p){return new GR(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,CE(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new uP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(Ge.fromBase64String(e))}catch(n){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ii(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fu{constructor(e){this._methodName=e}}/**
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
 */class tp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const _P=/^__.*__$/;class vP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jo(e,this.data,n,this.fieldTransforms)}}class PE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class rp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return tu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(bE(this.Cu)&&_P.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class wP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Du(e)}Qu(e,n,r,s=!1){return new rp({Cu:e,methodName:n,qu:r,path:$e.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bu(t){const e=t._freezeSettings(),n=Du(t._databaseId);return new wP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);ip("Data must be an object, but it was:",o,r);const l=LE(r,o);let u,h;if(i.merge)u=new It(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=gd(e,m,n);if(!o.contains(g))throw new $(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);VE(p,g)||p.push(g)}u=new It(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new vP(new gt(l),u,h)}class zu extends Fu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zu}}class sp extends Fu{_toFieldTransform(e){return new vC(e.path,new Vo)}isEqual(e){return e instanceof sp}}function EP(t,e,n,r){const s=t.Qu(1,e,n);ip("Data must be an object, but it was:",s,r);const i=[],o=gt.empty();hs(r,(u,h)=>{const p=op(e,u,n);h=_e(h);const m=s.Nu(p);if(h instanceof zu)i.push(p);else{const g=na(h,m);g!=null&&(i.push(p),o.set(p,g))}});const l=new It(i);return new PE(o,l,s.fieldTransforms)}function xP(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[gd(e,r,n)],u=[s];if(i.length%2!=0)throw new $(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(gd(e,i[g])),u.push(i[g+1]);const h=[],p=gt.empty();for(let g=l.length-1;g>=0;--g)if(!VE(h,l[g])){const T=l[g];let A=u[g];A=_e(A);const P=o.Nu(T);if(A instanceof zu)h.push(T);else{const C=na(A,P);C!=null&&(h.push(T),p.set(T,C))}}const m=new It(h);return new PE(p,m,o.fieldTransforms)}function TP(t,e,n,r=!1){return na(n,t.Qu(r?4:3,e))}function na(t,e){if(OE(t=_e(t)))return ip("Unsupported field value:",e,t),LE(t,e);if(t instanceof Fu)return function(r,s){if(!bE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=na(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=_e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:Xl(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xl(s.serializer,i)}}if(r instanceof tp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ii)return{bytesValue:rE(s.serializer,r._byteString)};if(r instanceof st){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Uf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof np)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Vf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Vu(r)}`)}(t,e)}function LE(t,e){const n={};return Pw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(t,(r,s)=>{const i=na(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function OE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof tp||t instanceof ii||t instanceof st||t instanceof Fu||t instanceof np)}function ip(t,e,n){if(!OE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Vu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function gd(t,e,n){if((e=_e(e))instanceof Uu)return e._internalPath;if(typeof e=="string")return op(t,e);throw tu("Field path arguments must be of type string or ",t,!1,void 0,n)}const IP=new RegExp("[~\\*/\\[\\]]");function op(t,e,n){if(e.search(IP)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uu(...e.split("."))._internalPath}catch{throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(O.INVALID_ARGUMENT,l+t+u)}function VE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($u("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SP extends jE{data(){return super.data()}}function $u(t,e){return typeof e=="string"?op(t,e):e instanceof Uu?e._internalPath:e._delegate._internalPath}/**
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
 */function ME(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ap{}class lp extends ap{}function Vt(t,e,...n){let r=[];e instanceof ap&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof up).length,l=i.filter(u=>u instanceof Hu).length;if(o>1||o>0&&l>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Hu extends lp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hu(e,n,r)}_apply(e){const n=this._parse(e);return UE(e._query,n),new zn(e.firestore,e.converter,ad(e._query,n))}_parse(e){const n=Bu(e.firestore);return function(i,o,l,u,h,p,m){let g;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Hy(m,p);const T=[];for(const A of m)T.push($y(u,i,A));g={arrayValue:{values:T}}}else g=$y(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Hy(m,p),g=TP(l,o,m,p==="in"||p==="not-in");return De.create(h,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Nn(t,e,n){const r=e,s=$u("where",t);return Hu._create(s,r,n)}class up extends ap{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new up(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)UE(o,u),o=ad(o,u)}(e._query,n),new zn(e.firestore,e.converter,ad(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cp extends lp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new cp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oo(i,o)}(e._query,this._field,this._direction);return new zn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new hi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function yr(t,e="asc"){const n=e,r=$u("orderBy",t);return cp._create(r,n)}class hp extends lp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new hp(e,n,r)}_apply(e){return new zn(e.firestore,e.converter,Ql(e._query,this._limit,this._limitType))}}function Jc(t){return hp._create("limit",t,"F")}function $y(t,e,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fw(e)&&n.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!W.isDocumentKey(r))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cy(t,new W(r))}if(n instanceof st)return cy(t,n._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vu(n)}.`)}function Hy(t,e){if(!Array.isArray(t)||t.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function UE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class kP{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ce(o.doubleValue));return new np(i)}convertGeoPoint(e){return new tp(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bo(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);le(uE(r));const s=new Do(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function FE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BE extends jE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($u("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pl extends BE{data(e={}){return super.data(e)}}class zE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ki(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pl(this._firestore,this._userDataWriter,r.key,r,new Ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new pl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new pl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:AP(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function qu(t){t=At(t,st);const e=At(t.firestore,Sr);return dP(Mu(e),t._key).then(n=>HE(e,t,n))}class dp extends kP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function RP(t){t=At(t,zn);const e=At(t.firestore,Sr),n=Mu(e),r=new dp(e);return ME(t._query),fP(n,t._query).then(s=>new zE(e,r,t,s))}function fp(t,e,n){t=At(t,st);const r=At(t.firestore,Sr),s=FE(t.converter,e,n);return pp(r,[DE(Bu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kt.none())])}function $E(t,e,n,...r){t=At(t,st);const s=At(t.firestore,Sr),i=Bu(s);let o;return o=typeof(e=_e(e))=="string"||e instanceof Uu?xP(i,"updateDoc",t._key,e,n,r):EP(i,"updateDoc",t._key,e),pp(s,[o.toMutation(t._key,Kt.exists(!0))])}function ra(t,e){const n=At(t.firestore,Sr),r=Un(t),s=FE(t.converter,e);return pp(n,[DE(Bu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function Gt(t,...e){var n,r,s;t=_e(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||zy(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(zy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,p;if(t instanceof st)h=At(t.firestore,Sr),p=Au(t._key.path),u={next:m=>{e[o]&&e[o](HE(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=At(t,zn);h=At(m.firestore,Sr),p=m._query;const g=new dp(h);u={next:T=>{e[o]&&e[o](new zE(h,g,m,T))},error:e[o+1],complete:e[o+2]},ME(t._query)}return function(g,T,A,P){const C=new ep(P),x=new Jf(T,C,A);return g.asyncQueue.enqueueAndForget(async()=>Qf(await eu(g),x)),()=>{C.Za(),g.asyncQueue.enqueueAndForget(async()=>Yf(await eu(g),x))}}(Mu(h),p,l,u)}function pp(t,e){return function(r,s){const i=new Cn;return r.asyncQueue.enqueueAndForget(async()=>tP(await hP(r),s,i)),i.promise}(Mu(t),e)}function HE(t,e,n){const r=n.docs.get(e._key),s=new dp(t);return new BE(t,s,e._key,r,new Ki(n.hasPendingWrites,n.fromCache),e.converter)}function kr(){return new sp("serverTimestamp")}(function(e,n=!0){(function(s){ci=s})(us),es(new Er("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Sr(new DR(r.getProvider("auth-internal")),new jR(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Do(h.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),on(iy,"4.7.3",e),on(iy,"4.7.3","esm2017")})();/**
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
 */const qE="firebasestorage.googleapis.com",WE="storageBucket",CP=2*60*1e3,NP=10*60*1e3;/**
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
 */class Ae extends dn{constructor(e,n,r=0){super(Zc(e),`Firebase Storage: ${n} (${Zc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function Zc(t){return"storage/"+t}function mp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ae(ke.UNKNOWN,t)}function PP(t){return new Ae(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function bP(t){return new Ae(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function DP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ae(ke.UNAUTHENTICATED,t)}function LP(){return new Ae(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OP(t){return new Ae(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function VP(){return new Ae(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jP(){return new Ae(ke.CANCELED,"User canceled the upload/download.")}function MP(t){return new Ae(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function UP(t){return new Ae(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function FP(){return new Ae(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+WE+"' property when initializing the app?")}function BP(){return new Ae(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zP(){return new Ae(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $P(t){return new Ae(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yd(t){return new Ae(ke.INVALID_ARGUMENT,t)}function KE(){return new Ae(ke.APP_DELETED,"The Firebase app was deleted.")}function HP(t){return new Ae(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function lo(t,e){return new Ae(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ji(t){throw new Ae(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw UP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",T=new RegExp(`^https?://${m}/${p}/b/${s}/o${g}`,"i"),A={bucket:1,path:3},P=n===qE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",x=new RegExp(`^https?://${P}/${s}/${C}`,"i"),S=[{regex:l,indices:u,postModify:i},{regex:T,indices:A,postModify:h},{regex:x,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<S.length;D++){const M=S[D],V=M.regex.exec(e);if(V){const w=V[M.indices.bucket];let y=V[M.indices.path];y||(y=""),r=new St(w,y),M.postModify(r);break}}if(r==null)throw MP(e);return r}}class qP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function WP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function p(...C){h||(h=!0,e.apply(null,C))}function m(C){s=setTimeout(()=>{s=null,t(T,u())},C)}function g(){i&&clearTimeout(i)}function T(C,...x){if(h){g();return}if(C){g(),p.call(null,C,...x);return}if(u()||o){g(),p.call(null,C,...x);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,m(S)}let A=!1;function P(C){A||(A=!0,g(),!h&&(s!==null?(C||(l=2),clearTimeout(s),m(0)):C||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function KP(t){t(!1)}/**
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
 */function GP(t){return t!==void 0}function QP(t){return typeof t=="object"&&!Array.isArray(t)}function gp(t){return typeof t=="string"||t instanceof String}function qy(t){return yp()&&t instanceof Blob}function yp(){return typeof Blob<"u"}function Wy(t,e,n,r){if(r<e)throw yd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw yd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function _p(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function GE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gr||(Gr={}));/**
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
 */function YP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class XP{constructor(e,n,r,s,i,o,l,u,h,p,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,A)=>{this.resolve_=T,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new qa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Gr.NO_ERROR,u=i.getStatus();if(!l||YP(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Gr.ABORT;r(!1,new qa(!1,null,p));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new qa(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());GP(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=mp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?KE():jP();o(u)}else{const u=VP();o(u)}};this.canceled_?n(!1,new qa(!1,null,!0)):this.backoffId_=WP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function JP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ZP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function e2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function t2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function n2(t,e,n,r,s,i,o=!0){const l=GE(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return e2(h,e),JP(h,n),ZP(h,i),t2(h,r),new XP(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function r2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function s2(...t){const e=r2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(yp())return new Blob(t);throw new Ae(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function i2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function o2(t){if(typeof atob>"u")throw $P("base-64");return atob(t)}/**
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
 */const nn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class eh{constructor(e,n){this.data=e,this.contentType=n||null}}function a2(t,e){switch(t){case nn.RAW:return new eh(QE(e));case nn.BASE64:case nn.BASE64URL:return new eh(YE(t,e));case nn.DATA_URL:return new eh(u2(e),c2(e))}throw mp()}function QE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function l2(t){let e;try{e=decodeURIComponent(t)}catch{throw lo(nn.DATA_URL,"Malformed data URL.")}return QE(e)}function YE(t,e){switch(t){case nn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw lo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case nn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw lo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=o2(e)}catch(s){throw s.message.includes("polyfill")?s:lo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class XE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw lo(nn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=h2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function u2(t){const e=new XE(t);return e.base64?YE(nn.BASE64,e.rest):l2(e.rest)}function c2(t){return new XE(t).contentType}function h2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class nr{constructor(e,n){let r=0,s="";qy(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(qy(this.data_)){const r=this.data_,s=i2(r,e,n);return s===null?null:new nr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new nr(r,!0)}}static getBlob(...e){if(yp()){const n=e.map(r=>r instanceof nr?r.data_:r);return new nr(s2.apply(null,n))}else{const n=e.map(o=>gp(o)?a2(nn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new nr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function JE(t){let e;try{e=JSON.parse(t)}catch{return null}return QP(e)?e:null}/**
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
 */function d2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function f2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ZE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function p2(t,e){return e}class ut{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||p2}}let Wa=null;function m2(t){return!gp(t)||t.length<2?t:ZE(t)}function ex(){if(Wa)return Wa;const t=[];t.push(new ut("bucket")),t.push(new ut("generation")),t.push(new ut("metageneration")),t.push(new ut("name","fullPath",!0));function e(i,o){return m2(o)}const n=new ut("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ut("size");return s.xform=r,t.push(s),t.push(new ut("timeCreated")),t.push(new ut("updated")),t.push(new ut("md5Hash",null,!0)),t.push(new ut("cacheControl",null,!0)),t.push(new ut("contentDisposition",null,!0)),t.push(new ut("contentEncoding",null,!0)),t.push(new ut("contentLanguage",null,!0)),t.push(new ut("contentType",null,!0)),t.push(new ut("metadata","customMetadata",!0)),Wa=t,Wa}function g2(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new St(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function y2(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return g2(r,t),r}function tx(t,e,n){const r=JE(e);return r===null?null:y2(t,r,n)}function _2(t,e,n,r){const s=JE(e);if(s===null||!gp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const p=t.bucket,m=t.fullPath,g="/b/"+o(p)+"/o/"+o(m),T=_p(g,n,r),A=GE({alt:"media",token:h});return T+A})[0]}function v2(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class nx{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function rx(t){if(!t)throw mp()}function w2(t,e){function n(r,s){const i=tx(t,s,e);return rx(i!==null),i}return n}function E2(t,e){function n(r,s){const i=tx(t,s,e);return rx(i!==null),_2(i,s,t.host,t._protocol)}return n}function sx(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=LP():s=DP():n.getStatus()===402?s=bP(t.bucket):n.getStatus()===403?s=OP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function x2(t){const e=sx(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=PP(t.path)),i.serverResponse=s.serverResponse,i}return n}function T2(t,e,n){const r=e.fullServerUrl(),s=_p(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new nx(s,i,E2(t,n),o);return l.errorHandler=x2(e),l}function I2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function S2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=I2(null,e)),r}function k2(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let D=0;D<2;D++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=S2(e,r,s),p=v2(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",T=nr.getBlob(m,r,g);if(T===null)throw BP();const A={name:h.fullPath},P=_p(i,t.host,t._protocol),C="POST",x=t.maxUploadRetryTime,v=new nx(P,C,w2(t,n),x);return v.urlParams=A,v.headers=o,v.body=T.uploadData(),v.errorHandler=sx(e),v}class A2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ji("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ji("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ji("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ji("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ji("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class R2 extends A2{initXhr(){this.xhr_.responseType="text"}}function ix(){return new R2}/**
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
 */class os{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new os(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ZE(this._location.path)}get storage(){return this._service}get parent(){const e=d2(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw HP(e)}}function C2(t,e,n){t._throwIfRoot("uploadBytes");const r=k2(t.storage,t._location,ex(),new nr(e,!0),n);return t.storage.makeRequestWithTokens(r,ix).then(s=>({metadata:s,ref:t}))}function N2(t){t._throwIfRoot("getDownloadURL");const e=T2(t.storage,t._location,ex());return t.storage.makeRequestWithTokens(e,ix).then(n=>{if(n===null)throw zP();return n})}function P2(t,e){const n=f2(t._location.path,e),r=new St(t._location.bucket,n);return new os(t.storage,r)}/**
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
 */function b2(t){return/^[A-Za-z]+:\/\//.test(t)}function D2(t,e){return new os(t,e)}function ox(t,e){if(t instanceof vp){const n=t;if(n._bucket==null)throw FP();const r=new os(n,n._bucket);return e!=null?ox(r,e):r}else return e!==void 0?P2(t,e):t}function L2(t,e){if(e&&b2(e)){if(t instanceof vp)return D2(t,e);throw yd("To use ref(service, url), the first argument must be a Storage instance.")}else return ox(t,e)}function Ky(t,e){const n=e==null?void 0:e[WE];return n==null?null:St.makeFromBucketSpec(n,t)}function O2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:V0(s,t.app.options.projectId))}class vp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=qE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CP,this._maxUploadRetryTime=NP,this._requests=new Set,s!=null?this._bucket=St.makeFromBucketSpec(s,this._host):this._bucket=Ky(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=Ky(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new os(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new qP(KE());{const o=n2(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Gy="@firebase/storage",Qy="0.13.2";/**
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
 */const ax="storage";function lx(t,e,n){return t=_e(t),C2(t,e,n)}function ux(t){return t=_e(t),N2(t)}function cx(t,e){return t=_e(t),L2(t,e)}function V2(t=_f(),e){t=_e(t);const r=xu(t,ax).getImmediate({identifier:e}),s=D0("storage");return s&&j2(r,...s),r}function j2(t,e,n,r={}){O2(t,e,n,r)}function M2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new vp(n,r,s,e,us)}function U2(){es(new Er(ax,M2,"PUBLIC").setMultipleInstances(!0)),on(Gy,Qy,""),on(Gy,Qy,"esm2017")}U2();const F2={apiKey:"AIzaSyDty5os84VgLNRZTDAHErleYUOc9zBnaa0",authDomain:"hyperlocall.firebaseapp.com",projectId:"hyperlocall",storageBucket:"hyperlocall.appspot.com",messagingSenderId:"43216293091",appId:"1:43216293091:web:8b4b2de5dbd428e2f389d6",measurementId:"G-13PVX571LT"};let Ka,pt,ye,wp;try{Ka=F0(F2),pt=CR(Ka),ye=gP(Ka),wp=V2(Ka),ik("debug")}catch(t){console.error("Firebase initialization error:",t)}function B2(){const[t,e]=U.useState("home"),[n,r]=U.useState(null),[s,i]=U.useState(!1),[o,l]=U.useState(null),[u,h]=U.useState(!1),[p,m]=U.useState(""),[g,T]=U.useState(null),[A,P]=U.useState(null),C=(V,w={})=>{e(V),h(!1),w.searchTerm&&m(w.searchTerm),w.teacherId&&T(w.teacherId),w.conversation?P(w.conversation):P(null)};U.useEffect(()=>{if(!pt)return;const V=yA(pt,w=>{r(w),i(!0),w||C("home")});return()=>V()},[]);const x=async(V,w,y,E,I)=>{if(!(!pt||!ye)){l(null);try{const N=(await dA(pt,V,w)).user;await kf(N,{displayName:y}),await fp(Un(ye,"users",N.uid),{uid:N.uid,name:y,email:V,role:E,location:I,bio:`Hi, I'm ${y}. I'm new to Hyperlocal and looking to ${E==="learner"?"learn new skills":"teach my skills"}!`,createdAt:kr(),photoURL:""}),C("dashboard")}catch(R){console.error("Sign up error:",R),l(R.message)}}},v=async(V,w)=>{if(pt){l(null);try{await fA(pt,V,w),C("dashboard")}catch(y){console.error("Login error:",y),l(y.message)}}},S=async()=>{if(pt)try{await _A(pt),C("home")}catch(V){console.error("Sign out error:",V)}},D=()=>{switch(t){case"home":return d.jsx(Yy,{navigateTo:C});case"browse":return n?d.jsx(H2,{navigateTo:C,searchTerm:p}):d.jsx(_s,{...M});case"teacherProfile":return n?d.jsx(W2,{navigateTo:C,teacherId:g,currentUser:n}):d.jsx(_s,{...M});case"dashboard":return n?d.jsx(Jy,{navigateTo:C,user:n,handleLogout:S,selectedConversation:A}):d.jsx(_s,{...M});case"login":return n?d.jsx(Jy,{navigateTo:C,user:n,handleLogout:S,selectedConversation:A}):d.jsx(_s,{...M});case"how-it-works":return d.jsx(ab,{});case"about":return d.jsx(lb,{});case"help":return d.jsx(ub,{});case"contact":return d.jsx(cb,{});case"community":return d.jsx(dx,{navigateTo:C,currentUser:n});case"favorites":return n?d.jsx(db,{navigateTo:C,currentUser:n}):d.jsx(_s,{...M});case"settings":return n?d.jsx(fb,{navigateTo:C,currentUser:n,handleLogout:S}):d.jsx(_s,{...M});default:return d.jsx(Yy,{navigateTo:C})}},M={navigateTo:C,handleLogin:v,handleSignUp:x,authError:o,setAuthError:l};return s?!pt||!ye?d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 p-8",children:d.jsx("h1",{className:"text-3xl font-bold text-red-600 text-center",children:"Firebase configuration error. Please check your `firebaseConfig` object."})}):d.jsxs("div",{className:"min-h-screen bg-white font-sans text-gray-900",children:[t!=="dashboard"&&d.jsx(z2,{navigateTo:C,user:n,handleLogout:S,isMobileMenuOpen:u,setIsMobileMenuOpen:h}),d.jsx("main",{className:t==="dashboard"?"h-screen":"pt-20",children:D()}),t!=="dashboard"&&d.jsx($2,{navigateTo:C,user:n})]}):d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:d.jsx("h1",{className:"text-3xl font-bold text-indigo-600",children:"Loading Hyperlocal..."})})}function z2({navigateTo:t,user:e,handleLogout:n,isMobileMenuOpen:r,setIsMobileMenuOpen:s}){const i=[{name:"How It Works",page:"how-it-works"},{name:"About Us",page:"about"},{name:"Community",page:"community"}],[o,l]=U.useState(!1),[u,h]=U.useState(!1);return d.jsxs("header",{className:"fixed top-0 left-0 right-0 bg-white shadow-md z-50",children:[d.jsx("nav",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex justify-between items-center h-20",children:[d.jsxs("button",{onClick:()=>t("home"),className:"flex items-center text-3xl font-bold text-indigo-600 focus:outline-none",children:[d.jsx(R0,{className:"h-8 w-8 mr-2"}),"Hyperlocal"]}),d.jsxs("div",{className:"hidden md:flex md:items-center md:space-x-8",children:[i.map(p=>d.jsx("button",{onClick:()=>t(p.page),className:"text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out",children:p.name},p.name)),d.jsxs("div",{className:"relative",children:[d.jsxs("button",{onClick:()=>l(!o),onBlur:()=>setTimeout(()=>l(!1),200),className:"text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out flex items-center",children:["Support ",d.jsx(w1,{className:`h-5 w-5 ml-1 transition-transform ${o?"rotate-180":"rotate-0"}`})]}),o&&d.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-gray-100",children:[d.jsx("button",{onClick:()=>{t("help"),l(!1)},className:"block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:"Help Center"}),d.jsx("button",{onClick:()=>{t("contact"),l(!1)},className:"block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:"Contact Us"})]})]}),e?d.jsxs("div",{className:"relative",children:[d.jsx("button",{onClick:()=>h(!u),onBlur:()=>setTimeout(()=>h(!1),200),className:"flex items-center justify-center h-12 w-12 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:e.photoURL?d.jsx("img",{src:e.photoURL,alt:"Profile",className:"h-12 w-12 rounded-full object-cover"}):e.displayName?e.displayName.split(" ").map(p=>p[0]).join("").toUpperCase():d.jsx(wr,{className:"h-6 w-6"})}),u&&d.jsxs("div",{className:"absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-gray-100",children:[d.jsxs("div",{className:"px-4 py-3 border-b border-gray-200",children:[d.jsx("p",{className:"text-lg font-medium text-gray-900 truncate",children:e.displayName}),d.jsx("p",{className:"text-base text-gray-500 truncate",children:e.email})]}),d.jsxs("div",{className:"py-1",children:[d.jsxs("button",{onClick:()=>{t("dashboard"),h(!1)},className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(x1,{className:"h-5 w-5 mr-3"})," Dashboard"]}),d.jsxs("button",{onClick:()=>{t("browse"),h(!1)},className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(mf,{className:"h-5 w-5 mr-3"})," Browse Skills"]}),d.jsxs("button",{onClick:()=>{t("favorites"),h(!1)},className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(_0,{className:"h-5 w-5 mr-3"})," My Favorites"]}),d.jsxs("button",{onClick:()=>{t("settings"),h(!1)},className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(S0,{className:"h-5 w-5 mr-3"})," Settings"]})]}),d.jsx("div",{className:"border-t border-gray-200 py-1",children:d.jsxs("button",{onClick:n,className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(_u,{className:"h-5 w-5 mr-3"})," Log Out"]})})]})]}):d.jsx("button",{onClick:()=>t("login"),className:"bg-indigo-600 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:"Login / Sign Up"})]}),d.jsx("div",{className:"md:hidden flex items-center",children:d.jsxs("button",{onClick:()=>s(!r),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[d.jsx("span",{className:"sr-only",children:"Open main menu"}),r?d.jsx(L1,{className:"block h-8 w-8"}):d.jsx(S1,{className:"block h-8 w-8"})]})})]})}),r&&d.jsx("div",{className:"md:hidden bg-white shadow-lg",children:d.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[i.map(p=>d.jsx("button",{onClick:()=>t(p.page),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:p.name},p.name)),d.jsx("button",{onClick:()=>t("help"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"Help Center"}),d.jsx("button",{onClick:()=>t("contact"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"Contact Us"}),e?d.jsx(d.Fragment,{children:d.jsxs("div",{className:"border-t border-gray-200 mt-2 pt-2",children:[d.jsx("button",{onClick:()=>t("dashboard"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"Dashboard"}),d.jsx("button",{onClick:()=>t("browse"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"Browse Skills"}),d.jsx("button",{onClick:()=>t("favorites"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"My Favorites"}),d.jsx("button",{onClick:()=>t("settings"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"Settings"}),d.jsx("button",{onClick:n,className:"bg-indigo-600 text-white w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:"Log Out"})]})}):d.jsx("button",{onClick:()=>t("login"),className:"bg-indigo-600 text-white w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:"Login / Sign Up"})]})})]})}function $2({navigateTo:t,user:e}){return d.jsx("footer",{className:"bg-gray-900 text-gray-400",children:d.jsxs("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-semibold text-white",children:"Platform"}),d.jsxs("ul",{className:"mt-4 space-y-2",children:[e&&d.jsx("li",{children:d.jsx("button",{onClick:()=>t("browse"),className:"hover:text-white",children:"Browse Skills"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("how-it-works"),className:"hover:text-white",children:"How It Works"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("login"),className:"hover:text-white",children:"Become a Teacher"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("community"),className:"hover:text-white",children:"Community"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-semibold text-white",children:"Company"}),d.jsxs("ul",{className:"mt-4 space-y-2",children:[d.jsx("li",{children:d.jsx("button",{onClick:()=>t("about"),className:"hover:text-white",children:"About Us"})}),d.jsx("li",{children:d.jsx("button",{disabled:!0,className:"opacity-50 cursor-not-allowed",children:"Careers"})}),d.jsx("li",{children:d.jsx("button",{disabled:!0,className:"opacity-50 cursor-not-allowed",children:"Press"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-semibold text-white",children:"Support"}),d.jsxs("ul",{className:"mt-4 space-y-2",children:[d.jsx("li",{children:d.jsx("button",{onClick:()=>t("help"),className:"hover:text-white",children:"Help Center"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("contact"),className:"hover:text-white",children:"Contact Us"})}),d.jsx("li",{children:d.jsx("button",{disabled:!0,className:"opacity-50 cursor-not-allowed",children:"Privacy Policy"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-semibold text-white",children:"Connect"}),d.jsxs("ul",{className:"mt-4 space-y-2",children:[d.jsx("li",{children:d.jsx("button",{disabled:!0,className:"opacity-50 cursor-not-allowed",children:"Twitter"})}),d.jsx("li",{children:d.jsx("button",{disabled:!0,className:"opacity-50 cursor-not-allowed",children:"Instagram"})})]})]})]}),d.jsx("div",{className:"mt-12 border-t border-gray-700 pt-8 text-center",children:d.jsxs("p",{children:["© ",new Date().getFullYear()," Hyperlocal. Share skills with your neighbors."]})})]})})}function Yy({navigateTo:t}){const[e,n]=U.useState(""),r=s=>{s.preventDefault(),t("browse",{searchTerm:e})};return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"bg-indigo-50",children:d.jsxs("section",{className:"flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-24 px-4 sm:px-6 lg:px-8",children:[d.jsxs("h1",{className:"font-extrabold text-5xl sm:text-6xl md:text-7xl text-center",children:[d.jsx("span",{className:"block text-gray-900",children:"Learn anything."}),d.jsx("span",{className:"block text-indigo-600",children:"From your neighbors."})]}),d.jsx("p",{className:"mt-6 max-w-2xl text-center text-xl text-gray-700 leading-relaxed",children:"Hyperlocal is a skill-sharing platform connecting you with teachers and learners right in your own neighborhood."}),d.jsx("form",{onSubmit:r,className:"mt-12 w-full max-w-2xl",children:d.jsxs("div",{className:"relative",children:[d.jsx("input",{type:"search",placeholder:"What do you want to learn? (e.g., 'guitar', 'baking', 'python')",value:e,onChange:s=>n(s.target.value),className:"w-full text-lg p-5 pl-14 rounded-full shadow-lg border-2 border-transparent focus:outline-none focus:border-indigo-500"}),d.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:d.jsx(mf,{className:"h-6 w-6 text-gray-400"})}),d.jsx("button",{type:"submit",className:"absolute inset-y-0 right-0 m-2 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700",children:"Search"})]})}),d.jsx("div",{className:"mt-10 flex justify-center",children:d.jsx("button",{onClick:()=>t("login"),className:"bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:"Become a Teacher"})})]})}),d.jsx(hx,{})]})}function H2({navigateTo:t,searchTerm:e}){const[n,r]=U.useState([]),[s,i]=U.useState(!0);U.useEffect(()=>{i(!0);const l=Vt(We(ye,"skills")),u=Gt(l,h=>{const p=[];h.forEach(m=>{p.push({id:m.id,...m.data()})}),r(p),i(!1)},h=>{console.error("Error fetching skills:",h),i(!1)});return()=>u()},[]);const o=U.useMemo(()=>{if(!e)return n;const l=e.toLowerCase();return n.filter(u=>u.skillName.toLowerCase().includes(l)||u.description&&u.description.toLowerCase().includes(l)||u.teacherName&&u.teacherName.toLowerCase().includes(l))},[n,e]);return d.jsx("section",{className:"py-24 bg-white min-h-screen",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsx("h1",{className:"text-5xl font-extrabold text-gray-900 mb-4",children:e?`Results for "${e}"`:"Browse All Skills"}),d.jsxs("p",{className:"text-xl text-gray-600 mb-12",children:[o.length," ",o.length===1?"skill":"skills"," found in your area."]}),s?d.jsx("p",{children:"Loading skills..."}):o.length===0?d.jsx("p",{children:"No skills found. Try a different search!"}):d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.map(l=>d.jsx(q2,{skill:l,navigateTo:t},l.id))})]})})}function q2({skill:t,navigateTo:e}){const n=r=>r==="Monetary Fee"?d.jsx(Ro,{className:"h-5 w-5 mr-1"}):r==="Skill Exchange"?d.jsx(T0,{className:"h-5 w-5 mr-1"}):d.jsx(Ro,{className:"h-5 w-5 mr-1"});return d.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col",children:[d.jsxs("div",{className:"p-6 flex-grow",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-2",children:t.skillName}),d.jsx("p",{className:"text-lg text-gray-700 mb-4 h-24 overflow-hidden text-ellipsis",children:t.description}),d.jsxs("div",{className:"flex items-center text-indigo-600 font-semibold mb-2",children:[n(t.compensation),d.jsx("span",{children:t.compensation})]}),d.jsxs("div",{className:"flex items-center text-gray-600",children:[d.jsx(P1,{className:"h-5 w-5 mr-2"}),d.jsxs("span",{children:["Taught by ",t.teacherName]})]})]}),d.jsx("div",{className:"p-6 bg-gray-50 border-t border-gray-200",children:d.jsx("button",{onClick:()=>e("teacherProfile",{teacherId:t.teacherId}),className:"w-full text-center bg-indigo-100 text-indigo-700 px-5 py-3 rounded-lg text-lg font-medium hover:bg-indigo-200 transition duration-150 ease-in-out",children:"View Profile & Connect"})})]})}function W2({navigateTo:t,teacherId:e,currentUser:n}){const[r,s]=U.useState(null),[i,o]=U.useState([]),[l,u]=U.useState(!0),[h,p]=U.useState(null),[m,g]=U.useState(!1);U.useEffect(()=>{if(!e){t("browse");return}u(!0);const A=async()=>{if(!ye||!e)return;const x=Un(ye,"users",e),v=await qu(x);v.exists()?s(v.data()):(console.error("No such teacher profile!"),t("browse"))},P=Vt(We(ye,"skills"),Nn("teacherId","==",e)),C=Gt(P,x=>{const v=[];x.forEach(S=>{v.push({id:S.id,...S.data()})}),o(v)});return Promise.all([A()]).finally(()=>u(!1)),()=>C()},[e,t]);const T=async()=>{if(!n){t("login");return}if(n.uid===e){p("You cannot message yourself.");return}g(!0),p(null);try{const A=Vt(We(ye,"conversations"),Nn("participants","array-contains",n.uid)),P=await RP(A);let C=null;P.forEach(v=>{const S=v.data();S.participants.includes(e)&&(C={id:v.id,...S})});let x;C?x=C.id:x=(await ra(We(ye,"conversations"),{participants:[n.uid,e],participantNames:{[n.uid]:pt.currentUser.displayName||pt.currentUser.email,[e]:r.name},lastMessage:"Conversation started.",lastMessageAt:kr()})).id,t("dashboard",{conversation:{id:x}})}catch(A){console.error("Error starting conversation: ",A),p("Could not start conversation. Please try again.")}finally{g(!1)}};return l?d.jsx("div",{className:"py-24 px-4 text-center",children:"Loading teacher profile..."}):r?d.jsx("section",{className:"py-24 bg-white",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row items-center sm:items-start",children:[r.photoURL?d.jsx("img",{src:r.photoURL,alt:"Profile",className:"h-32 w-32 rounded-full object-cover shadow-md"}):d.jsx("div",{className:"h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500",children:d.jsx(wr,{className:"h-16 w-16"})}),d.jsxs("div",{className:"sm:ml-8 mt-6 sm:mt-0 text-center sm:text-left",children:[d.jsx("h1",{className:"text-5xl font-extrabold text-gray-900",children:r.name}),d.jsxs("div",{className:"flex items-center justify-center sm:justify-start mt-4 text-lg text-gray-600",children:[d.jsx(vu,{className:"h-5 w-5 mr-2"}),d.jsx("span",{children:r.location})]}),d.jsx("p",{className:"mt-4 text-xl text-gray-700 max-w-lg",children:r.bio})]})]}),d.jsxs("div",{className:"mt-10",children:[d.jsxs("button",{onClick:T,disabled:m,className:"w-full max-w-lg mx-auto sm:mx-0 flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm disabled:bg-gray-400",children:[d.jsx(wu,{className:"h-6 w-6 mr-3"}),m?"Connecting...":`Connect with ${r.name.split(" ")[0]}`]}),h&&d.jsx("p",{className:"text-red-600 mt-2 text-center sm:text-left",children:h})]}),d.jsxs("div",{className:"mt-20",children:[d.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Skills Offered"}),i.length>0?d.jsx("div",{className:"space-y-6",children:i.map(A=>d.jsxs("div",{className:"p-6 bg-indigo-50 border border-indigo-100 rounded-lg",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:A.skillName}),d.jsxs("div",{className:"flex items-center text-indigo-600 font-semibold my-3",children:[A.compensation==="Monetary Fee"?d.jsx(Ro,{className:"h-5 w-5 mr-1"}):d.jsx(T0,{className:"h-5 w-5 mr-1"}),d.jsx("span",{children:A.compensation})]}),d.jsx("p",{className:"text-lg text-gray-700",children:A.description})]},A.id))}):d.jsx("p",{className:"text-lg text-gray-600",children:"This teacher hasn't listed any skills yet."})]})]})}):d.jsx("div",{className:"py-24 px-4 text-center",children:"Could not find teacher."})}function _s({navigateTo:t,handleLogin:e,handleSignUp:n,authError:r,setAuthError:s}){const[i,o]=U.useState(!0),[l,u]=U.useState(""),[h,p]=U.useState(""),[m,g]=U.useState(""),[T,A]=U.useState("learner"),[P,C]=U.useState(""),x=v=>{if(v.preventDefault(),s(null),i)e(l,h);else{if(!m||!T||!P){s("Please fill out all fields.");return}n(l,h,m,T,P)}};return d.jsx("section",{className:"bg-gray-50 py-20 md:py-32",children:d.jsx("div",{className:"flex flex-col items-center justify-center px-6 mx-auto",children:d.jsx("div",{className:"w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0",children:d.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[d.jsx("h1",{className:"text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl",children:i?"Sign in to your account":"Create an account"}),r&&d.jsx("p",{className:"p-3 bg-red-100 text-red-700 rounded-lg",children:r}),d.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:x,children:[!i&&d.jsxs(d.Fragment,{children:[d.jsx(Ht,{id:"name",type:"text",value:m,onChange:g,placeholder:"Your Full Name",Icon:wr}),d.jsx(Ht,{id:"location",type:"text",value:P,onChange:C,placeholder:"Your Neighborhood",Icon:vu}),d.jsxs("div",{children:[d.jsx("label",{className:"block mb-2 text-lg font-medium text-gray-900",children:"I am a..."}),d.jsxs("div",{className:"flex space-x-4",children:[d.jsx(Xy,{id:"role-learner",value:"learner",checked:T==="learner",onChange:A,Icon:pf,label:"Learner"}),d.jsx(Xy,{id:"role-teacher",value:"teacher",checked:T==="teacher",onChange:A,Icon:Ao,label:"Teacher"})]})]})]}),d.jsx(Ht,{id:"email",type:"email",value:l,onChange:u,placeholder:"your.email@example.com",Icon:x0}),d.jsx(Ht,{id:"password",type:"password",value:h,onChange:p,placeholder:"••••••••",Icon:I1}),d.jsx("button",{type:"submit",className:"w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg px-5 py-3 text-center transition duration-150 ease-in-out",children:i?"Sign in":"Create account"}),d.jsxs("p",{className:"text-lg font-light text-gray-600",children:[i?"Don’t have an account yet? ":"Already have an account? ",d.jsx("button",{type:"button",onClick:()=>o(!i),className:"font-medium text-indigo-600 hover:underline",children:i?"Sign up":"Sign in"})]})]})]})})})})}function Ht({id:t,type:e,value:n,onChange:r,placeholder:s,Icon:i}){return d.jsxs("div",{children:[d.jsx("label",{htmlFor:t,className:"sr-only",children:s}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(i,{className:"h-6 w-6 text-gray-400"})}),d.jsx("input",{type:e,name:t,id:t,className:"bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full pl-11 p-3",placeholder:s,value:n,onChange:o=>r(o.target.value),required:!0})]})]})}function sa({id:t,value:e,onChange:n,placeholder:r,Icon:s}){return d.jsxs("div",{children:[d.jsx("label",{htmlFor:t,className:"sr-only",children:r}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute top-3 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(s,{className:"h-6 w-6 text-gray-400"})}),d.jsx("textarea",{name:t,id:t,rows:4,className:"bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full pl-11 p-3",placeholder:r,value:e,onChange:i=>n(i.target.value),required:!0})]})]})}function Xy({id:t,value:e,checked:n,onChange:r,label:s,Icon:i}){return d.jsxs("div",{className:"flex-1",children:[d.jsx("input",{type:"radio",id:t,name:"role",value:e,checked:n,onChange:o=>r(o.target.value),className:"sr-only"}),d.jsxs("label",{htmlFor:t,className:`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer ${n?"border-indigo-600 bg-indigo-50":"border-gray-300 bg-gray-50"}`,children:[d.jsx(i,{className:`h-8 w-8 mb-2 ${n?"text-indigo-600":"text-gray-500"}`}),d.jsx("span",{className:`text-lg font-medium ${n?"text-indigo-700":"text-gray-700"}`,children:s})]})]})}function Jy({navigateTo:t,user:e,handleLogout:n,selectedConversation:r}){const[s,i]=U.useState(null),[o,l]=U.useState(!0),[u,h]=U.useState("overview");U.useEffect(()=>{r&&h("messages")},[r]),U.useEffect(()=>{if(!e||!ye){l(!1);return}l(!0),(async()=>{const T=Un(ye,"users",e.uid);try{const A=await qu(T);if(A.exists())i(A.data());else{console.warn("No user profile found! Creating one.");const P={uid:e.uid,name:e.displayName||"New User",email:e.email,role:"learner",location:"Not set",bio:`Hi, I'm ${e.displayName||"a new user"}!`,createdAt:kr(),photoURL:""};await fp(T,P),i(P)}}catch(A){console.error("Error fetching/creating profile:",A)}finally{l(!1)}})()},[e]);const p=g=>{switch(g){case"overview":return"Dashboard Overview";case"my-courses":return"My Courses";case"skills":return"My Skills";case"recommendations":return"Skill Recommendations";case"sessions":return"Upcoming Sessions";case"requests":return"Requests & Offers";case"feed":return"Community Feed";case"events":return"Events";case"leaderboard":return"Leaderboard";case"reviews":return"Peer Reviews";case"performance":return"Performance";case"earnings":return"Earnings";case"messages":return"Messages";case"profile":return"My Profile";case"settings":return"Settings";default:return"Dashboard"}},m=()=>{const g={user:e,profile:s,navigateTo:t,setDashboardPage:h,db:ye};switch(u){case"overview":return d.jsx(Zy,{...g});case"my-courses":return d.jsx(G2,{...g});case"skills":return d.jsx(ib,{...g});case"recommendations":return d.jsx(Q2,{...g});case"sessions":return d.jsx(Y2,{...g});case"requests":return d.jsx(X2,{...g});case"feed":return d.jsx(dx,{navigateTo:t,currentUser:e,isDashboard:!0,db:ye});case"events":return d.jsx(J2,{...g});case"leaderboard":return d.jsx(Z2,{...g});case"reviews":return d.jsx(eb,{...g});case"performance":return d.jsx(tb,{...g});case"earnings":return d.jsx(nb,{...g});case"messages":return d.jsx(ob,{user:e,navigateTo:t,initialConvo:r});case"profile":return d.jsx(sb,{profile:s,user:e});case"settings":return d.jsx(rb,{...g});default:return d.jsx(Zy,{...g})}};return o?d.jsx("div",{className:"py-24 px-4 text-center min-h-screen flex items-center justify-center",children:d.jsx("p",{className:"text-lg text-gray-600",children:"Loading dashboard..."})}):s?d.jsxs("div",{className:"flex h-screen bg-gray-50 font-sans",children:[d.jsx(K2,{user:e,handleLogout:n,navigateTo:t,dashboardPage:u,setDashboardPage:h,profile:s}),d.jsx("div",{className:"flex-1 flex flex-col overflow-hidden",children:d.jsxs("main",{className:"flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 md:p-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:p(u)}),u==="overview"&&d.jsxs("h2",{className:"text-2xl font-normal text-gray-600 mt-2 mb-6",children:["Welcome back, ",d.jsx("span",{className:"font-semibold text-indigo-600",children:e.displayName}),"!"]}),d.jsx("div",{className:u==="overview"?"mt-0":"mt-6",children:m()})]})})]}):d.jsx("div",{className:"py-24 px-4 text-center min-h-screen flex items-center justify-center",children:d.jsx("p",{className:"text-lg text-red-600",children:"Error: Could not load user profile. Please try logging out and back in."})})}function K2({user:t,handleLogout:e,navigateTo:n,dashboardPage:r,setDashboardPage:s,profile:i}){const o=[{name:"Dashboard",page:"overview",icon:T1},{name:"My Courses",page:"my-courses",icon:w0},{name:"Skill Recommendations",page:"recommendations",icon:E0},{name:"Upcoming Sessions",page:"sessions",icon:v1},{name:"Requests & Offers",page:"requests",icon:y0},{name:"Community Feed",page:"feed",icon:R0},{name:"Events",page:"events",icon:g0},{name:"Leaderboard",page:"leaderboard",icon:ff},{name:"Peer Reviews",page:"reviews",icon:k0},{name:"Performance",page:"performance",icon:p0},{name:"Earnings",page:"earnings",icon:Ro},{name:"Messages",page:"messages",icon:wu}],l=[{name:"Settings",page:"settings",icon:S0},{name:"My Profile",page:"profile",icon:b1}];return(i==null?void 0:i.role)==="teacher"&&o.splice(2,0,{name:"My Skills",page:"skills",icon:Ao}),d.jsx("div",{className:"hidden md:flex md:flex-col md:w-64 bg-white border-r border-gray-200",children:d.jsxs("div",{className:"flex flex-col flex-grow",children:[d.jsx("div",{className:"flex items-center h-20 px-4",children:d.jsxs("button",{onClick:()=>n("home"),className:"flex items-center text-2xl font-bold text-gray-900 focus:outline-none",children:[d.jsx(C1,{className:"h-7 w-7 mr-2 text-indigo-600"}),"Hyperlocal"]})}),d.jsx("p",{className:"text-sm text-gray-500 px-4 -mt-4 mb-4",children:"Skill Sharing Platform"}),d.jsx("div",{className:"flex-1 flex flex-col overflow-y-auto",children:d.jsx("nav",{className:"flex-1 px-2 py-2 space-y-1",children:o.map(u=>d.jsxs("button",{onClick:()=>s(u.page),className:`flex items-center px-3 py-3 text-sm font-medium rounded-md w-full ${r===u.page?"bg-indigo-100 text-indigo-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`,children:[d.jsx(u.icon,{className:"mr-3 h-5 w-5"}),u.name]},u.name))})}),d.jsxs("div",{className:"border-t border-gray-200 p-2 space-y-1",children:[l.map(u=>d.jsxs("button",{onClick:()=>s(u.page),className:`flex items-center px-3 py-3 text-sm font-medium rounded-md w-full ${r===u.page?"bg-indigo-100 text-indigo-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`,children:[d.jsx(u.icon,{className:"mr-3 h-5 w-5"}),u.name]},u.name)),d.jsxs("button",{onClick:e,className:"flex items-center px-3 py-3 text-sm font-medium rounded-md w-full text-gray-600 hover:bg-gray-100 hover:text-gray-900",children:[d.jsx(_u,{className:"mr-3 h-5 w-5"}),"Logout"]})]})]})})}function Zy({user:t,profile:e,navigateTo:n,setDashboardPage:r,db:s}){const i=[{name:"Skills Learning",value:3,icon:E1},{name:"Skills Teaching",value:2,icon:Ao},{name:"Community Points",value:150,icon:ff}],[o,l]=U.useState([]),[u,h]=U.useState(!0),[p,m]=U.useState([]),[g,T]=U.useState(!0),[A,P]=U.useState([]),[C,x]=U.useState(!0);return U.useEffect(()=>{if(!t||!s)return;const v=Vt(We(s,"enrollments"),Nn("studentId","==",t.uid),yr("enrolledAt","desc"),Jc(2)),S=Gt(v,y=>{const E=[];y.forEach(I=>E.push({id:I.id,...I.data()})),l(E),h(!1)},y=>{console.error("Error fetching courses: ",y),h(!1)}),D=Vt(We(s,"sessions"),Nn("participants","array-contains",t.uid),Nn("sessionDate",">",new Date),yr("sessionDate","asc"),Jc(2)),M=Gt(D,y=>{const E=[];y.forEach(I=>E.push({id:I.id,...I.data()})),m(E),T(!1)},y=>{console.error("Error fetching sessions: ",y),T(!1)}),V=Vt(We(s,"posts"),yr("createdAt","desc"),Jc(2)),w=Gt(V,y=>{const E=[];y.forEach(I=>E.push({id:I.id,...I.data()})),P(E),x(!1)},y=>{console.error("Error fetching feed: ",y),x(!1)});return()=>{S(),M(),w()}},[t,s]),d.jsxs("div",{className:"space-y-6",children:[d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:i.map(v=>d.jsxs("div",{className:"bg-white p-5 rounded-lg shadow flex items-center",children:[d.jsx("div",{className:"p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4",children:d.jsx(v.icon,{className:"h-6 w-6"})}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm font-medium text-gray-500",children:v.name}),d.jsx("p",{className:"text-4xl font-bold text-gray-900",children:v.value})]})]},v.name))}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{className:"relative bg-blue-500 p-6 rounded-lg shadow-lg text-white",children:[d.jsxs("h3",{className:"flex items-center text-2xl font-bold mb-2",children:[d.jsx(mf,{className:"h-6 w-6 mr-2"}),"Find Skills to Learn"]}),d.jsx("p",{className:"text-base mb-4 text-blue-100",children:"Discover new skills in your neighborhood."}),d.jsx("button",{onClick:()=>n("browse"),className:"bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg text-base hover:bg-gray-100 transition-colors shadow",children:"Explore Skills"})]}),d.jsxs("div",{className:"relative bg-amber-500 p-6 rounded-lg shadow-lg text-white",children:[d.jsxs("h3",{className:"flex items-center text-2xl font-bold mb-2",children:[d.jsx(Ao,{className:"h-6 w-6 mr-2"}),"Share Your Skills"]}),d.jsx("p",{className:"text-base mb-4 text-amber-100",children:"Teach others what you know."}),d.jsx("button",{onClick:()=>r("skills"),className:"bg-white text-amber-700 font-semibold px-5 py-2 rounded-lg text-base hover:bg-gray-100 transition-colors shadow",children:"Start Teaching"})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[d.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[d.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"My Courses"}),u?d.jsx("p",{className:"text-gray-500 text-sm",children:"Loading courses..."}):o.length>0?d.jsx("div",{className:"space-y-4",children:o.map(v=>d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center",children:[d.jsx("div",{className:"p-2 bg-gray-100 rounded-full mr-3",children:d.jsx(pf,{className:"h-5 w-5 text-gray-600"})}),d.jsx("span",{className:"font-medium text-gray-700",children:v.skillName||"Course"})]}),d.jsx("span",{className:"text-sm font-medium text-gray-500",children:v.progress||"0/5"})]},v.id))}):d.jsx("p",{className:"text-gray-500 text-sm",children:"No courses yet. Start learning!"})]}),d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[d.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Community Feed"}),C?d.jsx("p",{className:"text-gray-500 text-sm",children:"Loading feed..."}):A.length>0?d.jsx("div",{className:"space-y-4",children:A.map(v=>{var S;return d.jsxs("div",{className:"flex",children:[d.jsx("div",{className:"flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold",children:v.authorName?v.authorName.split(" ").map(D=>D[0]).join("").toUpperCase():"U"}),d.jsx("div",{className:"ml-3",children:d.jsxs("p",{className:"text-sm text-gray-700 leading-snug",children:[d.jsx("span",{className:"font-bold",children:v.authorName||"User"})," ",((S=v.content)==null?void 0:S.length)>50?v.content.substring(0,50)+"...":v.content]})})]},v.id)})}):d.jsx("p",{className:"text-gray-500 text-sm",children:"No community posts yet."})]})]}),d.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[d.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Upcoming Sessions"}),g?d.jsx("p",{className:"text-gray-500 text-sm",children:"Loading sessions..."}):p.length>0?d.jsx("div",{className:"space-y-4",children:p.map(v=>d.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 rounded-lg",children:[d.jsxs("div",{children:[d.jsx("p",{className:"font-medium text-gray-800",children:v.title||"Session"}),d.jsx("p",{className:"text-sm text-gray-500",children:v.sessionDate?new Date(v.sessionDate.seconds*1e3).toLocaleString():"Date TBD"})]}),d.jsx("button",{className:"text-sm font-medium text-indigo-600 hover:text-indigo-800",children:"View"})]},v.id))}):d.jsx("p",{className:"text-gray-500 text-sm",children:"No upcoming sessions."})]}),d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[d.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Performance"}),d.jsx("div",{className:"h-48 flex items-center justify-center",children:d.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 300 100",preserveAspectRatio:"none",children:[d.jsx("path",{d:"M 0 50 L 50 60 L 100 40 L 150 70 L 200 60 L 250 80 L 300 70",fill:"none",stroke:"#818cf8",strokeWidth:"2"}),d.jsx("path",{d:"M 0 50 L 50 60 L 100 40 L 150 70 L 200 60 L 250 80 L 300 70",fill:"#c7d2fe",fillOpacity:"0.3",stroke:"none"}),d.jsx("circle",{cx:"50",cy:"60",r:"3",fill:"#4f46e5"}),d.jsx("circle",{cx:"100",cy:"40",r:"3",fill:"#4f46e5"}),d.jsx("circle",{cx:"150",cy:"70",r:"3",fill:"#4f46e5"}),d.jsx("circle",{cx:"200",cy:"60",r:"3",fill:"#4f46e5"}),d.jsx("circle",{cx:"250",cy:"80",r:"3",fill:"#4f46e5"}),d.jsx("circle",{cx:"300",cy:"70",r:"3",fill:"#4f46e5"})]})}),d.jsxs("div",{className:"flex justify-between text-sm text-gray-500 mt-2",children:[d.jsx("span",{children:"M"}),d.jsx("span",{children:"T"}),d.jsx("span",{children:"W"}),d.jsx("span",{children:"Th"}),d.jsx("span",{children:"F"}),d.jsx("span",{children:"Sa"}),d.jsx("span",{children:"Su"})]})]})]})]})]})}function br({title:t,icon:e}){return d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow text-center",children:[d.jsx(e,{className:"h-16 w-16 text-indigo-300 mx-auto mb-4"}),d.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:t}),d.jsxs("p",{className:"text-lg text-gray-600",children:["This feature is coming soon! This is where you will manage your ",t.toLowerCase(),"."]})]})}function G2({user:t,profile:e}){return d.jsx(br,{title:"My Courses",icon:w0})}function Q2({user:t,profile:e}){return d.jsx(br,{title:"Skill Recommendations",icon:E0})}function Y2({user:t,profile:e,db:n}){const[r,s]=U.useState([]),[i,o]=U.useState(!0);return U.useEffect(()=>{if(!t||!n)return;o(!0);const l=Vt(We(n,"sessions"),Nn("participants","array-contains",t.uid),Nn("sessionDate",">",new Date),yr("sessionDate","asc")),u=Gt(l,h=>{const p=[];h.forEach(m=>{p.push({id:m.id,...m.data()})}),s(p),o(!1)},h=>{console.error("Error fetching sessions: ",h),o(!1)});return()=>u()},[t,n]),d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[d.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Your Upcoming Sessions"}),i?d.jsx("p",{className:"text-gray-500",children:"Loading sessions..."}):r.length===0?d.jsx("p",{className:"text-gray-500 text-lg text-center p-8",children:"You have no upcoming sessions scheduled."}):d.jsx("div",{className:"space-y-4",children:r.map(l=>d.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200",children:[d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-lg text-gray-800",children:l.title||"Session"}),d.jsx("p",{className:"text-sm text-gray-600",children:l.sessionDate?new Date(l.sessionDate.seconds*1e3).toLocaleString():"Date TBD"}),d.jsxs("p",{className:"text-sm text-gray-500",children:["With: ",l.teacherName||"Teacher"]})]}),d.jsx("button",{className:"text-sm font-medium text-indigo-600 hover:text-indigo-800",children:"View Details"})]},l.id))})]})}function X2({user:t,profile:e}){return d.jsx(br,{title:"Requests & Offers",icon:y0})}function J2({user:t,profile:e}){return d.jsx(br,{title:"Events",icon:g0})}function Z2({user:t,profile:e}){return d.jsx(br,{title:"Leaderboard",icon:ff})}function eb({user:t,profile:e}){return d.jsx(br,{title:"Peer Reviews",icon:k0})}function tb({user:t,profile:e}){return d.jsx(br,{title:"Performance",icon:p0})}function nb({user:t,profile:e}){return d.jsx(br,{title:"Earnings",icon:Ro})}function rb({user:t,profile:e,handleLogout:n}){return d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow max-w-lg",children:[d.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Settings"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"p-4 border rounded-lg",children:[d.jsx("h3",{className:"font-medium text-lg",children:"Account"}),d.jsxs("p",{className:"text-gray-600",children:["Email: ",t.email]}),d.jsx("button",{className:"text-sm text-indigo-600 hover:underline mt-1",children:"Change Password (Coming Soon)"})]}),d.jsxs("div",{className:"p-4 border rounded-lg",children:[d.jsx("h3",{className:"font-medium text-lg",children:"Notifications"}),d.jsx("p",{className:"text-gray-600",children:"Manage your notification preferences (Coming Soon)."})]}),d.jsxs("button",{onClick:n,className:"w-full max-w-xs flex items-center justify-center bg-red-100 text-red-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-200 transition duration-150 ease-in-out",children:[d.jsx(_u,{className:"h-6 w-6 mr-2"}),"Log Out"]})]})]})}function sb({profile:t,user:e}){const[n,r]=U.useState(t.name),[s,i]=U.useState(t.bio),[o,l]=U.useState(t.location),[u,h]=U.useState(null),[p,m]=U.useState(!1),[g,T]=U.useState(""),[A,P]=U.useState(t.photoURL||null),C=v=>{if(v.target.files[0]){const S=v.target.files[0];h(S),P(URL.createObjectURL(S))}},x=async v=>{if(v.preventDefault(),!!e){m(!0),T("Updating profile...");try{const S=Un(ye,"users",e.uid);let D=t.photoURL||"";if(u){const V=cx(wp,`profile-pics/${e.uid}`);await lx(V,u),D=await ux(V)}await $E(S,{name:n,bio:s,location:o,photoURL:D}),await kf(pt.currentUser,{displayName:n,photoURL:D}),T("Profile updated successfully!"),h(null)}catch(S){console.error("Error updating profile: ",S),T("Failed to update profile.")}finally{m(!1)}}};return d.jsxs("form",{onSubmit:x,className:"p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8",children:[d.jsxs("div",{className:"md:col-span-1 flex flex-col items-center",children:[d.jsxs("label",{htmlFor:"profile-pic",className:"cursor-pointer",children:[d.jsx("span",{className:"text-lg font-medium text-gray-900 mb-2 block text-center",children:"Profile Picture"}),A?d.jsx("img",{src:A,alt:"Profile",className:"h-40 w-40 rounded-full object-cover shadow-md"}):d.jsx("div",{className:"h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-500",children:d.jsx(wr,{className:"h-20 w-20"})}),d.jsxs("span",{className:"mt-3 flex items-center justify-center text-indigo-600 hover:text-indigo-500",children:[d.jsx(A0,{className:"h-5 w-5 mr-2"}),u?u.name:"Change picture"]})]}),d.jsx("input",{id:"profile-pic",type:"file",accept:"image/*",className:"sr-only",onChange:C})]}),d.jsxs("div",{className:"md:col-span-2 space-y-6",children:[d.jsx(Ht,{id:"profileName",type:"text",value:n,onChange:r,placeholder:"Your Full Name",Icon:wr}),d.jsx(Ht,{id:"profileLocation",type:"text",value:o,onChange:l,placeholder:"Your Neighborhood",Icon:vu}),d.jsx(sa,{id:"profileBio",value:s,onChange:i,placeholder:"Tell your neighbors about yourself...",Icon:v0}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("button",{type:"submit",disabled:p,className:"flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition disabled:bg-gray-400",children:p?"Saving...":"Save Changes"}),g&&d.jsxs("span",{className:`flex items-center text-lg ${g.includes("Success")?"text-green-600":"text-red-600"}`,children:[d.jsx(m0,{className:"h-5 w-5 mr-2"}),g]})]})]})]})}function ib({user:t,profile:e}){const[n,r]=U.useState([]),[s,i]=U.useState(!0),[o,l]=U.useState(""),[u,h]=U.useState(""),[p,m]=U.useState("Monetary Fee");U.useEffect(()=>{i(!0);const T=Vt(We(ye,"skills"),Nn("teacherId","==",t.uid)),A=Gt(T,P=>{const C=[];P.forEach(x=>{C.push({id:x.id,...x.data()})}),r(C),i(!1)});return()=>A()},[t.uid]);const g=async T=>{if(T.preventDefault(),!(!o||!u))try{await ra(We(ye,"skills"),{teacherId:t.uid,teacherName:e.name,skillName:o,description:u,compensation:p,createdAt:kr()}),l(""),h(""),m("Monetary Fee")}catch(A){console.error("Error adding skill: ",A)}};return d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[d.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[d.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Add a New Skill"}),d.jsxs("form",{onSubmit:g,className:"space-y-4",children:[d.jsx(Ht,{id:"skillName",type:"text",value:o,onChange:l,placeholder:"e.g., Guitar Lessons",Icon:pf}),d.jsx(sa,{id:"skillDesc",value:u,onChange:h,placeholder:"Describe your skill and teaching style...",Icon:Ao}),d.jsxs("div",{children:[d.jsx("label",{className:"block mb-2 text-lg font-medium text-gray-900",children:"Compensation"}),d.jsxs("select",{value:p,onChange:T=>m(T.target.value),className:"w-full text-lg p-3 rounded-lg bg-gray-50 border-2 border-gray-300 focus:outline-none focus:border-indigo-500",children:[d.jsx("option",{children:"Monetary Fee"}),d.jsx("option",{children:"Skill Exchange"}),d.jsx("option",{children:"Flexible"})]})]}),d.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition",children:[d.jsx(R1,{className:"h-6 w-6 mr-2"}),"Add Skill"]})]})]}),d.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[d.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Your Listed Skills"}),s?d.jsx("p",{children:"Loading skills..."}):n.length===0?d.jsx("p",{className:"text-lg text-gray-600",children:"You haven't listed any skills yet."}):d.jsx("div",{className:"space-y-4",children:n.map(T=>d.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[d.jsx("h3",{className:"text-xl font-bold text-gray-900",children:T.skillName}),d.jsx("p",{className:"text-gray-600",children:T.compensation})]},T.id))})]})]})}function ob({user:t,navigateTo:e,initialConvo:n}){const[r,s]=U.useState([]),[i,o]=U.useState(n||null),[l,u]=U.useState([]),[h,p]=U.useState(""),[m,g]=U.useState(!0),T=U.useRef(null);U.useEffect(()=>{g(!0);const C=Vt(We(ye,"conversations"),Nn("participants","array-contains",t.uid),yr("lastMessageAt","desc")),x=Gt(C,v=>{const S=[];v.forEach(D=>{S.push({id:D.id,...D.data()})}),s(S),g(!1),n&&!S.find(D=>D.id===n.id)&&(async()=>{const M=await qu(Un(ye,"conversations",n.id));if(M.exists()){const V={id:M.id,...M.data()};s(w=>[V,...w]),o(V)}})()});return()=>x()},[t.uid,n]),U.useEffect(()=>{if(!i){u([]);return}const C=Vt(We(ye,"conversations",i.id,"messages"),yr("timestamp")),x=Gt(C,v=>{const S=[];v.forEach(D=>{S.push({id:D.id,...D.data()})}),u(S)});return()=>x()},[i]),U.useEffect(()=>{var C;(C=T.current)==null||C.scrollIntoView({behavior:"smooth"})},[l]);const A=async C=>{if(C.preventDefault(),!h.trim()||!i)return;const x=h;p("");try{await ra(We(ye,"conversations",i.id,"messages"),{text:x,senderId:t.uid,timestamp:kr()}),await fp(Un(ye,"conversations",i.id),{lastMessage:x,lastMessageAt:kr()},{merge:!0})}catch(v){console.error("Error sending message: ",v)}},P=C=>{const x=C.participants.find(v=>v!==t.uid);return C.participantNames[x]||"Unknown User"};return d.jsxs("div",{className:"flex flex-col md:flex-row h-[calc(100vh-150px)] border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white",children:[d.jsx("div",{className:"w-full md:w-1/3 border-r border-gray-200 bg-white overflow-y-auto",children:m?d.jsx("p",{className:"p-4",children:"Loading conversations..."}):r.length===0?d.jsx("p",{className:"p-4 text-gray-600",children:"No messages yet. Connect with a teacher to start a conversation."}):r.map(C=>d.jsxs("button",{onClick:()=>o(C),className:`w-full text-left p-4 border-b border-gray-200 ${(i==null?void 0:i.id)===C.id?"bg-indigo-50":"hover:bg-gray-50"}`,children:[d.jsx("h3",{className:"text-lg font-semibold",children:P(C)}),d.jsx("p",{className:"text-gray-600 truncate",children:C.lastMessage})]},C.id))}),d.jsx("div",{className:"w-full md:w-2/3 flex flex-col bg-white",children:i?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"p-4 border-b border-gray-200 bg-gray-50",children:d.jsx("h2",{className:"text-xl font-bold",children:P(i)})}),d.jsxs("div",{className:"flex-grow p-4 space-y-4 overflow-y-auto",children:[l.map(C=>d.jsx("div",{className:`flex ${C.senderId===t.uid?"justify-end":"justify-start"}`,children:d.jsx("div",{className:`p-3 rounded-lg max-w-xs lg:max-w-md ${C.senderId===t.uid?"bg-indigo-600 text-white":"bg-gray-200 text-gray-900"}`,children:C.text})},C.id)),d.jsx("div",{ref:T})]}),d.jsx("form",{onSubmit:A,className:"p-4 border-t border-gray-200 bg-gray-50",children:d.jsxs("div",{className:"flex space-x-3",children:[d.jsx("input",{type:"text",value:h,onChange:C=>p(C.target.value),placeholder:"Type your message...",className:"flex-grow text-lg p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"}),d.jsx("button",{type:"submit",className:"px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700",children:"Send"})]})})]}):d.jsx("div",{className:"flex-grow flex items-center justify-center",children:d.jsx("p",{className:"text-lg text-gray-500",children:"Select a conversation to start chatting."})})})]})}function hx(){const t=[{icon:D1,name:"1. Find a Skill",description:"Browse categories or search for any skill you want to learn, from coding to cooking to crafting."},{icon:k1,name:"2. Connect & Chat",description:"View a teacher's profile and start a secure, in-app conversation to ask questions and arrange a lesson."},{icon:O1,name:"3. Learn & Share",description:"Meet your local teacher and start learning! Pay with cash or exchange one of your own skills."}];return d.jsx("section",{className:"py-24 bg-white",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"text-center",children:[d.jsx("h2",{className:"text-4xl font-extrabold text-gray-900",children:"How Hyperlocal Works"}),d.jsx("p",{className:"mt-4 text-xl text-gray-600",children:"Start learning from your neighbors in just 3 simple steps."})]}),d.jsx("div",{className:"mt-20 grid gap-10 md:grid-cols-3",children:t.map(e=>d.jsxs("div",{className:"flex flex-col items-center text-center p-8 bg-gray-50 rounded-lg shadow-lg",children:[d.jsx("div",{className:"flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600",children:d.jsx(e.icon,{className:"h-8 w-8","aria-hidden":"true"})}),d.jsx("h3",{className:"mt-6 text-2xl font-bold text-gray-900",children:e.name}),d.jsx("p",{className:"mt-4 text-lg text-gray-600",children:e.description})]},e.name))})]})})}function ab(){return d.jsx("div",{className:"bg-indigo-50 py-24 pt-44",children:d.jsx(hx,{})})}function lb(){return d.jsx("section",{className:"py-24 bg-white pt-44",children:d.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"text-center",children:[d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900",children:"Our Mission"}),d.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"We believe that everyone has something to teach, and everyone has something to learn. Your neighborhood is filled with incredible talent, from bakers and coders to gardeners and guitarists."}),d.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"Hyperlocal was created to tap into that talent. Our mission is to build stronger, more connected communities by making skill sharing as easy as walking next door. We want to unlock the hidden expertise in every neighborhood, fostering a culture of mutual learning, respect, and growth—one skill at a time."}),d.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"This platform is a Minimum Viable Product (MVP) focused on the core goal: connecting neighbors. We've intentionally excluded complex features like payment processing and scheduling to keep things simple and direct. It's all about the connection."})]})})})}function ub(){const t=[{q:"Is Hyperlocal free to use?",a:"Yes! The platform is completely free to use for both Learners and Teachers. Any compensation for lessons (monetary or skill-exchange) is arranged directly between users."},{q:"How do I get paid as a Teacher?",a:"As an MVP, we do not process payments. You arrange compensation directly with your Learner. You can request a monetary fee (via cash, Venmo, etc.) or a skill exchange. Be sure to agree on terms before you meet!"},{q:"How does messaging work?",a:"Our secure, in-app messaging system allows you to communicate with other users without sharing your personal phone number or email. When you click 'Connect' on a teacher's profile, a private conversation is created in your Dashboard."},{q:"Why isn't there a rating or review system?",a:"To keep our MVP lean and focused, we've excluded a formal rating system for now. We encourage you to use the in-app chat to get a feel for the teacher before scheduling a lesson."}];return d.jsx("section",{className:"py-24 bg-indigo-50 pt-44",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900 text-center mb-16",children:"Help Center (FAQ)"}),d.jsx("div",{className:"space-y-8",children:t.map((e,n)=>d.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:e.q}),d.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e.a})]},n))})]})})}function cb(){const[t,e]=U.useState(""),[n,r]=U.useState(""),[s,i]=U.useState(""),[o,l]=U.useState(!1),u=h=>{h.preventDefault(),console.log("Form submitted:",{name:t,email:n,message:s}),l(!0)};return d.jsx("section",{className:"py-24 bg-white pt-44",children:d.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900 text-center mb-6",children:"Contact Us"}),d.jsx("p",{className:"text-xl text-gray-600 text-center mb-12",children:"Have a question or feedback? We'd love to hear from you."}),o?d.jsxs("div",{className:"p-8 bg-green-50 border border-green-200 rounded-lg text-center",children:[d.jsx("h3",{className:"text-2xl font-bold text-green-800",children:"Message Sent!"}),d.jsx("p",{className:"text-lg text-green-700 mt-2",children:"Thanks for reaching out. We'll get back to you as soon as possible."})]}):d.jsxs("form",{onSubmit:u,className:"p-8 bg-gray-50 rounded-lg shadow-lg space-y-6",children:[d.jsx(Ht,{id:"contact-name",type:"text",value:t,onChange:e,placeholder:"Your Name",Icon:wr}),d.jsx(Ht,{id:"contact-email",type:"email",value:n,onChange:r,placeholder:"Your Email",Icon:x0}),d.jsx(sa,{id:"contact-message",value:s,onChange:i,placeholder:"Your Message...",Icon:wu}),d.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center bg-indigo-600 text-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:[d.jsx(I0,{className:"h-6 w-6 mr-2"}),"Send Message"]})]})]})})}function dx({navigateTo:t,currentUser:e,isDashboard:n=!1,db:r}){const[s,i]=U.useState([]),[o,l]=U.useState(!0),[u,h]=U.useState("");U.useEffect(()=>{if(!r)return;l(!0);const T=Vt(We(r,"posts"),yr("createdAt","desc")),A=Gt(T,P=>{const C=[];P.forEach(x=>{C.push({id:x.id,...x.data()})}),i(C),l(!1)},P=>{console.error("Error fetching posts: ",P),l(!1)});return()=>A()},[r]);const p=async T=>{if(T.preventDefault(),!(!u.trim()||!e||!r))try{await ra(We(r,"posts"),{content:u,authorName:e.displayName||"Anonymous",authorId:e.uid,authorRole:"Learner",createdAt:kr(),likes:0}),h("")}catch(A){console.error("Error adding post: ",A)}},m=n?"div":"section",g=n?{}:{className:"py-24 bg-gray-50 pt-44"};return d.jsx(m,{...g,children:d.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[!n&&d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900 text-center mb-12",children:"Community Forum"}),e&&d.jsx("form",{onSubmit:p,className:"mb-10",children:d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Share with your neighbors"}),d.jsx(sa,{id:"new-post",value:u,onChange:h,placeholder:`What's on your mind, ${e.displayName}?`,Icon:wu}),d.jsxs("button",{type:"submit",className:"w-full mt-4 flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition",children:[d.jsx(I0,{className:"h-6 w-6 mr-2"}),"Post"]})]})}),o?d.jsx("p",{className:"text-center text-lg",children:"Loading posts..."}):s.length===0?d.jsx("p",{className:"text-center text-lg text-gray-600",children:"No community posts yet. Be the first!"}):d.jsx("div",{className:"space-y-8",children:s.map(T=>d.jsx(hb,{post:T,currentUser:e,db:r},T.id))})]})})}function hb({post:t,currentUser:e,db:n}){const[r,s]=U.useState([]),[i,o]=U.useState(""),[l,u]=U.useState(!0);U.useEffect(()=>{if(!n)return;u(!0);const p=Vt(We(n,"posts",t.id,"comments"),yr("createdAt","asc")),m=Gt(p,g=>{const T=[];g.forEach(A=>{T.push({id:A.id,...A.data()})}),s(T),u(!1)},g=>{console.error("Error fetching comments: ",g),u(!1)});return()=>m()},[n,t.id]);const h=async p=>{if(p.preventDefault(),!(!i.trim()||!e||!n))try{await ra(We(n,"posts",t.id,"comments"),{content:i,authorName:e.displayName||"Anonymous",authorId:e.uid,createdAt:kr()}),o("")}catch(m){console.error("Error adding comment: ",m)}};return d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[d.jsxs("div",{className:"flex items-center mb-4",children:[d.jsx("div",{className:"flex-shrink-0 h-12 w-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold",children:t.authorName.split(" ").map(p=>p[0]).join("").toUpperCase()}),d.jsxs("div",{className:"ml-4",children:[d.jsx("h4",{className:"text-xl font-bold text-gray-900",children:t.authorName}),d.jsxs("p",{className:"text-sm text-gray-500",children:[t.authorRole," • ",t.createdAt?new Date(t.createdAt.seconds*1e3).toLocaleString():"Just now"]})]})]}),d.jsx("p",{className:"text-lg text-gray-800 mb-4",children:t.content}),d.jsxs("div",{className:"flex items-center space-x-4 border-b border-t border-gray-200 py-3",children:[d.jsxs("button",{className:"flex items-center text-gray-600 hover:text-indigo-600",children:[d.jsx(N1,{className:"h-5 w-5 mr-2"})," ",t.likes||0," Likes"]}),d.jsxs("div",{className:"flex items-center text-gray-600",children:[d.jsx(A1,{className:"h-5 w-5 mr-2"})," ",r.length," Comments"]})]}),d.jsx("div",{className:"mt-4 space-y-4",children:l?d.jsx("p",{className:"text-sm text-gray-500",children:"Loading comments..."}):r.map(p=>d.jsxs("div",{className:"flex",children:[d.jsx("div",{className:"flex-shrink-0 h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm",children:p.authorName.split(" ").map(m=>m[0]).join("").toUpperCase()}),d.jsxs("div",{className:"ml-3 bg-gray-100 p-3 rounded-lg flex-1",children:[d.jsxs("p",{className:"text-base",children:[d.jsx("span",{className:"font-bold text-gray-900",children:p.authorName})," ",p.content]}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:p.createdAt?new Date(p.createdAt.seconds*1e3).toLocaleString():"Just now"})]})]},p.id))}),e&&d.jsxs("form",{onSubmit:h,className:"mt-4 flex space-x-3",children:[d.jsx("input",{type:"text",value:i,onChange:p=>o(p.target.value),placeholder:"Write a comment...",className:"flex-grow text-base p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"}),d.jsx("button",{type:"submit",className:"px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700",children:"Reply"})]})]})}function db({navigateTo:t,currentUser:e}){return d.jsx("section",{className:"py-24 bg-white min-h-screen pt-20",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900 text-center mb-12",children:"My Favorites"}),d.jsxs("div",{className:"bg-gray-50 p-8 rounded-lg shadow-inner text-center",children:[d.jsx(_0,{className:"h-16 w-16 text-indigo-300 mx-auto mb-4"}),d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Coming Soon!"}),d.jsx("p",{className:"text-lg text-gray-600",children:"This is where you'll find all your saved skills and teachers."})]})]})})}function fb({navigateTo:t,currentUser:e,handleLogout:n}){const[r,s]=U.useState(null),[i,o]=U.useState(!0),[l,u]=U.useState(""),[h,p]=U.useState(""),[m,g]=U.useState(""),[T,A]=U.useState(null),[P,C]=U.useState(!1),[x,v]=U.useState(""),[S,D]=U.useState(null);U.useEffect(()=>{if(!e){o(!1);return}o(!0),(async()=>{try{const y=Un(ye,"users",e.uid),E=await qu(y);if(E.exists()){const I=E.data();s(I),u(I.name||e.displayName||""),p(I.bio||""),g(I.location||""),D(I.photoURL||null)}else console.error("No profile found for settings page!")}catch(y){console.error("Error fetching profile for settings:",y)}finally{o(!1)}})()},[e]);const M=w=>{if(w.target.files[0]){const y=w.target.files[0];A(y),D(URL.createObjectURL(y))}},V=async w=>{if(w.preventDefault(),!(!e||!r)){C(!0),v("Updating profile...");try{const y=Un(ye,"users",e.uid);let E=r.photoURL||"";if(T){const R=cx(wp,`profile-pics/${e.uid}`);await lx(R,T),E=await ux(R)}await $E(y,{name:l,bio:h,location:m,photoURL:E}),await kf(pt.currentUser,{displayName:l,photoURL:E}),v("Profile updated successfully!"),A(null)}catch(y){console.error("Error updating profile: ",y),v("Failed to update profile.")}finally{C(!1)}}};return i?d.jsx("div",{className:"py-24 px-4 text-center min-h-screen flex items-center justify-center",children:d.jsx("p",{className:"text-lg text-gray-600",children:"Loading settings..."})}):d.jsx("section",{className:"py-24 bg-gray-50 min-h-screen pt-20",children:d.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900 mb-12",children:"Settings"}),d.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden divide-y divide-gray-200",children:[d.jsxs("form",{onSubmit:V,className:"p-6 grid grid-cols-1 md:grid-cols-3 gap-8",children:[d.jsxs("div",{className:"md:col-span-1 flex flex-col items-center",children:[d.jsxs("label",{htmlFor:"profile-pic-settings",className:"cursor-pointer",children:[d.jsx("span",{className:"text-lg font-medium text-gray-900 mb-2 block text-center",children:"Profile Picture"}),S?d.jsx("img",{src:S,alt:"Profile",className:"h-40 w-40 rounded-full object-cover shadow-md"}):d.jsx("div",{className:"h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-500",children:d.jsx(wr,{className:"h-20 w-20"})}),d.jsxs("span",{className:"mt-3 flex items-center justify-center text-indigo-600 hover:text-indigo-500",children:[d.jsx(A0,{className:"h-5 w-5 mr-2"}),T?T.name:"Change picture"]})]}),d.jsx("input",{id:"profile-pic-settings",type:"file",accept:"image/*",className:"sr-only",onChange:M})]}),d.jsxs("div",{className:"md:col-span-2 space-y-6",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"My Profile"}),d.jsx(Ht,{id:"settingsName",type:"text",value:l,onChange:u,placeholder:"Your Full Name",Icon:wr}),d.jsx(Ht,{id:"settingsLocation",type:"text",value:m,onChange:g,placeholder:"Your Neighborhood",Icon:vu}),d.jsx(sa,{id:"settingsBio",value:h,onChange:p,placeholder:"Tell your neighbors about yourself...",Icon:v0}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("button",{type:"submit",disabled:P,className:"flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition disabled:bg-gray-400",children:P?"Saving...":"Save Changes"}),x&&d.jsxs("span",{className:`flex items-center text-lg ${x.includes("Success")?"text-green-600":"text-red-600"}`,children:[d.jsx(m0,{className:"h-5 w-5 mr-2"}),x]})]})]})]}),d.jsxs("div",{className:"p-6",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Current Plan"}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("p",{className:"text-lg",children:["You are on the ",d.jsx("span",{className:"font-bold text-indigo-600",children:"Free Tier"})]}),d.jsx("button",{className:"bg-indigo-100 text-indigo-700 px-5 py-2 rounded-lg text-lg font-medium hover:bg-indigo-200 transition",children:"Upgrade (Coming Soon)"})]})]}),d.jsx("div",{className:"p-6",children:d.jsxs("button",{onClick:n,className:"w-full max-w-xs flex items-center justify-center bg-red-100 text-red-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-200 transition duration-150 ease-in-out",children:[d.jsx(_u,{className:"h-6 w-6 mr-2"}),"Log Out"]})})]})]})})}d0(document.getElementById("root")).render(d.jsx(U.StrictMode,{children:d.jsx(B2,{})}));
