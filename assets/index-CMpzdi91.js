(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Yy={exports:{}},Yl={},Xy={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),VT=Symbol.for("react.portal"),MT=Symbol.for("react.fragment"),jT=Symbol.for("react.strict_mode"),UT=Symbol.for("react.profiler"),FT=Symbol.for("react.provider"),BT=Symbol.for("react.context"),zT=Symbol.for("react.forward_ref"),$T=Symbol.for("react.suspense"),HT=Symbol.for("react.memo"),qT=Symbol.for("react.lazy"),mm=Symbol.iterator;function WT(t){return t===null||typeof t!="object"?null:(t=mm&&t[mm]||t["@@iterator"],typeof t=="function"?t:null)}var Jy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zy=Object.assign,e_={};function ni(t,e,n){this.props=t,this.context=e,this.refs=e_,this.updater=n||Jy}ni.prototype.isReactComponent={};ni.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ni.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t_(){}t_.prototype=ni.prototype;function pd(t,e,n){this.props=t,this.context=e,this.refs=e_,this.updater=n||Jy}var md=pd.prototype=new t_;md.constructor=pd;Zy(md,ni.prototype);md.isPureReactComponent=!0;var gm=Array.isArray,n_=Object.prototype.hasOwnProperty,gd={current:null},r_={key:!0,ref:!0,__self:!0,__source:!0};function s_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)n_.call(e,r)&&!r_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Oo,type:t,key:i,ref:o,props:s,_owner:gd.current}}function KT(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function GT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ym=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GT(""+t.key):e.toString(36)}function za(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case VT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+uc(o,0):r,gm(s)?(n="",t!=null&&(n=t.replace(ym,"$&/")+"/"),za(s,e,n,"",function(h){return h})):s!=null&&(yd(s)&&(s=KT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ym,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",gm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+uc(i,l);o+=za(i,e,n,u,s)}else if(u=WT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+uc(i,l++),o+=za(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var r=[],s=0;return za(t,r,"","",function(i){return e.call(n,i,s++)}),r}function QT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},$a={transition:null},YT={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:$a,ReactCurrentOwner:gd};function i_(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=ni;Z.Fragment=MT;Z.Profiler=UT;Z.PureComponent=pd;Z.StrictMode=jT;Z.Suspense=$T;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YT;Z.act=i_;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=gd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)n_.call(e,u)&&!r_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Oo,type:t.type,key:s,ref:i,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:BT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FT,_context:t},t.Consumer=t};Z.createElement=s_;Z.createFactory=function(t){var e=s_.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:zT,render:t}};Z.isValidElement=yd;Z.lazy=function(t){return{$$typeof:qT,_payload:{_status:-1,_result:t},_init:QT}};Z.memo=function(t,e){return{$$typeof:HT,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=$a.transition;$a.transition={};try{t()}finally{$a.transition=e}};Z.unstable_act=i_;Z.useCallback=function(t,e){return ht.current.useCallback(t,e)};Z.useContext=function(t){return ht.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ht.current.useEffect(t,e)};Z.useId=function(){return ht.current.useId()};Z.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ht.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Z.useRef=function(t){return ht.current.useRef(t)};Z.useState=function(t){return ht.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ht.current.useTransition()};Z.version="18.3.1";Xy.exports=Z;var B=Xy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=B,JT=Symbol.for("react.element"),ZT=Symbol.for("react.fragment"),eI=Object.prototype.hasOwnProperty,tI=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nI={key:!0,ref:!0,__self:!0,__source:!0};function o_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eI.call(e,r)&&!nI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:JT,type:t,key:i,ref:o,props:s,_owner:tI.current}}Yl.Fragment=ZT;Yl.jsx=o_;Yl.jsxs=o_;Yy.exports=Yl;var d=Yy.exports,a_={exports:{}},Rt={},l_={exports:{}},u_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var _e=J-1>>>1,ue=z[_e];if(0<s(ue,Q))z[_e]=Q,z[J]=ue,J=_e;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var _e=0,ue=z.length,Ae=ue>>>1;_e<Ae;){var dn=2*(_e+1)-1,fn=z[dn],pn=dn+1,mn=z[pn];if(0>s(fn,J))pn<ue&&0>s(mn,fn)?(z[_e]=mn,z[pn]=J,_e=pn):(z[_e]=fn,z[dn]=J,_e=dn);else if(pn<ue&&0>s(mn,J))z[_e]=mn,z[pn]=J,_e=pn;else break e}}return Q}function s(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,y=3,I=!1,A=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=z)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function D(z){if(C=!1,x(z),!A)if(n(u)!==null)A=!0,ci(U);else{var Q=n(h);Q!==null&&hn(D,Q.startTime-z)}}function U(z,Q){A=!1,C&&(C=!1,w(_),_=-1),I=!0;var J=y;try{for(x(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||z&&!R());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,y=m.priorityLevel;var ue=_e(m.expirationTime<=Q);Q=t.unstable_now(),typeof ue=="function"?m.callback=ue:m===n(u)&&r(u),x(Q)}else r(u);m=n(u)}if(m!==null)var Ae=!0;else{var dn=n(h);dn!==null&&hn(D,dn.startTime-Q),Ae=!1}return Ae}finally{m=null,y=J,I=!1}}var V=!1,E=null,_=-1,T=5,S=-1;function R(){return!(t.unstable_now()-S<T)}function P(){if(E!==null){var z=t.unstable_now();S=z;var Q=!0;try{Q=E(!0,z)}finally{Q?k():(V=!1,E=null)}}else V=!1}var k;if(typeof v=="function")k=function(){v(P)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,Ar=Nt.port2;Nt.port1.onmessage=P,k=function(){Ar.postMessage(null)}}else k=function(){N(P,0)};function ci(z){E=z,V||(V=!0,k())}function hn(z,Q){_=N(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||I||(A=!0,ci(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var J=y;y=Q;try{return z()}finally{y=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=y;y=z;try{return Q()}finally{y=J}},t.unstable_scheduleCallback=function(z,Q,J){var _e=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=J+ue,z={id:p++,callback:Q,priorityLevel:z,startTime:J,expirationTime:ue,sortIndex:-1},J>_e?(z.sortIndex=J,e(h,z),n(u)===null&&z===n(h)&&(C?(w(_),_=-1):C=!0,hn(D,J-_e))):(z.sortIndex=ue,e(u,z),A||I||(A=!0,ci(U))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var Q=y;return function(){var J=y;y=Q;try{return z.apply(this,arguments)}finally{y=J}}}})(u_);l_.exports=u_;var rI=l_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sI=B,At=rI;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c_=new Set,io={};function ts(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(io[t]=e,t=0;t<e.length;t++)c_.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=Object.prototype.hasOwnProperty,iI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_m={},vm={};function oI(t){return Gc.call(vm,t)?!0:Gc.call(_m,t)?!1:iI.test(t)?vm[t]=!0:(_m[t]=!0,!1)}function aI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lI(t,e,n,r){if(e===null||typeof e>"u"||aI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,vd);We[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,vd);We[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,vd);We[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wd(t,e,n,r){var s=We.hasOwnProperty(e)?We[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lI(e,n,s,r)&&(n=null),r||s===null?oI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=sI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),gs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),h_=Symbol.for("react.provider"),d_=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),Xc=Symbol.for("react.suspense_list"),Id=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),f_=Symbol.for("react.offscreen"),wm=Symbol.iterator;function xi(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,cc;function Oi(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var hc=!1;function dc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oi(t):""}function uI(t){switch(t.tag){case 5:return Oi(t.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 2:case 15:return t=dc(t.type,!1),t;case 11:return t=dc(t.type.render,!1),t;case 1:return t=dc(t.type,!0),t;default:return""}}function Jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case gs:return"Portal";case Qc:return"Profiler";case Ed:return"StrictMode";case Yc:return"Suspense";case Xc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case d_:return(t.displayName||"Context")+".Consumer";case h_:return(t._context.displayName||"Context")+".Provider";case Td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Id:return e=t.displayName||null,e!==null?e:Jc(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return Jc(t(e))}catch{}}return null}function cI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jc(e);case 8:return e===Ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hI(t){var e=p_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=hI(t))}function m_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=p_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Em(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g_(t,e){e=e.checked,e!=null&&wd(t,"checked",e,!1)}function eh(t,e){g_(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?th(t,e.type,n):e.hasOwnProperty("defaultValue")&&th(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function th(t,e,n){(e!=="number"||ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Li=Array.isArray;function Cs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function nh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Li(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function y_(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function __(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?__(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,v_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dI=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(t){dI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hi[e]=Hi[t]})});function w_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hi.hasOwnProperty(t)&&Hi[t]?(""+e).trim():e+"px"}function E_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=w_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var fI=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sh(t,e){if(e){if(fI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function ih(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oh=null;function xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ah=null,Ns=null,Ps=null;function Sm(t){if(t=Mo(t)){if(typeof ah!="function")throw Error(j(280));var e=t.stateNode;e&&(e=tu(e),ah(t.stateNode,t.type,e))}}function T_(t){Ns?Ps?Ps.push(t):Ps=[t]:Ns=t}function I_(){if(Ns){var t=Ns,e=Ps;if(Ps=Ns=null,Sm(t),e)for(t=0;t<e.length;t++)Sm(e[t])}}function x_(t,e){return t(e)}function S_(){}var fc=!1;function k_(t,e,n){if(fc)return t(e,n);fc=!0;try{return x_(t,e,n)}finally{fc=!1,(Ns!==null||Ps!==null)&&(S_(),I_())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=tu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var lh=!1;if(Cn)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){lh=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{lh=!1}function pI(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var qi=!1,cl=null,hl=!1,uh=null,mI={onError:function(t){qi=!0,cl=t}};function gI(t,e,n,r,s,i,o,l,u){qi=!1,cl=null,pI.apply(mI,arguments)}function yI(t,e,n,r,s,i,o,l,u){if(gI.apply(this,arguments),qi){if(qi){var h=cl;qi=!1,cl=null}else throw Error(j(198));hl||(hl=!0,uh=h)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function A_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function km(t){if(ns(t)!==t)throw Error(j(188))}function _I(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return km(s),t;if(i===r)return km(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function R_(t){return t=_I(t),t!==null?C_(t):null}function C_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=C_(t);if(e!==null)return e;t=t.sibling}return null}var N_=At.unstable_scheduleCallback,Am=At.unstable_cancelCallback,vI=At.unstable_shouldYield,wI=At.unstable_requestPaint,Ce=At.unstable_now,EI=At.unstable_getCurrentPriorityLevel,Sd=At.unstable_ImmediatePriority,P_=At.unstable_UserBlockingPriority,dl=At.unstable_NormalPriority,TI=At.unstable_LowPriority,b_=At.unstable_IdlePriority,Xl=null,en=null;function II(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:kI,xI=Math.log,SI=Math.LN2;function kI(t){return t>>>=0,t===0?32:31-(xI(t)/SI|0)|0}var Ea=64,Ta=4194304;function Vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Vi(l):(i&=o,i!==0&&(r=Vi(i)))}else o=n&~s,o!==0?r=Vi(o):i!==0&&(r=Vi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),s=1<<n,r|=t[n],e&=~s;return r}function AI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-$t(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=AI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function ch(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function D_(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function CI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-$t(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function O_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var L_,Ad,V_,M_,j_,hh=!1,Ia=[],nr=null,rr=null,sr=null,lo=new Map,uo=new Map,Wn=[],NI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rm(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function ki(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Mo(e),e!==null&&Ad(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function PI(t,e,n,r,s){switch(e){case"focusin":return nr=ki(nr,t,e,n,r,s),!0;case"dragenter":return rr=ki(rr,t,e,n,r,s),!0;case"mouseover":return sr=ki(sr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return lo.set(i,ki(lo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,uo.set(i,ki(uo.get(i)||null,t,e,n,r,s)),!0}return!1}function U_(t){var e=Lr(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=A_(n),e!==null){t.blockedOn=e,j_(t.priority,function(){V_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ha(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);oh=r,n.target.dispatchEvent(r),oh=null}else return e=Mo(n),e!==null&&Ad(e),t.blockedOn=n,!1;e.shift()}return!0}function Cm(t,e,n){Ha(t)&&n.delete(e)}function bI(){hh=!1,nr!==null&&Ha(nr)&&(nr=null),rr!==null&&Ha(rr)&&(rr=null),sr!==null&&Ha(sr)&&(sr=null),lo.forEach(Cm),uo.forEach(Cm)}function Ai(t,e){t.blockedOn===e&&(t.blockedOn=null,hh||(hh=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,bI)))}function co(t){function e(s){return Ai(s,t)}if(0<Ia.length){Ai(Ia[0],t);for(var n=1;n<Ia.length;n++){var r=Ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Ai(nr,t),rr!==null&&Ai(rr,t),sr!==null&&Ai(sr,t),lo.forEach(e),uo.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)U_(n),n.blockedOn===null&&Wn.shift()}var bs=Mn.ReactCurrentBatchConfig,pl=!0;function DI(t,e,n,r){var s=ae,i=bs.transition;bs.transition=null;try{ae=1,Rd(t,e,n,r)}finally{ae=s,bs.transition=i}}function OI(t,e,n,r){var s=ae,i=bs.transition;bs.transition=null;try{ae=4,Rd(t,e,n,r)}finally{ae=s,bs.transition=i}}function Rd(t,e,n,r){if(pl){var s=dh(t,e,n,r);if(s===null)xc(t,e,r,ml,n),Rm(t,r);else if(PI(s,t,e,n,r))r.stopPropagation();else if(Rm(t,r),e&4&&-1<NI.indexOf(t)){for(;s!==null;){var i=Mo(s);if(i!==null&&L_(i),i=dh(t,e,n,r),i===null&&xc(t,e,r,ml,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else xc(t,e,r,null,n)}}var ml=null;function dh(t,e,n,r){if(ml=null,t=xd(r),t=Lr(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=A_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ml=t,null}function F_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(EI()){case Sd:return 1;case P_:return 4;case dl:case TI:return 16;case b_:return 536870912;default:return 16}default:return 16}}var Zn=null,Cd=null,qa=null;function B_(){if(qa)return qa;var t,e=Cd,n=e.length,r,s="value"in Zn?Zn.value:Zn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return qa=s.slice(t,1<r?1-r:void 0)}function Wa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function Nm(){return!1}function Ct(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xa:Nm,this.isPropagationStopped=Nm,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nd=Ct(ri),Vo=Ee({},ri,{view:0,detail:0}),LI=Ct(Vo),mc,gc,Ri,Jl=Ee({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ri&&(Ri&&t.type==="mousemove"?(mc=t.screenX-Ri.screenX,gc=t.screenY-Ri.screenY):gc=mc=0,Ri=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),Pm=Ct(Jl),VI=Ee({},Jl,{dataTransfer:0}),MI=Ct(VI),jI=Ee({},Vo,{relatedTarget:0}),yc=Ct(jI),UI=Ee({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),FI=Ct(UI),BI=Ee({},ri,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zI=Ct(BI),$I=Ee({},ri,{data:0}),bm=Ct($I),HI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WI[t])?!!e[t]:!1}function Pd(){return KI}var GI=Ee({},Vo,{key:function(t){if(t.key){var e=HI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pd,charCode:function(t){return t.type==="keypress"?Wa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QI=Ct(GI),YI=Ee({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=Ct(YI),XI=Ee({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pd}),JI=Ct(XI),ZI=Ee({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=Ct(ZI),tx=Ee({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=Ct(tx),rx=[9,13,27,32],bd=Cn&&"CompositionEvent"in window,Wi=null;Cn&&"documentMode"in document&&(Wi=document.documentMode);var sx=Cn&&"TextEvent"in window&&!Wi,z_=Cn&&(!bd||Wi&&8<Wi&&11>=Wi),Om=" ",Lm=!1;function $_(t,e){switch(t){case"keyup":return rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function ix(t,e){switch(t){case"compositionend":return H_(e);case"keypress":return e.which!==32?null:(Lm=!0,Om);case"textInput":return t=e.data,t===Om&&Lm?null:t;default:return null}}function ox(t,e){if(_s)return t==="compositionend"||!bd&&$_(t,e)?(t=B_(),qa=Cd=Zn=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z_&&e.locale!=="ko"?null:e.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ax[t.type]:e==="textarea"}function q_(t,e,n,r){T_(r),e=gl(e,"onChange"),0<e.length&&(n=new Nd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ki=null,ho=null;function lx(t){nv(t,0)}function Zl(t){var e=Es(t);if(m_(e))return t}function ux(t,e){if(t==="change")return e}var W_=!1;if(Cn){var _c;if(Cn){var vc="oninput"in document;if(!vc){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),vc=typeof Mm.oninput=="function"}_c=vc}else _c=!1;W_=_c&&(!document.documentMode||9<document.documentMode)}function jm(){Ki&&(Ki.detachEvent("onpropertychange",K_),ho=Ki=null)}function K_(t){if(t.propertyName==="value"&&Zl(ho)){var e=[];q_(e,ho,t,xd(t)),k_(lx,e)}}function cx(t,e,n){t==="focusin"?(jm(),Ki=e,ho=n,Ki.attachEvent("onpropertychange",K_)):t==="focusout"&&jm()}function hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(ho)}function dx(t,e){if(t==="click")return Zl(e)}function fx(t,e){if(t==="input"||t==="change")return Zl(e)}function px(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:px;function fo(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Gc.call(e,s)||!Wt(t[s],e[s]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,e){var n=Um(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Um(n)}}function G_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q_(){for(var t=window,e=ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ul(t.document)}return e}function Dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mx(t){var e=Q_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G_(n.ownerDocument.documentElement,n)){if(r!==null&&Dd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Fm(n,i);var o=Fm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gx=Cn&&"documentMode"in document&&11>=document.documentMode,vs=null,fh=null,Gi=null,ph=!1;function Bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ph||vs==null||vs!==ul(r)||(r=vs,"selectionStart"in r&&Dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&fo(Gi,r)||(Gi=r,r=gl(fh,"onSelect"),0<r.length&&(e=new Nd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},wc={},Y_={};Cn&&(Y_=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function eu(t){if(wc[t])return wc[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y_)return wc[t]=e[n];return t}var X_=eu("animationend"),J_=eu("animationiteration"),Z_=eu("animationstart"),ev=eu("transitionend"),tv=new Map,zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){tv.set(t,e),ts(e,[t])}for(var Ec=0;Ec<zm.length;Ec++){var Tc=zm[Ec],yx=Tc.toLowerCase(),_x=Tc[0].toUpperCase()+Tc.slice(1);Er(yx,"on"+_x)}Er(X_,"onAnimationEnd");Er(J_,"onAnimationIteration");Er(Z_,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(ev,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function $m(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yI(r,e,void 0,t),t.currentTarget=null}function nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;$m(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;$m(s,l,h),i=u}}}if(hl)throw t=uh,hl=!1,uh=null,t}function fe(t,e){var n=e[vh];n===void 0&&(n=e[vh]=new Set);var r=t+"__bubble";n.has(r)||(rv(e,t,2,!1),n.add(r))}function Ic(t,e,n){var r=0;e&&(r|=4),rv(n,t,r,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[ka]){t[ka]=!0,c_.forEach(function(n){n!=="selectionchange"&&(vx.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,Ic("selectionchange",!1,e))}}function rv(t,e,n,r){switch(F_(e)){case 1:var s=DI;break;case 4:s=OI;break;default:s=Rd}n=s.bind(null,e,n,t),s=void 0,!lh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function xc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Lr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}k_(function(){var h=i,p=xd(n),m=[];e:{var y=tv.get(t);if(y!==void 0){var I=Nd,A=t;switch(t){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":I=QI;break;case"focusin":A="focus",I=yc;break;case"focusout":A="blur",I=yc;break;case"beforeblur":case"afterblur":I=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=MI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=JI;break;case X_:case J_:case Z_:I=FI;break;case ev:I=ex;break;case"scroll":I=LI;break;case"wheel":I=nx;break;case"copy":case"cut":case"paste":I=zI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Dm}var C=(e&4)!==0,N=!C&&t==="scroll",w=C?y!==null?y+"Capture":null:y;C=[];for(var v=h,x;v!==null;){x=v;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,w!==null&&(D=ao(v,w),D!=null&&C.push(mo(v,D,x)))),N)break;v=v.return}0<C.length&&(y=new I(y,A,null,n,p),m.push({event:y,listeners:C}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",y&&n!==oh&&(A=n.relatedTarget||n.fromElement)&&(Lr(A)||A[Nn]))break e;if((I||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,I?(A=n.relatedTarget||n.toElement,I=h,A=A?Lr(A):null,A!==null&&(N=ns(A),A!==N||A.tag!==5&&A.tag!==6)&&(A=null)):(I=null,A=h),I!==A)){if(C=Pm,D="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=Dm,D="onPointerLeave",w="onPointerEnter",v="pointer"),N=I==null?y:Es(I),x=A==null?y:Es(A),y=new C(D,v+"leave",I,n,p),y.target=N,y.relatedTarget=x,D=null,Lr(p)===h&&(C=new C(w,v+"enter",A,n,p),C.target=x,C.relatedTarget=N,D=C),N=D,I&&A)t:{for(C=I,w=A,v=0,x=C;x;x=hs(x))v++;for(x=0,D=w;D;D=hs(D))x++;for(;0<v-x;)C=hs(C),v--;for(;0<x-v;)w=hs(w),x--;for(;v--;){if(C===w||w!==null&&C===w.alternate)break t;C=hs(C),w=hs(w)}C=null}else C=null;I!==null&&Hm(m,y,I,C,!1),A!==null&&N!==null&&Hm(m,N,A,C,!0)}}e:{if(y=h?Es(h):window,I=y.nodeName&&y.nodeName.toLowerCase(),I==="select"||I==="input"&&y.type==="file")var U=ux;else if(Vm(y))if(W_)U=fx;else{U=hx;var V=cx}else(I=y.nodeName)&&I.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=dx);if(U&&(U=U(t,h))){q_(m,U,n,p);break e}V&&V(t,y,h),t==="focusout"&&(V=y._wrapperState)&&V.controlled&&y.type==="number"&&th(y,"number",y.value)}switch(V=h?Es(h):window,t){case"focusin":(Vm(V)||V.contentEditable==="true")&&(vs=V,fh=h,Gi=null);break;case"focusout":Gi=fh=vs=null;break;case"mousedown":ph=!0;break;case"contextmenu":case"mouseup":case"dragend":ph=!1,Bm(m,n,p);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":Bm(m,n,p)}var E;if(bd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else _s?$_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(z_&&n.locale!=="ko"&&(_s||_!=="onCompositionStart"?_==="onCompositionEnd"&&_s&&(E=B_()):(Zn=p,Cd="value"in Zn?Zn.value:Zn.textContent,_s=!0)),V=gl(h,_),0<V.length&&(_=new bm(_,t,null,n,p),m.push({event:_,listeners:V}),E?_.data=E:(E=H_(n),E!==null&&(_.data=E)))),(E=sx?ix(t,n):ox(t,n))&&(h=gl(h,"onBeforeInput"),0<h.length&&(p=new bm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=E))}nv(m,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ao(t,n),i!=null&&r.unshift(mo(t,i,s)),i=ao(t,e),i!=null&&r.push(mo(t,i,s))),t=t.return}return r}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=ao(n,i),u!=null&&o.unshift(mo(n,u,l))):s||(u=ao(n,i),u!=null&&o.push(mo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function qm(t){return(typeof t=="string"?t:""+t).replace(wx,`
`).replace(Ex,"")}function Aa(t,e,n){if(e=qm(e),qm(t)!==e&&n)throw Error(j(425))}function yl(){}var mh=null,gh=null;function yh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _h=typeof setTimeout=="function"?setTimeout:void 0,Tx=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,Ix=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(t){return Wm.resolve(null).then(t).catch(xx)}:_h;function xx(t){setTimeout(function(){throw t})}function Sc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);co(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var si=Math.random().toString(36).slice(2),Xt="__reactFiber$"+si,go="__reactProps$"+si,Nn="__reactContainer$"+si,vh="__reactEvents$"+si,Sx="__reactListeners$"+si,kx="__reactHandles$"+si;function Lr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Km(t);t!==null;){if(n=t[Xt])return n;t=Km(t)}return e}t=n,n=t.parentNode}return null}function Mo(t){return t=t[Xt]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function tu(t){return t[go]||null}var wh=[],Ts=-1;function Tr(t){return{current:t}}function me(t){0>Ts||(t.current=wh[Ts],wh[Ts]=null,Ts--)}function he(t,e){Ts++,wh[Ts]=t.current,t.current=e}var pr={},st=Tr(pr),yt=Tr(!1),$r=pr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function _t(t){return t=t.childContextTypes,t!=null}function _l(){me(yt),me(st)}function Gm(t,e,n){if(st.current!==pr)throw Error(j(168));he(st,e),he(yt,n)}function sv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,cI(t)||"Unknown",s));return Ee({},n,r)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,$r=st.current,he(st,t),he(yt,yt.current),!0}function Qm(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=sv(t,e,$r),r.__reactInternalMemoizedMergedChildContext=t,me(yt),me(st),he(st,t)):me(yt),he(yt,n)}var vn=null,nu=!1,kc=!1;function iv(t){vn===null?vn=[t]:vn.push(t)}function Ax(t){nu=!0,iv(t)}function Ir(){if(!kc&&vn!==null){kc=!0;var t=0,e=ae;try{var n=vn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,nu=!1}catch(s){throw vn!==null&&(vn=vn.slice(t+1)),N_(Sd,Ir),s}finally{ae=e,kc=!1}}return null}var Is=[],xs=0,wl=null,El=0,Pt=[],bt=0,Hr=null,wn=1,En="";function br(t,e){Is[xs++]=El,Is[xs++]=wl,wl=t,El=e}function ov(t,e,n){Pt[bt++]=wn,Pt[bt++]=En,Pt[bt++]=Hr,Hr=t;var r=wn;t=En;var s=32-$t(r)-1;r&=~(1<<s),n+=1;var i=32-$t(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,wn=1<<32-$t(e)+s|n<<s|r,En=i+t}else wn=1<<i|n<<s|r,En=t}function Od(t){t.return!==null&&(br(t,1),ov(t,1,0))}function Ld(t){for(;t===wl;)wl=Is[--xs],Is[xs]=null,El=Is[--xs],Is[xs]=null;for(;t===Hr;)Hr=Pt[--bt],Pt[bt]=null,En=Pt[--bt],Pt[bt]=null,wn=Pt[--bt],Pt[bt]=null}var St=null,Tt=null,ge=!1,Bt=null;function av(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ym(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,Tt=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:wn,overflow:En}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,Tt=null,!0):!1;default:return!1}}function Eh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Th(t){if(ge){var e=Tt;if(e){var n=e;if(!Ym(t,e)){if(Eh(t))throw Error(j(418));e=ir(n.nextSibling);var r=St;e&&Ym(t,e)?av(r,n):(t.flags=t.flags&-4097|2,ge=!1,St=t)}}else{if(Eh(t))throw Error(j(418));t.flags=t.flags&-4097|2,ge=!1,St=t}}}function Xm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Ra(t){if(t!==St)return!1;if(!ge)return Xm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yh(t.type,t.memoizedProps)),e&&(e=Tt)){if(Eh(t))throw lv(),Error(j(418));for(;e;)av(t,e),e=ir(e.nextSibling)}if(Xm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=St?ir(t.stateNode.nextSibling):null;return!0}function lv(){for(var t=Tt;t;)t=ir(t.nextSibling)}function Bs(){Tt=St=null,ge=!1}function Vd(t){Bt===null?Bt=[t]:Bt.push(t)}var Rx=Mn.ReactCurrentBatchConfig;function Ci(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Ca(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jm(t){var e=t._init;return e(t._payload)}function uv(t){function e(w,v){if(t){var x=w.deletions;x===null?(w.deletions=[v],w.flags|=16):x.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function s(w,v){return w=ur(w,v),w.index=0,w.sibling=null,w}function i(w,v,x){return w.index=x,t?(x=w.alternate,x!==null?(x=x.index,x<v?(w.flags|=2,v):x):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,x,D){return v===null||v.tag!==6?(v=Dc(x,w.mode,D),v.return=w,v):(v=s(v,x),v.return=w,v)}function u(w,v,x,D){var U=x.type;return U===ys?p(w,v,x.props.children,D,x.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Hn&&Jm(U)===v.type)?(D=s(v,x.props),D.ref=Ci(w,v,x),D.return=w,D):(D=Za(x.type,x.key,x.props,null,w.mode,D),D.ref=Ci(w,v,x),D.return=w,D)}function h(w,v,x,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Oc(x,w.mode,D),v.return=w,v):(v=s(v,x.children||[]),v.return=w,v)}function p(w,v,x,D,U){return v===null||v.tag!==7?(v=Fr(x,w.mode,D,U),v.return=w,v):(v=s(v,x),v.return=w,v)}function m(w,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Dc(""+v,w.mode,x),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _a:return x=Za(v.type,v.key,v.props,null,w.mode,x),x.ref=Ci(w,null,v),x.return=w,x;case gs:return v=Oc(v,w.mode,x),v.return=w,v;case Hn:var D=v._init;return m(w,D(v._payload),x)}if(Li(v)||xi(v))return v=Fr(v,w.mode,x,null),v.return=w,v;Ca(w,v)}return null}function y(w,v,x,D){var U=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return U!==null?null:l(w,v,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _a:return x.key===U?u(w,v,x,D):null;case gs:return x.key===U?h(w,v,x,D):null;case Hn:return U=x._init,y(w,v,U(x._payload),D)}if(Li(x)||xi(x))return U!==null?null:p(w,v,x,D,null);Ca(w,x)}return null}function I(w,v,x,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(x)||null,l(v,w,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case _a:return w=w.get(D.key===null?x:D.key)||null,u(v,w,D,U);case gs:return w=w.get(D.key===null?x:D.key)||null,h(v,w,D,U);case Hn:var V=D._init;return I(w,v,x,V(D._payload),U)}if(Li(D)||xi(D))return w=w.get(x)||null,p(v,w,D,U,null);Ca(v,D)}return null}function A(w,v,x,D){for(var U=null,V=null,E=v,_=v=0,T=null;E!==null&&_<x.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var S=y(w,E,x[_],D);if(S===null){E===null&&(E=T);break}t&&E&&S.alternate===null&&e(w,E),v=i(S,v,_),V===null?U=S:V.sibling=S,V=S,E=T}if(_===x.length)return n(w,E),ge&&br(w,_),U;if(E===null){for(;_<x.length;_++)E=m(w,x[_],D),E!==null&&(v=i(E,v,_),V===null?U=E:V.sibling=E,V=E);return ge&&br(w,_),U}for(E=r(w,E);_<x.length;_++)T=I(E,w,_,x[_],D),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),v=i(T,v,_),V===null?U=T:V.sibling=T,V=T);return t&&E.forEach(function(R){return e(w,R)}),ge&&br(w,_),U}function C(w,v,x,D){var U=xi(x);if(typeof U!="function")throw Error(j(150));if(x=U.call(x),x==null)throw Error(j(151));for(var V=U=null,E=v,_=v=0,T=null,S=x.next();E!==null&&!S.done;_++,S=x.next()){E.index>_?(T=E,E=null):T=E.sibling;var R=y(w,E,S.value,D);if(R===null){E===null&&(E=T);break}t&&E&&R.alternate===null&&e(w,E),v=i(R,v,_),V===null?U=R:V.sibling=R,V=R,E=T}if(S.done)return n(w,E),ge&&br(w,_),U;if(E===null){for(;!S.done;_++,S=x.next())S=m(w,S.value,D),S!==null&&(v=i(S,v,_),V===null?U=S:V.sibling=S,V=S);return ge&&br(w,_),U}for(E=r(w,E);!S.done;_++,S=x.next())S=I(E,w,_,S.value,D),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?_:S.key),v=i(S,v,_),V===null?U=S:V.sibling=S,V=S);return t&&E.forEach(function(P){return e(w,P)}),ge&&br(w,_),U}function N(w,v,x,D){if(typeof x=="object"&&x!==null&&x.type===ys&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case _a:e:{for(var U=x.key,V=v;V!==null;){if(V.key===U){if(U=x.type,U===ys){if(V.tag===7){n(w,V.sibling),v=s(V,x.props.children),v.return=w,w=v;break e}}else if(V.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Hn&&Jm(U)===V.type){n(w,V.sibling),v=s(V,x.props),v.ref=Ci(w,V,x),v.return=w,w=v;break e}n(w,V);break}else e(w,V);V=V.sibling}x.type===ys?(v=Fr(x.props.children,w.mode,D,x.key),v.return=w,w=v):(D=Za(x.type,x.key,x.props,null,w.mode,D),D.ref=Ci(w,v,x),D.return=w,w=D)}return o(w);case gs:e:{for(V=x.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(w,v.sibling),v=s(v,x.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Oc(x,w.mode,D),v.return=w,w=v}return o(w);case Hn:return V=x._init,N(w,v,V(x._payload),D)}if(Li(x))return A(w,v,x,D);if(xi(x))return C(w,v,x,D);Ca(w,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(w,v.sibling),v=s(v,x),v.return=w,w=v):(n(w,v),v=Dc(x,w.mode,D),v.return=w,w=v),o(w)):n(w,v)}return N}var zs=uv(!0),cv=uv(!1),Tl=Tr(null),Il=null,Ss=null,Md=null;function jd(){Md=Ss=Il=null}function Ud(t){var e=Tl.current;me(Tl),t._currentValue=e}function Ih(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Il=t,Md=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Il===null)throw Error(j(308));Ss=t,Il.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Vr=null;function Fd(t){Vr===null?Vr=[t]:Vr.push(t)}function hv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Fd(e)):(n.next=s.next,s.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Pn(t,n)}return s=r.interleaved,s===null?(e.next=e,Fd(r)):(e.next=s.next,s.next=e),r.interleaved=e,Pn(t,n)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kd(t,n)}}function Zm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,r){var s=t.updateQueue;qn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=h=u=null,l=i;do{var y=l.lane,I=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,C=l;switch(y=e,I=n,C.tag){case 1:if(A=C.payload,typeof A=="function"){m=A.call(I,m,y);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=C.payload,y=typeof A=="function"?A.call(I,m,y):A,y==null)break e;m=Ee({},m,y);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[l]:y.push(l))}else I={eventTime:I,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=I,u=m):p=p.next=I,o|=y;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;y=l,l=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=m}}function eg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var jo={},tn=Tr(jo),yo=Tr(jo),_o=Tr(jo);function Mr(t){if(t===jo)throw Error(j(174));return t}function zd(t,e){switch(he(_o,e),he(yo,t),he(tn,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rh(e,t)}me(tn),he(tn,e)}function $s(){me(tn),me(yo),me(_o)}function fv(t){Mr(_o.current);var e=Mr(tn.current),n=rh(e,t.type);e!==n&&(he(yo,t),he(tn,n))}function $d(t){yo.current===t&&(me(tn),me(yo))}var ve=Tr(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function Hd(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var Ga=Mn.ReactCurrentDispatcher,Rc=Mn.ReactCurrentBatchConfig,qr=0,we=null,Oe=null,je=null,kl=!1,Qi=!1,vo=0,Cx=0;function Xe(){throw Error(j(321))}function qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function Wd(t,e,n,r,s,i){if(qr=i,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=t===null||t.memoizedState===null?Dx:Ox,t=n(r,s),Qi){i=0;do{if(Qi=!1,vo=0,25<=i)throw Error(j(301));i+=1,je=Oe=null,e.updateQueue=null,Ga.current=Lx,t=n(r,s)}while(Qi)}if(Ga.current=Al,e=Oe!==null&&Oe.next!==null,qr=0,je=Oe=we=null,kl=!1,e)throw Error(j(300));return t}function Kd(){var t=vo!==0;return vo=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?we.memoizedState=je=t:je=je.next=t,je}function Vt(){if(Oe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=je===null?we.memoizedState:je.next;if(e!==null)je=e,Oe=t;else{if(t===null)throw Error(j(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},je===null?we.memoizedState=je=t:je=je.next=t}return je}function wo(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Oe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var p=h.lane;if((qr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,we.lanes|=p,Wr|=p}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,we.lanes|=i,Wr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Wt(i,e.memoizedState)||(gt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function pv(){}function mv(t,e){var n=we,r=Vt(),s=e(),i=!Wt(r.memoizedState,s);if(i&&(r.memoizedState=s,gt=!0),r=r.queue,Gd(_v.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Eo(9,yv.bind(null,n,r,s,e),void 0,null),Ue===null)throw Error(j(349));qr&30||gv(n,e,s)}return s}function gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yv(t,e,n,r){e.value=n,e.getSnapshot=r,vv(e)&&wv(t)}function _v(t,e,n){return n(function(){vv(e)&&wv(t)})}function vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function wv(t){var e=Pn(t,1);e!==null&&Ht(e,t,1,-1)}function tg(t){var e=Yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=bx.bind(null,we,t),[e.memoizedState,t]}function Eo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ev(){return Vt().memoizedState}function Qa(t,e,n,r){var s=Yt();we.flags|=t,s.memoizedState=Eo(1|e,n,void 0,r===void 0?null:r)}function ru(t,e,n,r){var s=Vt();r=r===void 0?null:r;var i=void 0;if(Oe!==null){var o=Oe.memoizedState;if(i=o.destroy,r!==null&&qd(r,o.deps)){s.memoizedState=Eo(e,n,i,r);return}}we.flags|=t,s.memoizedState=Eo(1|e,n,i,r)}function ng(t,e){return Qa(8390656,8,t,e)}function Gd(t,e){return ru(2048,8,t,e)}function Tv(t,e){return ru(4,2,t,e)}function Iv(t,e){return ru(4,4,t,e)}function xv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sv(t,e,n){return n=n!=null?n.concat([t]):null,ru(4,4,xv.bind(null,e,t),n)}function Qd(){}function kv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Av(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Rv(t,e,n){return qr&21?(Wt(n,e)||(n=D_(),we.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function Nx(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Rc.transition;Rc.transition={};try{t(!1),e()}finally{ae=n,Rc.transition=r}}function Cv(){return Vt().memoizedState}function Px(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nv(t))Pv(e,n);else if(n=hv(t,e,n,r),n!==null){var s=ct();Ht(n,t,r,s),bv(n,e,r)}}function bx(t,e,n){var r=lr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nv(t))Pv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(s.next=s,Fd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=hv(t,e,s,r),n!==null&&(s=ct(),Ht(n,t,r,s),bv(n,e,r))}}function Nv(t){var e=t.alternate;return t===we||e!==null&&e===we}function Pv(t,e){Qi=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kd(t,n)}}var Al={readContext:Lt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Dx={readContext:Lt,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:ng,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,xv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=Yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Px.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:tg,useDebugValue:Qd,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=tg(!1),e=t[0];return t=Nx.bind(null,t[1]),Yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,s=Yt();if(ge){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ue===null)throw Error(j(349));qr&30||gv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,ng(_v.bind(null,r,i,t),[t]),r.flags|=2048,Eo(9,yv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Yt(),e=Ue.identifierPrefix;if(ge){var n=En,r=wn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ox={readContext:Lt,useCallback:kv,useContext:Lt,useEffect:Gd,useImperativeHandle:Sv,useInsertionEffect:Tv,useLayoutEffect:Iv,useMemo:Av,useReducer:Cc,useRef:Ev,useState:function(){return Cc(wo)},useDebugValue:Qd,useDeferredValue:function(t){var e=Vt();return Rv(e,Oe.memoizedState,t)},useTransition:function(){var t=Cc(wo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:Cv,unstable_isNewReconciler:!1},Lx={readContext:Lt,useCallback:kv,useContext:Lt,useEffect:Gd,useImperativeHandle:Sv,useInsertionEffect:Tv,useLayoutEffect:Iv,useMemo:Av,useReducer:Nc,useRef:Ev,useState:function(){return Nc(wo)},useDebugValue:Qd,useDeferredValue:function(t){var e=Vt();return Oe===null?e.memoizedState=t:Rv(e,Oe.memoizedState,t)},useTransition:function(){var t=Nc(wo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:Cv,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var su={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),s=lr(t),i=Sn(r,s);i.payload=e,n!=null&&(i.callback=n),e=or(t,i,s),e!==null&&(Ht(e,t,s,r),Ka(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),s=lr(t),i=Sn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=or(t,i,s),e!==null&&(Ht(e,t,s,r),Ka(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=lr(t),s=Sn(n,r);s.tag=2,e!=null&&(s.callback=e),e=or(t,s,r),e!==null&&(Ht(e,t,r,n),Ka(e,t,r))}};function rg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,r)||!fo(s,i):!0}function Dv(t,e,n){var r=!1,s=pr,i=e.contextType;return typeof i=="object"&&i!==null?i=Lt(i):(s=_t(e)?$r:st.current,r=e.contextTypes,i=(r=r!=null)?Fs(t,s):pr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=su,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&su.enqueueReplaceState(e,e.state,null)}function Sh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Bd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Lt(i):(i=_t(e)?$r:st.current,s.context=Fs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(xh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&su.enqueueReplaceState(s,s.state,null),xl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",r=e;do n+=uI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vx=typeof WeakMap=="function"?WeakMap:Map;function Ov(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cl||(Cl=!0,Vh=r),kh(t,e)},n}function Lv(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){kh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){kh(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Vx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Yx.bind(null,t,e,n),e.then(t,t))}function og(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ag(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var Mx=Mn.ReactCurrentOwner,gt=!1;function ut(t,e,n,r){e.child=t===null?cv(e,null,n,r):zs(e,t.child,n,r)}function lg(t,e,n,r,s){n=n.render;var i=e.ref;return Ds(e,s),r=Wd(t,e,n,r,i,s),n=Kd(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(ge&&n&&Od(e),e.flags|=1,ut(t,e,r,s),e.child)}function ug(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!rf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Vv(t,e,i,r,s)):(t=Za(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(o,r)&&t.ref===e.ref)return bn(t,e,s)}return e.flags|=1,t=ur(i,r),t.ref=e.ref,t.return=e,e.child=t}function Vv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(fo(i,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,bn(t,e,s)}return Ah(t,e,n,r,s)}function Mv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(As,Et),Et|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(As,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,he(As,Et),Et|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,he(As,Et),Et|=r;return ut(t,e,s,n),e.child}function jv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ah(t,e,n,r,s){var i=_t(n)?$r:st.current;return i=Fs(e,i),Ds(e,s),n=Wd(t,e,n,r,i,s),r=Kd(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(ge&&r&&Od(e),e.flags|=1,ut(t,e,n,s),e.child)}function cg(t,e,n,r,s){if(_t(n)){var i=!0;vl(e)}else i=!1;if(Ds(e,s),e.stateNode===null)Ya(t,e),Dv(e,n,r),Sh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Lt(h):(h=_t(n)?$r:st.current,h=Fs(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&sg(e,o,r,h),qn=!1;var y=e.memoizedState;o.state=y,xl(e,r,o,s),u=e.memoizedState,l!==r||y!==u||yt.current||qn?(typeof p=="function"&&(xh(e,n,p,r),u=e.memoizedState),(l=qn||rg(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ut(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Lt(u):(u=_t(n)?$r:st.current,u=Fs(e,u));var I=n.getDerivedStateFromProps;(p=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&sg(e,o,r,u),qn=!1,y=e.memoizedState,o.state=y,xl(e,r,o,s);var A=e.memoizedState;l!==m||y!==A||yt.current||qn?(typeof I=="function"&&(xh(e,n,I,r),A=e.memoizedState),(h=qn||rg(e,n,h,r,y,A,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Rh(t,e,n,r,i,s)}function Rh(t,e,n,r,s,i){jv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Qm(e,n,!1),bn(t,e,i);r=e.stateNode,Mx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,i),e.child=zs(e,null,l,i)):ut(t,e,l,i),e.memoizedState=r.state,s&&Qm(e,n,!0),e.child}function Uv(t){var e=t.stateNode;e.pendingContext?Gm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gm(t,e.context,!1),zd(t,e.containerInfo)}function hg(t,e,n,r,s){return Bs(),Vd(s),e.flags|=256,ut(t,e,n,r),e.child}var Ch={dehydrated:null,treeContext:null,retryLane:0};function Nh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fv(t,e,n){var r=e.pendingProps,s=ve.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),he(ve,s&1),t===null)return Th(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=au(o,r,0,null),t=Fr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Nh(n),e.memoizedState=Ch,t):Yd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return jx(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ur(l,i):(i=Fr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Nh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Ch,r}return i=t.child,t=i.sibling,r=ur(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yd(t,e){return e=au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,r){return r!==null&&Vd(r),zs(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jx(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Pc(Error(j(422))),Na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=au({mode:"visible",children:r.children},s,0,null),i=Fr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=Nh(o),e.memoizedState=Ch,i);if(!(e.mode&1))return Na(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Pc(i,r,void 0),Na(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=Ue,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Pn(t,s),Ht(r,t,s,-1))}return nf(),r=Pc(Error(j(421))),Na(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Xx.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Tt=ir(s.nextSibling),St=e,ge=!0,Bt=null,t!==null&&(Pt[bt++]=wn,Pt[bt++]=En,Pt[bt++]=Hr,wn=t.id,En=t.overflow,Hr=e),e=Yd(e,r.children),e.flags|=4096,e)}function dg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ih(t.return,e,n)}function bc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Bv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ut(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dg(t,n,e);else if(t.tag===19)dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(ve,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),bc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Sl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}bc(e,!0,n,null,i);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ya(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ux(t,e,n){switch(e.tag){case 3:Uv(e),Bs();break;case 5:fv(e);break;case 1:_t(e.type)&&vl(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;he(Tl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?Fv(t,e,n):(he(ve,ve.current&1),t=bn(t,e,n),t!==null?t.sibling:null);he(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Bv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),he(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Mv(t,e,n)}return bn(t,e,n)}var zv,Ph,$v,Hv;zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ph=function(){};$v=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Mr(tn.current);var i=null;switch(n){case"input":s=Zc(t,s),r=Zc(t,r),i=[];break;case"select":s=Ee({},s,{value:void 0}),r=Ee({},r,{value:void 0}),i=[];break;case"textarea":s=nh(t,s),r=nh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=yl)}sh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(io.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(io.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&fe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Hv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ni(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Fx(t,e,n){var r=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return _t(e.type)&&_l(),Je(e),null;case 3:return r=e.stateNode,$s(),me(yt),me(st),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bt!==null&&(Uh(Bt),Bt=null))),Ph(t,e),Je(e),null;case 5:$d(e);var s=Mr(_o.current);if(n=e.type,t!==null&&e.stateNode!=null)$v(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Je(e),null}if(t=Mr(tn.current),Ra(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Xt]=e,r[go]=i,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(s=0;s<Mi.length;s++)fe(Mi[s],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Em(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":Im(r,i),fe("invalid",r)}sh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Aa(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Aa(r.textContent,l,t),s=["children",""+l]):io.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":va(r),Tm(r,i,!0);break;case"textarea":va(r),xm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=yl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=__(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[go]=r,zv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ih(n,r),n){case"dialog":fe("cancel",t),fe("close",t),s=r;break;case"iframe":case"object":case"embed":fe("load",t),s=r;break;case"video":case"audio":for(s=0;s<Mi.length;s++)fe(Mi[s],t);s=r;break;case"source":fe("error",t),s=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),s=r;break;case"details":fe("toggle",t),s=r;break;case"input":Em(t,r),s=Zc(t,r),fe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ee({},r,{value:void 0}),fe("invalid",t);break;case"textarea":Im(t,r),s=nh(t,r),fe("invalid",t);break;default:s=r}sh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?E_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&v_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&oo(t,u):typeof u=="number"&&oo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(io.hasOwnProperty(i)?u!=null&&i==="onScroll"&&fe("scroll",t):u!=null&&wd(t,i,u,o))}switch(n){case"input":va(t),Tm(t,r,!1);break;case"textarea":va(t),xm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Cs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Cs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)Hv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Mr(_o.current),Mr(tn.current),Ra(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(i=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:Aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Je(e),null;case 13:if(me(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&Tt!==null&&e.mode&1&&!(e.flags&128))lv(),Bs(),e.flags|=98560,i=!1;else if(i=Ra(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Xt]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),i=!1}else Bt!==null&&(Uh(Bt),Bt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Le===0&&(Le=3):nf())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return $s(),Ph(t,e),t===null&&po(e.stateNode.containerInfo),Je(e),null;case 10:return Ud(e.type._context),Je(e),null;case 17:return _t(e.type)&&_l(),Je(e),null;case 19:if(me(ve),i=e.memoizedState,i===null)return Je(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ni(i,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sl(t),o!==null){for(e.flags|=128,Ni(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(ve,ve.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ce()>qs&&(e.flags|=128,r=!0,Ni(i,!1),e.lanes=4194304)}else{if(!r)if(t=Sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ni(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ge)return Je(e),null}else 2*Ce()-i.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,r=!0,Ni(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ce(),e.sibling=null,n=ve.current,he(ve,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return tf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function Bx(t,e){switch(Ld(e),e.tag){case 1:return _t(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),me(yt),me(st),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(me(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(ve),null;case 4:return $s(),null;case 10:return Ud(e.type._context),null;case 22:case 23:return tf(),null;case 24:return null;default:return null}}var Pa=!1,tt=!1,zx=typeof WeakSet=="function"?WeakSet:Set,H=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function bh(t,e,n){try{n()}catch(r){xe(t,e,r)}}var fg=!1;function $x(t,e){if(mh=pl,t=Q_(),Dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,y=null;t:for(;;){for(var I;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)y=m,m=I;for(;;){if(m===t)break t;if(y===n&&++h===s&&(l=o),y===i&&++p===r&&(u=o),(I=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gh={focusedElem:t,selectionRange:n},pl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var C=A.memoizedProps,N=A.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?C:Ut(e.type,C),N);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){xe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return A=fg,fg=!1,A}function Yi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&bh(e,n,i)}s=s.next}while(s!==r)}}function iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qv(t){var e=t.alternate;e!==null&&(t.alternate=null,qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[go],delete e[vh],delete e[Sx],delete e[kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wv(t){return t.tag===5||t.tag===3||t.tag===4}function pg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yl));else if(r!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}function Lh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lh(t,e,n),t=t.sibling;t!==null;)Lh(t,e,n),t=t.sibling}var Be=null,Ft=!1;function zn(t,e,n){for(n=n.child;n!==null;)Kv(t,e,n),n=n.sibling}function Kv(t,e,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:tt||ks(n,e);case 6:var r=Be,s=Ft;Be=null,zn(t,e,n),Be=r,Ft=s,Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?Sc(t.parentNode,n):t.nodeType===1&&Sc(t,n),co(t)):Sc(Be,n.stateNode));break;case 4:r=Be,s=Ft,Be=n.stateNode.containerInfo,Ft=!0,zn(t,e,n),Be=r,Ft=s;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&bh(n,e,o),s=s.next}while(s!==r)}zn(t,e,n);break;case 1:if(!tt&&(ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,zn(t,e,n),tt=r):zn(t,e,n);break;default:zn(t,e,n)}}function mg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zx),e.forEach(function(r){var s=Jx.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ft=!1;break e;case 3:Be=l.stateNode.containerInfo,Ft=!0;break e;case 4:Be=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Be===null)throw Error(j(160));Kv(i,o,s),Be=null,Ft=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){xe(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,t),e=e.sibling}function Gv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(e,t),Qt(t),r&4){try{Yi(3,t,t.return),iu(3,t)}catch(C){xe(t,t.return,C)}try{Yi(5,t,t.return)}catch(C){xe(t,t.return,C)}}break;case 1:jt(e,t),Qt(t),r&512&&n!==null&&ks(n,n.return);break;case 5:if(jt(e,t),Qt(t),r&512&&n!==null&&ks(n,n.return),t.flags&32){var s=t.stateNode;try{oo(s,"")}catch(C){xe(t,t.return,C)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&g_(s,i),ih(l,o);var h=ih(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?E_(s,m):p==="dangerouslySetInnerHTML"?v_(s,m):p==="children"?oo(s,m):wd(s,p,m,h)}switch(l){case"input":eh(s,i);break;case"textarea":y_(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?Cs(s,!!i.multiple,I,!1):y!==!!i.multiple&&(i.defaultValue!=null?Cs(s,!!i.multiple,i.defaultValue,!0):Cs(s,!!i.multiple,i.multiple?[]:"",!1))}s[go]=i}catch(C){xe(t,t.return,C)}}break;case 6:if(jt(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(C){xe(t,t.return,C)}}break;case 3:if(jt(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(C){xe(t,t.return,C)}break;case 4:jt(e,t),Qt(t);break;case 13:jt(e,t),Qt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Zd=Ce())),r&4&&mg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(h=tt)||p,jt(e,t),tt=h):jt(e,t),Qt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(H=t,p=t.child;p!==null;){for(m=H=p;H!==null;){switch(y=H,I=y.child,y.tag){case 0:case 11:case 14:case 15:Yi(4,y,y.return);break;case 1:ks(y,y.return);var A=y.stateNode;if(typeof A.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(C){xe(r,n,C)}}break;case 5:ks(y,y.return);break;case 22:if(y.memoizedState!==null){yg(m);continue}}I!==null?(I.return=y,H=I):yg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=w_("display",o))}catch(C){xe(t,t.return,C)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(C){xe(t,t.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:jt(e,t),Qt(t),r&4&&mg(t);break;case 21:break;default:jt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wv(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(oo(s,""),r.flags&=-33);var i=pg(t);Lh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=pg(t);Oh(t,l,o);break;default:throw Error(j(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hx(t,e,n){H=t,Qv(t)}function Qv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Pa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||tt;l=Pa;var h=tt;if(Pa=o,(tt=u)&&!h)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?_g(s):u!==null?(u.return=o,H=u):_g(s);for(;i!==null;)H=i,Qv(i),i=i.sibling;H=s,Pa=l,tt=h}gg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):gg(t)}}function gg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&eg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}eg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&co(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}tt||e.flags&512&&Dh(e)}catch(y){xe(e,e.return,y)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function yg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function _g(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{iu(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){xe(e,s,u)}}var i=e.return;try{Dh(e)}catch(u){xe(e,i,u)}break;case 5:var o=e.return;try{Dh(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var qx=Math.ceil,Rl=Mn.ReactCurrentDispatcher,Xd=Mn.ReactCurrentOwner,Ot=Mn.ReactCurrentBatchConfig,re=0,Ue=null,be=null,He=0,Et=0,As=Tr(0),Le=0,To=null,Wr=0,ou=0,Jd=0,Xi=null,pt=null,Zd=0,qs=1/0,_n=null,Cl=!1,Vh=null,ar=null,ba=!1,er=null,Nl=0,Ji=0,Mh=null,Xa=-1,Ja=0;function ct(){return re&6?Ce():Xa!==-1?Xa:Xa=Ce()}function lr(t){return t.mode&1?re&2&&He!==0?He&-He:Rx.transition!==null?(Ja===0&&(Ja=D_()),Ja):(t=ae,t!==0||(t=window.event,t=t===void 0?16:F_(t.type)),t):1}function Ht(t,e,n,r){if(50<Ji)throw Ji=0,Mh=null,Error(j(185));Lo(t,n,r),(!(re&2)||t!==Ue)&&(t===Ue&&(!(re&2)&&(ou|=n),Le===4&&Kn(t,He)),vt(t,r),n===1&&re===0&&!(e.mode&1)&&(qs=Ce()+500,nu&&Ir()))}function vt(t,e){var n=t.callbackNode;RI(t,e);var r=fl(t,t===Ue?He:0);if(r===0)n!==null&&Am(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Am(n),e===1)t.tag===0?Ax(vg.bind(null,t)):iv(vg.bind(null,t)),Ix(function(){!(re&6)&&Ir()}),n=null;else{switch(O_(r)){case 1:n=Sd;break;case 4:n=P_;break;case 16:n=dl;break;case 536870912:n=b_;break;default:n=dl}n=r0(n,Yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yv(t,e){if(Xa=-1,Ja=0,re&6)throw Error(j(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var r=fl(t,t===Ue?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Pl(t,r);else{e=r;var s=re;re|=2;var i=Jv();(Ue!==t||He!==e)&&(_n=null,qs=Ce()+500,Ur(t,e));do try{Gx();break}catch(l){Xv(t,l)}while(!0);jd(),Rl.current=i,re=s,be!==null?e=0:(Ue=null,He=0,e=Le)}if(e!==0){if(e===2&&(s=ch(t),s!==0&&(r=s,e=jh(t,s))),e===1)throw n=To,Ur(t,0),Kn(t,r),vt(t,Ce()),n;if(e===6)Kn(t,r);else{if(s=t.current.alternate,!(r&30)&&!Wx(s)&&(e=Pl(t,r),e===2&&(i=ch(t),i!==0&&(r=i,e=jh(t,i))),e===1))throw n=To,Ur(t,0),Kn(t,r),vt(t,Ce()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Dr(t,pt,_n);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=Zd+500-Ce(),10<e)){if(fl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=_h(Dr.bind(null,t,pt,_n),e);break}Dr(t,pt,_n);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-$t(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qx(r/1960))-r,10<r){t.timeoutHandle=_h(Dr.bind(null,t,pt,_n),r);break}Dr(t,pt,_n);break;case 5:Dr(t,pt,_n);break;default:throw Error(j(329))}}}return vt(t,Ce()),t.callbackNode===n?Yv.bind(null,t):null}function jh(t,e){var n=Xi;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=pt,pt=n,e!==null&&Uh(e)),t}function Uh(t){pt===null?pt=t:pt.push.apply(pt,t)}function Wx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Wt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~Jd,e&=~ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function vg(t){if(re&6)throw Error(j(327));Os();var e=fl(t,0);if(!(e&1))return vt(t,Ce()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var r=ch(t);r!==0&&(e=r,n=jh(t,r))}if(n===1)throw n=To,Ur(t,0),Kn(t,e),vt(t,Ce()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,pt,_n),vt(t,Ce()),null}function ef(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(qs=Ce()+500,nu&&Ir())}}function Kr(t){er!==null&&er.tag===0&&!(re&6)&&Os();var e=re;re|=1;var n=Ot.transition,r=ae;try{if(Ot.transition=null,ae=1,t)return t()}finally{ae=r,Ot.transition=n,re=e,!(re&6)&&Ir()}}function tf(){Et=As.current,me(As)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Tx(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_l();break;case 3:$s(),me(yt),me(st),Hd();break;case 5:$d(r);break;case 4:$s();break;case 13:me(ve);break;case 19:me(ve);break;case 10:Ud(r.type._context);break;case 22:case 23:tf()}n=n.return}if(Ue=t,be=t=ur(t.current,null),He=Et=e,Le=0,To=null,Jd=ou=Wr=0,pt=Xi=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Vr=null}return t}function Xv(t,e){do{var n=be;try{if(jd(),Ga.current=Al,kl){for(var r=we.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}kl=!1}if(qr=0,je=Oe=we=null,Qi=!1,vo=0,Xd.current=null,n===null||n.return===null){Le=1,To=e,be=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var I=og(o);if(I!==null){I.flags&=-257,ag(I,o,l,i,e),I.mode&1&&ig(i,h,e),e=I,u=h;var A=e.updateQueue;if(A===null){var C=new Set;C.add(u),e.updateQueue=C}else A.add(u);break e}else{if(!(e&1)){ig(i,h,e),nf();break e}u=Error(j(426))}}else if(ge&&l.mode&1){var N=og(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ag(N,o,l,i,e),Vd(Hs(u,l));break e}}i=u=Hs(u,l),Le!==4&&(Le=2),Xi===null?Xi=[i]:Xi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=Ov(i,u,e);Zm(i,w);break e;case 1:l=u;var v=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ar===null||!ar.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=Lv(i,l,e);Zm(i,D);break e}}i=i.return}while(i!==null)}e0(n)}catch(U){e=U,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Jv(){var t=Rl.current;return Rl.current=Al,t===null?Al:t}function nf(){(Le===0||Le===3||Le===2)&&(Le=4),Ue===null||!(Wr&268435455)&&!(ou&268435455)||Kn(Ue,He)}function Pl(t,e){var n=re;re|=2;var r=Jv();(Ue!==t||He!==e)&&(_n=null,Ur(t,e));do try{Kx();break}catch(s){Xv(t,s)}while(!0);if(jd(),re=n,Rl.current=r,be!==null)throw Error(j(261));return Ue=null,He=0,Le}function Kx(){for(;be!==null;)Zv(be)}function Gx(){for(;be!==null&&!vI();)Zv(be)}function Zv(t){var e=n0(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?e0(t):be=e,Xd.current=null}function e0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Bx(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,be=null;return}}else if(n=Fx(n,e,Et),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Le===0&&(Le=5)}function Dr(t,e,n){var r=ae,s=Ot.transition;try{Ot.transition=null,ae=1,Qx(t,e,n,r)}finally{Ot.transition=s,ae=r}return null}function Qx(t,e,n,r){do Os();while(er!==null);if(re&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(CI(t,i),t===Ue&&(be=Ue=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,r0(dl,function(){return Os(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ot.transition,Ot.transition=null;var o=ae;ae=1;var l=re;re|=4,Xd.current=null,$x(t,n),Gv(n,t),mx(gh),pl=!!mh,gh=mh=null,t.current=n,Hx(n),wI(),re=l,ae=o,Ot.transition=i}else t.current=n;if(ba&&(ba=!1,er=t,Nl=s),i=t.pendingLanes,i===0&&(ar=null),II(n.stateNode),vt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Cl)throw Cl=!1,t=Vh,Vh=null,t;return Nl&1&&t.tag!==0&&Os(),i=t.pendingLanes,i&1?t===Mh?Ji++:(Ji=0,Mh=t):Ji=0,Ir(),null}function Os(){if(er!==null){var t=O_(Nl),e=Ot.transition,n=ae;try{if(Ot.transition=null,ae=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Nl=0,re&6)throw Error(j(331));var s=re;for(re|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:Yi(8,p,i)}var m=p.child;if(m!==null)m.return=p,H=m;else for(;H!==null;){p=H;var y=p.sibling,I=p.return;if(qv(p),p===h){H=null;break}if(y!==null){y.return=I,H=y;break}H=I}}}var A=i.alternate;if(A!==null){var C=A.child;if(C!==null){A.child=null;do{var N=C.sibling;C.sibling=null,C=N}while(C!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yi(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,H=w;break e}H=i.return}}var v=t.current;for(H=v;H!==null;){o=H;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,H=x;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:iu(9,l)}}catch(U){xe(l,l.return,U)}if(l===o){H=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,H=D;break e}H=l.return}}if(re=s,Ir(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Xl,t)}catch{}r=!0}return r}finally{ae=n,Ot.transition=e}}return!1}function wg(t,e,n){e=Hs(n,e),e=Ov(t,e,1),t=or(t,e,1),e=ct(),t!==null&&(Lo(t,1,e),vt(t,e))}function xe(t,e,n){if(t.tag===3)wg(t,t,n);else for(;e!==null;){if(e.tag===3){wg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Hs(n,t),t=Lv(e,t,1),e=or(e,t,1),t=ct(),e!==null&&(Lo(e,1,t),vt(e,t));break}}e=e.return}}function Yx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(He&n)===n&&(Le===4||Le===3&&(He&130023424)===He&&500>Ce()-Zd?Ur(t,0):Jd|=n),vt(t,e)}function t0(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=ct();t=Pn(t,e),t!==null&&(Lo(t,e,n),vt(t,n))}function Xx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),t0(t,n)}function Jx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),t0(t,n)}var n0;n0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,Ux(t,e,n);gt=!!(t.flags&131072)}else gt=!1,ge&&e.flags&1048576&&ov(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ya(t,e),t=e.pendingProps;var s=Fs(e,st.current);Ds(e,n),s=Wd(null,e,r,t,s,n);var i=Kd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(i=!0,vl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Bd(e),s.updater=su,e.stateNode=s,s._reactInternals=e,Sh(e,r,t,n),e=Rh(null,e,r,!0,i,n)):(e.tag=0,ge&&i&&Od(e),ut(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ya(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=eS(r),t=Ut(r,t),s){case 0:e=Ah(null,e,r,t,n);break e;case 1:e=cg(null,e,r,t,n);break e;case 11:e=lg(null,e,r,t,n);break e;case 14:e=ug(null,e,r,Ut(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ut(r,s),Ah(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ut(r,s),cg(t,e,r,s,n);case 3:e:{if(Uv(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,dv(t,e),xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Hs(Error(j(423)),e),e=hg(t,e,r,n,s);break e}else if(r!==s){s=Hs(Error(j(424)),e),e=hg(t,e,r,n,s);break e}else for(Tt=ir(e.stateNode.containerInfo.firstChild),St=e,ge=!0,Bt=null,n=cv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),r===s){e=bn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return fv(e),t===null&&Th(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,yh(r,s)?o=null:i!==null&&yh(r,i)&&(e.flags|=32),jv(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Th(e),null;case 13:return Fv(t,e,n);case 4:return zd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zs(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ut(r,s),lg(t,e,r,s,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,he(Tl,r._currentValue),r._currentValue=o,i!==null)if(Wt(i.value,o)){if(i.children===s.children&&!yt.current){e=bn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Sn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ih(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ih(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ut(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ds(e,n),s=Lt(s),r=r(s),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,s=Ut(r,e.pendingProps),s=Ut(r.type,s),ug(t,e,r,s,n);case 15:return Vv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ut(r,s),Ya(t,e),e.tag=1,_t(r)?(t=!0,vl(e)):t=!1,Ds(e,n),Dv(e,r,s),Sh(e,r,s,n),Rh(null,e,r,!0,t,n);case 19:return Bv(t,e,n);case 22:return Mv(t,e,n)}throw Error(j(156,e.tag))};function r0(t,e){return N_(t,e)}function Zx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new Zx(t,e,n,r)}function rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eS(t){if(typeof t=="function")return rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Td)return 11;if(t===Id)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Za(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Fr(n.children,s,i,e);case Ed:o=8,s|=8;break;case Qc:return t=Dt(12,n,e,s|2),t.elementType=Qc,t.lanes=i,t;case Yc:return t=Dt(13,n,e,s),t.elementType=Yc,t.lanes=i,t;case Xc:return t=Dt(19,n,e,s),t.elementType=Xc,t.lanes=i,t;case f_:return au(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h_:o=10;break e;case d_:o=9;break e;case Td:o=11;break e;case Id:o=14;break e;case Hn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Fr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function au(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=f_,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Oc(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function sf(t,e,n,r,s,i,o,l,u){return t=new tS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Dt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(i),t}function nS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function s0(t){if(!t)return pr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(_t(n))return sv(t,n,e)}return e}function i0(t,e,n,r,s,i,o,l,u){return t=sf(n,r,!0,t,s,i,o,l,u),t.context=s0(null),n=t.current,r=ct(),s=lr(n),i=Sn(r,s),i.callback=e??null,or(n,i,s),t.current.lanes=s,Lo(t,s,r),vt(t,r),t}function lu(t,e,n,r){var s=e.current,i=ct(),o=lr(s);return n=s0(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(s,e,o),t!==null&&(Ht(t,s,o,i),Ka(t,s,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function of(t,e){Eg(t,e),(t=t.alternate)&&Eg(t,e)}function rS(){return null}var o0=typeof reportError=="function"?reportError:function(t){console.error(t)};function af(t){this._internalRoot=t}uu.prototype.render=af.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));lu(t,e,null,null)};uu.prototype.unmount=af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){lu(null,t,null,null)}),e[Nn]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=M_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&U_(t)}};function lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tg(){}function sS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=bl(o);i.call(h)}}var o=i0(e,r,t,0,null,!1,!1,"",Tg);return t._reactRootContainer=o,t[Nn]=o.current,po(t.nodeType===8?t.parentNode:t),Kr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=bl(u);l.call(h)}}var u=sf(t,0,!1,null,null,!1,!1,"",Tg);return t._reactRootContainer=u,t[Nn]=u.current,po(t.nodeType===8?t.parentNode:t),Kr(function(){lu(e,u,n,r)}),u}function hu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=bl(o);l.call(u)}}lu(e,o,t,s)}else o=sS(n,e,t,s,r);return bl(o)}L_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vi(e.pendingLanes);n!==0&&(kd(e,n|1),vt(e,Ce()),!(re&6)&&(qs=Ce()+500,Ir()))}break;case 13:Kr(function(){var r=Pn(t,1);if(r!==null){var s=ct();Ht(r,t,1,s)}}),of(t,1)}};Ad=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=ct();Ht(e,t,134217728,n)}of(t,134217728)}};V_=function(t){if(t.tag===13){var e=lr(t),n=Pn(t,e);if(n!==null){var r=ct();Ht(n,t,e,r)}of(t,e)}};M_=function(){return ae};j_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};ah=function(t,e,n){switch(e){case"input":if(eh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=tu(r);if(!s)throw Error(j(90));m_(r),eh(r,s)}}}break;case"textarea":y_(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};x_=ef;S_=Kr;var iS={usingClientEntryPoint:!1,Events:[Mo,Es,tu,T_,I_,ef]},Pi={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oS={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R_(t),t===null?null:t.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||rS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{Xl=Da.inject(oS),en=Da}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iS;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lf(e))throw Error(j(200));return nS(t,e,null,n)};Rt.createRoot=function(t,e){if(!lf(t))throw Error(j(299));var n=!1,r="",s=o0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=sf(t,1,!1,null,null,n,!1,r,s),t[Nn]=e.current,po(t.nodeType===8?t.parentNode:t),new af(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=R_(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Kr(t)};Rt.hydrate=function(t,e,n){if(!cu(e))throw Error(j(200));return hu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!lf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=o0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=i0(e,null,t,1,n??null,s,!1,i,o),t[Nn]=e.current,po(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new uu(e)};Rt.render=function(t,e,n){if(!cu(e))throw Error(j(200));return hu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!cu(t))throw Error(j(40));return t._reactRootContainer?(Kr(function(){hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Rt.unstable_batchedUpdates=ef;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return hu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function a0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a0)}catch(t){console.error(t)}}a0(),a_.exports=Rt;var aS=a_.exports,l0,Ig=aS;l0=Ig.createRoot,Ig.hydrateRoot;/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u0=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=B.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>B.createElement("svg",{ref:u,...uS,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:u0("lucide",s),...l},[...o.map(([h,p])=>B.createElement(h,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=(t,e)=>{const n=B.forwardRef(({className:r,...s},i)=>B.createElement(cS,{ref:i,iconNode:e,className:u0(`lucide-${lS(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=oe("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=oe("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=oe("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=oe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=oe("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=oe("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=oe("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=oe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=oe("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=oe("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=oe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=oe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=oe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=oe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=oe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=oe("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=oe("MessageSquareReply",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=oe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=oe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=oe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=oe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=oe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=oe("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=oe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=oe("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=oe("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=oe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=oe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=oe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var xg={};/**
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
 */const w0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},IS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},E0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,I=h&63;u||(I=64,o||(y=64)),r.push(n[p],n[m],n[y],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(w0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new xS;const y=i<<2|l>>4;if(r.push(y),h!==64){const I=l<<4&240|h>>2;if(r.push(I),m!==64){const A=h<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SS=function(t){const e=w0(t);return E0.encodeByteArray(e,!0)},Dl=function(t){return SS(t).replace(/\./g,"")},T0=function(t){try{return E0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AS=()=>kS().__FIREBASE_DEFAULTS__,RS=()=>{if(typeof process>"u"||typeof xg>"u")return;const t=xg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&T0(t[1]);return e&&JSON.parse(e)},gu=()=>{try{return AS()||RS()||CS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I0=t=>{var e,n;return(n=(e=gu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},x0=t=>{const e=I0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},S0=()=>{var t;return(t=gu())===null||t===void 0?void 0:t.config},k0=t=>{var e;return(e=gu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class NS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function A0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Dl(JSON.stringify(n)),Dl(JSON.stringify(o)),""].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function bS(){var t;const e=(t=gu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VS(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function MS(){return!bS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jS(){try{return typeof indexedDB=="object"}catch{return!1}}function US(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const FS="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FS,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uo.prototype.create)}}class Uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?BS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new cn(s,l,r)}}function BS(t,e){return t.replace(zS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zS=/\{\$([^}]+)}/g;function $S(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ol(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Sg(i)&&Sg(o)){if(!Ol(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Sg(t){return t!==null&&typeof t=="object"}/**
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
 */function Fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function HS(t,e){const n=new qS(t,e);return n.subscribe.bind(n)}class qS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Lc),s.error===void 0&&(s.error=Lc),s.complete===void 0&&(s.complete=Lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}/**
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
 */function ye(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class KS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QS(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GS(t){return t===Or?void 0:t}function QS(t){return t.instantiationMode==="EAGER"}/**
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
 */class YS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const R0=[];var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const XS={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},JS=te.INFO,ZS={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},e1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ZS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hf{constructor(e){this.name=e,this._logLevel=JS,this._logHandler=e1,this._userLogHandler=null,R0.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function t1(t){R0.forEach(e=>{e.setLogLevel(t)})}const n1=(t,e)=>e.some(n=>t instanceof n);let kg,Ag;function r1(){return kg||(kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s1(){return Ag||(Ag=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C0=new WeakMap,zh=new WeakMap,N0=new WeakMap,Vc=new WeakMap,df=new WeakMap;function i1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&C0.set(n,t)}).catch(()=>{}),df.set(e,t),e}function o1(t){if(zh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zh.set(t,e)}let $h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function a1(t){$h=t($h)}function l1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mc(this),e,...n);return N0.set(r,e.sort?e.sort():[e]),cr(r)}:s1().includes(t)?function(...e){return t.apply(Mc(this),e),cr(C0.get(this))}:function(...e){return cr(t.apply(Mc(this),e))}}function u1(t){return typeof t=="function"?l1(t):(t instanceof IDBTransaction&&o1(t),n1(t,r1())?new Proxy(t,$h):t)}function cr(t){if(t instanceof IDBRequest)return i1(t);if(Vc.has(t))return Vc.get(t);const e=u1(t);return e!==t&&(Vc.set(t,e),df.set(e,t)),e}const Mc=t=>df.get(t);function c1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const h1=["get","getKey","getAll","getAllKeys","count"],d1=["put","add","delete","clear"],jc=new Map;function Rg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=d1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||h1.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return jc.set(e,i),i}a1(t=>({...t,get:(e,n,r)=>Rg(e,n)||t.get(e,n,r),has:(e,n)=>!!Rg(e,n)||t.has(e,n)}));/**
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
 */class f1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function p1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hh="@firebase/app",Cg="0.10.13";/**
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
 */const Dn=new hf("@firebase/app"),m1="@firebase/app-compat",g1="@firebase/analytics-compat",y1="@firebase/analytics",_1="@firebase/app-check-compat",v1="@firebase/app-check",w1="@firebase/auth",E1="@firebase/auth-compat",T1="@firebase/database",I1="@firebase/data-connect",x1="@firebase/database-compat",S1="@firebase/functions",k1="@firebase/functions-compat",A1="@firebase/installations",R1="@firebase/installations-compat",C1="@firebase/messaging",N1="@firebase/messaging-compat",P1="@firebase/performance",b1="@firebase/performance-compat",D1="@firebase/remote-config",O1="@firebase/remote-config-compat",L1="@firebase/storage",V1="@firebase/storage-compat",M1="@firebase/firestore",j1="@firebase/vertexai-preview",U1="@firebase/firestore-compat",F1="firebase",B1="10.14.1";/**
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
 */const qh="[DEFAULT]",z1={[Hh]:"fire-core",[m1]:"fire-core-compat",[y1]:"fire-analytics",[g1]:"fire-analytics-compat",[v1]:"fire-app-check",[_1]:"fire-app-check-compat",[w1]:"fire-auth",[E1]:"fire-auth-compat",[T1]:"fire-rtdb",[I1]:"fire-data-connect",[x1]:"fire-rtdb-compat",[S1]:"fire-fn",[k1]:"fire-fn-compat",[A1]:"fire-iid",[R1]:"fire-iid-compat",[C1]:"fire-fcm",[N1]:"fire-fcm-compat",[P1]:"fire-perf",[b1]:"fire-perf-compat",[D1]:"fire-rc",[O1]:"fire-rc-compat",[L1]:"fire-gcs",[V1]:"fire-gcs-compat",[M1]:"fire-fst",[U1]:"fire-fst-compat",[j1]:"fire-vertex","fire-js":"fire-js",[F1]:"fire-js-all"};/**
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
 */const Ll=new Map,$1=new Map,Wh=new Map;function Ng(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(Wh.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;Wh.set(e,t);for(const n of Ll.values())Ng(n,t);for(const n of $1.values())Ng(n,t);return!0}function yu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
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
 */const H1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Uo("app","Firebase",H1);/**
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
 */class q1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=B1;function P0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw hr.create("bad-app-name",{appName:String(s)});if(n||(n=S0()),!n)throw hr.create("no-options");const i=Ll.get(s);if(i){if(Ol(n,i.options)&&Ol(r,i.config))return i;throw hr.create("duplicate-app",{appName:s})}const o=new YS(s);for(const u of Wh.values())o.addComponent(u);const l=new q1(n,r,o);return Ll.set(s,l),l}function ff(t=qh){const e=Ll.get(t);if(!e&&t===qh&&S0())return P0();if(!e)throw hr.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=z1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}Gr(new mr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function W1(t){t1(t)}/**
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
 */const K1="firebase-heartbeat-database",G1=1,Io="firebase-heartbeat-store";let Uc=null;function b0(){return Uc||(Uc=c1(K1,G1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Io)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function Q1(t){try{const n=(await b0()).transaction(Io),r=await n.objectStore(Io).get(D0(t));return await n.done,r}catch(e){if(e instanceof cn)Dn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function Pg(t,e){try{const r=(await b0()).transaction(Io,"readwrite");await r.objectStore(Io).put(e,D0(t)),await r.done}catch(n){if(n instanceof cn)Dn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function D0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Y1=1024,X1=30*24*60*60*1e3;class J1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ek(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=X1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bg(),{heartbeatsToSend:r,unsentEntries:s}=Z1(this._heartbeatsCache.heartbeats),i=Dl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dn.warn(n),""}}}function bg(){return new Date().toISOString().substring(0,10)}function Z1(t,e=Y1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ek{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jS()?US().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Q1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return Dl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tk(t){Gr(new mr("platform-logger",e=>new f1(e),"PRIVATE")),Gr(new mr("heartbeat",e=>new J1(e),"PRIVATE")),nn(Hh,Cg,t),nn(Hh,Cg,"esm2017"),nn("fire-js","")}tk("");var nk="firebase",rk="10.14.1";/**
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
 */nn(nk,rk,"app");function pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function O0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sk=O0,L0=new Uo("auth","Firebase",O0());/**
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
 */const Vl=new hf("@firebase/auth");function ik(t,...e){Vl.logLevel<=te.WARN&&Vl.warn(`Auth (${rs}): ${t}`,...e)}function el(t,...e){Vl.logLevel<=te.ERROR&&Vl.error(`Auth (${rs}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw mf(t,...e)}function rn(t,...e){return mf(t,...e)}function V0(t,e,n){const r=Object.assign(Object.assign({},sk()),{[e]:n});return new Uo("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return V0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L0.create(t,...e)}function K(t,e,...n){if(!t)throw mf(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw el(e),new Error(e)}function On(t,e){t||Tn(e)}/**
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
 */function Kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ok(){return Og()==="http:"||Og()==="https:"}function Og(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ak(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ok()||OS()||"connection"in navigator)?navigator.onLine:!0}function lk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=PS()||LS()}get(){return ak()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gf(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class M0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ck=new Bo(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jn(t,e,n,r,s={}){return j0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Fo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return DS()||(h.referrerPolicy="no-referrer"),M0.fetch()(U0(t,t.config.apiHost,n,l),h)})}async function j0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uk),e);try{const s=new dk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Oa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Oa(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw V0(t,p,h);Kt(t,p)}}catch(s){if(s instanceof cn)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function zo(t,e,n,r,s={}){const i=await jn(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function U0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?gf(t.config,s):`${t.config.apiScheme}://${s}`}function hk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),ck.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}function Lg(t){return t!==void 0&&t.enterprise!==void 0}class fk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pk(t,e){return jn(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
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
 */async function mk(t,e){return jn(t,"POST","/v1/accounts:delete",e)}async function F0(t,e){return jn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gk(t,e=!1){const n=ye(t),r=await n.getIdToken(e),s=yf(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zi(Fc(s.auth_time)),issuedAtTime:Zi(Fc(s.iat)),expirationTime:Zi(Fc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fc(t){return Number(t)*1e3}function yf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return el("JWT malformed, contained fewer than 3 sections"),null;try{const s=T0(n);return s?JSON.parse(s):(el("Failed to decode base64 JWT payload"),null)}catch(s){return el("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vg(t){const e=yf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ws(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&yk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _k{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ml(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ws(t,F0(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?B0(i.providerUserInfo):[],l=wk(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Gh(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function vk(t){const e=ye(t);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function B0(t){return t.map(e=>{var{providerId:n}=e,r=pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ek(t,e){const n=await j0(t,{},async()=>{const r=Fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=U0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",M0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tk(t,e){return jn(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
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
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Vg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ek(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ls;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function $n(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _k(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ws(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gk(this,e)}reload(){return vk(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await Ws(this,mk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:x,emailVerified:D,isAnonymous:U,providerData:V,stsTokenManager:E}=n;K(x&&E,e,"internal-error");const _=Ls.fromJSON(this.name,E);K(typeof x=="string",e,"internal-error"),$n(m,e.name),$n(y,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof U=="boolean",e,"internal-error"),$n(I,e.name),$n(A,e.name),$n(C,e.name),$n(N,e.name),$n(w,e.name),$n(v,e.name);const T=new In({uid:x,auth:e,email:y,emailVerified:D,displayName:m,isAnonymous:U,photoURL:A,phoneNumber:I,tenantId:C,stsTokenManager:_,createdAt:w,lastLoginAt:v});return V&&Array.isArray(V)&&(T.providerData=V.map(S=>Object.assign({},S))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ls;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ml(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?B0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ls;l.updateFromIdToken(r);const u=new In({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Gh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Mg=new Map;function xn(t){On(t instanceof Function,"Expected a class definition");let e=Mg.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mg.set(t,e),e)}/**
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
 */class z0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z0.type="NONE";const jg=z0;/**
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
 */function tl(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=tl(this.userKey,s.apiKey,i),this.fullPersistenceKey=tl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(xn(jg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||xn(jg);const o=tl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){const m=In._fromJSON(e,p);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Vs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Vs(i,e,r))}}/**
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
 */function Ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(G0(e))return"Blackberry";if(Q0(e))return"Webos";if(H0(e))return"Safari";if((e.includes("chrome/")||q0(e))&&!e.includes("edge/"))return"Chrome";if(K0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $0(t=it()){return/firefox\//i.test(t)}function H0(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q0(t=it()){return/crios\//i.test(t)}function W0(t=it()){return/iemobile/i.test(t)}function K0(t=it()){return/android/i.test(t)}function G0(t=it()){return/blackberry/i.test(t)}function Q0(t=it()){return/webos/i.test(t)}function _f(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ik(t=it()){var e;return _f(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xk(){return VS()&&document.documentMode===10}function Y0(t=it()){return _f(t)||K0(t)||Q0(t)||G0(t)||/windows phone/i.test(t)||W0(t)}/**
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
 */function X0(t,e=[]){let n;switch(t){case"Browser":n=Ug(it());break;case"Worker":n=`${Ug(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
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
 */class Sk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kk(t,e={}){return jn(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
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
 */const Ak=6;class Rk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ak,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Ck{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fg(this),this.idTokenSubscription=new Fg(this),this.beforeStateQueue=new Sk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await F0(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(kn(this));const n=e?ye(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kk(this),n=new Rk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ik(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ss(t){return ye(t)}class Fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=HS(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _u={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nk(t){_u=t}function J0(t){return _u.loadJS(t)}function Pk(){return _u.recaptchaEnterpriseScript}function bk(){return _u.gapiScript}function Dk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ok="recaptcha-enterprise",Lk="NO_RECAPTCHA";class Vk{constructor(e){this.type=Ok,this.auth=ss(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{pk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new fk(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Lg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Lk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Lg(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Pk();u.length!==0&&(u+=l),J0(u).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Bg(t,e,n,r=!1){const s=new Vk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qh(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Bg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Bg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Mk(t,e){const n=yu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ol(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function jk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Uk(t,e,n){const r=ss(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Z0(e),{host:o,port:l}=Fk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Bk()}function Z0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fk(t){const e=Z0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zg(o)}}}function zg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function zk(t,e){return jn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $k(t,e){return zo(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}/**
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
 */async function Hk(t,e){return zo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function qk(t,e){return zo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
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
 */class xo extends vf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,n,"signInWithPassword",$k);case"emailLink":return Hk(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,r,"signUpPassword",zk);case"emailLink":return qk(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ms(t,e){return zo(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
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
 */const Wk="http://localhost";class Qr extends vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=pf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:Wk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fo(n)}return e}}/**
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
 */function Kk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gk(t){const e=ji(Ui(t)).link,n=e?ji(Ui(e)).deep_link_id:null,r=ji(Ui(t)).deep_link_id;return(r?ji(Ui(r)).link:null)||r||n||e||t}class wf{constructor(e){var n,r,s,i,o,l;const u=ji(Ui(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=Kk((s=u.mode)!==null&&s!==void 0?s:null);K(h&&p&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Gk(e);try{return new wf(n)}catch{return null}}}/**
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
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(e,n){return xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wf.parseLink(n);return K(r,"argument-error"),xo._fromEmailAndCode(e,r.code,r.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ew{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $o extends ew{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends $o{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class Yn extends $o{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Xn extends $o{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */async function Qk(t,e){return zo(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=$g(r);return new Yr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$g(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $g(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class jl extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jl(e,n,r,s)}}function tw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jl._fromErrorAndOperation(t,i,e,r):i})}async function Yk(t,e,n=!1){const r=await Ws(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
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
 */async function Xk(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(kn(r));const s="reauthenticate";try{const i=await Ws(t,tw(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=yf(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
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
 */async function nw(t,e,n=!1){if(Jt(t.app))return Promise.reject(kn(t));const r="signIn",s=await tw(t,r,e),i=await Yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Jk(t,e){return nw(ss(t),e)}/**
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
 */async function rw(t){const e=ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zk(t,e,n){if(Jt(t.app))return Promise.reject(kn(t));const r=ss(t),o=await Qh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&rw(t),u}),l=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function eA(t,e,n){return Jt(t.app)?Promise.reject(kn(t)):Jk(ye(t),ii.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rw(t),r})}/**
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
 */async function tA(t,e){return jn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ef(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ye(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ws(r,tA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function nA(t,e,n,r){return ye(t).onIdTokenChanged(e,n,r)}function rA(t,e,n){return ye(t).beforeAuthStateChanged(e,n)}function sA(t,e,n,r){return ye(t).onAuthStateChanged(e,n,r)}function iA(t){return ye(t).signOut()}const Ul="__sak";/**
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
 */class sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oA=1e3,aA=10;class iw extends sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Y0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,aA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iw.type="LOCAL";const lA=iw;/**
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
 */class ow extends sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ow.type="SESSION";const aw=ow;/**
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
 */function uA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await uA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
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
 */function Tf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Tf("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function hA(t){sn().location.href=t}/**
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
 */function lw(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function dA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pA(){return lw()?self:null}/**
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
 */const uw="firebaseLocalStorageDb",mA=1,Fl="firebaseLocalStorage",cw="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wu(t,e){return t.transaction([Fl],e?"readwrite":"readonly").objectStore(Fl)}function gA(){const t=indexedDB.deleteDatabase(uw);return new Ho(t).toPromise()}function Yh(){const t=indexedDB.open(uw,mA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fl,{keyPath:cw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fl)?e(r):(r.close(),await gA(),e(await Yh()))})})}async function Hg(t,e,n){const r=wu(t,!0).put({[cw]:e,value:n});return new Ho(r).toPromise()}async function yA(t,e){const n=wu(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function qg(t,e){const n=wu(t,!0).delete(e);return new Ho(n).toPromise()}const _A=800,vA=3;class hw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(pA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dA(),!this.activeServiceWorker)return;this.sender=new cA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yh();return await Hg(e,Ul,"1"),await qg(e,Ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wu(s,!1).getAll();return new Ho(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hw.type="LOCAL";const wA=hw;new Bo(3e4,6e4);/**
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
 */function EA(t,e){return e?xn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class If extends vf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TA(t){return nw(t.auth,new If(t),t.bypassAuthState)}function IA(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Xk(n,new If(t),t.bypassAuthState)}async function xA(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Yk(n,new If(t),t.bypassAuthState)}/**
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
 */class dw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TA;case"linkViaPopup":case"linkViaRedirect":return xA;case"reauthViaPopup":case"reauthViaRedirect":return IA;default:Kt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SA=new Bo(2e3,1e4);class Rs extends dw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SA.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const kA="pendingRedirect",nl=new Map;class AA extends dw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nl.get(this.auth._key());if(!e){try{const r=await RA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nl.set(this.auth._key(),e)}return this.bypassAuthState||nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RA(t,e){const n=PA(e),r=NA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function CA(t,e){nl.set(t._key(),e)}function NA(t){return xn(t._redirectPersistence)}function PA(t){return tl(kA,t.config.apiKey,t.name)}async function bA(t,e,n=!1){if(Jt(t.app))return Promise.reject(kn(t));const r=ss(t),s=EA(r,e),o=await new AA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const DA=10*60*1e3;class OA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wg(e))}saveEventToCache(e){this.cachedEventUids.add(Wg(e)),this.lastProcessedEventTime=Date.now()}}function Wg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fw(t);default:return!1}}/**
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
 */async function VA(t,e={}){return jn(t,"GET","/v1/projects",e)}/**
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
 */const MA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jA=/^https?/;async function UA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VA(t);for(const n of e)try{if(FA(n))return}catch{}Kt(t,"unauthorized-domain")}function FA(t){const e=Kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jA.test(n))return!1;if(MA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const BA=new Bo(3e4,6e4);function Kg(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zA(t){return new Promise((e,n)=>{var r,s,i;function o(){Kg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kg(),n(rn(t,"network-request-failed"))},timeout:BA.get()})}if(!((s=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)o();else{const l=Dk("iframefcb");return sn()[l]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},J0(`${bk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw rl=null,e})}let rl=null;function $A(t){return rl=rl||zA(t),rl}/**
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
 */const HA=new Bo(5e3,15e3),qA="__/auth/iframe",WA="emulator/auth/iframe",KA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QA(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gf(e,WA):`https://${t.config.authDomain}/${qA}`,r={apiKey:e.apiKey,appName:t.name,v:rs},s=GA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fo(r).slice(1)}`}async function YA(t){const e=await $A(t),n=sn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:QA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=sn().setTimeout(()=>{i(o)},HA.get());function u(){sn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const XA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JA=500,ZA=600,eR="_blank",tR="http://localhost";class Gg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nR(t,e,n,r=JA,s=ZA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},XA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=it().toLowerCase();n&&(l=q0(h)?eR:n),$0(h)&&(e=e||tR,u.scrollbars="yes");const p=Object.entries(u).reduce((y,[I,A])=>`${y}${I}=${A},`,"");if(Ik(h)&&l!=="_self")return rR(e||"",l),new Gg(null);const m=window.open(e||"",l,p);K(m,t,"popup-blocked");try{m.focus()}catch{}return new Gg(m)}function rR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sR="__/auth/handler",iR="emulator/auth/handler",oR=encodeURIComponent("fac");async function Qg(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:s};if(e instanceof ew){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$S(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof $o){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${oR}=${encodeURIComponent(u)}`:"";return`${aR(t)}?${Fo(l).slice(1)}${h}`}function aR({config:t}){return t.emulator?gf(t,iR):`https://${t.authDomain}/${sR}`}/**
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
 */const Bc="webStorageSupport";class lR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aw,this._completeRedirectFn=bA,this._overrideRedirectResult=CA}async _openPopup(e,n,r,s){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Qg(e,n,r,Kh(),s);return nR(e,o,Tf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Qg(e,n,r,Kh(),s);return hA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YA(e),r=new OA(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bc,{type:Bc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Bc];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Y0()||H0()||_f()}}const uR=lR;var Yg="@firebase/auth",Xg="1.7.9";/**
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
 */class cR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dR(t){Gr(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X0(t)},h=new Ck(r,s,i,u);return jk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new mr("auth-internal",e=>{const n=ss(e.getProvider("auth").getImmediate());return(r=>new cR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Yg,Xg,hR(t)),nn(Yg,Xg,"esm2017")}/**
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
 */const fR=5*60,pR=k0("authIdTokenMaxAge")||fR;let Jg=null;const mR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pR)return;const s=n==null?void 0:n.token;Jg!==s&&(Jg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gR(t=ff()){const e=yu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mk(t,{popupRedirectResolver:uR,persistence:[wA,lA,aw]}),r=k0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=mR(i.toString());rA(n,o,()=>o(n.currentUser)),nA(n,l=>o(l))}}const s=I0("auth");return s&&Uk(n,`http://${s}`),n}function yR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Nk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dR("Browser");var Zg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,pw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.D=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(S,R,P){for(var k=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)k[Nt-2]=arguments[Nt];return _.prototype[R].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,T){T||(T=0);var S=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)S[R]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(R=0;16>R;++R)S[R]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],R=E.g[2];var P=E.g[3],k=_+(P^T&(R^P))+S[0]+3614090360&4294967295;_=T+(k<<7&4294967295|k>>>25),k=P+(R^_&(T^R))+S[1]+3905402710&4294967295,P=_+(k<<12&4294967295|k>>>20),k=R+(T^P&(_^T))+S[2]+606105819&4294967295,R=P+(k<<17&4294967295|k>>>15),k=T+(_^R&(P^_))+S[3]+3250441966&4294967295,T=R+(k<<22&4294967295|k>>>10),k=_+(P^T&(R^P))+S[4]+4118548399&4294967295,_=T+(k<<7&4294967295|k>>>25),k=P+(R^_&(T^R))+S[5]+1200080426&4294967295,P=_+(k<<12&4294967295|k>>>20),k=R+(T^P&(_^T))+S[6]+2821735955&4294967295,R=P+(k<<17&4294967295|k>>>15),k=T+(_^R&(P^_))+S[7]+4249261313&4294967295,T=R+(k<<22&4294967295|k>>>10),k=_+(P^T&(R^P))+S[8]+1770035416&4294967295,_=T+(k<<7&4294967295|k>>>25),k=P+(R^_&(T^R))+S[9]+2336552879&4294967295,P=_+(k<<12&4294967295|k>>>20),k=R+(T^P&(_^T))+S[10]+4294925233&4294967295,R=P+(k<<17&4294967295|k>>>15),k=T+(_^R&(P^_))+S[11]+2304563134&4294967295,T=R+(k<<22&4294967295|k>>>10),k=_+(P^T&(R^P))+S[12]+1804603682&4294967295,_=T+(k<<7&4294967295|k>>>25),k=P+(R^_&(T^R))+S[13]+4254626195&4294967295,P=_+(k<<12&4294967295|k>>>20),k=R+(T^P&(_^T))+S[14]+2792965006&4294967295,R=P+(k<<17&4294967295|k>>>15),k=T+(_^R&(P^_))+S[15]+1236535329&4294967295,T=R+(k<<22&4294967295|k>>>10),k=_+(R^P&(T^R))+S[1]+4129170786&4294967295,_=T+(k<<5&4294967295|k>>>27),k=P+(T^R&(_^T))+S[6]+3225465664&4294967295,P=_+(k<<9&4294967295|k>>>23),k=R+(_^T&(P^_))+S[11]+643717713&4294967295,R=P+(k<<14&4294967295|k>>>18),k=T+(P^_&(R^P))+S[0]+3921069994&4294967295,T=R+(k<<20&4294967295|k>>>12),k=_+(R^P&(T^R))+S[5]+3593408605&4294967295,_=T+(k<<5&4294967295|k>>>27),k=P+(T^R&(_^T))+S[10]+38016083&4294967295,P=_+(k<<9&4294967295|k>>>23),k=R+(_^T&(P^_))+S[15]+3634488961&4294967295,R=P+(k<<14&4294967295|k>>>18),k=T+(P^_&(R^P))+S[4]+3889429448&4294967295,T=R+(k<<20&4294967295|k>>>12),k=_+(R^P&(T^R))+S[9]+568446438&4294967295,_=T+(k<<5&4294967295|k>>>27),k=P+(T^R&(_^T))+S[14]+3275163606&4294967295,P=_+(k<<9&4294967295|k>>>23),k=R+(_^T&(P^_))+S[3]+4107603335&4294967295,R=P+(k<<14&4294967295|k>>>18),k=T+(P^_&(R^P))+S[8]+1163531501&4294967295,T=R+(k<<20&4294967295|k>>>12),k=_+(R^P&(T^R))+S[13]+2850285829&4294967295,_=T+(k<<5&4294967295|k>>>27),k=P+(T^R&(_^T))+S[2]+4243563512&4294967295,P=_+(k<<9&4294967295|k>>>23),k=R+(_^T&(P^_))+S[7]+1735328473&4294967295,R=P+(k<<14&4294967295|k>>>18),k=T+(P^_&(R^P))+S[12]+2368359562&4294967295,T=R+(k<<20&4294967295|k>>>12),k=_+(T^R^P)+S[5]+4294588738&4294967295,_=T+(k<<4&4294967295|k>>>28),k=P+(_^T^R)+S[8]+2272392833&4294967295,P=_+(k<<11&4294967295|k>>>21),k=R+(P^_^T)+S[11]+1839030562&4294967295,R=P+(k<<16&4294967295|k>>>16),k=T+(R^P^_)+S[14]+4259657740&4294967295,T=R+(k<<23&4294967295|k>>>9),k=_+(T^R^P)+S[1]+2763975236&4294967295,_=T+(k<<4&4294967295|k>>>28),k=P+(_^T^R)+S[4]+1272893353&4294967295,P=_+(k<<11&4294967295|k>>>21),k=R+(P^_^T)+S[7]+4139469664&4294967295,R=P+(k<<16&4294967295|k>>>16),k=T+(R^P^_)+S[10]+3200236656&4294967295,T=R+(k<<23&4294967295|k>>>9),k=_+(T^R^P)+S[13]+681279174&4294967295,_=T+(k<<4&4294967295|k>>>28),k=P+(_^T^R)+S[0]+3936430074&4294967295,P=_+(k<<11&4294967295|k>>>21),k=R+(P^_^T)+S[3]+3572445317&4294967295,R=P+(k<<16&4294967295|k>>>16),k=T+(R^P^_)+S[6]+76029189&4294967295,T=R+(k<<23&4294967295|k>>>9),k=_+(T^R^P)+S[9]+3654602809&4294967295,_=T+(k<<4&4294967295|k>>>28),k=P+(_^T^R)+S[12]+3873151461&4294967295,P=_+(k<<11&4294967295|k>>>21),k=R+(P^_^T)+S[15]+530742520&4294967295,R=P+(k<<16&4294967295|k>>>16),k=T+(R^P^_)+S[2]+3299628645&4294967295,T=R+(k<<23&4294967295|k>>>9),k=_+(R^(T|~P))+S[0]+4096336452&4294967295,_=T+(k<<6&4294967295|k>>>26),k=P+(T^(_|~R))+S[7]+1126891415&4294967295,P=_+(k<<10&4294967295|k>>>22),k=R+(_^(P|~T))+S[14]+2878612391&4294967295,R=P+(k<<15&4294967295|k>>>17),k=T+(P^(R|~_))+S[5]+4237533241&4294967295,T=R+(k<<21&4294967295|k>>>11),k=_+(R^(T|~P))+S[12]+1700485571&4294967295,_=T+(k<<6&4294967295|k>>>26),k=P+(T^(_|~R))+S[3]+2399980690&4294967295,P=_+(k<<10&4294967295|k>>>22),k=R+(_^(P|~T))+S[10]+4293915773&4294967295,R=P+(k<<15&4294967295|k>>>17),k=T+(P^(R|~_))+S[1]+2240044497&4294967295,T=R+(k<<21&4294967295|k>>>11),k=_+(R^(T|~P))+S[8]+1873313359&4294967295,_=T+(k<<6&4294967295|k>>>26),k=P+(T^(_|~R))+S[15]+4264355552&4294967295,P=_+(k<<10&4294967295|k>>>22),k=R+(_^(P|~T))+S[6]+2734768916&4294967295,R=P+(k<<15&4294967295|k>>>17),k=T+(P^(R|~_))+S[13]+1309151649&4294967295,T=R+(k<<21&4294967295|k>>>11),k=_+(R^(T|~P))+S[4]+4149444226&4294967295,_=T+(k<<6&4294967295|k>>>26),k=P+(T^(_|~R))+S[11]+3174756917&4294967295,P=_+(k<<10&4294967295|k>>>22),k=R+(_^(P|~T))+S[2]+718787259&4294967295,R=P+(k<<15&4294967295|k>>>17),k=T+(P^(R|~_))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(R+(k<<21&4294967295|k>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var T=_-this.blockSize,S=this.B,R=this.h,P=0;P<_;){if(R==0)for(;P<=T;)s(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<_;)if(S[R++]=E.charCodeAt(P++),R==this.blockSize){s(this,S),R=0;break}}else for(;P<_;)if(S[R++]=E[P++],R==this.blockSize){s(this,S),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var T=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=T&255,T/=256;for(this.u(E),E=Array(16),_=T=0;4>_;++_)for(var S=0;32>S;S+=8)E[T++]=this.g[_]>>>S&255;return E};function i(E,_){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;for(var T=[],S=!0,R=E.length-1;0<=R;R--){var P=E[R]|0;S&&P==_||(T[R]=P,S=!1)}this.g=T}var l={};function u(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return N(h(-E));for(var _=[],T=1,S=0;E>=T;S++)_[S]=E/T|0,T*=4294967296;return new o(_,0)}function p(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return N(p(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(_,8)),S=m,R=0;R<E.length;R+=8){var P=Math.min(8,E.length-R),k=parseInt(E.substring(R,R+P),_);8>P?(P=h(Math.pow(_,P)),S=S.j(P).add(h(k))):(S=S.j(T),S=S.add(h(k)))}return S}var m=u(0),y=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-N(this).m();for(var E=0,_=1,T=0;T<this.g.length;T++){var S=this.i(T);E+=(0<=S?S:4294967296+S)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(C(this))return"-"+N(this).toString(E);for(var _=h(Math.pow(E,6)),T=this,S="";;){var R=D(T,_).g;T=w(T,R.j(_));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=R,A(T))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function C(E){return E.h==-1}t.l=function(E){return E=w(this,E),C(E)?-1:A(E)?0:1};function N(E){for(var _=E.g.length,T=[],S=0;S<_;S++)T[S]=~E.g[S];return new o(T,~E.h).add(y)}t.abs=function(){return C(this)?N(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0,R=0;R<=_;R++){var P=S+(this.i(R)&65535)+(E.i(R)&65535),k=(P>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);S=k>>>16,P&=65535,k&=65535,T[R]=k<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,_){return E.add(N(_))}t.j=function(E){if(A(this)||A(E))return m;if(C(this))return C(E)?N(this).j(N(E)):N(N(this).j(E));if(C(E))return N(this.j(N(E)));if(0>this.l(I)&&0>E.l(I))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,T=[],S=0;S<2*_;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<E.g.length;R++){var P=this.i(S)>>>16,k=this.i(S)&65535,Nt=E.i(R)>>>16,Ar=E.i(R)&65535;T[2*S+2*R]+=k*Ar,v(T,2*S+2*R),T[2*S+2*R+1]+=P*Ar,v(T,2*S+2*R+1),T[2*S+2*R+1]+=k*Nt,v(T,2*S+2*R+1),T[2*S+2*R+2]+=P*Nt,v(T,2*S+2*R+2)}for(S=0;S<_;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=_;S<2*_;S++)T[S]=0;return new o(T,0)};function v(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function x(E,_){this.g=E,this.h=_}function D(E,_){if(A(_))throw Error("division by zero");if(A(E))return new x(m,m);if(C(E))return _=D(N(E),_),new x(N(_.g),N(_.h));if(C(_))return _=D(E,N(_)),new x(N(_.g),_.h);if(30<E.g.length){if(C(E)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var T=y,S=_;0>=S.l(E);)T=U(T),S=U(S);var R=V(T,1),P=V(S,1);for(S=V(S,2),T=V(T,2);!A(S);){var k=P.add(S);0>=k.l(E)&&(R=R.add(T),P=k),S=V(S,1),T=V(T,1)}return _=w(E,R.j(_)),new x(R,_)}for(R=m;0<=E.l(_);){for(T=Math.max(1,Math.floor(E.m()/_.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=h(T),k=P.j(_);C(k)||0<k.l(E);)T-=S,P=h(T),k=P.j(_);A(P)&&(P=y),R=R.add(P),E=w(E,k)}return new x(R,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)&E.i(S);return new o(T,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)|E.i(S);return new o(T,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)^E.i(S);return new o(T,this.h^E.h)};function U(E){for(var _=E.g.length+1,T=[],S=0;S<_;S++)T[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(T,E.h)}function V(E,_){var T=_>>5;_%=32;for(var S=E.g.length-T,R=[],P=0;P<S;P++)R[P]=0<_?E.i(P+T)>>>_|E.i(P+T+1)<<32-_:E.i(P+T);return new o(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Br=o}).apply(typeof Zg<"u"?Zg:typeof self<"u"?self:typeof window<"u"?window:{});var La=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mw,Fi,gw,sl,Xh,yw,_w,vw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof La=="object"&&La];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in f))break e;f=f[b]}a=a[a.length-1],g=f[a],c=c(g),c!=g&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var f=0,g=!1,b={next:function(){if(!g&&f<a.length){var O=f++;return{value:c(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function m(a,c,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(c,b)}}return function(){return a.apply(c,arguments)}}function y(a,c,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,y.apply(null,arguments)}function I(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,b,O){for(var F=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)F[ce-2]=arguments[ce];return c.prototype[b].apply(g,F)}}function C(a){const c=a.length;if(0<c){const f=Array(c);for(let g=0;g<c;g++)f[g]=a[g];return f}return[]}function N(a,c){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const b=a.length||0,O=g.length||0;a.length=b+O;for(let F=0;F<O;F++)a[b+F]=g[F]}else a.push(g)}}class w{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var U=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function V(a,c,f){for(const g in a)c.call(f,a[g],g,a)}function E(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function _(a){const c={};for(const f in a)c[f]=a[f];return c}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)a[f]=g[f];for(let O=0;O<T.length;O++)f=T[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function k(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Nt{constructor(){this.h=this.g=null}add(c,f){const g=Ar.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ar=new w(()=>new ci,a=>a.reset());class ci{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let hn,z=!1,Q=new Nt,J=()=>{const a=l.Promise.resolve(void 0);hn=()=>{a.then(_e)}};var _e=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(f){P(f)}var c=Ar;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var dn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function fn(a,c){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{D(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:pn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&fn.aa.h.call(this)}}A(fn,Ae);var pn={2:"touch",3:"pen",4:"mouse"};fn.prototype.h=function(){fn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mn="closure_listenable_"+(1e6*Math.random()|0),iT=0;function oT(a,c,f,g,b){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=b,this.key=++iT,this.da=this.fa=!1}function Zo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ea(a){this.src=a,this.g={},this.h=0}ea.prototype.add=function(a,c,f,g,b){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var F=Bu(a,c,g,b);return-1<F?(c=a[F],f||(c.fa=!1)):(c=new oT(c,this.src,O,!!g,b),c.fa=f,a.push(c)),c};function Fu(a,c){var f=c.type;if(f in a.g){var g=a.g[f],b=Array.prototype.indexOf.call(g,c,void 0),O;(O=0<=b)&&Array.prototype.splice.call(g,b,1),O&&(Zo(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Bu(a,c,f,g){for(var b=0;b<a.length;++b){var O=a[b];if(!O.da&&O.listener==c&&O.capture==!!f&&O.ha==g)return b}return-1}var zu="closure_lm_"+(1e6*Math.random()|0),$u={};function gp(a,c,f,g,b){if(Array.isArray(c)){for(var O=0;O<c.length;O++)gp(a,c[O],f,g,b);return null}return f=vp(f),a&&a[mn]?a.K(c,f,h(g)?!!g.capture:!1,b):aT(a,c,f,!1,g,b)}function aT(a,c,f,g,b,O){if(!c)throw Error("Invalid event type");var F=h(b)?!!b.capture:!!b,ce=qu(a);if(ce||(a[zu]=ce=new ea(a)),f=ce.add(c,f,g,F,O),f.proxy)return f;if(g=lT(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)dn||(b=F),b===void 0&&(b=!1),a.addEventListener(c.toString(),g,b);else if(a.attachEvent)a.attachEvent(_p(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function lT(){function a(f){return c.call(a.src,a.listener,f)}const c=uT;return a}function yp(a,c,f,g,b){if(Array.isArray(c))for(var O=0;O<c.length;O++)yp(a,c[O],f,g,b);else g=h(g)?!!g.capture:!!g,f=vp(f),a&&a[mn]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],f=Bu(O,f,g,b),-1<f&&(Zo(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=qu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Bu(c,f,g,b)),(f=-1<a?c[a]:null)&&Hu(f))}function Hu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[mn])Fu(c.i,a);else{var f=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(f,g,a.capture):c.detachEvent?c.detachEvent(_p(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=qu(c))?(Fu(f,a),f.h==0&&(f.src=null,c[zu]=null)):Zo(a)}}}function _p(a){return a in $u?$u[a]:$u[a]="on"+a}function uT(a,c){if(a.da)a=!0;else{c=new fn(c,this);var f=a.listener,g=a.ha||a.src;a.fa&&Hu(a),a=f.call(g,c)}return a}function qu(a){return a=a[zu],a instanceof ea?a:null}var Wu="__closure_events_fn_"+(1e9*Math.random()>>>0);function vp(a){return typeof a=="function"?a:(a[Wu]||(a[Wu]=function(c){return a.handleEvent(c)}),a[Wu])}function Ge(){ue.call(this),this.i=new ea(this),this.M=this,this.F=null}A(Ge,ue),Ge.prototype[mn]=!0,Ge.prototype.removeEventListener=function(a,c,f,g){yp(this,a,c,f,g)};function ot(a,c){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Ae(c,a);else if(c instanceof Ae)c.target=c.target||a;else{var b=c;c=new Ae(g,a),S(c,b)}if(b=!0,f)for(var O=f.length-1;0<=O;O--){var F=c.g=f[O];b=ta(F,g,!0,c)&&b}if(F=c.g=a,b=ta(F,g,!0,c)&&b,b=ta(F,g,!1,c)&&b,f)for(O=0;O<f.length;O++)F=c.g=f[O],b=ta(F,g,!1,c)&&b}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],g=0;g<f.length;g++)Zo(f[g]);delete a.g[c],a.h--}}this.F=null},Ge.prototype.K=function(a,c,f,g){return this.i.add(String(a),c,!1,f,g)},Ge.prototype.L=function(a,c,f,g){return this.i.add(String(a),c,!0,f,g)};function ta(a,c,f,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,O=0;O<c.length;++O){var F=c[O];if(F&&!F.da&&F.capture==f){var ce=F.listener,Fe=F.ha||F.src;F.fa&&Fu(a.i,F),b=ce.call(Fe,g)!==!1&&b}}return b&&!g.defaultPrevented}function wp(a,c,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Ep(a){a.g=wp(()=>{a.g=null,a.i&&(a.i=!1,Ep(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class cT extends ue{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ep(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hi(a){ue.call(this),this.h=a,this.g={}}A(hi,ue);var Tp=[];function Ip(a){V(a.g,function(c,f){this.g.hasOwnProperty(f)&&Hu(c)},a),a.g={}}hi.prototype.N=function(){hi.aa.N.call(this),Ip(this)},hi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ku=l.JSON.stringify,hT=l.JSON.parse,dT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Gu(){}Gu.prototype.h=null;function xp(a){return a.h||(a.h=a.i())}function Sp(){}var di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qu(){Ae.call(this,"d")}A(Qu,Ae);function Yu(){Ae.call(this,"c")}A(Yu,Ae);var Rr={},kp=null;function na(){return kp=kp||new Ge}Rr.La="serverreachability";function Ap(a){Ae.call(this,Rr.La,a)}A(Ap,Ae);function fi(a){const c=na();ot(c,new Ap(c))}Rr.STAT_EVENT="statevent";function Rp(a,c){Ae.call(this,Rr.STAT_EVENT,a),this.stat=c}A(Rp,Ae);function at(a){const c=na();ot(c,new Rp(c,a))}Rr.Ma="timingevent";function Cp(a,c){Ae.call(this,Rr.Ma,a),this.size=c}A(Cp,Ae);function pi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function mi(){this.g=!0}mi.prototype.xa=function(){this.g=!1};function fT(a,c,f,g,b,O){a.info(function(){if(a.g)if(O)for(var F="",ce=O.split("&"),Fe=0;Fe<ce.length;Fe++){var se=ce[Fe].split("=");if(1<se.length){var Qe=se[0];se=se[1];var Ye=Qe.split("_");F=2<=Ye.length&&Ye[1]=="type"?F+(Qe+"="+se+"&"):F+(Qe+"=redacted&")}}else F=null;else F=O;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+c+`
`+f+`
`+F})}function pT(a,c,f,g,b,O,F){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+c+`
`+f+`
`+O+" "+F})}function as(a,c,f,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+gT(a,f)+(g?" "+g:"")})}function mT(a,c){a.info(function(){return"TIMEOUT: "+c})}mi.prototype.info=function(){};function gT(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var F=1;F<b.length;F++)b[F]=""}}}}return Ku(f)}catch{return c}}var ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Np={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xu;function sa(){}A(sa,Gu),sa.prototype.g=function(){return new XMLHttpRequest},sa.prototype.i=function(){return{}},Xu=new sa;function Un(a,c,f,g){this.j=a,this.i=c,this.l=f,this.R=g||1,this.U=new hi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pp}function Pp(){this.i=null,this.g="",this.h=!1}var bp={},Ju={};function Zu(a,c,f){a.L=1,a.v=la(gn(c)),a.m=f,a.P=!0,Dp(a,null)}function Dp(a,c){a.F=Date.now(),ia(a),a.A=gn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Kp(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Pp,a.g=hm(a.j,f?c:null,!a.m),0<a.O&&(a.M=new cT(y(a.Y,a,a.g),a.O)),c=a.U,f=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Tp[0]=b.toString()),b=Tp);for(var O=0;O<b.length;O++){var F=gp(f,b[O],g||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),fi(),fT(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const c=this.M;c&&yn(a)==3?c.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const Ye=yn(this.g);var c=this.g.Ba();const cs=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||em(this.g)))){this.J||Ye!=4||c==7||(c==8||0>=cs?fi(3):fi(2)),ec(this);var f=this.g.Z();this.X=f;t:if(Op(this)){var g=em(this.g);a="";var b=g.length,O=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),gi(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(O&&c==b-1)});g.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=f==200,pT(this.i,this.u,this.A,this.l,this.R,Ye,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Fe=this.g;if((ce=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ce)){var se=ce;break t}}se=null}if(f=se)as(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tc(this,f);else{this.o=!1,this.s=3,at(12),Cr(this),gi(this);break e}}if(this.P){f=!0;let Mt;for(;!this.J&&this.C<F.length;)if(Mt=yT(this,F),Mt==Ju){Ye==4&&(this.s=4,at(14),f=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==bp){this.s=4,at(15),as(this.i,this.l,F,"[Invalid Chunk]"),f=!1;break}else as(this.i,this.l,Mt,null),tc(this,Mt);if(Op(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||F.length!=0||this.h.h||(this.s=1,at(16),f=!1),this.o=this.o&&f,!f)as(this.i,this.l,F,"[Invalid Chunked Response]"),Cr(this),gi(this);else if(0<F.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),ac(Qe),Qe.M=!0,at(11))}}else as(this.i,this.l,F,null),tc(this,F);Ye==4&&Cr(this),this.o&&!this.J&&(Ye==4?am(this.j,this):(this.o=!1,ia(this)))}else OT(this.g),f==400&&0<F.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Cr(this),gi(this)}}}catch{}finally{}};function Op(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function yT(a,c){var f=a.C,g=c.indexOf(`
`,f);return g==-1?Ju:(f=Number(c.substring(f,g)),isNaN(f)?bp:(g+=1,g+f>c.length?Ju:(c=c.slice(g,g+f),a.C=g+f,c)))}Un.prototype.cancel=function(){this.J=!0,Cr(this)};function ia(a){a.S=Date.now()+a.I,Lp(a,a.I)}function Lp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=pi(y(a.ba,a),c)}function ec(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(mT(this.i,this.A),this.L!=2&&(fi(),at(17)),Cr(this),this.s=2,gi(this)):Lp(this,this.S-a)};function gi(a){a.j.G==0||a.J||am(a.j,a)}function Cr(a){ec(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Ip(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function tc(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||nc(f.h,a))){if(!a.K&&nc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)pa(f),da(f);else break e;oc(f),at(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=pi(y(f.Za,f),6e3));if(1>=jp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Pr(f,11)}else if((a.K||f.g==a)&&pa(f),!v(c))for(b=f.Da.g.parse(c),c=0;c<b.length;c++){let se=b[c];if(f.T=se[0],se=se[1],f.G==2)if(se[0]=="c"){f.K=se[1],f.ia=se[2];const Qe=se[3];Qe!=null&&(f.la=Qe,f.j.info("VER="+f.la));const Ye=se[4];Ye!=null&&(f.Aa=Ye,f.j.info("SVER="+f.Aa));const cs=se[5];cs!=null&&typeof cs=="number"&&0<cs&&(g=1.5*cs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Mt=a.g;if(Mt){const ga=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var O=g.h;O.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(rc(O,O.h),O.h=null))}if(g.D){const lc=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;lc&&(g.ya=lc,de(g.I,g.D,lc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var F=a;if(g.qa=cm(g,g.J?g.ia:null,g.W),F.K){Up(g.h,F);var ce=F,Fe=g.L;Fe&&(ce.I=Fe),ce.B&&(ec(ce),ia(ce)),g.g=F}else im(g);0<f.i.length&&fa(f)}else se[0]!="stop"&&se[0]!="close"||Pr(f,7);else f.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Pr(f,7):ic(f):se[0]!="noop"&&f.l&&f.l.ta(se),f.v=0)}}fi(4)}catch{}}var _T=class{constructor(a,c){this.g=a,this.map=c}};function Vp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jp(a){return a.h?1:a.g?a.g.size:0}function nc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function rc(a,c){a.g?a.g.add(c):a.h=c}function Up(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Vp.prototype.cancel=function(){if(this.i=Fp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Fp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return C(a.i)}function vT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,g=0;g<f;g++)c.push(a[g]);return c}c=[],f=0;for(g in a)c[f++]=a[g];return c}function wT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const g in a)c[f++]=g;return c}}}function Bp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=wT(a),g=vT(a),b=g.length,O=0;O<b;O++)c.call(void 0,g[O],f&&f[O],a)}var zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ET(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),b=null;if(0<=g){var O=a[f].substring(0,g);b=a[f].substring(g+1)}else O=a[f];c(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Nr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nr){this.h=a.h,oa(this,a.j),this.o=a.o,this.g=a.g,aa(this,a.s),this.l=a.l;var c=a.i,f=new vi;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),$p(this,f),this.m=a.m}else a&&(c=String(a).match(zp))?(this.h=!1,oa(this,c[1]||"",!0),this.o=yi(c[2]||""),this.g=yi(c[3]||"",!0),aa(this,c[4]),this.l=yi(c[5]||"",!0),$p(this,c[6]||"",!0),this.m=yi(c[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}Nr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(_i(c,Hp,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(_i(c,Hp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(_i(f,f.charAt(0)=="/"?xT:IT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",_i(f,kT)),a.join("")};function gn(a){return new Nr(a)}function oa(a,c,f){a.j=f?yi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function aa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function $p(a,c,f){c instanceof vi?(a.i=c,AT(a.i,a.h)):(f||(c=_i(c,ST)),a.i=new vi(c,a.h))}function de(a,c,f){a.i.set(c,f)}function la(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function yi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function _i(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,TT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function TT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hp=/[#\/\?@]/g,IT=/[#\?:]/g,xT=/[#\?]/g,ST=/[#\?@]/g,kT=/#/g;function vi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&ET(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=vi.prototype,t.add=function(a,c){Fn(this),this.i=null,a=ls(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function qp(a,c){Fn(a),c=ls(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Wp(a,c){return Fn(a),c=ls(a,c),a.g.has(c)}t.forEach=function(a,c){Fn(this),this.g.forEach(function(f,g){f.forEach(function(b){a.call(c,b,g,this)},this)},this)},t.na=function(){Fn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let g=0;g<c.length;g++){const b=a[g];for(let O=0;O<b.length;O++)f.push(c[g])}return f},t.V=function(a){Fn(this);let c=[];if(typeof a=="string")Wp(this,a)&&(c=c.concat(this.g.get(ls(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Fn(this),this.i=null,a=ls(this,a),Wp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Kp(a,c,f){qp(a,c),0<f.length&&(a.i=null,a.g.set(ls(a,c),C(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var g=c[f];const O=encodeURIComponent(String(g)),F=this.V(g);for(g=0;g<F.length;g++){var b=O;F[g]!==""&&(b+="="+encodeURIComponent(String(F[g]))),a.push(b)}}return this.i=a.join("&")};function ls(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function AT(a,c){c&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(f,g){var b=g.toLowerCase();g!=b&&(qp(this,g),Kp(this,b,f))},a)),a.j=c}function RT(a,c){const f=new mi;if(l.Image){const g=new Image;g.onload=I(Bn,f,"TestLoadImage: loaded",!0,c,g),g.onerror=I(Bn,f,"TestLoadImage: error",!1,c,g),g.onabort=I(Bn,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=I(Bn,f,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function CT(a,c){const f=new mi,g=new AbortController,b=setTimeout(()=>{g.abort(),Bn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(b),O.ok?Bn(f,"TestPingServer: ok",!0,c):Bn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),Bn(f,"TestPingServer: error",!1,c)})}function Bn(a,c,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function NT(){this.g=new dT}function PT(a,c,f){const g=f||"";try{Bp(a,function(b,O){let F=b;h(b)&&(F=Ku(b)),c.push(g+O+"="+encodeURIComponent(F))})}catch(b){throw c.push(g+"type="+encodeURIComponent("_badmap")),b}}function ua(a){this.l=a.Ub||null,this.j=a.eb||!1}A(ua,Gu),ua.prototype.g=function(){return new ca(this.l,this.j)},ua.prototype.i=function(a){return function(){return a}}({});function ca(a,c){Ge.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ca,Ge),t=ca.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?wi(this):Ei(this),this.readyState==3&&Gp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,wi(this))},t.Qa=function(a){this.g&&(this.response=a,wi(this))},t.ga=function(){this.g&&wi(this)};function wi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ei(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function Ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qp(a){let c="";return V(a,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function sc(a,c,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Qp(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):de(a,c,f))}function Ie(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ie,Ge);var bT=/^https?$/i,DT=["POST","PUT"];t=Ie.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xu.g(),this.v=this.o?xp(this.o):xp(Xu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){Yp(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(DT,c,void 0))||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,F]of f)this.g.setRequestHeader(O,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Yp(this,O)}};function Yp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Xp(a),ha(a)}function Xp(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ot(this,"complete"),ot(this,"abort"),ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),Ie.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Jp(this):this.bb())},t.bb=function(){Jp(this)};function Jp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||yn(a)!=4||a.Z()!=2)){if(a.u&&yn(a)==4)wp(a.Ea,0,a);else if(ot(a,"readystatechange"),yn(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var g;if(g=F===0){var b=String(a.D).match(zp)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),g=!bT.test(b?b.toLowerCase():"")}f=g}if(f)ot(a,"complete"),ot(a,"success");else{a.m=6;try{var O=2<yn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Xp(a)}}finally{ha(a)}}}}function ha(a,c){if(a.g){Zp(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ot(a,"ready");try{f.onreadystatechange=g}catch{}}}function Zp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function yn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),hT(c)}};function em(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function OT(a){const c={};a=(a.g&&2<=yn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var f=R(a[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=c[b]||[];c[b]=O,O.push(f)}E(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ti(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function tm(a){this.Aa=0,this.i=[],this.j=new mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ti("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ti("baseRetryDelayMs",5e3,a),this.cb=Ti("retryDelaySeedMs",1e4,a),this.Wa=Ti("forwardChannelMaxRetries",2,a),this.wa=Ti("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Vp(a&&a.concurrentRequestLimit),this.Da=new NT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=tm.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,g){at(0),this.W=a,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=cm(this,null,this.W),fa(this)};function ic(a){if(nm(a),a.G==3){var c=a.U++,f=gn(a.I);if(de(f,"SID",a.K),de(f,"RID",c),de(f,"TYPE","terminate"),Ii(a,f),c=new Un(a,a.j,c),c.L=2,c.v=la(gn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=hm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ia(c)}um(a)}function da(a){a.g&&(ac(a),a.g.cancel(),a.g=null)}function nm(a){da(a),a.u&&(l.clearTimeout(a.u),a.u=null),pa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fa(a){if(!Mp(a.h)&&!a.s){a.s=!0;var c=a.Ga;hn||J(),z||(hn(),z=!0),Q.add(c,a),a.B=0}}function LT(a,c){return jp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=pi(y(a.Ga,a,c),lm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Un(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=sm(this,b,c),f=gn(this.I),de(f,"RID",a),de(f,"CVER",22),this.D&&de(f,"X-HTTP-Session-Id",this.D),Ii(this,f),O&&(this.O?c="headers="+encodeURIComponent(String(Qp(O)))+"&"+c:this.m&&sc(f,this.m,O)),rc(this.h,b),this.Ua&&de(f,"TYPE","init"),this.P?(de(f,"$req",c),de(f,"SID","null"),b.T=!0,Zu(b,f,null)):Zu(b,f,c),this.G=2}}else this.G==3&&(a?rm(this,a):this.i.length==0||Mp(this.h)||rm(this))};function rm(a,c){var f;c?f=c.l:f=a.U++;const g=gn(a.I);de(g,"SID",a.K),de(g,"RID",f),de(g,"AID",a.T),Ii(a,g),a.m&&a.o&&sc(g,a.m,a.o),f=new Un(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=sm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),rc(a.h,f),Zu(f,g,c)}function Ii(a,c){a.H&&V(a.H,function(f,g){de(c,g,f)}),a.l&&Bp({},function(f,g){de(c,g,f)})}function sm(a,c,f){f=Math.min(a.i.length,f);var g=a.l?y(a.l.Na,a.l,a):null;e:{var b=a.i;let O=-1;for(;;){const F=["count="+f];O==-1?0<f?(O=b[0].g,F.push("ofs="+O)):O=0:F.push("ofs="+O);let ce=!0;for(let Fe=0;Fe<f;Fe++){let se=b[Fe].g;const Qe=b[Fe].map;if(se-=O,0>se)O=Math.max(0,b[Fe].g-100),ce=!1;else try{PT(Qe,F,"req"+se+"_")}catch{g&&g(Qe)}}if(ce){g=F.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,g}function im(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;hn||J(),z||(hn(),z=!0),Q.add(c,a),a.v=0}}function oc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=pi(y(a.Fa,a),lm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,om(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=pi(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),da(this),om(this))};function ac(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function om(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=gn(a.qa);de(c,"RID","rpc"),de(c,"SID",a.K),de(c,"AID",a.T),de(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(c,"TO",a.ja),de(c,"TYPE","xmlhttp"),Ii(a,c),a.m&&a.o&&sc(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=la(gn(c)),f.m=null,f.P=!0,Dp(f,a)}t.Za=function(){this.C!=null&&(this.C=null,da(this),oc(this),at(19))};function pa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function am(a,c){var f=null;if(a.g==c){pa(a),ac(a),a.g=null;var g=2}else if(nc(a.h,c))f=c.D,Up(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var b=a.B;g=na(),ot(g,new Cp(g,f)),fa(a)}else im(a);else if(b=c.s,b==3||b==0&&0<c.X||!(g==1&&LT(a,c)||g==2&&oc(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),b){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function lm(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function Pr(a,c){if(a.j.info("Error code "+c),c==2){var f=y(a.fb,a),g=a.Xa;const b=!g;g=new Nr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||oa(g,"https"),la(g),b?RT(g.toString(),f):CT(g.toString(),f)}else at(2);a.G=0,a.l&&a.l.sa(c),um(a),nm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function um(a){if(a.G=0,a.ka=[],a.l){const c=Fp(a.h);(c.length!=0||a.i.length!=0)&&(N(a.ka,c),N(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function cm(a,c,f){var g=f instanceof Nr?gn(f):new Nr(f);if(g.g!="")c&&(g.g=c+"."+g.g),aa(g,g.s);else{var b=l.location;g=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var O=new Nr(null);g&&oa(O,g),c&&(O.g=c),b&&aa(O,b),f&&(O.l=f),g=O}return f=a.D,c=a.ya,f&&c&&de(g,f,c),de(g,"VER",a.la),Ii(a,g),g}function hm(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ie(new ua({eb:f})):new Ie(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dm(){}t=dm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ma(){}ma.prototype.g=function(a,c){return new wt(a,c)};function wt(a,c){Ge.call(this),this.g=new tm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new us(this)}A(wt,Ge),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){ic(this.g)},wt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ku(a),a=f);c.i.push(new _T(c.Ya++,a)),c.G==3&&fa(c)},wt.prototype.N=function(){this.g.l=null,delete this.j,ic(this.g),delete this.g,wt.aa.N.call(this)};function fm(a){Qu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}A(fm,Qu);function pm(){Yu.call(this),this.status=1}A(pm,Yu);function us(a){this.g=a}A(us,dm),us.prototype.ua=function(){ot(this.g,"a")},us.prototype.ta=function(a){ot(this.g,new fm(a))},us.prototype.sa=function(a){ot(this.g,new pm)},us.prototype.ra=function(){ot(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,vw=function(){return new ma},_w=function(){return na()},yw=Rr,Xh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ra.NO_ERROR=0,ra.TIMEOUT=8,ra.HTTP_ERROR=6,sl=ra,Np.COMPLETE="complete",gw=Np,Sp.EventType=di,di.OPEN="a",di.CLOSE="b",di.ERROR="c",di.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,Fi=Sp,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,mw=Ie}).apply(typeof La<"u"?La:typeof self<"u"?self:typeof window<"u"?window:{});const ey="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let oi="10.14.0";/**
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
 */const Xr=new hf("@firebase/firestore");function bi(){return Xr.logLevel}function q(t,...e){if(Xr.logLevel<=te.DEBUG){const n=e.map(xf);Xr.debug(`Firestore (${oi}): ${t}`,...n)}}function Ln(t,...e){if(Xr.logLevel<=te.ERROR){const n=e.map(xf);Xr.error(`Firestore (${oi}): ${t}`,...n)}}function Ks(t,...e){if(Xr.logLevel<=te.WARN){const n=e.map(xf);Xr.warn(`Firestore (${oi}): ${t}`,...n)}}function xf(t){if(typeof t=="string")return t;try{/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${oi}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function le(t,e){t||G()}function X(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class An{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ww{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class vR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wR{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new An;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new An,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new An)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new ww(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new et(e)}}class ER{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ER(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new IR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function SR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ew{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=SR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Gs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class So{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return So.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof So?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends So{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const kR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends So{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return kR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(pe.fromString(e))}static fromName(e){return new W(pe.fromString(e).popFirst(5))}static empty(){return new W(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new pe(e.slice()))}}function AR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new gr(s,W.empty(),e)}function RR(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(Y.min(),W.empty(),-1)}static max(){return new gr(Y.max(),W.empty(),-1)}}function CR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const NR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==NR)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function bR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sf.oe=-1;function Eu(t){return t==null}function Bl(t){return t===0&&1/t==-1/0}function DR(t){return typeof t=="number"&&Number.isInteger(t)&&!Bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ty(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Te{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Va(this.root,e,this.comparator,!1)}getReverseIterator(){return new Va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Va(this.root,e,this.comparator,!0)}}class Va{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ny(this.data.getIterator())}getIteratorFrom(e){return new ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new It([])}unionWith(e){let n=new qe($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Iw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Iw("Invalid base64 string: "+i):i}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const OR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(le(!!t),typeof t=="string"){let e=0;const n=OR.exec(t);if(le(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function kf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Af(t){const e=t.mapValue.fields.__previous_value__;return kf(e)?Af(e):e}function ko(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class LR{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ma={mapValue:{}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kf(t)?4:MR(t)?9007199254740991:VR(t)?10:11:G()}function un(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ko(t).isEqual(ko(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yr(s.timestampValue),l=yr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Jr(s.bytesValue).isEqual(Jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Re(s.geoPointValue.latitude)===Re(i.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Re(s.integerValue)===Re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Re(s.doubleValue),l=Re(i.doubleValue);return o===l?Bl(o)===Bl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Gs(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ty(o)!==ty(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!un(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Ro(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function Qs(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Re(i.integerValue||i.doubleValue),u=Re(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ry(t.timestampValue,e.timestampValue);case 4:return ry(ko(t),ko(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Jr(i),u=Jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=ie(l[h],u[h]);if(p!==0)return p}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ie(Re(i.latitude),Re(o.latitude));return l!==0?l:ie(Re(i.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return sy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,p;const m=i.fields||{},y=o.fields||{},I=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=(u=y.value)===null||u===void 0?void 0:u.arrayValue,C=ie(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((p=A==null?void 0:A.values)===null||p===void 0?void 0:p.length)||0);return C!==0?C:sy(I,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ma.mapValue&&o===Ma.mapValue)return 0;if(i===Ma.mapValue)return 1;if(o===Ma.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const y=ie(u[m],p[m]);if(y!==0)return y;const I=Qs(l[u[m]],h[p[m]]);if(I!==0)return I}return ie(u.length,p.length)}(t.mapValue,e.mapValue);default:throw G()}}function ry(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=yr(t),r=yr(e),s=ie(n.seconds,r.seconds);return s!==0?s:ie(n.nanos,r.nanos)}function sy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Qs(n[s],r[s]);if(i)return i}return ie(n.length,r.length)}function Ys(t){return Jh(t)}function Jh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Jh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Jh(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function iy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zh(t){return!!t&&"integerValue"in t}function Rf(t){return!!t&&"arrayValue"in t}function oy(t){return!!t&&"nullValue"in t}function ay(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function il(t){return!!t&&"mapValue"in t}function VR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=$e.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=eo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];il(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){is(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(eo(this.value))}}function xw(t){const e=[];return is(t.fields,(n,r)=>{const s=new $e([n]);if(il(r)){const i=xw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new It(e)}/**
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
 */class nt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,Y.min(),Y.min(),Y.min(),mt.empty(),0)}static newFoundDocument(e,n,r,s){return new nt(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new nt(e,2,n,Y.min(),Y.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,Y.min(),Y.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zl{constructor(e,n){this.position=e,this.inclusive=n}}function ly(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Qs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function uy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Co{constructor(e,n="asc"){this.field=e,this.dir=n}}function jR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Sw{}class De extends Sw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FR(e,n,r):n==="array-contains"?new $R(e,r):n==="in"?new HR(e,r):n==="not-in"?new qR(e,r):n==="array-contains-any"?new WR(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BR(e,r):new zR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qs(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(Qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends Sw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Gt(e,n)}matches(e){return kw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function kw(t){return t.op==="and"}function Aw(t){return UR(t)&&kw(t)}function UR(t){for(const e of t.filters)if(e instanceof Gt)return!1;return!0}function ed(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Ys(t.value);if(Aw(t))return t.filters.map(e=>ed(e)).join(",");{const e=t.filters.map(n=>ed(n)).join(",");return`${t.op}(${e})`}}function Rw(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(t,e):t instanceof Gt?function(r,s){return s instanceof Gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Rw(o,s.filters[l]),!0):!1}(t,e):void G()}function Cw(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Ys(n.value)}`}(t):t instanceof Gt?function(n){return n.op.toString()+" {"+n.getFilters().map(Cw).join(" ,")+"}"}(t):"Filter"}class FR extends De{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class BR extends De{constructor(e,n){super(e,"in",n),this.keys=Nw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zR extends De{constructor(e,n){super(e,"not-in",n),this.keys=Nw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class $R extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rf(n)&&Ro(n.arrayValue,this.value)}}class HR extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ro(this.value.arrayValue,n)}}class qR extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ro(this.value.arrayValue,n)}}class WR extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ro(this.value.arrayValue,r))}}/**
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
 */class KR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function cy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new KR(t,e,n,r,s,i,o)}function Cf(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Eu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ys(r)).join(",")),e.ue=n}return e.ue}function Nf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Rw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uy(t.startAt,e.startAt)&&uy(t.endAt,e.endAt)}function td(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ai{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function GR(t,e,n,r,s,i,o,l){return new ai(t,e,n,r,s,i,o,l)}function Tu(t){return new ai(t)}function hy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pw(t){return t.collectionGroup!==null}function to(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Co(i,r))}),n.has($e.keyField().canonicalString())||e.ce.push(new Co($e.keyField(),r))}return e.ce}function on(t){const e=X(t);return e.le||(e.le=QR(e,to(t))),e.le}function QR(t,e){if(t.limitType==="F")return cy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Co(s.field,i)});const n=t.endAt?new zl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zl(t.startAt.position,t.startAt.inclusive):null;return cy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nd(t,e){const n=t.filters.concat([e]);return new ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rd(t,e,n){return new ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Iu(t,e){return Nf(on(t),on(e))&&t.limitType===e.limitType}function bw(t){return`${Cf(on(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Cw(s)).join(", ")}]`),Eu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ys(s)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function xu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of to(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=ly(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,to(r),s)||r.endAt&&!function(o,l,u){const h=ly(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,to(r),s))}(t,e)}function YR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dw(t){return(e,n)=>{let r=!1;for(const s of to(t)){const i=XR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function XR(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Qs(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class li{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Tw(this.inner)}size(){return this.innerSize}}/**
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
 */const JR=new Te(W.comparator);function Vn(){return JR}const Ow=new Te(W.comparator);function Bi(...t){let e=Ow;for(const n of t)e=e.insert(n.key,n);return e}function Lw(t){let e=Ow;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return no()}function Vw(){return no()}function no(){return new li(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZR=new Te(W.comparator),eC=new qe(W.comparator);function ee(...t){let e=eC;for(const n of t)e=e.add(n);return e}const tC=new qe(ie);function nC(){return tC}/**
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
 */function Pf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bl(e)?"-0":e}}function Mw(t){return{integerValue:""+t}}function rC(t,e){return DR(e)?Mw(e):Pf(t,e)}/**
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
 */class Su{constructor(){this._=void 0}}function sC(t,e,n){return t instanceof No?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kf(i)&&(i=Af(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Po?Uw(t,e):t instanceof bo?Fw(t,e):function(s,i){const o=jw(s,i),l=dy(o)+dy(s.Pe);return Zh(o)&&Zh(s.Pe)?Mw(l):Pf(s.serializer,l)}(t,e)}function iC(t,e,n){return t instanceof Po?Uw(t,e):t instanceof bo?Fw(t,e):n}function jw(t,e){return t instanceof $l?function(r){return Zh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class No extends Su{}class Po extends Su{constructor(e){super(),this.elements=e}}function Uw(t,e){const n=Bw(e);for(const r of t.elements)n.some(s=>un(s,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends Su{constructor(e){super(),this.elements=e}}function Fw(t,e){let n=Bw(e);for(const r of t.elements)n=n.filter(s=>!un(s,r));return{arrayValue:{values:n}}}class $l extends Su{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function dy(t){return Re(t.integerValue||t.doubleValue)}function Bw(t){return Rf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class oC{constructor(e,n){this.field=e,this.transform=n}}function aC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Po&&s instanceof Po||r instanceof bo&&s instanceof bo?Gs(r.elements,s.elements,un):r instanceof $l&&s instanceof $l?un(r.Pe,s.Pe):r instanceof No&&s instanceof No}(t.transform,e.transform)}class lC{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ol(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ku{}function zw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hw(t.key,qt.none()):new Ko(t.key,t.data,qt.none());{const n=t.data,r=mt.empty();let s=new qe($e.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new It(s.toArray()),qt.none())}}function uC(t,e,n){t instanceof Ko?function(s,i,o){const l=s.value.clone(),u=py(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!ol(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=py(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll($w(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,r){return t instanceof Ko?function(i,o,l,u){if(!ol(i.precondition,o))return l;const h=i.value.clone(),p=my(i.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,l,u){if(!ol(i.precondition,o))return l;const h=my(i.fieldTransforms,u,o),p=o.data;return p.setAll($w(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return ol(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function cC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=jw(r.transform,s||null);i!=null&&(n===null&&(n=mt.empty()),n.set(r.field,i))}return n||null}function fy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gs(r,s,(i,o)=>aC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends ku{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends ku{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $w(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function py(t,e,n){const r=new Map;le(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,iC(o,l,n[s]))}return r}function my(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,sC(i,o,e))}return r}class Hw extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hC extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&uC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=zw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,(n,r)=>fy(n,r))&&Gs(this.baseMutations,e.baseMutations,(n,r)=>fy(n,r))}}class bf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){le(e.mutations.length===r.length);let s=function(){return ZR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new bf(e,n,r,s)}}/**
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
 */class fC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,ne;function mC(t){switch(t){default:return G();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function qw(t){if(t===void 0)return Ln("GRPC error has no .code"),L.UNKNOWN;switch(t){case Pe.OK:return L.OK;case Pe.CANCELLED:return L.CANCELLED;case Pe.UNKNOWN:return L.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return L.INTERNAL;case Pe.UNAVAILABLE:return L.UNAVAILABLE;case Pe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Pe.NOT_FOUND:return L.NOT_FOUND;case Pe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Pe.ABORTED:return L.ABORTED;case Pe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Pe.DATA_LOSS:return L.DATA_LOSS;default:return G()}}(ne=Pe||(Pe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gC(){return new TextEncoder}/**
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
 */const yC=new Br([4294967295,4294967295],0);function gy(t){const e=gC().encode(t),n=new pw;return n.update(e),new Uint8Array(n.digest())}function yy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Br([n,r],0),new Br([s,i],0)]}class Df{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zi(`Invalid padding: ${n}`);if(r<0)throw new zi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Br.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Br.fromNumber(r)));return s.compare(yC)===1&&(s=new Br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=gy(e),[r,s]=yy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Df(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=gy(e),[r,s]=yy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Au{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Au(Y.min(),s,new Te(ie),Vn(),ee())}}class Go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Go(r,n,ee(),ee(),ee())}}/**
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
 */class al{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Ww{constructor(e,n){this.targetId=e,this.me=n}}class Kw{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class _y{constructor(){this.fe=0,this.ge=wy(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Go(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=wy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _C{constructor(e){this.Le=e,this.Be=new Map,this.ke=Vn(),this.qe=vy(),this.Qe=new Te(ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(td(i))if(r===0){const o=new W(i.path);this.Ue(n,o,nt.newNoDocument(o,Y.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Jr(r).toUint8Array()}catch(u){if(u instanceof Iw)return Ks("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Df(o,s,i)}catch(u){return Ks(u instanceof zi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&td(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,nt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ee();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Au(e,n,this.Qe,this.ke,r);return this.ke=Vn(),this.qe=vy(),this.Qe=new Te(ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new _y,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new qe(ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new _y),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function vy(){return new Te(W.comparator)}function wy(){return new Te(W.comparator)}const vC={asc:"ASCENDING",desc:"DESCENDING"},wC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EC={and:"AND",or:"OR"};class TC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sd(t,e){return t.useProto3Json||Eu(e)?e:{value:e}}function Hl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function IC(t,e){return Hl(t,e.toTimestamp())}function an(t){return le(!!t),Y.fromTimestamp(function(n){const r=yr(n);return new Ve(r.seconds,r.nanos)}(t))}function Of(t,e){return id(t,e).canonicalString()}function id(t,e){const n=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Qw(t){const e=pe.fromString(t);return le(eE(e)),e}function od(t,e){return Of(t.databaseId,e.path)}function zc(t,e){const n=Qw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Xw(n))}function Yw(t,e){return Of(t.databaseId,e)}function xC(t){const e=Qw(t);return e.length===4?pe.emptyPath():Xw(e)}function ad(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xw(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ey(t,e,n){return{name:od(t,e),fields:n.value.mapValue.fields}}function SC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(le(p===void 0||typeof p=="string"),Ke.fromBase64String(p||"")):(le(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ke.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?L.UNKNOWN:qw(h.code);return new $(p,h.message||"")}(o);n=new Kw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zc(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):Y.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(s,i,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new al(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zc(t,r.document),i=r.readTime?an(r.readTime):Y.min(),o=nt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new al([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zc(t,r.document),i=r.removedTargetIds||[];n=new al([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pC(s,i),l=r.targetId;n=new Ww(l,o)}}return n}function kC(t,e){let n;if(e instanceof Ko)n={update:Ey(t,e.key,e.value)};else if(e instanceof Hw)n={delete:od(t,e.key)};else if(e instanceof Sr)n={update:Ey(t,e.key,e.data),updateMask:LC(e.fieldMask)};else{if(!(e instanceof hC))return G();n={verify:od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof No)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $l)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:IC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function AC(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(Y.min())&&(o=an(i)),new lC(o,s.transformResults||[])}(n,e))):[]}function RC(t,e){return{documents:[Yw(t,e.path)]}}function CC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Yw(t,s);const i=function(h){if(h.length!==0)return Zw(Gt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(y){return{field:ps(y.field),direction:bC(y.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=sd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function NC(t){let e=xC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){le(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const y=Jw(m);return y instanceof Gt&&Aw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(A){return new Co(ms(A.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Eu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,I=m.values||[];return new zl(I,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,I=m.values||[];return new zl(I,y)}(n.endAt)),GR(e,s,o,i,l,"F",u,h)}function PC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ms(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ms(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return De.create(ms(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gt.create(n.compositeFilter.filters.map(r=>Jw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function bC(t){return vC[t]}function DC(t){return wC[t]}function OC(t){return EC[t]}function ps(t){return{fieldPath:t.canonicalString()}}function ms(t){return $e.fromServerFormat(t.fieldPath)}function Zw(t){return t instanceof De?function(n){if(n.op==="=="){if(ay(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(oy(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ay(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(oy(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:DC(n.op),value:n.value}}}(t):t instanceof Gt?function(n){const r=n.getFilters().map(s=>Zw(s));return r.length===1?r[0]:{compositeFilter:{op:OC(n.op),filters:r}}}(t):G()}function LC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tr{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VC{constructor(e){this.ct=e}}function MC(t){const e=NC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rd(e,e.limit,"L"):e}/**
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
 */class jC{constructor(){this.un=new UC}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(gr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class UC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(pe.comparator)).toArray()}}/**
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
 */class Xs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Xs(0)}static kn(){return new Xs(-1)}}/**
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
 */class FC{constructor(){this.changes=new li(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ro(r.mutation,s,It.empty(),Ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const s=jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Bi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Vn();const o=no(),l=function(){return no()}();return n.forEach((u,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Sr)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),ro(p.mutation,h,p.mutation.getFieldMask(),Ve.now())):o.set(h.key,It.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var m;return l.set(h,new BC(p,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=no();let s=new Te((o,l)=>o-l),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||It.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(s.get(l.batchId)||ee()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=Vw();p.forEach(y=>{if(!i.has(y)){const I=zw(n.get(y),r.get(y));I!==null&&m.set(y,I),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Pw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(jr());let l=-1,u=i;return o.next(h=>M.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?M.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{u=u.insert(p,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ee())).next(p=>({batchId:l,changes:Lw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=Bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Bi();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(m,y){return new ai(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,nt.newInvalidDocument(p)))});let l=Bi();return o.forEach((u,h)=>{const p=i.get(u);p!==void 0&&ro(p.mutation,h,It.empty(),Ve.now()),xu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class $C{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:MC(s.bundledQuery),readTime:an(s.readTime)}}(n)),M.resolve()}}/**
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
 */class HC{constructor(){this.overlays=new Te(W.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=jr(),i=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Te((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=jr(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=jr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return M.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fC(n,r));let i=this.Ir.get(n);i===void 0&&(i=ee(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class qC{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Lf{constructor(){this.Tr=new qe(Me.Er),this.dr=new qe(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new pe([])),r=new Me(n,e),s=new Me(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new pe([])),r=new Me(n,e),s=new Me(n,e+1);let i=ee();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||ie(e.wr,n.wr)}static Ar(e,n){return ie(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
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
 */class WC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qe(Me.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Me(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),s=new Me(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ie);return n.forEach(s=>{const i=new Me(s,0),o=new Me(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Me(new W(i),0);let l=new qe(ie);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,s=>{const i=new Me(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),s=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class KC{constructor(e){this.Mr=e,this.docs=function(){return new Te(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vn();const o=n.path,l=new W(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||CR(RR(p),r)<=0||(s.has(p.key)||xu(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GC(this)}getSize(e){return M.resolve(this.size)}}class GC extends FC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class QC{constructor(e){this.persistence=e,this.Nr=new li(n=>Cf(n),Nf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lf,this.targetCount=0,this.kr=Xs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Xs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class YC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Sf(0),this.Kr=!1,this.Kr=!0,this.$r=new qC,this.referenceDelegate=e(this),this.Ur=new QC(this),this.indexManager=new jC,this.remoteDocumentCache=function(s){return new KC(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new VC(n),this.Gr=new $C(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new WC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new XC(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class XC extends PR{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.Jr=new Lf,this.Yr=null}static Zr(e){return new Vf(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=W.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Mf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ee(),s=ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Mf(e,n.fromCache,r,s)}}/**
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
 */class JC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return MS()?8:bR(it())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new JC;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(bi()<=te.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(bi()<=te.DEBUG&&q("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(bi()<=te.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):M.resolve())}Yi(e,n){if(hy(n))return M.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=rd(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ee(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,rd(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return hy(n)||s.isEqual(Y.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?M.resolve(null):(bi()<=te.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fs(n)),this.rs(e,o,n,AR(s,-1)).next(l=>l))})}ts(e,n){let r=new qe(Dw(e));return n.forEach((s,i)=>{xu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return bi()<=te.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",fs(n)),this.Ji.getDocumentsMatchingQuery(e,n,gr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class eN{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Te(ie),this._s=new li(i=>Cf(i),Nf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function tN(t,e,n,r){return new eN(t,e,n,r)}async function tE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ee();for(const h of s){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function nN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,y=m.keys();let I=M.resolve();return y.forEach(A=>{I=I.next(()=>p.getEntry(u,A)).next(C=>{const N=h.docVersions.get(A);le(N!==null),C.version.compareTo(N)<0&&(m.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),p.addEntry(C)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function nE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function rN(t,e){const n=X(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const y=s.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,m)));let I=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(Ke.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(p.resumeToken,r)),s=s.insert(m,I),function(C,N,w){return C.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(y,I,p)&&l.push(n.Ur.updateTargetData(i,I))});let u=Vn(),h=ee();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(sN(i,o,e.documentUpdates).next(p=>{u=p.Ps,h=p.Is})),!r.isEqual(Y.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function sN(t,e,n){let r=ee(),s=ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Vn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function iN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ld(t,e,n){const r=X(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ty(t,e,n){const r=X(t);let s=Y.min(),i=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const m=X(u),y=m._s.get(p);return y!==void 0?M.resolve(m.os.get(y)):m.Ur.getTargetData(h,p)}(r,o,on(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:ee())).next(l=>(aN(r,YR(e),l),{documents:l,Ts:i})))}function aN(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Iy{constructor(){this.activeTargetIds=nC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lN{constructor(){this.so=new Iy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Iy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uN{_o(e){}shutdown(){}}/**
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
 */class xy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ja=null;function $c(){return ja===null?ja=function(){return 268435456+Math.round(2147483648*Math.random())}():ja++,"0x"+ja.toString(16)}/**
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
 */const cN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ze="WebChannelConnection";class dN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=$c(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(p=>(q("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Ks("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=cN[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=$c();return new Promise((o,l)=>{const u=new mw;u.setWithCredentials(!0),u.listenOnce(gw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case sl.NO_ERROR:const p=u.getResponseJson();q(Ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case sl.TIMEOUT:q(Ze,`RPC '${e}' ${i} timed out`),l(new $(L.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const m=u.getStatus();if(q(Ze,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const I=y==null?void 0:y.error;if(I&&I.status&&I.message){const A=function(N){const w=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(I.status);l(new $(A,I.message))}else l(new $(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(L.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{q(Ze,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);q(Ze,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=$c(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vw(),l=_w(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");q(Ze,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let y=!1,I=!1;const A=new hN({Io:N=>{I?q(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(y||(q(Ze,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),q(Ze,`RPC '${e}' stream ${s} sending:`,N),m.send(N))},To:()=>m.close()}),C=(N,w,v)=>{N.listen(w,x=>{try{v(x)}catch(D){setTimeout(()=>{throw D},0)}})};return C(m,Fi.EventType.OPEN,()=>{I||(q(Ze,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),C(m,Fi.EventType.CLOSE,()=>{I||(I=!0,q(Ze,`RPC '${e}' stream ${s} transport closed`),A.So())}),C(m,Fi.EventType.ERROR,N=>{I||(I=!0,Ks(Ze,`RPC '${e}' stream ${s} transport errored:`,N),A.So(new $(L.UNAVAILABLE,"The operation could not be completed")))}),C(m,Fi.EventType.MESSAGE,N=>{var w;if(!I){const v=N.data[0];le(!!v);const x=v,D=x.error||((w=x[0])===null||w===void 0?void 0:w.error);if(D){q(Ze,`RPC '${e}' stream ${s} received error:`,D);const U=D.status;let V=function(T){const S=Pe[T];if(S!==void 0)return qw(S)}(U),E=D.message;V===void 0&&(V=L.INTERNAL,E="Unknown error status: "+U+" with message "+D.message),I=!0,A.So(new $(V,E)),m.close()}else q(Ze,`RPC '${e}' stream ${s} received:`,v),A.bo(v)}}),C(l,yw.STAT_EVENT,N=>{N.stat===Xh.PROXY?q(Ze,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Xh.NOPROXY&&q(Ze,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function Hc(){return typeof document<"u"?document:null}/**
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
 */function Ru(t){return new TC(t,!0)}/**
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
 */class rE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class sE{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new $(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fN extends sE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=SC(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?an(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ad(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=td(u)?{documents:RC(i,u)}:{query:CC(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Gw(i,o.resumeToken);const h=sd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Hl(i,o.snapshotVersion.toTimestamp());const h=sd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=PC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ad(this.serializer),n.removeTarget=e,this.a_(n)}}class pN extends sE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=AC(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ad(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kC(this.serializer,r))};this.a_(n)}}/**
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
 */class mN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,id(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,id(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ln(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class yN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{os(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.L_.add(4),await Qo(h),h.q_.set("Unknown"),h.L_.delete(4),await Cu(h)}(this))})}),this.q_=new gN(r,s)}}async function Cu(t){if(os(t))for(const e of t.B_)await e(!0)}async function Qo(t){for(const e of t.B_)await e(!1)}function iE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Bf(n)?Ff(n):ui(n).r_()&&Uf(n,e))}function jf(t,e){const n=X(t),r=ui(n);n.N_.delete(e),r.r_()&&oE(n,e),n.N_.size===0&&(r.r_()?r.o_():os(n)&&n.q_.set("Unknown"))}function Uf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ui(t).A_(e)}function oE(t,e){t.Q_.xe(e),ui(t).R_(e)}function Ff(t){t.Q_=new _C({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ui(t).start(),t.q_.v_()}function Bf(t){return os(t)&&!ui(t).n_()&&t.N_.size>0}function os(t){return X(t).L_.size===0}function aE(t){t.Q_=void 0}async function _N(t){t.q_.set("Online")}async function vN(t){t.N_.forEach((e,n)=>{Uf(t,e)})}async function wN(t,e){aE(t),Bf(t)?(t.q_.M_(e),Ff(t)):t.q_.set("Unknown")}async function EN(t,e,n){if(t.q_.set("Online"),e instanceof Kw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ql(t,r)}else if(e instanceof al?t.Q_.Ke(e):e instanceof Ww?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await nE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(h);p&&i.N_.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(Ke.EMPTY_BYTE_STRING,p.snapshotVersion)),oE(i,u);const m=new tr(p.target,u,h,p.sequenceNumber);Uf(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await ql(t,r)}}async function ql(t,e,n){if(!Wo(e))throw e;t.L_.add(1),await Qo(t),t.q_.set("Offline"),n||(n=()=>nE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Cu(t)})}function lE(t,e){return e().catch(n=>ql(t,n,e))}async function Nu(t){const e=X(t),n=_r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;TN(e);)try{const s=await iN(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,IN(e,s)}catch(s){await ql(e,s)}uE(e)&&cE(e)}function TN(t){return os(t)&&t.O_.length<10}function IN(t,e){t.O_.push(e);const n=_r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function uE(t){return os(t)&&!_r(t).n_()&&t.O_.length>0}function cE(t){_r(t).start()}async function xN(t){_r(t).p_()}async function SN(t){const e=_r(t);for(const n of t.O_)e.m_(n.mutations)}async function kN(t,e,n){const r=t.O_.shift(),s=bf.from(r,e,n);await lE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Nu(t)}async function AN(t,e){e&&_r(t).V_&&await async function(r,s){if(function(o){return mC(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();_r(r).s_(),await lE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Nu(r)}}(t,e),uE(t)&&cE(t)}async function Sy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=os(n);n.L_.add(3),await Qo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Cu(n)}async function RN(t,e){const n=X(t);e?(n.L_.delete(2),await Cu(n)):e||(n.L_.add(2),await Qo(n),n.q_.set("Unknown"))}function ui(t){return t.K_||(t.K_=function(n,r,s){const i=X(n);return i.w_(),new fN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:_N.bind(null,t),Ro:vN.bind(null,t),mo:wN.bind(null,t),d_:EN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Bf(t)?Ff(t):t.q_.set("Unknown")):(await t.K_.stop(),aE(t))})),t.K_}function _r(t){return t.U_||(t.U_=function(n,r,s){const i=X(n);return i.w_(),new pN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:xN.bind(null,t),mo:AN.bind(null,t),f_:SN.bind(null,t),g_:kN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Nu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class zf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new zf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $f(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Wo(t))return new $(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Bi(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ky{constructor(){this.W_=new Te(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Js{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Js(e,n,js.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class CN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class NN{constructor(){this.queries=Ay(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=Ay(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(L.ABORTED,"Firestore shutting down"))}}function Ay(){return new li(t=>bw(t),Iu)}async function Hf(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new CN,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=$f(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Wf(n)}async function qf(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function PN(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Wf(n)}function bN(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Wf(t){t.Y_.forEach(e=>{e.next()})}var ud,Ry;(Ry=ud||(ud={})).ea="default",Ry.Cache="cache";class Kf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ud.Cache}}/**
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
 */class hE{constructor(e){this.key=e}}class dE{constructor(e){this.key=e}}class DN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=Dw(e),this.Ra=new js(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ky,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const y=s.get(p),I=xu(this.query,m)?m:null,A=!!y&&this.mutatedKeys.has(y.key),C=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let N=!1;y&&I?y.data.isEqual(I.data)?A!==C&&(r.track({type:3,doc:I}),N=!0):this.ga(y,I)||(r.track({type:2,doc:I}),N=!0,(u&&this.Aa(I,u)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!y&&I?(r.track({type:0,doc:I}),N=!0):y&&!I&&(r.track({type:1,doc:y}),N=!0,(u||h)&&(l=!0)),N&&(I?(o=o.add(I),i=C?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(I,A){const C=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return C(I)-C(A)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Js(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ky,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new dE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new hE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Js.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ON{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LN{constructor(e){this.key=e,this.va=!1}}class VN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new li(l=>bw(l),Iu),this.Ma=new Map,this.xa=new Set,this.Oa=new Te(W.comparator),this.Na=new Map,this.La=new Lf,this.Ba={},this.ka=new Map,this.qa=Xs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function MN(t,e,n=!0){const r=_E(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await fE(r,e,n,!0),s}async function jN(t,e){const n=_E(t);await fE(n,e,!0,!1)}async function fE(t,e,n,r){const s=await oN(t.localStore,on(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await UN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&iE(t.remoteStore,s),l}async function UN(t,e,n,r,s){t.Ka=(m,y,I)=>async function(C,N,w,v){let x=N.view.ma(w);x.ns&&(x=await Ty(C.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,x)));const D=v&&v.targetChanges.get(N.targetId),U=v&&v.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(x,C.isPrimaryClient,D,U);return Ny(C,N.targetId,V.wa),V.snapshot}(t,m,y,I);const i=await Ty(t.localStore,e,!0),o=new DN(e,i.Ts),l=o.ma(i.documents),u=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Ny(t,n,h.wa);const p=new ON(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function FN(t,e,n){const r=X(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Iu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ld(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&jf(r.remoteStore,s.targetId),cd(r,s.targetId)}).catch(qo)):(cd(r,s.targetId),await ld(r.localStore,s.targetId,!0))}async function BN(t,e){const n=X(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),jf(n.remoteStore,r.targetId))}async function zN(t,e,n){const r=QN(t);try{const s=await function(o,l){const u=X(o),h=Ve.now(),p=l.reduce((I,A)=>I.add(A.key),ee());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=Vn(),C=ee();return u.cs.getEntries(I,p).next(N=>{A=N,A.forEach((w,v)=>{v.isValidDocument()||(C=C.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,A)).next(N=>{m=N;const w=[];for(const v of l){const x=cC(v,m.get(v.key).overlayedDocument);x!=null&&w.push(new Sr(v.key,x,xw(x.value.mapValue),qt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,w,l)}).next(N=>{y=N;const w=N.applyToLocalDocumentSet(m,C);return u.documentOverlayCache.saveOverlays(I,N.batchId,w)})}).then(()=>({batchId:y.batchId,changes:Lw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Te(ie)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Yo(r,s.changes),await Nu(r.remoteStore)}catch(s){const i=$f(s,"Failed to persist write");n.reject(i)}}async function pE(t,e){const n=X(t);try{const r=await rN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?le(o.va):s.removedDocuments.size>0&&(le(o.va),o.va=!1))}),await Yo(n,r,e)}catch(r){await qo(r)}}function Cy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&Wf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $N(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Te(W.comparator);o=o.insert(i,nt.newNoDocument(i,Y.min()));const l=ee().add(i),u=new Au(Y.min(),new Map,new Te(ie),o,l);await pE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Gf(r)}else await ld(r.localStore,e,!1).then(()=>cd(r,e,n)).catch(qo)}async function HN(t,e){const n=X(t),r=e.batch.batchId;try{const s=await nN(n.localStore,e);gE(n,r,null),mE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,s)}catch(s){await qo(s)}}async function qN(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(le(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);gE(r,e,n),mE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yo(r,s)}catch(s){await qo(s)}}function mE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function gE(t,e,n){const r=X(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function cd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||yE(t,r)})}function yE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(jf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Gf(t))}function Ny(t,e,n){for(const r of n)r instanceof hE?(t.La.addReference(r.key,e),WN(t,r)):r instanceof dE?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||yE(t,r.key)):G()}function WN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Gf(t))}function Gf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(pe.fromString(e)),r=t.qa.next();t.Na.set(r,new LN(n)),t.Oa=t.Oa.insert(n,r),iE(t.remoteStore,new tr(on(Tu(n.path)),r,"TargetPurposeLimboResolution",Sf.oe))}}async function Yo(t,e,n){const r=X(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Mf.Wi(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const p=X(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,y=>M.forEach(y.$i,I=>p.persistence.referenceDelegate.addReference(m,y.targetId,I)).next(()=>M.forEach(y.Ui,I=>p.persistence.referenceDelegate.removeReference(m,y.targetId,I)))))}catch(m){if(!Wo(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const I=p.os.get(y),A=I.snapshotVersion,C=I.withLastLimboFreeSnapshotVersion(A);p.os=p.os.insert(y,C)}}}(r.localStore,i))}async function KN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await tE(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(n,r.hs)}}function GN(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let s=ee();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function _E(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$N.bind(null,e),e.Ca.d_=PN.bind(null,e.eventManager),e.Ca.$a=bN.bind(null,e.eventManager),e}function QN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qN.bind(null,e),e}class Wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ru(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return tN(this.persistence,new ZC,e.initialUser,this.serializer)}Ga(e){return new YC(Vf.Zr,this.serializer)}Wa(e){return new lN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wl.provider={build:()=>new Wl};class hd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KN.bind(null,this.syncEngine),await RN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NN}()}createDatastore(e){const n=Ru(e.databaseInfo.databaseId),r=function(i){return new dN(i)}(e.databaseInfo);return function(i,o,l,u){return new mN(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new yN(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Cy(this.syncEngine,n,0),function(){return xy.D()?new xy:new uN}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,p){const m=new VN(s,i,o,l,u,h);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Qo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hd.provider={build:()=>new hd};/**
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
 */class Qf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class YN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=Ew.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$f(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XN(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Sy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Sy(e.remoteStore,s)),t._onlineComponents=e}async function XN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await qc(t,new Wl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await qc(t,new Wl);return t._offlineComponents}async function vE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Py(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Py(t,new hd))),t._onlineComponents}function JN(t){return vE(t).then(e=>e.syncEngine)}async function Kl(t){const e=await vE(t),n=e.eventManager;return n.onListen=MN.bind(null,e.syncEngine),n.onUnlisten=FN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BN.bind(null,e.syncEngine),n}function ZN(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new Qf({next:y=>{p.Za(),o.enqueueAndForget(()=>qf(i,m));const I=y.docs.has(l);!I&&y.fromCache?h.reject(new $(L.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&y.fromCache&&u&&u.source==="server"?h.reject(new $(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Kf(Tu(l.path),p,{includeMetadataChanges:!0,_a:!0});return Hf(i,m)}(await Kl(t),t.asyncQueue,e,n,r)),r.promise}function eP(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new Qf({next:y=>{p.Za(),o.enqueueAndForget(()=>qf(i,m)),y.fromCache&&u.source==="server"?h.reject(new $(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Kf(l,p,{includeMetadataChanges:!0,_a:!0});return Hf(i,m)}(await Kl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function wE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const by=new Map;/**
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
 */function EE(t,e,n){if(!n)throw new $(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tP(t,e,n,r){if(e===!0&&r===!0)throw new $(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dy(t){if(!W.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Oy(t){if(W.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pu(t);throw new $(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ly{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ly({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ly(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _R;switch(r.type){case"firstParty":return new TR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=by.get(n);r&&(q("ComponentProvider","Removing Datastore"),by.delete(n),r.terminate())}(this),Promise.resolve()}}function nP(t,e,n,r={}){var s;const i=(t=kt(t,bu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=et.MOCK_USER;else{l=A0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new $(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(h)}t._authCredentials=new vR(new ww(l,u))}}/**
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
 */class kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kr(this.firestore,e,this._query)}}class rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}}class dr extends kr{constructor(e,n,r){super(e,n,Tu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new W(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function Rn(t,e,...n){if(t=ye(t),EE("collection","path",e),t instanceof bu){const r=pe.fromString(e,...n);return Oy(r),new dr(t,null,r)}{if(!(t instanceof rt||t instanceof dr))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Oy(r),new dr(t.firestore,null,r)}}function vr(t,e,...n){if(t=ye(t),arguments.length===1&&(e=Ew.newId()),EE("doc","path",e),t instanceof bu){const r=pe.fromString(e,...n);return Dy(r),new rt(t,null,new W(r))}{if(!(t instanceof rt||t instanceof dr))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Dy(r),new rt(t.firestore,t instanceof dr?t.converter:null,new W(r))}}/**
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
 */class Vy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rE(this,"async_queue_retry"),this.Vu=()=>{const r=Hc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Hc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new An;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Wo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=zf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function My(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class wr extends bu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Vy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vy(e),this._firestoreClient=void 0,await e}}}function rP(t,e){const n=typeof t=="object"?t:ff(),r=typeof t=="string"?t:"(default)",s=yu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=x0("firestore");i&&nP(s,...i)}return s}function Du(t){if(t._terminated)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||sP(t),t._firestoreClient}function sP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,p){return new LR(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,wE(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new YN(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zs(Ke.fromBase64String(e))}catch(n){throw new $(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zs(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lu{constructor(e){this._methodName=e}}/**
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
 */class Yf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */class Xf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const iP=/^__.*__$/;class oP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ko(e,this.data,n,this.fieldTransforms)}}class TE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function IE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Jf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Jf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Gl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(IE(this.Cu)&&iP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class aP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ru(e)}Qu(e,n,r,s=!1){return new Jf({Cu:e,methodName:n,qu:r,path:$e.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vu(t){const e=t._freezeSettings(),n=Ru(t._databaseId);return new aP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);ep("Data must be an object, but it was:",o,r);const l=SE(r,o);let u,h;if(i.merge)u=new It(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const y=dd(e,m,n);if(!o.contains(y))throw new $(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);AE(p,y)||p.push(y)}u=new It(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new oP(new mt(l),u,h)}class Mu extends Lu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mu}}class Zf extends Lu{_toFieldTransform(e){return new oC(e.path,new No)}isEqual(e){return e instanceof Zf}}function lP(t,e,n,r){const s=t.Qu(1,e,n);ep("Data must be an object, but it was:",s,r);const i=[],o=mt.empty();is(r,(u,h)=>{const p=tp(e,u,n);h=ye(h);const m=s.Nu(p);if(h instanceof Mu)i.push(p);else{const y=Xo(h,m);y!=null&&(i.push(p),o.set(p,y))}});const l=new It(i);return new TE(o,l,s.fieldTransforms)}function uP(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[dd(e,r,n)],u=[s];if(i.length%2!=0)throw new $(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(dd(e,i[y])),u.push(i[y+1]);const h=[],p=mt.empty();for(let y=l.length-1;y>=0;--y)if(!AE(h,l[y])){const I=l[y];let A=u[y];A=ye(A);const C=o.Nu(I);if(A instanceof Mu)h.push(I);else{const N=Xo(A,C);N!=null&&(h.push(I),p.set(I,N))}}const m=new It(h);return new TE(p,m,o.fieldTransforms)}function cP(t,e,n,r=!1){return Xo(n,t.Qu(r?4:3,e))}function Xo(t,e){if(kE(t=ye(t)))return ep("Unsupported field value:",e,t),SE(t,e);if(t instanceof Lu)return function(r,s){if(!IE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Xo(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:Hl(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hl(s.serializer,i)}}if(r instanceof Yf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zs)return{bytesValue:Gw(s.serializer,r._byteString)};if(r instanceof rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Of(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Pf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Pu(r)}`)}(t,e)}function SE(t,e){const n={};return Tw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(t,(r,s)=>{const i=Xo(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function kE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Yf||t instanceof Zs||t instanceof rt||t instanceof Lu||t instanceof Xf)}function ep(t,e,n){if(!kE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function dd(t,e,n){if((e=ye(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return tp(t,e);throw Gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const hP=new RegExp("[~\\*/\\[\\]]");function tp(t,e,n){if(e.search(hP)>=0)throw Gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ou(...e.split("."))._internalPath}catch{throw Gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(L.INVALID_ARGUMENT,l+t+u)}function AE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class RE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ju("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dP extends RE{data(){return super.data()}}function ju(t,e){return typeof e=="string"?tp(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
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
 */function CE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class np{}class NE extends np{}function ei(t,e,...n){let r=[];e instanceof np&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof rp).length,l=i.filter(u=>u instanceof Uu).length;if(o>1||o>0&&l>0)throw new $(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Uu extends NE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Uu(e,n,r)}_apply(e){const n=this._parse(e);return PE(e._query,n),new kr(e.firestore,e.converter,nd(e._query,n))}_parse(e){const n=Vu(e.firestore);return function(i,o,l,u,h,p,m){let y;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new $(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Fy(m,p);const I=[];for(const A of m)I.push(Uy(u,i,A));y={arrayValue:{values:I}}}else y=Uy(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Fy(m,p),y=cP(l,o,m,p==="in"||p==="not-in");return De.create(h,p,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ql(t,e,n){const r=e,s=ju("where",t);return Uu._create(s,r,n)}class rp extends np{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Gt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)PE(o,u),o=nd(o,u)}(e._query,n),new kr(e.firestore,e.converter,nd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sp extends NE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new sp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new $(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Co(i,o)}(e._query,this._field,this._direction);return new kr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ai(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function jy(t,e="asc"){const n=e,r=ju("orderBy",t);return sp._create(r,n)}function Uy(t,e,n){if(typeof(n=ye(n))=="string"){if(n==="")throw new $(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pw(e)&&n.indexOf("/")!==-1)throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!W.isDocumentKey(r))throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return iy(t,new W(r))}if(n instanceof rt)return iy(t,n._key);throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pu(n)}.`)}function Fy(t,e){if(!Array.isArray(t)||t.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function PE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class fP{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return is(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Re(o.doubleValue));return new Xf(i)}convertGeoPoint(e){return new Yf(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Af(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ko(e));default:return null}}convertTimestamp(e){const n=yr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);le(eE(r));const s=new Ao(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function bE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class $i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class DE extends RE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ju("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ll extends DE{data(e={}){return super.data(e)}}class OE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new $i(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ll(this._firestore,this._userDataWriter,r.key,r,new $i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new ll(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ll(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:pP(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function ip(t){t=kt(t,rt);const e=kt(t.firestore,wr);return ZN(Du(e),t._key).then(n=>VE(e,t,n))}class op extends fP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function mP(t){t=kt(t,kr);const e=kt(t.firestore,wr),n=Du(e),r=new op(e);return CE(t._query),eP(n,t._query).then(s=>new OE(e,r,t,s))}function ap(t,e,n){t=kt(t,rt);const r=kt(t.firestore,wr),s=bE(t.converter,e,n);return up(r,[xE(Vu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qt.none())])}function LE(t,e,n,...r){t=kt(t,rt);const s=kt(t.firestore,wr),i=Vu(s);let o;return o=typeof(e=ye(e))=="string"||e instanceof Ou?uP(i,"updateDoc",t._key,e,n,r):lP(i,"updateDoc",t._key,e),up(s,[o.toMutation(t._key,qt.exists(!0))])}function lp(t,e){const n=kt(t.firestore,wr),r=vr(t),s=bE(t.converter,e);return up(n,[xE(Vu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function Do(t,...e){var n,r,s;t=ye(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||My(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(My(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,p;if(t instanceof rt)h=kt(t.firestore,wr),p=Tu(t._key.path),u={next:m=>{e[o]&&e[o](VE(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=kt(t,kr);h=kt(m.firestore,wr),p=m._query;const y=new op(h);u={next:I=>{e[o]&&e[o](new OE(h,y,m,I))},error:e[o+1],complete:e[o+2]},CE(t._query)}return function(y,I,A,C){const N=new Qf(C),w=new Kf(I,N,A);return y.asyncQueue.enqueueAndForget(async()=>Hf(await Kl(y),w)),()=>{N.Za(),y.asyncQueue.enqueueAndForget(async()=>qf(await Kl(y),w))}}(Du(h),p,l,u)}function up(t,e){return function(r,s){const i=new An;return r.asyncQueue.enqueueAndForget(async()=>zN(await JN(r),s,i)),i.promise}(Du(t),e)}function VE(t,e,n){const r=n.docs.get(e._key),s=new op(t);return new DE(t,s,e._key,r,new $i(n.hasPendingWrites,n.fromCache),e.converter)}function ti(){return new Zf("serverTimestamp")}(function(e,n=!0){(function(s){oi=s})(rs),Gr(new mr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new wr(new wR(r.getProvider("auth-internal")),new xR(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(h.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),nn(ey,"4.7.3",e),nn(ey,"4.7.3","esm2017")})();/**
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
 */const ME="firebasestorage.googleapis.com",jE="storageBucket",gP=2*60*1e3,yP=10*60*1e3;/**
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
 */class ke extends cn{constructor(e,n,r=0){super(Wc(e),`Firebase Storage: ${n} (${Wc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function Wc(t){return"storage/"+t}function cp(){const t="An unknown error occurred, please check the error payload for server response.";return new ke(Se.UNKNOWN,t)}function _P(t){return new ke(Se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function vP(t){return new ke(Se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ke(Se.UNAUTHENTICATED,t)}function EP(){return new ke(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TP(t){return new ke(Se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IP(){return new ke(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xP(){return new ke(Se.CANCELED,"User canceled the upload/download.")}function SP(t){return new ke(Se.INVALID_URL,"Invalid URL '"+t+"'.")}function kP(t){return new ke(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function AP(){return new ke(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+jE+"' property when initializing the app?")}function RP(){return new ke(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CP(){return new ke(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NP(t){return new ke(Se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fd(t){return new ke(Se.INVALID_ARGUMENT,t)}function UE(){return new ke(Se.APP_DELETED,"The Firebase app was deleted.")}function PP(t){return new ke(Se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function so(t,e){return new ke(Se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Di(t){throw new ke(Se.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(r.path==="")return r;throw kP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",I=new RegExp(`^https?://${m}/${p}/b/${s}/o${y}`,"i"),A={bucket:1,path:3},C=n===ME?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",w=new RegExp(`^https?://${C}/${s}/${N}`,"i"),x=[{regex:l,indices:u,postModify:i},{regex:I,indices:A,postModify:h},{regex:w,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<x.length;D++){const U=x[D],V=U.regex.exec(e);if(V){const E=V[U.indices.bucket];let _=V[U.indices.path];_||(_=""),r=new xt(E,_),U.postModify(r);break}}if(r==null)throw SP(e);return r}}class bP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function DP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function p(...N){h||(h=!0,e.apply(null,N))}function m(N){s=setTimeout(()=>{s=null,t(I,u())},N)}function y(){i&&clearTimeout(i)}function I(N,...w){if(h){y();return}if(N){y(),p.call(null,N,...w);return}if(u()||o){y(),p.call(null,N,...w);return}r<64&&(r*=2);let x;l===1?(l=2,x=0):x=(r+Math.random())*1e3,m(x)}let A=!1;function C(N){A||(A=!0,y(),!h&&(s!==null?(N||(l=2),clearTimeout(s),m(0)):N||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,C(!0)},n),C}function OP(t){t(!1)}/**
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
 */function LP(t){return t!==void 0}function VP(t){return typeof t=="object"&&!Array.isArray(t)}function hp(t){return typeof t=="string"||t instanceof String}function By(t){return dp()&&t instanceof Blob}function dp(){return typeof Blob<"u"}function zy(t,e,n,r){if(r<e)throw fd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw fd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function fp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function FE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var zr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(zr||(zr={}));/**
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
 */function MP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class jP{constructor(e,n,r,s,i,o,l,u,h,p,m,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=m,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,A)=>{this.resolve_=I,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ua(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===zr.NO_ERROR,u=i.getStatus();if(!l||MP(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===zr.ABORT;r(!1,new Ua(!1,null,p));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Ua(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());LP(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=cp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?UE():xP();o(u)}else{const u=IP();o(u)}};this.canceled_?n(!1,new Ua(!1,null,!0)):this.backoffId_=DP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ua{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function UP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $P(t,e,n,r,s,i,o=!0){const l=FE(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return BP(h,e),UP(h,n),FP(h,i),zP(h,r),new jP(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function HP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qP(...t){const e=HP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(dp())return new Blob(t);throw new ke(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function WP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function KP(t){if(typeof atob>"u")throw NP("base-64");return atob(t)}/**
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
 */const Zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Kc{constructor(e,n){this.data=e,this.contentType=n||null}}function GP(t,e){switch(t){case Zt.RAW:return new Kc(BE(e));case Zt.BASE64:case Zt.BASE64URL:return new Kc(zE(t,e));case Zt.DATA_URL:return new Kc(YP(e),XP(e))}throw cp()}function BE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function QP(t){let e;try{e=decodeURIComponent(t)}catch{throw so(Zt.DATA_URL,"Malformed data URL.")}return BE(e)}function zE(t,e){switch(t){case Zt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw so(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Zt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw so(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=KP(e)}catch(s){throw s.message.includes("polyfill")?s:so(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class $E{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw so(Zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=JP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function YP(t){const e=new $E(t);return e.base64?zE(Zt.BASE64,e.rest):QP(e.rest)}function XP(t){return new $E(t).contentType}function JP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Jn{constructor(e,n){let r=0,s="";By(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(By(this.data_)){const r=this.data_,s=WP(r,e,n);return s===null?null:new Jn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Jn(r,!0)}}static getBlob(...e){if(dp()){const n=e.map(r=>r instanceof Jn?r.data_:r);return new Jn(qP.apply(null,n))}else{const n=e.map(o=>hp(o)?GP(Zt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Jn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function HE(t){let e;try{e=JSON.parse(t)}catch{return null}return VP(e)?e:null}/**
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
 */function ZP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function e2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function qE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function t2(t,e){return e}class lt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||t2}}let Fa=null;function n2(t){return!hp(t)||t.length<2?t:qE(t)}function WE(){if(Fa)return Fa;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(i,o){return n2(o)}const n=new lt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new lt("size");return s.xform=r,t.push(s),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),Fa=t,Fa}function r2(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new xt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function s2(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return r2(r,t),r}function KE(t,e,n){const r=HE(e);return r===null?null:s2(t,r,n)}function i2(t,e,n,r){const s=HE(e);if(s===null||!hp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const p=t.bucket,m=t.fullPath,y="/b/"+o(p)+"/o/"+o(m),I=fp(y,n,r),A=FE({alt:"media",token:h});return I+A})[0]}function o2(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class GE{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function QE(t){if(!t)throw cp()}function a2(t,e){function n(r,s){const i=KE(t,s,e);return QE(i!==null),i}return n}function l2(t,e){function n(r,s){const i=KE(t,s,e);return QE(i!==null),i2(i,s,t.host,t._protocol)}return n}function YE(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=EP():s=wP():n.getStatus()===402?s=vP(t.bucket):n.getStatus()===403?s=TP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function u2(t){const e=YE(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=_P(t.path)),i.serverResponse=s.serverResponse,i}return n}function c2(t,e,n){const r=e.fullServerUrl(),s=fp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new GE(s,i,l2(t,n),o);return l.errorHandler=u2(e),l}function h2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function d2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=h2(null,e)),r}function f2(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let x="";for(let D=0;D<2;D++)x=x+Math.random().toString().slice(2);return x}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=d2(e,r,s),p=o2(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+u+"--",I=Jn.getBlob(m,r,y);if(I===null)throw RP();const A={name:h.fullPath},C=fp(i,t.host,t._protocol),N="POST",w=t.maxUploadRetryTime,v=new GE(C,N,a2(t,n),w);return v.urlParams=A,v.headers=o,v.body=I.uploadData(),v.errorHandler=YE(e),v}class p2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=zr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=zr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=zr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Di("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Di("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Di("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Di("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Di("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class m2 extends p2{initXhr(){this.xhr_.responseType="text"}}function XE(){return new m2}/**
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
 */class es{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new es(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qE(this._location.path)}get storage(){return this._service}get parent(){const e=ZP(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new es(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw PP(e)}}function g2(t,e,n){t._throwIfRoot("uploadBytes");const r=f2(t.storage,t._location,WE(),new Jn(e,!0),n);return t.storage.makeRequestWithTokens(r,XE).then(s=>({metadata:s,ref:t}))}function y2(t){t._throwIfRoot("getDownloadURL");const e=c2(t.storage,t._location,WE());return t.storage.makeRequestWithTokens(e,XE).then(n=>{if(n===null)throw CP();return n})}function _2(t,e){const n=e2(t._location.path,e),r=new xt(t._location.bucket,n);return new es(t.storage,r)}/**
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
 */function v2(t){return/^[A-Za-z]+:\/\//.test(t)}function w2(t,e){return new es(t,e)}function JE(t,e){if(t instanceof pp){const n=t;if(n._bucket==null)throw AP();const r=new es(n,n._bucket);return e!=null?JE(r,e):r}else return e!==void 0?_2(t,e):t}function E2(t,e){if(e&&v2(e)){if(t instanceof pp)return w2(t,e);throw fd("To use ref(service, url), the first argument must be a Storage instance.")}else return JE(t,e)}function $y(t,e){const n=e==null?void 0:e[jE];return n==null?null:xt.makeFromBucketSpec(n,t)}function T2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:A0(s,t.app.options.projectId))}class pp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ME,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gP,this._maxUploadRetryTime=yP,this._requests=new Set,s!=null?this._bucket=xt.makeFromBucketSpec(s,this._host):this._bucket=$y(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=$y(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new es(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new bP(UE());{const o=$P(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Hy="@firebase/storage",qy="0.13.2";/**
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
 */const ZE="storage";function eT(t,e,n){return t=ye(t),g2(t,e,n)}function tT(t){return t=ye(t),y2(t)}function nT(t,e){return t=ye(t),E2(t,e)}function I2(t=ff(),e){t=ye(t);const r=yu(t,ZE).getImmediate({identifier:e}),s=x0("storage");return s&&x2(r,...s),r}function x2(t,e,n,r={}){T2(t,e,n,r)}function S2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new pp(n,r,s,e,rs)}function k2(){Gr(new mr(ZE,S2,"PUBLIC").setMultipleInstances(!0)),nn(Hy,qy,""),nn(Hy,qy,"esm2017")}k2();const A2={apiKey:"AIzaSyDty5os84VgLNRZTDAHErleYUOc9zBnaa0",authDomain:"hyperlocal1.firebaseapp.com",projectId:"hyperlocal1",storageBucket:"hyperlocal1.appspot.com",messagingSenderId:"43216293091",appId:"1:43216293091:web:8b4b2de5dbd428e2f389d6",measurementId:"G-13PVX571LT"};let Ba,ft,Ne,mp;try{Ba=P0(A2),ft=gR(Ba),Ne=rP(Ba),mp=I2(Ba),W1("debug")}catch(t){console.error("Firebase initialization error:",t)}function R2(){const[t,e]=B.useState("home"),[n,r]=B.useState(null),[s,i]=B.useState(!1),[o,l]=B.useState(null),[u,h]=B.useState(!1),[p,m]=B.useState(""),[y,I]=B.useState(null),[A,C]=B.useState(null),N=(V,E={})=>{e(V),h(!1),E.searchTerm&&m(E.searchTerm),E.teacherId&&I(E.teacherId),E.conversation?C(E.conversation):C(null)};B.useEffect(()=>{if(!ft)return;const V=sA(ft,E=>{r(E),i(!0),E||N("home")});return()=>V()},[]);const w=async(V,E,_,T,S)=>{if(!(!ft||!Ne)){l(null);try{const P=(await Zk(ft,V,E)).user;await Ef(P,{displayName:_}),await ap(vr(Ne,"users",P.uid),{uid:P.uid,name:_,email:V,role:T,location:S,bio:`Hi, I'm ${_}. I'm new to Hyperlocal and looking to ${T==="learner"?"learn new skills":"teach my skills"}!`,createdAt:ti(),photoURL:""}),N("dashboard")}catch(R){console.error("Sign up error:",R),l(R.message)}}},v=async(V,E)=>{if(ft){l(null);try{await eA(ft,V,E),N("dashboard")}catch(_){console.error("Login error:",_),l(_.message)}}},x=async()=>{if(ft)try{await iA(ft),N("home")}catch(V){console.error("Sign out error:",V)}},D=()=>{switch(t){case"home":return d.jsx(Wy,{navigateTo:N});case"browse":return n?d.jsx(P2,{navigateTo:N,searchTerm:p}):d.jsx(ds,{...U});case"teacherProfile":return n?d.jsx(D2,{navigateTo:N,teacherId:y,currentUser:n}):d.jsx(ds,{...U});case"dashboard":return n?d.jsx(Gy,{navigateTo:N,user:n,handleLogout:x,selectedConversation:A}):d.jsx(ds,{...U});case"login":return n?d.jsx(Gy,{navigateTo:N,user:n,handleLogout:x,selectedConversation:A}):d.jsx(ds,{...U});case"how-it-works":return d.jsx(F2,{});case"about":return d.jsx(B2,{});case"help":return d.jsx(z2,{});case"contact":return d.jsx($2,{});case"community":return d.jsx(sT,{navigateTo:N,currentUser:n});case"favorites":return n?d.jsx(H2,{navigateTo:N,currentUser:n}):d.jsx(ds,{...U});case"settings":return n?d.jsx(q2,{navigateTo:N,currentUser:n,handleLogout:x}):d.jsx(ds,{...U});default:return d.jsx(Wy,{navigateTo:N})}},U={navigateTo:N,handleLogin:v,handleSignUp:w,authError:o,setAuthError:l};return s?!ft||!Ne?d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 p-8",children:d.jsx("h1",{className:"text-3xl font-bold text-red-600 text-center",children:"Firebase configuration error. Please check your `firebaseConfig` object."})}):d.jsxs("div",{className:"min-h-screen bg-white font-sans text-gray-900",children:[t!=="dashboard"&&d.jsx(C2,{navigateTo:N,user:n,handleLogout:x,isMobileMenuOpen:u,setIsMobileMenuOpen:h}),d.jsx("main",{className:t==="dashboard"?"h-screen":"pt-20",children:D()}),t!=="dashboard"&&d.jsx(N2,{navigateTo:N,user:n})]}):d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:d.jsx("h1",{className:"text-3xl font-bold text-indigo-600",children:"Loading Hyperlocal..."})})}function C2({navigateTo:t,user:e,handleLogout:n,isMobileMenuOpen:r,setIsMobileMenuOpen:s}){const i=[{name:"How It Works",page:"how-it-works"},{name:"About Us",page:"about"},{name:"Community",page:"community"}],[o,l]=B.useState(!1),[u,h]=B.useState(!1);return d.jsxs("header",{className:"fixed top-0 left-0 right-0 bg-white shadow-md z-50",children:[d.jsx("nav",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex justify-between items-center h-20",children:[d.jsxs("button",{onClick:()=>t("home"),className:"flex items-center text-3xl font-bold text-indigo-600 focus:outline-none",children:[d.jsx(Bh,{className:"h-8 w-8 mr-2"}),"Hyperlocal"]}),d.jsxs("div",{className:"hidden md:flex md:items-center md:space-x-8",children:[i.map(p=>d.jsx("button",{onClick:()=>t(p.page),className:"text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out",children:p.name},p.name)),d.jsxs("div",{className:"relative",children:[d.jsxs("button",{onClick:()=>l(!o),onBlur:()=>setTimeout(()=>l(!1),200),className:"text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out flex items-center",children:["Support ",d.jsx(dS,{className:`h-5 w-5 ml-1 transition-transform ${o?"rotate-180":"rotate-0"}`})]}),o&&d.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-gray-100",children:[d.jsx("button",{onClick:()=>{t("help"),l(!1)},className:"block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:"Help Center"}),d.jsx("button",{onClick:()=>{t("contact"),l(!1)},className:"block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:"Contact Us"})]})]}),e?d.jsxs("div",{className:"relative",children:[d.jsx("button",{onClick:()=>h(!u),onBlur:()=>setTimeout(()=>h(!1),200),className:"flex items-center justify-center h-12 w-12 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:e.photoURL?d.jsx("img",{src:e.photoURL,alt:"Profile",className:"h-12 w-12 rounded-full object-cover"}):e.displayName?e.displayName.split(" ").map(p=>p[0]).join("").toUpperCase():d.jsx(ln,{className:"h-6 w-6"})}),u&&d.jsxs("div",{className:"absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-gray-100",children:[d.jsxs("div",{className:"px-4 py-3 border-b border-gray-200",children:[d.jsx("p",{className:"text-lg font-medium text-gray-900 truncate",children:e.displayName}),d.jsx("p",{className:"text-base text-gray-500 truncate",children:e.email})]}),d.jsxs("div",{className:"py-1",children:[d.jsxs("button",{onClick:()=>{t("dashboard"),h(!1)},className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(d0,{className:"h-5 w-5 mr-3"})," Dashboard"]}),d.jsxs("button",{onClick:()=>{t("browse"),h(!1)},className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(cf,{className:"h-5 w-5 mr-3"})," Browse Skills"]}),d.jsxs("button",{onClick:()=>{t("favorites"),h(!1)},className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(du,{className:"h-5 w-5 mr-3"})," My Favorites"]}),d.jsxs("button",{onClick:()=>{t("settings"),h(!1)},className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(_0,{className:"h-5 w-5 mr-3"})," Settings"]})]}),d.jsx("div",{className:"border-t border-gray-200 py-1",children:d.jsxs("button",{onClick:n,className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(fu,{className:"h-5 w-5 mr-3"})," Log Out"]})})]})]}):d.jsx("button",{onClick:()=>t("login"),className:"bg-indigo-600 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:"Login / Sign Up"})]}),d.jsx("div",{className:"md:hidden flex items-center",children:d.jsxs("button",{onClick:()=>s(!r),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[d.jsx("span",{className:"sr-only",children:"Open main menu"}),r?d.jsx(ES,{className:"block h-8 w-8"}):d.jsx(mS,{className:"block h-8 w-8"})]})})]})}),r&&d.jsx("div",{className:"md:hidden bg-white shadow-lg",children:d.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[i.map(p=>d.jsx("button",{onClick:()=>t(p.page),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:p.name},p.name)),d.jsx("button",{onClick:()=>t("help"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"Help Center"}),d.jsx("button",{onClick:()=>t("contact"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"Contact Us"}),e?d.jsx(d.Fragment,{children:d.jsxs("div",{className:"border-t border-gray-200 mt-2 pt-2",children:[d.jsx("button",{onClick:()=>t("dashboard"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"Dashboard"}),d.jsx("button",{onClick:()=>t("browse"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"Browse Skills"}),d.jsx("button",{onClick:()=>t("favorites"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"My Favorites"}),d.jsx("button",{onClick:()=>t("settings"),className:"text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out",children:"Settings"}),d.jsx("button",{onClick:n,className:"bg-indigo-600 text-white w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:"Log Out"})]})}):d.jsx("button",{onClick:()=>t("login"),className:"bg-indigo-600 text-white w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:"Login / Sign Up"})]})})]})}function N2({navigateTo:t,user:e}){return d.jsx("footer",{className:"bg-gray-900 text-gray-400",children:d.jsxs("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-semibold text-white",children:"Platform"}),d.jsxs("ul",{className:"mt-4 space-y-2",children:[e&&d.jsx("li",{children:d.jsx("button",{onClick:()=>t("browse"),className:"hover:text-white",children:"Browse Skills"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("how-it-works"),className:"hover:text-white",children:"How It Works"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("login"),className:"hover:text-white",children:"Become a Teacher"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("community"),className:"hover:text-white",children:"Community"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-semibold text-white",children:"Company"}),d.jsxs("ul",{className:"mt-4 space-y-2",children:[d.jsx("li",{children:d.jsx("button",{onClick:()=>t("about"),className:"hover:text-white",children:"About Us"})}),d.jsx("li",{children:d.jsx("button",{disabled:!0,className:"opacity-50 cursor-not-allowed",children:"Careers"})}),d.jsx("li",{children:d.jsx("button",{disabled:!0,className:"opacity-50 cursor-not-allowed",children:"Press"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-semibold text-white",children:"Support"}),d.jsxs("ul",{className:"mt-4 space-y-2",children:[d.jsx("li",{children:d.jsx("button",{onClick:()=>t("help"),className:"hover:text-white",children:"Help Center"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("contact"),className:"hover:text-white",children:"Contact Us"})}),d.jsx("li",{children:d.jsx("button",{disabled:!0,className:"opacity-50 cursor-not-allowed",children:"Privacy Policy"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-semibold text-white",children:"Connect"}),d.jsxs("ul",{className:"mt-4 space-y-2",children:[d.jsx("li",{children:d.jsx("button",{disabled:!0,className:"opacity-50 cursor-not-allowed",children:"Twitter"})}),d.jsx("li",{children:d.jsx("button",{disabled:!0,className:"opacity-50 cursor-not-allowed",children:"Instagram"})})]})]})]}),d.jsx("div",{className:"mt-12 border-t border-gray-700 pt-8 text-center",children:d.jsxs("p",{children:["© ",new Date().getFullYear()," Hyperlocal. Share skills with your neighbors."]})})]})})}function Wy({navigateTo:t}){const[e,n]=B.useState(""),r=s=>{s.preventDefault(),t("browse",{searchTerm:e})};return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"bg-indigo-50",children:d.jsxs("section",{className:"flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-24 px-4 sm:px-6 lg:px-8",children:[d.jsxs("h1",{className:"font-extrabold text-5xl sm:text-6xl md:text-7xl text-center",children:[d.jsx("span",{className:"block text-gray-900",children:"Learn anything."}),d.jsx("span",{className:"block text-indigo-600",children:"From your neighbors."})]}),d.jsx("p",{className:"mt-6 max-w-2xl text-center text-xl text-gray-700 leading-relaxed",children:"Hyperlocal is a skill-sharing platform connecting you with teachers and learners right in your own neighborhood."}),d.jsx("form",{onSubmit:r,className:"mt-12 w-full max-w-2xl",children:d.jsxs("div",{className:"relative",children:[d.jsx("input",{type:"search",placeholder:"What do you want to learn? (e.g., 'guitar', 'baking', 'python')",value:e,onChange:s=>n(s.target.value),className:"w-full text-lg p-5 pl-14 rounded-full shadow-lg border-2 border-transparent focus:outline-none focus:border-indigo-500"}),d.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:d.jsx(cf,{className:"h-6 w-6 text-gray-400"})}),d.jsx("button",{type:"submit",className:"absolute inset-y-0 right-0 m-2 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700",children:"Search"})]})}),d.jsx("div",{className:"mt-10 flex justify-center",children:d.jsx("button",{onClick:()=>t("login"),className:"bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:"Become a Teacher"})})]})}),d.jsx(rT,{})]})}function P2({navigateTo:t,searchTerm:e}){const[n,r]=B.useState([]),[s,i]=B.useState(!0);B.useEffect(()=>{i(!0);const l=ei(Rn(Ne,"skills")),u=Do(l,h=>{const p=[];h.forEach(m=>{p.push({id:m.id,...m.data()})}),r(p),i(!1)},h=>{console.error("Error fetching skills:",h),i(!1)});return()=>u()},[]);const o=B.useMemo(()=>{if(!e)return n;const l=e.toLowerCase();return n.filter(u=>u.skillName.toLowerCase().includes(l)||u.description&&u.description.toLowerCase().includes(l)||u.teacherName&&u.teacherName.toLowerCase().includes(l))},[n,e]);return d.jsx("section",{className:"py-24 bg-white min-h-screen",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsx("h1",{className:"text-5xl font-extrabold text-gray-900 mb-4",children:e?`Results for "${e}"`:"Browse All Skills"}),d.jsxs("p",{className:"text-xl text-gray-600 mb-12",children:[o.length," ",o.length===1?"skill":"skills"," found in your area."]}),s?d.jsx("p",{children:"Loading skills..."}):o.length===0?d.jsx("p",{children:"No skills found. Try a different search!"}):d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.map(l=>d.jsx(b2,{skill:l,navigateTo:t},l.id))})]})})}function b2({skill:t,navigateTo:e}){const n=r=>r==="Monetary Fee"?d.jsx(Fh,{className:"h-5 w-5 mr-1"}):r==="Skill Exchange"?d.jsx(g0,{className:"h-5 w-5 mr-1"}):d.jsx(Fh,{className:"h-5 w-5 mr-1"});return d.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col",children:[d.jsxs("div",{className:"p-6 flex-grow",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-2",children:t.skillName}),d.jsx("p",{className:"text-lg text-gray-700 mb-4 h-24 overflow-hidden text-ellipsis",children:t.description}),d.jsxs("div",{className:"flex items-center text-indigo-600 font-semibold mb-2",children:[n(t.compensation),d.jsx("span",{children:t.compensation})]}),d.jsxs("div",{className:"flex items-center text-gray-600",children:[d.jsx(vS,{className:"h-5 w-5 mr-2"}),d.jsxs("span",{children:["Taught by ",t.teacherName]})]})]}),d.jsx("div",{className:"p-6 bg-gray-50 border-t border-gray-200",children:d.jsx("button",{onClick:()=>e("teacherProfile",{teacherId:t.teacherId}),className:"w-full text-center bg-indigo-100 text-indigo-700 px-5 py-3 rounded-lg text-lg font-medium hover:bg-indigo-200 transition duration-150 ease-in-out",children:"View Profile & Connect"})})]})}function D2({navigateTo:t,teacherId:e,currentUser:n}){const[r,s]=B.useState(null),[i,o]=B.useState([]),[l,u]=B.useState(!0),[h,p]=B.useState(null),[m,y]=B.useState(!1);B.useEffect(()=>{if(!e){t("browse");return}u(!0);const A=async()=>{if(!Ne||!e)return;const w=vr(Ne,"users",e),v=await ip(w);v.exists()?s(v.data()):(console.error("No such teacher profile!"),t("browse"))},C=ei(Rn(Ne,"skills"),Ql("teacherId","==",e)),N=Do(C,w=>{const v=[];w.forEach(x=>{v.push({id:x.id,...x.data()})}),o(v)});return Promise.all([A()]).finally(()=>u(!1)),()=>N()},[e,t]);const I=async()=>{if(!n){t("login");return}if(n.uid===e){p("You cannot message yourself.");return}y(!0),p(null);try{const A=ei(Rn(Ne,"conversations"),Ql("participants","array-contains",n.uid)),C=await mP(A);let N=null;C.forEach(v=>{const x=v.data();x.participants.includes(e)&&(N={id:v.id,...x})});let w;N?w=N.id:w=(await lp(Rn(Ne,"conversations"),{participants:[n.uid,e],participantNames:{[n.uid]:ft.currentUser.displayName||ft.currentUser.email,[e]:r.name},lastMessage:"Conversation started.",lastMessageAt:ti()})).id,t("dashboard",{conversation:{id:w}})}catch(A){console.error("Error starting conversation: ",A),p("Could not start conversation. Please try again.")}finally{y(!1)}};return l?d.jsx("div",{className:"py-24 px-4 text-center",children:"Loading teacher profile..."}):r?d.jsx("section",{className:"py-24 bg-white",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row items-center sm:items-start",children:[d.jsx(ln,{className:"h-32 w-32 bg-gray-200 text-gray-500 p-4 rounded-full"}),d.jsxs("div",{className:"sm:ml-8 mt-6 sm:mt-0 text-center sm:text-left",children:[d.jsx("h1",{className:"text-5xl font-extrabold text-gray-900",children:r.name}),d.jsxs("div",{className:"flex items-center justify-center sm:justify-start mt-4 text-lg text-gray-600",children:[d.jsx(pu,{className:"h-5 w-5 mr-2"}),d.jsx("span",{children:r.location})]}),d.jsx("p",{className:"mt-4 text-xl text-gray-700 max-w-lg",children:r.bio})]})]}),d.jsxs("div",{className:"mt-10",children:[d.jsxs("button",{onClick:I,disabled:m,className:"w-full max-w-lg mx-auto sm:mx-0 flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm disabled:bg-gray-400",children:[d.jsx(mu,{className:"h-6 w-6 mr-3"}),m?"Connecting...":`Connect with ${r.name.split(" ")[0]}`]}),h&&d.jsx("p",{className:"text-red-600 mt-2 text-center sm:text-left",children:h})]}),d.jsxs("div",{className:"mt-20",children:[d.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Skills Offered"}),i.length>0?d.jsx("div",{className:"space-y-6",children:i.map(A=>d.jsxs("div",{className:"p-6 bg-indigo-50 border border-indigo-100 rounded-lg",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:A.skillName}),d.jsxs("div",{className:"flex items-center text-indigo-600 font-semibold my-3",children:[A.compensation==="Monetary Fee"?d.jsx(Fh,{className:"h-5 w-5 mr-1"}):d.jsx(g0,{className:"h-5 w-5 mr-1"}),d.jsx("span",{children:A.compensation})]}),d.jsx("p",{className:"text-lg text-gray-700",children:A.description})]},A.id))}):d.jsx("p",{className:"text-lg text-gray-600",children:"This teacher hasn't listed any skills yet."})]})]})}):d.jsx("div",{className:"py-24 px-4 text-center",children:"Could not find teacher."})}function ds({navigateTo:t,handleLogin:e,handleSignUp:n,authError:r,setAuthError:s}){const[i,o]=B.useState(!0),[l,u]=B.useState(""),[h,p]=B.useState(""),[m,y]=B.useState(""),[I,A]=B.useState("learner"),[C,N]=B.useState(""),w=v=>{if(v.preventDefault(),s(null),i)e(l,h);else{if(!m||!I||!C){s("Please fill out all fields.");return}n(l,h,m,I,C)}};return d.jsx("section",{className:"bg-gray-50 py-20 md:py-32",children:d.jsx("div",{className:"flex flex-col items-center justify-center px-6 mx-auto",children:d.jsx("div",{className:"w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0",children:d.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[d.jsx("h1",{className:"text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl",children:i?"Sign in to your account":"Create an account"}),r&&d.jsx("p",{className:"p-3 bg-red-100 text-red-700 rounded-lg",children:r}),d.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:w,children:[!i&&d.jsxs(d.Fragment,{children:[d.jsx(zt,{id:"name",type:"text",value:m,onChange:y,placeholder:"Your Full Name",Icon:ln}),d.jsx(zt,{id:"location",type:"text",value:C,onChange:N,placeholder:"Your Neighborhood",Icon:pu}),d.jsxs("div",{children:[d.jsx("label",{className:"block mb-2 text-lg font-medium text-gray-900",children:"I am a..."}),d.jsxs("div",{className:"flex space-x-4",children:[d.jsx(Ky,{id:"role-learner",value:"learner",checked:I==="learner",onChange:A,Icon:c0,label:"Learner"}),d.jsx(Ky,{id:"role-teacher",value:"teacher",checked:I==="teacher",onChange:A,Icon:uf,label:"Teacher"})]})]})]}),d.jsx(zt,{id:"email",type:"email",value:l,onChange:u,placeholder:"your.email@example.com",Icon:p0}),d.jsx(zt,{id:"password",type:"password",value:h,onChange:p,placeholder:"••••••••",Icon:pS}),d.jsx("button",{type:"submit",className:"w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg px-5 py-3 text-center transition duration-150 ease-in-out",children:i?"Sign in":"Create account"}),d.jsxs("p",{className:"text-lg font-light text-gray-600",children:[i?"Don’t have an account yet? ":"Already have an account? ",d.jsx("button",{type:"button",onClick:()=>o(!i),className:"font-medium text-indigo-600 hover:underline",children:i?"Sign up":"Sign in"})]})]})]})})})})}function zt({id:t,type:e,value:n,onChange:r,placeholder:s,Icon:i}){return d.jsxs("div",{children:[d.jsx("label",{htmlFor:t,className:"sr-only",children:s}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(i,{className:"h-6 w-6 text-gray-400"})}),d.jsx("input",{type:e,name:t,id:t,className:"bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full pl-11 p-3",placeholder:s,value:n,onChange:o=>r(o.target.value),required:!0})]})]})}function Jo({id:t,value:e,onChange:n,placeholder:r,Icon:s}){return d.jsxs("div",{children:[d.jsx("label",{htmlFor:t,className:"sr-only",children:r}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute top-3 left-0 pl-3 flex items-center pointer-events-none",children:d.jsx(s,{className:"h-6 w-6 text-gray-400"})}),d.jsx("textarea",{name:t,id:t,rows:4,className:"bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full pl-11 p-3",placeholder:r,value:e,onChange:i=>n(i.target.value),required:!0})]})]})}function Ky({id:t,value:e,checked:n,onChange:r,label:s,Icon:i}){return d.jsxs("div",{className:"flex-1",children:[d.jsx("input",{type:"radio",id:t,name:"role",value:e,checked:n,onChange:o=>r(o.target.value),className:"sr-only"}),d.jsxs("label",{htmlFor:t,className:`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer ${n?"border-indigo-600 bg-indigo-50":"border-gray-300 bg-gray-50"}`,children:[d.jsx(i,{className:`h-8 w-8 mb-2 ${n?"text-indigo-600":"text-gray-500"}`}),d.jsx("span",{className:`text-lg font-medium ${n?"text-indigo-700":"text-gray-700"}`,children:s})]})]})}function Gy({navigateTo:t,user:e,handleLogout:n,selectedConversation:r}){const[s,i]=B.useState(null),[o,l]=B.useState(!0),[u,h]=B.useState("overview");B.useEffect(()=>{r&&h("messages")},[r]),B.useEffect(()=>{if(!e||!Ne){l(!1);return}l(!0),(async()=>{const y=vr(Ne,"users",e.uid);try{const I=await ip(y);if(I.exists())i(I.data());else{console.warn("No user profile found! Creating one.");const A={uid:e.uid,name:e.displayName||"New User",email:e.email,role:"learner",location:"Not set",bio:`Hi, I'm ${e.displayName||"a new user"}!`,createdAt:ti(),photoURL:""};await ap(y,A),i(A)}}catch(I){console.error("Error fetching/creating profile:",I)}finally{l(!1)}})()},[e]);const p=()=>{switch(u){case"overview":return d.jsx(Qy,{user:e,profile:s,navigateTo:t,setDashboardPage:h});case"messages":return d.jsx(j2,{user:e,navigateTo:t,initialConvo:r});case"community":return d.jsx(sT,{navigateTo:t,currentUser:e,isDashboard:!0});case"profile":return d.jsx(V2,{profile:s,user:e});case"skills":return d.jsx(M2,{user:e,profile:s});case"favorites":return d.jsx(U2,{navigateTo:t,user:e});default:return d.jsx(Qy,{user:e,profile:s,navigateTo:t,setDashboardPage:h})}};return o?d.jsx("div",{className:"py-24 px-4 text-center min-h-screen flex items-center justify-center",children:d.jsx("p",{className:"text-lg text-gray-600",children:"Loading dashboard..."})}):s?d.jsxs("div",{className:"flex h-screen bg-gray-100",children:[d.jsx(O2,{user:e,handleLogout:n,navigateTo:t,dashboardPage:u,setDashboardPage:h,profile:s}),d.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[d.jsx(L2,{user:e,handleLogout:n,navigateTo:t,dashboardPage:u}),d.jsx("main",{className:"flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 md:p-10",children:p()})]})]}):d.jsx("div",{className:"py-24 px-4 text-center min-h-screen flex items-center justify-center",children:d.jsx("p",{className:"text-lg text-red-600",children:"Error: Could not load user profile. Please try logging out and back in."})})}function O2({user:t,handleLogout:e,navigateTo:n,dashboardPage:r,setDashboardPage:s,profile:i}){const o=[{name:"Overview",page:"overview",icon:d0},{name:"Messages",page:"messages",icon:mu},{name:"Community",page:"community",icon:Bh},{name:"Profile",page:"profile",icon:ln},{name:"Favorites",page:"favorites",icon:du}];return(i==null?void 0:i.role)==="teacher"&&o.push({name:"Add/Manage Skills",page:"skills",icon:m0}),d.jsx("div",{className:"hidden md:flex md:flex-col md:w-64 bg-white border-r border-gray-200",children:d.jsxs("div",{className:"flex flex-col flex-grow pt-5",children:[d.jsx("div",{className:"flex items-center flex-shrink-0 px-4",children:d.jsxs("button",{onClick:()=>n("home"),className:"flex items-center text-2xl font-bold text-indigo-600 focus:outline-none",children:[d.jsx(Bh,{className:"h-7 w-7 mr-2"}),"Hyperlocal"]})}),d.jsx("p",{className:"text-sm text-gray-500 px-4 mt-1",children:"Skill Sharing Platform"}),d.jsx("div",{className:"mt-8 flex-1 flex flex-col",children:d.jsx("nav",{className:"flex-1 px-2 space-y-2",children:o.map(l=>d.jsxs("button",{onClick:()=>s(l.page),className:`flex items-center px-3 py-3 text-lg font-medium rounded-md w-full ${r===l.page?"bg-indigo-50 text-indigo-700":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:[d.jsx(l.icon,{className:"mr-3 h-6 w-6"}),l.name]},l.name))})}),d.jsx("div",{className:"border-t border-gray-200 p-4",children:d.jsxs("button",{onClick:e,className:"flex items-center px-3 py-3 text-lg font-medium rounded-md w-full text-gray-600 hover:bg-gray-50 hover:text-gray-900",children:[d.jsx(fu,{className:"mr-3 h-6 w-6"}),"Logout"]})})]})})}function L2({user:t,handleLogout:e,navigateTo:n,dashboardPage:r}){const[s,i]=B.useState(!1),o=()=>{switch(r){case"overview":return"Dashboard Overview";case"messages":return"Messages";case"community":return"Community";case"profile":return"Edit Profile";case"skills":return"Add/Manage Skills";case"favorites":return"My Favorites";default:return"Dashboard"}};return d.jsx("header",{className:"w-full bg-white shadow-sm border-b border-gray-200",children:d.jsxs("div",{className:"relative flex-shrink-0 flex h-20 px-4 md:px-8 justify-between items-center",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:o()}),d.jsxs("div",{className:"relative",children:[d.jsx("button",{onClick:()=>i(!s),onBlur:()=>setTimeout(()=>i(!1),200),className:"flex items-center justify-center h-12 w-12 bg-yellow-400 text-gray-900 rounded-full font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:t.photoURL?d.jsx("img",{src:t.photoURL,alt:"Profile",className:"h-12 w-12 rounded-full object-cover"}):t.displayName?t.displayName.split(" ").map(l=>l[0]).join("").toUpperCase():d.jsx(ln,{className:"h-6 w-6"})}),s&&d.jsxs("div",{className:"absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-gray-100",children:[d.jsxs("div",{className:"px-4 py-3 border-b border-gray-200",children:[d.jsx("p",{className:"text-lg font-medium text-gray-900 truncate",children:t.displayName}),d.jsx("p",{className:"text-base text-gray-500 truncate",children:t.email})]}),d.jsxs("div",{className:"py-1",children:[d.jsxs("button",{onClick:()=>{n("browse"),i(!1)},className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(cf,{className:"h-5 w-5 mr-3"})," Browse Skills"]}),d.jsxs("button",{onClick:()=>{n("settings"),i(!1)},className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(_0,{className:"h-5 w-5 mr-3"})," Settings"]})]}),d.jsx("div",{className:"border-t border-gray-200 py-1",children:d.jsxs("button",{onClick:e,className:"flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150",children:[d.jsx(fu,{className:"h-5 w-5 mr-3"})," Log Out"]})})]})]})]})})}function Qy({user:t,profile:e,navigateTo:n,setDashboardPage:r}){const s=[{name:"Skills Learning",value:3,icon:fS},{name:"Skills Teaching",value:2,icon:uf},{name:"Community Points",value:150,icon:hS}];return d.jsxs("div",{children:[d.jsxs("h2",{className:"text-2xl font-semibold text-gray-700 mb-6",children:["Welcome back, ",t.displayName,"! Ready to learn and share skills?"]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-10",children:s.map(i=>d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg flex items-center",children:[d.jsx("div",{className:"p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4",children:d.jsx(i.icon,{className:"h-8 w-8"})}),d.jsxs("div",{children:[d.jsx("p",{className:"text-lg text-gray-500",children:i.name}),d.jsx("p",{className:"text-4xl font-bold text-gray-900",children:i.value})]})]},i.name))}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{className:"bg-yellow-400 p-8 rounded-lg shadow-lg text-gray-900",children:[d.jsx("h3",{className:"text-3xl font-bold mb-3",children:"Find Skills to Learn"}),d.jsx("p",{className:"text-lg mb-6",children:"Discover new skills in your neighborhood."}),d.jsx("button",{onClick:()=>n("browse"),className:"bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-700 transition",children:"Explore Skills"})]}),d.jsxs("div",{className:"bg-gray-900 p-8 rounded-lg shadow-lg text-white",children:[d.jsx("h3",{className:"text-3xl font-bold mb-3",children:"Share Your Skills"}),d.jsx("p",{className:"text-lg mb-6",children:"Teach others what you know."}),d.jsx("button",{onClick:()=>r("skills"),className:"bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-medium hover:bg-yellow-300 transition",children:"Start Teaching"})]})]})]})}function V2({profile:t,user:e}){const[n,r]=B.useState(t.name),[s,i]=B.useState(t.bio),[o,l]=B.useState(t.location),[u,h]=B.useState(null),[p,m]=B.useState(!1),[y,I]=B.useState(""),[A,C]=B.useState(t.photoURL||null),N=v=>{if(v.target.files[0]){const x=v.target.files[0];h(x),C(URL.createObjectURL(x))}},w=async v=>{if(v.preventDefault(),!!e){m(!0),I("Updating profile...");try{const x=vr(Ne,"users",e.uid);let D=t.photoURL||"";if(u){const V=nT(mp,`profile-pics/${e.uid}`);await eT(V,u),D=await tT(V)}await LE(x,{name:n,bio:s,location:o,photoURL:D}),await Ef(ft.currentUser,{displayName:n,photoURL:D}),I("Profile updated successfully!"),h(null)}catch(x){console.error("Error updating profile: ",x),I("Failed to update profile.")}finally{m(!1)}}};return d.jsxs("form",{onSubmit:w,className:"p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8",children:[d.jsxs("div",{className:"md:col-span-1 flex flex-col items-center",children:[d.jsxs("label",{htmlFor:"profile-pic",className:"cursor-pointer",children:[d.jsx("span",{className:"text-lg font-medium text-gray-900 mb-2 block text-center",children:"Profile Picture"}),A?d.jsx("img",{src:A,alt:"Profile",className:"h-40 w-40 rounded-full object-cover shadow-md"}):d.jsx("div",{className:"h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-500",children:d.jsx(ln,{className:"h-20 w-20"})}),d.jsxs("span",{className:"mt-3 flex items-center justify-center text-indigo-600 hover:text-indigo-500",children:[d.jsx(v0,{className:"h-5 w-5 mr-2"}),u?u.name:"Change picture"]})]}),d.jsx("input",{id:"profile-pic",type:"file",accept:"image/*",className:"sr-only",onChange:N})]}),d.jsxs("div",{className:"md:col-span-2 space-y-6",children:[d.jsx(zt,{id:"profileName",type:"text",value:n,onChange:r,placeholder:"Your Full Name",Icon:ln}),d.jsx(zt,{id:"profileLocation",type:"text",value:o,onChange:l,placeholder:"Your Neighborhood",Icon:pu}),d.jsx(Jo,{id:"profileBio",value:s,onChange:i,placeholder:"Tell your neighbors about yourself...",Icon:f0}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("button",{type:"submit",disabled:p,className:"flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition disabled:bg-gray-400",children:p?"Saving...":"Save Changes"}),y&&d.jsxs("span",{className:`flex items-center text-lg ${y.includes("Success")?"text-green-600":"text-red-600"}`,children:[d.jsx(h0,{className:"h-5 w-5 mr-2"}),y]})]})]})]})}function M2({user:t,profile:e}){const[n,r]=B.useState([]),[s,i]=B.useState(!0),[o,l]=B.useState(""),[u,h]=B.useState(""),[p,m]=B.useState("Monetary Fee");B.useEffect(()=>{i(!0);const I=ei(Rn(Ne,"skills"),Ql("teacherId","==",t.uid)),A=Do(I,C=>{const N=[];C.forEach(w=>{N.push({id:w.id,...w.data()})}),r(N),i(!1)});return()=>A()},[t.uid]);const y=async I=>{if(I.preventDefault(),!(!o||!u))try{await lp(Rn(Ne,"skills"),{teacherId:t.uid,teacherName:e.name,skillName:o,description:u,compensation:p,createdAt:ti()}),l(""),h(""),m("Monetary Fee")}catch(A){console.error("Error adding skill: ",A)}};return d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[d.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[d.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Add a New Skill"}),d.jsxs("form",{onSubmit:y,className:"space-y-4",children:[d.jsx(zt,{id:"skillName",type:"text",value:o,onChange:l,placeholder:"e.g., Guitar Lessons",Icon:c0}),d.jsx(Jo,{id:"skillDesc",value:u,onChange:h,placeholder:"Describe your skill and teaching style...",Icon:uf}),d.jsxs("div",{children:[d.jsx("label",{className:"block mb-2 text-lg font-medium text-gray-900",children:"Compensation"}),d.jsxs("select",{value:p,onChange:I=>m(I.target.value),className:"w-full text-lg p-3 rounded-lg bg-gray-50 border-2 border-gray-300 focus:outline-none focus:border-indigo-500",children:[d.jsx("option",{children:"Monetary Fee"}),d.jsx("option",{children:"Skill Exchange"}),d.jsx("option",{children:"Flexible"})]})]}),d.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition",children:[d.jsx(m0,{className:"h-6 w-6 mr-2"}),"Add Skill"]})]})]}),d.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[d.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Your Listed Skills"}),s?d.jsx("p",{children:"Loading skills..."}):n.length===0?d.jsx("p",{className:"text-lg text-gray-600",children:"You haven't listed any skills yet."}):d.jsx("div",{className:"space-y-4",children:n.map(I=>d.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[d.jsx("h3",{className:"text-xl font-bold text-gray-900",children:I.skillName}),d.jsx("p",{className:"text-gray-600",children:I.compensation})]},I.id))})]})]})}function j2({user:t,navigateTo:e,initialConvo:n}){const[r,s]=B.useState([]),[i,o]=B.useState(n||null),[l,u]=B.useState([]),[h,p]=B.useState(""),[m,y]=B.useState(!0);B.useEffect(()=>{y(!0);const C=ei(Rn(Ne,"conversations"),Ql("participants","array-contains",t.uid),jy("lastMessageAt","desc")),N=Do(C,w=>{const v=[];w.forEach(x=>{v.push({id:x.id,...x.data()})}),s(v),y(!1),n&&!v.find(x=>x.id===n.id)&&o(n)});return()=>N()},[t.uid,n]),B.useEffect(()=>{if(!i){u([]);return}const C=ei(Rn(Ne,"conversations",i.id,"messages"),jy("timestamp")),N=Do(C,w=>{const v=[];w.forEach(x=>{v.push({id:x.id,...x.data()})}),u(v)});return()=>N()},[i]);const I=async C=>{if(C.preventDefault(),!h.trim()||!i)return;const N=h;p("");try{await lp(Rn(Ne,"conversations",i.id,"messages"),{text:N,senderId:t.uid,timestamp:ti()}),await ap(vr(Ne,"conversations",i.id),{lastMessage:N,lastMessageAt:ti()},{merge:!0})}catch(w){console.error("Error sending message: ",w)}},A=C=>{const N=C.participants.find(w=>w!==t.uid);return C.participantNames[N]||"Unknown User"};return d.jsxs("div",{className:"flex flex-col md:flex-row h-[calc(100vh-200px)] border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white",children:[d.jsx("div",{className:"w-full md:w-1/3 border-r border-gray-300 bg-white overflow-y-auto",children:m?d.jsx("p",{className:"p-4",children:"Loading conversations..."}):r.length===0?d.jsx("p",{className:"p-4 text-gray-600",children:"No messages yet. Connect with a teacher to start a conversation."}):r.map(C=>d.jsxs("button",{onClick:()=>o(C),className:`w-full text-left p-4 border-b border-gray-200 ${(i==null?void 0:i.id)===C.id?"bg-indigo-50":"hover:bg-gray-50"}`,children:[d.jsx("h3",{className:"text-lg font-semibold",children:A(C)}),d.jsx("p",{className:"text-gray-600 truncate",children:C.lastMessage})]},C.id))}),d.jsx("div",{className:"w-full md:w-2/3 flex flex-col bg-white",children:i?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"p-4 border-b border-gray-300 bg-gray-50",children:d.jsx("h2",{className:"text-xl font-bold",children:A(i)})}),d.jsx("div",{className:"flex-grow p-4 space-y-4 overflow-y-auto",children:l.map(C=>d.jsx("div",{className:`flex ${C.senderId===t.uid?"justify-end":"justify-start"}`,children:d.jsx("div",{className:`p-3 rounded-lg max-w-xs lg:max-w-md ${C.senderId===t.uid?"bg-indigo-600 text-white":"bg-gray-200 text-gray-900"}`,children:C.text})},C.id))}),d.jsx("form",{onSubmit:I,className:"p-4 border-t border-gray-300 bg-gray-50",children:d.jsxs("div",{className:"flex space-x-3",children:[d.jsx("input",{type:"text",value:h,onChange:C=>p(C.target.value),placeholder:"Type your message...",className:"flex-grow text-lg p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"}),d.jsx("button",{type:"submit",className:"px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700",children:"Send"})]})})]}):d.jsx("div",{className:"flex-grow flex items-center justify-center",children:d.jsx("p",{className:"text-lg text-gray-500",children:"Select a conversation to start chatting."})})})]})}function U2({navigateTo:t,user:e}){return d.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg text-center",children:[d.jsx(du,{className:"h-16 w-16 text-indigo-300 mx-auto mb-4"}),d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-2",children:"My Favorites"}),d.jsx("p",{className:"text-lg text-gray-600 mb-6",children:"This is where you'll find all your saved skills and teachers. This feature is coming soon!"}),d.jsx("button",{onClick:()=>t("browse"),className:"bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:"Browse Skills"})]})}function rT(){const t=[{icon:wS,name:"1. Find a Skill",description:"Browse categories or search for any skill you want to learn, from coding to cooking to crafting."},{icon:gS,name:"2. Connect & Chat",description:"View a teacher's profile and start a secure, in-app conversation to ask questions and arrange a lesson."},{icon:TS,name:"3. Learn & Share",description:"Meet your local teacher and start learning! Pay with cash or exchange one of your own skills."}];return d.jsx("section",{className:"py-24 bg-white",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"text-center",children:[d.jsx("h2",{className:"text-4xl font-extrabold text-gray-900",children:"How Hyperlocal Works"}),d.jsx("p",{className:"mt-4 text-xl text-gray-600",children:"Start learning from your neighbors in just 3 simple steps."})]}),d.jsx("div",{className:"mt-20 grid gap-10 md:grid-cols-3",children:t.map(e=>d.jsxs("div",{className:"flex flex-col items-center text-center p-8 bg-gray-50 rounded-lg shadow-lg",children:[d.jsx("div",{className:"flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600",children:d.jsx(e.icon,{className:"h-8 w-8","aria-hidden":"true"})}),d.jsx("h3",{className:"mt-6 text-2xl font-bold text-gray-900",children:e.name}),d.jsx("p",{className:"mt-4 text-lg text-gray-600",children:e.description})]},e.name))})]})})}function F2(){return d.jsx("div",{className:"bg-indigo-50 py-24 pt-44",children:d.jsx(rT,{})})}function B2(){return d.jsx("section",{className:"py-24 bg-white pt-44",children:d.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"text-center",children:[d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900",children:"Our Mission"}),d.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"We believe that everyone has something to teach, and everyone has something to learn. Your neighborhood is filled with incredible talent, from bakers and coders to gardeners and guitarists."}),d.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"Hyperlocal was created to tap into that talent. Our mission is to build stronger, more connected communities by making skill sharing as easy as walking next door. We want to unlock the hidden expertise in every neighborhood, fostering a culture of mutual learning, respect, and growth—one skill at a time."}),d.jsx("p",{className:"mt-6 text-xl text-gray-700 leading-relaxed",children:"This platform is a Minimum Viable Product (MVP) focused on the core goal: connecting neighbors. We've intentionally excluded complex features like payment processing and scheduling to keep things simple and direct. It's all about the connection."})]})})})}function z2(){const t=[{q:"Is Hyperlocal free to use?",a:"Yes! The platform is completely free to use for both Learners and Teachers. Any compensation for lessons (monetary or skill-exchange) is arranged directly between users."},{q:"How do I get paid as a Teacher?",a:"As an MVP, we do not process payments. You arrange compensation directly with your Learner. You can request a monetary fee (via cash, Venmo, etc.) or a skill exchange. Be sure to agree on terms before you meet!"},{q:"How does messaging work?",a:"Our secure, in-app messaging system allows you to communicate with other users without sharing your personal phone number or email. When you click 'Connect' on a teacher's profile, a private conversation is created in your Dashboard."},{q:"Why isn't there a rating or review system?",a:"To keep our MVP lean and focused, we've excluded a formal rating system for now. We encourage you to use the in-app chat to get a feel for the teacher before scheduling a lesson."}];return d.jsx("section",{className:"py-24 bg-indigo-50 pt-44",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900 text-center mb-16",children:"Help Center (FAQ)"}),d.jsx("div",{className:"space-y-8",children:t.map((e,n)=>d.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:e.q}),d.jsx("p",{className:"text-lg text-gray-700 leading-relaxed",children:e.a})]},n))})]})})}function $2(){const[t,e]=B.useState(""),[n,r]=B.useState(""),[s,i]=B.useState(""),[o,l]=B.useState(!1),u=h=>{h.preventDefault(),console.log("Form submitted:",{name:t,email:n,message:s}),l(!0)};return d.jsx("section",{className:"py-24 bg-white pt-44",children:d.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900 text-center mb-6",children:"Contact Us"}),d.jsx("p",{className:"text-xl text-gray-600 text-center mb-12",children:"Have a question or feedback? We'd love to hear from you."}),o?d.jsxs("div",{className:"p-8 bg-green-50 border border-green-200 rounded-lg text-center",children:[d.jsx("h3",{className:"text-2xl font-bold text-green-800",children:"Message Sent!"}),d.jsx("p",{className:"text-lg text-green-700 mt-2",children:"Thanks for reaching out. We'll get back to you as soon as possible."})]}):d.jsxs("form",{onSubmit:u,className:"p-8 bg-gray-50 rounded-lg shadow-lg space-y-6",children:[d.jsx(zt,{id:"contact-name",type:"text",value:t,onChange:e,placeholder:"Your Name",Icon:ln}),d.jsx(zt,{id:"contact-email",type:"email",value:n,onChange:r,placeholder:"Your Email",Icon:p0}),d.jsx(Jo,{id:"contact-message",value:s,onChange:i,placeholder:"Your Message...",Icon:mu}),d.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center bg-indigo-600 text-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm",children:[d.jsx(y0,{className:"h-6 w-6 mr-2"}),"Send Message"]})]})]})})}function sT({navigateTo:t,currentUser:e,isDashboard:n=!1}){const[r,s]=B.useState([]),[i,o]=B.useState(!0),[l,u]=B.useState(""),[h,p]=B.useState({});B.useEffect(()=>{o(!0),setTimeout(()=>{s([{id:"post1",authorName:"Jane Doe",authorRole:"Learner",timestamp:"2 hours ago",content:"Just had my first guitar lesson with David L.! He was so patient and I already learned 3 chords. Can't wait for the next one!",likes:5,comments:[{id:"c1",authorName:"David L.",content:"You did great, Jane! Keep practicing!",timestamp:"1 hour ago"},{id:"c2",authorName:"Sarah K.",content:"That's awesome! I've been thinking of learning guitar too.",timestamp:"30 mins ago"}]},{id:"post2",authorName:"Mike P.",authorRole:"Teacher",timestamp:"1 day ago",content:`I have an opening for one more student for my "Intro to Python" skill session this weekend. We'll cover basics, variables, and loops. Message me if you're interested!`,likes:12,comments:[]}]),o(!1)},1e3)},[]);const m=N=>{if(N.preventDefault(),!l.trim())return;console.log("New post:",l);const w={id:`post${r.length+1}`,authorName:(e==null?void 0:e.displayName)||"Anonymous",authorRole:"Learner",timestamp:"Just now",content:l,likes:0,comments:[]};s([w,...r]),u("")},y=(N,w)=>{N.preventDefault();const v=h[w];if(!v||!v.trim())return;console.log("New comment for",w,":",v);const x={id:`c${Math.random()}`,authorName:(e==null?void 0:e.displayName)||"Anonymous",content:v,timestamp:"Just now"};s(r.map(D=>D.id===w?{...D,comments:[...D.comments,x]}:D)),p(D=>({...D,[w]:""}))},I=(N,w)=>{p(v=>({...v,[N]:w}))},A=n?"div":"section",C=n?{}:{className:"py-24 bg-gray-50 pt-44"};return d.jsx(A,{...C,children:d.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[!n&&d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900 text-center mb-12",children:"Community Forum"}),e&&d.jsx("form",{onSubmit:m,className:"mb-10",children:d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Share with your neighbors"}),d.jsx(Jo,{id:"new-post",value:l,onChange:u,placeholder:`What's on your mind, ${e.displayName}?`,Icon:mu}),d.jsxs("button",{type:"submit",className:"w-full mt-4 flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition",children:[d.jsx(y0,{className:"h-6 w-6 mr-2"}),"Post"]})]})}),i?d.jsx("p",{className:"text-center text-lg",children:"Loading posts..."}):d.jsx("div",{className:"space-y-8",children:r.map(N=>d.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[d.jsxs("div",{className:"flex items-center mb-4",children:[d.jsx("div",{className:"flex-shrink-0 h-12 w-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold",children:N.authorName.split(" ").map(w=>w[0]).join("").toUpperCase()}),d.jsxs("div",{className:"ml-4",children:[d.jsx("h4",{className:"text-xl font-bold text-gray-900",children:N.authorName}),d.jsxs("p",{className:"text-sm text-gray-500",children:[N.authorRole," • ",N.timestamp]})]})]}),d.jsx("p",{className:"text-lg text-gray-800 mb-4",children:N.content}),d.jsxs("div",{className:"flex items-center space-x-4 border-b border-t border-gray-200 py-3",children:[d.jsxs("button",{className:"flex items-center text-gray-600 hover:text-indigo-600",children:[d.jsx(_S,{className:"h-5 w-5 mr-2"})," ",N.likes," Likes"]}),d.jsxs("div",{className:"flex items-center text-gray-600",children:[d.jsx(yS,{className:"h-5 w-5 mr-2"})," ",N.comments.length," Comments"]})]}),d.jsx("div",{className:"mt-4 space-y-4",children:N.comments.map(w=>d.jsxs("div",{className:"flex",children:[d.jsx("div",{className:"flex-shrink-0 h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm",children:w.authorName.split(" ").map(v=>v[0]).join("").toUpperCase()}),d.jsxs("div",{className:"ml-3 bg-gray-100 p-3 rounded-lg flex-1",children:[d.jsxs("p",{className:"text-base",children:[d.jsx("span",{className:"font-bold text-gray-900",children:w.authorName})," ",w.content]}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:w.timestamp})]})]},w.id))}),e&&d.jsxs("form",{onSubmit:w=>y(w,N.id),className:"mt-4 flex space-x-3",children:[d.jsx("input",{type:"text",value:h[N.id]||"",onChange:w=>I(N.id,w.target.value),placeholder:"Write a comment...",className:"flex-grow text-base p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"}),d.jsx("button",{type:"submit",className:"px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700",children:"Reply"})]})]},N.id))})]})})}function H2({navigateTo:t,currentUser:e}){return d.jsx("section",{className:"py-24 bg-white min-h-screen pt-20",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900 text-center mb-12",children:"My Favorites"}),d.jsxs("div",{className:"bg-gray-50 p-8 rounded-lg shadow-inner text-center",children:[d.jsx(du,{className:"h-16 w-16 text-indigo-300 mx-auto mb-4"}),d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Coming Soon!"}),d.jsx("p",{className:"text-lg text-gray-600",children:"This is where you'll find all your saved skills and teachers."})]})]})})}function q2({navigateTo:t,currentUser:e,handleLogout:n}){const[r,s]=B.useState(null),[i,o]=B.useState(!0),[l,u]=B.useState(""),[h,p]=B.useState(""),[m,y]=B.useState(""),[I,A]=B.useState(null),[C,N]=B.useState(!1),[w,v]=B.useState(""),[x,D]=B.useState(null);B.useEffect(()=>{if(!e){o(!1);return}o(!0),(async()=>{const _=vr(Ne,"users",e.uid),T=await ip(_);if(T.exists()){const S=T.data();s(S),u(S.name),p(S.bio),y(S.location),D(S.photoURL||null)}else console.error("No profile found for settings page!");o(!1)})()},[e]);const U=E=>{if(E.target.files[0]){const _=E.target.files[0];A(_),D(URL.createObjectURL(_))}},V=async E=>{if(E.preventDefault(),!!e){N(!0),v("Updating profile...");try{const _=vr(Ne,"users",e.uid);let T=r.photoURL||"";if(I){const R=nT(mp,`profile-pics/${e.uid}`);await eT(R,I),T=await tT(R)}await LE(_,{name:l,bio:h,location:m,photoURL:T}),await Ef(ft.currentUser,{displayName:l,photoURL:T}),v("Profile updated successfully!"),A(null)}catch(_){console.error("Error updating profile: ",_),v("Failed to update profile.")}finally{N(!1)}}};return i?d.jsx("div",{className:"py-24 px-4 text-center min-h-screen flex items-center justify-center",children:d.jsx("p",{className:"text-lg text-gray-600",children:"Loading settings..."})}):d.jsx("section",{className:"py-24 bg-gray-50 min-h-screen pt-20",children:d.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsx("h2",{className:"text-5xl font-extrabold text-gray-900 mb-12",children:"Settings"}),d.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden divide-y divide-gray-200",children:[d.jsxs("form",{onSubmit:V,className:"p-6 grid grid-cols-1 md:grid-cols-3 gap-8",children:[d.jsxs("div",{className:"md:col-span-1 flex flex-col items-center",children:[d.jsxs("label",{htmlFor:"profile-pic",className:"cursor-pointer",children:[d.jsx("span",{className:"text-lg font-medium text-gray-900 mb-2 block text-center",children:"Profile Picture"}),x?d.jsx("img",{src:x,alt:"Profile",className:"h-40 w-40 rounded-full object-cover shadow-md"}):d.jsx("div",{className:"h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-500",children:d.jsx(ln,{className:"h-20 w-20"})}),d.jsxs("span",{className:"mt-3 flex items-center justify-center text-indigo-600 hover:text-indigo-500",children:[d.jsx(v0,{className:"h-5 w-5 mr-2"}),I?I.name:"Change picture"]})]}),d.jsx("input",{id:"profile-pic",type:"file",accept:"image/*",className:"sr-only",onChange:U})]}),d.jsxs("div",{className:"md:col-span-2 space-y-6",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"My Profile"}),d.jsx(zt,{id:"profileName",type:"text",value:l,onChange:u,placeholder:"Your Full Name",Icon:ln}),d.jsx(zt,{id:"profileLocation",type:"text",value:m,onChange:y,placeholder:"Your Neighborhood",Icon:pu}),d.jsx(Jo,{id:"profileBio",value:h,onChange:p,placeholder:"Tell your neighbors about yourself...",Icon:f0}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("button",{type:"submit",disabled:C,className:"flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition disabled:bg-gray-400",children:C?"Saving...":"Save Changes"}),w&&d.jsxs("span",{className:`flex items-center text-lg ${w.includes("Success")?"text-green-600":"text-red-600"}`,children:[d.jsx(h0,{className:"h-5 w-5 mr-2"}),w]})]})]})]}),d.jsxs("div",{className:"p-6",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Current Plan"}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("p",{className:"text-lg",children:["You are on the ",d.jsx("span",{className:"font-bold text-indigo-600",children:"Free Tier"})]}),d.jsx("button",{className:"bg-indigo-100 text-indigo-700 px-5 py-2 rounded-lg text-lg font-medium hover:bg-indigo-200 transition",children:"Upgrade (Coming Soon)"})]})]}),d.jsx("div",{className:"p-6",children:d.jsxs("button",{onClick:n,className:"w-full max-w-xs flex items-center justify-center bg-red-100 text-red-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-200 transition duration-150 ease-in-out",children:[d.jsx(fu,{className:"h-6 w-6 mr-2"}),"Log Out"]})})]})]})})}l0(document.getElementById("root")).render(d.jsx(B.StrictMode,{children:d.jsx(R2,{})}));
